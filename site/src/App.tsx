import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRoute } from './lib/router';
import { useTheme } from './lib/theme';
import { ThemeContext } from './lib/theme-context';
import { coreData } from './data';
import { installCitePopover } from './lib/cite-popover';
import { cn } from './lib/utils';
import { Topbar } from './components/layout/Topbar';
import { SidebarNav } from './components/layout/Sidebar';
import { Footer } from './components/Footer';
import { SearchDialog } from './components/SearchDialog';
import { GlossaryPanel } from './components/GlossaryPanel';
import { Sheet, SheetContent, SheetDescription, SheetTitle } from './components/ui/sheet';
import { ScrollArea } from './components/ui/scroll-area';
import { TooltipProvider } from './components/ui/tooltip';
import { TurtleLogo } from './components/Icons';
import { Home } from './pages/Home';
import { ClassPage } from './pages/ClassPage';
import { PlaybookPage } from './pages/PlaybookPage';
import { LevelingPage } from './pages/LevelingPage';
import { GearPage } from './pages/GearPage';
import { GuideDocPage } from './pages/GuideDocPage';
import { ProfessionsPage } from './pages/ProfessionsPage';
import { InstancesPage } from './pages/InstancesPage';
import { InstancePage } from './pages/InstancePage';
import { MatrixPage } from './pages/MatrixPage';
import { AboutPage } from './pages/AboutPage';
import { ArchivePage } from './pages/ArchivePage';
import { GlossaryPage } from './pages/GlossaryPage';
import { NotFound } from './pages/NotFound';

const SIDEBAR_KEY = 'twow-sidebar';

function useSidebarPref(): [boolean, () => void] {
  const [open, setOpen] = useState(() => {
    try {
      return localStorage.getItem(SIDEBAR_KEY) !== 'closed';
    } catch {
      return true;
    }
  });
  const toggle = useCallback(() => {
    setOpen((o) => {
      try {
        localStorage.setItem(SIDEBAR_KEY, o ? 'closed' : 'open');
      } catch {
        /* storage blocked */
      }
      return !o;
    });
  }, []);
  return [open, toggle];
}

export default function App() {
  const route = useRoute();
  const { theme, toggle } = useTheme();
  const themeValue = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [glossaryQuery, setGlossaryQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, toggleSidebar] = useSidebarPref();

  const openGlossary = useCallback((term = '') => {
    setGlossaryQuery(term);
    setGlossaryOpen(true);
  }, []);

  useEffect(() => installCitePopover(), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing = !!target && (/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) || target.isContentEditable);
      if ((e.key.toLowerCase() === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen((o) => !o || e.key === '/');
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  let page: React.ReactNode;
  switch (route.name) {
    case 'home':
      page = <Home />;
      break;
    case 'class':
      page = <ClassPage key={route.slug} slug={route.slug} />;
      break;
    case 'playbook':
      page = <PlaybookPage key={`${route.slug}/${route.id}`} slug={route.slug} id={route.id} />;
      break;
    case 'leveling':
      page = <LevelingPage key={route.slug} slug={route.slug} />;
      break;
    case 'gear':
      page = <GearPage key={route.slug} slug={route.slug} spec={route.spec} bracket={route.bracket} />;
      break;
    case 'sources':
      page = <GuideDocPage key={`${route.slug}/sources`} slug={route.slug} page="sources" />;
      break;
    case 'guide-page':
      page = <GuideDocPage key={`${route.slug}/${route.page}`} slug={route.slug} page={route.page} />;
      break;
    case 'class-professions':
      page = <GuideDocPage key={`${route.slug}/professions`} slug={route.slug} page="professions" />;
      break;
    case 'professions':
      page = <ProfessionsPage />;
      break;
    case 'instances':
      page = <InstancesPage />;
      break;
    case 'instance':
      page = <InstancePage key={route.slug} slug={route.slug} />;
      break;
    case 'matrix':
      page = <MatrixPage />;
      break;
    case 'about':
      page = <AboutPage />;
      break;
    case 'archive':
      page = <ArchivePage />;
      break;
    case 'glossary':
      page = <GlossaryPage />;
      break;
    default:
      page = <NotFound path={route.path} />;
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      <TooltipProvider delayDuration={250} skipDelayDuration={150}>
        <a
          href="#main"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('main')?.focus();
          }}
          className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-md focus:bg-popover focus:px-3 focus:py-2 focus:text-sm focus:shadow"
        >
          Skip to content
        </a>
        <Topbar
          onOpenSearch={() => setSearchOpen(true)}
          onToggleSidebar={toggleSidebar}
          onOpenMenu={() => setMenuOpen(true)}
          sidebarOpen={sidebarOpen}
        />
        {coreData.isFixture ? (
          <p className="bg-muted px-3 py-1.5 text-center text-xs text-muted-foreground">
            Development fixtures: src/data/*.json has not been generated yet.
          </p>
        ) : null}
        <div className="flex">
          <aside
            className={cn(
              'sticky top-14 hidden h-[calc(100vh-3.5rem)] shrink-0 border-r bg-sidebar transition-[width] duration-200 lg:block',
              sidebarOpen ? 'w-64' : 'w-0 overflow-hidden border-r-0',
            )}
          >
            {sidebarOpen ? (
              <ScrollArea className="h-full w-64">
                <SidebarNav route={route} />
              </ScrollArea>
            ) : null}
          </aside>
          <div className="flex min-h-[calc(100vh-3.5rem)] min-w-0 flex-1 flex-col">
            <main id="main" tabIndex={-1} className="flex-1 outline-none">
              {page}
            </main>
            <Footer />
          </div>
        </div>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetContent side="left" className="bg-sidebar p-0">
            <div className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
              <TurtleLogo className="h-7 w-7" />
              <SheetTitle className="text-[15px] font-semibold">Turtle WoW</SheetTitle>
              <SheetDescription className="sr-only">Site navigation</SheetDescription>
            </div>
            <ScrollArea className="min-h-0 flex-1">
              <SidebarNav route={route} onNavigate={() => setMenuOpen(false)} />
            </ScrollArea>
          </SheetContent>
        </Sheet>
        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} onGlossary={openGlossary} />
        <GlossaryPanel open={glossaryOpen} onOpenChange={setGlossaryOpen} initialQuery={glossaryQuery} />
      </TooltipProvider>
    </ThemeContext.Provider>
  );
}
