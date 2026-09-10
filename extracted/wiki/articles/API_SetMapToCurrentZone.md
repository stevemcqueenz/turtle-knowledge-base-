---
title: "API SetMapToCurrentZone"
url: "https://turtle-wow.fandom.com/wiki/API_SetMapToCurrentZone"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T13:10:38Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API SetMapToCurrentZone

Sets the current world map continent and zone to be the zone the player is currently in.
 SetMapToCurrentZone()
----

** *Arguments***

   *none*

----

** *Example***

 SetMapToCurrentZone();

** *Result***
   World map zoom changes (if necessary)

----

** *Details***

   Important note: This function seems to have a bug after "reloadui". Then it only sets the zoom to the continent the player is on and not to the zone until the zone changes at least once.

## Macro
Tells you your current coordinates<syntaxhighlight lang="lua">
/run SetMapToCurrentZone() local x,y=GetPlayerMapPosition("player") DEFAULT_CHAT_FRAME:AddMessage(format("%s, %s: %.1f, %.1f",GetZoneText(),GetSubZoneText(),x*100,y*100))
</syntaxhighlight>

## Addon
Example from addon named IMBA<syntaxhighlight lang="lua">
--The various equations to convert map coordinates to Ping coordinates
--Linear equations fitted via linear least squares of a decent sampling of numbers ~25
--Introduces error on the order of +/-0.005 of ping coordinates
IMBA_MapEquations={}
IMBA_MapEquations[2]={mx=-75.42874908;bx=34.2859094;my=50.2865016;by=-16.00008308}
IMBA_MapEquations[1]={mx=-78.85670491;bx=36.57127371;my=52.57102443;by=-27.42828408}

function IMBA_Tracker_GetPostion_ViaMap()
	SetMapToCurrentZone()
	local continent=GetCurrentMapContinent();
	SetMapZoom(continent)
	local x, y = GetPlayerMapPosition("player");
	local equ=IMBA_MapEquations[continent]
	if not equ then
		equ={mx=1;bx=0;my=1;by=0}
	end
	x=x*equ.mx+equ.bx
	y=y*equ.my+equ.by
	return x, y
end

function IMBA_Tracker_Calibration_Sort(v1,v2)
	return v1.score>v2.score
end
</syntaxhighlight>
