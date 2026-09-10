---
title: "API AssistByName"
url: "https://turtle-wow.fandom.com/wiki/API_AssistByName"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T05:45:41Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API AssistByName

Assists the specified player
 AssistByName("playername");

## Parameters
### Arguments
   ("playername")

  ; playername
   String - the name of the player to assist

## Details
   This function cannot be used with non-player units (i.e. npc's or pets).

## Macros
Non-leaders Assist Name<syntaxhighlight lang="lua">
/run if not IsPartyLeader() then AssistByName("Charname") end
</syntaxhighlight>Sets your Main Tank or Main Assist for assists and assists the MT/MA all-in-one<syntaxhighlight lang="lua">
/run if (IsAltKeyDown() and UnitIsFriend("player","target")) then MT=UnitName("target");DEFAULT_CHAT_FRAME:AddMessage(‘MT Set: ['..MT..']‘); elseif (MT ~= nil) then AssistByName(MT);else DEFAULT_CHAT_FRAME:AddMessage(‘Set MT Noob!’); end;
</syntaxhighlight>

## Addon
Example from addon named AssistMe<syntaxhighlight lang="lua">
function AssistMe_OnEvent(event)
	if ( event == "CHAT_MSG_TEXT_EMOTE" ) then
		local startpos, endpos, name = string.find(arg1, "(%w+) "..ASSIST_ME_EMOTE_PARTY_GET);
		if name and name ~= ASSIST_ME_EMOTE_YOU then
			local numPartyMembers = GetNumPartyMembers();
			local numRaidMembers = GetNumRaidMembers();
			if AssistMe_RaidTrack and numRaidMembers > 0 then
				for i=1, numRaidMembers do
					local currName, rank, subgroup, level, class, fileName, zone, online = GetRaidRosterInfo(i);
					if currName == name then
						AssistMe_SetCurrentAssist(name, (not AssistMe_Raid and AssistMe_Notice))
						if AssistMe_Raid then
							--UIErrorsFrame:AddMessage("Assisting "..name..".", 1.0, 1.0, 1.0, 1.0, UIERRORS_HOLD_TIME);
							Sea.IO.print("Assisting "..name..".");
							AssistByName(name);
							--AssistUnit("party"..i);
						end
						--UIErrorsFrame:AddMessage(name.." wants assistance.", 1.0, 1.0, 1.0, 1.0, UIERRORS_HOLD_TIME);
						break;
					end
				end
			elseif AssistMe_PartyTrack and numPartyMembers > 0 then
				for i=1, numPartyMembers do
					if UnitName("party"..i) == name then
						AssistMe_SetCurrentAssist(name, (not AssistMe_Party and AssistMe_Notice));
						if AssistMe_Party then
							--UIErrorsFrame:AddMessage("Assisting "..name..".", 1.0, 1.0, 1.0, 1.0, UIERRORS_HOLD_TIME);
							Sea.IO.print("Assisting "..name..".");
							AssistByName(name);
							--AssistUnit("party"..i);
						end
						--UIErrorsFrame:AddMessage(name.." wants assistance.", 1.0, 1.0, 1.0, 1.0, UIERRORS_HOLD_TIME);
						break;
					end
				end
			end
		end
</syntaxhighlight>
