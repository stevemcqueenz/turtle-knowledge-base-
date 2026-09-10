import { useLayoutEffect, useMemo, useRef } from 'react';
import { enhanceMarkdownDom, renderMarkdown } from '../lib/markdown';

interface MarkdownProps {
  source: string;
  className?: string;
}

/**
 * Renders repository Markdown. The HTML is sanitized first, then a DOM pass adds
 * table scrollers, safe external-link attributes and citation chips.
 */
export function Markdown({ source, className = '' }: MarkdownProps) {
  const html = useMemo(() => renderMarkdown(source), [source]);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (ref.current) enhanceMarkdownDom(ref.current);
  }, [html]);

  if (!source?.trim()) return null;
  return <div ref={ref} className={`prose-md ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}
