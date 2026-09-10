---
title: "Action slot"
url: "https://turtle-wow.fandom.com/wiki/Action_slot"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T12:36:50Z"
fetched: "2026-09-10T07:38:16Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# Action slot

Action Slot IDs can vary for some classes and are completely arbitrary to the buttons they exist in. As of 1.11, World of Warcraft allows 120 Action Slot IDs, numbered from 1-120. The IDs 1-72 are used by the six default bars (see below for the button ranges). IDs 73-108 are used by the stance bars of some classes. IDs 109-120 have no default uses.

## Default UI use of Action slot IDs
ActionBar page 1: slots 1 to 12 *-- Note exceptions below for other classes *

ActionBar page 2: slots 13 to 24

ActionBar page 3 (Right ActionBar): slots 25 to 36

ActionBar page 4 (Right ActionBar 2): slots 37 to 48

ActionBar page 5 (Bottom Right ActionBar): slots 49 to 60

ActionBar page 6 (Bottom Left ActionBar): slots 61 to 72

  -Warrior Bonus Action Bars**

ActionBar page 1 Battle Stance: slots 73 to 84

ActionBar page 1 Defensive Stance: slots 85 to 96

ActionBar page 1 Berserker Stance: slots 97 to 108

  -Druid Bonus Action Bars**

ActionBar page 1 Cat Form: slots 73 to 84

ActionBar page 1 Bear Form: slots 97 to 108

  -Rogue Bonus Action Bars**

ActionBar page 1 Stealth: slots 73 to 84

## Example Code
This function will display the contents of each of the 120 action slots (skipping empty ones) in the default chat frame.  To use, type "/script reportActionButtions()".<syntaxhighlight lang="lua">
function reportActionButtons()
	local lActionSlot = 0;
	for lActionSlot = 1, 120 do
		local lActionText = GetActionText(lActionSlot);
		local lActionTexture = GetActionTexture(lActionSlot);
		if lActionTexture then
			local lMessage = "Slot " .. lActionSlot .. ": [" .. lActionTexture .. "]";
			if lActionText then
				lMessage = lMessage .. " \"" .. lActionText .. "\"";
			end
			DEFAULT_CHAT_FRAME:AddMessage(lMessage);
		end
	end
end
</syntaxhighlight>
