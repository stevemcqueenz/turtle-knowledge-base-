---
title: "API UseSoulstone"
url: "https://turtle-wow.fandom.com/wiki/API_UseSoulstone"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:54:05Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UseSoulstone

Use an active soulstone to resurrect yourself after death.

## Addon
Example from addon named oRA2<syntaxhighlight lang="lua">
function oRAPCoolDown:UseSoulstone()
	local text = HasSoulstone()
	if text and text == L["Reincarnation"] then
		local cooldown = 60
		for tab = 1, GetNumTalentTabs(), 1 do
			for talent = 1, GetNumTalents(tab), 1 do
				local name, _, _, _, rank = GetTalentInfo(tab, talent)
				if name == L["Improved Reincarnation"] then
					cooldown = cooldown - (rank*10)
					break
				end
			end
			if cooldown then break end
			self:SendMessage("CD 2 " .. cooldown )
		end
	end
	self.hooks["UseSoulstone"]()
end
</syntaxhighlight>
