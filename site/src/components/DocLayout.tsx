import type { CSSProperties, ReactNode } from 'react';
import type { Section as SectionData } from '../types';
import { Markdown } from './Markdown';
import { Page, PageHeader, Section, Sections, type Crumb } from './layout/Page';
import { cleanHeading } from './guide/util';

interface DocLayoutProps {
  crumbs: Crumb[];
  title: ReactNode;
  titleStyle?: CSSProperties;
  icon?: ReactNode;
  meta?: ReactNode;
  nav?: ReactNode;
  /** The lead paragraph under the title (the page's recommendation). */
  lead?: string | null;
  intro: string;
  sections: SectionData[];
  /** Anything before the sections (a class picker). */
  before?: ReactNode;
  /** Anything after the sections (a note). */
  footer?: ReactNode;
  style?: CSSProperties;
}

/**
 * A prose page built from one Markdown document: header, then the H2
 * sections in document order with the "On this page" list. Used by the class
 * guides' standalone pages (sources, professions, niche roles) and the
 * professions overview.
 */
export function DocLayout({ crumbs, title, titleStyle, icon, meta, nav, lead, intro, sections, before, footer, style }: DocLayoutProps) {
  return (
    <Page
      style={style}
      toc={sections.map((s) => ({ id: s.id, label: cleanHeading(s.heading).replace(/\s*\([^)]*\)\s*$/, '') }))}
      header={
        <PageHeader crumbs={crumbs} icon={icon} title={title} titleStyle={titleStyle} meta={meta} nav={nav}>
          {lead ? <Markdown source={lead} className="max-w-[74ch] text-[15.5px] leading-relaxed" /> : null}
          {intro.trim() ? <Markdown source={intro} className={lead ? 'mt-3 max-w-[74ch] text-muted-foreground' : 'max-w-[74ch]'} /> : null}
        </PageHeader>
      }
    >
      {before}
      <Sections>
        {sections.map((s) => (
          <Section key={s.id} id={s.id} title={cleanHeading(s.heading)}>
            <Markdown source={s.markdown} />
          </Section>
        ))}
      </Sections>
      {footer}
    </Page>
  );
}
