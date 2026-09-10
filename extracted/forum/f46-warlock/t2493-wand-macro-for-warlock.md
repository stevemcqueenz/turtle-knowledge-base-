---
title: "Wand macro for warlock"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=2493"
topic_id: 2493
forum_id: 46
forum: "Warlock"
author: "Mcbeefcake"
author_authority: "player"
posted: "2022-01-08T23:13:00Z"
last_post: "2022-01-27T08:32:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:17:53Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Wand macro for warlock

## Post 15544 by Mcbeefcake — 2022-01-08T23:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15544#p15544 | page 1 | era: pre-1.18.1 -->

Hello,

Having trouble finding a wand macro i can add to other or make it spammable. I'm used to using !Shoot in wow classic.

## Post 15565 by Snigery (Barrens Chat Casualty) — 2022-01-09T03:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15565#p15565 | page 1 | era: pre-1.18.1 -->

[WoW + Macro + LUA](https://forum.turtlecraft.gg/viewtopic.php?f=18&t=2417)
Code: Select all

```
/script if (IsCurrentAction(1) or IsAutoRepeatAction(1)) then UseAction(1) end
```

The # 1 in there is the Action Slot ID of the ability you want to use.

## Post 15606 by Mcbeefcake — 2022-01-10T05:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=15606#p15606 | page 1 | era: pre-1.18.1 -->

ahhh that link has some deep reading. thank you, I feel like im missing some quality of life macros from wow classic so this should help

## Post 16394 by Layt — 2022-01-27T08:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=16394#p16394 | page 1 | era: pre-1.18.1 -->

If you using LazyScript addon do just:
Code: Select all

```
/ls do wand
```

Also if you using Qlique, you can add custom action
Code: Select all

```
lazyScript.SlashCommand("do wand")
```

and do wand by mouseover....

