import{r as t,c as e,h as s,g as o,d as n}from"./p-f444b98a.js";import{C as i}from"./p-fe9940b0.js";import{m as a,a as r,s as h,b as c,c as l,d as p,e as u,f as d,g as m,h as f,i as g,j as b,k as y,l as v,n as k,o as w,p as P}from"./p-1eda916e.js";import{A as L}from"./p-4c5a9e2c.js";const E=class{constructor(s){t(this,s),this.menuItems=null,this.hamburgerMaxWidth=600,this.showHamburgerMenu=!1,this.showNavBar=!1,this.menuItemClicked=e(this,"menuEvent",7),this.needMenuItemsEvt=e(this,"needMenuItems",7)}checkIfHamburgerIsNeeded(){this.showHamburgerMenu=document.documentElement.clientWidth<this.hamburgerMaxWidth}componentDidLoad(){this.checkIfHamburgerIsNeeded()}handleClick(t){t.preventDefault();let e=t.target.value;for(let t=0;t<this.menuItems.length;t++)this.menuItems[t].active=e===this.menuItems[t];this.menuItemClicked.emit(t.target.value),this.menuItems=[...this.menuItems]}toggleNavBar(){this.showNavBar=!this.showNavBar}componentWillLoad(){this.menuItems||this.needMenuItemsEvt.emit(t=>{this.menuItems=t})}renderItem(t){let e=this.itemRenderer?this.itemRenderer:"psk-menu-item-renderer",o=[];if(t.children)for(let e=0;e<t.children.length;e++)o.push(this.renderItem(t.children[e]));return s(e,{onclick:t=>this.handleClick(t),active:!!t.active&&t.active,children:o,hamburger:this.showHamburgerMenu,value:t})}render(){let t=[];for(let e=0;e<this.menuItems.length;e++)t.push(this.renderItem(this.menuItems[e]));let e=this.menuItems.find(t=>t.active);if(this.showHamburgerMenu){t=t.map(t=>s("li",{onClick:this.toggleNavBar.bind(this),class:"nav-item"},t));let o="collapse navbar-collapse "+`${1==this.showNavBar?"show":""}`;return s("nav",{class:"navbar navbar-dark "},s("a",{class:"navbar-brand",href:"#"},e?e.name:"Home"),s("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse",onClick:this.toggleNavBar.bind(this),"aria-label":"Toggle navigation"},s("span",{class:"navbar-toggler-icon"})),s("div",{class:o},s("ul",{class:"navbar-nav mr-auto"},t)))}return t}static get style(){return":host{width:100%}.navbar{padding:.5rem 1rem .5rem 0}.navbar-brand{padding:5px}"}};!function(t,e,s,o){var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(a=(i<3?n(a):i>3?n(e,s,a):n(e,s))||a);i>3&&a&&Object.defineProperty(e,s,a)}([i()],E.prototype,"itemRenderer",void 0);const T=[{name:"Home",path:"/home",icon:"fa-home",type:"route",component:"app-home",exact:!0},{name:"PSK Components",path:"/psk-components",icon:"fa-bars",type:"abstract",children:[{name:"App Menu",path:"/psk-components/app-menu",component:"app-menu-usage",icon:"fa-bars",type:"route",exact:!0},{name:"App Router",component:"app-router-usage",path:"/psk-components/app-router",icon:"fa-bars",type:"route",exact:!0},{name:"Attachments List",component:"attachment-list-usage",path:"/psk-components/attach-list",icon:"fa-bars",type:"route",exact:!0},{name:"Files Chooser",component:"files-chooser-usage",path:"/psk-components/files-chooser",icon:"fa-bars",type:"route",exact:!0},{name:"Modal",component:"modal-usage",path:"/psk-components/modal",icon:"fa-bars",type:"route",exact:!0},{name:"Page not found",component:"page-not-found-usage",path:"/psk-components/page-not-found",icon:"fa-bars",type:"route",exact:!0},{name:"PIN Popup",component:"pin-popup-usage",path:"/psk-components/pin-popup",icon:"fa-bars",type:"route",exact:!0},{name:"UI Loader",component:"ui-loader-usage",path:"/psk-components/ui-loader",icon:"fa-bars",type:"route",exact:!0},{name:"User Profile",path:"/psk-components/user-profile",icon:"fa-bars",type:"route",component:"user-profile-usage",exact:!0}]},{name:"Controllers",path:"/controllers",icon:"fa-cog",type:"route",exact:!0},{name:"Events",path:"/events",icon:"fa-bolt",type:"route",exact:!0},{name:"Services",path:"/services",icon:"fa-server",type:"route",exact:!0},{name:"Themes",path:"/themes",icon:"fa-paint-brush",type:"route",component:"psk-themes",exact:!0}];class C{constructor(t){this.element=o(t),this.element.addEventListener("menuEvent",t=>{t.stopImmediatePropagation(),"href"===t.detail.type&&(window.location.href=t.detail.path);let e=new CustomEvent("routeChanged",{bubbles:!0,cancelable:!1,detail:t.detail});this.element.dispatchEvent(e)}),this.element.addEventListener("needMenuItems",t=>{let e=t.detail;e&&"function"==typeof e?e(T):console.error("Callback was not properly provided!")}),this.element.addEventListener("getUserInfo",t=>{let e=t.detail;e&&"function"==typeof e?e(null,{username:"PSK Components",email:"info@privatesky.ro",avatar:"https://i.ibb.co/ZTcVc3L/psk-component.png"}):console.error("Callback was not properly provided!")})}}const O=class{constructor(s){t(this,s),this.mobileLayout=!1,this.controller||(this.controller=new C(this)),this.routeChangedEvent=e(this,"routeChanged",7)}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<650}componentWillLoad(){this.checkLayout()}render(){return s("div",{class:`global_container ${this.mobileLayout?"is-mobile":""}`},s("aside",null,s("psk-user-profile",null),s("app-menu",{"item-renderer":"sidebar-renderer",hamburgerMaxWidth:650}," "),!1===this.mobileLayout?s("div",{class:"nav-footer"},"version 0.1"):null),s("section",null,s("nav",null),s("psk-app-router",null," "),!0===this.mobileLayout?s("div",{class:"nav-footer bottom-stick"},"version 0.1"):null))}static get style(){return"div.global_container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:start;justify-content:flex-start;height:100%;background-color:#f8f9fc}div.global_container.is-mobile{width:100%;-ms-flex-direction:column;flex-direction:column}.is-mobile aside{width:100%;height:auto;overflow:inherit}aside{height:100%;background-color:#4e73df;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(10%,#4e73df),to(#224abe));background-image:linear-gradient(180deg,#4e73df 10%,#224abe);color:#fff;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26);-ms-flex-order:1;order:1;-ms-flex:1;flex:1;min-width:200px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:auto}nav{width:100%;height:4.375rem;background-color:#fff!important;-webkit-box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important;box-shadow:0 .15rem 1.75rem 0 rgba(58,59,69,.15)!important}.nav-footer{text-align:center;width:100%;padding:10px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#142b86;font-size:85%}.nav-footer.bottom-stick{color:#fff;background:#224abe}section{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;overflow:hidden auto}app-menu,psk-app-router{-ms-flex-positive:1;flex-grow:1}psk-user-profile{-ms-flex-direction:column;flex-direction:column}h1{font-size:1.4rem;font-weight:500;color:#fff;padding:0 12px}section{-ms-flex-order:2;order:2;-ms-flex:8;flex:8}"}},x=class{constructor(s){t(this,s),this.menuItems=[],this.needMenuItemsEvt=e(this,"needMenuItems",7)}componentWillLoad(){this.needMenuItemsEvt.emit(t=>{this.menuItems=t})}renderItems(t){return t.map(t=>t.children?this.renderItems(t.children):s("stencil-route",{url:t.path,exact:t.exactMatch,component:t.component,componentProps:t.componentProps}))}render(){let t=this.renderItems(this.menuItems);return s("div",{class:"app_container"},s("stencil-router",null,s("stencil-route-switch",{scrollTopOffset:0},t)))}},S=class{constructor(s){t(this,s),this.userInfo=null,this.getUserInfoEvent=e(this,"getUserInfo",7)}componentWillLoad(){this.userInfo||this.getUserInfoEvent.emit((t,e)=>{t?console.error("Error getting user info",t):this.userInfo=e})}render(){return s(this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer",{userInfo:this.userInfo})}},j=class{constructor(e){t(this,e),this.group=null,this.match=null,this.componentProps={},this.exact=!1,this.scrollOnNextRender=!1,this.previousMatch=null}computeMatch(t){const e=null!=this.group||null!=this.el.parentElement&&"stencil-route-switch"===this.el.parentElement.tagName.toLowerCase();if(t&&!e)return this.previousMatch=this.match,this.match=a(t.pathname,{path:this.url,exact:this.exact,strict:!0})}async loadCompleted(){let t={};this.history&&this.history.location.hash?t={scrollToId:this.history.location.hash.substr(1)}:this.scrollTopOffset&&(t={scrollTopOffset:this.scrollTopOffset}),"function"==typeof this.componentUpdated?this.componentUpdated(t):this.match&&!r(this.match,this.previousMatch)&&this.routeViewsUpdated&&this.routeViewsUpdated(t)}async componentDidUpdate(){await this.loadCompleted()}async componentDidLoad(){await this.loadCompleted()}render(){if(!this.match||!this.history)return null;const t=Object.assign({},this.componentProps,{history:this.history,match:this.match});return this.routeRender?this.routeRender(Object.assign({},t,{component:this.component})):this.component?s(this.component,Object.assign({},t)):void 0}get el(){return o(this)}static get watchers(){return{location:["computeMatch"]}}static get style(){return"stencil-route.inactive{display:none}"}};L.injectProps(j,["location","history","historyType","routeViewsUpdated"]);const H=t=>"STENCIL-ROUTE"===t.tagName,U=class{constructor(e){t(this,e),this.group=(()=>((1e17*Math.random()).toString().match(/.{4}/g)||[]).join("-"))(),this.subscribers=[],this.queue=n(this,"queue")}componentWillLoad(){null!=this.location&&this.regenerateSubscribers(this.location)}async regenerateSubscribers(t){if(null==t)return;let e=-1;if(this.subscribers=Array.prototype.slice.call(this.el.children).filter(H).map((s,o)=>{const n=((t,e,s)=>a(t,{path:e,exact:s,strict:!0}))(t.pathname,s.url,s.exact);return n&&-1===e&&(e=o),{el:s,match:n}}),-1===e)return;if(this.activeIndex===e)return void(this.subscribers[e].el.match=this.subscribers[e].match);this.activeIndex=e;const s=this.subscribers[this.activeIndex];this.scrollTopOffset&&(s.el.scrollTopOffset=this.scrollTopOffset),s.el.group=this.group,s.el.match=s.match,s.el.componentUpdated=t=>{this.queue.write(()=>{this.subscribers.forEach((t,e)=>{if(t.el.componentUpdated=void 0,e===this.activeIndex)return t.el.style.display="";this.scrollTopOffset&&(t.el.scrollTopOffset=this.scrollTopOffset),t.el.group=this.group,t.el.match=null,t.el.style.display="none"})}),this.routeViewsUpdated&&this.routeViewsUpdated(Object.assign({scrollTopOffset:this.scrollTopOffset},t))}}render(){return s("slot",null)}get el(){return o(this)}static get watchers(){return{location:["regenerateSubscribers"]}}};L.injectProps(U,["location","routeViewsUpdated"]);const _=(t,...e)=>{t||console.warn(...e)},A=()=>{let t,e=[];return{setPrompt:e=>(_(null==t,"A history supports only one prompt at a time"),t=e,()=>{t===e&&(t=null)}),confirmTransitionTo:(e,s,o,n)=>{if(null!=t){const i="function"==typeof t?t(e,s):t;"string"==typeof i?"function"==typeof o?o(i,n):(_(!1,"A history needs a getUserConfirmation function in order to use a prompt message"),n(!0)):n(!1!==i)}else n(!0)},appendListener:t=>{let s=!0;const o=(...e)=>{s&&t(...e)};return e.push(o),()=>{s=!1,e=e.filter(t=>t!==o)}},notifyListeners:(...t)=>{e.forEach(e=>e(...t))}}},R=(t,e="scrollPositions")=>{let s=new Map;const o=(e,o)=>{if(s.set(e,o),h(t,"sessionStorage")){const e=[];s.forEach((t,s)=>{e.push([s,t])}),t.sessionStorage.setItem("scrollPositions",JSON.stringify(e))}};if(h(t,"sessionStorage")){const o=t.sessionStorage.getItem(e);s=o?new Map(JSON.parse(o)):s}return"scrollRestoration"in t.history&&(history.scrollRestoration="manual"),{set:o,get:t=>s.get(t),has:t=>s.has(t),capture:e=>{o(e,[t.scrollX,t.scrollY])}}},I={hashbang:{encodePath:t=>"!"===t.charAt(0)?t:"!/"+w(t),decodePath:t=>"!"===t.charAt(0)?t.substr(1):t},noslash:{encodePath:w,decodePath:u},slash:{encodePath:u,decodePath:u}},M=(t,e)=>{const s=0==t.pathname.indexOf(e)?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:s})},W={browser:(t,e={})=>{let s=!1;const o=t.history,n=t.location,i=t.navigator,a=c(t),r=!l(i),h=R(t),k=null!=e.forceRefresh&&e.forceRefresh,w=null!=e.getUserConfirmation?e.getUserConfirmation:y,P=null!=e.keyLength?e.keyLength:6,L=e.basename?p(u(e.basename)):"",E=()=>{try{return t.history.state||{}}catch(t){return{}}},T=t=>{t=t||{};const{key:e,state:s}=t,{pathname:o,search:i,hash:a}=n;let r=o+i+a;return _(!L||f(r,L),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+r+'" to begin with "'+L+'".'),L&&(r=g(r,L)),d(r,s,e||m(P))},C=A(),O=t=>{h.capture(B.location.key),Object.assign(B,t),B.location.scrollPosition=h.get(B.location.key),B.length=o.length,C.notifyListeners(B.location,B.action)},x=t=>{v(i,t)||j(T(t.state))},S=()=>{j(T(E()))},j=t=>{if(s)s=!1,O();else{const e="POP";C.confirmTransitionTo(t,e,w,s=>{s?O({action:e,location:t}):H(t)})}},H=t=>{let e=I.indexOf(B.location.key),o=I.indexOf(t.key);-1===e&&(e=0),-1===o&&(o=0);const n=e-o;n&&(s=!0,D(n))},U=T(E());let I=[U.key],M=0,W=!1;const Y=t=>L+b(t),D=t=>{o.go(t)},N=e=>{1===(M+=e)?(t.addEventListener("popstate",x),r&&t.addEventListener("hashchange",S)):0===M&&(t.removeEventListener("popstate",x),r&&t.removeEventListener("hashchange",S))},B={length:o.length,action:"POP",location:U,createHref:Y,push:(t,e)=>{_(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to push when the 1st argument is a location-like object that already has state; it is ignored");const s=d(t,e,m(P),B.location);C.confirmTransitionTo(s,"PUSH",w,t=>{if(!t)return;const e=Y(s),{key:i,state:r}=s;if(a)if(o.pushState({key:i,state:r},"",e),k)n.href=e;else{const t=I.indexOf(B.location.key),e=I.slice(0,-1===t?0:t+1);e.push(s.key),I=e,O({action:"PUSH",location:s})}else _(void 0===r,"Browser history cannot push state in browsers that do not support HTML5 history"),n.href=e})},replace:(t,e)=>{_(!("object"==typeof t&&void 0!==t.state&&void 0!==e),"You should avoid providing a 2nd state argument to replace when the 1st argument is a location-like object that already has state; it is ignored");const s=d(t,e,m(P),B.location);C.confirmTransitionTo(s,"REPLACE",w,t=>{if(!t)return;const e=Y(s),{key:i,state:r}=s;if(a)if(o.replaceState({key:i,state:r},"",e),k)n.replace(e);else{const t=I.indexOf(B.location.key);-1!==t&&(I[t]=s.key),O({action:"REPLACE",location:s})}else _(void 0===r,"Browser history cannot replace state in browsers that do not support HTML5 history"),n.replace(e)})},go:D,goBack:()=>D(-1),goForward:()=>D(1),block:(t="")=>{const e=C.setPrompt(t);return W||(N(1),W=!0),()=>(W&&(W=!1,N(-1)),e())},listen:t=>{const e=C.appendListener(t);return N(1),()=>{N(-1),e()}},win:t};return B},hash:(t,e={})=>{let s=!1,o=null,n=0,i=!1;const a=t.location,r=t.history,h=k(t.navigator),c=null!=e.keyLength?e.keyLength:6,{getUserConfirmation:l=y,hashType:v="slash"}=e,w=e.basename?p(u(e.basename)):"",{encodePath:L,decodePath:E}=I[v],T=()=>{const t=a.href,e=t.indexOf("#");return-1===e?"":t.substring(e+1)},C=t=>{const e=a.href.indexOf("#");a.replace(a.href.slice(0,e>=0?e:0)+"#"+t)},O=()=>{let t=E(T());return _(!w||f(t,w),'You are attempting to use a basename on a page whose URL path does not begin with the basename. Expected path "'+t+'" to begin with "'+w+'".'),w&&(t=g(t,w)),d(t,void 0,m(c))},x=A(),S=t=>{Object.assign(B,t),B.length=r.length,x.notifyListeners(B.location,B.action)},j=()=>{const t=T(),e=L(t);if(t!==e)C(e);else{const t=O(),e=B.location;if(!s&&P(e,t))return;if(o===b(t))return;o=null,H(t)}},H=t=>{if(s)s=!1,S();else{const e="POP";x.confirmTransitionTo(t,e,l,s=>{s?S({action:e,location:t}):U(t)})}},U=t=>{let e=Y.lastIndexOf(b(B.location)),o=Y.lastIndexOf(b(t));-1===e&&(e=0),-1===o&&(o=0);const n=e-o;n&&(s=!0,D(n))},R=T(),M=L(R);R!==M&&C(M);const W=O();let Y=[b(W)];const D=t=>{_(h,"Hash history go(n) causes a full page reload in this browser"),r.go(t)},N=(t,e)=>{1===(n+=e)?t.addEventListener("hashchange",j):0===n&&t.removeEventListener("hashchange",j)},B={length:r.length,action:"POP",location:W,createHref:t=>"#"+L(w+b(t)),push:(t,e)=>{_(void 0===e,"Hash history cannot push state; it is ignored");const s=d(t,void 0,m(c),B.location);x.confirmTransitionTo(s,"PUSH",l,t=>{if(!t)return;const e=b(s),n=L(w+e);if(T()!==n){o=e,(t=>a.hash=t)(n);const t=Y.lastIndexOf(b(B.location)),i=Y.slice(0,-1===t?0:t+1);i.push(e),Y=i,S({action:"PUSH",location:s})}else _(!1,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack"),S()})},replace:(t,e)=>{_(void 0===e,"Hash history cannot replace state; it is ignored");const s=d(t,void 0,m(c),B.location);x.confirmTransitionTo(s,"REPLACE",l,t=>{if(!t)return;const e=b(s),n=L(w+e);T()!==n&&(o=e,C(n));const i=Y.indexOf(b(B.location));-1!==i&&(Y[i]=e),S({action:"REPLACE",location:s})})},go:D,goBack:()=>D(-1),goForward:()=>D(1),block:(e="")=>{const s=x.setPrompt(e);return i||(N(t,1),i=!0),()=>(i&&(i=!1,N(t,-1)),s())},listen:e=>{const s=x.appendListener(e);return N(t,1),()=>{N(t,-1),s()}},win:t};return B}},Y=class{constructor(e){t(this,e),this.root="/",this.historyType="browser",this.titleSuffix="",this.routeViewsUpdated=(t={})=>{if(this.history&&t.scrollToId&&"browser"===this.historyType){const e=this.history.win.document.getElementById(t.scrollToId);if(e)return e.scrollIntoView()}this.scrollTo(t.scrollTopOffset||this.scrollTopOffset)},this.isServer=n(this,"isServer"),this.queue=n(this,"queue")}componentWillLoad(){this.history=W[this.historyType](this.el.ownerDocument.defaultView),this.history.listen(t=>{t=M(t,this.root),this.location=t}),this.location=M(this.history.location,this.root)}scrollTo(t){const e=this.history;if(null!=t&&!this.isServer&&e)return"POP"===e.action&&Array.isArray(e.location.scrollPosition)?this.queue.write(()=>{e&&e.location&&Array.isArray(e.location.scrollPosition)&&e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}):this.queue.write(()=>{e.win.scrollTo(0,t)})}render(){if(this.location&&this.history)return s(L.Provider,{state:{historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated}},s("slot",null))}get el(){return o(this)}};export{E as app_menu,O as app_root,x as psk_app_router,S as psk_user_profile,j as stencil_route,U as stencil_route_switch,Y as stencil_router};