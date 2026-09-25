import { getClassSummary } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { cellFor } from '../lib/grades';
import { useClassEntry } from '../data';
import type { ClassSummary, PlaybookSummary, Section as SectionData } from '../types';
import { Markdown } from '../components/Markdown';
import { PageHero, Section, WithToc } from '../components/layout/Page';
import type { TocItem } from '../components/layout/Toc';
import { ClassMark, useClassInk } from '../components/ui/ClassMark';
import { Grade } from '../components/ui/Grade';
import { ViabilityMatrix } from '../components/class/ViabilityMatrix';
import { RoleIcon } from '../components/class/RoleIcon';
import { ArrowRightIcon, CompassIcon } from '../components/Icons';
import { cleanHeading } from '../components/guide/util';
import { NotFound } from './NotFound';
import { specLabel } from '../lib/site';

function specRow(cls: ClassSummary, p: PlaybookSummary) {
  const rows = cls.viability?.rows ?? [];
  return (
    rows.find((r) => r.playbookId === p.id) ??
    rows.find((r) => r.spec.toLowerCase().startsWith(p.spec.toLowerCase().split(' ')[0])) ??
    null
  );
}

function SpecCard({ cls, p }: { cls: ClassSummary; p: PlaybookSummary }) {
  const row = specRow(cls, p);
  const keys = p.role === 'pvp' ? ['pvp'] : ['raid', 'dungeon'];
  return (
    <a href={href.playbook(cls.slug, p.id)} className="card group flex min-w-0 flex-col gap-3 p-4 transition-colors hover:border-accent/50">
      <span className="flex items-start gap-3">
        <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-surface2 text-muted">
          <RoleIcon role={p.role} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block font-serif text-[1.1rem] font-semibold leading-snug group-hover:text-accent">{specLabel(p.spec)}</span>
          <span className="block text-xs text-muted">
            {p.roleLabel}
            {p.recommended ? ` · ${p.recommended}` : ''}
          </span>
        </span>
        <ArrowRightIcon className="mt-1.5 h-4 w-4 shrink-0 text-muted" />
      </span>
      {row ? (
        <span className="flex flex-wrap gap-3 border-t pt-3">
          {keys.map((k) => {
            const cell = cellFor(row, k);
            return cell ? (
              <span key={k} className="flex items-center gap-1.5 text-xs text-muted">
                <Grade cell={cell} column={k} size="sm" />
                {k === 'pvp' ? 'PvP' : k[0].toUpperCase() + k.slice(1)}
              </span>
            ) : null;
          })}
        </span>
      ) : null}
    </a>
  );
}

