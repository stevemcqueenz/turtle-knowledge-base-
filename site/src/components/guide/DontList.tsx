import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';
import { describeValue } from './util';

/** The mistakes the sources call out, each behind an amber dash. */
export function DontList({ mistakes }: { mistakes: unknown[] }) {
  const theme = useThemeValue();
  const amber = readableColor('#f5b942', theme);
  if (mistakes.length === 0) return null;
  return (
    <ul className="card divide-y px-4 py-1 sm:px-5">
      {mistakes.map((m, i) => (
        <li key={i} className="flex gap-3 py-3 text-sm leading-snug">
          <span className="shrink-0 font-bold" style={{ color: amber }} aria-hidden="true">
            —
          </span>
          <span className="min-w-0">{describeValue(m)}</span>
        </li>
      ))}
    </ul>
  );
}
