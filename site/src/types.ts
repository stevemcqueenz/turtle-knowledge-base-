// TypeScript view of the data contract in site/PLAN.md §2.
// Everything the generator may leave out is modelled as nullable, and anything
// inside `yaml` is treated as unknown-shaped data that the UI must tolerate.

export type ClassSlug =
  | 'warrior'
  | 'paladin'
  | 'hunter'
  | 'rogue'
  | 'priest'
  | 'shaman'
  | 'mage'
  | 'warlock'
  | 'druid';

export const CLASS_ORDER: ClassSlug[] = [
  'warrior',
  'paladin',
  'hunter',
  'rogue',
  'priest',
  'shaman',
  'mage',
  'warlock',
  'druid',
];

/** Roles a playbook can have. The matrix also uses "leveling". */
export type Role = 'tank' | 'healer' | 'melee-dps' | 'ranged-dps' | 'pvp';

export type Standing = 'favored' | 'alternative' | 'niche' | 'not-viable';

export interface Section {
  id: string;
  heading: string;
  level: 2 | 3;
  markdown: string;
  /** Top-level Markdown bullets, emitted for leveling sections (absent in fixtures). */
  items?: string[];
}

export interface MatrixRow {
  /** null on "this class does not do this role" rows. */
  spec: string | null;
  role: string;
  standing: Standing | string;
  agreement: string | null;
  source_quality: string | null;
  playbook_path: string | null;
  yaml_path: string | null;
  notes: string | null;
  /** Present in matrix.json rows; absent on rows nested inside a class entry. */
  class?: string;
}

export interface PlaybookSections {
  overview: Section | null;
  talents: Section | null;
  stats: Section | null;
  rotationSingle: Section | null;
  rotationAoe: Section | null;
  cooldowns: Section | null;
  roleStrategy: Section | null;
  gear: Section | null;
  mistakes: Section | null;
  sources: Section | null;
  /** Guide pages split enchants and consumables out of the gear section (absent in older data). */
  enchants?: Section | null;
  consumables?: Section | null;
}

export interface YamlSource {
  url?: string | null;
  author?: string | null;
  authority?: string | null;
  date?: string | null;
  [k: string]: unknown;
}

export interface YamlTalentPoint {
  tree?: string | null;
  talent?: string | null;
  rank?: number | string | null;
  spell_id?: number | null;
  note?: string | null;
  [k: string]: unknown;
}

export interface YamlLevelingStep {
  level?: number | string | null;
  tree?: string | null;
  talent?: string | null;
  [k: string]: unknown;
}

export interface YamlTalents {
  build_name?: string | null;
  build_link?: string | null;
  build_link_tortoise?: string | null;
  build_link_tortoise_note?: string | null;
  points?: YamlTalentPoint[] | null;
  skip?: unknown[] | null;
  leveling_order?: YamlLevelingStep[] | null;
  links_opaque?: unknown[] | null;
  [k: string]: unknown;
}

export interface YamlRotationStep {
  priority?: number | string | null;
  action?: unknown;
  condition?: unknown;
  targets_min?: number | string | null;
  [k: string]: unknown;
}

export interface YamlCooldown {
  name?: unknown;
  use_when?: unknown;
  [k: string]: unknown;
}

export interface PlaybookYaml {
  class?: string | null;
  spec?: string | null;
  role?: string | null;
  sources?: YamlSource[] | null;
  agreement?: string | null;
  patch_validity?: {
    written_for?: string | null;
    valid_for_1181?: boolean | string | null;
    notes?: string | null;
    [k: string]: unknown;
  } | null;
  talents?: YamlTalents | null;
  stat_weights?: Record<string, unknown> | string | null;
  stat_priority?: unknown;
  caps?: Record<string, unknown> | null;
  rotation_single?: YamlRotationStep[] | null;
  rotation_aoe?: YamlRotationStep[] | null;
  aoe_threshold?: number | string | null;
  cooldowns?: YamlCooldown[] | null;
  resource_rules?: unknown[] | null;
  consumables?: unknown[] | null;
  mistakes_to_avoid?: unknown[] | null;
  [k: string]: unknown;
}

