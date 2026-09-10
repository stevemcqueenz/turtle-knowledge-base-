---
title: "pfQuest: adding custom quests"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2385"
topic_id: 2385
forum_id: 18
forum: "AddOns"
author: "Manateufel"
author_authority: "player"
posted: "2021-12-28T18:32:00Z"
last_post: "2022-01-16T21:59:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:33:43Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# pfQuest: adding custom quests

## Post 14951 by Manateufel — 2021-12-28T18:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=14951#p14951 | page 1 | era: pre-1.18.1 -->

Anyone know how to add custom quests to pfQuest's database?

Edit: in the meantime I found this: [https://reposhub.com/javascript/misc/sh ... urtle.html](https://reposhub.com/javascript/misc/shagu-pfQuest-turtle.html)

## Post 15073 by Kiwijello — 2021-12-31T12:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15073#p15073 | page 1 | era: pre-1.18.1 -->

A couple of us were trying to figure it out. This was found:

[https://raw.githubusercontent.com/shagu ... quests.lua](https://raw.githubusercontent.com/shagu/pfQuest/master/db/enUS/quests.lua)

We need to edit this. The only problems I have is:

A) Finding the custom quest ID numbers
B) Having to manually type in all the quest text (yuck).

Aside from that, looks totally doable :)

## Post 15290 by Savini — 2022-01-04T14:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15290#p15290 | page 1 | era: pre-1.18.1 -->

Once <https://database.turtlecraft.gg/> is back up, it would be slightly faster since I believe there is a section specifically in the TWoW DB to pull up custom content, and then all the text could be copy/pasted...but still being done 1 by 1. Not sure if we could get Torta and team to do an export for us :-)

Thinking we'd need a GitHub setup as well so everyone can participate in changes after the initial creation? Would also include changes to existing quests that show up on the wrong map spots now due to map changes, like inside Stormwind?

## Post 15933 by Doctorbeefy — 2022-01-16T21:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15933#p15933 | page 1 | era: pre-1.18.1 -->

docs.google.com/spreadsheets/d/1-DYHaEq8GD8lH10GJXZxD9iNLNWjl4XA32u_Ire11NY

<https://github.com/shagu/pfQuest-turtle>

This is what has been done so far for pfquest-turtle you can fork shaqu's repo and make some edits. At some point I'll make a video showing how to contribute until then you'll need to ask questions.

