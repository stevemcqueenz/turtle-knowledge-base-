import type { YamlRotationStep } from '../../types';
import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';
import { CardLabel } from './GuideSection';
import { describeValue, isContested } from './util';

interface AoeGroup {
  key: string;
  label: string;
  steps: YamlRotationStep[];
}

function targetsMin(step: YamlRotationStep, fallback: number | null): number | null {
  const raw = step?.targets_min;
  if (typeof raw === 'number' && Number.isFinite(raw)) return raw;
  if (typeof raw === 'string') {
    const m = /\d+/.exec(raw);
    if (m) return Number(m[0]);
  }
  return fallback;
}

/** Groups the AoE steps by target count: "2 – 3 targets", "4 or more targets". */
export function aoeGroups(steps: YamlRotationStep[], aoeThreshold: unknown): AoeGroup[] {
  const fallback =
    typeof aoeThreshold === 'number'
      ? aoeThreshold
      : typeof aoeThreshold === 'string' && /\d+/.test(aoeThreshold)
        ? Number(/\d+/.exec(aoeThreshold)![0])
        : null;

  const byMin = new Map<number, YamlRotationStep[]>();
  const loose: YamlRotationStep[] = [];
  for (const step of steps) {
    const min = targetsMin(step, fallback);
    if (min === null) loose.push(step);
    else {
      if (!byMin.has(min)) byMin.set(min, []);
      byMin.get(min)!.push(step);
    }
  }

  const mins = [...byMin.keys()].sort((a, b) => a - b);
  const groups: AoeGroup[] = mins.map((min, i) => {
    const next = mins[i + 1];
    const label = next && next > min + 1 ? `${min} – ${next - 1} targets` : next ? `${min} targets` : `${min} or more targets`;
    return { key: String(min), label, steps: byMin.get(min)! };
  });
  if (loose.length > 0) groups.push({ key: 'any', label: 'Several targets', steps: loose });
  return groups;
}

/** One card per target-count band. */
export function AoeCards({ groups, color }: { groups: AoeGroup[]; color: string }) {
  const theme = useThemeValue();
  const amber = readableColor('#f5b942', theme);
  if (groups.length === 0) return null;

  return (
    <div className="grid gap-3">
      {groups.map((group) => (
        <div key={group.key} className="card space-y-3 p-4 sm:p-5">
          <CardLabel>{group.label}</CardLabel>
          <ol className="space-y-2">
            {group.steps.map((step, i) => {
              const condition = describeValue(step?.condition);
              const contested = isContested(condition);
              const number = typeof step?.priority === 'number' && step.priority > 0 ? step.priority : i + 1;
              return (
                <li key={i} className="flex min-w-0 gap-2.5 text-sm">
                  <span className="shrink-0 font-bold" style={{ color }} aria-hidden="true">
                    {number}
                  </span>
                  <span className="min-w-0">
                    <span className="font-semibold">{describeValue(step?.action)}</span>
                    {condition ? (
                      <span className="ml-1.5" style={contested ? { color: amber } : undefined}>
                        <span className={contested ? '' : 'text-muted'}>{condition}</span>
                      </span>
                    ) : null}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}
