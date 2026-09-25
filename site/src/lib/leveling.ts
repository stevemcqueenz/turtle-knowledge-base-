/**
 * Readers for the class leveling guides: which sections are the talent-order
 * tables (shown as the timeline, their raw tables folded under it), and the
 * readable name of each path.
 */
import type { LevelingPath, Section } from '../types';

const strip = (s: string) =>
  s
    .replace(/<[^>]+>/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

/** The leveling section a talent path was parsed from. */
export function sectionOfPath(sections: Section[], path: LevelingPath): Section | undefined {
  return sections.find((s) => strip(s.heading) === path.title) ?? sections.find((s) => path.id.startsWith(`${s.id}-`));
}

/** "Talent order: Frost (10-60)" -> "Frost"; "Talent order 10 → 60 (Beast Mastery)" -> "Beast Mastery". */
export function pathName(path: LevelingPath): string {
  if (path.subtitle) return path.subtitle.replace(/\s*\(.*\)\s*$/, '');
  const t = path.title;
  const paren = /\(([^)]*)\)/.exec(t);
  const afterColon = /:\s*(.+)$/.exec(t);
  let name = afterColon ? afterColon[1] : paren ? paren[1] : t;
  if (afterColon && /^\d/.test(name) && paren) name = paren[1];
  name = name
    .replace(/,?\s*level\s*\d+\s*[→-]\s*\d+/i, '')
    .replace(/\s*\((?:\d+\s*[-–]\s*\d+)[^)]*\)/, '')
    .replace(/^Talent order\s*/i, '')
    .trim();
  return name || t;
}
