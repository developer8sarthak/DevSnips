const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

if (!fs.existsSync('scripts')) {
  fs.mkdirSync('scripts');
}

// 1. Move Pages and Templates folders to 'general' subcategory
function moveFolderToGeneral(category) {
  const dirPath = path.join('Vanilla', category);
  if (!fs.existsSync(dirPath)) return;

  const generalDir = path.join(dirPath, 'general');
  if (!fs.existsSync(generalDir)) {
    fs.mkdirSync(generalDir, { recursive: true });
  }

  const items = fs.readdirSync(dirPath);
  for (const item of items) {
    if (item === 'general') continue;

    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      const targetPath = path.join(generalDir, item);
      console.log(`Moving ${itemPath} to ${targetPath}...`);
      try {
        execSync(`git mv "${itemPath}" "${targetPath}"`, { stdio: 'ignore' });
      } catch (err) {
        try {
          fs.renameSync(itemPath, targetPath);
        } catch (renameErr) {
          console.error(`Failed to move ${itemPath}:`, renameErr);
        }
      }
    }
  }
}

console.log('Restructuring Pages and Templates to include "general" subcategory...');
moveFolderToGeneral('Pages');
moveFolderToGeneral('Templates');

// Load index mapping from snippets-index.json
let indexData = [];
try {
  if (fs.existsSync('snippets-index.json')) {
    indexData = JSON.parse(fs.readFileSync('snippets-index.json', 'utf8'));
    console.log(`Loaded ${indexData.length} records from snippets-index.json`);
  }
} catch (err) {
  console.error('Failed to load snippets-index.json:', err);
}

const indexMap = {};
indexData.forEach(item => {
  if (!item.path) return;
  const basename = path.basename(item.path, path.extname(item.path));
  const category = item.category || '';
  indexMap[basename.toLowerCase()] = item;
  indexMap[`${category.toLowerCase()}:${basename.toLowerCase()}`] = item;
});

function toTitleCase(kebabStr) {
  return kebabStr
    .split('-')
    .map(word => {
      if (word.toLowerCase() === '3d') return '3D';
      if (word.toLowerCase() === 'faq') return 'FAQ';
      if (word.toLowerCase() === 'html5') return 'HTML5';
      if (word.toLowerCase() === 'js') return 'JS';
      if (word.toLowerCase() === 'css') return 'CSS';
      if (word.toLowerCase() === 'svg') return 'SVG';
      if (word.toLowerCase() === '404') return '404';
      if (word.toLowerCase() === 'saas') return 'SaaS';
      if (word.toLowerCase() === 'ai') return 'AI';
      if (word.toLowerCase() === 'nft') return 'NFT';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

const usedIds = new Set();
const allowedTechnologies = ['Vanilla', 'React', 'Tailwind'];
const allowedCategories = ['components', 'sections', 'pages', 'templates', 'utilities', 'assets'];

// Collect snippet folders recursively
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

allowedTechnologies.forEach(tech => {
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

console.log(`Found ${allSnippets.length} snippets to process. Generating baseline files...`);

allSnippets.forEach(item => {
  const { dirPath, tech, category, subcategory, snippetFolder } = item;
  const cleanFolderName = snippetFolder.toLowerCase();
  let matchedRecord = indexMap[cleanFolderName] || null;

  const name = matchedRecord ? matchedRecord.name : toTitleCase(snippetFolder);
  const tags = matchedRecord ? matchedRecord.tags : [tech, category, subcategory];
  const description = matchedRecord ? matchedRecord.description : `Reusable ${name.toLowerCase()} snippet.`;

  let baseId = `${cleanFolderName}-001`;
  let counter = 1;
  while (usedIds.has(baseId)) {
    counter++;
    baseId = `${cleanFolderName}-${String(counter).padStart(3, '0')}`;
  }
  usedIds.add(baseId);

  const metadataFile = path.join(dirPath, 'metadata.json');
  const readmeFile = path.join(dirPath, 'README.md');

  if (!fs.existsSync(metadataFile)) {
    const metadataObj = {
      id: baseId,
      name: name,
      technology: tech,
      category: category,
      subcategory: subcategory,
      tags: tags,
      responsive: cleanFolderName.includes('responsive') || (tags && tags.includes('responsive')),
      browserSupport: ["chrome", "firefox", "safari", "edge"],
      dependencies: [],
      source: "DevSnips"
    };
    fs.writeFileSync(metadataFile, JSON.stringify(metadataObj, null, 2), 'utf8');
  } else {
    try {
      const existingMeta = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
      if (existingMeta && existingMeta.id) {
        usedIds.add(existingMeta.id);
      }
    } catch (e) {}
  }

  if (!fs.existsSync(readmeFile)) {
    const readmeContent = `# ${name}

${description}

## Technology
- ${tech}

## Category
- ${category}

## Subcategory
- ${subcategory}
`;
    fs.writeFileSync(readmeFile, readmeContent, 'utf8');
  }
});

console.log('All baseline metadata.json and README.md files generated successfully!');
