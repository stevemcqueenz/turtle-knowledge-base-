---
title: "API ResetDisabledAddOns"
url: "https://turtle-wow.fandom.com/wiki/API_ResetDisabledAddOns"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T03:43:24Z"
fetched: "2026-09-10T07:38:12Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API ResetDisabledAddOns

## Addon
Example from addon named LoadIT<syntaxhighlight lang="lua">
elseif (c == 'reset_all') then
		ResetDisabledAddOns();
		LoadIT_Print('All disabled addon states have been ' .. LO_RED .. 'RESET');
</syntaxhighlight>
