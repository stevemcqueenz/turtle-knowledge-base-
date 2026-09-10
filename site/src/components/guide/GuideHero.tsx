import type { ClassEntry, Playbook } from '../../types';
import { agreementMeta, standingMeta } from '../../lib/site';
import { href } from '../../lib/router';
import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';
import { Badge } from '../Badge';
import { firstSentence, sourceSummaryLine, summarizeSources } from './util';

function FactTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-xl bg-surface hairline p-3">
      <div className="text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">{label}</div>
      <div className="mt-1 line-clamp-5 text-[13px] font-medium leading-snug">{value}</div>
    </div>
  );
}

/**
 * Gradient hero band: who this guide is for, how the community rates it, and
 * whether it still holds on 1.18.1.
 */
export function GuideHero({ entry, playbook }: { entry: ClassEntry; playbook: Playbook }) {
  const theme = useThemeValue();
  const ink = readableColor(entry.color, theme);
  const y = playbook.yaml;
  const standing = standingMeta(playbook.standing?.standing);
  const agreement = agreementMeta(y?.agreement ?? playbook.standing?.agreement ?? null);
  const pv = y?.patch_validity ?? null;
  const validFor1181 = pv?.valid_for_1181 === true;
  const sources = summarizeSources(y?.sources);
  const standingNote = firstSentence(playbook.standing?.notes);

  return (
    <div
      className="border-b"
      style={{ backgroundImage: `linear-gradient(180deg, ${entry.color}22 0%, ${entry.color}00 100%)` }}
    >
      <div className="mx-auto max-w-6xl px-3 pb-6 pt-4 sm:px-5">
        <nav aria-label="Breadcrumb" className="text-sm text-muted">
          <a href={href.home()} className="rounded hover:underline">
            Classes
          </a>
          <span className="mx-1.5" aria-hidden="true">
            /
          </span>
          <a href={href.class(entry.slug)} className="rounded font-semibold hover:underline" style={{ color: ink }}>
            {entry.name}
          </a>
          <span className="mx-1.5" aria-hidden="true">
            /
          </span>
          <span className="text-ink">
            {playbook.spec} · {playbook.roleLabel}
          </span>
        </nav>

        <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)] lg:items-start">
          <div className="min-w-0">
            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">{playbook.spec}</h1>
            <p className="mt-1 text-base font-medium">
              <span style={{ color: ink }}>{entry.name}</span>
              <span className="text-muted"> · {playbook.roleLabel}</span>
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {standing ? <Badge label={standing.label} color={standing.color} title={standing.title} /> : null}
              {agreement ? <Badge label={agreement.label} color={agreement.color} title={agreement.title} /> : null}
              <Badge
                label={validFor1181 ? 'Valid for 1.18.1' : 'Needs re-checking'}
                color={validFor1181 ? '#3ddc84' : '#f5b942'}
                title={pv?.notes ? String(pv.notes) : undefined}
              />
            </div>
          </div>

          <div className="grid min-w-0 gap-2 sm:grid-cols-3">
            <FactTile
              label="Community standing"
              value={standingNote || (standing ? standing.label : 'Not rated in the sources.')}
            />
            <FactTile
              label="Written for"
              value={pv?.written_for ? String(pv.written_for) : 'Not stated in the sources.'}
            />
            <FactTile
              label="Sources"
              value={sources.count > 0 ? sourceSummaryLine({ ...sources, staff: [] }) : 'No cited posts.'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
