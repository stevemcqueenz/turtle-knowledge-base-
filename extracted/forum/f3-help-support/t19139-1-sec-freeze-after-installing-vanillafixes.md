---
title: "1 sec. freeze after installing Vanillafixes"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19139"
topic_id: 19139
forum_id: 3
forum: "Help & Support"
author: "Laysson"
author_authority: "player"
posted: "2025-05-07T16:08:00Z"
last_post: "2025-05-24T15:02:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:43:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# 1 sec. freeze after installing Vanillafixes

## Post 130064 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-07T16:08:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130064#p130064 | page 1 | era: pre-1.18.1 -->

and still happens even after I uninstalled it, anyone having the same problem ?

edit : the dxvk mod

ps : isn't the dxvk and vanillafixes the same, since they lead to the same github ?

## Post 130126 by Noephix (Patch Note Conspiracy Theorist) — 2025-05-08T00:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130126#p130126 | page 1 | era: pre-1.18.1 -->

Latest version of VanillaFixes comes pre-packed with a buggy DXVK version.

Update to latest DXVK release from <https://github.com/doitsujin/dxvk/releases>

## Post 130156 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-08T07:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130156#p130156 | page 1 | era: pre-1.18.1 -->

> **Noephix wrote: Thu May 08, 2025 12:52 am**
> Latest version of VanillaFixes comes pre-packed with a buggy DXVK version.
>
>  Update to latest DXVK release from <https://github.com/doitsujin/dxvk/releases>

Do I use the one from x32 or x64 folder ?

Any way to know if vulkan is active ?

Thanks.

EDIT : tried both, still happening, it might be an addon problem.

## Post 130195 by Noephix (Patch Note Conspiracy Theorist) — 2025-05-08T13:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130195#p130195 | page 1 | era: pre-1.18.1 -->

> **Laysson wrote: Thu May 08, 2025 7:12 am**
> Do I use the one from x32 or x64 folder ?
>
>  Any way to know if vulkan is active ?
>
>  Thanks.
>
>  EDIT : tried both, still happening, it might be an addon problem.

You need to restart your PC after you install it, otherwise it won't take effect. Windows seems to cache the DLL somewhere and use it until restart instead of a new version. Also x32 is the way to go for WoW, since it's an old x32 game.

## Post 132348 by Laysson (Patch Note Conspiracy Theorist) — 2025-05-21T14:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132348#p132348 | page 1 | era: pre-1.18.1 -->

I just realized it was the Dpsmate addon that caused the freeze.

## Post 132598 by Flab — 2025-05-23T03:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132598#p132598 | page 1 | era: pre-1.18.1 -->

> **Noephix wrote: Thu May 08, 2025 12:52 am**
> Latest version of VanillaFixes comes pre-packed with a buggy DXVK version.
>
>  Update to latest DXVK release from <https://github.com/doitsujin/dxvk/releases>

how do i install it

## Post 132826 by Noephix (Patch Note Conspiracy Theorist) — 2025-05-24T15:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=132826#p132826 | page 1 | era: pre-1.18.1 -->

> **Flab wrote: Fri May 23, 2025 3:15 am**
> how do i install it

You unpack d3d9.dll from x32 folder and replace your d3d9.dll from wow installation folder.

