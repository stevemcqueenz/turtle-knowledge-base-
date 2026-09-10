---
title: "API GetItemInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetItemInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-04T16:52:41Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetItemInfo

Return information about a specific item.
<syntaxhighlight lang="lua">
 args = GetItemInfo(itemID or "itemString");
</syntaxhighlight>
## Parameters
### Arguments
   (itemId or "[itemString](itemString)")

  ; itemId
   Integer - The numeric ID of the item. ie. 12345
  ; "[itemString](itemString)"
   String - The full item ID in string format, e.g. "item:12345:0:0:0"

### Returns
  ; itemName
   String - The name of the item.
  ; [itemString](itemString)
   String - The item id in string format, e.g. "item:12345:0:0:0".
  ; itemQuality
   Integer - The [quality](API Type Quality) of the item.  The value is 0 to 6, which represents Poor to Artifact.
  ; itemMinLeveL
   Integer - The minimum level required to use the item, 0 being no level requirement.
  ; [itemType](API Type ItemType)
   String - The type of the item. Armor, Weapon, Quest, Key, etc.
  ; itemSubType
   String - The sub type of the item. Enchanting, Cloth, Sword, etc. See [itemType](API Type ItemType).
  ; itemStackCount
   Integer - How many of the item per stack. ie. 20 for Runecloth, 1 for weapon, 100 for Alterac Ram Hide, etc.
  ; [itemEquipLoc](itemEquipLoc)
   String - Where the item may be equipped, if it can. The string returned is also the name of a global string variable, i.e. for "INVTYPE_HEAD" there is a INVTYPE_HEAD variable containing a localized, displayable name of the location.
  ; itemTexture
   String - The name and path for the inventory icon texture for the item.
  ; itemValue
   Integer - The vendor value of the item (added in patch 1.18.1 - Nightmares of Ursol)

## Example
<syntaxhighlight lang="lua">
 local sName, sLink, iQuality, iLevel, sType, sSubType, iCount = GetItemInfo(16846);
 message(sName..","..iQuality..","..sType..","..iCount);
</syntaxhighlight>
#### Result
   Message box will pop-up with - "Giantstalker's Helmet,4,Armor,1".

## Details
   This function will **ONLY** retrieve data that is in your local cache.
   If you have never seen the item that belongs to the Item ID or Item Link it will return *nil*.
   All string returns (itemName, itemType, itemSubType) are localized. Prior to 1.9, itemEquipLoc was localized also.

## Common usage
<syntaxhighlight lang="lua">
 function GetItemInfoFromItemLink(link)
  local itemId = nil;
  if ( type(link) == "string" ) then
    _,_, itemId = string.find(link, "item:(%d+):");
    if(itemId) then
      return GetItemInfo(itemId);
    end
  end
 end
 
 local link = FunctionThatGetsItemLink(arg1, arg2);
 local itemName, itemLink, itemQuality, itemLevel, itemType, itemSubType, itemCount, itemTexture 
   = GetItemInfoFromItemLink(link);
</syntaxhighlight>
The above function will work with [itemStrings](ItemString) as well as [itemLinks](ItemLink).

## Macros
Shoot Bow, Shoot Crossbow and Shoot Gun<syntaxhighlight lang="lua">
/run local _,_,i=strfind(GetInventoryItemLink("player",18),"\124Hitem:(%d+)")local _,_,_,_,_,p=GetItemInfo(i)local t={}t.Bows="Bow"t.Guns="Gun"t.Crossbows="Crossbow"t.Thrown="Throw"CastSpellByName((string.gsub(t[p],"^([^T])","Shoot %1")))
</syntaxhighlight>Trade Healthstone<syntaxhighlight lang="lua">
/run for i=0,4 do for x=1,GetContainerNumSlots(i) do y=GetContainerItemLink(i,x) if y then if GetItemInfo(y)=="Healthstone" then PickupContainerItem(i,x); DropItemOnUnit("target"); return; end end end end
</syntaxhighlight>Delete all poor quality items from your bags<syntaxhighlight lang="lua">
/run ClearCursor()local g,i,j,s,a,b=gsub;for i=0,4 do for j=1,GetContainerNumSlots(i)do s=GetContainerItemLink(i,j)if(s)then a,b,s=GetItemInfo(g(g(s,".*\124H",""),"\124h.*",""))if(s==0)then PickupContainerItem(i,j)DeleteCursorItem()end;end;end;end
</syntaxhighlight>

## Addon
Example from addon named Auctioneer<syntaxhighlight lang="lua">
	-- Get all item data
	local iName, iLink, iQuality, iLevel, iClass, iSubClass, iCount, iMaxStack = GetItemInfo(hyperlink);
	local itemCat = Auctioneer.Util.GetCatNumberByName(iClass);
</syntaxhighlight>
