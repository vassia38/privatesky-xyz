System.register(["./p-c99df712.system.js","./p-fd0b9fc7.system.js","./p-6fd1d833.system.js","./p-2d5d376b.system.js"],(function(t){"use strict";var i,e,s,r;return{setters:[function(t){i=t.r;e=t.h;s=t.g},function(){},function(t){r=t.i},function(){}],execute:function(){var n=function(t){return t.metaKey||t.altKey||t.ctrlKey||t.shiftKey};var a=t("query_page_link",function(){function t(t){i(this,t);this.unsubscribe=function(){return};this.activeClass="link-active";this.exact=false;this.strict=true;this.custom="a";this.match=false}t.prototype.componentWillLoad=function(){this.computeMatch()};t.prototype.computeMatch=function(){if(this.location){var t=this.location.search;if(t.indexOf("&")!==-1){t=t.substring(0,t.indexOf("&"))}this.match=t===this.url}};t.prototype.handleClick=function(t){if(n(t)||!this.history||!this.url){return}t.preventDefault();return this.history.push(this.url)};t.prototype.render=function(){var t;var i={class:(t={},t[this.activeClass]=this.match,t),onClick:this.handleClick.bind(this)};if(this.anchorClass){i.class[this.anchorClass]=true}if(this.custom==="a"){i=Object.assign(Object.assign({},i),{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})}return e(this.custom,Object.assign({},i),e("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());r(a)}}}));