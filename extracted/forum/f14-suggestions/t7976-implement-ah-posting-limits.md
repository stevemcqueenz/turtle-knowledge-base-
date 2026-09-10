---
title: "Implement AH Posting Limits"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7976"
topic_id: 7976
forum_id: 14
forum: "Suggestions"
author: "Neo4m"
author_authority: "player"
posted: "2023-06-25T10:15:00Z"
last_post: "2023-06-27T05:00:00Z"
post_count: 23
pages: 1
fetched: "2026-09-10T12:15:07Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Implement AH Posting Limits

## Post 51237 by Neo4m — 2023-06-25T10:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51237#p51237 | page 1 | era: pre-1.18.1 -->

I proposal implementing a hard cap per character/account on how many of an individual item/stack(s) can be posted at a single time.  For example, I can post 20 stacks of 20 silk, 20 individual pieces of silk, or 20 stacks of various sizes at a single time, and then post more as those 20 sell so long as I have no more than 20 silk auctions at once.

The reason is a current extremely unpleasant to most players experience where the auction house is unusable when searching for certain items. There seems to be a small pricing cabal where they list hundreds or thousands of individual items that are normally stacked (such as Silk Cloth in our AH) making the search of the AH painful.  I've tried the default UI and the aux AH add-on.  Some of these "Silk Vendors" (and other things, thats an example) also often even post these items with no buy-out price.  I can't tell if it is a terribly misconfigured AH bot, or we're all being trolled.

## Post 51239 by Chartreus — 2023-06-25T11:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51239#p51239 | page 1 | era: pre-1.18.1 -->

The issue here is that turtle severely throttles the AH. It takes several seconds to navigate between pages. If they removed that artificial throttle, this wouldn't be an issue, because any search would take a few seconds, even if there were dozens of pages.

You can't solve a problem that occurs because of an artificial limit created by the  administration by implementing another artificial limit.

## Post 51240 by Ishilu (Patch Note Conspiracy Theorist) — 2023-06-25T11:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51240#p51240 | page 1 | era: pre-1.18.1 -->

Technical details aside, the OP does have a point.

Fact is, the AH is filled with a huge number of single cloth pieces and it's uncomfortably slow to use even with addons.

The AH in its current state is probably unusable for new or inexperienced players without addons and that can't be a good thing.

## Post 51243 by Isvya (Patch Note Conspiracy Theorist) — 2023-06-25T11:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51243#p51243 | page 1 | era: pre-1.18.1 -->

Yesterday i tried to buy some dense stones.
 11 pages of which 8 pages were posted by a single a guy. 420 pieces of dense stones posted 1 by 1. Overpriced ofc.

## Post 51244 by Rat2156 (Patch Note Conspiracy Theorist) — 2023-06-25T12:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51244#p51244 | page 1 | era: pre-1.18.1 -->

That issue wouldn't exist if AH addons weren't allowed. Human beings can't really post hundreds of single auctions in seconds manually

## Post 51245 by Neo4m — 2023-06-25T12:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51245#p51245 | page 1 | era: pre-1.18.1 -->

> **Chartreus wrote: Sun Jun 25, 2023 11:02 am**
> The issue here is that turtle severely throttles the AH. It takes several seconds to navigate between pages. If they removed that artificial throttle, this wouldn't be an issue, because any search would take a few seconds, even if there were dozens of pages.
>
>  You can't solve a problem that occurs because of an artificial limit created by the  administration by implementing another artificial limit.

Even without the throttle, the AH is still spammed with shit listings. The AH is starting to feel like Taobao.

## Post 51258 by Xudo (Grandmaster of Forum PvP) — 2023-06-25T14:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51258#p51258 | page 1 | era: pre-1.18.1 -->

Imagine you are a guy with tons of Some Material. You buy everything that is sold by wandering gatherers and immediately post with higher price.
You get your little margin and have enough cash to keep business running.

What will you do if you find that amount of items on AH is limited?
Right. You go and make accounts with zillion of bank characters. All your further operations will be made by "bankaltaa", "bankaltab", "bankaltac" etc. You get it.

