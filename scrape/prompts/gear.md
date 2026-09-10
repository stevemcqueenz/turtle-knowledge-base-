# Task: gear recommendations per class, spec, role and level bracket, with where to obtain

You are producing the **gear guide** for the classes {CLASSES} in a Turtle WoW knowledge base. Repo root: /home/user/turtle-knowledge-base-. Read `AGENTS.md` and `synthesis/CONVENTIONS.md` first, then the working rules at the end of this file. Do NOT fetch from the network; do NOT run git; write only the files listed under Deliverables.

## Sources (in priority order)
1. Forum threads whose titles mention BiS / best in slot / pre-raid / gear / gearing / itemization in the class forums and General (`structured/forum/topics.jsonl`, `title`), and the gear discussion inside every thread of the class forum. Posts: `structured/forum/posts/f<forum>*.jsonl` (`content_md`, `author`, `authority`, `date`, `era`, `url`). Class forum ids: warrior 40, paladin 41, druid 42, mage 43, priest 44, hunter 45, warlock 46, rogue 47, shaman 48. Grep `content_md` for slot words (helm, head, neck, shoulder, back, cloak, chest, wrist, bracers, hands, gloves, waist, belt, legs, feet, boots, ring, trinket, weapon, shield, off-hand, ranged, wand, relic, totem, idol, libram) and for "BiS", "pre-raid", "pre-bis", "upgrade", "enchant", "consumable", "flask", "elixir".
2. The existing playbooks' gear sections: `synthesis/classes/<class>/*.md` (section "Gear, enchants and consumables") and `synthesis/classes/<class>/leveling.md` (gear upgrades while leveling), plus `structured/classes/<class>/*.yaml` `consumables`.
3. Official itemization changelogs: `synthesis/1.18.1-master-changelog.md` (Items section), `structured/patches/1.18.1-changes.yaml` (`system: items`), the Itemization forum `extracted/forum/f70-itemization/` (staff item changes, custom sets, world epics, relics) and `synthesis/turtle-vs-vanilla-timeline.md` B6.
4. Where-to-obtain lookups: `structured/entity-index/items.json` (drops_from, sold_by, drop_rates), `structured/content/instances.yaml` (bosses[].loot), `structured/content/quests.yaml` (rewards), `structured/content/vendors.yaml`, `structured/content/recipes.yaml` (crafted), `structured/wiki/npcs.jsonl` (`loot`). For vanilla items no source in the repo may state the origin; then write `source: unknown-in-sources` (the user's server database will fill it later).

## Deliverables
For each class in {CLASSES}:
- `structured/classes/<class>/gear.yaml`:
  ```
  class: <class>
  generated_from: [list of thread urls and files used]
  caveats: [...]
  specs:
    - spec: <spec name as in the playbooks>
      role: tank|healer|melee-dps|ranged-dps|pvp
      brackets:
        - bracket: leveling-10-29 | leveling-30-49 | leveling-50-59 | pre-raid-60 | raid-t1 | raid-t2 | raid-t2.5 | raid-t3 | raid-t3.5 | pvp-60   (use only brackets the sources support)
          agreement: consensus|single|contested
          patch_validity: {written_for: <patch or date>, valid_for_1181: true|false|unknown, notes}
          slots:
            - slot: head|neck|shoulder|back|chest|wrist|hands|waist|legs|feet|ring1|ring2|trinket1|trinket2|main-hand|off-hand|two-hand|ranged|relic|ammo
              items:
                - name: <exact item name as written>
                  item_id: <int or null>
                  rank: 1|2|3 (1 = best per the sources)
                  source_type: drop|quest|vendor|craft|pvp|reputation|world-drop|unknown-in-sources
                  source_place: <boss/instance, quest name, vendor + zone, profession, or null>
                  source_detail: <drop rate / cost / reputation level if a source gives it, else null>
                  custom_turtle_item: true|false|unknown
                  notes: <why it is recommended, in the source's words when short>
                  citations: [{url, author, authority, date}]
          enchants: [{slot, enchant, citations}]
          consumables: [{name, use, citations}]
          stat_notes: <one paragraph of stat priority for this bracket, cited>
  gaps: [what the sources do not cover: e.g. no leveling gear list for X, no where-to-obtain for Y]
  ```
- `synthesis/classes/<class>/gear.md`: readable version, one H2 per spec-role, one H3 per bracket, slot tables (`slot | item | source | notes | citation`), enchants and consumables lists, a final Gaps section. Every row cites its source.

Rules: exact item names as written in the sources (normalize apostrophes to '); never invent an item, a source or a drop location; when the forum names an item without saying where it comes from and none of the repo files state it, use `unknown-in-sources`; mark items that a 1.18.1 itemization change touched (from source 3) with a note and citation; separate Turtle custom items (custom sets, world epics, relics, PvP tiers) from vanilla items when a source lets you tell. Keep per-file size under ~80 KB; split gear.md into `gear-<role>.md` files with an index if needed.

Finish with `python3 scrape/validate.py synthesis/classes/<class>/gear*.md structured/classes/<class>/gear.yaml` for each class and fix everything it reports. Report: per class, the spec-role × bracket cells filled, item counts, how many items have a known source vs unknown-in-sources, and the validator's final line.
## Working rules for every synthesis agent
- Read `synthesis/CONVENTIONS.md` first. Never fetch from the network; never run git.
- Work in steps: (1) survey sources and write a short plan to your scratch notes; (2) write each deliverable file as soon as its section is done (do not hold everything in memory until the end); (3) run `python3 scrape/validate.py <paths you wrote>` and fix every UNRESOLVED citation and parse failure before finishing; (4) report the validator's final line verbatim.
- Citations must be exact post URLs copied from the extracted files (`<!-- url: ... -->` comments) or `structured/forum/posts/*.jsonl` `url` fields. Do not construct URLs from memory.
- Never invent. If a fact is not in the sources, write "not found in sources" and list it in the gaps section.
- Distinguish official (staff) from player and community-wiki claims in every sentence where it matters.
- Keep files under ~60 KB each; split large topics into several files and link them from a README/index.
- If the extraction is being regenerated while you read (a file vanishes), wait a minute and re-read; do not proceed with a missing source.
