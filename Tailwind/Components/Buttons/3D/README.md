# Button — 3D

3D depth effect buttons with push animation.

## Styles Included

| Style | Description |
|-------|-------------|
| **Push 3D** | Shadow creates depth, button moves down on click |
| **Extruded** | Raised appearance with offset shadow |
| **Inset** | Pressed-in appearance |
| **Border 3D** | 3D border effect using border colors |
| **Sizes** | Multiple size options |
| **Icons** | 3D buttons with icons |

## CSS Requirements

```css
.btn-3d {
  position: relative;
  transition: all 0.1s;
}
.btn-3d:active {
  top: 4px; /* Push down on click */
}
.btn-3d-blue {
  background: #2563eb;
  box-shadow: 0 4px 0 #1d4ed8, 0 6px 10px rgba(37, 99, 235, 0.3);
}
```

## Usage

```html
<!-- Push 3D Button -->
<button class="btn-3d btn-3d-blue px-6 py-3 text-white font-bold rounded-lg 
               focus:outline-none transition-all">
  3D Button
</button>

<!-- Extruded Button -->
<button class="btn-3d btn-extruded px-6 py-3 text-gray-700 font-bold rounded-lg ...">
  Extruded
</button>
```

## Depth Guide

| Size | Shadow | Push Distance |
|------|--------|---------------|
| sm | `0 2px 0` | 2px |
| md | `0 3px 0` | 3px |
| lg | `0 4px 0` | 4px |
| xl | `0 5px 0` | 5px |

## When to Use

- Game UIs
- Playful interfaces
- Call-to-action buttons
- Interactive elements
- Mobile game buttons

## Files

- `Button-3D.html` — Interactive preview
- `index.json` — Component metadata
