---
title: "API SitOrStand"
url: "https://turtle-wow.fandom.com/wiki/API_SitOrStand"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:40:02Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SitOrStand

The player sits or stands.
 SitOrStand();
----

  - *Arguments***

   *none*

----

  - *Returns***

  ; nil

----

  - *Example***

 SitOrStand();

  - *Result***
   The player sits or stands.

## Addon
Example from addon named EzDismount<syntaxhighlight lang="lua">
	-- Stand up if you are trying to do something while sitting
	if (EzDismount_Config[EzDPlayer]["Stand"] ~= "OFF") then

		if ( arg1 == EzDSitErr)  then
         SitOrStand();
		end
   end
</syntaxhighlight>
