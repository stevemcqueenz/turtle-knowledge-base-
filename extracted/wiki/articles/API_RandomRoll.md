---
title: "API RandomRoll"
url: "https://turtle-wow.fandom.com/wiki/API_RandomRoll"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:37:09Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API RandomRoll

Performs a random roll between two numbers. <syntaxhighlight lang="lua">
RandomRoll([low, [high]])
</syntaxhighlight>

## Parameters
**Arguments**

   (low, high)

  ; low
   Integer - lowest number (default 1)
  ; high
   Integer - highest number (default 100)

**Returns**

   nil

## Example
  RandomRoll(1, 10)
**Result:** *<Your name>* rolls. *<number>* (1-10)

## Details
  * If only *low* is provided, it is taken as the highest number
  * Does the same as **/random low high**

## Addon
Example from addon named Shootyepgp<syntaxhighlight lang="lua">
-- Function to execute commands
local function ExecuteCommand(command)
    if command == "roll" then
        RandomRoll(1, 100)
    elseif command == "roll 99" then
        RandomRoll(1, 99)
	elseif command == "roll 101" then
        RandomRoll(1, 101)
    elseif command == "roll 50" then
        RandomRoll(1, 98)
    elseif command == "EP roll" then
        if sepgp and sepgp.RollCommand then
            sepgp:RollCommand(false, false, 0)
        end
    elseif command == "EP sr" then
        if sepgp and sepgp.RollCommand then
            sepgp:RollCommand(true, false, 0)
        end
</syntaxhighlight>
