import type { InstanceKind, InstancePage } from '../types';
import { siteData } from '../data';

export const instances = siteData.instances;

const pageIndex = new Map((instances?.pages ?? []).map((p) => [p.slug, p]));

export function getInstance(slug: string): InstancePage | undefined {
  return pageIndex.get(slug);
}

export const INSTANCE_KIND_LABEL: Record<InstanceKind, string> = {
  dungeon: 'Dungeon',
  raid: 'Raid',
};

/** Previous / next page of the same kind, in index order. */
export function instanceNeighbours(page: InstancePage): { prev: InstancePage | null; next: InstancePage | null } {
  const same = (instances?.pages ?? []).filter((p) => p.kind === page.kind);
  const i = same.findIndex((p) => p.slug === page.slug);
  return {
    prev: i > 0 ? same[i - 1] : null,
    next: i >= 0 && i < same.length - 1 ? same[i + 1] : null,
  };
}

/** The boss and sub-section names inside a page (its H3 headings), for search. */
export function instanceSubheadings(page: InstancePage): string[] {
  const out: string[] = [];
  for (const s of page.sections) {
    for (const line of s.markdown.split('\n')) {
      const m = /^###\s+(.+)$/.exec(line);
      if (m) out.push(m[1].replace(/<[^>]+>/g, '').trim());
    }
  }
  return out;
}

/** Header band tint for the instance pages (the site accent). */
export const INSTANCE_BAND = 'linear-gradient(180deg, rgb(var(--c-accent) / 0.13) 0%, rgb(var(--c-accent) / 0) 100%)';
