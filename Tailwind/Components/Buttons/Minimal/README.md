# Button — Minimal

Minimal button styles for clean, uncluttered interfaces.

## Styles Included

| Style | Description |
|-------|-------------|
| **Text Buttons** | Text-only with hover states |
| **Underlined** | Animated underline on hover |
| **Squish** | Scale down on click |
| **Simple** | Minimal gray/blue variants |
| **Sizes** | Extra small through large |
| **Pills** | Rounded minimal pills |

## Usage

```html
<!-- Text Button -->
<button class="text-blue-600 font-medium hover:text-blue-700 
               hover:underline focus:outline-none ...">
  Text Button
</button>

<!-- Squish Button -->
<button class="px-6 py-3 text-gray-700 font-medium rounded-lg 
               hover:bg-gray-100 active:bg-gray-200 
               active:scale-95 focus:outline-none ...">
  Squish Effect
</button>

<!-- Animated Underline -->
<button class="text-purple-600 font-medium relative group ...">
  <span>Animated Underline</span>
  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 
               group-hover:w-full transition-all duration-300"></span>
</button>
```

## When to Use

- Clean, minimal UIs
- Navigation menus
- Secondary actions
- Dense layouts
- Sidebars
- Toolbars

## Comparison

| Style | Weight | Use Case |
|-------|--------|----------|
| Text | Lightest | Inline actions |
| Underline | Light | Links, navigation |
| Squish | Medium | Interactive feedback |
| Simple | Medium | Form actions |

## Files

- `Button-Minimal.html` — Interactive preview
- `index.json` — Component metadata
