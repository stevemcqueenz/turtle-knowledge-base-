import type { ReactNode } from 'react';
import { Info, TriangleAlert } from 'lucide-react';
import { cn } from '../lib/utils';

interface CalloutProps {
  tone?: 'info' | 'warning';
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ tone = 'info', title, children, className = '' }: CalloutProps) {
  const Icon = tone === 'warning' ? TriangleAlert : Info;
  return (
    <div className={cn('flex gap-2.5 rounded-lg border p-3 text-sm', tone === 'warning' ? 'border-[#ff8000]/35 bg-[#ff8000]/5' : 'bg-muted/40', className)}>
      <Icon className={cn('mt-0.5 h-4 w-4 shrink-0', tone === 'warning' ? 'text-q-legendary' : 'text-link')} aria-hidden="true" />
      <div className="min-w-0 flex-1">
        {title ? <div className="mb-0.5 font-semibold">{title}</div> : null}
        <div className="text-muted-foreground [&_a]:text-link">{children}</div>
      </div>
    </div>
  );
}
