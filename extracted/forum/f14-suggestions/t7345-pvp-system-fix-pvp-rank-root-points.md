---
title: "Pvp system fix, pvp rank root points"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7345"
topic_id: 7345
forum_id: 14
forum: "Suggestions"
author: "Geojak"
author_authority: "player"
posted: "2023-05-19T17:07:00Z"
last_post: "2023-07-15T02:31:00Z"
post_count: 17
pages: 1
fetched: "2026-09-10T12:14:01Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Pvp system fix, pvp rank root points

## Post 46644 by Geojak (Grandmaster of Forum PvP) — 2023-05-19T17:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=46644#p46644 | page 1 | era: pre-1.18.1 -->

So this another idea how to make ranking better. The goal is to make it more of a slow and steady healthy long grind instead of an unhealthy 3 months of 60h pvp per week that Everyone hates.
The following change does not attempt to make pvp gear easy to get. Just look at bloodring gear, it doesn't involve ranking system with decay and still noone has arena gear.

IF you spent hundreds of hour pvping over a ywar you should be rank 14. Just as you should be exalted if it was a rep grind. It should not require you to no life it in a short window of time or never ever reach it.

So now comes the mathematical part of how the system would work.

Introducing Root points.
 1. Your ranking point can never fall below your root points from pvp rank decay
 2. A small fraction of your ranking points gain are also added to your root points.
 3. Root points don't decay
 -->you have a normal rank and a lower root point rank
 --> you can either rank the current way unchanged or you can slowly build up your root points to eventually reach rank 14

Lets anylayse this idea with actual numbers
Propse 10% of your rank points pre decay are added to your root points.
In bracket 1 you can gain 130000 rp per week. 10% of that is 1300. That means at best you can make 1300 per week. Less with lower brackets.
Each pvp rank requires 5000 rp. Rank 14 requires 60000 rp. You would need to be bracket one For 47 weeks to be rank 14 with root points.
You would be already rank 14 in 11 weeks with the curerent system. as you can see this will not cause everyone to have R14 faster

This system provides an extremely slow way to gain ranks permanently as if it was a reputation grind

Now for implementation. This should be easy. Make a new database field to store the value per character. Inject root base calculation into the ranking point calculating function (not hardcoded).

*Last edited by Geojak on Thu Jul 13, 2023 5:52 am, edited 5 times in total.*

## Post 53086 by Darkstromkar — 2023-07-11T21:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53086#p53086 | page 1 | era: pre-1.18.1 -->

It is true that the system of buying items by honor of the tbc is too casual.

Suggestion on how to change the loot system in pvp without changing the Brackets model by making a kind of mix between the classic system and the tbc system. .

 1º Eliminate the ranks
 2º Keep the Brackets system to distribute the RPs depending on the honor of the week.
 3º Eliminate the weekly Rps Decay.
 4º Put the pvp pieces on sale for Rps.
 5º Not to be able to buy R12/13 pieces without having previously bought R7/8/10 pieces
 6º Not being able to buy the R14 weapons without having obtained the R13 equipment
 7º Each piece costs an amount of Rps proportional to the relevance of the item so that it costs several weeks of pvp to get an item depending on the bracket in which you stay each week.

## Post 53179 by Titovk — 2023-07-12T13:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53179#p53179 | page 1 | era: pre-1.18.1 -->

I also want to share my story. I am a mage, I have ZG and AQ20 gear. Now I'm interested in playing PVP. There was a time when I played Arathi and Warsong for a week. I've played about 30 games and haven't won a single one for the Alliance side. 100% loss, 0% wins. It's just incredible. Playing as a strong class, having good equipment that I spent a lot of time on, I just can't do anything to some players of the opposite faction. My damage is negligible, slows don't work, polymorphs don't work. I don't have enough time to build tier 2 gear, then tier 2.5 gear, then farm naxx for tier 3 to counter these players. I also have no desire to lose in 100% of cases. The only way out that I found for myself is to simply not play PVP. And I think I'm not the only one.

## Post 53180 by Geojak (Grandmaster of Forum PvP) — 2023-07-12T13:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53180#p53180 | page 1 | era: pre-1.18.1 -->

Don't worry they are nerfing paladins, that should help /s

