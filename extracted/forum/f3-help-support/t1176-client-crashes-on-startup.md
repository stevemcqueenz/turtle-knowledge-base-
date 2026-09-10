---
title: "Client crashes on startup"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=1176"
topic_id: 1176
forum_id: 3
forum: "Help & Support"
author: "Calvicus"
author_authority: "player"
posted: "2020-07-17T06:21:00Z"
last_post: "2020-07-17T13:41:00Z"
post_count: 3
pages: 1
fetched: "2026-09-10T09:29:34Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Client crashes on startup

## Post 6921 by Calvicus — 2020-07-17T06:21:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6921#p6921 | page 1 | era: pre-1.18.1 -->

I got a vanilla client for mac and merged them with Turtle Wow client.

I'm going to assume that's a no no.

To be honest, I've spent a while on this, and my brain is turtling, and I could use some help.

Very excited to be able to use more than judgement as ret in vanilla.

Ideally Scarlet Crusade RP guild.

Anyways. It crashes on startup, and I don't have a WTF folder or Config to mess with, so I'm out of luck there.

Any and all suggestions are great.

Thanks!

Process:               World of Warcraft [77403]
Path:                  /private/var/folders/*/World of Warcraft.app/Contents/MacOS/World of Warcraft
Identifier:            com.blizzard.worldofwarcraft
Version:               1.12.1 (1.12.1)
Code Type:             X86 (Native)
Parent Process:        ??? [1]
Responsible:           World of Warcraft [77403]
User ID:               501

Date/Time:             2020-07-17 00:17:37.420 -0600
OS Version:            Mac OS X 10.13.6 (17G13035)
Report Version:        12
Anonymous UUID:        C817E2BA-974D-AC91-5A14-424ED9BFE7C7

Sleep/Wake UUID:       F7B930D9-250F-4A31-875E-023BEC0EF359

Time Awake Since Boot: 320000 seconds
Time Since Wake:       1800 seconds

System Integrity Protection: enabled

Notes:                 Translocated Process

Crashed Thread:        0  Dispatch queue: com.apple.main-thread

Exception Type:        EXC_BAD_ACCESS (SIGSEGV)
Exception Codes:       KERN_INVALID_ADDRESS at 0x0000000000000024
Exception Note:        EXC_CORPSE_NOTIFY

VM Regions Near 0x24:
 -->
__TEXT                 0000000000001000-0000000000693000 [ 6728K] r-x/rwx SM=COW  /var/folders/*/World of Warcraft.app/Contents/MacOS/World of Warcraft

Thread 0 Crashed:: Dispatch queue: com.apple.main-thread
 0   libsystem_pthread.dylib       	0xa75990ae pthread_mutex_lock + 12
 1   com.blizzard.worldofwarcraft  	0x0019f055 0x1000 + 1695829
 2   com.blizzard.worldofwarcraft  	0x00125124 0x1000 + 1196324
 3   com.blizzard.worldofwarcraft  	0x0051255c 0x1000 + 5313884
 4   com.blizzard.worldofwarcraft  	0x0000e21d 0x1000 + 53789
 5   com.blizzard.worldofwarcraft  	0x0000f174 0x1000 + 57716
 6   com.blizzard.worldofwarcraft  	0x00004085 0x1000 + 12421
 7   com.apple.HIToolbox           	0x92dad736 _InvokeEventHandlerUPP(OpaqueEventHandlerCallRef*, OpaqueEventRef*, void*, long (*)(OpaqueEventHandlerCallRef*, OpaqueEventRef*, void*)) + 26
 8   com.apple.HIToolbox           	0x92d5a6f9 DispatchEventToHandlers(EventTargetRec*, OpaqueEventRef*, HandlerCallRec*) + 1948
 9   com.apple.HIToolbox           	0x92d598ca SendEventToEventTargetInternal(OpaqueEventRef*, OpaqueEventTargetRef*, HandlerCallRec*) + 374
 10  com.apple.HIToolbox           	0x92d59742 SendEventToEventTargetWithOptions + 40
 11  com.apple.HIToolbox           	0x92d8fa47 ToolboxEventDispatcherHandler(OpaqueEventHandlerCallRef*, OpaqueEventRef*, void*) + 1309
 12  com.apple.HIToolbox           	0x92d5ab9c DispatchEventToHandlers(EventTargetRec*, OpaqueEventRef*, HandlerCallRec*) + 3135
 13  com.apple.HIToolbox           	0x92d598ca SendEventToEventTargetInternal(OpaqueEventRef*, OpaqueEventTargetRef*, HandlerCallRec*) + 374
 14  com.apple.HIToolbox           	0x92d6ab0f SendEventToEventTarget + 33
 15  com.apple.HIToolbox           	0x92ee8f73 ToolboxEventDispatcher + 82
 16  com.apple.HIToolbox           	0x92ee8e3e RunApplicationEventLoop + 192
 17  com.blizzard.worldofwarcraft  	0x000041b6 0x1000 + 12726
 18  com.blizzard.worldofwarcraft  	0x00003172 0x1000 + 8562
 19  com.blizzard.worldofwarcraft  	0x0000308d 0x1000 + 8333

Thread 1:
 0   libsystem_kernel.dylib        	0xa73e6716 __workq_kernreturn + 10
 1   libsystem_pthread.dylib       	0xa759b059 _pthread_wqthread + 1536
 2   libsystem_pthread.dylib       	0xa759aa32 start_wqthread + 34

Thread 2:
 0   libsystem_pthread.dylib       	0xa759aa10 start_wqthread + 0
 1   ???                           	0x00d231a0 0 + 13775264

Thread 3:
 0   libsystem_kernel.dylib        	0xa73e6716 __workq_kernreturn + 10
 1   libsystem_pthread.dylib       	0xa759ae64 _pthread_wqthread + 1035
 2   libsystem_pthread.dylib       	0xa759aa32 start_wqthread + 34

Thread 4:
 0   libsystem_pthread.dylib       	0xa759aa10 start_wqthread + 0
 1   com.blizzard.worldofwarcraft  	0x00020000 0x1000 + 126976

Thread 0 crashed with X86 Thread State (32-bit):
eax: 0x00000024  ebx: 0x00000000  ecx: 0x00000000  edx: 0x00000024
edi: 0x00000004  esi: 0x00000000  ebp: 0xbfffec58  esp: 0xbfffec30
ss: 0x00000023  efl: 0x00210286  eip: 0xa75990ae   cs: 0x0000001b
ds: 0x00000023   es: 0x00000023   fs: 0x00000000   gs: 0x0000000f
cr2: 0x00000024

Logical CPU:     6
Error Code:      0x00000004
Trap Number:     14

