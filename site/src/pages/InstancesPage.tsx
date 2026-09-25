import { useState } from 'react';
import { href, useScrollReset } from '../lib/router';
import { indexTables, instanceIndex, getInstanceSummary } from '../lib/instances';
import { plainText } from '../lib/markdown';
import { Markdown } from '../components/Markdown';
import { Page, PageHeader } from '../components/layout/Page';
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group';
import { NotFound } from './NotFound';
import { MAPS_INCLUDED } from '../components/InstanceMap';

const cellText = (md: string) => plainText(md, 200);

/**
 * Dungeons & raids: the guide's instance index as a tile grid per group
 * (map thumbnail, name, the index row's level / size / patch / zone, the
 * page's opening line), filterable by kind.
 */
export function InstancesPage() {
  useScrollReset('instances');
  const [kind, setKind] = useState<'all' | 'dungeon' | 'raid'>('all');
  if (!instanceIndex) return <NotFound path="#/instances" />;
  const groups = instanceIndex.groups.filter((g) => kind === 'all' || g.kind === kind);
  const counts = {
    dungeon: instanceIndex.pages.filter((p) => p.kind === 'dungeon').length,
    raid: instanceIndex.pages.filter((p) => p.kind === 'raid').length,
  };

  return (
    <Page
      header={
        <PageHeader
          crumbs={[{ label: 'Home', href: href.home() }, { label: 'Dungeons & raids' }]}
          title="Dungeons &amp; Raids"
          meta={
            <>
              <span className="tabular">{counts.dungeon} dungeons</span>
              <span className="tabular">{counts.raid} raids</span>
              <span>Maps from the 1.18.1 client</span>
            </>
          }
          actions={
            <ToggleGroup type="single" value={kind} onValueChange={(v) => v && setKind(v as typeof kind)} aria-label="Show">
              <ToggleGroupItem value="all">All</ToggleGroupItem>
              <ToggleGroupItem value="dungeon">Dungeons</ToggleGroupItem>
              <ToggleGroupItem value="raid">Raids</ToggleGroupItem>
            </ToggleGroup>
          }
        >
          {instanceIndex.intro.trim() ? <Markdown source={instanceIndex.intro} className="max-w-[74ch] text-muted-foreground" /> : null}
        </PageHeader>
      }
    >
      <div className="space-y-12">
        {groups.map((g) => {
          const tables = indexTables(g.markdown);
          return (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-20 space-y-5">
              <h2 id={`${g.id}-h`} className="text-[1.15rem] font-semibold tracking-tight">
                {g.heading}
              </h2>
              {tables.length === 0 ? <Markdown source={g.markdown} /> : null}
              {tables.map((t, ti) => (
                <div key={ti} className="space-y-2.5">
                  {t.heading ? <h3 className="text-sm font-medium text-muted-foreground">{t.heading}</h3> : null}
                  {t.intro ? <Markdown source={t.intro} className="text-[13px] text-muted-foreground" /> : null}
                  <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {t.rows.map((r, ri) => {
                      const s = r.slug ? getInstanceSummary(r.slug) : undefined;
                      const facts = t.columns
                        .map((c, ci) => [c, r.cells[ci] ?? ''] as const)
                        .filter(([c], ci) => ci > 0 && !/^page$/i.test(c));
                      const name = cellText(r.cells[0] ?? '');
                      const thumb = MAPS_INCLUDED ? s?.mapThumb : null;
                      const inner = (
                        <>
                          {thumb ? (
                            <span className="map-frame block overflow-hidden border-b" aria-hidden="true">
                              <img
                                src={thumb.file}
                                width={thumb.width}
                                height={thumb.height}
                                loading="lazy"
                                decoding="async"
                                alt=""
                                className="mx-auto block h-28 w-full object-contain opacity-90 transition-opacity group-hover:opacity-100"
                              />
                            </span>
                          ) : null}
                          <span className="block px-3.5 py-3">
                            <span className="block font-medium leading-snug">{name}</span>
                            <span className="mt-1 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted-foreground">
                              {facts.map(([c, v]) =>
                                cellText(v) ? (
                                  <span key={c}>
                                    {c} <span className="tabular text-foreground">{cellText(v)}</span>
                                  </span>
                                ) : null,
                              )}
                            </span>
                            {s?.blurb ? <span className="mt-2 line-clamp-2 block text-[13px] text-muted-foreground">{s.blurb}</span> : null}
                          </span>
                        </>
                      );
                      return (
                        <li key={ri}>
                          {r.slug ? (
                            <a href={href.instance(r.slug)} className="group block h-full overflow-hidden rounded-lg border bg-card transition-colors hover:border-foreground/25">
                              {inner}
                            </a>
                          ) : (
                            <div className="h-full overflow-hidden rounded-lg border bg-card">{inner}</div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </Page>
  );
}
