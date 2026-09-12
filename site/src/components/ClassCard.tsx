import type { ClassEntry, MatrixRow } from '../types';
import { href } from '../lib/router';
import { standingMeta } from '../lib/site';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { homeSpecRows, levelingPick, playbookForRow, roleShort } from './class/data';
import { ChevronRightIcon } from './Icons';

/** Where a spec row leads: its own guide when one exists, else the class page. */
function rowTarget(entry: ClassEntry, row: MatrixRow): string {
  const playbook = playbookForRow(entry, row);
  return playbook ? href.playbook(entry.slug, playbook.id) : href.class(entry.slug);
}

export function ClassCard({ entry }: { entry: ClassEntry }) {
  const theme = useThemeValue();
  const ink = readableColor(entry.color, theme);
  const rows = homeSpecRows(entry);
  const leveling = levelingPick(entry);

  return (
    <article
      className="card flex min-w-0 flex-col gap-2.5 overflow-hidden break-words p-5"
      style={{ borderTopWidth: '3px', borderTopColor: ink }}
    >
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="min-w-0 text-xl font-extrabold">
          <a href={href.class(entry.slug)} style={{ color: ink }} className="hover:underline">
            {entry.name}
          </a>
        </h3>
        <span className="shrink-0 text-xs text-muted">
          {entry.playbooks.length} guide{entry.playbooks.length === 1 ? '' : 's'}
        </span>
      </div>

      {rows.length === 0 ? (
        <p className="text-sm text-muted">No spec is rated for this class yet.</p>
      ) : (
        <ul className="flex flex-col">
          {rows.map((row) => (
            <li key={row.spec}>
              <a
                href={rowTarget(entry, row.chips[0].row)}
                className="-mx-1.5 flex items-center justify-between gap-2 rounded-lg px-1.5 py-1.5 transition-colors hover:bg-surface2"
              >
                <span className="min-w-0 truncate text-[13px] font-semibold">{row.spec}</span>
                <span className="flex shrink-0 flex-wrap justify-end gap-1">
                  {row.chips.map((chip) => {
                    const meta = standingMeta(chip.standing);
                    const color = readableColor(meta?.color ?? '#8a8f98', theme);
                    return (
                      <span
                        key={chip.role}
                        className="chip text-[11px] font-semibold"
                        style={{ color, backgroundColor: `${color}1f`, border: `1px solid ${color}59` }}
                        title={`${meta?.label ?? chip.standing} for ${roleShort(chip.role)}`}
                      >
                        <span className="sr-only">{meta?.label ?? chip.standing}: </span>
                        {roleShort(chip.role)}
                      </span>
                    );
                  })}
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-auto border-t pt-2.5 text-xs text-muted">
        {leveling ? (
          <>
            Level as{' '}
            {entry.leveling ? (
              <a
                href={href.leveling(entry.slug)}
                className="inline-flex items-center gap-0.5 font-semibold text-ink hover:underline"
              >
                {leveling}
                <ChevronRightIcon className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span className="font-semibold text-ink">{leveling}</span>
            )}
          </>
        ) : (
          'No leveling spec is favored in the sources.'
        )}
      </p>
    </article>
  );
}
