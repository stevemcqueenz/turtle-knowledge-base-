---
title: "API ForceQuit"
url: "https://turtle-wow.fandom.com/wiki/API_ForceQuit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:20:53Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ForceQuit

Instantly quits the game, bypassing the usual 20 seconds countdown
 ForceQuit()

### Takes
   Nothing    

### Returns
   Nothing    

### Details
   Your character will not be logged out when using this function. This means he will stay in Azeroth until the realm server notices that your WoW client is not running anymore. Meanwhile your character could be hit or even be killed, so consider using [Quit()](API_Quit) instead.

## Addon
Example from addon named Titan<syntaxhighlight lang="lua">
function TitanPanelExitGameButton_OnClick(button)
	if ( button == "LeftButton" ) then
		LogoutFrame:Show();
	else
		ForceQuit();
	end
end
</syntaxhighlight>
