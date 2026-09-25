import type { Playbook, Section as SectionData } from '../types';
import { getClassSummary, playbookNeighbours, specLabel } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { ACTIVITY_LABELS } from '../lib/grades';
import { useClassEntry } from '../data';
import { Markdown } from '../components/Markdown';
import { Loading, PageHero, Section, WithToc } from '../components/layout/Page';
import type { TocItem } from '../components/layout/Toc';
import { useClassInk } from '../components/ui/ClassMark';
import { Grade } from '../components/ui/Grade';
import { BuildCard, ConsumablesCard, PriorityCard, StatsCard } from '../components/playbook/Glance';
import { BotPanel } from '../components/playbook/BotPanel';
import { RoleIcon } from '../components/class/RoleIcon';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, CodeIcon, CompassIcon } from '../components/Icons';
import { cleanHeading } from '../components/guide/util';
import { NotFound } from './NotFound';

const TEMPLATE = [
  'overview',
  'talents',
  'stats',
  'rotationSingle',
  'rotationAoe',
  'cooldowns',
  'roleStrategy',
  'gear',
  'enchants',
  'consumables',
  'mistakes',
  'sources',
] as const;

/** The guide page's sections in its own order (template order for older data). */
function orderedSections(p: Playbook): SectionData[] {
  const slots = p.sections as unknown as Record<string, SectionData | null | undefined>;
  const extras = new Map((p.extraSections ?? []).map((s) => [s.id, s]));
  const keys = p.sectionOrder?.length
    ? p.sectionOrder
    : [...TEMPLATE.filter((k) => slots[k]), ...(p.extraSections ?? []).map((s) => `extra:${s.id}`)];
  const out: SectionData[] = [];
  const seen = new Set<string>();
  for (const k of keys) {
    const s = k.startsWith('extra:') ? extras.get(k.slice(6)) : slots[k];
    if (s && !seen.has(s.id)) {
      seen.add(s.id);
      out.push(s);
    }
  }
  return out;
}

const tocLabel = (h: string) =>
  cleanHeading(h)
    .replace(/\s*\([^)]*\)\s*$/, '')
    .replace(/^What (1\.18\.1 )?changed.*$/i, 'What 1.18.1 changed');

