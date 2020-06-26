import{r as e,h as t}from"./p-6c966499.js";import"./p-67893e64.js";import"./p-ba942fe7.js";import{T as r}from"./p-c1d16db3.js";import{C as i}from"./p-7f0c608d.js";import{B as o}from"./p-e7f09261.js";var s=function(e,t,r,i){var o,s=arguments.length,a=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(a=(s<3?o(a):s>3?o(t,r,a):o(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a};let a=(()=>{class a{constructor(t){e(this,t),this.errorLoadingPage=!1,this.type="div"}componentWillLoad(){return new Promise(e=>{this.getPageContent(this.pageUrl,this.getPageHandler(e))})}watchHandler(e){this.getPageContent(e,this.getPageHandler())}getPageHandler(e){let t=this;return function(r,i){r?t.errorLoadingPage=!0:(t.errorLoadingPage=!1,t.pageContent=i),"function"==typeof e&&e()}}getPageContent(e,t){let r=new XMLHttpRequest;r.open("GET",e),r.onload=()=>{200!=r.status?t(new Error("Some error occurred")):t(void 0,r.responseText)},r.onerror=()=>{this.errorLoadingPage=!0},r.send()}render(){let e=null;return e=this.type&&"iframe"===this.type.toLowerCase()?t("iframe",{class:"iframe_page_content",frameborder:"0",style:{overflow:"hidden",height:"100%",width:"100%"},src:"data:text/html;charset=utf-8, "+escape(this.pageContent)}):t("div",{class:"page_content",innerHTML:this.pageContent}),this.errorLoadingPage?t("h4",null,`Page ${this.pageUrl} could not be loaded!`):e}static get watchers(){return{pageUrl:["watchHandler"]}}}return s([o()],a.prototype,"modelHandler",void 0),s([i()],a.prototype,"pageContent",void 0),s([r({description:["This property is the url for the page that needs to be loaded.","When this component loads a get http request will be issued and the cotent of that url will be rendered if it can be accessed."],isMandatory:!0,propertyType:"string"})],a.prototype,"pageUrl",void 0),s([r({description:["This property indicates if the page should use an iframe or div to render the content retrieved using pageSrc property.","Accepted values: iframe, div","Default value:div"],isMandatory:!1,propertyType:"string"})],a.prototype,"type",void 0),a})();export{a as psk_page_loader}