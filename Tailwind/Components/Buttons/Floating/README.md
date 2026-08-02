# Button — Floating

Floating action buttons (FAB) for primary actions.

## Styles Included

| Style | Description |
|-------|-------------|
| **Basic FAB** | Standard circular FAB |
| **FAB Variants** | Primary, secondary, danger, outline |
| **FAB Sizes** | Small through extra-large |
| **Extended FAB** | Pill-shaped with text |
| **Animated FAB** | Pulse, float, rotate effects |
| **Speed Dial** | Expandable FAB menu |

## Usage

```html
<!-- Standard FAB -->
<button class="p-4 bg-blue-600 text-white rounded-full 
               hover:bg-blue-700 float-shadow transition-all" 
        aria-label="Add new">
  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
  </svg>
</button>

<!-- Extended FAB -->
<button class="inline-flex items-center gap-3 px-5 py-3 bg-blue-600 
               text-white font-medium rounded-2xl ...">
  <svg class="w-5 h-5">...</svg>
  Create
</button>
```

## CSS Requirements

```css
.float-shadow {
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.25);
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
.animate-float { animation: float 3s ease-in-out infinite; }
```

## FAB Sizes

| Size | Padding | Icon | Use Case |
|------|---------|------|----------|
| sm | `p-2` | 16px | Compact UI |
| md | `p-3` | 20px | Default |
| lg | `p-4` | 24px | Standard |
| xl | `p-5` | 28px | Hero/Feature |

## When to Use

- Primary action on mobile
- Quick action toolbar
- Floating menus
- Create/Add actions
- Chat/messenger apps

## Accessibility

- Always use `aria-label` for icon-only FABs
- FABs should be at least 48x48px for touch
- Consider `prefers-reduced-motion` for animations

## Files

- `Button-Floating.html` — Interactive preview
- `index.json` — Component metadata
