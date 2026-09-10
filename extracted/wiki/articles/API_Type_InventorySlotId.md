---
title: "API Type InventorySlotId"
url: "https://turtle-wow.fandom.com/wiki/API_Type_InventorySlotId"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-10-19T15:54:54Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Types"]
---
# API Type InventorySlotId

You may obtain the IDs either by calling GetInventorySlotInfo, ContainerIDToInventoryID, or from the table below.

- Note that you should never use these values in AddOns, since they may change. Use GetInventorySlotInfo(invSlotName) to get the current mapping.   This list is only meant to be used as a reference for reverse mapping while debugging, or possibly for use in macros.

## Regular inventory items
   0 = ammo
   1 = head
   2 = neck
   3 = shoulder
   4 = shirt
   5 = chest
   6 = belt
   7 = legs
   8 = feet
   9 = wrist
   10 = gloves
   11 = finger 1
   12 = finger 2
   13 = trinket 1
   14 = trinket 2
   15 = back
   16 = main hand
   17 = off hand
   18 = ranged
   19 = tabard
   20 = first bag (the rightmost one)
   21 = second bag
   22 = third bag
   23 = fourth bag (the leftmost one)

## When bank frame is open
   40 to 63 = the 24 bank slots
   64 = first bank bag
   65 = second bank bag
   66 = third bank bag
   67 = fourth bank bag
   68 = fifth bank bag
   69 = sixth bank bag

## Key ring slots
