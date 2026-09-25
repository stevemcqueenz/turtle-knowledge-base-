# Beast Mastery Hunter (pet DPS)

**Recommendation:** play the **34/17/0** build and a **Raptor** (Cat or Wind Serpent where bleeds fail). Spam **Steady Shot** between Auto Shots, weave **Arcane Shot** (or Multi-Shot on packs), and fire **Kill Command** the moment it lights up. It has no GCD, so put it in every shot macro. Use **Bestial Wrath** on cooldown. Do not take Aimed Shot, Mortal Shots or Serpent Sting. Gear for ranged AP and Agility: the pet scales on your RAP, not your crit.

| | |
|---|---|
| Role | Ranged DPS whose pet does about half the damage [[d:hunter#1486419920332787763]] |
| Viability (1.18.1) | **A (raid), S (leveling, solo), A (PvP).** The rework "surprised" the channel. In Naxx boss fights one tester placed BM rank 1 and MM rank 2, "very close results", with a KC crit of 7,153 [[d:hunter#1486419920332787763]]. Another tester in T1/epics did ~780 DPS as BM vs ~650 as MM; MM was better only on AoE packs [[d:hunter#1486051535312912394]], [[d:hunter#1486052250005671946]]. Overall consensus: Survival is still the best raid spec, and BM is "very close second or better for single target" [[d:hunter#1489032257317507102]]. |
| Difficulty | Low for the rotation ("SS spam baked in KC") [[d:hunter#1486062363688829080]]; high for pet survival in Kara40 [[d:hunter#1485925913244864676]] |
| Strengths | Huge Kill Command crits (5.5k on Broodlord) [[d:hunter#1493004500149993484]]; the pet tanks and solos while leveling; strong PvP burst |
| Weaknesses | "BM hunters only problem is how group reliant it is" — raid buffs drive pet scaling [[d:hunter#1492384227378073682]]; the pet dies to cleaves and breaths; pet crit is capped at 20%, so BM gains least from T3 [[d:hunter#1491956014462013460]], [[d:hunter#1491956069902192641]]; weak on Loatheb (the pet gets no Spore buff) [[d:hunter#1489049723296944198]] |

!!! note "What changed in 1.18.1"
    **Baited Shot is gone** ("The barbeque is over"). **Bestial Wrath is back**: 18 s enrage, 1.5 min cooldown, no GCD. The new talent **Scent of Blood** gives your attacks a 5/10/15% chance to enrage the pet for +40% damage for 8 s. **Kill Command** is the capstone: 80% of pet AP, usable after you crit, 8 s cooldown, no GCD. Endurance Training and Thick Hide were raised again. Source: [Jamey (staff), 2026-01-23, revised 2026-03-19](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071). The 1.18.0 guides (Kill Command removes pet CC, Baited Shot on crits, "Sausage Shot") are obsolete.

## How to play

The level-60 decision loop for the 34/17/0 build. Details are in the sections linked below.

1. **Opener:**
    1. Send the pet exactly as the tank hits [[d:hunter#1484689822005067816]].
    2. Hunter's Mark, then Auto Shot.
    3. Bestial Wrath together with Rapid Fire and your on-use trinkets.
2. **Single-target loop:** Auto → Steady → Arcane → Auto ([rotation](#single-target-rotation)).
    - **Kill Command** whenever it is usable and the pet is in melee range. It has no GCD, but do not cast it during a Steady Shot cast.
    - **Steady Shot** after each Auto Shot, without clipping.
    - **Arcane Shot** after Steady when it fits.
    - Never Aimed Shot or Serpent Sting.
3. **Cooldowns:**
    - Bestial Wrath on cooldown (90 s).
    - Rapid Fire (5 min) and trinkets with it.
    - Devilsaur Tooth: pre-use it, then use it again after the pet's first crit ([cooldowns](#cooldowns)).
4. **AoE switch rule:**
    - **2+ targets:** Multi-Shot replaces Arcane.
    - **3+ targets:** open with Volley. On trash packs, a Gorilla's Thunderstomp does the work ([AoE](#aoe-rotation)).
5. **Resource rule:** Aspect of the Hawk until you are low on mana, then Aspect of the Viper until the fight ends [[d:hunter#1478128745838674021]]. Drop Arcane first to save mana [[d:hunter#1489708299913003218]].
6. **Movement and situational:**
    - Arcane Shot while moving [[d:hunter#1494752221303279848]].
    - Keep the pet out of cleaves and breaths, and trained in the tier's resistances.
    - Do not revive the pet mid-fight with under ~30 s left ([pet management](#pet-management-and-threat)).
    - Pet ability bar: see [Pets](pets.md#which-abilities-to-autocast).

## Talent build

### Raid 34/17/0 (recommended)

Santa Bear posted this build after the Naxx test above [[d:hunter#1486445696617021450]]. Itron reposted it twice [[d:hunter#1487906300263268584]], [[d:hunter#1488122739251216505]]. It is the most-posted post-patch BM code.

| Tree | Talent | Points |
|---|---|---|
| Beast Mastery | Swift Aspects | 5/5 |
| Beast Mastery | Endurance Training | 3/5 |
| Beast Mastery | Improved Revive Pet | 2/2 |
| Beast Mastery | Coordinated Assault | 1/1 |
| Beast Mastery | Unleashed Fury | 5/5 |
| Beast Mastery | Bestial Discipline | 1/2 |
| Beast Mastery | Ferocity | 5/5 |
| Beast Mastery | Scent of Blood | 3/3 |
| Beast Mastery | Bestial Wrath | 1/1 |
| Beast Mastery | Bestial Precision | 2/2 |
| Beast Mastery | Spirit Bond | 2/2 |
| Beast Mastery | Frenzy | 3/5 |
| Beast Mastery | Kill Command | 1/1 |
| Marksmanship | Efficiency | 5/5 |
| Marksmanship | Lethal Shots | 5/5 |
| Marksmanship | Hawk Eye | 2/2 |
| Marksmanship | Swiftshot | 3/3 |
| Marksmanship | Endless Quiver | 2/2 |

Split **34/17/0**, validated with `talent_tool.py` (VALID). Calculator codes:
`talents.turtlecraft.gg/hunter?points=FYACBoIoZASYB-AoAoQDQ-` · `talents.turtlecraft.gg/hunter/X021V5J2F6-55CK`. [Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=5300020151053102231-05052032)

Why these points:

- **No Aimed Shot.** "Dont take aimed as BM" [[d:hunter#1488783178050306048]]. Since the Arcane Shot buff, Steady Shot lets you weave instants and is "the better choice over an aimed shot" [[d:hunter#1490968215290118215]], [[d:hunter#1490967887371046982]].
- **Endless Quiver over Mortal Shots**, confirmed by simulation [[d:hunter#1488156618527997973]]. Mortal Shots is "a trap as a BM because your pet deal half of your damage" [[d:hunter#1486441588845707435]].
- **Frenzy 3/5** gives ~90% uptime and 4/5 ~100% with a 2.0-speed pet [[d:hunter#1485002795173154877]]. The more crit you have, the fewer Frenzy points you need [[d:hunter#1492176437979910294]]. **Contested:** junabii thinks 2–3/5 is too low for good uptime [[d:hunter#1492172850885431336]].
- **Bestial Discipline** is optional. It is "a negligible increase and bm is too starved for points elsewhere" [[d:hunter#1484537789172158526]], and Endless Quiver beats 2/2 Bestial Discipline [[d:hunter#1494676102390747266]].
- **Lethal Shots**: Kill Command is only usable after you crit, so your own crit keeps it available [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071).
- **Coordinated Assault** is cheap, but its damage scales from *your* melee AP and its threat lands on you. It does 3–5% of BM damage [[d:hunter#1485122706490789920]], [[d:hunter#1489330996787544365]].

### Variants

| Variant | What changes | Code (VALID) | Source |
|---|---|---|---|
| **41/10/0 deep BM** (solo / farming) | Thick Hide 3, Bestial Discipline 2, Endurance Training 5, Frenzy 4; only Efficiency and Lethal Shots in MM | `FoAaBoQoZASgB-AoAo-` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=5500320152053102241-0505)) | Kekkonen [[d:hunter#1488784924965343272]] |
| 34/17/0 entry-raid (MC) | Endurance Training 5, Frenzy 4, Swiftshot 2 plus Aimed Shot, no Improved Revive Pet | `FoAABoAoZASgB-AoAoRCQ-` ([Open in talent calculator](https://xian55.github.io/tortoise-db-viewer/?talents=hunter&t=5500000150053102241-05052122)) | Focus, for MC with a Cat [[d:hunter#1486440847707869295]] (includes Aimed Shot, against the later consensus) |

Budget note: the tree is "extremely point heavy on the bottom". A common trade is dipping into MM (Lethal Shots) instead of maxing Frenzy [[d:hunter#1490954626953117726]], [[d:hunter#1490967495316602910]].

## Stat priority and caps

1. **Ranged hit to 8%** (7% with +5 ranged skill), as for MM [[d:hunter#1489060054354366524]], [[d:hunter#1486358400244777121]].
2. **Ranged AP and Agility.** Spirit Bond turns your RAP into pet AP (and pet spell power), so RAP gear beats crit gear for BM [[d:hunter#1488690457738219531]]. The pet gets no spell power from your gear; its only source is Spirit Bond's RAP conversion [[d:hunter#1491781102560350259]], [[d:hunter#1491781130524037310]]. 1 Agility ≈ 3.1 AP [[d:hunter#1494819577165516931]].
3. **Crit**, enough to keep Kill Command available. A crit made while KC has ≤4 s of cooldown left makes it castable as soon as the cooldown ends [[d:hunter#1490812124006711457]], [[d:hunter#1488690457738219531]]. Kill Command itself uses the **pet's** crit chance [[d:hunter#1485483224225546281]], [[d:hunter#1491170449982357644]].
4. Pet crit is capped around 20% via Spirit Bond [[d:hunter#1491956069902192641]]. About 17 Agility gives the pet 1% crit [[d:hunter#1471713498643042359]].

Before 1.18.1, players debated whether BM should gear like MM. The current reasoning above (RAP > crit) is Focus's, and no one disputed it (single source).

## Single-target rotation

Loop: **Auto → Steady → Arcane (or Multi) → Auto**, with Kill Command whenever it is ready [[d:hunter#1493031293343236346]].

Opener: call and send the pet as the tank hits [[d:hunter#1484689822005067816]]. Then Hunter's Mark and Auto Shot. Pop Bestial Wrath with your trinkets.

Priority (bot-ready):

1. **Kill Command** when usable. It has no GCD and can be cast during the Auto Shot wind-up [[d:hunter#1490812124006711457]]. It **cannot** be cast while Steady Shot is casting; that resets the wind-up [[d:hunter#1492650379727605830]], [[d:hunter#1492656625318887515]]. It stays usable for 4 s even while on cooldown, so near-100% uptime needs about one crit every 4 s [[d:hunter#1490812124006711457]], [[d:hunter#1489057648715501738]]. Only cast it if the pet is in melee range: out of range it does nothing and still triggers its cooldown (bug 20736) [[d:hunter#1484783149413171350]], [[d:hunter#1494307598269288591]].
2. **Bestial Wrath** on cooldown, lined up with trinkets and Rapid Fire.
3. **Steady Shot** after each Auto Shot, without clipping.
4. **Arcane Shot** after Steady when it fits (it scales 45% with spell power for BM) [[d:hunter#1485051440576860331]]. On 2+ targets, use **Multi-Shot** instead [[d:hunter#1493031293343236346]].
5. **Never** Serpent Sting ("serpent sting sucks") [[d:hunter#1488783178050306048]] or Aimed Shot.

One-button macro (junabii): spam it until Auto Shot is ready, let the auto fire, repeat. If KC procs during Steady, let Steady finish [[d:hunter#1493029118936219742]], [[d:hunter#1493050238653435955]].

```
/cast Kill Command
/cast Arcane Shot
/cast Steady Shot
```

Pet abilities: see [Pets](pets.md#which-abilities-to-autocast). In short: Raptor on Growl off, Bite + Savage Rend; Claw only on bleed-immune bosses. Manual control beats autocast.

## AoE rotation

- **2+ targets:** Multi-Shot replaces Arcane in the loop [[d:hunter#1493031293343236346]]. **3+ targets:** open with **Volley** (baseline, 3 s cast) [[d:hunter#1486055681734869063]].
- BM AoE is only "acceptable" [[d:hunter#1492997804157571284]]. For dungeon and trash AoE, use a **Gorilla**: Thunderstomp does AoE damage, reduces AP and adds high threat. Pre-pop Bestial Wrath or Blood Fury before it fires for a chance at a big crit [[d:hunter#1491403469498744902]]. A competitive Gorilla needs 5/5 Frenzy [[d:hunter#1494152079743389828]].

## Cooldowns

| Cooldown | Rule |
|---|---|
| Bestial Wrath | On cooldown (1.5 min); the pet "cannot be stopped unless killed" for 18 s [Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) |
| Rapid Fire | With Bestial Wrath; Juju Flurry shares its cooldown category [[d:hunter#1489794704836137140]] |
| Devilsaur Tooth | Works with Kill Command: the pet's next hit crits. Pre-use it, then use it again after the pet's first crit [[d:hunter#1492013965692108811]], [[d:hunter#1492033139961368637]] |
| Trinkets | Molten Emberstone on pull plus Blackhand's Breadth as the passive; save Blood Fury for later, since it does not stack with Emberstone [[d:hunter#1461363256064217100]], [[d:hunter#1461363355867676672]] |

## Pet management and threat

- **Pet resistances by raid** (training points): BWL fire and shadow; AQ nature; Naxx frost and shadow. Add stamina after resistances [[d:hunter#1485902382322683904]], [[d:hunter#1485902429374644265]].
- **Per-boss pet swaps** (Kaslux, one raid week): Wind Serpent for most bosses until Vek'nilash, then Raptor, then a Scorpid for Ouro and C'Thun [[d:hunter#1485818622780637266]]. On C'Thun, park a snapshotted Scorpid on the boss and kill tentacles yourself [[d:hunter#1492164599313596578]]. You cannot swap pets in combat, and there is a 1-minute lockout between swaps [[d:hunter#1474254128778711090]].
- Kara40 is the hard tier for pets ("Nx is eazy to survive, K40 is not") [[d:hunter#1485925913244864676]]. Kruul's cleave takes about half the pet's HP [[d:hunter#1444749426152444146]].
- No talent reduces pet threat, and pets cannot Feign Death [[d:hunter#1492156387860545667]]. Coordinated Assault threat goes to you [[d:hunter#1491312346742915184]].
- Healers rarely heal pets unless asked [[d:hunter#1454829088924762234]], [[d:hunter#1454831910835716302]].
- Reviving mid-fight is usually not worth it with under ~30 s left [[d:hunter#1481941619614814320]], [[d:hunter#1481941762640449638]].

Full pet guide: [Pets](pets.md).

## Gear

- **Stat sticks:** Kingsfall + Scythe of the Unseen Path is "the premier BM/MM combo even in full Kara40 BiS" [[d:hunter#1489311954748178682]]. Take Crul'shorukh + Kingsfall or Scythe "if you want pet dmg" [[d:hunter#1493590656470351895]].
- **Ranged weapon:** the same progression as MM (see [Marksmanship](marksmanship.md#ranged-weapon-progression)).
- **Tier:** 8-piece T2 is worth ~180 effective AP at ~40% proc uptime [[d:hunter#1491955541726199808]]. 6/9 T3 is still a bigger jump in raw stats [[d:hunter#1491955614241394799]]. BM gains least from T3 [[d:hunter#1491956014462013460]]. The new **Timbermaw Hold set** has a strong Agility + AP structure, "really nice for BM because pet scale on AP" [[d:hunter#1485095123892310026]].
- **Pet-damage items (Darkaco's tests):**
    - Beast Mastery chest stacks with everything.
    - Unseen Path stacks with almost everything, but needs line of sight to the pet or it spams errors [[d:hunter#1492167918568476784]].
    - Beastmaster's Boots and Charm of Dark Domination do not stack with each other.
    - **Ferra's Collar is bugged**: it cancels Unseen Path and the 3% boots/neck bonus.

    Source: [[d:hunter#1492494095661138141]].
- **T0.5** has two of the few pet-crit items in the game [[d:hunter#1452795102971035659]].
- Enchants and consumables: as [Marksmanship](marksmanship.md#enchants-per-slot), but weight RAP higher.

## Consumables

- **Self:** the MM kit ([Marksmanship](marksmanship.md#consumables-raid-kit)).
- **On the pet:** Juju Power, Juju Might, Scroll of Strength and Scroll of Agility [[d:hunter#1491073655382212830]]. Fully buffed pets reach 7–9k Kill Command crits [[d:hunter#1490806608312406098]]. **Contested:** on non-BM specs this is worth only ~0.1% DPS [[d:hunter#1481673841292869652]].

## Raid notes

| Encounter | BM note |
|---|---|
| MC | Many mobs are bleed/poison immune; take a Cat or Wind Serpent [[d:hunter#1486441211446431937]], [[d:hunter#1486443090188173382]] — [Molten Core](../../instances/molten-core.md) |
| BWL Firemaw / drakes | Keep the pet out of the raid AoE and breath (one hunter respecced to petless MM for Firemaw to be safe) [[d:hunter#1486373967160934492]], [[d:hunter#1486377747151585452]]; a feared pet on Nefarian can be knocked into cleave [[d:hunter#1484305913245335572]] — [Blackwing Lair](../../instances/blackwing-lair.md) |
| AQ40 Twin Emperors | Pet on Stay in the middle and Passive about 5 s before the teleport [[d:hunter#1468779896301162693]], or bench it and play Alone Against the World ("BIS on twin emps") [[d:hunter#1484474267071676508]]; many raid leaders ban pets here [[d:hunter#1468779095377842226]] |
| Naxx Sapphiron / Kel'Thuzad | Both can one-shot the pet. Hide it behind the ice block with Take Position [[d:hunter#1492149309926281358]], [[d:hunter#1484475363621863516]] |
| Naxx Four Horsemen | Keep the pet on one exact spot in the safe zone, and heal it there if no healer is assigned [[d:hunter#1492153108208287783]] |
| Naxx Thaddius | The pet gets no Polarity; keep it near the boss [[d:hunter#1492153238009548800]] |
| Naxx Loatheb | BM falls behind: the pet cannot get the Spore buff [[d:hunter#1489049723296944198]] |
| Kara40 | The hardest tier for pets [[d:hunter#1485925913244864676]] — [Tower of Karazhan](../../instances/tower-of-karazhan.md) |

## Common mistakes

- Taking Aimed Shot, Mortal Shots or Serpent Sting [[d:hunter#1488783178050306048]], [[d:hunter#1486441588845707435]].
- Casting Kill Command while the pet is out of melee range: it wastes the cooldown [[d:hunter#1484783149413171350]].
- Leaving Claw on autocast next to a real special ability: Claw is "obsolete on any pet that's capable of doing damage" [[d:hunter#1489371621343887422]]; Savage Rend costs the same as Bite and hits 5× harder than Claw [[d:hunter#1491441568522174545]].
- Letting the pet stand in cleaves and breaths; not training resistances [[d:hunter#1485902382322683904]].
- Stacking crit gear over RAP [[d:hunter#1488690457738219531]].
- Dismissing the pet with the spell halves its happiness [[d:hunter#1491067114516381706]]. Leave it on Stay and walk out of range instead (−10 happiness instead of −50) [Amyloriley (player), 2025-04-14](https://forum.turtlecraft.gg/viewtopic.php?p=126672#p126672).
