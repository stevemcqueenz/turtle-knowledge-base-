import type { DiscordCitation } from '../types';
import { classes } from './site';

/** `[[d:<channel>#<message id>]]`, the knowledge base's Discord citation. */
export const DISCORD_CITE = /\[\[d:([a-z0-9_-]+)#(\d+)\]\]/g;

const index = new Map<string, DiscordCitation>();
for (const c of classes) {
  for (const [key, value] of Object.entries(c.citations ?? {})) if (!index.has(key)) index.set(key, value);
}

export function discordCitation(channel: string, id: string): DiscordCitation {
  return (
    index.get(`${channel}#${id}`) ?? {
      label: `#${channel}`,
      title: `Discord #${channel}, message ${id}`,
      url: null,
    }
  );
}

export type CitedPart = { text: string } | { cite: DiscordCitation };

/** Splits plain text into text runs and Discord citations. */
export function splitCitations(text: string): CitedPart[] {
  const parts: CitedPart[] = [];
  let last = 0;
  for (const m of text.matchAll(DISCORD_CITE)) {
    const at = m.index ?? 0;
    if (at > last) parts.push({ text: text.slice(last, at) });
    parts.push({ cite: discordCitation(m[1], m[2]) });
    last = at + m[0].length;
  }
  if (last < text.length) parts.push({ text: text.slice(last) });
  return parts;
}

/** Plain text with the citations removed (for tooltips and one-liners). */
export function withoutCitations(text: string): string {
  return text
    .replace(DISCORD_CITE, '')
    .replace(/\s+([,.;:)])/g, '$1')
    .replace(/\(\s*[,;]?\s*\)/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
