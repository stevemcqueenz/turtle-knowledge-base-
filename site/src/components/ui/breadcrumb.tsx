import * as React from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export const Breadcrumb = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <nav aria-label="Breadcrumb" className={className} {...props} />
);

export const BreadcrumbList = ({ className, ...props }: React.OlHTMLAttributes<HTMLOListElement>) => (
  <ol className={cn('flex flex-wrap items-center gap-1 break-words text-[13px] text-muted-foreground', className)} {...props} />
);

export const BreadcrumbItem = ({ className, ...props }: React.LiHTMLAttributes<HTMLLIElement>) => (
  <li className={cn('inline-flex items-center gap-1', className)} {...props} />
);

export const BreadcrumbLink = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a className={cn('transition-colors hover:text-foreground', className)} {...props} />
);

export const BreadcrumbPage = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
  <span aria-current="page" className={cn('text-foreground', className)} {...props} />
);

export const BreadcrumbSeparator = ({ className }: { className?: string }) => (
  <li role="presentation" aria-hidden="true" className={cn('[&>svg]:size-3.5', className)}>
    <ChevronRight />
  </li>
);
