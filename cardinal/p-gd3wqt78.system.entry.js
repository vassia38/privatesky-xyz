System.register(["./p-226ad382.system.js","./p-628cfddf.system.js","./p-578faff9.system.js"],function(e){"use strict";var t,c,n;return{setters:[function(e){t=e.r;c=e.h},function(){},function(e){n=e.B}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,c,n){var i=arguments.length,s=i<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,c):n,h;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,c,n);else for(var l=e.length-1;l>=0;l--)if(h=e[l])s=(i<3?h(s):i>3?h(t,c,s):h(t,c))||s;return i>3&&s&&Object.defineProperty(t,c,s),s};var s=e("psk_checkbox",function(){function e(e){t(this,e);this.label=null;this.name=null;this.checkboxLabel=null;this.required=false;this.checked=false;this.value="unchecked";this.checkedValue=null;this.uncheckedValue=null}e.prototype.render=function(){var e=this.name?this.name:this.checkboxLabel?this.checkboxLabel.replace(/\s/g,"").toLowerCase():"";return c("div",{class:"form-group"},c("psk-label",{label:this.label}),c("div",{class:"form-check"},c("input",{type:"checkbox",class:"form-check-input",id:e,name:e,required:this.required,checked:this.checked,onChange:this.__handleCheckbox.bind(this),value:this.value}),c("psk-label",{for:e,label:this.checkboxLabel})))};e.prototype.__handleCheckbox=function(e){this.checked=e.target.checked;if(e.target.checked){this.value=this.checkedValue?this.checkedValue:"checked"}else{this.value=this.uncheckedValue?this.uncheckedValue:"unchecked"}if(this["changeModel"]){this["changeModel"].call(this,"value",this.value)}else{console.warn("[psk-input] Function named -=changeModel=- is not defined!")}};return e}());i([n()],s.prototype,"label",void 0)}}});