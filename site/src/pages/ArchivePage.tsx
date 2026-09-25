import { href, useScrollReset } from '../lib/router';
import { useMatrixData } from '../data';
import { Markdown } from '../components/Markdown';
import { MatrixGrid, StandingLegend } from '../components/MatrixGrid';
import { Loading, Page, PageHeader } from '../components/layout/Page';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

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
    <Page
      header={
        <PageHeader
          crumbs={[{ label: 'About', href: href.about() }, { label: 'Research archive' }]}
          title="Forum-era research archive"
          meta={<span>Superseded, kept for reference</span>}
        >
          <p className="max-w-[74ch] text-muted-foreground">
            Before the Discord read, the knowledge base was built from the archived forum alone: a spec × role matrix with a community
            &ldquo;standing&rdquo; for each cell, and its coverage notes. It is older and thinner than the class guides. The{' '}
            <a className="link" href={href.matrix()}>
              viability board
            </a>{' '}
            has the current ratings.
          </p>
        </PageHeader>
      }
    >
      {!matrix ? (
        <Loading />
      ) : (
        <div className="space-y-5">
          <StandingLegend />
          <MatrixGrid rows={matrix.rows} roles={matrix.roles} />
          <Accordion type="multiple" className="rounded-lg border px-4">
            {matrix.matrixMarkdown ? (
              <AccordionItem value="matrix" className="last:border-b-0">
                <AccordionTrigger>
                  <span className="flex flex-1 items-baseline justify-between gap-3 pr-2">
                    Matrix notes <span className="text-xs font-normal text-muted-foreground">{wordCount(matrix.matrixMarkdown)}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <Markdown source={matrix.matrixMarkdown} />
                </AccordionContent>
              </AccordionItem>
            ) : null}
            {matrix.coverageMarkdown ? (
              <AccordionItem value="coverage" className="last:border-b-0">
                <AccordionTrigger>
                  <span className="flex flex-1 items-baseline justify-between gap-3 pr-2">
                    Coverage <span className="text-xs font-normal text-muted-foreground">{wordCount(matrix.coverageMarkdown)}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <Markdown source={matrix.coverageMarkdown} />
                </AccordionContent>
              </AccordionItem>
            ) : null}
          </Accordion>
        </div>
      )}
    </Page>
  );
}
