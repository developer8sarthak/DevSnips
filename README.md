# 🚀 DevSnips – Component Library

Reusable frontend components organized as design system families.

## Structure

```
├── Tailwind/
│   ├── Components/            # 12 families, 267 variants
│   │   ├── Accordions/        # 15 variants
│   │   ├── Buttons/           # 15 variants
│   │   ├── Cards/             # 40 variants
│   │   ├── Dropdowns/         # 30 variants
│   │   ├── Input/             # 49 variants
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
│   ├── Components/            # 19 families, 182 variants
│   │   ├── Accordions/        # 5 variants
│   │   ├── Alerts/            # 2 variants
│   │   ├── Avatars/           # 1 variant
│   │   ├── Badges/            # 2 variants
│   │   ├── Buttons/           # 14 variants
│   │   ├── Cards/             # 15 variants
│   │   ├── Display/           # 7 variants
│   │   ├── Dropdowns/        # 1 variant
│   │   ├── Forms/             # 6 subcategories
│   │   ├── Loaders/           # 8 variants
│   │   ├── Marketing/        # 4 subcategories
│   │   ├── Media/             # 17 variants
│   │   ├── Modals/            # 12 variants
│   │   ├── Navigation/       # 8 variants
│   │   ├── Other/            # 65 variants
│   │   ├── Ratings/          # 3 variants
│   │   ├── Tables/           # 4 variants
│   │   ├── Tabs/             # 5 variants
│   │   └── Tooltips/        # 3 variants
│   ├── Sections/              # Neo-Brutalist website sections (65 variants)
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
| **Input** | 49 | Animated-Focus, Character-Count, Chat-Input, Checkbox-Styled, Color-Picker, Corporate, Credit-Card, Currency-Input, CVV, Dark-Mode, Date-Picker, Disabled-Readonly, Email-Input, Expiration-Date, File-Upload, Filled, Floating-Label, Glassmorphism, Gradient-Border, Icon-Both/Left/Right, Markdown-Editor, Mention-Input, Modern-SaaS, Neumorphism, Number-Stepper, OTP-6-Digit, Outlined, Password-Toggle, Phone-Input, Radio-Styled, Range-Slider, Rich-Text-Editor, Rounded-Pill, Search-Bar/Autocomplete/Filters, Sharp-Corner, Split-Input, Tag-Input, Textarea, Toggle-Switch, Underline, URL-Input, Validation-States, With-Helper/Prefix/Suffix |
| **Modals** | 30 | Basic, Confirmation, Delete, Success, Error, Warning, Login, Signup, Forgot-Password, Reset-Password, Payment, Checkout, Share, Image-Preview, Video, Form, Settings, Drawer, Bottom-Sheet, Slide-Over, Fullscreen, Loading, Command-Palette, Notification, Multi-Step, OTP, Feedback, Subscription, Cookie-Consent, Update-Available |
| **Navigation** | 35 | Admin-Sidebar, Basic-Navbar, Blog, Bottom, Breadcrumb, Category, Centered, Collapsible-Sidebar, Corporate, Dashboard-Sidebar, Dock, Documentation, Ecommerce, Floating, Glass, Gradient, Hamburger, Horizontal, Icon, Mega, Mini-Sidebar, Mobile, Multi-Level, Offcanvas, Pagination, Profile, SaaS, Search, Settings, Split, Step, Sticky, Tab, Transparent, Vertical |
| **Progress** | 6 | Linear-Bar (determinate/indeterminate), Circular-Spinner (4 sizes), Skeleton-Loader (card/list), Segmented-Stepper (checkout), Step-Progress (timeline), Upload-Progress (multi-file) |
| **Tables** | 20 | Analytics, Basic, Bordered, Compact, Expandable, File-Manager, Filterable, Hover, Invoice, Leaderboard, Order-Management, Paginated, Pricing-Comparison, Product-Inventory, Responsive, Searchable, Selectable, Sortable, Striped, User-Management |
| **Tabs** | 15 | Multiple tab variants |
| **Toasts** | 6 | Basic, Status (Success/Error/Warning/Info), Action (Undo), Stacked, Persistent (progress bar), Minimal (pill) |
| **Tooltips** | 6 | Basic (top+arrow), Directional (top/right/bottom/left), Rich (title+description), Delayed (600ms), Icon (icon-button a11y), Status (success/warning/error/info themed) |

### Vanilla

**Components (19 families, 182 variants):** Accordions (5), Alerts (2), Avatars (1), Badges (2), Buttons (14), Cards (15), Display (7), Dropdowns (1), Forms (6 subcategories — Contact, Login, Newsletter, Other, Register, Search), Loaders (8), Marketing (4 subcategories — FAQ, Hero, Pricing, Testimonials), Media (17), Modals (12), Navigation (8), Other (65), Ratings (3), Tables (4), Tabs (5), Tooltips (3).

Utilities: Accessibility, Animations, Effects, Helpers, Interactions, Layout, LocalStorage, Scrollbar, Theming, Typography

**Sections (Neo-Brutalist, 65 variants):** Hero (10), Navigation (4), Features (5), Logos (3), Statistics (3), Products (6), Pricing (4), Testimonials (4), Team (3), Process (4), Content (4), Gallery (3), FAQ (2), CTA (4), Contact (3), Footer (3). See `Vanilla/Sections/README.md` and browse `Vanilla/Sections/index.html`.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
