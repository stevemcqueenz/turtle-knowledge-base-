import { classes, glossary, roleLabel } from './site';
import { href } from './router';

export type SearchKind = 'class' | 'playbook' | 'leveling' | 'glossary' | 'page';

export interface SearchItem {
  kind: SearchKind;
  label: string;
  detail: string;
  href: string | null;
  /** glossary term, used when the result opens the glossary panel instead */
  term?: string;
  haystack: string;
  color?: string;
}

export const searchItems: SearchItem[] = (() => {
  const items: SearchItem[] = [];
  for (const c of classes) {
    items.push({
      kind: 'class',
      label: c.name,
      detail: 'Class overview',
      href: href.class(c.slug),
      haystack: `${c.name} ${c.slug}`.toLowerCase(),
      color: c.color,
    });
    for (const p of c.playbooks) {
      items.push({
        kind: 'playbook',
        label: `${c.name} — ${p.spec} ${p.roleLabel}`,
        detail: p.title,
        href: href.playbook(c.slug, p.id),
        haystack: `${c.name} ${p.spec} ${p.roleLabel} ${p.role} ${p.title} ${p.id}`.toLowerCase(),
        color: c.color,
      });
    }
    if (c.leveling) {
      items.push({
        kind: 'leveling',
        label: `${c.name} — Leveling`,
        detail: 'Leveling guide',
        href: href.leveling(c.slug),
        haystack: `${c.name} leveling levelling 1-60`.toLowerCase(),
        color: c.color,
      });
    }
  }
  items.push({
    kind: 'page',
    label: 'Spec × role matrix',
    detail: 'Every class, every role',
    href: href.matrix(),
    haystack: 'matrix spec role coverage grid',
  });
  items.push({
    kind: 'page',
    label: 'About the data',
    detail: 'Sources, tiers, counts',
    href: href.about(),
    haystack: 'about sources tiers evidence counts data',
  });
  for (const g of glossary) {
    items.push({
      kind: 'glossary',
      label: g.term,
      detail: g.meaning,
      href: null,
      term: g.term,
      haystack: `${g.term} ${g.category ?? ''} ${g.meaning}`.toLowerCase(),
    });
  }
  return items;
})();

/** Score one query token against an item: prefix > word start > substring > subsequence. */
function tokenScore(token: string, item: SearchItem): number {
  const label = item.label.toLowerCase();
  const hay = item.haystack;
  if (label === token) return 1000;
  if (label.startsWith(token)) return 900 - label.length;
  if (new RegExp(`\\b${token.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`).test(label)) return 800 - label.length;
  if (label.includes(token)) return 700 - label.length;
  if (hay.includes(token)) return 500 - hay.indexOf(token);
  // subsequence match on the label ("prtwar" -> "Protection Warrior")
  let i = 0;
  let gaps = 0;
  for (const ch of label) {
    if (ch === token[i]) i += 1;
    else if (i > 0 && i < token.length) gaps += 1;
    if (i === token.length) break;
  }
  if (i === token.length) return 300 - Math.min(gaps, 200);
  return -1;
}

/** Guides rank above glossary entries for the same textual match. */
const KIND_WEIGHT: Record<SearchKind, number> = {
  class: 140,
  playbook: 120,
  leveling: 100,
  page: 40,
  glossary: -150,
};

/** Multi-token fuzzy score; every token must match somewhere. */
export function score(query: string, item: SearchItem): number {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return 0;
  let total = 0;
  for (const token of tokens) {
    const s = tokenScore(token, item);
    if (s < 0) return -1;
    total += s;
  }
  return total / tokens.length + KIND_WEIGHT[item.kind];
}

const KIND_RANK: Record<SearchKind, number> = {
  class: 0,
  playbook: 1,
  leveling: 2,
  page: 3,
  glossary: 4,
};

export function search(query: string, limit = 20): SearchItem[] {
  const q = query.trim();
  if (!q) return searchItems.filter((i) => i.kind === 'class').slice(0, limit);
  return searchItems
    .map((item) => ({ item, s: score(q, item) }))
    .filter((r) => r.s >= 0)
    .sort((a, b) => b.s - a.s || KIND_RANK[a.item.kind] - KIND_RANK[b.item.kind])
    .slice(0, limit)
    .map((r) => r.item);
}

export function roleChipLabel(role: string): string {
  return roleLabel(role);
}
