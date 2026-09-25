import type { ReactNode } from 'react';
import { cn } from '../../lib/utils';

/** A data panel: a bordered surface with an optional header row (title left, actions right). */
export function Panel({
  title,
  actions,
  children,
  className,
  bodyClassName,
  id,
}: {
  title?: ReactNode;
  actions?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  id?: string;
}) {
  return (
    <div id={id} className={cn('overflow-hidden rounded-lg border bg-card', className)}>
      {title || actions ? (
        <div className="flex min-h-[2.5rem] flex-wrap items-center justify-between gap-x-3 gap-y-1 border-b px-4 py-2">
          {title ? <h3 className="text-[13.5px] font-semibold">{title}</h3> : <span />}
          {actions ? <div className="flex items-center gap-2">{actions}</div> : null}
        </div>
      ) : null}
      <div className={cn('p-4', bodyClassName)}>{children}</div>
    </div>
  );
}
