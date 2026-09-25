import { useMemo, useState } from 'react';
import type { Playbook } from '../../types';
import { REPO_URL } from '../Footer';
import { CodeIcon, DownloadIcon, ExternalIcon } from '../Icons';
import { CopyButton } from '../ui/CopyButton';

const FIELDS: [string, string][] = [
  ['talents', 'points per talent (tree, talent, rank, spell id), the leveling order, variants and a working calculator link'],
  ['stat_priority, caps', 'the gearing order and every hard number (hit, haste, defense caps) with its source'],
  ['rotation_single, rotation_aoe', 'numbered priority lists: action + condition, the AoE target threshold'],
  ['cooldowns, resource_rules', 'when to press each cooldown, how to manage mana, rage or energy'],
  ['consumables, mistakes_to_avoid', 'flasks, elixirs, enchants; the errors the community warns about'],
];

/**
 * The machine-readable playbook for bot developers: the spec's YAML from
 * structured/classes/, shown and offered as JSON, with a short schema note.
 */
export function BotPanel({ playbook, classSlug }: { playbook: Playbook; classSlug: string }) {
  const [show, setShow] = useState(false);
  const json = useMemo(() => JSON.stringify(playbook.yaml ?? {}, null, 2), [playbook.yaml]);
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

  if (!playbook.yaml) {
    return <p className="text-sm text-muted">No machine-readable playbook is published for this spec.</p>;
  }

  return (
    <div className="card overflow-hidden">
      <div className="grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 font-serif text-lg font-semibold">
            <CodeIcon className="h-5 w-5 text-accent" /> The playbook behind this page
          </p>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">
            The talents, stat priority, caps and priority lists on this page are also published as one
            structured file,{' '}
            <code className="rounded bg-surface2 px-1 font-mono text-[0.82em]">{playbook.yamlPath}</code>. Bots and
            rotation addons can use it directly. Citations inside it are written{' '}
            <code className="rounded bg-surface2 px-1 font-mono text-[0.82em]">[[d:channel#id]]</code>. Each one
            names a message in{' '}
            <code className="rounded bg-surface2 px-1 font-mono text-[0.82em]">structured/discord/evidence-&lt;channel&gt;.jsonl</code>.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <button type="button" onClick={download} className="btn btn-primary">
              <DownloadIcon /> Download JSON
            </button>
            <CopyButton text={json} label="Copy JSON" className="!px-3 !py-2 !text-sm" />
            {yamlUrl ? (
              <a href={yamlUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                YAML source <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            ) : null}
          </div>
        </div>
        <dl className="space-y-2.5 text-sm">
          {FIELDS.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[minmax(0,9.5rem)_1fr] gap-3">
              <dt className="font-mono text-[12px] text-ink">{k}</dt>
              <dd className="text-muted">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="border-t">
        <button
          type="button"
          aria-expanded={show}
          onClick={() => setShow((s) => !s)}
          className="w-full px-5 py-3 text-left text-sm font-semibold text-accent hover:bg-surface2/60 sm:px-6"
        >
          {show ? 'Hide the JSON' : `Show the JSON (${Math.round(json.length / 1024)} kB)`}
        </button>
        {show ? (
          <pre className="max-h-[32rem] overflow-auto border-t bg-surface2/60 p-4 font-mono text-[12px] leading-relaxed scrollbar-thin">
            {json}
          </pre>
        ) : null}
      </div>
    </div>
  );
}
