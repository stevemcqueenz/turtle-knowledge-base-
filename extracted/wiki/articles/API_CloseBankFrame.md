---
title: "API CloseBankFrame"
url: "https://turtle-wow.fandom.com/wiki/API_CloseBankFrame"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T16:29:01Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CloseBankFrame

Will Close the Bank Frame if opened.
 CloseBankFrame();

## Parameters
### Arguments
   None

### Returns
   nil

## Example
 CloseBankFrame();

## Addon
Example from addon named ElvUI<syntaxhighlight lang="lua">
		f:SetScript("OnHide", function()
			CloseBankFrame()

			if E.db.bags.clearSearchOnClose then
				B.ResetAndClear(f.editBox)
			end
		end)
</syntaxhighlight>
