import{V as e,M as t}from"./p-0aafcc26.js";function n(e,t){return window.$$&&$$.SSAPP_CONTEXT&&$$.SSAPP_CONTEXT.BASE_URL&&$$.SSAPP_CONTEXT.SEED&&0!==e.indexOf($$.SSAPP_CONTEXT.BASE_URL)&&0!==e.indexOf("data:image")&&(e=`${$$.SSAPP_CONTEXT.BASE_URL}${0===e.indexOf("/")?e.substr(1):e}`),fetch(e,t)}function o(e,t,o){n(e,{method:"POST",body:t}).then((e=>e.json().then((t=>{if(!e.ok||201!=e.status){let e="";Array.isArray(t)&&t.length?e=`${t[0].error.message}. Code: ${t[0].error.code}`:"object"==typeof t&&(e=t.message?t.message:JSON.stringify(t));let n=new Error(e);throw n.data=t,n}if(Array.isArray(t)){let e=[];for(const n of t)console.log(`Uploaded ${n.file.name} to ${n.result.path}`),e.push(n.result.path);o(void 0,e.length>1?e:e[0])}})))).catch((e=>o(e)))}function i(e,t,n,i){"function"==typeof n&&(i=n,n=void 0);const r=new FormData;let s="file";if(Array.isArray(t))for(const e of t)s="files[]",r.append(s,e);else r.append(s,t);let u=`/upload?path=${e}&input=${s}`;void 0!==n&&n.preventOverwrite&&(u+="&preventOverwrite=true"),o(u,r,i)}function r(e,t){Array.isArray(e)||(e=[e]);let o=[],i=[],r=s=>{let u=s;"/"!==s[0]&&(s="/"+s),function(e,t){n(e,{method:"DELETE"}).then((e=>{if(!e.ok)throw new Error(e.statusText);t()})).catch((e=>t(e)))}("/delete"+s,(n=>{if(n?o.push({filename:u,message:n.message}):i.push(u),e.length>0)return r(e.shift());t(o.length?o:void 0,i)}))};r(e.shift())}class s{constructor(e,t){this.directAccessEnabled=!1}enableDirectAccess(e){let t=this;!function e(t){let n=require("opendsu").loadAPI("sc"),o=void 0;try{o=n.getMainDSU()}catch(e){}if(o)t();else{const o=require("opendsu");o.loadAPI("http").doGet("/getSSIForMainDSU",(function(i,r){if(i)return reportUserRelevantError("Failed to enable direct DSUStorage access from Cardinal",i);let s=o.loadApi("config");"server"==o.loadApi("keyssi").parse(r).getHint()&&s.disableLocalVault(),o.loadAPI("resolver").loadDSU(r,((o,i)=>{if(o)return printOpenDSUError(o),reportUserRelevantInfo("Reattempting to enable direct DSUStorage from Cardinal",o),void setTimeout((function(){e(t)}),100);n.setMainDSU(i),t()}))}))}}((function(){if(t.directAccessEnabled)e(void 0,!0);else{let n=["addFile","addFiles","addFolder","appendToFile","createFolder","delete","extractFile","extractFolder","getArchiveForPath","getCreationSSI","getKeySSI","listFiles","listFolders","mount","readDir","readFile","rename","unmount","writeFile","listMountedDSUs","beginBatch","commitBatch","cancelBatch"],o=require("opendsu").loadAPI("sc").getMainDSU();for(let e of n)t[e]=o[e];t.directAccessEnabled=!0,e(void 0,!0)}}))}call(e,...t){if(0===t.length)throw Error("Missing arguments. Usage: call(functionName, arg1, arg2 ... callback)");const o=t.pop();n("/api?"+new URLSearchParams({name:e,arguments:JSON.stringify(t)}),{method:"GET"}).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{o(...e)})).catch((e=>o(e)))}setObject(e,t,n){try{let o=JSON.stringify(t);this.setItem(e,o,n)}catch(e){n(createOpenDSUErrorWrapper("setObject failed",e))}}getObject(e,t){this.getItem(e,"json",(function(e,n){if(e||!n)return t(void 0,void 0);t(void 0,n)}))}setItem(e,t,n){if(this.directAccessEnabled)this.writeFile(e,t,n);else{let i=e.split("/"),r=i.splice(i.length-1,1)[0];(e=i.join("/"))||(e="/"),o(`/upload?path=${e}&filename=${r}`,t,n)}}getItem(e,t,o){"function"==typeof t&&(o=t,t="arrayBuffer"),this.directAccessEnabled?this.readFile(e,(function(e,n){if(e)return o(e);try{"json"==t&&(n=JSON.parse(n.toString()))}catch(e){return o(e)}o(void 0,n)})):("/"!==e[0]&&(e="/"+e),function(e,t,o){n(e).then((e=>{if(!e.ok)throw new Error(e.statusText);e[t]().then((e=>o(void 0,e))).catch((e=>{throw e}))})).catch((e=>o(e)))}(e="/download"+e,t,o))}uploadFile(e,t,n,o){i(...arguments)}uploadMultipleFiles(e,t,n,o){i(...arguments)}deleteObjects(e,t){r(e,t)}removeFile(e,t){console.log("[Warning] - obsolete. Use DSU.deleteObjects"),r([e],t)}removeFiles(e,t){console.log("[Warning] - obsolete. Use DSU.deleteObjects"),r(e,t)}}bindableModelRequire=function e(t,n,o){function i(s,u){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(r)return r(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[s]={exports:{}};t[s][0].call(c.exports,(function(e){return i(t[s][1][e]||e)}),c,c.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({"/home/travis/build/PrivateSky/privatesky/builds/tmp/bindableModel.js":[function(e){void 0===window.process&&(window.process={}),e("./bindableModel_intermediar")},{"./bindableModel_intermediar":"/home/travis/build/PrivateSky/privatesky/builds/tmp/bindableModel_intermediar.js"}],"/home/travis/build/PrivateSky/privatesky/builds/tmp/bindableModel_intermediar.js":[function(e){(function(t){(function(){t.bindableModelLoadModules=function(){void 0===$$.__runtimeModules["overwrite-require"]&&($$.__runtimeModules["overwrite-require"]=e("overwrite-require")),void 0===$$.__runtimeModules.queue&&($$.__runtimeModules.queue=e("queue")),void 0===$$.__runtimeModules.soundpubsub&&($$.__runtimeModules.soundpubsub=e("soundpubsub")),void 0===$$.__runtimeModules["psk-bindable-model"]&&($$.__runtimeModules["psk-bindable-model"]=e("psk-bindable-model"))},t.bindableModelRequire=e,"undefined"!=typeof $$&&$$.requireBundle("bindableModel")}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"overwrite-require":"overwrite-require","psk-bindable-model":"psk-bindable-model",queue:"queue",soundpubsub:"soundpubsub"}],"/home/travis/build/PrivateSky/privatesky/modules/overwrite-require/moduleConstants.js":[function(e,t){t.exports={BROWSER_ENVIRONMENT_TYPE:"browser",MOBILE_BROWSER_ENVIRONMENT_TYPE:"mobile-browser",SERVICE_WORKER_ENVIRONMENT_TYPE:"service-worker",ISOLATE_ENVIRONMENT_TYPE:"isolate",THREAD_ENVIRONMENT_TYPE:"thread",NODEJS_ENVIRONMENT_TYPE:"nodejs"}},{}],"/home/travis/build/PrivateSky/privatesky/modules/overwrite-require/standardGlobalSymbols.js":[function(e){(function(t){(function(){let n=console;if(void 0===$$.Buffer&&($$.Buffer=e("buffer").Buffer),void 0===t.$$.uidGenerator&&($$.uidGenerator={},$$.uidGenerator.safe_uuid=e("swarmutils").safe_uuid),t.process&&"true"===process.env.NO_LOGS)console.log("Environment flag NO_LOGS is set, logging to console");else try{e("zeromq");const t=e("psklogger");n=t.PSKLogger.getLogger(),console.log("Logger init successful",process.pid)}catch(e){-1!==e.message.indexOf("psklogger")||-1!==e.message.indexOf("zeromq")?(console.log("Logger not available, using console"),n=console):console.log(e)}$$.registerGlobalSymbol=function(e,t){void 0===$$[e]?Object.defineProperty($$,e,{value:t,writable:!1}):n.error("Refusing to overwrite $$."+e)},console.warn=(...e)=>{console.log(...e)},$$.registerGlobalSymbol("autoThrow",(function(e){if(!e)throw e})),$$.registerGlobalSymbol("propagateError",(function(e,t){if(e)throw t(e),e})),$$.registerGlobalSymbol("logError",(function(e){e&&(console.log(e),$$.err(e))})),console.log("Fix the fixMe to not display on console but put in logs"),$$.registerGlobalSymbol("fixMe",(function(){})),$$.registerGlobalSymbol("exception",(function(e){throw new Error(e)})),$$.registerGlobalSymbol("throw",(function(e){throw new Error(e)})),$$.incomplete=function(...e){e.unshift("Incomplete feature touched:"),n.warn(...e)},$$.notImplemented=$$.incomplete,$$.registerGlobalSymbol("assert",(function(e,t){if(!e)throw new Error("Assert false "+t)})),$$.registerGlobalSymbol("flags",(function(){$$.incomplete("flags handling not implemented")})),$$.registerGlobalSymbol("obsolete",(function(...e){e.unshift("Obsolete feature:"),n.log(...e),console.log(...e)})),$$.registerGlobalSymbol("log",(function(...e){e.unshift("Log:"),n.log(...e)})),$$.registerGlobalSymbol("info",(function(...e){e.unshift("Info:"),n.log(...e),console.log(...e)})),$$.registerGlobalSymbol("err",(function(...e){e.unshift("Error:"),n.error(...e),console.error(...e)})),$$.registerGlobalSymbol("error",(function(...e){e.unshift("Error:"),n.error(...e),console.error(...e)})),$$.registerGlobalSymbol("warn",(function(...e){e.unshift("Warn:"),n.warn(...e),console.log(...e)})),$$.registerGlobalSymbol("syntaxError",(function(...e){e.unshift("Syntax error:"),n.error(...e);try{throw new Error("Syntax error or misspelled symbol!")}catch(t){console.error(...e),console.error(t.stack)}})),$$.invalidMemberName=function(e,t){let o="unknown";t&&t.meta&&(o=t.meta.swarmTypeName);const i="Invalid member name "+e+"in swarm "+o;console.error(i),n.err(i)},$$.registerGlobalSymbol("invalidSwarmName",(function(e){const t="Invalid swarm name "+e;console.error(t),n.err(t)})),$$.registerGlobalSymbol("unknownException",(function(...e){e.unshift("unknownException:"),n.err(...e),console.error(...e)})),$$.registerGlobalSymbol("event",(function(e,...t){n.hasOwnProperty("event")?n.event(e,...t):"status.domains.boot"===e&&console.log("Failing to console...",e,...t)})),$$.registerGlobalSymbol("redirectLog",(function(e,t){n.hasOwnProperty("redirect")&&n.redirect(e,t)})),$$.registerGlobalSymbol("throttlingEvent",(function(...e){n.log(...e)}))}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{buffer:!1,psklogger:!1,swarmutils:!1}],"/home/travis/build/PrivateSky/privatesky/modules/psk-bindable-model/lib/PskBindableModel.js":[function(e,t){const n=e("soundpubsub").soundPubSub,o="chainChanged",i=".",r=["copyWithin","fill","pop","push","reverse","shift","slice","sort","splice","unshift"];n.registerCompactor(o,(function(e,t){if(e.type===o)return t}));let s=0;t.exports=class{static setModel(e){let t=void 0,u="Model."+s+i,a=new Set;const l={};function c(e,t){return e?e+i+t:t}function f(e){return u+e}function d(e){return function(n,o,i){let r=c(e,o);return n[o]=i&&"object"==typeof i?h(i,r):i,t.notify(r),!0}}function h(e,s){if("object"!=typeof e||e instanceof File)return e;let u,l,b,p,$=!s;$&&(u=function(e){(function(e){"string"!=typeof e&&(e=""+e);let t=new Set;t.add("*");let n=e.split(i).map((e=>e.trim())),o="";for(let e=0;e<n.length;e++)0!==e?o+=i+n[e]:o=n[e],t.add(o);return a.forEach((n=>{n.startsWith(e)&&t.add(n)})),t})(e).forEach((t=>{n.publish(f(t),{type:o,chain:t,targetChain:e})}))},b=function(e){return e?e.split(i).map((e=>e.trim())).reduce(((e,t)=>{if(null!=e)return e[t]}),t):t},p=function(e,n){return e.split(i).map((e=>e.trim())).reduce(((e,t,o,i)=>{if(null!=e)return o===i.length-1?(e[t]=n,!0):e=e[t]}),t)},l=function(e,t){a.add(e),n.subscribe(f(e),t)});let v=d(s),w={apply:function(){throw new Error("A function call was not expected inside proxy!")},constructor:function(){throw new Error("A constructor call was not expected inside proxy!")},isExtensible:function(e){return Reflect.isExtensible(e)},preventExtensions:function(e){return Reflect.preventExtensions(e)},get:function(e,t){if($)switch(t){case"onChange":return l;case"notify":return u;case"getChainValue":return b;case"setChainValue":return p}return"__isProxy"===t||(e instanceof Promise&&"function"==typeof e[t]?e[t].bind(e):e[t])},set:d(s),deleteProperty:function(e,t){delete e[t]},ownKeys:function(e){return Reflect.ownKeys(e)},has:function(e,t){return t in e},defineProperty:function(e,t,n){let o=Object.assign({},n);return o.set=function(e,t,o){n.hasOwnProperty("set")&&n.set(e,t,o),v(e,t,o)},Object.defineProperty(e,t,o)},getOwnPropertyDescriptor:function(e,t){return Object.getOwnPropertyDescriptor(e,t)},getPrototypeOf:function(e){return Reflect.getPrototypeOf(e)},setPrototypeOf:function(e,t){Reflect.setPrototypeOf(e,t)}};return Array.isArray(e)&&(w.get=function(e){const n=["toObject","addExpression","evaluateExpression","hasExpression","onChangeExpressionChain"];return function(o,i){if($)switch(i){case"onChange":return l;case"notify":return u;case"getChainValue":return b;case"setChainValue":return p;default:if(n.includes(i))return o[i]}if("__isProxy"===i)return!0;const s=o[i];if("function"==typeof s)switch(i){case"push":return function(e,n){return function(...o){try{let i=Array.prototype.push.apply(e,o);for(let t=i-o.length;t<i;t++)e[t]=h(e[t],c(n,t.toString()));return t.notify(c(n,i-1)),i}catch(e){throw console.log("An error occurred in Proxy"),e}}}(o,e);default:return function(e,n,o){return function(...i){try{const s=-1!==r.indexOf(e);s&&n.forEach(((e,i)=>{"object"==typeof n[i]&&(n[i]=t.toObject(c(o,i.toString())))}));let u=Array.prototype[e].apply(n,i);if(s)for(let e=0;e<n.length;e++)n[e]=h(n[e],c(o,e.toString()));return s&&t.notify(o),u}catch(e){throw console.log("An error occurred in Proxy"),e}}}(i,o,e)}return s}}(s||"")),Object.keys(e).forEach((t=>{e[t]&&(e[t]=h(e[t],c(s,t)))})),e.__isProxy?e:new Proxy(e,w)}return s++,t=h(e),t.toObject=function(e){let n={};return e?"string"==typeof e&&(n=t.getChainValue(e)):n=t,n&&"object"==typeof n?JSON.parse(JSON.stringify(n)):n},t.addExpression=function(e,n,...o){if("string"!=typeof e||!e.length)throw new Error("Expression name must be a valid string");if("function"!=typeof n)throw new Error("Expression must have a callback");let i=[];if(o.length){let e=o;Array.isArray(e[0])&&(e=e[0]),i=e.filter((e=>"string"==typeof e&&e.length))}l[e]={watchChain:i,callback:function(){return n.call(t)}}},t.evaluateExpression=function(e){if(!this.hasExpression(e))throw new Error(`Expression "${e}" is not defined`);return l[e].callback()},t.hasExpression=function(e){return"object"==typeof l[e]&&"function"==typeof l[e].callback},t.onChangeExpressionChain=function(e,t){if(!this.hasExpression(e))throw new Error(`Expression "${e}" is not defined`);const n=l[e];if(n.watchChain.length)for(let e=0;e<n.watchChain.length;e++)this.onChange(n.watchChain[e],t)},t}}},{soundpubsub:"soundpubsub"}],"/home/travis/build/PrivateSky/privatesky/modules/soundpubsub/lib/soundPubSub.js":[function(e,t,n){const o=e("queue");n.soundPubSub=new function(){this.publish=function(e,s){return c(e)||function(e){var t=!1;return e&&"object"==typeof e||(t=!0,wprint("Invalid messages types: "+e)),t}(s)||void 0===t[e]?null:(function(e,t){var s=!1,u=n[e];if(void 0===u&&(u=new o,n[e]=u),t&&void 0!==t.type){var a=i[t.type];if(void 0!==a)for(let e of u)if(a(t,e)===e&&void 0===e.__transmisionIndex){s=!0;break}}!s&&t&&(u.push(t),r.push(e))}(e,s),setTimeout(u,0),t[e].length)},this.subscribe=function(e,n,o,i){if(!c(e)&&!f(n)){var r={callBack:n,waitForMore:o,filter:i},s=t[e];void 0===s&&(t[e]=s=[]),s.push(r)}},this.unsubscribe=function(e,n,o){if(!f(n)){var i=!1;if(t[e])for(var r=0;r<t[e].length;r++){var s=t[e][r];s.callBack!==n||void 0!==o&&s.filter!==o||(i=!0,s.forDelete=!0,s.callBack=void 0,s.filter=void 0)}i||wprint("Unable to unsubscribe a callback that was not subscribed!")}},this.blockCallBacks=function(){s++},this.releaseCallBacks=function(){for(s--;0===s&&u(!0););for(;0===s&&l(););},this.afterAllEvents=function(e){f(e)||a.push(e),this.blockCallBacks(),this.releaseCallBacks()},this.hasChannel=function(e){return!c(e)&&void 0!==t[e]},this.addChannel=function(e){c(e)||this.hasChannel(e)||(t[e]=[])};var e=this,t={},n={},i={},r=new o,s=0;function u(o){if(s>0)return!1;const i=r.front();if(void 0!==i){e.blockCallBacks();try{let e;if(n[i].isEmpty()||(e=n[i].front()),void 0===e)n[i].isEmpty()||wprint("Can't use as message in a pub/sub channel this object: "+e),r.pop();else{if(void 0===e.__transmisionIndex){e.__transmisionIndex=0;for(var u=t[i].length-1;u>=0;u--){var a=t[i][u];!0===a.forDelete&&t[i].splice(u,1)}}else e.__transmisionIndex++;void 0===e.__transmisionIndex&&wprint("Can't use as message in a pub/sub channel this object: "+e),void 0===(a=t[i][e.__transmisionIndex])?(delete e.__transmisionIndex,n[i].pop()):(null==a.filter||!f(a.filter)&&a.filter(e))&&(a.forDelete||(a.callBack(e),!a.waitForMore||f(a.waitForMore)||a.waitForMore(e)||(a.forDelete=!0)))}}catch(e){wprint("Event callback failed: "+a.callBack+"error: "+e.stack)}return o?s--:e.releaseCallBacks(),!0}return!1}this.registerCompactor=function(e,t){f(t)||(i[e]=t)};var a=new o;function l(){return a.isEmpty()||a.pop()(),!a.isEmpty()}function c(e){var t=!1;return(!e||"string"!=typeof e&&"number"!=typeof e)&&(t=!0,wprint("Invalid channel name: "+e)),t}function f(e){var t=!1;return e&&"function"==typeof e||(t=!0,wprint("Expected to be function but is: "+e)),t}}},{queue:"queue"}],"overwrite-require":[function(e,t){(function(n){(function(){t.exports={enableForEnvironment:function(t){const o=e("./moduleConstants");switch(t){case o.BROWSER_ENVIRONMENT_TYPE:n=window;break;case o.SERVICE_WORKER_ENVIRONMENT_TYPE:n=self;break;default:Error.stackTraceLimit=1/0}void 0===n.$$&&(n.$$={}),void 0===$$.__global&&($$.__global={}),void 0===n.wprint&&(n.wprint=console.warn),Object.defineProperty($$,"environmentType",{get:function(){return t},set:function(){throw Error("Environment type already set!")}}),void 0===$$.__global.requireLibrariesNames&&($$.__global.currentLibraryName=null,$$.__global.requireLibrariesNames={}),void 0===$$.__runtimeModules&&($$.__runtimeModules={}),void 0===n.functionUndefined&&(n.functionUndefined=function(){throw console.log("Called of an undefined function!!!!"),new Error("Called of an undefined function")},void 0===n.webshimsRequire&&(n.webshimsRequire=n.functionUndefined),void 0===n.domainRequire&&(n.domainRequire=n.functionUndefined),void 0===n.pskruntimeRequire&&(n.pskruntimeRequire=n.functionUndefined));const i={};function r(e){return $$.__runtimeModules[e]}function s(e,t){let o,r;e?(o=$$.__requireFunctionsChain.slice(),o.push(e)):o=$$.__requireFunctionsChain,function(e){if(i[e]){const t=new Error("Preventing recursive require for "+e);throw t.type="PSKIgnorableError",t}}(t),function(e){i[e]=!0}(t);let s=!1;$$.__global.currentLibraryName||($$.__global.currentLibraryName=t,void 0===$$.__global.requireLibrariesNames[t]&&($$.__global.requireLibrariesNames[t]={}),s=!0);for(let e=0;e<o.length;e++){const i=o[e];try{if(i===n.functionUndefined)continue;if(r=i(t),r)break}catch(e){"PSKIgnorableError"!==e.type&&("SyntaxError"==typeof e?console.error(e):"zeromq"===t?console.error("Failed to load module ",t," with error:",e.message):console.error("Failed to load module ",t," with error:",e))}}if(!r)throw Error("Failed to load module "+t);return function(e){i[e]=!1}(t),s&&($$.__global.currentLibraryName=null),r}if(e("./standardGlobalSymbols.js"),void 0===$$.require)switch($$.__requireList=["webshimsRequire"],$$.__requireFunctionsChain=[],$$.requireBundle=function(e){$$.__requireList.push(e+="Require");const t=[r];$$.__requireList.forEach((function(e){const o=function(e){const t=n[e];return void 0===t||t===n.functionUndefined?null:function(e){const n=t(e);return $$.__runtimeModules[e]=n,n}}(e);o&&t.push(o)})),$$.__requireFunctionsChain=t},$$.requireBundle("init"),$$.environmentType){case o.BROWSER_ENVIRONMENT_TYPE:case o.SERVICE_WORKER_ENVIRONMENT_TYPE:console.log("Defining global require in browser"),n.require=function(e){return s(null,e)},$$.require=e;break;case o.ISOLATE_ENVIRONMENT_TYPE:!function(){$$.requireBundle("sandboxBase");const t=n.require;n.crypto=e("crypto"),n.require=function(e){const n=this;let o;return o=s((function(...o){let i;try{i=t.apply(n,o)}catch(o){if("MODULE_NOT_FOUND"!==o.code)throw o;{const o=path.join(process.cwd(),e);i=t.apply(n,[o]),e=o}}return i}),e),o}}(),$$.require=e;break;default:$$.require=function(){const t=e("path");$$.__runtimeModules.crypto=e("crypto"),$$.__runtimeModules.util=e("util");const n=e("module");$$.__runtimeModules.module=n,console.log("Redefining require for node"),$$.__originalRequire=n._load;const o=n.prototype.require;function i(e){const n=this;return s((function(...i){let r;try{r=o.apply(n,i)}catch(i){if("MODULE_NOT_FOUND"!==i.code)throw i;{let i=e;(i.startsWith("/")||i.startsWith("./")||i.startsWith("../"))&&(i=t.join(process.cwd(),e)),r=o.call(n,i),e=i}}return r}),e)}return n.prototype.require=i,i}()}},constants:e("./moduleConstants")}}).call(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./moduleConstants":"/home/travis/build/PrivateSky/privatesky/modules/overwrite-require/moduleConstants.js","./standardGlobalSymbols.js":"/home/travis/build/PrivateSky/privatesky/modules/overwrite-require/standardGlobalSymbols.js"}],"psk-bindable-model":[function(e,t){t.exports=e("./lib/PskBindableModel")},{"./lib/PskBindableModel":"/home/travis/build/PrivateSky/privatesky/modules/psk-bindable-model/lib/PskBindableModel.js"}],queue:[function(e,t){function n(e){this.content=e,this.next=null}function o(){this.head=null,this.tail=null,this.length=0,this.push=function(e){const t=new n(e);this.head?(this.tail.next=t,this.tail=t):(this.head=t,this.tail=t),this.length++},this.pop=function(){if(!this.head)return null;const e=this.head;return this.head=this.head.next,this.length--,0===this.length&&(this.tail=null),e.content},this.front=function(){return this.head?this.head.content:void 0},this.isEmpty=function(){return null===this.head},this[Symbol.iterator]=function*(){let e=this.head;for(;null!==e;)yield e.content,e=e.next}.bind(this)}o.prototype.inspect=o.prototype.toString=function(){let e="",t=this.head;for(;t;)e+=JSON.stringify(t.content)+" ",t=t.next;return e},t.exports=o},{}],soundpubsub:[function(e,t){t.exports={soundPubSub:e("./lib/soundPubSub").soundPubSub}},{"./lib/soundPubSub":"/home/travis/build/PrivateSky/privatesky/modules/soundpubsub/lib/soundPubSub.js"}]},{},["/home/travis/build/PrivateSky/privatesky/builds/tmp/bindableModel.js"]);const u=bindableModelRequire("psk-bindable-model");function a(e,t,n){if("string"!=typeof e||0===e.trim().length)throw Error(`\n      Argument eventName is not valid. It must be a non-empty string.\n      Provided value: ${e}\n    `);if("function"!=typeof t)throw Error(`\n      Argument listener is not valid, it must be a function.\n      Provided value: ${t}\n    `);if(n&&"boolean"!=typeof n&&"object"!=typeof n)throw Error(`\n      Argument options is not valid, it must a boolean (true/false) in case of capture, or an options object.\n      If no options are needed, this argument can be left empty.\n      Provided value: ${n}\n    `)}function l(){const{state:e}=window.WebCardinal||{};return e&&e.skin&&"string"==typeof e.skin}function c(){const{state:e}=window.WebCardinal||{};return e&&"boolean"==typeof e.translations}function f(){let{pathname:e}=window.location;return"/"===e?e:e.endsWith("/")?e.slice(0,-1):e}function d(e,t){"string"==typeof t&&(t=t.split("."));const n=t.shift();return t.length?d(e[n],t):e[n]}function h(e){if(e&&"object"==typeof e)return void 0===e.onChangeExpressionChain?u.setModel(e):e;console.warn("A model must be an object!")}class b{constructor(n,o,i,r){let a;if(this.DSUStorage=new s,this.element=n,this.history=o,this.tagEventListeners=[],i&&this.element.hasAttribute(e)){let n=this.element.getAttribute(e);n.startsWith(t)&&(n=n.slice(1)),a=n?u.setModel(d(i,n)):i}Object.defineProperty(this,"model",{get:()=>a,set(e){a?Object.keys(e).forEach((t=>{a[t]=e[t]})):a=u.setModel(e)}}),this.setLegacyGetModelEventListener(),this.translationModel=r||u.setModel(function(){if(!c())return;const{state:e,translations:t}=window.WebCardinal,{skin:n}=e,o=f(),i=t[n],r=t.default;if(!i&&!r)return void console.warn(`No translations found for skins: "${n}"${"default"!==n?' and "default"':""}`);let s=i&&i[o];return s||(s=r&&r[o],s||void console.warn(`No translations found for page: "${o}" (skins: "${n}"${"default"!==n?' and "default"':""}`))}()||{}),this.disconnectedCallback=()=>{this.removeAllTagEventListeners(),this.onDisconnectedCallback()},"function"==typeof this.element.componentOnReady?this.element.componentOnReady().then(this.onReady.bind(this)):this.onReady()}createElement(e,t){return t&&t.model&&(t.model=h(t.model)),Object.assign(document.createElement(e),t)}createAndAddElement(e,t){const n=this.createElement(e,t);return this.element.append(n),n}on(e,t,n){try{a(e,t,n),this.element.addEventListener(e,t,n)}catch(e){console.error(e)}}off(e,t,n){try{a(e,t,n),this.element.removeEventListener(e,t,n)}catch(e){console.error(e)}}onReady(){}onDisconnectedCallback(){}removeAllTagEventListeners(){this.tagEventListeners.forEach((e=>{this.element.removeEventListener(e.eventName,e.eventListener,e.options)}))}onTagEvent(e,t,n,o){try{a(t,n,o);const i=t=>{let o=t.target;for(;o&&o!==this.element;){if(o.getAttribute("data-tag")===e){t.preventDefault(),t.stopPropagation();const e=o.getDataTagModel?o.getDataTagModel():null;n(e,o,t);break}o=o.parentElement}};this.tagEventListeners.push({tag:e,eventName:t,listener:n,eventListener:i,options:o}),this.element.addEventListener(t,i,o)}catch(e){console.error(e)}}offTagEvent(e,t,n,o){try{a(t,n,o);const i=[];this.tagEventListeners.filter(((r,s)=>{const u=r.tag===e&&r.eventName===t&&r.listener===n&&r.options===o;return u&&i.push(s),u})).forEach((e=>{this.element.removeEventListener(t,e.eventListener,o)})),i.length&&(i.reverse(),i.forEach((e=>{this.tagEventListeners.splice(e,1)})))}catch(e){console.error(e)}}onTagClick(e,t,n){this.onTagEvent(e,"click",t,n)}offTagClick(e,t,n){this.offTagEvent(e,"click",t,n)}navigateToUrl(e,t){this.history.push(e,t)}navigateToPageTag(e,t){this.element.dispatchEvent(new CustomEvent("webcardinal:tags:get",{bubbles:!0,composed:!0,cancelable:!0,detail:{tag:e,callback:(e,n)=>{e?console.error(e):this.navigateToUrl(n,t)}}}))}send(e,t,n={}){let o={bubbles:!0,cancelable:!0,composed:!0,detail:t,...n};this.element.dispatchEvent(new CustomEvent(e,o))}setLegacyGetModelEventListener(){this.element.addEventListener("getModelEvent",(e=>{e.preventDefault(),e.stopImmediatePropagation();let{bindValue:t,callback:n}=e.detail;if("function"==typeof n)return function(e,t,n){e&&t[e]&&n(null,t[e]),e||n(null,t)}(t,this.model,n);n(new Error("No callback provided"))}))}setState(e){this.history.location.state=e}getState(){return this.history.location.state}setSkin(e,{save:t}={save:!0}){l()?"string"==typeof e?(t&&"localStorage"in window&&window.localStorage.setItem("webcardinal.skin",e),window.WebCardinal.state.skin=e):console.log('"skin" must be a valid non-empty string!'):console.warn("WebCardinal skin is not set by your Application!")}getSkin(){if(l())return window.WebCardinal.state.skin;console.warn("WebCardinal skin is not set by your Application!")}applySkinForCurrentPage(e){l()?"string"==typeof e?window.WebCardinal.state.page.loader.skin=e:console.log('"skin" must be a valid non-empty string!'):console.warn("WebCardinal skin is not set by your Application!")}translate(e){if(!c())return void console.warn(['Function "translate" must be called only when translations are enabled!',"Check WebCardinal.state"].join("\n"));const{skin:t}=window.WebCardinal.state,n=f();if(!this.translationModel)return console.warn(`No translations found for page: "${n}" (skins: "${t}"${"default"!==t?' and "default"':""})`),e;e.startsWith("$")&&(e=e.slice(1));return d(this.translationModel,e)||(console.warn(`No translations found for chain: "${e}" (page: "${n}", skins: "${t}"${"default"!==t?' and "default"':""})`),e)}getElementByTag(e){return this.element.querySelector(`[data-tag="${e}"]`)}getElementsByTag(e){return this.element.querySelectorAll(`[data-tag="${e}"]`)}querySelector(e){return this.element.querySelector(e)}querySelectorAll(e){return this.element.querySelectorAll(e)}setModel(e){console.warn(['Function "setModel" is applied in a redundant manner and it is also deprecated.',"This function will be removed in a future release",'Use "this.model = <YOUR_MODEL>" instead'].join("\n")),this.model=e}setLanguage(){console.warn(['Function "setLanguage" is deprecated!','Use "setSkin" with a new skin if changing of the translations is desired'].join("\n"))}setPreferredSkin(e,{saveOption:t}={saveOption:!0}){console.warn(['Function "setPreferredSkin" is deprecated!','Use "setSkin" instead, "saveOptions" flag is now "save" (store your skin in localStorage).'].join("\n")),this.setSkin(e,{save:t})}getPreferredSkin(){return console.warn(['Function "getPreferredSkin" is deprecated!','Use "getSkin" instead!'].join("\n")),this.getSkin()}changeSkinForCurrentPage(e){console.warn(['Function "changeSkinForCurrentPage" is deprecated!','Use "applySkinForCurrentPage" instead!'].join("\n")),this.applySkinForCurrentPage(e)}}export{b as C,n as e,h as p}