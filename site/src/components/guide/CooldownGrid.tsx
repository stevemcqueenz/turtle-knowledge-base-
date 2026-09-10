import type { YamlCooldown } from '../../types';
import { describeValue } from './util';

/** Cooldowns as a two-column grid of name + when to press it. */
export function CooldownGrid({ cooldowns }: { cooldowns: YamlCooldown[] }) {
  if (cooldowns.length === 0) return null;
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {cooldowns.map((cd, i) => (
        <li key={i} className="card min-w-0 p-3.5 sm:p-4">
          <div className="text-[15px] font-bold">{describeValue(cd?.name) || 'Unnamed cooldown'}</div>
          <div className="mt-1 text-sm leading-snug text-muted">
            {describeValue(cd?.use_when) || 'The sources do not say when to use it.'}
          </div>
        </li>
      ))}
    </ul>
  );
}
