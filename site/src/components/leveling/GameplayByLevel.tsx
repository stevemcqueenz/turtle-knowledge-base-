import { useMemo, useState } from 'react';
import { marked, type Tokens } from 'marked';
import { HeartPulse, Info, PawPrint, Shield, Sparkles, Target, Users, GitBranch, type LucideIcon } from 'lucide-react';
import { Markdown } from '../Markdown';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { cn } from '../../lib/utils';

type Kind = 'new' | 'single' | 'multi' | 'tank' | 'heal' | 'pet' | 'talent' | 'other';

interface Block {
  kind: Kind;
  label: string | null;
  body: string;
}

interface Bracket {
  id: string;
  heading: string;
  /** "1–9", "10–19" … for the segmented control. */
  short: string;
  notes: string;
  blocks: Block[];
}

export interface Gameplay {
  intro: string;
  before: { heading: string; markdown: string }[];
  brackets: Bracket[];
  after: { heading: string; markdown: string }[];
}

const BRACKET = /^levels?\s+(\d+)\s*[–-]\s*(\d+)/i;

function kindOf(label: string | null): Kind {
  const l = (label ?? '').toLowerCase();
  if (!l) return 'other';
  if (/^new\b|^new now|^learn/.test(l)) return 'new';
  if (/tank/.test(l)) return 'tank';
  if (/heal/.test(l)) return 'heal';
  if (/^single/.test(l)) return 'single';
  if (/multi|aoe/.test(l)) return 'multi';
  if (/^pet|^demon/.test(l)) return 'pet';
  if (/^talent/.test(l)) return 'talent';
  return 'other';
}

const ICONS: Record<Kind, LucideIcon> = {
  new: Sparkles,
  single: Target,
  multi: Users,
  tank: Shield,
  heal: HeartPulse,
  pet: PawPrint,
  talent: GitBranch,
  other: Info,
};

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

/** `**Label:** rest` (or a paragraph that is only `**Label**`): the block title and the rest. */
function leadLabel(md: string): { label: string; rest: string } | null {
  const m = /^\*\*([^*]{2,70}?)(:?)\*\*(:?)\s*/.exec(md);
  if (!m) return null;
  const rest = md.slice(m[0].length);
  if (!m[2] && !m[3] && rest.trim()) return null; // "**Send the pet** and …" is a step, not a title
  return { label: m[1].trim(), rest };
}

/**
 * A bracket's Markdown as labelled blocks. The guides write them two ways: as
 * top-level bullets (`- **New now:** …`) or as a bold lead-in paragraph
 * (`**Single target:**`) followed by its list; both become one block each.
 */
function blocksOf(markdown: string): { notes: string; blocks: Block[] } {
  const notes: string[] = [];
  const blocks: Block[] = [];
  let current: Block | null = null;
  const open = (label: string, body: string) => {
    current = { kind: kindOf(label), label, body };
    blocks.push(current);
  };
  for (const t of marked.lexer(markdown)) {
    if (t.type === 'space') continue;
    if (t.type === 'paragraph') {
      const lead = leadLabel(t.raw.trim());
      if (lead) {
        open(lead.label, lead.rest);
        continue;
      }
    }
    if (t.type === 'list' && !(t as Tokens.List).ordered) {
      const items = (t as Tokens.List).items;
      if (items.some((item) => leadLabel(item.text))) {
        for (const item of items) {
          const lead = leadLabel(item.text);
          if (lead) open(lead.label, lead.rest);
          else if (current) (current as Block).body += `\n\n${item.text}`;
          else notes.push(`- ${item.text}\n`);
        }
        current = null;
        continue;
      }
    }
    if (current) (current as Block).body += `\n\n${t.raw}`;
    else notes.push(t.raw);
  }
  return { notes: notes.join('').trim(), blocks };
}

