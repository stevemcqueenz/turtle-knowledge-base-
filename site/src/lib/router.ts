import { useEffect, useState } from 'react';

export type Route =
  | { name: 'home' }
  | { name: 'class'; slug: string }
  | { name: 'playbook'; slug: string; id: string }
  | { name: 'leveling'; slug: string }
  | { name: 'gear'; slug: string; spec?: string; bracket?: string }
  | { name: 'matrix' }
  | { name: 'about' }
  | { name: 'not-found'; path: string };

export function parseHash(hash: string): Route {
  const raw = hash.replace(/^#/, '').replace(/^\/*/, '');
  const [pathPart] = raw.split('?');
  const parts = pathPart.split('/').filter(Boolean).map(decodeURIComponent);
  if (parts.length === 0) return { name: 'home' };
  if (parts[0] === 'matrix' && parts.length === 1) return { name: 'matrix' };
  if (parts[0] === 'about' && parts.length === 1) return { name: 'about' };
  if (parts[0] === 'class' && parts.length === 2) return { name: 'class', slug: parts[1] };
  if (parts[0] === 'class' && parts.length === 3) {
    if (parts[2] === 'leveling') return { name: 'leveling', slug: parts[1] };
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
  matrix: () => '#/matrix',
  about: () => '#/about',
};

export function navigate(to: string): void {
  if (window.location.hash === to) return;
  window.location.hash = to;
}

/** Scroll to the top on every route change (hash anchors handle themselves). */
export function useScrollReset(key: string): void {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [key]);
}
