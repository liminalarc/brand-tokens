# Changelog

All notable changes to brand-tokens. Format: [Keep a Changelog](https://keepachangelog.com);
versioning: [Semver](https://semver.org) (patch = value tweak · minor = token added · major = token renamed/removed).

## [0.3.0]

### Added
- **Shared component layer** `dist/components.css` (opt-in, import `brand-tokens/components`) —
  framework-agnostic primitives built on the tokens: `.sb-btn` (+ primary/accent/secondary/ghost/danger,
  sizes, hover/active/focus-visible/disabled states), `.sb-badge`/`.sb-chip`, `.sb-field` (inputs),
  `.sb-card`, `.sb-table`. Namespaced `.sb-*` to avoid collisions with framework classes.

## [0.2.0]

### Added
- `--sb-on-dark` (white in both themes) — content/text on permanently-dark brand
  surfaces (hero gradient, toolbar). Use instead of `--sb-text-inverse`, which
  flips to dark in dark mode and disappears on a fixed-dark background.

## [0.1.0]

### Added
- Initial token set extracted from StormBoard (Spec 161): brand (navy-blue +
  blaze orange), neutrals/surfaces, semantic (success/info/warning/error/ai),
  radius scale, shadow scale, typography (Inter + 8-step scale). Light + dark.
- Zero-dependency build (`build.mjs`): `tokens.json` → `dist/tokens.{css,scss,js,d.ts}`.
- Design reference (`DESIGN-SYSTEM.md`) and consume/maintain docs (`README.md`).
