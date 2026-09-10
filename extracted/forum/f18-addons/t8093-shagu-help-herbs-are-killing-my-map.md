---
title: "Shagu help - herbs are killing my map !!!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8093"
topic_id: 8093
forum_id: 18
forum: "AddOns"
author: "Jaggedone"
author_authority: "player"
posted: "2023-07-01T21:15:00Z"
last_post: "2023-07-02T08:54:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:31:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Shagu help - herbs are killing my map !!!

## Post 52066 by Jaggedone — 2023-07-01T21:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52066#p52066 | page 1 | era: pre-1.18.1 -->

I use pfQuest, and I like it, but I am a Herbalist, and there are so many herb nodes showing on my map that I can't see info for my quests. I have tried /db clear, /db reset, /db herbs [59,60] (since I am a lowbie) - nothing helps !!!!

I cannot believe that for an addon so useful and well-written, there is not some way to disable this particular feature.

Shagu, where are you when I need you !!!

## Post 52073 by Getplucked (Patch Note Conspiracy Theorist) — 2023-07-01T22:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52073#p52073 | page 1 | era: pre-1.18.1 -->

Did you try resetting the addon settings? I also use pfui and it only shows me mining/herb nodes if I specifically type the command to show them. They disappear again if I log out or close the game.

Also, you can shift-click them on the map to make all nodes of that type disappear.

## Post 52088 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-07-02T03:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52088#p52088 | page 1 | era: pre-1.18.1 -->

I've had problems with Shagu's quest AddOn, too.  It's a fantastic AddOn.  It really is.  But it's held together with Elmer's Glue, at times.  Such is the way of "v1" AddOns, I'm afraid.

As stated, there's exactly one "disable" command for extra node databases… which means that you have to **manually re-enable** the ones you actually want on your map.  Extra nodes are usually off by default, too, so something really must have gone wrong.
Try updating the AddOn, first, and if that doesn't work, physically delete the relevant LUA files in your SavedVariables folder.  This will **completely annihilate the "quests you've done" database**, meaning you'll have to manually force-clear every single one of them on every area you've been to, but when the AddOn acts up to a point where you can't fix it with in-game commands, there's really no other choice.

I speak from experience.  It's annoying.  But, it's rare enough to where it's an acceptable concession.

## Post 52094 by Mrrosh (Barrens Chat Casualty) — 2023-07-02T07:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52094#p52094 | page 1 | era: pre-1.18.1 -->

> **Jaggedone wrote: Sat Jul 01, 2023 9:15 pm**
> I use pfQuest, and I like it, but I am a Herbalist, and there are so many herb nodes showing on my map that I can't see info for my quests. I have tried /db clear, /db reset, /db herbs [59,60] (since I am a lowbie) - nothing helps !!!!
>
>  I cannot believe that for an addon so useful and well-written, there is not some way to disable this particular feature.
>
>  Shagu, where are you when I need you !!!

Make sure your addon is up to date. Then disable all other addons and see if it still happens.

## Post 52096 by Lexiebean (Barrens Chat Casualty) — 2023-07-02T08:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=52096#p52096 | page 1 | era: pre-1.18.1 -->

Shift click on the nodes that you want to remove from your map.

Like, shift click a dreamfoil anywhere on your map and it will remove all dreamfoils.

If it comes back, you're probably running some additional addon that's doing things.

