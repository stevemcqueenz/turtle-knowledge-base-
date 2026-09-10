import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';

interface BadgeProps {
  label: string;
  color?: string;
  title?: string;
  /** solid = filled dot + tinted background; outline = text only */
  variant?: 'solid' | 'outline';
  className?: string;
}

/** Small status pill. Color is applied as text + 12% tinted background. */
export function Badge({ label, color, title, variant = 'solid', className = '' }: BadgeProps) {
  const theme = useThemeValue();
  // Status colors are tuned for the dark theme; darken them on light so the
  // label keeps a 4.5:1 contrast ratio.
  const c = color ? readableColor(color, theme) : 'rgb(var(--c-muted))';
  return (
    <span
      className={`chip hairline ${className}`}
      title={title}
      style={
        variant === 'solid'
          ? {
              color: c,
              backgroundColor: color ? `${c}1f` : 'rgb(var(--c-surface-2))',
              borderColor: color ? `${c}59` : undefined,
            }
          : { color: c }
      }
    >
      {variant === 'solid' ? (
        <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: c }} aria-hidden="true" />
      ) : null}
      <span>{label}</span>
    </span>
  );
}