Binary Images:
 0x1000 -   0x692fd7 +com.blizzard.worldofwarcraft (1.12.1 - 1.12.1) /var/folders/*/World of Warcraft.app/Contents/MacOS/World of Warcraft
 0xc1a000 -   0xc6015f  dyld (551.5) <49AFCE31-EE99-3E27-AB80-13A11CA325A9> /usr/lib/dyld
 0x9000000 -  0x9540fff  com.apple.driver.AppleIntelHD4000GraphicsGLDriver (10.36.30 - 10.3.6) <3AC24C4A-3C99-3334-BF69-F11ED330D284> /System/Library/Extensions/AppleIntelHD4000GraphicsGLDriver.bundle/Contents/MacOS/AppleIntelHD4000GraphicsGLDriver
 0x9745000 -  0xa09bfff  com.apple.GeForceGLDriver (10.32.0 - 10.3.2) <C91D22C3-B235-31C3-99A6-CCEEC80C0BE3> /System/Library/Extensions/GeForceGLDriver.bundle/Contents/MacOS/GeForceGLDriver
 0xa66a000 -  0xad33ff7  libclh.dylib (10.32) <A9DA4A8F-8ABC-3C06-8085-E29AE2B52F05> /System/Library/Extensions/GeForceGLDriver.bundle/Contents/MacOS/libclh.dylib
 0x90015000 - 0x9001cfff  com.apple.agl (3.3.1 - AGL-3.3.1) <5D907782-CABB-3400-AD95-1D50E56952BF> /System/Library/Frameworks/AGL.framework/Versions/A/AGL
 0x9029f000 - 0x9029ffff  com.apple.Accelerate (1.11 - Accelerate 1.11) <4FE55EFA-2AAB-3639-8340-CB00CC245170> /System/Library/Frameworks/Accelerate.framework/Versions/A/Accelerate
 0x902a0000 - 0x902b6ff7  libCGInterfaces.dylib (417.2) <1052251C-7D25-381D-9292-85875A2C5A04> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vImage.framework/Versions/A/Libraries/libCGInterfaces.dylib
 0x902b7000 - 0x909f8fdf  com.apple.vImage (8.1 - ???) <7BA2CB00-F6B3-3798-9CED-D0C3BB3E5231> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vImage.framework/Versions/A/vImage
 0x909f9000 - 0x90b33ff7  libBLAS.dylib (1211.50.2) <056DFB80-2D9C-39BA-8953-EB264FDFDEAA> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBLAS.dylib
 0x90b34000 - 0x90b61ffb  libBNNS.dylib (38.1) <B9685933-6EBE-3123-9CA2-CD7963241A22> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libBNNS.dylib
 0x90b62000 - 0x90ed5fff  libLAPACK.dylib (1211.50.2) <88232E9D-AD52-3E4F-8ACE-C2468400B626> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLAPACK.dylib
 0x90ed6000 - 0x90eecffb  libLinearAlgebra.dylib (1211.50.2) <E9BB8A56-3AB9-33F5-91B5-079F5BAF78E9> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libLinearAlgebra.dylib
 0x90eed000 - 0x90f06ff7  libSparseBLAS.dylib (1211.50.2) <43DB3D39-727E-3C75-9286-11045DEFC21D> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libSparseBLAS.dylib
 0x90f07000 - 0x91066fc7  libvDSP.dylib (622.50.5) <A10E62DA-511A-35C0-9EC2-6B22D56494E5> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvDSP.dylib
 0x91067000 - 0x91147ffb  libvMisc.dylib (622.50.5) <5969D356-9DDA-33FB-B9E8-6BD5E1C4EB05> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/libvMisc.dylib
 0x91148000 - 0x91148fff  com.apple.Accelerate.vecLib (3.11 - vecLib 3.11) <D3929A06-59EB-3DCA-89B1-5F44817DBC93> /System/Library/Frameworks/Accelerate.framework/Versions/A/Frameworks/vecLib.framework/Versions/A/vecLib
 0x9133c000 - 0x920feffb  com.apple.AppKit (6.9 - 1561.61.100) <8A8DC069-F002-3585-920E-659895EE9E9B> /System/Library/Frameworks/AppKit.framework/Versions/C/AppKit
 0x92150000 - 0x92150fff  com.apple.ApplicationServices (48 - 50) <B9C44CD2-5033-380A-ADBA-C1D09E510866> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/ApplicationServices
 0x92151000 - 0x921b7ff3  com.apple.ApplicationServices.ATS (377 - 445.5) <C571B185-64D5-30B2-93EF-FC628CA28FED> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/ATS
 0x921ba000 - 0x922deffb  libFontParser.dylib (222.1.9) <73DE236B-0801-339E-B5A0-D6A6FB0F25EC> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontParser.dylib
 0x922df000 - 0x9232bffb  libFontRegistry.dylib (221.6) <CB495512-D2B8-3028-BF00-D34919DEA398> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libFontRegistry.dylib
 0x9237a000 - 0x923adff3  libTrueTypeScaler.dylib (222.1.9) <649AD760-B314-3D6D-9B4A-1236716ED2D5> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ATS.framework/Versions/A/Resources/libTrueTypeScaler.dylib
 0x92419000 - 0x9241efff  com.apple.ColorSyncLegacy (4.13.0 - 1) <1843386D-0354-37DD-A042-F145A10FAB03> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/ColorSyncLegacy.framework/Versions/A/ColorSyncLegacy
 0x924c8000 - 0x92520ff7  com.apple.HIServices (1.22 - 625) <97A45894-65AA-3C58-8214-739E0D8284C5> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/HIServices.framework/Versions/A/HIServices
 0x92521000 - 0x92530ff7  com.apple.LangAnalysis (1.7.0 - 1.7.0) <03547C2C-C897-3D7E-9B64-0E1D96D58AC7> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/LangAnalysis.framework/Versions/A/LangAnalysis
 0x92531000 - 0x92589ffb  com.apple.print.framework.PrintCore (13.4 - 503.2) <A767EEDA-B74E-39DA-A142-1D307590771E> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/PrintCore.framework/Versions/A/PrintCore
 0x9258a000 - 0x92620ff7  com.apple.QD (3.12 - 404.2) <151D2B9B-A456-387E-9752-6B0638FC6B52> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/QD.framework/Versions/A/QD
 0x92621000 - 0x9262dff3  com.apple.speech.synthesis.framework (7.8.1 - 7.8.1) <318B7E4E-E124-3374-9408-FCB7E5C2F378> /System/Library/Frameworks/ApplicationServices.framework/Versions/A/Frameworks/SpeechSynthesis.framework/Versions/A/SpeechSynthesis
 0x9262e000 - 0x9287dffb  com.apple.audio.toolbox.AudioToolbox (1.14 - 1.14) <3793D1D9-6CFA-37D9-A60A-D56A71FF0A31> /System/Library/Frameworks/AudioToolbox.framework/Versions/A/AudioToolbox
 0x9287f000 - 0x9287ffff  com.apple.audio.units.AudioUnit (1.14 - 1.14) <00EA5221-43C1-3ECA-9395-01700EAA21BB> /System/Library/Frameworks/AudioUnit.framework/Versions/A/AudioUnit
 0x929b7000 - 0x92d2dffb  com.apple.CFNetwork (902.6 - 902.6) <0B4C50D7-964C-3809-93CA-29607439E39B> /System/Library/Frameworks/CFNetwork.framework/Versions/A/CFNetwork
 0x92d42000 - 0x92d42fff  com.apple.Carbon (158 - 158) <C03E8C43-BE26-3A94-8CB5-014E42850461> /System/Library/Frameworks/Carbon.framework/Versions/A/Carbon
 0x92d43000 - 0x92d4cff3  com.apple.audio.SoundManager (4.2 - 4.2) <9B1F0DB7-BEC9-3870-A0DD-09F140FBCFCF> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/CarbonSound.framework/Versions/A/CarbonSound
 0x92d4d000 - 0x92d51fff  com.apple.CommonPanels (1.2.6 - 98) <DBF0D1F5-4850-3CDE-A29B-0772CFC454D9> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/CommonPanels.framework/Versions/A/CommonPanels
 0x92d52000 - 0x930e8ff7  com.apple.HIToolbox (2.1.1 - 911.10) <5D570B7B-C316-3ED1-99E5-2CF8A3BAF208> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HIToolbox.framework/Versions/A/HIToolbox
 0x930e9000 - 0x9313dffb  com.apple.htmlrendering (77 - 1.1.4) <8AB3BB38-F6F3-3A31-9CEE-10ADB1C0DFE0> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/HTMLRendering.framework/Versions/A/HTMLRendering
 0x9313e000 - 0x93141fff  com.apple.help (1.3.8 - 66) <B1C3F76A-C956-3507-A28F-31F1956BB6C2> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Help.framework/Versions/A/Help
 0x93142000 - 0x93147ffb  com.apple.ImageCapture (9.0 - 9.0) <20470EC1-6740-3D8A-87D5-CC7940926C0E> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/ImageCapture.framework/Versions/A/ImageCapture
 0x93148000 - 0x931e2ffb  com.apple.ink.framework (10.9 - 221) <06DAAD9F-A376-3E1C-A0E6-F41CA7A969E6> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Ink.framework/Versions/A/Ink
 0x931e3000 - 0x9321dfff  com.apple.NavigationServices (3.8 - 227) <3B886B74-BD7F-3DAF-AAFF-2CFCBEC00BDD> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/NavigationServices.framework/Versions/A/NavigationServices
 0x9321e000 - 0x93239ffb  com.apple.openscripting (1.7 - 174) <A85D845F-AD46-3ED3-8B56-2F01C8F2FD9E> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/OpenScripting.framework/Versions/A/OpenScripting
 0x9323a000 - 0x9323ffff  com.apple.print.framework.Print (12 - 267) <69F19FED-9216-36A9-A717-4249F38B7E64> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/Print.framework/Versions/A/Print
 0x93240000 - 0x93242fff  com.apple.securityhi (9.0 - 55006) <6E4155E0-2BF8-3DC9-9C93-01897253D804> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/SecurityHI.framework/Versions/A/SecurityHI
 0x93243000 - 0x93249fff  com.apple.speech.recognition.framework (6.0.3 - 6.0.3) <A33E2C85-2C58-380A-8A8B-3132AE273441> /System/Library/Frameworks/Carbon.framework/Versions/A/Frameworks/SpeechRecognition.framework/Versions/A/SpeechRecognition
 0x9324a000 - 0x9324afff  com.apple.Cocoa (6.11 - 22) <A7B883A6-0C19-3BEC-BFC6-BEF19C01D6EE> /System/Library/Frameworks/Cocoa.framework/Versions/A/Cocoa
 0x93257000 - 0x93316ff3  com.apple.ColorSync (4.13.0 - 3325) <5BA85327-9BAE-3550-82BE-3B3A4D5AA5CA> /System/Library/Frameworks/ColorSync.framework/Versions/A/ColorSync
 0x93317000 - 0x933b2fff  com.apple.audio.CoreAudio (4.3.0 - 4.3.0) <1C041427-65E3-3429-94CC-5A1B1F420364> /System/Library/Frameworks/CoreAudio.framework/Versions/A/CoreAudio
 0x93410000 - 0x93415fff  com.apple.CoreBluetooth (1.0 - 1) <1D5AB118-8818-37DB-8F4C-629A79F7937D> /System/Library/Frameworks/CoreBluetooth.framework/Versions/A/CoreBluetooth
 0x93416000 - 0x936f8ff7  com.apple.CoreData (120 - 851) <BEFA2862-A1B3-3DD3-92DD-CA346E7D94CB> /System/Library/Frameworks/CoreData.framework/Versions/A/CoreData
 0x936f9000 - 0x936fffff  com.apple.CoreDisplay (99.14 - 99.14) <2261D77A-3330-3FB7-BF61-1D2FCD326D1A> /System/Library/Frameworks/CoreDisplay.framework/Versions/A/CoreDisplay
 0x93700000 - 0x93b8effb  com.apple.CoreFoundation (6.9 - 1455.122) <456DB669-7684-33AA-9361-20CB818FC6F1> /System/Library/Frameworks/CoreFoundation.framework/Versions/A/CoreFoundation
 0x93b90000 - 0x941c3ff3  com.apple.CoreGraphics (2.0 - 1161.21.3) <8EAEC898-35B5-3BE3-8E8C-BEBD342749D1> /System/Library/Frameworks/CoreGraphics.framework/Versions/A/CoreGraphics
 0x941c5000 - 0x9443bffb  com.apple.CoreImage (13.0.0 - 579.5) <A78CC862-BB7E-3693-A6E1-0A8CEE67983D> /System/Library/Frameworks/CoreImage.framework/Versions/A/CoreImage
 0x94643000 - 0x94643fff  com.apple.CoreServices (822.37 - 822.37) <C9CB80FD-8C2B-3132-A568-189D1866999F> /System/Library/Frameworks/CoreServices.framework/Versions/A/CoreServices
 0x94644000 - 0x946b6fff  com.apple.AE (735.2 - 735.2) <264C64E4-52A9-3A05-8325-09D69C925145> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/AE.framework/Versions/A/AE
 0x946b7000 - 0x94995fff  com.apple.CoreServices.CarbonCore (1178.4.2 - 1178.4.2) <EB0D7129-264D-3F3F-9834-06BC1784F7EC> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/CarbonCore.framework/Versions/A/CarbonCore
 0x94996000 - 0x949caffb  com.apple.DictionaryServices (1.2 - 284.2) <D6040B13-EA72-3A68-90F9-FB068E3A7BEC> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/DictionaryServices.framework/Versions/A/DictionaryServices
 0x949cb000 - 0x949d3fff  com.apple.CoreServices.FSEvents (1239.50.2 - 1239.50.2) <049AB93D-F845-3F65-93C4-EACD6B646D6A> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/FSEvents.framework/Versions/A/FSEvents
 0x949d4000 - 0x94b33ff7  com.apple.LaunchServices (822.37 - 822.37) <64EECB9E-6E85-3C52-9DA5-888C8845AFF1> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/LaunchServices.framework/Versions/A/LaunchServices
 0x94b34000 - 0x94be1ff7  com.apple.Metadata (10.7.0 - 1191.8) <2DEB94EE-CDAF-32AA-AB01-C7A0CC8DFFC9> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/Metadata.framework/Versions/A/Metadata
 0x94be2000 - 0x94c43ff7  com.apple.CoreServices.OSServices (822.37 - 822.37) <D6E197B3-DB42-39FE-97ED-CA718D975156> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/OSServices.framework/Versions/A/OSServices
 0x94c44000 - 0x94cb5fff  com.apple.SearchKit (1.4.0 - 1.4.0) <1B9101D5-9818-3549-A4D0-61B21AFC5CA1> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SearchKit.framework/Versions/A/SearchKit
 0x94cb6000 - 0x94cd9fff  com.apple.coreservices.SharedFileList (71.21 - 71.21) <6961BDA0-5067-37E2-9C54-5D218F6160C4> /System/Library/Frameworks/CoreServices.framework/Versions/A/Frameworks/SharedFileList.framework/Versions/A/SharedFileList
 0x94cda000 - 0x94e27ffb  com.apple.CoreText (352.0 - 578.23) <6F4544D0-5DCD-369F-8A5A-61FC0256CB70> /System/Library/Frameworks/CoreText.framework/Versions/A/CoreText
 0x94e28000 - 0x94e62ffb  com.apple.CoreVideo (1.8 - 0.0) <BDD232EC-1F9F-315C-ADE5-3004A960B278> /System/Library/Frameworks/CoreVideo.framework/Versions/A/CoreVideo
 0x94e63000 - 0x94eeaff3  com.apple.framework.CoreWLAN (13.0 - 1350.2) <A6E9BBAA-3A0A-3EA0-B3DF-48BD42434837> /System/Library/Frameworks/CoreWLAN.framework/Versions/A/CoreWLAN
 0x9513e000 - 0x95147ff7  com.apple.DiskArbitration (2.7 - 2.7) <A54499C5-4256-3F7C-98EB-F372F4F553AB> /System/Library/Frameworks/DiskArbitration.framework/Versions/A/DiskArbitration
 0x95158000 - 0x954c9ffb  com.apple.Foundation (6.9 - 1455.122) <360CC8B8-9730-3429-AF7E-2F6F584C5AC9> /System/Library/Frameworks/Foundation.framework/Versions/C/Foundation
 0x9550a000 - 0x95539ff3  com.apple.GSS (4.0 - 2.0) <998D7869-BF02-3455-A353-E83876BC391A> /System/Library/Frameworks/GSS.framework/Versions/A/GSS
 0x95566000 - 0x9567eff7  com.apple.Bluetooth (6.0.7 - 6.0.7f20) <1D391EE3-3B6B-3419-A98E-4B4F75C58892> /System/Library/Frameworks/IOBluetooth.framework/Versions/A/IOBluetooth
 0x956e4000 - 0x95785ff7  com.apple.framework.IOKit (2.0.2 - 1445.71.6) <007144FD-B537-36B3-A68D-CF7E4716BECF> /System/Library/Frameworks/IOKit.framework/Versions/A/IOKit
 0x95787000 - 0x9578efff  com.apple.IOSurface (211.15 - 211.15) <E8DD8BD0-6AC0-34B8-8234-1C720A332AC8> /System/Library/Frameworks/IOSurface.framework/Versions/A/IOSurface
 0x957e3000 - 0x95968fff  com.apple.ImageIO.framework (3.3.0 - 1739.3.6) <BF98D6E0-28F6-3EFA-A7D7-987B4DE82546> /System/Library/Frameworks/ImageIO.framework/Versions/A/ImageIO
 0x95969000 - 0x9596dffb  libGIF.dylib (1739.3.6) <C135D847-EB1F-3272-A344-BE964507C056> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libGIF.dylib
 0x9596e000 - 0x95a5fff3  libJP2.dylib (1739.3.6) <F7208431-B1AC-3FF1-AC1C-AD81876BF393> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJP2.dylib
 0x95a60000 - 0x95a82ff7  libJPEG.dylib (1739.3.6) <3B2275F6-99BB-309B-B36E-419F79C971C1> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libJPEG.dylib
 0x95a83000 - 0x95aa9ff7  libPng.dylib (1739.3.6) <2BCD328E-23E9-30A7-8914-2A091E5E78DC> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libPng.dylib
 0x95aaa000 - 0x95aacffb  libRadiance.dylib (1739.3.6) <D006B986-01A3-3CAB-9A95-DCDE4CCA4EE4> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libRadiance.dylib
 0x95aad000 - 0x95af7ff7  libTIFF.dylib (1739.3.6) <A073386F-05EE-32E9-8CA1-14D6690190CD> /System/Library/Frameworks/ImageIO.framework/Versions/A/Resources/libTIFF.dylib
 0x96503000 - 0x9651bfff  com.apple.Kerberos (3.0 - 1) <0CE5B1B8-2DA6-31F4-B7A2-595837FAE450> /System/Library/Frameworks/Kerberos.framework/Versions/A/Kerberos
 0x96bdd000 - 0x96c55fff  com.apple.Metal (125.30 - 125.30) <8C0074A1-BE95-3845-977E-3C6E28B0064E> /System/Library/Frameworks/Metal.framework/Versions/A/Metal
 0x96c57000 - 0x96c63fff  com.apple.NetFS (6.0 - 4.0) <34E96D40-4B4F-3DC3-B350-76CFF6A9578B> /System/Library/Frameworks/NetFS.framework/Versions/A/NetFS
 0x99590000 - 0x99598ff7  libcldcpuengine.dylib (2.8.7) <4678BA04-6949-309A-B305-C047F23DCBDC> /System/Library/Frameworks/OpenCL.framework/Versions/A/Libraries/libcldcpuengine.dylib
 0x99599000 - 0x995f1fff  com.apple.opencl (2.8.24 - 2.8.24) <04D07EA1-10D4-3A89-ACD0-A0E2BBBACF90> /System/Library/Frameworks/OpenCL.framework/Versions/A/OpenCL
 0x995f2000 - 0x9960efff  com.apple.CFOpenDirectory (10.13 - 207.50.1) <DC1C060A-679C-3B17-9C1E-8559D76336BC> /System/Library/Frameworks/OpenDirectory.framework/Versions/A/Frameworks/CFOpenDirectory.framework/Versions/A/CFOpenDirectory
 0x9960f000 - 0x9961afff  com.apple.OpenDirectory (10.13 - 207.50.1) <1D57C7CD-B8AF-335C-9E13-310F2FCAF8E0> /System/Library/Frameworks/OpenDirectory.framework/Versions/A/OpenDirectory
 0x9a824000 - 0x9a825fff  libCVMSPluginSupport.dylib (16.7.4) <CC82B077-EFEB-3250-880C-B4C2B5A9BEE0> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCVMSPluginSupport.dylib
 0x9a826000 - 0x9a82afff  libCoreFSCache.dylib (162.12) <A0C12BDD-6D48-3BBA-98CD-6100D5D50E3C> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreFSCache.dylib
 0x9a82b000 - 0x9a82ffff  libCoreVMClient.dylib (162.12) <136F5151-A872-37C4-AC68-02474FFB3A6B> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libCoreVMClient.dylib
 0x9a830000 - 0x9a839ff7  libGFXShared.dylib (16.7.4) <6D97387B-D718-32C8-921F-833E1277B3E8> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGFXShared.dylib
 0x9a83a000 - 0x9a846fff  libGL.dylib (16.7.4) <B0AC3A51-F3B5-30A0-A072-D655044BADFC> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGL.dylib
 0x9a847000 - 0x9a882ffb  libGLImage.dylib (16.7.4) <703536B2-8370-3E27-A1A3-B6E55765F1DC> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLImage.dylib
 0x9a883000 - 0x9a9fbfff  libGLProgrammability.dylib (16.7.4) <42460F8A-2B9C-3AD7-8666-FA1EC9F429E4> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLProgrammability.dylib
 0x9a9fc000 - 0x9aa3eff7  libGLU.dylib (16.7.4) <EF3B389B-8F93-35E9-B7B2-2F7808F1241D> /System/Library/Frameworks/OpenGL.framework/Versions/A/Libraries/libGLU.dylib
 0x9b3e5000 - 0x9b3f4fff  com.apple.opengl (16.7.4 - 16.7.4) <A8372543-9A9E-34B2-AA10-597CBEBCAA05> /System/Library/Frameworks/OpenGL.framework/Versions/A/OpenGL
 0x9b3f5000 - 0x9b583ffb  GLEngine (16.7.4) <13DED734-F74A-3A21-8C1C-9C32966C22BD> /System/Library/Frameworks/OpenGL.framework/Versions/A/Resources/GLEngine.bundle/GLEngine
 0x9b584000 - 0x9b5aefff  GLRendererFloat (16.7.4) <5C6C476F-7199-3EB0-A7D1-308EEAD47654> /System/Library/Frameworks/OpenGL.framework/Versions/A/Resources/GLRendererFloat.bundle/GLRendererFloat
 0x9c166000 - 0x9c3a0ff3  com.apple.QuartzCore (1.11 - 584.64.2) <A548DCE6-B0F0-3826-8DDA-BB02DB2FFEA7> /System/Library/Frameworks/QuartzCore.framework/Versions/A/QuartzCore
 0x9c3f6000 - 0x9c64effb  com.apple.QuickTime (7.7.3 - 3014.8) <0A9E98CE-39C6-3C39-8E75-6557C40AAF4B> /System/Library/Frameworks/QuickTime.framework/Versions/A/QuickTime
 0x9c836000 - 0x9cb6aff7  com.apple.security (7.0 - 58286.70.15) <425ABE0D-BDEF-3337-8743-D2EA8DE20970> /System/Library/Frameworks/Security.framework/Versions/A/Security
 0x9cb6b000 - 0x9cbf3ffb  com.apple.securityfoundation (6.0 - 55185.50.5) <714F79C3-CF1E-3105-8B62-DD25027412E8> /System/Library/Frameworks/SecurityFoundation.framework/Versions/A/SecurityFoundation
 0x9cc1f000 - 0x9cc23fff  com.apple.xpc.ServiceManagement (1.0 - 1) <5FAA04A2-3300-3BA6-B09A-478DD44141CD> /System/Library/Frameworks/ServiceManagement.framework/Versions/A/ServiceManagement
 0x9cd4e000 - 0x9cdbeff3  com.apple.SystemConfiguration (1.17 - 1.17) <D56E9802-1A33-367F-99EC-36D08180317F> /System/Library/Frameworks/SystemConfiguration.framework/Versions/A/SystemConfiguration
 0x9ee08000 - 0x9eea8ff7  com.apple.APFS (1.0 - 1) <A24041B4-0867-33AC-82C8-1910784557DE> /System/Library/PrivateFrameworks/APFS.framework/Versions/A/APFS
 0x9f4c0000 - 0x9f4ebff3  com.apple.framework.Apple80211 (13.0 - 1370.4) <EF550B70-F59E-3B7F-AA67-2DC5BC3C8AA0> /System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Apple80211
 0x9f4ed000 - 0x9f4f7fff  com.apple.AppleFSCompression (96.60.1 - 1.0) <FC19B84E-1E48-31A2-9803-25DF84C8C96F> /System/Library/PrivateFrameworks/AppleFSCompression.framework/Versions/A/AppleFSCompression
 0x9f5f8000 - 0x9f635ffb  com.apple.AppleJPEG (1.0 - 1) <6F63B2DB-6C5E-3D3E-B3A9-69DA546F1BD9> /System/Library/PrivateFrameworks/AppleJPEG.framework/Versions/A/AppleJPEG
 0x9f788000 - 0x9f78ffff  com.apple.coreservices.BackgroundTaskManagement (1.0 - 57.1) <08D459C8-4AF9-378A-B5C1-59D437F5FB8B> /System/Library/PrivateFrameworks/BackgroundTaskManagement.framework/Versions/A/BackgroundTaskManagement
 0x9f790000 - 0x9f81bff7  com.apple.backup.framework (1.9.6 - 1.9.6) <74DF4924-25CB-329E-8D39-29E114732202> /System/Library/PrivateFrameworks/Backup.framework/Versions/A/Backup
 0x9f961000 - 0x9f96affb  com.apple.CommonAuth (4.0 - 2.0) <693C106F-9B1F-39C4-B10D-AEA794D6CA37> /System/Library/PrivateFrameworks/CommonAuth.framework/Versions/A/CommonAuth
 0x9fe05000 - 0x9fe15ff7  com.apple.CoreEmoji (1.0 - 69.3) <C69C5AC6-752C-37E1-AC4A-EDAC3F674AF5> /System/Library/PrivateFrameworks/CoreEmoji.framework/Versions/A/CoreEmoji
 0x9ff9e000 - 0x9ffd1ff7  com.apple.CoreServicesInternal (309.1 - 309.1) <8E608458-3007-3050-B799-7FD845995720> /System/Library/PrivateFrameworks/CoreServicesInternal.framework/Versions/A/CoreServicesInternal
 0x9ffd2000 - 0xa0068ff7  com.apple.CoreSymbolication (9.3 - 64026.2) <5B26E22A-9B08-34C2-A28F-1DF202F07571> /System/Library/PrivateFrameworks/CoreSymbolication.framework/Versions/A/CoreSymbolication
 0xa0069000 - 0xa0190ff3  com.apple.coreui (2.1 - 494.1) <ECDB232D-DFA9-3DEB-BBA5-BDED823EC278> /System/Library/PrivateFrameworks/CoreUI.framework/Versions/A/CoreUI
 0xa0191000 - 0xa022fff7  com.apple.CoreUtils (5.6 - 560.11) <CECC0EB9-E343-397A-981C-3607837BDD78> /System/Library/PrivateFrameworks/CoreUtils.framework/Versions/A/CoreUtils
 0xa0280000 - 0xa02ddff3  com.apple.framework.CoreWiFi (13.0 - 1350.2) <4DB00F12-B9D8-34BA-92F0-13C7628F51A0> /System/Library/PrivateFrameworks/CoreWiFi.framework/Versions/A/CoreWiFi
 0xa02de000 - 0xa02eefff  com.apple.CrashReporterSupport (10.13 - 1) <78129F89-02E4-3CAC-9B76-77505A1C9B67> /System/Library/PrivateFrameworks/CrashReporterSupport.framework/Versions/A/CrashReporterSupport
 0xa035c000 - 0xa0369fff  com.apple.framework.DFRFoundation (1.0 - 191.7) <09A190D1-CD2B-35A9-B470-51EA4AFAA3B4> /System/Library/PrivateFrameworks/DFRFoundation.framework/Versions/A/DFRFoundation
 0xa03b5000 - 0xa0426fff  com.apple.datadetectorscore (7.0 - 590.3) <7937ECB2-12E0-34BA-A7BC-C35EE2DBB076> /System/Library/PrivateFrameworks/DataDetectorsCore.framework/Versions/A/DataDetectorsCore
 0xa0427000 - 0xa0467ffb  com.apple.DebugSymbols (181.0 - 181.0) <F727F809-D7EE-350C-A87C-41BAF235CE24> /System/Library/PrivateFrameworks/DebugSymbols.framework/Versions/A/DebugSymbols
 0xa0468000 - 0xa05a7ffb  com.apple.desktopservices (1.12.5 - 1.12.5) <6E33729F-106B-34FE-8AD2-E1E66741AF21> /System/Library/PrivateFrameworks/DesktopServicesPriv.framework/Versions/A/DesktopServicesPriv
 0xa08e7000 - 0xa0d17ff7  com.apple.vision.FaceCore (3.3.2 - 3.3.2) <0AD8456B-DDB7-3B65-8162-1C23749F0447> /System/Library/PrivateFrameworks/FaceCore.framework/Versions/A/FaceCore
 0xa2ab3000 - 0xa2abdfff  libGPUSupportMercury.dylib (16.7.4) <1180ECE6-BBCD-3A4E-8CEC-1C9162852706> /System/Library/PrivateFrameworks/GPUSupport.framework/Versions/A/Libraries/libGPUSupportMercury.dylib
 0xa36c9000 - 0xa373cff3  com.apple.Heimdal (4.0 - 2.0) <8B1E460D-C650-3246-8891-C138F6D5674A> /System/Library/PrivateFrameworks/Heimdal.framework/Versions/A/Heimdal
 0xa39f4000 - 0xa39fbfff  com.apple.IOAccelerator (378.28 - 378.28) <A5E313A5-3605-3466-A610-3D1513B03DE2> /System/Library/PrivateFrameworks/IOAccelerator.framework/Versions/A/IOAccelerator
 0xa39fc000 - 0xa3a15fff  com.apple.IOPresentment (1.0 - 35.1) <AC9ECEE1-B4B8-36E2-A742-42D180BEBED0> /System/Library/PrivateFrameworks/IOPresentment.framework/Versions/A/IOPresentment
 0xa3a72000 - 0xa3a92ffb  com.apple.IconServices (97.6 - 97.6) <41C047B5-C581-32ED-9B3F-83BCDA3D4D93> /System/Library/PrivateFrameworks/IconServices.framework/Versions/A/IconServices
 0xa3aca000 - 0xa3bbefff  com.apple.LanguageModeling (1.0 - 159.5.3) <55D0CDC6-3D35-3F49-A690-24F2007260A7> /System/Library/PrivateFrameworks/LanguageModeling.framework/Versions/A/LanguageModeling
 0xa3bbf000 - 0xa3bfffff  com.apple.Lexicon-framework (1.0 - 33.5) <2A136E49-2BB3-3E3B-B4B9-747F7BA3D0CF> /System/Library/PrivateFrameworks/Lexicon.framework/Versions/A/Lexicon
 0xa3c03000 - 0xa3c09ff3  com.apple.LinguisticData (1.0 - 238.3) <5D2FE0D9-B864-388B-9CD4-8C75637A42DD> /System/Library/PrivateFrameworks/LinguisticData.framework/Versions/A/LinguisticData
 0xa3fae000 - 0xa3fd8fff  com.apple.MultitouchSupport.framework (1614.1 - 1614.1) <AFFF5E88-26B1-3897-934D-014D055882A5> /System/Library/PrivateFrameworks/MultitouchSupport.framework/Versions/A/MultitouchSupport
 0xa40f7000 - 0xa4101fff  com.apple.NetAuth (6.2 - 6.2) <768BBAC4-8E28-3E60-AA25-74F3CA5EB8CC> /System/Library/PrivateFrameworks/NetAuth.framework/Versions/A/NetAuth
 0xa41a9000 - 0xa41b6ffb  com.apple.PerformanceAnalysis (1.194 - 194) <1CB78C53-73CB-3583-AB6D-D8BC850813F9> /System/Library/PrivateFrameworks/PerformanceAnalysis.framework/Versions/A/PerformanceAnalysis
 0xa4256000 - 0xa4272ff7  com.apple.ProtocolBuffer (1 - 260) <03759C69-9FB6-3CF3-AA04-04DF8A990E5A> /System/Library/PrivateFrameworks/ProtocolBuffer.framework/Versions/A/ProtocolBuffer
 0xa435e000 - 0xa4380fff  com.apple.RemoteViewServices (2.0 - 125) <6AEE7214-091C-309F-BBFC-4E7322D236D2> /System/Library/PrivateFrameworks/RemoteViewServices.framework/Versions/A/RemoteViewServices
 0xa4428000 - 0xa4455ffb  com.apple.Sharing (1050.22.9 - 1050.22.9) <F41CABB2-EEE0-3089-9F59-67A2AEAB2458> /System/Library/PrivateFrameworks/Sharing.framework/Versions/A/Sharing
 0xa4474000 - 0xa4475fff  com.apple.performance.SignpostNotification (1.2.6 - 2.6) <33786429-782D-3302-8113-EA80EFC368A5> /System/Library/PrivateFrameworks/SignpostNotification.framework/Versions/A/SignpostNotification
 0xa4476000 - 0xa44fcff3  com.apple.SkyLight (1.600.0 - 312.103.12) <1FF0C818-29DF-3966-B02E-0FB8C12A0533> /System/Library/PrivateFrameworks/SkyLight.framework/Versions/A/SkyLight
 0xa452c000 - 0xa4539ff7  com.apple.SpeechRecognitionCore (4.6.1 - 4.6.1) <F3E80FB4-CFF6-3B08-8CA3-E57B100EC999> /System/Library/PrivateFrameworks/SpeechRecognitionCore.framework/Versions/A/SpeechRecognitionCore
 0xa4809000 - 0xa488fffb  com.apple.Symbolication (9.3 - 64033) <89583C3B-497F-3685-B6E0-5E677426CC95> /System/Library/PrivateFrameworks/Symbolication.framework/Versions/A/Symbolication
 0xa48e2000 - 0xa48eafff  com.apple.TCC (1.0 - 1) <EC339505-306C-353C-85EB-1BF12C5FEBC9> /System/Library/PrivateFrameworks/TCC.framework/Versions/A/TCC
 0xa48eb000 - 0xa4902ff3  com.apple.TextureIO (3.7 - 3.7) <9ACB36FE-2680-3792-8C23-D97E061A6182> /System/Library/PrivateFrameworks/TextureIO.framework/Versions/A/TextureIO
 0xa492f000 - 0xa4930fff  com.apple.TrustEvaluationAgent (2.0 - 31) <88621D26-CFC7-3983-BD4C-B2D64CB02A48> /System/Library/PrivateFrameworks/TrustEvaluationAgent.framework/Versions/A/TrustEvaluationAgent
 0xa4931000 - 0xa4abdfff  com.apple.UIFoundation (1.0 - 547.9) <E213F048-9F1C-3D94-84AC-2B276E7D2AD8> /System/Library/PrivateFrameworks/UIFoundation.framework/Versions/A/UIFoundation
 0xa508c000 - 0xa508efff  com.apple.loginsupport (1.0 - 1) <B676F943-5E1E-3BCC-A536-385D1A83384C> /System/Library/PrivateFrameworks/login.framework/Versions/A/Frameworks/loginsupport.framework/Versions/A/loginsupport
 0xa5119000 - 0xa514cff7  libclosured.dylib (551.5) <A9C2022C-B433-386A-A7F6-17B4DAA718E2> /usr/lib/closure/libclosured.dylib
 0xa51a8000 - 0xa51dfff3  libCRFSuite.dylib (41) <6C1DDC11-A66C-3D51-B257-DDB41DC0D340> /usr/lib/libCRFSuite.dylib
 0xa51e0000 - 0xa51eaffb  libChineseTokenizer.dylib (28) <F7C170AC-961B-353A-BCAA-9D5B6D567074> /usr/lib/libChineseTokenizer.dylib
 0xa5286000 - 0xa5287fff  libDiagnosticMessagesClient.dylib (104) <6043024B-A670-353A-8CB6-C5AC4E048437> /usr/lib/libDiagnosticMessagesClient.dylib
 0xa5288000 - 0xa5472ff7  libFosl_dynamic.dylib (17.8) <FB8E9F5A-1E23-3680-8401-BB8FC1463D9E> /usr/lib/libFosl_dynamic.dylib
 0xa547a000 - 0xa547afff  libOpenScriptingUtil.dylib (174) <B8B25C9A-6E0E-350A-B8D5-11801457F58F> /usr/lib/libOpenScriptingUtil.dylib
 0xa54ce000 - 0xa54d2fff  libScreenReader.dylib (562.18.5) <2CC1E058-3196-3A0D-931C-9633CFA44C3C> /usr/lib/libScreenReader.dylib
 0xa54d3000 - 0xa54d4fff  libSystem.B.dylib (1252.50.4) <C2C510FE-A127-3E69-ABEF-A3FAD05171B7> /usr/lib/libSystem.B.dylib
 0xa54e3000 - 0xa54f8ff7  libapple_nghttp2.dylib (1.24) <E6CE965B-5A10-3F68-987B-03E722F38BC3> /usr/lib/libapple_nghttp2.dylib
 0xa54f9000 - 0xa5524fff  libarchive.2.dylib (54) <6D9F2343-1A2C-307A-B39A-500B7E7742F6> /usr/lib/libarchive.2.dylib
 0xa5525000 - 0xa5674ffb  libate.dylib (1.13.1) <5DE30C5A-7547-3D60-8000-41DD5BD2648B> /usr/lib/libate.dylib
 0xa5678000 - 0xa5678ff3  libauto.dylib (187) <3E0AF5D2-5C0A-35B1-A274-30B5345A675F> /usr/lib/libauto.dylib
 0xa5679000 - 0xa5689fff  libbsm.0.dylib (39) <76F0CE83-0DA4-3A4C-92C3-68F3F0AB04A9> /usr/lib/libbsm.0.dylib
 0xa568a000 - 0xa5696ff7  libbz2.1.0.dylib (38) <C73EA64A-AA8D-3C80-A2BE-99BFB860BB91> /usr/lib/libbz2.1.0.dylib
 0xa5697000 - 0xa56f0ffb  libc++.1.dylib (400.9) <273535A6-4A4C-3904-A7BF-7FC94860E845> /usr/lib/libc++.1.dylib
 0xa56f1000 - 0xa5712fff  libc++abi.dylib (400.8.2) <60422228-2A4A-3A12-AB94-3110E9082D62> /usr/lib/libc++abi.dylib
 0xa5714000 - 0xa5725ff7  libcmph.dylib (6) <89C46A30-9228-3442-A6C1-C4D8F51CD719> /usr/lib/libcmph.dylib
 0xa5726000 - 0xa573bff7  libcompression.dylib (47.60.2) <FB4313A1-D9BE-36DD-A8A2-1AC45D0320AD> /usr/lib/libcompression.dylib
 0xa573c000 - 0xa5753ffb  libcoretls.dylib (155.50.1) <24E334ED-165C-33D2-908F-258739971701> /usr/lib/libcoretls.dylib
 0xa5754000 - 0xa5755fff  libcoretls_cfhelpers.dylib (155.50.1) <F5713CF7-C686-3F08-AA48-E0E94255EAE2> /usr/lib/libcoretls_cfhelpers.dylib
 0xa58d6000 - 0xa5a7dff3  libcrypto.35.dylib (22.50.3) <63F3F4D4-6BF6-38D5-90AA-13B5CB4854CF> /usr/lib/libcrypto.35.dylib
 0xa5c3d000 - 0xa5c94fff  libcups.2.dylib (462.2.10) <7FD026E2-1722-3C61-8AF8-BCFAB25BDEA8> /usr/lib/libcups.2.dylib
 0xa5dab000 - 0xa5dabfff  libenergytrace.dylib (16) <FD6038D9-93E6-327A-97A4-E28CCE72817B> /usr/lib/libenergytrace.dylib
 0xa5ddf000 - 0xa5de3fff  libheimdal-asn1.dylib (520.50.9) <970B460D-9A27-3287-9E32-D0DF05A9D9A7> /usr/lib/libheimdal-asn1.dylib
 0xa5e0f000 - 0xa5effff3  libiconv.2.dylib (51.50.1) <F626D1ED-76D7-3555-BFA1-805CA39F66DE> /usr/lib/libiconv.2.dylib
 0xa5f00000 - 0xa6122ff7  libicucore.A.dylib (59181.0.1) <F2B872E2-91F7-3CE1-9F85-8D91C4C2E8A0> /usr/lib/libicucore.A.dylib
 0xa616a000 - 0xa616bfff  liblangid.dylib (128) <88FB5DF9-710B-3615-BA17-C027A05D44B2> /usr/lib/liblangid.dylib
 0xa616c000 - 0xa6184ff7  liblzma.5.dylib (10) <E92E471F-5119-329D-9615-738D8318AB96> /usr/lib/liblzma.5.dylib
 0xa6185000 - 0xa619afff  libmarisa.dylib (9) <54753FF6-7480-3FD2-B8A2-85433C67D697> /usr/lib/libmarisa.dylib
 0xa624f000 - 0xa646cfff  libmecabra.dylib (779.7.6) <BC10144C-2C33-3059-8CB7-FDD6C76225A8> /usr/lib/libmecabra.dylib
 0xa6633000 - 0xa67aaff3  libnetwork.dylib (1229.70.2) <DCBEDC31-7733-3786-BB1A-052FC9F9F886> /usr/lib/libnetwork.dylib
 0xa67ab000 - 0xa6b8b0fb  libobjc.A.dylib (723) <02D15F88-6B1E-37B6-B409-4C2759EA7A8C> /usr/lib/libobjc.A.dylib
 0xa6b8f000 - 0xa6b92fff  libpam.2.dylib (22) <A0C291E8-610F-3FAA-B5E8-78E1607E9B77> /usr/lib/libpam.2.dylib
 0xa6b95000 - 0xa6bc9ff7  libpcap.A.dylib (79.20.3) <B7C92E03-310C-3C20-8170-9920F3E2D81B> /usr/lib/libpcap.A.dylib
 0xa6c07000 - 0xa6c22ffb  libresolv.9.dylib (65.1) <4E35760D-5D78-3D99-B071-C5491DDF127D> /usr/lib/libresolv.9.dylib
 0xa6c6d000 - 0xa6df7ffb  libsqlite3.dylib (274.8.1) <2865CDEE-96C4-3ECC-9F4B-876D0CD27C41> /usr/lib/libsqlite3.dylib
 0xa6f07000 - 0xa6f57ffb  libstdc++.6.0.9.dylib (104.1) <6C6639C0-A005-38ED-895A-4AE744EFCD1A> /usr/lib/libstdc++.6.0.9.dylib
 0xa6f9b000 - 0xa6ffafff  libusrtcp.dylib (1229.70.2) <DCC93418-5566-3D51-A3D9-77910D9FDDFA> /usr/lib/libusrtcp.dylib
 0xa6ffb000 - 0xa6ffeff7  libutil.dylib (51.20.1) <26C1D5B1-BC44-336A-A534-D8504D59E0FE> /usr/lib/libutil.dylib
 0xa6fff000 - 0xa700cffb  libxar.1.dylib (417.1) <56646950-9313-326E-9C7E-6CAE987990A8> /usr/lib/libxar.1.dylib
 0xa700d000 - 0xa70ebff7  libxml2.2.dylib (31.18) <BCC8B49C-29FF-3451-9064-39933AB4668D> /usr/lib/libxml2.2.dylib
 0xa70ec000 - 0xa7114ff3  libxslt.1.dylib (15.16) <3F96CB18-9052-3139-83AC-4D275F9412AB> /usr/lib/libxslt.1.dylib
 0xa7115000 - 0xa7124ff7  libz.1.dylib (70) <E39CBE56-B2AA-33C7-90F6-8A218271B9BB> /usr/lib/libz.1.dylib
 0xa715f000 - 0xa7163fff  libcache.dylib (80) <942779A5-EDB4-32EE-8C4B-4FFA87BFD5D5> /usr/lib/system/libcache.dylib
 0xa7164000 - 0xa716efff  libcommonCrypto.dylib (60118.50.1) <8D107029-8D3D-31FB-9218-1B4FA1BE0237> /usr/lib/system/libcommonCrypto.dylib
 0xa716f000 - 0xa7174fff  libcompiler_rt.dylib (62) <7B76378D-AB95-37EA-AB63-F7797FEAE6F8> /usr/lib/system/libcompiler_rt.dylib
 0xa7175000 - 0xa717fff3  libcopyfile.dylib (146.50.5) <3BFF077D-3F10-32C8-8292-5CE81A24BEAB> /usr/lib/system/libcopyfile.dylib
 0xa7180000 - 0xa71e8ff7  libcorecrypto.dylib (562.70.3) <F5B53C51-3F76-3EF1-B384-58E742F85FC8> /usr/lib/system/libcorecrypto.dylib
 0xa7253000 - 0xa7288fff  libdispatch.dylib (913.60.3) <ECB05F06-15FA-332C-B5DC-0D7F89F2C9C0> /usr/lib/system/libdispatch.dylib
 0xa7289000 - 0xa72a6fff  libdyld.dylib (551.5) <699DEC2C-0283-3093-A2EC-05C290FFE30E> /usr/lib/system/libdyld.dylib
 0xa72a7000 - 0xa72a7fff  libkeymgr.dylib (28) <4E848563-7125-313E-919F-C6C4F9E93CB7> /usr/lib/system/libkeymgr.dylib
 0xa72a8000 - 0xa72b4ff7  libkxld.dylib (4570.71.80.1) <629606D3-F0C1-3DCB-B14E-6EF5C05A67CD> /usr/lib/system/libkxld.dylib
 0xa72b5000 - 0xa72b5fff  liblaunch.dylib (1205.70.15) <883C4291-5D1B-3C0C-BC1F-70DDD4D70BA6> /usr/lib/system/liblaunch.dylib
 0xa72b6000 - 0xa72bbfff  libmacho.dylib (906) <506F630D-4C90-396F-8C32-FFCB83E82BDD> /usr/lib/system/libmacho.dylib
 0xa72bc000 - 0xa72befff  libquarantine.dylib (86.70.1) <F413C900-3825-3A8F-B0C3-012EE554B782> /usr/lib/system/libquarantine.dylib
 0xa72bf000 - 0xa72c0fff  libremovefile.dylib (45) <AB2A31AD-E090-370C-BF57-B55FFC299230> /usr/lib/system/libremovefile.dylib
 0xa72c1000 - 0xa72d8ff7  libsystem_asl.dylib (356.70.1) <95D75FA2-6FD4-33DE-A66A-D0C0F3FC3FF0> /usr/lib/system/libsystem_asl.dylib
 0xa72d9000 - 0xa72d9fff  libsystem_blocks.dylib (67) <E66B5059-8C97-35D6-A514-C9E1A7A1D500> /usr/lib/system/libsystem_blocks.dylib
 0xa72da000 - 0xa7366ff3  libsystem_c.dylib (1244.50.9) <1CD3C115-AFA2-3B90-8791-29102DCBA770> /usr/lib/system/libsystem_c.dylib
 0xa7367000 - 0xa736afff  libsystem_configuration.dylib (963.50.9) <1E07F90F-6E5A-344F-979B-98F93F5F6C80> /usr/lib/system/libsystem_configuration.dylib
 0xa736b000 - 0xa736efff  libsystem_coreservices.dylib (51) <85DF5D35-0086-33BE-887B-B4FD3FC6501E> /usr/lib/system/libsystem_coreservices.dylib
 0xa736f000 - 0xa7370fff  libsystem_darwin.dylib (1244.50.9) <943DCCC9-FB64-3AA7-B95F-C1B3003DE3F2> /usr/lib/system/libsystem_darwin.dylib
 0xa7371000 - 0xa7377ff7  libsystem_dnssd.dylib (878.70.4) <E9C82123-8347-35BD-8A1C-D4CB7F13E208> /usr/lib/system/libsystem_dnssd.dylib
 0xa7378000 - 0xa73c7ffb  libsystem_info.dylib (517.30.1) <0D6EBCEC-9D47-3DE4-B807-C1A485AAE80E> /usr/lib/system/libsystem_info.dylib
 0xa73c8000 - 0xa73ecff3  libsystem_kernel.dylib (4570.71.80.1) <A3ADFA25-AB4F-35FF-B5FA-F0B6B7C28F27> /usr/lib/system/libsystem_kernel.dylib
 0xa73ed000 - 0xa743cfdb  libsystem_m.dylib (3147.50.1) <B5C3B3F4-4181-3F45-B02D-05B383C2DC79> /usr/lib/system/libsystem_m.dylib
 0xa743d000 - 0xa7457ffb  libsystem_malloc.dylib (140.50.7) <016E3C44-1BA7-389E-9FE2-48FBF5FF6652> /usr/lib/system/libsystem_malloc.dylib
 0xa7458000 - 0xa757cff7  libsystem_network.dylib (1229.70.2) <69512D4A-C76F-3E9C-9234-4B11920FAF03> /usr/lib/system/libsystem_network.dylib
 0xa757d000 - 0xa7587fff  libsystem_networkextension.dylib (767.70.2) <9D17E54C-E8EF-36EE-A41C-CEB70B6B8E8A> /usr/lib/system/libsystem_networkextension.dylib
 0xa7588000 - 0xa7590ff3  libsystem_notify.dylib (172) <1C72BEE4-A035-3269-802E-DAA48BD81823> /usr/lib/system/libsystem_notify.dylib
 0xa7591000 - 0xa7597ffb  libsystem_platform.dylib (161.50.1) <23B67CCD-04AD-307D-8809-2A6646D63086> /usr/lib/system/libsystem_platform.dylib
 0xa7598000 - 0xa75a2ff3  libsystem_pthread.dylib (301.50.1) <1F0FB758-B0B2-3D1B-806C-5FCCCCE42FED> /usr/lib/system/libsystem_pthread.dylib
 0xa75a3000 - 0xa75a6ff3  libsystem_sandbox.dylib (765.70.1) <9FC20198-55F1-3928-A75B-FCE0E5505BEB> /usr/lib/system/libsystem_sandbox.dylib
 0xa75a7000 - 0xa75a9fff  libsystem_secinit.dylib (30) <0D3E3ABE-95A4-3675-B1F3-C3CEE7275783> /usr/lib/system/libsystem_secinit.dylib
 0xa75aa000 - 0xa75b2ff7  libsystem_symptoms.dylib (820.60.3) <DD8B22FF-8672-3DAF-8D51-25E6A39293B9> /usr/lib/system/libsystem_symptoms.dylib
 0xa75b3000 - 0xa75c6ffb  libsystem_trace.dylib (829.70.2) <03D19D10-AE05-3DA1-AE87-0F87FF2E57F2> /usr/lib/system/libsystem_trace.dylib
 0xa75c8000 - 0xa75cefff  libunwind.dylib (35.3) <AFE79A80-9167-35F5-A73A-2E1467047B28> /usr/lib/system/libunwind.dylib
 0xa75cf000 - 0xa75f8ff7  libxpc.dylib (1205.70.15) <46A85FE6-2E31-3B48-B72C-DFE55590E880> /usr/lib/system/libxpc.dylib

External Modification Summary:
Calls made by other processes targeting this process:
task_for_pid: 1
thread_create: 0
thread_set_state: 0
Calls made by this process:
task_for_pid: 0
thread_create: 0
thread_set_state: 0
Calls made by all processes on this machine:
task_for_pid: 7785445
thread_create: 0
thread_set_state: 0

VM Region Summary:
ReadOnly portion of Libraries: Total=238.9M resident=0K(0%) swapped_out_or_unallocated=238.9M(100%)
Writable regions: Total=130.1M written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=130.1M(100%)

VIRTUAL   REGION
REGION TYPE                        SIZE    COUNT (non-coalesced)
===========                     =======  =======
Accelerate framework               128K        2
Activity Tracing                   256K        2
CG backing stores                  248K        3
CoreImage                            8K        3
CoreServices                       132K        2
CoreUI image file                  180K        3
Kernel Alloc Once                    8K        2
MALLOC                           113.8M       49
MALLOC guard page                   48K       13
Memory Tag 242                      12K        2
Memory Tag 249                     156K        2
OpenGL GLSL                        128K        3
Stack                             10.0M        6
Stack Guard                       56.0M        6
VM_ALLOCATE                        128K       20
__DATA                            20.0M      222
__FONT_DATA                          4K        2
__GLSLBUILTINS                    2588K        2
__IMPORT                            12K        2
__LINKEDIT                        77.4M        7
__OBJC                            3120K       79
__TEXT                           161.5M      225
__UNICODE                          560K        2
mapped file                      313.8M      192
shared memory                      700K       10
===========                     =======  =======
TOTAL                            760.9M      836

Model: MacBookPro9,1, BootROM 232.0.0.0.0, 4 processors, Intel Core i7, 2.6 GHz, 8 GB, SMC 2.1f175
Graphics: Intel HD Graphics 4000, Intel HD Graphics 4000, Built-In
Graphics: NVIDIA GeForce GT 650M, NVIDIA GeForce GT 650M, PCIe
Memory Module: BANK 0/DIMM0, 4 GB, DDR3, 1600 MHz, 0x02FE, 0x45424A3431554638424455302D474E2D4620
Memory Module: BANK 1/DIMM0, 4 GB, DDR3, 1600 MHz, 0x02FE, 0x45424A3431554638424455302D474E2D4620
AirPort: spairport_wireless_card_type_airport_extreme (0x14E4, 0xF5), Broadcom BCM43xx 1.0 (7.21.190.20.1a4)
Bluetooth: Version 6.0.7f20, 3 services, 27 devices, 1 incoming serial ports
Network Service: Wi-Fi, AirPort, en1
Serial ATA Device: APPLE HDD HTS541075A9E682, 750.16 GB
Serial ATA Device: HL-DT-ST DVDRW  GS31N
USB Device: USB 2.0 Bus
USB Device: Hub
USB Device: FaceTime HD Camera (Built-in)
USB Device: USB 2.0 Bus
USB Device: Hub
USB Device: Hub
USB Device: Apple Internal Keyboard / Trackpad
USB Device: IR Receiver
USB Device: BRCM20702 Hub
USB Device: Bluetooth USB Host Controller
USB Device: USB 3.0 Bus
USB Device: USB Receiver
Thunderbolt Bus: MacBook Pro, Apple Inc., 25.1

## Post 6923 by Roxanneflowers (Patch Note Conspiracy Theorist) — 2020-07-17T12:44:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6923#p6923 | page 1 | era: pre-1.18.1 -->

> **Calvicus wrote: Fri Jul 17, 2020 6:21 am**
> I got a vanilla client for mac and merged them with Turtle Wow client.
>
>  I'm going to assume that's a no no.

That's a no no.
You'll want to clean load with the Mac client for 1.12.1 and then edit the realmlist.wtf file within that.

## Post 6925 by Calvicus — 2020-07-17T13:41:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=6925#p6925 | page 1 | era: pre-1.18.1 -->

So I did that and I'm getting the same error. Tried running root and still nothing.

