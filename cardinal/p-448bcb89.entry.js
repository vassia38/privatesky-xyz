import{r as t,h as e}from"./p-ab545ab4.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as s}from"./p-1c2c6971.js";let r=(()=>{class r{constructor(e){t(this,e),this.title=""}render(){const t=e("div",{class:"psk-description"},e("slot",null));return""===this.title.replace(/\s/g,"")?e("psk-card",null,t):e("psk-chapter",{title:this.title},t)}}return function(t,e,s,r){var i,p=arguments.length,l=p<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,s,r);else for(var o=t.length-1;o>=0;o--)(i=t[o])&&(l=(p<3?i(l):p>3?i(e,s,l):i(e,s))||l);p>3&&l&&Object.defineProperty(e,s,l)}([s({description:"This property is the title of the new psk-card/psk-chapter that will be created.",isMandatory:!1,propertyType:"string",specialNote:"All the empty spaces in the title will be deleted."})],r.prototype,"title",void 0),r})();export{r as psk_description}