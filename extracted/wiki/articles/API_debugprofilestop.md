---
title: "API debugprofilestop"
url: "https://turtle-wow.fandom.com/wiki/API_debugprofilestop"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T09:56:35Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API debugprofilestop

debugprofilestop() returns sub-millisecond (floating point) values.

## Addon
Example from addon named GuildProfiler<syntaxhighlight lang="lua">
	debugprofilestart();
	if(event=="CHAT_MSG_SYSTEM") then
		rpgoGP_ScanGuildInfo(arg1);
	end
	if(not rpgoGPlock and rpgoGPserver) then
		rpgoGPlock=1;
		if(not rpgoGPstate["Loaded"]) then
			rpgoGP_InitProfile();
		end
		if(event=="RPGOGP_SCAN") then
			rpgoGP_UpdateProfile();
		elseif(event=="RPGOGP_EXPORT") then
			rpgoGP_ForceExport();
		end
		rpgoGPlock=nil;
	end
	rpgoGP_debug("time: "..debugprofilestop().."ms");
end
</syntaxhighlight>Example from addon named IDCard<syntaxhighlight lang="lua">
function IDCard:TooltipUpdate()
	local _,_,_,_,_,_,_,_,texture = GetItemInfo(self.id)
 	if(texture) then
	 	self:UnhookScript(this,"OnSizeChanged")
		self:debug(debugprofilestop())
		self.button:SetNormalTexture(texture)
	end
end
</syntaxhighlight>Example from addon named GFW Linkerator<syntaxhighlight lang="lua">
		local gotLink = FLT_ProcessLinks(arg1);
		if (FLT_Debug) then
			local parseTime = debugprofilestop();
			if (gotLink) then
				FLT_MaxFoundTime = math.max((FLT_MaxFoundTime or 0), parseTime);
			else
				FLT_MaxNotFoundTime = math.max((FLT_MaxNotFoundTime or 0), parseTime);
			end
		end
	else
		FLT_ProcessLinks(arg1);
	end
end
</syntaxhighlight>
