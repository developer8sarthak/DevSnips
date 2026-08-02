# Navigation Components

A comprehensive collection of 10 navigation component variants built with Tailwind CSS.

## Components Included

1. **Modern Navbar** - Clean, contemporary navbar with gradient branding
2. **Transparent Navbar** - Designed for use over hero images or dark backgrounds
3. **Glassmorphism Navbar** - Frosted glass effect with backdrop blur
4. **Navbar with Dropdown Menu** - Hover-activated dropdown menus
5. **Mega Menu** - Large dropdown panel with columns and grouped links
6. **Sidebar Navigation** - Vertical sidebar navigation for dashboards
7. **Collapsible Sidebar** - Sidebar that expands on hover
8. **Dashboard Sidebar** - Feature-rich sidebar with user profile
9. **Breadcrumb Navigation** - Hierarchical navigation showing current location
10. **Pagination Controls** - Page navigation for paginated content

## Usage

```html
<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Copy the desired component section into your HTML -->
```

## Customization

All components use Tailwind CSS utility classes and can be customized by modifying the classes directly.

### Responsive Behavior

- Most navbars use `hidden md:flex` for mobile/tablet toggle
- Add hamburger menu for mobile views if needed

### Color Customization

Replace color classes (e.g., `blue-600`, `gray-900`) with your brand colors.

## Accessibility

- All interactive elements include visible focus rings
- Dropdowns include proper `aria-expanded` and `aria-haspopup` attributes
- Full keyboard navigation support

## Contribution Guidelines

1. Keep components semantic and accessible
2. Use Tailwind CSS utility classes only
3. Include both hover and focus states
4. Ensure mobile responsiveness
5. Test with screen readers
