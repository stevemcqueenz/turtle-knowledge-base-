---
title: "API SetCVar"
url: "https://turtle-wow.fandom.com/wiki/API_SetCVar"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T10:16:36Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SetCVar

<syntaxhighlight lang="lua">
SetCVar("cvar",value{,"scriptCVar"})
</syntaxhighlight>SetCVar allows you to set the content of the variables defined in the config.wtf file (which is in the WTF directory).

Settings changed in this manner are applied to the game UI immediately, however settings are not saved until exit and settings which were previously not defined in config.wtf are not available to GetCVar until the file has been saved (at logout).

SetCVar("UnitNamePlayer", "1") - enables player nametags.

## Macros
Increase max camera distance<syntaxhighlight lang="lua">
/script SetCVar ("cameraDistancemax" ,50)
</syntaxhighlight>Disable Error Speech<syntaxhighlight lang="lua">
/run SetCVar("EnableErrorSpeech", 0) UIErrorsFrame:UnregisterEvent"UI_ERROR_MESSAGE" CastSpellByName"SPELLNAME" UIErrorsFrame:RegisterEvent"UI_ERROR_MESSAGE" SetCVar("EnableErrorSpeech", 1)
</syntaxhighlight>Toggle drunk effect (zg spiders) <syntaxhighlight lang="lua">
/run local c,m=GetCVar("ffxGlow"),message if c=="1" then SetCVar("ffxGlow","0")m("Drunk GFX OFF")else SetCVar("ffxGlow","1")m("Drunk GFX ON")end
</syntaxhighlight>

## Addon
Example from addon named Titan<syntaxhighlight lang="lua">
function TitanPanelVolumeControlSlider_OnValueChanged()
	SetCVar("MasterVolume", 1 - this:GetValue());
	getglobal(this:GetName().."Text"):SetText(TitanPanelVolume_GetVolumeText(GetCVar("MasterVolume")));
	TitanPanelVolume_SetVolumeIcon();

	-- Update GameTooltip
	if (this.tooltipText) then
		this.tooltipText = TitanOptionSlider_TooltipText(TITAN_VOLUME_CONTROL_TOOLTIP, TitanPanelVolume_GetVolumeText(GetCVar("MasterVolume")));
		GameTooltip:SetText(this.tooltipText, nil, nil, nil, nil, 1);
	end
end
</syntaxhighlight>
