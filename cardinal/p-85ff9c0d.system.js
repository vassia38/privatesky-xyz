System.register([],function(e){"use strict";return{execute:function(){e({a:r,c:n,s:t});function t(e,t){var n=e.replace(/( |:|\/|\.)/g,"-").toLowerCase();var r=t.querySelector("#"+n);if(!r){return}r.scrollIntoView({behavior:"smooth"});var i=window.location.href;var a="?";if(i.indexOf("chapter=")!==-1){i=window.location.href.split("chapter=")[0];if(i.length>0){a=i[i.length-1];i=i.substring(0,i.length-1)}}else{a=i.indexOf("?")>0?"&":"?"}var o=a+"chapter=";window.history.pushState({},"",""+i+o+n)}function n(e,t,n){if(n===void 0){n=false}var r=new CustomEvent(e,t);if(n){document.dispatchEvent(r)}}function r(e,t,n){var r=null;while(e){if(e.matches(t)){r=e;break}else if(n&&e.matches(n)){break}e=e.parentElement}return r}}}});