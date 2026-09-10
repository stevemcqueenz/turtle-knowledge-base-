---
title: "Moonkin DPS Calculator"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10384"
topic_id: 10384
forum_id: 42
forum: "Druid"
author: "Kangaraxxus"
author_authority: "player"
posted: "2023-09-30T18:05:00Z"
last_post: "2024-01-03T22:27:00Z"
post_count: 18
pages: 1
fetched: "2026-09-10T08:03:00Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Moonkin DPS Calculator

## Post 67792 by Kangaraxxus — 2023-09-30T18:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67792#p67792 | page 1 | era: pre-1.18.1 -->

[https://docs.google.com/spreadsheets/d/ ... sp=sharing](https://docs.google.com/spreadsheets/d/1MUxlJIodMEGa6bne2Mb2s4hae4jNciK2NTxJ0HiIang/edit?usp=sharing)

General conclusions you can get from this calculations:
 * Wrath has better scaling than any other spell - from SP, from crit and from Judgement of Wisdom
 * Downranking Wrath is better than using Starfire in terms of damage per mana, and still get better DPS
 * Thanks to Nature's Grace, crit stacking effectiveness falls off much slower for Wrath than for Starfall
 * 1% crit still worse than 1% hit until cap, but not by much, like 1% hit ~= 1.13% crit ~= 12.2 SP
 * Having Nature power enchant and elixir you still get better DPS using MF than IS
 * Best DPS will always be keep MF on as many targets as possible without clipping and use rest of available gcd's on Wrath

Edit: above link is OUTDATED, use this instead [https://docs.google.com/spreadsheets/d/ ... ZufOw6we9g](https://docs.google.com/spreadsheets/d/1IACK4CltzOMmULWtprWE9lV86zl2La3fUZufOw6we9g)

*Last edited by Kangaraxxus on Fri Oct 10, 2025 7:50 pm, edited 2 times in total.*

## Post 67796 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-30T18:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67796#p67796 | page 1 | era: pre-1.18.1 -->

Nature's Grace doesn't work on GCD, by the way, so your calculator has a bit of a flaw.

## Post 67798 by Kangaraxxus — 2023-09-30T18:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67798#p67798 | page 1 | era: pre-1.18.1 -->

> **Redmagejoe wrote: Sat Sep 30, 2023 6:40 pm**
> Nature's Grace doesn't work on GCD, by the way, so your calculator has a bit of a flaw.

Well in NG talent tooltip it says that GCD is reduced by 0.5 second too, custom turtle change. Though i notice that doing 1 sec wrath cast + MF doesn't work as smooth as 1.5 sec wrath + MF, thats why i did that delay input

And it seem like wrath gcd is smaller than other spells, even without NG proc.

*Last edited by Kangaraxxus on Sat Sep 30, 2023 7:03 pm, edited 1 time in total.*

## Post 67799 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-30T19:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67799#p67799 | page 1 | era: pre-1.18.1 -->

It says it lowers it, yes, but it doesn't actually.

## Post 67800 by Kangaraxxus — 2023-09-30T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67800#p67800 | page 1 | era: pre-1.18.1 -->

did you do any tests? or just from your perception?
sometimes it seems like i can chain NG wrath without delay

## Post 67802 by Redmagejoe (Grandmaster of Forum PvP) — 2023-09-30T19:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67802#p67802 | page 1 | era: pre-1.18.1 -->

> **Kangaraxxus wrote: Sat Sep 30, 2023 7:07 pm**
> did you do any tests? or just from your perception?
>  sometimes it seems like i can chain NG wrath without delay

It is precisely a 0.5 second delay after the visual 1.0 second cooldown with Nature's Grace up, whereas when Nature's Grace is not up, and there is no illusion of a cooldown less than 1.5 seconds, it perfectly, smoothly chains. The fact that an error occurs when Nature's Grace is active and you are trying to cast before 1.5 seconds has elapsed is indication of this behavior.

## Post 67803 by Kangaraxxus — 2023-09-30T19:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67803#p67803 | page 1 | era: pre-1.18.1 -->

I wonder if devs are aware of this?

## Post 68690 by Kangaraxxus — 2023-10-04T13:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=68690#p68690 | page 1 | era: pre-1.18.1 -->

It seems Nature's Grace talent got fixed in 1.17 to work as described. Now I can shoot Moonfire right at the end of 1 second Wrath cast.

## Post 70415 by Icedcream (Barrens Chat Casualty) — 2023-10-12T19:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70415#p70415 | page 1 | era: pre-1.18.1 -->

dead_turtle_head  Yah I did my tests aft we but druids on the discord keep saying they are the gcd delay but I don't.

Further my DPS meter reads wrath as more

## Post 70906 by Kangaraxxus — 2023-10-15T11:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70906#p70906 | page 1 | era: pre-1.18.1 -->

Updated calculator to also account for Omen of Clarity in damage per mana calculations, and to account dps for boss Spell Resistance.
OoC is generaly considered 10% chance to proc, which almost exactly converts into 10% reduction of mana costs excluding misses.
For Spell Resisstance i adopted formula that each 10 of it reduce dps for 2.5% and that 63lvl target would have 15 unpenetratable Spell Res. Though for dots it probably works different because i noticed that each individual tick never gets partial resistance, so once you managed to land it - thats gonna be full damage. And chance to land it affected by only somewhat high Spell Res. values, like 90 or so. For Moonfire i only reduce initial damage part by Spell Res coeff, and for Insects Swarm i do nothing. If anyone knows how to properly calculate it, pls tell me.

## Post 72659 by Kangaraxxus — 2023-10-21T23:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72659#p72659 | page 1 | era: pre-1.18.1 -->

Split Nature and Arcane spell res calculations
Factored in Curse of Shadows 10% arcane dmg buff
Added input for Storm Strike nature dmg buff, put there how much do you estimate it will affect your wrath dps. That debuff itself increase nature dmg by 20% for next 2 spells. On practice it's almost non existent.
Added input for your cast delay as it becomes more important with wrath rotation

## Post 75052 by Icedcream (Barrens Chat Casualty) — 2023-11-01T03:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75052#p75052 | page 1 | era: pre-1.18.1 -->

I heard the 1.17 patch fixed gcd and posted videos of my test in the druid discord channel. The bots replied that they can see a pause, but I think they are 100% crazy. I've done dozen of wrath and Starfire test and find the DPS to be better on wrath.

I don't get consistency with uptime on storm strike being up, but pretty good uptime and it is 20% and wrath is by default stronger

I've long questioned if people have proc rates on omen and If it is affected by cast time. In tests it seems to favor Starfire more. I by gut feel it procs more.  Could be crazy though.

As for Crit and hit I think they are over simplified
 1) missed shots can't proc omen so it amplifies the disadvantage of a hit. Depends what omens proc rate is, boss or trash, and how long a fight is. As well if you tea and pot or coast.
 2) I think hit and Crit gain value as you spell power is higher.
 3) brb started a math argument about the power of Crits, but never finished it.

