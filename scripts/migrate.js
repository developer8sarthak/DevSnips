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

const CATEGORIES = ['components', 'sections', 'pages', 'templates', 'utilities', 'assets'];

const CODE_EXTENSIONS = ['.html', '.js', '.jsx', '.tsx', '.css', '.ts', '.vue', '.svelte'];

// Track generated IDs to ensure uniqueness
const generatedIds = new Set();

// Common icon libraries
const ICON_LIBRARIES = [
  'font-awesome', 'fa-', 'fab ', 'fas ', 'far ', 'fal ',
  'material-icons', 'mi-', 'material-symbols',
  'lucide', 'lucide-react',
  'heroicons', '@heroicons',
  'feather-icons', 'feather ',
  'ion-icon', 'ion-',
  'bootstrap-icons', 'bi-',
  'tabler-icons'
];

// Common external dependencies
const COMMON_DEPENDENCIES = [
  'gsap', 'greensock',
  'chart.js', 'chartjs',
  'three.js', 'threejs',
  'aos', 'animate.css',
  'swiper', 'slick',
  'owl.carousel', 'owlcarousel',
  'particles.js', 'particlesjs',
  'typed.js', 'masonry',
  'isotope', 'fancybox', 'lightbox'
];

// Framework feature patterns
const REACT_HOOKS = ['useState', 'useEffect', 'useContext', 'useReducer', 'useCallback', 
  'useMemo', 'useRef', 'useImperativeHandle', 'useLayoutEffect', 'useDebugValue',
  'useForm', 'useHistory', 'useLocation', 'useParams', 'useRouteMatch', 'useNavigate'];

const TAILWIND_PATTERNS = ['grid-cols-', 'flex-', 'w-', 'h-', 'p-', 'm-', 'text-', 'bg-', 
  'rounded-', 'shadow-', 'hover:', 'focus:', 'md:', 'lg:', 'sm:', 'xl:', 'dark:', 'container',
  'mx-auto', 'justify-', 'items-', 'space-', 'gap-', 'block', 'inline', 'absolute', 'relative',
  'sticky', 'fixed', 'z-', 'transition', 'animate-', 'duration-', 'ease-'];

