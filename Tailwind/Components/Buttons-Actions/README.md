# Buttons & Actions Components

A specialized collection of 10 button and action component variants built with Tailwind CSS.

## Components Included

1. **Gradient Buttons** - Multi-color gradient backgrounds
2. **Glass Buttons** - Frosted glass effect with backdrop blur
3. **Icon Buttons** - Icon-only and icon+text combinations
4. **Loading Buttons** - Spinners and progress indicators
5. **Floating Action Button** - FAB for primary actions
6. **Social Login Buttons** - OAuth provider buttons
7. **Download Buttons** - File download action buttons
8. **Copy Code Button** - Code snippet copy with feedback
9. **Button Group** - Segmented and toggle button groups
10. **Animated Hover Buttons** - Various hover animations

## Usage

```html
<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Copy the desired component section into your HTML -->
```

## Customization

All components use Tailwind CSS utility classes and can be customized by modifying the classes directly.

### Animation Customization

The animated buttons include custom CSS animations defined in the `<style>` section:

```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

### Color Customization

Replace color classes (e.g., `blue-600`, `purple-600`) with your brand colors.

## Accessibility

- All buttons include visible focus rings
- Loading buttons include proper `aria-busy` attributes
- Disabled states are properly styled and communicated
- Minimum touch targets of 44x44px

## Contribution Guidelines

1. Keep components semantic and accessible
2. Use Tailwind CSS utility classes only
3. Include both hover and focus states
4. Test animations for performance
5. Ensure touch-friendly sizing
