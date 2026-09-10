import type { ReactNode } from 'react';
import type { Playbook, Section } from '../types';
import {
  agreementMeta,
  getClass,
  isEmptyValue,
  patchValidityMeta,
  playbookNeighbours,
  standingMeta,
} from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { Callout } from '../components/Callout';
import { CitationChip } from '../components/CitationChip';
import { CooldownList } from '../components/CooldownList';
import { Markdown } from '../components/Markdown';
import { MistakeList } from '../components/MistakeList';
import { GroupedPriorityList, PriorityList } from '../components/PriorityList';
import { SectionNav, type NavItem } from '../components/SectionNav';
import { StatBars } from '../components/StatBars';
import { TalentPoints } from '../components/TalentPoints';
import { YamlValue } from '../components/YamlValue';
import { ChevronLeftIcon, ChevronRightIcon } from '../components/Icons';
import { NotFound } from './NotFound';

interface Block {
  id: string;
  label: string;
  heading: string;
  widget: ReactNode;
  section: Section | null;
}

const TEMPLATE: { key: keyof Playbook['sections']; id: string; label: string; fallbackHeading: string }[] = [
  { key: 'overview', id: 'overview', label: 'Overview', fallbackHeading: 'Overview' },
  { key: 'talents', id: 'talents', label: 'Talents', fallbackHeading: 'Talent build' },
  { key: 'stats', id: 'stats', label: 'Stats', fallbackHeading: 'Stat priority' },
  { key: 'rotationSingle', id: 'single-target', label: 'Single-target', fallbackHeading: 'Single-target rotation' },
  { key: 'rotationAoe', id: 'aoe', label: 'AoE', fallbackHeading: 'Multi-target / AoE' },
  { key: 'cooldowns', id: 'cooldowns', label: 'Cooldowns', fallbackHeading: 'Cooldowns and resources' },
  { key: 'roleStrategy', id: 'role-strategy', label: 'Role strategy', fallbackHeading: 'Role strategy' },
  { key: 'gear', id: 'gear', label: 'Gear', fallbackHeading: 'Gear, enchants and consumables' },
  { key: 'mistakes', id: 'mistakes', label: 'Mistakes', fallbackHeading: 'Common mistakes' },
  { key: 'sources', id: 'sources', label: 'Sources', fallbackHeading: 'Sources' },
];

