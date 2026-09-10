---
title: "Widget Anchor Initialization"
url: "https://turtle-wow.fandom.com/wiki/Widget_Anchor_Initialization"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:55:44Z"
fetched: "2026-09-10T07:40:00Z"
is_turtle_content: false
patch: null
categories: ["Widget"]
---
# Widget Anchor Initialization

The Widget Anchors go through different stages of initialization:

## VARIABLES_LOADED
At the time your frame recieves this event, its anchors are initialized to the values in the xml file.

## PLAYER_ENTERING_WORLD
When handling this event for a frame which parent is UIParent, World of Warcraft deletes all anchors and loads the layout data from layout-cache.txt. If the frame layout data have not been saved in the cache (the user has never moved the frame with the mouse), [Frame:GetLeft()](API Frame GetLeft), [Frame:GetBottom()](API Frame GetBottom), [Frame:GetRight()](API Frame GetRight) and [Frame:GetTop()](API Frame GetTop) return nil.
