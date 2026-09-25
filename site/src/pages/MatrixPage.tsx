import { useEffect, useMemo, useState } from 'react';
import type { ClassSummary, ViabilityRow } from '../types';
import { classes } from '../lib/site';
import { hashParam, href, useScrollReset } from '../lib/router';
import { ACTIVITY_LABELS, cellFor, gradeScore } from '../lib/grades';
import { Page, PageHeader } from '../components/layout/Page';
import { Grade, QUALITY_NAME } from '../components/ui/Grade';
import { ClassMark, useClassInk } from '../components/ui/ClassMark';
import { GradeLegend, RatingTooltip } from '../components/class/ViabilityMatrix';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';

const COLUMNS = ['raid', 'dungeon', 'pvp', 'leveling', 'farming'];
const TIERS: { key: string; test: (g: number) => boolean; word: string }[] = [
  { key: 'S', test: (g) => g >= 4.7, word: 'Best choice' },
  { key: 'A', test: (g) => g >= 3.7 && g < 4.7, word: 'Strong' },
  { key: 'B', test: (g) => g >= 2.7 && g < 3.7, word: 'Fine' },
  { key: 'C', test: (g) => g >= 0 && g < 2.7, word: 'Weak' },
];

function target(cls: ClassSummary, row: ViabilityRow, column: string): string {
  if (column === 'leveling') return href.leveling(cls.slug);
  if (row.playbookId) return href.playbook(cls.slug, row.playbookId);
  return row.route ?? href.class(cls.slug);
}

function SpecChip({ cls, row, column }: { cls: ClassSummary; row: ViabilityRow; column: string }) {
  const { ink } = useClassInk(cls.color);
  const cell = cellFor(row, column)!;
  return (
    <HoverCard openDelay={150} closeDelay={60}>
      <HoverCardTrigger asChild>
        <a
          href={target(cls, row, column)}
          className="inline-flex max-w-full items-center gap-2 rounded-md border bg-card py-1 pl-1 pr-2.5 text-[13px] transition-colors hover:border-foreground/25 hover:bg-accent/50"
        >
          <ClassMark name={cls.name} color={cls.color} size="sm" />
          <span className="min-w-0 truncate">
            <span className="font-medium">{row.spec}</span> <span style={{ color: ink }}>{cls.name}</span>
            {cell.label && cell.label !== cell.grade ? <span className="ml-1 text-xs text-muted-foreground">{cell.label}</span> : null}
            {cell.contested ? <span className="ml-0.5 text-muted-foreground">*</span> : null}
          </span>
        </a>
      </HoverCardTrigger>
      <HoverCardContent side="top" className="w-80">
        <RatingTooltip spec={`${row.spec} ${cls.name}`} column={ACTIVITY_LABELS[column]} cell={cell} />
      </HoverCardContent>
    </HoverCard>
  );
}

/**
 * The viability board: every spec of every class, from each class guide's
 * rating table, as a tier list per activity, then the whole table.
 */
