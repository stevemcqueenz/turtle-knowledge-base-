---
title: "THE DONATION REWARD MENU BUTTON IS GREY."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21116"
topic_id: 21116
forum_id: 3
forum: "Help & Support"
author: "Chunjied"
author_authority: "player"
posted: "2025-08-18T14:28:00Z"
last_post: "2025-08-19T08:36:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:41:17Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# THE DONATION REWARD MENU BUTTON IS GREY.

## Post 146768 by Chunjied — 2025-08-18T14:28:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146768#p146768 | page 1 | era: pre-1.18.1 -->

My computer runs Windows 7, so I cannot update the client via the latest launcher (TurtleWoW.exe); instead, I have to use the old launcher (TWPatcher.exe). When I finally log in to the game, everything works fine except the donation shop button—it is grey and unclickable. Typing /shop opens a blank donation tab. I have already deleted my WDB folder, but that did not help.

The donation reward button should appear red and be clickable, opening the donation shop window as normal.

Could you help me solve this problem?

## Post 146935 by Chunjied — 2025-08-19T07:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146935#p146935 | page 1 | era: pre-1.18.1 -->

Latest report: A plugin in one of the !libs is causing the issue, but I haven’t pinpointed which one yet.

## Post 146948 by Pepesmite (Turtle WoW Team) [STAFF] — 2025-08-19T08:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146948#p146948 | page 1 | era: pre-1.18.1 -->

> **Chunjied wrote: Mon Aug 18, 2025 2:28 pm**
> My computer runs Windows 7, so I cannot update the client via the latest launcher (TurtleWoW.exe); instead, I have to use the old launcher (TWPatcher.exe). When I finally log in to the game, everything works fine except the donation shop button—it is grey and unclickable. Typing /shop opens a blank donation tab. I have already deleted my WDB folder, but that did not help.
>
>  The donation reward button should appear red and be clickable, opening the donation shop window as normal.
>
>  Could you help me solve this problem?

Hello!

I can assume that the client has not been updated or some files have not been updated. Please try downloading the updated full client of the game from our website.

## Post 146955 by Chunjied — 2025-08-19T08:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=146955#p146955 | page 1 | era: pre-1.18.1 -->

> **Pepesmite wrote: Tue Aug 19, 2025 8:24 am**
> > **Chunjied wrote: Mon Aug 18, 2025 2:28 pm**
> > My computer runs Windows 7, so I cannot update the client via the latest launcher (TurtleWoW.exe); instead, I have to use the old launcher (TWPatcher.exe). When I finally log in to the game, everything works fine except the donation shop button—it is grey and unclickable. Typing /shop opens a blank donation tab. I have already deleted my WDB folder, but that did not help.
> >
> >  The donation reward button should appear red and be clickable, opening the donation shop window as normal.
> >
> >  Could you help me solve this problem?
>
>  Hello!
>
>  I can assume that the client has not been updated or some files have not been updated. Please try downloading the updated full client of the game from our website.

Thanks! I have tested again and found that the problem is caused by a conflict between the new version and the !libs addon. Disabling the !libs addon will fix this problem. Thanks again!

