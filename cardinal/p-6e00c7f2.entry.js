import{r as t,h as e,H as s}from"./p-7cf930c5.js";import{C as o}from"./p-daa61edb.js";const i=class{constructor(e){t(this,e)}detailToggle(t){t.preventDefault(),t.stopImmediatePropagation(),this.opened=!this.opened}render(){return e(s,{opened:this.opened},e("div",{class:{summary:!0},tabindex:0,onClick:t=>this.detailToggle(t)},e("psk-icon",{icon:this.opened?"chevron-down":"chevron-right"}),e("span",null,this.summary)),this.opened?e("div",{class:{content:!0}},e("slot",null)):"")}};!function(t,e,s,o){var i,n=arguments.length,c=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,s):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,s,o);else for(var r=t.length-1;r>=0;r--)(i=t[r])&&(c=(n<3?i(c):n>3?i(e,s,c):i(e,s))||c);n>3&&c&&Object.defineProperty(e,s,c)}([o()],i.prototype,"opened",void 0);export{i as psk_details}