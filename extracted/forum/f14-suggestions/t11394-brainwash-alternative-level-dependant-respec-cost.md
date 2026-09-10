---
title: "Brainwash Alternative: Level-Dependant Respec Cost"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11394"
topic_id: 11394
forum_id: 14
forum: "Suggestions"
author: "Mativh"
author_authority: "player"
posted: "2023-11-01T21:21:00Z"
last_post: "2023-11-02T17:24:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T12:04:33Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Brainwash Alternative: Level-Dependant Respec Cost

## Post 75330 by Mativh (Patch Note Conspiracy Theorist) — 2023-11-01T21:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75330#p75330 | page 1 | era: pre-1.18.1 -->

People are asking for a reversal of the brainwashing device exploit fix, I instead propose something that will make that exploit obsolete, while talent choices will still remain relevant.
In the spirit of Turtle WoW, where emphasis is put on the journey, not only the destination.

In vanilla, the devs assumed that during each subsequent respec the character would be higher level so higher price each time would represent well the amount of gold relative to the level + the value of respeccing. This was capped at 5g, which is a good compromise between character.
However it is too expensive on low levels (and perhaps too cheap on high levels).

Respec should have instead a fixed price and add value depending on the players level.

Option 1 (making it cheaper first, but keeping it at 5g at 60)

Level 10 respec cost: 10 silver

+ 10 silver per each level

Resulting in 1 gold 10 silver at 20,
 2 gold 10 silver at level 30,
 3 gold 10 silver at level 40,
 4 gold 10 silver at level 50,
 5 gold 10 silver at 60.

Option 2 (cheaper first, more expensive later)

Or it coud be 15 silver at level 10, and +15 silver every level, so it it reaches 1.65 g at 20, 4.65 g at 40, and 7.65 at 60.

Only the level at the moment of respeccing should influence the price, the price would always be capped for the players level, this way the subsequent respeccing doesn't need to be a factor as it would not have to be simulated, since the price would increase with each level.
_________________
Alternatively, there could be a fixed max respec cap of 10 gold, and a semi-respec option, that would capped at 20 silver, allowing to unlearn 1 talent point of choice, it could be bought multiple times to unlearn let's say the last 5 talents that one wishes to change. This option makes in fact the most sense immersion-wise; for example your arms warrior character is changing his ways, becoming good with lets say axes and practice less with swords, at the trainer unlearning sword specialization to put points into poleaxe specialization. In these cases the player wouldn't spend the full price of unlearning all the acquired talents, but only a few of choice.

*Last edited by Mativh on Thu Nov 02, 2023 11:51 pm, edited 10 times in total.*

## Post 75418 by Xudo (Grandmaster of Forum PvP) — 2023-11-02T10:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75418#p75418 | page 1 | era: pre-1.18.1 -->

Cant reproduce your calculations. How exactly you calculated 1 gold 8 silver?

This change looks reasonable. There are a lot of things which increase its cost as long as your level increases.
I thought about making respec to cost player time instead of player gold. Like repeatable quest with task to travel to other side of planet and back to reset your talents. Because I don't imagine respec to be gold sink. To make it meaningful decision, it should require adequate effort instead of small tax. Player also should not be able to prepare once to change spec multiple times. This effort should be done each time you want to reset talents.
Maybe this quest should feature killing multiple humanoid mobs (which yield experience or honor) with some special tool like warlock's drain soul. Amount of mobs should be equal to your level.

There are games where you can unlearn talents one by one. PoE and Titan Quest came to my mind first. I think it is good idea too. But I am afraid it is too complex to implement. You need both client side and server side and probably networking protocol changes. Too much effort for too small outcome.

## Post 75452 by Terras — 2023-11-02T13:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75452#p75452 | page 1 | era: pre-1.18.1 -->

so your calculation is off on the top end. using the calculation Y=(5X)*1.08 where Y is the price and X is the level you get the 1G 08S cost for level 20 but the level 60 cost ends up being 3G 24S.

If you want a scaling cost for the gold that hits 1.08G at 20 and 13G at 60 you need to use Y=0.298X-4.88. this gives you a linear scaling amount that meets the lvl 20 lvl 60 costs but this would however make the cost at 40 7.04G.

If you want to use something closer to the cost scaling, you showed in your post you could do Y=(5X)*(0.08X) but you would get 1.6G at 20 and 14.4G at 60. Alternatively, you could do Y= ((5(X-Z))*(0.08X)+10) Where Z is the cost start level (10). With that you get 0.9G at 20 and 12.1G at 60

## Post 75510 by Mativh (Patch Note Conspiracy Theorist) — 2023-11-02T17:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=75510#p75510 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Thu Nov 02, 2023 10:21 am**
> How exactly you calculated 1 gold 8 silver?

> **Terras wrote: Thu Nov 02, 2023 1:00 pm**
> you could do Y=(5X)*(0.08X) but you would get 1.6G at 20 and 14.4G at 60. Alternatively, you could do Y= ((5(X-Z))*(0.08X)+10) Where Z is the cost start level (10). With that you get 0.9G at 20 and 12.1G at 60

I've updated it. Scaling would be more accurate, however the player would make more sense of it in game like this:

 10 silver at level 10, +10 silver each level
(so it's 1.1 gold at 20, 3.1 at 40, 5.1 at 60).

Or 15+15
(1.65 g at 20, 4.65 g at 40, 7.65 g at 60)

The previous (discarded) formula was:
Level 10: 10 silver
Level 11: (10 silver + 5 silver) + 8% = 16 silver 20 copper.
and so on.
> **Xudo wrote: Thu Nov 02, 2023 10:21 am**
> This change looks reasonable. There are a lot of things which increase its cost as long as your level increases.
>  I thought about making respec to cost player time instead of player gold. Like repeatable quest with task to travel to other side of planet and back to reset your talents. Because I don't imagine respec to be gold sink. To make it meaningful decision, it should require adequate effort instead of small tax. Player also should not be able to prepare once to change spec multiple times. This effort should be done each time you want to reset talents.
>  Maybe this quest should feature killing multiple humanoid mobs (which yield experience or honor) with some special tool like warlock's drain soul. Amount of mobs should be equal to your level.
>
>  There are games where you can unlearn talents one by one. PoE and Titan Quest came to my mind first. I think it is good idea too. But I am afraid it is too complex to implement. You need both client side and server side and probably networking protocol changes. Too much effort for too small outcome.

I was sticking to the original model (respec being a gold sink), trying to perfect it, but I agree that it'd be more immersive if unlearning the talents would require some activity instead. Ideally I'd combine that with the one by one unlearning (each point requiring an item obtained via questing).

