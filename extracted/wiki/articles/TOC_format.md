---
title: "TOC format"
url: "https://turtle-wow.fandom.com/wiki/TOC_format"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T04:11:29Z"
fetched: "2026-09-10T07:39:45Z"
is_turtle_content: false
patch: null
categories: []
---
# TOC format

The .TOC file format defines information about each addon installed, as well as specify which .xml file needs to be loaded.  It is currently required for an addon to be recognized, show up in the addons list and be loaded.  The TOC filename must match the folder name in order for it to be recognized by WoW.

WoW reads up to the first 1024 characters of each line only.  Additional characters are ignored and do not cause an error.

# Where
  World of Warcraft\Interface\AddOns\*MyAddon*\*MyAddon*.toc

# Client Recognized Tags
Each tag is preceeded by <code>## </code>, some postfixed with a localization label. Each occupies one line.

<code>Title</code> and <code>Notes</code> can be localized for other languages. For a complete list of localization labels, see [API GetLocale](API GetLocale).

## Interface
The interface number is a way of telling WoW which version of the client it was made for. If there is a version mismatch, the AddOn is disabled by default. However, if the user explicitly turns off version checking the AddOn will continue to function regardless of what the interface version number in the .TOC file says.

  ## Interface: 11200

## Title
This text is what is displayed in the AddOns list located during user selection.  It also appears when you mouseover the name of the AddOn in the WoW Addons list.  Localized versions can be included by appending a hyphen followed by the localization label.  The appropriate label will be shown to the user.

 ## Title: My Addon
 ## Title-deDE: Titel
 ## Title-frFR: Titre

<code>Title</code> also supports the addition of color, similar to the way [item links](ItemLink) are colored internally. This will display "-Ace2- in a foam green color.

 ## Title: ag_UnitFrames  |cff7fff7f -Ace2-|r

## Notes
The message that appears under the AddOn name when you mouseover the name of the AddOn in the WoW AddOns list.  Localized versions can be included by appending a hyphen followed by the localization label.  The appropriate label will be shown to the user.

 ## Notes: This is my first AddOn.
 ## Notes-deDE: Informationen
 ## Notes-frFR: Texte

## RequiredDeps
This metatag is to force the WoW client to only load this AddOn if a functional dependency exists on the system. Some AddOns make use of 3rd party libraries and AddOns in order to function properly. If any of the required dependencies are missing, the AddOn will fail to function. The names used should be the directory names of the AddOns. The list is comma seperated.

 ## Dependencies: someAddOn, someOtherAddOn
Alternativly you could also use:
 ## RequiredDeps: someAddOn, someOtherAddOn

  -Note**: *Dependencies*, *RequiredDeps*, and  *Dependancies* [sic] all give the same result.

## OptionalDeps
Optional dependencies are external libraries or AddOns which can be used by the AddOn to use and implement their functionality if they exist. If the optional dependencies are not found on the system, the AddOn will continue to function, however, the AddOn using Optional dependencies must be written to work without these dependencies in order for the AddOn to function without them. 

 ## OptionalDeps: someAddOn, someOtherAddOn

## LoadOnDemand
As of patch 1.7, AddOns can be loaded on demand rather than always loaded when the user first logs in.  If this is enabled, this addon must be loaded by another addon at some later point.  This is useful in saving memory by avoiding loading special-purpose addons.

 ## LoadOnDemand: 1
 ## LoadOnDemand: 0

## LoadWith
New since patch 1.9.  Together with LoadOnDemand, this gets your AddOn loaded when one of these AddOns (which would usually be Blizzard UI modules like Blizzard_AuctionUI) is loaded.

 ## LoadWith: someAddOn, someOtherAddOn

## SavedVariables
Used since interface version 2150, Saved Variables are now the current way of storing data in between sessions. These variables are loaded when the client is started, or when the UI is reloaded.  The SavedVariables metatag now replaces the function RegisterForSave which is now no longer supported by the WoW client. Note that saved variables are not completely loaded during the OnLoad event and thus must be assumed to contain nil values until the event ADDON_LOADED has been invoked with arg1 set to the name of your Addon's folder.

The value for the tag is a comma-seperated list of variables.

 ## SavedVariables: someVariable, someOtherVariable

This is more powerful than registering your variables for save in the script, since this will be honored even if your AddOn is disabled by the UI, or because of an error or version mismatch.

