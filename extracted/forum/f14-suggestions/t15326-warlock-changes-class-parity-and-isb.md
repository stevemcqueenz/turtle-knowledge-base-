---
title: "Warlock Changes, Class parity, and ISB"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=15326"
topic_id: 15326
forum_id: 14
forum: "Suggestions"
author: "Dkmoonlilith"
author_authority: "player"
posted: "2024-10-24T07:41:00Z"
last_post: "2024-10-27T16:10:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T11:46:37Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Warlock Changes, Class parity, and ISB

## Post 104639 by Dkmoonlilith — 2024-10-24T07:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104639#p104639 | page 1 | era: pre-1.18.1 -->

This will be a lengthy read covering a lot of ground in the hope that I can adequately illustrate the problem at hand to developers. This post has largely been incited by the dismissal of these various points when brought up in the warlock discord channel.

Over the course of this forum post, I hope to prove to you four things: firstly, I will show that warlocks and rogues currently have class parity in endgame Naxx performance; secondly, I will provide evidence that shows warlocks are receiving a nerf to overall dps from class changes in 1.17.2; thirdly, I will provide evidence that shows rogues are receiving a buff to overall dps from class changes in 1.17.2; and, in conclusion, I will assert that class parity between rogues and warlocks will be broken beyond a ~5% variance with the release of patch 1.17.2 in its current state and provide suggestions on how this disparity might be appropriately addressed. There will also be a tl;dr at the very end of this post featuring the most important suggestion for those who do not wish to slog through my arguments and evidence.

Before beginning, I would like to introduce some terminology that readers might be unfamiliar with. First and foremost, class parity is the concept that various classes should have comparable performance when examined against other classes in the same role. Developers have already stated that establishing better class parity is one of the foremost goals of this upcoming patch. For the purpose of this case study, we will focus entirely on dps parity - that is, a certain level of equivalence in dps performances between different classes. Specifically, we will focus on current dps parity between rogues and warlocks and the asserted disparity between rogues and warlocks being introduced in patch 1.17.2.

Part 1: Current parity between rogues and warlocks.

Based on Q3 rankings from this year posted on Monkeylogs, the top 10 performing rogues have an average of 1200.36 dps overall in Naxxramas. From the same quarter of the same year, the top 10 performing warlocks have an average of 1185.28 dps overall in Naxx. This provides a difference of 15.08 in overall dps between the top 10 players of each class mentioned, which gives us an approximate 1.26% variance in average overall dps between the two classes.

This means that currently both classes have parity with each other at the highest level of performance and gear, with warlocks performing about 1% lower than rogues on average overall dps at the highest level.

Part 2: Warlocks are being nerfed.

This will most likely be the longest and most contentious section of this post. We will be covering each new spec alongside changes to SM/Ruin, comparing each spec with post-CC2 SM/Ruin, proving that post-CC2 SM/Ruin will still outperform new specs on overall dps, proving that SM/Ruin has been nerfed, and lastly illustrating that due to these changes warlock overall dps has been nerfed.

Section A: Pre-CC2 SM/Ruin vs. pre-CC2 DS/Ruin

Currently, DS/Ruin is the universally accepted best warlock spec for dps in raids. It outperforms all other specs by a large margin. SM/Ruin is the second best, due to only losing 5% shadow damage (DS succubus sacrifice gives 15%, Shadow Mastery gives 10%), while gaining nightfall procs and some dot talents. This leaves SM/Ruin, in its current form, performing about 3-4% worse in overall dps against DS/Ruin warlocks. Let’s get into these numbers a bit more, as they become more relevant in later arguments.

The first concept that plays a large role in this and later arguments is crit size. As it is so aptly named, crit size refers to the amount of damage done on a critical strike. While a 5% reduction in shadow damage might seem to be a straightforward 5% reduction in dps, this reduction is amplified to 10% on critical strikes due to two factors. 1) Warlocks do twice as much damage on a crit when specced into Ruin. 2) Amplifications to damage are applied prior to calculations for a critical strike. This means that a critical strike on a Shadowbolt for a DS/Ruin lock has a 30% multiplier (2 * 15%) and for an SM/Ruin lock has a 20% multiplier (2 * 10%).

