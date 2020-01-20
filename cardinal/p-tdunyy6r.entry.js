import{r as e,c as o,h as t}from"./p-9835b40a.js";import{T as s}from"./p-8102a7fd.js";import{T as l}from"./p-d998675c.js";import{C as a}from"./p-ec895615.js";var i=function(e,o,t,s){var l,a=arguments.length,i=a<3?o:null===s?s=Object.getOwnPropertyDescriptor(o,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,o,t,s);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(i=(a<3?l(i):a>3?l(o,t,i):l(o,t))||i);return a>3&&i&&Object.defineProperty(o,t,i),i};const r=class{constructor(t){e(this,t),this.opened=!1,this.closeModal=o(this,"closeModal",7)}render(){return t("div",null,t("div",{id:"backdrop",onClick:()=>{this.closeModal.emit()}}),t("div",{id:"modal"},t("div",{class:"modal-content"},t("div",{class:"modal-header"},t("slot",{name:"title"}),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},t("span",{"aria-hidden":"true",onClick:()=>{this.closeModal.emit()}},"×"))),t("div",{class:"modal-body"},t("slot",null)),t("div",{class:"modal-footer"},t("slot",{name:"confirm_action"}),t("button",{class:"btn btn-primary",onClick:()=>{this.closeModal.emit()}},"Close")))))}};i([a(),s({description:"This is the property that gives the state of the modal if it is opened or closed. The posible values are true or false.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"opened",void 0),i([l({eventName:"closeModal",description:"When this event is triggered the Application Controller should listen to this so the modal can be closed within the controller."})],r.prototype,"closeModal",void 0);export{r as psk_modal};