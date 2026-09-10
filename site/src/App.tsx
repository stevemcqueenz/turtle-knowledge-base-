import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRoute } from './lib/router';
import { useTheme } from './lib/theme';
import { ThemeContext } from './lib/theme-context';
import { siteData } from './data';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchDialog } from './components/SearchDialog';
import { GlossaryPanel } from './components/GlossaryPanel';
import { Home } from './pages/Home';
import { ClassPage } from './pages/ClassPage';
import { PlaybookPage } from './pages/PlaybookPage';
import { LevelingPage } from './pages/LevelingPage';
import { GearPage } from './pages/GearPage';
import { MatrixPage } from './pages/MatrixPage';
import { AboutPage } from './pages/AboutPage';
import { NotFound } from './pages/NotFound';

export default function App() {
  const route = useRoute();
  const { theme, toggle } = useTheme();
  const themeValue = useMemo(() => ({ theme, toggle }), [theme, toggle]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [glossaryQuery, setGlossaryQuery] = useState('');

  const openGlossary = useCallback((term = '') => {
    setGlossaryQuery(term);
    setGlossaryOpen(true);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      const typing = !!target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName);
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  let page: React.ReactNode;
  switch (route.name) {
    case 'home':
      page = <Home onGlossary={openGlossary} />;
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
    case 'matrix':
      page = <MatrixPage />;
      break;
    case 'about':
      page = <AboutPage />;
      break;
    default:
      page = <NotFound path={route.path} />;
  }

  return (
    <ThemeContext.Provider value={themeValue}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:rounded-xl focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Header onOpenSearch={() => setSearchOpen(true)} onOpenGlossary={() => openGlossary('')} active={route.name} />
      {siteData.isFixture ? (
        <p className="bg-niche/15 px-3 py-1.5 text-center text-xs text-niche">
          Development fixtures: src/data/*.json has not been generated yet.
        </p>
      ) : null}
      <main id="main">{page}</main>
      <Footer />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} onGlossary={openGlossary} />
      <GlossaryPanel open={glossaryOpen} onClose={() => setGlossaryOpen(false)} initialQuery={glossaryQuery} />
    </ThemeContext.Provider>
  );
}
