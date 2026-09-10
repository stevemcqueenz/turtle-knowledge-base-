---
title: "Macros for paladin"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=19138"
topic_id: 19138
forum_id: 41
forum: "Paladin"
author: "KALEX"
author_authority: "player"
posted: "2025-05-07T14:16:00Z"
last_post: "2025-07-16T01:43:00Z"
post_count: 5
pages: 1
fetched: "2026-09-10T07:56:14Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Macros for paladin

## Post 130048 by KALEX — 2025-05-07T14:16:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=130048#p130048 | page 1 | era: pre-1.18.1 -->

I've read some comments about some abilities being "macroed" together. Which ones are? How do you macro two or more abilities together? Could you please elaborate more on the topic?

## Post 133992 by Azcron (Patch Note Conspiracy Theorist) — 2025-06-02T14:27:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133992#p133992 | page 1 | era: pre-1.18.1 -->

Hammer of Wrath if target have 20% hp, else Judgement
/run if UnitHealth("target")/UnitHealthMax("target") < 0.2 then CastSpellByName("Hammer of Wrath")CastSpellByName("Judgement")else CastSpellByName("Judgement")end

Divine Protection, Hearthstone
/run CastSpellByName("Divine Protection") for b=0,4 do for s=1,GetContainerNumSlots(b) do local n=GetContainerItemLink(b,s) if n and strfind(n,"Hearthstone") then UseContainerItem(b,s)  end end end

Blessing of Wisdom if target got mana, else Blessing of Might
/run power = UnitPowerType("target"); if ( power == 0 ) then CastSpellByName("Blessing of Wisdom") else CastSpellByName("Blessing of Might") end; if ( SpellIsTargeting() ) then CastSpellByName("Blessing of Might"); TargetUnit("player"); end

Seal of Light + Judgement
/run local i,x=1,0 while UnitBuff("player",i) do if UnitBuff("player",i)=="Interface\\Icons\\Spell_Holy_HealingAura" then x=1 end i=i+1 end if x==0 then CastSpellByName("Seal of Light") else CastSpellByName("Judgement")end

Seal of Righteousness + Judgement
/run local z=0 for i=1,27 do t=UnitBuff("player",i) if (t and strfind(t,"ThunderBolt")) then z=1 break end end if z==1 then CastSpellByName("Judgement") else CastSpellByName("Seal of Righteousness") end

Seal of Wisdom + Judgement
/run c=CastSpellByName j="Judgement" q="y_Righteou" function b(k)for i=1,32 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b(q) then c("Seal of Wisdom")else c(j) end

Seal of the Crusader + Judgement
/run c=CastSpellByName j="Judgement" q="y_HolySmite" function b(k)for i=1,32 do if strfind(tostring(UnitBuff("player",i)),k)then return 1 end end end if not b(q) then c("Seal of the Crusader")else c(j) end

## Post 133999 by Laysson (Patch Note Conspiracy Theorist) — 2025-06-02T17:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=133999#p133999 | page 1 | era: pre-1.18.1 -->

<https://turtle-wow.fandom.com/wiki/Category:Macros>

## Post 134036 by Frantsel (Patch Note Conspiracy Theorist) — 2025-06-03T00:05:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=134036#p134036 | page 1 | era: pre-1.18.1 -->

/cast bubble
/cast hearthstone

## Post 139773 by Rindexxx (Barrens Chat Casualty) — 2025-07-16T01:43:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=139773#p139773 | page 1 | era: pre-1.18.1 -->

#showtooltip
/castsequence reset=10 Blessing of Sanctuary, Righteous Fury, Retribution Aura
.hcm 70

