---
title: "DialogKey addon (or similar)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=4901"
topic_id: 4901
forum_id: 18
forum: "AddOns"
author: "Kaizod"
author_authority: "player"
posted: "2022-11-19T20:42:00Z"
last_post: "2023-10-30T03:35:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T10:30:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# DialogKey addon (or similar)

## Post 29522 by Kaizod — 2022-11-19T20:42:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=29522#p29522 | page 1 | era: pre-1.18.1 -->

Does anyone know if there's a vanilla port for the DialogKey addon?

<https://www.curseforge.com/wow/addons/dialogkey>

It lets you use spacebar to select the default option in dialog boxes, etc. If no one has this, maybe a knowledgeable programmer could write it? It's super convenient.

Or maybe the devs could add it as a feature.

## Post 74722 by Benbass — 2023-10-30T03:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=74722#p74722 | page 1 | era: pre-1.18.1 -->

Sadly, I am not able to find a working DialogKey version on vanilla.

I am using a macro to auto-accept dialog boxes but it doesn't work if there are more than 1 option.

/run SelectGossipAvailableQuest(1)
/run AcceptQuest()
/run SelectGossipActiveQuest(1)
/run CompleteQuest()
/run if GetNumQuestChoices() == 0 then GetQuestReward() end

