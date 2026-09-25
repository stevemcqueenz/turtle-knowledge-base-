import { BookOpen, Cog, Crosshair, FlaskConical, MonitorCog, type LucideIcon } from 'lucide-react';
import { coreData } from '../data';
import type { GeneralGuideSummary } from '../types';

/**
 * The general guides: every top-level `guide/<name>.md` (professions, PvP,
 * client setup, server mechanics, ...), each at `#/<slug>`. The list, their
 * routes and headings come from the core module; only the short label, the
 * icon and the search keywords live here. A page without an entry below still
 * gets a route, a sidebar link and search results under its own title.
 */
interface GuideMeta {
  label: string;
  icon: LucideIcon;
  /** Extra search keywords. */
  keywords: string;
  /** Shown on the home page's "By goal" quick links. */
  quick?: boolean;
}

const META: Record<string, GuideMeta> = {
  professions: {
    label: 'Professions',
    icon: FlaskConical,
    keywords: 'professions engineering alchemy herbalism mining skinning survival gardening jewelcrafting gold crafting',
    quick: true,
  },
  pvp: {
    label: 'PvP',
    icon: Crosshair,
    keywords: 'pvp battlegrounds warsong arathi alterac blood ring arena honor rank duel world pvp premade',
    quick: true,
  },
  'client-setup': {
    label: 'Client setup',
    icon: MonitorCog,
    keywords: 'client setup install launcher addons patch dll config wtf fps performance',
    quick: true,
  },
  mechanics: {
    label: 'Server mechanics',
    icon: Cog,
    keywords: 'server mechanics spell batching leeway hit table crit armor resist cap formula',
    quick: true,
  },
};

export interface GeneralGuide extends GeneralGuideSummary {
  label: string;
  icon: LucideIcon;
  keywords: string;
  quick: boolean;
}

export const generalGuides: GeneralGuide[] = (coreData.guides ?? []).map((g) => {
  const m = META[g.slug];
  return {
    ...g,
    label: m?.label ?? g.title,
    icon: m?.icon ?? BookOpen,
    keywords: m?.keywords ?? '',
    quick: m?.quick ?? false,
  };
});

const bySlug = new Map(generalGuides.map((g) => [g.slug, g]));

export function getGeneralGuide(slug: string): GeneralGuide | undefined {
  return bySlug.get(slug);
}

/** The home page's quick-link label (shorter than the sidebar's where it helps). */
export function quickLabel(g: GeneralGuide): string {
  return g.slug === 'mechanics' ? 'Mechanics' : g.label;
}
