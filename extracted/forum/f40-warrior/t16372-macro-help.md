---
title: "Macro help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16372"
topic_id: 16372
forum_id: 40
forum: "Warrior"
author: "Wdavec3"
author_authority: "player"
posted: "2024-12-07T03:59:00Z"
last_post: "2025-02-01T23:17:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T07:53:13Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro help

## Post 111659 by Wdavec3 — 2024-12-07T03:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111659#p111659 | page 1 | era: pre-1.18.1 -->

Is it possible to have a macro that will change abilities based on what stance you are in?

Thank you in advance!

## Post 118669 by Atompapst — 2025-02-01T23:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118669#p118669 | page 1 | era: pre-1.18.1 -->

Code: Select all

```
/run local a, b, c, d, e = GetShapeshiftFormInfo(3) DEFAULT_CHAT_FRAME:AddMessage("icon: " .. tostring(a) .. " name: " .. tostring(b) .. " active: " .. tostring(c) .. " castable: " .. tostring(d) .. " id: " .. tostring(e))
```

This will give you information about every Stance you are currently in and not

 1 = Battle Stance
 2 = Defensive Stance
 3 = Beserker Stance

based on the value active you can ask if active == 1 and then use CastSpellByName("Spell Name")

*Last edited by Atompapst on Sat Feb 01, 2025 11:19 pm, edited 1 time in total.*

