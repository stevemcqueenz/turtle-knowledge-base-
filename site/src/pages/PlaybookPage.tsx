import type { YamlCooldown, YamlLevelingStep, YamlRotationStep, YamlSource, YamlTalentPoint } from '../types';
import { getClass, isPlainObject, playbookNeighbours } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { pickTalentOrder } from '../lib/leveling';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { Callout } from '../components/Callout';
import { Collapsible } from '../components/Collapsible';
import { Markdown } from '../components/Markdown';
import { SectionTabs } from '../components/guide/SectionTabs';
import { GuideHero } from '../components/guide/GuideHero';
import { CardLabel, EmptyLine, GuideSection, ProseDetails } from '../components/guide/GuideSection';
import { BuildLinks, SkipChips, TalentSplit, treeSplits } from '../components/guide/TalentSplit';
import { TalentRows } from '../components/guide/TalentRows';
import { LevelingPath } from '../components/guide/LevelingPath';
import { StatPriority, statRows } from '../components/guide/StatPriority';
import { CapTiles } from '../components/guide/CapTiles';
import { OpenerChain } from '../components/guide/OpenerChain';
import { ResourceRules, RotationList } from '../components/guide/RotationList';
import { AoeCards, aoeGroups } from '../components/guide/AoeCards';
import { CooldownGrid } from '../components/guide/CooldownGrid';
import { DontList } from '../components/guide/DontList';
import { SourcesRow } from '../components/guide/SourcesRow';
import { cleanHeading, describeValue, sourceSummaryLine, splitOpener, summarizeSources } from '../components/guide/util';
import { ChevronLeftIcon, ChevronRightIcon } from '../components/Icons';
import { NotFound } from './NotFound';

function list<T>(value: unknown): T[] {
  return Array.isArray(value) ? (value as T[]) : [];
}

function isOpener(step: YamlRotationStep): boolean {
  return step?.priority === 0 || String(step?.condition ?? '').trim().toLowerCase() === 'opener';
}

