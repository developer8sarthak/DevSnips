# Button — Split

Button with dropdown for primary action and secondary options.

## Styles Included

| Style | Description |
|-------|-------------|
| **Dropdown Split** | Action button + dropdown |
| **Icon Split** | Icon + text + dropdown |
| **Search Split** | Category dropdown + search input |
| **Split Sizes** | Small, default, large |

## Usage

```html
<!-- Primary Split -->
<div class="dropdown">
  <button class="inline-flex items-center px-4 py-2 bg-blue-600 text-white 
                 font-medium rounded-l-lg ...">
    Action
  </button>
  <button class="inline-flex items-center px-2 py-2 bg-blue-700 text-white 
                 rounded-r-lg ...">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
    </svg>
  </button>
  <div class="dropdown-menu absolute ...">
    <a href="#" class="block px-4 py-2 ...">Option 1</a>
    <a href="#" class="block px-4 py-2 ...">Option 2</a>
  </div>
</div>
```

## CSS Requirements

```css
.dropdown { position: relative; display: inline-block; }
.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 50;
}
.dropdown:hover .dropdown-menu { display: block; }
```

## When to Use

- File/folder actions (Save, Export → PDF/Word)
- User actions (Edit → Quick Edit, Full Editor)
- Search with category filter
- Any primary action with related options

## Accessibility

Add `aria-expanded` and `aria-haspopup`:

```html
<button aria-expanded="false" aria-haspopup="true">
  Action
</button>
```

## Files

- `Button-Split.html` — Interactive preview
- `index.json` — Component metadata
