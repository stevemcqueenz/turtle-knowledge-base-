import { useLayoutEffect, useMemo, useRef, type RefObject } from 'react';
import { enhanceMarkdownDom, renderInlineMarkdown, renderMarkdown } from '../lib/markdown';

interface MarkdownProps {
  source: string;
  className?: string;
  /** Render one line of Markdown into a span (no paragraphs, no block elements). */
  inline?: boolean;
}

/**
 * Renders repository Markdown. The HTML is sanitized first, then a DOM pass adds
 * table scrollers, safe external-link attributes and citation chips.
 */
export function Markdown({ source, className = '', inline = false }: MarkdownProps) {
  const html = useMemo(() => (inline ? renderInlineMarkdown(source) : renderMarkdown(source)), [source, inline]);
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (ref.current) enhanceMarkdownDom(ref.current);
  }, [html]);

  if (!source?.trim()) return null;
  if (inline) {
    return <span ref={ref as RefObject<HTMLSpanElement>} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
  }
  return <div ref={ref as RefObject<HTMLDivElement>} className={`prose-md ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
