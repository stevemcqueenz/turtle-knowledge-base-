---
title: "Left/Right Mouse Button Macro?"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18016"
topic_id: 18016
forum_id: 4
forum: "General"
author: "Thedeegee"
author_authority: "player"
posted: "2025-03-16T09:30:00Z"
last_post: "2025-03-26T08:34:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:46:27Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Left/Right Mouse Button Macro?

## Post 122684 by Thedeegee — 2025-03-16T09:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=122684#p122684 | page 1 | era: pre-1.18.1 -->

Is it possible to have something like this in Turtle WoW?
Code: Select all

```
/cast [button:1] Shadow Bolt
/cast [button:2] Drain Soul
```

I used this format a lot in retail years ago because i'm a mouse click player.

## Post 123779 by Thedeegee — 2025-03-25T17:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123779#p123779 | page 1 | era: pre-1.18.1 -->

Well, from what i've gathered so far this is not possible.

 *sad face*

## Post 123824 by ChecksumNomad — 2025-03-25T20:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123824#p123824 | page 1 | era: pre-1.18.1 -->

Turtle WoW uses the vanilla client, so left/right mouse button macros like that don’t work the same way as in retail. You could try using mouseover or modifier macros instead, but full mouse button conditionals aren’t supported.

## Post 123878 by Wolf of Rage (Patch Note Conspiracy Theorist) — 2025-03-26T08:34:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=123878#p123878 | page 1 | era: pre-1.18.1 -->

Modifier and mouseover both work well, but if you're not using a macro addon to utilize a more sophisticated API, you might be hard-pressed by the 255 character limit when instead making LUA script equivalents of that -- even with aliases and removing unnecessary punctuation and spacebar space.

Speaking from experience; even my most complex macros off the default v1.12.1 API are neither as flexible nor as sophisticated as what I could make on the WotLK client and beyond that.

