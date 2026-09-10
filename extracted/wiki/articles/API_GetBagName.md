---
title: "API GetBagName"
url: "https://turtle-wow.fandom.com/wiki/API_GetBagName"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T16:43:41Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetBagName

** *Arguments***
  ;: (bagID)
  ; [bagID](API Type BagId)
   number - number of the bag the item is in, 0 is your backpack, 1-4 are the four additional bags, numbered right to left.

----

** *Returns***

  ; bagName
   bagName - the name of the specified bag (example "Green Woolen Bag")

----

** *Examples***
<syntaxhighlight lang="lua">
 local bagName = GetBagName(0);  
 --Returns "Backpack"
</syntaxhighlight>
----

** *Result***

   bagName will contain the name of the specified bag if the bag number is 0-4 otherwise it will be nil, unless when the bank is opened, in which case GetBagName(-1) (for the bank) is nil and GetBagName(6) will give the name of the first bank bag, GetBagName(7) the name of the second bank bag, etc ...

----

** *Notes***

   It seems that there is no way to check the keyholder content; GetContainerNumSlots and GetBagName returns 0 and nil while bagID is -2.

   GetBagName(-2) - returns nil
   GetContainerNumSlots(-2) - returns 0

## Macros
Drain Soul, delete Soul Shard<syntaxhighlight lang="lua">
/cast Drain Soul(Rank 1)
/run local a=GetBagName(4); if a=="Core Felcloth Bag" or a=="Felcloth Bag" or a=="Soul Pouch" or a=="Box of Souls" or a=="Small Soul Pouch" then PickupContainerItem(4,GetContainerNumSlots(4)) DeleteCursorItem()end
</syntaxhighlight>

## Addon
Example from addon named Necrosis<syntaxhighlight lang="lua">
-- Function that allows you to find/store fragments in bags
function Necrosis_SoulshardSwitch(type)
	if (type == "CHECK") then
		SoulshardMP = 0;
		for container = 0, 4, 1 do
			for i = 1, 3, 1 do
				if GetBagName(container) == NECROSIS_ITEM.SoulPouch[i] then
					BagIsSoulPouch[container + 1] = true;
					break;
				else
					BagIsSoulPouch[container + 1] = false;
				end
			end
		end
	end
	for container = 0, 4, 1 do
		if BagIsSoulPouch[container+1] then break; end
		if container ~= NecrosisConfig.SoulshardContainer then
			for slot=1, GetContainerNumSlots(container), 1 do
				Necrosis_MoneyToggle();
				NecrosisTooltip:SetBagItem(container, slot);
				local itemInfo = tostring(NecrosisTooltipTextLeft1:GetText());
				if itemInfo == NECROSIS_ITEM.Soulshard then
					if (type == "CHECK") then
						SoulshardMP = SoulshardMP + 1;
					elseif (type == "MOVE") then
						Necrosis_FindSlot(container, slot);
						SoulshardMP = SoulshardMP - 1;
					end
				end
			end
		end
	end
</syntaxhighlight>
