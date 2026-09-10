---
title: "Food/Water Mage Macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7917"
topic_id: 7917
forum_id: 43
forum: "Mage"
author: "Ballabulk"
author_authority: "player"
posted: "2023-06-21T15:33:00Z"
last_post: "2023-10-16T16:16:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:05:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Food/Water Mage Macro

## Post 50847 by Ballabulk — 2023-06-21T15:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50847#p50847 | page 1 | era: pre-1.18.1 -->

Hi, i was testing out this macros [https://github.com/Meridaw/Vanilla-Macr ... 20level.md](https://github.com/Meridaw/Vanilla-Macros/blob/master/Mage/Casting%20rank%20depending%20on%20target%27s%20level.md)

Turns out the Macros for water and food doesnt work

this is the error: ERROR: [string "a="Conjure Water" b={1,5,15,25,35,45,55} c=..."]:1: attempt to compare table with number

if i have no target the makros will conjure the water and food for level 55

any ideas?

## Post 50848 by Bigsmerf (Grandmaster of Forum PvP) — 2023-06-21T15:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50848#p50848 | page 1 | era: pre-1.18.1 -->

Okay now, hear me out...

Click the spell. It SHOULD conjure food, or water, depending on which one you click.

## Post 50850 by Ballabulk — 2023-06-21T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50850#p50850 | page 1 | era: pre-1.18.1 -->

![Image](https://i.imgur.com/VQUauFf.jpg)

it does not :(

## Post 50855 by Baess — 2023-06-21T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=50855#p50855 | page 1 | era: pre-1.18.1 -->

The variable b is a table, you are just comparing the targets level to a table but not telling it which part,  where it says >=b it should be >=b i but the i needs to be in square brackets i think. The no target conjure works because that but just cast the spell

## Post 51518 by Ballabulk — 2023-06-27T17:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51518#p51518 | page 1 | era: pre-1.18.1 -->

this macro works in case someone is interested
Code: Select all

```
/script r=7;l={1,5,15,25,35,45,55};if not UnitIsFriend("player","target")then TargetUnit("player");end;t=UnitLevel("target");for i=r,1,-1 do if (t>=l[ i]-10) then CastSpellByName("Conjure Water(Rank "..i..")");break;end;end
```

i found out, that if you leave it like this and your target for example is level 23, it will make 25 level water wich the target cannot drink. so here the better version (i removed the -10 behind the "(t>=l*-10) then...."*
Code: Select all

```
/script r=7;l={1,5,15,25,35,45,55};if not UnitIsFriend("player","target")then TargetUnit("player");end;t=UnitLevel("target");for i=r,1,-1 do if (t>=l[ i]) then CastSpellByName("Conjure Water(Rank "..i..")");break;end;end
```

## Post 71264 by Alienns — 2023-10-16T15:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71264#p71264 | page 1 | era: pre-1.18.1 -->

There was a addon for this and buffs also, maybe someone can remember and post it here, so we have that also...
Addon was work that way if you target someone it will make best water/food for his lvl and also give him best buff as mage.

## Post 71290 by Ashstache (Barrens Chat Casualty) — 2023-10-16T16:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=71290#p71290 | page 1 | era: pre-1.18.1 -->

> **Alienns wrote: Mon Oct 16, 2023 3:23 pm**
> There was a addon for this and buffs also, maybe someone can remember and post it here, so we have that also...
>  Addon was work that way if you target someone it will make best water/food for his lvl and also give him best buff as mage.

 **Arcanum**, I highly recommend it, but it does not include the new custom items (oranges, the ritual to conjure them, nor the Theramore teleport/portal). A member of staff communicated to me in the #addons channel in the official discord that he was taking a whack at it, but the coding for the addon is, honestly, insane.

> This is Arcanum, a very old mage addon (2006), but for me the very mage addon ever made. Someone asked for it and it looks hard to find, so here is the version  I used without issues for >15 years on many pserv 1.12
>
>  * Several buttons with shortcuts to your mage spells useful: Conjure water / food / mana gems, gathering portals and teleporting, and Arcane Intellect, armor, Amplify and Dampen Magic, and mount your / your business.
>  * The amount of water / food / mana and reactive powders such as arcane, runes of portals and rune of teleportation are on their fate related buttons. For mana gems, you'll have time to recharge it when it will consume.
>  * Click right button on the Water / Food / Gem mana to invoke and left click to use. It creates drink or food for the level of your target
>  * Click on the middle button is configurable. You can choose a function for each click 3 buttons (left, center and right)
>  * Remove all items cited in the configuration panels.
>  * Buy all your reagents automatically when you go to the merchant.
>  * Speech in party or raid a random message on invocation of Portal

![Image](https://media.discordapp.net/attachments/466627627554439178/1030422748171862106/unknown.png?ex=653b8cf7&is=652917f7&hm=5241f790809d2c43f8e9c66339c755455b11790b92b7fc158d266fa9bd8944d8&=)

[Here's the download](https://cdn.discordapp.com/attachments/466627627554439178/1030422747689517096/Arcanum.zip?ex=653b8cf7&is=652917f7&hm=f200b8698be7effa7fbb3b5862c7a36b9066bc13161d02a60268d19f1d4036d6&)

