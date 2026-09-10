---
title: "API CancelLogout"
url: "https://turtle-wow.fandom.com/wiki/API_CancelLogout"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2026-02-26T18:07:12Z"
fetched: "2026-09-10T07:38:07Z"
is_turtle_content: false
patch: null
categories: ["API Functions"]
---
# API CancelLogout

## Addon
Example from addon named Recap<syntaxhighlight lang="lua">
	-- function overrides: recap.NormalExit is true on a successful /quit or /logout
	Recap_OldQuit = Quit
	Recap_OldLogout = Logout
	Recap_OldCancelLogout = CancelLogout
	Quit = function() recap.NormalExit = true; Recap_OldQuit(); end
	Logout = function() recap.NormalExit = true; Recap_OldLogout(); end
	CancelLogout = function() recap.NormalExit = nil; Recap_OldCancelLogout(); end

end
</syntaxhighlight>Example from addon library named AceComm-2.0<syntaxhighlight lang="lua">
function AceComm.hooks:CancelLogout(orig)
	shutdown = false
	if id then
		self:CancelScheduledEvent(id)
		id = nil
	end
	RefixAceCommChannelsAndEvents()
	loggingOut = false
	return orig()
end
</syntaxhighlight>
