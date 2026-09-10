import { href } from '../lib/router';
import { BookIcon, GridIcon, SearchIcon, TurtleIcon } from './Icons';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenGlossary: () => void;
  active: string;
}

export function Header({ onOpenSearch, onOpenGlossary, active }: HeaderProps) {
  const navLink = (target: string, label: string, isActive: boolean, icon?: React.ReactNode) => (
    <a
      href={target}
      aria-current={isActive ? 'page' : undefined}
      className={`inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-sm transition-colors ${
        isActive ? 'bg-surface2 text-ink' : 'text-muted hover:text-ink'
      }`}
    >
      {icon}
      {label}
    </a>
  );

  return (
    <header className="sticky top-0 z-30 border-b bg-bg/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-3 py-2.5 sm:px-5">
        <a href={href.home()} className="mr-1 flex min-w-0 items-center gap-2 rounded-xl px-1 py-1 font-semibold">
          <span style={{ color: 'rgb(var(--c-accent))' }}>
            <TurtleIcon className="h-5 w-5" />
          </span>
          <span className="hidden truncate sm:inline">Turtle WoW class guides</span>
          <span className="truncate sm:hidden">Class guides</span>
        </a>
        <nav className="ml-auto flex shrink-0 items-center gap-0.5" aria-label="Main">
          {navLink(href.matrix(), 'Matrix', active === 'matrix', <GridIcon />)}
          {navLink(href.about(), 'About', active === 'about')}
        </nav>
        <button
          type="button"
          onClick={onOpenSearch}
          className="inline-flex h-9 items-center gap-2 rounded-xl hairline bg-surface px-2.5 text-sm text-muted transition-colors hover:text-ink"
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
          className="inline-flex h-9 items-center gap-2 rounded-xl hairline bg-surface px-2.5 text-sm text-muted transition-colors hover:text-ink"
          aria-label="Open glossary"
          title="Glossary"
        >
          <BookIcon />
          <span className="hidden md:inline">Glossary</span>
        </button>
        <ThemeToggle />
      </div>
    </header>
  );
}
