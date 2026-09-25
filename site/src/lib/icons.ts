/**
 * In-game icons (class, talent tree, talent, spell) from the Turtle WoW client,
 * as sprite-sheet cells. The index comes from `virtual:game-icons`
 * (scripts/icons-plugin.mjs over public/icons/manifest.json, written by
 * tools/icons/extract_icons.py). Every lookup returns null when there is no
 * icon, and callers then draw their text fallback.
 */
import icons from 'virtual:game-icons';

export interface IconSheet {
  url: string;
  cols: number;
  rows: number;
}

export interface IconIndex {
  size: number;
  sheets: Record<string, IconSheet>;
  /** class slug -> cell in the "common" sheet */
  classes: Record<string, number>;
  /** class slug -> TalentTab id -> cell in the "common" sheet */
  tabs: Record<string, Record<string, number>>;
  /** class slug -> tree name ("Feral Combat") -> cell in the "common" sheet */
  trees: Record<string, Record<string, number>>;
  /** class slug -> Talent id -> cell in the class sheet */
  talents: Record<string, Record<string, number>>;
  /** class slug -> spell name (as the client spells it) -> cell in the class sheet */
  spells: Record<string, Record<string, number>>;
}

export interface IconRef {
  sheet: IconSheet;
  index: number;
}

const index = icons as IconIndex;

function ref(sheetKey: string, cell: number | undefined): IconRef | null {
  const sheet = index.sheets[sheetKey];
  return sheet && typeof cell === 'number' ? { sheet, index: cell } : null;
}

export const classIcon = (slug: string): IconRef | null => ref('common', index.classes[slug.toLowerCase()]);

export const tabIcon = (slug: string, tabId: number | undefined): IconRef | null =>
  tabId === undefined ? null : ref('common', index.tabs[slug]?.[String(tabId)]);

export const talentIcon = (slug: string, talentId: number | undefined): IconRef | null =>
  talentId === undefined ? null : ref(slug, index.talents[slug]?.[String(talentId)]);

/**
 * The talent-tree icon for a spec label: "Arcane", "Feral" (Feral Combat),
 * "Fury/Protection (fury-prot)" (Fury), "Destruction (Fire)". Matched on the
 * first word.
 */
export function specIcon(slug: string, spec: string): IconRef | null {
  const trees = index.trees[slug] ?? {};
  const first = (s: string) => (s.toLowerCase().match(/[a-z]+/) ?? [''])[0];
  const want = first(spec);
  const name = Object.keys(trees).find((n) => first(n) === want);
  return name ? ref('common', trees[name]) : null;
}

/* ---- spells by name ----------------------------------------------------- */

interface SpellMatcher {
  exact: Map<string, { name: string; cell: number }>;
  /** Longest names first, for scanning free text. */
  re: RegExp | null;
}

const matchers = new Map<string, SpellMatcher>();
const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/**
 * Spell names that are also everyday words ("Charge", "Heal", "Fear"): in free
 * text they are skipped right after a full stop, where the capital proves nothing.
 */
const PROSE_WORDS = /^(Attack|Shoot|Throw|Charge|Rest|Fade|Mark|Heal|Fear|Kick|Dash|Sprint|Blind|Silence|Stealth|Vanish|Purge|Taunt|Distract|Feint|Rend|Sap|Gouge|Disarm|Bash|Growl|Bite|Claw|Cower|Prowl|Track Humanoids|Levitate|Slow|Sacrifice)$/;

function matcher(slug: string): SpellMatcher {
  let m = matchers.get(slug);
  if (m) return m;
  const spells = index.spells[slug] ?? {};
  const exact = new Map<string, { name: string; cell: number }>();
  for (const [name, cell] of Object.entries(spells)) exact.set(name.toLowerCase(), { name, cell });
  const scan = Object.keys(spells)
    .filter((n) => n.length >= 4)
    .sort((a, b) => b.length - a.length)
    .map(escapeRe);
  m = { exact, re: scan.length ? new RegExp(`(?<![\\w'’])(?:${scan.join('|')})(?![\\w'’])`, 'g') : null };
  matchers.set(slug, m);
  return m;
}

