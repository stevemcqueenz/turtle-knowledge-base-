import { useMemo, useRef, useState } from 'react';
import { classes, matrix, meta } from '../lib/site';
import { search, type SearchItem } from '../lib/search';
import { navigate, href } from '../lib/router';
import { ClassCard } from '../components/ClassCard';
import { MatrixGrid, StandingLegend } from '../components/MatrixGrid';
import { SearchIcon, ChevronRightIcon } from '../components/Icons';

interface HomeProps {
  onGlossary: (term: string) => void;
}

export function Home({ onGlossary }: HomeProps) {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [focused, setFocused] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const results = useMemo(() => (query.trim() ? search(query, 8) : []), [query]);
  const showResults = focused && results.length > 0;

  const choose = (item: SearchItem) => {
    setQuery('');
    if (item.kind === 'glossary' && item.term) onGlossary(item.term);
    else if (item.href) navigate(item.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!showResults) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      choose(results[active]);
    } else if (e.key === 'Escape') {
      setQuery('');
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-3 py-8 sm:px-5">
      <section className="mb-8">
        <h1 className="text-2xl font-semibold sm:text-3xl">Turtle WoW 1.18.1 class guides, built from the archived forums</h1>
        <p className="mt-2 max-w-prose text-muted">
          {meta.counts?.classes ?? classes.length} classes · {meta.counts?.playbooks ?? 0} spec playbooks ·{' '}
          {meta.counts?.matrixRows ?? 0} spec/role verdicts · {meta.counts?.glossaryTerms ?? 0} glossary terms. Every
          line is quoted from a cited forum post.
        </p>

        <div ref={boxRef} className="relative mt-5 max-w-xl">
          <div className="flex items-center gap-2 rounded-xl bg-surface hairline px-3 py-2.5">
            <span className="text-muted">
              <SearchIcon />
            </span>
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onFocus={() => setFocused(true)}
              onBlur={() => window.setTimeout(() => setFocused(false), 150)}
              onKeyDown={onKeyDown}
              type="search"
              role="combobox"
              aria-expanded={showResults}
              aria-controls="home-search-results"
              aria-autocomplete="list"
              placeholder="Search a class, spec, playbook or term…"
              aria-label="Search classes, specs, playbooks and glossary terms"
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted"
            />
          </div>
          {showResults ? (
            <ul
              id="home-search-results"
              role="listbox"
              className="absolute z-20 mt-1 w-full overflow-hidden rounded-xl bg-surface hairline shadow-xl"
            >
              {results.map((item, i) => (
                <li
                  key={`${item.kind}-${item.label}-${i}`}
                  role="option"
                  aria-selected={i === active}
                  onMouseEnter={() => setActive(i)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => choose(item)}
                  className={`flex cursor-pointer items-center gap-2 px-3 py-2 text-sm ${i === active ? 'bg-surface2' : ''}`}
                >
                  <span
                    className="h-2 w-2 shrink-0 rounded-full"
                    style={{ backgroundColor: item.color ?? 'rgb(var(--c-muted))' }}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1 truncate">{item.label}</span>
                  <span className="shrink-0 text-[10px] uppercase tracking-wider text-muted">{item.kind}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      <section aria-labelledby="classes-heading" className="mb-10">
        <h2 id="classes-heading" className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
          Classes
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((entry) => (
            <ClassCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>

      <section aria-labelledby="matrix-heading">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 id="matrix-heading" className="text-sm font-semibold uppercase tracking-wider text-muted">
            Spec × role matrix
          </h2>
          <a href={href.matrix()} className="inline-flex items-center gap-1 text-sm text-[rgb(var(--c-accent))] hover:underline">
            Full matrix and coverage <ChevronRightIcon />
          </a>
        </div>
        <MatrixGrid rows={matrix.rows} roles={matrix.roles} />
        <div className="mt-3">
          <StandingLegend />
        </div>
      </section>
    </div>
  );
}
