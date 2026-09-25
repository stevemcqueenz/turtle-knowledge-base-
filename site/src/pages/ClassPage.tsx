import { ArrowRight, FlaskConical, TrendingUp } from 'lucide-react';
import { distinctSpecLabel, getClassSummary } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { cellFor } from '../lib/grades';
import { useClassEntry } from '../data';
import type { ClassSummary, PlaybookSummary, Section as SectionData } from '../types';
import { Markdown } from '../components/Markdown';
import { Page, PageHeader, Section, Sections } from '../components/layout/Page';
import type { TocItem } from '../components/layout/Toc';
import { ClassMark, useClassInk, useClassVars } from '../components/ui/ClassMark';
import { Grade } from '../components/ui/Grade';
import { ViabilityMatrix } from '../components/class/ViabilityMatrix';
import { RoleIcon } from '../components/class/RoleIcon';
import { ClassNav } from '../components/class/ClassNav';
import { cleanHeading } from '../components/guide/util';
import { GameIcon } from '../components/ui/GameIcon';
import { specIcon } from '../lib/icons';
import { NotFound } from './NotFound';

export function specRow(cls: ClassSummary, p: PlaybookSummary) {
  const rows = cls.viability?.rows ?? [];
  return (
    rows.find((r) => r.playbookId === p.id) ??
    rows.find((r) => r.spec.toLowerCase().startsWith(p.spec.toLowerCase().split(' ')[0])) ??
    null
  );
}

function SpecRow({ cls, p }: { cls: ClassSummary; p: PlaybookSummary }) {
  const row = specRow(cls, p);
  const keys = p.role === 'pvp' ? ['pvp'] : ['raid', 'dungeon'];
  return (
    <li>
      <a
        href={href.playbook(cls.slug, p.id)}
        className="grid grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-accent/50 sm:grid-cols-[2rem_minmax(0,1fr)_auto_auto_1rem]"
      >
        <GameIcon
          icon={specIcon(cls.slug, p.spec)}
          size={32}
          className="rounded-[5px]"
          fallback={<RoleIcon role={p.role} className="mx-auto h-4 w-4 text-muted-foreground" />}
        />
        <span className="min-w-0">
          <span className="block truncate font-medium">{distinctSpecLabel(p, cls.playbooks)}</span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <RoleIcon role={p.role} className="h-3 w-3 shrink-0" />
            {p.roleLabel}
          </span>
        </span>
        <span className="hidden text-xs tabular text-muted-foreground sm:block">{p.recommended ?? ''}</span>
        <span className="flex items-center gap-1.5">
          {row
            ? keys.map((k) => {
                const cell = cellFor(row, k);
                return cell ? (
                  <span key={k} className="flex items-center gap-1 text-[11px] text-muted-foreground">
                    <Grade cell={cell} column={k} size="sm" />
                    <span className="hidden sm:inline">{k === 'pvp' ? 'PvP' : k === 'raid' ? 'Raid' : 'Dungeon'}</span>
                  </span>
                ) : null;
              })
            : null}
        </span>
        <ArrowRight className="hidden h-4 w-4 text-muted-foreground sm:block" aria-hidden="true" />
      </a>
    </li>
  );
}

