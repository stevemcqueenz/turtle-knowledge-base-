# Mage — Fire — Ranged DPS (raids and dungeons)

Era coverage: Fire was changed in 1.17.2 (Ignite 6 s, Hot Streak, Improved Fire Blast GCD), retuned 2024-11-20, 2024-12-20, 2025-03-30, heavily in 1.18.0 (Ignite back to 4 s, Hot Streak 2 ranks, Master of Elements 15/30/45%, Blast Wave 30 s, Flamestrike 2.5 s, Fire Vulnerability also from Fire Blast) and once more in **1.18.1: Improved Fire Blast GCD reduction raised to 0.3/0.6/1.0 s** ([Jamey (staff), 2026-01-26 revision](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071)). Advice from before 1.18.0 about Ignite uptime and Hot Streak stacks is flagged as superseded.

## Overview

- **Role.** Ranged caster whose damage is Fireball + Ignite crit rolls, Pyroblast via Hot Streak, and Fire Blast; strongest on bosses, weaker on trash. Staff: "Fire is one of the top performing specializations in raids, for this reason we do not think it requires a lot of number tuning … Fire's rotation is dull … which we plan to remedy with the addition of Hot Streak." [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968).
- **Community standing: alternative / second raid spec; favored by some top players; unusable in fire-immune raids** — **contested**:
  - Wiki: "Fire - generally highest boss damage when you get good rng, in general less good on trash than other specs. Easy to play, longest range." and "Naxx boss rankings as of 1.18 … many of those parses had multiple fire mages contributing to one person's damage." [Mage General FAQ (wiki)](https://turtle-wow.fandom.com/wiki/Mage_General_FAQ); "Yes fire is still good but not the dominant raiding spec since 1.17.2" [Mage Fire FAQ (wiki, rev. 2026-03-04)](https://turtle-wow.fandom.com/wiki/Mage_Fire_FAQ).
  - "Some of the best Mages on the Nordanaar Server are playing Fire, and they aren't just keeping up with Arcane, they can outdamage them. The issue Fire has is its dependency on Crits … Fire is entirely capable of being competitive" [Eluaria (player), 2026-02-11](https://forum.turtlecraft.gg/viewtopic.php?p=167923#p167923). Also: "Fire is getting a change that literally fixes their biggest issue … Fireblast dropping Ignite" ([Eluaria, 2026-02-03](https://forum.turtlecraft.gg/viewtopic.php?p=167347#p167347)) — the 1.18.1 Improved Fire Blast change.
  - Opposite view: "Fire mage does not see much play outside of coordinated mage teams rn since a solo fire mage will only serve as a fire shaman/fire lock buffer … Fire needs to lose its dependancy on other fire mages" [Cheruscan (player), 2026-02-04](https://forum.turtlecraft.gg/viewtopic.php?p=167406#p167406); "Fire specc is dead, it relies on multiple mages" [Cheruscan, 2025-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=158193#p158193).
  - Right after 1.17.2 (superseded by later buffs): "Fire serves no purpose on turtlewow. Why would you play it when you have frost and arcane?" [Trojjie1, 2024-11-08](https://forum.turtlecraft.gg/viewtopic.php?p=107088#p107088); "Hot streak is hot garbage" [Darktifa, 2024-11-08](https://forum.turtlecraft.gg/viewtopic.php?p=107081#p107081).
  - Raid tiers: "Fire is sadly not viable until after Blackwing Lair, since several bosses in both Molten Core and BWL are Fire immune" [Eluaria, 2025-11-26](https://forum.turtlecraft.gg/viewtopic.php?p=160732#p160732); "Arcane is PvE spec for MC/BWL phase, Fire for AQ-Naxx" [Erhog, 2023-12-21](https://forum.turtlecraft.gg/viewtopic.php?p=82178#p82178); "go frost until AQ40, respec to fire during AQ40 progression" [Akos1896, 2024-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=91576#p91576) (pre-rework; the Arcane part is superseded). Post-release claim that "Even Fire (with a Spell Penetration build) outdoes it [Frost] in Molten Core" [Eluaria, 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171409#p171409) was challenged: "where are those logs … Some bosses are completely immune to fire" [Wsta, 2026-03-20](https://forum.turtlecraft.gg/viewtopic.php?p=171412#p171412) — **contested, no logs posted**.
  - "It's been consistently one of the top casters outside of fire immune/resistant raids … You're just getting beat out by arcane now." [Bigsmerf, 2025-03-17](https://forum.turtlecraft.gg/viewtopic.php?p=122817#p122817).
- **Strengths:** longest range (wiki), Master of Elements mana refund 15/30/45% ([Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159)), Fire Vulnerability now applied by Fire Blast (1.18.0 rev. 2025-08-14), Pyroblast GCD 1 s so a full Hot Streak Pyroblast doesn't clip ([Torta (staff), 2025-03-30](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504)).
- **Weaknesses:** crit/RNG dependence (Eluaria), Ignite uptime with a single Fire mage (staff 2025-07-25: "the solo Fire Mage being forced to spam Scorch to reliably keep up the Ignite"), Fire mana ("Fire Mages quite struggle with mana even with the help of talents such as Master of Elements" — Torta 2025-03-30), fire-immune MC/BWL bosses, weaker AoE (staff 2025-07-25: "Fire has been quite struggling using its own Area of Effect spells"), a broken Fire T3.5 3-set bonus reported in Dec 2025 and Feb 2026 (see §Gear). Fire has no Ice Block → Cold Snap safety net ([Darktifa, 2023-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=75350#p75350)).

## Talent build

### Official talent numbers (Fire)

| Talent | Current effect | Source |
|---|---|---|
| Ignite | 4 s duration (6 s in 1.17.2, reverted in 1.18.0); threat split among contributing mages; no longer triggers from non-Mage spells such as grenades (changelog 2025-10-22); no extra tick on application, no stack reset when refreshing between last tick and expiry (changelog 2024-03-06) | [Dragunovi 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968), [Jamey 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) |
| Hot Streak | Row 5, **2 pts**: Fireball/Fire Blast crits 50/100% → stack; each stack −1 s Pyroblast cast, max 5 stacks, lasts 3 min | staff 2024-10-12 → [2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776) (3 min) → [2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460) (1 s/5 stacks) → 1.18.0 (2 ranks) |
| Improved Fire Blast | GCD −0.3/0.6/1.0 s (1.18.1; was 0.17/0.34/0.5) | Jamey 2026-01-26 rev. |
| Fire Vulnerability (ex-Improved Scorch) | also applied by Fire Blast with the same chances; guaranteed to hit (changelog 2024-12-04) | Jamey 2025-08-14 rev. |
| Master of Elements | 15/30/45% base mana refund on crit; refunds for only one crit of a multi-target spell (changelog 2024-09-04); triggers from Icicles too (changelog 2025-02-19) | Jamey 2025-07-25 |
| Blast Wave | 30 s cooldown (was 45); Flame Throwing +10/20% radius | Jamey 2025-07-25 |
| Flamestrike | 2.5 s cast (was 3); mana R2–R6 250/360/470/580/680 | Jamey 2025-07-25; Torta 2025-03-30 |
| Fireball | mana R3–R12 60/85/120/160/190/220/245/265/275/295 | Torta 2025-03-30 |
| Pyroblast | GCD 1 s | Torta 2025-03-30 |
| Arcane Focus ↔ Magic Absorption swap | Fire/Frost can reach row 2 of Arcane without Arcane Focus | Jamey 2025-07-25 |

### Allocation

No source posts a complete 51-point raid build in text ("Pepo raid" on the wiki is an image — **gap**). The wiki Fire FAQ (rev. 2026-03-04, i.e. after 1.18.0 and after the 1.18.1 preview) gives a full levelling path that is 46 points at 55 "and have 5 points to play with however you would like":

| Order | Tree | Talent | Points | Cumulative |
|---|---|---|---|---|
| 1 | Fire | Improved Fireball | 5 | 5 |
| 2 | Fire | Ignite | 5 | 10 |
| 3 | Fire | Pyroblast | 1 | 11 (level 20) |
| 4 | Fire | Burning Soul | 2 | 13 |
| 5 | Frost | Elemental Precision | 3 | 16 |
| 6 | Arcane | Arcane Subtlety | 2 | 18 |
| 7 | Arcane | Magic Absorption | 3 | 21 (level 30) — "you don't need to put ANY points into Arcane focus" |
| 8 | Arcane | Arcane Concentration | 5 | 26 |
| 9 | Fire | Incinerate | 2 | 28 |
| 10 | Fire | Master of Elements | 3 | 31 |
| 11 | Fire | Fire Vulnerability | 3 | 34 |
| 12 | Fire | Blast Wave | 1 | 35 |
| 13 | Fire | Critical Mass | 3 | 38 |
| 14 | Fire | Hot Streak | 2 | 40 |
| 15 | Fire | Fire Power | 5 | 45 |
| 16 | Fire | Combustion | 1 | 46 (level 55) |
| 17 | — | free | 5 | 51 |

Wiki short priority for leveling: Improved Fireball > Elemental Precision > Burning Soul > Arcane Concentration. Wiki raid guidance beyond the image: none. An older wiki table (Levelling FAQ, rev. 2025-10-01) still shows Hot Streak 3/3, Improved Fire Blast 3/3, Impact 5/5, Flame Throwing 2/2 and Arcane Focus 3/5 — **superseded** by the 1.18.0 talent changes.

Contested choices:
- Hot Streak: "Players are already skipping the talent" [Bahamutxd, 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107181#p107181) and "if you choose hot streak you will likely miss out on the essential mana-management talents in the Arcane tree" [Forbearance, 2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107195#p107195) — both under the 3-point/9-stack version; staff reduced it to 2 points in 1.18.0 because "some straight up skip this talent" (Jamey 2025-07-25). Xudo's reply "Why do you need mana-management talents if you can just drink tea?" ([2024-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=107199#p107199)).
- Improved Fire Blast: worth 3 points after 1.18.1 (1.0 s GCD reduction makes Fire Blast a filler between Fireballs — Eluaria's "fixes their biggest issue"). Pre-1.18.1 it is absent from the 2026-03 wiki path but present in the 2025-10 table.

## Stat priority (level 60)

Wiki sim ([Mage Fire FAQ](https://turtle-wow.fandom.com/wiki/Mage_Fire_FAQ), solo Fire, no cooldowns, 2-min fight, rotation below):

| Profile | 1% Crit | 1% Hit | 1% Haste |
|---|---|---|---|
| Endgame (1000 SP, 40 crit, 15 hit, 5 haste) | ~25 SP | ~23 SP | ~15 SP |
| Fresh 60 (300 SP, 18 crit, 13 hit, 3 haste) | ~17 SP | ~15 SP | ~11 SP |

"You really want 2-4% haste minimum + nampower to ensure that you can get off 2 fireballs within the 6 second ignite window" (wiki) — written for the 6 s Ignite; with the 4 s Ignite restored in 1.18.0 the haste requirement is, if anything, stricter, but no source recomputed it (**gap**). Hit cap 16% is the generic caster figure players quote ([Perkamov, 2025-12-04](https://forum.turtlecraft.gg/viewtopic.php?p=161504#p161504); Ashafares 16%). Priority therefore: hit to cap → crit ≥ hit-under-cap → spell power → haste. Damage split in the sim: Fireball ~46%, Ignite ~29%, Fire Blast ~14%, Pyroblast ~8.5%, Scorch ~2%.

## Single-target rotation

Wiki Fire FAQ (rev. 2026-03-04):
- **Opener:** Fire Blast → 3× Scorch → Fireball → Fire Blast → …
- **Priority:** (1) Pyroblast if Hot Streak stacks are available [5 stacks = instant-like 1 s cast]; (2) Fire Blast if available; (3) Fireball. "Scorch to extend ignite can be worth doing but depends on a lot of variables."
- Fire Vulnerability: keep 5 stacks; since 1.18.0 Fire Blast also applies it, so the 3-Scorch opener plus Fire Blasts maintain it. Pre-1.18.0 complaint: "5 stacks for 1 fire mage is way too much to stack up" [Bahamutxd, 2024-11-30](https://forum.turtlecraft.gg/viewtopic.php?p=110663#p110663) — superseded.
- Hot Streak timing: with 4 stacks and a Fireball in flight, a crit on both the flying and the next Fireball wastes a stack because of the ~1 s flight time ([Rethon, 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108772#p108772), written for 9 stacks) — bots should fire Pyroblast at 5 stacks before casting another Fireball.
- Pre-1.18.1 caveat now superseded: "currently Fire Blast isn't part of the rotation unless you have a fully stacked Pyroblast ready" [Eluaria, 2026-02-11](https://forum.turtlecraft.gg/viewtopic.php?p=167923#p167923) (Fire Blast's GCD dropped Ignite); after 1.18.1 the wiki rotation uses Fire Blast on cooldown.
- Ignite threat: pre-1.17.2 advice "if you're about to steal aggro due to your Ignite ticks kill it asap with a rank 1 Frost Bolt" [Sauceman89, 2024-03-28](https://forum.turtlecraft.gg/viewtopic.php?p=91574#p91574); staff split Ignite threat among contributing mages in 1.17.2 precisely so mages "no longer requir[e] to stop their spells to avoid Ignite reaching critical threat values" — still, a lone Fire mage owns the whole Ignite.
- Movement: Fire Blast, Scorch (wiki opener), and "When I raid as a Fire Mage, I'm constantly slipping in a cheeky Scorch onto Trash mobs when there's not enough time for a Fireball" (player in a druid-forum thread, cross-forum sweep; author/date not captured — low weight).
- Fireball rank: Rank 12 (level 60 book) 295 mana (Torta 2025-03-30).

## Multi-target / AoE rotation

- Staff acknowledge Fire's AoE lags: Flamestrike 2.5 s cast and Blast Wave 30 s were buffed "to make them more desirable" ([Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159)).
- Player practice: "spamming Arcane Explossion is the best in evey scenario no matter the spec" [Bahamutxd, 2025-06-08](https://forum.turtlecraft.gg/viewtopic.php?p=134745#p134745). No Fire-specific AoE priority for raids exists in the sources (**gap**); the leveling HC Fire-AoE loop is: Flamestrike (lower rank) → Flamestrike (max rank) → Frost Nova → Blast Wave → repeat, "Flamestrike dot stacks only from different ranks" [Mativh, 2023-11-06](https://forum.turtlecraft.gg/viewtopic.php?p=76091#p76091) (pre-rework). The wiki lists the addon Flamestriker to "Rotate FS ranks for overlapping ground effect damage" (Mage General FAQ).
- Flamestrike in dungeons is disliked: "flamestrike is an agro magnet" [Joras333, 2024-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=83397#p83397); "As a tank I always want to move mobs and party away from zone of burning ground" [Xudo, 2024-01-02](https://forum.turtlecraft.gg/viewtopic.php?p=83404#p83404).
- Trash gear: 3-piece Frost/Fire T3.5 + 3-piece Arcane (Mirror Magic +20% Fire on rewind, triggered by Flamestrike/Blast Wave/Cone of Cold/Frost Nova/Arcane Explosion after the 1.18.1 fix) (wiki Arcane FAQ; 1.18.1 notes).
- 2–3 targets vs 4+: not specified anywhere (**gap**).

## Cooldowns and resources

- **Combustion**, **Blast Wave** (30 s), **Presence of Mind** if taken (not in the wiki path), **Evocation**, mana gems, tea.
- Mana: Master of Elements 45% base-mana refund on crits; Fireball/Flamestrike costs cut 2025-04-01; Arcane Concentration 5/5 in the wiki path. "1000 mana every 2 minutes [tea] isn't enough to sustain a fire mage who doesn't have arcane talents" (Forbearance above).
- Trinket sims (wiki, 1000 SP/40 crit/14 hit/4 haste, no cooldowns): 2-min — Scythe 1586 > Tear 1547 > Mark of the Champion 1540 > Eye of Diminution 1539 > MQG 1536 > REoS 1525; 5-min — Scythe 1661 > Tear 1613 > Mark 1610 > Eye of Dim 1606 > Shard of the Nightmare > Gulch > REoS > MQG. ("Scythe" is the Kara10 first-boss trinket players farm: "Locks 2man K10 1st boss for Scythe" [Wsta, 2025-11-09](https://forum.turtlecraft.gg/viewtopic.php?p=158984#p158984).)

## Role strategy

- Range: longest of the three specs (wiki); stay at max range, Fire Blast/Scorch when moving.
- Threat: Ignite threat is split among Fire mages (staff); with one Fire mage watch threat on the pull; Arcane Subtlety 2/2 is in the wiki path.
- Multiple Fire mages: staff design in 1.18.0 explicitly "want[s] to promote more Ignite cooperation" (Jamey 2025-07-25) — coordinate so one Ignite is kept rolling; BigWigs fork "has tools for monitoring scorch/ignite" (wiki General FAQ).
- Fire-immune bosses in MC/BWL: switch to Frostbolt/Arcane spells or swap spec (Goblin Brainwashing Device). Wsta's challenge above shows Fire is not taken to MC by most.
- Interrupt/CC: Counterspell, Polymorph, Frost Nova baseline; Impact stun is a leveling choice ([Rudyraccoon, 2023-11-02](https://forum.turtlecraft.gg/viewtopic.php?p=75490#p75490)).

## Gear, enchants and consumables

- **Pre-raid** (wiki General FAQ "Fire Mage"): Spellweaver's Turban (UBRS), Diana's Pearl Necklace, Shroud of the Nathrezim (Strat Balnazzar), Heliotrope Cloak (DM North), Shadowguard Robe (SW Vault), Sublime Wristguards, Brightspark Gloves (DM West Tsu'zee), Ban'thok Sash, Skyshroud Leggings, Fire Striders (Balnazzar), Ring of the Academy / Rune Band of Wizardry / Don Mauricio's Band, Blade of Necromancy (Scholo Kormok), Inquisitor's Orb (Strat Malor), Pyric Caduceus (BRD Loregrain), Orb of Kaladoon / Blackfire Orb, Eye of the Beast (dungeon quest, both factions). Plus the general list (Sorcerer's Regalia, Kara10 items, T1 BoE belt/bindings).
- **Sets:** regular T1/T2/T3 (Arcanist/Netherwind/Frostfire — the arcane variants got Arcane SP and haste in the 2025-01-28 retune, so Fire uses the standard ones); T2 8-set triggers on cast (itemization 2024-10-30); Frost/Fire T3.5 3-set: "Proc chance increased from 10% to 35% and replicated damage increased from 10% to 20%. Now has a 4 second cooldown" ([1.18.0 itemization changelog (staff), t20103](https://forum.turtlecraft.gg/viewtopic.php?t=20103)); players reported it broken — "When will you fix Fire Mage T3.5 3/5 set bonus?" (changelog thread 2025-12-10) and "When Fire Mage T3.5 Set fixied? You guys wrote it will be in 1.18.1 patch?" with bug-report id 18568 ([1.18.1 itemization thread](https://forum.turtlecraft.gg/viewtopic.php?t=23973)); the 1.18.1 notes state Mirror Magic "now triggers correctly" — **whether the Fire 5-set is fixed is unknown**.
- Loop of Unceasing Frost's fire-damage increase stacks with Improved Scorch (changelog 2024-12-11).
- Enchants/consumables: nothing Fire-specific in the sources beyond the generic mage list (mana tea, mana potions, Brilliant Wizard Oil). Greater Fire Protection Potion is a *counter* to Fire mages (2600 absorb, 2-min CD — [Atolius, 2025-06-07](https://forum.turtlecraft.gg/viewtopic.php?p=134628#p134628)).

## Common mistakes

1. Bringing Fire to Molten Core / BWL fire-immune bosses (Eluaria, Wsta, Zvyrhol [2024-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=90741#p90741)).
2. Casting Fire Blast while it still clipped Ignite (pre-1.18.1) — after 1.18.1 use it on cooldown (wiki, Eluaria).
3. Casting another Fireball at 5 Hot Streak stacks instead of Pyroblast (Rethon).
4. Not keeping 5 Fire Vulnerability stacks / letting Ignite fall as the solo Fire mage (staff 2025-07-25 developer comment).
5. Flamestrike under a tank who is moving the pack (Xudo) / Flamestrike aggro in dungeons (Joras333).
6. Skipping Hot Streak because it "felt like garbage" in Nov 2024 — that was the 3-point/0.5 s/9-stack version, since buffed twice.
7. Relying on tea alone for mana without Arcane Concentration / Master of Elements (Forbearance).

## Sources

| Source | Authority | Date | Era |
|---|---|---|---|
| [Dragunovi p102968](https://forum.turtlecraft.gg/viewtopic.php?p=102968#p102968) | staff | 2024-10-12 | pre-1.18.1 |
| [Jamey p108776](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776) | staff | 2024-11-20 | pre-1.18.1 |
| [Jamey p113460](https://forum.turtlecraft.gg/viewtopic.php?p=113460#p113460) | staff | 2024-12-20 | pre-1.18.1 |
| [Torta p124504](https://forum.turtlecraft.gg/viewtopic.php?p=124504#p124504) | staff | 2025-03-30 | pre-1.18.1 |
| [Jamey p141159](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) | staff | 2025-07-25 / rev. 2025-08-14 | pre-1.18.1 |
| [Jamey p166071](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) | staff | 2026-01-23 / rev. 2026-01-26 | 1.18.1-announced |
| 1.18.0 itemization [t20103](https://forum.turtlecraft.gg/viewtopic.php?t=20103); 1.18.1 notes [p154168](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168) | staff | 2025 | pre/announced |
| Weekly changelogs (2024-03-06, 2024-09-04, 2024-12-04, 2024-12-11, 2025-02-19, 2025-10-22) | staff | as dated | pre-1.18.1 |
| [Mage Fire FAQ](https://turtle-wow.fandom.com/wiki/Mage_Fire_FAQ), [Mage General FAQ](https://turtle-wow.fandom.com/wiki/Mage_General_FAQ), [Mage Levelling FAQ](https://turtle-wow.fandom.com/wiki/Mage_Levelling_FAQ) | wiki (community) | rev. 2026-03-04 / 2026-09-09 / 2025-10-01 | — |
| Eluaria p160732, p167347, p167923, p171409 | player | 2025-11 → 2026-03 | both |
| Cheruscan p158193, p167406 | player | 2025-11, 2026-02 | 1.18.1-announced |
| Bahamutxd p107097/p107181/p110663/p134745; Forbearance p107195/p107208; Xudo p107199/p83404; Rethon p108772; Trojjie1 p107088; Darktifa p107081/p75350; Sauceman89 p91574; Akos1896 p91576; Erhog p82178; Bigsmerf p122817; Zvyrhol p90741; Wsta p171412/p158984; Joras333 p83397; Mativh p76091; Atolius p134628; Rudyraccoon p75490; Perkamov p161504 | players | 2023–2026 | as dated |

Agreement: standing — contested (viable/competitive vs. needs coordination); rotation — single source (wiki) with corroborating player remarks; stat weights — single source (wiki sim); build — single source (wiki), raid build image not extractable.
