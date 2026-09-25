import { classes } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { getGeneralGuide } from '../lib/guides';
import { useGuideData } from '../data';
import { DocLayout } from '../components/DocLayout';
import { Loading } from '../components/layout/Page';
import { ClassMark, useClassInk } from '../components/ui/ClassMark';
import type { ClassSummary } from '../types';
import { NotFound } from './NotFound';

function ClassLink({ cls }: { cls: ClassSummary }) {
  const { ink } = useClassInk(cls.color);
  return (
    <li>
      <a href={href.classProfessions(cls.slug)} className="flex items-center gap-2 bg-card px-3 py-2 text-[13.5px] font-medium transition-colors hover:bg-accent/50" style={{ color: ink }}>
        <ClassMark name={cls.name} color={cls.color} size="sm" />
        {cls.name}
      </a>
    </li>
  );
}

/** The professions overview links every class professions page. */
function ProfessionsByClass() {
  const withPage = classes.filter((c) => c.guidePages.some((d) => d.slug === 'professions'));
  if (!withPage.length) return null;
  return (
    <nav aria-label="Professions by class" className="mb-10">
      <h2 className="mb-2 text-sm font-semibold">By class</h2>
      <ul className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border bg-border">
        {withPage.map((c) => (
          <ClassLink key={c.slug} cls={c} />
        ))}
      </ul>
    </nav>
  );
}

const LEAD_LABEL = /^\*\*(?:Recommendation|Summary)s?:?\*\*:?[\s\S]*?(?:\n\s*\n|$)/;

/**
 * `#/<slug>`: a general guide, one top-level `guide/<name>.md` (`#/professions`,
 * `#/pvp`, `#/client-setup`, `#/mechanics`, ...): its recommendation as the
 * lead, then its sections with the "On this page" list.
 */
export function GeneralGuidePage({ slug }: { slug: string }) {
  const doc = useGuideData(slug);
  const guide = getGeneralGuide(slug);
  useScrollReset(`guide/${slug}`);
  useSectionScroll(!!doc);
  if (doc === null || !guide) return <NotFound path={href.guide(slug)} />;
  if (!doc) return <Loading label={`Loading ${guide.label}`} />;
  const intro = doc.recommendation ? doc.intro.replace(LEAD_LABEL, '') : doc.intro;
  // "Professions on Turtle WoW 1.18.1" under the "Professions" heading reads as "Turtle WoW 1.18.1"
  const subtitle = doc.title.startsWith(`${guide.label} `) ? doc.title.slice(guide.label.length + 1).replace(/^(?:on|in|for)\s+/i, '') : doc.title;
  const Icon = guide.icon;
  return (
    <DocLayout
      crumbs={[{ label: 'Home', href: href.home() }, { label: guide.label }]}
      icon={
        <span className="flex h-12 w-12 items-center justify-center rounded-md border bg-card text-muted-foreground">
          <Icon className="h-6 w-6" />
        </span>
      }
      title={guide.label}
      meta={subtitle && subtitle !== guide.label ? <span>{subtitle}</span> : null}
      lead={doc.recommendation ?? null}
      intro={intro}
      sections={doc.sections}
      before={slug === 'professions' ? <ProfessionsByClass /> : null}
    />
  );
}
