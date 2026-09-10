---
title: "How to access shop/restore shop minimap button"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5493"
topic_id: 5493
forum_id: 3
forum: "Help & Support"
author: "Mrtweaks"
author_authority: "player"
posted: "2023-02-01T01:36:00Z"
last_post: "2023-06-23T10:59:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T09:11:46Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# How to access shop/restore shop minimap button

## Post 33667 by Mrtweaks — 2023-02-01T01:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=33667#p33667 | page 1 | era: pre-1.18.1 -->

Hi,

Since i've disabled the minimap shop button i can't figure it out how to access it so i can look at the goodies.  A little help would be nice   smiling_turtle_head

## Post 35214 by Rhowyn — 2023-02-19T08:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=35214#p35214 | page 1 | era: pre-1.18.1 -->

I too am having this issue

## Post 38255 by Misternice69 — 2023-03-19T20:33:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=38255#p38255 | page 1 | era: pre-1.18.1 -->

In the file Code: Select all

```
WTF/Account/<USERNAME>/SavedVariables.lua
```

you should see an entry called Code: Select all

```
TWS_HIDE_MINIMAP_BUTTON = 1
```

change that to Code: Select all

```
TWS_HIDE_MINIMAP_BUTTON = 0
```

and it should show up again.

## Post 51073 by Sexyfiasco — 2023-06-23T10:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51073#p51073 | page 1 | era: pre-1.18.1 -->

so similar issue but my bartender addon button is missing form around my mini map, FuBartender i believe is the file name? whats the fix to that lua file i need t restore that button please and thank you!

## Post 51080 by Pepesmite (Turtle WoW Team) [STAFF] — 2023-06-23T10:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=51080#p51080 | page 1 | era: pre-1.18.1 -->

Just type in chat /twshop showbutton

