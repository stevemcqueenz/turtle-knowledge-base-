---
title: "Multiple accounts in order to have a higehr auction house limit"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=9414"
topic_id: 9414
forum_id: 3
forum: "Help & Support"
author: "Feetlover444"
author_authority: "player"
posted: "2023-09-08T21:28:00Z"
last_post: "2023-09-09T09:10:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T09:07:13Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Multiple accounts in order to have a higehr auction house limit

## Post 61735 by Feetlover444 (Barrens Chat Casualty) — 2023-09-08T21:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61735#p61735 | page 1 | era: pre-1.18.1 -->

Hi,

This is my first forum post, after spitting through the rules link I saw no answer to my question hence I'm here!
So right now I'm using two accounts in order to up my auction house limit to 240 which is still not enough for me and I'd like to add another 10 characters.

Now the thing is there's no clear specification on if this is allowed or disallowed, unless I missed it of course!

Rules state that you aren't allowed to run more than two accounts at once, but what about owning more than two and only logging into the next one after logging out of the last, thus always having only a maximum of one/two accounts logged in?

And outside of that, is there a limit to how many accounts are allowed to use the auction house?

## Post 61744 by Emilyrose89 — 2023-09-08T22:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61744#p61744 | page 1 | era: pre-1.18.1 -->

Have you considered simply not spamming the auction house?

## Post 61763 by Geojak (Grandmaster of Forum PvP) — 2023-09-09T01:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61763#p61763 | page 1 | era: pre-1.18.1 -->

You can make as many accounts as you like and use 2 after another :)

I ran my ah bussines on 4 accounts after the split to cover everything

## Post 61927 by Feetlover444 (Barrens Chat Casualty) — 2023-09-09T07:23:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61927#p61927 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Sat Sep 09, 2023 1:32 am**
> You can make as many accounts as you like and use 2 after another :)
>
>  I ran my ah bussines on 4 accounts after the split to cover everything

smiling_turtle

Thank you!

## Post 61934 by Feetlover444 (Barrens Chat Casualty) — 2023-09-09T07:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61934#p61934 | page 1 | era: pre-1.18.1 -->

> **Emilyrose89 wrote: Fri Sep 08, 2023 10:39 pm**
> Have you considered simply not spamming the auction house?

In order for merchants not the flood the auction house they'd have to change how buying works

Right now when you sort by buyout price the auction house puts the cheapest SINGLE item on top.
It does not check if its a 20 stack or a single stack.

what you get for example is

 1 Soul dust 50G
 20 soul dust 51G

The 20 soul dust in actuality are cheaper coming in at 2.55G a pop, yet the auction house does not think so as it just looks at the ending price, it see's 1 soul dust is 50G therefor cheaper than 20 soul dust at 51G it see's both as one item.

Therefor it becomes impossible to sell anything above single stacks, the blame isn't on the players its on the game.

Turtle wow dev's can easily fix this by changing the calculating logic, instead of selecting on the end price it should calculate single item cost and notice that a stack of 20 soul dust at 51G is cheaper than 1soul dust at 50g and put the 20 soul dust buyout on the top when selecting the cheapest buyout filter.

## Post 61976 by Geojak (Grandmaster of Forum PvP) — 2023-09-09T09:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=61976#p61976 | page 1 | era: pre-1.18.1 -->

Exactly, just fix the sorting and you will never have a reason to look beyond the first page

Fixing the ah is as easy as changing the sort algorithm from

Bid Price of auction A >bid price of auction B
Buyout price / stacksize of auction A >... B

Now that's probably even serverside code and not client so should be easily fixable

