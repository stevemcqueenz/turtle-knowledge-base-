import { useMemo } from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import type { Playbook } from '../../types';
import { REPO_URL } from '../Footer';
import { CopyButton } from '../ui/CopyButton';
import { Button } from '../ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

const FIELDS: [string, string][] = [
  ['play_loop', 'the level-60 loop from "How to play": opener, single-target and AoE steps, cooldowns'],
  ['leveling_gameplay', 'per level bracket: new abilities, single-target and multi-target steps (tanking, healing where the guide has them)'],
  ['talents', 'points per talent (tree, talent, rank, spell id), the leveling order, variants, a working calculator link'],
  ['stat_priority, caps', 'the gearing order and every hard number (hit, haste, defense caps) with its source'],
  ['rotation_single, rotation_aoe', 'numbered priorities: action + condition, the AoE target threshold'],
  ['cooldowns, resource_rules', 'when to press each cooldown; mana, rage or energy rules'],
  ['consumables, mistakes_to_avoid', 'flasks, elixirs, enchants; the errors the community warns about'],
];

function Code({ value }: { value: unknown }) {
  const text = useMemo(() => JSON.stringify(value, null, 2), [value]);
  return (
    <div className="relative">
      <div className="absolute right-2 top-2">
        <CopyButton text={text} label="Copy" className="bg-background" />
      </div>
      <pre className="max-h-[28rem] overflow-auto rounded-md border bg-muted/40 p-3 pr-20 font-mono text-[12px] leading-relaxed scrollbar-thin">{text}</pre>
    </div>
  );
}

/**
 * The machine-readable playbook for bot developers: the spec's YAML from
 * structured/classes/, key by key, and as one JSON download.
 */
export function BotPanel({ playbook, classSlug }: { playbook: Playbook; classSlug: string }) {
  const y = playbook.yaml;
  const json = useMemo(() => JSON.stringify(y ?? {}, null, 2), [y]);
  const file = `${classSlug}-${playbook.id}.json`;
  const yamlUrl = playbook.yamlPath ? `${REPO_URL}/blob/main/${playbook.yamlPath}` : null;

  const download = () => {
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = file;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  if (!y) return <p className="text-sm text-muted-foreground">No machine-readable playbook is published for this spec.</p>;

  const has = (k: string) => k.split(', ').some((key) => y[key] !== undefined && y[key] !== null);
  const tabs = (['play_loop', 'leveling_gameplay', 'talents'] as const).filter((k) => y[k] !== undefined && y[k] !== null);

  return (
    <div className="rounded-lg border bg-card">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-b px-4 py-3">
        <p className="min-w-0 flex-1 text-[13px] text-muted-foreground">
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[12px] text-foreground">{playbook.yamlPath}</code>. Citations are{' '}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[12px] text-foreground">[[d:channel#id]]</code>, one message in{' '}
          <code className="rounded bg-muted px-1 py-0.5 font-mono text-[12px] text-foreground">structured/discord/evidence-&lt;channel&gt;.jsonl</code>.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" onClick={download}>
            <Download /> Download JSON
          </Button>
          <CopyButton text={json} label="Copy JSON" className="h-8" />
          {yamlUrl ? (
            <Button asChild variant="outline" size="sm">
              <a href={yamlUrl} target="_blank" rel="noopener noreferrer">
                YAML source <ArrowUpRight />
              </a>
            </Button>
          ) : null}
        </div>
      </div>
      <Tabs defaultValue="keys" className="px-4 pb-4 pt-2">
        <TabsList className="mb-3">
          <TabsTrigger value="keys">Keys</TabsTrigger>
          {tabs.map((k) => (
            <TabsTrigger key={k} value={k} className="font-mono text-[12.5px]">
              {k}
            </TabsTrigger>
          ))}
          <TabsTrigger value="all">Full JSON</TabsTrigger>
        </TabsList>
        <TabsContent value="keys">
          <dl className="divide-y text-[13px]">
            {FIELDS.map(([k, v]) => (
              <div key={k} className="grid gap-x-4 gap-y-0.5 py-2 sm:grid-cols-[minmax(0,13rem)_1fr]">
                <dt className="flex items-center gap-2 font-mono text-[12px]">
                  <span className={has(k) ? 'text-foreground' : 'text-muted-foreground line-through'}>{k}</span>
                </dt>
                <dd className="text-muted-foreground">{has(k) ? v : 'not published for this spec'}</dd>
              </div>
            ))}
          </dl>
        </TabsContent>
        {tabs.map((k) => (
          <TabsContent key={k} value={k}>
            <Code value={y[k]} />
          </TabsContent>
        ))}
        <TabsContent value="all">
          <Code value={y} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
