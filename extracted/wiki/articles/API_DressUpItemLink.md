---
title: "API DressUpItemLink"
url: "https://turtle-wow.fandom.com/wiki/API_DressUpItemLink"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T10:32:34Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API DressUpItemLink

Will show the DressingRoom UI with the given item equipped.

## Addon
Example from addon named CharactersViewer<syntaxhighlight lang="lua">
   elseif ( this:GetID() >= 100 and this:GetID() < 600) then
      -- Inventory item link
      local slot = math.mod(this:GetID(), 100);
      local bag  = (this:GetID() - slot - 100) / 100;
      link = CharactersViewerProfile[GetCVar("realmName")][CharactersViewer.index]["Bag"][bag][slot].L;
     elseif ( this:GetID() >= 600 and this:GetID() < 1200) then
      -- Inventory item link
      local slot = math.mod(this:GetID(), 100);
      local bag  = (this:GetID() - slot - 100) / 100;
      link = CharactersViewerProfile[GetCVar("realmName")][CharactersViewer.index]["Bank"][bag][slot].L;
   end
   link = CharactersViewer.library.MakeLink(link);
   if (IsShiftKeyDown() and ChatFrameEditBox:IsVisible() and link and arg1 == "LeftButton") then
      ChatFrameEditBox:Insert(link);
   end
	if ( arg1 == "LeftButton" and IsControlKeyDown() ) then
		DressUpItemLink(link);
	end
</syntaxhighlight>Example from addon named ElvUI<syntaxhighlight lang="lua">
local function LootClick(frame)
	if IsControlKeyDown() then
		DressUpItemLink(frame.link)
	elseif IsShiftKeyDown() then
		ChatEdit_InsertLink(frame.link)
	end
end
</syntaxhighlight>Example from addon named AtlasLoot<syntaxhighlight lang="lua">
--------------------------------------------------------------------------------
-- Item OnClick
-- Called when a loot item is clicked on
--------------------------------------------------------------------------------
function AtlasLootItem_OnClick()
	local color = strsub(getglobal("AtlasLootItem_"..this:GetID().."_Name"):GetText(), 1, 10);
	local id = this:GetID();
	local name = strsub(getglobal("AtlasLootItem_"..this:GetID().."_Name"):GetText(), 11);
	local iteminfo = GetItemInfo(this.itemID);
    --If shift-clicked, link in the chat window
	if(ChatFrameEditBox:IsVisible() and IsShiftKeyDown() and iteminfo and (AtlasLootOptions.SafeLinks or AtlasLootOptions.AllLinks)) then
    	ChatFrameEditBox:Insert(color.."|Hitem:"..this.itemID..":0:0:0|h["..name.."]|h|r");
	elseif(ChatFrameEditBox:IsVisible() and IsShiftKeyDown() and AtlasLootOptions.AllLinks) then
		ChatFrameEditBox:Insert(color.."|Hitem:"..this.itemID..":0:0:0|h["..name.."]|h|r");
    elseif(ChatFrameEditBox:IsVisible()) then
		ChatFrameEditBox:Insert(name);
    --If control-clicked, use the dressing room
    elseif(IsControlKeyDown() and iteminfo) then
        DressUpItemLink(this.itemID);
	end
end
</syntaxhighlight>
