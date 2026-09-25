import { useMemo, useState } from 'react';
import type { TalentTree } from '../../types';

interface TalentGridProps {
  tree: TalentTree;
  /** Ranks per talent, per tab, in the tree's talent order. */
  ranks: number[][];
  /** Class color as an "r g b" triplet (theme-adjusted). */
  rgb: string;
  /** Talent names to outline (a leveling step "just learned"). */
  highlight?: Set<string>;
  compact?: boolean;
  /** One tree at a time (tabs) at every width, for narrow columns. */
  single?: boolean;
  label?: string;
}

const ROWS = 7;
const COLS = 4;
/** Cell height and gap in rem; prerequisite connectors are sized from them. */
const CELL = 3.6;
const GAP = 0.4;
const CELL_COMPACT = 2.55;

function Pips({ rank, max }: { rank: number; max: number }) {
  return (
    <span className="flex min-w-0 flex-1 gap-[2px]" aria-hidden="true">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className="h-[4px] min-w-0 max-w-[9px] flex-1 rounded-[1px]"
          style={{ background: i < rank ? 'rgb(var(--tc))' : 'rgb(var(--c-line) / 0.18)' }}
        />
      ))}
    </span>
  );
}

function Tab({
  tab,
  ranks,
  highlight,
  compact,
}: {
  tab: TalentTree['tabs'][number];
  ranks: number[];
  highlight?: Set<string>;
  compact?: boolean;
}) {
  const total = ranks.reduce((a, b) => a + b, 0);
  const h = compact ? CELL_COMPACT : CELL;
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-baseline justify-between gap-2 border-b pb-1.5">
        <span className={`truncate font-serif font-semibold ${compact ? 'text-sm' : 'text-[1.02rem]'}`}>{tab.name}</span>
        <span
          className="font-serif text-lg font-bold tabular-nums"
          style={{ color: total ? 'rgb(var(--tc))' : 'rgb(var(--c-muted))' }}
        >
          {total}
        </span>
      </div>
      <div
        className="relative grid"
        style={{
          gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${ROWS}, ${h}rem)`,
          gap: `${GAP}rem`,
        }}
      >
        {tab.talents.map((t, i) => {
          const rank = ranks[i] ?? 0;
          const req = t.req !== null ? tab.talents[t.req] : null;
          const taken = rank > 0;
          const title = `${t.name}: ${rank}/${t.max}${req ? ` · requires ${req.name}` : ''}`;
          const connector =
            req && req.col === t.col && req.row < t.row
              ? { top: `-${(t.row - req.row - 1) * (h + GAP) + GAP}rem`, height: `${(t.row - req.row - 1) * (h + GAP) + GAP}rem` }
              : null;
          const side = req && req.row === t.row ? (req.col < t.col ? 'left' : 'right') : null;
          return (
            <div
              key={t.name + i}
              className={`talent-cell ${compact ? '!min-h-0 !px-1 !pb-0.5 !pt-0.5' : ''} ${highlight?.has(t.name) ? 'ring-2 ring-[rgb(var(--tc))]' : ''}`}
              style={{ gridRow: t.row + 1, gridColumn: t.col + 1 }}
              data-taken={taken}
              data-full={rank >= t.max}
              title={title}
              aria-label={title}
            >
              {connector ? (
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 w-[2px] -translate-x-1/2"
                  style={{ ...connector, background: taken ? 'rgb(var(--tc) / 0.7)' : 'rgb(var(--c-line) / 0.2)' }}
                />
              ) : null}
              {side ? (
                <span
                  aria-hidden="true"
                  className="absolute top-1/2 h-[2px] -translate-y-1/2"
                  style={{
                    [side]: `-${GAP}rem`,
                    width: `${GAP}rem`,
                    background: taken ? 'rgb(var(--tc) / 0.7)' : 'rgb(var(--c-line) / 0.2)',
                  }}
                />
              ) : null}
              <span
                className={`talent-name font-medium leading-[1.12] [overflow-wrap:anywhere] ${compact ? 'line-clamp-2 text-[9.5px]' : 'line-clamp-3 text-[10px] xl:text-[10.5px]'} ${
                  taken ? 'text-ink' : ''
                }`}
              >
                {t.name}
              </span>
              <span className="flex items-center justify-between gap-1.5">
                {compact ? null : <Pips rank={rank} max={t.max} />}
                <span
                  className={`ml-auto shrink-0 font-mono leading-none tabular-nums ${compact ? 'text-[9px]' : 'text-[9.5px]'}`}
                  style={{ color: taken ? 'rgb(var(--tc))' : undefined }}
                >
                  {rank}/{t.max}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * The three 1.18.1 talent trees (7 rows × 4 columns each, from
 * structured/talents/talent-trees.json) with a build's points: rank pips, tree
 * totals, prerequisite connectors. Typography and the class color only; no game
 * artwork. On a phone the trees become tabs, opening on the deepest one.
 */
export function TalentGrid({ tree, ranks, rgb, highlight, compact = false, single = false, label }: TalentGridProps) {
  const totals = useMemo(() => ranks.map((r) => r.reduce((a, b) => a + b, 0)), [ranks]);
  const deepest = totals.indexOf(Math.max(...totals));
  const [picked, setPicked] = useState<number | null>(null);
  const tabIndex = picked ?? deepest;

  return (
    <div style={{ ['--tc' as string]: rgb }} aria-label={label} role="group">
      <div role="tablist" aria-label="Talent trees" className={`mb-3 grid grid-cols-3 gap-1 rounded-xl bg-surface2/70 p-1 ${single ? '' : 'md:hidden'}`}>
        {tree.tabs.map((tab, i) => (
          <button
            key={tab.name}
            role="tab"
            type="button"
            aria-selected={i === tabIndex}
            onClick={() => setPicked(i)}
            className={`truncate rounded-lg px-2 py-1.5 text-xs font-semibold ${
              i === tabIndex ? 'bg-surface text-ink shadow-sm' : 'text-muted'
            }`}
          >
            {tab.name} <span className="tabular-nums" style={{ color: totals[i] ? 'rgb(var(--tc))' : undefined }}>{totals[i]}</span>
          </button>
        ))}
      </div>
      <div className={single ? '' : `grid gap-5 md:grid-cols-3 ${compact ? 'md:gap-4' : 'md:gap-6'}`}>
        {tree.tabs.map((tab, i) => (
          <div key={tab.name} className={i === tabIndex ? '' : single ? 'hidden' : 'hidden md:block'}>
            <Tab tab={tab} ranks={ranks[i] ?? []} highlight={highlight} compact={compact} />
          </div>
        ))}
      </div>
    </div>
  );
}

/** "43 / 8 / 0" with the tree names, for headings and lists. */
export function SplitLine({ tree, totals }: { tree: TalentTree; totals: number[] }) {
  return (
    <span className="inline-flex flex-wrap gap-x-3 gap-y-1 text-sm">
      {tree.tabs.map((tab, i) => (
        <span key={tab.name} className={totals[i] ? 'text-ink' : 'text-muted'}>
          <span className="font-serif font-bold tabular-nums">{totals[i] ?? 0}</span> {tab.name}
        </span>
      ))}
    </span>
  );
}