export function PlaybookPage({ slug, id }: { slug: string; id: string }) {
  const entry = getClass(slug);
  const playbook = entry?.playbooks.find((p) => p.id === id);
  useScrollReset(`${slug}/${id}`);
  const theme = useThemeValue();

  if (!entry || !playbook) return <NotFound path={`#/class/${slug}/${id}`} />;

  const y = playbook.yaml;
  const sections = playbook.sections;
  const ink = readableColor(entry.color, theme);
  const { prev, next } = playbookNeighbours(entry, playbook.id);

  /* ---- talents ---------------------------------------------------------- */
  const talents = y?.talents ?? null;
  const points = list<YamlTalentPoint>(talents?.points);
  const splits = treeSplits(points);
  const skip = list<unknown>(talents?.skip)
    .map((s) => describeValue(s))
    .filter(Boolean);
  const buildLinks = [
    ...(typeof talents?.build_link === 'string' && talents.build_link ? [talents.build_link] : []),
    ...list<unknown>(talents?.links_opaque).filter((l): l is string => typeof l === 'string' && l.startsWith('http')),
  ];
  const patchNotes = y?.patch_validity?.notes ? String(y.patch_validity.notes) : '';
  const levelingOrder = list<YamlLevelingStep>(talents?.leveling_order);
  // No order of its own: borrow the class leveling guide's, clearly labelled.
  const classOrder = levelingOrder.length === 0 ? pickTalentOrder(entry) : null;

  /* ---- stats ------------------------------------------------------------ */
  const rows = statRows(y?.stat_priority, y?.stat_weights ?? null);
  const onlyOrder = !isPlainObject(y?.stat_weights) && rows.length > 0;
  const capsValue = isPlainObject(y?.caps) ? (y!.caps as Record<string, unknown>) : null;
  const caps = capsValue && Object.keys(capsValue).length > 0 ? capsValue : null;

  /* ---- rotation --------------------------------------------------------- */
  const rotationSingle = list<YamlRotationStep>(y?.rotation_single);
  const opener = rotationSingle.find(isOpener) ?? null;
  const openerSteps = opener ? splitOpener(opener.action) : [];
  const priority = rotationSingle.filter((s) => s !== opener);
  const groups = aoeGroups(list<YamlRotationStep>(y?.rotation_aoe), y?.aoe_threshold);
  const resourceRules = list<unknown>(y?.resource_rules);

  /* ---- the rest --------------------------------------------------------- */
  const cooldowns = list<YamlCooldown>(y?.cooldowns);
  const mistakes = list<unknown>(y?.mistakes_to_avoid);
  const consumables = list<unknown>(y?.consumables)
    .map((c) => describeValue(c))
    .filter(Boolean);
  const sources = list<YamlSource>(y?.sources);
  const sourceLine = sources.length > 0 ? sourceSummaryLine(summarizeSources(sources)) : '';
  const hasGearData =
    (Array.isArray(entry.gear?.specs) && entry.gear!.specs!.length > 0) ||
    (Array.isArray(entry.gearMarkdown) && entry.gearMarkdown.length > 0);

  const tabs = [
    { id: 'talents', label: 'Talents' },
    ...(levelingOrder.length > 0 || classOrder ? [{ id: 'leveling', label: 'Leveling path' }] : []),
    { id: 'stats', label: 'Stats & caps' },
    { id: 'rotation', label: 'Rotation' },
    { id: 'cooldowns', label: 'Cooldowns' },
    { id: 'dont', label: "Don't" },
    { id: 'sources', label: 'Sources' },
  ];

  return (
    <div className="min-w-0">
      <GuideHero entry={entry} playbook={playbook} />
      <SectionTabs items={tabs} ariaLabel="Sections of this guide" note={sourceLine} />

      <div className="mx-auto max-w-6xl space-y-10 px-3 py-7 sm:px-5">
        {/* ---- Talents ---------------------------------------------------- */}
        <GuideSection
          id="talents"
          title="Talents"
          hint={talents?.build_name ? String(talents.build_name) : undefined}
        >
          {points.length > 0 || skip.length > 0 || buildLinks.length > 0 ? (
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,2fr)]">
              <div className="card flex flex-col gap-5 p-4 sm:p-5">
                <TalentSplit splits={splits} color={ink} />
                <SkipChips skip={skip} />
                <BuildLinks links={buildLinks} color={ink} />
                {patchNotes ? (
                  <div className="mt-auto">
                    <Callout tone="warning" title="1.18.1">
                      {patchNotes}
                    </Callout>
                  </div>
                ) : null}
              </div>
              <div className="card space-y-3 p-4 sm:p-5">
                <CardLabel>What each point buys</CardLabel>
                {points.length > 0 ? (
                  <TalentRows points={points} color={ink} />
                ) : (
                  <p className="text-sm text-muted">No point-by-point build is published for this spec.</p>
                )}
              </div>
            </div>
          ) : (
            <EmptyLine>No talent build is published for this spec.</EmptyLine>
          )}
          <ProseDetails title="Full talent notes" sections={[sections?.talents]} />
        </GuideSection>

        {/* ---- Leveling path ---------------------------------------------- */}
        {levelingOrder.length > 0 ? (
          <GuideSection id="leveling" title="Leveling path" hint="The sourced order the points go in">
            <LevelingPath steps={levelingOrder} color={ink} />
          </GuideSection>
        ) : classOrder ? (
          <GuideSection id="leveling" title="Leveling path" hint={`From the ${entry.name} leveling guide`}>
            <div className="space-y-2">
              <h3 className="text-base font-bold">{cleanHeading(classOrder.title)}</h3>
              {classOrder.subtitle ? (
                <Markdown inline source={classOrder.subtitle} className="block text-sm text-muted" />
              ) : null}
              <LevelingPath
                steps={classOrder.steps.map((step) => ({ ...step, note: null }))}
                color={ink}
                approximate={classOrder.approximate}
              />
              <p className="text-sm text-muted">
                No level-by-level order is published for {playbook.spec} {playbook.roleLabel} itself; this is how{' '}
                {entry.name}s level according to the class guide.{' '}
                <a href={href.leveling(entry.slug)} className="text-[rgb(var(--c-accent))] hover:underline">
                  Read the {entry.name} leveling guide →
                </a>
              </p>
            </div>
          </GuideSection>
        ) : (
          <p className="card p-4 text-sm text-muted">
            No level-by-level talent order is published for this spec.{' '}
            {entry.leveling ? (
              <a href={href.leveling(entry.slug)} className="text-[rgb(var(--c-accent))] hover:underline">
                Read the {entry.name} leveling guide →
              </a>
            ) : null}
          </p>
        )}

        {/* ---- Stats & caps ------------------------------------------------ */}
        <GuideSection id="stats" title="Stats & caps">
          <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.05fr)]">
            {rows.length > 0 ? (
              <StatPriority
                rows={rows}
                color={ink}
                footnote={
                  onlyOrder
                    ? "No numeric stat weights are published; the order is the players' consensus."
                    : undefined
                }
              />
            ) : (
              <EmptyLine>No stat priority is published for this spec.</EmptyLine>
            )}
            {caps ? <CapTiles caps={caps} color={ink} /> : <EmptyLine>No hard caps are published for this spec.</EmptyLine>}
          </div>
          <ProseDetails title="Full stat notes" sections={[sections?.stats]} />
        </GuideSection>

        {/* ---- Rotation ---------------------------------------------------- */}
        <GuideSection id="rotation" title="Rotation">
          {openerSteps.length > 0 ? (
            <OpenerChain
              steps={openerSteps}
              color={ink}
              condition={opener && String(opener.condition ?? '').toLowerCase() !== 'opener' ? describeValue(opener.condition) : undefined}
            />
          ) : null}

          {priority.length > 0 || groups.length > 0 ? (
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
              {priority.length > 0 ? (
                <RotationList steps={priority} color={ink} />
              ) : (
                <EmptyLine>No single-target priority is published for this spec.</EmptyLine>
              )}
              <div className="space-y-3">
                {groups.length > 0 ? (
                  <AoeCards groups={groups} color={ink} />
                ) : (
                  <EmptyLine>No multi-target rotation is published for this spec.</EmptyLine>
                )}
                {resourceRules.length > 0 ? <ResourceRules rules={resourceRules} /> : null}
              </div>
            </div>
          ) : (
            <EmptyLine>No rotation is published for this spec.</EmptyLine>
          )}
          <ProseDetails title="Full rotation notes" sections={[sections?.rotationSingle, sections?.rotationAoe]} />
        </GuideSection>

        {/* ---- Cooldowns ---------------------------------------------------- */}
        <GuideSection id="cooldowns" title="Cooldowns">
          {cooldowns.length > 0 ? (
            <CooldownGrid cooldowns={cooldowns} />
          ) : (
            <EmptyLine>No cooldown list is published for this spec.</EmptyLine>
          )}
          <ProseDetails title="Cooldowns and role strategy in full" sections={[sections?.cooldowns, sections?.roleStrategy]} />
        </GuideSection>

        {/* ---- Don't -------------------------------------------------------- */}
        <GuideSection id="dont" title="Don't">
          {mistakes.length > 0 ? (
            <DontList mistakes={mistakes} />
          ) : (
            <EmptyLine>No common mistakes are called out in the sources.</EmptyLine>
          )}
          <ProseDetails title="Full notes on mistakes" sections={[sections?.mistakes]} />
        </GuideSection>

        {/* ---- Gear --------------------------------------------------------- */}
        <GuideSection id="gear" title="Gear">
          <div className="card space-y-3 p-4 sm:p-5">
            <p className="text-sm">
              {hasGearData ? (
                <a
                  href={href.gear(entry.slug, `${playbook.spec}|${playbook.role}`)}
                  className="font-semibold text-[rgb(var(--c-accent))] hover:underline"
                >
                  Slot-by-slot gear for {playbook.spec} {playbook.roleLabel} →
                </a>
              ) : (
                <span className="text-muted">No slot-by-slot gear list is published for this spec.</span>
              )}
            </p>
            {consumables.length > 0 ? (
              <div className="space-y-2">
                <CardLabel>Consumables</CardLabel>
                <ul className="flex flex-wrap gap-1.5">
                  {consumables.map((c, i) => (
                    <li key={i} className="chip hairline bg-surface2 text-xs text-muted">
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <ProseDetails title="Full gear notes" sections={[sections?.gear]} />
        </GuideSection>

        {/* ---- Sources ------------------------------------------------------ */}
        <GuideSection id="sources" title="Sources">
          <SourcesRow sources={sources}>
            {sections?.sources ? <Markdown source={sections.sources.markdown} /> : null}
          </SourcesRow>
          {sections?.overview ? <ProseDetails title="Overview in full" sections={[sections.overview]} /> : null}
          {(playbook.extraSections ?? []).map((extra) => (
            <Collapsible key={extra.id} title={cleanHeading(extra.heading)}>
              <Markdown source={extra.markdown} />
            </Collapsible>
          ))}
        </GuideSection>

        <nav aria-label="Other playbooks" className="grid gap-3 sm:grid-cols-2">
          {prev ? (
            <a
              href={href.playbook(entry.slug, prev.id)}
              className="card flex min-w-0 items-center gap-2 p-4 text-sm hover:border-[color:rgb(var(--c-accent)/0.5)]"
            >
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
              className="card flex min-w-0 items-center justify-end gap-2 p-4 text-right text-sm hover:border-[color:rgb(var(--c-accent)/0.5)]"
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
  );
}
