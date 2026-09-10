---
title: "Template:Xclude"
url: "https://turtle-wow.fandom.com/wiki/Template:Xclude"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-20T02:27:58Z"
fetched: "2026-09-10T07:40:29Z"
is_turtle_content: false
patch: null
categories: ["Templates"]
---
# Template:Xclude

{{#switch: {{NAMESPACE: {} }}
 |#default = {{FULLPAGENAME: {} }} 
 | = 
    {{#ifeq: {{NAMESPACE: {} }} | {{NAMESPACE: Template{} }}
      | Template:{}            
      | {{PAGENAME: {} }}      
    }}
}}<noinclude>

</noinclude>
