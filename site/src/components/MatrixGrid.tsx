import type { MatrixRow } from '../types';
import { href } from '../lib/router';
import { classes, matrixRowTarget, roleLabel, standingMeta } from '../lib/site';
import { shortSpecName } from './class/data';
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
  // Short names keep the grid inside the 1,110 px container; the label is free
  // to wrap inside the chip so no column is forced wider than its content.
  const label = row.spec ? shortSpecName(row.spec) : (meta?.label ?? '');
  const title = `${row.class ?? ''} ${row.spec ?? ''} ${roleLabel(row.role)} — ${meta?.label ?? row.standing}${
    row.agreement ? ` (${row.agreement})` : ''
  }`;

  const content = (
    <>
      <span
        className="mt-1 h-1.5 w-1.5 shrink-0 self-start rounded-full"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {label ? <span className="min-w-0">{label}</span> : null}
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

function ChipRow({ rows }: { rows: MatrixRow[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {rows.map((r, i) => (
        <SpecChip key={`${r.spec}-${i}`} row={r} />
      ))}
    </div>
  );
}

/** The class × role grid; cells are colored by community standing. */
export function MatrixGrid({ rows, roles }: MatrixGridProps) {
  const theme = useThemeValue();
  const present = roles.filter((role) => rows.some((r) => r.role === role));
  const cellRows = (slug: string, role: string) =>
    rows.filter((r) => (r.class ?? '').toLowerCase() === slug && r.role === role);

  return (
    <>
      <div className="hidden overflow-x-auto rounded-xl hairline sm:block">
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
                    const cells = cellRows(entry.slug, role);
                    return (
                      <td key={role} className="px-3 py-2">
                        {cells.length === 0 ? <span className="text-xs text-muted">—</span> : <ChipRow rows={cells} />}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* A seven-column table cannot be read on a phone; one card per class can. */}
      <div className="flex flex-col gap-3 sm:hidden">
        {classes.map((entry) => {
          const ink = readableColor(entry.color, theme);
          const filled = present
            .map((role) => ({ role, cells: cellRows(entry.slug, role) }))
            .filter((g) => g.cells.length > 0);
          return (
            <section key={entry.slug} className="card flex flex-col gap-2.5 p-4">
              <h2>
                <a href={href.class(entry.slug)} className="font-semibold hover:underline" style={{ color: ink }}>
                  {entry.name}
                </a>
              </h2>
              {filled.length === 0 ? (
                <p className="text-xs text-muted">No rated specs.</p>
              ) : (
                filled.map(({ role, cells }) => (
                  <div key={role} className="flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                      {roleLabel(role)}
                    </span>
                    <ChipRow rows={cells} />
                  </div>
                ))
              )}
            </section>
          );
        })}
      </div>
    </>
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
