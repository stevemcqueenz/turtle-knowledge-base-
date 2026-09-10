import type { YamlTalents, YamlTalentPoint } from '../types';
import { isPlainObject, scalarToString } from '../lib/site';
import { Callout } from './Callout';
import { YamlValue } from './YamlValue';

function rankNumber(rank: unknown): number | null {
  if (typeof rank === 'number') return rank;
  if (typeof rank === 'string') {
    const m = /^\d+/.exec(rank.trim());
    if (m) return Number(m[0]);
  }
  return null;
}

/** Ranks above this are shown as a number: some entries are whole-tree totals. */
const MAX_PIPS = 7;

function RankPips({ rank, max }: { rank: number; max: number }) {
  if (rank > MAX_PIPS) return null;
  const total = Math.max(max, rank, 1);
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          style={{
            backgroundColor: i < rank ? 'rgb(var(--c-accent))' : 'rgb(var(--c-line) / 0.25)',
          }}
        />
      ))}
    </span>
  );
}

function PointRow({ point }: { point: YamlTalentPoint }) {
  const rank = rankNumber(point.rank);
  const known = new Set(['tree', 'talent', 'rank', 'spell_id', 'note']);
  const rest = Object.fromEntries(Object.entries(point).filter(([k, v]) => !known.has(k) && v !== null && v !== ''));
  return (
    <li className="flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-1 break-words py-1 text-sm">
      <span className="font-medium">{scalarToString(point.talent)}</span>
      {rank !== null ? (
        <span className="flex items-center gap-1.5">
          <RankPips rank={rank} max={5} />
          <span className="font-mono text-xs text-muted" aria-label={`rank ${rank}`}>
            {rank}
          </span>
        </span>
      ) : (
        <span className="text-xs text-muted">rank not specified</span>
      )}
      {point.note ? <span className="text-xs text-muted">— {String(point.note)}</span> : null}
      {Object.keys(rest).length > 0 ? (
        <span className="text-xs text-muted">
          <YamlValue value={rest} />
        </span>
      ) : null}
    </li>
  );
}

/** Talent points grouped by tree with rank pips, plus skips, order and links. */
export function TalentPoints({ talents }: { talents: YamlTalents }) {
  const points = Array.isArray(talents.points) ? talents.points : [];
  const trees = new Map<string, YamlTalentPoint[]>();
  for (const p of points) {
    const tree = p && isPlainObject(p) ? String(p.tree ?? 'Other') : 'Other';
    if (!trees.has(tree)) trees.set(tree, []);
    trees.get(tree)!.push(p);
  }

  const skip = Array.isArray(talents.skip) ? talents.skip.filter((s) => s !== null && s !== '') : [];
  const order = Array.isArray(talents.leveling_order) ? talents.leveling_order : [];
  const links = Array.isArray(talents.links_opaque) ? talents.links_opaque.filter((l) => typeof l === 'string') : [];
  const buildLink = typeof talents.build_link === 'string' ? talents.build_link : null;
  const allLinks = [...(buildLink ? [buildLink] : []), ...(links as string[])];

  const known = new Set(['build_name', 'build_link', 'points', 'skip', 'leveling_order', 'links_opaque']);
  const rest = Object.fromEntries(
    Object.entries(talents).filter(([k, v]) => !known.has(k) && v !== null && v !== '' && !(Array.isArray(v) && v.length === 0)),
  );

  return (
    <div className="space-y-4">
      {talents.build_name ? (
        <div className="text-sm">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted">Build</span>
          {String(talents.build_name)}
        </div>
      ) : null}

      {trees.size > 0 ? (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {[...trees.entries()].map(([tree, list]) => (
            <div key={tree} className="min-w-0 rounded-xl bg-surface2 hairline p-3">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">{tree}</div>
              <ul className="divide-y divide-[rgb(var(--c-line)/0.08)]">
                {list.map((p, i) => (
                  <PointRow key={i} point={p} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : null}

      {skip.length > 0 ? (
        <div className="text-sm">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted">Skip</span>
          <span className="text-muted">{skip.map((s) => scalarToString(s)).join(', ')}</span>
        </div>
      ) : null}

      {order.length > 0 ? (
        <div>
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Leveling order</div>
          <div className="overflow-x-auto rounded-xl hairline">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface2 text-left">
                  <th className="px-3 py-2 font-semibold">Level</th>
                  <th className="px-3 py-2 font-semibold">Tree</th>
                  <th className="px-3 py-2 font-semibold">Talent</th>
                </tr>
              </thead>
              <tbody>
                {order.map((step, i) => (
                  <tr key={i} className="border-t">
                    <td className="px-3 py-1.5 font-mono text-xs">{scalarToString(step?.level)}</td>
                    <td className="px-3 py-1.5">{scalarToString(step?.tree)}</td>
                    <td className="px-3 py-1.5">{scalarToString(step?.talent)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {allLinks.length > 0 ? (
        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted">Build links</div>
          <ul className="space-y-1">
            {allLinks.map((l, i) => (
              <li key={i} className="break-all font-mono text-xs">
                <a href={l} target="_blank" rel="noopener noreferrer" className="text-[rgb(var(--c-accent))] hover:underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <Callout tone="info">
            Build links are opaque talent-calculator codes copied from the forum. The calculator is offline and the
            codes are undecoded in this repository, so the point list above is the sourced part of the build.
          </Callout>
        </div>
      ) : null}

      {Object.keys(rest).length > 0 ? <YamlValue value={rest} /> : null}
    </div>
  );
}
