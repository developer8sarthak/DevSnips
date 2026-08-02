# Buttons Component Family

A comprehensive collection of button components organized by type and variant.

## Overview

This Button family contains **15 button types** with **36+ production-ready variants**. Each button type is its own folder with multiple variant subdirectories, making every page directly searchable and usable.

## Button Types

| Button Type | Variants | Best For |
|------------|----------|----------|
| **Basic Button** | Sizes | Primary actions, forms |
| **Ghost Button** | Soft, Primary, Dark | Toolbars, secondary nav |
| **Outline Button** | Soft, Primary, Dark, Full | Cards, forms, dialogs |
| **Filled Button** | Sizes | CTAs, emphasis |
| **Glass Button** | Soft, Primary, Dark, Icon | Hero sections, modals |
| **Gradient Button** | Basic, Animated, Border Gradient, With Icons | Landing pages, CTAs |
| **Neumorphism Button** | Soft, Pressed, Bordered | Modern soft interfaces |
| **Animated Button** | Loading, Arrow, Icon, Scale, Shine | Interactive elements |
| **Icon Button** | Basic, Rounded, Dark | Toolbars, social share |
| **Split Button** | Icon, Dropdown | File actions, menus |
| **Loading Button** | Spinner, Progress | Async operations |
| **Social Button** | Google, Facebook, GitHub | Auth, social features |
| **Floating Action Button** | Standard, Extended, Group | Mobile, quick actions |
| **3D Button** | Basic, Colored | Games, playful UIs |
| **Minimal Button** | Underline, Border | Clean interfaces |

## Structure

```
Buttons/
├── README.md                          # This file
├── index.json                         # Family metadata
├── Basic Button/
│   ├── README.md                      # Button type overview
│   ├── metadata.json                  # Button type metadata
│   └── sizes/
│       ├── preview.html               # Variant preview
│       ├── code.html                 # Copy-paste code
│       └── metadata.json             # Variant metadata
├── Ghost Button/
│   ├── README.md
│   ├── metadata.json
│   ├── soft/
│   ├── primary/
│   └── dark/
├── Gradient Button/
│   ├── README.md
│   ├── metadata.json
│   ├── basic/
│   ├── animated/
│   ├── border-gradient/
│   └── with-icons/
└── ... (other button types)
```

## How to Use

### Quick Start

1. Find the button type you need (e.g., "Gradient Button")
2. Browse the variants inside (e.g., "animated", "border-gradient")
3. Open `preview.html` to see the component
4. Copy from `code.html` for your project

### Searchable Components

Each button type and variant is a separate page:
- Search "Tailwind Gradient Button" → lands on Gradient Button/basic
- Search "Animated Arrow Button" → lands on Animated Button/arrow
- Search "Facebook Social Login" → lands on Social Button/facebook

### Tailwind Setup

All buttons use Tailwind CSS utility classes:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

## Accessibility

All buttons include:
- ✅ Visible focus rings (`focus:ring-*`)
- ✅ Minimum 44×44px touch targets
- ✅ Proper `aria-label` for icon buttons
- ✅ `disabled` state styling
- ✅ Keyboard navigation support

## Related Components

- [Cards](../Cards/) — Cards that contain buttons
- [Forms](../Forms/) — Forms with button submissions
- [Navigation](../Navigation/) — Navbars and menus with buttons

---

Built with ❤️ for the DevSnips community
