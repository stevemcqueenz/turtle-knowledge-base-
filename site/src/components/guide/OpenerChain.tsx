import { CardLabel } from './GuideSection';

/** The opener as an arrow chain of button presses. */
export function OpenerChain({ steps, condition, color }: { steps: string[]; condition?: string; color: string }) {
  if (steps.length === 0) return null;
  return (
    <div className="card space-y-3 p-4 sm:p-5">
      <CardLabel>Opener</CardLabel>
      <ol className="flex flex-wrap items-center gap-2">
        {steps.map((step, i) => (
          <li key={`${step}-${i}`} className="flex items-center gap-2">
            {i > 0 ? (
              <span className="text-muted" aria-hidden="true">
                →
              </span>
            ) : null}
            <span
              className="rounded-xl px-3 py-2 text-sm font-semibold"
              style={{ backgroundColor: `${color}26`, border: `1px solid ${color}66` }}
            >
              {step}
            </span>
          </li>
        ))}
      </ol>
      {condition ? <p className="text-xs text-muted">{condition}</p> : null}
    </div>
  );
}
