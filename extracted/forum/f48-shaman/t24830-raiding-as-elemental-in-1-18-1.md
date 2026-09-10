---
title: "Raiding as Elemental in 1.18.1"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24830"
topic_id: 24830
forum_id: 48
forum: "Shaman"
author: "Atreidon"
author_authority: "player"
posted: "2026-04-11T09:42:00Z"
last_post: "2026-04-15T15:25:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:20:14Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Raiding as Elemental in 1.18.1

## Post 174801 by Atreidon (Grandmaster of Forum PvP) — 2026-04-11T09:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174801#p174801 | page 1 | era: post-1.18.1 -->

Some might already have seen posts where i have criticized the current design of elemental shaman. But i wanted to give a constructive aggregate of my thoughts on elemental shaman in 1.18.1 in hopes of getting some of the worst aspects of the spec brought up to date.

I personally would have gone a different direction with the class than has been pursued, but i want to show the current pitfalls and potential fixes for them based on what we deal with. A "Wouldn't it be cool if the class was completely different" attitude is not helpful. So I try to focus on what mechanical changes are needed to work with the version of elemental we currently have.

 **Basic single-target DPS concept**

Elemental in classic consisted of 100% Lightning Bolt once totems were down. With the 1.17.2 patch we got a small but significant change that encourages us to apply flame shock and subsequently keep that Flame Shock DOT up with Molten Blast.

That base rotation does spice up single target fights just enough to not be overly monotonous, but due to some crucial oversights, it falls far short of what it could have been.

Firstly, the improved Molten Blast talent rewards you for letting your DOT tick before you cast molten blast. Ideally, you want to hit the target with MB in the last 3 seconds before the Flame Shock DOT expires. This is tricky for a couple reasons and hugely punishing if you fail it.

 **Why it's tricky:**
- Molten Blast is a relatively slow traveling projectile. If the spell is already in the air, but Flame Shock expires, you won't get the extra damage from Rekindled Flame nor the Flame Shock refresh.

- Shaman has no guaranteed pushback immunity for Molten Blast. The best we have under realistic situations is 80%. So you have to factor in the possibility that your Molten Blast will finish casting one second later than you expect in any Fight that causes damage to the raid.

- Spells can miss. Even at the spell hit cap, you will always have a 1% chance that, even when casting Molten Blast at the right time, it will miss, and by the time you see that it missed you will be too late to recast MB.

- Refreshing Flame Shock to early with Molten Blast is a DPS loss.

- Not every encounter is patchwerk. Often there are other tasks besides pure DPS we need to take care of.

 **Why it's punishing/frustrating:**
- Flame Shock snapshots. Good shamans use active trinkets, elemental mastery and time it with nightfall procs on the boss for maximum DOT damage. If it falls off, your cooldowns remain, forcing you to reapply a much weaker Flame Shock.

- Raidbosses usually have heaps of debuff applied. Unless you use superwow and heavy addon support to track wether your DOT is still up, you have to familiarize yourself with the floating combat numbers and act accordingly.

- Flame Shock is the only shock with the range extension to 30 yards.  In fights that have a movement element to them, we need to be within 20 yards range, so we can use Earth Shock while moving, as using Flame Shock while moving replaces a likely better snapshotted DOT.
Currently, the only ways to deal with these limitations is to either cast 2 Molten Blasts back to back towards the end of the DOT duration to reduce the likelyhood of it falling off trading a potential dps loss for a smaller but guaranteed one, or accepting it might fall of and manually reapply a weaker Flame Shock and have your damage for the rest of the fight neutered.

 **AOE Encounters**

Earthquake slots in as our hardcast AOE spell to supplement Firenova Totem. But compared to other long casttime AOE spells like Flamestrike or Volley, we require a primary target and are not free to precast it. This makes it lackluster in many AOE encounters, as our primary target dying too early cancels the spell, our primary target running out of the pack places the AOE away from where it is supposed to go and should the primary target resist, the entire damage from this ability is 0!

