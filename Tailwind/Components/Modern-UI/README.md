# Modern UI / Effects Components

A collection of 5 modern UI and effects component variants built with Tailwind CSS.

## Components Included

1. **Glassmorphism Card** - Frosted glass effect cards
2. **Bento Grid Layout** - Modern bento-style grid layouts
3. **Animated Gradient Background** - Moving gradient backgrounds
4. **Spotlight Effect Card** - Cards with spotlight hover effect
5. **Interactive Hover Reveal Card** - Cards that reveal content on hover

## Usage

```html
<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Copy the desired component section into your HTML -->
```

## Customization

All components use Tailwind CSS utility classes and can be customized by modifying the classes directly.

### Glassmorphism

```html
<div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl">
  <!-- Content -->
</div>
```

### Animated Gradients

```css
@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animated-gradient {
  background-size: 200% 200%;
  animation: gradient-shift 5s ease infinite;
}
```

### Spotlight Effect

```css
@keyframes spotlight {
  0% { transform: translate(-100%, -100%); }
  100% { transform: translate(100%, 100%); }
}
.spotlight-effect::before {
  content: '';
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: translate(-100%, -100%);
}
.group:hover .spotlight-effect::before {
  animation: spotlight 0.5s ease forwards;
}
```

## Accessibility

- Animations respect reduced motion preferences
- Text maintains proper contrast ratios
- Hover effects have alternative visual states
- Focus states are clearly visible

## Contribution Guidelines

1. Keep components semantic and accessible
2. Use Tailwind CSS utility classes only
3. Ensure animations are smooth and performant
4. Test with reduced motion preferences
5. Include proper fallback states
