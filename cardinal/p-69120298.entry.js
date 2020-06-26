import{r as e,h as t}from"./p-6c966499.js";import{I as i}from"./p-67893e64.js";import{g as o}from"./p-ba942fe7.js";import{T as s}from"./p-c1d16db3.js";import{C as a}from"./p-7f0c608d.js";import{B as l}from"./p-e7f09261.js";var n=function(e,t,i,o){var s,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(l=(a<3?s(l):a>3?s(t,i,l):s(t,i))||l);return a>3&&l&&Object.defineProperty(t,i,l),l};let r=(()=>{class r{constructor(t){e(this,t),this.options=null,this.selectOptions=null,this.label=null,this.value=null,this.selectionType="single",this.placeholder=null,this.required=!1,this.disabled=!1,this.invalidValue=null}componentWillLoad(){"single"!==this.selectionType&&"multiple"!==this.selectionType&&(this.selectionType="single")}render(){this.selectOptions&&this.__createOptions.call(this);const e=this.label&&o(this.label,i,"").toLowerCase(),s=-1!==this.options.findIndex(e=>e.value===this.value);let a=!0;return this.options&&!s&&(a=!0,this.modelHandler.updateModel("value","")),t("div",{class:"form-group"},t("psk-label",{for:e,label:this.label}),t("select",{name:e,id:e,class:"form-control",disabled:this.disabled,required:this.required,multiple:"multiple"===this.selectionType,onChange:this.__onChangeHandler.bind(this)},this.placeholder&&t("option",{disabled:!0,label:this.placeholder,value:"",selected:a}),this.options&&this.options.map(e=>{const s=e.value?e.value:e.label&&o(e.label,i,"");return t("option",{value:s,label:e.label,selected:!0===e.selected||this.value===s})})))}__onChangeHandler(e){e.preventDefault(),e.stopImmediatePropagation(),this.modelHandler.updateModel("value",e.target.value)}__createOptions(){let e=this.selectOptions.split("|");this.options=e.map(e=>{let t,s=e.trim().split(","),a=s[0].trim();return t=1===s.length?o(a,i,""):s[1].trim(),{label:a,value:t}})}}return n([a(),l()],r.prototype,"modelHandler",void 0),n([s({description:["This property is providing the list of the options available for selection.",'Each option is sepparated by the special character "|" (pipe) (e.g. option 1 | option 2 | option 3).',"For each option, as a recommendation, you should add a value sepparated by comma.",'Example of options with values: "Romania, ROM | Italy, ITA | Germany, DE"',"If no value is provided for an option, the component will create one. It will take the option and will normalize it creating the value. Any character which does not comply to the rule, will be removed.",'The rule is that a label must match the folowing regular exprssion: "A-Za-z0-9_-"., which means that all the characers should be alpha-numeric and only two special characters are allowed (_ and -).'],isMandatory:!1,propertyType:"string"})],r.prototype,"selectOptions",void 0),n([s({description:['By filling out this property, the component will display above it, a label using <psk-link page="forms/psk-label">psk-label</psk-link> component.'],isMandatory:!1,propertyType:"string",specialNote:"If this property is not provided, the component will be displayed without any label"})],r.prototype,"label",void 0),n([s({description:["Specifies the value of a psk-select component.",'This value is updated also in the model using the two-way binding. Information about two-way binding using models and templates can be found at: <psk-link page="forms/using-forms">Using forms</psk-link>.'],isMandatory:!1,propertyType:"string"})],r.prototype,"value",void 0),n([s({description:["Specifies the type of the psk-select component.",'There are two possible values, "single" and "multiple". If no value is provided, "single" is assumed.'],isMandatory:!1,propertyType:"string",defaultValue:"single"})],r.prototype,"selectionType",void 0),n([s({description:["Specifies a short hint that describes the expected value of an psk-date-input component"],isMandatory:!1,propertyType:"string"})],r.prototype,"placeholder",void 0),n([s({description:["Specifies that at least one option must be selected before submitting the form.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"required",void 0),n([s({description:["\tSpecifies that the component is disabled. Most of the times is used within conditional formatting of components.",'Accepted values: "true" and "false"'],isMandatory:!1,propertyType:"boolean",defaultValue:"false"})],r.prototype,"disabled",void 0),n([s({description:["This property indicates if the value entered by the user is a valid one according to some validation present in the controller."],isMandatory:!1,propertyType:"boolean"})],r.prototype,"invalidValue",void 0),r})();export{r as psk_select}