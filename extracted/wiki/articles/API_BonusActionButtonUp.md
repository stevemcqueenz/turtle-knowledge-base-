---
title: "API BonusActionButtonUp"
url: "https://turtle-wow.fandom.com/wiki/API_BonusActionButtonUp"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T18:21:05Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API BonusActionButtonUp

BonusActionButtonUp(buttonID);
Releases the specified "bonus" (pet or minion) action button.

## Parameters
### Arguments
  ; buttonID
   Number - The button ID of the bonus button to release

### Returns
  ; nil

### Example
 BonusActionButtonUp(1);

## Addon
From addon JustClick<syntaxhighlight lang="lua">
			local _, _, id = string.find(action, "^BONUSACTIONBUTTON(%d+)");
			if ( id ) then
				JC_TargetUnitBegin(unit);
				BonusActionButtonDown(id);
				BonusActionButtonUp(id);
				JC_TargetUnitEnd();
				return true;
			end
</syntaxhighlight>
