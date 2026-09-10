---
title: "API UIFrameFadeIn"
url: "https://turtle-wow.fandom.com/wiki/API_UIFrameFadeIn"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T12:51:59Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["FrameXML functions"]
---
# API UIFrameFadeIn

<syntaxhighlight lang="lua">
 UIFrameFadeIn(frame, timeToFade, startAlpha, endAlpha)
 UIFrameFadeOut(frame, timeToFade, startAlpha, endAlpha)
</syntaxhighlight>
timeToFade in seconds, alpha from 0 to 1.  Convenience functions to set up a given frame and have it faded in ou out by UIFrameFadeUpdate.

When the fade is finished...
<syntaxhighlight lang="lua">
 [frame].fadeInfo.finishedFunc(
   [frame].fadeInfo.finishedArg1, 
   [frame].fadeInfo.finishedArg2, 
   [frame].fadeInfo.finishedArg3, 
   [frame].fadeInfo.finishedArg4
 ) 
</syntaxhighlight>
...will be called, and then [frame].fadeInfo.finishedFunc is set to nil

## Addon
Example from addon named FishingBuddy<syntaxhighlight lang="lua">
local function ShowDraggerFrame()
   if ( not FishingWatchDrag:IsVisible() ) then
      FishingWatchFrame:Show();
      local width = FishingWatchFrame:GetWidth();
      local height = FishingWatchFrame:GetHeight();
      FishingWatchDrag:SetHeight(height);
      FishingWatchDrag:SetWidth(width);
      FishingWatchTab:SetText(FishingBuddy.NAME);
      PanelTemplates_TabResize(10, FishingWatchTab);
      FishingWatchDrag:Show();
      FishingWatchTab:Show();
      UIFrameFadeIn(FishingWatchDrag, WATCHDRAGGER_FADE_TIME, 0, 0.15);
      UIFrameFadeIn(FishingWatchTab, WATCHDRAGGER_FADE_TIME, 0, 1.0);
      GameTooltip_AddNewbieTip(FishingBuddy.NAME, 1.0, 1.0, 1.0,
			       FishingBuddy.WATCHERCLICKHELP, 1);
   end
end
</syntaxhighlight>
