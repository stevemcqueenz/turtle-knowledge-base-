import { useState } from 'react';
import type { PlaybookYaml, TalentBuild, TalentTree, YamlRotationStep } from '../../types';
import { isPlainObject } from '../../lib/site';
import { CitedText, stripCites } from '../CitedText';
import { ExternalIcon } from '../Icons';
import { CopyButton } from '../ui/CopyButton';
import { SplitLine, TalentGrid } from '../talents/TalentGrid';
import { capLabel, describeValue } from '../guide/util';

/* ---- build ----------------------------------------------------------------- */

export function BuildCard({ builds, tree, rgb }: { builds: TalentBuild[]; tree: TalentTree; rgb: string }) {
  const [index, setIndex] = useState(0);
  const build = builds[index] ?? builds[0];
  if (!build) return null;
  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-start gap-x-6 gap-y-4 border-b p-4 sm:p-5">
        <div className="min-w-0 flex-1">
          <p className="eyebrow">{index === 0 && build.source === 'playbook' ? 'Recommended build' : 'Alternative build'}</p>
          <h3 className="mt-1 font-serif text-xl font-semibold leading-snug sm:text-[1.4rem]">{stripCites(build.label)}</h3>
          <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1">
            <SplitLine tree={tree} totals={build.totals} />
            {build.tag ? <span className="chip bg-accent/15 text-ink">{build.tag}</span> : null}
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <a href={build.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Open in talent calculator <ExternalIcon className="h-3.5 w-3.5" />
          </a>
          <CopyButton text={build.url} label="Copy link" className="!py-2" />
        </div>
      </div>
      {builds.length > 1 ? (
        <div className="border-b bg-surface2/40 px-4 py-3 sm:px-5">
          <label htmlFor="build-pick" className="eyebrow mb-1.5 block">
            {builds.length} builds in this guide
          </label>
          <div className="no-scrollbar -mx-1 hidden gap-1.5 overflow-x-auto px-1 sm:flex sm:flex-wrap">
            {builds.map((b, i) => (
              <button
                key={b.url + i}
                type="button"
                onClick={() => setIndex(i)}
                aria-pressed={i === index}
                className={`shrink-0 rounded-full px-3 py-1 text-[13px] font-medium transition-colors ${
                  i === index ? 'bg-accent text-[rgb(var(--c-accent-ink))]' : 'hairline bg-surface text-muted hover:text-ink'
                }`}
              >
                {shortLabel(b)} <span className="opacity-75 tabular-nums">{b.split}</span>
              </button>
            ))}
          </div>
          <select
            id="build-pick"
            value={index}
            onChange={(e) => setIndex(Number(e.target.value))}
            className="w-full rounded-xl hairline bg-surface px-3 py-2 text-sm sm:hidden"
          >
            {builds.map((b, i) => (
              <option key={b.url + i} value={i}>
                {shortLabel(b)} ({b.split})
              </option>
            ))}
          </select>
        </div>
      ) : null}
      <div className="p-4 sm:p-5">
        <TalentGrid tree={tree} ranks={build.ranks} rgb={rgb} label={`Talent points of ${stripCites(build.label)}`} />
      </div>
    </div>
  );
}

