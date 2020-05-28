import{r as e,c as t,h as s,g as i}from"./p-9eaba2bd.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as r}from"./p-76b560d9.js";import{T as o}from"./p-dbe17a55.js";var a=function(e,t,s,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(o<3?r(a):o>3?r(t,s,a):r(t,s))||a);return o>3&&a&&Object.defineProperty(t,s,a),a};const n=class{constructor(s){e(this,s),this.giveMeSeed=t(this,"giveMeSeed",7)}componentDidLoad(){let e=this.element.querySelector("iframe");window.document.addEventListener(this.digestSeedHex,t=>{const s=t.detail||{};"seed"!==s.query?"completed"===s.status&&e.contentWindow.location.reload():e.contentWindow.document.dispatchEvent(new CustomEvent(this.digestSeedHex,{detail:{seed:this.seed}}))},!0)}getSWOnMessageHandler(){return this.onServiceWorkerMessageHandler||(this.onServiceWorkerMessageHandler=e=>{e.data&&"seed"===e.data.query&&e.data.identity===this.digestSeedHex&&e.source.postMessage({seed:this.seed})}),this.onServiceWorkerMessageHandler}connectedCallback(){navigator.serviceWorker.addEventListener("message",this.getSWOnMessageHandler())}disconnectedCallback(){navigator.serviceWorker.removeEventListener("message",this.getSWOnMessageHandler())}componentWillLoad(){return new Promise(e=>{this.giveMeSeed.emit({appName:this.appName,callback:(t,s)=>{if(t)throw t;this.seed=s,this.digestSeedHex=this.digestMessage(s),e()}})})}digestMessage(e){return require("pskcrypto").pskHash(e,"hex")}render(){let e=window.top.location.href;return"/"!==e[e.length-1]&&(e+="/"),s("iframe",{sandbox:"allow-scripts allow-same-origin allow-forms","landing-page":this.landingPath,frameborder:"0",style:{overflow:"hidden",height:"100%",width:"100%"},src:e+"iframe/"+this.digestSeedHex})}get element(){return i(this)}};a([r({isMandatory:!0,description:["This property represents the name of the Self Sovereign Application that you want to run.","Before the component is loaded it uses this property to emit the giveMeSeed event."],propertyType:"string"})],n.prototype,"appName",void 0),a([r({isMandatory:!0,description:"This property represents the direct path that will be passed to the Iframe as the landing-page property.",propertyType:"string"})],n.prototype,"landingPath",void 0),a([o({description:["This event is emitted the right before the component is loaded in order the obtain the seed.","After this the seed is hashed using pskcrypto in order to be added in the iframe source."]})],n.prototype,"giveMeSeed",void 0);export{n as psk_ss_app}