To illustrate: take two warlocks with the same gear and stats. One warlock (Warlock A) is specced into DS/Ruin in its current state. The other (Warlock B) is specced into SM/Ruin in its current state.

Warlock A critically strikes an enemy with a shadowbolt and does 3000 damage. Warlock B critically strikes an enemy with a shadowbolt and does only 2700 damage (10% less).

Where this comes into play most is in itemization. Warlock A (the one specced into DS/Ruin) is going to get more value out of 1% spell crit than Warlock B will, due to the mere fact that their crits will hit for more. Given that most endgame caster gear is heavily itemized towards crit, this creates a larger gap in performance between the DS/Ruin lock and the SM/Ruin lock as they progress through tiers, as a DS/Ruin lock is able to extract far more value from that crit than an SM/Ruin lock can. Due to these facts, what appears at face value to be a 5% reduction in damage actually reduces overall dps by closer to 7-8%.

Now, some of this dps loss is made up for by other talents in the Affliction tree. Nightfall at 2/2 talent points provides warlocks with a 4% chance on each tick of Corruption to gain a buff that lets them instant cast their next shadowbolt. In practice, this is closer to a 4% chance to reduce casting time by 1 second, as the warlock’s 1.5 second GCD (Global Cooldown Timer) means that they can’t cast another spell after an instant cast shadowbolt for 1.5 seconds. Corruption ticks once every 3 seconds, so on average, with 100% corruption uptime on one target, a warlock essentially gets a 1.5 second shadowbolt once every 75 seconds. Now this doesn’t do a ton, but if a warlock gets lucky or a fight has more than one target, it can increase dps a fair bit.

Along with nightfall, warlocks have access to increased hit chance on dots (fewer wasted gcds) improved damage on curse of agony, siphon life, and amplify curse, all of which help to close the gap between DS/Ruin and SM/Ruin to closer to 4%.

Section B: post-CC2 DS/Ruin vs. post-CC2 SM/Ruin

As we know, Demonic Sacrifice is getting nerfed due to it’s much lower placement in the Demo talent tree, with DS sacrificed Succubus only providing 6% shadow damage (9% total, when factoring in a talent earlier in the tree). This makes it nowhere near comparable to post-CC2 Shadow Mastery, which remains a 10% increase, alongside the other various improvements to the Affliction tree.

Section C: Post-CC2 SM/Ruin vs. pre-CC2 SM/Ruin

Now that we have established that pre-CC2 SM/Ruin underperforms against pre-CC2 DS/Ruin, and that post-CC2 DS/Ruin is not viable, we can get into discussing post-CC2 SM/Ruin as it compares to pre-CC2 SM/Ruin.

The main subject of import in discussing changes to SM/Ruin is the dreaded ISB or Improved Shadowbolt. ISB will be changed in four major ways come 1.17.2: firstly, the debuff applied is no longer removed after 4 non-periodic sources of shadow damage; secondly, the debuff is reduced from 12 seconds duration to 10 seconds; thirdly, the debuff has a flat 25% proc rate instead of proccing off of crits; lastly, the shadow damage increase granted by the debuff was reduced from 20% to 15%.

The first three changes are complicated. With the changes, post-CC2 ISB has a higher uptime so long as more than two warlocks are spamming shadowbolts on the target. Pre-CC2 ISB still has a higher uptime if only one warlock in Naxx gear is spamming shadowbolts on the target. This means that in most 40-man raids ISB will have a higher uptime, especially at lower tiers of raiding. This increase in uptime is less noticeable in endgame gear in Naxx, where warlocks have much higher crit chance and therefore better uptime on pre-CC2 ISB.

The last change is a straightforward nerf: 5% less shadow damage granted by the debuff. As has already been detailed in Section A, this is actually a much larger nerf to overall dps than it would appear to be at face value, due to it reducing crit size by 10%. The result is an estimated 7-8% dps loss over current ISB.

On the flip side, SM/Ruin receives some notable buffs in the Affliction tree. They get an extra 1% chance to proc Nightfall on corruption ticks, Malediction which allows you to use Curse of Agony if you’ve otherwise been assigned a different curse (reck, shadow, or elements), an extra 4% damage on Curse of Agony, and Rapid Deterioration which allows haste to affect dots. Let’s break these down one by one.

