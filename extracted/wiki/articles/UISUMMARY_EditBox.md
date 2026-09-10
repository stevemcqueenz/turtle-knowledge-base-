---
title: "UISUMMARY EditBox"
url: "https://turtle-wow.fandom.com/wiki/UISUMMARY_EditBox"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:52:56Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["Widget"]
---
# UISUMMARY EditBox

# Summary
(See [EditBox object information](UIOBJECT EditBox) for details)

# Methods
## Inherited UIObject Methods
[UIObject object summary](UISUMMARY UIObject)

   [UIObject:GetAlpha](API UIObject GetAlpha)
   [UIObject:GetName](API UIObject GetName)
   [UIObject:GetObjectType()](API UIObject GetObjectType) - Get the type of this object - New in 1.10
   [UIObject:IsObjectType("type")](API UIObject IsObjectType) - Determine if this object is of the specified type, or a subclass of that type - New in 1.10.
   [UIObject:SetAlpha](API UIObject SetAlpha)

## Inherited FontInstance Methods
[FontInstance object summary](UISUMMARY FontInstance)

   [FontInstance:GetFont](API FontInstance GetFont)
   [FontInstance:GetFontObject](API FontInstance GetFontObject)
   [FontInstance:GetJustifyH](API FontInstance GetJustifyH)
   [FontInstance:GetJustifyV](API FontInstance GetJustifyV)
   [FontInstance:GetShadowColor](API FontInstance GetShadowColor)
   [FontInstance:GetShadowOffset](API FontInstance GetShadowOffset)
   [FontInstance:GetSpacing](API FontInstance GetSpacing)
   [FontInstance:GetTextColor](API FontInstance GetTextColor)
   [FontInstance:SetFont](API FontInstance SetFont)
   [FontInstance:SetFontObject](API FontInstance SetFontObject)
   [FontInstance:SetJustifyH](API FontInstance SetJustifyH)
   [FontInstance:SetJustifyV](API FontInstance SetJustifyV)
   [FontInstance:SetShadowColor](API FontInstance SetShadowColor)
   [FontInstance:SetShadowOffset](API FontInstance SetShadowOffset)
   [FontInstance:SetSpacing](API FontInstance SetSpacing)
   [FontInstance:SetTextColor](API FontInstance SetTextColor)

## Inherited Region Methods
[Region object summary](UISUMMARY Region)

   [Region:ClearAllPoints](API Region ClearAllPoints)
   [Region:GetBottom](API Region GetBottom)
   [Region:GetCenter](API Region GetCenter)
   [Region:GetHeight](API Region GetHeight)
   [Region:GetLeft](API Region GetLeft)
   [Region:GetNumPoints](API Region GetNumPoints)
   [Region:GetParent](API Region GetParent)
   [Region:GetPoint](API Region GetPoint)
   [Region:GetRight](API Region GetRight)
   [Region:GetTop](API Region GetTop)
   [Region:GetWidth](API Region GetWidth)
   [Region:Hide](API Region Hide)
   [Region:IsShown](API Region IsShown)
   [Region:IsVisible](API Region IsVisible)
   [Region:SetAllPoints](API Region SetAllPoints)
   [Region:SetHeight](API Region SetHeight)
   [Region:SetParent](API Region SetParent)
   [Region:SetPoint](API Region SetPoint)
   [Region:SetWidth](API Region SetWidth)
   [Region:Show](API Region Show)

