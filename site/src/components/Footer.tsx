import { meta } from '../lib/site';
import { href } from '../lib/router';
import { TurtleLogo } from './Icons';

export const REPO_URL = 'https://github.com/stevemcqueenz/turtle-knowledge-base-';

/** One quiet line: what this is, where it comes from, when it was built. */
export function Footer() {
  const date = meta.generatedAt ? new Date(meta.generatedAt).toISOString().slice(0, 10) : null;
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-[76rem] flex-col gap-3 px-4 py-6 text-[13px] text-muted-foreground sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <p className="flex items-center gap-2">
          <TurtleLogo className="h-5 w-5 shrink-0" />
          <span>
            For the Turtle WoW community. The servers closed on 15 May 2026, eight weeks after patch 1.18.1.
          </span>
        </p>
        <p className="flex flex-wrap gap-x-4 gap-y-1 sm:ml-auto">
          <a className="hover:text-foreground" href={href.about()}>
            About
          </a>
          <a className="hover:text-foreground" href={href.archive()}>
            Forum-era research
          </a>
          <a className="hover:text-foreground" href={REPO_URL} target="_blank" rel="noopener noreferrer">
            Repository
          </a>
          {date ? (
            <span className="tabular">
              Built {date}
              {meta.repoCommit ? ` · ${String(meta.repoCommit).slice(0, 7)}` : ''}
            </span>
          ) : null}
        </p>
      </div>
    </footer>
  );
}
