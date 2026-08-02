# Button — Loading

Buttons with loading states and indicators.

## Styles Included

| Style | Description |
|-------|-------------|
| **Spinner** | Rotating SVG spinner |
| **Pulse** | Pulsing dot indicator |
| **Bounce** | Bouncing icon animation |
| **Dots** | Animated ellipsis text |
| **Block** | Full-width loading state |
| **Icon** | Square icon button loading |

## CSS Requirements

```css
@keyframes spin {
  to { transform: rotate(360deg); }
}
.animate-spin { animation: spin 1s linear infinite; }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}
.animate-pulse { animation: pulse 2s ease-in-out infinite; }
```

## Usage

```html
<!-- Spinner Button -->
<button class="inline-flex items-center gap-2 px-4 py-2 ..." disabled>
  <svg class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="..."></path>
  </svg>
  Loading...
</button>

<!-- Pulse Indicator -->
<button class="inline-flex items-center gap-2 ..." disabled>
  <span class="relative flex h-3 w-3">
    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
    <span class="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
  </span>
  Connecting...
</button>
```

## When to Use

- Form submissions
- API calls
- File uploads
- Data synchronization
- Any async operation

## JavaScript Integration

```js
// Toggle loading state
button.disabled = true;
button.innerHTML = `
  <svg class="animate-spin">...</svg>
  Loading...
`;

// Reset after completion
button.disabled = false;
button.innerHTML = 'Submit';
```

## Files

- `Button-Loading.html` — Interactive preview
- `index.json` — Component metadata
