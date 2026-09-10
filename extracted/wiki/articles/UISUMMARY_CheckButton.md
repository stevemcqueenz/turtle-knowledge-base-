---
title: "UISUMMARY CheckButton"
url: "https://turtle-wow.fandom.com/wiki/UISUMMARY_CheckButton"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:51:43Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["Widget"]
---
# UISUMMARY CheckButton

# Summary
(See [CheckButton object information](UIOBJECT CheckButton) for details)

# Methods
## Inherited UIObject Methods
[UIObject object summary](UISUMMARY UIObject)

   [CheckButton:GetAlpha](API UIObject GetAlpha)
   [CheckButton:GetName](API UIObject GetName)
   [CheckButton:GetObjectType()](API UIObject GetObjectType) - Get the type of this object - New in 1.10
   [CheckButton:IsObjectType("type")](API UIObject IsObjectType) - Determine if this object is of the specified type, or a subclass of that type - New in 1.10.
   [CheckButton:SetAlpha](API UIObject SetAlpha)

## Inherited Region Methods
[Region object summary](UISUMMARY Region)

   [CheckButton:ClearAllPoints](API Region ClearAllPoints)
   [CheckButton:GetBottom](API Region GetBottom)
   [CheckButton:GetCenter](API Region GetCenter)
   [CheckButton:GetHeight](API Region GetHeight)
   [CheckButton:GetLeft](API Region GetLeft)
   [CheckButton:GetNumPoints](API Region GetNumPoints)
   [CheckButton:GetParent](API Region GetParent)
   [CheckButton:GetPoint](API Region GetPoint)
   [CheckButton:GetRight](API Region GetRight)
   [CheckButton:GetTop](API Region GetTop)
   [CheckButton:GetWidth](API Region GetWidth)
   [CheckButton:Hide](API Region Hide)
   [CheckButton:IsShown](API Region IsShown)
   [CheckButton:IsVisible](API Region IsVisible)
   [CheckButton:SetAllPoints](API Region SetAllPoints)
   [CheckButton:SetHeight](API Region SetHeight)
   [CheckButton:SetParent](API Region SetParent)
   [CheckButton:SetPoint](API Region SetPoint)
   [CheckButton:SetWidth](API Region SetWidth)
   [CheckButton:Show](API Region Show)

