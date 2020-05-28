System.register(["./p-c99df712.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js","./p-fad6c953.system.js"],(function(e){"use strict";var t,o,n,r,i,a;return{setters:[function(e){t=e.r;o=e.c;n=e.h;r=e.g},function(){},function(e){i=e.a},function(e){a=e.T}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,o,n){var r=arguments.length,i=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,a;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)if(a=e[s])i=(r<3?a(i):r>3?a(t,o,i):a(t,o))||i;return r>3&&i&&Object.defineProperty(t,o,i),i};var c=e("psk_for_each",function(){function e(e){t(this,e);this.modelChanged=false;this.chain="";this.ignoredNodeNames=["link","style","slot","#text","#comment","text","comment"];this.templateNodes=[];this.dataViewModel=null;this.getModelEvent=o(this,"getModelEvent",7)}e.prototype.prepareTemplate=function(){var e=this;var t=Array.from(this.__host.childNodes);var o=t.filter((function(t){return e.ignoredNodeNames.indexOf(t.nodeName.toLowerCase())===-1}));var n=o.filter((function(e){return!e.hasAttribute("slot")}));var r=o.find((function(e){return e.hasAttribute("slot")&&e.getAttribute("slot")==="no-data"}));if(r){r.removeAttribute("slot");this.emptyNode=r.cloneNode(true)}this.__host.innerHTML="";if(n){n.forEach((function(t){e.templateNodes.push(t.cloneNode(true))}))}else{console.error("No template found!")}};e.prototype.componentWillLoad=function(){var e=this;if(!this.__host.isConnected){return}this.chain=this.dataViewModel;this.chain=i(this.chain);this.prepareTemplate();return new Promise((function(t){e.getModelEvent.emit({callback:function(o,n){if(o){console.log(o)}e.model=n;t()}})}))};e.prototype.componentDidLoad=function(){var e=this;if(this.model){this.model.onChange(this.chain,(function(){e.modelChanged=!e.modelChanged}))}};e.prototype.render=function(){var e=this;if(!this.__host.isConnected){return null}if(!this.templateNodes){return null}var t=this.model.getChainValue(this.chain);if(!t){t=[]}var o=[];var r=function(t){var r=i.chain?i.chain+"."+t+".":t+".";i.templateNodes.forEach((function(t){var i=t.cloneNode(true);e.__processNode(i,r);var a=i.tagName.toLowerCase();var s={};i.getAttributeNames().forEach((function(e){s[e]=i.getAttribute(e)}));var c=n(a,Object.assign({innerHTML:i.innerHTML},s));o.push(c)}))};var i=this;for(var a=0;a<t.length;a++){r(a)}if(o.length===0&&this.emptyNode){return n("div",{innerHTML:this.emptyNode.outerHTML})}return o};e.prototype.__processNode=function(e,t){var o=this;var n=Array.from(e.attributes).filter((function(e){return e.name==="view-model"}));n.forEach((function(o){var n=t?""+t+o.value:o.value;e.setAttribute(o.name,n)}));var r=Array.from(e.attributes).filter((function(e){return e.value.startsWith("@")}));r.forEach((function(o){var n=o.value.split("@")[1];var r=t?""+t+n:n;e.setAttribute(o.name,"@"+r)}));if(e.tagName.toLowerCase()!=="psk-for-each"){Array.from(e.children).forEach((function(e){o.__processNode.call(o,e,t)}))}};Object.defineProperty(e.prototype,"__host",{get:function(){return r(this)},enumerable:true,configurable:true});return e}());s([a({description:["This property is the name of the model which will be used to generate the form. The model should be a JavaScript array.",'All the information about how to write a model, hot to use the two-way binding and how to use the model with this component cand be found in the documentation found at: <psk-link page="forms/using-forms">Using forms</psk-link>'],isMandatory:true,propertyType:"string",specialNote:["If this property is not provided, nothing written inside the component's template will be displayed."]})],c.prototype,"dataViewModel",void 0)}}}));