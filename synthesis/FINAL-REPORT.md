# Final report: turtlecraft.gg knowledge base

Captured 2026-09-10 (UTC). Turtle WoW's servers closed on 2026-05-15; the website and forums are announced to close on 2026-10-16. Everything below is in this repository; every claim in the synthesis documents links to its source post, page or wiki article, and `python3 scrape/validate.py` confirms all 53,468 citations resolve to archived posts.

## 1. What was captured

| source | what | size |
|---|---|---|
| forum.turtlecraft.gg | 30 English forums plus German: 21,301 of 21,308 topics (4 deleted topics returned 404), 22,449 topic pages, 624 listing pages, 161,896 posts, 16,173 authors, 21 staff accounts (4,127 staff posts) | raw 301 MB gz, extracted 211 MB, structured 349 MB |
| turtlecraft.gg | 34 of 36 feature pages (`/hardcore` timed out, `/bug-tracker` returned 500 on every attempt) | |
| turtle-wow.fandom.com | 5,276 pages via the MediaWiki API (4,419 articles, 1,790 flagged Turtle content; 1,463 NPC, 274 quest, 213 zone, 95 faction infoboxes) | 42 MB |
| not captured | Russian/Chinese/Spanish/Ukrainian forums (by decision, 853 topics); `database.turtlecraft.gg` (DNS gone); `talents.turtlecraft.gg` (origin down, 195 build links cataloged undecoded); all 348 patch-note images (404); forum staff list (login-gated) | |

Derived outputs: 122 synthesis documents (3.2 MB), 47 machine-readable class playbooks, 507 structured 1.18.1 changes, 371 Turtle-vs-vanilla entries, 25 instances with 140 bosses, 122 issues, 552 staff statements, 313 glossary terms, 17,738 cataloged external links, a cross-linked entity index, and a 13-part pseudonymized behavior corpus. Coverage and a 40-page spot-check (40 of 40 consistent) are in `coverage-report.md`.

## 2. The most important 1.18.1 findings

Release timeline (all staff-sourced): preliminary notes 2025-10-03; class changelog 2026-01-23 with revisions 2026-01-26 and 2026-03-19; itemization changelog 2026-02-15; Survival and general changelog 2026-02-17; UI section 2026-03-06; **release 2026-03-20**; hotfix maintenances 03-21, 03-25, 04-01, 04-08, 04-15, 04-22, 04-29; shutdown announced 04-18. Full detail: `1.18.1-master-changelog.md` and `structured/patches/1.18.1-changes.yaml`.

1. **PvP system rework**: honor credited immediately but cut to 10% with a 20k/week cap, ranks via Rank Points, Conquest Points, three-tier PvP sets (ilvl about 71/77/92) replacing the old sets, dynamic per-class PvP dampening, Thorn Gorge 15v15 (later minimum level 31), Sunnyglade Valley disabled. Staff never confirmed whether the world PvP events, Conquest vendors or arena restrictions went live before shutdown.
2. **Rested XP rework** with stated reasoning: kill bonus 100% to 50%, tents capped at 25%, every non-city tavern gives 100%.
3. **New content**: Moonwhisper Coast (50-56), Windhorn Canyon (26-30), Frostmane Hollow, Timbermaw Hold 20-man, Onyxia and Blackwing Lair extensions (new bosses, mechanics never itemized by staff), post-release raid scaling on all raids with thresholds lowered to 8/16, summonable world bosses with a weekly loot lock.
4. **Survival overhaul**: secondary profession, 80+ recipes, Woodcutting, Gardening crops; Tents and Taverns.
5. **Classes**: 164 structured class changes from Jamey's changelog (Hunter Aspect of the Viper and Steady Shot baseline, Paladin Holy Strike rework and Consecration front-loading, Priest heal tables and Lightwell, Rogue poison scaling and Taste for Blood, Shaman Elemental Weapons, Flurry, Earthquake, Warlock curse costs and Searing Pain, Warrior Ravager, Precision Cut, Shield Slam, plus all tier-bonus changes). Several remained bugged through April 2026 (Flurry, Earthen Bulwark, Holy Strike miss handling, Lightwell targeting).
6. **Items**: two new stats, Fortune and Avoidance, with slot limits; Discipline tier sets and Shadow T2.5; 37 BWL and 7 Onyxia item updates; consumable stacking rules (Juju Power, Elixir of Greater Agility vs Concoctions).
7. **Race/class**: Tauren Priest and Dwarf Warlock.

