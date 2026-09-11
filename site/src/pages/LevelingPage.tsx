import type { Section } from '../types';
import { getClass } from '../lib/site';
import { href, useScrollReset } from '../lib/router';
import { readableColor } from '../lib/theme';
import { useThemeValue } from '../lib/theme-context';
import { Collapsible } from '../components/Collapsible';
import { Markdown } from '../components/Markdown';
import { SpecCard } from '../components/SpecCard';
import { SectionTabs } from '../components/guide/SectionTabs';
import { GuideSection, ProseDetails } from '../components/guide/GuideSection';
import { LevelingPath } from '../components/guide/LevelingPath';
import { cleanHeading } from '../components/guide/util';
import { FlameIcon } from '../components/Icons';
import {
  LEVELING_GROUPS,
  groupLevelingSections,
  levelingPicks,
  levelingPlaybook,
  levelingVerdictLine,
} from '../lib/leveling';
import { NotFound } from './NotFound';

/** The guide's own prose, one card per section, unchanged. */
function Prose({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <div key={s.id} className="card space-y-3 p-4 sm:p-5">
          <h3 className="text-base font-bold">{cleanHeading(s.heading)}</h3>
          <Markdown source={s.markdown} />
        </div>
      ))}
    </>
  );
}

/** The same prose, one click away. */
function Folded({ sections }: { sections: Section[] }) {
  return (
    <>
      {sections.map((s) => (
        <Collapsible key={s.id} title={cleanHeading(s.heading)}>
          <Markdown source={s.markdown} />
        </Collapsible>
      ))}
    </>
  );
}

/** Column count for the verdict cards: even rows for 1–3 picks. */
function pickColumns(count: number): string {
  if (count <= 1) return '';
  if (count === 2 || count === 4) return 'sm:grid-cols-2';
  return 'sm:grid-cols-2 lg:grid-cols-3';
}

export function LevelingPage({ slug }: { slug: string }) {
  const entry = getClass(slug);
  useScrollReset(`${slug}/leveling`);
  const theme = useThemeValue();

  if (!entry || !entry.leveling) return <NotFound path={`#/class/${slug}/leveling`} />;

  const ink = readableColor(entry.color, theme);
  const groups = groupLevelingSections(entry.leveling.sections);
  const orders = entry.leveling.talentOrders ?? [];
  const picks = levelingPicks(entry);

  const present: Record<string, boolean> = {
    spec: picks.length > 0 || groups.spec.length > 0,
    talents: orders.length > 0 || groups.talents.length > 0,
    press: groups.press.length > 0,
    stats: groups.stats.length > 0,
    dont: groups.dont.length > 0,
    route: groups.route.length > 0,
    hardcore: groups.hardcore.length > 0,
    more: groups.more.length > 0,
    sources: groups.intro.length + groups.sources.length > 0,
  };
  const tabs = LEVELING_GROUPS.filter((g) => present[g.key]).map((g) => ({ id: `lv-${g.key}`, label: g.label }));

  return (
    <div className="min-w-0">
      <div
        className="border-b"
        style={{ backgroundImage: `linear-gradient(180deg, ${entry.color}22 0%, ${entry.color}00 100%)` }}
      >
        <div className="mx-auto max-w-6xl px-3 pb-6 pt-4 sm:px-5">
          <nav aria-label="Breadcrumb" className="text-sm text-muted">
            <a href={href.home()} className="rounded hover:underline">
              Classes
            </a>
            <span className="mx-1.5" aria-hidden="true">
              /
            </span>
            <a href={href.class(entry.slug)} className="rounded font-semibold hover:underline" style={{ color: ink }}>
              {entry.name}
            </a>
            <span className="mx-1.5" aria-hidden="true">
              /
            </span>
            <span className="text-ink">Leveling</span>
          </nav>
          <h1 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {entry.name} · Leveling 1–60
          </h1>
          {picks.length > 0 ? <p className="mt-2 max-w-3xl text-base text-muted">{levelingVerdictLine(picks)}</p> : null}
        </div>
      </div>
      <SectionTabs items={tabs} ariaLabel="Sections of this leveling guide" />

      <div className="mx-auto max-w-6xl space-y-10 px-3 py-7 sm:px-5">
        {present.spec ? (
          <GuideSection id="lv-spec" title="Which spec" hint="How the community rates each leveling spec">
            {picks.length > 0 ? (
              <div className={`grid gap-4 ${pickColumns(picks.length)}`}>
                {picks.map((row, i) => {
                  const playbook = levelingPlaybook(entry, row);
                  return (
                    <SpecCard
                      key={`${row.spec}-${i}`}
                      row={row}
                      playbook={playbook}
                      target={playbook ? href.playbook(entry.slug, playbook.id) : null}
                    />
                  );
                })}
              </div>
            ) : null}
            <Folded sections={groups.spec} />
          </GuideSection>
        ) : null}

        {present.talents ? (
          <GuideSection
            id="lv-talents"
            title="Talent order"
            hint={orders.length > 0 ? 'The order the sources give, level by level' : undefined}
          >
            {orders.map((order) => (
              <div key={order.id} className="space-y-2">
                <h3 className="text-base font-bold">{cleanHeading(order.title)}</h3>
                {order.subtitle ? <Markdown inline source={order.subtitle} className="block text-sm text-muted" /> : null}
                <LevelingPath steps={order.steps} color={ink} approximate={order.approximate} />
              </div>
            ))}
            {orders.length > 0 ? (
              <ProseDetails title="Full talent notes" sections={groups.talents} />
            ) : (
              <Prose sections={groups.talents} />
            )}
          </GuideSection>
        ) : null}

        {present.press ? (
          <GuideSection id="lv-press" title="What to press">
            <Prose sections={groups.press} />
          </GuideSection>
        ) : null}

        {present.stats ? (
          <GuideSection id="lv-stats" title="Stats & gear">
            <Prose sections={groups.stats} />
          </GuideSection>
        ) : null}

        {present.dont ? (
          <GuideSection id="lv-dont" title="Don't">
            <Prose sections={groups.dont} />
          </GuideSection>
        ) : null}

        {present.route ? (
          <GuideSection id="lv-route" title="Route">
            <Prose sections={groups.route} />
          </GuideSection>
        ) : null}

        {present.hardcore ? (
          <GuideSection
            id="lv-hardcore"
            title="Hardcore"
            hint={
              <span className="inline-flex items-center gap-1 text-niche" title="Hardcore">
                <FlameIcon /> Hardcore mode
              </span>
            }
          >
            <Prose sections={groups.hardcore} />
          </GuideSection>
        ) : null}

        {present.more ? (
          <GuideSection id="lv-more" title="More">
            <Folded sections={groups.more} />
          </GuideSection>
        ) : null}

        {present.sources ? (
          <GuideSection id="lv-sources" title="Sources">
            <Folded sections={[...groups.intro, ...groups.sources]} />
          </GuideSection>
        ) : null}
      </div>
    </div>
  );
}
