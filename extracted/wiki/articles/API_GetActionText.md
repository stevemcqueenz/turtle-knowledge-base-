---
title: "API GetActionText"
url: "https://turtle-wow.fandom.com/wiki/API_GetActionText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T18:37:03Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetActionText

Gets the text label for an action. 

text = GetActionText(actionSlot) 

## Parameters
**Arguments**

  ; actionSlot - [ActionSlot](Action slot)
   The queried slot.

**Returns**

  ; text - String
  * The action's text, if present.  Macro actions use their names for their action text.
  * nil, if the slot has no action text, or is empty.  Most standard WoW action icons don't have action text.

## Addon
From addon named Chronometer<syntaxhighlight lang="lua">
function Chronometer:UseAction(slot, clicked, onself)
	if not GetActionText(slot) and HasAction(slot) then
		self.gratuity:SetAction(slot)
		spellName = self.gratuity:GetLine(1)
		spellRank = self.gratuity:GetLine(1, true)
		local name, _, _, _, rank = self.spellcache:GetSpellData(spellName, spellRank)
		local timer = self.timers[Chronometer.SPELL][name]
		if timer then
			self:CatchSpellcast(timer, name, rank, onself)
		end
	end
	return self.hooks["UseAction"](slot, clicked, onself)
end
</syntaxhighlight>
