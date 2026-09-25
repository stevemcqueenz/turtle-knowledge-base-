import type { ReactNode } from 'react';
import { splitCitations, type CitedPart } from '../lib/citations';
import type { DiscordCitation } from '../types';

/** One run of adjacent citations as the site's quiet superscript marker. */
export function CiteGroup({ cites }: { cites: DiscordCitation[] }) {
  return (
    <span className="cite-group">
      <button
        type="button"
        className="cite-mark"
        aria-expanded="false"
        aria-label={`${cites.length === 1 ? 'Source' : `${cites.length} sources`}: ${cites.map((c) => c.label).join('; ')}`}
      >
        {cites.length > 1 ? cites.length : ''}
      </button>
      <span className="cite-list">
        {cites.map((cite, i) =>
          cite.url ? (
            <a key={i} className="cite cite-discord" href={cite.url} data-quote={cite.title} target="_blank" rel="noopener noreferrer">
              {cite.label}
            </a>
          ) : (
            <span key={i} className="cite cite-discord cite-unknown" data-quote={cite.title}>
              {cite.label}
            </span>
          ),
        )}
      </span>
    </span>
  );
}

/**
 * Plain text from the structured YAML with its `[[d:channel#id]]` citations
 * rendered as the same markers the Markdown gets.
 */
export function CitedText({ text }: { text: string }) {
  if (!text.includes('[[d:')) return <>{text}</>;
  const parts = splitCitations(text);
  const out: ReactNode[] = [];
  let run: DiscordCitation[] = [];
  const flush = (key: number) => {
    if (run.length) out.push(<CiteGroup key={`c${key}`} cites={run} />);
    run = [];
  };
  parts.forEach((part: CitedPart, i) => {
    if ('cite' in part) {
      run.push(part.cite);
      return;
    }
    // separators between citations belong to the marker
    if (run.length && /^[\s,;]*$/.test(part.text) && i + 1 < parts.length && 'cite' in parts[i + 1]) return;
    flush(i);
    const nextIsCite = i + 1 < parts.length && 'cite' in parts[i + 1];
    out.push(<span key={i}>{nextIsCite ? part.text.replace(/\s+$/, '') : part.text}</span>);
  });
  flush(parts.length);
  return <span className="cited">{out}</span>;
}

/** Text with its citations removed (headings, labels, one-liners). */
export function stripCites(text: string): string {
  return text
    .replace(/\[\[d:[^\]]*\]\]/g, '')
    .replace(/\s+([,.;:)])/g, '$1')
    .replace(/\(\s*[,;]?\s*\)/g, '')
    .replace(/[\s,;]+$/, '')
    .replace(/\s{2,}/g, ' ')
    .trim();
}
