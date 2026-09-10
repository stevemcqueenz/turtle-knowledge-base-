---
title: "Made an Addon for Automatic Healing!"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=22453"
topic_id: 22453
forum_id: 18
forum: "AddOns"
author: "Escieras"
author_authority: "player"
posted: "2025-10-18T03:26:00Z"
last_post: "2025-11-23T06:56:00Z"
post_count: 8
pages: 1
fetched: "2026-09-10T10:22:57Z"
era: "1.18.1-announced-pre-release"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Made an Addon for Automatic Healing!

## Post 155998 by Escieras — 2025-10-18T03:26:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=155998#p155998 | page 1 | era: 1.18.1-announced-pre-release -->

[embed: https://www.youtube.com/embed/ff6eIIXD2g8]

heres the link to see it in action, and the github below:
<https://github.com/lazyloafs/lazyheals>

automatically heals the lowest health in range ally, skipping them if it's a heal over time and they have it alreeady

## Post 156008 by Kerenis (Patch Note Conspiracy Theorist) — 2025-10-18T06:52:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156008#p156008 | page 1 | era: 1.18.1-announced-pre-release -->

Basically a new GodzillaHeal

Been missing that addon for ages

## Post 156019 by Escieras — 2025-10-18T09:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=156019#p156019 | page 1 | era: 1.18.1-announced-pre-release -->

@Kerenis I think thats a good thing hah

## Post 160353 by Downwithopp — 2025-11-22T21:36:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160353#p160353 | page 1 | era: 1.18.1-announced-pre-release -->

the /lazyheals command isnt working at all for me...

## Post 160356 by RPGnerd (Barrens Chat Casualty) — 2025-11-22T23:25:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160356#p160356 | page 1 | era: 1.18.1-announced-pre-release -->

It's nice to know that more people are doing this. After using QuickHeal I got spoiled, and with the latest Turtle updates it started having some instability, so I was ‘compelled’ to create my own healing addon with GPT’s help
Code: Select all

```
-- Moonfries Healing Master (MHM)
-- /mhm = cura automática no alvo com menor vida usando Regrowth

SLASH_MHM1 = "/mhm"
SlashCmdList["MHM"] = function()
HealLowest()
end

--------------------------------------------------
-- CONFIGURAÇÃO
--------------------------------------------------

local SPELL_NAME = "Regrowth"          -- Nome do spell base
local LOS_BLOCK_TIME = 2               -- Tempo (segundos) para ignorar alvo com erro de LOS

local lastFailedTarget = nil           -- Nome do último alvo que falhou por LOS
local failedUntil = 0                  -- Tempo (GetTime) até o qual esse alvo fica bloqueado

-- Mensagens de erro consideradas "fora de linha de visão"
local LOS_ERRORS = {
["Target not in line of sight"] = true,
["Target not in line of sight."] = true,

 -- Caso esteja usando client em PT-BR ou outro traduzido
["Alvo fora da linha de visão"] = true,
["Alvo não está em sua linha de visão"] = true,
}

--------------------------------------------------
-- TRATADOR DE ERROS (UI_ERROR_MESSAGE)
--------------------------------------------------

local errorFrame = CreateFrame("Frame")
errorFrame:RegisterEvent("UI_ERROR_MESSAGE")
errorFrame:SetScript("OnEvent", function(_, _, message)
if LOS_ERRORS[message] then
local unit = UnitName("target")
if unit then
lastFailedTarget = unit
failedUntil = GetTime() + LOS_BLOCK_TIME
DEFAULT_CHAT_FRAME:AddMessage("⛔ " .. unit .. " está fora de linha de visão.")
end
end
end)

--------------------------------------------------
-- FUNÇÃO DE VALIDAÇÃO DE ALVO
--------------------------------------------------

local function IsUnitValid(unit)
if UnitExists(unit)
and not UnitIsDead(unit)
and UnitIsFriend("player", unit)
and UnitIsVisible(unit)
and IsSpellInRange(SPELL_NAME, unit) == 1
then
local name = UnitName(unit)
 -- Se foi o último alvo que falhou LOS recentemente, ignora
if name and name == lastFailedTarget and GetTime() < failedUntil then
return false
end
return true
end
return false
end

--------------------------------------------------
-- FUNÇÃO PRINCIPAL: HEALLOWEST
--------------------------------------------------

function HealLowest()
local lowestUnit = nil
local lowestHealthPercent = 1

 -- Descobre se está em raid ou party
local groupType = GetNumRaidMembers() > 0 and "raid" or "party"
local groupSize = groupType == "raid" and GetNumRaidMembers() or GetNumPartyMembers()

 -- Varre todos os membros da raid/party
for i = 1, groupSize do
local unit = groupType .. i
if IsUnitValid(unit) then
local hp = UnitHealth(unit)
local hpMax = UnitHealthMax(unit)
if hpMax and hpMax > 0 then
local percent = hp / hpMax
if percent < lowestHealthPercent then
lowestHealthPercent = percent
lowestUnit = unit
end
end
end
end

 -- Inclui o próprio player na comparação
if IsUnitValid("player") then
local hp = UnitHealth("player")
local hpMax = UnitHealthMax("player")
if hpMax and hpMax > 0 then
local percent = hp / hpMax
if percent < lowestHealthPercent then
lowestHealthPercent = percent
lowestUnit = "player"
end
end
end

 -- Só cura se alguém estiver abaixo de 90%
if lowestUnit and lowestHealthPercent <= 0.90 then
 -- Define o target
TargetUnit(lowestUnit)

 -- Escolhe o Rank do Regrowth de acordo com a % de vida
local rank = 3
if lowestHealthPercent <= 0.30 then
rank = 9
elseif lowestHealthPercent <= 0.60 then
rank = 6
end

 -- Cast no alvo com Rank escolhido
CastSpellByName(SPELL_NAME .. "(Rank " .. rank .. ")")

 -- Se o spell entrou em modo "targeting" (cursor de spell), tenta finalizar no mesmo alvo
if SpellIsTargeting() then
if SpellCanTargetUnit and SpellCanTargetUnit(lowestUnit) then
SpellTargetUnit(lowestUnit)
else
SpellStopTargeting()
local name = UnitName(lowestUnit) or "Alvo"
DEFAULT_CHAT_FRAME:AddMessage("⛔ " .. name .. " está fora de alcance ou sem linha de visão.")
lastFailedTarget = name
failedUntil = GetTime() + LOS_BLOCK_TIME
end
end
end
end
```

## Post 160368 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-11-23T04:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160368#p160368 | page 1 | era: 1.18.1-announced-pre-release -->

> **Escieras wrote: Sat Oct 18, 2025 3:26 am**
> automatically heals the lowest health in range ally, skipping them if it's a heal over time and they have it alreeady

Hey bro,

sadly your addon has some invalid syntax,
since you used ChatGPT to create your addon,
and sadly ChatGPT doesnt know about 1.12.1 syntax without telling it.

 1) You are using string.match wich doesnt exists in vanilla - the moment the function is called it throws nil at you
