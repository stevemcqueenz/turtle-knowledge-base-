# Tower of Karazhan (40-player raid, "Kara40")

Custom 40-player raid in **Deadwind Pass**, shipped with **patch 1.17.2** and opened on **2025-04-03**. Part of `synthesis/content/instances/` — see the [index](README.md) and [`../dungeons-and-raids.md`](../dungeons-and-raids.md).

**Source tiers:** *(official)* = staff post / turtlecraft.gg; *(player)* = non-staff forum post; *(wiki)* = turtle-wow.fandom.com, community-maintained, not official.

---

## 1. Basics

| Field | Value | Source |
|---|---|---|
| Type / size | Raid, 40 players | *(official)* [Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980) |
| Level | 60 (min level 60) | *(wiki)* [Tower of Karazhan](https://turtle-wow.fandom.com/wiki/Tower_of_Karazhan) |
| Tier | **Tier 3.5**; staff describe it as "gameplay even more difficult than Naxxramas" | *(official)* [Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980); tier label *(official)* [turtlecraft.gg, Raids and Dungeons](https://turtlecraft.gg/raids-and-dungeons) |
| Zone | Deadwind Pass, adjacent to Lower Karazhan Halls and Karazhan Crypt | *(wiki)* [Tower of Karazhan](https://turtle-wow.fandom.com/wiki/Tower_of_Karazhan) |
| Attunement | **Upper Karazhan Tower Key** (first five bosses) + **the Scepter of Medivh** (last four bosses) | *(wiki)* [Tower of Karazhan attunement](https://turtle-wow.fandom.com/wiki/Tower_of_Karazhan_attunement) |
| Bosses | 9 (wiki count); this file lists 8 named encounters plus the Chess event | *(wiki)* [Custom Turtle WoW content](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content) |
| Raid scaling | None (wiki). Post-1.18.1 staff say scaling is now active on all raids, 40-player minimum threshold 16 | *(wiki)* [Custom Turtle WoW content](https://turtle-wow.fandom.com/wiki/Custom_Turtle_WoW_content); *(official, later and superseding)* [Torta (staff), 2026-04-21](https://forum.turtlecraft.gg/viewtopic.php?p=176101#p176101) |
| Titles | Realm first: **Conqueror of Desolation**; raid completion for all: **Bane of the Nathrezim** | *(official)* [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590) |
| Lockout | Not stated in the sources — see gaps | — |

**Release timeline (official).** Announced in the 1.17.2 preliminary notes ([Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980)). The patch itself was dated 2024-10-27 with the note that "the Tower of Karazhan raid will open a few weeks later… to tweak class balance and ensure that there are no game-breaking exploits before we launch the raid competition" ([Torta (staff), 2024-10-27](https://forum.turtlecraft.gg/viewtopic.php?p=104997#p104997)). Staff then ran a public QA phase with weekly patches ([Akalix (staff), 2025-02-20](https://forum.turtlecraft.gg/viewtopic.php?p=120531#p120531)) and released the raid **2025-04-03 at 13:00 UTC** ([Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590)). Staff explicitly tied the opening to the class-balance schedule: "This will be the stage at which we open the Tower of Karazhan raid to all and the race for Server First K40 begins" ([Akalix (staff), 2024-11-06](https://forum.turtlecraft.gg/viewtopic.php?p=106610#p106610)). ShellStats, the server-side logging tool, launched alongside it ([Akalix (staff), 2025-03-06](https://forum.turtlecraft.gg/viewtopic.php?p=121909#p121909)).

### Attunement (wiki, community-maintained)

Two separate chains — *(wiki)* [Tower of Karazhan attunement](https://turtle-wow.fandom.com/wiki/Tower_of_Karazhan_attunement):

1. **Upper Karazhan Tower Key** — opens the first five bosses.
2. **The Scepter of Medivh** — opens the last four. Assembled from the *Scepter Rod of Medivh* (The Binding of Xanathar → The Upper Binding I–IV; The Obsidian Rod → Suitable Accommodations, A Drink to Sleep, Spectral Wine, Wine for Kyleson; then The Scepter Rod), the *Scepter Head of Medivh* (The Clutch of Thanlar → Clutch of Thanlar, Bovar'kez; The Gemstone of Kara → Lost In Time, Earlwake No More, The Loss At Lordaeron, The Sword Master, Death In One Strike; **The Gemstone of Zhan**, a scavenger hunt; then Restoration), a *Pure Draenethyst Gemstone*, and *Tirisfal's Vestige* → The Otherworldly Scepter of Medivh → A Pathway Opened.

The **Gemstone of Zhan** step is a scavenger hunt with no in-game guide; the community guide is an external Google spreadsheet posted by a player — *(player)* [Biteyou (player), 2025-04-13](https://forum.turtlecraft.gg/viewtopic.php?p=126586#p126586). The wiki links the same sheet.

---

## 2. Layout and bosses in order

The raid has two halves. The tower proper — subzones **The Menagerie, Guardian's Library, The Celestial Watch, Gamesman's Hall, The Opera Hall, Medivh's Chambers, The Broken Stair, The Repository, Netherspace** — then **The Rock of Desolation** (Sanv Tribe Village, Temple of Aka'Sha, The Seat of Desolation, Hand of Mephistroth) — *(wiki)* [Tower of Karazhan](https://turtle-wow.fandom.com/wiki/Tower_of_Karazhan).

Boss order below follows the timeline reconstruction in [`../../turtle-vs-vanilla-timeline.md`](../../turtle-vs-vanilla-timeline.md) §B4 and is corroborated by a player who calls Anomalus "3rd boss" and Chess "5th boss" — *(player)* [Noephix (player), 2025-05-25](https://forum.turtlecraft.gg/viewtopic.php?p=132929#p132929).

| # | Boss | Location (wiki) | Wiki page |
|---|---|---|---|
| 1 | **Keeper Gnarlmoon** (worgen) | The Menagerie | [link](https://turtle-wow.fandom.com/wiki/Keeper_Gnarlmoon) |
| 2 | **Ley-Watcher Incantagos** (blue drakonid) | Guardian's Library | [link](https://turtle-wow.fandom.com/wiki/Ley-Watcher_Incantigos) |
| 3 | **Anomalus** (arcane elemental) | Guardian's Library | [link](https://turtle-wow.fandom.com/wiki/Anomalus) |
| 4 | **Echo of Medivh** (projection) | The Celestial Watch | [link](https://turtle-wow.fandom.com/wiki/Echo_of_Medivh) |
| 5 | **Chess Event** (King, Queen, Rook / Broken Rook, Knight / Malfunctioning Knight, Bishop / Decaying Bishop, Withering Pawns) | Gamesman's Hall | [link](https://turtle-wow.fandom.com/wiki/Chess_Event) |
| 6 | **Sanv Tas'dal** (draenei riftwalker) | Temple of Aka'Sha, Rock of Desolation | [link](https://turtle-wow.fandom.com/wiki/Sanv_Tas%27dal) |
| 7 | **Rupturan the Broken** (earth elemental) | The Rock of Desolation | [link](https://turtle-wow.fandom.com/wiki/Rupturan_the_Broken) |
| 8 | **Kruul** (doomguard) | The Seat of Desolation | [link](https://turtle-wow.fandom.com/wiki/Kruul) |
| 9 | **Mephistroth** (nathrezim, final boss) | Hand of Mephistroth | [link](https://turtle-wow.fandom.com/wiki/Mephistroth) |

Staff refer to bosses 6–9 collectively as the "**Outland bosses**" — *(official)* [Torta (staff), 2025-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=126946#p126946). **Ima'ghaol, Herald of Desolation** (level 63 elite observer, Netherspace) is a non-boss encounter/mob that also received tuning — *(wiki)* [Ima'ghaol](https://turtle-wow.fandom.com/wiki/Ima%27ghaol,_Herald_of_Desolation), *(official)* [Torta (staff), 2025-05-20](https://forum.turtlecraft.gg/viewtopic.php?p=132195#p132195).

> **Note on wiki depth:** every Tower of Karazhan boss page in the extraction is a stub — level "??", no ability lists. All ability names below come from staff changelogs; effects are described only as far as staff wrote them.

### 1. Keeper Gnarlmoon

| Ability | What sources say | Source |
|---|---|---|
| **Blood Boil** | Damage slightly reduced 2025-05-13 | *(official)* [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900) |
| **Phase Shift** | Damage slightly reduced 2025-05-13 | *(official)* [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900) |
| **Blood Moon** | A phase/effect players heal through — a holy paladin guide advises "Holy Strike right after Blood Moon goes out on Keeper Gnarlmoon" | *(player)* [Ellifta (player), 2026-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=170300#p170300) |
| Ravens + aura | Adds ("ravens") can only be damaged by players carrying the correct aura; pets and totems were made able to damage them if their owner has that aura | *(official)* [Torta (staff), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126056#p126056) |
| Immunity phase | Gnarlmoon becomes immune and should stand still during it (a bug where he kept moving was fixed) | *(official)* [Torta (staff), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126056#p126056) |

Elemental shamans call Gnarlmoon (with Incantagos) one of only two Kara40 fights with "a primary target with lots of small adds", i.e. the only place their AoE damage profile fits — *(player)* [Atreidon (player), 2026-04-11](https://forum.turtlecraft.gg/viewtopic.php?p=174801#p174801). Druid relic **Idol of Laceration** drops here — *(official)* [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52799#p52799).

### 2. Ley-Watcher Incantagos

| Ability | What sources say | Source |
|---|---|---|
| **Guided Ley Beam** | Channelled; channel time before it deals damage was increased, and a text cue was added | *(official)* [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900), [Torta (staff), 2025-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=129028#p129028) |
| **Affinities** (adds) | Health varies per magic school (adjusted separately on PvP realms); they now despawn on death | *(official)* [Torta (staff), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126056#p126056), [Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053) |
| **Arcane Rain** | Raid-damage effect; a holy paladin guide says to Holy Strike "whenever Arcane Rain happens on top of Ley Watcher" | *(player)* [Ellifta (player), 2026-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=170300#p170300) |

The Affinities mechanic makes this one of the fights where shamans use Grounding-style school-specific play; a player names Incantagos and Chromaggus as the only fights where a particular school-swap tool matters — *(player)* [Kokuyoo (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168435#p168435). Incantagos also drops a healing ring that players complain went unchanged in a balance pass — *(player)* [Elleshar (player), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130905#p130905).

### 3. Anomalus

| Ability | What sources say | Source |
|---|---|---|
| **Arcane Prison** | Can no longer be reflected or redirected | *(official)* [Torta (staff), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126056#p126056) |
| **Arcane Aura** | Damage; spell pushback from it was disabled | *(official)* [Torta (staff), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126056#p126056) |
| Targeting | No longer targets Spirit of Redemption with some spells | *(official)* [Torta (staff), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126056#p126056) |
| Requirements | "Reduced the requirements on the Anomalus encounter" (2025-04-16) — the requirement is not spelled out in the note | *(official)* [Torta (staff), 2025-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=126946#p126946) |
| Positioning exploit | Anomalus and Sanv Tas'dal can no longer be fought outside their rooms (2026-03-03) | *(official)* [Shadowsong (staff), 2026-03-03](https://forum.turtlecraft.gg/viewtopic.php?p=169965#p169965) |

**Spec lockouts (player, consensus across several threads):** arcane mages cannot play arcane on Anomalus, the same way frost mages cannot on Sapphiron/Kel'Thuzad and shadow priests/warlocks cannot on Mephistroth — [kierova (player), 2025-06-09](https://forum.turtlecraft.gg/viewtopic.php?p=134911#p134911). One player argues the fight effectively requires arcane resistance for the whole raid and calls that bad design — [Manolothegreat (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168411#p168411). Anomalus and Kruul are cited as fights where holy paladins do >55 % of their healing with melee-range healing — [Ellifta (player), 2025-07-14](https://forum.turtlecraft.gg/viewtopic.php?p=139090#p139090). Anomalus is bleed-immune, and so is everything from him until Chess — [Noephix (player), 2025-05-25](https://forum.turtlecraft.gg/viewtopic.php?p=132929#p132929).

### 4. Echo of Medivh

| Ability | What sources say | Source |
|---|---|---|
| **Doom of Medivh** | A dispellable debuff; the damage caused by dispelling it was "significantly reduced" (2025-05-13), and in 1.18.1 it fades when Echo of Medivh is defeated | *(official)* [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900), [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) |
| **Corruption of Medivh** | Triggers a raid-warning message when cast (2025-05-13); in 1.18.1 it is no longer cast on the main threat target | *(official)* [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900), [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) |
| Immunities | Immune to Shackle Undead | *(official)* [Torta (staff), 2025-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=129028#p129028) |
| Spell reflect | A warrior thread argues Echo of Medivh is a fight built around Spell Reflection | *(player)* [Noephix (player), 2025-06-11](https://forum.turtlecraft.gg/viewtopic.php?p=135351#p135351) |

Paladin relic **Libram of the Eternal Tower** drops here — *(official)* [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52799#p52799).

### 5. Chess Event

Pieces are separate NPCs with their own wiki pages: **King, Queen, Rook / Broken Rook, Knight / Malfunctioning Knight, Bishop / Decaying Bishop**, plus level 63 elite **Withering Pawns** — *(wiki)* [Chess Event](https://turtle-wow.fandom.com/wiki/Chess_Event) and the per-piece pages.

| Mechanic | What sources say | Source |
|---|---|---|
| **King's Fury** | In 1.18.1 it cleanses all players from **Dark Subservience** | *(official)* [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) |
| **Dark Subservience** | A charm/mind-control effect on players — a bug where a player stayed charmed after leaving combat was fixed | *(official)* [Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053) |
| Knight / Rook abilities | Frequency reduced; **Ghastly Horseman** damage reduced (2025-05-13). Knight falling through the ground fixed in 1.18.1 | *(official)* [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900), [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) |
| Bishop | Casts an AoE shadow bolt volley; a bug where the Bishop would not remain stationary was fixed | *(player)* [Ellifta (player), 2026-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=170300#p170300); *(official)* [Torta (staff), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126056#p126056) |
| Pawns | Stats slightly changed 2025-04-08 | *(official)* [Torta (staff), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126056#p126056) |
| Side switching | A holy paladin guide describes "changing sides" as part of the fight's healing pattern | *(player)* [Ellifta (player), 2026-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=170300#p170300) |

**Known pet problem (player, consensus among hunters):** Knight cleaves kill pets outright and are not mitigated by pet Avoidance — [Skurridizo (player), 2026-03-09](https://forum.turtlecraft.gg/viewtopic.php?p=170469#p170469), [Skurridizo (player), 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170517#p170517), [Lane13 (player), 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170522#p170522). One of them believes Kruul's cleave is intended to do this but the Knights' is not.

### 6. Sanv Tas'dal

| Ability | What sources say | Source |
|---|---|---|
| **Curse of the Rift** | No longer resistable (2025-05-13) | *(official)* [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900) |
| **Overflowing Hatred** | Named in his emote set | *(wiki)* [Sanv Tas'dal](https://turtle-wow.fandom.com/wiki/Sanv_Tas%27dal) |
| Summoned adds | Health slightly increased 2025-08-13; a bug leaving adds up after the fight was fixed | *(official)* [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131), [Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053) |
| Totems | He drops totems; on PvP realms he no longer does so for Alliance groups | *(official)* [Shadowsong (staff), 2026-01-27](https://forum.turtlecraft.gg/viewtopic.php?p=166661#p166661) |
| Performance | Performance issues in this fight (and Gnarlmoon's) fixed in 1.18.0 | *(official)* [Torta (staff), 2025-02-22](https://forum.turtlecraft.gg/viewtopic.php?p=120615#p120615) |

He is the objective of the level-60+ quest **Fate Of The Harborage** — *(wiki)* [Sanv Tas'dal](https://turtle-wow.fandom.com/wiki/Sanv_Tas%27dal). An open-world version of Sanv Tas'dal exists in the Swamp of Sorrows and was made non-aggressive — *(official)* [Torta (staff), 2025-05-06](https://forum.turtlecraft.gg/viewtopic.php?p=129934#p129934). A mini-pet was added to his loot table — *(official)* [Torta (staff), 2025-05-20](https://forum.turtlecraft.gg/viewtopic.php?p=132195#p132195).

### 7. Rupturan the Broken

| Ability | What sources say | Source |
|---|---|---|
| **Felheart** | An add that must be *kept alive*: a mechanic "that rewards keeping Felheart intact during the Rupturan fight" was added 2025-08-13. Earlier it was given less mana generation, lower maximum mana and made vulnerable to Viper Sting | *(official)* [Torta (staff), 2025-08-13](https://forum.turtlecraft.gg/viewtopic.php?p=145131#p145131), [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900) |
| **Ignite Rock** | Damage modified 2025-04-22 | *(official)* [Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053) |
| **Shifting Rock** | Armor bonus reduced to **3000** | *(official)* [Torta (staff), 2025-05-20](https://forum.turtlecraft.gg/viewtopic.php?p=132195#p132195) |
| Adds | They now avoid targeting the same player with their abilities simultaneously | *(official)* [Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053) |
| Hitbox | Increased twice (2025-12-23, 2025-12-30) — melee could not reach him reliably | *(official)* [Torta (staff), 2025-12-23](https://forum.turtlecraft.gg/viewtopic.php?p=163576#p163576), [Torta (staff), 2025-12-30](https://forum.turtlecraft.gg/viewtopic.php?p=164078#p164078) |

Shaman relic **Totem of Broken Earth** drops here — *(official)* [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52799#p52799).

### 8. Kruul

| Ability | What sources say | Source |
|---|---|---|
| **Wings of Oblivion** | 1.18.1: can no longer be resisted and **always** knocks players back | *(official)* [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) |
| **Remorseless Strikes** | If his main target is out of reach he attacks another player in range instead | *(official)* [Torta (staff), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130900#p130900) |
| **Mark of the Highlord** | Named in his emote set ("Let your magic burn you inside and out!") | *(wiki)* [Kruul](https://turtle-wow.fandom.com/wiki/Kruul) |
| Enrage | He enrages ("I grow tired of your insolence"); a bug shrinking his attack range while enraged was fixed | *(wiki)* [Kruul](https://turtle-wow.fandom.com/wiki/Kruul); *(official)* [Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053) |
| Nether Infernals | Adds; they now despawn when Kruul dies | *(official)* [Torta (staff), 2025-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=129028#p129028) |
| Line of sight | **All of Kruul's spells ignore line of sight** (2025-06-24); he no longer teleports players he cannot reach | *(official)* [Torta (staff), 2025-06-24](https://forum.turtlecraft.gg/viewtopic.php?p=136891#p136891), [Torta (staff), 2025-05-20](https://forum.turtlecraft.gg/viewtopic.php?p=132195#p132195) |
| Cleave | Kills hunter pets; a hunter believes this is intended here | *(player)* [Skurridizo (player), 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170517#p170517) |

A survival hunter's raid guidance is to switch to Marksmanship for Kruul (and Kel'Thuzad) — *(player)* [Thricew (player), 2025-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=158027#p158027). Kruul drops a well-known axe ("Kruul axe") repeatedly cited in warrior and shaman gear discussions — *(player)* [Licata (player), 2026-01-27](https://forum.turtlecraft.gg/viewtopic.php?p=166667#p166667).

**Reported bug (single source, disputed in-thread):** a warlock reports his Imp auto-attacked Kruul before the pull with no pull command given — [Ytsong (player), 2026-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=165983#p165983); another player replies the pet was simply on aggressive — [Grizb37 (player), 2026-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=165986#p165986). **Contested, no staff answer in the extraction.**

### 9. Mephistroth (final boss)

| Ability | What sources say | Source |
|---|---|---|
| **Shackles of the Legion** | 2.5 s cast (increased when he was made immune to cast-slowing); raid warning added when he begins casting; grants affected players immunity to knockback; **Shackle Shatter** can no longer crit; no longer affects pets or summons; no longer triggers from jumping or falling | *(official)* [Torta (staff), 2025-04-22](https://forum.turtlecraft.gg/viewtopic.php?p=128053#p128053), [Torta (staff), 2025-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=129028#p129028), [Torta (staff), 2025-06-03](https://forum.turtlecraft.gg/viewtopic.php?p=134147#p134147) |
| **Nathrezim Terror** | Cast time increased to 2.5 s | *(official)* [Torta (staff), 2025-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=129028#p129028) |
| **Shards of Hellfury** | Summoned adds; cast time increased; no longer summoned while **Rain of Outland** is active | *(official)* [Torta (staff), 2025-05-06](https://forum.turtlecraft.gg/viewtopic.php?p=129934#p129934), [Torta (staff), 2025-07-08](https://forum.turtlecraft.gg/viewtopic.php?p=138497#p138497) |
| **Rain of Outland** | A phase during which Hellfury shards are suppressed | *(official)* [Torta (staff), 2025-07-08](https://forum.turtlecraft.gg/viewtopic.php?p=138497#p138497) |
| Immunities | Immune to Curse of Tongues, Mind-Numbing Poison and similar cast-slowing effects | *(official)* [Torta (staff), 2025-04-29](https://forum.turtlecraft.gg/viewtopic.php?p=129028#p129028) |
| Debuff cleanup | Leaving the instance removes his debuffs | *(official)* [Torta (staff), 2025-06-24](https://forum.turtlecraft.gg/viewtopic.php?p=136891#p136891) |
| Hitbox | Increased 2025-12-23 | *(official)* [Torta (staff), 2025-12-23](https://forum.turtlecraft.gg/viewtopic.php?p=163576#p163576) |
| Shadow immunity | Shadow priests and warlocks cannot play shadow on Mephistroth | *(player)* [kierova (player), 2025-06-09](https://forum.turtlecraft.gg/viewtopic.php?p=134911#p134911) |

He drops **Soul of the Dreadlord** for the quest *Scythe of the Goddess* — *(wiki)* [Mephistroth](https://turtle-wow.fandom.com/wiki/Mephistroth). Players list his boss drops as including **Hearth of Mephistroth** (always), Pristine Ley Crystal or Felforged Dreadhound, and two T3.5 chest tokens — *(player)* [R3xi3l (player), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130909#p130909).

---

## 3. Loot highlights

- **Tier 3.5 sets** are the headline reward — *(official)* [Torta (staff), 2025-02-21](https://forum.turtlecraft.gg/viewtopic.php?p=120590#p120590). T3.5 and Alternative Tier sets stopped being unique in 2026 — *(official)* [Shadowsong (staff), 2026-01-27](https://forum.turtlecraft.gg/viewtopic.php?p=166661#p166661).
- **Class relics** (1.17.2): Totem of Broken Earth (Rupturan), Libram of the Eternal Tower (Echo of Medivh), Idol of Laceration (Keeper Gnarlmoon) — *(official)* [Dragunovi (staff), 2023-07-10](https://forum.turtlecraft.gg/viewtopic.php?p=52799#p52799).
- The 1.17.2 itemization pass added "over **1300(!)** new items", "quite a few" of them from Upper Karazhan — *(official)* [Dragunovi (staff), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105276#p105276).
- **Ring tokens:** rogues and hunters got dedicated quests to turn ring tokens into tier rings, because they received none at Kara40 release (they have no alternative sets to swap into) — *(official)* [Jamey (staff), 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107253#p107253).
- **Ephemeral Pendant** drop chance set to 20 % on all encounters — *(official)* [Torta (staff), 2025-06-24](https://forum.turtlecraft.gg/viewtopic.php?p=136891#p136891).
- Chess and Outland-boss loot drop chances were increased 2025-04-16 — *(official)* [Torta (staff), 2025-04-16](https://forum.turtlecraft.gg/viewtopic.php?p=126946#p126946).
- Known items named by players: Turalyon's Hope (Mephistroth, retribution belt with a mismatched model) — [Gildark (player), 2025-05-16](https://forum.turtlecraft.gg/viewtopic.php?p=131426#p131426); Ley-Attuned Choker and Torn Wings of Midnight (Gnarlmoon) with the buffed stats quoted — [R3xi3l (player), 2025-04-26](https://forum.turtlecraft.gg/viewtopic.php?p=128636#p128636); Desecration cloak (Kruul) — [Metacross (player), 2025-12-11](https://forum.turtlecraft.gg/viewtopic.php?p=162492#p162492); a long druid list including Mephistroth's Cunning, Felforged Nathrezan Veil, Handwraps of Dead Winds, Bands of the Surgebreaker — [Bayanni (player), 2025-04-27](https://forum.turtlecraft.gg/viewtopic.php?p=128749#p128749).
- **Loot-quantity complaint (player):** Mephistroth's six boss slots reduce to about four usable ones because two are always T3.5 chest tokens — [R3xi3l (player), 2025-05-13](https://forum.turtlecraft.gg/viewtopic.php?p=130909#p130909). Prot paladins report "nothing useful… besides the cloak on chess, Desecration off Kruul, and the tier set" — [Metacross (player), 2025-12-11](https://forum.turtlecraft.gg/viewtopic.php?p=162492#p162492).

---

## 4. Difficulty: staff intent vs. player reports

**Staff intent (official):** "gameplay even more difficult than Naxxramas" — [Torta (staff), 2023-12-28](https://forum.turtlecraft.gg/viewtopic.php?p=82980#p82980). Staff also stated they were open to *design* changes only "after the dust settles in after the raid is cleared" — [Lhian (staff), 2025-03-18](https://forum.turtlecraft.gg/viewtopic.php?p=122945#p122945). Two class-balance statements read the raid as working as intended: warriors "will be closely monitored… the new raid loot may further enhance their power" ([Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504)) and "Protection Paladins are thriving in Tower of Karazhan" ([Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159)).

**Player reports (later, post-buff era):** by February 2026 players say "some guilds are already clearing Kara40 in under 50 minutes, and the same goes for Naxx" and use it to argue against further character power creep — [Manolothegreat (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168411#p168411), quoted approvingly by [Cheruscan (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168420#p168420) and [Turtlesister (player), 2026-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=168484#p168484). **Direction of travel: from "harder than Naxx" at release to a farm raid within ~10 months**, per player claims; no staff statement in the extraction confirms or denies the 50-minute figure.

**Spec-exclusion complaint (player, consensus):** several fights hard-lock magic schools (arcane on Anomalus, shadow on Mephistroth), which players frame as an ongoing design problem rather than a bug — [kierova (player), 2025-06-09](https://forum.turtlecraft.gg/viewtopic.php?p=134911#p134911), [Tarsis (player), 2025-06-10](https://forum.turtlecraft.gg/viewtopic.php?p=135044#p135044).

---

## 5. 1.18.1 changes and later fixes

- Missing creature-pack linking fixed; **Alchemy Lab** re-added; **Enveloped Flames** (trash) no longer cast on pets or summons; **Astral Insight** now gives a **5-second warning** before the effect is cast so casters can stop casting; **Greater Gloomwing** pathing next to the instance portal changed — all *(official)* [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).
- Echo of Medivh and Chess changes listed under those bosses above (same post).
- **2026-03-03:** Anomalus and Sanv Tas'dal can no longer be fought outside their rooms — *(official)* [Shadowsong (staff), 2026-03-03](https://forum.turtlecraft.gg/viewtopic.php?p=169965#p169965). A player immediately points out an equivalent Lower Karazhan Halls exploit is still live — [Wsta (player), 2026-03-04](https://forum.turtlecraft.gg/viewtopic.php?p=170084#p170084), seconded by [Manolothegreat (player), 2026-03-05](https://forum.turtlecraft.gg/viewtopic.php?p=170103#p170103).

---

## 6. Gaps and unclear points

- **No health, damage or duration numbers** for any Tower of Karazhan boss. Every wiki boss page is a stub; staff notes say "slightly reduced", "increased", "modified" without values. The only hard numbers in the extraction are Shifting Rock's 3000 armor, the 2.5 s cast times on Shackles of the Legion / Nathrezim Terror, and Ephemeral Pendant's 20 % drop chance.
- **No player-written boss guide** for Kara40 exists in this extraction — no equivalent of the Emerald Sanctum hard-mode write-up. Tactics above are assembled from class threads and staff notes. This is the largest tactics gap in the whole instance set relative to the raid's importance.
- **Boss order is reconstructed**, not quoted from a source: only Anomalus (3rd) and Chess (5th) are stated outright by a player.
- **Lockout length, minimum raid size, and whether the Scepter of Medivh is per-character or per-raid**: not found in sources.
- **The "secret"/optional content**, if any, and **Ima'ghaol's** role in the encounter list are not explained anywhere.
- **NPC and spell IDs**: not found in sources.
