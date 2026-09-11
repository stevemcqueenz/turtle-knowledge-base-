import { matrix } from '../lib/site';
import { useScrollReset } from '../lib/router';
import { Collapsible } from '../components/Collapsible';
import { Markdown } from '../components/Markdown';
import { MatrixGrid, StandingLegend } from '../components/MatrixGrid';

function wordCount(source: string): string {
  return `${source.trim().split(/\s+/).length.toLocaleString('en-US')} words`;
}

export function MatrixPage() {
  useScrollReset('matrix');
  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-5">
      <h1 className="text-2xl font-semibold">Spec × role matrix</h1>
      <p className="mt-1 max-w-prose text-muted">
        {matrix.rows.length} spec/role verdicts. Standing is a community judgement taken from the class playbooks, not a
        measurement. Click a spec to open its playbook.
      </p>

      <div className="my-4">
        <StandingLegend />
      </div>

      <MatrixGrid rows={matrix.rows} roles={matrix.roles} />

      {/* Two long documents; collapsed so the grid is not buried under 8,800 words. */}
      <div className="mt-6 flex flex-col gap-3">
        {matrix.matrixMarkdown ? (
          <Collapsible
            title="Matrix notes"
            badge={<span className="shrink-0 text-xs text-muted">{wordCount(matrix.matrixMarkdown)}</span>}
          >
            <Markdown source={matrix.matrixMarkdown} />
          </Collapsible>
        ) : null}

        {matrix.coverageMarkdown ? (
          <Collapsible
            title="Coverage"
            badge={<span className="shrink-0 text-xs text-muted">{wordCount(matrix.coverageMarkdown)}</span>}
          >
            <Markdown source={matrix.coverageMarkdown} />
          </Collapsible>
        ) : null}
      </div>
    </div>
  );
}
