import{_ as t,i as y,c as w,s as V,d as b,g as x}from"./locales.fc745e15.js";import{u as R,r as u,b as O,a as h,j as a,S as k,c as S,d as C,e as N,H as B}from"./react-libs.a577cd60.js";(function(){if(typeof window>"u")return;var i,s="ontouchstart"in window;document.createTouch||(document.createTouch=function(n,e,p,_,m,d,A){return new o(e,p,{pageX:_,pageY:m,screenX:d,screenY:A,clientX:_-window.pageXOffset,clientY:m-window.pageYOffset},0,0)}),document.createTouchList||(document.createTouchList=function(){for(var n=r(),e=0;e<arguments.length;e++)n[e]=arguments[e];return n.length=arguments.length,n}),Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(n){var e=this;do{if(e.matches(n))return e;e=e.parentElement||e.parentNode}while(e!==null&&e.nodeType===1);return null});var o=function(e,p,_,m,d){m=m||0,d=d||0,this.identifier=p,this.target=e,this.clientX=_.clientX+m,this.clientY=_.clientY+d,this.screenX=_.screenX+m,this.screenY=_.screenY+d,this.pageX=_.pageX+m,this.pageY=_.pageY+d};function r(){var n=[];return n.item=function(e){return this[e]||null},n.identifiedTouch=function(e){return this[e+1]||null},n}var l=!1;function c(n){return function(e){e.type==="mousedown"&&(l=!0),e.type==="mouseup"&&(l=!1),!(e.type==="mousemove"&&!l)&&((e.type==="mousedown"||!i||i&&!i.dispatchEvent)&&(i=e.target),i.closest("[data-no-touch-simulate]")==null&&I(n,e),e.type==="mouseup"&&(i=null))}}function I(n,e){var p=document.createEvent("Event");p.initEvent(n,!0,!0),p.altKey=e.altKey,p.ctrlKey=e.ctrlKey,p.metaKey=e.metaKey,p.shiftKey=e.shiftKey,p.touches=L(e),p.targetTouches=L(e),p.changedTouches=g(e),i.dispatchEvent(p)}function g(n){var e=r();return e.push(new o(i,1,n,0,0)),e}function L(n){return n.type==="mouseup"?r():g(n)}function f(){window.addEventListener("mousedown",c("touchstart"),!0),window.addEventListener("mousemove",c("touchmove"),!0),window.addEventListener("mouseup",c("touchend"),!0)}f.multiTouchOffset=75,s||new f})();function $(){const{pathname:i}=R();return u.exports.useEffect(()=>{window.scrollTo(0,0)},[i]),null}const M=i=>{const s=O(),o="M296.114 508.035c-3.22-13.597.473-28.499 11.079-39.105l333.912-333.912c16.271-16.272 42.653-16.272 58.925 0s16.272 42.654 0 58.926L395.504 498.47l304.574 304.574c16.272 16.272 16.272 42.654 0 58.926s-42.654 16.272-58.926 0L307.241 528.058a41.472 41.472 0 0 1-11.127-20.023z",r=()=>{s.length>1?s.goBack():s.replace("/")};return i.title?h("div",{className:"demo-nav",children:[a("div",{className:"demo-nav__title",children:i.title}),a("svg",{className:"demo-nav__back",viewBox:"0 0 1000 1000",onClick:r,children:a("path",{fill:"#969799",fillRule:"evenodd",d:o})})]}):null};const z=()=>t(()=>import("./index.e1aff342.js"),["index.e1aff342.js","index.169ddda7.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js"],import.meta.url),K=()=>t(()=>import("./index.34d97204.js"),["index.34d97204.js","index.891a20a0.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),F=()=>t(()=>import("./index.1ae01dc0.js"),["index.1ae01dc0.js","index.7a9607ea.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),j=()=>t(()=>import("./index.7f5914ac.js"),["index.7f5914ac.js","index.2308b719.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.40c7e291.js","index.3fcd27f5.js","ConfigProviderContext.df49d753.js","constant.6ebb020b.js"],import.meta.url),H=()=>t(()=>import("./index.8bbb6afe.js"),["index.8bbb6afe.js","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),X=()=>t(()=>import("./index.bde11a44.js"),["index.bde11a44.js","index.ddd7bdad.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Y=()=>t(()=>import("./index.f89ebc67.js"),["index.f89ebc67.js","index.280c8605.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),U=()=>t(()=>import("./index.36829978.js"),["index.36829978.js","index.f99cf529.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),G=()=>t(()=>import("./index.2a70d8c6.js"),["index.2a70d8c6.js","index.842476da.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),q=()=>t(()=>import("./index.751a281d.js"),["index.751a281d.js","index.b2d38641.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),J=()=>t(()=>import("./index.2e549021.js"),["index.2e549021.js","index.fb0dd7c5.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Q=()=>t(()=>import("./index.a53c195b.js"),["index.a53c195b.js","index.45a033ec.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),W=()=>t(()=>import("./index.215f78ff.js"),["index.215f78ff.js","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Z=()=>t(()=>import("./index.ccf5b3df.js"),["index.ccf5b3df.js","index.dde5a36d.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),tt=()=>t(()=>import("./index.7b2deb8c.js"),["index.7b2deb8c.js","index.c835a7a7.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),et=()=>t(()=>import("./index.ebf9a581.js"),["index.ebf9a581.js","index.7a9607ea.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),ot=()=>t(()=>import("./index.5ea98dfa.js"),["index.5ea98dfa.js","index.8e03046a.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),it=()=>t(()=>import("./index.45aa7189.js"),["index.45aa7189.js","index.83a750cb.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),rt=()=>t(()=>import("./index.a046815a.js"),["index.a046815a.js","index.372d5d54.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.886c0933.js","ConfigProviderContext.df49d753.js"],import.meta.url),at=()=>t(()=>import("./index.facb06f6.js"),["index.facb06f6.js","index.64b64be6.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),nt=()=>t(()=>import("./index.d2c39a5f.js"),["index.d2c39a5f.js","index.7a9607ea.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),st=()=>t(()=>import("./index.4e119101.js"),["index.4e119101.js","index.69349e43.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),lt=()=>t(()=>import("./index.0b57d4fa.js"),["index.0b57d4fa.js","index.1b83cb7b.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),pt=()=>t(()=>import("./index.b15081c8.js"),["index.b15081c8.js","index.7a9607ea.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),ct=()=>t(()=>import("./index.0edff552.js"),["index.0edff552.js","index.857e0b5b.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),_t=()=>t(()=>import("./index.8aef935d.js"),["index.8aef935d.js","index.d24dfc72.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),mt=()=>t(()=>import("./index.bc490bee.js"),["index.bc490bee.js","index.2c561a81.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),ut=()=>t(()=>import("./index.8cbf7d08.js"),["index.8cbf7d08.js","index.c1febbf6.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","Uploader.7389df6b.js","ConfigProviderContext.df49d753.js","constant.6ebb020b.js","index.3fcd27f5.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.832b6367.js","index.40c7e291.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),dt=()=>t(()=>import("./index.5673ebc1.js"),["index.5673ebc1.js","index.c1febbf6.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),ht=()=>t(()=>import("./index.8a3bb485.js"),["index.8a3bb485.js","index.018f2dca.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Et=()=>t(()=>import("./index.e602c765.js"),["index.e602c765.js","index.8b921f8b.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),vt=()=>t(()=>import("./index.036a6456.js"),["index.036a6456.js","index.60e717a3.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Tt=()=>t(()=>import("./index.b92cef03.js"),["index.b92cef03.js","index.baa9a546.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","Uploader.7389df6b.js","ConfigProviderContext.df49d753.js","constant.6ebb020b.js","index.3fcd27f5.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.832b6367.js","index.40c7e291.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),gt=()=>t(()=>import("./index.f034dd86.js"),["index.f034dd86.js","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Lt=()=>t(()=>import("./index.5da71ee8.js"),["index.5da71ee8.js","index.bae7c465.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),ft=()=>t(()=>import("./index.781fbe80.js"),["index.781fbe80.js","index.7b8d007c.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Pt=()=>t(()=>import("./index.0e1b4e1b.js"),["index.0e1b4e1b.js","index.9a646181.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","Uploader.7389df6b.js","ConfigProviderContext.df49d753.js","constant.6ebb020b.js","index.3fcd27f5.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.832b6367.js","index.40c7e291.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Dt=()=>t(()=>import("./index.ecc0e5b6.js"),["index.ecc0e5b6.js","index.c644d6d6.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Rt=()=>t(()=>import("./index.70286176.js"),["index.70286176.js","index.d0b36393.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Ot=()=>t(()=>import("./index.716ebb8f.js"),["index.716ebb8f.js","index.c4eb9396.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","Rate.800b965d.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","use-touch.99c6363f.js"],import.meta.url),It=()=>t(()=>import("./index.6185ba6f.js"),["index.6185ba6f.js","index.5163fd67.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),At=()=>t(()=>import("./index.a4a716ea.js"),["index.a4a716ea.js","index.0cbf7693.css","react-libs.a577cd60.js","Uploader.7389df6b.js","locales.fc745e15.js","ConfigProviderContext.df49d753.js","constant.6ebb020b.js","index.3fcd27f5.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.832b6367.js","index.40c7e291.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),yt=()=>t(()=>import("./index.d1b8b620.js"),["index.d1b8b620.js","index.dee3fb5c.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),wt=()=>t(()=>import("./index.07bddf74.js"),["index.07bddf74.js","index.d0fb5576.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Vt=()=>t(()=>import("./index.f48c92b4.js"),["index.f48c92b4.js","index.cdf436d6.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),bt=()=>t(()=>import("./index.3f31c89c.js"),["index.3f31c89c.js","index.4ce4f0d1.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),xt=()=>t(()=>import("./index.19a95590.js"),["index.19a95590.js","index.591a1b95.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),kt=()=>t(()=>import("./index.7ac7dd88.js"),["index.7ac7dd88.js","index.1f16137b.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","Uploader.7389df6b.js","ConfigProviderContext.df49d753.js","constant.6ebb020b.js","index.3fcd27f5.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.832b6367.js","index.40c7e291.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),St=()=>t(()=>import("./index.aeee2d69.js"),["index.aeee2d69.js","index.cd4e846c.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Ct=()=>t(()=>import("./index.61c5d8dc.js"),["index.61c5d8dc.js","index.e454bff5.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Nt=()=>t(()=>import("./index.4da83d2e.js"),["index.4da83d2e.js","index.3aa925f5.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Bt=()=>t(()=>import("./index.50a7c29e.js"),["index.50a7c29e.js","index.a49fc365.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),$t=()=>t(()=>import("./index.a08cdc10.js"),["index.a08cdc10.js","index.0f45a1bd.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),Mt=()=>t(()=>import("./index.20a3d5ed.js"),["index.20a3d5ed.js","index.49bd1411.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","TextEllipsis.165110de.js","ConfigProviderContext.df49d753.js","use-event-listener.0323d8ba.js"],import.meta.url),zt=()=>t(()=>import("./index.bec27900.js"),["index.bec27900.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.772ab941.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","constant.6ebb020b.js"],import.meta.url),Kt=()=>t(()=>import("./index.dc5682d6.js"),["index.dc5682d6.js","index.d122d9b5.css","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","react-libs.a577cd60.js","locales.fc745e15.js","index.b9396322.js","ConfigProviderContext.df49d753.js"],import.meta.url),Ft=()=>t(()=>import("./index.47562ee0.js"),["index.47562ee0.js","index.a01b55d6.css","react-libs.a577cd60.js","rc-cli_site-mobile-demo.b251df1e.js","rc-cli_site-mobile-demo.962fc912.css","locales.fc745e15.js","index.832b6367.js","ConfigProviderContext.df49d753.js","index.3fcd27f5.js","index.40c7e291.js","constant.6ebb020b.js","Uploader.7389df6b.js","Rate.800b965d.js","use-touch.99c6363f.js","use-event-listener.0323d8ba.js","index.772ab941.js","index.886c0933.js","TextEllipsis.165110de.js","index.b9396322.js"],import.meta.url),T={ActionBar:z,ActionSheet:K,Badge:F,Button:j,Calendar:H,Cascader:X,Cell:Y,Checkbox:U,Circle:G,Collapse:q,ConfigProvider:J,CountDown:Q,DatetimePicker:W,Dialog:Z,Divider:tt,DropdownMenu:et,Empty:ot,Field:it,Flex:rt,Form:at,Grid:nt,Icon:st,Image:lt,ImagePreview:pt,Lazyload:ct,List:_t,Loading:mt,NavBar:ut,NoticeBar:dt,Notify:ht,NumberKeyboard:Et,Overlay:vt,PasswordInput:Tt,Picker:gt,Popover:Lt,Popup:ft,Progress:Pt,PullRefresh:Dt,Radio:Rt,Rate:Ot,ShareSheet:It,Sidebar:At,Skeleton:yt,Slider:wt,Steps:Vt,Sticky:bt,Styles:xt,SwipeCell:kt,Swiper:St,Switch:Ct,Tabbar:Nt,Tabs:Bt,Tag:$t,TextEllipsis:Mt,Toast:zt,Typography:Kt,Uploader:Ft},E={name:"rc-ui-lib",build:{packageManager:"pnpm",css:{preprocessor:"less"},site:{publicPath:"./"}},site:{defaultLang:"zh-CN",locales:{"zh-CN":{title:"RC-UI-LIB",description:"\u8F7B\u91CF\u3001\u53EF\u9760\u7684\u79FB\u52A8\u7AEF\u7EC4\u4EF6\u5E93",logo:"https://rancui.github.io/rc-ui-lib/rc-ui-lib.png",langLabel:"\u4E2D\u6587",links:[{logo:"https://b.yzcdn.cn/vant/logo/github.svg",url:"https://github.com/rancui/rc-ui-lib"}],nav:[{title:"\u5E03\u5C40\u7EC4\u4EF6",items:[{path:"flex",title:"Flex \u5E03\u5C40"}]},{title:"\u57FA\u7840\u7EC4\u4EF6",items:[{path:"button",title:"Button \u6309\u94AE"},{path:"cell",title:"Cell \u5355\u5143\u683C"},{path:"config-provider",title:"ConfigProvider \u5168\u5C40\u914D\u7F6E"},{path:"typography",title:"Typography \u6587\u672C"},{path:"styles",title:"Style \u5185\u7F6E\u6837\u5F0F"},{path:"icon",title:"Icon \u56FE\u6807"},{path:"image",title:"Image \u56FE\u7247"},{path:"popup",title:"Popup \u5F39\u51FA\u5C42"},{path:"toast",title:"Toast \u8F7B\u63D0\u793A"}]},{title:"\u8868\u5355\u7EC4\u4EF6",items:[{path:"calendar",title:"Calendar \u65E5\u5386"},{path:"cascader",title:"Cascader \u7EA7\u8054\u9009\u62E9"},{path:"checkbox",title:"Checkbox \u590D\u9009\u6846"},{path:"datetime-picker",title:"DatetimePicker \u65F6\u95F4\u9009\u62E9"},{path:"field",title:"Field \u8F93\u5165\u6846"},{path:"form",title:"Form \u8868\u5355"},{path:"number-keyboard",title:"NumberKeyboard \u6570\u5B57\u952E\u76D8"},{path:"password-input",title:"PasswordInput \u5BC6\u7801\u8F93\u5165\u6846"},{path:"picker",title:"Picker \u9009\u62E9\u5668"},{path:"radio",title:"Radio \u5355\u9009\u6846"},{path:"rate",title:"Rate \u8BC4\u5206"},{path:"slider",title:"Slider \u6ED1\u5757"},{path:"switch",title:"Switch \u5F00\u5173"},{path:"uploader",title:"Uploader \u6587\u4EF6\u4E0A\u4F20"}]},{title:"\u53CD\u9988\u7EC4\u4EF6",items:[{path:"action-sheet",title:"ActionSheet \u52A8\u4F5C\u9762\u677F"},{path:"dialog",title:"Dialog \u5F39\u51FA\u6846"},{path:"dropdown-menu",title:"DropdownMenu \u4E0B\u62C9\u83DC\u5355"},{path:"loading",title:"Loading \u52A0\u8F7D"},{path:"notify",title:"Notify \u6D88\u606F\u901A\u77E5"},{path:"overlay",title:"Overlay \u906E\u7F69\u5C42"},{path:"pull-refresh",title:"PullRefresh \u4E0B\u62C9\u5237\u65B0"},{path:"share-sheet",title:"ShareSheet \u5206\u4EAB\u9762\u677F"},{path:"swipe-cell",title:"SwipeCell \u6ED1\u52A8\u5355\u5143\u683C"}]},{title:"\u5C55\u793A\u7EC4\u4EF6",items:[{path:"badge",title:"Badge \u5FBD\u6807"},{path:"circle",title:"Circle \u73AF\u5F62\u8FDB\u5EA6\u6761"},{path:"collapse",title:"Collapse \u6298\u53E0\u9762\u677F"},{path:"count-down",title:"CountDown \u5012\u8BA1\u65F6"},{path:"divider",title:"Divider \u5206\u5272\u7EBF"},{path:"empty",title:"Empty \u7A7A\u72B6\u6001"},{path:"image-preview",title:"ImagePreview \u56FE\u7247\u9884\u89C8"},{path:"lazyload",title:"Lazyload \u61D2\u52A0\u8F7D"},{path:"list",title:"List \u5217\u8868"},{path:"skeleton",title:"Skeleton \u9AA8\u67B6\u5C4F"},{path:"notice-bar",title:"NoticeBar \u901A\u77E5\u680F"},{path:"popover",title:"Popover \u6C14\u6CE1\u5F39\u51FA\u6846"},{path:"progress",title:"Progress \u8FDB\u5EA6\u6761"},{path:"sticky",title:"Sticky \u7C98\u6027\u5E03\u5C40"},{path:"swiper",title:"Swiper \u8F6E\u64AD"},{path:"tag",title:"Tag \u6807\u7B7E"},{path:"text-ellipsis",title:"TextEllipsis \u6587\u672C\u7701\u7565"}]},{title:"\u5BFC\u822A\u7EC4\u4EF6",items:[{path:"action-bar",title:"ActionBar \u52A8\u4F5C\u680F"},{path:"grid",title:"Grid \u5BAB\u683C"},{path:"nav-bar",title:"NavBar \u5BFC\u822A\u680F"},{path:"sidebar",title:"Sidebar \u4FA7\u8FB9\u5BFC\u822A"},{path:"tabs",title:"Tabs \u6807\u7B7E\u9875"},{path:"tabbar",title:"Tabbar \u6807\u7B7E\u680F"}]}]}}}},jt=i=>h("svg",{viewBox:"0 0 1024 1024",...i,children:[a("path",{fill:"#B6C3D2",d:"M601.1 556.5L333.8 289.3c-24.5-24.5-24.5-64.6 0-89.1s64.6-24.5 89.1 0l267.3 267.3c24.5 24.5 24.5 64.6 0 89.1-24.5 24.4-64.6 24.4-89.1-.1z"}),a("path",{fill:"#B6C3D2",d:"M690.2 556.5L422.9 823.8c-24.5 24.5-64.6 24.5-89.1 0s-24.5-64.6 0-89.1l267.3-267.3c24.5-24.5 64.6-24.5 89.1 0 24.5 24.6 24.5 64.6 0 89.1z"})]});const Ht=i=>{const{lang:s,group:o}=i,r=O(),l=u.exports.useMemo(()=>s?`/${s}`:"",[s]);return h("div",{className:"demo-home-nav",children:[a("div",{className:"demo-home-nav__title",children:o.title}),a("div",{className:"demo-home-nav__group",children:o.items.map(c=>h("div",{className:"demo-home-nav__block",onClick:()=>{r.push(`${l}/${c.path}`),!y&&window!==window.top&&window.top.postMessage({pathname:`${l}/${c.path}`},window.top)},children:[c.title,a(jt,{className:"demo-home-nav__icon"})]},c.path))})]})};const P=i=>{const{lang:s}=i.meta,o=u.exports.useMemo(()=>{const{locales:l}=E.site;return l?l[s]:E.site},[E]),r=u.exports.useMemo(()=>o.title.length>=8,[o]);return h("div",{className:"demo-home",children:[h("h1",{className:w("demo-home__title",{"demo-home__title--small":r}),children:[a("img",{src:o.logo,alt:""}),a("span",{children:o.title})]}),o.description&&a("h2",{className:"demo-home__desc",children:o.description}),o.nav.map(l=>a(Ht,{lang:s,group:l},l.title))]})},{locales:v,defaultLang:Xt}=E.site;V(Xt);function Yt(i){const s=i.split("/")[1];return Object.keys(v).indexOf(s)!==-1?s:x()}function Ut(){const i=[],s=Object.keys(T),o=v?Object.keys(v):[];return o.length?o.forEach(r=>{i.push({path:`/${r}`,exact:!0,component:P,meta:{lang:r}})}):i.push({path:"/",exact:!0,component:P,meta:{}}),s.forEach(r=>{const l=b(r);o.length?o.forEach(c=>{i.push({name:`${c}/${l}`,path:`/${c}/${l}`,component:u.exports.lazy(T[r]),meta:{name:r,lang:c}})}):i.push({name:r,path:`/${l}`,component:u.exports.lazy(T[r]),meta:{name:r}})}),v?i.push({path:"*",redirect:r=>`/${Yt(r)}/`,meta:{}}):i.push({path:"*",redirect:()=>"/",meta:{}}),i}const D=Ut();const Gt=()=>{const{pathname:i}=R(),s=u.exports.useMemo(()=>{const o=D.find(r=>r.path===i);return o&&o.meta&&o.meta.name||""},[i]);return h("div",{children:[a(M,{title:s}),a($,{}),a(u.exports.Suspense,{fallback:a("div",{}),children:a(k,{children:D.map(o=>o.redirect?a(S,{to:o.redirect(i)},o.path):a(C,{exact:o.exact,path:o.path,render:r=>a(o.component,{...r,meta:o.meta,routes:o.routes})},o.path))})})]})};N.render(a(B,{children:a(Gt,{})}),document.getElementById("app"));export{D as r};