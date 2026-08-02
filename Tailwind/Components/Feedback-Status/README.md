# Feedback & Status Components

A comprehensive collection of 10 feedback and status component variants built with Tailwind CSS.

## Components Included

1. **Toast Notifications** - Temporary notification popups
2. **Alert Messages** - Inline alert banners
3. **Success/Error States** - Full-page success and error states
4. **Progress Bar** - Linear progress indicators
5. **Circular Progress** - Circular progress indicators
6. **Loading Spinner** - Loading animation components
7. **Skeleton Loaders** - Content placeholder animations
8. **Empty State Component** - Empty state placeholders
9. **Error State Page** - Error page templates
10. **Confirmation Dialog** - Modal confirmation dialogs

## Usage

```html
<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Copy the desired component section into your HTML -->
```

## Customization

All components use Tailwind CSS utility classes and can be customized by modifying the classes directly.

### Toast Animations

```css
@keyframes slideIn {
  from { transform: translateX(100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
.toast-enter { animation: slideIn 0.3s ease-out; }
```

### Progress Bar Colors

```html
<!-- Blue -->
<div class="h-2 bg-blue-600 rounded-full" style="width: 50%"></div>

<!-- Green -->
<div class="h-2 bg-green-500 rounded-full" style="width: 75%"></div>

<!-- Gradient -->
<div class="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
```

## Accessibility

- Toast notifications include role and aria-live attributes
- Dialogs trap focus appropriately
- Color is not the only means of conveying information
- Error states have proper ARIA labels

## Contribution Guidelines

1. Keep components semantic and accessible
2. Use Tailwind CSS utility classes only
3. Include proper ARIA attributes for screen readers
4. Ensure animations are smooth and performant
5. Test with various content lengths
