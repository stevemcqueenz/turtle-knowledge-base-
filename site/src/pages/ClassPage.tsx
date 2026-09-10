import { useMemo, useState } from 'react';
import type { ClassEntry, MatrixRow } from '../types';
import { getClass, roleLabel } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { Markdown } from '../components/Markdown';
import { SpecCard } from '../components/SpecCard';
import { Collapsible } from '../components/Collapsible';
import { ChevronRightIcon } from '../components/Icons';
import { RoleIcon } from '../components/class/RoleIcon';
import { RoleTabs, type RoleTabItem } from '../components/class/RoleTabs';
import { PatchChangesCard } from '../components/class/PatchChangesCard';
import { SourceQualityCard } from '../components/class/SourceQualityCard';
import { classOneLiner, playbookForRow, standingRank, viableRoles, viableRows } from '../components/class/data';
import { NotFound } from './NotFound';

function hasGear(entry: ClassEntry): boolean {
  const specs = entry.gear?.specs;
  return (Array.isArray(specs) && specs.length > 0) || (Array.isArray(entry.gearMarkdown) && entry.gearMarkdown.length > 0);
}

/** Column count for the role grid: keep the wrapped rows as even as possible. */
function roleColumns(count: number): string {
  if (count <= 2) return '';
  if (count === 4) return 'lg:grid-cols-4';
  return 'lg:grid-cols-3';
}

/** Readme sections that are about the source files, not about playing the class. */
const INTERNAL_SECTION = /files|bot\b|orchestrator|conventions|open questions|1\.18\.1/i;

