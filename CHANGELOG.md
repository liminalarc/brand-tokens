# Changelog

All notable changes to brand-tokens. Format: [Keep a Changelog](https://keepachangelog.com);
versioning: [Semver](https://semver.org) (patch = value tweak · minor = token added · major = token renamed/removed).

## [0.5.0]

### Added
- **Hero-gradient tokens** `--sb-hero-{dark,mid,light}` (#062935 / #0d4a63 / #1a6b8a) — the
  permanently-dark brand chrome (Stormboard toolbar, LitmusAI topbar). Same value in both
  themes; pair content with `on-dark`. Upstreams LitmusAI's documented local stopgap
  (its spec 2.6) so consumers resolve the hero palette from the package again.

## [0.4.0]

### Added
- **Spacing scale** `--sb-space-{xs,sm,md,lg,xl,2xl,3xl}` (4/8/12/16/24/32/48px) — a
  shared rhythm system for padding/gap/margin. (Several StormBoard components already
  referenced these names; they were previously undefined.)

## [0.3.1]

### Changed
- WCAG AA contrast fixes (light mode): `text-faint` `#97a3a3`→`#7e8989` (3.6:1) and
  `warning` `#b5740a`→`#946007` (4.7:1 as text on `warning-surface`). Dark mode already passed.

### Added
- `contrast-audit.mjs` + `npm run audit` — checks key text/bg pairings in both themes,
  exits non-zero on failure (Spec 6 groundwork; CI-gate ready).

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
