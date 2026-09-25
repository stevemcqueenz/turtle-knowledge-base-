import { useState } from 'react';
import type { Section as SectionData } from '../types';
import { getClassSummary } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { cellFor, gradeScore } from '../lib/grades';
import { pathName, sectionOfPath } from '../lib/leveling';
import { useClassEntry } from '../data';
import { Markdown, SpellClass } from '../components/Markdown';
import { Loading, Page, PageHeader, Section, Sections } from '../components/layout/Page';
import type { TocItem } from '../components/layout/Toc';
import { ClassMark, useClassInk, useClassVars } from '../components/ui/ClassMark';
import { Grade } from '../components/ui/Grade';
import { Tabs, TabsList, TabsTrigger } from '../components/ui/tabs';
import { LevelingTimeline } from '../components/leveling/LevelingTimeline';
import { GameplayByLevel } from '../components/leveling/GameplayByLevel';
import { ClassNav } from '../components/class/ClassNav';
import { cleanHeading } from '../components/guide/util';
import { NotFound } from './NotFound';

const tocLabel = (h: string) => cleanHeading(h).replace(/\s*\([^)]*\)\s*$/, '');
const isGameplay = (s: SectionData) => /^gameplay by level/i.test(s.heading.trim());

export function LevelingPage({ slug }: { slug: string }) {
  const cls = getClassSummary(slug);
  const entry = useClassEntry(slug);
  useScrollReset(`${slug}/leveling`);
  useSectionScroll(!!entry);
  const { ink, rgb } = useClassInk(cls?.color ?? '#cccccc');
  const vars = useClassVars(cls?.color ?? '#cccccc');
  const [pathIndex, setPathIndex] = useState(0);

  if (!cls || entry === null || (entry && !entry.leveling)) return <NotFound path={`#/class/${slug}/leveling`} />;
  if (!entry) return <Loading label={`Loading ${cls.name} leveling`} />;

  const leveling = entry.leveling!;
  const paths = leveling.paths ?? [];
  const tree = entry.talentTree;
  const pathSections = new Set(paths.map((p) => sectionOfPath(leveling.sections, p)?.id).filter(Boolean) as string[]);
  const intro = leveling.sections.find((s) => s.heading === 'Introduction');
  const gameplay = leveling.sections.find(isGameplay) ?? null;
  const rest: SectionData[] = leveling.sections.filter((s) => s !== intro && s !== gameplay);
  const picks = (cls.viability?.rows ?? [])
    .map((row) => ({ row, cell: cellFor(row, 'leveling') }))
    .filter((p) => p.cell?.grade)
    .sort((a, b) => gradeScore(b.cell!.grade) - gradeScore(a.cell!.grade));
  const showPath = !!tree && paths.length > 0;

  // Gameplay by level leads; the talent-order sections fold into one "Talent path" block after it.
  const blocks: ({ kind: 'gameplay'; s: SectionData } | { kind: 'path' } | { kind: 'section'; s: SectionData })[] = [];
  if (gameplay) blocks.push({ kind: 'gameplay', s: gameplay });
  if (showPath) blocks.push({ kind: 'path' });
  rest.forEach((s) => {
    if (pathSections.has(s.id) && showPath) return;
    blocks.push({ kind: 'section', s });
  });

  const toc: TocItem[] = blocks.map((b) =>
    b.kind === 'path' ? { id: 'talent-path', label: 'Talent path 10–60' } : { id: b.s.id, label: tocLabel(b.s.heading) },
  );
  const path = paths[Math.min(pathIndex, paths.length - 1)];
  const pathSection = path ? sectionOfPath(leveling.sections, path) : undefined;

  return (
    <Page
      style={vars}
      toc={toc}
      header={
        <PageHeader
          crumbs={[{ label: 'Classes', href: href.home() }, { label: cls.name, href: href.class(slug) }, { label: 'Leveling' }]}
          icon={<ClassMark name={cls.name} color={cls.color} size="xl" />}
          title={
            <>
              Leveling a <span style={{ color: ink }}>{cls.name}</span>
            </>
          }
          meta={
            <>
              <span>Levels 1–60</span>
              {paths.length ? <span>{paths.length} talent {paths.length === 1 ? 'path' : 'paths'}</span> : null}
              {picks.length ? (
                <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  {picks.map(({ row, cell }) => (
                    <span key={row.spec} className="inline-flex items-center gap-1.5">
                      <Grade cell={cell!} column="Leveling" size="sm" />
                      {row.spec}
                    </span>
                  ))}
                </span>
              ) : null}
            </>
          }
          nav={<ClassNav cls={cls} current={href.leveling(slug)} />}
        >
          {leveling.recommendation ? (
            <Markdown source={leveling.recommendation} className="max-w-[74ch] text-[15.5px] leading-relaxed" />
          ) : intro ? (
            <Markdown source={intro.markdown} className="max-w-[74ch]" />
          ) : null}
        </PageHeader>
      }
    >
      <Sections>
        {blocks.map((b) =>
          b.kind === 'gameplay' ? (
            <Section key={b.s.id} id={b.s.id} title="Gameplay by level">
              <SpellClass.Provider value={slug}>
                <GameplayByLevel markdown={b.s.markdown} />
              </SpellClass.Provider>
            </Section>
          ) : b.kind === 'path' && path && tree ? (
            <Section key="talent-path" id="talent-path" title="Talent path 10–60">
              {paths.length > 1 ? (
                <Tabs value={String(pathIndex)} onValueChange={(v) => setPathIndex(Number(v))}>
                  <TabsList aria-label="Leveling paths" className="mb-4">
                    {paths.map((p, i) => (
                      <TabsTrigger key={p.id} value={String(i)}>
                        {pathName(p)}
                        {p.respecAt ? <span className="text-xs text-muted-foreground">respec {p.respecAt}</span> : null}
                        {p.end ? <span className="text-xs tabular text-muted-foreground">{p.end.split}</span> : null}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </Tabs>
              ) : null}
              <p className="mb-4 text-[13.5px] text-muted-foreground">
                {path.title}
                {path.subtitle ? ` · ${path.subtitle}` : ''}
              </p>
              <LevelingTimeline key={path.id} path={path} tree={tree} rgb={rgb} cls={slug} />
              {pathSection ? (
                <details className="group mt-5 rounded-lg border">
                  <summary className="cursor-pointer list-none px-4 py-2.5 text-[13.5px] font-medium text-link">
                    <span className="group-open:hidden">The guide&rsquo;s table and notes for this path</span>
                    <span className="hidden group-open:inline">Hide the table and notes</span>
                  </summary>
                  <div className="border-t px-4 py-3">
                    <Markdown source={pathSection.markdown} />
                  </div>
                </details>
              ) : null}
              {/* every talent-order section stays reachable, including paths not selected */}
              {[...pathSections]
                .filter((pid) => pid !== pathSection?.id)
                .map((pid) => {
                  const s = leveling.sections.find((x) => x.id === pid)!;
                  return (
                    <details key={pid} id={pid} className="group mt-2 rounded-lg border">
                      <summary className="cursor-pointer list-none px-4 py-2.5 text-[13.5px] font-medium text-muted-foreground hover:text-foreground">
                        {cleanHeading(s.heading)}
                      </summary>
                      <div className="border-t px-4 py-3">
                        <Markdown source={s.markdown} />
                      </div>
                    </details>
                  );
                })}
              {pathSection ? <span id={pathSection.id} className="block" aria-hidden="true" /> : null}
            </Section>
          ) : b.kind === 'section' ? (
            <Section key={b.s.id} id={b.s.id} title={cleanHeading(b.s.heading)}>
              <Markdown source={b.s.markdown} />
            </Section>
          ) : null,
        )}
        {intro && leveling.recommendation ? (
          <section aria-label="Introduction">
            <details className="rounded-lg border">
              <summary className="cursor-pointer list-none px-4 py-2.5 text-[13.5px] font-medium text-muted-foreground hover:text-foreground">
                The guide&rsquo;s full introduction
              </summary>
              <div className="border-t px-4 py-3">
                <Markdown source={intro.markdown} />
              </div>
            </details>
          </section>
        ) : null}
      </Sections>
    </Page>
  );
}
