System.register(["./p-e09b966b.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js","./p-21908523.system.js"],(function(e){"use strict";var t,n,o,i,r,s,a;return{setters:[function(e){t=e.r;n=e.c;o=e.h;i=e.g},function(){},function(e){r=e.a;s=e.s},function(e){a=e.T}],execute:function(){var l=undefined&&undefined.__decorate||function(e,t,n,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,n):o,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")r=Reflect.decorate(e,t,n,o);else for(var a=e.length-1;a>=0;a--)if(s=e[a])r=(i<3?s(r):i>3?s(t,n,r):s(t,n))||r;return i>3&&r&&Object.defineProperty(t,n,r),r};var u="condition-false";var c="condition-true";var d=e("psk_condition",function(){var e=function(){function e(e){t(this,e);this.condition=null;this.conditionResult=false;this.getModelEvent=n(this,"getModelEvent",7)}e.prototype.componentWillLoad=function(){var e=this;if(!this._host.isConnected){return}this.modelChain=this.condition;this.modelChain=r(this.modelChain);var t=function(t){if(t.hasExpression(e.modelChain)){var n=function(){e.condition=t.evaluateExpression(e.modelChain)};t.onChangeExpressionChain(e.modelChain,n);n()}else{var o=function(){e.condition=t.getChainValue(e.modelChain)};t.onChange(e.modelChain,o);o()}};return new Promise((function(n){e.getModelEvent.emit({callback:function(o,i){if(o){console.log(o)}t(i);e._updateConditionResult().then((function(){n()}))}})}))};e.prototype.componentWillUpdate=function(){return this._updateConditionResult()};e.prototype._updateConditionResult=function(){var e=this;var t;if(this.condition instanceof Promise){t=this.condition}else{t=Promise.resolve(this.condition)}return t.then((function(t){if(typeof t==="string"){e.conditionResult=s(t)}else{e.conditionResult=Boolean(t)}return Promise.resolve()}))};e.prototype.render=function(){var e=false;var t=o("slot",null);var n=null;var i=this._host.children;for(var r=0;r<i.length;r++){var s=i[r];var a=s.getAttribute("slot");if(a===c||a===u){e=true;break}}if(e){t=o("slot",{name:""+c});n=o("slot",{name:""+u})}return this.conditionResult?t:n};Object.defineProperty(e.prototype,"_host",{get:function(){return i(this)},enumerable:false,configurable:true});return e}();l([a({description:"The property value must be the name of a model property or expression. Children are rendered only if the value of the condition is evaluated to true",isMandatory:true,propertyType:"any"})],e.prototype,"condition",void 0);return e}())}}}));