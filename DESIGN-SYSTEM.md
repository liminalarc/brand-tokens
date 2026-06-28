# LiminalArc Design System

> Portable, framework-agnostic design system shared across LiminalArc products
> (origin: StormBoard, Spec 161). Derived from the LiminalArc brand — navy /
> charcoal foundation, a warm "blaze" orange accent, clean geometric sans;
> minimal, professional, approachable.
>
> **How to use this in another app:** copy the CSS custom-property blocks below
> into your global stylesheet (`:root` for light, `[data-theme="dark"]` for
> dark), adopt the type scale and component conventions, and reference colors
> **only** via the `--sb-*` tokens — never hardcode hex in components.

---

## 1. Principles

1. **One canonical palette.** All color flows through `--sb-*` custom properties. No raw hex in component styles. Light and dark are defined once, in lock-step.
2. **Brand accent ≠ semantic error.** Blaze orange (`--sb-accent`) is for brand moments and primary CTAs; error red (`--sb-error`) is for errors only. They are deliberately distinct roles.
3. **AI is purple.** A reserved semantic hue for AI-generated / inferred content, distinct from brand and status colors.
4. **Opacity via `color-mix`.** For a translucent token, use `color-mix(in srgb, var(--sb-token) N%, transparent)` rather than re-declaring rgba. Generic black overlays (`rgba(0,0,0,X)`) are fine without a token.
5. **Stay on the scale.** 8 type steps, a fixed radius scale, a fixed shadow scale. Don't invent off-scale values.

---

## 2. Color tokens

### Brand

| Token | Light | Dark | Role |
|---|---|---|---|
| `--sb-primary` | `#23649e` | `#6ab0e8` | Primary brand navy-blue. Links, primary buttons, focus. |
| `--sb-primary-strong` | `#1a4d7c` | `#8cc4f0` | Hover/active of primary. |
| `--sb-primary-surface` | `#e7f0f8` | `#16313f` | Tinted primary background (badges, hovers). |
| `--sb-primary-container` | `#cfe1f1` | `#1d4763` | Stronger primary container fill. |
| `--sb-accent` | `#e8542e` | `#ff7a52` | **Blaze** — brand accent / highlight. |
| `--sb-accent-strong` | `#c4441d` | `#ff9472` | AA-safe blaze for text-bearing fills (CTAs). |
| `--sb-accent-surface` | `#fcebe4` | `#3a221a` | Tinted blaze background. |

### Neutrals & surfaces

| Token | Light | Dark | Role |
|---|---|---|---|
| `--sb-text` | `#1c2426` | `#e6eae9` | Primary text (charcoal ink). |
| `--sb-text-secondary` | `#3d4f51` | `#b4c0c0` | Secondary text. |
| `--sb-text-muted` | `#5f6f71` | `#8d9a9a` | Muted / helper text. |
| `--sb-text-faint` | `#97a3a3` | `#6a7676` | Faint / disabled-ish text. |
| `--sb-text-inverse` | `#ffffff` | `#16191a` | Text on dark fills. |
| `--sb-surface` | `#ffffff` | `#1b1f20` | Base surface. |
| `--sb-surface-variant` | `#f6f7f6` | `#23282a` | Subtle alternate surface. |
| `--sb-surface-hover` | `#edf0ef` | `#2c3234` | Hover surface. |
| `--sb-surface-dim` | `#dfe4e3` | `#3a4143` | Dimmed surface / track. |
| `--sb-border` | `#e3e7e6` | `#353c3e` | Default border. |
| `--sb-border-light` | `#cdd3d2` | `#454d4f` | Input / stronger border. |

> Neutrals are deliberately biased slightly toward the navy/charcoal (cool-warm), not pure grey — they read as chosen, not default.

### Semantic

| Token | Light | Dark | Role |
|---|---|---|---|
| `--sb-success` | `#2c9171` | `#5cc6a0` | Positive / teal. |
| `--sb-success-text` | `#1f6e55` | `#7ad3b4` | Success text on success surfaces. |
| `--sb-success-surface` | `#e3f3ec` | `#173028` | Success background. |
| `--sb-info` | `#0d6e9e` | `#4fb6e0` | Informational. |
| `--sb-info-surface` | `#e2f1f8` | `#142c38` | Info background. |
| `--sb-warning` | `#b5740a` | `#e0a93a` | Warning / amber. |
| `--sb-warning-surface` | `#fbf0d9` | `#332715` | Warning background. |
| `--sb-error` | `#c0392b` | `#ef6a5c` | Error red (errors only). |
| `--sb-error-surface` | `#fbe9e7` | `#3a1f1c` | Error background. |
| `--sb-ai` | `#6b4dd6` | `#a78bf0` | AI / inferred content. |
| `--sb-ai-surface` | `#efeafb` | `#251d3a` | AI background. |

