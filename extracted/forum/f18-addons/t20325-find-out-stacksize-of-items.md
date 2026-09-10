---
title: "find out stacksize of items"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20325"
topic_id: 20325
forum_id: 18
forum: "AddOns"
author: "Marukmethai"
author_authority: "player"
posted: "2025-07-16T18:26:00Z"
last_post: "2025-07-16T18:26:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:25:07Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# find out stacksize of items

## Post 139940 by Marukmethai — 2025-07-16T18:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139940#p139940 | page 1 | era: pre-1.18.1 -->

Is there a way to retrieve the maximum stacksize of items via the API? I tried using GetItemInfo, but I can't get it to return the stacksize. Maybe I'm just using it wrong, in which case I'd be happy if somebody told me what to look for.

Or is there another function or workaround without integrating a whole database of all items (as you need to do for prices)?

Just to clarify: I want my addon to know how many [Healing Herbs] fit into one bagslot (Healing Herb obviously just an example...).

Edit: nvm. doesn't seem possible on this server, so I used Shagu's ItemID database and parsed a blizzlike 1.12 vanilla server for those stacksizes. not ideal, but will probably do the trick.

