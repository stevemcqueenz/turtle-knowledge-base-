---
title: "Probability of occurrence about Pendant of the Faceless"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9381"
topic_id: 9381
forum_id: 14
forum: "Suggestions"
author: "Jingking"
author_authority: "player"
posted: "2023-09-08T08:46:00Z"
last_post: "2023-09-17T12:22:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T12:08:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Probability of occurrence about Pendant of the Faceless

## Post 61444 by Jingking — 2023-09-08T08:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61444#p61444 | page 1 | era: pre-1.18.1 -->

We all know that the probability of a piece of equipment can be queried through the database for its probability number and where to get it, and I was quite happy when I learned that the probability of Pendant of the Faceless in the database was 1.2%, which was much higher than the 0.005% shown by addon, which meant that I only needed to complete about 100 kills, so at least once I could get the equipment, but after I completed 100 or more kills, this was 1.2% The probability did not happen, so I contacted GM, who told me that there was a 1.2% probability of each individual kill, not at least once completed 100 times, and according to the most basic theory of statistics, if this necessary data is not included in big data, then this necessary data is invalid. So I would like to ask how this 1.2% database conclusion was reached

## Post 61450 by Hctwowfan (Bug Report Enthusiast) — 2023-09-08T09:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61450#p61450 | page 1 | era: pre-1.18.1 -->

That's not how probability works. To put this into perspective, here's what you need to consider:

If it has a 1.2% chance to drop, it has a 98.8% chance to not drop.
It then has a chance of 0.988^2 = 97.61% to not drop in two attempts.
It then has a chance of 0.988^3 = 96.44% to not drop in three attempts.
...
You could work that out to find how many attempts it takes to get to a 50/50 of seeing it.

What we'd be looking for is:
 0.988^n = 0.5
nlog(0.988) = log(0.5)
n = log(0.5)/log(0.988) = 57.41
which means that it takes 58 attempts to have a 50/50 of getting the drop.

After your 100 attempts of getting the drop:
 1 - 0.988^100 = 0.7009 = 70.09%
you had a ~70% chance of getting the drop, which still leaves you at 30% of not having gotten it.

 100 attempts is too few to question the drop%

## Post 61451 by Mcnair (Barrens Chat Casualty) — 2023-09-08T09:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61451#p61451 | page 1 | era: pre-1.18.1 -->

That is not how statistics work. All kills you do are independent, so having the item not dropped will not increase your chance on the kill to get it.
If the individual chance of the item dropping on a kill is 1.2%, then after 100 kills you have about 70% chance that the item dropped at least once. After 200 kills, you have about 91% chance of it dropping at least once during that 200 kills. That sounds already quite good, but be aware you still have a ~1 in 10 chance to not see it drop even after 200 kills. You have to go up to 382 kills to have a 99% chance that the given item drops at least once over these 382 kills.
Since the drop chance is independent of the number of kills, there is no way to reach 100% drop chance ever. (But of course you can get very close to that.)

## Post 61457 by Jingking — 2023-09-08T09:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61457#p61457 | page 1 | era: pre-1.18.1 -->

> **Mcnair wrote: Fri Sep 08, 2023 9:05 am**
> That is not how statistics work. All kills you do are independent, so having the item not dropped will not increase your chance on the kill to get it.
>  If the individual chance of the item dropping on a kill is 1.2%, then after 100 kills you have about 70% chance that the item dropped at least once. After 200 kills, you have about 91% chance of it dropping at least once during that 200 kills. That sounds already quite good, but be aware you still have a ~1 in 10 chance to not see it drop even after 200 kills. You have to go up to 382 kills to have a 99% chance that the given item drops at least once over these 382 kills.
>  Since the drop chance is independent of the number of kills, there is no way to reach 100% drop chance ever. (But of course you can get very close to that.)

If each kill is a separate event according to you, then the result of the separate event is only Y and N, there will be no so-called percentage, only if the total number of a hundred random times is satisfied and enough necessary  obtained numbers, it can be called a percentage

## Post 61458 by Jingking — 2023-09-08T09:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61458#p61458 | page 1 | era: pre-1.18.1 -->

> **Hctwowfan wrote: Fri Sep 08, 2023 9:04 am**
> That's not how probability works. To put this into perspective, here's what you need to consider:
>
>  If it has a 1.2% chance to drop, it has a 98.8% chance to not drop.
>  It then has a chance of 0.988^2 = 97.61% to not drop in two attempts.
>  It then has a chance of 0.988^3 = 96.44% to not drop in three attempts.
>  ...
>  You could work that out to find how many attempts it takes to get to a 50/50 of seeing it.
>
>  What we'd be looking for is:
>  0.988^n = 0.5
>  nlog(0.988) = log(0.5)
>  n = log(0.5)/log(0.988) = 57.41
>  which means that it takes 58 attempts to have a 50/50 of getting the drop.
>
>  After your 100 attempts of getting the drop:
>  1 - 0.988^100 = 0.7009 = 70.09%
>  you had a ~70% chance of getting the drop, which still leaves you at 30% of not having gotten it.
>
>  100 attempts is too few to question the drop%

I question the necessary number provided by the database, not the non-necessary number, and the logic you are saying is even more untenable, if the result of a hundred times does not appear the so-called 1.2%, then how did this 1.2% conclusion come about

## Post 61461 by Hctwowfan (Bug Report Enthusiast) — 2023-09-08T09:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61461#p61461 | page 1 | era: pre-1.18.1 -->

