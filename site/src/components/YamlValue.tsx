import { humanizeKey, isPlainObject, scalarToString } from '../lib/site';

/**
 * Last-resort renderer for YAML the contract does not pin down: scalars become
 * text, lists become bullets, objects become a compact key/value list. Nesting
 * is rendered inline so an unexpected shape still reads as data, not as JSON.
 */
export function YamlValue({ value, depth = 0 }: { value: unknown; depth?: number }) {
  if (value === null || value === undefined || value === '') return <span className="text-muted">—</span>;

  if (Array.isArray(value)) {
    if (value.length === 0) return <span className="text-muted">—</span>;
    const allScalar = value.every((v) => !isPlainObject(v) && !Array.isArray(v));
    if (allScalar) {
      return (
        <ul className="space-y-1">
          {value.map((v, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[rgb(var(--c-muted))]" aria-hidden="true" />
              <span>{scalarToString(v)}</span>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <ul className="space-y-2">
        {value.map((v, i) => (
          <li key={i} className="rounded-xl bg-surface2 hairline p-2">
            <YamlValue value={v} depth={depth + 1} />
          </li>
        ))}
      </ul>
    );
  }

  if (isPlainObject(value)) {
    const entries = Object.entries(value).filter(([, v]) => v !== null && v !== undefined && v !== '');
    if (entries.length === 0) return <span className="text-muted">—</span>;
    return (
      <dl className="grid grid-cols-1 gap-x-3 gap-y-1 sm:grid-cols-[minmax(6rem,12rem)_1fr]">
        {entries.map(([k, v]) => (
          <div key={k} className="contents">
            <dt className="text-xs font-medium uppercase tracking-wide text-muted sm:text-sm sm:normal-case sm:tracking-normal">
              {humanizeKey(k)}
            </dt>
            <dd className="mb-1 text-sm sm:mb-0">
              {isPlainObject(v) || Array.isArray(v) ? (
                <YamlValue value={v} depth={depth + 1} />
              ) : (
                scalarToString(v)
              )}
            </dd>
          </div>
        ))}
      </dl>
    );
  }

  return <span className="text-sm">{scalarToString(value)}</span>;
}
