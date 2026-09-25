import type { CSSProperties, ReactNode } from 'react';
import { Link2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { MobileToc, Toc, type TocItem } from './Toc';

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((c, i) => (
          <span key={i} className="contents">
            {i > 0 ? <BreadcrumbSeparator /> : null}
            <BreadcrumbItem>{c.href ? <BreadcrumbLink href={c.href}>{c.label}</BreadcrumbLink> : <BreadcrumbPage>{c.label}</BreadcrumbPage>}</BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

/**
 * The page column: header on top, then the content with the "On this page"
 * list on the right (wide screens) or as a sticky menu under the top bar.
 */
export function Page({
  header,
  toc,
  children,
  style,
  className,
}: {
  header?: ReactNode;
  toc?: TocItem[];
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}) {
  const hasToc = !!toc && toc.length > 1;
  return (
    <div className={cn('mx-auto w-full max-w-[76rem] px-4 pb-16 pt-5 sm:px-6 lg:px-8 lg:pt-7', className)} style={style}>
      {header}
      <div className={cn(hasToc && 'xl:grid xl:grid-cols-[minmax(0,1fr)_13rem] xl:gap-12')}>
        <div className="min-w-0">
          {hasToc ? <MobileToc items={toc!} /> : null}
          {children}
        </div>
        {hasToc ? (
          <aside className="hidden xl:block">
            <Toc items={toc!} />
          </aside>
        ) : null}
      </div>
    </div>
  );
}

/** Breadcrumb, title row (emblem, title, meta line, actions) and an optional lead. */
export function PageHeader({
  crumbs,
  icon,
  title,
  meta,
  actions,
  children,
  nav,
  className,
  titleStyle,
}: {
  titleStyle?: CSSProperties;
  crumbs?: Crumb[];
  icon?: ReactNode;
  title: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  /** A sub-navigation strip under the header (the class pages). */
  nav?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn('mb-8', className)}>
      {crumbs ? <Breadcrumbs items={crumbs} /> : null}
      <div className={cn('flex flex-wrap items-start gap-x-4 gap-y-3', crumbs && 'mt-3')}>
        {icon ? <div className="pt-0.5">{icon}</div> : null}
        <div className="min-w-0 flex-1">
          <h1 className="text-[1.6rem] font-semibold leading-tight tracking-tight sm:text-[1.85rem]" style={titleStyle}>
            {title}
          </h1>
          {meta ? <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[13px] text-muted-foreground">{meta}</div> : null}
        </div>
        {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
      </div>
      {children ? <div className="mt-4">{children}</div> : null}
      {nav ? <div className="mt-5">{nav}</div> : null}
    </header>
  );
}

/** One titled block of a page; its id is the anchor the "On this page" list uses. */
export function Section({
  id,
  title,
  actions,
  children,
  className,
  level = 2,
}: {
  id: string;
  title: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  level?: 2 | 3;
}) {
  const H = level === 2 ? 'h2' : 'h3';
  return (
    <section id={id} className={cn('scroll-mt-[4.5rem] xl:scroll-mt-20', className)} aria-labelledby={`${id}-title`}>
      <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <H id={`${id}-title`} className={cn('group flex items-center gap-2 font-semibold tracking-tight', level === 2 ? 'text-[1.15rem]' : 'text-base')}>
          {title}
          <a
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ block: 'start' });
            }}
            className="text-muted-foreground opacity-0 transition-opacity focus:opacity-100 group-hover:opacity-100"
            aria-label="Link to this section"
          >
            <Link2 className="h-3.5 w-3.5" />
          </a>
        </H>
        {actions}
      </div>
      {children}
    </section>
  );
}

/** Stacks sections with a rule between them. */
export function Sections({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('space-y-10 [&>section+section]:border-t [&>section+section]:pt-8', className)}>{children}</div>;
}

/** Loading state: an in-game cast bar ("Loading Mage guide"). */
export function Loading({ label = 'Loading…' }: { label?: string }) {
  return (
    <div className="mx-auto flex max-w-[76rem] justify-center px-4 py-24" role="status" aria-live="polite">
      <div className="w-full max-w-xs">
        <div className="relative h-5 overflow-hidden rounded-[3px] border border-black/80 bg-[#0c0d10] shadow-[0_0_0_1px_rgb(120_120_130/0.35)]">
          <div className="absolute inset-y-0 left-0 w-full origin-left animate-cast bg-gradient-to-b from-[#ffd84a] to-[#c98f00]" />
          <span className="absolute inset-0 flex items-center justify-center text-[11px] font-semibold text-white [text-shadow:0_1px_1px_#000]">
            {label}
          </span>
        </div>
      </div>
    </div>
  );
}
