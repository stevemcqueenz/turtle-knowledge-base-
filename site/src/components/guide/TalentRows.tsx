import type { YamlTalentPoint } from '../../types';
import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';
import { describeValue, isContested, rankNumber } from './util';

const MAX_PIPS = 5;

function Pips({ rank, color }: { rank: number; color: string }) {
  const filled = Math.min(rank, MAX_PIPS);
  const total = Math.max(filled, 1);
  return (
    <span className="flex shrink-0 items-center gap-[3px]" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className="h-2 w-2 rounded-[2px]"
          style={{ backgroundColor: i < filled ? color : 'rgb(var(--c-muted) / 0.35)' }}
        />
      ))}
    </span>
  );
}

/** One row per sourced talent: rank pips, name, note, tree. */
export function TalentRows({ points, color }: { points: YamlTalentPoint[]; color: string }) {
  const theme = useThemeValue();
  const amber = readableColor('#f5b942', theme);
  if (points.length === 0) return null;

  return (
    <ul className="grid gap-x-6 sm:grid-cols-2">
      {points.map((p, i) => {
        const rank = rankNumber(p?.rank);
        const note = describeValue(p?.note);
        const tree = String(p?.tree ?? '').trim();
        const contested = isContested(note);
        const rankLabel =
          rank !== null && rank > 0
            ? `${rank} ${rank === 1 ? 'point' : 'points'}`
            : rank === 0
              ? 'no points in the sourced build'
              : p?.rank
                ? `${describeValue(p.rank)} points`
                : 'rank not fixed by the sources';
        return (
          <li key={`${p?.talent ?? 'talent'}-${i}`} className="flex min-w-0 items-start gap-3 border-b py-2.5 text-sm">
            <span className="mt-1 flex w-[52px] shrink-0 justify-start">
              {rank !== null && rank > MAX_PIPS ? (
                <span className="font-mono text-xs" style={{ color }} aria-hidden="true">
                  {rank} pts
                </span>
              ) : (
                <Pips rank={rank ?? 0} color={color} />
              )}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-semibold">
                {String(p?.talent ?? 'Unnamed talent')}
                <span className="sr-only"> — {rankLabel}</span>
              </span>
              {note ? (
                <span className="mt-0.5 block text-xs" style={contested ? { color: amber } : undefined}>
                  <span className={contested ? '' : 'text-muted'}>{note}</span>
                </span>
              ) : rank === null && !p?.rank ? (
                <span className="mt-0.5 block text-xs text-muted">rank not fixed by the sources</span>
              ) : null}
            </span>
            {tree ? <span className="mt-0.5 shrink-0 text-[11px] text-muted">{tree}</span> : null}
          </li>
        );
      })}
    </ul>
  );
}
