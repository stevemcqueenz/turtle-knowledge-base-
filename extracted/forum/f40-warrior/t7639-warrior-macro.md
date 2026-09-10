---
title: "Warrior Macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=7639"
topic_id: 7639
forum_id: 40
forum: "Warrior"
author: "Lukeypookey"
author_authority: "player"
posted: "2023-06-05T16:18:00Z"
last_post: "2023-10-23T00:52:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T07:54:20Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Warrior Macro

## Post 48923 by Lukeypookey — 2023-06-05T16:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48923#p48923 | page 1 | era: pre-1.18.1 -->

Hello I was wandering if anyone has a macro to swap between weapons and stances.
So it can help me swap to defensive stance and kick faster, for example.
Thanks,

## Post 48994 by Kremmen (Barrens Chat Casualty) — 2023-06-05T22:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=48994#p48994 | page 1 | era: pre-1.18.1 -->

For starters, install the addon Roid Macros. It'll make creating macros much easier.
A Shield Bash macro would go like: Code: Select all

```
#showtooltip Shield Bash
/equip [your shield name here]
/equip [your one-hander name here]
/cast Defensive Stance
/cast Shield Bash
/startattack
```

Then you can create a weapon switch macro to swap between your sword & board or your two-hander, like: Code: Select all

```
/equip [your shield name here]
/equip [your one-hander name here]
/equip [your two-hander name here]
```

This will switch you to your sword & board if you have your two-hander equipped and vice versa.
ShaguTweaks has a function that will automatically switch stances for you if you press an ability that requires you to be in particular stance to perform it, so you can remove "/cast [stance name]" from your macros. There's even a standalone version of this feature so if you don't want to use ShaguTweaks as a whole you can just use that.

## Post 49035 by Lukeypookey — 2023-06-06T11:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=49035#p49035 | page 1 | era: pre-1.18.1 -->

Worked Like a Charm. You the man

## Post 72911 by Snnail — 2023-10-23T00:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=72911#p72911 | page 1 | era: pre-1.18.1 -->

does Roid Macros have an interface?

