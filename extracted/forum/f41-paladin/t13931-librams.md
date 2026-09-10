---
title: "Librams"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13931"
topic_id: 13931
forum_id: 41
forum: "Paladin"
author: "Tobbsu"
author_authority: "player"
posted: "2024-05-16T15:43:00Z"
last_post: "2024-06-13T05:36:00Z"
post_count: 13
pages: 1
fetched: "2026-09-10T07:57:42Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Librams

## Post 94992 by Tobbsu — 2024-05-16T15:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94992#p94992 | page 1 | era: pre-1.18.1 -->

hey is it any way you devs can make the Librams can't be sold and only can be deleted? this will be help full.

## Post 94994 by Geojak (Grandmaster of Forum PvP) — 2024-05-16T15:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94994#p94994 | page 1 | era: pre-1.18.1 -->

Oh yes pls, I have sold my libram by accident toooo many times. Just set vendor prices to 0 please.
TWoW added alot of libram and most paladins use macros to auto swap them around in combat. These can result to unfortunate vendor accidents

## Post 95026 by Likaleo (Barrens Chat Casualty) — 2024-05-17T03:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95026#p95026 | page 1 | era: pre-1.18.1 -->

What librams are you auto swapping and why?

## Post 95031 by Xudo (Grandmaster of Forum PvP) — 2024-05-17T05:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95031#p95031 | page 1 | era: pre-1.18.1 -->

As a non-paladin player, I want the option to sell this stuff if it dropped in dungeons/raids. I don't have reasons to make it 0-cost.
Majority of librams are sold. Only monority are being equipped.

## Post 95039 by Geojak (Grandmaster of Forum PvP) — 2024-05-17T11:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95039#p95039 | page 1 | era: pre-1.18.1 -->

> **Likaleo wrote: Fri May 17, 2024 3:34 am**
> What librams are you auto swapping and why?

All of them, why wouldn't I?
Every time consecration - > swap libram on cast for 5% dmg reduction
Everytime on cleanse - > swap libram on cast for cheaper mana cost
And so on

It works amazingly well after you fixed the gcd reset bug by checking for gcd in your macro before swapping.
There is literally no downside, besides a minor fps drop.
You get more powerfull just by having all libram in your bag and mscroed to use ALL of them

## Post 95050 by Xudo (Grandmaster of Forum PvP) — 2024-05-17T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95050#p95050 | page 1 | era: pre-1.18.1 -->

If your librams are equipped by macros, then you can add check "is vendor window opened" and disable their usage. I don't have working solution. If anyone know it, please post here. I will search a way when I get some time.

## Post 95053 by Xudo (Grandmaster of Forum PvP) — 2024-05-17T14:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95053#p95053 | page 1 | era: pre-1.18.1 -->

It was easier than I thought. Code: Select all

```
/run if GetMerchantNumItems()==0 then UseContainerItem(0,1) else SendChatMessage("whoops") end;
```

If vendor window is opened, then GetMerchantNumItems() is greater than 0 and you get "whoops" message. Otherwise you swap item in first slot of first bag.

## Post 95059 by Geojak (Grandmaster of Forum PvP) — 2024-05-17T14:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=95059#p95059 | page 1 | era: pre-1.18.1 -->

> **Xudo wrote: Fri May 17, 2024 2:44 pm**
> It was easier than I thought. Code: Select all
>
> ```
> /run if GetMerchantNumItems()==0 then UseContainerItem(0,1) else SendChatMessage("whoops") end;
> ```
>
>  If vendor window is opened, then GetMerchantNumItems() is greater than 0 and you get "whoops" message. Otherwise you swap item in first slot of first bag.

Intersting, I'll try introduce this check into roid macros /equip code

## Post 96424 by Ppxia — 2024-06-06T06:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96424#p96424 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Fri May 17, 2024 11:13 am**
> > **Likaleo wrote: Fri May 17, 2024 3:34 am**
> > What librams are you auto swapping and why?
>
>   All of them, why wouldn't I?
>  Every time consecration - > swap libram on cast for 5% dmg reduction
>  Everytime on cleanse - > swap libram on cast for cheaper mana cost
>  And so on
>
>  It works amazingly well after you fixed the gcd reset bug by checking for gcd in your macro before swapping.
>  There is literally no downside, besides a minor fps drop.
>  You get more powerfull just by having all libram in your bag and mscroed to use ALL of them

Hi, may I ask how to check GCD by macro ?

## Post 96444 by Geojak (Grandmaster of Forum PvP) — 2024-06-06T14:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96444#p96444 | page 1 | era: pre-1.18.1 -->

> **Ppxia wrote: Thu Jun 06, 2024 6:07 am**
> > **Geojak wrote: Fri May 17, 2024 11:13 am**
> > > **Likaleo wrote: Fri May 17, 2024 3:34 am**
> > > What librams are you auto swapping and why?
> >
> >   All of them, why wouldn't I?
> >  Every time consecration - > swap libram on cast for 5% dmg reduction
> >  Everytime on cleanse - > swap libram on cast for cheaper mana cost
> >  And so on
> >
> >  It works amazingly well after you fixed the gcd reset bug by checking for gcd in your macro before swapping.
> >  There is literally no downside, besides a minor fps drop.
> >  You get more powerfull just by having all libram in your bag and mscroed to use ALL of them
>
>   Hi, may I ask how to check GCD by macro ?

Here is an example
/equip [nocooldown:crusader_strike] libram of x
/cast crusader strike

## Post 96484 by Bittermens (Barrens Chat Casualty) — 2024-06-07T02:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96484#p96484 | page 1 | era: pre-1.18.1 -->

They should fix the libram and idol drop rate in scholomance and make the crusader libram have a guaranteed drop off 50+ Dungeons and Rare Elites

## Post 96937 by Ppxia — 2024-06-13T04:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96937#p96937 | page 1 | era: pre-1.18.1 -->

> **Geojak wrote: Thu Jun 06, 2024 2:40 pm**
> > **Ppxia wrote: Thu Jun 06, 2024 6:07 am**
> > > **Geojak wrote: Fri May 17, 2024 11:13 am**
> > > All of them, why wouldn't I?
> > >  Every time consecration - > swap libram on cast for 5% dmg reduction
> > >  Everytime on cleanse - > swap libram on cast for cheaper mana cost
> > >  And so on
> > >
> > >  It works amazingly well after you fixed the gcd reset bug by checking for gcd in your macro before swapping.
> > >  There is literally no downside, besides a minor fps drop.
> > >  You get more powerfull just by having all libram in your bag and mscroed to use ALL of them
> >
> >   Hi, may I ask how to check GCD by macro ?
>
>   Here is an example
>  /equip [nocooldown:crusader_strike] libram of x
>  /cast crusader strike

thx alot! I tried your tips but it doesn't work, can u tell me what addons u are using?

## Post 96938 by Atreidon (Grandmaster of Forum PvP) — 2024-06-13T05:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=96938#p96938 | page 1 | era: pre-1.18.1 -->

You want roidmacros
<https://denniswg.github.io/Roid-Macros/>