Even if we get the inital cast off, the spell is backloaded and we often don't get the value from Aftershock. Considering EQ also has a 15 second cooldown and likely you won't get out a second cast in an AoE encounter, it does disappoint as a capstone talent and makes our AOE among the most unreliable.

It is also not at all synergistic with how shaman AoE works otherwise. We wanna run into the pack to drop firenova and afterwards magma totem. Earthquake forces us to stand still instead while not providing enough upside. For hard packs or packs you can't approach, it has a place, but for most content, you are better off just running in, dropping a firenova, maybe a sapper and dont waste time trying to cast EQ.

The only fights where it does feel good is if you have a primary target with lots of small adds. But thats pretty much only Gnarlmoon and Incantagos in K40. Most other bosses don't require that damage profile.

 **Other frustrating Elements**

Flame Shock has an attackpower scaling in addition to its spellscaling (6% on application and 1.5% on each tick) If you want maximum output as an elemental shaman, you do want Firewater and Juju strength. But it's roughly 0.012 dps per attackpower or 0.02 if you snapshot and factor in fire improving debuffs properly. So it's easily justified to drop those consumables, but you still are encouraged to use them for optimal DPS and feel like you miss out if you don't.

Totem of Eruption is meant to be the payout for Molten Blast specifically. Yet it's comically weak, even when ignoring the inconsistencies of the rotation. Totem of Rage adds the same amount of damage to a rekindled flame proc as Totem of Eruption, but the later one also increases the DPS of Flame Shock itself. Heck, Totem of the Endless Ficker results in similar dps gains to Totem of Eruption.
Totemswapping now incurs a GCD to discourage the practice, but due to the snapshotting nature of Flame Shock, despite all of the above, if a combat is long enough it is still optimal to apply Flame Shock with totem of Rage and take a gcd to swap to another totem such as Crackling Thunder or the Storm.

Elemental shaman also has several talents that directly boost the output of his fire totems. In a undocumented change recently, flametongue totem got it's spellpower scaling that has been removed years ago re-added. This is bad. In raid scenarios, you are now as an elemental shaman who actively spents talent points to improve his fire totems discouraged to use any firetotem than flametongue if you have a dps or tankpaladin in your grp, as flametongue will do heaps more damage.
Similarly, it puts the melees in your group into a similar predicament as us with the attackpowerscaling on Flame Shock. Even as a warrior, Spellpower consumables become optimal if they have a Shaman providing flametongue totem.

There are so many reasons why this is bad. But for elemental in specific, a fire and forget bufftotem without supporting talents shouldn't outperform the totems you put 7 talent points into specifically.

 **Output problems in practice**
So far, those changes are agnostics of the specs performance within the wider ecosystem of the game. But elemental shaman is also fighting a permanent uphill battle when it comes to his rankings in the DPS meters.

In raid environments, Most spellschools have some amplification due to debuffs classes can provide.
Shadow gets Shadow Weaving and Curse of Shadows, as well as warlocks t3.5 Felfire Punishment for a combined +28% shadowdamage.
Fire similarly with Curse of Elements, Fire Vulnerability and again Felfire Punishment also gets +28% firedmg.
Frost gets +10% from CoS and 10% critchance from Winterchill.
Holy gets +10% dmg from Sanctity Aura and a 140 spellpower bonus from Judgement of the Crusader.
Arcane gets +10% from CoS.
All these elements get an amplification to their potency and as a result boost anyone using them by at least 10%.

Nature has no such effect since the Stormstrike debuff got changed. Elemental shamans DPS is roughly 66% nature damage. Simply by our primary element to deal damage being nature, we deal about 18.4% less damage compared to someone using  only fire or shadowspells in a raid environment. And that difference definitely is noticeable.

This even ignores the fact that Scythe of Elune is a further 8%. Theoretically moonkins with a Scythe can boost nature damage too, but A scythe buffing Fire, Shadow, Frost or Arcane is just a much more common sight than it buffing nature.

