import{r as t,h as e,H as s,g as i}from"./p-83ba3037.js";import{D as o}from"./p-814d4099.js";import{M as r}from"./p-185b2ebc.js";import"./p-93fcdef3.js";import{T as l}from"./p-c87821a3.js";import{C as a}from"./p-51327a3c.js";const c=r,n=class{constructor(e){t(this,e),this.disableSidebar=!1,this.mobileLayout=!1,this.componentCode="",this.hasSlot=!1}__createLoader(){let t="";for(let e=1;e<=12;e++)t+=`<div class="sk-circle${e} sk-circle"></div>`;let e=document.createElement("div");return e.className="app-loader",e.innerHTML=`<div class='sk-fading-circle'>${t}</div>`,e}checkLayout(){this.mobileLayout=document.documentElement.clientWidth<c}connectedCallback(){this.disconnected=!1}disconnectedCallback(){this.disconnected=!0}componentWillLoad(){this.checkLayout(),this.host.parentElement&&(this.htmlLoader=this.__createLoader(),this.host.parentElement.appendChild(this.htmlLoader));let t=this.host.innerHTML;if(t=t.replace(/\s/g,""),t.length&&(this.hasSlot=!0),"string"==typeof this.controller)return new Promise((t,e)=>{a.getController(this.controller).then(e=>{if(this.disconnected)return t();new e(this.host),t()}).catch(e)});new o(this.host)}componentDidLoad(){this.htmlLoader&&this.htmlLoader.parentNode&&this.htmlLoader.parentNode.removeChild(this.htmlLoader)}render(){return e(s,{class:this.mobileLayout?"is-mobile":""},this.hasSlot?e("slot",null):e("psk-default-renderer",{mobileLayout:this.mobileLayout,disableSidebar:this.disableSidebar}))}get host(){return i(this)}};!function(t,e,s,i){var o,r=arguments.length,l=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,s,i);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(l=(r<3?o(l):r>3?o(e,s,l):o(e,s))||l);r>3&&l&&Object.defineProperty(e,s,l)}([l({isMandatory:!1,description:["This property is a string that will permit the developer to choose his own controller.","If no controller is provided, a default controller will be passed to the component","It is recommended that each app to extend the provided default controller and adapt it to the application needs"],propertyType:"string",defaultValue:"null"})],n.prototype,"controller",void 0);export{n as psk_app_root}