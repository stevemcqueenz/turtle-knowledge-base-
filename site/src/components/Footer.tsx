import { meta } from '../lib/site';
import { href } from '../lib/router';
import { TurtleIcon } from './Icons';

export const REPO_URL = 'https://github.com/stevemcqueenz/turtle-knowledge-base-';

export function Footer() {
  const date = meta.generatedAt ? new Date(meta.generatedAt).toISOString().slice(0, 10) : null;
  return (
    <footer className="mt-20 border-t">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-muted sm:px-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-3">
          <p className="flex items-center gap-2 font-serif text-base font-semibold text-ink">
            <TurtleIcon className="h-5 w-5 text-accent" /> In memory of a server
          </p>
          <p className="max-w-prose leading-relaxed">
            Turtle WoW closed on 15 May 2026, eight weeks after its final patch, 1.18.1 &ldquo;Nightmares of
            Ursol&rdquo;. These guides keep what its players worked out about every class in that patch, taken
            from the archived Discord and the forum and wiki. Each recommendation links to the message it came
            from. Where the sources are silent, the guides say so.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="space-y-2">
            <p className="eyebrow">The archive</p>
            <a className="block hover:text-ink" href={href.about()}>
              How it was made
            </a>
            <a className="block hover:text-ink" href={href.matrix()}>
              Viability board
            </a>
            <a className="block hover:text-ink" href={href.archive()}>
              Forum-era research
            </a>
          </div>
          <div className="space-y-2">
            <p className="eyebrow">Source</p>
            <a className="block hover:text-ink" href={REPO_URL} target="_blank" rel="noopener noreferrer">
              Repository ↗
            </a>
            <span className="block">
              {date ? `Built ${date}` : 'Built from the repository'}
              {meta.repoCommit ? ` · ${String(meta.repoCommit).slice(0, 8)}` : ''}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
