# Priest — Shadow ranged DPS (PvE)

Era markers as in `holy-healer.md`. Note that the only long-form Shadow PvE guide on the forum dates from **2019** (pre-Turtle class changes); everything Turtle-specific comes from discussion threads.

## Overview

- **Role**: single-target caster DPS that heals its party (Vampiric Embrace), returns mana (Vampiric Touch talent) and amplifies Shadow damage (Shadow Weaving). Staff design statement: "We're quite happy with the current design of Shadow and its support capabilities as a Shadow damage dealer enhancer and mana battery via Vampiric Embrace" — [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102970#p102970).
- **Strengths**: "Doing 1k dps and 1.25k hps while regening 100 mana/s is already a great deal" — [Mendeleev (player), 2025-06-05](https://forum.turtlecraft.gg/viewtopic.php?p=134340#p134340); "In any fight with aoe damage, shadow priest is truely shining ... 0.7x the output of a dps and 0.7x % of a healers output is still well worth the raidslot" — [Atreidon (player), 2025-05-21](https://forum.turtlecraft.gg/viewtopic.php?p=132287#p132287); "Shadow priest dmg is insane if you take the group healing and mana into account, it trivializes many K40 encounters" — [Cheruscan (player), 2026-01-05](https://forum.turtlecraft.gg/viewtopic.php?p=164445#p164445). Mana: "shadow priest on TWOW plays a lot more like a mage in classic than a shadow priest in classic ... gets better and better as you accumulate more gear" thanks to Improved Shadowform (level 60 passive: −15% Shadow mana, 15% regen while casting) — [Quidoba (player), 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73757#p73757); "it wasn't until I started over 350-400 shadow power mark where I really started to notice it ... I maybe drank 2 teas during aq40" — [Drubarrymooer (player), 2023-10-25](https://forum.turtlecraft.gg/viewtopic.php?p=73735#p73735).
- **Weaknesses** (consensus): no AoE ("The only downside to the spec is not having any aoe" — [Blackduck (player), 2023-11-30](https://forum.turtlecraft.gg/viewtopic.php?p=79349#p79349)); Mind Flay range 20 yd (24 with Shadow Reach pre-1.18.1) "ruins the dps during raid on several boss fights where you can't get close enough. such as Zeliek, Heigan, Kel thuzad" — [basednoob (player), 2025-04-26](https://forum.turtlecraft.gg/viewtopic.php?p=128538#p128538); no pushback protection except Power Word: Shield — [Grizb37 (player), 2026-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=172720#p172720); very high threat (see Role strategy); tier set bonuses considered useless (see Gear); falls behind mages/warlocks at high gear ("At high end gear, shadow priests begin to fall behind. At high end gear, smite spec actually out damages shadow spec" — Quidoba 2023-10-25).
- **Content**: raids ("Most guilds will want or be fine with at least one shadow priest in the raid all the way up to naxx" — Blackduck 2023-11-30; "currently guilds do mainly just have the token shadowpriest to increase shadow damage for the warlocks" — [Eskayrogue (player), 2026-03-27](https://forum.turtlecraft.gg/viewtopic.php?p=172706#p172706)); 5-mans (VE keeps groups alive); leveling from ~40 (see `leveling.md`).
- **Community standing**: **alternative/utility DPS**, contested between "more than viable" ([Bigsmerf (player), 2025-03-07](https://forum.turtlecraft.gg/viewtopic.php?p=122012#p122012)) and "worst class ... nerfed and buried" (Wiljorxp, Terrydavis, 2025). "Priests need a buff mostly shadow" threads recur from 2024 to 2026. Staff did not change Shadow's numbers in 1.18.1 beyond talent moves, Shadow Weaving rework and Fade.

## What 1.18.1 changed for Shadow (staff)

Source: [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) and its revision blocks; Darkness fix from [Torta (staff), 2025-10-03](https://forum.turtlecraft.gg/viewtopic.php?p=154168#p154168).

| Change | Detail | Bot impact |
|---|---|---|
| **Shadow Weaving** rework | "Your Shadow damage spells have a 20/40/60/80/100% chance to grant you Shadow Weaving for 10 sec. Your Shadow damage spells apply a vulnerability increasing Shadow damage taken by 3% per stack of Shadow Weaving for 15 sec. Stacks up to 5 times." Stacks live on the priest and are applied to any target hit | Keep casting between packs to carry stacks; every target you touch gets full stacks — better multi-target support |
| Improved Fade | Row 4; "Reduces the threat returned when Fade ends by 25/50%" and (rev. 2026-01-26) Fade CD −3/6 s | Real threat tool now; take 2/2 in raids if threat-capped |
| Fade baseline | −15% total threat on top of the flat amount | — |
| Shadow Reach | 2 pts, 10/20% range | one point cheaper than before |
| Improved Mana Burn | moved to row 4 | irrelevant PvE |
| Blackout / Improved Mind Blast | Blackout swapped with Improved Mind Blast (rev. 2026-01-26), then Blackout moved to Row 2 (rev. 2026-03-19) → Imp. Mind Blast is a row-1 talent | PvE builds can now take Imp. Mind Blast with the first 5 points instead of Spirit Tap |
| Spirit Tap | also triggers on Mind Blast critical strikes (rev. 2026-01-26) | Spirit Tap has raid value; player asks how to weave MB for procs — [Nuninho32 (player), 2026-03-22](https://forum.turtlecraft.gg/viewtopic.php?p=171712#p171712) (unanswered) |
| Pain Spike | CD 40 → 30 s | — |
| Darkness | fixed to increase shadow damage correctly (2025-10-03 notes) | any pre-Oct-2025 damage comparisons undervalue Darkness |
| Holy Nova | mana −~15% (rev. 2026-01-26); usable in Shadowform since CC2 with self-damage | still needs 10 Holy points |

Earlier Turtle changes still in force (for context, staff): Mind Flay 90% SP (30%/tick), Mind Blast 60% SP, Pain Spike 43% SP, VE instant again (1.18.0), Mind Blast threat 200% → 170% (1.18.0), Shadow Mend reworked (1.18.0), Vampiric Touch 2/5% heal and 1/2% mana — [Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159), [Jamey (staff), 2024-11-20](https://forum.turtlecraft.gg/viewtopic.php?p=108776#p108776), [Dragunovi (staff), 2024-10-12](https://forum.turtlecraft.gg/viewtopic.php?p=102970#p102970).

Player reception of the 1.18.1 Shadow changes was negative but PvP-focused ("shadow invulnerability is a debuff for a reason to protect your dots in pvp from dispel now its a buff" — [Nrgsa (player), 2026-01-28](https://forum.turtlecraft.gg/viewtopic.php?p=166781#p166781)); the PvE community mostly noted the lack of buffs ("Shadow? Its basically just stock 1.12 with nerfs" — [Grizb37 (player), 2025-12-11](https://forum.turtlecraft.gg/viewtopic.php?p=162508#p162508)).

## Talent build

No post-CC2 poster gives a full text allocation; they give talents.turtlecraft.gg links (opaque strings) and talent-by-talent arguments. Reconstruction below uses Turtle names; **[cited]** = named by a source for raiding, **[fill]** = prerequisite/path.

### Raid build, 1.18.1 (Shadow 36 / Discipline 15 / Holy 0)

| Tree | Talent | Pts | Basis |
|---|---|---|---|
| Shadow | Improved Mind Blast | 5/5 | [cited] "Ideally in your rotation you want to be able to cast 2 Mind Flays then a Mind blast ... I definitely think it's a bigger overall dps increase than the regen gained from Mental Agility" — [Jcarrill0 (guide writer, 2019 vanilla-era guide t=398), 2019-02-13](https://forum.turtlecraft.gg/viewtopic.php?p=2080#p2080); row 1 since 1.18.1. Alternative: Spirit Tap 5/5 (procs on MB crits since 1.18.1) — **contested**, no post-1.18.1 test |
| Shadow | Improved Shadow Word: Pain | 2/2 | [cited] "2 points in swp for the most efficient dot in the game" — [Ortogs (player), 2023-11-08](https://forum.turtlecraft.gg/viewtopic.php?p=76428#p76428) |
| Shadow | Shadow Focus | 5/5 | [cited] hit talent; PvE needs 16% total vs bosses (Heroclastus), "the one class that doesn't care about spellhit (on account of skilling 10%)" — [Kairion (player), 2023-08-29](https://forum.turtlecraft.gg/viewtopic.php?p=59777#p59777) |
| Shadow | Shadow Affinity | 0-3 | [contested] "There's absolutely no need for the 3 points in Shadow Affinity, as Silent Resolve affects spells from every school ... and you have Fade" (Jcarrill0 2019) vs "we need more than the 25% threat reduction of Shadow Affinity ... I know a few that just dropped improved VE at all, to skill into it and still have threat problems" — [Zitronenhaze (player), 2025-06-02](https://forum.turtlecraft.gg/viewtopic.php?p=133977#p133977) |
| Shadow | Mind Flay | 1/1 | [cited] core filler (all) |
| Shadow | Improved Fade | 2/2 | [fill] 1.18.1 rework makes it a threat tool; no player test yet |
| Shadow | Shadow Reach | 2/2 | [cited] Keds used 3 pts pre-1.18.1 "to get 6 yards on your MF" — [Keds (player), 2025-09-08](https://forum.turtlecraft.gg/viewtopic.php?p=150785#p150785); 2 pts in 1.18.1 |
| Shadow | Shadow Weaving | 5/5 | [cited] raid debuff; "some people are using (4/5)" pre-1.18.1 — [Keds (player), 2025-07-03](https://forum.turtlecraft.gg/viewtopic.php?p=137985#p137985); 5/5 = 100% chance in 1.18.1 |
| Shadow | Vampiric Embrace | 1/1 | [cited] |
| Shadow | Vampiric Touch | 2/2 | [cited] mana battery; Jcarrill0's 2019 reason to skip it (16 debuff slots) is obsolete: "Most of the issues shadow priests had in classic (mana, debuff limit) are resolved" — Blackduck 2023-11-30 |
| Shadow | Darkness | 5/5 | [cited] |
| Shadow | Shadowform | 1/1 | [cited] |
| Shadow | Silence | 0/1 | PvP only (Frantsel, Skattberg) |
| Discipline | Wand Specialization | 2/2 | [cited] "You will get 2 points on wands because the other 2 options doesn't get you any benefit whatsoever" — [Svercalirin (player), 2024-10-16](https://forum.turtlecraft.gg/viewtopic.php?p=103227#p103227) |
| Discipline | Silent Resolve | 5/5 | [cited] Jcarrill0 2019; Zitronenhaze 2025 "forced into disc tree second if we have gear" |
| Discipline | Improved Power Word: Fortitude | 2/2 | [cited] Svercalirin (row 2 filler) |
| Discipline | Improved Inner Fire | 2/2 | [cited] "+96 spell damage" with Inner Fire R6 — Svercalirin 2024-10-16 |
| Discipline | Meditation | 3/3 | [cited] Svercalirin ("Improved Inner Fire and Meditation or Inner Focus") |
| Discipline | Inner Focus | 1/1 | [cited] same; free Mind Blast / emergency heal |

Sum: 36 + 15 = 51. Points to move if you want Shadow Affinity 3/3: drop Improved Fade or Imp. PW:Fortitude.

Build links given by players (not decoded in text): Moongirl's 2024 PvP-ish build `talents.turtlecraft.gg/priest/50K9-0-Z22P3V8V` — [Moongirl (player), 2024-07-08](https://forum.turtlecraft.gg/viewtopic.php?p=98884#p98884); Svercalirin's Holy-secondary build `talents.turtlecraft.gg/priest?points=TArCQDAAAAAAAAAAAAAAAAAAAAAAFAaoAIANBQAoBAA%3D` — Svercalirin 2024-10-16; Jcarrill0's 2019 classicdb links (20/0/31 raid) are vanilla-era.

### Variant: Holy secondary for Spiritual Guidance (Shadow 31 / Disc 0 / Holy 20)

"The goal on this tree is to reach Spiritual Guidance for +30% spell power. This is vialbe if you have more than 384 spirit (this would give you the same amount of spell power that improved Inner Fire gives). Regardless of that, you had to spend 15 points on a tree that you don't get any benefit" — Svercalirin 2024-10-16. Measured: "Going Holy to get Spiritual Guidance in both sets, nets you between 17 to 25 MORE DPS than going DISC with ~250~ Spirit, but it's a lot more mana/threat intensive, not really sure if it's really worth it" — [Keds (player), 2025-09-11](https://forum.turtlecraft.gg/viewtopic.php?p=151267#p151267). Path (Turtle Holy): Holy Focus 2 / Improved Renew 3 / Divinity 5 (row 1, any 5), Divine Fury 5 or Spell Warding 3 + Holy Reach 2 (row 2), Holy Nova 1 (row 3, gives the only AoE, usable in Shadowform with self-damage), Spiritual Guidance 5 (row 4) = 20. **Contested / marginal**; threat rises (Zitronenhaze).

### Dungeon / leveling variant
See `leveling.md`. Jcarrill0's 2019 "14/0/37 dungeon" split is vanilla-era.

Patch validity: shape pre-1.18.1; row-1/row-2 changes (Imp MB, Blackout, Imp Fade, Shadow Reach) are 1.18.1 → `valid_for_1181: unknown` until a post-release build is posted.

## Stat priority

- Consensus: **Spell hit to cap > Spell power (shadow/general) > everything else**. "You just get 5% hit, stack spell power and more or less ignore everything else ... Given the buff of mind flay scaling, crit is probably even less important than before ... totally ignoring intell and mp5 (e.g. flarecore set) can lead to mana problems on long fights" — [Caracole (player), 2024-12-20](https://forum.turtlecraft.gg/viewtopic.php?p=113536#p113536), referencing a community spreadsheet (docs.google.com/spreadsheets/d/1F1IVqSt1MEJ9yjZ9rn1aKGIWNkJiA_CNmn6fLUpakb4).
- Hit cap: 16% vs level 63 bosses, 99% max ("For spells the maximum you can get is 99% there is always a 1% chance to miss" — [Grizb37 (player), 2024-10-10](https://forum.turtlecraft.gg/viewtopic.php?p=102861#p102861)); with Shadow Focus 10% you need **6% from gear** ("Hit (to 6% cap from gear)>Spellpower>mp5>Int>Crit>Spirit" — Jcarrill0 2019), or 5% if a druid is in the raid (+1% hit from any druid — [Bayanni (player), 2023-08-30](https://forum.turtlecraft.gg/viewtopic.php?p=59841#p59841)); Keds' T1/T2 test used "exacly 6% hit chance in gear".
- Crit: low value ("our only crittable ability is Mind Blast and has a CD" — Keds 2025-09-08); the 1.18.1 Shadow T2.5 set "focuses on critical strike chance" (staff) and players objected: "why are Shadow sets built around crit, when Shadow scaling barely benefits from crit" — [Kentorianx (player), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168308#p168308).
- Mp5/Spirit: acceptable once hit is capped — "you can itemize for some mp5 and even spirit (you can get 30% regen while casting due to improved shadow form + talents)" — Quidoba 2023-10-25.
- Spell power → DPS (2019 math, coefficients since changed): 0.41–0.57 DPS per SP — [Jcarrill0, 2019-02-13](https://forum.turtlecraft.gg/viewtopic.php?p=2083#p2083) (vanilla-era, outdated coefficients).
- Resistance: KT has 100 shadow resistance; spell penetration pieces were valued for him — [Blackduck3 (player), 2024-10-30](https://forum.turtlecraft.gg/viewtopic.php?p=105284#p105284).

## Single-target rotation

Opener (boss): Shadowform up, Inner Fire up, Power Word: Shield on self if pushback expected → `Vampiric Embrace` (instant since 1.18.0; "It's only ever cast on bosses....if that" pre-1.18.0 — [Drubarrymooer (player), 2025-06-23](https://forum.turtlecraft.gg/viewtopic.php?p=136769#p136769)) → `Shadow Word: Pain` → `Mind Blast` → `Mind Flay` ...

Priority (consensus, Jcarrill0 2019 + Keds 2025 + Nemetth1 2025):
1. `Shadow Word: Pain` if not on target or < 3 s remaining ("Refresh SW:P as soon as it ends" — Jcarrill0).
2. `Vampiric Embrace` if missing on a target expected to live > ~15 s (bosses always; trash rarely — "in trash groups I avoid now using VE" — [Ankerdankerf (player), 2024-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=106217#p106217), written under the 1.5-s-cast version; 1.18.0 made it instant again).
3. `Mind Blast` when off cooldown **and** threat allows ("mind flay + swp + mind flay ad infinitum + swp (and maybe a mind blast if you don't care about aggro)" — [Nemetth1 (player), 2025-09-14](https://forum.turtlecraft.gg/viewtopic.php?p=151635#p151635)). With T1 5-set (+1 s Mind Flay) "you can use 2 MF + 1 MB, but it's a DPS LOSS since MB is the most damaging ability" unless you take Improved Mind Blast — Keds 2025-09-08.
4. `Mind Flay` filler (channel to completion; re-cast immediately; spammable macro: `/run if pfUI.castbar.player:GetAlpha() ~= 1 then CastSpellByName("Mind Flay") end` — [Drubarrymooer (player), 2024-02-16](https://forum.turtlecraft.gg/viewtopic.php?p=87954#p87954)).
5. `Pain Spike` (30 s CD): optional burst / execute; PvE value low ("mediocre dmg that all gets healed back", but "As someone who avidly uses it to get last hits off and proc spirit tap, I can say it performs quite well at its job" — [Drubarrymooer (player), 2025-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=124833#p124833)). Use when the target will die within 5 s.
6. Undead: `Devouring Plague` once per fight (3 min CD) — small DPS gain, "very mana expensive" — [Terexin (player), 2025-04-26](https://forum.turtlecraft.gg/viewtopic.php?p=128539#p128539); mostly skipped in PvE — [Drubarrymooer (player), 2025-03-18](https://forum.turtlecraft.gg/viewtopic.php?p=122839#p122839).
7. Low mana: "skip MB and just use SW:P and MF. If you're oom, just use MF when you can to keep up your debuff for the warlocks" (Jcarrill0).
8. Melee weaving between Mind Flays (optional, contested): "Mind Flay lasts 3 seconds and after it stops casting, you are able to automatically deal melee dmg ... top shadow priests use this technique" plus Seal of Wisdom procs — [Zvyrhol (player), 2023-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=79666#p79666); measured at a dummy as ~3% DPS, "doesnt seem to be worth it" — [Chyk (player), 2023-12-02](https://forum.turtlecraft.gg/viewtopic.php?p=79668#p79668).

Keep 5 stacks of Shadow Weaving on the boss (pre-1.18.1: on the target; post-1.18.1: on yourself, applied on hit).

## Multi-target / AoE

- 2-3 targets: multi-dot `Shadow Word: Pain` (tab, SW:P, tab, SW:P), then Mind Flay the kill target. "Shadow word pain can be multidoted. This is shadows cleave" — [Kairion (player), 2023-02-26](https://forum.turtlecraft.gg/viewtopic.php?p=36140#p36140). Counter-view: "multydotting is very expensive mana wise, while also being very little effective since things dies too quickly" — [Keds (player), 2025-07-07](https://forum.turtlecraft.gg/viewtopic.php?p=138358#p138358).
- 4+ targets: no native AoE. Options: (a) `Holy Nova` in Shadowform (self-damage instead of self-heal; needs 10 Holy points) — most players judge it not worth the points ("Holy nova isn't 'good aoe', it's like a discount arcane explosion" — [Ashton007 (player), 2025-07-07](https://forum.turtlecraft.gg/viewtopic.php?p=138360#p138360)); (b) shield casters and DPS priority targets instead ("all I can really do is shield other casters" — [Murfo (player), 2026-02-01](https://forum.turtlecraft.gg/viewtopic.php?p=167122#p167122)); (c) on long-lived packs, VE + SW:P on the first mob for group healing (Ankerdankerf's pre-nerf routine).
- AoE threshold for bots: **3** targets → multi-dot; **4+** → single-target the skull and support; Holy Nova only if specced.
- Post-1.18.1 Shadow Weaving stacks carry between packs (staff), so keep casting on any target to maintain them.

## Cooldowns and resources

- `Inner Focus` (3 min, Disc): free Mind Blast or emergency Greater Heal out of form.
- `Vampiric Embrace`: on every boss; **never on Nefarian** ("During priest class calls, you can kill your whole group because you are healing them with VE" — Jcarrill0 2019, vanilla mechanic still in Turtle's BWL); "seems to be buggy when you have multiple shadow priests" — basednoob 2025-04-26.
- `Fade` when threat meter is near the tank; 1.18.1 makes it −15% total + Improved Fade keeps 25/50% of it.
- Mana: "Pop a Demonic Rune as soon as you have ~1500 mana from your max. After that, use a Major Mana Potion when you are ~2500 mana from your max. Continue using these on CD" (Jcarrill0 2019). Turtle-specific: Nordanaar Herbal Tea (61675) "helps you sustain yourself in pve much better" — [Atreidon (player), 2024-07-08](https://forum.turtlecraft.gg/viewtopic.php?p=98901#p98901); tea and runes share a cooldown (Langorn, healer guide).
- Racials: Troll Berserking for burst/faster casts ([Springboards (player), 2025-05-27](https://forum.turtlecraft.gg/viewtopic.php?p=133139#p133139)); Human Desperate Prayer; Dwarf Avatar on tank; Undead DP as above.
- `Shadow Mend` (1.18.0 rework: 1.5 s, 270 mana, 759-896 + 20% shadow SP, not self, costs the caster 50% of effective healing): "I just wanted to come back here and say how happy I am with the new shadow mend changes!" — [Glaive (player), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141300#p141300) (single source; pre-rework consensus was "not worth using").

## Role strategy

- **Threat is the defining constraint.** "Mind Blast has a 200% Threat Multiplier [170% since 1.18.0] ... 100% of the dmg dealt + 150% of the dmg dealt in healing + 10% of dmg in mana reg = 260% per dmg ... Like i am in half Blues ... and full t3 tanks with thunderfury struggle to stay above me" — [Zitronenhaze (player), 2025-05-31](https://forum.turtlecraft.gg/viewtopic.php?p=133782#p133782); "Fade is a temporary reduction in threat. After fade fades away, the threat immediately comes back" (pre-1.18.1) — [Drubarrymooer (player), 2025-06-02](https://forum.turtlecraft.gg/viewtopic.php?p=133959#p133959). Rules: delay Mind Blast on pull; run a threat meter; Silent Resolve + T1 3-set −15% threat; take Improved Fade post-1.18.1.
- "Even if your raid leader says 'hold dps at the start,' they generally aren't referring to you unless you way outgear your tank or you aren't specced into threat reduction" (Jcarrill0 2019) — **superseded** by the 2025 threat complaints above; bots should hold Mind Blast for the first ~10 s.
- Mind Flay 20-yd base range (24 with 2/2 Shadow Reach post-1.18.1): stand at 20 yd, not max range; some bosses force Mind Blast/SW:P only (basednoob). Mind Flay can misfire on friendly totems (basednoob).
- Pushback: shield yourself before AoE phases ("as shadow you've got to cast PW:S and burn your mana just to have pushback protection" — Grizb37 2026-03-27); Blessed Concentration is reachable in Disc row 2 since 2025-04-01 (staff).
- Shielding others is affordable: "you have so much mana as a shadow priest you can afford to bubble your comrades without going oom. Sartura and Cthun are both good fight" — [Blackduck (player), 2023-11-01](https://forum.turtlecraft.gg/viewtopic.php?p=75328#p75328).
- Off-healing: drop Shadowform and heal properly rather than Shadow Mend (Atreidon 2024-07-08, pre-rework); Flash Heal macro that leaves form: Meridaw Vanilla-Macros Shadowform.md — [Ibux (player), 2024-09-03](https://forum.turtlecraft.gg/viewtopic.php?p=100553#p100553).
- **Caster-tanking niche**: "I've used MB to tank twin emps ... I have a separate spec for twins tanking" — [Drubarrymooer (player), 2025-06-02](https://forum.turtlecraft.gg/viewtopic.php?p=133985#p133985); routine: "run over to the caster side, cast VE and SWP, then run back ... When the teleport happens, pain spike for a 2nd tick of shadow weaving, then mindblast for threat" — [Drubarrymooer (player), 2025-04-01](https://forum.turtlecraft.gg/viewtopic.php?p=124833#p124833); "melee weaving works quite well while tanking - you can tank a lot of bosses as a Shadow Priest with the right gear" — [Mcpewpew (player), 2024-05-09](https://forum.turtlecraft.gg/viewtopic.php?p=94434#p94434). No full tank playbook exists (gap).
- Interrupts: `Silence` only if talented (PvP builds). Shackle Undead for CC; mark macro `/cast Shackle Undead(Rank 3)` + `/run SetRaidTarget("target", 6)` — Drubarrymooer 2024-02-16.

## Gear, enchants and consumables

- Philosophy: SP + hit, ignore set bonuses. "your BIS item list, at least where we are at South Seas phase, it's about the same as Classic, besides the neck/waist" — Keds 2025-09-11 (tests: full T1 with Imp MB 0/5 ≈ full T2 with Imp MB 4/5; Bracers of Arcane Accuracy + Sash of Whispered Secrets + rest T2 +1-20 DPS).
- Pre-raid: "farm ZG as often as possible, it has three different 2nd bis" and Kara10 "has a good 29 sp blue belt" — [Caracole (player), 2024-12-22](https://forum.turtlecraft.gg/viewtopic.php?p=113861#p113861); Black Morass Nightwind Leggings — [Akos1896 (player), 2024-07-08](https://forum.turtlecraft.gg/viewtopic.php?p=98897#p98897) (but "do not go to black morass" in greens — Atreidon 2024-07-08); AH route: "2 of the bloodvine, some shadow wrath, some boe blues with good caster stats, and you have more than enough to get into bwl and even AQ40... assuming you flask" — [amanagor (player), 2024-12-23](https://forum.turtlecraft.gg/viewtopic.php?p=113978#p113978). Bloodvine set was nerfed in 1.17 (hit moved to raid gear) — [Noephix (player), 2023-08-29](https://forum.turtlecraft.gg/viewtopic.php?p=59726#p59726) vs staff intent explained by [Redmagejoe (player), 2023-08-30](https://forum.turtlecraft.gg/viewtopic.php?p=59843#p59843). Band of Servitude buffed to 27 SP "for specializations that require a lot of spell hit such as Arcane mages and Shadow priests" — [Dragunovi (staff), 2024-05-12](https://forum.turtlecraft.gg/viewtopic.php?p=94666#p94666).
- Tier sets (Shadow T1/T2/T3 alternative sets since 2023-10 — [Dragunovi (staff), 2023-10-15](https://forum.turtlecraft.gg/viewtopic.php?p=71030#p71030)): T1 3-set −15% threat is the one valued bonus; T2 (Mana Burn +30%, VE +20 s, MB crit proc) "barely any benefit" — Keds 2025-09-08, Sharmaine 2025-09-08; T3 6-set Shadow Weaving bonus "locking it behind 6 pieces forces awful gear choices" — [Solaire0726 (player), 2025-08-01](https://forum.turtlecraft.gg/viewtopic.php?p=142440#p142440); T3 4-set no GCD (2024-11-12, timeline). 1.18.1: new Shadow T2.5 (crit-based) in AQ40 — [Dragunovi (staff), 2026-02-15](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272); "of Faith" T3 pieces changed to Shadow Spellpower (Coronet 44, Shoulderpads 29, Pants 51) — same post. Karazhan set reduces Mind Blast CD (Zitronenhaze). T3.5 "Vestments of Pestilence" praised ("great job on Tier 3.5" — [Uglypig (player), 2025-09-12](https://forum.turtlecraft.gg/viewtopic.php?p=151474#p151474)); details not in the extracted sources.
- Weapons: Benediction/Anathema requires the Holy solo quest; "I did this quest wearing mooncloth set" — [Turboman (player), 2025-08-26](https://forum.turtlecraft.gg/viewtopic.php?p=148401#p148401).
- Consumables in order of importance (Jcarrill0 2019, still available): Major Mana Potions, Demonic Runes, Brilliant Wizard Oil, Elixir of Shadow Power (1 h since 1.18.0 — [Jamey/Dragunovi itemization 1.18.0]), Greater Arcane Elixir, Mageblood, Nightfin Soup, Sagefish Delight, Elixir of Greater Intellect, Scroll of Intellect IV, Crystal Force, Scroll of Spirit IV; Flask of Supreme Power "single biggest DPS increase"; Greater Fire/Arcane Protection for Ragnaros/Shazzrah. Turtle additions: Nordanaar Herbal Tea (Atreidon). Melee-weaving extras: Shadow Oil (56% SP scaling, 10 s ICD) — [Ibux (player), 2023-02-19](https://forum.turtlecraft.gg/viewtopic.php?p=35235#p35235).

## Common mistakes (bots must avoid)

- Mind Blast on pull / with a fresh tank → ripping aggro (Zitronenhaze, Drubarrymooer).
- Casting VE on Nefarian (Jcarrill0) or on short-lived trash (Ankerdankerf).
- Standing at 30+ yd and wondering why Mind Flay fails (20-24 yd) (basednoob).
- Clipping Mind Flay to cast Mind Blast without Improved Mind Blast (Keds).
- Skipping hit gear: 6% from gear is mandatory (Jcarrill0, Keds); relying on tier set bonuses (Keds, Sharmaine).
- Using Shadow Mend instead of leaving form to heal (Atreidon, pre-1.18.0 advice).
- Casting Holy Nova in Shadowform on packs without Holy points spent (impossible) or forgetting it now damages you (staff).
- Expecting Spirit Tap without killing blows pre-1.18.1; post-1.18.1 it also procs on Mind Blast crits (staff).

## Sources

| Source | Authority | Date | Era | Used for | Agreement |
|---|---|---|---|---|---|
| [Jcarrill0 t=398](https://forum.turtlecraft.gg/viewtopic.php?p=2080#p2080) | guide writer (2019; vanilla-era coefficients) | 2019-02-13 | pre-1.18.1 | rotation skeleton, mana rules, consumables, hit cap | consensus for rotation; talents/threat superseded |
| [Zitronenhaze t=19659](https://forum.turtlecraft.gg/viewtopic.php?p=133782#p133782) | player | 2025-05-31 | pre-1.18.1 | threat math | consensus (Drubarrymooer, Carrygrant1, Ashton007, Irotos agree; Mendeleev disagrees) |
| [Keds t=21770](https://forum.turtlecraft.gg/viewtopic.php?p=151267#p151267) | player (Ambershire raider, tested) | 2025-09-11 | pre-1.18.1 | set comparisons, Holy-secondary DPS gain | single source (tested) |
| [Caracole](https://forum.turtlecraft.gg/viewtopic.php?p=113536#p113536) | player | 2024-12-20 | pre-1.18.1 | stat priority | consensus |
| [Quidoba](https://forum.turtlecraft.gg/viewtopic.php?p=73757#p73757), [Drubarrymooer](https://forum.turtlecraft.gg/viewtopic.php?p=73735#p73735), [Blackduck](https://forum.turtlecraft.gg/viewtopic.php?p=79349#p79349) | player | 2023-10/11 | pre-1.18.1 | viability, mana | consensus |
| [Svercalirin](https://forum.turtlecraft.gg/viewtopic.php?p=103227#p103227) | player | 2024-10-16 | pre-1.18.1 | secondary-tree choices | single |
| [Jamey](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) | staff | 2026-01-23 (+rev.) | announced | 1.18.1 changes | authoritative |
| [Jamey](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) | staff | 2025-07-25 | pre-1.18.1 | 1.18.0 (VE instant, MB threat, Shadow Mend) | authoritative |
| [Dragunovi](https://forum.turtlecraft.gg/viewtopic.php?p=168272#p168272) | staff | 2026-02-15 | announced | 1.18.1 sets | authoritative |
| PvE AoE debate: [Kairion](https://forum.turtlecraft.gg/viewtopic.php?p=36140#p36140), [Keds](https://forum.turtlecraft.gg/viewtopic.php?p=138358#p138358), [Ashton007](https://forum.turtlecraft.gg/viewtopic.php?p=138360#p138360), [Atreidon](https://forum.turtlecraft.gg/viewtopic.php?p=138356#p138356) | player | 2023-2025 | pre-1.18.1 | multi-target | contested |

Pre-1.18.1 advice affected by 1.18.1: Shadow Weaving as a per-target debuff (now self-buff), Blackout/Imp MB positions, Improved Fade being "unused", Fade being flat only, Shadow Reach 3 pts, Spirit Tap only on kills.
