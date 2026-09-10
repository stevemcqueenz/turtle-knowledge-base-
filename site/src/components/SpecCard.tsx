import type { MatrixRow, Playbook } from '../types';
import { href } from '../lib/router';
import { agreementMeta, patchValidityMeta, standingMeta } from '../lib/site';
import { Badge } from './Badge';
import { ChevronRightIcon } from './Icons';

interface SpecCardProps {
  slug: string;
  playbook?: Playbook;
  row?: MatrixRow | null;
  accent: string;
}

/** One spec inside a role tab: standing, agreement and patch-validity badges. */
export function SpecCard({ slug, playbook, row, accent }: SpecCardProps) {
  const matrixRow = playbook?.standing ?? row ?? null;
  const standing = standingMeta(matrixRow?.standing);
  const agreement = agreementMeta(playbook?.yaml?.agreement ?? matrixRow?.agreement ?? null);
  const validity = patchValidityMeta(playbook?.yaml);
    const title = playbook
    ? `${playbook.spec} — ${playbook.roleLabel}`
    : (row?.spec ?? 'No spec covered by the sources');
  const target = playbook ? href.playbook(slug, playbook.id) : null;

  const body = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="text-base font-semibold">{title}</h3>
          {playbook?.title ? <p className="mt-0.5 truncate text-xs text-muted">{playbook.title}</p> : null}
        </div>
        {target ? (
          <span className="mt-1 shrink-0 text-muted transition-transform group-hover:translate-x-0.5">
            <ChevronRightIcon />
          </span>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-1.5">
        {standing ? <Badge label={standing.label} color={standing.color} title={standing.title} /> : null}
        {agreement ? <Badge label={agreement.label} color={agreement.color} title={agreement.title} /> : null}
        {validity ? <Badge label={validity.label} color={validity.color} title={validity.title} /> : null}
      </div>

      {matrixRow?.notes ? <p className="text-sm text-muted">{matrixRow.notes}</p> : null}
      {matrixRow?.source_quality ? (
        <p className="text-xs text-muted">
          <span className="font-semibold uppercase tracking-wider">Source quality</span> · {matrixRow.source_quality}
        </p>
      ) : null}
      {!playbook ? (
        <p className="text-xs text-muted">No dedicated playbook in the repository for this combination.</p>
      ) : null}
    </>
  );

  if (!target) {
    return <div className="card flex min-w-0 flex-col gap-2 break-words">{body}</div>;
  }
  return (
    <a
      href={target}
      className="group card flex min-w-0 flex-col gap-2 break-words transition-colors hover:border-[color:var(--hover-border)]"
      style={{ ['--hover-border' as string]: `${accent}66` }}
    >
      {body}
    </a>
  );
}
