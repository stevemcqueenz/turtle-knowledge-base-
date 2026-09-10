# Contradictions — Loot and drop rates

Part of [`../contradictions.md`](../contradictions.md); machine-readable copy in [`../../structured/contradictions.yaml`](../../structured/contradictions.yaml). Conventions: [`../CONVENTIONS.md`](../CONVENTIONS.md). Dates UTC.

9 entries. Each gives both sides with author, authority and date, what evidence would settle it, and the current best assessment.

## CON-0040 — Whip Lasher herb drop rate after the 2024 increase

- **Side A.** Whip Lasher herb drops raised from ~1.7% to 4%, and Mountain Silversage / Plaguebloom / Icecap added at 4%, to curb gold inflation. — [Akalix (staff), 2024-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=90746#p90746)
- **Side B.** The next day three players report zero drops: "no drop for 400 lashers" and "10 runs of DM lashers... not a single Icecap, Plaguebloom, or Silversage". — [Shoc (player), 2024-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=90885#p90885), [Drakae (player), 2024-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=90922#p90922), [Jc473 (player), 2024-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=90965#p90965)
- **What would settle it.** Read the Whip Lasher creature loot template on the 1.18.1 server: is the 4% per-herb or shared, and did the change ship at all?
- **Assessment (`unresolved`).** Unresolved; no staff reply closes the loop. The most checkable drop-rate conflict in the corpus.

## CON-0041 — Black Lotus drop rate differs per realm?

- **Side A.** "The drop rate of black lotus on ambersire is insanely high. As where on nordanaar it is 4% ... Ambershire is well over 30%". — [Birtha (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173493#p173493)
- **Side B.** "Give me 100 black lotuses then if you're getting 1 every 3 plants. I don't get 1 per day. In 40-50 gathers". — [Durin (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173515#p173515)
- **What would settle it.** Compare the Black Lotus spawn/loot chance per realm configuration; a single global gameobject loot template would settle it outright.
- **Assessment (`unresolved`).** Unresolved; neither poster gives a tally and no staff post states a per-realm rate. Note the quoted 4% matches the 2024 staff value, not the later 6%.

## CON-0042 — "Sticky" boss loot tables (same drop every kill)

- **Side A.** A Gilneas City worgen boss dropped "the exact same loot every single kill" over 30 kills, changing only after other bosses were killed first; War Master Voone "always dropped the T0 hunter's glove along with the throwing axe" over 20+ kills. — [Danwith (player), 2025-07-07](https://forum.turtlecraft.gg/viewtopic.php?p=138351#p138351), [Tacticalnelf (player), 2024-01-19](https://forum.turtlecraft.gg/viewtopic.php?p=85387#p85387)
- **Side B.** Countered as ordinary RNG plus small sample sizes. — [Drubarrymooer (player), 2024-01-14](https://forum.turtlecraft.gg/viewtopic.php?p=84638#p84638)
- **What would settle it.** Inspect the loot-roll implementation (per-group rolls, seeding) and the boss loot templates on the local server.
- **Assessment (`unresolved`).** Unresolved, no staff statement. A deterministic-seed bug would be visible immediately in emulator code.

## CON-0043 — Prospector's Magnifying Lens: does it help Mining?

- **Side A.** A player at 300 Mining and Exalted with the Thorium Brotherhood reports the trinket "only works for JC", not for Mining. — [Elesion (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173826#p173826)
- **Side B.** Quoted in the same post: the database implies 1.5x the drop chance and "you would need thousands of veins to rule out variance on a chance this small" against a ~3% baseline. — [Elesion (player), 2026-04-03](https://forum.turtlecraft.gg/viewtopic.php?p=173826#p173826)
- **What would settle it.** Read the trinket's spell effect and the Rich Thorium Vein loot template on the local server.
- **Assessment (`unresolved`).** Unresolved; the poster asked for an official statement and got none.

## CON-0044 — Schematic: Enchanted Thorium Shells — fixed or still not dropping?

- **Side A.** Staff name Cannon Master Willey as the source and list the fix on 2026-04-07. — [Torta (staff), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174367#p174367)
- **Side B.** A week later a player reports it still does not drop from Cannon Master Willey. — [Roegnvald (player), 2026-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=175240#p175240)
- **What would settle it.** Cannon Master Willey's loot template in the 1.18.1 data — is the schematic present, and at what chance?
- **Assessment (`unresolved`).** Unresolved at the end of the record; a one-line database check.

## CON-0045 — Community database drop rates vs player run counts

- **Side A.** Database figures quoted by players: Devout Skirt 20% (Stratholme), Devout Mantle 20% / Lightforge Spaulders 10% (UBRS), all Dungeon Set 1 pieces 11%. — [Tossia (player), 2024-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=115009#p115009), [Wilsonsds (player), 2024-02-06](https://forum.turtlecraft.gg/viewtopic.php?p=87109#p87109), [Klouther (player), 2022-09-12](https://forum.turtlecraft.gg/viewtopic.php?p=24939#p24939)
- **Side B.** Observed: 40 Stratholme runs with no Devout Skirt; 20+ UBRS runs with neither shoulder; "over 200 runs of UBRS... i have only seen it drop once". — [Tossia (player), 2024-12-31](https://forum.turtlecraft.gg/viewtopic.php?p=115009#p115009), [Wilsonsds (player), 2024-02-07](https://forum.turtlecraft.gg/viewtopic.php?p=87130#p87130), [Klouther (player), 2022-09-12](https://forum.turtlecraft.gg/viewtopic.php?p=24939#p24939)
- **What would settle it.** Compare database.turtlecraft.gg values against the server loot templates directly — the whole class of disputes collapses if the database is stale.
- **Assessment (`unresolved`).** Unresolved and repeatedly unanswered. Players asked "how accurate is the drop rate from the Turtle Wow Database?" and never got a reply.

## CON-0046 — Falrin's Vendetta / Ogre Warbeads drop rate

- **Side A.** "the drop rates at least for DM North are wrong, it is way lower that what its shown in the database" (2024); repeated in 2025: "3 hrs of killing ogres inside DM, 17 beads. 50% according to hp, riiight". — [Thegardak (player), 2024-01-09](https://forum.turtlecraft.gg/viewtopic.php?p=84055#p84055), [Farbano (player), 2025-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=161591#p161591)
- **Side B.** Staff redirect the report to the bug tracker without confirming or denying; another player says the database is being misread — 50% only from bosses and mini-bosses, 25% from DM ogres, 14% in LBRS, 5% outside. — [Pepesmite (staff), 2024-01-09](https://forum.turtlecraft.gg/viewtopic.php?p=84057#p84057), [Mcnair (player), 2025-12-05](https://forum.turtlecraft.gg/viewtopic.php?p=161664#p161664)
- **What would settle it.** Per-creature Ogre Warbead chances on the local server, split by boss / mini-boss / trash.
- **Assessment (`likely-explained`).** Probably a misread database entry rather than a bug, but nothing in the corpus confirms it.

## CON-0047 — Master Loot and items below the loot threshold

- **Side A.** A player reports Master Loot forces the master looter to hand out greys and whites below the threshold. — [Cysthen (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=172040#p172040)
- **Side B.** The staff loot hotfix of that period only covers chests; vanilla baseline (not from turtlecraft.gg) is that below-threshold items are free-for-all. — [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490)
- **What would settle it.** Loot-method handling for quality below the master-loot threshold in the server code.
- **Assessment (`unresolved`).** Unresolved; the player states the intended rule as an assumption.

## CON-0048 — Araxxna's Husk item id (61816 vs 91777)

- **Side A.** One player links item 61816. — [Mimiwarmini (player), 2024-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=110875#p110875)
- **Side B.** Another links item 91777 for the same drop. — [Verdict (player), 2024-02-28](https://forum.turtlecraft.gg/viewtopic.php?p=88922#p88922)
- **What would settle it.** Look up both ids in the 1.18.1 item template; one is probably a display/tooltip duplicate.
- **Assessment (`unresolved`).** Unresolved, trivially checkable locally.

