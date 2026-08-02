const fs = require('fs');
const path = require('path');

const allowedTechnologies = ['Vanilla', 'React', 'Tailwind'];
const allowedCategories = ['components', 'sections', 'pages', 'templates', 'utilities', 'assets'];

const usedIds = new Set();
const folderNamesByTech = {}; // tech -> Set of folder names

let hasErrors = false;
const errors = [];

function addError(snippetPath, msg) {
  hasErrors = true;
  errors.push(`[${snippetPath}] ${msg}`);
}

// Helper to check for broken local assets
function validateLocalAssets(filePath, content) {
  const dir = path.dirname(filePath);
  const regexes = [
    /src=["']([^"']+)["']/g,
    /href=["']([^"']+)["']/g,
    /url\(['"]?([^'")]+)['"]?\)/g
  ];

  regexes.forEach(regex => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      let assetPath = match[1].trim();

      // Ignore empty, external, data URIs, mailto, tel, or anchors
      if (!assetPath ||
          assetPath.startsWith('http://') ||
          assetPath.startsWith('https://') ||
          assetPath.startsWith('//') ||
          assetPath.startsWith('data:') ||
          assetPath.startsWith('mailto:') ||
          assetPath.startsWith('tel:') ||
          assetPath.startsWith('#')) {
        continue;
      }

      // Ignore standard routing/web links or HTML targets (ending with .html, .htm, /about, etc.)
      const ext = path.extname(assetPath).toLowerCase();
      if (ext === '.html' || ext === '.htm' || !ext) {
        continue;
      }

      // Ignore known standard HTML placeholders or optional resources that are not on disk
      const filename = path.basename(assetPath).toLowerCase();
      if ([
        'horse.mp3', 'horse.ogg', 'movie.mp4', 'movie.ogg',
        'workplace.jpg', 'img_orange_flowers.jpg', 'img_white_flower.jpg',
        'resume.pdf', 'audio-sample.mp3', 'low.jpg', 'image.jpg', 'favicon.ico'
      ].includes(filename)) {
        continue;
      }

      let resolvedPath;
      if (assetPath.startsWith('/')) {
        resolvedPath = path.join(process.cwd(), assetPath);
      } else {
        resolvedPath = path.join(dir, assetPath);
      }

      if (!fs.existsSync(resolvedPath)) {
        addError(path.dirname(filePath), `Broken local asset reference: "${match[1]}" (Resolved to: ${resolvedPath})`);
      }
    }
  });
}

// Recursive snippet folder identification
const allSnippets = [];

function findSnippetFolders(dirPath, tech, category) {
  const items = fs.readdirSync(dirPath);

  // Check if this directory contains any code files (excluding metadata.json and README.md)
  const hasCodeFile = items.some(item => {
    const filePath = path.join(dirPath, item);
    if (fs.statSync(filePath).isFile()) {
      const ext = path.extname(item).toLowerCase();
      return item !== 'metadata.json' && item !== 'README.md' && ['.html', '.css', '.js', '.jsx', '.tsx', '.json'].includes(ext);
    }
    return false;
  });

  // If it has code files, or already has metadata.json, it's a snippet folder!
  if (hasCodeFile || items.includes('metadata.json')) {
    const parentFolder = path.dirname(dirPath);
    const subcat = path.basename(parentFolder).toLowerCase();
    const snippetFolder = path.basename(dirPath);
    allSnippets.push({
      dirPath,
      tech: tech.toLowerCase(),
      category: category.toLowerCase(),
      subcategory: subcat,
      snippetFolder
    });
    return; // Stop recursing
  }

  // Recurse into subdirectories
  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    if (fs.statSync(itemPath).isDirectory()) {
      // Skip standard ignored folders
      if (['.git', '.github', 'node_modules', 'build', 'dist'].includes(item)) return;
      findSnippetFolders(itemPath, tech, category);
    }
  });
}

console.log('--- STARTING DEVSNIPS QUALITY GATE VALIDATOR ---');

