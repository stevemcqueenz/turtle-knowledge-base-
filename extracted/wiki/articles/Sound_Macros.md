---
title: "Sound Macros"
url: "https://turtle-wow.fandom.com/wiki/Sound_Macros"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-01-30T12:24:03Z"
fetched: "2026-09-10T07:39:40Z"
is_turtle_content: false
patch: null
categories: ["Macros"]
---
# Sound Macros

## Disable audio
Disable audio for macro to cast spell
 <code>/console Sound_EnableSFX 0
 /script if GetUnitName("target")==nil then TargetNearestEnemy() end
 /cast Fireball
 /console Sound_EnableSFX 1
 /script UIErrorsFrame:Clear();</code>

## Error sound
Error sound off
 <code>/Console MasterSoundEffects 0</code>

Error sound on
 <code>/Console MasterSoundEffects 1</code>

## Error Speech
Disable Error Speech (SetCVar)
 <code>/run SetCVar("EnableErrorSpeech", 0) UIErrorsFrame:UnregisterEvent"UI_ERROR_MESSAGE" CastSpellByName"SPELLNAME" UIErrorsFrame:RegisterEvent"UI_ERROR_MESSAGE" SetCVar("EnableErrorSpeech", 1)</code>

Disable Error Speech (Console)
 <code>/console EnableErrorSpeech 0
 /run UIErrorsFrame:UnregisterEvent"UI_ERROR_MESSAGE"
 /run CastSpellByName"SPELLNAME"
 /run UIErrorsFrame:RegisterEvent"UI_ERROR_MESSAGE"
 /console EnableErrorSpeech 1</code>

## Play Sound
Play the Raid Warning sound
 <code>/run PlaySound ("RaidWarning");</code>

Play Raid Warning sound if target exist
 <code>/run if UnitExists("target") then PlaySound ("RaidWarning"); else end</code>

Check that you have proper druid HoT on you
 <code>/script local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Nature_Rejuvenation"))then PlaySoundFile("Sound\Creature\Ossirian\OssirianIAmRejuvenated.wav")end i=i+1 end</code>

## Sound Tweaks
Enter each of these commands in-game and then restart your client.
 <code>/console SoundMemoryCache 128
 /console SoundMaxHardwareChannels 128
 /console SoundSoftwareChannels 128</code>
put compatibility option to XP SP3 if you get sound issues

You can add this one if you want too:
 <code>/console SoundMixRate 48000</code>

## Sound channels
Set in game:
 <code>/run SetCVar("Sound_NumChannels",128)</code>

Confirm its done:
 <code>/dump GetCVar("Sound_NumChannels")</code>
You can add 2 lines to your config.wtf - that way you dont need a modified .exe - the lines to add are SET SoundMaxHardwareChannels "256" and "SET SoundSoftwareChannels "256" - change the number 256 to the channels you want. I have it set to the max of 256.