export interface Playbook {
  id: string;
  spec: string;
  role: Role | string;
  roleLabel: string;
  title: string;
  intro: string;
  sections: PlaybookSections;
  extraSections: Section[];
  standing: MatrixRow | null;
  yaml: PlaybookYaml | null;
  /** Repo path of the Markdown the playbook was built from (absent in older data). */
  sourceFile?: string;
  /** `guide/classes/<class>/<page>.md` when built from a guide page, else null. */
  guidePath?: string | null;
  /** `structured/classes/<class>/<id>.yaml`, the machine-readable playbook. */
  yamlPath?: string | null;
  /** Section keys (`overview`, `talents` ...) and `extra:<id>` in the guide page's own order. */
  sectionOrder?: string[];
  /** The guide page's opening, split into its recommendation and its fact table. */
  glance?: PlaybookGlance | null;
  /** Talent builds: the published one first, then every other build the guide links. */
  builds?: TalentBuild[];
}

export interface PlaybookGlance {
  /** The **Recommendation:** paragraph (label removed), Markdown. */
  recommendation: string | null;
  /** The key/value table under it (Role, Difficulty, Strengths, Weaknesses ...). */
  facts: { label: string; markdown: string }[];
  /** Whatever else the opening says. */
  rest: string | null;
}

/** A talent build decoded from its tortoise-db-viewer calculator link. */
export interface TalentBuild {
  label: string;
  /** Parenthetical from the guide heading ("recommended MT build"). */
  tag?: string | null;
  recommended: boolean;
  /** `playbook`: the build the YAML publishes; `guide`: another build the guide page links. */
  source: 'playbook' | 'guide';
  url: string;
  /** Ranks per talent, per tree, in the calculator's talent order (`ClassEntry.talentTree`). */
  ranks: number[][];
  totals: number[];
  split: string;
}

export interface TalentTreeTalent {
  name: string;
  row: number;
  col: number;
  max: number;
  /** Index (same tab) of the prerequisite talent. */
  req: number | null;
}

export interface TalentTree {
  tabs: { name: string; talents: TalentTreeTalent[] }[];
}

/** One cell of the guide's spec viability table. */
export interface ViabilityCell {
  key: string;
  /** S, A, A-, B ... ; null when the cell rates nothing ("—", "Niche", "Not a PvP spec"). */
  grade: string | null;
  /** How the guide writes the rating ("B–C", "—", "Niche"). */
  label: string;
  /** The rest of the cell, Markdown with citation chips. */
  note: string;
  contested: boolean;
}

export interface ViabilityRow {
  spec: string;
  /** Text after the spec name in the cell ("(24/27/0)"). */
  detail: string | null;
  route: string | null;
  playbookId: string | null;
  role: string | null;
  cells: ViabilityCell[];
}

export interface Viability {
  heading: string;
  columns: { key: string; label: string }[];
  rows: ViabilityRow[];
  legend: string | null;
  notes: string | null;
}

export interface LevelingPathStep {
  from: number | null;
  to: number | null;
  levelText: string | null;
  /** Canonical talent name when the row names one talent. */
  talent: string | null;
  tree: string | null;
  max: number | null;
  rankFrom: number | null;
  rankTo: number | null;
  /** The table's talent cell, verbatim. */
  markdown: string;
  note: string | null;
  respec: boolean;
}

export interface LevelingPath {
  id: string;
  title: string;
  subtitle: string | null;
  approximate: boolean;
  respecAt: number | null;
  noRespec: boolean;
  steps: LevelingPathStep[];
  /** The build the order ends on (its calculator link, decoded). */
  end: Omit<TalentBuild, 'label' | 'recommended' | 'source'> | null;
}

