import type { ReactNode } from 'react';
import type { Section } from '../../types';
import { Collapsible } from '../Collapsible';
import { Markdown } from '../Markdown';

interface GuideSectionProps {
  id: string;
  title: string;
  /** Short, muted line on the right of the heading (a build name, a count …). */
  hint?: ReactNode;
  children: ReactNode;
}

/** One band of the guide: an anchor, an h2 and its content. */
export function GuideSection({ id, title, hint, children }: GuideSectionProps) {
  return (
    <section id={id} className="scroll-mt-32 space-y-4">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">{title}</h2>
        {hint ? <div className="text-sm text-muted">{hint}</div> : null}
      </div>
      {children}
    </section>
  );
}

/** Muted honest line for data the sources do not contain. */
export function EmptyLine({ children }: { children: ReactNode }) {
  return <p className="card p-4 text-sm text-muted">{children}</p>;
}

/** The long prose, one click away from the main reading path. */
export function ProseDetails({ title, sections }: { title: string; sections: (Section | null | undefined)[] }) {
  const present = sections.filter((s): s is Section => !!s && !!s.markdown?.trim());
  if (present.length === 0) return null;
  return (
    <Collapsible title={title}>
      <div className="space-y-5">
        {present.map((s) => (
          <div key={s.id}>
            {present.length > 1 ? <h3 className="mb-2 text-base font-semibold">{s.heading}</h3> : null}
            <Markdown source={s.markdown} />
          </div>
        ))}
      </div>
    </Collapsible>
  );
}

/** Uppercase label used inside the cards, as on the design boards. */
export function CardLabel({ children }: { children: ReactNode }) {
  return <div className="text-xs font-semibold uppercase tracking-[0.08em] text-muted">{children}</div>;
}
