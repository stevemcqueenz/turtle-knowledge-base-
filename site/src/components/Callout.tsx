import type { ReactNode } from 'react';
import { InfoIcon, WarningIcon } from './Icons';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';

interface CalloutProps {
  tone?: 'info' | 'warning';
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({ tone = 'info', title, children, className = '' }: CalloutProps) {
  const theme = useThemeValue();
  const color = tone === 'warning' ? readableColor('#f5b942', theme) : 'rgb(var(--c-accent))';
  const Icon = tone === 'warning' ? WarningIcon : InfoIcon;
  return (
    <div
      className={`rounded-xl hairline p-3 text-sm ${className}`}
      style={{ backgroundColor: tone === 'warning' ? 'rgba(245,185,66,0.08)' : 'rgb(var(--c-surface-2))', borderColor: tone === 'warning' ? 'rgba(245,185,66,0.35)' : undefined }}
    >
      <div className="flex gap-2">
        <span className="mt-0.5 shrink-0" style={{ color }}>
          <Icon />
        </span>
        <div className="min-w-0 flex-1">
          {title ? <div className="mb-0.5 font-semibold">{title}</div> : null}
          <div className="text-muted [&_a]:text-[rgb(var(--c-accent))]">{children}</div>
        </div>
      </div>
    </div>
  );
}