All in all, it just doesn't feel rewarding playing elemental shaman in the current patch. Our spells are finnicky and clunky, and the payout is rather lackluster.

 **How to address these shortcomings**

That has been a lot of negatives, so how could we fix the problems the spec has?
- Re-calculate Flame Shocks damage whenever it gets reapplied with Molten Blast. This effectively kills snapshotting it and allows more precise class balancing in the future (this also ensures speccing into Elemental Weapons in enhancement tree as ele shaman will never be optimal to fish for a stronger flameshock application)
 - Potentially improve it's spellpower scaling to compensate.

- Allow Rekindled Flame to crit again. It was originally able to. Which helped greatly with manasustain and it was only cut due to shaman overperforming (Something that has been entirely remedied with Elemental Weapons nerf, the removal of totemswitching, and the justified fix to Rekindled Flame doubledipping from %firedamage modifiers.

- Improve firetotems contribution to personal damage. (Frankly, just nerf flametongue totem back down or make it's buff finally mutually exclusive with WF) Buffing Magma & Searing would be nice, but that isn't whats currently sinking the specc.

- Rebalance the Totem of Eruption. In fact, rebalance Crackling Thunder too while at it. I find myself using storm, or rage over either of these.
Alternatively, a talent or similar that makes Molten Blast not miss on targets with Flame Shock, or allowing it to refresh Flame Shock even on miss solves the worst of the feelsbad moment with the snapshotting.

When it comes to AOE, the easiest option is to salvage EQ, and turn it mechanically into a spell akin to Flamestrike. Ground targeted long cast time with a little bit of a lingering DOT effect. The Attackspeed debuff is entirely irrelevant, but it is a nice nod to warcraft 3 Earthquake and might as well stay.
Alternatively, Remove it's cooldown and make it a channeled ability akin to blizzard or rain of fire.

Nature as an element not being supported hurts more than just Ele shaman. Moonkin druid similarly suffer from this. The simplest option would just be to revert Stormstrike to be a debuff on the target like it used to be. Increasing nature damage taken by 20%. Stormstrike used to be bad because it was limited to two charges which got eaten up rapidly by rogue poisons or TF proccs. But simply making it a +20% nature damage taken debuff for it's duration, without a charge limit would restore this much needed help for nature based damge dealers of all kind. Heck even enhancer himself would arguably benefit from this, as currently their lightning shield orbs eat the damage buff they wanted for earthshock. Particularly with T3.5 equipped.

 **Lastly some historical design debt**

Molten Blast has a base castrange of 36 yards. Reduce it to 30 and allow it to benefit from the same talent that increases castrange of Lightning Bolt. It just makes sense, most dps spells have 30 yard range, a random spell just having 6 yards extra is jank. Doubly so, if it is meant to be used alongside Lightning Bolt.

Ancestral Swiftness still reduces damage done by 25%. We got pvp dampening in place so oneshots from elemental shamans are not really how people die these days (or rather, classes with less counterplay can blow you up just as well, so why is our 3 min CD needlessly neutered). EQ is not a useful PvP Capstone, yet the game actively punishes us for wanting to spend the talentpoints effectively for PvP.

Elemental Weapons fire damage bonus from the Flametongue imbue has been adjusted to only work after hitting stuff with your melee attack. This sucks for Enhancer, as you usually want to apply Flame Shock while running in to your target. But you loose 30% of it's potential damage if you didn't wait for a hit to proc it.
Similarly, if you get parried or dodged, the buff might fade, so you might not get the bonus for your firenova aoe. Or even the flametongue proc itself. The reasons Elemental used this talent was because Earthquake and Lightning Bolt were not worth using due to the plethora of factors listed above. Particularly nature not having a supporting spellschool was the big reason. As a result, in the current patch, even if you commit to using the subpar Flametongue Weapon as enhancer, you suffer from similar consistency issues that plague elemental. Just make elemental weapons buff flametongue + totem damage instead. (And maybe to a higher percentage to compensate for no longer buffing Flame Shock) that way enhancers Firenova Totem remains useful, without the risk of abuse by elemental.
This also prevents the incredibly sweaty playpattern of imbue switching to get a stronger Flame Shock every 15 seconds and switching back to Windfury afterwards.

To round it up, it's peak comedy, that using a weapon oil and WF + FT Totems is now outperforming Flametongue imbue since you get to benefit from both totems, but not from a Totem + an Imbue. And Flametongue weapon imbue is not strong enough to compensate for not having WF totem and a Weapon Oil or wetstone.

 **TLDR**
Shamans make the game fun for everyone else in the party, there is no reason why playing one in a raid environment needs to be this frustrating

## Post 174964 by Kokuyoo — 2026-04-12T13:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=174964#p174964 | page 1 | era: post-1.18.1 -->

Elemental mastery is awful, it has 3 min cd and last only 10 seconds, and it's not even 20% of more dmg... The cd should be either 1.5 min and increase the duration to 12 seconds so it last the same as the 3.5 bonus or increase it's duration to 20 seconds at least and it's damage to 20%.

Eartquake got destroyer for no reason, it was not even a busted ability, devs didnt even say anything about its changes, now its not worth using ST and does lower aoe damage too with it's big ass casting time.

I never liked MB as addition cause it feels like you need totem swap to make it worth, the dps gain from it is minimal, i don't see why rekindle can't crit now that fire ele is gone for good. That being said, in the current patch with karazhan 40, once you reach your full 3.5 set, You don't use Molten blast cause it doesnt refresh the 3.5 bonus so it becomes pretty pointless.

Talking about the itemization, most of ele bonus are terrible overall, this is something that should be adressed too. I also have complains about the current kara tier, for a crit based class, what's the point of a tier that give mostly haste ? (and the first bonus of the 3.5 is so minimal that its barely noticeable)  Haste can be bad if your crit is not high enough. Ah and lets not forget that we are the only caster without a legendary.

Talking about ele totems, it's really sad that ele bis totem is still a blue boe... Crackling is a joke, eruption and Totem of rage are pretty much irrelevante since you cant totem swap now and the new EQ from BWL is also a joke cuz adds dies too fast Even before the aftershock hits lol.

One of my biggest complain about ele shaman is how our totems do nothing at all for us, theres should be at least a benefit for us for buffing our party if adding a totem for caster is hard to "balance"...

I've been noticing it since i started playing in this server but devs don't Even touch ele/tank or resto shaman at all, they obviously play enha and is always being looked at but ele changes were terrible, bulwark for tanking is a terrible design and it's still bugged after almost a month... And resto got his chain heal nerfed cuz by devs logic, resto will use now another skills to heal but theres nothing better than chain heal even nerfed and still one buttom spam...

## Post 175015 by Mdzielak (Barrens Chat Casualty) — 2026-04-13T07:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175015#p175015 | page 1 | era: post-1.18.1 -->

To make ele nature dmg viable, curse of elements shall include nature dmg (it's element after all...) and Stormstrike buff shall be debuff again on target intead of  being inner enh buff.
It's clear that both ele sham and bala druid sucks in PvE now.
As ele shaman I'm in bottom dps table, behind me it's usually balance druid and some worse geared lock/hunter.

And please make EQ working as pre 1.18.1...

## Post 175219 by Atreidon (Grandmaster of Forum PvP) — 2026-04-14T17:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175219#p175219 | page 1 | era: post-1.18.1 -->

While im not entirely sure i'd agree with the statement that Elemental Mastery necessarily requires adjustment, its certainly not a button that feels good to press. Its effect while positive, are both very small and barely noticeable. To put some numbers to it, using it on cooldown, you save about 120 mana and deal 0.75 times a Lightning Bolts worth of damage every 3 Minutes. (Or about the same DPS gain as 1% haste)

While it is true that snappshotting increases its value slightly, the fact that its an offensive cooldown, that the shaman using barely notices the impact of, suggests it could use some tweaking. The Team nerfed its burst potential for fear of its impact in PvP.
Therefore, its probably the smartest choice to reduce cooldown, increase duration, or my personal favorite, massively increase its manacost reduction. This makes it have a genuine use, particularly for AOE Encounters which are very manahungry for us, without piling onto shamans already quite potent burstdamage.

Earthquake last patch was better, but it mostly had the same problems it does now, Albeit less extreme due to a shorter casttime.

I will actually defend the existence of Molten Blast. While i would not have added it either, Quite a lot of people hated the 1 button MB spam rotation. That means that rotation itself isn't fun. If we wouldn't have access to MB, currently our Rotation would be 100% Lightning Bolt. So i think the addition of MB was warranted to spice up our gameplay. Peoples dislike for MB spam last patch actually proved the Devteams point.

The T3.5 Setbonus making it not worth using a proper rotation is more a problem of that setbonus than an issue with molten blast to be completely fair.

Kokuyoo you bring up some good points on Itemisation however. The Stats and setbonuses lack a clear vision in some regard. I've taken it as inspiration for my own take on the Tierset bonuses for elemental.

 **Earthfury (T1)** 3 pieces: Increases the duration of your Searing Totem by 15 sec.
- Completely Irrelevant. Not only does the totem already last long enough to not need replacement in pretty much any fight that isn't a bossfight.Also re-dropping totem mid combat doesn't incur GCD anyway.
 5 pieces: Earth Shield increases all your resistances by 25 and increases your chance to ignore spell pushback by an additional 10%.
- While i did mention we have spell pushbrack problems, This Bonus while requiring 5piece T1 doesn't change that. We go from 80% pushback protection to 90%. So we still have to anticipate our pushbackprotection not working. The 25 Resistence is however nice.
All in all a low powerlevel Setbonus that wouldn't be offensively awful if the rest was decent.
 8 pieces: Earthquake's broken earth lasts 2 sec longer, and its aftershock deals 25% increased damage.
- The Attackspeed slow on EQ is too insignificant to matter in the first place, making it last longer doesn't change that. The aftershock going from 30 to 37.5% of the initial damage is equivalent to about 50 extra damage to each targets caught in aftershock. While upside, it's again incredibly minor.
 **Conclusion**
Overall T1 has setbonuses that are largely irrelevant to us. The items itself are loaded with castspeed. While castspeed is potent on shamans for single target, at the stage of the game when you get access to earthfury you will still have mana issues and Crit is much prefered over haste. Add to that that the items are minmaxed to only offer Stamina Int, Casttspeed and spelldamage, Manabreaks will be frequent and painful.

 **Ten Storms (T2)** 3 pieces: Increases the duration of your Flame Shock by 6 seconds.
- No Complaints here, it is a comfort bonus and results in DPS gain. Reqiring us to cast fewer Molten Blasts.
 5 pieces: your shock spells and Lightning Bolt have a 25% and 15% chance respectively to trigger your Lightning Shield's effect on the target without expending a charge.
- This bonus is flat out outdated for how Shaman plays in the current patch. Even in the patch it came out it was middling at best since we wanted to use watershield for manasustain. In the current patch, we use Earthshield in most encounters for pushback protection.

- Sacrificing either of your good shields is not worth ~25 DPS in Lightning shield charges.
 8 pieces: Your Lightning Bolt has a 20% chance to discharge an additional Lightning Bolt at no additional cost that does not generate any threat, but its damage is reduced by 50%. This effect can trigger only once every 3 sec.
- Considering it's it does have an Internal Cooldown, the actual prochance of this effect is closer to 16% than 20%, or on average about 8% dps gain for Lightning Bolt.

- But it doesn't end there, it's creating a second lightning bolt, giving you an additional chance to crit, and therefore Proc Elemental Focus.
 **Conclusion:**
So while the 5 Piece is quite a stinker, 3 and 8 Piece bonus are genuinely useful. The Set gives us mostly spellcrit and -hit rather than haste. So where is the issue? For most slots T2 is not BiS and additionally the powergap between T2 and higher content is very pronounced. Making this set worth getting at it's tierlevel, but loose it's value incredibly quickly as better individual pieces become available.

 **Stormcallers Garb (T2.5)** 3 pieces: Your Lightning Bolt, Chain Lightning, and Shock spells have a 20% chance to grant up to 50 Nature damage to spells for 8 sec.
- Small little DPS bonus on a 3 piece set. Not amazing, but the individual pieces are good, so this is fine
 5 pieces: Your Chain Lightning is imbued with unpredictable storm energies, it now chains to an additional target and deals 15% increased damage if it hits only one target.
- The 15% more Damage makes Chainlightning worth using in the singletarget dps. At least with no haste is involved. Since the Set does not have haste as a stat, that works.
 **Conclusion:**
Overall well stated set with minor but widely applicable useful bonuses. No complaint.

 **Earthshatterer's Garb (T3)** 2 pieces: Molten Blast's cast time is reduced by 0.2 sec.
- Last patch this was a must have, now it's just a minor powerboost, not exceptional but a minor upside for a 2 piece bonus, no complaints
 4 pieces: Improves your chance to hit with spells by 3%.
- This is a weird one, In pure stats, 3% spellhit is a very powerful setbonus, but the set itself is loaded with spellhit. While useful as long as you are still completing the set, this setbonus means you almost always have too much hit. (Full T3 has 6% + 3% from setbonus. Combined with the Elemental Devastation we are at 12% without Jewelry or weapons accounted for) This setbonus is part of the reason you never wear full T3, even if you have it. You are likely overcapping hit and are better off equipping offset pieces.
 6 pieces: Reduce the time between Searing Totem and Magma Totem's attacks by 0.4 seconds.
- People sleep on this Setbonus. +25% DPS on Searing Totem and Magma Totem are decent. Especially since it just works, we don't have any clunky hoops to jump trough.
 8 pieces: Earthquake causes your next Earth Shock within 8 sec to cause 125 to 186 additional damage to targets in a 6 yards radius.
- A little bit of cleave damage on Earthshock would be nice, but it relies on casting EQ beforehand. Meaning it's yet more backloaded damage conditioned on Earthquake.

- As already touched on with the 4 piece bonus, going full T3 set is not optimal for stat reasons. Doubly so in AOE encounters where most mobs aren't even Level 63 and require all that Hitchance this set offers. You are much better off ignoring this and wearing offset pieces.
 **Conclusion:**
 2, 4 and 6 piece are all nice little upsides akin to what we are to be expected from Setbonuses. But the 8 piece, which is supposed to be the pièce de la résistance falls completely short.

 **Stormhowl Garb (T3.5)** 3 pieces: Increase the mana-cost reduction of Clearcasting to 70%.
- Why is this here? This bonus by itself is okey, about 50 mana saved on every crit. But it is on an endgame set and you sacrifice T3 bonuses to wear this. At this point in time you should have your manaproblems sorted out. Unless you are speedrun chainpulling, This setbonus is useless, and if you are speedrunning, you are likely in the camp of players that uses so many consumables, manaregen is the last thing you want from a set.

- If this bonus was on T1, or T2, it would genuinely help with the Manamanagement. But at such a late stage of the game, it is almost entirely irrelevant.
 5 pieces: Elemental Mastery infuses you with the Stormwolf's Cunning, increasing your casting speed by 10% for 12 sec. This effect is refreshed when you critically hit an enemy with a nature spell.
- Haste is an incredibly powerful stat on elemental shaman for single target encounters due to how Lightning Mastery's castspeed reduction works with it. 17% is all we need to gain 25% more Damage. Unfortunately, that also marks the Hardcap of how much haste is Useful to us. More haste will just make our Lightning Bolts faster than global cooldown. The setpieces have 3% haste between them, this bonus is further 10%.

- It is incredibly easy to overcap on haste. (Other Gearpieces, Haste Bufffood, Totem of Crackling Thunder, Bloodlust or haste potion are all very easy to overcap you) And at the same time, this setbonus can not be relied upon. Some fights require DPS stops, target switching or movement mechanics that make it quite likely this bonus will fall off.

- No doubt a very powerful setbonus, but it is incredibly stressful and a string of bad RNG can just drop your DPS by 17% by itself.

- For players that can be bothered with finetuning their haste numbers to make use of this setbonus, future setbonuses would have to be absolutely insane to compete with the single target DPS this provides.

- It does have anti-synergy with the whole idea of using Molten Blast and Flameshock in your rotation. The DPS loss from loosing the setbonus is higher than the one from dropping Molten Blast, so in a pinch, you rather let MB drop than this Setbonus.
 **Conclusion:**
The Stormhowl set is undesirable to wear for it's first 4 pieces, as you sacrifice useful Setbonuses from T3. The individual stats of T3.5 are very strong, but just barely better than T3 + it's setbonuses. However the 5 piece bonus while stress inducing is wildly powerful and will mean unless we will see an Influx of very potent hastegear, it will likely remain the set to wear if you can keep the buff going.

Looking at the Stormhowl set closer makes me realize why the experience of many shamans has been much much worse than the logs for top performing shamans and the devteams testing seems to suggest that the spec is in fact fine. If you happen to have full stormhowl and manage to keep it running all fight, the performance of Shaman is actually somewhat tolerable.

In summary
Way too much of Shamans theoretical powerbudget is gated behind this 5 piece Setbonus. Making shaman perform way worse than stats from Turtlogs suggest unless he procures this 5piece bonus. And additionally, in all likelyhood will continue to outclass literally any other set as long as Elemental Mastery is available in a single target encounter that doesn't require DPS stops.
The 3 set bonus needs to be overhauled, the 5 piece toned down massively ans shaman buffed baseline.

 **TLDR:**
The 5 Piece T3.5 Setbonus is overstatted and suggests Elemental is actually serviceable, which is only true with exactly 5 pieces T3.5. Outside of this very specific gearing scenario, Elemental Shaman is much worse than analyzing the top logs would suggest.

## Post 175273 by Mdzielak (Barrens Chat Casualty) — 2026-04-15T06:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175273#p175273 | page 1 | era: post-1.18.1 -->

> **Atreidon wrote: Tue Apr 14, 2026 5:52 pm**
> The 15% more Damage makes Chainlightning worth using in the singletarget dps. At least with no haste is involved. Since the Set does not have haste as a stat, that works

Just one remark - rotation for max dps on single target should look like 3LB+CL or 4LB+CL depending on your haste (and ofc keeping flameshock on with MB).
CL is 1.5s cast and has higher dmg output than LB. That's the theory - quite mana hungry one i'd say.
Spamming LB is more mana conservative but your dps is lower.

Beside this, very comprehasive tier bonus guide   happy_turtle

## Post 175340 by Noephix (Patch Note Conspiracy Theorist) — 2026-04-15T14:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175340#p175340 | page 1 | era: post-1.18.1 -->

> **Atreidon wrote: Tue Apr 14, 2026 5:52 pm**
> **TLDR:**
>  The 5 Piece T3.5 Setbonus is overstatted and suggests Elemental is actually serviceable, which is only true with exactly 5 pieces T3.5. Outside of this very specific gearing scenario, Elemental Shaman is much worse than analyzing the top logs would suggest.

Elemental shaman isn't the only spec in the game like that. I wonder if it's the new design philosophy.

## Post 175347 by Kokuyoo — 2026-04-15T15:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=175347#p175347 | page 1 | era: post-1.18.1 -->

Overall i think ele mastery needs a buff, EQ should be fixed to it's 1.18 version or just give us a new capstone talent and our totems doing nothing for us is also a problem that should be adressed

