---
title: "UIOBJECT GameTooltip"
url: "https://turtle-wow.fandom.com/wiki/UIOBJECT_GameTooltip"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-08T05:46:36Z"
fetched: "2026-09-10T07:39:54Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# UIOBJECT GameTooltip

## Introduction
Tooltips are notoriously difficult to handle in WoW UI code, as the interaction of GameTooltip methods can be quite complicated. This page has some examples for the use of tooltips, and a collection of advanced points to note about the finer details. For an indepth analysis of GameTooltip methods, see [Tooltip Pseudo Code](Tooltip Pseudo Code) for a Lua-ish pseudo code representation of every GameTooltip method. See [Widget API](Widget API) for a reference list of all GameTooltip methods.

## Blizzard's GameTooltip
The default Blizzard interface code ([FrameXML](FrameXML)) defines a GameTooltip object called GameTooltip (confusing, eh). This is used as the game's main tooltip. It consists of a number of lines; to determine how many there are, you can call the [GameTooltip:NumLines()](API GameToolTip NumLines) function.  Note that all GameTooltip objects defined in [FrameXML](FrameXML) have a maximum of 30 lines.

The game engine assumes that there is a GameTooltip object called GameTooltip, and that it has a number of known fontstrings in it. The GameTooltip:Set___() methods manipulate the object and its children directly and then show the tooltip object. When you mouse over things in the game world, the game engine internally calls :SetUnit() - not the LUA method. In particular, this means that hooked GameTooltip methods will never trigger for engine-generated tooltips. Hooks will however catch all other tooltips generated from the UI itself. For non-item/unit tooltips you will even see :AddLine and :AddDoubleLine calls.

### GameTooltipTextLeft*&#x3C;num&#x3E;*
Each line of text from the game tooltip is represented by one of these objects, replace &#x3C;num&#x3E; with the appropriate line number (from 1 to the number of lines returned from GameTooltip:NumLines()). To obtain the text of a line call the [GameTooltipTextLeft*&#x3C;num&#x3E;*:GetText()](API FontString GetText) function.

#### Example: Looping through all tooltip lines
 for i=1,GameTooltip:NumLines() do
    local mytext = getglobal("GameTooltipTextLeft" .. i)
    local text = mytext:GetText()
 end

#### Notes
The tooltip displayed when the mouse is hovering over players and/or NPCs on the minimap is such that all the units being displayed are actually only on the first tooltip line.  So, if the tooltip showed 4 players, the names are all in the first tooltip line, delimited by "\n".

### GameTooltipTextRight*&#x3C;num&#x3E;*
Some tooltips have both left- and right-aligned sections. In order to get at the right-aligned section, use one of these objects instead of a GameTooltipTextLeft. Otherwise, the functionality is identical.

## Hidden tooltip for scanning
*(Description valid for patch 1.10)* 

One of the most common uses of a tooltip is to use it to gain information text about an item, buff or spell. Many AddOns define their own tooltip for this purpose. This is a description of the best practice to follow when using a tooltip for this purpose, taking into account the need for performance.

The definition of the tooltip in your XML should look like this:
  <GameTooltip name="MyScanningTooltip" inherits="GameTooltipTemplate">
    <Scripts>
      <Onload>
        this:SetOwner(this, "ANCHOR_NONE");
      </Onload>
    </Scripts>
  </GameTooltip>
Note that the tooltip does not have a parent on purpose, to avoid possible issues with its parent getting hidden/shown. This also avoids a potential issue with SetOwner in an <OnLoad> handler. Also note that the tooltip is initialized with a SetOwner call in the <OnLoad> handler, and its set to be its own owner.

When actually using the tooltip in your code, you need to do:
  MyScanningTooltip:ClearLines()
  MyScanningTooltip:SetX(arguments)
where SetX could be SetInventorySlot, SetBagItem, SetAction, SetUnitBuff etc. The explicit call to MyScanningTooltip:ClearLines() is necessary becuase a SetX call usually doesn't clear the tooltip if called with invalid arguments, e.g. an empty bag slot or nonexistent buff. Care must be taken so that MyScanningTooltip:Show() or MyScanningTooltip:Hide() doesn't get called at any time, otherwise the tooltip becomes unusable. Note that the way SetOwner was called, the tooltip will never be visible on the screen, and therefore it's not necessary to hide it.

### Alternative solution
Instead of the above, here is an alternative solution. It is sufficient to have this in your XML:
  <GameTooltip name="MyScanningTooltip" inherits="GameTooltipTemplate"/>
Each time you want to use the tooltip however, you must explicitly set the owner like this:
  MyScanningTooltip:SetOwner(MyScanningTooltip, "ANCHOR_NONE")
  MyScanningTooltip:SetX(arguments)
  ... extract information from the tooltip ...
  MyScanningTooltip:Hide()
This solution is safer and more robust to potential changes to tooltip behaviour in future patches. However, this solution incurs significant performance penalty. Repeatedly calling MyScanningTooltip:SetOwner in an OnUpdate handler can cause significant frame-rate drop. Hence this solution is recommended for tooltip scans that occur in response to for example key presses, whereas the previous solution is recommended for repeated, frequent scans.

## Advanced Notes on GameTooltip methods
This is a list of the finer details of using tooltips correctly:

*(Entries in bold are significant behaviour changes in patch 1.10 compared to 1.9)*

- Unlike other UI objects, a tooltip has both a parent *and* an owner, the two are completely independent.

- **A tooltip must have an owner to be usable. Therefore you must call SetOwner at least once in the lifetime of a tooltip before you can use it.**
- SetOwner clears tooltip contents and hides the tooltip, making it ready for a SetX call.
- If ANCHOR_NONE is used in SetOwner, and you call SetX without setting the anchors manually first, the equivalent of SetPoint("TOPLEFT", UIParent, #INF, 0) happens (regardless of the ClampedToScreen property), independent of who the owner is.

# The previous property means the tooltip is positioned off-screen, but its contents can be altered as normal.

- SetX erases the existing contents of the tooltip.
- SetX with valid data causes Show to be called.
- SetX with invalid data may or may not clear the tooltip's contents. (e.g. SetBagItem/SetInventorySlot with empty slot leaves tooltip unchanged, but SetAction with empty slot clears its contents).

- Show (and therefore SetX) causes the size of the tooltip to be reevaluated.
- Show (and therefore SetX) causes the anchors of the tooltip to be reset to the one specified in SetOwner, unless it was ANCHOR_NONE.

- **Hide clears the contents of the tooltip and removes its owner. After a Hide, SetOwner must be called again.** 
- **The contents of a hidden tooltip can not be altered using SetX.** 

- AddLine, AddDoubleLine don't call Show, have to call it manually.

- AppendText does call Show.

- ClearLines clears lines by setting all TextLeftX fontstrings to hidden and nil text, and all TextRightX fontstrings to hidden (but leaves text of those intact).
- **Calling Show on a tooltip with zero lines (e.g. immediately after ClearLines) hides it and removes its owner, and therefore makes the tooltip unusable.** 

- **Hiding the parent of the tooltip clears it and removes its owner. SetOwner must be called again.** 
- **Showing the parent of the tooltip causes Show to be called on the tooltip.** 
- **It is therefore recommended practice to not set a parent to your tooltip, and especially not UIParent.** 

- **A tooltip that has a parent="<parentname>" specified in its XML definition can't call SetOwner in the tooltip's <OnLoad> handler.**  (unconfirmed, seems to be true in some cases, so best avoid it)
