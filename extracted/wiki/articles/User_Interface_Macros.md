---
title: "User Interface Macros"
url: "https://turtle-wow.fandom.com/wiki/User_Interface_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:23:30Z"
fetched: "2026-09-10T07:39:56Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# User Interface Macros

## Action Button ID
Mouseover a action bar button and use this macro to get the ID
 <code>/run local a=GetMouseFocus()message(ActionButton_GetPagedID(a))</code>

This will print all the slot and texture names where abilities are placed
 <code>/run for i=1,72 do if GetActionTexture(i) then DEFAULT_CHAT_FRAME:AddMessage("Slot "..i..": "..GetActionTexture(i))end end</code>

  -Here you can see where the actionID slots in your actionbars are:**
ActionBar page 1: slots 1 to 12
ActionBar page 2: slots 13 to 24
ActionBar page 3 (Right ActionBar): slots 25 to 36
ActionBar page 4 (Right ActionBar 2): slots 37 to 48
ActionBar page 5 (Bottom Right ActionBar): slots 49 to 60
ActionBar page 6 (Bottom Left ActionBar): slots 61 to 72

## Bag slot ID
Bags are numbered on the right, (4) (3) (2) (1) (0)
Slots in bags are numbered like this:
1 2 3 4 

5 6 7 8

9 10 .... etc

This macro prints the ID of the bag slot that is mouse focused
 <code>/run DEFAULT_CHAT_FRAME:AddMessage(GetMouseFocus():GetParent():GetID()..", "..GetMouseFocus():GetID())</code>

## Duration
Shows your buff/debuff durations in seconds.
 <code>/run for i=0,31 do local id,cancel = GetPlayerBuff(i,"HELPFUL|HARMFUL|PASSIVE"); if(id > -1) then local timeleft = GetPlayerBuffTimeLeft(id); DEFAULT_CHAT_FRAME:AddMessage(timeleft); end end</code>

## Actionbar Page
Switches between actionbar page 1 and 2
 <code>/run if (CURRENT_ACTIONBAR_PAGE == 1) then CURRENT_ACTIONBAR_PAGE = 2; else CURRENT_ACTIONBAR_PAGE = 1; end; ChangeActionBarPage();</code>

Change Action Bar
 <code>/run if (CURRENT_ACTIONBAR_PAGE == 1) then CURRENT_ACTIONBAR_PAGE = 2; ChangeActionBarPage();  elseif(CURRENT_ACTIONBAR_PAGE == 2) then CURRENT_ACTIONBAR_PAGE = 1; ChangeActionBarPage(); end</code>

## Clear Action Bars
Clears all the buttons off of action bars
 <code>/run for i = 1,120 do PickupAction(i) ClearCursor() end</code>

## UI Errors Frame
This one toggles on and off melee skill spam
 <code>/run local f = UIErrorsFrame if f:IsVisible() then f:Hide() else f:Show() end</code>
This one hides melee skill spam
 <code>/run UIErrorsFrame:Hide()</code>

## Events
This toggles on and off the ongoing events in the chat frame
 <code>/run if not f then f = CreateFrame('FRAME') end if f:GetScript('OnEvent') then f:UnregisterAllEvents()f:SetScript('OnEvent', nil) else f:RegisterAllEvents()f:SetScript('OnEvent', function()DEFAULT_CHAT_FRAME:AddMessage(event)end) end</code>
This displays the ongoing events in the chat frame
 <code>/run f = CreateFrame('FRAME')f:RegisterAllEvents()f:SetScript('OnEvent', function()DEFAULT_CHAT_FRAME:AddMessage(event)end)</code>

This hides the ongoing events in the chat frame
 <code>/run f:UnregisterAllEvents()f:SetScript('OnEvent', nil)</code>

This hides some of the redundant chat events
 <code>/run EventUnregister = {"CHAT_MSG_ADDON", "CHAT_MSG_CHANNEL", "CHAT_MSG_CHANNEL_LEAVE", "CHAT_MSG_CHANNEL_JOIN", "CHAT_MSG_GUILD"} for i = 1, getn(EventUnregister) do f:UnregisterEvent(EventUnregister[i])end</code>

