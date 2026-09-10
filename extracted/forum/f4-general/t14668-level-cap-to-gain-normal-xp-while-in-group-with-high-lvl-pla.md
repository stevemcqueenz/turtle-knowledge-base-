---
title: "Level cap to gain normal xp while in group with high lvl player `?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=14668"
topic_id: 14668
forum_id: 4
forum: "General"
author: "Ashwhole"
author_authority: "player"
posted: "2024-07-21T22:44:00Z"
last_post: "2024-07-22T00:37:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:51:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Level cap to gain normal xp while in group with high lvl player `?

## Post 100084 by Ashwhole (Barrens Chat Casualty) — 2024-07-21T22:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100084#p100084 | page 1 | era: pre-1.18.1 -->

Hi !

What is the lvl cap for being in grp with high lvl player to still gain normal xp `?

Like how many lvl above you can the high lvl player be to not significantly lower your xp gained `?

Is it 10 levels ?

Thx !

## Post 100085 by Steakhouse (Patch Note Conspiracy Theorist) — 2024-07-21T23:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100085#p100085 | page 1 | era: pre-1.18.1 -->

I'm not certain but I think it's related to their XP gain towards that monster. So a green mob for them will give you very low XP, and a gray mob for them will give you nearly none.

## Post 100086 by Ashwhole (Barrens Chat Casualty) — 2024-07-21T23:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100086#p100086 | page 1 | era: pre-1.18.1 -->

no i dont mean that but for example:
You are 4x lvl 40 players and you invite a lvl 50 player to help you.
How much lower xp per mob will you get now ?  How many lvls higher then you can the highest lvl person in the group be to no significantly lower the xp gained per kill ? Is it 5 levels or 10 levels ?`

## Post 100088 by Speedz1337 (Patch Note Conspiracy Theorist) — 2024-07-22T00:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=100088#p100088 | page 1 | era: pre-1.18.1 -->

The following is after very limited testing. The formulae here are best guess.

Assuming everyone in the group is the same level

MXP = solo mob xp

XP = MXP/numberOfMembers * modifier.
Modifiers:

 1 person = 1.0
 2 person group = 1.0
 3 person group = 1.166
 4 person group = 1.3
 5 person group = 1.4
Example:

 1 person = 100xp
 2 people = 50xp each.
 3 people = ~39xp each.
 4 people = ~33xp each.
 5 people = ~28xp each.

Got this from <https://wowpedia.fandom.com/wiki/Mob_experience>

