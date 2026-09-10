---
title: "API ScrollingMessageFrame AddMessage"
url: "https://turtle-wow.fandom.com/wiki/API_ScrollingMessageFrame_AddMessage"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-23T11:54:55Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["Widget methods"]
---
# API ScrollingMessageFrame AddMessage

Outputs text to a local MessageFrame, with optional color id.
 MessageFrame:AddMessage(text[,r,g,b[,id]]);

## Parameters
### Arguments
   (String text, Number red, Number green, Number blue, Number id)

  ; text
   The string message to output
  ; r
   The intensity of the red component. A number between 0.0 and 1.0
  ; g
   The intensity of the green component. A number between 0.0 and 1.0
  ; b
   The intensity of the blue component. A number between 0.0 and 1.0
  ; id
   A number that classifies the line of text, for later changing the color

### Returns
  ; nil

## Example
 DEFAULT_CHAT_FRAME:AddMessage("Testing", 1.0, 0.0, 0.0);
Outputs "Testing" on a single line in your default chat window -- in red.

## Escape Sequences
It is also possible to control the text of parts of lines in the MessageFrame with escape sequences in text.
### Set color
Syntax:
 |cAARRGGBB  colored text  
Example:
 |cFFFF0000This Will Be In Red

### Reset color
Syntax:
 |cAARRGGBB  colored text  **|r**  uncolored text
Example:
 |cFF00FF00In Green**|r**Default Color
