---
title: "API HasPetUI"
url: "https://turtle-wow.fandom.com/wiki/API_HasPetUI"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-25T12:36:29Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API HasPetUI

Returns true if the player has a pet User Interface.
 hasUI = HasPetUI();
----

** *Arguments***

   *none*

----

** *Returns***

   hasUI
  ; hasUI
   Boolean - <code>true</code> if the player has a pet User Interface.

----

** *Example***

  if ( HasPetUI() ) then DoPetStuff(); end

** *Result***

 true | false

## Macro
Call / Dismiss Pet<syntaxhighlight lang="lua">
/run if not HasPetUI() then CastSpellByName('Call Pet') else CastSpellByName('Dismiss Pet') end
</syntaxhighlight>

## Addon
Example from TitanPetInfo plugin for TitanPanel<syntaxhighlight lang="lua">
function TitanPanelPetInfoButton_GetButtonText(id)
	local button, id = TitanUtils_GetButton(id, true);

	if HasPetUI() then
		petName = UnitName("pet");
		petLevel = UnitLevel("pet");
		if UnitSex("pet") == 2 then
			petSex = TITAN_PETINFO_MENU_FEMALE;
		else
			petSex = TITAN_PETINFO_MENU_MALE;
		end
		
		local currentXP, totalXP, toLevelXP = TitanPanelPetInfoButton_GetPetExperience();
		local timeLeft, XPPerMin = TitanPanelPetInfoButton_XPTimeLeft();
		local barText = TitanPanelPetInfoButton_BarText(toLevelXP, timeLeft);
		--TitanPanelPetInfoButton_HappinessCheck();
		TitanPetInfoText:SetText(barText)

		if TitanGetVar(TITAN_PETINFO_ID, "ShowPetLevel") and TitanGetVar(TITAN_PETINFO_ID, "ShowPetName") then
			return TITAN_PETINFO_BUTTON_LABEL_PETINFO, TitanUtils_GetHighlightText(petName),
			TITAN_PETINFO_BUTTON_LABEL_PETLEVEL, TitanUtils_GetHighlightText(petLevel);
		elseif TitanGetVar(TITAN_PETINFO_ID, "ShowPetName") then
			return TITAN_PETINFO_BUTTON_LABEL_PETINFO, TitanUtils_GetHighlightText(petName);
		else
			return TITAN_PETINFO_BUTTON_LABEL_PETLEVEL, TitanUtils_GetHighlightText(petLevel);
		end
</syntaxhighlight>