/** A standalone guide page: the class sources page, or a page no playbook claims. */
export interface GuideDoc {
  slug: string;
  title: string;
  intro: string;
  sections: Section[];
  sourceFile: string;
}

/** One row of a talent-order table in a leveling guide; cells are verbatim Markdown. */
export interface TalentStep {
  level: string | null;
  talent: string;
  tree: string | null;
  points: string | null;
  /** The table's other columns (reason, correction, link …), joined. */
  note: string | null;
}

/** A talent-order table parsed out of `synthesis/classes/<class>/leveling.md`. */
export interface TalentOrder {
  id: string;
  /** The H2 heading the table sits under. */
  title: string;
  /** The nearest H3, or the build column's header when one table lists several builds. */
  subtitle: string | null;
  /** The source gives the order only; the levels are arithmetic. */
  approximate: boolean;
  steps: TalentStep[];
}

export interface LevelingGuide {
  sections: Section[];
  sourceFile: string;
  /** The leveling page's **Recommendation:** paragraph. */
  recommendation?: string | null;
  /** The talent-order tables as resolved level-by-level paths. */
  paths?: LevelingPath[];
  /** Absent in the development fixtures. */
  talentOrders?: TalentOrder[];
}

/* ---- Gear (optional; present once the generator emits gear.yaml) --------- */

export interface GearCitation {
  url?: string | null;
  author?: string | null;
  authority?: string | null;
  date?: string | null;
  [k: string]: unknown;
}

export interface GearItem {
  name?: string | null;
  item_id?: number | null;
  rank?: number | string | null;
  source_type?: string | null;
  source_place?: string | null;
  source_detail?: string | null;
  custom_turtle_item?: boolean | string | null;
  notes?: string | null;
  citations?: GearCitation[] | null;
  [k: string]: unknown;
}

export interface GearSlot {
  slot?: string | null;
  items?: GearItem[] | null;
  [k: string]: unknown;
}

export interface GearEnchant {
  slot?: string | null;
  enchant?: string | null;
  citations?: GearCitation[] | null;
  [k: string]: unknown;
}

export interface GearConsumable {
  name?: string | null;
  use?: string | null;
  citations?: GearCitation[] | null;
  [k: string]: unknown;
}

export interface GearBracket {
  bracket?: string | null;
  agreement?: string | null;
  patch_validity?: {
    written_for?: string | null;
    valid_for_1181?: boolean | string | null;
    notes?: string | null;
    [k: string]: unknown;
  } | null;
  slots?: GearSlot[] | null;
  enchants?: GearEnchant[] | null;
  consumables?: GearConsumable[] | null;
  stat_notes?: string | null;
  [k: string]: unknown;
}

export interface GearSpec {
  spec?: string | null;
  role?: string | null;
  brackets?: GearBracket[] | null;
  [k: string]: unknown;
}

export interface GearYaml {
  class?: string | null;
  generated_from?: unknown[] | null;
  caveats?: unknown[] | null;
  specs?: GearSpec[] | null;
  gaps?: unknown[] | null;
  [k: string]: unknown;
}

export interface ClassEntry {
  slug: ClassSlug | string;
  name: string;
  color: string;
  summary: string;
  readme: Section[];
  matrix: MatrixRow[];
  playbooks: Playbook[];
  leveling: LevelingGuide | null;
  gaps: string | null;
  patchChanges: string | null;
  /** Optional: parsed structured/classes/<class>/gear.yaml. */
  gear?: GearYaml | null;
  /** Optional: sections of synthesis/classes/<class>/gear*.md. */
  gearMarkdown?: Section[] | null;
  /** `guide/classes/<class>/index.md` when the class is built from its guide pages. */
  guidePath?: string | null;
  /** The guide index's opening (everything before its first H2); null without a guide. */
  overview?: string | null;
  /** The guide's sources page (`sources.md`); null without a guide. */
  sources?: GuideDoc | null;
  /** Guide pages that no playbook YAML points at (e.g. a niche role page). */
  guidePages?: GuideDoc[];
  /** `channel#id` -> chip data for the `[[d:channel#id]]` citations inside this class's YAML. */
  citations?: Record<string, DiscordCitation>;
  /** The guide index's **Recommendation:** (or opening) paragraph. */
  recommendation?: string | null;
  /** The guide index's spec viability table. */
  viability?: Viability | null;
  /** The class's 1.18.1 talent trees (calculator order). */
  talentTree?: TalentTree | null;
}

