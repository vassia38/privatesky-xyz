System.register(["./p-c99df712.system.js","./p-90e1ba03.system.js","./p-ca300ef6.system.js"],(function(t){"use strict";var e,n,i;return{setters:[function(t){e=t.r;n=t.h},function(){},function(t){i=t.b}],execute:function(){var s=t("psk_event_descriptor",function(){function t(t){e(this,t);this.title="";this.decoratorEvents=[]}t.prototype.receivedEventsDescription=function(t){var e=t.detail;t.stopImmediatePropagation();if(e&&e.length>0){this.decoratorEvents=JSON.parse(JSON.stringify(e))}};t.prototype.render=function(){var t=this.decoratorEvents.map((function(t){var e=t.eventName+": CustomEvent";return n("psk-hoc",{title:t.eventName},n("p",{class:"subtitle"},n("i",null,e)),n("p",null,t.description),t.specialNote?n("p",null,n("b",null,"Note: ",t.specialNote)):null)}));return n("psk-chapter",{title:this.title,id:i(this.title)},t)};return t}())}}}));