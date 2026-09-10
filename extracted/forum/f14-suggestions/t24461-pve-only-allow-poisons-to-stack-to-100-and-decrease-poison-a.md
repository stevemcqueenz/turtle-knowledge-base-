---
title: "[PVE Only] Allow poisons to stack to 100 and decrease poison application time"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24461"
topic_id: 24461
forum_id: 14
forum: "Suggestions"
author: "Crake"
author_authority: "player"
posted: "2026-03-24T00:50:00Z"
last_post: "2026-03-25T16:15:00Z"
post_count: 14
pages: 1
fetched: "2026-09-10T11:00:06Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [PVE Only] Allow poisons to stack to 100 and decrease poison application time

## Post 172048 by Crake (Patch Note Conspiracy Theorist) — 2026-03-24T00:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172048#p172048 | page 1 | era: post-1.18.1 -->

Given that we now are going to be required to swap our poisons far more frequently between fights, sometimes literally back to back between different trash packs (kara10 and nax spider wing where you have a random mix of undead with non undead in the packs come to mind), it would be a nice quality of life fix to be able to have poisons stack to 100 in our inventories so we can be sufficiently stocked for longer raids.

I would also propose that poison application time be reduced, though i understand that it would have some impact on pvp, so if it could just be implemented in pve instances, that would be the ideal.

## Post 172064 by Xudo (Grandmaster of Forum PvP) — 2026-03-24T05:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172064#p172064 | page 1 | era: post-1.18.1 -->

While you wait for proposal to be implemented, prepare secondary main hand weapon with different poison on it. Would be much easier than reapply poisons back and forth

## Post 172067 by Crake (Patch Note Conspiracy Theorist) — 2026-03-24T06:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172067#p172067 | page 1 | era: post-1.18.1 -->

> **Xudo wrote: Tue Mar 24, 2026 5:34 am**
> While you wait for proposal to be implemented, prepare secondary main hand weapon with different poison on it. Would be much easier than reapply poisons back and forth

You’d also need to change your primary as well. Need dissolvent/corrosive for construct/undead/ele/giant, and then instant/deadly for everything else.

## Post 172072 by Hctwowfan (Bug Report Enthusiast) — 2026-03-24T06:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172072#p172072 | page 1 | era: post-1.18.1 -->

While we're at it, please make Maidens Anguish (needs 3 to craft dissolvent poison) stack to 20 instead of 10 because buying 120 from a vendor to craft 40 poisons is annoying when you gotta buy 12x 10 while the other ingredients stack to 20.

## Post 172078 by Xudo (Grandmaster of Forum PvP) — 2026-03-24T06:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172078#p172078 | page 1 | era: post-1.18.1 -->

> **Hctwowfan wrote: Tue Mar 24, 2026 6:35 am**
> While we're at it, please make Maidens Anguish (needs 3 to craft dissolvent poison) stack to 20 instead of 10 because buying 120 from a vendor to craft 40 poisons is annoying when you gotta buy 12x 10 while the other ingredients stack to 20.

Some time ago I developed and tested macro for bulk buying of ingredients.
> **Xudo wrote: Fri Sep 19, 2025 10:14 am**
> Tested that macro. Working version is here: Code: Select all
>
> ```
> /run for i=1, GetMerchantNumItems() do t=GetMerchantItemInfo(i); if t=='Tough Jerky' then BuyMerchantItem(i,99);end;end
> ```
>
>  This macro performs 99 purchases of Tough Jerky. Resulting 495 items in bag in one click.
>  Item name is case sensitive. If item is sold in stacks, like food, then you specify number of purchases. 4 purchases of 5-stacked food will buy 20 items.
>  If item sold as individual items, you buy specified amount of items.
>  You can specify exact number. I tried with Coarse Thread and set amount "41" and I got 2 full stacks of 20 and 1 individual item.

## Post 172079 by Crake (Patch Note Conspiracy Theorist) — 2026-03-24T07:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172079#p172079 | page 1 | era: post-1.18.1 -->

> **Xudo wrote: Tue Mar 24, 2026 6:57 am**
> > **Hctwowfan wrote: Tue Mar 24, 2026 6:35 am**
> > While we're at it, please make Maidens Anguish (needs 3 to craft dissolvent poison) stack to 20 instead of 10 because buying 120 from a vendor to craft 40 poisons is annoying when you gotta buy 12x 10 while the other ingredients stack to 20.
>
>   Some time ago I developed and tested macro for bulk buying of ingredients.
> > **Xudo wrote: Fri Sep 19, 2025 10:14 am**
> > Tested that macro. Working version is here: Code: Select all
> >
> > ```
> > /run for i=1, GetMerchantNumItems() do t=GetMerchantItemInfo(i); if t=='Tough Jerky' then BuyMerchantItem(i,99);end;end
> > ```
> >
> >  This macro performs 99 purchases of Tough Jerky. Resulting 495 items in bag in one click.
> >  Item name is case sensitive. If item is sold in stacks, like food, then you specify number of purchases. 4 purchases of 5-stacked food will buy 20 items.
> >  If item sold as individual items, you buy specified amount of items.
> >  You can specify exact number. I tried with Coarse Thread and set amount "41" and I got 2 full stacks of 20 and 1 individual item.

