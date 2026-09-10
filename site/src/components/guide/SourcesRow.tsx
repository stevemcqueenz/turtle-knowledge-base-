import { useId, useState, type ReactNode } from 'react';
import type { YamlSource } from '../../types';
import { CitationChip } from '../CitationChip';
import { ChevronDownIcon } from '../Icons';
import { sourceSummaryLine, summarizeSources } from './util';

interface SourcesRowProps {
  sources: YamlSource[];
  /** The prose "Sources" section, revealed together with the chips. */
  children?: ReactNode;
}

/** One line saying what this guide is built on, with the posts one click away. */
export function SourcesRow({ sources, children }: SourcesRowProps) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const summary = summarizeSources(sources);

  return (
    <div className="card overflow-hidden">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 p-4">
        <p className="min-w-0 flex-1 text-sm">
          {sources.length > 0 ? sourceSummaryLine(summary) : 'No posts are cited for this spec.'}
        </p>
        {sources.length > 0 ? (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen((v) => !v)}
            className="chip hairline shrink-0 bg-surface2 px-3 py-1.5 text-xs font-semibold hover:text-ink"
          >
            <span className={`transition-transform ${open ? 'rotate-0' : '-rotate-90'}`}>
              <ChevronDownIcon className="h-3.5 w-3.5" />
            </span>
            {open ? 'Hide posts' : 'Show posts'}
          </button>
        ) : null}
      </div>
      {open ? (
        <div id={id} className="space-y-4 border-t p-4">
          <ul className="flex flex-wrap gap-1.5">
            {sources.map((s, i) => (
              <li key={i} className="min-w-0 max-w-full">
                <CitationChip source={s} />
              </li>
            ))}
          </ul>
          {children}
        </div>
      ) : null}
    </div>
  );
}
