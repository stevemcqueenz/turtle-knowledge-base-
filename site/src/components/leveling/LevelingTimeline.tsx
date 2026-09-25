import { useMemo, useState } from 'react';
import type { LevelingPath, LevelingPathStep, TalentTree } from '../../types';
import { ArrowUpRight } from 'lucide-react';
import { Markdown } from '../Markdown';
import { Button } from '../ui/button';
import { SplitLine, TalentGrid } from '../talents/TalentGrid';

/** Can the path be replayed level by level (every row a known talent with levels and ranks, no respec)? */
function replayable(path: LevelingPath): boolean {
  return path.steps.every((s) => s.talent && s.tree && s.from !== null && s.to !== null && s.rankTo !== null) &&
    !path.steps.some((s) => s.respec);
}

/** Ranks per talent at a character level (one point per level from 10). */
function ranksAt(path: LevelingPath, tree: TalentTree, level: number): { ranks: number[][]; learned: Set<string> } {
  const ranks = tree.tabs.map((t) => t.talents.map(() => 0));
  const learned = new Set<string>();
  for (const s of path.steps) {
    if (s.from === null || s.to === null || !s.talent) continue;
    if (level < s.from) continue;
    const ti = tree.tabs.findIndex((t) => t.name === s.tree);
    const i = ti >= 0 ? tree.tabs[ti].talents.findIndex((t) => t.name === s.talent) : -1;
    if (ti < 0 || i < 0) continue;
    const start = s.rankFrom ?? 1;
    const end = s.rankTo ?? start;
    const rank = Math.min(end, start + (level - s.from));
    ranks[ti][i] = Math.max(ranks[ti][i], rank);
    if (level <= s.to) learned.add(s.talent);
  }
  return { ranks, learned };
}

function levelLabel(s: LevelingPathStep): string {
  if (s.from === null) return s.levelText ?? '';
  return s.to !== null && s.to !== s.from ? `${s.from}–${s.to}` : String(s.from);
}

function RankBar({ s }: { s: LevelingPathStep }) {
  if (!s.max || s.rankTo === null) return null;
  const from = s.rankFrom ?? s.rankTo;
  return (
    <span className="flex items-center gap-[3px]" aria-label={`rank ${from === s.rankTo ? s.rankTo : `${from} to ${s.rankTo}`} of ${s.max}`}>
      {Array.from({ length: s.max }, (_, i) => {
        const n = i + 1;
        const now = n >= from && n <= s.rankTo!;
        const before = n < from;
        return (
          <span
            key={i}
            className="h-1.5 w-2.5 rounded-[1px]"
            style={{
              background: now ? (s.rankTo === s.max ? '#ffd100' : '#1eff00') : before ? 'rgb(var(--tc) / 0.45)' : 'hsl(var(--muted-foreground) / 0.25)',
            }}
          />
        );
      })}
    </span>
  );
}

/**
 * A leveling guide's talent order as a timeline from 10 to 60: every row of the
 * guide's table, grouped in ten-level bands, with the rank each row reaches and
 * any respec called out. When the whole order resolves to known talents a level
 * slider replays it on the talent grid; otherwise the grid shows where it ends.
 */
