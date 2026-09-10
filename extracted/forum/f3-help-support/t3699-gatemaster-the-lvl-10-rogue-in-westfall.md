---
title: "Gatemaster the lvl 10 rogue in westfall"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=3699"
topic_id: 3699
forum_id: 3
forum: "Help & Support"
author: "Zekythos"
author_authority: "player"
posted: "2022-08-14T12:44:00Z"
last_post: "2022-08-14T17:49:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T09:22:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Gatemaster the lvl 10 rogue in westfall

## Post 22305 by Zekythos — 2022-08-14T12:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22305#p22305 | page 1 | era: pre-1.18.1 -->

So this rogue twink named Gatemaster is always in westfall and is always killing everybody he can get his boney hands on.
It has been a problem for quite a while, can anything be done about this. it ruins my time spent there and i can imagine everyone else aswell. i have "observed" him for 3-4 days now and i hear he has been there longer than that, doing the same bullshit.

please do something about this.

## Post 22307 by Wolle — 2022-08-14T12:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22307#p22307 | page 1 | era: pre-1.18.1 -->

How about turnin off your PVP flag so he can't kill you?

## Post 22309 by Thol (Barrens Chat Casualty) — 2022-08-14T12:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22309#p22309 | page 1 | era: pre-1.18.1 -->

This guy?
![Image](https://i.imgur.com/CAFRrTG.png)

## Post 22319 by Zekythos — 2022-08-14T15:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22319#p22319 | page 1 | era: pre-1.18.1 -->

Act like im a stupid 2 year old who just started to talk. How do i turn of PvP?

## Post 22325 by Thol (Barrens Chat Casualty) — 2022-08-14T15:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22325#p22325 | page 1 | era: pre-1.18.1 -->

If you mean PvP flag just type /pvp in chat, it'll take 5min for the PvP flag to disappear.
If you purchased War Mode glyph you can return to the tutorial area and talk to the glyph master to remove it.

## Post 22327 by Zekythos — 2022-08-14T16:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22327#p22327 | page 1 | era: pre-1.18.1 -->

yeah, i figured out why i have been getting killed. i buff almost everyone i see, and apparently you get flaged once you buff someone that is flaged for PvP.

i told you i was a stupid 2 year old

## Post 22328 by Thol (Barrens Chat Casualty) — 2022-08-14T16:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22328#p22328 | page 1 | era: pre-1.18.1 -->

Use this macro, it'll prevent you getting flagged with buffs:

Buff Macro - Alt to self cast. Will not buff PVP flagged targets. - by Nakie Code: Select all

```
/script spell="Power Word: Fortitude"; onself=IsAltKeyDown(); if onself or not UnitExists("target") or UnitIsEnemy("player", "target") or not UnitIsPVP("target") then CastSpellByName(spell, onself) end
```

You'll have to do this for each buff, replace Power Word: Fortitude by the name of your buff.

## Post 22338 by Zekythos — 2022-08-14T17:49:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=22338#p22338 | page 1 | era: pre-1.18.1 -->

oh, wow. thanks alot! i can buff people again! :D

