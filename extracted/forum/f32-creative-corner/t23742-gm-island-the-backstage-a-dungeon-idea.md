---
title: "\"GM Island - The Backstage\" a dungeon idea"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=23742"
topic_id: 23742
forum_id: 32
forum: "Creative Corner"
author: "Morkahja"
author_authority: "player"
posted: "2026-01-25T20:52:00Z"
last_post: "2026-01-30T06:00:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T10:47:18Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# "GM Island - The Backstage" a dungeon idea

## Post 166463 by Morkahja (Barrens Chat Casualty) — 2026-01-25T20:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166463#p166463 | page 1 | era: 1.18.1-announced-pre-release -->

**GM Island: The Backstage**
 1. Introduction
Far from established shipping routes, beyond places players were ever meant to reach, lies an island that was never designed as a destination. GM Island was not built to tell a story. It was built to work. This is where spells were tested, creatures instantiated, behaviors verified, and systems observed in isolation. Nothing here exists to impress. Everything exists to function.
GM Island – The Backstage reimagines this location as finished, playable level-60 five-player content while remaining faithful to its original purpose. The island is not hostile by nature, nor is it abandoned. It is orderly, intact, and quietly active. There is no quest framing, no narrative justification, and no attempt to mythologize what was always meant to be practical.
The dungeon spans the entire island, from shoreline to mansion interior, down into the subterranean archive beneath it. It does not reward speed, brute force, or memorized rotations. It rewards awareness, restraint, and the ability to recognize when systems behave exactly as designed, even when that design feels uncomfortable. Many threats are optional. Others exist only because of player choices rather than scripted obligation.
GM Island asks players to slow down, observe space, read behavior, and accept that sometimes the safest response is to do nothing. You are not meant to feel heroic here. You are meant to understand where you are.
![Image](https://i.imgur.com/mb1DVmp.png)
 2. Scenery
The approach to GM Island begins at open sea. As the island comes into view, it appears surprisingly alive. Dense trees, heavy foliage, and rich green terrain surround a clearly constructed human estate. Nothing is broken. Nothing is overgrown. The environment is lush, but contained, as if nature was allowed to exist only within boundaries that were never questioned.
The dock is intact and usable. The wood is clean, the structure sound. There are no supplies, no signs of traffic, but also no decay. It reads less like abandonment and more like an access point that was simply never advertised.
Beyond the dock, the island opens into maintained grounds. Grass is thick, trees are healthy, and paths exist where they are needed. Some paths end abruptly. Others lead confidently toward nothing of importance. NPCs and objects stand idle, not because they are unfinished, but because they are waiting for interaction. Environmental effects appear occasionally—fields, glows, visual markers—then fade again once their purpose is fulfilled.
Stone walkways lead uphill toward the mansion at the island’s center. Observation platforms are positioned nearby, structurally sound but sparsely used. Sightlines narrow gradually as elevation increases, and movement becomes more deliberate. The mansion itself is large, human, and unmistakably intentional. Its architecture is clean and familiar. Doors open without flourish. Windows glow steadily. It feels occupied, but not lived in.
Inside, rooms are spacious and quiet. Lighting is even and functional. Furniture exists only where interaction is expected. There is no decoration for atmosphere.
Below the mansion, accessed internally, the environment becomes more abstract. Stone gives way to exposed systems, archive spaces, and support structures. The space remains stable, but meaning thins. Decoration disappears. What remains is structure without presentation.
GM Island does not feel wrong.
It feels unfinished only in the sense that it was never meant to be seen.

![Image](https://cdnb.artstation.com/p/assets/images/images/079/964/729/large/cameron-holt-gm-island.jpg?1726279038)
 3. Trash Mobs
Trash mobs on GM Island do not exist in fixed packs. Pack size and composition are generated dynamically when players approach a spawn point: a stationary or slowly drifting, wisp-like magical anomaly that resolves into enemies. Each pack contains 1–4 mobs. Each slot is filled independently and at random from the available trash mob pool. No two pulls are guaranteed to be alike.

 **Placeholder Humanoids**
Appears as a generic NPC with unfinished identity. When combat begins, each resolves into a role, indicated by a quick animation — healer (blessing-animation), controller(dampen magic animation), bruiser(blood rage animation), or saboteur(evasion animation). Each role grants two randomized abilities drawn from fitting ability pools, for example the healer will pick two totally random healing abilities from all healing spells and ranks.
These mobs represent systems finalizing too late.

 **Pathing Errors**
Do not fully exist until they move, revealing a geometric creature. They are banished while standing still and act only when moving. They ignore conventional threat rules and randomly switch targets every few seconds.
They punish tunnel vision and stationary casting.

 **Memory Leaks**
Amorphous elementals formed from uncollected data. They grow larger and more aggressive, increasing size and damage the longer combat lasts.
Crowd control delays but never stops their growth.
Speed and commitment are required.
Script Runners
Small, frantic NPCs that attempt to reach nearby (imaginary) control nodes. When they arrive, they deploy a field that grants their allies a random buff from the entire buff database every 5 seconds. They are fragile but extremely high priority.
Ignoring one can completely rewrite the pull.

 **Unfinished Elites**
They are blunt instruments: high health, extreme damage, random models.
They exist to remind players that mitigation still matters.

 **Watcher Proxies**
These unheroic, small hovering constructs monitor player movement and behavior, applying stacking debuffs in response to standing still too long, unnecessary jumping, backpedaling, or erratic repositioning. They deal little direct damage. Calm, controlled, and deliberate play prevents their effects entirely.

 **Spawn Anchor**
A simple, robed tester NPC marked by warning glyphs and error text. While alive, it poses little threat, attacking only with bare hands. Killing it leaves behind a volatile Debug Portal that summons a completely random creature.

Boss Walkthrough
![Image](https://i.imgur.com/JJS14s5.png)
 4.1 Debug Construct

Location: Shoreline Test Zone (Outdoor)

The Debug Construct is the first boss players encounter, and it establishes GM Island’s rules immediately: the system is unstable, but it is not broken.
The Construct patrols the shoreline in full view. It does not guard the dock. It does not react to proximity until engaged.

The Construct casts constantly, but not all casts are real.

 **Compile Error**
A 4-second cast that behaves unpredictably. The cast is often cancelled automatically at 50%, 60%, or 80%, deliberately baiting interrupts. In some cases, the cast proceeds to completion.
If Compile Error successfully reaches 100% cast time, the Construct deals a high amount of Arcane damage to its current target and applies Compile Error to itself, reducing its cast time by 5%. This debuff stacks up to five times.
When the Construct reaches five stacks of Compile Error, it immediately triggers Desync and removes the stacks.

 **Desync**
Triggered automatically when the Debug Construct reaches five stacks of Compile Error. Desync freezes the Construct briefly and clears its threat table. While frozen, any melee attack against the Construct also freezes the attacker, who then takes periodic damage while frozen. When the freeze ends, the Construct immediately targets a new random player and resumes casting Compile Error.

 **Memory Fragment**
The Construct casts a temporary arcane barrier on itself that lasts 5 seconds and records incoming abilities. While active, it stores the next three abilities cast by three different players.
Once three abilities have been collected, the barrier collapses and the Construct releases copies of those same abilities onto three random players within the original ability’s effective range.
The abilities retain their original behavior and scale appropriately, but targets are reassigned randomly.

![Image](https://i.imgur.com/k3HGpI5.png)

 4.2 The Watchful Eye
Location: Open Test Fields (Outdoor)
The Watchful Eye is the second boss encountered and reinforces a different rule: correct behavior matters more than output. The boss is positioned deliberately in the center of the open test fields, surrounded by wide, uninterrupted space. There is no cover, no terrain abuse, and no positional shortcut that trivializes the encounter.
The Watchful Eye is largely immobile and rarely deals direct damage. Instead, it continuously evaluates player movement and behavior. The fight progresses quietly. Failure is rarely immediate, but it is decisive.

 **AFK**
Applied to players who remain stationary for too long. Stacks gradually and without explicit warning beyond the debuff itself. Each stack reduces the player’s damage output and applies periodic damage. Resuming controlled movement causes stacks to decay over time.

 **Suspicious Movement**
Applied to players who move erratically, jump unnecessarily, backpedal, or reposition too frequently. Stacks gradually without obvious warning beyond the debuff itself. Each stack increases damage taken and slightly increases movement speed, encouraging further overcorrection. Remaining calm and reducing unnecessary movement causes stacks to decay over time. At high stack counts, even minor mistakes become lethal.

 **Audit Pulse**
Triggered automatically when a player reaches five stacks of either AFK or Suspicious Movement. The Watchful Eye immediately releases a burst of lethal damage centered on that player, killing them and dealing a high amount of damage to any party members in close proximity. Audit Pulse has no cast time and offers no opportunity for reaction once the threshold is crossed.

 *Encounter Behavior*
The Watchful Eye applies constant, passive scrutiny. Stacks accumulate quietly over time; the correct response is controlled, continuous movement. Players must reposition regularly, but only in small, deliberate increments.
The Watchful Eye teaches a core GM Island principle: movement is not a reflex. It is a decision.

![Image](https://i.imgur.com/oGkVKn4.png)

 4.3 Patchwerk Prototype 0.5
Location: Observation Platforms (Outdoor)
Patchwerk Prototype 0.5 is encountered on the elevated observation platforms during the ascent toward the mansion. The environment is deliberately constraining. Limited space, broken connections between platforms, and long, exposed sightlines turn positioning into a constant concern before the encounter even begins.
The Prototype is an unstable early combat model that does not follow a fixed pattern or commit to a single behavior. Instead, it rewrites its combat profile repeatedly throughout the fight.
Every twelve seconds, the Prototype randomly shifts into a new mode. These transitions are announced through chat alerts and are communicated through subtle animation changes.

 **Burst Mode**
The Prototype focuses on extreme single-target damage. Incoming hits are fast and punishing. Whenever threat forces the Prototype to switch targets, it gains a 100% damage bonus on its next attack, severely punishing unstable threat control.

 **Cleave Mode**
The Prototype replaces its standard attacks with wide frontal cleaves that apply random bleed effects. Poor facing and sloppy positioning are heavily punished, and melee players must disengage decisively rather than attempting to maintain uptime.

 **Attrition Mode**
The Prototype becomes stationary and channels a ground-based effect that pulses outward toward party members, dealing slow but persistent damage to all creatures in its path.

![Image](https://i.imgur.com/CPUVVy2.png)

 4.4 The GM Avatar (Spectral)
Encounter Mechanics
For most of the fight, the GM Avatar remains untargetable. The encounter is driven by constant spatial instability and line-of-sight discipline rather than direct damage.
Every 2 seconds, the GM Avatar teleports to one of sixteen fixed positions around the outer edge of the hall. These positions are evenly spaced and always active. The Avatar never remains stationary long enough to be comfortably tracked.
The hall itself is unstable. Pillars are fixed, but walls manifest and disappear between them every 3 seconds. These walls dynamically alter line-of-sight, sometimes opening clean sightlines, sometimes sealing them off entirely. The layout cannot be memorized and must be read continuously.
All of the GM Avatar’s command abilities have a cast time of 1.5 seconds. If a player is in line-of-sight of the Avatar when a cast completes, the command applies successfully. If line-of-sight is broken at completion, the cast fails. There are no target indicators beyond the cast itself.

 **/Freeze (Magic)**
Roots the target in place for a short duration. Rooted players remain vulnerable to follow-up commands and environmental shifts.

 **/Silence (Magic)**
Prevents spellcasting entirely for a short duration, removing healing and utility options.

 **/Kick**
Interrupts the target’s current cast, locks the interrupted spell school, and forcibly pushes the target 10 yards away. Poor positioning can result in displacement into dangerous areas or exposed sightlines.

 **Improper Positioning**
Applied whenever a player is hit by one of the GM Avatar’s commands. Each stack reduces movement speed by 5%. At five stacks, the player is immediately teleported to a prison cell for 15 seconds. After the duration ends, the player is returned to the center of the hall. Stacks are cleared upon imprisonment.

 **Summon Reinforcement**
Triggered automatically when Manifest begins. Upon teleporting to the center of the hall, the GM Avatar summons a random trash mob into the encounter. The summoned creature persists until killed and is fully affected by the hall’s dynamic walls and line-of-sight rules.

 **Manifest**
Whenever the GM Avatar fails to successfully cast /Freeze, /Silence, or /Kick, it gains a stack of Denial, reflecting the group’s effective use of line-of-sight and spatial control. Upon reaching 16 stacks of Denial, Manifest triggers. The GM Avatar teleports to the center of the hall, becomes targetable for 8 seconds, and immediately casts Summon Reinforcement before resuming its teleportation cycle and command execution.

 *Encounter Behavior*
The GM Avatar does not escalate through damage or enrage mechanics. Pressure comes from cumulative positioning errors. The fight becomes progressively harder as movement slows, reinforcements accumulate, and sightlines become harder to manage.
The GM Avatar exists to teach a simple rule: positioning is not where you are. It is whether you are seen.

![Image](https://i.imgur.com/uoqWoEZ.png)

 4.5 Exploit Eater
Location: Mansion Upper Floor
The Exploit Eater has no fixed silhouette. Its body is a dense, uneven mass of semi-humanoid fragments fused together: armor plates without sets, spell visuals without casters, weapon hilts embedded where joints should be. It inhabits a large upper-floor chamber once intended for meetings. The space is orderly and functional, but its purpose has been hollowed out. The encounter within is not immediately threatening. Its danger emerges gradually, shaped almost entirely by player behavior.
The Exploit Eater adapts instead of escalating naturally. It observes what players rely on and learns from it.

 **Assimilate**
The Exploit Eater records the last significant ability used against it. This includes major cooldowns, high-impact spells, and signature class abilities. Only one ability can be recorded at a time. Each time an ability is recorded, a stack of Overflow is added.

 **Abuse**
After Assimilate, the Exploit Eater begins casting the recorded ability repeatedly and with reduced restraint.

 **Overflow**
Permanently increases the Exploit Eater’s damage output by 1%. This effect stacks indefinitely.

 **Good Habit**
Every 5 seconds that the Exploit Eater does not successfully Assimilate a new ability, it casts Good Habit on all players. Each application increases damage dealt by 2%. This effect stacks indefinitely, but is removed immediately when the Exploit Eater learns a new ability.

 *Encounter Behavior*
The Exploit Eater starts the fight relatively harmless. As players escalate their output, the boss mirrors and exaggerates that escalation. Excess is punished more severely than mistakes.
The correct approach is restraint. Basic rotations, utility usage, and deliberate pacing slow its growth and keep the encounter stable.

![Image](https://i.imgur.com/7mRCtxy.png)

 4.6 The Ban Hammer
Location: Mansion Interior Chamber
The Ban Hammer encounter takes place in a stark interior chamber that feels procedural rather than ceremonial. The room is bare, symmetrical, and deliberately unexpressive. The Ban Hammer itself hovers silently, offering no visual cues of emotion or intent. This encounter is not about damage throughput or mechanical complexity. It is about immediate, correct compliance.

 **Violation**
At regular intervals, the Ban Hammer marks a random player with Violation, triggering a visible countdown. Violation cannot be dispelled or mitigated. To resolve it safely, the marked player must move completely away from all other party members before the countdown expires. If the player is isolated when the timer completes, Violation is removed without effect. If any party member remains within range, Collateral Damage triggers, dealing fatal damage to nearby players.

 **Collateral Damage**
When Violation resolves, any party members within close proximity of the marked player take fatal damage. This effect cannot be mitigated, intercepted, or outhealed.

 **Prior Offense**
Each time Violation is applied, the Ban Hammer records the marked player as having a Prior Offense. Prior Offense stacks persist for the duration of the encounter.
For each stack of Prior Offense, the countdown duration of Violation is reduced and the required isolation distance increases.
Prior Offense cannot be removed, transferred, or reset.

 *Encounter Behavior*
The Ban Hammer does not change phases or add complexity. Pressure increases through repetition. Each Violation applies a permanent Prior Offense, reducing response time and increasing the required isolation distance for that player.
Early violations are forgiving. Later ones are strict. There is no recovery and no reset.
Groups that remain calm and rotate responsibility survive. Groups that hesitate or rely on habit eventually break protocol.
The rules do not change. They tighten.

![Image](https://i.imgur.com/y3pqaZw.png)

 4.7 The Archivist of Things That Never Shipped
Location: Archive Core (Underground)
Its body is tall and rigid, built from mismatched stone, metal frames, and translucent panes that resemble unfinished UI windows frozen in place. The Archivist waits in the archive core beneath the mansion, surrounded by unfinished assets, abandoned mechanics, and systems that were never properly shut down. The space is bare and functional, offering no visual guidance and no room for spectacle. This encounter serves as the dungeon’s final examination.

 **Recall**
At each 2% health threshold, The Archivist invokes abilities previously encountered in the dungeon. Recalled abilities behave exactly as originally presented.

 **Stack Overflow**
The Archivist may maintain up to three recalled abilities at the same time. When a fourth ability is recalled, the oldest active recalled ability is discarded.

 **Rollback**
At each 10% health threshold, the Archivist triggers Rollback, reverting all players to their position, health, and resource state from 10 seconds earlier. All player ability cooldowns are reset.

Encounter Behavior
The Archivist does not escalate through damage or enrage timers. Difficulty comes from cognitive load and sustained discipline. The fight increasingly punishes reliance on reaction and habit.
Groups that internalized the dungeon’s lessons adapt smoothly. Groups that relied on muscle memory unravel quickly.

 5. Loot

 **Trinkets**

 **Debugger’s Stopwatch**
Use: Freeze yourself in place for 2 seconds. You are immune to all damage and effects but cannot act.
Equip: Slightly increases out-of-combat movement speed.
Cooldown: 2min.

 **Magic Firewall**
Use: Grants complete immunity to magical damage and effects for 6 seconds.
Equip: Increases all resistances by 21.
Cooldown: 5min.

 **Physical Lockout**
Use: Grants immunity to all physical damage for 4 seconds.
Equip: +20 Attack Power and +120 Armor.
Cooldown: 5min.

 **Displacement Lever**
Use: Pushes the target 5 yards away. Can be used on enemies, allies, or yourself.
Cooldown: 1min.

 **Self-Banish Protocol**
Use: Banish yourself for 12 seconds. While banished, you cannot act and cannot be affected by the world.
Cooldown: 10min.

 **Mounts**

 **Prototype Test Mount**
Effect: Cosmetic ground mount with placeholder animations. Movement occasionally stutters, pauses, or slides briefly before correcting itself.
Tooltip:
“Movement pending final approval.”

 **Observer’s Disc**
Effect: Floating disc mount. While mounted, the camera slowly rotates and must be manually corrected.
Tooltip:
“Remain aware of your surroundings.”

 **Rollback Runner**
Effect: Ground mount that leaves faint afterimages of your previous positions while moving. Visual only.

 **Companions (Pets)**

 **Mini Watcher**
A small hovering orb with a dim central lens and faint rotating runes. Its surface reflects light unevenly, as if constantly adjusting focus.
Mimics player movement behavior exactly. Stops when the player stops. Jumps when the player jumps.

 **Memory Leak Slime**
A translucent, softly glowing slime that slowly accumulates visual artifacts—bubbles, cracks of light, and embedded particles— and gradually increases in size the longer it remains summoned. Size resets when dismissed.

 **Toys**

 **Debug Portal**
Effect: Places a harmless visual portal for 10 seconds. Nothing ever emerges.

 **GM Chair**
Effect: Sit anywhere. While seated, you cannot move or act. The camera zooms out dramatically.

 **Rollback Beacon**
Effect: Instantly resets your facing and camera direction.

 **Closing**
This whole concept started as a stray thought: what GM Island already is, and what it could be if you treated it seriously without taking it too seriously. It’s not a request, a demand, or a balance proposal. It’s just an exercise in imagining how an odd, forgotten space might behave if it were allowed to be itself. Yes, images are ai-generated, also text is ai-restructured or formatted and grammar checked.
The dungeon, the mechanics, the loot ideas—especially the trinkets—are all part of that exploration. Not because they should exist, but because it’s fun to see how they could. Worldbuilding, systems thinking, and playful restraint are the point here.
Looking forward for the feedback!

## Post 166466 by Ricardin — 2026-01-25T21:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166466#p166466 | page 1 | era: 1.18.1-announced-pre-release -->

YESSSSSSSSSSSSS

## Post 166472 by Szarszag (Barrens Chat Casualty) — 2026-01-25T22:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166472#p166472 | page 1 | era: 1.18.1-announced-pre-release -->

I think many people who played on private servers have this core memory of downloading an edited mpq file and running there on glitched out textures. Some servers had vendors there which was super cool to find.

## Post 166558 by Syrathegreat (Patch Note Conspiracy Theorist) — 2026-01-26T16:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166558#p166558 | page 1 | era: 1.18.1-announced-pre-release -->

I love this

## Post 166569 by Reploidrocsa (Bug Report Enthusiast) — 2026-01-26T17:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166569#p166569 | page 1 | era: 1.18.1-announced-pre-release -->

Wow, so meta

## Post 166614 by basednoob (Patch Note Conspiracy Theorist) — 2026-01-27T13:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166614#p166614 | page 1 | era: 1.18.1-announced-pre-release -->

I feel like I've seen this before. Have you posted this before? Maybe on reddit or something. Anyway, pretty cool idea.

## Post 166617 by Fugus (Patch Note Conspiracy Theorist) — 2026-01-27T14:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166617#p166617 | page 1 | era: 1.18.1-announced-pre-release -->

All I can think of just reading this, I want a Silent Hill easter egg where you find a dog running a control room.

## Post 166619 by Sylbrosa — 2026-01-27T14:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166619#p166619 | page 1 | era: 1.18.1-announced-pre-release -->

I thought about a boss that is a GM that finds the raid in the Island and teleports the players to diferent places in the map, and the players need to rush back to the Island.

Maybe add something like a door closing with a timer, and the GM is trying to fix it. So you need to rush back before the door closes.

But he's kinda new to this and doesn't know the commands, so he's sending meteors and mobs ingame to impede  and kill the players.

The raid needs to group up while running back to survive and get back in time. At the end of the second phase you need to kill the GM who loses control and becomes a raid boss (all of this before the door closes).

I also really like the concept of 'better victory' like, if you beat him, you win. But if you beat him within a certain time period, he gives you better loot

## Post 166867 by Morkahja (Barrens Chat Casualty) — 2026-01-29T19:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166867#p166867 | page 1 | era: 1.18.1-announced-pre-release -->

> **basednoob wrote: Tue Jan 27, 2026 1:28 pm**
> I feel like I've seen this before. Have you posted this before? Maybe on reddit or something. Anyway, pretty cool idea.

hi, no i didnt reuse any ideas, never read about a dungeon idea for gm island and worked on it by myself, but maybe collective conciounsess :D

thanks yall for the feedback!

## Post 166868 by Morkahja (Barrens Chat Casualty) — 2026-01-29T19:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166868#p166868 | page 1 | era: 1.18.1-announced-pre-release -->

> **Sylbrosa wrote: Tue Jan 27, 2026 2:38 pm**
> I thought about a boss that is a GM that finds the raid in the Island and teleports the players to diferent places in the map, and the players need to rush back to the Island.
>
>  Maybe add something like a door closing with a timer, and the GM is trying to fix it. So you need to rush back before the door closes.
>
>  But he's kinda new to this and doesn't know the commands, so he's sending meteors and mobs ingame to impede  and kill the players.
>
>  The raid needs to group up while running back to survive and get back in time. At the end of the second phase you need to kill the GM who loses control and becomes a raid boss (all of this before the door closes).
>
>
>
>  I also really like the concept of 'better victory' like, if you beat him, you win. But if you beat him within a certain time period, he gives you better loot

love the idea, the gm could be a little bit of a reacurring boss who appears on several spots randomly and ends in the gm avatar encounter, havin an arc from learnign his job in the beginning to being kinda overpowered :D

## Post 166905 by Laponko — 2026-01-30T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=166905#p166905 | page 1 | era: 1.18.1-announced-pre-release -->

Morkahja, its awesome. Pics really good, story etc!

