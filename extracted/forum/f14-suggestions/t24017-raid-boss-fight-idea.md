---
title: "RAID BOSS FIGHT IDEA!!!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24017"
topic_id: 24017
forum_id: 14
forum: "Suggestions"
author: "Wilsonsds"
author_authority: "player"
posted: "2026-02-18T21:39:00Z"
last_post: "2026-02-20T03:11:00Z"
post_count: 10
pages: 1
fetched: "2026-09-10T11:03:10Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# RAID BOSS FIGHT IDEA!!!

## Post 168813 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-18T21:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168813#p168813 | page 1 | era: 1.18.1-announced-pre-release -->

**Concept Overview**

This encounter plays out in three phases, all tied directly to the health of the NPC being drained by the Boss. The idea is that the Boss is either corrupting this NPC into something twisted, or siphoning his life force to fuel his own transformation.

When the fight starts, the NPC is already barely alive at 10%. The raid’s real objective isn’t to kill the Boss outright, but to bring this NPC back to full health. As the NPC recovers, the fight escalates. Phase 2 begins when the NPC reaches 40%, and Phase 3 starts at 70%.

It’s basically a tug of war over this one character’s life.

 **Core Mechanic – Reflected Healing**

Here’s where things get messy.

Any healing done during the fight works normally on the target, but the exact same amount is reflected back as damage to whoever cast the spell or used the item. If you heal for 1,500, you’re taking 1,500.

The only exception is **Warlock Healthstones**. They don’t trigger the reflection and end up being the only safe form of self-healing in the encounter.

Because of that, nobody can realistically spam self-heals. Potions and bandages follow the same rule — you heal, you pay for it.

Bandages are still usable, though, because in this fight they are **not interrupted by incoming damage**. That part is important or the mechanic would just feel punishing instead of strategic.

What ends up happening is DPS players can’t just tunnel. They’ll have to bandage tanks or help stabilize people at the right moments instead of leaving everything to healers.

 **Tank Mechanic – Permanent Mark**

The active tank receives a permanent debuff that steadily drains health and can’t really be mitigated.

The only way to clear it is either when combat ends, or by reaching a healing fountain located on a higher platform.

To get there, the marked player has to drop to a certain health threshold and then use a portal. Another tank needs to taunt immediately when that happens.

The thresholds change by phase:

• Phase 1 – 50% health
• Phase 2 – 30% health
• Phase 3 – 10% health

Any player at or below the required threshold — not just the tank — can use the portal. They’re teleported to an upper platform and have to complete a short parkour path. Nothing crazy, but enough to create pressure.

If they fall, they take normal fall damage. So anything that reduces fall damage suddenly has value.

At the end of the path there’s a fountain. Clicking it restores them to full health and removes the debuff, then they’re sent back down.

When the tank returns, they gain a Strength buff that lasts for the rest of the fight.

Also, the more players holding the permanent debuff at the same time, the more damage all of them take. It’s a flat increase, not percentage-based, so it stacks in a dangerous but predictable way.

 **Boss Positioning Restriction**

The Boss cannot be dragged away from the NPC. If the tank or anyone with threat tries to move too far, the Boss starts dealing heavy area damage. This is mainly to prevent cheesy line-of-sight plays or kiting.

 **NPC Pressure and Interrupts**

Throughout the encounter, the Boss constantly drains life from the NPC.

There’s a passive drain ticking the whole time, and a periodic Drain Life cast that can be interrupted. If it goes through, it damages the NPC and heals the Boss.

So interrupts actually matter here. Missing one has real consequences.

 **Kneeling Phase – Healing Window**

The Boss doesn’t die when he hits 0%.

Instead, he drops to his knees and becomes untargetable for around 15–20 seconds. The protective barrier around the NPC disappears during this time, even though the NPC remains unconscious.

This is the window where healers can fully focus on the NPC.

Healing the NPC during this phase does **not** reflect damage, so cooldowns can be used freely.

Once the kneeling phase ends, the Boss returns to full health but stays in the current phase. The fight doesn’t reset.

Again, the goal isn’t to kill him directly. It’s to heal the NPC to 100%. When that happens, the NPC breaks free and defeats the Boss.

 **Adds and Damage Control**

Each phase introduces additional pressure through adds.

• Phase 2 – 1 add
• Phase 3 – 2 adds total

Each active add reduces all raid damage by 20%, and that effect stacks. So ignoring them slows the fight down fast.

They also need to be moved away from the main Boss to avoid overlapping pressure.

 **Failure Condition**

If the NPC ever reaches 0% health, he becomes fully corrupted. At that point the Boss turns immortal and starts dealing massive area damage until the raid wipes.

