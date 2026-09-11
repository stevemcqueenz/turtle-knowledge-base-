import { useEffect, useMemo, useRef, useState } from 'react';
import { glossary } from '../lib/site';
import { CloseIcon, SearchIcon } from './Icons';
import { useDialogFocus } from '../lib/dialog';

interface GlossaryPanelProps {
  open: boolean;
  onClose: () => void;
  initialQuery?: string;
}

export function GlossaryPanel({ open, onClose, initialQuery = '' }: GlossaryPanelProps) {
  const [query, setQuery] = useState(initialQuery);
  const panelRef = useDialogFocus(open);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery(initialQuery);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open, initialQuery]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const terms = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter((g) => `${g.term} ${g.meaning} ${g.category ?? ''}`.toLowerCase().includes(q));
  }, [query]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40" role="presentation">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden="true" />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Glossary"
        className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-surface hairline shadow-xl"
      >
        <div className="flex items-center gap-2 border-b px-4 py-3">
          <h2 className="flex-1 text-sm font-semibold uppercase tracking-wider text-muted">
            Glossary · {glossary.length} terms
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close glossary"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl hairline text-muted hover:text-ink"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="flex items-center gap-2 border-b px-4 py-2">
          <span className="text-muted">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Filter terms…"
            aria-label="Filter glossary terms"
            className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-muted"
          />
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-thin px-4 py-3">
          {terms.length === 0 ? (
            <p className="py-6 text-center text-sm text-muted">No term matches “{query}”.</p>
          ) : (
            <dl className="space-y-4">
              {terms.map((g) => {
                const convention = g.scope === 'archive-convention';
                return (
                  <div key={g.term} id={`glossary-${g.term}`}>
                    <dt className="flex flex-wrap items-baseline gap-2">
                      <span className="font-semibold">{g.term}</span>
                      {g.category ? <span className="chip hairline bg-surface2 text-[10px] text-muted">{g.category}</span> : null}
                      {g.scope ? <span className="text-[10px] uppercase tracking-wider text-muted">{g.scope}</span> : null}
                    </dt>
                    <dd className="mt-0.5 text-sm text-muted">
                      {g.meaning}{' '}
                      {g.citation_url ? (
                        <a
                          href={g.citation_url}
                          {...(convention ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                          className="text-[rgb(var(--c-accent))] hover:underline"
                        >
                          {convention ? 'archive convention' : 'source'}
                        </a>
                      ) : null}
                    </dd>
                  </div>
                );
              })}
            </dl>
          )}
        </div>
      </div>
    </div>
  );
}
