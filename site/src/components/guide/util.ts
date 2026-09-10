/**
 * Small readers for the playbook data. Everything here is defensive: the data
 * is generated from hand-written source files, so a field can be a number, a
 * sentence, a list or missing entirely, and the guide page must stay readable
 * in every case (and must never print a raw data dump).
 */
import type { YamlSource } from '../../types';
import { humanizeKey, isPlainObject } from '../../lib/site';

/** Scalars to text; lists and objects to a compact one-line description. */
export function describeValue(value: unknown): string {
  if (value === null || value === undefined || value === '') return '';
  if (typeof value === 'boolean') return value ? 'yes' : 'no';
  if (Array.isArray(value)) return value.map(describeValue).filter(Boolean).join(' · ');
  if (isPlainObject(value)) {
    return Object.entries(value)
      .filter(([, v]) => v !== null && v !== undefined && v !== '')
      .map(([k, v]) => `${humanizeKey(k)} ${describeValue(v)}`)
      .join(' · ');
  }
  return String(value);
}

/** Numeric talent rank, or null when the source gives a range like "1-5". */
export function rankNumber(rank: unknown): number | null {
  if (typeof rank === 'number' && Number.isFinite(rank)) return rank;
  return null;
}

export function isContested(note: unknown): boolean {
  const text = String(note ?? '').toLowerCase();
  return text.includes('contested') || text.includes('optional');
}

/** First sentence of a note, used for the hero fact tiles. */
export function firstSentence(text: string | null | undefined): string {
  const value = String(text ?? '').trim();
  if (!value) return '';
  const match = /^[\s\S]*?[.!?](?=\s|$)/.exec(value);
  const sentence = (match ? match[0] : value).trim();
  if (sentence.length <= 150) return sentence;
  const cut = sentence.slice(0, 150);
  const space = cut.lastIndexOf(' ');
  return `${(space > 80 ? cut.slice(0, space) : cut).replace(/[,;:]$/, '')}…`;
}

export interface SourceSummary {
  count: number;
  from: string | null;
  to: string | null;
  staff: string[];
}

/** "27 cited posts · 2023-04 to 2026-03 · staff: Dragunovi, Jamey". */
export function summarizeSources(sources: YamlSource[] | null | undefined): SourceSummary {
  const list = Array.isArray(sources) ? sources : [];
  const months = list
    .map((s) => String(s?.date ?? '').trim())
    .filter((d) => /^\d{4}(-\d{2})?/.test(d))
    .map((d) => d.slice(0, 7))
    .sort();
  const staff: string[] = [];
  for (const s of list) {
    if (!String(s?.authority ?? '').toLowerCase().startsWith('staff')) continue;
    const author = String(s?.author ?? '').trim();
    if (author && !staff.includes(author)) staff.push(author);
  }
  return {
    count: list.length,
    from: months[0] ?? null,
    to: months[months.length - 1] ?? null,
    staff,
  };
}

export function sourceSummaryLine(summary: SourceSummary): string {
  const parts = [`${summary.count} cited ${summary.count === 1 ? 'post' : 'posts'}`];
  if (summary.from && summary.to) parts.push(summary.from === summary.to ? summary.from : `${summary.from} to ${summary.to}`);
  if (summary.staff.length > 0) parts.push(`staff: ${summary.staff.join(', ')}`);
  return parts.join(' · ');
}

export interface CapLabel {
  label: string;
  hint: string | null;
  percent: boolean;
}

/** `boss_parry_pct_player_claim` -> { label: "Boss parry", hint: "player claim" }. */
export function capLabel(key: string): CapLabel {
  const percent = /(^|_)pct($|_)/.test(key) || key.endsWith('_percent');
  let rest = key;
  let hint: string | null = null;
  if (/player_claim/.test(rest)) {
    rest = rest.replace(/_?player_claim/, '');
    hint = 'player claim';
  }
  rest = rest.replace(/(^|_)pct($|_)/, '$1').replace(/_percent$/, '').replace(/_+$/, '').replace(/^_+/, '');
  return { label: humanizeKey(rest || key), hint, percent };
}

/** The opener action is written as "Bloodrage -> pull -> Shield Slam". */
export function splitOpener(action: unknown): string[] {
  return String(action ?? '')
    .split(/\s*(?:->|→|»)\s*/)
    .map((s) => s.trim())
    .filter(Boolean);
}

/**
 * Section headings come from the source files and a few of them point at a
 * sibling file ("(see `x.md` …)"). The reading path never shows file names, so
 * those asides are dropped from the title.
 */
export function cleanHeading(heading: string): string {
  return heading
    .replace(/\s*\((?:see\s+)?[^()]*\.(?:md|yaml|json)[^()]*\)/gi, '')
    .replace(/`/g, '')
    .trim();
}

/** Title-cases the first character only, so player wording is left intact. */
export function sentenceCase(text: string): string {
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
}