/** Splits the leveling guide's "Gameplay by level" section at its H3s ("Levels 1–9" …). */
export function parseGameplay(markdown: string): Gameplay | null {
  const parts = markdown.split(/^### +/m);
  const intro = parts[0].trim();
  const chunks = parts.slice(1).map((p) => {
    const nl = p.indexOf('\n');
    return { heading: (nl < 0 ? p : p.slice(0, nl)).trim(), markdown: nl < 0 ? '' : p.slice(nl + 1).trim() };
  });
  const first = chunks.findIndex((c) => BRACKET.test(c.heading));
  if (first < 0) return null;
  let last = first;
  chunks.forEach((c, i) => {
    if (BRACKET.test(c.heading)) last = i;
  });
  const brackets: Bracket[] = [];
  const after: Gameplay['after'] = [];
  chunks.slice(first, last + 1).forEach((c) => {
    const m = BRACKET.exec(c.heading);
    if (!m) {
      after.push(c);
      return;
    }
    const { notes, blocks } = blocksOf(c.markdown);
    brackets.push({ id: `gameplay-${slug(c.heading)}`, heading: c.heading, short: `${m[1]}–${m[2]}`, notes, blocks });
  });
  return { intro, before: chunks.slice(0, first), brackets, after: [...after, ...chunks.slice(last + 1)] };
}

/**
 * "New now" is written as one run of `L12 Spell R2 (cost), Other R1.` entries;
 * split at each level marker (outside HTML tags) so it reads as a level list.
 */
export function splitByLevel(md: string): { lead: string; rows: { level: string; text: string }[] } | null {
  const inTag = new Uint8Array(md.length);
  let depth = 0;
  for (let i = 0; i < md.length; i++) {
    if (md[i] === '<') depth += 1;
    if (depth > 0) inTag[i] = 1;
    if (md[i] === '>' && depth > 0) depth -= 1;
  }
  const re = /(^|[\s.;,(])(\*\*)?L(\d{1,2})\s+(?=[A-Z*`(])/g;
  const hits: { at: number; start: number; level: string; bold: boolean }[] = [];
  for (const m of md.matchAll(re)) {
    const at = (m.index ?? 0) + m[1].length;
    if (!inTag[at]) hits.push({ at, start: (m.index ?? 0) + m[0].length, level: m[3], bold: !!m[2] });
  }
  if (hits.length < 2) return null;
  const rows = hits.map((h, i) => ({
    level: h.level,
    text: `${h.bold ? '**' : ''}${md.slice(h.start, i + 1 < hits.length ? hits[i + 1].at : md.length)}`
      .trim()
      .replace(/^[,;]\s*/, '')
      .replace(/\s*[·;,]$/, ''),
  }));
  return { lead: md.slice(0, hits[0].at).trim(), rows };
}

function NewAbilities({ body }: { body: string }) {
  const split = useMemo(() => splitByLevel(body), [body]);
  if (!split) return <Markdown source={body} className="text-[13.5px]" />;
  return (
    <div className="text-[13.5px]">
      {split.lead ? <Markdown source={split.lead} className="mb-2" /> : null}
      <dl className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-x-3 gap-y-1.5">
        {split.rows.map((r, i) => (
          <div key={i} className="contents">
            <dt className="pt-px text-right text-xs font-semibold tabular text-[rgb(var(--cc))]">L{r.level}</dt>
            <dd className="min-w-0">
              <Markdown inline source={r.text} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function BlockView({ block, wide }: { block: Block; wide?: boolean }) {
  const Icon = ICONS[block.kind];
  return (
    <div className={cn('min-w-0 rounded-lg border bg-card', wide && 'md:col-span-2')} data-kind={block.kind}>
      <div className="flex items-center gap-2 border-b px-3.5 py-2">
        <Icon className={cn('h-4 w-4 shrink-0', block.kind === 'new' ? 'text-[rgb(var(--cc))]' : 'text-muted-foreground')} aria-hidden="true" />
        <h4 className="text-[13.5px] font-semibold">{block.label ?? 'Notes'}</h4>
      </div>
      <div className="px-3.5 py-3">
        {block.kind === 'new' ? <NewAbilities body={block.body} /> : <Markdown source={block.body} className="text-[13.5px] [&_ol]:pl-5 [&_ul]:pl-5" />}
      </div>
    </div>
  );
}

function BracketView({ b }: { b: Bracket }) {
  const news = b.blocks.filter((x) => x.kind === 'new');
  const rest = b.blocks.filter((x) => x.kind !== 'new');
  return (
    <div className="space-y-3">
      {b.notes ? <Markdown source={b.notes} className="text-[13.5px] text-muted-foreground" /> : null}
      <div className="grid gap-3 md:grid-cols-2">
        {news.map((x, i) => (
          <BlockView key={`n${i}`} block={x} wide />
        ))}
        {rest.map((x, i) => (
          <BlockView key={i} block={x} wide={rest.length === 1 || (i === rest.length - 1 && rest.length % 2 === 1 && x.body.length > 600)} />
        ))}
      </div>
    </div>
  );
}

/**
 * The centrepiece of a leveling page: a segmented control over the level
 * brackets, and per bracket what is new, what to press on one target and on
 * several, and (where the class does it) tanking and healing.
 */
export function GameplayByLevel({ markdown }: { markdown: string }) {
  const g = useMemo(() => parseGameplay(markdown), [markdown]);
  const [tab, setTab] = useState<string | null>(null);
  if (!g || !g.brackets.length) return <Markdown source={markdown} />;
  const active = tab ?? g.brackets[0].id;
  const index = g.brackets.findIndex((b) => b.id === active);
  return (
    <div className="space-y-4">
      {g.intro ? <Markdown source={g.intro} className="text-[13.5px] text-muted-foreground" /> : null}
      {g.before.map((c) => (
        <details key={c.heading} className="group rounded-lg border bg-card">
          <summary className="cursor-pointer list-none px-4 py-2.5 text-[13.5px] font-medium">{c.heading}</summary>
          <div className="border-t px-4 py-3">
            <Markdown source={c.markdown} className="text-[13.5px]" />
          </div>
        </details>
      ))}
      <Tabs value={active} onValueChange={setTab}>
        <div className="sticky top-14 z-10 -mx-4 bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/80 sm:mx-0 sm:px-0 xl:top-14">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="hidden text-[13px] text-muted-foreground sm:inline">Levels</span>
            <TabsList
              variant="segmented"
              aria-label="Level bracket"
              className="grid w-full sm:inline-flex sm:w-auto"
              style={{ gridTemplateColumns: `repeat(${g.brackets.length}, minmax(0, 1fr))` }}
            >
              {g.brackets.map((b) => (
                <TabsTrigger key={b.id} value={b.id} variant="segmented" className="tabular px-1 text-[13px] sm:px-2.5 sm:text-sm">
                  {b.short}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          <div aria-hidden="true" className="mt-2 flex h-1 gap-px overflow-hidden rounded-full bg-muted">
            {g.brackets.map((b, i) => (
              <span key={b.id} className={cn('flex-1 transition-colors', i <= index ? 'bg-[rgb(var(--cc)/0.8)]' : '')} />
            ))}
          </div>
        </div>
        {g.brackets.map((b) => (
          <TabsContent key={b.id} value={b.id} forceMount className="pt-2" aria-label={b.heading}>
            <h3 className="sr-only">{b.heading}</h3>
            <BracketView b={b} />
          </TabsContent>
        ))}
      </Tabs>
      {g.after.map((c) => (
        <div key={c.heading} className="pt-2">
          <h3 className="mb-2 text-base font-semibold">{c.heading}</h3>
          <Markdown source={c.markdown} className="text-[14px]" />
        </div>
      ))}
    </div>
  );
}
