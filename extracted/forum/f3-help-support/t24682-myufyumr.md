---
title: "myufyumr"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=24682"
topic_id: 24682
forum_id: 3
forum: "Help & Support"
author: "Yavamar1"
author_authority: "player"
posted: "2026-04-02T22:29:00Z"
last_post: "2026-04-03T00:04:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:36:07Z"
era: "post-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# myufyumr

## Post 173809 by Yavamar1 (Barrens Chat Casualty) — 2026-04-02T22:29:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173809#p173809 | page 1 | era: post-1.18.1 -->

fasfqwrfa

*Last edited by Yavamar1 on Sat Apr 18, 2026 6:40 pm, edited 1 time in total.*

## Post 173824 by Elesion (Patch Note Conspiracy Theorist) — 2026-04-03T00:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=173824#p173824 | page 1 | era: post-1.18.1 -->

All UI elements are built out of frames. The root cause of your problem is a frame registering all mouse buttons for it's OnClick behavior though something like Code: Select all

```
frame:RegisterForClicks("LeftButtonUp", "RightButtonUp", "MiddleButtonUp", "Button4Up", "Button5Up")
```

That can be a deliberate move. Some raid frames contain Click Casting functionalities, so they deliberately capture all mouse buttons. Sometimes you can disable it in the raid frames' settings, other times not.

Or it can be accidental / overly broad. A lot of more complicated addons rely on libraries to supply some functionalities. And since libraries don't know what the final product will need, they often register every button, just so it's available later. CandyBar is notorious for that. Who hasn't had their raid chat spammed by someone mashing mouse buttons while hovering a BigWigs bar   turtle_tongue_head

So you can look around the settings of your addons if they offer a way to release those buttons. Or you can dig deeper and start modifying the files yourself to remove Button4 and Button5.

