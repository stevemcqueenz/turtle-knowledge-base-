import { href, useScrollReset } from '../lib/router';
import { INSTANCE_BAND, INSTANCE_KIND_LABEL, getInstance, instanceNeighbours } from '../lib/instances';
import { DocLayout } from '../components/DocLayout';
import { Badge } from '../components/Badge';
import { ChevronLeftIcon, ChevronRightIcon } from '../components/Icons';
import { NotFound } from './NotFound';

/**
 * `#/instances/<slug>`: one dungeon or raid page (overview table, role duties,
 * bosses, loot, gaps) with sticky section tabs, prose exactly as written.
 */
export function InstancePage({ slug }: { slug: string }) {
  useScrollReset(`instances/${slug}`);
  const page = getInstance(slug);
  if (!page) return <NotFound path={href.instance(slug)} />;

  const { prev, next } = instanceNeighbours(page);
  const kindLabel = page.kind ? INSTANCE_KIND_LABEL[page.kind] : null;

  return (
    <DocLayout
      crumbs={[
        { label: 'Home', href: href.home() },
        { label: 'Dungeons & Raids', href: href.instances() },
        { label: page.title },
      ]}
      background={INSTANCE_BAND}
      eyebrow={
        kindLabel || page.group ? (
          <>
            {kindLabel ? <Badge label={kindLabel} /> : null}
            {page.group ? <span className="text-sm text-muted">{page.group}</span> : null}
          </>
        ) : undefined
      }
      title={page.title}
      intro={page.intro}
      sections={page.sections}
      navLabel="Sections of this page"
      footer={
        <>
          <p className="text-xs text-muted">
            Discord citations link to the verbatim message in the repository&apos;s evidence files; hover a chip to
            read the message.
          </p>
          <nav aria-label={`Other ${kindLabel ? `${kindLabel.toLowerCase()} ` : ''}pages`} className="grid gap-3 sm:grid-cols-2">
            {prev ? (
              <a
                href={href.instance(prev.slug)}
                className="card flex min-w-0 items-center gap-2 p-4 text-sm hover:border-[color:rgb(var(--c-accent)/0.5)]"
              >
                <ChevronLeftIcon />
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Previous</span>
                  <span className="block truncate font-medium">{prev.title}</span>
                </span>
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a
                href={href.instance(next.slug)}
                className="card flex min-w-0 items-center justify-end gap-2 p-4 text-right text-sm hover:border-[color:rgb(var(--c-accent)/0.5)]"
              >
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Next</span>
                  <span className="block truncate font-medium">{next.title}</span>
                </span>
                <ChevronRightIcon />
              </a>
            ) : null}
          </nav>
        </>
      }
    />
  );
}