function shortLabel(b: TalentBuild): string {
  const text = stripCites(b.label)
    .replace(/,?\s*\d+\/\d+\/\d+/, '')
    .replace(/\s*\([^)]*\)\s*$/, '')
    .trim();
  return text.length > 38 ? `${text.slice(0, 36)}…` : text || b.split;
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
    <div className="card flex flex-col p-4 sm:p-5">
      <h3 className="eyebrow">Stat priority</h3>
      {order.length ? (
        <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2">
          {order.map((s, i) => (
            <li key={s + i} className="flex items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-lg hairline bg-surface2/70 py-1 pl-1 pr-2.5 text-sm font-semibold">
                <span className="flex h-5 w-5 items-center justify-center rounded-md bg-accent/20 text-[11px] tabular-nums text-ink">
                  {i + 1}
                </span>
                {statName(s)}
              </span>
              {i < order.length - 1 ? <span aria-hidden="true" className="text-muted">›</span> : null}
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-2 text-sm text-muted">The sources give no single order; see the notes below.</p>
      )}
      {note ? (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          <CitedText text={note} />
        </p>
      ) : null}
      {caps.length ? (
        <>
          <h3 className="eyebrow mt-5">Caps and numbers</h3>
          <dl className="mt-2 divide-y text-sm">
            {caps.map(([k, v]) => {
              const { hint } = capLabel(k);
              const label = capLabel(k)
                .label.replace(/\bGcd\b/i, 'GCD')
                .replace(/\b(sp|ap|mp5|aoe|st)\b/gi, (w) => w.toUpperCase())
                .replace(/ yd$/, ' (yd)')
                .replace(/ pct$/, ' (%)');
              const { text, sources } = capValue(v);
              return (
                <div key={k} className="grid gap-x-3 gap-y-0.5 py-2 sm:grid-cols-[minmax(0,11rem)_1fr]">
                  <dt className="font-medium text-ink">
                    {label}
                    {hint ? <span className="ml-1 text-xs font-normal text-muted">({hint})</span> : null}
                  </dt>
                  <dd className="text-muted">
                    <CitedText text={`${text}${sources ? ` ${sources}` : ''}`} />
                  </dd>
                </div>
              );
            })}
          </dl>
        </>
      ) : null}
    </div>
  );
}

/* ---- priority list ----------------------------------------------------------- */

const isOpener = (s: YamlRotationStep) =>
  s?.priority === 0 || String(s?.condition ?? '').trim().toLowerCase() === 'opener';

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
    <div className="card flex flex-col p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="eyebrow">{title}</h3>
        <CopyButton text={copy} label="Copy list" />
      </div>
      {opener ? (
        <div className="mt-3 rounded-xl bg-accent/10 px-3 py-2.5 text-sm ring-1 ring-accent/25">
          <span className="eyebrow mr-2 text-accent">Opener</span>
          <CitedText text={`${stepText(opener).action}${stepText(opener).sources ? ` ${stepText(opener).sources}` : ''}`} />
        </div>
      ) : null}
      <ol className="mt-3 space-y-2.5">
        {list.map((s, i) => {
          const t = stepText(s);
          return (
            <li key={i} className="grid grid-cols-[1.6rem_1fr] gap-2">
              <span className="font-serif text-lg font-bold leading-6 text-accent tabular-nums">{i + 1}</span>
              <span className="min-w-0">
                <span className="block font-semibold leading-6">
                  <CitedText text={`${t.action}${t.sources ? ` ${t.sources}` : ''}`} />
                </span>
                {t.condition ? (
                  <span className="block text-sm leading-snug text-muted">
                    <CitedText text={t.condition} />
                  </span>
                ) : null}
              </span>
            </li>
          );
        })}
      </ol>
      {aoe ? (
        <p className="mt-4 border-t pt-3 text-sm text-muted">
          AoE has its own {aoe}-step list; see the AoE section of the guide and the playbook.
        </p>
      ) : null}
    </div>
  );
}

/* ---- consumables ---------------------------------------------------------------- */

export function ConsumablesCard({ yaml }: { yaml: PlaybookYaml }) {
  const items = (Array.isArray(yaml.consumables) ? yaml.consumables : []).map((c) => describeValue(c)).filter(Boolean);
  if (!items.length) return null;
  return (
    <div className="card p-4 sm:p-5">
      <h3 className="eyebrow">Consumables and enchants</h3>
      <ul className="mt-3 grid gap-x-6 gap-y-2 text-sm leading-relaxed md:grid-cols-2">
        {items.map((c, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden="true" className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rotate-45 rounded-[1px] bg-accent/70" />
            <span className="min-w-0">
              <CitedText text={c} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
