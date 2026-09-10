---
title: "API ClearTutorials"
url: "https://turtle-wow.fandom.com/wiki/API_ClearTutorials"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:11:42Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ClearTutorials

## Addon
Example from ElvUI<syntaxhighlight lang="lua">
local function SetupCVars()
	SHOW_NEWBIE_TIPS = 0
	SetCVar("showLootSpam", 1)
	SetCVar("UberTooltips", 1)
	ALWAYS_SHOW_MULTIBARS = 1
	LOCK_ACTIONBAR = 1
	SIMPLE_CHAT = 0

	SetActionBarToggles(1, 0, 1, 1)
	TutorialFrame_HideAllAlerts()
	ClearTutorials()

	InstallStepComplete.message = L["CVars Set"]
	InstallStepComplete:Show()
end
</syntaxhighlight>
