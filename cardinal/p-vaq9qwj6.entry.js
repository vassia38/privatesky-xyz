import{r as e,h as t,g as s}from"./p-9835b40a.js";import{L as i,P as l,T as r}from"./p-8102a7fd.js";import{C as o}from"./p-ec895615.js";const n=class{constructor(t){e(this,t),this.listContent=null}render(){return t(this.listType===i?"ol":"ul",null,this.listContent)}componentWillLoad(){let e="";console.log(this),this.getInnerContent&&(e=this.getInnerContent("innerHTML")),console.log(e);const t=e.split(/\n/g).map(e=>e.trim()).filter(e=>e.length>0&&"\x3c!----\x3e"!==e);if(0===t.length)return;const s=[];let i=!1,r=null,o=0,n="";t.forEach(e=>{if(null!==l.inlineTag.exec(e))i?n+=e:s.push(this._stringToHTMLElement("li",e));else{let t=l.startTag.exec(e);if(null!==t)i=!0,n+=e,r===t[0]?o++:r||(r=t[0]);else{let t=l.endTag.exec(e);null!==t?(n+=e,r===t[0].replace(/\//g,"")&&(0===o?(s.push(this._stringToHTMLElement("li",n)),r=null,n="",i=!1):o--)):i?n+=e:s.push(this._stringToHTMLElement("li",e))}}}),this.element.innerHTML="",this.listContent=[...s]}_stringToHTMLElement(e,s){return t(e,{innerHTML:s})}get element(){return s(this)}};!function(e,t,s,i){var l,r=arguments.length,o=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,s,i);else for(var n=e.length-1;n>=0;n--)(l=e[n])&&(o=(r<3?l(o):r>3?l(t,s,o):l(t,s))||o);r>3&&o&&Object.defineProperty(t,s,o)}([o(),r({description:['This property gives the type of the list. It has two type of values, "ordered" or "unordered"','If this property is missing, "unordered is assumed"'],isMandatory:!1,propertyType:"string",defaultValue:"unordered"})],n.prototype,"listType",void 0);export{n as psk_list};