### Contrast (WCAG)

White text on `--sb-primary` = 5.3:1 (AA). On `--sb-primary-strong` = 7.6:1 (AAA). On `--sb-accent` = 3.5:1 (large text only — use `--sb-accent-strong` @ 4.8:1 for normal text). `--sb-text` on `--sb-surface` = 13:1 (AAA). Verify any new combination before shipping.

---

## 3. Copy-paste CSS

```css
:root {
  /* Brand */
  --sb-primary: #23649e;
  --sb-primary-strong: #1a4d7c;
  --sb-primary-surface: #e7f0f8;
  --sb-primary-container: #cfe1f1;
  --sb-accent: #e8542e;
  --sb-accent-strong: #c4441d;
  --sb-accent-surface: #fcebe4;

  /* Neutrals & surfaces */
  --sb-text: #1c2426;
  --sb-text-secondary: #3d4f51;
  --sb-text-muted: #5f6f71;
  --sb-text-faint: #97a3a3;
  --sb-text-inverse: #ffffff;
  --sb-surface: #ffffff;
  --sb-surface-variant: #f6f7f6;
  --sb-surface-hover: #edf0ef;
  --sb-surface-dim: #dfe4e3;
  --sb-border: #e3e7e6;
  --sb-border-light: #cdd3d2;

  /* Semantic */
  --sb-success: #2c9171;
  --sb-success-text: #1f6e55;
  --sb-success-surface: #e3f3ec;
  --sb-info: #0d6e9e;
  --sb-info-surface: #e2f1f8;
  --sb-warning: #b5740a;
  --sb-warning-surface: #fbf0d9;
  --sb-error: #c0392b;
  --sb-error-surface: #fbe9e7;
  --sb-ai: #6b4dd6;
  --sb-ai-surface: #efeafb;

  /* Radius */
  --sb-radius-xs: 2px;
  --sb-radius-sm: 4px;
  --sb-radius-md: 8px;
  --sb-radius-lg: 12px;
  --sb-radius-xl: 16px;
  --sb-radius-full: 50%;

  /* Shadows */
  --sb-shadow-xs: 0 1px 3px rgba(20, 30, 35, .08);
  --sb-shadow-sm: 0 1px 2px rgba(20, 30, 35, .08), 0 1px 3px rgba(20, 30, 35, .06);
  --sb-shadow-md: 0 2px 8px rgba(20, 30, 35, .12);
  --sb-shadow-lg: 0 8px 28px rgba(20, 30, 35, .14);
}

[data-theme="dark"] {
  /* Brand */
  --sb-primary: #6ab0e8;
  --sb-primary-strong: #8cc4f0;
  --sb-primary-surface: #16313f;
  --sb-primary-container: #1d4763;
  --sb-accent: #ff7a52;
  --sb-accent-strong: #ff9472;
  --sb-accent-surface: #3a221a;

  /* Neutrals & surfaces */
  --sb-text: #e6eae9;
  --sb-text-secondary: #b4c0c0;
  --sb-text-muted: #8d9a9a;
  --sb-text-faint: #6a7676;
  --sb-text-inverse: #16191a;
  --sb-surface: #1b1f20;
  --sb-surface-variant: #23282a;
  --sb-surface-hover: #2c3234;
  --sb-surface-dim: #3a4143;
  --sb-border: #353c3e;
  --sb-border-light: #454d4f;

  /* Semantic */
  --sb-success: #5cc6a0;
  --sb-success-text: #7ad3b4;
  --sb-success-surface: #173028;
  --sb-info: #4fb6e0;
  --sb-info-surface: #142c38;
  --sb-warning: #e0a93a;
  --sb-warning-surface: #332715;
  --sb-error: #ef6a5c;
  --sb-error-surface: #3a1f1c;
  --sb-ai: #a78bf0;
  --sb-ai-surface: #251d3a;

  /* Shadows (stronger for dark) */
  --sb-shadow-xs: 0 1px 3px rgba(0, 0, 0, .2);
  --sb-shadow-sm: 1px 2px 4px rgba(0, 0, 0, .3);
  --sb-shadow-md: 0 2px 8px rgba(0, 0, 0, .35);
  --sb-shadow-lg: 0 8px 28px rgba(0, 0, 0, .5);
}
```

---

## 4. Typography

