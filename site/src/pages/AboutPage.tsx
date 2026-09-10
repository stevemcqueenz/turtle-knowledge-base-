import { classes, glossary, matrix, meta } from '../lib/site';
import { useScrollReset } from '../lib/router';
import { Card } from '../components/Card';
import { Callout } from '../components/Callout';
import { YamlValue } from '../components/YamlValue';
import { isEmptyValue } from '../lib/site';

const TIERS: { label: string; color: string }[] = [
  { label: 'staff', color: '#8dc63f' },
  { label: 'player', color: '#8a8f98' },
  { label: 'wiki', color: '#b07cf0' },
];

export function AboutPage() {
  useScrollReset('about');
  const counts = meta.counts ?? {
    classes: classes.length,
    playbooks: 0,
    matrixRows: matrix.rows.length,
    glossaryTerms: glossary.length,
  };

  const stats: [string, number | string][] = [
    ['Classes', counts.classes],
    ['Playbooks', counts.playbooks],
    ['Matrix rows', counts.matrixRows],
    ['Glossary terms', counts.glossaryTerms],
  ];

  return (
    <div className="mx-auto max-w-4xl px-3 py-6 sm:px-5">
      <h1 className="text-2xl font-semibold">About this data</h1>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map(([label, value]) => (
          <Card key={label} className="text-center">
            <div className="text-2xl font-semibold">{value}</div>
            <div className="text-xs uppercase tracking-wider text-muted">{label}</div>
          </Card>
        ))}
      </div>

      <Card as="section" className="mt-4">
        <h2 className="mb-2 text-lg font-semibold">Source tiers</h2>
        <ul className="flex flex-wrap gap-2">
          {TIERS.map((t) => (
            <li key={t.label} className="chip hairline bg-surface2 text-sm">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: t.color }} aria-hidden="true" />
              {t.label}
            </li>
          ))}
        </ul>
        <p className="mt-3 whitespace-pre-line text-sm text-muted">{meta.notes}</p>
      </Card>

      <Card as="section" className="mt-4">
        <h2 className="mb-2 text-lg font-semibold">Build</h2>
        <dl className="grid grid-cols-1 gap-x-4 gap-y-1 text-sm sm:grid-cols-[10rem_1fr]">
          <dt className="text-muted">Generated</dt>
          <dd>{meta.generatedAt ?? 'unknown'}</dd>
          <dt className="text-muted">Repository commit</dt>
          <dd className="font-mono text-xs">{meta.repoCommit ?? 'unknown'}</dd>
        </dl>
      </Card>

      {!isEmptyValue(meta.timeline) ? (
        <Card as="section" className="mt-4">
          <h2 className="mb-2 text-lg font-semibold">Timeline</h2>
          <YamlValue value={meta.timeline} />
        </Card>
      ) : null}

      <Callout tone="info" className="mt-4">
        Nothing on this site is invented: every page is generated from the repository&rsquo;s synthesis and structured
        files, and gaps are stated where the sources are silent.
      </Callout>
    </div>
  );
}
