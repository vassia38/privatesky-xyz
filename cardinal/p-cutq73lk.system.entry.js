System.register(["./p-226ad382.system.js","./p-2b526b24.system.js","./p-71227635.system.js","./p-7db317d0.system.js"],function(e){"use strict";var t,n,o,s,i;return{setters:[function(e){t=e.r;n=e.c;o=e.h},function(){},function(e){s=e.T},function(e){i=e.C}],execute:function(){var r=undefined&&undefined.__decorate||function(e,t,n,o){var s=arguments.length,i=s<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,r;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(r=e[a])i=(s<3?r(i):s>3?r(t,n,i):r(t,n))||i;return s>3&&i&&Object.defineProperty(t,n,i),i};var a=e("psk_floating_menu",function(){function e(e){t(this,e);this.opened=false;this.needFloatingMenu=n(this,"needFloatingMenu",7)}e.prototype.componentWillLoad=function(){var e=this;if(!this.menuItems){this.needFloatingMenu.emit(function(t,n){if(t){console.log(t);return}e.menuItems=n})}};e.prototype.render=function(){var e=this;console.log(this.menuItems);return[o("div",{id:"backdrop",onClick:function(t){t.preventDefault();e.opened=!e.opened}}),o("div",{class:"container"},o("ul",{class:"items"},this.menuItems.map(function(t){o("li",{onClick:function(){e.opened=!e.opened},class:"nav-item"},t)})),o("div",{class:"toggleFloatingMenu"},o("a",{href:"#",class:"plus",onClick:function(t){t.preventDefault();e.opened=!e.opened}},o("span",{class:"fa fa-plus"}))))]};return e}());r([i(),s({description:"This property represents the elements that should be rendered in a Floating Menu.",isMandatory:true,propertyType:"Array of MenuItem(MenuItem[])"})],a.prototype,"menuItems",void 0);r([s({description:"This property shows the state of the backdrop on the Floating Menu and the Floating Menu itself.",isMandatory:false,propertyType:"boolean",defaultValue:"false"})],a.prototype,"opened",void 0)}}});