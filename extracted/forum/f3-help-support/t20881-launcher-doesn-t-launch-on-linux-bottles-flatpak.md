---
title: "Launcher doesn't launch on linux (bottles flatpak)"
url: "https://forum.turtlecraft.gg/viewtopic.php?t=20881"
topic_id: 20881
forum_id: 3
forum: "Help & Support"
author: "Zorstka"
author_authority: "player"
posted: "2025-08-13T15:58:00Z"
last_post: "2025-08-15T21:14:00Z"
post_count: 9
pages: 1
fetched: "2026-09-10T08:41:54Z"
era: "pre-1.18.1"
note: bold text marks names highlighted in the source; posts are in original order; times are UTC
---

# Launcher doesn't launch on linux (bottles flatpak)

## Post 145116 by Zorstka — 2025-08-13T15:58:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145116#p145116 | page 1 | era: pre-1.18.1 -->

I've been trying to run the turtle launcher in bottles (<https://flathub.org/apps/com.usebottles.bottles>) but the launcher crashes for me after installation.

The standalone 1.12 client works really well in bottles so I am not without alternatives. Just trying to figure the launcher out.

Note this is the flatpak version of bottles, not some other distribution's version.

 **Repro steps:**

 1) Create new "gaming" bottle
 2) Install dependencies: "vcredist2015 webview2 allfonts dotnet481"
"webview2" is important because the launcher install will fail without this. Will include this at the end of the post.
 3) Launch Executable TurtleWoW.exe

 **Expected:**

Launcher starts, see window

 **Actual:**

Briefly see a black window appear, then crashes.

Here are the error messages from the log output followed by the full log output
Code: Select all

```
err:   D3D11VideoDevice::GetVideoDecoderProfileCount: Stub
03c4:err:ntlm:ntlm_LsaApInitializePackage no NTLM support, expect problems
0438:err:ntlm:ntlm_LsaApInitializePackage no NTLM support, expect problems
0154:err:combase:RoGetActivationFactory Failed to find library for L"Windows.Storage.AccessCache.StorageApplicationPermissions"
wine: Unhandled page fault on read access to 000077A402771A80 at address 00006FFFFF2E93D0 (thread 0154), starting debugger...
Unhandled exception: page fault on read access to 0x000077a402771a80 in 64-bit code (0x006fffff2e93d0).
```

Code: Select all

