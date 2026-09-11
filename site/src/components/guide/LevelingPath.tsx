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

/** The tile keeps each cell to a glance; the full text and its citations stay in the guide's prose. */
function clamp(source: string): string {
  const plain = source
    .replace(/\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/[*_`]/g, '')
    .replace(/\(\s*[·,;]*\s*\)/g, '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([;,·])/g, '$1')
    .replace(/([;,·])(\s*[;,·])+/g, '$1')
    .trim()
    .replace(/^[·,;:\-\s]+|[\s·,;:]+$/g, '');
  if (plain.length <= 90) return plain;
  return `${plain.slice(0, 90).replace(/\s+\S*$/, '')}…`;
}

/** "~level 14" -> "~14": the tile already reads as a level. */
function levelLabel(level: string): string {
  return level.replace(/^(~?)\s*(?:levels?|lvl)\.?\s*/i, '$1');
}

interface LevelingPathProps {
  steps: LevelingStep[];
  color: string;
  /** The source gives the order of the picks; the levels are the reader's arithmetic. */
  approximate?: boolean;
  /** Only for the class-guide order, whose full text stays in the guide's own prose below. */
  clamped?: boolean;
}

/** Timeline of the sourced talent order: one tile per level → talent. */
export function LevelingPath({ steps, color, approximate = false, clamped = false }: LevelingPathProps) {
  if (steps.length === 0) return null;
  const missingLevels = steps.some((s) => text(s?.level) === '');

  return (
    <div className="card p-4 sm:p-5">
      <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, i) => {
          const level = text(s?.level);
          const talent = clamped ? clamp(text(s?.talent)) : text(s?.talent);
          const tree = text(s?.tree);
          const points = text(s?.points);
          const note = clamped ? clamp(text(s?.note)) : text(s?.note);
          return (
            <li key={i} className="flex min-w-0 items-start gap-2.5 rounded-xl bg-surface2 px-3 py-2">
              <span
                className="mt-0.5 inline-flex h-6 shrink-0 items-center justify-center rounded-lg px-2 font-mono text-xs font-bold"
                style={{ backgroundColor: `${color}2e`, color }}
              >
                {level ? levelLabel(level) : `#${i + 1}`}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-medium leading-snug">
                  {talent ? clamped ? talent : <Markdown inline source={talent} /> : 'Talent not named'}
                  {points ? <span className="ml-1.5 font-mono text-xs text-muted">{points}</span> : null}
                </span>
                {tree ? <span className="block text-xs text-muted">{tree}</span> : null}
                {note ? (
                  clamped ? (
                    <span className="mt-0.5 block text-xs leading-snug text-muted">{note}</span>
                  ) : (
                    <Markdown inline source={note} className="mt-0.5 block text-xs leading-snug text-muted" />
                  )
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
