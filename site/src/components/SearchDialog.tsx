import { useEffect, useMemo, useRef, useState } from 'react';
import { search, type SearchItem } from '../lib/search';
import { navigate } from '../lib/router';
import { SearchIcon } from './Icons';
import { useDialogFocus } from '../lib/dialog';

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
  onGlossary: (term: string) => void;
}

const KIND_LABEL: Record<SearchItem['kind'], string> = {
  class: 'Class',
  playbook: 'Playbook',
  leveling: 'Leveling',
  glossary: 'Glossary',
  page: 'Page',
};

export function SearchDialog({ open, onClose, onGlossary }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const dialogRef = useDialogFocus(open);
  const results = useMemo(() => search(query), [query]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      window.setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    if (!open) return;
    const el = listRef.current?.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ block: 'nearest' });
  }, [active, open]);

  if (!open) return null;

  const choose = (item: SearchItem) => {
    onClose();
    if (item.kind === 'glossary' && item.term) onGlossary(item.term);
    else if (item.href) navigate(item.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      choose(results[active]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-3 pt-[8vh]" role="presentation">
      <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="relative w-full max-w-xl overflow-hidden rounded-xl bg-surface hairline shadow-xl"
        onKeyDown={onKeyDown}
      >
        <div className="flex items-center gap-2 border-b px-3 py-2.5">
          <span className="text-muted">
            <SearchIcon />
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Search classes, specs, playbooks, glossary…"
            aria-label="Search classes, specs, playbooks and glossary terms"
            aria-controls="search-results"
            className="w-full bg-transparent py-1 text-sm outline-none placeholder:text-muted"
          />
          <kbd className="hidden rounded border px-1.5 py-0.5 font-mono text-[10px] text-muted sm:block">Esc</kbd>
        </div>
        <ul id="search-results" ref={listRef} className="max-h-[60vh] overflow-y-auto scrollbar-thin" role="listbox">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-center text-sm text-muted">No matches in the guides or the glossary.</li>
          ) : (
            results.map((item, i) => (
              <li
                key={`${item.kind}-${item.label}-${i}`}
                role="option"
                aria-selected={i === active}
                onMouseEnter={() => setActive(i)}
                onClick={() => choose(item)}
                className={`flex cursor-pointer items-center gap-3 px-4 py-2 ${i === active ? 'bg-surface2' : ''}`}
              >
                <span
                  className="h-2 w-2 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color ?? 'rgb(var(--c-muted))' }}
                  aria-hidden="true"
                />
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-sm font-medium">{item.label}</span>
                  <span className="block truncate text-xs text-muted">{item.detail}</span>
                </span>
                <span className="shrink-0 text-[10px] uppercase tracking-wider text-muted">{KIND_LABEL[item.kind]}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
