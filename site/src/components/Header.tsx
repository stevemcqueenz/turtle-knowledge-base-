import { useEffect, useRef, useState } from 'react';
import { href } from '../lib/router';
import { classes } from '../lib/site';
import { prefetchClass } from '../data';
import { BookIcon, ChevronDownIcon, CloseIcon, MenuIcon, SearchIcon, TurtleLogo } from './Icons';
import { ThemeToggle } from './ThemeToggle';
import { ClassMark } from './ui/ClassMark';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenGlossary: () => void;
  active: string;
}

const ICON_BTN =
  'inline-flex h-9 w-9 items-center justify-center rounded-xl hairline bg-surface text-muted transition-colors hover:text-ink';

/** Platform-appropriate label for the search shortcut. */
function shortcutLabel(): string {
  if (typeof navigator === 'undefined') return 'Ctrl K';
  return /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent) ? '⌘K' : 'Ctrl K';
}

function ClassGrid({ onPick }: { onPick: () => void }) {
  return (
    <ul className="grid grid-cols-3 gap-1">
      {classes.map((c) => (
        <li key={c.slug}>
          <a
            href={href.class(c.slug)}
            onClick={onPick}
            onMouseEnter={() => prefetchClass(c.slug)}
            onFocus={() => prefetchClass(c.slug)}
            className="flex items-center gap-2 rounded-xl px-2 py-2 text-sm font-medium transition-colors hover:bg-surface2"
          >
            <ClassMark name={c.name} color={c.color} size="sm" />
            {c.name}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Header({ onOpenSearch, onOpenGlossary, active }: HeaderProps) {
  const [classesOpen, setClassesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const popRef = useRef<HTMLDivElement>(null);
  const inInstances = active === 'instances' || active === 'instance';
  const inClass = ['class', 'playbook', 'leveling', 'gear', 'sources', 'guide-page'].includes(active);

  useEffect(() => {
    if (!classesOpen) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !popRef.current?.contains(e.target as Node)) setClassesOpen(false);
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [classesOpen]);

  useEffect(() => {
    const close = () => {
      setMenuOpen(false);
      setClassesOpen(false);
    };
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  const navLink = (target: string, label: string, isActive: boolean) => (
    <a
      href={target}
      aria-current={isActive ? 'page' : undefined}
      className={`relative rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
        isActive ? 'text-ink' : 'text-muted hover:text-ink'
      }`}
    >
      {label}
      {isActive ? <span className="absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-accent" aria-hidden="true" /> : null}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-bg/90 backdrop-blur-md supports-[backdrop-filter]:bg-bg/75">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-2 px-4 sm:px-6">
        <a href={href.home()} className="group mr-2 flex min-w-0 items-center gap-2.5 rounded-xl py-1" aria-label="Turtle WoW Field Manual, home">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/25 transition-transform group-hover:-rotate-6">
            <TurtleLogo className="h-7 w-7" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate font-serif text-[1.02rem] font-semibold tracking-tight">Turtle WoW Field Manual</span>
            <span className="hidden text-[10.5px] uppercase tracking-[0.14em] text-muted sm:block">1.18.1 · the community archive</span>
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex" aria-label="Main">
          <div className="relative" ref={popRef}>
            <button
              type="button"
              aria-expanded={classesOpen}
              aria-haspopup="true"
              onClick={() => setClassesOpen((v) => !v)}
              className={`relative inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm font-medium transition-colors ${
                inClass ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              Classes <ChevronDownIcon className="h-3.5 w-3.5" />
              {inClass ? <span className="absolute inset-x-3 -bottom-[9px] h-0.5 rounded-full bg-accent" aria-hidden="true" /> : null}
            </button>
            {classesOpen ? (
              <div className="card absolute left-1/2 top-11 w-[26rem] -translate-x-1/2 p-2" role="menu">
                <ClassGrid onPick={() => setClassesOpen(false)} />
              </div>
            ) : null}
          </div>
          {navLink(href.matrix(), 'Viability', active === 'matrix')}
          {navLink(href.instances(), 'Dungeons & Raids', inInstances)}
          {navLink(href.about(), 'About', active === 'about' || active === 'archive')}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 lg:ml-3">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex h-9 items-center gap-2 rounded-xl hairline bg-surface px-2.5 text-sm text-muted transition-colors hover:text-ink sm:min-w-[11rem]"
            aria-label="Search the guides (press / or Ctrl K)"
            aria-keyshortcuts="/ Control+K Meta+K"
          >
            <SearchIcon />
            <span className="hidden sm:inline">Search</span>
            <kbd className="ml-auto hidden rounded-md border px-1.5 py-0.5 font-mono text-[10px] sm:block">{shortcutLabel()}</kbd>
          </button>
          <button type="button" onClick={onOpenGlossary} className={`${ICON_BTN} hidden sm:inline-flex`} aria-label="Glossary" title="Glossary">
            <BookIcon />
          </button>
          <span className="hidden sm:inline-flex">
            <ThemeToggle />
          </span>
          <button
            type="button"
            className={`${ICON_BTN} lg:hidden`}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t bg-bg px-4 pb-5 pt-3 lg:hidden">
          <p className="eyebrow mb-2">Classes</p>
          <ClassGrid onPick={() => setMenuOpen(false)} />
          <div className="mt-4 grid gap-1 border-t pt-3">
            {[
              [href.matrix(), 'Viability board'],
              [href.instances(), 'Dungeons & Raids'],
              [href.about(), 'About this archive'],
            ].map(([to, label]) => (
              <a key={to} href={to} className="rounded-xl px-2 py-2 text-[0.95rem] font-medium hover:bg-surface2">
                {label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                onOpenGlossary();
              }}
              className="flex items-center gap-2 rounded-xl px-2 py-2 text-left text-[0.95rem] font-medium hover:bg-surface2"
            >
              Glossary
            </button>
            <div className="flex items-center justify-between px-2 pt-2">
              <span className="text-sm text-muted">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
