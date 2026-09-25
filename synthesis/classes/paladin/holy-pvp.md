# Paladin — Holy PvP ("bubbladin" flag/point defender and arena healer)

The forum treats PvP Paladin as its own topic and, after Class Changes 2, the spec it discusses is **Holy** (Retribution PvP is considered nerfed; Shockadin was removed in 1.17.2 and Holy Shock damage came back weaker in 1.18.0). Sources are few and partly hostile; this file is **medium/weak** quality and everything is marked.

## Overview

- **Standing**: **contested, leaning strong**. "holy paladin is already mega OP in PvP, I'd know because I'm R13 with 46k HKS playing hpala 90% of the time. It doesn't need any offensive abilities to be good, it is already the best class in the PvP scene at the moment" — [Ellifta (player), 2026-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=170300#p170300). "Paladins arent universally great in pvp, they're great in stationary engagements. Any time you need to start moving, suddenly paladins are terrible ... fairly well balanced for arena. Their biggest drawback is their kick vulnerability, one kick and theyre locked out of everything, including bubble" — [Crake (player), 2026-03-31](https://forum.turtlecraft.gg/viewtopic.php?p=173323#p173323). Horde view: "you put 5 bubbladins at flag/gy - they can defend it for over 2 minutes with bubbles, stuns, regenerating hp ... WSG - you cant kill paladin healers in bubble when FC carrying flag" — [Damso (player), 2025-10-28](https://forum.turtlecraft.gg/viewtopic.php?p=157515#p157515); "entire ally teams skipping around ... with permanent freedom on the flag carrier as soon as they hit a critical mass of 3 paladins" — [Solveit (player), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154176#p154176). Staff: "Paladins have emerged as one of the top-performing classes in PvP, especially in arena formats. Their combination of burst damage, defensive cooldowns, and utility makes them incredibly hard to counter when played well" — [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) (with the Hand of Freedom 24-s CD and Divine Shield −60% damage changes).
- **Content**: Arathi Basin and Alterac Valley point/graveyard defence, WSG flag-carrier support, arena. Weak when kited/moving (Crake) and against dispel-heavy teams (Purge/Dispel on seals and blessings — [Maxe71 (player), 2025-12-01](https://forum.turtlecraft.gg/viewtopic.php?p=161159#p161159)).

## Talent build

No Holy PvP build is posted. The pieces the sources rely on: Blessed Strikes 5/5 (Crusader Strike resets Holy Shock), Divine Favor (Holy Shock crit), Holy Judgement, Daybreak, and Spiritual Focus (uninterruptible heals). Pre-CC2 "Shockadin for solo PvP is nice" (screenshot build) — [Thol (player), 2022-10-06](https://forum.turtlecraft.gg/viewtopic.php?p=26810#p26810) — is obsolete. The forum's gap is now filled by Discord: a decoded **Holy 35-point PvP core** ("mainly for pvp") and the standard full **Holy 38 / Ret 13** hpal tree; both are enumerated in the Discord section below and carry `spell_id`s in `structured/classes/paladin/holy-pvp.yaml`.

## Stat priority

Stamina is what opponents want removed from Holy PvP gear ("Currently its too difficult to take them down; a single dps needs to be able to take one down" — [Springboards (player), 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170516#p170516)) — i.e. Stamina and healing power; no player-side stat list exists (gap). Rogue Dissolvent Poison (ignores armor) is the named counter — [Turboman (player), 2026-03-10](https://forum.turtlecraft.gg/viewtopic.php?p=170555#p170555).

## Rotation / tactics (single source, Ellifta 2026-03-08)

> "You don't use holy strike in PvP, you use crusader strike to reset your holy shock so you can heal with no cast time + no risk of being silenced ... you do crusader strike to reset your holy shock, which can already reset itself, so you keep healing people with no cast bar. This also means the counter to holy paladins is disarm by warriors to prevent them from doing this." — [Ellifta (player), 2026-03-08](https://forum.turtlecraft.gg/viewtopic.php?p=170319#p170319)

Priority when defending a point:
1. Stay in melee of an enemy to keep swinging (Seal of Wisdom for mana) and to have Crusader Strike available; Holy Shock the ally who needs it; Crusader Strike as soon as Holy Shock is on cooldown to reset it; repeat ("I will see hpals in bgs use crusader strike to reset holy shock cd" — [Tortusenjoyer (player), 2026-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=170314#p170314)).
2. Hammer of Justice on the enemy healer/DPS; Hand of Freedom on the flag carrier (24-s CD), Hand of Protection on a physical-focused ally, Cleanse constantly ("Paladins can cleanse and blessing of freedom every single Hunter debuff except Freezing Trap" — [FrankFankledank (player), 2025-10-28](https://forum.turtlecraft.gg/viewtopic.php?p=157532#p157532)).
3. Divine Shield when focused and keep healing inside it (bubble no longer stops you from acting; −60% damage dealt only); expect kicks — a kick locks Holy school including bubble (Crake, above), so avoid casting into a melee with an interrupt ready.
4. Holy Shock damage (1.18.0: rank 4 256–271, 43% SP) exists for finishing; opponents feared "holy shocks in pvp are going to be brutal" — [Soymage (player), 2025-08-06](https://forum.turtlecraft.gg/viewtopic.php?p=143311#p143311) — but no source builds around it.

## Common mistakes

- Trying to out-range casters as a Holy Paladin instead of using the Crusader Strike → Holy Shock loop — [Ellifta (player), 2026-03-08](https://forum.turtlecraft.gg/viewtopic.php?p=170319#p170319).
- Casting with bubble on cooldown into an interrupt.
- Chasing: "kite them and win" is the accepted counter — [Gildark (player), 2025-10-28](https://forum.turtlecraft.gg/viewtopic.php?p=157476#p157476).

## Discord: builds, gear and arena (post-1.18.1)

Discord closes the forum's "no build" gap and adds the post-1.18.1 gear and arena context.

### Builds (decoded)

- **Holy 35-point PvP core** (Perrapys, "currently specced like this. Its mainly for pvp", 2026-03-28): Divine Intellect 5, Holy Judgement 3, Spiritual Focus 2, Healing Light 3, Unyielding Faith 2, Improved Concentration Aura 3, Illumination 5, Ironclad 2, Divine Favor 5, Holy Shock 1, Holy Power 3, Daybreak 1 [[d:paladin#1487416064835846296]] (post-1.18.1, single source). The link spends only 35 of 51 points, so the finish is unknown.
- **Standard full hpal tree, Holy 38 / Ret 13**, posted repeatedly ("I think pvp will still favor the Blessed Strikes build for hpal") [[d:paladin#1489299128310693929]] [[d:paladin#1431256800099045406]] (1181-announced → post-1.18.1, consensus).
- **Support variant**: swap to Improved Concentration Aura for the 20% CC counter - "Silence and fear resist talent with imp conc aura is great for pvp against locks, spriest and warriors" [[d:paladin#1431289140644937758]] [[d:paladin#1315974293678723093]].
- **Stat/gear philosophy**: "I don't see how pvp differs from pve for holy except for stam requirements" [[d:paladin#1487443771523203184]]; target ~6k hp unbuffed [[d:paladin#1475021635483603166]]. **1h + shield beats 2h** for a support healer (armour, healing power, stats, seal procs) [[d:paladin#1493010360322621630]].
- **Shockadin** (deep Holy + Prot Redoubt/Precision, 38/8/5) is contested: "so super duper strong in pvp and solo questing" [[d:paladin#1487616709295603844]] vs "just heal in PvP and let actual good classes do dmg" [[d:paladin#1488212884839469197]]. The new Holy Shock libram is its enabler ("shocks hitting over 2k in pvp") [[d:paladin#1489852638467194992]] [[d:paladin#1484913485614944417]].

### Gear (post-1.18.1)

- PvP vendors live **2026-03-28**; healer set **5/8 grants immunity to silence/interrupt** [[d:paladin#1487435841679786094]]. **PvP healer mace** (92 healing + mp5) beats Jind'o Hexer for holy [[d:paladin#1487442560191434856]]. Blue PvP gear is "pre-raid BiS for healing" [[d:paladin#1491923339583950989]]. The **healer/ret gloves** (30 Sta / 20 Int / 2% spell crit / +40 healing) are the standout piece and appear in Kara BiS sets [[d:paladin#1487339526719406091]] [[d:paladin#1487443905690599524]]. The **2-piece set bonus** (Judgement of the Crusader damage) is widely panned as dead weight in PvP [[d:paladin#1487233454788837477]] [[d:paladin#1492135260249526412]].
- **Enchants**: Crusader default vs +30 Spellpower for spell/shock PvP - no consensus; run-speed boots are the anti-kite requirement; stamina is "the vanilla PvP stat" [[d:paladin#1481012056034508960]] [[d:paladin#1482087143743557733]] [[d:paladin#1443943020658429973]] [[d:paladin#1487529855430955068]].
- **Consumables**: sappers/grenades/pots/teas, Frost Oils, Free Action Potion (WSG FC substitute for Freedom), thorium grenades (stun), Living Action Potion, low-rank scrolls; engineering is the PvP profession [[d:paladin#1431563512550785124]] [[d:paladin#1434479918317703300]] [[d:paladin#1455759403100803173]] [[d:paladin#1491337490085445834]].

### Arena (from 2026-03-31)

- **Bubble is disabled in rated arena** [[d:paladin#1489382932161495110]]; **Lay on Hands is disabled** [[d:paladin#1441426127284473877]]; strongest cooldowns/consumables are restricted (staff, `patches/1.18.1-changes.yaml`).
- **Hand of Sacrifice damage no longer breaks CC** (1.18.0 change "in anticipation for arenas") [[d:paladin#1489674002254528573]].
- **Divine Shield penalty is contested**: staff/KB 1.18.0 = -60% damage dealt; players report "another 10%" (-70%) [[d:paladin#1490581333637070860]] and, separately, "reduces healing taken and done by 50%" [[d:paladin#1467173434726547698]]. Do not overwrite the staff value without a newer staff source.
- No paladin arena meta formed before the archive ends [[d:paladin#1484421140607930369]] [[d:paladin#1492135028321288302]].

## Sources

| Post | Author (authority) | Date | Era | Agreement |
|---|---|---|---|---|
| [p170300](https://forum.turtlecraft.gg/viewtopic.php?p=170300#p170300), [p170319](https://forum.turtlecraft.gg/viewtopic.php?p=170319#p170319) | Ellifta (player, R13) | 2026-03-07/08 | announced | single source for the loop |
| [p173323](https://forum.turtlecraft.gg/viewtopic.php?p=173323#p173323) | Crake (player) | 2026-03-31 | post-1.18.1 | single |
| [p157515](https://forum.turtlecraft.gg/viewtopic.php?p=157515#p157515), [p157476](https://forum.turtlecraft.gg/viewtopic.php?p=157476#p157476), [p157532](https://forum.turtlecraft.gg/viewtopic.php?p=157532#p157532) | Damso, Gildark, FrankFankledank (players) | 2025-10-28 | announced | contested |
| [p154176](https://forum.turtlecraft.gg/viewtopic.php?p=154176#p154176) | Solveit (player, f63) | 2025-10-03 | announced | single |
| [p170516](https://forum.turtlecraft.gg/viewtopic.php?p=170516#p170516), [p170555](https://forum.turtlecraft.gg/viewtopic.php?p=170555#p170555) | Springboards, Turboman (players) | 2026-03-10 | announced | contested |
| [p141159](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) | Jamey (staff) | 2025-07-25 | pre-1.18.1 | staff |
| [p161159](https://forum.turtlecraft.gg/viewtopic.php?p=161159#p161159) | Maxe71 (player) | 2025-12-01 | announced | single (dispel problem) |
| Discord `#paladin` + `#pvp-general` (see "Discord: builds, gear and arena") | Perrapys, Mithreon, Shokisan, Mithreon, Mithreon, and pvp-general (players); Lhian (dev, staff) | 2024-10 → 2026-04-19 | pre-1.18.1 → post-1.18.1 | decoded builds, PvP gear tiers, arena rules, shockadin debate | consensus on Holy = best paladin PvP spec; contested on shockadin and the Divine Shield penalty |

Flags: the forum had no post-1.18.1 PvP thread; Discord provides one, plus the decoded builds, the post-1.18.1 PvP set/arena rules and the shockadin debate. The Daybreak nerf (1.18.1) reduces self-sustain but nothing quantifies the PvP effect. Divine Shield's exact post-1.18.1 penalty is unresolved (staff -60% vs player -70% vs -50% healing); bubble and Lay on Hands are disabled in rated arena.
