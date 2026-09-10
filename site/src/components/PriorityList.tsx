import type { YamlRotationStep } from '../types';
import { isPlainObject, scalarToString } from '../lib/site';
import { YamlValue } from './YamlValue';

function stepNumber(step: YamlRotationStep, index: number): string {
  const p = step.priority;
  if (p === 0 || p === '0') return 'open';
  if (p === null || p === undefined || p === '') return String(index + 1);
  return String(p);
}

function Extras({ step }: { step: YamlRotationStep }) {
  const known = new Set(['priority', 'action', 'condition', 'targets_min']);
  const rest = Object.fromEntries(Object.entries(step).filter(([k, v]) => !known.has(k) && v !== null && v !== ''));
  if (Object.keys(rest).length === 0) return null;
  return (
    <div className="mt-1">
      <YamlValue value={rest} />
    </div>
  );
}

/** Rotation as a numbered priority list; the condition sits in a muted column. */
export function PriorityList({ steps }: { steps: YamlRotationStep[] }) {
  if (!steps?.length) return null;
  return (
    <ol className="space-y-1.5">
      {steps.map((step, i) => {
        const num = stepNumber(step, i);
        const action = step.action;
        return (
          <li key={i} className="flex gap-3 rounded-xl bg-surface2 hairline px-3 py-2">
            <span
              className="mt-0.5 inline-flex h-6 min-w-[1.5rem] shrink-0 items-center justify-center rounded-lg px-1.5 font-mono text-xs font-semibold"
              style={{ backgroundColor: 'rgb(var(--c-accent) / 0.16)', color: 'rgb(var(--c-accent))' }}
              aria-hidden="true"
            >
              {num}
            </span>
            <div className="grid min-w-0 flex-1 gap-x-4 gap-y-0.5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
              <div className="min-w-0 text-sm font-medium">
                {isPlainObject(action) || Array.isArray(action) ? <YamlValue value={action} /> : scalarToString(action)}
              </div>
              {step.condition ? (
                <div className="min-w-0 text-sm text-muted">
                  {isPlainObject(step.condition) || Array.isArray(step.condition) ? (
                    <YamlValue value={step.condition} />
                  ) : (
                    scalarToString(step.condition)
                  )}
                </div>
              ) : null}
              <Extras step={step} />
            </div>
          </li>
        );
      })}
    </ol>
  );
}

/** AoE rotations are grouped by their `targets_min` threshold. */
export function GroupedPriorityList({ steps }: { steps: YamlRotationStep[] }) {
  if (!steps?.length) return null;
  const groups = new Map<string, YamlRotationStep[]>();
  for (const s of steps) {
    const key = s.targets_min === null || s.targets_min === undefined ? '' : String(s.targets_min);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s);
  }
  if (groups.size <= 1) return <PriorityList steps={steps} />;
  return (
    <div className="space-y-3">
      {[...groups.entries()].map(([key, group]) => (
        <div key={key}>
          {key ? (
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">{key}+ targets</div>
          ) : null}
          <PriorityList steps={group} />
        </div>
      ))}
    </div>
  );
}
