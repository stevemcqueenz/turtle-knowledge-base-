---
title: "AH is totally broken - proposed new command, /ahignore [player]"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9408"
topic_id: 9408
forum_id: 4
forum: "General"
author: "Matches"
author_authority: "player"
posted: "2023-09-08T18:14:00Z"
last_post: "2023-09-09T15:13:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T10:02:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# AH is totally broken - proposed new command, /ahignore [player]

## Post 61689 by Matches (Barrens Chat Casualty) — 2023-09-08T18:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61689#p61689 | page 1 | era: pre-1.18.1 -->

There are now typically 1300+ auctions for Silk Cloth.

I can no longer sell a stack of 20 silk cloth for 45s - I think people are simply not paging through the incredible number of auctions to get to the stacks of 20.

I propose a new command, to solve this problem.

Just as we have /ignore to ignore idiots and spammer in chat, we should have /ahignore to ignore idiots and spammers in the AH.

When you /ahignore a player, their auctions are no longer shown to you.

Problem solved.

## Post 61691 by Xudo (Grandmaster of Forum PvP) — 2023-09-08T18:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61691#p61691 | page 1 | era: pre-1.18.1 -->

I support this. Much better than convoluted sorting and bidding order.

## Post 61703 by Phil29 — 2023-09-08T19:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61703#p61703 | page 1 | era: pre-1.18.1 -->

Add pagination at the bottom of the AH. Give us more buttons than only NEXT/PREV. I want to click page 10, see auctions 550-600 and so on. This would mitigate so much clicking / waiting 5 sec to click next again...

## Post 61733 by Matches (Barrens Chat Casualty) — 2023-09-08T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61733#p61733 | page 1 | era: pre-1.18.1 -->

> **Phil29 wrote: Fri Sep 08, 2023 7:16 pm**
> Add pagination at the bottom of the AH. Give us more buttons than only NEXT/PREV. I want to click page 10, see auctions 550-600 and so on. This would mitigate so much clicking / waiting 5 sec to click next again...

I may be wrong, but I think that's a lot, lot more work than adding a new command.  UI stuff is expensive in terms of time and effort.  A new command, /ahignore,  is text based, and primarily server side, where the server then knows to skip auctions from the given list of players.  The client just gets one more command, and needs to remember the list of ignored names, and emit them when using the AH.  No UI work at all, and the AH apart from emitting the list of names to the server when performing a search, doesn't change.  It still receives data in the same way, and the UI is unchanged.

## Post 61766 by Geojak (Grandmaster of Forum PvP) — 2023-09-09T01:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61766#p61766 | page 1 | era: pre-1.18.1 -->

Aux can do ah ignores already.

## Post 61949 by Ellisiumwow — 2023-09-09T08:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61949#p61949 | page 1 | era: pre-1.18.1 -->

Prices are completley messed up, many players selling stuff cheaper than vendor price, and they dont take deposit into account

## Post 61955 by Xudo (Grandmaster of Forum PvP) — 2023-09-09T08:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61955#p61955 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Sat Sep 09, 2023 1:38 am**
> Aux can do ah ignores already.

Aux probably uses client-side ignore. Server-side ignore would reduce amount of data sent to client.

## Post 61977 by Geojak (Grandmaster of Forum PvP) — 2023-09-09T09:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61977#p61977 | page 1 | era: pre-1.18.1 -->

> **Ellisiumwow wrote: Sat Sep 09, 2023 8:21 am**
> Prices are completley messed up, many players selling stuff cheaper than vendor price, and they dont take deposit into account

Can't fix stupid peolle behaviour.

## Post 62066 by Matches (Barrens Chat Casualty) — 2023-09-09T12:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=62066#p62066 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Sat Sep 09, 2023 1:38 am**
> Aux can do ah ignores already.

For it to work, it has to be part of the game, because there tens of thousands of players; a very small fraction will have Aux installed, and it will never be otherwise.

## Post 62067 by Matches (Barrens Chat Casualty) — 2023-09-09T12:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=62067#p62067 | page 1 | era: pre-1.18.1 -->

> **Ellisiumwow wrote: Sat Sep 09, 2023 8:21 am**
> Prices are completley messed up, many players selling stuff cheaper than vendor price, and they dont take deposit into account

Part of the problem is that when there are 1000+ auctions, you do not scan the AH to get a sense of prices.  You just put the stack up blindly and hope it sells.

## Post 62079 by Sanic1990 — 2023-09-09T12:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=62079#p62079 | page 1 | era: pre-1.18.1 -->

I've played WoW since Vanilla in 2004. I have never in my entire life saw this trend of selling tens if not hundreds of single items a time instead of selling stacks. I found it so weird and so did my friends who have played the game for ~20 years now. We were forced to do that too unfortunately. The ignore command would be nice but also as others suggested the skip to the end button to go to the last page instead of going through them one by one would be nice too.

Just chipping in my two cents.

## Post 62213 by Matches (Barrens Chat Casualty) — 2023-09-09T15:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=62213#p62213 | page 1 | era: pre-1.18.1 -->

> **Sanic1990 wrote: Sat Sep 09, 2023 12:29 pm**
> The ignore command would be nice but also as others suggested the skip to the end button to go to the last page instead of going through them one by one would be nice too.

Skip to end help enormously.

