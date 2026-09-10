---
title: "API SetBagPortaitTexture"
url: "https://turtle-wow.fandom.com/wiki/API_SetBagPortaitTexture"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T09:09:39Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SetBagPortaitTexture

## Addons
Example from addon named BibMod<syntaxhighlight lang="lua">
	--Special case code for keyrings
	if ( id == KEYRING_CONTAINER ) then
		getglobal(frame:GetName().."Name"):SetText(KEYRING);
		SetPortraitToTexture(frame:GetName().."Portrait", "Interface\\ContainerFrame\\KeyRing-Bag-Icon");
	else
		getglobal(frame:GetName().."Name"):SetText(GetBagName(id));
		SetBagPortaitTexture(getglobal(frame:GetName().."Portrait"), id);
	end
</syntaxhighlight>Example from addon named Discord<syntaxhighlight lang="lua">
function DMIN_BagTabs_Update()
	DMIN_BagTab_0_Icon:SetTexture("Interface\\Buttons\\Button-Backpack-Up");
	for bag=0, 4 do
		local tab = "DMIN_BagTab_"..bag;
		local tabname = getglobal(tab).tabname;
		local bagslots = GetContainerNumSlots(bag);
		if (bagslots and bagslots > 0) then
			local used = 0;
			if (bag > 0) then
				getglobal(tab.."_Icon"):Show();
				SetBagPortaitTexture(getglobal(tab.."_Icon"), bag);
			end
			for slot = 1, bagslots do
				local link = GetContainerItemLink(bag,slot);
				if (link) then used = used + 1; end
			end
			getglobal(tab.."_Text"):SetText(DMIN_Settings.bagNames[bag].."\n\n"..used.." / "..bagslots);
		else
			getglobal(tab.."_Icon"):Hide();
			getglobal(tab.."_Text"):SetText("");
		end
	end
end
</syntaxhighlight>
