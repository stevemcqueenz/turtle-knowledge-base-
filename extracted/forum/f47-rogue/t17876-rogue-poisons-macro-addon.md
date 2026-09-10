---
title: "Rogue Poisons Macro/Addon?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17876"
topic_id: 17876
forum_id: 47
forum: "Rogue"
author: "RAGEAHOLIC"
author_authority: "player"
posted: "2025-03-06T02:22:00Z"
last_post: "2025-03-08T17:02:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T08:19:05Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Rogue Poisons Macro/Addon?

## Post 121837 by RAGEAHOLIC — 2025-03-06T02:22:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121837#p121837 | page 1 | era: pre-1.18.1 -->

Anyone out there have a good Rogue Poisons Macro, or Addon that allows you to add poisons to Main Hand or Off Hand quickly without opening your character screen?

I used one a while back called Poisoner that allowed you to left click a button to apply a poison to your MH, right click for OH, etc.

Even further back I had a macro that would allow poison applications based on modifiers and which button you clicked. I tried goofing around with this, but came up totally empty.
Code: Select all

```
#showtooltip
/cast [mod:ctrl,button:1] Wound Poison; [mod:ctrl,button:2] Wound Poison
/cast [mod:shift,button:1] Deadly Poison; [mod:shift,button:2] Deadly Poison
/cast [nomod,button:1] Instant Poison; [nomod,button:2] Instant Poison
/use [button:1] 16
/use [button:2] 17
```

The following works to select a poison, but I still need to click the weapons in my character sheet:
Code: Select all

```
#showtooltip
/use [mod:ctrl,button:1] Wound Poison; [mod:ctrl,button:2] Wound Poison; [mod:shift,button:1] Deadly Poison; [mod:shift,button:2] Deadly Poison; [button:1] Instant Poison; [button:2] Instant Poison
/use [button:1] 16
/use [button:2] 17
```

Any ideas?

## Post 121850 by basednoob (Patch Note Conspiracy Theorist) — 2025-03-06T07:01:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=121850#p121850 | page 1 | era: pre-1.18.1 -->

> **RAGEAHOLIC wrote: Thu Mar 06, 2025 2:22 am**
> Anyone out there have a good Rogue Poisons Macro, or Addon that allows you to add poisons to Main Hand or Off Hand quickly without opening your character screen?
>
>  I used one a while back called Poisoner that allowed you to left click a button to apply a poison to your MH, right click for OH, etc.
>
>  Even further back I had a macro that would allow poison applications based on modifiers and which button you clicked. I tried goofing around with this, but came up totally empty.
>  Code: Select all
>
> ```
> #showtooltip
> /cast [mod:ctrl,button:1] Wound Poison; [mod:ctrl,button:2] Wound Poison
> /cast [mod:shift,button:1] Deadly Poison; [mod:shift,button:2] Deadly Poison
> /cast [nomod,button:1] Instant Poison; [nomod,button:2] Instant Poison
> /use [button:1] 16
> /use [button:2] 17
> ```
>
>   The following works to select a poison, but I still need to click the weapons in my character sheet:
>  Code: Select all
>
> ```
> #showtooltip
> /use [mod:ctrl,button:1] Wound Poison; [mod:ctrl,button:2] Wound Poison; [mod:shift,button:1] Deadly Poison; [mod:shift,button:2] Deadly Poison; [button:1] Instant Poison; [button:2] Instant Poison
> /use [button:1] 16
> /use [button:2] 17
> ```
>
>   Any ideas?

<https://turtle-wow.fandom.com/wiki/Rogue_Poison_Macros>

## Post 122057 by RAGEAHOLIC — 2025-03-08T17:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122057#p122057 | page 1 | era: pre-1.18.1 -->

Thanks, I'll give them a shot!

