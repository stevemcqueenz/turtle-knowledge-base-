---
title: "API StartDuelUnit"
url: "https://turtle-wow.fandom.com/wiki/API_StartDuelUnit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:45:27Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API StartDuelUnit

Invites a player to start a duel.
<syntaxhighlight lang="lua">
 StartDuelUnit("unit");
</syntaxhighlight>
## Parameters
### Arguments
   ("unit")

  ; unit
   String - The name of the player to invite to duel.

### Returns
   nil

## Example
   This function can be called with the varibale "unit" as the player that should be invited to duel.
<syntaxhighlight lang="lua">
 function startDuel(unit)
   StartDuelUnit(unit);
 end
</syntaxhighlight>

## Addon
Example from addon named DuelInspect<syntaxhighlight lang="lua">
function DuelInspect_StartDuelUnit()
	
	local duelRequested = false;
	
	for index = 1, STATICPOPUP_NUMDIALOGS, 1 do
		local frame = getglobal("StaticPopup"..index);
		if ( frame:IsVisible() and frame.which == "DUEL_REQUESTED") then
			duelRequested = true;
			break;
		end
	end	
		
	if ( IsShiftKeyDown() or not DI_SAVE.OutboundDuels ) then
		oldStartDuelUnit("target");
		
	elseif ( not duelRequested ) then
	
		StaticPopupDialogs["DUEL_CHALLENGE"] = {
			text = UnitName("target").." - "..DI_TEXT_CONFIRMDUEL,
			button1 = DUEL,
			button2 = TEXT(CANCEL),
			sound = "igPlayerInvite",
			OnAccept = function()
				DuelInspect_TargetOpponent();	oldStartDuelUnit("target");
			end,
			OnCancel = function()
				StaticPopup_Hide("DUEL_CHALLENGE");
			end,
			timeout = 0,
			hideOnEscape = 1
		};

		StaticPopup_Show("DUEL_CHALLENGE", "target");
		
		DuelInspect_UpdateStaticPopup();
		DuelInspect_TargetOpponent();
		
	else
		UIErrorsFrame:AddMessage(DI_TEXT_ALREADYCHALLENGED, 1.0, 0.0, 0.0, 1.0, UIERRORS_HOLD_TIME);
	end
	
end
</syntaxhighlight>