And all I concluded was that 100 attempts are not enough to question the 1.2% drop chance provided by the database. There's a 30% chance of you not getting the drop after 100 kills. If 100 people complained about 100 different items with a 1.2% drop chance not dropping after 100 attempts, 30 of those complaints would be wrong. The number of your attempts is not sufficiently high enough to conclude that the 1.2% drop chance provided by the database might be off. I dont say the drop chance provided by the database is correct, I'm just saying that you dont have enough data to question it (yet).

edit: As to how the database got the % at 1.2 I can only guess. But seeing that the item in question is from a Hateforge Quarry mob, a dungeon created by the twow devs, I'd guess it's spot on because they needed to create the mob and the loot table and set the drop to 1.2%. There's no iffy recreation of ancient thottbot drop% for that item that might be off. Could the true drop% be lower than what the database shows for reasons we dont know (patch changes, wrong data)? Absolutely.

*Last edited by Hctwowfan on Fri Sep 08, 2023 9:51 am, edited 1 time in total.*

## Post 61470 by Jingking — 2023-09-08T09:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61470#p61470 | page 1 | era: pre-1.18.1 -->

> **Hctwowfan wrote: Fri Sep 08, 2023 9:38 am**
> And all I concluded was that 100 attempts are not enough to question the 1.2% drop chance provided by the database. There's a 30% chance of you not getting the drop after 100 kills. If 100 people complained about 100 different items with a 1.2% drop chance not dropping after 100 attempts, 30 of those complaints would be wrong. The number of your attempts is not sufficiently high enough to conclude that the 1.2% drop chance provided by the database might be off. I dont say the drop chance provided by the database is correct, I'm just saying that you dont have enough data to question it (yet).

I see what you mean, what you mean is that there is a 98.8% probability that it will not happen, so for most players, almost no matter how many times you try, it will be fruitless. This approach is very unfriendly to gamers, which means that only certain "chosen children" are qualified to challenge those unique gameplay, such as "elemental cats", shoulders are pick-up bindings, and the probability of appearance is even lower than 0.005%, and the probability of weapon Endless Dark Blade is only 1%, which means that most curious players can only look forward to it in solo, and in the end there is no gain, just spending a lot of meaningless time in the game

## Post 61475 by Hctwowfan (Bug Report Enthusiast) — 2023-09-08T10:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61475#p61475 | page 1 | era: pre-1.18.1 -->

I understand what you're trying to say, although I dont support that sentiment. But that's a different topic.

With the Incendosaur Shoulders you also need to consider that you can create way more attempts per time spent because there's plenty of mobs that can drop the item, compared to one single mob that can drop your trinket. It takes roughly 700 kills to get to a 50/50 of having the item drop a single time for the shoulders (with a 0.1% drop chance according to database). Now it seems that it's way less likely to get the shoulders compared to the trinket (50/50 at 58 attempts) but you'll have a way easier time killing 700 mobs that can drop the shoulders (mobs you can easily solo quickly) than killing a boss (?) inside the dungeon. Can it take hours or days and you'll still be leaving empty handed? Yes. But as above, is that good design or bad, that's a different topic.

## Post 64833 by Jingking — 2023-09-17T04:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64833#p64833 | page 1 | era: pre-1.18.1 -->

> **Hctwowfan wrote: Fri Sep 08, 2023 10:02 am**
> I understand what you're trying to say, although I dont support that sentiment. But that's a different topic.
>
>  With the Incendosaur Shoulders you also need to consider that you can create way more attempts per time spent because there's plenty of mobs that can drop the item, compared to one single mob that can drop your trinket. It takes roughly 700 kills to get to a 50/50 of having the item drop a single time for the shoulders (with a 0.1% drop chance according to database). Now it seems that it's way less likely to get the shoulders compared to the trinket (50/50 at 58 attempts) but you'll have a way easier time killing 700 mobs that can drop the shoulders (mobs you can easily solo quickly) than killing a boss (?) inside the dungeon. Can it take hours or days and you'll still be leaving empty handed? Yes. But as above, is that good design or bad, that's a different topic.

Thank you for your participation and discussion, and I received this accessory after more than 130 kills last Tuesday, and once again I would like to express my heartfelt thanks and good luck to all of you

## Post 64834 by Jingking — 2023-09-17T04:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64834#p64834 | page 1 | era: pre-1.18.1 -->

> **Mcnair wrote: Fri Sep 08, 2023 9:05 am**
> That is not how statistics work. All kills you do are independent, so having the item not dropped will not increase your chance on the kill to get it.
>  If the individual chance of the item dropping on a kill is 1.2%, then after 100 kills you have about 70% chance that the item dropped at least once. After 200 kills, you have about 91% chance of it dropping at least once during that 200 kills. That sounds already quite good, but be aware you still have a ~1 in 10 chance to not see it drop even after 200 kills. You have to go up to 382 kills to have a 99% chance that the given item drops at least once over these 382 kills.
>  Since the drop chance is independent of the number of kills, there is no way to reach 100% drop chance ever. (But of course you can get very close to that.)

Thank you for your participation and discussion, and I received this accessory after more than 130 kills last Tuesday, and once again I would like to express my heartfelt thanks and good luck to all of you

## Post 64856 by Hctwowfan (Bug Report Enthusiast) — 2023-09-17T05:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64856#p64856 | page 1 | era: pre-1.18.1 -->

> **Jingking wrote: Sun Sep 17, 2023 4:03 am**
> Thank you for your participation and discussion, and I received this accessory after more than 130 kills last Tuesday, and once again I would like to express my heartfelt thanks and good luck to all of you

Congratulations! Safe travels mate

## Post 64980 by Apimius (Barrens Chat Casualty) — 2023-09-17T12:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=64980#p64980 | page 1 | era: pre-1.18.1 -->

i needed to do like almost 200 runs to get it so yea

