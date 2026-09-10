---
title: "API CloseAuctionHouse"
url: "https://turtle-wow.fandom.com/wiki/API_CloseAuctionHouse"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:31:24Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CloseAuctionHouse

Will close the AuctionFrame if opened.
 CloseAuctionHouse();
----

  - *Arguments***

   *none*

----

  - *Returns***

  ; nil

----

  - *Example***

 CloseAuctionHouse();

  - *Result***

----

  - *Description***

   Will close the AuctionFrame if opened.

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
        frame:SetPoint('LEFT', 100, 0)
        frame:SetToplevel(true)
        frame:SetMovable(true)
        frame:EnableMouse(true)
        frame:SetClampedToScreen(true)
        frame:CreateTitleRegion():SetAllPoints()
        frame:SetScript('OnShow', function() PlaySound('AuctionWindowOpen') end)
        frame:SetScript('OnHide', function() PlaySound('AuctionWindowClose'); CloseAuctionHouse() end)
        frame.content = CreateFrame('Frame', nil, frame)
        frame.content:SetPoint('TOPLEFT', 4, -80)
        frame.content:SetPoint('BOTTOMRIGHT', -4, 35)
        frame:Hide()
        M.frame = frame
    end
</syntaxhighlight>
