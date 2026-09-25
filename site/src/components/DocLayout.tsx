import type { ReactNode } from 'react';
import type { Section as SectionData } from '../types';
import { Markdown } from './Markdown';
import { PageHero, Section, WithToc, type Crumb } from './layout/Page';
import { cleanHeading } from './guide/util';

interface DocLayoutProps {
  crumbs: Crumb[];
  /** "r g b" of the hero tint (the class color), or the archive accent when absent. */
  rgb?: string;
  title: ReactNode;
  eyebrow?: ReactNode;
  intro: string;
  sections: SectionData[];
  /** Anything after the sections (a note, prev/next links). */
  footer?: ReactNode;
}

/**
 * A prose page built from one Markdown document: breadcrumb, title and opening
 * in the hero band, then the H2 sections in document order with a table of
 * contents. Used by the class guide's standalone pages (sources, niche roles).
 */
export function DocLayout({ crumbs, rgb, title, eyebrow, intro, sections, footer }: DocLayoutProps) {
  return (
    <div>
      <PageHero rgb={rgb} crumbs={crumbs}>
        {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
        <h1 className="display text-[2rem] leading-tight sm:text-[2.6rem]">{title}</h1>
        {intro.trim() ? <Markdown source={intro} className="mt-4 max-w-3xl" /> : null}
      </PageHero>
      <WithToc toc={sections.map((s) => ({ id: s.id, label: cleanHeading(s.heading).replace(/\s*\([^)]*\)\s*$/, '') }))}>
        <div className="space-y-12">
          {sections.map((s) => (
            <Section key={s.id} id={s.id} title={cleanHeading(s.heading)}>
              <Markdown source={s.markdown} />
            </Section>
          ))}
          {footer}
        </div>
      </WithToc>
    </div>
  );
}
