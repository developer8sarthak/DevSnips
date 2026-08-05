# Changelog

## 2026-08-05

### Added
- **Indexed all unindexed Tailwind and Vanilla components in `snippets-index.json`.** Registered 14 missing Tailwind `Input` variants (chat-input, credit-card, currency-input, cvv, email-input, expiration-date, markdown-editor, mention-input, otp-6-digit, phone-input, rich-text-editor, search-with-autocomplete, search-with-filters, url-input — Input now has 49 variants, was 35). Registered all 19 `Vanilla/Components/` families that were entirely missing from the index: Accordions (5), Alerts (2), Avatars (1), Badges (2), Buttons (14), Cards (15), Display (7), Dropdowns (1), Forms (6 subcategories), Loaders (8), Marketing (4 subcategories), Media (17), Modals (12), Navigation (8), Other (65), Ratings (3), Tables (4), Tabs (5), Tooltips (3). Added all 19 names to `technologies[].families` for Vanilla. Stats recomputed: **47 families** (was 28), **514 variants** (was 318), **520 styles** (was 324). All variant counts now match on-disk folders (0 out of sync).
- Added the **Tooltips** Tailwind component family with 6 production-ready variants: `basic-tooltip` (top-positioned with arrow, hover + focus), `directional-tooltip` (all 4 directions with auto-positioned arrows), `rich-tooltip` (title + multi-line description for form help text), `delayed-tooltip` (600ms show delay via CSS transition-delay, instant hide), `icon-tooltip` (icon-button labeling with `aria-label` + `role=tooltip`), and `status-tooltip` (status dots with success/warning/error/info themed tooltips). All variants are pure CSS — no JavaScript — and accessible via `role=tooltip` + `aria-describedby` and `:focus-visible` keyboard triggers.
- Added the **Progress** Tailwind component family with 6 production-ready variants: `linear-bar` (determinate/indeterminate/completed), `circular-spinner` (4 sizes, pure CSS), `skeleton-loader` (card + list shimmer with reduced-motion support), `segmented-stepper` (3-step checkout with interactive next/back), `step-progress` (vertical milestone timeline), and `upload-progress` (multi-file list with per-file bars and success transitions). Each ships the standard `code.html` / `preview.html` / `metadata.json` trio with `role=progressbar`/`status` + `aria-live=polite` accessibility.
- Added the **Toasts** Tailwind component family with 6 production-ready variants: `basic-toast`, `status-toasts` (success/error/warning/info), `action-toast` (inline Undo action with `onAction` callback), `stacked-toasts` (notification queue with dismiss-all), `persistent-toast` (countdown progress bar that pauses on hover), and `minimal-toast` (compact pill for terse "Copied!" feedback). Each variant ships the standard `code.html` / `preview.html` / `metadata.json` trio with `role=status`/`alert` + `aria-live=polite` accessibility.
- Registered the Toasts, Progress, and Tooltips families in `snippets-index.json` (`families[]` and `technologies[].families`).

### Fixed
- Synced `snippets-index.json` with the on-disk layout: registered 5 previously-missing Tailwind component families — **Accordions** (15 variants), **Cards** (40), **Dropdowns** (30), **Navigation** (35), and **Tables** (20) — pulling real names, descriptions, features, and tags from each variant's `metadata.json`. Added **Tabs** to `technologies[].families`. All 12 Tailwind families now appear in both `families[]` and `technologies[].families`.

### Changed
- Rewrote `README.md` structure tree and Component Families table to list all 12 Tailwind families (was only Buttons) and all 19 Vanilla/Components families (was a one-line summary).
- Updated `CONTRIBUTING.md` contribution flow to reference the real `Tailwind/Components/` and `Vanilla/Components/` paths (was pointing at a nonexistent `devsnips/snippets/` tree) and documented the three-file-per-variant convention.
- Recomputed index stats: **47 families** (was 21), **514 variants** (was 166), **520 styles** (was 172). Index now matches on-disk counts exactly.

## 2026-03-10

### Added
- Added new HTML snippets: modal dialog, accordion FAQ layout, pricing card, skeleton loader, and toast notification markup.
- Added new CSS snippets: dark mode variables, responsive grid system, animated hamburger menu, and focus-visible accessibility styles.
- Added new JS snippets: debounce utility, clipboard copy helper, local storage wrapper, form validator, and lazy image loader.
- Added `snippets-index.json` containing metadata for all snippet files.
- Added shared project config: `.editorconfig`, `.htmlhintrc`, `eslint.config.js`, and GitHub Actions lint workflow at `.github/workflows/lint.yml`.

### Changed
- Added standardized snippet header comments to existing snippet files in `devsnips/snippets/html-snippets`, `devsnips/snippets/css-snippets`, and `devsnips/snippets/js-snippets` where missing.
- Rewrote `README.md` with a clearer structure, usage guide, badges, and a full snippet table.
- Updated `CONTRIBUTING.md` with explicit code style rules, header templates, and a contribution checklist.
- Updated `PULL_REQUEST_TEMPLATE.md` with accessibility and cross-browser testing checks.

### Tradeoffs / Decisions for Maintainer Review
- Snippet descriptions in `snippets-index.json` are generated from filenames for consistency and maintainability; maintainers may want to manually curate descriptions over time.
- Workflow linting currently targets snippet directories only to avoid failures from demo/landing-page files with different structure.
- Existing snippet formatting was standardized by documentation and headers first; full per-file semantic and indentation normalization across all legacy snippets was not performed in this pass to keep changes reviewable.
