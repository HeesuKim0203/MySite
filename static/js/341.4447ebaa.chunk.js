(this.webpackJsonplaravel_project_view=this.webpackJsonplaravel_project_view||[]).push([[341],{462:function(a,e){!function(a){var e={pattern:/\\[\\(){}[\]^$+*?|.]/,alias:"escape"},n=/\\(?:x[\da-fA-F]{2}|u[\da-fA-F]{4}|u\{[\da-fA-F]+\}|c[a-zA-Z]|0[0-7]{0,2}|[123][0-7]{2}|.)/,t="(?:[^\\\\-]|"+n.source+")",i=RegExp(t+"-"+t),r={pattern:/(<|')[^<>']+(?=[>']$)/,lookbehind:!0,alias:"variable"};a.languages.regex={charset:{pattern:/((?:^|[^\\])(?:\\\\)*)\[(?:[^\\\]]|\\[\s\S])*\]/,lookbehind:!0,inside:{"charset-negation":{pattern:/(^\[)\^/,lookbehind:!0,alias:"operator"},"charset-punctuation":{pattern:/^\[|\]$/,alias:"punctuation"},range:{pattern:i,inside:{escape:n,"range-punctuation":{pattern:/-/,alias:"operator"}}},"special-escape":e,charclass:{pattern:/\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},escape:n}},"special-escape":e,charclass:{pattern:/\.|\\[wsd]|\\p{[^{}]+}/i,alias:"class-name"},backreference:[{pattern:/\\(?![123][0-7]{2})[1-9]/,alias:"keyword"},{pattern:/\\k<[^<>']+>/,alias:"keyword",inside:{"group-name":r}}],anchor:{pattern:/[$^]|\\[ABbGZz]/,alias:"function"},escape:n,group:[{pattern:/\((?:\?(?:<[^<>']+>|'[^<>']+'|[>:]|<?[=!]|[idmnsuxU]+(?:-[idmnsuxU]+)?:?))?/,alias:"punctuation",inside:{"group-name":r}},{pattern:/\)/,alias:"punctuation"}],quantifier:{pattern:/(?:[+*?]|\{(?:\d+,?\d*)\})[?+]?/,alias:"number"},alternation:{pattern:/\|/,alias:"keyword"}},["actionscript","coffescript","flow","javascript","typescript","vala"].forEach((function(e){var n=a.languages[e];n&&(n.regex.inside={"language-regex":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/i,lookbehind:!0,inside:a.languages.regex},"regex-flags":/[a-z]+$/i,"regex-delimiter":/^\/|\/$/})}))}(Prism)}}]);
//# sourceMappingURL=341.4447ebaa.chunk.js.map