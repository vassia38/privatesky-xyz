import{g as e}from"./p-bd5842d7.js";import{b as t,c as n,d as s,e as r}from"./p-f77f00c7.js";import{c as i}from"./p-a361a33b.js";function o(o){return function(c,a){const{connectedCallback:l,render:f}=c;let d="psk-send-events",b=t,p=n,m="definedEvents";c.connectedCallback=function(){let t=this,n=e(t);if(o.controllerInteraction&&(p=s,m="definedControllers",b=r,d="psk-send-controllers"),n.hasAttribute(p)){if(!t.componentDefinitions)return t.componentDefinitions={},t.componentDefinitions[m]=[Object.assign({},o,{eventName:String(a)})],l&&l.call(t);let e=t.componentDefinitions;const n=Object.assign({},o,{eventName:String(a)});if(e&&e.hasOwnProperty(b)){let t=[...e[b]];t.push(n),e[b]=[...t]}else e[b]=[n];t.componentDefinitions=Object.assign({},e)}return l&&l.call(t)},c.render=function(){if(!this.componentDefinitions||!this.componentDefinitions||!this.componentDefinitions[b])return f&&f.call(this);let e=this.componentDefinitions[b];e&&(e=e.reverse()),i(d,{composed:!0,bubbles:!0,cancelable:!0,detail:e},!0)}}}export{o as T};