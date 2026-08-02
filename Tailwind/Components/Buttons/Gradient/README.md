# Button — Gradient

Buttons with gradient backgrounds.

## Styles Included

| Style | Description |
|-------|-------------|
| **Linear Gradients** | Basic two-color gradients |
| **Multi-Stop** | Three or more color spectrums |
| **Directional** | All 8 gradient directions |
| **With Shadow** | Gradient + colored shadow glow |
| **Pills** | Rounded full gradient buttons |
| **Dark Background** | Light gradients for dark UIs |

## Usage

```html
<!-- Two-Color Gradient -->
<button class="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-500 
               text-white font-medium rounded-lg hover:opacity-90 ...">
  Gradient Button
</button>

<!-- Multi-Stop Spectrum -->
<button class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
  Spectrum
</button>

<!-- Gradient with Glow -->
<button class="bg-gradient-to-r from-blue-500 to-purple-500 
               shadow-lg shadow-purple-500/30 ...">
  With Glow
</button>
```

## Gradient Direction Reference

| Direction | Class |
|-----------|-------|
| ↓ (default) | `to-r` |
| ← | `to-l` |
| ↑ | `to-t` |
| → | `to-b` |
| ↘ | `to-br` |
| ↙ | `to-bl` |
| ↖ | `to-tl` |
| ↗ | `to-tr` |

## When to Use

- Call-to-action buttons
- Primary actions on landing pages
- Hero sections
- Feature highlights
- Brand accent buttons

## Files

- `Button-Gradient.html` — Interactive preview
- `index.json` — Component metadata
