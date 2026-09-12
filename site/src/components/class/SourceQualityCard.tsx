import type { ClassEntry } from '../../types';
import { Collapsible } from '../Collapsible';
import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';
import { shortSpecName } from './data';

/**
 * How well sourced each spec guide is, straight from the matrix row. Collapsed
 * on the class page: it is provenance, and a player heading for the leveling
 * guide should not have to scroll past it.
 */
export function SourceQualityCard({ entry }: { entry: ClassEntry }) {
  const theme = useThemeValue();
  const strong = readableColor('#3ddc84', theme);
  const mixed = readableColor('#f5b942', theme);

  return (
    <Collapsible title="How solid is this?">
      <div className="flex flex-col gap-3">
        {entry.playbooks.length === 0 ? (
          <p className="text-sm text-muted">No spec guide is published for this class yet.</p>
        ) : (
          <ul className="flex flex-col gap-2.5 text-[13px]">
            {entry.playbooks.map((p) => {
              const quality = p.standing?.source_quality?.trim();
              const isStrong = !!quality && /^strong/i.test(quality);
              return (
                <li key={p.id} className="flex flex-col gap-0.5">
                  <span className="font-semibold">
                    {shortSpecName(p.spec)} <span className="font-normal text-muted">{p.roleLabel.toLowerCase()}</span>
                  </span>
                  {quality ? (
                    <span className="text-[12px] leading-snug" style={{ color: isStrong ? strong : mixed }}>
                      {quality}
                    </span>
                  ) : (
                    <span className="text-[12px] text-muted">Source quality not stated.</span>
                  )}
                </li>
              );
            })}
          </ul>
        )}
        <p className="text-xs text-muted">
          Every guide states where it is thin. Open a guide to see the posts each line came from.
        </p>
      </div>
    </Collapsible>
  );
}
