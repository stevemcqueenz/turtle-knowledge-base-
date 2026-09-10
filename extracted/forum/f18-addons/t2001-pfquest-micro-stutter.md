---
title: "pfQuest micro stutter"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2001"
topic_id: 2001
forum_id: 18
forum: "AddOns"
author: "Mickeymicrowave"
author_authority: "player"
posted: "2021-09-02T02:22:00Z"
last_post: "2021-09-05T11:31:00Z"
post_count: 11
pages: 1
fetched: "2026-09-10T10:33:58Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# pfQuest micro stutter

## Post 11920 by Mickeymicrowave — 2021-09-02T02:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11920#p11920 | page 1 | era: pre-1.18.1 -->

After installing pfQuest i am noticing micro stutters about once a second, anyone else experience this? Disabling pfQuest makes it disappear. Checked all my addons one by one and this seems to be the culprit.

## Post 11970 by Azg — 2021-09-03T14:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11970#p11970 | page 1 | era: pre-1.18.1 -->

Same thing. PfQuest worked for 2 days without issues.
Then suddenly micro stutters (that slow down the game to ~34 fps).

Tested clean client with only pfQuest on two different PCs. So it's not hardware issue.
The interesting thing is that it only happen on current lvl 11 character.
With new lvl1 char, game runs fine again.

EDIT: Ok figure it out. Doubled quest caused the issue (don't know how it got doubled). "Fashion Demands Sacrifices". Abandoned one instance of it and all is back to normal.

## Post 11971 by Mickeymicrowave — 2021-09-03T19:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11971#p11971 | page 1 | era: pre-1.18.1 -->

Damn i don't have any duplicate quests so that won't work for me but i'm glad you got it sorted out. I do indeed have the same issue where one character is completely fine and the next stutters into the next galaxy. Thanks for the reply.

Edit: I did just abandon all quests on the character i stopped playing due to the stutter and it appears to be gone. I'm guessing it has something to do with the custom quests the server has but who knows.

## Post 11984 by Xigbclutchix — 2021-09-04T01:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11984#p11984 | page 1 | era: pre-1.18.1 -->

I just died on my hardcore character so I will see if once I pick up a custom quest if I can track down the source of the stutter as I was noticing it a bit too. It does sound like something custom quest-related as I have not run into it yet on this new character but did on my other ones.

## Post 11986 by Mickeymicrowave — 2021-09-04T05:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=11986#p11986 | page 1 | era: pre-1.18.1 -->

A moment of silence for another fallen hardcore hero. Let me know how it goes. Just abandoned only custom quests on another character and the stutter once again disappeared. This is quite the mystery bug.

## Post 12002 by Xigbclutchix — 2021-09-04T16:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12002#p12002 | page 1 | era: pre-1.18.1 -->

I possibly found the issue with some stutters but not sure if all of them. So it looks to be on quest lookup with custom quests. I posted a somewhat [detailed issue on pfQuest's GitHub](https://github.com/shagu/pfQuest/issues/138) as not sure the best way forward to fix this.

## Post 12006 by Xigbclutchix — 2021-09-04T20:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12006#p12006 | page 1 | era: pre-1.18.1 -->

The [latest commit](https://github.com/shagu/pfQuest/commit/8128d6ddb994bf2110c4ca1b46eb2a90fe5ebe29) should hopefully fix some stutters. You will still see stutters on loading and accepting a custom quest due to an algorithm that needs to run. It now at least caches custom quests properly so they are not constantly looped upon.

## Post 12008 by Shagu — 2021-09-04T20:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12008#p12008 | page 1 | era: pre-1.18.1 -->

The mentioned fix is included in the latest version: **6.3.6**

It is uploading while I'm writing this. You can get it as usual from:
<https://shagu.org/pfQuest/>

## Post 12011 by Mickeymicrowave — 2021-09-04T23:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12011#p12011 | page 1 | era: pre-1.18.1 -->

I really appreciate the help and the update but it now appears to be rapidly cycling through the quests, making it stutter more than before and tank the framerate. Hovering over the quest tracker now also makes the tracker's background flicker rapidly.

Edit: It appears to be doing it on all versions now. So it must be something i did, though it's still doing this with all other addons disabled. Now i'm really confused.

## Post 12033 by Shagu — 2021-09-05T11:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12033#p12033 | page 1 | era: pre-1.18.1 -->

There's a new version now: **6.3.7**

 - The quest title is internally used for custom quests instead of ID 0
 - All calls of the GetQuestIDs functions have been adapted to this (hopefully)
 - The journal (/db journal) now correctly displays the title of custom quests
 - Custom quests are no longer removed from the journal during login
 - It is now possible to link quests from the journal with correct names
 - A new option to delete caches has been added (you should run this, if you had 6.3.6 installed)

 **Download: <https://shagu.org/pfQuest>**

*Last edited by Shagu on Sun Sep 05, 2021 11:31 am, edited 1 time in total.*

## Post 12034 by Mickeymicrowave — 2021-09-05T11:31:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=12034#p12034 | page 1 | era: pre-1.18.1 -->

This.. may actually be working properly now, deleting the cache seems to have fixed the new issues. You're a legend, thanks man.

