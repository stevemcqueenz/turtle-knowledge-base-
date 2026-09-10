---
title: "API CreateFont"
url: "https://turtle-wow.fandom.com/wiki/API_CreateFont"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T12:03:30Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CreateFont

Dynamically create a font object

## Addons
Example from addon named CoolDown<syntaxhighlight lang="lua">
local fontObject = CreateFont("coolDownFont")
fontObject:SetFont("Interface\\AddOns\\coolDown\\Fonts\\coolDownFont.ttf", 22)
fontObject:SetTextColor(1.0, 0.82, 0)
</syntaxhighlight>Example from addon named Nurfed<syntaxhighlight lang="lua">
	local objtype = rawget(layout, "type");
	if (objtype == "Texture") then
		object = parent:CreateTexture(name, layout.layer, inherit);
	elseif (objtype == "FontString") then
		object = parent:CreateFontString(name, layout.layer, inherit);
	elseif (objtype == "Font") then
		object = CreateFont(name);
	elseif (objtype) then
		object = CreateFrame(objtype, name, parent, inherit);
	end
</syntaxhighlight>Example from addon named OmniCC<syntaxhighlight lang="lua">
		--/omnicc font <font>
		elseif(cmd == "font" and args[2] ) then
			--this font is created solely for testing if the user's selection is a valid font or not.
			if(not OmniCCFont) then
				CreateFont("OmniCCFont");
			end
</syntaxhighlight>
