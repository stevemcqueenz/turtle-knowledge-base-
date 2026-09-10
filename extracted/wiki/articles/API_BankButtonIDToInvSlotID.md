---
title: "API BankButtonIDToInvSlotID"
url: "https://turtle-wow.fandom.com/wiki/API_BankButtonIDToInvSlotID"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T16:25:44Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API BankButtonIDToInvSlotID

Returns the ID number of a bank button in terms of inventory slot ID.

## Addons
Example from addon named CharactersViewer<syntaxhighlight lang="lua">
						for bagNum = 5, 10 do
							local bagNum_ID = BankButtonIDToInvSlotID(bagNum, 1);
							link = GetInventoryItemLink("player", bagNum_ID);
							texture = GetInventoryItemTexture("player", bagNum_ID);					
                  
							if( link ) then
								CharactersViewerProfile[GetCVar("realmName")][UnitName("player")]["Bank"][bagNum] = { };
								CharactersViewerProfile[GetCVar("realmName")][UnitName("player")]["Bank"][bagNum]["name"] = GetBagName(bagNum);
								CharactersViewerProfile[GetCVar("realmName")][UnitName("player")]["Bank"][bagNum]["size"] = GetContainerNumSlots(bagNum);
								CharactersViewerProfile[GetCVar("realmName")][UnitName("player")]["Bank"][bagNum]["L"] = CharactersViewer.library.DeLink(link);
								CharactersViewerProfile[GetCVar("realmName")][UnitName("player")]["Bank"][bagNum]["T"] = texture;
								--CharactersViewer.collect.Bag(bag);
							end	
</syntaxhighlight>Example from addon named AllInOneBank<syntaxhighlight lang="lua">
function AIOBFrame_Button_OnEnter()
	--show tooltip
	local myLink, MadeBy, Soulbound, count;
	local bagName = strsub(this:GetName(), 10, 13);
	local curBag;
	local cooldownInfo;
	if AtBank then
		local hasCooldown, repairCost;
		GameTooltip:SetOwner(this,"ANCHOR_RIGHT");
		if (this.isBag) then
			AIOB_HighlightBag(this:GetID(), bagName);
			local inventoryID = BankButtonIDToInvSlotID(this:GetID(), 1);
			hasCooldown, repairCost = GameTooltip:SetInventoryItem("player", inventoryID);
		else
			AIOB_HighlightBag(this.bagIndex, bagName, 1);
			if this.bagIndex < 0 then
				local newIndex =BankFrameItem1:GetInventorySlot(); 
				hasCooldown, repairCost = GameTooltip:SetInventoryItem("player", newIndex);
			else
				hasCooldown, repairCost = GameTooltip:SetBagItem(this.bagIndex, this.itemIndex);
			end
		end
</syntaxhighlight>Example from TitanSkinTracker plugin for Titan<syntaxhighlight lang="lua">
	for bagNum = 5, 10 do
		maxContainerItems = GetContainerNumSlots(bagNum);
		if( maxContainerItems ) then
			local id = BankButtonIDToInvSlotID(bagNum, 1);
			link = GetInventoryItemLink("player", id);
			icon = GetInventoryItemTexture("player", id);
			for containerItemNum = 1, maxContainerItems do
				link = GetContainerItemLink(bagNum, containerItemNum);
				icon, quantity = GetContainerItemInfo(bagNum, containerItemNum);
				if( link ) then
					--LinkToName
					itemName = SkinTracker_NameFromLink(link);
					if(itemName == XY_SKIN_LIGHT) then
						bank_light = bank_light + quantity;
					end
					if(itemName == XY_SKIN_MEDIUM) then
						bank_medium = bank_medium + quantity;
					end
					if(itemName == XY_SKIN_HEAVY) then
						bank_heavy = bank_heavy + quantity;
					end
					if(itemName == XY_SKIN_THICK) then
						bank_thick = bank_thick + quantity;
					end
					if(itemName == XY_SKIN_RUGGED) then
						bank_rugged = bank_rugged + quantity;
					end
</syntaxhighlight>Example from addon named Outfitter<syntaxhighlight lang="lua">
function OutfitterQuickSlotItemButton_OnEnter(button)
	GameTooltip:SetOwner(button, "ANCHOR_RIGHT");
	
	local	vBagIndex = button:GetParent():GetID();
	local	vBagSlotIndex = button:GetID();
	
	local	hasItem, hasCooldown, repairCost;
	
	if vBagIndex == -1 then
		hasItem, hasCooldown, repairCost = GameTooltip:SetInventoryItem("player", BankButtonIDToInvSlotID(vBagSlotIndex));
	else
		hasCooldown, repairCost = GameTooltip:SetBagItem(vBagIndex, vBagSlotIndex);
	end
</syntaxhighlight>Example from addon named MyBags<syntaxhighlight lang="lua">
function MyBagsCoreClass:ItemButton_OnEnter()
	if self.GetOpt("HlBags") == 1 then
		local bagButton = getglobal(this:GetParent():GetName() .. "Bag")
		if bagButton then bagButton:LockHighlight() end
	end
	self:TooltipSetOwner(this)
	if self.isLive then
		if this:GetParent() == MyBankFrameBank then -- OnEnter for BankItems is in XML, need 1.7 to use actual code
			GameTooltip:SetInventoryItem("player", BankButtonIDToInvSlotID(this:GetID()))
		else
			ContainerFrameItemButton_OnEnter(this)
		end
	else
		local ID
		_, _, ID = self:GetInfo(this:GetParent():GetID(), this:GetID())
		if ID then
			local hyperlink = self:GetHyperlink(ID)
			if hyperlink then GameTooltip:SetHyperlink(hyperlink) end
		end
	end
	if ( this.readable or (IsControlKeyDown() and this.hasItem) ) then
		ShowInspectCursor()
	end
end
</syntaxhighlight>
