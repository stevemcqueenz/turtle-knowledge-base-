---
title: "Template:Questbox"
url: "https://turtle-wow.fandom.com/wiki/Template:Questbox"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-31T21:18:51Z"
fetched: "2026-09-10T07:40:27Z"
is_turtle_content: false
patch: null
categories: []
---
# Template:Questbox

<onlyinclude><includeonly>{{Infobox
|bodystyle    = width: {};
|bodyclass = questbox
|above-icon = {{FactionIcon|{}}}
|above        = {}
|image = {{#if:{}|}}
|imageclass = {}
|imagestyle = {}
|caption = {}
|captionstyle = {}

|label1   = Start
|data1    = {{#ifeq:{{#ifeq:{{#sub:{{lc:{}}}|-11}}|world quest|a}}{{#if:{}|{{#ifeq:{{lc:{}}}|automatic|b}}|b}}{{#if:{}|{{#ifeq:{{lc:{}}}|automatic|c}}|c}}|abc||{}}}
|label2   = End
|data2    = {{#ifeq:{{#ifeq:{{#sub:{{lc:{}}}|-11}}|world quest|a}}{{#if:{}|{{#ifeq:{{lc:{}}}|automatic|b}}|b}}{{#if:{}|{{#ifeq:{{lc:{}}}|automatic|c}}|c}}|abc||{{#if:{}|{}|{}}}}}
|label3   = Level
|data3    = {{#ifeq:{}|-1||{}}}{{#if:{}|&ensp;(Requires {})}} {{#ifeq:{}|60|}}
|label4   = Type
|data4    = {{#ifeq:{{lc:{}}}|solo||{} {{#if:{}|({})}}}}
|label5   = Category
|data5    = {{#if:{{{zone|{{{displaycat|{}}}}}}}|{{#if:{}|[{{{zone|{{{displaycat|{}}}}}}}]({})|[{{{displaycat|{}}}}}}}](:{{{zone)}}}}
|label6   = Experience
|data6    = {}
|label7   = Reputation
|data7    = {}
|label8   = Rewards
|data8    = {{#if:{{{rewards|{}}}}|{}{{#if:{}|{{#if:{}|
}}}}{}}}
|label9   = Repeatable
|data9    = {{#if:{}|{{ucfirst:{}}}}}
|label10  = Shareable
|data10   = {{#ifeq:{{lc:{}}}|yes|Yes|}}
|label11  = Previous
|class11 = questshort
|data11   = {{#if:{}|{}}}
|label12  = Next
|class12 = questshort
|data12   = {{#if:{}|{}}}
}}{{#if:{}|{{{noilink|{{DEFAULTLINK:&nbsp;{{#if:{}|}|Male|size=15px}}}|Female|size=15px}}&nbsp;}}{{#switch:{{lc:{{{class|{}}}}}}|mage|warlock|priest|druid|rogue|shaman|hunter|warrior|paladin=
&nbsp;}}{{#switch:{{lc:{}}}|alchemy|blacksmithing|cooking|enchanting|engineering|first aid|fishing|herbalism|leatherworking|mining|riding|skinning|tailoring={{ProfIcon|{}|size=15px}}&nbsp;}}[{{#ifeq:{}|-1||{}}}{{#switch:{{lc:{}}}|group=G{}|dungeon=D|raid=R|pvp=P|daily=&#32;Daily|daily group=G{} Daily|daily pvp|pvp daily=P Daily|weekly=W|weekly group=WG|elite=E|{}|{{#ifeq:world quest|{{#sub:{{lc:{}}}|-11}}|WQ}}}}
]&nbsp;[|{}](|{})}}}}}
{{{doc|{{#ifeq:|User||{{#if:{{#ifeq:{}|-||1}}|
{{#if:{}|}}{{#if:{}|}}
{{#if:{}|{{#ifeq:{{lc:{}}}|both||}}}}
{{#if:{}|}}
}}}}}}}}}{{FactionIcon|{}}}{}{{#if:{}|
Level: {{#ifeq:{}|-1||{}}}{{#if:{}|&ensp;(Requires {})}}}}{{#if:{}|{{#ifeq:{{lc:{}}}|solo||
Type: {} {{#if:{}|({})}}}}}}{{#ifeq:{{#ifeq:{{#sub:{{lc:{}}}|-11}}|world quest|a}}{{#if:{}|{{#ifeq:{{lc:{}}}|automatic|b}}|b}}{{#if:{}|{{#ifeq:{{lc:{}}}|automatic|c}}|c}}|abc||
 {}
 {{#if:{}|{}|{}}}}}{{#if:{}|
XP: {}}}{{#if:{}|
Rep: {}}}{{#if:{{{rewards|{}}}}|
Rewards:{{#if:{}|
{}}}{{#if:{}|
{}}}}}{{#if:{}|
  *For the {{#ifeq:{{lc:{}}}|alliance|Horde|Alliance}} version of this quest, see [{}]({}).*
}}<!--

CARGO
</includeonly></onlyinclude>