## 3. Claims worth verifying against the local 1.18.1 game data

- Every entry in `structured/patches/1.18.1-changes.yaml` with `status: unclear` (21) and every `before -> after` number in the classes and items systems (274 entries); the YAML gives the field to compare.
- The 195 talent-calculator build links in `structured/talent-links.jsonl`: decode against Talent.dbc tree order to turn the playbooks' opaque links into point lists (every class README names this as its top gap).
- Spell and item names highlighted in patch notes (bold in `extracted/`): map to IDs in the DBCs; no source gives IDs except 182 wiki quest IDs and a handful of NPC IDs in the Karazhan 10 guide.
- Staff mechanics statements in `staff-statements.md`: level-based miss/resist caps apply to players only; rage generation formula rebuilt; Haste, Meditation and Armor Penetration stat semantics; totem and blessing stacking; 4-7% NPC buff for levels 10-57; rank decay floor; same-IP kills grant no honor; melee leeway "broken"; quest log size fixed.
- Boss counts and level ranges that disagree between staff, wiki and the LFT addon (listed per instance in `content/dungeons-and-raids.md`), and the unnamed bosses in Black Morass, Karazhan Crypt and Dragonmaw Retreat.
- Drop-rate statements in `structured/content/drop-rates.yaml` (37 staff-stated with before/after values).

## 4. What is missing or gated

- No item/spell/NPC database: `database.turtlecraft.gg` was already offline; the wiki's vendor inventories are placeholders; only one coordinate pair exists in the whole corpus.
- Talent calculator offline; builds are undecoded links.
- Images (patch-note screenshots, Gemology tables that exist only as screenshots) are gone.
- The class-changes revision history exists only as edits to one post; earlier wording is recoverable only where players quoted it.
- Post-1.18.1 window is short (8 weeks to shutdown): few post-release re-evaluations of specs, no post-release parses.
- Two site pages (`/hardcore`, `/bug-tracker`) never loaded; hardcore rules are covered from forum staff posts instead.
- Staff list page is login-gated; staff were identified per post (21 accounts). One caveat: authority is per author, so a few pre-staff posts by later team members carry the staff flag.
- Non-English forums other than German were skipped.

## 5. Issues to test first on the local server

From `issues-summary.md` (122 entries: 73 open, 25 unclear, 12 fixed, 8 intended, 4 staff-confirmed). Top of the prioritized list:

1. ISS-0012 Balor Island teleport into Blackrock lava (staff-confirmed blocker)
2. ISS-0108 single item/spell that crashed the Nordanaar realm (staff, never named)
3. ISS-0105 client crash on login after Balor Island with a localisation pack
4. ISS-0069 auction house hides random-suffix item names (staff-confirmed)
5. ISS-0026 Holy Strike and Crusader Strike give no benefit on miss/dodge/parry (hotfixed, re-reported)
6. ISS-0027 Holy Strike heals the wrong targets
7. ISS-0042 Enhancement Flurry vs imbue crits and Windfury override
8. ISS-0040 Earthen Bulwark not stacking from Stormstrike/Lightning Strike after the fix
9. ISS-0041 Lightning Strike vanishes from the talent tree after relog
10. ISS-0064 Facetted Crystal Scope enchant text missing after two hotfixes
11. ISS-0008 Cannon Master Willey not dropping Schematic: Enchanted Thorium Shells
12. ISS-0030 Glyph of the Moon gives night elf druids a tauren moonkin model
13. ISS-0017 Talrendis Point gryphon dismount, ISS-0018 Moonglade druid flight masters, ISS-0019 Insom'ni's Chest spawning Leni without the quest
14. Exploits to make sure are absent: ISS-0085 non-honorable kills granting about 4.2 billion honor (likely 32-bit overflow), ISS-0084 Rank 14 reset, ISS-0088 WSG geometry jumps, ISS-0093 Levitate crashing clients in battlegrounds
15. Behaviors staff marked **intended** (8 entries) that the emulator should reproduce rather than "fix"

