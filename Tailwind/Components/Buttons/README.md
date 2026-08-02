# Buttons Component Family

A comprehensive collection of button styles organized as a design system component family.

## Overview

This Button family contains **15 production-ready variants**, each with multiple styles and states. Instead of hundreds of nearly identical snippets, this family provides 15 excellent button variants that cover every use case.

## Component Variants

| Variant | Description | Best For |
|---------|-------------|----------|
| **Basic** | Foundation buttons with semantic colors | Primary actions, forms |
| **Ghost** | Transparent with hover background | Toolbars, secondary nav |
| **Outline** | Bordered with transparent background | Cards, forms, dialogs |
| **Filled** | Solid colors with soft variants | CTAs, emphasis |
| **Glass** | Frosted glass with backdrop blur | Hero sections, modals |
| **Neumorphism** | Soft UI shadow effects | Modern soft interfaces |
| **Gradient** | Multi-color gradient backgrounds | Landing pages, CTAs |
| **Animated** | Hover and click animations | Interactive elements |
| **Icon** | Icon buttons and icon+text | Toolbars, social share |
| **Split** | Button with dropdown | File actions, menus |
| **Loading** | Spinner and progress states | Async operations |
| **Social** | OAuth login and share buttons | Auth, social features |
| **Floating** | Floating action buttons (FAB) | Mobile, quick actions |
| **3D** | Depth effect with push animation | Games, playful UIs |
| **Minimal** | Text-only and subtle styles | Clean interfaces |

## Structure

```
Buttons/
├── README.md                    # This file
├── index.json                   # Family metadata
├── Basic/
│   ├── Button-Basic.html        # Preview
│   ├── index.json               # Variant metadata
│   └── README.md                # Usage guide
├── Ghost/
│   ├── Button-Ghost.html
│   ├── index.json
│   └── README.md
├── ... (other variants)
└── Minimal/
    ├── Button-Minimal.html
    ├── index.json
    └── README.md
```

## How to Use

### Quick Start

1. Browse the variant folders
2. Open the HTML preview file
3. Copy the button styles you need
4. Customize colors and sizes for your brand

### Using as a Design System

Each variant is self-contained with:
- **HTML Preview**: See all styles in action
- **Metadata (index.json)**: Searchable component data
- **Documentation (README.md)**: Usage guidelines and code snippets

### Tailwind Setup

All buttons use Tailwind CSS utility classes. Add to your `<head>`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

For custom colors, update your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          500: '#your-color',
          600: '#your-darker-color',
        }
      }
    }
  }
}
```

## Contribution Guidelines

### Adding a New Variant

1. Create a new folder under `Buttons/`
2. Add `Button-<Variant>.html` with interactive preview
3. Add `index.json` with variant metadata
4. Add `README.md` with usage documentation
5. Update `index.json` at family root

### Variant Requirements

Each variant must include:

- ✅ Semantic HTML with proper tags
- ✅ Accessible focus states
- ✅ Hover and active states
- ✅ Disabled state styling
- ✅ Responsive design
- ✅ Proper contrast ratios
- ✅ Keyboard navigation support
- ✅ Touch-friendly sizes (min 44x44px)

### Code Standards

- Use **2-space indentation**
- Use semantic color names (blue-600 not custom-500)
- Include `focus:outline-none focus:ring-*` for accessibility
- Use `transition-*` for smooth state changes
- Keep CSS in `<style>` tags for self-contained snippets
- Use SVG icons from Heroicons or similar

### Preview Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Button - <Variant> | DevSnips</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 min-h-screen p-8">
  <!-- Component: Button / <Variant> -->
  <section class="max-w-4xl mx-auto space-y-12">
    <header class="border-b pb-4">
      <h1 class="text-3xl font-bold text-gray-900">Button — <Variant></h1>
      <p class="text-gray-600 mt-2">Description of this variant</p>
    </header>
    
    <!-- Style sections -->
    <div class="space-y-4">
      <h2 class="text-lg font-semibold text-gray-800">Style Name</h2>
      <div class="p-6 bg-white rounded-xl shadow-sm">
        <!-- Buttons here -->
      </div>
    </div>
  </section>
</body>
</html>
```

### Metadata Template (index.json)

```json
{
  "name": "Button - <Variant>",
  "family": "Buttons",
  "variant": "<Variant>",
  "description": "Description of the variant",
  "category": "Components",
  "subcategory": "Buttons",
  "tech": "Tailwind CSS",
  "styles": [
    "Style 1",
    "Style 2"
  ],
  "features": [
    "Feature 1",
    "Feature 2"
  ],
  "accessibility": {
    "focus": "Visible focus ring",
    "aria": "Use disabled attribute"
  },
  "responsive": true,
  "files": [
    {
      "name": "Button-<Variant>.html",
      "type": "preview",
      "description": "Interactive preview"
    }
  ]
}
```

## Accessibility Checklist

- [ ] Visible focus indicator (ring or outline)
- [ ] Minimum touch target of 44x44px
- [ ] Sufficient color contrast (4.5:1 for text)
- [ ] `aria-label` for icon-only buttons
- [ ] `disabled` attribute for disabled state
- [ ] `cursor: pointer` for interactive buttons
- [ ] `prefers-reduced-motion` consideration for animations

## Related Components

- [Cards](../Cards/) — Cards that contain buttons
- [Forms](../Forms/) — Forms with button submissions
- [Navigation](../Navigation/) — Navbars and menus with buttons

---

Built with ❤️ for the DevSnips community
