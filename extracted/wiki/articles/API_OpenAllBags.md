---
title: "API OpenAllBags"
url: "https://turtle-wow.fandom.com/wiki/API_OpenAllBags"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:50:06Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API OpenAllBags

Open/Close all bags

## Addons
Example from addon named VendorBags<syntaxhighlight lang="lua">
function VendorBags_OnEvent(event)
	if ( (	event == "MERCHANT_SHOW" or 
			event == "BANKFRAME_OPENED" or
			event == "MAIL_SHOW"
		  ) and VendorBags_isEnabled (event) 
	) then 
	
		-- open bags	
		VendorBags_Debug(DEBUG, "SHOW event");
		OpenAllBags(true); -- this won't open bank bags though.....	
		
		-- ....so now we try to open bank bags too
		if (vb_isOpenBankBags == true and event == "BANKFRAME_OPENED") then
			VendorBags_OpenBankBags()
		end
</syntaxhighlight>Example from addon named Titan<syntaxhighlight lang="lua">
function TitanPanelBagButton_OnClick(button)
	if (button == "LeftButton") then
		OpenAllBags();
	end
end
</syntaxhighlight>
