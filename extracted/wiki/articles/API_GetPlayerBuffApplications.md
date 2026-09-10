---
title: "API GetPlayerBuffApplications"
url: "https://turtle-wow.fandom.com/wiki/API_GetPlayerBuffApplications"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T14:30:16Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetPlayerBuffApplications

Retrieves the number of applications of a debuff or buff.

## **Addon**
Example from addon named Buffalo<syntaxhighlight lang="lua">
	-- Set the number of applications of an aura if its a debuff
	local buffCount = getglobal(button:GetName().."Count");
	local count = GetPlayerBuffApplications(buffIndex);
	if ( count > 1 ) then
		buffCount:SetText(count);
		buffCount:Show();
	else
		buffCount:Hide();
	end
</syntaxhighlight>
