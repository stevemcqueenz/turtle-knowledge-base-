import type { ClassEntry, ClassSummary, MatrixRow, Playbook, PlaybookYaml } from '../types';
import { coreData } from '../data';

export const ROLE_ORDER = ['tank', 'healer', 'melee-dps', 'ranged-dps', 'pvp'] as const;

export const ROLE_LABELS: Record<string, string> = {
  tank: 'Tank',
  healer: 'Healer',
  'melee-dps': 'Melee DPS',
  'ranged-dps': 'Ranged DPS',
  pvp: 'PvP',
  leveling: 'Leveling',
};

export function roleLabel(role: string): string {
  return ROLE_LABELS[role] ?? role;
}

export function roleRank(role: string): number {
  const i = (ROLE_ORDER as readonly string[]).indexOf(role);
  return i === -1 ? ROLE_ORDER.length : i;
}

export const core = coreData;
export const classes: ClassSummary[] = coreData.classes;
export const glossary = coreData.glossary;
export const meta = coreData.meta;

const classIndex = new Map(classes.map((c) => [c.slug, c]));

export function getClassSummary(slug: string): ClassSummary | undefined {
  return classIndex.get(slug);
}

export function playbookNeighbours(entry: ClassEntry, id: string): { prev: Playbook | null; next: Playbook | null } {
  const i = entry.playbooks.findIndex((p) => p.id === id);
  return {
    prev: i > 0 ? entry.playbooks[i - 1] : null,
    next: i >= 0 && i < entry.playbooks.length - 1 ? entry.playbooks[i + 1] : null,
  };
}

/* ---- badges ------------------------------------------------------------- */

export interface BadgeMeta {
  label: string;
  color: string;
  title?: string;
}

const STANDING_COLORS: Record<string, string> = {
  favored: '#3ddc84',
  alternative: '#4ea1ff',
  niche: '#f5b942',
  'not-viable': '#8a8f98',
};

const STANDING_LABELS: Record<string, string> = {
  favored: 'Favored',
  alternative: 'Alternative',
  niche: 'Niche',
  'not-viable': 'Not viable',
};

export function standingMeta(standing: string | null | undefined): BadgeMeta | null {
  if (!standing) return null;
  const key = String(standing).toLowerCase();
  return {
    label: STANDING_LABELS[key] ?? String(standing),
    color: STANDING_COLORS[key] ?? '#8a8f98',
    title: `Community standing: ${standing}`,
  };
}

/**
 * `agreement` is a clean enum in the matrix rows but a free-text sentence in the
 * playbook YAML ("strong consensus on mechanics ... contested on standing"), so
 * the badge is keyed off the words that appear in it and the full text is kept
 * in the tooltip.
 */
export function agreementMeta(agreement: string | null | undefined): BadgeMeta | null {
  if (!agreement) return null;
  const text = String(agreement);
  const lower = text.toLowerCase();
  if (lower.includes('contested')) return { label: 'Contested', color: '#f08a3c', title: text };
  if (lower.includes('consensus')) return { label: 'Consensus', color: '#3ddc84', title: text };
  if (lower.includes('single')) return { label: 'Single source', color: '#8a8f98', title: text };
  return { label: text.length > 28 ? `${text.slice(0, 27)}…` : text, color: '#8a8f98', title: text };
}

export function patchValidityMeta(yaml: PlaybookYaml | null | undefined): BadgeMeta | null {
  const pv = yaml?.patch_validity;
  if (!pv) return null;
  const value = pv.valid_for_1181;
  const details = [pv.written_for ? `Written for: ${pv.written_for}` : '', pv.notes ? String(pv.notes) : '']
    .filter(Boolean)
    .join('\n');
  if (value === true) return { label: 'Valid for 1.18.1', color: '#3ddc84', title: details };
  if (value === false) return { label: 'Pre-1.18.1 advice', color: '#f08a3c', title: details };
  return { label: 'Validity unknown', color: '#8a8f98', title: details };
}

/* ---- YAML shape helpers -------------------------------------------------- */

export function isPlainObject(v: unknown): v is Record<string, unknown> {
  return typeof v === 'object' && v !== null && !Array.isArray(v);
}

export function isEmptyValue(v: unknown): boolean {
  if (v === null || v === undefined || v === '') return true;
  if (Array.isArray(v)) return v.length === 0;
  if (isPlainObject(v)) return Object.keys(v).length === 0;
  return false;
}

/** Human label for a YAML key: `stat_weights` -> `Stat weights`. */
export function humanizeKey(key: string): string {
  const spaced = key.replace(/[_-]+/g, ' ').trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export function scalarToString(v: unknown): string {
  if (v === null || v === undefined) return '—';
  if (typeof v === 'boolean') return v ? 'yes' : 'no';
  return String(v);
}

/** `synthesis/classes/druid/feral-tank.md` -> `{ slug: 'druid', id: 'feral-tank' }`. */
export function routeFromPlaybookPath(path: string | null | undefined): { slug: string; id: string } | null {
  if (!path) return null;
  const m = /classes\/([a-z]+)\/([^/]+)\.md$/i.exec(path);
  if (!m) return null;
  return { slug: m[1].toLowerCase(), id: m[2] };
}

/** The spec page a forum-era matrix row points at, when this site has it. */
export function matrixRowTarget(row: MatrixRow, fallbackClass?: string): { slug: string; id: string } | null {
  const target = routeFromPlaybookPath(row.playbook_path);
  if (target && getClassSummary(target.slug)?.playbooks.some((p) => p.id === target.id)) return target;
  const slug = (row.class ?? fallbackClass ?? '').toLowerCase();
  const entry = getClassSummary(slug);
  if (!entry) return null;
  const specKey = String(row.spec ?? '').toLowerCase();
  const match = entry.playbooks.find((p) => p.role === row.role && specKey.startsWith(p.spec.toLowerCase().split(' ')[0]));
  return match ? { slug, id: match.id } : null;
}

/** A playbook's spec name for display: "Fury/Protection (fury-prot)" -> "Fury/Protection". */
export function specLabel(spec: string): string {
  return spec.replace(/\s*\([^)]*\)\s*$/, '').trim() || spec;
}

/**
 * A spec page's name among its class's pages: the plain spec name, the build
 * in brackets when two pages share name and role ("Destruction (Fire)",
 * "Destruction (Shadow)"), and the role when `withRole` and two pages share
 * only the name ("Combat Tank").
 */
export function distinctSpecLabel(
  p: { spec: string; role: string; roleLabel: string },
  all: { spec: string; role: string }[],
  withRole = false,
): string {
  const label = specLabel(p.spec);
  const same = all.filter((q) => specLabel(q.spec) === label);
  if (same.length < 2) return label;
  if (same.filter((q) => q.role === p.role).length > 1) {
    const inner = /\(([^):,]+)/.exec(p.spec)?.[1]?.trim();
    return inner ? `${label} (${inner})` : p.spec;
  }
  return withRole ? `${label} ${p.roleLabel}` : label;
}
