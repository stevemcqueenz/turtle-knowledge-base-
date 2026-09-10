import { getClass } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { Card } from '../components/Card';
import { Markdown } from '../components/Markdown';
import { SectionNav, type NavItem } from '../components/SectionNav';
import { FlameIcon } from '../components/Icons';
import { NotFound } from './NotFound';

const HARDCORE = /hardcore|hc\b/i;

export function LevelingPage({ slug }: { slug: string }) {
  const entry = getClass(slug);
  useScrollReset(`${slug}/leveling`);
  const theme = useThemeValue();

  if (!entry || !entry.leveling) return <NotFound path={`#/class/${slug}/leveling`} />;

  const ink = readableColor(entry.color, theme);
  const sections = entry.leveling.sections;
  const navItems: NavItem[] = sections.map((s) => ({ id: `lv-${s.id}`, label: s.heading }));

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-5">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted">
        <a href={href.home()} className="hover:underline">
          Classes
        </a>
        <span className="mx-1.5" aria-hidden="true">
          /
        </span>
        <a href={href.class(entry.slug)} className="hover:underline" style={{ color: ink }}>
          {entry.name}
        </a>
        <span className="mx-1.5" aria-hidden="true">
          /
        </span>
        <span className="text-ink">Leveling</span>
      </nav>

      <header className="mb-5 overflow-hidden rounded-xl bg-surface hairline">
        <div className="h-1.5 w-full" style={{ backgroundColor: entry.color }} aria-hidden="true" />
        <div className="p-4 sm:p-5">
          <h1 className="text-xl font-semibold sm:text-2xl">{entry.name} — leveling 1–60</h1>
          <p className="mt-1 text-xs text-muted">Source file: {entry.leveling.sourceFile}</p>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <div className="min-w-0 lg:pt-1">
          <SectionNav items={navItems} ariaLabel="Sections of this leveling guide" />
        </div>
        <div className="min-w-0 space-y-4">
          {sections.map((s) => (
            <Card key={s.id} id={`lv-${s.id}`} as="section" className="scroll-mt-24">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                {HARDCORE.test(s.heading) ? (
                  <span className="text-niche" title="Hardcore">
                    <FlameIcon />
                  </span>
                ) : null}
                {s.heading}
              </h2>
              <Markdown source={s.markdown} />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
