---
title: "Widget API"
url: "https://turtle-wow.fandom.com/wiki/Widget_API"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T13:00:52Z"
fetched: "2026-09-10T07:40:00Z"
is_turtle_content: false
patch: null
categories: ["Widget"]
---
# Widget API

This is a list of all of the Widget functions found by scanning the in-game environment. This derivation has been performed independently by at least two people ([Lego](User:Lego) and [Flickering](User:Flickering)) so there's a high degree of confidence the list is correct.

This list is current as of patch 0.11.0-5428 (11100). -- [Flickering](User:Flickering) 23:08, 19 Jun 2006 (PDT)

A list of Widget Events may be found at the [Widget Handlers](Widget script handlers) page.

## Root Widgets
### UIObject
This is an abstract UI object type which cannot actually be created. It's a base of all UI objects and gathers together some of common methods which have identical behaviours across all widget types. See [UIObject object information](UIOBJECT UIObject) for details.

   [UIObject:GetAlpha](API UIObject GetAlpha)() - Return this object's alpha (transparency) value.
   [UIObject:GetName](API UIObject GetName)() - Return the name of the object.
   [UIObject:GetObjectType](API UIObject GetObjectType)() - Get the type of this object.
   [UIObject:IsObjectType](API UIObject IsObjectType)("type") - Determine if this object is of the specified type, or a subclass of that type.
   [UIObject:SetAlpha](API UIObject SetAlpha)(alpha) - Set the object's alpha (transparency) value.

## UIObject Derivatives
### FontInstance
This is another abstract object type that groups together a number of font related methods that are used by multiple other widget types. This doesn't have a direct correlation to a UI object. See [FontInstance object information](UIOBJECT FontInstance) for details.

