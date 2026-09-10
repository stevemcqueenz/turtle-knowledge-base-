import type { ClassEntry } from '../../types';
import { readableColor } from '../../lib/theme';
import { useThemeValue } from '../../lib/theme-context';
import { shortSpecName } from './data';

/** How well sourced each spec guide is, straight from the matrix row. */
export function SourceQualityCard({ entry }: { entry: ClassEntry }) {
  const theme = useThemeValue();
  const strong = readableColor('#3ddc84', theme);
  const mixed = readableColor('#f5b942', theme);

  return (
    <section className="card flex flex-col gap-3 p-5">
      <h2 className="text-base font-bold">How solid is this?</h2>
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
    </section>
  );
}
