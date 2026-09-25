import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { ClassSummary, Viability, ViabilityCell, ViabilityRow } from '../../types';
import { ACTIVITY_LABELS, GRADE_WORDS } from '../../lib/grades';
import { plainText } from '../../lib/markdown';
import { href } from '../../lib/router';
import { cn } from '../../lib/utils';
import { Markdown } from '../Markdown';
import { GAME_QUALITY, Grade, QUALITY_NAME, qualityOf } from '../ui/Grade';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card';
import { Button } from '../ui/button';

export function GradeLegend({ className }: { className?: string }) {
  return (
    <p className={cn('flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground', className)}>
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
        <Grade cell={{ grade: null, label: '—', contested: false }} column="Legend" size="sm" /> not rated
      </span>
      <span>* players disagree</span>
    </p>
  );
}

/** The in-game-style tooltip body for one rating. */
export function RatingTooltip({ spec, column, cell }: { spec: string; column: string; cell: ViabilityCell }) {
  const q = qualityOf(cell.grade);
  const note = plainText(cell.note, 320).replace(/[\s,;:]+$/, '');
  return (
    <div className="space-y-1">
      <p className="wow-tt-title">
        {spec} · {column}
      </p>
      <p className="font-semibold" style={{ color: GAME_QUALITY[q] }}>
        {cell.grade ? `${cell.label} · ${GRADE_WORDS[cell.grade[0]] ?? ''}` : cell.label === '—' ? 'Not a role for this spec' : cell.label || 'Not rated'}
        <span className="wow-tt-meta font-normal"> ({QUALITY_NAME[q]})</span>
      </p>
      {cell.contested ? <p className="wow-tt-meta">Players disagree on this rating.</p> : null}
      {note ? <p>{note.charAt(0).toUpperCase() + note.slice(1)}</p> : null}
    </div>
  );
}

function rowTarget(cls: ClassSummary, row: ViabilityRow): string | null {
  if (row.playbookId) return href.playbook(cls.slug, row.playbookId);
  return row.route;
}

const label = (key: string, fallback: string) => ACTIVITY_LABELS[key] ?? fallback;

/**
 * The guide's spec viability table: specs × activities as item-quality
 * badges. Hovering a rating shows the reason as an in-game tooltip; selecting
 * it opens the full reasoning with its citations below the table.
 */
