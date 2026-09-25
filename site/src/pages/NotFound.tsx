import { href } from '../lib/router';

export function NotFound({ path }: { path: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="eyebrow">Lost in the archive</p>
      <h1 className="display mt-2 text-3xl">Nothing at this address</h1>
      <p className="mt-3 text-muted">
        <code className="font-mono text-sm">{path || '#/'}</code> does not match a class, guide or page in this build.
      </p>
      <a href={href.home()} className="btn btn-primary mt-6">
        Back to the classes
      </a>
    </div>
  );
}