## 6. Suggested next steps for the bot module

1. Load `structured/classes/spec-role-matrix.yaml` to pick class/spec/role (38 favored, 24 alternative, 27 niche, 17 not-viable rows), then the per-spec YAML for talents, stat weights, rotation rules and AoE thresholds; treat `agreement` and `patch_validity` as confidence.
2. Decode the talent links against the local Talent.dbc and fill `spell_id`/talent IDs (all null today); then re-validate rotations against the local spell data.
3. Feed `behavior/*.jsonl` (about 400 scrubbed examples with pattern labels) as the chat/persona corpus; use the "Patterns for bots" and "What not to do" sections as rules; use `rules-and-hard-limits.md` as hard constraints.
4. Use `behavior/activity-patterns.md` histograms (trough 02-05 UTC, peak 14-16 UTC, Wednesday busiest, EU/NA split) for login schedules.
5. Use `behavior/economy.md` price tables by year and the WTS/WTB templates for trade chat; `popular-addons.md` for what a bot "has installed" (affects how it talks about threat, quests and UI).
6. Use `synthesis/content/instances/*.md` and `structured/content/instances.yaml` for dungeon/raid tactics; note the gaps (no tactics for any custom 5-man or Timbermaw Hold).
7. Use `glossary.md` (313 terms) for vocabulary and `player-archetypes.md` persona sheets to span the skill spectrum.

## 7. Contradictions

`contradictions.md` (index) with per-system files under `contradictions/` and `structured/contradictions.yaml`: 104 entries, 94 of them checkable against local game data. By system: classes and specs 19, dungeons and raids 17, project direction (staff vs staff over time) 13, patch history and attribution (wiki vs forum) 9, loot and drop rates 9, spells and mechanics 8, PvP and honor 8, world/quests/factions 6, client/UI/server 5, professions 4, items 3, terminology 3. Status: unresolved 62, superseded 14, reconciled 6, design dispute 3, website stale 2, wiki vs staff 2, and one-off tags.

Findings worth knowing before trusting any single source: staff "fixed" lines are contradicted by later observation in several cases (Master Strike disorient, Baited Shot, server time, Gadgetzan flight route, Enchanted Thorium Shells, Firemaw void zones); the community wiki and the turtlecraft.gg feature pages are the least reliable sources (stale Scarlet Monastery boss names, a Hateforge Quarry location the patch note contradicts, unbacked Emerald Sanctum scaling, disagreeing level ranges). The single highest-value local check is CON-0082, the per-class PvP dampening table that was announced but never published; the tier-1 list also includes the 3% vs 4% spell-hit constant, Sunder Armor proc flags, the rogue T3.5 proc rate and the Araxxna's Husk item id.

## 8. Process notes

- One crawler at about 1 request per second (raised to 1.5 after a clean first hour), descriptive user agent, robots honored, no login, exponential backoff; the site returned zero 429s and no challenge pages during 23,000 fetches. The only server-side problems were the two broken site pages and 97 phpBB "board temporarily unavailable" pages, which were detected and refetched.
- All synthesis was produced by subagents from the extracted files only (no network), with prompts kept in `scrape/prompts/`, and every deliverable was validated by `scrape/validate.py`; the behavior corpus was additionally scanned for username leaks by `scrape/leakcheck.py`.
- Reproducible: `scrape/manifest.jsonl` records every URL with status and timestamp; `raw/` allows re-extraction without refetching.
