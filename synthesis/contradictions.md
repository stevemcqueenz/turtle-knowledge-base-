# Contradictions in the Turtle WoW sources

Where the sources of this knowledge base disagree with each other: 104 entries across 12 systems, each with both sides, dates and sources, what would settle it, and — where later evidence exists — which side it supports.
Full entries live in [`contradictions/`](contradictions/), one file per system, indexed below. Machine-readable copy of every entry: [`../structured/contradictions.yaml`](../structured/contradictions.yaml). Conventions: [`CONVENTIONS.md`](CONVENTIONS.md). All dates UTC.

**How to read an entry.** Each names the two (occasionally three) sides with author, authority and date, says what piece of
evidence would settle it — usually a field in the local 1.18.1 game data — and gives the current best assessment or "unresolved".
Authority follows `CONVENTIONS.md`: **staff** statements about intended behaviour outrank player claims; the community wiki and
the turtlecraft.gg marketing pages are **not** staff sources and are shown below to be stale in several places. Where a later staff
post reverses an earlier one, both were true when written — such entries are marked `superseded`, not "wrong".

**What is not here.** Pure gaps (facts no source states) stay in the per-document "Gaps and unclear points" sections. This file
lists only incompatible claims, including staff fix lines contradicted by later player observation.

## Counts by system

| # | System | Entries | Checkable against local game data | File |
|---|---|---|---|---|
| 1 | Project direction and policy (staff vs staff, over time) | 13 | 10 | [`project-direction.md`](contradictions/project-direction.md) |
| 2 | Patch history, names and attribution (wiki vs forum, announcement vs release) | 9 | 7 | [`patch-history.md`](contradictions/patch-history.md) |
| 3 | Dungeons and raids | 17 | 17 | [`dungeons-and-raids.md`](contradictions/dungeons-and-raids.md) |
| 4 | Loot and drop rates | 9 | 9 | [`loot-and-drop-rates.md`](contradictions/loot-and-drop-rates.md) |
| 5 | Classes and specs (guide vs guide) | 19 | 15 | [`classes-and-specs.md`](contradictions/classes-and-specs.md) |
| 6 | Spells and mechanics (patch note vs observation) | 8 | 8 | [`spells-and-mechanics.md`](contradictions/spells-and-mechanics.md) |
| 7 | PvP and honor | 8 | 8 | [`pvp-and-honor.md`](contradictions/pvp-and-honor.md) |
| 8 | Professions and gathering | 4 | 4 | [`professions-and-gathering.md`](contradictions/professions-and-gathering.md) |
| 9 | Items and itemization | 3 | 3 | [`items-and-itemization.md`](contradictions/items-and-itemization.md) |
| 10 | World, quests and factions | 6 | 6 | [`world-quests-and-factions.md`](contradictions/world-quests-and-factions.md) |
| 11 | Client, UI and server | 5 | 5 | [`client-ui-and-server.md`](contradictions/client-ui-and-server.md) |
| 12 | Terminology (same word, two meanings) | 3 | 2 | [`terminology.md`](contradictions/terminology.md) |
| | **total** | **104** | **94** | |

By status: `unresolved` 62; `superseded` 14; `reconciled` 6; `design-dispute` 3; `website-stale` 2; `wiki-vs-staff` 2; `ambiguous-by-design` 1; `apparent-only` 1; `clarified` 1; `era-dependent` 1; `likely-explained` 1; `naming-collision` 1; `partly-resolved` 1; `player-consensus` 1; `player-relayed` 1; `resolved-by-release` 1; `resolved-later` 1; `staff-explained` 1; `staff-intended` 1; `staff-intended-with-open-edge-case` 1; `superseded-but-contested` 1.

## Method and sources

Assembled from: the "contested", "unclear", "gaps" and "contradictions" sections of every synthesis document
([`1.18.1-master-changelog.md`](1.18.1-master-changelog.md) "What is still unclear" and "Agreement notes",
[`turtle-vs-vanilla-timeline.md`](turtle-vs-vanilla-timeline.md) "Unclear, contradictory, or thinly sourced items",
[`staff-statements.md`](staff-statements.md) "Statements that contradict each other over time",
[`issues-summary.md`](issues-summary.md), [`content/`](content/), [`classes/`](classes/), [`glossary.md`](glossary.md));
the structured data (`structured/issues.yaml` entries with status `unclear`/`intended`, `structured/staff-statements.jsonl`
entries with kind `working-as-intended`, `structured/content/*.yaml`); and a direct search of `structured/forum/posts/*.jsonl`
for disputes — staff fix lines followed by player denial in the same topic, "still broken" / "still not fixed" replies to
changelog posts, and "as intended" statements contradicted later in the same thread. Every forum citation was verified
against the post records (post id, author, date) before it was written.

