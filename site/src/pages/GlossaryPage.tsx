import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { glossary } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { Page, PageHeader } from '../components/layout/Page';
import { Badge } from '../components/ui/badge';

/** `#/glossary`: every term of the archive's glossary, filterable. */
export function GlossaryPage() {
  useScrollReset('glossary');
  const [query, setQuery] = useState('');
  const categories = useMemo(() => [...new Set(glossary.map((g) => g.category).filter(Boolean) as string[])].sort(), []);
  const [cat, setCat] = useState<string | null>(null);
  const terms = useMemo(() => {
    const q = query.trim().toLowerCase();
    return glossary.filter(
      (g) => (!cat || g.category === cat) && (!q || `${g.term} ${g.meaning} ${g.category ?? ''}`.toLowerCase().includes(q)),
    );
  }, [query, cat]);

  return (
    <Page
      header={
        <PageHeader
          crumbs={[{ label: 'Home', href: href.home() }, { label: 'Glossary' }]}
          title="Glossary"
          meta={<span className="tabular">{glossary.length} terms</span>}
        />
      }
    >
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <label className="flex h-9 w-full items-center gap-2 rounded-md border bg-muted/40 px-2.5 sm:w-80">
          <Search className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            placeholder="Filter terms"
            aria-label="Filter glossary terms"
            className="h-full w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </label>
        <div className="flex flex-wrap gap-1" role="group" aria-label="Category">
          {categories.map((c) => (
            <button key={c} type="button" onClick={() => setCat(cat === c ? null : c)} aria-pressed={cat === c}>
              <Badge variant={cat === c ? 'default' : 'outline'} className="cursor-pointer">
                {c}
              </Badge>
            </button>
          ))}
        </div>
      </div>
      {terms.length === 0 ? (
        <p className="py-10 text-center text-sm text-muted-foreground">No term matches.</p>
      ) : (
        <dl className="divide-y rounded-lg border">
          {terms.map((g) => (
            <div key={g.term} className="grid gap-x-6 gap-y-0.5 px-4 py-2.5 sm:grid-cols-[14rem_1fr]">
              <dt className="font-medium">
                {g.term}
                {g.category ? <span className="ml-2 text-xs font-normal text-muted-foreground">{g.category}</span> : null}
              </dt>
              <dd className="text-[13.5px] text-muted-foreground">
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
    </Page>
  );
}
