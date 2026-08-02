# Button — Social

Social media login and share buttons.

## Styles Included

| Style | Description |
|-------|-------------|
| **Full OAuth** | Google, GitHub, Facebook, Apple, Twitter |
| **Social Icons** | Share buttons with brand colors |
| **Share Bar** | Centered share button group |
| **OAuth Row** | Compact icon-only OAuth buttons |

## Usage

```html
<!-- Google OAuth -->
<button class="inline-flex items-center gap-3 px-6 py-3 bg-white 
               border border-gray-300 text-gray-700 font-medium rounded-lg ...">
  <svg class="w-5 h-5" viewBox="0 0 24 24">
    <path fill="#4285F4" d="..."/>
    <path fill="#34A853" d="..."/>
    <path fill="#FBBC05" d="..."/>
    <path fill="#EA4335" d="..."/>
  </svg>
  Continue with Google
</button>

<!-- Share Button -->
<button class="p-3 bg-[#1DA1F2] text-white rounded-lg ..." aria-label="Share on Twitter">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="..."/>
  </svg>
</button>
```

## Brand Colors

| Platform | Color |
|----------|-------|
| Twitter/X | `#1DA1F2` / `#000000` |
| Facebook | `#1877F2` |
| GitHub | `#24292e` |
| LinkedIn | `#0A66C2` |
| Instagram | `#E4405F` |
| YouTube | `#FF0000` |
| WhatsApp | `#25D366` |
| Discord | `#7289DA` |
| Google | Multi-color |

## Accessibility

Always add `aria-label` for icon-only buttons:

```html
<button aria-label="Share on Twitter">...</button>
```

## Files

- `Button-Social.html` — Interactive preview
- `index.json` — Component metadata
