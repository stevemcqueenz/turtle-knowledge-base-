---
title: "API GetWeaponEnchantInfo"
url: "https://turtle-wow.fandom.com/wiki/API_GetWeaponEnchantInfo"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T13:22:05Z"
fetched: "2026-09-10T07:38:11Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetWeaponEnchantInfo

GetWeaponEnchantInfo();

This appears to be used for handling TEMPORARY enchants to weapons - like POISONS.  Also appears to be self-only.

  - Returns**

hasMainHandEnchant, mainHandExpiration, mainHandCharges, hasOffHandEnchant, offHandExpiration, offHandCharges<syntaxhighlight lang="lua">
hasMainHandEnchant = 1(true) or nil
mainHandExpiration = time remaining as thousands of seconds
mainHandCharges = charges remaining
hasOffHandEnchant = 1(true) or nil
offHandExpiration = time remaining as thousands of seconds
offHandCharges = charges remaining
</syntaxhighlight>

## Macro
Rockbiter Weapon / Auto Attack<syntaxhighlight lang="lua">
/run for z=1,172 do if IsAttackAction(z)then if not IsCurrentAction(z)then UseAction(z)end;end;end;hasMainHandEnchant =GetWeaponEnchantInfo()if  not hasMainHandEnchant then CastSpellByName("Rockbiter Weapon")end UIErrorsFrame:Hide()
</syntaxhighlight>

## Addon
From PoisonFu plugin for Fubar<syntaxhighlight lang="lua">
-- Displays a warning message int he UIErrorsFrame if an item buff has expired
function PoisonFu:WarnIfPoisonExpired()
	local hasMainHandEnchant, mainHandExpiration, mainHandCharges, hasOffHandEnchant, offHandExpiration, offHandCharges = GetWeaponEnchantInfo()
	if ((self.mainHandBuffedOnLastUpdate == true) and (hasMainHandEnchant ~= 1)) or
		((self.offHandBuffedOnLastUpdate == true) and (hasOffHandEnchant ~= 1)) then
		UIErrorsFrame:AddMessage(L["BUFFEXPIRED_MESSAGE"], 1.0, 0.0, 0.0, 1.0, 5)
	end

	self.mainHandBuffedOnLastUpdate = (hasMainHandEnchant == 1)
	self.offHandBuffedOnLastUpdate = (hasOffHandEnchant == 1)
end
</syntaxhighlight>
