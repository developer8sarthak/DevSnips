# Button — Icon

Buttons with icons in various layouts.

## Styles Included

| Style | Description |
|-------|-------------|
| **Icon Only** | Square and circular icon buttons |
| **Icon + Text** | Icon left or right of label |
| **Icon Sizes** | Extra small to large |
| **Social Icons** | Twitter, GitHub, LinkedIn, etc. |
| **Icon Groups** | Toolbar and pagination groups |

## Usage

```html
<!-- Icon Only -->
<button class="p-2.5 bg-blue-600 text-white rounded-lg ..." aria-label="Add new">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
  </svg>
</button>

<!-- Icon Left -->
<button class="inline-flex items-center gap-2 px-4 py-2 ...">
  <svg class="w-5 h-5">...</svg>
  Download
</button>

<!-- Icon Right -->
<button class="inline-flex items-center gap-2 px-4 py-2 ...">
  Learn More
  <svg class="w-5 h-5">...</svg>
</button>
```

## Accessibility

Always add `aria-label` for icon-only buttons:

```html
<button class="p-2" aria-label="Delete item">
  <svg>...</svg>
</button>
```

## Icon Sizes

| Size | Padding | Icon Size |
|------|---------|-----------|
| xs | `p-1.5` | `w-4 h-4` |
| sm | `p-2` | `w-5 h-5` |
| md | `p-3` | `w-6 h-6` |
| lg | `p-4` | `w-7 h-7` |

## Files

- `Button-Icon.html` — Interactive preview
- `index.json` — Component metadata