## Post 75070 by Icedcream (Barrens Chat Casualty) — 2023-11-01T04:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75070#p75070 | page 1 | era: pre-1.18.1 -->

I was looking at your spread sheet in TWow did they change the SP coefficient? The dmg I do seems comparable to what I expect Wrath =57.14% and Starfire = 100%.

Do you have 800 sp and 22% crit? :P If so i'd love to see your character on the armory and I think this all dissolves to dust as you are probably beyond BIS.

can you also explain why you thought 1.12% crit = 1% hit = 12 sp?

So I think we all agree 1% crit = 1% dmg, 1% crit does not = 1% DPS. Because of the haste factor. In a LAB type scenario with 1 variable (no spell resist or miss) 100 shots.

If you have zero spell power, you hit 217 dps with zero crits. If you crit 5% you see a 6.78% DPS gain (231 DPS) and a 5% dmg gain.  14 dps gain / 5% crit = 2.9 dps per crit. However, if you are at 355 sp , no crit = 352 DPS. 5% crit = 376 DPS which means for every point of 1% crit you gained 4.9 DPS. There technically is no theoretical 0% crit, but just a base value.

Unless my math is totally crazy I think the value of 1% crit ranges from 1.36 - 1.45 per (@25%) per 1% crit.

I don't like 12SP = 1.12 % crit = 1% hit.

