# Druid — Balance PvP (Moonkin dot-kite)

PvP-specific playbook for Balance Druid, split out from `balance-ranged-dps.md` because the sources treat PvP Moonkin as a distinct build and playstyle from the PvE Eclipse rotation. Sources are **medium**: one dedicated build/rotation thread plus scattered standing complaints from the general Balance threads and the post-1.18.1 class-standing threads.

## Overview

- **Role**: hit-and-run dot-kiter — apply Moonfire/Insect Swarm, root/kite melee, land opportunistic Wraths, off-heal with HoTs; not a stand-and-cast caster.
- **Standing — contested, leaning weak**: "Out of all three hybrids, druids are at the bottom of the list in pvp, moonkins especially — mediocre damage, no good def buttons, super weak against other casters. Cats aren't bad though" — [Turboman (player), 2025-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=160309#p160309). Countered narrowly: "the only caster moonkin is weak to is shadow priest, id like to see a mage fight a moonkin (protip, they cant)" — [Springboards (player), 2025-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=160430#p160430). Post-1.18.1, a general-standing thread calls Balance/Moonkin PvP "crispy chips for all other twow classes, almost no survivability" with mana draining in seconds if trying to self-heal — [Mistikkk (player), 2026-03-26](https://forum.turtlecraft.gg/viewtopic.php?p=172568#p172568). A separate feedback thread notes the Eclipse capstone specifically underperforms in PvP because opponents can simply interrupt whichever school is currently buffed and leave the druid stuck doing 30% less damage with the other — [Tarsis (player), 2025-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=126009#p126009).
- **Content**: Arathi Basin / Alterac Valley flag/objective play (Druid is called out as especially strong here — see Role strategy), open-world/duel PvP (weak per the sources above), arena (not covered — gap).
- **Post-1.18.1 confirmation that the dot-kite build remains the standard**: "the only balance [...] spec really is the 30/0/21 for pvp (which is the best balance spec for pvp)" — [Froghijab420 (player), 2026-03-25](https://forum.turtlecraft.gg/viewtopic.php?p=172460#p172460) (**single source**, but consistent with the pre-1.18.1 build guidance below).
- **Moonfire damage reality check**: a claim that "t3 boomkins hit for 600-700 moonfires in pvp" was disputed by a self-described moonkin PvP main: "No they don't, you'd a full spellpower build to deal 450-500 moonfire dmg with all enchantments and such (and even that is nothing in comparison to others), and thats a bad way to pvp as moonkin because unlike other glass cannons, druids don't have meaningful defensive buttons like shields, hard cc or useful pets" — [Turboman (player), 2025-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=160309#p160309).

## Talent build

Two named PvP variants, both pre-1.18.1 (talent tree structurally unchanged by 1.18.1, so still applicable):

- **Classic 30-0-21 dot-kite build** (most-used): [https://talents.turtlecraft.gg/druid?points=pgCDYCFYBIAAAAAAAAAAAAAAAAAAAooADJDCIAAAAAA=](https://forum.turtlecraft.gg/viewtopic.php?p=143254#p143254) — "you dot up your opponent, kite him, stop him with roots and occasionally throw a few wraths. You can move 4 points from Nature's Grasp to Omen [of Clarity]" — [Turboman (player), 2025-08-05](https://forum.turtlecraft.gg/viewtopic.php?p=143254#p143254).
- **19-11-21 melee-hybrid build** (situational, guild/premade play): [https://talents.turtlecraft.gg/druid?points=pACbQKAAAAAAAAFACYBAAAAAAAAAAooADJDCIAAAAAA=](https://forum.turtlecraft.gg/viewtopic.php?p=143254#p143254) — "You get increased stun, armor and charge but lose moonkin form and other spell bonuses for a more 'upclose' gameplay. I rarely use it, usually when i play in a team with guildies" — same source.
- A third, mana/Wrath-efficiency-leaning suggestion (30% arcane damage + 50% less mana for Wrath via Balance of All Things, plus Swiftmend for an instant heal) was floated but rejected by the thread as too PvE-standing-still-oriented for real PvP: "if you're freecasting and not being targeted [it's good]. But this is PVP, the more movement and utility you get trumps these PVE abilities" — [Thaladar (player), 2025-08-05](https://forum.turtlecraft.gg/viewtopic.php?p=143211#p143211), responding to [Maximage (player), 2025-08-05](https://forum.turtlecraft.gg/viewtopic.php?p=143201#p143201).
- **Feral Charge and a 5-point Resto Furor investment** are recommended over the last two rows of the Balance tree for PvP, since standing still to benefit from PvE-oriented capstones is rarely realistic in PvP — [Thaladar (player), 2025-08-05](https://forum.turtlecraft.gg/viewtopic.php?p=143211#p143211).
- **Resto-side PvP points**: a 1-point Swiftmend and a 1-point Nature's Swiftness are recommended as the Restoration-tree component of a PvP Balance build for an emergency instant heal, per a post-1.18.1 build note (**single source, not independently corroborated**) — Froghijab420, referenced in the same 2026-03-25 post as the 30/0/21 confirmation above.
- **Numeric PvP tier estimate (1=worst, 5=best, pre-1.18.1, self-assigned, single source)**: Moonkin rated BG 3/Arena 2 pre-Class-Changes-2, rising to BG 4/Arena 3 post-CC2 — [Templar85 (player), 2024-05-21](https://forum.turtlecraft.gg/viewtopic.php?p=95354#p95354).
- Race note: Tauren's War Stomp is cited as a flag-carrier defensive combo with Regrowth ("stomp + Entangling Roots on a warrior/rogue, then travel form away has secured many flag caps") — [Jammyxx (player), 2023-03-01](https://forum.turtlecraft.gg/viewtopic.php?p=36461#p36461); consistent with the general Tauren-for-PvP-minmax guidance in `leveling.md`.

## Stat priority

- **Stamina-first**: opponents specifically want Stamina stripped from Holy/healing-capable PvP druids to be able to burst them down (parallel complaint from the general PvP standing thread, applies to Balance's off-heal capacity too — see `restoration-pvp.md` for the fuller version of this argument). No numeric weight given (**gap**).
- **Avoid full spellpower/glass-cannon itemization**: "Trying to go full spd is silly because you lose survivability against melee foes and never reach the dmg output of other casters (meaning they will out dps you in a duel with ease). Moonkins play best if they stack stam and certain set bonuses for attrition fights" — [Turboman (player), 2025-11-22](https://forum.turtlecraft.gg/viewtopic.php?p=160309#p160309).

## Rotation / tactics

> "Moonkin's gameplay is basically a hit-n-run, you dot up enemies, throw a couple of wraths, kite and root, while keeping up your hots. Never try to play moonkin as a pure caster, nobody with half a brain will let you just stand there and cast away your starfires" — [Turboman (player), 2025-08-05](https://forum.turtlecraft.gg/viewtopic.php?p=143254#p143254), confirmed by direct experience: "I tried to play as a caster mage and deep balance... i was targeted and depopped. No time to cast. Better off dot kite and off heal here and there" — [Reekharh (player), 2025-09-03](https://forum.turtlecraft.gg/viewtopic.php?p=150002#p150002).

1. Open at range with Moonfire/Insect Swarm to establish DoT pressure.
2. Root the target (Entangling Roots) and/or kite using Travel Form or terrain; reapply roots as they break.
3. Fire off Wrath opportunistically when safe to cast, rather than committing to a stand-and-cast pattern.
4. Off-heal (Rejuvenation/Regrowth) between DoT applications to sustain through the fight; do not expect to out-damage a focused-fire opponent through casting alone.
5. Against warlocks specifically: survive the initial burst (Conflagrate/Soulfire/Shadowburn), then disengage and harass with DoTs once their burst cooldowns are spent, since the warlock must close to melee range for Shadowburn — [Springboards (player), 2025-11-23](https://forum.turtlecraft.gg/viewtopic.php?p=160430#p160430) (**single source, one matchup only**).

## Common mistakes

- Standing and hard-casting like a Mage/Warlock instead of using the dot-kite loop — the single most-repeated warning in the sources.
- Itemizing for maximum spell power/damage instead of Stamina and attrition-survival stats.
- Committing to the 30-0-21 build's PvE-flavored capstones as if they were reliable in open-field PvP.

## Sources

| Post | Author (authority) | Date | Era | Agreement |
|---|---|---|---|---|
| [p139858](https://forum.turtlecraft.gg/viewtopic.php?p=139858#p139858)–[p150002](https://forum.turtlecraft.gg/viewtopic.php?p=150002#p150002) (t=20318) | Reekharh, Maximage, Thaladar, Turboman (players) | 2025-07-16/09-03 | pre-1.18.1 | consensus — dot-kite build and playstyle |
| [p159149](https://forum.turtlecraft.gg/viewtopic.php?p=159149#p159149) thread replies [p160309](https://forum.turtlecraft.gg/viewtopic.php?p=160309#p160309), [p160430](https://forum.turtlecraft.gg/viewtopic.php?p=160430#p160430) | Turboman, Springboards, Siroko (players) | 2025-11-22/25 | 1.18.1-announced-pre-release | contested — PvP standing |
| [p126009](https://forum.turtlecraft.gg/viewtopic.php?p=126009#p126009) | Tarsis (player) | 2025-04-08 | pre-1.18.1 | single source — Eclipse PvP weakness |
| [p172568](https://forum.turtlecraft.gg/viewtopic.php?p=172568#p172568) | Mistikkk (player) | 2026-03-26 | post-1.18.1 | single source — post-1.18.1 PvP complaint |
| [p172460](https://forum.turtlecraft.gg/viewtopic.php?p=172460#p172460) | Froghijab420 (player) | 2026-03-25 | post-1.18.1 | single source — post-1.18.1 build confirmation |
| [p95354](https://forum.turtlecraft.gg/viewtopic.php?p=95354#p95354) | Templar85 (player) | 2024-05-21 | pre-1.18.1 | single source — numeric tier estimate |
| [p36461](https://forum.turtlecraft.gg/viewtopic.php?p=36461#p36461) | Jammyxx (player) | 2023-03-01 | pre-1.18.1 | single source — race/racial tactic |
| `synthesis/1.18.1-master-changelog.md` §Druid | — (compiled from staff posts) | — | — | official changelog compilation (no PvP-specific Balance change in 1.18.1 beyond the general Eclipse/BoAT rework covered in `balance-ranged-dps.md`; class-dependent PvP Dampening also shipped in 1.18.1, see `feral-pvp.md`) |
