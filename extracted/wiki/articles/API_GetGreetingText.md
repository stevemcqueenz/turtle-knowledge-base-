---
title: "API GetGreetingText"
url: "https://turtle-wow.fandom.com/wiki/API_GetGreetingText"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-03-02T11:26:38Z"
fetched: "2026-09-10T07:38:10Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API GetGreetingText

## Addon
Example from addon named MyQuests<syntaxhighlight lang="lua">
--[ ********************************************************************* --]( ********************************************************************* --)
--[ GetGreetingText                                                       --]( GetGreetingText                                                       --)
--[   Returns the greeting tet of the current target.                     --](   Returns the greeting tet of the current target.                     --)
MQOverride_GetGreetingText = GetGreetingText;
function GetGreetingText()
  mq.IO.dprint("[GetGreetingText]");

  if(myquests.IsEnabled) then
    if(mq.QuestCache) then
      return mq.QuestCache.greetingText;
    end
  end

  return MQOverride_GetGreetingText();  
end
</syntaxhighlight>
