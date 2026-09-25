import { href, useScrollReset } from '../lib/router';
import { INSTANCE_BAND, instances } from '../lib/instances';
import { DocLayout } from '../components/DocLayout';
import { Badge } from '../components/Badge';
import { NotFound } from './NotFound';

/**
 * `#/instances`: the dungeon and raid index (`guide/instances/index.md`), one
 * card per group (Dungeons, Raids) with its tables; every row links to the
 * instance's page.
 */
export function InstancesPage() {
  useScrollReset('instances');
  const data = instances;
  if (!data) return <NotFound path={href.instances()} />;

  const count = (kind: string) => data.pages.filter((p) => p.kind === kind).length;
  const sections = data.groups.map((g) => ({ id: g.id, heading: g.heading, level: 2 as const, markdown: g.markdown }));

  return (
    <DocLayout
      crumbs={[{ label: 'Home', href: href.home() }, { label: 'Dungeons & Raids' }]}
      background={INSTANCE_BAND}
      eyebrow={
        <>
          <Badge label={`${count('dungeon')} dungeon pages`} />
          <Badge label={`${count('raid')} raid pages`} />
        </>
      }
      title="Dungeons & Raids"
      intro={data.intro}
      sections={sections}
      navLabel="Instance groups"
    />
  );
}
