import{a as e,M as n,b as t,P as o,V as a,c as i,F as r,d as s,e as l,T as c,I as u,f,g as d,h,i as b}from"./p-e33c1597.js";import{p}from"./p-794858b0.js";import{c as m,d as y}from"./p-0c3518a5.js";function v(e,n,t){let o=null;for(;e;){if(e.matches(n)){o=e;break}if(t&&e.matches(t))break;e=e.parentElement}return o}function x(n,{key:t,value:o}){if(!e.includes(t))if(["innerHTML","innerText"].includes(t)&&console.warn(`Model property "${t}" can be short handed, try "${t.substr(5).toLowerCase()}" instead!\n`,"target element:",n),["data-tag","data-view-model"].includes(t)&&console.warn(`Model property "${t}" can be shorthanded, try "${t.substr(5)}" instead!\n`,"target model:",n.getAttribute("data-model")),function(e){return["value","innerText","innerHTML"].includes(e)}(t=function(e){switch(e){case"model":return"data-view-model";case"tag":return"data-tag";case"text":return"innerText";case"html":return"innerHTML";default:return e}}(t))){if("INPUT"===n.tagName&&"file"===n.getAttribute("type")&&"value"===t)return;n[t]=o}else if("class"!==t)"boolean"!=typeof o?"string"!=typeof o?"object"!=typeof o||(n[t]=o):n.setAttribute(t,o):o?n.setAttribute(t,""):n.removeAttribute(t);else{if(""===o)return void(n.className="");if("string"==typeof o)return void n.classList.add(o);if("object"==typeof o){for(const[e,t]of Object.entries(o))t?n.classList.add(e):n.classList.remove(e);return}}}function w(e,n){return"input"===e.tagName.toLowerCase()&&"checkbox"===e.getAttribute("type")&&"checked"===n||"value"===n}function $(e,r,s=n,l=null){t.includes(e.tagName.toLowerCase())||e.tagName.startsWith(o.toUpperCase())||Array.from(e.attributes).forEach((t=>{const o=t.nodeName;let c=t.nodeValue;o!==a&&o!==i&&c.startsWith(s)&&(c=c.slice(1),l&&(c=O(l,c)),x(e,{key:o,value:r.getChainValue(c)}),s===n&&w(e,o)&&M(e,r,c),r.onChange(c,(()=>{x(e,{key:o,value:r.getChainValue(c)})})),r.hasExpression(c)&&(x(e,{key:o,value:r.evaluateExpression(c)}),s===n&&w(e,o)&&M(e,r,c),r.onChangeExpressionChain(c,(()=>{x(e,{key:o,value:r.evaluateExpression(c)})}))))}))}function g(e){e.nodeType===Node.ELEMENT_NODE&&(e.removeAttribute("slot"),e.removeAttribute("hidden"))}function M(e,n,t){const o=e.tagName.toLowerCase();["input","textarea"].includes(o)?e.addEventListener("input",(a=>{const i=a.target;"input"===o&&"checkbox"===e.getAttribute("type")&&n.setChainValue(t,i.checked),"input"===o&&"file"===e.getAttribute("type")?n.setChainValue(t,Array.from(i.files)):n.setChainValue(t,i.value)})):"select"===o&&e.addEventListener("change",(e=>{n.setChainValue(t,e.target.value)}))}function k(e,n,t){if(!n.getChainValue(t))return;const o="input"===e.tagName.toLowerCase()&&"checkbox"===e.getAttribute("type")?"checked":"value";M(e,n,`${t}.${o}`)}function A(e,n){return Array.from(e.attributes).some((e=>e.nodeName===n))}function T(e,n){return e.filter((e=>e.getAttribute("slot")===n))}function j(e,n){return T(e,n).map((e=>e.outerHTML)).join("")}function P(e){for(;e.children.length>0;)e.children[0].remove()}function N(e){for(;e.childNodes.length>0;)e.childNodes[0].remove()}function O(...e){return e.filter((e=>null!=e)).filter(String).join(".")}function E(e){return!e.host.hasAttribute("translations")&&e.host.hasAttribute("enable-translations")?(console.warn(['Attribute "enable-translations" is deprecated!','Use "translations" instead!'].join("\n"),"target:",e.host),!0):!!e.translations||(window.WebCardinal&&window.WebCardinal.state&&window.WebCardinal.state.activePage&&window.WebCardinal.state.activePage.skin&&"boolean"==typeof window.WebCardinal.state.activePage.skin.translations?e.translations||(e.translations=window.WebCardinal.state.activePage.skin.translations):console.error('"translations" can not be obtained from WebCardinal.state!\n'),e.translations)}async function C(e){try{return await p(e.getRoutingStateEvent)}catch(e){return console.error('Routing configuration can not be obtained from "webc-app-loader"!\n',e),null}}function W(e,n,t){const o=n.getChainValue(t);if(o){for(const[n,t]of Object.entries(o))x(e,{key:n,value:t});if(!0===o._saveElement){for(const n in e)"function"==typeof e[n]&&(e[n]=e[n].bind(e));o.getElement||n.setChainValue(t,Object.assign(Object.assign({},o),{getElement:()=>e}))}}if(n.hasExpression(t)){const o=n.evaluateExpression(t);for(const[n,t]of Object.entries(o))x(e,{key:n,value:t})}}function H(e){return e.nodeType===Node.ELEMENT_NODE}function I(e){return e.nodeType===Node.TEXT_NODE&&e.nodeValue&&e.nodeValue.trim()}function L(e,o,a,i=null){if(t.includes(e.nodeName.toLowerCase()))return;if(e.nodeType!==Node.TEXT_NODE||!e.nodeValue||!e.nodeValue.trim())return;const r=[...e.nodeValue.matchAll(/\{\{\s*([^\s}}]+)\s*\}\}/g)];if(!r.length)return;const s=r.map((e=>({expression:e[0],chainWithPrefix:e[1]}))).filter((({chainWithPrefix:e})=>e.startsWith(n)||e.startsWith(c))).map((e=>{let{chainWithPrefix:t}=e;const r=t.startsWith(c);let s=e.chainWithPrefix.slice(1);!r&&i&&(s=O(i,s),t=`${n}${s}`);const l=r?a:o;return Object.assign(Object.assign({},e),{chain:s,isTranslation:r,isModel:!r,isModelExpression:l.hasExpression(s),evaluateModelExpression:()=>l.evaluateExpression(s),model:l,getChainValue:()=>{let e=l.getChainValue(s);if(r&&void 0===e){const{skin:n}=window.WebCardinal.state.activePage,{pathname:t}=window.location;console.warn(`No translations found for skin "${n.name}", page "${t}" and chain "${s}"`),e=s}return e}})}));if(!s.length)return;const l=e.nodeValue,u=()=>{let n=l;s.forEach((({expression:e,getChainValue:t,isModelExpression:o,evaluateModelExpression:a})=>{let i=t();["number","boolean"].includes(typeof i)&&(i=i.toString()),!i&&o&&(i=o?a():""),n=n.replace(e,i||"")})),e.nodeValue=n};u(),s.filter((e=>e.isModel)).forEach((({model:e,chain:n,isModelExpression:t})=>{e.onChange(n,(()=>{u()})),t&&e.onChangeExpressionChain(n,(()=>{u()}))}))}const U={bindElement:(e,p={model:null,translationModel:null})=>{const{model:v,translationModel:x,chainPrefix:w,enableTranslations:M=!1,recursive:j=!1}=p;if(v){if(I(e))L(e,v,x,w);else if(H(e)){const P=e;if(t.includes(P.tagName.toLowerCase()))return;if(P.hasAttribute(h)){let e;P.hasAttribute(i)&&(e=P.getAttribute(i),(null==e?void 0:e.startsWith(n))&&(e=e.slice(1)));const t=O(w,e);P[b]=()=>v.hasExpression(t)?v.evaluateExpression(t):v.toObject(t)}const E=A(P,u),C=A(P,r);if(E&&C)console.error("Cannot use both data-if and data-for attributes on the same element",P);else if(E)!function(e,t,{model:o,translationModel:a,chainPrefix:i,enableTranslations:r=!1}={model:null,translationModel:null}){let s=e.getAttribute(u);if(!s.startsWith(n))return void console.warn(`Attribute "${u}" doesn't start with the chain prefix!`);s=s.slice(1);const l=O(i,s),h=Array.from(e.children);let b,p=T(h,f);const m=T(h,d);p.length||m.length||(p=Array.from(e.childNodes)),N(e);const y=async n=>{let s;if(n instanceof Promise)try{s=await n}catch(e){console.error("data-if condition promise failed",e),s=!1}else s=!!n;const l=b!==s;b=s,l&&(()=>{const n=b?p:m;N(e),n.forEach((n=>{const s=n.cloneNode(!0);g(s),e.appendChild(s),t(s,{model:o,translationModel:a,chainPrefix:i,enableTranslations:r,recursive:!0})}))})()};y(o.getChainValue(l)),$(e,o,n,i),r&&$(e,a,c,i),o.onChange(l,(()=>{y(o.getChainValue(l))})),o.hasExpression(l)&&(y(o.evaluateExpression(l)),o.onChangeExpressionChain(l,(()=>{y(o.evaluateExpression(l))})))}(P,U.bindElement,p);else if(C)!function(e,t,{model:o,translationModel:a,chainPrefix:i,enableTranslations:u=!1}={model:null,translationModel:null}){let f=e.getAttribute(r);if(!f.startsWith(n))return void console.warn(`Attribute "${r}" doesn't start with the chain prefix!`);f=f.slice(1);const d=O(i,f);let h=o.getChainValue(d);if(!Array.isArray(h))return void console.error(`Attribute "${r}" (${f}) must be a chain to an array in the model!`,e);let b=h.length;const p=e.hasAttribute(s),v=[],x=[];for(;e.childNodes.length>0;){const n=e.childNodes[0];H(n)&&n.getAttribute("slot")===l?v.push(n):x.push(n),n.remove()}let w=[];const M=()=>{if(!b)return N(e),void v.forEach((n=>{const r=n.cloneNode(!0);g(r),e.appendChild(r),t(r,{model:o,translationModel:a,chainPrefix:i,enableTranslations:u,recursive:!0})}));h.forEach(((n,i)=>{const r=[];x.forEach((e=>{const n=e.cloneNode(!0),s=O(d,i);t(n,{model:o,translationModel:a,chainPrefix:s,enableTranslations:u,recursive:!0}),r.push(n)})),w[i]?r.forEach(((e,n)=>{document.createElement("div").appendChild(w[i][n].cloneNode(!0));const t=m(e),o=m(w[i][n]);y(t,o,w[i][n])})):(r.forEach((n=>{e.appendChild(n)})),w[i]=r)}));for(let e=b;e<w.length;e++)w[e].forEach((e=>{N(e),e.remove()}));w.splice(b)},k=(n,t=!1)=>{Array.isArray(n)||(console.error(`Attribute "${r}" must be an array in the model!`),n=[]);const o=b!==(n=n||[]).length;h=n,b=h.length,p?M():(t||o)&&(N(e),w=[],M())};M(),$(e,o,n,i),u&&$(e,a,c,i),o.onChange(d,(({targetChain:e})=>{const n=d===e;k(o.getChainValue(d),n)})),o.hasExpression(d)&&o.onChangeExpressionChain(d,(()=>{k(o.evaluateExpression(d))}))}(P,U.bindElement,p);else{const e=P.hasAttribute(a),t=P.hasAttribute(i);if(e||t){let o;if(e?o=P.getAttribute(a):(console.warn(`Attribute "${i}" is deprecated for binding! Use the "${a}" key attribute instead.`,P),o=P.getAttribute(i)),o.startsWith(n)){o=o.slice(1);const e=O(w,o);P.setAttribute(a,`${n}${e}`),t&&P.setAttribute(i,`${n}${e}`),W(P,v,e),k(P,v,e),v.onChange(e,(()=>W(P,v,e))),v.hasExpression(e)&&v.onChangeExpressionChain(e,(()=>W(P,v,e)))}else console.warn(`Invalid chain found! (chain: "${o}")!\n`,`A valid chain must start with "${n}".\n`,"target element:",P)}P.tagName.startsWith(o.toUpperCase())||$(P,v,n,w),M&&$(P,x,c,w),Array.from(P.childNodes).filter(I).forEach((e=>{L(e,v,x,w)})),j&&Array.from(P.children).forEach((e=>{U.bindElement(e,p)}))}}}else{const n=H(e)?e.tagName.toLowerCase():"text node";console.warn(`No model found for: ${n}!`)}},bindChildNodes:(e,n)=>{Array.from(e.childNodes).forEach((e=>{U.bindElement(e,Object.assign({},n))}))}};export{U as B,M as a,$ as b,k as c,T as d,j as e,P as f,v as g,N as h,A as i,O as j,E as k,C as l,g as r,x as s}