## Inherited Frame Methods
[Frame object summary](UISUMMARY Frame)

   [CheckButton:CreateFontString(&#x5B;"name"&#x5B;,"layer"&#x5D;&#x5D;)](API Frame CreateFontString) - Create and return a new FontString as a child of this Frame.
   [CheckButton:CreateTexture(&#x5B;"name"&#x5B;,"layer"&#x5D;&#x5D;)](API Frame CreateTexture) - Create and return a new Texture as a child of this Frame.
   [CheckButton:CreateTitleRegion](API Frame CreateTitleRegion)
   [CheckButton:DisableDrawLayer("layer")](API Frame DisableDrawLayer) - Disable rendering of regions in the specified draw layer.
   [CheckButton:EnableDrawLayer("layer")](API Frame EnableDrawLayer) - Enable rendering of regions in the specified draw layer.
   [CheckButton:EnableKeyboard(enableFlag)](API Frame EnableKeyboard) - Set whether this frame will get keyboard input.
   [CheckButton:EnableMouse(enableFlag)](API Frame EnableMouse) - Set whether this frame will get mouse input.
   [CheckButton:EnableMouseWheel(enableFlag)](API Frame EnableMouseWheel) - Set whether this frame will get mouse wheel events.
   [CheckButton:GetBackdrop](API Frame GetBackdrop)
   [CheckButton:GetBackdropBorderColor](API Frame GetBackdropBorderColor)
   [CheckButton:GetBackdropColor](API Frame GetBackdropColor)
   [CheckButton:GetChildren()](API Frame GetChildren) - Get children of this frame.
   [CheckButton:GetEffectiveScale()](API Frame GetEffectiveScale) - Get the scale factor of this object relative to the root window.
   [CheckButton:GetFrameLevel()](API Frame GetFrameLevel) - Get the level of this frame.
   [CheckButton:GetFrameStrata()](API Frame GetFrameStrata) - Get the strata of this frame.
   [CheckButton:GetFrameType()](API Frame GetFrameType) - Get the type of this frame.
   [CheckButton:GetHitRectInsets](API Frame GetHitRectInsets)
   [CheckButton:GetID()](API Frame GetID) - Get the ID of this frame.
   [CheckButton:GetMaxResize](API Frame GetMaxResize)
   [CheckButton:GetMinResize](API Frame GetMinResize)
   [CheckButton:GetNumChildren()](API Frame GetNumChildren) - Get the number of children this frame has.
   [CheckButton:GetNumRegions()](API Frame GetNumRegions) - Return the number of Regions that are children of this frame.
   [CheckButton:GetRegions()](API Frame GetRegions) - Return the regions of the frame (multiple return values).
   [CheckButton:GetScale()](API Frame GetScale) - Get the scale factor of this object relative to its parent.
   [CheckButton:GetScript("handler")](API Frame GetScript) - Get the function for one of this frame's handlers.
   [CheckButton:GetTitleRegion](API Frame GetTitleRegion)
   [CheckButton:HasScript("handler")](API Frame HasScript) - Return true if the frame can be given a handler of the specified type (NOT whether it actually HAS one, use GetScript for that) - Since 1.8.
   [CheckButton:IsClampedToScreen](API Frame IsClampedToScreen)
   [CheckButton:IsFrameType("type")](API Frame IsFrameType) - Determine if this frame is of the specified type, or a subclass of that type.
   [CheckButton:IsKeyboardEnabled](API Frame IsKeyboardEnabled)
   [CheckButton:IsMouseEnabled](API Frame IsMouseEnabled)
   [CheckButton:IsMouseWheelEnabled](API Frame IsMouseWheelEnabled)
   [CheckButton:IsMovable()](API Frame IsMovable) - Determine if the frame can be moved.
   [CheckButton:IsResizable()](API Frame IsResizable) - Determine if the frame can be resized.
   [CheckButton:IsToplevel](API Frame IsToplevel)
   [CheckButton:IsUserPlaced()](API Frame IsUserPlaced) - Determine if this frame has been relocated by the user.
   [CheckButton:Lower()](API Frame Lower) - Lower this frame behind other frames.
   [CheckButton:Raise()](API Frame Raise) - Raise this frame above other frames.
   [CheckButton:RegisterAllEvents](API Frame RegisterAllEvents)
   [CheckButton:RegisterEvent("event")](API Frame RegisterEvent) - Indicate that this frame should be notified when event occurs.
   [CheckButton:RegisterForDrag("buttonType"&#x5B;,"buttonType"...&#x5D;)](API Frame RegisterForDrag) - Inidicate that this frame should be notified of drag events for the specified buttons.
   [CheckButton:SetBackdrop(&#x5B;backdropTable&#x5D;)](API Frame SetBackdrop) - Set the backdrop of the frame according to the specification provided.
   [CheckButton:SetBackdropBorderColor(r,g,b&#x5B;,a&#x5D;)](API Frame SetBackdropBorderColor) - Set the frame's backdrop's border's color.
   [CheckButton:SetBackdropColor(r,g,b&#x5B;,a&#x5D;)](API Frame SetBackdropColor) - Set the frame's backdrop color.
   [CheckButton:SetClampedToScreen](API Frame SetClampedToScreen)
   [CheckButton:SetFrameLevel(level)](API Frame SetFrameLevel) - Set the level of this frame (determines which of overlapping frames shows on top).
   [CheckButton:SetFrameStrata("strata")](API Frame SetFrameStrata) - Set the strata of this frame.
   [CheckButton:SetHitRectInsets](API Frame SetHitRectInsets)
   [CheckButton:SetID(id)](API Frame SetID) - Set the ID of this frame.
   [CheckButton:SetMaxResize(maxWidth,maxHeight)](API Frame SetMaxResize) - Set the maximum dimensions this frame can be resized to.
   [CheckButton:SetMinResize(minWidth,minHeight)](API Frame SetMinResize) - Set the minimum dimensions this frame can be resized to.
   [CheckButton:SetMovable(isMovable)](API Frame SetMovable) - Set whether the frame can be moved.
   [CheckButton:SetResizable(isResizable)](API Frame SetResizable) - Set whether the frame can be resized.
   [CheckButton:SetScale(scale)](API Frame SetScale) - Set the scale factor of this frame relative to its parent.
   [CheckButton:SetScript("handler",function)](API Frame SetScript) - Set the function to use for a handler on this frame.
   [CheckButton:SetToplevel](API Frame SetToplevel)
   [CheckButton:SetUserPlaced(isUserPlaced)](API Frame SetUserPlaced) - Set whether the frame has been relocated by the user (and will thus be saved in the layout cache).
   [CheckButton:StartMoving()](API Frame StartMoving) - Start moving this frame.
   [CheckButton:StartSizing("point")](API Frame StartSizing) - Start sizing this frame using the specified anchor point.
   [CheckButton:StopMovingOrSizing()](API Frame StopMovingOrSizing) - Stop moving and/or sizing this frame.
   [CheckButton:UnregisterAllEvents()](API Frame UnregisterAllEvents) - Indicate that this frame should no longer be notified when any events occur.
   [CheckButton:UnregisterEvent("event")](API Frame UnregisterEvent) - Indicate that this frame should no longer be notified when event occurs.

## Inherited Button Methods
[Button object summary](UISUMMARY Button)

   [CheckButton:Click()](API Button Click) - Execute the click action of the button.
   [CheckButton:Disable()](API Button Disable) - Disable the Button so that it cannot be clicked.
   [CheckButton:Enable()](API Button Enable) - Enable to the Button so that it may be clicked.
   [CheckButton:GetButtonState()](API Button GetButtonState) - Return the current state ("PUSHED","NORMAL") of the Button.
   [CheckButton:GetDisabledFontObject()](API Button GetDisabledFontObject) - Return the font object for the Button when disabled - New in 1.10.
   [CheckButton:GetDisabledTextColor](API Button GetDisabledTextColor)
   [CheckButton:GetDisabledTexture](API Button GetDisabledTexture)
   [CheckButton:GetFont()](API Button GetFont) - Returns the font, size, and flags currently used for display on the Button.
   [CheckButton:GetFontString](API Button GetFontString)
   [CheckButton:GetHighlightFontObject()](API Button GetHighlightFontObject) - Return the font object for the Button when highlighted - New in 1.10.
   [CheckButton:GetHighlightTextColor](API Button GetHighlightTextColor)
   [CheckButton:GetHighlightTexture](API Button GetHighlightTexture)
   [CheckButton:GetNormalTexture](API Button GetNormalTexture)
   [CheckButton:GetPushedTextOffset](API Button GetPushedTextOffset)
   [CheckButton:GetPushedTexture](API Button GetPushedTexture)
   [CheckButton:GetText()](API Button GetText) - Get the text label for the Button.
   [CheckButton:GetTextColor](API Button GetTextColor)
   [CheckButton:GetTextFontObject()](API Button GetTextFontObject) - Return the font object for the Button's normal text - New in 1.10.
   [CheckButton:GetTextHeight()](API Button GetTextHeight) - Get the height of the Button's text.
   [CheckButton:GetTextWidth()](API Button GetTextWidth) - Get the width of the Button's text.
   [CheckButton:IsEnabled()](API Button IsEnabled) - Determine whether the Button is enabled.
   [CheckButton:LockHighlight()](API Button LockHighlight) - Set the Button to always be drawn highlighted.
   [CheckButton:RegisterForClicks("clickType"&#x5B;,"clickType"...&#x5D;)](API Button RegisterForClicks) - Indicate which types of clicks this Button should receive.
   [CheckButton:SetButtonState("state"&#x5B;,lock&#x5D;)](API Button SetButtonState) - Set the state of the Button ("PUSHED", "NORMAL") and whether it is locked.
   [CheckButton:SetDisabledFontObject(&#x5B;font&#x5D;)](API Button SetDisabledFontObject) - Set the font object for settings when disabled - New in 1.10.
   [CheckButton:SetDisabledTextColor(r,g,b&#x5B;,a&#x5D;)](API Button SetDisabledTextColor) - Set the disabled text color for the Button.
   [CheckButton:SetDisabledTexture(texture or "texturePath")](API Button SetDisabledTexture) - Set the disabled texture for the Button - Updated in 1.10.
   [CheckButton:SetFont("font",size&#x5B;,"flags"&#x5D;)](API Button SetFont) - Set the font to use for display.
   [CheckButton:SetFontString](API Button SetFontString)
   [CheckButton:SetHighlightFontObject(&#x5B;font&#x5D;)](API Button SetHighlightFontObject) - Set the font object for settings when highlighted - New in 1.10.
   [CheckButton:SetHighlightTextColor(r,g,b&#x5B;,a&#x5D;)](API Button SetHighlightTextColor) - Set the highlight text color for the Button.
   [CheckButton:SetHighlightTexture(texture or "texturePath")](API Button SetHighlightTexture) - Set the highlight texture for the Button - Updated in 1.10.
   [CheckButton:SetNormalTexture(texture or "texturePath")](API Button SetNormalTexture) - Set the normal texture for the Button - Updated in 1.10.
   [CheckButton:SetPushedTextOffset](API Button SetPushedTextOffset)
   [CheckButton:SetPushedTexture(texture or "texturePath")](API Button SetPushedTexture) - Set the pushed texture for the Button - Updated in 1.10.
   [CheckButton:SetText("text")](API Button SetText) - Set the text label for the Button.
   [CheckButton:SetTextColor(r,g,b)](API Button SetTextColor) - Set the text color for the Button.
   [CheckButton:SetTextFontObject(&#x5B;font&#x5D;)](API Button SetTextFontObject) - Set the font object from which to get settings for this Button's normal state - New in 1.10.
   [CheckButton:UnlockHighlight()](API Button UnlockHighlight) - Set the Button to not always be drawn highlighted.

## CheckButton Methods
   [CheckButton:GetChecked()](API CheckButton GetChecked) - Get the status of the checkbox.
   [CheckButton:GetCheckedTexture](API CheckButton GetCheckedTexture)
   [CheckButton:GetDisabledCheckedTexture](API CheckButton GetDisabledCheckedTexture)
   [CheckButton:SetChecked(&#x5B;state&#x5D;)](API CheckButton SetChecked) - Set the status of the checkbox.
   [CheckButton:SetCheckedTexture("texture")](API CheckButton SetCheckedTexture) - Set the texture to use for a checked box.
   [CheckButton:SetDisabledCheckedTexture("texture")](API CheckButton SetDisabledCheckedTexture) - Set the texture to use for an unchecked box.

# Script Handlers
## Inherited Frame Script Handlers
[Frame object summary](UISUMMARY Frame)

   [OnChar](API HANDLER OnChar)
   [OnDragStart](API HANDLER OnDragStart)
   [OnDragStop](API HANDLER OnDragStop)
   [OnEnter](API HANDLER OnEnter)
   [OnEvent](API HANDLER OnEvent)
   [OnHide](API HANDLER OnHide)
   [OnKeyDown](API HANDLER OnKeyDown)
   [OnKeyUp](API HANDLER OnKeyUp)
   [OnLeave](API HANDLER OnLeave)
   [OnLoad](API HANDLER OnLoad)
   [OnMouseDown](API HANDLER OnMouseDown)
   [OnMouseUp](API HANDLER OnMouseUp)
   [OnMouseWheel](API HANDLER OnMouseWheel)
   [OnReceiveDrag](API HANDLER OnReceiveDrag)
   [OnShow](API HANDLER OnShow)
   [OnSizeChanged](API HANDLER OnSizeChanged)
   [OnUpdate](API HANDLER OnUpdate)

## Inherited Button Script Handlers
[Button object summary](UISUMMARY Button)

   [OnClick](API HANDLER OnClick)
   [OnDoubleClick](API HANDLER OnDoubleClick)
