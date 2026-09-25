import { useState } from 'react';
import type { Section as SectionData } from '../types';
import { getClassSummary } from '../lib/site';
import { href, useScrollReset, useSectionScroll } from '../lib/router';
import { cellFor, gradeScore } from '../lib/grades';
import { pathName, sectionOfPath } from '../lib/leveling';
import { useClassEntry } from '../data';
import { Markdown } from '../components/Markdown';
import { Loading, PageHero, Section, WithToc } from '../components/layout/Page';
import type { TocItem } from '../components/layout/Toc';
import { useClassInk } from '../components/ui/ClassMark';
import { Grade } from '../components/ui/Grade';
import { LevelingTimeline } from '../components/leveling/LevelingTimeline';
import { cleanHeading } from '../components/guide/util';
import { NotFound } from './NotFound';

const tocLabel = (h: string) => cleanHeading(h).replace(/\s*\([^)]*\)\s*$/, '');

export function LevelingPage({ slug }: { slug: string }) {
  const cls = getClassSummary(slug);
  const entry = useClassEntry(slug);
  useScrollReset(`${slug}/leveling`);
  useSectionScroll(!!entry);
  const { ink, rgb } = useClassInk(cls?.color ?? '#cccccc');
  const [pathIndex, setPathIndex] = useState(0);

  if (!cls || entry === null || (entry && !entry.leveling)) return <NotFound path={`#/class/${slug}/leveling`} />;
  if (!entry) return <Loading label={`Loading the ${cls.name} leveling guide`} />;

  const leveling = entry.leveling!;
  const paths = leveling.paths ?? [];
  const tree = entry.talentTree;
  const pathSections = new Set(paths.map((p) => sectionOfPath(leveling.sections, p)?.id).filter(Boolean) as string[]);
  const firstPathSection = leveling.sections.findIndex((s) => pathSections.has(s.id));
  const intro = leveling.sections.find((s) => s.heading === 'Introduction');
  const rest: SectionData[] = leveling.sections.filter((s) => s !== intro);
  const picks = (cls.viability?.rows ?? [])
    .map((row) => ({ row, cell: cellFor(row, 'leveling') }))
    .filter((p) => p.cell?.grade)
    .sort((a, b) => gradeScore(b.cell!.grade) - gradeScore(a.cell!.grade));

  // The talent-order sections collapse into one "Talent path" block where the first of them stood.
  const blocks: ({ kind: 'path' } | { kind: 'section'; s: SectionData })[] = [];
  rest.forEach((s) => {
    if (pathSections.has(s.id)) {
      if (leveling.sections.indexOf(s) === firstPathSection && tree && paths.length) blocks.push({ kind: 'path' });
      else if (!tree || !paths.length) blocks.push({ kind: 'section', s });
      return;
    }
    blocks.push({ kind: 'section', s });
  });

  const toc: TocItem[] = blocks.map((b) =>
    b.kind === 'path' ? { id: 'talent-path', label: 'Talent path 10–60' } : { id: b.s.id, label: tocLabel(b.s.heading) },
  );
  const path = paths[Math.min(pathIndex, paths.length - 1)];
  const pathSection = path ? sectionOfPath(leveling.sections, path) : undefined;

  return (
    <div>
      <PageHero
        rgb={rgb}
        crumbs={[{ label: 'Classes', href: href.home() }, { label: cls.name, href: href.class(slug) }, { label: 'Leveling' }]}
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-12">
          <div className="min-w-0">
            <p className="eyebrow">Leveling guide · 1 to 60 · patch 1.18.1</p>
            <h1 className="display mt-2 text-[2.1rem] leading-[1.1] sm:text-5xl">
              Leveling a <span style={{ color: ink }}>{cls.name}</span>
            </h1>
            {leveling.recommendation ? (
              <div className="mt-5 max-w-3xl">
                <p className="eyebrow mb-2 text-accent">The short answer</p>
                <Markdown source={leveling.recommendation} className="text-[1.03rem] sm:text-[1.08rem]" />
              </div>
            ) : intro ? (
              <Markdown source={intro.markdown} className="mt-5 max-w-3xl" />
            ) : null}
          </div>
          {picks.length ? (
            <aside className="card self-start p-4">
              <p className="eyebrow mb-3">Leveling ratings</p>
              <ul className="space-y-2">
                {picks.map(({ row, cell }) => (
                  <li key={row.spec} className="flex items-center gap-3 text-sm">
                    <Grade cell={cell!} column="Leveling" size="sm" />
                    <span className="font-medium">{row.spec}</span>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </div>
      </PageHero>

      <WithToc toc={toc}>
        <div className="space-y-14">
          {blocks.map((b) =>
            b.kind === 'path' && path && tree ? (
              <Section
                key="talent-path"
                id="talent-path"
                eyebrow="Talent points, level by level"
                title="Talent path 10–60"
              >
                {paths.length > 1 ? (
                  <div role="tablist" aria-label="Leveling paths" className="no-scrollbar -mx-4 mb-5 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
                    {paths.map((p, i) => (
                      <button
                        key={p.id}
                        role="tab"
                        type="button"
                        aria-selected={i === pathIndex}
                        onClick={() => setPathIndex(i)}
                        className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                          i === pathIndex ? 'bg-accent text-[rgb(var(--c-accent-ink))]' : 'hairline bg-surface text-muted hover:text-ink'
                        }`}
                      >
                        {pathName(p)}
                        {p.respecAt ? <span className="ml-1.5 text-xs opacity-75">respec {p.respecAt}</span> : null}
                        {p.end ? <span className="ml-1.5 text-xs tabular-nums opacity-75">{p.end.split}</span> : null}
                      </button>
                    ))}
                  </div>
                ) : null}
                <h3 className="mb-4 font-serif text-lg font-semibold">
                  {path.title}
                  {path.subtitle ? <span className="text-muted"> · {path.subtitle}</span> : null}
                </h3>
                <LevelingTimeline key={path.id} path={path} tree={tree} rgb={rgb} />
                {pathSection ? (
                  <details className="group mt-6 rounded-2xl hairline">
                    <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-accent sm:px-5">
                      <span className="group-open:hidden">The guide&rsquo;s table and notes for this path</span>
                      <span className="hidden group-open:inline">Hide the table and notes</span>
                    </summary>
                    <div className="border-t px-4 py-4 sm:px-5">
                      <Markdown source={pathSection.markdown} />
                    </div>
                  </details>
                ) : null}
                {/* every talent-order section stays reachable, including paths not selected */}
                {[...pathSections]
                  .filter((id) => id !== pathSection?.id)
                  .map((id) => {
                    const s = leveling.sections.find((x) => x.id === id)!;
                    return (
                      <details key={id} id={id} className="group mt-3 rounded-2xl hairline">
                        <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-muted hover:text-ink sm:px-5">
                          {cleanHeading(s.heading)}
                        </summary>
                        <div className="border-t px-4 py-4 sm:px-5">
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
            <details className="rounded-2xl hairline">
              <summary className="cursor-pointer list-none px-4 py-3 text-sm font-semibold text-muted hover:text-ink sm:px-5">
                The guide&rsquo;s full introduction
              </summary>
              <div className="border-t px-4 py-4 sm:px-5">
                <Markdown source={intro.markdown} />
              </div>
            </details>
          ) : null}
        </div>
      </WithToc>
    </div>
  );
}
