---
title: "API CancelPlayerBuff"
url: "https://turtle-wow.fandom.com/wiki/API_CancelPlayerBuff"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-22T07:14:34Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CancelPlayerBuff

Removes a specific buff from the player.
 CancelPlayerBuff(buffIndex);
----

  - ***Arguments*****

  ; buffIndex
   The index of the buff to remove. Can be obtained with [GetPlayerBuff](API GetPlayerBuff)

----

  - ***Example*****

 CancelPlayerBuff(GetPlayerBuff(0,"HELPFUL"))

  - ***Result*****

Removes the first (right-most in the default UI) buff from the player.

  - ***Notes*****

this function uses a zero-based index, while UnitBuff() does not.

## Macro
Cancel Shadowform<syntaxhighlight lang="lua">
/run local i=0 g=GetPlayerBuff while not(g(i)==-1) do if(strfind(GetPlayerBuffTexture(g(i)), "Shadowform")) then CancelPlayerBuff(g(i)) end i=i+1 end
</syntaxhighlight>

## Addon
Example from addon named AntiDaze<syntaxhighlight lang="lua">
-- same but will return right index for use with CancelPlayerBuff
function CPlayerBuff(buff,a)
  local iIterator = 0
  while not (GetPlayerBuff(iIterator) == -1) do
    if (string.find(GetPlayerBuffTexture(iIterator), buff)) then 
      if (a) and ( DEFAULT_CHAT_FRAME ) then DEFAULT_CHAT_FRAME:AddMessage("CPlayer: "..GetPlayerBuffTexture(iIterator)..", iIterator: "..iIterator, 1, 1, 0.5) end
			CancelPlayerBuff(GetPlayerBuff(iIterator))
      return GetPlayerBuff(iIterator)
    end
    iIterator = iIterator + 1
  end
end
</syntaxhighlight>
