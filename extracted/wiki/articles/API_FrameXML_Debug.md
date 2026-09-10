---
title: "API FrameXML Debug"
url: "https://turtle-wow.fandom.com/wiki/API_FrameXML_Debug"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T10:00:01Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API FrameXML Debug

Sets FrameXML logging state which is output to /WoW Folder/Logs/FrameXML.log

## Addon
Example from addon named ImprovedErrorFrame<syntaxhighlight lang="lua">
		-- Load XMLDebug from CVar.
		-- (Must use CVars as regular variables aren't available until too late)
		RegisterCVar("XMLDebug", 0);
		ImprovedErrorSettings.XMLDebug = tonumber(GetCVar("XMLDebug"));

IEF_TEST_FLAG = ImprovedErrorSettings.XMLDebug;
		if (ImprovedErrorSettings.XMLDebug == 1) then
IEF_TEST_FLAG2 = true;
			FrameXML_Debug(1);
		else
IEF_TEST_FLAG2 = false;
			FrameXML_Debug(0);
		end

		-- Perform onLoad tasks
		ImprovedErrorFrame.enable();
		this:RegisterEvent("VARIABLES_LOADED");
	end;
</syntaxhighlight>