A 1% increased chance to proc nightfall means that instead of one proc every 75 seconds, you have one proc every 60 seconds. As mentioned before, due to GCD this proc is really only equivalent to a 1 second casting time reduction once every 60 seconds. While it is a dps increase, it is not a particularly sizable one, and you have to keep in mind that this proc will also be subjected to the 5% ISB nerf and the associated 10% crit size reduction on shadowbolts, further reducing the proc’s value.

Malediction and 4% more curse of agony damage is a notable increase, especially in raids with 3 or fewer warlocks. However, due to how quickly trash dies in raids, this increase will not affect warlock trash dps and will only be notable on bosses. Even then, the dps increase gained from these two talents will not make up for the dps lost from the reduction to damage granted by ISB.

Rapid Deterioration is certainly nice. However, due to lack of haste on gear and the fact that devs have noted that haste will primarily be available for warlock on Affliction sets (which SM/Ruin would most likely not take), its effect will be limited on SM/Ruin dps.

Altogether, while these buffs in Affliction are nice, they will not make up for the dps lost due to the ISB nerf, and SM/Ruin will still fall about 5-6% short on overall dps compared to its pre-patch state.

Section D: Post-CC2 Affliction vs. post-CC2 SM/Ruin

As most experienced raiders know, the real boss of any raid is its trash. A dps class’s ability to perform well on trash is paramount to the raid’s success. In this, an Affliction specced warlock (31+ points in Affliction) faces a few challenges.

First and foremost, the vast majority of Affliction’s dps requires ramping up. They have to apply 3-4 dots on a target, which takes 4.5-6 seconds. On top of this, Curse of Agony and Drain Soul do not deal damage equally over their full duration. Both spells start by dealing small amounts of damage initially, and then progressively larger amounts of damage towards the end of their duration. Given that most trash in endgame raiding dies within 20 seconds of being pulled, this means that Affliction warlocks will only be able to do their full amount of dps on bosses. Their damage on trash will be far, far lower.

In comparison, an SM/Ruin lock only requires 1.5-3 seconds to apply their dots and can then start casting shadowbolts for maximal dps on trash due to Ruin and other Destruction talents that an Affliction warlock would not take.

While the two specs’ dps will be comparable on bosses, Affliction’s will be far lower on trash (the real boss).

Section E: Post-CC2 Destro firelock vs. Post-CC2 SM/Ruin

There are several factors that will make a Destruction fire warlock worse in endgame than SM/Ruin.

First is the rotation. As it stands now Fire warlocks will open/pre-cast with Soul Fire, follow with Immolate, Conflagrate, and then fill with Searing Pain. They will cast Immolate to keep the dot up, cast Conflagrate on cooldown, and cast Soul Fire on cooldown to keep up the 8% fire damage debuff on the target. There are a couple problems with this rotation. Firstly, Soul Fire has a travel time longer than 1.5 seconds. This means you will have to cast a Searing Pain in between Soul Fire and Immolate, otherwise your Immolate will not receive the 8% damage buff that Soul Fire applies. Secondly, Soul Fire can miss, resulting in 30 second gaps in uptime of its 8% fire damage buff. Lastly, Soul Fire’s 30 second cooldown means that the 8% fire damage debuff will always have some downtime, due to it only lasting 25 seconds.

Next are spellpower coefficients. Spellpower coefficients (or spcs for short) are calculated before reductions in cast time due to talents and haste. When specced into Bane, an SM/Ruin warlock will get an 85.71% spc on every 2.5 second cast. This means that an SM/Ruin warlock is getting a large amount of their spellpower from gear and consumables calculated into each shadowbolt, which is then further effectively amplified by each shadowbolt’s reduced casting time.

In comparison, there are four main spells a firelock will use. Firstly, they have Soul Fire with an spc of 125% and a 4 second cast time (when specced into bane). Secondly, they have Immolate, which has an initial damage spc of only 18.65% and a dot spc of 12.72% per tick. Thirdly, Conflagrate has an instant cast spc of 55.57% (42.85% baseline + 12.72% from the immolate tick consumed). Lastly, Searing Pain has an spc of 42.85%.