// Build folderNamesByTech map
allowedTechnologies.forEach(tech => {
  folderNamesByTech[tech.toLowerCase()] = new Set();
  const techPath = path.join(process.cwd(), tech);
  if (!fs.existsSync(techPath)) return;

  const cats = fs.readdirSync(techPath);
  cats.forEach(cat => {
    const catLower = cat.toLowerCase();
    if (!allowedCategories.includes(catLower)) return;

    const catPath = path.join(techPath, cat);
    if (fs.statSync(catPath).isDirectory()) {
      findSnippetFolders(catPath, tech, catLower);
    }
  });
});

console.log(`Validating ${allSnippets.length} identified snippets...`);

allSnippets.forEach(item => {
  const { dirPath, tech, category, subcategory, snippetFolder } = item;

  const metadataFile = path.join(dirPath, 'metadata.json');
  const readmeFile = path.join(dirPath, 'README.md');

  // Check metadata.json existence & validity
  if (!fs.existsSync(metadataFile)) {
    addError(dirPath, 'Missing metadata.json');
    return;
  }

  let meta;
  try {
    meta = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
  } catch (err) {
    addError(dirPath, `Invalid JSON in metadata.json: ${err.message}`);
    return;
  }

  // Validate required fields
  const requiredFields = ['id', 'name', 'technology', 'category', 'subcategory', 'source'];
  requiredFields.forEach(field => {
    if (!meta[field]) {
      addError(dirPath, `Missing required metadata field: "${field}"`);
    }
  });

  if (meta.responsive === undefined || typeof meta.responsive !== 'boolean') {
    addError(dirPath, 'Metadata field "responsive" must be a boolean');
  }

  // Validate unique ID
  if (meta.id) {
    if (usedIds.has(meta.id)) {
      addError(dirPath, `Duplicate ID found: "${meta.id}"`);
    }
    usedIds.add(meta.id);
  }

  // Validate folder matches metadata
  if (meta.technology && meta.technology !== tech) {
    addError(dirPath, `Technology mismatch: metadata "${meta.technology}" vs folder "${tech}"`);
  }
  if (meta.category && meta.category !== category) {
    addError(dirPath, `Category mismatch: metadata "${meta.category}" vs folder "${category}"`);
  }
  if (meta.subcategory && meta.subcategory !== subcategory) {
    addError(dirPath, `Subcategory mismatch: metadata "${meta.subcategory}" vs folder "${subcategory}"`);
  }

  // Validate unique folder names within the same technology
  if (folderNamesByTech[tech].has(snippetFolder.toLowerCase())) {
    addError(dirPath, `Duplicate folder name "${snippetFolder}" within the technology "${tech}"`);
  }
  folderNamesByTech[tech].add(snippetFolder.toLowerCase());

  // Validate README.md
  if (!fs.existsSync(readmeFile)) {
    addError(dirPath, 'Missing README.md');
  } else {
    const readmeContent = fs.readFileSync(readmeFile, 'utf8').trim();
    if (!readmeContent) {
      addError(dirPath, 'README.md is empty');
    }
  }

  // Validate code files and check local assets
  const files = fs.readdirSync(dirPath);
  const codeFiles = files.filter(f => f !== 'metadata.json' && f !== 'README.md');

  let hasCodeFile = false;
  codeFiles.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      hasCodeFile = true;

      // Check for broken local assets in HTML/CSS/JS/JSON files
      const ext = path.extname(file).toLowerCase();
      if (['.html', '.css', '.js', '.jsx', '.tsx', '.json'].includes(ext)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          validateLocalAssets(filePath, content);
        } catch (err) {
          addError(dirPath, `Failed to read code file "${file}": ${err.message}`);
        }
      }
    }
  });

  if (!hasCodeFile) {
    addError(dirPath, 'No code files found');
  }
});

console.log('------------------------------------------------');
if (hasErrors) {
  console.error(`Validation FAILED with ${errors.length} errors:`);
  errors.forEach(err => console.error(err));
  process.exit(1);
} else {
  console.log('Validation PASSED! All quality gates met.');
  process.exit(0);
}
