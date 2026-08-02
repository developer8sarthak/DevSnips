# Button — Basic

Foundation button styles with semantic color variants.

## Styles Included

| Style | Description |
|-------|-------------|
| **Primary** | Blue primary buttons for main actions |
| **Secondary** | Gray, indigo, and violet for secondary actions |
| **Neutral** | Light/dark variants for different backgrounds |
| **Sizes** | Extra small through extra large |
| **Full Width** | Block-level buttons |

## Usage

```html
<!-- Primary Button -->
<button class="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg 
               hover:bg-blue-700 focus:outline-none focus:ring-2 
               focus:ring-blue-500 focus:ring-offset-2 transition-colors">
  Default
</button>

<!-- Disabled State -->
<button class="..." disabled>
  Disabled
</button>
```

## Size Classes

| Size | Classes |
|------|---------|
| Small | `px-3 py-1.5 text-xs rounded-md` |
| Default | `px-4 py-2 text-sm rounded-lg` |
| Large | `px-6 py-3 text-base rounded-lg` |
| Extra Large | `px-8 py-4 text-lg rounded-xl` |

## Accessibility

- Always include `focus:outline-none` and focus ring for keyboard navigation
- Use `focus:ring-offset-2` for visibility on various backgrounds
- Disabled buttons should use the `disabled` attribute

## Files

- `Button-Basic.html` — Interactive preview
- `index.json` — Component metadata
