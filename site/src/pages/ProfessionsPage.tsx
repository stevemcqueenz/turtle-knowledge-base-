import { FlaskConical } from 'lucide-react';
import { classes } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { useProfessionsData } from '../data';
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

/** `#/professions`: guide/professions.md, the professions overview for every class. */
export function ProfessionsPage() {
  const doc = useProfessionsData();
  useScrollReset('professions');
  useSectionScroll(!!doc);
  if (doc === null) return <NotFound path={href.professions()} />;
  if (!doc) return <Loading label="Loading professions" />;
  const withPage = classes.filter((c) => c.guidePages.some((d) => d.slug === 'professions'));
  const intro = doc.recommendation ? doc.intro.replace(/^\*\*(?:Recommendation|Summary)s?:?\*\*:?[\s\S]*?(?:\n\s*\n|$)/, '') : doc.intro;
  return (
    <DocLayout
      crumbs={[{ label: 'Home', href: href.home() }, { label: 'Professions' }]}
      icon={
        <span className="flex h-12 w-12 items-center justify-center rounded-md border bg-card text-muted-foreground">
          <FlaskConical className="h-6 w-6" />
        </span>
      }
      title="Professions"
      meta={<span>{doc.title.replace(/^Professions on /, '')}</span>}
      lead={doc.recommendation ?? null}
      intro={intro}
      sections={doc.sections}
      before={
        withPage.length ? (
          <nav aria-label="Professions by class" className="mb-10">
            <h2 className="mb-2 text-sm font-semibold">By class</h2>
            <ul className="grid grid-cols-3 gap-px overflow-hidden rounded-lg border bg-border">
              {withPage.map((c) => (
                <ClassLink key={c.slug} cls={c} />
              ))}
            </ul>
          </nav>
        ) : null
      }
    />
  );
}
