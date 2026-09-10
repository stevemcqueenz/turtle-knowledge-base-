---
title: "API GetContainerItemLink"
url: "https://turtle-wow.fandom.com/wiki/API_GetContainerItemLink"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T08:24:28Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetContainerItemLink

Returns the item link of the item located in bag# and slot#.
<syntaxhighlight lang="lua">
 ItemLink = GetContainerItemLink(bag, slot)
</syntaxhighlight>
## Parameters
### Arguments
   bagID, slot

  ; [bagID](API Type BagId)
   Numeric - The number of the bag. Valid bags are 0-4. 0 is the backpack.
  ; slot
   Numeric - The slot of the specified bag. Valid slots are 1 through BagSize. 1 is the left slot in the top row.

### Returns
   ItemLink

  ; ItemLink
   Returns the ItemLink (The item link is the link when you shift-click an item while the chat edit box is visible). Returns nil if the slot of the specified bag is empty. Example link returned: **|Hitem:6948:0:0:0|H[Hearthstone]|H** . To use this link in other functions that require an "itemlink", you have to strip out the extra chat link information.  Ex: **item:6948:0:0:0**

## Example
<syntaxhighlight lang="lua">
 function UseContainerItemByName(SearchString)
   for bag=0,4 do
     for slot=1,GetContainerNumSlots(bag) do
       if (GetContainerItemLink(bag,slot)) then
         if (string.find(GetContainerItemLink(bag,slot), SearchString)) then
           UseContainerItem(bag,slot)
         end
       end
     end
   end
 end
</syntaxhighlight>
#### Result
Searches through your bags and uses the first item found that contains the provided string in its name.

#### Info
##### for .. do
   Look for the 'for .. do' block at the [Reference Manual](http://www.lua.org/manual/5.0/).

##### GetContainerNumSlots(bagID)
   [GetContainerNumSlots(bagID)](API GetContainerNumSlots) - Gives you the number of slots available in the bag specified by the index.

##### UseContainerItem(bagID,slot)
   [UseContainerItem(bagID,slot)](API UseContainerItem) - Uses an item located in bag# and slot#.

##### <nowiki>string.find(string,pattern{,init{,plain}})</nowiki>
   [<nowiki>strfind(string,pattern{,init{,plain}})</nowiki>](API strfind) - Look for match of pattern in string, optionally from specific location or using plain substring.

## Macros
Strip all gear with durability<syntaxhighlight lang="lua">
/run ClearCursor()local k;for i=1,4 do for j=1,GetContainerNumSlots(i)do if(not GetContainerItemLink(i,j))then repeat k,l=next({1,3,5,6,7,8,9,10,16,17,18},k)if(not k)then return;end;PickupInventoryItem(l)until(CursorHasItem())PutItemInBag(i+19)end;end;end
</syntaxhighlight>
Conjuring mana gems<syntaxhighlight lang="lua">
/script local c=function(a) local f,d a="Mana "..a for i=0,4 do for k=1,GetContainerNumSlots(i) do d=GetContainerItemLink(i,k) or "" if strfind(d,a) then f = 1 end end end if not f then CastSpellByName("Conjure "..a) end end c "Ruby" c "Citrine" c "Jade"
</syntaxhighlight>
Use Mana Ruby, Mana Citrine, or Mana Jade<syntaxhighlight lang="lua">
/run for b=0,4 do for s=1,GetContainerNumSlots(b,s)do local n=GetContainerItemLink(b,s)if n and (strfind(n,"Mana Ruby") or strfind(n,"Mana Citrine") or strfind(n,"Mana Jade"))then UseContainerItem(b,s,1)end end end
</syntaxhighlight>

## Addon
Example from addon named ItemRack<syntaxhighlight lang="lua">
function Rack.FindSpaceInBag(bag)
	if Rack.ValidBag(bag) then
		for j=1,GetContainerNumSlots(bag) do
			if not Rack.LockList[bag][j] and not GetContainerItemLink(bag,j) then
				return j
			end
		end
	end
end
</syntaxhighlight>
