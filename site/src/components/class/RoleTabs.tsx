import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';

export interface RoleTabItem {
  id: string;
  label: string;
  /** id of the section this tab jumps to */
  target: string;
}

interface RoleTabsProps {
  items: RoleTabItem[];
  active: string;
  onSelect: (item: RoleTabItem) => void;
  accent: string;
  ariaLabel: string;
}

/**
 * The hero tab strip. Each tab jumps to a section of the page (in-page links
 * cannot be plain anchors here because the site routes on the hash), so this is
 * navigation: the current tab carries aria-current.
 */
export function RoleTabs({ items, active, onSelect, accent, ariaLabel }: RoleTabsProps) {
  const theme = useThemeValue();
  const ink = readableColor(accent, theme);

  const onKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    const i = items.findIndex((t) => t.id === active);
    if (i < 0) return;
    let next = i;
    if (e.key === 'ArrowRight') next = (i + 1) % items.length;
    else if (e.key === 'ArrowLeft') next = (i - 1 + items.length) % items.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = items.length - 1;
    else return;
    e.preventDefault();
    onSelect(items[next]);
    document.getElementById(`classtab-${items[next].id}`)?.focus();
  };

  return (
    <nav aria-label={ariaLabel} onKeyDown={onKeyDown} className="flex flex-wrap gap-1.5">
      {items.map((t) => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            id={`classtab-${t.id}`}
            type="button"
            aria-current={isActive ? 'true' : undefined}
            onClick={() => onSelect(t)}
            className={`rounded-xl px-3 py-1.5 text-sm font-medium transition-colors hairline ${
              isActive ? 'text-ink' : 'text-muted hover:text-ink'
            }`}
            style={
              isActive
                ? { backgroundColor: `${ink}26`, borderColor: `${ink}80` }
                : { backgroundColor: 'rgb(var(--c-surface))' }
            }
          >
            {t.label}
          </button>
        );
      })}
    </nav>
  );
}
