# Button — Ghost

Transparent buttons that reveal background on hover.

## Styles Included

| Style | Description |
|-------|-------------|
| **Ghost Primary** | Blue text with hover background |
| **Ghost Colors** | Red, green, amber, purple, pink variants |
| **Ghost Dark** | White/gray variants for dark backgrounds |
| **Ghost Sizes** | Multiple size options |
| **Icon Ghost** | Ghost buttons with icons |

## Usage

```html
<!-- Ghost Button -->
<button class="px-6 py-2.5 text-blue-600 font-medium rounded-lg 
               hover:bg-blue-50 focus:outline-none focus:ring-2 
               focus:ring-blue-500 transition-colors">
  Ghost Button
</button>

<!-- Ghost with Icon -->
<button class="inline-flex items-center gap-2 px-4 py-2 
               text-gray-700 font-medium rounded-lg 
               hover:bg-gray-100 focus:outline-none focus:ring-2 
               focus:ring-gray-500 transition-colors">
  <svg class="w-5 h-5">...</svg>
  With Icon
</button>
```

## When to Use

- Secondary actions in toolbars
- Navigation where subtle interactions are needed
- Dense UI where multiple buttons exist
- Sidebar navigation items

## Files

- `Button-Ghost.html` — Interactive preview
- `index.json` — Component metadata
