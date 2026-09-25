import { useMemo, useState } from 'react';
import { ArrowRight, Castle, Coins, HeartPulse, LayoutGrid, Shield, Swords, TrendingUp, Crosshair } from 'lucide-react';
import { classes, core } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { generalGuides, quickLabel } from '../lib/guides';
import { plainText } from '../lib/markdown';
import { INTENTS, bestFor, rankFor, type Intent } from '../lib/grades';
import { prefetchClass } from '../data';
import type { ClassSummary } from '../types';
import { ClassMark, useClassInk, useClassVars } from '../components/ui/ClassMark';
import { Grade } from '../components/ui/Grade';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Button } from '../components/ui/button';
import { RoleIcon } from '../components/class/RoleIcon';
import { GameIcon } from '../components/ui/GameIcon';
import { specIcon } from '../lib/icons';
import { distinctSpecLabel } from '../lib/site';
import { cn } from '../lib/utils';

const INTENT_ICON: Record<string, typeof Swords> = {
  level: TrendingUp,
  'raid-dps': Swords,
  tank: Shield,
  heal: HeartPulse,
  pvp: Crosshair,
  farm: Coins,
};

function firstSentence(md: string | null | undefined, max = 150): string {
  const text = plainText(md ?? '', 600).replace(/^[-*]\s+/, '').replace(/:?\s[-*]\s+/g, ': ');
  const m = /^[\s\S]*?[.!?](?=\s|$)/.exec(text);
  let s = (m ? m[0] : text).trim();
  s = s.charAt(0).toUpperCase() + s.slice(1);
  return s.length > max ? `${s.slice(0, max).replace(/\s+\S*$/, '')}…` : s;
}