```
11:43:33 (INFO) Launching an executable…
11:43:33 (WARNING) Windows path detected. Avoiding validation.
11:43:33 (INFO) Using Wine Starter -- run
11:43:33 (INFO) Using EasyAntiCheat runtime
11:43:33 (INFO) Using BattlEye runtime
fsync: up and running.
0040:err:module:hacks_init HACK: reporting LocalSystem account SID.
0060:err:module:hacks_init HACK: reporting LocalSystem account SID.
01d4:err:ntlm:ntlm_LsaApInitializePackage no NTLM support, expect problems
02dc:err:ntlm:ntlm_LsaApInitializePackage no NTLM support, expect problems
0398:err:ntlm:ntlm_LsaApInitializePackage no NTLM support, expect problems
info:  Game: msedgewebview2.exe
info:  DXVK: v2.7
info:  Build: x86_64 gcc 15.1.0
03a8:err:ntlm:ntlm_LsaApInitializePackage no NTLM support, expect problems
info:  Vulkan: Found vkGetInstanceProcAddr in winevulkan.dll @ 0x6fffee144040
info:  Extension providers:
info:    Platform WSI
info:    OpenVR
info:  OpenVR: could not open registry key, status 2
info:  OpenVR: Failed to locate module
info:    OpenXR
info:  Enabled instance extensions:
info:    VK_EXT_surface_maintenance1
info:    VK_KHR_get_surface_capabilities2
info:    VK_KHR_surface
info:    VK_KHR_win32_surface
info:  Found device: AMD Radeon RX 6700 XT (RADV NAVI22) (radv 25.1.7)
info:  Found device: AMD Radeon Graphics (RADV RAPHAEL_MENDOCINO) (radv 25.1.7)
info:  Game: msedgewebview2.exe
info:  DXVK: v2.7
info:  Build: x86_64 gcc 15.1.0
info:  Vulkan: Found vkGetInstanceProcAddr in winevulkan.dll @ 0x6fffecfb4040
info:  Extension providers:
info:    Platform WSI
info:    OpenVR
info:  OpenVR: could not open registry key, status 2
info:  OpenVR: Failed to locate module
info:    OpenXR
info:  Enabled instance extensions:
info:    VK_EXT_surface_maintenance1
info:    VK_KHR_get_surface_capabilities2
info:    VK_KHR_surface
info:    VK_KHR_win32_surface
info:  Found device: AMD Radeon RX 6700 XT (RADV NAVI22) (radv 25.1.7)
info:  Found device: AMD Radeon Graphics (RADV RAPHAEL_MENDOCINO) (radv 25.1.7)
info:  D3D11InternalCreateDevice: Maximum supported feature level: D3D_FEATURE_LEVEL_12_1
info:  D3D11InternalCreateDevice: Using feature level D3D_FEATURE_LEVEL_11_1
info:  Creating device:
info:  AMD Radeon RX 6700 XT (RADV NAVI22):
info:    Driver   : radv 25.1.7
info:  Queues:
info:    Graphics : (0, 0)
info:    Transfer : (1, 0)
info:    Sparse   : (0, 0)
info:  Memory:
info:    Heap 0: 30.97 GiB
info:    Budget: 30.57 GiB
info:      Type  2: HOST_VISIBLE | HOST_COHERENT
info:      Type  5: HOST_VISIBLE | HOST_COHERENT | HOST_CACHED
info:      Type  6: HOST_VISIBLE | HOST_COHERENT | HOST_CACHED
info:      Type  8: HOST_VISIBLE | HOST_COHERENT | DEVICE_COHERENT | DEVICE_UNCACHED
info:      Type 10: HOST_VISIBLE | HOST_COHERENT | HOST_CACHED | DEVICE_COHERENT | DEVICE_UNCACHED
info:    Heap 1: 11.98 GiB (DEVICE_LOCAL)
info:    Budget: 10.25 GiB
info:      Type  0: DEVICE_LOCAL
info:      Type  1: DEVICE_LOCAL
info:      Type  3: DEVICE_LOCAL | HOST_VISIBLE | HOST_COHERENT
info:      Type  4: DEVICE_LOCAL | HOST_VISIBLE | HOST_COHERENT
info:      Type  7: DEVICE_LOCAL | DEVICE_COHERENT | DEVICE_UNCACHED
info:      Type  9: DEVICE_LOCAL | HOST_VISIBLE | HOST_COHERENT | DEVICE_COHERENT | DEVICE_UNCACHED
info:  Enabled extensions:
info:    VK_EXT_attachment_feedback_loop_layout
info:    VK_EXT_conservative_rasterization
info:    VK_EXT_custom_border_color
info:    VK_EXT_depth_clip_enable
info:    VK_EXT_depth_bias_control
info:    VK_EXT_descriptor_buffer
info:    VK_EXT_extended_dynamic_state3
info:    VK_EXT_fragment_shader_interlock
info:    VK_EXT_graphics_pipeline_library
info:    VK_EXT_hdr_metadata
info:    VK_EXT_line_rasterization
info:    VK_EXT_memory_priority
info:    VK_EXT_multi_draw
info:    VK_EXT_non_seamless_cube_map
info:    VK_EXT_robustness2
info:    VK_EXT_shader_module_identifier
info:    VK_EXT_shader_stencil_export
info:    VK_EXT_swapchain_maintenance1
info:    VK_EXT_transform_feedback
info:    VK_EXT_vertex_attribute_divisor
info:    VK_KHR_external_memory_win32
info:    VK_KHR_external_semaphore_win32
info:    VK_KHR_load_store_op_none
info:    VK_KHR_maintenance5
info:    VK_KHR_maintenance6
info:    VK_KHR_pipeline_library
info:    VK_KHR_present_id
info:    VK_KHR_present_wait
info:    VK_KHR_swapchain
info:    VK_KHR_swapchain_mutable_format
info:    VK_KHR_win32_keyed_mutex
info:  Enabled features:
info:    depthBiasClamp                 : 1
info:    depthBounds                    : 1
info:    depthClamp                     : 1
info:    drawIndirectFirstInstance      : 1
info:    dualSrcBlend                   : 1
info:    fillModeNonSolid               : 1
info:    fragmentStoresAndAtomics       : 1
info:    fullDrawIndexUint32            : 1
info:    geometryShader                 : 1
info:    imageCubeArray                 : 1
info:    independentBlend               : 1
info:    logicOp                        : 1
info:    multiDrawIndirect              : 1
info:    multiViewport                  : 1
info:    occlusionQueryPrecise          : 1
info:    pipelineStatisticsQuery        : 1
info:    robustBufferAccess             : 1
info:    sampleRateShading              : 1
info:    samplerAnisotropy              : 1
info:    shaderClipDistance             : 1
info:    shaderCullDistance             : 1
info:    shaderFloat64                  : 1
info:    shaderImageGatherExtended      : 1
info:    shaderInt16                    : 1
info:    shaderInt64                    : 1
info:    shaderSampledImageArrayDynamicIndexing : 1
info:    sparseBinding                  : 1
info:    sparseResidencyBuffer          : 1
info:    sparseResidencyImage2D         : 1
info:    sparseResidencyImage3D         : 1
info:    sparseResidency2Samples        : 0
info:    sparseResidency4Samples        : 0
info:    sparseResidency8Samples        : 0
info:    sparseResidency16Samples       : 0
info:    sparseResidencyAliased         : 1
info:    shaderResourceResidency        : 1
info:    shaderResourceMinLod           : 1
info:    tessellationShader             : 1
info:    textureCompressionBC           : 1
info:    variableMultisampleRate        : 1
info:    vertexPipelineStoresAndAtomics : 1
info:    wideLines                      : 1
info:    shaderDrawParameters           : 1
info:    storagePushConstant16          : 1
info:    bufferDeviceAddress            : 1
info:    descriptorIndexing             : 1
info:    descriptorBindingSampledImageUpdateAfterBind : 1
info:    descriptorBindingUpdateUnusedWhilePending : 1
info:    descriptorBindingPartiallyBound : 1
info:    drawIndirectCount              : 1
info:    hostQueryReset                 : 1
info:    runtimeDescriptorArray         : 1
info:    samplerFilterMinmax            : 1
info:    samplerMirrorClampToEdge       : 1
info:    shaderInt8                     : 1
info:    shaderOutputViewportIndex      : 1
info:    shaderOutputLayer              : 1
info:    timelineSemaphore              : 1
info:    uniformBufferStandardLayout    : 1
info:    vulkanMemoryModel              : 1
info:    dynamicRendering               : 1
info:    maintenance4                   : 1
info:    robustImageAccess              : 0
info:    pipelineCreationCacheControl   : 1
info:    shaderDemoteToHelperInvocation : 1
info:    shaderZeroInitializeWorkgroupMemory : 1
info:    synchronization2               : 1
info:  VK_EXT_attachment_feedback_loop_layout:
info:    attachmentFeedbackLoopLayout   : 1
info:  VK_EXT_conservative_rasterization:
info:    extConservativeRasterization   : 1
info:  VK_EXT_custom_border_color:
info:    customBorderColors             : 1
info:    customBorderColorWithoutFormat : 1
info:  VK_EXT_depth_clip_enable:
info:    depthClipEnable                : 1
info:  VK_EXT_depth_bias_control:
info:    depthBiasControl               : 1
info:    leastRepresentableValueForceUnormRepresentation : 1
info:    floatRepresentation            : 1
info:    depthBiasExact                 : 1
info:  VK_EXT_descriptor_buffer:
info:    descriptorBuffer               : 1
info:  VK_EXT_extended_dynamic_state3:
info:    extendedDynamicState3AlphaToCoverageEnable : 1
info:    extendedDynamicState3DepthClipEnable : 1
info:    extendedDynamicState3RasterizationSamples : 1
info:    extendedDynamicState3SampleMask : 1
info:    extendedDynamicState3LineRasterizationMode : 1
info:  VK_EXT_fragment_shader_interlock:
info:    fragmentShaderSampleInterlock  : 1
info:    fragmentShaderPixelInterlock   : 1
info:  VK_EXT_full_screen_exclusive:
info:    extFullScreenExclusive         : 0
info:  VK_EXT_graphics_pipeline_library:
info:    graphicsPipelineLibrary        : 1
info:  VK_EXT_hdr_metadata:
info:    extHdrMetadata                 : 1
info:  VK_EXT_line_rasterization:
info:    rectangularLines               : 1
info:    smoothLines                    : 1
info:  VK_EXT_memory_budget:
info:    extMemoryBudget                : 1
info:  VK_EXT_memory_priority:
info:    memoryPriority                 : 1
info:  VK_EXT_multi_draw:
info:    multiDraw                      : 1
info:  VK_EXT_non_seamless_cube_map:
info:    nonSeamlessCubeMap             : 1
info:  VK_EXT_pageable_device_local_memory:
info:    pageableDeviceLocalMemory      : 0
info:  VK_EXT_robustness2:
info:    robustBufferAccess2            : 1
info:    robustImageAccess2             : 1
info:    nullDescriptor                 : 1
info:  VK_EXT_shader_module_identifier:
info:    shaderModuleIdentifier         : 1
info:  VK_EXT_shader_stencil_export:
info:    extShaderStencilExport         : 1
info:  VK_EXT_swapchain_colorspace:
info:    extSwapchainColorSpace         : 0
info:  VK_EXT_swapchain_maintenance1:
info:    swapchainMaintenance1          : 1
info:  VK_EXT_transform_feedback:
info:    transformFeedback              : 1
info:    geometryStreams                : 1
info:  VK_EXT_vertex_attribute_divisor:
info:    vertexAttributeInstanceRateDivisor : 1
info:    vertexAttributeInstanceRateZeroDivisor : 1
info:  VK_KHR_external_memory_win32:
info:    khrExternalMemoryWin32         : 1
info:  VK_KHR_external_semaphore_win32:
info:    khrExternalSemaphoreWin32      : 1
info:  VK_KHR_load_store_op_none:
info:    khrLoadStoreOpNone             : 1
info:  VK_KHR_maintenance5:
info:    maintenance5                   : 1
info:  VK_KHR_maintenance6:
info:    maintenance6                   : 1
info:  VK_KHR_maintenance7:
info:    maintenance7                   : 0
info:  VK_KHR_pipeline_library:
info:    khrPipelineLibrary             : 1
info:  VK_KHR_present_id:
info:    presentId                      : 1
info:  VK_KHR_present_wait:
info:    presentWait                    : 1
info:  VK_KHR_swapchain:
info:    khrSwapchain                   : 1
info:  VK_KHR_swapchain_mutable_format:
info:    khrSwapchainMutableFormat      : 1
info:  VK_KHR_win32_keyed_mutex:
info:    khrWin32KeyedMutex             : 1
info:  VK_NV_descriptor_pool_overallocation:
info:    descriptorPoolOverallocation   : 0
info:  VK_NV_low_latency2:
info:    nvLowLatency2                  : 0
info:  VK_NV_raw_access_chains:
info:    shaderRawAccessChains          : 0
info:  VK_NVX_binary_import:
info:    nvxBinaryImport                : 0
info:  VK_NVX_image_view_handle:
info:    nvxImageViewHandle             : 0
info:  Descriptor sizes (set alignment: 64)
info:    Sampler              : 16
info:    Uniform buffer       : 16
info:    Storage buffer       : 16
info:    Uniform texel buffer : 16
info:    Storage texel buffer : 16
info:    Sampled image        : 64
info:    Storage image        : 32
info:  Memory type mask for sparse resources: 0x7ad
info:  Memory type mask for buffer resources: 0x7ad, usage: 0x219ff
info:  Creating sampler descriptor heap (32 kB)
info:  DXVK: Graphics pipeline libraries supported
info:  DXGI: VK_FORMAT_D24_UNORM_S8_UINT -> VK_FORMAT_D32_SFLOAT_S8_UINT
info:  Creating resource descriptor heap (8192 kB)
err:   D3D11VideoDevice::GetVideoDecoderProfileCount: Stub
03c4:err:ntlm:ntlm_LsaApInitializePackage no NTLM support, expect problems
0438:err:ntlm:ntlm_LsaApInitializePackage no NTLM support, expect problems
0154:err:combase:RoGetActivationFactory Failed to find library for L"Windows.Storage.AccessCache.StorageApplicationPermissions"
wine: Unhandled page fault on read access to 000077A402771A80 at address 00006FFFFF2E93D0 (thread 0154), starting debugger...
Unhandled exception: page fault on read access to 0x000077a402771a80 in 64-bit code (0x006fffff2e93d0).
Register dump:
rip:00006fffff2e93d0 rsp:0000000000111db0 rbp:0000000000111e70 eflags:00010202 (  R- --  I   - - - )
rax:000077a402771a80 rbx:0000000001ca63f0 rcx:000077a402771a80 rdx:0000000000000000
rsi:0000000000112300 rdi:00000000000100c6  r8:0000000000000000  r9:0000000140fc71d8 r10:0000000000000008
r11:0000000000000202 r12:00000000000100c6 r13:00000000000005a4 r14:00006fffff5981a0 r15:0000000000761250
Stack dump:
0x00000000111db0:  00006fffff5f1840 00006fffff5a5410
0x00000000111dc0:  00000001415ffa38 00000001415ffa68
0x00000000111dd0:  0000000000758c80 0000000140fc71d8
0x00000000111de0:  00000000000100c6 0000000000000000
0x00000000111df0:  0000000000000001 000000007ffc0000
0x00000000111e00:  00006ffffff6ae90 0000000140233866
0x00000000111e10:  0000000000000000 0000000000000000
0x00000000111e20:  0000000000000000 0000000000761250
0x00000000111e30:  0000000000758c80 0000000140fc71d8
0x00000000111e40:  00000000000100c6 0000000000000000
0x00000000111e50:  000000000078ea08 0000000140b9c080
0x00000000111e60:  000000000078e988 0000000000000000
Backtrace:
=>0 0x006fffff2e93d0 in ole32 (+0x293d0) (0x00000000111e70)
 1 0x00000140233866 in turtle-wow (+0x233866) (0x00000000111e70)
 2 0x00000140b9c0a3 in turtle-wow (+0xb9c0a3) (0x00000000111ed0)
 3 0x006fffff5a582a in user32 (+0x5582a) (0x000000001121c0)
 4 0x006fffff5a5844 in user32 (+0x55844) (0x000000001121c0)
 5 0x006fffff5a8d06 in user32 (+0x58d06) (0x000000001120f0)
 6 0x000001401f2086 in turtle-wow (+0x1f2086) (0x000000001120f0)
 7 0x000001401eb247 in turtle-wow (+0x1eb247) (0x00000000113470)
 8 0x0000014023f1fb in turtle-wow (+0x23f1fb) (0x00000000114250)
 9 0x00000140201451 in turtle-wow (+0x201451) (0x000000001142f0)
 10 0x00000140200597 in turtle-wow (+0x200597) (0x00000000114e40)
 11 0x000001401fcd72 in turtle-wow (+0x1fcd72) (0x00000000114f80)
 12 0x000001401cd7f1 in turtle-wow (+0x1cd7f1) (0x00000000115740)
 13 0x000001401cce79 in turtle-wow (+0x1cce79) (0x00000000117580)
 14 0x00000140107445 in turtle-wow (+0x107445) (0x00000000118020)
 15 0x000001402bbc30 in turtle-wow (+0x2bbc30) (0x00000000119860)
 16 0x000001401fd37a in turtle-wow (+0x1fd37a) (0x00000000119aa0)
 17 0x000001402b1f56 in turtle-wow (+0x2b1f56) (0x0000000011a0a0)
 18 0x000001402b6569 in turtle-wow (+0x2b6569) (0x0000000011a280)
 19 0x000001402b8114 in turtle-wow (+0x2b8114) (0x0000000011a510)
 20 0x0000014021976c in turtle-wow (+0x21976c) (0x0000000011a510)
 21 0x0000014025a225 in turtle-wow (+0x25a225) (0x0000000011a7e0)
 22 0x000001401025ab in turtle-wow (+0x1025ab) (0x0000000011aac0)
 23 0x0000014004427b in turtle-wow (+0x4427b) (0x0000000011d800)
 24 0x00000140001026 in turtle-wow (+0x1026) (0x0000000011fec0)
 25 0x0000014000100c in turtle-wow (+0x100c) (0x0000000011fec0)
 26 0x00000140d903ec in turtle-wow (+0xd903ec) (0x0000000011fec0)
 27 0x0000014000106c in turtle-wow (+0x106c) (0000000000000000)
 28 0x00000140f6333c in turtle-wow (+0xf6333c) (0000000000000000)
 29 0x006fffffeea639 in kernel32 (+0x2a639) (0000000000000000)
 30 0x006ffffff9884f in ntdll (+0x5884f) (0000000000000000)
0x006fffff2e93d0 ole32+0x293d0: mov (%rax), %rax
Modules:
Module  Address                                 Debug info      Name (86 modules)
PE             140000000-       141b63000       Export          turtle-wow
PE-Wine     6ffffd930000-    6ffffd93e000       Deferred        version
PE          6ffffd950000-    6ffffde0d000       Deferred        embeddedbrowserwebview
PE-Wine     6ffffde20000-    6ffffde3c000       Deferred        explorerframe
PE-Wine     6ffffdf30000-    6ffffe06f000       Deferred        actxprxy
PE-Wine     6ffffe080000-    6ffffe0b6000       Deferred        uxtheme
PE-Wine     6ffffe0d0000-    6ffffe0e9000       Deferred        winex11
PE-Wine     6ffffe100000-    6ffffe10b000       Deferred        psapi
PE-Wine     6ffffe120000-    6ffffe12d000       Deferred        powrprof
PE-Wine     6ffffe140000-    6ffffe152000       Deferred        pdh
PE-Wine     6ffffe170000-    6ffffe18a000       Deferred        bcrypt
PE-Wine     6ffffe1a0000-    6ffffe275000       Deferred        crypt32
PE-Wine     6ffffe290000-    6ffffe2af000       Deferred        mpr
PE-Wine     6ffffe2c0000-    6ffffe343000       Deferred        wininet
PE-Wine     6ffffe360000-    6ffffe36a000       Deferred        bcryptprimitives
PE-Wine     6ffffe380000-    6ffffe38f000       Deferred        dwmapi
PE-Wine     6ffffe3a0000-    6ffffe4dd000       Deferred        comctl32
PE-Wine     6ffffe4f0000-    6ffffe507000       Deferred        shcore
PE-Wine     6ffffe520000-    6ffffe569000       Deferred        shlwapi
PE-Wine     6ffffe580000-    6ffffee98000       Deferred        shell32
PE-Wine     6fffff070000-    6fffff199000       Deferred        oleaut32
PE-Wine     6fffff1b0000-    6fffff1c9000       Deferred        jsproxy
PE-Wine     6fffff1e0000-    6fffff21e000       Deferred        winhttp
PE-Wine     6fffff230000-    6fffff248000       Deferred        coml2
PE-Wine     6fffff260000-    6fffff2aa000       Deferred        combase
PE-Wine     6fffff2c0000-    6fffff3cd000       COFF            ole32
PE-Wine     6fffff430000-    6fffff44e000       Deferred        imm32
PE-Wine     6fffff460000-    6fffff495000       Deferred        win32u
PE-Wine     6fffff4b0000-    6fffff533000       Deferred        gdi32
PE-Wine     6fffff550000-    6fffff6f8000       COFF            user32
PE-Wine     6fffff870000-    6fffff87e000       Deferred        userenv
PE-Wine     6fffff910000-    6fffff990000       Deferred        rpcrt4
PE-Wine     6fffff9a0000-    6fffff9c7000       Deferred        ws2_32
PE-Wine     6fffff9e0000-    6fffffaae000       Deferred        ucrtbase
PE-Wine     6fffffac0000-    6fffffaea000       Deferred        sechost
PE-Wine     6fffffb00000-    6fffffb9f000       Deferred        msvcrt
PE-Wine     6fffffbb0000-    6fffffbf2000       Deferred        advapi32
PE-Wine     6fffffc10000-    6fffffeab000       Deferred        kernelbase
PE-Wine     6fffffec0000-    6ffffff24000       COFF            kernel32
PE-Wine     6ffffff40000-    6ffffffe9000       COFF            ntdll
ELF         7fea08630000-    7fea086b3000       Deferred        libgmp.so.10
ELF         7fea086b3000-    7fea0886d000       Deferred        libunistring.so.5
ELF         7fea0886d000-    7fea08a00000       Deferred        libp11-kit.so.0
ELF         7fea08a00000-    7fea08c2c000       Deferred        libgnutls.so.30
ELF         7fea08c5f000-    7fea08c6f000       Deferred        libffi.so.8
ELF         7fea08c6f000-    7fea08cc6000       Deferred        libnettle.so.8
ELF         7fea08cc6000-    7fea08d12000       Deferred        libhogweed.so.6
ELF         7fea08d12000-    7fea08d29000       Deferred        libtasn1.so.6
ELF         7fea08d29000-    7fea08d83000       Deferred        libidn2.so.0
ELF         7fea08dc2000-    7fea08dcf000       Deferred        libxcursor.so.1
ELF         7fea08dcf000-    7fea08de2000       Deferred        libxi.so.6
ELF         7fea08de2000-    7fea08de7000       Deferred        libxcomposite.so.1
ELF         7fea08de7000-    7fea08def000       Deferred        libxfixes.so.3
ELF         7fea08def000-    7fea08dfc000       Deferred        libxrandr.so.2
ELF         7fea08dfc000-    7fea08e08000       Deferred        libxrender.so.1
ELF         7fea08e08000-    7fea08e0f000       Deferred        libxxf86vm.so.1
ELF         7fea08e0f000-    7fea08e15000       Deferred        libxau.so.6
ELF         7fea08e15000-    7fea08f61000       Deferred        libx11.so.6
ELF         7fea08f61000-    7fea09000000       Deferred        winex11.so
ELF         7fea093d4000-    7fea093d9000       Deferred        libxinerama.so.1
ELF         7fea093d9000-    7fea09405000       Deferred        libxcb.so.1
ELF         7fea09405000-    7fea09419000       Deferred        libxext.so.6
ELF         7fea09634000-    7fea09660000       Deferred        libexpat.so.1
ELF         7fea09660000-    7fea096b2000       Deferred        libfontconfig.so.1
ELF         7fea096b2000-    7fea09753000       Deferred        libpcre2-8.so.0
ELF         7fea09753000-    7fea09776000       Deferred        libbrotlicommon.so.1
ELF         7fea09776000-    7fea09799000       Deferred        libgraphite2.so.3
ELF         7fea09799000-    7fea098f7000       Deferred        libglib-2.0.so.0
ELF         7fea098f7000-    7fea09905000       Deferred        libbrotlidec.so.1
ELF         7fea09905000-    7fea09a25000       Deferred        libharfbuzz.so.0
ELF         7fea09a25000-    7fea09a5e000       Deferred        libpng16.so.16
ELF         7fea09a5e000-    7fea09a72000       Deferred        libbz2.so.1
ELF         7fea09a72000-    7fea09b38000       Deferred        libfreetype.so.6
ELF         7fea09b4f000-    7fea09c3e000       Deferred        libm.so.6
ELF         7fea09c40000-    7fea09c4e000       Deferred        bcrypt.so
ELF         7fea09c4e000-    7fea09c55000       Deferred        crypt32.so
ELF         7fea09c55000-    7fea09e00000       Deferred        win32u.so
ELF         7fea0a27a000-    7fea0a282000       Deferred        ws2_32.so
ELF         7fea0a3db000-    7fea0a3f5000       Deferred        libz.so.1
ELF         7fea0a3f5000-    7fea0a426000       Deferred        liblzma.so.5
ELF         7fea0a426000-    7fea0a454000       Deferred        libgcc_s.so.1
ELF         7fea0a454000-    7fea0a470000       Deferred        libunwind.so.8
ELF         7fea0a470000-    7fea0a56e000       Export          ntdll.so
ELF         7fea0a571000-    7fea0a770000       Deferred        libc.so.6
ELF         7fea0a789000-    7fea0a7c1000       Deferred        ld-linux-x86-64.so.2
ELF         7fea0a7c1000-    7fea0a7c6000       Deferred        <wine-loader>
Threads:
process  tid      prio    name (all IDs are in hex)
00000020 start.exe
	00000024    0
00000030 services.exe
	00000034    0
	00000038    0     wine_rpcrt4_server
	00000048    0     wine_threadpool_worker
	00000064    0     wine_threadpool_waitqueue
	00000068    0     wine_rpcrt4_io
	0000007c    0     wine_rpcrt4_io
	00000088    0     wine_rpcrt4_io
	000000a0    0     wine_rpcrt4_io
	000000ac    0     wine_rpcrt4_io
	000000b4    0     wine_threadpool_worker
	000000d4    0     wine_rpcrt4_io
	000000ec    0     wine_rpcrt4_io
	000000fc    0     wine_threadpool_worker
	0000010c    0
	00000118    0     wine_rpcrt4_io
00000054 svchost.exe
	00000058    0
	0000006c    0
	00000070    0     wine_sechost_service
00000074 winedevice.exe
	00000078    0
	00000080    0
	00000084    0     wine_sechost_service
	0000008c    0
	00000090    0
	00000094    0
	00000104    0
	00000108    0
00000098 winedevice.exe
	0000009c    0
	000000a4    0
	000000a8    0     wine_sechost_service
	000000b8    0
	000000bc    0
	000000c0    0
	000000c8    0
	00000100    0
000000cc plugplay.exe
	000000d0    0
	000000d8    0
	000000dc    0     wine_sechost_service
	000000e0    0     wine_rpcrt4_server
	000002a0    0     wine_threadpool_worker
	0000038c    0     wine_rpcrt4_io
	00000390    0     wine_threadpool_worker
000000e4 svchost.exe
	000000e8    0
	000000f0    0
	000000f4    0     wine_sechost_service
	000000f8    0
	00000138    0     wine_rpcrt4_server
	0000013c    0     wine_rpcrt4_server
	00000270    0     wine_threadpool_worker
00000110 rpcss.exe
	00000114    0
	0000011c    0
	00000120    0     wine_sechost_service
	00000124    0     wine_rpcrt4_server
	00000128    0     wine_rpcrt4_server
	00000130    0     wine_threadpool_worker
	00000168    0     wine_rpcrt4_io
	00000198    0     wine_rpcrt4_io
	00000454    0     wine_rpcrt4_io
00000140 conhost.exe
	00000144    0
00000148 start.exe
	0000014c    0
00000150 (D) C:\users\steamuser\AppData\Local\TurtleWoW\turtle-wow.exe
	00000154    0 <== main
	00000188    0
	00000190    0     wine_rpcrt4_server
	00000194    0     MojoThread
	000001a8    0     wine_threadpool_worker
	000004f0    0
00000158 explorer.exe
	0000015c    0
	00000160    0
	00000164    0     wine_rpcrt4_server
	000001ac    0     wine_threadpool_worker
0000016c tabtip.exe
	00000170    0
	0000017c    0     wine_rpcrt4_server
	00000180    0
	000004d0    0     wine_threadpool_worker
	000004dc    0
000002d8 msedgewebview2.exe
	000002dc    0     CrBrowserMain
	00000324    0     LoaderLockSampler
	00000328    0     BrokerEvent
	0000032c    0     ThreadPoolServiceThread
	00000330   -2     ThreadPoolSingleThreadCOMSTASharedBackgroundBlocking0
	00000334    0     ThreadPoolSingleThreadCOMSTASharedForegroundBlocking1
	00000338    0     ThreadPoolForegroundWorker
	0000033c   -2     ThreadPoolBackgroundWorker
	00000340    0     ThreadPoolForegroundWorker
	00000344   -2     ThreadPoolBackgroundWorker
	00000348    0     wine_threadpool_worker
	0000034c    0     wine_threadpool_waitqueue
	00000350    0     Chrome_IOThread
	00000354    0     MemoryInfra
	00000358    0     ThreadPoolSingleThreadCOMSTASharedForeground2
	0000035c   -2     ThreadPoolSingleThreadSharedBackgroundBlocking3
	00000360    0     ThreadPoolForegroundWorker
	00000364    0     ThreadPoolForegroundWorker
	00000368    0     ThreadPoolForegroundWorker
	0000036c    0     ThreadPoolForegroundWorker
	00000370    0     ThreadPoolForegroundWorker
	00000374    0     ThreadPoolForegroundWorker
	00000378    0     ThreadPoolSingleThreadForegroundBlocking4
	0000037c    0     CacheThread_BlockFile
	00000380    0     CompositorTileWorker1
	00000384    0     wine_sechost_device_notify
	00000388    0     VideoCaptureThread
	0000039c    0     ThreadPoolSingleThreadSharedForegroundBlocking5
	000003a0    0     ThreadPoolSingleThreadSharedForeground6
	000003ac    0     ThreadPoolForegroundWorker
	000003b0    0     ThreadPoolForegroundWorker
	000003b4    0     ThreadPoolForegroundWorker
	000003b8   -2     ThreadPoolSingleThreadSharedBackgroundBlocking7
	000003bc    0     wine_rpcrt4_server
	000004d4    0     wine_threadpool_worker
000002ec msedgewebview2.exe
	000002f0    0     CrashpadMainThread
	00000304    0     ExitCodeWatcherThread
	00000308    0
	0000030c    0
	00000310    0
	00000314    0     wine_threadpool_worker
	00000318    0     wine_threadpool_waitqueue
	0000031c    0
	00000320    0
00000394 msedgewebview2.exe
	00000398    0     CrGpuMain
	000003c8    0     LoaderLockSampler
	000003f8    0     GpuWatchdog
	00000400    0     dxvk-submit
	00000404    0     dxvk-queue
	00000408    0     dxvk-descriptor
	0000040c    0     dxvk-cs
	00000410    0     ThreadPoolServiceThread
	00000414    0     ThreadPoolForegroundWorker
	00000418   -2     ThreadPoolBackgroundWorker
	0000041c    1     Chrome_ChildIOThread
	00000420    0     wine_threadpool_worker
	00000424    0     wine_threadpool_waitqueue
	00000428    0     ThreadPoolForegroundWorker
	0000042c    0     VizCompositorThread
	00000430    0     Window owner thread
000003a4 msedgewebview2.exe
	000003a8    0     CrUtilityMain
	000003cc    0     LoaderLockSampler
	000003d0    0     ThreadPoolServiceThread
	000003d4    0     ThreadPoolForegroundWorker
	000003d8   -2     ThreadPoolBackgroundWorker
	000003dc    0     Chrome_ChildIOThread
	000003e0    0     ThreadPoolForegroundWorker
	000003e4    0     ThreadPoolForegroundWorker
	000003e8    0     wine_threadpool_worker
	000003ec    0     wine_threadpool_waitqueue
	000003f0   -2     ThreadPoolBackgroundWorker
	000003f4    0     ThreadPoolForegroundWorker
	000003fc    0     ThreadPoolForegroundWorker
000003c0 msedgewebview2.exe
	000003c4    0     CrUtilityMain
	0000043c    0     LoaderLockSampler
	00000460    0     ThreadPoolServiceThread
	00000464    0     ThreadPoolForegroundWorker
	00000468   -2     ThreadPoolBackgroundWorker
	0000046c    0     Chrome_ChildIOThread
	00000470    0     ThreadPoolForegroundWorker
	00000474    0     ThreadPoolForegroundWorker
00000434 msedgewebview2.exe
	00000438    0     CrRendererMain
	00000448    0     LoaderLockSampler
	00000478    0     ThreadPoolServiceThread
	0000047c    0     ThreadPoolForegroundWorker
	00000480   -2     ThreadPoolBackgroundWorker
	00000484    1     Chrome_ChildIOThread
	00000488    0     ThreadPoolForegroundWorker
	0000048c    0     wine_threadpool_worker
	00000490    0     wine_threadpool_waitqueue
	00000494    0     GpuMemoryThread
	000004a8    1     Compositor
	000004ac    0     ThreadPoolSingleThreadSharedForegroundBlocking0
	000004b0   -2     ThreadPoolBackgroundWorker
	000004b4    0     CompositorTileWorker1
	000004b8    0     CompositorTileWorker2
	000004bc    0     CompositorTileWorker3
	000004c0    0     CompositorTileWorker4
	000004c4   -2     CompositorTileWorkerBackground
00000440 explorer.exe
	00000444    0
	0000044c    0
	00000450    0     wine_rpcrt4_server
00000458 tabtip.exe
	0000045c    0
	0000049c    0     wine_rpcrt4_server
	000004a0    0
000004e8 conhost.exe
	000004ec    0
System information:
Wine build: wine-experimental.bleeding.edge.9.0.93696.20240429 ( TkG Plain )
Platform: x86_64 (guest: i386)
Version: Windows 10
Host system: Linux
Host version: 6.15.9-arch1-1
```

