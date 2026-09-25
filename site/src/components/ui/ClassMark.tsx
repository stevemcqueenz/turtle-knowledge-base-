import type { CSSProperties } from 'react';
import { Crosshair, Hammer, PawPrint, Skull, Sun, Swords, VenetianMask, WandSparkles, Zap, type LucideIcon } from 'lucide-react';
import { inkOn, readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';
import { cn } from '../../lib/utils';
import { classIcon, type IconRef } from '../../lib/icons';
import { GameIcon } from './GameIcon';

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
 * CSS variables that put a class in charge of a subtree: `--cc` (the class
 * color, theme-tuned, as "r g b"), `--cc-raw` (the official color) and
 * `--cc-ink` (text on a solid class-color fill).
 */
export function useClassVars(color: string): CSSProperties {
  const { ink, rgb } = useClassInk(color);
  return {
    ['--cc' as string]: rgb,
    ['--cc-raw' as string]: rgbTriplet(color),
    ['--cc-ink' as string]: rgbTriplet(inkOn(ink)),
  };
}

const GLYPHS: Record<string, LucideIcon> = {
  warrior: Swords,
  paladin: Hammer,
  hunter: Crosshair,
  rogue: VenetianMask,
  priest: Sun,
  shaman: Zap,
  mage: WandSparkles,
  warlock: Skull,
  druid: PawPrint,
};

const SIZES = {
  xs: 'h-4 w-4 rounded-[3px] [&_svg]:h-2.5 [&_svg]:w-2.5',
  sm: 'h-5 w-5 rounded-[4px] [&_svg]:h-3 [&_svg]:w-3',
  md: 'h-8 w-8 rounded-[5px] [&_svg]:h-4 [&_svg]:w-4',
  lg: 'h-10 w-10 rounded-md [&_svg]:h-5 [&_svg]:w-5',
  xl: 'h-12 w-12 rounded-md [&_svg]:h-6 [&_svg]:w-6',
} as const;

/**
 * A class emblem: the class's in-game icon (the character-create atlas) in a
 * rim of the official class color, like an action-bar button. Falls back to a
 * lucide glyph on a dark bevel when the icon is missing. `badge` puts a small
 * second icon (the spec's talent tree) in the bottom-right corner.
 */
export function ClassMark({
  name,
  color,
  size = 'md',
  badge,
  className,
}: {
  name: string;
  color: string;
  size?: keyof typeof SIZES;
  badge?: IconRef | null;
  className?: string;
}) {
  const Glyph = GLYPHS[name.toLowerCase()] ?? Swords;
  const raw = rgbTriplet(color);
  const glyph = (
    <span
      className="absolute inset-0 inline-flex items-center justify-center rounded-[inherit]"
      style={{ background: `radial-gradient(120% 120% at 30% 20%, rgb(${raw} / 0.28), rgb(${raw} / 0.06) 55%, #0c0e13 100%), #0c0e13` }}
    >
      <Glyph strokeWidth={2.2} />
    </span>
  );
  return (
    <span
      aria-hidden="true"
      className={cn('relative inline-flex shrink-0 items-center justify-center', SIZES[size], className)}
      style={{ color: `rgb(${raw})`, background: '#0c0e13' }}
    >
      <GameIcon icon={classIcon(name)} className="absolute inset-0 h-full w-full rounded-[inherit]" fallback={glyph} />
      <span
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ boxShadow: `inset 0 0 0 1px rgb(${raw} / 0.7), inset 0 0 0 2px rgb(0 0 0 / 0.35), 0 1px 2px rgb(0 0 0 / 0.5)` }}
      />
      {badge ? (
        <GameIcon
          icon={badge}
          className="absolute -bottom-1 -right-1 h-[45%] w-[45%] rounded-[3px] ring-2 ring-background"
        />
      ) : null}
    </span>
  );
}