### SavedVariablesPerCharacter
This tag behaves exactly like [SavedVariables](#SavedVariables) except that the variables are saved on a Per-Character basis.  This tag only used to use character names to differentiate between characters, but now uses both the realm name and the character name.  

 ## SavedVariablesPerCharacter: somePercharVariable

## DefaultState
Determines whether or not this addon is enabled by default when installed. If it is set to disabled, the user must explicitly turn it on in the AddOns interface located during user selection.  If this tag is not specified the default is enabled.  

 ## DefaultState: enabled
 ## DefaultState: disabled

The enabled/disabled state of all the installed addons will be written to <code>WTF\Account\{youraccount}\AddOns.txt</code>, and this file overrides the old <code>DisabledAddOns.txt</code> file, which will still be loaded for backwards compatiblity.

## Secure
This header field was added to the Blizzard_ AddOns that are part of the default UI in 1.11.  It's exact purpose is unknown, but one possibility is that it tells the client whether it should look for a signature for the AddOn or not.  

 ## Secure: 1

# Non-Standard Tags
It is possible to add more information using the ## directive, and some 3rd party programs even make use of some information provided.  Below are some commonly used in addons.

## AddOn Metadata Tags
These fields, along with [Title](#Title) and [Notes](#Notes) can be retreived using [GetAddOnMetadata](API GetAddOnMetadata).

### Author
The name, possibly the e-mail address, of the Author(s).

 ## Author: MyName

### Version
The version of the AddOn. Can be any string, but since tools for automatic updating parse numbers, it is best if it at least begins with a numeric version.

 ## Version: 1.0

### X-<data>
Any field that starts with 'X-'

 ## X-email: Author@Domain.com
 ## X-Foo: I love pancakes 
 ## X-Foo-esES: Te quiero, mi esposa 

## Ace2 Comment Tags
Unlike Ace, Ace2 picks up AddOn metadata directly from the TOC file. Special processing is done on certain fields, namely **Version** and **X-Date**, so that you can use CVS or Subversion keywords such as $Rev$ as their value.

In addition to the regular fields, it will also look for the following custom fields.

### X-Date
Release date of the AddOn.

 ## X-Date: 01-06-2006

### X-eMail
Email of the AddOn's author.

 ## X-eMail: officers@alexstraza.net

### X-Website
Website of the AddOn

 ## X-Website: http://www.alexstraza.net

### X-Category
Ace2 category of the AddOn.

 ## X-Category: Raid

The categories are declared in AceAddon.lua.

<pre>local CATEGORIES = {
	["Action Bars"] = "Action Bars",
	["Auction"] = "Auction",
	["Audio"] = "Audio",
	["Battlegrounds/PvP"] = "Battlegrounds/PvP",
	["Buffs"] = "Buffs",
	["Chat/Communication"] = "Chat/Communication",
	["Druid"] = "Druid",
	["Hunter"] = "Hunter",
	["Mage"] = "Mage",
	["Paladin"] = "Paladin",
	["Priest"] = "Priest",
	["Rogue"] = "Rogue",
	["Shaman"] = "Shaman",
	["Warlock"] = "Warlock",
	["Warrior"] = "Warrior",
	["Healer"] = "Healer",
	["Tank"] = "Tank",
	["Caster"] = "Caster",
	["Combat"] = "Combat",
	["Compilations"] = "Compilations",
	["Data Export"] = "Data Export",
	["Development Tools "] = "Development Tools ",
	["Guild"] = "Guild",
	["Frame Modification"] = "Frame Modification",
	["Interface Enhancements"] = "Interface Enhancements",
	["Inventory"] = "Inventory",
	["Library"] = "Library",
	["Map"] = "Map",
	["Mail"] = "Mail",
	["Miscellaneous"] = "Miscellaneous",
	["Quest"] = "Quest",
	["Raid"] = "Raid",
	["Tradeskill"] = "Tradeskill",
	["UnitFrame"] = "UnitFrame",
}</pre>

## Miscellaneous Comment Tags
### eMail
The eMail Address of the Author.

 ## eMail: Author@Domain.com

### URL
The Homepage address of the Author or Addon.

 ## URL: http://wow.mywebsite.com/

# Example .toc file
 ## Interface: 11200
 ## Title : My AddOn
 ## Notes: This AddOn does nothing but display a frame with a button
 ## Author: My Name
 ## eMail: Author@Domain.com
 ## URL: http://www.wowwiki.com/
 ## Version: 1.0
 ## Dependencies: Sea
 ## OptionalDeps: Chronos
 ## DefaultState: enabled
 ## SavedVariables: settingName, otherSettingName
 myAddOn.xml
 MyFrame.xml
 MyButton.xml
