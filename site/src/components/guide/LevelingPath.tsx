import type { YamlLevelingStep } from '../../types';

/** Timeline of the sourced talent order: one tile per level → talent. */
export function LevelingPath({ steps, color }: { steps: YamlLevelingStep[]; color: string }) {
  if (steps.length === 0) return null;
  const missingLevels = steps.some((s) => s?.level === null || s?.level === undefined || s?.level === '');

  return (
    <div className="card p-4 sm:p-5">
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => {
          const level = s?.level === null || s?.level === undefined || s?.level === '' ? null : String(s.level);
          const tree = String(s?.tree ?? '').trim();
          return (
            <li key={i} className="flex min-w-0 items-start gap-2.5 rounded-xl bg-surface2 px-3 py-2">
              <span
                className="mt-0.5 inline-flex h-6 shrink-0 items-center justify-center rounded-lg px-2 font-mono text-xs font-bold"
                style={{ backgroundColor: `${color}2e`, color }}
              >
                {level ? level : `#${i + 1}`}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium leading-snug">{String(s?.talent ?? 'Talent not named')}</span>
                {tree ? <span className="block text-xs text-muted">{tree}</span> : null}
              </span>
            </li>
          );
        })}
      </ol>
      {missingLevels ? (
        <p className="mt-3 text-xs text-muted">
          Tiles numbered <span className="font-mono">#1, #2 …</span> come from sources that give the order of the picks
          but not the level they land on.
        </p>
      ) : null}
    </div>
  );
}
