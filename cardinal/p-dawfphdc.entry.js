import{r as e,h as t}from"./p-bd5842d7.js";import{T as r}from"./p-e4951b40.js";import{C as s}from"./p-bd9d7655.js";var n=function(e,t,r,s){var n,i=arguments.length,o=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,r):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,s);else for(var a=e.length-1;a>=0;a--)(n=e[a])&&(o=(i<3?n(o):i>3?n(t,r,o):n(t,r))||o);return i>3&&o&&Object.defineProperty(t,r,o),o};const i=class{constructor(t){e(this,t),this.urlDestination=null,this.pageRenderer="psk-page-not-found-renderer"}render(){return null!==this.urlDestination?t("stencil-router-redirect",{url:this.urlDestination}):-1!=window.location.pathname.indexOf(this.basePath)?t("stencil-router-redirect",{url:this.basePath}):t(this.pageRenderer,null)}};n([s(),r({description:"This property is the base path of the website. \n\t\tIf this parameter is sent to the component, then when the user navigates to an unknown page, he will be redirected to the base path. \n\t\tIt is not mandatory to be the root of the application, it can be the root of a section inside the website.",specialNote:"If this parameter is missing, urlDestination parameter is checked.",isMandatory:!1,propertyType:"string"})],i.prototype,"basePath",void 0),n([r({description:"This property gives a custom redirect URL destination in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, pageRenderer parameter is checked.",isMandatory:!1,propertyType:"string"})],i.prototype,"urlDestination",void 0),n([r({description:"This property allows the component to display a custom Page \n\t\tnot found content in case the user navigates to an unknown page.",specialNote:"If this parameter is missing, psk-page-not-found-renderer is assumed.",isMandatory:!1,propertyType:"string",defaultValue:"psk-page-not-found-renderer"})],i.prototype,"pageRenderer",void 0);export{i as psk_page_not_found};