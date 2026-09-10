---
title: "UIOBJECT EditBox"
url: "https://turtle-wow.fandom.com/wiki/UIOBJECT_EditBox"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:29:55Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# UIOBJECT EditBox

## Edit Box
A user can input text into the edit box which can then be retrieved using the [EditBox:GetText()](API EditBox GetText) function.

When you declare an edit box object make sure that you include a FontString element which defines the Font which is used to display the text inputted into the EditBox:
 <EditBox name="TestEditBox">
       .. Size
       .. Anchors
       .. Layers
       .. etc.
       
       <FontString inherits="GameFontNormal"/>
 </EditBox>
-EditBox will not display any text without the FontString object, just the blinking cursor --[watchout](User:Watchout) (7 June 2006, WoW 1.10)*

## On multi-line and EditBox:SetHeight()
Note that multi-line EditBoxes will ignore any attempts to set its height via [:SetHeight](API Region SetHeight)() or via Dimension attributes in XML. They will start out the height of a single line of text, and keep expanding their area as needed. This effect becomes visible if the editbox has a backdrop set, or a texture anchored to its corners.

Explicitly setting the top and bottom anchors with [:SetPoint](API Region SetPoint)() will however size it like expected.

An EditBox has the following scripts available (not sure if thats all but it's a bunch of em) :

<OnEnterPressed> <OnEscapePressed> <OnSpacePressed> <OnTabPressed> <OnTextChanged> <OnTextSet> <OnInputLanguageChanged>

I think those are self explanatory.
