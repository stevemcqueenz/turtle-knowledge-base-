---
title: "Looking for Macro help"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=13127"
topic_id: 13127
forum_id: 48
forum: "Shaman"
author: "Zahnfee"
author_authority: "player"
posted: "2024-02-17T09:57:00Z"
last_post: "2024-02-17T12:54:00Z"
post_count: 4
pages: 1
fetched: "2026-09-10T08:22:48Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Looking for Macro help

## Post 87997 by Zahnfee (Barrens Chat Casualty) — 2024-02-17T09:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87997#p87997 | page 1 | era: pre-1.18.1 -->

hi guys! i dont know if this would be the right forum for this but since i plan to play shaman i give it a shot!
I started playing wow vanilla again but since my fingers are not as nimble as they once were i realise shaman have a shit ton of buttons by themselves not talking about  Downrank heals, pvp gadgets or other stuff in itself... so i came to the realisation i need some sort of macro to have a few less buttons to press!

What im actually looking for would be a conditional target macro something like if i have a enemy selected player or Target cast Lightning Bolt
else
if i have friend selected Player or Target cast spell Healing Wave

if UnitIsFriend("player", "target") then
CastSpellByName("Healing Wave")
else
CastSpellByName("Lightning Bolt", 1)
end

Something like this! but i dont know what i am missing here it just spams the chat:D maybe im just thinking to stupid idk if someone could help me out i would apreciate it to save myself a few keybinds

## Post 87998 by Zahnfee (Barrens Chat Casualty) — 2024-02-17T09:59:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=87998#p87998 | page 1 | era: pre-1.18.1 -->

oh ehm i might want to add that i have the addon Supermacro on my side if that helps finding a sollution quicker

## Post 88001 by Twospooky — 2024-02-17T10:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88001#p88001 | page 1 | era: pre-1.18.1 -->

/run if UnitCanAttack("player","target") == 1 then CastSpellByName("lightning bolt") else CastSpellByName("healing wave") end

No macro addon needed

## Post 88006 by Zahnfee (Barrens Chat Casualty) — 2024-02-17T12:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=88006#p88006 | page 1 | era: pre-1.18.1 -->

> **Twospooky wrote: Sat Feb 17, 2024 10:53 am**
> /run if UnitCanAttack("player","target") == 1 then CastSpellByName("lightning bolt") else CastSpellByName("healing wave") end
>
>  No macro addon needed

thank you will try it out later today!
have a good weekend

