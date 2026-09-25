import { useEffect, useState, type ReactNode } from 'react';
import { BookA, Castle, ChevronRight, FlaskConical, Home, Info, LayoutGrid } from 'lucide-react';
import type { Route } from '../../lib/router';
import { href } from '../../lib/router';
import { classes, distinctSpecLabel, specLabel } from '../../lib/site';
import { instanceIndex } from '../../lib/instances';
import { prefetchClass } from '../../data';
import { cn } from '../../lib/utils';
import { ClassMark, useClassInk } from '../ui/ClassMark';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Separator } from '../ui/separator';
import { RoleIcon } from '../class/RoleIcon';
import type { ClassSummary } from '../../types';

/** The route as the path the sidebar links compare against. */
export function routePath(route: Route): string {
  switch (route.name) {
    case 'home':
      return '#/';
    case 'class':
      return href.class(route.slug);
    case 'playbook':
      return href.playbook(route.slug, route.id);
    case 'leveling':
      return href.leveling(route.slug);
    case 'gear':
      return `#/class/${route.slug}/gear`;
    case 'sources':
      return href.sources(route.slug);
    case 'guide-page':
      return href.guidePage(route.slug, route.page);
    case 'class-professions':
      return href.classProfessions(route.slug);
    case 'professions':
      return href.professions();
    case 'instances':
      return href.instances();
    case 'instance':
      return href.instance(route.slug);
    case 'matrix':
      return href.matrix();
    case 'about':
      return href.about();
    case 'archive':
      return href.archive();
    case 'glossary':
      return href.glossary();
    default:
      return '';
  }
}

function routeClass(route: Route): string | null {
  return 'slug' in route && route.name !== 'instance' ? route.slug : null;
}

function NavLink({
  to,
  current,
  children,
  icon,
  depth = 0,
  onNavigate,
  onHover,
}: {
  to: string;
  current: string;
  children: ReactNode;
  icon?: ReactNode;
  depth?: number;
  onNavigate?: () => void;
  onHover?: () => void;
}) {
  const on = current === to;
  return (
    <a
      href={to}
      onClick={onNavigate}
      onMouseEnter={onHover}
      onFocus={onHover}
      aria-current={on ? 'page' : undefined}
      className={cn(
        'flex min-h-[1.9rem] items-center gap-2 rounded-md pr-2 text-[13.5px] transition-colors',
        depth ? 'pl-8' : 'pl-2',
        on ? 'bg-accent font-medium text-foreground' : 'text-sidebar-foreground hover:bg-accent/60 hover:text-foreground',
      )}
    >
      {icon ? <span className="flex w-4 shrink-0 justify-center text-muted-foreground [&_svg]:h-4 [&_svg]:w-4">{icon}</span> : null}
      <span className="min-w-0 flex-1 truncate">{children}</span>
    </a>
  );
}

function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <>
      <Separator className="mx-2 mt-3 w-auto" />
      <p className="px-2 pb-1 pt-3 text-xs font-medium text-muted-foreground">{children}</p>
    </>
  );
}