export function ClassPage({ slug }: { slug: string }) {
  const cls = getClassSummary(slug);
  const entry = useClassEntry(slug);
  useScrollReset(slug);
  useSectionScroll(!!entry);
  const { ink, rgb } = useClassInk(cls?.color ?? '#cccccc');
  if (!cls || entry === null) return <NotFound path={`#/class/${slug}`} />;

  const pve = cls.playbooks.filter((p) => p.role !== 'pvp');
  const pvp = cls.playbooks.filter((p) => p.role === 'pvp');
  const skip = new Set(['pages']);
  const viabilityHeading = cls.viability?.heading;
  const sections: SectionData[] = (entry?.readme ?? []).filter(
    (s) => !skip.has(s.heading.trim().toLowerCase()) && s.heading !== viabilityHeading,
  );
  const patchId = sections.find((s) => /1\.18\.1/.test(s.heading) && /chang/i.test(s.heading))?.id;

  const toc: TocItem[] = [
    ...(cls.viability ? [{ id: 'viability', label: 'Viability' }] : []),
    { id: 'guides', label: 'Spec guides' },
    ...sections.map((s) => ({ id: s.id, label: cleanHeading(s.heading).replace(/\s*\(.*\)$/, '') })),
  ];

  return (
    <div>
      <PageHero rgb={rgb} crumbs={[{ label: 'Classes', href: href.home() }, { label: cls.name }]}>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-12">
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-4">
              <ClassMark name={cls.name} color={cls.color} size="xl" />
              <div>
                <p className="eyebrow">Class guide · patch 1.18.1</p>
                <h1 className="display text-4xl sm:text-5xl" style={{ color: ink }}>
                  {cls.name}
                </h1>
              </div>
            </div>
            {cls.recommendation ? (
              <div className="mt-6 max-w-3xl">
                <p className="eyebrow mb-2 text-accent">The short answer</p>
                <Markdown source={cls.recommendation} className="text-[1.05rem] sm:text-[1.1rem]" />
              </div>
            ) : (
              <Markdown source={cls.summary} className="mt-6 max-w-3xl text-[1.05rem]" />
            )}
          </div>
          <nav aria-label={`${cls.name} guides`} className="w-full shrink-0 lg:w-72">
            <p className="eyebrow mb-2">Go to</p>
            <ul className="card divide-y overflow-hidden text-sm">
              {pve.map((p) => (
                <li key={p.id}>
                  <a href={href.playbook(slug, p.id)} className="flex items-center gap-2.5 px-3.5 py-2.5 hover:bg-surface2/70">
                    <RoleIcon role={p.role} className="h-4 w-4 text-muted" />
                    <span className="flex-1 font-medium">{specLabel(p.spec)}</span>
                    <span className="text-xs text-muted">{p.roleLabel}</span>
                  </a>
                </li>
              ))}
              {cls.leveling ? (
                <li>
                  <a href={href.leveling(slug)} className="flex items-center gap-2.5 px-3.5 py-2.5 hover:bg-surface2/70">
                    <CompassIcon className="h-4 w-4 text-muted" />
                    <span className="flex-1 font-medium">Leveling 10–60</span>
                  </a>
                </li>
              ) : null}
              {pvp.length ? (
                <li>
                  <a href={href.playbook(slug, pvp[0].id)} className="flex items-center gap-2.5 px-3.5 py-2.5 hover:bg-surface2/70">
                    <RoleIcon role="pvp" className="h-4 w-4 text-muted" />
                    <span className="flex-1 font-medium">PvP</span>
                    <span className="text-xs text-muted">
                      {pvp.length} {pvp.length === 1 ? 'guide' : 'guides'}
                    </span>
                  </a>
                </li>
              ) : null}
            </ul>
          </nav>
        </div>
      </PageHero>

      <WithToc toc={toc}>
        <div className="space-y-14">
          {cls.viability ? (
            <Section
              id="viability"
              eyebrow="As the community rated it in 1.18.1"
              title="Which spec for what"
            >
              <ViabilityMatrix cls={cls} viability={cls.viability} />
            </Section>
          ) : null}

          <Section id="guides" eyebrow="Full guides" title="Spec guides">
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {pve.map((p) => (
                <SpecCard key={p.id} cls={cls} p={p} />
              ))}
            </div>
            {pvp.length ? (
              <>
                <p className="eyebrow mb-2 mt-6">PvP builds</p>
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {pvp.map((p) => (
                    <SpecCard key={p.id} cls={cls} p={p} />
                  ))}
                </div>
              </>
            ) : null}
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              {cls.leveling ? (
                <a href={href.leveling(slug)} className="btn btn-ghost">
                  <CompassIcon /> Leveling 10–60
                </a>
              ) : null}
              {cls.guidePages.map((d) => (
                <a key={d.slug} href={href.guidePage(slug, d.slug)} className="btn btn-ghost">
                  {d.title}
                </a>
              ))}
              {cls.sources ? (
                <a href={href.sources(slug)} className="btn btn-ghost">
                  Sources and gaps
                </a>
              ) : null}
              {cls.hasGear ? (
                <a href={href.gear(slug)} className="btn btn-ghost">
                  Gear lists (research archive)
                </a>
              ) : null}
            </div>
          </Section>

          {entry === undefined ? (
            <div className="h-40 animate-pulse rounded-2xl bg-surface2/60" role="status" aria-label="Loading" />
          ) : (
            sections.map((s) => (
              <Section
                key={s.id}
                id={s.id}
                eyebrow={s.id === patchId ? 'The final patch' : undefined}
                title={cleanHeading(s.heading)}
              >
                {s.id === patchId ? (
                  <div className="card p-5 sm:p-6">
                    <Markdown source={s.markdown} />
                  </div>
                ) : (
                  <Markdown source={s.markdown} />
                )}
              </Section>
            ))
          )}
        </div>
      </WithToc>
    </div>
  );
}
