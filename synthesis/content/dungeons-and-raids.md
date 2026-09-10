# Dungeons and raids on Turtle WoW (as of patch 1.18.1)

Every instance on Turtle WoW: the fourteen custom instances the team built, the vanilla instances they extended or retuned, and the server-wide rules (scaling, lockouts, reputation) that apply to all of them. Per-instance detail — layout, bosses, abilities, tactics, loot, bug trails — lives in one file per instance under [`instances/`](instances/README.md).

**Source tiers used throughout:**

- **official (staff)** — turtlecraft.gg pages and Turtle WoW Team forum posts. Authoritative for level ranges, patch numbers and design intent.
- **guide writer** — a player whose maintained guide thread the community references. In this document that means **Speedz1337**, author of the 128-post *Dungeon Quest Guide for Custom Content*, the *Attunements Guide* and the *Karazhan 10 Guide*, all still being edited in April 2026.
- **player** — other non-staff forum posts.
- **wiki** — turtle-wow.fandom.com. **Not an official source**; community-maintained and sometimes stale. It supplies most boss ability lists and subzone names below.

**Dates.** Patch 1.18.1 preliminary notes 2025-10-03; patch 1.18.1 release 2026-03-20; announced server shutdown 2026-05-15. Facts are marked **pre-1.18.1**, **1.18.1-announced-pre-release** or **post-1.18.1** where the distinction matters.

---

## 1. Custom dungeons (5-player)

