---
title: "API UnitManaMax"
url: "https://turtle-wow.fandom.com/wiki/API_UnitManaMax"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-24T12:42:30Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitManaMax

Returns the maximum amount of mana that the specified unit can have.
----

  - *Usage***

 local maxmana = UnitManaMax("unit");
----

  - *Arguments***

  ; unit
   String - The [UnitId](API Type UnitId) of the unit whose MP should be returned

----

  - *Returns***

  ; maxmana
   Number - the unit's maximal mana points

## Macros
No double-innervate (Useful for raids)<syntaxhighlight lang="lua">
/run t="target" p="player" b="Innervate" if (UnitIsFriend(p,t) and UnitManaMax(t)>200) then for i=1,16 do if UnitBuff(t,i) then if not string.find(UnitBuff(t,i), b) then CastSpellByName(b) end end end else ChatFrame1:AddMessage("Did not "..b.."!") end
</syntaxhighlight>Alerts your healing rotation that you're out of mana and the next healer should step in. Otherwise, it will cast Flash Heal Rank 7.<syntaxhighlight lang="lua">
/script p="player";m=UnitMana(p);mm=UnitManaMax(p);if (m < (mm/10)) then SendChatMessage("I am at 10% of my mana, next healer please take over.", "SAY") else CastSpellByName("FlashHeal(Rank 7)"); end
</syntaxhighlight>

## Addon
Example from addon named TNE_LowHealthWarning<syntaxhighlight lang="lua">
  -- pick frame based on event
  if (event == "UNIT_HEALTH") then
    value = UnitHealth("player") / UnitHealthMax("player")
    TNE_LowHealth_SoundCheck(this, value * 100, unpack(TNE_LowHealth_Thresholds["SOUND"]))
    if (not TNE_LowHealth_HealthEnabled) then
      return -- this hack is because both sound and health flash need this event
    end
    frame = TNE_LowHealth_HealthFrame
    smooth = TNE_LowHealth_HealthSync
  elseif (event == "UNIT_MANA") then
    value = UnitMana("player") / UnitManaMax("player")
    frame = TNE_LowHealth_ManaFrame
    smooth = TNE_LowHealth_ManaSync
  end

  if (smooth) then -- flash differently depending on settings
    TNE_LowHealth_SmoothFlashFrame(value * 100, t1, frame, event)
  else
    TNE_LowHealth_FlashFrame(value * 100, t1, t2, frame, event)
  end

end
</syntaxhighlight>
