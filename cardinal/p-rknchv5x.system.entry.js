System.register(["./p-226ad382.system.js","./p-9c53ea88.system.js","./p-e1f22d46.system.js"],function(t){"use strict";var e,n,r,o,i,a,s;return{setters:[function(t){e=t.r;n=t.h;r=t.g},function(t){o=t.A;i=t.c;a=t.T},function(t){s=t.C}],execute:function(){var c=undefined&&undefined.__decorate||function(t,e,n,r){var o=arguments.length,i=o<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(t,e,n,r);else for(var s=t.length-1;s>=0;s--)if(a=t[s])i=(o<3?a(i):o>3?a(e,n,i):a(e,n))||i;return o>3&&i&&Object.defineProperty(e,n,i),i};var l=t("psk_toolbar",function(){function t(t){e(this,t);this.icons=false}t.prototype.render=function(){var t=this;if(!this.actions)return null;return this.actions.split(",").map(function(t){return t.trim()}).map(function(e){var r=0;while(r<t.host.children.length){var i=t.host.children.item(r++);if(i.hasAttribute("slot")&&i.getAttribute("slot")===e){return n("slot",{name:e})}}return t.icons&&o.hasOwnProperty(e)?n("psk-icon",{icon:o[e].value,title:o[e].value,color:o[e].color,onClick:function(n){t.handleClick(n,e)}}):n("button",{class:"btn btn-primary",name:e.toUpperCase(),onClick:function(n){t.handleClick(n,e)}},e.toUpperCase())})};t.prototype.handleClick=function(t,e){var n=null;try{n=JSON.parse(this.eventData)}catch(t){}t.preventDefault();t.stopImmediatePropagation();i(e,{bubbles:true,composed:true,cancelable:true,detail:n},true)};Object.defineProperty(t.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});return t}());c([s()],l.prototype,"actions",void 0);c([a({description:"This property is the wanna that tells us if the toolbar action has an icon attached to it so it can be rendered.",propertyType:"boolean",isMandatory:false,defaultValue:"false"})],l.prototype,"icons",void 0);c([a({description:"This property is the data that will be passed to the newly created event in the detail property.",propertyType:"string",isMandatory:false,defaultValue:"null"})],l.prototype,"eventData",void 0)}}});