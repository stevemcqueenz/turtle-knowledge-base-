---
title: "API CancelDuel"
url: "https://turtle-wow.fandom.com/wiki/API_CancelDuel"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:02:34Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CancelDuel

Forfeits the current duel.
 CancelDuel();
----

  - *Arguments***

   *none*

----

  - *Returns***

  ; nil

----

  - *Example***

 CancelDuel();

  - *Result***

If you were in an active duel, you'll surrender to the opponent and the duel will be over.

## Addon
<syntaxhighlight lang="lua">
function AutoDecline_Duel(player)
  if AutoDeclineConfig[playerID].duelToggle then
    CancelDuel()
    AutoDecline_Display(format(AD_DUEL_REQUEST, player))
    AutoDecline_HideWindow("DUEL_REQUESTED")
    if AutoDeclineActions["DUEL"] then
       AutoDecline_DoAction( AutoDeclineActions["DUEL"], {player=player, guild=""} )
    end
  end
end
</syntaxhighlight>
