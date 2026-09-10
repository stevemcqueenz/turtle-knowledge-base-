---
title: "API UIFrameFlash"
url: "https://turtle-wow.fandom.com/wiki/API_UIFrameFlash"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T13:06:39Z"
fetched: "2026-09-10T07:38:13Z"
is_turtle_content: false
patch: null
categories: ["FrameXML functions"]
---
# API UIFrameFlash

Flashes a frame by fading it in/out and showing/hiding it at the end.
<syntaxhighlight lang="lua">
 UIFrameFlash(frame, fadeInTime, fadeOutTime, flashDuration, showWhenDone, flashInHoldTime, flashOutHoldTime)
</syntaxhighlight>
# Parameters
## Arguments
   frame, fadeInTime, fadeOutTime, flashDuration, showWhenDone, flashInHoldTime, flashOutHoldTime

  ; frame
   Frame Pointer - frame to fade in / out.
  ; fadeInTime
   Number - duration of the fade in effect.
  ; fadeOutTime
   Number - duration of the fade out effect.
  ; flashDuration
   Number - number of seconds to keep repeating the fade in / out cycle.
  ; showWhenDone
   Boolean - should the frame be visible at the end?
  ; flashInHoldTime
   Number - number of seconds to hold the fully hidden state.
  ; flashOutHoldTime
   Number - number of seconds to hold the fully visible state.

## Returns
This function does not return any values.

# Example
<syntaxhighlight lang="lua">
 UIFrameFlash(UIParent, 1, 2, 15, true, 12, 0)
</syntaxhighlight>
## Result
The UIParent frame and all its children are at first hidden. The UIParent then fades in (1 second), fades out (2 seconds), stays hidden for 12 seconds, and fades in again, remaining shown this time.

# Details
Several important things to note when using UIFrameFlash:

- Flash cycle starts at hidden. If you call UIFrameFlash on an already visible frame, it'll be hidden.
- Flashing works by modifying the frame's alpha value (:SetAlpha). All of the frame's children fade with their parent frame.
- You can not flash the WorldFrame (fails silently).
- If you try to flash an already flashing frame, the function fails silently. You may use [UIFrameIsFading (frame)](API UIFrameIsFading) to detect if a frame is already flashing, and [UIFrameFlashRemoveFrame (frame)](API UIFrameFlashRemoveFrame) to stop the flashing cycle prematurely (make sure to set the desired alpha value manually afterwards).
- Once flashDuration expires, the frame's alpha is bluntly set to either 1 or 0 (depending on showWhenDone). Make sure to set a flashDuration value to coincide with the end of a fade in (if you want the frame to remain visible) or fade out (if not). Otherwise, things will look awkward.

## Addon
Example from addon named TNE LowHealthWarning<syntaxhighlight lang="lua">
function TNE_LowHealth_FlashFrame(value, regular, critical, frame, state)

  local REGULAR_FLASH, CRITICAL_FLASH = 1, 2

  -- disable
  if (value > regular or TNE_LowHealth_CombatCheck(state) or UnitIsDeadOrGhost("player")) then
    if (UIFrameIsFlashing(frame) or UIFrameIsFading(frame)) then
      TNE_LowHealth_FlashFrameStop(frame, state)
    end
  -- regular flash
  elseif (value > critical) then
    if (not (LowHealthWarningFrame.states[state] == REGULAR_FLASH)) then
      if (UIFrameIsFlashing(frame)) then
        --frame.flashDuration = frame.flashDuration + 10
        frame.fadeInTime = 0.4
        frame.fadeOutTime = 0.6
        frame.flashInHoldTime = 1
      else
        UIFrameFlash(frame, 0.4, 0.6, -1, nil, 1, 0)
      end
      LowHealthWarningFrame.states[state] = REGULAR_FLASH
    end
  -- critical flash
  else
    if (not (LowHealthWarningFrame.states[state] == CRITICAL_FLASH)) then
      if (TNE_LowHealth_HealthEmote and state == "UNIT_HEALTH") then DoEmote("healme") end
      if (TNE_LowHealth_ManaEmote and state == "UNIT_MANA") then DoEmote("oom") end
      if (UIFrameIsFlashing(frame)) then
        --frame.flashDuration = frame.flashDuration + 10
        frame.fadeInTime = 0.2
        frame.fadeOutTime = 0.8
        frame.flashInHoldTime = 0
      else
        UIFrameFlash(frame, 0.2, 0.8, -1, nil, 0, 0)
      end
      LowHealthWarningFrame.states[state] = CRITICAL_FLASH
    end
  end

end
</syntaxhighlight>
