import type { ReactNode } from 'react';
import { Toc, type TocItem } from './Toc';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-[13px] text-muted">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1">
        {items.map((c, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 ? <span aria-hidden="true" className="opacity-60">/</span> : null}
            {c.href ? (
              <a href={c.href} className="hover:text-ink">
                {c.label}
              </a>
            ) : (
              <span aria-current="page" className="text-ink">
                {c.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** The top band of a page, washed with the class color (or the archive's brass). */
export function PageHero({
  rgb,
  crumbs,
  children,
}: {
  rgb?: string;
  crumbs?: Crumb[];
  children: ReactNode;
}) {
  const tint = rgb ?? 'var(--c-accent)';
  return (
    <div
      className="relative border-b"
      style={{
        background: `radial-gradient(70rem 26rem at 8% -30%, rgb(${tint} / 0.16), transparent 70%), linear-gradient(180deg, rgb(${tint} / 0.05), transparent)`,
      }}
    >
      <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[3px]" style={{ background: `rgb(${tint} / 0.8)` }} />
      <div className="mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-6 sm:pb-10 sm:pt-8">
        {crumbs ? <Breadcrumbs items={crumbs} /> : null}
        <div className={crumbs ? 'mt-4' : ''}>{children}</div>
      </div>
    </div>
  );
}

/** Content column with a table of contents: sidebar on desktop, chip bar on phones. */
export function WithToc({ toc, children, title }: { toc: TocItem[]; children: ReactNode; title?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
        {/* `contents` on phones: the chip bar then sticks for the whole page, not just its wrapper */}
        <div className="contents lg:order-2 lg:block">
          <Toc items={toc} title={title} />
        </div>
        <div className="min-w-0 py-8 sm:py-10 lg:order-1">{children}</div>
      </div>
    </div>
  );
}

/** One titled block of a page; its id is the anchor the table of contents uses. */
export function Section({
  id,
  title,
  eyebrow,
  actions,
  children,
  className = '',
}: {
  id: string;
  title: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-28 lg:scroll-mt-20 ${className}`} aria-labelledby={`${id}-title`}>
      <div className="mb-4 flex flex-wrap items-end justify-between gap-x-4 gap-y-2">
        <div className="min-w-0">
          {eyebrow ? <p className="eyebrow mb-1">{eyebrow}</p> : null}
          <h2 id={`${id}-title`} className="display text-[1.55rem] leading-tight sm:text-[1.75rem]">
            {title}
          </h2>
        </div>
        {actions}
      </div>
      {children}
    </section>
  );
}

export function Loading({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6" role="status" aria-live="polite">
      <div className="h-8 w-64 animate-pulse rounded-lg bg-surface2" />
      <div className="mt-4 h-4 w-full max-w-2xl animate-pulse rounded bg-surface2" />
      <div className="mt-2 h-4 w-full max-w-xl animate-pulse rounded bg-surface2" />
      <span className="sr-only">{label}</span>
    </div>
  );
}
