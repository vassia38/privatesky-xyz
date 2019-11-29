System.register(["./p-226ad382.system.js","./p-9c53ea88.system.js","./p-e1f22d46.system.js"],function(t){"use strict";var e,r,n,i,o;return{setters:[function(t){e=t.r;r=t.h;n=t.g},function(t){i=t.T},function(t){o=t.C}],execute:function(){var s=undefined&&undefined.__decorate||function(t,e,r,n){var i=arguments.length,o=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,r):n,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,r,n);else for(var l=t.length-1;l>=0;l--)if(s=t[l])o=(i<3?s(o):i>3?s(e,r,o):s(e,r))||o;return i>3&&o&&Object.defineProperty(e,r,o),o};var l=t("psk_table",function(){function t(t){e(this,t);this.tableContent=null}t.prototype.render=function(){return r("table",null,this.tableContent)};t.prototype.componentWillLoad=function(){var t=this;var e=this.element.innerHTML.split(/\n/g).map(function(t){return t.trim().replace("\x3c!----\x3e","")}).filter(function(t){return t.length>0}).map(function(e){var r=e.split("|").map(function(e){if(t.head){return"<th>"+e.trim()+"</th>"}else{return"<td>"+e.trim()+"</td>"}}).join("");return"<tr>"+r+"</tr>"});var r=[];if(this.head){r.push(this._stringArrayToHTMLElement("thead",e.splice(0,1)));if(this.footer){r.push(this._stringArrayToHTMLElement("tbody",e.splice(0,e.length-1)));r.push(this._stringArrayToHTMLElement("tfoot",[e[e.length-1]]))}else{r.push(this._stringArrayToHTMLElement("tbody",e.splice(0)))}}else{r=[this._stringArrayToHTMLElement("tbody",e)]}this.tableContent=r;this.element.innerHTML=""};t.prototype._stringArrayToHTMLElement=function(t,e){var n=t;return r(n,{innerHTML:e.join("")})};Object.defineProperty(t.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());s([o(),i({description:"If this property is set as true then the table will have a footer in which the first info of the table will be written. ",isMandatory:false,propertyType:"boolean"})],l.prototype,"head",void 0);s([i({description:"If this property is set as true then the table will have a footer in which the last info of the table will be written.",isMandatory:false,propertyType:"boolean"})],l.prototype,"footer",void 0)}}});