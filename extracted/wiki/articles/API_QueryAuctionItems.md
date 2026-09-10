---
title: "API QueryAuctionItems"
url: "https://turtle-wow.fandom.com/wiki/API_QueryAuctionItems"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T12:39:41Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API QueryAuctionItems

Will return information about items in the auction house.
<syntaxhighlight lang="lua">
 QueryAuctionItems("name", "minLevel", "maxLevel", invTypeIndex, classIndex, subclassIndex, page, isUsable, qualityIndex) -
</syntaxhighlight>
----
  -*Arguments***
  (string type, string type, string type, index value, )

  ;name : A part of the item's name (or the complete name) or "" for no retrenchment.
  ;minLevel : Items below this level won't be returned. Either a number or "" for no restrictions.
  ;maxLevel : Items above this level won't be returned. Either a number or "" for no restrictions.
  ;invtypeIndex : Character's slotposition in which the item can be placed in. Can be one of the following values:
  ;INVTYPE_HEAD : Head slot
  ;INVTYPE_NECK : Neck slot
  ;INVTYPE_SHOULDER : Shoulder slot
  ;INVTYPE_BODY : Body slot
  ;INVTYPE_CHEST : Chest slot
  ;INVTYPE_WAIST : Waist slot
  ;INVTYPE_LEGS : Leg slot
  ;INVTYPE_FEET : Feet slot
  ;INVTYPE_WRIST : Wrist slot
  ;INVTYPE_HAND : Hand slot
  ;INVTYPE_FINGER : Finger slot
  ;INVTYPE_TRINKET : Trinket slot
  ;INVTYPE_CLOAK : Cloak slot
  ;INVTYPE_HOLDABLE : unknown
  ;INVTYPE_WEAPONMAINHAND : Weapon mainhand slot
  ;INVTYPE_ROBE : Robe slot
  ;INVTYPE_TABARD : Tabard slot
  ;INVTYPE_BAG : Container slot
  ;INVTYPE_2HWEAPON : 2handed weapon (takes two slots)
  ;INVTYPE_RANGED : Ranged weapon slot
  ;INVTYPE_SHIELD : Shield slot
  ;INVTYPE_WEAPON : Both weapon slots
  ;nil : no restrictions
  ;classIndex : Items not in this class won't be returned. Index corresponds to the index returned by GetAuctionItemClasses() or nil for no restrictions.
  ;subclassIndex : Items not in this subclass won't be returned. Index corresponds to the index used in GetAuctionItemSubClasses(index) or nil for no restrictions.
  ;page : What page in the auctionhouse this shows up
  ;isUsable : Is useable by the player (nil = no restrictions)
  ;qualityIndex : The items' quality (nil = no restrictions)

----
  -*Returns***
nothing

----
  -*Example***

  -*Result***

----
  -*Description***

----

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
	local function submit()
		if get_state().params.type == 'bidder' then
			GetBidderAuctionItems(get_state().page)
		elseif get_state().params.type == 'owner' then
			GetOwnerAuctionItems(get_state().page)
		else
			get_state().last_list_query = GetTime()
			local blizzard_query = get_query().blizzard_query or T.acquire()
			QueryAuctionItems(
				blizzard_query.name,
				blizzard_query.min_level,
				blizzard_query.max_level,
				blizzard_query.slot,
				blizzard_query.class,
				blizzard_query.subclass,
				get_state().page,
				blizzard_query.usable,
				blizzard_query.quality
			)
		end
		return wait_for_results()
	end
</syntaxhighlight>
