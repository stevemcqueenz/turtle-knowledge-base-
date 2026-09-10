import type { MatrixRow } from '../types';
import { href } from '../lib/router';
import { classes, matrixRowTarget, roleLabel, standingMeta } from '../lib/site';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';

interface MatrixGridProps {
  rows: MatrixRow[];
  roles: string[];
}

function SpecChip({ row }: { row: MatrixRow }) {
  const theme = useThemeValue();
  const meta = standingMeta(row.standing);
  const color = readableColor(meta?.color ?? '#8a8f98', theme);
  const target = matrixRowTarget(row);
  const label = row.spec ?? meta?.label ?? '';
  const title = `${row.class ?? ''} ${row.spec ?? ''} ${roleLabel(row.role)} — ${meta?.label ?? row.standing}${
    row.agreement ? ` (${row.agreement})` : ''
  }`;

  const content = (
    <>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
      {label ? <span className="truncate">{label}</span> : null}
    </>
  );
  const className = 'chip hairline text-xs';
  const style = { backgroundColor: `${color}1f`, borderColor: `${color}59`, color: 'rgb(var(--c-text))' };

  if (!target) {
    return (
      <span className={className} style={style} title={title}>
        {content}
      </span>
    );
  }
  return (
    <a className={`${className} hover:underline`} style={style} title={title} href={href.playbook(target.slug, target.id)}>
      {content}
    </a>
  );
}

/** The class × role grid; cells are colored by community standing. */
export function MatrixGrid({ rows, roles }: MatrixGridProps) {
  const theme = useThemeValue();
  const present = roles.filter((role) => rows.some((r) => r.role === role));

  return (
    <div className="overflow-x-auto rounded-xl hairline">
      <table className="w-full border-collapse text-sm">
        <caption className="sr-only">Spec by role matrix: community standing per class, spec and role</caption>
        <thead>
          <tr className="bg-surface2">
            <th scope="col" className="sticky left-0 z-10 bg-surface2 px-3 py-2 text-left font-semibold">
              Class
            </th>
            {present.map((role) => (
              <th key={role} scope="col" className="whitespace-nowrap px-3 py-2 text-left font-semibold">
                {roleLabel(role)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {classes.map((entry) => {
            const ink = readableColor(entry.color, theme);
            return (
              <tr key={entry.slug} className="border-t align-top">
                <th scope="row" className="sticky left-0 z-10 whitespace-nowrap bg-surface px-3 py-2 text-left">
                  <a href={href.class(entry.slug)} className="font-semibold hover:underline" style={{ color: ink }}>
                    {entry.name}
                  </a>
                </th>
                {present.map((role) => {
                  const cellRows = rows.filter((r) => (r.class ?? '').toLowerCase() === entry.slug && r.role === role);
                  return (
                    <td key={role} className="px-3 py-2">
                      {cellRows.length === 0 ? (
                        <span className="text-xs text-muted">—</span>
                      ) : (
                        <div className="flex flex-wrap gap-1">
                          {cellRows.map((r, i) => (
                            <SpecChip key={`${r.spec}-${i}`} row={r} />
                          ))}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function StandingLegend() {
  const theme = useThemeValue();
  const items = ['favored', 'alternative', 'niche', 'not-viable'];
  return (
    <ul className="flex flex-wrap gap-2 text-xs text-muted">
      {items.map((s) => {
        const meta = standingMeta(s)!;
        return (
          <li key={s} className="flex items-center gap-1.5">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: readableColor(meta.color, theme) }}
              aria-hidden="true"
            />
            {meta.label}
          </li>
        );
      })}
    </ul>
  );
}
