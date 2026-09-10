---
title: "API GetAuctionInvTypes"
url: "https://turtle-wow.fandom.com/wiki/API_GetAuctionInvTypes"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:39:29Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAuctionInvTypes

-GetAuctionInvTypes(classIndex,subClassIndex)**

  -Parameters:** major category index and sub category index

  -Returns:** n return values, each of which is a string representing a type in that category. I am not sure how to make it work, it seems to only return something under armor misc to armor plate (2,1 to 2,5) and returns "INVTYPE_HEAD", "INVTYPE_NECK", "INVTYPE_SHOULDER", "INVTYPE_BODY", "INVTYPE_CHEST", "INVTYPE_WAIST", "INVTYPE_LEGS", "INVTYPE_FEET", "INVTYPE_WRIST", "INVTYPE_HAND", "INVTYPE_FINGER", "INVTYPE_TRINKET", "INVTYPE_CLOAK", "INVTYPE_HOLDABLE"
I found many other types looking at the executable in a hex editor: "INVTYPE_RANGEDRIGHT", "INVTYPE_THROWN", "INVTYPE_AMMO", "INVTYPE_HOLDABLE", "INVTYPE_WEAPONOFFHAND", "INVTYPE_WEAPONMAINHAND", "INVTYPE_ROBE", "INVTYPE_TABARD", "INVTYPE_BAG", "INVTYPE_2HWEAPON", "INVTYPE_CLOAK", "INVTYPE_RANGED", "INVTYPE_SHIELD", "INVTYPE_WEAPON"

----

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
function M.item_slot_index(class_index, subclass_index, slot_name)
    for i, slot in T.temp-T.list(GetAuctionInvTypes(class_index, subclass_index)) do
        if strupper(_G[slot]) == strupper(slot_name) then
            return i, _G[slot]
        end
    end
end
</syntaxhighlight>Example from addon named Aux<syntaxhighlight lang="lua">
    -- slots
    if not filter.blizzard.slot then
        for _, invtype in ipairs(T.temp-T.list(GetAuctionInvTypes(aux.index(filter.blizzard.class, 2) == 2 and 2 or 0, aux.index(filter.blizzard.subclass, 2) or 0))) do
            tinsert(suggestions, _G[invtype])
        end
    end
</syntaxhighlight>