You can test this by doing "local result = string.match("test123", "(%d+)")" or something - in Vanilla you have to use
strfind or create a custom string.match function. The function never runs so you never saw the error.
![Image](https://i.imgur.com/sEwkayI.png)

 2) Youre using SetScript totaly wrong - you cant pass arguments to SetScript nor can u use Vararg "..." in Vanilla,
wich is why the Slash command doesnt work at all.
f:SetScript("OnEvent", function(self, event, ...)
This is wrong. You cant pass arguments like self or event. And you cant use vararg "...".

The whole setup is also kinda silly, using an OnUpdate script to register a slash command.

So yea quite alot of errors that need fixing.
You guys cant do that in Vanilla, that only works in TBC or higher.
Check the 1.12.1 Global API if you need help in how to use it.

If you guys want to use AI for coding, I recommend you look at this guide.
[viewtopic.php?p=151564#top](https://forum.turtlecraft.gg/viewtopic.php?p=151564#top)

> **Downwithopp wrote: Sat Nov 22, 2025 9:36 pm**
> the /lazyheals command isnt working at all for me...

Yep because of the bad syntax.

*Last edited by Foreverdelta33 on Sun Nov 23, 2025 6:58 am, edited 1 time in total.*

## Post 160372 by RPGnerd (Barrens Chat Casualty) — 2025-11-23T05:48:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160372#p160372 | page 1 | era: 1.18.1-announced-pre-release -->

> **Foreverdelta33 wrote: Sun Nov 23, 2025 4:57 am**
> > **Escieras wrote: Sat Oct 18, 2025 3:26 am**
> > automatically heals the lowest health in range ally, skipping them if it's a heal over time and they have it alreeady
>
>   Hey bro,
>
>  sadly your addon has some invalid syntax,
>  since you used ChatGPT to create your addon,
>  and sadly ChatGPT doesnt know about 1.12.1 syntax without telling it.
>
>  1) You are using string.match wich doesnt exists in vanilla - the moment the function is called it throws nil at you
>  You can test this by doing "local result = string.match("test123", "(%d+)")" or something - in Vanilla you have to use
>  strfind or create a custom string.match function. The function never runs so you never saw the error.
>  ![Image](https://i.imgur.com/sEwkayI.png)
>
>  2) Youre using SetScript totaly wrong - you cant pass arguments to SetScript nor can u use Vararg "..." in Vanilla,
>  wich is why the Slash command doesnt work at all.
>  f:SetScript("OnEvent", function(self, event, ...)
>  This is wrong. You cant pass arguments like self or event. And you cant use vararg "...".
>
>  The whole setup is also kinda silly, using an OnUpdate script to register a slash command.
>
>  So yea quite alot of errors that need fixing.
>  The guy above me did the same mistake here: errorFrame:SetScript("OnEvent", function(_, _, message)
>  You guys cant do that in Vanilla, that only works in TBC or higher.
>  Check the 1.12.1 Global API if you need help in how to use it.
>
>  If you guys want to use AI for coding, I recommend you look at this guide.
>  [viewtopic.php?p=151564#top](https://forum.turtlecraft.gg/viewtopic.php?p=151564#top)
>
> > **Downwithopp wrote: Sat Nov 22, 2025 9:36 pm**
> > the /lazyheals command isnt working at all for me...
>
>  Yep because of the bad syntax.

The OP probably used non-native functions from the WoW Vanilla 1.12 API.
It’s possible that his addon depends on other addons, such as QuickHeal itself or the Zorlen library.

If you specify that the script must be limited to the native functions of the 1.12 API and provide a few code examples, GPT can return working code.

I have a druid healer that I use to help some friends when they need to run dungeons or raids. The addon I made specifically for a Regrowth build scans all members of the party or raid, and the one with the lowest HP percentage becomes the target; then Regrowth is cast. Depending on how much HP the target has at the moment, it can cast Regrowth Rank 3, 6, or 9.

## Post 160373 by Foreverdelta33 (Patch Note Conspiracy Theorist) — 2025-11-23T06:56:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=160373#p160373 | page 1 | era: 1.18.1-announced-pre-release -->

> **RPGnerd wrote: Sun Nov 23, 2025 5:48 am**
> The OP probably used non-native functions from the WoW Vanilla 1.12 API.
>  It’s possible that his addon depends on other addons, such as QuickHeal itself or the Zorlen library.
>
>  If you specify that the script must be limited to the native functions of the 1.12 API and provide a few code examples, GPT can return working code.

Not sure if I understand you correctly, but Ill go ahead and say nah.   sad_turtle_head
The code is just wrong. The slash doenst work because GPT told him that he needs
to wait for the API, wich is wrong, and he used TBC + syntax that wasnt included in 1.12.1, wich is also wrong,
on top of the onupdate script (wich isnt wrong but its also not good).

I havent come across any way that adds the TBC SetScript syntax back into the 1.12.1 API.
He could do metaprogramming like they did in AUX and create his own vararg,
but thats super advanced and complete overkill.

All he has to do is fix the SetScript() and either creaate a custom string.match (from dragonflight 3): Code: Select all

```
-- match: pattern matching without position info
-- str (string) - string to search in
-- pattern (string) - Lua pattern to match
-- returns: captured groups or matched substring
function DF3.lua.match(str, pattern)
local _, _, capture1, capture2, capture3 = string.find(str, pattern)
if capture1 then
return capture1, capture2, capture3
else
local start, stop = string.find(str, pattern)
if start then
return string.sub(str, start, stop)
end
end
end
```

or use strfind.

Then the addon would work without any external dependencies.
GPT and other AIs can work, I wrote a guide on how to use them, but you have to tell them
about the Vanilla perks since they arent trained on that.  happy_turtle_head

