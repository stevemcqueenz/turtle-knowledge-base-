import type { ViabilityCell } from '../../types';
import { gradeClass, gradeTitle } from '../../lib/grades';

/** A rating tile: the letter always visible, the fill a one-hue scale (S strongest). */
export function Grade({
  cell,
  column,
  size = 'md',
}: {
  cell: Pick<ViabilityCell, 'grade' | 'label' | 'contested'> & Partial<ViabilityCell>;
  column: string;
  size?: 'sm' | 'md' | 'lg';
}) {
  const sizeClass = size === 'sm' ? 'grade-sm' : size === 'lg' ? 'grade-lg' : '';
  const text = cell.grade ? cell.label.replace(/\s+/g, '') : cell.label && cell.label.length <= 8 ? cell.label : '—';
  return (
    <span
      className={`grade ${gradeClass(cell.grade)} ${sizeClass}`}
      title={gradeTitle(cell as ViabilityCell, column)}
      aria-label={gradeTitle(cell as ViabilityCell, column)}
    >
      {text.length > 3 && cell.grade ? cell.grade : text}
      {cell.contested && cell.grade ? <span className="ml-px text-[0.6em] opacity-80" aria-hidden="true">*</span> : null}
    </span>
  );
}
