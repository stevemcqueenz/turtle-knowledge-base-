import { meta } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { Page, PageHeader, Section, Sections } from '../components/layout/Page';
import { REPO_URL } from '../components/Footer';
import { TurtleLogo } from '../components/Icons';

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
  return Number.isNaN(d.getTime()) ? date : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' });
}

export function AboutPage() {
  useScrollReset('about');
  const timeline = (meta.timeline ?? {}) as Timeline;
  const events = EVENTS.filter(([k]) => timeline[k]);

  return (
    <Page
      toc={[
        { id: 'what', label: 'What this is' },
        { id: 'method', label: 'How it was made' },
        { id: 'citations', label: 'Reading a citation' },
        { id: 'bots', label: 'For bot developers' },
        { id: 'timeline', label: 'The last patch' },
        { id: 'notes', label: 'Sources' },
      ]}
      header={
        <PageHeader
          crumbs={[{ label: 'Home', href: href.home() }, { label: 'About' }]}
          icon={<TurtleLogo className="h-12 w-12" />}
          title="About the archive"
          meta={<span>Built {meta.generatedAt?.slice(0, 10) ?? '—'}{meta.repoCommit ? ` from ${String(meta.repoCommit).slice(0, 7)}` : ''}</span>}
        />
      }
    >
      <Sections className="max-w-[74ch]">
        <Section id="what" title="What this is">
          <p className="leading-relaxed">
            Turtle WoW was a &ldquo;Classic+&rdquo; vanilla server. It reworked every class, added races, dungeons and raids, and had a
            community that tested all of it. The server closed on 15 May 2026. This site keeps how its players played each class in
            the final patch, 1.18.1.
          </p>
        </Section>

        <Section id="method" title="How it was made">
          <ol className="list-decimal space-y-2 pl-5 leading-relaxed marker:text-muted-foreground">
            <li>
              Every class channel of the archived Discord was read for the 1.18.1 era, from the patch announcement to the shutdown. The
              forum and the wiki were read as secondary sources.
            </li>
            <li>
              Per class: which spec for what, builds, stat caps, rotations, consumables and mistakes. Disagreements are marked contested;
              missing information is listed as a gap.
            </li>
            <li>Every recommendation links to the message it came from. Builds were checked against the 1.18.1 talent trees.</li>
          </ol>
        </Section>

        <Section id="citations" title="Reading a citation">
          <div className="grid gap-5 sm:grid-cols-[minmax(0,1fr)_15rem]">
            <div className="space-y-3 leading-relaxed">
              <p>
                The small <span className="cite-mark pointer-events-none !top-0" aria-hidden="true">2</span> after a sentence stands for
                its sources. Hover or focus it to read the messages; click it to list a link per source.
              </p>
              <p className="text-muted-foreground">
                A Discord link opens the message&rsquo;s line in{' '}
                <code className="rounded bg-muted px-1 font-mono text-[0.85em]">structured/discord/evidence-&lt;channel&gt;.jsonl</code>.
                Forum links stop working after the forum closes on 16 October 2026; the post ids and quotes stay in the repository.
              </p>
            </div>
            <div className="wow-tt self-start p-3" aria-hidden="true">
              <p className="wow-tt-title">Kolima</p>
              <p className="wow-tt-meta">Discord #mage · 2026-03-16</p>
              <p className="mt-1">open with frostbolt once or twice, fireblast as it gets close and wand to finish</p>
              <p className="mt-1 text-[11.5px] text-[#71d5ff]">Open in the archive ↗</p>
            </div>
          </div>
        </Section>

        <Section id="bots" title="For bot developers">
          <p className="leading-relaxed">
            Each spec has a YAML playbook in{' '}
            <code className="rounded bg-muted px-1 font-mono text-[0.85em]">structured/classes/&lt;class&gt;/&lt;spec&gt;-&lt;role&gt;.yaml</code>:
            talent points with spell ids, the leveling order, stat priority and caps, numbered single-target and AoE priorities, the
            level-60 <code className="rounded bg-muted px-1 font-mono text-[0.85em]">play_loop</code>, per-bracket{' '}
            <code className="rounded bg-muted px-1 font-mono text-[0.85em]">leveling_gameplay</code>, cooldowns, resource rules and
            consumables, each entry cited. The &ldquo;For bots&rdquo; section of a spec page shows it and downloads it as JSON.
          </p>
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="link mt-2 inline-block text-sm">
            The repository ↗
          </a>
        </Section>

        <Section id="timeline" title="The last patch">
          <dl className="divide-y rounded-lg border text-sm">
            {events.map(([k, label]) => (
              <div key={k} className="grid grid-cols-[7.5rem_1fr] gap-3 px-4 py-2">
                <dt className="tabular text-muted-foreground">{fmt(timeline[k])}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="notes" title="Sources">
          <p className="text-sm leading-relaxed text-muted-foreground">{meta.notes}</p>
          <p className="mt-3 text-sm">
            The first version of this knowledge base was built from the forum alone. It is superseded by the class guides but kept:{' '}
            <a href={href.archive()} className="link">
              forum-era research
            </a>
            .
          </p>
        </Section>
      </Sections>
    </Page>
  );
}
