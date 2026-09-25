import type { ViabilityCell } from '../../types';
import { gradeTitle } from '../../lib/grades';
import { cn } from '../../lib/utils';

/** S legendary, A epic, B rare, C uncommon, D/F and "no rating" poor. */
export function qualityOf(grade: string | null | undefined): 'S' | 'A' | 'B' | 'C' | 'N' {
  const g = grade?.[0];
  return g === 'S' || g === 'A' || g === 'B' || g === 'C' ? g : 'N';
}

/** Quality colors as the game draws them on its dark tooltips (text contrast tuned). */
export const GAME_QUALITY: Record<string, string> = {
  S: '#ff8000',
  A: '#b865f5',
  B: '#3a9bff',
  C: '#1eff00',
  N: '#9d9d9d',
};

export const QUALITY_NAME: Record<string, string> = {
  S: 'Legendary',
  A: 'Epic',
  B: 'Rare',
  C: 'Uncommon',
  N: 'Poor',
};

/**
 * A rating as an item-quality badge: the guide's letter in the quality color
 * (S legendary orange, A epic purple, B rare blue, C uncommon green, none poor
 * grey) on a faint fill of the same color.
 */
export function Grade({
  cell,
  column,
  size = 'md',
  className,
}: {
  cell: Pick<ViabilityCell, 'grade' | 'label' | 'contested'> & Partial<ViabilityCell>;
  column: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}) {
  const q = qualityOf(cell.grade);
  const raw = cell.grade ? cell.label.replace(/\s+/g, '').replace(/-/g, '−') : cell.label && cell.label.length <= 6 ? cell.label : '—';
  const text = raw.length > 3 && cell.grade ? cell.grade.replace('-', '−') : raw;
  const dims =
    size === 'sm'
      ? 'h-5 min-w-[1.25rem] px-1 text-[11px]'
      : size === 'lg'
        ? 'h-9 min-w-[2.25rem] px-1.5 text-base'
        : 'h-6 min-w-[1.6rem] px-1 text-[12.5px]';
  const label = gradeTitle(cell as ViabilityCell, column);
  return (
    <span
      role="img"
      aria-label={label}
      data-q={q}
      className={cn(
        'inline-flex shrink-0 items-center justify-center rounded-[4px] border font-bold leading-none tabular',
        dims,
        cell.grade ? '' : 'border-dashed font-medium',
        className,
      )}
      style={{
        color: `rgb(var(--q-${q}))`,
        background: `rgb(var(--q-${q}) / var(--q-fill))`,
        borderColor: `rgb(var(--q-${q}) / ${cell.grade ? 0.5 : 0.35})`,
      }}
    >
      {text}
      {cell.contested && cell.grade ? (
        <span className="ml-px text-[0.75em] opacity-80" aria-hidden="true">
          *
        </span>
      ) : null}
    </span>
  );
}