// Keywords for tag extraction based on folder/content patterns
const TAG_KEYWORDS = {
  // Animations & Effects
  'animation': ['animation', 'animate', 'keyframe', 'transition', 'transform', 'keyframes'],
  'hover-effect': ['hover', ':hover', 'onhover'],
  'glassmorphism': ['glass', 'backdrop-filter', 'blur', 'frosted'],
  'gradient': ['gradient', 'linear-gradient', 'radial-gradient', 'conic-gradient'],
  'shadow': ['shadow', 'box-shadow', 'drop-shadow', 'neumorphic'],
  'parallax': ['parallax', 'scroll-behavior'],
  'typing-effect': ['typing', 'typewriter', 'caret', 'blink'],
  'ripple': ['ripple', 'ripple-effect'],
  'pulse': ['pulse', 'pulsing'],
  'bounce': ['bounce', 'bouncing'],
  
  // Layout
  'responsive': ['@media', 'responsive', 'breakpoint', 'mobile'],
  'flexbox': ['display: flex', 'flex-direction', 'flex-wrap', 'flex-grow', 'flex-shrink'],
  'grid': ['display: grid', 'grid-template', 'grid-col', 'grid-gap', 'subgrid'],
  'center': ['center', 'middle', 'align-center', 'justify-center'],
  'layout': ['layout', 'container', 'wrapper', 'section'],
  
  // Components
  'button': ['button', 'btn', 'submit', 'click'],
  'form': ['form', 'input', 'select', 'textarea', 'checkbox', 'radio'],
  'card': ['card', 'card-body', 'card-header', 'card-footer'],
  'modal': ['modal', 'dialog', 'popup', 'overlay'],
  'dropdown': ['dropdown', 'select', 'option', 'combobox'],
  'navbar': ['navbar', 'nav', 'header', 'navigation', 'menu'],
  'sidebar': ['sidebar', 'sidenav', 'aside'],
  'tabs': ['tab', 'tabbed', 'tab-content'],
  'accordion': ['accordion', 'collapsible', 'details', 'summary'],
  'carousel': ['carousel', 'slider', 'swipe', 'slides'],
  'tooltip': ['tooltip', 'hover-text', 'popover'],
  'badge': ['badge', 'notification', 'count', 'indicator'],
  'loader': ['loader', 'spinner', 'loading', 'skeleton', 'progress'],
  'table': ['table', 'thead', 'tbody', 'tr', 'td', 'th'],
  'pagination': ['pagination', 'pager', 'page-nav'],
  
  // Styling
  'dark-mode': ['dark-mode', 'dark-theme', '[data-theme]', '.dark'],
  'theming': ['theme', 'theming', 'css-variables', 'custom-property', 'custom-properties'],
  'typography': ['font', 'text', 'typography', 'heading', 'paragraph', 'line-height', 'letter-spacing'],
  'color': ['color', 'background', 'fill', 'stroke'],
  'border': ['border', 'outline', 'radius', 'rounded'],
  'image': ['image', 'img', 'picture', 'src', 'alt'],
  'video': ['video', 'embed', 'iframe', 'youtube', 'vimeo'],
  'icon': ['icon', 'svg', 'symbol'],
  
  // Interactive
  'click': ['click', 'onclick', 'addEventListener'],
  'scroll': ['scroll', 'onscroll', 'intersection'],
  'drag': ['drag', 'drop', 'draggable', 'dragover'],
  'keyboard': ['keyboard', 'keydown', 'keyup', 'keypress', 'focus', 'tabindex'],
  'touch': ['touch', 'touchstart', 'touchend', 'swipe'],
  'validation': ['validate', 'validation', 'required', 'pattern', 'error'],
  'accessibility': ['aria-', 'accessible', 'a11y', 'screen-reader', 'sr-only', 'role='],
  
  // Utilities
  'utility': ['helper', 'utility', 'function', 'utils'],
  'api': ['fetch', 'axios', 'api', 'http', 'request', 'response'],
  'storage': ['localStorage', 'sessionStorage', 'cookie', 'IndexedDB'],
  'date': ['date', 'time', 'datetime', 'timestamp', 'moment'],
  'array': ['array', 'filter', 'map', 'reduce', 'forEach'],
  'string': ['string', 'trim', 'split', 'replace', 'regex'],
  'debounce': ['debounce', 'throttle', 'rate-limit'],
  'clipboard': ['clipboard', 'copy', 'paste', 'execCommand'],
  'scroll-behavior': ['scroll-behavior', 'smooth', 'scrollTo'],
  
  // HTML/CSS
  'semantic': ['semantic', 'header', 'footer', 'main', 'article', 'section', 'nav', 'aside'],
  'form-element': ['form', 'fieldset', 'legend', 'label', 'datalist', 'output', 'meter', 'progress'],
  'media-query': ['@media', 'min-width', 'max-width'],
  'css-variable': ['var(--', '--variable', 'custom-property'],
  'container-query': ['@container', 'container-type', 'container-name'],
  'pseudo-class': ['::before', '::after', ':first', ':last', ':nth-', ':hover', ':focus', ':active'],
  
  // Page types
  'landing-page': ['landing', 'hero', 'cta', 'call-to-action'],
  'portfolio': ['portfolio', 'gallery', 'showcase', 'work'],
  'blog': ['blog', 'post', 'article', 'cms'],
  'ecommerce': ['product', 'shop', 'cart', 'checkout', 'pricing'],
  'dashboard': ['dashboard', 'admin', 'analytics', 'stats'],
  'login': ['login', 'signin', 'signup', 'register', 'auth', 'password'],
  '404': ['404', 'not-found', 'error-page'],
  'coming-soon': ['coming-soon', 'under-construction', 'maintenance'],
  
  // Advanced features
  'web-components': ['custom-elements', 'web-components', 'shadow-dom', 'customElement'],
  'canvas': ['canvas', '2d-context', 'draw', 'ctx.'],
  'svg': ['svg', '<svg', 'vector'],
  'clip-path': ['clip-path', 'mask', 'shape'],
  'backdrop-filter': ['backdrop-filter', 'filter: blur'],
  'aspect-ratio': ['aspect-ratio', 'aspect-ratio-box'],
  'container-queries': ['@container', 'cqw', 'cqh', 'cqi'],
  'modern-css': ['clamp(', 'min(', 'max(', 'color-mix', '@property']
};