## Index of entries

### 1. Project direction and policy (staff vs staff, over time)

[`contradictions/project-direction.md`](contradictions/project-direction.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0001](contradictions/project-direction.md#con-0001--cross-faction-battlegrounds-refused-as-impossible-then-shipped) | Cross-faction battlegrounds: refused as impossible, then shipped | `superseded` | yes |
| [CON-0002](contradictions/project-direction.md#con-0002--pvp-rank-decay-kept-then-de-ranking-removed) | PvP rank decay: kept, then de-ranking removed | `superseded-but-contested` | yes |
| [CON-0003](contradictions/project-direction.md#con-0003--no-new-realms-stated-twice-two-new-realms-launched) | "No new realms" stated twice, two new realms launched | `superseded` | no |
| [CON-0004](contradictions/project-direction.md#con-0004--localization-english-only-then-a-chinese-realm-and-a-german-client) | Localization: English only, then a Chinese realm and a German client | `superseded` | yes |
| [CON-0005](contradictions/project-direction.md#con-0005--launcher-not-forced-then-required) | Launcher: not forced, then required | `superseded` | yes |
| [CON-0006](contradictions/project-direction.md#con-0006--paladin-blessings-and-shaman-totems-stacking-not-a-bug-then-changed-by-poll) | Paladin blessings and shaman totems stacking: "not a bug", then changed by poll | `superseded` | yes |
| [CON-0007](contradictions/project-direction.md#con-0007--dual-spec-impossible-server-side-then-the-goblin-brainwashing-device) | Dual spec: "impossible server side", then the Goblin Brainwashing Device | `superseded` | yes |
| [CON-0008](contradictions/project-direction.md#con-0008--guild-housing-phase-out-announced-then-never-considered-removal) | Guild housing: phase-out announced, then "never considered removal" | `clarified` | no |
| [CON-0009](contradictions/project-direction.md#con-0009--tents-for-hardcore-kept-then-reworked-in-1181) | Tents for hardcore: kept, then reworked in 1.18.1 | `superseded` | yes |
| [CON-0010](contradictions/project-direction.md#con-0010--turtle-wow-20-unreal-engine-5-announced-then-discontinued) | Turtle WoW 2.0 (Unreal Engine 5): announced, then discontinued | `superseded` | no |
| [CON-0011](contradictions/project-direction.md#con-0011--cross-faction-play-scope-realm-limited-then-network-wide-for-battlegrounds) | Cross-faction play scope: realm-limited, then network-wide for battlegrounds | `superseded` | yes |
| [CON-0012](contradictions/project-direction.md#con-0012--transmogrification-pulled-offline-as-heavily-broken-then-returned-as-an-npc-service) | Transmogrification: pulled offline as "heavily broken", then returned as an NPC service | `superseded` | yes |
| [CON-0013](contradictions/project-direction.md#con-0013--loot-culture-gdkp-banned-outright-personal-loot-refused) | Loot culture: GDKP banned outright, personal loot refused | `apparent-only` | yes |

### 2. Patch history, names and attribution (wiki vs forum, announcement vs release)

[`contradictions/patch-history.md`](contradictions/patch-history.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0014](contradictions/patch-history.md#con-0014--contents-of-patch-1150-wiki-vs-forum) | Contents of patch 1.15.0: wiki vs forum | `wiki-vs-staff` | yes |
| [CON-0015](contradictions/patch-history.md#con-0015--stormwind-vault-patch-attribution-1150-vs-1160) | Stormwind Vault patch attribution (1.15.0 vs 1.16.0) | `wiki-vs-staff` | yes |
| [CON-0016](contradictions/patch-history.md#con-0016--paladin-31-point-protection-capstone-name) | Paladin 31-point Protection capstone name | `superseded` | yes |
| [CON-0017](contradictions/patch-history.md#con-0017--rogue-capstone-exploit-vulnerability-vs-mark-for-death) | Rogue capstone: "Exploit Vulnerability" vs "Mark for Death" | `unresolved` | yes |
| [CON-0018](contradictions/patch-history.md#con-0018--tower-of-karazhan-realm-first-title) | Tower of Karazhan realm-first title | `superseded` | yes |
| [CON-0019](contradictions/patch-history.md#con-0019--patch-1151-release-date) | Patch 1.15.1 release date | `reconciled` | yes |
| [CON-0020](contradictions/patch-history.md#con-0020--date-of-patch-1172-november-1-2023) | Date of patch 1.17.2 ("November 1 2023") | `reconciled` | no |
| [CON-0021](contradictions/patch-history.md#con-0021--moons-2021-class-draft-vs-the-1161-release-changelog-bloodlust-values) | Moon's 2021 class draft vs the 1.16.1 release changelog (Bloodlust values) | `resolved-by-release` | no |
| [CON-0022](contradictions/patch-history.md#con-0022--shaman-bloodlust-two-incompatible-talent-descriptions-across-patches) | Shaman Bloodlust: two incompatible talent descriptions across patches | `superseded` | yes |

### 3. Dungeons and raids

[`contradictions/dungeons-and-raids.md`](contradictions/dungeons-and-raids.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0023](contradictions/dungeons-and-raids.md#con-0023--emerald-sanctum-raid-size-and-scaling) | Emerald Sanctum raid size and scaling | `superseded` | yes |
| [CON-0024](contradictions/dungeons-and-raids.md#con-0024--timbermaw-hold-raid-entry-requires-timbermaw-reputation) | Timbermaw Hold raid: entry requires Timbermaw reputation? | `unresolved` | yes |
| [CON-0025](contradictions/dungeons-and-raids.md#con-0025--timbermaw-hold-lockout-day-friday-timer-vs-wednesday-reset) | Timbermaw Hold lockout day (Friday timer vs Wednesday reset) | `unresolved` | yes |
| [CON-0026](contradictions/dungeons-and-raids.md#con-0026--lower-karazhan-halls-boss-count-5-vs-6) | Lower Karazhan Halls boss count (5 vs 6) | `reconciled` | yes |
| [CON-0027](contradictions/dungeons-and-raids.md#con-0027--gilneas-city-boss-count-7-vs-8) | Gilneas City boss count (7 vs 8) | `unresolved` | yes |
| [CON-0028](contradictions/dungeons-and-raids.md#con-0028--frostmane-hollow-boss-count-4-vs-5) | Frostmane Hollow boss count (4 vs 5) | `unresolved` | yes |
| [CON-0029](contradictions/dungeons-and-raids.md#con-0029--molten-core-extension-boss-count-3-vs-4) | Molten Core extension boss count (3 vs 4) | `unresolved` | yes |
| [CON-0030](contradictions/dungeons-and-raids.md#con-0030--stormwrought-ruins-boss-count-12-vs-13) | Stormwrought Ruins boss count (12 vs 13) | `reconciled` | yes |
| [CON-0031](contradictions/dungeons-and-raids.md#con-0031--scarlet-monastery-boss-names-on-the-website-vs-the-patch-notes) | Scarlet Monastery: boss names on the website vs the patch notes | `website-stale` | yes |
| [CON-0032](contradictions/dungeons-and-raids.md#con-0032--hateforge-quarry-location-north-east-vs-south-east-burning-steppes) | Hateforge Quarry location (north-east vs south-east Burning Steppes) | `website-stale` | yes |
| [CON-0033](contradictions/dungeons-and-raids.md#con-0033--custom-dungeon-level-ranges-officialwiki-vs-the-in-game-lft-addon) | Custom dungeon level ranges: official/wiki vs the in-game LFT addon | `unresolved` | yes |
| [CON-0034](contradictions/dungeons-and-raids.md#con-0034--karazhan-crypt-graveyard-bug-duskwood-or-redridge) | Karazhan Crypt graveyard bug: Duskwood or Redridge? | `unresolved` | yes |
| [CON-0035](contradictions/dungeons-and-raids.md#con-0035--firemaw-void-zones-after-the-2026-03-21-fix) | Firemaw void zones after the 2026-03-21 fix | `unresolved` | yes |
| [CON-0036](contradictions/dungeons-and-raids.md#con-0036--golemaggs-core-hounds-fixate-intended-or-broken) | Golemagg's Core Hounds: fixate intended or broken? | `unresolved` | yes |
| [CON-0037](contradictions/dungeons-and-raids.md#con-0037--does-lower-karazhan-halls-10-player-scale) | Does Lower Karazhan Halls (10-player) scale? | `unresolved` | yes |
| [CON-0038](contradictions/dungeons-and-raids.md#con-0038--clawlord-howlfangs-stack-mechanic-and-taunt-behaviour) | Clawlord Howlfang's stack mechanic and taunt behaviour | `unresolved` | yes |
| [CON-0039](contradictions/dungeons-and-raids.md#con-0039--dragonmaw-retreat-which-zone-is-it-in) | Dragonmaw Retreat: which zone is it in? | `unresolved` | yes |

### 4. Loot and drop rates

[`contradictions/loot-and-drop-rates.md`](contradictions/loot-and-drop-rates.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0040](contradictions/loot-and-drop-rates.md#con-0040--whip-lasher-herb-drop-rate-after-the-2024-increase) | Whip Lasher herb drop rate after the 2024 increase | `unresolved` | yes |
| [CON-0041](contradictions/loot-and-drop-rates.md#con-0041--black-lotus-drop-rate-differs-per-realm) | Black Lotus drop rate differs per realm? | `unresolved` | yes |
| [CON-0042](contradictions/loot-and-drop-rates.md#con-0042--sticky-boss-loot-tables-same-drop-every-kill) | "Sticky" boss loot tables (same drop every kill) | `unresolved` | yes |
| [CON-0043](contradictions/loot-and-drop-rates.md#con-0043--prospectors-magnifying-lens-does-it-help-mining) | Prospector's Magnifying Lens: does it help Mining? | `unresolved` | yes |
| [CON-0044](contradictions/loot-and-drop-rates.md#con-0044--schematic-enchanted-thorium-shells--fixed-or-still-not-dropping) | Schematic: Enchanted Thorium Shells — fixed or still not dropping? | `unresolved` | yes |
| [CON-0045](contradictions/loot-and-drop-rates.md#con-0045--community-database-drop-rates-vs-player-run-counts) | Community database drop rates vs player run counts | `unresolved` | yes |
| [CON-0046](contradictions/loot-and-drop-rates.md#con-0046--falrins-vendetta--ogre-warbeads-drop-rate) | Falrin's Vendetta / Ogre Warbeads drop rate | `likely-explained` | yes |
| [CON-0047](contradictions/loot-and-drop-rates.md#con-0047--master-loot-and-items-below-the-loot-threshold) | Master Loot and items below the loot threshold | `unresolved` | yes |
| [CON-0048](contradictions/loot-and-drop-rates.md#con-0048--araxxnas-husk-item-id-61816-vs-91777) | Araxxna's Husk item id (61816 vs 91777) | `unresolved` | yes |

### 5. Classes and specs (guide vs guide)

[`contradictions/classes-and-specs.md`](contradictions/classes-and-specs.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0049](contradictions/classes-and-specs.md#con-0049--warrior-arms-vs-fury-for-raid-dps) | Warrior: Arms vs Fury for raid DPS | `unresolved` | no |
| [CON-0050](contradictions/classes-and-specs.md#con-0050--warrior-does-2h-fury-exist-after-class-changes-3) | Warrior: does 2H Fury exist after Class Changes 3? | `unresolved` | yes |
| [CON-0051](contradictions/classes-and-specs.md#con-0051--warrior-is-furyprot-tanking-still-viable-after-class-changes-2) | Warrior: is Fury/Prot tanking still viable after Class Changes 2? | `unresolved` | yes |
| [CON-0052](contradictions/classes-and-specs.md#con-0052--warrior-does-sunder-armor-proc-sword-specialization) | Warrior: does Sunder Armor proc Sword Specialization? | `unresolved` | yes |
| [CON-0053](contradictions/classes-and-specs.md#con-0053--warrior-is-rage-generated-from-absorbed-hits) | Warrior: is rage generated from absorbed hits? | `unresolved` | yes |
| [CON-0054](contradictions/classes-and-specs.md#con-0054--druid-is-balance-raid-viable) | Druid: is Balance raid-viable? | `unresolved` | no |
| [CON-0055](contradictions/classes-and-specs.md#con-0055--druid-intellect-on-feral-tier-sets) | Druid: Intellect on feral tier sets | `design-dispute` | yes |
| [CON-0056](contradictions/classes-and-specs.md#con-0056--mage-is-aoe-leveling-still-viable-on-turtle) | Mage: is AoE leveling still viable on Turtle? | `unresolved` | yes |
| [CON-0057](contradictions/classes-and-specs.md#con-0057--priest-is-smite-discipline-damage-raid-viable) | Priest: is Smite (Discipline damage) raid-viable? | `unresolved` | no |
| [CON-0058](contradictions/classes-and-specs.md#con-0058--priest-spell-hit--penetration-target-3-vs-4) | Priest: spell hit / penetration target (3% vs 4%) | `unresolved` | yes |
| [CON-0059](contradictions/classes-and-specs.md#con-0059--priest-is-the-t35-healer-set-an-upgrade) | Priest: is the T3.5 healer set an upgrade? | `unresolved` | yes |
| [CON-0060](contradictions/classes-and-specs.md#con-0060--rogue-combat-vs-assassination-as-the-raid-spec) | Rogue: Combat vs Assassination as the raid spec | `unresolved` | no |
| [CON-0061](contradictions/classes-and-specs.md#con-0061--rogue-are-rogues-overpowered-in-pvp-after-1180) | Rogue: are rogues overpowered in PvP after 1.18.0? | `unresolved` | yes |
| [CON-0062](contradictions/classes-and-specs.md#con-0062--hunter-is-beast-mastery-good-after-class-changes-3) | Hunter: is Beast Mastery good after Class Changes 3? | `unresolved` | yes |
| [CON-0063](contradictions/classes-and-specs.md#con-0063--hunter-pets-claw-vs-bite) | Hunter pets: Claw vs Bite | `reconciled` | yes |
| [CON-0064](contradictions/classes-and-specs.md#con-0064--warlock-is-dark-harvest-a-dps-gain) | Warlock: is Dark Harvest a DPS gain? | `era-dependent` | yes |
| [CON-0065](contradictions/classes-and-specs.md#con-0065--warlock-did-class-changes-2-nerf-smruin) | Warlock: did Class Changes 2 nerf SM/Ruin? | `resolved-later` | yes |
| [CON-0066](contradictions/classes-and-specs.md#con-0066--shaman-windfury-totem-vs-grace-of-air-for-a-bear-tanks-group) | Shaman: Windfury Totem vs Grace of Air for a bear tank's group | `unresolved` | yes |
| [CON-0067](contradictions/classes-and-specs.md#con-0067--paladin-does-holy-might-apply-at-the-raid-buff-cap) | Paladin: does Holy Might apply at the raid buff cap? | `unresolved` | yes |

### 6. Spells and mechanics (patch note vs observation)

[`contradictions/spells-and-mechanics.md`](contradictions/spells-and-mechanics.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0068](contradictions/spells-and-mechanics.md#con-0068--master-strike-mace-disorient-does-damage-break-it) | Master Strike (Mace) disorient: does damage break it? | `unresolved` | yes |
| [CON-0069](contradictions/spells-and-mechanics.md#con-0069--baited-shot-and-coordinated-assault-fixed-twice-still-reported-broken) | Baited Shot and Coordinated Assault: fixed twice, still reported broken | `unresolved` | yes |
| [CON-0070](contradictions/spells-and-mechanics.md#con-0070--paladin-talent-ironclad-missing-heal-or-missing-display) | Paladin talent Ironclad: missing heal or missing display? | `unresolved` | yes |
| [CON-0071](contradictions/spells-and-mechanics.md#con-0071--warrior-one-handed-weapon-specialization-abilities-or-auto-attacks-only) | Warrior One-Handed Weapon Specialization: abilities or auto-attacks only? | `unresolved` | yes |
| [CON-0072](contradictions/spells-and-mechanics.md#con-0072--thunderfury-does-the-chain-hit-damage-secondary-targets) | Thunderfury: does the chain hit damage secondary targets? | `player-consensus` | yes |
| [CON-0073](contradictions/spells-and-mechanics.md#con-0073--holy-strike-healing-behaviour-after-the-march-2026-fixes) | Holy Strike healing behaviour after the March 2026 fixes | `unresolved` | yes |
| [CON-0074](contradictions/spells-and-mechanics.md#con-0074--shaman-tier-1-set-bonus-with-chain-heal-intended-or-broken) | Shaman Tier 1 set bonus with Chain Heal: intended or broken? | `staff-intended` | yes |
| [CON-0075](contradictions/spells-and-mechanics.md#con-0075--queued-next-melee-abilities-cancelled-by-rage-loss) | Queued next-melee abilities cancelled by rage loss | `staff-intended-with-open-edge-case` | yes |

### 7. PvP and honor

[`contradictions/pvp-and-honor.md`](contradictions/pvp-and-honor.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0076](contradictions/pvp-and-honor.md#con-0076--honor-cut-to-10-purely-a-visual-change-vs-player-compensation-reports) | Honor cut to 10%: "purely a visual change" vs player compensation reports | `unresolved` | yes |
| [CON-0077](contradictions/pvp-and-honor.md#con-0077--world-pvp-events-and-pvp-vendors-did-they-go-live) | World PvP events and PvP vendors: did they go live? | `unresolved` | yes |
| [CON-0078](contradictions/pvp-and-honor.md#con-0078--rank-decay-cannot-drop-a-rank-vs-rank-14-players-dropped-to-rank-0) | Rank decay cannot drop a rank vs Rank 14 players dropped to rank 0 | `unresolved` | yes |
| [CON-0079](contradictions/pvp-and-honor.md#con-0079--weekly-honor-decay-documented-decay-vs-the-bar-shrinks-the-more-i-play) | Weekly honor decay: documented decay vs "the bar shrinks the more I play" | `unresolved` | yes |
| [CON-0080](contradictions/pvp-and-honor.md#con-0080--dishonorable-kills-removed-re-enabled-still-disabled) | Dishonorable Kills: removed, re-enabled, still disabled | `unresolved` | yes |
| [CON-0081](contradictions/pvp-and-honor.md#con-0081--are-battleground-terrain-exploits-fixed-or-tolerated) | Are battleground terrain exploits fixed or tolerated? | `unresolved` | yes |
| [CON-0082](contradictions/pvp-and-honor.md#con-0082--pvp-dampening-announced-per-classspec-but-never-published) | PvP dampening: announced per class/spec but never published | `unresolved` | yes |
| [CON-0083](contradictions/pvp-and-honor.md#con-0083--new-pvp-sets-power-level) | New PvP sets: power level | `design-dispute` | yes |

### 8. Professions and gathering

[`contradictions/professions-and-gathering.md`](contradictions/professions-and-gathering.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0084](contradictions/professions-and-gathering.md#con-0084--tents--taverns-staff-rationale-vs-player-it-is-a-nerf) | Tents & Taverns: staff rationale vs player "it is a nerf" | `design-dispute` | yes |
| [CON-0085](contradictions/professions-and-gathering.md#con-0085--gardening-three-new-crops-or-four-new-seeds) | Gardening: three new crops or four new seeds? | `unresolved` | yes |
| [CON-0086](contradictions/professions-and-gathering.md#con-0086--jewelcrafting-trainers-player-guide-list-vs-the-official-page) | Jewelcrafting trainers: player guide list vs the official page | `unresolved` | yes |
| [CON-0087](contradictions/professions-and-gathering.md#con-0087--survival-profession-shipped-as-described-vs-player-reported-gaps) | Survival profession: shipped as described vs player-reported gaps | `unresolved` | yes |

### 9. Items and itemization

[`contradictions/items-and-itemization.md`](contradictions/items-and-itemization.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0088](contradictions/items-and-itemization.md#con-0088--rogue-tier-35-five-piece-proc-rate-15-measured-vs-20-stated) | Rogue Tier 3.5 five-piece proc rate (15% measured vs 20% stated) | `unresolved` | yes |
| [CON-0089](contradictions/items-and-itemization.md#con-0089--lionheart-helmet-in-the-1180-itemization-post-is-not-the-warrior-helm) | "Lionheart Helmet" in the 1.18.0 itemization post is not the warrior helm | `naming-collision` | yes |
| [CON-0090](contradictions/items-and-itemization.md#con-0090--steel-belt-buckle-enchant-not-shown-on-the-item) | Steel belt buckle enchant not shown on the item | `unresolved` | yes |

### 10. World, quests and factions

[`contradictions/world-quests-and-factions.md`](contradictions/world-quests-and-factions.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0091](contradictions/world-quests-and-factions.md#con-0091--durotar-labor-union-rocket-cars-race-locked-or-open-at-exalted) | Durotar Labor Union rocket cars: race-locked or open at Exalted? | `unresolved` | yes |
| [CON-0092](contradictions/world-quests-and-factions.md#con-0092--dalaran-reputation-repeatable-turn-ins-exist) | Dalaran reputation: repeatable turn-ins exist? | `unresolved` | yes |
| [CON-0093](contradictions/world-quests-and-factions.md#con-0093--custom-zone-level-ranges-official-site-vs-wiki) | Custom zone level ranges: official site vs wiki | `unresolved` | yes |
| [CON-0094](contradictions/world-quests-and-factions.md#con-0094--almaudraks-heart-quest-drop-bug-or-not-reproducible) | Almaudrak's Heart quest drop: bug or not reproducible? | `unresolved` | yes |
| [CON-0095](contradictions/world-quests-and-factions.md#con-0095--ambershire-content-reachable-ahead-of-its-phase-then-rolled-back) | Ambershire: content reachable ahead of its phase, then rolled back | `unresolved` | yes |
| [CON-0096](contradictions/world-quests-and-factions.md#con-0096--ronaethalas-shipped-zone-with-an-undocumented-level-range) | Ronae'Thalas: shipped zone with an undocumented level range | `unresolved` | yes |

### 11. Client, UI and server

[`contradictions/client-ui-and-server.md`](contradictions/client-ui-and-server.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0097](contradictions/client-ui-and-server.md#con-0097--server-time-fixed-on-2025-12-24-or-still-wrong) | Server time: fixed on 2025-12-24 or still wrong? | `unresolved` | yes |
| [CON-0098](contradictions/client-ui-and-server.md#con-0098--in-game-clock-running-at-double-speed-intended-or-a-bug) | In-game clock running at double speed: intended or a bug? | `player-relayed` | yes |
| [CON-0099](contradictions/client-ui-and-server.md#con-0099--gadgetzan--slickwick-oil-rig-flight-path-fixed-or-still-broken) | Gadgetzan / Slickwick Oil Rig flight path: fixed or still broken? | `partly-resolved` | yes |
| [CON-0100](contradictions/client-ui-and-server.md#con-0100--missing-or-deprecated-talents-and-spells-server-or-client) | Missing or "DEPRECATED" talents and spells: server or client? | `staff-explained` | yes |
| [CON-0101](contradictions/client-ui-and-server.md#con-0101--troll-priest-shadowguard-visible-through-walls) | Troll priest Shadowguard visible through walls | `unresolved` | yes |

### 12. Terminology (same word, two meanings)

[`contradictions/terminology.md`](contradictions/terminology.md)

| id | topic | status | local check |
|---|---|---|---|
| [CON-0102](contradictions/terminology.md#con-0102--cp-means-combo-points-or-contribution-points) | "CP" means combo points or contribution points | `ambiguous-by-design` | no |
| [CON-0103](contradictions/terminology.md#con-0103--t25--t35--official-tier-names-or-community-shorthand) | "T2.5" / "T3.5" — official tier names or community shorthand? | `unresolved` | yes |
| [CON-0104](contradictions/terminology.md#con-0104--hardcore-mode-before-and-after-2021) | "Hardcore mode" before and after 2021 | `reconciled` | yes |

## Most worth checking against the local 1.18.1 game data

Ordered by how cheaply a local server or client dump answers the question, and by how much written-down advice depends on it.

**Tier 1 — one field or one table settles it, and the answer changes documentation already written:**

1. **CON-0082** — the per-class/per-spec **PvP dampening table** — announced, never published, and referenced by dozens of player claims. Dump it and half of the 1.18.1 PvP disputes become checkable.
1. **CON-0058** — base **spell miss chance** against a level-63 target (the 3% vs 4% hit argument).
1. **CON-0068** — interrupt flags on the **Master Strike (Mace) disorient** — two players report opposite behaviour after the same hotfix.
1. **CON-0069** — proc chain for **Coordinated Assault → Baited Shot**: does the pet attack carry the crit flag? Two staff fix lines, player denial after both.
1. **CON-0052** — proc flags on **Sunder Armor** vs the Sword Specialization talent.
1. **CON-0088** — proc chance on the **rogue T3.5 five-piece** bonus (15% measured vs 20% stated).
1. **CON-0048** — **Araxxna's Husk** — which of item 61816 / 91777 exists.
1. **CON-0044** — **Schematic: Enchanted Thorium Shells** in Cannon Master Willey's loot table.
1. **CON-0016 / CON-0017** — the paladin Protection and rogue capstone **talent names** in the shipped talent data.
1. **CON-0018** — **CharTitles.dbc** for the Tower of Karazhan realm-first title.

**Tier 2 — a short scripted comparison over the database:**

1. **CON-0040 / CON-0045 / CON-0046** — the **drop-rate block**: Whip Lasher herbs, the Dungeon Set 1 / UBRS / Stratholme figures, and the Ogre Warbead split. One dump of the loot templates answers all of them and tells you whether `database.turtlecraft.gg` was accurate.
1. **CON-0041** — **Black Lotus** chance: is it one global template or per-realm configuration?
1. **CON-0033 / CON-0093** — **level ranges** for the custom dungeons and zones — compare AreaTable and creature levels against the site, the wiki and the LFT table.
1. **CON-0026 to CON-0030** — **boss counts** for Lower Karazhan Halls, Gilneas City, Frostmane Hollow, the Molten Core extension and Stormwrought Ruins: count boss-flagged creatures per map and check for paired encounters.
1. **CON-0031** — **Scarlet Monastery** creature names — do "The Nameless Experiment" and "Master Smith Johana" exist at all?
1. **CON-0023 / CON-0037** — the **raid-scaling table**: thresholds per map, including whether the 10-player Lower Karazhan Halls is in it.
1. **CON-0085** — count the **gardening seed items** added in 1.18.1 (three or four).
1. **CON-0014 / CON-0015** — first appearance of the **Gnome Hunter / Orc Mage race-class rows and the Stormwind Vault map** by client build.
1. **CON-0032 / CON-0039** — **instance entrance coordinates**: Hateforge Quarry (NE vs SE Burning Steppes) and Dragonmaw Retreat (Wetlands vs Grim Reaches).

**Tier 3 — needs a running server and a test character, but is decisive:**

1. **CON-0078 / CON-0079** — run a **weekly honor flush** with a rank-14 test character: does decay clamp to the rank minimum, and how are legacy ranks migrated?
1. **CON-0035** — **Firemaw void zones**: spawn placement and visibility after the 2026-03-21 fix.
1. **CON-0036 / CON-0038** — **Golemagg's Core Hounds** fixate and **Clawlord Howlfang's** taunt behaviour.
1. **CON-0067** — aura-slot cap: are buffs past the visible **32-slot cap** still active (Holy Might)?
1. **CON-0071** — **One-Handed Weapon Specialization**: abilities or auto-attacks only.
1. **CON-0073** — **Holy Strike** heal target selection (party vs closest four).
1. **CON-0024** — **Timbermaw Hold** entry: is there a reputation gate on the instance portal?
1. **CON-0097 / CON-0098** — **server time**: the game-time multiplier, the Kalimdor offset and whether the clock diverges per player.
1. **CON-0100** — reproduce the **missing/DEPRECATED talents** report on a clean client with no custom `/data`.

**Not answerable from game data at all** (judgements about play, not facts about the server): CON-0003, CON-0010, CON-0049, CON-0054, CON-0057, CON-0060. Present both sides; do not resolve them.

## Gaps

- **The official bug tracker is not in this corpus.** Staff answer most bug reports by redirecting to it, so for many entries here the real resolution exists outside the extraction. Tracker ids quoted by players (e.g. 10302 in CON-0101) cannot be read.
- **No combat logs or parses.** Every class-standing dispute (CON-0049, CON-0054, CON-0060, CON-0062) rests on logs hosted elsewhere; nothing in this repository can arbitrate them.
- **`database.turtlecraft.gg` is not extracted**, yet it is the source behind most drop-rate and item-id disputes (CON-0043, CON-0045, CON-0046, CON-0048, CON-0085). It was also offline for a stretch in early 2026.
- **Pre-revision values of edited posts are lost.** The 1.18.1 class changelog is one edited post with three revision dates, so entries introduced in a revision have no visible "before" value — several apparent contradictions between guides and the changelog may simply be readers quoting different revisions of the same post.
- **Turtle-side intent is often unstated.** Where staff say "as intended" without stating the intended value (Holy Strike target count, PvP dampening), an emulator cannot be validated against intent, only against observed behaviour.
- **Website pages carry no revision dates** in this extraction, so a website-vs-forum conflict (CON-0031, CON-0032) can be dated only from the forum side.
- Not found in sources: any staff statement resolving CON-0024, CON-0025, CON-0036, CON-0038, CON-0041, CON-0042, CON-0058, CON-0067, CON-0068, CON-0069, CON-0071, CON-0091 or CON-0092.

