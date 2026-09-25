import { Plus, ShieldHalf, Sword, Swords, Target, TrendingUp, type LucideIcon } from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  tank: ShieldHalf,
  healer: Plus,
  'melee-dps': Sword,
  'ranged-dps': Target,
  pvp: Swords,
  leveling: TrendingUp,
};

/** Small line icon per role; decorative, the label always sits next to it. */
export function RoleIcon({ role, className = 'h-4 w-4' }: { role: string; className?: string }) {
  const Icon = ICONS[role] ?? TrendingUp;
  return <Icon className={className} aria-hidden="true" focusable="false" />;
}
