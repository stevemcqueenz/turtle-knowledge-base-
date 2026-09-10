---
title: "Non flagging Glyph for Hardcore players"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4264"
topic_id: 4264
forum_id: 37
forum: "Hardcore Lounge"
author: "Zirtox"
author_authority: "player"
posted: "2022-09-18T16:30:00Z"
last_post: "2022-09-18T16:44:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:33:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Non flagging Glyph for Hardcore players

## Post 25414 by Zirtox — 2022-09-18T16:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25414#p25414 | page 1 | era: pre-1.18.1 -->

Hello,

I've had multiple encounters now that i get flagged randomly in the world by some kind of bug not sure what exactly, so i came up with the idea to have a glyph implemented for Hardcore players that will make you NEVER get flagged nor let you interact in PvP engagements. I'm not the only one that reported this multiple times now that there is a issue with being randomly flagged without interacting with a flagged mob / player or buffing whatsoever, but so far it has not taken serious yet because there wasn't any video proof of it. This could potentially be an easy fix for the occurring issue that players and myself included have.

Please share your thoughts in this topic.

## Post 25416 by Thol (Barrens Chat Casualty) — 2022-09-18T16:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=25416#p25416 | page 1 | era: pre-1.18.1 -->

I agree, PvP flagging should not be possible as HC. (HC+WM is a meme)

In the meantime you can use this macro to prevent buffing flagged players:
 **Buff Macro** - Alt to self cast. Will not buff PVP flagged targets. - *by Nakie* Code: Select all

```
/script spell="Power Word: Fortitude"; onself=IsAltKeyDown(); if onself or not UnitExists("target") or UnitIsEnemy("player", "target") or not UnitIsPVP("target") then CastSpellByName(spell, onself) end
```

And this Addon made by Lexie that will display a warning if you get flagged:
<https://github.com/Lexiebean/PvPWarning>

