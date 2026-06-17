var w1=Object.defineProperty;var S1=(n,r,o)=>r in n?w1(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o;var Qe=(n,r,o)=>S1(n,typeof r!="symbol"?r+"":r,o);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();function Vc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var vu={exports:{}},Zi={},xu={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function E1(){if(Ih)return Ce;Ih=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),h=Symbol.iterator;function v(M){return M===null||typeof M!="object"?null:(M=h&&M[h]||M["@@iterator"],typeof M=="function"?M:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function S(M,j,O){this.props=M,this.context=j,this.refs=C,this.updater=O||x}S.prototype.isReactComponent={},S.prototype.setState=function(M,j){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,j,"setState")},S.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function _(){}_.prototype=S.prototype;function N(M,j,O){this.props=M,this.context=j,this.refs=C,this.updater=O||x}var E=N.prototype=new _;E.constructor=N,w(E,S.prototype),E.isPureReactComponent=!0;var b=Array.isArray,R=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function P(M,j,O){var Q,K={},ie=null,le=null;if(j!=null)for(Q in j.ref!==void 0&&(le=j.ref),j.key!==void 0&&(ie=""+j.key),j)R.call(j,Q)&&!F.hasOwnProperty(Q)&&(K[Q]=j[Q]);var Z=arguments.length-2;if(Z===1)K.children=O;else if(1<Z){for(var oe=Array(Z),fe=0;fe<Z;fe++)oe[fe]=arguments[fe+2];K.children=oe}if(M&&M.defaultProps)for(Q in Z=M.defaultProps,Z)K[Q]===void 0&&(K[Q]=Z[Q]);return{$$typeof:n,type:M,key:ie,ref:le,props:K,_owner:L.current}}function A(M,j){return{$$typeof:n,type:M.type,key:j,ref:M.ref,props:M.props,_owner:M._owner}}function $(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function I(M){var j={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(O){return j[O]})}var D=/\/+/g;function J(M,j){return typeof M=="object"&&M!==null&&M.key!=null?I(""+M.key):j.toString(36)}function T(M,j,O,Q,K){var ie=typeof M;(ie==="undefined"||ie==="boolean")&&(M=null);var le=!1;if(M===null)le=!0;else switch(ie){case"string":case"number":le=!0;break;case"object":switch(M.$$typeof){case n:case r:le=!0}}if(le)return le=M,K=K(le),M=Q===""?"."+J(le,0):Q,b(K)?(O="",M!=null&&(O=M.replace(D,"$&/")+"/"),T(K,j,O,"",function(fe){return fe})):K!=null&&($(K)&&(K=A(K,O+(!K.key||le&&le.key===K.key?"":(""+K.key).replace(D,"$&/")+"/")+M)),j.push(K)),1;if(le=0,Q=Q===""?".":Q+":",b(M))for(var Z=0;Z<M.length;Z++){ie=M[Z];var oe=Q+J(ie,Z);le+=T(ie,j,O,oe,K)}else if(oe=v(M),typeof oe=="function")for(M=oe.call(M),Z=0;!(ie=M.next()).done;)ie=ie.value,oe=Q+J(ie,Z++),le+=T(ie,j,O,oe,K);else if(ie==="object")throw j=String(M),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return le}function Y(M,j,O){if(M==null)return M;var Q=[],K=0;return T(M,Q,"","",function(ie){return j.call(O,ie,K++)}),Q}function U(M){if(M._status===-1){var j=M._result;j=j(),j.then(function(O){(M._status===0||M._status===-1)&&(M._status=1,M._result=O)},function(O){(M._status===0||M._status===-1)&&(M._status=2,M._result=O)}),M._status===-1&&(M._status=0,M._result=j)}if(M._status===1)return M._result.default;throw M._result}var G={current:null},W={transition:null},B={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:W,ReactCurrentOwner:L};function X(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Y,forEach:function(M,j,O){Y(M,function(){j.apply(this,arguments)},O)},count:function(M){var j=0;return Y(M,function(){j++}),j},toArray:function(M){return Y(M,function(j){return j})||[]},only:function(M){if(!$(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ce.Component=S,Ce.Fragment=o,Ce.Profiler=s,Ce.PureComponent=N,Ce.StrictMode=l,Ce.Suspense=f,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B,Ce.act=X,Ce.cloneElement=function(M,j,O){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var Q=w({},M.props),K=M.key,ie=M.ref,le=M._owner;if(j!=null){if(j.ref!==void 0&&(ie=j.ref,le=L.current),j.key!==void 0&&(K=""+j.key),M.type&&M.type.defaultProps)var Z=M.type.defaultProps;for(oe in j)R.call(j,oe)&&!F.hasOwnProperty(oe)&&(Q[oe]=j[oe]===void 0&&Z!==void 0?Z[oe]:j[oe])}var oe=arguments.length-2;if(oe===1)Q.children=O;else if(1<oe){Z=Array(oe);for(var fe=0;fe<oe;fe++)Z[fe]=arguments[fe+2];Q.children=Z}return{$$typeof:n,type:M.type,key:K,ref:ie,props:Q,_owner:le}},Ce.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:c,_context:M},M.Consumer=M},Ce.createElement=P,Ce.createFactory=function(M){var j=P.bind(null,M);return j.type=M,j},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:d,render:M}},Ce.isValidElement=$,Ce.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:U}},Ce.memo=function(M,j){return{$$typeof:p,type:M,compare:j===void 0?null:j}},Ce.startTransition=function(M){var j=W.transition;W.transition={};try{M()}finally{W.transition=j}},Ce.unstable_act=X,Ce.useCallback=function(M,j){return G.current.useCallback(M,j)},Ce.useContext=function(M){return G.current.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M){return G.current.useDeferredValue(M)},Ce.useEffect=function(M,j){return G.current.useEffect(M,j)},Ce.useId=function(){return G.current.useId()},Ce.useImperativeHandle=function(M,j,O){return G.current.useImperativeHandle(M,j,O)},Ce.useInsertionEffect=function(M,j){return G.current.useInsertionEffect(M,j)},Ce.useLayoutEffect=function(M,j){return G.current.useLayoutEffect(M,j)},Ce.useMemo=function(M,j){return G.current.useMemo(M,j)},Ce.useReducer=function(M,j,O){return G.current.useReducer(M,j,O)},Ce.useRef=function(M){return G.current.useRef(M)},Ce.useState=function(M){return G.current.useState(M)},Ce.useSyncExternalStore=function(M,j,O){return G.current.useSyncExternalStore(M,j,O)},Ce.useTransition=function(){return G.current.useTransition()},Ce.version="18.3.1",Ce}var Ah;function mo(){return Ah||(Ah=1,xu.exports=E1()),xu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh;function _1(){if(Rh)return Zi;Rh=1;var n=mo(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var g,h={},v=null,x=null;p!==void 0&&(v=""+p),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(x=f.ref);for(g in f)l.call(f,g)&&!c.hasOwnProperty(g)&&(h[g]=f[g]);if(d&&d.defaultProps)for(g in f=d.defaultProps,f)h[g]===void 0&&(h[g]=f[g]);return{$$typeof:r,type:d,key:v,ref:x,props:h,_owner:s.current}}return Zi.Fragment=o,Zi.jsx=u,Zi.jsxs=u,Zi}var zh;function k1(){return zh||(zh=1,vu.exports=_1()),vu.exports}var V=k1(),re=mo();const C1=Vc(re);var jl={},wu={exports:{}},vn={},Su={exports:{}},Eu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dh;function b1(){return Dh||(Dh=1,(function(n){function r(W,B){var X=W.length;W.push(B);e:for(;0<X;){var M=X-1>>>1,j=W[M];if(0<s(j,B))W[M]=B,W[X]=j,X=M;else break e}}function o(W){return W.length===0?null:W[0]}function l(W){if(W.length===0)return null;var B=W[0],X=W.pop();if(X!==B){W[0]=X;e:for(var M=0,j=W.length,O=j>>>1;M<O;){var Q=2*(M+1)-1,K=W[Q],ie=Q+1,le=W[ie];if(0>s(K,X))ie<j&&0>s(le,K)?(W[M]=le,W[ie]=X,M=ie):(W[M]=K,W[Q]=X,M=Q);else if(ie<j&&0>s(le,X))W[M]=le,W[ie]=X,M=ie;else break e}}return B}function s(W,B){var X=W.sortIndex-B.sortIndex;return X!==0?X:W.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],p=[],g=1,h=null,v=3,x=!1,w=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(W){for(var B=o(p);B!==null;){if(B.callback===null)l(p);else if(B.startTime<=W)l(p),B.sortIndex=B.expirationTime,r(f,B);else break;B=o(p)}}function b(W){if(C=!1,E(W),!w)if(o(f)!==null)w=!0,U(R);else{var B=o(p);B!==null&&G(b,B.startTime-W)}}function R(W,B){w=!1,C&&(C=!1,_(P),P=-1),x=!0;var X=v;try{for(E(B),h=o(f);h!==null&&(!(h.expirationTime>B)||W&&!I());){var M=h.callback;if(typeof M=="function"){h.callback=null,v=h.priorityLevel;var j=M(h.expirationTime<=B);B=n.unstable_now(),typeof j=="function"?h.callback=j:h===o(f)&&l(f),E(B)}else l(f);h=o(f)}if(h!==null)var O=!0;else{var Q=o(p);Q!==null&&G(b,Q.startTime-B),O=!1}return O}finally{h=null,v=X,x=!1}}var L=!1,F=null,P=-1,A=5,$=-1;function I(){return!(n.unstable_now()-$<A)}function D(){if(F!==null){var W=n.unstable_now();$=W;var B=!0;try{B=F(!0,W)}finally{B?J():(L=!1,F=null)}}else L=!1}var J;if(typeof N=="function")J=function(){N(D)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,Y=T.port2;T.port1.onmessage=D,J=function(){Y.postMessage(null)}}else J=function(){S(D,0)};function U(W){F=W,L||(L=!0,J())}function G(W,B){P=S(function(){W(n.unstable_now())},B)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){w||x||(w=!0,U(R))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return o(f)},n.unstable_next=function(W){switch(v){case 1:case 2:case 3:var B=3;break;default:B=v}var X=v;v=B;try{return W()}finally{v=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,B){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=v;v=W;try{return B()}finally{v=X}},n.unstable_scheduleCallback=function(W,B,X){var M=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?M+X:M):X=M,W){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=X+j,W={id:g++,callback:B,priorityLevel:W,startTime:X,expirationTime:j,sortIndex:-1},X>M?(W.sortIndex=X,r(p,W),o(f)===null&&W===o(p)&&(C?(_(P),P=-1):C=!0,G(b,X-M))):(W.sortIndex=j,r(f,W),w||x||(w=!0,U(R))),W},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(W){var B=v;return function(){var X=v;v=B;try{return W.apply(this,arguments)}finally{v=X}}}})(Eu)),Eu}var Oh;function N1(){return Oh||(Oh=1,Su.exports=b1()),Su.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function P1(){if(Fh)return vn;Fh=1;var n=mo(),r=N1();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,s={};function c(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(s[e]=t,e=0;e<t.length;e++)l.add(t[e])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},h={};function v(e){return f.call(h,e)?!0:f.call(g,e)?!1:p.test(e)?h[e]=!0:(g[e]=!0,!1)}function x(e,t,i,a){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w(e,t,i,a){if(t===null||typeof t>"u"||x(e,t,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,i,a,m,y,k){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=m,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=y,this.removeEmptyString=k}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function N(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,N);S[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,N);S[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,N);S[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function E(e,t,i,a){var m=S.hasOwnProperty(t)?S[t]:null;(m!==null?m.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w(t,i,m,a)&&(i=null),a||m===null?v(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):m.mustUseProperty?e[m.propertyName]=i===null?m.type===3?!1:"":i:(t=m.attributeName,a=m.attributeNamespace,i===null?e.removeAttribute(t):(m=m.type,i=m===3||m===4&&i===!0?"":""+i,a?e.setAttributeNS(a,t,i):e.setAttribute(t,i))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),I=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),W=Symbol.iterator;function B(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,M;function j(e){if(M===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return`
`+M+e}var O=!1;function Q(e,t){if(!e||O)return"";O=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(te){var a=te}Reflect.construct(e,[],t)}else{try{t.call()}catch(te){a=te}e.call(t.prototype)}else{try{throw Error()}catch(te){a=te}e()}}catch(te){if(te&&a&&typeof te.stack=="string"){for(var m=te.stack.split(`
`),y=a.stack.split(`
`),k=m.length-1,z=y.length-1;1<=k&&0<=z&&m[k]!==y[z];)z--;for(;1<=k&&0<=z;k--,z--)if(m[k]!==y[z]){if(k!==1||z!==1)do if(k--,z--,0>z||m[k]!==y[z]){var H=`
`+m[k].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=k&&0<=z);break}}}finally{O=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?j(e):""}function K(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case L:return"Portal";case A:return"Profiler";case P:return"StrictMode";case J:return"Suspense";case T:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case I:return(e.displayName||"Context")+".Consumer";case $:return(e._context.displayName||"Context")+".Provider";case D:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case U:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function le(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Z(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fe(e){var t=oe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var m=i.get,y=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return m.call(this)},set:function(k){a=""+k,y.call(this,k)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(k){a=""+k},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xe(e){e._valueTracker||(e._valueTracker=fe(e))}function he(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=oe(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function de(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _e(e,t){var i=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function be(e,t){var i=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;i=Z(t.value!=null?t.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ne(e,t){t=t.checked,t!=null&&E(e,"checked",t,!1)}function Ae(e,t){Ne(e,t);var i=Z(t.value),a=t.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dn(e,t.type,i):t.hasOwnProperty("defaultValue")&&dn(e,t.type,Z(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function an(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function dn(e,t,i){(t!=="number"||de(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var nn=Array.isArray;function tn(e,t,i,a){if(e=e.options,t){t={};for(var m=0;m<i.length;m++)t["$"+i[m]]=!0;for(i=0;i<e.length;i++)m=t.hasOwnProperty("$"+e[i].value),e[i].selected!==m&&(e[i].selected=m),m&&a&&(e[i].defaultSelected=!0)}else{for(i=""+Z(i),t=null,m=0;m<e.length;m++){if(e[m].value===i){e[m].selected=!0,a&&(e[m].defaultSelected=!0);return}t!==null||e[m].disabled||(t=e[m])}t!==null&&(t.selected=!0)}}function lt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xn(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(nn(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Z(i)}}function Kn(e,t){var i=Z(t.value),a=Z(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function fn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tn,So=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,a,m){MSApp.execUnsafeLocalFunction(function(){return e(t,i,a,m)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tn=Tn||document.createElement("div"),Tn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function st(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Ut={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bs=["Webkit","ms","Moz","O"];Object.keys(Ut).forEach(function(e){bs.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ut[t]=Ut[e]})});function Eo(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Ut.hasOwnProperty(e)&&Ut[e]?(""+t).trim():t+"px"}function _o(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=i.indexOf("--")===0,m=Eo(i,t[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,m):e[i]=m}}var Ns=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(Ns[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,St=null,Et=null;function ko(e){if(e=Oi(e)){if(typeof hi!="function")throw Error(o(280));var t=e.stateNode;t&&(t=el(t),hi(e.stateNode,e.type,t))}}function Co(e){St?Et?Et.push(e):Et=[e]:St=e}function bo(){if(St){var e=St,t=Et;if(Et=St=null,ko(e),t)for(e=0;e<t.length;e++)ko(t[e])}}function No(e,t){return e(t)}function Po(){}var pi=!1;function Mo(e,t,i){if(pi)return e(t,i);pi=!0;try{return No(e,t,i)}finally{pi=!1,(St!==null||Et!==null)&&(Po(),bo())}}function qt(e,t){var i=e.stateNode;if(i===null)return null;var a=el(i);if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var mi=!1;if(d)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{mi=!1}function Ps(e,t,i,a,m,y,k,z,H){var te=Array.prototype.slice.call(arguments,3);try{t.apply(i,te)}catch(ae){this.onError(ae)}}var Gt=!1,wr=null,Sr=!1,gi=null,Ms={onError:function(e){Gt=!0,wr=e}};function Ts(e,t,i,a,m,y,k,z,H){Gt=!1,wr=null,Ps.apply(Ms,arguments)}function Ls(e,t,i,a,m,y,k,z,H){if(Ts.apply(this,arguments),Gt){if(Gt){var te=wr;Gt=!1,wr=null}else throw Error(o(198));Sr||(Sr=!0,gi=te)}}function Zn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function yi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vi(e){if(Zn(e)!==e)throw Error(o(188))}function Is(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,a=t;;){var m=i.return;if(m===null)break;var y=m.alternate;if(y===null){if(a=m.return,a!==null){i=a;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===i)return vi(m),e;if(y===a)return vi(m),t;y=y.sibling}throw Error(o(188))}if(i.return!==a.return)i=m,a=y;else{for(var k=!1,z=m.child;z;){if(z===i){k=!0,i=m,a=y;break}if(z===a){k=!0,a=m,i=y;break}z=z.sibling}if(!k){for(z=y.child;z;){if(z===i){k=!0,i=y,a=m;break}if(z===a){k=!0,a=y,i=m;break}z=z.sibling}if(!k)throw Error(o(189))}}if(i.alternate!==a)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function To(e){return e=Is(e),e!==null?Lo(e):null}function Lo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lo(e);if(t!==null)return t;e=e.sibling}return null}var Io=r.unstable_scheduleCallback,Ao=r.unstable_cancelCallback,As=r.unstable_shouldYield,Ro=r.unstable_requestPaint,je=r.unstable_now,Rs=r.unstable_getCurrentPriorityLevel,xi=r.unstable_ImmediatePriority,zo=r.unstable_UserBlockingPriority,Er=r.unstable_NormalPriority,zs=r.unstable_LowPriority,Do=r.unstable_IdlePriority,_r=null,Sn=null;function Ds(e){if(Sn&&typeof Sn.onCommitFiberRoot=="function")try{Sn.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var En=Math.clz32?Math.clz32:js,Os=Math.log,Fs=Math.LN2;function js(e){return e>>>=0,e===0?32:31-(Os(e)/Fs|0)|0}var kr=64,Cr=4194304;function Xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function at(e,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,m=e.suspendedLanes,y=e.pingedLanes,k=i&268435455;if(k!==0){var z=k&~m;z!==0?a=Xt(z):(y&=k,y!==0&&(a=Xt(y)))}else k=i&~m,k!==0?a=Xt(k):y!==0&&(a=Xt(y));if(a===0)return 0;if(t!==0&&t!==a&&(t&m)===0&&(m=a&-a,y=t&-t,m>=y||m===16&&(y&4194240)!==0))return t;if((a&4)!==0&&(a|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)i=31-En(t),m=1<<i,a|=e[i],t&=~m;return a}function Hs(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oo(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,m=e.expirationTimes,y=e.pendingLanes;0<y;){var k=31-En(y),z=1<<k,H=m[k];H===-1?((z&i)===0||(z&a)!==0)&&(m[k]=Hs(z,t)):H<=t&&(e.expiredLanes|=z),y&=~z}}function wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fo(){var e=kr;return kr<<=1,(kr&4194240)===0&&(kr=64),e}function Kt(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Zt(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-En(t),e[t]=i}function $s(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var m=31-En(i),y=1<<m;t[m]=0,a[m]=-1,e[m]=-1,i&=~y}}function br(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-En(i),m=1<<a;m&t|e[a]&t&&(e[a]|=t),i&=~m}}var Le=0;function ud(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var cd,Bs,dd,fd,hd,Vs=!1,jo=[],_t=null,kt=null,Ct=null,Si=new Map,Ei=new Map,bt=[],Bg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pd(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ei.delete(t.pointerId)}}function _i(e,t,i,a,m,y){return e===null||e.nativeEvent!==y?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:y,targetContainers:[m]},t!==null&&(t=Oi(t),t!==null&&Bs(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,m!==null&&t.indexOf(m)===-1&&t.push(m),e)}function Vg(e,t,i,a,m){switch(t){case"focusin":return _t=_i(_t,e,t,i,a,m),!0;case"dragenter":return kt=_i(kt,e,t,i,a,m),!0;case"mouseover":return Ct=_i(Ct,e,t,i,a,m),!0;case"pointerover":var y=m.pointerId;return Si.set(y,_i(Si.get(y)||null,e,t,i,a,m)),!0;case"gotpointercapture":return y=m.pointerId,Ei.set(y,_i(Ei.get(y)||null,e,t,i,a,m)),!0}return!1}function md(e){var t=Jt(e.target);if(t!==null){var i=Zn(t);if(i!==null){if(t=i.tag,t===13){if(t=yi(i),t!==null){e.blockedOn=t,hd(e.priority,function(){dd(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Qs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);di=a,i.target.dispatchEvent(a),di=null}else return t=Oi(i),t!==null&&Bs(t),e.blockedOn=i,!1;t.shift()}return!0}function gd(e,t,i){Ho(e)&&i.delete(t)}function Wg(){Vs=!1,_t!==null&&Ho(_t)&&(_t=null),kt!==null&&Ho(kt)&&(kt=null),Ct!==null&&Ho(Ct)&&(Ct=null),Si.forEach(gd),Ei.forEach(gd)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,Vs||(Vs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Wg)))}function Ci(e){function t(m){return ki(m,e)}if(0<jo.length){ki(jo[0],e);for(var i=1;i<jo.length;i++){var a=jo[i];a.blockedOn===e&&(a.blockedOn=null)}}for(_t!==null&&ki(_t,e),kt!==null&&ki(kt,e),Ct!==null&&ki(Ct,e),Si.forEach(t),Ei.forEach(t),i=0;i<bt.length;i++)a=bt[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<bt.length&&(i=bt[0],i.blockedOn===null);)md(i),i.blockedOn===null&&bt.shift()}var Nr=b.ReactCurrentBatchConfig,$o=!0;function Qg(e,t,i,a){var m=Le,y=Nr.transition;Nr.transition=null;try{Le=1,Ws(e,t,i,a)}finally{Le=m,Nr.transition=y}}function Ug(e,t,i,a){var m=Le,y=Nr.transition;Nr.transition=null;try{Le=4,Ws(e,t,i,a)}finally{Le=m,Nr.transition=y}}function Ws(e,t,i,a){if($o){var m=Qs(e,t,i,a);if(m===null)aa(e,t,a,Bo,i),pd(e,a);else if(Vg(m,e,t,i,a))a.stopPropagation();else if(pd(e,a),t&4&&-1<Bg.indexOf(e)){for(;m!==null;){var y=Oi(m);if(y!==null&&cd(y),y=Qs(e,t,i,a),y===null&&aa(e,t,a,Bo,i),y===m)break;m=y}m!==null&&a.stopPropagation()}else aa(e,t,a,null,i)}}var Bo=null;function Qs(e,t,i,a){if(Bo=null,e=fi(a),e=Jt(e),e!==null)if(t=Zn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=yi(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Rs()){case xi:return 1;case zo:return 4;case Er:case zs:return 16;case Do:return 536870912;default:return 16}default:return 16}}var Nt=null,Us=null,Vo=null;function vd(){if(Vo)return Vo;var e,t=Us,i=t.length,a,m="value"in Nt?Nt.value:Nt.textContent,y=m.length;for(e=0;e<i&&t[e]===m[e];e++);var k=i-e;for(a=1;a<=k&&t[i-a]===m[y-a];a++);return Vo=m.slice(e,1<a?1-a:void 0)}function Wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function xd(){return!1}function _n(e){function t(i,a,m,y,k){this._reactName=i,this._targetInst=m,this.type=a,this.nativeEvent=y,this.target=k,this.currentTarget=null;for(var z in e)e.hasOwnProperty(z)&&(i=e[z],this[z]=i?i(y):y[z]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Qo:xd,this.isPropagationStopped=xd,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qs=_n(Pr),bi=X({},Pr,{view:0,detail:0}),qg=_n(bi),Ys,Gs,Ni,Uo=X({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ks,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ni&&(Ni&&e.type==="mousemove"?(Ys=e.screenX-Ni.screenX,Gs=e.screenY-Ni.screenY):Gs=Ys=0,Ni=e),Ys)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),wd=_n(Uo),Yg=X({},Uo,{dataTransfer:0}),Gg=_n(Yg),Xg=X({},bi,{relatedTarget:0}),Xs=_n(Xg),Kg=X({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Zg=_n(Kg),Jg=X({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ey=_n(Jg),ny=X({},Pr,{data:0}),Sd=_n(ny),ty={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ry={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oy(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iy[e])?!!t[e]:!1}function Ks(){return oy}var ly=X({},bi,{key:function(e){if(e.key){var t=ty[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ry[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ks,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sy=_n(ly),ay=X({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=_n(ay),uy=X({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ks}),cy=_n(uy),dy=X({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),fy=_n(dy),hy=X({},Uo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),py=_n(hy),my=[9,13,27,32],Zs=d&&"CompositionEvent"in window,Pi=null;d&&"documentMode"in document&&(Pi=document.documentMode);var gy=d&&"TextEvent"in window&&!Pi,_d=d&&(!Zs||Pi&&8<Pi&&11>=Pi),kd=" ",Cd=!1;function bd(e,t){switch(e){case"keyup":return my.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function yy(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(Cd=!0,kd);case"textInput":return e=t.data,e===kd&&Cd?null:e;default:return null}}function vy(e,t){if(Mr)return e==="compositionend"||!Zs&&bd(e,t)?(e=vd(),Vo=Us=Nt=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _d&&t.locale!=="ko"?null:t.data;default:return null}}var xy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xy[e.type]:t==="textarea"}function Md(e,t,i,a){Co(a),t=Ko(t,"onChange"),0<t.length&&(i=new qs("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var Mi=null,Ti=null;function wy(e){qd(e,0)}function qo(e){var t=Rr(e);if(he(t))return e}function Sy(e,t){if(e==="change")return t}var Td=!1;if(d){var Js;if(d){var ea="oninput"in document;if(!ea){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),ea=typeof Ld.oninput=="function"}Js=ea}else Js=!1;Td=Js&&(!document.documentMode||9<document.documentMode)}function Id(){Mi&&(Mi.detachEvent("onpropertychange",Ad),Ti=Mi=null)}function Ad(e){if(e.propertyName==="value"&&qo(Ti)){var t=[];Md(t,Ti,e,fi(e)),Mo(wy,t)}}function Ey(e,t,i){e==="focusin"?(Id(),Mi=t,Ti=i,Mi.attachEvent("onpropertychange",Ad)):e==="focusout"&&Id()}function _y(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qo(Ti)}function ky(e,t){if(e==="click")return qo(t)}function Cy(e,t){if(e==="input"||e==="change")return qo(t)}function by(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var On=typeof Object.is=="function"?Object.is:by;function Li(e,t){if(On(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var m=i[a];if(!f.call(t,m)||!On(e[m],t[m]))return!1}return!0}function Rd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var i=Rd(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Rd(i)}}function Dd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Od(){for(var e=window,t=de();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=de(e.document)}return t}function na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ny(e){var t=Od(),i=e.focusedElem,a=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Dd(i.ownerDocument.documentElement,i)){if(a!==null&&na(i)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var m=i.textContent.length,y=Math.min(a.start,m);a=a.end===void 0?y:Math.min(a.end,m),!e.extend&&y>a&&(m=a,a=y,y=m),m=zd(i,y);var k=zd(i,a);m&&k&&(e.rangeCount!==1||e.anchorNode!==m.node||e.anchorOffset!==m.offset||e.focusNode!==k.node||e.focusOffset!==k.offset)&&(t=t.createRange(),t.setStart(m.node,m.offset),e.removeAllRanges(),y>a?(e.addRange(t),e.extend(k.node,k.offset)):(t.setEnd(k.node,k.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Py=d&&"documentMode"in document&&11>=document.documentMode,Tr=null,ta=null,Ii=null,ra=!1;function Fd(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ra||Tr==null||Tr!==de(a)||(a=Tr,"selectionStart"in a&&na(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ii&&Li(Ii,a)||(Ii=a,a=Ko(ta,"onSelect"),0<a.length&&(t=new qs("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=Tr)))}function Yo(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Lr={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},ia={},jd={};d&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Go(e){if(ia[e])return ia[e];if(!Lr[e])return e;var t=Lr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in jd)return ia[e]=t[i];return e}var Hd=Go("animationend"),$d=Go("animationiteration"),Bd=Go("animationstart"),Vd=Go("transitionend"),Wd=new Map,Qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Wd.set(e,t),c(t,[e])}for(var oa=0;oa<Qd.length;oa++){var la=Qd[oa],My=la.toLowerCase(),Ty=la[0].toUpperCase()+la.slice(1);Pt(My,"on"+Ty)}Pt(Hd,"onAnimationEnd"),Pt($d,"onAnimationIteration"),Pt(Bd,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(Vd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function Ud(e,t,i){var a=e.type||"unknown-event";e.currentTarget=i,Ls(a,t,void 0,e),e.currentTarget=null}function qd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],m=a.event;a=a.listeners;e:{var y=void 0;if(t)for(var k=a.length-1;0<=k;k--){var z=a[k],H=z.instance,te=z.currentTarget;if(z=z.listener,H!==y&&m.isPropagationStopped())break e;Ud(m,z,te),y=H}else for(k=0;k<a.length;k++){if(z=a[k],H=z.instance,te=z.currentTarget,z=z.listener,H!==y&&m.isPropagationStopped())break e;Ud(m,z,te),y=H}}}if(Sr)throw e=gi,Sr=!1,gi=null,e}function Re(e,t){var i=t[pa];i===void 0&&(i=t[pa]=new Set);var a=e+"__bubble";i.has(a)||(Yd(t,e,2,!1),i.add(a))}function sa(e,t,i){var a=0;t&&(a|=4),Yd(i,e,a,t)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[Xo]){e[Xo]=!0,l.forEach(function(i){i!=="selectionchange"&&(Ly.has(i)||sa(i,!1,e),sa(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=!0,sa("selectionchange",!1,t))}}function Yd(e,t,i,a){switch(yd(t)){case 1:var m=Qg;break;case 4:m=Ug;break;default:m=Ws}i=m.bind(null,t,i,e),m=void 0,!mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(m=!0),a?m!==void 0?e.addEventListener(t,i,{capture:!0,passive:m}):e.addEventListener(t,i,!0):m!==void 0?e.addEventListener(t,i,{passive:m}):e.addEventListener(t,i,!1)}function aa(e,t,i,a,m){var y=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var k=a.tag;if(k===3||k===4){var z=a.stateNode.containerInfo;if(z===m||z.nodeType===8&&z.parentNode===m)break;if(k===4)for(k=a.return;k!==null;){var H=k.tag;if((H===3||H===4)&&(H=k.stateNode.containerInfo,H===m||H.nodeType===8&&H.parentNode===m))return;k=k.return}for(;z!==null;){if(k=Jt(z),k===null)return;if(H=k.tag,H===5||H===6){a=y=k;continue e}z=z.parentNode}}a=a.return}Mo(function(){var te=y,ae=fi(i),ue=[];e:{var se=Wd.get(e);if(se!==void 0){var pe=qs,ge=e;switch(e){case"keypress":if(Wo(i)===0)break e;case"keydown":case"keyup":pe=sy;break;case"focusin":ge="focus",pe=Xs;break;case"focusout":ge="blur",pe=Xs;break;case"beforeblur":case"afterblur":pe=Xs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=wd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=cy;break;case Hd:case $d:case Bd:pe=Zg;break;case Vd:pe=fy;break;case"scroll":pe=qg;break;case"wheel":pe=py;break;case"copy":case"cut":case"paste":pe=ey;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Ed}var ye=(t&4)!==0,Ve=!ye&&e==="scroll",ee=ye?se!==null?se+"Capture":null:se;ye=[];for(var q=te,ne;q!==null;){ne=q;var ce=ne.stateNode;if(ne.tag===5&&ce!==null&&(ne=ce,ee!==null&&(ce=qt(q,ee),ce!=null&&ye.push(zi(q,ce,ne)))),Ve)break;q=q.return}0<ye.length&&(se=new pe(se,ge,null,i,ae),ue.push({event:se,listeners:ye}))}}if((t&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",se&&i!==di&&(ge=i.relatedTarget||i.fromElement)&&(Jt(ge)||ge[ut]))break e;if((pe||se)&&(se=ae.window===ae?ae:(se=ae.ownerDocument)?se.defaultView||se.parentWindow:window,pe?(ge=i.relatedTarget||i.toElement,pe=te,ge=ge?Jt(ge):null,ge!==null&&(Ve=Zn(ge),ge!==Ve||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(pe=null,ge=te),pe!==ge)){if(ye=wd,ce="onMouseLeave",ee="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Ed,ce="onPointerLeave",ee="onPointerEnter",q="pointer"),Ve=pe==null?se:Rr(pe),ne=ge==null?se:Rr(ge),se=new ye(ce,q+"leave",pe,i,ae),se.target=Ve,se.relatedTarget=ne,ce=null,Jt(ae)===te&&(ye=new ye(ee,q+"enter",ge,i,ae),ye.target=ne,ye.relatedTarget=Ve,ce=ye),Ve=ce,pe&&ge)n:{for(ye=pe,ee=ge,q=0,ne=ye;ne;ne=Ir(ne))q++;for(ne=0,ce=ee;ce;ce=Ir(ce))ne++;for(;0<q-ne;)ye=Ir(ye),q--;for(;0<ne-q;)ee=Ir(ee),ne--;for(;q--;){if(ye===ee||ee!==null&&ye===ee.alternate)break n;ye=Ir(ye),ee=Ir(ee)}ye=null}else ye=null;pe!==null&&Gd(ue,se,pe,ye,!1),ge!==null&&Ve!==null&&Gd(ue,Ve,ge,ye,!0)}}e:{if(se=te?Rr(te):window,pe=se.nodeName&&se.nodeName.toLowerCase(),pe==="select"||pe==="input"&&se.type==="file")var ve=Sy;else if(Pd(se))if(Td)ve=Cy;else{ve=_y;var Se=Ey}else(pe=se.nodeName)&&pe.toLowerCase()==="input"&&(se.type==="checkbox"||se.type==="radio")&&(ve=ky);if(ve&&(ve=ve(e,te))){Md(ue,ve,i,ae);break e}Se&&Se(e,se,te),e==="focusout"&&(Se=se._wrapperState)&&Se.controlled&&se.type==="number"&&dn(se,"number",se.value)}switch(Se=te?Rr(te):window,e){case"focusin":(Pd(Se)||Se.contentEditable==="true")&&(Tr=Se,ta=te,Ii=null);break;case"focusout":Ii=ta=Tr=null;break;case"mousedown":ra=!0;break;case"contextmenu":case"mouseup":case"dragend":ra=!1,Fd(ue,i,ae);break;case"selectionchange":if(Py)break;case"keydown":case"keyup":Fd(ue,i,ae)}var Ee;if(Zs)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Mr?bd(e,i)&&(ke="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ke="onCompositionStart");ke&&(_d&&i.locale!=="ko"&&(Mr||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Mr&&(Ee=vd()):(Nt=ae,Us="value"in Nt?Nt.value:Nt.textContent,Mr=!0)),Se=Ko(te,ke),0<Se.length&&(ke=new Sd(ke,e,null,i,ae),ue.push({event:ke,listeners:Se}),Ee?ke.data=Ee:(Ee=Nd(i),Ee!==null&&(ke.data=Ee)))),(Ee=gy?yy(e,i):vy(e,i))&&(te=Ko(te,"onBeforeInput"),0<te.length&&(ae=new Sd("onBeforeInput","beforeinput",null,i,ae),ue.push({event:ae,listeners:te}),ae.data=Ee))}qd(ue,t)})}function zi(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ko(e,t){for(var i=t+"Capture",a=[];e!==null;){var m=e,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=qt(e,i),y!=null&&a.unshift(zi(e,y,m)),y=qt(e,t),y!=null&&a.push(zi(e,y,m))),e=e.return}return a}function Ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gd(e,t,i,a,m){for(var y=t._reactName,k=[];i!==null&&i!==a;){var z=i,H=z.alternate,te=z.stateNode;if(H!==null&&H===a)break;z.tag===5&&te!==null&&(z=te,m?(H=qt(i,y),H!=null&&k.unshift(zi(i,H,z))):m||(H=qt(i,y),H!=null&&k.push(zi(i,H,z)))),i=i.return}k.length!==0&&e.push({event:t,listeners:k})}var Iy=/\r\n?/g,Ay=/\u0000|\uFFFD/g;function Xd(e){return(typeof e=="string"?e:""+e).replace(Iy,`
`).replace(Ay,"")}function Zo(e,t,i){if(t=Xd(t),Xd(e)!==t&&i)throw Error(o(425))}function Jo(){}var ua=null,ca=null;function da(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fa=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,zy=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(e){return Kd.resolve(null).then(e).catch(Dy)}:fa;function Dy(e){setTimeout(function(){throw e})}function ha(e,t){var i=t,a=0;do{var m=i.nextSibling;if(e.removeChild(i),m&&m.nodeType===8)if(i=m.data,i==="/$"){if(a===0){e.removeChild(m),Ci(t);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=m}while(i);Ci(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Zd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Ar,Di="__reactProps$"+Ar,ut="__reactContainer$"+Ar,pa="__reactEvents$"+Ar,Oy="__reactListeners$"+Ar,Fy="__reactHandles$"+Ar;function Jt(e){var t=e[Jn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[ut]||i[Jn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Zd(e);e!==null;){if(i=e[Jn])return i;e=Zd(e)}return t}e=i,i=e.parentNode}return null}function Oi(e){return e=e[Jn]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function el(e){return e[Di]||null}var ma=[],zr=-1;function Tt(e){return{current:e}}function ze(e){0>zr||(e.current=ma[zr],ma[zr]=null,zr--)}function Ie(e,t){zr++,ma[zr]=e.current,e.current=t}var Lt={},rn=Tt(Lt),hn=Tt(!1),er=Lt;function Dr(e,t){var i=e.type.contextTypes;if(!i)return Lt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in i)m[y]=t[y];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=m),m}function pn(e){return e=e.childContextTypes,e!=null}function nl(){ze(hn),ze(rn)}function Jd(e,t,i){if(rn.current!==Lt)throw Error(o(168));Ie(rn,t),Ie(hn,i)}function ef(e,t,i){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var m in a)if(!(m in t))throw Error(o(108,le(e)||"Unknown",m));return X({},i,a)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,er=rn.current,Ie(rn,e),Ie(hn,hn.current),!0}function nf(e,t,i){var a=e.stateNode;if(!a)throw Error(o(169));i?(e=ef(e,t,er),a.__reactInternalMemoizedMergedChildContext=e,ze(hn),ze(rn),Ie(rn,e)):ze(hn),Ie(hn,i)}var ct=null,rl=!1,ga=!1;function tf(e){ct===null?ct=[e]:ct.push(e)}function jy(e){rl=!0,tf(e)}function It(){if(!ga&&ct!==null){ga=!0;var e=0,t=Le;try{var i=ct;for(Le=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}ct=null,rl=!1}catch(m){throw ct!==null&&(ct=ct.slice(e+1)),Io(xi,It),m}finally{Le=t,ga=!1}}return null}var Or=[],Fr=0,il=null,ol=0,Ln=[],In=0,nr=null,dt=1,ft="";function tr(e,t){Or[Fr++]=ol,Or[Fr++]=il,il=e,ol=t}function rf(e,t,i){Ln[In++]=dt,Ln[In++]=ft,Ln[In++]=nr,nr=e;var a=dt;e=ft;var m=32-En(a)-1;a&=~(1<<m),i+=1;var y=32-En(t)+m;if(30<y){var k=m-m%5;y=(a&(1<<k)-1).toString(32),a>>=k,m-=k,dt=1<<32-En(t)+m|i<<m|a,ft=y+e}else dt=1<<y|i<<m|a,ft=e}function ya(e){e.return!==null&&(tr(e,1),rf(e,1,0))}function va(e){for(;e===il;)il=Or[--Fr],Or[Fr]=null,ol=Or[--Fr],Or[Fr]=null;for(;e===nr;)nr=Ln[--In],Ln[In]=null,ft=Ln[--In],Ln[In]=null,dt=Ln[--In],Ln[In]=null}var kn=null,Cn=null,De=!1,Fn=null;function of(e,t){var i=Dn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function lf(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kn=e,Cn=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kn=e,Cn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=nr!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Dn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,kn=e,Cn=null,!0):!1;default:return!1}}function xa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function wa(e){if(De){var t=Cn;if(t){var i=t;if(!lf(e,t)){if(xa(e))throw Error(o(418));t=Mt(i.nextSibling);var a=kn;t&&lf(e,t)?of(a,i):(e.flags=e.flags&-4097|2,De=!1,kn=e)}}else{if(xa(e))throw Error(o(418));e.flags=e.flags&-4097|2,De=!1,kn=e}}}function sf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kn=e}function ll(e){if(e!==kn)return!1;if(!De)return sf(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!da(e.type,e.memoizedProps)),t&&(t=Cn)){if(xa(e))throw af(),Error(o(418));for(;t;)of(e,t),t=Mt(t.nextSibling)}if(sf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Cn=Mt(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Cn=null}}else Cn=kn?Mt(e.stateNode.nextSibling):null;return!0}function af(){for(var e=Cn;e;)e=Mt(e.nextSibling)}function jr(){Cn=kn=null,De=!1}function Sa(e){Fn===null?Fn=[e]:Fn.push(e)}var Hy=b.ReactCurrentBatchConfig;function Fi(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var a=i.stateNode}if(!a)throw Error(o(147,e));var m=a,y=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===y?t.ref:(t=function(k){var z=m.refs;k===null?delete z[y]:z[y]=k},t._stringRef=y,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function sl(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uf(e){var t=e._init;return t(e._payload)}function cf(e){function t(ee,q){if(e){var ne=ee.deletions;ne===null?(ee.deletions=[q],ee.flags|=16):ne.push(q)}}function i(ee,q){if(!e)return null;for(;q!==null;)t(ee,q),q=q.sibling;return null}function a(ee,q){for(ee=new Map;q!==null;)q.key!==null?ee.set(q.key,q):ee.set(q.index,q),q=q.sibling;return ee}function m(ee,q){return ee=Ht(ee,q),ee.index=0,ee.sibling=null,ee}function y(ee,q,ne){return ee.index=ne,e?(ne=ee.alternate,ne!==null?(ne=ne.index,ne<q?(ee.flags|=2,q):ne):(ee.flags|=2,q)):(ee.flags|=1048576,q)}function k(ee){return e&&ee.alternate===null&&(ee.flags|=2),ee}function z(ee,q,ne,ce){return q===null||q.tag!==6?(q=fu(ne,ee.mode,ce),q.return=ee,q):(q=m(q,ne),q.return=ee,q)}function H(ee,q,ne,ce){var ve=ne.type;return ve===F?ae(ee,q,ne.props.children,ce,ne.key):q!==null&&(q.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===U&&uf(ve)===q.type)?(ce=m(q,ne.props),ce.ref=Fi(ee,q,ne),ce.return=ee,ce):(ce=Ll(ne.type,ne.key,ne.props,null,ee.mode,ce),ce.ref=Fi(ee,q,ne),ce.return=ee,ce)}function te(ee,q,ne,ce){return q===null||q.tag!==4||q.stateNode.containerInfo!==ne.containerInfo||q.stateNode.implementation!==ne.implementation?(q=hu(ne,ee.mode,ce),q.return=ee,q):(q=m(q,ne.children||[]),q.return=ee,q)}function ae(ee,q,ne,ce,ve){return q===null||q.tag!==7?(q=cr(ne,ee.mode,ce,ve),q.return=ee,q):(q=m(q,ne),q.return=ee,q)}function ue(ee,q,ne){if(typeof q=="string"&&q!==""||typeof q=="number")return q=fu(""+q,ee.mode,ne),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case R:return ne=Ll(q.type,q.key,q.props,null,ee.mode,ne),ne.ref=Fi(ee,null,q),ne.return=ee,ne;case L:return q=hu(q,ee.mode,ne),q.return=ee,q;case U:var ce=q._init;return ue(ee,ce(q._payload),ne)}if(nn(q)||B(q))return q=cr(q,ee.mode,ne,null),q.return=ee,q;sl(ee,q)}return null}function se(ee,q,ne,ce){var ve=q!==null?q.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ve!==null?null:z(ee,q,""+ne,ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case R:return ne.key===ve?H(ee,q,ne,ce):null;case L:return ne.key===ve?te(ee,q,ne,ce):null;case U:return ve=ne._init,se(ee,q,ve(ne._payload),ce)}if(nn(ne)||B(ne))return ve!==null?null:ae(ee,q,ne,ce,null);sl(ee,ne)}return null}function pe(ee,q,ne,ce,ve){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ee=ee.get(ne)||null,z(q,ee,""+ce,ve);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case R:return ee=ee.get(ce.key===null?ne:ce.key)||null,H(q,ee,ce,ve);case L:return ee=ee.get(ce.key===null?ne:ce.key)||null,te(q,ee,ce,ve);case U:var Se=ce._init;return pe(ee,q,ne,Se(ce._payload),ve)}if(nn(ce)||B(ce))return ee=ee.get(ne)||null,ae(q,ee,ce,ve,null);sl(q,ce)}return null}function ge(ee,q,ne,ce){for(var ve=null,Se=null,Ee=q,ke=q=0,Ze=null;Ee!==null&&ke<ne.length;ke++){Ee.index>ke?(Ze=Ee,Ee=null):Ze=Ee.sibling;var Te=se(ee,Ee,ne[ke],ce);if(Te===null){Ee===null&&(Ee=Ze);break}e&&Ee&&Te.alternate===null&&t(ee,Ee),q=y(Te,q,ke),Se===null?ve=Te:Se.sibling=Te,Se=Te,Ee=Ze}if(ke===ne.length)return i(ee,Ee),De&&tr(ee,ke),ve;if(Ee===null){for(;ke<ne.length;ke++)Ee=ue(ee,ne[ke],ce),Ee!==null&&(q=y(Ee,q,ke),Se===null?ve=Ee:Se.sibling=Ee,Se=Ee);return De&&tr(ee,ke),ve}for(Ee=a(ee,Ee);ke<ne.length;ke++)Ze=pe(Ee,ee,ke,ne[ke],ce),Ze!==null&&(e&&Ze.alternate!==null&&Ee.delete(Ze.key===null?ke:Ze.key),q=y(Ze,q,ke),Se===null?ve=Ze:Se.sibling=Ze,Se=Ze);return e&&Ee.forEach(function($t){return t(ee,$t)}),De&&tr(ee,ke),ve}function ye(ee,q,ne,ce){var ve=B(ne);if(typeof ve!="function")throw Error(o(150));if(ne=ve.call(ne),ne==null)throw Error(o(151));for(var Se=ve=null,Ee=q,ke=q=0,Ze=null,Te=ne.next();Ee!==null&&!Te.done;ke++,Te=ne.next()){Ee.index>ke?(Ze=Ee,Ee=null):Ze=Ee.sibling;var $t=se(ee,Ee,Te.value,ce);if($t===null){Ee===null&&(Ee=Ze);break}e&&Ee&&$t.alternate===null&&t(ee,Ee),q=y($t,q,ke),Se===null?ve=$t:Se.sibling=$t,Se=$t,Ee=Ze}if(Te.done)return i(ee,Ee),De&&tr(ee,ke),ve;if(Ee===null){for(;!Te.done;ke++,Te=ne.next())Te=ue(ee,Te.value,ce),Te!==null&&(q=y(Te,q,ke),Se===null?ve=Te:Se.sibling=Te,Se=Te);return De&&tr(ee,ke),ve}for(Ee=a(ee,Ee);!Te.done;ke++,Te=ne.next())Te=pe(Ee,ee,ke,Te.value,ce),Te!==null&&(e&&Te.alternate!==null&&Ee.delete(Te.key===null?ke:Te.key),q=y(Te,q,ke),Se===null?ve=Te:Se.sibling=Te,Se=Te);return e&&Ee.forEach(function(x1){return t(ee,x1)}),De&&tr(ee,ke),ve}function Ve(ee,q,ne,ce){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case R:e:{for(var ve=ne.key,Se=q;Se!==null;){if(Se.key===ve){if(ve=ne.type,ve===F){if(Se.tag===7){i(ee,Se.sibling),q=m(Se,ne.props.children),q.return=ee,ee=q;break e}}else if(Se.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===U&&uf(ve)===Se.type){i(ee,Se.sibling),q=m(Se,ne.props),q.ref=Fi(ee,Se,ne),q.return=ee,ee=q;break e}i(ee,Se);break}else t(ee,Se);Se=Se.sibling}ne.type===F?(q=cr(ne.props.children,ee.mode,ce,ne.key),q.return=ee,ee=q):(ce=Ll(ne.type,ne.key,ne.props,null,ee.mode,ce),ce.ref=Fi(ee,q,ne),ce.return=ee,ee=ce)}return k(ee);case L:e:{for(Se=ne.key;q!==null;){if(q.key===Se)if(q.tag===4&&q.stateNode.containerInfo===ne.containerInfo&&q.stateNode.implementation===ne.implementation){i(ee,q.sibling),q=m(q,ne.children||[]),q.return=ee,ee=q;break e}else{i(ee,q);break}else t(ee,q);q=q.sibling}q=hu(ne,ee.mode,ce),q.return=ee,ee=q}return k(ee);case U:return Se=ne._init,Ve(ee,q,Se(ne._payload),ce)}if(nn(ne))return ge(ee,q,ne,ce);if(B(ne))return ye(ee,q,ne,ce);sl(ee,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,q!==null&&q.tag===6?(i(ee,q.sibling),q=m(q,ne),q.return=ee,ee=q):(i(ee,q),q=fu(ne,ee.mode,ce),q.return=ee,ee=q),k(ee)):i(ee,q)}return Ve}var Hr=cf(!0),df=cf(!1),al=Tt(null),ul=null,$r=null,Ea=null;function _a(){Ea=$r=ul=null}function ka(e){var t=al.current;ze(al),e._currentValue=t}function Ca(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function Br(e,t){ul=e,Ea=$r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(mn=!0),e.firstContext=null)}function An(e){var t=e._currentValue;if(Ea!==e)if(e={context:e,memoizedValue:t,next:null},$r===null){if(ul===null)throw Error(o(308));$r=e,ul.dependencies={lanes:0,firstContext:e}}else $r=$r.next=e;return t}var rr=null;function ba(e){rr===null?rr=[e]:rr.push(e)}function ff(e,t,i,a){var m=t.interleaved;return m===null?(i.next=i,ba(t)):(i.next=m.next,m.next=i),t.interleaved=i,ht(e,a)}function ht(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var At=!1;function Na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Me&2)!==0){var m=a.pending;return m===null?t.next=t:(t.next=m.next,m.next=t),a.pending=t,ht(e,i)}return m=a.interleaved,m===null?(t.next=t,ba(a)):(t.next=m.next,m.next=t),a.interleaved=t,ht(e,i)}function cl(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,br(e,i)}}function pf(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var m=null,y=null;if(i=i.firstBaseUpdate,i!==null){do{var k={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};y===null?m=y=k:y=y.next=k,i=i.next}while(i!==null);y===null?m=y=t:y=y.next=t}else m=y=t;i={baseState:a.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function dl(e,t,i,a){var m=e.updateQueue;At=!1;var y=m.firstBaseUpdate,k=m.lastBaseUpdate,z=m.shared.pending;if(z!==null){m.shared.pending=null;var H=z,te=H.next;H.next=null,k===null?y=te:k.next=te,k=H;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,z=ae.lastBaseUpdate,z!==k&&(z===null?ae.firstBaseUpdate=te:z.next=te,ae.lastBaseUpdate=H))}if(y!==null){var ue=m.baseState;k=0,ae=te=H=null,z=y;do{var se=z.lane,pe=z.eventTime;if((a&se)===se){ae!==null&&(ae=ae.next={eventTime:pe,lane:0,tag:z.tag,payload:z.payload,callback:z.callback,next:null});e:{var ge=e,ye=z;switch(se=t,pe=i,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){ue=ge.call(pe,ue,se);break e}ue=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,se=typeof ge=="function"?ge.call(pe,ue,se):ge,se==null)break e;ue=X({},ue,se);break e;case 2:At=!0}}z.callback!==null&&z.lane!==0&&(e.flags|=64,se=m.effects,se===null?m.effects=[z]:se.push(z))}else pe={eventTime:pe,lane:se,tag:z.tag,payload:z.payload,callback:z.callback,next:null},ae===null?(te=ae=pe,H=ue):ae=ae.next=pe,k|=se;if(z=z.next,z===null){if(z=m.shared.pending,z===null)break;se=z,z=se.next,se.next=null,m.lastBaseUpdate=se,m.shared.pending=null}}while(!0);if(ae===null&&(H=ue),m.baseState=H,m.firstBaseUpdate=te,m.lastBaseUpdate=ae,t=m.shared.interleaved,t!==null){m=t;do k|=m.lane,m=m.next;while(m!==t)}else y===null&&(m.shared.lanes=0);lr|=k,e.lanes=k,e.memoizedState=ue}}function mf(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],m=a.callback;if(m!==null){if(a.callback=null,a=i,typeof m!="function")throw Error(o(191,m));m.call(a)}}}var ji={},et=Tt(ji),Hi=Tt(ji),$i=Tt(ji);function ir(e){if(e===ji)throw Error(o(174));return e}function Pa(e,t){switch(Ie($i,t),Ie(Hi,e),Ie(et,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wn(t,e)}ze(et),Ie(et,t)}function Vr(){ze(et),ze(Hi),ze($i)}function gf(e){ir($i.current);var t=ir(et.current),i=wn(t,e.type);t!==i&&(Ie(Hi,e),Ie(et,i))}function Ma(e){Hi.current===e&&(ze(et),ze(Hi))}var He=Tt(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ta=[];function La(){for(var e=0;e<Ta.length;e++)Ta[e]._workInProgressVersionPrimary=null;Ta.length=0}var hl=b.ReactCurrentDispatcher,Ia=b.ReactCurrentBatchConfig,or=0,$e=null,Ye=null,Xe=null,pl=!1,Bi=!1,Vi=0,$y=0;function on(){throw Error(o(321))}function Aa(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!On(e[i],t[i]))return!1;return!0}function Ra(e,t,i,a,m,y){if(or=y,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?Qy:Uy,e=i(a,m),Bi){y=0;do{if(Bi=!1,Vi=0,25<=y)throw Error(o(301));y+=1,Xe=Ye=null,t.updateQueue=null,hl.current=qy,e=i(a,m)}while(Bi)}if(hl.current=yl,t=Ye!==null&&Ye.next!==null,or=0,Xe=Ye=$e=null,pl=!1,t)throw Error(o(300));return e}function za(){var e=Vi!==0;return Vi=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?$e.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Rn(){if(Ye===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Ye.next;var t=Xe===null?$e.memoizedState:Xe.next;if(t!==null)Xe=t,Ye=e;else{if(e===null)throw Error(o(310));Ye=e,e={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},Xe===null?$e.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Wi(e,t){return typeof t=="function"?t(e):t}function Da(e){var t=Rn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=Ye,m=a.baseQueue,y=i.pending;if(y!==null){if(m!==null){var k=m.next;m.next=y.next,y.next=k}a.baseQueue=m=y,i.pending=null}if(m!==null){y=m.next,a=a.baseState;var z=k=null,H=null,te=y;do{var ae=te.lane;if((or&ae)===ae)H!==null&&(H=H.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),a=te.hasEagerState?te.eagerState:e(a,te.action);else{var ue={lane:ae,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};H===null?(z=H=ue,k=a):H=H.next=ue,$e.lanes|=ae,lr|=ae}te=te.next}while(te!==null&&te!==y);H===null?k=a:H.next=z,On(a,t.memoizedState)||(mn=!0),t.memoizedState=a,t.baseState=k,t.baseQueue=H,i.lastRenderedState=a}if(e=i.interleaved,e!==null){m=e;do y=m.lane,$e.lanes|=y,lr|=y,m=m.next;while(m!==e)}else m===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Oa(e){var t=Rn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=i.dispatch,m=i.pending,y=t.memoizedState;if(m!==null){i.pending=null;var k=m=m.next;do y=e(y,k.action),k=k.next;while(k!==m);On(y,t.memoizedState)||(mn=!0),t.memoizedState=y,t.baseQueue===null&&(t.baseState=y),i.lastRenderedState=y}return[y,a]}function yf(){}function vf(e,t){var i=$e,a=Rn(),m=t(),y=!On(a.memoizedState,m);if(y&&(a.memoizedState=m,mn=!0),a=a.queue,Fa(Sf.bind(null,i,a,e),[e]),a.getSnapshot!==t||y||Xe!==null&&Xe.memoizedState.tag&1){if(i.flags|=2048,Qi(9,wf.bind(null,i,a,m,t),void 0,null),Ke===null)throw Error(o(349));(or&30)!==0||xf(i,t,m)}return m}function xf(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function wf(e,t,i,a){t.value=i,t.getSnapshot=a,Ef(t)&&_f(e)}function Sf(e,t,i){return i(function(){Ef(t)&&_f(e)})}function Ef(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!On(e,i)}catch{return!0}}function _f(e){var t=ht(e,1);t!==null&&Bn(t,e,1,-1)}function kf(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=Wy.bind(null,$e,e),[t.memoizedState,e]}function Qi(e,t,i,a){return e={tag:e,create:t,destroy:i,deps:a,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e)),e}function Cf(){return Rn().memoizedState}function ml(e,t,i,a){var m=nt();$e.flags|=e,m.memoizedState=Qi(1|t,i,void 0,a===void 0?null:a)}function gl(e,t,i,a){var m=Rn();a=a===void 0?null:a;var y=void 0;if(Ye!==null){var k=Ye.memoizedState;if(y=k.destroy,a!==null&&Aa(a,k.deps)){m.memoizedState=Qi(t,i,y,a);return}}$e.flags|=e,m.memoizedState=Qi(1|t,i,y,a)}function bf(e,t){return ml(8390656,8,e,t)}function Fa(e,t){return gl(2048,8,e,t)}function Nf(e,t){return gl(4,2,e,t)}function Pf(e,t){return gl(4,4,e,t)}function Mf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Tf(e,t,i){return i=i!=null?i.concat([e]):null,gl(4,4,Mf.bind(null,t,e),i)}function ja(){}function Lf(e,t){var i=Rn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&Aa(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function If(e,t){var i=Rn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&Aa(t,a[1])?a[0]:(e=e(),i.memoizedState=[e,t],e)}function Af(e,t,i){return(or&21)===0?(e.baseState&&(e.baseState=!1,mn=!0),e.memoizedState=i):(On(i,t)||(i=Fo(),$e.lanes|=i,lr|=i,e.baseState=!0),t)}function By(e,t){var i=Le;Le=i!==0&&4>i?i:4,e(!0);var a=Ia.transition;Ia.transition={};try{e(!1),t()}finally{Le=i,Ia.transition=a}}function Rf(){return Rn().memoizedState}function Vy(e,t,i){var a=Ft(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},zf(e))Df(t,i);else if(i=ff(e,t,i,a),i!==null){var m=cn();Bn(i,e,a,m),Of(i,t,a)}}function Wy(e,t,i){var a=Ft(e),m={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(zf(e))Df(t,m);else{var y=e.alternate;if(e.lanes===0&&(y===null||y.lanes===0)&&(y=t.lastRenderedReducer,y!==null))try{var k=t.lastRenderedState,z=y(k,i);if(m.hasEagerState=!0,m.eagerState=z,On(z,k)){var H=t.interleaved;H===null?(m.next=m,ba(t)):(m.next=H.next,H.next=m),t.interleaved=m;return}}catch{}finally{}i=ff(e,t,m,a),i!==null&&(m=cn(),Bn(i,e,a,m),Of(i,t,a))}}function zf(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function Df(e,t){Bi=pl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Of(e,t,i){if((i&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,br(e,i)}}var yl={readContext:An,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Qy={readContext:An,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:bf,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ml(4194308,4,Mf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ml(4194308,4,e,t)},useInsertionEffect:function(e,t){return ml(4,2,e,t)},useMemo:function(e,t){var i=nt();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var a=nt();return t=i!==void 0?i(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Vy.bind(null,$e,e),[a.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:kf,useDebugValue:ja,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=kf(!1),t=e[0];return e=By.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var a=$e,m=nt();if(De){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),Ke===null)throw Error(o(349));(or&30)!==0||xf(a,t,i)}m.memoizedState=i;var y={value:i,getSnapshot:t};return m.queue=y,bf(Sf.bind(null,a,y,e),[e]),a.flags|=2048,Qi(9,wf.bind(null,a,y,i,t),void 0,null),i},useId:function(){var e=nt(),t=Ke.identifierPrefix;if(De){var i=ft,a=dt;i=(a&~(1<<32-En(a)-1)).toString(32)+i,t=":"+t+"R"+i,i=Vi++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=$y++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Uy={readContext:An,useCallback:Lf,useContext:An,useEffect:Fa,useImperativeHandle:Tf,useInsertionEffect:Nf,useLayoutEffect:Pf,useMemo:If,useReducer:Da,useRef:Cf,useState:function(){return Da(Wi)},useDebugValue:ja,useDeferredValue:function(e){var t=Rn();return Af(t,Ye.memoizedState,e)},useTransition:function(){var e=Da(Wi)[0],t=Rn().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:vf,useId:Rf,unstable_isNewReconciler:!1},qy={readContext:An,useCallback:Lf,useContext:An,useEffect:Fa,useImperativeHandle:Tf,useInsertionEffect:Nf,useLayoutEffect:Pf,useMemo:If,useReducer:Oa,useRef:Cf,useState:function(){return Oa(Wi)},useDebugValue:ja,useDeferredValue:function(e){var t=Rn();return Ye===null?t.memoizedState=e:Af(t,Ye.memoizedState,e)},useTransition:function(){var e=Oa(Wi)[0],t=Rn().memoizedState;return[e,t]},useMutableSource:yf,useSyncExternalStore:vf,useId:Rf,unstable_isNewReconciler:!1};function jn(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Ha(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:X({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var vl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var a=cn(),m=Ft(e),y=pt(a,m);y.payload=t,i!=null&&(y.callback=i),t=Rt(e,y,m),t!==null&&(Bn(t,e,m,a),cl(t,e,m))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=cn(),m=Ft(e),y=pt(a,m);y.tag=1,y.payload=t,i!=null&&(y.callback=i),t=Rt(e,y,m),t!==null&&(Bn(t,e,m,a),cl(t,e,m))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=cn(),a=Ft(e),m=pt(i,a);m.tag=2,t!=null&&(m.callback=t),t=Rt(e,m,a),t!==null&&(Bn(t,e,a,i),cl(t,e,a))}};function Ff(e,t,i,a,m,y,k){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,y,k):t.prototype&&t.prototype.isPureReactComponent?!Li(i,a)||!Li(m,y):!0}function jf(e,t,i){var a=!1,m=Lt,y=t.contextType;return typeof y=="object"&&y!==null?y=An(y):(m=pn(t)?er:rn.current,a=t.contextTypes,y=(a=a!=null)?Dr(e,m):Lt),t=new t(i,y),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=m,e.__reactInternalMemoizedMaskedChildContext=y),t}function Hf(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function $a(e,t,i,a){var m=e.stateNode;m.props=i,m.state=e.memoizedState,m.refs={},Na(e);var y=t.contextType;typeof y=="object"&&y!==null?m.context=An(y):(y=pn(t)?er:rn.current,m.context=Dr(e,y)),m.state=e.memoizedState,y=t.getDerivedStateFromProps,typeof y=="function"&&(Ha(e,t,y,i),m.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(t=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),t!==m.state&&vl.enqueueReplaceState(m,m.state,null),dl(e,i,m,a),m.state=e.memoizedState),typeof m.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var i="",a=t;do i+=K(a),a=a.return;while(a);var m=i}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:e,source:t,stack:m,digest:null}}function Ba(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Va(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Yy=typeof WeakMap=="function"?WeakMap:Map;function $f(e,t,i){i=pt(-1,i),i.tag=3,i.payload={element:null};var a=t.value;return i.callback=function(){Cl||(Cl=!0,iu=a),Va(e,t)},i}function Bf(e,t,i){i=pt(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var m=t.value;i.payload=function(){return a(m)},i.callback=function(){Va(e,t)}}var y=e.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(i.callback=function(){Va(e,t),typeof a!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var k=t.stack;this.componentDidCatch(t.value,{componentStack:k!==null?k:""})}),i}function Vf(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new Yy;var m=new Set;a.set(t,m)}else m=a.get(t),m===void 0&&(m=new Set,a.set(t,m));m.has(i)||(m.add(i),e=a1.bind(null,e,t,i),t.then(e,e))}function Wf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qf(e,t,i,a,m){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=pt(-1,1),t.tag=2,Rt(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=m,e)}var Gy=b.ReactCurrentOwner,mn=!1;function un(e,t,i,a){t.child=e===null?df(t,null,i,a):Hr(t,e.child,i,a)}function Uf(e,t,i,a,m){i=i.render;var y=t.ref;return Br(t,m),a=Ra(e,t,i,a,y,m),i=za(),e!==null&&!mn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~m,mt(e,t,m)):(De&&i&&ya(t),t.flags|=1,un(e,t,a,m),t.child)}function qf(e,t,i,a,m){if(e===null){var y=i.type;return typeof y=="function"&&!du(y)&&y.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=y,Yf(e,t,y,a,m)):(e=Ll(i.type,null,a,t,t.mode,m),e.ref=t.ref,e.return=t,t.child=e)}if(y=e.child,(e.lanes&m)===0){var k=y.memoizedProps;if(i=i.compare,i=i!==null?i:Li,i(k,a)&&e.ref===t.ref)return mt(e,t,m)}return t.flags|=1,e=Ht(y,a),e.ref=t.ref,e.return=t,t.child=e}function Yf(e,t,i,a,m){if(e!==null){var y=e.memoizedProps;if(Li(y,a)&&e.ref===t.ref)if(mn=!1,t.pendingProps=a=y,(e.lanes&m)!==0)(e.flags&131072)!==0&&(mn=!0);else return t.lanes=e.lanes,mt(e,t,m)}return Wa(e,t,i,a,m)}function Gf(e,t,i){var a=t.pendingProps,m=a.children,y=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(Ur,bn),bn|=i;else{if((i&1073741824)===0)return e=y!==null?y.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(Ur,bn),bn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=y!==null?y.baseLanes:i,Ie(Ur,bn),bn|=a}else y!==null?(a=y.baseLanes|i,t.memoizedState=null):a=i,Ie(Ur,bn),bn|=a;return un(e,t,m,i),t.child}function Xf(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Wa(e,t,i,a,m){var y=pn(i)?er:rn.current;return y=Dr(t,y),Br(t,m),i=Ra(e,t,i,a,y,m),a=za(),e!==null&&!mn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~m,mt(e,t,m)):(De&&a&&ya(t),t.flags|=1,un(e,t,i,m),t.child)}function Kf(e,t,i,a,m){if(pn(i)){var y=!0;tl(t)}else y=!1;if(Br(t,m),t.stateNode===null)wl(e,t),jf(t,i,a),$a(t,i,a,m),a=!0;else if(e===null){var k=t.stateNode,z=t.memoizedProps;k.props=z;var H=k.context,te=i.contextType;typeof te=="object"&&te!==null?te=An(te):(te=pn(i)?er:rn.current,te=Dr(t,te));var ae=i.getDerivedStateFromProps,ue=typeof ae=="function"||typeof k.getSnapshotBeforeUpdate=="function";ue||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(z!==a||H!==te)&&Hf(t,k,a,te),At=!1;var se=t.memoizedState;k.state=se,dl(t,a,k,m),H=t.memoizedState,z!==a||se!==H||hn.current||At?(typeof ae=="function"&&(Ha(t,i,ae,a),H=t.memoizedState),(z=At||Ff(t,i,z,a,se,H,te))?(ue||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(t.flags|=4194308)):(typeof k.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=H),k.props=a,k.state=H,k.context=te,a=z):(typeof k.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{k=t.stateNode,hf(e,t),z=t.memoizedProps,te=t.type===t.elementType?z:jn(t.type,z),k.props=te,ue=t.pendingProps,se=k.context,H=i.contextType,typeof H=="object"&&H!==null?H=An(H):(H=pn(i)?er:rn.current,H=Dr(t,H));var pe=i.getDerivedStateFromProps;(ae=typeof pe=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(z!==ue||se!==H)&&Hf(t,k,a,H),At=!1,se=t.memoizedState,k.state=se,dl(t,a,k,m);var ge=t.memoizedState;z!==ue||se!==ge||hn.current||At?(typeof pe=="function"&&(Ha(t,i,pe,a),ge=t.memoizedState),(te=At||Ff(t,i,te,a,se,ge,H)||!1)?(ae||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(a,ge,H),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(a,ge,H)),typeof k.componentDidUpdate=="function"&&(t.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof k.componentDidUpdate!="function"||z===e.memoizedProps&&se===e.memoizedState||(t.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&se===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ge),k.props=a,k.state=ge,k.context=H,a=te):(typeof k.componentDidUpdate!="function"||z===e.memoizedProps&&se===e.memoizedState||(t.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||z===e.memoizedProps&&se===e.memoizedState||(t.flags|=1024),a=!1)}return Qa(e,t,i,a,y,m)}function Qa(e,t,i,a,m,y){Xf(e,t);var k=(t.flags&128)!==0;if(!a&&!k)return m&&nf(t,i,!1),mt(e,t,y);a=t.stateNode,Gy.current=t;var z=k&&typeof i.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&k?(t.child=Hr(t,e.child,null,y),t.child=Hr(t,null,z,y)):un(e,t,z,y),t.memoizedState=a.state,m&&nf(t,i,!0),t.child}function Zf(e){var t=e.stateNode;t.pendingContext?Jd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jd(e,t.context,!1),Pa(e,t.containerInfo)}function Jf(e,t,i,a,m){return jr(),Sa(m),t.flags|=256,un(e,t,i,a),t.child}var Ua={dehydrated:null,treeContext:null,retryLane:0};function qa(e){return{baseLanes:e,cachePool:null,transitions:null}}function eh(e,t,i){var a=t.pendingProps,m=He.current,y=!1,k=(t.flags&128)!==0,z;if((z=k)||(z=e!==null&&e.memoizedState===null?!1:(m&2)!==0),z?(y=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(m|=1),Ie(He,m&1),e===null)return wa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(k=a.children,e=a.fallback,y?(a=t.mode,y=t.child,k={mode:"hidden",children:k},(a&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=k):y=Il(k,a,0,null),e=cr(e,a,i,null),y.return=t,e.return=t,y.sibling=e,t.child=y,t.child.memoizedState=qa(i),t.memoizedState=Ua,e):Ya(t,k));if(m=e.memoizedState,m!==null&&(z=m.dehydrated,z!==null))return Xy(e,t,k,a,z,m,i);if(y){y=a.fallback,k=t.mode,m=e.child,z=m.sibling;var H={mode:"hidden",children:a.children};return(k&1)===0&&t.child!==m?(a=t.child,a.childLanes=0,a.pendingProps=H,t.deletions=null):(a=Ht(m,H),a.subtreeFlags=m.subtreeFlags&14680064),z!==null?y=Ht(z,y):(y=cr(y,k,i,null),y.flags|=2),y.return=t,a.return=t,a.sibling=y,t.child=a,a=y,y=t.child,k=e.child.memoizedState,k=k===null?qa(i):{baseLanes:k.baseLanes|i,cachePool:null,transitions:k.transitions},y.memoizedState=k,y.childLanes=e.childLanes&~i,t.memoizedState=Ua,a}return y=e.child,e=y.sibling,a=Ht(y,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=i),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a}function Ya(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xl(e,t,i,a){return a!==null&&Sa(a),Hr(t,e.child,null,i),e=Ya(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xy(e,t,i,a,m,y,k){if(i)return t.flags&256?(t.flags&=-257,a=Ba(Error(o(422))),xl(e,t,k,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(y=a.fallback,m=t.mode,a=Il({mode:"visible",children:a.children},m,0,null),y=cr(y,m,k,null),y.flags|=2,a.return=t,y.return=t,a.sibling=y,t.child=a,(t.mode&1)!==0&&Hr(t,e.child,null,k),t.child.memoizedState=qa(k),t.memoizedState=Ua,y);if((t.mode&1)===0)return xl(e,t,k,null);if(m.data==="$!"){if(a=m.nextSibling&&m.nextSibling.dataset,a)var z=a.dgst;return a=z,y=Error(o(419)),a=Ba(y,a,void 0),xl(e,t,k,a)}if(z=(k&e.childLanes)!==0,mn||z){if(a=Ke,a!==null){switch(k&-k){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(a.suspendedLanes|k))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,ht(e,m),Bn(a,e,m,-1))}return cu(),a=Ba(Error(o(421))),xl(e,t,k,a)}return m.data==="$?"?(t.flags|=128,t.child=e.child,t=u1.bind(null,e),m._reactRetry=t,null):(e=y.treeContext,Cn=Mt(m.nextSibling),kn=t,De=!0,Fn=null,e!==null&&(Ln[In++]=dt,Ln[In++]=ft,Ln[In++]=nr,dt=e.id,ft=e.overflow,nr=t),t=Ya(t,a.children),t.flags|=4096,t)}function nh(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Ca(e.return,t,i)}function Ga(e,t,i,a,m){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:m}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=a,y.tail=i,y.tailMode=m)}function th(e,t,i){var a=t.pendingProps,m=a.revealOrder,y=a.tail;if(un(e,t,a.children,i),a=He.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nh(e,i,t);else if(e.tag===19)nh(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ie(He,a),(t.mode&1)===0)t.memoizedState=null;else switch(m){case"forwards":for(i=t.child,m=null;i!==null;)e=i.alternate,e!==null&&fl(e)===null&&(m=i),i=i.sibling;i=m,i===null?(m=t.child,t.child=null):(m=i.sibling,i.sibling=null),Ga(t,!1,m,i,y);break;case"backwards":for(i=null,m=t.child,t.child=null;m!==null;){if(e=m.alternate,e!==null&&fl(e)===null){t.child=m;break}e=m.sibling,m.sibling=i,i=m,m=e}Ga(t,!0,i,null,y);break;case"together":Ga(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=Ht(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ht(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Ky(e,t,i){switch(t.tag){case 3:Zf(t),jr();break;case 5:gf(t);break;case 1:pn(t.type)&&tl(t);break;case 4:Pa(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,m=t.memoizedProps.value;Ie(al,a._currentValue),a._currentValue=m;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ie(He,He.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?eh(e,t,i):(Ie(He,He.current&1),e=mt(e,t,i),e!==null?e.sibling:null);Ie(He,He.current&1);break;case 19:if(a=(i&t.childLanes)!==0,(e.flags&128)!==0){if(a)return th(e,t,i);t.flags|=128}if(m=t.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ie(He,He.current),a)break;return null;case 22:case 23:return t.lanes=0,Gf(e,t,i)}return mt(e,t,i)}var rh,Xa,ih,oh;rh=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Xa=function(){},ih=function(e,t,i,a){var m=e.memoizedProps;if(m!==a){e=t.stateNode,ir(et.current);var y=null;switch(i){case"input":m=_e(e,m),a=_e(e,a),y=[];break;case"select":m=X({},m,{value:void 0}),a=X({},a,{value:void 0}),y=[];break;case"textarea":m=lt(e,m),a=lt(e,a),y=[];break;default:typeof m.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Jo)}ui(i,a);var k;i=null;for(te in m)if(!a.hasOwnProperty(te)&&m.hasOwnProperty(te)&&m[te]!=null)if(te==="style"){var z=m[te];for(k in z)z.hasOwnProperty(k)&&(i||(i={}),i[k]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(s.hasOwnProperty(te)?y||(y=[]):(y=y||[]).push(te,null));for(te in a){var H=a[te];if(z=m!=null?m[te]:void 0,a.hasOwnProperty(te)&&H!==z&&(H!=null||z!=null))if(te==="style")if(z){for(k in z)!z.hasOwnProperty(k)||H&&H.hasOwnProperty(k)||(i||(i={}),i[k]="");for(k in H)H.hasOwnProperty(k)&&z[k]!==H[k]&&(i||(i={}),i[k]=H[k])}else i||(y||(y=[]),y.push(te,i)),i=H;else te==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,z=z?z.__html:void 0,H!=null&&z!==H&&(y=y||[]).push(te,H)):te==="children"?typeof H!="string"&&typeof H!="number"||(y=y||[]).push(te,""+H):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(s.hasOwnProperty(te)?(H!=null&&te==="onScroll"&&Re("scroll",e),y||z===H||(y=[])):(y=y||[]).push(te,H))}i&&(y=y||[]).push("style",i);var te=y;(t.updateQueue=te)&&(t.flags|=4)}},oh=function(e,t,i,a){i!==a&&(t.flags|=4)};function Ui(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ln(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var m=e.child;m!==null;)i|=m.lanes|m.childLanes,a|=m.subtreeFlags&14680064,a|=m.flags&14680064,m.return=e,m=m.sibling;else for(m=e.child;m!==null;)i|=m.lanes|m.childLanes,a|=m.subtreeFlags,a|=m.flags,m.return=e,m=m.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function Zy(e,t,i){var a=t.pendingProps;switch(va(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(t),null;case 1:return pn(t.type)&&nl(),ln(t),null;case 3:return a=t.stateNode,Vr(),ze(hn),ze(rn),La(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fn!==null&&(su(Fn),Fn=null))),Xa(e,t),ln(t),null;case 5:Ma(t);var m=ir($i.current);if(i=t.type,e!==null&&t.stateNode!=null)ih(e,t,i,a,m),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(o(166));return ln(t),null}if(e=ir(et.current),ll(t)){a=t.stateNode,i=t.type;var y=t.memoizedProps;switch(a[Jn]=t,a[Di]=y,e=(t.mode&1)!==0,i){case"dialog":Re("cancel",a),Re("close",a);break;case"iframe":case"object":case"embed":Re("load",a);break;case"video":case"audio":for(m=0;m<Ai.length;m++)Re(Ai[m],a);break;case"source":Re("error",a);break;case"img":case"image":case"link":Re("error",a),Re("load",a);break;case"details":Re("toggle",a);break;case"input":be(a,y),Re("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!y.multiple},Re("invalid",a);break;case"textarea":Xn(a,y),Re("invalid",a)}ui(i,y),m=null;for(var k in y)if(y.hasOwnProperty(k)){var z=y[k];k==="children"?typeof z=="string"?a.textContent!==z&&(y.suppressHydrationWarning!==!0&&Zo(a.textContent,z,e),m=["children",z]):typeof z=="number"&&a.textContent!==""+z&&(y.suppressHydrationWarning!==!0&&Zo(a.textContent,z,e),m=["children",""+z]):s.hasOwnProperty(k)&&z!=null&&k==="onScroll"&&Re("scroll",a)}switch(i){case"input":xe(a),an(a,y,!0);break;case"textarea":xe(a),fn(a);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(a.onclick=Jo)}a=m,t.updateQueue=a,a!==null&&(t.flags|=4)}else{k=m.nodeType===9?m:m.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mn(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=k.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=k.createElement(i,{is:a.is}):(e=k.createElement(i),i==="select"&&(k=e,a.multiple?k.multiple=!0:a.size&&(k.size=a.size))):e=k.createElementNS(e,i),e[Jn]=t,e[Di]=a,rh(e,t,!1,!1),t.stateNode=e;e:{switch(k=ci(i,a),i){case"dialog":Re("cancel",e),Re("close",e),m=a;break;case"iframe":case"object":case"embed":Re("load",e),m=a;break;case"video":case"audio":for(m=0;m<Ai.length;m++)Re(Ai[m],e);m=a;break;case"source":Re("error",e),m=a;break;case"img":case"image":case"link":Re("error",e),Re("load",e),m=a;break;case"details":Re("toggle",e),m=a;break;case"input":be(e,a),m=_e(e,a),Re("invalid",e);break;case"option":m=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},m=X({},a,{value:void 0}),Re("invalid",e);break;case"textarea":Xn(e,a),m=lt(e,a),Re("invalid",e);break;default:m=a}ui(i,m),z=m;for(y in z)if(z.hasOwnProperty(y)){var H=z[y];y==="style"?_o(e,H):y==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&So(e,H)):y==="children"?typeof H=="string"?(i!=="textarea"||H!=="")&&st(e,H):typeof H=="number"&&st(e,""+H):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(s.hasOwnProperty(y)?H!=null&&y==="onScroll"&&Re("scroll",e):H!=null&&E(e,y,H,k))}switch(i){case"input":xe(e),an(e,a,!1);break;case"textarea":xe(e),fn(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Z(a.value));break;case"select":e.multiple=!!a.multiple,y=a.value,y!=null?tn(e,!!a.multiple,y,!1):a.defaultValue!=null&&tn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof m.onClick=="function"&&(e.onclick=Jo)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ln(t),null;case 6:if(e&&t.stateNode!=null)oh(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(i=ir($i.current),ir(et.current),ll(t)){if(a=t.stateNode,i=t.memoizedProps,a[Jn]=t,(y=a.nodeValue!==i)&&(e=kn,e!==null))switch(e.tag){case 3:Zo(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(a.nodeValue,i,(e.mode&1)!==0)}y&&(t.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Jn]=t,t.stateNode=a}return ln(t),null;case 13:if(ze(He),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Cn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)af(),jr(),t.flags|=98560,y=!1;else if(y=ll(t),a!==null&&a.dehydrated!==null){if(e===null){if(!y)throw Error(o(318));if(y=t.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(o(317));y[Jn]=t}else jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ln(t),y=!1}else Fn!==null&&(su(Fn),Fn=null),y=!0;if(!y)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(He.current&1)!==0?Ge===0&&(Ge=3):cu())),t.updateQueue!==null&&(t.flags|=4),ln(t),null);case 4:return Vr(),Xa(e,t),e===null&&Ri(t.stateNode.containerInfo),ln(t),null;case 10:return ka(t.type._context),ln(t),null;case 17:return pn(t.type)&&nl(),ln(t),null;case 19:if(ze(He),y=t.memoizedState,y===null)return ln(t),null;if(a=(t.flags&128)!==0,k=y.rendering,k===null)if(a)Ui(y,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(k=fl(e),k!==null){for(t.flags|=128,Ui(y,!1),a=k.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=i,i=t.child;i!==null;)y=i,e=a,y.flags&=14680066,k=y.alternate,k===null?(y.childLanes=0,y.lanes=e,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=k.childLanes,y.lanes=k.lanes,y.child=k.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=k.memoizedProps,y.memoizedState=k.memoizedState,y.updateQueue=k.updateQueue,y.type=k.type,e=k.dependencies,y.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ie(He,He.current&1|2),t.child}e=e.sibling}y.tail!==null&&je()>qr&&(t.flags|=128,a=!0,Ui(y,!1),t.lanes=4194304)}else{if(!a)if(e=fl(k),e!==null){if(t.flags|=128,a=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Ui(y,!0),y.tail===null&&y.tailMode==="hidden"&&!k.alternate&&!De)return ln(t),null}else 2*je()-y.renderingStartTime>qr&&i!==1073741824&&(t.flags|=128,a=!0,Ui(y,!1),t.lanes=4194304);y.isBackwards?(k.sibling=t.child,t.child=k):(i=y.last,i!==null?i.sibling=k:t.child=k,y.last=k)}return y.tail!==null?(t=y.tail,y.rendering=t,y.tail=t.sibling,y.renderingStartTime=je(),t.sibling=null,i=He.current,Ie(He,a?i&1|2:i&1),t):(ln(t),null);case 22:case 23:return uu(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(bn&1073741824)!==0&&(ln(t),t.subtreeFlags&6&&(t.flags|=8192)):ln(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Jy(e,t){switch(va(t),t.tag){case 1:return pn(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),ze(hn),ze(rn),La(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ma(t),null;case 13:if(ze(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ze(He),null;case 4:return Vr(),null;case 10:return ka(t.type._context),null;case 22:case 23:return uu(),null;case 24:return null;default:return null}}var Sl=!1,sn=!1,e1=typeof WeakSet=="function"?WeakSet:Set,me=null;function Qr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){Be(e,t,a)}else i.current=null}function Ka(e,t,i){try{i()}catch(a){Be(e,t,a)}}var lh=!1;function n1(e,t){if(ua=$o,e=Od(),na(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var m=a.anchorOffset,y=a.focusNode;a=a.focusOffset;try{i.nodeType,y.nodeType}catch{i=null;break e}var k=0,z=-1,H=-1,te=0,ae=0,ue=e,se=null;n:for(;;){for(var pe;ue!==i||m!==0&&ue.nodeType!==3||(z=k+m),ue!==y||a!==0&&ue.nodeType!==3||(H=k+a),ue.nodeType===3&&(k+=ue.nodeValue.length),(pe=ue.firstChild)!==null;)se=ue,ue=pe;for(;;){if(ue===e)break n;if(se===i&&++te===m&&(z=k),se===y&&++ae===a&&(H=k),(pe=ue.nextSibling)!==null)break;ue=se,se=ue.parentNode}ue=pe}i=z===-1||H===-1?null:{start:z,end:H}}else i=null}i=i||{start:0,end:0}}else i=null;for(ca={focusedElem:e,selectionRange:i},$o=!1,me=t;me!==null;)if(t=me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,me=e;else for(;me!==null;){t=me;try{var ge=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,Ve=ge.memoizedState,ee=t.stateNode,q=ee.getSnapshotBeforeUpdate(t.elementType===t.type?ye:jn(t.type,ye),Ve);ee.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ne=t.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(ce){Be(t,t.return,ce)}if(e=t.sibling,e!==null){e.return=t.return,me=e;break}me=t.return}return ge=lh,lh=!1,ge}function qi(e,t,i){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var m=a=a.next;do{if((m.tag&e)===e){var y=m.destroy;m.destroy=void 0,y!==void 0&&Ka(t,i,y)}m=m.next}while(m!==a)}}function El(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==t)}}function Za(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function sh(e){var t=e.alternate;t!==null&&(e.alternate=null,sh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jn],delete t[Di],delete t[pa],delete t[Oy],delete t[Fy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ah(e){return e.tag===5||e.tag===3||e.tag===4}function uh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ja(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Jo));else if(a!==4&&(e=e.child,e!==null))for(Ja(e,t,i),e=e.sibling;e!==null;)Ja(e,t,i),e=e.sibling}function eu(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(eu(e,t,i),e=e.sibling;e!==null;)eu(e,t,i),e=e.sibling}var Je=null,Hn=!1;function zt(e,t,i){for(i=i.child;i!==null;)ch(e,t,i),i=i.sibling}function ch(e,t,i){if(Sn&&typeof Sn.onCommitFiberUnmount=="function")try{Sn.onCommitFiberUnmount(_r,i)}catch{}switch(i.tag){case 5:sn||Qr(i,t);case 6:var a=Je,m=Hn;Je=null,zt(e,t,i),Je=a,Hn=m,Je!==null&&(Hn?(e=Je,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Je.removeChild(i.stateNode));break;case 18:Je!==null&&(Hn?(e=Je,i=i.stateNode,e.nodeType===8?ha(e.parentNode,i):e.nodeType===1&&ha(e,i),Ci(e)):ha(Je,i.stateNode));break;case 4:a=Je,m=Hn,Je=i.stateNode.containerInfo,Hn=!0,zt(e,t,i),Je=a,Hn=m;break;case 0:case 11:case 14:case 15:if(!sn&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){m=a=a.next;do{var y=m,k=y.destroy;y=y.tag,k!==void 0&&((y&2)!==0||(y&4)!==0)&&Ka(i,t,k),m=m.next}while(m!==a)}zt(e,t,i);break;case 1:if(!sn&&(Qr(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(z){Be(i,t,z)}zt(e,t,i);break;case 21:zt(e,t,i);break;case 22:i.mode&1?(sn=(a=sn)||i.memoizedState!==null,zt(e,t,i),sn=a):zt(e,t,i);break;default:zt(e,t,i)}}function dh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new e1),t.forEach(function(a){var m=c1.bind(null,e,a);i.has(a)||(i.add(a),a.then(m,m))})}}function $n(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var m=i[a];try{var y=e,k=t,z=k;e:for(;z!==null;){switch(z.tag){case 5:Je=z.stateNode,Hn=!1;break e;case 3:Je=z.stateNode.containerInfo,Hn=!0;break e;case 4:Je=z.stateNode.containerInfo,Hn=!0;break e}z=z.return}if(Je===null)throw Error(o(160));ch(y,k,m),Je=null,Hn=!1;var H=m.alternate;H!==null&&(H.return=null),m.return=null}catch(te){Be(m,t,te)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fh(t,e),t=t.sibling}function fh(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($n(t,e),tt(e),a&4){try{qi(3,e,e.return),El(3,e)}catch(ye){Be(e,e.return,ye)}try{qi(5,e,e.return)}catch(ye){Be(e,e.return,ye)}}break;case 1:$n(t,e),tt(e),a&512&&i!==null&&Qr(i,i.return);break;case 5:if($n(t,e),tt(e),a&512&&i!==null&&Qr(i,i.return),e.flags&32){var m=e.stateNode;try{st(m,"")}catch(ye){Be(e,e.return,ye)}}if(a&4&&(m=e.stateNode,m!=null)){var y=e.memoizedProps,k=i!==null?i.memoizedProps:y,z=e.type,H=e.updateQueue;if(e.updateQueue=null,H!==null)try{z==="input"&&y.type==="radio"&&y.name!=null&&Ne(m,y),ci(z,k);var te=ci(z,y);for(k=0;k<H.length;k+=2){var ae=H[k],ue=H[k+1];ae==="style"?_o(m,ue):ae==="dangerouslySetInnerHTML"?So(m,ue):ae==="children"?st(m,ue):E(m,ae,ue,te)}switch(z){case"input":Ae(m,y);break;case"textarea":Kn(m,y);break;case"select":var se=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var pe=y.value;pe!=null?tn(m,!!y.multiple,pe,!1):se!==!!y.multiple&&(y.defaultValue!=null?tn(m,!!y.multiple,y.defaultValue,!0):tn(m,!!y.multiple,y.multiple?[]:"",!1))}m[Di]=y}catch(ye){Be(e,e.return,ye)}}break;case 6:if($n(t,e),tt(e),a&4){if(e.stateNode===null)throw Error(o(162));m=e.stateNode,y=e.memoizedProps;try{m.nodeValue=y}catch(ye){Be(e,e.return,ye)}}break;case 3:if($n(t,e),tt(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(ye){Be(e,e.return,ye)}break;case 4:$n(t,e),tt(e);break;case 13:$n(t,e),tt(e),m=e.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(ru=je())),a&4&&dh(e);break;case 22:if(ae=i!==null&&i.memoizedState!==null,e.mode&1?(sn=(te=sn)||ae,$n(t,e),sn=te):$n(t,e),tt(e),a&8192){if(te=e.memoizedState!==null,(e.stateNode.isHidden=te)&&!ae&&(e.mode&1)!==0)for(me=e,ae=e.child;ae!==null;){for(ue=me=ae;me!==null;){switch(se=me,pe=se.child,se.tag){case 0:case 11:case 14:case 15:qi(4,se,se.return);break;case 1:Qr(se,se.return);var ge=se.stateNode;if(typeof ge.componentWillUnmount=="function"){a=se,i=se.return;try{t=a,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ye){Be(a,i,ye)}}break;case 5:Qr(se,se.return);break;case 22:if(se.memoizedState!==null){mh(ue);continue}}pe!==null?(pe.return=se,me=pe):mh(ue)}ae=ae.sibling}e:for(ae=null,ue=e;;){if(ue.tag===5){if(ae===null){ae=ue;try{m=ue.stateNode,te?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(z=ue.stateNode,H=ue.memoizedProps.style,k=H!=null&&H.hasOwnProperty("display")?H.display:null,z.style.display=Eo("display",k))}catch(ye){Be(e,e.return,ye)}}}else if(ue.tag===6){if(ae===null)try{ue.stateNode.nodeValue=te?"":ue.memoizedProps}catch(ye){Be(e,e.return,ye)}}else if((ue.tag!==22&&ue.tag!==23||ue.memoizedState===null||ue===e)&&ue.child!==null){ue.child.return=ue,ue=ue.child;continue}if(ue===e)break e;for(;ue.sibling===null;){if(ue.return===null||ue.return===e)break e;ae===ue&&(ae=null),ue=ue.return}ae===ue&&(ae=null),ue.sibling.return=ue.return,ue=ue.sibling}}break;case 19:$n(t,e),tt(e),a&4&&dh(e);break;case 21:break;default:$n(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(ah(i)){var a=i;break e}i=i.return}throw Error(o(160))}switch(a.tag){case 5:var m=a.stateNode;a.flags&32&&(st(m,""),a.flags&=-33);var y=uh(e);eu(e,y,m);break;case 3:case 4:var k=a.stateNode.containerInfo,z=uh(e);Ja(e,z,k);break;default:throw Error(o(161))}}catch(H){Be(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t1(e,t,i){me=e,hh(e)}function hh(e,t,i){for(var a=(e.mode&1)!==0;me!==null;){var m=me,y=m.child;if(m.tag===22&&a){var k=m.memoizedState!==null||Sl;if(!k){var z=m.alternate,H=z!==null&&z.memoizedState!==null||sn;z=Sl;var te=sn;if(Sl=k,(sn=H)&&!te)for(me=m;me!==null;)k=me,H=k.child,k.tag===22&&k.memoizedState!==null?gh(m):H!==null?(H.return=k,me=H):gh(m);for(;y!==null;)me=y,hh(y),y=y.sibling;me=m,Sl=z,sn=te}ph(e)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,me=y):ph(e)}}function ph(e){for(;me!==null;){var t=me;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:sn||El(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!sn)if(i===null)a.componentDidMount();else{var m=t.elementType===t.type?i.memoizedProps:jn(t.type,i.memoizedProps);a.componentDidUpdate(m,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var y=t.updateQueue;y!==null&&mf(t,y,a);break;case 3:var k=t.updateQueue;if(k!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}mf(t,k,i)}break;case 5:var z=t.stateNode;if(i===null&&t.flags&4){i=z;var H=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&i.focus();break;case"img":H.src&&(i.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var te=t.alternate;if(te!==null){var ae=te.memoizedState;if(ae!==null){var ue=ae.dehydrated;ue!==null&&Ci(ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}sn||t.flags&512&&Za(t)}catch(se){Be(t,t.return,se)}}if(t===e){me=null;break}if(i=t.sibling,i!==null){i.return=t.return,me=i;break}me=t.return}}function mh(e){for(;me!==null;){var t=me;if(t===e){me=null;break}var i=t.sibling;if(i!==null){i.return=t.return,me=i;break}me=t.return}}function gh(e){for(;me!==null;){var t=me;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{El(4,t)}catch(H){Be(t,i,H)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var m=t.return;try{a.componentDidMount()}catch(H){Be(t,m,H)}}var y=t.return;try{Za(t)}catch(H){Be(t,y,H)}break;case 5:var k=t.return;try{Za(t)}catch(H){Be(t,k,H)}}}catch(H){Be(t,t.return,H)}if(t===e){me=null;break}var z=t.sibling;if(z!==null){z.return=t.return,me=z;break}me=t.return}}var r1=Math.ceil,_l=b.ReactCurrentDispatcher,nu=b.ReactCurrentOwner,zn=b.ReactCurrentBatchConfig,Me=0,Ke=null,We=null,en=0,bn=0,Ur=Tt(0),Ge=0,Yi=null,lr=0,kl=0,tu=0,Gi=null,gn=null,ru=0,qr=1/0,gt=null,Cl=!1,iu=null,Dt=null,bl=!1,Ot=null,Nl=0,Xi=0,ou=null,Pl=-1,Ml=0;function cn(){return(Me&6)!==0?je():Pl!==-1?Pl:Pl=je()}function Ft(e){return(e.mode&1)===0?1:(Me&2)!==0&&en!==0?en&-en:Hy.transition!==null?(Ml===0&&(Ml=Fo()),Ml):(e=Le,e!==0||(e=window.event,e=e===void 0?16:yd(e.type)),e)}function Bn(e,t,i,a){if(50<Xi)throw Xi=0,ou=null,Error(o(185));Zt(e,i,a),((Me&2)===0||e!==Ke)&&(e===Ke&&((Me&2)===0&&(kl|=i),Ge===4&&jt(e,en)),yn(e,a),i===1&&Me===0&&(t.mode&1)===0&&(qr=je()+500,rl&&It()))}function yn(e,t){var i=e.callbackNode;Oo(e,t);var a=at(e,e===Ke?en:0);if(a===0)i!==null&&Ao(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(i!=null&&Ao(i),t===1)e.tag===0?jy(vh.bind(null,e)):tf(vh.bind(null,e)),zy(function(){(Me&6)===0&&It()}),i=null;else{switch(ud(a)){case 1:i=xi;break;case 4:i=zo;break;case 16:i=Er;break;case 536870912:i=Do;break;default:i=Er}i=bh(i,yh.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function yh(e,t){if(Pl=-1,Ml=0,(Me&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Yr()&&e.callbackNode!==i)return null;var a=at(e,e===Ke?en:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Tl(e,a);else{t=a;var m=Me;Me|=2;var y=wh();(Ke!==e||en!==t)&&(gt=null,qr=je()+500,ar(e,t));do try{l1();break}catch(z){xh(e,z)}while(!0);_a(),_l.current=y,Me=m,We!==null?t=0:(Ke=null,en=0,t=Ge)}if(t!==0){if(t===2&&(m=wi(e),m!==0&&(a=m,t=lu(e,m))),t===1)throw i=Yi,ar(e,0),jt(e,a),yn(e,je()),i;if(t===6)jt(e,a);else{if(m=e.current.alternate,(a&30)===0&&!i1(m)&&(t=Tl(e,a),t===2&&(y=wi(e),y!==0&&(a=y,t=lu(e,y))),t===1))throw i=Yi,ar(e,0),jt(e,a),yn(e,je()),i;switch(e.finishedWork=m,e.finishedLanes=a,t){case 0:case 1:throw Error(o(345));case 2:ur(e,gn,gt);break;case 3:if(jt(e,a),(a&130023424)===a&&(t=ru+500-je(),10<t)){if(at(e,0)!==0)break;if(m=e.suspendedLanes,(m&a)!==a){cn(),e.pingedLanes|=e.suspendedLanes&m;break}e.timeoutHandle=fa(ur.bind(null,e,gn,gt),t);break}ur(e,gn,gt);break;case 4:if(jt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,m=-1;0<a;){var k=31-En(a);y=1<<k,k=t[k],k>m&&(m=k),a&=~y}if(a=m,a=je()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*r1(a/1960))-a,10<a){e.timeoutHandle=fa(ur.bind(null,e,gn,gt),a);break}ur(e,gn,gt);break;case 5:ur(e,gn,gt);break;default:throw Error(o(329))}}}return yn(e,je()),e.callbackNode===i?yh.bind(null,e):null}function lu(e,t){var i=Gi;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=gn,gn=i,t!==null&&su(t)),e}function su(e){gn===null?gn=e:gn.push.apply(gn,e)}function i1(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var m=i[a],y=m.getSnapshot;m=m.value;try{if(!On(y(),m))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~tu,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-En(t),a=1<<i;e[i]=-1,t&=~a}}function vh(e){if((Me&6)!==0)throw Error(o(327));Yr();var t=at(e,0);if((t&1)===0)return yn(e,je()),null;var i=Tl(e,t);if(e.tag!==0&&i===2){var a=wi(e);a!==0&&(t=a,i=lu(e,a))}if(i===1)throw i=Yi,ar(e,0),jt(e,t),yn(e,je()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ur(e,gn,gt),yn(e,je()),null}function au(e,t){var i=Me;Me|=1;try{return e(t)}finally{Me=i,Me===0&&(qr=je()+500,rl&&It())}}function sr(e){Ot!==null&&Ot.tag===0&&(Me&6)===0&&Yr();var t=Me;Me|=1;var i=zn.transition,a=Le;try{if(zn.transition=null,Le=1,e)return e()}finally{Le=a,zn.transition=i,Me=t,(Me&6)===0&&It()}}function uu(){bn=Ur.current,ze(Ur)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Ry(i)),We!==null)for(i=We.return;i!==null;){var a=i;switch(va(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&nl();break;case 3:Vr(),ze(hn),ze(rn),La();break;case 5:Ma(a);break;case 4:Vr();break;case 13:ze(He);break;case 19:ze(He);break;case 10:ka(a.type._context);break;case 22:case 23:uu()}i=i.return}if(Ke=e,We=e=Ht(e.current,null),en=bn=t,Ge=0,Yi=null,tu=kl=lr=0,gn=Gi=null,rr!==null){for(t=0;t<rr.length;t++)if(i=rr[t],a=i.interleaved,a!==null){i.interleaved=null;var m=a.next,y=i.pending;if(y!==null){var k=y.next;y.next=m,a.next=k}i.pending=a}rr=null}return e}function xh(e,t){do{var i=We;try{if(_a(),hl.current=yl,pl){for(var a=$e.memoizedState;a!==null;){var m=a.queue;m!==null&&(m.pending=null),a=a.next}pl=!1}if(or=0,Xe=Ye=$e=null,Bi=!1,Vi=0,nu.current=null,i===null||i.return===null){Ge=1,Yi=t,We=null;break}e:{var y=e,k=i.return,z=i,H=t;if(t=en,z.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var te=H,ae=z,ue=ae.tag;if((ae.mode&1)===0&&(ue===0||ue===11||ue===15)){var se=ae.alternate;se?(ae.updateQueue=se.updateQueue,ae.memoizedState=se.memoizedState,ae.lanes=se.lanes):(ae.updateQueue=null,ae.memoizedState=null)}var pe=Wf(k);if(pe!==null){pe.flags&=-257,Qf(pe,k,z,y,t),pe.mode&1&&Vf(y,te,t),t=pe,H=te;var ge=t.updateQueue;if(ge===null){var ye=new Set;ye.add(H),t.updateQueue=ye}else ge.add(H);break e}else{if((t&1)===0){Vf(y,te,t),cu();break e}H=Error(o(426))}}else if(De&&z.mode&1){var Ve=Wf(k);if(Ve!==null){(Ve.flags&65536)===0&&(Ve.flags|=256),Qf(Ve,k,z,y,t),Sa(Wr(H,z));break e}}y=H=Wr(H,z),Ge!==4&&(Ge=2),Gi===null?Gi=[y]:Gi.push(y),y=k;do{switch(y.tag){case 3:y.flags|=65536,t&=-t,y.lanes|=t;var ee=$f(y,H,t);pf(y,ee);break e;case 1:z=H;var q=y.type,ne=y.stateNode;if((y.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Dt===null||!Dt.has(ne)))){y.flags|=65536,t&=-t,y.lanes|=t;var ce=Bf(y,z,t);pf(y,ce);break e}}y=y.return}while(y!==null)}Eh(i)}catch(ve){t=ve,We===i&&i!==null&&(We=i=i.return);continue}break}while(!0)}function wh(){var e=_l.current;return _l.current=yl,e===null?yl:e}function cu(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ke===null||(lr&268435455)===0&&(kl&268435455)===0||jt(Ke,en)}function Tl(e,t){var i=Me;Me|=2;var a=wh();(Ke!==e||en!==t)&&(gt=null,ar(e,t));do try{o1();break}catch(m){xh(e,m)}while(!0);if(_a(),Me=i,_l.current=a,We!==null)throw Error(o(261));return Ke=null,en=0,Ge}function o1(){for(;We!==null;)Sh(We)}function l1(){for(;We!==null&&!As();)Sh(We)}function Sh(e){var t=Ch(e.alternate,e,bn);e.memoizedProps=e.pendingProps,t===null?Eh(e):We=t,nu.current=null}function Eh(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=Zy(i,t,bn),i!==null){We=i;return}}else{if(i=Jy(i,t),i!==null){i.flags&=32767,We=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ge===0&&(Ge=5)}function ur(e,t,i){var a=Le,m=zn.transition;try{zn.transition=null,Le=1,s1(e,t,i,a)}finally{zn.transition=m,Le=a}return null}function s1(e,t,i,a){do Yr();while(Ot!==null);if((Me&6)!==0)throw Error(o(327));i=e.finishedWork;var m=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var y=i.lanes|i.childLanes;if($s(e,y),e===Ke&&(We=Ke=null,en=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||bl||(bl=!0,bh(Er,function(){return Yr(),null})),y=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||y){y=zn.transition,zn.transition=null;var k=Le;Le=1;var z=Me;Me|=4,nu.current=null,n1(e,i),fh(i,e),Ny(ca),$o=!!ua,ca=ua=null,e.current=i,t1(i),Ro(),Me=z,Le=k,zn.transition=y}else e.current=i;if(bl&&(bl=!1,Ot=e,Nl=m),y=e.pendingLanes,y===0&&(Dt=null),Ds(i.stateNode),yn(e,je()),t!==null)for(a=e.onRecoverableError,i=0;i<t.length;i++)m=t[i],a(m.value,{componentStack:m.stack,digest:m.digest});if(Cl)throw Cl=!1,e=iu,iu=null,e;return(Nl&1)!==0&&e.tag!==0&&Yr(),y=e.pendingLanes,(y&1)!==0?e===ou?Xi++:(Xi=0,ou=e):Xi=0,It(),null}function Yr(){if(Ot!==null){var e=ud(Nl),t=zn.transition,i=Le;try{if(zn.transition=null,Le=16>e?16:e,Ot===null)var a=!1;else{if(e=Ot,Ot=null,Nl=0,(Me&6)!==0)throw Error(o(331));var m=Me;for(Me|=4,me=e.current;me!==null;){var y=me,k=y.child;if((me.flags&16)!==0){var z=y.deletions;if(z!==null){for(var H=0;H<z.length;H++){var te=z[H];for(me=te;me!==null;){var ae=me;switch(ae.tag){case 0:case 11:case 15:qi(8,ae,y)}var ue=ae.child;if(ue!==null)ue.return=ae,me=ue;else for(;me!==null;){ae=me;var se=ae.sibling,pe=ae.return;if(sh(ae),ae===te){me=null;break}if(se!==null){se.return=pe,me=se;break}me=pe}}}var ge=y.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var Ve=ye.sibling;ye.sibling=null,ye=Ve}while(ye!==null)}}me=y}}if((y.subtreeFlags&2064)!==0&&k!==null)k.return=y,me=k;else e:for(;me!==null;){if(y=me,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:qi(9,y,y.return)}var ee=y.sibling;if(ee!==null){ee.return=y.return,me=ee;break e}me=y.return}}var q=e.current;for(me=q;me!==null;){k=me;var ne=k.child;if((k.subtreeFlags&2064)!==0&&ne!==null)ne.return=k,me=ne;else e:for(k=q;me!==null;){if(z=me,(z.flags&2048)!==0)try{switch(z.tag){case 0:case 11:case 15:El(9,z)}}catch(ve){Be(z,z.return,ve)}if(z===k){me=null;break e}var ce=z.sibling;if(ce!==null){ce.return=z.return,me=ce;break e}me=z.return}}if(Me=m,It(),Sn&&typeof Sn.onPostCommitFiberRoot=="function")try{Sn.onPostCommitFiberRoot(_r,e)}catch{}a=!0}return a}finally{Le=i,zn.transition=t}}return!1}function _h(e,t,i){t=Wr(i,t),t=$f(e,t,1),e=Rt(e,t,1),t=cn(),e!==null&&(Zt(e,1,t),yn(e,t))}function Be(e,t,i){if(e.tag===3)_h(e,e,i);else for(;t!==null;){if(t.tag===3){_h(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Dt===null||!Dt.has(a))){e=Wr(i,e),e=Bf(t,e,1),t=Rt(t,e,1),e=cn(),t!==null&&(Zt(t,1,e),yn(t,e));break}}t=t.return}}function a1(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),t=cn(),e.pingedLanes|=e.suspendedLanes&i,Ke===e&&(en&i)===i&&(Ge===4||Ge===3&&(en&130023424)===en&&500>je()-ru?ar(e,0):tu|=i),yn(e,t)}function kh(e,t){t===0&&((e.mode&1)===0?t=1:(t=Cr,Cr<<=1,(Cr&130023424)===0&&(Cr=4194304)));var i=cn();e=ht(e,t),e!==null&&(Zt(e,t,i),yn(e,i))}function u1(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),kh(e,i)}function c1(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,m=e.memoizedState;m!==null&&(i=m.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(t),kh(e,i)}var Ch;Ch=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||hn.current)mn=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return mn=!1,Ky(e,t,i);mn=(e.flags&131072)!==0}else mn=!1,De&&(t.flags&1048576)!==0&&rf(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;wl(e,t),e=t.pendingProps;var m=Dr(t,rn.current);Br(t,i),m=Ra(null,t,a,e,m,i);var y=za();return t.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pn(a)?(y=!0,tl(t)):y=!1,t.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Na(t),m.updater=vl,t.stateNode=m,m._reactInternals=t,$a(t,a,e,i),t=Qa(null,t,a,!0,y,i)):(t.tag=0,De&&y&&ya(t),un(null,t,m,i),t=t.child),t;case 16:a=t.elementType;e:{switch(wl(e,t),e=t.pendingProps,m=a._init,a=m(a._payload),t.type=a,m=t.tag=f1(a),e=jn(a,e),m){case 0:t=Wa(null,t,a,e,i);break e;case 1:t=Kf(null,t,a,e,i);break e;case 11:t=Uf(null,t,a,e,i);break e;case 14:t=qf(null,t,a,jn(a.type,e),i);break e}throw Error(o(306,a,""))}return t;case 0:return a=t.type,m=t.pendingProps,m=t.elementType===a?m:jn(a,m),Wa(e,t,a,m,i);case 1:return a=t.type,m=t.pendingProps,m=t.elementType===a?m:jn(a,m),Kf(e,t,a,m,i);case 3:e:{if(Zf(t),e===null)throw Error(o(387));a=t.pendingProps,y=t.memoizedState,m=y.element,hf(e,t),dl(t,a,null,i);var k=t.memoizedState;if(a=k.element,y.isDehydrated)if(y={element:a,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},t.updateQueue.baseState=y,t.memoizedState=y,t.flags&256){m=Wr(Error(o(423)),t),t=Jf(e,t,a,i,m);break e}else if(a!==m){m=Wr(Error(o(424)),t),t=Jf(e,t,a,i,m);break e}else for(Cn=Mt(t.stateNode.containerInfo.firstChild),kn=t,De=!0,Fn=null,i=df(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(jr(),a===m){t=mt(e,t,i);break e}un(e,t,a,i)}t=t.child}return t;case 5:return gf(t),e===null&&wa(t),a=t.type,m=t.pendingProps,y=e!==null?e.memoizedProps:null,k=m.children,da(a,m)?k=null:y!==null&&da(a,y)&&(t.flags|=32),Xf(e,t),un(e,t,k,i),t.child;case 6:return e===null&&wa(t),null;case 13:return eh(e,t,i);case 4:return Pa(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Hr(t,null,a,i):un(e,t,a,i),t.child;case 11:return a=t.type,m=t.pendingProps,m=t.elementType===a?m:jn(a,m),Uf(e,t,a,m,i);case 7:return un(e,t,t.pendingProps,i),t.child;case 8:return un(e,t,t.pendingProps.children,i),t.child;case 12:return un(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(a=t.type._context,m=t.pendingProps,y=t.memoizedProps,k=m.value,Ie(al,a._currentValue),a._currentValue=k,y!==null)if(On(y.value,k)){if(y.children===m.children&&!hn.current){t=mt(e,t,i);break e}}else for(y=t.child,y!==null&&(y.return=t);y!==null;){var z=y.dependencies;if(z!==null){k=y.child;for(var H=z.firstContext;H!==null;){if(H.context===a){if(y.tag===1){H=pt(-1,i&-i),H.tag=2;var te=y.updateQueue;if(te!==null){te=te.shared;var ae=te.pending;ae===null?H.next=H:(H.next=ae.next,ae.next=H),te.pending=H}}y.lanes|=i,H=y.alternate,H!==null&&(H.lanes|=i),Ca(y.return,i,t),z.lanes|=i;break}H=H.next}}else if(y.tag===10)k=y.type===t.type?null:y.child;else if(y.tag===18){if(k=y.return,k===null)throw Error(o(341));k.lanes|=i,z=k.alternate,z!==null&&(z.lanes|=i),Ca(k,i,t),k=y.sibling}else k=y.child;if(k!==null)k.return=y;else for(k=y;k!==null;){if(k===t){k=null;break}if(y=k.sibling,y!==null){y.return=k.return,k=y;break}k=k.return}y=k}un(e,t,m.children,i),t=t.child}return t;case 9:return m=t.type,a=t.pendingProps.children,Br(t,i),m=An(m),a=a(m),t.flags|=1,un(e,t,a,i),t.child;case 14:return a=t.type,m=jn(a,t.pendingProps),m=jn(a.type,m),qf(e,t,a,m,i);case 15:return Yf(e,t,t.type,t.pendingProps,i);case 17:return a=t.type,m=t.pendingProps,m=t.elementType===a?m:jn(a,m),wl(e,t),t.tag=1,pn(a)?(e=!0,tl(t)):e=!1,Br(t,i),jf(t,a,m),$a(t,a,m,i),Qa(null,t,a,!0,e,i);case 19:return th(e,t,i);case 22:return Gf(e,t,i)}throw Error(o(156,t.tag))};function bh(e,t){return Io(e,t)}function d1(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,t,i,a){return new d1(e,t,i,a)}function du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function f1(e){if(typeof e=="function")return du(e)?1:0;if(e!=null){if(e=e.$$typeof,e===D)return 11;if(e===Y)return 14}return 2}function Ht(e,t){var i=e.alternate;return i===null?(i=Dn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ll(e,t,i,a,m,y){var k=2;if(a=e,typeof e=="function")du(e)&&(k=1);else if(typeof e=="string")k=5;else e:switch(e){case F:return cr(i.children,m,y,t);case P:k=8,m|=8;break;case A:return e=Dn(12,i,t,m|2),e.elementType=A,e.lanes=y,e;case J:return e=Dn(13,i,t,m),e.elementType=J,e.lanes=y,e;case T:return e=Dn(19,i,t,m),e.elementType=T,e.lanes=y,e;case G:return Il(i,m,y,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:k=10;break e;case I:k=9;break e;case D:k=11;break e;case Y:k=14;break e;case U:k=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Dn(k,i,t,m),t.elementType=e,t.type=a,t.lanes=y,t}function cr(e,t,i,a){return e=Dn(7,e,a,t),e.lanes=i,e}function Il(e,t,i,a){return e=Dn(22,e,a,t),e.elementType=G,e.lanes=i,e.stateNode={isHidden:!1},e}function fu(e,t,i){return e=Dn(6,e,null,t),e.lanes=i,e}function hu(e,t,i){return t=Dn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function h1(e,t,i,a,m){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kt(0),this.expirationTimes=Kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.identifierPrefix=a,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function pu(e,t,i,a,m,y,k,z,H){return e=new h1(e,t,i,z,H),t===1?(t=1,y===!0&&(t|=8)):t=0,y=Dn(3,null,null,t),e.current=y,y.stateNode=e,y.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Na(y),e}function p1(e,t,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:a==null?null:""+a,children:e,containerInfo:t,implementation:i}}function Nh(e){if(!e)return Lt;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(pn(i))return ef(e,i,t)}return t}function Ph(e,t,i,a,m,y,k,z,H){return e=pu(i,a,!0,e,m,y,k,z,H),e.context=Nh(null),i=e.current,a=cn(),m=Ft(i),y=pt(a,m),y.callback=t??null,Rt(i,y,m),e.current.lanes=m,Zt(e,m,a),yn(e,a),e}function Al(e,t,i,a){var m=t.current,y=cn(),k=Ft(m);return i=Nh(i),t.context===null?t.context=i:t.pendingContext=i,t=pt(y,k),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Rt(m,t,k),e!==null&&(Bn(e,m,k,y),cl(e,m,k)),k}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function mu(e,t){Mh(e,t),(e=e.alternate)&&Mh(e,t)}function m1(){return null}var Th=typeof reportError=="function"?reportError:function(e){console.error(e)};function gu(e){this._internalRoot=e}zl.prototype.render=gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Al(e,t,null,null)},zl.prototype.unmount=gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){Al(null,e,null,null)}),t[ut]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=fd();e={blockedOn:null,target:e,priority:t};for(var i=0;i<bt.length&&t!==0&&t<bt[i].priority;i++);bt.splice(i,0,e),i===0&&md(e)}};function yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Lh(){}function g1(e,t,i,a,m){if(m){if(typeof a=="function"){var y=a;a=function(){var te=Rl(k);y.call(te)}}var k=Ph(t,a,e,0,null,!1,!1,"",Lh);return e._reactRootContainer=k,e[ut]=k.current,Ri(e.nodeType===8?e.parentNode:e),sr(),k}for(;m=e.lastChild;)e.removeChild(m);if(typeof a=="function"){var z=a;a=function(){var te=Rl(H);z.call(te)}}var H=pu(e,0,!1,null,null,!1,!1,"",Lh);return e._reactRootContainer=H,e[ut]=H.current,Ri(e.nodeType===8?e.parentNode:e),sr(function(){Al(t,H,i,a)}),H}function Ol(e,t,i,a,m){var y=i._reactRootContainer;if(y){var k=y;if(typeof m=="function"){var z=m;m=function(){var H=Rl(k);z.call(H)}}Al(t,k,e,m)}else k=g1(i,t,e,m,a);return Rl(k)}cd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Xt(t.pendingLanes);i!==0&&(br(t,i|1),yn(t,je()),(Me&6)===0&&(qr=je()+500,It()))}break;case 13:sr(function(){var a=ht(e,1);if(a!==null){var m=cn();Bn(a,e,1,m)}}),mu(e,1)}},Bs=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var i=cn();Bn(t,e,134217728,i)}mu(e,134217728)}},dd=function(e){if(e.tag===13){var t=Ft(e),i=ht(e,t);if(i!==null){var a=cn();Bn(i,e,t,a)}mu(e,t)}},fd=function(){return Le},hd=function(e,t){var i=Le;try{return Le=e,t()}finally{Le=i}},hi=function(e,t,i){switch(t){case"input":if(Ae(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var m=el(a);if(!m)throw Error(o(90));he(a),Ae(a,m)}}}break;case"textarea":Kn(e,i);break;case"select":t=i.value,t!=null&&tn(e,!!i.multiple,t,!1)}},No=au,Po=sr;var y1={usingClientEntryPoint:!1,Events:[Oi,Rr,el,Co,bo,au]},Ki={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},v1={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=To(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||m1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{_r=Fl.inject(v1),Sn=Fl}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=y1,vn.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yu(t))throw Error(o(200));return p1(e,t,null,i)},vn.createRoot=function(e,t){if(!yu(e))throw Error(o(299));var i=!1,a="",m=Th;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=pu(e,1,!1,null,null,i,!1,a,m),e[ut]=t.current,Ri(e.nodeType===8?e.parentNode:e),new gu(t)},vn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=To(t),e=e===null?null:e.stateNode,e},vn.flushSync=function(e){return sr(e)},vn.hydrate=function(e,t,i){if(!Dl(t))throw Error(o(200));return Ol(null,e,t,!0,i)},vn.hydrateRoot=function(e,t,i){if(!yu(e))throw Error(o(405));var a=i!=null&&i.hydratedSources||null,m=!1,y="",k=Th;if(i!=null&&(i.unstable_strictMode===!0&&(m=!0),i.identifierPrefix!==void 0&&(y=i.identifierPrefix),i.onRecoverableError!==void 0&&(k=i.onRecoverableError)),t=Ph(t,null,e,1,i??null,m,!1,y,k),e[ut]=t.current,Ri(e),a)for(e=0;e<a.length;e++)i=a[e],m=i._getVersion,m=m(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,m]:t.mutableSourceEagerHydrationData.push(i,m);return new zl(t)},vn.render=function(e,t,i){if(!Dl(t))throw Error(o(200));return Ol(null,e,t,!1,i)},vn.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(o(40));return e._reactRootContainer?(sr(function(){Ol(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1},vn.unstable_batchedUpdates=au,vn.unstable_renderSubtreeIntoContainer=function(e,t,i,a){if(!Dl(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ol(e,t,i,!1,a)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var jh;function Um(){if(jh)return wu.exports;jh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),wu.exports=P1(),wu.exports}var Hh;function M1(){if(Hh)return jl;Hh=1;var n=Um();return jl.createRoot=n.createRoot,jl.hydrateRoot=n.hydrateRoot,jl}var T1=M1();function qe(n){if(typeof n=="string"||typeof n=="number")return""+n;let r="";if(Array.isArray(n))for(let o=0,l;o<n.length;o++)(l=qe(n[o]))!==""&&(r+=(r&&" ")+l);else for(let o in n)n[o]&&(r+=(r&&" ")+o);return r}var L1={value:()=>{}};function hs(){for(var n=0,r=arguments.length,o={},l;n<r;++n){if(!(l=arguments[n]+"")||l in o||/[\s.]/.test(l))throw new Error("illegal type: "+l);o[l]=[]}return new Xl(o)}function Xl(n){this._=n}function I1(n,r){return n.trim().split(/^|\s+/).map(function(o){var l="",s=o.indexOf(".");if(s>=0&&(l=o.slice(s+1),o=o.slice(0,s)),o&&!r.hasOwnProperty(o))throw new Error("unknown type: "+o);return{type:o,name:l}})}Xl.prototype=hs.prototype={constructor:Xl,on:function(n,r){var o=this._,l=I1(n+"",o),s,c=-1,u=l.length;if(arguments.length<2){for(;++c<u;)if((s=(n=l[c]).type)&&(s=A1(o[s],n.name)))return s;return}if(r!=null&&typeof r!="function")throw new Error("invalid callback: "+r);for(;++c<u;)if(s=(n=l[c]).type)o[s]=$h(o[s],n.name,r);else if(r==null)for(s in o)o[s]=$h(o[s],n.name,null);return this},copy:function(){var n={},r=this._;for(var o in r)n[o]=r[o].slice();return new Xl(n)},call:function(n,r){if((s=arguments.length-2)>0)for(var o=new Array(s),l=0,s,c;l<s;++l)o[l]=arguments[l+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(c=this._[n],l=0,s=c.length;l<s;++l)c[l].value.apply(r,o)},apply:function(n,r,o){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var l=this._[n],s=0,c=l.length;s<c;++s)l[s].value.apply(r,o)}};function A1(n,r){for(var o=0,l=n.length,s;o<l;++o)if((s=n[o]).name===r)return s.value}function $h(n,r,o){for(var l=0,s=n.length;l<s;++l)if(n[l].name===r){n[l]=L1,n=n.slice(0,l).concat(n.slice(l+1));break}return o!=null&&n.push({name:r,value:o}),n}var Mc="http://www.w3.org/1999/xhtml";const Bh={svg:"http://www.w3.org/2000/svg",xhtml:Mc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ps(n){var r=n+="",o=r.indexOf(":");return o>=0&&(r=n.slice(0,o))!=="xmlns"&&(n=n.slice(o+1)),Bh.hasOwnProperty(r)?{space:Bh[r],local:n}:n}function R1(n){return function(){var r=this.ownerDocument,o=this.namespaceURI;return o===Mc&&r.documentElement.namespaceURI===Mc?r.createElement(n):r.createElementNS(o,n)}}function z1(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function qm(n){var r=ps(n);return(r.local?z1:R1)(r)}function D1(){}function Wc(n){return n==null?D1:function(){return this.querySelector(n)}}function O1(n){typeof n!="function"&&(n=Wc(n));for(var r=this._groups,o=r.length,l=new Array(o),s=0;s<o;++s)for(var c=r[s],u=c.length,d=l[s]=new Array(u),f,p,g=0;g<u;++g)(f=c[g])&&(p=n.call(f,f.__data__,g,c))&&("__data__"in f&&(p.__data__=f.__data__),d[g]=p);return new Pn(l,this._parents)}function F1(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function j1(){return[]}function Ym(n){return n==null?j1:function(){return this.querySelectorAll(n)}}function H1(n){return function(){return F1(n.apply(this,arguments))}}function $1(n){typeof n=="function"?n=H1(n):n=Ym(n);for(var r=this._groups,o=r.length,l=[],s=[],c=0;c<o;++c)for(var u=r[c],d=u.length,f,p=0;p<d;++p)(f=u[p])&&(l.push(n.call(f,f.__data__,p,u)),s.push(f));return new Pn(l,s)}function Gm(n){return function(){return this.matches(n)}}function Xm(n){return function(r){return r.matches(n)}}var B1=Array.prototype.find;function V1(n){return function(){return B1.call(this.children,n)}}function W1(){return this.firstElementChild}function Q1(n){return this.select(n==null?W1:V1(typeof n=="function"?n:Xm(n)))}var U1=Array.prototype.filter;function q1(){return Array.from(this.children)}function Y1(n){return function(){return U1.call(this.children,n)}}function G1(n){return this.selectAll(n==null?q1:Y1(typeof n=="function"?n:Xm(n)))}function X1(n){typeof n!="function"&&(n=Gm(n));for(var r=this._groups,o=r.length,l=new Array(o),s=0;s<o;++s)for(var c=r[s],u=c.length,d=l[s]=[],f,p=0;p<u;++p)(f=c[p])&&n.call(f,f.__data__,p,c)&&d.push(f);return new Pn(l,this._parents)}function Km(n){return new Array(n.length)}function K1(){return new Pn(this._enter||this._groups.map(Km),this._parents)}function ns(n,r){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=r}ns.prototype={constructor:ns,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,r){return this._parent.insertBefore(n,r)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Z1(n){return function(){return n}}function J1(n,r,o,l,s,c){for(var u=0,d,f=r.length,p=c.length;u<p;++u)(d=r[u])?(d.__data__=c[u],l[u]=d):o[u]=new ns(n,c[u]);for(;u<f;++u)(d=r[u])&&(s[u]=d)}function ev(n,r,o,l,s,c,u){var d,f,p=new Map,g=r.length,h=c.length,v=new Array(g),x;for(d=0;d<g;++d)(f=r[d])&&(v[d]=x=u.call(f,f.__data__,d,r)+"",p.has(x)?s[d]=f:p.set(x,f));for(d=0;d<h;++d)x=u.call(n,c[d],d,c)+"",(f=p.get(x))?(l[d]=f,f.__data__=c[d],p.delete(x)):o[d]=new ns(n,c[d]);for(d=0;d<g;++d)(f=r[d])&&p.get(v[d])===f&&(s[d]=f)}function nv(n){return n.__data__}function tv(n,r){if(!arguments.length)return Array.from(this,nv);var o=r?ev:J1,l=this._parents,s=this._groups;typeof n!="function"&&(n=Z1(n));for(var c=s.length,u=new Array(c),d=new Array(c),f=new Array(c),p=0;p<c;++p){var g=l[p],h=s[p],v=h.length,x=rv(n.call(g,g&&g.__data__,p,l)),w=x.length,C=d[p]=new Array(w),S=u[p]=new Array(w),_=f[p]=new Array(v);o(g,h,C,S,_,x,r);for(var N=0,E=0,b,R;N<w;++N)if(b=C[N]){for(N>=E&&(E=N+1);!(R=S[E])&&++E<w;);b._next=R||null}}return u=new Pn(u,l),u._enter=d,u._exit=f,u}function rv(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function iv(){return new Pn(this._exit||this._groups.map(Km),this._parents)}function ov(n,r,o){var l=this.enter(),s=this,c=this.exit();return typeof n=="function"?(l=n(l),l&&(l=l.selection())):l=l.append(n+""),r!=null&&(s=r(s),s&&(s=s.selection())),o==null?c.remove():o(c),l&&s?l.merge(s).order():s}function lv(n){for(var r=n.selection?n.selection():n,o=this._groups,l=r._groups,s=o.length,c=l.length,u=Math.min(s,c),d=new Array(s),f=0;f<u;++f)for(var p=o[f],g=l[f],h=p.length,v=d[f]=new Array(h),x,w=0;w<h;++w)(x=p[w]||g[w])&&(v[w]=x);for(;f<s;++f)d[f]=o[f];return new Pn(d,this._parents)}function sv(){for(var n=this._groups,r=-1,o=n.length;++r<o;)for(var l=n[r],s=l.length-1,c=l[s],u;--s>=0;)(u=l[s])&&(c&&u.compareDocumentPosition(c)^4&&c.parentNode.insertBefore(u,c),c=u);return this}function av(n){n||(n=uv);function r(h,v){return h&&v?n(h.__data__,v.__data__):!h-!v}for(var o=this._groups,l=o.length,s=new Array(l),c=0;c<l;++c){for(var u=o[c],d=u.length,f=s[c]=new Array(d),p,g=0;g<d;++g)(p=u[g])&&(f[g]=p);f.sort(r)}return new Pn(s,this._parents).order()}function uv(n,r){return n<r?-1:n>r?1:n>=r?0:NaN}function cv(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function dv(){return Array.from(this)}function fv(){for(var n=this._groups,r=0,o=n.length;r<o;++r)for(var l=n[r],s=0,c=l.length;s<c;++s){var u=l[s];if(u)return u}return null}function hv(){let n=0;for(const r of this)++n;return n}function pv(){return!this.node()}function mv(n){for(var r=this._groups,o=0,l=r.length;o<l;++o)for(var s=r[o],c=0,u=s.length,d;c<u;++c)(d=s[c])&&n.call(d,d.__data__,c,s);return this}function gv(n){return function(){this.removeAttribute(n)}}function yv(n){return function(){this.removeAttributeNS(n.space,n.local)}}function vv(n,r){return function(){this.setAttribute(n,r)}}function xv(n,r){return function(){this.setAttributeNS(n.space,n.local,r)}}function wv(n,r){return function(){var o=r.apply(this,arguments);o==null?this.removeAttribute(n):this.setAttribute(n,o)}}function Sv(n,r){return function(){var o=r.apply(this,arguments);o==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,o)}}function Ev(n,r){var o=ps(n);if(arguments.length<2){var l=this.node();return o.local?l.getAttributeNS(o.space,o.local):l.getAttribute(o)}return this.each((r==null?o.local?yv:gv:typeof r=="function"?o.local?Sv:wv:o.local?xv:vv)(o,r))}function Zm(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function _v(n){return function(){this.style.removeProperty(n)}}function kv(n,r,o){return function(){this.style.setProperty(n,r,o)}}function Cv(n,r,o){return function(){var l=r.apply(this,arguments);l==null?this.style.removeProperty(n):this.style.setProperty(n,l,o)}}function bv(n,r,o){return arguments.length>1?this.each((r==null?_v:typeof r=="function"?Cv:kv)(n,r,o??"")):ei(this.node(),n)}function ei(n,r){return n.style.getPropertyValue(r)||Zm(n).getComputedStyle(n,null).getPropertyValue(r)}function Nv(n){return function(){delete this[n]}}function Pv(n,r){return function(){this[n]=r}}function Mv(n,r){return function(){var o=r.apply(this,arguments);o==null?delete this[n]:this[n]=o}}function Tv(n,r){return arguments.length>1?this.each((r==null?Nv:typeof r=="function"?Mv:Pv)(n,r)):this.node()[n]}function Jm(n){return n.trim().split(/^|\s+/)}function Qc(n){return n.classList||new e0(n)}function e0(n){this._node=n,this._names=Jm(n.getAttribute("class")||"")}e0.prototype={add:function(n){var r=this._names.indexOf(n);r<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var r=this._names.indexOf(n);r>=0&&(this._names.splice(r,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function n0(n,r){for(var o=Qc(n),l=-1,s=r.length;++l<s;)o.add(r[l])}function t0(n,r){for(var o=Qc(n),l=-1,s=r.length;++l<s;)o.remove(r[l])}function Lv(n){return function(){n0(this,n)}}function Iv(n){return function(){t0(this,n)}}function Av(n,r){return function(){(r.apply(this,arguments)?n0:t0)(this,n)}}function Rv(n,r){var o=Jm(n+"");if(arguments.length<2){for(var l=Qc(this.node()),s=-1,c=o.length;++s<c;)if(!l.contains(o[s]))return!1;return!0}return this.each((typeof r=="function"?Av:r?Lv:Iv)(o,r))}function zv(){this.textContent=""}function Dv(n){return function(){this.textContent=n}}function Ov(n){return function(){var r=n.apply(this,arguments);this.textContent=r??""}}function Fv(n){return arguments.length?this.each(n==null?zv:(typeof n=="function"?Ov:Dv)(n)):this.node().textContent}function jv(){this.innerHTML=""}function Hv(n){return function(){this.innerHTML=n}}function $v(n){return function(){var r=n.apply(this,arguments);this.innerHTML=r??""}}function Bv(n){return arguments.length?this.each(n==null?jv:(typeof n=="function"?$v:Hv)(n)):this.node().innerHTML}function Vv(){this.nextSibling&&this.parentNode.appendChild(this)}function Wv(){return this.each(Vv)}function Qv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Uv(){return this.each(Qv)}function qv(n){var r=typeof n=="function"?n:qm(n);return this.select(function(){return this.appendChild(r.apply(this,arguments))})}function Yv(){return null}function Gv(n,r){var o=typeof n=="function"?n:qm(n),l=r==null?Yv:typeof r=="function"?r:Wc(r);return this.select(function(){return this.insertBefore(o.apply(this,arguments),l.apply(this,arguments)||null)})}function Xv(){var n=this.parentNode;n&&n.removeChild(this)}function Kv(){return this.each(Xv)}function Zv(){var n=this.cloneNode(!1),r=this.parentNode;return r?r.insertBefore(n,this.nextSibling):n}function Jv(){var n=this.cloneNode(!0),r=this.parentNode;return r?r.insertBefore(n,this.nextSibling):n}function ex(n){return this.select(n?Jv:Zv)}function nx(n){return arguments.length?this.property("__data__",n):this.node().__data__}function tx(n){return function(r){n.call(this,r,this.__data__)}}function rx(n){return n.trim().split(/^|\s+/).map(function(r){var o="",l=r.indexOf(".");return l>=0&&(o=r.slice(l+1),r=r.slice(0,l)),{type:r,name:o}})}function ix(n){return function(){var r=this.__on;if(r){for(var o=0,l=-1,s=r.length,c;o<s;++o)c=r[o],(!n.type||c.type===n.type)&&c.name===n.name?this.removeEventListener(c.type,c.listener,c.options):r[++l]=c;++l?r.length=l:delete this.__on}}}function ox(n,r,o){return function(){var l=this.__on,s,c=tx(r);if(l){for(var u=0,d=l.length;u<d;++u)if((s=l[u]).type===n.type&&s.name===n.name){this.removeEventListener(s.type,s.listener,s.options),this.addEventListener(s.type,s.listener=c,s.options=o),s.value=r;return}}this.addEventListener(n.type,c,o),s={type:n.type,name:n.name,value:r,listener:c,options:o},l?l.push(s):this.__on=[s]}}function lx(n,r,o){var l=rx(n+""),s,c=l.length,u;if(arguments.length<2){var d=this.node().__on;if(d){for(var f=0,p=d.length,g;f<p;++f)for(s=0,g=d[f];s<c;++s)if((u=l[s]).type===g.type&&u.name===g.name)return g.value}return}for(d=r?ox:ix,s=0;s<c;++s)this.each(d(l[s],r,o));return this}function r0(n,r,o){var l=Zm(n),s=l.CustomEvent;typeof s=="function"?s=new s(r,o):(s=l.document.createEvent("Event"),o?(s.initEvent(r,o.bubbles,o.cancelable),s.detail=o.detail):s.initEvent(r,!1,!1)),n.dispatchEvent(s)}function sx(n,r){return function(){return r0(this,n,r)}}function ax(n,r){return function(){return r0(this,n,r.apply(this,arguments))}}function ux(n,r){return this.each((typeof r=="function"?ax:sx)(n,r))}function*cx(){for(var n=this._groups,r=0,o=n.length;r<o;++r)for(var l=n[r],s=0,c=l.length,u;s<c;++s)(u=l[s])&&(yield u)}var i0=[null];function Pn(n,r){this._groups=n,this._parents=r}function go(){return new Pn([[document.documentElement]],i0)}function dx(){return this}Pn.prototype=go.prototype={constructor:Pn,select:O1,selectAll:$1,selectChild:Q1,selectChildren:G1,filter:X1,data:tv,enter:K1,exit:iv,join:ov,merge:lv,selection:dx,order:sv,sort:av,call:cv,nodes:dv,node:fv,size:hv,empty:pv,each:mv,attr:Ev,style:bv,property:Tv,classed:Rv,text:Fv,html:Bv,raise:Wv,lower:Uv,append:qv,insert:Gv,remove:Kv,clone:ex,datum:nx,on:lx,dispatch:ux,[Symbol.iterator]:cx};function Nn(n){return typeof n=="string"?new Pn([[document.querySelector(n)]],[document.documentElement]):new Pn([[n]],i0)}function fx(n){let r;for(;r=n.sourceEvent;)n=r;return n}function Vn(n,r){if(n=fx(n),r===void 0&&(r=n.currentTarget),r){var o=r.ownerSVGElement||r;if(o.createSVGPoint){var l=o.createSVGPoint();return l.x=n.clientX,l.y=n.clientY,l=l.matrixTransform(r.getScreenCTM().inverse()),[l.x,l.y]}if(r.getBoundingClientRect){var s=r.getBoundingClientRect();return[n.clientX-s.left-r.clientLeft,n.clientY-s.top-r.clientTop]}}return[n.pageX,n.pageY]}const hx={passive:!1},oo={capture:!0,passive:!1};function _u(n){n.stopImmediatePropagation()}function Zr(n){n.preventDefault(),n.stopImmediatePropagation()}function o0(n){var r=n.document.documentElement,o=Nn(n).on("dragstart.drag",Zr,oo);"onselectstart"in r?o.on("selectstart.drag",Zr,oo):(r.__noselect=r.style.MozUserSelect,r.style.MozUserSelect="none")}function l0(n,r){var o=n.document.documentElement,l=Nn(n).on("dragstart.drag",null);r&&(l.on("click.drag",Zr,oo),setTimeout(function(){l.on("click.drag",null)},0)),"onselectstart"in o?l.on("selectstart.drag",null):(o.style.MozUserSelect=o.__noselect,delete o.__noselect)}const Hl=n=>()=>n;function Tc(n,{sourceEvent:r,subject:o,target:l,identifier:s,active:c,x:u,y:d,dx:f,dy:p,dispatch:g}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:r,enumerable:!0,configurable:!0},subject:{value:o,enumerable:!0,configurable:!0},target:{value:l,enumerable:!0,configurable:!0},identifier:{value:s,enumerable:!0,configurable:!0},active:{value:c,enumerable:!0,configurable:!0},x:{value:u,enumerable:!0,configurable:!0},y:{value:d,enumerable:!0,configurable:!0},dx:{value:f,enumerable:!0,configurable:!0},dy:{value:p,enumerable:!0,configurable:!0},_:{value:g}})}Tc.prototype.on=function(){var n=this._.on.apply(this._,arguments);return n===this._?this:n};function px(n){return!n.ctrlKey&&!n.button}function mx(){return this.parentNode}function gx(n,r){return r??{x:n.x,y:n.y}}function yx(){return navigator.maxTouchPoints||"ontouchstart"in this}function s0(){var n=px,r=mx,o=gx,l=yx,s={},c=hs("start","drag","end"),u=0,d,f,p,g,h=0;function v(b){b.on("mousedown.drag",x).filter(l).on("touchstart.drag",S).on("touchmove.drag",_,hx).on("touchend.drag touchcancel.drag",N).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function x(b,R){if(!(g||!n.call(this,b,R))){var L=E(this,r.call(this,b,R),b,R,"mouse");L&&(Nn(b.view).on("mousemove.drag",w,oo).on("mouseup.drag",C,oo),o0(b.view),_u(b),p=!1,d=b.clientX,f=b.clientY,L("start",b))}}function w(b){if(Zr(b),!p){var R=b.clientX-d,L=b.clientY-f;p=R*R+L*L>h}s.mouse("drag",b)}function C(b){Nn(b.view).on("mousemove.drag mouseup.drag",null),l0(b.view,p),Zr(b),s.mouse("end",b)}function S(b,R){if(n.call(this,b,R)){var L=b.changedTouches,F=r.call(this,b,R),P=L.length,A,$;for(A=0;A<P;++A)($=E(this,F,b,R,L[A].identifier,L[A]))&&(_u(b),$("start",b,L[A]))}}function _(b){var R=b.changedTouches,L=R.length,F,P;for(F=0;F<L;++F)(P=s[R[F].identifier])&&(Zr(b),P("drag",b,R[F]))}function N(b){var R=b.changedTouches,L=R.length,F,P;for(g&&clearTimeout(g),g=setTimeout(function(){g=null},500),F=0;F<L;++F)(P=s[R[F].identifier])&&(_u(b),P("end",b,R[F]))}function E(b,R,L,F,P,A){var $=c.copy(),I=Vn(A||L,R),D,J,T;if((T=o.call(b,new Tc("beforestart",{sourceEvent:L,target:v,identifier:P,active:u,x:I[0],y:I[1],dx:0,dy:0,dispatch:$}),F))!=null)return D=T.x-I[0]||0,J=T.y-I[1]||0,function Y(U,G,W){var B=I,X;switch(U){case"start":s[P]=Y,X=u++;break;case"end":delete s[P],--u;case"drag":I=Vn(W||G,R),X=u;break}$.call(U,b,new Tc(U,{sourceEvent:G,subject:T,target:v,identifier:P,active:X,x:I[0]+D,y:I[1]+J,dx:I[0]-B[0],dy:I[1]-B[1],dispatch:$}),F)}}return v.filter=function(b){return arguments.length?(n=typeof b=="function"?b:Hl(!!b),v):n},v.container=function(b){return arguments.length?(r=typeof b=="function"?b:Hl(b),v):r},v.subject=function(b){return arguments.length?(o=typeof b=="function"?b:Hl(b),v):o},v.touchable=function(b){return arguments.length?(l=typeof b=="function"?b:Hl(!!b),v):l},v.on=function(){var b=c.on.apply(c,arguments);return b===c?v:b},v.clickDistance=function(b){return arguments.length?(h=(b=+b)*b,v):Math.sqrt(h)},v}function Uc(n,r,o){n.prototype=r.prototype=o,o.constructor=n}function a0(n,r){var o=Object.create(n.prototype);for(var l in r)o[l]=r[l];return o}function yo(){}var lo=.7,ts=1/lo,Jr="\\s*([+-]?\\d+)\\s*",so="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",it="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",vx=/^#([0-9a-f]{3,8})$/,xx=new RegExp(`^rgb\\(${Jr},${Jr},${Jr}\\)$`),wx=new RegExp(`^rgb\\(${it},${it},${it}\\)$`),Sx=new RegExp(`^rgba\\(${Jr},${Jr},${Jr},${so}\\)$`),Ex=new RegExp(`^rgba\\(${it},${it},${it},${so}\\)$`),_x=new RegExp(`^hsl\\(${so},${it},${it}\\)$`),kx=new RegExp(`^hsla\\(${so},${it},${it},${so}\\)$`),Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Uc(yo,mr,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Wh,formatHex:Wh,formatHex8:Cx,formatHsl:bx,formatRgb:Qh,toString:Qh});function Wh(){return this.rgb().formatHex()}function Cx(){return this.rgb().formatHex8()}function bx(){return u0(this).formatHsl()}function Qh(){return this.rgb().formatRgb()}function mr(n){var r,o;return n=(n+"").trim().toLowerCase(),(r=vx.exec(n))?(o=r[1].length,r=parseInt(r[1],16),o===6?Uh(r):o===3?new xn(r>>8&15|r>>4&240,r>>4&15|r&240,(r&15)<<4|r&15,1):o===8?$l(r>>24&255,r>>16&255,r>>8&255,(r&255)/255):o===4?$l(r>>12&15|r>>8&240,r>>8&15|r>>4&240,r>>4&15|r&240,((r&15)<<4|r&15)/255):null):(r=xx.exec(n))?new xn(r[1],r[2],r[3],1):(r=wx.exec(n))?new xn(r[1]*255/100,r[2]*255/100,r[3]*255/100,1):(r=Sx.exec(n))?$l(r[1],r[2],r[3],r[4]):(r=Ex.exec(n))?$l(r[1]*255/100,r[2]*255/100,r[3]*255/100,r[4]):(r=_x.exec(n))?Gh(r[1],r[2]/100,r[3]/100,1):(r=kx.exec(n))?Gh(r[1],r[2]/100,r[3]/100,r[4]):Vh.hasOwnProperty(n)?Uh(Vh[n]):n==="transparent"?new xn(NaN,NaN,NaN,0):null}function Uh(n){return new xn(n>>16&255,n>>8&255,n&255,1)}function $l(n,r,o,l){return l<=0&&(n=r=o=NaN),new xn(n,r,o,l)}function Nx(n){return n instanceof yo||(n=mr(n)),n?(n=n.rgb(),new xn(n.r,n.g,n.b,n.opacity)):new xn}function Lc(n,r,o,l){return arguments.length===1?Nx(n):new xn(n,r,o,l??1)}function xn(n,r,o,l){this.r=+n,this.g=+r,this.b=+o,this.opacity=+l}Uc(xn,Lc,a0(yo,{brighter(n){return n=n==null?ts:Math.pow(ts,n),new xn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?lo:Math.pow(lo,n),new xn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new xn(hr(this.r),hr(this.g),hr(this.b),rs(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:qh,formatHex:qh,formatHex8:Px,formatRgb:Yh,toString:Yh}));function qh(){return`#${fr(this.r)}${fr(this.g)}${fr(this.b)}`}function Px(){return`#${fr(this.r)}${fr(this.g)}${fr(this.b)}${fr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Yh(){const n=rs(this.opacity);return`${n===1?"rgb(":"rgba("}${hr(this.r)}, ${hr(this.g)}, ${hr(this.b)}${n===1?")":`, ${n})`}`}function rs(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function hr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function fr(n){return n=hr(n),(n<16?"0":"")+n.toString(16)}function Gh(n,r,o,l){return l<=0?n=r=o=NaN:o<=0||o>=1?n=r=NaN:r<=0&&(n=NaN),new Wn(n,r,o,l)}function u0(n){if(n instanceof Wn)return new Wn(n.h,n.s,n.l,n.opacity);if(n instanceof yo||(n=mr(n)),!n)return new Wn;if(n instanceof Wn)return n;n=n.rgb();var r=n.r/255,o=n.g/255,l=n.b/255,s=Math.min(r,o,l),c=Math.max(r,o,l),u=NaN,d=c-s,f=(c+s)/2;return d?(r===c?u=(o-l)/d+(o<l)*6:o===c?u=(l-r)/d+2:u=(r-o)/d+4,d/=f<.5?c+s:2-c-s,u*=60):d=f>0&&f<1?0:u,new Wn(u,d,f,n.opacity)}function Mx(n,r,o,l){return arguments.length===1?u0(n):new Wn(n,r,o,l??1)}function Wn(n,r,o,l){this.h=+n,this.s=+r,this.l=+o,this.opacity=+l}Uc(Wn,Mx,a0(yo,{brighter(n){return n=n==null?ts:Math.pow(ts,n),new Wn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?lo:Math.pow(lo,n),new Wn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,r=isNaN(n)||isNaN(this.s)?0:this.s,o=this.l,l=o+(o<.5?o:1-o)*r,s=2*o-l;return new xn(ku(n>=240?n-240:n+120,s,l),ku(n,s,l),ku(n<120?n+240:n-120,s,l),this.opacity)},clamp(){return new Wn(Xh(this.h),Bl(this.s),Bl(this.l),rs(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=rs(this.opacity);return`${n===1?"hsl(":"hsla("}${Xh(this.h)}, ${Bl(this.s)*100}%, ${Bl(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Xh(n){return n=(n||0)%360,n<0?n+360:n}function Bl(n){return Math.max(0,Math.min(1,n||0))}function ku(n,r,o){return(n<60?r+(o-r)*n/60:n<180?o:n<240?r+(o-r)*(240-n)/60:r)*255}const qc=n=>()=>n;function Tx(n,r){return function(o){return n+o*r}}function Lx(n,r,o){return n=Math.pow(n,o),r=Math.pow(r,o)-n,o=1/o,function(l){return Math.pow(n+l*r,o)}}function Ix(n){return(n=+n)==1?c0:function(r,o){return o-r?Lx(r,o,n):qc(isNaN(r)?o:r)}}function c0(n,r){var o=r-n;return o?Tx(n,o):qc(isNaN(n)?r:n)}const is=(function n(r){var o=Ix(r);function l(s,c){var u=o((s=Lc(s)).r,(c=Lc(c)).r),d=o(s.g,c.g),f=o(s.b,c.b),p=c0(s.opacity,c.opacity);return function(g){return s.r=u(g),s.g=d(g),s.b=f(g),s.opacity=p(g),s+""}}return l.gamma=n,l})(1);function Ax(n,r){r||(r=[]);var o=n?Math.min(r.length,n.length):0,l=r.slice(),s;return function(c){for(s=0;s<o;++s)l[s]=n[s]*(1-c)+r[s]*c;return l}}function Rx(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zx(n,r){var o=r?r.length:0,l=n?Math.min(o,n.length):0,s=new Array(l),c=new Array(o),u;for(u=0;u<l;++u)s[u]=ro(n[u],r[u]);for(;u<o;++u)c[u]=r[u];return function(d){for(u=0;u<l;++u)c[u]=s[u](d);return c}}function Dx(n,r){var o=new Date;return n=+n,r=+r,function(l){return o.setTime(n*(1-l)+r*l),o}}function rt(n,r){return n=+n,r=+r,function(o){return n*(1-o)+r*o}}function Ox(n,r){var o={},l={},s;(n===null||typeof n!="object")&&(n={}),(r===null||typeof r!="object")&&(r={});for(s in r)s in n?o[s]=ro(n[s],r[s]):l[s]=r[s];return function(c){for(s in o)l[s]=o[s](c);return l}}var Ic=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Cu=new RegExp(Ic.source,"g");function Fx(n){return function(){return n}}function jx(n){return function(r){return n(r)+""}}function d0(n,r){var o=Ic.lastIndex=Cu.lastIndex=0,l,s,c,u=-1,d=[],f=[];for(n=n+"",r=r+"";(l=Ic.exec(n))&&(s=Cu.exec(r));)(c=s.index)>o&&(c=r.slice(o,c),d[u]?d[u]+=c:d[++u]=c),(l=l[0])===(s=s[0])?d[u]?d[u]+=s:d[++u]=s:(d[++u]=null,f.push({i:u,x:rt(l,s)})),o=Cu.lastIndex;return o<r.length&&(c=r.slice(o),d[u]?d[u]+=c:d[++u]=c),d.length<2?f[0]?jx(f[0].x):Fx(r):(r=f.length,function(p){for(var g=0,h;g<r;++g)d[(h=f[g]).i]=h.x(p);return d.join("")})}function ro(n,r){var o=typeof r,l;return r==null||o==="boolean"?qc(r):(o==="number"?rt:o==="string"?(l=mr(r))?(r=l,is):d0:r instanceof mr?is:r instanceof Date?Dx:Rx(r)?Ax:Array.isArray(r)?zx:typeof r.valueOf!="function"&&typeof r.toString!="function"||isNaN(r)?Ox:rt)(n,r)}var Kh=180/Math.PI,Ac={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function f0(n,r,o,l,s,c){var u,d,f;return(u=Math.sqrt(n*n+r*r))&&(n/=u,r/=u),(f=n*o+r*l)&&(o-=n*f,l-=r*f),(d=Math.sqrt(o*o+l*l))&&(o/=d,l/=d,f/=d),n*l<r*o&&(n=-n,r=-r,f=-f,u=-u),{translateX:s,translateY:c,rotate:Math.atan2(r,n)*Kh,skewX:Math.atan(f)*Kh,scaleX:u,scaleY:d}}var Vl;function Hx(n){const r=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return r.isIdentity?Ac:f0(r.a,r.b,r.c,r.d,r.e,r.f)}function $x(n){return n==null||(Vl||(Vl=document.createElementNS("http://www.w3.org/2000/svg","g")),Vl.setAttribute("transform",n),!(n=Vl.transform.baseVal.consolidate()))?Ac:(n=n.matrix,f0(n.a,n.b,n.c,n.d,n.e,n.f))}function h0(n,r,o,l){function s(p){return p.length?p.pop()+" ":""}function c(p,g,h,v,x,w){if(p!==h||g!==v){var C=x.push("translate(",null,r,null,o);w.push({i:C-4,x:rt(p,h)},{i:C-2,x:rt(g,v)})}else(h||v)&&x.push("translate("+h+r+v+o)}function u(p,g,h,v){p!==g?(p-g>180?g+=360:g-p>180&&(p+=360),v.push({i:h.push(s(h)+"rotate(",null,l)-2,x:rt(p,g)})):g&&h.push(s(h)+"rotate("+g+l)}function d(p,g,h,v){p!==g?v.push({i:h.push(s(h)+"skewX(",null,l)-2,x:rt(p,g)}):g&&h.push(s(h)+"skewX("+g+l)}function f(p,g,h,v,x,w){if(p!==h||g!==v){var C=x.push(s(x)+"scale(",null,",",null,")");w.push({i:C-4,x:rt(p,h)},{i:C-2,x:rt(g,v)})}else(h!==1||v!==1)&&x.push(s(x)+"scale("+h+","+v+")")}return function(p,g){var h=[],v=[];return p=n(p),g=n(g),c(p.translateX,p.translateY,g.translateX,g.translateY,h,v),u(p.rotate,g.rotate,h,v),d(p.skewX,g.skewX,h,v),f(p.scaleX,p.scaleY,g.scaleX,g.scaleY,h,v),p=g=null,function(x){for(var w=-1,C=v.length,S;++w<C;)h[(S=v[w]).i]=S.x(x);return h.join("")}}}var Bx=h0(Hx,"px, ","px)","deg)"),Vx=h0($x,", ",")",")"),Wx=1e-12;function Zh(n){return((n=Math.exp(n))+1/n)/2}function Qx(n){return((n=Math.exp(n))-1/n)/2}function Ux(n){return((n=Math.exp(2*n))-1)/(n+1)}const Kl=(function n(r,o,l){function s(c,u){var d=c[0],f=c[1],p=c[2],g=u[0],h=u[1],v=u[2],x=g-d,w=h-f,C=x*x+w*w,S,_;if(C<Wx)_=Math.log(v/p)/r,S=function(F){return[d+F*x,f+F*w,p*Math.exp(r*F*_)]};else{var N=Math.sqrt(C),E=(v*v-p*p+l*C)/(2*p*o*N),b=(v*v-p*p-l*C)/(2*v*o*N),R=Math.log(Math.sqrt(E*E+1)-E),L=Math.log(Math.sqrt(b*b+1)-b);_=(L-R)/r,S=function(F){var P=F*_,A=Zh(R),$=p/(o*N)*(A*Ux(r*P+R)-Qx(R));return[d+$*x,f+$*w,p*A/Zh(r*P+R)]}}return S.duration=_*1e3*r/Math.SQRT2,S}return s.rho=function(c){var u=Math.max(.001,+c),d=u*u,f=d*d;return n(u,d,f)},s})(Math.SQRT2,2,4);var ni=0,no=0,Ji=0,p0=1e3,os,to,ls=0,gr=0,ms=0,ao=typeof performance=="object"&&performance.now?performance:Date,m0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Yc(){return gr||(m0(qx),gr=ao.now()+ms)}function qx(){gr=0}function ss(){this._call=this._time=this._next=null}ss.prototype=g0.prototype={constructor:ss,restart:function(n,r,o){if(typeof n!="function")throw new TypeError("callback is not a function");o=(o==null?Yc():+o)+(r==null?0:+r),!this._next&&to!==this&&(to?to._next=this:os=this,to=this),this._call=n,this._time=o,Rc()},stop:function(){this._call&&(this._call=null,this._time=1/0,Rc())}};function g0(n,r,o){var l=new ss;return l.restart(n,r,o),l}function Yx(){Yc(),++ni;for(var n=os,r;n;)(r=gr-n._time)>=0&&n._call.call(void 0,r),n=n._next;--ni}function Jh(){gr=(ls=ao.now())+ms,ni=no=0;try{Yx()}finally{ni=0,Xx(),gr=0}}function Gx(){var n=ao.now(),r=n-ls;r>p0&&(ms-=r,ls=n)}function Xx(){for(var n,r=os,o,l=1/0;r;)r._call?(l>r._time&&(l=r._time),n=r,r=r._next):(o=r._next,r._next=null,r=n?n._next=o:os=o);to=n,Rc(l)}function Rc(n){if(!ni){no&&(no=clearTimeout(no));var r=n-gr;r>24?(n<1/0&&(no=setTimeout(Jh,n-ao.now()-ms)),Ji&&(Ji=clearInterval(Ji))):(Ji||(ls=ao.now(),Ji=setInterval(Gx,p0)),ni=1,m0(Jh))}}function ep(n,r,o){var l=new ss;return r=r==null?0:+r,l.restart(s=>{l.stop(),n(s+r)},r,o),l}var Kx=hs("start","end","cancel","interrupt"),Zx=[],y0=0,np=1,zc=2,Zl=3,tp=4,Dc=5,Jl=6;function gs(n,r,o,l,s,c){var u=n.__transition;if(!u)n.__transition={};else if(o in u)return;Jx(n,o,{name:r,index:l,group:s,on:Kx,tween:Zx,time:c.time,delay:c.delay,duration:c.duration,ease:c.ease,timer:null,state:y0})}function Gc(n,r){var o=Gn(n,r);if(o.state>y0)throw new Error("too late; already scheduled");return o}function ot(n,r){var o=Gn(n,r);if(o.state>Zl)throw new Error("too late; already running");return o}function Gn(n,r){var o=n.__transition;if(!o||!(o=o[r]))throw new Error("transition not found");return o}function Jx(n,r,o){var l=n.__transition,s;l[r]=o,o.timer=g0(c,0,o.time);function c(p){o.state=np,o.timer.restart(u,o.delay,o.time),o.delay<=p&&u(p-o.delay)}function u(p){var g,h,v,x;if(o.state!==np)return f();for(g in l)if(x=l[g],x.name===o.name){if(x.state===Zl)return ep(u);x.state===tp?(x.state=Jl,x.timer.stop(),x.on.call("interrupt",n,n.__data__,x.index,x.group),delete l[g]):+g<r&&(x.state=Jl,x.timer.stop(),x.on.call("cancel",n,n.__data__,x.index,x.group),delete l[g])}if(ep(function(){o.state===Zl&&(o.state=tp,o.timer.restart(d,o.delay,o.time),d(p))}),o.state=zc,o.on.call("start",n,n.__data__,o.index,o.group),o.state===zc){for(o.state=Zl,s=new Array(v=o.tween.length),g=0,h=-1;g<v;++g)(x=o.tween[g].value.call(n,n.__data__,o.index,o.group))&&(s[++h]=x);s.length=h+1}}function d(p){for(var g=p<o.duration?o.ease.call(null,p/o.duration):(o.timer.restart(f),o.state=Dc,1),h=-1,v=s.length;++h<v;)s[h].call(n,g);o.state===Dc&&(o.on.call("end",n,n.__data__,o.index,o.group),f())}function f(){o.state=Jl,o.timer.stop(),delete l[r];for(var p in l)return;delete n.__transition}}function es(n,r){var o=n.__transition,l,s,c=!0,u;if(o){r=r==null?null:r+"";for(u in o){if((l=o[u]).name!==r){c=!1;continue}s=l.state>zc&&l.state<Dc,l.state=Jl,l.timer.stop(),l.on.call(s?"interrupt":"cancel",n,n.__data__,l.index,l.group),delete o[u]}c&&delete n.__transition}}function ew(n){return this.each(function(){es(this,n)})}function nw(n,r){var o,l;return function(){var s=ot(this,n),c=s.tween;if(c!==o){l=o=c;for(var u=0,d=l.length;u<d;++u)if(l[u].name===r){l=l.slice(),l.splice(u,1);break}}s.tween=l}}function tw(n,r,o){var l,s;if(typeof o!="function")throw new Error;return function(){var c=ot(this,n),u=c.tween;if(u!==l){s=(l=u).slice();for(var d={name:r,value:o},f=0,p=s.length;f<p;++f)if(s[f].name===r){s[f]=d;break}f===p&&s.push(d)}c.tween=s}}function rw(n,r){var o=this._id;if(n+="",arguments.length<2){for(var l=Gn(this.node(),o).tween,s=0,c=l.length,u;s<c;++s)if((u=l[s]).name===n)return u.value;return null}return this.each((r==null?nw:tw)(o,n,r))}function Xc(n,r,o){var l=n._id;return n.each(function(){var s=ot(this,l);(s.value||(s.value={}))[r]=o.apply(this,arguments)}),function(s){return Gn(s,l).value[r]}}function v0(n,r){var o;return(typeof r=="number"?rt:r instanceof mr?is:(o=mr(r))?(r=o,is):d0)(n,r)}function iw(n){return function(){this.removeAttribute(n)}}function ow(n){return function(){this.removeAttributeNS(n.space,n.local)}}function lw(n,r,o){var l,s=o+"",c;return function(){var u=this.getAttribute(n);return u===s?null:u===l?c:c=r(l=u,o)}}function sw(n,r,o){var l,s=o+"",c;return function(){var u=this.getAttributeNS(n.space,n.local);return u===s?null:u===l?c:c=r(l=u,o)}}function aw(n,r,o){var l,s,c;return function(){var u,d=o(this),f;return d==null?void this.removeAttribute(n):(u=this.getAttribute(n),f=d+"",u===f?null:u===l&&f===s?c:(s=f,c=r(l=u,d)))}}function uw(n,r,o){var l,s,c;return function(){var u,d=o(this),f;return d==null?void this.removeAttributeNS(n.space,n.local):(u=this.getAttributeNS(n.space,n.local),f=d+"",u===f?null:u===l&&f===s?c:(s=f,c=r(l=u,d)))}}function cw(n,r){var o=ps(n),l=o==="transform"?Vx:v0;return this.attrTween(n,typeof r=="function"?(o.local?uw:aw)(o,l,Xc(this,"attr."+n,r)):r==null?(o.local?ow:iw)(o):(o.local?sw:lw)(o,l,r))}function dw(n,r){return function(o){this.setAttribute(n,r.call(this,o))}}function fw(n,r){return function(o){this.setAttributeNS(n.space,n.local,r.call(this,o))}}function hw(n,r){var o,l;function s(){var c=r.apply(this,arguments);return c!==l&&(o=(l=c)&&fw(n,c)),o}return s._value=r,s}function pw(n,r){var o,l;function s(){var c=r.apply(this,arguments);return c!==l&&(o=(l=c)&&dw(n,c)),o}return s._value=r,s}function mw(n,r){var o="attr."+n;if(arguments.length<2)return(o=this.tween(o))&&o._value;if(r==null)return this.tween(o,null);if(typeof r!="function")throw new Error;var l=ps(n);return this.tween(o,(l.local?hw:pw)(l,r))}function gw(n,r){return function(){Gc(this,n).delay=+r.apply(this,arguments)}}function yw(n,r){return r=+r,function(){Gc(this,n).delay=r}}function vw(n){var r=this._id;return arguments.length?this.each((typeof n=="function"?gw:yw)(r,n)):Gn(this.node(),r).delay}function xw(n,r){return function(){ot(this,n).duration=+r.apply(this,arguments)}}function ww(n,r){return r=+r,function(){ot(this,n).duration=r}}function Sw(n){var r=this._id;return arguments.length?this.each((typeof n=="function"?xw:ww)(r,n)):Gn(this.node(),r).duration}function Ew(n,r){if(typeof r!="function")throw new Error;return function(){ot(this,n).ease=r}}function _w(n){var r=this._id;return arguments.length?this.each(Ew(r,n)):Gn(this.node(),r).ease}function kw(n,r){return function(){var o=r.apply(this,arguments);if(typeof o!="function")throw new Error;ot(this,n).ease=o}}function Cw(n){if(typeof n!="function")throw new Error;return this.each(kw(this._id,n))}function bw(n){typeof n!="function"&&(n=Gm(n));for(var r=this._groups,o=r.length,l=new Array(o),s=0;s<o;++s)for(var c=r[s],u=c.length,d=l[s]=[],f,p=0;p<u;++p)(f=c[p])&&n.call(f,f.__data__,p,c)&&d.push(f);return new xt(l,this._parents,this._name,this._id)}function Nw(n){if(n._id!==this._id)throw new Error;for(var r=this._groups,o=n._groups,l=r.length,s=o.length,c=Math.min(l,s),u=new Array(l),d=0;d<c;++d)for(var f=r[d],p=o[d],g=f.length,h=u[d]=new Array(g),v,x=0;x<g;++x)(v=f[x]||p[x])&&(h[x]=v);for(;d<l;++d)u[d]=r[d];return new xt(u,this._parents,this._name,this._id)}function Pw(n){return(n+"").trim().split(/^|\s+/).every(function(r){var o=r.indexOf(".");return o>=0&&(r=r.slice(0,o)),!r||r==="start"})}function Mw(n,r,o){var l,s,c=Pw(r)?Gc:ot;return function(){var u=c(this,n),d=u.on;d!==l&&(s=(l=d).copy()).on(r,o),u.on=s}}function Tw(n,r){var o=this._id;return arguments.length<2?Gn(this.node(),o).on.on(n):this.each(Mw(o,n,r))}function Lw(n){return function(){var r=this.parentNode;for(var o in this.__transition)if(+o!==n)return;r&&r.removeChild(this)}}function Iw(){return this.on("end.remove",Lw(this._id))}function Aw(n){var r=this._name,o=this._id;typeof n!="function"&&(n=Wc(n));for(var l=this._groups,s=l.length,c=new Array(s),u=0;u<s;++u)for(var d=l[u],f=d.length,p=c[u]=new Array(f),g,h,v=0;v<f;++v)(g=d[v])&&(h=n.call(g,g.__data__,v,d))&&("__data__"in g&&(h.__data__=g.__data__),p[v]=h,gs(p[v],r,o,v,p,Gn(g,o)));return new xt(c,this._parents,r,o)}function Rw(n){var r=this._name,o=this._id;typeof n!="function"&&(n=Ym(n));for(var l=this._groups,s=l.length,c=[],u=[],d=0;d<s;++d)for(var f=l[d],p=f.length,g,h=0;h<p;++h)if(g=f[h]){for(var v=n.call(g,g.__data__,h,f),x,w=Gn(g,o),C=0,S=v.length;C<S;++C)(x=v[C])&&gs(x,r,o,C,v,w);c.push(v),u.push(g)}return new xt(c,u,r,o)}var zw=go.prototype.constructor;function Dw(){return new zw(this._groups,this._parents)}function Ow(n,r){var o,l,s;return function(){var c=ei(this,n),u=(this.style.removeProperty(n),ei(this,n));return c===u?null:c===o&&u===l?s:s=r(o=c,l=u)}}function x0(n){return function(){this.style.removeProperty(n)}}function Fw(n,r,o){var l,s=o+"",c;return function(){var u=ei(this,n);return u===s?null:u===l?c:c=r(l=u,o)}}function jw(n,r,o){var l,s,c;return function(){var u=ei(this,n),d=o(this),f=d+"";return d==null&&(f=d=(this.style.removeProperty(n),ei(this,n))),u===f?null:u===l&&f===s?c:(s=f,c=r(l=u,d))}}function Hw(n,r){var o,l,s,c="style."+r,u="end."+c,d;return function(){var f=ot(this,n),p=f.on,g=f.value[c]==null?d||(d=x0(r)):void 0;(p!==o||s!==g)&&(l=(o=p).copy()).on(u,s=g),f.on=l}}function $w(n,r,o){var l=(n+="")=="transform"?Bx:v0;return r==null?this.styleTween(n,Ow(n,l)).on("end.style."+n,x0(n)):typeof r=="function"?this.styleTween(n,jw(n,l,Xc(this,"style."+n,r))).each(Hw(this._id,n)):this.styleTween(n,Fw(n,l,r),o).on("end.style."+n,null)}function Bw(n,r,o){return function(l){this.style.setProperty(n,r.call(this,l),o)}}function Vw(n,r,o){var l,s;function c(){var u=r.apply(this,arguments);return u!==s&&(l=(s=u)&&Bw(n,u,o)),l}return c._value=r,c}function Ww(n,r,o){var l="style."+(n+="");if(arguments.length<2)return(l=this.tween(l))&&l._value;if(r==null)return this.tween(l,null);if(typeof r!="function")throw new Error;return this.tween(l,Vw(n,r,o??""))}function Qw(n){return function(){this.textContent=n}}function Uw(n){return function(){var r=n(this);this.textContent=r??""}}function qw(n){return this.tween("text",typeof n=="function"?Uw(Xc(this,"text",n)):Qw(n==null?"":n+""))}function Yw(n){return function(r){this.textContent=n.call(this,r)}}function Gw(n){var r,o;function l(){var s=n.apply(this,arguments);return s!==o&&(r=(o=s)&&Yw(s)),r}return l._value=n,l}function Xw(n){var r="text";if(arguments.length<1)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Gw(n))}function Kw(){for(var n=this._name,r=this._id,o=w0(),l=this._groups,s=l.length,c=0;c<s;++c)for(var u=l[c],d=u.length,f,p=0;p<d;++p)if(f=u[p]){var g=Gn(f,r);gs(f,n,o,p,u,{time:g.time+g.delay+g.duration,delay:0,duration:g.duration,ease:g.ease})}return new xt(l,this._parents,n,o)}function Zw(){var n,r,o=this,l=o._id,s=o.size();return new Promise(function(c,u){var d={value:u},f={value:function(){--s===0&&c()}};o.each(function(){var p=ot(this,l),g=p.on;g!==n&&(r=(n=g).copy(),r._.cancel.push(d),r._.interrupt.push(d),r._.end.push(f)),p.on=r}),s===0&&c()})}var Jw=0;function xt(n,r,o,l){this._groups=n,this._parents=r,this._name=o,this._id=l}function w0(){return++Jw}var yt=go.prototype;xt.prototype={constructor:xt,select:Aw,selectAll:Rw,selectChild:yt.selectChild,selectChildren:yt.selectChildren,filter:bw,merge:Nw,selection:Dw,transition:Kw,call:yt.call,nodes:yt.nodes,node:yt.node,size:yt.size,empty:yt.empty,each:yt.each,on:Tw,attr:cw,attrTween:mw,style:$w,styleTween:Ww,text:qw,textTween:Xw,remove:Iw,tween:rw,delay:vw,duration:Sw,ease:_w,easeVarying:Cw,end:Zw,[Symbol.iterator]:yt[Symbol.iterator]};function e2(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var n2={time:null,delay:0,duration:250,ease:e2};function t2(n,r){for(var o;!(o=n.__transition)||!(o=o[r]);)if(!(n=n.parentNode))throw new Error(`transition ${r} not found`);return o}function r2(n){var r,o;n instanceof xt?(r=n._id,n=n._name):(r=w0(),(o=n2).time=Yc(),n=n==null?null:n+"");for(var l=this._groups,s=l.length,c=0;c<s;++c)for(var u=l[c],d=u.length,f,p=0;p<d;++p)(f=u[p])&&gs(f,n,r,p,u,o||t2(f,r));return new xt(l,this._parents,n,r)}go.prototype.interrupt=ew;go.prototype.transition=r2;const Wl=n=>()=>n;function i2(n,{sourceEvent:r,target:o,transform:l,dispatch:s}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:r,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},transform:{value:l,enumerable:!0,configurable:!0},_:{value:s}})}function vt(n,r,o){this.k=n,this.x=r,this.y=o}vt.prototype={constructor:vt,scale:function(n){return n===1?this:new vt(this.k*n,this.x,this.y)},translate:function(n,r){return n===0&r===0?this:new vt(this.k,this.x+this.k*n,this.y+this.k*r)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ys=new vt(1,0,0);S0.prototype=vt.prototype;function S0(n){for(;!n.__zoom;)if(!(n=n.parentNode))return ys;return n.__zoom}function bu(n){n.stopImmediatePropagation()}function eo(n){n.preventDefault(),n.stopImmediatePropagation()}function o2(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function l2(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function rp(){return this.__zoom||ys}function s2(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function a2(){return navigator.maxTouchPoints||"ontouchstart"in this}function u2(n,r,o){var l=n.invertX(r[0][0])-o[0][0],s=n.invertX(r[1][0])-o[1][0],c=n.invertY(r[0][1])-o[0][1],u=n.invertY(r[1][1])-o[1][1];return n.translate(s>l?(l+s)/2:Math.min(0,l)||Math.max(0,s),u>c?(c+u)/2:Math.min(0,c)||Math.max(0,u))}function E0(){var n=o2,r=l2,o=u2,l=s2,s=a2,c=[0,1/0],u=[[-1/0,-1/0],[1/0,1/0]],d=250,f=Kl,p=hs("start","zoom","end"),g,h,v,x=500,w=150,C=0,S=10;function _(T){T.property("__zoom",rp).on("wheel.zoom",P,{passive:!1}).on("mousedown.zoom",A).on("dblclick.zoom",$).filter(s).on("touchstart.zoom",I).on("touchmove.zoom",D).on("touchend.zoom touchcancel.zoom",J).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}_.transform=function(T,Y,U,G){var W=T.selection?T.selection():T;W.property("__zoom",rp),T!==W?R(T,Y,U,G):W.interrupt().each(function(){L(this,arguments).event(G).start().zoom(null,typeof Y=="function"?Y.apply(this,arguments):Y).end()})},_.scaleBy=function(T,Y,U,G){_.scaleTo(T,function(){var W=this.__zoom.k,B=typeof Y=="function"?Y.apply(this,arguments):Y;return W*B},U,G)},_.scaleTo=function(T,Y,U,G){_.transform(T,function(){var W=r.apply(this,arguments),B=this.__zoom,X=U==null?b(W):typeof U=="function"?U.apply(this,arguments):U,M=B.invert(X),j=typeof Y=="function"?Y.apply(this,arguments):Y;return o(E(N(B,j),X,M),W,u)},U,G)},_.translateBy=function(T,Y,U,G){_.transform(T,function(){return o(this.__zoom.translate(typeof Y=="function"?Y.apply(this,arguments):Y,typeof U=="function"?U.apply(this,arguments):U),r.apply(this,arguments),u)},null,G)},_.translateTo=function(T,Y,U,G,W){_.transform(T,function(){var B=r.apply(this,arguments),X=this.__zoom,M=G==null?b(B):typeof G=="function"?G.apply(this,arguments):G;return o(ys.translate(M[0],M[1]).scale(X.k).translate(typeof Y=="function"?-Y.apply(this,arguments):-Y,typeof U=="function"?-U.apply(this,arguments):-U),B,u)},G,W)};function N(T,Y){return Y=Math.max(c[0],Math.min(c[1],Y)),Y===T.k?T:new vt(Y,T.x,T.y)}function E(T,Y,U){var G=Y[0]-U[0]*T.k,W=Y[1]-U[1]*T.k;return G===T.x&&W===T.y?T:new vt(T.k,G,W)}function b(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function R(T,Y,U,G){T.on("start.zoom",function(){L(this,arguments).event(G).start()}).on("interrupt.zoom end.zoom",function(){L(this,arguments).event(G).end()}).tween("zoom",function(){var W=this,B=arguments,X=L(W,B).event(G),M=r.apply(W,B),j=U==null?b(M):typeof U=="function"?U.apply(W,B):U,O=Math.max(M[1][0]-M[0][0],M[1][1]-M[0][1]),Q=W.__zoom,K=typeof Y=="function"?Y.apply(W,B):Y,ie=f(Q.invert(j).concat(O/Q.k),K.invert(j).concat(O/K.k));return function(le){if(le===1)le=K;else{var Z=ie(le),oe=O/Z[2];le=new vt(oe,j[0]-Z[0]*oe,j[1]-Z[1]*oe)}X.zoom(null,le)}})}function L(T,Y,U){return!U&&T.__zooming||new F(T,Y)}function F(T,Y){this.that=T,this.args=Y,this.active=0,this.sourceEvent=null,this.extent=r.apply(T,Y),this.taps=0}F.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,Y){return this.mouse&&T!=="mouse"&&(this.mouse[1]=Y.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=Y.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=Y.invert(this.touch1[0])),this.that.__zoom=Y,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var Y=Nn(this.that).datum();p.call(T,this.that,new i2(T,{sourceEvent:this.sourceEvent,target:_,transform:this.that.__zoom,dispatch:p}),Y)}};function P(T,...Y){if(!n.apply(this,arguments))return;var U=L(this,Y).event(T),G=this.__zoom,W=Math.max(c[0],Math.min(c[1],G.k*Math.pow(2,l.apply(this,arguments)))),B=Vn(T);if(U.wheel)(U.mouse[0][0]!==B[0]||U.mouse[0][1]!==B[1])&&(U.mouse[1]=G.invert(U.mouse[0]=B)),clearTimeout(U.wheel);else{if(G.k===W)return;U.mouse=[B,G.invert(B)],es(this),U.start()}eo(T),U.wheel=setTimeout(X,w),U.zoom("mouse",o(E(N(G,W),U.mouse[0],U.mouse[1]),U.extent,u));function X(){U.wheel=null,U.end()}}function A(T,...Y){if(v||!n.apply(this,arguments))return;var U=T.currentTarget,G=L(this,Y,!0).event(T),W=Nn(T.view).on("mousemove.zoom",j,!0).on("mouseup.zoom",O,!0),B=Vn(T,U),X=T.clientX,M=T.clientY;o0(T.view),bu(T),G.mouse=[B,this.__zoom.invert(B)],es(this),G.start();function j(Q){if(eo(Q),!G.moved){var K=Q.clientX-X,ie=Q.clientY-M;G.moved=K*K+ie*ie>C}G.event(Q).zoom("mouse",o(E(G.that.__zoom,G.mouse[0]=Vn(Q,U),G.mouse[1]),G.extent,u))}function O(Q){W.on("mousemove.zoom mouseup.zoom",null),l0(Q.view,G.moved),eo(Q),G.event(Q).end()}}function $(T,...Y){if(n.apply(this,arguments)){var U=this.__zoom,G=Vn(T.changedTouches?T.changedTouches[0]:T,this),W=U.invert(G),B=U.k*(T.shiftKey?.5:2),X=o(E(N(U,B),G,W),r.apply(this,Y),u);eo(T),d>0?Nn(this).transition().duration(d).call(R,X,G,T):Nn(this).call(_.transform,X,G,T)}}function I(T,...Y){if(n.apply(this,arguments)){var U=T.touches,G=U.length,W=L(this,Y,T.changedTouches.length===G).event(T),B,X,M,j;for(bu(T),X=0;X<G;++X)M=U[X],j=Vn(M,this),j=[j,this.__zoom.invert(j),M.identifier],W.touch0?!W.touch1&&W.touch0[2]!==j[2]&&(W.touch1=j,W.taps=0):(W.touch0=j,B=!0,W.taps=1+!!g);g&&(g=clearTimeout(g)),B&&(W.taps<2&&(h=j[0],g=setTimeout(function(){g=null},x)),es(this),W.start())}}function D(T,...Y){if(this.__zooming){var U=L(this,Y).event(T),G=T.changedTouches,W=G.length,B,X,M,j;for(eo(T),B=0;B<W;++B)X=G[B],M=Vn(X,this),U.touch0&&U.touch0[2]===X.identifier?U.touch0[0]=M:U.touch1&&U.touch1[2]===X.identifier&&(U.touch1[0]=M);if(X=U.that.__zoom,U.touch1){var O=U.touch0[0],Q=U.touch0[1],K=U.touch1[0],ie=U.touch1[1],le=(le=K[0]-O[0])*le+(le=K[1]-O[1])*le,Z=(Z=ie[0]-Q[0])*Z+(Z=ie[1]-Q[1])*Z;X=N(X,Math.sqrt(le/Z)),M=[(O[0]+K[0])/2,(O[1]+K[1])/2],j=[(Q[0]+ie[0])/2,(Q[1]+ie[1])/2]}else if(U.touch0)M=U.touch0[0],j=U.touch0[1];else return;U.zoom("touch",o(E(X,M,j),U.extent,u))}}function J(T,...Y){if(this.__zooming){var U=L(this,Y).event(T),G=T.changedTouches,W=G.length,B,X;for(bu(T),v&&clearTimeout(v),v=setTimeout(function(){v=null},x),B=0;B<W;++B)X=G[B],U.touch0&&U.touch0[2]===X.identifier?delete U.touch0:U.touch1&&U.touch1[2]===X.identifier&&delete U.touch1;if(U.touch1&&!U.touch0&&(U.touch0=U.touch1,delete U.touch1),U.touch0)U.touch0[1]=this.__zoom.invert(U.touch0[0]);else if(U.end(),U.taps===2&&(X=Vn(X,this),Math.hypot(h[0]-X[0],h[1]-X[1])<S)){var M=Nn(this).on("dblclick.zoom");M&&M.apply(this,arguments)}}}return _.wheelDelta=function(T){return arguments.length?(l=typeof T=="function"?T:Wl(+T),_):l},_.filter=function(T){return arguments.length?(n=typeof T=="function"?T:Wl(!!T),_):n},_.touchable=function(T){return arguments.length?(s=typeof T=="function"?T:Wl(!!T),_):s},_.extent=function(T){return arguments.length?(r=typeof T=="function"?T:Wl([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),_):r},_.scaleExtent=function(T){return arguments.length?(c[0]=+T[0],c[1]=+T[1],_):[c[0],c[1]]},_.translateExtent=function(T){return arguments.length?(u[0][0]=+T[0][0],u[1][0]=+T[1][0],u[0][1]=+T[0][1],u[1][1]=+T[1][1],_):[[u[0][0],u[0][1]],[u[1][0],u[1][1]]]},_.constrain=function(T){return arguments.length?(o=T,_):o},_.duration=function(T){return arguments.length?(d=+T,_):d},_.interpolate=function(T){return arguments.length?(f=T,_):f},_.on=function(){var T=p.on.apply(p,arguments);return T===p?_:T},_.clickDistance=function(T){return arguments.length?(C=(T=+T)*T,_):Math.sqrt(C)},_.tapDistance=function(T){return arguments.length?(S=+T,_):S},_}const qn={error001:(n="react")=>`Seems like you have not used zustand provider as an ancestor. Help: https://${n}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:n=>`Node type "${n}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:n=>`The old edge with id=${n} does not exist.`,error009:n=>`Marker type "${n}" doesn't exist.`,error008:(n,{id:r,sourceHandle:o,targetHandle:l})=>`Couldn't create edge for ${n} handle id: "${n==="source"?o:l}", edge id: ${r}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:n=>`Edge type "${n}" not found. Using fallback type "default".`,error012:n=>`Node with id "${n}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(n="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${n}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:n=>`Edge with id "${n}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},uo=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],_0=["Enter"," ","Escape"],k0={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:n,x:r,y:o})=>`Moved selected node ${n}. New position, x: ${r}, y: ${o}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"};var ti;(function(n){n.Strict="strict",n.Loose="loose"})(ti||(ti={}));var pr;(function(n){n.Free="free",n.Vertical="vertical",n.Horizontal="horizontal"})(pr||(pr={}));var co;(function(n){n.Partial="partial",n.Full="full"})(co||(co={}));const C0={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null};var Wt;(function(n){n.Bezier="default",n.Straight="straight",n.Step="step",n.SmoothStep="smoothstep",n.SimpleBezier="simplebezier"})(Wt||(Wt={}));var as;(function(n){n.Arrow="arrow",n.ArrowClosed="arrowclosed"})(as||(as={}));var we;(function(n){n.Left="left",n.Top="top",n.Right="right",n.Bottom="bottom"})(we||(we={}));const ip={[we.Left]:we.Right,[we.Right]:we.Left,[we.Top]:we.Bottom,[we.Bottom]:we.Top};function b0(n){return n===null?null:n?"valid":"invalid"}const N0=n=>"id"in n&&"source"in n&&"target"in n,c2=n=>"id"in n&&"position"in n&&!("source"in n)&&!("target"in n),Kc=n=>"id"in n&&"internals"in n&&!("source"in n)&&!("target"in n),vo=(n,r=[0,0])=>{const{width:o,height:l}=wt(n),s=n.origin??r,c=o*s[0],u=l*s[1];return{x:n.position.x-c,y:n.position.y-u}},d2=(n,r={nodeOrigin:[0,0]})=>{if(n.length===0)return{x:0,y:0,width:0,height:0};const o=n.reduce((l,s)=>{const c=typeof s=="string";let u=!r.nodeLookup&&!c?s:void 0;r.nodeLookup&&(u=c?r.nodeLookup.get(s):Kc(s)?s:r.nodeLookup.get(s.id));const d=u?us(u,r.nodeOrigin):{x:0,y:0,x2:0,y2:0};return vs(l,d)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return xs(o)},xo=(n,r={})=>{let o={x:1/0,y:1/0,x2:-1/0,y2:-1/0},l=!1;return n.forEach(s=>{(r.filter===void 0||r.filter(s))&&(o=vs(o,us(s)),l=!0)}),l?xs(o):{x:0,y:0,width:0,height:0}},Zc=(n,r,[o,l,s]=[0,0,1],c=!1,u=!1)=>{const d={...ai(r,[o,l,s]),width:r.width/s,height:r.height/s},f=[];for(const p of n.values()){const{measured:g,selectable:h=!0,hidden:v=!1}=p;if(u&&!h||v)continue;const x=g.width??p.width??p.initialWidth??null,w=g.height??p.height??p.initialHeight??null,C=fo(d,ii(p)),S=(x??0)*(w??0),_=c&&C>0;(!p.internals.handleBounds||_||C>=S||p.dragging)&&f.push(p)}return f},f2=(n,r)=>{const o=new Set;return n.forEach(l=>{o.add(l.id)}),r.filter(l=>o.has(l.source)||o.has(l.target))};function h2(n,r){const o=new Map,l=r!=null&&r.nodes?new Set(r.nodes.map(s=>s.id)):null;return n.forEach(s=>{s.measured.width&&s.measured.height&&((r==null?void 0:r.includeHiddenNodes)||!s.hidden)&&(!l||l.has(s.id))&&o.set(s.id,s)}),o}async function p2({nodes:n,width:r,height:o,panZoom:l,minZoom:s,maxZoom:c},u){if(n.size===0)return!0;const d=h2(n,u),f=xo(d),p=ed(f,r,o,(u==null?void 0:u.minZoom)??s,(u==null?void 0:u.maxZoom)??c,(u==null?void 0:u.padding)??.1);return await l.setViewport(p,{duration:u==null?void 0:u.duration,ease:u==null?void 0:u.ease,interpolate:u==null?void 0:u.interpolate}),!0}function P0({nodeId:n,nextPosition:r,nodeLookup:o,nodeOrigin:l=[0,0],nodeExtent:s,onError:c}){const u=o.get(n),d=u.parentId?o.get(u.parentId):void 0,{x:f,y:p}=d?d.internals.positionAbsolute:{x:0,y:0},g=u.origin??l;let h=u.extent||s;if(u.extent==="parent"&&!u.expandParent)if(!d)c==null||c("005",qn.error005());else{const x=d.measured.width,w=d.measured.height;x&&w&&(h=[[f,p],[f+x,p+w]])}else d&&vr(u.extent)&&(h=[[u.extent[0][0]+f,u.extent[0][1]+p],[u.extent[1][0]+f,u.extent[1][1]+p]]);const v=vr(h)?yr(r,h,u.measured):r;return(u.measured.width===void 0||u.measured.height===void 0)&&(c==null||c("015",qn.error015())),{position:{x:v.x-f+(u.measured.width??0)*g[0],y:v.y-p+(u.measured.height??0)*g[1]},positionAbsolute:v}}async function m2({nodesToRemove:n=[],edgesToRemove:r=[],nodes:o,edges:l,onBeforeDelete:s}){const c=new Set(n.map(v=>v.id)),u=[];for(const v of o){if(v.deletable===!1)continue;const x=c.has(v.id),w=!x&&v.parentId&&u.find(C=>C.id===v.parentId);(x||w)&&u.push(v)}const d=new Set(r.map(v=>v.id)),f=l.filter(v=>v.deletable!==!1),g=f2(u,f);for(const v of f)d.has(v.id)&&!g.find(w=>w.id===v.id)&&g.push(v);if(!s)return{edges:g,nodes:u};const h=await s({nodes:u,edges:g});return typeof h=="boolean"?h?{edges:g,nodes:u}:{edges:[],nodes:[]}:h}const ri=(n,r=0,o=1)=>Math.min(Math.max(n,r),o),yr=(n={x:0,y:0},r,o)=>({x:ri(n.x,r[0][0],r[1][0]-((o==null?void 0:o.width)??0)),y:ri(n.y,r[0][1],r[1][1]-((o==null?void 0:o.height)??0))});function M0(n,r,o){const{width:l,height:s}=wt(o),{x:c,y:u}=o.internals.positionAbsolute;return yr(n,[[c,u],[c+l,u+s]],r)}const op=(n,r,o)=>n<r?ri(Math.abs(n-r),1,r)/r:n>o?-ri(Math.abs(n-o),1,r)/r:0,Jc=(n,r,o=15,l=40)=>{const s=op(n.x,l,r.width-l)*o,c=op(n.y,l,r.height-l)*o;return[s,c]},vs=(n,r)=>({x:Math.min(n.x,r.x),y:Math.min(n.y,r.y),x2:Math.max(n.x2,r.x2),y2:Math.max(n.y2,r.y2)}),Oc=({x:n,y:r,width:o,height:l})=>({x:n,y:r,x2:n+o,y2:r+l}),xs=({x:n,y:r,x2:o,y2:l})=>({x:n,y:r,width:o-n,height:l-r}),ii=(n,r=[0,0])=>{var s,c;const{x:o,y:l}=Kc(n)?n.internals.positionAbsolute:vo(n,r);return{x:o,y:l,width:((s=n.measured)==null?void 0:s.width)??n.width??n.initialWidth??0,height:((c=n.measured)==null?void 0:c.height)??n.height??n.initialHeight??0}},us=(n,r=[0,0])=>{var s,c;const{x:o,y:l}=Kc(n)?n.internals.positionAbsolute:vo(n,r);return{x:o,y:l,x2:o+(((s=n.measured)==null?void 0:s.width)??n.width??n.initialWidth??0),y2:l+(((c=n.measured)==null?void 0:c.height)??n.height??n.initialHeight??0)}},T0=(n,r)=>xs(vs(Oc(n),Oc(r))),fo=(n,r)=>{const o=Math.max(0,Math.min(n.x+n.width,r.x+r.width)-Math.max(n.x,r.x)),l=Math.max(0,Math.min(n.y+n.height,r.y+r.height)-Math.max(n.y,r.y));return Math.ceil(o*l)},lp=n=>Qn(n.width)&&Qn(n.height)&&Qn(n.x)&&Qn(n.y),Qn=n=>!isNaN(n)&&isFinite(n),L0=(n,r)=>(o,l)=>{},wo=(n,r=[1,1])=>({x:r[0]*Math.round(n.x/r[0]),y:r[1]*Math.round(n.y/r[1])}),ai=({x:n,y:r},[o,l,s],c=!1,u=[1,1])=>{const d={x:(n-o)/s,y:(r-l)/s};return c?wo(d,u):d},oi=({x:n,y:r},[o,l,s])=>({x:n*s+o,y:r*s+l});function Gr(n,r){if(typeof n=="number")return Math.floor((r-r/(1+n))*.5);if(typeof n=="string"&&n.endsWith("px")){const o=parseFloat(n);if(!Number.isNaN(o))return Math.floor(o)}if(typeof n=="string"&&n.endsWith("%")){const o=parseFloat(n);if(!Number.isNaN(o))return Math.floor(r*o*.01)}return console.error(`The padding value "${n}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function g2(n,r,o){if(typeof n=="string"||typeof n=="number"){const l=Gr(n,o),s=Gr(n,r);return{top:l,right:s,bottom:l,left:s,x:s*2,y:l*2}}if(typeof n=="object"){const l=Gr(n.top??n.y??0,o),s=Gr(n.bottom??n.y??0,o),c=Gr(n.left??n.x??0,r),u=Gr(n.right??n.x??0,r);return{top:l,right:u,bottom:s,left:c,x:c+u,y:l+s}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function y2(n,r,o,l,s,c){const{x:u,y:d}=oi(n,[r,o,l]),{x:f,y:p}=oi({x:n.x+n.width,y:n.y+n.height},[r,o,l]),g=s-f,h=c-p;return{left:Math.floor(u),top:Math.floor(d),right:Math.floor(g),bottom:Math.floor(h)}}const ed=(n,r,o,l,s,c)=>{const u=g2(c,r,o),d=(r-u.x)/n.width,f=(o-u.y)/n.height,p=Math.min(d,f),g=ri(p,l,s),h=n.x+n.width/2,v=n.y+n.height/2,x=r/2-h*g,w=o/2-v*g,C=y2(n,x,w,g,r,o),S={left:Math.min(C.left-u.left,0),top:Math.min(C.top-u.top,0),right:Math.min(C.right-u.right,0),bottom:Math.min(C.bottom-u.bottom,0)};return{x:x-S.left+S.right,y:w-S.top+S.bottom,zoom:g}},ho=()=>{var n;return typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)==null?void 0:n.indexOf("Mac"))>=0};function vr(n){return n!=null&&n!=="parent"}function wt(n){var r,o;return{width:((r=n.measured)==null?void 0:r.width)??n.width??n.initialWidth??0,height:((o=n.measured)==null?void 0:o.height)??n.height??n.initialHeight??0}}function I0(n){var r,o;return(((r=n.measured)==null?void 0:r.width)??n.width??n.initialWidth)!==void 0&&(((o=n.measured)==null?void 0:o.height)??n.height??n.initialHeight)!==void 0}function A0(n,r={width:0,height:0},o,l,s){const c={...n},u=l.get(o);if(u){const d=u.origin||s;c.x+=u.internals.positionAbsolute.x-(r.width??0)*d[0],c.y+=u.internals.positionAbsolute.y-(r.height??0)*d[1]}return c}function sp(n,r){if(n.size!==r.size)return!1;for(const o of n)if(!r.has(o))return!1;return!0}function v2(){let n,r;return{promise:new Promise((l,s)=>{n=l,r=s}),resolve:n,reject:r}}function x2(n){return{...k0,...n||{}}}function io(n,{snapGrid:r=[0,0],snapToGrid:o=!1,transform:l,containerBounds:s}){const{x:c,y:u}=Un(n),d=ai({x:c-((s==null?void 0:s.left)??0),y:u-((s==null?void 0:s.top)??0)},l),{x:f,y:p}=o?wo(d,r):d;return{xSnapped:f,ySnapped:p,...d}}const nd=n=>({width:n.offsetWidth,height:n.offsetHeight}),R0=n=>{var r;return((r=n==null?void 0:n.getRootNode)==null?void 0:r.call(n))||(window==null?void 0:window.document)},w2=["INPUT","SELECT","TEXTAREA"];function z0(n){var l,s;const r=((s=(l=n.composedPath)==null?void 0:l.call(n))==null?void 0:s[0])||n.target;return(r==null?void 0:r.nodeType)!==1?!1:w2.includes(r.nodeName)||r.hasAttribute("contenteditable")||!!r.closest(".nokey")}const D0=n=>"clientX"in n,Un=(n,r)=>{var c,u;const o=D0(n),l=o?n.clientX:(c=n.touches)==null?void 0:c[0].clientX,s=o?n.clientY:(u=n.touches)==null?void 0:u[0].clientY;return{x:l-((r==null?void 0:r.left)??0),y:s-((r==null?void 0:r.top)??0)}},ap=(n,r,o,l,s)=>{const c=r.querySelectorAll(`.${n}`);return!c||!c.length?null:Array.from(c).map(u=>{const d=u.getBoundingClientRect();return{id:u.getAttribute("data-handleid"),type:n,nodeId:s,position:u.getAttribute("data-handlepos"),x:(d.left-o.left)/l,y:(d.top-o.top)/l,...nd(u)}})};function O0({sourceX:n,sourceY:r,targetX:o,targetY:l,sourceControlX:s,sourceControlY:c,targetControlX:u,targetControlY:d}){const f=n*.125+s*.375+u*.375+o*.125,p=r*.125+c*.375+d*.375+l*.125,g=Math.abs(f-n),h=Math.abs(p-r);return[f,p,g,h]}function Ql(n,r){return n>=0?.5*n:r*25*Math.sqrt(-n)}function up({pos:n,x1:r,y1:o,x2:l,y2:s,c}){switch(n){case we.Left:return[r-Ql(r-l,c),o];case we.Right:return[r+Ql(l-r,c),o];case we.Top:return[r,o-Ql(o-s,c)];case we.Bottom:return[r,o+Ql(s-o,c)]}}function F0({sourceX:n,sourceY:r,sourcePosition:o=we.Bottom,targetX:l,targetY:s,targetPosition:c=we.Top,curvature:u=.25}){const[d,f]=up({pos:o,x1:n,y1:r,x2:l,y2:s,c:u}),[p,g]=up({pos:c,x1:l,y1:s,x2:n,y2:r,c:u}),[h,v,x,w]=O0({sourceX:n,sourceY:r,targetX:l,targetY:s,sourceControlX:d,sourceControlY:f,targetControlX:p,targetControlY:g});return[`M${n},${r} C${d},${f} ${p},${g} ${l},${s}`,h,v,x,w]}function j0({sourceX:n,sourceY:r,targetX:o,targetY:l}){const s=Math.abs(o-n)/2,c=o<n?o+s:o-s,u=Math.abs(l-r)/2,d=l<r?l+u:l-u;return[c,d,s,u]}function S2({sourceNode:n,targetNode:r,selected:o=!1,zIndex:l=0,elevateOnSelect:s=!1,zIndexMode:c="basic"}){if(c==="manual")return l;const u=s&&o?l+1e3:l,d=Math.max(n.parentId||s&&n.selected?n.internals.z:0,r.parentId||s&&r.selected?r.internals.z:0);return u+d}function E2({sourceNode:n,targetNode:r,width:o,height:l,transform:s}){const c=vs(us(n),us(r));c.x===c.x2&&(c.x2+=1),c.y===c.y2&&(c.y2+=1);const u={x:-s[0]/s[2],y:-s[1]/s[2],width:o/s[2],height:l/s[2]};return fo(u,xs(c))>0}const _2=({source:n,sourceHandle:r,target:o,targetHandle:l})=>`xy-edge__${n}${r||""}-${o}${l||""}`,k2=(n,r)=>r.some(o=>o.source===n.source&&o.target===n.target&&(o.sourceHandle===n.sourceHandle||!o.sourceHandle&&!n.sourceHandle)&&(o.targetHandle===n.targetHandle||!o.targetHandle&&!n.targetHandle)),C2=(n,r,o={})=>{var c;if(!n.source||!n.target)return(c=o.onError)==null||c.call(o,"006",qn.error006()),r;const l=o.getEdgeId||_2;let s;return N0(n)?s={...n}:s={...n,id:l(n)},k2(s,r)?r:(s.sourceHandle===null&&delete s.sourceHandle,s.targetHandle===null&&delete s.targetHandle,r.concat(s))};function H0({sourceX:n,sourceY:r,targetX:o,targetY:l}){const[s,c,u,d]=j0({sourceX:n,sourceY:r,targetX:o,targetY:l});return[`M ${n},${r}L ${o},${l}`,s,c,u,d]}const cp={[we.Left]:{x:-1,y:0},[we.Right]:{x:1,y:0},[we.Top]:{x:0,y:-1},[we.Bottom]:{x:0,y:1}},b2=({source:n,sourcePosition:r=we.Bottom,target:o})=>r===we.Left||r===we.Right?n.x<o.x?{x:1,y:0}:{x:-1,y:0}:n.y<o.y?{x:0,y:1}:{x:0,y:-1},dp=(n,r)=>Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2));function N2({source:n,sourcePosition:r=we.Bottom,target:o,targetPosition:l=we.Top,center:s,offset:c,stepPosition:u}){const d=cp[r],f=cp[l],p={x:n.x+d.x*c,y:n.y+d.y*c},g={x:o.x+f.x*c,y:o.y+f.y*c},h=b2({source:p,sourcePosition:r,target:g}),v=h.x!==0?"x":"y",x=h[v];let w=[],C,S;const _={x:0,y:0},N={x:0,y:0},[,,E,b]=j0({sourceX:n.x,sourceY:n.y,targetX:o.x,targetY:o.y});if(d[v]*f[v]===-1){v==="x"?(C=s.x??p.x+(g.x-p.x)*u,S=s.y??(p.y+g.y)/2):(C=s.x??(p.x+g.x)/2,S=s.y??p.y+(g.y-p.y)*u);const P=[{x:C,y:p.y},{x:C,y:g.y}],A=[{x:p.x,y:S},{x:g.x,y:S}];d[v]===x?w=v==="x"?P:A:w=v==="x"?A:P}else{const P=[{x:p.x,y:g.y}],A=[{x:g.x,y:p.y}];if(v==="x"?w=d.x===x?A:P:w=d.y===x?P:A,r===l){const T=Math.abs(n[v]-o[v]);if(T<=c){const Y=Math.min(c-1,c-T);d[v]===x?_[v]=(p[v]>n[v]?-1:1)*Y:N[v]=(g[v]>o[v]?-1:1)*Y}}if(r!==l){const T=v==="x"?"y":"x",Y=d[v]===f[T],U=p[T]>g[T],G=p[T]<g[T];(d[v]===1&&(!Y&&U||Y&&G)||d[v]!==1&&(!Y&&G||Y&&U))&&(w=v==="x"?P:A)}const $={x:p.x+_.x,y:p.y+_.y},I={x:g.x+N.x,y:g.y+N.y},D=Math.max(Math.abs($.x-w[0].x),Math.abs(I.x-w[0].x)),J=Math.max(Math.abs($.y-w[0].y),Math.abs(I.y-w[0].y));D>=J?(C=($.x+I.x)/2,S=w[0].y):(C=w[0].x,S=($.y+I.y)/2)}const R={x:p.x+_.x,y:p.y+_.y},L={x:g.x+N.x,y:g.y+N.y};return[[n,...R.x!==w[0].x||R.y!==w[0].y?[R]:[],...w,...L.x!==w[w.length-1].x||L.y!==w[w.length-1].y?[L]:[],o],C,S,E,b]}function P2(n,r,o,l){const s=Math.min(dp(n,r)/2,dp(r,o)/2,l),{x:c,y:u}=r;if(n.x===c&&c===o.x||n.y===u&&u===o.y)return`L${c} ${u}`;if(n.y===u){const p=n.x<o.x?-1:1,g=n.y<o.y?1:-1;return`L ${c+s*p},${u}Q ${c},${u} ${c},${u+s*g}`}const d=n.x<o.x?1:-1,f=n.y<o.y?-1:1;return`L ${c},${u+s*f}Q ${c},${u} ${c+s*d},${u}`}function Fc({sourceX:n,sourceY:r,sourcePosition:o=we.Bottom,targetX:l,targetY:s,targetPosition:c=we.Top,borderRadius:u=5,centerX:d,centerY:f,offset:p=20,stepPosition:g=.5}){const[h,v,x,w,C]=N2({source:{x:n,y:r},sourcePosition:o,target:{x:l,y:s},targetPosition:c,center:{x:d,y:f},offset:p,stepPosition:g});let S=`M${h[0].x} ${h[0].y}`;for(let _=1;_<h.length-1;_++)S+=P2(h[_-1],h[_],h[_+1],u);return S+=`L${h[h.length-1].x} ${h[h.length-1].y}`,[S,v,x,w,C]}function fp(n){var r;return n&&!!(n.internals.handleBounds||(r=n.handles)!=null&&r.length)&&!!(n.measured.width||n.width||n.initialWidth)}function M2(n){var h;const{sourceNode:r,targetNode:o}=n;if(!fp(r)||!fp(o))return null;const l=r.internals.handleBounds||hp(r.handles),s=o.internals.handleBounds||hp(o.handles),c=pp((l==null?void 0:l.source)??[],n.sourceHandle),u=pp(n.connectionMode===ti.Strict?(s==null?void 0:s.target)??[]:((s==null?void 0:s.target)??[]).concat((s==null?void 0:s.source)??[]),n.targetHandle);if(!c||!u)return(h=n.onError)==null||h.call(n,"008",qn.error008(c?"target":"source",{id:n.id,sourceHandle:n.sourceHandle,targetHandle:n.targetHandle})),null;const d=(c==null?void 0:c.position)||we.Bottom,f=(u==null?void 0:u.position)||we.Top,p=xr(r,c,d),g=xr(o,u,f);return{sourceX:p.x,sourceY:p.y,targetX:g.x,targetY:g.y,sourcePosition:d,targetPosition:f}}function hp(n){if(!n)return null;const r=[],o=[];for(const l of n)l.width=l.width??1,l.height=l.height??1,l.type==="source"?r.push(l):l.type==="target"&&o.push(l);return{source:r,target:o}}function xr(n,r,o=we.Left,l=!1){const s=((r==null?void 0:r.x)??0)+n.internals.positionAbsolute.x,c=((r==null?void 0:r.y)??0)+n.internals.positionAbsolute.y,{width:u,height:d}=r??wt(n);if(l)return{x:s+u/2,y:c+d/2};switch((r==null?void 0:r.position)??o){case we.Top:return{x:s+u/2,y:c};case we.Right:return{x:s+u,y:c+d/2};case we.Bottom:return{x:s+u/2,y:c+d};case we.Left:return{x:s,y:c+d/2}}}function pp(n,r){return n&&(r?n.find(o=>o.id===r):n[0])||null}function jc(n,r){return n?typeof n=="string"?n:`${r?`${r}__`:""}${Object.keys(n).sort().map(l=>`${l}=${n[l]}`).join("&")}`:""}function T2(n,{id:r,defaultColor:o,defaultMarkerStart:l,defaultMarkerEnd:s}){const c=new Set;return n.reduce((u,d)=>([d.markerStart||l,d.markerEnd||s].forEach(f=>{if(f&&typeof f=="object"){const p=jc(f,r);c.has(p)||(u.push({id:p,color:f.color||o,...f}),c.add(p))}}),u),[]).sort((u,d)=>u.id.localeCompare(d.id))}const $0=1e3,L2=10,td={nodeOrigin:[0,0],nodeExtent:uo,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},I2={...td,checkEquality:!0};function rd(n,r){const o={...n};for(const l in r)r[l]!==void 0&&(o[l]=r[l]);return o}function A2(n,r,o){const l=rd(td,o);for(const s of n.values())if(s.parentId)od(s,n,r,l);else{const c=vo(s,l.nodeOrigin),u=vr(s.extent)?s.extent:l.nodeExtent,d=yr(c,u,wt(s));s.internals.positionAbsolute=d}}function R2(n,r){if(!n.handles)return n.measured?r==null?void 0:r.internals.handleBounds:void 0;const o=[],l=[];for(const s of n.handles){const c={id:s.id,width:s.width??1,height:s.height??1,nodeId:n.id,x:s.x,y:s.y,position:s.position,type:s.type};s.type==="source"?o.push(c):s.type==="target"&&l.push(c)}return{source:o,target:l}}function id(n){return n==="manual"}function Hc(n,r,o,l={}){var g,h;const s=rd(I2,l),c={i:0},u=new Map(r),d=s!=null&&s.elevateNodesOnSelect&&!id(s.zIndexMode)?$0:0;let f=n.length>0,p=!1;r.clear(),o.clear();for(const v of n){let x=u.get(v.id);if(s.checkEquality&&v===(x==null?void 0:x.internals.userNode))r.set(v.id,x);else{const w=vo(v,s.nodeOrigin),C=vr(v.extent)?v.extent:s.nodeExtent,S=yr(w,C,wt(v));x={...s.defaults,...v,measured:{width:(g=v.measured)==null?void 0:g.width,height:(h=v.measured)==null?void 0:h.height},internals:{positionAbsolute:S,handleBounds:R2(v,x),z:B0(v,d,s.zIndexMode),userNode:v}},r.set(v.id,x)}(x.measured===void 0||x.measured.width===void 0||x.measured.height===void 0)&&!x.hidden&&(f=!1),v.parentId&&od(x,r,o,l,c),p||(p=v.selected??!1)}return{nodesInitialized:f,hasSelectedNodes:p}}function z2(n,r){if(!n.parentId)return;const o=r.get(n.parentId);o?o.set(n.id,n):r.set(n.parentId,new Map([[n.id,n]]))}function od(n,r,o,l,s){const{elevateNodesOnSelect:c,nodeOrigin:u,nodeExtent:d,zIndexMode:f}=rd(td,l),p=n.parentId,g=r.get(p);if(!g){console.warn(`Parent node ${p} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}z2(n,o),s&&!g.parentId&&g.internals.rootParentIndex===void 0&&f==="auto"&&(g.internals.rootParentIndex=++s.i,g.internals.z=g.internals.z+s.i*L2),s&&g.internals.rootParentIndex!==void 0&&(s.i=g.internals.rootParentIndex);const h=c&&!id(f)?$0:0,{x:v,y:x,z:w}=D2(n,g,u,d,h,f),{positionAbsolute:C}=n.internals,S=v!==C.x||x!==C.y;(S||w!==n.internals.z)&&r.set(n.id,{...n,internals:{...n.internals,positionAbsolute:S?{x:v,y:x}:C,z:w}})}function B0(n,r,o){const l=Qn(n.zIndex)?n.zIndex:0;return id(o)?l:l+(n.selected?r:0)}function D2(n,r,o,l,s,c){const{x:u,y:d}=r.internals.positionAbsolute,f=wt(n),p=vo(n,o),g=vr(n.extent)?yr(p,n.extent,f):p;let h=yr({x:u+g.x,y:d+g.y},l,f);n.extent==="parent"&&(h=M0(h,f,r));const v=B0(n,s,c),x=r.internals.z??0;return{x:h.x,y:h.y,z:x>=v?x+1:v}}function ld(n,r,o,l=[0,0]){var u;const s=[],c=new Map;for(const d of n){const f=r.get(d.parentId);if(!f)continue;const p=((u=c.get(d.parentId))==null?void 0:u.expandedRect)??ii(f),g=T0(p,d.rect);c.set(d.parentId,{expandedRect:g,parent:f})}return c.size>0&&c.forEach(({expandedRect:d,parent:f},p)=>{var E;const g=f.internals.positionAbsolute,h=wt(f),v=f.origin??l,x=d.x<g.x?Math.round(Math.abs(g.x-d.x)):0,w=d.y<g.y?Math.round(Math.abs(g.y-d.y)):0,C=Math.max(h.width,Math.round(d.width)),S=Math.max(h.height,Math.round(d.height)),_=(C-h.width)*v[0],N=(S-h.height)*v[1];(x>0||w>0||_||N)&&(s.push({id:p,type:"position",position:{x:f.position.x-x+_,y:f.position.y-w+N}}),(E=o.get(p))==null||E.forEach(b=>{n.some(R=>R.id===b.id)||s.push({id:b.id,type:"position",position:{x:b.position.x+x,y:b.position.y+w}})})),(h.width<d.width||h.height<d.height||x||w)&&s.push({id:p,type:"dimensions",setAttributes:!0,dimensions:{width:C+(x?v[0]*x-_:0),height:S+(w?v[1]*w-N:0)}})}),s}function O2(n,r,o,l,s,c,u){const d=l==null?void 0:l.querySelector(".xyflow__viewport");let f=!1;if(!d)return{changes:[],updatedInternals:f};const p=[],g=window.getComputedStyle(d),{m22:h}=new window.DOMMatrixReadOnly(g.transform),v=[];for(const x of n.values()){const w=r.get(x.id);if(!w)continue;if(w.hidden){r.set(w.id,{...w,internals:{...w.internals,handleBounds:void 0}}),f=!0;continue}const C=nd(x.nodeElement),S=w.measured.width!==C.width||w.measured.height!==C.height;if(!!(C.width&&C.height&&(S||!w.internals.handleBounds||x.force))){const N=x.nodeElement.getBoundingClientRect(),E=vr(w.extent)?w.extent:c;let{positionAbsolute:b}=w.internals;w.parentId&&w.extent==="parent"?b=M0(b,C,r.get(w.parentId)):E&&(b=yr(b,E,C));const R={...w,measured:C,internals:{...w.internals,positionAbsolute:b,handleBounds:{source:ap("source",x.nodeElement,N,h,w.id),target:ap("target",x.nodeElement,N,h,w.id)}}};r.set(w.id,R),w.parentId&&od(R,r,o,{nodeOrigin:s,zIndexMode:u}),f=!0,S&&(p.push({id:w.id,type:"dimensions",dimensions:C}),w.expandParent&&w.parentId&&v.push({id:w.id,parentId:w.parentId,rect:ii(R,s)}))}}if(v.length>0){const x=ld(v,r,o,s);p.push(...x)}return{changes:p,updatedInternals:f}}async function F2({delta:n,panZoom:r,transform:o,translateExtent:l,width:s,height:c}){if(!r||!n.x&&!n.y)return!1;const u=await r.setViewportConstrained({x:o[0]+n.x,y:o[1]+n.y,zoom:o[2]},[[0,0],[s,c]],l);return!!u&&(u.x!==o[0]||u.y!==o[1]||u.k!==o[2])}function mp(n,r,o,l,s,c){let u=s;const d=l.get(u)||new Map;l.set(u,d.set(o,r)),u=`${s}-${n}`;const f=l.get(u)||new Map;if(l.set(u,f.set(o,r)),c){u=`${s}-${n}-${c}`;const p=l.get(u)||new Map;l.set(u,p.set(o,r))}}function V0(n,r,o){n.clear(),r.clear();for(const l of o){const{source:s,target:c,sourceHandle:u=null,targetHandle:d=null}=l,f={edgeId:l.id,source:s,target:c,sourceHandle:u,targetHandle:d},p=`${s}-${u}--${c}-${d}`,g=`${c}-${d}--${s}-${u}`;mp("source",f,g,n,s,u),mp("target",f,p,n,c,d),r.set(l.id,l)}}function W0(n,r){if(!n.parentId)return!1;const o=r.get(n.parentId);return o?o.selected?!0:W0(o,r):!1}function gp(n,r,o){var s;let l=n;do{if((s=l==null?void 0:l.matches)!=null&&s.call(l,r))return!0;if(l===o)return!1;l=l==null?void 0:l.parentElement}while(l);return!1}function j2(n,r,o,l){const s=new Map;for(const[c,u]of n)if((u.selected||u.id===l)&&(!u.parentId||!W0(u,n))&&(u.draggable||r&&typeof u.draggable>"u")){const d=n.get(c);d&&s.set(c,{id:c,position:d.position||{x:0,y:0},distance:{x:o.x-d.internals.positionAbsolute.x,y:o.y-d.internals.positionAbsolute.y},extent:d.extent,parentId:d.parentId,origin:d.origin,expandParent:d.expandParent,internals:{positionAbsolute:d.internals.positionAbsolute||{x:0,y:0}},measured:{width:d.measured.width??0,height:d.measured.height??0}})}return s}function Nu({nodeId:n,dragItems:r,nodeLookup:o,dragging:l=!0}){var u,d,f;const s=[];for(const[p,g]of r){const h=(u=o.get(p))==null?void 0:u.internals.userNode;h&&s.push({...h,position:g.position,dragging:l})}if(!n)return[s[0],s];const c=(d=o.get(n))==null?void 0:d.internals.userNode;return[c?{...c,position:((f=r.get(n))==null?void 0:f.position)||c.position,dragging:l}:s[0],s]}function H2({dragItems:n,snapGrid:r,x:o,y:l}){const s=n.values().next().value;if(!s)return null;const c={x:o-s.distance.x,y:l-s.distance.y},u=wo(c,r);return{x:u.x-c.x,y:u.y-c.y}}function $2({onNodeMouseDown:n,getStoreItems:r,onDragStart:o,onDrag:l,onDragStop:s}){let c={x:null,y:null},u=0,d=new Map,f=!1,p={x:0,y:0},g=null,h=!1,v=null,x=!1,w=!1,C=null;function S({noDragClassName:N,handleSelector:E,domNode:b,isSelectable:R,nodeId:L,nodeClickDistance:F=0}){v=Nn(b);function P({x:D,y:J}){const{nodeLookup:T,nodeExtent:Y,snapGrid:U,snapToGrid:G,nodeOrigin:W,onNodeDrag:B,onSelectionDrag:X,onError:M,updateNodePositions:j}=r();c={x:D,y:J};let O=!1;const Q=d.size>1,K=Q&&Y?Oc(xo(d)):null,ie=Q&&G?H2({dragItems:d,snapGrid:U,x:D,y:J}):null;for(const[le,Z]of d){if(!T.has(le))continue;let oe={x:D-Z.distance.x,y:J-Z.distance.y};G&&(oe=ie?{x:Math.round(oe.x+ie.x),y:Math.round(oe.y+ie.y)}:wo(oe,U));let fe=null;if(Q&&Y&&!Z.extent&&K){const{positionAbsolute:de}=Z.internals,_e=de.x-K.x+Y[0][0],be=de.x+Z.measured.width-K.x2+Y[1][0],Ne=de.y-K.y+Y[0][1],Ae=de.y+Z.measured.height-K.y2+Y[1][1];fe=[[_e,Ne],[be,Ae]]}const{position:xe,positionAbsolute:he}=P0({nodeId:le,nextPosition:oe,nodeLookup:T,nodeExtent:fe||Y,nodeOrigin:W,onError:M});O=O||Z.position.x!==xe.x||Z.position.y!==xe.y,Z.position=xe,Z.internals.positionAbsolute=he}if(w=w||O,!!O&&(j(d,!0),C&&(l||B||!L&&X))){const[le,Z]=Nu({nodeId:L,dragItems:d,nodeLookup:T});l==null||l(C,d,le,Z),B==null||B(C,le,Z),L||X==null||X(C,Z)}}async function A(){if(!g)return;const{transform:D,panBy:J,autoPanSpeed:T,autoPanOnNodeDrag:Y}=r();if(!Y){f=!1,cancelAnimationFrame(u);return}const[U,G]=Jc(p,g,T);(U!==0||G!==0)&&(c.x=(c.x??0)-U/D[2],c.y=(c.y??0)-G/D[2],await J({x:U,y:G})&&P(c)),u=requestAnimationFrame(A)}function $(D){var Q;const{nodeLookup:J,multiSelectionActive:T,nodesDraggable:Y,transform:U,snapGrid:G,snapToGrid:W,selectNodesOnDrag:B,onNodeDragStart:X,onSelectionDragStart:M,unselectNodesAndEdges:j}=r();h=!0,(!B||!R)&&!T&&L&&((Q=J.get(L))!=null&&Q.selected||j()),R&&B&&L&&(n==null||n(L));const O=io(D.sourceEvent,{transform:U,snapGrid:G,snapToGrid:W,containerBounds:g});if(c=O,d=j2(J,Y,O,L),d.size>0&&(o||X||!L&&M)){const[K,ie]=Nu({nodeId:L,dragItems:d,nodeLookup:J});o==null||o(D.sourceEvent,d,K,ie),X==null||X(D.sourceEvent,K,ie),L||M==null||M(D.sourceEvent,ie)}}const I=s0().clickDistance(F).on("start",D=>{const{domNode:J,nodeDragThreshold:T,transform:Y,snapGrid:U,snapToGrid:G}=r();g=(J==null?void 0:J.getBoundingClientRect())||null,x=!1,w=!1,C=D.sourceEvent,T===0&&$(D),c=io(D.sourceEvent,{transform:Y,snapGrid:U,snapToGrid:G,containerBounds:g}),p=Un(D.sourceEvent,g)}).on("drag",D=>{const{autoPanOnNodeDrag:J,transform:T,snapGrid:Y,snapToGrid:U,nodeDragThreshold:G,nodeLookup:W}=r(),B=io(D.sourceEvent,{transform:T,snapGrid:Y,snapToGrid:U,containerBounds:g});if(C=D.sourceEvent,(D.sourceEvent.type==="touchmove"&&D.sourceEvent.touches.length>1||L&&!W.has(L))&&(x=!0),!x){if(!f&&J&&h&&(f=!0,A()),!h){const X=Un(D.sourceEvent,g),M=X.x-p.x,j=X.y-p.y;Math.sqrt(M*M+j*j)>G&&$(D)}(c.x!==B.xSnapped||c.y!==B.ySnapped)&&d&&h&&(p=Un(D.sourceEvent,g),P(B))}}).on("end",D=>{if(!h||x){x&&d.size>0&&r().updateNodePositions(d,!1);return}if(f=!1,h=!1,cancelAnimationFrame(u),d.size>0){const{nodeLookup:J,updateNodePositions:T,onNodeDragStop:Y,onSelectionDragStop:U}=r();if(w&&(T(d,!1),w=!1),s||Y||!L&&U){const[G,W]=Nu({nodeId:L,dragItems:d,nodeLookup:J,dragging:!1});s==null||s(D.sourceEvent,d,G,W),Y==null||Y(D.sourceEvent,G,W),L||U==null||U(D.sourceEvent,W)}}}).filter(D=>{const J=D.target;return!D.button&&(!N||!gp(J,`.${N}`,b))&&(!E||gp(J,E,b))});v.call(I)}function _(){v==null||v.on(".drag",null)}return{update:S,destroy:_}}function B2(n,r,o){const l=[],s={x:n.x-o,y:n.y-o,width:o*2,height:o*2};for(const c of r.values())fo(s,ii(c))>0&&l.push(c);return l}const V2=250;function W2(n,r,o,l){var d,f;let s=[],c=1/0;const u=B2(n,o,r+V2);for(const p of u){const g=[...((d=p.internals.handleBounds)==null?void 0:d.source)??[],...((f=p.internals.handleBounds)==null?void 0:f.target)??[]];for(const h of g){if(l.nodeId===h.nodeId&&l.type===h.type&&l.id===h.id)continue;const{x:v,y:x}=xr(p,h,h.position,!0),w=Math.sqrt(Math.pow(v-n.x,2)+Math.pow(x-n.y,2));w>r||(w<c?(s=[{...h,x:v,y:x}],c=w):w===c&&s.push({...h,x:v,y:x}))}}if(!s.length)return null;if(s.length>1){const p=l.type==="source"?"target":"source";return s.find(g=>g.type===p)??s[0]}return s[0]}function Q0(n,r,o,l,s,c=!1){var p,g,h;const u=l.get(n);if(!u)return null;const d=s==="strict"?(p=u.internals.handleBounds)==null?void 0:p[r]:[...((g=u.internals.handleBounds)==null?void 0:g.source)??[],...((h=u.internals.handleBounds)==null?void 0:h.target)??[]],f=(o?d==null?void 0:d.find(v=>v.id===o):d==null?void 0:d[0])??null;return f&&c?{...f,...xr(u,f,f.position,!0)}:f}function U0(n,r){return n||(r!=null&&r.classList.contains("target")?"target":r!=null&&r.classList.contains("source")?"source":null)}function Q2(n,r){let o=null;return r?o=!0:n&&!r&&(o=!1),o}const q0=()=>!0;function U2(n,{connectionMode:r,connectionRadius:o,handleId:l,nodeId:s,edgeUpdaterType:c,isTarget:u,domNode:d,nodeLookup:f,lib:p,autoPanOnConnect:g,flowId:h,panBy:v,cancelConnection:x,onConnectStart:w,onConnect:C,onConnectEnd:S,isValidConnection:_=q0,onReconnectEnd:N,updateConnection:E,getTransform:b,getFromHandle:R,autoPanSpeed:L,dragThreshold:F=1,handleDomNode:P}){const A=R0(n.target);let $=0,I;const{x:D,y:J}=Un(n),T=U0(c,P),Y=d==null?void 0:d.getBoundingClientRect();let U=!1;if(!Y||!T)return;const G=Q0(s,T,l,f,r);if(!G)return;let W=Un(n,Y),B=!1,X=null,M=!1,j=null;function O(){if(!g||!Y)return;const[xe,he]=Jc(W,Y,L);v({x:xe,y:he}),$=requestAnimationFrame(O)}const Q={...G,nodeId:s,type:T,position:G.position},K=f.get(s);let le={inProgress:!0,isValid:null,from:xr(K,Q,we.Left,!0),fromHandle:Q,fromPosition:Q.position,fromNode:K,to:W,toHandle:null,toPosition:ip[Q.position],toNode:null,pointer:W};function Z(){U=!0,E(le),w==null||w(n,{nodeId:s,handleId:l,handleType:T})}F===0&&Z();function oe(xe){if(!U){const{x:Ae,y:an}=Un(xe),dn=Ae-D,nn=an-J;if(!(dn*dn+nn*nn>F*F))return;Z()}if(!R()||!Q){fe(xe);return}const he=b();W=Un(xe,Y),I=W2(ai(W,he,!1,[1,1]),o,f,Q),B||(O(),B=!0);const de=Y0(xe,{handle:I,connectionMode:r,fromNodeId:s,fromHandleId:l,fromType:u?"target":"source",isValidConnection:_,doc:A,lib:p,flowId:h,nodeLookup:f});j=de.handleDomNode,X=de.connection,M=Q2(!!I,de.isValid);const _e=f.get(s),be=_e?xr(_e,Q,we.Left,!0):le.from,Ne={...le,from:be,isValid:M,to:de.toHandle&&M?oi({x:de.toHandle.x,y:de.toHandle.y},he):W,toHandle:de.toHandle,toPosition:M&&de.toHandle?de.toHandle.position:ip[Q.position],toNode:de.toHandle?f.get(de.toHandle.nodeId):null,pointer:W};E(Ne),le=Ne}function fe(xe){if(!("touches"in xe&&xe.touches.length>0)){if(U){(I||j)&&X&&M&&(C==null||C(X));const{inProgress:he,...de}=le,_e={...de,toPosition:le.toHandle?le.toPosition:null};S==null||S(xe,_e),c&&(N==null||N(xe,_e))}x(),cancelAnimationFrame($),B=!1,M=!1,X=null,j=null,A.removeEventListener("mousemove",oe),A.removeEventListener("mouseup",fe),A.removeEventListener("touchmove",oe),A.removeEventListener("touchend",fe)}}A.addEventListener("mousemove",oe),A.addEventListener("mouseup",fe),A.addEventListener("touchmove",oe),A.addEventListener("touchend",fe)}function Y0(n,{handle:r,connectionMode:o,fromNodeId:l,fromHandleId:s,fromType:c,doc:u,lib:d,flowId:f,isValidConnection:p=q0,nodeLookup:g}){const h=c==="target",v=r?u.querySelector(`.${d}-flow__handle[data-id="${f}-${r==null?void 0:r.nodeId}-${r==null?void 0:r.id}-${r==null?void 0:r.type}"]`):null,{x,y:w}=Un(n),C=u.elementFromPoint(x,w),S=C!=null&&C.classList.contains(`${d}-flow__handle`)?C:v,_={handleDomNode:S,isValid:!1,connection:null,toHandle:null};if(S){const N=U0(void 0,S),E=S.getAttribute("data-nodeid"),b=S.getAttribute("data-handleid"),R=S.classList.contains("connectable"),L=S.classList.contains("connectableend");if(!E||!N)return _;const F={source:h?E:l,sourceHandle:h?b:s,target:h?l:E,targetHandle:h?s:b};_.connection=F;const A=R&&L&&(o===ti.Strict?h&&N==="source"||!h&&N==="target":E!==l||b!==s);_.isValid=A&&p(F),_.toHandle=Q0(E,N,b,g,o,!0)}return _}const $c={onPointerDown:U2,isValid:Y0};function q2({domNode:n,panZoom:r,getTransform:o,getViewScale:l}){const s=Nn(n);function c({translateExtent:d,width:f,height:p,zoomStep:g=1,pannable:h=!0,zoomable:v=!0,inversePan:x=!1}){const w=E=>{if(E.sourceEvent.type!=="wheel"||!r)return;const b=o(),R=E.sourceEvent.ctrlKey&&ho()?10:1,L=-E.sourceEvent.deltaY*(E.sourceEvent.deltaMode===1?.05:E.sourceEvent.deltaMode?1:.002)*g,F=b[2]*Math.pow(2,L*R);r.scaleTo(F)};let C=[0,0];const S=E=>{(E.sourceEvent.type==="mousedown"||E.sourceEvent.type==="touchstart")&&(C=[E.sourceEvent.clientX??E.sourceEvent.touches[0].clientX,E.sourceEvent.clientY??E.sourceEvent.touches[0].clientY])},_=E=>{const b=o();if(E.sourceEvent.type!=="mousemove"&&E.sourceEvent.type!=="touchmove"||!r)return;const R=[E.sourceEvent.clientX??E.sourceEvent.touches[0].clientX,E.sourceEvent.clientY??E.sourceEvent.touches[0].clientY],L=[R[0]-C[0],R[1]-C[1]];C=R;const F=l()*Math.max(b[2],Math.log(b[2]))*(x?-1:1),P={x:b[0]-L[0]*F,y:b[1]-L[1]*F},A=[[0,0],[f,p]];r.setViewportConstrained({x:P.x,y:P.y,zoom:b[2]},A,d)},N=E0().on("start",S).on("zoom",h?_:null).on("zoom.wheel",v?w:null);s.call(N,{})}function u(){s.on("zoom",null)}return{update:c,destroy:u,pointer:Vn}}const ws=n=>({x:n.x,y:n.y,zoom:n.k}),Pu=({x:n,y:r,zoom:o})=>ys.translate(n,r).scale(o),Xr=(n,r)=>n.target.closest(`.${r}`),G0=(n,r)=>r===2&&Array.isArray(n)&&n.includes(2),Y2=n=>((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2,Mu=(n,r=0,o=Y2,l=()=>{})=>{const s=typeof r=="number"&&r>0;return s||l(),s?n.transition().duration(r).ease(o).on("end",l):n},X0=n=>{const r=n.ctrlKey&&ho()?10:1;return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*r};function G2({zoomPanValues:n,noWheelClassName:r,d3Selection:o,d3Zoom:l,panOnScrollMode:s,panOnScrollSpeed:c,zoomOnPinch:u,onPanZoomStart:d,onPanZoom:f,onPanZoomEnd:p}){return g=>{if(Xr(g,r))return g.ctrlKey&&g.preventDefault(),!1;g.preventDefault(),g.stopImmediatePropagation();const h=o.property("__zoom").k||1;if(g.ctrlKey&&u){const S=Vn(g),_=X0(g),N=h*Math.pow(2,_);l.scaleTo(o,N,S,g);return}const v=g.deltaMode===1?20:1;let x=s===pr.Vertical?0:g.deltaX*v,w=s===pr.Horizontal?0:g.deltaY*v;!ho()&&g.shiftKey&&s!==pr.Vertical&&(x=g.deltaY*v,w=0),l.translateBy(o,-(x/h)*c,-(w/h)*c,{internal:!0});const C=ws(o.property("__zoom"));clearTimeout(n.panScrollTimeout),n.isPanScrolling?(f==null||f(g,C),n.panScrollTimeout=setTimeout(()=>{p==null||p(g,C),n.isPanScrolling=!1},150)):(n.isPanScrolling=!0,d==null||d(g,C))}}function X2({noWheelClassName:n,preventScrolling:r,d3ZoomHandler:o}){return function(l,s){const c=l.type==="wheel",u=!r&&c&&!l.ctrlKey,d=Xr(l,n);if(l.ctrlKey&&c&&d&&l.preventDefault(),u||d)return null;l.preventDefault(),o.call(this,l,s)}}function K2({zoomPanValues:n,onDraggingChange:r,onPanZoomStart:o}){return l=>{var c,u,d;if((c=l.sourceEvent)!=null&&c.internal)return;const s=ws(l.transform);n.mouseButton=((u=l.sourceEvent)==null?void 0:u.button)||0,n.isZoomingOrPanning=!0,n.prevViewport=s,((d=l.sourceEvent)==null?void 0:d.type)==="mousedown"&&r(!0),o&&(o==null||o(l.sourceEvent,s))}}function Z2({zoomPanValues:n,panOnDrag:r,onPaneContextMenu:o,onTransformChange:l,onPanZoom:s}){return c=>{var u,d;n.usedRightMouseButton=!!(o&&G0(r,n.mouseButton??0)),(u=c.sourceEvent)!=null&&u.sync||l([c.transform.x,c.transform.y,c.transform.k]),s&&!((d=c.sourceEvent)!=null&&d.internal)&&(s==null||s(c.sourceEvent,ws(c.transform)))}}function J2({zoomPanValues:n,panOnDrag:r,panOnScroll:o,onDraggingChange:l,onPanZoomEnd:s,onPaneContextMenu:c}){return u=>{var d;if(!((d=u.sourceEvent)!=null&&d.internal)&&(n.isZoomingOrPanning=!1,c&&G0(r,n.mouseButton??0)&&!n.usedRightMouseButton&&u.sourceEvent&&c(u.sourceEvent),n.usedRightMouseButton=!1,l(!1),s)){const f=ws(u.transform);n.prevViewport=f,clearTimeout(n.timerId),n.timerId=setTimeout(()=>{s==null||s(u.sourceEvent,f)},o?150:0)}}}function eS({zoomActivationKeyPressed:n,zoomOnScroll:r,zoomOnPinch:o,panOnDrag:l,panOnScroll:s,zoomOnDoubleClick:c,userSelectionActive:u,noWheelClassName:d,noPanClassName:f,lib:p,connectionInProgress:g}){return h=>{var S;const v=n||r,x=o&&h.ctrlKey,w=h.type==="wheel";if(h.button===1&&h.type==="mousedown"&&(Xr(h,`${p}-flow__node`)||Xr(h,`${p}-flow__edge`)))return!0;if(!l&&!v&&!s&&!c&&!o||u||g&&!w||Xr(h,d)&&w||Xr(h,f)&&(!w||s&&w&&!n)||!o&&h.ctrlKey&&w)return!1;if(!o&&h.type==="touchstart"&&((S=h.touches)==null?void 0:S.length)>1)return h.preventDefault(),!1;if(!v&&!s&&!x&&w||!l&&(h.type==="mousedown"||h.type==="touchstart")||Array.isArray(l)&&!l.includes(h.button)&&h.type==="mousedown")return!1;const C=Array.isArray(l)&&l.includes(h.button)||!h.button||h.button<=1;return(!h.ctrlKey||w)&&C}}function nS({domNode:n,minZoom:r,maxZoom:o,translateExtent:l,viewport:s,onPanZoom:c,onPanZoomStart:u,onPanZoomEnd:d,onDraggingChange:f}){const p={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},g=n.getBoundingClientRect(),h=E0().scaleExtent([r,o]).translateExtent(l),v=Nn(n).call(h);N({x:s.x,y:s.y,zoom:ri(s.zoom,r,o)},[[0,0],[g.width,g.height]],l);const x=v.on("wheel.zoom"),w=v.on("dblclick.zoom");h.wheelDelta(X0);async function C(I,D){return v?new Promise(J=>{h==null||h.interpolate((D==null?void 0:D.interpolate)==="linear"?ro:Kl).transform(Mu(v,D==null?void 0:D.duration,D==null?void 0:D.ease,()=>J(!0)),I)}):!1}function S({noWheelClassName:I,noPanClassName:D,onPaneContextMenu:J,userSelectionActive:T,panOnScroll:Y,panOnDrag:U,panOnScrollMode:G,panOnScrollSpeed:W,preventScrolling:B,zoomOnPinch:X,zoomOnScroll:M,zoomOnDoubleClick:j,zoomActivationKeyPressed:O,lib:Q,onTransformChange:K,connectionInProgress:ie,paneClickDistance:le,selectionOnDrag:Z}){T&&!p.isZoomingOrPanning&&_();const oe=Y&&!O&&!T;h.clickDistance(Z?1/0:!Qn(le)||le<0?0:le);const fe=oe?G2({zoomPanValues:p,noWheelClassName:I,d3Selection:v,d3Zoom:h,panOnScrollMode:G,panOnScrollSpeed:W,zoomOnPinch:X,onPanZoomStart:u,onPanZoom:c,onPanZoomEnd:d}):X2({noWheelClassName:I,preventScrolling:B,d3ZoomHandler:x});v.on("wheel.zoom",fe,{passive:!1});const xe=K2({zoomPanValues:p,onDraggingChange:f,onPanZoomStart:u});h.on("start",xe);const he=Z2({zoomPanValues:p,panOnDrag:U,onPaneContextMenu:!!J,onPanZoom:c,onTransformChange:K});h.on("zoom",he);const de=J2({zoomPanValues:p,panOnDrag:U,panOnScroll:Y,onPaneContextMenu:J,onPanZoomEnd:d,onDraggingChange:f});h.on("end",de);const _e=eS({zoomActivationKeyPressed:O,panOnDrag:U,zoomOnScroll:M,panOnScroll:Y,zoomOnDoubleClick:j,zoomOnPinch:X,userSelectionActive:T,noPanClassName:D,noWheelClassName:I,lib:Q,connectionInProgress:ie});h.filter(_e),j?v.on("dblclick.zoom",w):v.on("dblclick.zoom",null)}function _(){h.on("zoom",null)}async function N(I,D,J){const T=Pu(I),Y=h==null?void 0:h.constrain()(T,D,J);return Y&&await C(Y),Y}async function E(I,D){const J=Pu(I);return await C(J,D),J}function b(I){if(v){const D=Pu(I),J=v.property("__zoom");(J.k!==I.zoom||J.x!==I.x||J.y!==I.y)&&(h==null||h.transform(v,D,null,{sync:!0}))}}function R(){const I=v?S0(v.node()):{x:0,y:0,k:1};return{x:I.x,y:I.y,zoom:I.k}}async function L(I,D){return v?new Promise(J=>{h==null||h.interpolate((D==null?void 0:D.interpolate)==="linear"?ro:Kl).scaleTo(Mu(v,D==null?void 0:D.duration,D==null?void 0:D.ease,()=>J(!0)),I)}):!1}async function F(I,D){return v?new Promise(J=>{h==null||h.interpolate((D==null?void 0:D.interpolate)==="linear"?ro:Kl).scaleBy(Mu(v,D==null?void 0:D.duration,D==null?void 0:D.ease,()=>J(!0)),I)}):!1}function P(I){h==null||h.scaleExtent(I)}function A(I){h==null||h.translateExtent(I)}function $(I){const D=!Qn(I)||I<0?0:I;h==null||h.clickDistance(D)}return{update:S,destroy:_,setViewport:E,setViewportConstrained:N,getViewport:R,scaleTo:L,scaleBy:F,setScaleExtent:P,setTranslateExtent:A,syncViewport:b,setClickDistance:$}}var li;(function(n){n.Line="line",n.Handle="handle"})(li||(li={}));function tS({width:n,prevWidth:r,height:o,prevHeight:l,affectsX:s,affectsY:c}){const u=n-r,d=o-l,f=[u>0?1:u<0?-1:0,d>0?1:d<0?-1:0];return u&&s&&(f[0]=f[0]*-1),d&&c&&(f[1]=f[1]*-1),f}function yp(n){const r=n.includes("right")||n.includes("left"),o=n.includes("bottom")||n.includes("top"),l=n.includes("left"),s=n.includes("top");return{isHorizontal:r,isVertical:o,affectsX:l,affectsY:s}}function Bt(n,r){return Math.max(0,r-n)}function Vt(n,r){return Math.max(0,n-r)}function Ul(n,r,o){return Math.max(0,r-n,n-o)}function vp(n,r){return n?!r:r}function rS(n,r,o,l,s,c,u,d){let{affectsX:f,affectsY:p}=r;const{isHorizontal:g,isVertical:h}=r,v=g&&h,{xSnapped:x,ySnapped:w}=o,{minWidth:C,maxWidth:S,minHeight:_,maxHeight:N}=l,{x:E,y:b,width:R,height:L,aspectRatio:F}=n;let P=Math.floor(g?x-n.pointerX:0),A=Math.floor(h?w-n.pointerY:0);const $=R+(f?-P:P),I=L+(p?-A:A),D=-c[0]*R,J=-c[1]*L;let T=Ul($,C,S),Y=Ul(I,_,N);if(u){let W=0,B=0;f&&P<0?W=Bt(E+P+D,u[0][0]):!f&&P>0&&(W=Vt(E+$+D,u[1][0])),p&&A<0?B=Bt(b+A+J,u[0][1]):!p&&A>0&&(B=Vt(b+I+J,u[1][1])),T=Math.max(T,W),Y=Math.max(Y,B)}if(d){let W=0,B=0;f&&P>0?W=Vt(E+P,d[0][0]):!f&&P<0&&(W=Bt(E+$,d[1][0])),p&&A>0?B=Vt(b+A,d[0][1]):!p&&A<0&&(B=Bt(b+I,d[1][1])),T=Math.max(T,W),Y=Math.max(Y,B)}if(s){if(g){const W=Ul($/F,_,N)*F;if(T=Math.max(T,W),u){let B=0;!f&&!p||f&&!p&&v?B=Vt(b+J+$/F,u[1][1])*F:B=Bt(b+J+(f?P:-P)/F,u[0][1])*F,T=Math.max(T,B)}if(d){let B=0;!f&&!p||f&&!p&&v?B=Bt(b+$/F,d[1][1])*F:B=Vt(b+(f?P:-P)/F,d[0][1])*F,T=Math.max(T,B)}}if(h){const W=Ul(I*F,C,S)/F;if(Y=Math.max(Y,W),u){let B=0;!f&&!p||p&&!f&&v?B=Vt(E+I*F+D,u[1][0])/F:B=Bt(E+(p?A:-A)*F+D,u[0][0])/F,Y=Math.max(Y,B)}if(d){let B=0;!f&&!p||p&&!f&&v?B=Bt(E+I*F,d[1][0])/F:B=Vt(E+(p?A:-A)*F,d[0][0])/F,Y=Math.max(Y,B)}}}A=A+(A<0?Y:-Y),P=P+(P<0?T:-T),s&&(v?$>I*F?A=(vp(f,p)?-P:P)/F:P=(vp(f,p)?-A:A)*F:g?(A=P/F,p=f):(P=A*F,f=p));const U=f?E+P:E,G=p?b+A:b;return{width:R+(f?-P:P),height:L+(p?-A:A),x:c[0]*P*(f?-1:1)+U,y:c[1]*A*(p?-1:1)+G}}const K0={width:0,height:0,x:0,y:0},iS={...K0,pointerX:0,pointerY:0,aspectRatio:1};function oS(n,r,o){const l=r.position.x+n.position.x,s=r.position.y+n.position.y,c=n.measured.width??0,u=n.measured.height??0,d=o[0]*c,f=o[1]*u;return[[l-d,s-f],[l+c-d,s+u-f]]}function lS({domNode:n,nodeId:r,getStoreItems:o,onChange:l,onEnd:s}){const c=Nn(n);let u={controlDirection:yp("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function d({controlPosition:p,boundaries:g,keepAspectRatio:h,resizeDirection:v,onResizeStart:x,onResize:w,onResizeEnd:C,shouldResize:S}){let _={...K0},N={...iS};u={boundaries:g,resizeDirection:v,keepAspectRatio:h,controlDirection:yp(p)};let E,b=null,R=[],L,F,P,A=!1;const $=s0().on("start",I=>{const{nodeLookup:D,transform:J,snapGrid:T,snapToGrid:Y,nodeOrigin:U,paneDomNode:G}=o();if(E=D.get(r),!E)return;b=(G==null?void 0:G.getBoundingClientRect())??null;const{xSnapped:W,ySnapped:B}=io(I.sourceEvent,{transform:J,snapGrid:T,snapToGrid:Y,containerBounds:b});_={width:E.measured.width??0,height:E.measured.height??0,x:E.position.x??0,y:E.position.y??0},N={..._,pointerX:W,pointerY:B,aspectRatio:_.width/_.height},L=void 0,F=vr(E.extent)?E.extent:void 0,E.parentId&&(E.extent==="parent"||E.expandParent)&&(L=D.get(E.parentId)),L&&E.extent==="parent"&&(F=[[0,0],[L.measured.width,L.measured.height]]),R=[],P=void 0;for(const[X,M]of D)if(M.parentId===r&&(R.push({id:X,position:{...M.position},extent:M.extent}),M.extent==="parent"||M.expandParent)){const j=oS(M,E,M.origin??U);P?P=[[Math.min(j[0][0],P[0][0]),Math.min(j[0][1],P[0][1])],[Math.max(j[1][0],P[1][0]),Math.max(j[1][1],P[1][1])]]:P=j}x==null||x(I,{..._})}).on("drag",I=>{const{transform:D,snapGrid:J,snapToGrid:T,nodeOrigin:Y}=o(),U=io(I.sourceEvent,{transform:D,snapGrid:J,snapToGrid:T,containerBounds:b}),G=[];if(!E)return;const{x:W,y:B,width:X,height:M}=_,j={},O=E.origin??Y,{width:Q,height:K,x:ie,y:le}=rS(N,u.controlDirection,U,u.boundaries,u.keepAspectRatio,O,F,P),Z=Q!==X,oe=K!==M,fe=ie!==W&&Z,xe=le!==B&&oe;if(!fe&&!xe&&!Z&&!oe)return;if((fe||xe||O[0]===1||O[1]===1)&&(j.x=fe?ie:_.x,j.y=xe?le:_.y,_.x=j.x,_.y=j.y,R.length>0)){const be=ie-W,Ne=le-B;for(const Ae of R)Ae.position={x:Ae.position.x-be+O[0]*(Q-X),y:Ae.position.y-Ne+O[1]*(K-M)},G.push(Ae)}if((Z||oe)&&(j.width=Z&&(!u.resizeDirection||u.resizeDirection==="horizontal")?Q:_.width,j.height=oe&&(!u.resizeDirection||u.resizeDirection==="vertical")?K:_.height,_.width=j.width,_.height=j.height),L&&E.expandParent){const be=O[0]*(j.width??0);j.x&&j.x<be&&(_.x=be,N.x=N.x-(j.x-be));const Ne=O[1]*(j.height??0);j.y&&j.y<Ne&&(_.y=Ne,N.y=N.y-(j.y-Ne))}const he=tS({width:_.width,prevWidth:X,height:_.height,prevHeight:M,affectsX:u.controlDirection.affectsX,affectsY:u.controlDirection.affectsY}),de={..._,direction:he};(S==null?void 0:S(I,de))!==!1&&(A=!0,w==null||w(I,de),l(j,G))}).on("end",I=>{A&&(C==null||C(I,{..._}),s==null||s({..._}),A=!1)});c.call($)}function f(){c.on(".drag",null)}return{update:d,destroy:f}}var Tu={exports:{}},Lu={},Iu={exports:{}},Au={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function sS(){if(xp)return Au;xp=1;var n=mo();function r(h,v){return h===v&&(h!==0||1/h===1/v)||h!==h&&v!==v}var o=typeof Object.is=="function"?Object.is:r,l=n.useState,s=n.useEffect,c=n.useLayoutEffect,u=n.useDebugValue;function d(h,v){var x=v(),w=l({inst:{value:x,getSnapshot:v}}),C=w[0].inst,S=w[1];return c(function(){C.value=x,C.getSnapshot=v,f(C)&&S({inst:C})},[h,x,v]),s(function(){return f(C)&&S({inst:C}),h(function(){f(C)&&S({inst:C})})},[h]),u(x),x}function f(h){var v=h.getSnapshot;h=h.value;try{var x=v();return!o(h,x)}catch{return!0}}function p(h,v){return v()}var g=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?p:d;return Au.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:g,Au}var wp;function aS(){return wp||(wp=1,Iu.exports=sS()),Iu.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function uS(){if(Sp)return Lu;Sp=1;var n=mo(),r=aS();function o(p,g){return p===g&&(p!==0||1/p===1/g)||p!==p&&g!==g}var l=typeof Object.is=="function"?Object.is:o,s=r.useSyncExternalStore,c=n.useRef,u=n.useEffect,d=n.useMemo,f=n.useDebugValue;return Lu.useSyncExternalStoreWithSelector=function(p,g,h,v,x){var w=c(null);if(w.current===null){var C={hasValue:!1,value:null};w.current=C}else C=w.current;w=d(function(){function _(L){if(!N){if(N=!0,E=L,L=v(L),x!==void 0&&C.hasValue){var F=C.value;if(x(F,L))return b=F}return b=L}if(F=b,l(E,L))return F;var P=v(L);return x!==void 0&&x(F,P)?(E=L,F):(E=L,b=P)}var N=!1,E,b,R=h===void 0?null:h;return[function(){return _(g())},R===null?void 0:function(){return _(R())}]},[g,h,v,x]);var S=s(p,w[0],w[1]);return u(function(){C.hasValue=!0,C.value=S},[S]),f(S),S},Lu}var Ep;function cS(){return Ep||(Ep=1,Tu.exports=uS()),Tu.exports}var dS=cS();const fS=Vc(dS),hS={},_p=n=>{let r;const o=new Set,l=(g,h)=>{const v=typeof g=="function"?g(r):g;if(!Object.is(v,r)){const x=r;r=h??(typeof v!="object"||v===null)?v:Object.assign({},r,v),o.forEach(w=>w(r,x))}},s=()=>r,f={setState:l,getState:s,getInitialState:()=>p,subscribe:g=>(o.add(g),()=>o.delete(g)),destroy:()=>{(hS?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},p=r=n(l,s,f);return f},pS=n=>n?_p(n):_p,{useDebugValue:mS}=C1,{useSyncExternalStoreWithSelector:gS}=fS,yS=n=>n;function Z0(n,r=yS,o){const l=gS(n.subscribe,n.getState,n.getServerState||n.getInitialState,r,o);return mS(l),l}const kp=(n,r)=>{const o=pS(n),l=(s,c=r)=>Z0(o,s,c);return Object.assign(l,o),l},vS=(n,r)=>n?kp(n,r):kp;function Oe(n,r){if(Object.is(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;if(n instanceof Map&&r instanceof Map){if(n.size!==r.size)return!1;for(const[l,s]of n)if(!Object.is(s,r.get(l)))return!1;return!0}if(n instanceof Set&&r instanceof Set){if(n.size!==r.size)return!1;for(const l of n)if(!r.has(l))return!1;return!0}const o=Object.keys(n);if(o.length!==Object.keys(r).length)return!1;for(const l of o)if(!Object.prototype.hasOwnProperty.call(r,l)||!Object.is(n[l],r[l]))return!1;return!0}Um();const Ss=re.createContext(null),xS=Ss.Provider,J0=qn.error001("react");function Pe(n,r){const o=re.useContext(Ss);if(o===null)throw new Error(J0);return Z0(o,n,r)}function Fe(){const n=re.useContext(Ss);if(n===null)throw new Error(J0);return re.useMemo(()=>({getState:n.getState,setState:n.setState,subscribe:n.subscribe}),[n])}const Cp={display:"none"},wS={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},eg="react-flow__node-desc",ng="react-flow__edge-desc",SS="react-flow__aria-live",ES=n=>n.ariaLiveMessage,_S=n=>n.ariaLabelConfig;function kS({rfId:n}){const r=Pe(ES);return V.jsx("div",{id:`${SS}-${n}`,"aria-live":"assertive","aria-atomic":"true",style:wS,children:r})}function CS({rfId:n,disableKeyboardA11y:r}){const o=Pe(_S);return V.jsxs(V.Fragment,{children:[V.jsx("div",{id:`${eg}-${n}`,style:Cp,children:r?o["node.a11yDescription.default"]:o["node.a11yDescription.keyboardDisabled"]}),V.jsx("div",{id:`${ng}-${n}`,style:Cp,children:o["edge.a11yDescription.default"]}),!r&&V.jsx(kS,{rfId:n})]})}const Es=re.forwardRef(({position:n="top-left",children:r,className:o,style:l,...s},c)=>{const u=`${n}`.split("-");return V.jsx("div",{className:qe(["react-flow__panel",o,...u]),style:l,ref:c,...s,children:r})});Es.displayName="Panel";function bS({proOptions:n,position:r="bottom-right"}){return n!=null&&n.hideAttribution?null:V.jsx(Es,{position:r,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",children:V.jsx("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}const NS=n=>{const r=[],o=[];for(const[,l]of n.nodeLookup)l.selected&&r.push(l.internals.userNode);for(const[,l]of n.edgeLookup)l.selected&&o.push(l);return{selectedNodes:r,selectedEdges:o}},ql=n=>n.id;function PS(n,r){return Oe(n.selectedNodes.map(ql),r.selectedNodes.map(ql))&&Oe(n.selectedEdges.map(ql),r.selectedEdges.map(ql))}function MS({onSelectionChange:n}){const r=Fe(),{selectedNodes:o,selectedEdges:l}=Pe(NS,PS);return re.useEffect(()=>{const s={nodes:o,edges:l};n==null||n(s),r.getState().onSelectionChangeHandlers.forEach(c=>c(s))},[o,l,n]),null}const TS=n=>!!n.onSelectionChangeHandlers;function LS({onSelectionChange:n}){const r=Pe(TS);return n||r?V.jsx(MS,{onSelectionChange:n}):null}const tg=[0,0],IS={x:0,y:0,zoom:1},AS=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],bp=[...AS,"rfId"],RS=n=>({setNodes:n.setNodes,setEdges:n.setEdges,setMinZoom:n.setMinZoom,setMaxZoom:n.setMaxZoom,setTranslateExtent:n.setTranslateExtent,setNodeExtent:n.setNodeExtent,reset:n.reset,setDefaultNodesAndEdges:n.setDefaultNodesAndEdges}),Np={translateExtent:uo,nodeOrigin:tg,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function zS(n){const{setNodes:r,setEdges:o,setMinZoom:l,setMaxZoom:s,setTranslateExtent:c,setNodeExtent:u,reset:d,setDefaultNodesAndEdges:f}=Pe(RS,Oe),p=Fe();re.useEffect(()=>(f(n.defaultNodes,n.defaultEdges),()=>{g.current=Np,d()}),[]);const g=re.useRef(Np);return re.useEffect(()=>{for(const h of bp){const v=n[h],x=g.current[h];v!==x&&(typeof n[h]>"u"||(h==="nodes"?r(v):h==="edges"?o(v):h==="minZoom"?l(v):h==="maxZoom"?s(v):h==="translateExtent"?c(v):h==="nodeExtent"?u(v):h==="ariaLabelConfig"?p.setState({ariaLabelConfig:x2(v)}):h==="fitView"?p.setState({fitViewQueued:v}):h==="fitViewOptions"?p.setState({fitViewOptions:v}):p.setState({[h]:v})))}g.current=n},bp.map(h=>n[h])),null}function Pp(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function DS(n){var l;const[r,o]=re.useState(n==="system"?null:n);return re.useEffect(()=>{if(n!=="system"){o(n);return}const s=Pp(),c=()=>o(s!=null&&s.matches?"dark":"light");return c(),s==null||s.addEventListener("change",c),()=>{s==null||s.removeEventListener("change",c)}},[n]),r!==null?r:(l=Pp())!=null&&l.matches?"dark":"light"}const Mp=typeof document<"u"?document:null;function po(n=null,r={target:Mp,actInsideInputWithModifier:!0}){const[o,l]=re.useState(!1),s=re.useRef(!1),c=re.useRef(new Set([])),[u,d]=re.useMemo(()=>{if(n!==null){const p=(Array.isArray(n)?n:[n]).filter(h=>typeof h=="string").map(h=>h.replace("+",`
`).replace(`

`,`
+`).split(`
`)),g=p.reduce((h,v)=>h.concat(...v),[]);return[p,g]}return[[],[]]},[n]);return re.useEffect(()=>{const f=(r==null?void 0:r.target)??Mp,p=(r==null?void 0:r.actInsideInputWithModifier)??!0;if(n!==null){const g=x=>{var S,_;if(s.current=x.ctrlKey||x.metaKey||x.shiftKey||x.altKey,(!s.current||s.current&&!p)&&z0(x))return!1;const C=Lp(x.code,d);if(c.current.add(x[C]),Tp(u,c.current,!1)){const N=((_=(S=x.composedPath)==null?void 0:S.call(x))==null?void 0:_[0])||x.target,E=(N==null?void 0:N.nodeName)==="BUTTON"||(N==null?void 0:N.nodeName)==="A";r.preventDefault!==!1&&(s.current||!E)&&x.preventDefault(),l(!0)}},h=x=>{const w=Lp(x.code,d);Tp(u,c.current,!0)?(l(!1),c.current.clear()):c.current.delete(x[w]),x.key==="Meta"&&c.current.clear(),s.current=!1},v=()=>{c.current.clear(),l(!1)};return f==null||f.addEventListener("keydown",g),f==null||f.addEventListener("keyup",h),window.addEventListener("blur",v),window.addEventListener("contextmenu",v),()=>{f==null||f.removeEventListener("keydown",g),f==null||f.removeEventListener("keyup",h),window.removeEventListener("blur",v),window.removeEventListener("contextmenu",v)}}},[n,l]),o}function Tp(n,r,o){return n.filter(l=>o||l.length===r.size).some(l=>l.every(s=>r.has(s)))}function Lp(n,r){return r.includes(n)?"code":"key"}const OS=()=>{const n=Fe();return re.useMemo(()=>({zoomIn:async r=>{const{panZoom:o}=n.getState();return o?o.scaleBy(1.2,r):!1},zoomOut:async r=>{const{panZoom:o}=n.getState();return o?o.scaleBy(1/1.2,r):!1},zoomTo:async(r,o)=>{const{panZoom:l}=n.getState();return l?l.scaleTo(r,o):!1},getZoom:()=>n.getState().transform[2],setViewport:async(r,o)=>{const{transform:[l,s,c],panZoom:u}=n.getState();return u?(await u.setViewport({x:r.x??l,y:r.y??s,zoom:r.zoom??c},o),!0):!1},getViewport:()=>{const[r,o,l]=n.getState().transform;return{x:r,y:o,zoom:l}},setCenter:async(r,o,l)=>n.getState().setCenter(r,o,l),fitBounds:async(r,o)=>{const{width:l,height:s,minZoom:c,maxZoom:u,panZoom:d}=n.getState(),f=ed(r,l,s,c,u,(o==null?void 0:o.padding)??.1);return d?(await d.setViewport(f,{duration:o==null?void 0:o.duration,ease:o==null?void 0:o.ease,interpolate:o==null?void 0:o.interpolate}),!0):!1},screenToFlowPosition:(r,o={})=>{const{transform:l,snapGrid:s,snapToGrid:c,domNode:u}=n.getState();if(!u)return r;const{x:d,y:f}=u.getBoundingClientRect(),p={x:r.x-d,y:r.y-f},g=o.snapGrid??s,h=o.snapToGrid??c;return ai(p,l,h,g)},flowToScreenPosition:r=>{const{transform:o,domNode:l}=n.getState();if(!l)return r;const{x:s,y:c}=l.getBoundingClientRect(),u=oi(r,o);return{x:u.x+s,y:u.y+c}}}),[])};function rg(n,r){const o=[],l=new Map,s=[];for(const c of n)if(c.type==="add"){s.push(c);continue}else if(c.type==="remove"||c.type==="replace")l.set(c.id,[c]);else{const u=l.get(c.id);u?u.push(c):l.set(c.id,[c])}for(const c of r){const u=l.get(c.id);if(!u){o.push(c);continue}if(u[0].type==="remove")continue;if(u[0].type==="replace"){o.push({...u[0].item});continue}const d={...c};for(const f of u)FS(f,d);o.push(d)}return s.length&&s.forEach(c=>{c.index!==void 0?o.splice(c.index,0,{...c.item}):o.push({...c.item})}),o}function FS(n,r){switch(n.type){case"select":{r.selected=n.selected;break}case"position":{typeof n.position<"u"&&(r.position=n.position),typeof n.dragging<"u"&&(r.dragging=n.dragging);break}case"dimensions":{typeof n.dimensions<"u"&&(r.measured={...n.dimensions},n.setAttributes&&((n.setAttributes===!0||n.setAttributes==="width")&&(r.width=n.dimensions.width),(n.setAttributes===!0||n.setAttributes==="height")&&(r.height=n.dimensions.height))),typeof n.resizing=="boolean"&&(r.resizing=n.resizing);break}}}function jS(n,r){return rg(n,r)}function HS(n,r){return rg(n,r)}function dr(n,r){return{id:n,type:"select",selected:r}}function Kr(n,r=new Set,o=!1){const l=[];for(const[s,c]of n){const u=r.has(s);!(c.selected===void 0&&!u)&&c.selected!==u&&(o&&(c.selected=u),l.push(dr(c.id,u)))}return l}function Ip({items:n=[],lookup:r}){var s;const o=[],l=new Map(n.map(c=>[c.id,c]));for(const[c,u]of n.entries()){const d=r.get(u.id),f=((s=d==null?void 0:d.internals)==null?void 0:s.userNode)??d;f!==void 0&&f!==u&&o.push({id:u.id,item:u,type:"replace"}),f===void 0&&o.push({item:u,type:"add",index:c})}for(const[c]of r)l.get(c)===void 0&&o.push({id:c,type:"remove"});return o}function Ap(n){return{id:n.id,type:"remove"}}const $S=L0();function BS(n,r,o={}){return C2(n,r,{...o,onError:o.onError??$S})}const Rp=n=>c2(n),VS=n=>N0(n);function ig(n){return re.forwardRef(n)}const WS=typeof window<"u"?re.useLayoutEffect:re.useEffect;function zp(n){const[r,o]=re.useState(BigInt(0)),[l]=re.useState(()=>QS(()=>o(s=>s+BigInt(1))));return WS(()=>{const s=l.get();s.length&&(n(s),l.reset())},[r]),l}function QS(n){let r=[];return{get:()=>r,reset:()=>{r=[]},push:o=>{r.push(o),n()}}}const og=re.createContext(null);function US({children:n}){const r=Fe(),o=re.useCallback(d=>{const{nodes:f=[],setNodes:p,hasDefaultNodes:g,onNodesChange:h,nodeLookup:v,fitViewQueued:x,onNodesChangeMiddlewareMap:w}=r.getState();let C=f;for(const _ of d)C=typeof _=="function"?_(C):_;let S=Ip({items:C,lookup:v});for(const _ of w.values())S=_(S);g&&p(C),S.length>0?h==null||h(S):x&&window.requestAnimationFrame(()=>{const{fitViewQueued:_,nodes:N,setNodes:E}=r.getState();_&&E(N)})},[]),l=zp(o),s=re.useCallback(d=>{const{edges:f=[],setEdges:p,hasDefaultEdges:g,onEdgesChange:h,edgeLookup:v}=r.getState();let x=f;for(const w of d)x=typeof w=="function"?w(x):w;g?p(x):h&&h(Ip({items:x,lookup:v}))},[]),c=zp(s),u=re.useMemo(()=>({nodeQueue:l,edgeQueue:c}),[]);return V.jsx(og.Provider,{value:u,children:n})}function qS(){const n=re.useContext(og);if(!n)throw new Error("useBatchContext must be used within a BatchProvider");return n}const YS=n=>!!n.panZoom;function _s(){const n=OS(),r=Fe(),o=qS(),l=Pe(YS),s=re.useMemo(()=>{const c=h=>r.getState().nodeLookup.get(h),u=h=>{o.nodeQueue.push(h)},d=h=>{o.edgeQueue.push(h)},f=h=>{var _,N;const{nodeLookup:v,nodeOrigin:x}=r.getState(),w=Rp(h)?h:v.get(h.id),C=w.parentId?A0(w.position,w.measured,w.parentId,v,x):w.position,S={...w,position:C,width:((_=w.measured)==null?void 0:_.width)??w.width,height:((N=w.measured)==null?void 0:N.height)??w.height};return ii(S)},p=(h,v,x={replace:!1})=>{u(w=>w.map(C=>{if(C.id===h){const S=typeof v=="function"?v(C):v;return x.replace&&Rp(S)?S:{...C,...S}}return C}))},g=(h,v,x={replace:!1})=>{d(w=>w.map(C=>{if(C.id===h){const S=typeof v=="function"?v(C):v;return x.replace&&VS(S)?S:{...C,...S}}return C}))};return{getNodes:()=>r.getState().nodes.map(h=>({...h})),getNode:h=>{var v;return(v=c(h))==null?void 0:v.internals.userNode},getInternalNode:c,getEdges:()=>{const{edges:h=[]}=r.getState();return h.map(v=>({...v}))},getEdge:h=>r.getState().edgeLookup.get(h),setNodes:u,setEdges:d,addNodes:h=>{const v=Array.isArray(h)?h:[h];o.nodeQueue.push(x=>[...x,...v])},addEdges:h=>{const v=Array.isArray(h)?h:[h];o.edgeQueue.push(x=>[...x,...v])},toObject:()=>{const{nodes:h=[],edges:v=[],transform:x}=r.getState(),[w,C,S]=x;return{nodes:h.map(_=>({..._})),edges:v.map(_=>({..._})),viewport:{x:w,y:C,zoom:S}}},deleteElements:async({nodes:h=[],edges:v=[]})=>{const{nodes:x,edges:w,onNodesDelete:C,onEdgesDelete:S,triggerNodeChanges:_,triggerEdgeChanges:N,onDelete:E,onBeforeDelete:b}=r.getState(),{nodes:R,edges:L}=await m2({nodesToRemove:h,edgesToRemove:v,nodes:x,edges:w,onBeforeDelete:b}),F=L.length>0,P=R.length>0;if(F){const A=L.map(Ap);S==null||S(L),N(A)}if(P){const A=R.map(Ap);C==null||C(R),_(A)}return(P||F)&&(E==null||E({nodes:R,edges:L})),{deletedNodes:R,deletedEdges:L}},getIntersectingNodes:(h,v=!0,x)=>{const w=lp(h),C=w?h:f(h),S=x!==void 0;return C?(x||r.getState().nodes).filter(_=>{const N=r.getState().nodeLookup.get(_.id);if(N&&!w&&(_.id===h.id||!N.internals.positionAbsolute))return!1;const E=ii(S?_:N),b=fo(E,C);return v&&b>0||b>=E.width*E.height||b>=C.width*C.height}):[]},isNodeIntersecting:(h,v,x=!0)=>{const C=lp(h)?h:f(h);if(!C)return!1;const S=fo(C,v);return x&&S>0||S>=v.width*v.height||S>=C.width*C.height},updateNode:p,updateNodeData:(h,v,x={replace:!1})=>{p(h,w=>{const C=typeof v=="function"?v(w):v;return x.replace?{...w,data:C}:{...w,data:{...w.data,...C}}},x)},updateEdge:g,updateEdgeData:(h,v,x={replace:!1})=>{g(h,w=>{const C=typeof v=="function"?v(w):v;return x.replace?{...w,data:C}:{...w,data:{...w.data,...C}}},x)},getNodesBounds:h=>{const{nodeLookup:v,nodeOrigin:x}=r.getState();return d2(h,{nodeLookup:v,nodeOrigin:x})},getHandleConnections:({type:h,id:v,nodeId:x})=>{var w;return Array.from(((w=r.getState().connectionLookup.get(`${x}-${h}${v?`-${v}`:""}`))==null?void 0:w.values())??[])},getNodeConnections:({type:h,handleId:v,nodeId:x})=>{var w;return Array.from(((w=r.getState().connectionLookup.get(`${x}${h?v?`-${h}-${v}`:`-${h}`:""}`))==null?void 0:w.values())??[])},fitView:async h=>{const v=r.getState().fitViewResolver??v2();return r.setState({fitViewQueued:!0,fitViewOptions:h,fitViewResolver:v}),o.nodeQueue.push(x=>[...x]),v.promise}}},[]);return re.useMemo(()=>({...s,...n,viewportInitialized:l}),[l])}const Dp=n=>n.selected,GS=typeof window<"u"?window:void 0;function XS({deleteKeyCode:n,multiSelectionKeyCode:r}){const o=Fe(),{deleteElements:l}=_s(),s=po(n,{actInsideInputWithModifier:!1}),c=po(r,{target:GS});re.useEffect(()=>{if(s){const{edges:u,nodes:d}=o.getState();l({nodes:d.filter(Dp),edges:u.filter(Dp)}),o.setState({nodesSelectionActive:!1})}},[s]),re.useEffect(()=>{o.setState({multiSelectionActive:c})},[c])}function KS(n){const r=Fe();re.useEffect(()=>{const o=()=>{var s,c,u,d;if(!n.current||!(((c=(s=n.current).checkVisibility)==null?void 0:c.call(s))??!0))return!1;const l=nd(n.current);(l.height===0||l.width===0)&&((d=(u=r.getState()).onError)==null||d.call(u,"004",qn.error004())),r.setState({width:l.width||500,height:l.height||500})};if(n.current){o(),window.addEventListener("resize",o);const l=new ResizeObserver(()=>o());return l.observe(n.current),()=>{window.removeEventListener("resize",o),l&&n.current&&l.unobserve(n.current)}}},[])}const ks={position:"absolute",width:"100%",height:"100%",top:0,left:0},ZS=n=>({userSelectionActive:n.userSelectionActive,lib:n.lib,connectionInProgress:n.connection.inProgress});function JS({onPaneContextMenu:n,zoomOnScroll:r=!0,zoomOnPinch:o=!0,panOnScroll:l=!1,panOnScrollSpeed:s=.5,panOnScrollMode:c=pr.Free,zoomOnDoubleClick:u=!0,panOnDrag:d=!0,defaultViewport:f,translateExtent:p,minZoom:g,maxZoom:h,zoomActivationKeyCode:v,preventScrolling:x=!0,children:w,noWheelClassName:C,noPanClassName:S,onViewportChange:_,isControlledViewport:N,paneClickDistance:E,selectionOnDrag:b}){const R=Fe(),L=re.useRef(null),{userSelectionActive:F,lib:P,connectionInProgress:A}=Pe(ZS,Oe),$=po(v),I=re.useRef();KS(L);const D=re.useCallback(J=>{_==null||_({x:J[0],y:J[1],zoom:J[2]}),N||R.setState({transform:J})},[_,N]);return re.useEffect(()=>{if(L.current){I.current=nS({domNode:L.current,minZoom:g,maxZoom:h,translateExtent:p,viewport:f,onDraggingChange:U=>R.setState(G=>G.paneDragging===U?G:{paneDragging:U}),onPanZoomStart:(U,G)=>{const{onViewportChangeStart:W,onMoveStart:B}=R.getState();B==null||B(U,G),W==null||W(G)},onPanZoom:(U,G)=>{const{onViewportChange:W,onMove:B}=R.getState();B==null||B(U,G),W==null||W(G)},onPanZoomEnd:(U,G)=>{const{onViewportChangeEnd:W,onMoveEnd:B}=R.getState();B==null||B(U,G),W==null||W(G)}});const{x:J,y:T,zoom:Y}=I.current.getViewport();return R.setState({panZoom:I.current,transform:[J,T,Y],domNode:L.current.closest(".react-flow")}),()=>{var U;(U=I.current)==null||U.destroy()}}},[]),re.useEffect(()=>{var J;(J=I.current)==null||J.update({onPaneContextMenu:n,zoomOnScroll:r,zoomOnPinch:o,panOnScroll:l,panOnScrollSpeed:s,panOnScrollMode:c,zoomOnDoubleClick:u,panOnDrag:d,zoomActivationKeyPressed:$,preventScrolling:x,noPanClassName:S,userSelectionActive:F,noWheelClassName:C,lib:P,onTransformChange:D,connectionInProgress:A,selectionOnDrag:b,paneClickDistance:E})},[n,r,o,l,s,c,u,d,$,x,S,F,C,P,D,A,b,E]),V.jsx("div",{className:"react-flow__renderer",ref:L,style:ks,children:w})}const eE=n=>({userSelectionActive:n.userSelectionActive,userSelectionRect:n.userSelectionRect});function nE(){const{userSelectionActive:n,userSelectionRect:r}=Pe(eE,Oe);return n&&r?V.jsx("div",{className:"react-flow__selection react-flow__container",style:{width:r.width,height:r.height,transform:`translate(${r.x}px, ${r.y}px)`}}):null}const Ru=(n,r)=>o=>{o.target===r.current&&(n==null||n(o))},tE=n=>({userSelectionActive:n.userSelectionActive,elementsSelectable:n.elementsSelectable,connectionInProgress:n.connection.inProgress,dragging:n.paneDragging,panBy:n.panBy,autoPanSpeed:n.autoPanSpeed});function rE({isSelecting:n,selectionKeyPressed:r,selectionMode:o=co.Full,panOnDrag:l,autoPanOnSelection:s,paneClickDistance:c,selectionOnDrag:u,onSelectionStart:d,onSelectionEnd:f,onPaneClick:p,onPaneContextMenu:g,onPaneScroll:h,onPaneMouseEnter:v,onPaneMouseMove:x,onPaneMouseLeave:w,children:C}){const S=re.useRef(0),_=Fe(),{userSelectionActive:N,elementsSelectable:E,dragging:b,connectionInProgress:R,panBy:L,autoPanSpeed:F}=Pe(tE,Oe),P=E&&(n||N),A=re.useRef(null),$=re.useRef(),I=re.useRef(new Set),D=re.useRef(new Set),J=re.useRef(!1),T=re.useRef({x:0,y:0}),Y=re.useRef(!1),U=Z=>{if(J.current||R){J.current=!1;return}p==null||p(Z),_.getState().resetSelectedElements(),_.setState({nodesSelectionActive:!1})},G=Z=>{if(Array.isArray(l)&&(l!=null&&l.includes(2))){Z.preventDefault();return}g==null||g(Z)},W=h?Z=>h(Z):void 0,B=Z=>{J.current&&(Z.stopPropagation(),J.current=!1)},X=Z=>{var Ae,an;const{domNode:oe,transform:fe}=_.getState();if($.current=oe==null?void 0:oe.getBoundingClientRect(),!$.current)return;const xe=Z.target===A.current;if(!xe&&!!Z.target.closest(".nokey")||!n||!(u&&xe||r)||Z.button!==0||!Z.isPrimary)return;(an=(Ae=Z.target)==null?void 0:Ae.setPointerCapture)==null||an.call(Ae,Z.pointerId),J.current=!1;const{x:_e,y:be}=Un(Z.nativeEvent,$.current),Ne=ai({x:_e,y:be},fe);_.setState({userSelectionRect:{width:0,height:0,startX:Ne.x,startY:Ne.y,x:_e,y:be}}),xe||(Z.stopPropagation(),Z.preventDefault())};function M(Z,oe){const{userSelectionRect:fe}=_.getState();if(!fe)return;const{transform:xe,nodeLookup:he,edgeLookup:de,connectionLookup:_e,triggerNodeChanges:be,triggerEdgeChanges:Ne,defaultEdgeOptions:Ae}=_.getState(),an={x:fe.startX,y:fe.startY},{x:dn,y:nn}=oi(an,xe),tn={startX:an.x,startY:an.y,x:Z<dn?Z:dn,y:oe<nn?oe:nn,width:Math.abs(Z-dn),height:Math.abs(oe-nn)},lt=I.current,Xn=D.current;I.current=new Set(Zc(he,tn,xe,o===co.Partial,!0).map(fn=>fn.id)),D.current=new Set;const Kn=(Ae==null?void 0:Ae.selectable)??!0;for(const fn of I.current){const Mn=_e.get(fn);if(Mn)for(const{edgeId:wn}of Mn.values()){const Tn=de.get(wn);Tn&&(Tn.selectable??Kn)&&D.current.add(wn)}}if(!sp(lt,I.current)){const fn=Kr(he,I.current,!0);be(fn)}if(!sp(Xn,D.current)){const fn=Kr(de,D.current);Ne(fn)}_.setState({userSelectionRect:tn,userSelectionActive:!0,nodesSelectionActive:!1})}function j(){if(!s||!$.current)return;const[Z,oe]=Jc(T.current,$.current,F);L({x:Z,y:oe}).then(fe=>{if(!J.current||!fe){S.current=requestAnimationFrame(j);return}const{x:xe,y:he}=T.current;M(xe,he),S.current=requestAnimationFrame(j)})}const O=()=>{cancelAnimationFrame(S.current),S.current=0,Y.current=!1};re.useEffect(()=>()=>O(),[]);const Q=Z=>{const{userSelectionRect:oe,transform:fe,resetSelectedElements:xe}=_.getState();if(!$.current||!oe)return;const{x:he,y:de}=Un(Z.nativeEvent,$.current);T.current={x:he,y:de};const _e=oi({x:oe.startX,y:oe.startY},fe);if(!J.current){const be=r?0:c;if(Math.hypot(he-_e.x,de-_e.y)<=be)return;xe(),d==null||d(Z)}J.current=!0,Y.current||(j(),Y.current=!0),M(he,de)},K=Z=>{var oe,fe;Z.button===0&&((fe=(oe=Z.target)==null?void 0:oe.releasePointerCapture)==null||fe.call(oe,Z.pointerId),!N&&Z.target===A.current&&_.getState().userSelectionRect&&(U==null||U(Z)),_.setState({userSelectionActive:!1,userSelectionRect:null}),J.current&&(f==null||f(Z),_.setState({nodesSelectionActive:I.current.size>0})),O())},ie=Z=>{var oe,fe;(fe=(oe=Z.target)==null?void 0:oe.releasePointerCapture)==null||fe.call(oe,Z.pointerId),O()},le=l===!0||Array.isArray(l)&&l.includes(0);return V.jsxs("div",{className:qe(["react-flow__pane",{draggable:le,dragging:b,selection:n}]),onClick:P?void 0:Ru(U,A),onContextMenu:Ru(G,A),onWheel:Ru(W,A),onPointerEnter:P?void 0:v,onPointerMove:P?Q:x,onPointerUp:P?K:void 0,onPointerCancel:P?ie:void 0,onPointerDownCapture:P?X:void 0,onClickCapture:P?B:void 0,onPointerLeave:w,ref:A,style:ks,children:[C,V.jsx(nE,{})]})}function Bc({id:n,store:r,unselect:o=!1,nodeRef:l}){const{addSelectedNodes:s,unselectNodesAndEdges:c,multiSelectionActive:u,nodeLookup:d,onError:f}=r.getState(),p=d.get(n);if(!p){f==null||f("012",qn.error012(n));return}r.setState({nodesSelectionActive:!1}),p.selected?(o||p.selected&&u)&&(c({nodes:[p],edges:[]}),requestAnimationFrame(()=>{var g;return(g=l==null?void 0:l.current)==null?void 0:g.blur()})):s([n])}function lg({nodeRef:n,disabled:r=!1,noDragClassName:o,handleSelector:l,nodeId:s,isSelectable:c,nodeClickDistance:u}){const d=Fe(),[f,p]=re.useState(!1),g=re.useRef();return re.useEffect(()=>{g.current=$2({getStoreItems:()=>d.getState(),onNodeMouseDown:h=>{Bc({id:h,store:d,nodeRef:n})},onDragStart:()=>{p(!0)},onDragStop:()=>{p(!1)}})},[]),re.useEffect(()=>{if(!(r||!n.current||!g.current))return g.current.update({noDragClassName:o,handleSelector:l,domNode:n.current,isSelectable:c,nodeId:s,nodeClickDistance:u}),()=>{var h;(h=g.current)==null||h.destroy()}},[o,l,r,c,n,s,u]),f}const iE=n=>r=>r.selected&&(r.draggable||n&&typeof r.draggable>"u");function sg(){const n=Fe();return re.useCallback(o=>{const{nodeExtent:l,snapToGrid:s,snapGrid:c,nodesDraggable:u,onError:d,updateNodePositions:f,nodeLookup:p,nodeOrigin:g}=n.getState(),h=new Map,v=iE(u),x=s?c[0]:5,w=s?c[1]:5,C=o.direction.x*x*o.factor,S=o.direction.y*w*o.factor;for(const[,_]of p){if(!v(_))continue;let N={x:_.internals.positionAbsolute.x+C,y:_.internals.positionAbsolute.y+S};s&&(N=wo(N,c));const{position:E,positionAbsolute:b}=P0({nodeId:_.id,nextPosition:N,nodeLookup:p,nodeExtent:l,nodeOrigin:g,onError:d});_.position=E,_.internals.positionAbsolute=b,h.set(_.id,_)}f(h)},[])}const sd=re.createContext(null),oE=sd.Provider;sd.Consumer;const ag=()=>re.useContext(sd),lE=n=>({connectOnClick:n.connectOnClick,noPanClassName:n.noPanClassName,rfId:n.rfId}),sE=(n,r,o)=>l=>{const{connectionClickStartHandle:s,connectionMode:c,connection:u}=l,{fromHandle:d,toHandle:f,isValid:p}=u,g=(f==null?void 0:f.nodeId)===n&&(f==null?void 0:f.id)===r&&(f==null?void 0:f.type)===o;return{connectingFrom:(d==null?void 0:d.nodeId)===n&&(d==null?void 0:d.id)===r&&(d==null?void 0:d.type)===o,connectingTo:g,clickConnecting:(s==null?void 0:s.nodeId)===n&&(s==null?void 0:s.id)===r&&(s==null?void 0:s.type)===o,isPossibleEndHandle:c===ti.Strict?(d==null?void 0:d.type)!==o:n!==(d==null?void 0:d.nodeId)||r!==(d==null?void 0:d.id),connectionInProcess:!!d,clickConnectionInProcess:!!s,valid:g&&p}};function aE({type:n="source",position:r=we.Top,isValidConnection:o,isConnectable:l=!0,isConnectableStart:s=!0,isConnectableEnd:c=!0,id:u,onConnect:d,children:f,className:p,onMouseDown:g,onTouchStart:h,...v},x){var Y,U;const w=u||null,C=n==="target",S=Fe(),_=ag(),{connectOnClick:N,noPanClassName:E,rfId:b}=Pe(lE,Oe),{connectingFrom:R,connectingTo:L,clickConnecting:F,isPossibleEndHandle:P,connectionInProcess:A,clickConnectionInProcess:$,valid:I}=Pe(sE(_,w,n),Oe);_||(U=(Y=S.getState()).onError)==null||U.call(Y,"010",qn.error010());const D=G=>{const{defaultEdgeOptions:W,onConnect:B,hasDefaultEdges:X}=S.getState(),M={...W,...G};if(X){const{edges:j,setEdges:O,onError:Q}=S.getState();O(BS(M,j,{onError:Q}))}B==null||B(M),d==null||d(M)},J=G=>{if(!_)return;const W=D0(G.nativeEvent);if(s&&(W&&G.button===0||!W)){const B=S.getState();$c.onPointerDown(G.nativeEvent,{handleDomNode:G.currentTarget,autoPanOnConnect:B.autoPanOnConnect,connectionMode:B.connectionMode,connectionRadius:B.connectionRadius,domNode:B.domNode,nodeLookup:B.nodeLookup,lib:B.lib,isTarget:C,handleId:w,nodeId:_,flowId:B.rfId,panBy:B.panBy,cancelConnection:B.cancelConnection,onConnectStart:B.onConnectStart,onConnectEnd:(...X)=>{var M,j;return(j=(M=S.getState()).onConnectEnd)==null?void 0:j.call(M,...X)},updateConnection:B.updateConnection,onConnect:D,isValidConnection:o||((...X)=>{var M,j;return((j=(M=S.getState()).isValidConnection)==null?void 0:j.call(M,...X))??!0}),getTransform:()=>S.getState().transform,getFromHandle:()=>S.getState().connection.fromHandle,autoPanSpeed:B.autoPanSpeed,dragThreshold:B.connectionDragThreshold})}W?g==null||g(G):h==null||h(G)},T=G=>{const{onClickConnectStart:W,onClickConnectEnd:B,connectionClickStartHandle:X,connectionMode:M,isValidConnection:j,lib:O,rfId:Q,nodeLookup:K,connection:ie}=S.getState();if(!_||!X&&!s)return;if(!X){W==null||W(G.nativeEvent,{nodeId:_,handleId:w,handleType:n}),S.setState({connectionClickStartHandle:{nodeId:_,type:n,id:w}});return}const le=R0(G.target),Z=o||j,{connection:oe,isValid:fe}=$c.isValid(G.nativeEvent,{handle:{nodeId:_,id:w,type:n},connectionMode:M,fromNodeId:X.nodeId,fromHandleId:X.id||null,fromType:X.type,isValidConnection:Z,flowId:Q,doc:le,lib:O,nodeLookup:K});fe&&oe&&D(oe);const xe=structuredClone(ie);delete xe.inProgress,xe.toPosition=xe.toHandle?xe.toHandle.position:null,B==null||B(G,xe),S.setState({connectionClickStartHandle:null})};return V.jsx("div",{"data-handleid":w,"data-nodeid":_,"data-handlepos":r,"data-id":`${b}-${_}-${w}-${n}`,className:qe(["react-flow__handle",`react-flow__handle-${r}`,"nodrag",E,p,{source:!C,target:C,connectable:l,connectablestart:s,connectableend:c,clickconnecting:F,connectingfrom:R,connectingto:L,valid:I,connectionindicator:l&&(!A||P)&&(A||$?c:s)}]),onMouseDown:J,onTouchStart:J,onClick:N?T:void 0,ref:x,...v,children:f})}const si=re.memo(ig(aE));function uE({data:n,isConnectable:r,sourcePosition:o=we.Bottom}){return V.jsxs(V.Fragment,{children:[n==null?void 0:n.label,V.jsx(si,{type:"source",position:o,isConnectable:r})]})}function cE({data:n,isConnectable:r,targetPosition:o=we.Top,sourcePosition:l=we.Bottom}){return V.jsxs(V.Fragment,{children:[V.jsx(si,{type:"target",position:o,isConnectable:r}),n==null?void 0:n.label,V.jsx(si,{type:"source",position:l,isConnectable:r})]})}function dE(){return null}function fE({data:n,isConnectable:r,targetPosition:o=we.Top}){return V.jsxs(V.Fragment,{children:[V.jsx(si,{type:"target",position:o,isConnectable:r}),n==null?void 0:n.label]})}const cs={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Op={input:uE,default:cE,output:fE,group:dE};function hE(n){var r,o,l,s;return n.internals.handleBounds===void 0?{width:n.width??n.initialWidth??((r=n.style)==null?void 0:r.width),height:n.height??n.initialHeight??((o=n.style)==null?void 0:o.height)}:{width:n.width??((l=n.style)==null?void 0:l.width),height:n.height??((s=n.style)==null?void 0:s.height)}}const pE=n=>{const{width:r,height:o,x:l,y:s}=xo(n.nodeLookup,{filter:c=>!!c.selected});return{width:Qn(r)?r:null,height:Qn(o)?o:null,userSelectionActive:n.userSelectionActive,transformString:`translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]}) translate(${l}px,${s}px)`}};function mE({onSelectionContextMenu:n,noPanClassName:r,disableKeyboardA11y:o}){const l=Fe(),{width:s,height:c,transformString:u,userSelectionActive:d}=Pe(pE,Oe),f=sg(),p=re.useRef(null);re.useEffect(()=>{var x;o||(x=p.current)==null||x.focus({preventScroll:!0})},[o]);const g=!d&&s!==null&&c!==null;if(lg({nodeRef:p,disabled:!g}),!g)return null;const h=n?x=>{const w=l.getState().nodes.filter(C=>C.selected);n(x,w)}:void 0,v=x=>{Object.prototype.hasOwnProperty.call(cs,x.key)&&(x.preventDefault(),f({direction:cs[x.key],factor:x.shiftKey?4:1}))};return V.jsx("div",{className:qe(["react-flow__nodesselection","react-flow__container",r]),style:{transform:u},children:V.jsx("div",{ref:p,className:"react-flow__nodesselection-rect",onContextMenu:h,tabIndex:o?void 0:-1,onKeyDown:o?void 0:v,style:{width:s,height:c}})})}const Fp=typeof window<"u"?window:void 0,gE=n=>({nodesSelectionActive:n.nodesSelectionActive,userSelectionActive:n.userSelectionActive});function ug({children:n,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:l,onPaneMouseLeave:s,onPaneContextMenu:c,onPaneScroll:u,paneClickDistance:d,deleteKeyCode:f,selectionKeyCode:p,selectionOnDrag:g,selectionMode:h,onSelectionStart:v,onSelectionEnd:x,multiSelectionKeyCode:w,panActivationKeyCode:C,zoomActivationKeyCode:S,elementsSelectable:_,zoomOnScroll:N,zoomOnPinch:E,panOnScroll:b,panOnScrollSpeed:R,panOnScrollMode:L,zoomOnDoubleClick:F,panOnDrag:P,autoPanOnSelection:A,defaultViewport:$,translateExtent:I,minZoom:D,maxZoom:J,preventScrolling:T,onSelectionContextMenu:Y,noWheelClassName:U,noPanClassName:G,disableKeyboardA11y:W,onViewportChange:B,isControlledViewport:X}){const{nodesSelectionActive:M,userSelectionActive:j}=Pe(gE,Oe),O=po(p,{target:Fp}),Q=po(C,{target:Fp}),K=Q||P,ie=Q||b,le=g&&K!==!0,Z=O||j||le;return XS({deleteKeyCode:f,multiSelectionKeyCode:w}),V.jsx(JS,{onPaneContextMenu:c,elementsSelectable:_,zoomOnScroll:N,zoomOnPinch:E,panOnScroll:ie,panOnScrollSpeed:R,panOnScrollMode:L,zoomOnDoubleClick:F,panOnDrag:!O&&K,defaultViewport:$,translateExtent:I,minZoom:D,maxZoom:J,zoomActivationKeyCode:S,preventScrolling:T,noWheelClassName:U,noPanClassName:G,onViewportChange:B,isControlledViewport:X,paneClickDistance:d,selectionOnDrag:le,children:V.jsxs(rE,{onSelectionStart:v,onSelectionEnd:x,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:l,onPaneMouseLeave:s,onPaneContextMenu:c,onPaneScroll:u,panOnDrag:K,autoPanOnSelection:A,isSelecting:!!Z,selectionMode:h,selectionKeyPressed:O,paneClickDistance:d,selectionOnDrag:le,children:[n,M&&V.jsx(mE,{onSelectionContextMenu:Y,noPanClassName:G,disableKeyboardA11y:W})]})})}ug.displayName="FlowRenderer";const yE=re.memo(ug),vE=n=>r=>n?Zc(r.nodeLookup,{x:0,y:0,width:r.width,height:r.height},r.transform,!0).map(o=>o.id):Array.from(r.nodeLookup.keys());function xE(n){return Pe(re.useCallback(vE(n),[n]),Oe)}const wE=n=>n.updateNodeInternals;function SE(){const n=Pe(wE),[r]=re.useState(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(o=>{const l=new Map;o.forEach(s=>{const c=s.target.getAttribute("data-id");l.set(c,{id:c,nodeElement:s.target,force:!0})}),n(l)}));return re.useEffect(()=>()=>{r==null||r.disconnect()},[r]),r}function EE({node:n,nodeType:r,hasDimensions:o,resizeObserver:l}){const s=Fe(),c=re.useRef(null),u=re.useRef(null),d=re.useRef(n.sourcePosition),f=re.useRef(n.targetPosition),p=re.useRef(r),g=o&&!!n.internals.handleBounds;return re.useEffect(()=>{c.current&&!n.hidden&&(!g||u.current!==c.current)&&(u.current&&(l==null||l.unobserve(u.current)),l==null||l.observe(c.current),u.current=c.current)},[g,n.hidden]),re.useEffect(()=>()=>{u.current&&(l==null||l.unobserve(u.current),u.current=null)},[]),re.useEffect(()=>{if(c.current){const h=p.current!==r,v=d.current!==n.sourcePosition,x=f.current!==n.targetPosition;(h||v||x)&&(p.current=r,d.current=n.sourcePosition,f.current=n.targetPosition,s.getState().updateNodeInternals(new Map([[n.id,{id:n.id,nodeElement:c.current,force:!0}]])))}},[n.id,r,n.sourcePosition,n.targetPosition]),c}function _E({id:n,onClick:r,onMouseEnter:o,onMouseMove:l,onMouseLeave:s,onContextMenu:c,onDoubleClick:u,nodesDraggable:d,elementsSelectable:f,nodesConnectable:p,nodesFocusable:g,resizeObserver:h,noDragClassName:v,noPanClassName:x,disableKeyboardA11y:w,rfId:C,nodeTypes:S,nodeClickDistance:_,onError:N}){const{node:E,internals:b,isParent:R}=Pe(Z=>{const oe=Z.nodeLookup.get(n),fe=Z.parentLookup.has(n);return{node:oe,internals:oe.internals,isParent:fe}},Oe);let L=E.type||"default",F=(S==null?void 0:S[L])||Op[L];F===void 0&&(N==null||N("003",qn.error003(L)),L="default",F=(S==null?void 0:S.default)||Op.default);const P=!!(E.draggable||d&&typeof E.draggable>"u"),A=!!(E.selectable||f&&typeof E.selectable>"u"),$=!!(E.connectable||p&&typeof E.connectable>"u"),I=!!(E.focusable||g&&typeof E.focusable>"u"),D=Fe(),J=I0(E),T=EE({node:E,nodeType:L,hasDimensions:J,resizeObserver:h}),Y=lg({nodeRef:T,disabled:E.hidden||!P,noDragClassName:v,handleSelector:E.dragHandle,nodeId:n,isSelectable:A,nodeClickDistance:_}),U=sg();if(E.hidden)return null;const G=wt(E),W=hE(E),B=A||P||r||o||l||s,X=o?Z=>o(Z,{...b.userNode}):void 0,M=l?Z=>l(Z,{...b.userNode}):void 0,j=s?Z=>s(Z,{...b.userNode}):void 0,O=c?Z=>c(Z,{...b.userNode}):void 0,Q=u?Z=>u(Z,{...b.userNode}):void 0,K=Z=>{const{selectNodesOnDrag:oe,nodeDragThreshold:fe}=D.getState();A&&(!oe||!P||fe>0)&&Bc({id:n,store:D,nodeRef:T}),r&&r(Z,{...b.userNode})},ie=Z=>{if(!(z0(Z.nativeEvent)||w)){if(_0.includes(Z.key)&&A){const oe=Z.key==="Escape";Bc({id:n,store:D,unselect:oe,nodeRef:T})}else if(P&&E.selected&&Object.prototype.hasOwnProperty.call(cs,Z.key)){Z.preventDefault();const{ariaLabelConfig:oe}=D.getState();D.setState({ariaLiveMessage:oe["node.a11yDescription.ariaLiveMessage"]({direction:Z.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),U({direction:cs[Z.key],factor:Z.shiftKey?4:1})}}},le=()=>{var _e;if(w||!((_e=T.current)!=null&&_e.matches(":focus-visible")))return;const{transform:Z,width:oe,height:fe,autoPanOnNodeFocus:xe,setCenter:he}=D.getState();if(!xe)return;Zc(new Map([[n,E]]),{x:0,y:0,width:oe,height:fe},Z,!0).length>0||he(E.position.x+G.width/2,E.position.y+G.height/2,{zoom:Z[2]})};return V.jsx("div",{className:qe(["react-flow__node",`react-flow__node-${L}`,{[x]:P},E.className,{selected:E.selected,selectable:A,parent:R,draggable:P,dragging:Y}]),ref:T,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:B?"all":"none",visibility:J?"visible":"hidden",...E.style,...W},"data-id":n,"data-testid":`rf__node-${n}`,onMouseEnter:X,onMouseMove:M,onMouseLeave:j,onContextMenu:O,onClick:K,onDoubleClick:Q,onKeyDown:I?ie:void 0,tabIndex:I?0:void 0,onFocus:I?le:void 0,role:E.ariaRole??(I?"group":void 0),"aria-roledescription":"node","aria-describedby":w?void 0:`${eg}-${C}`,"aria-label":E.ariaLabel,...E.domAttributes,children:V.jsx(oE,{value:n,children:V.jsx(F,{id:n,data:E.data,type:L,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:E.selected??!1,selectable:A,draggable:P,deletable:E.deletable??!0,isConnectable:$,sourcePosition:E.sourcePosition,targetPosition:E.targetPosition,dragging:Y,dragHandle:E.dragHandle,zIndex:b.z,parentId:E.parentId,...G})})})}var kE=re.memo(_E);const CE=n=>({nodesDraggable:n.nodesDraggable,nodesConnectable:n.nodesConnectable,nodesFocusable:n.nodesFocusable,elementsSelectable:n.elementsSelectable,onError:n.onError});function cg(n){const{nodesDraggable:r,nodesConnectable:o,nodesFocusable:l,elementsSelectable:s,onError:c}=Pe(CE,Oe),u=xE(n.onlyRenderVisibleElements),d=SE();return V.jsx("div",{className:"react-flow__nodes",style:ks,children:u.map(f=>V.jsx(kE,{id:f,nodeTypes:n.nodeTypes,nodeExtent:n.nodeExtent,onClick:n.onNodeClick,onMouseEnter:n.onNodeMouseEnter,onMouseMove:n.onNodeMouseMove,onMouseLeave:n.onNodeMouseLeave,onContextMenu:n.onNodeContextMenu,onDoubleClick:n.onNodeDoubleClick,noDragClassName:n.noDragClassName,noPanClassName:n.noPanClassName,rfId:n.rfId,disableKeyboardA11y:n.disableKeyboardA11y,resizeObserver:d,nodesDraggable:r,nodesConnectable:o,nodesFocusable:l,elementsSelectable:s,nodeClickDistance:n.nodeClickDistance,onError:c},f))})}cg.displayName="NodeRenderer";const bE=re.memo(cg);function NE(n){return Pe(re.useCallback(o=>{if(!n)return o.edges.map(s=>s.id);const l=[];if(o.width&&o.height)for(const s of o.edges){const c=o.nodeLookup.get(s.source),u=o.nodeLookup.get(s.target);c&&u&&E2({sourceNode:c,targetNode:u,width:o.width,height:o.height,transform:o.transform})&&l.push(s.id)}return l},[n]),Oe)}const PE=({color:n="none",strokeWidth:r=1})=>{const o={strokeWidth:r,...n&&{stroke:n}};return V.jsx("polyline",{className:"arrow",style:o,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},ME=({color:n="none",strokeWidth:r=1})=>{const o={strokeWidth:r,...n&&{stroke:n,fill:n}};return V.jsx("polyline",{className:"arrowclosed",style:o,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},jp={[as.Arrow]:PE,[as.ArrowClosed]:ME};function TE(n){const r=Fe();return re.useMemo(()=>{var s,c;return Object.prototype.hasOwnProperty.call(jp,n)?jp[n]:((c=(s=r.getState()).onError)==null||c.call(s,"009",qn.error009(n)),null)},[n])}const LE=({id:n,type:r,color:o,width:l=12.5,height:s=12.5,markerUnits:c="strokeWidth",strokeWidth:u,orient:d="auto-start-reverse"})=>{const f=TE(r);return f?V.jsx("marker",{className:"react-flow__arrowhead",id:n,markerWidth:`${l}`,markerHeight:`${s}`,viewBox:"-10 -10 20 20",markerUnits:c,orient:d,refX:"0",refY:"0",children:V.jsx(f,{color:o,strokeWidth:u})}):null},dg=({defaultColor:n,rfId:r})=>{const o=Pe(c=>c.edges),l=Pe(c=>c.defaultEdgeOptions),s=re.useMemo(()=>T2(o,{id:r,defaultColor:n,defaultMarkerStart:l==null?void 0:l.markerStart,defaultMarkerEnd:l==null?void 0:l.markerEnd}),[o,l,r,n]);return s.length?V.jsx("svg",{className:"react-flow__marker","aria-hidden":"true",children:V.jsx("defs",{children:s.map(c=>V.jsx(LE,{id:c.id,type:c.type,color:c.color,width:c.width,height:c.height,markerUnits:c.markerUnits,strokeWidth:c.strokeWidth,orient:c.orient},c.id))})}):null};dg.displayName="MarkerDefinitions";var IE=re.memo(dg);function fg({x:n,y:r,label:o,labelStyle:l,labelShowBg:s=!0,labelBgStyle:c,labelBgPadding:u=[2,4],labelBgBorderRadius:d=2,children:f,className:p,...g}){const[h,v]=re.useState({x:1,y:0,width:0,height:0}),x=qe(["react-flow__edge-textwrapper",p]),w=re.useRef(null);return re.useEffect(()=>{if(w.current){const C=w.current.getBBox();v({x:C.x,y:C.y,width:C.width,height:C.height})}},[o]),o?V.jsxs("g",{transform:`translate(${n-h.width/2} ${r-h.height/2})`,className:x,visibility:h.width?"visible":"hidden",...g,children:[s&&V.jsx("rect",{width:h.width+2*u[0],x:-u[0],y:-u[1],height:h.height+2*u[1],className:"react-flow__edge-textbg",style:c,rx:d,ry:d}),V.jsx("text",{className:"react-flow__edge-text",y:h.height/2,dy:"0.3em",ref:w,style:l,children:o}),f]}):null}fg.displayName="EdgeText";const AE=re.memo(fg);function Cs({path:n,labelX:r,labelY:o,label:l,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,interactionWidth:p=20,...g}){return V.jsxs(V.Fragment,{children:[V.jsx("path",{...g,d:n,fill:"none",className:qe(["react-flow__edge-path",g.className])}),p?V.jsx("path",{d:n,fill:"none",strokeOpacity:0,strokeWidth:p,className:"react-flow__edge-interaction"}):null,l&&Qn(r)&&Qn(o)?V.jsx(AE,{x:r,y:o,label:l,labelStyle:s,labelShowBg:c,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f}):null]})}function Hp({pos:n,x1:r,y1:o,x2:l,y2:s}){return n===we.Left||n===we.Right?[.5*(r+l),o]:[r,.5*(o+s)]}function hg({sourceX:n,sourceY:r,sourcePosition:o=we.Bottom,targetX:l,targetY:s,targetPosition:c=we.Top}){const[u,d]=Hp({pos:o,x1:n,y1:r,x2:l,y2:s}),[f,p]=Hp({pos:c,x1:l,y1:s,x2:n,y2:r}),[g,h,v,x]=O0({sourceX:n,sourceY:r,targetX:l,targetY:s,sourceControlX:u,sourceControlY:d,targetControlX:f,targetControlY:p});return[`M${n},${r} C${u},${d} ${f},${p} ${l},${s}`,g,h,v,x]}function pg(n){return re.memo(({id:r,sourceX:o,sourceY:l,targetX:s,targetY:c,sourcePosition:u,targetPosition:d,label:f,labelStyle:p,labelShowBg:g,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:x,style:w,markerEnd:C,markerStart:S,interactionWidth:_})=>{const[N,E,b]=hg({sourceX:o,sourceY:l,sourcePosition:u,targetX:s,targetY:c,targetPosition:d}),R=n.isInternal?void 0:r;return V.jsx(Cs,{id:R,path:N,labelX:E,labelY:b,label:f,labelStyle:p,labelShowBg:g,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:x,style:w,markerEnd:C,markerStart:S,interactionWidth:_})})}const RE=pg({isInternal:!1}),mg=pg({isInternal:!0});RE.displayName="SimpleBezierEdge";mg.displayName="SimpleBezierEdgeInternal";function gg(n){return re.memo(({id:r,sourceX:o,sourceY:l,targetX:s,targetY:c,label:u,labelStyle:d,labelShowBg:f,labelBgStyle:p,labelBgPadding:g,labelBgBorderRadius:h,style:v,sourcePosition:x=we.Bottom,targetPosition:w=we.Top,markerEnd:C,markerStart:S,pathOptions:_,interactionWidth:N})=>{const[E,b,R]=Fc({sourceX:o,sourceY:l,sourcePosition:x,targetX:s,targetY:c,targetPosition:w,borderRadius:_==null?void 0:_.borderRadius,offset:_==null?void 0:_.offset,stepPosition:_==null?void 0:_.stepPosition}),L=n.isInternal?void 0:r;return V.jsx(Cs,{id:L,path:E,labelX:b,labelY:R,label:u,labelStyle:d,labelShowBg:f,labelBgStyle:p,labelBgPadding:g,labelBgBorderRadius:h,style:v,markerEnd:C,markerStart:S,interactionWidth:N})})}const yg=gg({isInternal:!1}),vg=gg({isInternal:!0});yg.displayName="SmoothStepEdge";vg.displayName="SmoothStepEdgeInternal";function xg(n){return re.memo(({id:r,...o})=>{var s;const l=n.isInternal?void 0:r;return V.jsx(yg,{...o,id:l,pathOptions:re.useMemo(()=>{var c;return{borderRadius:0,offset:(c=o.pathOptions)==null?void 0:c.offset}},[(s=o.pathOptions)==null?void 0:s.offset])})})}const zE=xg({isInternal:!1}),wg=xg({isInternal:!0});zE.displayName="StepEdge";wg.displayName="StepEdgeInternal";function Sg(n){return re.memo(({id:r,sourceX:o,sourceY:l,targetX:s,targetY:c,label:u,labelStyle:d,labelShowBg:f,labelBgStyle:p,labelBgPadding:g,labelBgBorderRadius:h,style:v,markerEnd:x,markerStart:w,interactionWidth:C})=>{const[S,_,N]=H0({sourceX:o,sourceY:l,targetX:s,targetY:c}),E=n.isInternal?void 0:r;return V.jsx(Cs,{id:E,path:S,labelX:_,labelY:N,label:u,labelStyle:d,labelShowBg:f,labelBgStyle:p,labelBgPadding:g,labelBgBorderRadius:h,style:v,markerEnd:x,markerStart:w,interactionWidth:C})})}const DE=Sg({isInternal:!1}),Eg=Sg({isInternal:!0});DE.displayName="StraightEdge";Eg.displayName="StraightEdgeInternal";function _g(n){return re.memo(({id:r,sourceX:o,sourceY:l,targetX:s,targetY:c,sourcePosition:u=we.Bottom,targetPosition:d=we.Top,label:f,labelStyle:p,labelShowBg:g,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:x,style:w,markerEnd:C,markerStart:S,pathOptions:_,interactionWidth:N})=>{const[E,b,R]=F0({sourceX:o,sourceY:l,sourcePosition:u,targetX:s,targetY:c,targetPosition:d,curvature:_==null?void 0:_.curvature}),L=n.isInternal?void 0:r;return V.jsx(Cs,{id:L,path:E,labelX:b,labelY:R,label:f,labelStyle:p,labelShowBg:g,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:x,style:w,markerEnd:C,markerStart:S,interactionWidth:N})})}const OE=_g({isInternal:!1}),kg=_g({isInternal:!0});OE.displayName="BezierEdge";kg.displayName="BezierEdgeInternal";const $p={default:kg,straight:Eg,step:wg,smoothstep:vg,simplebezier:mg},Bp={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null},FE=(n,r,o)=>o===we.Left?n-r:o===we.Right?n+r:n,jE=(n,r,o)=>o===we.Top?n-r:o===we.Bottom?n+r:n,Vp="react-flow__edgeupdater";function Wp({position:n,centerX:r,centerY:o,radius:l=10,onMouseDown:s,onMouseEnter:c,onMouseOut:u,type:d}){return V.jsx("circle",{onMouseDown:s,onMouseEnter:c,onMouseOut:u,className:qe([Vp,`${Vp}-${d}`]),cx:FE(r,l,n),cy:jE(o,l,n),r:l,stroke:"transparent",fill:"transparent"})}function HE({isReconnectable:n,reconnectRadius:r,edge:o,sourceX:l,sourceY:s,targetX:c,targetY:u,sourcePosition:d,targetPosition:f,onReconnect:p,onReconnectStart:g,onReconnectEnd:h,setReconnecting:v,setUpdateHover:x}){const w=Fe(),C=(b,R)=>{if(b.button!==0)return;const{autoPanOnConnect:L,domNode:F,connectionMode:P,connectionRadius:A,lib:$,onConnectStart:I,cancelConnection:D,nodeLookup:J,rfId:T,panBy:Y,updateConnection:U}=w.getState(),G=R.type==="target",W=(M,j)=>{v(!1),h==null||h(M,o,R.type,j)},B=M=>p==null?void 0:p(o,M),X=(M,j)=>{v(!0),g==null||g(b,o,R.type),I==null||I(M,j)};$c.onPointerDown(b.nativeEvent,{autoPanOnConnect:L,connectionMode:P,connectionRadius:A,domNode:F,handleId:R.id,nodeId:R.nodeId,nodeLookup:J,isTarget:G,edgeUpdaterType:R.type,lib:$,flowId:T,cancelConnection:D,panBy:Y,isValidConnection:(...M)=>{var j,O;return((O=(j=w.getState()).isValidConnection)==null?void 0:O.call(j,...M))??!0},onConnect:B,onConnectStart:X,onConnectEnd:(...M)=>{var j,O;return(O=(j=w.getState()).onConnectEnd)==null?void 0:O.call(j,...M)},onReconnectEnd:W,updateConnection:U,getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,dragThreshold:w.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},S=b=>C(b,{nodeId:o.target,id:o.targetHandle??null,type:"target"}),_=b=>C(b,{nodeId:o.source,id:o.sourceHandle??null,type:"source"}),N=()=>x(!0),E=()=>x(!1);return V.jsxs(V.Fragment,{children:[(n===!0||n==="source")&&V.jsx(Wp,{position:d,centerX:l,centerY:s,radius:r,onMouseDown:S,onMouseEnter:N,onMouseOut:E,type:"source"}),(n===!0||n==="target")&&V.jsx(Wp,{position:f,centerX:c,centerY:u,radius:r,onMouseDown:_,onMouseEnter:N,onMouseOut:E,type:"target"})]})}function $E({id:n,edgesFocusable:r,edgesReconnectable:o,elementsSelectable:l,onClick:s,onDoubleClick:c,onContextMenu:u,onMouseEnter:d,onMouseMove:f,onMouseLeave:p,reconnectRadius:g,onReconnect:h,onReconnectStart:v,onReconnectEnd:x,rfId:w,edgeTypes:C,noPanClassName:S,onError:_,disableKeyboardA11y:N}){let E=Pe(he=>he.edgeLookup.get(n));const b=Pe(he=>he.defaultEdgeOptions);E=b?{...b,...E}:E;let R=E.type||"default",L=(C==null?void 0:C[R])||$p[R];L===void 0&&(_==null||_("011",qn.error011(R)),R="default",L=(C==null?void 0:C.default)||$p.default);const F=!!(E.focusable||r&&typeof E.focusable>"u"),P=typeof h<"u"&&(E.reconnectable||o&&typeof E.reconnectable>"u"),A=!!(E.selectable||l&&typeof E.selectable>"u"),$=re.useRef(null),[I,D]=re.useState(!1),[J,T]=re.useState(!1),Y=Fe(),{zIndex:U,sourceX:G,sourceY:W,targetX:B,targetY:X,sourcePosition:M,targetPosition:j}=Pe(re.useCallback(he=>{const de=he.nodeLookup.get(E.source),_e=he.nodeLookup.get(E.target);if(!de||!_e)return{zIndex:E.zIndex,...Bp};const be=M2({id:n,sourceNode:de,targetNode:_e,sourceHandle:E.sourceHandle||null,targetHandle:E.targetHandle||null,connectionMode:he.connectionMode,onError:_});return{zIndex:S2({selected:E.selected,zIndex:E.zIndex,sourceNode:de,targetNode:_e,elevateOnSelect:he.elevateEdgesOnSelect,zIndexMode:he.zIndexMode}),...be||Bp}},[E.source,E.target,E.sourceHandle,E.targetHandle,E.selected,E.zIndex]),Oe),O=re.useMemo(()=>E.markerStart?`url('#${jc(E.markerStart,w)}')`:void 0,[E.markerStart,w]),Q=re.useMemo(()=>E.markerEnd?`url('#${jc(E.markerEnd,w)}')`:void 0,[E.markerEnd,w]);if(E.hidden||G===null||W===null||B===null||X===null)return null;const K=he=>{var Ne;const{addSelectedEdges:de,unselectNodesAndEdges:_e,multiSelectionActive:be}=Y.getState();A&&(Y.setState({nodesSelectionActive:!1}),E.selected&&be?(_e({nodes:[],edges:[E]}),(Ne=$.current)==null||Ne.blur()):de([n])),s&&s(he,E)},ie=c?he=>{c(he,{...E})}:void 0,le=u?he=>{u(he,{...E})}:void 0,Z=d?he=>{d(he,{...E})}:void 0,oe=f?he=>{f(he,{...E})}:void 0,fe=p?he=>{p(he,{...E})}:void 0,xe=he=>{var de;if(!N&&_0.includes(he.key)&&A){const{unselectNodesAndEdges:_e,addSelectedEdges:be}=Y.getState();he.key==="Escape"?((de=$.current)==null||de.blur(),_e({edges:[E]})):be([n])}};return V.jsx("svg",{style:{zIndex:U},children:V.jsxs("g",{className:qe(["react-flow__edge",`react-flow__edge-${R}`,E.className,S,{selected:E.selected,animated:E.animated,inactive:!A&&!s,updating:I,selectable:A}]),onClick:K,onDoubleClick:ie,onContextMenu:le,onMouseEnter:Z,onMouseMove:oe,onMouseLeave:fe,onKeyDown:F?xe:void 0,tabIndex:F?0:void 0,role:E.ariaRole??(F?"group":"img"),"aria-roledescription":"edge","data-id":n,"data-testid":`rf__edge-${n}`,"aria-label":E.ariaLabel===null?void 0:E.ariaLabel||`Edge from ${E.source} to ${E.target}`,"aria-describedby":F?`${ng}-${w}`:void 0,ref:$,...E.domAttributes,children:[!J&&V.jsx(L,{id:n,source:E.source,target:E.target,type:E.type,selected:E.selected,animated:E.animated,selectable:A,deletable:E.deletable??!0,label:E.label,labelStyle:E.labelStyle,labelShowBg:E.labelShowBg,labelBgStyle:E.labelBgStyle,labelBgPadding:E.labelBgPadding,labelBgBorderRadius:E.labelBgBorderRadius,sourceX:G,sourceY:W,targetX:B,targetY:X,sourcePosition:M,targetPosition:j,data:E.data,style:E.style,sourceHandleId:E.sourceHandle,targetHandleId:E.targetHandle,markerStart:O,markerEnd:Q,pathOptions:"pathOptions"in E?E.pathOptions:void 0,interactionWidth:E.interactionWidth}),P&&V.jsx(HE,{edge:E,isReconnectable:P,reconnectRadius:g,onReconnect:h,onReconnectStart:v,onReconnectEnd:x,sourceX:G,sourceY:W,targetX:B,targetY:X,sourcePosition:M,targetPosition:j,setUpdateHover:D,setReconnecting:T})]})})}var BE=re.memo($E);const VE=n=>({edgesFocusable:n.edgesFocusable,edgesReconnectable:n.edgesReconnectable,elementsSelectable:n.elementsSelectable,connectionMode:n.connectionMode,onError:n.onError});function Cg({defaultMarkerColor:n,onlyRenderVisibleElements:r,rfId:o,edgeTypes:l,noPanClassName:s,onReconnect:c,onEdgeContextMenu:u,onEdgeMouseEnter:d,onEdgeMouseMove:f,onEdgeMouseLeave:p,onEdgeClick:g,reconnectRadius:h,onEdgeDoubleClick:v,onReconnectStart:x,onReconnectEnd:w,disableKeyboardA11y:C}){const{edgesFocusable:S,edgesReconnectable:_,elementsSelectable:N,onError:E}=Pe(VE,Oe),b=NE(r);return V.jsxs("div",{className:"react-flow__edges",children:[V.jsx(IE,{defaultColor:n,rfId:o}),b.map(R=>V.jsx(BE,{id:R,edgesFocusable:S,edgesReconnectable:_,elementsSelectable:N,noPanClassName:s,onReconnect:c,onContextMenu:u,onMouseEnter:d,onMouseMove:f,onMouseLeave:p,onClick:g,reconnectRadius:h,onDoubleClick:v,onReconnectStart:x,onReconnectEnd:w,rfId:o,onError:E,edgeTypes:l,disableKeyboardA11y:C},R))]})}Cg.displayName="EdgeRenderer";const WE=re.memo(Cg),QE=n=>`translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]})`;function UE({children:n}){const r=Pe(QE);return V.jsx("div",{className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:r},children:n})}function qE(n){const r=_s(),o=re.useRef(!1);re.useEffect(()=>{!o.current&&r.viewportInitialized&&n&&(setTimeout(()=>n(r),1),o.current=!0)},[n,r.viewportInitialized])}const YE=n=>{var r;return(r=n.panZoom)==null?void 0:r.syncViewport};function GE(n){const r=Pe(YE),o=Fe();return re.useEffect(()=>{n&&(r==null||r(n),o.setState({transform:[n.x,n.y,n.zoom]}))},[n,r]),null}function XE(n){return n.connection.inProgress?{...n.connection,to:ai(n.connection.to,n.transform)}:{...n.connection}}function KE(n){return XE}function ZE(n){const r=KE();return Pe(r,Oe)}const JE=n=>({nodesConnectable:n.nodesConnectable,isValid:n.connection.isValid,inProgress:n.connection.inProgress,width:n.width,height:n.height});function e_({containerStyle:n,style:r,type:o,component:l}){const{nodesConnectable:s,width:c,height:u,isValid:d,inProgress:f}=Pe(JE,Oe);return!(c&&s&&f)?null:V.jsx("svg",{style:n,width:c,height:u,className:"react-flow__connectionline react-flow__container",children:V.jsx("g",{className:qe(["react-flow__connection",b0(d)]),children:V.jsx(bg,{style:r,type:o,CustomComponent:l,isValid:d})})})}const bg=({style:n,type:r=Wt.Bezier,CustomComponent:o,isValid:l})=>{const{inProgress:s,from:c,fromNode:u,fromHandle:d,fromPosition:f,to:p,toNode:g,toHandle:h,toPosition:v,pointer:x}=ZE();if(!s)return;if(o)return V.jsx(o,{connectionLineType:r,connectionLineStyle:n,fromNode:u,fromHandle:d,fromX:c.x,fromY:c.y,toX:p.x,toY:p.y,fromPosition:f,toPosition:v,connectionStatus:b0(l),toNode:g,toHandle:h,pointer:x});let w="";const C={sourceX:c.x,sourceY:c.y,sourcePosition:f,targetX:p.x,targetY:p.y,targetPosition:v};switch(r){case Wt.Bezier:[w]=F0(C);break;case Wt.SimpleBezier:[w]=hg(C);break;case Wt.Step:[w]=Fc({...C,borderRadius:0});break;case Wt.SmoothStep:[w]=Fc(C);break;default:[w]=H0(C)}return V.jsx("path",{d:w,fill:"none",className:"react-flow__connection-path",style:n})};bg.displayName="ConnectionLine";const n_={};function Qp(n=n_){re.useRef(n),Fe(),re.useEffect(()=>{},[n])}function t_(){Fe(),re.useRef(!1),re.useEffect(()=>{},[])}function Ng({nodeTypes:n,edgeTypes:r,onInit:o,onNodeClick:l,onEdgeClick:s,onNodeDoubleClick:c,onEdgeDoubleClick:u,onNodeMouseEnter:d,onNodeMouseMove:f,onNodeMouseLeave:p,onNodeContextMenu:g,onSelectionContextMenu:h,onSelectionStart:v,onSelectionEnd:x,connectionLineType:w,connectionLineStyle:C,connectionLineComponent:S,connectionLineContainerStyle:_,selectionKeyCode:N,selectionOnDrag:E,selectionMode:b,multiSelectionKeyCode:R,panActivationKeyCode:L,zoomActivationKeyCode:F,deleteKeyCode:P,onlyRenderVisibleElements:A,elementsSelectable:$,defaultViewport:I,translateExtent:D,minZoom:J,maxZoom:T,preventScrolling:Y,defaultMarkerColor:U,zoomOnScroll:G,zoomOnPinch:W,panOnScroll:B,panOnScrollSpeed:X,panOnScrollMode:M,zoomOnDoubleClick:j,panOnDrag:O,autoPanOnSelection:Q,onPaneClick:K,onPaneMouseEnter:ie,onPaneMouseMove:le,onPaneMouseLeave:Z,onPaneScroll:oe,onPaneContextMenu:fe,paneClickDistance:xe,nodeClickDistance:he,onEdgeContextMenu:de,onEdgeMouseEnter:_e,onEdgeMouseMove:be,onEdgeMouseLeave:Ne,reconnectRadius:Ae,onReconnect:an,onReconnectStart:dn,onReconnectEnd:nn,noDragClassName:tn,noWheelClassName:lt,noPanClassName:Xn,disableKeyboardA11y:Kn,nodeExtent:fn,rfId:Mn,viewport:wn,onViewportChange:Tn}){return Qp(n),Qp(r),t_(),qE(o),GE(wn),V.jsx(yE,{onPaneClick:K,onPaneMouseEnter:ie,onPaneMouseMove:le,onPaneMouseLeave:Z,onPaneContextMenu:fe,onPaneScroll:oe,paneClickDistance:xe,deleteKeyCode:P,selectionKeyCode:N,selectionOnDrag:E,selectionMode:b,onSelectionStart:v,onSelectionEnd:x,multiSelectionKeyCode:R,panActivationKeyCode:L,zoomActivationKeyCode:F,elementsSelectable:$,zoomOnScroll:G,zoomOnPinch:W,zoomOnDoubleClick:j,panOnScroll:B,panOnScrollSpeed:X,panOnScrollMode:M,panOnDrag:O,autoPanOnSelection:Q,defaultViewport:I,translateExtent:D,minZoom:J,maxZoom:T,onSelectionContextMenu:h,preventScrolling:Y,noDragClassName:tn,noWheelClassName:lt,noPanClassName:Xn,disableKeyboardA11y:Kn,onViewportChange:Tn,isControlledViewport:!!wn,children:V.jsxs(UE,{children:[V.jsx(WE,{edgeTypes:r,onEdgeClick:s,onEdgeDoubleClick:u,onReconnect:an,onReconnectStart:dn,onReconnectEnd:nn,onlyRenderVisibleElements:A,onEdgeContextMenu:de,onEdgeMouseEnter:_e,onEdgeMouseMove:be,onEdgeMouseLeave:Ne,reconnectRadius:Ae,defaultMarkerColor:U,noPanClassName:Xn,disableKeyboardA11y:Kn,rfId:Mn}),V.jsx(e_,{style:C,type:w,component:S,containerStyle:_}),V.jsx("div",{className:"react-flow__edgelabel-renderer"}),V.jsx(bE,{nodeTypes:n,onNodeClick:l,onNodeDoubleClick:c,onNodeMouseEnter:d,onNodeMouseMove:f,onNodeMouseLeave:p,onNodeContextMenu:g,nodeClickDistance:he,onlyRenderVisibleElements:A,noPanClassName:Xn,noDragClassName:tn,disableKeyboardA11y:Kn,nodeExtent:fn,rfId:Mn}),V.jsx("div",{className:"react-flow__viewport-portal"})]})})}Ng.displayName="GraphView";const r_=re.memo(Ng),i_=L0(),Up=({nodes:n,edges:r,defaultNodes:o,defaultEdges:l,width:s,height:c,fitView:u,fitViewOptions:d,minZoom:f=.5,maxZoom:p=2,nodeOrigin:g,nodeExtent:h,zIndexMode:v="basic"}={})=>{const x=new Map,w=new Map,C=new Map,S=new Map,_=l??r??[],N=o??n??[],E=g??[0,0],b=h??uo;V0(C,S,_);const{nodesInitialized:R}=Hc(N,x,w,{nodeOrigin:E,nodeExtent:b,zIndexMode:v});let L=[0,0,1];if(u&&s&&c){const F=xo(x,{filter:I=>!!((I.width||I.initialWidth)&&(I.height||I.initialHeight))}),{x:P,y:A,zoom:$}=ed(F,s,c,f,p,(d==null?void 0:d.padding)??.1);L=[P,A,$]}return{rfId:"1",width:s??0,height:c??0,transform:L,nodes:N,nodesInitialized:R,nodeLookup:x,parentLookup:w,edges:_,edgeLookup:S,connectionLookup:C,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:o!==void 0,hasDefaultEdges:l!==void 0,panZoom:null,minZoom:f,maxZoom:p,translateExtent:uo,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:ti.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:E,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:u??!1,fitViewOptions:d,fitViewResolver:null,connection:{...C0},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:i_,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:k0,zIndexMode:v,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},o_=({nodes:n,edges:r,defaultNodes:o,defaultEdges:l,width:s,height:c,fitView:u,fitViewOptions:d,minZoom:f,maxZoom:p,nodeOrigin:g,nodeExtent:h,zIndexMode:v})=>vS((x,w)=>{async function C(){const{nodeLookup:S,panZoom:_,fitViewOptions:N,fitViewResolver:E,width:b,height:R,minZoom:L,maxZoom:F}=w();_&&(await p2({nodes:S,width:b,height:R,panZoom:_,minZoom:L,maxZoom:F},N),E==null||E.resolve(!0),x({fitViewResolver:null}))}return{...Up({nodes:n,edges:r,width:s,height:c,fitView:u,fitViewOptions:d,minZoom:f,maxZoom:p,nodeOrigin:g,nodeExtent:h,defaultNodes:o,defaultEdges:l,zIndexMode:v}),setNodes:S=>{const{nodeLookup:_,parentLookup:N,nodeOrigin:E,elevateNodesOnSelect:b,fitViewQueued:R,zIndexMode:L,nodesSelectionActive:F}=w(),{nodesInitialized:P,hasSelectedNodes:A}=Hc(S,_,N,{nodeOrigin:E,nodeExtent:h,elevateNodesOnSelect:b,checkEquality:!0,zIndexMode:L}),$=F&&A;R&&P?(C(),x({nodes:S,nodesInitialized:P,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:$})):x({nodes:S,nodesInitialized:P,nodesSelectionActive:$})},setEdges:S=>{const{connectionLookup:_,edgeLookup:N}=w();V0(_,N,S),x({edges:S})},setDefaultNodesAndEdges:(S,_)=>{if(S){const{setNodes:N}=w();N(S),x({hasDefaultNodes:!0})}if(_){const{setEdges:N}=w();N(_),x({hasDefaultEdges:!0})}},updateNodeInternals:S=>{const{triggerNodeChanges:_,nodeLookup:N,parentLookup:E,domNode:b,nodeOrigin:R,nodeExtent:L,debug:F,fitViewQueued:P,zIndexMode:A}=w(),{changes:$,updatedInternals:I}=O2(S,N,E,b,R,L,A);I&&(A2(N,E,{nodeOrigin:R,nodeExtent:L,zIndexMode:A}),P?(C(),x({fitViewQueued:!1,fitViewOptions:void 0})):x({}),($==null?void 0:$.length)>0&&(F&&console.log("React Flow: trigger node changes",$),_==null||_($)))},updateNodePositions:(S,_=!1)=>{const N=[];let E=[];const{nodeLookup:b,triggerNodeChanges:R,connection:L,updateConnection:F,onNodesChangeMiddlewareMap:P}=w();for(const[A,$]of S){const I=b.get(A),D=!!(I!=null&&I.expandParent&&(I!=null&&I.parentId)&&($!=null&&$.position)),J={id:A,type:"position",position:D?{x:Math.max(0,$.position.x),y:Math.max(0,$.position.y)}:$.position,dragging:_};if(I&&L.inProgress&&L.fromNode.id===I.id){const T=xr(I,L.fromHandle,we.Left,!0);F({...L,from:T})}D&&I.parentId&&N.push({id:A,parentId:I.parentId,rect:{...$.internals.positionAbsolute,width:$.measured.width??0,height:$.measured.height??0}}),E.push(J)}if(N.length>0){const{parentLookup:A,nodeOrigin:$}=w(),I=ld(N,b,A,$);E.push(...I)}for(const A of P.values())E=A(E);R(E)},triggerNodeChanges:S=>{const{onNodesChange:_,setNodes:N,nodes:E,hasDefaultNodes:b,debug:R}=w();if(S!=null&&S.length){if(b){const L=jS(S,E);N(L)}R&&console.log("React Flow: trigger node changes",S),_==null||_(S)}},triggerEdgeChanges:S=>{const{onEdgesChange:_,setEdges:N,edges:E,hasDefaultEdges:b,debug:R}=w();if(S!=null&&S.length){if(b){const L=HS(S,E);N(L)}R&&console.log("React Flow: trigger edge changes",S),_==null||_(S)}},addSelectedNodes:S=>{const{multiSelectionActive:_,edgeLookup:N,nodeLookup:E,triggerNodeChanges:b,triggerEdgeChanges:R}=w();if(_){const L=S.map(F=>dr(F,!0));b(L);return}b(Kr(E,new Set([...S]),!0)),R(Kr(N))},addSelectedEdges:S=>{const{multiSelectionActive:_,edgeLookup:N,nodeLookup:E,triggerNodeChanges:b,triggerEdgeChanges:R}=w();if(_){const L=S.map(F=>dr(F,!0));R(L);return}R(Kr(N,new Set([...S]))),b(Kr(E,new Set,!0))},unselectNodesAndEdges:({nodes:S,edges:_}={})=>{const{edges:N,nodes:E,nodeLookup:b,triggerNodeChanges:R,triggerEdgeChanges:L}=w(),F=S||E,P=_||N,A=[];for(const I of F){if(!I.selected)continue;const D=b.get(I.id);D&&(D.selected=!1),A.push(dr(I.id,!1))}const $=[];for(const I of P)I.selected&&$.push(dr(I.id,!1));R(A),L($)},setMinZoom:S=>{const{panZoom:_,maxZoom:N}=w();_==null||_.setScaleExtent([S,N]),x({minZoom:S})},setMaxZoom:S=>{const{panZoom:_,minZoom:N}=w();_==null||_.setScaleExtent([N,S]),x({maxZoom:S})},setTranslateExtent:S=>{var _;(_=w().panZoom)==null||_.setTranslateExtent(S),x({translateExtent:S})},resetSelectedElements:()=>{const{edges:S,nodes:_,triggerNodeChanges:N,triggerEdgeChanges:E,elementsSelectable:b}=w();if(!b)return;const R=_.reduce((F,P)=>P.selected?[...F,dr(P.id,!1)]:F,[]),L=S.reduce((F,P)=>P.selected?[...F,dr(P.id,!1)]:F,[]);N(R),E(L)},setNodeExtent:S=>{const{nodes:_,nodeLookup:N,parentLookup:E,nodeOrigin:b,elevateNodesOnSelect:R,nodeExtent:L,zIndexMode:F}=w();S[0][0]===L[0][0]&&S[0][1]===L[0][1]&&S[1][0]===L[1][0]&&S[1][1]===L[1][1]||(Hc(_,N,E,{nodeOrigin:b,nodeExtent:S,elevateNodesOnSelect:R,checkEquality:!1,zIndexMode:F}),x({nodeExtent:S}))},panBy:S=>{const{transform:_,width:N,height:E,panZoom:b,translateExtent:R}=w();return F2({delta:S,panZoom:b,transform:_,translateExtent:R,width:N,height:E})},setCenter:async(S,_,N)=>{const{width:E,height:b,maxZoom:R,panZoom:L}=w();if(!L)return!1;const F=typeof(N==null?void 0:N.zoom)<"u"?N.zoom:R;return await L.setViewport({x:E/2-S*F,y:b/2-_*F,zoom:F},{duration:N==null?void 0:N.duration,ease:N==null?void 0:N.ease,interpolate:N==null?void 0:N.interpolate}),!0},cancelConnection:()=>{x({connection:{...C0}})},updateConnection:S=>{x({connection:S})},reset:()=>x({...Up()})}},Object.is);function Pg({initialNodes:n,initialEdges:r,defaultNodes:o,defaultEdges:l,initialWidth:s,initialHeight:c,initialMinZoom:u,initialMaxZoom:d,initialFitViewOptions:f,fitView:p,nodeOrigin:g,nodeExtent:h,zIndexMode:v,children:x}){const[w]=re.useState(()=>o_({nodes:n,edges:r,defaultNodes:o,defaultEdges:l,width:s,height:c,fitView:p,minZoom:u,maxZoom:d,fitViewOptions:f,nodeOrigin:g,nodeExtent:h,zIndexMode:v}));return V.jsx(xS,{value:w,children:V.jsx(US,{children:x})})}function l_({children:n,nodes:r,edges:o,defaultNodes:l,defaultEdges:s,width:c,height:u,fitView:d,fitViewOptions:f,minZoom:p,maxZoom:g,nodeOrigin:h,nodeExtent:v,zIndexMode:x}){return re.useContext(Ss)?V.jsx(V.Fragment,{children:n}):V.jsx(Pg,{initialNodes:r,initialEdges:o,defaultNodes:l,defaultEdges:s,initialWidth:c,initialHeight:u,fitView:d,initialFitViewOptions:f,initialMinZoom:p,initialMaxZoom:g,nodeOrigin:h,nodeExtent:v,zIndexMode:x,children:n})}const s_={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function a_({nodes:n,edges:r,defaultNodes:o,defaultEdges:l,className:s,nodeTypes:c,edgeTypes:u,onNodeClick:d,onEdgeClick:f,onInit:p,onMove:g,onMoveStart:h,onMoveEnd:v,onConnect:x,onConnectStart:w,onConnectEnd:C,onClickConnectStart:S,onClickConnectEnd:_,onNodeMouseEnter:N,onNodeMouseMove:E,onNodeMouseLeave:b,onNodeContextMenu:R,onNodeDoubleClick:L,onNodeDragStart:F,onNodeDrag:P,onNodeDragStop:A,onNodesDelete:$,onEdgesDelete:I,onDelete:D,onSelectionChange:J,onSelectionDragStart:T,onSelectionDrag:Y,onSelectionDragStop:U,onSelectionContextMenu:G,onSelectionStart:W,onSelectionEnd:B,onBeforeDelete:X,connectionMode:M,connectionLineType:j=Wt.Bezier,connectionLineStyle:O,connectionLineComponent:Q,connectionLineContainerStyle:K,deleteKeyCode:ie="Backspace",selectionKeyCode:le="Shift",selectionOnDrag:Z=!1,selectionMode:oe=co.Full,panActivationKeyCode:fe="Space",multiSelectionKeyCode:xe=ho()?"Meta":"Control",zoomActivationKeyCode:he=ho()?"Meta":"Control",snapToGrid:de,snapGrid:_e,onlyRenderVisibleElements:be=!1,selectNodesOnDrag:Ne,nodesDraggable:Ae,autoPanOnNodeFocus:an,nodesConnectable:dn,nodesFocusable:nn,nodeOrigin:tn=tg,edgesFocusable:lt,edgesReconnectable:Xn,elementsSelectable:Kn=!0,defaultViewport:fn=IS,minZoom:Mn=.5,maxZoom:wn=2,translateExtent:Tn=uo,preventScrolling:So=!0,nodeExtent:st,defaultMarkerColor:Ut="#b1b1b7",zoomOnScroll:bs=!0,zoomOnPinch:Eo=!0,panOnScroll:_o=!1,panOnScrollSpeed:Ns=.5,panOnScrollMode:ui=pr.Free,zoomOnDoubleClick:ci=!0,panOnDrag:di=!0,onPaneClick:fi,onPaneMouseEnter:hi,onPaneMouseMove:St,onPaneMouseLeave:Et,onPaneScroll:ko,onPaneContextMenu:Co,paneClickDistance:bo=1,nodeClickDistance:No=0,children:Po,onReconnect:pi,onReconnectStart:Mo,onReconnectEnd:qt,onEdgeContextMenu:mi,onEdgeDoubleClick:Yt,onEdgeMouseEnter:Ps,onEdgeMouseMove:Gt,onEdgeMouseLeave:wr,reconnectRadius:Sr=10,onNodesChange:gi,onEdgesChange:Ms,noDragClassName:Ts="nodrag",noWheelClassName:Ls="nowheel",noPanClassName:Zn="nopan",fitView:yi,fitViewOptions:vi,connectOnClick:Is,attributionPosition:To,proOptions:Lo,defaultEdgeOptions:Io,elevateNodesOnSelect:Ao=!0,elevateEdgesOnSelect:As=!1,disableKeyboardA11y:Ro=!1,autoPanOnConnect:je,autoPanOnNodeDrag:Rs,autoPanOnSelection:xi=!0,autoPanSpeed:zo,connectionRadius:Er,isValidConnection:zs,onError:Do,style:_r,id:Sn,nodeDragThreshold:Ds,connectionDragThreshold:En,viewport:Os,onViewportChange:Fs,width:js,height:kr,colorMode:Cr="light",debug:Xt,onScroll:at,ariaLabelConfig:Hs,zIndexMode:Oo="basic",...wi},Fo){const Kt=Sn||"1",Zt=DS(Cr),$s=re.useCallback(br=>{br.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),at==null||at(br)},[at]);return V.jsx("div",{"data-testid":"rf__wrapper",...wi,onScroll:$s,style:{..._r,...s_},ref:Fo,className:qe(["react-flow",s,Zt]),id:Sn,role:"application",children:V.jsxs(l_,{nodes:n,edges:r,width:js,height:kr,fitView:yi,fitViewOptions:vi,minZoom:Mn,maxZoom:wn,nodeOrigin:tn,nodeExtent:st,zIndexMode:Oo,children:[V.jsx(zS,{nodes:n,edges:r,defaultNodes:o,defaultEdges:l,onConnect:x,onConnectStart:w,onConnectEnd:C,onClickConnectStart:S,onClickConnectEnd:_,nodesDraggable:Ae,autoPanOnNodeFocus:an,nodesConnectable:dn,nodesFocusable:nn,edgesFocusable:lt,edgesReconnectable:Xn,elementsSelectable:Kn,elevateNodesOnSelect:Ao,elevateEdgesOnSelect:As,minZoom:Mn,maxZoom:wn,nodeExtent:st,onNodesChange:gi,onEdgesChange:Ms,snapToGrid:de,snapGrid:_e,connectionMode:M,translateExtent:Tn,connectOnClick:Is,defaultEdgeOptions:Io,fitView:yi,fitViewOptions:vi,onNodesDelete:$,onEdgesDelete:I,onDelete:D,onNodeDragStart:F,onNodeDrag:P,onNodeDragStop:A,onSelectionDrag:Y,onSelectionDragStart:T,onSelectionDragStop:U,onMove:g,onMoveStart:h,onMoveEnd:v,noPanClassName:Zn,nodeOrigin:tn,rfId:Kt,autoPanOnConnect:je,autoPanOnNodeDrag:Rs,autoPanSpeed:zo,onError:Do,connectionRadius:Er,isValidConnection:zs,selectNodesOnDrag:Ne,nodeDragThreshold:Ds,connectionDragThreshold:En,onBeforeDelete:X,debug:Xt,ariaLabelConfig:Hs,zIndexMode:Oo}),V.jsx(r_,{onInit:p,onNodeClick:d,onEdgeClick:f,onNodeMouseEnter:N,onNodeMouseMove:E,onNodeMouseLeave:b,onNodeContextMenu:R,onNodeDoubleClick:L,nodeTypes:c,edgeTypes:u,connectionLineType:j,connectionLineStyle:O,connectionLineComponent:Q,connectionLineContainerStyle:K,selectionKeyCode:le,selectionOnDrag:Z,selectionMode:oe,deleteKeyCode:ie,multiSelectionKeyCode:xe,panActivationKeyCode:fe,zoomActivationKeyCode:he,onlyRenderVisibleElements:be,defaultViewport:fn,translateExtent:Tn,minZoom:Mn,maxZoom:wn,preventScrolling:So,zoomOnScroll:bs,zoomOnPinch:Eo,zoomOnDoubleClick:ci,panOnScroll:_o,panOnScrollSpeed:Ns,panOnScrollMode:ui,panOnDrag:di,autoPanOnSelection:xi,onPaneClick:fi,onPaneMouseEnter:hi,onPaneMouseMove:St,onPaneMouseLeave:Et,onPaneScroll:ko,onPaneContextMenu:Co,paneClickDistance:bo,nodeClickDistance:No,onSelectionContextMenu:G,onSelectionStart:W,onSelectionEnd:B,onReconnect:pi,onReconnectStart:Mo,onReconnectEnd:qt,onEdgeContextMenu:mi,onEdgeDoubleClick:Yt,onEdgeMouseEnter:Ps,onEdgeMouseMove:Gt,onEdgeMouseLeave:wr,reconnectRadius:Sr,defaultMarkerColor:Ut,noDragClassName:Ts,noWheelClassName:Ls,noPanClassName:Zn,rfId:Kt,disableKeyboardA11y:Ro,nodeExtent:st,viewport:Os,onViewportChange:Fs}),V.jsx(LS,{onSelectionChange:J}),Po,V.jsx(bS,{proOptions:Lo,position:To}),V.jsx(CS,{rfId:Kt,disableKeyboardA11y:Ro})]})})}var u_=ig(a_);function c_({dimensions:n,lineWidth:r,variant:o,className:l}){return V.jsx("path",{strokeWidth:r,d:`M${n[0]/2} 0 V${n[1]} M0 ${n[1]/2} H${n[0]}`,className:qe(["react-flow__background-pattern",o,l])})}function d_({radius:n,className:r}){return V.jsx("circle",{cx:n,cy:n,r:n,className:qe(["react-flow__background-pattern","dots",r])})}var Qt;(function(n){n.Lines="lines",n.Dots="dots",n.Cross="cross"})(Qt||(Qt={}));const f_={[Qt.Dots]:1,[Qt.Lines]:1,[Qt.Cross]:6},h_=n=>({transform:n.transform,patternId:`pattern-${n.rfId}`});function Mg({id:n,variant:r=Qt.Dots,gap:o=20,size:l,lineWidth:s=1,offset:c=0,color:u,bgColor:d,style:f,className:p,patternClassName:g}){const h=re.useRef(null),{transform:v,patternId:x}=Pe(h_,Oe),w=l||f_[r],C=r===Qt.Dots,S=r===Qt.Cross,_=Array.isArray(o)?o:[o,o],N=[_[0]*v[2]||1,_[1]*v[2]||1],E=w*v[2],b=Array.isArray(c)?c:[c,c],R=S?[E,E]:N,L=[b[0]*v[2]||1+R[0]/2,b[1]*v[2]||1+R[1]/2],F=`${x}${n||""}`;return V.jsxs("svg",{className:qe(["react-flow__background",p]),style:{...f,...ks,"--xy-background-color-props":d,"--xy-background-pattern-color-props":u},ref:h,"data-testid":"rf__background",children:[V.jsx("pattern",{id:F,x:v[0]%N[0],y:v[1]%N[1],width:N[0],height:N[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${L[0]},-${L[1]})`,children:C?V.jsx(d_,{radius:E/2,className:g}):V.jsx(c_,{dimensions:R,lineWidth:s,variant:r,className:g})}),V.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${F})`})]})}Mg.displayName="Background";const p_=re.memo(Mg);function m_(){return V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:V.jsx("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function g_(){return V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:V.jsx("path",{d:"M0 0h32v4.2H0z"})})}function y_(){return V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:V.jsx("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function v_(){return V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:V.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function x_(){return V.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:V.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Yl({children:n,className:r,...o}){return V.jsx("button",{type:"button",className:qe(["react-flow__controls-button",r]),...o,children:n})}const w_=n=>({isInteractive:n.nodesDraggable||n.nodesConnectable||n.elementsSelectable,minZoomReached:n.transform[2]<=n.minZoom,maxZoomReached:n.transform[2]>=n.maxZoom,ariaLabelConfig:n.ariaLabelConfig});function Tg({style:n,showZoom:r=!0,showFitView:o=!0,showInteractive:l=!0,fitViewOptions:s,onZoomIn:c,onZoomOut:u,onFitView:d,onInteractiveChange:f,className:p,children:g,position:h="bottom-left",orientation:v="vertical","aria-label":x}){const w=Fe(),{isInteractive:C,minZoomReached:S,maxZoomReached:_,ariaLabelConfig:N}=Pe(w_,Oe),{zoomIn:E,zoomOut:b,fitView:R}=_s(),L=()=>{E(),c==null||c()},F=()=>{b(),u==null||u()},P=()=>{R(s),d==null||d()},A=()=>{w.setState({nodesDraggable:!C,nodesConnectable:!C,elementsSelectable:!C}),f==null||f(!C)},$=v==="horizontal"?"horizontal":"vertical";return V.jsxs(Es,{className:qe(["react-flow__controls",$,p]),position:h,style:n,"data-testid":"rf__controls","aria-label":x??N["controls.ariaLabel"],children:[r&&V.jsxs(V.Fragment,{children:[V.jsx(Yl,{onClick:L,className:"react-flow__controls-zoomin",title:N["controls.zoomIn.ariaLabel"],"aria-label":N["controls.zoomIn.ariaLabel"],disabled:_,children:V.jsx(m_,{})}),V.jsx(Yl,{onClick:F,className:"react-flow__controls-zoomout",title:N["controls.zoomOut.ariaLabel"],"aria-label":N["controls.zoomOut.ariaLabel"],disabled:S,children:V.jsx(g_,{})})]}),o&&V.jsx(Yl,{className:"react-flow__controls-fitview",onClick:P,title:N["controls.fitView.ariaLabel"],"aria-label":N["controls.fitView.ariaLabel"],children:V.jsx(y_,{})}),l&&V.jsx(Yl,{className:"react-flow__controls-interactive",onClick:A,title:N["controls.interactive.ariaLabel"],"aria-label":N["controls.interactive.ariaLabel"],children:C?V.jsx(x_,{}):V.jsx(v_,{})}),g]})}Tg.displayName="Controls";const S_=re.memo(Tg);function E_({id:n,x:r,y:o,width:l,height:s,style:c,color:u,strokeColor:d,strokeWidth:f,className:p,borderRadius:g,shapeRendering:h,selected:v,onClick:x}){const{background:w,backgroundColor:C}=c||{},S=u||w||C;return V.jsx("rect",{className:qe(["react-flow__minimap-node",{selected:v},p]),x:r,y:o,rx:g,ry:g,width:l,height:s,style:{fill:S,stroke:d,strokeWidth:f},shapeRendering:h,onClick:x?_=>x(_,n):void 0})}const __=re.memo(E_),k_=n=>n.nodes.map(r=>r.id),zu=n=>n instanceof Function?n:()=>n;function C_({nodeStrokeColor:n,nodeColor:r,nodeClassName:o="",nodeBorderRadius:l=5,nodeStrokeWidth:s,nodeComponent:c=__,onClick:u}){const d=Pe(k_,Oe),f=zu(r),p=zu(n),g=zu(o),h=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return V.jsx(V.Fragment,{children:d.map(v=>V.jsx(N_,{id:v,nodeColorFunc:f,nodeStrokeColorFunc:p,nodeClassNameFunc:g,nodeBorderRadius:l,nodeStrokeWidth:s,NodeComponent:c,onClick:u,shapeRendering:h},v))})}function b_({id:n,nodeColorFunc:r,nodeStrokeColorFunc:o,nodeClassNameFunc:l,nodeBorderRadius:s,nodeStrokeWidth:c,shapeRendering:u,NodeComponent:d,onClick:f}){const{node:p,x:g,y:h,width:v,height:x}=Pe(w=>{const C=w.nodeLookup.get(n);if(!C)return{node:void 0,x:0,y:0,width:0,height:0};const S=C.internals.userNode,{x:_,y:N}=C.internals.positionAbsolute,{width:E,height:b}=wt(S);return{node:S,x:_,y:N,width:E,height:b}},Oe);return!p||p.hidden||!I0(p)?null:V.jsx(d,{x:g,y:h,width:v,height:x,style:p.style,selected:!!p.selected,className:l(p),color:r(p),borderRadius:s,strokeColor:o(p),strokeWidth:c,shapeRendering:u,onClick:f,id:p.id})}const N_=re.memo(b_);var P_=re.memo(C_);const M_=200,T_=150,L_=n=>!n.hidden,I_=n=>{const r={x:-n.transform[0]/n.transform[2],y:-n.transform[1]/n.transform[2],width:n.width/n.transform[2],height:n.height/n.transform[2]};return{viewBB:r,boundingRect:n.nodeLookup.size>0?T0(xo(n.nodeLookup,{filter:L_}),r):r,rfId:n.rfId,panZoom:n.panZoom,translateExtent:n.translateExtent,flowWidth:n.width,flowHeight:n.height,ariaLabelConfig:n.ariaLabelConfig}},A_="react-flow__minimap-desc";function Lg({style:n,className:r,nodeStrokeColor:o,nodeColor:l,nodeClassName:s="",nodeBorderRadius:c=5,nodeStrokeWidth:u,nodeComponent:d,bgColor:f,maskColor:p,maskStrokeColor:g,maskStrokeWidth:h,position:v="bottom-right",onClick:x,onNodeClick:w,pannable:C=!1,zoomable:S=!1,ariaLabel:_,inversePan:N,zoomStep:E=1,offsetScale:b=5}){const R=Fe(),L=re.useRef(null),{boundingRect:F,viewBB:P,rfId:A,panZoom:$,translateExtent:I,flowWidth:D,flowHeight:J,ariaLabelConfig:T}=Pe(I_,Oe),Y=(n==null?void 0:n.width)??M_,U=(n==null?void 0:n.height)??T_,G=F.width/Y,W=F.height/U,B=Math.max(G,W),X=B*Y,M=B*U,j=b*B,O=F.x-(X-F.width)/2-j,Q=F.y-(M-F.height)/2-j,K=X+j*2,ie=M+j*2,le=`${A_}-${A}`,Z=re.useRef(0),oe=re.useRef();Z.current=B,re.useEffect(()=>{if(L.current&&$)return oe.current=q2({domNode:L.current,panZoom:$,getTransform:()=>R.getState().transform,getViewScale:()=>Z.current}),()=>{var de;(de=oe.current)==null||de.destroy()}},[$]),re.useEffect(()=>{var de;(de=oe.current)==null||de.update({translateExtent:I,width:D,height:J,inversePan:N,pannable:C,zoomStep:E,zoomable:S})},[C,S,N,E,I,D,J]);const fe=x?de=>{var Ne;const[_e,be]=((Ne=oe.current)==null?void 0:Ne.pointer(de))||[0,0];x(de,{x:_e,y:be})}:void 0,xe=w?re.useCallback((de,_e)=>{const be=R.getState().nodeLookup.get(_e).internals.userNode;w(de,be)},[]):void 0,he=_??T["minimap.ariaLabel"];return V.jsx(Es,{position:v,style:{...n,"--xy-minimap-background-color-props":typeof f=="string"?f:void 0,"--xy-minimap-mask-background-color-props":typeof p=="string"?p:void 0,"--xy-minimap-mask-stroke-color-props":typeof g=="string"?g:void 0,"--xy-minimap-mask-stroke-width-props":typeof h=="number"?h*B:void 0,"--xy-minimap-node-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-node-stroke-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-width-props":typeof u=="number"?u:void 0},className:qe(["react-flow__minimap",r]),"data-testid":"rf__minimap",children:V.jsxs("svg",{width:Y,height:U,viewBox:`${O} ${Q} ${K} ${ie}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":le,ref:L,onClick:fe,children:[he&&V.jsx("title",{id:le,children:he}),V.jsx(P_,{onClick:xe,nodeColor:l,nodeStrokeColor:o,nodeBorderRadius:c,nodeClassName:s,nodeStrokeWidth:u,nodeComponent:d}),V.jsx("path",{className:"react-flow__minimap-mask",d:`M${O-j},${Q-j}h${K+j*2}v${ie+j*2}h${-K-j*2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Lg.displayName="MiniMap";const R_=re.memo(Lg),z_=n=>r=>n?`${Math.max(1/r.transform[2],1)}`:void 0,D_={[li.Line]:"right",[li.Handle]:"bottom-right"};function O_({nodeId:n,position:r,variant:o=li.Handle,className:l,style:s=void 0,children:c,color:u,minWidth:d=10,minHeight:f=10,maxWidth:p=Number.MAX_VALUE,maxHeight:g=Number.MAX_VALUE,keepAspectRatio:h=!1,resizeDirection:v,autoScale:x=!0,shouldResize:w,onResizeStart:C,onResize:S,onResizeEnd:_}){const N=ag(),E=typeof n=="string"?n:N,b=Fe(),R=re.useRef(null),L=o===li.Handle,F=Pe(re.useCallback(z_(L&&x),[L,x]),Oe),P=re.useRef(null),A=r??D_[o];re.useEffect(()=>{if(!(!R.current||!E))return P.current||(P.current=lS({domNode:R.current,nodeId:E,getStoreItems:()=>{const{nodeLookup:I,transform:D,snapGrid:J,snapToGrid:T,nodeOrigin:Y,domNode:U}=b.getState();return{nodeLookup:I,transform:D,snapGrid:J,snapToGrid:T,nodeOrigin:Y,paneDomNode:U}},onChange:(I,D)=>{const{triggerNodeChanges:J,nodeLookup:T,parentLookup:Y,nodeOrigin:U}=b.getState(),G=[],W={x:I.x,y:I.y},B=T.get(E);if(B&&B.expandParent&&B.parentId){const X=B.origin??U,M=I.width??B.measured.width??0,j=I.height??B.measured.height??0,O={id:B.id,parentId:B.parentId,rect:{width:M,height:j,...A0({x:I.x??B.position.x,y:I.y??B.position.y},{width:M,height:j},B.parentId,T,X)}},Q=ld([O],T,Y,U);G.push(...Q),W.x=I.x?Math.max(X[0]*M,I.x):void 0,W.y=I.y?Math.max(X[1]*j,I.y):void 0}if(W.x!==void 0&&W.y!==void 0){const X={id:E,type:"position",position:{...W}};G.push(X)}if(I.width!==void 0&&I.height!==void 0){const M={id:E,type:"dimensions",resizing:!0,setAttributes:v?v==="horizontal"?"width":"height":!0,dimensions:{width:I.width,height:I.height}};G.push(M)}for(const X of D){const M={...X,type:"position"};G.push(M)}J(G)},onEnd:({width:I,height:D})=>{const J={id:E,type:"dimensions",resizing:!1,dimensions:{width:I,height:D}};b.getState().triggerNodeChanges([J])}})),P.current.update({controlPosition:A,boundaries:{minWidth:d,minHeight:f,maxWidth:p,maxHeight:g},keepAspectRatio:h,resizeDirection:v,onResizeStart:C,onResize:S,onResizeEnd:_,shouldResize:w}),()=>{var I;(I=P.current)==null||I.destroy()}},[A,d,f,p,g,h,C,S,_,w]);const $=A.split("-");return V.jsx("div",{className:qe(["react-flow__resize-control","nodrag",...$,o,l]),ref:R,style:{...s,scale:F,...u&&{[L?"backgroundColor":"borderColor"]:u}},children:c})}re.memo(O_);const qp=[{bg:"#1e3a5f",text:"#ffffff",border:"#1e3a5f",fontSize:14,fontWeight:700},{bg:"#2563eb",text:"#ffffff",border:"#2563eb",fontSize:12,fontWeight:700},{bg:"#60a5fa",text:"#ffffff",border:"#60a5fa",fontSize:11,fontWeight:600},{bg:"#dbeafe",text:"#1e3a5f",border:"#93c5fd",fontSize:11,fontWeight:400},{bg:"#f0f9ff",text:"#1e3a5f",border:"#bae6fd",fontSize:10,fontWeight:400}];function F_({data:n}){const r=qp[Math.min(n.depth,qp.length-1)],[o,l]=re.useState(!1);return V.jsxs("div",{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{background:r.bg,color:r.text,border:`2px solid ${r.border}`,borderRadius:8,padding:"6px 10px",width:200,fontSize:r.fontSize,fontWeight:r.fontWeight,fontFamily:"Noto Sans KR, sans-serif",cursor:n.hasChildren||n.explanation?"pointer":"default",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:6,lineHeight:1.4,boxShadow:o?"0 4px 12px rgba(37, 99, 235, 0.25)":n.depth<=1?"0 2px 6px rgba(0,0,0,0.15)":"none",transform:o?"translateY(-1px)":"none",transition:"all 0.2s ease"},children:[V.jsx(si,{type:"target",position:we.Left,style:{opacity:0,pointerEvents:"none"}}),V.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flex:1,minWidth:0},children:[V.jsx("span",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:n.label}),n.explanation&&V.jsx("span",{style:{fontSize:11,opacity:.85,flexShrink:0},title:"개념 설명 있음",children:"📖"})]}),n.hasChildren&&V.jsx("span",{style:{fontSize:9,opacity:.7,flexShrink:0,marginLeft:4},children:n.isCollapsed?"▶":"▼"}),V.jsx(si,{type:"source",position:we.Right,style:{opacity:0,pointerEvents:"none"}})]})}const Gl={id:"root",label:"건축시공",children:[{id:"1",label:"1. 가설공사",children:[{id:"1-1",label:"규준틀",explanation:`건축물의 위치·높이·수평을 설정하기 위해 공사 초기에 세우는 기준 틀.

▶ 설치 목적
• 건물 외벽선·기초 중심선을 지표면에 정확히 표시
• 터파기 깊이·수평의 기준점 제공
• 공사 전 기간 동안 측량 기준으로 반복 활용

▶ 종류
• 통줄규준틀: 건물 모서리 4곳 외 직선 구간에도 설치 — 표준
• 귀규준틀(코너규준틀): 건물 모서리(코너)에만 설치 — 소규모

▶ 설치 기준
• 건물 외곽선에서 1.0~2.0m 떨어진 곳에 설치
  이유: 굴착 작업 시 규준틀이 훼손되지 않도록 여유 확보
• 수평기(레벨)로 수평 정확히 확인 후 고정
• 못 자국(새김)으로 벽 두께, 중심선, 줄눈 위치 표시
• 공사 완료 시까지 이동·훼손 절대 금지

▶ 시공 순서 내 위치
지반 조사 → 측량(배치도 확인) → 규준틀 설치 → 터파기 → 기초 공사
← 가장 먼저 하는 가설 작업

▶ 실무 예시
아파트 신축 현장: 측량기사가 토탈스테이션으로 위치 결정 → 목재 규준틀 설치 → 건물 4모서리·중간 지점 표시

★ 시험 포인트
규준틀 = 기초 공사 전 가장 먼저 설치. 건물에서 1~2m 이격. 공사 기간 내 이동 금지`},{id:"1-2",label:"비계",children:[{id:"1-2-1",label:"강관비계",explanation:`강관(φ48.6mm 강관 파이프)을 클램프(연결철물)로 조립하는 가장 일반적인 비계.

▶ 구성 요소와 역할
• 비계기둥 (Vertical Post): 수직 하중을 지면으로 전달. 하단에 베이스플레이트 설치
• 띠장 (Ledger): 수평 연결 파이프. 비계기둥 좌굴 방지
• 가새 (Brace): 대각선 보강재. 풍하중·횡력으로부터 쓰러짐 방지 — 절대 빠뜨리면 안 됨
• 작업발판 (Working Platform): 폭 40cm 이상, 틈새 3cm 이하
• 벽이음 (Wall Tie): 비계와 건물 벽체 연결. 5m마다 설치

▶ 종류 비교
• 단관비계(외줄): 비계기둥 1열 — 가벼운 마감 작업용
• 쌍줄비계: 비계기둥 2열 — 일반 건설·중량 작업 표준

▶ 설치 기준 (산업안전보건기준 규칙)
• 비계기둥 간격: 띠장 방향 1.8m 이하, 장선 방향 1.5m 이하
• 띠장 수직 간격: 1.5m 이하
• 벽이음: 수직 5m × 수평 5m 이내마다 1개소
• 작업발판 폭: 40cm 이상 / 발판 간 틈새: 3cm 이하
• 최고 설치 높이: 31m 이하 (이상은 별도 구조 검토 필요)

▶ 실무 예시
20층 아파트 외벽 미장 공사 → 쌍줄 강관비계 설치 → 3개 층마다 낙하물 방지망 설치

★ 시험 포인트
벽이음 5×5m, 작업발판 40cm 이상, 기둥 간격 1.8m — 세 가지 수치가 핵심 출제 포인트`},{id:"1-2-2",label:"달비계",explanation:`건물 상부 구조체(옥상·지붕)에서 로프·체인으로 달아 내리는 작업 발판.

▶ 구조
• 지지 로프(와이어로프): 건물 상부에 고정
• 작업대(발판): 철재 파이프 + 발판재
• 승강 장치: 수동 또는 전동 윈치로 상하 이동

▶ 특징
• 지면에서 비계를 세울 수 없는 고층 외벽 작업에 사용
• 고층 건물 외벽 마감(미장·도장), 유리 청소, 균열 보수
• 작업대를 위아래로 자유롭게 이동 가능

▶ 안전 기준 (핵심 수치 암기)
• 와이어로프 안전계수: 10 이상 (달비계용 — 일반 비계보다 높음)
• 작업발판 폭: 40cm 이상
• 작업자: 안전대(안전벨트) + 구명줄 착용 의무
• 지지점 개수: 2개소 이상 (1점 지지 금지)

▶ 강관비계와 비교
강관비계: 지면에서 파이프 올려 쌓음 → 지면 접근 가능한 곳
달비계: 상부에서 내려옴 → 수십 층 외벽 단기 작업에 유리

★ 시험 포인트
달비계 = 상부에서 내려오는 비계. 와이어로프 안전계수 10 이상이 핵심 수치. 고층 외벽 전용`},{id:"1-2-3",label:"말비계",explanation:`A자(역 V형) 지지대로 구성된 소형 이동식 비계.

▶ 구조 및 특징
• 목재·알루미늄·강관 소재의 A형 프레임 2개 + 발판
• 접이식 구조로 설치·해체·이동이 매우 간편
• 높이: 0.5~2.0m (낮은 실내 작업 전용)
• 중량: 5~15kg — 1인 운반 가능

▶ 적용 작업
• 실내 도장, 도배, 전기 배선, 설비 배관 등 저층 마감
• 현장 사무소 내 간단한 보수
• 소규모 주택 창호·조명 교체

▶ 사용 금지 상황
• 높이 2m 이상 외부 작업
• 바닥이 고르지 않아 전도 위험이 있는 경우

▶ 비교: 4가지 비계 요약
강관비계: 파이프+클램프, 중대형 외부 공사
달비계: 로프로 늘어뜨림, 고층 외벽 단기 작업
말비계: A형 접이식, 소규모 실내 저층 작업
통나무비계: 전통 방식, 현재 거의 미사용

★ 시험 포인트
말비계 = A형 이동식 = 소규모 실내 전용. 4가지 비계 특징 비교 문제로 자주 출제`},{id:"1-2-4",label:"통나무비계",explanation:`통나무(대나무, 소나무, 낙엽송 등)를 새끼줄이나 철선(결속선)으로 묶어 조립하는 전통적인 임시 비계.

▶ 특징 및 한계
• 강관비계가 보급되기 이전에 널리 쓰이던 방식으로, 부재 연결을 결속선에 의존
• 신축성이 있는 목재 특성상 강풍에 꼬임이 생기거나 건조 시 묶음이 느슨해져 붕괴 위험이 높음
• 현재는 조립식 강관비계에 밀려 일반 현장에서는 원칙적으로 사용 금지 (문화재 보수 등 특수 구역 외 제외)

▶ 설치 기준
• 비계기둥 간격: 1.5m~2.0m 이하
• 띠장 수직 간격: 1.5m 이하 (첫 번째 띠장은 지면에서 2.0m 이하에 설치하여 통로 확보)
• 비계기둥 최고 높이: 18m 이하 (초과 시 보강재 설치 필수)

★ 시험 포인트
전통 방식 비계로 현재는 거의 사용 안 함. 기둥 간격 1.5~2.0m, 높이 제한 18m가 핵심 수치.`}]},{id:"1-3",label:"가설시설 (울타리·창고·사무소)",explanation:`공사 기간 중에만 가설하여 시공과 운영을 지원하고 공사가 완료되면 철거하는 모든 현장 시설물.

▶ 종류 및 시공 기준
• 가설 울타리 (Fences): 외부 비산먼지 차단 및 보행자 안전 확보. 일반 울타리 높이는 1.8m 이상, 주거/상업지역은 2.0m 이상 확보.
• 시멘트 창고 (Cement Warehouse): 습기 방지가 최우선!
  - 바닥높이(고): 지면에서 30cm 이상 띄워 설치 (습기 상승 차단)
  - 통풍 차단: 습한 공기 유입을 막기 위해 환기창 설치 금지
  - 주위 배수구: 우수 침입 방지용 배수도랑 설치
  - 적재 제한: 쌓기 단수는 최대 13포대 이하 (장기 저장 시 7포대 이하로 제한하여 하중 압착 방지)
• 현장 사무소 및 가설 화장실: 관리 및 노무자 복리용 임시 거점.

★ 시험 포인트
시멘트 창고 설치 기준(30cm 바닥고, 환기창 설치 금지, 13포대 쌓기 한계)이 실기 시험 빈출 단골 문제.`},{id:"1-exam",label:"[시험 포인트]",children:[{id:"1-e1",label:"비계: 강관·달·말·통나무",explanation:`▶ 핵심 기출: 비계 종류와 설치 기준
• 비계(Scaffolding)는 가설 발판이자 보행 통로로, 종류별 기준 치수와 안전 규정이 단골 출제됩니다.

Q1. 강관비계 설치 시 벽이음의 수직 및 수평 설치 간격 기준은? (기출!)
A1. 수직 5m 이하, 수평 5m 이하. (풍하중에 의한 좌굴 및 쓰러짐 방지 목적)

Q2. 강관비계의 비계기둥 기둥 간격 기준은?
A2. 띠장 방향은 1.85m 이하, 장선 방향은 1.5m 이하.

Q3. 비계 작업발판의 규정 폭과 틈새 기준은?
A3. 발판 폭 40cm 이상, 발판 간 틈새 3cm 이하.

★ 시험 포인트
강관비계의 핵심 치수 3대장인 기둥간격 1.8m(띠장)/1.5m(장선), 벽이음 5x5m, 작업발판 폭 40cm/틈새 3cm는 직접 쓰기 단답형으로 100% 출제됩니다.`},{id:"1-e2",label:"규준틀의 역할과 설치",explanation:`▶ 핵심 기출: 규준틀 설치 및 수평고정
• 규준틀(Layout Board)은 터파기 전에 건물의 정확한 축선과 높이를 세우는 기준틀입니다.

Q1. 수평규준틀의 설치 목적 3가지를 쓰시오. (기출!)
A1.
1) 건물의 외벽선 및 기초 중심선을 정확히 지표면에 표시.
2) 터파기 굴착 깊이와 기초면 수평의 기준 제공.
3) 공사 전 기간 측량 기준점으로 반복 활용.

Q2. 규준틀은 건물 외곽선에서 몇 m 이격하는가?
A2. 1.0m ~ 2.0m 이상 이격하여 설치. (터파기 장비 이동 시 규준틀이 훼손되지 않도록 보호)

★ 시험 포인트
규준틀의 이격거리(1~2m) 및 설치 목적 쓰기 문제가 빈출되니 서술형 키워드를 정확하게 암기하세요.`},{id:"1-e3",label:"흙의 성질: 함수비·간극비·포화도",explanation:`▶ 핵심 기출: 흙의 기본 성질 공식
• 토질역학적 흙의 물리 지표 계산 문제는 적산과 연계되어 출제됩니다.

Q1. 흙의 간극비(e)와 간극률(n)의 상호 변환 공식을 쓰시오.
A1.
• 간극비 e = n / (1 - n)
• 간극률 n = e / (1 + e)

Q2. 흙의 함수비(w)와 포화도(Sr)의 정의 공식을 쓰시오.
A2.
• 함수비 w = (물의 중량 Ww / 흙 입자의 건조 중량 Ws) × 100 (%)
• 포화도 Sr = (물의 부피 Vw / 간극의 부피 Vv) × 100 (%)

★ 시험 포인트
간극비 e와 간극률 n의 관계 공식 대입 계산 문제, 함수비 정의를 활용한 흙의 건조 전후 무게 계산 문제를 숙지해야 합니다.`},{id:"1-e4",label:"지반조사: 보링·SPT·베인시험",explanation:`▶ 핵심 기출: 현장 지반조사 시험
• 보링, 표준관입시험(SPT), 베인시험 등의 공법 특징을 묻는 문제입니다.

Q1. 표준관입시험(SPT)의 시험 방법과 N값의 정의를 기술하시오. (기출!)
A1. 무게 63.5kg의 추를 76cm 높이에서 자유낙하시켜 지반 속에 표준 샘플러를 30cm 관입시키는 데 필요한 타격 횟수 N을 구하는 지반조사 시험.

Q2. 점토 지반에서 예민비(St)의 정의를 쓰시오.
A2. 예민비 St = 자연 시료 강도 / 이겨진 시료 강도. (흐트러졌을 때 강도가 급감하는 비율)

★ 시험 포인트
SPT 시험의 해머 중량 63.5kg, 낙하 높이 76cm, 관입 깊이 30cm 수치 가로 채우기 및 N값을 통한 사질 지반의 조밀도(N값 30 이상 조밀) 판정법이 출제됩니다.`}]}]},{id:"2",label:"2. 토공사",children:[{id:"2-1",label:"터파기",children:[{id:"2-1-1",label:"줄파기",explanation:`벽·기초 띠를 따라 길고 좁게 굴착하는 방식.

▶ 적용 기초
• 줄기초(연속기초, Strip Footing): 조적조 벽 아래에 연속으로 이어진 기초
• 소규모 건물(단독주택·빌라)의 기초 파기

▶ 특징
• 굴착 폭이 좁고 길이 방향으로 이어짐
• 굴착량이 독립파기보다 많고 온통파기보다 적음
• 좁은 트렌치(도랑)이므로 기계+수작업 병행

▶ 터파기 3종류 비교
줄파기 → 줄기초(연속기초): 벽 아래 연속
독립파기 → 독립기초: 기둥 하나씩 개별
온통파기 → 온통기초: 건물 전체 바닥

★ 시험 포인트
줄파기 = 줄기초 = 조적조(벽돌 건물). 세트로 암기. 3종류 파기법과 기초 형식의 1:1 대응이 핵심`},{id:"2-1-2",label:"온통파기",explanation:`건물의 지하층 전체 바닥 면적을 모두 파내는 대규모 굴착 공법.

▶ 적용 및 특징
• 지하실이 건물 평면의 대부분을 차지하는 도심지 고층 빌딩 공사에 주로 적용.
• 줄파기나 독립파기에 비해 굴착 토량이 가장 많아 덤프트럭과 포클레인 등 대형 장비 대량 투입.
• 측면 흙의 붕괴를 막기 위해 H-Pile+흙막이판, 시트파일, 슬러리월 등 흙막이(옹벽) 공사와 배면 버팀대(Strut) 또는 어스앵커 공법이 함께 시공되어야 함.

▶ 터파기 3종류 비교
• 온통파기: 건물 지하 전체 면적 굴착 -> 온통기초(매트기초)용
• 줄파기: 벽 중심선 따라 도랑 모양 굴착 -> 줄기초(연속기초)용
• 독립파기: 기둥 아래 개별 구덩이 굴착 -> 독립기초용

★ 시험 포인트
온통파기 = 지하실 전체 파기. 대량 굴착으로 흙막이 계획과 반드시 병행.`},{id:"2-1-3",label:"독립파기",explanation:`기둥 하나하나가 놓일 개별 기초판의 위치에 맞춰 부분적으로 구덩이를 파는 방식.

▶ 특징 및 적용
• 기둥 간격이 넓고, 지반의 허용지지력이 우수하여 독립기초(Isolated Footing)를 세울 수 있는 소형 구조물에 적합.
• 터파기 3종 공법(온통, 줄, 독립) 중 굴착 및 배토 수량이 가장 적어 매우 경제적.
• 개별 구덩이마다 정밀하게 수평(레벨)과 축선을 맞추어야 하므로 규준틀 확인 작업이 매우 중요.

★ 시험 포인트
독립파기 = 독립기초용. 터파기 수량이 최소이며, 기둥식 구조에 적합.`}]},{id:"2-2",label:"흙막이공사",children:[{id:"2-2-1",label:"H-Pile + 흙막이판",explanation:`H형강 말뚝을 지반에 박고, 굴착하면서 강재 사이에 흙막이판(목재 또는 PC판)을 끼워 흙을 지지하는 공법.

▶ 시공 순서
① H형강(Soldier Pile) 설치: 항타 또는 어스오거로 지중 관입
② 굴착 시작: 1.0~1.5m씩 단계별 굴착
③ 흙막이판(Lagging) 삽입: H형강 플랜지 사이에 목재판 끼움
④ 버팀대(Strut) 또는 어스앵커로 횡력 지지
⑤ 기초 시공 완료 후 H형강 인발·재사용

▶ 장점
• 가장 경제적인 흙막이 공법
• H형강 회수·재사용 가능 → 경제성 ↑
• 시공 속도 빠름, 별도 지지 시스템 설계 단순

▶ 단점 (핵심)
• 차수(물막기) 능력 없음 — 판과 판 사이 틈새로 지하수 유입
• 모래·연약 지반에서 흙 유실 위험
• 진동·소음 발생 (항타 시)

▶ 비교 (차수 능력 순서)
H-Pile(없음) < 시트파일(중간) < 슬러리월(최우수)

▶ 적용 조건
지하수 없는 점토·단단한 지반 + 도심지 외곽 중소 현장

★ 시험 포인트
H-Pile = 가장 경제적 + 차수 없음이 단점. 흙막이판은 굴착하면서 끼움`},{id:"2-2-2",label:"시트파일",explanation:`U형(또는 Z형) 단면의 강재 시트를 서로 맞물려 연속으로 지중에 박는 흙막이 공법.

▶ 시공 원리
시트 옆면에 자물쇠형 이음(Interlock) 홈이 있어 인접 시트끼리 맞물림
→ 연속 강재 벽 형성 → 흙과 물 동시 차단

▶ 특징
장점:
• 차수성(물막기) 우수 — 맞물림 이음으로 지하수 차단
• 연약 지반(점토·모래)에 효과적
• 인발하여 재사용 가능
단점:
• H-Pile보다 고가
• 진동·소음 발생 (항타 시)
• 암반·전석 지반에 관입 어려움
• 인접 구조물에 진동·변위 전달 우려

▶ 차수성 비교
H-Pile: 없음 / 시트파일: 우수 / 슬러리월: 최우수

▶ 적용 조건
지하수 있는 연약 지반, 하천·해안 접안 공사, 중간 규모 굴착

★ 시험 포인트
시트파일 = U형 강재 + 맞물림 이음 = 차수성 우수. H-Pile과의 차이는 '차수 여부'`},{id:"2-2-3",label:"슬러리월",explanation:`벤토나이트 안정액을 채운 트렌치(도랑)를 굴착한 후 철근망 삽입 → 콘크리트 타설하여 만드는 연속 지하벽.

▶ 시공 순서
① 가이드월(Guide Wall) 설치: 지표면 근처에 L형 RC 가이드 설치
② 안정액(벤토나이트+물) 채우며 클램셸·유압장비로 패널 굴착
③ 굴착 완료 후 트레미관으로 안정액 배출하며 콘크리트 타설
④ 인접 패널 시공하여 연속벽 완성

▶ 벤토나이트(Bentonite)의 역할
• 굴착 중 트렌치 벽면 붕괴 방지 (비중 1.05~1.2의 무거운 안정액)
• 공극을 막아 지하수 유입 방지
• 콘크리트 타설 시 밀도 차이로 위로 밀려 올라와 분리됨

▶ 특징
• 강성·차수성 모든 공법 중 최우수
• 영구 구조체(지하 외벽)로 활용 가능 → 가시설비 절감
• 소음·진동 적음 → 도심지·병원·학교 인근에 적합
• 공사비가 H-Pile의 3~5배로 가장 비쌈
• 폭 0.4~1.0m, 깊이 수십m까지 가능

▶ 적용 사례
강남 초고층 빌딩 지하 6~10층 굴착, 지하철 개착 공사, 항만 호안 벽체

▶ 비교표 (차수성 순서)
슬러리월 > 시트파일 > H-Pile+흙막이판

★ 시험 포인트
슬러리월 = 가장 고급·고가·차수 최우수. 벤토나이트 안정액이 핵심. 영구벽 활용 가능`},{id:"2-2-4",label:"어스앵커",explanation:`흙막이 벽체에 구멍을 뚫고 강연선(PC강선)을 삽입 → 선단부 그라우팅으로 지반에 정착시켜 흙막이를 지지하는 방식.

▶ 구조 (2가지 구간)
• 자유장(Free Length): 응력 전달만, 정착 안 함 → 흙막이 벽에서 정착장까지
• 정착장(Fixed Length): 그라우팅으로 지반에 고정 → 인장력 지반에 전달

▶ 특징
장점:
• 버팀대(스트럿) 없이 넓은 굴착 공간 확보 — 가장 큰 장점
  스트럿이 없어 장비 이동·작업 효율 대폭 향상
• 깊은 굴착에도 적용 가능
• 인접 구조물 영향 적음
단점:
• 인접 대지 지하에 앵커가 들어감 → 지장 물건 사전 조사 필수
• 임시 앵커의 경우 공사 후 제거 작업 필요 (비용 추가)
• 지반 조건에 따라 정착 불량 우려

▶ 버팀대(Strut) 방식과 비교
버팀대: 굴착면 안에 대형 강재 버팀 → 장비·작업 공간 방해
어스앵커: 지반 속으로 연장 → 굴착 공간 완전 확보

▶ 적용 예
도심지 지하 주차장 굴착, 넓은 지하 공간 필요한 현장

★ 시험 포인트
어스앵커 = 버팀대 없이 공간 확보. 자유장+정착장 2구간 구조. 인접 지반 지장 여부 확인 필수`}]},{id:"2-3",label:"지반개량",children:[{id:"2-3-1",label:"웰포인트",explanation:`지중에 소구경 집수관(Well Point)을 촘촘히 박고 진공펌프로 지하수를 강제 흡입·배수하는 공법.

▶ 원리
Well Point 설치 → 헤더 파이프로 연결 → 진공 펌프 작동 → 지하수를 음압(真空)으로 끌어올림
일반 중력 배수로는 올라오지 않는 미세 공극의 물까지 제거 가능

▶ 적용 조건 (핵심)
• 지하수위 저하 깊이: 6m 이내 (한계)
  이유: 진공 흡입 가능한 수두 한계가 약 6~7m
• 모래·사질 지반에 효과적 (투수계수 높은 지반)

▶ 특징
• 설치·철거 빠르고 경제적
• 연속 가동으로 지하수위 지속 저하
• 6m 이상 깊은 곳은 딥웰 공법 사용

▶ 딥웰과 비교
웰포인트: 소구경 집수관 다수 + 진공 펌프, 6m 이내
딥웰: 대구경 우물 소수 + 수중 펌프, 6m 이상

★ 시험 포인트
웰포인트 = 진공 흡입 + 6m 이내 지하수 처리. 딥웰(6m 이상)과 깊이 기준 세트로 암기`},{id:"2-3-2",label:"딥웰",explanation:`지중 깊이 대구경 우물(Deep Well)을 굴착하고 수중펌프를 설치하여 지하수를 대량 배수하는 공법.

▶ 원리
대구경(직경 300~600mm) 우물 굴착 → 케이싱(강관) 설치 → 수중 모터 펌프 설치 → 중력으로 집수 → 지속 배수

▶ 적용 조건
• 지하수위 저하 깊이: 6m 이상 (깊은 곳)
• 대량 지하수 배수 필요 시
• 투수계수가 낮은 점성토에도 어느 정도 적용 가능

▶ 특징
장점:
• 심도 제한 없음 — 수십m 깊이도 가능
• 대량 배수로 넓은 면적 지하수위 동시 저하
• 설치 개수 적어 관리 편리
단점:
• 우물 굴착 비용 높음
• 인접 지반 침하(지반 수분 감소로 압밀) 우려

★ 시험 포인트
딥웰 = 대구경 우물 + 수중 펌프 + 6m 이상 심부 적용. 웰포인트(6m 이내)와 반드시 비교 암기`},{id:"2-3-3",label:"샌드드레인",explanation:`연약한 점성토 지반에 모래 기둥(Sand Drain)을 형성하여 간극수를 빠르게 배출하고 지반을 압밀·강화하는 공법.

▶ 원리 (압밀 메커니즘)
점성토(점토)는 투수성 매우 낮음 → 물이 빠지는 데 수십 년 필요
↓
수직 모래 기둥(직경 40~60cm) 삽입 → 배수 경로 단축
↓
상부 성토하중(Preloading) + 빠른 배수 → 압밀 촉진 → 지반 강화

▶ 시공 과정
① 케이싱 파이프 설치 (모래 기둥 성형용)
② 케이싱 내 깨끗한 모래 채우면서 케이싱 인발
③ 수평 모래 매트(Sand Mat) 설치 — 배수 수집
④ 상부 성토(선재하) → 하중 가함 → 압밀 진행
⑤ 침하 계측 후 건물 시공

▶ 페이퍼드레인(PBD)과 비교
샌드드레인: 모래 기둥, 직경 40~60cm, 굵고 시공 느림
페이퍼드레인: 합성 섬유 보드, 100×4mm, 얇고 시공 빠름 → 현재 더 많이 사용

★ 시험 포인트
샌드드레인 = 연약 점토 지반 + 수직 배수로 + 압밀 촉진. 페이퍼드레인과 원리 동일, 재료만 다름`},{id:"2-3-4",label:"페이퍼드레인",explanation:`모래 대신 카드보드 또는 플라스틱 드레인 보드(PBD)를 지중에 압입하여 연약 점토의 간극수를 강제 탈수하는 지반 압밀 개량 공법.

▶ 원리 및 메커니즘
합성수지 코어(물길)에 필터재를 씌운 보드를 압입 장비로 점토층 깊숙이 삽입 -> 상부에 성토 하중(Preloading) 재하 -> 점토 안의 간극수가 플라스틱 보드를 타고 모래 매트(Sand Mat)로 이동 -> 수평 배수구를 통해 탈수 -> 지반 밀도 상승 및 전단 강도 증가.

▶ 샌드드레인 대비 장점
• 시공 속도가 현저히 빠르고 단순함.
• 골재(모래) 품귀 현상에 영향받지 않아 재료 수급이 안정적이며 경제적.
• 드레인 보드가 유연하여 지반 침하 시에도 단절(끊어짐) 우려가 없음.
• 시공 시 점토층 교란 현상(Smear Effect)이 적어 배수 효율 유지.

★ 시험 포인트
샌드드레인(모래기둥) vs 페이퍼드레인(합성수지 보드)의 드레인재 차이점 및 압밀 배수 원리가 출제 포인트.`}]},{id:"2-4",label:"토량계산",children:[{id:"2-4-1",label:"토량변화율 (L, C)",explanation:`흙의 상태 변화에 따른 부피 변화를 나타내는 계수.

▶ 흙의 3가지 상태 (핵심)
• 자연 상태 (Bank/Natural): 지반 속에 있는 흙 → 부피 기준 = 1 (기준값)
• 흐트러진 상태 (Loose): 굴착 후 덤프트럭에 실린 상태 → 부피 증가 (L > 1)
  이유: 공극(빈 공간) 증가 — 흙 입자 사이 간격이 벌어짐
• 다진 상태 (Compacted): 성토 후 롤러로 다짐한 상태 → 부피 감소 (C < 1)
  이유: 공극 감소 — 입자들이 더욱 빽빽해짐

▶ 변화율 (토질별 참고값)
토질           | L값      | C값
보통 흙(점성토) | 1.2~1.3  | 0.85~0.95
모래·자갈     | 1.1~1.2  | 0.90~0.95
암석(발파 후)  | 1.5~2.0  | 1.05~1.30

▶ 계산 공식
• 흐트러진 토량 = 자연 토량 × L
• 다진 토량 = 자연 토량 × C
• 필요 자연 토량(성토용) = 목표 다진 토량 ÷ C

▶ 계산 예시
자연 상태 100㎥, L=1.25, C=0.85
→ 굴착 후 덤프 적재량 = 100 × 1.25 = 125㎥
→ 성토 다짐 후 = 100 × 0.85 = 85㎥
→ 덤프트럭(5㎥) 대수 = 125 ÷ 5 = 25대

▶ 실무 활용
• L값: 덤프트럭 대수·용량 계산 기준
• C값: 성토 완료 후 부피 계산, 성토 재료 반입 필요량 계산

★ 시험 포인트
L>1(굴착 후 부피 증가), C<1(다짐 후 부피 감소). 계산 문제 자주 출제. 덤프 대수=흐트러진 토량÷적재용량`},{id:"2-4-2",label:"흐트러진 토량",explanation:`지반에서 파내어 흐트러진(공극이 커진) 상태의 흙 부피.

▶ 개념 및 공식
• 지중의 흙은 굴착하면 공극(빈틈)이 생겨 부피가 증가함.
• 흐트러진 토량 = 자연 상태 토량 × L
  (여기서 L = 흐트러진 토량 계수, 보통 흙은 L = 1.2~1.3, 발파 암석은 L = 1.5~2.0)
• 예시: 자연 상태 100m³를 파내면 트럭에 실을 때는 L=1.25 적용 시 125m³가 됨.

▶ 실무 적용
• 공사 현장에서 외부로 파낸 흙을 반출하기 위한 덤프트럭(5t, 15t 등) 대수 및 적재 용량 계획 시 기준으로 적용.

★ 시험 포인트
토량 계산 시 덤프트럭 수량 = 흐트러진 토량 ÷ 트럭 대당 적재량. L>1임을 명심.`},{id:"2-4-3",label:"다진 토량",explanation:`성토(흙쌓기) 후 롤러나 탬퍼 등으로 다져 공극이 줄어든 상태의 최종 흙 부피.

▶ 개념 및 공식
• 흙을 흐트러트린 후 기계로 강력히 다지면 입자가 빽빽해져 자연 상태보다 부피가 감소함.
• 다진 토량 = 자연 상태 토량 × C
  (여기서 C = 다진 토량 계수, 보통 C = 0.85~0.95)
• 예시: 자연 상태 100m³ 흙을 다지면 C=0.90 적용 시 90m³가 됨.

▶ 실무 적용
• 지반 침하 보수, 기초 뒤채움, 도로 성토 시 다진 후 최종 필요한 흙의 부피를 구하여 필요한 반입 자연 토량(필요량 = 목표부피 ÷ C)을 계획할 때 적용.

★ 시험 포인트
다지면 부피가 줄어듦(C<1). 자연 흙 100m³를 다지면 약 90m³만 채워진다는 수축성 이해가 계산의 핵심.`}]},{id:"2-exam",label:"[시험 포인트]",children:[{id:"2-e1",label:"터파기: 줄·온통·독립파기",explanation:`▶ 핵심 기출: 터파기 공법 비교
• 기초 형식에 따른 터파기 굴착 방법의 대응이 주요 기출 항목입니다.

Q1. 조적조 벽체 아래 길게 연속으로 파는 터파기 형식과 대규모 빌딩 지하층 평면 전체를 굴착하는 형식은?
A1. 벽체 아래 연속 굴착은 줄파기, 지하실 평면 전체 굴착은 온통파기.

Q2. 터파기 굴착 시 측면 흙이 무너지지 않는 경사를 잡는 기준은?
A2. 흙의 내부마찰각(휴식각) 이상의 경사를 주어 안전 사면을 형성해야 함.

★ 시험 포인트
줄파기(연속기초), 독립파기(독립기초), 온통파기(온통기초)의 1:1 결합 관계와 터파기 부피 계산을 위한 굴착 단면 경사 각도(사면 굴착) 계산법에 유의하세요.`},{id:"2-e2",label:"흙막이: H-Pile·시트·슬러리월·앵커",explanation:`▶ 핵심 기출: 흙막이 공법 및 계측기
• 흙막이 붕괴 사고 예방을 위한 공법 특징 및 계측 관리가 빈출됩니다.

Q1. 지하 연속벽(슬러리월) 공법 시 벽면 붕괴 방지를 위해 채워두는 안정액의 명칭과 역할은? (기출!)
A1. 벤토나이트(Bentonite) 용액. 굴착벽 내부에 수압보다 높은 수두를 형성하여 벽면 붕괴를 차단하고 차수 필터를 만듦.

Q2. 흙막이판 배면의 토압을 측정하는 계측기와 지반 침하를 측정하는 계측기는?
A2. 토압계(Soil Pressure Cell), 지반 침하계(Settlement Gage).

★ 시험 포인트
슬러리월 안정액(벤토나이트)의 특성, 어스앵커의 자유장/정착장 구분 및 흙막이 안전성 검토를 위한 5대 계측기 명칭(경사계, 하중계, 변형률계 등) 쓰기를 대비해야 합니다.`},{id:"2-e3",label:"지반개량: 웰포·딥웰·샌드드레인",explanation:`▶ 핵심 기출: 지반 개량 공법
• 점토 지반과 모래 지반의 개량 공법을 상호 비교 분류하는 문제입니다.

Q1. 점토 지반에 수직 배수 모래 기둥을 촘촘히 뚫고 성토 하중을 가해 간극수를 강제 탈수하는 공법은? (기출!)
A1. 샌드드레인(Sand Drain) 공법. (합성수지 밴드를 꽂으면 페이퍼드레인 공법)

Q2. 느슨한 사질 지반에 물을 주입하며 진동을 주어 지반을 다져 조밀하게 만드는 공법은?
A2. 바이브로플로테이션(Vibroflotation) 공법.

★ 시험 포인트
점토 지반 개량(탈수/압밀 - 샌드, 페이퍼드레인, 웰포인트) vs 사질 지반 개량(진동 다짐 - 바이브로플로테이션, 다짐모래말뚝)의 확실한 분류 암기가 시험의 핵심입니다.`},{id:"2-e4",label:"토량변화율 (L·C)",explanation:`▶ 핵심 기출: 토량 변화율 계산
• 자연, 흐트러진, 다진 상태의 토량환산계수 계산 문제입니다.

Q1. 자연 토량 2,000m3를 파내어 외부로 반출하고자 한다. 흐트러진 계수 L=1.2, 다진 계수 C=0.9일 때, 15t 덤프트럭(대당 8.0m3 적재)의 소요 대수는? (기출!)
A1.
• 반출할 흐트러진 토량 = 2,000 × L = 2,000 × 1.2 = 2,400m3
• 소요 트럭 수 = 2,400 ÷ 8.0 = 300대.

Q2. 목표 다짐 부피가 900m3일 때 필요한 자연 상태 토량은?
A2. 필요 자연 토량 = 목표 다진 토량 / C = 900 / 0.9 = 1,000m3.

★ 시험 포인트
덤프트럭 수량 산출 시에는 반드시 '흐트러진 토량(자연 토량 × L)'을 기준으로 덤프 용량을 나누어야 함을 잊지 마세요. 단골 출제 계산 문제입니다.`}]}]},{id:"3",label:"3. 기초공사",children:[{id:"3-1",label:"직접기초",children:[{id:"3-1-1",label:"독립기초",explanation:`각 기둥 하나 아래에 독립적으로 설치하는 정사각형·직사각형 콘크리트 기초판.

▶ 특징
• 각 기둥이 개별 기초로 독립적으로 하중을 지반에 전달
• 구조가 단순하고 공사비가 상대적으로 저렴
• 기둥 간격이 넓고 지반 지지력이 충분할 때 사용

▶ 사용 조건
• 지반 지지력이 적정 (N값 ≥ 10 내외)
• 기둥 간격이 넓어 독립기초 간 간섭 없음
• 하중 분포가 비교적 균등한 구조물

▶ 크기 결정
접지압 = 기둥 하중 ÷ 기초 면적 ≤ 지반 허용지지력
→ 하중이 클수록 기초 면적 확대

▶ 부동침하 위험
지반이 균등하지 않으면 각 기둥 아래 침하량이 달라 부동침하 발생
→ 지반 불균질 시 줄기초·온통기초로 변경

▶ 직접기초 4종 비교
독립 < 줄 < 복합 < 온통 (접지압 분산면적 증가 순서)

★ 시험 포인트
독립기초 = 기둥 1개당 기초 1개. 지반이 균질하고 기둥 간격 넓을 때 선택. 접지압 = 하중÷면적`},{id:"3-1-2",label:"줄기초",explanation:`벽 또는 기둥 열을 따라 길게 연속으로 이어진 콘크리트 기초.

▶ 특징
• 조적조 건물(벽돌·블록 건물)의 하중을 선형으로 지반에 전달
• 연속기초(Strip Footing)라고도 함
• 독립기초보다 접지압 낮음 (긴 면적에 분산)

▶ 적용 조건
• 조적벽 아래: 모든 조적조 건물의 필수 기초
• 기둥 간격이 좁아 독립기초가 겹칠 때
• 부동침하 방지가 필요한 소규모 건물

▶ 단면 형태
T형(T-shaped): 바닥판 + 중앙 돌출부(Web)
▷ 넓은 바닥판으로 지압 분산, 돌출부가 하중 집중

▶ 줄파기와의 관계
줄기초 시공 = 반드시 줄파기로 굴착 (기초 형식:굴착 방식 = 1:1 대응)

★ 시험 포인트
줄기초 = 조적조 건물의 기초. 연속기초. 줄파기와 세트. 조적조 = 줄기초 = 줄파기 3단계로 암기`},{id:"3-1-3",label:"복합기초",explanation:`2개 이상의 기둥 하중을 하나의 공동 기초판(Footing Slab)으로 전달하여 지지하는 기초 형식.

▶ 발생 원인 및 해결책
① 기둥 간격 협소: 두 독립기초판의 설계 크기가 너무 커서 기둥 사이에서 서로 겹칠 때.
② 대지경계선 인접: 건물 가장자리 기둥이 대지경계선 바로 옆에 위치해 편심 하중이 걸릴 때(기초판을 바깥으로 못 넓히므로).
-> 두 기둥의 하중 합력점과 복합기초판의 기하학적 도심을 일치시켜 부동침하 및 모멘트 발생 방지.

▶ 평면 형태 종류
• 직사각형 복합기초: 두 기둥의 하중이 비교적 균등할 때.
• 사다리꼴 복합기초: 외측 기둥(경계선 기둥)의 하중이 크거나 작아서 하중 분포가 불균등할 때.

★ 시험 포인트
대지경계선 기둥의 편심 하중 극복 및 독립기초 겹침 해소용 = 복합기초.`},{id:"3-1-4",label:"온통기초 (매트기초)",explanation:`건물 바닥 전체 면적에 걸쳐 하나의 넓고 두꺼운 콘크리트 기초판을 설치하는 기초.
Mat Foundation 또는 Raft Foundation이라고도 함.

▶ 원리
모든 기둥·벽 하중이 하나의 넓은 판을 통해 지반에 전달.
접지압(단위 면적당 하중) = 총 하중 ÷ 기초 면적 → 면적이 크므로 접지압이 가장 낮음

▶ 사용 조건 (다음 중 하나라도 해당 시)
• 지반 지지력이 낮아 넓은 면적으로 분산이 필요할 때
• 독립기초 면적이 전체 바닥의 50% 이상 될 때 → 온통기초가 경제적
• 지하 주차장·지하실이 있는 건물 (방수·부력 저항)
• 고층 건물 (하중이 크고 부동침하 우려)
• 연약 지반 (N값 < 10)

▶ 특징
장점:
• 접지압을 최대로 분산 → 부동침하 방지 최우수
• 지하수 부력에 저항 (두꺼운 자중)
• 지하층 바닥판 역할 동시 수행
단점:
• 콘크리트·철근량이 가장 많음 → 공사비 높음
• 굴착량이 많음

▶ 기초 두께 기준 (일반적)
• 1.0m ~ 2.0m (구조 계산에 따라 결정)
• 두께가 두꺼워 매스콘크리트 주의 (수화열 관리 필요)

▶ 온통파기와 세트
온통기초 시공 = 온통파기(건물 전체 면적 굴착) 필수

★ 시험 포인트
온통기초=매트기초=연약지반+부동침하 방지 최선. 기초 형식 중 접지압 가장 낮음`}]},{id:"3-2",label:"말뚝기초",children:[{id:"3-2-1",label:"나무말뚝",explanation:`소나무·낙엽송 등 원목을 가공하여 말뚝으로 사용하는 가장 오래된 기초 방식.

▶ 사용 조건 (핵심)
• 반드시 지하수위 아래 (상시 침수 상태)에서만 사용
• 이유: 건습 반복 시 부패 진행. 물속 혐기 상태에서는 수백 년 내구성 유지
• 역사적 사례: 베니스·암스테르담 목조 건물의 나무말뚝 수백 년 유지

▶ 특징
장점:
• 가볍고 시공 간단 (손 도구로 절단 가능)
• 소규모·저하중 건물에 경제적
단점:
• 허용 하중 낮음: 10~20tf 수준
• 지하수위 상부로 올라오면 부식·파손
• 현재는 거의 사용하지 않음

▶ 기성 말뚝 강도 순서
나무 말뚝 < RC 말뚝 < PC 말뚝 < PHC 말뚝 (강도 증가)

★ 시험 포인트
나무말뚝 = 지하수위 아래에서만 사용. 건조하면 부식. 현재 거의 미사용. 강도 순서 최하위`},{id:"3-2-2",label:"RC말뚝",explanation:`철근을 배치하고 콘크리트를 타설하여 일체로 결합한 콘크리트 말뚝.

▶ 분류 및 특징
• 기성 RC말뚝: 공장에서 미리 제작하여 현장에서 박는 말뚝(PHC말뚝 보급으로 현재는 강도가 낮아 기성품은 거의 사용 안 함).
• 현장타설 콘크리트 말뚝 (Cast-in-place Concrete Pile):
  - 지반에 구멍(Casing 포함)을 파고 철근망을 밀어 넣은 후 현장에서 레미콘을 타설하는 방식.
  - 대구경(φ1,000mm 이상)으로 깊고 튼튼한 기초 형성이 가능해 초고층 빌딩, 교각 기초 등에 널리 쓰임 (RCD, 베노토 공법).

★ 시험 포인트
현장타설말뚝은 대구경 시공이 가능하여 중량 하중 지지에 최적. 기성 RC말뚝은 현재PHC로 대체됨.`},{id:"3-2-3",label:"PC말뚝",explanation:`공장에서 원심력 다짐 방식으로 고밀도 제작한 프리스트레스트 콘크리트(Prestressed Concrete) 기성 말뚝.

▶ 특징 및 공법
• 원심력 탈수 방식으로 회전시켜 잔여 기포와 수분을 제거하여 강도 향상.
• 콘크리트에 미리 고강도 인장선으로 압축 프리스트레스를 도입하여 운반 및 항타(타격) 시 휨 균열에 대한 내구성이 뛰어남.
• 허용 하중: 50~80tf 내외 (일반 RC말뚝보다 우수).
• 단면: 속이 빈 원형 중공(Hollow Area) 단면을 가짐.

★ 시험 포인트
PC말뚝 = 원심력 제작 + 프리스트레스 도입. RC말뚝보다 균열에 강함.`},{id:"3-2-4",label:"PHC말뚝",explanation:`Pretensioned High-strength Concrete Pile.
고강도 콘크리트(fck ≥ 80MPa)에 프리텐션 방식으로 프리스트레스를 도입하여 원심력으로 제작한 원형 중공 말뚝.

▶ 제조 과정
① 강관 몰드 내에 PC강선 배치 후 인장(긴장)
② 고강도 콘크리트 타설
③ 원심력 다짐 (회전으로 기포 제거·밀도 증가)
④ 증기양생 (단시간에 강도 발현)
⑤ 강선 단부 절단 → 콘크리트에 압축 프리스트레스 도입
⑥ 품질 검사 후 출하

▶ 특징
• 압축강도: 80MPa 이상 (일반 RC 콘크리트의 3~4배)
• 원형 중공 단면: 외경 300~600mm, 두께 60~90mm
• A·B·C종 구분 (C종이 가장 강하고 두꺼움)
• 경량이어서 운반·항타 효율적
• 균열 발생 후에도 프리스트레스로 자기봉합 능력

▶ 허용 하중 (종류별)
• A종: 경하중용
• B종: 표준용 (가장 많이 사용)
• C종: 중하중용

▶ 시공법과의 조합
• 중굴공법(속 구멍으로 오거 삽입): 가장 많이 사용 — 소음·진동 적음
• 항타공법: 소음·진동 크나 경제적
• 프리보링공법: 선굴착 후 삽입

▶ 비교 (강도 순서)
나무 < RC < PC < PHC (강도 증가)

★ 시험 포인트
PHC = 현재 국내 표준 기성 말뚝. 고강도(80MPa 이상). A·B·C종 구분. 중굴공법과 세트`},{id:"3-2-5",label:"강관말뚝",explanation:`강재 파이프(Steel Pipe)를 사용하여 선단 지지층까지 깊게 도달시키는 기성 말뚝 지정 공법.

▶ 특징 및 장단점
• 장점:
  - 압축, 인장, 휨 모멘트 성능이 모든 기성 말뚝 중 최우수.
  - 중량이 비교적 가볍고, 현장에서 필요한 길이만큼 용접이음(Welded Splice)으로 무제한 연장 가능.
  - 선단 지지력이 매우 높음 (보통 100~200tf 이상).
• 단점:
  - 강재이므로 가격이 비쌈.
  - 지하수나 염분에 의한 부식 위험 (도장 처리, 전기방식, 부식 여유 두께 1~2mm 감안 필수).

★ 시험 포인트
강관말뚝 = 용접이음 용이 + 대하중 지지 우수 + 부식 대책(피복/전기방식) 필수.`},{id:"3-2-6",label:"H형강말뚝",explanation:`H형강(Steel H-Section) 강재를 직접 지중에 박아 기초로 사용하는 말뚝 지정 공법.

▶ 특징 및 구조적 이점
• 배토량이 적음: 단면의 투영 면적이 작아 말뚝을 박을 때 밀려나오는 흙의 체적이 거의 없음 -> 인접 지반 솟음이나 기존 관로 훼손 최소화.
• 관입력 우수: 하단에 암반 지지층이나 전석(큰 자갈)이 깔린 지반에도 H형강 단부가 쉽게 관입됨.
• 용접을 통한 길이 조절이 용이하며, 강재의 부식에 대한 피복 관리가 중요.

★ 시험 포인트
H형강말뚝 = 배토량이 적은 말뚝 = 단단한 암반 관입성 최우수. 흙막이 H-Pile과 형태 동일.`}]},{id:"3-3",label:"말뚝 시공법",children:[{id:"3-3-1",label:"항타공법",explanation:`해머(Hammer)로 말뚝 머리를 반복 타격하여 지중에 박는 가장 기본적인 말뚝 시공법.

▶ 해머 종류와 특징
• 드롭해머 (Drop Hammer): 중량 추(2~5t)를 높이 올렸다 낙하
  장점: 구조 단순, 경제적 / 단점: 타격 속도 느림
• 디젤해머 (Diesel Hammer): 디젤 폭발력 이용
  장점: 빠른 타격, 강한 관입 / 단점: 소음·진동·매연 발생
• 유압해머 (Hydraulic Hammer): 유압 실린더로 추 낙하
  장점: 소음 적고 타격력 조절 가능 / 단점: 고가
• 진동해머 (Vibro Hammer): 진동으로 모래 지반 관입
  장점: 빠른 관입 / 단점: 점토 지반 불리

▶ 지지력 확인 — 항타 공식
리바운드(Rebound) 측정으로 지지력 추정 (예: Hiley 공식)
기준 관입량(Set) 이하가 되면 충분한 지지층 도달 판단

▶ 소음·진동 기준
• 도심 주거지: 소음 65dB, 진동 0.1cm/s 이하 — 항타 거의 불가
• 대안: 프리보링·중굴공법 적용

★ 시험 포인트
항타공법 = 해머로 타격. 소음·진동이 가장 큰 단점 → 도심지 제한. 드롭·디젤·유압·진동 4종류`},{id:"3-3-2",label:"프리보링공법",explanation:`말뚝 박기 전 어스오거(Earth Auger)로 구멍을 미리 굴착한 후 말뚝을 삽입하는 공법.

▶ 시공 순서
① 어스오거(회전 굴착기)로 말뚝 직경과 같은 홀(Hole) 굴착
② 필요 시 홀에 시멘트 페이스트 주입 (공벽 유지)
③ 말뚝 삽입 (홀 안에 내려놓음)
④ 선단부 확인·다짐 (경타 또는 압입)
⑤ 두부 정리

▶ 특징
장점:
• 소음·진동 대폭 감소 → 도심지·인접 구조물 근처 적합
• 자갈·전석 지반에서도 굴착 가능
단점:
• 항타보다 지지력이 다소 낮음 (지반-말뚝 마찰력 감소)
• 굴착 흙 처리 필요

▶ 지지력 보완 방법
선단 시멘트 밀크 주입(끝단 주입) → 선단 지지력 보완

★ 시험 포인트
프리보링 = 먼저(Pre) 굴착(Boring) 후 말뚝 삽입. 소음·진동 적음 = 도심지 적합. 항타보다 지지력 약간 낮음`},{id:"3-3-3",label:"중굴공법",explanation:`PHC말뚝 내부의 원형 빈 공간(중공부) 속에 나선형 어스오거(Earth Auger)를 집어넣고 지반을 굴착하면서 동시에 말뚝을 침하시키는 공법.

▶ 시공 순서
① 속이 빈 PHC말뚝 세우기
② 말뚝 내경보다 작은 오거 스크루를 중공부에 관입
③ 굴착 장비 가동하여 말뚝 끝부분 지반 흙을 오거로 파내며 말뚝 자체 무게(자중)와 압입력으로 강제 침하
④ 지지층 도달 후 오거를 빼고, 선단부에 고압으로 시멘트 밀크(풀)를 주입하여 선단 지지력 및 주변 마찰력 극대화(중굴선단주입공법)

▶ 장점
• 타격 해머를 쓰지 않아 소음과 진동이 현저히 적음 (도심지 민원 방지용 표준 공법).
• 말뚝 머리(두부)의 타격 균열 파손 우려가 없음.

★ 시험 포인트
중굴공법 = PHC 속 구멍 굴착 = 저소음/저진동 = 선단 시멘트 풀 주입 마무리.`}]},{id:"3-4",label:"케이슨기초",children:[{id:"3-4-1",label:"오픈케이슨",explanation:`상·하부가 개방된 콘크리트 상자(케이슨)를 자중으로 압하·침하시키며 내부를 굴착하는 공법.

▶ 시공 원리
① 지표에서 오픈케이슨 콘크리트 제작 (칼날형 선단)
② 내부 굴착 → 자중으로 침하
③ 침하 후 케이슨 벽체 콘크리트 연장 타설
④ 설계 심도 도달 후 내부 콘크리트 채움

▶ 특징
장점:
• 구조 단순, 시공 경제적
• 기계화 굴착 가능 (클램셸·그래브 등)
단점:
• 지하수 처리 어려움 (수중 굴착 필요)
• 침하 방향 조절 어려움 (편심 침하 위험)
• 침하 촉진을 위해 물 치환(수중 굴착) 필요

▶ 케이슨 3종류 비교
오픈: 개방 구조, 지하수 어려움
공기케이슨: 압축공기로 물 배제, 작업자 직접 입실
박스케이슨: 육상 제작 → 해상 침설, 항만·교량

★ 시험 포인트
오픈케이슨 = 위아래 열린 구조. 지하수 처리 어려움이 약점. 우물통기초라고도 함`},{id:"3-4-2",label:"공기케이슨",explanation:`케이슨 하부 작업실에 압축공기를 불어넣어 지하수를 배제하고 작업자가 내부에서 직접 굴착하는 공법.

▶ 원리 (핵심)
공기 압력(게이지압) = 지하수 수압
→ 물이 작업실로 들어오지 못함 → 건조한 환경에서 굴착 가능

▶ 특징
장점:
• 지하수가 많은 지반에도 적용 가능
• 작업자가 직접 굴착 → 다양한 지층 대응
• 이상 지층 발견 시 즉각 확인
단점:
• 고기압(최대 3.5기압) 환경에서 작업 → 잠수병(감압증, Caisson Disease) 위험
  감압증: 빠른 감압 시 혈액 내 질소 기포 형성 → 관절통·마비·사망
• 시공비 고가, 작업 효율 낮음
• 최대 심도 약 35m 제한 (3.5기압 한계)

▶ 안전 조치
• 작업자 입실 시 가압 / 퇴실 시 단계적 감압 (감압실 필수)
• 1일 작업 시간·최대 압력 규정 준수

★ 시험 포인트
공기케이슨 = 압축공기 + 지하수 배제 + 작업자 직접 굴착. 잠수병(감압증)이 가장 큰 위험`},{id:"3-4-3",label:"박스케이슨",explanation:`육상이나 도크에서 밑바닥이 막힌 콘크리트 상자(케이슨)를 제작한 후 해상에 띄워 예인선으로 끌고 가 예정 기초 자리에 가라앉히는 침설 공법.

▶ 특징 및 시공 원리
• 오픈케이슨이나 공기케이슨과 달리 바닥이 막힌 박스 구조임.
• 물에 뜨는 성질(부력)을 이용하여 진수한 뒤 해상으로 예인함.
• 설계 위치에서 내부에 모래, 자갈, 무근 콘크리트 등을 채워 넣어 자중으로 바닥의 사석 마운드 지정 위에 안착시킴.
• 주로 깊은 해안 방파제, 호안 옹벽, 영구 현수교 교각 기초에 적용.

★ 시험 포인트
박스케이슨 = 밑바닥 차단 상자 육상 제작 -> 해상 예인 -> 침설. 굴착 작업이 없는 침설 지정 기초.`}]},{id:"3-exam",label:"[시험 포인트]",children:[{id:"3-e1",label:"직접기초: 독립·줄·복합·온통기초",explanation:`▶ 핵심 기출: 직접기초 시공과 부동침하
• 직접기초(Shallow Foundation)의 접지압 분산 및 부동침하 방지 기법이 기출됩니다.

Q1. 부동침하(Differential Settlement)의 주요 원인 3가지를 쓰시오. (기출!)
A1.
1) 지반이 불균일하고 연약 지반이 경사져 분포할 때.
2) 건물 하중이 좌우 비대칭으로 편심 하중이 걸릴 때.
3) 서로 다른 기초 형식(예: 일부는 말뚝, 일부는 직접기초)을 복합 시공할 때.

Q2. 대지경계선에 인접하여 독립기초를 넓힐 수 없을 때 부동침하를 예방하기 위한 기초 방식은?
A2. 두 기둥을 묶어 합력점을 일치시키는 복합기초(Combined Footing).

★ 시험 포인트
부동침하의 정의와 발생 원인 쓰기 서술형 문제, 그리고 접지압 분산 면적이 가장 넓은 온통기초(매트기초)의 활용 조건이 핵심입니다.`},{id:"3-e2",label:"말뚝: 나무·RC·PC·PHC·강관·H형강",explanation:`▶ 핵심 기출: 말뚝 기초의 특성
• 말뚝 재질별 사용 제한 및 파손 하자가 출제됩니다.

Q1. 기성 PHC말뚝의 원심력 다짐 제조 공정상 압축강도 합격 기준값은?
A1. fck ≥ 80MPa 이상 (고강도 콘크리트).

Q2. 강관말뚝 시공 시 지하수나 염분에 의한 부식을 막기 위한 부식 두께 고려량 기준은?
A2. 설계수명 50~100년 기준 약 1~2mm의 부식 여유 두께를 철판 규격에 선반영하여 설계함.

★ 시험 포인트
나무말뚝의 사용 금지 조건(지하수위 위 노출 금지 - 부식 우려), 강관말뚝의 부식 방지 대책(전기방식, 아스팔트 피복칠)이 주요 출제 항목입니다.`},{id:"3-e3",label:"시공법: 항타·프리보링·중굴공법",explanation:`▶ 핵심 기출: 말뚝 시공 공법
• 진동/소음 제어를 위한 말뚝 특수 시공 방식 비교가 기출됩니다.

Q1. 도심지 주택가 인근에서 PHC말뚝을 시공하고자 할 때 소음과 진동 공해 민원을 예방할 수 있는 가장 적합한 기성말뚝 시공법은? (기출!)
A1. 중굴공법 (말뚝 중공부에 오거 스크루를 넣어 선단 지반을 파내며 말뚝을 회전 안착시킨 후, 선단에 시멘트 밀크를 고압 주입하여 정착).

Q2. 대구경 현장타설 콘크리트 말뚝 공법 중 구멍벽이 무너지는 것을 막기 위해 강제 케이싱 튜브를 집어넣어 요동 회전하며 파내는 공법은?
A2. 베노토(Benoto) 공법.

★ 시험 포인트
기성말뚝의 중굴공법 메커니즘과 현장타설말뚝 3대 공법(베노토, RCD-역순환, 어스드릴)의 흙막이 안정화 메커니즘 차이를 구분하세요.`},{id:"3-e4",label:"케이슨: 오픈·공기·박스",explanation:`▶ 핵심 기출: 케이슨 기초 공법
• 대형 우물통(케이슨) 기초의 시공 및 안착 기법입니다.

Q1. 케이슨(Caisson) 공법 중 바닥이 막힌 콘크리트 상자를 육상에서 제작하여 스스로 뜨는 부력(Buoyancy)을 이용해 물 위로 끌고 와 예정 위치에 가라앉히는 방식은? (기출!)
A1. 박스 케이슨(Box Caisson) 공법.

Q2. 오픈케이슨 시공 중 말뚝 하단이 걸쳐 솟아오르는 지반 파괴 현상은?
A2. 보일링(Boiling) 또는 히빙(Heaving) 현상.

★ 시험 포인트
오픈케이슨(우물통 굴착 침하), 공기케이슨(하부 작업실에 기압을 가해 지하수 차단 후 작업), 박스케이슨(스스로 부유 침설)의 3가지 공법을 구분해 쓰세요.`}]}]},{id:"4",label:"4. 철근콘크리트공사",children:[{id:"4-1",label:"거푸집",children:[{id:"4-1-1",label:"재래식 거푸집",explanation:`목재 합판(두께 12~18mm)과 각재를 현장에서 직접 제작하는 전통적인 거푸집.

▶ 구성
• 거푸집 면재: 합판(목재 또는 코팅 합판)
• 장선: 면재를 뒤에서 지지하는 소각재
• 동바리(Shoring): 슬래브 거푸집을 아래에서 받치는 수직 지지재
• 폼타이(Form Tie): 벽체 거푸집 양쪽을 연결·간격 유지

▶ 특징
장점:
• 특수 장비 불필요 — 어떤 형태도 제작 가능
• 비정형·곡면 구조물에 적합
• 초기 비용 낮음
단점:
• 반복 사용: 3~5회 정도 (다른 시스템 거푸집은 50~200회)
• 제작·해체 인력 과다 → 공기 길고 인건비 높음
• 폐자재(합판·각재) 발생 → 환경 부담

▶ 현재 사용 현황
고층·반복 건물: 갱폼·알폼·터널폼 대체
특수 형태·소규모: 재래식 거푸집 여전히 사용

▶ 거푸집 비교 (반복 사용 횟수)
재래식: 3~5회 < 갱폼: 50~100회 < 알폼: 100~200회

★ 시험 포인트
재래식 = 합판+각재 현장 제작. 비정형 구조물에 유리. 반복 사용 3~5회로 최저`},{id:"4-1-2",label:"갱폼 (Gang Form)",explanation:`대형 패널과 지지 프레임·작업발판을 일체로 조립한 대형 거푸집 시스템.
타워크레인으로 한 번에 인양하여 한 층 타설 후 상층으로 이동·반복 사용.

▶ 구성
• 대형 거푸집 패널 (콘크리트 접촉면)
• 지지 프레임 (강재 트러스·H형강)
• 작업발판 (상하 2~3단 설치)
• 인양 러그 (타워크레인 연결)

▶ 적용 구조물
고층 아파트·오피스텔의 전단벽(Shear Wall), 엘리베이터 코어(Core Wall)
— 같은 평면이 수십 층 반복되는 구조물에 최적
예: 35층 아파트 → 갱폼 1세트로 35층 반복 시공

▶ 장점
• 반복 사용 50~100회 → 초기 비용 분산·경제적
• 현장 조립·해체 최소화 → 공기 30~40% 단축
• 작업발판 일체형 → 별도 비계 불필요
• 공장 제작 대형 패널 → 콘크리트 표면 균일

▶ 단점
• 초기 제작 투자비 높음
• 타워크레인 필수 (크레인 없으면 사용 불가)
• 비정형·곡면 건물에 불리
• 강풍 시 인양 작업 중단 필요

▶ 알폼(알루미늄폼)과 비교
갱폼: 대형·크레인 필요·외벽 전용·50~100회
알폼: 경량·인력 설치·슬래브+벽 동시·100~200회

★ 시험 포인트
갱폼 = 크레인으로 통째 인양. 고층 아파트 전단벽이 키워드. 50~100회 반복 사용`},{id:"4-1-3",label:"슬립폼 (Slip Form)",explanation:`높이 1.0~1.5m의 거푸집을 유압잭(Hydraulic Jack)으로 시간당 15~30cm 속도로 연속 상승시키면서 콘크리트를 쉬지 않고 타설하는 공법.

▶ 시공 원리
① 지상에서 초기 거푸집(높이 1~1.5m) 조립
② 콘크리트 타설
③ 콘크리트가 탈형 강도(약 0.2~0.3MPa)에 도달하면 유압잭 작동 → 거푸집 상승 (시간당 15~30cm)
④ 상승하면서 계속 타설 → 연속 반복
⑤ 탈형 직후 콘크리트가 유연할 때 표면 정리·마감

▶ 특징
장점:
• 이음매(콜드 조인트) 없는 완전 일체 구조체 형성 — 가장 큰 장점
• 시공 속도 빠름: 하루 3~8m 상승 가능
• 별도 비계·크레인 불필요
• 연속 작업으로 공기 대폭 단축

단점:
• 24시간 연속 작업 필수 (중단 시 즉시 콜드 조인트 발생)
• 고도의 기술력과 숙련 인력 필요
• 단면 변화(출처·들여쌓기 등) 적용 어려움
• 사전 계획이 매우 철저해야 함

▶ 적용 구조물 (단면이 일정하고 높이가 큰 구조물)
사일로(Silo·곡물저장탑), 시멘트 저장탑, 굴뚝(Chimney), 냉각탑, 교량 원형 교각, 원유 탱크, 고층 코어월

▶ 갱폼·알폼과 비교
슬립폼: 연속 상승, 이음 없음, 굴뚝·사일로
갱폼: 층별 반복, 외벽, 고층 아파트

★ 시험 포인트
슬립폼 = 연속 상승 = 콜드 조인트 없음 = 24시간 연속 작업 필수. 사일로·굴뚝이 키워드`},{id:"4-1-4",label:"터널폼 (Tunnel Form)",explanation:`벽체와 슬래브를 동시에 타설할 수 있도록 ㄷ자(터널) 단면으로 제작된 거푸집 시스템.

▶ 구조
단면이 터널(ㄷ자) 모양 = 양쪽 벽 거푸집 + 천장(슬래브) 거푸집이 일체형

▶ 특징
장점:
• 벽체 + 슬래브 동시 타설 → 공기 대폭 단축 (2번 타설 → 1번 타설)
• 바닥과 벽을 한 번에 형성 → 일체성 향상
• 반복 사용: 약 100회
단점:
• 매우 무거움 → 대형 크레인 필수
• 벽체 두께·층높이가 일정한 경우에만 적용 (비정형 불가)
• 초기 제작 비용 높음

▶ 적합 구조물
• 아파트 (표준화된 평면·동일 층고가 반복)
• 지하 주차장 (박스형 균일 단면)

▶ 갱폼과 비교
터널폼: 벽+슬래브 동시, 층 전체 일괄 타설
갱폼: 벽체 전용, 크레인으로 한쪽씩 이동

★ 시험 포인트
터널폼 = ㄷ자 단면 = 벽+슬래브 동시 타설. 아파트에 최적. 가장 무거운 거푸집`},{id:"4-1-5",label:"플라잉폼 (Flying Form)",explanation:`바닥 슬래브용 거푸집 판, 장선, 멍에, 수직 동바리를 일체형 테이블(Table) 구조로 조립하여 한 층 타설 후 크레인으로 통째로 뽑아 상층으로 인양하는 대형 거푸집 시스템.

▶ 시공적 특징
• 슬래브 거푸집 전체를 조각조각 해체하지 않고 테이블 통째로 슬라이딩 아웃시킨 후 타워크레인으로 공중(Flying) 인양함.
• 동바리 및 거푸집 설치 노무 자원 대폭 절감, 슬래브 시공 속도 획기적 단축.
• 평면 구조가 대칭이고 개구부 돌출이 적은 기둥식 구조(라멘조, 무량판 구조)에 최적.
• 크레인 인양을 위해 전면 외벽 갱폼 상단에 거푸집 인출용 개구 공간 확보 필요.

★ 시험 포인트
플라잉폼 = 일체형 테이블폼 = 크레인 수평/수직 인양 = 슬래브 전용 대형 거푸집.`},{id:"4-1-6",label:"알폼 (Al Form)",explanation:`알루미늄 합금(6061-T6 등)으로 공장 제작한 경량 패널 거푸집.

▶ 특징
장점:
• 경량: 1.5~2.5kg/m² → 1인이 운반·설치 가능 (크레인 불필요)
• 반복 사용: 200~400회 → 가장 많이 반복
• 벽체·슬래브 동시 적용 가능 (다양한 형태 패널 조합)
• 치수 정밀도 높아 콘크리트 면이 균일
단점:
• 초기 제작비 높음 (알루미늄 비싸고 정밀 가공 필요)
• 같은 평면 반복되어야 경제적 → 비정형에 불리
• 충격 시 변형 가능 (알루미늄은 강재보다 강도 낮음)

▶ 갱폼과 비교
알폼: 경량·인력 설치·100~400회·다용도
갱폼: 대형·크레인 필수·50~100회·외벽 전용

▶ 적합 구조물
• 고층 아파트 실내 (벽+슬래브 동시 시공)
• 동일 평면 반복 구조물

★ 시험 포인트
알폼 = 알루미늄 경량 = 인력 설치 = 200~400회 최다 반복. 크레인 불필요가 갱폼과의 핵심 차이`}]},{id:"4-2",label:"철근공사",children:[{id:"4-2-1",label:"철근의 종류 (SR, HD)",explanation:`철근의 표면 형태에 따른 분류: 원형(SR)과 이형(HD).

▶ SR (Smooth Round bar, 원형철근)
• 표면이 매끄러운 원형 단면
• 콘크리트와 부착력 낮음 (매끄러운 표면 → 쉽게 빠짐)
• 현재는 특수 목적(해외 기준 일부) 외 거의 사용 안 함

▶ HD (High-strength Deformed bar, 이형철근)
• 표면에 마디(Lug, 横肋)와 리브(Rib, 縱肋) 있음
• 마디가 콘크리트를 걸어 부착력 대폭 향상 → 현재 표준
• 철근 표시: HD10, HD13, HD16, HD19, HD22, HD25, HD29, HD32, HD35, HD38
  숫자 = 공칭 지름(mm)

▶ 강도 등급
• SD300: 항복강도 300MPa (저강도, 주로 배력근)
• SD400: 항복강도 400MPa (가장 일반적, 주근)
• SD500: 항복강도 500MPa (고강도)
• SD600: 항복강도 600MPa (초고강도)

▶ 부착력 비교
SR(원형): 낮음 / HD(이형): 약 2~3배 높음

★ 시험 포인트
SR = 원형(매끄러움·부착 약), HD = 이형(마디·부착 강). 현재는 HD 표준. SD400이 가장 일반적`},{id:"4-2-2",label:"피복두께",explanation:`철근 표면에서 콘크리트 외부 표면까지의 최소 거리. 철근을 감싸는 콘크리트 보호층의 두께.

▶ 피복두께가 필요한 3가지 이유
① 철근 부식 방지 (가장 중요)
   콘크리트의 강알칼리(pH 12~13) → 철근 표면에 부동태 피막 형성 → 부식 억제
   피복 얇으면: 중성화 진행 → 피막 파괴 → 부식 → 팽창 → 균열·박락
② 내화 성능
   화재 시 500°C 이상에서 철근 항복강도 급감
   피복두께 = 열이 철근까지 도달하는 시간 지연 (내화 등급 확보)
③ 부착력 확보
   철근-콘크리트 일체 거동에 필요한 충분한 부착 면적 확보
   피복 부족 → 쪼갬 균열(Splitting Crack) → 부착 파괴

▶ 최소 피복두께 기준 (KDS 14 20 50)
위치                    | 최소 피복두께
실내 슬래브·벽체         | 20mm
실내 보·기둥            | 40mm
옥외 슬래브·벽체         | 40mm
옥외 보·기둥            | 50mm
흙에 접하는 기초·지하벽   | 60mm
수중 콘크리트            | 100mm

▶ 실무: 스페이서(간격재)
거푸집 내에 스페이서(플라스틱·모르타르)를 설치하여 철근을 규정 위치에 고정
피복두께 미달은 구조 안전상 중대한 결함

★ 시험 포인트
3가지 이유(부식방지·내화·부착력). 기초 60mm, 옥외 슬래브 40mm, 실내 슬래브 20mm 수치 암기`},{id:"4-2-3",label:"이음 (겹침·기계적·용접)",explanation:`철근의 길이가 부족할 때 두 철근을 연결하는 방법.

▶ 겹침이음 (Lap Splice) — 가장 일반적
• 두 철근을 나란히 겹쳐 철선(결속선)으로 묶음
• 하중 전달: 철근 → 콘크리트 → 철근 (콘크리트 통해 간접 전달)
• 겹침 길이: 인장 철근 기준 최소 40d 이상 (d = 공칭 지름)
  예: HD25 → 겹침 길이 최소 25×40 = 1,000mm = 1.0m

▶ 기계적 이음 (Mechanical Coupler)
• 강재 커플러를 두 철근 끝에 끼워 직접 연결
• 대구경 철근(HD25 이상) 이음에 적합
• 겹침이음보다 이음 길이 짧음 → 철근 절약
• 커플러 품질 검사 필수

▶ 용접이음 (Welded Splice)
• 철근 단부를 직접 용접
• 대구경·고강도 철근에 적용
• 용접 불량 시 강도 저하 위험 — 숙련 기술자 필수

▶ 이음 위치 원칙
• 인장력이 가장 작은 위치 (보의 중앙부 인장 이음 피함)
• 동일 단면에서 전체 철근의 50% 이상 이음 금지
  이유: 이음 부위는 상대적 약점 → 집중되면 취약 단면 형성

★ 시험 포인트
겹침이음 최소 40d. 이음은 인장이 작은 곳에. 같은 단면에서 50% 이상 이음 금지`},{id:"4-2-4",label:"정착길이",explanation:`철근과 콘크리트의 부착력에 의해 철근이 콘크리트 밖으로 뽑혀 나가지 않고 설계 응력(인장/압축)을 완전히 발휘하는 데 필요한 철근의 최소 매립 깊이.

▶ 결정 지배 요인
① 철근 강도 및 콘크리트 압축강도 (콘크리트 강도 fck가 높을수록 부착력이 커져 필요한 정착길이가 짧아짐).
② 철근 직경 d (철근이 굵을수록 부착 면적을 더 확보해야 하므로 정착길이가 정비례하여 늘어남).
③ 위치 보정 계수 (상부 철근은 타설 시 기포와 블리딩 수분이 상승하여 철근 밑면에 모이므로 부착력이 30% 떨어짐 -> 상부철근 정착길이는 1.3배 길게 가산 설계).
④ 도막 여부 (에폭시 코팅 철근은 필요길이 증가).

★ 시험 포인트
정착길이는 fck가 높을수록 감소, 철근 굵을수록 증가. 상부철근 계수 1.3배 가산 암기 필수.`},{id:"4-2-5",label:"갈고리 (Hook)",explanation:`철근이 콘크리트 속에서 미끄러져 빠지는 것을 물리적으로 고정하기 위해 철근의 단부를 90도, 135도, 180도 등으로 꺾어 구부린 부분.

▶ 갈고리(Hook) 필수 설치 대상 및 부위 (실기 빈출!)
① 원형 철근 (SR)의 모든 단부 (표면이 매끈하여 부착력이 극히 낮으므로 의무적 설치).
② 이형 철근 (HD) 중 다음의 중요 구조 한계 부위:
  - 기둥의 대근(띠철근, Tie) 및 보의 스터럽(늑근, Stirrup)의 양단부 (전단 파괴 방지용 135도 훅 필수).
  - 캔틸레버(내민보) 및 처마 끝 슬래브의 인장 주근 단부.
  - 인장철근의 겹침이음 구간 단부.

★ 시험 포인트
갈고리 의무 설치 부위 3가지(원형철근 단부, 스터럽/대근 단부, 캔틸레버 보 주근 단부) 쓰기 문제 대비.`}]},{id:"4-3",label:"콘크리트 재료",children:[{id:"4-3-1",label:"시멘트 종류",explanation:`건축공사에 사용되는 주요 시멘트의 종류와 특성.

▶ 포틀랜드 시멘트 5종 (가장 중요)
• 1종 (보통 포틀랜드): 일반 건축·토목 공사 표준. 현재 국내 90% 이상 사용
• 2종 (중용열 포틀랜드): 수화열 낮춤 → 매스콘크리트(댐·교각)
  수화열이 1종의 약 80% 수준
• 3종 (조강 포틀랜드): 초기 강도 발현이 매우 빠름
  3일 강도 = 1종의 7일 강도 수준
  → 긴급 공사, 한중콘크리트(겨울 시공), 프리캐스트 제품
• 4종 (저열 포틀랜드): 수화열 가장 낮음 → 대형 댐·두꺼운 기초
• 5종 (내황산염): 황산염 저항성 우수 → 하수처리시설·해양 구조물·지하 터널

▶ 혼합시멘트 (포틀랜드 시멘트 + 혼합재)
• 고로슬래그 시멘트: 제철소 부산물 슬래그 혼합. 내구성·수밀성 향상, 발열 감소
• 플라이애시 시멘트: 화력발전소 부산물. 워커빌리티 향상, 장기 강도 향상
• 실리카시멘트: 초고강도·고유동 콘크리트

▶ 백시멘트
• 산화철(Fe₂O₃) 성분 제거 → 흰색
• 테라조·미장 마감·색깔 콘크리트에 사용

▶ 수화반응 (핵심 원리)
시멘트 + 물 → 수화물(C-S-H 겔) 생성 → 경화·강도 발현
수화 시 열 발생 (수화열) — 온도 상승이 매스콘크리트 문제의 원인

★ 시험 포인트
3종 조강 = 빠른 강도(한중·긴급), 2종 중용열 = 발열 낮음(매스콘크리트). 세트로 암기`},{id:"4-3-2",label:"골재 (잔골재·굵은골재)",explanation:`콘크리트 체적의 약 70~80%를 점유하여 수화 반응 시 시멘트 풀과 섞여 골격 체적을 이루는 모래(잔골재)와 자갈(굵은골재).

▶ 체눈 규격 기준 분류
• 잔골재 (Fine Aggregate): 10mm 체를 전부 통과하고, 4.75mm(No.4) 체를 95% 이상 통과하며 0.075mm 체에 거의 다 남는 골재 (모래).
• 굵은골재 (Coarse Aggregate): 4.75mm 체에 거의 다 남는 입경의 골재 (자갈).
• 골재 요구 조건: 깨끗하고 강하며 내구성이 있을 것. 편평하거나 길쭉한 석편(공극률 상승 원인)이 없을 것. 입도(크고 작은 알갱이 분포)가 균일할 것(조립률 F.M. 적정 범위 유지).

★ 시험 포인트
잔골재와 굵은골재를 나누는 입경 기준 체눈 크기는 4.75mm(No.4 체)이다.`},{id:"4-3-3",label:"혼화재료 (혼화재·혼화제)",explanation:`시멘트·물·골재 이외에 추가로 넣는 재료. 사용량에 따라 혼화재(많음)와 혼화제(소량)로 구분.

▶ 혼화재 (Mineral Admixture) — 시멘트 중량의 5% 이상 사용
• 플라이애시 (Fly Ash)
  발전소 연소 부산물. 구형 입자 → 볼베어링 효과 → 워커빌리티 향상
  장기 강도 향상, 수화열 감소, 공극 충전 → 내구성 향상
  매스콘크리트에 적합
• 고로슬래그 미분말
  제철소 부산물. 잠재수경성(물+자극제로 경화)
  수밀성·내화학성 향상, 알칼리골재반응 억제
• 실리카퓸 (Silica Fume)
  입자 매우 미세 (시멘트의 1/100) → 공극 충전·강도 대폭 향상
  초고강도 콘크리트(80~150MPa) 필수 재료

▶ 혼화제 (Chemical Admixture) — 시멘트 중량의 1% 이하 소량 사용
• AE제 (공기연행제, Air-Entraining Agent)
  미세 독립기포(직경 0.05~1.25mm) 생성
  목적: 동결융해 저항성 ↑, 워커빌리티 ↑, 블리딩 ↓
  주의: 공기량 1% 증가 → 강도 약 4~5% 감소. 적정 공기량 4~7%
• 감수제 (Water-Reducing Admixture)
  단위수량 감소 → W/C 낮춤 → 강도·내구성 향상
• 고성능 감수제 (Superplasticizer)
  물을 20~30% 감소 → 고강도 콘크리트 제조 가능
• 촉진제: 응결·경화 촉진 (한중콘크리트용)
• 지연제 (Retarder): 응결 시간 연장 → 서중콘크리트·장거리 운반

▶ 핵심 구분 암기법
혼화재 = 많이(5% 이상) + 무기재료 = 플라이애시·슬래그·실리카퓸
혼화제 = 조금(1% 이하) + 화학약품 = AE제·감수제·촉진제·지연제

★ 시험 포인트
AE제는 혼화제(소량). 공기량 1%↑=강도 4~5%↓. 플라이애시는 혼화재(다량). 구분 실수 금물`}]},{id:"4-4",label:"콘크리트 배합",children:[{id:"4-4-1",label:"물-시멘트비 (W/C)",explanation:`콘크리트 배합에서 물(Water)과 시멘트(Cement)의 중량 비율.

W/C (%) = (물의 중량 / 시멘트의 중량) × 100

▶ 강도와의 관계 (Abrams의 물-시멘트비 법칙)
W/C ↓ → 압축강도 ↑ (반비례 관계)
이유: 수화에 필요한 물보다 초과된 물은 공극으로 남아 경화 후 강도 저하

▶ W/C 낮으면
강도↑, 내구성↑, 수밀성↑, 내화학성↑
단점: 워커빌리티(유동성) 저하 → 타설·다짐 어려움

▶ W/C 높으면
워커빌리티↑ (타설 쉬움)
단점: 강도↓, 건조수축↑, 블리딩↑, 재료분리 발생

▶ 용도별 기준값 (KDS)
일반 구조물: W/C ≤ 65%
내구성 중시(동결융해·해양): W/C ≤ 50%
수중 콘크리트: W/C ≤ 50%
고강도 콘크리트(40MPa 이상): W/C ≤ 40~45%
PSC(프리스트레스): W/C ≤ 45%

▶ 예시 계산
시멘트 400kg, W/C = 50%
→ 물 = 400 × 0.5 = 200kg/m³

▶ 배합 설계 흐름
설계기준강도(fck) 결정 → 배합강도(fcr) 산정 → W/C 계산 → 단위수량 결정 → 시멘트량 결정

★ 시험 포인트
W/C = 물/시멘트 비율. W/C 낮을수록 강도↑ 이 원리가 콘크리트 강도 결정의 핵심`},{id:"4-4-2",label:"슬럼프 (Slump)",explanation:`굳지 않은 콘크리트의 반죽질기(Consistency) 및 작업 성능(Workability)을 현장에서 신속히 판정하는 측정값.

▶ 슬럼프 시험 (Slump Test) 규격
• 슬럼프 콘 치수: 높이 300mm, 밑면 직경 200mm, 윗면 직경 100mm의 원뿔형 금속 용기.
• 시험 방법: 콘크리트를 3층으로 나누어 담고 각 층마다 다짐봉으로 25회 균일하게 다진 후 콘을 수직으로 조용히 들어 올림 -> 내려앉은 중앙부 높이(mm)를 측정.
• 표준 기준값:
  - 일반 철근콘크리트 보·기둥 구조: 80mm ~ 150mm (단위 cm 표기 시 8~15cm).
  - 철근 세밀 구조: 120mm ~ 180mm.
  - 무근 콘크리트: 50mm ~ 100mm.

★ 시험 포인트
슬럼프 콘 규격(100×200×300mm), 3층 각 25회 다짐법, 일반 강도 슬럼프 값 범위(8~15cm) 수치 필수 암기.`},{id:"4-4-3",label:"공기량",explanation:`동결융해 저항성을 증대시키기 위해 AE제 등의 공기연행제를 주입하여 콘크리트 내부에 인위적으로 분산시킨 미세한 독립 기포의 함유 비율(%).

▶ 품질 기준 및 영향
• 구조용 철근콘크리트 표준 공기량 범위: 4.0% ~ 7.0% (보통 4.5% 타깃).
• 공기량이 적절할 때: 볼베어링 역할로 유동성(워커빌리티) 향상, 미세 기포가 동결 팽창 압력을 흡수하여 동파 차단.
• 공기량 1% 변동 시 물리 변화:
  - 공기량 1% 상승 시: 슬럼프 약 2cm 증가(유동성 좋아짐), 압축강도는 약 4~5% 감소.
  - 공기량이 너무 많으면(7% 초과): 압축강도가 급감하고 철근 부착력이 크게 상실되어 불합격 처리.

★ 시험 포인트
구조용 콘크리트 공기량 기준 4~7%. 1% 상승 시 강도는 5% 내외 저하되는 반비례 관계 출제.`},{id:"4-4-4",label:"배합강도",explanation:`콘크리트 배합 시 실제 현장의 시공 오차(강도 편차)를 통계적으로 고려하여 설계기준강도(fck)보다 강도를 가산하여 설정하는 목표 배합 압축강도.

▶ 강도 산정 공식 (품질 편차 표준편차 s 기준)
• 콘크리트의 실제 강도는 정규분포를 보이므로 하위 5%(1/20) 및 하위 1% 미만이 설계강도보다 낮지 않도록 마진(할증)을 가함.
• 식 ①: fcr = fck + 1.34s (fck 강도 미달 확률을 5% 이하로 제어)
• 식 ②: fcr = fck + 2.33s - 3.5 (평균 강도 제어)
-> 위 두 식 중 가장 큰 값을 최종 배합강도 fcr로 결정하여 생산 배합표 작성.

★ 시험 포인트
설계강도 fck와 현장 표준편차 s를 준 후 배합강도 fcr을 계산하는 통계 공식 대입 문제 단골 출제.`}]},{id:"4-5",label:"콘크리트 시공",children:[{id:"4-5-1",label:"비비기 (믹싱)",explanation:`시멘트, 물, 골재, 혼화재료를 믹서(Mixer)에 투입하여 굳지 않은 콘크리트가 균일하게 섞이도록 섞어주는 공정.

▶ 비비기 시간 기준 (재료 투입 완료 후 기준)
• 가제식(강제 혼합식) 믹서: 최소 1분 이상 비비기 진행.
• 가경식(회전 드럼식) 믹서: 최소 1분 30초(90초) 이상 비비기 진행.
• 주의 사항:
  - 비비기 시간은 적정 시간을 준수하되 최대 시간 제한(보통 3분 이내)을 초과하지 않음. 과도하면 온도가 상승하고 유동성이 저하됨.
  - 비빈 콘크리트를 믹서에서 배출할 때는 1회 배출량을 전부 비워 재료 분리 방지.

★ 시험 포인트
믹서 종류에 따른 최소 비비기 시간(강제식 1분, 가경식 1.5분) 수치가 핵심 출제 요소.`},{id:"4-5-2",label:"운반",explanation:`공장 비비기가 완료된 레미콘을 타설 현장 위치까지 전용 트럭(Agitator Truck) 등으로 신속하게 수송하는 과정.

▶ 운반 한계 시간 제한 (수화열 및 콜드 조인트 방지)
• 비비기 시작부터 현장 타설 완료 시점까지의 한계 수치:
  - 외기 온도 25°C 미만 (일반 기온): 2.0시간 (120분) 이내.
  - 외기 온도 25°C 이상 (하절기/서중): 1.5시간 (90분) 이내.
• 시간 초과 시: 콘크리트 점성이 높아져 슬럼프 손실이 급격해지고, 기타설된 콘크리트와 접합부에 콜드 조인트(하자) 유발.

★ 시험 포인트
기온 25°C를 기준으로 일반 120분, 하절기 90분 이내 타설 완료 규정 수치 암기.`},{id:"4-5-3",label:"타설·다짐",explanation:`거푸집 내에 콘크리트를 붓고(타설) 균질하게 채우는(다짐) 일련의 작업.

▶ 타설 기준 (각 수치 암기 필수)
• 1회 타설 두께: 40~50cm 이하
  이유: 진동다짐기(바이브레이터) 유효 진동 범위가 50cm 이내
• 자유 낙하 높이: 1.5m 이하
  이유: 높이 초과 시 충격으로 재료분리 발생
• 이어치기 허용 시간: 여름 1.5~2시간, 겨울 4~6시간 이내
  초과 시 콜드 조인트(Cold Joint) 발생 — 구조적 약점

▶ 다짐 방법 (바이브레이터 = 진동다짐기)
• 삽입 간격: 60cm 이하 (유효 반경 30cm × 2)
• 삽입 깊이: 아래층에 10cm 이상 들어가도록 (일체화를 위해)
• 1회 진동 시간: 5~15초 (과진동 시 재료분리 발생)
• 천천히 빼낼 것 (빠르게 빼면 구멍 발생)

▶ 타설 순서 원칙
• 낮은 곳에서 높은 곳으로
• 좌우 균등하게 → 거푸집에 편심 측압 방지

▶ 콜드 조인트 (Cold Joint)
이어치기 시간 초과 시 발생하는 불량 수평 이음부
특징: 이음부 전단 저항력 급감, 누수 경로 형성
대책: 레미콘 공급 계획 철저, 지연제 사용, 구역 분할 계획

▶ 재료분리 방지 대책
낙하 높이 1.5m 이하, 슈트·펌프관 사용, W/C 적정 관리

★ 시험 포인트
1회 타설 40~50cm, 낙하 높이 1.5m 이하, 이어치기 2시간(여름), 바이브레이터 간격 60cm 이하 — 4가지 수치`},{id:"4-5-4",label:"양생 (습윤·증기)",explanation:`타설 후 콘크리트가 충분한 강도를 얻도록 온도·습도를 관리하는 모든 작업.

▶ 양생이 필요한 이유
수화반응은 물과 시멘트가 계속 반응해야 진행됨
수분 부족(건조) → 수화 중단 → 강도 발현 불완전
고온·저온 → 수화 속도 이상 → 품질 저하

▶ 습윤 양생 (표준 방법)
• 방법: 물·습포·양생 필름·스프링클러로 표면 젖은 상태 유지
• 기간: 보통 포틀랜드 시멘트 → 5일 이상
  조강 시멘트 → 3일 이상
  혼합 시멘트(플라이애시 등) → 7일 이상

▶ 증기 양생 (공장 부재용)
• 방법: 고온 증기(65°C 이하)로 단시간에 강도 발현 촉진
• 65°C 초과: 조직 불균일, 결함 발생 (이상 응결)
• 적용: PHC말뚝, PC보, PC슬래브 등 공장 제작 부재
• 효과: 28일 강도를 1~3일 내에 대부분 발현

▶ 막양생 (Membrane Curing)
• 양생 화합물(파라핀계)을 표면에 뿜칠 → 수분 증발 차단
• 수평면(슬래브 상면) 양생에 편리

▶ 양생 온도 기준
• 최저: 5°C 이상 (이하이면 동결 위험 → 한중콘크리트 대책 적용)
• 최고: 65°C 이하 (증기양생 시)

★ 시험 포인트
습윤양생 5일 이상(보통 시멘트). 증기양생 65°C 이하 = 공장 부재 전용. 양생 = 수화반응 유지`}]},{id:"4-6",label:"특수 콘크리트",children:[{id:"4-6-1",label:"한중콘크리트",explanation:`일 평균기온이 4°C 이하, 또는 타설 후 양생 중 콘크리트 온도가 동결할 우려가 있을 때 시공하는 콘크리트.
한국 기준: 11월~3월이 주요 한중 시기.

▶ 왜 문제인가?
수화반응은 온도가 낮을수록 느려짐.
0°C 이하: 배합수 동결 → 수화반응 완전 중단 + 얼음이 팽창하며 콘크리트 조직 파괴 = 초기 동해(初期凍害)

▶ 대책 (구체적 기준 포함)
① 재료 가열 (가장 중요)
   물: 최고 60°C까지 가열 (60°C 초과 시 이상 응결 위험)
   골재: 가열 가능 (간접 가열)
   시멘트: 절대 직접 가열 금지 (이상 응결 발생)
   → 타설 시 콘크리트 온도: 5~20°C 범위 유지
② 시멘트 선택: 조강 포틀랜드(3종) 또는 조강형 혼화제 → 초기 강도 빠르게 발현
③ W/C 60% 이하 제한: 동결 가능한 자유수 감소
④ AE제 사용: 동결융해 저항성 확보
⑤ 보온 양생: 단열 포, 텐트+열풍기로 5°C 이상 유지
   → 압축강도 5MPa 도달 전까지 절대 동결 방지 (초기 동해 방지 기준)

▶ 양생 기간 기준
조강 시멘트: 3~5일간 보온
보통 시멘트: 5~7일간 보온

▶ 한중 vs 서중 비교
한중: 가열(물 60°C)+보온 양생+조강 시멘트
서중: 냉각(얼음)+즉시 습윤+중용열 시멘트

★ 시험 포인트
일평균 4°C 이하 = 한중콘크리트. 물 가열 최대 60°C, 타설 온도 5~20°C, 초기 동해 방지 5MPa — 3가지 수치`},{id:"4-6-2",label:"서중콘크리트",explanation:`일 평균기온이 25°C를 초과하거나 콘크리트 타설 온도가 높아 품질 저하 우려 시 시공하는 콘크리트.

▶ 문제 발생 원리
고온 → 수화반응 가속화 → 슬럼프 급격히 저하(굳어버림)
→ 운반 중 유동성 손실 → 타설 곤란
→ 급결(빠른 응결) → 콜드 조인트 위험 증가
→ 수분 증발 빠름 → 플라스틱 수축균열

▶ 구체적 문제점
• 단위수량 증가 필요 → W/C 상승 → 강도 저하
• 운반 중 슬럼프 손실 심함 (기온 10°C 상승 시 슬럼프 약 2~3cm 감소)

▶ 대책
① 재료 냉각 (가장 효과적)
   배합수에 얼음 투입 — 물의 비열이 커 냉각 효과 최대
   골재: 냉수 살포·차광막 보관
   시멘트: 고온 시멘트 사용 금지 (110°C 이하 저장)
② 지연제(Retarder) 사용: 응결 시간 연장
③ 중용열(2종)·저열(4종) 시멘트 사용
④ 타설 시간 조정: 오전 일찍 또는 저녁 이후
⑤ 타설 후 직사광선 차단, 즉시 습윤 양생

▶ 타설 온도 기준
콘크리트 타설 온도: 35°C 이하 유지 목표

★ 시험 포인트
일평균 25°C 이상 = 서중콘크리트. 물에 얼음 투입이 핵심 냉각법. 지연제 사용·신속 타설·즉시 양생`},{id:"4-6-3",label:"수중콘크리트",explanation:`지하수위 아래, 교각 우물통 내부 등 물속 환경에서 타설하기 위해 특수 배합 및 차단 공법을 적용하여 시공하는 콘크리트.

▶ 시공 3대 원칙
① 물과의 접촉 최소화: 물속에 콘크리트를 그냥 떨어뜨리면 시멘트 풀이 유실되어 강도를 완전히 상실함 -> 자유낙하 절제 금지.
② 트레미관 (Tremie Pipe) 사용:
  - 관 지름 약 20cm의 강관을 물속 바닥까지 내린 후 깔때기로 콘크리트 주입.
  - 타설 도중 트레미관 밑단은 콘크리트 속에 항상 1.5m 이상 묻혀 있어야 물 유입이 차단됨.
③ 수중불분리성 혼화제 적용: 점성을 극대화하여 물속에서도 재료가 갈라지거나 유실되지 않음.

★ 시험 포인트
수중 타설 시 트레미관 공법 원리 및 주의사항(자유낙하 금지, 관 하단 1.5m 매립 유지) 기출.`},{id:"4-6-4",label:"매스콘크리트",explanation:`부재 최소 단면이 80cm 이상이거나 수화열에 의한 내외부 온도차가 25°C 이상 예상될 때 적용.
대표 구조물: 댐, 교각, 원자력 구조물 기초, 대형 매트기초.

▶ 온도균열 메커니즘 (순서 암기)
① 타설 직후 수화열 발생 → 내부 온도 60~80°C 상승
② 표면은 대기 냉각 → 낮은 온도 유지
③ 내부 팽창 vs 표면 수축 → 내외부 온도차 발생
④ 온도차 25°C 초과 → 표면에 인장응력 발생
⑤ 인장응력 > 콘크리트 인장강도(약 3~5MPa) → 균열 발생

▶ 방지 대책 (중요도 순)
① 저발열 시멘트 사용
   2종(중용열), 4종(저열) 포틀랜드 시멘트
   또는 플라이애시·고로슬래그 대량 혼합
② 파이프 쿨링 (Pipe Cooling) — 가장 직접적 효과
   콘크리트 내부에 냉각수 순환 파이프(φ25mm) 매립
   냉수 순환으로 내부 온도 강제 냉각
③ 분할 타설 (Lift 공법)
   1.0~1.5m씩 나누어 타설 → 수화열 분산
④ 단위 시멘트량 감소
   혼화재(플라이애시·슬래그)로 시멘트 일부 대체
⑤ 재료 사전 냉각
   골재·배합수 냉각, 얼음 투입
⑥ 단열 거푸집 사용
   표면 급냉 방지 → 내외부 온도차 줄임

▶ 온도 모니터링
매설 온도 센서로 내외부 온도차 지속 감시 → 25°C 이하 관리 목표

★ 시험 포인트
80cm 이상 = 매스콘크리트 정의. 온도차 25°C 이상이 균열 기준. 파이프쿨링이 가장 직접적 냉각법`},{id:"4-6-5",label:"경량콘크리트",explanation:`단위중량이 일반 콘크리트(2,300kg/m³)보다 작은 콘크리트.

▶ 경량 콘크리트의 종류
① 경량골재 콘크리트 (가장 일반적)
   • 팽창점토(Expanded Clay), 팽창혈암(Shale), 팽창슬래그 등 경량 골재 사용
   • 단위중량: 1,400~1,900kg/m³
   • 강도는 일반 콘크리트보다 낮음 (보통 15~25MPa 수준)

② 기포 콘크리트 (ALC)
   • ALC = Autoclaved Lightweight Concrete (오토클레이브 경량 기포 콘크리트)
   • 시멘트+규사+알루미늄 분말 → 수소 가스 발생 → 기공 형성 → 증기 고압 양생
   • 단위중량: 500~700kg/m³ (일반 콘크리트의 약 1/4)
   • 단열·방음 탁월, 절단 쉬움
   • 강도 낮고 흡수성 있음 → 방수 처리 필요

③ 무세골재 콘크리트 (No-fines Concrete)
   • 잔골재(모래) 생략, 굵은골재만 사용
   • 공극이 많아 배수성·투수성 우수 (투수 포장에 사용)

▶ 장점
• 구조물 자중 감소 → 기초·구조체 부담 줄어 경제적
• ALC: 단열·방음·내화성 우수

★ 시험 포인트
경량콘크리트 = 자중 감소 목적. ALC = 기포 경량 콘크리트. 팽창골재 사용이 핵심`},{id:"4-6-6",label:"프리팩트콘크리트",explanation:`거푸집 속에 미리 깨끗하고 굵은 자갈(굵은골재)을 가득 채워 넣은 후, 주입관을 통해 고유동성 모르타르(그라우트)를 압입 주입하여 굳히는 콘크리트.

▶ 구조적 장점 및 특징
• 건조 수축이 극히 적음: 자갈들이 서로 빽빽하게 맞닿아 있으므로 시멘트 모르타르 수화열 및 건조 수축량이 일반 콘크리트의 1/2 이하로 격감 -> 균열이 거의 안 생김.
• 수중 구조물 기초 보강, 기존 교량 교각 단면 증설, 원자력 차폐벽 등 정밀 고강도 부위에 적용.
• 주입 모르타르 강도 확보를 위해 플라이애시, 감수제 등 전용 혼화재료 필수 배합.

★ 시험 포인트
골재 선배치 + 그라우트 주입 메커니즘. 일반 콘크리트 대비 낮은 건조수축성이 핵심 장점.`},{id:"4-6-7",label:"PSC (프리스트레스트)",explanation:`철근 대신 고강도 강재(PC강선·강봉)를 콘크리트에 인장하여 압축 프리스트레스를 미리 도입하는 구조.

▶ 원리
콘크리트는 압축에 강하고 인장에 약함 (인장강도 = 압축강도의 약 1/10)
→ 하중 작용 전 미리 압축력을 가해두면 외부 인장력을 상쇄 → 균열 방지·경간 증가 가능

▶ 프리텐션 (Pre-tension)
순서: ① 강선 인장·고정 → ② 콘크리트 타설·양생 → ③ 강선 단부 절단 → ④ 부착력으로 압축력 전달
특징:
• 프리스트레스 전달: 강선-콘크리트 부착력 (정착구 없음)
• 공장 제작 (긴장대 Pretensioning Bed 필요)
• 직선 강선만 가능 (곡선 배치 어려움)
• 소·중형 부재: PHC말뚝, PC보, 슬래브, 철도 침목

▶ 포스트텐션 (Post-tension)
순서: ① 쉬스관(Sheath) 매립하며 콘크리트 타설·양생 → ② 강선 삽입 → ③ 잭으로 인장 → ④ 정착구 고정 → ⑤ 그라우트 주입
특징:
• 프리스트레스 전달: 정착구 (Anchor)
• 현장 타설 가능 → 대형·장스팬 구조물 적합
• 강선 곡선 배치 가능 (모멘트 분포에 맞게)
• 교량 거더, 장스팬 지붕, 댐, 저장 탱크

▶ 비교표
구분        | 프리텐션          | 포스트텐션
강선 인장   | 타설 전           | 양생 후
응력 전달   | 부착력            | 정착구
시공 장소   | 공장              | 현장·공장
부재 크기   | 소·중형           | 대형·장스팬
특수 부재   | PHC말뚝           | 교량 거더

★ 시험 포인트
프리텐션=부착력·공장·PHC말뚝, 포스트텐션=정착구·쉬스관·현장·교량. 이 두 가지 구분이 핵심`}]},{id:"4-exam",label:"[시험 포인트]",children:[{id:"4-e1",label:"거푸집: 갱폼·슬립·터널·플라잉·알폼",explanation:`▶ 핵심 기출: 거푸집 시스템 및 동바리
• 거푸집 가시설의 일체화 공법 특징이 매회 기출됩니다.

Q1. 아파트 외벽 등 수직 콘크리트 구조체용으로 비계와 거푸집판을 대형 철재 프레임으로 일체화하여 타워크레인으로 인양하는 거푸집의 명칭은? (기출!)
A1. 갱폼(Gang Form).

Q2. 바닥 슬래브용 거푸집, 수평 지지목(장선, 멍에), 동바리를 하나의 테이블 형태로 조립하여 크레인으로 통째로 뽑아 상층 인양하는 대형 거푸집은?
A2. 플라잉폼(Flying Form) 또는 테이블폼.

★ 시험 포인트
수직 전용(갱폼, 슬립폼-연속상승, 터널폼-벽+슬래브), 수평 전용(플라잉폼) 거푸집 분류 및 무동바리 공법(데크플레이트) 특징 암기가 필수적입니다.`},{id:"4-e2",label:"철근: SR·HD, 피복두께, 이음, 정착",explanation:`▶ 핵심 기출: 철근 조립 및 피복두께
• 철근의 이음과 정착길이 보정 수치가 자주 출제됩니다.

Q1. 철근 콘크리트 구조의 뼈대에서 철근의 피복두께(Cover Thickness)를 유지하는 근본적인 목적 3가지를 쓰시오. (기출!)
A1.
1) 화재 시 철근이 열에 노출되지 않도록 하는 내화성 확보.
2) 수분과 탄산가스 유입을 차단하여 철근 부식을 막는 내구성 확보.
3) 철근과 콘크리트 간의 부착 응력 극대화.

Q2. 슬래브 및 보의 인장철근의 최소 정착길이 보정 시, 상부 철근에 가산하는 보정 계수는?
A2. 1.3배 가산. (기포와 물이 상부 철근 밑에 고여 부착력이 떨어짐)

★ 시험 포인트
피복두께의 목적 3가지 쓰기, 갈고리(Hook) 필수 설치 대상(원형철근 전 부위, 스터럽/대근 단부) 숙지가 핵심 출제 요소입니다.`},{id:"4-e3",label:"혼화재(플라이애시) vs 혼화제(AE제)",explanation:`▶ 핵심 기출: 콘크리트 혼화 재료
• 혼화재(Admixture)와 혼화제(Agent)의 확실한 개념 구분이 기출됩니다.

Q1. 플라이애시(Fly Ash)를 콘크리트 배합에 사용 시 굳지 않은 콘크리트에 미치는 장점과 약점은? (기출!)
A1.
• 장점: 둥근 볼베어링 모양의 입자로 인해 유동성(워커빌리티)이 향상되고 수화 반응 속도를 늦춰 수화열 감소.
• 약점: 시멘트량 감소로 인해 초기 강도 발현이 매우 늦어지고, 동절기 동파 우려 상승.

Q2. 소량(1% 이하) 첨가하여 미세 독립 기포를 생성해 유동성과 동결융해 저항성을 늘리는 약품은?
A2. AE제 (Air-Entraining Agent).

★ 시험 포인트
혼화재(5% 이상 첨가, 배합 계산 가산 - 플라이애시, 슬래그) vs 혼화제(1% 미만 첨가, 약품제 - AE제, 감수제, 급결제)의 명칭과 물리 변화 비교.`},{id:"4-e4",label:"W/C·슬럼프·공기량·배합강도",explanation:`▶ 핵심 기출: 콘크리트 배합 및 강도
• 콘크리트 품질 배합 설계 시 N/mm2(MPa) 관련 계산 문제입니다.

Q1. 설계기준 압축강도(fck)가 24MPa이고, 현장의 표준편차가 3MPa이다. 30회 이상의 시험 실적이 있을 때 최종 배합강도(fcr)는?
A1.
• 식 ①: fcr = fck + 1.34s = 24 + 1.34(3) = 24 + 4.02 = 28.02 MPa
• 식 ②: fcr = fck + 2.33s - 3.5 = 24 + 2.33(3) - 3.5 = 24 + 6.99 - 3.5 = 27.49 MPa
-> 두 식 중 큰 값인 28.02 MPa를 배합강도로 선정.

★ 시험 포인트
설계강도 fck의 구간별(35MPa 기준 등) 배합강도 공식 선택 대입 계산 문제가 매회 출제되므로 표준편차(s) 보정 계수표를 정확히 외우셔야 합니다.`},{id:"4-e5",label:"타설·다짐·양생(습윤·증기)",explanation:`▶ 핵심 기출: 콘크리트 타설 및 양생
• 시공 불량으로 인해 유발되는 도막 결함 및 하자 원인 방지 공법입니다.

Q1. 콘크리트 타설 도중 하부 층 콘크리트가 굳기 시작한 후에 상부 층 콘크리트를 이어 부어 접합부가 일체화되지 못하고 틈이 생기는 현상은? (기출!)
A1. 콜드 조인트 (Cold Joint). (예방: 25°C 이상 시 90분 이내, 미만 시 120분 이내 타설 완료)

Q2. 콘크리트 타설 시 내부 진동기의 올바른 삽입 간격과 찔러넣는 깊이는?
A2. 삽입 간격 50cm 이하, 기타설된 하층 콘크리트 속으로 10cm 이상 관입.

★ 시험 포인트
콜드조인트의 정의와 방지 대책(운반/타설 시간 제한 준수), 진동기 사용 시 주의사항(수직 진동, 15초 이내 유지)이 실기 단골 서술형 항목입니다.`},{id:"4-e6",label:"특수콘크리트: 한중·서중·수중·매스",explanation:`▶ 핵심 기출: 특수 콘크리트
• 온도 및 환경 조건에 따른 특수 배합 콘크리트 종류입니다.

Q1. 하루 평균 기온이 4°C 이하로 떨어지는 극한 기후 조건에서 시공하는 콘크리트 공법과 동파 방지 조치는? (기출!)
A1. 한중 콘크리트 (Cold Weather Concrete). 온수 가열 배합, 단열/온풍 양생막 설치, 초기 동해 방지를 위해 압축강도 5MPa 도달할 때까지 온도를 유지.

Q2. 거푸집에 미리 깨끗한 굵은 자갈을 가득 배치하고 주입관으로 전용 고유동 모르타르를 압입하는 특수 콘크리트는?
A2. 프리팩트 콘크리트 (Prepakt Concrete).

★ 시험 포인트
한중콘크리트의 초기강도 5MPa 발현 기준 수치, 매스콘크리트의 수화열 온도 균열 방지 대책(벨트 컨베이어 냉각, 파이프 쿨링 공법) 기출 대비.`}]}]},{id:"5",label:"5. 철골공사",children:[{id:"5-1",label:"부재 종류",children:[{id:"5-1-1",label:"H형강",explanation:`H자 단면을 가진 철골 구조의 가장 기본적이고 범용적인 부재.

▶ 단면 구성
• 플랜지 (Flange, 수평판): 상·하 2개. 휨응력(인장·압축)에 주로 저항
• 웨브 (Web, 수직판): 가운데 1개. 전단력에 저항
• 필렛부: 플랜지와 웨브의 연결 부위

▶ 특징
• 휨 + 전단 + 축력 모두 효율적으로 저항 → 가장 범용적
• 플랜지 폭이 넓어 안정성 우수 (I형강보다 유리)
• 단면 효율이 높음 (같은 재료로 최대 강도 발휘)
• 공장에서 압연(Rolling) 또는 용접 조립으로 제작

▶ 규격 표시 (예: H-300×150×6.5×9)
H-높이×플랜지폭×웨브두께×플랜지두께 (단위: mm)

▶ 주요 용도
• 기둥 (Column): 수직 압축력·좌굴에 저항
  고층 건물 기둥 → H형강을 박스 형태로 용접 조립(BOX Column)
• 보 (Beam): 수평 부재, 슬래브 하중 지지
  대형 보(Girder): 여러 H형강 조합하거나 플레이트 용접
• 브레이스(가새): 지진 등 수평력 저항

▶ I형강과의 차이
H형강: 플랜지 폭 넓고 두꺼움 → 2축 강성 유리
I형강: 플랜지 폭 좁음 → 1축(수직) 굽힘 전용. 현재는 H형강이 거의 대체

▶ 실무 예시
10층 철골 사무소: 기둥 H-400×400×13×21, 보 H-350×175×7×11

★ 시험 포인트
H형강 = 플랜지(수평)+웨브(수직). 기둥·보에 범용. I형강보다 플랜지 넓어 안정적`},{id:"5-1-2",label:"I형강",explanation:`단면의 형상이 알파벳 I자 형태인 열간 압연 강재.

▶ 특징 및 구조적 한계
• 수직 방향 하중(휨 모멘트) 지지 성능이 우수하여 전통적으로 보(Beam) 부재에 주로 사용.
• H형강과의 차이점:
  - H형강에 비해 플랜지(수평판) 폭이 좁고, 플랜지 내측 면이 바깥쪽으로 갈수록 비스듬히 경사져 있음 (H형강은 두께가 평행함).
  - 횡방향 휨 강성이 약해 기둥용으로는 부적합하며 볼트 접합 시 경사용 와셔가 필요하여 접합 복잡.

★ 시험 포인트
I형강은 플랜지에 경사각(약 1/10 등)이 있으며 횡좌굴에 약하다는 점 이해.`},{id:"5-1-3",label:"ㄱ형강 (앵글)",explanation:`단면의 형상이 직각 L형(ㄴ자 또는 ㄱ자) 형태인 열간 압연 구조용 강재. Angle이라고 불림.

▶ 특징 및 적용
• 등변ㄱ형강(두 다리의 폭이 같음)과 부등변ㄱ형강(두 다리의 폭이 다름)이 있음.
• 강재 트러스(Truss) 구조물의 주부재(현재) 및 연결 사재로 주로 핀/볼트 접합 시 널리 사용.
• 보강 철물 브래킷, 철골 부재 간의 결속 및 보강 등 부속 철물에 가장 흔하게 적용.
• 표기법 예시: L - 75 × 75 × 6 (다리폭 75mm, 두께 6mm).

★ 시험 포인트
트러스 사재의 주부재로 앵글(ㄱ형강)이 쓰이며, 규격 표기법 숙지가 필요.`},{id:"5-1-4",label:"ㄷ형강 (채널)",explanation:`단면의 형상이 ㄷ자(C자) 모양 형태인 압연 구조용 강재. Channel이라고 부름.

▶ 특징 및 적용
• 한쪽 면이 평평한 판 형태로 되어 있어 다른 부재(판재, 볼트 등)와의 가공 및 조립 접합성이 우수함.
• 주로 지붕의 도리(Purlin), 샛기둥, 천장 틀용 경량 찬넬(C-Channel) 지지재 등으로 활용.
• 단면의 대칭 중심(도심)이 플랜지 바깥쪽에 위치하므로 중심 하중이 어긋나면 휨 변형 시 비틀림 모멘트(Torsion)가 심하게 유발되므로 구조 보강 설계가 필요.

★ 시험 포인트
ㄷ자 단면의 비틀림 민감성 및 경량 천장틀 등의 조립 지재 용도 출제.`}]},{id:"5-2",label:"접합",children:[{id:"5-2-1",label:"용접접합",children:[{id:"5-2-1-1",label:"맞댐용접",explanation:`두 강재의 끝면을 맞대어 용접하는 방법. 부재를 완전히 일체화.

▶ 종류
• 완전용입용접 (CJP: Complete Joint Penetration)
  루트(Root, 밑부분)까지 완전히 용융·충전
  강도: 모재와 동등 → 가장 강한 용접
  검사: 초음파검사(UT) 또는 방사선검사(RT) 필수
• 부분용입용접 (PJP: Partial Joint Penetration)
  루트까지 완전 용입하지 않고 일부만 용접
  강도: 완전용입보다 낮음

▶ 용접 준비 (개선 가공, Groove 가공)
용접 전 강재 단부를 V형·X형·K형 등으로 가공 (홈내기)
V형: 한쪽에서만 용접 (얇은 판)
X형: 양쪽에서 용접 (두꺼운 판)

▶ 주요 위치
• 기둥 이음부 (기둥과 기둥 사이 연결)
• 보-기둥 접합부의 플랜지 연결 (모멘트 전달)
• 기둥 다이아프램 용접

▶ 용접 결함 (시험 출제)
기공(Porosity), 균열(Crack), 용합불량(Lack of Fusion), 용입불량(Incomplete Penetration)
→ 모두 강도 저하 원인. RT·UT로 발견

▶ 비파괴검사 (내부 결함 확인)
• UT(초음파): 내부 균열·용입불량 탐지 — 가장 일반적
• RT(방사선): 기공·슬래그 확인 — 기록 보존 가능

★ 시험 포인트
맞댐용접 = 끝면을 맞대어 일체화. 완전용입(CJP) = 가장 강함. UT·RT로 검사 필수`},{id:"5-2-1-2",label:"필릿용접",explanation:`두 부재를 겹치거나 직각으로 교차시켜 접합할 때 그 모서리(삼각형 단면)를 용접하는 공법.

▶ 특징 및 맞댐용접과의 차이
• 맞댐용접처럼 모재 단부를 경사지게 깎는 홈가공(V커팅)이 불필요하여 시공 속도가 빠르고 매우 경제적.
• 용접 부위가 주로 전단력을 받게 되므로 강도 설계 시 유효 목두께(Throat Thickness) 계산이 필수적.
• 유효 목두께 계산 공식:
  a = S × cos(45도) ≈ 0.7S (S = 용접 치수 즉, 용접 다리길이)

★ 시험 포인트
필릿용접 유효 목두께 = 다리길이의 0.7배(0.7S). 개선가공이 없어 시공성이 높음.`}]},{id:"5-2-2",label:"볼트접합",children:[{id:"5-2-2-1",label:"고력볼트",explanation:`고강도 볼트(F8T·F10T·F13T급)를 규정 장력으로 조여 접합면의 마찰력으로 하중을 전달하는 접합 방법.

▶ 마찰형 접합 원리 (가장 일반적)
볼트를 세게 조임 → 접합면에 강한 압축력 발생 → 접합면 마찰력으로 전단력 저항
→ 슬립(미끄러짐) 발생 전까지 볼트 자체에는 전단력 작용 없음
→ 피로 하중에 강함 (볼트 피로 파단 방지)

▶ 지압형 접합
슬립 허용 → 볼트가 볼트 구멍 벽면(지압면)을 직접 누르며 전달
마찰형보다 처짐(변형) 허용 → 정적 하중·저가 구조물에 적용

▶ 접합면 처리 (마찰형 필수)
• 블라스트 처리 (Sand/Shot Blast): 표면을 거칠게 → 마찰계수 증가
• 마찰계수 목표값: 0.45 이상

▶ 조임 방법
① 토크 조임: 토크 렌치로 규정 토크값까지 조임
② 너트 회전법: 기준 위치에서 너트를 추가 회전 (120°~240°)
③ 마찰계수 확인 시험 후 시공

▶ 조임 순서
볼트군의 중앙부에서 외주부로 → 1차 조임(50%) → 2차 조임(100%)

▶ 볼트 등급과 강도
F8T: 항복강도 640MPa / F10T: 900MPa / F13T: 1170MPa

★ 시험 포인트
고력볼트 = 마찰형이 표준. 접합면 블라스트 처리 필수. 토크 렌치로 규정 체결력 관리`},{id:"5-2-2-2",label:"일반볼트 (앙카볼트)",explanation:`철골 구조물에서 일반 하중 결합용 및 앵커링용으로 사용되는 볼트 철물.

▶ 일반볼트와 앙카볼트의 개념
• 일반볼트 (Ordinary Bolt):
  - 인장 및 전단 강도가 낮아 주요 구조체(보, 기둥) 접합부에는 사용 불가.
  - 가조립용 볼트, 임시 고정용, 또는 가설 비내력 마감 프레임 결합에 한해 사용.
• 앙카볼트 (Anchor Bolt):
  - 철골 기둥 하부의 베이스플레이트를 콘크리트 기초 기둥에 수직으로 매립 고정하기 위해 콘크리트 타설 시 미리 매설하는 중강도 볼트.
  - 베이스플레이트 레벨링과 전단력을 기초에 전달하는 결정적 역할을 하므로 매설 허용오차가 극히 작아야 함 (±2mm 수준).

★ 시험 포인트
일반볼트 = 주요 구조체 영구 결합 금지 (가조립/비내력용). 앙카볼트 = 기초 고정 매립용.`}]}]},{id:"5-3",label:"내화피복",children:[{id:"5-3-1",label:"뿜칠공법",explanation:`철골 표면에 점착성 합성수지 접착제와 함께 단열 내화재(암면, 질석, 펄라이트 등)를 혼합하여 스프레이 건으로 분사하여 도포하는 내화피복 공법.

▶ 시공 장단점
• 장점:
  - 시공 속도가 매우 빠르고 피복 단가가 저렴하여 대형 빌딩 철골 보·기둥에 널리 사용.
  - 복잡한 용접 접합부 및 볼트 이음새 부위에도 틈새 없이 뿜칠 피복이 가능.
• 단점:
  - 도포 두께를 정밀하게 균일화하기가 어려움.
  - 피막의 강도가 낮아 외부 물리 충격 시 쉽게 떨어져 나감(박락 우려).
  - 시공 시 미세 암면 분진 등 보건 환경상 위험 방지 시설 필요.

★ 시험 포인트
내화피복 뿜칠공법 = 가장 대중적·경제적 = 박락 우려 및 두께 불균일이 단점. 암면 뿜칠.`},{id:"5-3-2",label:"타설공법",explanation:`철골 주위에 거푸집을 설치하고 일반 콘크리트 또는 경량 내화 콘크리트를 타설하여 피복하는 공법.

▶ 특징
장점:
• 내구성·강도 최우수 — 콘크리트 자체가 내화재
• 완전 일체화로 박락(떨어짐) 우려 없음
• 철골·콘크리트 복합 구조에서는 구조체와 내화 동시 기능
단점:
• 거푸집 설치·해체 필요 → 공사 기간 길고 비용 증가
• 무겁고 부피가 커짐 → 구조체 하중 증가
• 복잡한 단면에 적용 어려움

▶ 적용 대상
• 철골-콘크리트 합성 기둥 (SRC 구조)
• 내화 등급이 높아야 하는 특수 구조물

▶ 내화피복 3공법 비교
뿜칠: 가장 경제적·빠름·충격 약함
타설: 가장 강하고 내구적·시공 복잡
붙이기: 마감 겸용·깔끔함·복잡 단면 어려움

★ 시험 포인트
타설 내화피복 = 콘크리트로 감싸기 = 가장 튼튼. 거푸집 필요하여 공기가 길다는 것이 단점`},{id:"5-3-3",label:"붙이기공법",explanation:`내화 보드(규산칼슘판, 석고보드) 또는 내화벽돌을 철골 표면에 접착하거나 앵커로 고정하는 공법.

▶ 사용 재료
• 규산칼슘 보드: 내화성·내습성 우수, 두께 12~50mm
• 석고 보드: 경제적, 두께 12~25mm
• 내화 세라믹: 고급 내화

▶ 특징
장점:
• 깔끔한 표면 → 별도 마감 없이 인테리어로 활용 가능
• 뿜칠보다 강도·내충격성 우수
• 두께 일정 → 내화 등급 확보 용이
단점:
• 복잡한 단면·곡면 적용 어려움
• 접합부 처리가 약점
• 뿜칠보다 시공 단가 높음

▶ 고정 방법
접착제 + 나사/앵커 병행 (접착제만으로는 낙하 위험)

★ 시험 포인트
붙이기 내화 = 보드 부착 = 표면 깔끔 = 마감 겸용 가능. 뿜칠(경제)·타설(강함)·붙이기(마감)로 3종류 암기`}]},{id:"5-exam",label:"[시험 포인트]",children:[{id:"5-e1",label:"부재: H·I·ㄱ(앵글)·ㄷ(채널)형강",explanation:`▶ 핵심 기출: 철골 부재 및 가공
• 철골 강재의 기하학적 형태 표기법 및 절삭/구부림 가공입니다.

Q1. 철골 앵글 부재 표기법인 \`L - 75 × 75 × 6\`이 나타내는 규격 정보는?
A1. 등변 ㄱ형강(앵글)으로서 다리폭 가로 75mm, 세로 75mm, 두께 6mm임을 뜻함.

Q2. 강재 단부에 구멍을 뚫는 기계 가공 방법으로 두꺼운 부재용 드릴링과 얇은 판재용 펀칭의 한계 두께 기준은?
A2. 강재 두께 13mm 초과 시에는 드릴링(Drilling)으로 뚫고, 13mm 이하일 때만 공정성 있는 펀칭(Punching) 적용 가능.

★ 시험 포인트
철골 도면 부재 표시법(H형강, I형강, 채널, 앵글 규격 치수), 구멍뚫기 드릴링 기준 두께(13mm 초과)를 암기해 두세요.`},{id:"5-e2",label:"용접: 맞댐용접·필릿용접",explanation:`▶ 핵심 기출: 용접 접합 및 결함
• 철골 부재 결합 중 용접부 결함 명칭과 원인입니다.

Q1. 철골 용접 시 과도한 고전류 주입이나 비숙련 솔질로 용접 모재의 구석 부분이 완전히 녹아들어 가지 못하고 홈(도랑)으로 비어남아 결함을 형성하는 현상은? (기출!)
A1. 언더컷 (Undercut).

Q2. 필릿용접 시 목두께 계산에서 목두께(a)는 다리길이(S)의 몇 배인가?
A2. a ≈ 0.7 S.

★ 시험 포인트
용접 결함 4대 징후인 언더컷, 오버랩(모재 위 덮임), 크레이터(단부 오목홈), 블로우홀(기공)의 명칭과 정의 쓰기가 빈출됩니다.`},{id:"5-e3",label:"볼트: 고력볼트·일반볼트",explanation:`▶ 핵심 기출: 고력 볼트 접합
• 고장력 볼트(High-strength Bolt)의 체결 검사 및 기준입니다.

Q1. 고장력 볼트를 조일 때 조임력(인장력)이 정밀하게 전달되었는지 확인하는 현장 조임 검사 방법 3가지는? (기출!)
A1.
1) 토크렌치(Torque Wrench)를 사용한 토크 측정법.
2) 계기 고정형 임팩트 렌치 법.
3) 볼트 단부의 칼라 핀이 조임 토크 도달 시 파단되는 TS 볼트(Shear Type)의 핀 파단 확인법.

Q2. 고장력 볼트의 주요 접합 방식 3가지는?
A2. 마찰접합, 인장접합, 지압접합.

★ 시험 포인트
마찰접합의 원리(강한 인장으로 마찰면 사이 마찰력 전달), 체결 장비(토크렌치), 조임 조절용 TS볼트(핀파단형)가 출제 포인트입니다.`},{id:"5-e4",label:"내화피복: 뿜칠·타설·붙이기",explanation:`▶ 핵심 기출: 내화 피복 공법
• 철골 구조체를 화재 열로부터 단열하는 공법 분류입니다.

Q1. 철골 기둥이나 보 주위에 거푸집을 설치하고 경량 기포 콘크리트나 모르타르를 타설하여 피복을 형성하는 내화공법은?
A1. 타설공법.

Q2. 내화 피복재의 공법별 종류 4가지를 쓰시오. (기출!)
A2. 뿜칠공법, 타설공법, 붙이기공법(내화보드 접착), 미장공법.

★ 시험 포인트
내화피복 4대 공법명(뿜칠, 타설, 붙이기, 미장)과 철골이 고온(약 500~600°C)에 노출될 때 강도가 50% 이하로 급감하므로 피복이 의무화되는 물리적 원리 기출.`},{id:"5-e5",label:"철골세우기 순서",explanation:`▶ 핵심 기출: 철골 세우기 및 가조립
• 현장 크레인을 이용한 철골 조립의 공정상 주의사항입니다.

Q1. 철골 세우기 공사에서 기둥과 보의 가조립(Fit-up) 볼트는 정식 접합부 구멍 수의 최소 몇 % 이상 체결해야 하는가? (기출!)
A1. 본접합 전 풍하중에 의한 붕괴 방지를 위해 전체 구멍 수의 1/3(33.3%) 이상, 또한 최소 2개 이상 임시 가조립 볼트를 의무 체결함.

★ 시험 포인트
가조립 볼트 체결 기준 비율(1/3 이상) 및 최소 개수(2개 이상)는 직접 쓰기 단골 문제이니 무조건 외워 두세요.`}]}]},{id:"6",label:"6. 조적공사",children:[{id:"6-1",label:"벽돌쌓기",children:[{id:"6-1-1",label:"길이쌓기",explanation:`벽돌의 긴 면(길이면)이 벽 바깥쪽에 보이도록 쌓는 방법.

▶ 벽돌 규격과 용어 (KS 표준)
기본 벽돌: 190(길이) × 90(너비) × 57(두께) mm
줄눈 10mm 포함: 200 × 100 × 67mm (모듈 치수)

▶ 특징
• 벽 두께 = 벽돌 너비(90mm) + 줄눈 = 약 0.5B(반장 쌓기)
  0.5B = 90mm + 양쪽 줄눈 반 = 약 100mm
• 가장 얇은 벽 구성 가능
• 구조적 강도 낮음 (비내력벽 전용)

▶ 적용
• 비내력 칸막이벽, 화단 경계, 장식벽

▶ 쌓기 두께 비교 (B = 1장 길이, 약 190mm+줄눈)
0.5B = 길이쌓기 (너비만큼)
1.0B = 마구리쌓기 (길이만큼)
1.5B = 길이 + 마구리 조합

★ 시험 포인트
길이쌓기 = 벽돌 긴 면(길이면) 노출 = 0.5B 두께. 쌓기법 중 가장 얇음`},{id:"6-1-2",label:"마구리쌓기",explanation:`벽돌의 짧은 면(마구리)이 벽 바깥쪽에 보이도록 쌓는 방법.

▶ 특징
• 벽 두께 = 벽돌 길이(190mm) + 줄눈 = 약 1.0B
  1.0B = 190+10(줄눈) = 200mm
• 길이쌓기보다 두꺼운 벽
• 마구리가 보이므로 수직 단면이 짧음

▶ 적용
• 단독으로 사용하기보다 길이쌓기와 혼합 (영국식·화란식 등)
• 두꺼운 벽이 필요한 경우

▶ 왜 마구리켜가 필요한가?
벽돌이 길이 방향으로만 쌓이면 전후로 연결이 없어 벽이 2겹으로 분리 위험
마구리켜가 끼어들어 내·외 벽면을 가로질러 연결 → 일체화

★ 시험 포인트
마구리쌓기 = 짧은 면(마구리) 노출 = 1.0B 두께. 길이쌓기(0.5B)와 두께 비교 = 0.5B vs 1.0B`},{id:"6-1-3",label:"영국식쌓기",explanation:`길이켜(길이쌓기 한 단)와 마구리켜(마구리쌓기 한 단)를 교대로 반복 쌓는 방법.

▶ 단면 구성 (영국에서 발전)
1단: 길이켜 (길이면 노출)
2단: 마구리켜 (마구리 노출, 벽 전후 결합)
3단: 길이켜 → 반복

▶ 특징
• 강도 최우수 (모든 쌓기법 중)
  마구리켜가 벽 내외부를 완전히 가로질러 결합하기 때문
• 모서리(코너) 처리: 이오토막(3/4 토막) 사용
• 내·외 벽면이 완전 일체화

▶ 쌓기법 강도 순서
영국식 > 화란식 > 미국식 > 불식 > 길이쌓기 단독

▶ 영국식 특징 (화란식과 차이)
영국식: 마구리켜에서 이오토막 위치가 벽 모서리 기준
화란식: 이오토막이 3/4 위치

★ 시험 포인트
영국식 = 길이켜+마구리켜 교대 = 강도 최강. 마구리켜가 벽 전후를 결합하는 것이 강도의 이유`},{id:"6-1-4",label:"화란식쌓기",explanation:`벽돌쌓기에서 길이쌓기와 마구리쌓기 단을 교대로 쌓되, 모서리(귀통이) 부분에 칠오토막(7/8 토막) 벽돌을 사용하여 줄눈을 정리하는 네덜란드식 벽돌 쌓기 기법.

▶ 특징 및 시공적 비교
• 영국식쌓기(이오토막 사용)와 구조적 원리는 거의 유사함.
• 모서리에 칠오토막 벽돌을 사용하면 시공성이 훨씬 편리하고 벽돌 파손 손실이 적음.
• 마구리켜와 길이켜가 수직줄눈이 일치하지 않는 엇갈림 구조(막힌줄눈)를 형성하여 매우 튼튼함.
• 강도도 우수하고 시공이 편리해 국내 시멘트/치장벽돌 시공 현장에서 가장 많이 채택되는 방식.

★ 시험 포인트
화란식쌓기 = 모서리에 칠오토막(7/8) 벽돌 사용. 영국식(이오토막 3/4)과 구별하는 문제가 출제 단골.`},{id:"6-1-5",label:"미국식쌓기",explanation:`5~6단의 길이켜 후 1단 마구리켜를 반복하는 쌓기법.

▶ 특징
• 외관이 깔끔하고 균일 (길이면이 주로 보임)
• 마구리켜 비율 낮음 → 내·외 벽면 결합 횟수 적음
• 영국식보다 강도 낮음
• 시공 속도 빠르고 재료 낭비 적음
• 미국에서 발전, 국내 장식벽에 활용

▶ 비교: 마구리켜 빈도
영국식: 1단마다 마구리 (가장 강함)
미국식: 5~6단마다 마구리 (경제적·빠름·강도 중간)
불식: 같은 단 내 혼합 (가장 복잡한 패턴)

★ 시험 포인트
미국식 = 5~6켜 길이 + 1켜 마구리. 외관 깔끔, 강도는 영국식보다 낮음`},{id:"6-1-6",label:"불식쌓기",explanation:`길이벽돌과 마구리벽돌을 같은 켜(단) 안에 번갈아 배치하는 프랑스식 쌓기법.

▶ 특징
• 프랑스(불란서)식이라 불림
• 같은 수평 켜에서 길이-마구리-길이-마구리가 교차
• 외관상 다양한 패턴 → 장식적 효과
• 강도는 영국식보다 낮음 (마구리가 연속 열을 이루지 못함)
• 정교한 시공 필요 → 시공 비용 높음

▶ 적용
• 장식 목적 외벽, 화단·담장 장식
• 구조용보다는 장식용

★ 시험 포인트
불식 = 프랑스식 = 같은 켜에 길이+마구리 혼합. 외관 다양, 강도 낮음`}]},{id:"6-2",label:"블록쌓기",explanation:`속 빈 콘크리트 블록(시멘트 블록)을 모르타르로 쌓는 공사.

▶ 블록 규격 (표준 시멘트 블록)
• 기본 치수: 190(길이) × 390(높이) × 190(두께) mm
• 줄눈 10mm 포함 시: 200 × 400 × 200mm (모듈 치수)
• 속빈 중공부 비율: 25~30% → 경량·단열 효과

▶ 블록 쌓기 원칙
• 막힌줄눈 (통줄눈 금지): 상하 수직 줄눈이 일치하지 않게 1/2블록 엇갈림
  이유: 통줄눈 = 수직 연속 약점 → 균열 및 강도 저하
• 1일 쌓기 높이 제한: 1.6m 이하 (6켜 이하)
  이유: 모르타르 경화 전 과부하 → 변형·붕괴 위험
• 줄눈 두께: 10mm (가로·세로 균일)
• 세로줄눈에 모르타르 완전 충전 (미충전 시 방수·강도 불량)
• 하루 작업 후 수직도·수평 정밀 확인

▶ 보강 블록 (내력벽으로 사용 시)
속빈 부분에 수직 철근(D10~D13) 삽입 + 그라우트 콘크리트 충전
→ 단순 블록 대비 지진 저항력·휨 강도 대폭 향상
→ 내진 설계가 필요한 지역에 필수

▶ 테두리보 (Ring Beam) 역할
블록벽 최상단에 RC 테두리보 설치
① 상부 슬래브 하중을 블록벽 전체에 균등 분산
② 블록벽의 불균일 침하·균열 방지
③ 지진 수평력 저항

★ 시험 포인트
블록 190×390×190mm. 통줄눈 금지. 1일 1.6m 이하. 보강 블록 = 철근+그라우트. 세로줄눈 완전 충전`},{id:"6-3",label:"돌쌓기",children:[{id:"6-3-1",label:"찰쌓기",explanation:`모르타르(시멘트+모래+물)를 사용하여 돌을 쌓는 습식 공법.

▶ 특징
장점:
• 돌 사이 공극을 모르타르로 채움 → 구조적 강도·안정성 우수
• 하중에 대한 지지력 확보
• 외관이 깔끔 (줄눈 처리 가능)
단점:
• 물빠짐 구멍(배수공, Weep Hole) 반드시 설치 필요
  이유: 옹벽 뒤쪽 토압 + 수압이 함께 작용하면 위험
• 보수 시 전체 재시공 필요한 경우 多

▶ 적용
구조적 옹벽, 축대(石築), 교각 기단부

▶ 찰쌓기 vs 메쌓기
찰쌓기: 모르타르 사용, 강도 높음, 구조용
메쌓기: 모르타르 없음, 배수 자연스러움, 소규모 조경

★ 시험 포인트
찰쌓기 = 습식(모르타르 사용). 구조적으로 강함. 배수공 설치 필수`},{id:"6-3-2",label:"메쌓기",explanation:`모르타르 등의 접합용 충전재를 일절 사용하지 않고, 오직 석재(돌) 간의 맞춤 가공과 자중, 그리고 마찰력만으로 쌓아 올리는 건식 돌쌓기 공법.

▶ 특징 및 장단점
• 장점:
  - 돌 사이에 모르타르가 없어 배수가 매우 원활함 -> 배면 흙의 수압에 의한 옹벽 붕괴 압력이 발생하지 않아 산사태 방지용 석축 옹벽 하단에 매우 유리.
• 단점:
  - 돌의 무게 중심과 결합 상태에 의존하므로 높이 쌓는 데 한계가 있으며 숙련 석공이 필요.
• 찰쌓기(Wet Masonry)와 비교: 찰쌓기는 모르타르를 써서 튼튼하게 쌓는 대신 뒷면에 배수 구멍(PVC 파이프 등)을 촘촘히 뚫어야 함.

★ 시험 포인트
메쌓기 = 모르타르 없음 = 자연 배수 원활 = 수압 차단에 최적. 찰쌓기(모르타르 있음)와 1:1 비교.`}]},{id:"6-exam",label:"[시험 포인트]",children:[{id:"6-e1",label:"쌓기: 길이·마구리·영국·화란·미국·불식",explanation:`▶ 핵심 기출: 벽돌 쌓기 방식 비교
• 영국식, 화란식(네덜란드식), 불식, 미국식 쌓기의 줄눈 형상 비교입니다.

Q1. 벽돌쌓기 방식 중 구조적으로 가장 튼튼하여 내력벽에 최적인 영국식 쌓기에서 모서리 부위에 치수 조절용으로 사용하는 벽돌 토막 명칭은? (기출!)
A1. 이오토막 (3/4 토막) 벽돌. (화란식쌓기는 칠오토막-7/8 사용)

Q2. 벽돌 1.0B 쌓기의 벽 두께와 표준형 벽돌 크기는?
A2. 1.0B 벽두께는 190mm, 벽돌 규격은 190 × 90 × 57 mm.

★ 시험 포인트
각 쌓기법(영국식: 마구리+길이 교대, 이오토막 사용 / 화란식: 칠오토막 사용 / 불식: 한 켜 내에 마구리와 길이 혼재)의 특징 비교와 1.0B 두께 수치(190mm)가 핵심입니다.`},{id:"6-e2",label:"블록쌓기 방법",explanation:`▶ 핵심 기출: 블록 쌓기 기준
• 시멘트 블록(Concrete Block) 쌓기의 하중 분포 보강 공법입니다.

Q1. 블록 쌓기 시 블록의 방향(살두께가 다른 상하 배치)은 어떻게 두고 시공하는가? (기출!)
A1. 살두께(Web/Flange)가 두꺼운 쪽이 위로 가도록 거꾸로 쌓음. (이유: 모르타르 부착 면적을 최대로 넓혀 부착력을 극대화하기 위함)

Q2. 블록조 벽체의 횡력 저항을 강화하기 위해 블록 내부 구멍에 철근을 넣고 채우는 구조 보강선은?
A2. 블록 메쉬(Block Mesh) 및 테두리보(Girders).

★ 시험 포인트
살두께가 두꺼운 쪽을 위로 향해 쌓는 이유 쓰기, 블록 메쉬 삽입 목적이 조적조 횡력 보강 문제로 출제됩니다.`},{id:"6-e3",label:"찰쌓기(모르타르) vs 메쌓기(건식)",explanation:`▶ 핵심 기출: 돌 쌓기 공법
• 석축 옹벽 쌓기 시 찰쌓기와 메쌓기 비교입니다.

Q1. 산사태 붕괴 방지용 돌 쌓기에서 접합 모르타르를 쓰지 않고 돌끼리 맞물려 쌓아 배수가 최대로 원활하게 조치하는 공법은? (기출!)
A1. 메쌓기 (건식 돌쌓기 공법). 배면 수압이 원천 차단됨.

Q2. 찰쌓기(Wet Masonry) 공사 시 배면 빗물 수압 누적 옹벽 붕괴를 막기 위해 뒷면에 설치하는 PVC 파이프 배수 구멍의 이격 기준은?
A2. 면적 2m2 이내마다 최소 1개소 이상의 PVC 배수구 구멍(φ50~75mm)을 분산 설치해야 함.

★ 시험 포인트
메쌓기(모르타르 미사용, 자연 배수)와 찰쌓기(모르타르 사용, 인위적 배수구 2m2당 1개 필수)의 배수 메커니즘 차이가 100% 출제됩니다.`}]}]},{id:"7",label:"7. 방수공사",children:[{id:"7-1",label:"아스팔트 방수",explanation:`가열 용융 아스팔트와 아스팔트 루핑(Roofing)을 교대로 여러 겹 붙여 방수층을 형성하는 공법.

▶ 시공 순서 (암기)
① 바탕 청소·건조 확인
② 프라이머(Primer) 도포: 바탕과 방수층의 접착력 향상
③ 아스팔트 가열 용융 (약 200°C)
④ 용융 아스팔트 도포
⑤ 아스팔트 루핑(펠트) 붙이기
⑥ ③~⑤ 반복 (총 3~5겹)
⑦ 마무리 아스팔트 도포
⑧ 보호 모르타르 타설 (30~40mm, 보행 시 필수)

▶ 특징
장점:
• 가장 오래되고 신뢰성이 검증된 공법 (100년 이상 역사)
• 다층 구조로 방수 신뢰성 최우수
• 이음 없이 넓은 면적 시공 가능
단점:
• 고온 가열(200°C) → 화재·악취 위험, 작업 위험성 높음
• 중량 자재로 운반·시공 불편
• 요철 부위·복잡한 형태 시공 어려움

▶ 현대적 대안: 개량 아스팔트 시트 (토치 공법)
SBS·APP 개질 아스팔트를 시트로 제작
가스 토치로 시트 뒷면을 가열하면서 접착
기존 가열 방식보다 안전하고 간편

▶ 적용 부위
지붕 방수 (가장 일반적), 지하 외방수, 욕실 바닥

★ 시험 포인트
아스팔트 방수 = 루핑 다층 구조 = 신뢰성 최우수. 시공 순서 프라이머→아스팔트→루핑 반복`},{id:"7-2",label:"시트 방수",explanation:`합성고무(EPDM) 또는 합성수지(PVC·TPO) 시트를 바탕면에 접착·기계 고정하는 방수 공법.

▶ 시트 종류 비교
• EPDM (에틸렌·프로필렌·다이엔 고무)
  두께: 1.0~2.0mm / 내구성·신축성 우수 / 접합은 전용 접착제
• PVC (폴리염화비닐)
  두께: 1.2~2.0mm / 열 용접으로 이음 가능 / 시공 편리
• TPO (열가소성 폴리올레핀)
  친환경 / 열 용접 / 경량·내구성 우수 — 최신 소재

▶ 시공 방법
① 바탕 청소·기층 확인
② 프라이머 도포 (접착식)
③ 시트 전개 후 접착제 도포
④ 시트 접착 + 롤러로 압착
⑤ 겹침이음부: 100mm 이상 겹침 + 접착제/열 용접

▶ 특징
장점: 균일한 두께, 냄새·화재 없음, 작업 간단
단점: 이음부(Seam) 처리가 방수 품질의 핵심 — 이음 불량이 누수 원인 1위

▶ 아스팔트방수와 비교
아스팔트: 다층·가열·신뢰성 최우수
시트: 단층·냉간·시공 간편

★ 시험 포인트
시트 방수 = 합성 시트 접착. 이음부 처리가 품질의 핵심. EPDM·PVC·TPO 3가지 소재`},{id:"7-3",label:"도막 방수",explanation:`우레탄·아크릴·고무 아스팔트 등 액상 방수재를 바탕면에 도포하여 연속 도막(피막)을 형성하는 공법.

▶ 종류별 특징
• 우레탄 도막방수
  신축성 우수 (파단 신율 300~500%) → 균열에 추종
  내구성·방수성 우수 → 옥상·발코니 주로 사용
  2액형(주제+경화제) 혼합 사용
• 아크릴 도막방수
  수성 계열 → 친환경, VOC 낮음
  건조 빠름 / 실내 화장실·발코니 사용
• 고무 아스팔트 도막
  고무 탄성 + 아스팔트 방수 결합
  자착식 또는 열 접합

▶ 시공 방법
① 바탕 청소·건조
② 프라이머 도포 (부착력 향상)
③ 방수재 도포 1회 (브러시·롤러·뿜칠)
④ 메시(보강 섬유포) 삽입 (취약부 보강)
⑤ 방수재 2~3회 추가 도포 → 총 두께 1.5~3.0mm
⑥ 보호 마감

▶ 장점: 이음매 없음 (Seamless) — 복잡한 형태·곡면도 연속 방수층
단점: 도포 두께 일정하게 유지가 어려움 (숙련 필요)

★ 시험 포인트
도막방수 = 액체 → 도포 → 연속 피막 = 이음 없음이 최대 장점. 우레탄이 옥상 표준`},{id:"7-4",label:"시멘트 액체 방수",explanation:`콘크리트 바탕 표면에 액체 방수제(염화칼슘, 규산소다 등 혼합액)를 물에 타서 바른 뒤, 그 위에 시멘트 풀과 방수 모르타르를 순차적으로 얇게 덧발라 방수 피막층을 형성하는 습식 방수 공법.

▶ 시공 순서
① 바탕 청소 및 흠집 보수
② 방수액 침투 주입 (바탕 흡수)
③ 방수 시멘트 페이스트 도포
④ 방수 모르타르 바름 (두께 약 5~10mm)
-> 위 ②~④ 과정을 2~3회 반복 적층하여 최종 두께 15~20mm 형성.

▶ 장단점 및 적용
• 장점: 가격이 매우 저렴하고, 습기가 있는 바탕면에도 시공 가능.
• 단점: 신축성(탄성)이 없어 구체 콘크리트에 미세 균열 발생 시 방수층도 함께 찢어져 즉시 누수 유발.
• 적용: 상시 물을 사용하는 욕실, 다용도실, 아파트 발코니 바닥 및 지하실 내벽 방수 표준.

★ 시험 포인트
시멘트 액체 방수 = 욕실/화장실용 = 경제적 but 구체 균열 추종성(신축성) 없음이 최대 약점.`},{id:"7-5",label:"규산질 방수",explanation:`규산질(SiO₂) 분말 성분이 콘크리트 공극으로 침투하여 결정화·팽창하면서 공극을 차단하는 침투식 방수 공법.

▶ 반응 원리
물 + 규산질 분말 → 시멘트 내 칼슘과 반응 → C-S-H 겔 생성 → 공극 충전·경화
기존 방수: 콘크리트 표면에 피막 형성 (외부 방수)
규산질 방수: 콘크리트 내부에서 반응 (내부 침투 방수) — 근본적 차이

▶ 특징
장점:
• 자기치유 기능: 균열 발생 시 수분과 반응하여 다시 결정 형성·봉합
• 콘크리트 내부에 방수층 형성 → 외부 충격·마모에 강함
• 독성 없음, 친환경적
• 피막(도막)이 없어 통기성 유지
• 표면 손상되어도 방수 기능 유지
단점:
• 콘크리트에만 적용 가능 (타 재료 불가)
• 반응 효과 발휘에 시간 필요
• 밀실한 콘크리트보다 다공질 콘크리트에 더 효과적

▶ 적용 부위
지하 수조·저수탱크, 지하 내방수, 수처리 시설, 터널 라이닝

▶ 시공 방법
바탕 청소·물 적심 → 규산질 분말 슬러리(물+분말) 도포 2~3회 → 양생 중 물 뿌림(수화 반응 촉진)

★ 시험 포인트
규산질 방수 = 침투식 = 공극 충전. 자기치유 기능이 가장 큰 특징. 수조·저수탱크에 필수`},{id:"7-6",label:"실링 (Sealing) 방수",explanation:`창호 주변, 줄눈, 패널 접합부 등 틈새에 실링재(Sealant, 코킹재)를 충전하여 물·공기·소음 침투를 막는 공법.

▶ 실링재 종류 비교
• 실리콘 (Silicon)
  내수성·내열·내화학성 최강 / 유리·금속·돌에 우수 접착
  단점: 도장 불가 (페인트 접착 안 됨) / 황변 가능
• 폴리우레탄 (Polyurethane, PU)
  신축성·내구성 우수 / 도장 가능
  적용: 외벽 줄눈, PC판넬 접합부
• 변성 실리콘 (Modified Silicon, MS)
  실리콘 장점 + 도장 가능 / 냄새 적음
  현재 외장 줄눈의 주류

▶ 시공 방법 (프라이머 → 실링재)
① 줄눈 청소 (이물질·구오래된 실링 제거)
② 마스킹 테이프 부착 (깔끔한 선 유지)
③ 프라이머 도포 (필요 시 — 접착력 향상)
④ 백업로드(Backup Rod) 삽입 (줄눈 깊이 조정)
⑤ 실링재 충전 (건)
⑥ 주걱으로 면 정리 → 마스킹 제거

▶ 목적: 줄눈·창호 주변 방수·기밀·수밀
아스팔트·도막방수의 보조 공법 역할

★ 시험 포인트
실링 = 코킹. 실리콘(도장불가)·PU(도장가능)·변성실리콘(도장가능). 줄눈·창호 방수 마감의 필수 공법`},{id:"7-exam",label:"[시험 포인트]",children:[{id:"7-e1",label:"방수공법: 아스팔트·시트·도막·액체·규산질·실링",explanation:`▶ 핵심 기출: 방수 공법의 비교 분류
• 아스팔트, 시트, 도막, 액체 방수의 장단점 비교입니다.

Q1. 콘크리트 바탕면에 액상 방수액을 붓이나 롤러로 도포하여 이음매(Joint)가 전혀 없는 일체형 고무 방수막을 만드는 공법은? (기출!)
A1. 도막 방수 공법.

Q2. 욕실 및 발코니에 주로 시공하는 시멘트 액체 방수의 치명적인 물리적 약점은 무엇인가?
A2. 신축성(탄성 연성)이 없어 구체 콘크리트에 미세 균열이 발생하면 방수층도 함께 찢어져 즉시 누수 하자가 유발됨.

★ 시험 포인트
멤브레인(피막) 방수의 3종류(아스팔트, 시트-이음매 취약, 도막-두께불균일) 특징 비교와 시멘트 액체 방수의 약점 쓰기가 출제 빈도 높습니다.`},{id:"7-e2",label:"아스팔트 방수 공법 순서",explanation:`▶ 핵심 기출: 아스팔트 방수 적층 순서
• 8층/10층 적층식 아스팔트 방수막 조립 순서입니다.

Q1. 지붕 8층 아스팔트 방수층 시공 순서를 쓰시오. (기출!)
A1.
1) 바탕정리 (아스팔트 프라이머 도포)
2) 아스팔트 밀착 도포 (1회)
3) 아스팔트 루핑 부착
4) 아스팔트 도포 (2회)
5) 아스팔트 루핑 부착
6) 아스팔트 도포 (3회)
7) 아스팔트 루핑 부착
8) 보호 누름 타설 (모르타르/콘크리트)

★ 시험 포인트
프라이머(하도) → 아스팔트 → 펠트(또는 루핑)의 반복 적층 순서 가로 넣기 문제가 매년 출제됩니다. 순서를 절대 헛갈리지 마세요.`}]}]},{id:"8",label:"8. 미장·타일공사",children:[{id:"8-1",label:"미장공사",children:[{id:"8-1-1",label:"시멘트 모르타르",explanation:`시멘트 + 잔골재(모래) + 물을 혼합한 가장 기본적이고 일반적인 미장 재료.

▶ 배합 비율 (시멘트:모래 중량비)
• 초벌 바름: 1:3 (모래를 더 많이 — 거친 면에 부착)
• 재벌 바름: 1:2~3
• 정벌 바름: 1:1~2 (순수 시멘트풀 가능)

▶ 바름 방법 (3회로 나누어 바름)
① 초벌 (Initial Coat): 바탕면에 전착 — 두껍게 바름 (7~9mm)
② 재벌 (Scratch Coat): 면 고르기 — 중간 두께 (5~7mm)
③ 정벌 (Finish Coat): 최종 마감 — 얇고 매끄럽게 (3~5mm)
→ 각 회 경화 후 다음 바름 원칙 (한 번에 두껍게 바르면 균열 발생)

▶ 기준 두께
• 1회 바름 두께: 7mm 이하
• 총 두께: 25mm 이하 (초과 시 균열·박락 위험)

▶ 특징
장점: 내구성·강도 우수, 실내·외 모두 사용, 저렴
단점: 건조 수축 균열 발생 가능 (수축균열 줄이기 위해 혼화재 사용)

★ 시험 포인트
시멘트 모르타르 = 1회 7mm 이하, 총 25mm 이하. 초벌→재벌→정벌 3회 바름 순서 암기`},{id:"8-1-2",label:"석고 플라스터",explanation:`소석고(반수석고, CaSO₄·0.5H₂O)를 주원료로 혼화재와 물을 섞어 공벽 바탕면에 바르는 수경성 미장 마감재.

▶ 특징 및 물리 성질
• 수경성 재료: 시멘트처럼 물과의 화학 결합 반응으로 경화함 (공기 접촉이 없어도 경화되며, 경화 속도가 매우 빠름).
• 균열 방지: 경화 시 건조 수축이 극히 적어 미장 건조 크랙(균열)이 거의 발생하지 않음.
• 마감성: 건조 후 표면이 대단히 평활하고 백색 마감이 우수하여 실내 벽/천장의 정벌(마감) 바름용으로 최적.
• 약점: 습기와 수분에 매우 취약함 -> 욕실, 수영장, 지하실 등 습한 구역에는 사용 절대 불가.

★ 시험 포인트
석고 플라스터 = 수경성 미장재 = 수축 균열이 적어 평활도 우수 = 물에 약하므로 건조 실내용.`},{id:"8-1-3",label:"테라조",explanation:`백색 포틀랜드 시멘트에 잘게 부순 천연 석재(종석, 주로 대대리석 조각)와 색소를 배합하여 타설한 후, 경화 뒤 그라인더로 표면을 연마하여 대리석 질감을 내는 바닥 미장 공법.

▶ 현장 갈기 시공 순서 (순서 기출!)
① 바탕 청소 및 평탄 작업
② 황동 줄눈대(Brass Joint Bar) 설치 (균열 방지 및 색상 구획용)
③ 테라조 모르타르 타설 및 다짐 양생
④ 초갈기 (거친 숫돌로 종석이 보이도록 갈아냄)
⑤ 구멍 메움 (연마 중 생긴 미세 기포 구멍에 시멘트 풀 문지름)
⑥ 중갈기 및 정갈기 (고운 숫돌로 표면 평활화)
⑦ 물청소 및 왁스 광택 칠 마감.

★ 시험 포인트
테라조 현장 갈기 시공 순서 나열 문제 빈출. 황동 줄눈대 규격(4~5mm 두께, 12mm 높이) 암기.`}]},{id:"8-2",label:"타일공사",children:[{id:"8-2-1",label:"압착붙이기",explanation:`바탕 모르타르 위에 타일을 올리고 나무망치(고무망치)로 두들겨 눌러 붙이는 기본적인 타일 시공법.

▶ 시공 순서
① 바탕면 청소·습윤 처리
② 붙임 모르타르 도포 (두께 10~15mm)
③ 타일을 모르타르 위에 올려놓음
④ 고무망치로 가볍게 두드려 밀착
⑤ 줄눈 작업 (타일 경화 후 줄눈재 충전)

▶ 특징
장점: 시공이 단순하고 빠름, 경제적, 내벽 표준 방법
단점:
• 모르타르 경화 시작 전에 신속히 붙여야 함 (오픈 타임 준수)
• 공기 방울(공동) 발생 가능 → 부착 불량
• 큰 타일(300mm 이상)에는 부착력 부족 → 개량압착 필요

▶ 적합 타일
내벽 소형 타일 (100×100, 200×200mm 이하)

▶ 타일 붙이기 4방법 비교
압착: 바탕에 모르타르 + 타일 눌러 붙임 (기본)
개량압착: 바탕 + 타일 뒷면도 모르타르 (강화)
떠붙이기: 타일 뒷면에 두껍게 → 불균일 바탕
접착: 유기접착제 → 백화 없음·건식

★ 시험 포인트
압착붙이기 = 바탕 모르타르 + 고무망치 타격. 내벽 소형 타일 기본 방법`},{id:"8-2-2",label:"개량압착붙이기",explanation:`기본 압착붙이기에서 타일 뒷면에도 모르타르를 추가로 바르는 개량된 공법.

▶ 압착붙이기와의 차이 (핵심)
압착붙이기: 바탕 모르타르만 도포 → 타일 붙임
개량압착붙이기: 바탕 모르타르 도포 + 타일 뒷면에도 추가 모르타르 → 타일 붙임

▶ 효과
• 접착 면적 증가 → 부착력 강화
• 공기 방울(공동) 발생 최소화 → 공동률 감소
• 타일 뒷면 요철을 모르타르가 채움

▶ 적용
• 외벽 타일 (낙하 방지 필요)
• 대형 타일 (300mm 이상)
• 바닥 타일 (보행 하중 받는 곳)
• 습기·동결융해 우려 있는 외부

▶ 공동률 기준 (한국 건축공사 표준시방서)
실내: 공동률 20% 이하
외벽·바닥: 공동률 5% 이하 → 외벽은 개량압착이 사실상 필수

★ 시험 포인트
개량압착 = 압착 + 타일 뒷면 모르타르 추가. 외벽·대형타일에 필수. 공동률 기준 외벽 5% 이하`},{id:"8-2-3",label:"떠붙이기",explanation:`타일 뒷면에 부착용 시멘트 모르타르를 적당량(두께 12~15mm) 얹은 후, 손가락으로 타일을 바탕 벽면에 강하게 눌러 비비면서 줄눈 줄을 맞춰 부착하는 벽체 타일 시공법.

▶ 시공적 특징
• 두껍게 바름: 붙임 모르타르 두께가 두꺼워 바탕면의 평활도(요철)가 불량하더라도 타일 표면 수평 조절이 가능.
• 시공 속도가 느림: 타일 한 장 한 장 손으로 모르타르를 얹어가며 시공하므로 공기가 길고 숙련공이 필수.
• 충전 불량 위험: 타일 뒷면 중앙부에 모르타르가 가득 차지 않으면 백화 현상이나 겨울철 동파로 인한 탈락 위험.

★ 시험 포인트
떠붙이기 = 벽체 타일 부착 표준 = 바탕면 평탄 보완 가능 = 뒷면에 직접 모르타르 얹어 부착.`},{id:"8-2-4",label:"접착붙이기",explanation:`바탕 벽면에 타일 전용 유기질 접착제(에폭시계, 아크릴계 등)를 빗주걱으로 균일하게 도포한 후, 타일을 눌러 즉시 부착하는 공법.

▶ 시공적 특징
• 건식 부착: 모르타르 물 배합이 없어 현장 시공이 대단히 신속하고 깔끔함.
• 평탄 바탕 필수: 접착제 도포 두께가 2~3mm로 매우 얇기 때문에 바탕면(석고보드, 건식 벽체 등)이 완전 평탄해야 시공 가능.
• 물 사용 구역 지양: 수분에 노출되면 유기질 접착 성분이 연화되므로 화장실 바닥 등 상시 침수 구역에는 적용 불가 (건조 실내 인테리어 마감용).

★ 시험 포인트
접착붙이기 = 접착제 사용 = 석고보드 등 건식 바탕 전용 = 매우 얇은 접착 두께.`}]},{id:"8-exam",label:"[시험 포인트]",children:[{id:"8-e1",label:"미장: 시멘트모르타르·석고플라스터·테라조",explanation:`▶ 핵심 기출: 미장 재료의 경화 특성
• 기경성(공기 중 건조)과 수경성(물과 반응) 미장재 분류입니다.

Q1. 석고 플라스터 미장재의 경화 방식 분류와 특징을 기술하시오. (기출!)
A1. 수경성 미장재. 물과의 화학 수화 반응으로 경화되어 굳으며, 건조 수축이 거의 없어 미장 후 균열(Crack)이 발생하지 않는 평활 마감이 가능함. (단, 습기에 극도로 취약함)

Q2. 인조석 테라조 바닥 갈기 시공 시 황동 줄눈대를 매립 설치하는 주요 목적 3가지를 쓰시오.
A2.
1) 대면적 타설 시 건조 수축 균열(Crack) 분산 방지.
2) 마감 시 종석의 색상 구획 및 단일 면적 분할 조정.
3) 파손 시 부분 보수의 용이성 확보.

★ 시험 포인트
수경성(시멘트모르타르, 석고플라스터) vs 기경성(진흙, 여회반죽, 회반죽-탄산가스 경화) 재료 분류와 황동줄눈대 규격(두께 4~5mm, 높이 12mm) 기출.`},{id:"8-e2",label:"타일: 압착·개량압착·떠붙이기·접착",explanation:`▶ 핵심 기출: 타일 붙임 공법 비교
• 벽체 및 바닥 타일 붙임 방식의 오픈타임 규정입니다.

Q1. 벽 바탕면에 붙임 모르타르를 평탄히 바른 후, 타일 뒷면에 직접 모르타르를 얹어 눌러 비벼 붙이며 시공하는 공법으로 바탕 평탄 보정이 가능한 방식은? (기출!)
A1. 떠붙이기 공법.

Q2. 바탕면에 모르타르를 바르고 타일을 압착할 때, 모르타르 수분이 마르기 전에 붙여야 하는 허용 대기 시간의 명칭은?
A2. 오픈 타임 (Open Time). (보통 20~30분 이내 타일 부착 완료 필수)

★ 시험 포인트
떠붙이기(숙련 필요, 바탕요철 보정), 압착붙이기(바탕평탄 필요, 오픈타임 준수), 개량압착(바탕+타일 양면 모르타르)의 공법 차이가 단골 출제됩니다.`}]}]},{id:"9",label:"9. 창호·유리공사",children:[{id:"9-1",label:"창호공사",children:[{id:"9-1-1",label:"알루미늄창호",explanation:`알루미늄 합금(6063-T5 등)을 압출 성형하여 제작한 현재 가장 많이 사용되는 창호.

▶ 특징
장점:
• 경량: 철의 1/3 수준의 무게 → 설치 용이
• 내부식성 탁월: 산화 피막(알루마이트) 자체 보호 → 녹 없음
• 기밀성·수밀성 우수 (정밀 압출 가공)
• 다양한 색상·표면 처리 가능 (아노다이징, 분체도장)
• 반복 개폐에 내구성 강함
단점:
• 열전도율 높음 (약 160 W/m·K) → 프레임 통해 열이 새어나감 (열교)
• 결로 발생 취약 (특히 알루미늄 표면)

▶ 열교(Cold Bridge) 문제와 해결
알루미늄 프레임이 단열재를 관통하면 열 전달 경로 형성 = 열교
해결: 단열바(Thermal Break) 삽입 — 알루미늄 프레임 중간에 폴리아미드 수지 절연체 삽입
→ 단열 성능 크게 향상

▶ 프레임 두께 종류
46~60~70mm 시리즈 (두꺼울수록 단열·기밀 성능 향상)

★ 시험 포인트
알루미늄 창호 = 경량·내식성 최강. 열전도 높은 것이 단점. 단열바로 보완. 현재 국내 주류 창호`},{id:"9-1-2",label:"PVC창호",explanation:`합성수지인 폴리염화비닐(PVC)을 가열 압출 성형하여 제작하는 창문틀 및 창호 부재.

▶ 물리적 장단점
• 장점:
  - 금속에 비해 열전도율이 극도로 낮음 -> 단열성 및 결로방지 성능이 완벽하여 주거용 아파트 발코니 외부 창호 표준.
  - 알루미늄보다 기밀성이 뛰어나 방음 및 방습 성능 우수.
• 단점:
  - 플라스틱 특성상 강성(구조 강도)이 약함 -> 대형 창호 시풍압에 견디도록 프레임 내부 중공부에 'ㄷ자 모양 보강 스틸(강재) 심재'를 필히 내장해야 함.

★ 시험 포인트
PVC창호 = 단열/결로방지 최우수 = 약한 강성 보강용 철물 삽입 필수.`},{id:"9-1-3",label:"목재창호",explanation:`천연 원목(소나무, 참나무 등) 또는 집성재를 가공 조립하여 제작하는 전통 실내용 창호.

▶ 특징 및 재료 한계
• 가공 및 조립이 자유롭고, 원목 고유의 나뭇결과 향이 있어 고급스럽고 안락한 미관 구현.
• 습도 민감성: 목재 특성상 기후 건습에 따라 수축·팽창하여 뒤틀림, 갈라짐, 문틀 변형이 생기기 쉬움 -> 문 틈새바람 및 개폐 불량 하자 발생.
• 대책: 함수율을 반드시 섬유포화점 이하(가구/내장재는 10~15% 이하)로 철저히 건조한 목재를 선별 가공해야 함.
• 현재는 아파트 실내 방문이나 한옥 창호 마감으로 한정 사용.

★ 시험 포인트
목재창호의 수축변형 예방용 함수율 관리(15% 이하) 및 실내 문 용도 확인.`},{id:"9-1-4",label:"스틸창호",explanation:`철강 부재를 냉간/열간 압연 성형하여 용접 조립 제작하는 금속 창호. 방화문 프레임이 대표적.

▶ 특징 및 적용
• 강성이 금속 창호 중 가장 높음: 뒤틀림이나 휨 저항이 커서 대형 창호, 기계실 문, 보일러실 방화문에 최적.
• 방화 성능: 화재 시 불꽃 차단력이 확실함 -> 건축법 상 방화문(갑종/을종 방화문)의 주 프레임과 문짝으로 사용.
• 약점: 비중이 무거워 개폐 시 힘이 많이 들고, 수분에 노출 시 부식(녹)되므로 반드시 방청 프라이머(광명단 등)를 도장하여 마감. 알루미늄에 비해 가격은 저렴.

★ 시험 포인트
스틸창호 = 방화구획 방화용 = 강도 최강 = 녹방지 방청도장 필수.`}]},{id:"9-2",label:"유리공사",children:[{id:"9-2-1",label:"판유리",explanation:`원료를 고온 용융시켜 평탄한 판형으로 롤링 성형한 가장 베이직하고 일반적인 유리.

▶ 종류 및 성질
• 두께에 따라 단판유리(2mm, 3mm, 5mm 등)로 구분되며, 창문에 한 겹으로 끼우는 기초 마감재.
• 맑은 판유리와 서리 판유리(표면 조면 처리로 불투명화) 등이 있음.
• 약점: 깨질 때 날카롭고 큰 쐐기 모양의破片(파편)으로 부서져 사람에게 꽂히는 등 2차 상해 위험이 큼 (안전유리 기준 불합격).
• 풍하중에 약해 고층 건물 외벽에 단독 스팬으로 절대 시공 금지.

★ 시험 포인트
판유리 = 2차 상해 위험이 높은 취성 유리. 고층 외벽이나 안전 구역 단독 사용 금지.`},{id:"9-2-2",label:"복층유리",explanation:`2장 이상의 유리 사이에 건조 공기층 또는 아르곤(Ar) 가스를 밀봉한 단열 유리.
IGU (Insulated Glass Unit)라고도 함.

▶ 구조 (단면)
[외부 유리] - [간봉(Spacer) + 건조제(Silica Gel)] - [공기층/아르곤층] - [내부 유리]

▶ 단열 원리
공기 또는 아르곤 층이 열 전도를 차단 (열전도율이 낮음)
• 공기층 두께: 6~16mm (두꺼울수록 단열↑, 단 12~16mm에서 최적)
• 아르곤 가스: 공기보다 열전도율 30% 낮음 → 단열 성능 향상

▶ 특징
장점:
• 단열성 획기적 향상 → 냉난방 에너지 절약
• 결로 현상 대폭 감소 (내부 유리 온도 상승)
• 방음성 향상 (이중 유리층)
단점:
• 파손 시 한쪽 유리 교체 어려움 (밀봉 손상)
• 일반 유리보다 무겁고 비쌈
• 간봉 부위 결로 발생 가능 (품질 낮은 제품)

▶ 로이(Low-E) 유리와 조합
복층유리 + Low-E 코팅 = 에너지 최우수 창호
여름: 복층(단열) + Low-E(태양열 차단) → 냉방 부하 대폭 감소
겨울: 복층(단열) + Low-E(실내 열 반사) → 난방 손실 최소화

▶ 열관류율 (U값) 비교
단층 유리: 약 5.8 W/m²K
복층유리: 약 2.8 W/m²K
복층+Low-E+아르곤: 약 1.1~1.4 W/m²K

★ 시험 포인트
복층유리 = 2장 + 공기층. 단열·방음·결로 방지. 아르곤 가스 = 단열 향상. Low-E와 조합이 최선`},{id:"9-2-3",label:"강화유리",explanation:`판유리를 약 650°C로 가열 후 양면에 강한 냉풍을 불어 급속 냉각하여 강도를 높인 안전유리.

▶ 강도 원리
급속 냉각 → 표면 압축 응력 / 내부 인장 응력 형성 → 균형 유지
외부 하중이 표면 압축 응력을 극복해야 파괴 → 강도 3~5배 향상

▶ 특징
장점:
• 강도: 일반 유리의 3~5배 (휨·충격 강도)
• 파손 형태: 미세 입자(쌀알 크기)로 부서짐 → 날카로운 파편 없음 → 안전
단점:
• 제작 후 추가 절단·가공 불가 (내부 응력 파괴됨)
  → 치수 지정은 제작 전에 확정 필수

▶ 적용 부위
자동문, 욕실 파티션, 강화유리 바닥·계단, 스포츠 시설 유리

▶ 안전유리 비교
강화유리: 파쇄 시 미세 알갱이 (파편 위험 낮음)
접합유리: 파쇄 시 필름에 붙어 비산 안 함 (방탄·방범)

★ 시험 포인트
강화유리 = 650°C 가열 후 급냉 → 강도 3~5배. 파손 시 미세 알갱이 = 안전. 추가 가공 불가`},{id:"9-2-4",label:"접합유리",explanation:`최소 2장 이상의 판유리 사이에 고신축성 PVB(Polyvinyl Butyral) 합성수지 투명 필름을 끼워 압착 접합한 고기능 안전유리.

▶ 물리적 장점 및 적용 (안전성)
• 비산 방지 (가장 중요): 충격을 받아 유리가 깨지더라도 중간의 PVB 필름에 파편 조각들이 강하게 달라붙어 사방으로 튀거나 주저앉지 않음 -> 사람의 낙하 및 상해 예방.
• 방범성: 유리가 파괴되어도 필름이 질기게 버텨 침입이 어려움.
• 주로 자동차 앞유리, 난간 난간유리, 대형 쇼윈도 하단, 빌딩 천장 스카이라이트(채광창) 등에 안전 의무 적용.

★ 시험 포인트
접합유리 = 2장 판유리 + 중간 PVB 필름 = 파편 비산 방지(안전유리) = 자동차/천장 채광용.`},{id:"9-2-5",label:"로이유리",explanation:`유리 표면에 금속 또는 금속 산화물(은·인듐주석산화물)을 얇게 진공 증착한 유리.

▶ Low-E의 의미
Low Emissivity (낮은 열방사율)
• 일반 유리: 방사율 0.84 → 열을 잘 방사(내보냄)
• Low-E 유리: 방사율 0.04~0.1 → 열을 거의 방사 안 함

▶ 열 성능 원리
가시광선(빛): 통과시킴 (투명성 유지)
적외선(열): 반사시킴 (열 이동 차단)

▶ 코팅 위치 (복층유리와 함께 사용 시)
• 하드코팅(Hard Coat): 유리 표면에 직접 코팅 — 내구적
• 소프트코팅(Soft Coat): 공기층 면에 코팅 — 성능 우수하나 공기 접촉 금지
  → 복층유리 내부(공기층 측)에 위치

▶ 에너지 절약 효과
• 여름: 실외 열복사(태양열) 차단 → 냉방 부하 30~50% 감소
• 겨울: 실내 열복사(난방열) 반사 → 난방 손실 30~40% 감소

▶ 복층+Low-E+아르곤 조합
현재 에너지 절약 기준을 만족하는 고성능 창호의 표준 구성

★ 시험 포인트
Low-E = 낮은 열방사율 = 열(적외선) 반사. 빛은 통과. 복층유리와 조합이 기본. 에너지 절약 30~50%`}]},{id:"9-exam",label:"[시험 포인트]",children:[{id:"9-e1",label:"창호: 알루미늄·PVC·목재·스틸",explanation:`▶ 핵심 기출: 창호 금속물 및 특징
• 알루미늄, PVC, 스틸 등 재질별 성능 비교입니다.

Q1. 알루미늄 창호를 철골 콘크리트 옹벽 부위에 고정할 때 이종 재료 간 직접 접촉을 차단하는 도막 절연 처리를 해야 하는 근본 이유는? (기출!)
A1. 알루미늄은 시멘트 모르타르의 강한 알칼리 성분과 접촉하면 급격히 부식 침식되므로 보호용 징크로메이트칠이나 역청 도장 절연이 필수적임.

Q2. 창틀 프레임 중 내화 방화 구획용 방화문짝에 의무 적용하는 강성이 가장 높은 금속 창호는?
A2. 스틸 창호 (철제 창호).

★ 시험 포인트
알루미늄의 알칼리 취약 특성에 따른 모르타르 접촉 차단 절연 조치, PVC창호의 단열 장점과 강성 심재 보강 대책이 시험의 뼈대입니다.`},{id:"9-e2",label:"유리: 판·복층·강화·접합·로이",explanation:`▶ 핵심 기출: 특수 고기능 유리
• 복층, 접합, 강화, 로이유리의 열적/물리적 특징입니다.

Q1. 최소 2장 이상의 평판유리 사이에 은(Ag) 코팅 단열 금속막을 도막 코팅하여 방사율을 낮추고 단열 성능을 최대 극대화한 에너지 절약 유리는? (기출!)
A1. 로이 유리 (Low-E Glass).

Q2. 접합유리(Laminated Glass)가 고층이나 자동차 앞유리 등 안전유리로 분류되는 결정적 파손 강점은 무엇인가?
A2. 유리 파손 시 파편이 사방으로 튀지 않고 중간의 신축성 PVB 수지 필름에 그대로 밀착 부착되어 파편 비산 상해를 방지함.

★ 시험 포인트
로이유리의 반사/단열 원리, 접합유리 중간막 필름명(PVB 필름) 및 강화유리의 급냉 열처리 생산 방식 차이점이 핵심 문제입니다.`}]}]},{id:"10",label:"10. 도장공사",children:[{id:"10-1",label:"바탕처리",explanation:`도료를 바르기 전 표면을 도장에 적합한 상태로 준비하는 작업. 도장 품질을 결정하는 가장 중요한 단계.

▶ 바탕처리 순서
① 표면 청소 (먼지·유분·이물질 제거)
② 결함부 보수 (퍼티/빠데 작업으로 구멍 메꿈)
③ 사포질 (연마 작업으로 접착력 향상)
④ 하도(프라이머) 도포

▶ 재질별 주의사항
• 콘크리트: 함수율 10% 이하, pH 9 이하가 될 때까지 충분히 건조
• 목부: 사포질 후 옹이 땜질 (송진 차단을 위해 셀락칠 필수)
• 철부: 녹 제거 후 즉시 방청도료(광명단 등) 칠하기

★ 시험 포인트
콘크리트 바탕처리는 건조(함수율 10% 이하, pH 9 이하)가 핵심 수치.`},{id:"10-2",label:"도료 종류",children:[{id:"10-2-1",label:"유성페인트",explanation:`안료를 보일유(건성유)에 섞어 만든 전통적인 유성 페인트.

▶ 특징
• 도막이 두껍고 질겨 내후성이 뛰어남
• 건조 시간이 느림 (보통 24시간 이상)
• 실외 목재 및 철재 보호용 마감에 적합
• 알칼리성에 극도로 취약 — 콘크리트 및 몰탈면 절대 사용 금지 (비누화 반응으로 녹아내림)

★ 시험 포인트
유성페인트 = 콘크리트면 절대 칠 금지 (알칼리 취약). 목재·철재 전용.`},{id:"10-2-2",label:"수성페인트",explanation:`안료를 물과 합성수지 에멀션에 혼합하여 만든 친환경 수성 페인트.

▶ 특징
• 물을 희석제로 사용하여 냄새가 적고 건조가 빠름 (1~2시간)
• 콘크리트, 몰탈, 석고보드 등 실내 벽체 마감의 표준
• 알칼리성에 강함 → 시멘트면에 안전하게 사용 가능
• 수분이 있어 철재에 칠하면 녹슬 우려가 있어 직접 도포 피함

★ 시험 포인트
수성페인트 = 시멘트/콘크리트 벽면용. 냄새 적음. 철재 사용 곤란.`},{id:"10-2-3",label:"에폭시",explanation:`주제와 경화제를 혼합하여 강력한 화학 결합으로 경화되는 도료.

▶ 특징
• 내마모성·내화학성·접착력 모두 극도로 강함
• 방수 및 방진(먼지 방지) 효과 우수
• 주로 주차장 바닥, 공장 바닥, 실험실 바닥용 표준
• 황변 현상: 자외선(햇빛)에 노출되면 색이 누렇게 변함 → 야외 사용 비추천

★ 시험 포인트
에폭시 = 주차장 바닥 마감재 = 내마모성 최강. 자외선 노출 시 누렇게 변함(황변).`},{id:"10-2-4",label:"우레탄",explanation:`우레탄 결합을 이용해 신축성과 탄성이 뛰어난 고무 성질의 피막을 만드는 도료.

▶ 특징
• 탄성 및 신축성(파단 신율)이 우수하여 건물 거동·크랙에 강함
• 자외선에 강하고 방수 성능 탁월
• 빌딩 옥상 방수 도장의 표준 (녹색 또는 회색 마감)
• 수분이 있는 상태에서 시공 시 기포 발생 위험

★ 시험 포인트
우레탄 = 옥상 방수 표준 도료 = 신축성·탄성 탁월.`},{id:"10-2-5",label:"락카",explanation:`니트로셀룰로오스 섬유소와 휘발성 용제를 섞어 만든 속건성 도료.

▶ 특징
• 건조가 극도로 빠름 (수분 이내)
• 투명 락카: 목재 나뭇결을 살리는 고급 실내 목공예·가구 마감
• 피막이 얇고 부드러움
• 열과 습기에 취약하고 가연성이 높아 화재 주의

★ 시험 포인트
락카 = 고급 목재 가구 마감 = 극도로 빠른 건조 시간.`}]},{id:"10-exam",label:"[시험 포인트]",children:[{id:"10-e1",label:"도료: 유성·수성·에폭시·우레탄·락카",explanation:`▶ 핵심 기출: 도료 종류 및 알칼리 특성
• 유성, 수성, 에폭시, 우레탄 도료의 화학 저항성입니다.

Q1. 콘크리트, 모르타르, 회반죽 벽면 등에 유성페인트를 직접 도포하여 도장하면 즉시 박리 하자가 발생하는 원인을 서술하시오. (기출!)
A1. 유성페인트의 건성유 성분이 시멘트계의 강한 알칼리 성분과 화학 비누화(Saponification) 반응을 일으켜 도막을 녹여 부풀게 하기 때문.

Q2. 자외선에 장기 노출 시 누렇게 색이 변하는 황변(Yellowing) 하자가 발생하여 지하 주차장 바닥 마감용으로 한정 적용하는 도료는?
A2. 에폭시(Epoxy) 도료.

★ 시험 포인트
유성페인트의 시멘트 도장 불가 사유(알칼리 취약), 에폭시의 자외선 황변 특성 및 옥상 방수용 고탄성 우레탄 도료의 비교가 빈출 서술형 기출입니다.`},{id:"10-e2",label:"바탕처리 순서",explanation:`▶ 핵심 기출: 도장 바탕처리 공정
• 피도면의 바탕 준비 및 도장 뿜칠 순서입니다.

Q1. 도장공사 시 각 칠막(초벌, 재벌, 정벌)의 도포 여부를 현장 감독원이 수월하게 육안으로 판별 구분하기 위해 취하는 표준 시공 조치는? (기출!)
A1. 초벌, 재벌, 정벌 등 바르는 단계마다 칠 도료의 색상을 약간씩 다르게 배합하여 도포한다. (초벌은 엷게, 점차 정벌 색상에 맞춰 전개)

Q2. 도장용 에어 스프레이건의 직각 및 운행 거리 기준값은?
A2. 피도면과 30cm 거리를 유지하며 수평으로 연속 운행.

★ 시험 포인트
칠 횟수 판별을 위한 색상 변경 시공 조치, 그리고 도막 결함 중 주름(두껍게 발랐을 때 표면만 건조) 및 리프팅(재벌 용제가 초벌 칠막 용해) 정의 암기.`}]}]},{id:"11",label:"11. 수장공사",children:[{id:"11-1",label:"바닥",children:[{id:"11-1-1",label:"비닐타일",explanation:`PVC(폴리염화비닐) 수지를 주원료로 가소제와 안료를 섞어 프레스로 성형한 바닥 타일.

▶ 특징
• 시공이 간편하고 단가가 저렴하여 널리 사용
• 내수성·내마모성이 우수하여 청소가 용이
• 주로 상업용 빌딩 사무실, 상가 바닥의 기본 사양 (데코타일)
• 온도 변화에 따라 이음매 수축 발생 가능

★ 시험 포인트
비닐타일 = 데코타일 = 상업 빌딩 바닥 표준 = 가성비·내마모성 우수.`},{id:"11-1-2",label:"카펫",explanation:`양모 또는 아크릴 섬유를 직조하거나 파일(Pile)을 만들어 시트 형태로 깔아주는 바닥재.

▶ 특징
• 흡음성·보온성이 최우수하여 보행감이 좋고 안락함
• 실내 보행 소음 방지 효과 탁월
• 주로 호텔 로비, 오피스 임원실, 극장 바닥에 사용
• 습기에 취약하여 곰팡이 우려가 있고 오염 세척이 어려움

★ 시험 포인트
카펫 = 보온 및 소음 흡수 최우수. 오염에 약함.`},{id:"11-1-3",label:"목재마루 (원목·강마루·강화마루)",explanation:`천연 목재를 가공하거나 목재 베니어 위에 데코 필름을 조합해 만든 친환경 바닥 마감재.

▶ 종류별 특징
• 원목마루: 두꺼운 천연 원목(2mm 이상) 사용. 보행감 좋으나 뒤틀림 위험 높고 고가.
• 강마루: 합판 위에 고강도 HPM 필름 부착. 본드 접착식 시공으로 열전도(온돌)에 우수.
• 강화마루: HDF(고밀도 섬유판) 위에 필름 부착. 클릭식 비접착 조립으로 수축팽창으로 인한 이격 발생 가능.

★ 시험 포인트
강마루는 접착식(열전도 우수), 강화마루는 조립식(수축팽창 우려).`}]},{id:"11-2",label:"천장",children:[{id:"11-2-1",label:"석고보드",explanation:`소석고와 섬유 등을 혼합해 판형태로 성형하고 종이로 양면을 감싼 천장 및 벽체 마감재.

▶ 특징
• 내화성·단열성 우수 (방화 보드로 널리 사용)
• 칼로 쉽게 잘려 시공성 및 가공성 탁월
• 수분에 취약해 습기가 많은 곳(화장실 등)은 방수석고보드 필수 사용
• 도장 또는 벽지 부착 전 퍼티 처리가 필수적

★ 시험 포인트
석고보드 = 방화·단열 우수 = 시공 용이. 물에 취약한 것이 약점.`},{id:"11-2-2",label:"텍스",explanation:`암면(Rock Wool) 또는 광물 섬유로 만든 흡음 천장판.

▶ 특징
• 흡음성·단열성 우수
• T-BAR(금속 격자)에 얹는 방식 — 교체·보수 쉬움
• 사무실·공장 천장 마감재의 표준
• 습기에 취약하여 습도 높을 때 처짐 현상 발생 우려

★ 시험 포인트
텍스 = 사무실 천장 표준 = 흡음·단열 우수.`}]},{id:"11-3",label:"벽",children:[{id:"11-3-1",label:"벽지",explanation:`벽체 바탕면 위에 접착 풀을 이용해 시트 형태로 도배하는 마감재.

▶ 특징
• 종이벽지: 저렴하고 친환경적이며 통기성 좋으나 내구성 낮음
• 비닐실크벽지: 표면 PVC 코팅 처리로 내수성 우수, 오염 시 물걸레질 가능하나 통기성 낮음
• 초배(바탕 한지 접착) 작업 후 정배(최종 벽지 부착)로 시공

★ 시험 포인트
비닐실크벽지 = PVC 코팅 = 물걸레질 가능.`},{id:"11-3-2",label:"합판",explanation:`얇은 목재 단판(Veneer)을 나뭇결 방향이 서로 직교하도록 홀수 겹으로 접착한 판재.

▶ 특징
• 방향에 따른 수축·팽창 및 변형 결점 보완 (직교 구조)
• 옹이·갈라짐 등 원목 결점 제거
• 인테리어 가설 틀재, 수납장, 가구 구조틀로 널리 사용

★ 시험 포인트
합판 = 나뭇결 방향을 직교로 부착 = 수축·팽창 보완 및 강도 균일화.`}]},{id:"11-exam",label:"[시험 포인트]",children:[{id:"11-e1",label:"액서스플로어와 바닥재",explanation:`▶ 핵심 기출: 액서스플로어와 바닥 마감재
• 인텔리전트 빌딩 및 컴퓨터실에 쓰이는 이중 바닥 시스템과 바닥재 성질입니다.

Q1. 인텔리전트 빌딩이나 전자계산실 등 배선, 배관이 복잡한 공간의 바닥에 설치하며, 마감판을 필요에 따라 들어낼 수 있도록 하여 기계/전기설비 설치를 용이하게 하는 이중 바닥 구조는? (기출!)
A1. 액서스플로어 (Access Floor / 레이즈드 플로어, 프리액서스 플로어).

Q2. 리그노이드, 리놀륨, 아스팔트타일, 리신바름 중 벽체용 마감재로서 건물의 바닥 마무리재로 부적합한 것은?
A2. 리신바름. (리신바름은 외벽 벽체 마감용 분무칠 도료이므로 바닥에는 부적합함).

★ 시험 포인트
액서스플로어의 정식 명칭과 정의 쓰기 서술형 문제, 그리고 바닥재 종류 중 바닥 시공이 불가능한 자재(리신바름) 구별 능력을 갖춰 두어야 합니다.`},{id:"11-e2",label:"수장용 금속철물",explanation:`▶ 핵심 기출: 장식 및 수장공사 금속철물
• 벽, 천장, 바탕용 금속 철물의 명칭과 용도 매칭입니다.

Q1. 얇은 강판(두께 0.4~0.8mm)에 동일한 간격으로 구멍 자름금을 내어서 좌우로 당겨서 늘린 그물망 모양의 철망으로, 천장이나 벽 등의 미장바탕에 사용하는 철물은? (기출!)
A1. 메탈 라스 (Metal Lath / Expanded Metal).

Q2. 판두께 1.2mm 이하의 얇은 판에 다양한 형태의 장식 구멍을 뚫어 라디에이터 그릴이나 수장 및 장식용으로 사용하는 금속판은?
A2. 펀칭 메탈 (Punching Metal).

Q3. 기둥, 벽 등의 모서리 모퉁이에 설치하여 미장 바름의 끝부분을 보호하고 모서리 각을 곧게 세우는 철물은?
A3. 코너비드 (Corner Bead).

Q4. 콘크리트 바닥 슬래브에 천장 달대(지지대)를 매달기 위해 콘크리트 타설 전 미리 묻어두는 고정 철물은?
A4. 인서트 (Insert).

★ 시험 포인트
수장 철물 4대장인 메탈라스(늘려만든 철망), 펀칭메탈(구멍 뚫은 판), 코너비드(모서리 보호), 인서트(매달기용 고정쇠)의 정의와 쓰기가 빈출됩니다.`},{id:"11-e3",label:"단열재 종류 및 시공",explanation:`▶ 핵심 기출: 단열재 분류와 시공 기준
• 유기질/무기질 단열재 구별 및 단열재 부착 시 주의사항입니다.

Q1. 다음 단열재료 중 유기질 단열재와 무기질 단열재를 구별하여 쓰시오. (기출!)
[셀룰로오스 섬유판, 세라믹 섬유, 펄라이트 판, ALC 패널]
A1.
• 유기질 단열재: 셀룰로오스 섬유판. (목질 섬유 원료로 유기질에 해당)
• 무기질 단열재: 세라믹 섬유, 펄라이트 판, ALC 패널.

Q2. 벽체 단열 시공법 중 단열 성능이 가장 우수하며 결로 예방에 최적인 설치 위치는?
A2. 외벽 외단열 (외벽 바깥쪽에 단열재를 끊김 없이 연속 설치하는 공법. 내벽 내단열은 결로에 가장 취약함).

★ 시험 포인트
셀룰로오스 섬유판의 유기질 분류, 무기질 단열재 종류(세라믹섬유, 암면, 유리면, ALC), 그리고 결로 방지를 위한 단열성능 순서(외단열 > 중공단열 > 내단열)를 숙지하세요.`}]}]},{id:"12",label:"12. 지붕·커튼월공사",children:[{id:"12-1",label:"지붕공사",children:[{id:"12-1-1",label:"기와지붕",explanation:`점토 기와 또는 시멘트 기와를 서까래·기와잇기 위에 덮어 방수하는 전통적 지붕 공법.

▶ 특징
• 내구성·내화성 우수
• 무거워 구조체 하중 부담이 큼 (자중 보강 필수)
• 경사 지붕에만 사용 가능
• 접합 못 고정 불량 시 태풍 등으로 인한 탈락 위험

★ 시험 포인트
기와 = 내구성 우수 but 자중이 무거움. 기와고정 철저.`},{id:"12-1-2",label:"금속지붕",explanation:`아연도금강판·스테인리스·알루미늄·동판 등 금속 판재로 마감하는 지붕 공법.

▶ 특징
• 경량 — 구조체 하중 부담 적음 (초경량 지붕 구현 가능)
• 방수 성능 우수 및 수밀성 탁월
• 평지붕·경사지붕 모두 가능하며 복잡한 형상 가공성 우수
• 단열 성능이 부족하여 하부 단열재와 거멀접기 접합 품질이 핵심

★ 시험 포인트
금속지붕 = 가볍고 방수 성능 우수 = 세련된 입면 기하학 적용 유리.`},{id:"12-1-3",label:"아스팔트싱글",explanation:`유리섬유(Glass Fiber) 매트에 아스팔트를 코팅하고 색 자갈(Granule)을 살포하여 만든 경사 지붕재.

▶ 특징
• 경량이며 시공이 매우 간편함 (전용 못과 루핑 시트로 접착)
• 색상과 모양이 다양해 미관 우수
• 가격이 저렴해 빌라 및 단독주택 경사 지붕 표준 마감
• 강풍 시 들뜨거나 찢어지기 쉬움

★ 시험 포인트
아스팔트싱글 = 유리섬유+아스팔트 = 저렴·경량·셀프 시공 용이.`}]},{id:"12-2",label:"커튼월공사",children:[{id:"12-2-1",label:"멀리언방식",explanation:`수직 멀리언(Mullion) 부재를 먼저 건물 슬래브에 고정하고, 그 사이에 수평바와 유리를 조합해 설치하는 커튼월.

▶ 특징
• 외관상 수직 프레임 선이 강조되어 연직성 표현
• 멀리언이 주로 풍하중과 구조 자중을 지지하므로 강성 설계 필요
• 현장 조립 위주로 조인트 방수 및 층간 변위 대응이 관건

★ 시험 포인트
멀리언방식 = 수직 선 강조형 커튼월. 프레임이 주구조체 역할.`},{id:"12-2-2",label:"스팬드럴방식",explanation:`층과 층 사이 수평 패널(Spandrel) 구간을 구조 기준으로 하여 수평 프레임을 부각시키는 커튼월.

▶ 특징
• 수평선이 강조되는 안정감 있는 외관
• 각 층 슬래브에서 직접 수평 프레임을 지지하므로 구조 안정성 우수
• 층간 방화구획(스팬드럴 최소 90cm 이상 유지)과 단열 차단 배수가 유리

★ 시험 포인트
스팬드럴방식 = 수평 프레임 강조형. 방화구획 및 누수 배수 유리.`}]},{id:"12-exam",label:"[시험 포인트]",children:[{id:"12-e1",label:"지붕: 기와·금속·아스팔트싱글",explanation:`▶ 핵심 기출: 지붕 재료 및 물매 기준
• 한식기와 전문 명칭 및 금속 지붕 신축 거물접기입니다.

Q1. 한식기와 잇기 작업 시 처마 끝에 막새 대신 회반죽과 진흙을 뭉쳐 동그랗게 발라 마감하는 흙의 명칭은? (기출!)
A1. 아귀토. (숫기와 아래에 뭉쳐 바르는 진흙은 홍두께흙)

Q2. 금속판 지붕잇기 시 판과 판의 연결부에 직접 못을 박지 않고 거멀접기(Standing Seam) 연결 조인트 방식으로 결합하는 목적은?
A2. 기온 변화에 따른 금속판의 열팽창 신축 거동을 흡수하고 못 구멍으로 인한 빗물 누수를 차단하기 위함.

★ 시험 포인트
기와 용어 쓰기(아귀토, 홍두께흙, 알매흙, 착고, 부고), 거멀접기 설치 목적 서술이 지붕공사 핵심 기출 단골 유형입니다.`},{id:"12-e2",label:"커튼월: 멀리언방식·스팬드럴방식",explanation:`▶ 핵심 기출: 커튼월 풍동 및 실물 성능 시험
• Mock-up Test 성능 검증 4대 항목입니다.

Q1. 외기가 강한 고층 빌딩 커튼월 외장재의 수밀성과 풍압 성능을 사전에 공장 시험실에서 검증하기 위해 실시하는 실물 시험 명칭은? (기출!)
A1. 실물 모형 시험 (Mock-up Test).

Q2. Mock-up Test의 기본 4대 성능 시험 항목을 순서대로 기술하시오.
A2.
1) 기밀 시험: 공기 누출량 측정.
2) 정압 수밀 시험: 물 분사 누수 확인.
3) 동압 수밀 시험: 맥동압 풍풍 물 분사 누수 확인.
4) 구조 시험: 설계풍압 구조 안전 및 층간변위 측정.

★ 시험 포인트
Mock-up Test 4대 항목(기밀, 정압수밀, 동압수밀, 구조) 정확하게 쓰기 및 예비시험(내풍압 50%) 단계가 매년 출제됩니다.`}]}]},{id:"13",label:"13. 공사관리",children:[{id:"13-1",label:"공정관리",children:[{id:"13-1-1",label:"바차트 (Bar Chart)",explanation:`세로축에는 공정의 세부 작업명(Activity), 가로축에는 공사 일적 타임라인을 나타내고 작업 기간을 굵은 막대(Bar)로 그려 일정의 진행을 표시하는 가장 단순한 횡선식 공정표.

▶ 일정표의 장단점
• 장점:
  - 도표 구조가 대단히 단순하고 직관적이어서 건축주, 노무자, 비전문가 등 누구나 한눈에 공사의 개략적인 시작일, 완료일, 소요 일수를 파악할 수 있음.
  - 소규모 주택 공사나 단순 단기 공사에 가장 가성비 높게 일정 관리 도구로 활용 가능.
• 단점 (시험 출제 100%!):
  ① 작업 간의 상호 인과 관계(선후 관계, 연관성)를 전혀 표현할 수 없음 (예: 콘크리트 양생 완료 후에만 조적이 가능한 접합 관계 표현 불가).
  ② 어떤 작업이 지연될 때 전체 공기를 지연시키는 핵심 경로인 주공정선(Critical Path)을 찾을 수 없음.
  ③ 특정 공종 지연이 후속 공종에 미치는 연쇄 지연 여파 계산 불가능.

★ 시험 포인트
바차트(횡선식 공정표)의 결정적 단점 3가지(작업 간 선후 연관 관계 표시 불가, 주공정선 파악 불가, 일정 변경 시 수정 곤란)를 네트워크 공정표와 대비하여 쓰기 문제 기출.`},{id:"13-1-2",label:"네트워크공정표",children:[{id:"13-1-2-1",label:"CPM (주공정선)",explanation:`Critical Path Method. 네트워크 공정표에서 여유 시간(Float)이 전혀 없는 작업들을 선형으로 연결하여 전체 공사 기간을 지배하는 가장 긴 경로인 주공정선(Critical Path)을 결정하고 이를 중점 관리하는 공정 기법.

▶ 핵심 계산 및 용어
• 전진 계산 (Forward Pass): 시작점부터 공정표 진행 방향으로 덧셈 계산하여 각 작업의 가장 빠른 시작일(EST)과 완료일(EFT)을 산출.
• 후진 계산 (Backward Pass): 최종 완료 기한부터 시작점 역방향으로 뺄셈 계산하여 가장 늦은 시작일(LST)과 완료일(LFT)을 산출.
• 여유 시간 종류:
  - 총여유시간 (Total Float, TF): 전체 공기를 지연시키지 않는 한도 내에서 가질 수 있는 작업의 최대 여유 시간 (TF = LST - EST = LFT - EFT).
  - 자유여유시간 (Free Float, FF): 후속 작업의 가장 빠른 시작일(EST)을 지연시키지 않으면서 한 작업이 가질 수 있는 순수 여유 시간.
• 주공정선(Critical Path): TF = 0인 작업의 연속 경로. 이 경로 위의 작업이 단 1일만 지연되어도 전체 준공일이 즉시 지연됨.

★ 시험 포인트
네트워크 공정표 전진/후진 계산을 통한 각 노드의 EST, EFT, LST, LFT 구하기, 총여유시간(TF)과 자유여유시간(FF)의 공식 유도 및 주공정선(Critical Path) 경로 표시 기출율 최상위.`},{id:"13-1-2-2",label:"PERT",explanation:`Program Evaluation and Review Technique. 과거 시공 경험이 없거나 불확실성이 큰 연구개발, 신규 복합 건설 프로젝트의 소요 기간을 낙관, 최빈, 비관 3가지 시간 변수로 분석하여 확률적 완료 기한을 예측하는 공정 기법.

▶ PERT의 3점 추정 시간치 (Three-Point Estimating)
① 낙관치 (a): 모든 공사 조건이 기적적으로 완벽하여 가장 빨리 끝날 때의 소요 기간.
② 최빈치 (m): 일반적인 기후 및 보통 조건에서 가장 자주 발생하는 정상 소요 기간 (가중치 4배 부여).
③ 비관치 (b): 천재지변, 파업 등 최악의 하자가 발생했을 때 소요되는 최대 장기 기간.

▶ 기대치 및 분산 산정 공식 (무조건 암기!)
• 기대 시간 (Expected Time, te): te = (a + 4m + b) / 6
• 표준편차 (Standard Deviation, σ): σ = (b - a) / 6
• 분산 (Variance, v): v = σ^2 = [(b - a) / 6]^2
• 전체 공기 기대치 = 각 주공정선 작업 기대 시간의 합 (Σte)
• 전체 공기 분산 = 주공정 작업 분산의 합 (Σv = Σσ^2)
• 목표 기간 내 완료 확률은 표준정규분포 변수 Z = (목표기간 - Σte) / √Σσ^2 값을 구하여 계산함.

★ 시험 포인트
3점 추정 시간치(낙관 a, 최빈 m, 비관 b)를 준 후 각 작업의 기대 시간(te)과 표준편차(σ)를 유도하는 계산 문제, CPM(결정론적 1점 추정)과의 공정 특성 비교가 출제 빈도 높음.`}]},{id:"13-1-3",label:"공기단축",explanation:`공사 기간을 단축하기 위해 공정 네트워크 상의 작업을 조정하고 추가 자원을 배정하는 공정 관리 기법.

▶ 단축 원칙
• 주공정선(Critical Path) 상의 작업만 골라서 단축해야 전체 공기 단축 가능
• 비용구배(Cost Slope)가 가장 낮은(경제적인) 주공정 작업부터 순서대로 단축해야 비용 상승 최소화

▶ 비용구배 공식
Cost Slope = (급속공사비 - 정상공사비) ÷ (정상공기 - 급속공기)

★ 시험 포인트
공기 단축은 반드시 주공정선(CP) 위에서만 적용하며, 비용구배가 최소인 작업부터 착수.`}]},{id:"13-2",label:"품질관리",children:[{id:"13-2-1",label:"관리도 (X-R 관리도)",explanation:`공정의 품질 변동 상태를 꺾은선그래프로 나타내고, 이상 변동이 한계를 벗어나는지 관리하는 도구.

▶ 구성선
• UCL (Upper Control Limit): 관리 상한선 (중심에서 +3σ)
• CL (Center Line): 품질 목표 중심선
• LCL (Lower Control Limit): 관리 하한선 (중심에서 -3σ)

▶ 판정 기준
• 관리선(UCL, LCL) 외부로 점이 나가면 공정 이상
• 점들이 한쪽에 연달아 치우치는 현상(Run) 발생 시 불량 징후 분석 착수

★ 시험 포인트
관리도 = 3시그마 한계선 관리. 공정 이상 징후 조기 탐색용.`},{id:"13-2-2",label:"비파괴검사",children:[{id:"13-2-2-1",label:"방사선검사 (RT)",explanation:`X선 또는 γ선(감마선)을 철골 용접부에 투과하여 내부 결함 유무를 필름에 감광시켜 확인하는 비파괴검사.

▶ 특징
• 내부 결함(기공, 슬래그 혼입, 균열 등) 식별이 매우 정밀함
• 검사 결과가 필름(RT 필름)으로 남아 영구 보존 가능
• 방사선 위험성으로 검사 시 작업 반경 출입 통제 필요

★ 시험 포인트
방사선검사(RT) = 용접 내부 검사 표준 = 정밀한 필름 기록 보존성 우수.`},{id:"13-2-2-2",label:"초음파검사 (UT)",explanation:`초음파를 철골 용접부에 투과하고 반사되는 파형의 형태와 깊이로 결함의 유무를 분석하는 비파괴검사.

▶ 특징
• 내부 균열, 융합 불량 등 평면성 결함 탐지에 매우 뛰어남
• 방사선 위험이 없고 장비가 비교적 소형이어서 현장성 우수
• 결함 종류를 직접 목안으로 확인하기 어려워 숙련 기술자 필요

★ 시험 포인트
초음파검사(UT) = 현장 철골 내부 검사 주류 = 안전하고 균열 탐지 우수.`},{id:"13-2-2-3",label:"자분탐상검사 (MT)",explanation:`철골 부재를 전자기력으로 자화시킨 후 자분(철가루)을 뿌려 결함부 주변의 누설 자장에 모여드는 자분 띠로 결함을 탐지하는 기법.

▶ 특징
• 표면 및 표면 바로 아래(미세 내부) 균열 탐지에 아주 탁월
• 육안으로 결함 형태 확인 쉬움
• 자성체(강재 등)에만 적용 가능 — 알루미늄이나 스테인리스에는 적용 불가

★ 시험 포인트
자분탐상(MT) = 표면 및 직하 미세 결함 탐지. 자성체 전용.`},{id:"13-2-2-4",label:"침투탐상검사 (PT)",explanation:`부재 표면에 붉은 침투액을 뿌려 균열 속에 스며들게 한 후 세척하고, 흰 현상액을 도포해 스며 나온 침투액으로 표면 결함을 찾아내는 기법.

▶ 특징
• 오직 표면에 노출된 결함(균열)만 탐지 가능
• 재질에 제약이 없음 — 금속뿐만 아니라 유리, 세라믹, 플라스틱에도 적용 가능
• 시공 절차가 단순하고 저렴

★ 시험 포인트
침투탐상(PT) = 표면 결함만 가능 = 재질 무제한(비자성체 가능).`}]},{id:"13-2-3",label:"콘크리트 시험 (슬럼프·공기량·압축강도)",explanation:`콘크리트 구조물의 구조적 안전성과 소요 강도를 확보하기 위해 굳지 않은 상태의 점성 및 공기량과 굳은 후의 최종 압축강도를 검증하는 현장 3대 시험.

▶ 굳지 않은 콘크리트 시험 2종
① 슬럼프 시험 (Slump Test): 반죽의 끈기(시공 연도) 측정. 슬럼프 콘(상부 φ10cm, 하부 φ20cm, 높이 30cm)에 콘크리트를 3층으로 나누어 담고 다짐봉으로 층마다 25회 다진 후 콘을 수직으로 들어 올려 주저앉은 중심 높이(cm)를 측정. 일반 구조물은 8~15cm 합격 기준.
② 공기량 시험: 동결융해 저항성 향상을 위한 미세 기포 함유량 측정. 공기량 측정기(워싱턴형) 사용. 표준 기준값 4~7%. 공기량 1% 상승 시 슬럼프는 약 2cm 증가하지만 압축강도는 약 4~5% 저하하므로 상한 관리 철저.

▶ 굳은 콘크리트 압축강도 시험
• 공시체 제작: 직경 15cm × 높이 30cm (또는 직경 10cm × 높이 20cm) 원기둥형 강제 몰드에 다져 제작.
• 양생 및 재령: 20±2°C 수조 속에서 28일간 표준 수중 양생을 거친 후 압축 시험기로 압축 파괴 강도 측정.
• 합격 판정: 3개 공시체 강도 평균값이 설계기준강도(fck) 이상이고, 개별 시험값이 fck의 85% 이상(또는 fck - 3.5MPa 이상)을 동시에 만족해야 함.

★ 시험 포인트
슬럼프 콘 규격 치수 및 3층 25회 다짐법, 공기량이 콘크리트 품질에 미치는 양면성(1% 상승 시 강도 5% 저하 비례 관계), 압축강도 공시체 규격 및 표준 재령(28일) 기출 암기.`}]},{id:"13-3",label:"안전관리",explanation:`현장 내 불량 상태나 안전 수칙 미준수로 발생할 수 있는 산업재해를 방지하는 체계적 예방 활동.

▶ 하인리히 재해 법칙 (1:29:300 법칙)
• 1건의 중상해(사망)가 발생하기 전에는
• 29건의 경상해와
• 300건의 무재해 사고(아차사고)가 항상 사전 징후로 존재함
→ 사소한 안전 불안 요소를 통제하여 대형 참사를 차단해야 함

★ 시험 포인트
하인리히 법칙(1:29:300) 수치 암기 및 아차사고 방지의 중요성.`},{id:"13-exam",label:"[시험 포인트]",children:[{id:"13-e1",label:"3대 관리: 원가·공정·품질",explanation:`▶ 핵심 기출: 건설 3대 관리 요소
• 프로젝트 성공을 위한 3대 중심 통제 관리 항목입니다.

Q1. 건설 프로젝트의 경영 목표 달성을 위한 3대 핵심 관리 요소를 쓰시오. (기출!)
A1. 원가관리(Cost), 공정관리(Time), 품질관리(Quality).

Q2. 3대 관리를 넘어 친환경 및 근로자 보건을 위해 추가 확장된 5대 관리 요소는?
A2. 원가관리, 공정관리, 품질관리 + 안전관리, 환경관리.

★ 시험 포인트
3대 관리(원가, 공정, 품질)와 5대 관리(+안전, 환경)의 정확한 명칭 쓰기 단답형을 대비하세요.`},{id:"13-e2",label:"5대 관리: +안전·환경",explanation:`▶ 핵심 기출: 5대 관리와 안전 보건
• 품질 및 공정과 연계된 재해 예방 및 안전 대책입니다.

Q1. 건설 안전 보건 관리비의 계상 기준은 어디를 기준으로 삼는가?
A1. 발주처 공사 내역서 상의 직접재료비와 직접노무비를 합산한 대상액 기준 비율 적용.

★ 시험 포인트
안전보건관리비 계산 시 대상 금액(직접재료비 + 직접노무비) 구성 인자 암기가 필수적입니다.`},{id:"13-e3",label:"노무자: 직용·정용·날품",explanation:`▶ 핵심 기출: 현장 노무자 형태 분류
• 고용 및 도급 계약 주체별 노무인력 분류입니다.

Q1. 원도급자(종합건설사)에게 직접 고용되어 급료를 지급받는 현장 관리 및 직접 시공 노무자의 명칭은?
A1. 직용노무자.

Q2. 하도급자(전문건설사)와 상용 고용 계약을 맺고 현장별로 계속 따라다니며 작업하는 기능 공종 노무자는?
A2. 정용노무자. (일단위 모집 임시 노무자는 날품노무자)

★ 시험 포인트
직용노무자, 정용노무자, 날품노무자의 고용 주체 및 소속 분류 쓰기 문제를 구별하여 외우셔야 합니다.`},{id:"13-e4",label:"도급: 일식·분할·공동도급·턴키",explanation:`▶ 핵심 기출: 도급 계약 제도
• 턴키, 공동도급, CM, BOT 등의 계약 특징입니다.

Q1. 공사 발주 시 계획, 설계, 구매, 시공, 시운전 후 인도까지 한 종합건설사에 모든 책임을 넘겨 완료 후 열쇠를 넘겨받는 도급 계약 방식은? (기출!)
A1. 일괄도급 (턴키 도급, Turn-key Contract).

Q2. 두 개 이상의 건설사가 임시 공동 협의체를 결성하여 공동 지분으로 입찰, 시공에 참여하는 도급 제도는?
A2. 공동도급 (Joint Venture Contract).

★ 시험 포인트
턴키도급의 장단점(책임일원화, 공기단축 가능하나 독점 우려), 공동도급의 장점(위험 분산, 융자력 강화)이 빈출 기출문제입니다.`},{id:"13-e5",label:"VE(가치공학) 특징",explanation:`▶ 핵심 기출: VE (가치 공학)
• 가치 향상을 위한 설계 타당성 검토 공식입니다.

Q1. 가치공학(Value Engineering)에서 정의하는 가치(Value) 산정 공식을 기호와 함께 쓰시오. (기출!)
A1. V = F / C (여기서 V = 가치, F = 기능-Function, C = 비용-Cost).

Q2. 위 공식을 바탕으로 가치(V)를 향상시키는 4대 방안을 제시하시오.
A2.
1) 비용(C)을 일정하게 유지하고 기능(F)을 향상시킴.
2) 기능(F)을 일정하게 유지하고 비용(C)을 절감시킴.
3) 기능(F)을 향상시키면서 동시에 비용(C)을 절감시킴 (최우수).
4) 비용(C)이 다소 상승하더라도 기능(F)을 훨씬 더 크게 향상시킴.

★ 시험 포인트
VE 공식 V=F/C 및 가치 향상 4대 메커니즘을 묻는 서술형 문제는 기출 빈도가 매우 높은 단골 테마입니다.`},{id:"13-e6",label:"EC화·CIC·CALS·PMIS",explanation:`▶ 핵심 기출: 건설 정보 시스템
• CIC, CALS, PMIS 등의 통합 관리 시스템 개념입니다.

Q1. 건설 프로젝트의 효율적 제어를 위해 공정, 기획, 문서, 자재, 예산 등의 모든 경영 정보를 컴퓨터 네트워크망으로 통합 운영하는 시스템은?
A1. PMIS (Project Management Information System, 프로젝트 관리 정보 시스템).

Q2. 건설 전 과정의 정보를 표준화하여 인터넷망으로 교환하는 건설 통합 정보 관리 인프라의 명칭은?
A2. CALS (Continuous Acquisition and Life-cycle Support).

★ 시험 포인트
PMIS 및 CALS, CIC(컴퓨터 통합 생산)의 한글/영문 정식 명칭과 정의 매칭이 출제됩니다.`},{id:"13-e7",label:"CPM·PERT — 플로트·주공정선",explanation:`▶ 핵심 기출: CPM 및 PERT 공정 계산
• 네트워크 공정표 작성 및 최장 Critical Path 검증입니다.

Q1. 네트워크 일정 계산 시 다음 용어의 정식 명칭을 쓰시오.
EST: Earliest Start Time (가장 빠른 시작 시간)
EFT: Earliest Finish Time (가장 빠른 완료 시간)
LST: Latest Start Time (가장 늦은 시작 시간)
LFT: Latest Finish Time (가장 늦은 완료 시간)

Q2. 총여유시간(Total Float)과 자유여유시간(Free Float)의 수식 정의는?
A2.
• TF = LST - EST = LFT - EFT
• FF = 후속작업의 EST - 현재작업의 EFT

★ 시험 포인트
주어진 공정 네트워크 다이어그램을 보고 각 경로별 소요 일수를 덧셈하여 전체 공기를 결정하는 주공정선(CP)을 찾아 이중 화살표로 긋는 실무 도해 문제가 단골 출제됩니다.`},{id:"13-e8",label:"품질도구: X-R관리도·파레토·히스토그램",explanation:`▶ 핵심 기출: 품질 관리 도구
• 파레토도, 히스토그램, 특성요인도 등의 통계적 분석 7대 도구입니다.

Q1. 공정 불량 항목(균열, 들뜸, 치수 하자 등)을 불량 빈도 건수 순으로 나열하고 이를 누적 막대그래프와 누적 백분율 꺾은선으로 함께 표시하여 중점 품질 관리 항목을 선별하는 도구는? (기출!)
A1. 파레토도 (Pareto Diagram). (80:20 법칙 활용)

Q2. 불량의 결과와 그것에 영향을 미친 다양한 원인(원자재, 장비, 노무자, 시공)의 관계를 물고기 뼈 모양으로 분석한 품질 도구는?
A2. 특성요인도 (Cause and Effect Diagram).

★ 시험 포인트
파레토도, 특성요인도, 히스토그램(도수분포표), 관리도(X-R)의 각 정의를 1:1로 묻는 단답형 및 명칭 쓰기에 대비하세요.`}]}]},{id:"14",label:"14. 목공사",children:[{id:"14-1",label:"목재의 결점",children:[{id:"14-1-1",label:"옹이",explanation:`나뭇가지가 줄기에 파묻혀 자란 흔적으로, 목재 횡단면상에 매우 단단한 짙은 원형 나이테로 남아있는 부분.

▶ 특징
• 옹이 주변의 나뭇결(섬유 방향)이 꼬여 강도를 대폭 떨어뜨림
• 특히 구조 부재(보, 인장 부재)의 인장강도 감소율이 높음
• 생옹이(원목 일체형)는 인테리어 마감용으로 쓰이나, 죽은옹이(썩어서 빠짐)는 하자 원인

★ 시험 포인트
옹이 = 인장강도 감소 유발 = 구조용 보에는 사용 배제.`},{id:"14-1-2",label:"갈라짐",explanation:`건조 과정에서 수분 증발에 따른 변형 수축으로 나뭇결을 따라 쪼개지는 결함.

▶ 특징
• 할렬(끝부분 세로 쪼개짐), 윤할(나이테 라인 탈락) 등으로 구분
• 나이테(접선) 방향 수축률이 반경 방향 수축률보다 커서 외주부에서 중심으로 갈라짐
• 전단응력 저하 원인이 됨

★ 시험 포인트
갈라짐 = 건조 수축 불균형(접선 수축률 > 반경 수축률)이 주원인.`},{id:"14-1-3",label:"껍질박이",explanation:`나무가 자라는 도중 바람이나 상처 등으로 상처받아 껍질(수피) 조직이 섬유질 내부에 끼어 들어간 채 자란 결함.

▶ 특징
• 목재 강도의 불연속성 유발 → 휨·전단 저하
• 가공 시 칠이 불량해지고 미관 저하

★ 시험 포인트
껍질박이 = 성장 중 수피가 내부 침투 = 목재 연속성 단절 및 약점 형성.`},{id:"14-1-4",label:"썩음",explanation:`목재 부패균(Fungus)이 목재의 섬유소 성분을 분해해 강도를 소실시키고 가벼운 부스러기로 만드는 병해.

▶ 부패균 4대 생장 조건
① 온도: 20~35°C
② 수분: 함수율 20% 이상
③ 공기: 산소 존재
④ 영양: 목재 자체 성분
→ 대책: 목재 함수율을 섬유포화점 이하(15% 이하)로 철저히 건조하거나, 방부제 도포.

★ 시험 포인트
부패균 4대 조건(온도·수분·공기·영양). 목재 건조(함수율 15% 이하)가 최선의 예방.`}]},{id:"14-2",label:"함수율·섬유포화점 (28~30%)",explanation:`목재 세포 내부에 존재하는 수분의 비율과 목재의 수축팽창, 균열, 휨 강도 변동 간의 한계 물리적 상관관계.

▶ 함수율 산정 및 수분의 분류
• 함수율 공식: MC(%) = (습윤 상태 목재 중량 - 전건 상태 중량) / 전건 중량 × 100
  (전건 중량은 105°C 건조 가마에서 무게 변화가 없을 때까지 완전히 말린 절대 건조 중량).
• 세포 내 수분 구분: 세포 구멍 속을 흐르는 자유수(증발해도 변형/강도 무관) + 세포벽 내에 화학 결합된 결합수(증발 시 수축 및 강도 증가 유발).

▶ 섬유포화점 (FSP, Fiber Saturation Point - 시험 빈출!)
• FSP 값: 함수율 약 28% ~ 30% 범위.
• 상태 정의: 자유수는 완전히 0%로 다 마르고, 세포벽 내부에는 결합수만 꽉 차서 100%로 포화되어 있는 물리적 임계점.

▶ 함수율 변동과 목재 성질의 관계 (가장 중요!)
• 함수율이 FSP 이상일 때 (30% 초과): 함수율이 아무리 높아지거나 낮아져도 목재의 휨 강도, 압축강도, 치수 부피는 변하지 않고 일정함.
• 함수율이 FSP 이하로 떨어질 때 (30% 미만 건조 진행 시):
  - 강도 급증: 결합수가 마르면서 목질 세포 조직이 수축 밀착하여 압축, 인장, 휨 강도가 건조 비례하여 급격히 향상됨 (약 2배 증가).
  - 치수 변형 개시: 세포벽 두께 수축으로 인해 목재 단면이 수축하고 뒤틀림, 갈라짐 하자가 본격적으로 시작됨.
  - 목재의 수축율 크기 방향 순서: 접선(나이테) 방향 > 반경(지름) 방향 > 섬유(길이) 방향.
• 건조 목표 한계: 가구/내장 마감재는 함수율 15% 이하(실내 기상 평형 상태)로 철저히 말려 시공함.

★ 시험 포인트
섬유포화점(FSP)의 정확한 백분율 수치(28~30%) 및 물리적 의미, FSP 이하 조건에서 함수율 감소 시 나타나는 강도(증가)와 부피(수축) 변화의 반비례 특징 서술, 목재 방향별 수축율 크기 비교(접선>반경>섬유) 기출.`},{id:"14-3",label:"이음과 맞춤",children:[{id:"14-3-1",label:"장부이음",explanation:`한 부재의 끝단에 촉(장부)을 돌출시키고, 상대 부재에 정밀한 구멍(장부구멍)을 파서 끼워 결합하는 이음.

▶ 특징
• 못이나 접착제 없이도 기계적 강도가 확실함
• 한옥 기둥-보, 창호 문틀 모서리 마감의 기본
• 촉의 길이와 결합 밀착도가 구조 성능 결정

★ 시험 포인트
장부이음 = 돌기(장부)+구멍 결합 = 한옥 목조건물의 기본 접합.`},{id:"14-3-2",label:"반턱이음",explanation:`두 목재 부재의 접합 단부 두께를 각각 50%(반씩) 따내어 서로 포개어 맞대는 단순 이음.

▶ 특징
• 부재의 원래 두께와 수평 단면이 유지됨
• 시공성이 매우 편리해 가설 비계나 간단한 인테리어 틀재에 사용
• 당기는 힘(인장력)에 매우 약해 못이나 볼트 보강 필수

★ 시험 포인트
반턱이음 = 두께 반씩 깎아 포갬 = 인장 보강용 못·피스 체결 필수.`},{id:"14-3-3",label:"주먹장이음",explanation:`부재 끝단을 나비 날개 또는 주먹 쥔 손 모양의 쐐기 형태로 비스듬히 가공하여 끼우는 결합 공법.

▶ 특징
• 쐐기 각도가 물리적으로 빠지는 것을 막음 → 인장 저항력 우수
• 가구 모서리 접합, 주택 처마도리와 들보 연결부에 주로 활용
• 정밀 가공 필요

★ 시험 포인트
주먹장이음 = 쐐기형 가공 = 빠짐 방지(인장력 저하 방지) 탁월.`}]},{id:"14-4",label:"방부·방충 처리법",explanation:`균이나 해충(흰개미 등)으로부터 목재를 오랫동안 보전하기 위해 적용하는 처리 기법.

▶ 방부 방법
• 가압주입법: 밀폐 용기 내 압력으로 약제를 내부 깊숙이 고르게 주입 — 가장 영구적이고 확실함 (대표: 크레오소트액)
• 도포법: 붓이나 롤러로 표면에 방부액을 칠함 — 간편하나 주기적 칠 필요
• 표면탄화법: 표면을 3~5mm 그슬려 태워 숯막을 만듦 — 균의 영양 섭취 차단

★ 시험 포인트
가압주입법 = 압력 주입 = 가장 영구적·효과적. 크레오소트액이 표준.`},{id:"14-exam",label:"[시험 포인트]",children:[{id:"14-e1",label:"결점: 옹이·갈라짐·껍질박이·썩음",explanation:`▶ 핵심 기출: 목재의 결점 분석
• 옹이, 갈라짐, 썩음 등의 목질 결점 분포가 강도에 미치는 영향입니다.

Q1. 목재의 결점 중 가지 흔적에 해당하는 옹이(Knots)가 목재 부재 단면에 박혀 있을 때, 가장 극도로 저하되는 목재의 강도는?
A1. 휨 부재(보) 하단이나 긴장 철물 연결부의 인장 강도(Tensile Strength).

Q2. 목재 부패균이 침투하여 나무 섬유질을 썩게 만드는 생장 필수 조건 4가지는?
A2. 온도(20~35°C), 수분(함수율 20% 이상), 공기(산소), 영양(목질 자체).

★ 시험 포인트
옹이에 의한 인장강도 급감 특징 및 썩음균(부후균) 차단을 위한 목재 예방 건조 한계치(함수율 15% 이하 유지)가 기출됩니다.`},{id:"14-e2",label:"섬유포화점 28~30%",explanation:`▶ 핵심 기출: 섬유포화점과 물리 변화
• 섬유포화점(FSP) 수치 및 건조에 따른 목재 물리량 변화입니다.

Q1. 목재의 섬유포화점(FSP)의 함수율 수치와, FSP 이하로 건조될 때 일어나는 목재의 주된 물리적 변동 2가지를 기술하시오. (기출!)
A1.
• 섬유포화점 수치: 함수율 약 28% ~ 30% 범위.
• 물리적 변화:
  1) 결합수가 줄어들며 세포벽 밀착으로 목재 강도가 증가함.
  2) 세포 건조로 인해 목재의 치수 체적이 수축 변형을 개시함.

Q2. 목재의 3대 방향별 건조 수축팽창률의 크기 순서를 비교하여 쓰시오.
A2. 접선(나이테) 방향 > 반경(지름) 방향 > 섬유(길이) 방향.

★ 시험 포인트
FSP 수치 28~30% 암기 및 FSP 이하 건조 시 일어나는 강도(상승)와 변형(수축) 상관관계 서술, 그리고 방향별 수축률 크기 비교(접선>반경>섬유) 출제율 상위.`},{id:"14-e3",label:"이음과 맞춤 종류",explanation:`▶ 핵심 기출: 이음과 맞춤 분류
• 목재 결합부의 기계적 접합 명칭과 용도입니다.

Q1. 두 목재 결합 시 당기는 인장 하중이 가해져도 쐐기 걸림각 원리에 의해 절대 결합부가 빠지지 않는 사다리꼴 모양의 전통 결합 명칭은? (기출!)
A1. 주먹장이음 (Dovetail Joint).

Q2. 보강 철물이나 못 없이 두 나무 요철만을 깎아 맞추는 기둥-보 결합 방식의 명칭은?
A2. 장부이음 (Mortise and Tenon Joint).

★ 시험 포인트
인장에 가장 강한 주먹장이음의 형상 특징과 장부이음의 가공 특징을 1:1로 매칭하는 단답형 문제 대비.`},{id:"14-e4",label:"방부·방충 처리법",explanation:`▶ 핵심 기출: 목재 방부 처리 공법
• 가압주입, 표면탄화, 도포법의 원리 및 기준입니다.

Q1. 목재 방부 공법 중 기둥 밑둥 등을 그슬려 탄화 숯막을 만듦으로써 균의 영양 섭취를 차단하는 공법과 그 탄화 두께 기준은? (기출!)
A1. 표면탄화법. 그슬리는 두께는 3mm ~ 5mm 정도 표준.

Q2. 가장 확실하고 반영구적 효과를 발휘하여 밀폐 챔버에 압력으로 약제를 세포 속에 넣는 방부법은?
A2. 가압주입법.

★ 시험 포인트
표면탄화 깊이 수치(3~5mm), 가압주입법 명칭 및 대표적인 유성 방부액(크레오소트유)이 빈출 문제 유형입니다.`}]}]},{id:"15",label:"15. 건축적산",children:[{id:"15-1",label:"수량산출 원칙",explanation:`설계도면을 기준으로 재료·노무 수량을 규칙에 맞춰 정확하게 계산하는 적산(Quantity Surveying)의 기본 규정.

▶ 원칙
• 수량은 정미량(Net Quantity - 도면 정합량) 기준 산출이 표준
• 재료 할증률 (암기 필수)
  - 시멘트 벽돌: 5%
  - 점토(붉은) 벽돌: 3%
  - 이형 철근: 3%
  - 원형 철근: 5%
  - 합판 (일반): 10%
  - 유재(페인트): 10%

★ 시험 포인트
재료 할증률(시멘트벽돌 5%, 점토벽돌 3%, 이형철근 3%, 원형철근 5%) 수치 출제율 100%.`},{id:"15-2",label:"공종별 적산",children:[{id:"15-2-1",label:"콘크리트 적산",explanation:`구조 도면을 기준으로 필요한 굳지 않은 콘크리트(레미콘)의 체적(㎥)을 구하는 적산 작업.

▶ 원칙
• 체적 = 가로 × 세로 × 높이
• 산출 순서: 기초 → 기둥 → 보 → 슬래브 → 벽 순서로 전개하여 중복·누락 차단
• 기둥과 보 접합부: 기둥 우선 산출 (보는 기둥 간 안치수 길이 기준)

★ 시험 포인트
기초→기둥→보→슬래브 순서. 기둥-보 중첩 시 기둥 우선 산출 원칙.`},{id:"15-2-2",label:"철근 적산",explanation:`구조물에 매립되는 철근의 규격(직경)별 총 연장 길이(m)를 산출해 단위중량을 곱해 총 중량(ton)을 구하는 작업.

▶ 원칙
• 총 길이 = (부재별 배치 개수 × 개당 길이) + 이음 및 정착 길이
• 계산 완료 후 이형철근 할증 3% 할증율 추가
• 단위중량(kg/m)은 직경마다 다름 (예: D10 = 0.56kg/m)

★ 시험 포인트
철근 적산 = 총 연장(정착·이음 반영) × 단위중량. 이형철근 할증 3% 가산.`},{id:"15-2-3",label:"거푸집 적산",explanation:`콘크리트 타설 시 수화 반응 중 측압과 하중을 견뎌내는 거푸집의 실제 소요 면적(㎡)을 산출하는 작업.

▶ 산출 원칙
• 거푸집은 콘크리트 외경 표면과 직접 접하는 표면적 기준
• 기둥-보 접합부: 보의 거푸집 면적에서 기둥 단면 부분 차감
• 슬래브 면적: 보의 내부 안치수 면적 기준 산출

★ 시험 포인트
거푸집 면적 = 콘크리트와의 직접 접촉 면적. 중첩 부분 공제 계산 필수.`},{id:"15-2-4",label:"조적 적산",explanation:`벽돌조 또는 블록조 벽체를 쌓기 위해 필요한 실제 조적 자재(매수)를 구하는 작업.

▶ 1㎡당 벽돌 표준 소요 매수 (암기)
• 0.5B (길이쌓기): 75매/㎡
• 1.0B (마구리쌓기): 149매/㎡
• 1.5B (조합쌓기): 224매/㎡

▶ 최종 매수 계산
최종 소요 매수 = (벽면적 × 1㎡당 매수) × (1 + 할증률)
(시멘트벽돌 할증 5%, 점토벽돌 3%)

★ 시험 포인트
0.5B=75매, 1.0B=149매, 1.5B=224매 필수 암기. 할증율 추가 곱하기 필수.`}]},{id:"15-exam",label:"[시험 포인트]",children:[{id:"15-e1",label:"적산총칙: 수량산출 원칙",explanation:`▶ 핵심 기출: 적산 수량산출 원칙 및 할증
• 정미량과 소요량의 관계 및 자재별 할증률 대입 계산입니다.

Q1. 공사 원가 계산 시 재료 소요량을 구하는 공식은?
A1. 소요량 = 정미량 × (1 + 할증률)

Q2. 표준 품셈 기준에 따른 다음 재료의 할증률을 쓰시오. (기출!)
• 이형 철근: 3%
• 원형 철근: 5%
• 시멘트 벽돌: 5%
• 붉은 벽돌(치장): 3%
• 일반 합판: 10%
• 유리: 1%

★ 시험 포인트
주요 재료 할증률 수치(이형철근 3%, 원형철근 5%, 시멘트벽돌 5%, 붉은벽돌 3%, 합판 10%)를 묻거나, 도면 벽 면적으로부터 할증을 가산한 최종 벽돌 구입 수량을 계산하는 문제가 출제됩니다.`},{id:"15-e2",label:"공종별: 콘크리트·철근·거푸집·조적",explanation:`▶ 핵심 기출: 공종별 적산 계산
• 콘크리트, 거푸집, 철근, 조적의 실전 적산 계산 공식입니다.

Q1. 가로 6m, 세로 8m의 벽체를 두께 1.0B 표준형 시멘트 벽돌로 쌓고자 한다. (문창 개구부 면적 4m2 공제 조건). 필요한 시멘트 벽돌의 최종 반입 소요 매수는? (기출!)
A1.
• 조적 정미 면적 = (6 × 8) - 4 = 48 - 4 = 44 m2
• 1.0B 벽돌 표준 정미 소요량 = 44 × 149매/m2 = 6,556매
• 시멘트 벽돌 할증률 5% 가산 = 6,556 × 1.05 = 6,883.8 -> 6,884매.

Q2. 거푸집 면적 산출 시 공제 대상에서 제외하는(그냥 거푸집으로 계산하는) 개구부 면적 기준은?
A2. 개구부 1개소당 면적 1.0m2 이하일 때.

★ 시험 포인트
조적 적산 계산(면적 × B별 매수 × 할증), 거푸집 산출 시 1.0m2 이하 개구부 공제 제외 규정, 콘크리트 중첩 시 기둥 우선 원칙을 적용한 계산식이 시험 단골 고배점 문항입니다.`}]}]}]};var Du,Yp;function ad(){if(Yp)return Du;Yp=1;var n="\0",r="\0",o="";class l{constructor(g){Qe(this,"_isDirected",!0);Qe(this,"_isMultigraph",!1);Qe(this,"_isCompound",!1);Qe(this,"_label");Qe(this,"_defaultNodeLabelFn",()=>{});Qe(this,"_defaultEdgeLabelFn",()=>{});Qe(this,"_nodes",{});Qe(this,"_in",{});Qe(this,"_preds",{});Qe(this,"_out",{});Qe(this,"_sucs",{});Qe(this,"_edgeObjs",{});Qe(this,"_edgeLabels",{});Qe(this,"_nodeCount",0);Qe(this,"_edgeCount",0);Qe(this,"_parent");Qe(this,"_children");g&&(this._isDirected=Object.hasOwn(g,"directed")?g.directed:!0,this._isMultigraph=Object.hasOwn(g,"multigraph")?g.multigraph:!1,this._isCompound=Object.hasOwn(g,"compound")?g.compound:!1),this._isCompound&&(this._parent={},this._children={},this._children[r]={})}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(g){return this._label=g,this}graph(){return this._label}setDefaultNodeLabel(g){return this._defaultNodeLabelFn=g,typeof g!="function"&&(this._defaultNodeLabelFn=()=>g),this}nodeCount(){return this._nodeCount}nodes(){return Object.keys(this._nodes)}sources(){var g=this;return this.nodes().filter(h=>Object.keys(g._in[h]).length===0)}sinks(){var g=this;return this.nodes().filter(h=>Object.keys(g._out[h]).length===0)}setNodes(g,h){var v=arguments,x=this;return g.forEach(function(w){v.length>1?x.setNode(w,h):x.setNode(w)}),this}setNode(g,h){return Object.hasOwn(this._nodes,g)?(arguments.length>1&&(this._nodes[g]=h),this):(this._nodes[g]=arguments.length>1?h:this._defaultNodeLabelFn(g),this._isCompound&&(this._parent[g]=r,this._children[g]={},this._children[r][g]=!0),this._in[g]={},this._preds[g]={},this._out[g]={},this._sucs[g]={},++this._nodeCount,this)}node(g){return this._nodes[g]}hasNode(g){return Object.hasOwn(this._nodes,g)}removeNode(g){var h=this;if(Object.hasOwn(this._nodes,g)){var v=x=>h.removeEdge(h._edgeObjs[x]);delete this._nodes[g],this._isCompound&&(this._removeFromParentsChildList(g),delete this._parent[g],this.children(g).forEach(function(x){h.setParent(x)}),delete this._children[g]),Object.keys(this._in[g]).forEach(v),delete this._in[g],delete this._preds[g],Object.keys(this._out[g]).forEach(v),delete this._out[g],delete this._sucs[g],--this._nodeCount}return this}setParent(g,h){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(h===void 0)h=r;else{h+="";for(var v=h;v!==void 0;v=this.parent(v))if(v===g)throw new Error("Setting "+h+" as parent of "+g+" would create a cycle");this.setNode(h)}return this.setNode(g),this._removeFromParentsChildList(g),this._parent[g]=h,this._children[h][g]=!0,this}_removeFromParentsChildList(g){delete this._children[this._parent[g]][g]}parent(g){if(this._isCompound){var h=this._parent[g];if(h!==r)return h}}children(g=r){if(this._isCompound){var h=this._children[g];if(h)return Object.keys(h)}else{if(g===r)return this.nodes();if(this.hasNode(g))return[]}}predecessors(g){var h=this._preds[g];if(h)return Object.keys(h)}successors(g){var h=this._sucs[g];if(h)return Object.keys(h)}neighbors(g){var h=this.predecessors(g);if(h){const x=new Set(h);for(var v of this.successors(g))x.add(v);return Array.from(x.values())}}isLeaf(g){var h;return this.isDirected()?h=this.successors(g):h=this.neighbors(g),h.length===0}filterNodes(g){var h=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});h.setGraph(this.graph());var v=this;Object.entries(this._nodes).forEach(function([C,S]){g(C)&&h.setNode(C,S)}),Object.values(this._edgeObjs).forEach(function(C){h.hasNode(C.v)&&h.hasNode(C.w)&&h.setEdge(C,v.edge(C))});var x={};function w(C){var S=v.parent(C);return S===void 0||h.hasNode(S)?(x[C]=S,S):S in x?x[S]:w(S)}return this._isCompound&&h.nodes().forEach(C=>h.setParent(C,w(C))),h}setDefaultEdgeLabel(g){return this._defaultEdgeLabelFn=g,typeof g!="function"&&(this._defaultEdgeLabelFn=()=>g),this}edgeCount(){return this._edgeCount}edges(){return Object.values(this._edgeObjs)}setPath(g,h){var v=this,x=arguments;return g.reduce(function(w,C){return x.length>1?v.setEdge(w,C,h):v.setEdge(w,C),C}),this}setEdge(){var g,h,v,x,w=!1,C=arguments[0];typeof C=="object"&&C!==null&&"v"in C?(g=C.v,h=C.w,v=C.name,arguments.length===2&&(x=arguments[1],w=!0)):(g=C,h=arguments[1],v=arguments[3],arguments.length>2&&(x=arguments[2],w=!0)),g=""+g,h=""+h,v!==void 0&&(v=""+v);var S=u(this._isDirected,g,h,v);if(Object.hasOwn(this._edgeLabels,S))return w&&(this._edgeLabels[S]=x),this;if(v!==void 0&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(g),this.setNode(h),this._edgeLabels[S]=w?x:this._defaultEdgeLabelFn(g,h,v);var _=d(this._isDirected,g,h,v);return g=_.v,h=_.w,Object.freeze(_),this._edgeObjs[S]=_,s(this._preds[h],g),s(this._sucs[g],h),this._in[h][S]=_,this._out[g][S]=_,this._edgeCount++,this}edge(g,h,v){var x=arguments.length===1?f(this._isDirected,arguments[0]):u(this._isDirected,g,h,v);return this._edgeLabels[x]}edgeAsObj(){const g=this.edge(...arguments);return typeof g!="object"?{label:g}:g}hasEdge(g,h,v){var x=arguments.length===1?f(this._isDirected,arguments[0]):u(this._isDirected,g,h,v);return Object.hasOwn(this._edgeLabels,x)}removeEdge(g,h,v){var x=arguments.length===1?f(this._isDirected,arguments[0]):u(this._isDirected,g,h,v),w=this._edgeObjs[x];return w&&(g=w.v,h=w.w,delete this._edgeLabels[x],delete this._edgeObjs[x],c(this._preds[h],g),c(this._sucs[g],h),delete this._in[h][x],delete this._out[g][x],this._edgeCount--),this}inEdges(g,h){var v=this._in[g];if(v){var x=Object.values(v);return h?x.filter(w=>w.v===h):x}}outEdges(g,h){var v=this._out[g];if(v){var x=Object.values(v);return h?x.filter(w=>w.w===h):x}}nodeEdges(g,h){var v=this.inEdges(g,h);if(v)return v.concat(this.outEdges(g,h))}}function s(p,g){p[g]?p[g]++:p[g]=1}function c(p,g){--p[g]||delete p[g]}function u(p,g,h,v){var x=""+g,w=""+h;if(!p&&x>w){var C=x;x=w,w=C}return x+o+w+o+(v===void 0?n:v)}function d(p,g,h,v){var x=""+g,w=""+h;if(!p&&x>w){var C=x;x=w,w=C}var S={v:x,w};return v&&(S.name=v),S}function f(p,g){return u(p,g.v,g.w,g.name)}return Du=l,Du}var Ou,Gp;function j_(){return Gp||(Gp=1,Ou="2.2.4"),Ou}var Fu,Xp;function H_(){return Xp||(Xp=1,Fu={Graph:ad(),version:j_()}),Fu}var ju,Kp;function $_(){if(Kp)return ju;Kp=1;var n=ad();ju={write:r,read:s};function r(c){var u={options:{directed:c.isDirected(),multigraph:c.isMultigraph(),compound:c.isCompound()},nodes:o(c),edges:l(c)};return c.graph()!==void 0&&(u.value=structuredClone(c.graph())),u}function o(c){return c.nodes().map(function(u){var d=c.node(u),f=c.parent(u),p={v:u};return d!==void 0&&(p.value=d),f!==void 0&&(p.parent=f),p})}function l(c){return c.edges().map(function(u){var d=c.edge(u),f={v:u.v,w:u.w};return u.name!==void 0&&(f.name=u.name),d!==void 0&&(f.value=d),f})}function s(c){var u=new n(c.options).setGraph(c.value);return c.nodes.forEach(function(d){u.setNode(d.v,d.value),d.parent&&u.setParent(d.v,d.parent)}),c.edges.forEach(function(d){u.setEdge({v:d.v,w:d.w,name:d.name},d.value)}),u}return ju}var Hu,Zp;function B_(){if(Zp)return Hu;Zp=1,Hu=n;function n(r){var o={},l=[],s;function c(u){Object.hasOwn(o,u)||(o[u]=!0,s.push(u),r.successors(u).forEach(c),r.predecessors(u).forEach(c))}return r.nodes().forEach(function(u){s=[],c(u),s.length&&l.push(s)}),l}return Hu}var $u,Jp;function Ig(){if(Jp)return $u;Jp=1;class n{constructor(){Qe(this,"_arr",[]);Qe(this,"_keyIndices",{})}size(){return this._arr.length}keys(){return this._arr.map(function(o){return o.key})}has(o){return Object.hasOwn(this._keyIndices,o)}priority(o){var l=this._keyIndices[o];if(l!==void 0)return this._arr[l].priority}min(){if(this.size()===0)throw new Error("Queue underflow");return this._arr[0].key}add(o,l){var s=this._keyIndices;if(o=String(o),!Object.hasOwn(s,o)){var c=this._arr,u=c.length;return s[o]=u,c.push({key:o,priority:l}),this._decrease(u),!0}return!1}removeMin(){this._swap(0,this._arr.length-1);var o=this._arr.pop();return delete this._keyIndices[o.key],this._heapify(0),o.key}decrease(o,l){var s=this._keyIndices[o];if(l>this._arr[s].priority)throw new Error("New priority is greater than current priority. Key: "+o+" Old: "+this._arr[s].priority+" New: "+l);this._arr[s].priority=l,this._decrease(s)}_heapify(o){var l=this._arr,s=2*o,c=s+1,u=o;s<l.length&&(u=l[s].priority<l[u].priority?s:u,c<l.length&&(u=l[c].priority<l[u].priority?c:u),u!==o&&(this._swap(o,u),this._heapify(u)))}_decrease(o){for(var l=this._arr,s=l[o].priority,c;o!==0&&(c=o>>1,!(l[c].priority<s));)this._swap(o,c),o=c}_swap(o,l){var s=this._arr,c=this._keyIndices,u=s[o],d=s[l];s[o]=d,s[l]=u,c[d.key]=o,c[u.key]=l}}return $u=n,$u}var Bu,em;function Ag(){if(em)return Bu;em=1;var n=Ig();Bu=o;var r=()=>1;function o(s,c,u,d){return l(s,String(c),u||r,d||function(f){return s.outEdges(f)})}function l(s,c,u,d){var f={},p=new n,g,h,v=function(x){var w=x.v!==g?x.v:x.w,C=f[w],S=u(x),_=h.distance+S;if(S<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+x+" Weight: "+S);_<C.distance&&(C.distance=_,C.predecessor=g,p.decrease(w,_))};for(s.nodes().forEach(function(x){var w=x===c?0:Number.POSITIVE_INFINITY;f[x]={distance:w},p.add(x,w)});p.size()>0&&(g=p.removeMin(),h=f[g],h.distance!==Number.POSITIVE_INFINITY);)d(g).forEach(v);return f}return Bu}var Vu,nm;function V_(){if(nm)return Vu;nm=1;var n=Ag();Vu=r;function r(o,l,s){return o.nodes().reduce(function(c,u){return c[u]=n(o,u,l,s),c},{})}return Vu}var Wu,tm;function Rg(){if(tm)return Wu;tm=1,Wu=n;function n(r){var o=0,l=[],s={},c=[];function u(d){var f=s[d]={onStack:!0,lowlink:o,index:o++};if(l.push(d),r.successors(d).forEach(function(h){Object.hasOwn(s,h)?s[h].onStack&&(f.lowlink=Math.min(f.lowlink,s[h].index)):(u(h),f.lowlink=Math.min(f.lowlink,s[h].lowlink))}),f.lowlink===f.index){var p=[],g;do g=l.pop(),s[g].onStack=!1,p.push(g);while(d!==g);c.push(p)}}return r.nodes().forEach(function(d){Object.hasOwn(s,d)||u(d)}),c}return Wu}var Qu,rm;function W_(){if(rm)return Qu;rm=1;var n=Rg();Qu=r;function r(o){return n(o).filter(function(l){return l.length>1||l.length===1&&o.hasEdge(l[0],l[0])})}return Qu}var Uu,im;function Q_(){if(im)return Uu;im=1,Uu=r;var n=()=>1;function r(l,s,c){return o(l,s||n,c||function(u){return l.outEdges(u)})}function o(l,s,c){var u={},d=l.nodes();return d.forEach(function(f){u[f]={},u[f][f]={distance:0},d.forEach(function(p){f!==p&&(u[f][p]={distance:Number.POSITIVE_INFINITY})}),c(f).forEach(function(p){var g=p.v===f?p.w:p.v,h=s(p);u[f][g]={distance:h,predecessor:f}})}),d.forEach(function(f){var p=u[f];d.forEach(function(g){var h=u[g];d.forEach(function(v){var x=h[f],w=p[v],C=h[v],S=x.distance+w.distance;S<C.distance&&(C.distance=S,C.predecessor=w.predecessor)})})}),u}return Uu}var qu,om;function zg(){if(om)return qu;om=1;function n(o){var l={},s={},c=[];function u(d){if(Object.hasOwn(s,d))throw new r;Object.hasOwn(l,d)||(s[d]=!0,l[d]=!0,o.predecessors(d).forEach(u),delete s[d],c.push(d))}if(o.sinks().forEach(u),Object.keys(l).length!==o.nodeCount())throw new r;return c}class r extends Error{constructor(){super(...arguments)}}return qu=n,n.CycleException=r,qu}var Yu,lm;function U_(){if(lm)return Yu;lm=1;var n=zg();Yu=r;function r(o){try{n(o)}catch(l){if(l instanceof n.CycleException)return!1;throw l}return!0}return Yu}var Gu,sm;function Dg(){if(sm)return Gu;sm=1,Gu=n;function n(s,c,u){Array.isArray(c)||(c=[c]);var d=s.isDirected()?h=>s.successors(h):h=>s.neighbors(h),f=u==="post"?r:o,p=[],g={};return c.forEach(h=>{if(!s.hasNode(h))throw new Error("Graph does not have node: "+h);f(h,d,g,p)}),p}function r(s,c,u,d){for(var f=[[s,!1]];f.length>0;){var p=f.pop();p[1]?d.push(p[0]):Object.hasOwn(u,p[0])||(u[p[0]]=!0,f.push([p[0],!0]),l(c(p[0]),g=>f.push([g,!1])))}}function o(s,c,u,d){for(var f=[s];f.length>0;){var p=f.pop();Object.hasOwn(u,p)||(u[p]=!0,d.push(p),l(c(p),g=>f.push(g)))}}function l(s,c){for(var u=s.length;u--;)c(s[u],u,s);return s}return Gu}var Xu,am;function q_(){if(am)return Xu;am=1;var n=Dg();Xu=r;function r(o,l){return n(o,l,"post")}return Xu}var Ku,um;function Y_(){if(um)return Ku;um=1;var n=Dg();Ku=r;function r(o,l){return n(o,l,"pre")}return Ku}var Zu,cm;function G_(){if(cm)return Zu;cm=1;var n=ad(),r=Ig();Zu=o;function o(l,s){var c=new n,u={},d=new r,f;function p(h){var v=h.v===f?h.w:h.v,x=d.priority(v);if(x!==void 0){var w=s(h);w<x&&(u[v]=f,d.decrease(v,w))}}if(l.nodeCount()===0)return c;l.nodes().forEach(function(h){d.add(h,Number.POSITIVE_INFINITY),c.setNode(h)}),d.decrease(l.nodes()[0],0);for(var g=!1;d.size()>0;){if(f=d.removeMin(),Object.hasOwn(u,f))c.setEdge(f,u[f]);else{if(g)throw new Error("Input graph is not connected: "+l);g=!0}l.nodeEdges(f).forEach(p)}return c}return Zu}var Ju,dm;function X_(){return dm||(dm=1,Ju={components:B_(),dijkstra:Ag(),dijkstraAll:V_(),findCycles:W_(),floydWarshall:Q_(),isAcyclic:U_(),postorder:q_(),preorder:Y_(),prim:G_(),tarjan:Rg(),topsort:zg()}),Ju}var ec,fm;function Yn(){if(fm)return ec;fm=1;var n=H_();return ec={Graph:n.Graph,json:$_(),alg:X_(),version:n.version},ec}var nc,hm;function K_(){if(hm)return nc;hm=1;class n{constructor(){let s={};s._next=s._prev=s,this._sentinel=s}dequeue(){let s=this._sentinel,c=s._prev;if(c!==s)return r(c),c}enqueue(s){let c=this._sentinel;s._prev&&s._next&&r(s),s._next=c._next,c._next._prev=s,c._next=s,s._prev=c}toString(){let s=[],c=this._sentinel,u=c._prev;for(;u!==c;)s.push(JSON.stringify(u,o)),u=u._prev;return"["+s.join(", ")+"]"}}function r(l){l._prev._next=l._next,l._next._prev=l._prev,delete l._next,delete l._prev}function o(l,s){if(l!=="_next"&&l!=="_prev")return s}return nc=n,nc}var tc,pm;function Z_(){if(pm)return tc;pm=1;let n=Yn().Graph,r=K_();tc=l;let o=()=>1;function l(p,g){if(p.nodeCount()<=1)return[];let h=u(p,g||o);return s(h.graph,h.buckets,h.zeroIdx).flatMap(x=>p.outEdges(x.v,x.w))}function s(p,g,h){let v=[],x=g[g.length-1],w=g[0],C;for(;p.nodeCount();){for(;C=w.dequeue();)c(p,g,h,C);for(;C=x.dequeue();)c(p,g,h,C);if(p.nodeCount()){for(let S=g.length-2;S>0;--S)if(C=g[S].dequeue(),C){v=v.concat(c(p,g,h,C,!0));break}}}return v}function c(p,g,h,v,x){let w=x?[]:void 0;return p.inEdges(v.v).forEach(C=>{let S=p.edge(C),_=p.node(C.v);x&&w.push({v:C.v,w:C.w}),_.out-=S,d(g,h,_)}),p.outEdges(v.v).forEach(C=>{let S=p.edge(C),_=C.w,N=p.node(_);N.in-=S,d(g,h,N)}),p.removeNode(v.v),w}function u(p,g){let h=new n,v=0,x=0;p.nodes().forEach(S=>{h.setNode(S,{v:S,in:0,out:0})}),p.edges().forEach(S=>{let _=h.edge(S.v,S.w)||0,N=g(S),E=_+N;h.setEdge(S.v,S.w,E),x=Math.max(x,h.node(S.v).out+=N),v=Math.max(v,h.node(S.w).in+=N)});let w=f(x+v+3).map(()=>new r),C=v+1;return h.nodes().forEach(S=>{d(w,C,h.node(S))}),{graph:h,buckets:w,zeroIdx:C}}function d(p,g,h){h.out?h.in?p[h.out-h.in+g].enqueue(h):p[p.length-1].enqueue(h):p[0].enqueue(h)}function f(p){const g=[];for(let h=0;h<p;h++)g.push(h);return g}return tc}var rc,mm;function Ue(){if(mm)return rc;mm=1;let n=Yn().Graph;rc={addBorderNode:g,addDummyNode:r,applyWithChunking:x,asNonCompoundGraph:l,buildLayerMatrix:d,intersectRect:u,mapValues:L,maxRank:w,normalizeRanks:f,notime:_,partition:C,pick:R,predecessorWeights:c,range:b,removeEmptyRanks:p,simplify:o,successorWeights:s,time:S,uniqueId:E,zipObject:F};function r(P,A,$,I){for(var D=I;P.hasNode(D);)D=E(I);return $.dummy=A,P.setNode(D,$),D}function o(P){let A=new n().setGraph(P.graph());return P.nodes().forEach($=>A.setNode($,P.node($))),P.edges().forEach($=>{let I=A.edge($.v,$.w)||{weight:0,minlen:1},D=P.edge($);A.setEdge($.v,$.w,{weight:I.weight+D.weight,minlen:Math.max(I.minlen,D.minlen)})}),A}function l(P){let A=new n({multigraph:P.isMultigraph()}).setGraph(P.graph());return P.nodes().forEach($=>{P.children($).length||A.setNode($,P.node($))}),P.edges().forEach($=>{A.setEdge($,P.edge($))}),A}function s(P){let A=P.nodes().map($=>{let I={};return P.outEdges($).forEach(D=>{I[D.w]=(I[D.w]||0)+P.edge(D).weight}),I});return F(P.nodes(),A)}function c(P){let A=P.nodes().map($=>{let I={};return P.inEdges($).forEach(D=>{I[D.v]=(I[D.v]||0)+P.edge(D).weight}),I});return F(P.nodes(),A)}function u(P,A){let $=P.x,I=P.y,D=A.x-$,J=A.y-I,T=P.width/2,Y=P.height/2;if(!D&&!J)throw new Error("Not possible to find intersection inside of the rectangle");let U,G;return Math.abs(J)*T>Math.abs(D)*Y?(J<0&&(Y=-Y),U=Y*D/J,G=Y):(D<0&&(T=-T),U=T,G=T*J/D),{x:$+U,y:I+G}}function d(P){let A=b(w(P)+1).map(()=>[]);return P.nodes().forEach($=>{let I=P.node($),D=I.rank;D!==void 0&&(A[D][I.order]=$)}),A}function f(P){let A=P.nodes().map(I=>{let D=P.node(I).rank;return D===void 0?Number.MAX_VALUE:D}),$=x(Math.min,A);P.nodes().forEach(I=>{let D=P.node(I);Object.hasOwn(D,"rank")&&(D.rank-=$)})}function p(P){let A=P.nodes().map(T=>P.node(T).rank),$=x(Math.min,A),I=[];P.nodes().forEach(T=>{let Y=P.node(T).rank-$;I[Y]||(I[Y]=[]),I[Y].push(T)});let D=0,J=P.graph().nodeRankFactor;Array.from(I).forEach((T,Y)=>{T===void 0&&Y%J!==0?--D:T!==void 0&&D&&T.forEach(U=>P.node(U).rank+=D)})}function g(P,A,$,I){let D={width:0,height:0};return arguments.length>=4&&(D.rank=$,D.order=I),r(P,"border",D,A)}function h(P,A=v){const $=[];for(let I=0;I<P.length;I+=A){const D=P.slice(I,I+A);$.push(D)}return $}const v=65535;function x(P,A){if(A.length>v){const $=h(A);return P.apply(null,$.map(I=>P.apply(null,I)))}else return P.apply(null,A)}function w(P){const $=P.nodes().map(I=>{let D=P.node(I).rank;return D===void 0?Number.MIN_VALUE:D});return x(Math.max,$)}function C(P,A){let $={lhs:[],rhs:[]};return P.forEach(I=>{A(I)?$.lhs.push(I):$.rhs.push(I)}),$}function S(P,A){let $=Date.now();try{return A()}finally{console.log(P+" time: "+(Date.now()-$)+"ms")}}function _(P,A){return A()}let N=0;function E(P){var A=++N;return P+(""+A)}function b(P,A,$=1){A==null&&(A=P,P=0);let I=J=>J<A;$<0&&(I=J=>A<J);const D=[];for(let J=P;I(J);J+=$)D.push(J);return D}function R(P,A){const $={};for(const I of A)P[I]!==void 0&&($[I]=P[I]);return $}function L(P,A){let $=A;return typeof A=="string"&&($=I=>I[A]),Object.entries(P).reduce((I,[D,J])=>(I[D]=$(J,D),I),{})}function F(P,A){return P.reduce(($,I,D)=>($[I]=A[D],$),{})}return rc}var ic,gm;function J_(){if(gm)return ic;gm=1;let n=Z_(),r=Ue().uniqueId;ic={run:o,undo:s};function o(c){(c.graph().acyclicer==="greedy"?n(c,d(c)):l(c)).forEach(f=>{let p=c.edge(f);c.removeEdge(f),p.forwardName=f.name,p.reversed=!0,c.setEdge(f.w,f.v,p,r("rev"))});function d(f){return p=>f.edge(p).weight}}function l(c){let u=[],d={},f={};function p(g){Object.hasOwn(f,g)||(f[g]=!0,d[g]=!0,c.outEdges(g).forEach(h=>{Object.hasOwn(d,h.w)?u.push(h):p(h.w)}),delete d[g])}return c.nodes().forEach(p),u}function s(c){c.edges().forEach(u=>{let d=c.edge(u);if(d.reversed){c.removeEdge(u);let f=d.forwardName;delete d.reversed,delete d.forwardName,c.setEdge(u.w,u.v,d,f)}})}return ic}var oc,ym;function ek(){if(ym)return oc;ym=1;let n=Ue();oc={run:r,undo:l};function r(s){s.graph().dummyChains=[],s.edges().forEach(c=>o(s,c))}function o(s,c){let u=c.v,d=s.node(u).rank,f=c.w,p=s.node(f).rank,g=c.name,h=s.edge(c),v=h.labelRank;if(p===d+1)return;s.removeEdge(c);let x,w,C;for(C=0,++d;d<p;++C,++d)h.points=[],w={width:0,height:0,edgeLabel:h,edgeObj:c,rank:d},x=n.addDummyNode(s,"edge",w,"_d"),d===v&&(w.width=h.width,w.height=h.height,w.dummy="edge-label",w.labelpos=h.labelpos),s.setEdge(u,x,{weight:h.weight},g),C===0&&s.graph().dummyChains.push(x),u=x;s.setEdge(u,f,{weight:h.weight},g)}function l(s){s.graph().dummyChains.forEach(c=>{let u=s.node(c),d=u.edgeLabel,f;for(s.setEdge(u.edgeObj,d);u.dummy;)f=s.successors(c)[0],s.removeNode(c),d.points.push({x:u.x,y:u.y}),u.dummy==="edge-label"&&(d.x=u.x,d.y=u.y,d.width=u.width,d.height=u.height),c=f,u=s.node(c)})}return oc}var lc,vm;function ds(){if(vm)return lc;vm=1;const{applyWithChunking:n}=Ue();lc={longestPath:r,slack:o};function r(l){var s={};function c(u){var d=l.node(u);if(Object.hasOwn(s,u))return d.rank;s[u]=!0;let f=l.outEdges(u).map(g=>g==null?Number.POSITIVE_INFINITY:c(g.w)-l.edge(g).minlen);var p=n(Math.min,f);return p===Number.POSITIVE_INFINITY&&(p=0),d.rank=p}l.sources().forEach(c)}function o(l,s){return l.node(s.w).rank-l.node(s.v).rank-l.edge(s).minlen}return lc}var sc,xm;function Og(){if(xm)return sc;xm=1;var n=Yn().Graph,r=ds().slack;sc=o;function o(u){var d=new n({directed:!1}),f=u.nodes()[0],p=u.nodeCount();d.setNode(f,{});for(var g,h;l(d,u)<p;)g=s(d,u),h=d.hasNode(g.v)?r(u,g):-r(u,g),c(d,u,h);return d}function l(u,d){function f(p){d.nodeEdges(p).forEach(g=>{var h=g.v,v=p===h?g.w:h;!u.hasNode(v)&&!r(d,g)&&(u.setNode(v,{}),u.setEdge(p,v,{}),f(v))})}return u.nodes().forEach(f),u.nodeCount()}function s(u,d){return d.edges().reduce((p,g)=>{let h=Number.POSITIVE_INFINITY;return u.hasNode(g.v)!==u.hasNode(g.w)&&(h=r(d,g)),h<p[0]?[h,g]:p},[Number.POSITIVE_INFINITY,null])[1]}function c(u,d,f){u.nodes().forEach(p=>d.node(p).rank+=f)}return sc}var ac,wm;function nk(){if(wm)return ac;wm=1;var n=Og(),r=ds().slack,o=ds().longestPath,l=Yn().alg.preorder,s=Yn().alg.postorder,c=Ue().simplify;ac=u,u.initLowLimValues=g,u.initCutValues=d,u.calcCutValue=p,u.leaveEdge=v,u.enterEdge=x,u.exchangeEdges=w;function u(N){N=c(N),o(N);var E=n(N);g(E),d(E,N);for(var b,R;b=v(E);)R=x(E,N,b),w(E,N,b,R)}function d(N,E){var b=s(N,N.nodes());b=b.slice(0,b.length-1),b.forEach(R=>f(N,E,R))}function f(N,E,b){var R=N.node(b),L=R.parent;N.edge(b,L).cutvalue=p(N,E,b)}function p(N,E,b){var R=N.node(b),L=R.parent,F=!0,P=E.edge(b,L),A=0;return P||(F=!1,P=E.edge(L,b)),A=P.weight,E.nodeEdges(b).forEach($=>{var I=$.v===b,D=I?$.w:$.v;if(D!==L){var J=I===F,T=E.edge($).weight;if(A+=J?T:-T,S(N,b,D)){var Y=N.edge(b,D).cutvalue;A+=J?-Y:Y}}}),A}function g(N,E){arguments.length<2&&(E=N.nodes()[0]),h(N,{},1,E)}function h(N,E,b,R,L){var F=b,P=N.node(R);return E[R]=!0,N.neighbors(R).forEach(A=>{Object.hasOwn(E,A)||(b=h(N,E,b,A,R))}),P.low=F,P.lim=b++,L?P.parent=L:delete P.parent,b}function v(N){return N.edges().find(E=>N.edge(E).cutvalue<0)}function x(N,E,b){var R=b.v,L=b.w;E.hasEdge(R,L)||(R=b.w,L=b.v);var F=N.node(R),P=N.node(L),A=F,$=!1;F.lim>P.lim&&(A=P,$=!0);var I=E.edges().filter(D=>$===_(N,N.node(D.v),A)&&$!==_(N,N.node(D.w),A));return I.reduce((D,J)=>r(E,J)<r(E,D)?J:D)}function w(N,E,b,R){var L=b.v,F=b.w;N.removeEdge(L,F),N.setEdge(R.v,R.w,{}),g(N),d(N,E),C(N,E)}function C(N,E){var b=N.nodes().find(L=>!E.node(L).parent),R=l(N,b);R=R.slice(1),R.forEach(L=>{var F=N.node(L).parent,P=E.edge(L,F),A=!1;P||(P=E.edge(F,L),A=!0),E.node(L).rank=E.node(F).rank+(A?P.minlen:-P.minlen)})}function S(N,E,b){return N.hasEdge(E,b)}function _(N,E,b){return b.low<=E.lim&&E.lim<=b.lim}return ac}var uc,Sm;function tk(){if(Sm)return uc;Sm=1;var n=ds(),r=n.longestPath,o=Og(),l=nk();uc=s;function s(f){var p=f.graph().ranker;if(p instanceof Function)return p(f);switch(f.graph().ranker){case"network-simplex":d(f);break;case"tight-tree":u(f);break;case"longest-path":c(f);break;case"none":break;default:d(f)}}var c=r;function u(f){r(f),o(f)}function d(f){l(f)}return uc}var cc,Em;function rk(){if(Em)return cc;Em=1,cc=n;function n(l){let s=o(l);l.graph().dummyChains.forEach(c=>{let u=l.node(c),d=u.edgeObj,f=r(l,s,d.v,d.w),p=f.path,g=f.lca,h=0,v=p[h],x=!0;for(;c!==d.w;){if(u=l.node(c),x){for(;(v=p[h])!==g&&l.node(v).maxRank<u.rank;)h++;v===g&&(x=!1)}if(!x){for(;h<p.length-1&&l.node(v=p[h+1]).minRank<=u.rank;)h++;v=p[h]}l.setParent(c,v),c=l.successors(c)[0]}})}function r(l,s,c,u){let d=[],f=[],p=Math.min(s[c].low,s[u].low),g=Math.max(s[c].lim,s[u].lim),h,v;h=c;do h=l.parent(h),d.push(h);while(h&&(s[h].low>p||g>s[h].lim));for(v=h,h=u;(h=l.parent(h))!==v;)f.push(h);return{path:d.concat(f.reverse()),lca:v}}function o(l){let s={},c=0;function u(d){let f=c;l.children(d).forEach(u),s[d]={low:f,lim:c++}}return l.children().forEach(u),s}return cc}var dc,_m;function ik(){if(_m)return dc;_m=1;let n=Ue();dc={run:r,cleanup:c};function r(u){let d=n.addDummyNode(u,"root",{},"_root"),f=l(u),p=Object.values(f),g=n.applyWithChunking(Math.max,p)-1,h=2*g+1;u.graph().nestingRoot=d,u.edges().forEach(x=>u.edge(x).minlen*=h);let v=s(u)+1;u.children().forEach(x=>o(u,d,h,v,g,f,x)),u.graph().nodeRankFactor=h}function o(u,d,f,p,g,h,v){let x=u.children(v);if(!x.length){v!==d&&u.setEdge(d,v,{weight:0,minlen:f});return}let w=n.addBorderNode(u,"_bt"),C=n.addBorderNode(u,"_bb"),S=u.node(v);u.setParent(w,v),S.borderTop=w,u.setParent(C,v),S.borderBottom=C,x.forEach(_=>{o(u,d,f,p,g,h,_);let N=u.node(_),E=N.borderTop?N.borderTop:_,b=N.borderBottom?N.borderBottom:_,R=N.borderTop?p:2*p,L=E!==b?1:g-h[v]+1;u.setEdge(w,E,{weight:R,minlen:L,nestingEdge:!0}),u.setEdge(b,C,{weight:R,minlen:L,nestingEdge:!0})}),u.parent(v)||u.setEdge(d,w,{weight:0,minlen:g+h[v]})}function l(u){var d={};function f(p,g){var h=u.children(p);h&&h.length&&h.forEach(v=>f(v,g+1)),d[p]=g}return u.children().forEach(p=>f(p,1)),d}function s(u){return u.edges().reduce((d,f)=>d+u.edge(f).weight,0)}function c(u){var d=u.graph();u.removeNode(d.nestingRoot),delete d.nestingRoot,u.edges().forEach(f=>{var p=u.edge(f);p.nestingEdge&&u.removeEdge(f)})}return dc}var fc,km;function ok(){if(km)return fc;km=1;let n=Ue();fc=r;function r(l){function s(c){let u=l.children(c),d=l.node(c);if(u.length&&u.forEach(s),Object.hasOwn(d,"minRank")){d.borderLeft=[],d.borderRight=[];for(let f=d.minRank,p=d.maxRank+1;f<p;++f)o(l,"borderLeft","_bl",c,d,f),o(l,"borderRight","_br",c,d,f)}}l.children().forEach(s)}function o(l,s,c,u,d,f){let p={width:0,height:0,rank:f,borderType:s},g=d[s][f-1],h=n.addDummyNode(l,"border",p,c);d[s][f]=h,l.setParent(h,u),g&&l.setEdge(g,h,{weight:1})}return fc}var hc,Cm;function lk(){if(Cm)return hc;Cm=1,hc={adjust:n,undo:r};function n(f){let p=f.graph().rankdir.toLowerCase();(p==="lr"||p==="rl")&&o(f)}function r(f){let p=f.graph().rankdir.toLowerCase();(p==="bt"||p==="rl")&&s(f),(p==="lr"||p==="rl")&&(u(f),o(f))}function o(f){f.nodes().forEach(p=>l(f.node(p))),f.edges().forEach(p=>l(f.edge(p)))}function l(f){let p=f.width;f.width=f.height,f.height=p}function s(f){f.nodes().forEach(p=>c(f.node(p))),f.edges().forEach(p=>{let g=f.edge(p);g.points.forEach(c),Object.hasOwn(g,"y")&&c(g)})}function c(f){f.y=-f.y}function u(f){f.nodes().forEach(p=>d(f.node(p))),f.edges().forEach(p=>{let g=f.edge(p);g.points.forEach(d),Object.hasOwn(g,"x")&&d(g)})}function d(f){let p=f.x;f.x=f.y,f.y=p}return hc}var pc,bm;function sk(){if(bm)return pc;bm=1;let n=Ue();pc=r;function r(o){let l={},s=o.nodes().filter(g=>!o.children(g).length),c=s.map(g=>o.node(g).rank),u=n.applyWithChunking(Math.max,c),d=n.range(u+1).map(()=>[]);function f(g){if(l[g])return;l[g]=!0;let h=o.node(g);d[h.rank].push(g),o.successors(g).forEach(f)}return s.sort((g,h)=>o.node(g).rank-o.node(h).rank).forEach(f),d}return pc}var mc,Nm;function ak(){if(Nm)return mc;Nm=1;let n=Ue().zipObject;mc=r;function r(l,s){let c=0;for(let u=1;u<s.length;++u)c+=o(l,s[u-1],s[u]);return c}function o(l,s,c){let u=n(c,c.map((v,x)=>x)),d=s.flatMap(v=>l.outEdges(v).map(x=>({pos:u[x.w],weight:l.edge(x).weight})).sort((x,w)=>x.pos-w.pos)),f=1;for(;f<c.length;)f<<=1;let p=2*f-1;f-=1;let g=new Array(p).fill(0),h=0;return d.forEach(v=>{let x=v.pos+f;g[x]+=v.weight;let w=0;for(;x>0;)x%2&&(w+=g[x+1]),x=x-1>>1,g[x]+=v.weight;h+=v.weight*w}),h}return mc}var gc,Pm;function uk(){if(Pm)return gc;Pm=1,gc=n;function n(r,o=[]){return o.map(l=>{let s=r.inEdges(l);if(s.length){let c=s.reduce((u,d)=>{let f=r.edge(d),p=r.node(d.v);return{sum:u.sum+f.weight*p.order,weight:u.weight+f.weight}},{sum:0,weight:0});return{v:l,barycenter:c.sum/c.weight,weight:c.weight}}else return{v:l}})}return gc}var yc,Mm;function ck(){if(Mm)return yc;Mm=1;let n=Ue();yc=r;function r(s,c){let u={};s.forEach((f,p)=>{let g=u[f.v]={indegree:0,in:[],out:[],vs:[f.v],i:p};f.barycenter!==void 0&&(g.barycenter=f.barycenter,g.weight=f.weight)}),c.edges().forEach(f=>{let p=u[f.v],g=u[f.w];p!==void 0&&g!==void 0&&(g.indegree++,p.out.push(u[f.w]))});let d=Object.values(u).filter(f=>!f.indegree);return o(d)}function o(s){let c=[];function u(f){return p=>{p.merged||(p.barycenter===void 0||f.barycenter===void 0||p.barycenter>=f.barycenter)&&l(f,p)}}function d(f){return p=>{p.in.push(f),--p.indegree===0&&s.push(p)}}for(;s.length;){let f=s.pop();c.push(f),f.in.reverse().forEach(u(f)),f.out.forEach(d(f))}return c.filter(f=>!f.merged).map(f=>n.pick(f,["vs","i","barycenter","weight"]))}function l(s,c){let u=0,d=0;s.weight&&(u+=s.barycenter*s.weight,d+=s.weight),c.weight&&(u+=c.barycenter*c.weight,d+=c.weight),s.vs=c.vs.concat(s.vs),s.barycenter=u/d,s.weight=d,s.i=Math.min(c.i,s.i),c.merged=!0}return yc}var vc,Tm;function dk(){if(Tm)return vc;Tm=1;let n=Ue();vc=r;function r(s,c){let u=n.partition(s,w=>Object.hasOwn(w,"barycenter")),d=u.lhs,f=u.rhs.sort((w,C)=>C.i-w.i),p=[],g=0,h=0,v=0;d.sort(l(!!c)),v=o(p,f,v),d.forEach(w=>{v+=w.vs.length,p.push(w.vs),g+=w.barycenter*w.weight,h+=w.weight,v=o(p,f,v)});let x={vs:p.flat(!0)};return h&&(x.barycenter=g/h,x.weight=h),x}function o(s,c,u){let d;for(;c.length&&(d=c[c.length-1]).i<=u;)c.pop(),s.push(d.vs),u++;return u}function l(s){return(c,u)=>c.barycenter<u.barycenter?-1:c.barycenter>u.barycenter?1:s?u.i-c.i:c.i-u.i}return vc}var xc,Lm;function fk(){if(Lm)return xc;Lm=1;let n=uk(),r=ck(),o=dk();xc=l;function l(u,d,f,p){let g=u.children(d),h=u.node(d),v=h?h.borderLeft:void 0,x=h?h.borderRight:void 0,w={};v&&(g=g.filter(N=>N!==v&&N!==x));let C=n(u,g);C.forEach(N=>{if(u.children(N.v).length){let E=l(u,N.v,f,p);w[N.v]=E,Object.hasOwn(E,"barycenter")&&c(N,E)}});let S=r(C,f);s(S,w);let _=o(S,p);if(v&&(_.vs=[v,_.vs,x].flat(!0),u.predecessors(v).length)){let N=u.node(u.predecessors(v)[0]),E=u.node(u.predecessors(x)[0]);Object.hasOwn(_,"barycenter")||(_.barycenter=0,_.weight=0),_.barycenter=(_.barycenter*_.weight+N.order+E.order)/(_.weight+2),_.weight+=2}return _}function s(u,d){u.forEach(f=>{f.vs=f.vs.flatMap(p=>d[p]?d[p].vs:p)})}function c(u,d){u.barycenter!==void 0?(u.barycenter=(u.barycenter*u.weight+d.barycenter*d.weight)/(u.weight+d.weight),u.weight+=d.weight):(u.barycenter=d.barycenter,u.weight=d.weight)}return xc}var wc,Im;function hk(){if(Im)return wc;Im=1;let n=Yn().Graph,r=Ue();wc=o;function o(s,c,u,d){d||(d=s.nodes());let f=l(s),p=new n({compound:!0}).setGraph({root:f}).setDefaultNodeLabel(g=>s.node(g));return d.forEach(g=>{let h=s.node(g),v=s.parent(g);(h.rank===c||h.minRank<=c&&c<=h.maxRank)&&(p.setNode(g),p.setParent(g,v||f),s[u](g).forEach(x=>{let w=x.v===g?x.w:x.v,C=p.edge(w,g),S=C!==void 0?C.weight:0;p.setEdge(w,g,{weight:s.edge(x).weight+S})}),Object.hasOwn(h,"minRank")&&p.setNode(g,{borderLeft:h.borderLeft[c],borderRight:h.borderRight[c]}))}),p}function l(s){for(var c;s.hasNode(c=r.uniqueId("_root")););return c}return wc}var Sc,Am;function pk(){if(Am)return Sc;Am=1,Sc=n;function n(r,o,l){let s={},c;l.forEach(u=>{let d=r.parent(u),f,p;for(;d;){if(f=r.parent(d),f?(p=s[f],s[f]=d):(p=c,c=d),p&&p!==d){o.setEdge(p,d);return}d=f}})}return Sc}var Ec,Rm;function mk(){if(Rm)return Ec;Rm=1;let n=sk(),r=ak(),o=fk(),l=hk(),s=pk(),c=Yn().Graph,u=Ue();Ec=d;function d(h,v){if(v&&typeof v.customOrder=="function"){v.customOrder(h,d);return}let x=u.maxRank(h),w=f(h,u.range(1,x+1),"inEdges"),C=f(h,u.range(x-1,-1,-1),"outEdges"),S=n(h);if(g(h,S),v&&v.disableOptimalOrderHeuristic)return;let _=Number.POSITIVE_INFINITY,N;for(let E=0,b=0;b<4;++E,++b){p(E%2?w:C,E%4>=2),S=u.buildLayerMatrix(h);let R=r(h,S);R<_&&(b=0,N=Object.assign({},S),_=R)}g(h,N)}function f(h,v,x){const w=new Map,C=(S,_)=>{w.has(S)||w.set(S,[]),w.get(S).push(_)};for(const S of h.nodes()){const _=h.node(S);if(typeof _.rank=="number"&&C(_.rank,S),typeof _.minRank=="number"&&typeof _.maxRank=="number")for(let N=_.minRank;N<=_.maxRank;N++)N!==_.rank&&C(N,S)}return v.map(function(S){return l(h,S,x,w.get(S)||[])})}function p(h,v){let x=new c;h.forEach(function(w){let C=w.graph().root,S=o(w,C,x,v);S.vs.forEach((_,N)=>w.node(_).order=N),s(w,x,S.vs)})}function g(h,v){Object.values(v).forEach(x=>x.forEach((w,C)=>h.node(w).order=C))}return Ec}var _c,zm;function gk(){if(zm)return _c;zm=1;let n=Yn().Graph,r=Ue();_c={positionX:x,findType1Conflicts:o,findType2Conflicts:l,addConflict:c,hasConflict:u,verticalAlignment:d,horizontalCompaction:f,alignCoordinates:h,findSmallestWidthAlignment:g,balance:v};function o(S,_){let N={};function E(b,R){let L=0,F=0,P=b.length,A=R[R.length-1];return R.forEach(($,I)=>{let D=s(S,$),J=D?S.node(D).order:P;(D||$===A)&&(R.slice(F,I+1).forEach(T=>{S.predecessors(T).forEach(Y=>{let U=S.node(Y),G=U.order;(G<L||J<G)&&!(U.dummy&&S.node(T).dummy)&&c(N,Y,T)})}),F=I+1,L=J)}),R}return _.length&&_.reduce(E),N}function l(S,_){let N={};function E(R,L,F,P,A){let $;r.range(L,F).forEach(I=>{$=R[I],S.node($).dummy&&S.predecessors($).forEach(D=>{let J=S.node(D);J.dummy&&(J.order<P||J.order>A)&&c(N,D,$)})})}function b(R,L){let F=-1,P,A=0;return L.forEach(($,I)=>{if(S.node($).dummy==="border"){let D=S.predecessors($);D.length&&(P=S.node(D[0]).order,E(L,A,I,F,P),A=I,F=P)}E(L,A,L.length,P,R.length)}),L}return _.length&&_.reduce(b),N}function s(S,_){if(S.node(_).dummy)return S.predecessors(_).find(N=>S.node(N).dummy)}function c(S,_,N){if(_>N){let b=_;_=N,N=b}let E=S[_];E||(S[_]=E={}),E[N]=!0}function u(S,_,N){if(_>N){let E=_;_=N,N=E}return!!S[_]&&Object.hasOwn(S[_],N)}function d(S,_,N,E){let b={},R={},L={};return _.forEach(F=>{F.forEach((P,A)=>{b[P]=P,R[P]=P,L[P]=A})}),_.forEach(F=>{let P=-1;F.forEach(A=>{let $=E(A);if($.length){$=$.sort((D,J)=>L[D]-L[J]);let I=($.length-1)/2;for(let D=Math.floor(I),J=Math.ceil(I);D<=J;++D){let T=$[D];R[A]===A&&P<L[T]&&!u(N,A,T)&&(R[T]=A,R[A]=b[A]=b[T],P=L[T])}}})}),{root:b,align:R}}function f(S,_,N,E,b){let R={},L=p(S,_,N,b),F=b?"borderLeft":"borderRight";function P(I,D){let J=L.nodes(),T=J.pop(),Y={};for(;T;)Y[T]?I(T):(Y[T]=!0,J.push(T),J=J.concat(D(T))),T=J.pop()}function A(I){R[I]=L.inEdges(I).reduce((D,J)=>Math.max(D,R[J.v]+L.edge(J)),0)}function $(I){let D=L.outEdges(I).reduce((T,Y)=>Math.min(T,R[Y.w]-L.edge(Y)),Number.POSITIVE_INFINITY),J=S.node(I);D!==Number.POSITIVE_INFINITY&&J.borderType!==F&&(R[I]=Math.max(R[I],D))}return P(A,L.predecessors.bind(L)),P($,L.successors.bind(L)),Object.keys(E).forEach(I=>R[I]=R[N[I]]),R}function p(S,_,N,E){let b=new n,R=S.graph(),L=w(R.nodesep,R.edgesep,E);return _.forEach(F=>{let P;F.forEach(A=>{let $=N[A];if(b.setNode($),P){var I=N[P],D=b.edge(I,$);b.setEdge(I,$,Math.max(L(S,A,P),D||0))}P=A})}),b}function g(S,_){return Object.values(_).reduce((N,E)=>{let b=Number.NEGATIVE_INFINITY,R=Number.POSITIVE_INFINITY;Object.entries(E).forEach(([F,P])=>{let A=C(S,F)/2;b=Math.max(P+A,b),R=Math.min(P-A,R)});const L=b-R;return L<N[0]&&(N=[L,E]),N},[Number.POSITIVE_INFINITY,null])[1]}function h(S,_){let N=Object.values(_),E=r.applyWithChunking(Math.min,N),b=r.applyWithChunking(Math.max,N);["u","d"].forEach(R=>{["l","r"].forEach(L=>{let F=R+L,P=S[F];if(P===_)return;let A=Object.values(P),$=E-r.applyWithChunking(Math.min,A);L!=="l"&&($=b-r.applyWithChunking(Math.max,A)),$&&(S[F]=r.mapValues(P,I=>I+$))})})}function v(S,_){return r.mapValues(S.ul,(N,E)=>{if(_)return S[_.toLowerCase()][E];{let b=Object.values(S).map(R=>R[E]).sort((R,L)=>R-L);return(b[1]+b[2])/2}})}function x(S){let _=r.buildLayerMatrix(S),N=Object.assign(o(S,_),l(S,_)),E={},b;["u","d"].forEach(L=>{b=L==="u"?_:Object.values(_).reverse(),["l","r"].forEach(F=>{F==="r"&&(b=b.map(I=>Object.values(I).reverse()));let P=(L==="u"?S.predecessors:S.successors).bind(S),A=d(S,b,N,P),$=f(S,b,A.root,A.align,F==="r");F==="r"&&($=r.mapValues($,I=>-I)),E[L+F]=$})});let R=g(S,E);return h(E,R),v(E,S.graph().align)}function w(S,_,N){return(E,b,R)=>{let L=E.node(b),F=E.node(R),P=0,A;if(P+=L.width/2,Object.hasOwn(L,"labelpos"))switch(L.labelpos.toLowerCase()){case"l":A=-L.width/2;break;case"r":A=L.width/2;break}if(A&&(P+=N?A:-A),A=0,P+=(L.dummy?_:S)/2,P+=(F.dummy?_:S)/2,P+=F.width/2,Object.hasOwn(F,"labelpos"))switch(F.labelpos.toLowerCase()){case"l":A=F.width/2;break;case"r":A=-F.width/2;break}return A&&(P+=N?A:-A),A=0,P}}function C(S,_){return S.node(_).width}return _c}var kc,Dm;function yk(){if(Dm)return kc;Dm=1;let n=Ue(),r=gk().positionX;kc=o;function o(s){s=n.asNonCompoundGraph(s),l(s),Object.entries(r(s)).forEach(([c,u])=>s.node(c).x=u)}function l(s){let c=n.buildLayerMatrix(s),u=s.graph().ranksep,d=0;c.forEach(f=>{const p=f.reduce((g,h)=>{const v=s.node(h).height;return g>v?g:v},0);f.forEach(g=>s.node(g).y=d+p/2),d+=p+u})}return kc}var Cc,Om;function vk(){if(Om)return Cc;Om=1;let n=J_(),r=ek(),o=tk(),l=Ue().normalizeRanks,s=rk(),c=Ue().removeEmptyRanks,u=ik(),d=ok(),f=lk(),p=mk(),g=yk(),h=Ue(),v=Yn().Graph;Cc=x;function x(O,Q){let K=Q&&Q.debugTiming?h.time:h.notime;K("layout",()=>{let ie=K("  buildLayoutGraph",()=>P(O));K("  runLayout",()=>w(ie,K,Q)),K("  updateInputGraph",()=>C(O,ie))})}function w(O,Q,K){Q("    makeSpaceForEdgeLabels",()=>A(O)),Q("    removeSelfEdges",()=>W(O)),Q("    acyclic",()=>n.run(O)),Q("    nestingGraph.run",()=>u.run(O)),Q("    rank",()=>o(h.asNonCompoundGraph(O))),Q("    injectEdgeLabelProxies",()=>$(O)),Q("    removeEmptyRanks",()=>c(O)),Q("    nestingGraph.cleanup",()=>u.cleanup(O)),Q("    normalizeRanks",()=>l(O)),Q("    assignRankMinMax",()=>I(O)),Q("    removeEdgeLabelProxies",()=>D(O)),Q("    normalize.run",()=>r.run(O)),Q("    parentDummyChains",()=>s(O)),Q("    addBorderSegments",()=>d(O)),Q("    order",()=>p(O,K)),Q("    insertSelfEdges",()=>B(O)),Q("    adjustCoordinateSystem",()=>f.adjust(O)),Q("    position",()=>g(O)),Q("    positionSelfEdges",()=>X(O)),Q("    removeBorderNodes",()=>G(O)),Q("    normalize.undo",()=>r.undo(O)),Q("    fixupEdgeLabelCoords",()=>Y(O)),Q("    undoCoordinateSystem",()=>f.undo(O)),Q("    translateGraph",()=>J(O)),Q("    assignNodeIntersects",()=>T(O)),Q("    reversePoints",()=>U(O)),Q("    acyclic.undo",()=>n.undo(O))}function C(O,Q){O.nodes().forEach(K=>{let ie=O.node(K),le=Q.node(K);ie&&(ie.x=le.x,ie.y=le.y,ie.rank=le.rank,Q.children(K).length&&(ie.width=le.width,ie.height=le.height))}),O.edges().forEach(K=>{let ie=O.edge(K),le=Q.edge(K);ie.points=le.points,Object.hasOwn(le,"x")&&(ie.x=le.x,ie.y=le.y)}),O.graph().width=Q.graph().width,O.graph().height=Q.graph().height}let S=["nodesep","edgesep","ranksep","marginx","marginy"],_={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},N=["acyclicer","ranker","rankdir","align"],E=["width","height","rank"],b={width:0,height:0},R=["minlen","weight","width","height","labeloffset"],L={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},F=["labelpos"];function P(O){let Q=new v({multigraph:!0,compound:!0}),K=j(O.graph());return Q.setGraph(Object.assign({},_,M(K,S),h.pick(K,N))),O.nodes().forEach(ie=>{let le=j(O.node(ie));const Z=M(le,E);Object.keys(b).forEach(oe=>{Z[oe]===void 0&&(Z[oe]=b[oe])}),Q.setNode(ie,Z),Q.setParent(ie,O.parent(ie))}),O.edges().forEach(ie=>{let le=j(O.edge(ie));Q.setEdge(ie,Object.assign({},L,M(le,R),h.pick(le,F)))}),Q}function A(O){let Q=O.graph();Q.ranksep/=2,O.edges().forEach(K=>{let ie=O.edge(K);ie.minlen*=2,ie.labelpos.toLowerCase()!=="c"&&(Q.rankdir==="TB"||Q.rankdir==="BT"?ie.width+=ie.labeloffset:ie.height+=ie.labeloffset)})}function $(O){O.edges().forEach(Q=>{let K=O.edge(Q);if(K.width&&K.height){let ie=O.node(Q.v),Z={rank:(O.node(Q.w).rank-ie.rank)/2+ie.rank,e:Q};h.addDummyNode(O,"edge-proxy",Z,"_ep")}})}function I(O){let Q=0;O.nodes().forEach(K=>{let ie=O.node(K);ie.borderTop&&(ie.minRank=O.node(ie.borderTop).rank,ie.maxRank=O.node(ie.borderBottom).rank,Q=Math.max(Q,ie.maxRank))}),O.graph().maxRank=Q}function D(O){O.nodes().forEach(Q=>{let K=O.node(Q);K.dummy==="edge-proxy"&&(O.edge(K.e).labelRank=K.rank,O.removeNode(Q))})}function J(O){let Q=Number.POSITIVE_INFINITY,K=0,ie=Number.POSITIVE_INFINITY,le=0,Z=O.graph(),oe=Z.marginx||0,fe=Z.marginy||0;function xe(he){let de=he.x,_e=he.y,be=he.width,Ne=he.height;Q=Math.min(Q,de-be/2),K=Math.max(K,de+be/2),ie=Math.min(ie,_e-Ne/2),le=Math.max(le,_e+Ne/2)}O.nodes().forEach(he=>xe(O.node(he))),O.edges().forEach(he=>{let de=O.edge(he);Object.hasOwn(de,"x")&&xe(de)}),Q-=oe,ie-=fe,O.nodes().forEach(he=>{let de=O.node(he);de.x-=Q,de.y-=ie}),O.edges().forEach(he=>{let de=O.edge(he);de.points.forEach(_e=>{_e.x-=Q,_e.y-=ie}),Object.hasOwn(de,"x")&&(de.x-=Q),Object.hasOwn(de,"y")&&(de.y-=ie)}),Z.width=K-Q+oe,Z.height=le-ie+fe}function T(O){O.edges().forEach(Q=>{let K=O.edge(Q),ie=O.node(Q.v),le=O.node(Q.w),Z,oe;K.points?(Z=K.points[0],oe=K.points[K.points.length-1]):(K.points=[],Z=le,oe=ie),K.points.unshift(h.intersectRect(ie,Z)),K.points.push(h.intersectRect(le,oe))})}function Y(O){O.edges().forEach(Q=>{let K=O.edge(Q);if(Object.hasOwn(K,"x"))switch((K.labelpos==="l"||K.labelpos==="r")&&(K.width-=K.labeloffset),K.labelpos){case"l":K.x-=K.width/2+K.labeloffset;break;case"r":K.x+=K.width/2+K.labeloffset;break}})}function U(O){O.edges().forEach(Q=>{let K=O.edge(Q);K.reversed&&K.points.reverse()})}function G(O){O.nodes().forEach(Q=>{if(O.children(Q).length){let K=O.node(Q),ie=O.node(K.borderTop),le=O.node(K.borderBottom),Z=O.node(K.borderLeft[K.borderLeft.length-1]),oe=O.node(K.borderRight[K.borderRight.length-1]);K.width=Math.abs(oe.x-Z.x),K.height=Math.abs(le.y-ie.y),K.x=Z.x+K.width/2,K.y=ie.y+K.height/2}}),O.nodes().forEach(Q=>{O.node(Q).dummy==="border"&&O.removeNode(Q)})}function W(O){O.edges().forEach(Q=>{if(Q.v===Q.w){var K=O.node(Q.v);K.selfEdges||(K.selfEdges=[]),K.selfEdges.push({e:Q,label:O.edge(Q)}),O.removeEdge(Q)}})}function B(O){var Q=h.buildLayerMatrix(O);Q.forEach(K=>{var ie=0;K.forEach((le,Z)=>{var oe=O.node(le);oe.order=Z+ie,(oe.selfEdges||[]).forEach(fe=>{h.addDummyNode(O,"selfedge",{width:fe.label.width,height:fe.label.height,rank:oe.rank,order:Z+ ++ie,e:fe.e,label:fe.label},"_se")}),delete oe.selfEdges})})}function X(O){O.nodes().forEach(Q=>{var K=O.node(Q);if(K.dummy==="selfedge"){var ie=O.node(K.e.v),le=ie.x+ie.width/2,Z=ie.y,oe=K.x-le,fe=ie.height/2;O.setEdge(K.e,K.label),O.removeNode(Q),K.label.points=[{x:le+2*oe/3,y:Z-fe},{x:le+5*oe/6,y:Z-fe},{x:le+oe,y:Z},{x:le+5*oe/6,y:Z+fe},{x:le+2*oe/3,y:Z+fe}],K.label.x=K.x,K.label.y=K.y}})}function M(O,Q){return h.mapValues(h.pick(O,Q),Number)}function j(O){var Q={};return O&&Object.entries(O).forEach(([K,ie])=>{typeof K=="string"&&(K=K.toLowerCase()),Q[K]=ie}),Q}return Cc}var bc,Fm;function xk(){if(Fm)return bc;Fm=1;let n=Ue(),r=Yn().Graph;bc={debugOrdering:o};function o(l){let s=n.buildLayerMatrix(l),c=new r({compound:!0,multigraph:!0}).setGraph({});return l.nodes().forEach(u=>{c.setNode(u,{label:u}),c.setParent(u,"layer"+l.node(u).rank)}),l.edges().forEach(u=>c.setEdge(u.v,u.w,{},u.name)),s.forEach((u,d)=>{let f="layer"+d;c.setNode(f,{rank:"same"}),u.reduce((p,g)=>(c.setEdge(p,g,{style:"invis"}),g))}),c}return bc}var Nc,jm;function wk(){return jm||(jm=1,Nc="1.1.8"),Nc}var Pc,Hm;function Sk(){return Hm||(Hm=1,Pc={graphlib:Yn(),layout:vk(),debug:xk(),util:{time:Ue().time,notime:Ue().notime},version:wk()}),Pc}var Ek=Sk();const $m=Vc(Ek),Bm=200,Vm=44;function Fg(n,r,o=null,l=0,s={nodes:[],edges:[]}){const c=!!(n.children&&n.children.length>0),u=r.has(n.id);return s.nodes.push({id:n.id,type:"mindMapNode",data:{label:n.label,depth:l,hasChildren:c,isCollapsed:u,explanation:n.explanation||null},position:{x:0,y:0}}),o&&s.edges.push({id:`e-${o}-${n.id}`,source:o,target:n.id,type:"smoothstep",style:{stroke:"#94a3b8",strokeWidth:1.5}}),c&&!u&&n.children.forEach(d=>Fg(d,r,n.id,l+1,s)),s}function _k(n,r){const o=new $m.graphlib.Graph;return o.setDefaultEdgeLabel(()=>({})),o.setGraph({rankdir:"LR",nodesep:16,ranksep:60,marginx:20,marginy:20}),n.forEach(l=>o.setNode(l.id,{width:Bm,height:Vm})),r.forEach(l=>o.setEdge(l.source,l.target)),$m.layout(o),n.map(l=>({...l,position:{x:o.node(l.id).x-Bm/2,y:o.node(l.id).y-Vm/2}}))}const Wm=/\d+(?:\.\d+)?\s?(?:mm|cm|m³|m²|m|MPa|kg|%|일|시간|층|개|배|t|tf|°C)/g;function kk(n){const o=(n.explanation||"").split(`
`),l=(n.label||"").replace(/\s*\(.*?\)\s*/g,"").trim(),s=[];o.forEach((u,d)=>{if(u.startsWith("▶")||u.trim()==="")return;if(l.length>=2){let p=u.indexOf(l);for(;p!==-1;)s.push({lineIndex:d,start:p,end:p+l.length,answer:l,priority:0}),p=u.indexOf(l,p+l.length)}let f;for(Wm.lastIndex=0;(f=Wm.exec(u))!==null;)s.push({lineIndex:d,start:f.index,end:f.index+f[0].length,answer:f[0],priority:1})}),s.sort((u,d)=>u.lineIndex-d.lineIndex||u.start-d.start);const c=[];return s.forEach(u=>{c.find(f=>f.lineIndex===u.lineIndex&&u.start<f.end&&u.end>f.start)||c.push(u)}),c}function Qm(n){return(n||"").replace(/\s+/g,"").replace(/[을를이가은는도와과의에서로부터까지만]+$/g,"").toLowerCase()}function fs(n,r){const o=Qm(n),l=Qm(r);return!o||!l?!1:o.includes(l)||l.includes(o)}function jg(n,r){if(n.id===r)return n;if(!n.children)return null;for(const o of n.children){const l=jg(o,r);if(l)return l}return null}function Hg(n,r,o=[]){if(n.id===r)return o;if(!n.children)return null;for(const l of n.children){const s=Hg(l,r,[...o,n.id]);if(s)return s}return null}const Ck={mindMapNode:F_};function bk(n){return n?n.split(`
`).map((r,o)=>{if(r.trim()==="")return V.jsx("div",{style:{height:10}},o);if(r.startsWith("★")||r.startsWith("▶")&&r.includes("시험"))return V.jsx("div",{style:{background:"#fffbeb",border:"1.5px solid #f59e0b",borderLeft:"4px solid #f59e0b",borderRadius:8,padding:"9px 13px",marginTop:14,color:"#92400e",fontWeight:700,fontSize:13,lineHeight:1.7},children:r},o);if(r.startsWith("▶"))return V.jsx("div",{style:{color:"#2563eb",fontWeight:700,fontSize:14,marginTop:18,marginBottom:2,paddingBottom:4,borderBottom:"1.5px solid #dbeafe"},children:r},o);if(r.trimStart().startsWith("•")||r.trimStart().startsWith("-")){const l=r.length-r.trimStart().length;return V.jsxs("div",{style:{display:"flex",gap:7,paddingLeft:l>0?20:0,marginTop:3,lineHeight:1.7},children:[V.jsx("span",{style:{color:"#3b82f6",fontWeight:700,flexShrink:0,marginTop:1},children:"•"}),V.jsx("span",{style:{color:"#1e293b",fontSize:13},children:r.trimStart().slice(1).trim()})]},o)}return V.jsx("div",{style:{color:"#374151",fontSize:13,lineHeight:1.75,marginTop:2},children:r},o)}):null}function Nk(n,r,o,l,s){if(!r.length)return n;const c=[];let u=0;return r.forEach(d=>{d.start>u&&c.push(n.slice(u,d.start));const f=o[d.key]||"";if(l){const p=fs(f,d.answer);c.push(V.jsx("span",{style:{background:p?"#dcfce7":"#fee2e2",color:p?"#15803d":"#dc2626",padding:"1px 6px",borderRadius:5,fontWeight:700,textDecoration:p?"none":"line-through"},children:f||"(빈칸)"},d.key)),p||c.push(V.jsxs("span",{style:{color:"#15803d",fontWeight:700,marginLeft:4},children:["→ ",d.answer]},d.key+"-a"))}else c.push(V.jsx("input",{value:f,onChange:p=>s(d.key,p.target.value),style:{width:Math.max(50,d.answer.length*11),display:"inline-block",border:"none",borderBottom:"2px solid #3b82f6",background:"#eff6ff",font:"inherit",fontSize:13,padding:"0 4px",margin:"0 2px",outline:"none"}},d.key));u=d.end}),u<n.length&&c.push(n.slice(u)),c}function Pk({node:n}){const r=re.useMemo(()=>kk(n).map((f,p)=>({...f,key:`b${p}`})),[n]),[o,l]=re.useState({}),[s,c]=re.useState(!1),u=(f,p)=>l(g=>({...g,[f]:p}));if(!r.length)return V.jsx("div",{style:{color:"#64748b",fontSize:13,padding:"20px 0",textAlign:"center"},children:"이 노드에는 빈칸으로 만들 핵심 용어·숫자가 없습니다."});const d=r.filter(f=>fs(o[f.key]||"",f.answer)).length;return V.jsxs("div",{children:[(n.explanation||"").split(`
`).map((f,p)=>{if(f.trim()==="")return V.jsx("div",{style:{height:10}},p);if(f.startsWith("★")||f.startsWith("▶")&&f.includes("시험"))return V.jsx("div",{style:{background:"#fffbeb",border:"1.5px solid #f59e0b",borderLeft:"4px solid #f59e0b",borderRadius:8,padding:"9px 13px",marginTop:14,color:"#92400e",fontWeight:700,fontSize:13,lineHeight:1.7},children:f},p);if(f.startsWith("▶"))return V.jsx("div",{style:{color:"#2563eb",fontWeight:700,fontSize:14,marginTop:18,marginBottom:2,paddingBottom:4,borderBottom:"1.5px solid #dbeafe"},children:f},p);const g=r.filter(v=>v.lineIndex===p),h=Nk(f,g,o,s,u);if(f.trimStart().startsWith("•")||f.trimStart().startsWith("-")){const v=f.length-f.trimStart().length;return V.jsxs("div",{style:{display:"flex",gap:7,paddingLeft:v>0?20:0,marginTop:3,lineHeight:1.7},children:[V.jsx("span",{style:{color:"#3b82f6",fontWeight:700,flexShrink:0,marginTop:1},children:"•"}),V.jsx("span",{style:{color:"#1e293b",fontSize:13},children:h})]},p)}return V.jsx("div",{style:{color:"#374151",fontSize:13,lineHeight:1.75,marginTop:2},children:h},p)}),V.jsx("div",{style:{marginTop:18,paddingTop:14,borderTop:"1.5px solid #e2e8f0"},children:s?V.jsxs("div",{style:{textAlign:"center",fontWeight:700,color:"#15803d",fontSize:14},children:[d," / ",r.length," 정답 ",d===r.length?"🎉":""]}):V.jsx("button",{onClick:()=>c(!0),style:{width:"100%",padding:"10px 0",background:"#16a34a",color:"#fff",border:"none",borderRadius:8,fontWeight:700,fontSize:14,cursor:"pointer"},children:"✅ 채점하기"})})]})}function Mk({node:n}){const r=(n.explanation||"").split(`
`).map((p,g)=>{if(p.trim()==="")return{type:"empty",key:`e${g}`};if(p.startsWith("★")||p.startsWith("▶")&&p.includes("시험"))return{type:"exam",key:`x${g}`,content:p};if(p.startsWith("▶"))return{type:"header",key:`h${g}`,content:p};const h=p.trimStart().startsWith("•")||p.trimStart().startsWith("-")?p.trimStart().slice(1).trim():p;return{type:"blank",key:`b${g}`,answer:h}}),o=r.filter(p=>p.type==="blank"),[l,s]=re.useState({}),[c,u]=re.useState(!1),d=(p,g)=>s(h=>({...h,[p]:g})),f=o.filter(p=>fs(l[p.key]||"",p.answer)).length;return o.length?V.jsxs("div",{children:[r.map(p=>{if(p.type==="empty")return V.jsx("div",{style:{height:10}},p.key);if(p.type==="exam")return V.jsx("div",{style:{background:"#fffbeb",border:"1.5px solid #f59e0b",borderLeft:"4px solid #f59e0b",borderRadius:8,padding:"9px 13px",marginTop:14,color:"#92400e",fontWeight:700,fontSize:13,lineHeight:1.7},children:p.content},p.key);if(p.type==="header")return V.jsx("div",{style:{color:"#2563eb",fontWeight:700,fontSize:14,marginTop:18,marginBottom:2,paddingBottom:4,borderBottom:"1.5px solid #dbeafe"},children:p.content},p.key);if(c){const g=fs(l[p.key]||"",p.answer);return V.jsxs("div",{style:{marginTop:6},children:[V.jsx("div",{style:{background:g?"#dcfce7":"#fee2e2",borderRadius:8,padding:"7px 12px",fontSize:13,lineHeight:1.7,color:g?"#15803d":"#dc2626",textDecoration:g?"none":"line-through"},children:l[p.key]||"(빈칸)"}),!g&&V.jsxs("div",{style:{fontSize:12.5,color:"#15803d",fontWeight:700,marginTop:3,paddingLeft:4},children:["→ ",p.answer]})]},p.key)}return V.jsx("input",{value:l[p.key]||"",onChange:g=>d(p.key,g.target.value),placeholder:"문장을 입력하세요",style:{display:"block",width:"100%",marginTop:6,boxSizing:"border-box",border:"none",borderBottom:"2px solid #3b82f6",background:"#eff6ff",font:"inherit",fontSize:13,padding:"6px 8px",outline:"none",borderRadius:"4px 4px 0 0"}},p.key)}),V.jsx("div",{style:{marginTop:18,paddingTop:14,borderTop:"1.5px solid #e2e8f0"},children:c?V.jsxs("div",{style:{textAlign:"center",fontWeight:700,color:"#15803d",fontSize:14},children:[f," / ",o.length," 정답 ",f===o.length?"🎉":""]}):V.jsx("button",{onClick:()=>u(!0),style:{width:"100%",padding:"10px 0",background:"#16a34a",color:"#fff",border:"none",borderRadius:8,fontWeight:700,fontSize:14,cursor:"pointer"},children:"✅ 채점하기"})})]}):V.jsx("div",{style:{color:"#64748b",fontSize:13,padding:"20px 0",textAlign:"center"},children:"이 노드에는 빈 문장으로 만들 내용이 없습니다."})}function $g(n,r=new Set,o=!0){return n.children&&n.children.length>0&&(o||r.add(n.id),n.children.forEach(l=>$g(l,r,!1))),r}function Tk({onSelectNode:n}){const[r,o]=re.useState(()=>{const f=$g(Gl),p=new URLSearchParams(window.location.search).get("focus");return p&&((Hg(Gl,p)||[]).forEach(h=>f.delete(h)),f.delete(p)),f}),{fitView:l}=_s();re.useEffect(()=>{const f=new URLSearchParams(window.location.search).get("focus");if(!f)return;const p=jg(Gl,f);p&&(!p.children||!p.children.length)&&p.explanation&&(n(p),setTimeout(()=>l({duration:400,padding:.08}),60))},[]);const{nodes:s,edges:c}=re.useMemo(()=>Fg(Gl,r),[r]),u=re.useMemo(()=>_k(s,c),[s,c]),d=re.useCallback((f,p)=>{p.data.explanation&&n(p.data),p.data.hasChildren&&(o(g=>{const h=new Set(g);return h.has(p.id)?h.delete(p.id):h.add(p.id),h}),setTimeout(()=>l({duration:400,padding:.08}),30))},[l,n]);return V.jsxs(u_,{nodes:u,edges:c,nodeTypes:Ck,onNodeClick:d,fitView:!0,fitViewOptions:{padding:.08},minZoom:.05,maxZoom:2,nodesDraggable:!1,nodesConnectable:!1,elementsSelectable:!1,children:[V.jsx(p_,{color:"#e2e8f0",gap:24,size:1}),V.jsx(S_,{showInteractive:!1}),V.jsx(R_,{nodeColor:f=>{var g;const p=((g=f.data)==null?void 0:g.depth)??0;return p===0?"#1e3a5f":p===1?"#2563eb":p===2?"#60a5fa":"#dbeafe"},maskColor:"rgba(248, 250, 252, 0.7)"})]})}function Lk(){var v;const[n,r]=re.useState(null),[o,l]=re.useState(340),[s,c]=re.useState("view"),[u,d]=re.useState({nodeToQuestions:{},questionToNodes:{}}),[f,p]=re.useState({}),g=re.useRef(!1);re.useEffect(()=>{fetch("../linkMap.json").then(x=>x.json()).then(d).catch(()=>{}),fetch("../questions.json").then(x=>x.json()).then(x=>{const w={};(x.questions||[]).forEach(C=>{w[C.id]=C}),p(w)}).catch(()=>{})},[]);const h=re.useCallback(x=>{x.preventDefault(),g.current=!0;const w=x.clientX,C=o,S=N=>{if(!g.current)return;const E=Math.max(260,Math.min(window.innerWidth*.75,C+(w-N.clientX)));l(E)},_=()=>{g.current=!1,document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",_),document.body.style.cursor="",document.body.style.userSelect=""};document.body.style.cursor="ew-resize",document.body.style.userSelect="none",document.addEventListener("mousemove",S),document.addEventListener("mouseup",_)},[o]);return V.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#f8fafc",position:"relative"},children:[V.jsx("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",background:"#1e3a5f",color:"white",padding:"7px 24px",borderRadius:24,fontWeight:700,fontSize:15,zIndex:10,fontFamily:"Noto Sans KR, sans-serif",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",whiteSpace:"nowrap"},children:"🏗️ 건축시공 마인드맵"}),V.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",background:"rgba(30,58,95,0.08)",color:"#475569",padding:"5px 16px",borderRadius:12,fontSize:12,zIndex:10,fontFamily:"Noto Sans KR, sans-serif",whiteSpace:"nowrap"},children:"▶/▼ 클릭: 펼치기/접기  |  📖 클릭: 개념 설명 보기"}),V.jsx("div",{style:{position:"absolute",top:60,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,background:"#fff",borderRadius:20,padding:4,boxShadow:"0 2px 8px rgba(0,0,0,0.12)",zIndex:10,fontFamily:"Noto Sans KR, sans-serif"},children:[["view","📖 개념 보기"],["easy","✏️ 빈칸(쉬움)"],["hard","🔥 빈칸(어려움)"]].map(([x,w])=>V.jsx("button",{onClick:()=>c(x),style:{padding:"6px 14px",borderRadius:16,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",background:s===x?"#2563eb":"transparent",color:s===x?"#fff":"#475569"},children:w},x))}),V.jsx(Pg,{children:V.jsx(Tk,{onSelectNode:r})}),n&&V.jsxs(V.Fragment,{children:[V.jsx("div",{onClick:()=>r(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.15)",zIndex:999}}),V.jsxs("div",{style:{position:"fixed",right:0,top:0,width:o,height:"100vh",background:"#fff",boxShadow:"-4px 0 24px rgba(0,0,0,0.18)",zIndex:1e3,display:"flex",flexDirection:"column",fontFamily:"Noto Sans KR, sans-serif"},children:[V.jsx("div",{onMouseDown:h,style:{position:"absolute",left:0,top:0,width:6,height:"100%",cursor:"ew-resize",background:"transparent",zIndex:10},onMouseEnter:x=>x.currentTarget.style.background="rgba(37,99,235,0.18)",onMouseLeave:x=>x.currentTarget.style.background="transparent"}),V.jsxs("div",{style:{background:"#2563eb",color:"#fff",padding:"14px 16px",display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[V.jsxs("span",{style:{flex:1,fontWeight:700,fontSize:15,lineHeight:1.4},children:["📖 ",n.label]}),V.jsx("button",{onClick:()=>r(null),style:{background:"none",border:"none",color:"#fff",fontSize:20,cursor:"pointer",lineHeight:1,opacity:.85,padding:"2px 4px"},children:"✕"})]}),V.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"18px 16px"},children:[s==="view"?bk(n.explanation):s==="easy"?V.jsx(Pk,{node:n},n.id+s):V.jsx(Mk,{node:n},n.id+s),((v=u.nodeToQuestions[n.id])==null?void 0:v.length)>0&&V.jsxs("div",{style:{marginTop:20,paddingTop:14,borderTop:"1.5px solid #e2e8f0"},children:[V.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#475569",marginBottom:8},children:"🔗 관련 기출문제"}),u.nodeToQuestions[n.id].slice(0,2).map(x=>{const w=f[x];return w?V.jsxs("div",{onClick:()=>window.parent.postMessage({type:"openQuestion",id:x},window.location.origin),style:{padding:"10px 12px",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,marginBottom:6,cursor:"pointer",fontSize:12.5,lineHeight:1.6},children:[V.jsx("span",{style:{display:"inline-block",padding:"1px 8px",borderRadius:10,fontSize:11,fontWeight:700,background:"#dbeafe",color:"#1d4ed8",marginBottom:4},children:w.category}),V.jsxs("div",{style:{color:"#334155"},children:[w.question.slice(0,50).replace(/\n/g," "),w.question.length>50?"...":""]})]},x):null})]})]})]})]})]})}T1.createRoot(document.getElementById("root")).render(V.jsx(re.StrictMode,{children:V.jsx(Lk,{})}));
