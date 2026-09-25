import { useEffect, useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { glossary } from '../lib/site';
import { href } from '../lib/router';
import { Sheet, SheetContent, SheetDescription, SheetTitle } from './ui/sheet';
import { ScrollArea } from './ui/scroll-area';

interface GlossaryPanelProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialQuery?: string;
}

/** The glossary as a side sheet (opened from search results). */
export function GlossaryPanel({ open, onOpenChange, initialQuery = '' }: GlossaryPanelProps) {
  const [query, setQuery] = useState(initialQuery);
  useEffect(() => {
    if (open) setQuery(initialQuery);
  }, [open, initialQuery]);

  const terms = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return glossary;
    return glossary.filter((g) => `${g.term} ${g.meaning} ${g.category ?? ''}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right" className="p-0">
        <div className="border-b px-4 pb-3 pt-4">
          <SheetTitle className="text-base font-semibold">Glossary</SheetTitle>
          <SheetDescription className="text-xs text-muted-foreground">
            {glossary.length} terms from the archive.{' '}
            <a className="link" href={href.glossary()} onClick={() => onOpenChange(false)}>
              Open as a page
            </a>
          </SheetDescription>
          <label className="mt-3 flex items-center gap-2 rounded-md border bg-muted/50 px-2.5">
            <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
              placeholder="Filter terms"
              aria-label="Filter glossary terms"
              className="h-9 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </label>
        </div>
        <ScrollArea className="min-h-0 flex-1">
          {terms.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">No term matches “{query}”.</p>
          ) : (
            <dl className="divide-y">
              {terms.map((g) => (
                <div key={g.term} className="px-4 py-3">
                  <dt className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <span className="font-medium">{g.term}</span>
                    {g.category ? <span className="text-xs text-muted-foreground">{g.category}</span> : null}
                  </dt>
                  <dd className="mt-0.5 text-sm text-muted-foreground">
                    {g.meaning}{' '}
                    {g.citation_url ? (
                      <a href={g.citation_url} target="_blank" rel="noopener noreferrer" className="link">
                        source
                      </a>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
