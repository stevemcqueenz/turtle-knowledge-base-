import { useEffect, useRef, useState } from 'react';

export interface TocItem {
  id: string;
  label: string;
  /** Nested entries (boss names under "Bosses"), shown indented on desktop. */
  children?: TocItem[];
}

/** The id of the section currently at the top of the viewport. */
function useActiveSection(ids: string[]): string | null {
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
      { rootMargin: '-80px 0px -65% 0px', threshold: 0 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return active;
}

/**
 * Table of contents: a sticky sidebar on wide screens, a sticky scrolling chip
 * bar under the header on narrow ones. Highlights the section being read.
 */
export function Toc({ items, title = 'On this page', label }: { items: TocItem[]; title?: string; label?: string }) {
  const ids = items.flatMap((i) => [i.id, ...(i.children ?? []).map((c) => c.id)]);
  const topIds = items.map((i) => i.id);
  const active = useActiveSection(ids);
  const activeTop = items.find((i) => i.id === active || i.children?.some((c) => c.id === active))?.id ?? null;
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const chip = bar?.querySelector<HTMLElement>(`[data-toc="${activeTop}"]`);
    if (bar && chip) bar.scrollTo({ left: chip.offsetLeft - 16, behavior: 'smooth' });
  }, [activeTop]);

  if (items.length < 2) return null;
  return (
    <>
      <nav
        aria-label={label ?? title}
        className="sticky top-14 z-20 -mx-4 border-b bg-bg/95 backdrop-blur lg:hidden"
      >
        <div ref={barRef} className="no-scrollbar flex gap-1 overflow-x-auto px-4 py-2">
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-toc={item.id}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.id)?.scrollIntoView({ block: 'start' });
              }}
              className={`shrink-0 rounded-full px-3 py-1 text-[13px] font-medium transition-colors ${
                activeTop === item.id ? 'bg-accent/15 text-ink ring-1 ring-accent/40' : 'text-muted'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
      <nav aria-label={label ?? title} className="sticky top-20 hidden max-h-[calc(100vh-6rem)] overflow-y-auto pb-6 scrollbar-thin lg:block">
        <p className="eyebrow mb-3">{title}</p>
        <ul className="space-y-0.5 border-l">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ block: 'start' });
                }}
                aria-current={activeTop === item.id ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-1 pl-3 pr-2 text-[13.5px] leading-snug transition-colors ${
                  activeTop === item.id ? 'border-accent font-semibold text-ink' : 'border-transparent text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </a>
              {item.children && item.children.length > 0 && activeTop === item.id ? (
                <ul className="mb-1 ml-3 space-y-0.5">
                  {item.children.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`#${c.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(c.id)?.scrollIntoView({ block: 'start' });
                        }}
                        className={`block py-0.5 pl-3 text-[12.5px] ${active === c.id ? 'text-ink' : 'text-muted hover:text-ink'}`}
                      >
                        {c.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
        {topIds.length > 6 ? (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 pl-3 text-xs font-medium text-muted hover:text-ink"
          >
            Back to top ↑
          </button>
        ) : null}
      </nav>
    </>
  );
}
