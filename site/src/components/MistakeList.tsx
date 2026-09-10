import { scalarToString, isPlainObject } from '../lib/site';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { WarningIcon } from './Icons';
import { YamlValue } from './YamlValue';

/** Common mistakes as small warning callouts. */
export function MistakeList({ mistakes }: { mistakes: unknown[] }) {
  const theme = useThemeValue();
  if (!mistakes?.length) return null;
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {mistakes.map((m, i) => (
        <li
          key={i}
          className="flex gap-2 rounded-xl p-3 text-sm hairline"
          style={{ backgroundColor: 'rgba(245,185,66,0.07)', borderColor: 'rgba(245,185,66,0.3)' }}
        >
          <span className="mt-0.5 shrink-0" style={{ color: readableColor('#f5b942', theme) }}>
            <WarningIcon />
          </span>
          <span className="min-w-0">
            {isPlainObject(m) || Array.isArray(m) ? <YamlValue value={m} /> : scalarToString(m)}
          </span>
        </li>
      ))}
    </ul>
  );
}
