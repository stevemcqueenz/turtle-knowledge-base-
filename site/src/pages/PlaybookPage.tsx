import { ArrowLeft, ArrowRight, Bot } from 'lucide-react';
import type { Playbook, Section as SectionData } from '../types';
import { getClassSummary, playbookNeighbours, specLabel } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { ACTIVITY_LABELS } from '../lib/grades';
import { useClassEntry } from '../data';
import { Markdown } from '../components/Markdown';
import { Loading, Page, PageHeader, Section, Sections } from '../components/layout/Page';
import type { TocItem } from '../components/layout/Toc';
import { ClassMark, useClassInk, useClassVars } from '../components/ui/ClassMark';
import { Grade } from '../components/ui/Grade';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card';
import { BuildCard, ConsumablesCard, PriorityCard, StatsCard } from '../components/playbook/Glance';
import { BotPanel } from '../components/playbook/BotPanel';
import { HowToPlay } from '../components/playbook/HowToPlay';
import { RoleIcon } from '../components/class/RoleIcon';
import { ClassNav } from '../components/class/ClassNav';
import { RatingTooltip } from '../components/class/ViabilityMatrix';
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

const isHowToPlay = (s: SectionData) => /^how to play\b/i.test(s.heading.trim());

export function PlaybookPage({ slug, id }: { slug: string; id: string }) {
  const cls = getClassSummary(slug);
  const entry = useClassEntry(slug);
  const playbook = entry?.playbooks.find((p) => p.id === id);
  useScrollReset(`${slug}/${id}`);
  useSectionScroll(!!playbook);
  const { ink, rgb } = useClassInk(cls?.color ?? '#cccccc');
  const vars = useClassVars(cls?.color ?? '#cccccc');

  if (!cls || entry === null || (entry && !playbook) || !cls.playbooks.some((p) => p.id === id))
    return <NotFound path={`#/class/${slug}/${id}`} />;
  if (!entry || !playbook) return <Loading label={`Loading ${cls.name} guide`} />;

  const y = playbook.yaml;
  const glance = playbook.glance;
  const builds = playbook.builds ?? [];
  const tree = entry.talentTree;
  const row =
    cls.viability?.rows.find((r) => r.playbookId === id) ??
    cls.viability?.rows.find((r) => r.spec.toLowerCase().startsWith(playbook.spec.toLowerCase().split(' ')[0])) ??
    null;
  const all = orderedSections(playbook).filter((s) => !(glance && s.id === 'overview' && s.heading === 'Overview'));
  const howTo = all.find(isHowToPlay) ?? null;
  const sections = all.filter((s) => s !== howTo);
  const { prev, next } = playbookNeighbours(entry, id);
  const hasQuick = !!y && (!!y.stat_priority || !!y.caps || !!y.rotation_single || !!y.consumables);
  const facts = (glance?.facts ?? []).filter((f) => !/^viability/i.test(f.label));
  const pvp = playbook.role === 'pvp';

  const toc: TocItem[] = [
    { id: 'overview', label: 'At a glance' },
    ...(howTo ? [{ id: howTo.id, label: 'How to play' }] : []),
    ...(hasQuick ? [{ id: 'quick-reference', label: 'Priorities and stats' }] : []),
    ...sections.map((s) => ({ id: s.id, label: tocLabel(s.heading) })),
    ...(y ? [{ id: 'for-bots', label: 'For bots' }] : []),
  ];

  return (
    <Page
      style={vars}
      toc={toc}
      header={
        <PageHeader
          crumbs={[
            { label: 'Classes', href: href.home() },
            { label: cls.name, href: href.class(slug) },
            { label: pvp ? `PvP · ${specLabel(playbook.spec)}` : specLabel(playbook.spec) },
          ]}
          icon={<ClassMark name={cls.name} color={cls.color} size="xl" />}
          title={
            <>
              <span style={{ color: ink }}>{specLabel(playbook.spec)}</span> {pvp ? `${cls.name} PvP` : cls.name}
            </>
          }
          meta={
            <>
              <span className="inline-flex items-center gap-1.5">
                <RoleIcon role={playbook.role} className="h-3.5 w-3.5" /> {playbook.roleLabel}
              </span>
              {builds[0] ? <span className="tabular">{builds[0].split}</span> : null}
              <span>Patch 1.18.1</span>
              {row ? (
                <span className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  {row.cells.map((cell) => {
                    const col = ACTIVITY_LABELS[cell.key] ?? cell.key;
                    return (
                      <HoverCard key={cell.key} openDelay={120} closeDelay={60}>
                        <HoverCardTrigger asChild>
                          <a href={href.section(href.class(slug), 'viability')} className="inline-flex items-center gap-1 hover:text-foreground">
                            <Grade cell={cell} column={col} size="sm" />
                            {col}
                          </a>
                        </HoverCardTrigger>
                        <HoverCardContent side="bottom" className="w-80">
                          <RatingTooltip spec={row.spec} column={col} cell={cell} />
                        </HoverCardContent>
                      </HoverCard>
                    );
                  })}
                </span>
              ) : null}
            </>
          }
          nav={<ClassNav cls={cls} current={href.playbook(slug, id)} />}
        >
          {glance?.recommendation ? (
            <Markdown source={glance.recommendation} className="max-w-[74ch] text-[15.5px] leading-relaxed" />
          ) : playbook.intro ? (
            <Markdown source={playbook.intro} className="max-w-[74ch]" />
          ) : null}
        </PageHeader>
      }
    >
      <Sections>
        <Section
          id="overview"
          title="At a glance"
          actions={
            y ? (
              <a
                href="#for-bots"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('for-bots')?.scrollIntoView();
                }}
                className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground hover:text-foreground"
              >
                <Bot className="h-4 w-4" /> For bots
              </a>
            ) : null
          }
        >
          <div className="space-y-4">
            {facts.length ? (
              <dl className="grid gap-x-8 gap-y-3 text-[13.5px] sm:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.label} className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 border-b pb-3">
                    <dt className="text-muted-foreground">{f.label}</dt>
                    <dd>
                      <Markdown inline source={f.markdown} className="leading-relaxed" />
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {builds.length && tree ? <BuildCard builds={builds} tree={tree} rgb={rgb} /> : null}
            {!builds.length && !hasQuick ? (
              <p className="text-sm text-muted-foreground">No structured build or priority list is published for this spec; the full guide follows.</p>
            ) : null}
            {glance?.rest ? <Markdown source={glance.rest} /> : null}
          </div>
        </Section>

        {howTo ? (
          <Section key={howTo.id} id={howTo.id} title="How to play">
            <HowToPlay markdown={howTo.markdown} />
          </Section>
        ) : null}

        {hasQuick && y ? (
          <Section id="quick-reference" title="Priorities and stats">
            <div className="grid gap-4 xl:grid-cols-2">
              <PriorityCard yaml={y} />
              <StatsCard yaml={y} />
            </div>
            <div className="mt-4">
              <ConsumablesCard yaml={y} />
            </div>
          </Section>
        ) : null}

        {sections.map((s) => (
          <Section key={s.id} id={s.id} title={cleanHeading(s.heading)}>
            <Markdown source={s.markdown} />
          </Section>
        ))}

        {y ? (
          <Section id="for-bots" title="For bots">
            <BotPanel playbook={playbook} classSlug={slug} />
          </Section>
        ) : null}
      </Sections>

      <nav aria-label="Other guides for this class" className="mt-12 grid gap-3 border-t pt-6 sm:grid-cols-2">
        {prev ? (
          <a href={href.playbook(slug, prev.id)} className="group flex min-w-0 items-center gap-3 rounded-lg border px-4 py-3 transition-colors hover:bg-accent/50">
            <ArrowLeft className="h-4 w-4 text-muted-foreground" />
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Previous</span>
              <span className="block truncate font-medium">
                {specLabel(prev.spec)} · {prev.roleLabel}
              </span>
            </span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a href={href.playbook(slug, next.id)} className="group flex min-w-0 items-center justify-end gap-3 rounded-lg border px-4 py-3 text-right transition-colors hover:bg-accent/50">
            <span className="min-w-0">
              <span className="block text-xs text-muted-foreground">Next</span>
              <span className="block truncate font-medium">
                {specLabel(next.spec)} · {next.roleLabel}
              </span>
            </span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </a>
        ) : null}
      </nav>
    </Page>
  );
}