No improvements to any of these spcs besides Soul Fire have been mentioned in the Class Changes post.

Overall, these spcs are quite low. The only spell affected by casting time reduction in regards to spc is Immolate’s initial damage, which is already low due to it applying a dot. Searing Pain’s cast time is not and cannot be lowered. Soul Fire can only be cast once every 30 seconds. Lastly, Conflagrate has a 10 second cooldown. This means that the vast majority of the time, you will be casting Searing Pain, which only gets 42.85% of damage from spellpower.

To illustrate, over a 15 second duration an SM/Ruin lock with 1000 spellpower can cast 6 Shadowbolts and deal an extra 5250 damage. In that same duration, a firelock with 1000 spellpower can cast 10 Searing Pains and deal only an extra 4285 damage. Thus, Firelock scales much more poorly with spell damage in later tiers than an SM/Ruin lock does.

The third factor is that, as previously mentioned, most of the firelock’s core rotation cannot be affected by haste. Immolate (when specced into Bane) and Searing Pain are already 1.5 second casts. Due to the 1.5 second GCD, further reductions in cast time for these two spells will not result in more spell casts. Conflagrate is already instant cast. Soul Fire’s cast time can be reduced, but its cooldown cannot, so haste would only affect one spell once every 30 seconds. Lastly, Immolate’s DoT effect is not affected by haste, as the Affliction talent that allows dots to be affected by haste only applies to Affliction spells and is too deep in the Affliction tree for it to matter.

The last factor is that due to the crit available for Searing Pain in the Destruction tree (5% from Devastation, 10% from Improved Searing Pain), firelocks potentially hit soft crit cap (~40% crit) much faster than an SM/Ruin lock, thus lowering the value further crit from gear gives by a noticeable degree.

The math doesn’t lie, and in each of these factors the math tells us that Firelock scales much worse than SM/Ruin in higher raid tiers, ultimately resulting in lower overall dps than SM/Ruin in Naxx and beyond.

Section F: Post-CC2 Demonology & MD/Ruin vs. post-CC2 SM/Ruin

To be quite honest, Demonology is a bit of a wild card. We currently lack too much information on pet-scaling to be able to comprehensively assess Demonology dps and compare it to other warlock specs. That being said, Demonology and MD/Ruin are still expected to perform below SM/Ruin on overall dps given the information we do have access to.

Section G: Conclusion

In great detail, I have provided ample evidence to the fact that SM/Ruin will be the top dps spec for warlock after patch 1.17.2. Furthermore, I have exhibited that SM/Ruin will receive a 5-6% dps nerf due to changes to ISB, and that SM/Ruin currently performs about 3-4% dps behind DS/Ruin. In total, a DS/Ruin warlock should expect to lose at least 10% overall dps due to class changes when 1.17.2 drops.

Part 3: Rogues are being buffed.

In this segment, I hope to prove to you that rogue overall dps will receive a buff in 1.17.2 between weapon skill changes, totem changes, and talent tree changes. I will further cement this argument by addressing newly introduced melee synergy and the lack of any caster synergy in comparison (aside from disc priest, which will only buff one player’s damage and not the whole raid).

For simplicity’s sake, we will consider primarily Combat Rogue in this study, as it is currently the top performing spec in naxx, and thus any buffs to this spec will indisputably display an increase to overall rogue dps.

Section A: Talent Changes for Combat Rogue

Firstly, the 5 energy cost reduction for Improved Sinister Strike was made baseline, reducing Sinister Strike’s energy cost from 45 to 40 in CC2 without needing any talent points. In its place, combat rogues can pick up 2% haste,

Blade Flurry was moved two tiers up the tree (with no nerf associated with its new position).

Hack N’ Slash still gives 5% extra attack proc chance, but only requires 2 points and now affects both axes and swords.

Dagger Specialization and Fist Specialization were combined into one talent, Close Quarters Combat, which provides the full 5% crit chance to daggers, fists, and maces for only 2 points.

Blade Rush, a new Tier 5 talent, increases Blade Flurry uptime by 100% (by reducing the cooldown by 60 seconds) and adds a 10% haste buff to Blade Flurry.

