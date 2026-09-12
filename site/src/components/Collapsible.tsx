import { useId, useState, type ReactNode } from 'react';
import { ChevronDownIcon } from './Icons';

interface CollapsibleProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  badge?: ReactNode;
}

export function Collapsible({ title, children, defaultOpen = false, badge }: CollapsibleProps) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();
  return (
    <div className="card">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center gap-2 p-4 text-left hover:bg-surface2 ${open ? 'rounded-t-xl' : 'rounded-xl'}`}
      >
        <span className={`shrink-0 text-muted transition-transform ${open ? 'rotate-0' : '-rotate-90'}`}>
          <ChevronDownIcon />
        </span>
        <span className="flex-1 font-semibold">{title}</span>
        {badge}
      </button>
      {open ? (
        <div id={id} className="border-t px-4 pb-4 pt-3">
          {children}
        </div>
      ) : null}
    </div>
  );
}
