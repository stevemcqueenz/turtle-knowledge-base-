import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'class'; slug: string }
  | { name: 'playbook'; slug: string; id: string }
  | { name: 'leveling'; slug: string }
  | { name: 'gear'; slug: string; spec?: string; bracket?: string }
  | { name: 'sources'; slug: string }
  | { name: 'guide-page'; slug: string; page: string }
  | { name: 'class-professions'; slug: string }
  | { name: 'professions' }
  | { name: 'glossary' }
  | { name: 'instances' }
  | { name: 'instance'; slug: string }
  | { name: 'matrix' }
  | { name: 'archive' }
  | { name: 'about' }
  | { name: 'not-found'; path: string };

export function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '').replace(/^\/*/, '');
  const [pathPart] = raw.split('?');
  const parts = pathPart.split('/').filter(Boolean).map(decodeURIComponent);
  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'matrix' && parts.length === 1) return { name: 'matrix' };
  if (parts[0] === 'about' && parts.length === 1) return { name: 'about' };
  if (parts[0] === 'archive' && parts.length === 1) return { name: 'archive' };
  if (parts[0] === 'professions' && parts.length === 1) return { name: 'professions' };
  if (parts[0] === 'glossary' && parts.length === 1) return { name: 'glossary' };
  if (parts[0] === 'instances' && parts.length === 1) return { name: 'instances' };
  if (parts[0] === 'instances' && parts.length === 2) return { name: 'instance', slug: parts[1] };
  if (parts[0] === 'class' && parts.length === 2) return { name: 'class', slug: parts[1] };
  if (parts[0] === 'class' && parts.length === 3) {
    if (parts[2] === 'leveling') return { name: 'leveling', slug: parts[1] };
    if (parts[2] === 'sources') return { name: 'sources', slug: parts[1] };
    if (parts[2] === 'professions') return { name: 'class-professions', slug: parts[1] };
    if (parts[2] === 'gear') {
      const params = new URLSearchParams(hash.split('?')[1] ?? '');
      return {
        name: 'gear',
        slug: parts[1],
        spec: params.get('spec') ?? undefined,
        bracket: params.get('bracket') ?? undefined,
      };
    }
    return { name: 'playbook', slug: parts[1], id: parts[2] };
  }
  if (parts[0] === 'class' && parts.length === 4 && parts[2] === 'guide')
    return { name: 'guide-page', slug: parts[1], page: parts[3] };
  return { name: 'not-found', path: pathPart };
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}

export const href = {
  home: () => '#/',
  class: (slug: string) => `#/class/${slug}`,
  playbook: (slug: string, id: string) => `#/class/${slug}/${id}`,
  leveling: (slug: string) => `#/class/${slug}/leveling`,
  gear: (slug: string, spec?: string, bracket?: string) => {
    const params = new URLSearchParams();
    if (spec) params.set('spec', spec);
    if (bracket) params.set('bracket', bracket);
    const qs = params.toString();
    return `#/class/${slug}/gear${qs ? `?${qs}` : ''}`;
  },
  sources: (slug: string) => `#/class/${slug}/sources`,
  guidePage: (slug: string, page: string) =>
    page === 'professions' ? `#/class/${slug}/professions` : `#/class/${slug}/guide/${page}`,
  classProfessions: (slug: string) => `#/class/${slug}/professions`,
  professions: () => '#/professions',
  glossary: () => '#/glossary',
  instances: () => '#/instances',
  instance: (slug: string) => `#/instances/${slug}`,
  matrix: (column?: string) => (column ? `#/matrix?by=${column}` : '#/matrix'),
  archive: () => '#/archive',
  about: () => '#/about',
  /** Any route plus `?s=<section id>`: the page scrolls to that section once it has rendered. */
  section: (route: string, id: string) => `${route}${route.includes('?') ? '&' : '?'}s=${encodeURIComponent(id)}`,
};

/** A query parameter of the current hash route (`#/matrix?by=raid`). */
export function hashParam(name: string): string | null {
  if (typeof window === 'undefined') return null;
  const q = window.location.hash.split('?')[1];
  return q ? new URLSearchParams(q).get(name) : null;
}

/**
 * Scroll to the `?s=` section once the page's content is on screen (`ready`),
 * then again whenever the hash changes to another section of the same page.
 */
export function useSectionScroll(ready: boolean): void {
  useEffect(() => {
    if (!ready) return;
    const go = () => {
      const id = hashParam('s');
      if (!id) return;
      window.setTimeout(() => {
        const el = document.getElementById(id);
        if (!el) return;
        if (el.tagName === 'DETAILS') (el as HTMLDetailsElement).open = true;
        el.scrollIntoView({ block: 'start' });
      }, 30);
    };
    go();
    window.addEventListener('hashchange', go);
    return () => window.removeEventListener('hashchange', go);
  }, [ready]);
}

export function navigate(to: string): void {
  if (window.location.hash === to) return;
  window.location.hash = to;
}

/** Scroll to the top on every route change (hash anchors handle themselves). */
export function useScrollReset(key: string): void {
  useEffect(() => {
    if (!hashParam('s')) window.scrollTo({ top: 0, behavior: 'auto' });
  }, [key]);
}
