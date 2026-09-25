import { useMemo } from 'react';
import { marked, type Tokens } from 'marked';
import { Repeat } from 'lucide-react';
import { Markdown } from '../Markdown';

interface Step {
  label: string | null;
  body: string;
}

/**
 * Splits a "How to play" section into the prose before its numbered list, the
 * list's steps (each with its bold lead-in as the step title) and whatever
 * follows. Returns null when the section has no numbered list.
 */
export function parseLoop(markdown: string): { intro: string; steps: Step[]; outro: string } | null {
  const tokens = marked.lexer(markdown);
  const at = tokens.findIndex((t) => t.type === 'list' && (t as Tokens.List).ordered && (t as Tokens.List).items.length >= 2);
  if (at < 0) return null;
  const list = tokens[at] as Tokens.List;
  const steps = list.items.map((item) => {
    const m = /^\*\*([^*]+?):?\*\*:?\s*/.exec(item.text);
    return m ? { label: m[1].trim().replace(/[:,;]$/, ''), body: item.text.slice(m[0].length) } : { label: null, body: item.text };
  });
  const join = (ts: { raw: string }[]) => ts.map((t) => t.raw).join('').trim();
  return { intro: join(tokens.slice(0, at)), steps, outro: join(tokens.slice(at + 1)) };
}

/**
 * The spec's level-60 play loop as a numbered track: each step's title in
 * bold, its detail (and citations) under it, a "repeat" cap at the end.
 */
export function HowToPlay({ markdown, spells }: { markdown: string; spells?: string }) {
  const loop = useMemo(() => parseLoop(markdown), [markdown]);
  if (!loop) return <Markdown source={markdown} spells={spells} />;
  const back = loop.steps.length > 2 && /open|pull|before|buff/i.test(loop.steps[0].label ?? '') ? 2 : 1;
  return (
    <div className="space-y-3">
      {loop.intro ? <Markdown source={loop.intro} spells={spells} className="text-[13.5px] text-muted-foreground" /> : null}
      <div className="relative overflow-hidden rounded-lg border bg-card">
        <span aria-hidden="true" className="absolute inset-y-0 left-0 z-10 w-[2px] bg-[rgb(var(--cc-raw))]" />
        <ol>
        {loop.steps.map((s, i) => (
          <li key={i} className="relative grid grid-cols-[2rem_minmax(0,1fr)] gap-3 border-b px-4 py-3 last:border-b-0">
            <span
              aria-hidden="true"
              className="mt-px flex h-6 w-6 items-center justify-center rounded-full border border-[rgb(var(--cc)/0.55)] bg-[rgb(var(--cc)/0.12)] text-[12px] font-semibold tabular text-foreground"
            >
              {i + 1}
            </span>
            <div className="min-w-0">
              {s.label ? <p className="text-[14px] font-semibold leading-6">{s.label}</p> : null}
              {s.body.trim() ? <Markdown source={s.body} spells={spells} className="text-[14px] leading-relaxed [&>p]:mb-1.5" /> : null}
            </div>
          </li>
        ))}
        </ol>
        <p className="flex items-center gap-2 border-t bg-muted/30 px-4 py-1.5 pl-[3.25rem] text-xs text-muted-foreground">
          <Repeat className="h-3.5 w-3.5" aria-hidden="true" /> Back to step {back}
        </p>
      </div>
      {loop.outro ? <Markdown source={loop.outro} spells={spells} /> : null}
    </div>
  );
}
