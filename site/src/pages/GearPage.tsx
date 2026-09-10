import { useMemo, useState } from 'react';
import type { GearSpec } from '../types';
import { agreementMeta, getClass, humanizeKey, isEmptyValue, patchValidityMeta, roleLabel } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import { Callout } from '../components/Callout';
import { Collapsible } from '../components/Collapsible';
import { GearTable } from '../components/GearTable';
import { Markdown } from '../components/Markdown';
import { Tabs } from '../components/Tabs';
import { CitationChip } from '../components/CitationChip';
import { YamlValue } from '../components/YamlValue';
import { NotFound } from './NotFound';

const specKey = (s: GearSpec) => `${s.spec ?? ''}|${s.role ?? ''}`;

function bracketLabel(id: string): string {
  const m = /^leveling-(\d+)-(\d+)$/.exec(id);
  if (m) return `Leveling ${m[1]}–${m[2]}`;
  if (id === 'pre-raid-60') return 'Pre-raid 60';
  if (id === 'pvp-60') return 'PvP 60';
  const r = /^raid-t(\d+(?:\.\d+)?)$/.exec(id);
  if (r) return `Raid T${r[1]}`;
  return humanizeKey(id);
}

export function GearPage({ slug, spec, bracket }: { slug: string; spec?: string; bracket?: string }) {
  const entry = getClass(slug);
  useScrollReset(`${slug}/gear`);
  const theme = useThemeValue();
  const specs = useMemo(() => (entry?.gear?.specs ?? []).filter(Boolean), [entry]);
  const [specSel, setSpecSel] = useState<string>(spec ?? '');
  const [bracketSel, setBracketSel] = useState<string>(bracket ?? '');

  if (!entry) return <NotFound path={`#/class/${slug}/gear`} />;
  const gearMarkdown = entry.gearMarkdown ?? [];
  if (specs.length === 0 && gearMarkdown.length === 0) return <NotFound path={`#/class/${slug}/gear`} />;

  const ink = readableColor(entry.color, theme);
  const hasSlots = (b: { slots?: unknown[] | null } | null | undefined) => Boolean(b && Array.isArray(b.slots) && b.slots.length > 0);
  const activeSpec =
    specs.find((s) => specKey(s) === specSel) ??
    specs.find((s) => (s.brackets ?? []).some((b) => hasSlots(b))) ??
    specs[0] ??
    null;
  const brackets = (activeSpec?.brackets ?? []).filter(Boolean);
  const activeBracket =
    brackets.find((b) => String(b.bracket) === bracketSel) ?? brackets.find((b) => hasSlots(b)) ?? brackets[0] ?? null;
  const validity = activeBracket ? patchValidityMeta({ patch_validity: activeBracket.patch_validity }) : null;
  const agreement = agreementMeta(activeBracket?.agreement ?? null);

  return (
    <div className="mx-auto max-w-6xl px-3 py-6 sm:px-5">
      <nav aria-label="Breadcrumb" className="mb-3 text-sm text-muted">
        <a href={href.home()} className="hover:underline">
          Classes
        </a>
        <span className="mx-1.5" aria-hidden="true">/</span>
        <a href={href.class(entry.slug)} className="hover:underline" style={{ color: ink }}>
          {entry.name}
        </a>
        <span className="mx-1.5" aria-hidden="true">/</span>
        <span className="text-ink">Gear</span>
      </nav>

      <header className="mb-5 overflow-hidden rounded-xl bg-surface hairline">
        <div className="h-1.5 w-full" style={{ backgroundColor: entry.color }} aria-hidden="true" />
        <div className="p-4 sm:p-5">
          <h1 className="text-xl font-semibold sm:text-2xl">{entry.name} — gear by spec and bracket</h1>
        </div>
      </header>

      {specs.length > 0 ? (
        <div className="space-y-3">
          <div>
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Spec and role</div>
            <Tabs
              items={specs.map((s) => ({ id: specKey(s), label: `${s.spec ?? ''} ${roleLabel(String(s.role ?? ''))}`.trim() }))}
              active={activeSpec ? specKey(activeSpec) : ''}
              onChange={(id) => {
                setSpecSel(id);
                setBracketSel('');
              }}
              ariaLabel="Spec and role"
              accent={entry.color}
            />
          </div>

          {brackets.length > 0 ? (
            <div>
              <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Bracket</div>
              <Tabs
                items={brackets.map((b) => ({ id: String(b.bracket), label: bracketLabel(String(b.bracket ?? '')) }))}
                active={activeBracket ? String(activeBracket.bracket) : ''}
                onChange={setBracketSel}
                ariaLabel="Level bracket"
                accent={entry.color}
              />
            </div>
          ) : null}

          {activeBracket ? (
            <Card as="section" className="space-y-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge label={humanizeKey(String(activeBracket.bracket ?? ''))} color={entry.color} />
                {agreement ? <Badge label={agreement.label} color={agreement.color} title={agreement.title} /> : null}
                {validity ? <Badge label={validity.label} color={validity.color} title={validity.title} /> : null}
              </div>

              {activeBracket.stat_notes ? (
                <div className="rounded-xl bg-surface2 hairline p-3">
                  <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">Stat notes</div>
                  <Markdown source={String(activeBracket.stat_notes)} />
                </div>
              ) : null}

              <GearTable bracket={activeBracket} />

              {!isEmptyValue(activeBracket.enchants) ? (
                <div>
                  <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">Enchants</h2>
                  <ul className="space-y-1.5">
                    {(activeBracket.enchants ?? []).map((e, i) => (
                      <li key={i} className="flex flex-wrap items-baseline gap-2 text-sm">
                        <span className="font-medium">{humanizeKey(String(e.slot ?? '—'))}</span>
                        <span className="text-muted">{String(e.enchant ?? '')}</span>
                        {(e.citations ?? []).map((c, ci) => (
                          <CitationChip key={ci} source={c} />
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {!isEmptyValue(activeBracket.consumables) ? (
                <div>
                  <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">Consumables</h2>
                  <ul className="space-y-1.5">
                    {(activeBracket.consumables ?? []).map((c, i) => (
                      <li key={i} className="flex flex-wrap items-baseline gap-2 text-sm">
                        <span className="font-medium">{String(c.name ?? '')}</span>
                        {c.use ? <span className="text-muted">{String(c.use)}</span> : null}
                        {(c.citations ?? []).map((cit, ci) => (
                          <CitationChip key={ci} source={cit} />
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Card>
          ) : (
            <p className="text-sm text-muted">No bracket data for this spec.</p>
          )}
        </div>
      ) : null}

      <div className="mt-4 space-y-3">
        {!isEmptyValue(entry.gear?.caveats) ? (
          <Callout tone="warning" title="Caveats">
            <YamlValue value={entry.gear?.caveats} />
          </Callout>
        ) : null}
        {!isEmptyValue(entry.gear?.gaps) ? (
          <Collapsible title="Gaps — what the sources do not cover">
            <YamlValue value={entry.gear?.gaps} />
          </Collapsible>
        ) : null}
        {!isEmptyValue(entry.gear?.generated_from) ? (
          <Collapsible title="Generated from">
            <YamlValue value={entry.gear?.generated_from} />
          </Collapsible>
        ) : null}
        {gearMarkdown.map((s) => (
          <Collapsible key={s.id} title={s.heading}>
            <Markdown source={s.markdown} />
          </Collapsible>
        ))}
      </div>
    </div>
  );
}
