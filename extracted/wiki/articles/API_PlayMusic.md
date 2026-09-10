---
title: "API PlayMusic"
url: "https://turtle-wow.fandom.com/wiki/API_PlayMusic"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-05T14:04:52Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API PlayMusic

<syntaxhighlight lang="lua">
 PlayMusic("mp3");
</syntaxhighlight>

Plays the given mp3.
----

** *Arguments* **

   ("mp3")
  ; mp3
   String - This is the complete path to an mp3. It is relative to your World of Warcraft\Data sub-folder!

----

** *Example* **
<syntaxhighlight lang="lua">
 PlayMusic("Sound\\Music\\GlueScreenMusic\\wow_main_theme.mp3");

 PlayMusic("website.com");
</syntaxhighlight>
----

** *Details* **

   This function plays the given music file (file format has to be mp3, I think. I have not tried others.) You cannot pause the playback. You can stop it with [StopMusic](API StopMusic).
   If any of the built-in music is playing when you call this function (e.g. Stormwind background music), it will fade out.
   The file you specified will loop until you call [StopMusic](API StopMusic).
   This Function can be used with website url's such as those used by Internet Radio Stations.

   (Not verified): since World of Warcraft uses the FMOD sound engine, it is very likely that other file formats than mp3 are supported. For example OggVorbis (.ogg).

## Addons
Example from addon named Tetris<syntaxhighlight lang="lua">
function Tetris_play_musik (x)
--x		stop = musik stoppen
--		game = gamemusik abspielen
--		menu = menumusik abspielen
	local musik = Tetris["options"]["musik"];
	local m_track = Tetris["options"]["musik-track"];
	--track 1 = random
	--track 2 = gb a
	--track 3 = gb b
	--track 4 = gb c
	--track 5 = musical
	--track 6 = remix
	if (musik == 1) then
		if (x == "stop") then
			StopMusic();
		end
		if (x == "game") then
			if (m_track == 1) then
				local track = (math.random(5))+1;
				PlayMusic("Interface\\AddOns\\Tetris\\musik\\"..track..".mp3");
			else
				PlayMusic("Interface\\AddOns\\Tetris\\musik\\"..m_track..".mp3");
			end
		end
		if (x == "menu" ) then
			PlayMusic("Interface\\AddOns\\Tetris\\musik\\0.mp3");			
		end
	end
end
</syntaxhighlight>Example from addon named SSPVP<syntaxhighlight lang="lua">
-- Play the entered sound file
function SSConfig_PlaySound()
	SSConfig_StopSound( true );
	
	local soundFile = SSSoundFile:GetText();
	
	if( soundFile ~= "" ) then
		if( string.find( soundFile, "mp3" ) ) then
			PlayMusic( "Interface\\AddOns\\SSPVP\\" .. soundFile );
			
			if( tonumber( GetCVar( "EnableMusic" ) ) == 0 or tonumber( GetCVar( "MusicVolume" ) ) == 0 or tonumber( GetCVar( "MasterVolume" ) ) == 0 ) then
				SSPVP_Message( SS_MP3_ERROR, ChatTypeInfo["SYSTEM"] );
			else
				SSPVP_Message( SS_PLAY_INFO, ChatTypeInfo["SYSTEM"] );
				SSPVP_Message( string.format( SS_PLAYING_SOUND, soundFile ), ChatTypeInfo["SYSTEM"] );
			end
		else
			PlaySoundFile( "Interface\\AddOns\\SSPVP\\" .. soundFile );
			
			if( tonumber( GetCVar( "MasterSoundEffects" ) ) == 0 or tonumber( GetCVar( "SoundVolume" ) ) == 0 or tonumber( GetCVar( "MasterVolume" ) ) == 0 ) then
				SSPVP_Message( SS_WAV_ERROR, ChatTypeInfo["SYSTEM"] );
			else
				SSPVP_Message( SS_PLAY_INFO, ChatTypeInfo["SYSTEM"] );
				SSPVP_Message( string.format( SS_PLAYING_SOUND, soundFile ), ChatTypeInfo["SYSTEM"] );
			end
		end
	end
end
</syntaxhighlight>Example from addon named Soundtrack<syntaxhighlight lang="lua">
	PauseMusic = function()
		StopMusic();
		Soundtrack.Library.CurrentlyPlayingTrack = "None";
		debugLibrary("Playing empty track.");
		PlayMusic("Interface\\AddOns\\Soundtrack\\EmptyTrack.mp3");
		SoundtrackFrame_TouchTracks();
	end;
	
	PlayTrack = function(trackName)
		-- Check if the track is valid
		if (Soundtrack_Tracks[trackName] == nil) then
			return;
		end
		
		-- Check if that track is already playing
		if (trackName == Soundtrack.Library.CurrentlyPlayingTrack) then
			return;
		end
		
		-- Everything ok, play the track
		Soundtrack.Library.CurrentlyPlayingTrack = trackName;
		
		-- TODO : Change DefaultScore name
		local fileName = "Interface\\AddOns\\Soundtrack\\Music\\"..trackName..".mp3";
		debugLibrary("Soundtrack: PlayTrack("..trackName..")");	
		PlayMusic(fileName);
		
		-- Update the UI if its opened
		SoundtrackFrame_TouchTracks();
	end;
</syntaxhighlight>
----