AH posting limit is easily avoidable if you want it.

## Post 51269 by Elesion (Patch Note Conspiracy Theorist) — 2023-06-25T17:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51269#p51269 | page 1 | era: pre-1.18.1 -->

We've had a fairly similar discussion [not too long ago](https://forum.turtlecraft.gg/viewtopic.php?f=14&t=7692).

There is definitely a problem. It's easy to attribute the pages and pages of overprices single items to malice (and I'm sure sometimes it is), but it might also just be habit? Just yesterday I've stumbled on single Incendosaur Scale listings. This makes no sense at all... there isn't even a proper demand for those and when there is it's in bulk (reputation turn-ins for the Thorium Brotherhood). Furthermore, every quest takes 2 scales so singles make even less sense. So why would anyone list it like that? I have to assume "just because they can", because some addon they have makes it easy for them so they don't think twice about it. And secondly, because there is no downside (Incendosaur Scales have no vendor value so it's free to list them - much like enchanting materials, another repeat offender for pages and pages of overpriced singles).

So how do we implement a downside? I agree that per-character limits and per-account limits are virtually un-enforcable (I've written as much in the other thread). But we can maybe make it annoying? Having to constantly relog to another alt would be an inconvenience but inelegant. Maybe some kind of captcha challenge when you list more than 10 of the same item? Like a pop-up that goes "Whoa, you're trying to post a lot of similar things - solve this complicated math problem to continue". Just *something* that makes it not a single button click without second thought that everyone else has to suffer for. I'm not against mass listings staying possible, but I want some cost associated that makes mass listers consider the consequences of their actions.
Also (as mentioned in the other thread) I'm still a proponent of minimum listing fees so you at least have to think about pricing items without vendor value remotely sensibly.

## Post 51270 by Xerilin (Bug Report Enthusiast) — 2023-06-25T18:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51270#p51270 | page 1 | era: pre-1.18.1 -->

The problem are AH addons that make it way too comfortable to post 1 stone or 1 cloth. I agree, it is extremely annoying for people not using AH addons.

## Post 51309 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-06-26T01:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51309#p51309 | page 1 | era: pre-1.18.1 -->

Two things;  1. The AH throttling needs to stop.  2. There needs to be a limit on how many posts a user can post a single stack. 1 linen cloth * 10 pages, then another 10 pages of complete stacks is absolutely effing bonkers.

Nothing wrong with buying and selling but at this point its breaking my will to live....*cough* I mean my will to be on the auction house.

## Post 51310 by Getplucked (Patch Note Conspiracy Theorist) — 2023-06-26T01:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51310#p51310 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Sun Jun 25, 2023 2:47 pm**
> Right. You go and make accounts with zillion of bank characters. All your further operations will be made by "bankaltaa", "bankaltab", "bankaltac" etc. You get it.

The difference is that not everyone is going to have the patience to make a legion of bank alts just to flood the AH with thousands of 1-stack auctions. Sure, some autismos will do it, but most people won't.

I've always wanted some kind of limit on the AH to prevent people from spamming it with 1-stack auctions. It does nothing but make searches take longer for everyone.

## Post 51311 by Gantulga (Grandmaster of Forum PvP) — 2023-06-26T01:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51311#p51311 | page 1 | era: pre-1.18.1 -->

How about disallowing the listing of stacks that aren't full for common materials? It is griefing to flood the AH with single pieces of cloth, arrows, ore, etc, without a buyout option even.
I think it'd also be fair to remove bidding option for common materials, forcing a buyout price on those.

## Post 51313 by Neo4m — 2023-06-26T03:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51313#p51313 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Sun Jun 25, 2023 2:47 pm**
> Imagine you are a guy with tons of Some Material. You buy everything that is sold by wandering gatherers and immediately post with higher price.
>  You get your little margin and have enough cash to keep business running.
>
>  What will you do if you find that amount of items on AH is limited?
>  Right. You go and make accounts with zillion of bank characters. All your further operations will be made by "bankaltaa", "bankaltab", "bankaltac" etc. You get it.
>
>  AH posting limit is easily avoidable if you want it.

You can put rate limits and controls on creating more characters or accounts to make it infinitely more annoying. Having to create numerous bank and AH alts, and run them all to the auction house, is a much higher barrier to entry than *doing nothing at al*.

Then, if Turtle Devs, want to go after bad actors creating dozens or hundreds of fake characters just to get around AH quality of life limits implemented for the majority of the player base, it will be infinitely easier for them to catch these people than if nothing at all is done.

There are mailbox limits in place. My friend hit them recently sending items to his bank alt and not emptying the mailbox. So these kinds of limits have been in place elsewhere.

## Post 51317 by Xudo (Grandmaster of Forum PvP) — 2023-06-26T05:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51317#p51317 | page 1 | era: pre-1.18.1 -->

> **Gantulga wrote: Mon Jun 26, 2023 1:50 am**
> How about disallowing the listing of stacks that aren't full for common materials? It is griefing to flood the AH with single pieces of cloth, arrows, ore, etc, without a buyout option even.
>  I think it'd also be fair to remove bidding option for common materials, forcing a buyout price on those.

Leather is used in blacksmithing and engineering for weapons in quantities of 2-3 per item.
If you want someone to make weapon for your mats, you need to buy exact quantity from AH and you don't want to bother to sell part of stack if you buy a bit more.

Though I agree that selling materials without buyout option is weird and can be restricted.

I think it is possible to reduce amount of similar lots on AH. For example if there are 420 of Dense Stone in stacks of 1 from seller X, then regular players should see 3 lots of it from seller X. When you buy one lot, AH sends additional query for item
SQL for illustration. If current AH query is Code: Select all

```
select item, lvl, auctions, stack_size, time_left, seller, bid, buyout
from auctions
```

then it should look like Code: Select all

```
select item, lvl, auctions, stack_size, time_left, seller, bid, buyout
from (
select *, row_number() over (partition by item, stack_size, seller, buyout order by bid asc) rown
from auctions
) t
where rown <= 3
```

## Post 51327 by Reddguard — 2023-06-26T08:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51327#p51327 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Mon Jun 26, 2023 5:25 am**
> > **Gantulga wrote: Mon Jun 26, 2023 1:50 am**
> > How about disallowing the listing of stacks that aren't full for common materials? It is griefing to flood the AH with single pieces of cloth, arrows, ore, etc, without a buyout option even.
> >  I think it'd also be fair to remove bidding option for common materials, forcing a buyout price on those.
>
>  Leather is used in blacksmithing and engineering for weapons in quantities of 2-3 per item.
>  If you want someone to make weapon for your mats, you need to buy exact quantity from AH and you don't want to bother to sell part of stack if you buy a bit more.
>
>  Though I agree that selling materials without buyout option is weird and can be restricted.
>
>  I think it is possible to reduce amount of similar lots on AH. For example if there are 420 of Dense Stone in stacks of 1 from seller X, then regular players should see 3 lots of it from seller X. When you buy one lot, AH sends additional query for item
>  SQL for illustration. If current AH query is Code: Select all
>
> ```
> select item, lvl, auctions, stack_size, time_left, seller, bid, buyout
> from auctions
> ```
>
>  then it should look like Code: Select all
>
> ```
> select item, lvl, auctions, stack_size, time_left, seller, bid, buyout
> from (
> select *, row_number() over (partition by item, stack_size, seller, buyout order by bid asc) rown
> from auctions
> ) t
> where rown <= 3
> ```

That sounds like a really nice idea. Also if there is no more the bidding option for common materials, you can just order it with increasing buyout prices (else how would you list it? Increasing buyout price or increasing bidding price?)

## Post 51328 by Neo4m — 2023-06-26T08:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51328#p51328 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Mon Jun 26, 2023 5:25 am**
> > **Gantulga wrote: Mon Jun 26, 2023 1:50 am**
> > How about disallowing the listing of stacks that aren't full for common materials? It is griefing to flood the AH with single pieces of cloth, arrows, ore, etc, without a buyout option even.
> >  I think it'd also be fair to remove bidding option for common materials, forcing a buyout price on those.
>
>  Leather is used in blacksmithing and engineering for weapons in quantities of 2-3 per item.
>  If you want someone to make weapon for your mats, you need to buy exact quantity from AH and you don't want to bother to sell part of stack if you buy a bit more.
>
>  Though I agree that selling materials without buyout option is weird and can be restricted.
>
>  I think it is possible to reduce amount of similar lots on AH. For example if there are 420 of Dense Stone in stacks of 1 from seller X, then regular players should see 3 lots of it from seller X. When you buy one lot, AH sends additional query for item
>  SQL for illustration. If current AH query is Code: Select all
>
> ```
> select item, lvl, auctions, stack_size, time_left, seller, bid, buyout
> from auctions
> ```
>
>  then it should look like Code: Select all
>
> ```
> select item, lvl, auctions, stack_size, time_left, seller, bid, buyout
> from (
> select *, row_number() over (partition by item, stack_size, seller, buyout order by bid asc) rown
> from auctions
> ) t
> where rown <= 3
> ```

this cow codes

in general agree with what the tauren said. i'm completely open to any type of technical control which limits the bad behavior we've been describing. my suggestions of a '20 posting per item' cap was just an off the cuff suggestion to hopefully get the discussion going.

## Post 51331 by Kairion (Bug Report Enthusiast) — 2023-06-26T08:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51331#p51331 | page 1 | era: pre-1.18.1 -->

Honestly the auctionhouse as is is horribly flawed. Since the returned goods are sorted by price per listing, not necessarily price per item. That means potentially you have to click past several slowly loading pages of overpriced single pieces of runecloth to get to the reasonably priced stacks.

One very simple way to improve it would be to make stacksize be considered when sorting by price. After all, most people probably wouldn't mind idiots listing houndreds of single items overpriced if it wasn't making it artificially difficault to find the cheapest option.

## Post 51332 by Xudo (Grandmaster of Forum PvP) — 2023-06-26T08:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51332#p51332 | page 1 | era: pre-1.18.1 -->

> **Reddguard wrote: Mon Jun 26, 2023 8:18 am**
> That sounds like a really nice idea. Also if there is no more the bidding option for common materials, you can just order it with increasing buyout prices (else how would you list it? Increasing buyout price or increasing bidding price?)

Iirc, you have to specify bidding price on all lots. Currently buyout is optional, bidding is mandatory.
It would be better to make both mandatory for stackable items. It is less changes from current state.

> **Kairion wrote: Mon Jun 26, 2023 8:41 am**
> Honestly the auctionhouse as is is horribly flawed. Since the returned goods are sorted by price per listing, not necessarily price per item. That means potentially you have to click past several slowly loading pages of overpriced single pieces of runecloth to get to the reasonably priced stacks.
>
>  One very simple way to improve it would be to make stacksize be considered when sorting by price. After all, most people probably wouldn't mind idiots listing houndreds of single items overpriced if it wasn't making it artificially difficault to find the cheapest option.

While this problem can be solved by using Aux, I agree that sorting by cost of individual item is better for majority of the regular players. Aux should not be mandatory to play the game.

## Post 51350 by Geojak (Grandmaster of Forum PvP) — 2023-06-26T12:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51350#p51350 | page 1 | era: pre-1.18.1 -->

> **Kairion wrote: Mon Jun 26, 2023 8:41 am**
> Honestly the auctionhouse as is is horribly flawed. Since the returned goods are sorted by price per listing, not necessarily price per item. That means potentially you have to click past several slowly loading pages of overpriced single pieces of runecloth to get to the reasonably priced stacks.
>
>  One very simple way to improve it would be to make stacksize be considered when sorting by price. After all, most people probably wouldn't mind idiots listing houndreds of single items overpriced if it wasn't making it artificially difficault to find the cheapest option.

This. All the other things discusses here are just limiting the convenicne of free exchanging items on ah for no good benefit.

Sort it properly so that non ah users can have some price transparency.
This way we will always, see on first page of results the cheapest per item actions which are mostly the intersting buys.
It will stop single item vendors Chessing noons not seeing the cheaper stacks behind

Its also easiest to implement for devs. Twow, doesn't sort blizzlike anyway, blizz ah, sorted by ah bid which was even worse with tons of 1c auctions flooding the first 10 pages. Turtle fixed this by sorting buyout. And turtle wo can go one more stop by sorting buyout per unit, just like aux does it

## Post 51351 by Nilay (Barrens Chat Casualty) — 2023-06-26T12:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51351#p51351 | page 1 | era: pre-1.18.1 -->

> **Isvya wrote: Sun Jun 25, 2023 11:42 am**
> Yesterday i tried to buy some dense stones.
>  11 pages of which 8 pages were posted by a single a guy. 420 pieces of dense stones posted 1 by 1. Overpriced ofc.

Oooh, I can relate so much to that. When I need to buy a lot of mats, I can litteraly lose 10 to 20 minutes with that.

## Post 51396 by Samsara (Barrens Chat Casualty) — 2023-06-26T18:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51396#p51396 | page 1 | era: pre-1.18.1 -->

I do not like the idea of limiting how many posts one can have, you are already being limited by the posting fee and if your stuff doesn't sell then your profit margin gets eaten really quickly by that fee. It's not as simple as spamming the AH, if your stuff doesn't sell then you lose time and money. I also believe that preventing non-full stacks from being posted is a terrible terrible idea as some mats are too rare and valuable to be selling by the stack. Stacks exist primarily for inventory balance, not AH balance. If you also have a well setup AH addon it really isn't that big of a deal to have so many small stacks, just use shopping tab and sort by price and buy the number you want, that's all there is to it.
I would however settle for a middle ground where you are limited in how many non-full stacks of mats you can post at a time. I believe the maximum amount of a full stack should be how many non-full stacks you are allowed to list. For instance with linen cloth stacking by 20, you would be allowed to list a maximum of 20 stacks of size 1-19. But still unlimited full stacks. That way if you want to sell non full stacks it doesn't become very uncomfortable to dance around the limit, and if you have tons of mats you are still encouraged to post full stacks.

## Post 51412 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-06-26T20:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51412#p51412 | page 1 | era: pre-1.18.1 -->

A few people are rallying behind the idea of simply banning Auction House AddOns.  I have the opposite idea.

 **Make an Auction House AddOn part of the game client download!**

The common problem that people talk about is how much **scrolling** a player has to do in order to find something they're looking for.  Well… if *Aux* or *Auctioneer* were included with the *Turtle WoW* client, just like *LookingForTurtles* presently is, then (most) people would no longer experience this as these two (functional) Auction House AddOns have proper sorting functions which mitigate the aggravation of sifting through 1,000 listings of Linen Cloth or Light Leather just to find one that is both reasonably priced and available for Buyout.  Or… whatever they're doing.

A simple solution to an ongoing problem.  ![😚](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f61a.svg)![👌](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f44c.svg)

## Post 51451 by Neo4m — 2023-06-27T05:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51451#p51451 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Mon Jun 26, 2023 8:36 pm**
> A few people are rallying behind the idea of simply banning Auction House AddOns.  I have the opposite idea.
>
>  **Make an Auction House AddOn part of the game client download!**
>
>  The common problem that people talk about is how much **scrolling** a player has to do in order to find something they're looking for.  Well… if *Aux* or *Auctioneer* were included with the *Turtle WoW* client, just like *LookingForTurtles* presently is, then (most) people would no longer experience this as these two (functional) Auction House AddOns have proper sorting functions which mitigate the aggravation of sifting through 1,000 listings of Linen Cloth or Light Leather just to find one that is both reasonably priced and available for Buyout.  Or… whatever they're doing.
>
>  A simple solution to an ongoing problem.  ![😚](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f61a.svg)![👌](//cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f44c.svg)

Addons don't all solve the problem though. I'm using aux (which I think arguably should solve this by its efficient search layout), and when you are trying to work with a single item that has 25-30+ pages of listings for just that one single item, the add on still craps out because every few clicks the update searches still take way too long just by the volume of listings.

