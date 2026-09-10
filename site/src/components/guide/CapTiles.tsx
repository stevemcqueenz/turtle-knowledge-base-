import { capLabel, describeValue } from './util';

const LONG_VALUE = 24;

/**
 * Caps as big numbers. Short values (a number, "16%") are the tile's headline;
 * long sentences render as text, and the `note` key becomes a footnote.
 */
export function CapTiles({ caps, color }: { caps: Record<string, unknown>; color: string }) {
  const entries = Object.entries(caps);
  const footnotes = entries.filter(([k]) => k === 'note' || k === 'notes').map(([, v]) => describeValue(v)).filter(Boolean);
  const tiles = entries.filter(([k]) => k !== 'note' && k !== 'notes');
  if (tiles.length === 0 && footnotes.length === 0) return null;

  return (
    <div className="space-y-2">
      {tiles.map(([key, value]) => {
        const { label, hint, percent } = capLabel(key);
        const empty = value === null || value === undefined || value === '';
        const text = describeValue(value);
        const isNumber = typeof value === 'number';
        const headline = empty ? 'not published' : isNumber && percent ? `${value}%` : text;
        const long = !empty && headline.length > LONG_VALUE;
        return (
          <div
            key={key}
            className={`card p-3.5 sm:p-4 ${long ? 'space-y-1' : 'flex items-center justify-between gap-3'}`}
          >
            <div className="min-w-0">
              <div className="text-sm font-medium">{label}</div>
              {hint ? <div className="text-xs text-muted">{hint}</div> : null}
              {empty ? <div className="text-xs text-muted">no value in the sources</div> : null}
            </div>
            <div
              className={
                long
                  ? 'text-sm leading-snug text-ink'
                  : empty
                    ? 'shrink-0 text-sm font-semibold text-muted'
                    : 'shrink-0 text-2xl font-extrabold'
              }
              style={long || empty ? undefined : { color }}
            >
              {headline}
            </div>
          </div>
        );
      })}
      {footnotes.map((f, i) => (
        <p key={i} className="text-xs text-muted">
          {f}
        </p>
      ))}
    </div>
  );
}
