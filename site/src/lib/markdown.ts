import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { annotateGlossaryTerms } from './glossary-inline';
import { DISCORD_CITE, discordCitation } from './citations';
import { cellStyle, sheetState, spellAtStart, subscribeSheets } from './icons';

marked.setOptions({ gfm: true, breaks: false });

/**
 * In a browser DOMPurify is always initialised against `window`. Outside one
 * (node smoke tests, prerendering) the import resolves to the factory instead,
 * which has no `sanitize`; the markup is then returned as parsed, which is only
 * ever reached in a non-browser context where there is no DOM to attack.
 */
const canSanitize = typeof (DOMPurify as { sanitize?: unknown }).sanitize === 'function';

const escapeHtml = (text: string) =>
  text.replace(/[&<>"'|*_`[\]~\\]/g, (ch) => `&#${ch.charCodeAt(0)};`);

/**
 * build-data.py renders the Discord citations of every Markdown document it
 * reads; a `[[d:channel#id]]` that still reaches the renderer (YAML notes shown
 * as inline Markdown) gets the same chip from the class citation maps.
 */
function citeChips(md: string): string {
  if (!md.includes('[[d:')) return md;
  return md.replace(DISCORD_CITE, (_all, channel: string, id: string) => {
    const cite = discordCitation(channel, id);
    return cite.url
      ? `<a class="cite cite-discord" href="${escapeHtml(cite.url)}" title="${escapeHtml(cite.title)}">${escapeHtml(cite.label)}</a>`
      : `<span class="cite cite-discord cite-unknown" title="${escapeHtml(cite.title)}">${escapeHtml(cite.label)}</span>`;
  });
}

/** Markdown -> sanitized HTML. No network, no raw HTML passthrough surprises. */
export function renderMarkdown(md: string): string {
  if (!md) return '';
  const html = marked.parse(citeChips(md), { async: false }) as string;
  return canSanitize ? DOMPurify.sanitize(html, { USE_PROFILES: { html: true } }) : html;
}

/** One line of Markdown (a table cell, a heading) -> sanitized inline HTML. */
export function renderInlineMarkdown(md: string): string {
  if (!md) return '';
  const html = marked.parseInline(citeChips(md), { async: false }) as string;
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
export function enhanceMarkdownDom(root: HTMLElement, opts: { spellClass?: string } = {}): void {
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

  // Ability names written as `code` read like spell links in the game's chat.
  root.querySelectorAll('code').forEach((code) => {
    if (code.closest('pre')) return;
    if (!SPELL_NAME.test(code.textContent ?? '')) return;
    code.classList.add('spell');
    // ... with the spell's icon in front when the class knows a spell of that name
    if (opts.spellClass && !code.querySelector('.spell-icon')) addSpellIcon(code, opts.spellClass);
  });

  groupCitations(root);
  if (!root.classList.contains('md-inline')) annotateGlossaryTerms(root);
}

/** Icons whose sheet failed to load are taken out again (the name stays). */
let pruning = false;
function pruneBrokenIcons(): void {
  document.querySelectorAll<HTMLElement>('.spell-icon[data-sheet]').forEach((el) => {
    if (sheetState(el.dataset.sheet ?? '') === 'error') el.remove();
  });
}

function addSpellIcon(code: HTMLElement, slug: string): void {
  const hit = spellAtStart(slug, (code.textContent ?? '').replace(/^rank[- ]?\d+\s+/i, ''));
  if (!hit || sheetState(hit.sheet.url) === 'error') return;
  if (!pruning) {
    pruning = true;
    subscribeSheets(pruneBrokenIcons);
  }
  const icon = document.createElement('span');
  icon.className = 'game-icon spell-icon';
  icon.dataset.sheet = hit.sheet.url;
  icon.setAttribute('role', 'img');
  icon.setAttribute('aria-label', hit.name);
  Object.assign(icon.style, cellStyle(hit));
  code.prepend(icon);
}

/** "Arcane Missiles", "Power Word: Shield", "Rank-1 Arcane Explosion"; not paths, macros or URLs. */
const SPELL_NAME = /^(?=.*[a-z])[A-Z0-9][A-Za-z0-9'’:\- ]{1,44}$/;

const isCite = (n: Node | null): n is HTMLElement =>
  !!n && n.nodeType === 1 && (n as HTMLElement).classList.contains('cite');

/**
 * Evidence stays one hover away but out of the reading line: every run of
 * adjacent citation chips ("[[d:a]], [[d:b]]" or forum links) becomes one small
 * superscript marker. Hovering or focusing it shows the quoted messages (see
 * cite-popover.ts); clicking it unfolds the original chips inline, each still
 * linking to its evidence line.
 */
export function groupCitations(root: HTMLElement): void {
  const chips = [...root.querySelectorAll<HTMLElement>('a.cite, span.cite')];
  for (const chip of chips) {
    if (chip.closest('.cite-group')) continue;
    const run: HTMLElement[] = [chip];
    let node: ChildNode | null = chip.nextSibling;
    while (node) {
      if (isCite(node)) {
        run.push(node);
        node = node.nextSibling;
        continue;
      }
      if (node.nodeType === 3 && /^[\s,;]*$/.test(node.textContent ?? '') && isCite(node.nextSibling)) {
        const next: ChildNode | null = node.nextSibling;
        node.remove();
        node = next;
        continue;
      }
      break;
    }
    const doc = chip.ownerDocument;
    const group = doc.createElement('span');
    group.className = 'cite-group';
    const mark = doc.createElement('button');
    mark.type = 'button';
    mark.className = 'cite-mark';
    mark.setAttribute('aria-expanded', 'false');
    const who = run.map((c) => c.textContent?.trim()).filter(Boolean);
    mark.setAttribute('aria-label', `${run.length === 1 ? 'Source' : `${run.length} sources`}: ${who.join('; ')}`);
    mark.textContent = run.length > 1 ? String(run.length) : '';
    const list = doc.createElement('span');
    list.className = 'cite-list';
    chip.before(group);
    group.append(mark, list);
    for (const c of run) {
      if (c.title) {
        c.dataset.quote = c.title;
        c.removeAttribute('title');
      }
      list.append(c);
    }
    // Hug the word it supports: drop the space before the marker.
    const prev = group.previousSibling;
    if (prev && prev.nodeType === 3 && /\s$/.test(prev.textContent ?? '') && !/[(\u2014-]\s*$/.test(prev.textContent ?? '')) {
      prev.textContent = (prev.textContent ?? '').replace(/\s+$/, '');
    }
  }
}

/** Rough plain-text preview of a Markdown string (for cards and meta lines). */
export function plainText(md: string, maxLength = 220): string {
  let text = md
    .replace(/```[\s\S]*?```/g, ' ')
    // inline HTML: the Discord citation chips are dropped, other tags unwrapped
    .replace(/<(a|span) class="cite[^"]*"[^>]*>[^<]*<\/\1>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+([,.;:])/g, '$1')
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
