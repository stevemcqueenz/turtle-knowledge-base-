---
title: "No Sound - Output system: 0 'No Sound'"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=18905"
topic_id: 18905
forum_id: 3
forum: "Help & Support"
author: "Carnificem"
author_authority: "player"
posted: "2025-04-26T19:15:00Z"
last_post: "2025-04-27T09:19:00Z"
post_count: 2
pages: 1
fetched: "2026-09-10T08:44:35Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# No Sound - Output system: 0 'No Sound'

## Post 128628 by Carnificem — 2025-04-26T19:15:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128628#p128628 | page 1 | era: pre-1.18.1 -->

Playing on a new rig, I'm having some issues getting sound to the game. Audio works fine everywhere else, no problem, but I got no sounds in wow. Nothing at all.
I then took a look at the sound.log:

 4/26 21:06:45.766  Sound::Initialize()
 4/26 21:06:45.766  fmod.dll version 3.75 loaded
 4/26 21:06:45.789  memory system configured: SMem wrappers
 4/26 21:06:45.808  Output system: 0 'No Sound'
 4/26 21:06:45.808  Driver: 0 'No Sound Driver' 00000000
 4/26 21:06:45.808  Mixer: 0 'MMXP6'
 4/26 21:06:45.808  Buffer size: 50ms
 4/26 21:06:45.808  Channels: 128 (128 software, 0 2D hardware(dsound), 0 3D hardware)
 4/26 21:06:45.808  Output rate: 44100 Hz
 4/26 21:06:45.808  Initialization flags: 00000082
 4/26 21:06:45.808  Sound::Initialize() complete

I figured it might be a driver issue, but alas after uninstalling and trying, and reinstalling and trying, a long with any other thing I could think off, I really don't know how to fix it.

Hope someone here has had similiar issues.

## Post 128673 by Carnificem — 2025-04-27T09:19:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=128673#p128673 | page 1 | era: pre-1.18.1 -->

Figured it out.

When installing windows 11, I choose the Pro N version as it doesn't have Media Feature (Which I didn't want, as I thought it would be bloat). What they failed to mention is the ability to play legacy games (older directs) would not be a complete experience, in my case missing sounds, as the so called Media Feature is required for these older directs to be installed. I had the possiblity of installing a different version (stay away from N version) or install the Media Feature Pack in the optional features in windows settings. Installing the Media Feature Pack might prove difficult as It might fail. If this is the case these commands can be run in powershell (as admin)

dism /online /remove-capability /capabilityname:Media.MediaFeaturePack~~~~0.0.1.0
dism /online /add-capability /capabilityname:Media.MediaFeaturePack~~~~0.0.1.0

If this fails aswell, try and run:
dism /online /cleanup-image /startcomponentcleanup
and run the above commands aswell. If this still fails (Which it did for me) I ran the cleanup command once again and went to bed with my hope low. When I woke up, I figured it would re-try installing the media pack through optional features and it worked. I then downloaded the directx end-user runtime web installer from microsoft and successfully installed the legacy dx and finally got my audio back in wow.

