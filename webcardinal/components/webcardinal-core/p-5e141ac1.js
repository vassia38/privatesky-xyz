import{S as n}from"./p-e33c1597.js";import"./p-0c3518a5.js";import{a as o,U as t,g as r}from"./p-93b02efe.js";const{join:s}=t,a={getController:async t=>{const{controllers:a,basePath:e}=window.WebCardinal,i=r();if(a[i]||(a[i]={}),a[i][t])return a[i][t];const c=s(e,o(),n,"controllers",t+".js").pathname;try{const n=await import(c);return n.default||n}catch(n){return void console.error(n)}}},{join:e}=t,i={loadAndSetTranslationsForPage:async n=>{var t;const{basePath:r,mapping:s}=n,{state:a}=window.WebCardinal;if(!a)return console.error("WebCardinal.state is missing!"),!1;if(!a.activePage||!a.activePage.skin)return console.error("No skin found for current page!"),!1;if(!a.activePage.skin.name)return!1;const i=a.activePage.skin.name;window.WebCardinal.translations||(window.WebCardinal.translations={});const{translations:c}=window.WebCardinal;let{pathname:l}=window.location;if(l.endsWith("/")&&"/"!==l&&(l=l.slice(0,-1)),null===(t=c[i])||void 0===t?void 0:t[l])return!0;const p=s[l];if(!p)return console.warn("No HTML page mapping was found for the current pathname: "+l),!1;if(p.startsWith("http"))return console.warn("Translations for external sources are not supported yet!"),!1;let f=p.slice(0,p.lastIndexOf("."));0!==f.indexOf("/")&&(f="/"+f);const u=e(r,`${o()}${f}.translate.json`).pathname;try{const n=await fetch(u);if(n.ok){const o=await n.json();return c[i]||(c[i]={}),c[i][l]=o,!0}}catch(n){console.error(`Error while loading translation for "${i}" skin: ${u}`,n)}return a.activePage.skin.translations=!1,!1}};export{a as C,i as a}