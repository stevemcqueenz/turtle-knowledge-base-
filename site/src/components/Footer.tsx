import { meta } from '../lib/site';
import { href } from '../lib/router';

export function Footer() {
  return (
    <footer className="mt-12 border-t">
      <div className="mx-auto max-w-6xl px-3 py-6 text-xs text-muted sm:px-5">
        <p className="mb-1">
          Every claim on this site comes from the archived Turtle WoW forums and is cited on the page. Nothing is
          invented; gaps are stated. <a href={href.about()} className="text-[rgb(var(--c-accent))] hover:underline">About the data</a>.
        </p>
        <p>
          Data generated {meta.generatedAt ? new Date(meta.generatedAt).toISOString().slice(0, 10) : 'from the repository'}
          {meta.repoCommit ? ` · commit ${String(meta.repoCommit).slice(0, 10)}` : ''} · {meta.counts?.classes ?? 0} classes ·{' '}
          {meta.counts?.playbooks ?? 0} playbooks · {meta.counts?.glossaryTerms ?? 0} glossary terms.
        </p>
      </div>
    </footer>
  );
}