## Switch Mode
Full-screen to windowed mode
 <code>/run currentRes = GetCurrentResolution(); if (currentRes == 3) then SetScreenResolution(15); SetCVar("gxWindow", 0); SetMultisampleFormat(16);else SetCVar("gxWindow", 1); SetScreenResolution(3); SetMultisampleFormat(1); end;</code>
Replace the 15 in SetScreenResolution with your selected high-res index, the 16 in SetMultisampleFormat with your selected colour depth/anti-aliasing, and the 3 in Set/GetScreenResolution with your preferred windowed res. To finish this one off, drop it into a popup button and go to key bindings, link in “alt-enter”. That way, alt-enter will alternate between windowed and full-screen. You can also work in any of the above Farclip etc calls to further alter the settings between windowed and full-screen, depending on how your machine behaves – experiment and see.

## Cursor Position
This calculates and prints the coordinates of the cursor
 <code>/run local x,y=GetCursorPosition() local s=UIParent:GetEffectiveScale() x,y=floor(x/s),floor(y/s) DEFAULT_CHAT_FRAME:AddMessage(format("Cursor: %d, %d",x,y))</code>

## Get Pet Action Info
This prints name and number of pet skills
 <code>/run for i=1,100 do if GetPetActionInfo(i) then DEFAULT_CHAT_FRAME:AddMessage("Index "..i..": "..GetPetActionInfo(i)) end end</code>

## Buff / Debuff
This prints the texture names of any buffs and debuffs on the target
 <code>/run function m(s) DEFAULT_CHAT_FRAME:AddMessage(s); end for i=1,16 do s=UnitBuff("target", i); if(s) then m("B "..i..": "..s); end s=UnitDebuff("target", i); if(s) then m("D "..i..": "..s); end end</code>

This prints the texture names of any of the buffs on you
 <code>/run i=1; while UnitBuff("player",i)~=nil do DEFAULT_CHAT_FRAME:AddMessage(UnitBuff("player",i)); i=i+1; end</code>

## Talent Info
This prints the name and texture name of talents
 <code>/run for page = 1,3 do for index = 1,25 do local name, icon = GetTalentInfo(page,index) if name and icon then DEFAULT_CHAT_FRAME:AddMessage(name .. ":" .. icon) end end end</code>

This print all indexes in the talent trees with talent name
 <code>/run for page = 1,3 do for index = 1,25 do local name = GetTalentInfo(page,index) if name then DEFAULT_CHAT_FRAME:AddMessage(page .. "," .. index ..": ".. name) end end end</code>

## Tracking Texture
Use the script to get the current Tracking Texture
 <code>/run icon= GetTrackingTexture() DEFAULT_CHAT_FRAME:AddMessage(icon)</code>

Action Bar Gryphons

Hide action bar gryphons
 <code>/run MainMenuBarLeftEndCap:Hide(); MainMenuBarRightEndCap:Hide()</code>

## Inventory
  -In the inventory, the slots are numbered like this:**

  -1_______10**

  -2_______6**

  -3_______7**

  -15______8**

  -4_______11**

  -5_______12**

  -19______13**

  -9_______14**

  -16 17 18**

This prints the name and slot of equipped items
 <code>/run for i=0,23 do if GetInventoryItemLink("player",i) then DEFAULT_CHAT_FRAME:AddMessage("Slot "..i..": "..GetInventoryItemLink("player",i)) end end</code>

## main menu
Open the main menu
 <code>/run ToggleGameMenu();</code>

This Key-binds Esc to toggle the main menu
 <code>/run SetBinding("ESCAPE","TOGGLEGAMEMENU")SaveBindings(1)</code>

## MAX Graphics
More than MAX graphics settings can be applied to the Config.wtf file however, depending on your server's restrictions this may or may not have an effect.
 <code>/console groundEffectDensity 256
 /console groundEffectDist 170
 /console detailDoodadAlpha 100
 /console farclip 777
 /console horizonfarclip 6226
 /console smallcull 0
 /console maxLOD 3
 /console SkyCloudLOD 3
 /console characterAmbient 1</code>