Surprise Attack, another new Tier 5 talent, is essentially a heroic strike with a 10 second cd that does 120% weapon damage, only costs 10 energy, awards a combo point, and is only usable after a target dodges (which for a dual wielding rogue, is relatively often).

Aggression now increases sinister strike and eviscerate damage by 10% instead of 6% at 3/3, and now includes surprise attack as well.

Ruthlessness now has a 100% chance to proc at 3/3 instead of 60%.

Vile Poisons now awards 20% increased poison damage at 3/3 instead of 5/5.

Improved Poisons now provides 10% increased poison proc chance at 3/3 instead of 5/5.

Did you see a nerf anywhere in there somewhere? If you did, please DM me, as it would be a typo. There weren’t any.

Section B: Weapon Skill

Normally, one might be concerned that rogues were nerfed by the changes to weapon skill. Allow me to assuage your worries.

The linearization of weapon skill means that the new cap for glancing blow damage and hit chance from weapon skill is 315, rather than having breakpoints at 305 and 308. However, rogues will have access to +5 weapon skill books, and combat rogues receive 5 weapon skill from their tree. This means that any rogue, of any race, using any weapon, only needs 5 weapon skill from items to reach 315. This is quite easy, and certainly much more easily achievable than for any other melee class and spec.

This means that rogues will not be nerfed in any meaningful way by changes to weapon skill.

Section C: Totem and poison changes

Rogues are now able to use poisons without losing windfury totem buff. Along with that, they will also receive the benefit of Flametongue totems.

Section D: Increases from Synergy

With a Subtlety rogue in the raid, combat rogues will have 2% increased damage due to new Hemorrhage, and 15% increased damage for 6 seconds every 3 minutes. With a hunter in their group, new Trueshot Aura now provides them with 5% extra ap + 55 ap baseline. With a subtlety rogue in their group they now have 4% extra crit. With an enhancement shaman in their group they can receive 5% haste for 30 seconds every 5 minutes

By comparison, SM/Ruin lock can fight other casters for the one Disc Priest’s 10% sp buff and their 15% haste buff that has 20-26% uptime (depending on if it hurts you more).

Section E: Review

There are a lot of buffs to combat rogue. There is not a single meaningful nerf to combat rogue. I’m not going to get into nitty gritty numbers on this because it is simply self-evident. Combat rogue overall dps will be significantly buffed in 1.17.2. That is a fact as evidenced by the numerous buffs to their talent trees, synergy, and ability to use poisons alongside totems.

Part 4: Conclusion

If class parity is truly the goal, as stated by developers, then why would rogue receive so many buffs to its overall dps in the same patch where warlock overall dps is being nerfed, given that these two classes are currently on par in Naxx? Parity is clearly broken by the disparity in these changes.

The solution is simple: revert ISB to a 20% shadow damage increase while retaining its uptime changes. This change will at least give warlocks a fighting chance in 1.17.2 to maintain their current overall dps. If warlocks continue to lag behind even with ISB @ 20% shadow damage, I trust that developers will balance accordingly.

Tl;dr: buff ISB back to 20% increased shadow damage.

## Post 104687 by Isvya (Patch Note Conspiracy Theorist) — 2024-10-24T13:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104687#p104687 | page 1 | era: pre-1.18.1 -->

Good post, deserves more attention!
I wish cc2 councils put at least half amount the effort you did into balancing.
What happened in reality is: hey my druid FC died to this warrior so lets give a 6s cd to hamstring...

The only meaningful upgrades are that you can now use CoA with a diff curse and that dots scale with haste.
Drain soul is buffed + theres drain life yet they put another channeled spell as a capstone.. why? Could have just given the 20% haste to DS + DL. Anyways its a dead end for raiding as all the crit is wasted.

The meta is probably going to be MD+Ruin while your greater demons are off cd then brainwash back to SM+Ruin.

## Post 104730 by Eversongwoods (Patch Note Conspiracy Theorist) — 2024-10-24T20:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104730#p104730 | page 1 | era: pre-1.18.1 -->

What about a 0/11/40 sacrificing imp for fire damage? start casting soulfire while the tank is pulling for a extra 8% fire dmg for 25 sec. Searing pain would crit atleast 40% of the time. I dont raid but just playing with talent calculator, not really sure what the searing pain base damage is.They should have just given warlocks incinerate.

