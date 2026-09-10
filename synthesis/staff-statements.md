# What the Turtle WoW team said: staff statements on intended behavior

A knowledge base of statements by Turtle WoW staff (forum rank "Turtle WoW Team", `"authority": "staff"` in the archive) about **how the server is meant to work and why**. It is built only from the forum archive in this repository: 4,127 staff posts inside 161,896 archived posts in `structured/forum/posts/*.jsonl`. Nothing was fetched from the network.

- **552 statements**, one per line in `structured/staff-statements.jsonl` (schema: `post_id, url, author, date, era, forum, topic_title, system, subsystem, kind, summary, quote`).
- Every quote in this knowledge base was checked programmatically against the `content_md` of the cited post: all 552 pass verbatim (an ` ... ` inside a quote joins fragments of the **same** post, in source order).
- Every link is the `url` field of the cited post, copied from the archive, never constructed.
- Conventions: `synthesis/CONVENTIONS.md`.

## Per-system files

| System | Statements | File |
|---|---:|---|
| Classes and talents | 59 | [staff-statements/classes-and-talents.md](staff-statements/classes-and-talents.md) |
| Spells and mechanics | 26 | [staff-statements/spells-and-mechanics.md](staff-statements/spells-and-mechanics.md) |
| Items and itemization | 49 | [staff-statements/items-and-itemization.md](staff-statements/items-and-itemization.md) |
| Quests and zones | 19 | [staff-statements/quests-and-zones.md](staff-statements/quests-and-zones.md) |
| Dungeons and raids | 42 | [staff-statements/dungeons-and-raids.md](staff-statements/dungeons-and-raids.md) |
| Professions | 12 | [staff-statements/professions.md](staff-statements/professions.md) |
| PvP and honor | 60 | [staff-statements/pvp-and-honor.md](staff-statements/pvp-and-honor.md) |
| Hardcore and challenges | 59 | [staff-statements/hardcore-and-challenges.md](staff-statements/hardcore-and-challenges.md) |
| Economy, auction house, gold, donations | 36 | [staff-statements/economy-and-donations.md](staff-statements/economy-and-donations.md) |
| Rules, moderation, bans | 47 | [staff-statements/rules-and-moderation.md](staff-statements/rules-and-moderation.md) |
| Client, launcher, addons, UI | 50 | [staff-statements/client-and-ui.md](staff-statements/client-and-ui.md) |
| Server infrastructure, realms | 38 | [staff-statements/server-and-realms.md](staff-statements/server-and-realms.md) |
| Roadmap and project decisions | 55 | [staff-statements/roadmap-and-project-decisions.md](staff-statements/roadmap-and-project-decisions.md) |
| **Total** | **552** | |

`Classes and talents` is grouped per class (Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, Warrior, then cross-class/race/talent-system statements). The other files are ordered by date.

## Counts by kind and era

| Kind | Count | | Era | Count |
|---|---:|---|---|---:|
| policy | 163 | | pre-1.18.1 | 511 |
| reasoning | 137 | | 1.18.1-announced-pre-release | 36 |
| intent | 123 | | post-1.18.1 | 5 |
| working-as-intended | 60 | |  |  |
| bug-confirmed | 34 | |  |  |
| roadmap | 29 | |  |  |
| other | 6 | |  |  |

`intent` = a statement of how something is meant to work; `reasoning` = why a decision was made; `bug-confirmed` = staff confirm something is broken; `working-as-intended` = staff refuse a bug report; `policy` = a rule for players; `roadmap` = a plan or commitment about future work.

## How to read an entry

Each entry gives a short verbatim quote, a one-line "Clarifies" summary of what it settles, and the citation with author, date, kind and era. Where a later staff post changed the position, the entry carries a **Superseded by** line pointing at that post.

## Caveats about the source data

- **`authority` is assigned per author, not per post.** Some contributors (for example Dragunovi and Gheor) were players before joining the team, so a handful of their early posts carry the staff flag while not being staff policy at the time. Where a quote reads like a player opinion rather than a team position, the date and the topic in the citation are the check.
- **Changelog posts** are attributed to the staff member who posted them (usually Torta, Jamey or Akalix); they state team decisions rather than personal ones.
- Staff statements outrank player and community-wiki claims about intended behavior, but a staff statement is still **single source** unless another staff post repeats it. Positions that were later reversed are listed below and flagged **contested** at the entry.
- The archive is a forum archive. Decisions communicated only on Discord, on the website or in-game are not in it.

## Statements that contradict each other over time

Eleven positions were reversed by later staff posts. Each pair is **contested** across time: the earlier statement was true when written and is no longer the server's position.

### Cross-faction battlegrounds: "never" to shipped

