---
title: "removed esc"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7671"
topic_id: 7671
forum_id: 3
forum: "Help & Support"
author: "Jjhunjez"
author_authority: "player"
posted: "2023-06-07T03:03:00Z"
last_post: "2023-12-20T16:43:00Z"
post_count: 7
pages: 1
fetched: "2026-09-10T08:56:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# removed esc

## Post 49143 by Jjhunjez — 2023-06-07T03:03:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49143#p49143 | page 1 | era: pre-1.18.1 -->

I removed the esc I can't go into the settings, what should I do?  scared_turtle_head

## Post 49156 by Reptilewow (Barrens Chat Casualty) — 2023-06-07T05:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49156#p49156 | page 1 | era: pre-1.18.1 -->

If you delete the wtf folder, your keybinds should be reset

If you don't figure out a smarter way, at least that should work

## Post 49158 by Reptilewow (Barrens Chat Casualty) — 2023-06-07T06:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49158#p49158 | page 1 | era: pre-1.18.1 -->

You might be able to just use one of these:

/script ToggleGameMenu();

/script ToggleGameMenu();
StaticPopup1:Hide()

You can paste them into a macro with /m if you want. Don't know why you would, but give it a shot

## Post 49162 by Jammyxx (Patch Note Conspiracy Theorist) — 2023-06-07T06:47:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49162#p49162 | page 1 | era: pre-1.18.1 -->

There's a button at the bottom in standard UI that opens the game menu.

## Post 49165 by Reptilewow (Barrens Chat Casualty) — 2023-06-07T08:09:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49165#p49165 | page 1 | era: pre-1.18.1 -->

> **Jammyxx wrote: Wed Jun 07, 2023 6:47 am**
> There's a button at the bottom in standard UI that opens the game menu.

Oh. That sounds a tiny bit easier.

## Post 49166 by Ibux (Patch Note Conspiracy Theorist) — 2023-06-07T08:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49166#p49166 | page 1 | era: pre-1.18.1 -->

Keybind Esc to toggle the main menu

/run SetBinding("ESCAPE","TOGGLEGAMEMENU")SaveBindings(1)

[https://github.com/Meridaw/Vanilla-Macr ... 20menu.txt](https://github.com/Meridaw/Vanilla-Macros/blob/master/User%20Interface/Main%20menu.txt)

## Post 81981 by Grahara — 2023-12-20T16:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=81981#p81981 | page 1 | era: pre-1.18.1 -->

> **Ibux wrote: Wed Jun 07, 2023 8:11 am**
> Keybind Esc to toggle the main menu
>
>  /run SetBinding("ESCAPE","TOGGLEGAMEMENU")SaveBindings(1)
>
>
>  [https://github.com/Meridaw/Vanilla-Macr ... 20menu.txt](https://github.com/Meridaw/Vanilla-Macros/blob/master/User%20Interface/Main%20menu.txt)

Worked like a charm , thank you !

