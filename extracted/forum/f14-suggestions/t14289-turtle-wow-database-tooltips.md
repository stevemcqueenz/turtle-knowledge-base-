---
title: "Turtle WoW Database Tooltips"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14289"
topic_id: 14289
forum_id: 14
forum: "Suggestions"
author: "Ltanailov"
author_authority: "player"
posted: "2024-06-21T08:26:00Z"
last_post: "2024-06-22T17:39:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T11:51:04Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Turtle WoW Database Tooltips

## Post 97470 by Ltanailov — 2024-06-21T08:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97470#p97470 | page 1 | era: pre-1.18.1 -->

Hi everyone!

I'd like to suggest making a public script for tooltips like [WoWHead's](https://www.wowhead.com/tooltips).
This could help people writing character guides, class guides, etc.

Is this possible without overloading the database?

## Post 97471 by Xudo (Grandmaster of Forum PvP) — 2024-06-21T08:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97471#p97471 | page 1 | era: pre-1.18.1 -->

> **Ltanailov wrote: Fri Jun 21, 2024 8:26 am**
> Is this possible without overloading the database?

Database is protected by cloudflare. Requests for tooltips are pretty straightforward (unlike search queries) and are probably cached in CF. So if you send request for tooltip, you don't interact with database directly.

## Post 97563 by Ltanailov — 2024-06-21T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97563#p97563 | page 1 | era: pre-1.18.1 -->

> Database is protected by cloudflare.

I haven't worked with CloudFlare. So we won't be able to get a response from the DB or from a hypothetical CF cache on a third party anyway?

Or did you mean we wouldn't be able to get the data ourselves using web scraping? I wouldn't want to resort to such a method if the devs have plans to provide access to tooltips "API".

## Post 97565 by Xanwow — 2024-06-22T01:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97565#p97565 | page 1 | era: pre-1.18.1 -->

> **Ltanailov wrote: Fri Jun 21, 2024 11:20 pm**
> > Database is protected by cloudflare.
>
>   I haven't worked with CloudFlare. So we won't be able to get a response from the DB or from a hypothetical CF cache on a third party anyway?
>
>  Or did you mean we wouldn't be able to get the data ourselves using web scraping? I wouldn't want to resort to such a method if the devs have plans to provide access to tooltips "API".

Yeah cloudflare would likely get in the way of any attempt to recreate this using the web db. I looked over the javascript and the devs would have to set up an API to get thumbnails and json data from the DB.

The wowhead tooltip stuff doesnt seem to be open source, but it could be modified to support it with the Twow database.

I like the functionality, and it would be cool to have these types of tooltips in patch notes and forum posts, but its likely too little of a benefit for the busy devs to work on.

## Post 97592 by Ltanailov — 2024-06-22T11:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97592#p97592 | page 1 | era: pre-1.18.1 -->

> **Xanwow wrote: Sat Jun 22, 2024 1:24 am**
> I like the functionality, and it would be cool to have these types of tooltips in patch notes and forum posts, but its likely too little of a benefit for the busy devs to work on.

The Turtle WoW database is based on AoWoW (open source), which in turn has [built-in functionality to allow third parties to include hints on their sites](https://aowow.trinitycore.info/?tooltips).

Developers probably won't have to develop this functionality from scratch. Unfortunately, it may need some serious tweaking due to the fact that the version expected by AoWoW is 3.3.5 (WotLK) and the fact that Turtle WoW uses CloudFlare.

I'd be very happy if any of the developers can comment on this.

## Post 97599 by Xanwow — 2024-06-22T14:51:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97599#p97599 | page 1 | era: pre-1.18.1 -->

> **Ltanailov wrote: Sat Jun 22, 2024 11:17 am**
> > **Xanwow wrote: Sat Jun 22, 2024 1:24 am**
> > I like the functionality, and it would be cool to have these types of tooltips in patch notes and forum posts, but its likely too little of a benefit for the busy devs to work on.
>
>   The Turtle WoW database is based on AoWoW (open source), which in turn has [built-in functionality to allow third parties to include hints on their sites](https://aowow.trinitycore.info/?tooltips).
>
>  Developers probably won't have to develop this functionality from scratch. Unfortunately, it may need some serious tweaking due to the fact that the version expected by AoWoW is 3.3.5 (WotLK) and the fact that Turtle WoW uses CloudFlare.
>
>  I'd be very happy if any of the developers can comment on this.

Nice Find! I poked around and this should work. It looks like the TWOW database does support this functionality out of the box!

You can see it in action when you search an item in the DB and hover over the item icon (e.g. <https://database.turtlecraft.gg/?search=oil+of+im>)  and the API response is the same as used by the script. (Cloudflare still gets in the way for me testing this on my machine, but could be whitelisted by twow devs for their own forum)

It should just be a matter of changing a few URLs in the javascript you linked, as well as enabling this from within the forum (guide here) [https://wowhead.com/forums/topic/powere ... guide-3464](https://wowhead.com/forums/topic/powered-tooltips-guide-3464)

## Post 97607 by Ltanailov — 2024-06-22T17:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=97607#p97607 | page 1 | era: pre-1.18.1 -->

> **Xanwow wrote: Sat Jun 22, 2024 1:24 am**
> ...but could be whitelisted by twow devs for their own forum...
>
>  It should just be a matter of changing a few URLs in the javascript you linked, as well as enabling this from within the forum (guide here) [https://wowhead.com/forums/topic/powere ... guide-3464](https://wowhead.com/forums/topic/powered-tooltips-guide-3464)

Developers, please, we need this -> [[Torta's Egg]](https://database.turtlecraft.gg/?quest=40302) <- to work!   turtle_in_love

