---
title: "API GetAuctionItemSubClasses"
url: "https://turtle-wow.fandom.com/wiki/API_GetAuctionItemSubClasses"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:52:44Z"
fetched: "2026-09-10T07:38:08Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetAuctionItemSubClasses

-GetAuctionItemSubClasses(index)**

  -Parameters:** index of the major category to look into, from 1 to number of elements returned by GetAuctionItemClasses

  -Returns:** n return values, each of which is a sub category of category index.
----

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
function M.item_subclass_index(class_index, item_subclass)
    for i, subclass in T.temp-T.list(GetAuctionItemSubClasses(class_index)) do
        if strupper(subclass) == strupper(item_subclass) then
            return i, subclass
        end
    end
end
</syntaxhighlight>Example from addon named Aux<syntaxhighlight lang="lua">
    -- subclasses
    if not filter.blizzard.subclass then
        for _, subclass in ipairs(T.temp-T.list(GetAuctionItemSubClasses(aux.index(filter.blizzard.class, 2) or 0))) do
            tinsert(suggestions, subclass)
        end
    end
</syntaxhighlight>
