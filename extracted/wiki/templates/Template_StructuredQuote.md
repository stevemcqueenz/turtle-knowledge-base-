---
title: "Template:StructuredQuote"
url: "https://turtle-wow.fandom.com/wiki/Template:StructuredQuote"
source_type: "community wiki (turtle-wow.fandom.com), not an official source"
revision: "2024-11-14T21:18:43Z"
fetched: "2026-09-10T07:40:28Z"
is_turtle_content: false
patch: null
categories: []
---
# Template:StructuredQuote

<blockquote class="pull-quote">
	{}
	<p style="text-align: right"><cite>—{}{{#if:{}|, to {}}}{{#if:{}|, {}}}{{#if:{}|, {}}}</cite></p>
</blockquote>
<noinclude>
## Description
A template used for displaying Structured Quotes ( *<nowiki></nowiki>* ). If you want to unlock the full potential of Structured Quotes, please avoid using this template directly, and consider *<nowiki></nowiki>* markup instead.
See https://community.fandom.com/wiki/Help:Structured_Quotes for extra information about Structured Quotes.

## Syntax
<pre>

</pre>

## Samples
<pre>

</pre>

## TemplateData
<templatedata>
	{
		"params": {
			"text": {
				"label": "Quote text",
				"description": "quote text",
				"type": "content",
				"required": true
			},
			"speaker": {
				"label": "Person(s) quoted",
				"description": "individual(s) who uttered or wrote the quoted words (wikitext links, comma-separated)",
				"type": "content",
				"required": true
			},
			"receiver": {
				"label": "Person(s) to whom the quote was spoken",
				"description": "person the quote was spoken to (wikitext links, comma-separated)",
				"type": "content",
				"suggested": true
			},
			"attribution": {
				"label": "Attribution(s)",
				"description": "attribution (wikitext links, comma-separated)",
				"type": "content",
				"suggested": true
			},
			"source": {
				"label": "Quote source",
				"description": "place where it was spoken (wikitext link)",
				"type": "content",
				"suggested": true
			}
		},
		"format": "block"
	}
</templatedata>
</noinclude>
