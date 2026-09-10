---
title: "Deleted character showed on bagnon (addon)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20121"
topic_id: 20121
forum_id: 18
forum: "AddOns"
author: "Praxis91"
author_authority: "player"
posted: "2025-07-01T23:20:00Z"
last_post: "2025-07-03T03:38:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T10:25:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Deleted character showed on bagnon (addon)

## Post 137783 by Praxis91 — 2025-07-01T23:20:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137783#p137783 | page 1 | era: pre-1.18.1 -->

Hi all, i would like to know if there is any way to get rid of the deleted character name that are showed in bagnon even after deleting the whole folder of the deleted character. It is just frustrating. I've alredy tried to uninstall, deleting, and reinstall it several times, but nothing worked. I had to delete the bagnon forever extension (that it the one that show other characters inventory and bank from distance), without reinstalling it.

## Post 137909 by Shark0175 — 2025-07-03T02:12:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137909#p137909 | page 1 | era: pre-1.18.1 -->

I totally get how frustrating that is—Bagnon can be stubborn with cached character data.[Retro Bowl](https://retro-bowl25.org/)
I had a similar issue and had to dig into the saved variables manually to clear it out. Have you tried checking the SavedVariables folder for lingering Bagnon files tied to the old character? Sometimes that works better than just reinstalling. Hope you get it sorted!

## Post 137915 by Akalix (Turtle WoW Team) [STAFF] — 2025-07-03T03:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=137915#p137915 | page 1 | era: pre-1.18.1 -->

You will want to go into the following folder: Code: Select all

```
TurtleWoW\WTF\Account\YOUR ACCOUNT NAME\YOUR REALM
```

and delete the folder named after the deleted character. This will delete all their saved addon data.

