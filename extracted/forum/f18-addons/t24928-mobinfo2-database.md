---
title: "MobInfo2 database"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24928"
topic_id: 24928
forum_id: 18
forum: "AddOns"
author: "Kefirdru"
author_authority: "player"
posted: "2026-04-22T16:06:00Z"
last_post: "2026-04-22T20:04:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:20:52Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# MobInfo2 database

## Post 176137 by Kefirdru — 2026-04-22T16:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176137#p176137 | page 1 | era: post-1.18.1 -->

I found out that I don't have a database for MobInfo2 on my computer, but the addon still shows even unknown NPCs with appropriate HP/mana.
In the MobInfo2.lua file I found the line:
MobInfoDB = {
["DatabaseVersion:0"] = {
["ver"] = 6,

what made me think that the addon uses some external database for mob hp/mana values.
But I'm not familiar with the addon and how to configure it, so I don't know how can I save the existing databse or export it elsewhere.

## Post 176139 by Laseyjay42 — 2026-04-22T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176139#p176139 | page 1 | era: post-1.18.1 -->

The data might be under your account subfolder, not the specific character. Something like "WoW/WTF/Account/<AccountName>/SavedVariables/MobInfo2.lua"

## Post 176140 by Kefirdru — 2026-04-22T16:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176140#p176140 | page 1 | era: post-1.18.1 -->

I have several acoounts and neither of the subfolders in the WTF/Account tree has MobInfo2 databases, in every of them the only thing I can find regarding data is the line
MobInfoDB = {
["DatabaseVersion:0"] = {
["ver"] = 6,
I also used Search option to find every single MobInfo2.lua file on my computer and checked every of them.
Actually, what made me interested in this issue - I wanted to export this data for any new server I could play after Twow closes

## Post 176142 by Laseyjay42 — 2026-04-22T18:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176142#p176142 | page 1 | era: post-1.18.1 -->

So where's the rest of the file? Is your text editor folding (hiding) the rest of the text? There should be closing brackets.

## Post 176146 by Kefirdru — 2026-04-22T20:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=176146#p176146 | page 1 | era: post-1.18.1 -->

they are in place, I just showed part of the text so that you could get the idea :)

