# 🚀 DevSnips – Component Library

Reusable frontend components organized as design system families.

## Structure

```
├── Tailwind/
│   ├── Components/            # 12 families, 253 variants
│   │   ├── Accordions/        # 15 variants
│   │   ├── Buttons/           # 15 variants
│   │   ├── Cards/             # 40 variants
│   │   ├── Dropdowns/         # 30 variants
│   │   ├── Input/             # 35 variants
│   │   ├── Modals/            # 30 variants
│   │   ├── Navigation/        # 35 variants
│   │   ├── Progress/          # 6 variants
│   │   ├── Tables/            # 20 variants
│   │   ├── Tabs/              # 15 variants
│   │   ├── Toasts/            # 6 variants
│   │   └── Tooltips/          # 6 variants
│   ├── Pages/
│   ├── Sections/
│   ├── Templates/
│   └── Utilities/
├── Vanilla/
│   ├── Components/            # Cards, Forms, Navigation, etc.
│   ├── Sections/              # Neo-Brutalist website sections
│   ├── Templates/
│   ├── Tools/
│   └── Utilities/             # Helpers, Layout, Theming
├── snippets-index.json        # Component family index
└── README.md
```

## Quick Start

1. Browse `Tailwind/Components/` for ready-to-use Tailwind components
2. Check `Vanilla/Components/` for HTML/CSS patterns
3. Copy, customize, and ship

## Component Families

### Tailwind (Production-Ready)

| Family | Variants | Styles |
|--------|----------|---------|
| **Accordions** | 15 | Basic, Animated, Bordered, Dark, FAQ, Glass, Icon, Minimal, Multi-Open, Nested, Pricing-FAQ, Settings, Sidebar, Single-Open, Timeline |
| **Buttons** | 15 | Basic, Ghost, Outline, Filled, Glass, Neumorphism, Gradient, Animated, Icon, Split, Loading, Social, Floating, 3D, Minimal |
| **Cards** | 40 | Profile, Pricing, Product, Blog, Team, Testimonial, Feature, Dashboard-Stat, Analytics, KPI, Statistics, Notification, Event, Music, Video, Weather, Social-Post, NFT, Checkout, Order, Chat, File, Job, Course, Timeline, Glass, Minimal, Corporate, SaaS, Gradient, and more |
| **Dropdowns** | 30 | Action, Animated, Avatar, Basic, Checkbox, Click, Command, Context, Date-Filter, Divider, Filter, Floating, Hover, Icon, Language, Mega, Mobile, Multi-Level, Multi-Select, Notification, Profile, Quick-Actions, Radio, Searchable-Select, Select, Sidebar, Sort, Status, Theme, User-Account |
| **Input** | 35 | Underline, Outlined, and more |
| **Modals** | 30 | Basic, Confirmation, Delete, Success, Error, Warning, Login, Signup, Forgot-Password, Reset-Password, Payment, Checkout, Share, Image-Preview, Video, Form, Settings, Drawer, Bottom-Sheet, Slide-Over, Fullscreen, Loading, Command-Palette, Notification, Multi-Step, OTP, Feedback, Subscription, Cookie-Consent, Update-Available |
| **Navigation** | 35 | Admin-Sidebar, Basic-Navbar, Blog, Bottom, Breadcrumb, Category, Centered, Collapsible-Sidebar, Corporate, Dashboard-Sidebar, Dock, Documentation, Ecommerce, Floating, Glass, Gradient, Hamburger, Horizontal, Icon, Mega, Mini-Sidebar, Mobile, Multi-Level, Offcanvas, Pagination, Profile, SaaS, Search, Settings, Split, Step, Sticky, Tab, Transparent, Vertical |
| **Progress** | 6 | Linear-Bar (determinate/indeterminate), Circular-Spinner (4 sizes), Skeleton-Loader (card/list), Segmented-Stepper (checkout), Step-Progress (timeline), Upload-Progress (multi-file) |
| **Tables** | 20 | Analytics, Basic, Bordered, Compact, Expandable, File-Manager, Filterable, Hover, Invoice, Leaderboard, Order-Management, Paginated, Pricing-Comparison, Product-Inventory, Responsive, Searchable, Selectable, Sortable, Striped, User-Management |
| **Tabs** | 15 | Multiple tab variants |
| **Toasts** | 6 | Basic, Status (Success/Error/Warning/Info), Action (Undo), Stacked, Persistent (progress bar), Minimal (pill) |
| **Tooltips** | 6 | Basic (top+arrow), Directional (top/right/bottom/left), Rich (title+description), Delayed (600ms), Icon (icon-button a11y), Status (success/warning/error/info themed) |

### Vanilla

Components: Accordions, Alerts, Avatars, Badges, Buttons, Cards, Dropdowns, Forms, Images, Loaders, Media, Modals, Navigation, Tables, Tabs, Timelines, Tooltips

Utilities: Accessibility, Animations, Effects, Helpers, Interactions, Layout, LocalStorage, Scrollbar, Theming, Typography

**Sections (Neo-Brutalist, 65 variants):** Hero (10), Navigation (4), Features (5), Logos (3), Statistics (3), Products (6), Pricing (4), Testimonials (4), Team (3), Process (4), Content (4), Gallery (3), FAQ (2), CTA (4), Contact (3), Footer (3). See `Vanilla/Sections/README.md` and browse `Vanilla/Sections/index.html`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
