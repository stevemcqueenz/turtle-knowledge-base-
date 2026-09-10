export interface TabItem {
  id: string;
  label: string;
  count?: number;
}

interface TabsProps {
  items: TabItem[];
  active: string;
  onChange: (id: string) => void;
  ariaLabel: string;
  accent?: string;
}

/** Roving-tabindex tab strip with arrow-key navigation. */
export function Tabs({ items, active, onChange, ariaLabel, accent }: TabsProps) {
  const accentColor = accent ?? 'rgb(var(--c-accent))';

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const i = items.findIndex((t) => t.id === active);
    if (i < 0) return;
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % items.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + items.length) % items.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = items.length - 1;
    else return;
    e.preventDefault();
    onChange(items[next].id);
    const el = document.getElementById(`tab-${items[next].id}`);
    el?.focus();
  };

  return (
    <div role="tablist" aria-label={ariaLabel} onKeyDown={onKeyDown} className="flex flex-wrap gap-1.5">
      {items.map((t) => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            id={`tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`panel-${t.id}`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(t.id)}
            className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors hairline ${
              isActive ? 'text-ink' : 'text-muted hover:text-ink'
            }`}
            style={
              isActive
                ? { backgroundColor: `${accentColor}22`, borderColor: `${accentColor}80` }
                : { backgroundColor: 'rgb(var(--c-surface))' }
            }
          >
            {t.label}
            {typeof t.count === 'number' ? <span className="ml-1.5 text-xs text-muted">{t.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
