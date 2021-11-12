function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,r){if(t){if("string"==typeof t)return _arrayLikeToArray(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?_arrayLikeToArray(t,r):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{OfRO:function(t,r,e){"use strict";e.r(r),e.d(r,"scopeCss",(function(){return x}));var n=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+n,"gim"),c=new RegExp("(-shadowcsscontext"+n,"gim"),s=new RegExp("(-shadowcssslotted"+n,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,i=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,l=/:host/gim,h=/::slotted/gim,p=/:host-context/gim,f=/\/\*\s*[\s\S]*?\*\//g,d=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,g=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,m=/([{}])/g,v=function(t,r){var e=b(t),n=0;return e.escapedString.replace(g,(function(){var t=arguments.length<=2?void 0:arguments[2],o="",c=arguments.length<=4?void 0:arguments[4],s="";c&&c.startsWith("{%BLOCK%")&&(o=e.blocks[n++],c=c.substring("%BLOCK%".length+1),s="{");var a=r({selector:t,content:o});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(a.content).concat(c)}))},b=function(t){for(var r=t.split(m),e=[],n=[],o=0,c=[],s=0;s<r.length;s++){var a=r[s];"}"===a&&o--,o>0?c.push(a):(c.length>0&&(n.push(c.join("")),e.push("%BLOCK%"),c=[]),e.push(a)),"{"===a&&o++}return c.length>0&&(n.push(c.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:n}},w=function(t,r,e){return t.replace(r,(function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(r[2]){for(var o=r[2].split(","),c=[],s=0;s<o.length;s++){var a=o[s].trim();if(!a)break;c.push(e("-shadowcsshost-no-combinator",a,r[3]))}return c.join(",")}return"-shadowcsshost-no-combinator"+r[3]}))},y=function(t,r,e){return t+r.replace("-shadowcsshost","")+e},_=function(t,r,e){return r.indexOf("-shadowcsshost")>-1?y(t,r,e):t+r+e+", "+r+" "+t+e},x=function(t,r,e){var n=r+"-h",g=r+"-s",m=t.match(d)||[];t=t.replace(f,"");var b=[];if(e){var x=function(t){var r="/*!@___".concat(b.length,"___*/");return b.push({placeholder:r,comment:"/*!@".concat(t.selector,"*/")}),t.selector=r+t.selector,t};t=v(t,(function(t){return"@"!==t.selector[0]?x(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=v(t.content,x),t):t}))}var A=function(t,r,e,n,f){var d=function(t,r){var e="."+r+" > ",n=[];return t=t.replace(s,(function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];if(r[2]){for(var c=r[2].trim(),s=e+c+r[3],a="",i=r[4]-1;i>=0;i--){var u=r[5][i];if("}"===u||","===u)break;a=u+a}var l=a+s,h="".concat(a.trimRight()).concat(s.trim());return l.trim()!==h.trim()&&n.push({orgSelector:l,updatedSelector:"".concat(h,", ").concat(l)}),s}return"-shadowcsshost-no-combinator"+r[3]})),{selectors:n,cssText:t}}(t=function(t){return w(t,c,_)}(t=function(t){return w(t,o,y)}(t=t.replace(p,"-shadowcsscontext").replace(l,"-shadowcsshost").replace(h,"-shadowcssslotted"))),n);return t=function(t){return i.reduce((function(t,r){return t.replace(r," ")}),t)}(t=d.cssText),r&&(t=function t(r,e,n,o,c){return v(r,(function(r){var c=r.selector,s=r.content;return"@"!==r.selector[0]?c=function(t,r,e,n){return t.split(",").map((function(t){return n&&t.indexOf("."+n)>-1?t.trim():function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)}(t,r)?function(t,r,e){for(var n,o="."+(r=r.replace(/\[is=([^\]]*)\]/g,(function(t){return arguments.length<=1?void 0:arguments[1]}))),c=function(t){var n=t.trim();if(!n)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)n=function(t,r,e){if(u.lastIndex=0,u.test(t)){var n="."+e;return t.replace(a,(function(t,r){return r.replace(/([^:]*)(:*)(.*)/,(function(t,r,e,o){return r+n+e+o}))})).replace(u,n+" ")}return r+" "+t}(t,r,e);else{var c=t.replace(u,"");if(c.length>0){var s=c.match(/([^:]*)(:*)(.*)/);s&&(n=s[1]+o+s[2]+s[3])}}return n},s=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,n){var o="__ph-".concat(e,"__");return r.push(n),e++,o}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,n,o){var c="__ph-".concat(e,"__");return r.push(o),e++,n+c})),placeholders:r}}(t),i="",l=0,h=/( |>|\+|~(?!=))\s*/g,p=!((t=s.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(n=h.exec(t));){var f=n[1],d=t.slice(l,n.index).trim();p=p||d.indexOf("-shadowcsshost-no-combinator")>-1,i+="".concat(p?c(d):d," ").concat(f," "),l=h.lastIndex}var g,m=t.substring(l);return i+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?c(m):m,g=s.placeholders,i.replace(/__ph-(\d+)__/g,(function(t,r){return g[+r]}))}(t,r,e).trim():t.trim()})).join(", ")}(r.selector,e,n,o):(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document"))&&(s=t(r.content,e,n,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:s}}))}(t,r,e,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+e)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:d.selectors}}(t,r,n,g);return t=[A.cssText].concat(_toConsumableArray(m)).join("\n"),e&&b.forEach((function(r){var e=r.placeholder,n=r.comment;t=t.replace(e,n)})),A.slottedSelectors.forEach((function(r){t=t.replace(r.orgSelector,r.updatedSelector)})),t}}}]);