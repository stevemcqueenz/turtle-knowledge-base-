import { useMemo, useState } from 'react';
import type { GearSpec } from '../types';
import { agreementMeta, humanizeKey, isEmptyValue, patchValidityMeta, roleLabel } from '../lib/site';
import { useClassEntry } from '../data';
import { Loading, Page, PageHeader } from '../components/layout/Page';
import { href, useScrollReset } from '../lib/router';
import { Badge } from '../components/ui/badge';
import { Callout } from '../components/Callout';
import { GearTable } from '../components/GearTable';
import { Markdown } from '../components/Markdown';
import { ClassMark, useClassInk, useClassVars } from '../components/ui/ClassMark';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
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
  const loaded = useClassEntry(slug);
  const entry = loaded ?? undefined;
  useScrollReset(`${slug}/gear`);
  const { ink } = useClassInk(loaded?.color ?? '#cccccc');
  const vars = useClassVars(loaded?.color ?? '#cccccc');
  const specs = useMemo(() => (entry?.gear?.specs ?? []).filter(Boolean), [entry]);
  const [specSel, setSpecSel] = useState<string>(spec ?? '');
  const [bracketSel, setBracketSel] = useState<string>(bracket ?? '');

  if (loaded === undefined) return <Loading />;
  if (!entry) return <NotFound path={`#/class/${slug}/gear`} />;
  const gearMarkdown = entry.gearMarkdown ?? [];
  if (specs.length === 0 && gearMarkdown.length === 0) return <NotFound path={`#/class/${slug}/gear`} />;

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
    <Page
      style={vars}
      header={
        <PageHeader
          crumbs={[
            { label: 'Classes', href: href.home() },
            { label: entry.name, href: href.class(entry.slug) },
            { label: 'Gear' },
          ]}
          icon={<ClassMark name={entry.name} color={entry.color} size="xl" />}
          title={
            <>
              <span style={{ color: ink }}>{entry.name}</span> gear by spec and bracket
            </>
          }
          meta={<span>Research archive · forum-era gear lists</span>}
        >
          <p className="max-w-[74ch] text-muted-foreground">
            Compiled from the forum&rsquo;s best-in-slot and gearing threads before the Discord read. Each spec guide&rsquo;s Gear section
            has the current 1.18.1 advice.
          </p>
        </PageHeader>
      }
    >
      {specs.length > 0 ? (
        <div className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-xs text-muted-foreground">
              Spec and role
              <Select
                value={activeSpec ? specKey(activeSpec) : ''}
                onValueChange={(id) => {
                  setSpecSel(id);
                  setBracketSel('');
                }}
              >
                <SelectTrigger className="mt-1 text-foreground" aria-label="Spec and role">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {specs.map((s) => (
                    <SelectItem key={specKey(s)} value={specKey(s)}>
                      {`${s.spec ?? ''} ${roleLabel(String(s.role ?? ''))}`.trim()}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            {brackets.length > 0 ? (
              <label className="block text-xs text-muted-foreground">
                Bracket
                <Select value={activeBracket ? String(activeBracket.bracket) : ''} onValueChange={setBracketSel}>
                  <SelectTrigger className="mt-1 text-foreground" aria-label="Level bracket">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {brackets.map((b) => (
                      <SelectItem key={String(b.bracket)} value={String(b.bracket)}>
                        {bracketLabel(String(b.bracket ?? ''))}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </label>
            ) : null}
          </div>

          {activeBracket ? (
            <section className="space-y-4 rounded-lg border bg-card p-4">
              <div className="flex flex-wrap items-center gap-1.5">
                <Badge>{humanizeKey(String(activeBracket.bracket ?? ''))}</Badge>
                {agreement ? <Badge title={agreement.title}>{agreement.label}</Badge> : null}
                {validity ? <Badge title={validity.title}>{validity.label}</Badge> : null}
              </div>

              {activeBracket.stat_notes ? (
                <div className="rounded-md border bg-muted/40 p-3">
                  <div className="mb-1 text-xs font-medium text-muted-foreground">Stat notes</div>
                  <Markdown source={String(activeBracket.stat_notes)} />
                </div>
              ) : null}

              <GearTable bracket={activeBracket} />

              {!isEmptyValue(activeBracket.enchants) ? (
                <div>
                  <h2 className="mb-2 text-sm font-semibold">Enchants</h2>
                  <ul className="space-y-1.5">
                    {(activeBracket.enchants ?? []).map((e, i) => (
                      <li key={i} className="flex flex-wrap items-baseline gap-2 text-sm">
                        <span className="font-medium">{humanizeKey(String(e.slot ?? '—'))}</span>
                        <span className="text-muted-foreground">{String(e.enchant ?? '')}</span>
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
                  <h2 className="mb-2 text-sm font-semibold">Consumables</h2>
                  <ul className="space-y-1.5">
                    {(activeBracket.consumables ?? []).map((c, i) => (
                      <li key={i} className="flex flex-wrap items-baseline gap-2 text-sm">
                        <span className="font-medium">{String(c.name ?? '')}</span>
                        {c.use ? <span className="text-muted-foreground">{String(c.use)}</span> : null}
                        {(c.citations ?? []).map((cit, ci) => (
                          <CitationChip key={ci} source={cit} />
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </section>
          ) : (
            <p className="text-sm text-muted-foreground">No bracket data for this spec.</p>
          )}
        </div>
      ) : null}

      <div className="mt-4 space-y-3">
        {!isEmptyValue(entry.gear?.caveats) ? (
          <Callout tone="warning" title="Caveats">
            <YamlValue value={entry.gear?.caveats} />
          </Callout>
        ) : null}
        <Accordion type="multiple" className="rounded-lg border px-4">
          {!isEmptyValue(entry.gear?.gaps) ? (
            <AccordionItem value="gaps" className="last:border-b-0">
              <AccordionTrigger>What the sources do not cover</AccordionTrigger>
              <AccordionContent>
                <YamlValue value={entry.gear?.gaps} />
              </AccordionContent>
            </AccordionItem>
          ) : null}
          {!isEmptyValue(entry.gear?.generated_from) ? (
            <AccordionItem value="from" className="last:border-b-0">
              <AccordionTrigger>Generated from</AccordionTrigger>
              <AccordionContent>
                <YamlValue value={entry.gear?.generated_from} />
              </AccordionContent>
            </AccordionItem>
          ) : null}
          {gearMarkdown.map((s) => (
            <AccordionItem key={s.id} value={s.id} className="last:border-b-0">
              <AccordionTrigger>{s.heading}</AccordionTrigger>
              <AccordionContent>
                <Markdown source={s.markdown} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Page>
  );
}