## Post 104739 by Daftpunkerlol88 — 2024-10-24T21:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104739#p104739 | page 1 | era: pre-1.18.1 -->

I’m not convinced the solution is merely making us shadow bolt spammers again. If you keep pushing that as a solution the devs aren’t going to take us seriously. They don’t want us to be shadow bolt spammers, and neither do I. I would like a change, and think other solutions would be better.

Other solutions could involve, for firelock making incinerate the spammable spell instead of searing pain. Searing pain could be given the 8 sec fire spell buff talent over soul fire since the issue with soulfire being it could miss and 30 secs is a long time to wait. Soulfire instead could be given the nightfall treatment and made an instant cast proc. This would allow for a rotation that has a spammable fire spell, but also includes the dynamic of casting searing pains to keep the uptime on the fire buff and a fun little proc to manage with soul fire, not to mention the dynamic between immolate and conflagrate.

For affliction, drain soul should remain the prime rotational spell. I think the issue with ISB is not its nerf, it’s the fact that the shadow dmg buff associated with it is tied to it. Which would therefore force a lock to be a bolt spammer to improve the dps of an affliction lock, which in theory would mean one of the locks would have to be severely gimped to help the others pump which to me is not fun gameplay for anyone. The solution here would be to give drain soul a comparable proc effect chance to ensure there’s no reliance on other locks to simply be competitive.

As you said demo is a wild card and I think making them the shadow bolt spammers would be the go, but how it works with the uptime on unlimited potential and demon management is dubious at this point without proper testing so that will most probably need fine tuning post cc2.

## Post 104743 by Dkmoonlilith — 2024-10-24T21:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104743#p104743 | page 1 | era: pre-1.18.1 -->

I totally agree! I pointed out a lot of issues with the other specs and illustrated them in the hopes that devs could read through and work on addressing them to get them up to par (class par, not just spec par). I suggested ISB reverting to 20% damage increases because it is the easiest change to make at this point in time, with patch release imminent. The other issues would require massive overhaul and potentially new spells, which is a much larger dev workload than merely tweaking a number. As I said, I think the priority should be class parity, and then balancing spec parity in the coming months if not sooner.

Edited for typo correction.

## Post 104744 by Monkebonk — 2024-10-24T21:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104744#p104744 | page 1 | era: pre-1.18.1 -->

Another thing that I'm worried about is that you will use even more mana as SM/ruin, with increased Nightfall procs and haste on dots, making the dps even lower because you reach lifetap stage sooner. Tea nerf doesn't help either.

## Post 104751 by Islandboii — 2024-10-24T22:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104751#p104751 | page 1 | era: pre-1.18.1 -->

The points made in this post regarding the upcoming class changes in patch 1.17.2 are not only valid but highlight critical issues of balance. I fully support the analysis that this patch will break the current parity between these classes, which the developers have aimed to maintain.
The argument that warlocks will face a significant nerf to overall dps is well-supported by the detailed breakdown of changes to the SM/Ruin spec. The reduction in Improved Shadowbolt (ISB) from 20% to 15% is indeed a major blow, especially when we consider how damage multipliers interact with crits, amplifying the nerf beyond what might seem obvious at first glance. This combined with the other nerfs to Demonic Sacrifice, will certainly bring down warlock performance by a large margin.

## Post 104755 by Eversongwoods (Patch Note Conspiracy Theorist) — 2024-10-24T23:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104755#p104755 | page 1 | era: pre-1.18.1 -->

The real problem is that people want to just press 22222222222 this way they cant screw up any rotation. Im sure the dps will be fine with with the new talents, you will have to press more buttons though.

## Post 104957 by Lazarvs — 2024-10-27T16:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=104957#p104957 | page 1 | era: pre-1.18.1 -->

The real issues could all be solved in due time if they would put up a Test Server available to all the community.

Changes this big and extensive take time to be propperly accepted, and if they are not propperly explored by the comunity, they can be disasterous outcome.

I think the Twow crew should be a bit concerned with the fact that, without propper acceptance of the general server population, this might reflect a quick fall of the server's population, or it's complete desertification.

Good post btw. It is very clear and highly detailed. Opened up my eyes.

