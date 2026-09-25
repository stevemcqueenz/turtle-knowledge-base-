import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../../lib/utils';

export const Tabs = TabsPrimitive.Root;

/** Underlined tab strip (the page-level variant) or a segmented control (`variant="segmented"`). */
export const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & { variant?: 'line' | 'segmented' }
>(({ className, variant = 'line', ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      variant === 'line'
        ? 'no-scrollbar flex items-stretch gap-4 overflow-x-auto border-b'
        : 'no-scrollbar inline-flex max-w-full items-center gap-0.5 overflow-x-auto rounded-md border bg-muted/60 p-0.5',
      className,
    )}
    data-variant={variant}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

export const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & { variant?: 'line' | 'segmented' }
>(({ className, variant = 'line', ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex shrink-0 items-center justify-center gap-1.5 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
      variant === 'line'
        ? '-mb-px border-b-2 border-transparent pb-2 pt-1 text-muted-foreground hover:text-foreground data-[state=active]:border-[rgb(var(--cc))] data-[state=active]:text-foreground'
        : 'h-7 rounded-[5px] px-2.5 text-muted-foreground hover:text-foreground data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

export const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn('focus-visible:outline-none data-[state=inactive]:hidden', className)}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
