import { r as registerInstance, h } from './core-210175f2.js';

const PskWizard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    componentWillLoad() {
        if (!this.currentWizardStep && this.wizardSteps.length > 1) {
            this.currentWizardStep = this.wizardSteps[1];
        }
    }
    render() {
        if (!this.currentWizardStep) {
            return null;
        }
        let stepHeader = null;
        if (this.wizardSteps.length > 0) {
            stepHeader = this.wizardSteps.map((step) => {
                let stepClass = step.stepIndex === 1 ? "first " : step.stepIndex === this.wizardSteps.length ? "last " : "";
                if (step.stepIndex < this.currentWizardStep.stepIndex) {
                    stepClass += "done";
                }
                if (step.stepIndex === this.currentWizardStep.stepIndex) {
                    stepClass += "current";
                }
                return (h("li", { role: "tab", class: stepClass }, h("a", { id: "form-total-t-0", href: "#form-total-h-0", "aria-controls": "form-total-p-0" }, h("span", { class: "current-info audible" }), h("div", { class: "title" }, h("p", { class: "step-icon" }, h("span", null, step.stepIndex)), h("div", { class: "step-text" }, h("span", { class: "step-inner-1" }, step.stepName))))));
            });
        }
        return (h("div", { class: "page-content" }, h("div", { class: "wizard-content" }, h("div", { class: "wizard-form" }, h("form", { class: "form-register" }, h("div", { id: "form-total", role: "application", class: "wizard clearfix vertical" }, h("div", { class: "steps clearfix" }, h("ul", { role: "tablist" }, stepHeader)), h("div", { class: "content clearfix" }, h("section", { id: "form-total-p-0", role: "tabpanel", "aria-labelledby": "form-total-h-0", class: "body current", "aria-hidden": "false" }, h("div", { class: "inner" }, h("div", { class: "wizard-header" }, h("h3", { class: "heading" }, "Account Setup")), h("div", { class: "form-row" }, h("div", { class: "form-holder form-holder-2" }, h("label", { htmlFor: "your_email" }, "Email Address"), h("input", { type: "email", name: "your_email", id: "your_email", class: "form-control", pattern: "[^@]+@[^@]+.[a-zA-Z]{2,6}", placeholder: "Your Email", required: true }))), h("div", { class: "form-row" }, h("div", { class: "form-holder form-holder-2" }, h("label", { htmlFor: "password" }, "Password"), h("input", { type: "password", name: "password", id: "password", class: "form-control", placeholder: "Password", required: true }))), h("div", { class: "form-row" }, h("div", { class: "form-holder form-holder-2" }, h("label", { htmlFor: "confirm_password" }, "Confirm Password"), h("input", { type: "password", name: "confirm_password", id: "confirm_password", class: "form-control", placeholder: "Password", required: true }))))))))))));
    }
    static get style() { return "\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-ExtraBold.ttf\') format(\'truetype\');\n    font-weight: 800;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-Regular.ttf\') format(\'truetype\');\n    font-weight: normal;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf\') format(\'truetype\');\n    font-weight: 800;\n    font-style: italic;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-Light.ttf\') format(\'truetype\');\n    font-weight: 300;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-SemiBold.ttf\') format(\'truetype\');\n    font-weight: 600;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf\') format(\'truetype\');\n    font-weight: 600;\n    font-style: italic;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-BoldItalic.ttf\') format(\'truetype\');\n    font-weight: bold;\n    font-style: italic;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-Bold.ttf\') format(\'truetype\');\n    font-weight: bold;\n    font-style: normal;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-LightItalic.ttf\') format(\'truetype\');\n    font-weight: 300;\n    font-style: italic;\n}\n\n\@font-face {\n    font-family: \'Open Sans\';\n    src: url(\'../fonts/Open_Sans/OpenSans-Italic.ttf\') format(\'truetype\');\n    font-weight: normal;\n    font-style: italic;\n}\n\n\n.page-content {\n    width: 100%;\n    margin: 0 auto;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -ms-flex-direction: column;\n    flex-direction: column;\n}\n\n.wizard-content {\n    width: 790px;\n    border-radius: 10px;\n    font-family: \'Open Sans\', sans-serif;\n    position: relative;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);\n    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);\n}\n\n.wizard-content .wizard-form {\n    width: 100%;\n}\n\n.form-register .vertical {\n    display: block;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 10px;\n}\n\n.form-register .steps {\n    float: left;\n    width: 260px;\n}\n\n.form-register .steps ul {\n    list-style: none;\n    padding-left: 0;\n    margin: 0;\n}\n\n.form-register .steps li {\n    background: #b2b2b2;\n}\n\n.form-register .steps li:first-child,\n.form-register .steps li.current:first-child {\n    margin-top: 35px;\n}\n\n.form-register .steps li,\n.form-register .steps li.current {\n    position: relative;\n    margin: 0 50px 15px 40px;\n}\n\n.form-register .steps li.current {\n    background: #33a7d7;\n}\n\n.form-register .steps li.done {\n    background: #269b30;\n}\n\n.form-register .steps li .current-info {\n    display: none;\n}\n\n.form-register .steps li a {\n    text-decoration: none;\n}\n\n.form-register .steps li a .title {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    position: relative;\n}\n\n.form-register .steps li a .title::after {\n    content: \"\";\n    position: absolute;\n    left: 100%;\n    top: 0;\n    border-top: 25px solid transparent;\n    border-bottom: 30px solid transparent;\n    border-left: 45px solid #b2b2b2;\n}\n\n.form-register .steps li.current .title::after {\n    border-left: 45px solid #33a7d7;\n}\n\n.form-register .steps li.done .title::after {\n    border-left: 45px solid #269b30;\n}\n\n.form-register .steps li a .title .step-icon {\n    color: #fff;\n    font-size: 25px;\n    margin: 0;\n    padding: 13px 17px;\n    position: relative;\n}\n\n.form-register .steps li a .title .step-icon::before {\n    position: absolute;\n    height: 60px;\n    width: 1px;\n    left: 100%;\n    top: 0;\n    content: \"\";\n    background: rgba(255, 255, 255, 0.3);\n}\n\n.form-register .steps li a .step-text {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    margin-left: 10px;\n    padding-left: 5px;\n}\n\n.form-register .steps li a .step-text span {\n    display: block;\n}\n\n.form-register .steps li a .step-text .step-inner-1 {\n    font-size: 16px;\n    color: #fff;\n}\n\n.form-register .steps li a .step-text .step-inner-2 {\n    font-size: 14px;\n    font-style: italic;\n    color: rgba(255, 255, 255, 0.7);\n}\n\n.form-register .content {\n    float: right;\n    width: 530px;\n}\n\n.form-register .content h2 {\n    display: none;\n}\n\n.form-register .content .inner {\n    margin: 35px 40px 25px;\n    -webkit-box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);\n    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 5px;\n    padding: 0 30px 25px;\n    background-color: #fff;\n}\n\n.form-register .content .wizard-header {\n    padding: 9px 30px 11px;\n    background: #33a7d7;\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px;\n    margin: 0 -30px 24px;\n}\n\n.form-register .content .wizard-header h3 {\n    font-size: 22px;\n    color: #fff;\n    margin: 0;\n}\n\n.inner .form-row {\n    display: -ms-flexbox;\n    display: flex;\n    margin: 0 -10px;\n    position: relative;\n}\n\n.inner .form-row .form-holder {\n    width: 50%;\n    padding: 0 10px;\n    margin-bottom: 19px;\n    position: relative;\n}\n\n.inner .form-row .form-holder.form-holder-1 {\n    width: 65.3%;\n}\n\n.inner .form-row .form-holder.form-holder-2 {\n    width: 100%;\n    position: relative;\n}\n\n.inner .form-row .form-holder label {\n    color: #666;\n    font-size: 16px;\n    font-weight: 400;\n    display: block;\n    padding-bottom: 8px;\n}\n\n.inner .form-row .form-holder input,\n.inner .form-row .form-holder select {\n    width: 100%;\n    padding: 12px 20px;\n    border: 1px solid #e5e5e5;\n    -webkit-appearance: unset;\n    -moz-appearance: unset;\n    appearance: unset;\n    font-family: \'Open Sans\', sans-serif;\n    font-weight: 600;\n    font-size: 16px;\n    color: #333;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n    border-radius: 3px;\n}\n\ninput::-webkit-input-placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput::-moz-placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput:-ms-input-placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput::-ms-input-placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput::placeholder {\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput:-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\ninput::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: #999;\n    font-size: 15px;\n    font-weight: 400;\n}\n\n.inner .form-row .form-holder .content-inner {\n    font-weight: 400;\n    color: #666;\n    font-size: 14px;\n}\n\n.inner .form-row .form-holder .content-inner p {\n    margin: 0;\n}\n\n.inner .form-row .form-holder .form-checkbox {\n    position: relative;\n    padding-top: 55px;\n}\n\n.inner .form-row .form-holder .form-checkbox p {\n    margin-left: 27px;\n    color: #333;\n    font-size: 14px;\n    font-weight: 600;\n}\n\n.inner .form-row .form-holder .form-checkbox input {\n    position: absolute;\n    opacity: 0;\n}\n\n.inner .form-row .form-holder .form-checkbox .checkmark {\n    position: absolute;\n    bottom: 8%;\n    left: 0;\n    height: 18px;\n    width: 18px;\n    border: 1px solid #e5e5e5;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\n.inner .form-row .form-holder .form-checkbox .checkmark::after {\n    content: \"\";\n    position: absolute;\n    left: 6px;\n    top: 2px;\n    width: 3px;\n    height: 8px;\n    border: 1px solid #33a7d7;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    display: none;\n}\n\n.inner .form-row .form-holder .form-checkbox input:checked~.checkmark::after {\n    display: block;\n}\n\n.actions {\n    float: right;\n    width: 530px;\n}\n\n.actions ul {\n    list-style: none;\n    padding: 0 40px;\n    margin-bottom: 40px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n}\n\n.actions ul li.disabled,\n.actions ul li:first-child {\n    opacity: 0;\n}\n\n.actions ul li {\n    padding: 0;\n    border: none;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    height: 42px;\n    width: 120px;\n    border-radius: 3px;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -ms-flex-align: center;\n    align-items: center;\n    background: #364cd2;\n    cursor: pointer;\n    font-size: 16px;\n    font-weight: 400;\n}\n\n.actions ul li:hover {\n    background: #28379e;\n}\n\n.actions ul li a {\n    color: #fff;\n    text-decoration: none;\n    padding: 13px 19px;\n}\n\n\n/* Responsive */\n\n\@media screen and (max-width: 991px) {\n    .page-content .wizard-heading {\n        margin-left: 0;\n        width: 90%;\n    }\n    .wizard-content {\n        width: 90%;\n    }\n    .form-register .steps {\n        width: 95%;\n        float: none;\n    }\n    .form-register .content,\n    .actions {\n        float: none;\n        width: 100%;\n    }\n}\n\n\@media screen and (max-width: 575px) {\n    .inner .form-row {\n        flex-direction: column;\n        -o-flex-direction: column;\n        -ms-flex-direction: column;\n        -moz-flex-direction: column;\n        -webkit-flex-direction: column;\n        margin: 0;\n    }\n    .inner .form-row .form-holder {\n        width: 100%;\n    }\n    .inner .form-row .form-holder {\n        padding: 0;\n    }\n    .form-register .steps {\n        width: 90%;\n        float: none;\n    }\n}"; }
};

export { PskWizard as psk_wizard };