Devs are getting fooled by horde players claiming paladins are op and only lose because all paladin players must be bad.
No it doesn't make sense.
Nerf horde racials, nerf shamans, pala nerf will only make things worse for ab and wsg but whatever. Winning doesn't natter for ranking. You only compete agaiant your own faction, who are also losing together. It's a matter of losing  more than your competition for allaince.if yiu actually enjoy pvp and not just do it for the rewards, then rollign horde is mandatory. Because losing all the time isn't fun. Therefor peolle continue to roll horde and allaince continues to lose.
Its a vociocous cycle that can only be broken by actually making alliance win some. Obviously a pipe dream

## Post 53203 by Marafado (Barrens Chat Casualty) — 2023-07-12T19:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53203#p53203 | page 1 | era: pre-1.18.1 -->

hehe this increase of numbers are a pain for the ranked discord "mafia" ;p about 1 month ago i see an priest did over 700k rp, hes not even push for r14 hehe

well i guess the old "mafia" need to adjust to 24h farming pvp if they wana continue lvl r14 toons for business :)

ps: im doing bgs since december, exalted with all factions with a good number of kills, your sugestion is a good starting point . Not sure if devs cares much about pvp... anyway good sugestion :)

## Post 53210 by Redmagejoe (Grandmaster of Forum PvP) — 2023-07-12T20:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53210#p53210 | page 1 | era: pre-1.18.1 -->

The TBC system definitely solves the issue of the absolutely unhealthy habits encouraged by the vanilla PvP system, but it is sadly a bridge too far. It wasn't popular with everyone since it took the competitive aspect of PvP away from people who wanted it.

While I'm not usually on board with Geojak's ideas, I can see some merit to a system where a % of your RP is added to a "floor" beneath which your RP cannot decay. This does not discourage being competitive in a single week, as you must still clear the top 1200 PvPers threshold and you must still gain a significant amount of RP for this to matter, but it does discourage the feeling of sunk cost fallacy and unhealthy playing habits by doing the PvP grind for multiple consecutive weeks.

And to clarify potential confusion, it seems the proposal is for 10% of the RP you earn in a week to be added to this floor, rather than 10% of your "new lifetime maximum" RP being what your floor is set to. This will make it possible for players who want to take a break from PvP not feel like ALL of their effort is going to waste. At the very least, one could do power grind PvP for a week various weeks during the year, and this essentially guarantees that if one weren't to PvP for a year, their rank would still never fall below, for example, Rank 3 with 50% progress towards Rank 4. The added benefit to this is allowing a person to lock in their Rank 3 veteran discounts.

I support this improvement of the ranking system.

## Post 53212 by Darkstromkar — 2023-07-12T21:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53212#p53212 | page 1 | era: pre-1.18.1 -->

A way to improve the system and make it more current without changing the rank system would be:

 1º Remove the weekly Decay of rps
 2º multiply x2... x3.... x4.... the rps needed to go up from one rank to another, instead of a jump of 5000rps from one rank to another, let there be 10,000 or 15,000 for example.

In this way to climb to rank 14 requires a lot of effort too, but it depends strictly on you, you do not depend on a mafia to deny you to climb the rank.

## Post 53275 by Geojak (Grandmaster of Forum PvP) — 2023-07-13T09:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53275#p53275 | page 1 | era: pre-1.18.1 -->

Another example, calculation for the proposed system.

Assuming the pvp pool is 2000 total on your factin. You end up with a standing of 500. This puts you in bracket 9 with 4000-5000 rp point gains. Due to decay you will never ever reach rank 8 ever. You are stuck on rank 7. Even after 999 years of pvping. Yiu have to no life harder.

Now assuming this system is, adopted.
You will get 10% of your rp gains as root points, say 500 points. Each 5000 points is a rank. Therefor every 10 weeks of pvping yiu will gain another permanent rank via root points that your actual, rank can not fall below. 10 weeks no matter which rank, it is linear. From 1 to 2,.. Or 13 to 14.

Hoe long would It take, to go from rank 0 to rank 14 for this person via root points?

 60.000 / 500 = 120 weeks
One year has around 52 weeks, so around 2.2 years. Of constant every, week casual pvping.
Of course you can go harder to speed it up, or go less hard to take even longer. But it's, there. No way its a, freebie like the current pvp system defenders fear.

## Post 53329 by Geojak (Grandmaster of Forum PvP) — 2023-07-13T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53329#p53329 | page 1 | era: pre-1.18.1 -->

