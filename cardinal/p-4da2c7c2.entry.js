import{r as o,g as e,h as l}from"./p-6c966499.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{B as t}from"./p-e7f09261.js";let s=(()=>{class s{constructor(l){o(this,l),this.connectedCallback=function(){let o=e(this);console.log("TEST: Connected",o)},this.myState="@ceva"}componentWillLoad(){let o=e(this);console.log("TEST: WillLoad",o),console.log(o.getAttributeNames())}componentDidLoad(){console.log("Loaded");let o=e(this);console.log("TEST: WillLoad",o),console.log(o.getAttributeNames())}render(){let o=e(this);return console.log("TEST: WillLoad",o),console.log(o.getAttributeNames()),l("span",{class:"col-form-label"},"# 1: ",this.firstlabel,l("br",null),"# 2: ",this.secondLabel,l("br",null),"# 3: ",this.thirdLabel,l("br",null),"# 4: ",this.labelValue)}}return function(o,e,l,t){var s,n=arguments.length,c=n<3?e:null===t?t=Object.getOwnPropertyDescriptor(e,l):t;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(o,e,l,t);else for(var i=o.length-1;i>=0;i--)(s=o[i])&&(c=(n<3?s(c):n>3?s(e,l,c):s(e,l))||c);n>3&&c&&Object.defineProperty(e,l,c)}([t()],s.prototype,"modelHandler",void 0),s})();export{s as psk_label_test}