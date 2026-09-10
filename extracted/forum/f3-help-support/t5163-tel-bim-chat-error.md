---
title: "TelÁbim chat Error"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=5163"
topic_id: 5163
forum_id: 3
forum: "Help & Support"
author: "Kohiras"
author_authority: "player"
posted: "2022-12-22T04:27:00Z"
last_post: "2023-01-20T16:10:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T09:18:30Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# TelÁbim chat Error

## Post 31367 by Kohiras — 2022-12-22T04:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31367#p31367 | page 1 | era: pre-1.18.1 -->

when im on TelÁbim i have a lot of spem error on the chat:

error: babble-Zone-2.2: Reverse translation for ''TelÁbim'' does not exist

is it your work? or one of my addons

## Post 31370 by Redmagejoe (Grandmaster of Forum PvP) — 2022-12-22T05:17:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=31370#p31370 | page 1 | era: pre-1.18.1 -->

That's Cartographer's built-in zone name translation function that tries to translate the zones to different languages. Obviously those don't exist in Cartographer by default. The only solutions would be to either implement these reverse translations manually, or prevent the reverse translation function from being called at all.

## Post 32573 by Pasis — 2023-01-14T20:46:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32573#p32573 | page 1 | era: pre-1.18.1 -->

Hi, but how to prevent the reverse translation function being called?

## Post 32815 by Redmagejoe (Grandmaster of Forum PvP) — 2023-01-20T16:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=32815#p32815 | page 1 | era: pre-1.18.1 -->

You can't without rewriting the addon itself, but you can suppress the chat spam through Improved Error Frame addon.

