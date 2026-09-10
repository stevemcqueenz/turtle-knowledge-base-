import type { YamlSource } from '../types';
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

/** `[author · tier · date]` chip that links to the archived forum post. */
export function CitationChip({ source }: CitationChipProps) {
  const theme = useThemeValue();
  const tier = String(source.authority ?? '').toLowerCase();
  const raw = TIER_COLOR[tier];
  const color = raw && raw.startsWith('#') ? readableColor(raw, theme) : 'rgb(var(--c-muted))';
  const label = [source.author, tier || null, source.date].filter(Boolean).join(' · ');
  const url = typeof source.url === 'string' ? source.url : null;
  const title = `${label}${url ? ` — ${url}` : ''}`;

  const inner = (
    <>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
      <span className="min-w-0 truncate">{label || 'source'}</span>
    </>
  );

  if (!url) {
    return (
      <span className="chip hairline min-w-0 max-w-full bg-surface2 text-xs text-muted" title={title}>
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
      className="chip hairline min-w-0 max-w-full bg-surface2 text-xs text-muted transition-colors hover:text-ink"
    >
      {inner}
    </a>
  );
}
