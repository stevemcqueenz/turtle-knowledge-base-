import { useState } from 'react';
import { href } from '../lib/router';
import { BookIcon, GridIcon, MoreIcon, SearchIcon, TurtleIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenGlossary: () => void;
  active: string;
}

const ACTION =
  'inline-flex h-9 items-center gap-2 rounded-xl hairline bg-surface px-2.5 text-sm text-muted transition-colors hover:text-ink';

export function Header({ onOpenSearch, onOpenGlossary, active }: HeaderProps) {
  // Phone header must stay one row (18% of a 844 px screen was sticky chrome
  // when it wrapped), so everything but search hides behind this menu.
  const [menuOpen, setMenuOpen] = useState(false);

  const navLink = (target: string, label: string, isActive: boolean, icon?: React.ReactNode, extra = '') => (
    <a
      href={target}
      aria-current={isActive ? 'page' : undefined}
      className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-sm transition-colors ${
        isActive ? 'bg-surface2 text-ink' : 'text-muted hover:text-ink'
      } ${extra}`}
    >
      {icon}
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-30 border-b bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2.5 sm:px-5">
        <a href={href.home()} className="mr-1 flex min-w-0 items-center gap-2 rounded-xl px-1 py-1 font-semibold">
          <span style={{ color: 'rgb(var(--c-accent))' }}>
            <TurtleIcon className="h-5 w-5" />
          </span>
          <span className="hidden truncate sm:inline">Turtle WoW class guides</span>
          <span className="truncate sm:hidden">Class guides</span>
        </a>
        <nav className="ml-auto hidden shrink-0 items-center gap-0.5 sm:flex" aria-label="Main">
          {navLink(href.matrix(), 'Matrix', active === 'matrix', <GridIcon />)}
          {navLink(href.about(), 'About', active === 'about')}
        </nav>
        <button
          type="button"
          onClick={onOpenSearch}
          className={`${ACTION} ml-auto shrink-0 sm:ml-0`}
          aria-label="Search (press slash)"
          title="Search  /"
        >
          <SearchIcon />
          <span className="hidden md:inline">Search</span>
          <kbd className="hidden rounded border px-1 py-0.5 font-mono text-[10px] md:block">/</kbd>
        </button>
        <button
          type="button"
          onClick={onOpenGlossary}
          className={`${ACTION} hidden sm:inline-flex`}
          aria-label="Open glossary"
          title="Glossary"
        >
          <BookIcon />
          <span className="hidden md:inline">Glossary</span>
        </button>
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>

        <div
          className="relative shrink-0 sm:hidden"
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMenuOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Escape') setMenuOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className={`${ACTION} w-9 justify-center px-0`}
            aria-label="More"
            aria-expanded={menuOpen}
            title="More"
          >
            <MoreIcon />
          </button>
          {menuOpen ? (
            <div
              className="card absolute right-0 top-full z-40 mt-1.5 flex w-48 flex-col gap-1 p-2 shadow-lg"
              onClick={() => setMenuOpen(false)}
            >
              {navLink(href.matrix(), 'Matrix', active === 'matrix', <GridIcon />, 'w-full')}
              {navLink(
                href.about(),
                'About',
                active === 'about',
                <span className="h-4 w-4" aria-hidden="true" />,
                'w-full',
              )}
              <button
                type="button"
                onClick={onOpenGlossary}
                className="inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-left text-sm text-muted transition-colors hover:text-ink"
              >
                <BookIcon />
                Glossary
              </button>
              <div className="flex items-center gap-2 px-2.5 py-1 text-sm text-muted">
                <ThemeToggle />
                <span aria-hidden="true">Theme</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
