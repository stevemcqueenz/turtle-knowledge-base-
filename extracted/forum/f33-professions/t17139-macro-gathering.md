---
title: "Macro Gathering"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=17139"
topic_id: 17139
forum_id: 33
forum: "Professions"
author: "Evandis"
author_authority: "player"
posted: "2025-01-16T13:54:00Z"
last_post: "2025-03-30T10:56:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:26:24Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macro Gathering

## Post 116983 by Evandis — 2025-01-16T13:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=116983#p116983 | page 1 | era: pre-1.18.1 -->

Hey guys!

I have a question:
On this client is there a possibility to make a sequence macro for 2 gathering professions (mining/herb) which switches automatically after few seconds between finding herbs/minerals?
Thank you very much!

## Post 124433 by Amnesiahaze — 2025-03-30T10:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=124433#p124433 | page 1 | era: pre-1.18.1 -->

/script if (GetTrackingTexture()=="Interface\\Icons\\Spell_Nature_Earthquake") then CastSpellByName("Find Herbs") else CastSpellByName("Find Minerals"); end

found this, maybe it will work, if not just find an addon that allows you to use /castsequence (CleveRoidMacros)