So the entire encounter revolves around keeping that NPC alive while managing everything else.

 **Design Intent**

This fight is meant to feel tense and slightly chaotic without being random. It rewards coordination, clean tank swaps, disciplined interrupts, controlled damage, and smart resource management.

Warlocks suddenly matter a lot.

*Last edited by Wilsonsds on Thu Feb 19, 2026 1:13 pm, edited 3 times in total.*

## Post 168829 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-19T00:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168829#p168829 | page 1 | era: 1.18.1-announced-pre-release -->

From a technical perspective, nothing in this encounter really breaks the limits of a 1.12 client. Most of what’s described would live entirely on the server side anyway.

The healing reflection part isn’t complicated. The server already tracks healing events, whether they come from spells or consumables. Reflecting that amount back as damage to the caster is just another script check. The only real exception would be something like Warlock Healthstones, but those are tied to specific spell IDs, so excluding them from the logic isn’t difficult. It’s just a condition in the script.

The permanent tank debuff is also pretty standard stuff. You’d apply an aura on engage and only clear it under defined conditions — either combat drop or interaction with the fountain. Counting how many players currently have that debuff and increasing incoming damage by a flat value is doable too. The server can already track active auras, so scaling damage off that isn’t some modern-client feature.

The portal interaction is basically a conditional GameObject. Check the player’s HP, check the current phase, and if both match the requirement, teleport them. Teleports inside instances are nothing new. The parkour section doesn’t require anything special either — it’s just map geometry. Fall damage already exists in the engine, so items that reduce fall damage would naturally work without extra scripting.

The fountain is just another clickable object. On interaction, restore health, remove the specific debuff, maybe apply a strength buff, then send the player back to the arena. All of that is basic aura and teleport handling.

The kneeling phase at 0% is also manageable. Boss becomes untargetable, ignores damage, maybe clears threat temporarily. During that window you’d flag the healing reflection logic so it doesn’t apply when targeting the NPC. After the timer ends, boss HP resets but the phase variable doesn’t. That’s just encounter state management.

The constant NPC drain and interruptible Drain Life are straightforward too. Periodic scripted health reduction plus a normal spell cast. Both mechanics already exist in 1.12 in various forms.

Adds reducing raid damage? That’s stacking aura behavior. Each add carries its own modifier aura. As long as they’re separate sources, stacking works fine. Keeping them away from the boss can be enforced through encounter design or simple range checks.

Preventing line-of-sight abuse is the same idea — distance check tied to a punishment mechanic. If the boss is dragged too far from the NPC, trigger an AoE pulse. Nothing client-dependent there.

Even the bandage behavior could be adjusted locally within the encounter by temporarily altering interrupt conditions via aura or script flag. Since it would be isolated to this boss fight, it wouldn’t affect the rest of the game systems.

So overall, none of this relies on modern retail systems. It’s scripting, aura handling, conditional object logic, and encounter state control — all things already supported in a 1.12-based environment.

## Post 168830 by Ellifta (Barrens Chat Casualty) — 2026-02-19T01:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168830#p168830 | page 1 | era: 1.18.1-announced-pre-release -->

AI sloppa

## Post 168885 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-19T13:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168885#p168885 | page 1 | era: 1.18.1-announced-pre-release -->

lol dude, actually no, i invested a lot of time to make something good, so a lazy good for nothing fat ass come here and label my work as IA, because you dont have the capacity to come with something good.

## Post 168886 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-19T13:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168886#p168886 | page 1 | era: 1.18.1-announced-pre-release -->

And more, go on, ignore it if you want, I believe in my ideas, I know they are good, and I know that here in this forum, even if Turtle WoW discards this, someone else will hopefully see this and not use it, but use it as inspiration for better concepts. So I don’t care about your stupid labels, I use AI to organize my ideas to create them. All ideas here are mine, I just used AI to make them clear and organized.

If your prejudice is limiting, that’s your problem. Stay in the past, which I can already see you’re doing, since you can’t tell the difference between ideas created by AI and original ideas organized by AI. Your prejudice blinds you, and the only one harmed here is you.

## Post 168887 by Escaton1 (Barrens Chat Casualty) — 2026-02-19T13:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168887#p168887 | page 1 | era: 1.18.1-announced-pre-release -->

AI slop

## Post 168888 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-19T13:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168888#p168888 | page 1 | era: 1.18.1-announced-pre-release -->

And finally, I’ve been in this forum for ages, contributing many ideas and suggestions, and some have indeed come to fruition, or at least I saw that they were inspiration to create something. If you dare to look at my posts, since the start I’ve worked hard on my ideas, even before this AI witch hunt.

