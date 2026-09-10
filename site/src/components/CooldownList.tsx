import type { YamlCooldown } from '../types';
import { isPlainObject, scalarToString } from '../lib/site';
import { YamlValue } from './YamlValue';

/** Cooldowns as a two-column name / when-to-use list. */
export function CooldownList({ cooldowns }: { cooldowns: YamlCooldown[] }) {
  if (!cooldowns?.length) return null;
  return (
    <dl className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-[minmax(8rem,14rem)_1fr]">
      {cooldowns.map((cd, i) => {
        const rest = Object.fromEntries(
          Object.entries(cd).filter(([k, v]) => k !== 'name' && k !== 'use_when' && v !== null && v !== ''),
        );
        return (
          <div key={i} className="contents">
            <dt className="text-sm font-semibold">{scalarToString(cd.name)}</dt>
            <dd className="mb-1.5 text-sm text-muted sm:mb-0">
              {isPlainObject(cd.use_when) || Array.isArray(cd.use_when) ? (
                <YamlValue value={cd.use_when} />
              ) : (
                scalarToString(cd.use_when)
              )}
              {Object.keys(rest).length > 0 ? (
                <div className="mt-1">
                  <YamlValue value={rest} />
                </div>
              ) : null}
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
