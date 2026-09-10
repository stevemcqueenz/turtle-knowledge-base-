---
title: "Modded Creature Size"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=16323"
topic_id: 16323
forum_id: 29
forum: "Modding"
author: "Murphydog"
author_authority: "player"
posted: "2024-12-04T14:33:00Z"
last_post: "2024-12-05T10:55:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:41:52Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Modded Creature Size

## Post 111338 by Murphydog — 2024-12-04T14:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111338#p111338 | page 1 | era: pre-1.18.1 -->

Hello, I have just made my first mod for Turtle Wow, heavily inspired by Error404's NECROMANCY mod.
I changed the Imp from the skeletal Imp he created and swapped it for the SkeletalMage model and texture. This worked however has had the unintended effect of keeping the Skeleton the same size as the Imp.

Can anyone suggest why this might be and how I can fix this?

Thanks

## Post 111434 by Turbosaxophonic (Patch Note Conspiracy Theorist) — 2024-12-05T02:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111434#p111434 | page 1 | era: pre-1.18.1 -->

I think the scaling of a mob is server-side information, not sure if there’s anything you can do about it

## Post 111452 by Imonobor (Bug Report Enthusiast) — 2024-12-05T07:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111452#p111452 | page 1 | era: pre-1.18.1 -->

Maybe somehow edit the skeleton model and scale it to be huge? Not sure how you would go about this though, and probably its sepection circle will still be tiny like an imp's.

If you do manage it please share the mod, I'd love to try it   turtle_in_love_head

EDIT: I stumbled upon this tutorial: [https://www.ownedcore.com/forums/world- ... odels.html](https://www.ownedcore.com/forums/world-of-warcraft/world-of-warcraft-model-editing/wow-me-tools-guides/207417-guide-resizing-character-models.html)
However, this approach might have unforeseen side effects, like affecting the size of all imps ingame, or being incompatible with other patches that edit the same file.

## Post 111469 by Murphydog — 2024-12-05T10:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111469#p111469 | page 1 | era: pre-1.18.1 -->

> **Turbosaxophonic wrote: Thu Dec 05, 2024 2:58 am**
> I think the scaling of a mob is server-side information, not sure if there’s anything you can do about it

Thanks for you reply.
I've seen on the discord that this might be possible through editing creaturedisplayinfo or creature model data, I'm going to give this a try and see if it helps. Otherwise you might be right.

## Post 111470 by Murphydog — 2024-12-05T10:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=111470#p111470 | page 1 | era: pre-1.18.1 -->

> **Imonobor wrote: Thu Dec 05, 2024 7:27 am**
> Maybe somehow edit the skeleton model and scale it to be huge? Not sure how you would go about this though, and probably its sepection circle will still be tiny like an imp's.
>
>  If you do manage it please share the mod, I'd love to try it   turtle_in_love_head
>
>  EDIT: I stumbled upon this tutorial: [https://www.ownedcore.com/forums/world- ... odels.html](https://www.ownedcore.com/forums/world-of-warcraft/world-of-warcraft-model-editing/wow-me-tools-guides/207417-guide-resizing-character-models.html)
>  However, this approach might have unforeseen side effects, like affecting the size of all imps ingame, or being incompatible with other patches that edit the same file.

Ah great. I will give this a try.

