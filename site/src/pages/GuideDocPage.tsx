import type { GuideDoc } from '../types';
import { getClass } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { DocLayout } from '../components/DocLayout';
import { NotFound } from './NotFound';

interface GuideDocPageProps {
  slug: string;
  /** "sources" for the class sources page, else a guide page's slug. */
  page: string;
}

/**
 * A standalone page of a class guide: the sources page (what informed the
 * guide, the experts relied on, the gaps) or a page no spec guide claims (a
 * niche role). Prose only, one card per section, in document order.
 */
export function GuideDocPage({ slug, page }: GuideDocPageProps) {
  const entry = getClass(slug);
  useScrollReset(`${slug}/${page}`);
  const theme = useThemeValue();

  const doc: GuideDoc | null | undefined =
    page === 'sources' ? entry?.sources : entry?.guidePages?.find((d) => d.slug === page);
  const path = page === 'sources' ? href.sources(slug) : href.guidePage(slug, page);
  if (!entry || !doc) return <NotFound path={path} />;

  const ink = readableColor(entry.color, theme);
  const crumb = page === 'sources' ? 'Sources' : doc.title;

  return (
    <DocLayout
      crumbs={[
        { label: 'Classes', href: href.home() },
        { label: entry.name, href: href.class(entry.slug), color: ink },
        { label: crumb },
      ]}
      background={`linear-gradient(180deg, ${entry.color}22 0%, ${entry.color}00 100%)`}
      title={doc.title}
      intro={doc.intro}
      sections={doc.sections}
      footer={
        page === 'sources' ? (
          <p className="text-xs text-muted">
            Discord citations link to the verbatim message in the repository&apos;s evidence files; hover a chip to
            read the message.
          </p>
        ) : null
      }
    />
  );
}
