import type { GlossaryTerm } from '../types';
import { glossary } from './site';

/**
 * Inline glossary tooltips (PLAN §3). The archive's own vocabulary — the Class
 * Changes passes, the era labels, standing/contested/player claim, opaque build
 * links — carries real meaning in the prose, so the first mention of each inside
 * a rendered Markdown block becomes a button that shows its glossary entry.
 * Click, tap or keyboard focus opens it; Escape, an outside tap or moving
 * focus away closes it.
 */
interface Rule {
  /** `term` of the glossary entry that defines this wording. */
  term: string;
  re: RegExp;
  /** Replacement wording for the button, where the source word is not the point. */
  label?: string;
}

/** First rule to match a block wins for its term, so order is significant. */
const RULES: Rule[] = [
  { term: 'CC2 / Class Changes 2', re: /\b(?:CC2|Class Changes 2)\b/ },
  { term: 'CC3 / Class Changes 3', re: /\b(?:CC3|Class Changes 3)\b/ },
  { term: '1.18.1-announced-pre-release', re: /\b1\.18\.1-announced-pre-release\b/ },
  { term: 'pre-1.18.1', re: /\bpre-1\.18\.1\b/ },
  { term: 'post-1.18.1', re: /\bpost-1\.18\.1\b/ },
  // Archive usage only: `Community standing` or a `standing:` label. Plain-English
  // uses ("standing at range", "standing in front") must not match.
  { term: 'standing', re: /\bcommunity standing\b|\bstanding\b(?=\s*[:—–])/i },
  // Likewise the agreement label `contested:`, never plain-English "contested loot".
  { term: 'contested', re: /\bcontested\b(?=\s*[:—–])/i },
  { term: 'player claim', re: /\bplayer[- ]claims?\b/i },
  // `(opaque` in the prose opens a note about a dead talent-calculator link; say
  // so instead of showing the bare word, keeping the parentheses around it.
  { term: 'opaque link', re: /\(opaque(?=[,)])/i, label: '(calculator link, offline' },
];

/** Tags whose text must stay untouched: links, buttons, code and table cells. */
const SKIP = new Set(['A', 'BUTTON', 'CODE', 'PRE', 'TD', 'TH']);

let entries: Map<string, GlossaryTerm> | null = null;
let uid = 0;
let openWrap: HTMLElement | null = null;

function closeOpen(): void {
  if (openWrap) {
    openWrap.classList.remove('open');
    openWrap = null;
  }
}

/** Shows one popup, clamped inside the viewport. Every open path lands here. */
function openPop(wrap: HTMLElement, pop: HTMLElement): void {
  if (openWrap !== wrap) closeOpen();
  wrap.classList.add('open');
  openWrap = wrap;
  pop.style.left = '0px';
  pop.style.top = '';
  pop.style.maxHeight = '';
  const viewport = document.documentElement.clientHeight;
  const term = wrap.getBoundingClientRect();
  const box = pop.getBoundingClientRect();
  const gap = box.top - term.bottom;

  const overflow = box.right - (document.documentElement.clientWidth - 8);
  if (overflow > 0) pop.style.left = `${-overflow}px`;

  const roomBelow = viewport - term.bottom - gap - 8;
  const roomAbove = term.top - gap - 8;
  pop.style.maxHeight = `${Math.max(0, Math.min(Math.max(roomBelow, roomAbove), viewport * 0.6))}px`;
  const height = pop.getBoundingClientRect().height;
  const wanted = roomAbove > roomBelow ? term.top - gap - height : term.bottom + gap;
  const top = Math.min(Math.max(wanted, 8), Math.max(8, viewport - 8 - height));
  pop.style.top = `${top - term.top}px`;
}

if (typeof document !== 'undefined') {
  document.addEventListener('pointerdown', (event) => {
    if (openWrap && !openWrap.contains(event.target as Node)) closeOpen();
  });
  document.addEventListener('keydown', (event) => {
    if (openWrap && event.key === 'Escape') closeOpen();
  });
}

function entry(term: string): GlossaryTerm | undefined {
  entries ??= new Map(glossary.map((g) => [g.term, g]));
  return entries.get(term);
}

function skipped(node: Node, root: HTMLElement): boolean {
  for (let p = node.parentElement; p && p !== root; p = p.parentElement) {
    // A nested Markdown block annotates itself, so a page-level pass leaves it alone.
    if (SKIP.has(p.tagName) || p.classList.contains('gloss') || p.classList.contains('prose-md')) return true;
  }
  return false;
}

function findFirst(root: HTMLElement, re: RegExp): { node: Text; index: number; text: string } | null {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    if (skipped(n, root)) continue;
    const m = re.exec(n.nodeValue ?? '');
    if (m) return { node: n as Text, index: m.index, text: m[0] };
  }
  return null;
}

function insert(hit: { node: Text; index: number; text: string }, g: GlossaryTerm, label?: string): void {
  const tail = hit.node.splitText(hit.index);
  tail.nodeValue = (tail.nodeValue ?? '').slice(hit.text.length);

  const id = `gloss-pop-${++uid}`;
  const wrap = document.createElement('span');
  wrap.className = 'gloss';
  wrap.dataset.term = g.term;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'gloss-term';
  button.textContent = label ?? hit.text;
  button.setAttribute('aria-describedby', id);
  button.setAttribute('aria-label', `${label ?? hit.text} — what this means`);

  const pop = document.createElement('span');
  pop.className = 'gloss-pop';
  pop.id = id;
  pop.setAttribute('role', 'tooltip');
  const title = document.createElement('strong');
  title.textContent = g.term;
  const meaning = document.createElement('span');
  meaning.textContent = g.meaning;
  pop.append(title, meaning);
  if (g.scope === 'archive-convention') {
    const scope = document.createElement('span');
    scope.className = 'gloss-scope';
    scope.textContent = 'archive convention';
    pop.append(scope);
  }
  if (g.citation_url) {
    const source = document.createElement('a');
    source.href = g.citation_url;
    source.target = '_blank';
    source.rel = 'noopener noreferrer';
    source.textContent = 'source';
    pop.append(document.createTextNode(' '), source);
  }

  wrap.append(button, pop);
  tail.parentNode?.insertBefore(wrap, tail);

  // A tap cannot focus a button in WebKit, so open on click as well as focus.
  button.addEventListener('click', () => openPop(wrap, pop));
  wrap.addEventListener('focusin', () => openPop(wrap, pop));
  wrap.addEventListener('focusout', (event) => {
    const next = (event as FocusEvent).relatedTarget as Node | null;
    if (!next || !wrap.contains(next)) closeOpen();
  });
}

/**
 * Annotates the first mention of each known term inside one rendered block or
 * page. Text inside a nested `.prose-md` block is left to that block's own pass.
 */
export function annotateGlossaryTerms(root: HTMLElement): void {
  // Seeded from the DOM so a second pass over the same block adds nothing.
  const done = new Set(
    [...root.querySelectorAll<HTMLElement>('.gloss[data-term]')]
      .filter((el) => !skipped(el, root))
      .map((el) => el.dataset.term!),
  );
  for (const rule of RULES) {
    if (done.has(rule.term)) continue;
    const g = entry(rule.term);
    if (!g) continue;
    const hit = findFirst(root, rule.re);
    if (!hit) continue;
    insert(hit, g, rule.label);
    done.add(rule.term);
  }
}
