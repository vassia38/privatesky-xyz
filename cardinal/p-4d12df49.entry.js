import{r as t,h as e,g as i}from"./p-87f0c668.js";import"./p-185b2ebc.js";import"./p-a5fc534d.js";import{B as s}from"./p-67458612.js";import{C as o}from"./p-c1eb8778.js";import{T as n}from"./p-9a6ac7e0.js";import{P as r}from"./p-e995cab0.js";var c=function(t,e,i,s){var o,n=arguments.length,r=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(r=(n<3?o(r):n>3?o(e,i,r):o(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r};const h=[document,window],l=class{constructor(e){t(this,e),this.closed=!1}clickHandler(t){if(this.closed=!this.closed,this.toggleEvent){t.preventDefault(),t.stopImmediatePropagation();let e=new r(this.toggleEvent,{selected:this.closed?this.inactive:this.active,active:this.active,inactive:this.inactive},{bubbles:!0,composed:!0,cancelable:!0}),i=this.htmlElement;this.eventDispatcher&&-1!==h.indexOf(window[this.eventDispatcher])&&(i=window[this.eventDispatcher]),i.dispatchEvent(e)}}render(){return e("div",{class:"status-container"},e("h5",null,this.title),e("psk-hoc",{class:"two-options-container",onClick:this.clickHandler.bind(this)},e("div",{class:"row"},e("div",{class:"switch-item col-xs-6 col-sm-6 col-md-6 col-lg-6 "+(this.closed?"":"selected")},e("p",null,this.active)),e("div",{class:"switch-item col-xs-6 col-sm-6 col-md-6 col-lg-6 "+(this.closed?"selected":"")},e("p",null,this.inactive)))))}get htmlElement(){return i(this)}};c([s()],l.prototype,"modelHandler",void 0),c([o()],l.prototype,"htmlElement",void 0),c([n({description:["This attribute is the active part of the component the one that will show the content when the switch button is on."],isMandatory:!0,propertyType:"string",defaultValue:null})],l.prototype,"active",void 0),c([n({description:"This attribute is the inactive part of the component(this is the default value for the switch-button) the one that tells the user that the switch button is off.",isMandatory:!0,propertyType:"string",defaultValue:null})],l.prototype,"inactive",void 0),c([n({description:['This attribute is telling the component where to trigger the event. Accepted values: "document, "window".',"If the value is not set or it is not one of the accepted values, the eventDispatcher will be the component itself."],isMandatory:!1,propertyType:"string"})],l.prototype,"eventDispatcher",void 0),c([n({description:["By defining this attribute, the component will be able to trigger an event. The name of the event is the value of the attribute."],isMandatory:!1,propertyType:"string"})],l.prototype,"toggleEvent",void 0),c([n({description:"This property is the title, that will be be shown above the switch button for better understanding. ",isMandatory:!1,propertyType:"string"})],l.prototype,"title",void 0);export{l as psk_switch_button}