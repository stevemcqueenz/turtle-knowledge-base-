import { useId } from 'react';

import { Markdown } from '../Markdown';

/**
 * One pick of a leveling talent order. Comes either from playbook YAML
 * (`talents.leveling_order`) or from a table parsed out of the class leveling
 * guide (`leveling.talentOrders`), so every field is read defensively.
 */
export interface LevelingStep {
  level?: unknown;
  tree?: unknown;
  talent?: unknown;
  points?: unknown;
  note?: unknown;
}

const text = (v: unknown): string => (v === null || v === undefined ? '' : String(v).trim());

const toggleClass =
  'mt-1 inline-block cursor-pointer rounded text-xs font-semibold text-muted underline decoration-dotted underline-offset-2 hover:text-ink ' +
  'peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[rgb(var(--c-accent))]';

/** "~level 14" -> "~14": the tile already reads as a level. */
function levelLabel(level: string): string {
  return level.replace(/^(~?)\s*levels?\s+/i, '$1');
}

interface LevelingPathProps {
  steps: LevelingStep[];
  color: string;
  /** The source gives the order of the picks; the levels are the reader's arithmetic. */
  approximate?: boolean;
}

/** Timeline of the sourced talent order: one tile per level → talent. */
export function LevelingPath({ steps, color, approximate = false }: LevelingPathProps) {
  const uid = useId();
  if (steps.length === 0) return null;
  const missingLevels = steps.some((s) => text(s?.level) === '');

  return (
    <div className="card p-4 sm:p-5">
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => {
          const level = text(s?.level);
          const talent = text(s?.talent);
          const tree = text(s?.tree);
          const points = text(s?.points);
          const note = text(s?.note);
          const id = `${uid}-${i}`;
          const long = talent.length + note.length > 120;
          return (
            <li key={i} className="flex min-w-0 items-start gap-2.5 rounded-xl bg-surface2 px-3 py-2">
              <span
                className="mt-0.5 inline-flex h-6 shrink-0 items-center justify-center rounded-lg px-2 font-mono text-xs font-bold"
                style={{ backgroundColor: `${color}2e`, color }}
              >
                {level ? levelLabel(level) : `#${i + 1}`}
              </span>
              <span className="min-w-0 flex-1">
                {long ? <input id={id} type="checkbox" className="peer sr-only" /> : null}
                <span className={long ? 'line-clamp-4 peer-checked:line-clamp-none' : 'block'}>
                  <span className="block text-sm font-medium leading-snug">
                    {talent ? <Markdown inline source={talent} /> : 'Talent not named'}
                    {points ? <span className="ml-1.5 font-mono text-xs text-muted">{points}</span> : null}
                  </span>
                  {tree ? <span className="block text-xs text-muted">{tree}</span> : null}
                  {note ? (
                    <Markdown inline source={note} className="mt-0.5 block text-xs leading-snug text-muted" />
                  ) : null}
                </span>
                {long ? (
                  <>
                    <label htmlFor={id} className={`${toggleClass} peer-checked:hidden`}>
                      Show all
                    </label>
                    <label htmlFor={id} className={`${toggleClass} hidden peer-checked:inline-block`}>
                      Show less
                    </label>
                  </>
                ) : null}
              </span>
            </li>
          );
        })}
      </ol>
      {approximate ? (
        <p className="mt-3 text-xs text-muted">
          Levels marked <span className="font-mono">~</span> are approximate: the source gives the order of the picks,
          not the level each one lands on.
        </p>
      ) : null}
      {missingLevels ? (
        <p className="mt-3 text-xs text-muted">
          Tiles numbered <span className="font-mono">#1, #2 …</span> come from sources that give the order of the picks
          but not the level they land on.
        </p>
      ) : null}
    </div>
  );
}
