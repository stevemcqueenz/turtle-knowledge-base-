---
title: "API PlaySoundFile"
url: "https://turtle-wow.fandom.com/wiki/API_PlaySoundFile"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T16:50:58Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PlaySoundFile

PlaySoundFile(SoundFile);

Play the specified sound file.  The file will be played once.
----

  - *Arguments***

   (SoundFile)
  ; SoundFile
   String - The path and name of the sound file you'd like to play.  This has been successfully tested with .wav and .mp3 files.  Note that the path is relative to the World of Warcraft installation directory.

----

  - *Example: Playing a sound file from within an AddOn's directory***

 PlaySoundFile("Interface\\AddOns\\MyAddOn\\mysound.wav");
or
 PlaySoundFile("Interface\\AddOns\\MyAddOn\\mysound.mp3");
----

  - *Details***

This has been successfully tested for playing sounds inside your AddOn's directory, so you don't have to worry about putting your sound files outside your AddOn directory.

However - it does appear that the sound file must be present in the AddOn directory **BEFORE** loading the game.  A /console reloadui will not refresh the sound files.

There does not appear to be a bad error if the file is missing - it just won't play. There is a return status, which is 1 if the sound was OK and nil if it couldn't be found.

This API call was broken in patch 1.11 and was fixed in patch 1.11.2.

## Macro
Check that you have proper druid HoTs on you<syntaxhighlight lang="lua">
/script local i=0 g=GetPlayerBuff while not(g(i) == -1)do if(strfind(GetPlayerBuffTexture(g(i)), "Spell_Nature_Rejuvenation"))then PlaySoundFile("Sound\Creature\Ossirian\OssirianIAmRejuvenated.wav")end i=i+1 end
</syntaxhighlight>

## Addon
Example from addon named TNE_LowHealthWarning<syntaxhighlight lang="lua">
function TNE_LowHealth_OnUpdate()

  if (this.timer > this.heartRate) then
    PlaySoundFile("Interface\\AddOns\\TNE_LowHealthWarning\\Sounds\\alarmbuzzer_quiet.wav")
    this.heartRate = TNE_LowHealth_GetHeartRate()
    this.timer = 0
  else
    this.timer = this.timer + arg1
  end

end
</syntaxhighlight>
