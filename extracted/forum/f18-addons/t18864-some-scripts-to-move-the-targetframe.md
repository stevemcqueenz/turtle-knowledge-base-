---
title: "Some scripts to move the TargetFrame"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18864"
topic_id: 18864
forum_id: 18
forum: "AddOns"
author: "Roldahn"
author_authority: "player"
posted: "2025-04-24T20:10:00Z"
last_post: "2025-04-24T20:10:00Z"
post_count: 1
pages: 1
fetched: "2026-09-10T10:26:08Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Some scripts to move the TargetFrame

## Post 128362 by Roldahn — 2025-04-24T20:10:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128362#p128362 | page 1 | era: pre-1.18.1 -->

I had this problem that you can only move the PlayerFrame, so I started looking for code to move the TargetFrame and put both in a more comfortable position, I share it with you in case anyone needs it.

 1.Command to move the TargetFrame:

/script TargetFrame:SetMovable(1); TargetFrame:RegisterForDrag("LeftButton"); TargetFrame:SetScript("OnDragStart", function() TargetFrame:StartMoving() end); TargetFrame:SetScript("OnDragStop", function() TargetFrame:StopMovingOrSizing() end)

Run the command once.
Now you can drag the TargetFrame with the click.

 2.Command to save the position (persistent after /reload):

/script TargetFrame.ignoreFramePositionManager = true

After running the first command, move to the Target Frame, and run the second comannd, run /reload.
It should stay where you put it even after restarting the client.

PD: If the TargetFrame disappears or bugs just run:

/script TargetFrame:ClearAllPoints(); TargetFrame:SetPoint("TOPLEFT", UIParent, "TOPLEFT", 250, -10); TargetFrame:Show()

And it will return to the default position.

