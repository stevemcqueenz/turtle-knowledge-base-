import { useCallback, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';
const STORAGE_KEY = 'twow-theme';

function readStoredTheme(): Theme {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>(readStoredTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* storage blocked: the theme still applies for this page view */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), []);
  return { theme, toggle };
}

/* ---- class colors ------------------------------------------------------- */

function hexToRgb(hex: string): [number, number, number] {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  if (!m) return [200, 200, 200];
  const n = parseInt(m[1], 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function toHex([r, g, b]: [number, number, number]): string {
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}

function luminance([r, g, b]: [number, number, number]): number {
  const f = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
}

/**
 * Class colors are the standard WoW class colors, which are tuned for a dark
 * background. For readable text we darken the very light ones on the light
 * theme (priest #FFFFFF becomes about #5c5c5c, as PLAN §4 requires) and dim
 * pure white slightly on the dark theme (#E8E8E8).
 */
export function readableColor(hex: string, theme: Theme): string {
  let rgb = hexToRgb(hex);
  if (theme === 'light') {
    let guard = 0;
    while (luminance(rgb) > 0.115 && guard < 40) {
      rgb = [rgb[0] * 0.92, rgb[1] * 0.92, rgb[2] * 0.92];
      guard += 1;
    }
    return toHex(rgb);
  }
  if (luminance(rgb) > 0.92) return '#E8E8E8';
  let guard = 0;
  // Lighten the darker hues (shaman blue, the neutral gray) until they clear
  // 4.5:1 against the dark background and the 16%-tinted badge fills.
  while (luminance(rgb) < 0.3 && guard < 40) {
    rgb = [rgb[0] + (255 - rgb[0]) * 0.12, rgb[1] + (255 - rgb[1]) * 0.12, rgb[2] + (255 - rgb[2]) * 0.12];
    guard += 1;
  }
  return toHex(rgb);
}
