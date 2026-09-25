import { ArrowRight } from 'lucide-react';
import type { GuideDoc } from '../types';
import { getClassSummary } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { useClassEntry } from '../data';
import { DocLayout } from '../components/DocLayout';
import { Loading } from '../components/layout/Page';
import { ClassMark, useClassInk, useClassVars } from '../components/ui/ClassMark';
import { ClassNav } from '../components/class/ClassNav';
import { NotFound } from './NotFound';

interface GuideDocPageProps {
  slug: string;
  /** "sources" for the class sources page, "professions", or another guide page's slug. */
  page: string;
}

/** Splits a guide page's opening into its **Recommendation:** paragraph and the rest. */
function splitLead(intro: string): { lead: string | null; rest: string } {
  const m = /^\*\*(?:Recommendation|Summary)s?:?\*\*:?\s*([\s\S]*?)(?:\n\s*\n|$)/.exec(intro.trim());
  if (!m) return { lead: null, rest: intro };
  const lead = m[1].trim();
  return { lead: lead.charAt(0).toUpperCase() + lead.slice(1), rest: intro.trim().slice(m[0].length) };
}

/**
 * A standalone page of a class guide: the sources page, the class professions
 * page, or a page no spec guide claims (a niche role).
 */
export function GuideDocPage({ slug, page }: GuideDocPageProps) {
  const cls = getClassSummary(slug);
  const entry = useClassEntry(slug);
  useScrollReset(`${slug}/${page}`);
  useSectionScroll(!!entry);
  const { ink } = useClassInk(cls?.color ?? '#cccccc');
  const vars = useClassVars(cls?.color ?? '#cccccc');
  const path = page === 'sources' ? href.sources(slug) : href.guidePage(slug, page);
  if (!cls || entry === null) return <NotFound path={path} />;
  if (!entry) return <Loading label={`Loading ${cls.name}`} />;

  const doc: GuideDoc | null | undefined = page === 'sources' ? entry.sources : entry.guidePages?.find((d) => d.slug === page);
  if (!doc) return <NotFound path={path} />;
  const professions = page === 'professions';
  const { lead, rest } = splitLead(doc.intro);

  return (
    <DocLayout
      style={vars}
      crumbs={[
        { label: 'Classes', href: href.home() },
        { label: cls.name, href: href.class(slug) },
        { label: page === 'sources' ? 'Sources' : professions ? 'Professions' : doc.title },
      ]}
      icon={<ClassMark name={cls.name} color={cls.color} size="xl" />}
      title={
        professions ? (
          <>
            <span style={{ color: ink }}>{cls.name}</span> professions
          </>
        ) : (
          doc.title
        )
      }
      meta={
        professions ? (
          <a href={href.professions()} className="inline-flex items-center gap-1 text-link hover:underline">
            Professions for every class <ArrowRight className="h-3.5 w-3.5" />
          </a>
        ) : (
          <span>{page === 'sources' ? 'What the guide is built on' : 'Guide page'}</span>
        )
      }
      nav={<ClassNav cls={cls} current={path} />}
      lead={lead}
      intro={rest}
      sections={doc.sections}
      footer={
        page === 'sources' ? (
          <p className="mt-10 border-t pt-5 text-[13px] text-muted-foreground">
            Discord citations link to the verbatim message in the repository&rsquo;s evidence files. Hover a marker to read the message.
          </p>
        ) : null
      }
    />
  );
}