/** "Arcane Missiles", "arcane missiles (max rank)", "Frostbolt rank 1" -> the spell's icon. */
export function spellIcon(slug: string, name: string): (IconRef & { name: string }) | null {
  const key = name
    .trim()
    .replace(/\s*\((?:max rank|rank \d+|r\d+)\)\s*$/i, '')
    .replace(/\s+(?:rank\s*\d+|r\d+)$/i, '')
    .toLowerCase();
  const hit = matcher(slug).exact.get(key);
  const r = hit ? ref(slug, hit.cell) : null;
  return r && hit ? { ...r, name: hit.name } : null;
}

/**
 * A code span that starts with a spell name and goes on in lower case
 * ("Stormstrike if ready", "Rockbiter Weapon on MH if missing") -> that spell.
 */
export function spellAtStart(slug: string, text: string): (IconRef & { name: string }) | null {
  const exact = spellIcon(slug, text);
  if (exact) return exact;
  const lower = text.toLowerCase();
  let best: { name: string; cell: number } | null = null;
  for (const [key, hit] of matcher(slug).exact) {
    if (lower.startsWith(`${key} `) && /^ [a-z(]/.test(text.slice(key.length)) && (!best || hit.name.length > best.name.length)) best = hit;
  }
  const r = best ? ref(slug, best.cell) : null;
  return r && best ? { ...r, name: best.name } : null;
}

/**
 * The spells named in a line of free text, in order of appearance, up to `max`
 * ("Moonfire + Insect Swarm" -> Moonfire, Insect Swarm). Case-sensitive whole
 * words, longest name first; a name that is also an everyday word ("Charge",
 * "Heal") is skipped at the start of a new sentence.
 */
export function spellsIn(slug: string, text: string, max = 3): (IconRef & { name: string })[] {
  const plain = text.replace(/<[^>]+>/g, ' ');
  const whole = spellIcon(slug, plain.replace(/[`*_]/g, ''));
  if (whole) return [whole];
  const { re, exact } = matcher(slug);
  if (!re) return [];
  const out: (IconRef & { name: string })[] = [];
  const seen = new Set<string>();
  for (const m of plain.matchAll(re)) {
    const hit = exact.get(m[0].toLowerCase());
    if (!hit || seen.has(hit.name)) continue;
    if (PROSE_WORDS.test(hit.name) && /[.!?]\s+$/.test(plain.slice(0, m.index))) continue;
    const r = ref(slug, hit.cell);
    if (!r) continue;
    seen.add(hit.name);
    out.push({ ...r, name: hit.name });
    if (out.length >= max) break;
  }
  return out;
}

/* ---- sheet loading ------------------------------------------------------ */

type SheetState = 'loading' | 'ok' | 'error';
const states = new Map<string, SheetState>();
const listeners = new Set<() => void>();

/** Starts (once) fetching a sheet; the result is shared by every icon on it. */
export function sheetState(url: string): SheetState {
  const s = states.get(url);
  if (s) return s;
  if (typeof window === 'undefined' || typeof (window as { Image?: unknown }).Image !== 'function') return 'loading';
  states.set(url, 'loading');
  const img = new window.Image();
  img.decoding = 'async';
  img.onload = () => {
    states.set(url, 'ok');
    listeners.forEach((l) => l());
  };
  img.onerror = () => {
    states.set(url, 'error');
    listeners.forEach((l) => l());
  };
  img.src = url;
  return 'loading';
}

export function subscribeSheets(cb: () => void): () => void {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

/** CSS that shows one cell of a sheet, at any element size. */
export function cellStyle(r: IconRef): { backgroundImage: string; backgroundSize: string; backgroundPosition: string } {
  const { cols, rows, url } = r.sheet;
  const col = r.index % cols;
  const row = Math.floor(r.index / cols);
  const x = cols > 1 ? (col / (cols - 1)) * 100 : 0;
  const y = rows > 1 ? (row / (rows - 1)) * 100 : 0;
  return {
    backgroundImage: `url("${url}")`,
    backgroundSize: `${cols * 100}% ${rows * 100}%`,
    backgroundPosition: `${x}% ${y}%`,
  };
}
