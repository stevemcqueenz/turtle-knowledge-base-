import { useEffect, useMemo, useState } from 'react';
import { BookA, Castle, CornerDownLeft, FileText, Hash, Skull, TrendingUp } from 'lucide-react';
import { search, type SearchItem, type SearchKind } from '../lib/search';
import { navigate } from '../lib/router';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from './ui/dialog';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from './ui/command';
import { Kbd } from './ui/kbd';
import { ClassMark } from './ui/ClassMark';
import { classes } from '../lib/site';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onGlossary: (term: string) => void;
}

const GROUPS: { kinds: SearchKind[]; label: string }[] = [
  { kinds: ['class'], label: 'Classes' },
  { kinds: ['spec', 'leveling'], label: 'Guides' },
  { kinds: ['instance', 'boss'], label: 'Dungeons & raids' },
  { kinds: ['section'], label: 'Sections' },
  { kinds: ['page'], label: 'Pages' },
  { kinds: ['glossary'], label: 'Glossary' },
];

const classByColor = new Map(classes.map((c) => [c.color, c]));

function ItemIcon({ item }: { item: SearchItem }) {
  const cls = item.color ? classByColor.get(item.color) : undefined;
  if (cls && (item.kind === 'class' || item.kind === 'spec' || item.kind === 'leveling'))
    return <ClassMark name={cls.name} color={cls.color} size="sm" />;
  const Icon =
    item.kind === 'instance' ? Castle : item.kind === 'boss' ? Skull : item.kind === 'glossary' ? BookA : item.kind === 'section' ? Hash : item.kind === 'leveling' ? TrendingUp : FileText;
  return (
    <span className="flex h-5 w-5 shrink-0 items-center justify-center text-muted-foreground" style={item.color ? { color: item.color } : undefined}>
      <Icon className="h-4 w-4" />
    </span>
  );
}

/** ⌘K / Ctrl K / "/": the command palette over classes, guides, sections, bosses and the glossary. */
export function SearchDialog({ open, onOpenChange, onGlossary }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  useEffect(() => {
    if (open) setQuery('');
  }, [open]);
  const results = useMemo(() => search(query, 40), [query]);
  const grouped = useMemo(
    () =>
      GROUPS.map((g) => ({ ...g, items: results.filter((r) => g.kinds.includes(r.kind)) })).filter((g) => g.items.length),
    [results],
  );
  // cmdk keeps the order we give it; the best match leads, then its group.
  const ordered = useMemo(() => {
    if (!query.trim() || !results.length) return grouped;
    const first = results[0].kind;
    return [...grouped].sort((a, b) => Number(b.kinds.includes(first)) - Number(a.kinds.includes(first)));
  }, [grouped, results, query]);

  const choose = (item: SearchItem) => {
    onOpenChange(false);
    if (item.kind === 'glossary' && item.term) onGlossary(item.term);
    else if (item.href) navigate(item.href);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent hideClose className="max-w-2xl p-0">
        <DialogTitle className="sr-only">Search</DialogTitle>
        <DialogDescription className="sr-only">Classes, spec guides, sections, dungeons, bosses and glossary terms</DialogDescription>
        <Command shouldFilter={false} loop label="Search the guides">
          <CommandInput value={query} onValueChange={setQuery} placeholder="Search classes, specs, sections, bosses, terms…" />
          <CommandList>
            <CommandEmpty>No matches in the guides or the glossary.</CommandEmpty>
            {ordered.map((g) => (
              <CommandGroup key={g.label} heading={g.label}>
                {g.items.map((item, i) => (
                  <CommandItem key={`${item.kind}-${item.href ?? item.term}-${i}`} value={`${item.kind}-${item.label}-${item.href ?? item.term}-${i}`} onSelect={() => choose(item)}>
                    <ItemIcon item={item} />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-medium">{item.label}</span>
                      <span className="block truncate text-xs text-muted-foreground">{item.detail}</span>
                    </span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
          <div className="flex items-center gap-4 border-t px-3.5 py-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <Kbd>↑</Kbd>
              <Kbd>↓</Kbd> to move
            </span>
            <span className="flex items-center gap-1.5">
              <Kbd>
                <CornerDownLeft className="h-3 w-3" />
              </Kbd>{' '}
              to open
            </span>
            <span className="ml-auto flex items-center gap-1.5">
              <Kbd>Esc</Kbd> to close
            </span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
