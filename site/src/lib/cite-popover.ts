/**
 * The evidence popover behind every citation marker (`.cite-mark`, created by
 * groupCitations in markdown.ts and by the CitedText component).
 *
 * - pointer hover or keyboard focus on a marker shows one floating card with
 *   each cited message: who, when, where, the verbatim text, and a link to its
 *   line in the archive;
 * - click (or tap) unfolds the chips inline instead, so touch users and anyone
 *   who wants to keep them open can;
 * - Escape, moving away or an outside click closes it.
 *
 * One popover element for the whole page, positioned in the viewport and
 * clamped to it, so it never widens the page on a phone.
 */

let pop: HTMLDivElement | null = null;
let current: HTMLElement | null = null;
let hideTimer = 0;
let showTimer = 0;

interface Quote {
  who: string;
  where: string;
  text: string;
  url: string | null;
  forum: boolean;
}

function quotesOf(mark: HTMLElement): Quote[] {
  const list = mark.parentElement?.querySelector('.cite-list');
  if (!list) return [];
  return [...list.querySelectorAll<HTMLElement>('.cite')].map((chip) => {
    const raw = chip.dataset.quote ?? '';
    const url = chip.getAttribute('href');
    // Discord: "author, 2026-03-20, Discord #mage: text"
    const m = /^(.*?),\s*(\d{4}-\d{2}-\d{2})?,?\s*(Discord #[\w-]+)(?:, message \d+)?(?: \(not in the archived evidence\))?:?\s*([\s\S]*)$/.exec(raw);
    if (m) {
      return {
        who: m[1] || chip.textContent || '',
        where: [m[3], m[2]].filter(Boolean).join(' · '),
        text: m[4] ?? '',
        url,
        forum: false,
      };
    }
    // Forum / wiki: "Author (tier), date — url"
    const label = chip.textContent ?? '';
    return {
      who: label.split(' · ')[0],
      where: label.split(' · ').slice(1).join(' · ') || (url?.includes('fandom') ? 'wiki' : 'forum'),
      text: '',
      url,
      forum: true,
    };
  });
}

function ensurePop(): HTMLDivElement {
  if (pop) return pop;
  pop = document.createElement('div');
  pop.className = 'cite-pop';
  pop.setAttribute('role', 'tooltip');
  pop.id = 'cite-pop';
  pop.addEventListener('mouseenter', () => window.clearTimeout(hideTimer));
  pop.addEventListener('mouseleave', () => scheduleHide());
  document.body.appendChild(pop);
  return pop;
}

function render(mark: HTMLElement) {
  const el = ensurePop();
  el.replaceChildren();
  for (const q of quotesOf(mark)) {
    const item = document.createElement('div');
    item.className = 'cite-pop-item';
    const head = document.createElement('div');
    head.className = 'cite-pop-head';
    const who = document.createElement('strong');
    who.textContent = q.who;
    const where = document.createElement('span');
    where.textContent = q.where;
    head.append(who, where);
    item.append(head);
    if (q.text) {
      const text = document.createElement('p');
      text.textContent = q.text;
      item.append(text);
    }
    if (q.url) {
      const a = document.createElement('a');
      a.href = q.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = q.forum ? 'Open the post ↗' : 'Open in the archive ↗';
      item.append(a);
    } else {
      const note = document.createElement('span');
      note.className = 'cite-pop-missing';
      note.textContent = 'Not in the archived evidence files';
      item.append(note);
    }
    el.append(item);
  }
}

function place(mark: HTMLElement) {
  const el = ensurePop();
  const r = mark.getBoundingClientRect();
  const vw = document.documentElement.clientWidth;
  const vh = window.innerHeight;
  el.style.left = '0px';
  el.style.top = '0px';
  el.classList.add('open');
  const w = el.offsetWidth;
  const h = el.offsetHeight;
  const left = Math.max(8, Math.min(r.left + r.width / 2 - w / 2, vw - w - 8));
  const below = r.bottom + 6;
  const top = below + h > vh - 8 && r.top - h - 6 > 8 ? r.top - h - 6 : below;
  el.style.left = `${left}px`;
  el.style.top = `${top}px`;
}

function show(mark: HTMLElement) {
  window.clearTimeout(hideTimer);
  if (current === mark && pop?.classList.contains('open')) return;
  current?.removeAttribute('aria-describedby');
  current = mark;
  render(mark);
  place(mark);
  mark.setAttribute('aria-describedby', 'cite-pop');
}

function hide() {
  window.clearTimeout(showTimer);
  pop?.classList.remove('open');
  current?.removeAttribute('aria-describedby');
  current = null;
}

function scheduleHide() {
  window.clearTimeout(hideTimer);
  hideTimer = window.setTimeout(hide, 180);
}

const markOf = (t: EventTarget | null) =>
  t instanceof Element ? (t.closest('.cite-mark') as HTMLElement | null) : null;

let installed = false;

export function installCitePopover(): void {
  if (installed || typeof document === 'undefined') return;
  installed = true;
  document.addEventListener('mouseover', (e) => {
    const mark = markOf(e.target);
    if (mark) {
      window.clearTimeout(hideTimer);
      window.clearTimeout(showTimer);
      showTimer = window.setTimeout(() => show(mark), 90);
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (markOf(e.target)) {
      window.clearTimeout(showTimer);
      scheduleHide();
    }
  });
  document.addEventListener('focusin', (e) => {
    const mark = markOf(e.target);
    if (mark && (e.target as HTMLElement).matches(':focus-visible')) show(mark);
  });
  document.addEventListener('focusout', (e) => {
    if (markOf(e.target)) scheduleHide();
  });
  document.addEventListener('click', (e) => {
    const mark = markOf(e.target);
    if (mark) {
      e.preventDefault();
      const group = mark.parentElement;
      const open = !group?.classList.contains('open');
      group?.classList.toggle('open', open);
      mark.setAttribute('aria-expanded', String(open));
      hide();
      return;
    }
    if (pop && !pop.contains(e.target as Node)) hide();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hide();
  });
  window.addEventListener('scroll', () => current && hide(), { passive: true });
  window.addEventListener('hashchange', hide);
}
