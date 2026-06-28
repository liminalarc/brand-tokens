// WCAG contrast audit (run: npm run audit). Checks key text/background token
// pairings in light + dark. AA: >=4.5 normal text, >=3.0 large text / UI.
// Exits non-zero on any failure so it can gate CI (Spec 6).
import { readFileSync } from 'node:fs';

const C = JSON.parse(readFileSync(new URL('./tokens.json', import.meta.url), 'utf8')).color;

function lum(hex) {
  const h = hex.replace('#', '');
  const f = h.length === 3 ? h.split('').map(c => c + c).join('') : h;
  const [r, g, b] = [0, 2, 4].map(i => parseInt(f.slice(i, i + 2), 16) / 255)
    .map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(a, b) {
  const [la, lb] = [lum(a), lum(b)].sort((x, y) => y - x);
  return (la + 0.05) / (lb + 0.05);
}
const v = (name, theme) => (C[name] || {})[theme];

// [fgToken, bgToken, minRatio, label]
const PAIRS = [
  ['text', 'surface', 4.5, 'body text on surface'],
  ['text-secondary', 'surface', 4.5, 'secondary text on surface'],
  ['text-muted', 'surface', 4.5, 'muted text on surface'],
  ['text-faint', 'surface', 3.0, 'faint text on surface (large/UI only)'],
  ['text-inverse', 'primary', 4.5, 'inverse text on primary fill'],
  ['text-inverse', 'primary-strong', 4.5, 'on primary-strong fill'],
  ['text-inverse', 'accent-strong', 4.5, 'on accent-strong (CTA) fill'],
  ['text-inverse', 'error', 4.5, 'on error fill'],
  ['text-inverse', 'success', 3.0, 'on success fill (UI)'],
  ['success-text', 'success-surface', 4.5, 'success text on success-surface'],
  ['warning', 'warning-surface', 4.5, 'warning text on warning-surface'],
  ['error', 'error-surface', 4.5, 'error text on error-surface'],
  ['info', 'info-surface', 4.5, 'info text on info-surface'],
  ['ai', 'ai-surface', 4.5, 'AI text on ai-surface'],
  ['primary-strong', 'primary-surface', 4.5, 'primary-strong on primary-surface (badge)'],
  ['primary', 'surface', 4.5, 'primary link text on surface'],
];

let fails = 0;
for (const theme of ['light', 'dark']) {
  console.log(`\n=== ${theme.toUpperCase()} ===`);
  for (const [fg, bg, min, label] of PAIRS) {
    const a = v(fg, theme), b = v(bg, theme);
    if (!a || !b) { console.log(`  ??   ${label} (missing token)`); continue; }
    const r = ratio(a, b);
    const ok = r >= min;
    if (!ok) fails++;
    console.log(`  ${ok ? 'PASS' : 'FAIL'}  ${r.toFixed(2)}:1 (min ${min})  ${label}`);
  }
}
console.log(`\n${fails === 0 ? 'ALL PASS' : fails + ' FAILURE(S)'}`);
process.exit(fails === 0 ? 0 : 1);
