---
title: "[Help] I can't get (basic) macros to work :)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13341"
topic_id: 13341
forum_id: 4
forum: "General"
author: "Ragetto"
author_authority: "player"
posted: "2024-03-08T19:00:00Z"
last_post: "2024-03-08T19:42:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:54:12Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Help] I can't get (basic) macros to work :)

## Post 89709 by Ragetto (Patch Note Conspiracy Theorist) — 2024-03-08T19:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89709#p89709 | page 1 | era: pre-1.18.1 -->

Hello,

When I was playing WoW (long time ago), I used a few macros to make life easier, but for some reason, I can't get them to work today (with 1-2 exceptions).

This one works: Code: Select all

```
/cast Feign Death
/script PetPassiveMode();
/script PetFollow();
```

But not this one (even though it seems there could not be anything simpler - I haven't put any conditions on the use of items): Code: Select all

```
/use Morning Glory Dew
/use Roasted Quail
```

The console tells me: "*Type '/help' for a listing of a few commands.*"

The same goes for: Code: Select all

```
/use Devilsaur Eye
/cast Rapid Fire
```

And generally, I'm having trouble using macros; I'm almost surprised that the Feign Death one works correctly.

Could I have missed something super obvious?

## Post 89712 by Likaleo (Barrens Chat Casualty) — 2024-03-08T19:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89712#p89712 | page 1 | era: pre-1.18.1 -->

Trinket needs to be item slot number "/use 13" should work. I think its same for the food but i dont know bag numbers

## Post 89716 by Atreidon (Grandmaster of Forum PvP) — 2024-03-08T19:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89716#p89716 | page 1 | era: pre-1.18.1 -->

The /use command is not supported by classic wow.

You can use the addon RoidMacros
<https://github.com/DennisWG/Roid-Macros>

The addon will look up the item specified in your inventory when you use /use in a macro

Otherwise you have to fiddle with specifying container item slots which is a pain

## Post 89719 by Ragetto (Patch Note Conspiracy Theorist) — 2024-03-08T19:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=89719#p89719 | page 1 | era: pre-1.18.1 -->

Thank you both for your answers!

Indeed, I prefer to use the item's name rather than its slot number :o

