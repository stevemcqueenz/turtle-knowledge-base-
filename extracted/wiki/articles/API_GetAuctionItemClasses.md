---
title: "API GetAuctionItemClasses"
url: "https://turtle-wow.fandom.com/wiki/API_GetAuctionItemClasses"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:43:02Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAuctionItemClasses

-GetAuctionItemClasses()**

  -Parameters:** none

  -Returns:** n return values, each of which is a major auction category. Right now "Weapon", "Armor", "Container", "Consumable", "Trade Goods", "Projectile", "Quiver", "Recipe", "Reagent", "Miscallaneous"
----

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
function M.item_class_index(item_class)
    for i, class in T.temp-T.list(GetAuctionItemClasses()) do
        if strupper(class) == strupper(item_class) then
            return i, class
        end
    end
end
</syntaxhighlight>Example from addon named Aux<syntaxhighlight lang="lua">
    -- classes
    if not filter.blizzard.class then
        for _, class in ipairs(T.temp-T.list(GetAuctionItemClasses())) do tinsert(suggestions, class) end
    end
</syntaxhighlight>