## Toggle Mouselook
This toggle mouselook on or off
 <code>/run if IsMouselooking() then MouselookStop() else MouselookStart() end</code>

## Player Frame
This enable or disable moving for player frame
 <code>/run if not m then PlayerFrame:SetMovable(1)PlayerFrame:StartMoving()m=true else PlayerFrame:StopMovingOrSizing()PlayerFrame:SetMovable()m=false end</code>

Move player unit frame
 <code>/run PlayerFrame:SetMovable(1)PlayerFrame:StartMoving()</code>

Stop moving player unit frame
 <code>/script PlayerFrame:StopMovingOrSizing()PlayerFrame:SetMovable()</code>

Use these scripts to move player and target frame. Adjust the coordinates to your liking.
 <code>/run PlayerFrame:ClearAllPoints() PlayerFrame:SetPoint("CENTER",UIParent,-150,-150)PlayerFrame:SetUserPlaced(true)
 /run TargetFrame:ClearAllPoints() TargetFrame:SetPoint("CENTER",UIParent,150,-150)TargetFrame:SetUserPlaced(true)</code>

## Target Frame
This enable or disable moving for target frame
 <code>/run if not n then TargetFrame:SetMovable(1)TargetFrame:StartMoving()n=true else TargetFrame:StopMovingOrSizing()TargetFrame:SetMovable()n=false end</code>

Move target unit frame
 <code>/run TargetFrame:SetMovable(1)TargetFrame:StartMoving()</code>

Stop moving target unit frame
 <code>/run TargetFrame:StopMovingOrSizing()TargetFrame:SetMovable()</code>

## Minimap
This resizes the minimap scale to 1.5 and allows you to move it around by clicking and dragging with the mouse
 <code>/run local x,t=Minimap,true x:SetScale(1.5) x:EnableMouse(t) x:SetMovable(t) x:RegisterForDrag("LeftButton") x:SetScript("OnDragStart",function() x:StartMoving() end) x:SetScript("OnDragStop",function() x:StopMovingOrSizing() end)</code>

