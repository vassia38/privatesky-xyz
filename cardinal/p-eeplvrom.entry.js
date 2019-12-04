import{r as t,h as e,g as o}from"./p-bd5842d7.js";import{T as r}from"./p-ce13cd9c.js";import"./p-9138c41e.js";import{C as s}from"./p-bd9d7655.js";var i=function(t,e,o,r){var s,i=arguments.length,n=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,o,r);else for(var h=t.length-1;h>=0;h--)(s=t[h])&&(n=(i<3?s(n):i>3?s(e,o,n):s(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};const n=class{constructor(e){t(this,e),this.tableContent=null}render(){return e("table",null,this.tableContent)}componentWillLoad(){let t=this.element.innerHTML.split(/\n/g).map(t=>t.trim().replace("\x3c!----\x3e","")).filter(t=>t.length>0).map(t=>`<tr>${t.split("|").map(t=>this.head?`<th>${t.trim()}</th>`:`<td>${t.trim()}</td>`).join("")}</tr>`),e=[];this.head?(e.push(this._stringArrayToHTMLElement("thead",t.splice(0,1))),this.footer?(e.push(this._stringArrayToHTMLElement("tbody",t.splice(0,t.length-1))),e.push(this._stringArrayToHTMLElement("tfoot",[t[t.length-1]]))):e.push(this._stringArrayToHTMLElement("tbody",t.splice(0)))):e=[this._stringArrayToHTMLElement("tbody",t)],this.tableContent=e,this.element.innerHTML=""}_stringArrayToHTMLElement(t,o){return e(t,{innerHTML:o.join("")})}get element(){return o(this)}};i([s(),r({description:"If this property is set to true then the first row of the given content will be shown as a table header.",isMandatory:!1,propertyType:"boolean"})],n.prototype,"head",void 0),i([r({description:"If this property is set to true then the last row of the given content will be shown as a table footer.",isMandatory:!1,propertyType:"boolean"})],n.prototype,"footer",void 0);export{n as psk_table};