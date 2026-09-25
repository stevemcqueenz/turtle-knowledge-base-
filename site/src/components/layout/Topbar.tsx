import { useEffect, useState } from 'react';
import { Menu, Moon, PanelLeft, Search, Sun } from 'lucide-react';
import { href } from '../../lib/router';
import { useThemeToggle, useThemeValue } from '../../lib/theme-context';
import { GithubIcon, TurtleLogo } from '../Icons';
import { Button } from '../ui/button';
import { Kbd } from '../ui/kbd';
import { Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { REPO_URL } from '../Footer';

/** Platform-appropriate label for the search shortcut. */
function useShortcut(): string {
  const [label, setLabel] = useState('Ctrl K');
  useEffect(() => {
    if (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent)) setLabel('⌘K');
  }, []);
  return label;
}

/**
 * Reading progress drawn as the experience bar: a thin purple bar with the
 * game's twenty segment ticks along the bottom edge of the top bar.
 */
function XpBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 40 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0);
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    window.addEventListener('hashchange', on);
    return () => {
      window.removeEventListener('scroll', on);
      window.removeEventListener('resize', on);
      window.removeEventListener('hashchange', on);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -bottom-px h-[3px] overflow-hidden">
      <div
        className="xp-bar h-full transition-[clip-path] duration-150 ease-out"
        style={{ clipPath: `inset(0 ${100 - p * 100}% 0 0)` }}
      />
    </div>
  );
}

export function Topbar({
  onOpenSearch,
  onToggleSidebar,
  onOpenMenu,
  sidebarOpen,
}: {
  onOpenSearch: () => void;
  onToggleSidebar: () => void;
  onOpenMenu: () => void;
  sidebarOpen: boolean;
}) {
  const theme = useThemeValue();
  const toggleTheme = useThemeToggle();
  const shortcut = useShortcut();
  const next = theme === 'dark' ? 'light' : 'dark';

  return (
    <header className="sticky top-0 z-40 h-14 border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/75">
      <div className="flex h-full items-center gap-2 px-3 sm:px-4">
        <Button variant="ghost" size="icon-sm" className="lg:hidden" onClick={onOpenMenu} aria-label="Open navigation">
          <Menu />
        </Button>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="hidden text-muted-foreground lg:inline-flex"
              onClick={onToggleSidebar}
              aria-label={sidebarOpen ? 'Hide the sidebar' : 'Show the sidebar'}
              aria-pressed={sidebarOpen}
            >
              <PanelLeft />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">{sidebarOpen ? 'Hide the sidebar' : 'Show the sidebar'}</TooltipContent>
        </Tooltip>

        <a href={href.home()} className="flex min-w-0 items-center gap-2 rounded-md py-1 pr-1" aria-label="Turtle WoW guides, home">
          <TurtleLogo className="h-7 w-7 shrink-0" />
          <span className="truncate text-[15px] font-semibold tracking-tight">Turtle WoW</span>
          <span className="hidden rounded-[4px] border px-1.5 py-px text-[11px] font-medium tabular text-muted-foreground sm:inline">1.18.1</span>
        </a>

        <div className="ml-auto flex items-center gap-1.5">
          <button
            type="button"
            onClick={onOpenSearch}
            className="inline-flex h-8 items-center gap-2 rounded-md border bg-muted/50 px-2.5 text-[13px] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:w-64 md:w-80"
            aria-label="Search the guides"
            aria-keyshortcuts="/ Control+K Meta+K"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search classes, specs, bosses…</span>
            <Kbd className="ml-auto hidden sm:inline-flex">{shortcut}</Kbd>
          </button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="text-muted-foreground" onClick={toggleTheme} aria-label={`Switch to the ${next} theme`}>
                {theme === 'dark' ? <Sun /> : <Moon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">{theme === 'dark' ? 'Light theme' : 'Dark theme'}</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="hidden text-muted-foreground sm:inline-flex" asChild>
                <a href={REPO_URL} target="_blank" rel="noopener noreferrer" aria-label="The repository on GitHub">
                  <GithubIcon />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">Repository</TooltipContent>
          </Tooltip>
        </div>
      </div>
      <XpBar />
    </header>
  );
}
