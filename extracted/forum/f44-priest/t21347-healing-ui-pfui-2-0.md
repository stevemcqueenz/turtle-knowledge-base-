---
title: "Healing UI PfUI 2.0"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=21347"
topic_id: 21347
forum_id: 44
forum: "Priest"
author: "Ttvvamprettaz"
author_authority: "player"
posted: "2025-08-24T08:38:00Z"
last_post: "2025-10-23T22:04:00Z"
post_count: 12
pages: 1
fetched: "2026-09-10T08:07:05Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Healing UI PfUI 2.0

## Post 147972 by Ttvvamprettaz — 2025-08-24T08:38:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=147972#p147972 | page 1 | era: pre-1.18.1 -->

Hello guys I thought id just put my interface on here for healers :D Tell me ur feedback!

You need addons pfUI and pfUI skins! download them!

<https://ibb.co/4wGqYrBs>
<https://ibb.co/PvHJ0YJk>

UI PICTURES HERE ^^^^^^^^

pfui confg > share > decode > CTRL + A to delete > then copy this in > import :D enjoy!

Import this code!

pfUI_config = {
["disabled"] = {
["totems"] = "0",
["pixelperfect"] = "0",
["unlock"] = "0",
["roll"] = "0",
["feigndeath"] = "0",
["chatcopy"] = "0",
["gryphons"] = "0",
["map"] = "0",
["tooltip"] = "0",
["hdgraphic"] = "0",
["player"] = "0",
["updatenotify"] = "0",
["hunterbar"] = "0",
["buffwatch"] = "0",
["mapreveal"] = "0",
["bags"] = "0",
["superwow"] = "0",
["chat"] = "0",
["autoshift"] = "0",
["turtle-wow"] = "0",
["focus"] = "0",
["thirdparty-vanilla"] = "0",
["raid"] = "0",
["targettarget"] = "0",
["sellvalue"] = "0",
["nameplates"] = "0",
["mirrortimers"] = "0",
["share"] = "0",
["buff"] = "0",
["bubbles"] = "0",
["easteregg"] = "0",
["uf_tukui"] = "0",
["skin"] = "0",
["infight"] = "0",
["xpbar"] = "0",
["addons"] = "0",
["pet"] = "0",
["macrotweak"] = "0",
["turtle-selldata"] = "0",
["mapcolors"] = "0",
["eqcompare"] = "0",
["thirdparty"] = "0",
["tracking"] = "0",
["group"] = "0",
["farmmode"] = "0",
["targettargettarget"] = "0",
["addonbuttons"] = "0",
["energytick"] = "0",
["gm"] = "0",
["custom"] = "0",
["whisperproxy"] = "0",
["questitem"] = "0",
["autovendor"] = "0",
["loot"] = "0",
["hoverbind"] = "0",
["panel"] = "0",
["target"] = "0",
["addoncompat"] = "0",
["castbar"] = "0",
["itemclick"] = "0",
["screenshot"] = "0",
["pettarget"] = "0",
["unusable"] = "0",
["mouseover"] = "0",
["afkcam"] = "0",
["firstrun"] = "0",
["actionbar"] = "0",
["minimap"] = "0",
["socialmod"] = "0",
["cooldown"] = "0",
["combopoints"] = "0",
},
["chat"] = {
["global"] = {
["tabmouse"] = "1",
["border"] = "0,0,0,0",
["background"] = "0,0,0,0.3",
["custombg"] = "1",
},
["text"] = {
["outline"] = "0",
},
["left"] = {
["height"] = "160",
["width"] = "405",
},
["right"] = {
["enable"] = "1",
["height"] = "160",
["width"] = "405",
},
},
["bars"] = {
["bar3"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar8"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar9"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar1"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar7"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar6"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar10"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar2"] = {
["enable"] = "1",
["icon_size"] = "22",
["showempty"] = "0",
["background"] = "0",
},
["bar12"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar5"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar11"] = {
["icon_size"] = "22",
["background"] = "0",
},
["bar4"] = {
["icon_size"] = "22",
["background"] = "0",
},
},
["buffbar"] = {
["pdebuff"] = {
["height"] = "14",
["enable"] = "1",
},
["pbuff"] = {
["height"] = "14",
["enable"] = "1",
},
["tdebuff"] = {
["selfdebuff"] = "1",
["height"] = "14",
["enable"] = "1",
},
},
["global"] = {
["profile"] = "Healer UI",
},
["appearance"] = {
["infight"] = {
["common"] = "1",
},
["bags"] = {
["movable"] = "1",
["abovechat"] = "1",
},
["border"] = {
["color"] = "0,0,0,1",
["bags"] = "3",
["panels"] = "1",
["unitframes"] = "1",
["default"] = "1",
["background"] = "0.1,0.1,0.1,0.8",
["actionbars"] = "1",
["chat"] = "2",
},
},
["tooltip"] = {
["position"] = "free",
},
["panel"] = {
["use_unitfonts"] = "1",
},
["version"] = "5.5.4",
["position"] = {
["pfFocus"] = {
["xpos"] = -255,
["parent"] = "UIParent",
["ypos"] = -98,
["anchor"] = "RIGHT",
},
["pfDurability"] = {
["xpos"] = 198,
["parent"] = "UIParent",
["ypos"] = 165,
["anchor"] = "BOTTOMLEFT",
},
["pfPartyPet1"] = {
["xpos"] = 207,
["anchor"] = "TOPLEFT",
["ypos"] = -265,
["scale"] = 0.8,
["parent"] = "UIParent",
},
["pfBank"] = {
["xpos"] = 934,
["parent"] = "UIParent",
["ypos"] = -154,
["anchor"] = "TOPLEFT",
},
["pfRaid14"] = {
["xpos"] = 100,
["anchor"] = "BOTTOM",
["ypos"] = 236,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid17"] = {
["xpos"] = -104,
["anchor"] = "BOTTOM",
["ypos"] = 209,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid8"] = {
["xpos"] = -2,
["anchor"] = "CENTER",
["ypos"] = -110,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfActionBarPet"] = {
["xpos"] = 10,
["anchor"] = "BOTTOM",
["ypos"] = 49,
["parent"] = "UIParent",
},
["pfPlayer"] = {
["xpos"] = 425,
["parent"] = "UIParent",
["ypos"] = 24,
["scale"] = 0.9,
["anchor"] = "LEFT",
},
["pfRaid13"] = {
["xpos"] = -2,
["anchor"] = "BOTTOM",
["ypos"] = 236,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid16"] = {
["xpos"] = -206,
["anchor"] = "BOTTOM",
["ypos"] = 207,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfTargetTarget"] = {
["xpos"] = -260,
["parent"] = "UIParent",
["ypos"] = 20,
["anchor"] = "RIGHT",
},
["pfRaid15"] = {
["xpos"] = 202,
["anchor"] = "BOTTOM",
["ypos"] = 236,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["TicketStatusFrame"] = {
["xpos"] = 365,
["parent"] = "UIParent",
["ypos"] = 0,
["anchor"] = "TOPLEFT",
},
["pfActionBarPaging"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = -69,
["scale"] = 0.9,
["anchor"] = "CENTER",
},
["pfRaid35"] = {
["xpos"] = 202,
["anchor"] = "BOTTOM",
["ypos"] = 123,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid9"] = {
["xpos"] = 100,
["anchor"] = "CENTER",
["ypos"] = -110,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfActionBarVertical"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = -109,
["anchor"] = "RIGHT",
},
["pfRaid25"] = {
["xpos"] = 202,
["anchor"] = "BOTTOM",
["ypos"] = 180,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfTargetCastbar"] = {
["xpos"] = 279,
["scale"] = 0.9,
["ypos"] = -7,
["anchor"] = "CENTER",
["parent"] = "UIParent",
},
["pfBag"] = {
["xpos"] = 1046,
["parent"] = "UIParent",
["ypos"] = -426,
["anchor"] = "TOPLEFT",
},
["pfRaid28"] = {
["xpos"] = -2,
["anchor"] = "BOTTOM",
["ypos"] = 152,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfPlayerDebuffBar"] = {
["xpos"] = 588,
["anchor"] = "TOPLEFT",
["ypos"] = -394,
["parent"] = "UIParent",
["scale"] = 0.7,
},
["pfGroup3"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = 103,
["scale"] = 1,
["anchor"] = "LEFT",
},
["pfRaid37"] = {
["xpos"] = -104,
["anchor"] = "BOTTOM",
["ypos"] = 95,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfTooltipAnchor"] = {
["xpos"] = -32,
["parent"] = "UIParent",
["ypos"] = 165,
["anchor"] = "BOTTOMRIGHT",
},
["pfRaid24"] = {
["xpos"] = 100,
["anchor"] = "BOTTOM",
["ypos"] = 180,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid29"] = {
["xpos"] = 100,
["scale"] = 1.1,
["ypos"] = 151,
["anchor"] = "BOTTOM",
["parent"] = "UIParent",
},
["pfRaid26"] = {
["xpos"] = -206,
["anchor"] = "BOTTOM",
["ypos"] = 151,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfPet"] = {
["xpos"] = -280,
["parent"] = "UIParent",
["ypos"] = 172,
["anchor"] = "BOTTOMRIGHT",
},
["pfPartyPet3"] = {
["xpos"] = 208,
["scale"] = 0.8,
["ypos"] = 110,
["parent"] = "UIParent",
["anchor"] = "LEFT",
},
["pfRaid27"] = {
["xpos"] = -104,
["anchor"] = "BOTTOM",
["ypos"] = 151,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid32"] = {
["xpos"] = -104,
["anchor"] = "BOTTOM",
["ypos"] = 123,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfLootRollFrame4"] = {
["xpos"] = -279,
["parent"] = "UIParent",
["ypos"] = -262,
["anchor"] = "TOPRIGHT",
},
["pfPartyPet2"] = {
["xpos"] = 186,
["scale"] = 0.9,
["ypos"] = -291,
["parent"] = "UIParent",
["anchor"] = "TOPLEFT",
},
["pfRaidCluster"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = 158,
["scale"] = 1.2,
["anchor"] = "BOTTOMLEFT",
},
["pfRaid6"] = {
["xpos"] = -206,
["anchor"] = "CENTER",
["ypos"] = -111,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid39"] = {
["xpos"] = 100,
["anchor"] = "BOTTOM",
["ypos"] = 95,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfGroup1"] = {
["xpos"] = 1,
["parent"] = "UIParent",
["ypos"] = -204,
["scale"] = 1,
["anchor"] = "TOPLEFT",
},
["WorldMapFrame"] = {
["xpos"] = 0,
["scale"] = 0.69999998807907,
["ypos"] = 0,
["alpha"] = 1,
["anchor"] = "CENTER",
},
["pfRaid12"] = {
["xpos"] = -104,
["anchor"] = "BOTTOM",
["ypos"] = 236,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfTargetDebuffBar"] = {
["xpos"] = 274,
["anchor"] = "CENTER",
["ypos"] = 76,
["parent"] = "UIParent",
["scale"] = 0.9,
},
["pfRaid18"] = {
["xpos"] = -2,
["anchor"] = "BOTTOM",
["ypos"] = 208,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfLootRollFrame2"] = {
["xpos"] = -280,
["parent"] = "UIParent",
["ypos"] = -207,
["anchor"] = "TOPRIGHT",
},
["pfTargetTargetTarget"] = {
["xpos"] = -235,
["parent"] = "UIParent",
["ypos"] = 69,
["anchor"] = "RIGHT",
},
["pfRaid2"] = {
["xpos"] = -104,
["anchor"] = "CENTER",
["ypos"] = -82,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid5"] = {
["xpos"] = 202,
["anchor"] = "CENTER",
["ypos"] = -82,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid36"] = {
["xpos"] = -206,
["anchor"] = "BOTTOM",
["ypos"] = 95,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfParty4Target"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = -85,
["anchor"] = "LEFT",
},
["pfRaid31"] = {
["xpos"] = -206,
["anchor"] = "BOTTOM",
["ypos"] = 123,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid7"] = {
["xpos"] = -104,
["anchor"] = "CENTER",
["ypos"] = -110,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfParty2Target"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = -35,
["anchor"] = "LEFT",
},
["pfRaid33"] = {
["xpos"] = -2,
["anchor"] = "BOTTOM",
["ypos"] = 123,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid10"] = {
["xpos"] = 202,
["anchor"] = "CENTER",
["ypos"] = -110,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid20"] = {
["xpos"] = 202,
["scale"] = 1.1,
["ypos"] = 208,
["anchor"] = "BOTTOM",
["parent"] = "UIParent",
},
["pfLootRollFrame1"] = {
["xpos"] = -281,
["parent"] = "UIParent",
["ypos"] = -181,
["anchor"] = "TOPRIGHT",
},
["pfPlayerCastbar"] = {
["xpos"] = 425,
["anchor"] = "LEFT",
["ypos"] = -13,
["parent"] = "UIParent",
["scale"] = 0.9,
},
["pfGroup0"] = {
["xpos"] = 0,
["anchor"] = "TOPLEFT",
["ypos"] = -159,
["parent"] = "UIParent",
},
["pfPlayerBuffBar"] = {
["xpos"] = 588,
["anchor"] = "LEFT",
["ypos"] = 125,
["parent"] = "UIParent",
["scale"] = 0.7,
},
["pfRaid34"] = {
["xpos"] = 100,
["anchor"] = "BOTTOM",
["ypos"] = 123,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfParty1Target"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = -10,
["anchor"] = "LEFT",
},
["pfRaid40"] = {
["xpos"] = 202,
["anchor"] = "BOTTOM",
["ypos"] = 95,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfLootRollFrame3"] = {
["xpos"] = -280,
["parent"] = "UIParent",
["ypos"] = -234,
["anchor"] = "TOPRIGHT",
},
["pfChatInputBox"] = {
["xpos"] = 0,
["anchor"] = "BOTTOMLEFT",
["ypos"] = 162,
["parent"] = "UIParent",
},
["pfRaid22"] = {
["xpos"] = -104,
["anchor"] = "BOTTOM",
["ypos"] = 180,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfGroup2"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = -254,
["scale"] = 1,
["anchor"] = "TOPLEFT",
},
["pfTarget"] = {
["xpos"] = 275,
["parent"] = "UIParent",
["ypos"] = 30,
["scale"] = 0.9,
["anchor"] = "CENTER",
},
["pfRaid11"] = {
["xpos"] = -206,
["anchor"] = "BOTTOM",
["ypos"] = 235,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid21"] = {
["xpos"] = -206,
["anchor"] = "BOTTOM",
["ypos"] = 179,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid38"] = {
["xpos"] = -2,
["anchor"] = "BOTTOM",
["ypos"] = 95,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfTotems"] = {
["xpos"] = 433,
["parent"] = "UIParent",
["ypos"] = 57,
["anchor"] = "BOTTOMLEFT",
},
["pfRaid23"] = {
["xpos"] = -2,
["anchor"] = "BOTTOM",
["ypos"] = 180,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid30"] = {
["xpos"] = 202,
["anchor"] = "BOTTOM",
["ypos"] = 152,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfRaid4"] = {
["xpos"] = 100,
["anchor"] = "CENTER",
["ypos"] = -82,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfFocusCastbar"] = {
["xpos"] = -213,
["parent"] = "UIParent",
["ypos"] = 260,
["anchor"] = "BOTTOMRIGHT",
},
["pfChatLeft"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = 0,
["anchor"] = "BOTTOMLEFT",
},
["pfRaid3"] = {
["xpos"] = -2,
["anchor"] = "CENTER",
["ypos"] = -82,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfPartyPet4"] = {
["xpos"] = 204,
["scale"] = 0.8,
["ypos"] = 45,
["parent"] = "UIParent",
["anchor"] = "LEFT",
},
["pfParty3Target"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = -63,
["anchor"] = "LEFT",
},
["pfRaid19"] = {
["xpos"] = 100,
["anchor"] = "BOTTOM",
["ypos"] = 208,
["parent"] = "UIParent",
["scale"] = 1.1,
},
["pfChatRight"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = 0,
["anchor"] = "BOTTOMRIGHT",
},
["pfGroup4"] = {
["xpos"] = 0,
["parent"] = "UIParent",
["ypos"] = 49,
["scale"] = 1,
["anchor"] = "LEFT",
},
["pfActionBarStances"] = {
["xpos"] = -18,
["anchor"] = "BOTTOM",
["ypos"] = 76,
["parent"] = "UIParent",
},
["pfFocusTarget"] = {
["xpos"] = -252,
["parent"] = "UIParent",
["ypos"] = -66,
["anchor"] = "RIGHT",
},
["pfRaid1"] = {
["xpos"] = -206,
["anchor"] = "CENTER",
["ypos"] = -82,
["parent"] = "UIParent",
["scale"] = 1.1,
},
},
["nameplates"] = {
["overlap"] = "1",
["use_unitfonts"] = "1",
},
["unitframes"] = {
["grouptarget"] = {
["visible"] = "0",
},
["ptarget"] = {
["pspace"] = "-1",
["height"] = "8",
["portrait"] = "off",
["width"] = "125",
},
["target"] = {
["clickcast"] = "1",
["panchor"] = "TOPLEFT",
["pspace"] = "-1",
["debuffs"] = "off",
["height"] = "35",
["width"] = "225",
["buffsize"] = "14",
["pheight"] = "6",
},
["ttarget"] = {
["pheight"] = "6",
["pspace"] = "-1",
["height"] = "16",
["portrait"] = "off",
["width"] = "125",
},
["player"] = {
["txthpleft"] = "powerdyn",
["panchor"] = "TOPRIGHT",
["pspace"] = "-1",
["pheight"] = "6",
["buffsize"] = "14",
["height"] = "35",
["showPVP"] = "1",
["clickcast"] = "1",
["width"] = "225",
},
["focus"] = {
["pheight"] = "6",
},
["raid"] = {
["indicator_pos"] = "CENTER",
["all_hots"] = "1",
["cooldown_anim"] = "1",
["show_buffs"] = "0",
["indicator_size"] = "12",
["height"] = "24",
["show_hots"] = "1",
["buffsize"] = "5",
["width"] = "100",
},
["custombg"] = "1",
["pet"] = {
["pspace"] = "-1",
["width"] = "125",
["pheight"] = "6",
},
["group"] = {
["visible"] = "0",
},
["tttarget"] = {
["pheight"] = "6",
["pspace"] = "-1",
["height"] = "16",
["portrait"] = "off",
["width"] = "125",
},
["grouppet"] = {
["visible"] = "0",
},
["selfingroup"] = "1",
["customcolor"] = "0.15,0.15,0.15,1",
["custom"] = "1",
["raidforgroup"] = "1",
["custombgcolor"] = "0.5,0.2,0.2,1",
},
}

*Last edited by Ttvvamprettaz on Tue Sep 02, 2025 9:28 pm, edited 4 times in total.*

## Post 148128 by Enemycore909 — 2025-08-25T08:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148128#p148128 | page 1 | era: pre-1.18.1 -->

Hey!
Good one for dungeons!

## Post 148179 by Eroh (Barrens Chat Casualty) — 2025-08-25T14:18:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148179#p148179 | page 1 | era: pre-1.18.1 -->

I don't want to be rude, so i wil say nothing. But i left this comment here.

## Post 148226 by Terrydavis (Patch Note Conspiracy Theorist) — 2025-08-25T17:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148226#p148226 | page 1 | era: pre-1.18.1 -->

hello, that looks like cancer!

correct setting is:

disable group display

show group as raid

hope that helps you!

## Post 148263 by Ttvvamprettaz — 2025-08-25T19:39:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=148263#p148263 | page 1 | era: pre-1.18.1 -->

you can just move what you want, this how I like it, I have a month to sort out the raid frames but yeah its amazing for dungeons :D enjoy guys!

## Post 149947 by Ttvvamprettaz — 2025-09-02T21:30:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=149947#p149947 | page 1 | era: pre-1.18.1 -->

Updated again! Might list my addons? thoughts?

## Post 150246 by Eroh (Barrens Chat Casualty) — 2025-09-04T23:32:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=150246#p150246 | page 1 | era: pre-1.18.1 -->

Now it's Interesting, i said another thing.

## Post 151607 by Numbd — 2025-09-13T19:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151607#p151607 | page 1 | era: pre-1.18.1 -->

This looks sick, how did you get the renew/PW:S in the middle of the frame?  Going to import now to play around with it.

## Post 151636 by Ttvvamprettaz — 2025-09-14T01:35:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=151636#p151636 | page 1 | era: pre-1.18.1 -->

its under indicators in pfui I think, I hope you figure it out   smiling_turtle_head

## Post 156547 by Edem — 2025-10-22T01:11:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156547#p156547 | page 1 | era: 1.18.1-announced-pre-release -->

I've modified the drawing logic for the raid-cluster in pfUI, so it is sorted in a more sensible way:
HORIZONTAL sorting = left->right and top->bottom
VERTICAL sorting = top->bottom and left->right...

so you can move the whole cluster now with the anchor instead of reorganizing the individual raid frames...

![Image](https://i.postimg.cc/mZ8Jb5V7/image.png)

## Post 156772 by Ttvvamprettaz — 2025-10-23T21:24:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156772#p156772 | page 1 | era: 1.18.1-announced-pre-release -->

I dont play turtle WoW so I will not be updating this! im so sorry :D hope you guys enjoy urselves ^^

## Post 156774 by Eroh (Barrens Chat Casualty) — 2025-10-23T22:04:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156774#p156774 | page 1 | era: 1.18.1-announced-pre-release -->

See you when UE5 releases.

