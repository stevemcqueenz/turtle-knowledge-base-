import { useMemo, useState } from 'react';
import type { ClassEntry } from '../types';
import { classRoles, getClass, roleLabel } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { Markdown } from '../components/Markdown';
import { Tabs, type TabItem } from '../components/Tabs';
import { SpecCard } from '../components/SpecCard';
import { Collapsible } from '../components/Collapsible';
import { Card } from '../components/Card';
import { ChevronRightIcon } from '../components/Icons';
import { NotFound } from './NotFound';

function hasGear(entry: ClassEntry): boolean {
  const specs = entry.gear?.specs;
  return (Array.isArray(specs) && specs.length > 0) || (Array.isArray(entry.gearMarkdown) && entry.gearMarkdown.length > 0);
}

export function ClassPage({ slug }: { slug: string }) {
  const entry = getClass(slug);
  useScrollReset(slug);
  const theme = useThemeValue();
  const roles = useMemo(() => (entry ? classRoles(entry) : []), [entry]);
  // Open on the first role that actually has a playbook, not on a "not viable" row.
  const [tab, setTab] = useState<string>(
    () => roles.find((r) => entry?.playbooks.some((p) => p.role === r)) ?? roles[0] ?? 'tank',
  );

  if (!entry) return <NotFound path={`#/class/${slug}`} />;

  const ink = readableColor(entry.color, theme);
  const tabs: TabItem[] = roles.map((r) => ({
    id: r,
    label: roleLabel(r),
    count: entry.playbooks.filter((p) => p.role === r).length || undefined,
  }));
  if (entry.leveling) tabs.push({ id: 'leveling', label: 'Leveling' });
  if (hasGear(entry)) tabs.push({ id: 'gear', label: 'Gear' });

  const activeTab = tabs.some((t) => t.id === tab) ? tab : (tabs[0]?.id ?? '');
  const coverage = entry.readme.find((s) => /coverage/i.test(s.heading));
  const otherSections = entry.readme.filter(
    (s) => s !== coverage && !/gap/i.test(s.heading) && !s.heading.includes('1.18.1'),
  );

  const rolePlaybooks = entry.playbooks.filter((p) => p.role === activeTab);
  const roleRows = entry.matrix.filter(
        (r) =>
      r.role === activeTab &&
      !rolePlaybooks.some((p) => String(r.spec ?? '').toLowerCase().startsWith(p.spec.toLowerCase().split(' ')[0])),
  );

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-5">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted">
        <a href={href.home()} className="hover:underline">
          Classes
        </a>
        <span className="mx-1.5" aria-hidden="true">
          /
        </span>
        <span className="text-ink">{entry.name}</span>
      </nav>

      <header className="mb-6 overflow-hidden rounded-xl bg-surface hairline">
        <div className="h-1.5 w-full" style={{ backgroundColor: entry.color }} aria-hidden="true" />
        <div className="p-4 sm:p-5">
          <h1 className="text-2xl font-semibold sm:text-3xl" style={{ color: ink }}>
            {entry.name}
          </h1>
          <Markdown source={entry.summary} className="mt-2 text-muted" />
        </div>
      </header>

      <div className="mb-4">
        <Tabs items={tabs} active={activeTab} onChange={setTab} ariaLabel="Roles" accent={entry.color} />
      </div>

      <div id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={`tab-${activeTab}`} className="mb-8">
        {activeTab === 'leveling' && entry.leveling ? (
          <Card className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Leveling 1–60</h2>
            <ul className="flex flex-wrap gap-1.5">
              {entry.leveling.sections.slice(0, 12).map((s) => (
                <li key={s.id} className="chip hairline bg-surface2 text-xs text-muted">
                  {s.heading}
                </li>
              ))}
            </ul>
            <a
              href={href.leveling(entry.slug)}
              className="inline-flex items-center gap-1 self-start text-sm text-[rgb(var(--c-accent))] hover:underline"
            >
              Open the leveling guide <ChevronRightIcon />
            </a>
            <p className="text-xs text-muted">Source file: {entry.leveling.sourceFile}</p>
          </Card>
        ) : activeTab === 'gear' && hasGear(entry) ? (
          <Card className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold">Gear by spec and bracket</h2>
            <p className="text-sm text-muted">
              Slot-by-slot recommendations with where each item comes from, per spec, role and level bracket.
            </p>
            <a
              href={href.gear(entry.slug)}
              className="inline-flex items-center gap-1 self-start text-sm text-[rgb(var(--c-accent))] hover:underline"
            >
              Open the gear guide <ChevronRightIcon />
            </a>
          </Card>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2">
            {rolePlaybooks.map((p) => (
              <SpecCard key={p.id} slug={entry.slug} playbook={p} accent={entry.color} />
            ))}
            {roleRows.map((r, i) => (
              <SpecCard key={`row-${i}`} slug={entry.slug} row={r} accent={entry.color} />
            ))}
            {rolePlaybooks.length === 0 && roleRows.length === 0 ? (
              <p className="text-sm text-muted">No source in the repository covers this role for {entry.name}.</p>
            ) : null}
          </div>
        )}
      </div>

      <div className="space-y-3">
        {entry.patchChanges ? (
          <Collapsible title="What 1.18.1 changed">
            <Markdown source={entry.patchChanges} />
          </Collapsible>
        ) : null}
        {entry.gaps ? (
          <Collapsible title="Gaps — what the sources do not say">
            <Markdown source={entry.gaps} />
          </Collapsible>
        ) : null}
        {coverage ? (
          <Card id={coverage.id}>
            <h2 className="mb-2 text-lg font-semibold">{coverage.heading}</h2>
            <Markdown source={coverage.markdown} />
          </Card>
        ) : null}
        {otherSections.map((s) => (
          <Collapsible key={s.id} title={s.heading}>
            <Markdown source={s.markdown} />
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
