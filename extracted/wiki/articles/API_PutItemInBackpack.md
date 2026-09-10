---
title: "API PutItemInBackpack"
url: "https://turtle-wow.fandom.com/wiki/API_PutItemInBackpack"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:58:49Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PutItemInBackpack

PutItemInBackpack();

   Places the item currently on the cursor into the player's backpack otherwise it has no effect. If there is already a partial stack of the item in the backpack, it will attempt to stack them together.

----

** *Arguments***

   None

----

** *Returns***

   Nothing.

----

** *Details***

   Places the item currently on the cursor into the player's backpack otherwise it has no effect.

## Addon
Example from addon named Clique<syntaxhighlight lang="lua">
    -- If the cursor has an item and we're clicking on another player,
    -- attempt to trade with them (or feed your pet, etc).  If we
    -- LeftButton drop it on ourselves, then equip the item.  If we click
    -- anything else, then put the item back in the backpack
    if CursorHasItem() then
        if button == "LeftButton" then
            if unit == "player" then AutoEquipCursorItem()
            else DropItemOnUnit(unit) end
        else PutItemInBackpack() end
        return
    end
</syntaxhighlight>
