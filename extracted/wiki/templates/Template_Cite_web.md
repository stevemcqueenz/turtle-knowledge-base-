---
title: "Template:Cite web"
url: "https://turtle-wow.fandom.com/wiki/Template:Cite_web"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2022-01-19T16:52:17Z"
fetched: "2026-09-10T07:40:22Z"
is_turtle_content: false
patch: null
categories: ["General wiki templates"]
---
# Template:Cite web

<includeonly>{{
1. if: {{#if: {} | {{#if: {} |1}}}}
  ||Error on call to [Template:cite web](Template:cite web): Parameters **url** and **title** must be specified
}}{{
1. if: {}{} 
  | {{#if: {{#if: {}| {{#if: {} |1}}}}
    ||Error on call to [template:cite web](template:cite web): Parameters **archiveurl** and **archivedate** must be both specified or both omitted
}}
}}{{#if: {}{}
  | {{#if: {}
    | [{{#if: {}
      | {}{{#if: {} | , {} }}
      | {}
    }}]({})
    | {{#if: {}
      | {}{{#if: {} | , {} }}
      | {}
    }}
  }}
}}{{#if: {}{}
  | {{#if: {}| <nowiki>;</nowiki>&#32;{} }}
}}{{#if: {}{}|
    {{#if: {}
    | &#32;({})
    | {{#if: {}
      | {{#if: {}
        | &#32;({} {})
        | &#32;({})
      }}
    }}
  |}}
}}{{#if: {}{}
  | .&#32;}}{{
  #if: {}
  | &#32;{}: 
}}{{#if: {}
    | {{#if: {} | {{#if: {} | [{} {}] }}}}
    | {{#if: {} | {{#if: {} | [{} {}] }}}}
}}{{#if: {} | &#32;({}) 
}}{{#if: {}
  | &#32;({})
}}{{#if: {}
  | .&#32;*{}*
}}{{#if: {}
  | &#32;{}
}}{{#if: {}
  | .&#32;{}{{#if: {}{}
    | 
    | {{#if: {}{}{} || }}
  }}
}}{{#if: {}{}
  ||{{#if: {}
    | &#32;({})
    | {{#if: {}
      | {{#if: {}
        | &#32;({} {})
        | &#32;({})
      }}
    }}
  }}
}}.{{#if: {}
  | &#32;Archived from [{} the original] on {{#time:F j, Y|{}}}{{#if: {} | , {} }}.
}}{{#if: {}
  | &#32;Retrieved on {{#time:F j, Y|{}}}{{#if: {} | , {} }}.
}}{{#if: {}
  | &#32;Retrieved on {}, {}.
}}{{#if: {}
  | &#32;Retrieved on {} {}.
}}{{#if: {} 
  | &nbsp;“{}”
}}</includeonly><noinclude>
</noinclude>
