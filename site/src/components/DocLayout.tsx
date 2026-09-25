import type { ReactNode } from 'react';
import type { Section } from '../types';
import { Markdown } from './Markdown';
import { SectionTabs } from './guide/SectionTabs';

export interface Crumb {
  label: string;
  href?: string;
  /** Text color for a linked crumb (the class color on class pages). */
  color?: string;
}

interface DocLayoutProps {
  crumbs: Crumb[];
  /** CSS background of the header band (a vertical tint gradient). */
  background: string;
  title: string;
  /** Badges or a short line above the title. */
  eyebrow?: ReactNode;
  intro: string;
  sections: Section[];
  /** Sticky in-page section tabs under the header. */
  navLabel?: string;
  /** Anything after the section cards (a note, prev/next links). */
  footer?: ReactNode;
}

/**
 * A prose page built from one Markdown document: breadcrumb, title and
 * opening in a tinted header band, then one card per H2 section in document
 * order. Used by the class guide's standalone pages and the dungeon and raid
 * pages.
 */
export function DocLayout({ crumbs, background, title, eyebrow, intro, sections, navLabel, footer }: DocLayoutProps) {
  const tabs = navLabel ? sections.map((s) => ({ id: s.id, label: s.heading })) : [];
  return (
    <div className="min-w-0">
      <div className="border-b" style={{ backgroundImage: background }}>
        <div className="mx-auto max-w-6xl px-3 pb-6 pt-4 sm:px-5">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            {crumbs.map((c, i) => (
              <span key={`${c.label}-${i}`}>
                {i > 0 ? (
                  <span className="mx-1.5" aria-hidden="true">
                    /
                  </span>
                ) : null}
                {c.href ? (
                  <a
                    href={c.href}
                    className={`rounded hover:underline ${c.color ? 'font-semibold' : ''}`}
                    style={c.color ? { color: c.color } : undefined}
                  >
                    {c.label}
                  </a>
                ) : (
                  <span className="text-ink">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          {eyebrow ? <div className="mt-4 flex flex-wrap items-center gap-2">{eyebrow}</div> : null}
          <h1 className={`${eyebrow ? 'mt-2' : 'mt-4'} text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl`}>
            {title}
          </h1>
          {intro.trim() ? <Markdown source={intro} className="mt-3" /> : null}
        </div>
      </div>

      {tabs.length > 1 ? <SectionTabs items={tabs} ariaLabel={navLabel!} /> : null}

      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-3 py-7 sm:px-5">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            aria-labelledby={`${s.id}-h`}
            className={`card p-4 sm:p-5 ${tabs.length > 1 ? 'scroll-mt-32' : 'scroll-mt-24'}`}
          >
            <h2 id={`${s.id}-h`} className="mb-3 text-lg font-bold">
              {s.heading}
            </h2>
            <Markdown source={s.markdown} />
          </section>
        ))}
        {footer}
      </div>
    </div>
  );
}
