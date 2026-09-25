import type { ClassSummary } from '../../types';
import { href } from '../../lib/router';
import { distinctSpecLabel, specLabel } from '../../lib/site';
import { prefetchClass } from '../../data';
import { cn } from '../../lib/utils';

export interface ClassNavItem {
  to: string;
  label: string;
}

/** Every page a class has, in reading order: overview, specs, leveling, PvP, professions, sources. */
export function classPages(cls: ClassSummary): ClassNavItem[] {
  const pve = cls.playbooks.filter((p) => p.role !== 'pvp');
  const pvp = cls.playbooks.filter((p) => p.role === 'pvp');
  const items: ClassNavItem[] = [{ to: href.class(cls.slug), label: 'Overview' }];
  for (const p of pve) items.push({ to: href.playbook(cls.slug, p.id), label: distinctSpecLabel(p, pve, true) });
  if (cls.leveling) items.push({ to: href.leveling(cls.slug), label: 'Leveling' });
  for (const p of pvp) items.push({ to: href.playbook(cls.slug, p.id), label: pvp.length > 1 ? `PvP ${specLabel(p.spec)}` : 'PvP' });
  if (cls.guidePages.some((d) => d.slug === 'professions')) items.push({ to: href.classProfessions(cls.slug), label: 'Professions' });
  for (const d of cls.guidePages.filter((x) => x.slug !== 'professions'))
    items.push({ to: href.guidePage(cls.slug, d.slug), label: d.title.replace(new RegExp(`^${cls.name}\\s*`, 'i'), '').replace(/^[:\s-]+/, '') || d.title });
  if (cls.sources) items.push({ to: href.sources(cls.slug), label: 'Sources' });
  return items;
}

/** The class's page strip under its header, underlined in the class color. */
export function ClassNav({ cls, current }: { cls: ClassSummary; current: string }) {
  return (
    <nav aria-label={`${cls.name} pages`} className="no-scrollbar -mx-4 overflow-x-auto border-b px-4 sm:mx-0 sm:px-0">
      <ul className="flex gap-5">
        {classPages(cls).map((item) => {
          const on = item.to === current;
          return (
            <li key={item.to} className="shrink-0">
              <a
                href={item.to}
                onMouseEnter={() => prefetchClass(cls.slug)}
                aria-current={on ? 'page' : undefined}
                className={cn(
                  '-mb-px block border-b-2 pb-2 text-[13.5px] transition-colors',
                  on ? 'border-[rgb(var(--cc))] font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
