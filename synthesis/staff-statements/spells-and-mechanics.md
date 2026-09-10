# Staff statements — Spells and mechanics

Verbatim statements by Turtle WoW staff (forum rank "Turtle WoW Team") about intended behavior and the reasoning behind it, drawn from `structured/forum/posts/*.jsonl`. Machine-readable form: `structured/staff-statements.jsonl`. Index and cross-cutting notes: [staff-statements.md](../staff-statements.md).

26 statements. Every quote is copied verbatim from the cited post; every link is the `url` field of that post.

## Statements

#### 2019-10-27 — Dynamic mount speed

> All mounts now have dynamic speed, the speed will adapt along with your riding skill. Now you can use level 1 or level 40 mounts at 100% speed if you have 150 Riding skill

Clarifies: All mounts use dynamic speed scaled by riding skill (and by level for level-1 mounts), so any mount can be ridden at full speed with 150 riding.

[Torta (staff), 2019-10-27](https://forum.turtlecraft.gg/viewtopic.php?p=4332#p4332) · kind: `intent` · era: **pre-1.18.1** · topic: "Riding Skill and Mounts from Donation"

#### 2021-06-15 — Custom spell cast times

> Casting time for custom spells (WH, Brainwashing, Planter) will stay, I always wanted to set them but without having a client updates we had certain limitations. It's now working as intended.

Clarifies: Cast times added to custom spells (Wormhole, Brainwashing Device, Planter) are intended and were only possible once client updates existed; the same-account mail delay change was reverted to 1 minute.

[Torta (staff), 2021-06-15](https://forum.turtlecraft.gg/viewtopic.php?p=10900#p10900) · kind: `working-as-intended` · era: **pre-1.18.1** · topic: "Revert the New Changes"

#### 2021-06-16 — Melee leeway

> The melee leeway feature indeed has issues, it's not intended to work as it is now.

Clarifies: Melee leeway is confirmed buggy and not working as intended.

[Torta (staff), 2021-06-16](https://forum.turtlecraft.gg/viewtopic.php?p=10918#p10918) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "Concern about Melee Leeway"

#### 2021-11-18 — Blessings/totems stacking

> We're aware of this "bug" ... retail/classic never had Shamans and Paladins being able to group up and thus it was never balanced around these buffs stacking ... For now, it will not be altered.

Clarifies: The blessing/totem conflict is not treated as a bug: retail vanilla never had shamans and paladins in one group so the buffs were never balanced to stack; behaviour deliberately left unchanged pending the class changes. Later reversed by the 2022 world-buff/stacking poll.

[Jamey (staff), 2021-11-18](https://forum.turtlecraft.gg/viewtopic.php?p=13972#p13972) · kind: `working-as-intended` · era: **pre-1.18.1** · topic: "PLEASE Fix the Blessings/Totems Buff Conflict Bug"

Superseded by: [Torta (staff), 2022-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=25235#p25235) — staff put totem/blessing stacking to a community poll and shipped the change.

#### 2022-09-17 — World buffs

> Removal of world buffs reduces the overall power creep that is attained by the players where it matters most: The raids ... +18% Spell Crit, +10% Melee Crit, 340 Attack Power, +10 Mana every 5 seconds, +15 Flat, and 15% increase to All Stats, +300 Health equal to 30 Stamina, +15% Melee Attack Speed and +10% Movement Speed.

Clarifies: Community poll on removing world buffs inside raids and letting totems+blessings stack; staff lists the exact power the buffs give and says the two changes must be made together.

[Torta (staff), 2022-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=25235#p25235) · kind: `reasoning` · era: **pre-1.18.1** · topic: "World Buffs & Cross-faction Stacking Rules"

#### 2022-09-17 — World buffs

> the application of these things separately will cause a massive power influx in both ways depending on the change, which made it necessary for us to do them at the same time or not at all.

Clarifies: World-buff removal and totem/blessing stacking were bundled deliberately to avoid a one-sided power swing.

[Torta (staff), 2022-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=25243#p25243) · kind: `reasoning` · era: **pre-1.18.1** · topic: "World Buffs & Cross-faction Stacking Rules"

#### 2022-09-19 — World buffs

> the announcement states that world buffs would still affect characters in the open world, but they wouldn't work inside the raids.

Clarifies: World buffs would continue to work in the open world; only raid instances would strip them.

[Torta (staff), 2022-09-19](https://forum.turtlecraft.gg/viewtopic.php?p=25524#p25524) · kind: `intent` · era: **pre-1.18.1** · topic: "World Buffs & Cross-faction Stacking Rules"

#### 2022-10-18 — Periodic aura bug

> Fixed an ancient bug that caused permanent periodic damage auras on creatures, like the disease cloud on abominations, to start ticking faster and faster over time, eventually one-shotting players that go near the creature if server is online long enough.

Clarifies: Long-standing emulator bug fixed: permanent periodic damage auras on creatures accelerated with server uptime until they one-shot nearby players.

[Torta (staff), 2022-10-18](https://forum.turtlecraft.gg/viewtopic.php?p=27514#p27514) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "2022 — October 19"

#### 2022-11-11 — Turtle mount swim speed

> Turtle mount swimming speed is no longer affected by riding skills. It's half of the mount speed by level.

Clarifies: Turtle mount swim speed is independent of riding skill and equals half the mount's level-based speed.

[Torta (staff), 2022-11-11](https://forum.turtlecraft.gg/viewtopic.php?p=28982#p28982) · kind: `working-as-intended` · era: **pre-1.18.1** · topic: "2022 — November 11"

#### 2022-12-13 — Line of sight for chained spells

> Chain Lightning can now jump to targets not in the caster's line of sight, but within line of sight of another target. Grounding Totem will now work even if the caster or victim are not in line of sight.

Clarifies: Chain Lightning may jump to targets out of the caster's line of sight if they are in line of sight of another target; Grounding Totem works regardless of line of sight.

[Torta (staff), 2022-12-13](https://forum.turtlecraft.gg/viewtopic.php?p=30582#p30582) · kind: `intent` · era: **pre-1.18.1** · topic: "2022 — December 13"

#### 2023-02-19 — Debuff limit

> The debuff limit was increased from 24 to 64. You will not see them all under your enemy frame, but they're there server-side.

Clarifies: The debuff limit was raised from 24 to 64 server-side (the client frame still shows fewer).

[Torta (staff), 2023-02-19](https://forum.turtlecraft.gg/viewtopic.php?p=35264#p35264) · kind: `intent` · era: **pre-1.18.1** · topic: "2023 — February 20"

#### 2023-02-19 — World buffs in raids

> The following world buffs will no longer work in the raids, not in the existing ones, nor in the upcoming raiding content. The list of presently affected maps: Naxxramas, AQ40, AQ20, Zul'Gurub, Blackwing Lair, and Molten Core.

Clarifies: World buffs disabled in Naxxramas, AQ40, AQ20, Zul'Gurub, Blackwing Lair and Molten Core, and in all future raid content.

[Torta (staff), 2023-02-19](https://forum.turtlecraft.gg/viewtopic.php?p=35264#p35264) · kind: `intent` · era: **pre-1.18.1** · topic: "2023 — February 20"

#### 2023-02-20 — World buffs in raids

> they massively restrict our ability to rebalance classes and change/add/remove spells. As world buffs impact different classes differently, they're a balancing nightmare. If we nolonger need to consider them, we are able to be much more flexible in our approaches to balancing.

Clarifies: Beyond the community vote, world buffs were removed from raids because they scale differently per class and block class rebalancing.

[Akalix (staff), 2023-02-20](https://forum.turtlecraft.gg/viewtopic.php?p=35487#p35487) · kind: `reasoning` · era: **pre-1.18.1** · topic: "2023 — February 20"

#### 2023-02-27 — World buffs in raids

> Disabled world buffs in Onyxia's Lair (oversight of the previous update).

Clarifies: World buffs were left enabled in Onyxia's Lair by oversight and were disabled a week later; pets also had world buffs stripped on raid entry.

[Torta (staff), 2023-02-27](https://forum.turtlecraft.gg/viewtopic.php?p=36265#p36265) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "2023 — February 27"

#### 2023-03-08 — Stat stacking exploits

> Fixed an exploit that allowed stacking weapon stats through disarm effects ... Fixed an exploit that allowed players to stack ranged attack speed through quivers.

Clarifies: Two stat-stacking exploits fixed: weapon stats stacked via disarm effects, and ranged attack speed stacked via quivers.

[Jamey (staff), 2023-03-08](https://forum.turtlecraft.gg/viewtopic.php?p=37124#p37124) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "2023 — March 8"

#### 2023-04-08 — Mounts in water

> You will now no longer dismount when mounted in water, this goes for ALL mounts. (Their swimming speeds are unchanged) ... Hardcore players will no longer be flagged for PvP when accepting a PvP quest.

Clarifies: All mounts stay mounted in water (swim speeds unchanged); hardcore players are no longer PvP-flagged by accepting a PvP quest.

[Torta (staff), 2023-04-08](https://forum.turtlecraft.gg/viewtopic.php?p=40776#p40776) · kind: `intent` · era: **pre-1.18.1** · topic: "2023 — April 8"

#### 2023-05-17 — Miss/resist caps

> The level based miss chance cap and spell resist cap now only applies to players.

Clarifies: The level-based miss chance cap and spell resist cap now apply only to players, not creatures.

[Torta (staff), 2023-05-17](https://forum.turtlecraft.gg/viewtopic.php?p=46277#p46277) · kind: `intent` · era: **pre-1.18.1** · topic: "2023 — May 16"

#### 2023-07-11 — Reputation and threat rules

> All reputation gains now give 100% of their intended value, regardless of the level difference between your character and the quest/mob. Power gains of Rage/Energy/Mana (procs, energize ticks, potion use, etc) now properly generate threat as intended. Melee spells will now put you in combat even if they are dodged, parried, or blocked.

Clarifies: Reputation gains no longer scale down with level difference; Rage/Energy/Mana gains generate threat; melee spells put you in combat even when dodged, parried or blocked.

[Torta (staff), 2023-07-11](https://forum.turtlecraft.gg/viewtopic.php?p=53097#p53097) · kind: `intent` · era: **pre-1.18.1** · topic: "2023 — July 12"

#### 2023-11-03 — Frontstabbing

> our reason to change the behavior of the item isn't simply "bug needs fixing". (We have frontstabbing for a reason)

Clarifies: Frontstabbing is deliberately kept as a Turtle deviation, cited as proof the team does not fix every vanilla deviation reflexively.

[Jamey (staff), 2023-11-03](https://forum.turtlecraft.gg/viewtopic.php?p=75613#p75613) · kind: `working-as-intended` · era: **pre-1.18.1** · topic: "Regarding Goblin Brainwashing Device"

#### 2024-01-30 — Meditation stacking

> Fixed issues related to the Meditation stat not stacking with similar mana regeneration in combat talents.

Clarifies: Meditation now stacks correctly with other in-combat mana regeneration talents.

[Akalix (staff), 2024-01-30](https://forum.turtlecraft.gg/viewtopic.php?p=86423#p86423) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "2024 — January 31"

#### 2024-06-11 — Dual-wield attack timing

> Removed the 200 ms delay between main hand and of

Clarifies: The 200 ms delay between main-hand and off-hand swings was removed.

[Torta (staff), 2024-06-11](https://forum.turtlecraft.gg/viewtopic.php?p=96794#p96794) · kind: `intent` · era: **pre-1.18.1** · topic: "2024 — June 12"

#### 2024-06-25 — Attack power reduction

> The root of the issue was that on specific OS and compiler versions, the code responsible for reducing Attack Power behaved differently, resulting in inconsistent behavior and making it difficult to track and fix the problem.

Clarifies: All attack-power reduction spells now correctly reduce NPC attack power; the root cause was OS/compiler-dependent behaviour that made it unreproducible in test environments.

[Torta (staff), 2024-06-25](https://forum.turtlecraft.gg/viewtopic.php?p=97844#p97844) · kind: `bug-confirmed` · era: **pre-1.18.1** · topic: "2024 — June 26"

#### 2024-09-17 — Charge

> Charging now brings you to the outer edge of the target's combat range, rather than to the center of the unit.

Clarifies: Charge now stops at the outer edge of the target's combat range instead of the unit's centre.

[Reynolds (staff), 2024-09-17](https://forum.turtlecraft.gg/viewtopic.php?p=101418#p101418) · kind: `intent` · era: **pre-1.18.1** · topic: "2024 — September 18"

#### 2025-02-11 — NPC scaling after class changes

> NPCs in the mid-to-endgame (level 10 ~57) will be receiving a minor buff to damage and health values, these will range from 4-7% depending on their current values compared to the standard.

Clarifies: Because Class Changes 2 raised player power, level 10-57 NPCs get a 4-7% damage and health buff; a new BG queue system targets ghost queuing and team imbalance, rolled out on Tel'Abim first.

[Torta (staff), 2025-02-11](https://forum.turtlecraft.gg/viewtopic.php?p=119660#p119660) · kind: `intent` · era: **pre-1.18.1** · topic: "2025 — February 12"

#### 2025-07-25 — Armor damage reduction cap

> Physical Damage Reduction from Armor is no longer capped at 75%. The extra reduction gained from Armor beyond this point will be diminished ... some classes and specializations are running into the issue of getting hard-capped by Armor. This severly limits their possible build paths.

Clarifies: For 1.18.0 the 75% physical damage reduction cap from armor is removed and replaced with diminishing returns beyond 75%, because the hard cap was closing off build paths.

[Jamey (staff), 2025-07-25](https://forum.turtlecraft.gg/viewtopic.php?p=141159#p141159) · kind: `intent` · era: **pre-1.18.1** · topic: "Patch 1.17.2 & Beyond — Class & Gameplay Changes"

#### 2026-01-23 — Relic swapping

> Swapping Librams, Totems and Idols in combat now properly incurs a GCD. Developer Comment: This was an ongoing quirk that was being (ab)used.

Clarifies: Swapping Librams, Totems and Idols in combat now incurs a GCD; the previous behaviour was a quirk being abused, and the fix was elevated to a class-changes cycle because of its impact.

[Jamey (staff), 2026-01-23](https://forum.turtlecraft.gg/viewtopic.php?p=166071#p166071) · kind: `bug-confirmed` · era: **1.18.1-announced-pre-release** · topic: "Patch 1.17.2 & Beyond — Class & Gameplay Changes"
