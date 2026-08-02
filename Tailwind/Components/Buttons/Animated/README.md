# Button — Animated

Buttons with hover and click animations.

## Styles Included

| Style | Description |
|-------|-------------|
| **Shine Effect** | Light sweep on hover |
| **Scale** | Grow on hover |
| **Bounce** | Bounce up on hover |
| **Wiggle** | Shake left/right |
| **Slide** | Arrow slide, text slide, fill |
| **Glow** | Colored shadow glow |
| **Neon** | Flickering neon border |
| **Pulse** | Pulsing ring animation |
| **Ripple** | Click ripple effect |

## CSS Requirements

```css
/* Shine Effect */
.btn-shine::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}
.btn-shine:hover::before { left: 100%; }

/* Pulse Ring */
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}
```

## Usage

```html
<!-- Shine Button -->
<button class="btn-shine relative overflow-hidden px-6 py-2.5 
               bg-blue-600 text-white font-medium rounded-lg ...">
  Shine Effect
</button>

<!-- Arrow Slide -->
<button class="inline-flex items-center gap-2 px-6 py-2.5 ...">
  Arrow Slide
  <svg class="arrow w-5 h-5 transition-transform group-hover:translate-x-1">...</svg>
</button>

<!-- Neon -->
<button class="border-2 border-cyan-400 text-cyan-400 
               shadow-[0_0_10px_rgba(34,211,238,0.5)] ...">
  Cyan Neon
</button>
```

## Accessibility

Consider `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Files

- `Button-Animated.html` — Interactive preview
- `index.json` — Component metadata
