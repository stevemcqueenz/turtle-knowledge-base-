---
title: "How can I integrate commands from addons into a macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5051"
topic_id: 5051
forum_id: 18
forum: "AddOns"
author: "Blaut"
author_authority: "player"
posted: "2022-12-11T07:31:00Z"
last_post: "2024-05-10T11:46:00Z"
post_count: 6
pages: 1
fetched: "2026-09-10T10:29:03Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How can I integrate commands from addons into a macro?

## Post 30452 by Blaut — 2022-12-11T07:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30452#p30452 | page 1 | era: pre-1.18.1 -->

Some addons have their own specific commands. For example, /pfcast from pfUI for cast on mouseover units.

This works fine with a simple /pfcast Holy Light command, but how can I build it into a macro like:

/run if IsAltKeyDown() then CastSpellByName("Holy Light(Rank 6)") else CastSpellByName("Holy Light") end

Thx

## Post 30462 by Shamma (Bug Report Enthusiast) — 2022-12-11T13:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30462#p30462 | page 1 | era: pre-1.18.1 -->

You cannot. You are using different API inside "/run" - the LUA script language. You can still achieve the same, but it is going to be much longer and verbose.
There is the LUA reference:
[https://vanilla-wow-archive.fandom.com/ ... rcraft_API](https://vanilla-wow-archive.fandom.com/wiki/World_of_Warcraft_API)

## Post 30470 by Blaut — 2022-12-11T15:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30470#p30470 | page 1 | era: pre-1.18.1 -->

I had hoped that I had just badly googled this question. Too bad.

## Post 30475 by Geojak (Grandmaster of Forum PvP) — 2022-12-11T17:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30475#p30475 | page 1 | era: pre-1.18.1 -->

You can indirectly, the /pfcast is defined inside the addon somewhere. It's basically a shortcut command often linked to an internal function. Pfcast() or something.

Now, if you dig the code, you can find out what is actually being called in lua and that you use inside the /run.

Sometimes you need to make the internal function global do yo u can actually call it

## Post 30575 by Baess — 2022-12-13T10:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=30575#p30575 | page 1 | era: pre-1.18.1 -->

SlashCmdList.PFCAST("spell") should work depending on what /pfcast is associated with but most of the time they are fairly intuitive.

Look at the lua and somewhere should be something like

SLASH_PFCAST1 = '/pfcast'

## Post 94497 by Anthy2 — 2024-05-10T11:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=94497#p94497 | page 1 | era: pre-1.18.1 -->

> **Baess wrote: Tue Dec 13, 2022 10:07 am**
> SlashCmdList.PFCAST("spell") should work depending on what /pfcast is associated with but most of the time they are fairly intuitive.
>
>  Look at the lua and somewhere should be something like
>
>  SLASH_PFCAST1 = '/pfcast'

You are the man dude, the SlashCmdList.PFCAST("spell") does the trick, thanks a lot, I'm a complete noob at this, so how do I look into the lua of the addon?

