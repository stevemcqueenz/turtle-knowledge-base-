import { humanizeKey, isPlainObject, scalarToString } from '../lib/site';
import { YamlValue } from './YamlValue';

interface StatBarsProps {
  weights: Record<string, unknown> | string | null | undefined;
  priority?: unknown;
}

function isRanking(values: number[]): boolean {
  if (values.length < 2) return false;
  if (!values.every((v) => Number.isInteger(v) && v > 0)) return false;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted.every((v, i) => v === i + 1);
}

function PriorityChips({ items }: { items: string[] }) {
  return (
    <ol className="flex flex-wrap items-center gap-1.5">
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center gap-1.5">
          {i > 0 ? (
            <span className="text-muted" aria-hidden="true">
              ›
            </span>
          ) : null}
          <span className="chip hairline bg-surface2 text-sm">
            <span className="font-mono text-xs text-muted">{i + 1}</span>
            {humanizeKey(item)}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Bars({ entries }: { entries: [string, number][] }) {
  const max = Math.max(...entries.map(([, v]) => Math.abs(v)), 0.0001);
  return (
    <ul className="space-y-1.5">
      {entries.map(([k, v]) => (
        <li key={k} className="grid grid-cols-[minmax(6rem,10rem)_1fr_auto] items-center gap-2 text-sm">
          <span className="truncate" title={humanizeKey(k)}>
            {humanizeKey(k)}
          </span>
          <span className="h-2 overflow-hidden rounded-full bg-surface2" aria-hidden="true">
            <span
              className="block h-full rounded-full"
              style={{ width: `${Math.max(2, (Math.abs(v) / max) * 100)}%`, backgroundColor: 'rgb(var(--c-accent))' }}
            />
          </span>
          <span className="font-mono text-xs text-muted">{v}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Stat weights. Numeric values become horizontal bars, unless they are a plain
 * 1..n ranking (some playbooks write the priority order as numbers, where a
 * bigger number means *lower* priority) — those render as an ordered chip list.
 * Strings and nested objects fall back to text and key/value lists.
 */
export function StatBars({ weights, priority }: StatBarsProps) {
  const priorityString =
    typeof priority === 'string' ? priority : Array.isArray(priority) ? priority.map(scalarToString).join(' > ') : null;

  if (!weights && !priorityString) return null;

  if (typeof weights === 'string' || weights === null || weights === undefined) {
    const text = (weights as string) || priorityString || '';
    const parts = text
      .split(/\s*(?:>|›|→)\s*/)
      .map((s) => s.trim())
      .filter(Boolean);
    return parts.length > 1 ? <PriorityChips items={parts} /> : <p className="text-sm">{text}</p>;
  }

  const entries = Object.entries(weights).filter(([, v]) => v !== null && v !== undefined && v !== '');
  const numeric = entries.filter(([, v]) => typeof v === 'number') as [string, number][];
  const other = entries.filter(([, v]) => typeof v !== 'number');
  const ranking = isRanking(numeric.map(([, v]) => v));

  return (
    <div className="space-y-3">
      {priorityString ? (
        <div className="rounded-xl bg-surface2 hairline px-3 py-2 text-sm">
          <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-muted">Priority</span>
          {priorityString}
        </div>
      ) : null}

      {numeric.length > 0 ? (
        ranking ? (
          <div>
            <div className="mb-1.5 text-xs text-muted">Given as a priority order (1 = highest).</div>
            <PriorityChips items={[...numeric].sort((a, b) => a[1] - b[1]).map(([k]) => k)} />
          </div>
        ) : (
          <Bars entries={numeric} />
        )
      ) : null}

      {other.length > 0 ? (
        <dl className="grid grid-cols-1 gap-x-3 gap-y-1.5 sm:grid-cols-[minmax(8rem,14rem)_1fr]">
          {other.map(([k, v]) => (
            <div key={k} className="contents">
              <dt className="text-sm font-medium">{humanizeKey(k)}</dt>
              <dd className="mb-1 text-sm text-muted sm:mb-0">
                {isPlainObject(v) || Array.isArray(v) ? <YamlValue value={v} /> : scalarToString(v)}
              </dd>
            </div>
          ))}
        </dl>
      ) : null}
    </div>
  );
}
