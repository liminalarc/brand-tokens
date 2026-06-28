# brand-tokens — Positioning

> Internal package. This file exists so `/flow` and `/flow-review --marketing` have
> a positioning source; it's lightweight by design.

## One-liner

The single source of truth for our brand's look — colors, type, radius, shadow —
that every app consumes so they stay visually identical and re-theme in one place.

## Who it's for

App authors (and their coding agents) building products under the same brand who
want a consistent, professional look without re-deriving a palette per app.

## Value

- **Consistency** — every app pulls the same tokens; no drift.
- **Re-theme once** — change a value here, every app adopts it via a version bump.
- **Framework-agnostic** — CSS custom properties work everywhere; JS/SCSS outputs included.
- **Low overhead** — zero-dependency build, committed `dist/`, simple semver releases.

## Differentiators vs. ad-hoc styling

- One reviewed palette with light/dark parity and documented AA contrast.
- Deliberate, named scales (type/radius/shadow) instead of off-scale one-offs.
- A human design reference (`DESIGN-SYSTEM.md`) plus machine-readable tokens.
