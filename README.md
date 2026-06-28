# brand-tokens

Framework-agnostic **design tokens** (color, typography, radius, shadow) with
light + dark parity. One source of truth, consumed by multiple apps so they stay
visually identical and re-theme in one place.

- **Source of truth:** [`tokens.json`](./tokens.json) — edit values here only.
- **Generated outputs:** `dist/tokens.css`, `dist/tokens.scss`, `dist/tokens.js`, `dist/tokens.d.ts` (committed, so consumers need no build step).
- **Design reference:** [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) — palette rationale, type scale, component conventions.
- **Backlog / status:** [`SPECIFICATIONS.md`](./SPECIFICATIONS.md) (this is a `/flow` project).

> Tokens are not secrets — they are the colors and fonts already shipped in every
> app's public CSS. This repo is safe to make public.

---

## Consume it in an app

Pick the channel that fits (see `SPECIFICATIONS.md` for the rollout plan):

### Option A — git dependency (no registry, simplest)
```bash
npm install github:<org>/brand-tokens#v0.1.0
```
Then import the CSS once in your global stylesheet:
```css
@import "brand-tokens/css";   /* :root light + [data-theme="dark"] */
```
Set `<html data-theme="dark">` to switch themes. That's it — every `--sb-*`
custom property is now available app-wide.

### Option B — SCSS
```scss
@use "brand-tokens/scss";   /* same custom properties, usable from SCSS */
```

### Option C — JS / TS (token references + raw values)
```ts
import { token, lightValues, darkValues } from "brand-tokens";
element.style.background = token["primary"];   // "var(--sb-primary)"
```

Reference tokens in your components **only** via the custom properties — never
hardcode hex:
```css
.button { background: var(--sb-primary); color: var(--sb-text-inverse); }
```

---

## Maintain it (release workflow)

1. Edit values in `tokens.json` (only).
2. `npm run build` → regenerates `dist/`.
3. Commit (Conventional Commits, e.g. `feat: warm up neutral surfaces`).
4. Bump version, tag, and cut a **GitHub Release** with a changelog entry:
   ```bash
   npm version minor      # or patch / major (semver)
   git push --follow-tags
   ```
5. Consuming apps running **Dependabot/Renovate** get an auto-PR to adopt the new
   version on their own schedule. No manual coordination needed.

**Semver for tokens:** `patch` = value tweak; `minor` = new token added;
`major` = token renamed/removed (breaking for consumers).

---

## Project layout
```
brand-tokens/
├── tokens.json          # SOURCE OF TRUTH — edit here
├── build.mjs            # zero-dep build: tokens.json -> dist/
├── dist/                # generated, committed (css / scss / js / d.ts)
├── DESIGN-SYSTEM.md     # human design reference
├── SPECIFICATIONS.md    # /flow backlog (source of truth for work)
├── CLAUDE.md            # /flow project rules
└── MARKETING.md         # positioning
```