// Get all snippet folders
function getSnippetFolders(baseDir) {
  const folders = [];
  
  function traverse(dir, depth = 0) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        // Check if this directory contains code files
        const hasCodeFiles = fs.readdirSync(fullPath).some(file => {
          const ext = path.extname(file).toLowerCase();
          return CODE_EXTENSIONS.includes(ext);
        });
        
        if (hasCodeFiles) {
          // This is a snippet folder
          folders.push(fullPath);
        } else {
          // Continue traversing
          traverse(fullPath, depth + 1);
        }
      }
    }
  }
  
  traverse(baseDir);
  return folders;
}

// Convert folder name to a URL-friendly slug
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Generate a unique ID for a snippet
function generateId(folderName, technology, existingIds) {
  const baseSlug = slugify(folderName);
  
  // Try with suffix starting at 001
  let counter = 1;
  let id = `${baseSlug}-${String(counter).padStart(3, '0')}`;
  
  // Keep incrementing until we find a unique ID
  while (existingIds.has(id)) {
    counter++;
    id = `${baseSlug}-${String(counter).padStart(3, '0')}`;
  }
  
  existingIds.add(id);
  return id;
}

// Extract category and subcategory from path
function extractCategoryInfo(relativePath) {
  const parts = relativePath.split(path.sep);
  
  // Parts should be like: ['Vanilla', 'Components', 'Buttons', 'snippet-name']
  if (parts.length < 3) {
    return { category: 'unknown', subcategory: 'unknown' };
  }
  
  // Category is the second part (index 1)
  const category = parts[1].toLowerCase();
  // Subcategory is the third part (index 2)
  const subcategory = parts[2].toLowerCase();
  
  // Validate category
  const validCategory = CATEGORIES.includes(category) ? category : 'other';
  
  return { category: validCategory, subcategory };
}

// Read all code files in a folder
function readCodeFiles(snippetPath) {
  const files = fs.readdirSync(snippetPath);
  let content = '';
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (CODE_EXTENSIONS.includes(ext)) {
      try {
        content += fs.readFileSync(path.join(snippetPath, file), 'utf8') + '\n';
      } catch (e) {
        // Skip files that can't be read
      }
    }
  }
  
  return content;
}