/** One class in the picker: emblem, name, its best raid and leveling picks, its spec pages. */
function ClassTile({ cls }: { cls: ClassSummary }) {
  const { ink } = useClassInk(cls.color);
  const vars = useClassVars(cls.color);
  const raid = bestFor(cls, 'raid');
  const level = bestFor(cls, 'leveling');
  const specs = cls.playbooks.filter((p) => p.role !== 'pvp');
  return (
    <li className="group relative flex flex-col bg-card px-4 py-3 transition-colors hover:bg-accent/40 sm:py-4" style={vars}>
      <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[2px] bg-[rgb(var(--cc-raw))] opacity-70" />
      <a
        href={href.class(cls.slug)}
        onMouseEnter={() => prefetchClass(cls.slug)}
        onFocus={() => prefetchClass(cls.slug)}
        className="flex items-center gap-3 after:absolute after:inset-0 after:content-['']"
      >
        <ClassMark name={cls.name} color={cls.color} size="lg" />
        <span className="min-w-0">
          <span className="block text-base font-semibold leading-tight" style={{ color: ink }}>
            {cls.name}
          </span>
          <span className="block text-xs text-muted-foreground">
            {specs.length} specs · leveling · PvP
          </span>
        </span>
        <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
      </a>
      <dl className="mt-3 grid grid-cols-[3.25rem_1fr] items-center gap-x-2 gap-y-1.5 text-[13px]">
        {(
          [
            ['Raid', raid],
            ['Level', level],
          ] as const
        ).map(([label, best]) =>
          best ? (
            <div key={label} className="contents">
              <dt className="text-muted-foreground">{label}</dt>
              <dd className="flex min-w-0 items-center gap-2">
                <Grade cell={{ grade: best.grade, label: best.grade, contested: false }} column={label} size="sm" />
                <span className="truncate">{best.rows.map((r) => r.spec).join(', ')}</span>
              </dd>
            </div>
          ) : null,
        )}
      </dl>
      <ul className="relative z-10 mt-3 hidden flex-wrap gap-1.5 sm:flex">
        {specs.map((p) => (
          <li key={p.id}>
            <a
              href={href.playbook(cls.slug, p.id)}
              onMouseEnter={() => prefetchClass(cls.slug)}
              className="inline-flex items-center gap-1 rounded-[4px] border bg-background/60 px-1.5 py-0.5 text-xs text-muted-foreground transition-colors hover:border-[rgb(var(--cc)/0.6)] hover:text-foreground"
            >
              <GameIcon
                icon={specIcon(cls.slug, p.spec)}
                size={14}
                className="rounded-[2px]"
                fallback={<RoleIcon role={p.role} className="h-3 w-3" />}
              />
              {distinctSpecLabel(p, specs, true)}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}

function SpecName({ cls, spec }: { cls: ClassSummary; spec: string }) {
  const { ink } = useClassInk(cls.color);
  return (
    <span className="font-medium">
      {spec} <span style={{ color: ink }}>{cls.name}</span>
    </span>
  );
}

function RankedList({ intent }: { intent: Intent }) {
  const [all, setAll] = useState(false);
  const ranked = useMemo(() => rankFor(intent, classes), [intent]);
  const shown = all ? ranked : ranked.slice(0, 8);
  return (
    <div className="overflow-hidden rounded-lg border">
      <p className="border-b bg-muted/40 px-4 py-2 text-[13px] text-muted-foreground">{intent.blurb}</p>
      <ol className="divide-y">
        {shown.map((r, i) => (
          <li key={`${r.cls.slug}-${r.row.spec}`}>
            <a
              href={r.target}
              onMouseEnter={() => prefetchClass(r.cls.slug)}
              className="grid grid-cols-[1.25rem_auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-2.5 transition-colors hover:bg-accent/50"
            >
              <span className="text-right text-xs tabular text-muted-foreground">{i + 1}</span>
              <Grade cell={r.cell} column={intent.label} />
              <span className="min-w-0">
                <span className="flex flex-wrap items-baseline gap-x-2 text-sm">
                  <SpecName cls={r.cls} spec={r.row.spec} />
                  {r.row.detail ? <span className="text-xs tabular text-muted-foreground">{r.row.detail}</span> : null}
                </span>
                <span className="block truncate text-[13px] text-muted-foreground">{firstSentence(r.cell.note, 150)}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
      {ranked.length > shown.length ? (
        <button type="button" onClick={() => setAll(true)} className="w-full border-t px-4 py-2 text-left text-[13px] font-medium text-link hover:bg-accent/40">
          Show all {ranked.length}
        </button>
      ) : null}
    </div>
  );
}

/** "By goal" quick links: dungeons and raids, the general guides that exist (professions, PvP, client setup, mechanics), the board. */
const QUICK = [
  { to: href.instances(), label: 'Dungeons & raids', icon: Castle },
  ...generalGuides.filter((g) => g.quick).map((g) => ({ to: g.route, label: quickLabel(g), icon: g.icon })),
  { to: href.matrix(), label: 'Viability board', icon: LayoutGrid },
];

export function Home() {
  useScrollReset('home');
  const [intent, setIntent] = useState(INTENTS[0].id);
  const raids = (core.instances?.pages ?? []).filter((p) => p.kind === 'raid');

  return (
    <div className="mx-auto w-full max-w-[76rem] px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pt-8">
      <header className="mb-7">
        <h1 className="text-[1.6rem] font-semibold tracking-tight sm:text-[1.85rem]">Turtle WoW class guides</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Patch 1.18.1. Built from the archived Turtle WoW Discord, forums and wiki. Every claim links to its source.
        </p>
      </header>

      <section aria-labelledby="classes-h">
        <h2 id="classes-h" className="sr-only">
          Classes
        </h2>
        <ul className="grid gap-px overflow-hidden rounded-lg border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <ClassTile key={c.slug} cls={c} />
          ))}
        </ul>
      </section>

      <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <section aria-labelledby="goal-h" className="min-w-0">
          <div className="mb-3 flex items-baseline justify-between gap-3">
            <h2 id="goal-h" className="text-[1.15rem] font-semibold tracking-tight">
              By goal
            </h2>
            <a href={href.matrix()} className="link text-[13px]">
              All ratings
            </a>
          </div>
          <Tabs value={intent} onValueChange={setIntent}>
            <TabsList variant="segmented" className="mb-3 w-full sm:w-auto">
              {INTENTS.map((i) => {
                const Icon = INTENT_ICON[i.id];
                return (
                  <TabsTrigger key={i.id} value={i.id} variant="segmented">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                    {i.short}
                  </TabsTrigger>
                );
              })}
            </TabsList>
            {INTENTS.map((i) => (
              <TabsContent key={i.id} value={i.id}>
                <RankedList intent={i} />
              </TabsContent>
            ))}
          </Tabs>
          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK.map(({ to, label, icon: Icon }) => (
              <Button key={to} asChild variant="outline" size="sm">
                <a href={to}>
                  <Icon className="text-muted-foreground" />
                  {label}
                </a>
              </Button>
            ))}
          </div>
        </section>

        <aside className="space-y-8 text-sm">
          <section aria-labelledby="lvl-h">
            <h2 id="lvl-h" className="mb-2 text-sm font-semibold">
              Leveling 1–60
            </h2>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5 lg:grid-cols-1">
              {classes.map((c) => (
                <LevelLink key={c.slug} cls={c} />
              ))}
            </ul>
          </section>
          <section aria-labelledby="patch-h">
            <h2 id="patch-h" className="mb-2 text-sm font-semibold">
              What 1.18.1 changed
            </h2>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5 lg:grid-cols-1">
              {classes.map((c) => (
                <PatchLink key={c.slug} cls={c} />
              ))}
            </ul>
          </section>
          {raids.length ? (
            <section aria-labelledby="raids-h">
              <h2 id="raids-h" className="mb-2 text-sm font-semibold">
                Raids
              </h2>
              <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5 lg:grid-cols-1">
                {raids.map((r) => (
                  <li key={r.slug}>
                    <a href={href.instance(r.slug)} className="block truncate py-0.5 text-muted-foreground hover:text-foreground">
                      {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </aside>
      </div>
    </div>
  );
}

function LevelLink({ cls }: { cls: ClassSummary }) {
  const { ink } = useClassInk(cls.color);
  const best = bestFor(cls, 'leveling');
  if (!cls.leveling) return null;
  return (
    <li>
      <a href={href.leveling(cls.slug)} onMouseEnter={() => prefetchClass(cls.slug)} className={cn('flex items-center gap-2 py-0.5 hover:underline')}>
        <span style={{ color: ink }}>{cls.name}</span>
        {best ? <span className="truncate text-xs text-muted-foreground">{best.rows.map((r) => r.spec).join(', ')}</span> : null}
      </a>
    </li>
  );
}

function PatchLink({ cls }: { cls: ClassSummary }) {
  const { ink } = useClassInk(cls.color);
  const h = cls.readmeHeadings.find((x) => /1\.18\.1/.test(x.heading) && /chang/i.test(x.heading));
  if (!h) return null;
  return (
    <li>
      <a href={href.section(href.class(cls.slug), h.id)} onMouseEnter={() => prefetchClass(cls.slug)} className="block truncate py-0.5 hover:underline">
        <span style={{ color: ink }}>{cls.name}</span>
      </a>
    </li>
  );
}
