import { href } from '../lib/router';

export function NotFound({ path }: { path: string }) {
  return (
    <div className="mx-auto max-w-3xl px-3 py-16 text-center sm:px-5">
      <h1 className="text-2xl font-semibold">Nothing at this address</h1>
      <p className="mt-2 text-muted">
        <code className="font-mono text-sm">{path || '#/'}</code> does not match a class, playbook or page in this build.
      </p>
      <a
        href={href.home()}
        className="mt-5 inline-flex rounded-xl hairline bg-surface px-3 py-2 text-sm hover:border-[color:rgb(var(--c-accent)/0.5)]"
      >
        Back to the class list
      </a>
    </div>
  );
}
