---
title: "Removal of the cooldown on /who"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=10746"
topic_id: 10746
forum_id: 14
forum: "Suggestions"
author: "Zeldy"
author_authority: "player"
posted: "2023-10-10T22:37:00Z"
last_post: "2023-10-11T04:37:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T12:06:49Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Removal of the cooldown on /who

## Post 70073 by Zeldy (Barrens Chat Casualty) — 2023-10-10T22:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70073#p70073 | page 1 | era: pre-1.18.1 -->

Now that the main server is at a stable population again, I feel that the limit that was implemented on how many times a player can use /who or shift click on another player's name a minute is no longer necessary and should be reverted back to how it was originally.

*Last edited by Zeldy on Thu Oct 12, 2023 12:56 am, edited 1 time in total.*

## Post 70076 by Drubarrymooer (Grandmaster of Forum PvP) — 2023-10-10T22:45:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70076#p70076 | page 1 | era: pre-1.18.1 -->

100% agree.  Its annoying if you accidentally mispell or click the wrong name.

## Post 70132 by Xudo (Grandmaster of Forum PvP) — 2023-10-11T04:37:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=70132#p70132 | page 1 | era: pre-1.18.1 -->

Shift+click on the name in chat is the same "/who" query as "/who 20-40".
When you click name in chat, you expect only one result in return.

When who is on cooldown, it can return only first result, if there is a player with full match by name.
From server side it will replace loop over list of players with access to hashmap of players by name.
I believe it will be technically easier for server and in the same time useful for players.

