import type { InstanceKind, InstanceSummary } from '../types';
import { coreData } from '../data';

/** The instance index from the core module (titles, groups, boss names). */
export const instanceIndex = coreData.instances;

const summaryIndex = new Map((instanceIndex?.pages ?? []).map((p) => [p.slug, p]));

export function getInstanceSummary(slug: string): InstanceSummary | undefined {
  return summaryIndex.get(slug);
}

export const INSTANCE_KIND_LABEL: Record<InstanceKind, string> = {
  dungeon: 'Dungeon',
  raid: 'Raid',
};

/** Previous / next page of the same kind, in index order. */
export function instanceNeighbours(slug: string): { prev: InstanceSummary | null; next: InstanceSummary | null } {
  const page = summaryIndex.get(slug);
  const same = (instanceIndex?.pages ?? []).filter((p) => p.kind === page?.kind);
  const i = same.findIndex((p) => p.slug === slug);
  return {
    prev: i > 0 ? same[i - 1] : null,
    next: i >= 0 && i < same.length - 1 ? same[i + 1] : null,
  };
}

/** The anchor id of a boss (an H3 inside an instance page): `boss-<slug>`. */
export function bossAnchor(name: string): string {
  const slug = name
    .replace(/<[^>]+>/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `boss-${slug || 'section'}`;
}

export interface IndexRow {
  slug: string | null;
  cells: string[];
}

export interface IndexTable {
  heading: string;
  intro: string;
  columns: string[];
  rows: IndexRow[];
}

/**
 * The index's group Markdown ("### Turtle-custom dungeons" + a table) as plain
 * rows: the cards on the Dungeons & Raids page are built from these, and the
 * table stays available as Markdown.
 */
export function indexTables(markdown: string): IndexTable[] {
  const out: IndexTable[] = [];
  let heading = '';
  let intro: string[] = [];
  let hadTable = false;
  // A sub-group with prose but no table ("World bosses: ... [world-bosses](...)")
  // becomes a table of the pages its prose links.
  const flushProse = () => {
    const text = intro.join('\n').trim();
    if (!text) return;
    if (hadTable) {
      out.push({ heading: '', intro: text, columns: [], rows: [] });
      return;
    }
    const slugs = [...new Set([...text.matchAll(/#\/instances\/([a-z0-9-]+)/g)].map((m) => m[1]))];
    out.push({
      heading,
      intro: text,
      columns: slugs.length ? ['Page'] : [],
      rows: slugs.map((slug) => ({ slug, cells: [summaryIndex.get(slug)?.title ?? slug] })),
    });
  };
  const lines = markdown.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('### ')) {
      flushProse();
      heading = line.slice(4).trim();
      intro = [];
      hadTable = false;
      continue;
    }
    if (line.startsWith('|') && /^\|?\s*:?-{3,}/.test(lines[i + 1] ?? '')) {
      if (hadTable) {
        flushProse();
        intro = [];
      }
      const split = (l: string) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => c.trim());
      const columns = split(line);
      const rows: IndexRow[] = [];
      i += 2;
      while (i < lines.length && lines[i].startsWith('|')) {
        const cells = split(lines[i]);
        const m = /#\/instances\/([a-z0-9-]+)/.exec(lines[i]);
        rows.push({ slug: m ? m[1] : null, cells });
        i += 1;
      }
      i -= 1;
      out.push({ heading, intro: intro.join('\n').trim(), columns, rows });
      intro = [];
      hadTable = true;
      continue;
    }
    intro.push(line);
  }
  flushProse();
  return out;
}
