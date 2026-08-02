#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const TECH_DIRS = ['Vanilla', 'React', 'Tailwind'];
const TECH_MAP = {
  'Vanilla': 'vanilla',
  'React': 'react',
  'Tailwind': 'tailwind'
};
const REVERSE_TECH_MAP = {
  'vanilla': 'Vanilla',
  'react': 'React',
  'tailwind': 'Tailwind'
};

const VALID_CATEGORIES = ['components', 'sections', 'pages', 'templates', 'utilities', 'assets'];

const CODE_EXTENSIONS = ['.html', '.js', '.jsx', '.tsx', '.css', '.ts', '.vue', '.svelte'];
const ASSET_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.otf'];

// Track all snippets and IDs for uniqueness checks
const allSnippets = [];
const allIds = new Set();
const allFolderNames = new Set();

// Validation results
const results = {
  passed: [],
  failed: []
};

const errors = [];

// Check if directory contains code files
function hasCodeFiles(dir) {
  try {
    const files = fs.readdirSync(dir);
    return files.some(file => {
      const ext = path.extname(file).toLowerCase();
      return CODE_EXTENSIONS.includes(ext);
    });
  } catch (e) {
    return false;
  }
}

// Get all snippet folders
function getSnippetFolders(baseDir) {
  const folders = [];
  
  function traverse(dir) {
    try {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          if (hasCodeFiles(fullPath)) {
            folders.push(fullPath);
          } else {
            traverse(fullPath);
          }
        }
      }
    } catch (e) {
      // Skip directories we can't read
    }
  }
  
  traverse(baseDir);
  return folders;
}

// Add error helper
function addError(snippetPath, problem) {
  const relPath = path.relative(path.join(__dirname, '..'), snippetPath);
  errors.push({ path: relPath, problem });
}

// Validate metadata.json
function validateMetadata(snippetPath, relativePath) {
  const metadataPath = path.join(snippetPath, 'metadata.json');
  const errors_found = [];
  
  // Check if metadata.json exists
  if (!fs.existsSync(metadataPath)) {
    errors_found.push('metadata.json does not exist');
    return { valid: false, errors: errors_found, metadata: null };
  }
  
  // Check if it's valid JSON
  let metadata;
  try {
    metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
  } catch (e) {
    errors_found.push('metadata.json is not valid JSON');
    return { valid: false, errors: errors_found, metadata: null };
  }
  
  // Check required fields
  const requiredFields = ['id', 'name', 'technology', 'category', 'subcategory', 'source'];
  for (const field of requiredFields) {
    if (!metadata[field]) {
      errors_found.push(`Missing required field: ${field}`);
    }
  }
  
  // Check source value
  if (metadata.source && metadata.source !== 'DevSnips') {
    errors_found.push(`source must be "DevSnips", got "${metadata.source}"`);
  }
  
  // Check arrays exist
  const requiredArrays = ['tags', 'browserSupport', 'dependencies'];
  for (const arr of requiredArrays) {
    if (!Array.isArray(metadata[arr])) {
      errors_found.push(`"${arr}" must be an array`);
    }
  }
  
  // Check responsive is boolean
  if (metadata.responsive !== undefined && typeof metadata.responsive !== 'boolean') {
    errors_found.push('responsive must be a boolean');
  }
  
  // Check technology matches folder
  const parts = relativePath.split(path.sep);
  const folderTech = parts[0];
  const expectedTech = TECH_MAP[folderTech];
  if (metadata.technology && metadata.technology !== expectedTech) {
    errors_found.push(`technology should be "${expectedTech}", got "${metadata.technology}"`);
  }
  
  // Check category matches folder
  const folderCategory = parts[1]?.toLowerCase();
  if (metadata.category && metadata.category !== folderCategory) {
    errors_found.push(`category should be "${folderCategory}", got "${metadata.category}"`);
  }
  
  // Check subcategory matches folder
  const folderSubcategory = parts[2]?.toLowerCase();
  if (metadata.subcategory && metadata.subcategory !== folderSubcategory) {
    errors_found.push(`subcategory should be "${folderSubcategory}", got "${metadata.subcategory}"`);
  }
  
  // Check for duplicate IDs
  if (metadata.id) {
    if (allIds.has(metadata.id)) {
      errors_found.push(`Duplicate ID: "${metadata.id}"`);
    }
    allIds.add(metadata.id);
  }
  
  return {
    valid: errors_found.length === 0,
    errors: errors_found,
    metadata
  };
}

