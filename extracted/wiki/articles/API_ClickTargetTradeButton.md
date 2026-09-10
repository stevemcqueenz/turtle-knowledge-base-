---
title: "API ClickTargetTradeButton"
url: "https://turtle-wow.fandom.com/wiki/API_ClickTargetTradeButton"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-01T06:12:20Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ClickTargetTradeButton

## Addon
Example from addon named EasyUnlock<syntaxhighlight lang="lua">
    -- Can we open this box?
    if(lockpickinglevel >= EU_LOCKBOXES[itemname]) then
        -- We can open the box, so let's do that
        CastSpellByName(EU_PICKLOCK_ABILITY);
        ClickTargetTradeButton(7);
    else
        -- Can't open this box, send the receipent a whisper
        local boxlink = GetTradeTargetItemLink(7);
        local boxlevel = EU_LOCKBOXES[itemname];
        local msg = format(EU_TOO_LOW_LOCKPICKING,boxlink,lockpickinglevel,boxlevel);
        SendChatMessage(msg,"WHISPER",nil,UnitName("NPC"));
    end
end
</syntaxhighlight>
