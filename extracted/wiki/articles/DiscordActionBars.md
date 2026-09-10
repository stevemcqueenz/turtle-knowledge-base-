---
title: "DiscordActionBars"
url: "https://turtle-wow.fandom.com/wiki/DiscordActionBars"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-25T03:23:26Z"
fetched: "2026-09-10T07:38:39Z"
is_turtle_content: false
patch: null
categories: ["Addon"]
---
# DiscordActionBars

**Discord Action Bars** (DAB) spreads your base 120 action buttons across 10 configurable bars, with custom layouts, profiles, and scripting support.

## Installation
**GitAddonsManager**

The easiest way to keep **DiscordActionBars** up to date is by using [GitAddonsManager](GitAddonsManager).

# **Add the Repository:** Add the following URL to GitAddonsManager: 

- https://github.com/ppodevlabs/DiscordActionBars
- https://github.com/ppodevlabs/DiscordLibrary
- https://github.com/ppodevlabs/DiscordActionBarsOptions
# **Select the Branch:** Ensure that the main branch is selected.
# **Update:** Using GitAddonsManager, you can check for and install updates for all your AddOns with a single click.

**Manual Installation**

If you prefer manual installation, follow these steps:

# Go to the main page of the repository.
# Click the **<> Code** dropdown and download the repository as a <code>.zip</code>.
# Unpack the <code>.zip</code>  into your <code>Interface/AddOns</code> directory .
# Rename:

- DiscordActionBars-main to DiscordActionBars.
- DiscordLibrary-main to DiscordLibrary
- DiscordActionBarsOptions-main to DiscordActionBarsOptions
  5 Restart the game.

**Important**

# This mod *does not use the default UI's keybindings* for the action bars. Scroll down in the keybindings menu until you see the *Discord Action Bars* header. Beneath that is where you set your keybindings. The pet and shapeshift bars still use the default keybindings.
# Do not set the *Use For Shapeshift Form* option on the Main Bar to any form. Why did you think the mod was spamming a warning at you when you tried to do so?
# Discord Action Bars is not compatible with *CT_BarMod* or *CT_BottomBar*. CT_BarMod is the mod making your pet/shapeshift bar disappear and probably the one causing your bag bar to display empty buttons. CT_BottomBar is the mod causing the default UI's art to pop back up when you zone. Either one of them can causes crashes when used with this mod.
# Setting up bars that switch when you shapeshift. It's easy. There's a section in the readme devoted to it. For those too lazy to read the readme, here it is again simplified somewhat:
## Misc Options -> Main Bar For Shapeshifting -> choose a bar number
## Go to that bar's options. Set its appearance options and place it where you want it on-screen. All bars that switch with this bar will use those appearance options and be placed there.
##* If you're a warrior, go to Num Buttons and remove all but 1 button from the bar you set as the Main Bar.
## Press ESC. Click Key Bindings. Scroll down until you see the Discord Action Bars header. Scroll down to the BUTTON KEYBINDINGS header. Find the bar you set as the Main Bar. Set its keybindings. All bars that switch with the main bar will use those keybindings.
## Choose another bar. Set the Use For Shapeshift Form option to the animal form / stance / stealth you want this bar to use. Set the When I Shapeshift option to Swap With Main Bar. Check the Hide option. That's it. You don't have to set a single other option.
## Repeat step 4 for all your shapeshift forms.

