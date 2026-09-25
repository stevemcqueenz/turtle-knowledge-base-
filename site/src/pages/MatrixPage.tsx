import { useEffect, useMemo, useState } from 'react';
import type { ClassSummary, ViabilityRow } from '../types';
import { classes } from '../lib/site';
import { hashParam, href, useScrollReset } from '../lib/router';
import { ACTIVITY_LABELS, cellFor, gradeScore } from '../lib/grades';
import { plainText } from '../lib/markdown';
import { PageHero } from '../components/layout/Page';
import { Grade } from '../components/ui/Grade';
import { ClassMark, useClassInk } from '../components/ui/ClassMark';
import { GradeLegend } from '../components/class/ViabilityMatrix';

const COLUMNS = ['raid', 'dungeon', 'pvp', 'leveling', 'farming'];
const TIERS: { key: string; test: (g: number) => boolean; label: string }[] = [
  { key: 'S', test: (g) => g >= 4.7, label: 'S · best choice' },
  { key: 'A', test: (g) => g >= 3.7 && g < 4.7, label: 'A · strong' },
  { key: 'B', test: (g) => g >= 2.7 && g < 3.7, label: 'B · fine' },
  { key: 'C', test: (g) => g >= 0 && g < 2.7, label: 'C · weak' },
];

function target(cls: ClassSummary, row: ViabilityRow, column: string): string {
  if (column === 'leveling') return href.leveling(cls.slug);
  if (row.playbookId) return href.playbook(cls.slug, row.playbookId);
  return row.route ?? href.class(cls.slug);
}

function SpecChip({ cls, row, column }: { cls: ClassSummary; row: ViabilityRow; column: string }) {
  const { ink, rgb } = useClassInk(cls.color);
  const cell = cellFor(row, column)!;
  return (
    <a
      href={target(cls, row, column)}
      title={plainText(cell.note, 240)}
      className="inline-flex max-w-full items-center gap-2 rounded-xl py-1.5 pl-1.5 pr-3 text-sm transition-colors hover:brightness-110"
      style={{ background: `rgb(${rgb} / 0.1)`, boxShadow: `inset 0 0 0 1px rgb(${rgb} / 0.35)` }}
    >
      <ClassMark name={cls.name} color={cls.color} size="sm" />
      <span className="min-w-0 truncate">
        <span className="font-semibold">{row.spec}</span> <span style={{ color: ink }}>{cls.name}</span>
        {cell.label && cell.label !== cell.grade ? <span className="ml-1 text-xs text-muted">{cell.label}</span> : null}
        {cell.contested ? <span className="ml-0.5 text-muted">*</span> : null}
      </span>
    </a>
  );
}

/**
 * The viability board: every spec of every class, from the spec viability table
 * of each class guide, as a tier list per activity, and the whole table below.
 */
export function MatrixPage() {
  useScrollReset('matrix');
  const [column, setColumn] = useState(() => {
    const by = hashParam('by');
    return by && COLUMNS.includes(by) ? by : 'raid';
  });
  useEffect(() => {
    const onHash = () => {
      const by = hashParam('by');
      if (by && COLUMNS.includes(by)) setColumn(by);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const rated = useMemo(
    () =>
      classes.flatMap((cls) =>
        (cls.viability?.rows ?? [])
          .filter((row) => cellFor(row, column)?.grade)
          .map((row) => ({ cls, row, score: gradeScore(cellFor(row, column)!.grade) })),
      ),
    [column],
  );

  return (
    <div>
      <PageHero crumbs={[{ label: 'Home', href: href.home() }, { label: 'Viability board' }]}>
        <p className="eyebrow">All classes · patch 1.18.1</p>
        <h1 className="display mt-2 text-[2.1rem] leading-[1.1] sm:text-5xl">Viability board</h1>
        <p className="mt-4 max-w-3xl text-[1.03rem] leading-relaxed text-muted">
          Each class guide rates its specs for raids, dungeons, PvP, leveling and open-world farming. The ratings
          summarise what players reported in the final patch. They are not simulations. This board puts all nine
          classes side by side. Select a spec to read its guide; hover it to see the reason for its rating.
        </p>
        <div role="tablist" aria-label="Activity" className="no-scrollbar -mx-4 mt-6 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:px-0">
          {COLUMNS.map((c) => (
            <button
              key={c}
              role="tab"
              type="button"
              aria-selected={c === column}
              onClick={() => {
                setColumn(c);
                window.history.replaceState(null, '', href.matrix(c));
              }}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                c === column ? 'bg-accent text-[rgb(var(--c-accent-ink))]' : 'hairline bg-surface text-muted hover:text-ink'
              }`}
            >
              {ACTIVITY_LABELS[c]}
            </button>
          ))}
        </div>
      </PageHero>

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6">
        <section aria-label={`${ACTIVITY_LABELS[column]} tiers`} className="card divide-y overflow-hidden">
          {TIERS.map((t) => {
            const items = rated.filter((r) => t.test(r.score));
            return (
              <div key={t.key} className="grid gap-3 p-4 sm:grid-cols-[7.5rem_1fr] sm:p-5">
                <div className="flex items-center gap-3 sm:flex-col sm:items-start">
                  <Grade cell={{ grade: t.key, label: t.key, contested: false }} column={ACTIVITY_LABELS[column]} size="lg" />
                  <span className="text-xs uppercase tracking-wider text-muted">{t.label.split(' · ')[1]}</span>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  {items.length ? (
                    items.map(({ cls, row }) => <SpecChip key={cls.slug + row.spec} cls={cls} row={row} column={column} />)
                  ) : (
                    <span className="text-sm text-muted">No spec is rated here.</span>
                  )}
                </div>
              </div>
            );
          })}
        </section>
        <GradeLegend />

        <section aria-labelledby="table-h" className="space-y-4">
          <h2 id="table-h" className="display text-[1.6rem]">
            Every rating
          </h2>
          <div className="card overflow-x-auto">
            <table className="w-full min-w-[40rem] border-collapse text-sm">
              <thead>
                <tr className="border-b bg-surface2/60 text-[11px] uppercase tracking-wider text-muted">
                  <th scope="col" className="px-4 py-2.5 text-left font-semibold">
                    Spec
                  </th>
                  {COLUMNS.map((c) => (
                    <th key={c} scope="col" className="px-2 py-2.5 text-center font-semibold">
                      {ACTIVITY_LABELS[c]}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {classes.map((cls) =>
                  (cls.viability?.rows ?? []).map((row, i) => (
                    <tr key={cls.slug + row.spec} className={`border-b last:border-b-0 ${i === 0 ? 'border-t-2' : ''}`}>
                      <th scope="row" className="px-4 py-2 text-left font-normal">
                        <a href={row.playbookId ? href.playbook(cls.slug, row.playbookId) : href.class(cls.slug)} className="flex items-center gap-2 hover:text-accent">
                          <ClassMark name={cls.name} color={cls.color} size="sm" />
                          <span className="font-semibold">{row.spec}</span>
                          <span className="text-muted">{cls.name}</span>
                        </a>
                      </th>
                      {COLUMNS.map((c) => {
                        const cell = cellFor(row, c);
                        return (
                          <td key={c} className="px-2 py-2 text-center">
                            {cell ? <Grade cell={cell} column={ACTIVITY_LABELS[c]} size="sm" /> : null}
                          </td>
                        );
                      })}
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted">
            The earlier forum-era spec × role matrix is kept in the{' '}
            <a className="link" href={href.archive()}>
              research archive
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
