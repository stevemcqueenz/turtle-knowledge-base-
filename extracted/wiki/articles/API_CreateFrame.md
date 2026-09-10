---
title: "API CreateFrame"
url: "https://turtle-wow.fandom.com/wiki/API_CreateFrame"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T14:47:49Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CreateFrame

Creates a new UI frame.
 newFrame = CreateFrame("frameType", "frameName", parentFrame[, "inheritsFrame"]);

## Parameters
### Arguments
  ; frameType
   String - Type of the frame to be created (XML tag name): "Frame", "Button"... etc.
  ; frameName
   String - Name of the newly created frame. If nil, no frame name is assigned.
  ; parentFrame
   Frame - The frame object that will be used as the created Frame's parent (cannot be a string!)
  ; inheritsFrame
   String - Name of a (virtual) frame to inherit (the same as in XML)

### Returns
  ; newFrame
   Frame - Pointer to the newly created frame.

## Example
Result: displays the horde and alliance insignias in the middle of the screen.
<syntaxhighlight lang="lua">
 local f = CreateFrame("Frame",nil,UIParent)
 f:SetFrameStrata("BACKGROUND")
 f:SetWidth(128)  -- Set These to whatever height/width is needed 
 f:SetHeight(64) -- for your Texture
 
 local t = f:CreateTexture(nil,"BACKGROUND")
 t:SetTexture("Interface\\Glues\\CharacterCreate\\UI-CharacterCreate-Factions.blp")
 t:SetAllPoints(f)
 f.texture = t
 
 f:SetPoint("CENTER",0,0)
 f:Show()
</syntaxhighlight>

## Macro
Using Mind Flay repeatedly is a DPS loss because of the way the spell works, so you need this complicated macro to gain an extra tick of the spell<syntaxhighlight lang="lua">
/run local f=CnlSpam if not f then f=CreateFrame("Frame")local s,r="SPELLCAST_CHANNEL_ST",f.RegisterEvent r(f,s.."ART")r(f,s.."OP")f:SetScript("OnEvent",function()this.c=event~=s.."OP"end)CnlSpam=f end if not f.c then CastSpellByName("Mind Flay")end
</syntaxhighlight>

## Addon
From addon named pfDebug<syntaxhighlight lang="lua">
-- [ GUI Code ]( GUI Code )
local mainwidth = 500
local analyzer = CreateFrame("Frame", "pfDebugAnalyzer", UIParent)
pfDebug.CreateBackdrop(analyzer)
analyzer:SetPoint("CENTER", 0, 0)
analyzer:SetHeight(380)
analyzer:SetWidth(mainwidth)
analyzer:SetMovable(true)
analyzer:EnableMouse(true)
analyzer:SetClampedToScreen(true)
analyzer:SetScript("OnMouseDown",function() this:StartMoving() end)
analyzer:SetScript("OnMouseUp",function() this:StopMovingOrSizing() end)
analyzer:Hide()
analyzer:SetFrameStrata("FULLSCREEN_DIALOG")
analyzer:SetScript("OnUpdate", function()
  if not this.active then return end
  if ( this.tick or .5) > GetTime() then return else this.tick = GetTime() + .5 end
</syntaxhighlight>