function ListChips({ values }: { values: unknown[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {values.map((v, i) => (
        <li key={i} className="chip hairline bg-surface2 text-xs text-muted">
          {String(v)}
        </li>
      ))}
    </ul>
  );
}

function WidgetBox({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-4 rounded-xl bg-surface2/60 hairline p-3">
      <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{title}</div>
      {children}
    </div>
  );
}

export function PlaybookPage({ slug, id }: { slug: string; id: string }) {
  const entry = getClass(slug);
  const playbook = entry?.playbooks.find((p) => p.id === id);
  useScrollReset(`${slug}/${id}`);
  const theme = useThemeValue();

  if (!entry || !playbook) return <NotFound path={`#/class/${slug}/${id}`} />;

  const y = playbook.yaml;
  const ink = readableColor(entry.color, theme);
  const standing = standingMeta(playbook.standing?.standing);
  const agreement = agreementMeta(y?.agreement ?? playbook.standing?.agreement ?? null);
  const validity = patchValidityMeta(y);
  const { prev, next } = playbookNeighbours(entry, playbook.id);
  const hasGearData =
    (Array.isArray(entry.gear?.specs) && entry.gear!.specs!.length > 0) ||
    (Array.isArray(entry.gearMarkdown) && entry.gearMarkdown.length > 0);

  const widgets: Partial<Record<string, ReactNode>> = {
    overview:
      y?.patch_validity && (y.patch_validity.written_for || y.patch_validity.notes) ? (
        <WidgetBox title="Patch validity">
          <YamlValue value={y.patch_validity} />
        </WidgetBox>
      ) : null,
    talents: y?.talents && !isEmptyValue(y.talents) ? <WidgetBox title="Sourced build"><TalentPoints talents={y.talents} /></WidgetBox> : null,
    stats:
      !isEmptyValue(y?.stat_weights) || !isEmptyValue(y?.stat_priority) || !isEmptyValue(y?.caps) ? (
        <>
          {!isEmptyValue(y?.stat_weights) || !isEmptyValue(y?.stat_priority) ? (
            <WidgetBox title="Stat weights">
              <StatBars weights={y?.stat_weights ?? null} priority={y?.stat_priority} />
            </WidgetBox>
          ) : null}
          {!isEmptyValue(y?.caps) ? (
            <WidgetBox title="Caps">
              <YamlValue value={y?.caps} />
            </WidgetBox>
          ) : null}
        </>
      ) : null,
    'single-target': !isEmptyValue(y?.rotation_single) ? (
      <WidgetBox title="Priority">
        <PriorityList steps={y!.rotation_single!} />
      </WidgetBox>
    ) : null,
    aoe:
      !isEmptyValue(y?.rotation_aoe) || !isEmptyValue(y?.aoe_threshold) ? (
        <>
          {!isEmptyValue(y?.aoe_threshold) ? (
            <Callout tone="info" title={`AoE from ${y!.aoe_threshold} targets`} className="mb-3">
              Below this target count the single-target priority is the better choice.
            </Callout>
          ) : null}
          {!isEmptyValue(y?.rotation_aoe) ? (
            <WidgetBox title="Priority by target count">
              <GroupedPriorityList steps={y!.rotation_aoe!} />
            </WidgetBox>
          ) : null}
        </>
      ) : null,
    cooldowns:
      !isEmptyValue(y?.cooldowns) || !isEmptyValue(y?.resource_rules) ? (
        <>
          {!isEmptyValue(y?.cooldowns) ? (
            <WidgetBox title="Cooldowns">
              <CooldownList cooldowns={y!.cooldowns!} />
            </WidgetBox>
          ) : null}
          {!isEmptyValue(y?.resource_rules) ? (
            <WidgetBox title="Resource rules">
              <YamlValue value={y?.resource_rules} />
            </WidgetBox>
          ) : null}
        </>
      ) : null,
    gear:
      !isEmptyValue(y?.consumables) || hasGearData ? (
        <>
          {hasGearData ? (
            <p className="mb-3 text-sm">
              <a
                href={href.gear(entry.slug, `${playbook.spec}|${playbook.role}`)}
                className="text-[rgb(var(--c-accent))] hover:underline"
              >
                Slot-by-slot gear for {playbook.spec} {playbook.roleLabel} →
              </a>
            </p>
          ) : null}
          {!isEmptyValue(y?.consumables) ? (
            <WidgetBox title="Consumables">
              <ListChips values={y!.consumables as unknown[]} />
            </WidgetBox>
          ) : null}
        </>
      ) : null,
    mistakes: !isEmptyValue(y?.mistakes_to_avoid) ? (
      <WidgetBox title="Avoid">
        <MistakeList mistakes={y!.mistakes_to_avoid as unknown[]} />
      </WidgetBox>
    ) : null,
    sources: !isEmptyValue(y?.sources) ? (
      <WidgetBox title={`Cited posts (${(y!.sources as unknown[]).length})`}>
        <ul className="flex flex-wrap gap-1.5">
          {(y!.sources ?? []).map((s, i) => (
            <li key={i} className="min-w-0 max-w-full">
              <CitationChip source={s} />
            </li>
          ))}
        </ul>
      </WidgetBox>
    ) : null,
  };

  const blocks: Block[] = [];
  for (const t of TEMPLATE) {
    const section = playbook.sections?.[t.key] ?? null;
    const widget = widgets[t.id] ?? null;
    if (!section && !widget) continue;
    blocks.push({ id: t.id, label: t.label, heading: section?.heading ?? t.fallbackHeading, widget, section });
  }
  for (const extra of playbook.extraSections ?? []) {
    blocks.push({ id: `extra-${extra.id}`, label: extra.heading, heading: extra.heading, widget: null, section: extra });
  }

  const navItems: NavItem[] = blocks.map((b) => ({ id: b.id, label: b.label }));

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-5">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted">
        <a href={href.home()} className="hover:underline">
          Classes
        </a>
        <span className="mx-1.5" aria-hidden="true">
          /
        </span>
        <a href={href.class(entry.slug)} className="hover:underline" style={{ color: ink }}>
          {entry.name}
        </a>
        <span className="mx-1.5" aria-hidden="true">
          /
        </span>
        <span className="text-ink">
          {playbook.spec} {playbook.roleLabel}
        </span>
      </nav>

      <header className="mb-5 overflow-hidden rounded-xl bg-surface hairline">
        <div className="h-1.5 w-full" style={{ backgroundColor: entry.color }} aria-hidden="true" />
        <div className="p-4 sm:p-5">
          <h1 className="text-xl font-semibold sm:text-2xl">{playbook.title}</h1>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Badge label={playbook.roleLabel} color={entry.color} />
            {standing ? <Badge label={standing.label} color={standing.color} title={standing.title} /> : null}
            {agreement ? <Badge label={agreement.label} color={agreement.color} title={agreement.title} /> : null}
            {validity ? <Badge label={validity.label} color={validity.color} title={validity.title} /> : null}
          </div>
          {playbook.intro ? <Markdown source={playbook.intro} className="mt-3 text-muted" /> : null}
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[13rem_minmax(0,1fr)]">
        <div className="min-w-0 lg:pt-1">
          <SectionNav items={navItems} ariaLabel="Sections of this playbook" />
        </div>

        <div className="min-w-0 space-y-4">
          {blocks.map((b) => (
            <Card key={b.id} id={b.id} as="section" className="scroll-mt-24">
              <h2 className="mb-3 text-lg font-semibold">{b.heading}</h2>
              {b.widget}
              {b.section ? <Markdown source={b.section.markdown} /> : null}
            </Card>
          ))}

          <nav aria-label="Other playbooks" className="grid gap-3 sm:grid-cols-2">
            {prev ? (
              <a href={href.playbook(entry.slug, prev.id)} className="card flex min-w-0 items-center gap-2 text-sm hover:border-[color:rgb(var(--c-accent)/0.5)]">
                <ChevronLeftIcon />
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Previous</span>
                  <span className="block truncate font-medium">
                    {prev.spec} {prev.roleLabel}
                  </span>
                </span>
              </a>
            ) : (
              <span />
            )}
            {next ? (
              <a
                href={href.playbook(entry.slug, next.id)}
                className="card flex min-w-0 items-center justify-end gap-2 text-right text-sm hover:border-[color:rgb(var(--c-accent)/0.5)]"
              >
                <span className="min-w-0">
                  <span className="block text-xs text-muted">Next</span>
                  <span className="block truncate font-medium">
                    {next.spec} {next.roleLabel}
                  </span>
                </span>
                <ChevronRightIcon />
              </a>
            ) : null}
          </nav>
        </div>
      </div>
    </div>
  );
}