> **Darkstromkar wrote: Wed Jul 12, 2023 9:16 pm**
> A way to improve the system and make it more current without changing the rank system would be:
>
>  1º Remove the weekly Decay of rps
>  2º multiply x2... x3.... x4.... the rps needed to go up from one rank to another, instead of a jump of 5000rps from one rank to another, let there be 10,000 or 15,000 for example.
>
>  In this way to climb to rank 14 requires a lot of effort too, but it depends strictly on you, you do not depend on a mafia to deny you to climb the rank.

Your proposal and mine are basically the same thing, with the difference that mine leaves, the old system intact on the surface unchanged and only adds this change hidden below it in form of root points which basically work exactly as you propose

## Post 53381 by Darkstromkar — 2023-07-14T05:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53381#p53381 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Thu Jul 13, 2023 4:09 pm**
> > **Darkstromkar wrote: Wed Jul 12, 2023 9:16 pm**
> > A way to improve the system and make it more current without changing the rank system would be:
> >
> >  1º Remove the weekly Decay of rps
> >  2º multiply x2... x3.... x4.... the rps needed to go up from one rank to another, instead of a jump of 5000rps from one rank to another, let there be 10,000 or 15,000 for example.
> >
> >  In this way to climb to rank 14 requires a lot of effort too, but it depends strictly on you, you do not depend on a mafia to deny you to climb the rank.
>
>  Your proposal and mine are basically the same thing, with the difference that mine leaves, the old system intact on the surface unchanged and only adds this change hidden below it in form of root points which basically work exactly as you propose

Nice! now all that remains is for the devs to read us

## Post 53400 by Naonak1945 (Barrens Chat Casualty) — 2023-07-14T11:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53400#p53400 | page 1 | era: pre-1.18.1 -->

WoW classic is playing to change the pvp ranking system/decay very soon. Going by forums.

## Post 53406 by Geojak (Grandmaster of Forum PvP) — 2023-07-14T12:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53406#p53406 | page 1 | era: pre-1.18.1 -->

Yea they, replace the old system of calculating standing and, brackets to covert your honour into ranking points by a static function thaz coverts your honour to pints directly without competing with other players. They don't remove decay, just cap it so that yiu never downrank but you do lose your progress towards, the next rank. You still need to play hard to go from r13 to R14 to beat, decay, we just don't know how hard since the mathematical details were ommited, from us by blizzard.

## Post 53452 by Marafado (Barrens Chat Casualty) — 2023-07-14T18:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53452#p53452 | page 1 | era: pre-1.18.1 -->

Seems there is some worries about the "casuals/normal players" can get the "precious" pvp gear, some ppl say only the pros deserve it :O

I think 99.9% of the players here is casuals/normal players, the word professional means you earn good dolaS for doing your job :) ye there is some guys anouncing websites for gold, r14 toons and gear (this ppl is professional), but for wat i can see in chatt ppl moooooo fast ;p

## Post 53460 by Darkstromkar — 2023-07-14T18:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53460#p53460 | page 1 | era: pre-1.18.1 -->

The motto of the server is Slow and Steady.... can you reach your goals in pvp Slow and Steady....?

NO!

So we are doing something wrong...

## Post 53479 by Marafado (Barrens Chat Casualty) — 2023-07-14T20:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53479#p53479 | page 1 | era: pre-1.18.1 -->

ok, lets try to put in the skin of an dev :)

in my recent experience in this server doing bgs i have to deal with the ranked mafia, that tells you to join the discord ranked channel and follow their orders (honor week cap), if you pass that honor some1 will tell you to stop doing pvp and leave the bg.

now we have the pros doing 24h shifts to sell the toons,

Not easy, but in the end im not surprised if some of the ranked mafia lvled toons will show for sell  in the pros websites ;p

## Post 53484 by Geojak (Grandmaster of Forum PvP) — 2023-07-14T21:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53484#p53484 | page 1 | era: pre-1.18.1 -->

The ranked grandnarshall account seller have business became normal player can't go beyong rank 10.

Give thosr customers a slow and steady alternative and they will happily pvp on for months without end to eventually reach their goal earned

## Post 53493 by Naonak1945 (Barrens Chat Casualty) — 2023-07-15T02:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53493#p53493 | page 1 | era: pre-1.18.1 -->

[https://www.wowhead.com/blue-tracker/to ... te-1631287](https://www.wowhead.com/blue-tracker/topic/us/classic-era-1-14-4-pvp-update-1631287)

Classic new PvP trail system

