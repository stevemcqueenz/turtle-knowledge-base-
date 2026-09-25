import { classes, core, glossary, meta } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { PageHero } from '../components/layout/Page';
import { REPO_URL } from '../components/Footer';
import { CodeIcon, QuoteIcon } from '../components/Icons';

type Timeline = Record<string, string>;

const EVENTS: [string, string][] = [
  ['patch_1181_announced', '1.18.1 announced (preliminary patch notes)'],
  ['patch_1181_released', '1.18.1 “Nightmares of Ursol” released'],
  ['shutdown_announced', 'Shutdown announced'],
  ['servers_offline', 'Servers offline'],
  ['website_forum_closure', 'Website and forum close'],
];

function fmt(date: string): string {
  const d = new Date(`${date}T00:00:00Z`);
  return Number.isNaN(d.getTime()) ? date : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

export function AboutPage() {
  useScrollReset('about');
  const timeline = (meta.timeline ?? {}) as Timeline;
  const specCount = classes.reduce((n, c) => n + c.playbooks.length, 0);
  const stats: [string, string][] = [
    [String(classes.length), 'class guides'],
    [String(specCount), 'spec and PvP playbooks'],
    [String(core.instances?.pages.length ?? 0), 'dungeon and raid pages'],
    [(meta.discordCitations?.resolved ?? 0).toLocaleString('en-US'), 'Discord citations'],
    [String(glossary.length), 'glossary terms'],
  ];

  return (
    <div>
      <PageHero crumbs={[{ label: 'Home', href: href.home() }, { label: 'About' }]}>
        <p className="eyebrow">About this archive</p>
        <h1 className="display mt-2 max-w-3xl text-[2.1rem] leading-[1.1] sm:text-5xl">
          What a community learned, kept where it can be checked
        </h1>
        <p className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-muted">
          Turtle WoW was a &ldquo;Classic+&rdquo; vanilla server. It reworked every class and added races,
          dungeons and raids, and it had a large community that tested all of it. The server closed on 15 May
          2026. This site keeps how its players played each class in the final patch, 1.18.1.
        </p>
      </PageHero>

      <div className="mx-auto max-w-5xl space-y-14 px-4 py-12 sm:px-6">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-5">
          {stats.map(([n, label]) => (
            <div key={label} className="flex flex-col-reverse border-l border-accent/40 pl-3">
              <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
              <dd className="font-serif text-3xl font-semibold tabular-nums">{n}</dd>
            </div>
          ))}
        </dl>

        <section aria-labelledby="how-h" className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow">Method</p>
            <h2 id="how-h" className="display mt-1 text-[1.75rem]">
              How the guides were made
            </h2>
          </div>
          <ol className="space-y-5">
            {[
              [
                'Read everything',
                'Every class channel of the archived Turtle WoW Discord was read in full for the 1.18.1 era, from the patch announcement to the shutdown. The forum and the community wiki were read as secondary sources.',
              ],
              [
                'Distill per class',
                'For each class, what players actually recommended: which spec for what, builds, stat caps, rotations, consumables and mistakes. Disagreements are marked contested. Missing information is listed as a gap.',
              ],
              [
                'Cite every claim',
                'Every recommendation links to the verbatim message it came from, kept in the repository’s evidence files. The builds were validated against the 1.18.1 talent trees.',
              ],
            ].map(([t, d], i) => (
              <li key={t} className="grid grid-cols-[2.2rem_1fr] gap-3">
                <span className="font-serif text-2xl font-bold text-accent">{i + 1}</span>
                <span>
                  <span className="block font-serif text-lg font-semibold">{t}</span>
                  <span className="mt-1 block leading-relaxed text-muted">{d}</span>
                </span>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="cite-h" className="card grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr]">
          <QuoteIcon className="h-8 w-8 text-accent" />
          <div>
            <h2 id="cite-h" className="display text-[1.5rem]">
              Reading a citation
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              The small <span className="cite-mark pointer-events-none !top-0" aria-hidden="true">2</span> marker after a
              sentence stands for its sources, with a number when there are several. Hover or focus it to read
              the messages: who wrote them, when, in which channel, and the text. Click it to show one link per
              source. A Discord link opens the message&rsquo;s line in{' '}
              <code className="rounded bg-surface2 px-1 font-mono text-[0.85em]">structured/discord/evidence-&lt;channel&gt;.jsonl</code>.
              A forum link opens the original post, but forum links stop working after the forum closes on 16
              October 2026. The post ids and quoted text stay in the repository.
            </p>
            <p className="mt-3 leading-relaxed text-muted">
              Forum and wiki sources carry a tier. <strong className="text-ink">Staff</strong> (the Turtle WoW team)
              is the authority on intent, <strong className="text-ink">player</strong> sources report experience,
              and the <strong className="text-ink">wiki</strong> is the least reliable.
            </p>
          </div>
        </section>

        <section aria-labelledby="bots-h" id="bots" className="card grid gap-6 p-6 sm:p-8 md:grid-cols-[auto_1fr]">
          <CodeIcon className="h-8 w-8 text-accent" />
          <div>
            <h2 id="bots-h" className="display text-[1.5rem]">
              For bot developers
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Each spec has a YAML playbook in{' '}
              <code className="rounded bg-surface2 px-1 font-mono text-[0.85em]">structured/classes/&lt;class&gt;/&lt;spec&gt;-&lt;role&gt;.yaml</code>.
              It holds the talent points with spell ids, the leveling order, stat priority and caps, numbered
              single-target and AoE priorities (action + condition), cooldowns, resource rules and consumables,
              and a citation for every entry. The &ldquo;For bots&rdquo; section of each spec page shows the file and
              lets you download it as JSON.
            </p>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="link mt-3 inline-block font-semibold">
              The repository ↗
            </a>
          </div>
        </section>

        <section aria-labelledby="time-h">
          <p className="eyebrow">Timeline</p>
          <h2 id="time-h" className="display mt-1 text-[1.75rem]">
            The last patch
          </h2>
          <ol className="mt-6 space-y-0 border-l-2 border-accent/40 pl-6">
            {EVENTS.filter(([k]) => timeline[k]).map(([k, label]) => (
              <li key={k} className="relative pb-6 last:pb-0">
                <span aria-hidden="true" className="absolute -left-[1.95rem] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-[rgb(var(--c-bg))]" />
                <p className="font-serif text-lg font-semibold">{fmt(timeline[k])}</p>
                <p className="text-muted">{label}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="notes-h" className="grid gap-6 md:grid-cols-2">
          <div>
            <h2 id="notes-h" className="display text-[1.5rem]">
              Sources, in the pipeline&rsquo;s words
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{meta.notes}</p>
          </div>
          <div>
            <h2 className="display text-[1.5rem]">The research archive</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              The first version of this knowledge base was built from the forum alone: a spec × role matrix and
              per-spec syntheses. It is superseded by the class guides but kept for reference.
            </p>
            <a href={href.archive()} className="link mt-3 inline-block text-sm font-semibold">
              Open the forum-era research
            </a>
            <p className="mt-4 text-xs text-muted">
              Built {meta.generatedAt?.slice(0, 10) ?? '—'}
              {meta.repoCommit ? ` from commit ${meta.repoCommit}` : ''}.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
