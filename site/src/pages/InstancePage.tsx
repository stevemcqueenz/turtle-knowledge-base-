import { useLayoutEffect, useRef, useState } from 'react';
import type { Section as SectionData } from '../types';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { INSTANCE_KIND_LABEL, bossAnchor, getInstanceSummary, instanceNeighbours } from '../lib/instances';
import { useInstancesData } from '../data';
import { Markdown } from '../components/Markdown';
import { Loading, PageHero, Section, WithToc } from '../components/layout/Page';
import type { TocItem } from '../components/layout/Toc';
import { ChevronLeftIcon, ChevronRightIcon, HealIcon, ShieldIcon, SwordIcon } from '../components/Icons';
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

/** Marks each list item and paragraph of the boss cards with the roles it mentions. */
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
  if (!data || !page) return <Loading />;

  const { prev, next } = instanceNeighbours(slug);
  const kind = page.kind ? INSTANCE_KIND_LABEL[page.kind] : 'Instance';

  const roleBar = (
            <div className="sticky top-[6.2rem] z-10 rounded-2xl hairline bg-surface/95 shadow-lg flex flex-wrap items-center gap-2 p-3 text-sm backdrop-blur lg:top-[4.2rem]" role="group" aria-label="Highlight advice for a role">
              <span className="px-1 text-muted">Highlight lines for</span>
              {(
                [
                  ['all', 'Everyone', null],
                  ['tank', 'Tanks', ShieldIcon],
                  ['healer', 'Healers', HealIcon],
                  ['dps', 'DPS', SwordIcon],
                ] as const
              ).map(([r, label, Icon]) => (
                <button
                  key={r}
                  type="button"
                  aria-pressed={role === r}
                  onClick={() => setRole(r)}
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-semibold transition-colors ${
                    role === r ? 'bg-accent text-[rgb(var(--c-accent-ink))]' : 'hairline bg-surface text-muted hover:text-ink'
                  }`}
                >
                  {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
                  {label}
                </button>
              ))}
              <span className="basis-full px-1 text-xs text-muted sm:basis-auto">
                Dims boss notes that do not mention the role. Read everything before the pull.
              </span>
            </div>
  );

  const toc: TocItem[] = page.sections.map((s: SectionData) => ({
    id: s.id,
    label: s.heading.replace(/\s*\([^)]*\)\s*$/, ''),
    children: BOSS_SECTION.test(s.heading)
      ? splitH3(s.markdown)
          .filter((c) => c.heading)
          .map((c) => ({ id: bossAnchor(c.heading!), label: plain(c.heading!).replace(/\s*\([^)]*\)\s*$/, '') }))
      : undefined,
  }));

  return (
    <div>
      <PageHero
        crumbs={[{ label: 'Dungeons & Raids', href: href.instances() }, { label: page.title }]}
      >
        <p className="eyebrow">
          {kind}
          {page.group ? ` · ${page.group}` : ''}
        </p>
        <h1 className="display mt-2 text-[2.1rem] leading-[1.1] sm:text-5xl">{page.title}</h1>
        {page.intro.trim() ? <Markdown source={page.intro} className="mt-5 max-w-4xl" /> : null}
      </PageHero>

      <WithToc toc={toc}>
        <div ref={body} className="space-y-12" data-hl={role}>
          {page.sections.map((s) => {
            const bossy = BOSS_SECTION.test(s.heading) && /^###\s/m.test(s.markdown);
            return (
              <Section key={s.id} id={s.id} title={s.heading}>
                {bossy ? (
                  <div className="space-y-4">
                    {roleBar}
                    {splitH3(s.markdown).map((c, i) =>
                      c.heading ? (
                        <article
                          key={i}
                          id={bossAnchor(c.heading)}
                          className="boss-card card scroll-mt-28 p-4 sm:p-5 lg:scroll-mt-20"
                          aria-labelledby={`${bossAnchor(c.heading)}-h`}
                        >
                          <h3 id={`${bossAnchor(c.heading)}-h`} className="mb-2 font-serif text-xl font-semibold">
                            <Markdown inline source={c.heading} />
                          </h3>
                          <Markdown source={c.markdown} />
                        </article>
                      ) : (
                        <Markdown key={i} source={c.markdown} />
                      ),
                    )}
                  </div>
                ) : (
                  <Markdown source={s.markdown} />
                )}
              </Section>
            );
          })}

          <nav aria-label={`Other ${kind.toLowerCase()}s`} className="grid gap-3 border-t pt-8 sm:grid-cols-2">
            {prev ? (
              <a href={href.instance(prev.slug)} className="card flex min-w-0 items-center gap-3 p-4 hover:border-accent/50">
                <ChevronLeftIcon />
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Previous {kind.toLowerCase()}</span>
                  <span className="block truncate font-serif font-semibold">{prev.title}</span>
                </span>
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a href={href.instance(next.slug)} className="card flex min-w-0 items-center justify-end gap-3 p-4 text-right hover:border-accent/50">
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Next {kind.toLowerCase()}</span>
                  <span className="block truncate font-serif font-semibold">{next.title}</span>
                </span>
                <ChevronRightIcon />
              </a>
            ) : null}
          </nav>
        </div>
      </WithToc>
    </div>
  );
}
