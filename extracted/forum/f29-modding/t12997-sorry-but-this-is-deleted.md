---
title: "Sorry but this is deleted."
url: "https://forum.turtlecraft.gg/viewtopic.php?t=12997"
topic_id: 12997
forum_id: 29
forum: "Modding"
author: "Konakamasaru"
author_authority: "player"
posted: "2024-02-05T15:48:00Z"
last_post: "2025-10-22T01:12:00Z"
post_count: 15
pages: 1
fetched: "2026-09-10T10:38:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Sorry but this is deleted.

## Post 87054 by Konakamasaru — 2024-02-05T15:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87054#p87054 | page 1 | era: pre-1.18.1 -->

Sorry but this is deleted.

*Last edited by Konakamasaru on Sat Aug 30, 2025 6:02 pm, edited 1 time in total.*

## Post 108209 by Akalix (Turtle WoW Team) [STAFF] — 2024-11-16T23:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108209#p108209 | page 1 | era: pre-1.18.1 -->

Fantastic fix.

## Post 108250 by Rygel — 2024-11-17T06:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=108250#p108250 | page 1 | era: pre-1.18.1 -->

How do you run this along side vanillafixes d3d9.dll for vulkan support?

## Post 113659 by Athei — 2024-12-20T22:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=113659#p113659 | page 1 | era: pre-1.18.1 -->

Wow great work. Was looking for something like this for a long time. Was running my screen in a super low resolution just to be able to see my curser.

Any chance on upstreaming your features?

## Post 114573 by Konakamasaru — 2024-12-28T05:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=114573#p114573 | page 1 | era: pre-1.18.1 -->

> **Athei wrote: Fri Dec 20, 2024 10:47 pm**
> Any chance on upstreaming your features?

Upstream DXVK more focus on "originally" represent the game. The author think it would be better to let OS do the scaling thing. I think he did have a point so currently I would keep it in a separated repository.

## Post 116052 by Alexgreat — 2025-01-10T00:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116052#p116052 | page 1 | era: pre-1.18.1 -->

Runs perfect for me. Thanks

## Post 118701 by Yourik5 — 2025-02-02T09:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118701#p118701 | page 1 | era: pre-1.18.1 -->

I feel like I'm missing a crucial step here.  My cursor got smaller with this "fix".  I came here to see if I was missing something in the instructions on github, but this seems even more vague.....  Github's instructions indicate a x2/x3/x4 value that I'm not sure where you need to go to change it....  any chance someone could elaborate on this "fix".

## Post 118739 by Konakamasaru — 2025-02-02T16:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118739#p118739 | page 1 | era: pre-1.18.1 -->

> **Yourik5 wrote: Sun Feb 02, 2025 9:40 am**
> I feel like I'm missing a crucial step here.  My cursor got smaller with this "fix".  I came here to see if I was missing something in the instructions on github, but this seems even more vague.....  Github's instructions indicate a x2/x3/x4 value that I'm not sure where you need to go to change it....  any chance someone could elaborate on this "fix".

- Be sure you have Hardware Cursor enabled in the game's Video Options

- Add a line to dxvk.conf: d3d9.enlargeHardwareCursor = 4

## Post 118762 by Yourik5 — 2025-02-02T21:55:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118762#p118762 | page 1 | era: pre-1.18.1 -->

> **Konakamasaru wrote: Sun Feb 02, 2025 4:39 pm**
> > **Yourik5 wrote: Sun Feb 02, 2025 9:40 am**
> > I feel like I'm missing a crucial step here.  My cursor got smaller with this "fix".  I came here to see if I was missing something in the instructions on github, but this seems even more vague.....  Github's instructions indicate a x2/x3/x4 value that I'm not sure where you need to go to change it....  any chance someone could elaborate on this "fix".
>
>
> - Be sure you have Hardware Cursor enabled in the game's Video Options
>
> - Add a line to dxvk.conf: d3d9.enlargeHardwareCursor = 4

read all that.  I'm not a pro at editing dxvk.conf.... where do I input this line?  I opened it and it is NOT straight forward......

## Post 118788 by Konakamasaru — 2025-02-03T06:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=118788#p118788 | page 1 | era: pre-1.18.1 -->

> **Yourik5 wrote: Sun Feb 02, 2025 9:55 pm**
> read all that.  I'm not a pro at editing dxvk.conf.... where do I input this line?  I opened it and it is NOT straight forward......

Put it at top or bottom of the file.

## Post 131005 by Vason1082 — 2025-05-14T11:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131005#p131005 | page 1 | era: pre-1.18.1 -->

Hi friend, the Following upstream v2.6.1 e5d0d10 I downloaded from <https://github.com/allfoxwy/dxvk/releases> cannot start Turtlewow properly, but the Following upstream v2.6 can start Turtlewow normally.

## Post 131229 by Roterrabe — 2025-05-15T14:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=131229#p131229 | page 1 | era: pre-1.18.1 -->

> **Vason1082 wrote: Wed May 14, 2025 11:37 am**
> Hi friend, the Following upstream v2.6.1 e5d0d10 I downloaded from <https://github.com/allfoxwy/dxvk/releases> cannot start Turtlewow properly, but the Following upstream v2.6 can start Turtlewow normally.

works fine for me on win11 + vanilla fixes, i have set it to x2 mouse cursor. x4 and x3 is tooo big :P

thanks !

## Post 154567 by Turney — 2025-10-06T06:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=154567#p154567 | page 1 | era: 1.18.1-announced-pre-release -->

The git is down sadly...

Are there any alternate download sources, or can anyone provide the latest file?

## Post 156537 by Dracarusggotham (Grandmaster of Forum PvP) — 2025-10-22T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156537#p156537 | page 1 | era: 1.18.1-announced-pre-release -->

> **Turney wrote: Mon Oct 06, 2025 6:46 am**
> The git is down sadly...
>
>  Are there any alternate download sources, or can anyone provide the latest file?

What this was?

## Post 156548 by Catyngla (Barrens Chat Casualty) — 2025-10-22T01:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156548#p156548 | page 1 | era: 1.18.1-announced-pre-release -->

Dxvk mod by the look of it

