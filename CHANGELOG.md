# Changelog

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
