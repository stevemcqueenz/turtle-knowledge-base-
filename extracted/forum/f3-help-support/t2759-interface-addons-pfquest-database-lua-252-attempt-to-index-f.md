---
title: "Interface\\AddOns\\pfQuest\\database.lua:252:attempt to index field `?´(a nil value)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2759"
topic_id: 2759
forum_id: 3
forum: "Help & Support"
author: "Softiepof"
author_authority: "player"
posted: "2022-02-24T08:55:00Z"
last_post: "2022-02-24T10:12:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:25:56Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Interface\AddOns\pfQuest\database.lua:252:attempt to index field `?´(a nil value)

## Post 17252 by Softiepof — 2022-02-24T08:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17252#p17252 | page 1 | era: pre-1.18.1 -->

"Interface\AddOns\pfQuest\database.lua:252:attempt to index field `?´(a nil value)"
this keeps showing up with sligt differences and it only goes away if I delete all "-.lua" files in the interface/AddOns/pfquest folder, but if I delete it I lose the pfQuest control in the upper right corner (around the map) I also lose the "pfQuest" that shows current quests.... I´ve tried many things, including deleting the WDB map but that one just keep recurring when I´ve started the game. Furthermore it doesn´t remove the red text box....    crying_turtle
It´s just permanently stuck onn the screen....

## Post 17254 by Geojak (Grandmaster of Forum PvP) — 2022-02-24T10:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17254#p17254 | page 1 | era: pre-1.18.1 -->

If you delete the. Lua files, you are basically deleting the sddon

## Post 17255 by Geojak (Grandmaster of Forum PvP) — 2022-02-24T10:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17255#p17255 | page 1 | era: pre-1.18.1 -->

What's written in the database. Lua file at line 252.did you check the code?

## Post 17256 by Geojak (Grandmaster of Forum PvP) — 2022-02-24T10:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=17256#p17256 | page 1 | era: pre-1.18.1 -->

Try get the newest version of pfquest and pfquest turtle first from shagu github, maybe it fixes itself

