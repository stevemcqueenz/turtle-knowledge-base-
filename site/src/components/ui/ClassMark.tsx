import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';

/** Hex -> "r g b" for CSS custom properties (`rgb(var(--cc) / 0.2)`). */
export function rgbTriplet(hex: string): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim());
  const n = m ? parseInt(m[1], 16) : 0xc8c8c8;
  return `${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255}`;
}

/** The class color as text/ink for the current theme, and as an RGB triplet. */
export function useClassInk(color: string): { ink: string; rgb: string } {
  const theme = useThemeValue();
  const ink = readableColor(color, theme);
  return { ink, rgb: rgbTriplet(ink) };
}

/**
 * A class monogram: the initial in a book face on a tinted tile. The site
 * carries no game artwork, so the class color and its letter are the emblem.
 */
export function ClassMark({ name, color, size = 'md' }: { name: string; color: string; size?: 'sm' | 'md' | 'lg' | 'xl' }) {
  const { ink, rgb } = useClassInk(color);
  const dims = {
    sm: 'h-6 w-6 text-[0.8rem] rounded-md',
    md: 'h-9 w-9 text-lg rounded-lg',
    lg: 'h-12 w-12 text-2xl rounded-xl',
    xl: 'h-16 w-16 text-[2.1rem] rounded-2xl',
  }[size];
  return (
    <span
      aria-hidden="true"
      className={`inline-flex shrink-0 items-center justify-center font-serif font-bold leading-none ${dims}`}
      style={{
        color: ink,
        background: `linear-gradient(145deg, rgb(${rgb} / 0.26), rgb(${rgb} / 0.08))`,
        boxShadow: `inset 0 0 0 1px rgb(${rgb} / 0.45)`,
      }}
    >
      {name.charAt(0)}
    </span>
  );
}