/* ---- the code-split core (scripts/data-plugin.mjs) ------------------------ */

export interface HeadingRef {
  id: string;
  heading: string;
}

export interface PlaybookSummary {
  id: string;
  spec: string;
  role: string;
  roleLabel: string;
  title: string;
  /** Split of the published build ("43/8/0"). */
  recommended: string | null;
  headings: HeadingRef[];
}

export interface ClassSummary {
  slug: string;
  name: string;
  color: string;
  summary: string;
  recommendation: string | null;
  viability: Viability | null;
  guidePath: string | null;
  playbooks: PlaybookSummary[];
  leveling: { recommendation: string | null; headings: HeadingRef[] } | null;
  sources: { title: string } | null;
  guidePages: { slug: string; title: string }[];
  hasGear: boolean;
  readmeHeadings: HeadingRef[];
}

export interface InstanceSummary {
  slug: string;
  title: string;
  kind: InstanceKind | null;
  group: string | null;
  blurb: string;
  sections: HeadingRef[];
  bosses: string[];
}

export interface CoreData {
  classes: ClassSummary[];
  glossary: GlossaryTerm[];
  meta: Meta;
  instances: (Omit<InstancesData, 'pages'> & { pages: InstanceSummary[] }) | null;
  isFixture: boolean;
}

/** One Discord message as a citation chip: `url` is null when it is not in the evidence files. */
export interface DiscordCitation {
  label: string;
  title: string;
  url: string | null;
}

export interface MatrixData {
  roles: string[];
  standings: string[];
  rows: MatrixRow[];
  coverageMarkdown: string;
  /** Added by the contract note in PLAN §2; optional so older data still loads. */
  matrixMarkdown?: string;
}

export interface GlossaryTerm {
  term: string;
  meaning: string;
  category: string | null;
  scope: string | null;
  citation_url: string | null;
}

export interface Meta {
  generatedAt: string;
  repoCommit: string | null;
  counts: {
    classes: number;
    playbooks: number;
    matrixRows: number;
    glossaryTerms: number;
  };
  timeline: unknown;
  notes: string;
  /** Classes built from guide/classes/** (absent in older data). */
  guideClasses?: string[];
  discordCitations?: { resolved: number; unresolved: number };
  /** Dungeon and raid page counts (absent in older data). */
  instanceCounts?: { pages: number; dungeons: number; raids: number };
  /** Relative links whose target is not in the repository (kept as text). */
  unwrappedLinks?: string[];
}

export type InstanceKind = 'dungeon' | 'raid';

/** One H2 group of `guide/instances/index.md` ("Dungeons", "Raids"). */
export interface InstanceGroup {
  id: string;
  heading: string;
  kind: InstanceKind | null;
  /** The group's Markdown (its H3 sub-groups and tables), links already site routes. */
  markdown: string;
  /** Instance page slugs the group links to, in index order. */
  slugs: string[];
}

/** One dungeon or raid page, `guide/instances/<slug>.md`. */
export interface InstancePage {
  slug: string;
  title: string;
  /** From the index group that links it; null when the index does not list it. */
  kind: InstanceKind | null;
  /** The index H3 it is listed under ("Turtle-custom dungeons" …). */
  group: string | null;
  intro: string;
  sections: Section[];
  sourceFile: string;
}

/** `src/data/instances.json`. */
export interface InstancesData {
  title: string;
  intro: string;
  sourceFile: string;
  groups: InstanceGroup[];
  pages: InstancePage[];
}
