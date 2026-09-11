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
  sectionId: string;
  /** The source gives the order only; the levels are arithmetic. */
  approximate: boolean;
  steps: TalentStep[];
}

export interface LevelingGuide {
  sections: Section[];
  sourceFile: string;
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
}

export interface SiteData {
  classes: ClassEntry[];
  matrix: MatrixData;
  glossary: GlossaryTerm[];
  meta: Meta;
  /** true when the app fell back to src/data/fixtures (development only). */
  isFixture: boolean;
}
