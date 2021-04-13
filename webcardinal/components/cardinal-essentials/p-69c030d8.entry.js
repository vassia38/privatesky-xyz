import{r as e,h as t,g as s}from"./p-8419ec55.js";import"./p-5e730c51.js";import{C as r}from"./p-848ff216.js";import{T as i}from"./p-73e3e0ec.js";var p=function(e,t,s,r){var i,p=arguments.length,a=p<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,r);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(p<3?i(a):p>3?i(t,s,a):i(t,s))||a);return p>3&&a&&Object.defineProperty(t,s,a),a};const a=class{constructor(t){e(this,t)}computeStepDesign(e,t,s){let r="";return 0===e?r+="first ":e===s&&(r+="last "),e<t?r+="done":e===t&&(r+="current"),r}render(){return this.htmlElement.isConnected?t("div",{class:"steps clearfix"},t("ul",{role:"tablist"},this.wizardSteps.map((e=>t("li",{role:"tab",class:this.computeStepDesign(e.stepIndex,this.activeStep.stepIndex,this.wizardSteps.length-1)},t("div",{class:"button",onClick:t=>{t.preventDefault(),t.stopImmediatePropagation(),this.handleStepChange(e.stepIndex)}},t("span",{class:"current-info audible"}),t("div",{class:"title"},t("p",{class:"step-icon"},t("span",null,e.stepIndex+1)),t("div",{class:"step-text"},t("span",{class:"step-inner"},e.stepName))))))))):null}get htmlElement(){return s(this)}};p([r(),i({description:"This property holds an array of:\n            wizard configuration\n            the names of the steps\n            the components that will be displayed\n            other properties, like information for the steps.(optional).",isMandatory:!1,propertyType:"array for WizardStep items(WizardStep[])",defaultValue:"psk-stepper-renderer"})],a.prototype,"wizardSteps",void 0),p([i({description:"The WizardStep created by psk-wizard and passed on by psk-stepper.",isMandatory:!0,propertyType:"WizardStep"})],a.prototype,"activeStep",void 0),p([i({description:"This property is a function that modifies the way the step change is interpreted.",isMandatory:!0,propertyType:"Function"})],a.prototype,"handleStepChange",void 0);export{a as psk_stepper_renderer}