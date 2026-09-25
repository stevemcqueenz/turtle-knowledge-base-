import type { YamlTalentPoint } from '../../types';
import { CardLabel } from './GuideSection';
import { rankNumber } from './util';
import { CitedText } from '../CitedText';

export interface TreeSplit {
  tree: string;
  points: number;
  /** Entries the sources leave open ("0-2", "filler", no rank at all). */
  flexible: number;
}

/** Sum of the sourced ranks per tree, in the order the trees first appear. */
export function treeSplits(points: YamlTalentPoint[]): TreeSplit[] {
  const order: string[] = [];
  const byTree = new Map<string, TreeSplit>();
  for (const p of points) {
    const tree = String(p?.tree ?? '').trim() || 'Other';
    if (!byTree.has(tree)) {
      byTree.set(tree, { tree, points: 0, flexible: 0 });
      order.push(tree);
    }
    const split = byTree.get(tree)!;
    const rank = rankNumber(p?.rank);
    if (rank && rank > 0) split.points += rank;
    else split.flexible += 1;
  }
  return order.map((t) => byTree.get(t)!);
}

const FULL_BUILD = 51;

/** Horizontal point-split bars, class colour for the tree with the most points. */
export function TalentSplit({ splits, color }: { splits: TreeSplit[]; color: string }) {
  if (splits.length === 0) return null;
  const total = splits.reduce((sum, s) => sum + s.points, 0);
  const scale = Math.max(FULL_BUILD, total, 1);
  const main = splits.reduce((best, s) => (s.points > best.points ? s : best), splits[0]);

  return (
    <div className="space-y-3">
      <CardLabel>Point split</CardLabel>
      <ul className="space-y-2.5">
        {splits.map((s) => {
          const isMain = s.tree === main.tree && s.points > 0;
          return (
            <li key={s.tree} className="space-y-1.5">
              <div className="flex items-baseline justify-between gap-2 text-sm">
                <span className="min-w-0 truncate font-semibold" style={isMain ? { color } : undefined}>
                  {s.tree}
                </span>
                <span className="shrink-0 text-muted">
                  {s.points}
                  {s.flexible > 0 ? ` + ${s.flexible} flexible` : ''}
                </span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-surface2" aria-hidden="true">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${Math.min(100, (s.points / scale) * 100)}%`,
                    backgroundColor: isMain ? color : 'rgb(var(--c-muted))',
                  }}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <p className="text-xs text-muted">
        {total < FULL_BUILD
          ? `${total} sourced points · the other ${FULL_BUILD - total} are not fixed by any source`
          : `${total} sourced points`}
      </p>
    </div>
  );
}

/** Talents the sources tell you to leave alone. */
export function SkipChips({ skip }: { skip: string[] }) {
  if (skip.length === 0) return null;
  return (
    <div className="space-y-2">
      <CardLabel>Skip</CardLabel>
      <ul className="flex flex-wrap gap-1.5">
        {skip.map((s, i) => (
          <li key={`${s}-${i}`} className="chip hairline text-xs text-muted line-through">
            <CitedText text={s} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Talent-calculator links copied from the source posts. */
/** talents.turtlecraft.gg is offline: its build codes are shown, not linked. */
function isOfflineCalculator(url: string): boolean {
  return /^https?:\/\/talents\.turtlecraft\.gg\//i.test(url);
}

export function BuildLinks({ links, color }: { links: string[]; color: string }) {
  if (links.length === 0) return null;
  const live = links.filter((url) => !isOfflineCalculator(url));
  const offline = links.filter(isOfflineCalculator);
  return (
    <div className="space-y-2">
      <CardLabel>Talent calculator</CardLabel>
      {live.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {live.map((url, i) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="chip hairline bg-surface2 px-3 py-1.5 text-xs font-semibold hover:border-[color:rgb(var(--c-accent)/0.6)]"
              style={{ color }}
            >
              {live.length > 1 ? `Open build ${i + 1}` : 'Open this build'}
            </a>
          ))}
        </div>
      ) : null}
      {offline.length > 0 ? (
        <ul className="flex flex-col gap-1">
          {offline.map((url) => (
            <li key={url} className="min-w-0">
              <code className="break-all font-mono text-xs text-muted">{url.replace(/^https?:\/\//, '')}</code>
            </li>
          ))}
        </ul>
      ) : null}
      <p className="text-xs text-muted">
        {offline.length > 0
          ? 'talents.turtlecraft.gg is offline, so its build codes are listed as text; the point list is the sourced part.'
          : live.length > 1
            ? 'Two calculator links are cited for this spec; the point list is the sourced part.'
            : 'Calculator link copied from the source post; the point list is the sourced part.'}
      </p>
    </div>
  );
}