Moving Minimap to farm mode (adjust the 0, 0 to the coordiantes you'd like to have it)
 <code>/run Minimap:SetWidth(500); Minimap:SetHeight(500); Minimap:SetPoint("CENTER", UIParent, "CENTER", 0, 0)</code> 

Default size and position
 <code>/run Minimap:SetWidth(140); Minimap:SetHeight(140); Minimap:SetPoint("CENTER", UIParent, "CENTER", 755, 380)</code>

## UI Element
To discover the names of the UI elements, use this one
 <code>/script DEFAULT_CHAT_FRAME:AddMessage( GetMouseFocus():GetName() );</code>

## Spellbook
This prints the name and id of all the skills in your spellbook
 <code>/run local i=1;while true do local spellName,spellRank=GetSpellName(i,BOOKTYPE_SPELL);if not spellName then break;end;DEFAULT_CHAT_FRAME:AddMessage(i..": "..spellName..'('..spellRank..')');i=i+1;end</code>

This prints the spellbook
 <code>/run local name,rank,i; for i=1,200,1 do name,rank=GetSpellName(i,BOOKTYPE_SPELL); if name then DEFAULT_CHAT_FRAME:AddMessage(i .. " = " .. name .. " / " .. rank); end; end</code>

## Toggle Action Bars
This hides or shows all the extra action bars
 <code>/run local s,t="SHOW_MULTI_ACTIONBAR_","HIDE_MULTI_ACTIONBAR_" local x=not getglobal(s.."1") for i=1,4 do setglobal(s..i,x) setglobal(t..i,not x) end MultiActionBar_Update()</code>

This shows all the extra action bars
 <code>/run local x=not SHOW_MULTI_ACTIONBAR_1 SHOW_MULTI_ACTIONBAR_1=x SHOW_MULTI_ACTIONBAR_2=x SHOW_MULTI_ACTIONBAR_3=x SHOW_MULTI_ACTIONBAR_4=x UIOptionsFrame:Show() UIOptionsFrame:Hide() ToggleGameMenu();</code>

## Spell ID
Use this to find SpellBookID of a specific spell (replace SpellName in "SpellName")
 <code>/script for id = 1, 180, 1 do local spellName, subSpellName = GetSpellName(id, SpellBookFrame.bookType);if spellName and string.find(spellName, "SpellName", 1, true) then ChatFrame1:AddMessage("ID is "..id, 1.0, 1.0, 0.5); end; end;</code>

Use this if you want to test you have the right spell. (replace X with the number you want to test)
 <code>/script DEFAULT_CHAT_FRAME:AddMessage(GetSpellName(X,0));</code>

## Name
Toggle on / off player names
 <code>/run if ( GetCVar("UnitNamePlayer") == "1" ) then SetCVar("UnitNamePlayer",0) else SetCVar("UnitNamePlayer",1) end</code>

Toggle on / off NPC names
 <code>/run if ( GetCVar("UnitNameNPC") == "1" ) then SetCVar("UnitNameNPC",0) else SetCVar("UnitNameNPC",1) end</code>

Toggle Pet name
 <code>/run if PetName then if PetName:IsVisible() then PetName:Hide() else PetName:Show() end end</code>

## Icon Names
Buffs in vanilla use interface names from the icon they have. That means you use the names of the icons to check instead of the actual buff name. Any more advanced checking wont fit inside a single macro. This is fairly confusing so in order to get the icon name you need to figure it out first.
List all icon names of buffs of your target.
 <code>/run for i=1,40 do if UnitBuff("target",i) then DEFAULT_CHAT_FRAME:AddMessage(tostring(i.."="..UnitBuff("target",i)),0.4,1,1) end end</code>

List all icon names of debuffs of your target.
 <code>/run for i=1,40 do if UnitDebuff("target",i) then DEFAULT_CHAT_FRAME:AddMessage(tostring(i.."="..UnitDebuff("target",i)),0.4,1,1) end end</code>

Check if a target has a certain buff icon name
 <code>/run for i=1,40 do if(strfind(tostring(UnitBuff("target",i)),"MyBuffName")) then c="Yes" end end if not c="Yes" then c="No" end DEFAULT_CHAT_FRAME:AddMessage(c)</code>

Check if a target has a certain debuff icon name
 <code>/run for i=1,40 do if(strfind(tostring(UnitDebuff("target",i)),"MyBuffName")) then c="Yes" end end if not c="Yes" then c="No" end DEFAULT_CHAT_FRAME:AddMessage(c)</code>
There is another way to check proper buff names and buff descriptions by exploiting the tooltip information but it’s unwieldy and requires long bouts of code. This is very unsuitable to be used in macros. Here are some examples if you want to try anyway:

List all the buff names of your target:
 <code>/run g=GameTooltip g:SetOwner(WorldFrame) t=GameTooltipTextLeft1 for i=1,32 do g:SetUnitBuff("target",i) if t:GetText() then DEFAULT_CHAT_FRAME:AddMessage(i.."="..t:GetText(),0.4,1,1) g:ClearLines() end end g:Hide()</code>

List all the buff descriptions of your target:
 <code>/run g=GameTooltip g:SetOwner(WorldFrame) t=GameTooltipTextLeft2 for i=1,32 do g:SetUnitBuff("target",i) if t:GetText() then DEFAULT_CHAT_FRAME:AddMessage(i.."="..t:GetText(),0.4,1,1) g:ClearLines() end end g:Hide()</code>

List all player buff names:
 <code>/run g=GameTooltip g:SetOwner(WorldFrame) t=GameTooltipTextLeft1 for i=1,32 do g:SetPlayerBuff(i) if t:GetText() then DEFAULT_CHAT_FRAME:AddMessage(i.."="..t:GetText(),0.4,1,1) end end</code>

List all player buff descriptions:
 <code>/run g=GameTooltip g:SetOwner(WorldFrame) t=GameTooltipTextLeft2 for i=1,32 do g:SetPlayerBuff(i) if t:GetText() then DEFAULT_CHAT_FRAME:AddMessage(i.."="..t:GetText(),0.4,1,1) end end</code>
