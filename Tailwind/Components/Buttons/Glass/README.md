# Button — Glass

Frosted glass effect buttons using backdrop blur.

## Styles Included

| Style | Description |
|-------|-------------|
| **Glass Light** | Standard glass on gradient backgrounds |
| **Glass Colors** | Colored text variants |
| **Glass Dark** | Dark mode glass for dark backgrounds |
| **Glass with Glow** | Added shadow glow effect |
| **Glass Sizes** | Multiple size options |
| **Glass Icon** | Square icon buttons |

## CSS Requirements

```css
.glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
```

## Usage

```html
<!-- Glass Button -->
<button class="glass px-6 py-2.5 text-white font-medium rounded-lg 
               hover:bg-white/20 focus:outline-none focus:ring-2 
               focus:ring-white/50 transition-all">
  Glass Button
</button>

<!-- Glass with Glow -->
<button class="glass px-6 py-2.5 text-cyan-300 font-medium rounded-lg 
               hover:bg-cyan-500/20 ... 
               shadow-lg shadow-cyan-500/25">
  Cyan Glow
</button>
```

## When to Use

- Over gradient backgrounds
- Hero sections
- Dark mode interfaces
- Modal overlays
- Floating elements

## Browser Support

`backdrop-filter` requires:
- Chrome 76+
- Safari 9+
- Firefox 103+ (with flag)
- No IE/Edge Legacy support

## Files

- `Button-Glass.html` — Interactive preview
- `index.json` — Component metadata
