import { matrix } from '../lib/site';
import { useScrollReset } from '../lib/router';
import { Card } from '../components/Card';
import { Markdown } from '../components/Markdown';
import { MatrixGrid, StandingLegend } from '../components/MatrixGrid';

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

      {matrix.matrixMarkdown ? (
        <Card as="section" className="mt-6">
          <h2 className="mb-3 text-lg font-semibold">Matrix notes</h2>
          <Markdown source={matrix.matrixMarkdown} />
        </Card>
      ) : null}

      {matrix.coverageMarkdown ? (
        <Card as="section" className="mt-4">
          <h2 className="mb-3 text-lg font-semibold">Coverage</h2>
          <Markdown source={matrix.coverageMarkdown} />
        </Card>
      ) : null}
    </div>
  );
}
