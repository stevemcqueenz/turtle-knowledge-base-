---
title: "Trinket macro one button"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10178"
topic_id: 10178
forum_id: 4
forum: "General"
author: "Chyk"
author_authority: "player"
posted: "2023-09-23T10:50:00Z"
last_post: "2023-09-28T03:13:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T10:00:55Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Trinket macro one button

## Post 66493 by Chyk — 2023-09-23T10:50:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66493#p66493 | page 1 | era: pre-1.18.1 -->

Sup, guys.

I want to macro trinket use (no GCD) with an ability.
This question has been asked a million times and I've tried everything.

Tried /use /cast, tried /run, /script, looked through all information from this forum, github and other places.

I can't get this macro to work with ONE button (it's working okay if I'm smashing button two times in a row).

So I've got two questions:
 1) Has anyone able to build a macro for ONE button press only?
 2) If it's a server technical issue, can I automate double button press with something like AutoHotKey? Or is it bannable?

Thanks all.

## Post 66554 by Phil29 — 2023-09-23T16:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66554#p66554 | page 1 | era: pre-1.18.1 -->

I use this: Code: Select all

```
/script UseInventoryItem(14)
/cast Shadow Bolt
```

## Post 66559 by Chyk — 2023-09-23T16:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66559#p66559 | page 1 | era: pre-1.18.1 -->

> **Phil29 wrote: Sat Sep 23, 2023 4:14 pm**
> I use this: Code: Select all
>
> ```
> /script UseInventoryItem(14)
> /cast Shadow Bolt
> ```

I've tried this one too and half of the time 1 button is enough and half the time I need to press 2 buttons.
Do you have any macro extending addons? I'm using Roid Macros

## Post 66560 by Phil29 — 2023-09-23T16:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=66560#p66560 | page 1 | era: pre-1.18.1 -->

No, I don't use an addon for macros. This macro worked very well with the ubrs trinket but it does seems to be randomish since I upgraded it to the trinket from ZG.

## Post 67291 by Piguwaile — 2023-09-28T03:13:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=67291#p67291 | page 1 | era: pre-1.18.1 -->

The client limits one click/press to trigger one spell/item

