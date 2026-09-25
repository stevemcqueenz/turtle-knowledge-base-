import type { GuideDoc } from '../types';
import { getClassSummary } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { useClassEntry } from '../data';
import { DocLayout } from '../components/DocLayout';
import { Loading } from '../components/layout/Page';
import { useClassInk } from '../components/ui/ClassMark';
import { NotFound } from './NotFound';

interface GuideDocPageProps {
  slug: string;
  /** "sources" for the class sources page, else a guide page's slug. */
  page: string;
}

/**
 * A standalone page of a class guide: the sources page (what informed the
 * guide, the experts relied on, the gaps) or a page no spec guide claims (a
 * niche role). Prose in document order with a table of contents.
 */
export function GuideDocPage({ slug, page }: GuideDocPageProps) {
  const cls = getClassSummary(slug);
  const entry = useClassEntry(slug);
  useScrollReset(`${slug}/${page}`);
  useSectionScroll(!!entry);
  const { rgb } = useClassInk(cls?.color ?? '#cccccc');
  const path = page === 'sources' ? href.sources(slug) : href.guidePage(slug, page);
  if (!cls || entry === null) return <NotFound path={path} />;
  if (!entry) return <Loading />;

  const doc: GuideDoc | null | undefined =
    page === 'sources' ? entry.sources : entry.guidePages?.find((d) => d.slug === page);
  if (!doc) return <NotFound path={path} />;

  return (
    <DocLayout
      crumbs={[
        { label: 'Classes', href: href.home() },
        { label: cls.name, href: href.class(slug) },
        { label: page === 'sources' ? 'Sources' : doc.title },
      ]}
      rgb={rgb}
      eyebrow={page === 'sources' ? `${cls.name} · what the guides are built on` : `${cls.name} · guide page`}
      title={doc.title}
      intro={doc.intro}
      sections={doc.sections}
      footer={
        page === 'sources' ? (
          <p className="border-t pt-6 text-sm text-muted">
            Discord citations link to the verbatim message in the repository&rsquo;s evidence files. Hover a
            marker to read the message.
          </p>
        ) : null
      }
    />
  );
}
