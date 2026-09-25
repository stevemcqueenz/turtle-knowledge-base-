import { useLayoutEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, HeartPulse, Shield, Swords } from 'lucide-react';
import type { Section as SectionData } from '../types';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { INSTANCE_KIND_LABEL, bossAnchor, getInstanceSummary, instanceNeighbours } from '../lib/instances';
import { useInstancesData } from '../data';
import { Markdown } from '../components/Markdown';
import { InstanceMap } from '../components/InstanceMap';
import { Loading, Page, PageHeader, Section, Sections } from '../components/layout/Page';
import type { TocItem } from '../components/layout/Toc';
import { ToggleGroup, ToggleGroupItem } from '../components/ui/toggle-group';
import { NotFound } from './NotFound';

interface Chunk {
  heading: string | null;
  markdown: string;
}

/** A section's Markdown split at its H3 headings (the bosses, in a "Bosses" section). */
function splitH3(markdown: string): Chunk[] {
  const out: Chunk[] = [{ heading: null, markdown: '' }];
  for (const line of markdown.split('\n')) {
    const m = /^###\s+(.+)$/.exec(line);
    if (m) out.push({ heading: m[1].trim(), markdown: '' });
    else out[out.length - 1].markdown += `${line}\n`;
  }
  return out.filter((c) => c.heading !== null || c.markdown.trim());
}