## Inherited Frame Methods
[Frame object summary](UISUMMARY Frame)

   [Frame:CreateFontString(&#x5B;"name"&#x5B;,"layer"&#x5D;&#x5D;)](API Frame CreateFontString) - Create and return a new FontString as a child of this Frame.
   [Frame:CreateTexture(&#x5B;"name"&#x5B;,"layer"&#x5D;&#x5D;)](API Frame CreateTexture) - Create and return a new Texture as a child of this Frame.
   [Frame:CreateTitleRegion](API Frame CreateTitleRegion)
   [Frame:DisableDrawLayer("layer")](API Frame DisableDrawLayer) - Disable rendering of regions in the specified draw layer.
   [Frame:EnableDrawLayer("layer")](API Frame EnableDrawLayer) - Enable rendering of regions in the specified draw layer.
   [Frame:EnableKeyboard(enableFlag)](API Frame EnableKeyboard) - Set whether this frame will get keyboard input.
   [Frame:EnableMouse(enableFlag)](API Frame EnableMouse) - Set whether this frame will get mouse input.
   [Frame:EnableMouseWheel(enableFlag)](API Frame EnableMouseWheel) - Set whether this frame will get mouse wheel events.
   [Frame:GetBackdrop](API Frame GetBackdrop)
   [Frame:GetBackdropBorderColor](API Frame GetBackdropBorderColor)
   [Frame:GetBackdropColor](API Frame GetBackdropColor)
   [Frame:GetChildren()](API Frame GetChildren) - Get children of this frame.
   [Frame:GetEffectiveScale()](API Frame GetEffectiveScale) - Get the scale factor of this object relative to the root window.
   [Frame:GetFrameLevel()](API Frame GetFrameLevel) - Get the level of this frame.
   [Frame:GetFrameStrata()](API Frame GetFrameStrata) - Get the strata of this frame.
   [Frame:GetFrameType()](API Frame GetFrameType) - Get the type of this frame.
   [Frame:GetHitRectInsets](API Frame GetHitRectInsets)
   [Frame:GetID()](API Frame GetID) - Get the ID of this frame.
   [Frame:GetMaxResize](API Frame GetMaxResize)
   [Frame:GetMinResize](API Frame GetMinResize)
   [Frame:GetNumChildren()](API Frame GetNumChildren) - Get the number of children this frame has.
   [Frame:GetNumRegions()](API Frame GetNumRegions) - Return the number of Regions that are children of this frame.
   [Frame:GetRegions()](API Frame GetRegions) - Return the regions of the frame (multiple return values).
   [Frame:GetScale()](API Frame GetScale) - Get the scale factor of this object relative to its parent.
   [Frame:GetScript("handler")](API Frame GetScript) - Get the function for one of this frame's handlers.
   [Frame:GetTitleRegion](API Frame GetTitleRegion)
   [Frame:HasScript("handler")](API Frame HasScript) - Return true if the frame can be given a handler of the specified type (NOT whether it actually HAS one, use GetScript for that) - Since 1.8.
   [Frame:IsClampedToScreen](API Frame IsClampedToScreen)
   [Frame:IsFrameType("type")](API Frame IsFrameType) - Determine if this frame is of the specified type, or a subclass of that type.
   [Frame:IsKeyboardEnabled](API Frame IsKeyboardEnabled)
   [Frame:IsMouseEnabled](API Frame IsMouseEnabled)
   [Frame:IsMouseWheelEnabled](API Frame IsMouseWheelEnabled)
   [Frame:IsMovable()](API Frame IsMovable) - Determine if the frame can be moved.
   [Frame:IsResizable()](API Frame IsResizable) - Determine if the frame can be resized.
   [Frame:IsToplevel](API Frame IsToplevel)
   [Frame:IsUserPlaced()](API Frame IsUserPlaced) - Determine if this frame has been relocated by the user.
   [Frame:Lower()](API Frame Lower) - Lower this frame behind other frames.
   [Frame:Raise()](API Frame Raise) - Raise this frame above other frames.
   [Frame:RegisterAllEvents](API Frame RegisterAllEvents)
   [Frame:RegisterEvent("event")](API Frame RegisterEvent) - Indicate that this frame should be notified when event occurs.
   [Frame:RegisterForDrag("buttonType"&#x5B;,"buttonType"...&#x5D;)](API Frame RegisterForDrag) - Inidicate that this frame should be notified of drag events for the specified buttons.
   [Frame:SetBackdrop(&#x5B;backdropTable&#x5D;)](API Frame SetBackdrop) - Set the backdrop of the frame according to the specification provided.
   [Frame:SetBackdropBorderColor(r,g,b&#x5B;,a&#x5D;)](API Frame SetBackdropBorderColor) - Set the frame's backdrop's border's color.
   [Frame:SetBackdropColor(r,g,b&#x5B;,a&#x5D;)](API Frame SetBackdropColor) - Set the frame's backdrop color.
   [Frame:SetClampedToScreen](API Frame SetClampedToScreen)
   [Frame:SetFrameLevel(level)](API Frame SetFrameLevel) - Set the level of this frame (determines which of overlapping frames shows on top).
   [Frame:SetFrameStrata("strata")](API Frame SetFrameStrata) - Set the strata of this frame.
   [Frame:SetHitRectInsets](API Frame SetHitRectInsets)
   [Frame:SetID(id)](API Frame SetID) - Set the ID of this frame.
   [Frame:SetMaxResize(maxWidth,maxHeight)](API Frame SetMaxResize) - Set the maximum dimensions this frame can be resized to.
   [Frame:SetMinResize(minWidth,minHeight)](API Frame SetMinResize) - Set the minimum dimensions this frame can be resized to.
   [Frame:SetMovable(isMovable)](API Frame SetMovable) - Set whether the frame can be moved.
   [Frame:SetResizable(isResizable)](API Frame SetResizable) - Set whether the frame can be resized.
   [Frame:SetScale(scale)](API Frame SetScale) - Set the scale factor of this frame relative to its parent.
   [Frame:SetScript("handler",function)](API Frame SetScript) - Set the function to use for a handler on this frame.
   [Frame:SetToplevel](API Frame SetToplevel)
   [Frame:SetUserPlaced(isUserPlaced)](API Frame SetUserPlaced) - Set whether the frame has been relocated by the user (and will thus be saved in the layout cache).
   [Frame:StartMoving()](API Frame StartMoving) - Start moving this frame.
   [Frame:StartSizing("point")](API Frame StartSizing) - Start sizing this frame using the specified anchor point.
   [Frame:StopMovingOrSizing()](API Frame StopMovingOrSizing) - Stop moving and/or sizing this frame.
   [Frame:UnregisterAllEvents()](API Frame UnregisterAllEvents) - Indicate that this frame should no longer be notified when any events occur.
   [Frame:UnregisterEvent("event")](API Frame UnregisterEvent) - Indicate that this frame should no longer be notified when event occurs.

## EditBox Methods
   [EditBox:AddHistoryLine("text")](API EditBox AddHistoryLine) - Add text to the edit history.
   [EditBox:ClearFocus()](API EditBox ClearFocus)
   [EditBox:GetAltArrowKeyMode](API EditBox GetAltArrowKeyMode)
   [EditBox:GetBlinkSpeed](API EditBox GetBlinkSpeed)
   [EditBox:GetHistoryLines()](API EditBox GetHistoryLines) - Get the number of history lines for this edit box
   [EditBox:GetInputLanguage()](API EditBox GetInputLanguage) - Get the input language (locale based not in-game)
   [EditBox:GetMaxBytes](API EditBox GetMaxBytes)
   [EditBox:GetMaxLetters](API EditBox GetMaxLetters)
   [EditBox:GetNumLetters()](API EditBox GetNumLetters) - Gets the number of letters in the box.
   [EditBox:GetNumber()](API EditBox GetNumber)
   [EditBox:GetText()](API EditBox GetText) - Get the current text contained in the edit box.
   [EditBox:GetTextInsets](API EditBox GetTextInsets)
   [EditBox:HighlightText(&#x5B;startPos,endPos&#x5D;)](API EditBox HighlightText) - Set the highlight to all or some of the edit box text.
   [EditBox:Insert("text")](API EditBox Insert) - Insert text into the edit box.
   [EditBox:IsAutoFocus](API EditBox IsAutoFocus)
   [EditBox:IsMultiLine](API EditBox IsMultiLine)
   [EditBox:IsNumeric](API EditBox IsNumeric)
   [EditBox:IsPassword](API EditBox IsPassword)
   [EditBox:SetAltArrowKeyMode](API EditBox SetAltArrowKeyMode)
   [EditBox:SetAutoFocus](API EditBox SetAutoFocus)
   [EditBox:SetBlinkSpeed](API EditBox SetBlinkSpeed)
   [EditBox:SetFocus()](API EditBox SetFocus)
   [EditBox:SetHistoryLines()](API EditBox SetHistoryLines) - Set the number of history lines to remember.
   [EditBox:SetMaxBytes(maxBytes)](API EditBox SetMaxBytes) - Set the maximum byte size for entered text.
   [EditBox:SetMaxLetters(maxLetters)](API EditBox SetMaxLetters) - Set the maximum number of letters for entered text.
   [EditBox:SetMultiLine](API EditBox SetMultiLine)
   [EditBox:SetNumber(number)](API EditBox SetNumber)
   [EditBox:SetNumeric](API EditBox SetNumeric)
   [EditBox:SetPassword](API EditBox SetPassword)
   [EditBox:SetText("text")](API EditBox SetText) - Set the text contained in the edit box.
   [EditBox:SetTextInsets(l,r,t,b)](API EditBox SetTextInsets)
   [EditBox:ToggleInputLanguage()](API EditBox ToggleInputLanguage)

# Script Handlers
## Inherited Frame Script Handlers
[Frame object summary](UISUMMARY Frame)

   [OnChar](UIHANDLER OnChar)
   [OnDragStart](UIHANDLER OnDragStart)
   [OnDragStop](UIHANDLER OnDragStop)
   [OnEnter](UIHANDLER OnEnter)
   [OnEvent](UIHANDLER OnEvent)
   [OnHide](UIHANDLER OnHide)
   [OnKeyDown](UIHANDLER OnKeyDown)
   [OnKeyUp](UIHANDLER OnKeyUp)
   [OnLeave](UIHANDLER OnLeave)
   [OnLoad](UIHANDLER OnLoad)
   [OnMouseDown](UIHANDLER OnMouseDown)
   [OnMouseUp](UIHANDLER OnMouseUp)
   [OnMouseWheel](UIHANDLER OnMouseWheel)
   [OnReceiveDrag](UIHANDLER OnReceiveDrag)
   [OnShow](UIHANDLER OnShow)
   [OnSizeChanged](UIHANDLER OnSizeChanged)
   [OnUpdate](UIHANDLER OnUpdate)

## EditBox Script Handlers
   [OnCursorChanged](UIHANDLER OnCursorChanged)
   [OnEditFocusGained](UIHANDLER OnEditFocusGained)
   [OnEditFocusLost](UIHANDLER OnEditFocusLost)
   [OnEnterPressed](UIHANDLER OnEnterPressed)
   [OnEscapePressed](UIHANDLER OnEscapePressed)
   [OnInputLanguageChanged](UIHANDLER OnInputLanguageChanged)
   [OnSpacePressed](UIHANDLER OnSpacePressed)
   [OnTabPressed](UIHANDLER OnTabPressed)
   [OnTextChanged](UIHANDLER OnTextChanged)
   [OnTextSet](UIHANDLER OnTextSet)
