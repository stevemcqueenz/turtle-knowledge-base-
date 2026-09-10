You are writing **synthesis/classes/spec-role-matrix.md** and the coverage table for a Turtle WoW knowledge base. Repo root: /home/user/turtle-knowledge-base-. All nine class directories under `synthesis/classes/<class>/` are complete (each has README.md with a coverage table and gaps, per spec-role playbooks, leveling.md) with YAML twins under `structured/classes/<class>/`.

Deliverables:
1. `synthesis/classes/spec-role-matrix.md`: every class × spec × role combination viable on Turtle WoW as of 1.18.1 (roles: tank, healer, melee DPS, ranged DPS, PvP, leveling), built from the class READMEs and playbooks (read them all; do not rely on vanilla assumptions; Turtle made non-vanilla roles viable, e.g. Enhancement Shaman tank). For each role a class can fill: the community-favored spec(s), alternatives and when players pick them, the reasoning players give (short quotes with citations), consensus/single/contested marker, and 1.18.1 changes that affect it. Present as one matrix table (class rows × role columns, cell = spec + standing) followed by per-class detail.
2. **Coverage table**: class × role with the source quality of each playbook (strong/medium/weak/none) taken from the READMEs, and a merged gaps list across classes (things to fill later from local game data, e.g. talent-link decoding, spell IDs).
3. `structured/classes/spec-role-matrix.yaml`: `{class, spec, role, standing (favored|alternative|niche|not-viable), agreement, playbook_path, yaml_path, source_quality, notes}` rows.
4. Also check every `structured/classes/*/*.yaml` parses and has the required top-level keys (class, spec, role, sources, agreement, patch_validity, talents, stat_weights, rotation_single, rotation_aoe, aoe_threshold, cooldowns, resource_rules, consumables, mistakes_to_avoid); list any that are missing keys in your report and fix trivially missing ones (add the key with null/[] and a note) without inventing content.

Report back with the matrix summary, the coverage table, and the validator's final line.

## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