- **UI face:** **Inter** (geometric-humanist sans — matches the LiminalArc feel). Self-host or load weights 300/400/500/600/700. Fallback stack: `Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
- **Monospace** (code, data, hex): `ui-monospace, "Cascadia Code", Menlo, Consolas, monospace`. Use `font-variant-numeric: tabular-nums` wherever digits align in columns.

### Scale (8 steps)

| Step | Size | Weight | Notes |
|---|---|---|---|
| Display | 46px / 2.9rem | 700 | letter-spacing -.02em, line-height ~1.05 |
| H1 | 36px / 2.25rem | 700 | letter-spacing -.02em |
| H2 | 28px / 1.75rem | 650 | letter-spacing -.015em |
| H3 | 22px / 1.375rem | 650 | |
| H4 | 18px / 1.125rem | 600 | |
| Body | 16px / 1rem | 400 | line-height ~1.55; body ≈ 65ch max width |
| Small | 14px / 0.875rem | 400 | secondary copy, table cells, helper |
| Caption | 12px / 0.75rem | 600 | UPPERCASE, letter-spacing .08em — eyebrows/labels |

Headings get `text-wrap: balance`.

---

## 5. Spacing, radius & shadow scales

**Spacing:** `--sb-space-xs` 4px · `sm` 8px · `md` 12px · `lg` 16px · `xl` 24px · `2xl` 32px · `3xl` 48px. Use for padding / gap / margin instead of ad-hoc px.

**Radius:** `--sb-radius-xs` 2px · `sm` 4px · `md` 8px (default control) · `lg` 12px (cards/dialogs) · `xl` 16px (pills/chips) · `full` 50% (dots/avatars).

**Shadow:** `--sb-shadow-xs` (hairline) · `sm` (resting cards) · `md` (raised cards) · `lg` (dialogs/popovers). Never hand-roll `box-shadow` — reach for a token.

---

## 6. Component conventions

> **Shipped as a ready-to-use layer:** import `brand-tokens/components` (`dist/components.css`) for these as **namespaced `.sb-*` classes** — `.sb-btn` (+ `--primary/--accent/--secondary/--ghost/--danger`, `--sm/--lg`, real `:hover/:active/:focus-visible/[disabled]`), `.sb-badge`/`.sb-chip` (+ semantic variants, `.sb-badge__dot`), `.sb-field` (+ `--error`, `__hint`), `.sb-card` (+ `__body`/`__foot`), `.sb-table` (+ `__zebra`). Apply the classes directly in any framework, or build your own to the spec below. Components that come from a framework's own library (e.g. Angular Material buttons) should be themed via the **tokens**, not these classes.

One shape language. Controls share `--sb-radius-md`; cards/dialogs `--sb-radius-lg`; chips/pills `--sb-radius-xl`.

**Buttons** — one system, five intents, full interaction states:
| Variant | Rest | Hover | Use |
|---|---|---|---|
| Primary | `--sb-primary` bg, white text | `--sb-primary-strong` | Default action |
| Accent (Blaze) | `--sb-accent-strong` bg, white text | brighten | Marketing CTAs / brand moments |
| Secondary | transparent, `--sb-primary` text, `--sb-border-light` border | `--sb-primary-surface` bg | Secondary action |
| Ghost | transparent, `--sb-text-secondary` | `--sb-surface-hover` bg | Tertiary / toolbar |
| Danger | `--sb-error` bg, white text | brighten | Destructive |

Padding `9px 18px`, font-weight 600, radius `--sb-radius-md`. Focus: `box-shadow: 0 0 0 3px var(--sb-primary-surface), 0 0 0 4px var(--sb-primary)`. Disabled: `opacity .45`. Always provide a visible keyboard focus state.

**Inputs** — `--sb-surface` bg, `--sb-border-light` border, radius `--sb-radius-md`. Focus: border `--sb-primary` + `0 0 0 3px var(--sb-primary-surface)`. Error: border `--sb-error`, hint text `--sb-error`.

**Cards** — `--sb-surface`, `--sb-border`, radius `--sb-radius-lg`, `--sb-shadow-md`. Footer band uses `--sb-surface-variant`.

**Chips / badges** — radius `--sb-radius-xl`, font 12px/600. Variants map to semantic surfaces: neutral (`--sb-surface-hover`), primary (`--sb-primary-surface`), success (`--sb-success-surface`/`-text`), warn (`--sb-warning-surface`/`--sb-warning`), error (`--sb-error-surface`/`--sb-error`), AI (`--sb-ai-surface`/`--sb-ai`).

**Dialogs** — `--sb-surface`, radius `--sb-radius-lg`, `--sb-shadow-lg`; actions right-aligned, ghost (cancel) + filled (confirm).

**Tables** — uppercase 12px muted headers with a 2px `--sb-border` bottom rule; 1px row separators; optional zebra via `--sb-surface-variant`; `tabular-nums` on numeric columns; wrap wide tables in an `overflow-x: auto` container.

---

## 7. Reference implementation

- **Live styleguide** (StormBoard): `/admin/brand` route — renders every token + component off the live values.
- **Source:** `client/src/app/styles/_tokens.scss` (tokens), `client/src/app/pages/brand/` (styleguide).
- **Brand origin:** LiminalArc (liminalarc.co). Exact brand hex/font specs, if formalized, supersede the derived values here.
