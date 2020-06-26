import{r as e,h as t}from"./p-6c966499.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as o}from"./p-c1d16db3.js";import{C as i}from"./p-7f0c608d.js";import{B as r}from"./p-e7f09261.js";var s=function(e,t,o,i){var r,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,o,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,o,a):r(t,o))||a);return s>3&&a&&Object.defineProperty(t,o,a),a};let a=(()=>{class a{constructor(t){e(this,t),this.for=null}render(){return t("label",{class:"col-form-label",htmlFor:this.for},this.label&&this.label,t("slot",null))}}return s([i(),r()],a.prototype,"modelHandler",void 0),s([o({description:["Specifies the label to be displayed.","If this attribute is not provided, the component will display the content of the component as label."],isMandatory:!1,propertyType:"string"})],a.prototype,"label",void 0),s([o({description:["Specifies which form element a label is bound to.","Usually, this attribute comes in pair with another component, and is used by the browser to group the content in a specific order to be read by screen readers.","The screen readers are used by the people with disabilities in order to have the possibility to navigate a website.",'An example of this pair of components can be found in the <a href="#live-examples">Examples section</a>.'],isMandatory:!1,propertyType:"string"})],a.prototype,"for",void 0),a})();export{a as psk_label}