Level ranges disagree between sources more often than not. The "official" column is the turtlecraft.gg *Raids and Dungeons* page or the staff patch note; the "LFT" column is the in-game LFT-addon range as recorded by the community guide — *(guide writer)* [Speedz1337 (guide writer), 2022-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=29739#p29739).

| Instance | Level (official) | Level (LFT) | Patch added | Zone | Entry requirement | Bosses | File |
|---|---|---|---|---|---|---|---|
| **Frostmane Hollow** | 13–20 | 13–20 | 1.18.1 | Dun Morogh (E, south of the Ironforge Airfields) | none found | 4–5 | [frostmane-hollow](instances/frostmane-hollow.md) |
| **Windhorn Canyon** | 26–30 | 25–33 | 1.18.1 | Thousand Needles | none found | 7 | [windhorn-canyon](instances/windhorn-canyon.md) |
| **Dragonmaw Retreat** | 25–34 (wiki) | 26–35 | 1.18.0 | Wetlands | **Lower Reserve Key** (soft) | 13 | [dragonmaw-retreat](instances/dragonmaw-retreat.md) |
| **The Crescent Grove** | 32–38 | 32–38 | 1.16.0 | Ashenvale, above Mystral Lake | none found | 7 | [crescent-grove](instances/crescent-grove.md) |
| **Stormwrought Ruins** | 35–42 | 35–44 | 1.18.0 | Balor (Stormwrought Castle) | **Key to Stormwrought Castle** (soft) | 12 | [stormwrought-ruins](instances/stormwrought-ruins.md) |
| **Gilneas City** | 43–49 | 42–50 | 1.17.0 | Gilneas (west) | none found | 7–8 | [gilneas-city](instances/gilneas-city.md) |
| **Hateforge Quarry** | 52–60 | 50–60 | 1.16.1 | Burning Steppes (SE) | none found | 5 | [hateforge-quarry](instances/hateforge-quarry.md) |
| **Karazhan Crypt** | 58–60 | 58–60 | 1.16.0 | Deadwind Pass | **Karazhan Crypt Key** (soft; or Lockpicking 300) | 7 | [karazhan-crypt](instances/karazhan-crypt.md) |
| **Caverns of Time: Black Morass** | 60 | 60 | 1.16.0, reworked 1.17.0 | Caverns of Time, Tanaris (SW portal) | none found | 7 | [black-morass](instances/black-morass.md) |
| **Stormwind Vault** | 60 (min 58) | 60 | 1.16.0 | Stormwind City (+ a secret sewer entrance) | none | 6 | [stormwind-vault](instances/stormwind-vault.md) |

Official level and difficulty comparisons: [turtlecraft.gg, Raids and Dungeons](https://turtlecraft.gg/raids-and-dungeons). Patch numbers: [Torta (staff), 2021-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=14049#p14049) (1.16.0), [Torta (staff), 2022-07-24](https://forum.turtlecraft.gg/viewtopic.php?p=20251#p20251) (1.16.1), [Torta (staff), 2023-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=32868#p32868) (1.17.0), [Torta (staff), 2025-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=120615#p120615) (1.18.0), [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) (1.18.1).

**Official difficulty comparisons and expected clear times** (from the same site page, plus the 1.16.0 patch note for the three original custom 5-mans):

| Instance | Site comparison | Site clear time | 1.16.0 patch note |
|---|---|---|---|
| The Crescent Grove | SM: Library | 1 h | — |
| Gilneas City | Zul'Farrak | 1 h | — |
| Hateforge Quarry | Early Blackrock Depths | 1 h | — |
| Stormwrought Ruins | Uldaman | **2 h** | — |
| Karazhan Crypt | Dire Maul+ | 1–1.5 h | "Dire Maul+ … 2–3 hours" |
| Black Morass | Dire Maul+ | 1 h | "Dire Maul++ … 2–3.5 hours" |
| Stormwind Vault | Dire Maul+ | 40 min | "Dire Maul++ … 1.5–2.5 hours" |

The 1.16.0 estimates are much longer than the current site page — *(official)* [Torta (staff), 2021-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=14049#p14049) vs [turtlecraft.gg](https://turtlecraft.gg/raids-and-dungeons). **Both are official; the site page is the later of the two and reflects post-nerf, post-class-change reality.**

---

## 2. Custom raids

| Instance | Size | Level | Tier | Patch added | Opened | Zone | Attunement | Bosses | Scaling | File |
|---|---|---|---|---|---|---|---|---|---|---|
| **Lower Karazhan Halls** ("Kara10") | 10 | 60 | T1 (site); "similar to Molten Core" (staff) | 1.17.0 | 2023-10-07 | Deadwind Pass | **none** | 5–6 | none (wiki) | [lower-karazhan-halls](instances/lower-karazhan-halls.md) |
| **Emerald Sanctum** | 40 | 60 | T2 (site); "Blackwing Lair difficulty" (staff) | 1.17.0 | 2023-10-07 | Hyjal (Emerald Gateway) | **Gemstone of Ysera** ("Into the Dream" I–VI) | 2 | see §5 | [emerald-sanctum](instances/emerald-sanctum.md) |
| **Tower of Karazhan** ("Kara40") | 40 | 60 | **T3.5**; "more difficult than Naxxramas" (staff) | 1.17.2 | **2025-04-03 13:00 UTC** | Deadwind Pass | **Upper Karazhan Tower Key** (first 5 bosses) + **Scepter of Medivh** (last 4) | 9 | none (wiki) | [tower-of-karazhan](instances/tower-of-karazhan.md) |
| **Timbermaw Hold** | **20** | 60 | not stated; "harder than the existing 20 man raids" (staff) | 1.18.1 | 2026-03-20 (older realms a few days later) | Azshara (Timbermaw Hold Gate) | contested — see file | 9 | see §5 | [timbermaw-hold](instances/timbermaw-hold.md) |

Opening dates: [Akalix (staff), 2023-10-01](https://forum.turtlecraft.gg/viewtopic.php?p=67821#p67821), [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590), [Torta (staff), 2026-03-01](https://forum.turtlecraft.gg/viewtopic.php?p=169695#p169695). Tier labels: [turtlecraft.gg, Raids and Dungeons](https://turtlecraft.gg/raids-and-dungeons).

**Lockouts.** The only custom-instance lockout stated anywhere in the extraction is **Lower Karazhan Halls: "resets every 5 days"** — *(guide writer)* [Speedz1337 (guide writer), 2025-11-19](https://forum.turtlecraft.gg/viewtopic.php?p=160087#p160087). A player asked whether **Timbermaw Hold** resets on Friday (per the in-game timer) or Wednesday with the 7-day raids and got **no staff answer** — [Dingacik (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173516#p173516). See the gaps section.

**Seasonal:** **Winter Veil Vale** is an instanced seasonal zone added in 1.16.4 with a snowball boss that drops a mount — *(wiki)* [Winter Veil Vale](https://turtle-wow.fandom.com/wiki/Winter_Veil_Vale); its snowball respawn timer was lowered to 5–6 hours on 2023-12-18 — *(official)* [Torta (staff), 2023-12-18](https://forum.turtlecraft.gg/viewtopic.php?p=81562#p81562). No boss detail exists; not given its own file.

---

## 3. Vanilla dungeons with Turtle changes

Turtle's stated goal for these is **horizontal progression**: "we've expanded classic WoW dungeons, adding new areas and boss encounters for a bit of variety. This aims at horizontal progression, introducing fresh challenges without changing the fundamental dungeon experience too much… **All new locations and encounters are optional**" — [turtlecraft.gg, Classic Dungeons Update](https://turtlecraft.gg/classic-dungeons-update); [Akalix (staff), 2024-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=91709#p91709).

### 1.17.2 wave

| Dungeon | New area(s) | New boss(es) | Other changes | File |
|---|---|---|---|---|
| **The Deadmines** | Zanzil laboratory (mine section), Harvest Golem Foundry | **Jared Voss**, **Masterpiece Harvester** | Rhahk'zor loot pool equalised; hammer → Uncommon with armor; Rockbiter → Rare 2H axe with armor penetration; new Rare mail gauntlets | [deadmines](instances/deadmines.md) |
| **Wailing Caverns** | The Overgrowth, Kolkar Falls | **Vangros**, **Zandara Windhoof** | Lady Anacondra's drops enhanced (Serpent's Shoulders → Rare, new Bear-druid staff); **first dungeon map updated** for the extensions | [wailing-caverns](instances/wailing-caverns.md) |
| **Shadowfang Keep** | the keep's church | **Prelate Ironmane** | — | [shadowfang-keep](instances/shadowfang-keep.md) |
| **Scarlet Monastery — Graveyard** | Scarlet Prison | **Duke Dreadmoore \<Knight of Naxxramas\>** | GY undead keep a 15-min respawn as an explicit exception to the 5-hour standard | [scarlet-monastery](instances/scarlet-monastery.md) |
| **Scarlet Monastery — Library** | Sanctum of the Fist | **Brother Wystan** | — | same |
| **Scarlet Monastery — Armory** | Warehouse | **Armory Quartermaster Daghelm** | music/sound fixed 1.18.0 | same |

Source for the whole wave: [Akalix (staff), 2024-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=91709#p91709), first published [Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980).

> **Website vs. patch notes — contested.** The turtlecraft.gg *Classic Dungeons Update* page names **three different Scarlet Monastery bosses** (The Knight of Naxxramas, Brother Steelfist, and both The Nameless Experiment *and* Master Smith Johana) and spells the Deadmines alchemist "**Jared Vess**". The forum notes and the wiki use Duke Dreadmoore, Brother Wystan, Armory Quartermaster Daghelm and Jared Voss. Treat the website page as a stale draft. Details in [scarlet-monastery.md](instances/scarlet-monastery.md) and [deadmines.md](instances/deadmines.md).

### 1.18.0 wave

| Dungeon | New area | New boss(es) | File |
|---|---|---|---|
| **Razorfen Kraul** | The Brambled Grotto | **Rotthorn** | [razorfen-kraul](instances/razorfen-kraul.md) |
| **Razorfen Downs** | Temple of Agamaggan | **Death Prophet Rakameg** | [razorfen-downs](instances/razorfen-downs.md) |
| **Blackfathom Deeps** | Temple of Elune | **Velthelaxx the Defiler** | [blackfathom-deeps](instances/blackfathom-deeps.md) |
| **Zul'Farrak** | Farraki Tombs, Farraki Arena | **Zel'jeb the Ancient**, **Champion Razjal the Quick** (+ arena challengers Kath'zen the Brutal, Juthza the Cunning) | [zulfarrak](instances/zulfarrak.md) |

Source: [Torta (staff), 2025-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=120615#p120615).

### Vanilla dungeons changed without new bosses

- **Uldaman** — Stone Keepers self-destruct on death (2024-02-27); the **Uldaman Cave removed from Bael Modan** (1.18.1); **no longer required for the Cartographer title**, and the **Ancient Power Module** made to drop as intended (2026-04-21) — [Torta (staff), 2024-02-27](https://forum.turtlecraft.gg/viewtopic.php?p=88858#p88858), [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168), [Torta (staff), 2026-04-21](https://forum.turtlecraft.gg/viewtopic.php?p=176101#p176101).
- **Stratholme** — Plaguebloom added (non-respawning) 2024-01-23; Cannon Master Willey can drop two blues (2024-09-03); an infinite-Crimson-Hammersmith exploit closed (2024-12-03); Stratholme Holy Water no longer causes threat (2024-12-20, restated twice). **Open bug:** *Schematic: Enchanted Thorium Shells* was declared fixed on 2026-04-07 but players report it still does not drop — [Torta (staff), 2024-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=85725#p85725), [Reynolds (staff), 2024-09-03](https://forum.turtlecraft.gg/viewtopic.php?p=100559#p100559), [Torta (staff), 2024-12-03](https://forum.turtlecraft.gg/viewtopic.php?p=111130#p111130), [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460), [Torta (staff), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174367#p174367), [Roegnvald (player), 2026-04-09](https://forum.turtlecraft.gg/viewtopic.php?p=174621#p174621), [Roegnvald (player), 2026-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=175240#p175240).
- **Scholomance** — "The chance for **5 of the 6 bosses in the final chambers** of Scholomance to drop boss loot has been raised **from 30 % to 100 %**. Previously, only Lord Alexei Barov had a 100 % chance to drop any items from the shared 20-item drop table (4 % chance per item), while the other 5 had a 30 % chance (1.11 % chance per item)" — [Jamey (staff), 2023-04-26](https://forum.turtlecraft.gg/viewtopic.php?p=43089#p43089).
- **Dire Maul** — Rich Thorium Veins that could not be mined fixed (2023-11-08); Ogre Warbeads drop chance raised to **25 %** (2024-01-16); King Gordok's tribute chest despawn raised from 1 to **15 minutes** (2024-09-03); missing traps added to Warpwood Pods (2024-03-26) — [Torta (staff), 2023-11-08](https://forum.turtlecraft.gg/viewtopic.php?p=76368#p76368), [Torta (staff), 2024-01-16](https://forum.turtlecraft.gg/viewtopic.php?p=84934#p84934), [Reynolds (staff), 2024-09-03](https://forum.turtlecraft.gg/viewtopic.php?p=100559#p100559), [Torta (staff), 2024-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=91478#p91478).
- **Blackrock Depths** — the *Lock Blueprints: Sorcerer-Thane Thaurissan* quest reclassified as a raid quest (2026-04-07) — [Torta (staff), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174367#p174367).
- **Upper Blackrock Spire** — the **stadium event** now triggers on use of the Seal of Ascension to summon Vaelastrasz (2023-09-24); **Rend Blackhand made harder** in 1.18.0 — [Torta (staff), 2023-09-24](https://forum.turtlecraft.gg/viewtopic.php?p=66741#p66741), [`turtle-vs-vanilla-timeline.md`](../turtle-vs-vanilla-timeline.md) §B4.
- **Ragefire Chasm** — level requirements restored, but **Level 1 Lunatics can bypass them** (also applies to Deadmines) — [Torta (staff), 2025-05-06](https://forum.turtlecraft.gg/viewtopic.php?p=129934#p129934).

---

## 4. Vanilla raids with Turtle changes

| Raid | Size | Tier | Turtle changes | File |
|---|---|---|---|---|
| **Molten Core** | 40 | T1 | **Extension (1.18.0):** two new areas (Incindis' Lair, Old Shadowforge), three new boss encounters (Incindis, Smoldaris + Basalthar, Sorcerer-Thane Thaurissan), 15+ new items; **Gehennas removed**. Every existing boss got mechanic changes plus a large tuning fight (see file) | [molten-core](instances/molten-core.md) |
| **Onyxia's Lair** | 40 | T1 | **Extension (1.18.1):** new section + optional boss **Broodcommander Axelus**; new creatures Onyxian Flamespawn, Onyxian Inciter, Onyxian Hatcher; "new mechanics" on Onyxia (undocumented) | [onyxias-lair](instances/onyxias-lair.md) |
| **Blackwing Lair** | 40 | T2 | **Extension (1.18.1):** new section + optional boss **Ezzel Darkbrewer**; a new or changed mechanic on **every boss except Chromaggus**; **Suppression Room shortcut** after Broodlord Lashlayer | [blackwing-lair](instances/blackwing-lair.md) |
| **Zul'Gurub** | 20 | — | No new bosses. **Hardmode Hakkar** exists and players ask for unique rewards for it; Jin'do the Hexxer add-spawn bug fixed 2023-01-29 | — |
| **Ruins / Temple of Ahn'Qiraj** | 20 / 40 | T2.5 | No new bosses. AQ40 trash returned to classic values (2023-06-14); Ouro/C'Thun anti-exploit scripts; mounting inside AQ40 restored 2026-03-21; an Eye of C'Thun exploit fixed 2025-07-08 | — |
| **Naxxramas** | 40 | T3 | No new bosses. Kel'Thuzad ring tokens (2024-11-09); Plagued Riding Spider mount from Kel'Thuzad (2025-02-11); Heigan safespot fixed (2025-08-26); Grobbulus' Poison Cloud no longer damages far-away players (2026-03-21) | — |

Sources for the ZG/AQ/Naxx rows: [Torta (staff), 2023-01-29](https://forum.turtlecraft.gg/viewtopic.php?p=33498#p33498), [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608), [Torta (staff), 2025-07-08](https://forum.turtlecraft.gg/viewtopic.php?p=138497#p138497), [Jamey (staff), 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107253#p107253), [Torta (staff), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148454#p148454), and [`turtle-vs-vanilla-timeline.md`](../turtle-vs-vanilla-timeline.md) §B4 for the dated one-line entries. Hardmode Hakkar: [Sivent (player), 2024-08-28](https://forum.turtlecraft.gg/viewtopic.php?p=100329#p100329).

### World bosses

| Boss | Size | Tier target | Location | Source |
|---|---|---|---|---|
| **Dark Reaver of Karazhan** | 40 (site) / 20 (wiki) | T1 | Deadwind Pass, at the Lower Karazhan Halls entrance | [turtlecraft.gg](https://turtlecraft.gg/raids-and-dungeons); [wiki](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content) |
| **Nerubian Overseer** | 40 | T2–T2.5 | Eastern Plaguelands (webweaver tunnels) | [turtlecraft.gg](https://turtlecraft.gg/raids-and-dungeons) |
| **Ostarius of Uldum** | 40 | T2.5–T3 | Tanaris / gates of Uldum | [Torta (staff), 2021-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=14049#p14049) |
| **Concavius** | 20+ | "new max-level characters" | Shadowbreak Ravine (Desolace per wiki) | [Torta (staff), 2021-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=14049#p14049) |
| **Cla'ckora** | 20 | — | Azshara; summoned from three Ancient Idol pieces | *(wiki)*, *(guide writer)* [Speedz1337 (guide writer), 2025-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=120619#p120619) |
| **Father Lycan** | 40 | — | Hyjal; part of the Scythe of Elune chain | *(wiki)*; *(player)* [Polkme (player), 2026-03-06](https://forum.turtlecraft.gg/viewtopic.php?p=170204#p170204) |

**The summoning system (official, 1.18.1).** Staff replaced first-come-first-served world-boss spawns: "Powerful artifacts hidden within raid dungeons, combined with materials found throughout the world, allow summoning a specific World Boss depending on the artifact found" — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168). The design was announced a year earlier: world-boss **loot** gets a weekly lockout like instances; summoned bosses do **not** affect the normal respawn timer — [Akalix (staff), 2024-12-03](https://forum.turtlecraft.gg/viewtopic.php?p=111191#p111191). Clarification: "**Everyone can summon and kill world bosses multiple times per week, but you are eligible for loot on the first kill of a world boss every week on that character**" — [Dragunovi (staff), 2024-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=111212#p111212).

Post-release fixes: summoned corpses despawn after 30 minutes (2026-03-24); receiving loot blocks further loot until the weekly reset (2026-03-31); players could be saved to world bosses without notification — fixed (2026-04-14); summoned world bosses no longer have proximity aggro (2026-04-21) — [Torta (staff), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172139#p172139), [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490), [Torta (staff), 2026-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=175230#p175230), [Torta (staff), 2026-04-21](https://forum.turtlecraft.gg/viewtopic.php?p=176101#p176101). A positive player report: a guild "ran world bosses for hours and fought bosses they had never encountered" — [Kibuum (player), 2026-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=175243#p175243).

**Kruul's Wings of Oblivion** (the Silithus world boss, distinct from the Tower of Karazhan boss of the same name) "cannot be resisted anymore and will always knock players back" (1.18.1) — [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).

---

## 5. Server-wide instance rules

| Rule | Detail | Source |
|---|---|---|
| **Raid scaling** | Live since 2019. As of **2026-04-21** it is "active on all raids": 20-player raids scale from a minimum of **8** (was 12); 40-player raids from **16** (was 20) | *(official)* [Torta (staff), 2026-04-21](https://forum.turtlecraft.gg/viewtopic.php?p=176101#p176101) |
| Raid scaling — history | A 2023 scaling change was **reversed** after community pressure: "you have convinced us that presently it would not be in the best interest of the raiding playerbase"; Emerald Sanctum was explicitly exempted and kept at 40 | *(official)* [Torta (staff), 2023-10-11](https://forum.turtlecraft.gg/viewtopic.php?p=70087#p70087) |
| **World buffs in raids** | Disabled in Naxxramas, AQ40, AQ20, Zul'Gurub, Blackwing Lair and Molten Core (2023-02-19); Onyxia's Lair added 2023-02-27 as "an oversight" | *(official)* [Torta (staff), 2023-02-19](https://forum.turtlecraft.gg/viewtopic.php?p=35264#p35264), [Torta (staff), 2023-02-27](https://forum.turtlecraft.gg/viewtopic.php?p=36265#p36265) |
| **Instances per hour** | "The 5 instances per hour limit is now **separate for dungeons and raids**" (2025-04-22) | *(official)* [Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053) |
| **Group caps** | "**Scholomance, Stratholme, and Dire Maul are now limited to a maximum of 5 players**" (2025-08-15) | *(official)* [Torta (staff), 2025-08-15](https://forum.turtlecraft.gg/viewtopic.php?p=145822#p145822) |
| **Trash respawn** | Standard dungeon trash **2 h → 5 h** (2023-12-05). Exceptions: low-respawn patrols (Eye of Naxx, Wandering Eye of Kilrog) and Scarlet Monastery Graveyard undead (15 min) | *(official)* [Torta (staff), 2023-12-05](https://forum.turtlecraft.gg/viewtopic.php?p=79953#p79953) |
| **Dungeon reputation** | Dire Maul → Shen'dralar; Scholomance and Stratholme → Argent Dawn; Caverns of Time: Black Morass → Wardens of Time; Blackrock Depths → Thorium Brotherhood. Existing gains "slightly increased" (2025-08-13) | *(official)* [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131) |
| **Dungeon weekly quests** | Added in 1.18.0 "with enticing rewards for new and veteran players". Weekly quests now reset with the weekly maintenance (2025-09-09) | *(official)* [Torta (staff), 2025-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=120615#p120615), [Jamey (staff), 2025-09-09](https://forum.turtlecraft.gg/viewtopic.php?p=151050#p151050) |
| **Loot trading** | In Master Loot raids, for **10 minutes** after a boss dies all raid members present, still on the raid map and sharing the raid ID can receive the item by trade; each item can be traded once (2023-03-24). Extended to non-boss enemies within 10 minutes on 2026-03-17 | *(official)* [Torta (staff), 2023-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=38842#p38842), [Shadowsong (staff), 2026-03-17](https://forum.turtlecraft.gg/viewtopic.php?p=171113#p171113) |
| **Chests** | "Chests are now distributed according to **group loot** rules" (2026-03-31) | *(official)* [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490) |
| **Fashion Coins** | Earned from dungeon end bosses; every custom-dungeon boss in the wiki data lists one | *(wiki)* [Custom Turtle WoW content](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content) |

**Open player questions on loot rules (no staff answer in the extraction):** Master Loot forces the master looter to distribute greys and whites even with the threshold set to Uncommon — [Cysthen (player), 2026-03-23](https://forum.turtlecraft.gg/viewtopic.php?p=172040#p172040); and whether chests still need rolls or can be opened directly — [Zenmo (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173558#p173558).

---

## 6. Instances players say are overtuned, undertuned or buggy

### Overtuned

| Instance | The claim | Sources |
|---|---|---|
| **Molten Core (after 1.18.0)** | "MC is a bit overtuned, new bosses are fun, but the damage needs scaling back. **We are full T3.5 and it wasn't exactly a cakewalk**, so no idea how it's gonna be for people in Blue Dungeon 1 set"; "Ony, MC, BWL are basically **T3 gearcheck raids**"; "Full 20 man raid with many geared players and we couldn't even get Golemagg down, then the raid dissolved"; "People would rather pug AQ40 than MC at this point" | [Grizb37 (player), 2025-08-18](https://forum.turtlecraft.gg/viewtopic.php?p=146868#p146868), [Twiling12 (player), 2025-08-18](https://forum.turtlecraft.gg/viewtopic.php?p=146874#p146874), [Samsonslice (player), 2025-08-20](https://forum.turtlecraft.gg/viewtopic.php?p=147307#p147307), [FrankFankledank (player), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148305#p148305) |
| **Blackwing Lair (after 1.18.0)** | "We cleared BWL in **3 hours (usually took 1.5 hours)** with my guild with **Naxx gear**. So I would say some bosses are kinda overtuned" | [Arkanae (player), 2025-08-19](https://forum.turtlecraft.gg/viewtopic.php?p=146911#p146911) |
| **Onyxia's Lair (after 1.18.0)** | "I've done an Ony and it was noticeably harder. Took much longer than I expected and **we nearly wiped with 15 people**" | [Zmarotrix (player), 2025-08-18](https://forum.turtlecraft.gg/viewtopic.php?p=146851#p146851) |
| **BWL / Onyxia / Timbermaw Hold (after 1.18.1)** | "Overall difficulty is **WAY overtuned in BWL, Onyx and TMH** for the gear that drops there"; the raid "still needs full Naxx or Kara 40 people to complete" while dropping "T2.1 equivalent gear" | [Travoltino (player), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174380#p174380), [Travoltino (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173564#p173564) |
| **Emerald Sanctum** (pre-nerf) | Trash are "massive health sponges even in Naxx gear… Even in normal mode I can't imagine doing this with less than 35 people" | [Kharkov72 (player), 2024-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=83859#p83859) |

**Counter-claims (contested):** MC is "entirely doable by a fresh progression guild if they have a diverse enough roster, use protection potions and respect mechanics" — [Cheruscan (player), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148364#p148364). Emerald Sanctum hard mode was cleared in MC gear with 25–30 people — [Typh1 (player), 2024-04-04](https://forum.turtlecraft.gg/viewtopic.php?p=92053#p92053), [Typh1 (player), 2024-04-04](https://forum.turtlecraft.gg/viewtopic.php?p=92054#p92054).

**Staff position on the MC retune:** raids were deliberately made harder because "over time, class updates steadily made players stronger"; MC "has been almost a free loot source… it didn't teach the fundamentals of raiding, causing issues in later content". Staff then nerfed seven MC bosses' health by 10–25 % one week after the complaints started, and said they were "exploring the idea of hard modes for existing instances" — [Torta (staff), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148454#p148454). On Golemagg specifically: "**We'll look at Golemagg this week**" — [Lhian (staff), 2025-08-27](https://forum.turtlecraft.gg/viewtopic.php?p=148662#p148662), followed by a 25 % health cut, the enrage restored to 10 % and Core Hounds moving 25 % slower — [Torta (staff), 2025-09-02](https://forum.turtlecraft.gg/viewtopic.php?p=149960#p149960).

### Undertuned

| Instance | The claim | Sources |
|---|---|---|
| **Lower Karazhan Halls** | "the textbook definition of a tank-and-spank raid… **UBRS presents more of a challenge than Kara10**", with loot that jumps past ZG and AQ20 | [Afraido23 (player), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141323#p141323), [Akos1896 (player), 2025-07-26](https://forum.turtlecraft.gg/viewtopic.php?p=141554#p141554) |
| **Karazhan Crypt / Black Morass** | "most high-level group content, including the custom instances Karazhan Crypt and Black Morass (2.0) **can be trio'd by people wearing blue-grade gear**" | [Bob022 (player), 2023-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=76719#p76719) |
| **Tower of Karazhan** (by 2026) | "Some guilds are already clearing **Kara40 in under 50 minutes**, and the same goes for Naxx" — used to argue against further player power creep | [Manolothegreat (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168411#p168411) |

**Counter-claim:** Kara10 "is an entry-level raid. The mechanics are perfectly fine… it perfectly hits the spot between UBRS and MC" — [Elesion (player), 2025-07-26](https://forum.turtlecraft.gg/viewtopic.php?p=141546#p141546). Staff acted on the "too easy" side in January 2025: "**Buffed Lower Karazhan Halls bosses' damage and health values to better match the rewards given**" — [Torta (staff), 2025-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=118168#p118168).

### Buggy (open at the end of the extraction window)

| Instance | Bug | Sources |
|---|---|---|
| **Blackwing Lair — Firemaw** | Void zones spawn "behind LoS, inside walls, in the air (so impossible to soak), under hay stacks… some are 80+ yards away"; a week after the "Void Zones should no longer chase players" fix: "**not LoS — simply invisible**" | [Travoltino (player), 2026-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=173564#p173564), [Travoltino (player), 2026-04-07](https://forum.turtlecraft.gg/viewtopic.php?p=174380#p174380); staff fix [Torta (staff), 2026-03-21](https://forum.turtlecraft.gg/viewtopic.php?p=171608#p171608) |
| **Lower Karazhan Halls — Clawlord Howlfang** | "he resisted like 80 % of both tanks' taunts, once 4 times in a row"; "something is wrong with that npc". A third player suggests he loses his target while casting | [Turney (player), 2025-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=162969#p162969), [Deeno (player), 2025-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=162983#p162983), [Atreidon (player), 2025-12-17](https://forum.turtlecraft.gg/viewtopic.php?p=162984#p162984) |
| **Lower Karazhan Halls — "Scythe boss"** | A 2-man exploit reported as still live after the equivalent Kara40 exploits were closed | [Wsta (player), 2026-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=170084#p170084), [Manolothegreat (player), 2026-03-05](https://forum.turtlecraft.gg/viewtopic.php?p=170103#p170103) |
| **Naxxramas — Loatheb** | "They could fix Loatheb too. It has already been reported" | [Manolothegreat (player), 2026-03-05](https://forum.turtlecraft.gg/viewtopic.php?p=170103#p170103) |
| **Onyxia's Lair** | Pets fall below ground when taking the tunnel after the first boss | [Lane13 (player), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171787#p171787) |
| **Stratholme** | *Schematic: Enchanted Thorium Shells* still not dropping after the 2026-04-07 fix | [Roegnvald (player), 2026-04-09](https://forum.turtlecraft.gg/viewtopic.php?p=174621#p174621), [Roegnvald (player), 2026-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=175240#p175240) |
| **Pets in raids generally** | Void zones, Thaddius' tesla charges, Kruul's cleave, Chess Knight cleaves and Heigan explosions all kill hunter pets regardless of Avoidance | [Skurridizo (player), 2026-03-09](https://forum.turtlecraft.gg/viewtopic.php?p=170469#p170469), [Skurridizo (player), 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170517#p170517), [Lane13 (player), 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170522#p170522) |

**Historically buggy, since fixed:** **Moroes** (Lower Karazhan Halls) needed six separate staff fixes between 2023-10 and 2024-02 and became the community's shorthand for a buggy release — [Biteyou (player), 2024-10-19](https://forum.turtlecraft.gg/viewtopic.php?p=103746#p103746). **Stormwrought Ruins** and **Dragonmaw Retreat** needed three rounds of crash and memory-leak fixes — [Torta (staff), 2025-09-02](https://forum.turtlecraft.gg/viewtopic.php?p=149960#p149960), [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168), [Torta (staff), 2025-10-05](https://forum.turtlecraft.gg/viewtopic.php?p=154470#p154470). **Emerald Sanctum's** repeated undocumented anti-strategy changes drew the sharpest complaint of the set — [Kharkov72 (player), 2024-01-07](https://forum.turtlecraft.gg/viewtopic.php?p=83859#p83859).

---

## 7. Instance count by category

| Category | Count |
|---|---|
| Custom dungeons (5-player) | **10** |
| Custom raids | **4** (10-, 20- and two 40-player) |
| Vanilla dungeons with new bosses/areas | **10** (Deadmines, Wailing Caverns, Shadowfang Keep, SM Graveyard, SM Library, SM Armory, Razorfen Kraul, Razorfen Downs, Blackfathom Deeps, Zul'Farrak) — documented in **8** files, since the three Scarlet Monastery wings share one |
| Vanilla raids extended with new bosses | **3** (Molten Core, Onyxia's Lair, Blackwing Lair) |
| Vanilla raids retuned without new bosses | **3** (Zul'Gurub, AQ20/AQ40, Naxxramas) |
| Custom world bosses | **6** |
| Seasonal instanced zone | **1** (Winter Veil Vale) |

---

## 8. Gaps and unclear points

**The biggest gap is numbers.** Almost no source in this extraction gives boss health, damage, cast times or debuff durations. The complete list of quantified boss abilities across all instances is:

- Engineer Figgles' **Corrosive Poison** (657–843 Nature every 5 s, −5000 armor, 30 s) — Hateforge Quarry.
- Zel'jeb the Ancient's **Ancient Embalming** (90 % damage reduction, fire breaks it; Flame of Farrak lasts 10 minutes) — Zul'Farrak.
- Dagar the Glutton's **Tendon Rip** (−58 % movement speed) — Stormwrought Ruins.
- Rupturan's **Shifting Rock** (3000 armor) and Mephistroth's **Shackles of the Legion** / **Nathrezim Terror** (2.5 s cast) — Tower of Karazhan.
- Emerald Blessing (80 yd, 10 % speed, 1 % spell hit, 5 % mana regen) — an Emerald Sanctum reward, not a boss ability.

Everything else is a name, or a relative change ("slightly reduced", "increased").

**Other gaps:**

1. **Lockouts are almost entirely undocumented.** Only Lower Karazhan Halls (5 days, from a player guide) is stated. No staff source gives lockout lengths for any custom instance, and the Timbermaw Hold question went unanswered.
2. **Boss order is unknown for most instances.** Only Lower Karazhan Halls (four in any order, then Moroes), Emerald Sanctum, Black Morass (partly) and Tower of Karazhan (partly, and reconstructed) have any ordering information.
3. **Tactics coverage is extremely uneven.** Two instances have real player write-ups — **Lower Karazhan Halls** (a full guide with trash spell IDs and boss handling) and **Emerald Sanctum** (a hard-mode positioning plan). **Molten Core** has a detailed player critique that doubles as a mechanics description, plus the Golemagg thread. Everything else has none: no tactics thread exists in this extraction for any custom 5-man dungeon, for Tower of Karazhan, for Timbermaw Hold, or for any of the vanilla dungeon extensions.
4. **Onyxia's "new mechanics" and BWL's per-boss "new or updated mechanic" were announced but never listed.** These are the two largest undocumented content additions of 1.18.1.
5. **Unnamed bosses:** 2 of 7 in Black Morass, 3 of 7 in Karazhan Crypt, 3 of 13 in Dragonmaw Retreat.
6. **Boss counts disagree** between staff, the wiki and the community guide for Lower Karazhan Halls (5/6), Gilneas City (7/8), Frostmane Hollow (4/5), Molten Core's extension (3/4) and Stormwrought Ruins (12/13).
7. **Level ranges disagree** between the official site, the wiki and the in-game LFT addon for most custom dungeons — every case is flagged in the per-instance files.
8. **No NPC IDs or spell IDs** are recorded anywhere except Lower Karazhan Halls, where the community guide supplies six NPC IDs (61221–61225, 61319) and about a dozen trash spell IDs, and a handful of item IDs scattered through player posts.
9. **The turtlecraft.gg website is stale** on the 1.17.2 Scarlet Monastery and Deadmines boss names, and on the Hateforge Quarry location. Prefer staff forum notes.
10. **Forums not in this extraction.** At the time of writing, the AddOns (f18) and Lore (f19) sub-forums had not been extracted. Any boss-tactics addon threads or lore write-ups there are missing from this document.
11. **No combat logs or parses.** ShellStats (the server-side logging tool announced with Tower of Karazhan — [Akalix (staff), 2025-03-06](https://forum.turtlecraft.gg/viewtopic.php?p=121909#p121909)) is referenced but no data from it appears in the sources.
12. **Coordinates.** No source gives in-game X/Y coordinates for any instance entrance.
