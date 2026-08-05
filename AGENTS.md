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

## Tailwind Sections — `Tailwind/Sections/`
Multi-style website sections organized as `category/section/style/` (three levels, all kebab-case). Each style folder contains exactly: `preview.html` (full `<!DOCTYPE html>` page with Tailwind CDN + app-context shell), `code.html` (snippet only — no DOCTYPE/CDN), `metadata.json` (keys: name, slug, category, subcategory, section, style, description, framework, language, tags, features, responsive, dependencies). `slug` = `<section>-<style>`.

Three shared design styles with distinct token palettes (canonical reference in `Tailwind/Sections/STYLE_TOKENS.md`):
- `neo-brutalism` — Archivo + JetBrains Mono; hard `border-2 border-black`, offset `shadow-[8px_8px_0_0_#000]`, flat bright accents (#FFE600/#FF4FA3/#00E676/#00C2FF), press-down hover, cream `#FFFDF5` bg. Scope attrs use `="nb"`.
- `vercel` — Geist + Geist Mono; dark `#050505`/`#0a0a0a`, `border-white/10` hairlines, single teal `#50e3c2` accent, white primary buttons. Scope attrs use `="vc"`.
- `sharp-glassmorphism` — Sora + JetBrains Mono; `bg-white/10 backdrop-blur-2xl` glass over animated `.sg-mesh` gradient (fuchsia/indigo/cyan), gradient CTAs, cyan `#6ee7ff` glow. Scope attrs use `="sg"`. Glass needs a colored backdrop to read.

JS scoped via `document.currentScript.closest('[data-<thing>="<style>"]')` so snippets work standalone. Categories: ai-product (ai-chat-interface, model-comparison, prompt-library, agent-workflow), saas, developer, app-ui, marketing, premium-visual. Registered in `snippets-index.json` `families[]` with `tech: "Tailwind CSS"`, `category: "Sections"`, path = `Tailwind/Sections/<category>/<section>/`; variants are the style folders. Also listed under `technologies[].families` for Tailwind CSS.

## Vanilla Sections (Neo-Brutalist) — `Vanilla/Sections/`
- 65 self-contained website sections across 16 families (Hero, Navigation, Features, Logos, Statistics, Products, Pricing, Testimonials, Team, Process, Content, Gallery, FAQ, CTA, Contact, Footer).
- Folder = `Vanilla/Sections/<Family>/<kebab-slug>/` containing exactly: `<slug>.html` (self-contained: inline `<style>` + `<script>`, full `<!DOCTYPE html>`, body class `nb`), `metadata.json`, `README.md`. This matches the existing Vanilla component convention (one `.html` per variant), NOT the Tailwind code.html/preview.html split.
- Shared design tokens embedded in each `.html` `<style>` `:root`: `--bg --surface --foreground --muted --border --primary --accent --pink --lime --cyan --radius --shadow --shadow-lg --ring --container --gutter`. Light + dark via `prefers-color-scheme`. Reduced-motion safe.
- `metadata.json` keys: id, name, slug, component, family, variant, description, framework, language, technology, category, subcategory, tags, features, responsive, darkMode, accessibility, browserSupport, dependencies, source, related.
- Browse via `Vanilla/Sections/index.html` (filterable gallery) and `Vanilla/Sections/showcase.html` (all sections live, each in an isolated iframe).
- Registered in `snippets-index.json` `families[]` with `tech: "Vanilla HTML/CSS/JS"`, `category: "Sections"`; also listed under `technologies[].families` for the Vanilla tech.
