---
title: "[Bug?] SendWho results cross-faction"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=105"
topic_id: 105
forum_id: 3
forum: "Help & Support"
author: "Roadblock"
author_authority: "player"
posted: "2018-10-08T16:21:00Z"
last_post: "2018-10-09T02:35:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T09:33:25Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# [Bug?] SendWho results cross-faction

## Post 591 by Roadblock — 2018-10-08T16:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=591#p591 | page 1 | era: pre-1.18.1 -->

This is probably a conscious decision but it makes no sense unless it's in your plans to allow cross-faction grouping.

It severely diminishes the usefulness of /who.

For example assume you are looking for players in the level range for Deadmines as an ally. Code: Select all

```
/who 15-22
```

will return both faction characters despite you can't group with horde or friend them (or ignore them etc)

You have to instead qualify all who queries with Code: Select all

```
/who r-human r-dwarf r-gnome r-night 15-22
```

to achieve the same result as a default /who operation which is ridiculous.

## Post 601 by Torta (Turtle WoW Team) [STAFF] — 2018-10-09T02:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=601#p601 | page 1 | era: pre-1.18.1 -->

Greetings!

/who will show only players of your faction after next server restart.

