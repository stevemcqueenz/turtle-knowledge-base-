import { useState } from 'react';
import type { ClassEntry } from '../../types';
import { patchItems, patchSource } from './data';

const VISIBLE = 6;

/** Staff-sourced 1.18.1 changes for the whole class, one line per item. */
export function PatchChangesCard({ entry }: { entry: ClassEntry }) {
  const items = patchItems(entry.patchChanges);
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? items : items.slice(0, VISIBLE);
  const source = patchSource(entry);

  return (
    <section className="card flex flex-col gap-3 p-5">
      <h2 className="text-base font-bold">What 1.18.1 changed for {entry.name}s</h2>
      {items.length === 0 ? (
        <p className="text-sm text-muted">
          No class-wide 1.18.1 changelog is captured for this class; see the spec guides.
        </p>
      ) : (
        <>
          <ul className="flex flex-col gap-2 text-sm leading-relaxed">
            {shown.map((item, i) => (
              <li key={i} className="flex gap-2.5">
                <span className="shrink-0 font-bold" style={{ color: 'var(--cite-staff)' }}>
                  Staff
                </span>
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
          {items.length > VISIBLE ? (
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="self-start text-xs font-semibold text-[rgb(var(--c-accent))] hover:underline"
            >
              {showAll ? 'Show fewer changes' : `Show all ${items.length} changes`}
            </button>
          ) : null}
          {source ? <p className="text-xs text-muted">From the staff changelog: {source}.</p> : null}
        </>
      )}
    </section>
  );
}
