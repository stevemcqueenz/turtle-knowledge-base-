---
title: "The oddity to increase Holy DMG (feat CS and JoC)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3840"
topic_id: 3840
forum_id: 41
forum: "Paladin"
author: "Akil1337"
author_authority: "player"
posted: "2022-08-22T17:22:00Z"
last_post: "2022-08-28T15:28:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T08:00:08Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# The oddity to increase Holy DMG (feat CS and JoC)

## Post 23152 by Akil1337 — 2022-08-22T17:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23152#p23152 | page 1 | era: pre-1.18.1 -->

I recently saw a discussion if Crusader Strike and Judgement of Crusader stack. And cause im an engeneer, i feld the urge to crunch the numbers... xD

 **Ability Text:**
 *Judgement of Crusader* (Rank 2): ... will increase Holy damage taken **by up to 30**.
 *Crusader Strike* (Rank 1): ...increase the holy damage taken by the target **by up to 6 per stack** of Crusader Strike... can stack up to 5 times (--> so equal 30 at 5 stacks)

So i started to record the dmg of all Abilities with holy dmg, my lil lvl 16 pala has:
 - Seal of Righteousness
 - Judgement of Righteousness
 - Holy Strike

under different conditions, where holy damage is buffed:
 1) without Judgement of Crusader or Crusader Strike as reference
 2) with 1 Stack Crusader Strike
 3) with 2 Stacks Crusader Strike
 4) with 3 Stacks Crusader Strike
 5) with 4 Stacks Crusader Strike
 6) with 5 Stacks Crusader Strike
 7) with Judgement of Crusader
 8) with 5 Stacks Crusader Strike and Judgement of Crusader

I tested on a level 1 Training Dummy. Did a few fights and calculated the average from them.

 **Interesting founds:**
 ***You never reach the maximum possible:***
Crusader Strike states **up to 6 additional Holy dmg per stack**, same is with Judgement of Crusader. But they never reach the stated maximum. Interesting enough - they doing constant about 33% from the max. possible DMG.

![Image](https://i.imgur.com/WMgVcHr.png)
![Image](https://i.imgur.com/WyV8CU3.png)

 ***Crusader Strike and Judgement of Crusader stacking:***
In the diagrams above you can also see, that the 5 stacks of CS are stacking with JoC. CS is stating otherwise, but to be hornest - they should stack in the first place. Its a better playstyle - one button more to press xD

I did the math for this example and the tolerance from the real CS+JoC with simply added CS+JoC is 1 to 2 DPS. So they are stacking for the correct amount.

 ***The (physical) damage from Crusader Strike is bugged:***
I only recognized this bug, cause I tested if the flat damage of Crusader Strike stacks with itself. My Rank 1 Crusader Strike should do 12 damage flat when used. Pictures prove, they do less then that.
(its only 1 damage, but this means there is a bug anywhere)

![Image](https://i.imgur.com/se1mE75.png)
![Image](https://i.imgur.com/xTNZXt0.png)
![Image](https://i.imgur.com/7prMnoO.png)

So is there a good way to insert my Excel sheet here? I dont get how the Table feature work... As scientist i would love to provide my data xD

cheers

## Post 23171 by Geojak (Grandmaster of Forum PvP) — 2022-08-22T21:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23171#p23171 | page 1 | era: pre-1.18.1 -->

Might be armor affecting ca dmg. Why you don't see 12

## Post 23180 by Kwayver (Barrens Chat Casualty) — 2022-08-23T01:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23180#p23180 | page 1 | era: pre-1.18.1 -->

The terminology used in wow "up to x damage" is used to express the maximum damage dependent on scaling. If a super or effect has 100% sp coefficient it would deal extra damage based on your sp x100%. SoR has about a 33% scaling coefficient so it receives 33% of the benefits any +sp or +holy damage a tooltip will denote.

CS is a physical attack indicted using your main hand weapon. This means it is lowered by the targets armour.
It also means it benefits from armour penetration though, so a weapon like Bonereavers Edge has some use to ret paladins.

While it is very beneficial that both these effects stack it's important to remember:
 - JotC will take the place of JoW so longer fights will see you probably out of mana and not gaining the most out of proc playstyle.
 - It is unlikely a raid leader would be comfortable assigning a debuff slot to a judgement which only benefits the Paladin (and maybe a smite priest) over a judgement which benefits all the casters in raid.

## Post 23341 by Akil1337 — 2022-08-24T16:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23341#p23341 | page 1 | era: pre-1.18.1 -->

you are both right with the Armor. I read it out with the Macro [ /script ar=UnitArmor("target"); print(ar) ] and the dummy has indeed 100 Armor. Didnt expected that from a lvl 1 dummy :D

So do I fully understand that: a debuff on target with "Increasing damage taken by up to XY" is internal calculated as caster's Spellpower?

Yea the debuff slot by a raidleader and else was not my point. I wanted to investigate if they both stack - they do. And I think thats good to know, if you want to kill an Elite while leveling or maybe in dungeons on bosses or maybe even PvP.

The procc playstyle is with SoR or am I wrong?

## Post 23604 by Kwayver (Barrens Chat Casualty) — 2022-08-26T21:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23604#p23604 | page 1 | era: pre-1.18.1 -->

It is calculated as spell power (or holy spell damage) so it conforms to spell and ability scaling.
SoR is the preferred seal for proc playstyle because the seal damage can activate weapon effects. Essentially each weapon swing is 2 chances to proc something. So long as this remains the case, no other seal will compete even with significant overhauls in a raid setting with windfury available.

## Post 23832 by Akil1337 — 2022-08-28T15:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=23832#p23832 | page 1 | era: pre-1.18.1 -->

thanks for the explanation!

