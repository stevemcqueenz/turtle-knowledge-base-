---
title: "API ChangeActionBarPage"
url: "https://turtle-wow.fandom.com/wiki/API_ChangeActionBarPage"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T10:52:38Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ChangeActionBarPage

Changes the current action button set to the one specified in CURRENT_ACTIONBAR_PAGE variable.
 ChangeActionBarPage()

## Parameters
### Arguments
   ()

### Returns
   *nil*

## Example
<syntaxhighlight lang="lua">
 function ActionBar_PageUp()
    CURRENT_ACTIONBAR_PAGE = CURRENT_ACTIONBAR_PAGE + 1;
    if ( CURRENT_ACTIONBAR_PAGE &#x3E; NUM_ACTIONBAR_PAGES ) then
       CURRENT_ACTIONBAR_PAGE = 1;
    end
    ChangeActionBarPage();
 end
</syntaxhighlight>

#### Result
   This function does the same thing as pressing the Page Up button. It increments CURRENT_ACTIONBAR_PAGE, checks for a valid page number, then calls ChangeActionBarPage() to change the action bar.

## Details
   Notifies the UI that the current action button set has been updated to the current value of the CURRENT_ACTIONBAR_PAGE global variable.

   Will cause an ACTIONBAR_PAGE_CHANGED event to fire (Whether the event fires when there hasn't actually been a change is untested).

## Macros
Switches between actionbar page 1 and 2<syntaxhighlight lang="lua">
/run if (CURRENT_ACTIONBAR_PAGE == 1) then CURRENT_ACTIONBAR_PAGE = 2; else CURRENT_ACTIONBAR_PAGE = 1; end; ChangeActionBarPage();
</syntaxhighlight>

## Addon
From named Aspected<syntaxhighlight lang="lua">
		-- Update if page has changed
		if ( page ~= CURRENT_ACTIONBAR_PAGE ) then
			ChangeActionBarPage();
		end
	else
		-- Only store the old page when the player manually sets it
		if ( not Aspected_SwapPage ) then
			Aspected_OldActionBar = CURRENT_ACTIONBAR_PAGE;
		end
		Aspected_SwapPage = false;
	end
end
</syntaxhighlight>