## Post 168893 by Atreidon (Grandmaster of Forum PvP) — 2026-02-19T13:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168893#p168893 | page 1 | era: 1.18.1-announced-pre-release -->

Wether ai generated or not, the fights main gimmick is making every healing except healthstones and bandages just a reshuffling of damage. Which is an idea that is extremely difficault to implement without it being an unbalanced nightmare.

Lets assume the scenario where ANY AND ALL healing has this downside. Appart from holy strike and shadow priests vampirism actively killing them while lay on hands has the distiction of being an automatic death touch, the effect this has is punishing you for healing more than is absolutely necessary. While not invulnerable that is.

So just bring as many paladins as possible, let them pop divine shield and heal the add up. Then just burn the boss down asap to heal up afterwards.

Dps wont be using bandages. Healers wont be able to heal for more than 2000 dmg per minute on account on loosing that health, so its more effective having them run around with bandages than the dps.

But hey, at least the troll racial is actually useful for once :D

And if certain heals are excluded from this downside such as jol & vampiric embrace. You can just see loatheb for how cheesable these fights become.

Im not entirely against the idea of a fight that punishes blind parsing at all. But this one is not doing it for me

## Post 168896 by Wilsonsds (Patch Note Conspiracy Theorist) — 2026-02-19T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168896#p168896 | page 1 | era: 1.18.1-announced-pre-release -->

> **Atreidon wrote: Thu Feb 19, 2026 1:43 pm**
> Wether ai generated or not, the fights main gimmick is making every healing except healthstones and bandages just a reshuffling of damage. Which is an idea that is extremely difficault to implement without it being an unbalanced nightmare.
>
>  Lets assume the scenario where ANY AND ALL healing has this downside. Appart from holy strike and shadow priests vampirism actively killing them while lay on hands has the distiction of being an automatic death touch, the effect this has is punishing you for healing more than is absolutely necessary. While not invulnerable that is.
>
>  So just bring as many paladins as possible, let them pop divine shield and heal the add up. Then just burn the boss down asap to heal up afterwards.
>
>  Dps wont be using bandages. Healers wont be able to heal for more than 2000 dmg per minute on account on loosing that health, so its more effective having them run around with bandages than the dps.
>
>  But hey, at least the troll racial is actually useful for once :D
>
>  And if certain heals are excluded from this downside such as jol & vampiric embrace. You can just see loatheb for how cheesable these fights become.
>
>  Im not entirely against the idea of a fight that punishes blind parsing at all. But this one is not doing it for me

Balancing a fight is usually the hardest part of designing process. Tuning always takes iteration, especially when the encounter moves away from a simple tank and spank format. The more mechanics involved, the more testing and adjustment it requires. Calling it “extremely difficault” (hahaha i had to make fun of this mispelling   turtle_tongue_head  XD) yeah I know doesnt necessarily mean it cant work, it just suggests that the numbers would need refinement.

About Holy Strike, Vampirism, Lay on Hands, yes, they would reflect. Lay on Hands would probably kill you. Thats intentional. But youre acting like thats the whole mechanic, and its not. You skipped over the kneeling phase entirely. During kneel, healing doesnt reflect on the NPC, and thats the window where healers can shine.

So if you ignore that part, of course it looks impossible.

Stacking paladins with Divine Shield? Eventually someone finds a way to abuse mechanics. Whave you ever saw an world record run? That happens in literally every tier. Weve seen 30+ fury warrior metas in BWL. That doesnt mean the design is broken, it just means it gets adjusted. If reflection shouldnt be bypassed by immunity, this just means that i must be a late tweak. And not the end of the concept.

The 2000 damage per minute example is just theorycraft. I never set any numbers. Youre arguing against tuning that doesnt exist yet. Bandages arent there to replace healers. Theyre there so everyone has to participate. Tanks rotate, people move, healing comes in controlled windows. Add damage, boss pressure, all of that gets tuned together.

The troll racial thing though? Yeah. That ones funny.

Loatheb comparison is fair in spirit, but that fight only became trivial after people optimized it for years. During actual progression it felt completely different. And honestly, how many vanilla fights really feel unique? Loatheb stands out exactly because it broke the formula.

Im not saying everyone has to love it. If you dont like the idea, thats fine. It was just meant to push something different into the discussion. Ideas change. Sometimes someone else takes a rough concept and makes it better.

## Post 168969 by Peregris — 2026-02-20T03:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=168969#p168969 | page 1 | era: 1.18.1-announced-pre-release -->

I liked the idea. It may need some adjustments and perhaps a review of certain parts of the mechanic, such as making the damage a percentage of the healing, or establishing action windows for some abilities, or even having a per-event damage cap… but these are all possible and viable solutions. I liked it!
smiling_turtle_head

