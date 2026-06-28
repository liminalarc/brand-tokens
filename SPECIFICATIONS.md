# brand-tokens — Specifications

Source of truth for what this package does, what's planned, and what's been
considered. Every feature/idea is a spec. Mark DONE when complete; archive fully
shipped specs to the `## Archive` section. (`/flow` project.)

## Status index

| Spec | Title | Status |
|------|-------|--------|
| 1 | Token source + zero-dep build | DONE |
| 2 | Multi-format dist (css/scss/js/d.ts) | DONE |
| 3 | Versioning + release process | NOT STARTED |
| 4 | CI: build + validate on PR, release on tag | NOT STARTED |
| 5 | Consumer adoption (StormBoard + others) | IN PROGRESS |
| 6 | Token validation (schema + WCAG AA contrast) | IN PROGRESS |
| 7 | Style Dictionary migration (more targets) | FUTURE |
| 8 | Shared component CSS layer | DONE |

---

### Spec 1 — Token source + zero-dep build
**Status:** DONE

`tokens.json` is the single source of truth; `build.mjs` (zero dependencies) emits
`dist/`. Edit values in `tokens.json`, run `npm run build`.

**Acceptance criteria:**
- [x] All colors (brand/neutral/semantic) defined with light + dark values
- [x] Radius, shadow, and typography scales defined
- [x] `npm run build` regenerates `dist/` deterministically
- [x] `dist/` committed so consumers need no build step

---

### Spec 2 — Multi-format dist
**Status:** DONE

Emit CSS custom properties (light `:root` + `[data-theme="dark"]`), an SCSS copy,
and a typed JS/TS module (token references + raw light/dark value maps).

**Acceptance criteria:**
- [x] `dist/tokens.css` with both themes
- [x] `dist/tokens.scss` consumable via `@use`/`@import`
- [x] `dist/tokens.js` + `dist/tokens.d.ts` (`token`, `lightValues`, `darkValues`)
- [x] `package.json` `exports` map: `.`, `./css`, `./scss`, `./tokens.json`

---

### Spec 3 — Versioning + release process
**Status:** NOT STARTED

Semver + git tags + GitHub Releases + CHANGELOG so consumers adopt deliberately.

**Acceptance criteria:**
- [ ] Document semver policy (patch=value, minor=add, major=rename/remove) — in README/CLAUDE ✓ drafted
- [ ] First tagged release `v0.1.0` with a GitHub Release + changelog entry
- [ ] Release steps verified end-to-end (`npm version` → push tags → Release)

---

### Spec 4 — CI pipeline
**Status:** NOT STARTED

**As a** maintainer, **I want** CI to guard the package **so that** `dist/` never
drifts from `tokens.json` and releases are automatic.

**Acceptance criteria:**
- [ ] PR check: `npm run build` runs and fails if `dist/` is out of date (diff check)
- [ ] On tag push: create a GitHub Release from the changelog
- [ ] (If using GitHub Packages) publish on release

---

### Spec 5 — Consumer adoption
**Status:** IN PROGRESS

**As an** app author, **I want** to consume brand-tokens **so that** my app matches
the brand and re-themes from one place.

**Acceptance criteria:**
- [x] StormBoard imports `dist/tokens.css` (via angular.json) instead of its hand-maintained `_tokens.scss` core; app-specific tokens (event-storming colors, workspace nodes, etc.) stay in StormBoard
- [ ] At least one other app consumes the package (validates cross-repo/org consumption) — Prism, pending its move into the `liminalarc` org
- [ ] Each consumer runs Dependabot/Renovate watching this dependency
- [ ] Decide distribution channel: public repo + git-tag dep (default) vs GitHub Packages vs public npm

---

### Spec 6 — Token validation
**Status:** IN PROGRESS

**Acceptance criteria:**
- [ ] Schema-validate `tokens.json` (every color has light + dark; valid hex/value)
- [x] WCAG AA contrast checks for the documented text-on-fill pairings — `contrast-audit.mjs` / `npm run audit`, both themes, exits non-zero on failure (all pass as of v0.3.1)
- [ ] Run validation in CI (script is CI-gate ready; wire once Spec 4 CI lands)

---

### Spec 7 — Style Dictionary migration
**Status:** FUTURE

Swap the zero-dep build for [Style Dictionary] only if more output targets are
needed (Tailwind preset, iOS/Android, Figma sync). Not worth the dependency until
a real second-stack consumer exists.

**Acceptance criteria:**
- [ ] Evaluate when a non-web or Tailwind consumer appears
- [ ] Preserve current `dist/` outputs (no breaking change for existing consumers)

---

### Spec 8 — Shared component CSS layer
**Status:** DONE (v0.3.0)

Framework-agnostic component classes built on the tokens — reusable across apps
regardless of framework. Mirrors the specimens on StormBoard's `/admin/brand`.

**Acceptance criteria:**
- [x] Decide scope: `.sb-btn` (+ variants/sizes/states), `.sb-badge`/`.sb-chip`, `.sb-field`, `.sb-card`, `.sb-table`
- [x] Ship as `dist/components.css`, opt-in import (`brand-tokens/components`); namespaced `.sb-*`
- [x] Source `components.css` copied to dist by `build.mjs`; documented in README + CHANGELOG

---

## Archive

_(Fully shipped specs move here, number preserved.)_
