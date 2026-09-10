---
title: "API DressUpItem"
url: "https://turtle-wow.fandom.com/wiki/API_DressUpItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T10:27:34Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API DressUpItem

Will show the DressingRoom UI with the given item ID equipped.

## Addon
Example from addon named FishingBuddy<syntaxhighlight lang="lua">
local function DressUpItem(model, thing)
   if ( not model or not thing or thing == "" ) then
      return;
   end
   local item = gsub(thing, "(%d+).*", "%1", 1);
   model:TryOn(item);
end
</syntaxhighlight>Example from addon named StatCompare<syntaxhighlight lang="lua">
function StatCompare_DressSets(sets)
	local module = getglobal("StatCompareSetsFrameModel");
	module:Undress();

	for i = 1, 19 do
		if(StatCompare_BestItems and StatCompare_BestItems[i] and StatCompare_BestItems[i][sets]) then
			local id = StatCompare_BestItems[i][sets]["id"];
			local slotName = PlayerSlotNames[i].name;
			local button = getglobal("StatCompareSetsFrame"..slotName);
			button.tooltip = PlayerSlotNames[i].tooltip;
			button.texture = SCS_DB[id].icon;
			button.backgroundTextureName = SCS_DB[id].icon;
			button:SetID(id);
			button.banked = false;
			button.missing = false;
			button.empty = false;
			if(StatCompare_BestItems[i][sets]["enchantid"]) then
				button.eid = StatCompare_BestItems[i][sets]["enchantid"]
			else
				button.eid = 0;
			end
			button.item = id..":"..button.eid..":0:0";
			button.id = id;
			StatCompareSetsItemButton_Draw(button);
			DressUpItem(module, id);
		else
			local slotName = PlayerSlotNames[i].name;
			local button = getglobal("StatCompareSetsFrame"..slotName);
			button.empty = true;
			button.tooltip = PlayerSlotNames[i].tooltip;
			button.id = nil;
			button.eid = nil;
			button.backgroundTextureName = nil;
			button.item = nil;
			button.texture = nil;
			button.missing = false;
			button:SetID(0);
			StatCompareSetsItemButton_Draw(button);
		end
	end
	StatCompareSetsFrame:Show();
end
</syntaxhighlight>Example from addon named OutfitDisplayFrame<syntaxhighlight lang="lua">
local function UpdateModel_ThisSlot(pname, model, idx)
   local slotName = PlayerSlotNames[idx].name;
   local what = getglobal(pname..slotName);
   local item = nil;
   if ( what and what.used ) then
      if ( not what.empty ) then
	 item = what.item;
      end
   else
      local slot = PlayerSlotNames[idx].id;
      local link = GetInventoryItemLink("player", slot);
      if ( link ) then
	 _, item, _ = SplitLink(link);
      end
   end
   if ( item ) then
      DressUpItem(model, item);
   end
end
</syntaxhighlight>
