import { useSyncExternalStore, type CSSProperties, type ReactNode } from 'react';
import { cellStyle, sheetState, subscribeSheets, type IconRef } from '../../lib/icons';
import { cn } from '../../lib/utils';

const serverState = () => 'loading' as const;

/**
 * One in-game icon (a cell of a sprite sheet in public/icons/). Fixed-size box
 * (no layout shift while the sheet arrives); `fallback` renders instead when
 * there is no icon or the sheet fails to load. `grey` desaturates it the way
 * the game draws an unlearned talent.
 */
export function GameIcon({
  icon,
  label,
  size,
  grey = false,
  fallback = null,
  className,
  style,
}: {
  icon: IconRef | null | undefined;
  /** Accessible name; omit for decorative icons next to their own label. */
  label?: string;
  /** Edge in px; omit to fill the parent (give it a size via className). */
  size?: number;
  grey?: boolean;
  fallback?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const url = icon?.sheet.url ?? '';
  const state = useSyncExternalStore(subscribeSheets, () => (url ? sheetState(url) : 'error'), serverState);
  if (!icon || state === 'error') return <>{fallback}</>;
  return (
    <span
      role={label ? 'img' : undefined}
      aria-label={label || undefined}
      aria-hidden={label ? undefined : true}
      className={cn('game-icon', className)}
      data-grey={grey ? 'true' : undefined}
      style={{ ...cellStyle(icon), ...(size ? { width: size, height: size } : null), ...style }}
    />
  );
}