// Validate README.md exists
function validateReadme(snippetPath) {
  const readmePath = path.join(snippetPath, 'README.md');
  if (!fs.existsSync(readmePath)) {
    return { valid: false, errors: ['README.md does not exist'] };
  }
  return { valid: true, errors: [] };
}

// Validate code files exist
function validateCodeFiles(snippetPath) {
  const errors_found = [];
  
  try {
    const files = fs.readdirSync(snippetPath);
    const codeFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return CODE_EXTENSIONS.includes(ext);
    });
    
    if (codeFiles.length === 0) {
      errors_found.push('No code files found in snippet folder');
    }
  } catch (e) {
    errors_found.push('Could not read snippet folder contents');
  }
  
  return {
    valid: errors_found.length === 0,
    errors: errors_found
  };
}

// Check for broken local asset references
function checkLocalAssets(snippetPath) {
  const errors_found = [];
  
  try {
    const files = fs.readdirSync(snippetPath);
    
    for (const file of files) {
      const filePath = path.join(snippetPath, file);
      const ext = path.extname(file).toLowerCase();
      
      // Only check code files
      if (!CODE_EXTENSIONS.includes(ext)) continue;
      
      // Read file content
      let content;
      try {
        content = fs.readFileSync(filePath, 'utf8');
      } catch (e) {
        continue;
      }
      
      // Check for local asset references
      // Images: src="..." or url(...)
      const imgRegex = /src=["']([^"']+)["']|url\(["']?([^"'\)]+)["']?\)/gi;
      let match;
      
      while ((match = imgRegex.exec(content)) !== null) {
        const reference = match[1] || match[2];
        
        // Skip external URLs
        if (reference && !reference.startsWith('http://') && 
            !reference.startsWith('https://') && 
            !reference.startsWith('//') &&
            !reference.startsWith('data:')) {
          
          // Skip SVG internal references like url(#gradient)
          if (reference.startsWith('#')) {
            continue;
          }
          
          // Check if it's an asset file
          const assetRef = reference.replace(/^\.\//, '').replace(/^\//, '');
          const assetPath = path.join(snippetPath, assetRef);
          
          // Skip common placeholder patterns common in snippet libraries
          // These are files that users are expected to replace with their own
          const skipPatterns = [
            /\.mp3$/i, /\.mp4$/i, /\.ogg$/i, /\.wav$/i, /\.webm$/i,  // Audio/video placeholders
            /\.jpg$/i, /\.jpeg$/i, /\.png$/i, /\.gif$/i,              // Common image placeholders
            /sample/i, /placeholder/i, /demo/i, /test/i,              // Common placeholder names
            /devsnips-logo/i                                           // Project logo placeholder
          ];
          
          const shouldSkip = skipPatterns.some(pattern => pattern.test(assetRef));
          
          if (!fs.existsSync(assetPath) && !shouldSkip) {
            errors_found.push(`Broken asset reference: ${assetRef} in ${file}`);
          }
        }
      }
      
      // Check for font references in CSS
      if (ext === '.css') {
        const fontRegex = /src:\s*url\(["']?([^"'\)]+)["']?\)/gi;
        while ((match = fontRegex.exec(content)) !== null) {
          const reference = match[1];
          
          if (reference && !reference.startsWith('http://') && 
              !reference.startsWith('https://') && 
              !reference.startsWith('//')) {
            
            // Skip SVG internal references like url(#gradient)
            if (reference.startsWith('#')) {
              continue;
            }
            
            const assetRef = reference.replace(/^\.\//, '').replace(/^\//, '');
            const assetPath = path.join(snippetPath, assetRef);
            
            // Skip common placeholder patterns common in snippet libraries
            const skipPatterns = [
              /\.mp3$/i, /\.mp4$/i, /\.ogg$/i, /\.wav$/i, /\.webm$/i,
              /\.jpg$/i, /\.jpeg$/i, /\.png$/i, /\.gif$/i,
              /sample/i, /placeholder/i, /demo/i, /test/i
            ];
            
            const shouldSkip = skipPatterns.some(pattern => pattern.test(assetRef));
            
            if (!fs.existsSync(assetPath) && !shouldSkip) {
              errors_found.push(`Broken font reference: ${assetRef} in ${file}`);
            }
          }
        }
      }
    }
  } catch (e) {
    // Silently fail on permission errors
  }
  
  return {
    valid: errors_found.length === 0,
    errors: errors_found
  };
}

// Check for duplicate folder names
function checkDuplicateFolderName(snippetPath) {
  const folderName = path.basename(snippetPath);
  
  if (allFolderNames.has(folderName)) {
    return {
      valid: false,
      errors: [`Duplicate folder name: "${folderName}"`]
    };
  }
  
  allFolderNames.add(folderName);
  return { valid: true, errors: [] };
}

// Main validation function
function validate() {
  const baseDir = path.join(__dirname, '..');
  
  console.log('DevSnips Validator');
  console.log('==================\n');
  
  // First pass: collect all snippets
  for (const techDir of TECH_DIRS) {
    const techPath = path.join(baseDir, techDir);
    
    if (!fs.existsSync(techPath)) {
      continue;
    }
    
    const snippets = getSnippetFolders(techPath);
    allSnippets.push(...snippets.map(s => ({
      path: s,
      tech: techDir
    })));
  }
  
  console.log(`Found ${allSnippets.length} snippets to validate\n`);
  
  // Second pass: validate each snippet
  let passedCount = 0;
  let failedCount = 0;
  
  for (const snippet of allSnippets) {
    const snippetPath = snippet.path;
    const relativePath = path.relative(baseDir, snippetPath);
    const allErrors = [];
    let isValid = true;
    
    // Check duplicate folder name
    const folderCheck = checkDuplicateFolderName(snippetPath);
    if (!folderCheck.valid) {
      allErrors.push(...folderCheck.errors);
      isValid = false;
    }
    
    // Validate metadata.json
    const metadataResult = validateMetadata(snippetPath, relativePath);
    if (!metadataResult.valid) {
      allErrors.push(...metadataResult.errors.map(e => `metadata: ${e}`));
      isValid = false;
    }
    
    // Validate README.md
    const readmeResult = validateReadme(snippetPath);
    if (!readmeResult.valid) {
      allErrors.push(...readmeResult.errors);
      isValid = false;
    }
    
    // Validate code files exist
    const codeResult = validateCodeFiles(snippetPath);
    if (!codeResult.valid) {
      allErrors.push(...codeResult.errors);
      isValid = false;
    }
    
    // Check for broken local assets
    const assetResult = checkLocalAssets(snippetPath);
    if (!assetResult.valid) {
      allErrors.push(...assetResult.errors);
      isValid = false;
    }
    
    if (isValid) {
      passedCount++;
      results.passed.push(snippetPath);
    } else {
      failedCount++;
      results.failed.push(snippetPath);
      for (const error of allErrors) {
        addError(snippetPath, error);
      }
    }
    
    // Log result
    const folderName = path.basename(snippetPath);
    if (isValid) {
      console.log(`  ✓ ${relativePath}`);
    } else {
      console.log(`  ✗ ${relativePath}`);
      for (const error of allErrors) {
        console.log(`    - ${error}`);
      }
    }
  }
  
  // Summary
  console.log('\n==================');
  console.log('Validation Summary');
  console.log('==================\n');
  console.log(`Passed snippets: ${passedCount}`);
  console.log(`Failed snippets: ${failedCount}`);
  
  if (errors.length > 0) {
    console.log('\nErrors:');
    for (const err of errors) {
      console.log(`- ${err.path}: ${err.problem}`);
    }
  }
  
  // Exit with appropriate code
  if (failedCount > 0) {
    console.log('\n❌ Validation FAILED');
    process.exit(1);
  } else {
    console.log('\n✓ All snippets passed validation');
    process.exit(0);
  }
}

// Run validation
if (require.main === module) {
  validate();
}

module.exports = { validate, getSnippetFolders, checkLocalAssets };
