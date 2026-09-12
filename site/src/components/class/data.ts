import type { ClassEntry, MatrixRow, Playbook } from '../../types';
import { roleRank } from '../../lib/site';

/* ---- labels -------------------------------------------------------------- */

/** Short role labels used on the home cards, where space is tight. */
export const ROLE_SHORT: Record<string, string> = {
  tank: 'Tank',
  healer: 'Healer',
  'melee-dps': 'Melee',
  'ranged-dps': 'Ranged',
  pvp: 'PvP',
  leveling: 'Leveling',
};

export function roleShort(role: string): string {
  return ROLE_SHORT[role] ?? role;
}

/** "for tanking" style phrasing used in the generated one-line class summary. */
const ROLE_PHRASE: Record<string, string> = {
  tank: 'tanking',
  healer: 'healing',
  'melee-dps': 'melee DPS',
  'ranged-dps': 'ranged DPS',
  pvp: 'PvP',
};

const STANDING_RANK: Record<string, number> = { favored: 0, alternative: 1, niche: 2, 'not-viable': 3 };

export function standingRank(standing: string | null | undefined): number {
  return STANDING_RANK[String(standing ?? '').toLowerCase()] ?? 4;
}

/* ---- text ---------------------------------------------------------------- */

/** Markdown to plain text: link text without the target, no emphasis marks. */
export function stripMarkdown(text: string): string {
  return String(text)
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/`([^`]*)`/g, '$1')
    .replace(/\*\*|__|\*|_{2,}/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

// A clause that points at one of the source files rather than at the game.
const FILE_CLAUSE = /\b[\w-]+\.(md|ya?ml)\b|(structured|extracted|synthesis|scrape)\/|\bin-file\b/i;

/** Drops the clauses of a note that talk about where the text is filed. */
export function dropFileClauses(text: string): string {
  const kept = text
    // "README" is a file name; on the page it is simply the class overview
    .replace(/\bREADMEs?\b/g, 'class overview')
    .replace(/\bthe class class overview\b/gi, 'the class overview')
    .split(/;\s*/)
    .filter((clause) => !FILE_CLAUSE.test(clause))
    .join('; ')
    .trim();
  return kept.replace(/[;,\s]+$/, '');
}

/**
 * First sentence of a note. Sentence ends are only honoured before a capital
 * letter so that version numbers ("1.18.1") and "vs." do not cut a line short.
 */
export function firstSentence(text: string | null | undefined, max = 190): string {
  const clean = dropFileClauses(stripMarkdown(text ?? ''));
  if (!clean) return '';
  let out = clean;
  const re = /([.!?])\s+(?=[A-Z(“"])/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(clean))) {
    const candidate = clean.slice(0, m.index + 1);
    if (candidate.length >= 30) {
      out = candidate;
      break;
    }
  }
  if (out.length > max) {
    const cut = out.slice(0, max);
    const space = cut.lastIndexOf(' ');
    out = `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[,;:.\s]+$/, '')}…`;
  }
  return /[.!?…]$/.test(out) ? out : `${out}.`;
}

/**
 * Long spec names carry a build note in brackets ("Fury (dual wield)"). The
 * home cards only have room for the spec, so the bracket is dropped once the
 * name passes 12 characters.
 */
export function shortSpecName(name: string): string {
  const spec = String(name ?? '').trim();
  if (spec.length <= 12) return spec;
  return spec.replace(/\s*\([^)]*\)/g, '').replace(/\s+/g, ' ').trim() || spec;
}

/* ---- matrix rows --------------------------------------------------------- */

/** Rows a reader can act on: a named spec that the sources call playable. */
export function viableRows(entry: ClassEntry, role?: string): MatrixRow[] {
  return entry.matrix.filter(
    (r) => !!r.spec && String(r.standing).toLowerCase() !== 'not-viable' && (role === undefined || r.role === role),
  );
}

/** Roles with at least one viable row, in template order (leveling last). */
export function viableRoles(entry: ClassEntry): string[] {
  const found = new Set(viableRows(entry).map((r) => r.role));
  return [...found].sort((a, b) => roleRank(a) - roleRank(b));
}

/** The playbook a matrix row belongs to: same role, same first word of spec. */
export function playbookForRow(entry: ClassEntry, row: MatrixRow): Playbook | null {
  const spec = String(row.spec ?? '').toLowerCase();
  if (!spec) return null;
  return (
    entry.playbooks.find((p) => p.role === row.role && spec.startsWith(p.spec.toLowerCase().split(' ')[0])) ?? null
  );
}

export interface SpecRoleChip {
  role: string;
  standing: string;
  row: MatrixRow;
}

export interface SpecRow {
  spec: string;
  chips: SpecRoleChip[];
}

/**
 * Home card rows: one row per spec with a chip per role, best standing kept
 * when the same spec/role appears twice. Leveling lives in the card footer.
 */
export function homeSpecRows(entry: ClassEntry): SpecRow[] {
  const bySpec = new Map<string, { spec: string; order: number; chips: Map<string, SpecRoleChip> }>();
  entry.matrix.forEach((row, index) => {
    if (!row.spec || row.role === 'leveling') return;
    if (String(row.standing).toLowerCase() === 'not-viable') return;
    const spec = shortSpecName(row.spec);
    let bucket = bySpec.get(spec);
    if (!bucket) {
      bucket = { spec, order: index, chips: new Map() };
      bySpec.set(spec, bucket);
    }
    const current = bucket.chips.get(row.role);
    if (!current || standingRank(row.standing) < standingRank(current.standing)) {
      bucket.chips.set(row.role, { role: row.role, standing: String(row.standing), row });
    }
  });

  return [...bySpec.values()]
    .map((bucket) => {
      const chips = [...bucket.chips.values()].sort((a, b) => roleRank(a.role) - roleRank(b.role));
      const best = Math.min(...chips.map((c) => standingRank(c.standing)));
      const firstRole = Math.min(...chips.map((c) => roleRank(c.role)));
      return { spec: bucket.spec, chips, best, firstRole, order: bucket.order };
    })
    .sort((a, b) => a.best - b.best || a.firstRole - b.firstRole || a.order - b.order)
    .map(({ spec, chips }) => ({ spec, chips }));
}

/** The leveling spec the sources favour, already shortened. */
export function levelingPick(entry: ClassEntry): string | null {
  const row = entry.matrix.find((r) => r.role === 'leveling' && r.standing === 'favored' && r.spec);
  return row?.spec ? shortSpecName(row.spec) : null;
}

/* ---- class summary ------------------------------------------------------- */

// Sentences about where the text came from are provenance, not player advice.
const PROVENANCE =
  /(extracted|structured|synthesis|scrape|conventions|machine-readable|viewtopic|https?:|\.md\b|\.ya?ml\b|\/|repo\b|repositor|\bbot\b|\bgit\b|no network|written (from|\d)|forum \(f|\(f\s*=?\s*\d|\bt\s*=\s*\d)/i;

/**
 * One player-facing line for the class hero: the first sentence of the class
 * summary that is not about sources or files, or — when the summary is all
 * provenance — the favoured picks straight from the matrix.
 */
export function classOneLiner(entry: ClassEntry): string {
  const sentences = stripMarkdown(entry.summary ?? '')
    .split(/(?<=[.!?])\s+(?=[A-Z(“"])/)
    .map((s) => s.trim())
    .filter(Boolean);
  const usable = sentences.find((s) => !PROVENANCE.test(s) && s.length > 24);
  if (usable) return firstSentence(usable);
  return favoredLine(entry);
}

/** "Favored by the community: Protection for tanking, Arms for PvP." */
export function favoredLine(entry: ClassEntry): string {
  const bySpec = new Map<string, string[]>();
  [...entry.matrix]
    .filter((r) => r.spec && r.standing === 'favored' && r.role !== 'leveling' && ROLE_PHRASE[r.role])
    .sort((a, b) => roleRank(a.role) - roleRank(b.role))
    .forEach((r) => {
      const spec = shortSpecName(r.spec as string);
      const list = bySpec.get(spec) ?? [];
      if (!list.includes(ROLE_PHRASE[r.role])) list.push(ROLE_PHRASE[r.role]);
      bySpec.set(spec, list);
    });

  const parts = [...bySpec.entries()].map(([spec, roles]) => `${spec} for ${joinWords(roles)}`);
  const leveling = levelingPick(entry);
  if (parts.length === 0) {
    return leveling
      ? `The sources favour ${leveling} for leveling; no raid or PvP spec is called favored.`
      : 'No spec is called favored by the sources yet.';
  }
  return `Favored by the community: ${joinWords(parts)}${leveling ? `; level as ${leveling}` : ''}.`;
}

export function joinWords(items: string[]): string {
  if (items.length <= 1) return items[0] ?? '';
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`;
}

