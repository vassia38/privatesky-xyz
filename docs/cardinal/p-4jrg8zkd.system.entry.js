System.register(["./p-0b2166d8.system.js","./p-8918d7a0.system.js","./p-b61fafe4.system.js","./p-64de2c1c.system.js","./p-86454133.system.js"],(function(e){"use strict";var t,o,n,s;return{setters:[function(e){t=e.r;o=e.h},function(){},function(){},function(e){n=e.T},function(e){s=e.C}],execute:function(){var i=undefined&&undefined.__decorate||function(e,t,o,n){var s=arguments.length,i=s<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,o):n,l;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)if(l=e[r])i=(s<3?l(i):s>3?l(t,o,i):l(t,o))||i;return s>3&&i&&Object.defineProperty(t,o,i),i};var l=e("psk_files_chooser",function(){function e(e){t(this,e);this.label="Select files"}e.prototype.addedFile=function(e){var t=Array.from(e.target.files);if(typeof this.onFilesChange==="function"){this.onFilesChange(t)}if(typeof this.onFilesSelect==="function"){var o=t.map((function(e){return{name:e.name,size:e.size,type:e.name.substr(e.name.lastIndexOf(".")+1)}}));this.onFilesSelect(o)}};e.prototype.render=function(){return[o("button",{type:"button",class:"btn btn-secondary p-0"},o("label",{class:"pt-0 mb-0 p-2"},this.label,o("input",{accept:this.accept,type:"file",onChange:this.addedFile.bind(this),multiple:true,class:"form-control-file form-control-sm"}))),!this.onFilesChange&&!this.onFilesSelect?o("h5",{class:"mt-4"},"No controller set for this component!"):null]};return e}());i([s(),n({description:"This is the lable of the button",isMandatory:false,propertyType:"string",defaultValue:"Select files"})],l.prototype,"label",void 0);i([n({description:"This property tells the component which types of files can be uploaded from the user's device.",isMandatory:false,propertyType:"string",specialNote:"If this property is missing, then all types of files can be uploaded."})],l.prototype,"accept",void 0);i([n({description:"This property tells the component what to do with the changed uploaded files.\n\t\t\tIf this property is missing, then nothing will happen with the changed uploaded files.",isMandatory:false,propertyType:"Function",specialNote:"A hint message will be displayed for the user, to know that a controller for the component is not set."})],l.prototype,"onFilesChange",void 0);i([n({description:"This property tells the component what to do with the selected uploaded files.\n\t\t\tIf this property is missing, then nothing will happen with the selected uploaded files.",isMandatory:false,propertyType:"Function",specialNote:"A hint message will be displayed for the user, to know that a controller for the component is not set."})],l.prototype,"onFilesSelect",void 0)}}}));