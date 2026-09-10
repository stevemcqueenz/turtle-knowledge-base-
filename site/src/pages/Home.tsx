import { useMemo, useRef, useState } from 'react';
import { classes, matrix, standingMeta } from '../lib/site';
import { search, type SearchItem } from '../lib/search';
import { navigate, href } from '../lib/router';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { ClassCard } from '../components/ClassCard';
import { MatrixGrid } from '../components/MatrixGrid';
import { SearchIcon, ChevronRightIcon } from '../components/Icons';

interface HomeProps {
  onGlossary: (term: string) => void;
}

const LEGEND: { standing: string; text: string }[] = [
  { standing: 'favored', text: 'Favored by the community' },
  { standing: 'alternative', text: 'Alternative' },
  { standing: 'niche', text: 'Niche' },
];

export function Home({ onGlossary }: HomeProps) {
  const theme = useThemeValue();
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
    <div className="mx-auto max-w-6xl px-3 py-8 sm:px-5 sm:py-12">
      <section className="flex flex-col items-center gap-4 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
          Turtle WoW 1.18.1 class guides
        </p>
        <h1 className="max-w-3xl text-[28px] font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[44px]">
          Play your class the way Turtle players actually did
        </h1>
        <p className="max-w-xl text-[15px] leading-relaxed text-muted">
          Builds, leveling paths, stat caps and rotations for patch 1.18.1, distilled from the archived forums. Pick a
          class to start.
        </p>

        <div ref={boxRef} className="relative mt-1 w-full max-w-xl text-left">
          <div className="flex h-12 items-center gap-2.5 rounded-xl bg-surface hairline px-4">
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
              placeholder="Try &ldquo;enhancement tank&rdquo; or &ldquo;hit cap&rdquo;"
              aria-label="Search classes, specs, playbooks and glossary terms"
              className="w-full bg-transparent text-[15px] outline-none placeholder:text-muted"
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

      <section aria-labelledby="classes-heading" className="mt-10">
        <h2 id="classes-heading" className="sr-only">
          Classes
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((entry) => (
            <ClassCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-muted">
        {LEGEND.map((item) => {
          const meta = standingMeta(item.standing)!;
          return (
            <span key={item.standing} className="inline-flex items-center gap-1.5">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: readableColor(meta.color, theme) }}
                aria-hidden="true"
              />
              {item.text}
            </span>
          );
        })}
        <span className="sm:ml-auto">Every recommendation links to the forum post it came from.</span>
      </div>

      <section aria-labelledby="matrix-heading" className="mt-12">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <h2 id="matrix-heading" className="text-sm font-semibold uppercase tracking-wider text-muted">
            Spec × role matrix
          </h2>
          <a
            href={href.matrix()}
            className="inline-flex items-center gap-1 text-sm text-[rgb(var(--c-accent))] hover:underline"
          >
            Full matrix and coverage <ChevronRightIcon />
          </a>
        </div>
        <MatrixGrid rows={matrix.rows} roles={matrix.roles} />
      </section>
    </div>
  );
}
