System.register(["./p-3369a689.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-609d210d.system.js","./p-5514a11c.system.js","./p-4a86ff19.system.js"],(function(e){"use strict";var t,i,r,s,n;return{setters:[function(e){t=e.r;i=e.h},function(){},function(){},function(e){r=e.T},function(e){s=e.C},function(e){n=e.B}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,i,r){var s=arguments.length,n=s<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")n=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)if(o=e[a])n=(s<3?o(n):s>3?o(t,i,n):o(t,i))||n;return s>3&&n&&Object.defineProperty(t,i,n),n};var a=e("psk_img",function(){function e(e){t(this,e)}e.prototype.render=function(){return i("div",{class:"image_container"},i("div",{class:"image_wrapper"},i("img",{src:this.src,class:"img-fluid",alt:this.title})),this.title?i("div",{class:"image_description"},this.title):null)};return e}());o([s(),n(),r({description:'This property is the path to the image source (Example:"page/PrivateSky/EDFS.png").',isMandatory:true,propertyType:"string"})],a.prototype,"src",void 0);o([r({description:"This property is the title of the image(the alt attribute) and the description of the image.",isMandatory:false,propertyType:"string",specialNote:"If no title is given,there will not be assumed one and there will be no image description/alt."})],a.prototype,"title",void 0)}}}));