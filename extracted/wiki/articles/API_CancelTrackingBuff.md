---
title: "API CancelTrackingBuff"
url: "https://turtle-wow.fandom.com/wiki/API_CancelTrackingBuff"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-21T07:28:49Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CancelTrackingBuff

Cancels your current tracking buff, meaning skills like Find Minerals and Track Humanoids.

 CancelTrackingBuff();

### Example
<syntaxhighlight lang="lua">
				if ( arg1 == "RightButton" ) then
					local icon = GetTrackingTexture();
					if ( icon ) then
						CancelTrackingBuff();
					end
</syntaxhighlight>
