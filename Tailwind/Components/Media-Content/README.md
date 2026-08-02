# Media & Content Components

A comprehensive collection of 10 media and content component variants built with Tailwind CSS.

## Components Included

1. **Image Gallery** - Grid image galleries
2. **Masonry Gallery** - Pinterest-style masonry layout
3. **Image Slider** - Image carousel components
4. **Video Player UI** - Video player interfaces
5. **Audio Player UI** - Audio player interfaces
6. **Before/After Image Slider** - Comparison sliders
7. **Avatar Group** - Multiple avatar displays
8. **Rating Stars** - Star rating components
9. **Social Share Buttons** - Social sharing components
10. **QR Code Card** - QR code display cards

## Usage

```html
<!-- Include Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Copy the desired component section into your HTML -->
```

## Customization

All components use Tailwind CSS utility classes and can be customized by modifying the classes directly.

### Image Galleries

```html
<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
  <img src="..." alt="..." class="rounded-xl">
</div>
```

### Masonry Layout

```html
<div class="columns-2 md:columns-3 gap-4">
  <img src="..." class="break-inside-avoid rounded-xl">
</div>
```

### Avatar Groups

```html
<div class="flex -space-x-3">
  <img src="..." class="w-12 h-12 rounded-full border-2 border-white">
</div>
```

## Accessibility

- All images include descriptive alt text
- Sliders are keyboard accessible
- Text maintains proper contrast ratios
- Interactive elements have focus states

## Contribution Guidelines

1. Keep components semantic and accessible
2. Use Tailwind CSS utility classes only
3. Include proper alt text for images
4. Ensure responsive behavior
5. Test with various content lengths
