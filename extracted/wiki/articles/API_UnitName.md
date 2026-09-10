---
title: "API UnitName"
url: "https://turtle-wow.fandom.com/wiki/API_UnitName"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T07:36:36Z"
fetched: "2026-09-10T07:38:15Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API UnitName

Returns the name and realm of the specified unit.
 name, realm = UnitName("unit")

## Parameters
### Arguments
   ("unit")

  ; unit
   String - The [UnitId](API Type UnitId) to query (e.g. "player", "party2", "pet", "target" etc.)

### Returns
  ; name
   String - The name of the specified unit, or nil if not applicable (e.g., if the specified unit is "target" but the player has no target selected).
  ; realm
   String - The realm the specified unit is from. If from your own realm, then realm == nil (but the 2nd return value is still there). This is as of 1.12

## Example
 local playerName = UnitName("player");
 ChatFrame1:AddMessage('Hi my name is: ' .. playerName);

#### Result
   Prints the player's name to the chat frame. e.g.

 Hi my name is: Octon

## Details
- UnitName("unit") (or any other unit) will return "Unknown Entity" (Actually the value of the UNKNOWNOBJECT global) if called before the unit in question has been fully loaded into the world.

- The **realm** return will be nil even if the player is from a different realm, if it is out of visible range.
- Realm name will not include server type

- Note that this function always returns two values even though the latter may be nil. The difference is usually moot, but there are some cases where it matters, e.g. <code>tinsert(myTable, UnitName("player"))</code>, which would previously work, but will now cause errors. The fix is to put the expression in parenthesis: <code>tinsert(myTable, (UnitName("player")) )</code>.
