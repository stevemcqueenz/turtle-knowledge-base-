import { useMemo, useState } from 'react';
import { classes, core, meta } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { plainText } from '../lib/markdown';
import { INTENTS, bestFor, rankFor, type Intent } from '../lib/grades';
import { prefetchClass } from '../data';
import type { ClassSummary } from '../types';
import { ClassMark, useClassInk } from '../components/ui/ClassMark';
import { Grade } from '../components/ui/Grade';
import {
  ArrowRightIcon,
  CastleIcon,
  CodeIcon,
  CoinsIcon,
  CompassIcon,
  CrossedSwordsIcon,
  HealIcon,
  QuoteIcon,
  SearchIcon,
  ShieldIcon,
  SwordIcon,
  TurtleIcon,
} from '../components/Icons';

const TIMELINE: [string, string][] = [
  ['patch_1181_released', 'Patch 1.18.1 released'],
  ['shutdown_announced', 'Shutdown announced'],
  ['servers_offline', 'Servers go offline'],
  ['website_forum_closure', 'Website and forum close'],
];

function shortDate(date: string): string {
  const d = new Date(`${date}T00:00:00Z`);
  return Number.isNaN(d.getTime())
    ? date
    : d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

const INTENT_ICON: Record<string, (p: { className?: string }) => JSX.Element> = {
  level: CompassIcon,
  'raid-dps': SwordIcon,
  tank: ShieldIcon,
  heal: HealIcon,
  pvp: CrossedSwordsIcon,
  farm: CoinsIcon,
};

function firstSentence(md: string | null | undefined, max = 150): string {
  const text = plainText(md ?? '', 600).replace(/^[-*]\s+/, '').replace(/:?\s[-*]\s+/g, ': ');
  const m = /^[\s\S]*?[.!?](?=\s|$)/.exec(text);
  let s = (m ? m[0] : text).trim();
  s = s.charAt(0).toUpperCase() + s.slice(1);
  return s.length > max ? `${s.slice(0, max).replace(/\s+\S*$/, '')}…` : s;
}

function ClassCard({ cls }: { cls: ClassSummary }) {
  const { ink, rgb } = useClassInk(cls.color);
  const raid = bestFor(cls, 'raid');
  const level = bestFor(cls, 'leveling');
  const line = firstSentence(cls.recommendation ?? cls.summary, 130);
  return (
    <a
      href={href.class(cls.slug)}
      onMouseEnter={() => prefetchClass(cls.slug)}
      onFocus={() => prefetchClass(cls.slug)}
      className="card group relative flex min-w-0 flex-col gap-3 overflow-hidden p-4 transition-transform duration-200 hover:-translate-y-0.5 sm:p-5"
      style={{ ['--cc' as string]: rgb }}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, rgb(${rgb} / 0.9), transparent)` }}
      />
      <span className="flex items-center gap-3">
        <ClassMark name={cls.name} color={cls.color} size="lg" />
        <span className="min-w-0">
          <span className="display block text-[1.35rem] leading-tight" style={{ color: ink }}>
            {cls.name}
          </span>
          <span className="block text-xs text-muted">
            {cls.playbooks.filter((p) => p.role !== 'pvp').length} spec guides · leveling · PvP
          </span>
        </span>
        <ArrowRightIcon className="ml-auto h-4 w-4 text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
      </span>
      {line ? <span className="line-clamp-3 text-[0.92rem] leading-relaxed text-muted">{line}</span> : null}
      <span className="mt-auto grid grid-cols-2 gap-2 border-t pt-3 text-xs">
        {[
          ['Raid', raid],
          ['Level', level],
        ].map(([label, best]) =>
          best && typeof best === 'object' ? (
            <span key={label as string} className="flex min-w-0 items-center gap-2">
              <Grade cell={{ grade: best.grade, label: best.grade, contested: false }} column={label as string} size="sm" />
              <span className="min-w-0">
                <span className="block text-[10px] uppercase tracking-wider text-muted">{label as string}</span>
                <span className="block truncate font-medium text-ink">{best.rows.map((r) => r.spec).join(' · ')}</span>
              </span>
            </span>
          ) : null,
        )}
      </span>
    </a>
  );
}

function IntentPanel() {
  const [intentId, setIntentId] = useState(INTENTS[0].id);
  const [showAll, setShowAll] = useState(false);
  const intent: Intent = INTENTS.find((i) => i.id === intentId) ?? INTENTS[0];
  const ranked = useMemo(() => rankFor(intent, classes), [intent]);
  const visible = showAll ? ranked : ranked.slice(0, 9);

  return (
    <section aria-labelledby="intent-title" className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="eyebrow">Start from what you want to do</p>
          <h2 id="intent-title" className="display mt-1 text-2xl sm:text-[1.75rem]">
            Best picks by goal
          </h2>
        </div>
        <a href={href.matrix()} className="link text-sm font-medium">
          The full viability board
        </a>
      </div>

      <div role="tablist" aria-label="Goal" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
        {INTENTS.map((i) => {
          const Icon = INTENT_ICON[i.id];
          const active = i.id === intent.id;
          return (
            <button
              key={i.id}
              role="tab"
              type="button"
              aria-selected={active}
              aria-controls="intent-panel"
              onClick={() => {
                setIntentId(i.id);
                setShowAll(false);
              }}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                active ? 'bg-accent text-[rgb(var(--c-accent-ink))]' : 'hairline bg-surface text-muted hover:text-ink'
              }`}
            >
              <Icon className="h-4 w-4" />
              {i.label}
            </button>
          );
        })}
        <a
          href={href.instances()}
          className="inline-flex shrink-0 items-center gap-2 rounded-full hairline bg-surface px-4 py-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
        >
          <CastleIcon className="h-4 w-4" />
          Dungeons &amp; raids
        </a>
      </div>

      <div id="intent-panel" role="tabpanel" aria-label={intent.label} className="card overflow-hidden">
        <p className="border-b px-4 py-3 text-sm text-muted sm:px-5">{intent.blurb}</p>
        <ol className="divide-y">
          {visible.map((r, i) => (
            <li key={`${r.cls.slug}-${r.row.spec}`}>
              <a
                href={r.target}
                onMouseEnter={() => prefetchClass(r.cls.slug)}
                className="grid grid-cols-[1.6rem_auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 transition-colors hover:bg-surface2/60 sm:px-5"
              >
                <span className="text-right font-serif text-sm text-muted tabular-nums">{i + 1}</span>
                <Grade cell={r.cell} column={intent.label} />
                <span className="min-w-0">
                  <span className="flex flex-wrap items-baseline gap-x-2">
                    <span className="font-semibold">
                      {r.row.spec} <SpecClass cls={r.cls} />
                    </span>
                    {r.row.detail ? <span className="text-xs text-muted">{r.row.detail}</span> : null}
                  </span>
                  <span className="block truncate text-sm text-muted">{firstSentence(r.cell.note, 140)}</span>
                </span>
                <ArrowRightIcon className="h-4 w-4 text-muted" />
              </a>
            </li>
          ))}
        </ol>
        {ranked.length > visible.length ? (
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="w-full border-t px-4 py-3 text-sm font-semibold text-accent hover:bg-surface2/60"
          >
            Show all {ranked.length}
          </button>
        ) : null}
      </div>
    </section>
  );
}