export function MatrixPage() {
  useScrollReset('matrix');
  const [column, setColumn] = useState(() => {
    const by = hashParam('by');
    return by && COLUMNS.includes(by) ? by : 'raid';
  });
  useEffect(() => {
    const onHash = () => {
      const by = hashParam('by');
      if (by && COLUMNS.includes(by)) setColumn(by);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const rated = useMemo(
    () =>
      classes.flatMap((cls) =>
        (cls.viability?.rows ?? [])
          .filter((row) => cellFor(row, column)?.grade)
          .map((row) => ({ cls, row, score: gradeScore(cellFor(row, column)!.grade) })),
      ),
    [column],
  );

  return (
    <Page
      header={
        <PageHeader
          crumbs={[{ label: 'Home', href: href.home() }, { label: 'Viability board' }]}
          title="Viability board"
          meta={<span>All nine classes · patch 1.18.1</span>}
        >
          <p className="max-w-[74ch] text-muted-foreground">
            Each class guide rates its specs for raids, dungeons, PvP, leveling and open-world farming, from what players reported in
            the final patch. Hover a spec for the reason; select it to open its guide.
          </p>
        </PageHeader>
      }
    >
      <Tabs
        value={column}
        onValueChange={(c) => {
          setColumn(c);
          window.history.replaceState(null, '', href.matrix(c));
        }}
      >
        <TabsList aria-label="Activity" className="mb-5">
          {COLUMNS.map((c) => (
            <TabsTrigger key={c} value={c}>
              {ACTIVITY_LABELS[c]}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <section aria-label={`${ACTIVITY_LABELS[column]} tiers`} className="divide-y overflow-hidden rounded-lg border">
        {TIERS.map((t) => {
          const items = rated.filter((r) => t.test(r.score));
          return (
            <div key={t.key} className="grid gap-3 p-3 sm:grid-cols-[8.5rem_1fr] sm:p-4">
              <div className="flex items-center gap-3 sm:items-start">
                <Grade cell={{ grade: t.key, label: t.key, contested: false }} column={ACTIVITY_LABELS[column]} size="lg" />
                <span className="text-[13px] leading-tight">
                  <span className="block font-medium">{t.word}</span>
                  <span className="block text-xs" style={{ color: `rgb(var(--q-${t.key}))` }}>
                    {QUALITY_NAME[t.key]}
                  </span>
                </span>
              </div>
              <div className="flex flex-wrap content-start gap-1.5">
                {items.length ? (
                  items.map(({ cls, row }) => <SpecChip key={cls.slug + row.spec} cls={cls} row={row} column={column} />)
                ) : (
                  <span className="text-[13px] text-muted-foreground">No spec is rated here.</span>
                )}
              </div>
            </div>
          );
        })}
      </section>
      <GradeLegend className="mt-3" />

      <section aria-labelledby="table-h" className="mt-12">
        <h2 id="table-h" className="mb-3 text-[1.15rem] font-semibold tracking-tight">
          Every rating
        </h2>
        <div className="overflow-hidden rounded-lg border">
          <Table className="min-w-[40rem]">
            <TableHeader>
              <TableRow className="bg-muted/40 hover:bg-muted/40">
                <TableHead scope="col" className="px-4">
                  Spec
                </TableHead>
                {COLUMNS.map((c) => (
                  <TableHead key={c} scope="col" className="text-center">
                    {ACTIVITY_LABELS[c]}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {classes.map((cls) =>
                (cls.viability?.rows ?? []).map((row, i) => (
                  <TableRow key={cls.slug + row.spec} className={i === 0 ? 'border-t-2 border-t-border' : ''}>
                    <th scope="row" className="px-4 py-1.5 text-left font-normal">
                      <a href={row.playbookId ? href.playbook(cls.slug, row.playbookId) : href.class(cls.slug)} className="flex items-center gap-2 hover:underline">
                        <ClassMark name={cls.name} color={cls.color} size="xs" />
                        <span className="font-medium">{row.spec}</span>
                        <ClassName cls={cls} />
                      </a>
                    </th>
                    {COLUMNS.map((c) => {
                      const cell = cellFor(row, c);
                      return (
                        <TableCell key={c} className="py-1.5 text-center">
                          {cell ? <Grade cell={cell} column={ACTIVITY_LABELS[c]} size="sm" /> : null}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                )),
              )}
            </TableBody>
          </Table>
        </div>
        <p className="mt-3 text-[13px] text-muted-foreground">
          The earlier forum-era spec × role matrix is kept in the{' '}
          <a className="link" href={href.archive()}>
            research archive
          </a>
          .
        </p>
      </section>
    </Page>
  );
}

function ClassName({ cls }: { cls: ClassSummary }) {
  const { ink } = useClassInk(cls.color);
  return <span style={{ color: ink }}>{cls.name}</span>;
}