## Git Links
- [**(ppodevlabs)**](https://github.com/ppodevlabs/DiscordActionBars) - updated version
- [**(UndercityAddons)**](https://github.com/UndercityAddons-Vanilla/DiscordActionBars) - old version. 

## **Getting Started**
- The first thing to do is install the mod. All you have to do is extract all 3 folders in the zip file straight to your Interface\AddOns folder. Make sure the game isn't running at the time. Mac users: do not use ExtractNow, it tends to change some files into folders and screw everything up.
- You'll notice upon first logging that nothing much changed. However, the default UI's main action bar is now gone. What you see in its place is actually DAB's bar 1. To start configuring DAB, open the options window by typing /dab or /discordactionbars. If you want to hide the default UI's main bar art, click the Main Menu Bar button on the left side of DAB's options window then check the Hide Main Menu Bar Art option at the top.
- It's best to just dive right into the options window and start fiddling with options to see what they do. If an option's effect isn't obvious or it confuses you just look it up in the readme to see if it clears matters up. For further details on configuring DAB see all the various sections below.
- **Keybindings.** It can't be stressed enough: DAB *does not* use the default UI's action button keybindings. You must scroll down past all those until you see the Discord Action Bars header in the keybindings window. That's where you set the keybindings for DAB's buttons.

## Commands
{| class="fandom-table"
!Command
!Description
|-
|<code>/dab</code>
|Toggles display of the options window.
|-
|<code>/dab clearbar barID</code>
|Clears all actions from the specified bar.
|-
|<code>/dab barhide barID</code>
|Hides the specified bar.
|-
|<code>/dab barpage barID page</code>
|Changes the bar's current page to the specified page.
|-
|<code>/dab barshow barID</code>
|Shows the specified bar.
|-
|<code>/dab bartoggle barID</code>
|Toggles the visibility of the specified bar.
|-
|<code>/dab hideallbars</code>
|Hides all action bars except Other Bars.
|-
|<code>/dab showallbars</code>
|Shows all action bars except Other Bars.
|-
|<code>/dab floaterhide floaterID</code>
|Hides the specified floater.
|-
|<code>/dab floatershow floaterID</code>
|Shows the specified floater.
|-
|<code>/dab floatertoggle floaterID</code>
|Toggles visibility of the specified floater.
|-
|<code>/dab setkeygroup keybindinggroupID barID</code>
|Applies a keybinding group to a bar.
|-
|<code>/dab groupshow controlboxgroup</code>
|Shows all objects in the specified control box group.
|-
|<code>/dab grouphide controlboxgroup</code>
|Hides all objects in the specified control box group.
|-
|<code>/dab grouptoggle controlboxgroup</code>
|Toggles visibility of all objects in the control box group.
|-
|<code>/dab drag</code>
|Toggles DAB's dragging lock.
|-
|<code>/dab ids</code>
|Toggles display of button IDs on all buttons.
|-
|<code>/dab actions</code>
|Toggles display of action IDs on all buttons.
|-
|<code>/dab buttonlock</code>
|Toggles button lock on all bars and floaters.
|-
|<code>/dab load profile</code>
|Loads the specified profile for your current character.
|}

## **Options Overview**
To open DAB's options window you simply type /dab.

**When typing a new value in any editbox, remember to hit enter when finished.  The new value will not be applied until you hit enter.**

You'll see a list of bars in the upper-left.  Clicking anything in that area will bring up options for the object you clicked.  That area of the window is a scrolling frame.  You can scroll down to access options for the pet, shapeshift, bag, and menu bars, control boxes, and floaters.

The red buttons beneath the scrolling frame let you bring up options windows that aren't tied to any particular object:

- **Change Actions** - This window will let you drag and drop actions into different action IDs without having to use an action button.
- **Button Layout** - This window is where you set the number of buttons per bar, set the number of pages per bar, create or delete floaters, and define which buttons have which action IDs.
- **Keybindings** - DAB's keybindings are now fully configurable.  This window is where you do it.
- **OnEvent Scripts** - This window is where you can write custom scripts that are run in response to game events.  These scripts aren't tied to any particular object and are unaffected by any object's state.
- **Main Menu Bar** - This window lets you toggle display of parts of the default UI and gives some config options for them.
- **Misc Options** - This window is a set of global options applied to all objects.  It's also where you create and load profiles.
- **Unlock/Lock Dragging** - Clicking this button will unlock all objects (bars, floaters, control boxes, pieces of the main menu bar) so that you can drag them around the screen with the mouse.  Note: dragging sucks.  It's always better to use one of DAB's other movement options (nudge buttons and anchor options).
- **Show/Hide Button IDs** - Clicking this button will toggle display of button IDs in the middle of each of DAB's buttons.
- **Show/Hide Action IDs** - Clicking this button will toggle display of action IDs in the middle of each of DAB's buttons.
- **COPY** - Clicking this button will copy all settings for whatever object (bar, floater, control box) you currently have selected into a buffer.
- **PASTE** - Clicking this button will paste all settings from the buffer into whatever object (bar, floater, control box) you currently have selected.  You can paste between profiles.  Just load one profile, copy an object's settings, load the other profile and paste those settings.Most windows are divided into several tabs at the top.  Clicking on a tab will bring up different sets of options within that window.
All sliders have an editbox attached to them that displays the value the slider is set to.  You can also type a value in this editbox.  If it makes sense you can type in values the slider doesn't allow.
By default, holding Ctrl lets you drag an object regardless of whether dragging is locked or not.  Holding Shift lets you pickup an action from a button regardless of whether the button is locked or not.  Holding Alt and clicking a button will self-cast the action in the button.  All these can be changed in Misc Options.

## Preview
## Features
Key Features & How to Use

**Action Buttons & IDs**
- Each button has an **Action ID** (1-120), which can be changed on the fly.
- Buttons can be assigned to any action (spell, macro, item).
- Use slash commands or the options menu to assign actions.
**Action Bars & Pages**
- Each bar can have multiple pages (sets of action IDs).
- Change pages via mouse wheel, keybindings, slash commands (<code>/dab barpage</code>), or scripts.
- Use <code>/dab barpage barID page</code> to switch pages manually.
**Profiles**
- Save different profiles for different characters or setups.
- Load profiles via <code>/dab load profile</code>.
- Create new profiles in **Misc Options**.
**Custom Layouts**
- Download user-made layouts from external sources.
- Place custom layouts (<code>DAB_Custom.lua</code>) into your addon folder.
- Load them via **Misc Options** > **Load Custom Profile**.
**Scripting Support**
- Write custom Lua scripts for game events and button actions.
- Use the **Scripts** tab in options or in specific objects.
- Useful for advanced automations or responses.

**Here's some of what you can do with the bars:**
- Drag a bar to where you want it.
- Set the number of buttons per bar
- Set the number of rows in which to display the buttons
- Set the amount of space between each button on the bar
- Set the size of each button on the bar
- Set the transparency of the bar
- Configure a background behind and border around the bar
- Lock buttons to prevent you accidentally dragging actions off them
- Hide empty buttons
- Define a default target to use when you have no target and click a button
- Define other actions to use when right-click or middle-click a button
- Collapse the bar to the left to fill in empty buttons
- Configure the shapeshift bar, bag bar, pet bar, and micro bar
- Set the colors for out of range, not enough mana, and unsuable displays
- Define bars to be shown when you switch into a certain stance/aura/stealth/animal form. Define a main bar to have those bars switch with it when you change forms.
- Set bars to display when you're in combat, you're not in combat, you have friendly target, you have a hostile target, you're holding down a key you defined, or you move the mouse over where the bar is hiding.
- Define macros to be run in response to game events. These macros do not use any of your base 18 macros and have a limit of 7500 characters.
- Configure control boxes that you can click or mouseover to show/hide bars. They can be used to build a menu that controls bar display and doesn't use any of your macros.
- Configure solo buttons (referred to as 'floaters') that aren't attached to any bar.

## **Bar Options**
**BAR CONFIG TAB:**

- **^v<> (Nudge Buttons)** - These buttons give you precise control over moving the bar.  Left-clicking one of them will move the bar 1 unit in the direction you clicked.  Right-clicking one of them will move the bar 10 units in the direction you clicked.  Clicking and holding the middle-mouse button on one of them will keep the frame moving until you release the middle-mouse button.
- **Anchor Frame** - Specify a frame to attach the bar to.  Any frame can be specified.  You can type a new name into the editbox rather than choosing one from the drop-down menu.
- **Anchor Point** - Specify the side of the bar to attach to the Anchor Frame.
- **Anchor To** - Specify the side of the Anchor Frame the Anchor Point attaches to.
- **Auto-Attack** - Enabling this will cause you to automatically enter attack mode whenever you use an action on the bar.
- **Background Alpha** - Sets the transparency of the bar's background.
- **Background Color** - Sets the color of the bar's background.
- **Background Texture** - Sets the texture the bar's background uses.
- **Border Alpha** - Sets the transparency of the bar's border.
- **Border Color** - Sets the color of the bar's border.
- **Border Texture** - Sets the texture of the bar's border.  This isn't like other texture.  Border textures have to be laid out in a special way for them to work properly.  Unfortunately, I don't know the format.
- **Button Alpha** - Sets the transparency of all the bar's buttons.
- **Button Size** - Sets the height and width of all the bar's buttons.
- **Collapse Hidden Buttons** - Causes buttons to shift to left to fill in blank spots left by hidden buttons.
- **Disable Mousewheel Paging** - Disables the ability to use your mousewheel to change pages on the bar.
- **Disable Tooltip** - Stops the tooltip from showing up when you mouseover the bar.
- **Edge Size** - Sets the width of the bar's border.
- **Hide Backdrop** - Hides the bar's background.
- **Hide Empty Buttons** - Hides any buttons that don't currently hold an action.
- **Hide Global** - This is a suboption of the Cooldown Count option.  It stops the cooldown count from showing up for global (2 seconds or less) cooldowns.
- **Hide On Click** - The bar will hide whenever any one of its buttons is clicked.
- **Hide** - Hides the bar and disables all condition checking the bar does.
- **Horizontal Spacing** - Sets the amount of horizontal space between buttons.
- **Insets** - These confuse me too.  But they're there for ya anyway.
- **Lock Buttons** - Prevents you from being able to remove an action from a button through dragging.
- **Padding** - Sets the amount of space between the bar's border and the buttons.
- **Pet Auto-Attack** - Whenever you use an action on the bar you pet will be ordered to attack your current target if it's not already attacking something.
- **Preset Backdrops** - Let's you load the settings for a number of preconfigured backdrops.
- **Rows** - Defines how many rows in which the bar's buttons display.
- **Show Cooldown Count** - Shows a text display of the cooldown time remaining on each button.
- **Skip Pages** - Lets you specify pages to be skipped over when using the mousewheel to change a bar's pages.  Separate multiple pages with a comma, for example: 1, 3, 5
- **Tile** - Causes the background texture to be tiled.
- **Tile Size** - Sets the height and width of the tiles in which the background texture displays.
- **Vertical Spacing** - Sets the amount of space between rows.
- **X** - Sets the horizontal offset of the Anchor Point from the Anchor To.
- **Y** - Sets the vertical offset of the Anchor Point from the Anchor To.

**ADV. BAR CONFIG TAB:**

- **Action Unusable** - Lets you set the color the buttons change to when unusable.
- **Border** - Lets you set the texture and color of the buttons' borders.
- **Button Background** - Lets you set the texture and color of the buttons' backgrounds.
- **Button Border Alpha** - Lets you set the transparency of the buttons' borders.
- **Button Border Padding** - Lets you set the amount of space between a button's border and its action icon.
- **Checked** - Lets you set the texture and color of the highlight a button displays when clicked.
- **Control Box Group** - Specifies the control box group this bar is a part of.  All objects in the same control box group can be toggled with a single control box.
- **Cooldown Count** - Lets you configure the buttons' cooldown count text.  The checkbox hides the text.  The color picker sets the text's color.  The editbox lets you type in a font size.  The drop-menu lets you choose or type in a font.
- **Count** - Lets you configure the buttons' stack count text.  The checkbox hides the text.  The color picker sets the text's color.  The editbox lets you type in a font size.  The drop-menu lets you choose or type in a font.
- **Default Target** - Lets you specify a default unit all buttons on the bar automatically target if you have no target or if you're casting a friendly-targetted spell while targetting a hostile.  The Force checkbox will cause all actions to target the specified unit no matter what your current target is.
- **Disable Mouse Input On Bar Background** - Stops the bar's background from intercepting mouse clicks and mousewheel input.
- **Equipped** - Lets you set the texture and color of the buttons' equipped display.
- **Frame Strata** - Lets you set the frame strata of the bar.  Objects in lower frame stratas display beneath those in higher frame stratas.
- **Highlight** - Lets you set the texture and color of the buttons' mouseover highlight.
- **Keybinding** - Lets you configure the buttons' keybinding text.  The checkbox hides the text.  The color picker sets the text's color.  The editbox lets you type in a font size.  The drop-menu lets you choose or type in a font.
- **Macro Name** - Lets you configure the buttons' macro name text.  The checkbox hides the text.  The color picker sets the text's color.  The editbox lets you type in a font size.  The drop-menu lets you choose or type in a font.
- **Middle-click Bar** - Specifies another bar to use whenever you middle-click a button.  The action in the button in the same position on that bar is the action you use.
- **Not Enough Mana** - Lets you set the color the buttons change to when you don't have enough mana for the action.
- **Out of Range** - Lets you set the color the buttons change to when the action's out of range.
- **Recolor** - Lets you specify what part of the button is recolored when the action's unusable or out of range or you don't have enough mana for the action.
- **Right-click Bar** - Specifies another bar to use whenever you right-click a button.  The action in the button in the same position on that bar is the action you use.
- **Show Hidden Buttons When Dragging an Action** - Causes all hidden buttons on the bar to be displayed whenever you're dragging a spell, item, or macro.

**Trim Button Edges** - Trims the white borders and rounded corners off the action icon. 

**LABEL TAB:**

A bar's label is a small box attached to the bar displaying whatever text you want.

- **Alpha** - Sets the transparency of the label frame.
- **Anchor Point** - Sets the side of the label frame that attaches to the bar.
- **Anchor To** - Sets the side of the bar the Anchor Point attaches to.
- **Backdrop Options** - Same as the bar's backdrop options, they just refer the background behind the label text instead.
- **Color** - Sets the color of the text.
- **Font Size** - Sets the font size of the text.
- **Font** - Sets the font the text uses.
- **Height** - Sets the height of the label frame.
- **Hide** - Hides the bar's label.
- **Horz. Justification** - Sets the horizontal justification of the text within the label frame.
- **Text** - Sets the text of the label.
- **Vert. Justification** - Sets the vertical justification of the text within the label frame.
- **Width** - Sets the width of the label frame.
- **X** - Sets the horizontal offset of the Anchor Point from the Anchor To.
- **Y** - Sets the vertical offset of the Anchor Point from the Anchor To.

**BAR CONTROL TAB:**

This tab lets you set up conditions the bar watches for and responses that are run each time a condition becomes true.

Remember that conditions aren't checked and responses aren't run when a bar is hidden via it's Hide option, the DAB_Bar_Hide function, or the /dab barhide slash command.

The scrolling frame at the top lists all currently active bar conditions.  Clicking the COPY button copies all of the bar's active conditions and responses.  Clicking the PASTE button pastes any conditions and responses that have been copied from another object into the currently selected bar.  The v and ^ buttons to the left of a condition let you move a condition up and down within the list.  Conditions are checked in order.  It's best to list overrides before the condition they override.  The Edit button lets you change a particular condition.  The Delete button removes a particular condition.

The Choose Condition drop-down menu lets you choose a condition to setup for the bar.  When some of the conditions are chosen additional options pop-up called parameters.  All parameters MUST be filled out for a condition.  A tooltip appears when moving the mouse over a condition in the drop-down menu that tells you what that particular condition checks for.

The Choose Response drop-down menu lets you choose an action that occurs whenever the condition you setup becomes true.  You must setup a condition before you can choose a response.  Responses are only run once when then condition becomes true.  The condition must become false then become true again for the response to be run again.  For most responses additional options appear when you choose them called parameters.  All parameters MUST be filled out.  When moving the mouse over the drop-down menu a tooltip appears describing each response.

The Overridden By editbox lets you specify other conditions that prevent this condition from becoming true.  As long as any one of the overrides is true, this condition cannot become true.  You type in the number that appears to the left of a condition in the scrolling frame at the top of the window.  Multiple overrides must be separated by a comma, for example: 1, 3, 5.

When finished setting up the condition, response, and overrides click the Add Condition button to add the condition to the list of the bar's active conditions. 

**BUTTON CONTROL TAB:**

This tab lets you set up conditions each button on the bar watches for and responses that are run each time a condition becomes true.

Remember that conditions aren't checked and responses aren't run when a bar is hidden via it's Hide option, the DAB_Bar_Hide function, or the /dab barhide slash command.

The first scrolling frame at the top lets you choose a button on the bar to setup conditions for.

The second scrolling frame at the top lists all currently active conditions on the button.  Clicking the COPY button copies all of the button's active conditions and responses.  Clicking the PASTE button pastes any conditions and responses that have been copied from another object into the currently selected button.  The v and ^ buttons to the left of a condition let you move a condition up and down within the list.  Conditions are checked in order.  It's best to list overrides before the condition they override.  The Edit button lets you change a particular condition.  The Delete button removes a particular condition.

The Choose Condition drop-down menu lets you choose a condition to setup for the button.  When some of the conditions are chosen additional options pop-up called parameters.  All parameters MUST be filled out for a condition.  A tooltip appears when moving the mouse over a condition in the drop-down menu that tells you what that particular condition checks for.

The Choose Response drop-down menu lets you choose an action that occurs whenever the condition you setup becomes true.  You must setup a condition before you can choose a response.  Responses are only run once when then condition becomes true.  The condition must become false then become true again for the response to be run again.  For most responses additional options appear when you choose them called parameters.  All parameters MUST be filled out.  When moving the mouse over the drop-down menu a tooltip appears describing each response.

The Overridden By editbox lets you specify other conditions that prevent this condition from becoming true.  As long as any one of the overrides is true, this condition cannot become true.  You type in the number that appears to the left of a condition in the scrolling frame at the top of the window.  Multiple overrides must be separated by a comma, for example: 1, 3, 5. When finished setting up the condition, response, and overrides click the Add Condition button to add the condition to the list of the bar's active conditions. 

**SCRIPTS TAB:**

This tab lets you enter your own lua scripts for each of the bar's handlers.  A tooltip for each handler tells you when it's run.  Handlers that currently hold a script will be marked with an asterisk (*). For OnClick, OnEnter, and OnLeave handlers, WoW's this variable will refer to the button on the bar that caused the handler to run.  Using this:GetID() will return the button's ID.  Using this:GetActionID() will return the button's action ID. Note that all pages on a bar use the same button IDs and can have, but not necessarily will have, different action IDs.

The this variable isn't set for OnKeybindingDown and OnKeybindingUp parameters.  Rather you need to check which keybinding was pressed by using the param variable.  That variable will always hold the button ID of the button whose keybinding was pressed. For all other handlers, the this variable will refer to the bar frame itself. See the Scripting sections below for more info.

## **Other Bar Options**
- **^v<> (Nudge Buttons)** - These buttons give you precise control over moving the bar.  Left-clicking one of them will move the bar 1 unit in the direction you clicked.  Right-clicking one of them will move the bar 10 units in the direction you clicked.  Clicking and holding the middle-mouse button on one of them will keep the frame moving until you release the middle-mouse button.
- **Alpha** - Lets you set the transparency of the bar's buttons.
- **Anchor Frame** - Specify a frame to attach the bar to.  Any frame can be specified.  You can type a new name into the editbox rather than choosing one from the drop-down menu.
- **Anchor Point** - Specify the side of the bar to attach to the Anchor Frame.
- **Anchor To** - Specify the side of the Anchor Frame the Anchor Point attaches to.
- **Background Alpha** - Sets the transparency of the bar's background.
- **Background Color** - Sets the color of the bar's background.
- **Background Texture** - Sets the texture the bar's background uses.
- **Border Alpha** - Sets the transparency of the bar's border.
- **Border Color** - Sets the color of the bar's border.
- **Border Texture** - Sets the texture of the bar's border.  This isn't like other texture.  Border textures have to be laid out in a special way for them to work properly.  Unfortunately, I don't know the format.
- **Button Scale** - Lets you set the size of the bar's buttons.
- **Control Box Group** - Specifies which control box the group the bar is a part of.  All objects in the same group can be toggled with a single control box.
- **Edge Size** - Sets the width of the bar's border.
- **Frame Strata** - Lets you define a frame strata for the bar.  Objects in lower frame stratas display below those in higher frame stratas.
- **Hide Backdrop** - Hides the bar's background.
- **Hide Global** - This is a suboption of the Cooldown Count option.  It stops the cooldown count from showing up for global (2 seconds or less) cooldowns.
- **Hide** - Hides the bar.
- **Horizontal Spacing** - Sets the amount of horizontal space between buttons.
- **Insets** - These confuse me too.  But they're there for ya anyway.
- **Layout** - Lets you set how the buttons on the bar are laid out.
- **Padding** - Sets the amount of space between the bar's border and the buttons.
- **Preset Backdrops** - Let's you load the settings for a number of preconfigured backdrops.
- **Show Cooldown Count** - Shows a text display of the cooldown time remaining on each button.  This option is only for the Pet Action and Shapeshift bars.
- **Show On Mouseover** - The bar will show only when you move the mouse over the area of the screen the bar occupies.
- **Tile Size** - Sets the height and width of the tiles in which the background texture displays.
- **Tile** - Causes the background texture to be tiled.
- **Vertical Spacing** - Sets the amount of space between rows.
- **X** - Sets the horizontal offset of the Anchor Point from the Anchor To.
- **Y** - Sets the vertical offset of the Anchor Point from the Anchor To.

## **Control Box Options**
**CONFIG TAB:**

- **^v<> (Nudge Buttons)** - These buttons give you precise control over moving the control box.  Left-clicking one of them will move the box 1 unit in the direction you clicked.  Right-clicking one of them will move the box 10 units in the direction you clicked.  Clicking and holding the middle-mouse button on one of them will keep the frame moving until you release the middle-mouse button.
- **Anchor Frame** - Specify a frame to attach the control box to.  Any frame can be specified.  You can type a new name into the editbox rather than choosing one from the drop-down menu.
- **Anchor Point** - Specify the side of the control box to attach to the Anchor Frame.
- **Anchor To** - Specify the side of the Anchor Frame the Anchor Point attaches to.
- **Background Alpha** - Sets the transparency of the background.
- **Background Color** - Sets the color of the background.
- **Background Mouseover Alpha** - Sets the transparency the background changes to when you move the mouse over the control box.
- **Background Mouseover Color** - Sets the color the background changes to when the mouse is over the control box.
- **Background Texture** - Sets the texture of the control box's background.
- **Border Alpha** - Sets the transparency of the border.
- **Border Color** - Sets the color of each border.
- **Border Mouseover Alpha** - Sets the transparency the border changes to when you move the mouse over the control box.
- **Border Mouseover Color** - Sets the color the border changes to when the mouse is over the control box.
- **Bottom** - Lets you configure the bottom border of the control box.  The checkbox hides the border.  The editbox lets you type in a width for the border.  The drop-down menu lets you choose or type-in a texture for the border.
- **Font Size** - Sets the font size of the text.
- **Font** - Sets the font the text uses.
- **Frame Strata** - Lets you define a frame strata for the control box.  Objects in lower frame stratas display below those in higher frame stratas.
- **Height** - Sets the height of the control box.
- **Hide** - Hides the control box.
- **Horiz. Justification** - Sets the horizontal alignment of the text within the boundaries of the frame.
- **Left** - Lets you configure the left border of the control box.  The checkbox hides the border.  The editbox lets you type in a width for the border.  The drop-down menu lets you choose or type-in a texture for the border.
- **Right** - Lets you configure the right border of the control box.  The checkbox hides the border.  The editbox lets you type in a width for the border.  The drop-down menu lets you choose or type-in a texture for the border.
- **Text Alpha** - Sets the transparency of the text.
- **Text Anchor** - These options let you specify how the text attaches to the main frame of the control box.
- **Text Color** - Sets the color of the text.
- **Text Mouseover Alpha** - Sets the transparency the text changes to when you move the mouse over the control box.
- **Text Mouseover Color** - Sets the color the text changes to when the mouse is over the control box.
- **Text** - Sets the text displayed within the control box.
- **Top** - Lets you configure the top border of the control box.  The checkbox hides the border.  The editbox lets you type in a width for the border.  The drop-down menu lets you choose or type-in a texture for the border.
- **Vert. Justification** - Sets the vertical alignment of the text within the boundaries of the frame.
- **Width** - Sets the width of the control box.
- **X** - Sets the horizontal offset of the Anchor Point from the Anchor To.
- **Y** - Sets the vertical offset of the Anchor Point from the Anchor To. 

**CONTROL TAB:**

- **Bar** - The drop-down next to this label lets you choose the bar whose page gets change when the control box is clicked.  The drop-down menu below the label lets you choose the page the bar is changed to.
- **Change A Bar's Page On Click** - Checking this option causes the control box to change any bar's page when it's clicked.
- **Control Box Group** - Lets you specify which control box group this control box is a part of.
- **Delay On Mouseout** - Lets you set a number of seconds to pause before the group gets toggled when moving the mouse off the control box.
- **Display Bar's Page Number** - Checking this option causes the bar's page number to be displayed for the control box's text instead of any text you specify.
- **Group This Box Controls** - Lets you specify which control box group this control box toggles.
- **Hide Groups On Click** - This options lets you specify any control box group to hide when the control box is clicked.  Multiple groups must be separated by a comma, for example: 1, 3, 5
- **Toggle Group On Click** - Enabling this causes the control box to toggle its group whenever it's clicked.  Hidden object in the group get shown and shown objects in the group get hidden.
- **Toggle Group On Middle-click** - Checking this option will let you specify another group for the control box to toggle when the control box is middle-clicked.  Use the drop-down menu to choose the other group.
- **Toggle Group On Mouseover** - The control box will toggle its group once when you move the mouse over the control box and once when you move the mouse off the control box.  Moving the mouse over an object in the box's group before the control box toggles it on mouseout will prevent the control box group from being toggled as long as the mouse is over any object in the group.
- **Toggle Group On Right-click** - Checking this option will let you specify another group for the control box to toggle when the control box is right-clicked.  Use the drop-down menu to choose the other group. 

**SCRIPTS TAB:**

This tab lets you enter lua scripts that are run in response to various handlers for the control box.  A tooltip in the drop-down menu at the top describes what each handler does.  Refer to the Scripting sections below for more info.

## **Floater Options**
**CONFIG TAB:** The large icon at the top of the window displays the action the floater currently holds.  You can change the floater's action there by dragging a new action into it.

- **^v<> (Nudge Buttons)** - These buttons give you precise control over moving the floater.  Left-clicking one of them will move the floater 1 unit in the direction you clicked.  Right-clicking one of them will move the floater 10 units in the direction you clicked.  Clicking and holding the middle-mouse button on one of them will keep the frame moving until you release the middle-mouse button.
- **Anchor Frame** - Specify a frame to attach the floater to.  Any frame can be specified.  You can type a new name into the editbox rather than choosing one from the drop-down menu.
- **Anchor Point** - Specify the side of the floater to attach to the Anchor Frame.
- **Anchor To** - Specify the side of the Anchor Frame the Anchor Point attaches to.
- **Auto-Attack** - Enabling this will cause you to automatically enter attack mode whenever you use the floater.
- **Button Alpha** - Sets the transparency of button.
- **Button Size** - Sets the height and width of button.
- **Disable Tooltip** - Stops the tooltip from showing up when you mouseover the floater.
- **Hide Global** - This is a suboption of the Cooldown Count option.  It stops the cooldown count from showing up for global (2 seconds or less) cooldowns.
- **Hide On Click** - The floater will hide whenever it's clicked.
- **Hide** - Hides the floater and disables all condition checking the floater does.
- **Lock Button** - Prevents you from being able to remove an action from the button through dragging.
- **Pet Auto-Attack** - Whenever you use the floater your pet will be ordered to attack your current target if it's not already attacking something.
- **Show Cooldown Count** - Shows a text display of the cooldown time remaining on the button.
- **X** - Sets the horizontal offset of the Anchor Point from the Anchor To.
- **Y** - Sets the vertical offset of the Anchor Point from the Anchor To. 

**ADV. BAR CONFIG TAB:**

- **Action Unusable** - Lets you set the color the button changes to when unusable.
- **Border** - Lets you set the texture and color of the button's border.
- **Button Background** - Lets you set the texture and color of the button's background.
- **Button Border Alpha** - Lets you set the transparency of the button's border.
- **Button Border Padding** - Lets you set the amount of space between a button's border and its action icon.
- **Checked** - Lets you set the texture and color of the highlight a button displays when clicked.
- **Control Box Group** - Specifies the control box group this floater is a part of.  All objects in the same control box group can be toggled with a single control box.
- **Cooldown Count** - Lets you configure the button's cooldown count text.  The checkbox hides the text.  The color picker sets the text's color.  The editbox lets you type in a font size.  The drop-menu lets you choose or type in a font.
- **Count** - Lets you configure the button's stack count text.  The checkbox hides the text.  The color picker sets the text's color.  The editbox lets you type in a font size.  The drop-menu lets you choose or type in a font.
- **Default Target** - Lets you specify a default unit the floater automatically targets if you have no target or if you're casting a friendly-targetted spell while targetting a hostile.  The Force checkbox will cause the floater target the specified unit no matter what your current target is.
- **Equipped** - Lets you set the texture and color of the button's equipped display.
- **Frame Strata** - Lets you set the frame strata of the floater.  Objects in lower frame stratas display beneath those in higher frame stratas.
- **Highlight** - Lets you set the texture and color of the button's mouseover highlight.
- **Keybinding** - Lets you configure the button's keybinding text.  The checkbox hides the text.  The color picker sets the text's color.  The editbox lets you type in a font size.  The drop-menu lets you choose or type in a font.
- **Macro Name** - Lets you configure the button's macro name text.  The checkbox hides the text.  The color picker sets the text's color.  The editbox lets you type in a font size.  The drop-menu lets you choose or type in a font.
- **Middle-click Action** - Specifies another action to use whenever you middle-click the button.
- **Not Enough Mana** - Lets you set the color the button changes to when you don't have enough mana for the action.
- **Out of Range** - Lets you set the color the button changes to when the action's out of range.
- **Recolor** - Lets you specify what part of the button is recolored when the action's unusable or out of range or you don't have enough mana for the action.
- **Right-click Action** - Specifies another action to use whenever you right-click a button.
- **Show Hidden Buttons When Dragging an Action** - Causes the floater to show when you drag an action.
- **Trim Button Edges** - Trims the white borders and rounded corners off the action icon. 

**CONTROL TAB:**

This tab lets you set up conditions the floater watches for and responses that are run each time a condition becomes true.

Remember that conditions aren't checked and responses aren't run when a floater is hidden via its Hide option, the DAB_Floater_Hide function, or the /dab floaterhide slash command.

The scrolling frame at the top lists all currently active conditions.  Clicking the COPY button copies all of the floater's active conditions and responses.  Clicking the PASTE button pastes any conditions and responses that have been copied from another object into the currently selected floater, replacing any conditions already there.  The v and ^ buttons to the left of a condition let you move a condition up and down within the list.  Conditions are checked in order.  It's best to list overrides before the condition they override.  The Edit button lets you change a particular condition.  The Delete button removes a particular condition.

The Choose Condition drop-down menu lets you choose a condition to setup for the floater.  When some of the conditions are chosen additional options pop-up called parameters.  All parameters MUST be filled out for a condition.  A tooltip appears when moving the mouse over a condition in the drop-down menu that tells you what that particular condition checks for.

The Choose Response drop-down menu lets you choose an action that occurs whenever the condition you setup becomes true.  You must setup a condition before you can choose a response.  Responses are only run once when then condition becomes true.  The condition must become false then become true again for the response to be run again.  For most responses additional options appear when you choose them called parameters.  All parameters MUST be filled out.  When moving the mouse over the drop-down menu a tooltip appears describing each response.

The Overridden By editbox lets you specify other conditions that prevent this condition from becoming true.  As long as any one of the overrides is true, this condition cannot become true.  You type in the number that appears to the left of a condition in the scrolling frame at the top of the window.  Multiple overrides must be separated by a comma, for example: 1, 3, 5.

When finished setting up the condition, response, and overrides click the Add Condition button to add the condition to the list of the floater's active conditions. 

**SCRIPTS TAB:**

This tab lets you enter lua scripts for the various script handlers for the floater.  See the scripting sections below for more info.

## **Change Actions**
This window lets you change the action any action ID holds without having to use a button.  Just drag and drop actions into the action icon.  The action ID is the number displayed on the left.

## **Button Layout**
This window is where you change the number of buttons on a bar, change the number pages a bar has, add or delete floaters, and set the action ID each button uses.

The Button Layout tab lets you change how your buttons are applied.  Each bar is listed down the left side of the window.  Clicking the + button next to the box in the Buttons column will add a button to particular bar or will create a new floater.  Clicking the - button will remove a button from a bar.  DAB has a finite number of buttons so if you've used up all the buttons, you must free up buttons from one bar in order to add buttons to another bar.  The display at the top of the window tells you how many buttons are available to add to a bar or turn into floaters.  Clicking the +/- buttons in the Pages column will add/remove pages from a bar.

The drop-down menu to the right of the FLOATERS label will let you pick a specific floater to delete.

The Set Action IDs tab lets you choose which action ID any button uses.  Simply choose the action the button uses with the drop-down menus on the right.  The Filters menus at the bottom of the window let you display only a certain set of buttons such as all pages on a bar, a single page on a bar, or just floaters.  The Min and Max editboxes let you apply a range of IDs to the buttons currently listed in the scroll frame.  The first button listed will get what you set for Min and it will go up by 1 for each button down the list until it reaches the max.  If you don't specify a max, it will keep going until it hits 120 or runs out of buttons.

## **Keybindings**
DAB's keybindings are now fully configurable via this window.  The number on the left is the ID of the keybinding. The first drop-down menu lets you choose the type of keybinding. A tooltip in the drop-down menu describes each type of keybinding. The other two drop-down menus let you set the parameters for the keybinding type: bar to use, button to use, page to use, group's ID, etc. The Run On Key Down and Up checkboxes let you set when the keybinding performs its action. Checking Down causes the action to be performed when the keybinding is pressed. Checking Up causes the action to be performed when the keybinding is released. Both can be checked to so that the action is performed upon both press and release of the keybinding. The two red buttons let you bind a key or key combination to the keybinding. Just click the button then press your key combination.

DAB's keybindings are no longer automatically updated when change the number of buttons on a bar.  However, the Auto-Configure button at the bottom of the Keybindings window can help with that.  Clicking it will setup a keybinding for each button on bars 1 through 5, a keybinding for each floater, a keybinding for each control box, two keybinding groups, and page up and page down keybindings for each bar with multiple pages.

## **OnEvent Scripts**
This window lets you write lua scripts that are run in response to game events.  These scripts aren't attached to object and aren't affected by any object's state unlike the script handlers in the Scripts tab for an object.  Choose an event in the drop-down menu at the top and enter the script for that event in the large editbox.  Events that have scripts are marked with an asterisk (*).  A tooltip in the drop-down menu describes each event.

The Add Events button can be used to add a new event to the list of selectable events.  Clicking it pops up a small window.  Type in the actual name of the event in the Event editbox.  Type in the name the drop-down menu displays for the event in the Name editbox.  Type in a tooltip for the event in the Desc editbox.

A list of events can be found here: http://www.wowwiki.com/Events_(API)

## **Main Menu Bar**
- **Hide Main Menu Bar Art** - Hides the griffons and background art at the bottom of the screen.
- **Let DAB Control XP Bar** - This option lets DAB pull the default XP bar out of the default UI so that DAB can configure it.  It won't be hidden along with the main bar art.  Unlocking dragging will allow you to drag the bar around the screen.
- **Hide XP Bar Border** - Hides the border around the XP bar that divides it into segments.
- **XP Bar Color** - Changes the color of the XP bar.
- **XP Bar Border Color** - Changes the color of the border around the XP bar.
- **XP Bar Scale** - Changes the size of the XP bar.
- **XP Bar Alpha** - Changes the transparency of the XP bar.
- **Let DAB Control Latency Bar** - This option lets DAB pull the default latency bar out of the default UI so that DAB can configure it.  It won't be hidden along with the main bar art.  Unlocking dragging will allow you to drag the bar around the screen.

**Latency Bar Scale** - Changes the size of the latency bar.Back to Top

## **Misc Options**
- **Options Window Scale** - Lets you change the size of the options window.
- **Updates Per Second** - Sets how many times per second conditions are checked and how many times per second OnUpdate handlers are allowed to run.
- **New Profile** - Type in a name in the editbox and click the CREATE button to make a new profile.
- **Load Profile** - Choose a profile with the drop-down menu.  Click the LOAD button to load a profile.  If you get an error that says "xxx is dependent on this", use the SAFE LOAD button to load that profile instead.  Click the DELETE button to delete the selected profile.  The Default profile cannot be deleted.
- **Show Action and Button IDs in a button's tooltip** - Checking this will cause a button's ID and action ID to be displayed in the bottom of its tooltip.
- **Auto-configure Keybindings When Changing Bar Layouts** - This will cause the Auto-Configure button at the bottom of the Keybindings window to be clicked whenever you change the number of buttons or pages on a bar in the Button Layout window.  See the description of the Auto-Configure button in the Keybindings section above.
- **Override Dragging Lock** - This lets you specify a key that, when pressed, overrides the lock that prevents you from dragging objects around.
- **Override Button Lock** - This lets you specify a key that, when pressed, lets you pick up an action from a button regardless of whether the button's locked or not.
- **Force Self-cast** - This lets you specify a key you can press and hold while clicking a button to force that button's action to target you.
- **Cooldown Count Format** - This lets you specify how cooldown counts are displayed in a button.  1 - shows just a number if the count is less than 60 seconds and shows #m if the count's greater than 60 seconds.  2 - always shows to the total number of seconds remaining.  3 - displays the count in a mm:ss format.

## **Scripting**
Wherever DAB lets you write scripts, any lua code is allowed.  Here's some handy references for writing lua in WoW:

- General functions: http://www.wowwiki.com/World_of_Warcraft_API
- Frame functions: http://www.wowwiki.com/Widget_API
- Events: http://www.wowwiki.com/Events_(API)
- Tutorials: http://www.wowwiki.com/Interface_Customization
- Generic lua tutorials: http://lua-users.org/wiki/TutorialDirectory

Back to Top

**Useful Script Functions**

The following functions are defined by DAB and the Discord Library and can make scripting easier.

**Bar Buttons or Floaters:**

- **DAB_ActionButton_#:GetActionID()** - This will return the action ID currently held by the specified button.  Change # to the button ID of the button.
- **DAB_ActionButton_FauxHide(buttonID)** - This will hide the specified button in a way that allows condition checking to continue.
- **DAB_ActionButton_FauxShow(buttonID)** - This shows a button that's been faux hidden with the DAB_ActionButton_FauxHide function.
- **DAB_ActionButton_SetTarget(buttonID, unitID)** - Sets the button to always target the specified unit ID.  To remove the target override, use this: DAB_ActionButton_#.targetOverride = nil.  Change # to the button's ID.
- **DAB_ActionButton_SetAction(buttonID, actionID)** - Sets the action ID a button uses.

**DAB_ActionButton_SetTimer(buttonID, seconds)** - This sets the button's cooldown count display to countdown the specified number of seconds.  It will override the button's cooldown count until the timer is finished. 

**Bar Functions:**

- **DAB_Bar_Backdrop(barID, bgtexture, bordertexture, tileSize, edgeSize, left, right, top, bottom)** - Lets you change different attributes of the bar's background.
- **DAB_Bar_BackdropPadding(barID, left, right, top, bottom)** - Lets you change the amount of space between the bars borders and the buttons.
- **DAB_Bar_BGAlpha(barID, alpha)** - Lets you change the transparency of the bar's background.  Alpha must be a number from 0 to 1.
- **DAB_Bar_BGColor(barID, red, green, blue, alpha)** - Lets you change the color of the bar's background.  All parameters but barID must be a number from 0 to 1.
- **DAB_Bar_BorderAlpha(barID, alpha)** - Lets you change the transparency of the bar's border.  Alpha must be a number from 0 to 1.
- **DAB_Bar_BorderColor(barID, red, green, blue, alpha)** - Lets you change the color of the bar's border.  All parameters but barID must be a number from 0 to 1.
- **DAB_Bar_ButtonAlpha(barID, alpha)** - Lets you change the transparency of the bar's buttons.  Alpha must be a number from 0 to 1.
- **DAB_Bar_ButtonBorderColor(barID, red, green, blue)** - Lets you change the color of the border around each button on the bar.  Red, green, and blue must be a number from 0 to 1.
- **DAB_Bar_ButtonSize(barID, size)** - Changes the height and width of all buttons on the bar to the specified size.
- **DAB_Bar_FauxHide(barID)** - Hides the bar in a way that doesn't disable condition checking.
- **DAB_Bar_FauxShow(bar)** - Shows a bar that's been faux hidden.
- **DAB_Bar_GetRealPage(bar, [page])** - Returns the bar's current page adjusted for any page remapping that's been done.  If the optional page parameter is supplied, it returns the page that page has been remapped to.
- **DAB_Bar_Hide(barID)** - Hides the bar in a way that disables condition checking.  Toggles the bar's Hide checkbox on.
- **DAB_Bar_LabelText(barID, text)** - Sets the bar's label to display the specified text.
- **DAB_Bar_Location(barID, xOffset, yOffset, attachFrame, attachPoint, attachTo)** - Changes how the bar is anchored.
- **DAB_Bar_PageDown(barID)** - Changes the bar's page to next one down from the bar's current page.
- **DAB_Bar_PageUp(barID)** - Changes the bar's page to next one up from the bar's current page.
- **DAB_Bar_SetPage(barID, page)** - Sets the bar to the specified page number.
- **DAB_Bar_SetTarget(barID, unitID)** - Sets all buttons on the bar to always target the specified unit ID.  You can remove the target override with the line: DAB_ActionBar_#.targetOverride = nil.  Change # to the bar's ID.
- **DAB_Bar_Show(barID)** - Shows the bar and re-enables condition checking.  Toggles the bar's Hide checkbox off.
- **DAB_Bar_TimeToHide(barID, seconds)** - Sets a delay after which the bar gets hidden.
- **DAB_Bar_Toggle(barID)** - If the bar is hidden, it shows it.  If the bar is shown, it hides it.

**DAB_Set_KeybindingGroup(groupID, barID)** - Applies a keybinding group to a bar. 

**Control Box Functions:**

- **DAB_ControlBox_Hide(controlboxID)** - Hides a control box.
- **DAB_ControlBox_Show(controlboxID)** - Shows a control box.
- **DAB_ControlBox_Text(controlboxID, text)** - Sets the text of a control box.

**DAB_ControlBox_Toggle(controlboxID)** - If the control box is shown, this hides it.  If the control box is hidden, this shows it. 

**Floater Functions:**

- **DAB_Floater_Hide(buttonID)** - Hides the floater in way that disables condition checking.  Toggles the floater's Hide checkbox on.
- **DAB_Floater_Location(buttonID, xOffset, yOffset, attachFrame, attachPoint, attachTo)** - Changes how the floater is anchored.
- **DAB_Floater_MoveDown(buttonID, amount)** - Moves the floater towards the bottom of the screen.  Amount is the offset from its current location.
- **DAB_Floater_MoveLeft(buttonID, amount)** - Moves the floater towards the left of the screen.  Amount is the offset from its current location.
- **DAB_Floater_MoveRight(buttonID, amount)** - Moves the floater towards the right of the screen.  Amount is the offset from its current location.
- **DAB_Floater_MoveUp(buttonID, amount)** - Moves the floater towards the top of the screen.  Amount is the offset from its current location.
- **DAB_Floater_SetKeybinding(buttonID, keybindingID)** - Changes the specified keybinding ID to apply to the specified floater.
- **DAB_Floater_SetTarget(buttonID, unitID, [force])** - Changes the floater's Default Target option.  Force is optional.  Pass 1 for the force parameter to toggle the floaters Force checkbox on.
- **DAB_Floater_Show(id)** - Shows the floater and re-enables condition checking.  Toggles the floater's Hide checkbox off.
- **DAB_Floater_Size(buttonID, size)** - Sets the height and width of a floater to the specified size.
- **DAB_Floater_TimeToHide(buttonID, seconds)** - Sets a delay on the floater at the end of which it hides.

**DAB_Floater_Toggle(buttonID)** - If the floater is hidden, this shows it.  If the floater is shown, this hides it.  

**Control Box Groups:**

- **DAB_Hide_Group(groupID)** - Hides the specified group.
- **DAB_Show_Group(groupID)** - Shows the specified group.

**DAB_Toggle_Group(groupID)** - Goes through each object in the group.  If the object is hidden, this shows it.  If the object is shown, this hides it. 

**Other Bars:**

The IDs for the Other Bars are: 11 - Pet Action, 12 - Shapeshift, 13 - Bag, 14 - Micro Menu

- **DAB_OtherBar_Hide(barID)** - Hides the bar.
- **DAB_OtherBar_Show(barID)** - Shows the bar.

**DAB_OtherBar_Toggle(barID)** - If the bar's shown, this hides it.  If the bar's hidden, this shows it.  

**Miscellaneous Functions:**

- **DAB_Add_AutoCast(actionID, unitID)** - Adds an action to the auto-cast queue.  The action auto-targets the specified unit.
- **DAB_Load_Profile(profileName)** - Loads the specified profile.
- **DAB_AutoCast()** - Executes the next action in the auto-cast queue.
- **DAB_Get_ActionName(actionID)** - Returns the name of the action that has the specified ID.
- **DAB_Unset_KeybindingGroup(groupID)** - Removes the keybinding group from whatever bar it's been applied to.
- **DL_ActionUsable(actionID)** - Checks if the action's flagged usable, in range, you have enough mana to use it, and it's not cooling down.
- **DL_AttackTarget()** - Turns on attack mode only if your target is attackable, you aren't currently in attack mode, and you aren't stealthed.
- **DL_CheckBuff(unitID, buffName)** - Checks if a buff is currently active on a unit.
- **DL_CheckDebuff(unitID, debuffName)** - Checks if a debuff is currently active on a unit.
- **DL_CheckStatus(unitID, status)** - Returns a count of how many times the unit is affected by the specified status.  Valid statuses - Poison, Magic, Disease, Curse
- **DL_Get_ShapeshiftForm()** - Returns a number respresenting which shapeshift form you're currently in.
- **DL_PetAttack()** - Tells your pet to attack your target only if your pet's not currently attacking something and your target is attackable.

## **Texture Specifications**
- Must be a .tga or .blp file.
- 32 bits per pixel.
- Must have an alpha channel.  I use Photoshop 6.0 which creates an alpha channel just by adding a new channel.  With Photoshop 7.0 and possibly later versions you'll need the alpha channel plug-in: http://www.adobe.com/support/downloads/detail.jsp?ftpID=1544
- The height and width must be a power of 2 - 2, 4, 8, 16, 32, 64, 128, 256, or 512.
- Neither height nor width can be greater than 512.
- You must completely exit and restart WoW to get it to recognize a texture you just added a folder.  Texture files added while WoW was running won't be recognized.
- Futrtrubl has created a tutorial for Photoshop users that can be viewed here: <nowiki>http://www.edowner.net/Texture-Tutorial</nowiki>

## **Terms**
- **Action Button:** The actual button frame you see on the screen.
- **Action ID or actionID:** A number from 1 to 120 that identifies a spell, macro, or item in one of your action slots.  Any button in DAB can use any action ID and a button's action ID can be changed on the fly.
- **Bar:** A collection of action buttons attached to a single frame.  All action buttons on a bar share the same settings.
- **Bar ID or barID:** A number from 1 to 10 that refers to a specific bar.  For slash commands: pet, shapeshift, menu, and bag are the bar ID's for the Other Bars.  A bar's ID never changes.
- **Button ID or buttonID:** A number from 1 to 120 that identifies a single action button frame.  A button's ID never changes.
- **Condition:** A statement setup via the various Control tabs that checks whether a certain condition in the game is true or not.  Usually you need to setup conditions in pairs: one that checks if the condition is true and one that checks if it's false.  A lot of the time the word condition is used to mean a condition/response pair.  You'll just have to figure it out from context.
- **Control Box:** A special type of button that can be used to toggle display of bars, floaters, or other control boxes.
- **Control Box Group or controlboxgroup:** Different objects (bars, floaters, and control boxes) can be set to a particular Control Box Group.  Any control box set to toggle that group will toggle all objects that are part of the group.  The ID you specify for an object's group is how it's referred to in slash commands and functions.
- **DAB:** An acronym for Discord Action Bars.
- **Floater:** An action button that's not attached to any bar and has it's own settings.
- **Floater ID or floaterID:** A number from 1 to 120 that identifies the floater.  A floater's ID is always the same as its Button ID and the two terms are used interchangably.
- **Keybinding Group:** In DAB's Keybindings window you can specify keybindings to be part of a Keybinding Group.  Keybinding Groups can be applied to different bars on the fly and are referred to by the ID you give them.
- **Keybinding Group ID or keybindinggroupID:** This is the ID you set for a particular keybinding group and it's what you use in functions and slash commands to refer to a keybinding group.
- **Keybinding ID:** A number displayed to the left of each keybinding in the Keybindings window.
- **Other Bars:** The Pet Action, Shapeshift, Bag, and Micro Menu Bars.
- **Page:** A set of action IDs that can be applied to the buttons on a bar through various commands: scrolling the mousewheel over the bar, keybindings, slash commands, responses, functions, etc.  Pages are always referred to by number.
- **Profile:** A profile is one set of saved DAB settings.  Multiple characters can share the same profile.  If a change is made on any one of those characters, it's made to characters using the same profile.  You can create as many profiles as you want.
- **Response:** A action performed in response to a condition becoming true.  A response is only run once its condition becomes false and then becomes true again.

**Action IDs:**

As of DAB v3.1, action IDs have been separated from button IDs.  Now any button can have any action ID applied to it.  When you add a new button to a bar or create a new floater, DAB will look for an unused action ID (one that's not used in any button on any page of a bar and not used in any floater) to apply to the button.  If DAB can't find one, it applies action ID 1 to the button.  A button's default action ID can be set in the Set Action IDs tab of the Button Layout window.  See that window's section of the readme for further details.

**Bar Pages:** 

Bars in DAB can now have multiple pages, just like the default UI's main action bar.  The number of pages a bar has is set in the Button Layout window. You can change pages on bar by scrolling the mousewheel while the cursor is over the bar, using keybindings, using a control box, using the /dab barpage slash command, or the DAB_Bar_SetPage function.  See the appropriate sections below for details on each of those methods.
A page is simply a separate set of action IDs applied to the bar's buttons.  The bar's button IDs never change.  These action IDs are defined in the Set Action IDs tab of the Button Layout window.

**Profiles:**

Profiles are a set of settings you can load on the fly.  All characters start out using the Default profile.  You can change the Default profile's settings.  Different characters can use different profiles or multiple characters can share a single profile.  If you make a change to the profile on any one of the characters using it, the change is made for all characters that use the profile.  Profiles can be created and loaded in Misc Options.  Creating a new profile copies the settings from the currently loaded profile into the newly created profile.
The Custom profile is a special profile used to load settings from the DAB_Custom.lua file.  ***DO NOT MAKE CHANGES TO THIS PROFILE.  THEY WILL NOT SAVE.***  If you load a custom layout and need to make changes to it, make sure you create a new profile first or your changes won't be saved.

**Custom Layouts:**

DAB supports the ability for users to install layouts built by other users.  All it takes is a DAB_Custom.lua file from the other user.  Drop it into your Interface\AddOns\DiscordActionBars folder while WoW isn't running and replace whatever DAB_Custom.lua file is already there.  If the custom layout comes with any .blp or .tga files, drop them in the Interface\AddOns\DiscordActionBars\CustomTextures folder.  If the custom layout comes with any .ttf files, drop them in the Interface\AddOns\DiscordActionBars\CustomFonts folder.  Log-in to WoW.  Go to Misc Options, load the Custom profile and voila, you're done.
The Custom profile is a special profile used to load settings from the DAB_Custom.lua file.  ***DO NOT MAKE CHANGES TO THIS PROFILE.  THEY WILL NOT SAVE.***  If you load a custom layout and need to make changes to it, make sure you create a new profile first or your changes won't be saved.
To create a custom layout, grab the Custom File Extractor mods available a [http://www.discordmods.com](https://web.archive.org/web/20061205060437/http://www.discordmods.com/cgi-bin/page.pl).  Follow the instructions within the readme.txt file each extractor mod has. Email it to Lozareth at **kuroi_kaminari@hotmail.com** if you'd like to have it posted on the Discord site. Please include a screenshot.
