---
title: "API AutoEquipCursorItem"
url: "https://turtle-wow.fandom.com/wiki/API_AutoEquipCursorItem"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T03:32:30Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API AutoEquipCursorItem

AutoEquipCursorItem();

straight forward, it equips the item currently on the cursor.

Example - equips 6 items in sequentional backpack slots.
<syntaxhighlight lang="lua">
 /run i=2; while i<=8 do PickupContainerItem(0,i); AutoEquipCursorItem(); i=i+1; end;
</syntaxhighlight>

## Macro
Equip Dagger<syntaxhighlight lang="lua">
/run for i=0,4 do for j=1,GetContainerNumSlots(i) do local l=GetContainerItemLink(i,j) if l and string.find(l,"Dagger") then PickupContainerItem(i,j) AutoEquipCursorItem() break end end end
</syntaxhighlight>

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
