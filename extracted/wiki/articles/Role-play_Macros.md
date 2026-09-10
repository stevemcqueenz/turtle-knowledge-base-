---
title: "Role-play Macros"
url: "https://turtle-wow.fandom.com/wiki/Role-play_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:24:31Z"
fetched: "2026-09-10T07:39:31Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Role-play Macros

## Pocket watch
Check your Pocket watch
 <code>/e checks a small silver pocket watch.
 /run SendChatMessage("notes the time, "..(date("%H:%M.")),"emote")
 /nod</code>
This macro will present the current server time as an emote. It is useful if you want to play with the map clock disabled. As with the others, feel free to edit the first line to describe your pocket watch however you want!

## Drink from a Flask
This macro will make your character do the drink animation with a little more flavor. The second line toggles weapon sheathing, but this never occurs due to the animation being canceled by the drink command. It is just to add the sound effect of drawing the weapon, as if producing the flask had made a sound. Feel free to change the first line to describe your flask, wine-skin, or the like however you want.
 <code>/e produces a battered silver flask.
 /run ToggleSheath()
 /drink</code>

## Warrior
Taunt:
 <code>/cast taunt
 /run TeM=TeM or GetTime()-3 if (GetTime()-TeM)>3 and DoEmote("taunt") then TeM=GetTime() end</code>

Mocking Blow:
 <code>/cast Mocking Blow
 /run TeM=TeM or GetTime()-3 if (GetTime()-TeM)>3 and DoEmote("taunt") then TeM=GetTime() end</code>

Charge:
 <code>/cast charge 
 /run TeM=TeM or GetTime()-5 if (GetTime()-TeM)>5 and DoEmote("charge") then TeM=GetTime() end</code>

Intercept:
 <code>/cast Intercept
 /run TeM=TeM or GetTime()-5 if (GetTime()-TeM)>5 and DoEmote("charge") then TeM=GetTime() end</code>

Battle Shout:
 <code>/cast battle shout
 /run TeM=TeM or GetTime()-3 if (GetTime()-TeM)>3 and DoEmote("cheer") then TeM=GetTime() end</code>

Demoralizing Shout:
 <code>/cast Demoralizing Shout
 /run TeM=TeM or GetTime()-3 if (GetTime()-TeM)>3 and DoEmote("laugh") then TeM=GetTime() end</code>

Challenging Shout:
 <code>/cast Challenging Shout
 /run TeM=TeM or GetTime()-3 if (GetTime()-TeM)>3 and DoEmote("roar") then TeM=GetTime() end</code>

Intimidating Shout:
 <code>/cast Intimidating Shout
 /run TeM=TeM or GetTime()-3 if (GetTime()-TeM)>3 and DoEmote("threaten") then TeM=GetTime() end</code>

Ranged Attack
 <code>/cast auto shot
 /run TeM=TeM or GetTime()-3 if (GetTime()-TeM)>3 and DoEmote("incoming") then TeM=GetTime() end</code>

Last Stand
 <code>/cast Last Stand
 /run TeM=TeM or GetTime()-3 if (GetTime()-TeM)>3 and DoEmote("healme") then TeM=GetTime() end</code>

Execute
 <code>/cast Execute
 /run TeM=TeM or GetTime()-5 if (GetTime()-TeM)>5 and DoEmote("threaten") then TeM=GetTime() end</code>

Sunder
 <code>/cast sunder armor
 /run TeM=TeM or GetTime()-5 if (GetTime()-TeM)>5 and DoEmote("attacktarget") then TeM=GetTime() end</code>

Defensive Stance
 <code>/cast Defensive Stance
 /run TeM=TeM or GetTime()-5 if (GetTime()-TeM)>5 and DoEmote("follow") then TeM=GetTime() end</code>

Hamstring
 <code>/cast Hamstring
 /run TeM=TeM or GetTime()-5 if (GetTime()-TeM)>5 and DoEmote("wait") then TeM=GetTime() end</code>

War Stomp
 <code>/cast War Stomp
 /run TeM=TeM or GetTime()-2 if (GetTime()-TeM)>2 and DoEmote("roar") then TeM=GetTime() end</code>

## Pickpocket
A pickpocket macro to confuse/troll people
 <code>/run silver = math.random(0,99);  copper = math.random(0,99) SendChatMessage("pickpokets ".. silver .."s and ".. copper .."c from you.", "emote")</code>

## Roll the Dice
This macro will yield two random numbers from 1 to 6 as emote text. Feel free to change the first line to describe the dice differently.
 <code>/e rolls a pair of worn bone dice.
 /run SendChatMessage("rolls a "..random(1,6).." and a "..random(1,6)..".", "emote")</code>
