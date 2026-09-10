---
title: "API CancelAuction"
url: "https://turtle-wow.fandom.com/wiki/API_CancelAuction"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-27T11:20:41Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CancelAuction

Cancel the specified auction (on the "owner" list).

## Addon
Example from addon named Aux<syntaxhighlight lang="lua">
	function M.cancel_auction(index, on_success)
		if locked then return end
		locked = true
		CancelAuction(index)
		local send_signal, signal_received = signal()
		thread(when, signal_received, function()
			do (on_success or pass)() end
			locked = false
		end)
		thread(when, later(5), send_signal)
		event_listener('CHAT_MSG_SYSTEM', function(kill)
			if arg1 == ERR_AUCTION_REMOVED then
				send_signal()
				kill()
			end
		end)
	end
end
</syntaxhighlight>
