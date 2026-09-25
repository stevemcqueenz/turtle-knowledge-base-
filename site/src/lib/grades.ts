/**
 * Readers for the guide's spec viability tables (guide/classes/<class>/index.md,
 * parsed by build-data.py into `viability`): grade order, activity labels, and
 * the "what do you want to do" entry points on the home page.
 */
import type { ClassSummary, ViabilityCell, ViabilityRow } from '../types';
import { href } from './router';

const BASE: Record<string, number> = { S: 5, A: 4, B: 3, C: 2, D: 1, F: 0 };

/** S > A+ > A > A- > B ... ; null (no rating) sorts last. */
export function gradeScore(grade: string | null | undefined): number {
  if (!grade) return -1;
  const base = BASE[grade[0]] ?? -1;
  if (base < 0) return -1;
  return base + (grade[1] === '+' ? 0.3 : grade[1] === '-' ? -0.3 : 0);
}

export function gradeClass(grade: string | null | undefined): string {
  return grade ? `grade-${grade[0]}` : 'grade-none';
}

export const GRADE_WORDS: Record<string, string> = {
  S: 'best choice',
  A: 'strong',
  B: 'fine',
  C: 'weak',
  D: 'poor',
};

export function gradeTitle(cell: ViabilityCell, column: string): string {
  if (!cell.grade) return `${column}: ${cell.label === '—' ? 'not a role for this spec' : cell.label || 'not rated'}`;
  return `${column}: ${cell.label} (${GRADE_WORDS[cell.grade[0]] ?? ''})${cell.contested ? ', contested' : ''}`;
}

export const ACTIVITY_LABELS: Record<string, string> = {
  raid: 'Raid',
  dungeon: 'Dungeon',
  pvp: 'PvP',
  leveling: 'Leveling',
  farming: 'Open world',
};

export function cellFor(row: ViabilityRow, key: string): ViabilityCell | undefined {
  return row.cells.find((c) => c.key === key);
}

export interface RankedSpec {
  cls: ClassSummary;
  row: ViabilityRow;
  cell: ViabilityCell;
  /** Where the entry leads: the spec page, or the class leveling guide for the leveling intent. */
  target: string;
}

export interface Intent {
  id: string;
  label: string;
  short: string;
  /** Which viability column ranks the specs. */
  column: string;
  blurb: string;
  filter: (row: ViabilityRow) => boolean;
  leveling?: boolean;
}

const isDps = (row: ViabilityRow) => row.role === 'melee-dps' || row.role === 'ranged-dps';

export const INTENTS: Intent[] = [
  {
    id: 'level',
    label: 'Level 1 to 60',
    short: 'Level',
    column: 'leveling',
    blurb: 'Each class’s leveling rating from its guide. Every class has a talent order from 10 to 60.',
    filter: () => true,
    leveling: true,
  },
  {
    id: 'raid-dps',
    label: 'Raid DPS',
    short: 'Raid DPS',
    column: 'raid',
    blurb: 'Damage specs, ranked by their raid rating in 1.18.1.',
    filter: isDps,
  },
  {
    id: 'tank',
    label: 'Tank',
    short: 'Tank',
    column: 'raid',
    blurb: 'Tank specs, ranked by their raid rating. The dungeon rating is shown next to it.',
    filter: (row) => row.role === 'tank',
  },
  {
    id: 'heal',
    label: 'Heal',
    short: 'Heal',
    column: 'raid',
    blurb: 'Healing specs, ranked by their raid rating.',
    filter: (row) => row.role === 'healer',
  },
  {
    id: 'pvp',
    label: 'PvP',
    short: 'PvP',
    column: 'pvp',
    blurb: 'Every spec the guides rate for battlegrounds and duels.',
    filter: () => true,
  },
  {
    id: 'farm',
    label: 'Farm gold',
    short: 'Farm',
    column: 'farming',
    blurb: 'Open-world and farming ratings: soloing, mob packs, gold.',
    filter: () => true,
  },
];

/** Every class's rated specs for one intent, best first (class order breaks ties). */
export function rankFor(intent: Intent, classes: ClassSummary[]): RankedSpec[] {
  const out: RankedSpec[] = [];
  classes.forEach((cls) => {
    for (const row of cls.viability?.rows ?? []) {
      if (!intent.filter(row)) continue;
      const cell = cellFor(row, intent.column);
      if (!cell || !cell.grade) continue;
      const target = intent.leveling
        ? href.leveling(cls.slug)
        : row.playbookId
          ? href.playbook(cls.slug, row.playbookId)
          : (row.route ?? href.class(cls.slug));
      out.push({ cls, row, cell, target });
    }
  });
  const order = new Map(classes.map((c, i) => [c.slug, i]));
  return out.sort(
    (a, b) => gradeScore(b.cell.grade) - gradeScore(a.cell.grade) || (order.get(a.cls.slug) ?? 0) - (order.get(b.cls.slug) ?? 0),
  );
}

/** The best-rated spec names of a class for one column ("Arcane", "Frost & Fire"). */
export function bestFor(cls: ClassSummary, column: string, filter: (r: ViabilityRow) => boolean = () => true) {
  const rows = (cls.viability?.rows ?? []).filter(filter);
  let best = -1;
  for (const r of rows) best = Math.max(best, gradeScore(cellFor(r, column)?.grade));
  if (best < 0) return null;
  const top = rows.filter((r) => gradeScore(cellFor(r, column)?.grade) === best);
  return { grade: cellFor(top[0], column)!.grade!, rows: top };
}
