import { useEffect, useState } from 'react';
import { ChevronDown, ListTree } from 'lucide-react';
import { cn } from '../../lib/utils';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu';

export interface TocItem {
  id: string;
  label: string;
  /** Nested entries (boss names under "Bosses"), shown indented. */
  children?: TocItem[];
}

/** The id of the section currently at the top of the viewport. */
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);
  const key = ids.join('|');
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const els = ids.map((id) => document.getElementById(id)).filter((e): e is HTMLElement => !!e);
    if (!els.length) return;
    const visible = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const first = ids.find((id) => visible.get(id));
        if (first) setActive(first);
      },
      { rootMargin: '-72px 0px -62% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return active;
}

function go(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (el.tagName === 'DETAILS') (el as HTMLDetailsElement).open = true;
  el.scrollIntoView({ block: 'start' });
}

function useTocState(items: TocItem[]) {
  const ids = items.flatMap((i) => [i.id, ...(i.children ?? []).map((c) => c.id)]);
  const active = useActiveSection(ids);
  const activeTop = items.find((i) => i.id === active || i.children?.some((c) => c.id === active)) ?? null;
  return { active, activeTop };
}

/** Right-hand "On this page" list on wide screens; tracks the section being read. */
export function Toc({ items, title = 'On this page' }: { items: TocItem[]; title?: string }) {
  const { active, activeTop } = useTocState(items);
  if (items.length < 2) return null;
  return (
    <nav aria-label={title} className="sticky top-[4.75rem] max-h-[calc(100vh-6rem)] overflow-y-auto pb-8 scrollbar-thin">
      <p className="mb-2 text-xs font-medium text-foreground">{title}</p>
      <ul className="space-y-px border-l text-[13px]">
        {items.map((item) => {
          const on = activeTop?.id === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  go(item.id);
                }}
                aria-current={on ? 'location' : undefined}
                className={cn(
                  '-ml-px block border-l py-1 pl-3 pr-1 leading-snug transition-colors',
                  on ? 'border-foreground font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </a>
              {item.children?.length && on ? (
                <ul className="mb-1 space-y-px">
                  {item.children.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          go(c.id);
                        }}
                        className={cn(
                          'block py-0.5 pl-6 text-[12.5px] leading-snug transition-colors',
                          active === c.id ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                        )}
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Below the top bar on narrow screens: the current section, and a menu of all of them. */
export function MobileToc({ items }: { items: TocItem[] }) {
  const { activeTop } = useTocState(items);
  if (items.length < 2) return null;
  return (
    <div className="sticky top-14 z-20 -mx-4 mb-6 border-b bg-background/95 px-4 py-1.5 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:-mx-6 sm:px-6 xl:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex w-full items-center gap-2 rounded-md py-1 text-left text-[13px] text-muted-foreground outline-none">
          <ListTree className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="shrink-0">On this page</span>
          <span className="min-w-0 truncate font-medium text-foreground">{activeTop?.label ?? items[0].label}</span>
          <ChevronDown className="ml-auto h-4 w-4 shrink-0" aria-hidden="true" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="max-h-[60vh] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto">
          {items.map((item) => (
            <DropdownMenuItem key={item.id} onSelect={() => window.setTimeout(() => go(item.id), 10)} className={cn(activeTop?.id === item.id && 'font-medium')}>
              {item.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
