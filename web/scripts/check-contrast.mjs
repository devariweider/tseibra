/**
 * Verifica o contraste WCAG 2.1 dos pares de cor do design system.
 *
 *   node scripts/check-contrast.mjs
 *
 * Cobre apenas os tokens semânticos (o que o usuário realmente lê),
 * com foco no tema noturno. Sai com código 1 se algum par ficar abaixo
 * do mínimo exigido, para servir de gate em CI.
 */

/** @typedef {{ r: number, g: number, b: number }} Rgb */

/** @param {string} hex */
function hexToRgb(hex) {
  const clean = hex.replace('#', '').trim();
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((char) => char + char)
          .join('')
      : clean;
  return {
    r: Number.parseInt(full.slice(0, 2), 16),
    g: Number.parseInt(full.slice(2, 4), 16),
    b: Number.parseInt(full.slice(4, 6), 16),
  };
}

/** @param {Rgb} color */
function relativeLuminance(color) {
  /** @param {number} value */
  const channel = (value) => {
    const srgb = value / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : ((srgb + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(color.r) + 0.7152 * channel(color.g) + 0.0722 * channel(color.b);
}

/** @param {string} foreground @param {string} background */
function contrast(foreground, background) {
  const a = relativeLuminance(hexToRgb(foreground));
  const b = relativeLuminance(hexToRgb(background));
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

/** @type {Array<[string, string, number, string]>} */
const PAIRS = [
  // ---- Tema claro
  ['#16202e', '#ffffff', 4.5, 'claro · corpo de texto sobre superfície'],
  ['#16202e', '#f2f5f8', 4.5, 'claro · corpo sobre superfície secundária'],
  ['#5a6675', '#ffffff', 4.5, 'claro · texto secundário'],
  ['#5a6675', '#f2f5f8', 4.5, 'claro · texto secundário sobre superfície-2'],
  ['#6b7684', '#ffffff', 4.5, 'claro · texto sutil'],
  ['#1351a0', '#ffffff', 4.5, 'claro · link sobre superfície'],
  ['#0b3b6f', '#ffffff', 4.5, 'claro · título e número em círculo'],
  ['#ffffff', '#1351a0', 4.5, 'claro · texto no botão primário'],
  ['#17603c', '#e3f5ec', 4.5, 'claro · sucesso (badge/alert/callout)'],
  ['#6f4800', '#fff4dc', 4.5, 'claro · atenção (badge/alert/callout)'],
  ['#8f1e18', '#fdecea', 4.5, 'claro · erro (badge/alert)'],
  ['#0b3b6f', '#e8f0fb', 4.5, 'claro · informativo'],

  // ---- Tema noturno
  ['#e7edf5', '#17212e', 4.5, 'escuro · corpo de texto sobre superfície'],
  ['#e7edf5', '#1d2836', 4.5, 'escuro · corpo sobre superfície-2'],
  ['#a9b7c8', '#17212e', 4.5, 'escuro · texto secundário'],
  ['#a9b7c8', '#1d2836', 4.5, 'escuro · texto secundário sobre superfície-2'],
  ['#93a3b7', '#17212e', 4.5, 'escuro · texto sutil'],
  ['#7fb2f0', '#17212e', 4.5, 'escuro · link sobre superfície'],
  ['#b9d5f6', '#17212e', 4.5, 'escuro · título destacado / estatística'],
  ['#06121f', '#3f8ce0', 4.5, 'escuro · texto no botão primário'],
  ['#06121f', '#5ba0ec', 4.5, 'escuro · texto no botão primário (hover)'],
  ['#8fdcb6', '#14301f', 4.5, 'escuro · sucesso'],
  ['#f0c577', '#35280e', 4.5, 'escuro · atenção'],
  ['#f8a9a1', '#3a1c1a', 4.5, 'escuro · erro'],
  ['#b9d5f6', '#1b2f47', 4.5, 'escuro · informativo'],
  ['#a9b7c8', '#0e1621', 4.5, 'escuro · texto sobre o canvas'],
];

let failures = 0;
let worst = { ratio: Number.POSITIVE_INFINITY, label: '' };

for (const [foreground, background, minimum, label] of PAIRS) {
  const ratio = contrast(foreground, background);
  const passed = ratio >= minimum;
  const bar = '#'.repeat(Math.min(40, Math.round(ratio * 2))).padEnd(24, '.');
  console.log(`${passed ? 'ok  ' : 'FALHA'} ${ratio.toFixed(2).padStart(5)}:1 (min ${minimum})  ${bar}  ${label}`);
  if (!passed) {
    failures += 1;
    console.log(`       └─ ${foreground} sobre ${background}`);
  }
  if (ratio < worst.ratio) worst = { ratio, label };
}

console.log(`\n${PAIRS.length} pares verificados · ${failures} falha(s)`);
console.log(`Menor contraste: ${worst.ratio.toFixed(2)}:1 (${worst.label})`);

if (failures > 0) process.exitCode = 1;