function SpecClass({ cls }: { cls: ClassSummary }) {
  const { ink } = useClassInk(cls.color);
  return <span style={{ color: ink }}>{cls.name}</span>;
}

export function Home({ onSearch }: { onSearch: () => void }) {
  useScrollReset('home');
  const specCount = classes.reduce((n, c) => n + c.playbooks.length, 0);
  const cited = meta.discordCitations?.resolved ?? 0;
  const instanceCount = core.instances?.pages.length ?? 0;
  const timeline = (meta.timeline ?? {}) as Record<string, string>;
  // "https://…p=171512#p171512 (Torta, 2026-03-20 22:06 UTC: 'Thanks everyone …')"
  const q = /^(https:\S+) \((\w+), [^:]+:\d\d UTC: '([^']+)'\)/.exec(timeline.patch_1181_released_source ?? '');
  const quote = q ? { url: q[1], who: q[2], text: q[3] } : null;

  return (
    <div>
      <section className="hero-wash border-b">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16">
          <div className="min-w-0">
            <p className="eyebrow flex flex-wrap items-center gap-x-2 gap-y-1">
              <span>Turtle WoW 1.18.1 · &ldquo;Nightmares of Ursol&rdquo;</span>
              <span aria-hidden="true" className="text-accent">
                ◆
              </span>
              <span>Server closed 15 May 2026</span>
            </p>
            <h1 className="display mt-4 max-w-4xl text-[2.35rem] leading-[1.08] sm:text-6xl">
              How the community played every class, in the final patch.
            </h1>
            <p className="mt-5 max-w-2xl text-[1.06rem] leading-relaxed text-muted sm:text-lg">
              Class guides for Turtle WoW&rsquo;s last patch, distilled from a full read of the archived Discord and
              the forum and wiki. Each recommendation links to the message it came from. Quick answers come first;
              the full guide is below them.
            </p>

            <button
              type="button"
              onClick={onSearch}
              className="mt-8 flex w-full max-w-xl items-center gap-3 rounded-2xl hairline bg-surface px-4 py-3.5 text-left text-muted shadow-sm transition-colors hover:text-ink"
            >
              <SearchIcon className="h-5 w-5" />
              <span className="flex-1">Search a class, spec, boss or term</span>
              <kbd className="rounded-md border px-1.5 py-0.5 font-mono text-[11px]">/</kbd>
            </button>

            <dl className="mt-9 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
              {[
                [String(classes.length), 'classes'],
                [String(specCount), 'spec & PvP guides'],
                [String(instanceCount), 'dungeons & raids'],
                [cited ? cited.toLocaleString('en-US') : '—', 'cited messages'],
              ].map(([n, label]) => (
                <div key={label} className="flex flex-col-reverse border-l border-accent/40 pl-3">
                  <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
                  <dd className="font-serif text-2xl font-semibold tabular-nums text-ink sm:text-3xl">{n}</dd>
                </div>
              ))}
            </dl>
          </div>

          <aside aria-label="The last patch" className="hidden self-end lg:block">
            <div className="card relative overflow-hidden p-6">
              <TurtleIcon className="absolute -right-6 -top-6 h-32 w-32 text-accent/10" />
              <p className="eyebrow">The last patch</p>
              <ol className="mt-4 space-y-4 border-l border-accent/40 pl-4">
                {TIMELINE.filter(([k]) => timeline[k]).map(([k, label]) => (
                  <li key={k} className="relative">
                    <span aria-hidden="true" className="absolute -left-[1.3rem] top-1.5 h-2 w-2 rounded-full bg-accent" />
                    <p className="font-serif font-semibold">{shortDate(timeline[k])}</p>
                    <p className="text-sm text-muted">{label}</p>
                  </li>
                ))}
              </ol>
              {quote ? (
                <a
                  href={quote.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block border-t pt-4 font-serif text-[0.95rem] italic leading-relaxed text-muted hover:text-ink"
                >
                  &ldquo;{quote.text}.&rdquo;
                  <span className="mt-1 block font-sans text-xs not-italic">
                    {quote.who}, Turtle WoW team, on release day ↗
                  </span>
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-12 sm:px-6 sm:py-16">
        <section aria-labelledby="classes-title" className="space-y-5">
          <div>
            <p className="eyebrow">Nine classes</p>
            <h2 id="classes-title" className="display mt-1 text-2xl sm:text-[1.75rem]">
              Choose your class
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {classes.map((c) => (
              <ClassCard key={c.slug} cls={c} />
            ))}
          </div>
        </section>

        <IntentPanel />

        <section aria-labelledby="how-title" className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          <div className="card p-6 sm:p-7">
            <p className="eyebrow">How to read these guides</p>
            <h2 id="how-title" className="display mt-1 text-2xl">
              Every claim can be checked
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              A small <span className="cite-mark pointer-events-none !top-0" aria-hidden="true" /> after a sentence
              marks its source. Hover or focus it to read the original messages, and click it to show links to each
              one in the archive. Ratings such as{' '}
              <Grade cell={{ grade: 'S', label: 'S', contested: false }} column="Example" size="sm" /> and{' '}
              <Grade cell={{ grade: 'B', label: 'B', contested: false }} column="Example" size="sm" /> are the
              guide&rsquo;s summary of what players reported. An asterisk means players disagreed.
            </p>
            <a href={href.about()} className="link mt-4 inline-block text-sm font-semibold">
              How the archive was made
            </a>
          </div>
          <div className="card flex flex-col p-6 sm:p-7">
            <p className="eyebrow flex items-center gap-2">
              <CodeIcon className="h-3.5 w-3.5" /> For bot developers
            </p>
            <h2 className="display mt-1 text-2xl">Machine-readable playbooks</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Each spec page has a playbook: the talent points, stat priority and caps, the numbered single-target
              and AoE priorities with their conditions, cooldowns and consumables, and a citation for every entry.
              You can copy it, download it as JSON or open the YAML source.
            </p>
            <p className="mt-auto flex items-center gap-2 pt-4 text-sm text-muted">
              <QuoteIcon className="h-4 w-4 text-accent" /> Look for &ldquo;For bots&rdquo; on any spec page.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