FontInstance has all of the methods from [UIObject](Widget API#UIObject), plus the following:

   [FontInstance:GetFont](API FontInstance GetFont)() - Return the font file, height, and flags.
   [FontInstance:GetFontObject](API FontInstance GetFontObject)() - Return the 'parent' Font object, or nil if none.
   [FontInstance:GetJustifyH](API FontInstance GetJustifyH)() - Return the horizontal text justification.
   [FontInstance:GetJustifyV](API FontInstance GetJustifyV)() - Return thevertical text justification.
   [FontInstance:GetShadowColor](API FontInstance GetShadowColor)() - Returns the color of text shadow (r, g, b, a).
   [FontInstance:GetShadowOffset](API FontInstance GetShadowOffset)() - Returns the text shadow offset (x, y).
   [FontInstance:GetSpacing](API FontInstance GetSpacing)() - Returns the text spacing.
   [FontInstance:GetTextColor](API FontInstance GetTextColor)() - Returns the default text color.
   [FontInstance:SetFont](API FontInstance SetFont)("path", height[,"flags"]) - Sets the font to use for text, returns 1 if the path was valid, nil otherwise (no change occurs).
   [FontInstance:SetFontObject](API FontInstance SetFontObject)(fontObject) - Sets the 'parent' Font object from which this object inherits properties.
   [FontInstance:SetJustifyH](API FontInstance SetJustifyH)("justifyH") - Sets horizontal text justification ("LEFT","RIGHT", or "CENTER")
   [FontInstance:SetJustifyV](API FontInstance SetJustifyV)("justifyV") - Sets vertical text justification ("TOP","BOTTOM", or "MIDDLE")
   [FontInstance:SetShadowColor](API FontInstance SetShadowColor)(r, g, b[, a]) - Sets the text shadow color.
   [FontInstance:SetShadowOffset](API FontInstance SetShadowOffset)(x, y) - Sets the text shadow offset.
   [FontInstance:SetSpacing](API FontInstance SetSpacing)(spacing) - Sets the spacing between lines of text in the object.
   [FontInstance:SetTextColor](API FontInstance SetTextColor)(r, g, b[, a]) - Sets the default text color.

### Region
This is an abstract object type which cannot actually be created. It gathers together a number of common methods which have identical behaviours across all widget types. Note that it is not directly related to Frame:GetRegions() et al. See [Region object information](UIOBJECT Region) for details.

Region has all of the methods from [UIObject](Widget API#UIObject), plus the following:

   [Region:ClearAllPoints](API Region ClearAllPoints)() - Clear all attachment points for this object.
   [Region:GetBottom](API Region GetBottom)() - Get the y location of the bottom edge of this frame - Moved in 1.10.
   [Region:GetCenter](API Region GetCenter)() - Get the coordinates of the center of this frame - Moved in 1.10.
   [Region:GetHeight](API Region GetHeight)() - Get the height of this object.
   [Region:GetLeft](API Region GetLeft)() - Get the x location of the left edge of this frame - Moved in 1.10.
   [Region:GetNumPoints](API Region GetNumPoints)() - Get the number of anchor points for this frame - New in 1.10.
   [Region:GetParent](API Region GetParent)() - Get the parent of this frame (The object, not just the name) - Moved in 1.10.
   [Region:GetPoint](API Region GetPoint)(pointNum) - Get details for an anchor point for this frame (point, relativeTo, relativePoint, xofs, yofs) - New in 1.10.
   [Region:GetRight](API Region GetRight)() - Get the x location of the right edge of this frame - Moved in 1.10.
   [Region:GetTop](API Region GetTop)() - Get the y location of the top edge of this frame - Moved in 1.10.
   [Region:GetWidth](API Region GetWidth)() - Get the width of this object.
   [Region:Hide](API Region Hide)() - Set this object to hidden (it and all of its children will disappear).
   [Region:IsShown](API Region IsShown)() - Determine if this object is shown (would be visible if its parent was visible).
   [Region:IsVisible](API Region IsVisible)() - Get whether the object is visible on screen (logically (IsShown() and GetParent():IsVisible()));
   [Region:SetAllPoints](API Region SetAllPoints)(frame or "frameName") - Set all anchors to match edges of specified frame - Moved in 1.10.
   [Region:SetHeight](API Region SetHeight)(height) - Set the height of the object.
   [Region:SetParent](API Region SetParent)(parent or "parentName") - Set the parent for this frame - Moevd in 1.10.
   [Region:SetPoint](API Region SetPoint)("point","relativeFrame" or relativeObject,"relativePoint"[, xOfs, yOfs]) - Set an attachment point of this object - Updated in 1.10.
   [Region:SetWidth](API Region SetWidth)(width) - Set the width of the object.
   [Region:Show](API Region Show)() - Set this object to shown (it will appear if its parent is visible).

## FontInstance Derivatives
### Font
This object was introduced in 1.10 to replace virtual FontStrings, it allows for dynamic inheritance of font template changes. The standard UI fonts such as GameFontNormal are now Font objects. See [Font object information](UIOBJECT Font) for details.

Font has all of the methods from [UIObject](Widget API#UIObject) and [FontInstance](Widget API#FontInstance), plus the following:

   [Font:CopyFontObject](API Font CopyFontObject)(otherFont) - Set this Font's attributes to be a copy of the otherFont font object's.

The following [Frame Derivatives](Widget API#Frame Derivatives) also inherit all of the functions of the [FontInstance](Widget API#FontInstance) type:

- [EditBox](Widget API#EditBox)
- [MessageFrame](Widget API#MessageFrame)
- [ScrollingMessageFrame](Widget API#ScrollingMessageFrame)

The following [LayeredRegion Derivatives](Widget API#LayeredRegion Derivatives) also inherit all of the functions of the [FontInstance](Widget API#FontInstance) type:

- [FontString](Widget API#FontString)

## Region Derivatives
### Frame
See [Frame object information](UIOBJECT Frame) for details.

Frame has all of the methods from [UIObject](Widget API#UIObject) and [Region](Widget API#Region), plus the following:

   [Frame:CreateFontString](API Frame CreateFontString)(["name"[,"layer"[,"inheritsFrom"]]]) - Create and return a new FontString as a child of this Frame - Can instantiate virtuals in 1.11.
   [Frame:CreateTexture](API Frame CreateTexture)(["name"[,"layer"]][,"inheritsFrom"]) - Create and return a new Texture as a child of this Frame - Can instantiate virtuals in 1.11.
   [Frame:CreateTitleRegion](API Frame CreateTitleRegion)() - Create a title region for the frame if it does not have one. - New in 1.11
   [Frame:DisableDrawLayer](API Frame DisableDrawLayer)("layer") - Disable rendering of "regions" (fontstrings, textures) in the specified draw layer.
   [Frame:EnableDrawLayer](API Frame EnableDrawLayer)("layer") - Enable rendering of "regions" (fontstrings, textures) in the specified draw layer.
   [Frame:EnableKeyboard](API Frame EnableKeyboard)(enableFlag) - Set whether this frame will get keyboard input.
   [Frame:EnableMouse](API Frame EnableMouse)(enableFlag) - Set whether this frame will get mouse input.
   [Frame:EnableMouseWheel](API Frame EnableMouseWheel)(enableFlag) - Set whether this frame will get mouse wheel notifications.
   [Frame:GetBackdrop](API Frame GetBackdrop)() - Creates and returns a backdrop table suitable for use in SetBackdrop - New in 1.11.
   [Frame:GetBackdropBorderColor](API Frame GetBackdropBorderColor)() - Gets the frame's backdrop border color (r, g, b, a)- New in 1.11.
   [Frame:GetBackdropColor](API Frame GetBackdropColor)() - Gets the frame's backdrop color (r, g, b, a)- New in 1.11.
   [Frame:GetChildren](API Frame GetChildren)() - Get the list of "children" (frames and things derived from frames) of this frame.
   [Frame:GetEffectiveScale](API Frame GetEffectiveScale)() - Get the scale factor of this object relative to the root window.
   [Frame:GetFrameLevel](API Frame GetFrameLevel)() - Get the level of this frame.
   [Frame:GetFrameStrata](API Frame GetFrameStrata)() - Get the strata of this frame.
   [Frame:GetFrameType](API Frame GetFrameType)() - Get the type of this frame.
   [Frame:GetHitRectInsets](API Frame GetHitRectInsets)() - Gets the frame's hit rectangle inset distances (l, r, t, b) - new in 1.11.
   [Frame:GetID](API Frame GetID)() - Get the ID of this frame.
   [Frame:GetMaxResize](API Frame GetMaxResize)() - Gets the frame's maximum allowed resize bounds (w, h) - new in 1.11.
   [Frame:GetMinResize](API Frame GetMinResize)() - Gets the frame's minimum allowed resize bounds (w, h) - new in 1.11.
   [Frame:GetNumChildren](API Frame GetNumChildren)() - Get the number of "children" (frames and things derived from frames) this frame has.
   [Frame:GetNumRegions](API Frame GetNumRegions)() - Return the number of "regions" (fontstrings, textures) belonging to this frame.
   [Frame:GetRegions](API Frame GetRegions)() - Return the "regions" (fontstrings, textures) of the frame (multiple return values) belonging to this frame.
   [Frame:GetScale](API Frame GetScale)() - Get the scale factor of this object relative to its parent.
   [Frame:GetScript](API Frame GetScript)("handler") - Get the function for one of this frame's handlers.
   [Frame:GetTitleRegion](API Frame GetTitleRegion)() - Return the frame's title region - New in 1.11.
   [Frame:HasScript](API Frame HasScript)("handler") - Return true if the frame can be given a handler of the specified type (NOT whether it actually HAS one, use GetScript for that) - Since 1.8.
   [Frame:IsClampedToScreen](API Frame IsClampedToScreen)() - Gets whether the frame is prohibited from being dragged off screen - New in 1.11.
   [Frame:IsFrameType](API Frame IsFrameType)("type") - Determine if this frame is of the specified type, or a subclass of that type.
   [Frame:IsKeyboardEnabled](API Frame IsKeyboardEnabled)() - Get whether this frame will get keyboard input. - New in 1.11.
   [Frame:IsMouseEnabled](API Frame IsMouseEnabled)() - Get whether this frame will get mouse input. - New in 1.11.
   [Frame:IsMouseWheelEnabled](API Frame IsMouseWheelEnabled)() - Get whether this frame will get mouse wheel notifications. New in 1.11.
   [Frame:IsMovable](API Frame IsMovable)() - Determine if the frame can be moved.
   [Frame:IsResizable](API Frame IsResizable)() - Determine if the frame can be resized.
   [Frame:IsToplevel](API Frame IsToplevel)() - Get whether the frame is set as toplevel - New in 1.10.2.
   [Frame:IsUserPlaced](API Frame IsUserPlaced)() - Determine if this frame has been relocated by the user.
   [Frame:Lower](API Frame Lower)() - Lower this frame behind other frames.
   [Frame:Raise](API Frame Raise)() - Raise this frame above other frames.
   [Frame:RegisterAllEvents](API Frame RegisterAllEvents)() - Register this frame to receive all events (For debugging purposes only!) - New in 1.11.
   [Frame:RegisterEvent](API Frame RegisterEvent)("event") - Indicate that this frame should be notified when event occurs.
   [Frame:RegisterForDrag](API Frame RegisterForDrag)("buttonType"[,"buttonType"...]) - Inidicate that this frame should be notified of drag events for the specified buttons.
   [Frame:SetBackdrop](API Frame SetBackdrop)([backdropTable]) - Set the backdrop of the frame according to the specification provided.
   [Frame:SetBackdropBorderColor](API Frame SetBackdropBorderColor)(r, g, b[, a]) - Set the frame's backdrop's border's color.
   [Frame:SetBackdropColor](API Frame SetBackdropColor)(r, g, b[, a]) - Set the frame's backdrop color.
   [Frame:SetClampedToScreen](API Frame SetClampedToScreen)(clamped) - Set whether the frame is prohibited from being dragged off screen - New in 1.11.
   [Frame:SetFrameLevel](API Frame SetFrameLevel)(level) - Set the level of this frame (determines which of overlapping frames shows on top).
   [Frame:SetFrameStrata](API Frame SetFrameStrata)("strata") - Set the strata of this frame.
   [Frame:SetHitRectInsets](API Frame SetHitRectInsets)(left, right, top, bottom) - Set the inset distances for the frame's hit rectangle - New in 1.11.
   [Frame:SetID](API Frame SetID)(id) - Set the ID of this frame.
   [Frame:SetMaxResize](API Frame SetMaxResize)(maxWidth, maxHeight) - Set the maximum dimensions this frame can be resized to.
   [Frame:SetMinResize](API Frame SetMinResize)(minWidth, minHeight) - Set the minimum dimensions this frame can be resized to.
   [Frame:SetMovable](API Frame SetMovable)(isMovable) - Set whether the frame can be moved.
   [Frame:SetResizable](API Frame SetResizable)(isResizable) - Set whether the frame can be resized.
   [Frame:SetScale](API Frame SetScale)(scale) - Set the scale factor of this frame relative to its parent.
   [Frame:SetScript](API Frame SetScript)("handler", function) - Set the function to use for a handler on this frame.
   [Frame:SetToplevel](API Frame SetToplevel)(isTopLevel) - Set whether the frame should raise itself when clicked - New in 1.10.2.
   [Frame:SetUserPlaced](API Frame SetUserPlaced)(isUserPlaced) - Set whether the frame has been relocated by the user (and will thus be saved in the layout cache).
   [Frame:StartMoving](API Frame StartMoving)() - Start moving this frame.
   [Frame:StartSizing](API Frame StartSizing)("point") - Start sizing this frame using the specified anchor point.
   [Frame:StopMovingOrSizing](API Frame StopMovingOrSizing)() - Stop moving and/or sizing this frame.
   [Frame:UnregisterAllEvents](API Frame UnregisterAllEvents)() - Indicate that this frame should no longer be notified when any events occur.
   [Frame:UnregisterEvent](API Frame UnregisterEvent)("event") - Indicate that this frame should no longer be notified when event occurs.

### LayeredRegion
Another abstract type, for objects that represent only a rendering process onto the screen, rather than a full blown frame. (See [LayeredRegion object information](UIOBJECT LayeredRegion) for details) LayeredRegion has all of the methods from [UIObject](Widget API#UIObject) and [Region](Widget API#Region), plus the following:

   [LayeredRegion:GetDrawLayer](API LayeredRegion GetDrawLayer)() - Returns the draw layer for the Region - New in 1.10.
   [LayeredRegion:SetDrawLayer](API LayeredRegion SetDrawLayer)("layer") - Sets the draw layer for the Region - New in 1.10.
   [LayeredRegion:SetVertexColor](API LayeredRegion SetVertexColor)(r, g, b[, alpha])

## Frame Derivatives
### Button
See [Button object information](UIOBJECT Button) for details.

Button has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [Button:Click](API Button Click)() - Execute the click action of the button.
   [Button:Disable](API Button Disable)() - Disable the Button so that it cannot be clicked.
   [Button:Enable](API Button Enable)() - Enable to the Button so that it may be clicked.
   [Button:GetButtonState](API Button GetButtonState)() - Return the current state ("PUSHED","NORMAL") of the Button.
   [Button:GetDisabledFontObject](API Button GetDisabledFontObject)() - Return the font object for the Button when disabled - New in 1.10.
   [Button:GetDisabledTextColor](API Button GetDisabledTextColor)() - Get the color of this button's text when disabled (r, g, b, a) - New in 1.11.
   [Button:GetDisabledTexture](API Button GetDisabledTexture)() - Get the texture for this button when disabled - New in 1.11.
   [Button:GetFont](API Button GetFont)() - Returns the font, size, and flags currently used for display on the Button.
   [Button:GetFontString](API Button GetFontString)() - Get this button's label FontString - New in 1.11.
   [Button:GetHighlightFontObject](API Button GetHighlightFontObject)() - Return the font object for the Button when highlighted - New in 1.10.
   [Button:GetHighlightTextColor](API Button GetHighlightTextColor)() - Get the color of this button's text when highlighted (r, g, b, a) - New in 1.11.
   [Button:GetHighlightTexture](API Button GetHighlightTexture)() - Get the texture for this button when highlighted - New in 1.11.
   [Button:GetNormalTexture](API Button GetNormalTexture)() - Get the normal texture for this button - New in 1.11.
   [Button:GetPushedTextOffset](API Button GetPushedTextOffset)() - Get the text offset when this button is pushed (x, y) - New in 1.11.
   [Button:GetPushedTexture](API Button GetPushedTexture)() - Get the texture for this button when pushed - New in 1.11.
   [Button:GetText](API Button GetText)() - Get the text label for the Button.
   [Button:GetTextColor](API Button GetTextColor)() - Get the normal color of this button's text (r, g, b, a) - New in 1.11.
   [Button:GetTextFontObject](API Button GetTextFontObject)() - Return the font object for the Button's normal text - New in 1.10.
   [Button:GetTextHeight](API Button GetTextHeight)() - Get the height of the Button's text.
   [Button:GetTextWidth](API Button GetTextWidth)() - Get the width of the Button's text.
   [Button:IsEnabled](API Button IsEnabled)() - Determine whether the Button is enabled.
   [Button:LockHighlight](API Button LockHighlight)() - Set the Button to always be drawn highlighted.
   [Button:RegisterForClicks](API Button RegisterForClicks)("clickType"[,"clickType"...]) - Specify which mouse button up/down actions cause this button to receive an OnClick notification.
   [Button:SetButtonState](API Button SetButtonState)("state"[, lock]) - Set the state of the Button ("PUSHED", "NORMAL") and whether it is locked.
   [Button:SetDisabledFontObject](API Button SetDisabledFontObject)([font]) - Set the font object for settings when disabled - New in 1.10.
   [Button:SetDisabledTextColor](API Button SetDisabledTextColor)(r, g, b[, a]) - Set the disabled text color for the Button.
   [Button:SetDisabledTexture](API Button SetDisabledTexture)(texture or "texturePath") - Set the disabled texture for the Button - Updated in 1.10.
   [Button:SetFont](API Button SetFont)("font", size[,"flags"]) - Set the font to use for display.
   [Button:SetFontString](API Button SetFontString)(fontString) - Set the button's label FontString - New in 1.11.
   [Button:SetHighlightFontObject](API Button SetHighlightFontObject)([font]) - Set the font object for settings when highlighted - New in 1.10.
   [Button:SetHighlightTextColor](API Button SetHighlightTextColor)(r, g, b[, a]) - Set the highlight text color for the Button.
   [Button:SetHighlightTexture](API Button SetHighlightTexture)(texture or "texturePath") - Set the highlight texture for the Button - Updated in 1.10.
   [Button:SetNormalTexture](API Button SetNormalTexture)(texture or "texturePath") - Set the normal texture for the Button - Updated in 1.10.
   [Button:SetPushedTextOffset](API Button SetPushedTextOffset)(x, y) - Set the text offset for this button when pushed - New in 1.11.
   [Button:SetPushedTexture](API Button SetPushedTexture)(texture or "texturePath") - Set the pushed texture for the Button - Updated in 1.10.
   [Button:SetText](API Button SetText)("text") - Set the text label for the Button.
   [Button:SetTextColor](API Button SetTextColor)(r, g, b) - Set the text color for the Button.
   [Button:SetTextFontObject](API Button SetTextFontObject)([font]) - Set the font object from which to get settings for this Button's normal state - New in 1.10.
   [Button:UnlockHighlight](API Button UnlockHighlight)() - Set the Button to not always be drawn highlighted.

### ColorSelect
See [ColorSelect object information](UIOBJECT ColorSelect) for details.

ColorSelect has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [ColorSelect:GetColorHSV](API ColorSelect GetColorHSV)() - Get the HSV values of the selected color.
   [ColorSelect:GetColorRGB](API ColorSelect GetColorRGB)() - Get the RGB values of the selected color.
   [ColorSelect:GetColorValueTexture](API ColorSelect GetColorValueTexture)() - Get the texture used to show color value - new in 1.11.
   [ColorSelect:GetColorValueThumbTexture](API ColorSelect GetColorValueThumbTexture)() - Get the texture for the color value thumb - New in 1.11.
   [ColorSelect:GetColorWheelTexture](API ColorSelect GetColorWheelTexture)() - Get the texture for the color wheel - New in 1.11.
   [ColorSelect:GetColorWheelThumbTexture](API ColorSelect GetColorWheelThumbTexture)() - Get the texture for the color wheel thumb - New in 1.11.
   [ColorSelect:SetColorHSV](API ColorSelect SetColorHSV)(h, s, v) - Set to a specific HSV color.
   [ColorSelect:SetColorRGB](API ColorSelect SetColorRGB)(r, g, b) - Set to a specific RGB color.
   [ColorSelect:SetColorValueTexture](API ColorSelect SetColorValueTexture)(texture or nil) - Set the texture used to show color value - New in 1.11.
   [ColorSelect:SetColorValueThumbTexture](API ColorSelect SetColorValueThumbTexture)(texture or "texture" or nil) - Set the texture for the color value thumb - New in 1.11.
   [ColorSelect:SetColorWheelTexture](API ColorSelect SetColorWheelTexture)(texture or nil) - Set the texture for the color wheel - New in 1.11.
   [ColorSelect:SetColorWheelThumbTexture](API ColorSelect SetColorWheelThumbTexture)(texture or "texture" or nil) - Set the texture for the color wheel thumb - New in 1.11.

### EditBox
See [EditBox object information](UIOBJECT EditBox) for details.

EditBox has all of the methods from [UIObject](Widget API#UIObject), [FontInstance](Widget API#FontInstance), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [EditBox:AddHistoryLine](API EditBox AddHistoryLine)("text") - Add text to the edit history.
   [EditBox:ClearFocus](API EditBox ClearFocus)()
   [EditBox:GetAltArrowKeyMode](API EditBox GetAltArrowKeyMode)() - Return whether only alt+arrow keys work for navigating the edit box, not arrow keys alone.
   [EditBox:GetBlinkSpeed](API EditBox GetBlinkSpeed)() - Gets the blink speed of the EditBox in seconds - New in 1.11.
   [EditBox:GetHistoryLines](API EditBox GetHistoryLines)() - Get the number of history lines for this edit box
   [EditBox:GetInputLanguage](API EditBox GetInputLanguage)() - Get the input language (locale based not in-game)
   [EditBox:GetMaxBytes](API EditBox GetMaxBytes)() - Gets the maximum number bytes allowed in the EditBox - New in 1.11.
   [EditBox:GetMaxLetters](API EditBox GetMaxLetters)() - Gets the maximum number of letters allowed in the EditBox - New in 1.11.
   [EditBox:GetNumLetters](API EditBox GetNumLetters)() - Gets the number of letters in the box.
   [EditBox:GetNumber](API EditBox GetNumber)()
   [EditBox:GetText](API EditBox GetText)() - Get the current text contained in the edit box.
   [EditBox:GetTextInsets](API EditBox GetTextInsets)() - Gets the text display insets for the EditBox - New in 1.11.
   [EditBox:HighlightText](API EditBox HighlightText)([startPos, endPos]) - Set the highlight to all or some of the edit box text.
   [EditBox:Insert](API EditBox Insert)("text") - Insert text into the edit box.
   [EditBox:IsAutoFocus](API EditBox IsAutoFocus)() - Determine if the EditBox has autofocus enabled - New in 1.11.
   [EditBox:IsMultiLine](API EditBox IsMultiLine)() - Determine if the EditBox accepts multiple lines - New in 1.11.
   [EditBox:IsNumeric](API EditBox IsNumeric)() - Determine if the EditBox only accepts numeric input - New in 1.11.
   [EditBox:IsPassword](API EditBox IsPassword)() - Determine if the EditBox performs password masking - New in 1.11.
   [EditBox:SetAltArrowKeyMode](API EditBox SetAltArrowKeyMode)(enable) - Make only alt+arrow keys work for navigating the edit box, not arrow keys alone.
   [EditBox:SetAutoFocus](API EditBox SetAutoFocus)(state) - Set whether or not the editbox will attempt to get input focus when it gets shown (default: yes) - New in 1.11.
   [EditBox:SetBlinkSpeed](API EditBox SetBlinkSpeed)
   [EditBox:SetFocus](API EditBox SetFocus)() - Move input focus (the cursor) to this editbox
   [EditBox:SetHistoryLines](API EditBox SetHistoryLines)() - Set the number of history lines to remember.
   [EditBox:SetMaxBytes](API EditBox SetMaxBytes)(maxBytes) - Set the maximum byte size for entered text.
   [EditBox:SetMaxLetters](API EditBox SetMaxLetters)(maxLetters) - Set the maximum number of letters for entered text.
   [EditBox:SetMultiLine](API EditBox SetMultiLine)(state) - Set the EditBox's multi-line state - New in 1.11.
   [EditBox:SetNumber](API EditBox SetNumber)(number)
   [EditBox:SetNumeric](API EditBox SetNumeric)(state) - Set if the EditBox only accepts numeric input - New in 1.11.
   [EditBox:SetPassword](API EditBox SetPassword)(state) - Set the EditBox's password masking state - New in 1.11.
   [EditBox:SetText](API EditBox SetText)("text") - Set the text contained in the edit box.
   [EditBox:SetTextInsets](API EditBox SetTextInsets)(l, r, t, b)
   [EditBox:ToggleInputLanguage](API EditBox ToggleInputLanguage)()

### GameTooltip
The tooltip automatically resizes itself when its Show() method is called. See [GameTooltip object information](UIOBJECT GameTooltip) for details.

GameTooltip has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [GameTooltip:AddDoubleLine](API GameTooltip AddDoubleLine)(textL, textR, rL, gL, bL, rR, gR, bR)
   [GameTooltip:AddFontStrings](API GameTooltip AddFontStrings)(leftstring, rightstring) - Dynamically expands the size of a tooltip - New in 1.11.
   [GameTooltip:AddLine](API GameTooltip AddLine)
   [GameTooltip:AppendText](API GameTooltip AppendText)("text") - Append text to the end of the first line of the tooltip.
   [GameTooltip:ClearLines](API GameTooltip ClearLines)
   [GameTooltip:FadeOut](API GameTooltip FadeOut)
   [GameTooltip:GetAnchorType](API GameTooltip GetAnchorType)() - Returns the current anchoring type.
   [GameTooltip:IsOwned](API GameTooltip IsOwned)(frame) - Returns true if the tooltip is currently owned by the specified frame - Since 1.8.
   [GameTooltip:NumLines](API GameTooltip NumLines)() - Get the number of lines in the tooltip.
   [GameTooltip:SetAction](API GameTooltip SetAction)(slot) - Shows the tooltip for the specified action button.
   [GameTooltip:SetAuctionCompareItem](API GameTooltip SetAuctionCompareItem)("type", index[, offset])
   [GameTooltip:SetAuctionItem](API GameTooltip SetAuctionItem)("type", index) - Shows the tooltip for the specified auction item.
   [GameTooltip:SetAuctionSellItem](API GameTooltip SetAuctionSellItem)
   [GameTooltip:SetBagItem](API GameTooltip SetBagItem)(bag, slot)
   [GameTooltip:SetBuybackItem](API GameTooltip SetBuybackItem)
   [GameTooltip:SetCraftItem](API GameTooltip SetCraftItem)
   [GameTooltip:SetCraftSpell](API GameTooltip SetCraftSpell)
   [GameTooltip:SetHyperlink](API GameTooltip SetHyperlink)(link) - Shows the tooltip for the specified hyperlink (usually item link).
   [GameTooltip:SetInboxItem](API GameTooltip SetInboxItem)(index) - Shows the tooltip for the specified mail inbox item.
   [GameTooltip:SetInventoryItem](API GameTooltip SetInventoryItem)(unit, slot[, nameOnly])
   [GameTooltip:SetLootItem](API GameTooltip SetLootItem)
   [GameTooltip:SetLootRollItem](API GameTooltip SetLootRollItem)(id) - Shows the tooltip for the specified loot roll item.
   [GameTooltip:SetMerchantCompareItem](API GameTooltip SetMerchantCompareItem)("slot"[, offset])
   [GameTooltip:SetMerchantItem](API GameTooltip SetMerchantItem)
   [GameTooltip:SetMinimumWidth](API GameTooltip SetMinimumWidth)(width) - (Formerly SetMoneyWidth)
   [GameTooltip:SetOwner](API GameTooltip SetOwner)
   [GameTooltip:SetPadding](API GameTooltip SetPadding)
   [GameTooltip:SetPetAction](API GameTooltip SetPetAction)(slot) - Shows the tooltip for the specified pet action.
   [GameTooltip:SetPlayerBuff](API GameTooltip SetPlayerBuff)(buffIndex) - Direct the tooltip to show information about a player's buff.
   [GameTooltip:SetQuestItem](API GameTooltip SetQuestItem)
   [GameTooltip:SetQuestLogItem](API GameTooltip SetQuestLogItem)
   [GameTooltip:SetQuestLogRewardSpell](API GameTooltip SetQuestLogRewardSpell)
   [GameTooltip:SetQuestRewardSpell](API GameTooltip SetQuestRewardSpell)
   [GameTooltip:SetSendMailItem](API GameTooltip SetSendMailItem)
   [GameTooltip:SetShapeshift](API GameTooltip SetShapeshift)(slot) - Shows the tooltip for the specified shapeshift form.
   [GameTooltip:SetSpell](API GameTooltip SetSpell)(spellId, spellbookTabNum) - Shows the tooltip for the specified spell.
   [GameTooltip:SetTalent](API GameTooltip SetTalent)(tabIndex, talentIndex) - Shows the tooltip for the specified talent.
   [GameTooltip:SetText](API GameTooltip SetText)("text", r, g, b[, alphaValue[, textWrap]]) - Set the text of the tooltip.
   [GameTooltip:SetTrackingSpell](API GameTooltip SetTrackingSpell)
   [GameTooltip:SetTradePlayerItem](API GameTooltip SetTradePlayerItem)
   [GameTooltip:SetTradeSkillItem](API GameTooltip SetTradeSkillItem)
   [GameTooltip:SetTradeTargetItem](API GameTooltip SetTradeTargetItem)
   [GameTooltip:SetTrainerService](API GameTooltip SetTrainerService)
   [GameTooltip:SetUnit](API GameTooltip SetUnit)
   [GameTooltip:SetUnitBuff](API GameTooltip SetUnitBuff)("[unitId](unitId)", buffIndex[, raidFilter]) - Shows the tooltip for a unit's buff.
   [GameTooltip:SetUnitDebuff](API GameTooltip SetUnitDebuff)("[unitId](unitId)", buffIndex[, raidFilter]) - Shows the tooltip for a unit's debuff.

### MessageFrame
See [MessageFrame object information](UIOBJECT MessageFrame) for details.

MessageFrame has all of the methods from [UIObject](Widget API#UIObject), [FontInstance](Widget API#FontInstance), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [MessageFrame:AddMessage](API MessageFrame AddMessage)("text", r, g, b, a, holdTime) - Add a message to the frame which will fade eventually.
   [MessageFrame:Clear](API MessageFrame Clear)() - Clear the messages from the frame - New in 1.11.
   [MessageFrame:GetFadeDuration](API MessageFrame GetFadeDuration)() - Gets the fade duration in seconds - New in 1.11.
   [MessageFrame:GetFading](API MessageFrame GetFading)() - Get whether the frame is fading - New in 1.11.
   [MessageFrame:GetInsertMode](API MessageFrame GetInsertMode)() - Get the insert mode for the frame - New in 1.11.
   [MessageFrame:GetTimeVisible](API MessageFrame GetTimeVisible)() - Get the message visibility time in seconds - New in 1.11.
   [MessageFrame:SetFadeDuration](API MessageFrame SetFadeDuration)(seconds) - Set the fade duration - New in 1.11.
   [MessageFrame:SetFading](API MessageFrame SetFading)(status) - Set whether the frame fades messages - New in 1.11.
   [MessageFrame:SetInsertMode](API MessageFrame SetInsertMode)("TOP" or "BOTTOM") - Set where new messages are inserted - New in 1.11.
   [MessageFrame:SetTimeVisible](API MessageFrame SetTimeVisible)(seconds) - Sets the message visibility time - New in 1.11.

### Minimap
See [Minimap object information](UIOBJECT Minimap) for details

- Note: Tracking dots malfunction if you have multiple instances of this widget that are different sizes/zooms.

Minimap has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [Minimap:GetPingPosition](API Minimap GetPingPosition)() - Get the last ping location.
   [Minimap:GetZoom](API Minimap GetZoom)() - Get the current zoom level.
   [Minimap:GetZoomLevels](API Minimap GetZoomLevels)() - Get the maximum zoom level.
   [Minimap:PingLocation](API Minimap PingLocation)(x, y) - Perform a ping at the specified location.
   [Minimap:SetArrowModel](API Minimap SetArrowModel)("file") - Set the file to use for the arrow model - New in 1.11.
   [Minimap:SetBlipTexture](API Minimap SetBlipTexture) - Set the file to use for blips (ObjectIcons)
   [Minimap:SetIconTexture](API Minimap SetIconTexture)
   [Minimap:SetMaskTexture](API Minimap SetMaskTexture)
   [Minimap:SetPlayerModel](API Minimap SetPlayerModel)("file") - Set the file to use for the player model - New in 1.11.
   [Minimap:SetZoom](API Minimap SetZoom)(level) - Set the current zoom level.

### Model
Used to display real 3D-mesh geometry as part of the UI. See [Model object information](UIOBJECT Model) for details.

Model has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [Model:AdvanceTime](API Model AdvanceTime)()
   [Model:ClearFog](API Model ClearFog)() - Removes all fogging effects currently active in rendering.
   [Model:ClearModel](API Model ClearModel)() - Removes all geometry from the Model (i.e. makes it empty)
   [Model:GetFacing](API Model GetFacing)() - Returns the direction the model is facing.
   [Model:GetFogColor](API Model GetFogColor)() - Gets the fog color (r, g, b, a) - New in 1.11.
   [Model:GetFogFar](API Model GetFogFar)() - Gets the fog far distance - New in 1.11.
   [Model:GetFogNear](API Model GetFogNear)() - Gets the fog near distance - New in 1.11.
   [Model:GetLight](API Model GetLight)() - Gets the light specification for the model, returns a list of results compatible with the SetLight method - New in 1.11.
   [Model:GetModel](API Model GetModel)() - Gets the model file for this Model - New in 1.11.
   [Model:GetModelScale](API Model GetModelScale)() - Returns the current mesh scaling factor.
   [Model:GetPosition](API Model GetPosition)() - Returns the current position of the mesh as x, y, z
   [Model:ReplaceIconTexture](API Model ReplaceIconTexture)("texture")
   [Model:SetCamera](API Model SetCamera)(index) - Select a pre-defined camera.
   [Model:SetFacing](API Model SetFacing)(facing) - Set the direction that the model is facing.
   [Model:SetFogColor](API Model SetFogColor)(r, g, b[, a]) - Set the fog color and enable fogging.
   [Model:SetFogFar](API Model SetFogFar)(value) - Set the far-clipping plane distance for fogging.
   [Model:SetFogNear](API Model SetFogNear)(value) - Set the near-clipping plane distance for fogging.
   [Model:SetLight](API Model SetLight)(enabled[, omni, dirX, dirY, dirZ, ambIntensity[, ambR, ambG, ambB[, dirIntensity[, dirR, dirG, dirB]]]]) - Place the light source used for rendering
   [Model:SetModel](API Model SetModel)("file") - Set the mesh that is displayed in the frame.
   [Model:SetModelScale](API Model SetModelScale)(scale) - Sets the scale factor for the mesh before rendering.
   [Model:SetPosition](API Model SetPosition)(x, y, z) - Set the position of the mesh inside the frame's coordinate system.
   [Model:SetSequence](API Model SetSequence)(sequence) - Set the animation to be played.
   [Model:SetSequenceTime](API Model SetSequenceTime)(sequence, time)

### ScrollFrame
See [ScrollFrame object information](UIOBJECT ScrollFrame) for details.

ScrollFrame has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [ScrollFrame:GetHorizontalScroll](API ScrollFrame GetHorizontalScroll)()
   [ScrollFrame:GetHorizontalScrollRange](API ScrollFrame GetHorizontalScrollRange)()
   [ScrollFrame:GetScrollChild](API ScrollFrame GetScrollChild)
   [ScrollFrame:GetVerticalScroll](API ScrollFrame GetVerticalScroll)()
   [ScrollFrame:GetVerticalScrollRange](API ScrollFrame GetVerticalScrollRange)()
   [ScrollFrame:SetHorizontalScroll](API ScrollFrame SetHorizontalScroll)(offset)
   [ScrollFrame:SetScrollChild](API ScrollFrame SetScrollChild)
   [ScrollFrame:SetVerticalScroll](API ScrollFrame SetVerticalScroll)(offset)
   [ScrollFrame:UpdateScrollChildRect](API ScrollFrame UpdateScrollChildRect)()

### ScrollingMessageFrame
See [ScrollingMessageFrame object information](UIOBJECT ScrollingMessageFrame) for details.

ScrollingMessageFrame has all of the methods from [UIObject](Widget API#UIObject), [FontInstance](Widget API#FontInstance), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [ScrollingMessageFrame:AddMessage](API ScrollingMessageFrame AddMessage)("text"[, r, g, b[, id]]) - Add a message to the frame, with an optional color ID.
   [ScrollingMessageFrame:AtBottom](API ScrollingMessageFrame AtBottom)() - Test whether frame is at the bottom.
   [ScrollingMessageFrame:AtTop](API ScrollingMessageFrame AtTop)() - Test whether frame is at the top - New in 1.11.
   [ScrollingMessageFrame:Clear](API ScrollingMessageFrame Clear)() - Clear all lines from the frame.
   [ScrollingMessageFrame:GetCurrentLine](API ScrollingMessageFrame GetCurrentLine)() - Returns the line number that was printed last, starting from 0.
   [ScrollingMessageFrame:GetCurrentScroll](API ScrollingMessageFrame GetCurrentScroll)() -- Returns the amount of messages from the end message (GetNumMessages()) that the user has scrolled.
   [ScrollingMessageFrame:GetFadeDuration](API ScrollingMessageFrame GetFadeDuration)
   [ScrollingMessageFrame:GetFading](API ScrollingMessageFrame GetFading)
   [ScrollingMessageFrame:GetMaxLines](API ScrollingMessageFrame GetMaxLines)() - Get the maximum number of lines the frame can display.
   [ScrollingMessageFrame:GetNumLinesDisplayed](API ScrollingMessageFrame GetNumLinesDisplayed)()
   [ScrollingMessageFrame:GetNumMessages](API ScrollingMessageFrame GetNumMessages)()
   [ScrollingMessageFrame:GetTimeVisible](API ScrollingMessageFrame GetTimeVisible)
   [ScrollingMessageFrame:PageDown](API ScrollingMessageFrame PageDown)()
   [ScrollingMessageFrame:PageUp](API ScrollingMessageFrame PageUp)()
   [ScrollingMessageFrame:ScrollDown](API ScrollingMessageFrame ScrollDown)()
   [ScrollingMessageFrame:ScrollToBottom](API ScrollingMessageFrame ScrollToBottom)()
   [ScrollingMessageFrame:ScrollToTop](API ScrollingMessageFrame ScrollToTop)()
   [ScrollingMessageFrame:ScrollUp](API ScrollingMessageFrame ScrollUp)()
   [ScrollingMessageFrame:SetFadeDuration](API ScrollingMessageFrame SetFadeDuration)(seconds) - Set the fade duration.
   [ScrollingMessageFrame:SetFading](API ScrollingMessageFrame SetFading)([isEnabled]) - Set whether fading is enabled - Renamed in 1.11.
   [ScrollingMessageFrame:SetMaxLines](API ScrollingMessageFrame SetMaxLines)(lines) - Set the maximum number of displayed lines. Tested successfully with values up to a million. Resets the messages already within the frame.
   [ScrollingMessageFrame:SetScrollFromBottom](API ScrollingMessageFrame SetScrollFromBottom)
   [ScrollingMessageFrame:SetTimeVisible](API ScrollingMessageFrame SetTimeVisible)(seconds) - Sets how long lines remain visible.
   [ScrollingMessageFrame:UpdateColorByID](API ScrollingMessageFrame UpdateColorByID)(id, r, g, b)

### SimpleHTML
See [SimpleHTML object information](UIOBJECT SimpleHTML) for details.

SimpleHTML has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

SimpleHTML *appears* to have all the methods of [FontInstance](Widget API#FontInstance), and they can indeed be used in the same way to set the default font, but they all have an optional first parameter for which element's font to set ("h1", "h2", "p", etc).  The Font instance methods are not reflected in the SimpleHTML frame until you SetText on the frame.  It also appears that you can only supply the block elements and not the inline elements (ie Hyperlinks cannot be colored a different color).  Other than that, see FontInstance for documentation of these methods.

   [SimpleHTML:GetFont](API SimpleHTML GetFont)(["element"])
   [SimpleHTML:GetFontObject](API SimpleHTML GetFontObject)(["element"])
   [SimpleHTML:GetHyperlinkFormat](API SimpleHTML GetHyperlinkFormat)() - Set the string.format format to use for displaying hyperlinks - New in 1.11.
   [SimpleHTML:GetJustifyH](API SimpleHTML GetJustifyH)(["element"])
   [SimpleHTML:GetJustifyV](API SimpleHTML GetJustifyV)(["element"])
   [SimpleHTML:GetShadowColor](API SimpleHTML GetShadowColor)(["element"])
   [SimpleHTML:GetShadowOffset](API SimpleHTML GetShadowOffset)(["element"])
   [SimpleHTML:GetSpacing](API SimpleHTML GetSpacing)(["element"])
   [SimpleHTML:GetTextColor](API SimpleHTML GetTextColor)(["element"])
   [SimpleHTML:SetFont](API SimpleHTML SetFont)(["element",] "path", height[,"flags"])
   [SimpleHTML:SetFontObject](API SimpleHTML SetFontObject)(["element",] fontObject)
   [SimpleHTML:SetHyperlinkFormat](API SimpleHTML SetHyperlinkFormat)("format") - Set the string.format format to use for displaying hyperlinks.
   [SimpleHTML:SetJustifyH](API SimpleHTML SetJustifyH)(["element",] "justifyH")
   [SimpleHTML:SetJustifyV](API SimpleHTML SetJustifyV)(["element",] "justifyV")
   [SimpleHTML:SetShadowColor](API SimpleHTML SetShadowColor)(["element",] r, g, b[, a])
   [SimpleHTML:SetShadowOffset](API SimpleHTML SetShadowOffset)(["element",] x, y)
   [SimpleHTML:SetSpacing](API SimpleHTML SetSpacing)(["element",] lineSpacing)
   [SimpleHTML:SetText](API SimpleHTML SetText)("text") - Set the HTML markup to be displayed (note: if there is *any* markup error, it will be displayed as plain text)
   [SimpleHTML:SetTextColor](API SimpleHTML SetTextColor)(["element",] r, g, b[, a])

### Slider
See [Slider object information](UIOBJECT Slider) for details.

Slider has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [Slider:GetMinMaxValues](API Slider GetMinMaxValues)() - Get the current bounds of the slider.
   [Slider:GetOrientation](API Slider GetOrientation)() - Returns "HORIZONTAL" or "VERTICAL".
   [Slider:GetThumbTexture](API Slider GetThumbTexture)() - Get the texture for this slider's thumb - New in 1.11.
   [Slider:GetValue](API Slider GetValue)() - Get the current value of the slider.
   [Slider:GetValueStep](API Slider GetValueStep)() - Get the current step size of the slider.
   [Slider:SetMinMaxValues](API Slider SetMinMaxValues)(min, max) - Set the bounds of the slider.
   [Slider:SetOrientation](API Slider SetOrientation)("orientation") - "HORIZONTAL" or "VERTICAL".
   [Slider:SetThumbTexture](API Slider SetThumbTexture)(texture or "texturePath")
   [Slider:SetValue](API Slider SetValue)(value) - Set the value of the slider. Also causes the thumb to show on the first call.
   [Slider:SetValueStep](API Slider SetValueStep)(value) - Set the step size of the slider.

### StatusBar
See [StatusBar object information](UIOBJECT StatusBar) for details.

StatusBar has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [Frame](Widget API#Frame), plus the following:

   [StatusBar:GetMinMaxValues](API StatusBar GetMinMaxValues)() - Get the current bounds of the bar.
   [StatusBar:GetOrientation](API StatusBar GetOrientation)
   [StatusBar:GetStatusBarColor](API StatusBar GetStatusBarColor)
   [StatusBar:GetStatusBarTexture](API StatusBar GetStatusBarTexture)() - Returns the texture object for the bar - Before 1.11 it returned the filename.
   [StatusBar:GetValue](API StatusBar GetValue)() - Get the current value of the bar.
   [StatusBar:SetMinMaxValues](API StatusBar SetMinMaxValues)(min, max) - Set the bounds of the bar.
   [StatusBar:SetOrientation](API StatusBar SetOrientation)
   [StatusBar:SetStatusBarColor](API StatusBar SetStatusBarColor)(r, g, b[, alpha]) - Set the color of the bar.
   [StatusBar:SetStatusBarTexture](API StatusBar SetStatusBarTexture)("file" or texture[,"layer"]) - Sets the texture of the bar - Added texture as valid arg in 1.11.
   [StatusBar:SetValue](API StatusBar SetValue)(value) - Set the value of the bar.

## Button Derivatives
### CheckButton
See [CheckButton object information](UIOBJECT CheckButton) for details.

CheckButton has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region), [Frame](Widget API#Frame) and [Button](Widget API#Button), plus the following:

   [CheckButton:GetChecked](API CheckButton GetChecked)() - Get the status of the checkbox.
   [CheckButton:GetCheckedTexture](API CheckButton GetCheckedTexture)() - Get the texture used for a checked box - New in 1.11.
   [CheckButton:GetDisabledCheckedTexture](API CheckButton GetDisabledCheckedTexture)() - Get the texture used for a disabled checked box - New in 1.11.
   [CheckButton:SetChecked](API CheckButton SetChecked)([state]) - Set the status of the checkbox.
   [CheckButton:SetCheckedTexture](API CheckButton SetCheckedTexture)(texture) - Set the texture to use for a checked box.
   [CheckButton:SetDisabledCheckedTexture](API CheckButton SetDisabledCheckedTexture)(texture) - Set the texture to use for a disabled but checked box.

### LootButton
(See [LootButton object information](UIOBJECT LootButton) for details) LootButton has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region), [Frame](Widget API#Frame) and [Button](Widget API#Button), plus the following:

   [LootButton:SetSlot](API LootButton SetSlot)(index) - Set which the item to loot if the button is clicked.

## Model Derivatives
### PlayerModel
See [PlayerModel object information](UIOBJECT PlayerModel) for details.

PlayerModel has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region), [Frame](Widget API#Frame) and [Model](Widget API#Model), plus the following:

   [PlayerModel:RefreshUnit](API PlayerModel RefreshUnit)()
   [PlayerModel:SetRotation](API PlayerModel SetRotation)(rotationRadians)
   [PlayerModel:SetUnit](API PlayerModel SetUnit)("[unitId](unitId)")

## PlayerModel Derivatives
### DressUpModel
See [DressUpModel object information](UIOBJECT DressUpModel) for details.

DressUpModel has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region), [Frame](Widget API#Frame), [Model](Widget API#Model) and [PlayerModel](Widget API#PlayerModel), plus the following:

   [DressUpModel:Dress](API DressUpModel Dress)() - Set the model to reflect the character's current inventory.
   [DressUpModel:TryOn](API DressUpModel TryOn)("item") - Add the specified item to the model.
   [DressUpModel:Undress](API DressUpModel Undress)() - Set the model to reflect the character without inventory.

### TabardModel
See [TabardModel object information](UIOBJECT TabardModel) for details.

TabardModel has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region), [Frame](Widget API#Frame), [Model](Widget API#Model) and [PlayerModel](Widget API#PlayerModel), plus the following:

   [TabardModel:CanSaveTabardNow](API TabardModel CanSaveTabardNow)() - Indicate if the tabard can be saved.
   [TabardModel:CycleVariation](API TabardModel CycleVariation)(variationIndex, delta)
   [TabardModel:GetLowerBackgroundFileName](API TabardModel GetLowerBackgroundFileName)
   [TabardModel:GetLowerEmblemFileName](API TabardModel GetLowerEmblemFileName)
   [TabardModel:GetLowerEmblemTexture](API TabardModel GetLowerEmblemTexture)("textureName")
   [TabardModel:GetUpperBackgroundFileName](API TabardModel GetUpperBackgroundFileName)
   [TabardModel:GetUpperEmblemFileName](API TabardModel GetUpperEmblemFileName)
   [TabardModel:GetUpperEmblemTexture](API TabardModel GetUpperEmblemTexture)("textureName")
   [TabardModel:InitializeTabardColors](API TabardModel InitializeTabardColors)()
   [TabardModel:Save](API TabardModel Save)() - Save the tabard.

## LayeredRegion Derivatives
### Texture
See [Texture object information](UIOBJECT Texture) for details.

Texture has all of the methods from [UIObject](Widget API#UIObject), [Region](Widget API#Region) and [LayeredRegion](Widget API#LayeredRegion), plus the following:

   [Texture:GetBlendMode](API Texture GetBlendMode)() - Return the blend mode set by SetBlendMode()
   [Texture:GetTexCoord](API Texture GetTexCoord)() - Gets the 8 texture coordinates that map to the Texture's corners - New in 1.11.
   [Texture:GetTexCoordModifiesRect](API Texture GetTexCoordModifiesRect)() - Get the SetTexCoordModifiesRect setting - New in 1.11
   [Texture:GetTexture](API Texture GetTexture)() - Gets this texture's current texture path.
   [Texture:GetVertexColor](API Texture GetVertexColor)() - Gets the vertex color for the Texture.
   [Texture:IsDesaturated](API Texture IsDesaturated)() - Gets the desaturation state of this Texture. - New in 1.11
   [Texture:SetBlendMode](API Texture SetBlendMode)("mode") - Set the [alphaMode](alphaMode) of the texture.
   [Texture:SetDesaturated](API Texture SetDesaturated)(flag) - Set whether this texture should be displayed with no saturation (**Note**: This has a return value)
   [Texture:SetGradient](API Texture SetGradient)("orientation", minR, minG, minB, maxR, maxG, maxB)
   [Texture:SetGradientAlpha](API Texture SetGradientAlpha)("orientation", minR, minG, minB, minA, maxR, maxG, maxB, maxA)
   [Texture:SetTexCoord](API Texture SetTexCoord)(minX, maxX, minY, maxY or ULx, ULy, LLx, LLy, URx, URy, LRx, LRy) - Set the corner coordinates for texture display.
   [Texture:SetTexCoordModifiesRect](API Texture SetTexCoordModifiesRect)(enableFlag) - Set whether future SetTexCoord operations should modify the display rectangle rather than stretch the texture. - New in 1.11
   [Texture:SetTexture](API Texture SetTexture)("texturePath" or r, g, b[, a]) - Sets the texture to be displayed from a file or to a solid color.

### FontString
See [FontString object information](UIOBJECT FontString) for details.

FontString has all of the methods from [UIObject](Widget API#UIObject), [FontInstance](Widget API#FontInstance), [Region](Widget API#Region) and [LayeredRegion](Widget API#LayeredRegion), plus the following:

Note that FontString:Get/SetWidth() and Get/SetHeight() behave very differently for fontstrings; see the object information.

   [FontString:CanNonSpaceWrap](API FontString CanNonSpaceWrap)() - Get whether long strings without spaces are wrapped or truncated - New in 1.11.
   [FontString:GetStringWidth](API FontString GetStringWidth)() - Returns the width in pixels of the current string in the current font (without line wrapping).
   [FontString:GetText](API FontString GetText)() - Get the displayed text.
   [FontString:SetAlphaGradient](API FontString SetAlphaGradient)(start, length) - Create or remove an alpha gradient over the text.
   [FontString:SetNonSpaceWrap](API FontString SetNonSpaceWrap)(wrapFlag) - Set whether long strings without spaces are wrapped or truncated.
   [FontString:SetText](API FontString SetText)("text") - Set the displayed text.
   [FontString:SetTextHeight](API FontString SetTextHeight)(pixelHeight) - Set the height of the text by scaling graphics (Note: Can distort text).