If I try to launch the launcher exe without installing any dependencies first, this is what I get:

![Image](https://i.imgur.com/br9xW9i.png)

And here is the log output from that (pastbin to not crowd the ticket): <https://pastebin.com/1ptGvvMf>

## Post 145121 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-08-13T16:07:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145121#p145121 | page 1 | era: pre-1.18.1 -->

There's an appimage version pinned in the #launcher-support channel on the twow discord.  That's what I use.

## Post 145134 by Zorstka — 2025-08-13T16:53:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145134#p145134 | page 1 | era: pre-1.18.1 -->

> **Drubarrymooer wrote: Wed Aug 13, 2025 4:07 pm**
> There's an appimage version pinned in the #launcher-support channel on the twow discord.  That's what I use.

Do you sandbox it in any way or are just running as your main user.

The bottles flatpack is nice because it's sandboxed by design.

## Post 145136 by Zorstka — 2025-08-13T17:00:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145136#p145136 | page 1 | era: pre-1.18.1 -->

From #launcher-support

> there should be a flatpak version coming with a new launcher release before the patch release, I've made some nice progress with a very helpful community member
>  - Haaxor1689

Sweet!

## Post 145220 by Drubarrymooer (Grandmaster of Forum PvP) — 2025-08-13T21:40:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145220#p145220 | page 1 | era: pre-1.18.1 -->

I usually just run it directly.  Flatpak would be much nicer.  I'm glad to see they plan on releasing one.

## Post 145229 by Najimaru — 2025-08-13T21:54:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145229#p145229 | page 1 | era: pre-1.18.1 -->

Hello,

The new launcher is not working on Cachyos (arch).
With wine, bottles, lutris etc... nothing work.
Same for the appimage.

When I launch the appimage from terminal I get this error: Code: Select all

```
Starting Tauri application...
Could not create GBM EGL display: EGL_SUCCESS. Aborting...
```

Thanks

## Post 145722 by Zorstka — 2025-08-15T14:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145722#p145722 | page 1 | era: pre-1.18.1 -->

> **Najimaru wrote: Wed Aug 13, 2025 9:54 pm**
> Hello,
>
>  The new launcher is not working on Cachyos (arch).
>  With wine, bottles, lutris etc... nothing work.
>  Same for the appimage.
>
>  When I launch the appimage from terminal I get this error: Code: Select all
>
> ```
> Starting Tauri application...
> Could not create GBM EGL display: EGL_SUCCESS. Aborting...
> ```
>
>   Thanks

you might want to make a new thread. this one is focused around running the windows launcher exe in the flatpak version of bottles

## Post 145922 by Zorstka — 2025-08-15T20:57:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145922#p145922 | page 1 | era: pre-1.18.1 -->

Made a little more progress

![Image](https://i.imgur.com/EN3YY6k.png)

 - wine ge-proton10-12 in bottles
 - download the webview2 bootstrapper from msoft and install it first: [https://developer.microsoft.com/en-us/m ... H#download](https://developer.microsoft.com/en-us/microsoft-edge/webview2?form=MA13LH#download)
 - run the launcher

However my cursor isn't visible (see hover highlighting)
Can click radio buttons, but "Continue" does not work. No log output in terminal.

## Post 145927 by Zorstka — 2025-08-15T21:14:00Z
<!-- url: https://forum.turtlecraft.gg/viewtopic.php?p=145927#p145927 | page 1 | era: pre-1.18.1 -->

And some more progress, this time using lutris flatpak instead of bottles:

![Image](https://i.imgur.com/ztcwlw1.png)

Procedure:

 - New local game
 - Use wine version GE-Proton (Latest), make sure to pick a wine prefix path
 - Run .exe inside wine prefix: run the webview2 installer from [https://developer.microsoft.com/en-us/m ... H#download](https://developer.microsoft.com/en-us/microsoft-edge/webview2?form=MA13LH#download)
 - Run .exe inside wine prefix: TurtleWow.exe (the downloaded launcher)
 - Set executable to: <prefix_path>/drive_c/Games/TurtleWoW/turtle-wow.exe

Still no cursor for me but it's something.

