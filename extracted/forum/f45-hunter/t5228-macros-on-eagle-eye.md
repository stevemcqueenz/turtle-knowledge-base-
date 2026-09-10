---
title: "Macros on Eagle Eye"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5228"
topic_id: 5228
forum_id: 45
forum: "Hunter"
author: "Xaradrik"
author_authority: "player"
posted: "2022-12-29T17:37:00Z"
last_post: "2022-12-30T08:11:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:15:07Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macros on Eagle Eye

## Post 31775 by Xaradrik — 2022-12-29T17:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31775#p31775 | page 1 | era: pre-1.18.1 -->

There is a macros for a hunter that should allow you to cast an eagle eye from a viewing position.

/cast !Eagle Eye

But on this server, for some reason, it cannot be written in its usual form. Has anyone found an alternative method for writing this macros?

## Post 31776 by Ibux (Patch Note Conspiracy Theorist) — 2022-12-29T18:02:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31776#p31776 | page 1 | era: pre-1.18.1 -->

Im not a hunter. but have you tried this? Code: Select all

```
/run if not SpellIsTargeting() and not CastingBarFrame.channeling then CastSpellByName("Eagle Eye")end
```

## Post 31777 by Xaradrik — 2022-12-29T18:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31777#p31777 | page 1 | era: pre-1.18.1 -->

Tried. still does not work as in the above macros.  smiling_turtle

## Post 31802 by Shamma (Bug Report Enthusiast) — 2022-12-30T08:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31802#p31802 | page 1 | era: pre-1.18.1 -->

> **Xaradrik wrote: Thu Dec 29, 2022 5:37 pm**
> There is a macros for a hunter that should allow you to cast an eagle eye from a viewing position.
>
>  /cast !Eagle Eye
>
>  But on this server, for some reason, it cannot be written in its usual form. Has anyone found an alternative method for writing this macros?

Use Roid-Macros to enable this syntax

