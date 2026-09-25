# Shaman — Restoration healer (raids and dungeons)

Playbook for Restoration on Turtle WoW after Class Changes 2 (1.17.2: Chain Heal 3-s cast, Improved Chain Heal, Healing Way/Tidal Surge/Undertow/Improved Water Shield, Mana Tide removed, Spirit Link capstone), 1.18.0 (Chain Heal coefficient 71.42% → 61.42%, Spirit Link instant/35 yd/20 s/10 min, Improved Healing Wave, Healing Way via Lesser Healing Wave, Totemic Mastery rework) and 1.18.1 (Resto T1 8-set replaced by an absorb proc; T1 3-set text fixed; no talent changes). Eras are marked.

## Overview

- **Role**: raid AoE healer built on Chain Heal, tank healer with Healing Wave, damage-prevention via Spirit Link; totem provider for the melee group.
- **Community standing**: **consensus** that Resto is the most wanted shaman spec and a strong raid healer; **contested** whether it is boring / whether 1.18.x nerfs hurt. "Resto is close to being broken. Huge mana pool, spammable, quick chain heal ... Raids love them, they are a bit too OP probably" — [Akos1896 (player), 2025-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=117662#p117662); "most guilds couldn't care less if they did not have a single ele /enha shaman, but they would be seriously annoyed if they had less than 3-4 resto shamans" — [amanagor (player), 2025-01-06](https://forum.turtlecraft.gg/viewtopic.php?p=115605#p115605); "resto shamans are the most wanted class/spec combination in the game" — [Grubi450 (player), 2024-05-03](https://forum.turtlecraft.gg/viewtopic.php?p=94005#p94005); "Chain heal still uber OP and not running out of mana ever" — [Templar85 (player), 2025-01-21](https://forum.turtlecraft.gg/viewtopic.php?p=117470#p117470); "btw resto shaman is the best healer in the game for many years now" — [1.18.1 thread poster, 2025-12](https://forum.turtlecraft.gg/viewtopic.php?t=22214) (attribution in thread). Critics: "resto being a glorified totem bot, while priests, druids and paladins heals like in TBC" — [Travoltino (player), 2026-03-24](https://forum.turtlecraft.gg/viewtopic.php?p=172162#p172162); "on the topic of resto being an absolute snoozefest - unfortunately true" — [Atreidon (player), 2026-01-26](https://forum.turtlecraft.gg/viewtopic.php?p=166553#p166553); "Nope, its still exactly the same rotation" (post-1.18.0) — [amanagor (player), 2025-08-20](https://forum.turtlecraft.gg/viewtopic.php?p=147242#p147242). Staff: "We are satisfied with Restoration's identity as an effective AOE healer and tank healer" — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102972#p102972); "The bouncing healing of Chain Heal has been dominant ... we're pulling slightly back on its scaling" — [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159).
- **Strengths**: Chain Heal on clumped melee, mana sustain via Water Shield talents, Spirit Link ("basically shieldwall on a target of your choice" — [Atreidon (player), 2025-06-04](https://forum.turtlecraft.gg/viewtopic.php?p=134240#p134240)), totems, Ankh, cleansing totems (Decursive-free poison/disease handling).
- **Weaknesses**: single-target heals weaker than other healers ("No healing wave changes this patch. Its straight up worse than all other classes heals" — Travoltino 2026-03-24); no wand/ranged damage filler; healing sniped by Holy paladins' Holy Strike splash ("their heal tends to leave targets at 95% hp, so they eat a bounce of cl" — Atreidon 2026-01-26); Chain Heal bug/nerf complaints ("Chain heal being worse in 3 ways than vanilla is 'intended behavior'" — Travoltino; staff: "That interaction is intended" — [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166084#p166084)).
- **Content**: raids (all tiers), dungeons; PvP as deep-resto Chain Heal support in AV (Manletow) — thin sourcing, see `elemental-pvp.md`.

## Turtle mechanics that define the spec (staff)

| Item | Rule | Source |
|---|---|---|
| Chain Heal | cast 2.5 → 3 s (CC2); Improved Chain Heal (row 6, 5 pts) −0.2..1.0 s; healing coefficient 71.42% → **61.42%** (1.18.0) | [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102972#p102972); [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) |
| Healing Way (row 3) | 11/22/33% chance from Chain Heal, also buffs subsequent Chain Heals; **1.18.0: 33/66/100% from Lesser Healing Wave, buffs LHW** | Dragunovi; Jamey 2025-07-25 |
| Tidal Surge (row 5) | 1.18.0 text: "After healing a target affected by your Healing Way effect, you have a 15/30% chance to regain mana equal to 15% of the base cost of the spell" | Jamey 2025-07-25 |
| Undertow (row 5) | HW/LHW 25/50% chance to restore a Water Shield charge (consumes one at max) | Dragunovi |
| Improved Water Shield (row 4) | 2024-12-20: "You restore 3/6/9 mana per 5 sec while your Water Shield is active, and for each charge currently active your total passive mana regeneration rate is increased by 1/1.5/2%"; 2025-12-03: "Calming River now adds 8 mana per 5 seconds to regular mana regeneration while Water Shield is active, replacing the separate periodic timer" | [Jamey (staff), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460); [Torta (staff), 2025-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=161356#p161356) |
| Improved Healing Wave | 0.15/0.3/0.45/0.6/0.75 s (1.18.0) | Jamey 2025-07-25 |
| Tidal Focus | also −5..25% totem mana (Totemic Focus merged); Restorative Totems −10..50% Mana Spring cost (stacks) | Dragunovi |
| Nature's Grace | reduces threat of all Nature spells | Dragunovi |
| Healing Focus 2 pts; Ancestral Healing row 2; Tidal Mastery row 2; Purification removed; Mana Tide Totem removed | | Dragunovi |
| Spirit Link (capstone) | CC2: link target + 2 allies within 15 yd, 30% of damage split, 30 s, 6-min CD, 15-yd range, 2-s cast; **1.18.0: instant, 35 yd, 20 s, 10-min CD** | Dragunovi; Jamey 2025-07-25 |
| Totemic Mastery | 1.18.0: +20% friendly-totem duration, +15% Totemic Recall refund (30-yd range is baseline) | Jamey 2025-07-25 |
| Ancestral Swiftness | renamed Nature's Swiftness; damaging spells −25% | Jamey 2025-07-25 (revision) |
| Earth Shield | ranks at 40/48/56 (85/115/150 heal, 200/245/300 mana), 30% pushback; not usable in Ghost Wolf | Dragunovi; timeline |
| Water Shield | ranks 26/34/42/50/58 (34/55/76/102/130 mana); "was nerfed slightly in 1.18.1" per a player (no staff entry beyond the LS ratio) | Dragunovi; [Riiya (player), 2026-04-05](https://forum.turtlecraft.gg/viewtopic.php?p=174099#p174099) |
| Resto T1 | 3-set: totem radius **+10 yd** (text fixed 1.18.1); 8-set pre-1.18.1: healing spread to nearby allies (players: 20% to +2 targets, interacting with Healing Way mana returns); **1.18.1: "Your Healing Wave and Lesser Healing Wave have a 25% chance to surround the target with an earth wall, absorbing 250 damage. Lasts 6 sec."** | [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168); [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071); [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272) |
| Totem of Calm Cascades | scales with 15% healing power (hotfix 04-01) | [Torta (staff), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490) |
| Totem of the Calming River | no threat at full mana (2024-02-21) | [Torta (staff), 2024-02-21](https://forum.turtlecraft.gg/viewtopic.php?t=13178) |
| Healing Stream Totem | (player) does not scale on Turtle — "It is currently in a bugged state" (2022); "Its scaling is way off" (2025) | [Mcnair (player), 2022-01-31](https://forum.turtlecraft.gg/viewtopic.php?p=16518#p16518); [Akos1896 (player), 2025-04-10](https://forum.turtlecraft.gg/viewtopic.php?p=126280#p126280) |

## Talent build

- **Standard 0/8/43 (consensus)**: "Usual resto setup is 0 8 43. Get ancestral knowledge and stable shields from enh (stable shields synergize with improved water shield talent). At the resto tree, pick most things, what 5tp to leave empty is mostly your personal decision. F ex I'd skip nature's grace and improved reincarnation" — [Akos1896 (player), 2025-01-06](https://forum.turtlecraft.gg/viewtopic.php?p=115603#p115603); "the only viable way to spec as resto the just dump it all into the Resto tree" — [Voodoochile (player), 2025-06-04](https://forum.turtlecraft.gg/viewtopic.php?p=134190#p134190); Winckler91's image build ("standard resto spec", 5/5 Improved Healing Wave, Spirit Link) — [Winckler91 (player), 2025-06-04](https://forum.turtlecraft.gg/viewtopic.php?p=134238#p134238); Yourik5 instead takes Improved Reincarnation 2/2 and Nature's Grace 3/3 over Improved Healing Wave for raids — [Yourik5 (player), 2025-07-30](https://forum.turtlecraft.gg/viewtopic.php?p=142251#p142251) (**contested filler**). Skegg's 51–60 resto path: rush Improved Water Shield with Stable Shields (`https://talents.turtlecraft.gg/shaman?points=-FAAY-FoDoYIEYQC`), then "finish every talent in resto except imp Reincarnation, Healing Focus and Spirit Link" (`...?points=-FAAY-FoDoaIFYQKFAB`) — [Skegg (player, guide writer), 2025-09-01](https://forum.turtlecraft.gg/viewtopic.php?p=149715#p149715).
- **Spirit Link is not optional** (consensus among raiders): "Improved chain heal is an absolute must have talent, as its 33% of your healing output in the majority of raid encounters. So you arent getting any of the capstones from another tree if you forgo spirit link" — [Atreidon (player), 2025-06-04](https://forum.turtlecraft.gg/viewtopic.php?p=134265#p134265); Skegg's dungeon-farming path skips it only while gearing.
- **1.18.1 impact**: none on talents ("No changes for resto shamans in 1.18.1" — [Burunduk (player), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166121#p166121); the T1 8-set rework is the only change).

## Stat priority (60)

**Contested between "+healing/Int, ignore mana regen" and "mana-regen gear until T2/T2.5".**

- "Ignore MP5, spirit, and %mana regen gear and stack intellect and +healing, mana regen is a not worth it on shaman. For mana regen farm tea and gold, and buy stacks of major mana potions ... Downranking will solve your mana issues" — [Grubi450 (player), 2024-05-03](https://forum.turtlecraft.gg/viewtopic.php?p=94005#p94005).
- "I advise having at least +10% normal mana regen while casting gear on you until you are restricted with T2,5+T2. That plus oranges takes care of most of the mana problems ... make sure that you always have some spirit of zanza" — [Akos1896 (player), 2024-04-04](https://forum.turtlecraft.gg/viewtopic.php?p=92081#p92081) (pre-CC2 Improved Water Shield; superseded in part by the 2024-12-20 Water Shield regen talents).
- Skegg (2025-09): "Get as much +healing and +int as you can ... on a badly geared resto shammy, int is pretty important; around a 4k mana pool is recommended - or if your guild clears raids fast enough, you can just drink more pots/tea and oranges between pulls"; enchants "enchanted armor kits that give +9 spell power. 2% haste to shoulder enchant, and then 1% haste vs +12 spellpower to helm/legs; ring/neck enchants (+12 healing) from JC. Belt buckle for +10 intellect"; weapon "the weaker +healing enchant" pre-raid.
- Haste: the T1 8-set needed "a full pump of haste to work" (Travoltino 2026-03-09); with the set gone no haste target exists (gap).
- Leveling/dungeons: "For healing: +int = +hp" (Skegg); "You will be able to heal any dungeon below level 50 quite comfortably in any spec as long as you have int gear" — [Healingrain (player), 2023-03-08](https://forum.turtlecraft.gg/viewtopic.php?p=37141#p37141).

## Healing priority ("rotation")

**Raid (consensus: Skegg, Akos1896, amanagor):**

1. Totems before the pull (30 yd): Windfury / Strength of Earth / Flametongue / Mana Spring in a melee group, Grace of Air for hunters/druids, Tranquil Air in a caster group; Tremor/Grounding/Poison/Disease/Fire Resistance by encounter. Water Shield on. Totemic Recall after every fight ("Some mana for you, nullified chance your left-behind totem pulls a pack" — [Akos1896 (player), 2024-02-12](https://forum.turtlecraft.gg/viewtopic.php?p=87618#p87618)).
2. **Spirit Link on the tank at pull or before a known burst** ("If you dont wanna use it during the fight just throw it on at pull and see the tank take significantly less damage for the first 30 seconds" — Atreidon 2025-06-04; Skegg: "use on Maexxna before web wrap"); instant and 35 yd since 1.18.0, 10-min CD.
3. **Chain Heal** as the default raid heal: "Once you're raiding, all you really need is Chain Heal rank 1 besides dropping totems within range of your group" — Skegg; "Until you are geared enough, use r2 chain heal for raids to have enough healing power. Once you are better geared, r1 is your base one for mana saving" — Akos1896 2024-02-12; "always make sure that your target has allies nearby where chain heal can jump. If you target a melee, that's usually not a problem" (same). Max rank when the raid is low.
4. **Lesser Healing Wave** for quick patch-ups where "life totals change so fast that a slower healing wave either leads to death or overheal"; downranked LHW for mana-efficient patching (Akos1896). Since 1.18.0 LHW applies Healing Way 100% at 3/3 and benefits from it.
5. **Healing Wave** for tank healing / steady single-target damage; R1 Healing Wave on the tank before a pull "to make sure he runs in with an ancestral fortitude buff" (Akos1896; Skegg: "use r1 Healing Wave sometimes just to trigger Healing Way procs and fish for +armor on tanks").
6. **Ancestral Swiftness (3-min CD)**: "someone is about to die -> NS into max level healing wave ... Big aoe damage happened -> NS into max rank chain heal" (Akos1896).
7. **Berserking (Troll) on cooldown** when heavy healing is expected; "use a rune, get some mana, lose a bunch of life, activate berserking" trick (Akos1896).
8. **Dare to be lazy**: "If there is nothing to do in a raid fight, sit back for 5+ seconds for mana regen" (Akos1896); interrupt your own heal when someone else landed theirs.
9. Filler damage: Flame Shock / Searing Totem only if mana allows and no CC nearby; Earth Shock R1 to interrupt (Akos1896; [Gdawg45 (player), 2023-12-22](https://forum.turtlecraft.gg/viewtopic.php?p=82330#p82330)).

**Dungeon (Skegg, Akos1896)**: "use the latest rank of Healing Wave and Lesser Healing Wave, and -2 downranked Healing Wave, eg. r5 HW and LHW + r3 HW"; Chain Heal when cleave damage; Hex a mob when the pull is too big ("the 'pull was a bit too big, let's try to make it manageable' button" — Akos1896); Earthbind/Frost Shock to escape mobs; Fire Nova/Magma for damage in dungeons only.

**Spell ranks on bars** (Akos1896 layout, 2024-02-12): Chain Heal max / R1 / R2; LHW max / R3 / R5; HW max / R5 / R7; HW R1 as a "buff"; Earth Shock R1 (interrupt) / Flame Shock max / Earth Shock max.

**Pre-1.18.1 T1 8-set playstyle (obsolete 2026-03-20)**: HW/LHW spam with haste to spread 20% of the heal to two nearby allies, chaining Healing Way mana returns; "T1 was another way to play resto shaman but it was another one button spam" — [Kokuyoo (player), 2026-03-09](https://forum.turtlecraft.gg/viewtopic.php?p=170419#p170419); staff: "This nerf is necessary or your gear progression for 8gearslots ends in molten core!" (Atreidon paraphrasing intent, 2026-01-26); Jamey: "That interaction is intended."

## Multi-target healing

Chain Heal is the multi-target tool (3 targets, +1 with 1.18.0 T2.5-style bonuses? — no Resto set adds targets in the sources); Healing Stream Totem is "the most mana efficient heal in Shaman's kit by a massive margin" per [Voodoochile (player), 2025-04-10](https://forum.turtlecraft.gg/viewtopic.php?p=126350#p126350) but "Healing stream totem is still bad" per Akos1896 (**contested**; only "usable with naxx totem" — Travoltino 2026-03-24). Poison/Disease Cleansing Totems are "an absolute beast in ES" (Akos1896 2025-04-10) — drop them instead of clicking Decursive for your own party.

## Cooldowns and resources

- **Spirit Link**: 10-min CD (1.18.0), 20 s, 30% redistributed among three linked allies; positioning no longer matters (instant, 35 yd) — Akos1896's 2025-06-04 caveat about 15-yd/2-s casts is superseded.
- **Ancestral Swiftness**: on cooldown in raids unless a hard phase is imminent (Akos1896).
- **Ankh**: wipe protection; do not use instantly, coordinate with the raid leader (Akos1896).
- **Mana**: Water Shield always; Mana Spring while the party drinks and in place; Nordanaar tea; Major Mana Potion; Spirit of Zanza; Dark/Demonic Runes (share CD with tea); "your biggest challenge is to heal just enough while downgrading as much as possible" (Akos1896). Fresh 60 mana gear: Totem of the Calming River (BM), Kara5 "5% mana regen items", Dreambreeze Cowl / Verdant Dreamer's Breastplate BoEs (Akos1896 2024-04-04; pre-CC2 talents, gear still exists).
- **Consumables** (Skegg; Mimiwarmini 2026-02-10): Dreamshard Elixir, Mageblood, Spirit of Zanza, Brilliant Mana/Wizard Oil ("Wizard for stronger heals"), Major Mana Potion, Nordanaar Herbal Tea, Greater Fire Protection; Flask of Distilled Wisdom; Elixir of the Sage; "you need to be somewhat serious with consumables from BWL and really serious from AQ40" — Akos1896 2024-02-12.

## Role strategy

- **Positioning**: ~30 yd from the group so totems (30 yd) and heals (40 yd) reach; near the tank when Spirit Link is planned (now 35 yd).
- **Group**: melee group for Windfury; "If there is an enhancement shaman in your party, let them use WF and strength totems because they have advanced versions. But insist on using manaspring totem, since yours is better" (Akos1896).
- **Totem twisting**: "I'm usually against it ... only worths it if your primary air totem is not windfury for a fight" (Akos1896); Fire Nova/Grounding are on the GCD since 2025-03-30.
- **Triage** (Akos1896): tank first; in dungeons let life-tapping warlocks manage themselves; sacrifice the least useful player if a pull is unsalvageable; bandage casters, not melee.
- **Threat**: Nature's Grace optional; R1 shocks for interrupts; Totem of the Calming River generates no threat at full mana.
- **Loot**: "if you want a cloth healing item and a mail healing item, usually SR the cloth one" (Akos1896); Resto T1 shoulders/8-set were contested loot in 2020 (raid-loot threads).
- **Warlocks**: agree beforehand or let them die (Blaketj/Akos1896) — bots should heal them anyway in raids ("I heal everything in raid").

## Gear, enchants and consumables

- **Pre-raid** (Skegg 2025-09): DM West legs; BRD gloves (Emperor/Moira), Mantle of Lost Hope, Soot Encrusted Footwear, Guiding Stave of Wisdom, Second Wind; Rivendare's Robe (Strat UD); Royal Seal of Eldre'Thalas (DM); crafted cloak and chest; Black Morass totem ("BiS totem until Naxx") and Kara Crypts pieces; AH greens 54+ with healing (Created Cape "you won't need to replace it until the cape from AQ40's final boss"), Corehound Belt; AD helm/trinket, Mindfang (AB), AV offhand, BM shield/totem/ring, UBRS trinket, Strat vs BM chest. Akos1896 (2024-04): Totem of the Calming River (BM) or Totem of Sustaining (Scholo10); Memento of the Lost (Kara5 neck) → Jindo's Evil Eye / Amulet of the Shifting Sands; Loop of the Forgotten; Shroud of Haunted Torment (cape) or Hide of the Wild; Dreambreeze Cowl (150 bright dream shards), Verdant Dreamer's Breastplate; Zandalarian Hero Charm and Hakkar's Heart (ZG), Sliver of Hope (Kara10); avoid buying Lady Maye's, Remains of the Lost, Dawnstone Hammer.
- **Tier**: "T2 T2.5 T3 - every resto shaman would replace those set bonuses with just more 'green text' stats" (Travoltino 2026-03-09); T3.5 "better than those for paladins" ([Evilchocolate (player), 2025-01-22](https://forum.turtlecraft.gg/viewtopic.php?p=117487#p117487)); T3 8-set "is good" (Travoltino). No Resto BiS list by phase exists in the forum (asked 2024-12-10, unanswered — [kalimore (player)](https://forum.turtlecraft.gg/viewtopic.php?p=112057#p112057)).
- **Enchants**: see stats section (Skegg).

## Common mistakes

1. Overhealing / not downranking ("Whenever you overheal, you threw out mana on the window" — Akos1896).
2. Chain Heal on an isolated target (Akos1896).
3. Skipping Spirit Link or Improved Chain Heal (Atreidon).
4. Totem twisting in raids; re-dropping totems every pull now that range is 30 yd (Skegg).
5. Using Ankh immediately on a boss wipe (Akos1896).
6. Healing Wave spam in raids / expecting the T1 8-set spread after 2026-03-20.
7. Mana-regen gear over +healing once geared (Grubi450) — contested for fresh 60s.
8. Casting Earth Shield in Ghost Wolf (not possible since 2024-11-20).
9. Max-rank Earth Shock to interrupt as a healer ("you are basically taunting a mob onto you" — Gdawg45).
10. Searing Totem near CC (Akos1896).

## Discord additions: ranks, stats, totems and encounters

The archived `#shaman` Discord closes the forum file's "no source enumerates the exact 43 points" and "no haste target" gaps. Era tags: `cc2` (1.17.2, 2024-11), `1180` (2025-08-15..2025-10-02), `1.18.1-announced-pre-release` (2025-10-03..2026-03-19), `post-1.18.1` (>= 2026-03-20).

### The 0/8/43, enumerated

Enhancement **Ancestral Knowledge 5 + Stable Shields 3**; Restoration **Improved Healing Wave 5, Tidal Focus 5, Ancestral Healing 3, Tidal Mastery 5, Healing Way 3, Healing Focus 2, Totemic Mastery 1, Restorative Totems 5, Improved Water Shield 3, Tidal Surge 2, Ancestral Swiftness 1, Undertow 2, Improved Chain Heal 5, Spirit Link 1**. The same allocation decodes from a 2024-10 grid code and a 2026-04 dash code, so it was stable for ~18 months; skipped fillers are Improved Reincarnation and Nature's Grace [[d:shaman#1296270828614193172]], [[d:shaman#1492915776087134350]], [[d:shaman#1484894131515035779]]. A **Chain-Heal-free 0/22/29 Healing-Wave build** also existed pre-1.18.1 (r3/r6-10 HW, 7-13 haste, mana engine via Healing Way/Tidal Surge) but only worked with the old T1 8-set [[d:shaman#1445177080668229713]], [[d:shaman#1465798907492827137]].

### Rank-level healing priority (post-1.18.1)

- **Chain Heal rank 1 is the default raid heal** (max rank when heavy raidwide damage lands); the forum file's priority list omitted this [[d:shaman#1380694277461512214]], [[d:shaman#1489450604236509245]], [[d:shaman#1490120632711516312]].
- **Healing Wave rank 3 is most mana-efficient, rank 4 near-max scaling**; uprank on the tank as damage rises [[d:shaman#1489450669936218213]], [[d:shaman#1487131827796836525]].
- **Lesser Healing Wave is emergency-only** (giga mana inefficient, never a routine raid heal) [[d:shaman#1489450784704823316]], [[d:shaman#1457846645872918700]].
- **Rank-1 Healing Wave pre-pull** to set Healing Way and fish the Ancestral Fortitude (+armor) proc [[d:shaman#1410288522526457928]].
- **R1 -> R2 Chain Heal base-heal gap ~92.5, i.e. ~149 +healing** [[d:shaman#1425200401577152583]].

### Earth Shield correction

Earth Shield is **self-cast only** — players asked twice for a talent to cast it on allies and it was never added [[d:shaman#1296809224386379880]], [[d:shaman#1474496084549177599]]. Its healing use is **30% pushback reduction stacking with Healing Focus's 70% to 100%** [[d:shaman#1416160312729796809]]; it scales with **healing power** and can **crit and proc Ancestral Healing** [[d:shaman#1435024400545091725]], [[d:shaman#1406331865610190978]].

### Stat weights (fills the haste gap)

| Stat | Discord value | Era / agreement |
|---|---|---|
| Haste | 1% haste ~= **15 +healing** (Not Normal); ~**20 +healing** at 1200 healing / 20% crit (peter_hammer); **soft cap = the 1.5 s GCD** | 1180-1.18.1-announced-pre-release; single source [[d:shaman#1454137300031246456]], [[d:shaman#1425115694739095632]], [[d:shaman#1477569610671853578]] |
| Crit | 1% crit ~= **12 +healing**, but only **5-8 +healing** on HW/CH ranks; "does literally nothing useful for resto" (converts to overheal) | 1.18.1-announced-pre-release; single source/consensus [[d:shaman#1454137300031246456]], [[d:shaman#1457846645872918700]], [[d:shaman#1457838505907454105]] |
| mp5 | largely dead post-1.18.0; cross-faction Blessing of Wisdom + Mana Spring devalue it, "all mp5 is now mp2" | 1.18.1-announced-pre-release; consensus [[d:shaman#1404579043088793791]], [[d:shaman#1378303011834691645]], [[d:shaman#1424163612141948928]] |
| Water Shield | 9 orbs with Stable Shields; Improved Water Shield = 3% regen/orb + 6% ~= **~33% meditation** | cc2; consensus [[d:shaman#1296623038556541039]], [[d:shaman#1402621429559853098]] |

This **supersedes `camp_b`** (`mp5 until T2/T2.5`): the post-1.18.0 channel consensus is that haste is the throughput stat and mp5 is de-prioritised.

### Totems for healers

- Totems are **off-GCD auras**, four droppable at once, stacking with oils/poisons; **totem twisting is dead** [[d:shaman#1361235720567525467]], [[d:shaman#1482118867835687032]].
- **Cleansing totems are the best water totems** — instant/off-GCD, cover the whole party instead of Decursive, and **Healing Stream does not trigger Loatheb** [[d:shaman#1377134664648757300]], [[d:shaman#1380690300531380234]], [[d:shaman#1376906060614467704]].
- **Mana Spring is weaker than Blessing of Wisdom**; **Healing Stream** is the useful dungeon/raidwide option (contested as "still bad") [[d:shaman#1374677881292197938]], [[d:shaman#1374680418707574838]], [[d:shaman#1429871523447050396]].
- **Totem of Calming River is the Resto BiS totem until Naxx**; Totem of Flowing Water grants party effects on water totems [[d:shaman#1440622702930169946]], [[d:shaman#1416210028657901588]], [[d:shaman#1424838222546210907]].

### The T1 8-set, operational detail

**Pre-1.18.1**: the bounces were full Healing-Wave events, so **Undertow could proc multiple times per cast and Healing Way applied at 100%**, yielding **~36% mana returned per cast**; the set ran through Naxx on ~126-154 total healing power [[d:shaman#1305074980530290710]], [[d:shaman#1311208584058503218]], [[d:shaman#1429875953844355234]], [[d:shaman#1429862467693056151]]. **Post-1.18.1** the 25%/250-absorb replacement is called a dead bonus and a nerf by the same players [[d:shaman#1465314216352288791]], [[d:shaman#1464641964132663409]]. The forum file's "another one button spam" framing understates what the old set actually did.

### Dungeon practice and overheal benchmark

- "Don't spam chain heal in dungeons, you'll go oom for basically no benefit"; get **Ancestral Swiftness + Healing Focus** for dungeon healing [[d:shaman#1470095703727411342]], [[d:shaman#1438519559446466580]].
- **Normal Resto overheal is ~half of effective healing done**; more than that points to gear, tank-only healing or being slower than peers [[d:shaman#1377402427463958528]].

### Encounter calls (new)

| Encounter | Call | Source |
|---|---|---|
| Loatheb | Spirit Link is usable during the silence; rotate it between Resto shamans; Healing Stream does not trigger the debuff | [[d:shaman#1303893673603502080]], [[d:shaman#1376906060614467704]] |
| Maexxna | Spirit Link the tank before web wrap | [[d:shaman#1379431123049779222]] |
| Sapphiron | super mana-intensive; Healing Stream matters on raidwide damage | [[d:shaman#1301580915637747787]], [[d:shaman#1410229297482043403]] |
| Kel'Thuzad | the one fight where Chain Heal's harder melee bounces (Frost Blast) matter | [[d:shaman#1311168018633592913]] |
| Kara40 | Chain Heal is ~99% of Resto output; healing-power builds beat haste there | [[d:shaman#1399898074272239617]] |
| Naxx (composition) | typical 7-10 healers, so "too many healers" is a bad reason to stack haste | [[d:shaman#1379388780783341609]] |

### Contradictions carried forward

haste-vs-HP BiS, Spirit Link value, crit-vs-haste ordering, post-1.18.1 Resto strength, Healing Stream value, and the player-only claim that 1.18.0 silently removed Chain Heal's lowest-HP targeting and 30% bounce range — all still **contested**.

| Discord source | Era | Agreement | Used for |
|---|---|---|---|
| [[d:shaman#1492915776087134350]] | post-1.18.1 | consensus | 0/8/43 enumerated |
| [[d:shaman#1487131827796836525]] | post-1.18.1 | consensus | rank guide |
| [[d:shaman#1489450784704823316]] | post-1.18.1 | consensus | LHW emergency-only |
| [[d:shaman#1454137300031246456]] | 1.18.1-announced-pre-release | single source | haste/crit +healing equivalences |
| [[d:shaman#1477569610671853578]] | 1.18.1-announced-pre-release | consensus | haste soft cap 1.5 s GCD |
| [[d:shaman#1296809224386379880]] | cc2 | consensus | Earth Shield self-only |
| [[d:shaman#1445177080668229713]] | 1.18.1-announced-pre-release | single source | 0/22/29 Healing-Wave build |

## Sources

| Source | Authority | Date | Era | Used for | Agreement |
|---|---|---|---|---|---|
| [Dragunovi p102972](https://forum.turtlecraft.gg/viewtopic.php?p=102972#p102972), [Jamey p113460](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460), [Jamey p141159](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159), [Torta p161356](https://forum.turtlecraft.gg/viewtopic.php?p=161356#p161356), [Jamey p166071](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071), [Jamey p166084](https://forum.turtlecraft.gg/viewtopic.php?p=166084#p166084), [Dragunovi p168272](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272), [Torta p173490](https://forum.turtlecraft.gg/viewtopic.php?p=173490#p173490) | staff | 2024-10 .. 2026-03 | all | mechanics, sets | official |
| [Akos1896 p87618](https://forum.turtlecraft.gg/viewtopic.php?p=87618#p87618), [p92081](https://forum.turtlecraft.gg/viewtopic.php?p=92081#p92081), [p115603](https://forum.turtlecraft.gg/viewtopic.php?p=115603#p115603), [p134268](https://forum.turtlecraft.gg/viewtopic.php?p=134268#p134268), [p126280](https://forum.turtlecraft.gg/viewtopic.php?p=126280#p126280) | player (self-described casual raider; long guides) | 2024-02 .. 2025-06 | pre-1.18.1 (partly pre-CC2) | layout, ranks, triage, gear, totem tier list | consensus for method; single for gear |
| [Skegg p149715](https://forum.turtlecraft.gg/viewtopic.php?p=149715#p149715) | guide writer | 2025-09-01 | pre-1.18.1 | build path, heal ranks, pre-BiS, enchants, consumables | consensus |
| [Atreidon p134240](https://forum.turtlecraft.gg/viewtopic.php?p=134240#p134240), [p134265](https://forum.turtlecraft.gg/viewtopic.php?p=134265#p134265), [p166553](https://forum.turtlecraft.gg/viewtopic.php?p=166553#p166553) | player | 2025-06, 2026-01 | pre-1.18.1 | Spirit Link, standing | consensus |
| [Grubi450 p94005](https://forum.turtlecraft.gg/viewtopic.php?p=94005#p94005), [Voodoochile p134190](https://forum.turtlecraft.gg/viewtopic.php?p=134190#p134190), [Winckler91 p134238](https://forum.turtlecraft.gg/viewtopic.php?p=134238#p134238), [Yourik5 p142251](https://forum.turtlecraft.gg/viewtopic.php?p=142251#p142251), [amanagor p115605](https://forum.turtlecraft.gg/viewtopic.php?p=115605#p115605), [p147242](https://forum.turtlecraft.gg/viewtopic.php?p=147242#p147242), [Templar85 p117470](https://forum.turtlecraft.gg/viewtopic.php?p=117470#p117470) | players | 2024-05 .. 2025-08 | pre-1.18.1 | stats, build, standing | contested |
| [Travoltino p170395](https://forum.turtlecraft.gg/viewtopic.php?p=170395#p170395), [p172162](https://forum.turtlecraft.gg/viewtopic.php?p=172162#p172162), [Kokuyoo p170419](https://forum.turtlecraft.gg/viewtopic.php?p=170419#p170419), [Duids p171639](https://forum.turtlecraft.gg/viewtopic.php?p=171639#p171639), [Burunduk p166121](https://forum.turtlecraft.gg/viewtopic.php?p=166121#p166121) | players | 2026-01 .. 2026-03 | 1.18.1 announce/post | T1 set loss, set bonuses, complaints | consensus (among posters) |
| [Mcnair p16518](https://forum.turtlecraft.gg/viewtopic.php?p=16518#p16518), [Voodoochile p126350](https://forum.turtlecraft.gg/viewtopic.php?p=126350#p126350), [Gdawg45 p82330](https://forum.turtlecraft.gg/viewtopic.php?p=82330#p82330), [Healingrain p37141](https://forum.turtlecraft.gg/viewtopic.php?p=37141#p37141), [Evilchocolate p117487](https://forum.turtlecraft.gg/viewtopic.php?p=117487#p117487) | players | 2022 .. 2025 | pre-1.18.1 | Healing Stream, interrupts, leveling heals, T3.5 | single |

Flags: Akos1896's 2024-02/04 guides predate CC2 (Mana Tide, Nature's Swiftness, old Improved Water Shield) — only the method and gear names are reused; nothing post-2026-03-20 describes actual Resto play beyond complaints; the Chain Heal bug/"3 ways worse than vanilla" claim is player-only.