// Generate tags based on folder name and code content
function generateTags(folderName, content, technology) {
  const tags = new Set();
  const folderLower = folderName.toLowerCase();
  
  // Extract words from folder name
  const folderWords = folderLower.split(/[-_]/);
  
  // Check folder name for keywords
  for (const [tag, keywords] of Object.entries(TAG_KEYWORDS)) {
    for (const keyword of keywords) {
      if (folderLower.includes(keyword) || folderWords.some(w => w === keyword || keyword.includes(w))) {
        tags.add(tag);
        break;
      }
    }
  }
  
  // Check code content for additional tags
  const contentLower = content.toLowerCase();
  
  for (const [tag, keywords] of Object.entries(TAG_KEYWORDS)) {
    if (tags.has(tag)) continue; // Already added from folder name
    
    for (const keyword of keywords) {
      if (contentLower.includes(keyword)) {
        tags.add(tag);
        break;
      }
    }
  }
  
  // Add technology-specific tags
  if (technology === 'react') {
    REACT_HOOKS.forEach(hook => {
      if (content.includes(hook)) {
        tags.add(hook.toLowerCase().replace('use', ''));
      }
    });
    
    // React component patterns
    if (content.includes('function ') || content.includes('=>')) {
      tags.add('component');
    }
    if (content.includes('jsx') || content.includes('{') && content.includes('<')) {
      tags.add('jsx');
    }
  }
  
  if (technology === 'tailwind') {
    TAILWIND_PATTERNS.forEach(pattern => {
      if (content.includes(pattern)) {
        if (pattern === 'dark:') tags.add('dark-mode');
        else if (pattern.includes('animate-')) tags.add('animation');
        else if (pattern.includes('hover:') || pattern.includes('focus:')) tags.add('hover-effect');
        else if (pattern.includes('md:') || pattern.includes('lg:') || pattern.includes('sm:')) tags.add('responsive');
        else tags.add('tailwind');
      }
    });
    
    // Tailwind class patterns in HTML
    const tailwindMatch = content.match(/class=["'][^"']*\s(w-|h-|p-|m-|flex|grid|text-|bg-|rounded|shadow)/gi);
    if (tailwindMatch) {
      tags.add('tailwind');
    }
  }
  
  // Check for framework/library features
  ICON_LIBRARIES.forEach(lib => {
    if (contentLower.includes(lib)) {
      tags.add('icons');
    }
  });
  
  // Check for external dependencies
  COMMON_DEPENDENCIES.forEach(dep => {
    if (contentLower.includes(dep)) {
      tags.add(dep.toLowerCase().replace('.js', ''));
    }
  });
  
  // Ensure at least one tag from folder name
  if (tags.size === 0) {
    folderWords.forEach(word => {
      if (word.length > 2) {
        tags.add(word);
      }
    });
  }
  
  return Array.from(tags).slice(0, 8); // Limit to 8 tags
}

// Detect responsive features
function detectResponsive(content) {
  const patterns = [
    /@media/i,
    /@container/i,
    /min-width/i,
    /max-width/i,
    /responsive/i,
    /viewport/i,
    /flex-wrap/i,
    /grid-template.*auto/i,
    /clamp\(/i,
    /min\(/i,
    /max\(/i,
    /calc\(/i,
    /100vw/i,
    /100vh/i,
    /percent/i,
    /rem\s/i,
    /em\s/i,
    /vw/i,
    /vh/i,
    /dvw/i,
    /dvh/i,
    /container/i
  ];
  
  return patterns.some(pattern => pattern.test(content));
}

// Detect browser support based on features used
function detectBrowserSupport(content, technology) {
  const browsers = ['chrome', 'firefox', 'safari', 'edge'];
  const features = [];
  
  // Modern CSS features that may have limited support
  const modernFeatures = {
    'chrome': ['@property', 'color-mix', 'container-type', 'view-transition', 'anchor-positioning'],
    'firefox': ['@property', 'color-mix', 'scroll-driven', 'animation-timeline'],
    'safari': ['@property', 'color-mix', 'container-type', 'view-transition'],
    'edge': ['@property', 'color-mix', 'container-type', 'view-transition', 'anchor-positioning']
  };
  
  // Check for modern features
  for (const [browser, featureList] of Object.entries(modernFeatures)) {
    for (const feature of featureList) {
      if (content.includes(feature)) {
        features.push(feature);
      }
    }
  }
  
  // If no modern features detected, assume full support
  if (features.length === 0) {
    return browsers;
  }
  
  // Check CSS feature queries
  if (content.includes('@supports')) {
    // @supports queries indicate modern features with partial support
    return ['chrome', 'firefox', 'safari', 'edge'];
  }
  
  return browsers;
}

// Detect dependencies from code content
function detectDependencies(content) {
  const dependencies = [];
  const contentLower = content.toLowerCase();
  
  // Check for CDN links
  const cdnPatterns = [
    /src=["']([^"']*jquery[^"']*)["']/i,
    /src=["']([^"']*bootstrap[^"']*)["']/i,
    /src=["']([^"']*fontawesome[^"']*)["']/i,
    /src=["']([^"']*googleapis[^"']*)["']/i,
    /src=["']([^"']*gsap[^"']*)["']/i,
    /src=["']([^"']*chart[^"']*)["']/i,
    /src=["']([^"']*three[^"']*)["']/i,
    /src=["']([^"']*aos[^"']*)["']/i,
    /src=["']([^"']*swiper[^"']*)["']/i,
    /src=["']([^"']*lottie[^"']*)["']/i,
    /src=["']([^"']*anime[^"']*)["']/i,
    /src=["']([^"']*masonry[^"']*)["']/i,
    /src=["']([^"']*axios[^"']*)["']/i,
    /src=["']([^"']*react[^"']*)["']/i,
    /src=["']([^"']*vue[^"']*)["']/i,
    /src=["']([^"']*tailwind[^"']*)["']/i,
    /src=["']([^"']*phosphor[^"']*)["']/i,
    /src=["']([^"']*lucide[^"']*)["']/i
  ];
  
  const foundDeps = new Set();
  
  cdnPatterns.forEach(pattern => {
    const match = content.match(pattern);
    if (match && match[1]) {
      const url = match[1];
      let name = '';
      
      if (url.includes('jquery')) name = 'jQuery';
      else if (url.includes('bootstrap')) name = 'Bootstrap';
      else if (url.includes('fontawesome')) name = 'Font Awesome';
      else if (url.includes('googleapis')) name = 'Google Fonts';
      else if (url.includes('gsap') || url.includes('greensock')) name = 'GSAP';
      else if (url.includes('chart')) name = 'Chart.js';
      else if (url.includes('three')) name = 'Three.js';
      else if (url.includes('aos')) name = 'AOS';
      else if (url.includes('swiper')) name = 'Swiper';
      else if (url.includes('lottie')) name = 'Lottie';
      else if (url.includes('anime')) name = 'Anime.js';
      else if (url.includes('masonry')) name = 'Masonry.js';
      else if (url.includes('axios')) name = 'Axios';
      else if (url.includes('react')) name = 'React';
      else if (url.includes('vue')) name = 'Vue.js';
      else if (url.includes('tailwind')) name = 'Tailwind CSS';
      else if (url.includes('phosphor')) name = 'Phosphor Icons';
      else if (url.includes('lucide')) name = 'Lucide Icons';
      
      if (name && !foundDeps.has(name)) {
        foundDeps.add(name);
        dependencies.push(name);
      }
    }
  });
  
  // Check for font references
  if (content.includes('@font-face') || content.includes('font-family')) {
    const fontMatches = content.match(/font-family:\s*['"]([^'"]+)['"]/gi);
    if (fontMatches) {
      fontMatches.forEach(match => {
        const font = match.replace(/font-family:\s*['"]?/gi, '').replace(/['"]/g, '').trim();
        if (font && font !== 'inherit' && font !== 'initial' && !foundDeps.has(font)) {
          dependencies.push(font);
          foundDeps.add(font);
        }
      });
    }
  }
  
  return dependencies;
}

// Generate description based on folder name and content
function generateDescription(folderName, content, technology) {
  // Convert folder name to readable description
  const words = folderName.split(/[-_]/).map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  );
  
  let baseDesc = words.join(' ');
  
  // Enhance description based on content analysis
  if (content.includes('@media')) {
    baseDesc += ' with responsive design';
  }
  
  if (content.includes('animation') || content.includes('transition')) {
    baseDesc += ' with animations';
  }
  
  if (content.includes('hover') || content.includes(':hover')) {
    baseDesc += ' and hover interactions';
  }
  
  if (content.includes('dark-mode') || content.includes('dark-theme')) {
    baseDesc += ', supports dark mode';
  }
  
  if (technology === 'react') {
    baseDesc += ' - React component';
  } else if (technology === 'tailwind') {
    baseDesc += ' - Tailwind CSS';
  }
  
  return baseDesc + '.';
}

// Create metadata.json content
function createMetadata(snippetPath, technology, relativePath) {
  const parts = relativePath.split(path.sep);
  const folderName = parts[parts.length - 1];
  
  const { category, subcategory } = extractCategoryInfo(relativePath);
  const id = generateId(folderName, technology, generatedIds);
  
  // Read code content for intelligent analysis
  const content = readCodeFiles(snippetPath);
  
  // Generate smart metadata fields
  const tags = generateTags(folderName, content, technology);
  const responsive = detectResponsive(content);
  const browserSupport = detectBrowserSupport(content, technology);
  const dependencies = detectDependencies(content);
  const description = generateDescription(folderName, content, technology);
  
  return {
    id,
    name: folderName.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' '),
    description,
    technology,
    category,
    subcategory,
    tags,
    responsive,
    browserSupport,
    dependencies,
    source: 'DevSnips'
  };
}

// Create README content with more detail
function createReadme(metadata) {
  return `# ${metadata.name}

${metadata.description || 'A DevSnips snippet.'}

**Technology:** ${metadata.technology}
**Category:** ${metadata.category}
**Subcategory:** ${metadata.subcategory}

${metadata.tags && metadata.tags.length > 0 ? `**Tags:** ${metadata.tags.join(', ')}` : ''}

${metadata.dependencies && metadata.dependencies.length > 0 ? `**Dependencies:** ${metadata.dependencies.join(', ')}` : ''}

**Responsive:** ${metadata.responsive ? 'Yes' : 'No'}
`;
}

// Process all technology directories
function migrate() {
  const baseDir = path.join(__dirname, '..');
  const stats = {
    snippetsFound: 0,
    metadataCreated: 0,
    readmeCreated: 0,
    skipped: 0
  };
  
  console.log('DevSnips Migration Script (Enhanced)');
  console.log('==================================\n');
  
  for (const techDir of TECH_DIRS) {
    const techPath = path.join(baseDir, techDir);
    
    if (!fs.existsSync(techPath)) {
      console.log(`Skipping ${techDir} - directory not found`);
      continue;
    }
    
    console.log(`Processing ${techDir}...`);
    const technology = TECH_MAP[techDir];
    const snippetFolders = getSnippetFolders(techPath);
    
    for (const folder of snippetFolders) {
      stats.snippetsFound++;
      
      const relativePath = path.relative(baseDir, folder);
      
      // Check for existing metadata.json
      const metadataPath = path.join(folder, 'metadata.json');
      const readmePath = path.join(folder, 'README.md');
      
      let metadataCreated = false;
      let readmeCreated = false;
      
      // Generate metadata.json if missing
      if (!fs.existsSync(metadataPath)) {
        const metadata = createMetadata(folder, technology, relativePath);
        fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
        metadataCreated = true;
        stats.metadataCreated++;
      } else {
        stats.skipped++;
      }
      
      // Generate README.md if missing
      if (!fs.existsSync(readmePath)) {
        // Get the metadata we just created or read existing
        let metadata;
        if (metadataCreated) {
          metadata = createMetadata(folder, technology, relativePath);
        } else {
          try {
            metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
            // Track existing IDs
            if (metadata.id) {
              generatedIds.add(metadata.id);
            }
          } catch (e) {
            metadata = createMetadata(folder, technology, relativePath);
          }
        }
        
        fs.writeFileSync(readmePath, createReadme(metadata));
        readmeCreated = true;
        stats.readmeCreated++;
      }
      
      // Log progress
      const folderName = path.basename(folder);
      if (metadataCreated || readmeCreated) {
        console.log(`  ✓ ${folderName}`);
      }
    }
  }
  
  console.log('\n==================================');
  console.log('Migration Complete!');
  console.log(`Snippets found: ${stats.snippetsFound}`);
  console.log(`Metadata files created: ${stats.metadataCreated}`);
  console.log(`README files created: ${stats.readmeCreated}`);
  console.log(`Skipped (existing): ${stats.skipped}`);
  
  return stats;
}

// Run migration
if (require.main === module) {
  migrate();
}

module.exports = { migrate, getSnippetFolders, generateId };
