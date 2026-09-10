import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'article' | 'li';
  id?: string;
  style?: React.CSSProperties;
}

export function Card({ children, className = '', as: Tag = 'div', id, style }: CardProps) {
  return (
    <Tag id={id} style={style} className={`card min-w-0 p-4 sm:p-5 ${className}`}>
      {children}
    </Tag>
  );
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-base font-semibold ${className}`}>{children}</h3>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">{children}</div>;
}
