import { useState } from 'react';
import type { ClassSummary, Viability, ViabilityRow } from '../../types';
import { ACTIVITY_LABELS } from '../../lib/grades';
import { plainText } from '../../lib/markdown';
import { href } from '../../lib/router';
import { Markdown } from '../Markdown';
import { Grade } from '../ui/Grade';
import { ArrowRightIcon } from '../Icons';

export function GradeLegend() {
  return (
    <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted">
      {[
        ['S', 'best choice'],
        ['A', 'strong'],
        ['B', 'fine'],
        ['C', 'weak'],
      ].map(([g, word]) => (
        <span key={g} className="inline-flex items-center gap-1.5">
          <Grade cell={{ grade: g, label: g, contested: false }} column="Legend" size="sm" /> {word}
        </span>
      ))}
      <span className="inline-flex items-center gap-1.5">
        <Grade cell={{ grade: null, label: '—', contested: false }} column="Legend" size="sm" /> not a role
      </span>
      <span>* contested</span>
    </p>
  );
}

function rowTarget(cls: ClassSummary, row: ViabilityRow): string | null {
  if (row.playbookId) return href.playbook(cls.slug, row.playbookId);
  return row.route;
}

const label = (key: string, fallback: string) => ACTIVITY_LABELS[key] ?? fallback;

/**
 * The guide's spec viability table as the centrepiece of a class page. Wide
 * screens: a ratings grid whose cells open the guide's reasoning (with its
 * citations) in a panel below. Phones: one card per spec with the ratings in a
 * strip and the reasoning folded.
 */
export function ViabilityMatrix({ cls, viability }: { cls: ClassSummary; viability: Viability }) {
  const [sel, setSel] = useState<{ r: number; c: number }>({ r: 0, c: 0 });
  const cols = viability.columns;
  const selRow = viability.rows[sel.r];
  const selCell = selRow?.cells[sel.c];

  return (
    <div className="space-y-4">
      {/* wide screens */}
      <div className="hidden md:block">
        <div className="card overflow-hidden">
          <table className="w-full table-fixed border-collapse text-sm">
            <caption className="sr-only">
              {cls.name} spec viability in patch 1.18.1. Select a rating to read why.
            </caption>
            <colgroup>
              <col className="w-[22%]" />
              {cols.map((c) => (
                <col key={c.key} />
              ))}
            </colgroup>
            <thead>
              <tr className="border-b bg-surface2/60">
                <th scope="col" className="px-4 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted">
                  Spec
                </th>
                {cols.map((c) => (
                  <th key={c.key} scope="col" className="px-2 py-2.5 text-left text-[11px] font-semibold uppercase tracking-wider text-muted">
                    {label(c.key, c.label)}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {viability.rows.map((row, ri) => {
                const target = rowTarget(cls, row);
                return (
                  <tr key={row.spec + ri} className="border-b last:border-b-0">
                    <th scope="row" className="px-4 py-3 text-left align-top font-normal">
                      {target ? (
                        <a href={target} className="group font-serif text-[1.05rem] font-semibold hover:text-accent">
                          {row.spec}
                          <ArrowRightIcon className="ml-1 inline h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                        </a>
                      ) : (
                        <span className="font-serif text-[1.05rem] font-semibold">{row.spec}</span>
                      )}
                      {row.detail ? <span className="block text-xs text-muted">{row.detail.replace(/^\(|\)$/g, '')}</span> : null}
                    </th>
                    {row.cells.map((cell, ci) => {
                      const selected = sel.r === ri && sel.c === ci;
                      const preview = plainText(cell.note, 90);
                      return (
                        <td key={ci} className="p-1 align-top">
                          <button
                            type="button"
                            onClick={() => setSel({ r: ri, c: ci })}
                            aria-pressed={selected}
                            aria-controls="viability-detail"
                            className={`flex h-full w-full items-start gap-2 rounded-xl p-2 text-left transition-colors ${
                              selected ? 'bg-accent/10 ring-1 ring-accent/50' : 'hover:bg-surface2/70'
                            }`}
                          >
                            <Grade cell={cell} column={label(cols[ci].key, cols[ci].label)} />
                            <span className="line-clamp-3 min-w-0 pt-px text-[12.5px] leading-snug text-muted first-letter:uppercase">{preview}</span>
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {selRow && selCell ? (
          <div id="viability-detail" className="panel mt-3 p-4 sm:p-5" aria-live="polite">
            <div className="flex flex-wrap items-center gap-3">
              <Grade cell={selCell} column={label(cols[sel.c].key, cols[sel.c].label)} size="lg" />
              <div className="min-w-0">
                <p className="eyebrow">{label(cols[sel.c].key, cols[sel.c].label)}</p>
                <p className="font-serif text-lg font-semibold">
                  {selRow.spec}
                  {selCell.grade ? <span className="font-sans text-sm font-normal text-muted"> · rated {selCell.label}</span> : null}
                </p>
              </div>
              {rowTarget(cls, selRow) ? (
                <a href={rowTarget(cls, selRow)!} className="btn btn-ghost ml-auto">
                  Open the {selRow.spec} guide <ArrowRightIcon />
                </a>
              ) : null}
            </div>
            {selCell.note ? (
              <Markdown source={selCell.note} className="cap-first mt-3 text-[0.97rem]" />
            ) : (
              <p className="mt-3 text-sm text-muted">The guide gives no further detail for this rating.</p>
            )}
          </div>
        ) : null}
      </div>

      {/* phones */}
      <div className="space-y-3 md:hidden">
        {viability.rows.map((row, ri) => {
          const target = rowTarget(cls, row);
          return (
            <div key={row.spec + ri} className="card p-4">
              <div className="flex items-baseline justify-between gap-3">
                {target ? (
                  <a href={target} className="font-serif text-lg font-semibold">
                    {row.spec} <ArrowRightIcon className="inline h-3.5 w-3.5 text-muted" />
                  </a>
                ) : (
                  <span className="font-serif text-lg font-semibold">{row.spec}</span>
                )}
                {row.detail ? <span className="text-xs text-muted">{row.detail.replace(/^\(|\)$/g, '')}</span> : null}
              </div>
              <div className="mt-3 grid grid-cols-5 gap-1.5">
                {row.cells.map((cell, ci) => (
                  <div key={ci} className="flex flex-col items-center gap-1">
                    <Grade cell={cell} column={label(cols[ci].key, cols[ci].label)} />
                    <span className="text-center text-[10px] uppercase leading-tight tracking-wide text-muted">
                      {label(cols[ci].key, cols[ci].label)}
                    </span>
                  </div>
                ))}
              </div>
              <details className="group mt-3 border-t pt-2">
                <summary className="cursor-pointer list-none py-1 text-sm font-semibold text-accent">
                  <span className="group-open:hidden">Why these ratings</span>
                  <span className="hidden group-open:inline">Hide the reasons</span>
                </summary>
                <dl className="mt-2 space-y-3">
                  {row.cells.map((cell, ci) =>
                    cell.note ? (
                      <div key={ci}>
                        <dt className="eyebrow">
                          {label(cols[ci].key, cols[ci].label)} · {cell.label}
                        </dt>
                        <dd>
                          <Markdown source={cell.note} className="cap-first text-[0.95rem]" />
                        </dd>
                      </div>
                    ) : null,
                  )}
                </dl>
              </details>
            </div>
          );
        })}
      </div>

      <GradeLegend />
      {viability.notes ? <Markdown source={viability.notes} className="pt-2" /> : null}
    </div>
  );
}