export function PlaybookPage({ slug, id }: { slug: string; id: string }) {
  const cls = getClassSummary(slug);
  const entry = useClassEntry(slug);
  const playbook = entry?.playbooks.find((p) => p.id === id);
  useScrollReset(`${slug}/${id}`);
  useSectionScroll(!!playbook);
  const { ink, rgb } = useClassInk(cls?.color ?? '#cccccc');

  if (!cls || entry === null || (entry && !playbook) || !cls.playbooks.some((p) => p.id === id))
    return <NotFound path={`#/class/${slug}/${id}`} />;
  if (!entry || !playbook) return <Loading label={`Loading the ${cls.name} guide`} />;

  const y = playbook.yaml;
  const glance = playbook.glance;
  const builds = playbook.builds ?? [];
  const tree = entry.talentTree;
  const row =
    cls.viability?.rows.find((r) => r.playbookId === id) ??
    cls.viability?.rows.find((r) => r.spec.toLowerCase().startsWith(playbook.spec.toLowerCase().split(' ')[0])) ??
    null;
  const sections = orderedSections(playbook).filter((s) => !(glance && s.id === 'overview' && s.heading === 'Overview'));
  const { prev, next } = playbookNeighbours(entry, id);
  const cited = new Set(
    [...orderedSections(playbook).map((s) => s.markdown), playbook.intro]
      .join('\n')
      .match(/evidence-[a-z0-9_-]+\.jsonl#L\d+/g) ?? [],
  ).size;
  const hasGlance = builds.length > 0 || !!y?.stat_priority || !!y?.rotation_single || !!y?.consumables;

  const toc: TocItem[] = [
    { id: 'overview', label: 'At a glance' },
    ...sections.map((s) => ({ id: s.id, label: tocLabel(s.heading) })),
    ...(y ? [{ id: 'for-bots', label: 'For bots' }] : []),
  ];

  return (
    <div>
      <PageHero
        rgb={rgb}
        crumbs={[
          { label: 'Classes', href: href.home() },
          { label: cls.name, href: href.class(slug) },
          { label: playbook.role === 'pvp' ? `PvP · ${specLabel(playbook.spec)}` : playbook.spec },
        ]}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12">
          <div className="min-w-0">
            <p className="eyebrow flex items-center gap-2">
              <RoleIcon role={playbook.role} className="h-3.5 w-3.5" /> {playbook.roleLabel} guide · patch 1.18.1
            </p>
            <h1 className="display mt-2 text-[2.1rem] leading-[1.1] sm:text-5xl">
              <span style={{ color: ink }}>{specLabel(playbook.spec)}</span> {playbook.role === 'pvp' ? `${cls.name} in PvP` : cls.name}
            </h1>
            {glance?.recommendation ? (
              <div className="mt-5 max-w-3xl">
                <p className="eyebrow mb-2 text-accent">The short answer</p>
                <Markdown source={glance.recommendation} className="text-[1.03rem] sm:text-[1.08rem]" />
              </div>
            ) : playbook.intro ? (
              <Markdown source={playbook.intro} className="mt-5 max-w-3xl" />
            ) : null}
          </div>
          <aside className="space-y-4">
            {row ? (
              <div className="card p-4">
                <p className="eyebrow mb-3">Rated in 1.18.1</p>
                <ul className="grid grid-cols-5 gap-1.5 lg:grid-cols-1 lg:gap-2">
                  {row.cells.map((cell) => (
                    <li key={cell.key} className="flex flex-col items-center gap-1 lg:flex-row lg:gap-3">
                      <Grade cell={cell} column={ACTIVITY_LABELS[cell.key] ?? cell.key} size="sm" />
                      <span className="text-center text-[10px] uppercase tracking-wide text-muted lg:text-left lg:text-sm lg:normal-case lg:tracking-normal lg:text-ink">
                        {ACTIVITY_LABELS[cell.key] ?? cell.key}
                      </span>
                    </li>
                  ))}
                </ul>
                <a href={href.section(href.class(slug), 'viability')} className="link mt-3 block text-xs font-medium">
                  Compare {cls.name} specs
                </a>
              </div>
            ) : null}
            <p className="text-xs leading-relaxed text-muted">
              {cited ? `Distilled from ${cited} cited Discord messages` : 'Distilled from the archived community'}
              {' '}plus the forum and wiki. Hover a <span className="cite-mark pointer-events-none !top-0" aria-hidden="true" /> to read
              the source.
            </p>
          </aside>
        </div>
      </PageHero>

      <WithToc toc={toc}>
        <div className="space-y-14">
          <Section
            id="overview"
            eyebrow="Fast answers"
            title="At a glance"
            actions={
              y ? (
                <a href="#for-bots" onClick={(e) => { e.preventDefault(); document.getElementById('for-bots')?.scrollIntoView(); }} className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-ink">
                  <CodeIcon className="h-4 w-4" /> Playbook for bots
                </a>
              ) : null
            }
          >
            <div className="space-y-4">
              {glance?.facts?.length ? (
                <dl className="card grid divide-y overflow-hidden text-sm sm:grid-cols-2 sm:divide-y-0">
                  {glance.facts
                    .filter((f) => !/^viability/i.test(f.label))
                    .map((f) => (
                      <div key={f.label} className="border-b p-4 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0 sm:odd:border-r">
                        <dt className="eyebrow mb-1">{f.label}</dt>
                        <dd>
                          <Markdown inline source={f.markdown} className="leading-relaxed" />
                        </dd>
                      </div>
                    ))}
                </dl>
              ) : null}
              {builds.length && tree ? <BuildCard builds={builds} tree={tree} rgb={rgb} /> : null}
              {y ? (
                <div className="grid gap-4 xl:grid-cols-2">
                  <StatsCard yaml={y} />
                  <PriorityCard yaml={y} />
                </div>
              ) : null}
              {y ? <ConsumablesCard yaml={y} /> : null}
              {!hasGlance ? (
                <p className="text-sm text-muted">No structured build or priority list is published for this spec; the full guide follows.</p>
              ) : null}
              {glance?.rest ? <Markdown source={glance.rest} /> : null}
              <div className="flex flex-wrap gap-2 pt-1">
                {entry.leveling ? (
                  <a href={href.leveling(slug)} className="btn btn-ghost">
                    <CompassIcon /> Leveling a {cls.name}
                  </a>
                ) : null}
                <a href={href.class(slug)} className="btn btn-ghost">
                  All {cls.name} specs <ArrowRightIcon />
                </a>
              </div>
            </div>
          </Section>

          <div className="rule text-xs uppercase tracking-[0.2em]" aria-hidden="true">
            The full guide
          </div>

          {sections.map((s) => (
            <Section key={s.id} id={s.id} title={cleanHeading(s.heading)}>
              <Markdown source={s.markdown} />
            </Section>
          ))}

          {y ? (
            <Section id="for-bots" eyebrow="Machine-readable" title="For bots">
              <BotPanel playbook={playbook} classSlug={slug} />
            </Section>
          ) : null}

          <nav aria-label="Other guides for this class" className="grid gap-3 border-t pt-8 sm:grid-cols-2">
            {prev ? (
              <a href={href.playbook(slug, prev.id)} className="card flex min-w-0 items-center gap-3 p-4 hover:border-accent/50">
                <ChevronLeftIcon />
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Previous</span>
                  <span className="block truncate font-serif font-semibold">
                    {specLabel(prev.spec)} · {prev.roleLabel}
                  </span>
                </span>
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a href={href.playbook(slug, next.id)} className="card flex min-w-0 items-center justify-end gap-3 p-4 text-right hover:border-accent/50">
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Next</span>
                  <span className="block truncate font-serif font-semibold">
                    {specLabel(next.spec)} · {next.roleLabel}
                  </span>
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