function ClassGroup({
  cls,
  current,
  open,
  onOpenChange,
  onNavigate,
}: {
  cls: ClassSummary;
  current: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate?: () => void;
}) {
  const { ink } = useClassInk(cls.color);
  const pve = cls.playbooks.filter((p) => p.role !== 'pvp');
  const pvp = cls.playbooks.filter((p) => p.role === 'pvp');
  const prof = cls.guidePages.find((d) => d.slug === 'professions');
  const others = cls.guidePages.filter((d) => d.slug !== 'professions');
  const inClass = current.startsWith(`#/class/${cls.slug}`);
  const hover = () => prefetchClass(cls.slug);
  return (
    <Collapsible open={open} onOpenChange={onOpenChange}>
      <div className={cn('group flex items-center rounded-md', inClass && !open && 'bg-accent/60')}>
        <a
          href={href.class(cls.slug)}
          onClick={onNavigate}
          onMouseEnter={hover}
          onFocus={hover}
          aria-current={current === href.class(cls.slug) ? 'page' : undefined}
          className="flex min-h-[1.9rem] min-w-0 flex-1 items-center gap-2 rounded-md pl-2 text-[13.5px] font-medium"
          style={{ color: ink }}
        >
          <ClassMark name={cls.name} color={cls.color} size="xs" />
          <span className="truncate">{cls.name}</span>
        </a>
        <CollapsibleTrigger
          className="mr-0.5 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
          aria-label={`${open ? 'Collapse' : 'Expand'} ${cls.name}`}
        >
          <ChevronRight className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-90')} />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="data-[state=closed]:hidden">
        <div className="relative mb-1 mt-0.5 space-y-px before:absolute before:bottom-1 before:left-[1rem] before:top-1 before:w-px before:bg-border">
          <NavLink to={href.class(cls.slug)} current={current} depth={1} onNavigate={onNavigate}>
            Overview
          </NavLink>
          {pve.map((p) => (
            <NavLink key={p.id} to={href.playbook(cls.slug, p.id)} current={current} depth={1} onNavigate={onNavigate}>
              <span className="flex items-center justify-between gap-2">
                <span className="truncate">{distinctSpecLabel(p, pve)}</span>
                <RoleIcon role={p.role} className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              </span>
            </NavLink>
          ))}
          {cls.leveling ? (
            <NavLink to={href.leveling(cls.slug)} current={current} depth={1} onNavigate={onNavigate}>
              Leveling 1–60
            </NavLink>
          ) : null}
          {pvp.map((p) => (
            <NavLink key={p.id} to={href.playbook(cls.slug, p.id)} current={current} depth={1} onNavigate={onNavigate}>
              {pvp.length > 1 ? `PvP · ${specLabel(p.spec)}` : 'PvP'}
            </NavLink>
          ))}
          {prof ? (
            <NavLink to={href.classProfessions(cls.slug)} current={current} depth={1} onNavigate={onNavigate}>
              Professions
            </NavLink>
          ) : null}
          {others.map((d) => (
            <NavLink key={d.slug} to={href.guidePage(cls.slug, d.slug)} current={current} depth={1} onNavigate={onNavigate}>
              {d.title.replace(new RegExp(`^${cls.name}\\s*`, 'i'), '').replace(/^[:\s-]+/, '') || d.title}
            </NavLink>
          ))}
          {cls.sources ? (
            <NavLink to={href.sources(cls.slug)} current={current} depth={1} onNavigate={onNavigate}>
              Sources
            </NavLink>
          ) : null}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}

function InstanceGroup({ current, onNavigate }: { current: string; onNavigate?: () => void }) {
  const pages = instanceIndex?.pages ?? [];
  const inside = current.startsWith('#/instances/');
  const [open, setOpen] = useState(inside);
  useEffect(() => {
    if (inside) setOpen(true);
  }, [inside]);
  if (!pages.length) return null;
  const raids = pages.filter((p) => p.kind === 'raid');
  const dungeons = pages.filter((p) => p.kind !== 'raid');
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <div className="flex items-center">
        <div className="min-w-0 flex-1">
          <NavLink to={href.instances()} current={current} icon={<Castle />} onNavigate={onNavigate}>
            Dungeons &amp; raids
          </NavLink>
        </div>
        <CollapsibleTrigger
          className="mr-0.5 flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-foreground"
          aria-label={`${open ? 'Collapse' : 'Expand'} dungeons and raids`}
        >
          <ChevronRight className={cn('h-3.5 w-3.5 transition-transform', open && 'rotate-90')} />
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="data-[state=closed]:hidden">
        {[
          ['Raids', raids],
          ['Dungeons', dungeons],
        ].map(([label, list]) => (
          <div key={label as string} className="relative mb-1 space-y-px before:absolute before:bottom-1 before:left-[1rem] before:top-6 before:w-px before:bg-border">
            <p className="pb-0.5 pl-8 pt-1.5 text-xs text-muted-foreground">{label as string}</p>
            {(list as typeof pages).map((p) => (
              <NavLink key={p.slug} to={href.instance(p.slug)} current={current} depth={1} onNavigate={onNavigate}>
                {p.title.replace(/\s*\([^)]*\)\s*$/, '')}
              </NavLink>
            ))}
          </div>
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}

/**
 * The left-hand navigator: site pages, then every class with its spec guides,
 * leveling, PvP, professions and sources, then the dungeons and raids. The
 * current class opens by itself.
 */
export function SidebarNav({ route, onNavigate }: { route: Route; onNavigate?: () => void }) {
  const current = routePath(route);
  const slug = routeClass(route);
  const [open, setOpen] = useState<Set<string>>(() => new Set(slug ? [slug] : []));
  useEffect(() => {
    if (slug) setOpen((s) => (s.has(slug) ? s : new Set([...s, slug])));
  }, [slug]);

  return (
    <nav aria-label="Guides" className="px-2 pb-8 pt-3">
      <div className="space-y-px">
        <NavLink to={href.home()} current={current} icon={<Home />} onNavigate={onNavigate}>
          Home
        </NavLink>
        <NavLink to={href.matrix()} current={current} icon={<LayoutGrid />} onNavigate={onNavigate}>
          Viability board
        </NavLink>
        <NavLink to={href.professions()} current={current} icon={<FlaskConical />} onNavigate={onNavigate}>
          Professions
        </NavLink>
        <InstanceGroup current={current} onNavigate={onNavigate} />
      </div>
      <GroupLabel>Classes</GroupLabel>
      <div className="space-y-px">
        {classes.map((c) => (
          <ClassGroup
            key={c.slug}
            cls={c}
            current={current}
            open={open.has(c.slug)}
            onOpenChange={(o) =>
              setOpen((s) => {
                const next = new Set(s);
                if (o) next.add(c.slug);
                else next.delete(c.slug);
                return next;
              })
            }
            onNavigate={onNavigate}
          />
        ))}
      </div>
      <GroupLabel>Reference</GroupLabel>
      <div className="space-y-px">
        <NavLink to={href.glossary()} current={current} icon={<BookA />} onNavigate={onNavigate}>
          Glossary
        </NavLink>
        <NavLink to={href.about()} current={current} icon={<Info />} onNavigate={onNavigate}>
          About the archive
        </NavLink>
      </div>
    </nav>
  );
}
