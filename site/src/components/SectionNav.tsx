import { useEffect, useState } from 'react';

export interface NavItem {
  id: string;
  label: string;
}

/** Sticky in-page navigation that follows the visible section. */
export function SectionNav({ items, ariaLabel }: { items: NavItem[]; ariaLabel: string }) {
  const [active, setActive] = useState(items[0]?.id ?? '');

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
      { rootMargin: '-88px 0px -70% 0px', threshold: 0 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label={ariaLabel} className="min-w-0 max-w-full lg:sticky lg:top-20">
      <ul className="flex max-w-full gap-1 overflow-x-auto scrollbar-thin pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id} className="shrink-0 lg:shrink">
              <a
                href={`#${item.id}`}
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
                className={`block whitespace-nowrap rounded-xl px-2.5 py-1.5 text-sm transition-colors lg:whitespace-normal ${
                  isActive ? 'bg-surface2 text-ink' : 'text-muted hover:text-ink'
                }`}
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
