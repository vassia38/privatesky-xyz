import{r as t,h as e,g as i}from"./p-ab545ab4.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as s}from"./p-1c2c6971.js";import{C as o}from"./p-a54ea370.js";import{B as n}from"./p-01adeb48.js";import{P as r}from"./p-7de78f7f.js";var a=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const h=[document,window];let l=(()=>{class l{constructor(e){t(this,e),this.closed=!0}clickHandler(t){if(this.closed=!this.closed,this.toggleEvent){t.preventDefault(),t.stopImmediatePropagation();let e=new r(this.toggleEvent,{selected:this.closed?this.inactive:this.active,active:this.active,inactive:this.inactive},{bubbles:!0,composed:!0,cancelable:!0}),i=this.htmlElement;this.eventDispatcher&&-1!==h.indexOf(window[this.eventDispatcher])&&(i=window[this.eventDispatcher]),i.dispatchEvent(e)}}render(){return e("div",{class:"status-container"},e("h5",null,this.title),e("psk-grid",{class:"two-options-container",onClick:this.clickHandler.bind(this),columns:2,layout:"xs=[6,6] s=[6,6] m=[6,6] l=[6,6]"},e("div",{class:"switch-item "+(this.closed?"":"selected")},e("p",null,this.active)),e("div",{class:"switch-item "+(this.closed?"selected":"")},e("p",null,this.inactive))))}get htmlElement(){return i(this)}}return a([n()],l.prototype,"modelHandler",void 0),a([o()],l.prototype,"htmlElement",void 0),a([s({description:["This attribute is the active part of the component the one that will show the content when the switch button is on."],isMandatory:!0,propertyType:"string",defaultValue:null})],l.prototype,"active",void 0),a([s({description:"This attribute is the inactive part of the component(this is the default value for the switch-button) the one that tells the user that the switch button is off.",isMandatory:!0,propertyType:"string",defaultValue:null})],l.prototype,"inactive",void 0),a([s({description:['This attribute is telling the component where to trigger the event. Accepted values: "document, "window".',"If the value is not set or it is not one of the accepted values, the eventDispatcher will be the component itself."],isMandatory:!1,propertyType:"string"})],l.prototype,"eventDispatcher",void 0),a([s({description:["By defining this attribute, the component will be able to trigger an event. The name of the event is the value of the attribute."],isMandatory:!1,propertyType:"string"})],l.prototype,"toggleEvent",void 0),a([s({description:"This property is the title, that will be be shown above the switch button for better understanding. ",isMandatory:!1,propertyType:"string"})],l.prototype,"title",void 0),l})();export{l as psk_switch_button}