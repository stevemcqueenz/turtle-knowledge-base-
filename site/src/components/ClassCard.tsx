import type { ClassEntry } from '../types';
import { href } from '../lib/router';
import { classRoles, favoredSpecs, roleLabel } from '../lib/site';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';

export function ClassCard({ entry }: { entry: ClassEntry }) {
  const theme = useThemeValue();
  const ink = readableColor(entry.color, theme);
  const favored = favoredSpecs(entry);
  const roles = classRoles(entry);

  return (
    <a
      href={href.class(entry.slug)}
      className="group card flex min-w-0 flex-col gap-2 overflow-hidden break-words p-0 transition-colors hover:border-[color:var(--hover-border)]"
      style={{ ['--hover-border' as string]: `${entry.color}66` }}
    >
      <span aria-hidden="true" className="h-1 w-full" style={{ backgroundColor: entry.color }} />
      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex items-baseline justify-between gap-2">
          <h2 className="text-lg font-semibold" style={{ color: ink }}>
            {entry.name}
          </h2>
          <span className="text-xs text-muted">
            {entry.playbooks.length} playbook{entry.playbooks.length === 1 ? '' : 's'}
          </span>
        </div>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {favored.length > 0
            ? favored.slice(0, 4).map((row, i) => (
                <li key={`${row.spec}-${row.role}-${i}`} className="chip hairline bg-surface2 text-xs text-muted">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: readableColor('#3ddc84', theme) }}
                    aria-hidden="true"
                  />
                  <span className="text-ink">{row.spec}</span>
                  <span>{roleLabel(row.role)}</span>
                </li>
              ))
            : roles.map((r) => (
                <li key={r} className="chip hairline bg-surface2 text-xs text-muted">
                  {roleLabel(r)}
                </li>
              ))}
          {entry.leveling ? <li className="chip hairline bg-surface2 text-xs text-muted">Leveling</li> : null}
        </ul>
      </div>
    </a>
  );
}
