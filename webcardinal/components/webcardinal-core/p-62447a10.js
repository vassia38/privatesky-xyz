import{V as t,c as e,M as n}from"./p-e33c1597.js";function i(i){let r=i.hasAttribute(t)?i.getAttribute(t):null;if(!r&&i.hasAttribute(e)&&(console.warn(`Attribute ${e} is deprecated for binding! Use the ${t} key attribute instead.`,i),r=i.getAttribute(e)),!r)return"";if(!r.startsWith(n)){const t=i.tagName.toLowerCase();return console.error([`Invalid chain found for ${t} (chain: "${r}")!`,`A valid chain must start with "${n}".`].join("\n")),""}return r}export{i as e}