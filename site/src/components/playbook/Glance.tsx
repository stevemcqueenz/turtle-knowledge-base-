import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { PlaybookYaml, TalentBuild, TalentTree, YamlRotationStep } from '../../types';
import { isPlainObject } from '../../lib/site';
import { CitedText, stripCites } from '../CitedText';
import { CopyButton } from '../ui/CopyButton';
import { Button } from '../ui/button';
import { Panel } from '../ui/panel';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { SplitLine, TalentGrid } from '../talents/TalentGrid';
import { capLabel, describeValue } from '../guide/util';

/* ---- build ----------------------------------------------------------------- */

function shortLabel(b: TalentBuild): string {
  const text = stripCites(b.label)
    .replace(/,?\s*\d+\/\d+\/\d+/, '')
    .replace(/\s*\([^)]*\)\s*$/, '')
    .trim();
  return text.length > 34 ? `${text.slice(0, 32)}…` : text || b.split;
}

/** The recommended build in the talent frame, the calculator link, and a switcher over the guide's other builds. */
export function BuildCard({ builds, tree, rgb }: { builds: TalentBuild[]; tree: TalentTree; rgb: string }) {
  const [index, setIndex] = useState(0);
  const build = builds[index] ?? builds[0];
  if (!build) return null;
  const many = builds.length > 1;
  return (
    <div className="overflow-hidden rounded-lg border bg-card">
      <div className="flex flex-wrap items-start gap-x-6 gap-y-3 border-b px-4 py-3">
        <div className="min-w-[14rem] flex-1">
          <p className="text-xs text-muted-foreground">
            {index === 0 && build.source === 'playbook' ? 'Recommended build' : 'Alternative build'}
            {build.tag && !/^recommended$/i.test(build.tag.trim()) ? ` · ${build.tag}` : ''}
          </p>
          <h3 className="mt-0.5 text-base font-semibold leading-snug">{stripCites(build.label)}</h3>
          <p className="mt-1">
            <SplitLine tree={tree} totals={build.totals} />
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button asChild variant="class" size="sm">
            <a href={build.url} target="_blank" rel="noopener noreferrer">
              Open in talent calculator <ArrowUpRight />
            </a>
          </Button>
          <CopyButton text={build.url} label="Copy link" className="h-8" />
        </div>
      </div>
      {many ? (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 border-b bg-muted/30 px-4 py-2">
          <span className="text-xs text-muted-foreground">{builds.length} builds in this guide</span>
          {builds.length <= 4 ? (
            <ToggleGroup
              type="single"
              value={String(index)}
              onValueChange={(v) => v && setIndex(Number(v))}
              aria-label="Build"
              className="hidden sm:inline-flex"
            >
              {builds.map((b, i) => (
                <ToggleGroupItem key={b.url + i} value={String(i)} className="text-[12.5px]">
                  {shortLabel(b)} <span className="tabular text-muted-foreground">{b.split}</span>
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          ) : null}
          <div className={builds.length <= 4 ? 'w-full sm:hidden' : 'w-full sm:w-80'}>
            <Select value={String(index)} onValueChange={(v) => setIndex(Number(v))}>
              <SelectTrigger aria-label="Build" className="h-8 text-[13px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {builds.map((b, i) => (
                  <SelectItem key={b.url + i} value={String(i)}>
                    {shortLabel(b)} ({b.split})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      ) : null}
      <div className="p-3 sm:p-4">
        <TalentGrid tree={tree} ranks={build.ranks} rgb={rgb} label={`Talent points of ${stripCites(build.label)}`} />
      </div>
    </div>
  );
}

/* ---- stats ----------------------------------------------------------------- */

const STAT_WORDS: Record<string, string> = {
  mp5: 'MP5',
  'spell-hit': 'Spell hit',
  'spell-crit': 'Spell crit',
  'spell-power': 'Spell power',
  'healing-power': 'Healing power',
  'attack-power': 'Attack power',
  'ranged-attack-power': 'Ranged attack power',
  'hit-to-16': 'Hit to 16%',
  'hit-to-yellow-cap': 'Hit to the yellow-hit cap',
  'weapon-skill-310-315': 'Weapon skill 310–315',
};

export function statName(s: string): string {
  const key = s.trim();
  if (STAT_WORDS[key]) return STAT_WORDS[key];
  const text = key.replace(/-(?=[a-z])/g, ' ').replace(/(\d)-(\d)/g, '$1–$2');
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function capValue(v: unknown): { text: string; sources: string } {
  if (isPlainObject(v)) {
    const text = v.value !== undefined ? describeValue(v.value) : describeValue({ ...v, sources: undefined });
    const sources = Array.isArray(v.sources) ? v.sources.join(', ') : '';
    const flags = [v.era, v.agreement].filter((x) => typeof x === 'string' && x).join(', ');
    return { text: flags ? `${text} (${flags})` : text, sources };
  }
  return { text: describeValue(v), sources: '' };
}

export function StatsCard({ yaml }: { yaml: PlaybookYaml }) {
  const order = Array.isArray(yaml.stat_priority) ? (yaml.stat_priority as unknown[]).map(String) : [];
  const note = typeof yaml.stat_priority_note === 'string' ? yaml.stat_priority_note : '';
  const caps = isPlainObject(yaml.caps) ? Object.entries(yaml.caps) : [];
  if (!order.length && !caps.length) return null;
  return (
    <Panel title="Stat priority and caps">
      {order.length ? (
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
          {order.map((s, i) => (
            <li key={s + i} className="flex items-center gap-1">
              <span className="inline-flex items-center gap-1.5 rounded-[4px] border bg-muted/50 py-0.5 pl-1 pr-2 text-[13px] font-medium">
                <span className="flex h-4 min-w-[1rem] items-center justify-center rounded-[3px] bg-background text-[10.5px] font-semibold tabular text-muted-foreground">
                  {i + 1}
                </span>
                {statName(s)}
              </span>
              {i < order.length - 1 ? (
                <span aria-hidden="true" className="text-muted-foreground">
                  ›
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      ) : (
        <p className="text-sm text-muted-foreground">The sources give no single order; see the notes.</p>
      )}
      {note ? (
        <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
          <CitedText text={note} />
        </p>
      ) : null}
      {caps.length ? (
        <dl className="mt-3 divide-y border-t text-[13px]">
          {caps.map(([k, v]) => {
            const { hint } = capLabel(k);
            const label = capLabel(k)
              .label.replace(/\bGcd\b/i, 'GCD')
              .replace(/\b(sp|ap|mp5|aoe|st)\b/gi, (w) => w.toUpperCase())
              .replace(/ yd$/, ' (yd)')
              .replace(/ pct$/, ' (%)');
            const { text, sources } = capValue(v);
            return (
              <div key={k} className="grid gap-x-3 gap-y-0.5 py-2 sm:grid-cols-[minmax(0,10rem)_1fr]">
                <dt className="font-medium">
                  {label}
                  {hint ? <span className="ml-1 text-xs font-normal text-muted-foreground">({hint})</span> : null}
                </dt>
                <dd className="text-muted-foreground">
                  <CitedText text={`${text}${sources ? ` ${sources}` : ''}`} />
                </dd>
              </div>
            );
          })}
        </dl>
      ) : null}
    </Panel>
  );
}

/* ---- priority list ----------------------------------------------------------- */

const isOpener = (s: YamlRotationStep) => s?.priority === 0 || String(s?.condition ?? '').trim().toLowerCase() === 'opener';

const arrows = (t: string) => t.replace(/\s*->\s*/g, ' → ');

function stepText(s: YamlRotationStep): { action: string; condition: string; sources: string } {
  const sources = Array.isArray(s.sources) ? (s.sources as unknown[]).map(String).join(', ') : '';
  return {
    action: arrows(describeValue(s.action).replace(/^opener:\s*/i, '')),
    condition: arrows(describeValue(s.condition)),
    sources,
  };
}

export function PriorityCard({ yaml, title = 'Single-target priority' }: { yaml: PlaybookYaml; title?: string }) {
  const steps = Array.isArray(yaml.rotation_single) ? yaml.rotation_single : [];
  if (!steps.length) return null;
  const opener = steps.find(isOpener) ?? null;
  const list = steps.filter((s) => s !== opener);
  const copy = [
    ...(opener ? [`Opener: ${stripCites(stepText(opener).action)}`] : []),
    ...list.map((s, i) => {
      const t = stepText(s);
      return `${i + 1}. ${stripCites(t.action)}${t.condition ? ` — ${stripCites(t.condition)}` : ''}`;
    }),
  ].join('\n');
  const aoe = Array.isArray(yaml.rotation_aoe) ? yaml.rotation_aoe.length : 0;
  return (
    <Panel title={title} actions={<CopyButton text={copy} label="Copy" />} bodyClassName="p-0">
      {opener ? (
        <p className="border-b bg-muted/30 px-4 py-2 text-[13px]">
          <span className="mr-2 font-medium text-muted-foreground">Opener</span>
          <CitedText text={`${stepText(opener).action}${stepText(opener).sources ? ` ${stepText(opener).sources}` : ''}`} />
        </p>
      ) : null}
      <ol className="divide-y">
        {list.map((s, i) => {
          const t = stepText(s);
          return (
            <li key={i} className="grid grid-cols-[1.5rem_1fr] gap-2 px-4 py-2">
              <span className="pt-px text-[13px] font-semibold tabular text-muted-foreground">{i + 1}</span>
              <span className="min-w-0 text-[13.5px]">
                <span className="block font-medium">
                  <CitedText text={`${t.action}${t.sources ? ` ${t.sources}` : ''}`} />
                </span>
                {t.condition ? (
                  <span className="block text-[13px] leading-snug text-muted-foreground">
                    <CitedText text={t.condition} />
                  </span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ol>
      {aoe ? <p className="border-t px-4 py-2 text-xs text-muted-foreground">AoE has its own {aoe}-step list in the AoE section and the bot playbook.</p> : null}
    </Panel>
  );
}

/* ---- consumables ---------------------------------------------------------------- */

export function ConsumablesCard({ yaml }: { yaml: PlaybookYaml }) {
  const items = (Array.isArray(yaml.consumables) ? yaml.consumables : []).map((c) => describeValue(c)).filter(Boolean);
  if (!items.length) return null;
  return (
    <Panel title="Consumables and enchants">
      <ul className="grid list-disc gap-x-8 gap-y-1.5 pl-4 text-[13.5px] leading-relaxed marker:text-muted-foreground md:grid-cols-2">
        {items.map((c, i) => (
          <li key={i}>
            <CitedText text={c} />
          </li>
        ))}
      </ul>
    </Panel>
  );
}
