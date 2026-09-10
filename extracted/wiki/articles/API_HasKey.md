---
title: "API HasKey"
url: "https://turtle-wow.fandom.com/wiki/API_HasKey"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:38:20Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API HasKey

Returns whether or not the player has a key ring.
 hasKeyring = HasKey()

## Parameters
### Returns
  ; hasKeyring
   1 if player has a key ring, nil otherwise

## Details
- Added in 1.11

## Addon
Example from addon named CharacterProfiler<syntaxhighlight lang="lua">
		if(HasKey and HasKey()) then
			local bag,bagname,link,texture,color,item,itemname;
			bag=bagNum+1;
			bagName="Bag" .. bag;
			texture="Interface\\Buttons\\UI-Button-KeyRing";
			baglink="|cffffffff|Hitem:0:0:0:0|h["..KEYRING.."]|h|r";
			rpgoCPtooltip:SetText(KEYRING);
			rpgoCPtooltip:AddLine(format(CONTAINER_SLOTS,rpgoCP_GetContainerNumSlots(KEYRING_CONTAINER),bagContainerText));
			local bagContentsTemp=nil;
			if(structInventory[bagName] and structInventory[bagName]["Contents"]) then
				bagContentsTemp=structInventory[bagName]["Contents"];
			end
</syntaxhighlight>
