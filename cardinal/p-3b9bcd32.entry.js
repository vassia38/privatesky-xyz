import{r as e,h as t}from"./p-9eaba2bd.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as i}from"./p-76b560d9.js";import{C as s}from"./p-ea3b4b27.js";import{B as o}from"./p-691f45fe.js";var a=function(e,t,i,s){var o,a=arguments.length,n=a<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,s);else for(var p=e.length-1;p>=0;p--)(o=e[p])&&(n=(a<3?o(n):a>3?o(t,i,n):o(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n};const n=class{constructor(t){e(this,t),this.__inputHandler=e=>{e.stopImmediatePropagation(),this.modelHandler.updateModel("value",e.target.value)},this.label=null,this.value=null,this.name=null,this.placeholder=null,this.required=!1,this.readOnly=!1,this.invalidValue=null}render(){return t("psk-input",{type:"password",label:this.label,name:this.name,value:this.value,placeholder:this.placeholder,required:this.required,readOnly:this.readOnly,invalidValue:this.invalidValue,specificProps:{onKeyUp:this.__inputHandler.bind(this),onChange:this.__inputHandler.bind(this)}})}};a([s(),o()],n.prototype,"modelHandler",void 0),a([i({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],n.prototype,"label",void 0),a([i({description:["Specifies the value of an psk-password-input component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],n.prototype,"value",void 0),a([i({description:["Specifies the name of a psk-password-input component. It is used along with the psk-label component."],isMandatory:!1,propertyType:"string"})],n.prototype,"name",void 0),a([i({description:["Specifies a short hint that describes the expected value of an psk-password-input component"],isMandatory:!1,propertyType:"string"})],n.prototype,"placeholder",void 0),a([i({description:["Specifies that an input field must be filled out before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"required",void 0),a([i({description:["\tSpecifies that an input field is read-only.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],n.prototype,"readOnly",void 0),a([i({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],n.prototype,"invalidValue",void 0);export{n as psk_password_input}