export function ClassPage({ slug }: { slug: string }) {
  const entry = getClass(slug);
  useScrollReset(slug);
  const theme = useThemeValue();

  const roles = useMemo(() => (entry ? viableRoles(entry) : []), [entry]);
  const tabs = useMemo<RoleTabItem[]>(() => {
    if (!entry) return [];
    const items: RoleTabItem[] = roles
      .filter((r) => r !== 'leveling')
      .map((r) => ({ id: r, label: roleLabel(r), target: `role-${r}` }));
    if (roles.includes('leveling') || entry.leveling) {
      items.push({
        id: 'leveling',
        label: 'Leveling',
        target: roles.includes('leveling') ? 'role-leveling' : 'leveling',
      });
    }
    if (hasGear(entry)) items.push({ id: 'gear', label: 'Gear', target: 'gear' });
    return items;
  }, [entry, roles]);

  const [activeTab, setActiveTab] = useState<string>('');

  if (!entry) return <NotFound path={`#/class/${slug}`} />;

  const ink = readableColor(entry.color, theme);
  const current = activeTab || tabs[0]?.id || '';

  const select = (item: RoleTabItem) => {
    setActiveTab(item.id);
    document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const cardFor = (row: MatrixRow, i: number) => {
    if (row.role === 'leveling') {
      return (
        <SpecCard
          key={`${row.spec}-${i}`}
          row={row}
          target={entry.leveling ? href.leveling(entry.slug) : null}
          targetLabel="Open the leveling guide"
        />
      );
    }
    const playbook = playbookForRow(entry, row);
    return (
      <SpecCard
        key={`${row.spec}-${i}`}
        row={row}
        playbook={playbook}
        target={playbook ? href.playbook(entry.slug, playbook.id) : null}
      />
    );
  };

  const gaps = entry.gaps;
  const otherSections = entry.readme.filter((s) => !INTERNAL_SECTION.test(s.heading) && !/gap/i.test(s.heading));
  const hasMore = !!gaps || otherSections.length > 0;

  return (
    <>
      <div
        className="border-b"
        style={{ backgroundImage: `linear-gradient(180deg, ${ink}26 0%, ${ink}00 100%)` }}
      >
        <div className="mx-auto max-w-6xl px-3 pb-6 pt-3 sm:px-5 sm:pb-7 sm:pt-4">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted">
            <a href={href.home()} className="hover:underline">
              Classes
            </a>
            <span className="mx-1.5" aria-hidden="true">
              /
            </span>
            <span className="text-ink">{entry.name}</span>
          </nav>

          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              <div
                className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-[28px] font-extrabold sm:h-20 sm:w-20 sm:text-4xl"
                style={{ backgroundColor: `${ink}29`, border: `1px solid ${ink}80`, color: ink }}
                aria-hidden="true"
              >
                {entry.name.charAt(0)}
              </div>
              <div className="flex min-w-0 flex-col gap-1.5">
                <h1 className="text-3xl font-extrabold leading-none tracking-tight sm:text-[40px]">{entry.name}</h1>
                <p className="text-[15px] leading-relaxed text-muted">{classOneLiner(entry)}</p>
                <p className="text-[13px] text-muted">
                  {entry.playbooks.length > 0
                    ? `${entry.playbooks.length} spec guide${entry.playbooks.length === 1 ? '' : 's'}`
                    : 'No spec guide is published for this class yet'}
                </p>
              </div>
            </div>
            {tabs.length > 0 ? (
              <RoleTabs items={tabs} active={current} onSelect={select} accent={entry.color} ariaLabel="Sections" />
            ) : null}
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-3 py-8 sm:px-5">
        <section aria-labelledby="pick-a-role">
          <div className="mb-4 flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
            <h2 id="pick-a-role" className="text-xl font-extrabold sm:text-[22px]">
              Pick a role
            </h2>
            <p className="text-[13px] text-muted">
              Green is what the community runs; blue works with caveats; amber is a niche the sources do describe.
            </p>
          </div>

          {roles.length === 0 ? (
            <p className="text-sm text-muted">No spec of this class is rated playable by the sources yet.</p>
          ) : (
            <div className={`grid gap-4 sm:grid-cols-2 ${roleColumns(roles.length)}`}>
              {roles.map((role) => {
                const rows = [...viableRows(entry, role)].sort(
                  (a, b) => standingRank(a.standing) - standingRank(b.standing),
                );
                return (
                  <div key={role} id={`role-${role}`} className="flex scroll-mt-24 flex-col gap-2.5">
                    <h3
                      className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.08em]"
                      style={{ color: current === role ? ink : 'rgb(var(--c-muted))' }}
                    >
                      <RoleIcon role={role} />
                      {roleLabel(role)}
                    </h3>
                    {rows.map(cardFor)}
                  </div>
                );
              })}
            </div>
          )}
        </section>

        <div className="grid items-start gap-4 lg:grid-cols-[1.4fr_1fr]">
          <PatchChangesCard entry={entry} />
          <SourceQualityCard entry={entry} />
        </div>

        {entry.leveling || hasGear(entry) ? (
          <div className="grid items-start gap-4 sm:grid-cols-2">
            {entry.leveling ? (
              <section id="leveling" className="card flex scroll-mt-24 flex-col gap-3 p-5">
                <h2 className="text-base font-bold">Leveling 1–60</h2>
                <ul className="flex flex-wrap gap-1.5">
                  {entry.leveling.sections.slice(0, 8).map((s) => (
                    <li key={s.id} className="chip hairline bg-surface2 text-xs text-muted">
                      {s.heading}
                    </li>
                  ))}
                </ul>
                <a
                  href={href.leveling(entry.slug)}
                  className="mt-auto inline-flex items-center gap-1 self-start text-sm font-semibold text-[rgb(var(--c-accent))] hover:underline"
                >
                  Open the leveling guide <ChevronRightIcon />
                </a>
              </section>
            ) : null}
            {hasGear(entry) ? (
              <section id="gear" className="card flex scroll-mt-24 flex-col gap-3 p-5">
                <h2 className="text-base font-bold">Gear by spec and bracket</h2>
                <p className="text-sm text-muted">
                  Slot-by-slot picks with where each item drops, per spec, role and level bracket.
                </p>
                <a
                  href={href.gear(entry.slug)}
                  className="mt-auto inline-flex items-center gap-1 self-start text-sm font-semibold text-[rgb(var(--c-accent))] hover:underline"
                >
                  Open the gear guide <ChevronRightIcon />
                </a>
              </section>
            ) : null}
          </div>
        ) : null}

        {hasMore ? (
          <section aria-labelledby="more-heading" className="flex flex-col gap-2">
            <h2 id="more-heading" className="text-xs font-semibold uppercase tracking-wider text-muted">
              More
            </h2>
            {gaps ? (
              <Collapsible title="Gaps — what the sources do not say">
                <Markdown source={gaps} />
              </Collapsible>
            ) : null}
            {otherSections.map((s) => (
              <Collapsible key={s.id} title={s.heading}>
                <Markdown source={s.markdown} />
              </Collapsible>
            ))}
          </section>
        ) : null}
      </div>
    </>
  );
}
