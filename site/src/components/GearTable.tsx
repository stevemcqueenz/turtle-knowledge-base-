import type { GearBracket, GearCitation, GearItem } from '../types';
import { CitationChip } from './CitationChip';
import { humanizeKey, isEmptyValue, scalarToString } from '../lib/site';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';

const SOURCE_COLORS: Record<string, string> = {
  drop: '#4ea1ff',
  quest: '#3ddc84',
  vendor: '#f5b942',
  craft: '#b07cf0',
  pvp: '#f08a3c',
  reputation: '#3fc7eb',
  'world-drop': '#8788ee',
  'unknown-in-sources': '#8a8f98',
};

function RankPips({ rank }: { rank: number }) {
  const filled = Math.max(1, 4 - rank);
  return (
    <span className="inline-flex items-center gap-0.5" title={`Rank ${rank} (1 = best per the sources)`}>
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: i < filled ? 'rgb(var(--c-accent))' : 'rgb(var(--c-line) / 0.25)' }}
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">rank {rank}</span>
    </span>
  );
}

function Citations({ citations }: { citations?: GearCitation[] | null }) {
  if (!citations?.length) return <span className="text-xs text-muted">—</span>;
  return (
    <ul className="flex flex-wrap gap-1">
      {citations.map((c, i) => (
        <li key={i} className="min-w-0 max-w-full">
          <CitationChip source={c} />
        </li>
      ))}
    </ul>
  );
}

function ItemCell({ item }: { item: GearItem }) {
  const rank = typeof item.rank === 'number' ? item.rank : Number.parseInt(String(item.rank ?? ''), 10);
  const custom = item.custom_turtle_item;
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      <span className="font-medium">{scalarToString(item.name)}</span>
      {Number.isFinite(rank) ? <RankPips rank={rank as number} /> : null}
      {custom === true || custom === 'true' ? (
        <span className="chip hairline bg-surface2 text-[10px] text-muted" title="Turtle WoW custom item">
          Turtle custom
        </span>
      ) : null}
      {item.item_id ? <span className="font-mono text-[10px] text-muted">#{item.item_id}</span> : null}
    </div>
  );
}

function SourceCell({ item }: { item: GearItem }) {
  const theme = useThemeValue();
  const type = String(item.source_type ?? '').toLowerCase();
  const color = readableColor(SOURCE_COLORS[type] ?? '#8a8f98', theme);
  return (
    <div className="space-y-0.5">
      {type ? (
        <span
          className="chip hairline text-[10px]"
          style={{ backgroundColor: `${color}1f`, borderColor: `${color}59`, color: 'rgb(var(--c-text))' }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
          {humanizeKey(type)}
        </span>
      ) : null}
      {item.source_place ? <div className="text-xs">{String(item.source_place)}</div> : null}
      {item.source_detail ? <div className="text-xs text-muted">{String(item.source_detail)}</div> : null}
    </div>
  );
}

/** Slot table for one gear bracket: slot, item, where it comes from, notes, citations. */
export function GearTable({ bracket }: { bracket: GearBracket }) {
  const slots = (bracket.slots ?? []).filter((s) => !isEmptyValue(s?.items));
  if (slots.length === 0) return <p className="text-sm text-muted">No slot list in the sources for this bracket.</p>;

  return (
    <div className="overflow-x-auto rounded-xl hairline">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-surface2 text-left">
            <th scope="col" className="whitespace-nowrap px-3 py-2 font-semibold">Slot</th>
            <th scope="col" className="px-3 py-2 font-semibold">Item</th>
            <th scope="col" className="px-3 py-2 font-semibold">Source</th>
            <th scope="col" className="px-3 py-2 font-semibold">Notes</th>
            <th scope="col" className="px-3 py-2 font-semibold">Citations</th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot, si) =>
            (slot.items ?? []).map((item, ii) => (
              <tr key={`${si}-${ii}`} className="border-t align-top">
                {ii === 0 ? (
                  <th
                    scope="row"
                    rowSpan={(slot.items ?? []).length}
                    className="whitespace-nowrap px-3 py-2 text-left font-semibold"
                  >
                    {humanizeKey(String(slot.slot ?? '—'))}
                  </th>
                ) : null}
                <td className="px-3 py-2"><ItemCell item={item} /></td>
                <td className="px-3 py-2"><SourceCell item={item} /></td>
                <td className="px-3 py-2 text-xs text-muted">{item.notes ? String(item.notes) : '—'}</td>
                <td className="px-3 py-2"><Citations citations={item.citations} /></td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
}
