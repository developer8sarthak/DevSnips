# Dashboard Components

A comprehensive collection of 10 dashboard component variants built with Tailwind CSS.

## Components Included

1. **Analytics Dashboard Card** - Key metrics display cards
2. **Revenue Chart Card** - Revenue visualization cards
3. **User Growth Chart** - User growth visualization
4. **Activity Feed** - Recent activity timelines
5. **Recent Transactions Table** - Transaction data tables
6. **User Management Table** - User management interfaces
7. **Settings Panel** - Settings interface components
8. **Command Palette** - Keyboard navigation interface
9. **Notification Center** - Notification management
10. **Dashboard Header** - Dashboard page headers

## Usage

```html
<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Copy the desired component section into your HTML -->
```

## Customization

All components use Tailwind CSS utility classes and can be customized by modifying the classes directly.

### Stats Cards

```html
<div class="bg-white rounded-xl p-6 shadow-sm">
  <div class="flex items-center justify-between mb-4">
    <span class="text-gray-500 text-sm">Metric</span>
    <span class="p-2 bg-green-100 rounded-lg">
      <svg class="w-5 h-5 text-green-600">...</svg>
    </span>
  </div>
  <p class="text-2xl font-bold">$45,231</p>
  <span class="text-green-600 text-sm">+12%</span>
</div>
```

### Tables

Tables include proper semantic structure with `<thead>`, `<tbody>`, and proper alignment classes.

## Accessibility

- Data tables are properly structured with headers
- Text maintains proper contrast ratios
- All interactive elements are keyboard accessible
- Toggle switches have proper ARIA labels

## Contribution Guidelines

1. Keep components semantic and accessible
2. Use Tailwind CSS utility classes only
3. Ensure responsive behavior
4. Include proper table headers
5. Test with various data lengths
