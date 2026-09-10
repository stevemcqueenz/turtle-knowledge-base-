---
title: "Template:Npcbox"
url: "https://turtle-wow.fandom.com/wiki/Template:Npcbox"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-07-05T17:22:06Z"
fetched: "2026-09-10T07:40:27Z"
is_turtle_content: false
patch: null
categories: ["Ferocity beasts", "Infobox templates", "Templates modifying defaultlinks"]
---
# Template:Npcbox

<onlyinclude><includeonly>{{infobox
|bodystyle=width:20em
|above-icon= {{#if:{}|{{FactionIcon|{}}}}}
|above  = {}
|image  = {{#if:{}|{{SlidesToTabber|{}|{{#if:{}|{}|200x300px}}}}|{{#ifeq:{{lc:{}}}|no||{{#ifexist:File:{}||{{NPC placeholder image|race={{{race|{{#explode:{{#explode:{{#replace:{{#replace:{}|]}}|[}}|,|0}}|(|0}}}}}|gender={}|creature={}|image={}}}}}}}}}
|label1 = Title
|data1  = {{#if:{}|&lt;{}&gt;|{}}} {{#if:{}| (ref: {})}}
|label2 = Gender
|data2  = {{{gender|{}}}}
|label3 = Race{{#if:{}|(s)}}
|data3  = {{#if:{}|{}|{{#ifeq:{}||Unknown|[{{ucfirst:{{lc:{}}}}}]({{ucfirst:{{lc:{}}}}})}} {{#if:{}|({})}}}}
|label4 = Level
|data4  = {{#ifeq:{}|-1||{}}} {}
|label5 = Heroic level
|data5  = {{#if:{}|{} {}}}
|label6 = Class
|data6  = {{{character|{}}}}
|label7 = Health
|data7  = {}
|label8 = Heroic health
|data8  = {}
|label9 = Mana
|data9  = {}
|label10= Wealth
|data10 = {}
|label11= Reaction
|data11 = {}
|label12= Affiliation
|data12 = {{#if:{{{repfaction|{}}}}|[{}}}}]({{{repfaction)|{}}}
|label13= Former affiliation(s)
|data13 = {}
|label14= Occupation
|data14 = {}
|label15= Former occupation(s)
|data15 = {}
|label16= Location
|data16 = {}
|label17= Status
|data17 = {}
|label18= Relative(s)
|data18 = {}
|label19= Mentor(s)
|data19 = {}
|label20= Student(s)
|data20 = {}
|label21= Companion(s)
|data21 = {}
|label22= Alignment
|data22 = {}
|label23= Pet family
|data23 = {{#if:{}|[{}]({})}}
|data24 = {{#if:{}|{{Instance bosses|[{}]({})|{}}}}}
|below= {{#if:{}|Source(s): {}}}}}{{#if:{}||{{#switch:{{lc:{}}}
|bat|bird of prey|chimera|chimaera|crane|dragonhawk|monkey|nether ray|ravager|rylak|serpent|silithid|spider|sporebat|water strider|wind serpent= 
|carrion bird|cat|core hound|devilsaur|dog|fox|goat|hydra|hyena|moth|quilen|raptor|spirit beast|stag|tallstrider|wasp|wolf= 
|basilisk|bear|beetle|boar|clefthoof|crab|crocolisk|direhorn|gorilla|porcupine|rhino|riverbeast|scorpid|shale spider|turtle|warp stalker|worm = }}}}{{#if:{}|{{#ifexist:File:{}|
}}}}{{FactionIcon|{}}}{}{{#if:{}|
&lt;{}&gt;}}{{#if:{}|
Level: {}{{#if:{}|&#32;{}}}}}{{#if:{}|
{}}}</includeonly></onlyinclude>
