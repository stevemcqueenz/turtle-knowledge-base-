---
title: "I dont see my interface nameplate"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=11240"
topic_id: 11240
forum_id: 3
forum: "Help & Support"
author: "Hunterr55"
author_authority: "player"
posted: "2023-10-27T20:53:00Z"
last_post: "2023-10-27T20:56:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:00:03Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# I dont see my interface nameplate

## Post 74407 by Hunterr55 — 2023-10-27T20:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74407#p74407 | page 1 | era: pre-1.18.1 -->

Hello i created new character on new pvp server and from beginning i dont see my and my target nameplate, this one wich should be at left upper corner of the screen by deaflut. I try to disable all addonas and clear WDB folder but it didnt fix my problem. Does anybody have similar problem?
Doeas anybody know how to fix it?
Greetings
Avrill

## Post 74408 by Hctwowfan (Bug Report Enthusiast) — 2023-10-27T20:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74408#p74408 | page 1 | era: pre-1.18.1 -->

The wdb folder only holds cached information so your client doesn't need to query the server as often. Your ui config and stuff is stored in the wtf folder, which you can equally just delete (make a copy of it cause it also stores quest history for pfquest and stuff), the game will create a new wtf folder at launch with base settings.

