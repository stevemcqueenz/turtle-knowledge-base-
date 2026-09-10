---
title: "API Quit"
url: "https://turtle-wow.fandom.com/wiki/API_Quit"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:33:31Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API Quit

Quits the game. <syntaxhighlight lang="lua">
Quit()
</syntaxhighlight>

## Parameters
**Arguments**

   ()

**Returns**

   nil

## Details
   In macros you can also use **/Quit**

## Addon
Example from addon named Auctioneer<syntaxhighlight lang="lua">
	--The followng was added by MentalPower to implement the "/auc finish" command
	local finish = Auctioneer.Command.GetFilterVal('finish');

	if (finish == 1) then
		Logout();

	elseif (finish == 2) then
		Quit();

	elseif (finish == 3) then
		if(ReloadUIHandler) then
			ReloadUIHandler("10");
		else
			ReloadUI();
		end
	end
</syntaxhighlight>
