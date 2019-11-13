import{r as o,c as e,h as t}from"./p-a1b3783e.js";import"./p-86d7a324.js";import"./p-50fde516.js";import{T as s}from"./p-9ba64865.js";import{C as a}from"./p-2bfa8c6a.js";import{T as i}from"./p-2b58d88b.js";var l=function(o,e,t,s){var a,i=arguments.length,l=i<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,t):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(o,e,t,s);else for(var r=o.length-1;r>=0;r--)(a=o[r])&&(l=(i<3?a(l):i>3?a(e,t,l):a(e,t))||l);return i>3&&l&&Object.defineProperty(e,t,l),l};const r=class{constructor(t){o(this,t),this.opened=!1,this.closeModal=e(this,"closeModal",7)}render(){return t("div",null,t("div",{id:"backdrop",onClick:()=>{this.closeModal.emit()}}),t("div",{id:"modal"},t("div",{class:"modal-content"},t("div",{class:"modal-header"},t("slot",{name:"title"}),t("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},t("span",{"aria-hidden":"true",onClick:()=>{this.closeModal.emit()}},"×"))),t("div",{class:"modal-body"},t("slot",null)),t("div",{class:"modal-footer"},t("slot",{name:"confirm_action"}),t("button",{class:"btn btn-primary",onClick:()=>{this.closeModal.emit()}},"Close")))))}};l([a(),s({description:"This is the property that gives the state of the modal if it is opened or closed. The posible values are true or false.",isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"opened",void 0),l([i({eventName:"closeModal",description:"When this event is triggered the Application Controller should listen to this so the modal can be closed within the controller."})],r.prototype,"closeModal",void 0);export{r as psk_modal};