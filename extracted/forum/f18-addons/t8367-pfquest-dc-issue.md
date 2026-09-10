---
title: "PFquest DC issue"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=8367"
topic_id: 8367
forum_id: 18
forum: "AddOns"
author: "Grimseethe"
author_authority: "player"
posted: "2023-07-18T09:02:00Z"
last_post: "2023-08-16T09:58:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T10:31:10Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# PFquest DC issue

## Post 53901 by Grimseethe — 2023-07-18T09:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53901#p53901 | page 1 | era: pre-1.18.1 -->

Hello all, i couldnt get questie to work, it showed the quest objectives in the wrong locations and someone suggested PFquest, so i did and it seems to work fine, except it causes me to DC every time i interact with the UI.
I deleted my wdb file, no idea what else to do.

Thanks in advance.

## Post 53988 by Jolikmc (Patch Note Conspiracy Theorist) — 2023-07-18T21:06:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=53988#p53988 | page 1 | era: pre-1.18.1 -->

Well, firstly… check your allocated AddOn memory.  Compared with most other Vanilla AddOns, *pfQuest* uses quite a lot of it, so it needs all the memory it can get.  One recommendation is to just set that value to "0" as this will allow the game to use as much memory as it needs for *all* of your AddOns.

If that doesn't help, it might be worth your time to try disabling all of your AddOns except for that one.  If *pfQuest* works by itself, then try enabling and disabling your AddOns one-by-one until you find the specific combination that's causing the forced logout.

As a last-ditch effort, if *pfQuest*, by itself, is causing the issue, you could delete the "pfQuest.lua" file in your SavedVariables folder.  This will completely reset the AddOn to its factory defaults, but it will also completely erase your quest progress within the AddOn, itself.  But, if you only just started using it, you won't be missing much.

I hope at least one of these suggestions helps.  Cheers!

## Post 54009 by Grimseethe — 2023-07-19T05:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=54009#p54009 | page 1 | era: pre-1.18.1 -->

> **Jolikmc wrote: Tue Jul 18, 2023 9:06 pm**
> Well, firstly… check your allocated AddOn memory.  Compared with most other Vanilla AddOns, *pfQuest* uses quite a lot of it, so it needs all the memory it can get.  One recommendation is to just set that value to "0" as this will allow the game to use as much memory as it needs for *all* of your AddOns.
>
>  If that doesn't help, it might be worth your time to try disabling all of your AddOns except for that one.  If *pfQuest* works by itself, then try enabling and disabling your AddOns one-by-one until you find the specific combination that's causing the forced logout.
>
>  As a last-ditch effort, if *pfQuest*, by itself, is causing the issue, you could delete the "pfQuest.lua" file in your SavedVariables folder.  This will completely reset the AddOn to its factory defaults, but it will also completely erase your quest progress within the AddOn, itself.  But, if you only just started using it, you won't be missing much.
>
>  I hope at least one of these suggestions helps.  Cheers!

Ill try it out thanks.

## Post 57577 by Abled1977 — 2023-08-16T09:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=57577#p57577 | page 1 | era: pre-1.18.1 -->

Completely remove PFquest from your addons folder and reinstall it from a trusted source. This can help ensure that any corrupted or incomplete installation files are replaced.

