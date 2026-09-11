import type { GlossaryTerm } from '../types';
import { glossary } from './site';

/**
 * Inline glossary tooltips (PLAN §3). The archive's own vocabulary — the Class
 * Changes passes, the era labels, standing/contested/player claim, opaque build
 * links — carries real meaning in the prose, so the first mention of each inside
 * a rendered Markdown block becomes a button that shows its glossary entry.
 * Click, tap or keyboard focus opens it; Escape or moving focus away closes it.
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
  { term: 'CC2 / Class Changes 2', re: /\b(?:pre-CC2|CC2|Class Changes 2)\b/ },
  { term: 'CC3 / Class Changes 3', re: /\b(?:CC3|Class Changes 3)\b/ },
  { term: 'Class Changes', re: /\bclass changes\b(?!\s?\d)/i },
  { term: '1.18.1-announced-pre-release', re: /\b1\.18\.1-announced-pre-release\b/ },
  { term: 'pre-1.18.1', re: /\bpre-1\.18\.1\b/ },
  { term: 'post-1.18.1', re: /\bpost-1\.18\.1\b/ },
  { term: 'standing', re: /\bstandings?\b(?! still)/i },
  { term: 'contested', re: /\bcontested\b/i },
  { term: 'player claim', re: /\bplayer[- ](?:sourced|claims?)\b|\bplayers claim\b/i },
  // `(opaque)` in the prose is a dead talent-calculator link; say so instead.
  { term: 'opaque link', re: /(?<=\()opaque(?=[,)])/i, label: 'calculator link, offline' },
  { term: 'opaque link', re: /\bopaque\b/i },
];

/** Tags whose text must stay untouched: links and code. */
const SKIP = new Set(['A', 'CODE', 'PRE']);

let entries: Map<string, GlossaryTerm> | null = null;
let uid = 0;

function entry(term: string): GlossaryTerm | undefined {
  entries ??= new Map(glossary.map((g) => [g.term, g]));
  return entries.get(term);
}

function skipped(node: Node, root: HTMLElement): boolean {
  for (let p = node.parentElement; p && p !== root; p = p.parentElement) {
    if (SKIP.has(p.tagName) || p.classList.contains('gloss')) return true;
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

  // The popup is opened by CSS (`:focus-within`); keep it inside the viewport.
  wrap.addEventListener('focusin', () => {
    pop.style.left = '0px';
    const overflow = pop.getBoundingClientRect().right - (document.documentElement.clientWidth - 8);
    if (overflow > 0) pop.style.left = `${-overflow}px`;
  });
  wrap.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') (e.target as HTMLElement).blur();
  });
}

/** Annotates the first mention of each known term inside one rendered block. */
export function annotateGlossaryTerms(root: HTMLElement): void {
  // Seeded from the DOM so a second pass over the same block adds nothing.
  const done = new Set([...root.querySelectorAll<HTMLElement>('.gloss[data-term]')].map((el) => el.dataset.term!));
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
