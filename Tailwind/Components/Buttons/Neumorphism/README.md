# Button — Neumorphism

Soft UI buttons with convex and concave shadow effects.

## Styles Included

| Style | Description |
|-------|-------------|
| **Neumorphism Flat** | Standard soft shadows |
| **Neumorphism Convex** | Raised appearance |
| **Neumorphism Concave** | Sunken appearance |
| **Neumorphism Toggle** | Active/inactive states |
| **Neumorphism Sizes** | Multiple size options |
| **Neumorphism Pill** | Rounded pill shape |
| **Neumorphism Icon** | Circular icon buttons |

## CSS Requirements

```css
.neu-convex {
  background: linear-gradient(145deg, #f6f9fc, #ced4db);
  box-shadow: 8px 8px 16px #b8b9be, -8px -8px 16px #ffffff;
}

.neu-pressed {
  background: #e0e5ec;
  box-shadow: inset 6px 6px 12px #b8b9be, inset -6px -6px 12px #ffffff;
}
```

## Usage

```html
<!-- Convex Button -->
<button class="neu-convex neu-button px-6 py-2.5 text-gray-700 
               font-medium rounded-xl transition-all duration-200">
  Convex Button
</button>

<!-- Pressed State (for toggles) -->
<button class="neu-pressed px-6 py-2.5 text-blue-500 font-medium rounded-xl">
  Pressed
</button>
```

## Shadow Direction Guide

| Effect | Light Shadow | Dark Shadow |
|--------|-------------|-------------|
| Convex | Bottom-right | Top-left |
| Concave | Top-left | Bottom-right |
| Flat | Balanced | Balanced |

## When to Use

- Soft UI design systems
- Light neutral backgrounds
- Interactive toggles
- Toolbars and controls

## Files

- `Button-Neumorphism.html` — Interactive preview
- `index.json` — Component metadata
