import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { annotateGlossaryTerms } from './glossary-inline';

marked.setOptions({ gfm: true, breaks: false });

/**
 * In a browser DOMPurify is always initialised against `window`. Outside one
 * (node smoke tests, prerendering) the import resolves to the factory instead,
 * which has no `sanitize`; the markup is then returned as parsed, which is only
 * ever reached in a non-browser context where there is no DOM to attack.
 */
const canSanitize = typeof (DOMPurify as { sanitize?: unknown }).sanitize === 'function';

/** Markdown -> sanitized HTML. No network, no raw HTML passthrough surprises. */
export function renderMarkdown(md: string): string {
  if (!md) return '';
  const html = marked.parse(md, { async: false }) as string;
  return canSanitize ? DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }) : html;
}

/** One line of Markdown (a table cell, a heading) -> sanitized inline HTML. */
export function renderInlineMarkdown(md: string): string {
  if (!md) return '';
  const html = marked.parseInline(md, { async: false }) as string;
  return canSanitize ? DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }) : html;
}

/** `Dragunovi (staff), 2024-10-12` -> chip parts. */
const CITE_RE = /^(.+?)\s*\((staff|player|wiki)[^)]*\)\s*,?\s*(.*)$/i;

export interface CitationParts {
  author: string;
  tier: 'staff' | 'player' | 'wiki';
  date: string;
}

export function parseCitationText(text: string): CitationParts | null {
  const m = CITE_RE.exec(text.trim());
  if (!m) return null;
  return {
    author: m[1].trim(),
    tier: m[2].toLowerCase() as CitationParts['tier'],
    date: m[3].trim().replace(/^[,\s]+/, ''),
  };
}

/**
 * Post-processes rendered Markdown in place:
 * - wraps tables so they scroll horizontally on narrow screens,
 * - marks external links safe (`target`/`rel`),
 * - turns `[author (tier), date](url)` links into compact citation chips,
 * - explains archive jargon on its first mention with a glossary tooltip, except in
 *   inline Markdown, whose host element may clip the popup.
 */
export function enhanceMarkdownDom(root: HTMLElement): void {
  root.querySelectorAll('table').forEach((table) => {
    const parent = table.parentElement;
    if (parent && parent.classList.contains('table-scroll')) return;
    const wrap = document.createElement('div');
    wrap.className = 'table-scroll';
    table.replaceWith(wrap);
    wrap.appendChild(table);
  });

  root.querySelectorAll('a').forEach((a) => {
    const hrefValue = a.getAttribute('href') ?? '';
    const isExternal = /^https?:/i.test(hrefValue);
    if (isExternal) {
      a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer');
    }
    const text = a.textContent ?? '';
    const cite = parseCitationText(text);
    if (!cite || !isExternal) return;
    a.classList.add('cite', `cite-${cite.tier}`);
    a.setAttribute('title', `${text} — ${hrefValue}`);
    const label = [cite.author, cite.tier, cite.date].filter(Boolean).join(' · ');
    a.textContent = label;
  });

  if (!root.classList.contains('md-inline')) annotateGlossaryTerms(root);
}

/** Rough plain-text preview of a Markdown string (for cards and meta lines). */
export function plainText(md: string, maxLength = 220): string {
  let text = md
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length > maxLength) {
    const cut = text.slice(0, maxLength);
    const stop = cut.lastIndexOf(' ');
    text = `${cut.slice(0, stop > 40 ? stop : cut.length)}…`;
  }
  return text;
}