/* ---- 1.18.1 changes ------------------------------------------------------ */

function splitTopLevel(text: string, sep: string): string[] {
  const out: string[] = [];
  let depth = 0;
  let quoted = false;
  let buf = '';
  for (const ch of text) {
    if (ch === '"') quoted = !quoted;
    else if (ch === '“') quoted = true;
    else if (ch === '”') quoted = false;
    else if (ch === '(' || ch === '[') depth += 1;
    else if (ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
    if (ch === sep && depth === 0 && !quoted) {
      out.push(buf);
      buf = '';
      continue;
    }
    buf += ch;
  }
  out.push(buf);
  return out;
}

/**
 * `entry.patchChanges` is either a bullet list or a `;`-separated run of staff
 * items. Semicolons inside brackets or quotes are part of the sentence.
 */
export function patchItems(text: string | null | undefined): string[] {
  if (!text) return [];
  const raw = /(^|\n)\s*[-*]\s+/.test(text)
    ? text.split(/\n\s*[-*]\s+/)
    : text.split(/\n{2,}/).flatMap((para) => splitTopLevel(para, ';'));
  return raw
    .map((item) =>
      dropFileClauses(
        stripMarkdown(item)
          // an aside that only says which source file a note is filed in
          .replace(/\s*\([^)]*\b[\w./-]+\.(?:md|ya?ml)\b[^)]*\)/gi, '')
          .replace(/^[-*]\s*/, '')
          .replace(/^[;,]\s*/, ''),
      ).trim(),
    )
    .filter((item) => item.length > 1);
}

/** The staff post a class changelog was taken from, if the readme names it. */
export function patchSource(entry: ClassEntry): string | null {
  const section = entry.readme.find((s) => /1\.18\.1/.test(s.heading) && /change/i.test(s.heading));
  const inside = section ? /\(([^)]+)\)\s*$/.exec(section.heading.trim()) : null;
  return inside ? inside[1] : null;
}
