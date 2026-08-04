# DevSnips — Repository Knowledge

## What this repo is
DevSnips is an open-source, framework-free frontend component library organized as design-system "families". Each Tailwind family lives under `Tailwind/Components/` (e.g. `Tailwind/Components/Accordions/`, `Tailwind/Components/Tables/`) and contains variant sub-folders.

## Folder + file convention (per variant)
Every variant folder (kebab-case) must contain exactly three files:
- `code.html` — component ONLY. No `<html>`/`<head>`/`<body>`/`<!doctype>`/Tailwind CDN. Copy-paste ready.
- `preview.html` — full `<!DOCTYPE html>` page with Tailwind CDN (`https://cdn.tailwindcss.com`), Inter font, responsive layout, and realistic application context around the component.
- `metadata.json` — see schema below.

The `code.html` snippet comment header is optional but follows CONTRIBUTING.md:
`<!-- Snippet Name / Description / Author: DevSnips Contributors / Usage Example -->`

## metadata.json schema (used across Tables, Cards, Accordions)
```json
{
  "name": "Display Name",
  "slug": "kebab-folder-name",
  "component": "accordion",        // singular family noun
  "family": "accordions",          // plural
  "variant": "basic",              // short variant key
  "description": "...",
  "framework": "Tailwind CSS",
  "language": "HTML",
  "tags": ["..."],
  "related": ["other-variant-slug"],
  "features": ["..."]
}
```
Required keys: name, slug, component, family, variant, description, framework, language, tags, related, features. `slug` must equal the folder name.

## snippets-index.json registration
- Top-level `families[]` array; each family has `name`, `path`, `tech`, `category`, `description`, `variantsCount`, `variants[]` (each with name/path/description/features/tags/files), `tags`, `searchTerms`.
- Update `stats.totalFamilies` and `stats.totalVariants` (sum of variantsCount) after adding a family.
- Also add the family name to `technologies[].families` for the matching tech (`Tailwind CSS`).

## Accordion JS pattern (verified working)
Use a `<div data-accordion="name">` wrapper containing `<div data-accordion-item>` blocks and an inline `<script>` at the end. The script scopes itself with:
```js
const root = document.currentScript.closest('[data-accordion]');
```
This works because the `<script>` parses inside the root. Panel animation uses the CSS-grid trick:
`grid grid-rows-[0fr]` ↔ toggle `grid-rows-[1fr]` with `transition-[grid-template-rows] duration-300 ease-out`, wrapped in `overflow-hidden`. Chevron rotates via `style.transform = 'rotate(180deg)'`. Single-open mode: add `data-single-open` attr and close siblings on open. Always set `aria-expanded` + `aria-controls` + `role="region"` + `aria-labelledby` + `focus-visible:ring`.

## Code standards
- HTML + Tailwind CSS only. Vanilla JS only where interaction is required.
- NO React/Vue/Alpine/Bootstrap/jQuery.
- 2-space indentation. Semantic HTML. Accessibility required (ARIA, keyboard, focus rings).
