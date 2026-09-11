/**
 * Readers for the class leveling guides: the player-first grouping of their
 * sections, the leveling verdicts from the matrix, and the talent order a spec
 * guide borrows from the class guide when it has none of its own.
 */
import type { ClassEntry, MatrixRow, Section, TalentOrder } from '../types';
import { joinWords, standingRank } from '../components/class/data';

export type LevelingGroupKey =
  | 'spec'
  | 'talents'
  | 'press'
  | 'stats'
  | 'dont'
  | 'route'
  | 'hardcore'
  | 'more'
  | 'intro'
  | 'sources';

/** Page order of the groups; "intro" is folded into Sources. */
export const LEVELING_GROUPS: { key: LevelingGroupKey; label: string }[] = [
  { key: 'spec', label: 'Which spec' },
  { key: 'talents', label: 'Talent order' },
  { key: 'press', label: 'What to press' },
  { key: 'stats', label: 'Stats & gear' },
  { key: 'dont', label: "Don't" },
  { key: 'route', label: 'Route' },
  { key: 'hardcore', label: 'Hardcore' },
  { key: 'more', label: 'More' },
  { key: 'sources', label: 'Sources' },
];

// First match wins. Headings come from synthesis/classes/<class>/leveling.md.
const RULES: [RegExp, LevelingGroupKey][] = [
  [/^introduction$/i, 'intro'],
  [/^sources?\b/i, 'sources'],
  [/mistake/i, 'dont'],
  [/which (spec|build)|spec choice|spec to level/i, 'spec'],
  [/talent|\bbuild [a-d]\b/i, 'talents'],
  [/playstyle|kill (loop|rotation)|rotation|\bpets?\b|wand/i, 'press'],
  [/\bstats?\b|gear|upgrade/i, 'stats'],
  [/route|profession|farming|zone/i, 'route'],
  [/hardcore|\bhc\b/i, 'hardcore'],
];

export function levelingGroup(heading: string): LevelingGroupKey {
  const h = heading.trim();
  for (const [re, key] of RULES) if (re.test(h)) return key;
  return 'more';
}

export function groupLevelingSections(sections: Section[]): Record<LevelingGroupKey, Section[]> {
  const groups: Record<LevelingGroupKey, Section[]> = {
    spec: [],
    talents: [],
    press: [],
    stats: [],
    dont: [],
    route: [],
    hardcore: [],
    more: [],
    intro: [],
    sources: [],
  };
  for (const s of sections) groups[levelingGroup(s.heading)].push(s);
  return groups;
}

/** The matrix rows that rate this class's leveling specs, best standing first. */
export function levelingPicks(entry: ClassEntry): MatrixRow[] {
  return entry.matrix
    .filter((r) => r.role === 'leveling' && !!r.spec)
    .sort((a, b) => standingRank(a.standing) - standingRank(b.standing));
}

/** "Level as Arms (2H). Fury (dual wield) is the alternative. Protection is a niche pick." */
export function levelingVerdictLine(picks: MatrixRow[]): string {
  const specs = (standing: string) =>
    picks.filter((r) => String(r.standing).toLowerCase() === standing).map((r) => String(r.spec));
  const favored = specs('favored');
  const alternative = specs('alternative');
  const niche = specs('niche');
  const parts = [favored.length ? `Level as ${joinWords(favored)}.` : 'No leveling spec is called favored by the sources.'];
  if (alternative.length) {
    parts.push(`${joinWords(alternative)} ${alternative.length > 1 ? 'are the alternatives' : 'is the alternative'}.`);
  }
  if (niche.length) parts.push(`${joinWords(niche)} ${niche.length > 1 ? 'are niche picks' : 'is a niche pick'}.`);
  return parts.join(' ');
}

/** The class guide's main leveling order, shown on a spec guide that has none of its own. */
export function pickTalentOrder(entry: ClassEntry): TalentOrder | null {
  return entry.leveling?.talentOrders?.[0] ?? null;
}
