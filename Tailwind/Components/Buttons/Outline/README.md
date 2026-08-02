# Button — Outline

Bordered buttons with transparent backgrounds.

## Styles Included

| Style | Description |
|-------|-------------|
| **Outline Primary** | Standard bordered blue buttons |
| **Outline Colors** | Red, green, amber, purple, dark variants |
| **Thick Border** | Bold 3px borders with invert hover |
| **Dashed Border** | Dashed line style for subtle emphasis |
| **Rounded Pill** | Full rounded corners |
| **Outline on Dark** | White/colored outlines for dark backgrounds |

## Usage

```html
<!-- Standard Outline -->
<button class="px-6 py-2.5 border-2 border-blue-600 text-blue-600 
               font-medium rounded-lg hover:bg-blue-50 
               focus:outline-none focus:ring-2 focus:ring-blue-500 
               focus:ring-offset-2 transition-colors">
  Outline Button
</button>

<!-- Dashed Border -->
<button class="px-6 py-3 border-2 border-dashed border-gray-400 
               text-gray-600 font-medium rounded-lg 
               hover:border-gray-600 hover:text-gray-900 ...">
  Dashed Outline
</button>

<!-- Thick Border with Hover Invert -->
<button class="px-6 py-3 border-[3px] border-gray-900 text-gray-900 
               font-semibold rounded-lg 
               hover:bg-gray-900 hover:text-white ...">
  Invert on Hover
</button>
```

## When to Use

- Secondary actions that need visual separation
- Forms and input groups
- Modal dialogs
- Card-based layouts
- Creating visual hierarchy

## Files

- `Button-Outline.html` — Interactive preview
- `index.json` — Component metadata
