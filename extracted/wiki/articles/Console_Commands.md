---
title: "Console Commands"
url: "https://turtle-wow.fandom.com/wiki/Console_Commands"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2025-08-14T06:19:55Z"
fetched: "2026-09-10T07:38:32Z"
is_turtle_content: false
patch: null
categories: []
---
# Console Commands

{| class="fandom-table"
|World of Warcraft Commands
|
|
|
|
|-
|Applicable to 1.12.1 (5875)
|To view my guide for maximizing quality and smoothness in WoW, visit the link below!
|I greatly value your feedback!  After using this resource, fill out a feedback form.
|
|
|-
|[Compiled by Shadowlurk](https://docs.google.com/spreadsheets/d/17bXs9WhOkP8Zknl1GYXCFVdHYOdgxoRFrIe7Os3BtRo/edit?gid=0#gid=0)
|http://forum.nostalrius.org/viewtopic.php?f=32&t=1100
|http://goo.gl/forms/IpxKgusnzf
|
|
|-
|Datamined from WoW.exe
|
|
|
|
|-
|Command Line Switches
|Description
|How to use Command Line Switches
|
|
|-
| -console
|Enables developer console.
|1) Create a shortcut to WoW.exe.
|
|
|-
| -d16
|Unknown. Presumably 16-bit depth.
|2) Right-click the shortcut and click "Properties".
|
|
|-
| -d24
|Unknown. Presumably 24-bit depth.
|3) Locate the "Target" field.  Scroll to the end.
|
|
|-
| -d32
|Unknown. Presumably 32-bit depth.
|4) Add a space after the last quotation mark.
|
|
|-
| -hwdetect
|Perform hardware detection.
|5) Add command line switches from the list on the left. Separate each one with a space.
|
|
|-
| -gxoverride
|Unknown.
|6) Apply changes and start game using the shortcut.
|
|
|-
| -windowed
|Run the game in windowed mode.  This can potentially decrease FPS.
|How to use Console Variables/Commands
|
|
|-
| -nofixlag
|Unknown.  Presumably disables attempts to reduce mouse lag.  If so, may increase FPS.
|1) Add -console using the above instructions.
|
|
|-
| -nosound
|Run the game without sound.  Can reduce CPU overhead if using onboard sound.
|2) Open WoW with the game shortcut you created.
|
|
|-
| -uptodate
|Tricks the game into thinking it is up to date.
|3) Press the tilde key ~ (to the left of 1, above TAB on US keyboard)
|
|
|-
| -16bit
|Unknown. Possibly set color depth to 16-bit? I don't know.
|4) Type the command, followed by a space, and a value.
|
|
|-
| -1600x1200
|Sets screen resolution to 1600x1200.
|5) Press Enter to confirm the command.
|
|
|-
| -1280x1024
|Sets screen resolution to 1280x1024.
|
|
|
|-
| -1280x960
|Sets screen resolution to 1280x960.
|You can also manually enter these commands by editing
|
|
|-
| -1024x768
|Sets screen resolution to 1024x768.
|your "config.wtf" file located in the WTF folder of your
|
|
|-
| -800x600
|Sets screen resolution to 800x600.
|World of Warcraft directory
|
|
|-
| -640x480
|Sets screen resolution to 640x480.
|Rule of Thumb:
|0 = False, 1 = True (commands that are 0 or 1)
|
|-
|Graphics Commands
|Description
|Default Value
|Possible Values
|Notes
|-
|anisotropic
|Anisotropic texture filtering.  Improves quality of textures in the distance.
|1
|Integer: 1, 2, 4, 8, or 16
|Lower = Performance, Higher = Quality
|-
|baseMip
|Base mipmap level
|0
|Integer: 0 or 1
|1 = Performance, 0 = Quality
|-
|DesktopGamma
|Use desktop gamma values (if enabled, the "gamma" variable is ignored)
|0
|Integer: 0 or 1
|
|-
|detailDoodadAlpha
|Alpha level of detail doodads
|100
|Integer: 0 - 255
|
|-
|DistCull
|Sets distance for culling of objects near farclip
|500.00
|Double: 1.0 - 888.888916
|Lower = Performance, Higher = Quality
|-
|doodadAnim
|Toogle doodad animation.  Animated geometry.
|1
|Integer: Any
|0 = Performance, 1 = Quality
|-
|farClip
|View distance.
|500.00
|Double: 177.0 - 777.0
|Lower = Performance, Higher = Quality
|-
|ffx
|Enable full-screen effects.  Enabling this will provide higher graphics quality.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|ffxDeath
|Full screen death effect.  Enabling this will enable certain screen effects while dead.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|ffxGlow
|Full screen glow effect.  Enabling this will give a soft glow (bloom) effect.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|ffxRectangle
|Use rectangle texture for full screen effect.
|1
|Integer: 0 or 1
|
|-
|footstepBias
|Unit footstep depth bias.
|0.125
|Double: 0.0 - 1.0
|0 = Flickering, 1 = Neat
|-
|frillDensity
|Density of grass and other ground foliage.  Does not control the distance at which they render.
|24
|Integer: 1 - 256
|Lower = Performance, Higher = Quality
|-
|fullAlpha
|Full alpha level of detail.
|1
|Integer: Any
|
|-
|gamma
|Screen gamma (brightness)  *ignored if DesktopGamma is set to 1*
|1.0
|Double: Any
|
|-
|gxApi
|Graphics API
|direct3d
|String: direct3d or opengl
|Direct3D provides greater performance
|-
|gxAspect
|Constrain window aspect ratio.
|1
|Integer: 0 or 1
|
|-
|gxColorBits
|Color bits.  Larger range of colors available to the renderer.
|24
|Integer: 16, 24, or 30
|16 = Performance, 24 = Quality, 30 bugs out for some reason
|-
|gxCursor
|Toggle hardware cursor.
|1
|Integer: 0 or 1
|Set to 0 to debug mouse issues
|-
|gxDepthBits
|Depth bits.  Don't use 32, the game doesn't seem to like it.
|24
|Integer: 16, 24, or 32
|16 = Performance, 24 = Quality
|-
|gxFixLag
|Prevents mouse lag.
|0
|Integer: 0 or 1
|0 = Performance, 1 = Less mouse lag
|-
|gxMaximize
|Maximize game window.  Used in conjunction with gxWindow 1.
|0
|Integer: 0 or 1
|
|-
|gxMultisample
|Multisample Anti-Aliasing (MSAA).
|1
|Integer: 1, 2, 4 or 8
|Lower = Performance, Higher = Quality
|-
|gxMultisampleQuality
|Multisample Anti-Aliasing quality.
|0
|Double: Any
|No noticeable difference regardless of value.
|-
|gxOverride
|gx overrides.
|N/A
|UNKNOWN
|No idea what this comand does!
|-
|gxRefresh
|Refresh rate of your monitor (if gxVSync enabled, FPS capped at this value)
|60
|Integer: Any
|Set to maximum refresh rate of your monitor.
|-
|gxResolution
|Screen resolution (widthxheight)
|1024x768
|String: Any valid resolution
|Set to maximum screen resolution of your monitor.
|-
|gxTripleBuffer
|Triple Buffering (use in conjunction with gxVSync)
|0
|Integer: 0 or 1
|0 is VSync disabled, 1 if VSync enabled
|-
|gxVSync
|Vertical Synchronization
|1
|Integer: 0 or 1
|I always suggest using this!  It helps prevent screen tearing by limiting your maximum framerate.
|-
|gxWindow
|Toggle fullscreen/windowed mode
|0
|Integer: 0 or 1
|0 = Fullscreen, 1 = Windowed.   Fullscreen gaming can increase performance
|-
|horizonFarClip
|Far clip plane distance for horizon.
|2112
|Double: 1305.0 - 2112.0
|Lower = Performance, Higher = Quality
|-
|lodDist
|Set level of detail distance.
|100.00
|Float: 50.0 - 250.0
|Lower = Performance, Higher = Quality (Only takes effect with "lod" is set to 1)
|-
|M2BatchDoodads
|Combine doodads to reduce batch count.
|1
|Integer: 0 or 1
|1 = Performance, 0 = Less Performance
|-
|M2Faster
|End User control of scene optimization mode.
|1
|Integer: 0 - 3
|1 = Dual-core CPU, 2 = Tri-Core CPU, 3 = Quad-Core CPU or greater
|-
|M2UseClipPlanes
|Use clip planes for sorting transparent objects
|1
|Integer: 0 or 1
|1 = Performance, 0 = Less Performance
|-
|M2UsePixelShaders
|Light models using pixel shaders
|0
|Integer: 0 or 1
|
|-
|M2UseShaders
|Skin models using vertex shaders
|1
|Integer: 0 or 1
|
|-
|M2UseThreads
|Multithread model animations
|1
|Integer: 0 or 1
|1 = Performance, 0 = Less Performance
|-
|M2UseZFill
|Z-fill transparent objects
|1
|Integer: 0 or 1
|1 = Performance, 0 = Less Performance
|-
|mapObjLightLOD
|Map object light level of detail
|0
|Integer: 0 - 2
|0 = Performance, 1 = Balanced, 2 = Quality
|-
|mapObjOverbright
|Map object overbright
|1
|Integer: 0 or 1
|0 = Peformance, 1 = Quality
|-
|mapShadows
|Toggle map shadows
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|MaxLights
|Max number of hardware lights
|4
|Integer: 1 - 4
|Lower = Performance, Higher = Quality
|-
|maxLOD
|Maximum level of detail.
|N/A
|UNKNOWN
|Setting via console has no effect.
|-
|nearClip
|Near clip plane distance.
|0.1
|Double: 0.01 - 0.33
|Higher values help prevent Z-Fighting (i.e. far textures flickering)
|-
|particleDensity
|Particle density.
|1.00
|Double: 0.25 - 1.00
|Lower = Performance, Higher = Quality
|-
|pixelShaders
|Use pixel shaders.
|1
|Integer: 0 or 1
|Lower = Performance, Higher = Quality
|-
|setShadow
|Shadows.
|N/A
|UNKNOWN
|Setting via console has no effect.
|-
|ShadowBias
|Unit shadow depth bias.
|0.1
|Double: 0.0 - 1.0
|
|-
|shadowLevel
|Terrain shadow map mip level.
|1
|Integer: 0 or 1
|1 = Performance, 0 = Quality
|-
|ShadowLOD
|Unit shadow level of detail.  Blob shadow at base of player and NPCs.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|showfootprintparticles
|Toggles rendering of footprint particles.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|showfootprints
|Toggles rendering of footprints.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|SkyCloudLOD
|Cloud level of detail.
|0
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|SkySunGlare
|Sun glare.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|SmallCull
|Object size culling.
|0.04
|Double: 0.001 - 2.0
|Higher = Performance, Lower = Quality
|-
|specular
|Specularity effects.  Shiny reflections and such.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|spellEffectLevel
|Spell Effects.
|2
|Integer: 0 - 2
|0 = Performance, 1 = Balanced, 2 = Quality
|-
|texLodBias
|Texture Level of Detail Bias.
|0.0
|Double: -1.0 - 1.0
|Higher = Performance, Lower = Quality
|-
|textureLodDist
|Texture detail.
|777.0
|Float: 80.0 - 777.0
|Lower = Performance, Higher = Quality
|-
|triangleStrips
|Use triangle strips to render.
|1
|Integer: 0 or 1
|1 = Performance, 0 = Less Performance
|-
|trilinear
|Trilinear texture filtering.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|unitDrawDist
|Unit draw distance.
|300.0
|Integer: 100 - 300
|Lower = Performance, Higher = Quality
|-
|useWeatherShaders
|Use shaders for weather effects.
|1
|Integer: 0 or 1
|0 = Performance, 1 = Quality
|-
|violenceLevel
|Gore/blood violence level.
|N/A
|Integer: 0 - 5
|0 = Less gore (and possibly more performance), 5 = Most gore (and possibly less performance)
|-
|waterLOD
|Water geometry level of detail
|0
|UNKNOWN.
|
|-
|waterMaxLOD
|Maximum level of detail for water
|N/A
|UNKNOWN
|This command seems to have no effect.
|-
|waterParticulates
|Water particulates
|N/A
|UNKNOWN
|This command seems to have no effect.
|-
|waterRipples
|Water ripples
|N/A
|UNKNOWN
|This command seems to have no effect.
|-
|waterSpecular
|Water specular lighting effects
|N/A
|UNKNOWN
|This command seems to have no effect.
|-
|waterWaves
|Water waves
|N/A
|UNKNOWN
|This command seems to have no effect.
|-
|weatherDensity
|Intensity of weather effects (rain, snow, etc) *Higher values = more intense weather!*
|2
|Integer: 0 - 3
|Lower = Performance, Higher = Quality
|-
|widescreen
|Widescreen resolution
|1
|Integer: 0 or 1
|Set to 1 if using a widescreen resolution (such as 1920x1080)
|-
|Game Engine Commands
|Description
|Default Value
|Possible Values
|Notes
|-
|bspcache
|BSP node caching
|1
|Integer: 0 or 1
|1 = Performance, 0 = Less Performance
|-
|scriptMemory
|Memory used by the scripting system (in Kb)
|49152
|Integer: Any
|Higher values dedicate more memory to addons.
|-
|timingModeOverride
|Select a specific timing mode.  RDTSC is supposedly the most precise.
|0
|Integer: 0 - 4
|0=default 1=GetTickCount 2=RDTSC 3=QueryPerformanceCounter 4=timeGetTime
|-
|hwDetect
|Do hardware detection.
|0
|Integer: 0 or 1
|Hardware detection at the start of the game.
|-
|CheckAddonVersion
|Check interface addon version number.
|1
|Integer: 0 or 1
|0 = Loads all addons, 1 = Loads only up to date addons
|-
|Sounds Commands
|Description
|Default Value
|Possible Values
|Notes
|-
|AmbienceVolume
|Ambient sound effect volume
|0.6
|Double: 0.0 - 1.0
|Lower = Quieter, Higher = Louder
|-
|disableOptionalSpeech
|Disables the optional speech packs (forces use of primary speech pack)
|0
|Integer: 0 or 1
|
|-
|EmoteSounds
|Emote sound effects
|1
|Integer: 0 or 1
|0 = No emote sounds, 1 = Emote sounds
|-
|EnableAmbience
|Enable ambience sound effects
|1
|Integer: 0 or 1
|0 = No ambient sound effects, 1 = Ambient sound effects
|-
|EnableErrorSpeech
|Error speech
|1
|Integer: 0 or 1
|0 = No error speech, 1 = Error speech
|-
|EnableGroupSpeech
|Voice macros
|1
|Integer: 0 or 1
|
|-
|EnableMusic
|Enables music
|1
|Integer: 0 or 1
|0 = No music, 1 = Music
|-
|MapWaterSounds
|Water sounds
|1
|Integer: 0 or 1
|0 = No water sounds, 1 = Water sounds
|-
|MasterSoundEffects
|Enable sound effects
|1
|Integer: 0 or 1
|0 = No sound effects, 1 = Sound effects
|-
|MasterVolume
|Master volume
|1
|Double: 0.0 - 1.0
|Lower = Quieter, Higher = Louder
|-
|MusicVolume
|Music volume
|0.4
|Double: 0.0 - 1.0
|Lower = Quieter, Higher = Louder
|-
|SoundBufferSize
|Sound buffer size (milliseconds)
|50
|Integer: Any
|
|-
|SoundDriver
|Sound driver (-1 = system default)
| -1
|UNKNOWN
|*Do not modify unless extremely knowledgeable*
|-
|SoundInitFlags
|Sound initialization flags
|128
|UNKNOWN
|
|-
|SoundListenerAtCharacter
|Lock listener at character
|1
|Integer: 0 or 1
|0 = Sound based on camera position, 1 = Sound based on character position.
|-
|SoundMaxHardwareChannels
|Sound maximum hardware channels
|12
|UNKNOWN
|
|-
|SoundMemoryCache
|Sound cache memory size (MB)  (I personally have this set to 128 *128MB* and have had no issues)
|4
|Integer: Any
|Higher = More memory to sound cache (could reduce overhead)
|-
|SoundMinHardwareChannels
|Sound minimum hardware channels  (-1 = system default)
| -1
|UNKNOWN
|*Do not modify unless extremely knowledgeable*
|-
|SoundMixer
|Sound mixer  (-1 = system default)
| -1
|UNKNOWN
|*Do not modify unless extremely knowledgeable*
|-
|SoundMixRate
|Sound mix rate (Hz)
|44100
|Integer: 44100 or 48000
|Setting to 48000 can theoretically increase audio quality.
|-
|SoundOutputSystem
|Sound output system (-1 = system default)
| -1
|UNKNOWN
|*Do not modify unless extremely knowledgeable*
|-
|SoundReverb
|Sound reverberation effect
|1
|Integer: 0 or 1
|0 = No reverb, 1 = Reverb
|-
|SoundRolloffFactor
|Sound rolloff factor
|4
|UNKNOWN
|
|-
|SoundSoftwareChannels
|Sound software channels
|12
|UNKNOWN
|
|-
|SoundVolume
|Sound volume
|1
|Double: 0.0 - 1.0
|Lower = Quieter, Higher = Louder
|-
|SoundZoneMusicNoDelay
|Loop music (same as the one in Sound Options)
|0
|Integer: 0 or 1
|0 = Music doesn't keep looping over and over, 1 = Music always plays
|-
|User Interface Commands
|Description
|Default Value
|Possible Values
|Notes
|-
|deselectOnClick
|N/A
|1
|Integer: 0 or 1
|
|-
|gameTip
|Determines which Loading Screen tip will display. It increments every time you login, starting at 1.
|1
|Integer: 1 - ?
|I do not know how many game tips there are in total.
|-
|minimapInsideZoom
|N/A
|3
|UNKNOWN
|
|-
|minimapZoom
|Minimap zoom level.  Same at the + and - icons on the minimap.
|3
|Integer: 0 - 5
|
|-
|mouseInvertPitch
|Invert mouse pitch movements
|0
|Integer: 0 or 1
|
|-
|mouseInvertYaw
|Invert mouse yaw movements
|0
|Integer: 0 or 1
|
|-
|mouseSpeed
|Mouse speed
|1
|Integer: Any
|Higher = More mouse sensitivity, Lower = Lower mouse sensitivity
|-
|movie
|Intro movie. The "Ten Years Ago" movie that plays at the very beginning of the game.
|1
|Integer: 0 or 1
|0 = Disable introduction movie, 1 = Enable introduction movie
|-
|movieSubtitle
|Show movie subtitles
|0
|Integer: 0 or 1
|0 = Disable movie subtitles, 1 = Enable movie subtitles
|-
|ObjectSelectionCircle
|Selection circle at base of targets.
|1
|Integer: 0 or 1
|0 = No selection circle, 1 = Selection circle enabled
|-
|profanityFilter
|Toggle profanity filter.  Profanity means swears, cursing, etc.
|1
|Integer: 0 or 1
|0 = Profanity filter disabled, 1 = Profanity filter enabled.
|-
|ShowErrors
|Errors being shown
|0
|Integer: 0 or 1
|
|-
|showGameTips
|Game tips.  This controls the game tips being shown on the loading screens.
|1
|Integer: 0 or 1
|0 = Tips not shown on loading screen, 1 = Show tips on loading screen
|-
|showLootSpam
|N/A
|1
|Integer: 0 or 1
|
|-
|spamFilter
|Toggle spam filter
|1
|Integer: 0 or 1
|0 = Spam filter disabled, 1 = Spam filter enabled
|-
|statusBarText
|N/A
|0
|Integer: Any
|
|-
|targetNearestDistance
|N/A
|41.0
|Double: 1.0 - 50.0
|
|-
|targetNearestDistanceRadius
|N/A
|10.0
|Double: 1.0 - 50.0
|
|-
|UberTooltips
|Toggles ubertips
|1
|Integer: 0 or 1
|
|-
|uiScale
|User interface size scaling (Use in conjunction with useUIScale 1)
|1.0
|Integer: Any
|Higher = Larger interface elements.  Don't make them too big!
|-
|UnitNameRenderMode
|Sets unitname mode
|2
|Integer: 0 - 3
|(0=none, 1=lockedunits/lockedplayers, 2=playersalways+lockedunits, 3=all units always)
|-
|useUIScale
|Use custom user interface scaling
|0
|Integer: 0 or 1
|0 = Disable custom UI scaling, 1 = Use custom UI scaling
|-
|Combat Commands
|Description
|Default Value
|Possible Values
|Notes
|-
|assistAttack
|Same as "Assist on Attack" in Interface Options.
|0
|Integer: 0 or 1
|0 = Disabled, 1 = Enabled
|-
|combatLogOn
|Enable combat log
|1
|Integer: 0 or 1
|0 = Disable combat log, 1 = Enable combat log
|-
|Debugging Commands
|Description
|Default Value
|Possible Values
|Notes
|-
|debugTaint
|N/A
|0
|Integer: 0 or 1
|
|-
|ErrorFilter
|Filter errors (use "except" to invert mask i.e. all except objects)
|all
|See notes
|Values: general, world, ui, animation, models, objects, all
|-
|ErrorLevelMax
|The most severe type of errors to filter
|3
|Integer: 0 - 3
|
|-
|ErrorLevelMin
|The least severe type of errors to filter
|1
|Integer: 0 - 3
|
|-
|Errors
|Toggle error display
|0
|Integer: 0 or 1
|0 = No errors displayed, 1 = Errors displayed
|-
|Miscellaneous Commands
|Description
|Default Value
|Possible Values
|Notes
|-
|readContest
|Status of the Contest notice
|0
|Integer: 0 or 1
|
|-
|readEULA
|Status of the End User License Agreement
|0
|Integer: 0 or 1
|0 = Did not accept EULA, 1 = Accepted EULA
|-
|readScanning
|Status of the Scanning notice
|0
|Integer: 0 or 1
|
|-
|readTOS
|Status of the Terms of Service.
|0
|Integer: 0 or 1
|0 = Did not accept Terms of Service, 1 = Accepted Terms of Service
|-
|realmName
|Current name of realm
|N/A
|String: Any
|Last realm that was successfully logged into.
|-
|accountName
|Saved account name
|N/A
|String: Any
|Last account name to successfully log into a server.
|-
|lastCharacterIndex
|Last character selected
|0
|Integer: Any
|Last character to log into the game.
|-
|Console Commands
|Description
|
|
|
|-
|bgcolor
|Console background color
|
|
|
|-
|cameraClip
|N/A
|
|
|
|-
|clear
|Clear all text from the console
|
|
|
|-
|closeconsole
|Closes the developer console
|
|
|
|-
|consolelines
|Set maximum visible lines in the console (expands it, makes it bigger)
|
|
|
|-
|font
|Console font type.  This is not for the in-game chat.
|
|
|
|-
|fontcolor
|Console font color.  This is not for the in-game chat.
|
|
|
|-
|fontsize
|Console font size.  This is not for the in-game chat.
|
|
|
|-
|gxRestart
|Reinitialize the graphics engine
|
|
|
|-
|heapusage
|Shows debugging information about the heap
|
|
|
|-
|highlightcolor
|N/A
|
|
|
|-
|objusage
|Shows debugging information about object usage
|
|
|
|-
|reloadUI
|Reloads the user interface
|
|
|
|-
|repeat
|N/A
|
|
|
|-
|logout
|Log out
|
|
|
|-
|quit
|Exits game immediately
|
|
|
|-
|ver
|Show game version
|
|
|
|-
|cvar_reset
|Set the value of a cvar to its startup value
|
|
|
|-
|cvar_default
|Set the value of a cvar to its coded default value
|
|
|
|-
|cvarlist
|Shows all cvars
|
|
|
|-
|Toggleable Commands
|Description
|
|
|
|-
|showCull
|Terrain culling
|
|
|
|-
|showDetailDoodads
|Detail doodads
|
|
|
|-
|showLowDetail
|Terrain low detail
|
|
|
|-
|showShadow
|Terrain shadow
|
|
|
|-
|showSimpleDoodads
|Simple doodads
|
|
|
|-
|showplayer
|Toggle player hidden or not
|
|
|
|-
|togglecloak
|Toggles display of the cloak on and off
|
|
|
|-
|togglehelm
|Toggles display of the helmet on and off
|
|
|
|-
|Script Commands
|Description
|
|
|
|-
|/script SetBaseMip(value)
|Modifies "baseMip"
|
|
|
|-
|/script SetDoodadAnim(value)
|Modifies "doodadAnim"
|
|
|
|-
|/script SetFarclip(value)
|Seems to modify "farClip" only
|
|
|
|-
|/script SetWorldDetail(value)
|0 = frillDensity 16   1 = frillDensity 32  2 = frillDensity 48.
|
|
|
|-
|/script SetGamma(value)
|Modifies "gamma".  Same as using the gamma command.
|
|
|
|-
|/script SetTerrainMip(value)
|Modifies "shadowlevel".  Anything besides 1 or 0 will result in seriously malformed shadows
|
|
|
|-
|/script SetTexLodBias(value)
|If you set the value too high or low, the game will actually crash!
|
|
|
|-
|
|
|
|
|
|-
|There are many more commands than the ones listed.  Most of the additional commands are either ones that control the camera or ones that are exclusive
|
|
|
|
|-
|to developers.  They will not all be listed here because they simply do not matter!  If you wish to see every single command, then do your own research!
|
|
|
|
|-
|The commands listed here are the only practical ones for end users.  Use them!
|
|
|
|
|}
