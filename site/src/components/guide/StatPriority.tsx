import { humanizeKey, isPlainObject } from '../../lib/site';
import { describeValue, sentenceCase } from './util';

export interface StatRow {
  name: string;
  note: string;
}

/** stat_priority is a plain order; stat_weights keeps its key order and text. */
export function statRows(priority: unknown, weights: Record<string, unknown> | string | null | undefined): StatRow[] {
  if (Array.isArray(priority) && priority.length > 0) {
    return priority.map((p) => ({ name: sentenceCase(humanizeKey(String(p))), note: '' }));
  }
  if (typeof priority === 'string' && priority.trim()) {
    return priority
      .split(/\s*(?:>|›|→)\s*/)
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => ({ name: sentenceCase(humanizeKey(s)), note: '' }));
  }
  if (isPlainObject(weights)) {
    return Object.entries(weights)
      .filter(([, v]) => v !== null && v !== undefined && v !== '')
      .map(([k, v]) => ({ name: sentenceCase(humanizeKey(k)), note: describeValue(v) }));
  }
  if (typeof weights === 'string' && weights.trim()) {
    return [{ name: weights.trim(), note: '' }];
  }
  return [];
}

/** Numbered stat list, biggest first. */
export function StatPriority({ rows, color, footnote }: { rows: StatRow[]; color: string; footnote?: string }) {
  if (rows.length === 0) return null;
  return (
    <div className="card space-y-2 p-4 sm:p-5">
      <ol className="space-y-2">
        {rows.map((row, i) => (
          <li key={`${row.name}-${i}`} className="flex min-w-0 items-start gap-3 rounded-xl bg-surface2 px-3 py-2.5">
            <span
              className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-extrabold"
              style={{ backgroundColor: color, color: 'rgb(var(--c-bg))' }}
              aria-hidden="true"
            >
              {i + 1}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-bold leading-snug">{row.name}</span>
              {row.note ? <span className="mt-0.5 block text-sm text-muted">{row.note}</span> : null}
            </span>
          </li>
        ))}
      </ol>
      {footnote ? <p className="pt-1 text-xs text-muted">{footnote}</p> : null}
    </div>
  );
}