export function LevelingTimeline({ path, tree, rgb }: { path: LevelingPath; tree: TalentTree; rgb: string }) {
  const canReplay = useMemo(() => replayable(path), [path]);
  const maxLevel = Math.max(10, ...path.steps.map((s) => s.to ?? s.from ?? 10));
  const [level, setLevel] = useState(maxLevel);
  const state = useMemo(() => (canReplay ? ranksAt(path, tree, level) : null), [canReplay, path, tree, level]);

  const bands = useMemo(() => {
    const out: { band: string; steps: LevelingPathStep[] }[] = [];
    for (const s of path.steps) {
      const band = s.from === null ? 'Order' : `${Math.floor(s.from / 10) * 10}s`;
      const last = out[out.length - 1];
      if (last && last.band === band) last.steps.push(s);
      else out.push({ band, steps: [s] });
    }
    return out;
  }, [path]);

  const gridRanks = state?.ranks ?? path.end?.ranks ?? null;
  const totals = gridRanks ? gridRanks.map((r) => r.reduce((a, b) => a + b, 0)) : null;

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,1fr)_17.5rem]" style={{ ['--tc' as string]: rgb }}>
      <ol className="space-y-5" aria-label={`Talent order: ${path.title}`}>
        {path.respecAt ? (
          <li className="rounded-md border border-[rgb(var(--cc)/0.4)] bg-[rgb(var(--cc)/0.08)] px-3 py-2 text-[13px]">
            <strong className="font-semibold">Respec at {path.respecAt}.</strong>{' '}
            <span className="text-muted-foreground">This path assumes a respec at level {path.respecAt}.</span>
          </li>
        ) : path.noRespec ? (
          <li className="text-[13px] text-muted-foreground">Designed to need no respec from 10 to 60.</li>
        ) : null}
        {bands.map((b) => (
          <li key={b.band}>
            <p className="mb-1.5 text-xs font-medium text-muted-foreground">{b.band === 'Order' ? 'Order' : `Levels ${b.band.replace('s', '')}–${Number(b.band.replace('s', '')) + 9}`}</p>
            <ol className="relative space-y-px border-l pl-4" style={{ borderColor: 'rgb(var(--tc) / 0.35)' }}>
              {b.steps.map((s, i) => {
                const active = canReplay && s.from !== null && level >= s.from && level <= (s.to ?? s.from);
                return (
                  <li
                    key={i}
                    className={`relative rounded-md px-2.5 py-1.5 transition-colors ${
                      s.respec ? 'bg-[rgb(var(--cc)/0.1)] ring-1 ring-[rgb(var(--cc)/0.4)]' : active ? 'bg-accent' : ''
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute -left-[1.23rem] top-3 h-2 w-2 rounded-full ring-2 ring-background"
                      style={{ background: s.respec ? '#ffd100' : 'rgb(var(--tc))' }}
                    />
                    <div className="grid grid-cols-[3rem_1fr] items-baseline gap-2 text-[13.5px]">
                      <span className="text-[13px] font-semibold tabular">{levelLabel(s)}</span>
                      <span className="min-w-0">
                        {s.talent ? (
                          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                            <span className="font-medium">{s.talent}</span>
                            <RankBar s={s} />
                            <span className="text-xs text-muted-foreground">{s.tree}</span>
                          </span>
                        ) : (
                          <span className="flex flex-wrap items-center gap-2">
                            {s.respec ? <span className="rounded-[4px] bg-[#ffd100] px-1.5 text-[11px] font-semibold text-black">Respec</span> : null}
                            <Markdown inline source={s.markdown} className="text-sm" />
                          </span>
                        )}
                        {s.note ? <Markdown inline source={s.note} className="mt-0.5 block text-[12.5px] text-muted-foreground" /> : null}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </li>
        ))}
      </ol>

      {gridRanks ? (
        <div className="md:sticky md:top-32 md:self-start">
          <div className="rounded-lg border bg-card p-3 sm:p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[13px] font-medium">{canReplay ? `Your talents at level ${level}` : 'Where this path ends'}</p>
                {totals ? (
                  <p className="mt-1">
                    <SplitLine tree={tree} totals={totals} />
                  </p>
                ) : null}
              </div>
              {path.end ? (
                <Button asChild variant="class" size="sm">
                  <a href={path.end.url} target="_blank" rel="noopener noreferrer">
                    Final build in calculator <ArrowUpRight />
                  </a>
                </Button>
              ) : null}
            </div>
            {canReplay ? (
              <div className="mt-4">
                <label htmlFor={`lvl-${path.id}`} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Drag to replay the order</span>
                  <span className="text-base font-semibold tabular">Level {level}</span>
                </label>
                <input
                  id={`lvl-${path.id}`}
                  type="range"
                  min={9}
                  max={maxLevel}
                  value={level}
                  onChange={(e) => setLevel(Number(e.target.value))}
                  className="mt-1 w-full accent-[rgb(var(--cc))]"
                />
              </div>
            ) : null}
            <div className="mt-4">
              <TalentGrid tree={tree} ranks={gridRanks} rgb={rgb} single highlight={state?.learned} label={`Talents: ${path.title}`} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
