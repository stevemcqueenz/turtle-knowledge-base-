import { useEffect, useRef, useState } from 'react';
import type { NavItem } from '../SectionNav';

interface SectionTabsProps {
  items: NavItem[];
  ariaLabel: string;
  /** Muted line on the right of the bar (the source summary). */
  note?: string;
}

/** Horizontal in-page tabs that stick under the site header and follow scroll. */
export function SectionTabs({ items, ariaLabel, note }: SectionTabsProps) {
  const [active, setActive] = useState(items[0]?.id ?? '');
  const [top, setTop] = useState(56);
  const listRef = useRef<HTMLUListElement>(null);

  // The header is sticky and can wrap on small screens, so its height is read
  // from the DOM instead of being hard-coded.
  useEffect(() => {
    const measure = () => {
      const header = document.querySelector('header');
      const height = header ? Math.round(header.getBoundingClientRect().height) : 0;
      if (height > 0) setTop(height);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const nodes = items.map((i) => document.getElementById(i.id)).filter((n): n is HTMLElement => !!n);
    if (nodes.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-120px 0px -68% 0px', threshold: 0 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  // Keep the active tab visible in the horizontal scroller on phones.
  useEffect(() => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-tab="${active}"]`);
    el?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  }, [active]);

  if (items.length === 0) return null;

  return (
    <div className="sticky z-20 border-b bg-bg/95 backdrop-blur" style={{ top }}>
      <nav aria-label={ariaLabel} className="mx-auto flex max-w-6xl items-center gap-3 px-3 sm:px-5">
        <ul ref={listRef} className="flex min-w-0 flex-1 gap-1 overflow-x-auto scrollbar-thin py-2">
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  data-tab={item.id}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={(e) => {
                    // Keep the route hash intact: scroll manually instead of
                    // letting the browser replace the hash route.
                    e.preventDefault();
                    const el = document.getElementById(item.id);
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      el.setAttribute('tabindex', '-1');
                      el.focus({ preventScroll: true });
                    }
                    setActive(item.id);
                  }}
                  className={`block whitespace-nowrap rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    isActive ? 'bg-surface2 font-semibold text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        {note ? <span className="hidden shrink-0 text-xs text-muted lg:block">{note}</span> : null}
      </nav>
    </div>
  );
}