I mean, it would be nice if we didnt need to use macros to handle poison material buying and crafting. Also would suck if you accidentally double clicked on it.

## Post 172080 by Hctwowfan (Bug Report Enthusiast) — 2026-03-24T07:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172080#p172080 | page 1 | era: post-1.18.1 -->

> **Xudo wrote: Tue Mar 24, 2026 6:57 am**
> Some time ago I developed and tested macro for bulk buying of ingredients.

That's neat, tyvm

## Post 172082 by Xudo (Grandmaster of Forum PvP) — 2026-03-24T07:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172082#p172082 | page 1 | era: post-1.18.1 -->

> **Crake wrote: Tue Mar 24, 2026 7:05 am**
> I mean, it would be nice if we didnt need to use macros to handle poison material buying and crafting. Also would suck if you accidentally double clicked on it.

It could be improved. Add loop over inventory to count amount of items and buy only difference.
I can't do that now. Share here if you make it work.

## Post 172092 by amanagor (Grandmaster of Forum PvP) — 2026-03-24T08:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172092#p172092 | page 1 | era: post-1.18.1 -->

Rather than ask for qol features, rogues should be asking for nerfs as they are severly overtuned

## Post 172100 by Crake (Patch Note Conspiracy Theorist) — 2026-03-24T09:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172100#p172100 | page 1 | era: post-1.18.1 -->

> **amanagor wrote: Tue Mar 24, 2026 8:08 am**
> Rather than ask for qol features, rogues should be asking for nerfs as they are severly overtuned

dagger rogues literally got a ~10% dps nerf in the last patch. 5% lost in taste for blood, 5% lost in opportunity, and 15% lost on poison damage due to taste for blood not applying to poisons anymore.

## Post 172103 by amanagor (Grandmaster of Forum PvP) — 2026-03-24T09:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172103#p172103 | page 1 | era: post-1.18.1 -->

> **Crake wrote: Tue Mar 24, 2026 9:20 am**
> > **amanagor wrote: Tue Mar 24, 2026 8:08 am**
> > Rather than ask for qol features, rogues should be asking for nerfs as they are severly overtuned
>
>   dagger rogues literally got a ~10% dps nerf in the last patch. 5% lost in taste for blood, 5% lost in opportunity, and 15% lost on poison damage due to taste for blood not applying to poisons anymore.

<https://www.turtlogs.com/tiny_url/24200>

## Post 172266 by Crake (Patch Note Conspiracy Theorist) — 2026-03-24T23:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172266#p172266 | page 1 | era: post-1.18.1 -->

> **amanagor wrote: Tue Mar 24, 2026 9:26 am**
> > **Crake wrote: Tue Mar 24, 2026 9:20 am**
> > > **amanagor wrote: Tue Mar 24, 2026 8:08 am**
> > > Rather than ask for qol features, rogues should be asking for nerfs as they are severly overtuned
> >
> >   dagger rogues literally got a ~10% dps nerf in the last patch. 5% lost in taste for blood, 5% lost in opportunity, and 15% lost on poison damage due to taste for blood not applying to poisons anymore.
>
>  <https://www.turtlogs.com/tiny_url/24200>

Ive already explained to you how pve encounters favour rogues in another thread, i suggest you go back there and read it again, and not derail this thread thanks

## Post 172352 by amanagor (Grandmaster of Forum PvP) — 2026-03-25T13:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172352#p172352 | page 1 | era: post-1.18.1 -->

> **Crake wrote: Tue Mar 24, 2026 11:18 pm**
> > **amanagor wrote: Tue Mar 24, 2026 9:26 am**
> > > **Crake wrote: Tue Mar 24, 2026 9:20 am**
> > > dagger rogues literally got a ~10% dps nerf in the last patch. 5% lost in taste for blood, 5% lost in opportunity, and 15% lost on poison damage due to taste for blood not applying to poisons anymore.
> >
> >  <https://www.turtlogs.com/tiny_url/24200>
>
>   Ive already explained to you how pve encounters favour rogues in another thread, i suggest you go back there and read it again, and not derail this thread thanks

thats a wierd way of saying that rogues are over tuned for pve and so need a nerf.

## Post 172408 by Crake (Patch Note Conspiracy Theorist) — 2026-03-25T16:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=172408#p172408 | page 1 | era: post-1.18.1 -->

> **amanagor wrote: Wed Mar 25, 2026 1:27 pm**
> > **Crake wrote: Tue Mar 24, 2026 11:18 pm**
> > > **amanagor wrote: Tue Mar 24, 2026 9:26 am**
> > > <https://www.turtlogs.com/tiny_url/24200>
> >
> >   Ive already explained to you how pve encounters favour rogues in another thread, i suggest you go back there and read it again, and not derail this thread thanks
>
>   thats a wierd way of saying that rogues are over tuned for pve and so need a nerf.

Take it back to the other thread, thanks

