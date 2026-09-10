---
title: "pfui macro"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22476"
topic_id: 22476
forum_id: 18
forum: "AddOns"
author: "Blysk990223"
author_authority: "player"
posted: "2025-10-19T12:43:00Z"
last_post: "2025-10-19T12:43:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:23:25Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# pfui macro

## Post 156183 by Blysk990223 — 2025-10-19T12:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156183#p156183 | page 1 | era: 1.18.1-announced-pre-release -->

Could someone modify this macro for me so it works? I want to use steady shot all the time, and have auto shot cast automatically in the window so the two skills don't conflict with each other?

#showtooltip Steady Shot
/run UIErrorsFrame:Hide()
/castsequence reset=1.34 Steady Shot, !Auto Shot
/run UIErrorsFrame:Clear(); UIErrorsFrame:Show()

