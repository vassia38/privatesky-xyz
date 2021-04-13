import{r as e,c as i,h as t}from"./p-d4191909.js";import{H as a}from"./p-f0bd18cd.js";import"./p-fb057042.js";import"./p-e33c1597.js";import{C as r}from"./p-0045ff5a.js";import{k as n,l as c,B as o}from"./p-d939937a.js";import"./p-794858b0.js";import"./p-0c3518a5.js";import"./p-93b02efe.js";import{a as s,C as l}from"./p-5e141ac1.js";import"./p-ad52b503.js";import{i as d}from"./p-a247a1f7.js";import{C as f}from"./p-2460659e.js";const h=class{constructor(t){e(this,t),this.getRoutingStateEvent=i(this,"webcardinal:routing:get",7),this.controller="",this.disableContainer=!1,this.translations=!1}async componentWillLoad(){var e,i;if(!this.host.isConnected)return;if(this.translations=n(this),this.translations){const t=await c(this);this.translations=await s.loadAndSetTranslationsForPage(t),this.translations||console.warn("Translations were automatically disabled for current page",(null===(i=null===(e=window.WebCardinal)||void 0===e?void 0:e.state)||void 0===i?void 0:i.activePage)||{})}const t=this.resolveControllerElement();if(this.controllerInstance=await this.loadController(t),this.host.hasAttribute("default-controller"))return;const{model:a,translationModel:l}=this.controllerInstance;(l||a)&&(o.bindChildNodes(t,{model:a,translationModel:l,recursive:!0,enableTranslations:this.translations}),this.listeners=new r(this.host,{model:a,translationModel:l}),a&&this.listeners.getModel.add(),l&&this.listeners.getTranslationModel.add())}async connectedCallback(){if(this.listeners){const{getModel:e,getTranslationModel:i}=this.listeners;null==e||e.add(),null==i||i.add()}}async disconnectedCallback(){if(this.listeners){const{getModel:e,getTranslationModel:i}=this.listeners;null==e||e.remove(),null==i||i.remove()}setTimeout((()=>{var e;document.body.contains(this.host)||null===(e=this.controllerInstance)||void 0===e||e.disconnectedCallback()}),100)}async componentDidLoad(){this.disableContainer&&(Array.from(this.host.childNodes).forEach((e=>this.host.parentNode.insertBefore(e,this.host))),this.host.remove())}async getModel(){if(this.controllerInstance)return this.controllerInstance.model}async getTranslationModel(){if(this.controllerInstance)return this.controllerInstance.translationModel}resolveControllerElement(){let e=this.host;const i=this.host.parentNode;return i instanceof ShadowRoot&&this.host.hasAttribute("data-modal")&&(e=i.host),this.disableContainer&&(e=e.parentElement),e}async loadController(e){const i=()=>(this.host.setAttribute("default-controller",""),new f(e,this.history));if(this.host.hasAttribute("controller-name")&&!this.controller&&(console.warn(['Attribute "controller-name" is deprecated!','Use "controller" instead!'].join("\n"),"target:",this.host),this.controller=this.host.getAttribute("controller-name")),"string"!=typeof this.controller)return console.error('"controller" must be a string!'),i();if(0===this.controller.length)return i();try{return new(await l.getController(this.controller))(e,this.history)}catch(e){return console.error(`Error while loading controller "${this.controller}"`,e),i()}}render(){return this.disableContainer?null:t("slot",null)}};(function(e,i,t,a){var r,n=arguments.length,c=n<3?i:null===a?a=Object.getOwnPropertyDescriptor(i,t):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,i,t,a);else for(var o=e.length-1;o>=0;o--)(r=e[o])&&(c=(n<3?r(c):n>3?r(i,t,c):r(i,t))||c);n>3&&c&&Object.defineProperty(i,t,c)})([a()],h.prototype,"host",void 0),d(h);const m=class{constructor(i){e(this,i)}render(){return t("div",{class:"circle-fade"},[...Array(9).keys()].map((e=>t("div",{class:"circle circle-"+e}))))}};m.style={default:'webc-spinner{position:absolute;top:0;right:0;bottom:0;left:0;pointer-events:none;display:flex;justify-content:center;align-items:center;z-index:var(--z-index)}webc-spinner>.circle-fade{position:relative;width:var(--width);height:var(--height);border:var(--border);border-radius:var(--radius);background:var(--background);box-shadow:var(--box-shadow)}webc-spinner>.circle-fade>.circle{position:absolute;top:0;left:0;width:100%;height:100%}webc-spinner>.circle-fade>.circle::after{content:"";display:block;margin:0.15em auto;width:var(--dot-size);height:var(--dot-size);background-color:var(--color);border-radius:var(--dot-radius);animation:spinner-default-animation var(--animation) infinite linear}webc-spinner>.circle-fade .circle-1{transform:rotate(-40deg)}webc-spinner>.circle-fade .circle-1::after{animation-delay:calc(-0.1 * var(--animation-delay))}webc-spinner>.circle-fade .circle-2{transform:rotate(-80deg)}webc-spinner>.circle-fade .circle-2::after{animation-delay:calc(-0.2 * var(--animation-delay))}webc-spinner>.circle-fade .circle-3{transform:rotate(-120deg)}webc-spinner>.circle-fade .circle-3::after{animation-delay:calc(-0.3 * var(--animation-delay))}webc-spinner>.circle-fade .circle-4{transform:rotate(-160deg)}webc-spinner>.circle-fade .circle-4::after{animation-delay:calc(-0.4 * var(--animation-delay))}webc-spinner>.circle-fade .circle-5{transform:rotate(-200deg)}webc-spinner>.circle-fade .circle-5::after{animation-delay:calc(-0.5 * var(--animation-delay))}webc-spinner>.circle-fade .circle-6{transform:rotate(-240deg)}webc-spinner>.circle-fade .circle-6::after{animation-delay:calc(-0.6 * var(--animation-delay))}webc-spinner>.circle-fade .circle-7{transform:rotate(-280deg)}webc-spinner>.circle-fade .circle-7::after{animation-delay:calc(-0.7 * var(--animation-delay))}webc-spinner>.circle-fade .circle-8{transform:rotate(-320deg)}webc-spinner>.circle-fade .circle-8::after{animation-delay:calc(-0.8 * var(--animation-delay))}webc-spinner>.circle-fade .circle-9{transform:rotate(-360deg)}webc-spinner>.circle-fade .circle-9::after{animation-delay:calc(-0.9 * var(--animation-delay))}@keyframes spinner-default-animation{0%,39%,100%{opacity:0}40%{opacity:1}}[hidden]{display:none !important}'};export{h as webc_container,m as webc_spinner}