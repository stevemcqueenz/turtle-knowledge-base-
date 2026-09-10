---
title: "API Type BagId"
url: "https://turtle-wow.fandom.com/wiki/API_Type_BagId"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:05:57Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# API Type BagId

While dealing with container and inventory items, many developers use a bag/slot couple and set bag to -1 for the case of an inventory item. But a problem occurs when the bank is opened (after BANKFRAME_OPENED event being fired) because the 24 slots of the bank count as a container with -1 as bagID. In the same idea, items in the bank bags can be accessed via container item functions (like [GetContainerItemLink(bagID, slotID)](API GetContainerItemLinK), [PickupContainerItem(bagID, slotID)](API PickupContainerItem)) with 5 as bagID for the first bank bag, 6 for the second ... until 10 for the sixth.

To sum up, the possibilities for bagID are :

   0 for the backpack
   1 to 4 for the bags on the character (numbered right to left)
   -2 for the keyring

WHILE THE BANK IS OPENED :

   -1 for the bank content
   5 to 10 for bank bags (numbered left to right)

## Macro
Print bag slot ID<syntaxhighlight lang="lua">
/run DEFAULT_CHAT_FRAME:AddMessage(GetMouseFocus():GetParent():GetID()..", "..GetMouseFocus():GetID())
</syntaxhighlight>
