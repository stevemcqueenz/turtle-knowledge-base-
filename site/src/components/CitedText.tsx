import { splitCitations } from '../lib/citations';

/**
 * Plain text from the structured YAML with its `[[d:channel#id]]` citations
 * rendered as the same chips build-data.py emits into the Markdown.
 */
export function CitedText({ text }: { text: string }) {
  if (!text.includes('[[d:')) return <>{text}</>;
  return (
    <span className="cited">
      {splitCitations(text).map((part, i) => {
        if ('text' in part) return <span key={i}>{part.text}</span>;
        const { cite } = part;
        if (!cite.url) {
          return (
            <span key={i} className="cite cite-discord cite-unknown" title={cite.title}>
              {cite.label}
            </span>
          );
        }
        return (
          <a key={i} className="cite cite-discord" href={cite.url} title={cite.title} target="_blank" rel="noopener noreferrer">
            {cite.label}
          </a>
        );
      })}
    </span>
  );
}
