---
title: "API PlaySound"
url: "https://turtle-wow.fandom.com/wiki/API_PlaySound"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T17:00:18Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PlaySound

PlaySound(SoundName);

Play one of a set of built-in sounds.  Other players will not hear the sound.

----
***Arguments***

  (SoundName)
  ;SoundName : String - One of the below sound names (not all these actually make a sound)

 PVPENTERQUEUE - Sound for entering BG queue and when it refreshes periodicly
 PVPTHROUGHQUEUE - You are eligible to enter the battleground!
 GLUESCREENSMALLBUTTONMOUSEDOWN 
 GLUESCREENSMALLBUTTONMOUSEUP 
 GLUESCREENSMALLBUTTONMOUSEOVER 
 GLUESCREENMEDIUMBUTTONMOUSEDOWN 
 GLUESCREENMEDIUMBUTTONMOUSEUP 
 GLUESCREENMEDIUMBUTTONMOUSEOVER 
 GLUESCREENLARGEBUTTONMOUSEDOWN 
 GLUESCREENLARGEBUTTONMOUSEUP 
 GLUESCREENLARGEBUTTONMOUSEOVER 
 GLUESCREENEDITBOXKEYCLICK 
 GLUECHECKBOXMOUSEDOWN 
 GLUECHECKBOXMOUSEUP 
 GLUECHECKBOXMOUSEOVER 
 GLUECHARCUSTOMIZATIONMOUSEDOWN 
 GLUECHARCUSTOMIZATIONMOUSEUP 
 GLUECHARCUSTOMIZATIONMOUSEOVER 
 GLUESCROLLBUTTONMOUSEDOWN 
 GLUESCROLLBUTTONMOUSEUP 
 GLUESCROLLBUTTONMOUSEOVER 
 GAMEABILITYBUTTONMOUSEDOWN 
 GAMESPELLBUTTONMOUSEDOWN 
 GAMEWINDOWOPEN 
 GAMEWINDOWCLOSE 
 GAMEDIALOGOPEN 
 GAMEDIALOGCLOSE 
 GAMENEWWINDOWTAB 
 GAMESCREENSMALLBUTTONMOUSEDOWN 
 GAMESCREENSMALLBUTTONMOUSEUP 
 GAMESCREENSMALLBUTTONMOUSEOVER 
 GAMESCREENMEDIUMBUTTONMOUSEDOWN 
 GAMESCREENMEDIUMBUTTONMOUSEUP 
 GAMESCREENMEDIUMBUTTONMOUSEOVER 
 GAMESCREENLARGEBUTTONMOUSEDOWN 
 GAMESCREENLARGEBUTTONMOUSEUP 
 GAMESCREENLARGEBUTTONMOUSEOVER 
 GAMETARGETFRIENDLYUNIT 
 GAMETARGETHOSTILEUNIT 
 GAMETARGETNEUTRALUNIT 
 GAMEHIGHLIGHTFRIENDLYUNIT 
 GAMEHIGHLIGHTHOSTILEUNIT 
 GAMEHIGHLIGHTNEUTRALUNIT 
 GAMEINITIALATTACK 
 GAMEERROROUTOFRANGE 
 GAMEERROROUTOFMANA 
 GAMEERRORUNABLETOEQUIP 
 GAMEERRORINVALIDTARGET 
 ACTIONBARBUTTONDOWN 
 MAINBUTTONBARMENU 
 MINIMAPZOOMOUT 
 MINIMAPZOOMIN 
 MINIMAPOPEN 
 MINIMAPCLOSE 
 BAGMENUBUTTONPRESS 
 LOOTWINDOWOPEN 
 LOOTWINDOWCLOSE 
 LOOTWINDOWCOINSOUND 
 ITEMWEAPONSOUND 
 ITEMARMORSOUND 
 ITEMGENERICSOUND 
 LEVELUPSOUND 
 GLUECREATECHARACTERBUTTON 
 GLUEENTERWORLDBUTTON 
 SPELLBOOKOPEN 
 SPELLBOOKCLOSE 
 SPELLBOOKCHANGEPAGE 
 PAPERDOLLOPEN 
 PAPERDOLLCLOSE 
 QUESTADDED 
 QUESTCOMPLETED 
 QUESTLOGOPEN 
 QUESTLOGCLOSE 
 GLUEGENERICBUTTONPRESS 
 GAMEGENERICBUTTONPRESS 
 INTERFACESOUND_MONEYFRAMEOPEN 
 INTERFACESOUND_MONEYFRAMECLOSE 
 INTERFACESOUND_CHARWINDOWOPEN 
 INTERFACESOUND_CHARWINDOWCLOSE 
 INTERFACESOUND_CHARWINDOWTAB 
 INTERFACESOUND_GAMEMENUOPEN 
 INTERFACESOUND_GAMEMENUCLOSE 
 INTERFACESOUND_LOSTTARGETUNIT 
 INTERFACESOUND_BACKPACKOPEN 
 INTERFACESOUND_BACKPACKCLOSE 
 INTERFACESOUND_GAMESCROLLBUTTON 
 INTERFACESOUND_CURSORGRABOBJECT 
 INTERFACESOUND_CURSORDROPOBJECT 
 SHEATHINGSHIELDSHEATHE 
 SHEATHINGWOODWEAPONSHEATHE 
 SHEATHINGMETALWEAPONSHEATHE 
 SHEATHINGWOODWEAPONUNSHEATHE 
 SHEATHINGMETALWEAPONUNSHEATHE 
 SHEATHINGSHIELDUNSHEATHE 
 igCreatureAggroDeselect 
 igQuestListOpen 
 igQuestListClose 
 igQuestListSelect 
 igQuestListComplete 
 igQuestCancel 
 igPlayerInvite 
 igPlayerInviteAccept 
 igPlayerInviteDecline 
 GAMEERRORUNABLETOEQUIP 
 ITEMGENERICSOUND 
 GAMEERRORINVALIDTARGET 
 LEVELUP 
 GAMEERROROUTOFRANGE 
 QUESTADDED 
 MONEYFRAMEOPEN 
 MONEYFRAMECLOSE 
 LOOTWINDOWOPEN 
 LOOTWINDOWCLOSE 
 LOOTWINDOWCOINSOUND 
 GAMEHIGHLIGHTHOSTILEUNIT 
 GAMEHIGHLIGHTNEUTRALUNIT 
 GAMEHIGHLIGHTFRIENDLYUNIT 
 INTERFACESOUND_LOSTTARGETUNIT 
 INTERFACESOUND_CURSORGRABOBJECT 
 INTERFACESOUND_CURSORDROPOBJECT 
 GAMESCREENMEDIUMBUTTONMOUSEDOWN 
 GAMEABILITYACTIVATE 
 GAMESPELLACTIVATE 
 gsTitleEnterWorld 
 gsTitleOptions 
 gsTitleQuit 
 gsTitleCredits 
 gsTitleIntroMovie 
 gsTitleOptionScreenResolution 
 gsTitleOption16bit 
 gsTitleOption32bit 
 gsTitleOptionOpenGL 
 gsTitleOptionDirect3D 
 gsTitleOptionFullScreenMode 
 gsTitleOptionOK 
 gsTitleOptionExit 
 gsLogin 
 gsLoginNewAccount 
 gsLoginChangeRealm 
 gsLoginExit 
 gsLoginChangeRealmOK 
 gsLoginChangeRealmSelect 
 gsLoginChangeRealmCancel 
 gsCharacterSelection 
 gsCharacterSelectionEnterWorld 
 gsCharacterSelectionDelCharacter 
 gsCharacterSelectionAcctOptions 
 gsCharacterSelectionExit 
 gsCharacterSelectionCreateNew 
 gsCharacterCreationClass 
 gsCharacterCreationRace 
 gsCharacterCreationGender 
 gsCharacterCreationLook 
 gsCharacterCreationCreateChar 
 gsCharacterCreationCancel 
 igCurrentActiveSpell
 igMiniMapOpen 
 igMiniMapClose 
 igMiniMapZoomIn 
 igMiniMapZoomOut 
 igChatEmoteButton 
 igChatScrollUp 
 igChatScrollDown 
 igChatBottom 
 igSpellBookOpen 
 igSpellBookClose  
 igSpellBokPageTur n 
 igSpellBookSpellIconPickup 
 igSpellBookSpellIconDrop 
 igAbilityOpen 
 igAbilityClose 
 igAbiliityPageTurn 
 igAbilityIconPickup 
 igAbilityIconDrop 
 igCharacterInfoOpen 
 igCharacterInfoClose 
 igCharacterInfoTab 
 igCharacterInfoScrollUp 
 igCharacterInfoScrollDown 
 igQuestLogOpen 
 igQuestLogClose 
 igQuestLogAbandonQuest 
 igQuestFailed 
 igSocialOepn                 [This is Not a Wiki Typo, "igSocialOepn" works in game]
 igSocialClose 
 igMainMenuOpen 
 igMainMenuClose 
 igMainMenuOption 
 igMainMenuLogout 
 igMainMenuQuit 
 igMainMenuContinue 
 igMainMenuOptionCheckBoxOn 
 igMainMenuOptionCheckBoxOff 
 igMainMenuOptionFaerTab 
 igInventoryOepn               [This is Not a Wiki Typo, "igInventoryOepn" works in game]
 igInventoryClose 
 igInventoryRotateCharacter 
 igBackPackOpen 
 igBackPackClose 
 igBackPackCoinSelect 
 igBackPackCoinOK 
 igBackPackCoinCancel 
 igCharacterNPCSelect 
 igCharacterNPCDeselect 
 igCharacterSelect 
 igCharacterDeselect 
 igCreatureNeutralSelect 
 igCreatureNeutralDeselect 
 igCreatureAggroSelect 
 UChatScrollButton 
 Deathbind Sound 
 LOOTWINDOWOPENEMPTY 
 TaxiNodeDiscovered 
 UnwrapGift 
 TellMessage 
 WriteQuest 
 MapPing 
 igBonusBarOpen 
 FriendJoinGame 
 Fishing Reel in 
 HumanExploration 
 OrcExploration 
 UndeadExploration 
 TaurenExploration 
 TrollExploration 
 NightElfExploration 
 GnomeExploration 
 DwarfExploration 
 igPVPUpdate
 ReadyCheck
 RaidWarning
 AuctionWindowOpen
 AuctionWindowClose

----
***Example*
**
 PlaySound("LEVELUPSOUND");

----
;

## Macros
Play RaidWarning sound if target exist<syntaxhighlight lang="lua">
/run if UnitExists("target") then PlaySound("RaidWarning"); else end
</syntaxhighlight>

## Addon
Example from addon named CombatSound<syntaxhighlight lang="lua">
--show the option menu
function CS_ShowMenu()
	PlaySound("igMainMenuOpen")
	ShowUIPanel(getglobal(CONFIG_FRAME))
--	CombatSoundConfigFrame:Show()
end

--hide the option menu
function CS_HideMenu()
	PlaySound("igMainMenuClose")
	HideUIPanel(getglobal(CONFIG_FRAME))
--	CombatSoundConfigFrame:Hide()
end
</syntaxhighlight>
