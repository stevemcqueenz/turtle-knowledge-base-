import { href } from '../lib/router';
import { Button } from '../components/ui/button';

/** Unknown routes: the game's red error line, then a way home. */
export function NotFound({ path }: { path: string }) {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-[15px] font-semibold text-[#ff2020] [text-shadow:0_1px_0_rgb(0_0_0/0.6)] dark:text-[#ff3b3b]">You cannot go that way.</p>
      <h1 className="mt-3 text-xl font-semibold">Nothing at this address</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        <code className="font-mono text-[13px]">{path || '#/'}</code> does not match a class, guide or page in this build.
      </p>
      <Button asChild className="mt-6">
        <a href={href.home()}>Back to the classes</a>
      </Button>
    </div>
  );
}
