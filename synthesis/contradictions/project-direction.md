# Contradictions — Project direction and policy (staff vs staff, over time)

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

13 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0001 — Cross-faction battlegrounds: refused as impossible, then shipped

- **Side A.** Cross-faction battleground registration is refused on faction-identity grounds and is beyond reach technically; only Blood Ring would ever be cross-faction. — [Torta (staff), 2020-09-20](https://forum.turtlecraft.gg/viewtopic.php?p=7701#p7701), [Torta (staff), 2021-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=12455#p12455)
- **Side B.** Mercenary-mode cross-faction battlegrounds enabled on every PvE realm, auto-sorting players into the faction that needs them; mixed-faction premades still impossible. — [Torta (staff), 2025-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=157078#p157078), [Jamey (staff), 2025-11-05](https://forum.turtlecraft.gg/viewtopic.php?p=158392#p158392)
- **What would settle it.** Check the shipped Faction.dbc client patch and the battleground queue/registration tables on the 1.18.1 server for a mercenary flag.
- **Assessment (`superseded`).** Resolved by time: the 2025 statements supersede the 2020/2021 ones. Both were true when written.

## CON-0002 — PvP rank decay: kept, then de-ranking removed

- **Side A.** Removing rank decay is rejected — it would make an already easier ranking system easier still. — [Torta (staff), 2021-09-22](https://forum.turtlecraft.gg/viewtopic.php?p=12455#p12455)
- **Side B.** Decay changed so rating points decay but never drop a player below the minimum for the current rank. — [Akalix (staff), 2023-10-01](https://forum.turtlecraft.gg/viewtopic.php?p=67818#p67818)
- **What would settle it.** Read the honor/rank decay routine and its floor value in the 1.18.1 server data; compare with the player reports in CON-0078.
- **Assessment (`superseded-but-contested`).** The 2023 position supersedes the 2021 one, but post-1.18.1 players report rank drops to 0, which contradicts the documented floor — see CON-0078.

## CON-0003 — "No new realms" stated twice, two new realms launched

- **Side A.** No new realms are planned and the RPPvE identity will not change (2023-04); no new EU realms unless the existing ones are heavily over capacity (2025-04). — [Akalix (staff), 2023-04-23](https://forum.turtlecraft.gg/viewtopic.php?p=42768#p42768), [Akalix (staff), 2025-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=125151#p125151)
- **Side B.** Tel'Abim (PvP) announced with a full phase plan six months later; Ambershire announced four months later for 17 August 2025. — [Akalix (staff), 2023-10-24](https://forum.turtlecraft.gg/viewtopic.php?p=73214#p73214), [Torta (staff), 2025-08-01](https://forum.turtlecraft.gg/viewtopic.php?p=142471#p142471)
- **What would settle it.** Realm list / realmlist table on the local server.
- **Assessment (`superseded`).** Later statements win; the earlier ones are planning statements, not rules.

## CON-0004 — Localization: English only, then a Chinese realm and a German client

- **Side A.** English is the only supported language; quality control in other languages would delay development by years. — [Torta (staff), 2023-05-15](https://forum.turtlecraft.gg/viewtopic.php?p=45970#p45970)
- **Side B.** A separate Asia-hosted Chinese realm with its own team (2023-07); patch 1.18.0 shipped a full German translation. — [Torta (staff), 2023-07-15](https://forum.turtlecraft.gg/viewtopic.php?p=53567#p53567), [Adhavar (staff), 2025-08-01](https://forum.turtlecraft.gg/viewtopic.php?p=142534#p142534)
- **What would settle it.** Locale directories and locale-specific DBC/string tables in the 1.18.1 client and server.
- **Assessment (`superseded`).** Later statements win.

## CON-0005 — Launcher: not forced, then required

- **Side A.** The team does not plan to force third-party software on players and prefers server-to-client updates. — [Torta (staff), 2020-12-16](https://forum.turtlecraft.gg/viewtopic.php?p=8720#p8720)
- **Side B.** The Faction.dbc client patch for cross-faction battlegrounds is distributed through the launcher and the launcher update is required. — [Torta (staff), 2025-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=158367#p158367), [Torta (staff), 2025-11-04](https://forum.turtlecraft.gg/viewtopic.php?p=158376#p158376)
- **What would settle it.** Compare the client build/patch chain (patch-*.mpq, Faction.dbc) delivered by the launcher against a bare 1.12 client.
- **Assessment (`superseded`).** Later statement wins.

## CON-0006 — Paladin blessings and shaman totems stacking: "not a bug", then changed by poll

- **Side A.** The blessing/totem conflict is not a bug: retail vanilla never had shamans and paladins in the same group, so the buffs were never balanced to stack. — [Jamey (staff), 2021-11-18](https://forum.turtlecraft.gg/viewtopic.php?p=13972#p13972)
- **Side B.** Stacking put to a community poll, bundled with world-buff removal so the power swing would not be one-sided. — [Torta (staff), 2022-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=25235#p25235), [Torta (staff), 2022-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=25243#p25243)
- **What would settle it.** Check the aura/exclusivity group of blessings and totem auras in the 1.18.1 spell data.
- **Assessment (`superseded`).** The 2021 'working as intended' reading no longer describes the server; the poll outcome and the live spell data decide it.

## CON-0007 — Dual spec: "impossible server side", then the Goblin Brainwashing Device

- **Side A.** Dual specialization cannot be done server side. — [Torta (staff), 2019-07-24](https://forum.turtlecraft.gg/viewtopic.php?p=3530#p3530)
- **Side B.** The Goblin Brainwashing Device shipped: two saved talent configurations switched at the normal talent-reset cost. — [Torta (staff), 2021-07-04](https://forum.turtlecraft.gg/viewtopic.php?p=11156#p11156)
- **What would settle it.** Check the Brainwashing Device NPC/spell and the stored talent-configuration table on the local server.
- **Assessment (`superseded`).** Later statement wins.

## CON-0008 — Guild housing: phase-out announced, then "never considered removal"

- **Side A.** New GM-built guild houses are discontinued (staff workload, world overcrowding, unfair advantages). — [Torta (staff), 2023-08-08](https://forum.turtlecraft.gg/viewtopic.php?p=56333#p56333)
- **Side B.** Existing houses stay in the open world; the plan to phase them into Caverns of Time was dropped. — [Torta (staff), 2023-08-09](https://forum.turtlecraft.gg/viewtopic.php?p=56564#p56564)
- **What would settle it.** Look for guild-house GameObjects/teleport entries in the world data.
- **Assessment (`clarified`).** One day apart; the second post narrows the first rather than reversing it. Treat as clarification, not reversal.

## CON-0009 — Tents for hardcore: kept, then reworked in 1.18.1

- **Side A.** There are no plans to remove tents for hardcore players. — [Akalix (staff), 2023-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=40744#p40744)
- **Side B.** 1.18.1 moved the rested bonus to taverns worldwide and left tents only a partial (25%) bonus. — [Torta (staff), 2026-02-17](https://forum.turtlecraft.gg/viewtopic.php?p=168639#p168639)
- **What would settle it.** Rested-XP rules and the tent item/aura cap in 1.18.1 data.
- **Assessment (`superseded`).** Later statement wins; the player-side objection to the change is CON-0084.

## CON-0010 — Turtle WoW 2.0 (Unreal Engine 5): announced, then discontinued

- **Side A.** A second team is replicating the vanilla client in Unreal Engine 5 after about eighteen months of work. — [Torta (staff), 2024-07-03](https://forum.turtlecraft.gg/viewtopic.php?p=98451#p98451)
- **Side B.** The Unreal Engine 5 client is permanently discontinued and the development agreement ended. — [Torta (staff), 2025-12-19](https://forum.turtlecraft.gg/viewtopic.php?p=163158#p163158)
- **What would settle it.** Nothing in the game data settles this; it is a project-history fact.
- **Assessment (`superseded`).** Later statement wins.

## CON-0011 — Cross-faction play scope: realm-limited, then network-wide for battlegrounds

- **Side A.** Cross-faction play stays a Nordanaar feature; Tel'Abim is the non-cross-faction alternative. — [Akalix (staff), 2025-06-26](https://forum.turtlecraft.gg/viewtopic.php?p=137136#p137136)
- **Side B.** Cross-faction battlegrounds enabled on all PvE realms four months later. — [Torta (staff), 2025-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=157078#p157078)
- **What would settle it.** Per-realm configuration flags for cross-faction grouping vs battleground queueing.
- **Assessment (`superseded`).** Later statement wins, but the two are only partly in conflict: world grouping and BG queueing are separate switches.

## CON-0012 — Transmogrification: pulled offline as "heavily broken", then returned as an NPC service

- **Side A.** The transmog system is heavily broken and is taken offline. — [Torta (staff), 2020-10-22](https://forum.turtlecraft.gg/viewtopic.php?p=8233#p8233)
- **Side B.** Transmog returns as a Fashionista NPC service, restricted to that NPC. — [Torta (staff), 2023-08-20](https://forum.turtlecraft.gg/viewtopic.php?p=58121#p58121)
- **What would settle it.** Fashionista NPC and transmog storage tables in 1.18.1.
- **Assessment (`superseded`).** Later statement wins; the scope changed (system-wide → NPC-gated).

## CON-0013 — Loot culture: GDKP banned outright, personal loot refused

- **Side A.** GDKP is banned because it drives real-money trading. — [Akalix (staff), 2024-06-25](https://forum.turtlecraft.gg/viewtopic.php?p=97794#p97794)
- **Side B.** Personal loot is refused as a solution to hard-reserve pug culture. — [Akalix (staff), 2025-07-01](https://forum.turtlecraft.gg/viewtopic.php?p=137770#p137770)
- **What would settle it.** Loot-method options available in the 1.18.1 client/server (is personal loot implemented at all?).
- **Assessment (`apparent-only`).** Not a reversal — the same team treating two loot-culture problems in opposite ways, deliberately. Listed because a reader seeing one post alone will misread the policy.

