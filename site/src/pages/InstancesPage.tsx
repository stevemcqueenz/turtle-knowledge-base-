import { useState } from 'react';
import { href, useScrollReset } from '../lib/router';
import { indexTables, instanceIndex, getInstanceSummary } from '../lib/instances';
import { plainText } from '../lib/markdown';
import { Markdown } from '../components/Markdown';
import { PageHero } from '../components/layout/Page';
import { ArrowRightIcon } from '../components/Icons';
import { NotFound } from './NotFound';
import { MAPS_INCLUDED } from '../components/InstanceMap';

const cellText = (md: string) => plainText(md, 200);

/**
 * Dungeons & Raids: the guide's instance index as scannable cards, grouped the
 * way the index groups them (Turtle-custom and vanilla dungeons, raids), with a
 * filter by kind. Each card carries the index row's facts (level, size, patch,
 * zone) and the page's opening line.
 */
export function InstancesPage() {
  useScrollReset('instances');
  const [kind, setKind] = useState<'all' | 'dungeon' | 'raid'>('all');
  if (!instanceIndex) return <NotFound path="#/instances" />;
  const groups = instanceIndex.groups.filter((g) => kind === 'all' || g.kind === kind);

  return (
    <div>
      <PageHero crumbs={[{ label: 'Home', href: href.home() }, { label: 'Dungeons & Raids' }]}>
        <p className="eyebrow">Every instance in 1.18.1</p>
        <h1 className="display mt-2 text-[2.1rem] leading-[1.1] sm:text-5xl">Dungeons &amp; Raids</h1>
        {instanceIndex.intro.trim() ? <Markdown source={instanceIndex.intro} className="mt-4 max-w-3xl" /> : null}
        <div role="group" aria-label="Show" className="mt-6 flex flex-wrap gap-2">
          {(
            [
              ['all', 'All'],
              ['dungeon', 'Dungeons'],
              ['raid', 'Raids'],
            ] as const
          ).map(([k, label]) => (
            <button
              key={k}
              type="button"
              aria-pressed={kind === k}
              onClick={() => setKind(k)}
              className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                kind === k ? 'bg-accent text-[rgb(var(--c-accent-ink))]' : 'hairline bg-surface text-muted hover:text-ink'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </PageHero>

      <div className="mx-auto max-w-7xl space-y-14 px-4 py-10 sm:px-6">
        {groups.map((g) => {
          const tables = indexTables(g.markdown);
          return (
            <section key={g.id} id={g.id} aria-labelledby={`${g.id}-h`} className="scroll-mt-20 space-y-6">
              <h2 id={`${g.id}-h`} className="display text-[1.75rem]">
                {g.heading}
              </h2>
              {tables.length === 0 ? <Markdown source={g.markdown} /> : null}
              {tables.map((t, ti) => (
                <div key={ti} className="space-y-3">
                  {t.heading ? <h3 className="eyebrow">{t.heading}</h3> : null}
                  {t.intro ? <Markdown source={t.intro} className="text-sm text-muted" /> : null}
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
                            <span className="map-frame -mx-4 -mt-4 mb-3 block overflow-hidden rounded-t-2xl border-b" aria-hidden="true">
                              <img
                                src={thumb.file}
                                width={thumb.width}
                                height={thumb.height}
                                loading="lazy"
                                decoding="async"
                                alt=""
                                className="mx-auto block h-28 w-full object-contain"
                              />
                            </span>
                          ) : null}
                          <span className="flex items-start justify-between gap-3">
                            <span className="font-serif text-lg font-semibold leading-snug">{name}</span>
                            {r.slug ? <ArrowRightIcon className="mt-1.5 h-4 w-4 shrink-0 text-muted" /> : null}
                          </span>
                          <span className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
                            {facts.map(([c, v]) =>
                              cellText(v) ? (
                                <span key={c}>
                                  <span className="uppercase tracking-wider opacity-80">{c}</span>{' '}
                                  <span className="font-medium text-ink">{cellText(v)}</span>
                                </span>
                              ) : null,
                            )}
                          </span>
                          {s?.blurb ? <span className="mt-3 line-clamp-2 text-sm text-muted">{s.blurb}</span> : null}
                        </>
                      );
                      return (
                        <li key={ri}>
                          {r.slug ? (
                            <a href={href.instance(r.slug)} className="card flex h-full flex-col p-4 transition-colors hover:border-accent/50">
                              {inner}
                            </a>
                          ) : (
                            <div className="card flex h-full flex-col p-4">{inner}</div>
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
    </div>
  );
}