I think from no gear to high gear I think there may be a value range of 8-15 SP to 1% crit depending on <150 SP to 500 SP. Meaning as every point of spell power accumulates your value of each additional point of SP declines compared to 1% crit.

## Post 75974 by Algeri420 (Barrens Chat Casualty) — 2023-11-05T10:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75974#p75974 | page 1 | era: pre-1.18.1 -->

does boomkin dps still sucks and I should roll shadow priest?

## Post 76012 by Kangaraxxus — 2023-11-05T16:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=76012#p76012 | page 1 | era: pre-1.18.1 -->

800 SP thats value under full buff
Flask(150) + Greater Arcane Elixir(35) + Oil(35) + Food(22) + Dreamshard Elixir(15) + Dream tonic(35) = 292
My unbuffed SP now is ~550, in BiS it should be something about 630
However I might consider switching some SP in favour of crit

> * 1% crit still worse than 1% hit until cap, but not by much, like 1% hit ~= 1.13% crit ~= 12.2 SP

So first of all it was an estimation, I did it using my stats of about 500 sp at that time, not considering buffs

Considering full buff and my current equip I think that 1% hit ~= 1.13% crit is still relevant, though  1% hit ~= 15 SP

Rising your crit fom 0 to 1% would idd be a 1% dps increase
But increasing crit from 20% to 21% your math should be 121/120 = 1.008333 => 0.83% dps increase
Reducing your chance to miss from 10% to 9% => 91/90 = 1.01111 => 1.1% dps increase

Factoring in Nature's Grace proc complicates all of the math, but in general it improves crit scaling, for Wrath better than for Starfire

*Last edited by Kangaraxxus on Thu Feb 08, 2024 4:22 am, edited 1 time in total.*

## Post 83512 by Bayanni (Patch Note Conspiracy Theorist) — 2024-01-03T08:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83512#p83512 | page 1 | era: pre-1.18.1 -->

I believe I'm BiS at 1028sp and 24% crit fully raid buffed.

I've tested wrath on a full run of Naxx vs my usual MF into SF rotation and found it to be woefully lacking. On paper wrath should do better but in practice it was roughly 30% less output in a raid setting killing all bosses. I died twice and still was worse than starfire runs where I died more. I only went oom on KT. I do not believe it is better to use over starfire in any scenario where you can cast starfire as a result.

## Post 83572 by Kangaraxxus — 2024-01-03T22:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83572#p83572 | page 1 | era: pre-1.18.1 -->

I'm raiding with Wrath + MF rotation and doing pretty well. Not sure how is it 30% worse for you while it should be 5-10% better. But here my guess what could have affected it in such way:
- maybe you have too much gear giving just arcane spell power
- maybe your ping is very bad which will have more impact on wrath rotation than on SF, consider using nampower.dll
- most bosses have 15 spell res to all types, though it usally negated by curses of shadow and elements, which works on everything except nature. So i recommend having 20 spel pen, T2.5 set provides 40 and even if you replace shoulders and boots there should still be 20 on chest and it is BiS
- some bosses have more than 15 spell res, like Ouro, and i think KT too. I have set with 70 spell pen compromising 2% hit and some SP, but it very much worth it.

## Post 83575 by Bayanni (Patch Note Conspiracy Theorist) — 2024-01-03T22:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=83575#p83575 | page 1 | era: pre-1.18.1 -->

> **Kangaraxxus wrote: Wed Jan 03, 2024 10:04 pm**
> I'm raiding with Wrath + MF rotation and doing pretty well. Not sure how is it 30% worse for you while it should be 5-10% better. But here my guess what could have affected it in such way:
> - maybe you have too much gear giving just arcane spell power
> - maybe your ping is very bad which will have more impact on wrath rotation than on SF, consider using nampower.dll
> - most bosses have 15 spell res to all types, though it usally negated by curses of shadow and elements, which works on everything except nature. So i recommend having 20 spel pen, T2.5 set provides 40 and even if you replace shoulders and boots there should still be 20 on chest and it is BiS
> - some bosses have more than 15 spell res, like Ouro, and i think KT too. I have set with 70 spell pen compromising 2% hit and some SP, but it very much worth it.

A lot of your theories can be negated by me pointing out that I have boomkin BiS, none of which gives +arcane damage except the glove enchant and comes with spell pen already.