const plain = (s: string) => s.replace(/<[^>]+>/g, '').replace(/[*_`]/g, '').trim();

type Role = 'all' | 'tank' | 'healer' | 'dps';
const ROLE_RE: Record<Exclude<Role, 'all'>, RegExp> = {
  tank: /\b(tanks?|tanking|tanked|taunt\w*|threat|aggro|off-?tanks?|MT|OT|kite\w*|pick(?:s|ed)? up)\b/i,
  healer: /\b(heal(?:er|ers|ing|s|ed)?|dispel\w*|cleans\w*|decurs\w*|remove curse|abolish\w*|shield the|mana)\b/i,
  dps: /\b(dps|melee|ranged|casters?|interrupt\w*|kick\w*|burn\w*|damage|hunters?|rogues?|mages?|warlocks?|warriors?|cleave|aoe)\b/i,
};

/** Marks each list item and paragraph of the boss blocks with the roles it mentions. */
function useRoleMarks(ref: React.RefObject<HTMLElement>, key: string) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.querySelectorAll<HTMLElement>('.boss-card li, .boss-card p').forEach((el) => {
      const text = el.textContent ?? '';
      (Object.keys(ROLE_RE) as (keyof typeof ROLE_RE)[]).forEach((r) => {
        if (ROLE_RE[r].test(text)) el.dataset[`r${r}`] = '1';
      });
    });
  }, [ref, key]);
}

const BOSS_SECTION = /boss|encounter|wing|floor|event/i;

export function InstancePage({ slug }: { slug: string }) {
  const summary = getInstanceSummary(slug);
  const data = useInstancesData();
  const page = data?.pages.find((p) => p.slug === slug);
  const [role, setRole] = useState<Role>('all');
  const body = useRef<HTMLDivElement>(null);
  useScrollReset(`instance/${slug}`);
  useSectionScroll(!!page);
  useRoleMarks(body, `${slug}-${!!page}`);

  if (!summary || data === null) return <NotFound path={`#/instances/${slug}`} />;
  if (!data || !page) return <Loading label="Loading instance" />;

  const { prev, next } = instanceNeighbours(slug);
  const kind = page.kind ? INSTANCE_KIND_LABEL[page.kind] : 'Instance';
  // boss anchor -> its number on the map
  const markerNo = new Map<string, number>();
  for (const f of page.map?.floors ?? []) for (const m of f.markers) if (!markerNo.has(m.anchor)) markerNo.set(m.anchor, m.n);

  const roleBar = (
    <div className="sticky top-14 z-10 -mx-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-b bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:mx-0 sm:rounded-md sm:border sm:px-3 xl:top-16">
      <span className="text-[13px] text-muted-foreground">Highlight</span>
      <ToggleGroup type="single" value={role} onValueChange={(v) => setRole((v || 'all') as Role)} aria-label="Highlight advice for a role">
        <ToggleGroupItem value="all">Everyone</ToggleGroupItem>
        <ToggleGroupItem value="tank">
          <Shield /> Tanks
        </ToggleGroupItem>
        <ToggleGroupItem value="healer">
          <HeartPulse /> Healers
        </ToggleGroupItem>
        <ToggleGroupItem value="dps">
          <Swords /> DPS
        </ToggleGroupItem>
      </ToggleGroup>
      <span className="hidden text-xs text-muted-foreground md:inline">Dims lines that do not mention the role.</span>
    </div>
  );

  const toc: TocItem[] = (page.map?.floors.length ? ([{ id: 'instance-map', label: 'Map' }] as TocItem[]) : []).concat(
    page.sections.map((s: SectionData) => ({
      id: s.id,
      label: s.heading.replace(/\s*\([^)]*\)\s*$/, ''),
      children: BOSS_SECTION.test(s.heading)
        ? splitH3(s.markdown)
            .filter((c) => c.heading)
            .map((c) => ({ id: bossAnchor(c.heading!), label: plain(c.heading!).replace(/\s*\([^)]*\)\s*$/, '') }))
        : undefined,
    })),
  );

  return (
    <Page
      toc={toc}
      header={
        <PageHeader
          crumbs={[{ label: 'Dungeons & raids', href: href.instances() }, { label: page.title }]}
          title={page.title}
          meta={
            <>
              <span>{kind}</span>
              {page.group ? <span>{page.group}</span> : null}
              {page.map?.floors.length ? (
                <span className="tabular">
                  {page.map.floors.length} {page.map.floors.length === 1 ? 'floor' : 'floors'} ·{' '}
                  {page.map.floors.reduce((n, f) => n + f.markers.length, 0)} bosses on the map
                </span>
              ) : null}
            </>
          }
        >
          {page.intro.trim() ? <Markdown source={page.intro} className="max-w-[74ch]" /> : null}
        </PageHeader>
      }
    >
      <div ref={body} data-hl={role}>
        <Sections>
          {page.map?.floors.length ? (
            <section id="instance-map" aria-label="Map" className="scroll-mt-20">
              <InstanceMap slug={page.slug} title={page.title} map={page.map} />
            </section>
          ) : null}
          {page.sections.map((s) => {
            const bossy = BOSS_SECTION.test(s.heading) && /^###\s/m.test(s.markdown);
            return (
              <Section key={s.id} id={s.id} title={s.heading}>
                {bossy ? (
                  <div className="space-y-6">
                    {roleBar}
                    {splitH3(s.markdown).map((c, i) => {
                      if (!c.heading) return <Markdown key={i} source={c.markdown} />;
                      const anchor = bossAnchor(c.heading);
                      const n = markerNo.get(anchor);
                      return (
                        <article key={i} id={anchor} className="boss-card scroll-mt-32 border-t pt-5 first-of-type:border-t-0" aria-labelledby={`${anchor}-h`}>
                          <h3 id={`${anchor}-h`} className="mb-2 flex items-center gap-2.5 text-base font-semibold">
                            {n ? (
                              <span aria-label={`Map marker ${n}`} className="map-marker !static !translate-x-0 !translate-y-0 !transform-none">
                                {n}
                              </span>
                            ) : null}
                            <Markdown inline source={c.heading} />
                          </h3>
                          <Markdown source={c.markdown} />
                        </article>
                      );
                    })}
                  </div>
                ) : (
                  <Markdown source={s.markdown} />
                )}
              </Section>
            );
          })}
        </Sections>
      </div>

      <nav aria-label={`Other ${kind.toLowerCase()}s`} className="mt-12 grid gap-3 border-t pt-6 sm:grid-cols-2">
        {prev ? (
          <a href={href.instance(prev.slug)} className="flex min-w-0 items-center gap-3 rounded-lg border px-4 py-3 transition-colors hover:bg-accent/50">
            <ArrowLeft className="h-4 w-4 text-muted-foreground" />
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Previous {kind.toLowerCase()}</span>
              <span className="block truncate font-medium">{prev.title}</span>
            </span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a href={href.instance(next.slug)} className="flex min-w-0 items-center justify-end gap-3 rounded-lg border px-4 py-3 text-right transition-colors hover:bg-accent/50">
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Next {kind.toLowerCase()}</span>
              <span className="block truncate font-medium">{next.title}</span>
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </a>
        ) : null}
      </nav>
    </Page>
  );
}
