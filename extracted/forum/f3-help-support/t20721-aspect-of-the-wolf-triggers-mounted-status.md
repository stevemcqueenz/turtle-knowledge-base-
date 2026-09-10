---
title: "Aspect of the Wolf triggers \"mounted\" status"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20721"
topic_id: 20721
forum_id: 3
forum: "Help & Support"
author: "Margatroid"
author_authority: "player"
posted: "2025-08-07T17:38:00Z"
last_post: "2025-08-07T19:25:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T08:42:19Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Aspect of the Wolf triggers "mounted" status

## Post 143648 by Margatroid — 2025-08-07T17:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143648#p143648 | page 1 | era: pre-1.18.1 -->

Hi, I have a level 50 hunter and I've noticed an issue with Aspect of the Wolf that doesn't seem to have any solution.

Here's the issue: I'm using the addon ItemRack, and I have an event set to change my gear when I mount. Every time I activate Aspect of the Wolf, ItemRack changes my gear to this "mounted" set. Something about the ability is telling ItemRack that I am mounted. Similarly, as long as I have Aspect of the Wolf active, if I mount and dismount it will not change my gear, but will just keep me in my "mounted" set even when I dismount. ItemRack thinks I am mounted as long as Aspect of the Wolf is active.

This is a huge issue because if I change aspects during combat and then Feign Death, my gear will swap to the mounted set and I will be stuck with it for the rest of the encounter. So if I like switch to Cheetah, then back to Wolf, and Feign, I will just be stuck wearing the mounted set.

Please look into this and figure out why Aspect of the Wolf is somehow flagging hunters as "mounted." None of the other Aspects have this problem. I'm not sure if anyone has ever reported this issue before, but I hope it can be fixed soon. Thanks!

Edit: I just saw that there's a bug tracker, so I will report this there also.

## Post 143665 by Hctwowfan (Bug Report Enthusiast) — 2025-08-07T19:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143665#p143665 | page 1 | era: pre-1.18.1 -->

This is not a twow issue but an addon issue. Basically without any technical details, your addon checks for buff icons on you and aspect of the wolf has the same icon as a regular ass riding wolf. Your addon thus interprets your aspect icon as being mounted up. If the game had an aspect of the horse using the regular human horse mount icon, you'd run into the same problem. Easiest fix would be for twow devs to change the icon of the aspect to something that doesn't share the same icon as a mount, but fuck that tbh. Fix the addon, don't alter the game to make an addon work.

## Post 143669 by Margatroid — 2025-08-07T19:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143669#p143669 | page 1 | era: pre-1.18.1 -->

Well, that's pretty hilarious. Your opinion of "but fuck that tbh" is nonsense though. If changing the icon will resolve this issue, there's no reason not to do it. There are probably other icons of wolves that could be used, and it would be an easy fix for this issue which otherwise is unlikely to ever be fixed. 1.12 ItemRack is not in active development, and how exactly would they fix it anyway, even if it was? Would they make it not work with riding wolves? No I don't think so.

Clearly the fix is just to change the icon so hunters don't have to deal with this. It's an extremely easy fix to make. I'd appreciate it if the devs would do this, thanks.

## Post 143671 by Hctwowfan (Bug Report Enthusiast) — 2025-08-07T19:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143671#p143671 | page 1 | era: pre-1.18.1 -->

Yeah well it starts with an easy fix for your addon and ends with 95% of developer time being used to alter the game files to make every other niche out of date addon work as well. That's a can of worms I'm sure they won't open. Feel free to disagree.

## Post 143678 by Margatroid — 2025-08-07T19:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=143678#p143678 | page 1 | era: pre-1.18.1 -->

Itemrack is not a "niche out of date addon." It's offered by twow themselves as one of the main addons you can download in the launcher, and in fact I *updated* it through the launcher today to make sure "out of dateness" wasn't the issue.  It's an awesome addon that tons of people use, and making sure it works alright with this one issue by simply changing one icon is not some kind of gigantic task. It would be extremely easy to do.

I think the best solution is this: make a second copy of the exact same wolf icon and add it to the game files with a different ID. ItemRack is referencing the ID of the icon, not the actual graphic of the wolf. This would be very easy to do, and would solve the problem. And considering the amount of custom icons they have added to the game lately for things like herbs, this seems to be something the devs already know how to do, and would have very little trouble with. If they can make Grave Moss look different simply for aesthetic reasons, they can make it so hunters don't have headaches with ItemRack.

