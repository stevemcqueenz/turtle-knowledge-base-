---
title: "API GetText"
url: "https://turtle-wow.fandom.com/wiki/API_GetText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T13:40:25Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetText

strResult = GetText(sIdentifier, nNumber);
GetText is used to localize some game text like PvP-ranks or spell text.

## Parameters
### Arguments
  ; sIdentifier
   String - Identifier for the text to localize i.e.: PVP_RANK_5_1
  ; nNumber
   Number - Number that is used in the text (for format-strings), can be nil. GetText does not seem to use this.

### Returns
  ;: strResult:String - The localized text corresponding to sIdentifier.

## Notes
This is used for all the PvP-ranks titles that are displayed above characters (and some other stuff). So if you i.e. replace this with a function, that always returns "stupid", all players with PvP-ranks will run around with a name tag like "stupid xyz". This is used rarely and I am not sure what kind of ID-keys you can used.

## Macros
List all the buff names of your target<syntaxhighlight lang="lua">
/run g=GameTooltip g:SetOwner(WorldFrame) t=GameTooltipTextLeft1 for i=1,32 do g:SetUnitBuff("target",i) if t:GetText() then DEFAULT_CHAT_FRAME:AddMessage(i.."="..t:GetText(),0.4,1,1) g:ClearLines() end end g:Hide()
</syntaxhighlight>List all the buff descriptions of your target<syntaxhighlight lang="lua">
/run g=GameTooltip g:SetOwner(WorldFrame) t=GameTooltipTextLeft2 for i=1,32 do g:SetUnitBuff("target",i) if t:GetText() then DEFAULT_CHAT_FRAME:AddMessage(i.."="..t:GetText(),0.4,1,1) g:ClearLines() end end g:Hide()
</syntaxhighlight>List all player buff names<syntaxhighlight lang="lua">
/run g=GameTooltip g:SetOwner(WorldFrame) t=GameTooltipTextLeft1 for i=1,32 do g:SetPlayerBuff(i) if t:GetText() then DEFAULT_CHAT_FRAME:AddMessage(i.."="..t:GetText(),0.4,1,1) end end
</syntaxhighlight>List all player buff descriptions<syntaxhighlight lang="lua">
/run g=GameTooltip g:SetOwner(WorldFrame) t=GameTooltipTextLeft2 for i=1,32 do g:SetPlayerBuff(i) if t:GetText() then DEFAULT_CHAT_FRAME:AddMessage(i.."="..t:GetText(),0.4,1,1) end end
</syntaxhighlight>

## Addon
Example from addon named Bongos<syntaxhighlight lang="lua">
local function DragButton_OnEnter()
	if this:GetScript("OnClick") then
		GameTooltip:SetOwner(this, "ANCHOR_LEFT")
		if not tonumber(this:GetText()) then
			GameTooltip:SetText(this:GetText() .. " bar", 1, 1, 1)
		else
			GameTooltip:SetText("actionbar " .. this:GetText(), 1, 1, 1)
		end
		GameTooltip:AddLine(BONGOS_SHOW_CONFIG)
		GameTooltip:Show()
	end
end
</syntaxhighlight>
