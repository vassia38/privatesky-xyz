System.register(["./p-226ad382.system.js","./p-9c53ea88.system.js","./p-e1f22d46.system.js","./p-06adc60e.system.js"],function(e){"use strict";var t,i,r,n,o,a;return{setters:[function(e){t=e.r;i=e.c;r=e.h},function(e){n=e.T},function(e){o=e.C},function(e){a=e.T}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,i,r){var n=arguments.length,o=n<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,i):r,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)if(a=e[s])o=(n<3?a(o):n>3?a(t,i,o):a(t,i))||o;return n>3&&o&&Object.defineProperty(t,i,o),o};var l=e("psk_link",function(){function e(e){t(this,e);this.error=false;this.destinationUrl="#";this.validateUrl=i(this,"validateUrl",7)}e.prototype.render=function(){var e=this;return r("button",{type:"button",title:this.error?"Temporary unavailable":"",class:"btn btn-link "+(this.error?"invalid-url":""),onClick:function(t){if(e.error){t.preventDefault()}else{window.location.href=e.destinationUrl}}},r("slot",null))};e.prototype.componentDidLoad=function(){var e=this;if(!this.page){return}this.validateUrl.emit({sourceUrl:this.page,callback:function(t,i){if(!t){e.destinationUrl=""+window.location.origin+i;e.error=false}else{e.error=true}}})};return e}());s([o(),n({description:"This property gives the component the destination URL after clicking the displayed link. This property is first validated by valdateUrl event.",isMandatory:true,propertyType:"string"})],l.prototype,"page",void 0);s([a({controllerInteraction:{required:true},description:["This event is sent to the application controller in order to check and validate the page property.","If the sequence of pages inside the page property is valid, then the event is sending back to the component the valid path to the required page.",'If not, a special behavior will be applied to the link. On mouse over, it will turn grey and will display a hint message: "Temporary unavailable".']})],l.prototype,"validateUrl",void 0)}}});