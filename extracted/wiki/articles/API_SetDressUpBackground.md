---
title: "API SetDressUpBackground"
url: "https://turtle-wow.fandom.com/wiki/API_SetDressUpBackground"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T10:36:51Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SetDressUpBackground

Given an Item shown in the Auction House will show the DressingRoom UI with the item equipped.

## Addon
Example from addon named UndressButton<syntaxhighlight lang="lua">
function UBReset()
	SetPortraitTexture(DressUpFramePortrait, "player");
	SetDressUpBackground();
	DressUpModel:SetUnit("player");
end

function UBDressUpTarget()
	if (not DressUpFrame:IsVisible()) then
		ShowUIPanel(DressUpFrame);
	else
		PlaySound("gsTitleOptionOK");
	end
	if(UnitIsVisible("target")) then
		SetPortraitTexture(DressUpFramePortrait, "target");
		SetDressUpTargetBackground();
		DressUpModel:SetUnit("target");
	else
		UBReset();
	end
end
</syntaxhighlight>Example from addon named ElvUI<syntaxhighlight lang="lua">
local function LoadSkin()
	if E.private.skins.blizzard.enable ~= true or E.private.skins.blizzard.dressingroom ~= true then return end

	local DressUpFrame = _G["DressUpFrame"]
	E:StripTextures(DressUpFrame)
	E:CreateBackdrop(DressUpFrame, "Transparent")
	E:Point(DressUpFrame.backdrop, "TOPLEFT", 10, -12)
	E:Point(DressUpFrame.backdrop, "BOTTOMRIGHT", -33, 73)

	E:Kill(DressUpFramePortrait)

	SetDressUpBackground()
	DressUpBackgroundTopLeft:SetDesaturated(true)
	DressUpBackgroundTopRight:SetDesaturated(true)
	DressUpBackgroundBotLeft:SetDesaturated(true)
	DressUpBackgroundBotRight:SetDesaturated(true)

	E:Point(DressUpFrameDescriptionText, "CENTER", DressUpFrameTitleText, "BOTTOM", -5, -22)

	S:HandleCloseButton(DressUpFrameCloseButton)

	S:HandleRotateButton(DressUpModelRotateLeftButton)
	E:Point(DressUpModelRotateLeftButton, "TOPLEFT", DressUpFrame, 25, -79)
	S:HandleRotateButton(DressUpModelRotateRightButton)
	E:Point(DressUpModelRotateRightButton, "TOPLEFT", DressUpModelRotateLeftButton, "TOPRIGHT", 3, 0)

	S:HandleButton(DressUpFrameCancelButton)
	E:Point(DressUpFrameCancelButton, "CENTER", DressUpFrame, "TOPLEFT", 306, -423)
	S:HandleButton(DressUpFrameResetButton)
	E:Point(DressUpFrameResetButton, "RIGHT", DressUpFrameCancelButton, "LEFT", -3, 0)

	E:CreateBackdrop(DressUpModel, "Default")
	DressUpModel.backdrop:SetPoint("TOPLEFT", -2, 1)
	DressUpModel.backdrop:SetPoint("BOTTOMRIGHT", 0, 19)
end

S:AddCallback("DressingRoom", LoadSkin)
</syntaxhighlight>
