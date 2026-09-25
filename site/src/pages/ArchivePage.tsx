import { href, useScrollReset } from '../lib/router';
import { useMatrixData } from '../data';
import { Collapsible } from '../components/Collapsible';
import { Markdown } from '../components/Markdown';
import { MatrixGrid, StandingLegend } from '../components/MatrixGrid';
import { Loading, PageHero } from '../components/layout/Page';

function wordCount(source: string): string {
  return `${source.trim().split(/\s+/).length.toLocaleString('en-US')} words`;
}

/**
 * The forum-era research: the spec × role matrix and its coverage notes that
 * the first version of the site was built on. Kept for reference; the class
 * guides (and the viability board) supersede it.
 */
export function ArchivePage() {
  useScrollReset('archive');
  const matrix = useMatrixData();
  return (
    <div>
      <PageHero crumbs={[{ label: 'About', href: href.about() }, { label: 'Research archive' }]}>
        <p className="eyebrow">Superseded · kept for reference</p>
        <h1 className="display mt-2 text-[2rem] leading-tight sm:text-[2.6rem]">Forum-era research archive</h1>
        <p className="mt-4 max-w-3xl leading-relaxed text-muted">
          Before the Discord read, the knowledge base was built from the archived forum alone. This is that
          spec × role matrix, with its community &ldquo;standing&rdquo; for each spec and role and its coverage notes.
          It is older and thinner than the class guides. Use the{' '}
          <a className="link" href={href.matrix()}>
            viability board
          </a>{' '}
          for current ratings.
        </p>
      </PageHero>
      {!matrix ? (
        <Loading />
      ) : (
        <div className="mx-auto max-w-7xl space-y-6 px-4 py-10 sm:px-6">
          <StandingLegend />
          <MatrixGrid rows={matrix.rows} roles={matrix.roles} />
          <div className="flex flex-col gap-3">
            {matrix.matrixMarkdown ? (
              <Collapsible title="Matrix notes" badge={<span className="shrink-0 text-xs text-muted">{wordCount(matrix.matrixMarkdown)}</span>}>
                <Markdown source={matrix.matrixMarkdown} />
              </Collapsible>
            ) : null}
            {matrix.coverageMarkdown ? (
              <Collapsible title="Coverage" badge={<span className="shrink-0 text-xs text-muted">{wordCount(matrix.coverageMarkdown)}</span>}>
                <Markdown source={matrix.coverageMarkdown} />
              </Collapsible>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
