import type { MatrixRow, Playbook } from '../types';
import { standingMeta } from '../lib/site';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { firstSentence } from './class/data';
import { ChevronRightIcon } from './Icons';

interface SpecCardProps {
  row: MatrixRow;
  playbook?: Playbook | null;
  /** Where the card leads: a spec guide, the leveling guide, or nowhere. */
  target?: string | null;
  targetLabel?: string;
}

/** One spec inside a role column: standing, a one-line verdict and its chips. */
export function SpecCard({
  row,
  playbook,
  target,
  targetLabel,
}: SpecCardProps) {
  const theme = useThemeValue();
  const standing = standingMeta(row.standing);
  const standingColor = readableColor(standing?.color ?? '#8a8f98', theme);
  const isFavored = String(row.standing).toLowerCase() === 'favored';
  const name = row.spec ?? playbook?.spec ?? 'Unnamed spec';
  const note = firstSentence(row.notes);
  const agreement = String(row.agreement ?? playbook?.yaml?.agreement ?? '');
  const contested = /contested/i.test(agreement);
  const validFor1181 = playbook?.yaml?.patch_validity?.valid_for_1181 === true;
  const accentInk = readableColor('#4dd0e1', theme);

  const body = (
    <>
      <div className="flex items-start justify-between gap-2">
        <h4 className="min-w-0 text-[15px] font-bold leading-snug">{name}</h4>
        <span
          className="chip shrink-0 text-[11px] font-bold"
          style={{ color: standingColor, backgroundColor: `${standingColor}24` }}
        >
          {standing?.label ?? String(row.standing)}
        </span>
      </div>

      {note ? <p className="text-[13px] leading-relaxed text-muted">{note}</p> : null}

      {contested || validFor1181 ? (
        <div className="flex flex-wrap gap-1.5">
          {contested ? (
            <span className="chip hairline text-[11px] text-muted" title={agreement}>
              Standing contested
            </span>
          ) : null}
          {validFor1181 ? (
            <span
              className="chip text-[11px]"
              style={{ color: accentInk, border: `1px solid ${accentInk}66` }}
              title="The guide has been checked against patch 1.18.1"
            >
              1.18.1
            </span>
          ) : null}
        </div>
      ) : null}

      {target ? (
        <span className="mt-auto inline-flex items-center gap-1 pt-1 text-[12px] font-semibold text-muted transition-colors group-hover:text-ink">
          {targetLabel ?? 'Open the guide'}
          <ChevronRightIcon className="h-3.5 w-3.5" />
        </span>
      ) : (
        <span className="mt-auto pt-1 text-[12px] text-muted">No separate guide for this pick.</span>
      )}
    </>
  );

  const style = isFavored ? { borderColor: `${standingColor}73` } : undefined;
  const className = 'card flex min-w-0 flex-col gap-2 break-words p-4';

  if (!target) {
    return (
      <div className={className} style={style}>
        {body}
      </div>
    );
  }
  return (
    <a href={target} className={`group ${className} transition-colors hover:border-[color:var(--hover-border)]`} style={{ ...style, ['--hover-border' as string]: `${standingColor}99` }}>
      {body}
    </a>
  );
}
