import { createContext, useContext, useLayoutEffect, useMemo, useRef, type RefObject } from 'react';
import { enhanceMarkdownDom, renderInlineMarkdown, renderMarkdown } from '../lib/markdown';

interface MarkdownProps {
  source: string;
  className?: string;
  /** Render one line of Markdown into a span (no paragraphs, no block elements). */
  inline?: boolean;
  /** Class slug: ability names written as `code` get that class's spell icon. */
  spells?: string;
}

/** The class whose spell icons `Markdown` puts in front of ability names in a subtree. */
export const SpellClass = createContext<string | undefined>(undefined);

/**
 * Renders repository Markdown. The HTML is sanitized first, then a DOM pass adds
 * table scrollers, safe external-link attributes, citation chips and (with
 * `spells`) in-game icons in front of ability names.
 */
export function Markdown({ source, className = '', inline = false, spells: own }: MarkdownProps) {
  const inherited = useContext(SpellClass);
  const spells = own ?? inherited;
  const html = useMemo(() => (inline ? renderInlineMarkdown(source) : renderMarkdown(source)), [source, inline]);
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (ref.current) enhanceMarkdownDom(ref.current, { spellClass: spells });
  }, [html, spells]);

  if (!source?.trim()) return null;
  if (inline) {
    return (
      <span
        ref={ref as RefObject<HTMLSpanElement>}
        className={`md-inline ${className}`}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return <div ref={ref as RefObject<HTMLDivElement>} className={`prose-md ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
