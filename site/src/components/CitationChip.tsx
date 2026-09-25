import type { YamlSource } from '../types';
import { DISCORD_CITE, discordCitation } from '../lib/citations';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';

const TIER_COLOR: Record<string, string> = {
  staff: '#8dc63f',
  player: 'rgb(var(--c-muted))',
  wiki: '#b07cf0',
};

interface CitationChipProps {
  source: YamlSource;
}

/** `[author · tier · date]` inline-flex items-center gap-1 rounded-[4px] px-1.5 py-0.5 font-medium that links to the archived forum post. */
export function CitationChip({ source }: CitationChipProps) {
  const theme = useThemeValue();
  const tier = String(source.authority ?? '').toLowerCase();
  const raw = TIER_COLOR[tier];
  const color = raw && raw.startsWith('#') ? readableColor(raw, theme) : 'rgb(var(--c-muted))';
  // A Discord source carries `cite: "[[d:channel#id]]"` instead of a URL.
  const discord = typeof source.cite === 'string' ? new RegExp(DISCORD_CITE.source).exec(source.cite) : null;
  const message = discord ? discordCitation(discord[1], discord[2]) : null;
  const label = [source.author, tier || null, source.date].filter(Boolean).join(' · ');
  const url = typeof source.url === 'string' ? source.url : (message?.url ?? null);
  const title = message ? message.title : `${label}${url ? ` — ${url}` : ''}`;

  const inner = (
    <>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
      <span className="min-w-0 truncate">{label || 'source'}</span>
    </>
  );

  if (!url) {
    return (
      <span className="inline-flex items-center gap-1 rounded-[4px] px-1.5 py-0.5 font-medium border min-w-0 max-w-full bg-muted text-xs text-muted-foreground" title={title}>
        {inner}
      </span>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className="inline-flex items-center gap-1 rounded-[4px] px-1.5 py-0.5 font-medium border min-w-0 max-w-full bg-muted text-xs text-muted-foreground transition-colors hover:text-foreground"
    >
      {inner}
    </a>
  );
}
