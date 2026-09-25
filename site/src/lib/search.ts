import { classes, core, glossary, specLabel } from './site';
import { href } from './router';
import { INSTANCE_KIND_LABEL, bossAnchor } from './instances';

export type SearchKind = 'class' | 'spec' | 'section' | 'leveling' | 'instance' | 'boss' | 'glossary' | 'page';

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

const clean = (s: string) => s.replace(/\s+/g, ' ').trim();

/**
 * Everything search can find, built from the small core module (no class chunk
 * needs to be loaded): classes, spec guides and every one of their section
 * headings, leveling guides, class-page sections, dungeon and raid pages with
 * their bosses, the glossary, and the site's own pages.
 */
export const searchItems: SearchItem[] = (() => {
  const items: SearchItem[] = [];
  for (const c of classes) {
    items.push({
      kind: 'class',
      label: c.name,
      detail: 'Class overview · viability · races · professions',
      href: href.class(c.slug),
      haystack: `${c.name} ${c.slug} class`.toLowerCase(),
      color: c.color,
    });
    for (const h of c.readmeHeadings) {
      items.push({
        kind: 'section',
        label: clean(h.heading),
        detail: `${c.name} overview`,
        href: href.section(href.class(c.slug), h.id),
        haystack: `${h.heading} ${c.name}`.toLowerCase(),
        color: c.color,
      });
    }
    for (const p of c.playbooks) {
      const name = `${specLabel(p.spec)} ${c.name}`;
      items.push({
        kind: 'spec',
        label: name,
        detail: [p.roleLabel, p.recommended].filter(Boolean).join(' · '),
        href: href.playbook(c.slug, p.id),
        haystack: `${c.name} ${p.spec} ${p.roleLabel} ${p.role} ${p.title} ${p.id} ${p.recommended ?? ''}`.toLowerCase(),
        color: c.color,
      });
      for (const h of p.headings) {
        items.push({
          kind: 'section',
          label: clean(h.heading),
          detail: `${name} · ${p.roleLabel}`,
          href: href.section(href.playbook(c.slug, p.id), h.id),
          haystack: `${h.heading} ${c.name} ${p.spec} ${p.roleLabel}`.toLowerCase(),
          color: c.color,
        });
      }
    }
    if (c.leveling) {
      items.push({
        kind: 'leveling',
        label: `Leveling a ${c.name}`,
        detail: 'Which spec, talent order 10-60, what to press',
        href: href.leveling(c.slug),
        haystack: `${c.name} leveling levelling 1-60 10-60 talent order`.toLowerCase(),
        color: c.color,
      });
      for (const h of c.leveling.headings) {
        items.push({
          kind: 'section',
          label: clean(h.heading),
          detail: `${c.name} leveling`,
          href: href.section(href.leveling(c.slug), h.id),
          haystack: `${h.heading} ${c.name} leveling`.toLowerCase(),
          color: c.color,
        });
      }
    }
    if (c.sources) {
      items.push({
        kind: 'page',
        label: `${c.name} sources`,
        detail: c.sources.title,
        href: href.sources(c.slug),
        haystack: `${c.name} sources experts gaps evidence`.toLowerCase(),
        color: c.color,
      });
    }
    for (const d of c.guidePages) {
      items.push({
        kind: 'page',
        label: d.title,
        detail: `${c.name} guide page`,
        href: href.guidePage(c.slug, d.slug),
        haystack: `${c.name} ${d.title} ${d.slug}`.toLowerCase(),
        color: c.color,
      });
    }
  }
  const inst = core.instances;
  if (inst) {
    items.push({
      kind: 'page',
      label: 'Dungeons & Raids',
      detail: 'Every dungeon and raid page',
      href: href.instances(),
      haystack: 'dungeons raids instances index world bosses',
    });
    for (const p of inst.pages) {
      const kind = p.kind ? INSTANCE_KIND_LABEL[p.kind] : 'Instance';
      items.push({
        kind: 'instance',
        label: p.title,
        detail: p.group ? `${kind} · ${p.group}` : kind,
        href: href.instance(p.slug),
        haystack: `${p.title} ${p.slug} ${kind} ${p.group ?? ''}`.toLowerCase(),
      });
      for (const boss of p.bosses) {
        items.push({
          kind: 'boss',
          label: clean(boss),
          detail: p.title,
          href: href.section(href.instance(p.slug), bossAnchor(boss)),
          haystack: `${boss} ${p.title}`.toLowerCase(),
        });
      }
    }
  }
  items.push({
    kind: 'page',
    label: 'Viability board',
    detail: 'Every spec of every class, rated for raid, dungeon, PvP, leveling, farming',
    href: href.matrix(),
    haystack: 'matrix viability board tier list ratings spec role best',
  });
  items.push({
    kind: 'page',
    label: 'About this archive',
    detail: 'Where the guides come from and how to read the citations',
    href: href.about(),
    haystack: 'about sources evidence discord forum wiki archive provenance citations bots yaml',
  });
  items.push({
    kind: 'page',
    label: 'Forum-era research archive',
    detail: 'The earlier spec × role matrix built from the forum',
    href: href.archive(),
    haystack: 'archive forum research matrix coverage synthesis',
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

const escapeRe = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Score one query token against an item: prefix > word start > substring > subsequence. */
function tokenScore(token: string, item: SearchItem): number {
  const label = item.label.toLowerCase();
  const hay = item.haystack;
  if (label === token) return 1000;
  if (label.startsWith(token)) return 900 - label.length;
  if (new RegExp(`\\b${escapeRe(token)}`).test(label)) return 800 - label.length;
  if (label.includes(token)) return 700 - label.length;
  if (new RegExp(`\\b${escapeRe(token)}`).test(hay)) return 560 - Math.min(hay.indexOf(token), 200);
  if (hay.includes(token)) return 500 - Math.min(hay.indexOf(token), 200);
  if (token.length < 3) return -1;
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

/** Guides rank above headings, headings above glossary entries, for the same match. */
const KIND_WEIGHT: Record<SearchKind, number> = {
  class: 160,
  spec: 140,
  leveling: 120,
  instance: 110,
  page: 60,
  boss: 50,
  section: 30,
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

export function search(query: string, limit = 30): SearchItem[] {
  const q = query.trim();
  if (!q) return searchItems.filter((i) => i.kind === 'class' || i.kind === 'page').slice(0, limit);
  return searchItems
    .map((item) => ({ item, s: score(q, item) }))
    .filter((r) => r.s >= 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, limit)
    .map((r) => r.item);
}
