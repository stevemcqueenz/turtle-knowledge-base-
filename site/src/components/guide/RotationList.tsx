import type { YamlRotationStep } from '../../types';
import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';
import { CardLabel } from './GuideSection';
import { describeValue, isContested } from './util';

/** Single-target priority: use the first line that applies. */
export function RotationList({ steps, color }: { steps: YamlRotationStep[]; color: string }) {
  const theme = useThemeValue();
  const amber = readableColor('#f5b942', theme);
  if (steps.length === 0) return null;

  return (
    <div className="card space-y-3 p-4 sm:p-5">
      <CardLabel>Single target · use the first that applies</CardLabel>
      <ol className="space-y-2">
        {steps.map((step, i) => {
          const number = typeof step?.priority === 'number' && step.priority > 0 ? step.priority : i + 1;
          const condition = describeValue(step?.condition);
          const contested = isContested(condition);
          return (
            <li key={i} className="flex min-w-0 items-start gap-3 rounded-xl bg-surface2 px-3 py-2.5">
              <span
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold"
                style={{ backgroundColor: color, color: 'rgb(var(--c-bg))' }}
                aria-hidden="true"
              >
                {number}
              </span>
              <span className="grid min-w-0 flex-1 gap-x-4 gap-y-0.5 sm:grid-cols-[minmax(0,13rem)_minmax(0,1fr)]">
                <span className="min-w-0 text-[15px] font-bold leading-snug">{describeValue(step?.action)}</span>
                {condition ? (
                  <span className="min-w-0 text-sm" style={contested ? { color: amber } : undefined}>
                    <span className={contested ? '' : 'text-muted'}>{condition}</span>
                  </span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Rage / mana / energy rules that go with the priority. */
export function ResourceRules({ rules }: { rules: unknown[] }) {
  if (rules.length === 0) return null;
  return (
    <div className="card space-y-3 p-4 sm:p-5">
      <CardLabel>Resource rules</CardLabel>
      <ul className="space-y-2">
        {rules.map((rule, i) => (
          <li key={i} className="flex gap-2 text-sm leading-snug">
            <span className="text-muted" aria-hidden="true">
              ·
            </span>
            <span className="min-w-0">{describeValue(rule)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