- Earlier: [Torta (staff), 2020-09-20](https://forum.turtlecraft.gg/viewtopic.php?p=7701#p7701), [Torta (staff), 2021-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=12455#p12455)
- Later: [Torta (staff), 2025-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=157078#p157078), [Jamey (staff), 2025-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=158392#p158392)

In 2020 cross-faction battleground registration was refused on faction-identity grounds and called beyond reach technically; in 2021 staff said only Blood Ring would ever be cross-faction. In October 2025 mercenary-mode cross-faction battlegrounds were enabled on every PvE realm, with auto-sorting into the faction that needs players.

### PvP rank decay: kept, then de-ranking removed

- Earlier: [Torta (staff), 2021-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=12455#p12455)
- Later: [Akalix (staff), 2023-10-01](https://forum.turtlecraft.gg/viewtopic.php?p=67818#p67818)

In 2021 removing rank decay was rejected as making an already-easier ranking system even easier. In October 2023 decay was changed so RP decays but never drops a player below the minimum for the current rank.

### One realm, one identity: "no new realms" twice, two new realms

- Earlier: [Akalix (staff), 2023-04-23](https://forum.turtlecraft.gg/viewtopic.php?p=42768#p42768), [Akalix (staff), 2025-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=125151#p125151)
- Later: [Akalix (staff), 2023-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=73214#p73214), [Torta (staff), 2025-08-01](https://forum.turtlecraft.gg/viewtopic.php?p=142471#p142471)

April 2023: no new realms are planned and the RPPvE identity will not change — Tel'Abim PvP was announced six months later with a full phase plan. April 2025: no new EU realms unless the existing ones are heavily over capacity — Ambershire was announced four months later for 17 August 2025.

### Localization: English only, then a Chinese realm and a German client

- Earlier: [Torta (staff), 2023-05-15](https://forum.turtlecraft.gg/viewtopic.php?p=45970#p45970)
- Later: [Torta (staff), 2023-07-15](https://forum.turtlecraft.gg/viewtopic.php?p=53567#p53567), [Adhavar (staff), 2025-08-01](https://forum.turtlecraft.gg/viewtopic.php?p=142534#p142534)

May 2023: English is the only supported language because quality control in other languages would delay development by years. July 2023 brought a separate Asia-hosted Chinese realm with its own team; patch 1.18.0 (August 2025) shipped a full German translation, later redone because vanilla's own German localization was inconsistent.

### Launcher: not forced, then required

- Earlier: [Torta (staff), 2020-12-16](https://forum.turtlecraft.gg/viewtopic.php?p=8720#p8720)
- Later: [Torta (staff), 2025-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=158367#p158367), [Torta (staff), 2025-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=158376#p158376)

December 2020: the team did not plan to force third-party software on players and preferred server-to-client updates. In November 2025 the small Faction.dbc client patch for cross-faction battlegrounds was distributed through the launcher and staff stated the launcher update is required.

### Blessings and totems: working as intended, then changed by poll

- Earlier: [Jamey (staff), 2021-11-18](https://forum.turtlecraft.gg/viewtopic.php?p=13972#p13972)
- Later: [Torta (staff), 2022-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=25235#p25235), [Torta (staff), 2022-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=25243#p25243)

November 2021: the blessing/totem conflict is not a bug because retail vanilla never had shamans and paladins in the same group, so the buffs were never balanced to stack. September 2022 staff put stacking to a community poll, bundled with world-buff removal so the power swing would not be one-sided.

### Dual spec: "impossible server side", then a device that does it

- Earlier: [Torta (staff), 2019-07-24](https://forum.turtlecraft.gg/viewtopic.php?p=3530#p3530)
- Later: [Torta (staff), 2021-07-04](https://forum.turtlecraft.gg/viewtopic.php?p=11156#p11156)

July 2019: dual specialization cannot be done server side. July 2021 the Goblin Brainwashing Device shipped: two saved talent configurations, switched at the normal talent-reset cost.

### Guild housing: phase-out, then "we never considered removal"

- Earlier: [Torta (staff), 2023-08-08](https://forum.turtlecraft.gg/viewtopic.php?p=56333#p56333)
- Later: [Torta (staff), 2023-08-09](https://forum.turtlecraft.gg/viewtopic.php?p=56564#p56564)

On 8 August 2023 new GM-built guild houses were discontinued (staff workload, world overcrowding, unfair advantages). A day later staff stated that existing houses stay in the open world and that the plan to phase them into Caverns of Time was dropped.

### Tents in hardcore: kept, then reworked in 1.18.1

- Earlier: [Akalix (staff), 2023-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=40744#p40744)
- Later: [Torta (staff), 2026-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=168639#p168639)

April 2023: there are no plans to remove tents for hardcore players. Patch 1.18.1 (February 2026) moved the rested bonus to taverns worldwide and left tents only a partial bonus.

### Turtle WoW 2.0: announced, then discontinued

- Earlier: [Torta (staff), 2024-07-03](https://forum.turtlecraft.gg/viewtopic.php?p=98451#p98451)
- Later: [Torta (staff), 2025-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=163158#p163158)

July 2024 announced a second team replicating the vanilla client in Unreal Engine 5 after about eighteen months of work. On 19 December 2025 the Unreal Engine 5 client was permanently discontinued and the development agreement ended.

### Cross-faction play scope: realm-limited, then network-wide for battlegrounds

- Earlier: [Akalix (staff), 2025-06-26](https://forum.turtlecraft.gg/viewtopic.php?p=137136#p137136)
- Later: [Torta (staff), 2025-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=157078#p157078)

June 2025: cross-faction play stays a Nordanaar feature and Tel'Abim is the non-cross-faction alternative. Four months later cross-faction battlegrounds were enabled on all PvE realms, though mixed-faction premades remain impossible.

Two more pairs are narrower but worth noting for anyone reading a single statement in isolation: the transmog system was pulled offline as "heavily broken" in October 2020 ([Torta (staff), 2020-10-22](https://forum.turtlecraft.gg/viewtopic.php?p=8233#p8233)) and returned later as a Fashionista NPC service restricted to that NPC ([Torta (staff), 2023-08-20](https://forum.turtlecraft.gg/viewtopic.php?p=58121#p58121)); and personal loot was refused as a solution to hard-reserve pug culture in July 2025 ([Akalix (staff), 2025-07-01](https://forum.turtlecraft.gg/viewtopic.php?p=137770#p137770)) while GDKP itself had been banned outright in June 2024 because it drove RMT ([Akalix (staff), 2024-06-25](https://forum.turtlecraft.gg/viewtopic.php?p=97794#p97794)) — the same team treating two loot-culture problems in opposite ways, deliberately.

## Gaps

Systems and questions where the forum archive contains **no staff statement**, checked by pattern search across all 4,127 staff posts. For an emulator these are the places where Turtle behavior cannot be derived from staff sources and has to come from observation or from vanilla baseline (not from turtlecraft.gg).

- **Spell batching / the vanilla batch window.** No staff post uses the term at all; whether Turtle keeps, shortens or removes batching is not found in sources.
- **Honor-per-kill and contribution-point math.** Staff discuss honor policy, decay, brackets and exploits at length, but the actual per-kill honor formula, the CP-to-RP conversion and bracket sizes are not found in sources; the only formula-adjacent posts are outage notices about an honor miscalculation [Vanth (staff), 2023-06-21](https://forum.turtlecraft.gg/viewtopic.php?p=50812#p50812).
- **Quest XP values and the quest XP formula.** Changelogs say XP for particular quests was "corrected" or "lowered" but never state the rule; not found in sources.
- **Creature stat, damage and armor curves.** No staff post gives creature stat formulas. The closest is the level-scaled NPC buff accompanying Class Changes 2 ([Torta (staff), 2025-02-11](https://forum.turtlecraft.gg/viewtopic.php?p=119660#p119660)), which gives a percentage, not a curve.
- **Threat coefficients.** Threat is discussed per talent and per ability in the Class Changes 2 posts, but no global threat table or per-school threat coefficient is stated.
- **Spell power coefficients as a system.** Individual coefficient changes appear in class changelogs; the underlying coefficient rules (cast-time based, DoT/HoT split, downranking) are not found in sources.
- **Resistance mechanics.** Only one staff line touches partial resists at all ([Torta (staff), 2025-02-25](https://forum.turtlecraft.gg/viewtopic.php?p=120933#p120933)); the resistance-to-mitigation table, binary resists and resistance caps are not found in sources.
- **Dodge/parry/block, defense skill and the attack table.** Class-level numbers appear in the 1.17.2 class posts, but the combat table itself, glancing blows, crushing blows and the level-difference miss chain are not stated. The one relevant global statement is that the level-based miss-chance and spell-resist caps apply to players only ([Torta (staff), 2023-05-17](https://forum.turtlecraft.gg/viewtopic.php?p=46277#p46277)).
- **Diminishing returns as a system.** Only trap DR is stated explicitly ([Akalix (staff), 2024-09-04](https://forum.turtlecraft.gg/viewtopic.php?p=100665#p100665)); a general PvP crowd-control DR ruleset is not found in sources.
- **Server tick rate, update intervals and grid/visibility distances.** Staff talk about performance, crashes and "core stability fixes" but never publish tick rate or visibility ranges.
- **Instance reset and raid lockout rules.** Only an exploit fix is stated ([Torta (staff), 2023-12-27](https://forum.turtlecraft.gg/viewtopic.php?p=82893#p82893)); the lockout schedule itself is not found in sources.
- **Loot-roll internals.** Group loot rules, the master-loot implementation and per-item roll mechanics are not described; staff statements on loot are about drop chances and loot policy (GDKP, personal loot) instead.
- **Profession design beyond a few systems.** Only Survival, herbalism/Black Lotus, epic BoP crafts, Jewelcrafting plans and a handful of recipe decisions have staff statements (12 in total). Enchanting, tailoring, engineering, alchemy and blacksmithing appear in changelogs but almost never with stated intent or reasoning.
- **Post-1.18.1 and shutdown-period detail.** Only 5 statements fall after the 1.18.1 release (2026-03-20), and the archive contains no staff post explaining the reasoning behind the 2026-05-15 shutdown beyond the roadmap statements collected in [roadmap-and-project-decisions.md](staff-statements/roadmap-and-project-decisions.md).

Within the thirteen systems above, none is empty: every system named in the task has at least 12 staff statements.
