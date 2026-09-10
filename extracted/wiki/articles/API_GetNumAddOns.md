---
title: "API GetNumAddOns"
url: "https://turtle-wow.fandom.com/wiki/API_GetNumAddOns"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:22:40Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetNumAddOns

Get the number of user supplied AddOns.
 count = GetNumAddOns()

## Parameters
### Arguments
   ()

### Returns
   count

  ; count
   Integer - The number of user supplied AddOns installed. This is the maximum valid index to the other AddOn functions. This count does NOT include Blizzard supplied UI component AddOns.

## Addon
Example from addon named Warmup<syntaxhighlight lang="lua">
function Warmup:Init()
	if not WarmupSV then WarmupSV = {} end
	self.sv = WarmupSV
	self.sv.addoninfo = {}

	self.myframe = getglobal("WarmupChatFrame")
	self.frame = getglobal("ChatFrame2")
	for i=1,GetNumAddOns() do
		if IsAddOnLoaded(i) then
			if GetAddOnInfo(i) ~= self.myname then
				self.frame:AddMessage("Addon loaded before Warmup: ".. GetAddOnInfo(i))
				self.myframe:AddMessage("Addon loaded before Warmup: ".. GetAddOnInfo(i))
			end
		end
	end

	self.myframe:SetScript("OnMouseWheel", function ()
		if arg1 > 0 then this:ScrollUp()
		elseif arg1 < 0 then
			if IsShiftKeyDown() then this:ScrollToBottom()
			else this:ScrollDown() end
		end
	end)
	self.myframe:EnableMouseWheel(1)

end
</syntaxhighlight>