export function ViabilityMatrix({ cls, viability }: { cls: ClassSummary; viability: Viability }) {
  const [sel, setSel] = useState<{ r: number; c: number }>({ r: 0, c: 0 });
  const cols = viability.columns;
  const selRow = viability.rows[sel.r];
  const selCell = selRow?.cells[sel.c];
  const selTarget = selRow ? rowTarget(cls, selRow) : null;

  return (
    <div className="space-y-3">
      <div className="hidden overflow-hidden rounded-lg border md:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{cls.name} spec ratings in patch 1.18.1. Select a rating to read why.</caption>
          <thead>
            <tr className="border-b bg-muted/40">
              <th scope="col" className="h-9 px-4 text-left text-xs font-medium text-muted-foreground">
                Spec
              </th>
              {cols.map((c) => (
                <th key={c.key} scope="col" className="h-9 px-2 text-center text-xs font-medium text-muted-foreground">
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
                  <th scope="row" className="px-4 py-2 text-left font-normal">
                    {target ? (
                      <a href={target} className="font-medium hover:underline">
                        {row.spec}
                      </a>
                    ) : (
                      <span className="font-medium">{row.spec}</span>
                    )}
                    {row.detail ? <span className="ml-2 text-xs tabular text-muted-foreground">{row.detail.replace(/^\(|\)$/g, '')}</span> : null}
                  </th>
                  {row.cells.map((cell, ci) => {
                    const selected = sel.r === ri && sel.c === ci;
                    const col = label(cols[ci].key, cols[ci].label);
                    return (
                      <td key={ci} className="p-1 text-center">
                        <HoverCard openDelay={120} closeDelay={60}>
                          <HoverCardTrigger asChild>
                            <button
                              type="button"
                              onClick={() => setSel({ r: ri, c: ci })}
                              aria-pressed={selected}
                              aria-controls="viability-detail"
                              className={cn(
                                'inline-flex h-9 w-full max-w-[5.5rem] items-center justify-center rounded-md transition-colors',
                                selected ? 'bg-accent ring-1 ring-foreground/25' : 'hover:bg-accent/60',
                              )}
                            >
                              <Grade cell={cell} column={`${row.spec}, ${col}`} />
                            </button>
                          </HoverCardTrigger>
                          <HoverCardContent side="top" className="w-80">
                            <RatingTooltip spec={row.spec} column={col} cell={cell} />
                          </HoverCardContent>
                        </HoverCard>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {selRow && selCell ? (
          <div id="viability-detail" className="border-t bg-muted/25 px-4 py-4" aria-live="polite">
            <div className="flex flex-wrap items-center gap-3">
              <Grade cell={selCell} column={label(cols[sel.c].key, cols[sel.c].label)} size="lg" />
              <div className="min-w-0">
                <p className="text-sm font-semibold">
                  {selRow.spec} · {label(cols[sel.c].key, cols[sel.c].label)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {selCell.grade ? `Rated ${selCell.label}, ${GRADE_WORDS[selCell.grade[0]] ?? ''}` : 'Not rated'}
                  {selCell.contested ? ' · players disagree' : ''}
                </p>
              </div>
              {selTarget ? (
                <Button asChild variant="outline" size="sm" className="ml-auto">
                  <a href={selTarget}>
                    {selRow.spec} guide <ArrowRight />
                  </a>
                </Button>
              ) : null}
            </div>
            {selCell.note ? (
              <Markdown source={selCell.note} className="cap-first mt-3 text-sm" />
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">The guide gives no further detail for this rating.</p>
            )}
          </div>
        ) : null}
      </div>

      {/* phones: one row per spec, the reasons folded */}
      <ul className="divide-y overflow-hidden rounded-lg border md:hidden">
        {viability.rows.map((row, ri) => {
          const target = rowTarget(cls, row);
          return (
            <li key={row.spec + ri} className="p-3">
              <div className="flex items-baseline justify-between gap-3">
                {target ? (
                  <a href={target} className="font-medium">
                    {row.spec}
                  </a>
                ) : (
                  <span className="font-medium">{row.spec}</span>
                )}
                {row.detail ? <span className="text-xs tabular text-muted-foreground">{row.detail.replace(/^\(|\)$/g, '')}</span> : null}
              </div>
              <div className="mt-2 grid grid-cols-5 gap-1">
                {row.cells.map((cell, ci) => (
                  <div key={ci} className="flex flex-col items-center gap-1">
                    <Grade cell={cell} column={label(cols[ci].key, cols[ci].label)} />
                    <span className="text-center text-[11px] leading-tight text-muted-foreground">{label(cols[ci].key, cols[ci].label)}</span>
                  </div>
                ))}
              </div>
              <details className="group mt-2">
                <summary className="cursor-pointer list-none py-1 text-[13px] text-link">
                  <span className="group-open:hidden">Why these ratings</span>
                  <span className="hidden group-open:inline">Hide the reasons</span>
                </summary>
                <dl className="mt-2 space-y-3">
                  {row.cells.map((cell, ci) =>
                    cell.note ? (
                      <div key={ci}>
                        <dt className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                          <Grade cell={cell} column={label(cols[ci].key, cols[ci].label)} size="sm" />
                          {label(cols[ci].key, cols[ci].label)}
                        </dt>
                        <dd className="mt-1">
                          <Markdown source={cell.note} className="cap-first text-sm" />
                        </dd>
                      </div>
                    ) : null,
                  )}
                </dl>
              </details>
            </li>
          );
        })}
      </ul>

      <GradeLegend />
      {viability.notes ? <Markdown source={viability.notes} className="pt-1 text-sm text-muted-foreground" /> : null}
    </div>
  );
}
