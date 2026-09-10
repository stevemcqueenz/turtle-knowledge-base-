---
title: "API PetHasActionBar"
url: "https://turtle-wow.fandom.com/wiki/API_PetHasActionBar"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T10:31:14Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PetHasActionBar

Determine if player has a pet with an action bar.
 hasActionBar = PetHasActionBar()

## Parameters
### Arguments
   ()

### Returns
   hasActionBar

  ; hasActionBar
   Flag - nil if the player has no pet (or the pet has no action bar), 1 if a pet action bar should be shown.

## Addon
Example from addon named Aspected<syntaxhighlight lang="lua">
-- Pet action bar stuff ... copied and edited here to fix a positioning bug
function Aspected_ShowPetActionBar()
	PetActionBar_UpdatePosition();
	if ( PetHasActionBar() and PetActionBarFrame.showgrid == 0 and (PetActionBarFrame.mode ~= "show") and not PetActionBarFrame.locked and not PetActionBarFrame.ctrlPressed ) then
		PetActionBarFrame:Show();
		PetActionBarFrame:SetFrameStrata("BACKGROUND");
		if ( PetActionBarFrame.completed ) then
			PetActionBarFrame.slideTimer = 0;
		end
		PetActionBarFrame.timeToSlide = PETACTIONBAR_SLIDETIME;
		PetActionBarFrame.yTarget = PETACTIONBAR_YPOS;
		PetActionBarFrame.mode = "show";

		-- Rare case
		if ( GetNumShapeshiftForms() > 0 ) then
			-- THIS IS THE ONLY LINE I CHANGED:
			PETACTIONBAR_XPOS = 500;
		else
			PETACTIONBAR_XPOS = 36
		end
	end
end
</syntaxhighlight>
