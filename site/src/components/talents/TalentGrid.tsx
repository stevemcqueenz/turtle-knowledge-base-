import { useMemo, useState } from 'react';
import type { TalentTree, TalentTreeTalent } from '../../types';
import { cn } from '../../lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

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
/** Gap between slots, in rem (the prerequisite arrows are sized from it). */
const GAP = 0.55;
const GAP_COMPACT = 0.4;

const SMALL = new Set(['of', 'the', 'and', 'to', 'a', 'in', 'for']);

/** "Improved Arcane Missiles" -> "IAM": the slot's lettering, since the site carries no icon art. */
export function talentGlyph(name: string): string {
  const words = name
    .replace(/[’']/g, '')
    .split(/[\s-]+/)
    .filter((w) => w && !SMALL.has(w.toLowerCase()));
  if (words.length === 1) return words[0].slice(0, 2);
  return words
    .slice(0, 3)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

function state(rank: number, max: number): 'none' | 'partial' | 'max' {
  if (rank <= 0) return 'none';
  return rank >= max ? 'max' : 'partial';
}

/** The talent tooltip, as the game draws it: name, rank, tier and prerequisite lines. */
function TalentTip({ t, rank, tabName, req, reqRank, spent }: {
  t: TalentTreeTalent;
  rank: number;
  tabName: string;
  req: TalentTreeTalent | null;
  reqRank: number;
  spent: number;
}) {
  const tierNeed = t.row * 5;
  return (
    <div className="space-y-0.5">
      <p className="wow-tt-title">{t.name}</p>
      <p>
        Rank {rank}/{t.max}
      </p>
      {tierNeed > 0 ? (
        <p className={spent >= tierNeed ? 'wow-tt-meta' : 'text-[#ff4040]'}>
          Requires {tierNeed} points in {tabName} Talents
        </p>
      ) : null}
      {req ? <p className={reqRank >= req.max ? 'wow-tt-meta' : 'text-[#ff4040]'}>Requires {req.max} points in {req.name}</p> : null}
      <p className={cn('pt-1 text-[12px]', rank >= t.max ? 'text-[#ffd100]' : rank > 0 ? 'wow-tt-green' : 'wow-tt-meta')}>
        {rank >= t.max ? 'Maxed in this build' : rank > 0 ? `${t.max - rank} more ${t.max - rank === 1 ? 'rank' : 'ranks'} available` : 'Not taken in this build'}
      </p>
    </div>
  );
}

/** A prerequisite arrow drawn inside the dependent slot, reaching back to its requirement. */
function Arrow({ t, req, on, gap }: { t: TalentTreeTalent; req: TalentTreeTalent; on: boolean; gap: number }) {
  if (req.col === t.col && req.row < t.row) {
    const k = t.row - req.row - 1;
    const span = `calc(${k} * (100% + ${gap}rem) + ${gap}rem)`;
    return (
      <span aria-hidden="true" className="talent-arrow" data-on={on} style={{ left: 'calc(50% - 1.5px)', width: 3, top: `calc(-1 * ${span})`, height: span }}>
        <span className="talent-arrow-head" style={{ left: -3.5, bottom: -5 }} />
      </span>
    );
  }
  if (req.row === t.row) {
    const k = Math.abs(t.col - req.col) - 1;
    const span = `calc(${k} * (100% + ${gap}rem) + ${gap}rem)`;
    const fromLeft = req.col < t.col;
    return (
      <span
        aria-hidden="true"
        className="talent-arrow"
        data-on={on}
        style={{ top: 'calc(50% - 1.5px)', height: 3, width: span, ...(fromLeft ? { right: '100%' } : { left: '100%' }) }}
      >
        <span
          className="talent-arrow-head"
          style={{
            top: -3.5,
            ...(fromLeft ? { right: -5, transform: 'rotate(-90deg)' } : { left: -5, transform: 'rotate(90deg)' }),
          }}
        />
      </span>
    );
  }
  return null;
}

function Tree({
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
  const spent = ranks.reduce((a, b) => a + b, 0);
  const gap = compact ? GAP_COMPACT : GAP;
  return (
    <div className="talent-frame p-3">
      <div className="mb-3 flex items-baseline justify-between gap-2 px-0.5">
        <span className="truncate text-[13px] font-semibold text-[#ffd100]">{tab.name}</span>
        <span className="text-[13px] font-bold tabular text-white">{spent}</span>
      </div>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${ROWS}, auto)`, gap: `${gap}rem` }}>
        {tab.talents.map((t, i) => {
          const rank = ranks[i] ?? 0;
          const req = t.req !== null ? tab.talents[t.req] : null;
          const reqRank = t.req !== null ? (ranks[t.req] ?? 0) : 0;
          const s = state(rank, t.max);
          const locked = rank === 0 && t.row * 5 > spent;
          return (
            <Tooltip key={t.name + i} delayDuration={80}>
              <TooltipTrigger asChild>
                <button
                  type="button"
                  className={cn('talent-slot', compact ? 'text-[10px]' : 'text-[12px] sm:text-[13px]', locked && 'opacity-45')}
                  style={{ gridRow: t.row + 1, gridColumn: t.col + 1 }}
                  data-state-rank={s}
                  data-hl={highlight?.has(t.name) ? 'true' : undefined}
                  aria-label={`${t.name}: rank ${rank} of ${t.max}${req ? `, requires ${req.name}` : ''}`}
                >
                  {req ? <Arrow t={t} req={req} on={reqRank >= req.max} gap={gap} /> : null}
                  <span aria-hidden="true">{talentGlyph(t.name)}</span>
                  <span className="talent-rank" aria-hidden="true">
                    {rank}/{t.max}
                  </span>
                </button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <TalentTip t={t} rank={rank} tabName={tab.name} req={req} reqRank={reqRank} spent={spent} />
              </TooltipContent>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}

/**
 * The three 1.18.1 talent trees drawn like the in-game talent frame: square
 * slots on the 4 × 7 grid, the rank in the corner (green while partly spent,
 * gold when maxed, grey at 0), gold prerequisite arrows, tree totals in the
 * tab headers and the talent tooltip on hover or focus. Talents are lettered
 * with their initials; the site carries no game art. On phones (or `single`)
 * one tree shows at a time, opening on the deepest.
 */
export function TalentGrid({ tree, ranks, rgb, highlight, compact = false, single = false, label }: TalentGridProps) {
  const totals = useMemo(() => ranks.map((r) => r.reduce((a, b) => a + b, 0)), [ranks]);
  const deepest = String(totals.indexOf(Math.max(...totals)));
  const [picked, setPicked] = useState<string | null>(null);
  const tab = picked ?? deepest;

  return (
    <div style={{ ['--tc' as string]: rgb }} aria-label={label} role="group">
      <Tabs value={tab} onValueChange={setPicked}>
        <TabsList variant="segmented" aria-label="Talent trees" className={cn('mb-3 grid w-full grid-cols-3', !single && 'md:hidden')}>
          {tree.tabs.map((t, i) => (
            <TabsTrigger key={t.name} value={String(i)} variant="segmented" className="min-w-0">
              <span className="truncate">{t.name}</span>
              <span className="tabular text-muted-foreground">{totals[i]}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        <div className={cn(!single && 'md:grid md:grid-cols-3 md:gap-3')}>
          {tree.tabs.map((t, i) => (
            <TabsContent key={t.name} value={String(i)} forceMount className={cn(!single && 'md:data-[state=inactive]:block')}>
              <Tree tab={t} ranks={ranks[i] ?? []} highlight={highlight} compact={compact} />
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}

/** "43 Arcane · 8 Fire · 0 Frost", for headings and lists. */
export function SplitLine({ tree, totals }: { tree: TalentTree; totals: number[] }) {
  return (
    <span className="inline-flex flex-wrap gap-x-3 gap-y-1 text-[13px]">
      {tree.tabs.map((tab, i) => (
        <span key={tab.name} className={totals[i] ? 'text-foreground' : 'text-muted-foreground'}>
          <span className="font-semibold tabular">{totals[i] ?? 0}</span> {tab.name}
        </span>
      ))}
    </span>
  );
}
