import{r as t,c as s,h as i}from"./p-751bf9a8.js";import{H as o}from"./p-3693c2fd.js";import{p as e}from"./p-794858b0.js";import"./p-0c3518a5.js";const r=class{constructor(i){t(this,i),this.getTagsEvent=s(this,"webcardinal:tags:get",7)}async componentWillLoad(){if(this.host.isConnected){if(!this.href)try{return this.href=await e(this.getTagsEvent,{tag:this.tag}),void(this.content=i("stencil-route-link",{url:this.href},i("slot",null)))}catch(t){return void console.error(t)}try{let t;t=this.href.startsWith("/")?new URL(this.href,window.location.href):new URL(this.href),window.location.origin===t.origin?(this.href=t.pathname,this.content=i("stencil-route-link",{url:this.href},i("slot",null))):this.content=i("a",{href:this.href},i("slot",null))}catch(t){console.error(t)}}}render(){return this.content}};!function(t,s,i,o){var e,r=arguments.length,l=r<3?s:null===o?o=Object.getOwnPropertyDescriptor(s,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,s,i,o);else for(var n=t.length-1;n>=0;n--)(e=t[n])&&(l=(r<3?e(l):r>3?e(s,i,l):e(s,i))||l);r>3&&l&&Object.defineProperty(s,i,l)}([o()],r.prototype,"host",void 0);export{r as webc_link}