export function ClassPage({ slug }: { slug: string }) {
  const cls = getClassSummary(slug);
  const entry = useClassEntry(slug);
  useScrollReset(slug);
  useSectionScroll(!!entry);
  const { ink } = useClassInk(cls?.color ?? '#cccccc');
  const vars = useClassVars(cls?.color ?? '#cccccc');
  if (!cls || entry === null) return <NotFound path={`#/class/${slug}`} />;

  const pve = cls.playbooks.filter((p) => p.role !== 'pvp');
  const pvp = cls.playbooks.filter((p) => p.role === 'pvp');
  const viabilityHeading = cls.viability?.heading;
  const sections: SectionData[] = (entry?.readme ?? []).filter(
    (s) => s.heading.trim().toLowerCase() !== 'pages' && s.heading !== viabilityHeading,
  );
  const hasProfessions = cls.guidePages.some((d) => d.slug === 'professions');

  const toc: TocItem[] = [
    ...(cls.viability ? [{ id: 'viability', label: 'Ratings' }] : []),
    { id: 'guides', label: 'Specs and guides' },
    ...sections.map((s) => ({ id: s.id, label: cleanHeading(s.heading).replace(/\s*\(.*\)$/, '') })),
  ];

  return (
    <Page
      style={vars}
      toc={toc}
      header={
        <PageHeader
          crumbs={[{ label: 'Classes', href: href.home() }, { label: cls.name }]}
          icon={<ClassMark name={cls.name} color={cls.color} size="xl" />}
          title={cls.name}
          titleStyle={{ color: ink }}
          meta={
            <>
              <span>{pve.length} specs</span>
              {cls.leveling ? <span>Leveling guide</span> : null}
              {pvp.length ? <span>{pvp.length} PvP {pvp.length === 1 ? 'guide' : 'guides'}</span> : null}
              {hasProfessions ? <span>Professions</span> : null}
              <span>Patch 1.18.1</span>
            </>
          }
          nav={<ClassNav cls={cls} current={href.class(slug)} />}
        >
          {cls.recommendation ? (
            <Markdown source={cls.recommendation} className="max-w-[74ch] text-[15.5px] leading-relaxed" />
          ) : (
            <Markdown source={cls.summary} className="max-w-[74ch] text-[15.5px]" />
          )}
        </PageHeader>
      }
    >
      <Sections>
        {cls.viability ? (
          <Section id="viability" title="Ratings by activity">
            <ViabilityMatrix cls={cls} viability={cls.viability} />
          </Section>
        ) : null}

        <Section id="guides" title="Specs and guides">
          <ul className="divide-y overflow-hidden rounded-lg border">
            {pve.map((p) => (
              <SpecRow key={p.id} cls={cls} p={p} />
            ))}
            {pvp.map((p) => (
              <SpecRow key={p.id} cls={cls} p={p} />
            ))}
          </ul>
          <div className="mt-3 grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2">
            {cls.leveling ? (
              <a href={href.leveling(slug)} className="flex items-center gap-3 bg-card px-4 py-3 transition-colors hover:bg-accent/50">
                <TrendingUp className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">Leveling 1–60</span>
                  <span className="block text-xs text-muted-foreground">Gameplay by level, talent order, respecs</span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </a>
            ) : null}
            {hasProfessions ? (
              <a href={href.classProfessions(slug)} className="flex items-center gap-3 bg-card px-4 py-3 transition-colors hover:bg-accent/50">
                <FlaskConical className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block font-medium">{cls.name} professions</span>
                  <span className="block text-xs text-muted-foreground">What to take for leveling, raiding, PvP and gold</span>
                </span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
              </a>
            ) : null}
          </div>
          <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px]">
            {cls.guidePages
              .filter((d) => d.slug !== 'professions')
              .map((d) => (
                <a key={d.slug} href={href.guidePage(slug, d.slug)} className="link">
                  {d.title}
                </a>
              ))}
            {cls.sources ? (
              <a href={href.sources(slug)} className="link">
                Sources and gaps
              </a>
            ) : null}
            {cls.hasGear ? (
              <a href={href.gear(slug)} className="link">
                Forum-era gear lists
              </a>
            ) : null}
          </p>
        </Section>

        {entry === undefined ? (
          <div className="h-40 animate-pulse rounded-lg bg-muted" aria-hidden="true" />
        ) : (
          sections.map((s) => (
            <Section key={s.id} id={s.id} title={cleanHeading(s.heading)}>
              {/profession/i.test(s.heading) && hasProfessions ? (
                <p className="mb-3 text-sm">
                  <a href={href.classProfessions(slug)} className="link inline-flex items-center gap-1">
                    The full {cls.name} professions page <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </p>
              ) : null}
              <Markdown source={s.markdown} />
            </Section>
          ))
        )}
      </Sections>
    </Page>
  );
}
