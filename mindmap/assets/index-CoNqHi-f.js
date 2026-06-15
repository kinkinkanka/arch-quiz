var m1=Object.defineProperty;var g1=(n,r,o)=>r in n?m1(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o;var Ue=(n,r,o)=>g1(n,typeof r!="symbol"?r+"":r,o);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=o(l);fetch(l.href,c)}})();function $c(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gu={exports:{}},Zi={},yu={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function y1(){if(Th)return Ce;Th=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.iterator;function v(M){return M===null||typeof M!="object"?null:(M=h&&M[h]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function E(M,j,O){this.props=M,this.context=j,this.refs=C,this.updater=O||w}E.prototype.isReactComponent={},E.prototype.setState=function(M,j){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,j,"setState")},E.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function _(){}_.prototype=E.prototype;function b(M,j,O){this.props=M,this.context=j,this.refs=C,this.updater=O||w}var S=b.prototype=new _;S.constructor=b,x(S,E.prototype),S.isPureReactComponent=!0;var N=Array.isArray,z=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function P(M,j,O){var W,Q={},re=null,le=null;if(j!=null)for(W in j.ref!==void 0&&(le=j.ref),j.key!==void 0&&(re=""+j.key),j)z.call(j,W)&&!F.hasOwnProperty(W)&&(Q[W]=j[W]);var K=arguments.length-2;if(K===1)Q.children=O;else if(1<K){for(var oe=Array(K),de=0;de<K;de++)oe[de]=arguments[de+2];Q.children=oe}if(M&&M.defaultProps)for(W in K=M.defaultProps,K)Q[W]===void 0&&(Q[W]=K[W]);return{$$typeof:n,type:M,key:re,ref:le,props:Q,_owner:L.current}}function R(M,j){return{$$typeof:n,type:M.type,key:j,ref:M.ref,props:M.props,_owner:M._owner}}function $(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function I(M){var j={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(O){return j[O]})}var A=/\/+/g;function J(M,j){return typeof M=="object"&&M!==null&&M.key!=null?I(""+M.key):j.toString(36)}function T(M,j,O,W,Q){var re=typeof M;(re==="undefined"||re==="boolean")&&(M=null);var le=!1;if(M===null)le=!0;else switch(re){case"string":case"number":le=!0;break;case"object":switch(M.$$typeof){case n:case r:le=!0}}if(le)return le=M,Q=Q(le),M=W===""?"."+J(le,0):W,N(Q)?(O="",M!=null&&(O=M.replace(A,"$&/")+"/"),T(Q,j,O,"",function(de){return de})):Q!=null&&($(Q)&&(Q=R(Q,O+(!Q.key||le&&le.key===Q.key?"":(""+Q.key).replace(A,"$&/")+"/")+M)),j.push(Q)),1;if(le=0,W=W===""?".":W+":",N(M))for(var K=0;K<M.length;K++){re=M[K];var oe=W+J(re,K);le+=T(re,j,O,oe,Q)}else if(oe=v(M),typeof oe=="function")for(M=oe.call(M),K=0;!(re=M.next()).done;)re=re.value,oe=W+J(re,K++),le+=T(re,j,O,oe,Q);else if(re==="object")throw j=String(M),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return le}function Y(M,j,O){if(M==null)return M;var W=[],Q=0;return T(M,W,"","",function(re){return j.call(O,re,Q++)}),W}function U(M){if(M._status===-1){var j=M._result;j=j(),j.then(function(O){(M._status===0||M._status===-1)&&(M._status=1,M._result=O)},function(O){(M._status===0||M._status===-1)&&(M._status=2,M._result=O)}),M._status===-1&&(M._status=0,M._result=j)}if(M._status===1)return M._result.default;throw M._result}var X={current:null},B={transition:null},V={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:B,ReactCurrentOwner:L};function G(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Y,forEach:function(M,j,O){Y(M,function(){j.apply(this,arguments)},O)},count:function(M){var j=0;return Y(M,function(){j++}),j},toArray:function(M){return Y(M,function(j){return j})||[]},only:function(M){if(!$(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ce.Component=E,Ce.Fragment=o,Ce.Profiler=l,Ce.PureComponent=b,Ce.StrictMode=s,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,Ce.act=G,Ce.cloneElement=function(M,j,O){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var W=x({},M.props),Q=M.key,re=M.ref,le=M._owner;if(j!=null){if(j.ref!==void 0&&(re=j.ref,le=L.current),j.key!==void 0&&(Q=""+j.key),M.type&&M.type.defaultProps)var K=M.type.defaultProps;for(oe in j)z.call(j,oe)&&!F.hasOwnProperty(oe)&&(W[oe]=j[oe]===void 0&&K!==void 0?K[oe]:j[oe])}var oe=arguments.length-2;if(oe===1)W.children=O;else if(1<oe){K=Array(oe);for(var de=0;de<oe;de++)K[de]=arguments[de+2];W.children=K}return{$$typeof:n,type:M.type,key:Q,ref:re,props:W,_owner:le}},Ce.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:c,_context:M},M.Consumer=M},Ce.createElement=P,Ce.createFactory=function(M){var j=P.bind(null,M);return j.type=M,j},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:f,render:M}},Ce.isValidElement=$,Ce.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:U}},Ce.memo=function(M,j){return{$$typeof:g,type:M,compare:j===void 0?null:j}},Ce.startTransition=function(M){var j=B.transition;B.transition={};try{M()}finally{B.transition=j}},Ce.unstable_act=G,Ce.useCallback=function(M,j){return X.current.useCallback(M,j)},Ce.useContext=function(M){return X.current.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M){return X.current.useDeferredValue(M)},Ce.useEffect=function(M,j){return X.current.useEffect(M,j)},Ce.useId=function(){return X.current.useId()},Ce.useImperativeHandle=function(M,j,O){return X.current.useImperativeHandle(M,j,O)},Ce.useInsertionEffect=function(M,j){return X.current.useInsertionEffect(M,j)},Ce.useLayoutEffect=function(M,j){return X.current.useLayoutEffect(M,j)},Ce.useMemo=function(M,j){return X.current.useMemo(M,j)},Ce.useReducer=function(M,j,O){return X.current.useReducer(M,j,O)},Ce.useRef=function(M){return X.current.useRef(M)},Ce.useState=function(M){return X.current.useState(M)},Ce.useSyncExternalStore=function(M,j,O){return X.current.useSyncExternalStore(M,j,O)},Ce.useTransition=function(){return X.current.useTransition()},Ce.version="18.3.1",Ce}var Lh;function mo(){return Lh||(Lh=1,yu.exports=y1()),yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function v1(){if(Ih)return Zi;Ih=1;var n=mo(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var m,h={},v=null,w=null;g!==void 0&&(v=""+g),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(w=p.ref);for(m in p)s.call(p,m)&&!c.hasOwnProperty(m)&&(h[m]=p[m]);if(f&&f.defaultProps)for(m in p=f.defaultProps,p)h[m]===void 0&&(h[m]=p[m]);return{$$typeof:r,type:f,key:v,ref:w,props:h,_owner:l.current}}return Zi.Fragment=o,Zi.jsx=u,Zi.jsxs=u,Zi}var Rh;function w1(){return Rh||(Rh=1,gu.exports=v1()),gu.exports}var Z=w1(),ie=mo();const x1=$c(ie);var jl={},vu={exports:{}},vn={},wu={exports:{}},xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function E1(){return zh||(zh=1,(function(n){function r(B,V){var G=B.length;B.push(V);e:for(;0<G;){var M=G-1>>>1,j=B[M];if(0<l(j,V))B[M]=V,B[G]=j,G=M;else break e}}function o(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var V=B[0],G=B.pop();if(G!==V){B[0]=G;e:for(var M=0,j=B.length,O=j>>>1;M<O;){var W=2*(M+1)-1,Q=B[W],re=W+1,le=B[re];if(0>l(Q,G))re<j&&0>l(le,Q)?(B[M]=le,B[re]=G,M=re):(B[M]=Q,B[W]=G,M=W);else if(re<j&&0>l(le,G))B[M]=le,B[re]=G,M=re;else break e}}return V}function l(B,V){var G=B.sortIndex-V.sortIndex;return G!==0?G:B.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var p=[],g=[],m=1,h=null,v=3,w=!1,x=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(B){for(var V=o(g);V!==null;){if(V.callback===null)s(g);else if(V.startTime<=B)s(g),V.sortIndex=V.expirationTime,r(p,V);else break;V=o(g)}}function N(B){if(C=!1,S(B),!x)if(o(p)!==null)x=!0,U(z);else{var V=o(g);V!==null&&X(N,V.startTime-B)}}function z(B,V){x=!1,C&&(C=!1,_(P),P=-1),w=!0;var G=v;try{for(S(V),h=o(p);h!==null&&(!(h.expirationTime>V)||B&&!I());){var M=h.callback;if(typeof M=="function"){h.callback=null,v=h.priorityLevel;var j=M(h.expirationTime<=V);V=n.unstable_now(),typeof j=="function"?h.callback=j:h===o(p)&&s(p),S(V)}else s(p);h=o(p)}if(h!==null)var O=!0;else{var W=o(g);W!==null&&X(N,W.startTime-V),O=!1}return O}finally{h=null,v=G,w=!1}}var L=!1,F=null,P=-1,R=5,$=-1;function I(){return!(n.unstable_now()-$<R)}function A(){if(F!==null){var B=n.unstable_now();$=B;var V=!0;try{V=F(!0,B)}finally{V?J():(L=!1,F=null)}}else L=!1}var J;if(typeof b=="function")J=function(){b(A)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,Y=T.port2;T.port1.onmessage=A,J=function(){Y.postMessage(null)}}else J=function(){E(A,0)};function U(B){F=B,L||(L=!0,J())}function X(B,V){P=E(function(){B(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){x||w||(x=!0,U(z))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return o(p)},n.unstable_next=function(B){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var G=v;v=V;try{return B()}finally{v=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=v;v=B;try{return V()}finally{v=G}},n.unstable_scheduleCallback=function(B,V,G){var M=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?M+G:M):G=M,B){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=G+j,B={id:m++,callback:V,priorityLevel:B,startTime:G,expirationTime:j,sortIndex:-1},G>M?(B.sortIndex=G,r(g,B),o(p)===null&&B===o(g)&&(C?(_(P),P=-1):C=!0,X(N,G-M))):(B.sortIndex=j,r(p,B),x||w||(x=!0,U(z))),B},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(B){var V=v;return function(){var G=v;v=V;try{return B.apply(this,arguments)}finally{v=G}}}})(xu)),xu}var Dh;function S1(){return Dh||(Dh=1,wu.exports=E1()),wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function _1(){if(Ah)return vn;Ah=1;var n=mo(),r=S1();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},h={};function v(e){return p.call(h,e)?!0:p.call(m,e)?!1:g.test(e)?h[e]=!0:(m[e]=!0,!1)}function w(e,t,i,a){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x(e,t,i,a){if(t===null||typeof t>"u"||w(e,t,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,i,a,d,y,k){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=y,this.removeEmptyString=k}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];E[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_,b);E[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_,b);E[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_,b);E[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,i,a){var d=E.hasOwnProperty(t)?E[t]:null;(d!==null?d.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(x(t,i,d,a)&&(i=null),a||d===null?v(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):d.mustUseProperty?e[d.propertyName]=i===null?d.type===3?!1:"":i:(t=d.attributeName,a=d.attributeNamespace,i===null?e.removeAttribute(t):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,a?e.setAttributeNS(a,t,i):e.setAttribute(t,i))))}var N=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),I=Symbol.for("react.context"),A=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),B=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,M;function j(e){if(M===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return`
`+M+e}var O=!1;function W(e,t){if(!e||O)return"";O=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(te){var a=te}Reflect.construct(e,[],t)}else{try{t.call()}catch(te){a=te}e.call(t.prototype)}else{try{throw Error()}catch(te){a=te}e()}}catch(te){if(te&&a&&typeof te.stack=="string"){for(var d=te.stack.split(`
`),y=a.stack.split(`
`),k=d.length-1,D=y.length-1;1<=k&&0<=D&&d[k]!==y[D];)D--;for(;1<=k&&0<=D;k--,D--)if(d[k]!==y[D]){if(k!==1||D!==1)do if(k--,D--,0>D||d[k]!==y[D]){var H=`
`+d[k].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=k&&0<=D);break}}}finally{O=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?j(e):""}function Q(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1),e;case 11:return e=W(e.type.render,!1),e;case 1:return e=W(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case L:return"Portal";case R:return"Profiler";case P:return"StrictMode";case J:return"Suspense";case T:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case I:return(e.displayName||"Context")+".Consumer";case $:return(e._context.displayName||"Context")+".Provider";case A:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case U:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}function le(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(t);case 8:return t===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function K(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function de(e){var t=oe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,y=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return d.call(this)},set:function(k){a=""+k,y.call(this,k)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(k){a=""+k},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function we(e){e._valueTracker||(e._valueTracker=de(e))}function he(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=oe(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function fe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _e(e,t){var i=t.checked;return G({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ne(e,t){var i=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;i=K(t.value!=null?t.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function be(e,t){t=t.checked,t!=null&&S(e,"checked",t,!1)}function Re(e,t){be(e,t);var i=K(t.value),a=t.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fn(e,t.type,i):t.hasOwnProperty("defaultValue")&&fn(e,t.type,K(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function an(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function fn(e,t,i){(t!=="number"||fe(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var nn=Array.isArray;function tn(e,t,i,a){if(e=e.options,t){t={};for(var d=0;d<i.length;d++)t["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=t.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&a&&(e[i].defaultSelected=!0)}else{for(i=""+K(i),t=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}t!==null||e[d].disabled||(t=e[d])}t!==null&&(t.selected=!0)}}function lt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return G({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Qn(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(nn(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:K(i)}}function Kn(e,t){var i=K(t.value),a=K(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function dn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Mn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Mn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Tn,Eo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,a,d){MSApp.execUnsafeLocalFunction(function(){return e(t,i,a,d)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Tn=Tn||document.createElement("div"),Tn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Tn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function st(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ks=["Webkit","ms","Moz","O"];Object.keys(qt).forEach(function(e){ks.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),qt[t]=qt[e]})});function So(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||qt.hasOwnProperty(e)&&qt[e]?(""+t).trim():t+"px"}function _o(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=i.indexOf("--")===0,d=So(i,t[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,d):e[i]=d}}var Cs=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(Cs[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,Et=null,St=null;function ko(e){if(e=Oi(e)){if(typeof hi!="function")throw Error(o(280));var t=e.stateNode;t&&(t=el(t),hi(e.stateNode,e.type,t))}}function Co(e){Et?St?St.push(e):St=[e]:Et=e}function No(){if(Et){var e=Et,t=St;if(St=Et=null,ko(e),t)for(e=0;e<t.length;e++)ko(t[e])}}function bo(e,t){return e(t)}function Po(){}var pi=!1;function Mo(e,t,i){if(pi)return e(t,i);pi=!0;try{return bo(e,t,i)}finally{pi=!1,(Et!==null||St!==null)&&(Po(),No())}}function Yt(e,t){var i=e.stateNode;if(i===null)return null;var a=el(i);if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var mi=!1;if(f)try{var Xt={};Object.defineProperty(Xt,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Xt,Xt),window.removeEventListener("test",Xt,Xt)}catch{mi=!1}function Ns(e,t,i,a,d,y,k,D,H){var te=Array.prototype.slice.call(arguments,3);try{t.apply(i,te)}catch(ae){this.onError(ae)}}var Gt=!1,xr=null,Er=!1,gi=null,bs={onError:function(e){Gt=!0,xr=e}};function Ps(e,t,i,a,d,y,k,D,H){Gt=!1,xr=null,Ns.apply(bs,arguments)}function Ms(e,t,i,a,d,y,k,D,H){if(Ps.apply(this,arguments),Gt){if(Gt){var te=xr;Gt=!1,xr=null}else throw Error(o(198));Er||(Er=!0,gi=te)}}function Zn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function yi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vi(e){if(Zn(e)!==e)throw Error(o(188))}function Ts(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,a=t;;){var d=i.return;if(d===null)break;var y=d.alternate;if(y===null){if(a=d.return,a!==null){i=a;continue}break}if(d.child===y.child){for(y=d.child;y;){if(y===i)return vi(d),e;if(y===a)return vi(d),t;y=y.sibling}throw Error(o(188))}if(i.return!==a.return)i=d,a=y;else{for(var k=!1,D=d.child;D;){if(D===i){k=!0,i=d,a=y;break}if(D===a){k=!0,a=d,i=y;break}D=D.sibling}if(!k){for(D=y.child;D;){if(D===i){k=!0,i=y,a=d;break}if(D===a){k=!0,a=y,i=d;break}D=D.sibling}if(!k)throw Error(o(189))}}if(i.alternate!==a)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function To(e){return e=Ts(e),e!==null?Lo(e):null}function Lo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Lo(e);if(t!==null)return t;e=e.sibling}return null}var Io=r.unstable_scheduleCallback,Ro=r.unstable_cancelCallback,Ls=r.unstable_shouldYield,zo=r.unstable_requestPaint,je=r.unstable_now,Is=r.unstable_getCurrentPriorityLevel,wi=r.unstable_ImmediatePriority,Do=r.unstable_UserBlockingPriority,Sr=r.unstable_NormalPriority,Rs=r.unstable_LowPriority,Ao=r.unstable_IdlePriority,_r=null,En=null;function zs(e){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:Os,Ds=Math.log,As=Math.LN2;function Os(e){return e>>>=0,e===0?32:31-(Ds(e)/As|0)|0}var kr=64,Cr=4194304;function Qt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function at(e,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,d=e.suspendedLanes,y=e.pingedLanes,k=i&268435455;if(k!==0){var D=k&~d;D!==0?a=Qt(D):(y&=k,y!==0&&(a=Qt(y)))}else k=i&~d,k!==0?a=Qt(k):y!==0&&(a=Qt(y));if(a===0)return 0;if(t!==0&&t!==a&&(t&d)===0&&(d=a&-a,y=t&-t,d>=y||d===16&&(y&4194240)!==0))return t;if((a&4)!==0&&(a|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)i=31-Sn(t),d=1<<i,a|=e[i],t&=~d;return a}function Fs(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oo(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,y=e.pendingLanes;0<y;){var k=31-Sn(y),D=1<<k,H=d[k];H===-1?((D&i)===0||(D&a)!==0)&&(d[k]=Fs(D,t)):H<=t&&(e.expiredLanes|=D),y&=~D}}function xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fo(){var e=kr;return kr<<=1,(kr&4194240)===0&&(kr=64),e}function Kt(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Zt(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Sn(t),e[t]=i}function js(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var d=31-Sn(i),y=1<<d;t[d]=0,a[d]=-1,e[d]=-1,i&=~y}}function Nr(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-Sn(i),d=1<<a;d&t|e[a]&t&&(e[a]|=t),i&=~d}}var Le=0;function af(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var uf,Hs,cf,ff,df,$s=!1,jo=[],_t=null,kt=null,Ct=null,Ei=new Map,Si=new Map,Nt=[],Og="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":kt=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":Ei.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function _i(e,t,i,a,d,y){return e===null||e.nativeEvent!==y?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:y,targetContainers:[d]},t!==null&&(t=Oi(t),t!==null&&Hs(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,d!==null&&t.indexOf(d)===-1&&t.push(d),e)}function Fg(e,t,i,a,d){switch(t){case"focusin":return _t=_i(_t,e,t,i,a,d),!0;case"dragenter":return kt=_i(kt,e,t,i,a,d),!0;case"mouseover":return Ct=_i(Ct,e,t,i,a,d),!0;case"pointerover":var y=d.pointerId;return Ei.set(y,_i(Ei.get(y)||null,e,t,i,a,d)),!0;case"gotpointercapture":return y=d.pointerId,Si.set(y,_i(Si.get(y)||null,e,t,i,a,d)),!0}return!1}function pf(e){var t=Jt(e.target);if(t!==null){var i=Zn(t);if(i!==null){if(t=i.tag,t===13){if(t=yi(i),t!==null){e.blockedOn=t,df(e.priority,function(){cf(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Bs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);fi=a,i.target.dispatchEvent(a),fi=null}else return t=Oi(i),t!==null&&Hs(t),e.blockedOn=i,!1;t.shift()}return!0}function mf(e,t,i){Ho(e)&&i.delete(t)}function jg(){$s=!1,_t!==null&&Ho(_t)&&(_t=null),kt!==null&&Ho(kt)&&(kt=null),Ct!==null&&Ho(Ct)&&(Ct=null),Ei.forEach(mf),Si.forEach(mf)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,$s||($s=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jg)))}function Ci(e){function t(d){return ki(d,e)}if(0<jo.length){ki(jo[0],e);for(var i=1;i<jo.length;i++){var a=jo[i];a.blockedOn===e&&(a.blockedOn=null)}}for(_t!==null&&ki(_t,e),kt!==null&&ki(kt,e),Ct!==null&&ki(Ct,e),Ei.forEach(t),Si.forEach(t),i=0;i<Nt.length;i++)a=Nt[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<Nt.length&&(i=Nt[0],i.blockedOn===null);)pf(i),i.blockedOn===null&&Nt.shift()}var br=N.ReactCurrentBatchConfig,$o=!0;function Hg(e,t,i,a){var d=Le,y=br.transition;br.transition=null;try{Le=1,Vs(e,t,i,a)}finally{Le=d,br.transition=y}}function $g(e,t,i,a){var d=Le,y=br.transition;br.transition=null;try{Le=4,Vs(e,t,i,a)}finally{Le=d,br.transition=y}}function Vs(e,t,i,a){if($o){var d=Bs(e,t,i,a);if(d===null)la(e,t,a,Vo,i),hf(e,a);else if(Fg(d,e,t,i,a))a.stopPropagation();else if(hf(e,a),t&4&&-1<Og.indexOf(e)){for(;d!==null;){var y=Oi(d);if(y!==null&&uf(y),y=Bs(e,t,i,a),y===null&&la(e,t,a,Vo,i),y===d)break;d=y}d!==null&&a.stopPropagation()}else la(e,t,a,null,i)}}var Vo=null;function Bs(e,t,i,a){if(Vo=null,e=di(a),e=Jt(e),e!==null)if(t=Zn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=yi(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Is()){case wi:return 1;case Do:return 4;case Sr:case Rs:return 16;case Ao:return 536870912;default:return 16}default:return 16}}var bt=null,Ws=null,Bo=null;function yf(){if(Bo)return Bo;var e,t=Ws,i=t.length,a,d="value"in bt?bt.value:bt.textContent,y=d.length;for(e=0;e<i&&t[e]===d[e];e++);var k=i-e;for(a=1;a<=k&&t[i-a]===d[y-a];a++);return Bo=d.slice(e,1<a?1-a:void 0)}function Wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function vf(){return!1}function _n(e){function t(i,a,d,y,k){this._reactName=i,this._targetInst=d,this.type=a,this.nativeEvent=y,this.target=k,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(i=e[D],this[D]=i?i(y):y[D]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Uo:vf,this.isPropagationStopped=vf,this}return G(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=_n(Pr),Ni=G({},Pr,{view:0,detail:0}),Vg=_n(Ni),qs,Ys,bi,qo=G({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(qs=e.screenX-bi.screenX,Ys=e.screenY-bi.screenY):Ys=qs=0,bi=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Ys}}),wf=_n(qo),Bg=G({},qo,{dataTransfer:0}),Wg=_n(Bg),Ug=G({},Ni,{relatedTarget:0}),Xs=_n(Ug),qg=G({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yg=_n(qg),Xg=G({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gg=_n(Xg),Qg=G({},Pr,{data:0}),xf=_n(Qg),Kg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jg[e])?!!t[e]:!1}function Gs(){return ey}var ny=G({},Ni,{key:function(e){if(e.key){var t=Kg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ty=_n(ny),ry=G({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=_n(ry),iy=G({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),oy=_n(iy),ly=G({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=_n(ly),ay=G({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=_n(ay),cy=[9,13,27,32],Qs=f&&"CompositionEvent"in window,Pi=null;f&&"documentMode"in document&&(Pi=document.documentMode);var fy=f&&"TextEvent"in window&&!Pi,Sf=f&&(!Qs||Pi&&8<Pi&&11>=Pi),_f=" ",kf=!1;function Cf(e,t){switch(e){case"keyup":return cy.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function dy(e,t){switch(e){case"compositionend":return Nf(t);case"keypress":return t.which!==32?null:(kf=!0,_f);case"textInput":return e=t.data,e===_f&&kf?null:e;default:return null}}function hy(e,t){if(Mr)return e==="compositionend"||!Qs&&Cf(e,t)?(e=yf(),Bo=Ws=bt=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sf&&t.locale!=="ko"?null:t.data;default:return null}}var py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!py[e.type]:t==="textarea"}function Pf(e,t,i,a){Co(a),t=Ko(t,"onChange"),0<t.length&&(i=new Us("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var Mi=null,Ti=null;function my(e){qf(e,0)}function Yo(e){var t=zr(e);if(he(t))return e}function gy(e,t){if(e==="change")return t}var Mf=!1;if(f){var Ks;if(f){var Zs="oninput"in document;if(!Zs){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),Zs=typeof Tf.oninput=="function"}Ks=Zs}else Ks=!1;Mf=Ks&&(!document.documentMode||9<document.documentMode)}function Lf(){Mi&&(Mi.detachEvent("onpropertychange",If),Ti=Mi=null)}function If(e){if(e.propertyName==="value"&&Yo(Ti)){var t=[];Pf(t,Ti,e,di(e)),Mo(my,t)}}function yy(e,t,i){e==="focusin"?(Lf(),Mi=t,Ti=i,Mi.attachEvent("onpropertychange",If)):e==="focusout"&&Lf()}function vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Ti)}function wy(e,t){if(e==="click")return Yo(t)}function xy(e,t){if(e==="input"||e==="change")return Yo(t)}function Ey(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var On=typeof Object.is=="function"?Object.is:Ey;function Li(e,t){if(On(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var d=i[a];if(!p.call(t,d)||!On(e[d],t[d]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,t){var i=Rf(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Rf(i)}}function Df(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Df(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Af(){for(var e=window,t=fe();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=fe(e.document)}return t}function Js(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sy(e){var t=Af(),i=e.focusedElem,a=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Df(i.ownerDocument.documentElement,i)){if(a!==null&&Js(i)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var d=i.textContent.length,y=Math.min(a.start,d);a=a.end===void 0?y:Math.min(a.end,d),!e.extend&&y>a&&(d=a,a=y,y=d),d=zf(i,y);var k=zf(i,a);d&&k&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==k.node||e.focusOffset!==k.offset)&&(t=t.createRange(),t.setStart(d.node,d.offset),e.removeAllRanges(),y>a?(e.addRange(t),e.extend(k.node,k.offset)):(t.setEnd(k.node,k.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var _y=f&&"documentMode"in document&&11>=document.documentMode,Tr=null,ea=null,Ii=null,na=!1;function Of(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;na||Tr==null||Tr!==fe(a)||(a=Tr,"selectionStart"in a&&Js(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ii&&Li(Ii,a)||(Ii=a,a=Ko(ea,"onSelect"),0<a.length&&(t=new Us("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=Tr)))}function Xo(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Lr={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},ta={},Ff={};f&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Go(e){if(ta[e])return ta[e];if(!Lr[e])return e;var t=Lr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in Ff)return ta[e]=t[i];return e}var jf=Go("animationend"),Hf=Go("animationiteration"),$f=Go("animationstart"),Vf=Go("transitionend"),Bf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){Bf.set(e,t),c(t,[e])}for(var ra=0;ra<Wf.length;ra++){var ia=Wf[ra],ky=ia.toLowerCase(),Cy=ia[0].toUpperCase()+ia.slice(1);Pt(ky,"on"+Cy)}Pt(jf,"onAnimationEnd"),Pt(Hf,"onAnimationIteration"),Pt($f,"onAnimationStart"),Pt("dblclick","onDoubleClick"),Pt("focusin","onFocus"),Pt("focusout","onBlur"),Pt(Vf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function Uf(e,t,i){var a=e.type||"unknown-event";e.currentTarget=i,Ms(a,t,void 0,e),e.currentTarget=null}function qf(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],d=a.event;a=a.listeners;e:{var y=void 0;if(t)for(var k=a.length-1;0<=k;k--){var D=a[k],H=D.instance,te=D.currentTarget;if(D=D.listener,H!==y&&d.isPropagationStopped())break e;Uf(d,D,te),y=H}else for(k=0;k<a.length;k++){if(D=a[k],H=D.instance,te=D.currentTarget,D=D.listener,H!==y&&d.isPropagationStopped())break e;Uf(d,D,te),y=H}}}if(Er)throw e=gi,Er=!1,gi=null,e}function ze(e,t){var i=t[da];i===void 0&&(i=t[da]=new Set);var a=e+"__bubble";i.has(a)||(Yf(t,e,2,!1),i.add(a))}function oa(e,t,i){var a=0;t&&(a|=4),Yf(i,e,a,t)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function zi(e){if(!e[Qo]){e[Qo]=!0,s.forEach(function(i){i!=="selectionchange"&&(Ny.has(i)||oa(i,!1,e),oa(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qo]||(t[Qo]=!0,oa("selectionchange",!1,t))}}function Yf(e,t,i,a){switch(gf(t)){case 1:var d=Hg;break;case 4:d=$g;break;default:d=Vs}i=d.bind(null,t,i,e),d=void 0,!mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(t,i,{capture:!0,passive:d}):e.addEventListener(t,i,!0):d!==void 0?e.addEventListener(t,i,{passive:d}):e.addEventListener(t,i,!1)}function la(e,t,i,a,d){var y=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var k=a.tag;if(k===3||k===4){var D=a.stateNode.containerInfo;if(D===d||D.nodeType===8&&D.parentNode===d)break;if(k===4)for(k=a.return;k!==null;){var H=k.tag;if((H===3||H===4)&&(H=k.stateNode.containerInfo,H===d||H.nodeType===8&&H.parentNode===d))return;k=k.return}for(;D!==null;){if(k=Jt(D),k===null)return;if(H=k.tag,H===5||H===6){a=y=k;continue e}D=D.parentNode}}a=a.return}Mo(function(){var te=y,ae=di(i),ue=[];e:{var se=Bf.get(e);if(se!==void 0){var pe=Us,ge=e;switch(e){case"keypress":if(Wo(i)===0)break e;case"keydown":case"keyup":pe=ty;break;case"focusin":ge="focus",pe=Xs;break;case"focusout":ge="blur",pe=Xs;break;case"beforeblur":case"afterblur":pe=Xs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=oy;break;case jf:case Hf:case $f:pe=Yg;break;case Vf:pe=sy;break;case"scroll":pe=Vg;break;case"wheel":pe=uy;break;case"copy":case"cut":case"paste":pe=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Ef}var ye=(t&4)!==0,Be=!ye&&e==="scroll",ee=ye?se!==null?se+"Capture":null:se;ye=[];for(var q=te,ne;q!==null;){ne=q;var ce=ne.stateNode;if(ne.tag===5&&ce!==null&&(ne=ce,ee!==null&&(ce=Yt(q,ee),ce!=null&&ye.push(Di(q,ce,ne)))),Be)break;q=q.return}0<ye.length&&(se=new pe(se,ge,null,i,ae),ue.push({event:se,listeners:ye}))}}if((t&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",se&&i!==fi&&(ge=i.relatedTarget||i.fromElement)&&(Jt(ge)||ge[ut]))break e;if((pe||se)&&(se=ae.window===ae?ae:(se=ae.ownerDocument)?se.defaultView||se.parentWindow:window,pe?(ge=i.relatedTarget||i.toElement,pe=te,ge=ge?Jt(ge):null,ge!==null&&(Be=Zn(ge),ge!==Be||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(pe=null,ge=te),pe!==ge)){if(ye=wf,ce="onMouseLeave",ee="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Ef,ce="onPointerLeave",ee="onPointerEnter",q="pointer"),Be=pe==null?se:zr(pe),ne=ge==null?se:zr(ge),se=new ye(ce,q+"leave",pe,i,ae),se.target=Be,se.relatedTarget=ne,ce=null,Jt(ae)===te&&(ye=new ye(ee,q+"enter",ge,i,ae),ye.target=ne,ye.relatedTarget=Be,ce=ye),Be=ce,pe&&ge)n:{for(ye=pe,ee=ge,q=0,ne=ye;ne;ne=Ir(ne))q++;for(ne=0,ce=ee;ce;ce=Ir(ce))ne++;for(;0<q-ne;)ye=Ir(ye),q--;for(;0<ne-q;)ee=Ir(ee),ne--;for(;q--;){if(ye===ee||ee!==null&&ye===ee.alternate)break n;ye=Ir(ye),ee=Ir(ee)}ye=null}else ye=null;pe!==null&&Xf(ue,se,pe,ye,!1),ge!==null&&Be!==null&&Xf(ue,Be,ge,ye,!0)}}e:{if(se=te?zr(te):window,pe=se.nodeName&&se.nodeName.toLowerCase(),pe==="select"||pe==="input"&&se.type==="file")var ve=gy;else if(bf(se))if(Mf)ve=xy;else{ve=vy;var Ee=yy}else(pe=se.nodeName)&&pe.toLowerCase()==="input"&&(se.type==="checkbox"||se.type==="radio")&&(ve=wy);if(ve&&(ve=ve(e,te))){Pf(ue,ve,i,ae);break e}Ee&&Ee(e,se,te),e==="focusout"&&(Ee=se._wrapperState)&&Ee.controlled&&se.type==="number"&&fn(se,"number",se.value)}switch(Ee=te?zr(te):window,e){case"focusin":(bf(Ee)||Ee.contentEditable==="true")&&(Tr=Ee,ea=te,Ii=null);break;case"focusout":Ii=ea=Tr=null;break;case"mousedown":na=!0;break;case"contextmenu":case"mouseup":case"dragend":na=!1,Of(ue,i,ae);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":Of(ue,i,ae)}var Se;if(Qs)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Mr?Cf(e,i)&&(ke="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ke="onCompositionStart");ke&&(Sf&&i.locale!=="ko"&&(Mr||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Mr&&(Se=yf()):(bt=ae,Ws="value"in bt?bt.value:bt.textContent,Mr=!0)),Ee=Ko(te,ke),0<Ee.length&&(ke=new xf(ke,e,null,i,ae),ue.push({event:ke,listeners:Ee}),Se?ke.data=Se:(Se=Nf(i),Se!==null&&(ke.data=Se)))),(Se=fy?dy(e,i):hy(e,i))&&(te=Ko(te,"onBeforeInput"),0<te.length&&(ae=new xf("onBeforeInput","beforeinput",null,i,ae),ue.push({event:ae,listeners:te}),ae.data=Se))}qf(ue,t)})}function Di(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ko(e,t){for(var i=t+"Capture",a=[];e!==null;){var d=e,y=d.stateNode;d.tag===5&&y!==null&&(d=y,y=Yt(e,i),y!=null&&a.unshift(Di(e,y,d)),y=Yt(e,t),y!=null&&a.push(Di(e,y,d))),e=e.return}return a}function Ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xf(e,t,i,a,d){for(var y=t._reactName,k=[];i!==null&&i!==a;){var D=i,H=D.alternate,te=D.stateNode;if(H!==null&&H===a)break;D.tag===5&&te!==null&&(D=te,d?(H=Yt(i,y),H!=null&&k.unshift(Di(i,H,D))):d||(H=Yt(i,y),H!=null&&k.push(Di(i,H,D)))),i=i.return}k.length!==0&&e.push({event:t,listeners:k})}var by=/\r\n?/g,Py=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(by,`
`).replace(Py,"")}function Zo(e,t,i){if(t=Gf(t),Gf(e)!==t&&i)throw Error(o(425))}function Jo(){}var sa=null,aa=null;function ua(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(Ly)}:ca;function Ly(e){setTimeout(function(){throw e})}function fa(e,t){var i=t,a=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(a===0){e.removeChild(d),Ci(t);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=d}while(i);Ci(t)}function Mt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Rr,Ai="__reactProps$"+Rr,ut="__reactContainer$"+Rr,da="__reactEvents$"+Rr,Iy="__reactListeners$"+Rr,Ry="__reactHandles$"+Rr;function Jt(e){var t=e[Jn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[ut]||i[Jn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Kf(e);e!==null;){if(i=e[Jn])return i;e=Kf(e)}return t}e=i,i=e.parentNode}return null}function Oi(e){return e=e[Jn]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function el(e){return e[Ai]||null}var ha=[],Dr=-1;function Tt(e){return{current:e}}function De(e){0>Dr||(e.current=ha[Dr],ha[Dr]=null,Dr--)}function Ie(e,t){Dr++,ha[Dr]=e.current,e.current=t}var Lt={},rn=Tt(Lt),hn=Tt(!1),er=Lt;function Ar(e,t){var i=e.type.contextTypes;if(!i)return Lt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var d={},y;for(y in i)d[y]=t[y];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=d),d}function pn(e){return e=e.childContextTypes,e!=null}function nl(){De(hn),De(rn)}function Zf(e,t,i){if(rn.current!==Lt)throw Error(o(168));Ie(rn,t),Ie(hn,i)}function Jf(e,t,i){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var d in a)if(!(d in t))throw Error(o(108,le(e)||"Unknown",d));return G({},i,a)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Lt,er=rn.current,Ie(rn,e),Ie(hn,hn.current),!0}function ed(e,t,i){var a=e.stateNode;if(!a)throw Error(o(169));i?(e=Jf(e,t,er),a.__reactInternalMemoizedMergedChildContext=e,De(hn),De(rn),Ie(rn,e)):De(hn),Ie(hn,i)}var ct=null,rl=!1,pa=!1;function nd(e){ct===null?ct=[e]:ct.push(e)}function zy(e){rl=!0,nd(e)}function It(){if(!pa&&ct!==null){pa=!0;var e=0,t=Le;try{var i=ct;for(Le=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}ct=null,rl=!1}catch(d){throw ct!==null&&(ct=ct.slice(e+1)),Io(wi,It),d}finally{Le=t,pa=!1}}return null}var Or=[],Fr=0,il=null,ol=0,Ln=[],In=0,nr=null,ft=1,dt="";function tr(e,t){Or[Fr++]=ol,Or[Fr++]=il,il=e,ol=t}function td(e,t,i){Ln[In++]=ft,Ln[In++]=dt,Ln[In++]=nr,nr=e;var a=ft;e=dt;var d=32-Sn(a)-1;a&=~(1<<d),i+=1;var y=32-Sn(t)+d;if(30<y){var k=d-d%5;y=(a&(1<<k)-1).toString(32),a>>=k,d-=k,ft=1<<32-Sn(t)+d|i<<d|a,dt=y+e}else ft=1<<y|i<<d|a,dt=e}function ma(e){e.return!==null&&(tr(e,1),td(e,1,0))}function ga(e){for(;e===il;)il=Or[--Fr],Or[Fr]=null,ol=Or[--Fr],Or[Fr]=null;for(;e===nr;)nr=Ln[--In],Ln[In]=null,dt=Ln[--In],Ln[In]=null,ft=Ln[--In],Ln[In]=null}var kn=null,Cn=null,Ae=!1,Fn=null;function rd(e,t){var i=An(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function id(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,kn=e,Cn=Mt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,kn=e,Cn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=nr!==null?{id:ft,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=An(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,kn=e,Cn=null,!0):!1;default:return!1}}function ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function va(e){if(Ae){var t=Cn;if(t){var i=t;if(!id(e,t)){if(ya(e))throw Error(o(418));t=Mt(i.nextSibling);var a=kn;t&&id(e,t)?rd(a,i):(e.flags=e.flags&-4097|2,Ae=!1,kn=e)}}else{if(ya(e))throw Error(o(418));e.flags=e.flags&-4097|2,Ae=!1,kn=e}}}function od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;kn=e}function ll(e){if(e!==kn)return!1;if(!Ae)return od(e),Ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ua(e.type,e.memoizedProps)),t&&(t=Cn)){if(ya(e))throw ld(),Error(o(418));for(;t;)rd(e,t),t=Mt(t.nextSibling)}if(od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Cn=Mt(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Cn=null}}else Cn=kn?Mt(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=Cn;e;)e=Mt(e.nextSibling)}function jr(){Cn=kn=null,Ae=!1}function wa(e){Fn===null?Fn=[e]:Fn.push(e)}var Dy=N.ReactCurrentBatchConfig;function Fi(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var a=i.stateNode}if(!a)throw Error(o(147,e));var d=a,y=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===y?t.ref:(t=function(k){var D=d.refs;k===null?delete D[y]:D[y]=k},t._stringRef=y,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function sl(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sd(e){var t=e._init;return t(e._payload)}function ad(e){function t(ee,q){if(e){var ne=ee.deletions;ne===null?(ee.deletions=[q],ee.flags|=16):ne.push(q)}}function i(ee,q){if(!e)return null;for(;q!==null;)t(ee,q),q=q.sibling;return null}function a(ee,q){for(ee=new Map;q!==null;)q.key!==null?ee.set(q.key,q):ee.set(q.index,q),q=q.sibling;return ee}function d(ee,q){return ee=Ht(ee,q),ee.index=0,ee.sibling=null,ee}function y(ee,q,ne){return ee.index=ne,e?(ne=ee.alternate,ne!==null?(ne=ne.index,ne<q?(ee.flags|=2,q):ne):(ee.flags|=2,q)):(ee.flags|=1048576,q)}function k(ee){return e&&ee.alternate===null&&(ee.flags|=2),ee}function D(ee,q,ne,ce){return q===null||q.tag!==6?(q=cu(ne,ee.mode,ce),q.return=ee,q):(q=d(q,ne),q.return=ee,q)}function H(ee,q,ne,ce){var ve=ne.type;return ve===F?ae(ee,q,ne.props.children,ce,ne.key):q!==null&&(q.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===U&&sd(ve)===q.type)?(ce=d(q,ne.props),ce.ref=Fi(ee,q,ne),ce.return=ee,ce):(ce=Ll(ne.type,ne.key,ne.props,null,ee.mode,ce),ce.ref=Fi(ee,q,ne),ce.return=ee,ce)}function te(ee,q,ne,ce){return q===null||q.tag!==4||q.stateNode.containerInfo!==ne.containerInfo||q.stateNode.implementation!==ne.implementation?(q=fu(ne,ee.mode,ce),q.return=ee,q):(q=d(q,ne.children||[]),q.return=ee,q)}function ae(ee,q,ne,ce,ve){return q===null||q.tag!==7?(q=cr(ne,ee.mode,ce,ve),q.return=ee,q):(q=d(q,ne),q.return=ee,q)}function ue(ee,q,ne){if(typeof q=="string"&&q!==""||typeof q=="number")return q=cu(""+q,ee.mode,ne),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case z:return ne=Ll(q.type,q.key,q.props,null,ee.mode,ne),ne.ref=Fi(ee,null,q),ne.return=ee,ne;case L:return q=fu(q,ee.mode,ne),q.return=ee,q;case U:var ce=q._init;return ue(ee,ce(q._payload),ne)}if(nn(q)||V(q))return q=cr(q,ee.mode,ne,null),q.return=ee,q;sl(ee,q)}return null}function se(ee,q,ne,ce){var ve=q!==null?q.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ve!==null?null:D(ee,q,""+ne,ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case z:return ne.key===ve?H(ee,q,ne,ce):null;case L:return ne.key===ve?te(ee,q,ne,ce):null;case U:return ve=ne._init,se(ee,q,ve(ne._payload),ce)}if(nn(ne)||V(ne))return ve!==null?null:ae(ee,q,ne,ce,null);sl(ee,ne)}return null}function pe(ee,q,ne,ce,ve){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ee=ee.get(ne)||null,D(q,ee,""+ce,ve);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case z:return ee=ee.get(ce.key===null?ne:ce.key)||null,H(q,ee,ce,ve);case L:return ee=ee.get(ce.key===null?ne:ce.key)||null,te(q,ee,ce,ve);case U:var Ee=ce._init;return pe(ee,q,ne,Ee(ce._payload),ve)}if(nn(ce)||V(ce))return ee=ee.get(ne)||null,ae(q,ee,ce,ve,null);sl(q,ce)}return null}function ge(ee,q,ne,ce){for(var ve=null,Ee=null,Se=q,ke=q=0,Ze=null;Se!==null&&ke<ne.length;ke++){Se.index>ke?(Ze=Se,Se=null):Ze=Se.sibling;var Te=se(ee,Se,ne[ke],ce);if(Te===null){Se===null&&(Se=Ze);break}e&&Se&&Te.alternate===null&&t(ee,Se),q=y(Te,q,ke),Ee===null?ve=Te:Ee.sibling=Te,Ee=Te,Se=Ze}if(ke===ne.length)return i(ee,Se),Ae&&tr(ee,ke),ve;if(Se===null){for(;ke<ne.length;ke++)Se=ue(ee,ne[ke],ce),Se!==null&&(q=y(Se,q,ke),Ee===null?ve=Se:Ee.sibling=Se,Ee=Se);return Ae&&tr(ee,ke),ve}for(Se=a(ee,Se);ke<ne.length;ke++)Ze=pe(Se,ee,ke,ne[ke],ce),Ze!==null&&(e&&Ze.alternate!==null&&Se.delete(Ze.key===null?ke:Ze.key),q=y(Ze,q,ke),Ee===null?ve=Ze:Ee.sibling=Ze,Ee=Ze);return e&&Se.forEach(function($t){return t(ee,$t)}),Ae&&tr(ee,ke),ve}function ye(ee,q,ne,ce){var ve=V(ne);if(typeof ve!="function")throw Error(o(150));if(ne=ve.call(ne),ne==null)throw Error(o(151));for(var Ee=ve=null,Se=q,ke=q=0,Ze=null,Te=ne.next();Se!==null&&!Te.done;ke++,Te=ne.next()){Se.index>ke?(Ze=Se,Se=null):Ze=Se.sibling;var $t=se(ee,Se,Te.value,ce);if($t===null){Se===null&&(Se=Ze);break}e&&Se&&$t.alternate===null&&t(ee,Se),q=y($t,q,ke),Ee===null?ve=$t:Ee.sibling=$t,Ee=$t,Se=Ze}if(Te.done)return i(ee,Se),Ae&&tr(ee,ke),ve;if(Se===null){for(;!Te.done;ke++,Te=ne.next())Te=ue(ee,Te.value,ce),Te!==null&&(q=y(Te,q,ke),Ee===null?ve=Te:Ee.sibling=Te,Ee=Te);return Ae&&tr(ee,ke),ve}for(Se=a(ee,Se);!Te.done;ke++,Te=ne.next())Te=pe(Se,ee,ke,Te.value,ce),Te!==null&&(e&&Te.alternate!==null&&Se.delete(Te.key===null?ke:Te.key),q=y(Te,q,ke),Ee===null?ve=Te:Ee.sibling=Te,Ee=Te);return e&&Se.forEach(function(p1){return t(ee,p1)}),Ae&&tr(ee,ke),ve}function Be(ee,q,ne,ce){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case z:e:{for(var ve=ne.key,Ee=q;Ee!==null;){if(Ee.key===ve){if(ve=ne.type,ve===F){if(Ee.tag===7){i(ee,Ee.sibling),q=d(Ee,ne.props.children),q.return=ee,ee=q;break e}}else if(Ee.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===U&&sd(ve)===Ee.type){i(ee,Ee.sibling),q=d(Ee,ne.props),q.ref=Fi(ee,Ee,ne),q.return=ee,ee=q;break e}i(ee,Ee);break}else t(ee,Ee);Ee=Ee.sibling}ne.type===F?(q=cr(ne.props.children,ee.mode,ce,ne.key),q.return=ee,ee=q):(ce=Ll(ne.type,ne.key,ne.props,null,ee.mode,ce),ce.ref=Fi(ee,q,ne),ce.return=ee,ee=ce)}return k(ee);case L:e:{for(Ee=ne.key;q!==null;){if(q.key===Ee)if(q.tag===4&&q.stateNode.containerInfo===ne.containerInfo&&q.stateNode.implementation===ne.implementation){i(ee,q.sibling),q=d(q,ne.children||[]),q.return=ee,ee=q;break e}else{i(ee,q);break}else t(ee,q);q=q.sibling}q=fu(ne,ee.mode,ce),q.return=ee,ee=q}return k(ee);case U:return Ee=ne._init,Be(ee,q,Ee(ne._payload),ce)}if(nn(ne))return ge(ee,q,ne,ce);if(V(ne))return ye(ee,q,ne,ce);sl(ee,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,q!==null&&q.tag===6?(i(ee,q.sibling),q=d(q,ne),q.return=ee,ee=q):(i(ee,q),q=cu(ne,ee.mode,ce),q.return=ee,ee=q),k(ee)):i(ee,q)}return Be}var Hr=ad(!0),ud=ad(!1),al=Tt(null),ul=null,$r=null,xa=null;function Ea(){xa=$r=ul=null}function Sa(e){var t=al.current;De(al),e._currentValue=t}function _a(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function Vr(e,t){ul=e,xa=$r=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(mn=!0),e.firstContext=null)}function Rn(e){var t=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:t,next:null},$r===null){if(ul===null)throw Error(o(308));$r=e,ul.dependencies={lanes:0,firstContext:e}}else $r=$r.next=e;return t}var rr=null;function ka(e){rr===null?rr=[e]:rr.push(e)}function cd(e,t,i,a){var d=t.interleaved;return d===null?(i.next=i,ka(t)):(i.next=d.next,d.next=i),t.interleaved=i,ht(e,a)}function ht(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Rt=!1;function Ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Me&2)!==0){var d=a.pending;return d===null?t.next=t:(t.next=d.next,d.next=t),a.pending=t,ht(e,i)}return d=a.interleaved,d===null?(t.next=t,ka(a)):(t.next=d.next,d.next=t),a.interleaved=t,ht(e,i)}function cl(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,Nr(e,i)}}function dd(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var d=null,y=null;if(i=i.firstBaseUpdate,i!==null){do{var k={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};y===null?d=y=k:y=y.next=k,i=i.next}while(i!==null);y===null?d=y=t:y=y.next=t}else d=y=t;i={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:y,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function fl(e,t,i,a){var d=e.updateQueue;Rt=!1;var y=d.firstBaseUpdate,k=d.lastBaseUpdate,D=d.shared.pending;if(D!==null){d.shared.pending=null;var H=D,te=H.next;H.next=null,k===null?y=te:k.next=te,k=H;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,D=ae.lastBaseUpdate,D!==k&&(D===null?ae.firstBaseUpdate=te:D.next=te,ae.lastBaseUpdate=H))}if(y!==null){var ue=d.baseState;k=0,ae=te=H=null,D=y;do{var se=D.lane,pe=D.eventTime;if((a&se)===se){ae!==null&&(ae=ae.next={eventTime:pe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ge=e,ye=D;switch(se=t,pe=i,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){ue=ge.call(pe,ue,se);break e}ue=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,se=typeof ge=="function"?ge.call(pe,ue,se):ge,se==null)break e;ue=G({},ue,se);break e;case 2:Rt=!0}}D.callback!==null&&D.lane!==0&&(e.flags|=64,se=d.effects,se===null?d.effects=[D]:se.push(D))}else pe={eventTime:pe,lane:se,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ae===null?(te=ae=pe,H=ue):ae=ae.next=pe,k|=se;if(D=D.next,D===null){if(D=d.shared.pending,D===null)break;se=D,D=se.next,se.next=null,d.lastBaseUpdate=se,d.shared.pending=null}}while(!0);if(ae===null&&(H=ue),d.baseState=H,d.firstBaseUpdate=te,d.lastBaseUpdate=ae,t=d.shared.interleaved,t!==null){d=t;do k|=d.lane,d=d.next;while(d!==t)}else y===null&&(d.shared.lanes=0);lr|=k,e.lanes=k,e.memoizedState=ue}}function hd(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],d=a.callback;if(d!==null){if(a.callback=null,a=i,typeof d!="function")throw Error(o(191,d));d.call(a)}}}var ji={},et=Tt(ji),Hi=Tt(ji),$i=Tt(ji);function ir(e){if(e===ji)throw Error(o(174));return e}function Na(e,t){switch(Ie($i,t),Ie(Hi,e),Ie(et,ji),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xn(t,e)}De(et),Ie(et,t)}function Br(){De(et),De(Hi),De($i)}function pd(e){ir($i.current);var t=ir(et.current),i=xn(t,e.type);t!==i&&(Ie(Hi,e),Ie(et,i))}function ba(e){Hi.current===e&&(De(et),De(Hi))}var He=Tt(0);function dl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pa=[];function Ma(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var hl=N.ReactCurrentDispatcher,Ta=N.ReactCurrentBatchConfig,or=0,$e=null,Xe=null,Qe=null,pl=!1,Vi=!1,Bi=0,Ay=0;function on(){throw Error(o(321))}function La(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!On(e[i],t[i]))return!1;return!0}function Ia(e,t,i,a,d,y){if(or=y,$e=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?Hy:$y,e=i(a,d),Vi){y=0;do{if(Vi=!1,Bi=0,25<=y)throw Error(o(301));y+=1,Qe=Xe=null,t.updateQueue=null,hl.current=Vy,e=i(a,d)}while(Vi)}if(hl.current=yl,t=Xe!==null&&Xe.next!==null,or=0,Qe=Xe=$e=null,pl=!1,t)throw Error(o(300));return e}function Ra(){var e=Bi!==0;return Bi=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?$e.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function zn(){if(Xe===null){var e=$e.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var t=Qe===null?$e.memoizedState:Qe.next;if(t!==null)Qe=t,Xe=e;else{if(e===null)throw Error(o(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Qe===null?$e.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Wi(e,t){return typeof t=="function"?t(e):t}function za(e){var t=zn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=Xe,d=a.baseQueue,y=i.pending;if(y!==null){if(d!==null){var k=d.next;d.next=y.next,y.next=k}a.baseQueue=d=y,i.pending=null}if(d!==null){y=d.next,a=a.baseState;var D=k=null,H=null,te=y;do{var ae=te.lane;if((or&ae)===ae)H!==null&&(H=H.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),a=te.hasEagerState?te.eagerState:e(a,te.action);else{var ue={lane:ae,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};H===null?(D=H=ue,k=a):H=H.next=ue,$e.lanes|=ae,lr|=ae}te=te.next}while(te!==null&&te!==y);H===null?k=a:H.next=D,On(a,t.memoizedState)||(mn=!0),t.memoizedState=a,t.baseState=k,t.baseQueue=H,i.lastRenderedState=a}if(e=i.interleaved,e!==null){d=e;do y=d.lane,$e.lanes|=y,lr|=y,d=d.next;while(d!==e)}else d===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Da(e){var t=zn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=i.dispatch,d=i.pending,y=t.memoizedState;if(d!==null){i.pending=null;var k=d=d.next;do y=e(y,k.action),k=k.next;while(k!==d);On(y,t.memoizedState)||(mn=!0),t.memoizedState=y,t.baseQueue===null&&(t.baseState=y),i.lastRenderedState=y}return[y,a]}function md(){}function gd(e,t){var i=$e,a=zn(),d=t(),y=!On(a.memoizedState,d);if(y&&(a.memoizedState=d,mn=!0),a=a.queue,Aa(wd.bind(null,i,a,e),[e]),a.getSnapshot!==t||y||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,Ui(9,vd.bind(null,i,a,d,t),void 0,null),Ke===null)throw Error(o(349));(or&30)!==0||yd(i,t,d)}return d}function yd(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function vd(e,t,i,a){t.value=i,t.getSnapshot=a,xd(t)&&Ed(e)}function wd(e,t,i){return i(function(){xd(t)&&Ed(e)})}function xd(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!On(e,i)}catch{return!0}}function Ed(e){var t=ht(e,1);t!==null&&Vn(t,e,1,-1)}function Sd(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=jy.bind(null,$e,e),[t.memoizedState,e]}function Ui(e,t,i,a){return e={tag:e,create:t,destroy:i,deps:a,next:null},t=$e.updateQueue,t===null?(t={lastEffect:null,stores:null},$e.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e)),e}function _d(){return zn().memoizedState}function ml(e,t,i,a){var d=nt();$e.flags|=e,d.memoizedState=Ui(1|t,i,void 0,a===void 0?null:a)}function gl(e,t,i,a){var d=zn();a=a===void 0?null:a;var y=void 0;if(Xe!==null){var k=Xe.memoizedState;if(y=k.destroy,a!==null&&La(a,k.deps)){d.memoizedState=Ui(t,i,y,a);return}}$e.flags|=e,d.memoizedState=Ui(1|t,i,y,a)}function kd(e,t){return ml(8390656,8,e,t)}function Aa(e,t){return gl(2048,8,e,t)}function Cd(e,t){return gl(4,2,e,t)}function Nd(e,t){return gl(4,4,e,t)}function bd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pd(e,t,i){return i=i!=null?i.concat([e]):null,gl(4,4,bd.bind(null,t,e),i)}function Oa(){}function Md(e,t){var i=zn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&La(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function Td(e,t){var i=zn();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&La(t,a[1])?a[0]:(e=e(),i.memoizedState=[e,t],e)}function Ld(e,t,i){return(or&21)===0?(e.baseState&&(e.baseState=!1,mn=!0),e.memoizedState=i):(On(i,t)||(i=Fo(),$e.lanes|=i,lr|=i,e.baseState=!0),t)}function Oy(e,t){var i=Le;Le=i!==0&&4>i?i:4,e(!0);var a=Ta.transition;Ta.transition={};try{e(!1),t()}finally{Le=i,Ta.transition=a}}function Id(){return zn().memoizedState}function Fy(e,t,i){var a=Ft(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Rd(e))zd(t,i);else if(i=cd(e,t,i,a),i!==null){var d=cn();Vn(i,e,a,d),Dd(i,t,a)}}function jy(e,t,i){var a=Ft(e),d={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))zd(t,d);else{var y=e.alternate;if(e.lanes===0&&(y===null||y.lanes===0)&&(y=t.lastRenderedReducer,y!==null))try{var k=t.lastRenderedState,D=y(k,i);if(d.hasEagerState=!0,d.eagerState=D,On(D,k)){var H=t.interleaved;H===null?(d.next=d,ka(t)):(d.next=H.next,H.next=d),t.interleaved=d;return}}catch{}finally{}i=cd(e,t,d,a),i!==null&&(d=cn(),Vn(i,e,a,d),Dd(i,t,a))}}function Rd(e){var t=e.alternate;return e===$e||t!==null&&t===$e}function zd(e,t){Vi=pl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Dd(e,t,i){if((i&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,Nr(e,i)}}var yl={readContext:Rn,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Hy={readContext:Rn,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:Rn,useEffect:kd,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ml(4194308,4,bd.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ml(4194308,4,e,t)},useInsertionEffect:function(e,t){return ml(4,2,e,t)},useMemo:function(e,t){var i=nt();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var a=nt();return t=i!==void 0?i(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Fy.bind(null,$e,e),[a.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:Sd,useDebugValue:Oa,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=Sd(!1),t=e[0];return e=Oy.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var a=$e,d=nt();if(Ae){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),Ke===null)throw Error(o(349));(or&30)!==0||yd(a,t,i)}d.memoizedState=i;var y={value:i,getSnapshot:t};return d.queue=y,kd(wd.bind(null,a,y,e),[e]),a.flags|=2048,Ui(9,vd.bind(null,a,y,i,t),void 0,null),i},useId:function(){var e=nt(),t=Ke.identifierPrefix;if(Ae){var i=dt,a=ft;i=(a&~(1<<32-Sn(a)-1)).toString(32)+i,t=":"+t+"R"+i,i=Bi++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Ay++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$y={readContext:Rn,useCallback:Md,useContext:Rn,useEffect:Aa,useImperativeHandle:Pd,useInsertionEffect:Cd,useLayoutEffect:Nd,useMemo:Td,useReducer:za,useRef:_d,useState:function(){return za(Wi)},useDebugValue:Oa,useDeferredValue:function(e){var t=zn();return Ld(t,Xe.memoizedState,e)},useTransition:function(){var e=za(Wi)[0],t=zn().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:gd,useId:Id,unstable_isNewReconciler:!1},Vy={readContext:Rn,useCallback:Md,useContext:Rn,useEffect:Aa,useImperativeHandle:Pd,useInsertionEffect:Cd,useLayoutEffect:Nd,useMemo:Td,useReducer:Da,useRef:_d,useState:function(){return Da(Wi)},useDebugValue:Oa,useDeferredValue:function(e){var t=zn();return Xe===null?t.memoizedState=e:Ld(t,Xe.memoizedState,e)},useTransition:function(){var e=Da(Wi)[0],t=zn().memoizedState;return[e,t]},useMutableSource:md,useSyncExternalStore:gd,useId:Id,unstable_isNewReconciler:!1};function jn(e,t){if(e&&e.defaultProps){t=G({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function Fa(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:G({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var vl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var a=cn(),d=Ft(e),y=pt(a,d);y.payload=t,i!=null&&(y.callback=i),t=zt(e,y,d),t!==null&&(Vn(t,e,d,a),cl(t,e,d))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=cn(),d=Ft(e),y=pt(a,d);y.tag=1,y.payload=t,i!=null&&(y.callback=i),t=zt(e,y,d),t!==null&&(Vn(t,e,d,a),cl(t,e,d))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=cn(),a=Ft(e),d=pt(i,a);d.tag=2,t!=null&&(d.callback=t),t=zt(e,d,a),t!==null&&(Vn(t,e,a,i),cl(t,e,a))}};function Ad(e,t,i,a,d,y,k){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,y,k):t.prototype&&t.prototype.isPureReactComponent?!Li(i,a)||!Li(d,y):!0}function Od(e,t,i){var a=!1,d=Lt,y=t.contextType;return typeof y=="object"&&y!==null?y=Rn(y):(d=pn(t)?er:rn.current,a=t.contextTypes,y=(a=a!=null)?Ar(e,d):Lt),t=new t(i,y),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=y),t}function Fd(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function ja(e,t,i,a){var d=e.stateNode;d.props=i,d.state=e.memoizedState,d.refs={},Ca(e);var y=t.contextType;typeof y=="object"&&y!==null?d.context=Rn(y):(y=pn(t)?er:rn.current,d.context=Ar(e,y)),d.state=e.memoizedState,y=t.getDerivedStateFromProps,typeof y=="function"&&(Fa(e,t,y,i),d.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(t=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),t!==d.state&&vl.enqueueReplaceState(d,d.state,null),fl(e,i,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var i="",a=t;do i+=Q(a),a=a.return;while(a);var d=i}catch(y){d=`
Error generating stack: `+y.message+`
`+y.stack}return{value:e,source:t,stack:d,digest:null}}function Ha(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function $a(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var By=typeof WeakMap=="function"?WeakMap:Map;function jd(e,t,i){i=pt(-1,i),i.tag=3,i.payload={element:null};var a=t.value;return i.callback=function(){Cl||(Cl=!0,tu=a),$a(e,t)},i}function Hd(e,t,i){i=pt(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=t.value;i.payload=function(){return a(d)},i.callback=function(){$a(e,t)}}var y=e.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(i.callback=function(){$a(e,t),typeof a!="function"&&(At===null?At=new Set([this]):At.add(this));var k=t.stack;this.componentDidCatch(t.value,{componentStack:k!==null?k:""})}),i}function $d(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new By;var d=new Set;a.set(t,d)}else d=a.get(t),d===void 0&&(d=new Set,a.set(t,d));d.has(i)||(d.add(i),e=r1.bind(null,e,t,i),t.then(e,e))}function Vd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Bd(e,t,i,a,d){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=pt(-1,1),t.tag=2,zt(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var Wy=N.ReactCurrentOwner,mn=!1;function un(e,t,i,a){t.child=e===null?ud(t,null,i,a):Hr(t,e.child,i,a)}function Wd(e,t,i,a,d){i=i.render;var y=t.ref;return Vr(t,d),a=Ia(e,t,i,a,y,d),i=Ra(),e!==null&&!mn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,mt(e,t,d)):(Ae&&i&&ma(t),t.flags|=1,un(e,t,a,d),t.child)}function Ud(e,t,i,a,d){if(e===null){var y=i.type;return typeof y=="function"&&!uu(y)&&y.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=y,qd(e,t,y,a,d)):(e=Ll(i.type,null,a,t,t.mode,d),e.ref=t.ref,e.return=t,t.child=e)}if(y=e.child,(e.lanes&d)===0){var k=y.memoizedProps;if(i=i.compare,i=i!==null?i:Li,i(k,a)&&e.ref===t.ref)return mt(e,t,d)}return t.flags|=1,e=Ht(y,a),e.ref=t.ref,e.return=t,t.child=e}function qd(e,t,i,a,d){if(e!==null){var y=e.memoizedProps;if(Li(y,a)&&e.ref===t.ref)if(mn=!1,t.pendingProps=a=y,(e.lanes&d)!==0)(e.flags&131072)!==0&&(mn=!0);else return t.lanes=e.lanes,mt(e,t,d)}return Va(e,t,i,a,d)}function Yd(e,t,i){var a=t.pendingProps,d=a.children,y=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ie(qr,Nn),Nn|=i;else{if((i&1073741824)===0)return e=y!==null?y.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ie(qr,Nn),Nn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=y!==null?y.baseLanes:i,Ie(qr,Nn),Nn|=a}else y!==null?(a=y.baseLanes|i,t.memoizedState=null):a=i,Ie(qr,Nn),Nn|=a;return un(e,t,d,i),t.child}function Xd(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Va(e,t,i,a,d){var y=pn(i)?er:rn.current;return y=Ar(t,y),Vr(t,d),i=Ia(e,t,i,a,y,d),a=Ra(),e!==null&&!mn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~d,mt(e,t,d)):(Ae&&a&&ma(t),t.flags|=1,un(e,t,i,d),t.child)}function Gd(e,t,i,a,d){if(pn(i)){var y=!0;tl(t)}else y=!1;if(Vr(t,d),t.stateNode===null)xl(e,t),Od(t,i,a),ja(t,i,a,d),a=!0;else if(e===null){var k=t.stateNode,D=t.memoizedProps;k.props=D;var H=k.context,te=i.contextType;typeof te=="object"&&te!==null?te=Rn(te):(te=pn(i)?er:rn.current,te=Ar(t,te));var ae=i.getDerivedStateFromProps,ue=typeof ae=="function"||typeof k.getSnapshotBeforeUpdate=="function";ue||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==a||H!==te)&&Fd(t,k,a,te),Rt=!1;var se=t.memoizedState;k.state=se,fl(t,a,k,d),H=t.memoizedState,D!==a||se!==H||hn.current||Rt?(typeof ae=="function"&&(Fa(t,i,ae,a),H=t.memoizedState),(D=Rt||Ad(t,i,D,a,se,H,te))?(ue||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(t.flags|=4194308)):(typeof k.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=H),k.props=a,k.state=H,k.context=te,a=D):(typeof k.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{k=t.stateNode,fd(e,t),D=t.memoizedProps,te=t.type===t.elementType?D:jn(t.type,D),k.props=te,ue=t.pendingProps,se=k.context,H=i.contextType,typeof H=="object"&&H!==null?H=Rn(H):(H=pn(i)?er:rn.current,H=Ar(t,H));var pe=i.getDerivedStateFromProps;(ae=typeof pe=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(D!==ue||se!==H)&&Fd(t,k,a,H),Rt=!1,se=t.memoizedState,k.state=se,fl(t,a,k,d);var ge=t.memoizedState;D!==ue||se!==ge||hn.current||Rt?(typeof pe=="function"&&(Fa(t,i,pe,a),ge=t.memoizedState),(te=Rt||Ad(t,i,te,a,se,ge,H)||!1)?(ae||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(a,ge,H),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(a,ge,H)),typeof k.componentDidUpdate=="function"&&(t.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof k.componentDidUpdate!="function"||D===e.memoizedProps&&se===e.memoizedState||(t.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===e.memoizedProps&&se===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=ge),k.props=a,k.state=ge,k.context=H,a=te):(typeof k.componentDidUpdate!="function"||D===e.memoizedProps&&se===e.memoizedState||(t.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||D===e.memoizedProps&&se===e.memoizedState||(t.flags|=1024),a=!1)}return Ba(e,t,i,a,y,d)}function Ba(e,t,i,a,d,y){Xd(e,t);var k=(t.flags&128)!==0;if(!a&&!k)return d&&ed(t,i,!1),mt(e,t,y);a=t.stateNode,Wy.current=t;var D=k&&typeof i.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&k?(t.child=Hr(t,e.child,null,y),t.child=Hr(t,null,D,y)):un(e,t,D,y),t.memoizedState=a.state,d&&ed(t,i,!0),t.child}function Qd(e){var t=e.stateNode;t.pendingContext?Zf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zf(e,t.context,!1),Na(e,t.containerInfo)}function Kd(e,t,i,a,d){return jr(),wa(d),t.flags|=256,un(e,t,i,a),t.child}var Wa={dehydrated:null,treeContext:null,retryLane:0};function Ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,t,i){var a=t.pendingProps,d=He.current,y=!1,k=(t.flags&128)!==0,D;if((D=k)||(D=e!==null&&e.memoizedState===null?!1:(d&2)!==0),D?(y=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Ie(He,d&1),e===null)return va(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(k=a.children,e=a.fallback,y?(a=t.mode,y=t.child,k={mode:"hidden",children:k},(a&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=k):y=Il(k,a,0,null),e=cr(e,a,i,null),y.return=t,e.return=t,y.sibling=e,t.child=y,t.child.memoizedState=Ua(i),t.memoizedState=Wa,e):qa(t,k));if(d=e.memoizedState,d!==null&&(D=d.dehydrated,D!==null))return Uy(e,t,k,a,D,d,i);if(y){y=a.fallback,k=t.mode,d=e.child,D=d.sibling;var H={mode:"hidden",children:a.children};return(k&1)===0&&t.child!==d?(a=t.child,a.childLanes=0,a.pendingProps=H,t.deletions=null):(a=Ht(d,H),a.subtreeFlags=d.subtreeFlags&14680064),D!==null?y=Ht(D,y):(y=cr(y,k,i,null),y.flags|=2),y.return=t,a.return=t,a.sibling=y,t.child=a,a=y,y=t.child,k=e.child.memoizedState,k=k===null?Ua(i):{baseLanes:k.baseLanes|i,cachePool:null,transitions:k.transitions},y.memoizedState=k,y.childLanes=e.childLanes&~i,t.memoizedState=Wa,a}return y=e.child,e=y.sibling,a=Ht(y,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=i),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a}function qa(e,t){return t=Il({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function wl(e,t,i,a){return a!==null&&wa(a),Hr(t,e.child,null,i),e=qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Uy(e,t,i,a,d,y,k){if(i)return t.flags&256?(t.flags&=-257,a=Ha(Error(o(422))),wl(e,t,k,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(y=a.fallback,d=t.mode,a=Il({mode:"visible",children:a.children},d,0,null),y=cr(y,d,k,null),y.flags|=2,a.return=t,y.return=t,a.sibling=y,t.child=a,(t.mode&1)!==0&&Hr(t,e.child,null,k),t.child.memoizedState=Ua(k),t.memoizedState=Wa,y);if((t.mode&1)===0)return wl(e,t,k,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var D=a.dgst;return a=D,y=Error(o(419)),a=Ha(y,a,void 0),wl(e,t,k,a)}if(D=(k&e.childLanes)!==0,mn||D){if(a=Ke,a!==null){switch(k&-k){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|k))!==0?0:d,d!==0&&d!==y.retryLane&&(y.retryLane=d,ht(e,d),Vn(a,e,d,-1))}return au(),a=Ha(Error(o(421))),wl(e,t,k,a)}return d.data==="$?"?(t.flags|=128,t.child=e.child,t=i1.bind(null,e),d._reactRetry=t,null):(e=y.treeContext,Cn=Mt(d.nextSibling),kn=t,Ae=!0,Fn=null,e!==null&&(Ln[In++]=ft,Ln[In++]=dt,Ln[In++]=nr,ft=e.id,dt=e.overflow,nr=t),t=qa(t,a.children),t.flags|=4096,t)}function Jd(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),_a(e.return,t,i)}function Ya(e,t,i,a,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:d}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=a,y.tail=i,y.tailMode=d)}function eh(e,t,i){var a=t.pendingProps,d=a.revealOrder,y=a.tail;if(un(e,t,a.children,i),a=He.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,i,t);else if(e.tag===19)Jd(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ie(He,a),(t.mode&1)===0)t.memoizedState=null;else switch(d){case"forwards":for(i=t.child,d=null;i!==null;)e=i.alternate,e!==null&&dl(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=t.child,t.child=null):(d=i.sibling,i.sibling=null),Ya(t,!1,d,i,y);break;case"backwards":for(i=null,d=t.child,t.child=null;d!==null;){if(e=d.alternate,e!==null&&dl(e)===null){t.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}Ya(t,!0,i,null,y);break;case"together":Ya(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function xl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=Ht(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ht(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function qy(e,t,i){switch(t.tag){case 3:Qd(t),jr();break;case 5:pd(t);break;case 1:pn(t.type)&&tl(t);break;case 4:Na(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,d=t.memoizedProps.value;Ie(al,a._currentValue),a._currentValue=d;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ie(He,He.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Zd(e,t,i):(Ie(He,He.current&1),e=mt(e,t,i),e!==null?e.sibling:null);Ie(He,He.current&1);break;case 19:if(a=(i&t.childLanes)!==0,(e.flags&128)!==0){if(a)return eh(e,t,i);t.flags|=128}if(d=t.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Ie(He,He.current),a)break;return null;case 22:case 23:return t.lanes=0,Yd(e,t,i)}return mt(e,t,i)}var nh,Xa,th,rh;nh=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Xa=function(){},th=function(e,t,i,a){var d=e.memoizedProps;if(d!==a){e=t.stateNode,ir(et.current);var y=null;switch(i){case"input":d=_e(e,d),a=_e(e,a),y=[];break;case"select":d=G({},d,{value:void 0}),a=G({},a,{value:void 0}),y=[];break;case"textarea":d=lt(e,d),a=lt(e,a),y=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Jo)}ui(i,a);var k;i=null;for(te in d)if(!a.hasOwnProperty(te)&&d.hasOwnProperty(te)&&d[te]!=null)if(te==="style"){var D=d[te];for(k in D)D.hasOwnProperty(k)&&(i||(i={}),i[k]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(l.hasOwnProperty(te)?y||(y=[]):(y=y||[]).push(te,null));for(te in a){var H=a[te];if(D=d!=null?d[te]:void 0,a.hasOwnProperty(te)&&H!==D&&(H!=null||D!=null))if(te==="style")if(D){for(k in D)!D.hasOwnProperty(k)||H&&H.hasOwnProperty(k)||(i||(i={}),i[k]="");for(k in H)H.hasOwnProperty(k)&&D[k]!==H[k]&&(i||(i={}),i[k]=H[k])}else i||(y||(y=[]),y.push(te,i)),i=H;else te==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,D=D?D.__html:void 0,H!=null&&D!==H&&(y=y||[]).push(te,H)):te==="children"?typeof H!="string"&&typeof H!="number"||(y=y||[]).push(te,""+H):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(l.hasOwnProperty(te)?(H!=null&&te==="onScroll"&&ze("scroll",e),y||D===H||(y=[])):(y=y||[]).push(te,H))}i&&(y=y||[]).push("style",i);var te=y;(t.updateQueue=te)&&(t.flags|=4)}},rh=function(e,t,i,a){i!==a&&(t.flags|=4)};function qi(e,t){if(!Ae)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ln(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function Yy(e,t,i){var a=t.pendingProps;switch(ga(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(t),null;case 1:return pn(t.type)&&nl(),ln(t),null;case 3:return a=t.stateNode,Br(),De(hn),De(rn),Ma(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Fn!==null&&(ou(Fn),Fn=null))),Xa(e,t),ln(t),null;case 5:ba(t);var d=ir($i.current);if(i=t.type,e!==null&&t.stateNode!=null)th(e,t,i,a,d),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(o(166));return ln(t),null}if(e=ir(et.current),ll(t)){a=t.stateNode,i=t.type;var y=t.memoizedProps;switch(a[Jn]=t,a[Ai]=y,e=(t.mode&1)!==0,i){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(d=0;d<Ri.length;d++)ze(Ri[d],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":Ne(a,y),ze("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!y.multiple},ze("invalid",a);break;case"textarea":Qn(a,y),ze("invalid",a)}ui(i,y),d=null;for(var k in y)if(y.hasOwnProperty(k)){var D=y[k];k==="children"?typeof D=="string"?a.textContent!==D&&(y.suppressHydrationWarning!==!0&&Zo(a.textContent,D,e),d=["children",D]):typeof D=="number"&&a.textContent!==""+D&&(y.suppressHydrationWarning!==!0&&Zo(a.textContent,D,e),d=["children",""+D]):l.hasOwnProperty(k)&&D!=null&&k==="onScroll"&&ze("scroll",a)}switch(i){case"input":we(a),an(a,y,!0);break;case"textarea":we(a),dn(a);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(a.onclick=Jo)}a=d,t.updateQueue=a,a!==null&&(t.flags|=4)}else{k=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Mn(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=k.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=k.createElement(i,{is:a.is}):(e=k.createElement(i),i==="select"&&(k=e,a.multiple?k.multiple=!0:a.size&&(k.size=a.size))):e=k.createElementNS(e,i),e[Jn]=t,e[Ai]=a,nh(e,t,!1,!1),t.stateNode=e;e:{switch(k=ci(i,a),i){case"dialog":ze("cancel",e),ze("close",e),d=a;break;case"iframe":case"object":case"embed":ze("load",e),d=a;break;case"video":case"audio":for(d=0;d<Ri.length;d++)ze(Ri[d],e);d=a;break;case"source":ze("error",e),d=a;break;case"img":case"image":case"link":ze("error",e),ze("load",e),d=a;break;case"details":ze("toggle",e),d=a;break;case"input":Ne(e,a),d=_e(e,a),ze("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=G({},a,{value:void 0}),ze("invalid",e);break;case"textarea":Qn(e,a),d=lt(e,a),ze("invalid",e);break;default:d=a}ui(i,d),D=d;for(y in D)if(D.hasOwnProperty(y)){var H=D[y];y==="style"?_o(e,H):y==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Eo(e,H)):y==="children"?typeof H=="string"?(i!=="textarea"||H!=="")&&st(e,H):typeof H=="number"&&st(e,""+H):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(l.hasOwnProperty(y)?H!=null&&y==="onScroll"&&ze("scroll",e):H!=null&&S(e,y,H,k))}switch(i){case"input":we(e),an(e,a,!1);break;case"textarea":we(e),dn(e);break;case"option":a.value!=null&&e.setAttribute("value",""+K(a.value));break;case"select":e.multiple=!!a.multiple,y=a.value,y!=null?tn(e,!!a.multiple,y,!1):a.defaultValue!=null&&tn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Jo)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ln(t),null;case 6:if(e&&t.stateNode!=null)rh(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(i=ir($i.current),ir(et.current),ll(t)){if(a=t.stateNode,i=t.memoizedProps,a[Jn]=t,(y=a.nodeValue!==i)&&(e=kn,e!==null))switch(e.tag){case 3:Zo(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(a.nodeValue,i,(e.mode&1)!==0)}y&&(t.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Jn]=t,t.stateNode=a}return ln(t),null;case 13:if(De(He),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ae&&Cn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ld(),jr(),t.flags|=98560,y=!1;else if(y=ll(t),a!==null&&a.dehydrated!==null){if(e===null){if(!y)throw Error(o(318));if(y=t.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(o(317));y[Jn]=t}else jr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ln(t),y=!1}else Fn!==null&&(ou(Fn),Fn=null),y=!0;if(!y)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(He.current&1)!==0?Ge===0&&(Ge=3):au())),t.updateQueue!==null&&(t.flags|=4),ln(t),null);case 4:return Br(),Xa(e,t),e===null&&zi(t.stateNode.containerInfo),ln(t),null;case 10:return Sa(t.type._context),ln(t),null;case 17:return pn(t.type)&&nl(),ln(t),null;case 19:if(De(He),y=t.memoizedState,y===null)return ln(t),null;if(a=(t.flags&128)!==0,k=y.rendering,k===null)if(a)qi(y,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(k=dl(e),k!==null){for(t.flags|=128,qi(y,!1),a=k.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=i,i=t.child;i!==null;)y=i,e=a,y.flags&=14680066,k=y.alternate,k===null?(y.childLanes=0,y.lanes=e,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=k.childLanes,y.lanes=k.lanes,y.child=k.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=k.memoizedProps,y.memoizedState=k.memoizedState,y.updateQueue=k.updateQueue,y.type=k.type,e=k.dependencies,y.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ie(He,He.current&1|2),t.child}e=e.sibling}y.tail!==null&&je()>Yr&&(t.flags|=128,a=!0,qi(y,!1),t.lanes=4194304)}else{if(!a)if(e=dl(k),e!==null){if(t.flags|=128,a=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),qi(y,!0),y.tail===null&&y.tailMode==="hidden"&&!k.alternate&&!Ae)return ln(t),null}else 2*je()-y.renderingStartTime>Yr&&i!==1073741824&&(t.flags|=128,a=!0,qi(y,!1),t.lanes=4194304);y.isBackwards?(k.sibling=t.child,t.child=k):(i=y.last,i!==null?i.sibling=k:t.child=k,y.last=k)}return y.tail!==null?(t=y.tail,y.rendering=t,y.tail=t.sibling,y.renderingStartTime=je(),t.sibling=null,i=He.current,Ie(He,a?i&1|2:i&1),t):(ln(t),null);case 22:case 23:return su(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Nn&1073741824)!==0&&(ln(t),t.subtreeFlags&6&&(t.flags|=8192)):ln(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Xy(e,t){switch(ga(t),t.tag){case 1:return pn(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Br(),De(hn),De(rn),Ma(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return ba(t),null;case 13:if(De(He),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return De(He),null;case 4:return Br(),null;case 10:return Sa(t.type._context),null;case 22:case 23:return su(),null;case 24:return null;default:return null}}var El=!1,sn=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ur(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){Ve(e,t,a)}else i.current=null}function Ga(e,t,i){try{i()}catch(a){Ve(e,t,a)}}var ih=!1;function Qy(e,t){if(sa=$o,e=Af(),Js(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var d=a.anchorOffset,y=a.focusNode;a=a.focusOffset;try{i.nodeType,y.nodeType}catch{i=null;break e}var k=0,D=-1,H=-1,te=0,ae=0,ue=e,se=null;n:for(;;){for(var pe;ue!==i||d!==0&&ue.nodeType!==3||(D=k+d),ue!==y||a!==0&&ue.nodeType!==3||(H=k+a),ue.nodeType===3&&(k+=ue.nodeValue.length),(pe=ue.firstChild)!==null;)se=ue,ue=pe;for(;;){if(ue===e)break n;if(se===i&&++te===d&&(D=k),se===y&&++ae===a&&(H=k),(pe=ue.nextSibling)!==null)break;ue=se,se=ue.parentNode}ue=pe}i=D===-1||H===-1?null:{start:D,end:H}}else i=null}i=i||{start:0,end:0}}else i=null;for(aa={focusedElem:e,selectionRange:i},$o=!1,me=t;me!==null;)if(t=me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,me=e;else for(;me!==null;){t=me;try{var ge=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,Be=ge.memoizedState,ee=t.stateNode,q=ee.getSnapshotBeforeUpdate(t.elementType===t.type?ye:jn(t.type,ye),Be);ee.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var ne=t.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(ce){Ve(t,t.return,ce)}if(e=t.sibling,e!==null){e.return=t.return,me=e;break}me=t.return}return ge=ih,ih=!1,ge}function Yi(e,t,i){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var y=d.destroy;d.destroy=void 0,y!==void 0&&Ga(t,i,y)}d=d.next}while(d!==a)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==t)}}function Qa(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function oh(e){var t=e.alternate;t!==null&&(e.alternate=null,oh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jn],delete t[Ai],delete t[da],delete t[Iy],delete t[Ry])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lh(e){return e.tag===5||e.tag===3||e.tag===4}function sh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Jo));else if(a!==4&&(e=e.child,e!==null))for(Ka(e,t,i),e=e.sibling;e!==null;)Ka(e,t,i),e=e.sibling}function Za(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Za(e,t,i),e=e.sibling;e!==null;)Za(e,t,i),e=e.sibling}var Je=null,Hn=!1;function Dt(e,t,i){for(i=i.child;i!==null;)ah(e,t,i),i=i.sibling}function ah(e,t,i){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount(_r,i)}catch{}switch(i.tag){case 5:sn||Ur(i,t);case 6:var a=Je,d=Hn;Je=null,Dt(e,t,i),Je=a,Hn=d,Je!==null&&(Hn?(e=Je,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Je.removeChild(i.stateNode));break;case 18:Je!==null&&(Hn?(e=Je,i=i.stateNode,e.nodeType===8?fa(e.parentNode,i):e.nodeType===1&&fa(e,i),Ci(e)):fa(Je,i.stateNode));break;case 4:a=Je,d=Hn,Je=i.stateNode.containerInfo,Hn=!0,Dt(e,t,i),Je=a,Hn=d;break;case 0:case 11:case 14:case 15:if(!sn&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var y=d,k=y.destroy;y=y.tag,k!==void 0&&((y&2)!==0||(y&4)!==0)&&Ga(i,t,k),d=d.next}while(d!==a)}Dt(e,t,i);break;case 1:if(!sn&&(Ur(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(D){Ve(i,t,D)}Dt(e,t,i);break;case 21:Dt(e,t,i);break;case 22:i.mode&1?(sn=(a=sn)||i.memoizedState!==null,Dt(e,t,i),sn=a):Dt(e,t,i);break;default:Dt(e,t,i)}}function uh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Gy),t.forEach(function(a){var d=o1.bind(null,e,a);i.has(a)||(i.add(a),a.then(d,d))})}}function $n(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var d=i[a];try{var y=e,k=t,D=k;e:for(;D!==null;){switch(D.tag){case 5:Je=D.stateNode,Hn=!1;break e;case 3:Je=D.stateNode.containerInfo,Hn=!0;break e;case 4:Je=D.stateNode.containerInfo,Hn=!0;break e}D=D.return}if(Je===null)throw Error(o(160));ah(y,k,d),Je=null,Hn=!1;var H=d.alternate;H!==null&&(H.return=null),d.return=null}catch(te){Ve(d,t,te)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ch(t,e),t=t.sibling}function ch(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($n(t,e),tt(e),a&4){try{Yi(3,e,e.return),Sl(3,e)}catch(ye){Ve(e,e.return,ye)}try{Yi(5,e,e.return)}catch(ye){Ve(e,e.return,ye)}}break;case 1:$n(t,e),tt(e),a&512&&i!==null&&Ur(i,i.return);break;case 5:if($n(t,e),tt(e),a&512&&i!==null&&Ur(i,i.return),e.flags&32){var d=e.stateNode;try{st(d,"")}catch(ye){Ve(e,e.return,ye)}}if(a&4&&(d=e.stateNode,d!=null)){var y=e.memoizedProps,k=i!==null?i.memoizedProps:y,D=e.type,H=e.updateQueue;if(e.updateQueue=null,H!==null)try{D==="input"&&y.type==="radio"&&y.name!=null&&be(d,y),ci(D,k);var te=ci(D,y);for(k=0;k<H.length;k+=2){var ae=H[k],ue=H[k+1];ae==="style"?_o(d,ue):ae==="dangerouslySetInnerHTML"?Eo(d,ue):ae==="children"?st(d,ue):S(d,ae,ue,te)}switch(D){case"input":Re(d,y);break;case"textarea":Kn(d,y);break;case"select":var se=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!y.multiple;var pe=y.value;pe!=null?tn(d,!!y.multiple,pe,!1):se!==!!y.multiple&&(y.defaultValue!=null?tn(d,!!y.multiple,y.defaultValue,!0):tn(d,!!y.multiple,y.multiple?[]:"",!1))}d[Ai]=y}catch(ye){Ve(e,e.return,ye)}}break;case 6:if($n(t,e),tt(e),a&4){if(e.stateNode===null)throw Error(o(162));d=e.stateNode,y=e.memoizedProps;try{d.nodeValue=y}catch(ye){Ve(e,e.return,ye)}}break;case 3:if($n(t,e),tt(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(ye){Ve(e,e.return,ye)}break;case 4:$n(t,e),tt(e);break;case 13:$n(t,e),tt(e),d=e.child,d.flags&8192&&(y=d.memoizedState!==null,d.stateNode.isHidden=y,!y||d.alternate!==null&&d.alternate.memoizedState!==null||(nu=je())),a&4&&uh(e);break;case 22:if(ae=i!==null&&i.memoizedState!==null,e.mode&1?(sn=(te=sn)||ae,$n(t,e),sn=te):$n(t,e),tt(e),a&8192){if(te=e.memoizedState!==null,(e.stateNode.isHidden=te)&&!ae&&(e.mode&1)!==0)for(me=e,ae=e.child;ae!==null;){for(ue=me=ae;me!==null;){switch(se=me,pe=se.child,se.tag){case 0:case 11:case 14:case 15:Yi(4,se,se.return);break;case 1:Ur(se,se.return);var ge=se.stateNode;if(typeof ge.componentWillUnmount=="function"){a=se,i=se.return;try{t=a,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ye){Ve(a,i,ye)}}break;case 5:Ur(se,se.return);break;case 22:if(se.memoizedState!==null){hh(ue);continue}}pe!==null?(pe.return=se,me=pe):hh(ue)}ae=ae.sibling}e:for(ae=null,ue=e;;){if(ue.tag===5){if(ae===null){ae=ue;try{d=ue.stateNode,te?(y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(D=ue.stateNode,H=ue.memoizedProps.style,k=H!=null&&H.hasOwnProperty("display")?H.display:null,D.style.display=So("display",k))}catch(ye){Ve(e,e.return,ye)}}}else if(ue.tag===6){if(ae===null)try{ue.stateNode.nodeValue=te?"":ue.memoizedProps}catch(ye){Ve(e,e.return,ye)}}else if((ue.tag!==22&&ue.tag!==23||ue.memoizedState===null||ue===e)&&ue.child!==null){ue.child.return=ue,ue=ue.child;continue}if(ue===e)break e;for(;ue.sibling===null;){if(ue.return===null||ue.return===e)break e;ae===ue&&(ae=null),ue=ue.return}ae===ue&&(ae=null),ue.sibling.return=ue.return,ue=ue.sibling}}break;case 19:$n(t,e),tt(e),a&4&&uh(e);break;case 21:break;default:$n(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(lh(i)){var a=i;break e}i=i.return}throw Error(o(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(st(d,""),a.flags&=-33);var y=sh(e);Za(e,y,d);break;case 3:case 4:var k=a.stateNode.containerInfo,D=sh(e);Ka(e,D,k);break;default:throw Error(o(161))}}catch(H){Ve(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ky(e,t,i){me=e,fh(e)}function fh(e,t,i){for(var a=(e.mode&1)!==0;me!==null;){var d=me,y=d.child;if(d.tag===22&&a){var k=d.memoizedState!==null||El;if(!k){var D=d.alternate,H=D!==null&&D.memoizedState!==null||sn;D=El;var te=sn;if(El=k,(sn=H)&&!te)for(me=d;me!==null;)k=me,H=k.child,k.tag===22&&k.memoizedState!==null?ph(d):H!==null?(H.return=k,me=H):ph(d);for(;y!==null;)me=y,fh(y),y=y.sibling;me=d,El=D,sn=te}dh(e)}else(d.subtreeFlags&8772)!==0&&y!==null?(y.return=d,me=y):dh(e)}}function dh(e){for(;me!==null;){var t=me;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:sn||Sl(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!sn)if(i===null)a.componentDidMount();else{var d=t.elementType===t.type?i.memoizedProps:jn(t.type,i.memoizedProps);a.componentDidUpdate(d,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var y=t.updateQueue;y!==null&&hd(t,y,a);break;case 3:var k=t.updateQueue;if(k!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}hd(t,k,i)}break;case 5:var D=t.stateNode;if(i===null&&t.flags&4){i=D;var H=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&i.focus();break;case"img":H.src&&(i.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var te=t.alternate;if(te!==null){var ae=te.memoizedState;if(ae!==null){var ue=ae.dehydrated;ue!==null&&Ci(ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}sn||t.flags&512&&Qa(t)}catch(se){Ve(t,t.return,se)}}if(t===e){me=null;break}if(i=t.sibling,i!==null){i.return=t.return,me=i;break}me=t.return}}function hh(e){for(;me!==null;){var t=me;if(t===e){me=null;break}var i=t.sibling;if(i!==null){i.return=t.return,me=i;break}me=t.return}}function ph(e){for(;me!==null;){var t=me;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Sl(4,t)}catch(H){Ve(t,i,H)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var d=t.return;try{a.componentDidMount()}catch(H){Ve(t,d,H)}}var y=t.return;try{Qa(t)}catch(H){Ve(t,y,H)}break;case 5:var k=t.return;try{Qa(t)}catch(H){Ve(t,k,H)}}}catch(H){Ve(t,t.return,H)}if(t===e){me=null;break}var D=t.sibling;if(D!==null){D.return=t.return,me=D;break}me=t.return}}var Zy=Math.ceil,_l=N.ReactCurrentDispatcher,Ja=N.ReactCurrentOwner,Dn=N.ReactCurrentBatchConfig,Me=0,Ke=null,We=null,en=0,Nn=0,qr=Tt(0),Ge=0,Xi=null,lr=0,kl=0,eu=0,Gi=null,gn=null,nu=0,Yr=1/0,gt=null,Cl=!1,tu=null,At=null,Nl=!1,Ot=null,bl=0,Qi=0,ru=null,Pl=-1,Ml=0;function cn(){return(Me&6)!==0?je():Pl!==-1?Pl:Pl=je()}function Ft(e){return(e.mode&1)===0?1:(Me&2)!==0&&en!==0?en&-en:Dy.transition!==null?(Ml===0&&(Ml=Fo()),Ml):(e=Le,e!==0||(e=window.event,e=e===void 0?16:gf(e.type)),e)}function Vn(e,t,i,a){if(50<Qi)throw Qi=0,ru=null,Error(o(185));Zt(e,i,a),((Me&2)===0||e!==Ke)&&(e===Ke&&((Me&2)===0&&(kl|=i),Ge===4&&jt(e,en)),yn(e,a),i===1&&Me===0&&(t.mode&1)===0&&(Yr=je()+500,rl&&It()))}function yn(e,t){var i=e.callbackNode;Oo(e,t);var a=at(e,e===Ke?en:0);if(a===0)i!==null&&Ro(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(i!=null&&Ro(i),t===1)e.tag===0?zy(gh.bind(null,e)):nd(gh.bind(null,e)),Ty(function(){(Me&6)===0&&It()}),i=null;else{switch(af(a)){case 1:i=wi;break;case 4:i=Do;break;case 16:i=Sr;break;case 536870912:i=Ao;break;default:i=Sr}i=kh(i,mh.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function mh(e,t){if(Pl=-1,Ml=0,(Me&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Xr()&&e.callbackNode!==i)return null;var a=at(e,e===Ke?en:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=Tl(e,a);else{t=a;var d=Me;Me|=2;var y=vh();(Ke!==e||en!==t)&&(gt=null,Yr=je()+500,ar(e,t));do try{n1();break}catch(D){yh(e,D)}while(!0);Ea(),_l.current=y,Me=d,We!==null?t=0:(Ke=null,en=0,t=Ge)}if(t!==0){if(t===2&&(d=xi(e),d!==0&&(a=d,t=iu(e,d))),t===1)throw i=Xi,ar(e,0),jt(e,a),yn(e,je()),i;if(t===6)jt(e,a);else{if(d=e.current.alternate,(a&30)===0&&!Jy(d)&&(t=Tl(e,a),t===2&&(y=xi(e),y!==0&&(a=y,t=iu(e,y))),t===1))throw i=Xi,ar(e,0),jt(e,a),yn(e,je()),i;switch(e.finishedWork=d,e.finishedLanes=a,t){case 0:case 1:throw Error(o(345));case 2:ur(e,gn,gt);break;case 3:if(jt(e,a),(a&130023424)===a&&(t=nu+500-je(),10<t)){if(at(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){cn(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=ca(ur.bind(null,e,gn,gt),t);break}ur(e,gn,gt);break;case 4:if(jt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,d=-1;0<a;){var k=31-Sn(a);y=1<<k,k=t[k],k>d&&(d=k),a&=~y}if(a=d,a=je()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Zy(a/1960))-a,10<a){e.timeoutHandle=ca(ur.bind(null,e,gn,gt),a);break}ur(e,gn,gt);break;case 5:ur(e,gn,gt);break;default:throw Error(o(329))}}}return yn(e,je()),e.callbackNode===i?mh.bind(null,e):null}function iu(e,t){var i=Gi;return e.current.memoizedState.isDehydrated&&(ar(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=gn,gn=i,t!==null&&ou(t)),e}function ou(e){gn===null?gn=e:gn.push.apply(gn,e)}function Jy(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var d=i[a],y=d.getSnapshot;d=d.value;try{if(!On(y(),d))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~eu,t&=~kl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Sn(t),a=1<<i;e[i]=-1,t&=~a}}function gh(e){if((Me&6)!==0)throw Error(o(327));Xr();var t=at(e,0);if((t&1)===0)return yn(e,je()),null;var i=Tl(e,t);if(e.tag!==0&&i===2){var a=xi(e);a!==0&&(t=a,i=iu(e,a))}if(i===1)throw i=Xi,ar(e,0),jt(e,t),yn(e,je()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ur(e,gn,gt),yn(e,je()),null}function lu(e,t){var i=Me;Me|=1;try{return e(t)}finally{Me=i,Me===0&&(Yr=je()+500,rl&&It())}}function sr(e){Ot!==null&&Ot.tag===0&&(Me&6)===0&&Xr();var t=Me;Me|=1;var i=Dn.transition,a=Le;try{if(Dn.transition=null,Le=1,e)return e()}finally{Le=a,Dn.transition=i,Me=t,(Me&6)===0&&It()}}function su(){Nn=qr.current,De(qr)}function ar(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,My(i)),We!==null)for(i=We.return;i!==null;){var a=i;switch(ga(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&nl();break;case 3:Br(),De(hn),De(rn),Ma();break;case 5:ba(a);break;case 4:Br();break;case 13:De(He);break;case 19:De(He);break;case 10:Sa(a.type._context);break;case 22:case 23:su()}i=i.return}if(Ke=e,We=e=Ht(e.current,null),en=Nn=t,Ge=0,Xi=null,eu=kl=lr=0,gn=Gi=null,rr!==null){for(t=0;t<rr.length;t++)if(i=rr[t],a=i.interleaved,a!==null){i.interleaved=null;var d=a.next,y=i.pending;if(y!==null){var k=y.next;y.next=d,a.next=k}i.pending=a}rr=null}return e}function yh(e,t){do{var i=We;try{if(Ea(),hl.current=yl,pl){for(var a=$e.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}pl=!1}if(or=0,Qe=Xe=$e=null,Vi=!1,Bi=0,Ja.current=null,i===null||i.return===null){Ge=1,Xi=t,We=null;break}e:{var y=e,k=i.return,D=i,H=t;if(t=en,D.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var te=H,ae=D,ue=ae.tag;if((ae.mode&1)===0&&(ue===0||ue===11||ue===15)){var se=ae.alternate;se?(ae.updateQueue=se.updateQueue,ae.memoizedState=se.memoizedState,ae.lanes=se.lanes):(ae.updateQueue=null,ae.memoizedState=null)}var pe=Vd(k);if(pe!==null){pe.flags&=-257,Bd(pe,k,D,y,t),pe.mode&1&&$d(y,te,t),t=pe,H=te;var ge=t.updateQueue;if(ge===null){var ye=new Set;ye.add(H),t.updateQueue=ye}else ge.add(H);break e}else{if((t&1)===0){$d(y,te,t),au();break e}H=Error(o(426))}}else if(Ae&&D.mode&1){var Be=Vd(k);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),Bd(Be,k,D,y,t),wa(Wr(H,D));break e}}y=H=Wr(H,D),Ge!==4&&(Ge=2),Gi===null?Gi=[y]:Gi.push(y),y=k;do{switch(y.tag){case 3:y.flags|=65536,t&=-t,y.lanes|=t;var ee=jd(y,H,t);dd(y,ee);break e;case 1:D=H;var q=y.type,ne=y.stateNode;if((y.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(At===null||!At.has(ne)))){y.flags|=65536,t&=-t,y.lanes|=t;var ce=Hd(y,D,t);dd(y,ce);break e}}y=y.return}while(y!==null)}xh(i)}catch(ve){t=ve,We===i&&i!==null&&(We=i=i.return);continue}break}while(!0)}function vh(){var e=_l.current;return _l.current=yl,e===null?yl:e}function au(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ke===null||(lr&268435455)===0&&(kl&268435455)===0||jt(Ke,en)}function Tl(e,t){var i=Me;Me|=2;var a=vh();(Ke!==e||en!==t)&&(gt=null,ar(e,t));do try{e1();break}catch(d){yh(e,d)}while(!0);if(Ea(),Me=i,_l.current=a,We!==null)throw Error(o(261));return Ke=null,en=0,Ge}function e1(){for(;We!==null;)wh(We)}function n1(){for(;We!==null&&!Ls();)wh(We)}function wh(e){var t=_h(e.alternate,e,Nn);e.memoizedProps=e.pendingProps,t===null?xh(e):We=t,Ja.current=null}function xh(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=Yy(i,t,Nn),i!==null){We=i;return}}else{if(i=Xy(i,t),i!==null){i.flags&=32767,We=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ge===0&&(Ge=5)}function ur(e,t,i){var a=Le,d=Dn.transition;try{Dn.transition=null,Le=1,t1(e,t,i,a)}finally{Dn.transition=d,Le=a}return null}function t1(e,t,i,a){do Xr();while(Ot!==null);if((Me&6)!==0)throw Error(o(327));i=e.finishedWork;var d=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var y=i.lanes|i.childLanes;if(js(e,y),e===Ke&&(We=Ke=null,en=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Nl||(Nl=!0,kh(Sr,function(){return Xr(),null})),y=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||y){y=Dn.transition,Dn.transition=null;var k=Le;Le=1;var D=Me;Me|=4,Ja.current=null,Qy(e,i),ch(i,e),Sy(aa),$o=!!sa,aa=sa=null,e.current=i,Ky(i),zo(),Me=D,Le=k,Dn.transition=y}else e.current=i;if(Nl&&(Nl=!1,Ot=e,bl=d),y=e.pendingLanes,y===0&&(At=null),zs(i.stateNode),yn(e,je()),t!==null)for(a=e.onRecoverableError,i=0;i<t.length;i++)d=t[i],a(d.value,{componentStack:d.stack,digest:d.digest});if(Cl)throw Cl=!1,e=tu,tu=null,e;return(bl&1)!==0&&e.tag!==0&&Xr(),y=e.pendingLanes,(y&1)!==0?e===ru?Qi++:(Qi=0,ru=e):Qi=0,It(),null}function Xr(){if(Ot!==null){var e=af(bl),t=Dn.transition,i=Le;try{if(Dn.transition=null,Le=16>e?16:e,Ot===null)var a=!1;else{if(e=Ot,Ot=null,bl=0,(Me&6)!==0)throw Error(o(331));var d=Me;for(Me|=4,me=e.current;me!==null;){var y=me,k=y.child;if((me.flags&16)!==0){var D=y.deletions;if(D!==null){for(var H=0;H<D.length;H++){var te=D[H];for(me=te;me!==null;){var ae=me;switch(ae.tag){case 0:case 11:case 15:Yi(8,ae,y)}var ue=ae.child;if(ue!==null)ue.return=ae,me=ue;else for(;me!==null;){ae=me;var se=ae.sibling,pe=ae.return;if(oh(ae),ae===te){me=null;break}if(se!==null){se.return=pe,me=se;break}me=pe}}}var ge=y.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var Be=ye.sibling;ye.sibling=null,ye=Be}while(ye!==null)}}me=y}}if((y.subtreeFlags&2064)!==0&&k!==null)k.return=y,me=k;else e:for(;me!==null;){if(y=me,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Yi(9,y,y.return)}var ee=y.sibling;if(ee!==null){ee.return=y.return,me=ee;break e}me=y.return}}var q=e.current;for(me=q;me!==null;){k=me;var ne=k.child;if((k.subtreeFlags&2064)!==0&&ne!==null)ne.return=k,me=ne;else e:for(k=q;me!==null;){if(D=me,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Sl(9,D)}}catch(ve){Ve(D,D.return,ve)}if(D===k){me=null;break e}var ce=D.sibling;if(ce!==null){ce.return=D.return,me=ce;break e}me=D.return}}if(Me=d,It(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot(_r,e)}catch{}a=!0}return a}finally{Le=i,Dn.transition=t}}return!1}function Eh(e,t,i){t=Wr(i,t),t=jd(e,t,1),e=zt(e,t,1),t=cn(),e!==null&&(Zt(e,1,t),yn(e,t))}function Ve(e,t,i){if(e.tag===3)Eh(e,e,i);else for(;t!==null;){if(t.tag===3){Eh(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(At===null||!At.has(a))){e=Wr(i,e),e=Hd(t,e,1),t=zt(t,e,1),e=cn(),t!==null&&(Zt(t,1,e),yn(t,e));break}}t=t.return}}function r1(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),t=cn(),e.pingedLanes|=e.suspendedLanes&i,Ke===e&&(en&i)===i&&(Ge===4||Ge===3&&(en&130023424)===en&&500>je()-nu?ar(e,0):eu|=i),yn(e,t)}function Sh(e,t){t===0&&((e.mode&1)===0?t=1:(t=Cr,Cr<<=1,(Cr&130023424)===0&&(Cr=4194304)));var i=cn();e=ht(e,t),e!==null&&(Zt(e,t,i),yn(e,i))}function i1(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Sh(e,i)}function o1(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(t),Sh(e,i)}var _h;_h=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||hn.current)mn=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return mn=!1,qy(e,t,i);mn=(e.flags&131072)!==0}else mn=!1,Ae&&(t.flags&1048576)!==0&&td(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;xl(e,t),e=t.pendingProps;var d=Ar(t,rn.current);Vr(t,i),d=Ia(null,t,a,e,d,i);var y=Ra();return t.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pn(a)?(y=!0,tl(t)):y=!1,t.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ca(t),d.updater=vl,t.stateNode=d,d._reactInternals=t,ja(t,a,e,i),t=Ba(null,t,a,!0,y,i)):(t.tag=0,Ae&&y&&ma(t),un(null,t,d,i),t=t.child),t;case 16:a=t.elementType;e:{switch(xl(e,t),e=t.pendingProps,d=a._init,a=d(a._payload),t.type=a,d=t.tag=s1(a),e=jn(a,e),d){case 0:t=Va(null,t,a,e,i);break e;case 1:t=Gd(null,t,a,e,i);break e;case 11:t=Wd(null,t,a,e,i);break e;case 14:t=Ud(null,t,a,jn(a.type,e),i);break e}throw Error(o(306,a,""))}return t;case 0:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:jn(a,d),Va(e,t,a,d,i);case 1:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:jn(a,d),Gd(e,t,a,d,i);case 3:e:{if(Qd(t),e===null)throw Error(o(387));a=t.pendingProps,y=t.memoizedState,d=y.element,fd(e,t),fl(t,a,null,i);var k=t.memoizedState;if(a=k.element,y.isDehydrated)if(y={element:a,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},t.updateQueue.baseState=y,t.memoizedState=y,t.flags&256){d=Wr(Error(o(423)),t),t=Kd(e,t,a,i,d);break e}else if(a!==d){d=Wr(Error(o(424)),t),t=Kd(e,t,a,i,d);break e}else for(Cn=Mt(t.stateNode.containerInfo.firstChild),kn=t,Ae=!0,Fn=null,i=ud(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(jr(),a===d){t=mt(e,t,i);break e}un(e,t,a,i)}t=t.child}return t;case 5:return pd(t),e===null&&va(t),a=t.type,d=t.pendingProps,y=e!==null?e.memoizedProps:null,k=d.children,ua(a,d)?k=null:y!==null&&ua(a,y)&&(t.flags|=32),Xd(e,t),un(e,t,k,i),t.child;case 6:return e===null&&va(t),null;case 13:return Zd(e,t,i);case 4:return Na(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Hr(t,null,a,i):un(e,t,a,i),t.child;case 11:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:jn(a,d),Wd(e,t,a,d,i);case 7:return un(e,t,t.pendingProps,i),t.child;case 8:return un(e,t,t.pendingProps.children,i),t.child;case 12:return un(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(a=t.type._context,d=t.pendingProps,y=t.memoizedProps,k=d.value,Ie(al,a._currentValue),a._currentValue=k,y!==null)if(On(y.value,k)){if(y.children===d.children&&!hn.current){t=mt(e,t,i);break e}}else for(y=t.child,y!==null&&(y.return=t);y!==null;){var D=y.dependencies;if(D!==null){k=y.child;for(var H=D.firstContext;H!==null;){if(H.context===a){if(y.tag===1){H=pt(-1,i&-i),H.tag=2;var te=y.updateQueue;if(te!==null){te=te.shared;var ae=te.pending;ae===null?H.next=H:(H.next=ae.next,ae.next=H),te.pending=H}}y.lanes|=i,H=y.alternate,H!==null&&(H.lanes|=i),_a(y.return,i,t),D.lanes|=i;break}H=H.next}}else if(y.tag===10)k=y.type===t.type?null:y.child;else if(y.tag===18){if(k=y.return,k===null)throw Error(o(341));k.lanes|=i,D=k.alternate,D!==null&&(D.lanes|=i),_a(k,i,t),k=y.sibling}else k=y.child;if(k!==null)k.return=y;else for(k=y;k!==null;){if(k===t){k=null;break}if(y=k.sibling,y!==null){y.return=k.return,k=y;break}k=k.return}y=k}un(e,t,d.children,i),t=t.child}return t;case 9:return d=t.type,a=t.pendingProps.children,Vr(t,i),d=Rn(d),a=a(d),t.flags|=1,un(e,t,a,i),t.child;case 14:return a=t.type,d=jn(a,t.pendingProps),d=jn(a.type,d),Ud(e,t,a,d,i);case 15:return qd(e,t,t.type,t.pendingProps,i);case 17:return a=t.type,d=t.pendingProps,d=t.elementType===a?d:jn(a,d),xl(e,t),t.tag=1,pn(a)?(e=!0,tl(t)):e=!1,Vr(t,i),Od(t,a,d),ja(t,a,d,i),Ba(null,t,a,!0,e,i);case 19:return eh(e,t,i);case 22:return Yd(e,t,i)}throw Error(o(156,t.tag))};function kh(e,t){return Io(e,t)}function l1(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(e,t,i,a){return new l1(e,t,i,a)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function s1(e){if(typeof e=="function")return uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===A)return 11;if(e===Y)return 14}return 2}function Ht(e,t){var i=e.alternate;return i===null?(i=An(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Ll(e,t,i,a,d,y){var k=2;if(a=e,typeof e=="function")uu(e)&&(k=1);else if(typeof e=="string")k=5;else e:switch(e){case F:return cr(i.children,d,y,t);case P:k=8,d|=8;break;case R:return e=An(12,i,t,d|2),e.elementType=R,e.lanes=y,e;case J:return e=An(13,i,t,d),e.elementType=J,e.lanes=y,e;case T:return e=An(19,i,t,d),e.elementType=T,e.lanes=y,e;case X:return Il(i,d,y,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:k=10;break e;case I:k=9;break e;case A:k=11;break e;case Y:k=14;break e;case U:k=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=An(k,i,t,d),t.elementType=e,t.type=a,t.lanes=y,t}function cr(e,t,i,a){return e=An(7,e,a,t),e.lanes=i,e}function Il(e,t,i,a){return e=An(22,e,a,t),e.elementType=X,e.lanes=i,e.stateNode={isHidden:!1},e}function cu(e,t,i){return e=An(6,e,null,t),e.lanes=i,e}function fu(e,t,i){return t=An(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function a1(e,t,i,a,d){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kt(0),this.expirationTimes=Kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function du(e,t,i,a,d,y,k,D,H){return e=new a1(e,t,i,D,H),t===1?(t=1,y===!0&&(t|=8)):t=0,y=An(3,null,null,t),e.current=y,y.stateNode=e,y.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(y),e}function u1(e,t,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:a==null?null:""+a,children:e,containerInfo:t,implementation:i}}function Ch(e){if(!e)return Lt;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(pn(i))return Jf(e,i,t)}return t}function Nh(e,t,i,a,d,y,k,D,H){return e=du(i,a,!0,e,d,y,k,D,H),e.context=Ch(null),i=e.current,a=cn(),d=Ft(i),y=pt(a,d),y.callback=t??null,zt(i,y,d),e.current.lanes=d,Zt(e,d,a),yn(e,a),e}function Rl(e,t,i,a){var d=t.current,y=cn(),k=Ft(d);return i=Ch(i),t.context===null?t.context=i:t.pendingContext=i,t=pt(y,k),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=zt(d,t,k),e!==null&&(Vn(e,d,k,y),cl(e,d,k)),k}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function hu(e,t){bh(e,t),(e=e.alternate)&&bh(e,t)}function c1(){return null}var Ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}Dl.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Rl(e,t,null,null)},Dl.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;sr(function(){Rl(null,e,null,null)}),t[ut]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ff();e={blockedOn:null,target:e,priority:t};for(var i=0;i<Nt.length&&t!==0&&t<Nt[i].priority;i++);Nt.splice(i,0,e),i===0&&pf(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mh(){}function f1(e,t,i,a,d){if(d){if(typeof a=="function"){var y=a;a=function(){var te=zl(k);y.call(te)}}var k=Nh(t,a,e,0,null,!1,!1,"",Mh);return e._reactRootContainer=k,e[ut]=k.current,zi(e.nodeType===8?e.parentNode:e),sr(),k}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var D=a;a=function(){var te=zl(H);D.call(te)}}var H=du(e,0,!1,null,null,!1,!1,"",Mh);return e._reactRootContainer=H,e[ut]=H.current,zi(e.nodeType===8?e.parentNode:e),sr(function(){Rl(t,H,i,a)}),H}function Ol(e,t,i,a,d){var y=i._reactRootContainer;if(y){var k=y;if(typeof d=="function"){var D=d;d=function(){var H=zl(k);D.call(H)}}Rl(t,k,e,d)}else k=f1(i,t,e,d,a);return zl(k)}uf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Qt(t.pendingLanes);i!==0&&(Nr(t,i|1),yn(t,je()),(Me&6)===0&&(Yr=je()+500,It()))}break;case 13:sr(function(){var a=ht(e,1);if(a!==null){var d=cn();Vn(a,e,1,d)}}),hu(e,1)}},Hs=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var i=cn();Vn(t,e,134217728,i)}hu(e,134217728)}},cf=function(e){if(e.tag===13){var t=Ft(e),i=ht(e,t);if(i!==null){var a=cn();Vn(i,e,t,a)}hu(e,t)}},ff=function(){return Le},df=function(e,t){var i=Le;try{return Le=e,t()}finally{Le=i}},hi=function(e,t,i){switch(t){case"input":if(Re(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var d=el(a);if(!d)throw Error(o(90));he(a),Re(a,d)}}}break;case"textarea":Kn(e,i);break;case"select":t=i.value,t!=null&&tn(e,!!i.multiple,t,!1)}},bo=lu,Po=sr;var d1={usingClientEntryPoint:!1,Events:[Oi,zr,el,Co,No,lu]},Ki={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h1={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=To(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||c1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{_r=Fl.inject(h1),En=Fl}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=d1,vn.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(o(200));return u1(e,t,null,i)},vn.createRoot=function(e,t){if(!mu(e))throw Error(o(299));var i=!1,a="",d=Ph;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(d=t.onRecoverableError)),t=du(e,1,!1,null,null,i,!1,a,d),e[ut]=t.current,zi(e.nodeType===8?e.parentNode:e),new pu(t)},vn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=To(t),e=e===null?null:e.stateNode,e},vn.flushSync=function(e){return sr(e)},vn.hydrate=function(e,t,i){if(!Al(t))throw Error(o(200));return Ol(null,e,t,!0,i)},vn.hydrateRoot=function(e,t,i){if(!mu(e))throw Error(o(405));var a=i!=null&&i.hydratedSources||null,d=!1,y="",k=Ph;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(y=i.identifierPrefix),i.onRecoverableError!==void 0&&(k=i.onRecoverableError)),t=Nh(t,null,e,1,i??null,d,!1,y,k),e[ut]=t.current,zi(e),a)for(e=0;e<a.length;e++)i=a[e],d=i._getVersion,d=d(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,d]:t.mutableSourceEagerHydrationData.push(i,d);return new Dl(t)},vn.render=function(e,t,i){if(!Al(t))throw Error(o(200));return Ol(null,e,t,!1,i)},vn.unmountComponentAtNode=function(e){if(!Al(e))throw Error(o(40));return e._reactRootContainer?(sr(function(){Ol(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1},vn.unstable_batchedUpdates=lu,vn.unstable_renderSubtreeIntoContainer=function(e,t,i,a){if(!Al(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Ol(e,t,i,!1,a)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var Oh;function Bm(){if(Oh)return vu.exports;Oh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),vu.exports=_1(),vu.exports}var Fh;function k1(){if(Fh)return jl;Fh=1;var n=Bm();return jl.createRoot=n.createRoot,jl.hydrateRoot=n.hydrateRoot,jl}var C1=k1();function Ye(n){if(typeof n=="string"||typeof n=="number")return""+n;let r="";if(Array.isArray(n))for(let o=0,s;o<n.length;o++)(s=Ye(n[o]))!==""&&(r+=(r&&" ")+s);else for(let o in n)n[o]&&(r+=(r&&" ")+o);return r}var N1={value:()=>{}};function fs(){for(var n=0,r=arguments.length,o={},s;n<r;++n){if(!(s=arguments[n]+"")||s in o||/[\s.]/.test(s))throw new Error("illegal type: "+s);o[s]=[]}return new Gl(o)}function Gl(n){this._=n}function b1(n,r){return n.trim().split(/^|\s+/).map(function(o){var s="",l=o.indexOf(".");if(l>=0&&(s=o.slice(l+1),o=o.slice(0,l)),o&&!r.hasOwnProperty(o))throw new Error("unknown type: "+o);return{type:o,name:s}})}Gl.prototype=fs.prototype={constructor:Gl,on:function(n,r){var o=this._,s=b1(n+"",o),l,c=-1,u=s.length;if(arguments.length<2){for(;++c<u;)if((l=(n=s[c]).type)&&(l=P1(o[l],n.name)))return l;return}if(r!=null&&typeof r!="function")throw new Error("invalid callback: "+r);for(;++c<u;)if(l=(n=s[c]).type)o[l]=jh(o[l],n.name,r);else if(r==null)for(l in o)o[l]=jh(o[l],n.name,null);return this},copy:function(){var n={},r=this._;for(var o in r)n[o]=r[o].slice();return new Gl(n)},call:function(n,r){if((l=arguments.length-2)>0)for(var o=new Array(l),s=0,l,c;s<l;++s)o[s]=arguments[s+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(c=this._[n],s=0,l=c.length;s<l;++s)c[s].value.apply(r,o)},apply:function(n,r,o){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var s=this._[n],l=0,c=s.length;l<c;++l)s[l].value.apply(r,o)}};function P1(n,r){for(var o=0,s=n.length,l;o<s;++o)if((l=n[o]).name===r)return l.value}function jh(n,r,o){for(var s=0,l=n.length;s<l;++s)if(n[s].name===r){n[s]=N1,n=n.slice(0,s).concat(n.slice(s+1));break}return o!=null&&n.push({name:r,value:o}),n}var bc="http://www.w3.org/1999/xhtml";const Hh={svg:"http://www.w3.org/2000/svg",xhtml:bc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ds(n){var r=n+="",o=r.indexOf(":");return o>=0&&(r=n.slice(0,o))!=="xmlns"&&(n=n.slice(o+1)),Hh.hasOwnProperty(r)?{space:Hh[r],local:n}:n}function M1(n){return function(){var r=this.ownerDocument,o=this.namespaceURI;return o===bc&&r.documentElement.namespaceURI===bc?r.createElement(n):r.createElementNS(o,n)}}function T1(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Wm(n){var r=ds(n);return(r.local?T1:M1)(r)}function L1(){}function Vc(n){return n==null?L1:function(){return this.querySelector(n)}}function I1(n){typeof n!="function"&&(n=Vc(n));for(var r=this._groups,o=r.length,s=new Array(o),l=0;l<o;++l)for(var c=r[l],u=c.length,f=s[l]=new Array(u),p,g,m=0;m<u;++m)(p=c[m])&&(g=n.call(p,p.__data__,m,c))&&("__data__"in p&&(g.__data__=p.__data__),f[m]=g);return new Pn(s,this._parents)}function R1(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function z1(){return[]}function Um(n){return n==null?z1:function(){return this.querySelectorAll(n)}}function D1(n){return function(){return R1(n.apply(this,arguments))}}function A1(n){typeof n=="function"?n=D1(n):n=Um(n);for(var r=this._groups,o=r.length,s=[],l=[],c=0;c<o;++c)for(var u=r[c],f=u.length,p,g=0;g<f;++g)(p=u[g])&&(s.push(n.call(p,p.__data__,g,u)),l.push(p));return new Pn(s,l)}function qm(n){return function(){return this.matches(n)}}function Ym(n){return function(r){return r.matches(n)}}var O1=Array.prototype.find;function F1(n){return function(){return O1.call(this.children,n)}}function j1(){return this.firstElementChild}function H1(n){return this.select(n==null?j1:F1(typeof n=="function"?n:Ym(n)))}var $1=Array.prototype.filter;function V1(){return Array.from(this.children)}function B1(n){return function(){return $1.call(this.children,n)}}function W1(n){return this.selectAll(n==null?V1:B1(typeof n=="function"?n:Ym(n)))}function U1(n){typeof n!="function"&&(n=qm(n));for(var r=this._groups,o=r.length,s=new Array(o),l=0;l<o;++l)for(var c=r[l],u=c.length,f=s[l]=[],p,g=0;g<u;++g)(p=c[g])&&n.call(p,p.__data__,g,c)&&f.push(p);return new Pn(s,this._parents)}function Xm(n){return new Array(n.length)}function q1(){return new Pn(this._enter||this._groups.map(Xm),this._parents)}function es(n,r){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=r}es.prototype={constructor:es,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,r){return this._parent.insertBefore(n,r)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Y1(n){return function(){return n}}function X1(n,r,o,s,l,c){for(var u=0,f,p=r.length,g=c.length;u<g;++u)(f=r[u])?(f.__data__=c[u],s[u]=f):o[u]=new es(n,c[u]);for(;u<p;++u)(f=r[u])&&(l[u]=f)}function G1(n,r,o,s,l,c,u){var f,p,g=new Map,m=r.length,h=c.length,v=new Array(m),w;for(f=0;f<m;++f)(p=r[f])&&(v[f]=w=u.call(p,p.__data__,f,r)+"",g.has(w)?l[f]=p:g.set(w,p));for(f=0;f<h;++f)w=u.call(n,c[f],f,c)+"",(p=g.get(w))?(s[f]=p,p.__data__=c[f],g.delete(w)):o[f]=new es(n,c[f]);for(f=0;f<m;++f)(p=r[f])&&g.get(v[f])===p&&(l[f]=p)}function Q1(n){return n.__data__}function K1(n,r){if(!arguments.length)return Array.from(this,Q1);var o=r?G1:X1,s=this._parents,l=this._groups;typeof n!="function"&&(n=Y1(n));for(var c=l.length,u=new Array(c),f=new Array(c),p=new Array(c),g=0;g<c;++g){var m=s[g],h=l[g],v=h.length,w=Z1(n.call(m,m&&m.__data__,g,s)),x=w.length,C=f[g]=new Array(x),E=u[g]=new Array(x),_=p[g]=new Array(v);o(m,h,C,E,_,w,r);for(var b=0,S=0,N,z;b<x;++b)if(N=C[b]){for(b>=S&&(S=b+1);!(z=E[S])&&++S<x;);N._next=z||null}}return u=new Pn(u,s),u._enter=f,u._exit=p,u}function Z1(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function J1(){return new Pn(this._exit||this._groups.map(Xm),this._parents)}function ev(n,r,o){var s=this.enter(),l=this,c=this.exit();return typeof n=="function"?(s=n(s),s&&(s=s.selection())):s=s.append(n+""),r!=null&&(l=r(l),l&&(l=l.selection())),o==null?c.remove():o(c),s&&l?s.merge(l).order():l}function nv(n){for(var r=n.selection?n.selection():n,o=this._groups,s=r._groups,l=o.length,c=s.length,u=Math.min(l,c),f=new Array(l),p=0;p<u;++p)for(var g=o[p],m=s[p],h=g.length,v=f[p]=new Array(h),w,x=0;x<h;++x)(w=g[x]||m[x])&&(v[x]=w);for(;p<l;++p)f[p]=o[p];return new Pn(f,this._parents)}function tv(){for(var n=this._groups,r=-1,o=n.length;++r<o;)for(var s=n[r],l=s.length-1,c=s[l],u;--l>=0;)(u=s[l])&&(c&&u.compareDocumentPosition(c)^4&&c.parentNode.insertBefore(u,c),c=u);return this}function rv(n){n||(n=iv);function r(h,v){return h&&v?n(h.__data__,v.__data__):!h-!v}for(var o=this._groups,s=o.length,l=new Array(s),c=0;c<s;++c){for(var u=o[c],f=u.length,p=l[c]=new Array(f),g,m=0;m<f;++m)(g=u[m])&&(p[m]=g);p.sort(r)}return new Pn(l,this._parents).order()}function iv(n,r){return n<r?-1:n>r?1:n>=r?0:NaN}function ov(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function lv(){return Array.from(this)}function sv(){for(var n=this._groups,r=0,o=n.length;r<o;++r)for(var s=n[r],l=0,c=s.length;l<c;++l){var u=s[l];if(u)return u}return null}function av(){let n=0;for(const r of this)++n;return n}function uv(){return!this.node()}function cv(n){for(var r=this._groups,o=0,s=r.length;o<s;++o)for(var l=r[o],c=0,u=l.length,f;c<u;++c)(f=l[c])&&n.call(f,f.__data__,c,l);return this}function fv(n){return function(){this.removeAttribute(n)}}function dv(n){return function(){this.removeAttributeNS(n.space,n.local)}}function hv(n,r){return function(){this.setAttribute(n,r)}}function pv(n,r){return function(){this.setAttributeNS(n.space,n.local,r)}}function mv(n,r){return function(){var o=r.apply(this,arguments);o==null?this.removeAttribute(n):this.setAttribute(n,o)}}function gv(n,r){return function(){var o=r.apply(this,arguments);o==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,o)}}function yv(n,r){var o=ds(n);if(arguments.length<2){var s=this.node();return o.local?s.getAttributeNS(o.space,o.local):s.getAttribute(o)}return this.each((r==null?o.local?dv:fv:typeof r=="function"?o.local?gv:mv:o.local?pv:hv)(o,r))}function Gm(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function vv(n){return function(){this.style.removeProperty(n)}}function wv(n,r,o){return function(){this.style.setProperty(n,r,o)}}function xv(n,r,o){return function(){var s=r.apply(this,arguments);s==null?this.style.removeProperty(n):this.style.setProperty(n,s,o)}}function Ev(n,r,o){return arguments.length>1?this.each((r==null?vv:typeof r=="function"?xv:wv)(n,r,o??"")):ei(this.node(),n)}function ei(n,r){return n.style.getPropertyValue(r)||Gm(n).getComputedStyle(n,null).getPropertyValue(r)}function Sv(n){return function(){delete this[n]}}function _v(n,r){return function(){this[n]=r}}function kv(n,r){return function(){var o=r.apply(this,arguments);o==null?delete this[n]:this[n]=o}}function Cv(n,r){return arguments.length>1?this.each((r==null?Sv:typeof r=="function"?kv:_v)(n,r)):this.node()[n]}function Qm(n){return n.trim().split(/^|\s+/)}function Bc(n){return n.classList||new Km(n)}function Km(n){this._node=n,this._names=Qm(n.getAttribute("class")||"")}Km.prototype={add:function(n){var r=this._names.indexOf(n);r<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var r=this._names.indexOf(n);r>=0&&(this._names.splice(r,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function Zm(n,r){for(var o=Bc(n),s=-1,l=r.length;++s<l;)o.add(r[s])}function Jm(n,r){for(var o=Bc(n),s=-1,l=r.length;++s<l;)o.remove(r[s])}function Nv(n){return function(){Zm(this,n)}}function bv(n){return function(){Jm(this,n)}}function Pv(n,r){return function(){(r.apply(this,arguments)?Zm:Jm)(this,n)}}function Mv(n,r){var o=Qm(n+"");if(arguments.length<2){for(var s=Bc(this.node()),l=-1,c=o.length;++l<c;)if(!s.contains(o[l]))return!1;return!0}return this.each((typeof r=="function"?Pv:r?Nv:bv)(o,r))}function Tv(){this.textContent=""}function Lv(n){return function(){this.textContent=n}}function Iv(n){return function(){var r=n.apply(this,arguments);this.textContent=r??""}}function Rv(n){return arguments.length?this.each(n==null?Tv:(typeof n=="function"?Iv:Lv)(n)):this.node().textContent}function zv(){this.innerHTML=""}function Dv(n){return function(){this.innerHTML=n}}function Av(n){return function(){var r=n.apply(this,arguments);this.innerHTML=r??""}}function Ov(n){return arguments.length?this.each(n==null?zv:(typeof n=="function"?Av:Dv)(n)):this.node().innerHTML}function Fv(){this.nextSibling&&this.parentNode.appendChild(this)}function jv(){return this.each(Fv)}function Hv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function $v(){return this.each(Hv)}function Vv(n){var r=typeof n=="function"?n:Wm(n);return this.select(function(){return this.appendChild(r.apply(this,arguments))})}function Bv(){return null}function Wv(n,r){var o=typeof n=="function"?n:Wm(n),s=r==null?Bv:typeof r=="function"?r:Vc(r);return this.select(function(){return this.insertBefore(o.apply(this,arguments),s.apply(this,arguments)||null)})}function Uv(){var n=this.parentNode;n&&n.removeChild(this)}function qv(){return this.each(Uv)}function Yv(){var n=this.cloneNode(!1),r=this.parentNode;return r?r.insertBefore(n,this.nextSibling):n}function Xv(){var n=this.cloneNode(!0),r=this.parentNode;return r?r.insertBefore(n,this.nextSibling):n}function Gv(n){return this.select(n?Xv:Yv)}function Qv(n){return arguments.length?this.property("__data__",n):this.node().__data__}function Kv(n){return function(r){n.call(this,r,this.__data__)}}function Zv(n){return n.trim().split(/^|\s+/).map(function(r){var o="",s=r.indexOf(".");return s>=0&&(o=r.slice(s+1),r=r.slice(0,s)),{type:r,name:o}})}function Jv(n){return function(){var r=this.__on;if(r){for(var o=0,s=-1,l=r.length,c;o<l;++o)c=r[o],(!n.type||c.type===n.type)&&c.name===n.name?this.removeEventListener(c.type,c.listener,c.options):r[++s]=c;++s?r.length=s:delete this.__on}}}function ew(n,r,o){return function(){var s=this.__on,l,c=Kv(r);if(s){for(var u=0,f=s.length;u<f;++u)if((l=s[u]).type===n.type&&l.name===n.name){this.removeEventListener(l.type,l.listener,l.options),this.addEventListener(l.type,l.listener=c,l.options=o),l.value=r;return}}this.addEventListener(n.type,c,o),l={type:n.type,name:n.name,value:r,listener:c,options:o},s?s.push(l):this.__on=[l]}}function nw(n,r,o){var s=Zv(n+""),l,c=s.length,u;if(arguments.length<2){var f=this.node().__on;if(f){for(var p=0,g=f.length,m;p<g;++p)for(l=0,m=f[p];l<c;++l)if((u=s[l]).type===m.type&&u.name===m.name)return m.value}return}for(f=r?ew:Jv,l=0;l<c;++l)this.each(f(s[l],r,o));return this}function e0(n,r,o){var s=Gm(n),l=s.CustomEvent;typeof l=="function"?l=new l(r,o):(l=s.document.createEvent("Event"),o?(l.initEvent(r,o.bubbles,o.cancelable),l.detail=o.detail):l.initEvent(r,!1,!1)),n.dispatchEvent(l)}function tw(n,r){return function(){return e0(this,n,r)}}function rw(n,r){return function(){return e0(this,n,r.apply(this,arguments))}}function iw(n,r){return this.each((typeof r=="function"?rw:tw)(n,r))}function*ow(){for(var n=this._groups,r=0,o=n.length;r<o;++r)for(var s=n[r],l=0,c=s.length,u;l<c;++l)(u=s[l])&&(yield u)}var n0=[null];function Pn(n,r){this._groups=n,this._parents=r}function go(){return new Pn([[document.documentElement]],n0)}function lw(){return this}Pn.prototype=go.prototype={constructor:Pn,select:I1,selectAll:A1,selectChild:H1,selectChildren:W1,filter:U1,data:K1,enter:q1,exit:J1,join:ev,merge:nv,selection:lw,order:tv,sort:rv,call:ov,nodes:lv,node:sv,size:av,empty:uv,each:cv,attr:yv,style:Ev,property:Cv,classed:Mv,text:Rv,html:Ov,raise:jv,lower:$v,append:Vv,insert:Wv,remove:qv,clone:Gv,datum:Qv,on:nw,dispatch:iw,[Symbol.iterator]:ow};function bn(n){return typeof n=="string"?new Pn([[document.querySelector(n)]],[document.documentElement]):new Pn([[n]],n0)}function sw(n){let r;for(;r=n.sourceEvent;)n=r;return n}function Bn(n,r){if(n=sw(n),r===void 0&&(r=n.currentTarget),r){var o=r.ownerSVGElement||r;if(o.createSVGPoint){var s=o.createSVGPoint();return s.x=n.clientX,s.y=n.clientY,s=s.matrixTransform(r.getScreenCTM().inverse()),[s.x,s.y]}if(r.getBoundingClientRect){var l=r.getBoundingClientRect();return[n.clientX-l.left-r.clientLeft,n.clientY-l.top-r.clientTop]}}return[n.pageX,n.pageY]}const aw={passive:!1},oo={capture:!0,passive:!1};function Eu(n){n.stopImmediatePropagation()}function Zr(n){n.preventDefault(),n.stopImmediatePropagation()}function t0(n){var r=n.document.documentElement,o=bn(n).on("dragstart.drag",Zr,oo);"onselectstart"in r?o.on("selectstart.drag",Zr,oo):(r.__noselect=r.style.MozUserSelect,r.style.MozUserSelect="none")}function r0(n,r){var o=n.document.documentElement,s=bn(n).on("dragstart.drag",null);r&&(s.on("click.drag",Zr,oo),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in o?s.on("selectstart.drag",null):(o.style.MozUserSelect=o.__noselect,delete o.__noselect)}const Hl=n=>()=>n;function Pc(n,{sourceEvent:r,subject:o,target:s,identifier:l,active:c,x:u,y:f,dx:p,dy:g,dispatch:m}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:r,enumerable:!0,configurable:!0},subject:{value:o,enumerable:!0,configurable:!0},target:{value:s,enumerable:!0,configurable:!0},identifier:{value:l,enumerable:!0,configurable:!0},active:{value:c,enumerable:!0,configurable:!0},x:{value:u,enumerable:!0,configurable:!0},y:{value:f,enumerable:!0,configurable:!0},dx:{value:p,enumerable:!0,configurable:!0},dy:{value:g,enumerable:!0,configurable:!0},_:{value:m}})}Pc.prototype.on=function(){var n=this._.on.apply(this._,arguments);return n===this._?this:n};function uw(n){return!n.ctrlKey&&!n.button}function cw(){return this.parentNode}function fw(n,r){return r??{x:n.x,y:n.y}}function dw(){return navigator.maxTouchPoints||"ontouchstart"in this}function i0(){var n=uw,r=cw,o=fw,s=dw,l={},c=fs("start","drag","end"),u=0,f,p,g,m,h=0;function v(N){N.on("mousedown.drag",w).filter(s).on("touchstart.drag",E).on("touchmove.drag",_,aw).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function w(N,z){if(!(m||!n.call(this,N,z))){var L=S(this,r.call(this,N,z),N,z,"mouse");L&&(bn(N.view).on("mousemove.drag",x,oo).on("mouseup.drag",C,oo),t0(N.view),Eu(N),g=!1,f=N.clientX,p=N.clientY,L("start",N))}}function x(N){if(Zr(N),!g){var z=N.clientX-f,L=N.clientY-p;g=z*z+L*L>h}l.mouse("drag",N)}function C(N){bn(N.view).on("mousemove.drag mouseup.drag",null),r0(N.view,g),Zr(N),l.mouse("end",N)}function E(N,z){if(n.call(this,N,z)){var L=N.changedTouches,F=r.call(this,N,z),P=L.length,R,$;for(R=0;R<P;++R)($=S(this,F,N,z,L[R].identifier,L[R]))&&(Eu(N),$("start",N,L[R]))}}function _(N){var z=N.changedTouches,L=z.length,F,P;for(F=0;F<L;++F)(P=l[z[F].identifier])&&(Zr(N),P("drag",N,z[F]))}function b(N){var z=N.changedTouches,L=z.length,F,P;for(m&&clearTimeout(m),m=setTimeout(function(){m=null},500),F=0;F<L;++F)(P=l[z[F].identifier])&&(Eu(N),P("end",N,z[F]))}function S(N,z,L,F,P,R){var $=c.copy(),I=Bn(R||L,z),A,J,T;if((T=o.call(N,new Pc("beforestart",{sourceEvent:L,target:v,identifier:P,active:u,x:I[0],y:I[1],dx:0,dy:0,dispatch:$}),F))!=null)return A=T.x-I[0]||0,J=T.y-I[1]||0,function Y(U,X,B){var V=I,G;switch(U){case"start":l[P]=Y,G=u++;break;case"end":delete l[P],--u;case"drag":I=Bn(B||X,z),G=u;break}$.call(U,N,new Pc(U,{sourceEvent:X,subject:T,target:v,identifier:P,active:G,x:I[0]+A,y:I[1]+J,dx:I[0]-V[0],dy:I[1]-V[1],dispatch:$}),F)}}return v.filter=function(N){return arguments.length?(n=typeof N=="function"?N:Hl(!!N),v):n},v.container=function(N){return arguments.length?(r=typeof N=="function"?N:Hl(N),v):r},v.subject=function(N){return arguments.length?(o=typeof N=="function"?N:Hl(N),v):o},v.touchable=function(N){return arguments.length?(s=typeof N=="function"?N:Hl(!!N),v):s},v.on=function(){var N=c.on.apply(c,arguments);return N===c?v:N},v.clickDistance=function(N){return arguments.length?(h=(N=+N)*N,v):Math.sqrt(h)},v}function Wc(n,r,o){n.prototype=r.prototype=o,o.constructor=n}function o0(n,r){var o=Object.create(n.prototype);for(var s in r)o[s]=r[s];return o}function yo(){}var lo=.7,ns=1/lo,Jr="\\s*([+-]?\\d+)\\s*",so="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",it="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",hw=/^#([0-9a-f]{3,8})$/,pw=new RegExp(`^rgb\\(${Jr},${Jr},${Jr}\\)$`),mw=new RegExp(`^rgb\\(${it},${it},${it}\\)$`),gw=new RegExp(`^rgba\\(${Jr},${Jr},${Jr},${so}\\)$`),yw=new RegExp(`^rgba\\(${it},${it},${it},${so}\\)$`),vw=new RegExp(`^hsl\\(${so},${it},${it}\\)$`),ww=new RegExp(`^hsla\\(${so},${it},${it},${so}\\)$`),$h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Wc(yo,mr,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Vh,formatHex:Vh,formatHex8:xw,formatHsl:Ew,formatRgb:Bh,toString:Bh});function Vh(){return this.rgb().formatHex()}function xw(){return this.rgb().formatHex8()}function Ew(){return l0(this).formatHsl()}function Bh(){return this.rgb().formatRgb()}function mr(n){var r,o;return n=(n+"").trim().toLowerCase(),(r=hw.exec(n))?(o=r[1].length,r=parseInt(r[1],16),o===6?Wh(r):o===3?new wn(r>>8&15|r>>4&240,r>>4&15|r&240,(r&15)<<4|r&15,1):o===8?$l(r>>24&255,r>>16&255,r>>8&255,(r&255)/255):o===4?$l(r>>12&15|r>>8&240,r>>8&15|r>>4&240,r>>4&15|r&240,((r&15)<<4|r&15)/255):null):(r=pw.exec(n))?new wn(r[1],r[2],r[3],1):(r=mw.exec(n))?new wn(r[1]*255/100,r[2]*255/100,r[3]*255/100,1):(r=gw.exec(n))?$l(r[1],r[2],r[3],r[4]):(r=yw.exec(n))?$l(r[1]*255/100,r[2]*255/100,r[3]*255/100,r[4]):(r=vw.exec(n))?Yh(r[1],r[2]/100,r[3]/100,1):(r=ww.exec(n))?Yh(r[1],r[2]/100,r[3]/100,r[4]):$h.hasOwnProperty(n)?Wh($h[n]):n==="transparent"?new wn(NaN,NaN,NaN,0):null}function Wh(n){return new wn(n>>16&255,n>>8&255,n&255,1)}function $l(n,r,o,s){return s<=0&&(n=r=o=NaN),new wn(n,r,o,s)}function Sw(n){return n instanceof yo||(n=mr(n)),n?(n=n.rgb(),new wn(n.r,n.g,n.b,n.opacity)):new wn}function Mc(n,r,o,s){return arguments.length===1?Sw(n):new wn(n,r,o,s??1)}function wn(n,r,o,s){this.r=+n,this.g=+r,this.b=+o,this.opacity=+s}Wc(wn,Mc,o0(yo,{brighter(n){return n=n==null?ns:Math.pow(ns,n),new wn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?lo:Math.pow(lo,n),new wn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new wn(hr(this.r),hr(this.g),hr(this.b),ts(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Uh,formatHex:Uh,formatHex8:_w,formatRgb:qh,toString:qh}));function Uh(){return`#${dr(this.r)}${dr(this.g)}${dr(this.b)}`}function _w(){return`#${dr(this.r)}${dr(this.g)}${dr(this.b)}${dr((isNaN(this.opacity)?1:this.opacity)*255)}`}function qh(){const n=ts(this.opacity);return`${n===1?"rgb(":"rgba("}${hr(this.r)}, ${hr(this.g)}, ${hr(this.b)}${n===1?")":`, ${n})`}`}function ts(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function hr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function dr(n){return n=hr(n),(n<16?"0":"")+n.toString(16)}function Yh(n,r,o,s){return s<=0?n=r=o=NaN:o<=0||o>=1?n=r=NaN:r<=0&&(n=NaN),new Wn(n,r,o,s)}function l0(n){if(n instanceof Wn)return new Wn(n.h,n.s,n.l,n.opacity);if(n instanceof yo||(n=mr(n)),!n)return new Wn;if(n instanceof Wn)return n;n=n.rgb();var r=n.r/255,o=n.g/255,s=n.b/255,l=Math.min(r,o,s),c=Math.max(r,o,s),u=NaN,f=c-l,p=(c+l)/2;return f?(r===c?u=(o-s)/f+(o<s)*6:o===c?u=(s-r)/f+2:u=(r-o)/f+4,f/=p<.5?c+l:2-c-l,u*=60):f=p>0&&p<1?0:u,new Wn(u,f,p,n.opacity)}function kw(n,r,o,s){return arguments.length===1?l0(n):new Wn(n,r,o,s??1)}function Wn(n,r,o,s){this.h=+n,this.s=+r,this.l=+o,this.opacity=+s}Wc(Wn,kw,o0(yo,{brighter(n){return n=n==null?ns:Math.pow(ns,n),new Wn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?lo:Math.pow(lo,n),new Wn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,r=isNaN(n)||isNaN(this.s)?0:this.s,o=this.l,s=o+(o<.5?o:1-o)*r,l=2*o-s;return new wn(Su(n>=240?n-240:n+120,l,s),Su(n,l,s),Su(n<120?n+240:n-120,l,s),this.opacity)},clamp(){return new Wn(Xh(this.h),Vl(this.s),Vl(this.l),ts(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=ts(this.opacity);return`${n===1?"hsl(":"hsla("}${Xh(this.h)}, ${Vl(this.s)*100}%, ${Vl(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Xh(n){return n=(n||0)%360,n<0?n+360:n}function Vl(n){return Math.max(0,Math.min(1,n||0))}function Su(n,r,o){return(n<60?r+(o-r)*n/60:n<180?o:n<240?r+(o-r)*(240-n)/60:r)*255}const Uc=n=>()=>n;function Cw(n,r){return function(o){return n+o*r}}function Nw(n,r,o){return n=Math.pow(n,o),r=Math.pow(r,o)-n,o=1/o,function(s){return Math.pow(n+s*r,o)}}function bw(n){return(n=+n)==1?s0:function(r,o){return o-r?Nw(r,o,n):Uc(isNaN(r)?o:r)}}function s0(n,r){var o=r-n;return o?Cw(n,o):Uc(isNaN(n)?r:n)}const rs=(function n(r){var o=bw(r);function s(l,c){var u=o((l=Mc(l)).r,(c=Mc(c)).r),f=o(l.g,c.g),p=o(l.b,c.b),g=s0(l.opacity,c.opacity);return function(m){return l.r=u(m),l.g=f(m),l.b=p(m),l.opacity=g(m),l+""}}return s.gamma=n,s})(1);function Pw(n,r){r||(r=[]);var o=n?Math.min(r.length,n.length):0,s=r.slice(),l;return function(c){for(l=0;l<o;++l)s[l]=n[l]*(1-c)+r[l]*c;return s}}function Mw(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Tw(n,r){var o=r?r.length:0,s=n?Math.min(o,n.length):0,l=new Array(s),c=new Array(o),u;for(u=0;u<s;++u)l[u]=ro(n[u],r[u]);for(;u<o;++u)c[u]=r[u];return function(f){for(u=0;u<s;++u)c[u]=l[u](f);return c}}function Lw(n,r){var o=new Date;return n=+n,r=+r,function(s){return o.setTime(n*(1-s)+r*s),o}}function rt(n,r){return n=+n,r=+r,function(o){return n*(1-o)+r*o}}function Iw(n,r){var o={},s={},l;(n===null||typeof n!="object")&&(n={}),(r===null||typeof r!="object")&&(r={});for(l in r)l in n?o[l]=ro(n[l],r[l]):s[l]=r[l];return function(c){for(l in o)s[l]=o[l](c);return s}}var Tc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_u=new RegExp(Tc.source,"g");function Rw(n){return function(){return n}}function zw(n){return function(r){return n(r)+""}}function a0(n,r){var o=Tc.lastIndex=_u.lastIndex=0,s,l,c,u=-1,f=[],p=[];for(n=n+"",r=r+"";(s=Tc.exec(n))&&(l=_u.exec(r));)(c=l.index)>o&&(c=r.slice(o,c),f[u]?f[u]+=c:f[++u]=c),(s=s[0])===(l=l[0])?f[u]?f[u]+=l:f[++u]=l:(f[++u]=null,p.push({i:u,x:rt(s,l)})),o=_u.lastIndex;return o<r.length&&(c=r.slice(o),f[u]?f[u]+=c:f[++u]=c),f.length<2?p[0]?zw(p[0].x):Rw(r):(r=p.length,function(g){for(var m=0,h;m<r;++m)f[(h=p[m]).i]=h.x(g);return f.join("")})}function ro(n,r){var o=typeof r,s;return r==null||o==="boolean"?Uc(r):(o==="number"?rt:o==="string"?(s=mr(r))?(r=s,rs):a0:r instanceof mr?rs:r instanceof Date?Lw:Mw(r)?Pw:Array.isArray(r)?Tw:typeof r.valueOf!="function"&&typeof r.toString!="function"||isNaN(r)?Iw:rt)(n,r)}var Gh=180/Math.PI,Lc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function u0(n,r,o,s,l,c){var u,f,p;return(u=Math.sqrt(n*n+r*r))&&(n/=u,r/=u),(p=n*o+r*s)&&(o-=n*p,s-=r*p),(f=Math.sqrt(o*o+s*s))&&(o/=f,s/=f,p/=f),n*s<r*o&&(n=-n,r=-r,p=-p,u=-u),{translateX:l,translateY:c,rotate:Math.atan2(r,n)*Gh,skewX:Math.atan(p)*Gh,scaleX:u,scaleY:f}}var Bl;function Dw(n){const r=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return r.isIdentity?Lc:u0(r.a,r.b,r.c,r.d,r.e,r.f)}function Aw(n){return n==null||(Bl||(Bl=document.createElementNS("http://www.w3.org/2000/svg","g")),Bl.setAttribute("transform",n),!(n=Bl.transform.baseVal.consolidate()))?Lc:(n=n.matrix,u0(n.a,n.b,n.c,n.d,n.e,n.f))}function c0(n,r,o,s){function l(g){return g.length?g.pop()+" ":""}function c(g,m,h,v,w,x){if(g!==h||m!==v){var C=w.push("translate(",null,r,null,o);x.push({i:C-4,x:rt(g,h)},{i:C-2,x:rt(m,v)})}else(h||v)&&w.push("translate("+h+r+v+o)}function u(g,m,h,v){g!==m?(g-m>180?m+=360:m-g>180&&(g+=360),v.push({i:h.push(l(h)+"rotate(",null,s)-2,x:rt(g,m)})):m&&h.push(l(h)+"rotate("+m+s)}function f(g,m,h,v){g!==m?v.push({i:h.push(l(h)+"skewX(",null,s)-2,x:rt(g,m)}):m&&h.push(l(h)+"skewX("+m+s)}function p(g,m,h,v,w,x){if(g!==h||m!==v){var C=w.push(l(w)+"scale(",null,",",null,")");x.push({i:C-4,x:rt(g,h)},{i:C-2,x:rt(m,v)})}else(h!==1||v!==1)&&w.push(l(w)+"scale("+h+","+v+")")}return function(g,m){var h=[],v=[];return g=n(g),m=n(m),c(g.translateX,g.translateY,m.translateX,m.translateY,h,v),u(g.rotate,m.rotate,h,v),f(g.skewX,m.skewX,h,v),p(g.scaleX,g.scaleY,m.scaleX,m.scaleY,h,v),g=m=null,function(w){for(var x=-1,C=v.length,E;++x<C;)h[(E=v[x]).i]=E.x(w);return h.join("")}}}var Ow=c0(Dw,"px, ","px)","deg)"),Fw=c0(Aw,", ",")",")"),jw=1e-12;function Qh(n){return((n=Math.exp(n))+1/n)/2}function Hw(n){return((n=Math.exp(n))-1/n)/2}function $w(n){return((n=Math.exp(2*n))-1)/(n+1)}const Ql=(function n(r,o,s){function l(c,u){var f=c[0],p=c[1],g=c[2],m=u[0],h=u[1],v=u[2],w=m-f,x=h-p,C=w*w+x*x,E,_;if(C<jw)_=Math.log(v/g)/r,E=function(F){return[f+F*w,p+F*x,g*Math.exp(r*F*_)]};else{var b=Math.sqrt(C),S=(v*v-g*g+s*C)/(2*g*o*b),N=(v*v-g*g-s*C)/(2*v*o*b),z=Math.log(Math.sqrt(S*S+1)-S),L=Math.log(Math.sqrt(N*N+1)-N);_=(L-z)/r,E=function(F){var P=F*_,R=Qh(z),$=g/(o*b)*(R*$w(r*P+z)-Hw(z));return[f+$*w,p+$*x,g*R/Qh(r*P+z)]}}return E.duration=_*1e3*r/Math.SQRT2,E}return l.rho=function(c){var u=Math.max(.001,+c),f=u*u,p=f*f;return n(u,f,p)},l})(Math.SQRT2,2,4);var ni=0,no=0,Ji=0,f0=1e3,is,to,os=0,gr=0,hs=0,ao=typeof performance=="object"&&performance.now?performance:Date,d0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function qc(){return gr||(d0(Vw),gr=ao.now()+hs)}function Vw(){gr=0}function ls(){this._call=this._time=this._next=null}ls.prototype=h0.prototype={constructor:ls,restart:function(n,r,o){if(typeof n!="function")throw new TypeError("callback is not a function");o=(o==null?qc():+o)+(r==null?0:+r),!this._next&&to!==this&&(to?to._next=this:is=this,to=this),this._call=n,this._time=o,Ic()},stop:function(){this._call&&(this._call=null,this._time=1/0,Ic())}};function h0(n,r,o){var s=new ls;return s.restart(n,r,o),s}function Bw(){qc(),++ni;for(var n=is,r;n;)(r=gr-n._time)>=0&&n._call.call(void 0,r),n=n._next;--ni}function Kh(){gr=(os=ao.now())+hs,ni=no=0;try{Bw()}finally{ni=0,Uw(),gr=0}}function Ww(){var n=ao.now(),r=n-os;r>f0&&(hs-=r,os=n)}function Uw(){for(var n,r=is,o,s=1/0;r;)r._call?(s>r._time&&(s=r._time),n=r,r=r._next):(o=r._next,r._next=null,r=n?n._next=o:is=o);to=n,Ic(s)}function Ic(n){if(!ni){no&&(no=clearTimeout(no));var r=n-gr;r>24?(n<1/0&&(no=setTimeout(Kh,n-ao.now()-hs)),Ji&&(Ji=clearInterval(Ji))):(Ji||(os=ao.now(),Ji=setInterval(Ww,f0)),ni=1,d0(Kh))}}function Zh(n,r,o){var s=new ls;return r=r==null?0:+r,s.restart(l=>{s.stop(),n(l+r)},r,o),s}var qw=fs("start","end","cancel","interrupt"),Yw=[],p0=0,Jh=1,Rc=2,Kl=3,ep=4,zc=5,Zl=6;function ps(n,r,o,s,l,c){var u=n.__transition;if(!u)n.__transition={};else if(o in u)return;Xw(n,o,{name:r,index:s,group:l,on:qw,tween:Yw,time:c.time,delay:c.delay,duration:c.duration,ease:c.ease,timer:null,state:p0})}function Yc(n,r){var o=Gn(n,r);if(o.state>p0)throw new Error("too late; already scheduled");return o}function ot(n,r){var o=Gn(n,r);if(o.state>Kl)throw new Error("too late; already running");return o}function Gn(n,r){var o=n.__transition;if(!o||!(o=o[r]))throw new Error("transition not found");return o}function Xw(n,r,o){var s=n.__transition,l;s[r]=o,o.timer=h0(c,0,o.time);function c(g){o.state=Jh,o.timer.restart(u,o.delay,o.time),o.delay<=g&&u(g-o.delay)}function u(g){var m,h,v,w;if(o.state!==Jh)return p();for(m in s)if(w=s[m],w.name===o.name){if(w.state===Kl)return Zh(u);w.state===ep?(w.state=Zl,w.timer.stop(),w.on.call("interrupt",n,n.__data__,w.index,w.group),delete s[m]):+m<r&&(w.state=Zl,w.timer.stop(),w.on.call("cancel",n,n.__data__,w.index,w.group),delete s[m])}if(Zh(function(){o.state===Kl&&(o.state=ep,o.timer.restart(f,o.delay,o.time),f(g))}),o.state=Rc,o.on.call("start",n,n.__data__,o.index,o.group),o.state===Rc){for(o.state=Kl,l=new Array(v=o.tween.length),m=0,h=-1;m<v;++m)(w=o.tween[m].value.call(n,n.__data__,o.index,o.group))&&(l[++h]=w);l.length=h+1}}function f(g){for(var m=g<o.duration?o.ease.call(null,g/o.duration):(o.timer.restart(p),o.state=zc,1),h=-1,v=l.length;++h<v;)l[h].call(n,m);o.state===zc&&(o.on.call("end",n,n.__data__,o.index,o.group),p())}function p(){o.state=Zl,o.timer.stop(),delete s[r];for(var g in s)return;delete n.__transition}}function Jl(n,r){var o=n.__transition,s,l,c=!0,u;if(o){r=r==null?null:r+"";for(u in o){if((s=o[u]).name!==r){c=!1;continue}l=s.state>Rc&&s.state<zc,s.state=Zl,s.timer.stop(),s.on.call(l?"interrupt":"cancel",n,n.__data__,s.index,s.group),delete o[u]}c&&delete n.__transition}}function Gw(n){return this.each(function(){Jl(this,n)})}function Qw(n,r){var o,s;return function(){var l=ot(this,n),c=l.tween;if(c!==o){s=o=c;for(var u=0,f=s.length;u<f;++u)if(s[u].name===r){s=s.slice(),s.splice(u,1);break}}l.tween=s}}function Kw(n,r,o){var s,l;if(typeof o!="function")throw new Error;return function(){var c=ot(this,n),u=c.tween;if(u!==s){l=(s=u).slice();for(var f={name:r,value:o},p=0,g=l.length;p<g;++p)if(l[p].name===r){l[p]=f;break}p===g&&l.push(f)}c.tween=l}}function Zw(n,r){var o=this._id;if(n+="",arguments.length<2){for(var s=Gn(this.node(),o).tween,l=0,c=s.length,u;l<c;++l)if((u=s[l]).name===n)return u.value;return null}return this.each((r==null?Qw:Kw)(o,n,r))}function Xc(n,r,o){var s=n._id;return n.each(function(){var l=ot(this,s);(l.value||(l.value={}))[r]=o.apply(this,arguments)}),function(l){return Gn(l,s).value[r]}}function m0(n,r){var o;return(typeof r=="number"?rt:r instanceof mr?rs:(o=mr(r))?(r=o,rs):a0)(n,r)}function Jw(n){return function(){this.removeAttribute(n)}}function ex(n){return function(){this.removeAttributeNS(n.space,n.local)}}function nx(n,r,o){var s,l=o+"",c;return function(){var u=this.getAttribute(n);return u===l?null:u===s?c:c=r(s=u,o)}}function tx(n,r,o){var s,l=o+"",c;return function(){var u=this.getAttributeNS(n.space,n.local);return u===l?null:u===s?c:c=r(s=u,o)}}function rx(n,r,o){var s,l,c;return function(){var u,f=o(this),p;return f==null?void this.removeAttribute(n):(u=this.getAttribute(n),p=f+"",u===p?null:u===s&&p===l?c:(l=p,c=r(s=u,f)))}}function ix(n,r,o){var s,l,c;return function(){var u,f=o(this),p;return f==null?void this.removeAttributeNS(n.space,n.local):(u=this.getAttributeNS(n.space,n.local),p=f+"",u===p?null:u===s&&p===l?c:(l=p,c=r(s=u,f)))}}function ox(n,r){var o=ds(n),s=o==="transform"?Fw:m0;return this.attrTween(n,typeof r=="function"?(o.local?ix:rx)(o,s,Xc(this,"attr."+n,r)):r==null?(o.local?ex:Jw)(o):(o.local?tx:nx)(o,s,r))}function lx(n,r){return function(o){this.setAttribute(n,r.call(this,o))}}function sx(n,r){return function(o){this.setAttributeNS(n.space,n.local,r.call(this,o))}}function ax(n,r){var o,s;function l(){var c=r.apply(this,arguments);return c!==s&&(o=(s=c)&&sx(n,c)),o}return l._value=r,l}function ux(n,r){var o,s;function l(){var c=r.apply(this,arguments);return c!==s&&(o=(s=c)&&lx(n,c)),o}return l._value=r,l}function cx(n,r){var o="attr."+n;if(arguments.length<2)return(o=this.tween(o))&&o._value;if(r==null)return this.tween(o,null);if(typeof r!="function")throw new Error;var s=ds(n);return this.tween(o,(s.local?ax:ux)(s,r))}function fx(n,r){return function(){Yc(this,n).delay=+r.apply(this,arguments)}}function dx(n,r){return r=+r,function(){Yc(this,n).delay=r}}function hx(n){var r=this._id;return arguments.length?this.each((typeof n=="function"?fx:dx)(r,n)):Gn(this.node(),r).delay}function px(n,r){return function(){ot(this,n).duration=+r.apply(this,arguments)}}function mx(n,r){return r=+r,function(){ot(this,n).duration=r}}function gx(n){var r=this._id;return arguments.length?this.each((typeof n=="function"?px:mx)(r,n)):Gn(this.node(),r).duration}function yx(n,r){if(typeof r!="function")throw new Error;return function(){ot(this,n).ease=r}}function vx(n){var r=this._id;return arguments.length?this.each(yx(r,n)):Gn(this.node(),r).ease}function wx(n,r){return function(){var o=r.apply(this,arguments);if(typeof o!="function")throw new Error;ot(this,n).ease=o}}function xx(n){if(typeof n!="function")throw new Error;return this.each(wx(this._id,n))}function Ex(n){typeof n!="function"&&(n=qm(n));for(var r=this._groups,o=r.length,s=new Array(o),l=0;l<o;++l)for(var c=r[l],u=c.length,f=s[l]=[],p,g=0;g<u;++g)(p=c[g])&&n.call(p,p.__data__,g,c)&&f.push(p);return new wt(s,this._parents,this._name,this._id)}function Sx(n){if(n._id!==this._id)throw new Error;for(var r=this._groups,o=n._groups,s=r.length,l=o.length,c=Math.min(s,l),u=new Array(s),f=0;f<c;++f)for(var p=r[f],g=o[f],m=p.length,h=u[f]=new Array(m),v,w=0;w<m;++w)(v=p[w]||g[w])&&(h[w]=v);for(;f<s;++f)u[f]=r[f];return new wt(u,this._parents,this._name,this._id)}function _x(n){return(n+"").trim().split(/^|\s+/).every(function(r){var o=r.indexOf(".");return o>=0&&(r=r.slice(0,o)),!r||r==="start"})}function kx(n,r,o){var s,l,c=_x(r)?Yc:ot;return function(){var u=c(this,n),f=u.on;f!==s&&(l=(s=f).copy()).on(r,o),u.on=l}}function Cx(n,r){var o=this._id;return arguments.length<2?Gn(this.node(),o).on.on(n):this.each(kx(o,n,r))}function Nx(n){return function(){var r=this.parentNode;for(var o in this.__transition)if(+o!==n)return;r&&r.removeChild(this)}}function bx(){return this.on("end.remove",Nx(this._id))}function Px(n){var r=this._name,o=this._id;typeof n!="function"&&(n=Vc(n));for(var s=this._groups,l=s.length,c=new Array(l),u=0;u<l;++u)for(var f=s[u],p=f.length,g=c[u]=new Array(p),m,h,v=0;v<p;++v)(m=f[v])&&(h=n.call(m,m.__data__,v,f))&&("__data__"in m&&(h.__data__=m.__data__),g[v]=h,ps(g[v],r,o,v,g,Gn(m,o)));return new wt(c,this._parents,r,o)}function Mx(n){var r=this._name,o=this._id;typeof n!="function"&&(n=Um(n));for(var s=this._groups,l=s.length,c=[],u=[],f=0;f<l;++f)for(var p=s[f],g=p.length,m,h=0;h<g;++h)if(m=p[h]){for(var v=n.call(m,m.__data__,h,p),w,x=Gn(m,o),C=0,E=v.length;C<E;++C)(w=v[C])&&ps(w,r,o,C,v,x);c.push(v),u.push(m)}return new wt(c,u,r,o)}var Tx=go.prototype.constructor;function Lx(){return new Tx(this._groups,this._parents)}function Ix(n,r){var o,s,l;return function(){var c=ei(this,n),u=(this.style.removeProperty(n),ei(this,n));return c===u?null:c===o&&u===s?l:l=r(o=c,s=u)}}function g0(n){return function(){this.style.removeProperty(n)}}function Rx(n,r,o){var s,l=o+"",c;return function(){var u=ei(this,n);return u===l?null:u===s?c:c=r(s=u,o)}}function zx(n,r,o){var s,l,c;return function(){var u=ei(this,n),f=o(this),p=f+"";return f==null&&(p=f=(this.style.removeProperty(n),ei(this,n))),u===p?null:u===s&&p===l?c:(l=p,c=r(s=u,f))}}function Dx(n,r){var o,s,l,c="style."+r,u="end."+c,f;return function(){var p=ot(this,n),g=p.on,m=p.value[c]==null?f||(f=g0(r)):void 0;(g!==o||l!==m)&&(s=(o=g).copy()).on(u,l=m),p.on=s}}function Ax(n,r,o){var s=(n+="")=="transform"?Ow:m0;return r==null?this.styleTween(n,Ix(n,s)).on("end.style."+n,g0(n)):typeof r=="function"?this.styleTween(n,zx(n,s,Xc(this,"style."+n,r))).each(Dx(this._id,n)):this.styleTween(n,Rx(n,s,r),o).on("end.style."+n,null)}function Ox(n,r,o){return function(s){this.style.setProperty(n,r.call(this,s),o)}}function Fx(n,r,o){var s,l;function c(){var u=r.apply(this,arguments);return u!==l&&(s=(l=u)&&Ox(n,u,o)),s}return c._value=r,c}function jx(n,r,o){var s="style."+(n+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(r==null)return this.tween(s,null);if(typeof r!="function")throw new Error;return this.tween(s,Fx(n,r,o??""))}function Hx(n){return function(){this.textContent=n}}function $x(n){return function(){var r=n(this);this.textContent=r??""}}function Vx(n){return this.tween("text",typeof n=="function"?$x(Xc(this,"text",n)):Hx(n==null?"":n+""))}function Bx(n){return function(r){this.textContent=n.call(this,r)}}function Wx(n){var r,o;function s(){var l=n.apply(this,arguments);return l!==o&&(r=(o=l)&&Bx(l)),r}return s._value=n,s}function Ux(n){var r="text";if(arguments.length<1)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Wx(n))}function qx(){for(var n=this._name,r=this._id,o=y0(),s=this._groups,l=s.length,c=0;c<l;++c)for(var u=s[c],f=u.length,p,g=0;g<f;++g)if(p=u[g]){var m=Gn(p,r);ps(p,n,o,g,u,{time:m.time+m.delay+m.duration,delay:0,duration:m.duration,ease:m.ease})}return new wt(s,this._parents,n,o)}function Yx(){var n,r,o=this,s=o._id,l=o.size();return new Promise(function(c,u){var f={value:u},p={value:function(){--l===0&&c()}};o.each(function(){var g=ot(this,s),m=g.on;m!==n&&(r=(n=m).copy(),r._.cancel.push(f),r._.interrupt.push(f),r._.end.push(p)),g.on=r}),l===0&&c()})}var Xx=0;function wt(n,r,o,s){this._groups=n,this._parents=r,this._name=o,this._id=s}function y0(){return++Xx}var yt=go.prototype;wt.prototype={constructor:wt,select:Px,selectAll:Mx,selectChild:yt.selectChild,selectChildren:yt.selectChildren,filter:Ex,merge:Sx,selection:Lx,transition:qx,call:yt.call,nodes:yt.nodes,node:yt.node,size:yt.size,empty:yt.empty,each:yt.each,on:Cx,attr:ox,attrTween:cx,style:Ax,styleTween:jx,text:Vx,textTween:Ux,remove:bx,tween:Zw,delay:hx,duration:gx,ease:vx,easeVarying:xx,end:Yx,[Symbol.iterator]:yt[Symbol.iterator]};function Gx(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var Qx={time:null,delay:0,duration:250,ease:Gx};function Kx(n,r){for(var o;!(o=n.__transition)||!(o=o[r]);)if(!(n=n.parentNode))throw new Error(`transition ${r} not found`);return o}function Zx(n){var r,o;n instanceof wt?(r=n._id,n=n._name):(r=y0(),(o=Qx).time=qc(),n=n==null?null:n+"");for(var s=this._groups,l=s.length,c=0;c<l;++c)for(var u=s[c],f=u.length,p,g=0;g<f;++g)(p=u[g])&&ps(p,n,r,g,u,o||Kx(p,r));return new wt(s,this._parents,n,r)}go.prototype.interrupt=Gw;go.prototype.transition=Zx;const Wl=n=>()=>n;function Jx(n,{sourceEvent:r,target:o,transform:s,dispatch:l}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:r,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:l}})}function vt(n,r,o){this.k=n,this.x=r,this.y=o}vt.prototype={constructor:vt,scale:function(n){return n===1?this:new vt(this.k*n,this.x,this.y)},translate:function(n,r){return n===0&r===0?this:new vt(this.k,this.x+this.k*n,this.y+this.k*r)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ms=new vt(1,0,0);v0.prototype=vt.prototype;function v0(n){for(;!n.__zoom;)if(!(n=n.parentNode))return ms;return n.__zoom}function ku(n){n.stopImmediatePropagation()}function eo(n){n.preventDefault(),n.stopImmediatePropagation()}function e2(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function n2(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function np(){return this.__zoom||ms}function t2(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function r2(){return navigator.maxTouchPoints||"ontouchstart"in this}function i2(n,r,o){var s=n.invertX(r[0][0])-o[0][0],l=n.invertX(r[1][0])-o[1][0],c=n.invertY(r[0][1])-o[0][1],u=n.invertY(r[1][1])-o[1][1];return n.translate(l>s?(s+l)/2:Math.min(0,s)||Math.max(0,l),u>c?(c+u)/2:Math.min(0,c)||Math.max(0,u))}function w0(){var n=e2,r=n2,o=i2,s=t2,l=r2,c=[0,1/0],u=[[-1/0,-1/0],[1/0,1/0]],f=250,p=Ql,g=fs("start","zoom","end"),m,h,v,w=500,x=150,C=0,E=10;function _(T){T.property("__zoom",np).on("wheel.zoom",P,{passive:!1}).on("mousedown.zoom",R).on("dblclick.zoom",$).filter(l).on("touchstart.zoom",I).on("touchmove.zoom",A).on("touchend.zoom touchcancel.zoom",J).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}_.transform=function(T,Y,U,X){var B=T.selection?T.selection():T;B.property("__zoom",np),T!==B?z(T,Y,U,X):B.interrupt().each(function(){L(this,arguments).event(X).start().zoom(null,typeof Y=="function"?Y.apply(this,arguments):Y).end()})},_.scaleBy=function(T,Y,U,X){_.scaleTo(T,function(){var B=this.__zoom.k,V=typeof Y=="function"?Y.apply(this,arguments):Y;return B*V},U,X)},_.scaleTo=function(T,Y,U,X){_.transform(T,function(){var B=r.apply(this,arguments),V=this.__zoom,G=U==null?N(B):typeof U=="function"?U.apply(this,arguments):U,M=V.invert(G),j=typeof Y=="function"?Y.apply(this,arguments):Y;return o(S(b(V,j),G,M),B,u)},U,X)},_.translateBy=function(T,Y,U,X){_.transform(T,function(){return o(this.__zoom.translate(typeof Y=="function"?Y.apply(this,arguments):Y,typeof U=="function"?U.apply(this,arguments):U),r.apply(this,arguments),u)},null,X)},_.translateTo=function(T,Y,U,X,B){_.transform(T,function(){var V=r.apply(this,arguments),G=this.__zoom,M=X==null?N(V):typeof X=="function"?X.apply(this,arguments):X;return o(ms.translate(M[0],M[1]).scale(G.k).translate(typeof Y=="function"?-Y.apply(this,arguments):-Y,typeof U=="function"?-U.apply(this,arguments):-U),V,u)},X,B)};function b(T,Y){return Y=Math.max(c[0],Math.min(c[1],Y)),Y===T.k?T:new vt(Y,T.x,T.y)}function S(T,Y,U){var X=Y[0]-U[0]*T.k,B=Y[1]-U[1]*T.k;return X===T.x&&B===T.y?T:new vt(T.k,X,B)}function N(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function z(T,Y,U,X){T.on("start.zoom",function(){L(this,arguments).event(X).start()}).on("interrupt.zoom end.zoom",function(){L(this,arguments).event(X).end()}).tween("zoom",function(){var B=this,V=arguments,G=L(B,V).event(X),M=r.apply(B,V),j=U==null?N(M):typeof U=="function"?U.apply(B,V):U,O=Math.max(M[1][0]-M[0][0],M[1][1]-M[0][1]),W=B.__zoom,Q=typeof Y=="function"?Y.apply(B,V):Y,re=p(W.invert(j).concat(O/W.k),Q.invert(j).concat(O/Q.k));return function(le){if(le===1)le=Q;else{var K=re(le),oe=O/K[2];le=new vt(oe,j[0]-K[0]*oe,j[1]-K[1]*oe)}G.zoom(null,le)}})}function L(T,Y,U){return!U&&T.__zooming||new F(T,Y)}function F(T,Y){this.that=T,this.args=Y,this.active=0,this.sourceEvent=null,this.extent=r.apply(T,Y),this.taps=0}F.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,Y){return this.mouse&&T!=="mouse"&&(this.mouse[1]=Y.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=Y.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=Y.invert(this.touch1[0])),this.that.__zoom=Y,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var Y=bn(this.that).datum();g.call(T,this.that,new Jx(T,{sourceEvent:this.sourceEvent,target:_,transform:this.that.__zoom,dispatch:g}),Y)}};function P(T,...Y){if(!n.apply(this,arguments))return;var U=L(this,Y).event(T),X=this.__zoom,B=Math.max(c[0],Math.min(c[1],X.k*Math.pow(2,s.apply(this,arguments)))),V=Bn(T);if(U.wheel)(U.mouse[0][0]!==V[0]||U.mouse[0][1]!==V[1])&&(U.mouse[1]=X.invert(U.mouse[0]=V)),clearTimeout(U.wheel);else{if(X.k===B)return;U.mouse=[V,X.invert(V)],Jl(this),U.start()}eo(T),U.wheel=setTimeout(G,x),U.zoom("mouse",o(S(b(X,B),U.mouse[0],U.mouse[1]),U.extent,u));function G(){U.wheel=null,U.end()}}function R(T,...Y){if(v||!n.apply(this,arguments))return;var U=T.currentTarget,X=L(this,Y,!0).event(T),B=bn(T.view).on("mousemove.zoom",j,!0).on("mouseup.zoom",O,!0),V=Bn(T,U),G=T.clientX,M=T.clientY;t0(T.view),ku(T),X.mouse=[V,this.__zoom.invert(V)],Jl(this),X.start();function j(W){if(eo(W),!X.moved){var Q=W.clientX-G,re=W.clientY-M;X.moved=Q*Q+re*re>C}X.event(W).zoom("mouse",o(S(X.that.__zoom,X.mouse[0]=Bn(W,U),X.mouse[1]),X.extent,u))}function O(W){B.on("mousemove.zoom mouseup.zoom",null),r0(W.view,X.moved),eo(W),X.event(W).end()}}function $(T,...Y){if(n.apply(this,arguments)){var U=this.__zoom,X=Bn(T.changedTouches?T.changedTouches[0]:T,this),B=U.invert(X),V=U.k*(T.shiftKey?.5:2),G=o(S(b(U,V),X,B),r.apply(this,Y),u);eo(T),f>0?bn(this).transition().duration(f).call(z,G,X,T):bn(this).call(_.transform,G,X,T)}}function I(T,...Y){if(n.apply(this,arguments)){var U=T.touches,X=U.length,B=L(this,Y,T.changedTouches.length===X).event(T),V,G,M,j;for(ku(T),G=0;G<X;++G)M=U[G],j=Bn(M,this),j=[j,this.__zoom.invert(j),M.identifier],B.touch0?!B.touch1&&B.touch0[2]!==j[2]&&(B.touch1=j,B.taps=0):(B.touch0=j,V=!0,B.taps=1+!!m);m&&(m=clearTimeout(m)),V&&(B.taps<2&&(h=j[0],m=setTimeout(function(){m=null},w)),Jl(this),B.start())}}function A(T,...Y){if(this.__zooming){var U=L(this,Y).event(T),X=T.changedTouches,B=X.length,V,G,M,j;for(eo(T),V=0;V<B;++V)G=X[V],M=Bn(G,this),U.touch0&&U.touch0[2]===G.identifier?U.touch0[0]=M:U.touch1&&U.touch1[2]===G.identifier&&(U.touch1[0]=M);if(G=U.that.__zoom,U.touch1){var O=U.touch0[0],W=U.touch0[1],Q=U.touch1[0],re=U.touch1[1],le=(le=Q[0]-O[0])*le+(le=Q[1]-O[1])*le,K=(K=re[0]-W[0])*K+(K=re[1]-W[1])*K;G=b(G,Math.sqrt(le/K)),M=[(O[0]+Q[0])/2,(O[1]+Q[1])/2],j=[(W[0]+re[0])/2,(W[1]+re[1])/2]}else if(U.touch0)M=U.touch0[0],j=U.touch0[1];else return;U.zoom("touch",o(S(G,M,j),U.extent,u))}}function J(T,...Y){if(this.__zooming){var U=L(this,Y).event(T),X=T.changedTouches,B=X.length,V,G;for(ku(T),v&&clearTimeout(v),v=setTimeout(function(){v=null},w),V=0;V<B;++V)G=X[V],U.touch0&&U.touch0[2]===G.identifier?delete U.touch0:U.touch1&&U.touch1[2]===G.identifier&&delete U.touch1;if(U.touch1&&!U.touch0&&(U.touch0=U.touch1,delete U.touch1),U.touch0)U.touch0[1]=this.__zoom.invert(U.touch0[0]);else if(U.end(),U.taps===2&&(G=Bn(G,this),Math.hypot(h[0]-G[0],h[1]-G[1])<E)){var M=bn(this).on("dblclick.zoom");M&&M.apply(this,arguments)}}}return _.wheelDelta=function(T){return arguments.length?(s=typeof T=="function"?T:Wl(+T),_):s},_.filter=function(T){return arguments.length?(n=typeof T=="function"?T:Wl(!!T),_):n},_.touchable=function(T){return arguments.length?(l=typeof T=="function"?T:Wl(!!T),_):l},_.extent=function(T){return arguments.length?(r=typeof T=="function"?T:Wl([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),_):r},_.scaleExtent=function(T){return arguments.length?(c[0]=+T[0],c[1]=+T[1],_):[c[0],c[1]]},_.translateExtent=function(T){return arguments.length?(u[0][0]=+T[0][0],u[1][0]=+T[1][0],u[0][1]=+T[0][1],u[1][1]=+T[1][1],_):[[u[0][0],u[0][1]],[u[1][0],u[1][1]]]},_.constrain=function(T){return arguments.length?(o=T,_):o},_.duration=function(T){return arguments.length?(f=+T,_):f},_.interpolate=function(T){return arguments.length?(p=T,_):p},_.on=function(){var T=g.on.apply(g,arguments);return T===g?_:T},_.clickDistance=function(T){return arguments.length?(C=(T=+T)*T,_):Math.sqrt(C)},_.tapDistance=function(T){return arguments.length?(E=+T,_):E},_}const Yn={error001:(n="react")=>`Seems like you have not used zustand provider as an ancestor. Help: https://${n}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:n=>`Node type "${n}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:n=>`The old edge with id=${n} does not exist.`,error009:n=>`Marker type "${n}" doesn't exist.`,error008:(n,{id:r,sourceHandle:o,targetHandle:s})=>`Couldn't create edge for ${n} handle id: "${n==="source"?o:s}", edge id: ${r}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:n=>`Edge type "${n}" not found. Using fallback type "default".`,error012:n=>`Node with id "${n}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(n="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${n}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:n=>`Edge with id "${n}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},uo=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],x0=["Enter"," ","Escape"],E0={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:n,x:r,y:o})=>`Moved selected node ${n}. New position, x: ${r}, y: ${o}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"};var ti;(function(n){n.Strict="strict",n.Loose="loose"})(ti||(ti={}));var pr;(function(n){n.Free="free",n.Vertical="vertical",n.Horizontal="horizontal"})(pr||(pr={}));var co;(function(n){n.Partial="partial",n.Full="full"})(co||(co={}));const S0={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null};var Wt;(function(n){n.Bezier="default",n.Straight="straight",n.Step="step",n.SmoothStep="smoothstep",n.SimpleBezier="simplebezier"})(Wt||(Wt={}));var ss;(function(n){n.Arrow="arrow",n.ArrowClosed="arrowclosed"})(ss||(ss={}));var xe;(function(n){n.Left="left",n.Top="top",n.Right="right",n.Bottom="bottom"})(xe||(xe={}));const tp={[xe.Left]:xe.Right,[xe.Right]:xe.Left,[xe.Top]:xe.Bottom,[xe.Bottom]:xe.Top};function _0(n){return n===null?null:n?"valid":"invalid"}const k0=n=>"id"in n&&"source"in n&&"target"in n,o2=n=>"id"in n&&"position"in n&&!("source"in n)&&!("target"in n),Gc=n=>"id"in n&&"internals"in n&&!("source"in n)&&!("target"in n),vo=(n,r=[0,0])=>{const{width:o,height:s}=xt(n),l=n.origin??r,c=o*l[0],u=s*l[1];return{x:n.position.x-c,y:n.position.y-u}},l2=(n,r={nodeOrigin:[0,0]})=>{if(n.length===0)return{x:0,y:0,width:0,height:0};const o=n.reduce((s,l)=>{const c=typeof l=="string";let u=!r.nodeLookup&&!c?l:void 0;r.nodeLookup&&(u=c?r.nodeLookup.get(l):Gc(l)?l:r.nodeLookup.get(l.id));const f=u?as(u,r.nodeOrigin):{x:0,y:0,x2:0,y2:0};return gs(s,f)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return ys(o)},wo=(n,r={})=>{let o={x:1/0,y:1/0,x2:-1/0,y2:-1/0},s=!1;return n.forEach(l=>{(r.filter===void 0||r.filter(l))&&(o=gs(o,as(l)),s=!0)}),s?ys(o):{x:0,y:0,width:0,height:0}},Qc=(n,r,[o,s,l]=[0,0,1],c=!1,u=!1)=>{const f={...ai(r,[o,s,l]),width:r.width/l,height:r.height/l},p=[];for(const g of n.values()){const{measured:m,selectable:h=!0,hidden:v=!1}=g;if(u&&!h||v)continue;const w=m.width??g.width??g.initialWidth??null,x=m.height??g.height??g.initialHeight??null,C=fo(f,ii(g)),E=(w??0)*(x??0),_=c&&C>0;(!g.internals.handleBounds||_||C>=E||g.dragging)&&p.push(g)}return p},s2=(n,r)=>{const o=new Set;return n.forEach(s=>{o.add(s.id)}),r.filter(s=>o.has(s.source)||o.has(s.target))};function a2(n,r){const o=new Map,s=r!=null&&r.nodes?new Set(r.nodes.map(l=>l.id)):null;return n.forEach(l=>{l.measured.width&&l.measured.height&&((r==null?void 0:r.includeHiddenNodes)||!l.hidden)&&(!s||s.has(l.id))&&o.set(l.id,l)}),o}async function u2({nodes:n,width:r,height:o,panZoom:s,minZoom:l,maxZoom:c},u){if(n.size===0)return!0;const f=a2(n,u),p=wo(f),g=Zc(p,r,o,(u==null?void 0:u.minZoom)??l,(u==null?void 0:u.maxZoom)??c,(u==null?void 0:u.padding)??.1);return await s.setViewport(g,{duration:u==null?void 0:u.duration,ease:u==null?void 0:u.ease,interpolate:u==null?void 0:u.interpolate}),!0}function C0({nodeId:n,nextPosition:r,nodeLookup:o,nodeOrigin:s=[0,0],nodeExtent:l,onError:c}){const u=o.get(n),f=u.parentId?o.get(u.parentId):void 0,{x:p,y:g}=f?f.internals.positionAbsolute:{x:0,y:0},m=u.origin??s;let h=u.extent||l;if(u.extent==="parent"&&!u.expandParent)if(!f)c==null||c("005",Yn.error005());else{const w=f.measured.width,x=f.measured.height;w&&x&&(h=[[p,g],[p+w,g+x]])}else f&&vr(u.extent)&&(h=[[u.extent[0][0]+p,u.extent[0][1]+g],[u.extent[1][0]+p,u.extent[1][1]+g]]);const v=vr(h)?yr(r,h,u.measured):r;return(u.measured.width===void 0||u.measured.height===void 0)&&(c==null||c("015",Yn.error015())),{position:{x:v.x-p+(u.measured.width??0)*m[0],y:v.y-g+(u.measured.height??0)*m[1]},positionAbsolute:v}}async function c2({nodesToRemove:n=[],edgesToRemove:r=[],nodes:o,edges:s,onBeforeDelete:l}){const c=new Set(n.map(v=>v.id)),u=[];for(const v of o){if(v.deletable===!1)continue;const w=c.has(v.id),x=!w&&v.parentId&&u.find(C=>C.id===v.parentId);(w||x)&&u.push(v)}const f=new Set(r.map(v=>v.id)),p=s.filter(v=>v.deletable!==!1),m=s2(u,p);for(const v of p)f.has(v.id)&&!m.find(x=>x.id===v.id)&&m.push(v);if(!l)return{edges:m,nodes:u};const h=await l({nodes:u,edges:m});return typeof h=="boolean"?h?{edges:m,nodes:u}:{edges:[],nodes:[]}:h}const ri=(n,r=0,o=1)=>Math.min(Math.max(n,r),o),yr=(n={x:0,y:0},r,o)=>({x:ri(n.x,r[0][0],r[1][0]-((o==null?void 0:o.width)??0)),y:ri(n.y,r[0][1],r[1][1]-((o==null?void 0:o.height)??0))});function N0(n,r,o){const{width:s,height:l}=xt(o),{x:c,y:u}=o.internals.positionAbsolute;return yr(n,[[c,u],[c+s,u+l]],r)}const rp=(n,r,o)=>n<r?ri(Math.abs(n-r),1,r)/r:n>o?-ri(Math.abs(n-o),1,r)/r:0,Kc=(n,r,o=15,s=40)=>{const l=rp(n.x,s,r.width-s)*o,c=rp(n.y,s,r.height-s)*o;return[l,c]},gs=(n,r)=>({x:Math.min(n.x,r.x),y:Math.min(n.y,r.y),x2:Math.max(n.x2,r.x2),y2:Math.max(n.y2,r.y2)}),Dc=({x:n,y:r,width:o,height:s})=>({x:n,y:r,x2:n+o,y2:r+s}),ys=({x:n,y:r,x2:o,y2:s})=>({x:n,y:r,width:o-n,height:s-r}),ii=(n,r=[0,0])=>{var l,c;const{x:o,y:s}=Gc(n)?n.internals.positionAbsolute:vo(n,r);return{x:o,y:s,width:((l=n.measured)==null?void 0:l.width)??n.width??n.initialWidth??0,height:((c=n.measured)==null?void 0:c.height)??n.height??n.initialHeight??0}},as=(n,r=[0,0])=>{var l,c;const{x:o,y:s}=Gc(n)?n.internals.positionAbsolute:vo(n,r);return{x:o,y:s,x2:o+(((l=n.measured)==null?void 0:l.width)??n.width??n.initialWidth??0),y2:s+(((c=n.measured)==null?void 0:c.height)??n.height??n.initialHeight??0)}},b0=(n,r)=>ys(gs(Dc(n),Dc(r))),fo=(n,r)=>{const o=Math.max(0,Math.min(n.x+n.width,r.x+r.width)-Math.max(n.x,r.x)),s=Math.max(0,Math.min(n.y+n.height,r.y+r.height)-Math.max(n.y,r.y));return Math.ceil(o*s)},ip=n=>Un(n.width)&&Un(n.height)&&Un(n.x)&&Un(n.y),Un=n=>!isNaN(n)&&isFinite(n),P0=(n,r)=>(o,s)=>{},xo=(n,r=[1,1])=>({x:r[0]*Math.round(n.x/r[0]),y:r[1]*Math.round(n.y/r[1])}),ai=({x:n,y:r},[o,s,l],c=!1,u=[1,1])=>{const f={x:(n-o)/l,y:(r-s)/l};return c?xo(f,u):f},oi=({x:n,y:r},[o,s,l])=>({x:n*l+o,y:r*l+s});function Gr(n,r){if(typeof n=="number")return Math.floor((r-r/(1+n))*.5);if(typeof n=="string"&&n.endsWith("px")){const o=parseFloat(n);if(!Number.isNaN(o))return Math.floor(o)}if(typeof n=="string"&&n.endsWith("%")){const o=parseFloat(n);if(!Number.isNaN(o))return Math.floor(r*o*.01)}return console.error(`The padding value "${n}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function f2(n,r,o){if(typeof n=="string"||typeof n=="number"){const s=Gr(n,o),l=Gr(n,r);return{top:s,right:l,bottom:s,left:l,x:l*2,y:s*2}}if(typeof n=="object"){const s=Gr(n.top??n.y??0,o),l=Gr(n.bottom??n.y??0,o),c=Gr(n.left??n.x??0,r),u=Gr(n.right??n.x??0,r);return{top:s,right:u,bottom:l,left:c,x:c+u,y:s+l}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function d2(n,r,o,s,l,c){const{x:u,y:f}=oi(n,[r,o,s]),{x:p,y:g}=oi({x:n.x+n.width,y:n.y+n.height},[r,o,s]),m=l-p,h=c-g;return{left:Math.floor(u),top:Math.floor(f),right:Math.floor(m),bottom:Math.floor(h)}}const Zc=(n,r,o,s,l,c)=>{const u=f2(c,r,o),f=(r-u.x)/n.width,p=(o-u.y)/n.height,g=Math.min(f,p),m=ri(g,s,l),h=n.x+n.width/2,v=n.y+n.height/2,w=r/2-h*m,x=o/2-v*m,C=d2(n,w,x,m,r,o),E={left:Math.min(C.left-u.left,0),top:Math.min(C.top-u.top,0),right:Math.min(C.right-u.right,0),bottom:Math.min(C.bottom-u.bottom,0)};return{x:w-E.left+E.right,y:x-E.top+E.bottom,zoom:m}},ho=()=>{var n;return typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)==null?void 0:n.indexOf("Mac"))>=0};function vr(n){return n!=null&&n!=="parent"}function xt(n){var r,o;return{width:((r=n.measured)==null?void 0:r.width)??n.width??n.initialWidth??0,height:((o=n.measured)==null?void 0:o.height)??n.height??n.initialHeight??0}}function M0(n){var r,o;return(((r=n.measured)==null?void 0:r.width)??n.width??n.initialWidth)!==void 0&&(((o=n.measured)==null?void 0:o.height)??n.height??n.initialHeight)!==void 0}function T0(n,r={width:0,height:0},o,s,l){const c={...n},u=s.get(o);if(u){const f=u.origin||l;c.x+=u.internals.positionAbsolute.x-(r.width??0)*f[0],c.y+=u.internals.positionAbsolute.y-(r.height??0)*f[1]}return c}function op(n,r){if(n.size!==r.size)return!1;for(const o of n)if(!r.has(o))return!1;return!0}function h2(){let n,r;return{promise:new Promise((s,l)=>{n=s,r=l}),resolve:n,reject:r}}function p2(n){return{...E0,...n||{}}}function io(n,{snapGrid:r=[0,0],snapToGrid:o=!1,transform:s,containerBounds:l}){const{x:c,y:u}=qn(n),f=ai({x:c-((l==null?void 0:l.left)??0),y:u-((l==null?void 0:l.top)??0)},s),{x:p,y:g}=o?xo(f,r):f;return{xSnapped:p,ySnapped:g,...f}}const Jc=n=>({width:n.offsetWidth,height:n.offsetHeight}),L0=n=>{var r;return((r=n==null?void 0:n.getRootNode)==null?void 0:r.call(n))||(window==null?void 0:window.document)},m2=["INPUT","SELECT","TEXTAREA"];function I0(n){var s,l;const r=((l=(s=n.composedPath)==null?void 0:s.call(n))==null?void 0:l[0])||n.target;return(r==null?void 0:r.nodeType)!==1?!1:m2.includes(r.nodeName)||r.hasAttribute("contenteditable")||!!r.closest(".nokey")}const R0=n=>"clientX"in n,qn=(n,r)=>{var c,u;const o=R0(n),s=o?n.clientX:(c=n.touches)==null?void 0:c[0].clientX,l=o?n.clientY:(u=n.touches)==null?void 0:u[0].clientY;return{x:s-((r==null?void 0:r.left)??0),y:l-((r==null?void 0:r.top)??0)}},lp=(n,r,o,s,l)=>{const c=r.querySelectorAll(`.${n}`);return!c||!c.length?null:Array.from(c).map(u=>{const f=u.getBoundingClientRect();return{id:u.getAttribute("data-handleid"),type:n,nodeId:l,position:u.getAttribute("data-handlepos"),x:(f.left-o.left)/s,y:(f.top-o.top)/s,...Jc(u)}})};function z0({sourceX:n,sourceY:r,targetX:o,targetY:s,sourceControlX:l,sourceControlY:c,targetControlX:u,targetControlY:f}){const p=n*.125+l*.375+u*.375+o*.125,g=r*.125+c*.375+f*.375+s*.125,m=Math.abs(p-n),h=Math.abs(g-r);return[p,g,m,h]}function Ul(n,r){return n>=0?.5*n:r*25*Math.sqrt(-n)}function sp({pos:n,x1:r,y1:o,x2:s,y2:l,c}){switch(n){case xe.Left:return[r-Ul(r-s,c),o];case xe.Right:return[r+Ul(s-r,c),o];case xe.Top:return[r,o-Ul(o-l,c)];case xe.Bottom:return[r,o+Ul(l-o,c)]}}function D0({sourceX:n,sourceY:r,sourcePosition:o=xe.Bottom,targetX:s,targetY:l,targetPosition:c=xe.Top,curvature:u=.25}){const[f,p]=sp({pos:o,x1:n,y1:r,x2:s,y2:l,c:u}),[g,m]=sp({pos:c,x1:s,y1:l,x2:n,y2:r,c:u}),[h,v,w,x]=z0({sourceX:n,sourceY:r,targetX:s,targetY:l,sourceControlX:f,sourceControlY:p,targetControlX:g,targetControlY:m});return[`M${n},${r} C${f},${p} ${g},${m} ${s},${l}`,h,v,w,x]}function A0({sourceX:n,sourceY:r,targetX:o,targetY:s}){const l=Math.abs(o-n)/2,c=o<n?o+l:o-l,u=Math.abs(s-r)/2,f=s<r?s+u:s-u;return[c,f,l,u]}function g2({sourceNode:n,targetNode:r,selected:o=!1,zIndex:s=0,elevateOnSelect:l=!1,zIndexMode:c="basic"}){if(c==="manual")return s;const u=l&&o?s+1e3:s,f=Math.max(n.parentId||l&&n.selected?n.internals.z:0,r.parentId||l&&r.selected?r.internals.z:0);return u+f}function y2({sourceNode:n,targetNode:r,width:o,height:s,transform:l}){const c=gs(as(n),as(r));c.x===c.x2&&(c.x2+=1),c.y===c.y2&&(c.y2+=1);const u={x:-l[0]/l[2],y:-l[1]/l[2],width:o/l[2],height:s/l[2]};return fo(u,ys(c))>0}const v2=({source:n,sourceHandle:r,target:o,targetHandle:s})=>`xy-edge__${n}${r||""}-${o}${s||""}`,w2=(n,r)=>r.some(o=>o.source===n.source&&o.target===n.target&&(o.sourceHandle===n.sourceHandle||!o.sourceHandle&&!n.sourceHandle)&&(o.targetHandle===n.targetHandle||!o.targetHandle&&!n.targetHandle)),x2=(n,r,o={})=>{var c;if(!n.source||!n.target)return(c=o.onError)==null||c.call(o,"006",Yn.error006()),r;const s=o.getEdgeId||v2;let l;return k0(n)?l={...n}:l={...n,id:s(n)},w2(l,r)?r:(l.sourceHandle===null&&delete l.sourceHandle,l.targetHandle===null&&delete l.targetHandle,r.concat(l))};function O0({sourceX:n,sourceY:r,targetX:o,targetY:s}){const[l,c,u,f]=A0({sourceX:n,sourceY:r,targetX:o,targetY:s});return[`M ${n},${r}L ${o},${s}`,l,c,u,f]}const ap={[xe.Left]:{x:-1,y:0},[xe.Right]:{x:1,y:0},[xe.Top]:{x:0,y:-1},[xe.Bottom]:{x:0,y:1}},E2=({source:n,sourcePosition:r=xe.Bottom,target:o})=>r===xe.Left||r===xe.Right?n.x<o.x?{x:1,y:0}:{x:-1,y:0}:n.y<o.y?{x:0,y:1}:{x:0,y:-1},up=(n,r)=>Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2));function S2({source:n,sourcePosition:r=xe.Bottom,target:o,targetPosition:s=xe.Top,center:l,offset:c,stepPosition:u}){const f=ap[r],p=ap[s],g={x:n.x+f.x*c,y:n.y+f.y*c},m={x:o.x+p.x*c,y:o.y+p.y*c},h=E2({source:g,sourcePosition:r,target:m}),v=h.x!==0?"x":"y",w=h[v];let x=[],C,E;const _={x:0,y:0},b={x:0,y:0},[,,S,N]=A0({sourceX:n.x,sourceY:n.y,targetX:o.x,targetY:o.y});if(f[v]*p[v]===-1){v==="x"?(C=l.x??g.x+(m.x-g.x)*u,E=l.y??(g.y+m.y)/2):(C=l.x??(g.x+m.x)/2,E=l.y??g.y+(m.y-g.y)*u);const P=[{x:C,y:g.y},{x:C,y:m.y}],R=[{x:g.x,y:E},{x:m.x,y:E}];f[v]===w?x=v==="x"?P:R:x=v==="x"?R:P}else{const P=[{x:g.x,y:m.y}],R=[{x:m.x,y:g.y}];if(v==="x"?x=f.x===w?R:P:x=f.y===w?P:R,r===s){const T=Math.abs(n[v]-o[v]);if(T<=c){const Y=Math.min(c-1,c-T);f[v]===w?_[v]=(g[v]>n[v]?-1:1)*Y:b[v]=(m[v]>o[v]?-1:1)*Y}}if(r!==s){const T=v==="x"?"y":"x",Y=f[v]===p[T],U=g[T]>m[T],X=g[T]<m[T];(f[v]===1&&(!Y&&U||Y&&X)||f[v]!==1&&(!Y&&X||Y&&U))&&(x=v==="x"?P:R)}const $={x:g.x+_.x,y:g.y+_.y},I={x:m.x+b.x,y:m.y+b.y},A=Math.max(Math.abs($.x-x[0].x),Math.abs(I.x-x[0].x)),J=Math.max(Math.abs($.y-x[0].y),Math.abs(I.y-x[0].y));A>=J?(C=($.x+I.x)/2,E=x[0].y):(C=x[0].x,E=($.y+I.y)/2)}const z={x:g.x+_.x,y:g.y+_.y},L={x:m.x+b.x,y:m.y+b.y};return[[n,...z.x!==x[0].x||z.y!==x[0].y?[z]:[],...x,...L.x!==x[x.length-1].x||L.y!==x[x.length-1].y?[L]:[],o],C,E,S,N]}function _2(n,r,o,s){const l=Math.min(up(n,r)/2,up(r,o)/2,s),{x:c,y:u}=r;if(n.x===c&&c===o.x||n.y===u&&u===o.y)return`L${c} ${u}`;if(n.y===u){const g=n.x<o.x?-1:1,m=n.y<o.y?1:-1;return`L ${c+l*g},${u}Q ${c},${u} ${c},${u+l*m}`}const f=n.x<o.x?1:-1,p=n.y<o.y?-1:1;return`L ${c},${u+l*p}Q ${c},${u} ${c+l*f},${u}`}function Ac({sourceX:n,sourceY:r,sourcePosition:o=xe.Bottom,targetX:s,targetY:l,targetPosition:c=xe.Top,borderRadius:u=5,centerX:f,centerY:p,offset:g=20,stepPosition:m=.5}){const[h,v,w,x,C]=S2({source:{x:n,y:r},sourcePosition:o,target:{x:s,y:l},targetPosition:c,center:{x:f,y:p},offset:g,stepPosition:m});let E=`M${h[0].x} ${h[0].y}`;for(let _=1;_<h.length-1;_++)E+=_2(h[_-1],h[_],h[_+1],u);return E+=`L${h[h.length-1].x} ${h[h.length-1].y}`,[E,v,w,x,C]}function cp(n){var r;return n&&!!(n.internals.handleBounds||(r=n.handles)!=null&&r.length)&&!!(n.measured.width||n.width||n.initialWidth)}function k2(n){var h;const{sourceNode:r,targetNode:o}=n;if(!cp(r)||!cp(o))return null;const s=r.internals.handleBounds||fp(r.handles),l=o.internals.handleBounds||fp(o.handles),c=dp((s==null?void 0:s.source)??[],n.sourceHandle),u=dp(n.connectionMode===ti.Strict?(l==null?void 0:l.target)??[]:((l==null?void 0:l.target)??[]).concat((l==null?void 0:l.source)??[]),n.targetHandle);if(!c||!u)return(h=n.onError)==null||h.call(n,"008",Yn.error008(c?"target":"source",{id:n.id,sourceHandle:n.sourceHandle,targetHandle:n.targetHandle})),null;const f=(c==null?void 0:c.position)||xe.Bottom,p=(u==null?void 0:u.position)||xe.Top,g=wr(r,c,f),m=wr(o,u,p);return{sourceX:g.x,sourceY:g.y,targetX:m.x,targetY:m.y,sourcePosition:f,targetPosition:p}}function fp(n){if(!n)return null;const r=[],o=[];for(const s of n)s.width=s.width??1,s.height=s.height??1,s.type==="source"?r.push(s):s.type==="target"&&o.push(s);return{source:r,target:o}}function wr(n,r,o=xe.Left,s=!1){const l=((r==null?void 0:r.x)??0)+n.internals.positionAbsolute.x,c=((r==null?void 0:r.y)??0)+n.internals.positionAbsolute.y,{width:u,height:f}=r??xt(n);if(s)return{x:l+u/2,y:c+f/2};switch((r==null?void 0:r.position)??o){case xe.Top:return{x:l+u/2,y:c};case xe.Right:return{x:l+u,y:c+f/2};case xe.Bottom:return{x:l+u/2,y:c+f};case xe.Left:return{x:l,y:c+f/2}}}function dp(n,r){return n&&(r?n.find(o=>o.id===r):n[0])||null}function Oc(n,r){return n?typeof n=="string"?n:`${r?`${r}__`:""}${Object.keys(n).sort().map(s=>`${s}=${n[s]}`).join("&")}`:""}function C2(n,{id:r,defaultColor:o,defaultMarkerStart:s,defaultMarkerEnd:l}){const c=new Set;return n.reduce((u,f)=>([f.markerStart||s,f.markerEnd||l].forEach(p=>{if(p&&typeof p=="object"){const g=Oc(p,r);c.has(g)||(u.push({id:g,color:p.color||o,...p}),c.add(g))}}),u),[]).sort((u,f)=>u.id.localeCompare(f.id))}const F0=1e3,N2=10,ef={nodeOrigin:[0,0],nodeExtent:uo,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},b2={...ef,checkEquality:!0};function nf(n,r){const o={...n};for(const s in r)r[s]!==void 0&&(o[s]=r[s]);return o}function P2(n,r,o){const s=nf(ef,o);for(const l of n.values())if(l.parentId)rf(l,n,r,s);else{const c=vo(l,s.nodeOrigin),u=vr(l.extent)?l.extent:s.nodeExtent,f=yr(c,u,xt(l));l.internals.positionAbsolute=f}}function M2(n,r){if(!n.handles)return n.measured?r==null?void 0:r.internals.handleBounds:void 0;const o=[],s=[];for(const l of n.handles){const c={id:l.id,width:l.width??1,height:l.height??1,nodeId:n.id,x:l.x,y:l.y,position:l.position,type:l.type};l.type==="source"?o.push(c):l.type==="target"&&s.push(c)}return{source:o,target:s}}function tf(n){return n==="manual"}function Fc(n,r,o,s={}){var m,h;const l=nf(b2,s),c={i:0},u=new Map(r),f=l!=null&&l.elevateNodesOnSelect&&!tf(l.zIndexMode)?F0:0;let p=n.length>0,g=!1;r.clear(),o.clear();for(const v of n){let w=u.get(v.id);if(l.checkEquality&&v===(w==null?void 0:w.internals.userNode))r.set(v.id,w);else{const x=vo(v,l.nodeOrigin),C=vr(v.extent)?v.extent:l.nodeExtent,E=yr(x,C,xt(v));w={...l.defaults,...v,measured:{width:(m=v.measured)==null?void 0:m.width,height:(h=v.measured)==null?void 0:h.height},internals:{positionAbsolute:E,handleBounds:M2(v,w),z:j0(v,f,l.zIndexMode),userNode:v}},r.set(v.id,w)}(w.measured===void 0||w.measured.width===void 0||w.measured.height===void 0)&&!w.hidden&&(p=!1),v.parentId&&rf(w,r,o,s,c),g||(g=v.selected??!1)}return{nodesInitialized:p,hasSelectedNodes:g}}function T2(n,r){if(!n.parentId)return;const o=r.get(n.parentId);o?o.set(n.id,n):r.set(n.parentId,new Map([[n.id,n]]))}function rf(n,r,o,s,l){const{elevateNodesOnSelect:c,nodeOrigin:u,nodeExtent:f,zIndexMode:p}=nf(ef,s),g=n.parentId,m=r.get(g);if(!m){console.warn(`Parent node ${g} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}T2(n,o),l&&!m.parentId&&m.internals.rootParentIndex===void 0&&p==="auto"&&(m.internals.rootParentIndex=++l.i,m.internals.z=m.internals.z+l.i*N2),l&&m.internals.rootParentIndex!==void 0&&(l.i=m.internals.rootParentIndex);const h=c&&!tf(p)?F0:0,{x:v,y:w,z:x}=L2(n,m,u,f,h,p),{positionAbsolute:C}=n.internals,E=v!==C.x||w!==C.y;(E||x!==n.internals.z)&&r.set(n.id,{...n,internals:{...n.internals,positionAbsolute:E?{x:v,y:w}:C,z:x}})}function j0(n,r,o){const s=Un(n.zIndex)?n.zIndex:0;return tf(o)?s:s+(n.selected?r:0)}function L2(n,r,o,s,l,c){const{x:u,y:f}=r.internals.positionAbsolute,p=xt(n),g=vo(n,o),m=vr(n.extent)?yr(g,n.extent,p):g;let h=yr({x:u+m.x,y:f+m.y},s,p);n.extent==="parent"&&(h=N0(h,p,r));const v=j0(n,l,c),w=r.internals.z??0;return{x:h.x,y:h.y,z:w>=v?w+1:v}}function of(n,r,o,s=[0,0]){var u;const l=[],c=new Map;for(const f of n){const p=r.get(f.parentId);if(!p)continue;const g=((u=c.get(f.parentId))==null?void 0:u.expandedRect)??ii(p),m=b0(g,f.rect);c.set(f.parentId,{expandedRect:m,parent:p})}return c.size>0&&c.forEach(({expandedRect:f,parent:p},g)=>{var S;const m=p.internals.positionAbsolute,h=xt(p),v=p.origin??s,w=f.x<m.x?Math.round(Math.abs(m.x-f.x)):0,x=f.y<m.y?Math.round(Math.abs(m.y-f.y)):0,C=Math.max(h.width,Math.round(f.width)),E=Math.max(h.height,Math.round(f.height)),_=(C-h.width)*v[0],b=(E-h.height)*v[1];(w>0||x>0||_||b)&&(l.push({id:g,type:"position",position:{x:p.position.x-w+_,y:p.position.y-x+b}}),(S=o.get(g))==null||S.forEach(N=>{n.some(z=>z.id===N.id)||l.push({id:N.id,type:"position",position:{x:N.position.x+w,y:N.position.y+x}})})),(h.width<f.width||h.height<f.height||w||x)&&l.push({id:g,type:"dimensions",setAttributes:!0,dimensions:{width:C+(w?v[0]*w-_:0),height:E+(x?v[1]*x-b:0)}})}),l}function I2(n,r,o,s,l,c,u){const f=s==null?void 0:s.querySelector(".xyflow__viewport");let p=!1;if(!f)return{changes:[],updatedInternals:p};const g=[],m=window.getComputedStyle(f),{m22:h}=new window.DOMMatrixReadOnly(m.transform),v=[];for(const w of n.values()){const x=r.get(w.id);if(!x)continue;if(x.hidden){r.set(x.id,{...x,internals:{...x.internals,handleBounds:void 0}}),p=!0;continue}const C=Jc(w.nodeElement),E=x.measured.width!==C.width||x.measured.height!==C.height;if(!!(C.width&&C.height&&(E||!x.internals.handleBounds||w.force))){const b=w.nodeElement.getBoundingClientRect(),S=vr(x.extent)?x.extent:c;let{positionAbsolute:N}=x.internals;x.parentId&&x.extent==="parent"?N=N0(N,C,r.get(x.parentId)):S&&(N=yr(N,S,C));const z={...x,measured:C,internals:{...x.internals,positionAbsolute:N,handleBounds:{source:lp("source",w.nodeElement,b,h,x.id),target:lp("target",w.nodeElement,b,h,x.id)}}};r.set(x.id,z),x.parentId&&rf(z,r,o,{nodeOrigin:l,zIndexMode:u}),p=!0,E&&(g.push({id:x.id,type:"dimensions",dimensions:C}),x.expandParent&&x.parentId&&v.push({id:x.id,parentId:x.parentId,rect:ii(z,l)}))}}if(v.length>0){const w=of(v,r,o,l);g.push(...w)}return{changes:g,updatedInternals:p}}async function R2({delta:n,panZoom:r,transform:o,translateExtent:s,width:l,height:c}){if(!r||!n.x&&!n.y)return!1;const u=await r.setViewportConstrained({x:o[0]+n.x,y:o[1]+n.y,zoom:o[2]},[[0,0],[l,c]],s);return!!u&&(u.x!==o[0]||u.y!==o[1]||u.k!==o[2])}function hp(n,r,o,s,l,c){let u=l;const f=s.get(u)||new Map;s.set(u,f.set(o,r)),u=`${l}-${n}`;const p=s.get(u)||new Map;if(s.set(u,p.set(o,r)),c){u=`${l}-${n}-${c}`;const g=s.get(u)||new Map;s.set(u,g.set(o,r))}}function H0(n,r,o){n.clear(),r.clear();for(const s of o){const{source:l,target:c,sourceHandle:u=null,targetHandle:f=null}=s,p={edgeId:s.id,source:l,target:c,sourceHandle:u,targetHandle:f},g=`${l}-${u}--${c}-${f}`,m=`${c}-${f}--${l}-${u}`;hp("source",p,m,n,l,u),hp("target",p,g,n,c,f),r.set(s.id,s)}}function $0(n,r){if(!n.parentId)return!1;const o=r.get(n.parentId);return o?o.selected?!0:$0(o,r):!1}function pp(n,r,o){var l;let s=n;do{if((l=s==null?void 0:s.matches)!=null&&l.call(s,r))return!0;if(s===o)return!1;s=s==null?void 0:s.parentElement}while(s);return!1}function z2(n,r,o,s){const l=new Map;for(const[c,u]of n)if((u.selected||u.id===s)&&(!u.parentId||!$0(u,n))&&(u.draggable||r&&typeof u.draggable>"u")){const f=n.get(c);f&&l.set(c,{id:c,position:f.position||{x:0,y:0},distance:{x:o.x-f.internals.positionAbsolute.x,y:o.y-f.internals.positionAbsolute.y},extent:f.extent,parentId:f.parentId,origin:f.origin,expandParent:f.expandParent,internals:{positionAbsolute:f.internals.positionAbsolute||{x:0,y:0}},measured:{width:f.measured.width??0,height:f.measured.height??0}})}return l}function Cu({nodeId:n,dragItems:r,nodeLookup:o,dragging:s=!0}){var u,f,p;const l=[];for(const[g,m]of r){const h=(u=o.get(g))==null?void 0:u.internals.userNode;h&&l.push({...h,position:m.position,dragging:s})}if(!n)return[l[0],l];const c=(f=o.get(n))==null?void 0:f.internals.userNode;return[c?{...c,position:((p=r.get(n))==null?void 0:p.position)||c.position,dragging:s}:l[0],l]}function D2({dragItems:n,snapGrid:r,x:o,y:s}){const l=n.values().next().value;if(!l)return null;const c={x:o-l.distance.x,y:s-l.distance.y},u=xo(c,r);return{x:u.x-c.x,y:u.y-c.y}}function A2({onNodeMouseDown:n,getStoreItems:r,onDragStart:o,onDrag:s,onDragStop:l}){let c={x:null,y:null},u=0,f=new Map,p=!1,g={x:0,y:0},m=null,h=!1,v=null,w=!1,x=!1,C=null;function E({noDragClassName:b,handleSelector:S,domNode:N,isSelectable:z,nodeId:L,nodeClickDistance:F=0}){v=bn(N);function P({x:A,y:J}){const{nodeLookup:T,nodeExtent:Y,snapGrid:U,snapToGrid:X,nodeOrigin:B,onNodeDrag:V,onSelectionDrag:G,onError:M,updateNodePositions:j}=r();c={x:A,y:J};let O=!1;const W=f.size>1,Q=W&&Y?Dc(wo(f)):null,re=W&&X?D2({dragItems:f,snapGrid:U,x:A,y:J}):null;for(const[le,K]of f){if(!T.has(le))continue;let oe={x:A-K.distance.x,y:J-K.distance.y};X&&(oe=re?{x:Math.round(oe.x+re.x),y:Math.round(oe.y+re.y)}:xo(oe,U));let de=null;if(W&&Y&&!K.extent&&Q){const{positionAbsolute:fe}=K.internals,_e=fe.x-Q.x+Y[0][0],Ne=fe.x+K.measured.width-Q.x2+Y[1][0],be=fe.y-Q.y+Y[0][1],Re=fe.y+K.measured.height-Q.y2+Y[1][1];de=[[_e,be],[Ne,Re]]}const{position:we,positionAbsolute:he}=C0({nodeId:le,nextPosition:oe,nodeLookup:T,nodeExtent:de||Y,nodeOrigin:B,onError:M});O=O||K.position.x!==we.x||K.position.y!==we.y,K.position=we,K.internals.positionAbsolute=he}if(x=x||O,!!O&&(j(f,!0),C&&(s||V||!L&&G))){const[le,K]=Cu({nodeId:L,dragItems:f,nodeLookup:T});s==null||s(C,f,le,K),V==null||V(C,le,K),L||G==null||G(C,K)}}async function R(){if(!m)return;const{transform:A,panBy:J,autoPanSpeed:T,autoPanOnNodeDrag:Y}=r();if(!Y){p=!1,cancelAnimationFrame(u);return}const[U,X]=Kc(g,m,T);(U!==0||X!==0)&&(c.x=(c.x??0)-U/A[2],c.y=(c.y??0)-X/A[2],await J({x:U,y:X})&&P(c)),u=requestAnimationFrame(R)}function $(A){var W;const{nodeLookup:J,multiSelectionActive:T,nodesDraggable:Y,transform:U,snapGrid:X,snapToGrid:B,selectNodesOnDrag:V,onNodeDragStart:G,onSelectionDragStart:M,unselectNodesAndEdges:j}=r();h=!0,(!V||!z)&&!T&&L&&((W=J.get(L))!=null&&W.selected||j()),z&&V&&L&&(n==null||n(L));const O=io(A.sourceEvent,{transform:U,snapGrid:X,snapToGrid:B,containerBounds:m});if(c=O,f=z2(J,Y,O,L),f.size>0&&(o||G||!L&&M)){const[Q,re]=Cu({nodeId:L,dragItems:f,nodeLookup:J});o==null||o(A.sourceEvent,f,Q,re),G==null||G(A.sourceEvent,Q,re),L||M==null||M(A.sourceEvent,re)}}const I=i0().clickDistance(F).on("start",A=>{const{domNode:J,nodeDragThreshold:T,transform:Y,snapGrid:U,snapToGrid:X}=r();m=(J==null?void 0:J.getBoundingClientRect())||null,w=!1,x=!1,C=A.sourceEvent,T===0&&$(A),c=io(A.sourceEvent,{transform:Y,snapGrid:U,snapToGrid:X,containerBounds:m}),g=qn(A.sourceEvent,m)}).on("drag",A=>{const{autoPanOnNodeDrag:J,transform:T,snapGrid:Y,snapToGrid:U,nodeDragThreshold:X,nodeLookup:B}=r(),V=io(A.sourceEvent,{transform:T,snapGrid:Y,snapToGrid:U,containerBounds:m});if(C=A.sourceEvent,(A.sourceEvent.type==="touchmove"&&A.sourceEvent.touches.length>1||L&&!B.has(L))&&(w=!0),!w){if(!p&&J&&h&&(p=!0,R()),!h){const G=qn(A.sourceEvent,m),M=G.x-g.x,j=G.y-g.y;Math.sqrt(M*M+j*j)>X&&$(A)}(c.x!==V.xSnapped||c.y!==V.ySnapped)&&f&&h&&(g=qn(A.sourceEvent,m),P(V))}}).on("end",A=>{if(!h||w){w&&f.size>0&&r().updateNodePositions(f,!1);return}if(p=!1,h=!1,cancelAnimationFrame(u),f.size>0){const{nodeLookup:J,updateNodePositions:T,onNodeDragStop:Y,onSelectionDragStop:U}=r();if(x&&(T(f,!1),x=!1),l||Y||!L&&U){const[X,B]=Cu({nodeId:L,dragItems:f,nodeLookup:J,dragging:!1});l==null||l(A.sourceEvent,f,X,B),Y==null||Y(A.sourceEvent,X,B),L||U==null||U(A.sourceEvent,B)}}}).filter(A=>{const J=A.target;return!A.button&&(!b||!pp(J,`.${b}`,N))&&(!S||pp(J,S,N))});v.call(I)}function _(){v==null||v.on(".drag",null)}return{update:E,destroy:_}}function O2(n,r,o){const s=[],l={x:n.x-o,y:n.y-o,width:o*2,height:o*2};for(const c of r.values())fo(l,ii(c))>0&&s.push(c);return s}const F2=250;function j2(n,r,o,s){var f,p;let l=[],c=1/0;const u=O2(n,o,r+F2);for(const g of u){const m=[...((f=g.internals.handleBounds)==null?void 0:f.source)??[],...((p=g.internals.handleBounds)==null?void 0:p.target)??[]];for(const h of m){if(s.nodeId===h.nodeId&&s.type===h.type&&s.id===h.id)continue;const{x:v,y:w}=wr(g,h,h.position,!0),x=Math.sqrt(Math.pow(v-n.x,2)+Math.pow(w-n.y,2));x>r||(x<c?(l=[{...h,x:v,y:w}],c=x):x===c&&l.push({...h,x:v,y:w}))}}if(!l.length)return null;if(l.length>1){const g=s.type==="source"?"target":"source";return l.find(m=>m.type===g)??l[0]}return l[0]}function V0(n,r,o,s,l,c=!1){var g,m,h;const u=s.get(n);if(!u)return null;const f=l==="strict"?(g=u.internals.handleBounds)==null?void 0:g[r]:[...((m=u.internals.handleBounds)==null?void 0:m.source)??[],...((h=u.internals.handleBounds)==null?void 0:h.target)??[]],p=(o?f==null?void 0:f.find(v=>v.id===o):f==null?void 0:f[0])??null;return p&&c?{...p,...wr(u,p,p.position,!0)}:p}function B0(n,r){return n||(r!=null&&r.classList.contains("target")?"target":r!=null&&r.classList.contains("source")?"source":null)}function H2(n,r){let o=null;return r?o=!0:n&&!r&&(o=!1),o}const W0=()=>!0;function $2(n,{connectionMode:r,connectionRadius:o,handleId:s,nodeId:l,edgeUpdaterType:c,isTarget:u,domNode:f,nodeLookup:p,lib:g,autoPanOnConnect:m,flowId:h,panBy:v,cancelConnection:w,onConnectStart:x,onConnect:C,onConnectEnd:E,isValidConnection:_=W0,onReconnectEnd:b,updateConnection:S,getTransform:N,getFromHandle:z,autoPanSpeed:L,dragThreshold:F=1,handleDomNode:P}){const R=L0(n.target);let $=0,I;const{x:A,y:J}=qn(n),T=B0(c,P),Y=f==null?void 0:f.getBoundingClientRect();let U=!1;if(!Y||!T)return;const X=V0(l,T,s,p,r);if(!X)return;let B=qn(n,Y),V=!1,G=null,M=!1,j=null;function O(){if(!m||!Y)return;const[we,he]=Kc(B,Y,L);v({x:we,y:he}),$=requestAnimationFrame(O)}const W={...X,nodeId:l,type:T,position:X.position},Q=p.get(l);let le={inProgress:!0,isValid:null,from:wr(Q,W,xe.Left,!0),fromHandle:W,fromPosition:W.position,fromNode:Q,to:B,toHandle:null,toPosition:tp[W.position],toNode:null,pointer:B};function K(){U=!0,S(le),x==null||x(n,{nodeId:l,handleId:s,handleType:T})}F===0&&K();function oe(we){if(!U){const{x:Re,y:an}=qn(we),fn=Re-A,nn=an-J;if(!(fn*fn+nn*nn>F*F))return;K()}if(!z()||!W){de(we);return}const he=N();B=qn(we,Y),I=j2(ai(B,he,!1,[1,1]),o,p,W),V||(O(),V=!0);const fe=U0(we,{handle:I,connectionMode:r,fromNodeId:l,fromHandleId:s,fromType:u?"target":"source",isValidConnection:_,doc:R,lib:g,flowId:h,nodeLookup:p});j=fe.handleDomNode,G=fe.connection,M=H2(!!I,fe.isValid);const _e=p.get(l),Ne=_e?wr(_e,W,xe.Left,!0):le.from,be={...le,from:Ne,isValid:M,to:fe.toHandle&&M?oi({x:fe.toHandle.x,y:fe.toHandle.y},he):B,toHandle:fe.toHandle,toPosition:M&&fe.toHandle?fe.toHandle.position:tp[W.position],toNode:fe.toHandle?p.get(fe.toHandle.nodeId):null,pointer:B};S(be),le=be}function de(we){if(!("touches"in we&&we.touches.length>0)){if(U){(I||j)&&G&&M&&(C==null||C(G));const{inProgress:he,...fe}=le,_e={...fe,toPosition:le.toHandle?le.toPosition:null};E==null||E(we,_e),c&&(b==null||b(we,_e))}w(),cancelAnimationFrame($),V=!1,M=!1,G=null,j=null,R.removeEventListener("mousemove",oe),R.removeEventListener("mouseup",de),R.removeEventListener("touchmove",oe),R.removeEventListener("touchend",de)}}R.addEventListener("mousemove",oe),R.addEventListener("mouseup",de),R.addEventListener("touchmove",oe),R.addEventListener("touchend",de)}function U0(n,{handle:r,connectionMode:o,fromNodeId:s,fromHandleId:l,fromType:c,doc:u,lib:f,flowId:p,isValidConnection:g=W0,nodeLookup:m}){const h=c==="target",v=r?u.querySelector(`.${f}-flow__handle[data-id="${p}-${r==null?void 0:r.nodeId}-${r==null?void 0:r.id}-${r==null?void 0:r.type}"]`):null,{x:w,y:x}=qn(n),C=u.elementFromPoint(w,x),E=C!=null&&C.classList.contains(`${f}-flow__handle`)?C:v,_={handleDomNode:E,isValid:!1,connection:null,toHandle:null};if(E){const b=B0(void 0,E),S=E.getAttribute("data-nodeid"),N=E.getAttribute("data-handleid"),z=E.classList.contains("connectable"),L=E.classList.contains("connectableend");if(!S||!b)return _;const F={source:h?S:s,sourceHandle:h?N:l,target:h?s:S,targetHandle:h?l:N};_.connection=F;const R=z&&L&&(o===ti.Strict?h&&b==="source"||!h&&b==="target":S!==s||N!==l);_.isValid=R&&g(F),_.toHandle=V0(S,b,N,m,o,!0)}return _}const jc={onPointerDown:$2,isValid:U0};function V2({domNode:n,panZoom:r,getTransform:o,getViewScale:s}){const l=bn(n);function c({translateExtent:f,width:p,height:g,zoomStep:m=1,pannable:h=!0,zoomable:v=!0,inversePan:w=!1}){const x=S=>{if(S.sourceEvent.type!=="wheel"||!r)return;const N=o(),z=S.sourceEvent.ctrlKey&&ho()?10:1,L=-S.sourceEvent.deltaY*(S.sourceEvent.deltaMode===1?.05:S.sourceEvent.deltaMode?1:.002)*m,F=N[2]*Math.pow(2,L*z);r.scaleTo(F)};let C=[0,0];const E=S=>{(S.sourceEvent.type==="mousedown"||S.sourceEvent.type==="touchstart")&&(C=[S.sourceEvent.clientX??S.sourceEvent.touches[0].clientX,S.sourceEvent.clientY??S.sourceEvent.touches[0].clientY])},_=S=>{const N=o();if(S.sourceEvent.type!=="mousemove"&&S.sourceEvent.type!=="touchmove"||!r)return;const z=[S.sourceEvent.clientX??S.sourceEvent.touches[0].clientX,S.sourceEvent.clientY??S.sourceEvent.touches[0].clientY],L=[z[0]-C[0],z[1]-C[1]];C=z;const F=s()*Math.max(N[2],Math.log(N[2]))*(w?-1:1),P={x:N[0]-L[0]*F,y:N[1]-L[1]*F},R=[[0,0],[p,g]];r.setViewportConstrained({x:P.x,y:P.y,zoom:N[2]},R,f)},b=w0().on("start",E).on("zoom",h?_:null).on("zoom.wheel",v?x:null);l.call(b,{})}function u(){l.on("zoom",null)}return{update:c,destroy:u,pointer:Bn}}const vs=n=>({x:n.x,y:n.y,zoom:n.k}),Nu=({x:n,y:r,zoom:o})=>ms.translate(n,r).scale(o),Qr=(n,r)=>n.target.closest(`.${r}`),q0=(n,r)=>r===2&&Array.isArray(n)&&n.includes(2),B2=n=>((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2,bu=(n,r=0,o=B2,s=()=>{})=>{const l=typeof r=="number"&&r>0;return l||s(),l?n.transition().duration(r).ease(o).on("end",s):n},Y0=n=>{const r=n.ctrlKey&&ho()?10:1;return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*r};function W2({zoomPanValues:n,noWheelClassName:r,d3Selection:o,d3Zoom:s,panOnScrollMode:l,panOnScrollSpeed:c,zoomOnPinch:u,onPanZoomStart:f,onPanZoom:p,onPanZoomEnd:g}){return m=>{if(Qr(m,r))return m.ctrlKey&&m.preventDefault(),!1;m.preventDefault(),m.stopImmediatePropagation();const h=o.property("__zoom").k||1;if(m.ctrlKey&&u){const E=Bn(m),_=Y0(m),b=h*Math.pow(2,_);s.scaleTo(o,b,E,m);return}const v=m.deltaMode===1?20:1;let w=l===pr.Vertical?0:m.deltaX*v,x=l===pr.Horizontal?0:m.deltaY*v;!ho()&&m.shiftKey&&l!==pr.Vertical&&(w=m.deltaY*v,x=0),s.translateBy(o,-(w/h)*c,-(x/h)*c,{internal:!0});const C=vs(o.property("__zoom"));clearTimeout(n.panScrollTimeout),n.isPanScrolling?(p==null||p(m,C),n.panScrollTimeout=setTimeout(()=>{g==null||g(m,C),n.isPanScrolling=!1},150)):(n.isPanScrolling=!0,f==null||f(m,C))}}function U2({noWheelClassName:n,preventScrolling:r,d3ZoomHandler:o}){return function(s,l){const c=s.type==="wheel",u=!r&&c&&!s.ctrlKey,f=Qr(s,n);if(s.ctrlKey&&c&&f&&s.preventDefault(),u||f)return null;s.preventDefault(),o.call(this,s,l)}}function q2({zoomPanValues:n,onDraggingChange:r,onPanZoomStart:o}){return s=>{var c,u,f;if((c=s.sourceEvent)!=null&&c.internal)return;const l=vs(s.transform);n.mouseButton=((u=s.sourceEvent)==null?void 0:u.button)||0,n.isZoomingOrPanning=!0,n.prevViewport=l,((f=s.sourceEvent)==null?void 0:f.type)==="mousedown"&&r(!0),o&&(o==null||o(s.sourceEvent,l))}}function Y2({zoomPanValues:n,panOnDrag:r,onPaneContextMenu:o,onTransformChange:s,onPanZoom:l}){return c=>{var u,f;n.usedRightMouseButton=!!(o&&q0(r,n.mouseButton??0)),(u=c.sourceEvent)!=null&&u.sync||s([c.transform.x,c.transform.y,c.transform.k]),l&&!((f=c.sourceEvent)!=null&&f.internal)&&(l==null||l(c.sourceEvent,vs(c.transform)))}}function X2({zoomPanValues:n,panOnDrag:r,panOnScroll:o,onDraggingChange:s,onPanZoomEnd:l,onPaneContextMenu:c}){return u=>{var f;if(!((f=u.sourceEvent)!=null&&f.internal)&&(n.isZoomingOrPanning=!1,c&&q0(r,n.mouseButton??0)&&!n.usedRightMouseButton&&u.sourceEvent&&c(u.sourceEvent),n.usedRightMouseButton=!1,s(!1),l)){const p=vs(u.transform);n.prevViewport=p,clearTimeout(n.timerId),n.timerId=setTimeout(()=>{l==null||l(u.sourceEvent,p)},o?150:0)}}}function G2({zoomActivationKeyPressed:n,zoomOnScroll:r,zoomOnPinch:o,panOnDrag:s,panOnScroll:l,zoomOnDoubleClick:c,userSelectionActive:u,noWheelClassName:f,noPanClassName:p,lib:g,connectionInProgress:m}){return h=>{var E;const v=n||r,w=o&&h.ctrlKey,x=h.type==="wheel";if(h.button===1&&h.type==="mousedown"&&(Qr(h,`${g}-flow__node`)||Qr(h,`${g}-flow__edge`)))return!0;if(!s&&!v&&!l&&!c&&!o||u||m&&!x||Qr(h,f)&&x||Qr(h,p)&&(!x||l&&x&&!n)||!o&&h.ctrlKey&&x)return!1;if(!o&&h.type==="touchstart"&&((E=h.touches)==null?void 0:E.length)>1)return h.preventDefault(),!1;if(!v&&!l&&!w&&x||!s&&(h.type==="mousedown"||h.type==="touchstart")||Array.isArray(s)&&!s.includes(h.button)&&h.type==="mousedown")return!1;const C=Array.isArray(s)&&s.includes(h.button)||!h.button||h.button<=1;return(!h.ctrlKey||x)&&C}}function Q2({domNode:n,minZoom:r,maxZoom:o,translateExtent:s,viewport:l,onPanZoom:c,onPanZoomStart:u,onPanZoomEnd:f,onDraggingChange:p}){const g={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},m=n.getBoundingClientRect(),h=w0().scaleExtent([r,o]).translateExtent(s),v=bn(n).call(h);b({x:l.x,y:l.y,zoom:ri(l.zoom,r,o)},[[0,0],[m.width,m.height]],s);const w=v.on("wheel.zoom"),x=v.on("dblclick.zoom");h.wheelDelta(Y0);async function C(I,A){return v?new Promise(J=>{h==null||h.interpolate((A==null?void 0:A.interpolate)==="linear"?ro:Ql).transform(bu(v,A==null?void 0:A.duration,A==null?void 0:A.ease,()=>J(!0)),I)}):!1}function E({noWheelClassName:I,noPanClassName:A,onPaneContextMenu:J,userSelectionActive:T,panOnScroll:Y,panOnDrag:U,panOnScrollMode:X,panOnScrollSpeed:B,preventScrolling:V,zoomOnPinch:G,zoomOnScroll:M,zoomOnDoubleClick:j,zoomActivationKeyPressed:O,lib:W,onTransformChange:Q,connectionInProgress:re,paneClickDistance:le,selectionOnDrag:K}){T&&!g.isZoomingOrPanning&&_();const oe=Y&&!O&&!T;h.clickDistance(K?1/0:!Un(le)||le<0?0:le);const de=oe?W2({zoomPanValues:g,noWheelClassName:I,d3Selection:v,d3Zoom:h,panOnScrollMode:X,panOnScrollSpeed:B,zoomOnPinch:G,onPanZoomStart:u,onPanZoom:c,onPanZoomEnd:f}):U2({noWheelClassName:I,preventScrolling:V,d3ZoomHandler:w});v.on("wheel.zoom",de,{passive:!1});const we=q2({zoomPanValues:g,onDraggingChange:p,onPanZoomStart:u});h.on("start",we);const he=Y2({zoomPanValues:g,panOnDrag:U,onPaneContextMenu:!!J,onPanZoom:c,onTransformChange:Q});h.on("zoom",he);const fe=X2({zoomPanValues:g,panOnDrag:U,panOnScroll:Y,onPaneContextMenu:J,onPanZoomEnd:f,onDraggingChange:p});h.on("end",fe);const _e=G2({zoomActivationKeyPressed:O,panOnDrag:U,zoomOnScroll:M,panOnScroll:Y,zoomOnDoubleClick:j,zoomOnPinch:G,userSelectionActive:T,noPanClassName:A,noWheelClassName:I,lib:W,connectionInProgress:re});h.filter(_e),j?v.on("dblclick.zoom",x):v.on("dblclick.zoom",null)}function _(){h.on("zoom",null)}async function b(I,A,J){const T=Nu(I),Y=h==null?void 0:h.constrain()(T,A,J);return Y&&await C(Y),Y}async function S(I,A){const J=Nu(I);return await C(J,A),J}function N(I){if(v){const A=Nu(I),J=v.property("__zoom");(J.k!==I.zoom||J.x!==I.x||J.y!==I.y)&&(h==null||h.transform(v,A,null,{sync:!0}))}}function z(){const I=v?v0(v.node()):{x:0,y:0,k:1};return{x:I.x,y:I.y,zoom:I.k}}async function L(I,A){return v?new Promise(J=>{h==null||h.interpolate((A==null?void 0:A.interpolate)==="linear"?ro:Ql).scaleTo(bu(v,A==null?void 0:A.duration,A==null?void 0:A.ease,()=>J(!0)),I)}):!1}async function F(I,A){return v?new Promise(J=>{h==null||h.interpolate((A==null?void 0:A.interpolate)==="linear"?ro:Ql).scaleBy(bu(v,A==null?void 0:A.duration,A==null?void 0:A.ease,()=>J(!0)),I)}):!1}function P(I){h==null||h.scaleExtent(I)}function R(I){h==null||h.translateExtent(I)}function $(I){const A=!Un(I)||I<0?0:I;h==null||h.clickDistance(A)}return{update:E,destroy:_,setViewport:S,setViewportConstrained:b,getViewport:z,scaleTo:L,scaleBy:F,setScaleExtent:P,setTranslateExtent:R,syncViewport:N,setClickDistance:$}}var li;(function(n){n.Line="line",n.Handle="handle"})(li||(li={}));function K2({width:n,prevWidth:r,height:o,prevHeight:s,affectsX:l,affectsY:c}){const u=n-r,f=o-s,p=[u>0?1:u<0?-1:0,f>0?1:f<0?-1:0];return u&&l&&(p[0]=p[0]*-1),f&&c&&(p[1]=p[1]*-1),p}function mp(n){const r=n.includes("right")||n.includes("left"),o=n.includes("bottom")||n.includes("top"),s=n.includes("left"),l=n.includes("top");return{isHorizontal:r,isVertical:o,affectsX:s,affectsY:l}}function Vt(n,r){return Math.max(0,r-n)}function Bt(n,r){return Math.max(0,n-r)}function ql(n,r,o){return Math.max(0,r-n,n-o)}function gp(n,r){return n?!r:r}function Z2(n,r,o,s,l,c,u,f){let{affectsX:p,affectsY:g}=r;const{isHorizontal:m,isVertical:h}=r,v=m&&h,{xSnapped:w,ySnapped:x}=o,{minWidth:C,maxWidth:E,minHeight:_,maxHeight:b}=s,{x:S,y:N,width:z,height:L,aspectRatio:F}=n;let P=Math.floor(m?w-n.pointerX:0),R=Math.floor(h?x-n.pointerY:0);const $=z+(p?-P:P),I=L+(g?-R:R),A=-c[0]*z,J=-c[1]*L;let T=ql($,C,E),Y=ql(I,_,b);if(u){let B=0,V=0;p&&P<0?B=Vt(S+P+A,u[0][0]):!p&&P>0&&(B=Bt(S+$+A,u[1][0])),g&&R<0?V=Vt(N+R+J,u[0][1]):!g&&R>0&&(V=Bt(N+I+J,u[1][1])),T=Math.max(T,B),Y=Math.max(Y,V)}if(f){let B=0,V=0;p&&P>0?B=Bt(S+P,f[0][0]):!p&&P<0&&(B=Vt(S+$,f[1][0])),g&&R>0?V=Bt(N+R,f[0][1]):!g&&R<0&&(V=Vt(N+I,f[1][1])),T=Math.max(T,B),Y=Math.max(Y,V)}if(l){if(m){const B=ql($/F,_,b)*F;if(T=Math.max(T,B),u){let V=0;!p&&!g||p&&!g&&v?V=Bt(N+J+$/F,u[1][1])*F:V=Vt(N+J+(p?P:-P)/F,u[0][1])*F,T=Math.max(T,V)}if(f){let V=0;!p&&!g||p&&!g&&v?V=Vt(N+$/F,f[1][1])*F:V=Bt(N+(p?P:-P)/F,f[0][1])*F,T=Math.max(T,V)}}if(h){const B=ql(I*F,C,E)/F;if(Y=Math.max(Y,B),u){let V=0;!p&&!g||g&&!p&&v?V=Bt(S+I*F+A,u[1][0])/F:V=Vt(S+(g?R:-R)*F+A,u[0][0])/F,Y=Math.max(Y,V)}if(f){let V=0;!p&&!g||g&&!p&&v?V=Vt(S+I*F,f[1][0])/F:V=Bt(S+(g?R:-R)*F,f[0][0])/F,Y=Math.max(Y,V)}}}R=R+(R<0?Y:-Y),P=P+(P<0?T:-T),l&&(v?$>I*F?R=(gp(p,g)?-P:P)/F:P=(gp(p,g)?-R:R)*F:m?(R=P/F,g=p):(P=R*F,p=g));const U=p?S+P:S,X=g?N+R:N;return{width:z+(p?-P:P),height:L+(g?-R:R),x:c[0]*P*(p?-1:1)+U,y:c[1]*R*(g?-1:1)+X}}const X0={width:0,height:0,x:0,y:0},J2={...X0,pointerX:0,pointerY:0,aspectRatio:1};function eE(n,r,o){const s=r.position.x+n.position.x,l=r.position.y+n.position.y,c=n.measured.width??0,u=n.measured.height??0,f=o[0]*c,p=o[1]*u;return[[s-f,l-p],[s+c-f,l+u-p]]}function nE({domNode:n,nodeId:r,getStoreItems:o,onChange:s,onEnd:l}){const c=bn(n);let u={controlDirection:mp("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function f({controlPosition:g,boundaries:m,keepAspectRatio:h,resizeDirection:v,onResizeStart:w,onResize:x,onResizeEnd:C,shouldResize:E}){let _={...X0},b={...J2};u={boundaries:m,resizeDirection:v,keepAspectRatio:h,controlDirection:mp(g)};let S,N=null,z=[],L,F,P,R=!1;const $=i0().on("start",I=>{const{nodeLookup:A,transform:J,snapGrid:T,snapToGrid:Y,nodeOrigin:U,paneDomNode:X}=o();if(S=A.get(r),!S)return;N=(X==null?void 0:X.getBoundingClientRect())??null;const{xSnapped:B,ySnapped:V}=io(I.sourceEvent,{transform:J,snapGrid:T,snapToGrid:Y,containerBounds:N});_={width:S.measured.width??0,height:S.measured.height??0,x:S.position.x??0,y:S.position.y??0},b={..._,pointerX:B,pointerY:V,aspectRatio:_.width/_.height},L=void 0,F=vr(S.extent)?S.extent:void 0,S.parentId&&(S.extent==="parent"||S.expandParent)&&(L=A.get(S.parentId)),L&&S.extent==="parent"&&(F=[[0,0],[L.measured.width,L.measured.height]]),z=[],P=void 0;for(const[G,M]of A)if(M.parentId===r&&(z.push({id:G,position:{...M.position},extent:M.extent}),M.extent==="parent"||M.expandParent)){const j=eE(M,S,M.origin??U);P?P=[[Math.min(j[0][0],P[0][0]),Math.min(j[0][1],P[0][1])],[Math.max(j[1][0],P[1][0]),Math.max(j[1][1],P[1][1])]]:P=j}w==null||w(I,{..._})}).on("drag",I=>{const{transform:A,snapGrid:J,snapToGrid:T,nodeOrigin:Y}=o(),U=io(I.sourceEvent,{transform:A,snapGrid:J,snapToGrid:T,containerBounds:N}),X=[];if(!S)return;const{x:B,y:V,width:G,height:M}=_,j={},O=S.origin??Y,{width:W,height:Q,x:re,y:le}=Z2(b,u.controlDirection,U,u.boundaries,u.keepAspectRatio,O,F,P),K=W!==G,oe=Q!==M,de=re!==B&&K,we=le!==V&&oe;if(!de&&!we&&!K&&!oe)return;if((de||we||O[0]===1||O[1]===1)&&(j.x=de?re:_.x,j.y=we?le:_.y,_.x=j.x,_.y=j.y,z.length>0)){const Ne=re-B,be=le-V;for(const Re of z)Re.position={x:Re.position.x-Ne+O[0]*(W-G),y:Re.position.y-be+O[1]*(Q-M)},X.push(Re)}if((K||oe)&&(j.width=K&&(!u.resizeDirection||u.resizeDirection==="horizontal")?W:_.width,j.height=oe&&(!u.resizeDirection||u.resizeDirection==="vertical")?Q:_.height,_.width=j.width,_.height=j.height),L&&S.expandParent){const Ne=O[0]*(j.width??0);j.x&&j.x<Ne&&(_.x=Ne,b.x=b.x-(j.x-Ne));const be=O[1]*(j.height??0);j.y&&j.y<be&&(_.y=be,b.y=b.y-(j.y-be))}const he=K2({width:_.width,prevWidth:G,height:_.height,prevHeight:M,affectsX:u.controlDirection.affectsX,affectsY:u.controlDirection.affectsY}),fe={..._,direction:he};(E==null?void 0:E(I,fe))!==!1&&(R=!0,x==null||x(I,fe),s(j,X))}).on("end",I=>{R&&(C==null||C(I,{..._}),l==null||l({..._}),R=!1)});c.call($)}function p(){c.on(".drag",null)}return{update:f,destroy:p}}var Pu={exports:{}},Mu={},Tu={exports:{}},Lu={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function tE(){if(yp)return Lu;yp=1;var n=mo();function r(h,v){return h===v&&(h!==0||1/h===1/v)||h!==h&&v!==v}var o=typeof Object.is=="function"?Object.is:r,s=n.useState,l=n.useEffect,c=n.useLayoutEffect,u=n.useDebugValue;function f(h,v){var w=v(),x=s({inst:{value:w,getSnapshot:v}}),C=x[0].inst,E=x[1];return c(function(){C.value=w,C.getSnapshot=v,p(C)&&E({inst:C})},[h,w,v]),l(function(){return p(C)&&E({inst:C}),h(function(){p(C)&&E({inst:C})})},[h]),u(w),w}function p(h){var v=h.getSnapshot;h=h.value;try{var w=v();return!o(h,w)}catch{return!0}}function g(h,v){return v()}var m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g:f;return Lu.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:m,Lu}var vp;function rE(){return vp||(vp=1,Tu.exports=tE()),Tu.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function iE(){if(wp)return Mu;wp=1;var n=mo(),r=rE();function o(g,m){return g===m&&(g!==0||1/g===1/m)||g!==g&&m!==m}var s=typeof Object.is=="function"?Object.is:o,l=r.useSyncExternalStore,c=n.useRef,u=n.useEffect,f=n.useMemo,p=n.useDebugValue;return Mu.useSyncExternalStoreWithSelector=function(g,m,h,v,w){var x=c(null);if(x.current===null){var C={hasValue:!1,value:null};x.current=C}else C=x.current;x=f(function(){function _(L){if(!b){if(b=!0,S=L,L=v(L),w!==void 0&&C.hasValue){var F=C.value;if(w(F,L))return N=F}return N=L}if(F=N,s(S,L))return F;var P=v(L);return w!==void 0&&w(F,P)?(S=L,F):(S=L,N=P)}var b=!1,S,N,z=h===void 0?null:h;return[function(){return _(m())},z===null?void 0:function(){return _(z())}]},[m,h,v,w]);var E=l(g,x[0],x[1]);return u(function(){C.hasValue=!0,C.value=E},[E]),p(E),E},Mu}var xp;function oE(){return xp||(xp=1,Pu.exports=iE()),Pu.exports}var lE=oE();const sE=$c(lE),aE={},Ep=n=>{let r;const o=new Set,s=(m,h)=>{const v=typeof m=="function"?m(r):m;if(!Object.is(v,r)){const w=r;r=h??(typeof v!="object"||v===null)?v:Object.assign({},r,v),o.forEach(x=>x(r,w))}},l=()=>r,p={setState:s,getState:l,getInitialState:()=>g,subscribe:m=>(o.add(m),()=>o.delete(m)),destroy:()=>{(aE?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},g=r=n(s,l,p);return p},uE=n=>n?Ep(n):Ep,{useDebugValue:cE}=x1,{useSyncExternalStoreWithSelector:fE}=sE,dE=n=>n;function G0(n,r=dE,o){const s=fE(n.subscribe,n.getState,n.getServerState||n.getInitialState,r,o);return cE(s),s}const Sp=(n,r)=>{const o=uE(n),s=(l,c=r)=>G0(o,l,c);return Object.assign(s,o),s},hE=(n,r)=>n?Sp(n,r):Sp;function Oe(n,r){if(Object.is(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;if(n instanceof Map&&r instanceof Map){if(n.size!==r.size)return!1;for(const[s,l]of n)if(!Object.is(l,r.get(s)))return!1;return!0}if(n instanceof Set&&r instanceof Set){if(n.size!==r.size)return!1;for(const s of n)if(!r.has(s))return!1;return!0}const o=Object.keys(n);if(o.length!==Object.keys(r).length)return!1;for(const s of o)if(!Object.prototype.hasOwnProperty.call(r,s)||!Object.is(n[s],r[s]))return!1;return!0}Bm();const ws=ie.createContext(null),pE=ws.Provider,Q0=Yn.error001("react");function Pe(n,r){const o=ie.useContext(ws);if(o===null)throw new Error(Q0);return G0(o,n,r)}function Fe(){const n=ie.useContext(ws);if(n===null)throw new Error(Q0);return ie.useMemo(()=>({getState:n.getState,setState:n.setState,subscribe:n.subscribe}),[n])}const _p={display:"none"},mE={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},K0="react-flow__node-desc",Z0="react-flow__edge-desc",gE="react-flow__aria-live",yE=n=>n.ariaLiveMessage,vE=n=>n.ariaLabelConfig;function wE({rfId:n}){const r=Pe(yE);return Z.jsx("div",{id:`${gE}-${n}`,"aria-live":"assertive","aria-atomic":"true",style:mE,children:r})}function xE({rfId:n,disableKeyboardA11y:r}){const o=Pe(vE);return Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{id:`${K0}-${n}`,style:_p,children:r?o["node.a11yDescription.default"]:o["node.a11yDescription.keyboardDisabled"]}),Z.jsx("div",{id:`${Z0}-${n}`,style:_p,children:o["edge.a11yDescription.default"]}),!r&&Z.jsx(wE,{rfId:n})]})}const xs=ie.forwardRef(({position:n="top-left",children:r,className:o,style:s,...l},c)=>{const u=`${n}`.split("-");return Z.jsx("div",{className:Ye(["react-flow__panel",o,...u]),style:s,ref:c,...l,children:r})});xs.displayName="Panel";function EE({proOptions:n,position:r="bottom-right"}){return n!=null&&n.hideAttribution?null:Z.jsx(xs,{position:r,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",children:Z.jsx("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}const SE=n=>{const r=[],o=[];for(const[,s]of n.nodeLookup)s.selected&&r.push(s.internals.userNode);for(const[,s]of n.edgeLookup)s.selected&&o.push(s);return{selectedNodes:r,selectedEdges:o}},Yl=n=>n.id;function _E(n,r){return Oe(n.selectedNodes.map(Yl),r.selectedNodes.map(Yl))&&Oe(n.selectedEdges.map(Yl),r.selectedEdges.map(Yl))}function kE({onSelectionChange:n}){const r=Fe(),{selectedNodes:o,selectedEdges:s}=Pe(SE,_E);return ie.useEffect(()=>{const l={nodes:o,edges:s};n==null||n(l),r.getState().onSelectionChangeHandlers.forEach(c=>c(l))},[o,s,n]),null}const CE=n=>!!n.onSelectionChangeHandlers;function NE({onSelectionChange:n}){const r=Pe(CE);return n||r?Z.jsx(kE,{onSelectionChange:n}):null}const J0=[0,0],bE={x:0,y:0,zoom:1},PE=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],kp=[...PE,"rfId"],ME=n=>({setNodes:n.setNodes,setEdges:n.setEdges,setMinZoom:n.setMinZoom,setMaxZoom:n.setMaxZoom,setTranslateExtent:n.setTranslateExtent,setNodeExtent:n.setNodeExtent,reset:n.reset,setDefaultNodesAndEdges:n.setDefaultNodesAndEdges}),Cp={translateExtent:uo,nodeOrigin:J0,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function TE(n){const{setNodes:r,setEdges:o,setMinZoom:s,setMaxZoom:l,setTranslateExtent:c,setNodeExtent:u,reset:f,setDefaultNodesAndEdges:p}=Pe(ME,Oe),g=Fe();ie.useEffect(()=>(p(n.defaultNodes,n.defaultEdges),()=>{m.current=Cp,f()}),[]);const m=ie.useRef(Cp);return ie.useEffect(()=>{for(const h of kp){const v=n[h],w=m.current[h];v!==w&&(typeof n[h]>"u"||(h==="nodes"?r(v):h==="edges"?o(v):h==="minZoom"?s(v):h==="maxZoom"?l(v):h==="translateExtent"?c(v):h==="nodeExtent"?u(v):h==="ariaLabelConfig"?g.setState({ariaLabelConfig:p2(v)}):h==="fitView"?g.setState({fitViewQueued:v}):h==="fitViewOptions"?g.setState({fitViewOptions:v}):g.setState({[h]:v})))}m.current=n},kp.map(h=>n[h])),null}function Np(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function LE(n){var s;const[r,o]=ie.useState(n==="system"?null:n);return ie.useEffect(()=>{if(n!=="system"){o(n);return}const l=Np(),c=()=>o(l!=null&&l.matches?"dark":"light");return c(),l==null||l.addEventListener("change",c),()=>{l==null||l.removeEventListener("change",c)}},[n]),r!==null?r:(s=Np())!=null&&s.matches?"dark":"light"}const bp=typeof document<"u"?document:null;function po(n=null,r={target:bp,actInsideInputWithModifier:!0}){const[o,s]=ie.useState(!1),l=ie.useRef(!1),c=ie.useRef(new Set([])),[u,f]=ie.useMemo(()=>{if(n!==null){const g=(Array.isArray(n)?n:[n]).filter(h=>typeof h=="string").map(h=>h.replace("+",`
`).replace(`

`,`
+`).split(`
`)),m=g.reduce((h,v)=>h.concat(...v),[]);return[g,m]}return[[],[]]},[n]);return ie.useEffect(()=>{const p=(r==null?void 0:r.target)??bp,g=(r==null?void 0:r.actInsideInputWithModifier)??!0;if(n!==null){const m=w=>{var E,_;if(l.current=w.ctrlKey||w.metaKey||w.shiftKey||w.altKey,(!l.current||l.current&&!g)&&I0(w))return!1;const C=Mp(w.code,f);if(c.current.add(w[C]),Pp(u,c.current,!1)){const b=((_=(E=w.composedPath)==null?void 0:E.call(w))==null?void 0:_[0])||w.target,S=(b==null?void 0:b.nodeName)==="BUTTON"||(b==null?void 0:b.nodeName)==="A";r.preventDefault!==!1&&(l.current||!S)&&w.preventDefault(),s(!0)}},h=w=>{const x=Mp(w.code,f);Pp(u,c.current,!0)?(s(!1),c.current.clear()):c.current.delete(w[x]),w.key==="Meta"&&c.current.clear(),l.current=!1},v=()=>{c.current.clear(),s(!1)};return p==null||p.addEventListener("keydown",m),p==null||p.addEventListener("keyup",h),window.addEventListener("blur",v),window.addEventListener("contextmenu",v),()=>{p==null||p.removeEventListener("keydown",m),p==null||p.removeEventListener("keyup",h),window.removeEventListener("blur",v),window.removeEventListener("contextmenu",v)}}},[n,s]),o}function Pp(n,r,o){return n.filter(s=>o||s.length===r.size).some(s=>s.every(l=>r.has(l)))}function Mp(n,r){return r.includes(n)?"code":"key"}const IE=()=>{const n=Fe();return ie.useMemo(()=>({zoomIn:async r=>{const{panZoom:o}=n.getState();return o?o.scaleBy(1.2,r):!1},zoomOut:async r=>{const{panZoom:o}=n.getState();return o?o.scaleBy(1/1.2,r):!1},zoomTo:async(r,o)=>{const{panZoom:s}=n.getState();return s?s.scaleTo(r,o):!1},getZoom:()=>n.getState().transform[2],setViewport:async(r,o)=>{const{transform:[s,l,c],panZoom:u}=n.getState();return u?(await u.setViewport({x:r.x??s,y:r.y??l,zoom:r.zoom??c},o),!0):!1},getViewport:()=>{const[r,o,s]=n.getState().transform;return{x:r,y:o,zoom:s}},setCenter:async(r,o,s)=>n.getState().setCenter(r,o,s),fitBounds:async(r,o)=>{const{width:s,height:l,minZoom:c,maxZoom:u,panZoom:f}=n.getState(),p=Zc(r,s,l,c,u,(o==null?void 0:o.padding)??.1);return f?(await f.setViewport(p,{duration:o==null?void 0:o.duration,ease:o==null?void 0:o.ease,interpolate:o==null?void 0:o.interpolate}),!0):!1},screenToFlowPosition:(r,o={})=>{const{transform:s,snapGrid:l,snapToGrid:c,domNode:u}=n.getState();if(!u)return r;const{x:f,y:p}=u.getBoundingClientRect(),g={x:r.x-f,y:r.y-p},m=o.snapGrid??l,h=o.snapToGrid??c;return ai(g,s,h,m)},flowToScreenPosition:r=>{const{transform:o,domNode:s}=n.getState();if(!s)return r;const{x:l,y:c}=s.getBoundingClientRect(),u=oi(r,o);return{x:u.x+l,y:u.y+c}}}),[])};function eg(n,r){const o=[],s=new Map,l=[];for(const c of n)if(c.type==="add"){l.push(c);continue}else if(c.type==="remove"||c.type==="replace")s.set(c.id,[c]);else{const u=s.get(c.id);u?u.push(c):s.set(c.id,[c])}for(const c of r){const u=s.get(c.id);if(!u){o.push(c);continue}if(u[0].type==="remove")continue;if(u[0].type==="replace"){o.push({...u[0].item});continue}const f={...c};for(const p of u)RE(p,f);o.push(f)}return l.length&&l.forEach(c=>{c.index!==void 0?o.splice(c.index,0,{...c.item}):o.push({...c.item})}),o}function RE(n,r){switch(n.type){case"select":{r.selected=n.selected;break}case"position":{typeof n.position<"u"&&(r.position=n.position),typeof n.dragging<"u"&&(r.dragging=n.dragging);break}case"dimensions":{typeof n.dimensions<"u"&&(r.measured={...n.dimensions},n.setAttributes&&((n.setAttributes===!0||n.setAttributes==="width")&&(r.width=n.dimensions.width),(n.setAttributes===!0||n.setAttributes==="height")&&(r.height=n.dimensions.height))),typeof n.resizing=="boolean"&&(r.resizing=n.resizing);break}}}function zE(n,r){return eg(n,r)}function DE(n,r){return eg(n,r)}function fr(n,r){return{id:n,type:"select",selected:r}}function Kr(n,r=new Set,o=!1){const s=[];for(const[l,c]of n){const u=r.has(l);!(c.selected===void 0&&!u)&&c.selected!==u&&(o&&(c.selected=u),s.push(fr(c.id,u)))}return s}function Tp({items:n=[],lookup:r}){var l;const o=[],s=new Map(n.map(c=>[c.id,c]));for(const[c,u]of n.entries()){const f=r.get(u.id),p=((l=f==null?void 0:f.internals)==null?void 0:l.userNode)??f;p!==void 0&&p!==u&&o.push({id:u.id,item:u,type:"replace"}),p===void 0&&o.push({item:u,type:"add",index:c})}for(const[c]of r)s.get(c)===void 0&&o.push({id:c,type:"remove"});return o}function Lp(n){return{id:n.id,type:"remove"}}const AE=P0();function OE(n,r,o={}){return x2(n,r,{...o,onError:o.onError??AE})}const Ip=n=>o2(n),FE=n=>k0(n);function ng(n){return ie.forwardRef(n)}const jE=typeof window<"u"?ie.useLayoutEffect:ie.useEffect;function Rp(n){const[r,o]=ie.useState(BigInt(0)),[s]=ie.useState(()=>HE(()=>o(l=>l+BigInt(1))));return jE(()=>{const l=s.get();l.length&&(n(l),s.reset())},[r]),s}function HE(n){let r=[];return{get:()=>r,reset:()=>{r=[]},push:o=>{r.push(o),n()}}}const tg=ie.createContext(null);function $E({children:n}){const r=Fe(),o=ie.useCallback(f=>{const{nodes:p=[],setNodes:g,hasDefaultNodes:m,onNodesChange:h,nodeLookup:v,fitViewQueued:w,onNodesChangeMiddlewareMap:x}=r.getState();let C=p;for(const _ of f)C=typeof _=="function"?_(C):_;let E=Tp({items:C,lookup:v});for(const _ of x.values())E=_(E);m&&g(C),E.length>0?h==null||h(E):w&&window.requestAnimationFrame(()=>{const{fitViewQueued:_,nodes:b,setNodes:S}=r.getState();_&&S(b)})},[]),s=Rp(o),l=ie.useCallback(f=>{const{edges:p=[],setEdges:g,hasDefaultEdges:m,onEdgesChange:h,edgeLookup:v}=r.getState();let w=p;for(const x of f)w=typeof x=="function"?x(w):x;m?g(w):h&&h(Tp({items:w,lookup:v}))},[]),c=Rp(l),u=ie.useMemo(()=>({nodeQueue:s,edgeQueue:c}),[]);return Z.jsx(tg.Provider,{value:u,children:n})}function VE(){const n=ie.useContext(tg);if(!n)throw new Error("useBatchContext must be used within a BatchProvider");return n}const BE=n=>!!n.panZoom;function Es(){const n=IE(),r=Fe(),o=VE(),s=Pe(BE),l=ie.useMemo(()=>{const c=h=>r.getState().nodeLookup.get(h),u=h=>{o.nodeQueue.push(h)},f=h=>{o.edgeQueue.push(h)},p=h=>{var _,b;const{nodeLookup:v,nodeOrigin:w}=r.getState(),x=Ip(h)?h:v.get(h.id),C=x.parentId?T0(x.position,x.measured,x.parentId,v,w):x.position,E={...x,position:C,width:((_=x.measured)==null?void 0:_.width)??x.width,height:((b=x.measured)==null?void 0:b.height)??x.height};return ii(E)},g=(h,v,w={replace:!1})=>{u(x=>x.map(C=>{if(C.id===h){const E=typeof v=="function"?v(C):v;return w.replace&&Ip(E)?E:{...C,...E}}return C}))},m=(h,v,w={replace:!1})=>{f(x=>x.map(C=>{if(C.id===h){const E=typeof v=="function"?v(C):v;return w.replace&&FE(E)?E:{...C,...E}}return C}))};return{getNodes:()=>r.getState().nodes.map(h=>({...h})),getNode:h=>{var v;return(v=c(h))==null?void 0:v.internals.userNode},getInternalNode:c,getEdges:()=>{const{edges:h=[]}=r.getState();return h.map(v=>({...v}))},getEdge:h=>r.getState().edgeLookup.get(h),setNodes:u,setEdges:f,addNodes:h=>{const v=Array.isArray(h)?h:[h];o.nodeQueue.push(w=>[...w,...v])},addEdges:h=>{const v=Array.isArray(h)?h:[h];o.edgeQueue.push(w=>[...w,...v])},toObject:()=>{const{nodes:h=[],edges:v=[],transform:w}=r.getState(),[x,C,E]=w;return{nodes:h.map(_=>({..._})),edges:v.map(_=>({..._})),viewport:{x,y:C,zoom:E}}},deleteElements:async({nodes:h=[],edges:v=[]})=>{const{nodes:w,edges:x,onNodesDelete:C,onEdgesDelete:E,triggerNodeChanges:_,triggerEdgeChanges:b,onDelete:S,onBeforeDelete:N}=r.getState(),{nodes:z,edges:L}=await c2({nodesToRemove:h,edgesToRemove:v,nodes:w,edges:x,onBeforeDelete:N}),F=L.length>0,P=z.length>0;if(F){const R=L.map(Lp);E==null||E(L),b(R)}if(P){const R=z.map(Lp);C==null||C(z),_(R)}return(P||F)&&(S==null||S({nodes:z,edges:L})),{deletedNodes:z,deletedEdges:L}},getIntersectingNodes:(h,v=!0,w)=>{const x=ip(h),C=x?h:p(h),E=w!==void 0;return C?(w||r.getState().nodes).filter(_=>{const b=r.getState().nodeLookup.get(_.id);if(b&&!x&&(_.id===h.id||!b.internals.positionAbsolute))return!1;const S=ii(E?_:b),N=fo(S,C);return v&&N>0||N>=S.width*S.height||N>=C.width*C.height}):[]},isNodeIntersecting:(h,v,w=!0)=>{const C=ip(h)?h:p(h);if(!C)return!1;const E=fo(C,v);return w&&E>0||E>=v.width*v.height||E>=C.width*C.height},updateNode:g,updateNodeData:(h,v,w={replace:!1})=>{g(h,x=>{const C=typeof v=="function"?v(x):v;return w.replace?{...x,data:C}:{...x,data:{...x.data,...C}}},w)},updateEdge:m,updateEdgeData:(h,v,w={replace:!1})=>{m(h,x=>{const C=typeof v=="function"?v(x):v;return w.replace?{...x,data:C}:{...x,data:{...x.data,...C}}},w)},getNodesBounds:h=>{const{nodeLookup:v,nodeOrigin:w}=r.getState();return l2(h,{nodeLookup:v,nodeOrigin:w})},getHandleConnections:({type:h,id:v,nodeId:w})=>{var x;return Array.from(((x=r.getState().connectionLookup.get(`${w}-${h}${v?`-${v}`:""}`))==null?void 0:x.values())??[])},getNodeConnections:({type:h,handleId:v,nodeId:w})=>{var x;return Array.from(((x=r.getState().connectionLookup.get(`${w}${h?v?`-${h}-${v}`:`-${h}`:""}`))==null?void 0:x.values())??[])},fitView:async h=>{const v=r.getState().fitViewResolver??h2();return r.setState({fitViewQueued:!0,fitViewOptions:h,fitViewResolver:v}),o.nodeQueue.push(w=>[...w]),v.promise}}},[]);return ie.useMemo(()=>({...l,...n,viewportInitialized:s}),[s])}const zp=n=>n.selected,WE=typeof window<"u"?window:void 0;function UE({deleteKeyCode:n,multiSelectionKeyCode:r}){const o=Fe(),{deleteElements:s}=Es(),l=po(n,{actInsideInputWithModifier:!1}),c=po(r,{target:WE});ie.useEffect(()=>{if(l){const{edges:u,nodes:f}=o.getState();s({nodes:f.filter(zp),edges:u.filter(zp)}),o.setState({nodesSelectionActive:!1})}},[l]),ie.useEffect(()=>{o.setState({multiSelectionActive:c})},[c])}function qE(n){const r=Fe();ie.useEffect(()=>{const o=()=>{var l,c,u,f;if(!n.current||!(((c=(l=n.current).checkVisibility)==null?void 0:c.call(l))??!0))return!1;const s=Jc(n.current);(s.height===0||s.width===0)&&((f=(u=r.getState()).onError)==null||f.call(u,"004",Yn.error004())),r.setState({width:s.width||500,height:s.height||500})};if(n.current){o(),window.addEventListener("resize",o);const s=new ResizeObserver(()=>o());return s.observe(n.current),()=>{window.removeEventListener("resize",o),s&&n.current&&s.unobserve(n.current)}}},[])}const Ss={position:"absolute",width:"100%",height:"100%",top:0,left:0},YE=n=>({userSelectionActive:n.userSelectionActive,lib:n.lib,connectionInProgress:n.connection.inProgress});function XE({onPaneContextMenu:n,zoomOnScroll:r=!0,zoomOnPinch:o=!0,panOnScroll:s=!1,panOnScrollSpeed:l=.5,panOnScrollMode:c=pr.Free,zoomOnDoubleClick:u=!0,panOnDrag:f=!0,defaultViewport:p,translateExtent:g,minZoom:m,maxZoom:h,zoomActivationKeyCode:v,preventScrolling:w=!0,children:x,noWheelClassName:C,noPanClassName:E,onViewportChange:_,isControlledViewport:b,paneClickDistance:S,selectionOnDrag:N}){const z=Fe(),L=ie.useRef(null),{userSelectionActive:F,lib:P,connectionInProgress:R}=Pe(YE,Oe),$=po(v),I=ie.useRef();qE(L);const A=ie.useCallback(J=>{_==null||_({x:J[0],y:J[1],zoom:J[2]}),b||z.setState({transform:J})},[_,b]);return ie.useEffect(()=>{if(L.current){I.current=Q2({domNode:L.current,minZoom:m,maxZoom:h,translateExtent:g,viewport:p,onDraggingChange:U=>z.setState(X=>X.paneDragging===U?X:{paneDragging:U}),onPanZoomStart:(U,X)=>{const{onViewportChangeStart:B,onMoveStart:V}=z.getState();V==null||V(U,X),B==null||B(X)},onPanZoom:(U,X)=>{const{onViewportChange:B,onMove:V}=z.getState();V==null||V(U,X),B==null||B(X)},onPanZoomEnd:(U,X)=>{const{onViewportChangeEnd:B,onMoveEnd:V}=z.getState();V==null||V(U,X),B==null||B(X)}});const{x:J,y:T,zoom:Y}=I.current.getViewport();return z.setState({panZoom:I.current,transform:[J,T,Y],domNode:L.current.closest(".react-flow")}),()=>{var U;(U=I.current)==null||U.destroy()}}},[]),ie.useEffect(()=>{var J;(J=I.current)==null||J.update({onPaneContextMenu:n,zoomOnScroll:r,zoomOnPinch:o,panOnScroll:s,panOnScrollSpeed:l,panOnScrollMode:c,zoomOnDoubleClick:u,panOnDrag:f,zoomActivationKeyPressed:$,preventScrolling:w,noPanClassName:E,userSelectionActive:F,noWheelClassName:C,lib:P,onTransformChange:A,connectionInProgress:R,selectionOnDrag:N,paneClickDistance:S})},[n,r,o,s,l,c,u,f,$,w,E,F,C,P,A,R,N,S]),Z.jsx("div",{className:"react-flow__renderer",ref:L,style:Ss,children:x})}const GE=n=>({userSelectionActive:n.userSelectionActive,userSelectionRect:n.userSelectionRect});function QE(){const{userSelectionActive:n,userSelectionRect:r}=Pe(GE,Oe);return n&&r?Z.jsx("div",{className:"react-flow__selection react-flow__container",style:{width:r.width,height:r.height,transform:`translate(${r.x}px, ${r.y}px)`}}):null}const Iu=(n,r)=>o=>{o.target===r.current&&(n==null||n(o))},KE=n=>({userSelectionActive:n.userSelectionActive,elementsSelectable:n.elementsSelectable,connectionInProgress:n.connection.inProgress,dragging:n.paneDragging,panBy:n.panBy,autoPanSpeed:n.autoPanSpeed});function ZE({isSelecting:n,selectionKeyPressed:r,selectionMode:o=co.Full,panOnDrag:s,autoPanOnSelection:l,paneClickDistance:c,selectionOnDrag:u,onSelectionStart:f,onSelectionEnd:p,onPaneClick:g,onPaneContextMenu:m,onPaneScroll:h,onPaneMouseEnter:v,onPaneMouseMove:w,onPaneMouseLeave:x,children:C}){const E=ie.useRef(0),_=Fe(),{userSelectionActive:b,elementsSelectable:S,dragging:N,connectionInProgress:z,panBy:L,autoPanSpeed:F}=Pe(KE,Oe),P=S&&(n||b),R=ie.useRef(null),$=ie.useRef(),I=ie.useRef(new Set),A=ie.useRef(new Set),J=ie.useRef(!1),T=ie.useRef({x:0,y:0}),Y=ie.useRef(!1),U=K=>{if(J.current||z){J.current=!1;return}g==null||g(K),_.getState().resetSelectedElements(),_.setState({nodesSelectionActive:!1})},X=K=>{if(Array.isArray(s)&&(s!=null&&s.includes(2))){K.preventDefault();return}m==null||m(K)},B=h?K=>h(K):void 0,V=K=>{J.current&&(K.stopPropagation(),J.current=!1)},G=K=>{var Re,an;const{domNode:oe,transform:de}=_.getState();if($.current=oe==null?void 0:oe.getBoundingClientRect(),!$.current)return;const we=K.target===R.current;if(!we&&!!K.target.closest(".nokey")||!n||!(u&&we||r)||K.button!==0||!K.isPrimary)return;(an=(Re=K.target)==null?void 0:Re.setPointerCapture)==null||an.call(Re,K.pointerId),J.current=!1;const{x:_e,y:Ne}=qn(K.nativeEvent,$.current),be=ai({x:_e,y:Ne},de);_.setState({userSelectionRect:{width:0,height:0,startX:be.x,startY:be.y,x:_e,y:Ne}}),we||(K.stopPropagation(),K.preventDefault())};function M(K,oe){const{userSelectionRect:de}=_.getState();if(!de)return;const{transform:we,nodeLookup:he,edgeLookup:fe,connectionLookup:_e,triggerNodeChanges:Ne,triggerEdgeChanges:be,defaultEdgeOptions:Re}=_.getState(),an={x:de.startX,y:de.startY},{x:fn,y:nn}=oi(an,we),tn={startX:an.x,startY:an.y,x:K<fn?K:fn,y:oe<nn?oe:nn,width:Math.abs(K-fn),height:Math.abs(oe-nn)},lt=I.current,Qn=A.current;I.current=new Set(Qc(he,tn,we,o===co.Partial,!0).map(dn=>dn.id)),A.current=new Set;const Kn=(Re==null?void 0:Re.selectable)??!0;for(const dn of I.current){const Mn=_e.get(dn);if(Mn)for(const{edgeId:xn}of Mn.values()){const Tn=fe.get(xn);Tn&&(Tn.selectable??Kn)&&A.current.add(xn)}}if(!op(lt,I.current)){const dn=Kr(he,I.current,!0);Ne(dn)}if(!op(Qn,A.current)){const dn=Kr(fe,A.current);be(dn)}_.setState({userSelectionRect:tn,userSelectionActive:!0,nodesSelectionActive:!1})}function j(){if(!l||!$.current)return;const[K,oe]=Kc(T.current,$.current,F);L({x:K,y:oe}).then(de=>{if(!J.current||!de){E.current=requestAnimationFrame(j);return}const{x:we,y:he}=T.current;M(we,he),E.current=requestAnimationFrame(j)})}const O=()=>{cancelAnimationFrame(E.current),E.current=0,Y.current=!1};ie.useEffect(()=>()=>O(),[]);const W=K=>{const{userSelectionRect:oe,transform:de,resetSelectedElements:we}=_.getState();if(!$.current||!oe)return;const{x:he,y:fe}=qn(K.nativeEvent,$.current);T.current={x:he,y:fe};const _e=oi({x:oe.startX,y:oe.startY},de);if(!J.current){const Ne=r?0:c;if(Math.hypot(he-_e.x,fe-_e.y)<=Ne)return;we(),f==null||f(K)}J.current=!0,Y.current||(j(),Y.current=!0),M(he,fe)},Q=K=>{var oe,de;K.button===0&&((de=(oe=K.target)==null?void 0:oe.releasePointerCapture)==null||de.call(oe,K.pointerId),!b&&K.target===R.current&&_.getState().userSelectionRect&&(U==null||U(K)),_.setState({userSelectionActive:!1,userSelectionRect:null}),J.current&&(p==null||p(K),_.setState({nodesSelectionActive:I.current.size>0})),O())},re=K=>{var oe,de;(de=(oe=K.target)==null?void 0:oe.releasePointerCapture)==null||de.call(oe,K.pointerId),O()},le=s===!0||Array.isArray(s)&&s.includes(0);return Z.jsxs("div",{className:Ye(["react-flow__pane",{draggable:le,dragging:N,selection:n}]),onClick:P?void 0:Iu(U,R),onContextMenu:Iu(X,R),onWheel:Iu(B,R),onPointerEnter:P?void 0:v,onPointerMove:P?W:w,onPointerUp:P?Q:void 0,onPointerCancel:P?re:void 0,onPointerDownCapture:P?G:void 0,onClickCapture:P?V:void 0,onPointerLeave:x,ref:R,style:Ss,children:[C,Z.jsx(QE,{})]})}function Hc({id:n,store:r,unselect:o=!1,nodeRef:s}){const{addSelectedNodes:l,unselectNodesAndEdges:c,multiSelectionActive:u,nodeLookup:f,onError:p}=r.getState(),g=f.get(n);if(!g){p==null||p("012",Yn.error012(n));return}r.setState({nodesSelectionActive:!1}),g.selected?(o||g.selected&&u)&&(c({nodes:[g],edges:[]}),requestAnimationFrame(()=>{var m;return(m=s==null?void 0:s.current)==null?void 0:m.blur()})):l([n])}function rg({nodeRef:n,disabled:r=!1,noDragClassName:o,handleSelector:s,nodeId:l,isSelectable:c,nodeClickDistance:u}){const f=Fe(),[p,g]=ie.useState(!1),m=ie.useRef();return ie.useEffect(()=>{m.current=A2({getStoreItems:()=>f.getState(),onNodeMouseDown:h=>{Hc({id:h,store:f,nodeRef:n})},onDragStart:()=>{g(!0)},onDragStop:()=>{g(!1)}})},[]),ie.useEffect(()=>{if(!(r||!n.current||!m.current))return m.current.update({noDragClassName:o,handleSelector:s,domNode:n.current,isSelectable:c,nodeId:l,nodeClickDistance:u}),()=>{var h;(h=m.current)==null||h.destroy()}},[o,s,r,c,n,l,u]),p}const JE=n=>r=>r.selected&&(r.draggable||n&&typeof r.draggable>"u");function ig(){const n=Fe();return ie.useCallback(o=>{const{nodeExtent:s,snapToGrid:l,snapGrid:c,nodesDraggable:u,onError:f,updateNodePositions:p,nodeLookup:g,nodeOrigin:m}=n.getState(),h=new Map,v=JE(u),w=l?c[0]:5,x=l?c[1]:5,C=o.direction.x*w*o.factor,E=o.direction.y*x*o.factor;for(const[,_]of g){if(!v(_))continue;let b={x:_.internals.positionAbsolute.x+C,y:_.internals.positionAbsolute.y+E};l&&(b=xo(b,c));const{position:S,positionAbsolute:N}=C0({nodeId:_.id,nextPosition:b,nodeLookup:g,nodeExtent:s,nodeOrigin:m,onError:f});_.position=S,_.internals.positionAbsolute=N,h.set(_.id,_)}p(h)},[])}const lf=ie.createContext(null),eS=lf.Provider;lf.Consumer;const og=()=>ie.useContext(lf),nS=n=>({connectOnClick:n.connectOnClick,noPanClassName:n.noPanClassName,rfId:n.rfId}),tS=(n,r,o)=>s=>{const{connectionClickStartHandle:l,connectionMode:c,connection:u}=s,{fromHandle:f,toHandle:p,isValid:g}=u,m=(p==null?void 0:p.nodeId)===n&&(p==null?void 0:p.id)===r&&(p==null?void 0:p.type)===o;return{connectingFrom:(f==null?void 0:f.nodeId)===n&&(f==null?void 0:f.id)===r&&(f==null?void 0:f.type)===o,connectingTo:m,clickConnecting:(l==null?void 0:l.nodeId)===n&&(l==null?void 0:l.id)===r&&(l==null?void 0:l.type)===o,isPossibleEndHandle:c===ti.Strict?(f==null?void 0:f.type)!==o:n!==(f==null?void 0:f.nodeId)||r!==(f==null?void 0:f.id),connectionInProcess:!!f,clickConnectionInProcess:!!l,valid:m&&g}};function rS({type:n="source",position:r=xe.Top,isValidConnection:o,isConnectable:s=!0,isConnectableStart:l=!0,isConnectableEnd:c=!0,id:u,onConnect:f,children:p,className:g,onMouseDown:m,onTouchStart:h,...v},w){var Y,U;const x=u||null,C=n==="target",E=Fe(),_=og(),{connectOnClick:b,noPanClassName:S,rfId:N}=Pe(nS,Oe),{connectingFrom:z,connectingTo:L,clickConnecting:F,isPossibleEndHandle:P,connectionInProcess:R,clickConnectionInProcess:$,valid:I}=Pe(tS(_,x,n),Oe);_||(U=(Y=E.getState()).onError)==null||U.call(Y,"010",Yn.error010());const A=X=>{const{defaultEdgeOptions:B,onConnect:V,hasDefaultEdges:G}=E.getState(),M={...B,...X};if(G){const{edges:j,setEdges:O,onError:W}=E.getState();O(OE(M,j,{onError:W}))}V==null||V(M),f==null||f(M)},J=X=>{if(!_)return;const B=R0(X.nativeEvent);if(l&&(B&&X.button===0||!B)){const V=E.getState();jc.onPointerDown(X.nativeEvent,{handleDomNode:X.currentTarget,autoPanOnConnect:V.autoPanOnConnect,connectionMode:V.connectionMode,connectionRadius:V.connectionRadius,domNode:V.domNode,nodeLookup:V.nodeLookup,lib:V.lib,isTarget:C,handleId:x,nodeId:_,flowId:V.rfId,panBy:V.panBy,cancelConnection:V.cancelConnection,onConnectStart:V.onConnectStart,onConnectEnd:(...G)=>{var M,j;return(j=(M=E.getState()).onConnectEnd)==null?void 0:j.call(M,...G)},updateConnection:V.updateConnection,onConnect:A,isValidConnection:o||((...G)=>{var M,j;return((j=(M=E.getState()).isValidConnection)==null?void 0:j.call(M,...G))??!0}),getTransform:()=>E.getState().transform,getFromHandle:()=>E.getState().connection.fromHandle,autoPanSpeed:V.autoPanSpeed,dragThreshold:V.connectionDragThreshold})}B?m==null||m(X):h==null||h(X)},T=X=>{const{onClickConnectStart:B,onClickConnectEnd:V,connectionClickStartHandle:G,connectionMode:M,isValidConnection:j,lib:O,rfId:W,nodeLookup:Q,connection:re}=E.getState();if(!_||!G&&!l)return;if(!G){B==null||B(X.nativeEvent,{nodeId:_,handleId:x,handleType:n}),E.setState({connectionClickStartHandle:{nodeId:_,type:n,id:x}});return}const le=L0(X.target),K=o||j,{connection:oe,isValid:de}=jc.isValid(X.nativeEvent,{handle:{nodeId:_,id:x,type:n},connectionMode:M,fromNodeId:G.nodeId,fromHandleId:G.id||null,fromType:G.type,isValidConnection:K,flowId:W,doc:le,lib:O,nodeLookup:Q});de&&oe&&A(oe);const we=structuredClone(re);delete we.inProgress,we.toPosition=we.toHandle?we.toHandle.position:null,V==null||V(X,we),E.setState({connectionClickStartHandle:null})};return Z.jsx("div",{"data-handleid":x,"data-nodeid":_,"data-handlepos":r,"data-id":`${N}-${_}-${x}-${n}`,className:Ye(["react-flow__handle",`react-flow__handle-${r}`,"nodrag",S,g,{source:!C,target:C,connectable:s,connectablestart:l,connectableend:c,clickconnecting:F,connectingfrom:z,connectingto:L,valid:I,connectionindicator:s&&(!R||P)&&(R||$?c:l)}]),onMouseDown:J,onTouchStart:J,onClick:b?T:void 0,ref:w,...v,children:p})}const si=ie.memo(ng(rS));function iS({data:n,isConnectable:r,sourcePosition:o=xe.Bottom}){return Z.jsxs(Z.Fragment,{children:[n==null?void 0:n.label,Z.jsx(si,{type:"source",position:o,isConnectable:r})]})}function oS({data:n,isConnectable:r,targetPosition:o=xe.Top,sourcePosition:s=xe.Bottom}){return Z.jsxs(Z.Fragment,{children:[Z.jsx(si,{type:"target",position:o,isConnectable:r}),n==null?void 0:n.label,Z.jsx(si,{type:"source",position:s,isConnectable:r})]})}function lS(){return null}function sS({data:n,isConnectable:r,targetPosition:o=xe.Top}){return Z.jsxs(Z.Fragment,{children:[Z.jsx(si,{type:"target",position:o,isConnectable:r}),n==null?void 0:n.label]})}const us={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Dp={input:iS,default:oS,output:sS,group:lS};function aS(n){var r,o,s,l;return n.internals.handleBounds===void 0?{width:n.width??n.initialWidth??((r=n.style)==null?void 0:r.width),height:n.height??n.initialHeight??((o=n.style)==null?void 0:o.height)}:{width:n.width??((s=n.style)==null?void 0:s.width),height:n.height??((l=n.style)==null?void 0:l.height)}}const uS=n=>{const{width:r,height:o,x:s,y:l}=wo(n.nodeLookup,{filter:c=>!!c.selected});return{width:Un(r)?r:null,height:Un(o)?o:null,userSelectionActive:n.userSelectionActive,transformString:`translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]}) translate(${s}px,${l}px)`}};function cS({onSelectionContextMenu:n,noPanClassName:r,disableKeyboardA11y:o}){const s=Fe(),{width:l,height:c,transformString:u,userSelectionActive:f}=Pe(uS,Oe),p=ig(),g=ie.useRef(null);ie.useEffect(()=>{var w;o||(w=g.current)==null||w.focus({preventScroll:!0})},[o]);const m=!f&&l!==null&&c!==null;if(rg({nodeRef:g,disabled:!m}),!m)return null;const h=n?w=>{const x=s.getState().nodes.filter(C=>C.selected);n(w,x)}:void 0,v=w=>{Object.prototype.hasOwnProperty.call(us,w.key)&&(w.preventDefault(),p({direction:us[w.key],factor:w.shiftKey?4:1}))};return Z.jsx("div",{className:Ye(["react-flow__nodesselection","react-flow__container",r]),style:{transform:u},children:Z.jsx("div",{ref:g,className:"react-flow__nodesselection-rect",onContextMenu:h,tabIndex:o?void 0:-1,onKeyDown:o?void 0:v,style:{width:l,height:c}})})}const Ap=typeof window<"u"?window:void 0,fS=n=>({nodesSelectionActive:n.nodesSelectionActive,userSelectionActive:n.userSelectionActive});function lg({children:n,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:s,onPaneMouseLeave:l,onPaneContextMenu:c,onPaneScroll:u,paneClickDistance:f,deleteKeyCode:p,selectionKeyCode:g,selectionOnDrag:m,selectionMode:h,onSelectionStart:v,onSelectionEnd:w,multiSelectionKeyCode:x,panActivationKeyCode:C,zoomActivationKeyCode:E,elementsSelectable:_,zoomOnScroll:b,zoomOnPinch:S,panOnScroll:N,panOnScrollSpeed:z,panOnScrollMode:L,zoomOnDoubleClick:F,panOnDrag:P,autoPanOnSelection:R,defaultViewport:$,translateExtent:I,minZoom:A,maxZoom:J,preventScrolling:T,onSelectionContextMenu:Y,noWheelClassName:U,noPanClassName:X,disableKeyboardA11y:B,onViewportChange:V,isControlledViewport:G}){const{nodesSelectionActive:M,userSelectionActive:j}=Pe(fS,Oe),O=po(g,{target:Ap}),W=po(C,{target:Ap}),Q=W||P,re=W||N,le=m&&Q!==!0,K=O||j||le;return UE({deleteKeyCode:p,multiSelectionKeyCode:x}),Z.jsx(XE,{onPaneContextMenu:c,elementsSelectable:_,zoomOnScroll:b,zoomOnPinch:S,panOnScroll:re,panOnScrollSpeed:z,panOnScrollMode:L,zoomOnDoubleClick:F,panOnDrag:!O&&Q,defaultViewport:$,translateExtent:I,minZoom:A,maxZoom:J,zoomActivationKeyCode:E,preventScrolling:T,noWheelClassName:U,noPanClassName:X,onViewportChange:V,isControlledViewport:G,paneClickDistance:f,selectionOnDrag:le,children:Z.jsxs(ZE,{onSelectionStart:v,onSelectionEnd:w,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:s,onPaneMouseLeave:l,onPaneContextMenu:c,onPaneScroll:u,panOnDrag:Q,autoPanOnSelection:R,isSelecting:!!K,selectionMode:h,selectionKeyPressed:O,paneClickDistance:f,selectionOnDrag:le,children:[n,M&&Z.jsx(cS,{onSelectionContextMenu:Y,noPanClassName:X,disableKeyboardA11y:B})]})})}lg.displayName="FlowRenderer";const dS=ie.memo(lg),hS=n=>r=>n?Qc(r.nodeLookup,{x:0,y:0,width:r.width,height:r.height},r.transform,!0).map(o=>o.id):Array.from(r.nodeLookup.keys());function pS(n){return Pe(ie.useCallback(hS(n),[n]),Oe)}const mS=n=>n.updateNodeInternals;function gS(){const n=Pe(mS),[r]=ie.useState(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(o=>{const s=new Map;o.forEach(l=>{const c=l.target.getAttribute("data-id");s.set(c,{id:c,nodeElement:l.target,force:!0})}),n(s)}));return ie.useEffect(()=>()=>{r==null||r.disconnect()},[r]),r}function yS({node:n,nodeType:r,hasDimensions:o,resizeObserver:s}){const l=Fe(),c=ie.useRef(null),u=ie.useRef(null),f=ie.useRef(n.sourcePosition),p=ie.useRef(n.targetPosition),g=ie.useRef(r),m=o&&!!n.internals.handleBounds;return ie.useEffect(()=>{c.current&&!n.hidden&&(!m||u.current!==c.current)&&(u.current&&(s==null||s.unobserve(u.current)),s==null||s.observe(c.current),u.current=c.current)},[m,n.hidden]),ie.useEffect(()=>()=>{u.current&&(s==null||s.unobserve(u.current),u.current=null)},[]),ie.useEffect(()=>{if(c.current){const h=g.current!==r,v=f.current!==n.sourcePosition,w=p.current!==n.targetPosition;(h||v||w)&&(g.current=r,f.current=n.sourcePosition,p.current=n.targetPosition,l.getState().updateNodeInternals(new Map([[n.id,{id:n.id,nodeElement:c.current,force:!0}]])))}},[n.id,r,n.sourcePosition,n.targetPosition]),c}function vS({id:n,onClick:r,onMouseEnter:o,onMouseMove:s,onMouseLeave:l,onContextMenu:c,onDoubleClick:u,nodesDraggable:f,elementsSelectable:p,nodesConnectable:g,nodesFocusable:m,resizeObserver:h,noDragClassName:v,noPanClassName:w,disableKeyboardA11y:x,rfId:C,nodeTypes:E,nodeClickDistance:_,onError:b}){const{node:S,internals:N,isParent:z}=Pe(K=>{const oe=K.nodeLookup.get(n),de=K.parentLookup.has(n);return{node:oe,internals:oe.internals,isParent:de}},Oe);let L=S.type||"default",F=(E==null?void 0:E[L])||Dp[L];F===void 0&&(b==null||b("003",Yn.error003(L)),L="default",F=(E==null?void 0:E.default)||Dp.default);const P=!!(S.draggable||f&&typeof S.draggable>"u"),R=!!(S.selectable||p&&typeof S.selectable>"u"),$=!!(S.connectable||g&&typeof S.connectable>"u"),I=!!(S.focusable||m&&typeof S.focusable>"u"),A=Fe(),J=M0(S),T=yS({node:S,nodeType:L,hasDimensions:J,resizeObserver:h}),Y=rg({nodeRef:T,disabled:S.hidden||!P,noDragClassName:v,handleSelector:S.dragHandle,nodeId:n,isSelectable:R,nodeClickDistance:_}),U=ig();if(S.hidden)return null;const X=xt(S),B=aS(S),V=R||P||r||o||s||l,G=o?K=>o(K,{...N.userNode}):void 0,M=s?K=>s(K,{...N.userNode}):void 0,j=l?K=>l(K,{...N.userNode}):void 0,O=c?K=>c(K,{...N.userNode}):void 0,W=u?K=>u(K,{...N.userNode}):void 0,Q=K=>{const{selectNodesOnDrag:oe,nodeDragThreshold:de}=A.getState();R&&(!oe||!P||de>0)&&Hc({id:n,store:A,nodeRef:T}),r&&r(K,{...N.userNode})},re=K=>{if(!(I0(K.nativeEvent)||x)){if(x0.includes(K.key)&&R){const oe=K.key==="Escape";Hc({id:n,store:A,unselect:oe,nodeRef:T})}else if(P&&S.selected&&Object.prototype.hasOwnProperty.call(us,K.key)){K.preventDefault();const{ariaLabelConfig:oe}=A.getState();A.setState({ariaLiveMessage:oe["node.a11yDescription.ariaLiveMessage"]({direction:K.key.replace("Arrow","").toLowerCase(),x:~~N.positionAbsolute.x,y:~~N.positionAbsolute.y})}),U({direction:us[K.key],factor:K.shiftKey?4:1})}}},le=()=>{var _e;if(x||!((_e=T.current)!=null&&_e.matches(":focus-visible")))return;const{transform:K,width:oe,height:de,autoPanOnNodeFocus:we,setCenter:he}=A.getState();if(!we)return;Qc(new Map([[n,S]]),{x:0,y:0,width:oe,height:de},K,!0).length>0||he(S.position.x+X.width/2,S.position.y+X.height/2,{zoom:K[2]})};return Z.jsx("div",{className:Ye(["react-flow__node",`react-flow__node-${L}`,{[w]:P},S.className,{selected:S.selected,selectable:R,parent:z,draggable:P,dragging:Y}]),ref:T,style:{zIndex:N.z,transform:`translate(${N.positionAbsolute.x}px,${N.positionAbsolute.y}px)`,pointerEvents:V?"all":"none",visibility:J?"visible":"hidden",...S.style,...B},"data-id":n,"data-testid":`rf__node-${n}`,onMouseEnter:G,onMouseMove:M,onMouseLeave:j,onContextMenu:O,onClick:Q,onDoubleClick:W,onKeyDown:I?re:void 0,tabIndex:I?0:void 0,onFocus:I?le:void 0,role:S.ariaRole??(I?"group":void 0),"aria-roledescription":"node","aria-describedby":x?void 0:`${K0}-${C}`,"aria-label":S.ariaLabel,...S.domAttributes,children:Z.jsx(eS,{value:n,children:Z.jsx(F,{id:n,data:S.data,type:L,positionAbsoluteX:N.positionAbsolute.x,positionAbsoluteY:N.positionAbsolute.y,selected:S.selected??!1,selectable:R,draggable:P,deletable:S.deletable??!0,isConnectable:$,sourcePosition:S.sourcePosition,targetPosition:S.targetPosition,dragging:Y,dragHandle:S.dragHandle,zIndex:N.z,parentId:S.parentId,...X})})})}var wS=ie.memo(vS);const xS=n=>({nodesDraggable:n.nodesDraggable,nodesConnectable:n.nodesConnectable,nodesFocusable:n.nodesFocusable,elementsSelectable:n.elementsSelectable,onError:n.onError});function sg(n){const{nodesDraggable:r,nodesConnectable:o,nodesFocusable:s,elementsSelectable:l,onError:c}=Pe(xS,Oe),u=pS(n.onlyRenderVisibleElements),f=gS();return Z.jsx("div",{className:"react-flow__nodes",style:Ss,children:u.map(p=>Z.jsx(wS,{id:p,nodeTypes:n.nodeTypes,nodeExtent:n.nodeExtent,onClick:n.onNodeClick,onMouseEnter:n.onNodeMouseEnter,onMouseMove:n.onNodeMouseMove,onMouseLeave:n.onNodeMouseLeave,onContextMenu:n.onNodeContextMenu,onDoubleClick:n.onNodeDoubleClick,noDragClassName:n.noDragClassName,noPanClassName:n.noPanClassName,rfId:n.rfId,disableKeyboardA11y:n.disableKeyboardA11y,resizeObserver:f,nodesDraggable:r,nodesConnectable:o,nodesFocusable:s,elementsSelectable:l,nodeClickDistance:n.nodeClickDistance,onError:c},p))})}sg.displayName="NodeRenderer";const ES=ie.memo(sg);function SS(n){return Pe(ie.useCallback(o=>{if(!n)return o.edges.map(l=>l.id);const s=[];if(o.width&&o.height)for(const l of o.edges){const c=o.nodeLookup.get(l.source),u=o.nodeLookup.get(l.target);c&&u&&y2({sourceNode:c,targetNode:u,width:o.width,height:o.height,transform:o.transform})&&s.push(l.id)}return s},[n]),Oe)}const _S=({color:n="none",strokeWidth:r=1})=>{const o={strokeWidth:r,...n&&{stroke:n}};return Z.jsx("polyline",{className:"arrow",style:o,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},kS=({color:n="none",strokeWidth:r=1})=>{const o={strokeWidth:r,...n&&{stroke:n,fill:n}};return Z.jsx("polyline",{className:"arrowclosed",style:o,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Op={[ss.Arrow]:_S,[ss.ArrowClosed]:kS};function CS(n){const r=Fe();return ie.useMemo(()=>{var l,c;return Object.prototype.hasOwnProperty.call(Op,n)?Op[n]:((c=(l=r.getState()).onError)==null||c.call(l,"009",Yn.error009(n)),null)},[n])}const NS=({id:n,type:r,color:o,width:s=12.5,height:l=12.5,markerUnits:c="strokeWidth",strokeWidth:u,orient:f="auto-start-reverse"})=>{const p=CS(r);return p?Z.jsx("marker",{className:"react-flow__arrowhead",id:n,markerWidth:`${s}`,markerHeight:`${l}`,viewBox:"-10 -10 20 20",markerUnits:c,orient:f,refX:"0",refY:"0",children:Z.jsx(p,{color:o,strokeWidth:u})}):null},ag=({defaultColor:n,rfId:r})=>{const o=Pe(c=>c.edges),s=Pe(c=>c.defaultEdgeOptions),l=ie.useMemo(()=>C2(o,{id:r,defaultColor:n,defaultMarkerStart:s==null?void 0:s.markerStart,defaultMarkerEnd:s==null?void 0:s.markerEnd}),[o,s,r,n]);return l.length?Z.jsx("svg",{className:"react-flow__marker","aria-hidden":"true",children:Z.jsx("defs",{children:l.map(c=>Z.jsx(NS,{id:c.id,type:c.type,color:c.color,width:c.width,height:c.height,markerUnits:c.markerUnits,strokeWidth:c.strokeWidth,orient:c.orient},c.id))})}):null};ag.displayName="MarkerDefinitions";var bS=ie.memo(ag);function ug({x:n,y:r,label:o,labelStyle:s,labelShowBg:l=!0,labelBgStyle:c,labelBgPadding:u=[2,4],labelBgBorderRadius:f=2,children:p,className:g,...m}){const[h,v]=ie.useState({x:1,y:0,width:0,height:0}),w=Ye(["react-flow__edge-textwrapper",g]),x=ie.useRef(null);return ie.useEffect(()=>{if(x.current){const C=x.current.getBBox();v({x:C.x,y:C.y,width:C.width,height:C.height})}},[o]),o?Z.jsxs("g",{transform:`translate(${n-h.width/2} ${r-h.height/2})`,className:w,visibility:h.width?"visible":"hidden",...m,children:[l&&Z.jsx("rect",{width:h.width+2*u[0],x:-u[0],y:-u[1],height:h.height+2*u[1],className:"react-flow__edge-textbg",style:c,rx:f,ry:f}),Z.jsx("text",{className:"react-flow__edge-text",y:h.height/2,dy:"0.3em",ref:x,style:s,children:o}),p]}):null}ug.displayName="EdgeText";const PS=ie.memo(ug);function _s({path:n,labelX:r,labelY:o,label:s,labelStyle:l,labelShowBg:c,labelBgStyle:u,labelBgPadding:f,labelBgBorderRadius:p,interactionWidth:g=20,...m}){return Z.jsxs(Z.Fragment,{children:[Z.jsx("path",{...m,d:n,fill:"none",className:Ye(["react-flow__edge-path",m.className])}),g?Z.jsx("path",{d:n,fill:"none",strokeOpacity:0,strokeWidth:g,className:"react-flow__edge-interaction"}):null,s&&Un(r)&&Un(o)?Z.jsx(PS,{x:r,y:o,label:s,labelStyle:l,labelShowBg:c,labelBgStyle:u,labelBgPadding:f,labelBgBorderRadius:p}):null]})}function Fp({pos:n,x1:r,y1:o,x2:s,y2:l}){return n===xe.Left||n===xe.Right?[.5*(r+s),o]:[r,.5*(o+l)]}function cg({sourceX:n,sourceY:r,sourcePosition:o=xe.Bottom,targetX:s,targetY:l,targetPosition:c=xe.Top}){const[u,f]=Fp({pos:o,x1:n,y1:r,x2:s,y2:l}),[p,g]=Fp({pos:c,x1:s,y1:l,x2:n,y2:r}),[m,h,v,w]=z0({sourceX:n,sourceY:r,targetX:s,targetY:l,sourceControlX:u,sourceControlY:f,targetControlX:p,targetControlY:g});return[`M${n},${r} C${u},${f} ${p},${g} ${s},${l}`,m,h,v,w]}function fg(n){return ie.memo(({id:r,sourceX:o,sourceY:s,targetX:l,targetY:c,sourcePosition:u,targetPosition:f,label:p,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:w,style:x,markerEnd:C,markerStart:E,interactionWidth:_})=>{const[b,S,N]=cg({sourceX:o,sourceY:s,sourcePosition:u,targetX:l,targetY:c,targetPosition:f}),z=n.isInternal?void 0:r;return Z.jsx(_s,{id:z,path:b,labelX:S,labelY:N,label:p,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:w,style:x,markerEnd:C,markerStart:E,interactionWidth:_})})}const MS=fg({isInternal:!1}),dg=fg({isInternal:!0});MS.displayName="SimpleBezierEdge";dg.displayName="SimpleBezierEdgeInternal";function hg(n){return ie.memo(({id:r,sourceX:o,sourceY:s,targetX:l,targetY:c,label:u,labelStyle:f,labelShowBg:p,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,sourcePosition:w=xe.Bottom,targetPosition:x=xe.Top,markerEnd:C,markerStart:E,pathOptions:_,interactionWidth:b})=>{const[S,N,z]=Ac({sourceX:o,sourceY:s,sourcePosition:w,targetX:l,targetY:c,targetPosition:x,borderRadius:_==null?void 0:_.borderRadius,offset:_==null?void 0:_.offset,stepPosition:_==null?void 0:_.stepPosition}),L=n.isInternal?void 0:r;return Z.jsx(_s,{id:L,path:S,labelX:N,labelY:z,label:u,labelStyle:f,labelShowBg:p,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:C,markerStart:E,interactionWidth:b})})}const pg=hg({isInternal:!1}),mg=hg({isInternal:!0});pg.displayName="SmoothStepEdge";mg.displayName="SmoothStepEdgeInternal";function gg(n){return ie.memo(({id:r,...o})=>{var l;const s=n.isInternal?void 0:r;return Z.jsx(pg,{...o,id:s,pathOptions:ie.useMemo(()=>{var c;return{borderRadius:0,offset:(c=o.pathOptions)==null?void 0:c.offset}},[(l=o.pathOptions)==null?void 0:l.offset])})})}const TS=gg({isInternal:!1}),yg=gg({isInternal:!0});TS.displayName="StepEdge";yg.displayName="StepEdgeInternal";function vg(n){return ie.memo(({id:r,sourceX:o,sourceY:s,targetX:l,targetY:c,label:u,labelStyle:f,labelShowBg:p,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:w,markerStart:x,interactionWidth:C})=>{const[E,_,b]=O0({sourceX:o,sourceY:s,targetX:l,targetY:c}),S=n.isInternal?void 0:r;return Z.jsx(_s,{id:S,path:E,labelX:_,labelY:b,label:u,labelStyle:f,labelShowBg:p,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:w,markerStart:x,interactionWidth:C})})}const LS=vg({isInternal:!1}),wg=vg({isInternal:!0});LS.displayName="StraightEdge";wg.displayName="StraightEdgeInternal";function xg(n){return ie.memo(({id:r,sourceX:o,sourceY:s,targetX:l,targetY:c,sourcePosition:u=xe.Bottom,targetPosition:f=xe.Top,label:p,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:w,style:x,markerEnd:C,markerStart:E,pathOptions:_,interactionWidth:b})=>{const[S,N,z]=D0({sourceX:o,sourceY:s,sourcePosition:u,targetX:l,targetY:c,targetPosition:f,curvature:_==null?void 0:_.curvature}),L=n.isInternal?void 0:r;return Z.jsx(_s,{id:L,path:S,labelX:N,labelY:z,label:p,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:w,style:x,markerEnd:C,markerStart:E,interactionWidth:b})})}const IS=xg({isInternal:!1}),Eg=xg({isInternal:!0});IS.displayName="BezierEdge";Eg.displayName="BezierEdgeInternal";const jp={default:Eg,straight:wg,step:yg,smoothstep:mg,simplebezier:dg},Hp={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null},RS=(n,r,o)=>o===xe.Left?n-r:o===xe.Right?n+r:n,zS=(n,r,o)=>o===xe.Top?n-r:o===xe.Bottom?n+r:n,$p="react-flow__edgeupdater";function Vp({position:n,centerX:r,centerY:o,radius:s=10,onMouseDown:l,onMouseEnter:c,onMouseOut:u,type:f}){return Z.jsx("circle",{onMouseDown:l,onMouseEnter:c,onMouseOut:u,className:Ye([$p,`${$p}-${f}`]),cx:RS(r,s,n),cy:zS(o,s,n),r:s,stroke:"transparent",fill:"transparent"})}function DS({isReconnectable:n,reconnectRadius:r,edge:o,sourceX:s,sourceY:l,targetX:c,targetY:u,sourcePosition:f,targetPosition:p,onReconnect:g,onReconnectStart:m,onReconnectEnd:h,setReconnecting:v,setUpdateHover:w}){const x=Fe(),C=(N,z)=>{if(N.button!==0)return;const{autoPanOnConnect:L,domNode:F,connectionMode:P,connectionRadius:R,lib:$,onConnectStart:I,cancelConnection:A,nodeLookup:J,rfId:T,panBy:Y,updateConnection:U}=x.getState(),X=z.type==="target",B=(M,j)=>{v(!1),h==null||h(M,o,z.type,j)},V=M=>g==null?void 0:g(o,M),G=(M,j)=>{v(!0),m==null||m(N,o,z.type),I==null||I(M,j)};jc.onPointerDown(N.nativeEvent,{autoPanOnConnect:L,connectionMode:P,connectionRadius:R,domNode:F,handleId:z.id,nodeId:z.nodeId,nodeLookup:J,isTarget:X,edgeUpdaterType:z.type,lib:$,flowId:T,cancelConnection:A,panBy:Y,isValidConnection:(...M)=>{var j,O;return((O=(j=x.getState()).isValidConnection)==null?void 0:O.call(j,...M))??!0},onConnect:V,onConnectStart:G,onConnectEnd:(...M)=>{var j,O;return(O=(j=x.getState()).onConnectEnd)==null?void 0:O.call(j,...M)},onReconnectEnd:B,updateConnection:U,getTransform:()=>x.getState().transform,getFromHandle:()=>x.getState().connection.fromHandle,dragThreshold:x.getState().connectionDragThreshold,handleDomNode:N.currentTarget})},E=N=>C(N,{nodeId:o.target,id:o.targetHandle??null,type:"target"}),_=N=>C(N,{nodeId:o.source,id:o.sourceHandle??null,type:"source"}),b=()=>w(!0),S=()=>w(!1);return Z.jsxs(Z.Fragment,{children:[(n===!0||n==="source")&&Z.jsx(Vp,{position:f,centerX:s,centerY:l,radius:r,onMouseDown:E,onMouseEnter:b,onMouseOut:S,type:"source"}),(n===!0||n==="target")&&Z.jsx(Vp,{position:p,centerX:c,centerY:u,radius:r,onMouseDown:_,onMouseEnter:b,onMouseOut:S,type:"target"})]})}function AS({id:n,edgesFocusable:r,edgesReconnectable:o,elementsSelectable:s,onClick:l,onDoubleClick:c,onContextMenu:u,onMouseEnter:f,onMouseMove:p,onMouseLeave:g,reconnectRadius:m,onReconnect:h,onReconnectStart:v,onReconnectEnd:w,rfId:x,edgeTypes:C,noPanClassName:E,onError:_,disableKeyboardA11y:b}){let S=Pe(he=>he.edgeLookup.get(n));const N=Pe(he=>he.defaultEdgeOptions);S=N?{...N,...S}:S;let z=S.type||"default",L=(C==null?void 0:C[z])||jp[z];L===void 0&&(_==null||_("011",Yn.error011(z)),z="default",L=(C==null?void 0:C.default)||jp.default);const F=!!(S.focusable||r&&typeof S.focusable>"u"),P=typeof h<"u"&&(S.reconnectable||o&&typeof S.reconnectable>"u"),R=!!(S.selectable||s&&typeof S.selectable>"u"),$=ie.useRef(null),[I,A]=ie.useState(!1),[J,T]=ie.useState(!1),Y=Fe(),{zIndex:U,sourceX:X,sourceY:B,targetX:V,targetY:G,sourcePosition:M,targetPosition:j}=Pe(ie.useCallback(he=>{const fe=he.nodeLookup.get(S.source),_e=he.nodeLookup.get(S.target);if(!fe||!_e)return{zIndex:S.zIndex,...Hp};const Ne=k2({id:n,sourceNode:fe,targetNode:_e,sourceHandle:S.sourceHandle||null,targetHandle:S.targetHandle||null,connectionMode:he.connectionMode,onError:_});return{zIndex:g2({selected:S.selected,zIndex:S.zIndex,sourceNode:fe,targetNode:_e,elevateOnSelect:he.elevateEdgesOnSelect,zIndexMode:he.zIndexMode}),...Ne||Hp}},[S.source,S.target,S.sourceHandle,S.targetHandle,S.selected,S.zIndex]),Oe),O=ie.useMemo(()=>S.markerStart?`url('#${Oc(S.markerStart,x)}')`:void 0,[S.markerStart,x]),W=ie.useMemo(()=>S.markerEnd?`url('#${Oc(S.markerEnd,x)}')`:void 0,[S.markerEnd,x]);if(S.hidden||X===null||B===null||V===null||G===null)return null;const Q=he=>{var be;const{addSelectedEdges:fe,unselectNodesAndEdges:_e,multiSelectionActive:Ne}=Y.getState();R&&(Y.setState({nodesSelectionActive:!1}),S.selected&&Ne?(_e({nodes:[],edges:[S]}),(be=$.current)==null||be.blur()):fe([n])),l&&l(he,S)},re=c?he=>{c(he,{...S})}:void 0,le=u?he=>{u(he,{...S})}:void 0,K=f?he=>{f(he,{...S})}:void 0,oe=p?he=>{p(he,{...S})}:void 0,de=g?he=>{g(he,{...S})}:void 0,we=he=>{var fe;if(!b&&x0.includes(he.key)&&R){const{unselectNodesAndEdges:_e,addSelectedEdges:Ne}=Y.getState();he.key==="Escape"?((fe=$.current)==null||fe.blur(),_e({edges:[S]})):Ne([n])}};return Z.jsx("svg",{style:{zIndex:U},children:Z.jsxs("g",{className:Ye(["react-flow__edge",`react-flow__edge-${z}`,S.className,E,{selected:S.selected,animated:S.animated,inactive:!R&&!l,updating:I,selectable:R}]),onClick:Q,onDoubleClick:re,onContextMenu:le,onMouseEnter:K,onMouseMove:oe,onMouseLeave:de,onKeyDown:F?we:void 0,tabIndex:F?0:void 0,role:S.ariaRole??(F?"group":"img"),"aria-roledescription":"edge","data-id":n,"data-testid":`rf__edge-${n}`,"aria-label":S.ariaLabel===null?void 0:S.ariaLabel||`Edge from ${S.source} to ${S.target}`,"aria-describedby":F?`${Z0}-${x}`:void 0,ref:$,...S.domAttributes,children:[!J&&Z.jsx(L,{id:n,source:S.source,target:S.target,type:S.type,selected:S.selected,animated:S.animated,selectable:R,deletable:S.deletable??!0,label:S.label,labelStyle:S.labelStyle,labelShowBg:S.labelShowBg,labelBgStyle:S.labelBgStyle,labelBgPadding:S.labelBgPadding,labelBgBorderRadius:S.labelBgBorderRadius,sourceX:X,sourceY:B,targetX:V,targetY:G,sourcePosition:M,targetPosition:j,data:S.data,style:S.style,sourceHandleId:S.sourceHandle,targetHandleId:S.targetHandle,markerStart:O,markerEnd:W,pathOptions:"pathOptions"in S?S.pathOptions:void 0,interactionWidth:S.interactionWidth}),P&&Z.jsx(DS,{edge:S,isReconnectable:P,reconnectRadius:m,onReconnect:h,onReconnectStart:v,onReconnectEnd:w,sourceX:X,sourceY:B,targetX:V,targetY:G,sourcePosition:M,targetPosition:j,setUpdateHover:A,setReconnecting:T})]})})}var OS=ie.memo(AS);const FS=n=>({edgesFocusable:n.edgesFocusable,edgesReconnectable:n.edgesReconnectable,elementsSelectable:n.elementsSelectable,connectionMode:n.connectionMode,onError:n.onError});function Sg({defaultMarkerColor:n,onlyRenderVisibleElements:r,rfId:o,edgeTypes:s,noPanClassName:l,onReconnect:c,onEdgeContextMenu:u,onEdgeMouseEnter:f,onEdgeMouseMove:p,onEdgeMouseLeave:g,onEdgeClick:m,reconnectRadius:h,onEdgeDoubleClick:v,onReconnectStart:w,onReconnectEnd:x,disableKeyboardA11y:C}){const{edgesFocusable:E,edgesReconnectable:_,elementsSelectable:b,onError:S}=Pe(FS,Oe),N=SS(r);return Z.jsxs("div",{className:"react-flow__edges",children:[Z.jsx(bS,{defaultColor:n,rfId:o}),N.map(z=>Z.jsx(OS,{id:z,edgesFocusable:E,edgesReconnectable:_,elementsSelectable:b,noPanClassName:l,onReconnect:c,onContextMenu:u,onMouseEnter:f,onMouseMove:p,onMouseLeave:g,onClick:m,reconnectRadius:h,onDoubleClick:v,onReconnectStart:w,onReconnectEnd:x,rfId:o,onError:S,edgeTypes:s,disableKeyboardA11y:C},z))]})}Sg.displayName="EdgeRenderer";const jS=ie.memo(Sg),HS=n=>`translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]})`;function $S({children:n}){const r=Pe(HS);return Z.jsx("div",{className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:r},children:n})}function VS(n){const r=Es(),o=ie.useRef(!1);ie.useEffect(()=>{!o.current&&r.viewportInitialized&&n&&(setTimeout(()=>n(r),1),o.current=!0)},[n,r.viewportInitialized])}const BS=n=>{var r;return(r=n.panZoom)==null?void 0:r.syncViewport};function WS(n){const r=Pe(BS),o=Fe();return ie.useEffect(()=>{n&&(r==null||r(n),o.setState({transform:[n.x,n.y,n.zoom]}))},[n,r]),null}function US(n){return n.connection.inProgress?{...n.connection,to:ai(n.connection.to,n.transform)}:{...n.connection}}function qS(n){return US}function YS(n){const r=qS();return Pe(r,Oe)}const XS=n=>({nodesConnectable:n.nodesConnectable,isValid:n.connection.isValid,inProgress:n.connection.inProgress,width:n.width,height:n.height});function GS({containerStyle:n,style:r,type:o,component:s}){const{nodesConnectable:l,width:c,height:u,isValid:f,inProgress:p}=Pe(XS,Oe);return!(c&&l&&p)?null:Z.jsx("svg",{style:n,width:c,height:u,className:"react-flow__connectionline react-flow__container",children:Z.jsx("g",{className:Ye(["react-flow__connection",_0(f)]),children:Z.jsx(_g,{style:r,type:o,CustomComponent:s,isValid:f})})})}const _g=({style:n,type:r=Wt.Bezier,CustomComponent:o,isValid:s})=>{const{inProgress:l,from:c,fromNode:u,fromHandle:f,fromPosition:p,to:g,toNode:m,toHandle:h,toPosition:v,pointer:w}=YS();if(!l)return;if(o)return Z.jsx(o,{connectionLineType:r,connectionLineStyle:n,fromNode:u,fromHandle:f,fromX:c.x,fromY:c.y,toX:g.x,toY:g.y,fromPosition:p,toPosition:v,connectionStatus:_0(s),toNode:m,toHandle:h,pointer:w});let x="";const C={sourceX:c.x,sourceY:c.y,sourcePosition:p,targetX:g.x,targetY:g.y,targetPosition:v};switch(r){case Wt.Bezier:[x]=D0(C);break;case Wt.SimpleBezier:[x]=cg(C);break;case Wt.Step:[x]=Ac({...C,borderRadius:0});break;case Wt.SmoothStep:[x]=Ac(C);break;default:[x]=O0(C)}return Z.jsx("path",{d:x,fill:"none",className:"react-flow__connection-path",style:n})};_g.displayName="ConnectionLine";const QS={};function Bp(n=QS){ie.useRef(n),Fe(),ie.useEffect(()=>{},[n])}function KS(){Fe(),ie.useRef(!1),ie.useEffect(()=>{},[])}function kg({nodeTypes:n,edgeTypes:r,onInit:o,onNodeClick:s,onEdgeClick:l,onNodeDoubleClick:c,onEdgeDoubleClick:u,onNodeMouseEnter:f,onNodeMouseMove:p,onNodeMouseLeave:g,onNodeContextMenu:m,onSelectionContextMenu:h,onSelectionStart:v,onSelectionEnd:w,connectionLineType:x,connectionLineStyle:C,connectionLineComponent:E,connectionLineContainerStyle:_,selectionKeyCode:b,selectionOnDrag:S,selectionMode:N,multiSelectionKeyCode:z,panActivationKeyCode:L,zoomActivationKeyCode:F,deleteKeyCode:P,onlyRenderVisibleElements:R,elementsSelectable:$,defaultViewport:I,translateExtent:A,minZoom:J,maxZoom:T,preventScrolling:Y,defaultMarkerColor:U,zoomOnScroll:X,zoomOnPinch:B,panOnScroll:V,panOnScrollSpeed:G,panOnScrollMode:M,zoomOnDoubleClick:j,panOnDrag:O,autoPanOnSelection:W,onPaneClick:Q,onPaneMouseEnter:re,onPaneMouseMove:le,onPaneMouseLeave:K,onPaneScroll:oe,onPaneContextMenu:de,paneClickDistance:we,nodeClickDistance:he,onEdgeContextMenu:fe,onEdgeMouseEnter:_e,onEdgeMouseMove:Ne,onEdgeMouseLeave:be,reconnectRadius:Re,onReconnect:an,onReconnectStart:fn,onReconnectEnd:nn,noDragClassName:tn,noWheelClassName:lt,noPanClassName:Qn,disableKeyboardA11y:Kn,nodeExtent:dn,rfId:Mn,viewport:xn,onViewportChange:Tn}){return Bp(n),Bp(r),KS(),VS(o),WS(xn),Z.jsx(dS,{onPaneClick:Q,onPaneMouseEnter:re,onPaneMouseMove:le,onPaneMouseLeave:K,onPaneContextMenu:de,onPaneScroll:oe,paneClickDistance:we,deleteKeyCode:P,selectionKeyCode:b,selectionOnDrag:S,selectionMode:N,onSelectionStart:v,onSelectionEnd:w,multiSelectionKeyCode:z,panActivationKeyCode:L,zoomActivationKeyCode:F,elementsSelectable:$,zoomOnScroll:X,zoomOnPinch:B,zoomOnDoubleClick:j,panOnScroll:V,panOnScrollSpeed:G,panOnScrollMode:M,panOnDrag:O,autoPanOnSelection:W,defaultViewport:I,translateExtent:A,minZoom:J,maxZoom:T,onSelectionContextMenu:h,preventScrolling:Y,noDragClassName:tn,noWheelClassName:lt,noPanClassName:Qn,disableKeyboardA11y:Kn,onViewportChange:Tn,isControlledViewport:!!xn,children:Z.jsxs($S,{children:[Z.jsx(jS,{edgeTypes:r,onEdgeClick:l,onEdgeDoubleClick:u,onReconnect:an,onReconnectStart:fn,onReconnectEnd:nn,onlyRenderVisibleElements:R,onEdgeContextMenu:fe,onEdgeMouseEnter:_e,onEdgeMouseMove:Ne,onEdgeMouseLeave:be,reconnectRadius:Re,defaultMarkerColor:U,noPanClassName:Qn,disableKeyboardA11y:Kn,rfId:Mn}),Z.jsx(GS,{style:C,type:x,component:E,containerStyle:_}),Z.jsx("div",{className:"react-flow__edgelabel-renderer"}),Z.jsx(ES,{nodeTypes:n,onNodeClick:s,onNodeDoubleClick:c,onNodeMouseEnter:f,onNodeMouseMove:p,onNodeMouseLeave:g,onNodeContextMenu:m,nodeClickDistance:he,onlyRenderVisibleElements:R,noPanClassName:Qn,noDragClassName:tn,disableKeyboardA11y:Kn,nodeExtent:dn,rfId:Mn}),Z.jsx("div",{className:"react-flow__viewport-portal"})]})})}kg.displayName="GraphView";const ZS=ie.memo(kg),JS=P0(),Wp=({nodes:n,edges:r,defaultNodes:o,defaultEdges:s,width:l,height:c,fitView:u,fitViewOptions:f,minZoom:p=.5,maxZoom:g=2,nodeOrigin:m,nodeExtent:h,zIndexMode:v="basic"}={})=>{const w=new Map,x=new Map,C=new Map,E=new Map,_=s??r??[],b=o??n??[],S=m??[0,0],N=h??uo;H0(C,E,_);const{nodesInitialized:z}=Fc(b,w,x,{nodeOrigin:S,nodeExtent:N,zIndexMode:v});let L=[0,0,1];if(u&&l&&c){const F=wo(w,{filter:I=>!!((I.width||I.initialWidth)&&(I.height||I.initialHeight))}),{x:P,y:R,zoom:$}=Zc(F,l,c,p,g,(f==null?void 0:f.padding)??.1);L=[P,R,$]}return{rfId:"1",width:l??0,height:c??0,transform:L,nodes:b,nodesInitialized:z,nodeLookup:w,parentLookup:x,edges:_,edgeLookup:E,connectionLookup:C,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:o!==void 0,hasDefaultEdges:s!==void 0,panZoom:null,minZoom:p,maxZoom:g,translateExtent:uo,nodeExtent:N,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:ti.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:S,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:u??!1,fitViewOptions:f,fitViewResolver:null,connection:{...S0},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:JS,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:E0,zIndexMode:v,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},e_=({nodes:n,edges:r,defaultNodes:o,defaultEdges:s,width:l,height:c,fitView:u,fitViewOptions:f,minZoom:p,maxZoom:g,nodeOrigin:m,nodeExtent:h,zIndexMode:v})=>hE((w,x)=>{async function C(){const{nodeLookup:E,panZoom:_,fitViewOptions:b,fitViewResolver:S,width:N,height:z,minZoom:L,maxZoom:F}=x();_&&(await u2({nodes:E,width:N,height:z,panZoom:_,minZoom:L,maxZoom:F},b),S==null||S.resolve(!0),w({fitViewResolver:null}))}return{...Wp({nodes:n,edges:r,width:l,height:c,fitView:u,fitViewOptions:f,minZoom:p,maxZoom:g,nodeOrigin:m,nodeExtent:h,defaultNodes:o,defaultEdges:s,zIndexMode:v}),setNodes:E=>{const{nodeLookup:_,parentLookup:b,nodeOrigin:S,elevateNodesOnSelect:N,fitViewQueued:z,zIndexMode:L,nodesSelectionActive:F}=x(),{nodesInitialized:P,hasSelectedNodes:R}=Fc(E,_,b,{nodeOrigin:S,nodeExtent:h,elevateNodesOnSelect:N,checkEquality:!0,zIndexMode:L}),$=F&&R;z&&P?(C(),w({nodes:E,nodesInitialized:P,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:$})):w({nodes:E,nodesInitialized:P,nodesSelectionActive:$})},setEdges:E=>{const{connectionLookup:_,edgeLookup:b}=x();H0(_,b,E),w({edges:E})},setDefaultNodesAndEdges:(E,_)=>{if(E){const{setNodes:b}=x();b(E),w({hasDefaultNodes:!0})}if(_){const{setEdges:b}=x();b(_),w({hasDefaultEdges:!0})}},updateNodeInternals:E=>{const{triggerNodeChanges:_,nodeLookup:b,parentLookup:S,domNode:N,nodeOrigin:z,nodeExtent:L,debug:F,fitViewQueued:P,zIndexMode:R}=x(),{changes:$,updatedInternals:I}=I2(E,b,S,N,z,L,R);I&&(P2(b,S,{nodeOrigin:z,nodeExtent:L,zIndexMode:R}),P?(C(),w({fitViewQueued:!1,fitViewOptions:void 0})):w({}),($==null?void 0:$.length)>0&&(F&&console.log("React Flow: trigger node changes",$),_==null||_($)))},updateNodePositions:(E,_=!1)=>{const b=[];let S=[];const{nodeLookup:N,triggerNodeChanges:z,connection:L,updateConnection:F,onNodesChangeMiddlewareMap:P}=x();for(const[R,$]of E){const I=N.get(R),A=!!(I!=null&&I.expandParent&&(I!=null&&I.parentId)&&($!=null&&$.position)),J={id:R,type:"position",position:A?{x:Math.max(0,$.position.x),y:Math.max(0,$.position.y)}:$.position,dragging:_};if(I&&L.inProgress&&L.fromNode.id===I.id){const T=wr(I,L.fromHandle,xe.Left,!0);F({...L,from:T})}A&&I.parentId&&b.push({id:R,parentId:I.parentId,rect:{...$.internals.positionAbsolute,width:$.measured.width??0,height:$.measured.height??0}}),S.push(J)}if(b.length>0){const{parentLookup:R,nodeOrigin:$}=x(),I=of(b,N,R,$);S.push(...I)}for(const R of P.values())S=R(S);z(S)},triggerNodeChanges:E=>{const{onNodesChange:_,setNodes:b,nodes:S,hasDefaultNodes:N,debug:z}=x();if(E!=null&&E.length){if(N){const L=zE(E,S);b(L)}z&&console.log("React Flow: trigger node changes",E),_==null||_(E)}},triggerEdgeChanges:E=>{const{onEdgesChange:_,setEdges:b,edges:S,hasDefaultEdges:N,debug:z}=x();if(E!=null&&E.length){if(N){const L=DE(E,S);b(L)}z&&console.log("React Flow: trigger edge changes",E),_==null||_(E)}},addSelectedNodes:E=>{const{multiSelectionActive:_,edgeLookup:b,nodeLookup:S,triggerNodeChanges:N,triggerEdgeChanges:z}=x();if(_){const L=E.map(F=>fr(F,!0));N(L);return}N(Kr(S,new Set([...E]),!0)),z(Kr(b))},addSelectedEdges:E=>{const{multiSelectionActive:_,edgeLookup:b,nodeLookup:S,triggerNodeChanges:N,triggerEdgeChanges:z}=x();if(_){const L=E.map(F=>fr(F,!0));z(L);return}z(Kr(b,new Set([...E]))),N(Kr(S,new Set,!0))},unselectNodesAndEdges:({nodes:E,edges:_}={})=>{const{edges:b,nodes:S,nodeLookup:N,triggerNodeChanges:z,triggerEdgeChanges:L}=x(),F=E||S,P=_||b,R=[];for(const I of F){if(!I.selected)continue;const A=N.get(I.id);A&&(A.selected=!1),R.push(fr(I.id,!1))}const $=[];for(const I of P)I.selected&&$.push(fr(I.id,!1));z(R),L($)},setMinZoom:E=>{const{panZoom:_,maxZoom:b}=x();_==null||_.setScaleExtent([E,b]),w({minZoom:E})},setMaxZoom:E=>{const{panZoom:_,minZoom:b}=x();_==null||_.setScaleExtent([b,E]),w({maxZoom:E})},setTranslateExtent:E=>{var _;(_=x().panZoom)==null||_.setTranslateExtent(E),w({translateExtent:E})},resetSelectedElements:()=>{const{edges:E,nodes:_,triggerNodeChanges:b,triggerEdgeChanges:S,elementsSelectable:N}=x();if(!N)return;const z=_.reduce((F,P)=>P.selected?[...F,fr(P.id,!1)]:F,[]),L=E.reduce((F,P)=>P.selected?[...F,fr(P.id,!1)]:F,[]);b(z),S(L)},setNodeExtent:E=>{const{nodes:_,nodeLookup:b,parentLookup:S,nodeOrigin:N,elevateNodesOnSelect:z,nodeExtent:L,zIndexMode:F}=x();E[0][0]===L[0][0]&&E[0][1]===L[0][1]&&E[1][0]===L[1][0]&&E[1][1]===L[1][1]||(Fc(_,b,S,{nodeOrigin:N,nodeExtent:E,elevateNodesOnSelect:z,checkEquality:!1,zIndexMode:F}),w({nodeExtent:E}))},panBy:E=>{const{transform:_,width:b,height:S,panZoom:N,translateExtent:z}=x();return R2({delta:E,panZoom:N,transform:_,translateExtent:z,width:b,height:S})},setCenter:async(E,_,b)=>{const{width:S,height:N,maxZoom:z,panZoom:L}=x();if(!L)return!1;const F=typeof(b==null?void 0:b.zoom)<"u"?b.zoom:z;return await L.setViewport({x:S/2-E*F,y:N/2-_*F,zoom:F},{duration:b==null?void 0:b.duration,ease:b==null?void 0:b.ease,interpolate:b==null?void 0:b.interpolate}),!0},cancelConnection:()=>{w({connection:{...S0}})},updateConnection:E=>{w({connection:E})},reset:()=>w({...Wp()})}},Object.is);function Cg({initialNodes:n,initialEdges:r,defaultNodes:o,defaultEdges:s,initialWidth:l,initialHeight:c,initialMinZoom:u,initialMaxZoom:f,initialFitViewOptions:p,fitView:g,nodeOrigin:m,nodeExtent:h,zIndexMode:v,children:w}){const[x]=ie.useState(()=>e_({nodes:n,edges:r,defaultNodes:o,defaultEdges:s,width:l,height:c,fitView:g,minZoom:u,maxZoom:f,fitViewOptions:p,nodeOrigin:m,nodeExtent:h,zIndexMode:v}));return Z.jsx(pE,{value:x,children:Z.jsx($E,{children:w})})}function n_({children:n,nodes:r,edges:o,defaultNodes:s,defaultEdges:l,width:c,height:u,fitView:f,fitViewOptions:p,minZoom:g,maxZoom:m,nodeOrigin:h,nodeExtent:v,zIndexMode:w}){return ie.useContext(ws)?Z.jsx(Z.Fragment,{children:n}):Z.jsx(Cg,{initialNodes:r,initialEdges:o,defaultNodes:s,defaultEdges:l,initialWidth:c,initialHeight:u,fitView:f,initialFitViewOptions:p,initialMinZoom:g,initialMaxZoom:m,nodeOrigin:h,nodeExtent:v,zIndexMode:w,children:n})}const t_={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function r_({nodes:n,edges:r,defaultNodes:o,defaultEdges:s,className:l,nodeTypes:c,edgeTypes:u,onNodeClick:f,onEdgeClick:p,onInit:g,onMove:m,onMoveStart:h,onMoveEnd:v,onConnect:w,onConnectStart:x,onConnectEnd:C,onClickConnectStart:E,onClickConnectEnd:_,onNodeMouseEnter:b,onNodeMouseMove:S,onNodeMouseLeave:N,onNodeContextMenu:z,onNodeDoubleClick:L,onNodeDragStart:F,onNodeDrag:P,onNodeDragStop:R,onNodesDelete:$,onEdgesDelete:I,onDelete:A,onSelectionChange:J,onSelectionDragStart:T,onSelectionDrag:Y,onSelectionDragStop:U,onSelectionContextMenu:X,onSelectionStart:B,onSelectionEnd:V,onBeforeDelete:G,connectionMode:M,connectionLineType:j=Wt.Bezier,connectionLineStyle:O,connectionLineComponent:W,connectionLineContainerStyle:Q,deleteKeyCode:re="Backspace",selectionKeyCode:le="Shift",selectionOnDrag:K=!1,selectionMode:oe=co.Full,panActivationKeyCode:de="Space",multiSelectionKeyCode:we=ho()?"Meta":"Control",zoomActivationKeyCode:he=ho()?"Meta":"Control",snapToGrid:fe,snapGrid:_e,onlyRenderVisibleElements:Ne=!1,selectNodesOnDrag:be,nodesDraggable:Re,autoPanOnNodeFocus:an,nodesConnectable:fn,nodesFocusable:nn,nodeOrigin:tn=J0,edgesFocusable:lt,edgesReconnectable:Qn,elementsSelectable:Kn=!0,defaultViewport:dn=bE,minZoom:Mn=.5,maxZoom:xn=2,translateExtent:Tn=uo,preventScrolling:Eo=!0,nodeExtent:st,defaultMarkerColor:qt="#b1b1b7",zoomOnScroll:ks=!0,zoomOnPinch:So=!0,panOnScroll:_o=!1,panOnScrollSpeed:Cs=.5,panOnScrollMode:ui=pr.Free,zoomOnDoubleClick:ci=!0,panOnDrag:fi=!0,onPaneClick:di,onPaneMouseEnter:hi,onPaneMouseMove:Et,onPaneMouseLeave:St,onPaneScroll:ko,onPaneContextMenu:Co,paneClickDistance:No=1,nodeClickDistance:bo=0,children:Po,onReconnect:pi,onReconnectStart:Mo,onReconnectEnd:Yt,onEdgeContextMenu:mi,onEdgeDoubleClick:Xt,onEdgeMouseEnter:Ns,onEdgeMouseMove:Gt,onEdgeMouseLeave:xr,reconnectRadius:Er=10,onNodesChange:gi,onEdgesChange:bs,noDragClassName:Ps="nodrag",noWheelClassName:Ms="nowheel",noPanClassName:Zn="nopan",fitView:yi,fitViewOptions:vi,connectOnClick:Ts,attributionPosition:To,proOptions:Lo,defaultEdgeOptions:Io,elevateNodesOnSelect:Ro=!0,elevateEdgesOnSelect:Ls=!1,disableKeyboardA11y:zo=!1,autoPanOnConnect:je,autoPanOnNodeDrag:Is,autoPanOnSelection:wi=!0,autoPanSpeed:Do,connectionRadius:Sr,isValidConnection:Rs,onError:Ao,style:_r,id:En,nodeDragThreshold:zs,connectionDragThreshold:Sn,viewport:Ds,onViewportChange:As,width:Os,height:kr,colorMode:Cr="light",debug:Qt,onScroll:at,ariaLabelConfig:Fs,zIndexMode:Oo="basic",...xi},Fo){const Kt=En||"1",Zt=LE(Cr),js=ie.useCallback(Nr=>{Nr.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),at==null||at(Nr)},[at]);return Z.jsx("div",{"data-testid":"rf__wrapper",...xi,onScroll:js,style:{..._r,...t_},ref:Fo,className:Ye(["react-flow",l,Zt]),id:En,role:"application",children:Z.jsxs(n_,{nodes:n,edges:r,width:Os,height:kr,fitView:yi,fitViewOptions:vi,minZoom:Mn,maxZoom:xn,nodeOrigin:tn,nodeExtent:st,zIndexMode:Oo,children:[Z.jsx(TE,{nodes:n,edges:r,defaultNodes:o,defaultEdges:s,onConnect:w,onConnectStart:x,onConnectEnd:C,onClickConnectStart:E,onClickConnectEnd:_,nodesDraggable:Re,autoPanOnNodeFocus:an,nodesConnectable:fn,nodesFocusable:nn,edgesFocusable:lt,edgesReconnectable:Qn,elementsSelectable:Kn,elevateNodesOnSelect:Ro,elevateEdgesOnSelect:Ls,minZoom:Mn,maxZoom:xn,nodeExtent:st,onNodesChange:gi,onEdgesChange:bs,snapToGrid:fe,snapGrid:_e,connectionMode:M,translateExtent:Tn,connectOnClick:Ts,defaultEdgeOptions:Io,fitView:yi,fitViewOptions:vi,onNodesDelete:$,onEdgesDelete:I,onDelete:A,onNodeDragStart:F,onNodeDrag:P,onNodeDragStop:R,onSelectionDrag:Y,onSelectionDragStart:T,onSelectionDragStop:U,onMove:m,onMoveStart:h,onMoveEnd:v,noPanClassName:Zn,nodeOrigin:tn,rfId:Kt,autoPanOnConnect:je,autoPanOnNodeDrag:Is,autoPanSpeed:Do,onError:Ao,connectionRadius:Sr,isValidConnection:Rs,selectNodesOnDrag:be,nodeDragThreshold:zs,connectionDragThreshold:Sn,onBeforeDelete:G,debug:Qt,ariaLabelConfig:Fs,zIndexMode:Oo}),Z.jsx(ZS,{onInit:g,onNodeClick:f,onEdgeClick:p,onNodeMouseEnter:b,onNodeMouseMove:S,onNodeMouseLeave:N,onNodeContextMenu:z,onNodeDoubleClick:L,nodeTypes:c,edgeTypes:u,connectionLineType:j,connectionLineStyle:O,connectionLineComponent:W,connectionLineContainerStyle:Q,selectionKeyCode:le,selectionOnDrag:K,selectionMode:oe,deleteKeyCode:re,multiSelectionKeyCode:we,panActivationKeyCode:de,zoomActivationKeyCode:he,onlyRenderVisibleElements:Ne,defaultViewport:dn,translateExtent:Tn,minZoom:Mn,maxZoom:xn,preventScrolling:Eo,zoomOnScroll:ks,zoomOnPinch:So,zoomOnDoubleClick:ci,panOnScroll:_o,panOnScrollSpeed:Cs,panOnScrollMode:ui,panOnDrag:fi,autoPanOnSelection:wi,onPaneClick:di,onPaneMouseEnter:hi,onPaneMouseMove:Et,onPaneMouseLeave:St,onPaneScroll:ko,onPaneContextMenu:Co,paneClickDistance:No,nodeClickDistance:bo,onSelectionContextMenu:X,onSelectionStart:B,onSelectionEnd:V,onReconnect:pi,onReconnectStart:Mo,onReconnectEnd:Yt,onEdgeContextMenu:mi,onEdgeDoubleClick:Xt,onEdgeMouseEnter:Ns,onEdgeMouseMove:Gt,onEdgeMouseLeave:xr,reconnectRadius:Er,defaultMarkerColor:qt,noDragClassName:Ps,noWheelClassName:Ms,noPanClassName:Zn,rfId:Kt,disableKeyboardA11y:zo,nodeExtent:st,viewport:Ds,onViewportChange:As}),Z.jsx(NE,{onSelectionChange:J}),Po,Z.jsx(EE,{proOptions:Lo,position:To}),Z.jsx(xE,{rfId:Kt,disableKeyboardA11y:zo})]})})}var i_=ng(r_);function o_({dimensions:n,lineWidth:r,variant:o,className:s}){return Z.jsx("path",{strokeWidth:r,d:`M${n[0]/2} 0 V${n[1]} M0 ${n[1]/2} H${n[0]}`,className:Ye(["react-flow__background-pattern",o,s])})}function l_({radius:n,className:r}){return Z.jsx("circle",{cx:n,cy:n,r:n,className:Ye(["react-flow__background-pattern","dots",r])})}var Ut;(function(n){n.Lines="lines",n.Dots="dots",n.Cross="cross"})(Ut||(Ut={}));const s_={[Ut.Dots]:1,[Ut.Lines]:1,[Ut.Cross]:6},a_=n=>({transform:n.transform,patternId:`pattern-${n.rfId}`});function Ng({id:n,variant:r=Ut.Dots,gap:o=20,size:s,lineWidth:l=1,offset:c=0,color:u,bgColor:f,style:p,className:g,patternClassName:m}){const h=ie.useRef(null),{transform:v,patternId:w}=Pe(a_,Oe),x=s||s_[r],C=r===Ut.Dots,E=r===Ut.Cross,_=Array.isArray(o)?o:[o,o],b=[_[0]*v[2]||1,_[1]*v[2]||1],S=x*v[2],N=Array.isArray(c)?c:[c,c],z=E?[S,S]:b,L=[N[0]*v[2]||1+z[0]/2,N[1]*v[2]||1+z[1]/2],F=`${w}${n||""}`;return Z.jsxs("svg",{className:Ye(["react-flow__background",g]),style:{...p,...Ss,"--xy-background-color-props":f,"--xy-background-pattern-color-props":u},ref:h,"data-testid":"rf__background",children:[Z.jsx("pattern",{id:F,x:v[0]%b[0],y:v[1]%b[1],width:b[0],height:b[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${L[0]},-${L[1]})`,children:C?Z.jsx(l_,{radius:S/2,className:m}):Z.jsx(o_,{dimensions:z,lineWidth:l,variant:r,className:m})}),Z.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${F})`})]})}Ng.displayName="Background";const u_=ie.memo(Ng);function c_(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:Z.jsx("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function f_(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:Z.jsx("path",{d:"M0 0h32v4.2H0z"})})}function d_(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:Z.jsx("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function h_(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:Z.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function p_(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:Z.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Xl({children:n,className:r,...o}){return Z.jsx("button",{type:"button",className:Ye(["react-flow__controls-button",r]),...o,children:n})}const m_=n=>({isInteractive:n.nodesDraggable||n.nodesConnectable||n.elementsSelectable,minZoomReached:n.transform[2]<=n.minZoom,maxZoomReached:n.transform[2]>=n.maxZoom,ariaLabelConfig:n.ariaLabelConfig});function bg({style:n,showZoom:r=!0,showFitView:o=!0,showInteractive:s=!0,fitViewOptions:l,onZoomIn:c,onZoomOut:u,onFitView:f,onInteractiveChange:p,className:g,children:m,position:h="bottom-left",orientation:v="vertical","aria-label":w}){const x=Fe(),{isInteractive:C,minZoomReached:E,maxZoomReached:_,ariaLabelConfig:b}=Pe(m_,Oe),{zoomIn:S,zoomOut:N,fitView:z}=Es(),L=()=>{S(),c==null||c()},F=()=>{N(),u==null||u()},P=()=>{z(l),f==null||f()},R=()=>{x.setState({nodesDraggable:!C,nodesConnectable:!C,elementsSelectable:!C}),p==null||p(!C)},$=v==="horizontal"?"horizontal":"vertical";return Z.jsxs(xs,{className:Ye(["react-flow__controls",$,g]),position:h,style:n,"data-testid":"rf__controls","aria-label":w??b["controls.ariaLabel"],children:[r&&Z.jsxs(Z.Fragment,{children:[Z.jsx(Xl,{onClick:L,className:"react-flow__controls-zoomin",title:b["controls.zoomIn.ariaLabel"],"aria-label":b["controls.zoomIn.ariaLabel"],disabled:_,children:Z.jsx(c_,{})}),Z.jsx(Xl,{onClick:F,className:"react-flow__controls-zoomout",title:b["controls.zoomOut.ariaLabel"],"aria-label":b["controls.zoomOut.ariaLabel"],disabled:E,children:Z.jsx(f_,{})})]}),o&&Z.jsx(Xl,{className:"react-flow__controls-fitview",onClick:P,title:b["controls.fitView.ariaLabel"],"aria-label":b["controls.fitView.ariaLabel"],children:Z.jsx(d_,{})}),s&&Z.jsx(Xl,{className:"react-flow__controls-interactive",onClick:R,title:b["controls.interactive.ariaLabel"],"aria-label":b["controls.interactive.ariaLabel"],children:C?Z.jsx(p_,{}):Z.jsx(h_,{})}),m]})}bg.displayName="Controls";const g_=ie.memo(bg);function y_({id:n,x:r,y:o,width:s,height:l,style:c,color:u,strokeColor:f,strokeWidth:p,className:g,borderRadius:m,shapeRendering:h,selected:v,onClick:w}){const{background:x,backgroundColor:C}=c||{},E=u||x||C;return Z.jsx("rect",{className:Ye(["react-flow__minimap-node",{selected:v},g]),x:r,y:o,rx:m,ry:m,width:s,height:l,style:{fill:E,stroke:f,strokeWidth:p},shapeRendering:h,onClick:w?_=>w(_,n):void 0})}const v_=ie.memo(y_),w_=n=>n.nodes.map(r=>r.id),Ru=n=>n instanceof Function?n:()=>n;function x_({nodeStrokeColor:n,nodeColor:r,nodeClassName:o="",nodeBorderRadius:s=5,nodeStrokeWidth:l,nodeComponent:c=v_,onClick:u}){const f=Pe(w_,Oe),p=Ru(r),g=Ru(n),m=Ru(o),h=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return Z.jsx(Z.Fragment,{children:f.map(v=>Z.jsx(S_,{id:v,nodeColorFunc:p,nodeStrokeColorFunc:g,nodeClassNameFunc:m,nodeBorderRadius:s,nodeStrokeWidth:l,NodeComponent:c,onClick:u,shapeRendering:h},v))})}function E_({id:n,nodeColorFunc:r,nodeStrokeColorFunc:o,nodeClassNameFunc:s,nodeBorderRadius:l,nodeStrokeWidth:c,shapeRendering:u,NodeComponent:f,onClick:p}){const{node:g,x:m,y:h,width:v,height:w}=Pe(x=>{const C=x.nodeLookup.get(n);if(!C)return{node:void 0,x:0,y:0,width:0,height:0};const E=C.internals.userNode,{x:_,y:b}=C.internals.positionAbsolute,{width:S,height:N}=xt(E);return{node:E,x:_,y:b,width:S,height:N}},Oe);return!g||g.hidden||!M0(g)?null:Z.jsx(f,{x:m,y:h,width:v,height:w,style:g.style,selected:!!g.selected,className:s(g),color:r(g),borderRadius:l,strokeColor:o(g),strokeWidth:c,shapeRendering:u,onClick:p,id:g.id})}const S_=ie.memo(E_);var __=ie.memo(x_);const k_=200,C_=150,N_=n=>!n.hidden,b_=n=>{const r={x:-n.transform[0]/n.transform[2],y:-n.transform[1]/n.transform[2],width:n.width/n.transform[2],height:n.height/n.transform[2]};return{viewBB:r,boundingRect:n.nodeLookup.size>0?b0(wo(n.nodeLookup,{filter:N_}),r):r,rfId:n.rfId,panZoom:n.panZoom,translateExtent:n.translateExtent,flowWidth:n.width,flowHeight:n.height,ariaLabelConfig:n.ariaLabelConfig}},P_="react-flow__minimap-desc";function Pg({style:n,className:r,nodeStrokeColor:o,nodeColor:s,nodeClassName:l="",nodeBorderRadius:c=5,nodeStrokeWidth:u,nodeComponent:f,bgColor:p,maskColor:g,maskStrokeColor:m,maskStrokeWidth:h,position:v="bottom-right",onClick:w,onNodeClick:x,pannable:C=!1,zoomable:E=!1,ariaLabel:_,inversePan:b,zoomStep:S=1,offsetScale:N=5}){const z=Fe(),L=ie.useRef(null),{boundingRect:F,viewBB:P,rfId:R,panZoom:$,translateExtent:I,flowWidth:A,flowHeight:J,ariaLabelConfig:T}=Pe(b_,Oe),Y=(n==null?void 0:n.width)??k_,U=(n==null?void 0:n.height)??C_,X=F.width/Y,B=F.height/U,V=Math.max(X,B),G=V*Y,M=V*U,j=N*V,O=F.x-(G-F.width)/2-j,W=F.y-(M-F.height)/2-j,Q=G+j*2,re=M+j*2,le=`${P_}-${R}`,K=ie.useRef(0),oe=ie.useRef();K.current=V,ie.useEffect(()=>{if(L.current&&$)return oe.current=V2({domNode:L.current,panZoom:$,getTransform:()=>z.getState().transform,getViewScale:()=>K.current}),()=>{var fe;(fe=oe.current)==null||fe.destroy()}},[$]),ie.useEffect(()=>{var fe;(fe=oe.current)==null||fe.update({translateExtent:I,width:A,height:J,inversePan:b,pannable:C,zoomStep:S,zoomable:E})},[C,E,b,S,I,A,J]);const de=w?fe=>{var be;const[_e,Ne]=((be=oe.current)==null?void 0:be.pointer(fe))||[0,0];w(fe,{x:_e,y:Ne})}:void 0,we=x?ie.useCallback((fe,_e)=>{const Ne=z.getState().nodeLookup.get(_e).internals.userNode;x(fe,Ne)},[]):void 0,he=_??T["minimap.ariaLabel"];return Z.jsx(xs,{position:v,style:{...n,"--xy-minimap-background-color-props":typeof p=="string"?p:void 0,"--xy-minimap-mask-background-color-props":typeof g=="string"?g:void 0,"--xy-minimap-mask-stroke-color-props":typeof m=="string"?m:void 0,"--xy-minimap-mask-stroke-width-props":typeof h=="number"?h*V:void 0,"--xy-minimap-node-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-node-stroke-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-width-props":typeof u=="number"?u:void 0},className:Ye(["react-flow__minimap",r]),"data-testid":"rf__minimap",children:Z.jsxs("svg",{width:Y,height:U,viewBox:`${O} ${W} ${Q} ${re}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":le,ref:L,onClick:de,children:[he&&Z.jsx("title",{id:le,children:he}),Z.jsx(__,{onClick:we,nodeColor:s,nodeStrokeColor:o,nodeBorderRadius:c,nodeClassName:l,nodeStrokeWidth:u,nodeComponent:f}),Z.jsx("path",{className:"react-flow__minimap-mask",d:`M${O-j},${W-j}h${Q+j*2}v${re+j*2}h${-Q-j*2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Pg.displayName="MiniMap";const M_=ie.memo(Pg),T_=n=>r=>n?`${Math.max(1/r.transform[2],1)}`:void 0,L_={[li.Line]:"right",[li.Handle]:"bottom-right"};function I_({nodeId:n,position:r,variant:o=li.Handle,className:s,style:l=void 0,children:c,color:u,minWidth:f=10,minHeight:p=10,maxWidth:g=Number.MAX_VALUE,maxHeight:m=Number.MAX_VALUE,keepAspectRatio:h=!1,resizeDirection:v,autoScale:w=!0,shouldResize:x,onResizeStart:C,onResize:E,onResizeEnd:_}){const b=og(),S=typeof n=="string"?n:b,N=Fe(),z=ie.useRef(null),L=o===li.Handle,F=Pe(ie.useCallback(T_(L&&w),[L,w]),Oe),P=ie.useRef(null),R=r??L_[o];ie.useEffect(()=>{if(!(!z.current||!S))return P.current||(P.current=nE({domNode:z.current,nodeId:S,getStoreItems:()=>{const{nodeLookup:I,transform:A,snapGrid:J,snapToGrid:T,nodeOrigin:Y,domNode:U}=N.getState();return{nodeLookup:I,transform:A,snapGrid:J,snapToGrid:T,nodeOrigin:Y,paneDomNode:U}},onChange:(I,A)=>{const{triggerNodeChanges:J,nodeLookup:T,parentLookup:Y,nodeOrigin:U}=N.getState(),X=[],B={x:I.x,y:I.y},V=T.get(S);if(V&&V.expandParent&&V.parentId){const G=V.origin??U,M=I.width??V.measured.width??0,j=I.height??V.measured.height??0,O={id:V.id,parentId:V.parentId,rect:{width:M,height:j,...T0({x:I.x??V.position.x,y:I.y??V.position.y},{width:M,height:j},V.parentId,T,G)}},W=of([O],T,Y,U);X.push(...W),B.x=I.x?Math.max(G[0]*M,I.x):void 0,B.y=I.y?Math.max(G[1]*j,I.y):void 0}if(B.x!==void 0&&B.y!==void 0){const G={id:S,type:"position",position:{...B}};X.push(G)}if(I.width!==void 0&&I.height!==void 0){const M={id:S,type:"dimensions",resizing:!0,setAttributes:v?v==="horizontal"?"width":"height":!0,dimensions:{width:I.width,height:I.height}};X.push(M)}for(const G of A){const M={...G,type:"position"};X.push(M)}J(X)},onEnd:({width:I,height:A})=>{const J={id:S,type:"dimensions",resizing:!1,dimensions:{width:I,height:A}};N.getState().triggerNodeChanges([J])}})),P.current.update({controlPosition:R,boundaries:{minWidth:f,minHeight:p,maxWidth:g,maxHeight:m},keepAspectRatio:h,resizeDirection:v,onResizeStart:C,onResize:E,onResizeEnd:_,shouldResize:x}),()=>{var I;(I=P.current)==null||I.destroy()}},[R,f,p,g,m,h,C,E,_,x]);const $=R.split("-");return Z.jsx("div",{className:Ye(["react-flow__resize-control","nodrag",...$,o,s]),ref:z,style:{...l,scale:F,...u&&{[L?"backgroundColor":"borderColor"]:u}},children:c})}ie.memo(I_);const Up=[{bg:"#1e3a5f",text:"#ffffff",border:"#1e3a5f",fontSize:14,fontWeight:700},{bg:"#2563eb",text:"#ffffff",border:"#2563eb",fontSize:12,fontWeight:700},{bg:"#60a5fa",text:"#ffffff",border:"#60a5fa",fontSize:11,fontWeight:600},{bg:"#dbeafe",text:"#1e3a5f",border:"#93c5fd",fontSize:11,fontWeight:400},{bg:"#f0f9ff",text:"#1e3a5f",border:"#bae6fd",fontSize:10,fontWeight:400}];function R_({data:n}){const r=Up[Math.min(n.depth,Up.length-1)],[o,s]=ie.useState(!1);return Z.jsxs("div",{onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),style:{background:r.bg,color:r.text,border:`2px solid ${r.border}`,borderRadius:8,padding:"6px 10px",width:200,fontSize:r.fontSize,fontWeight:r.fontWeight,fontFamily:"Noto Sans KR, sans-serif",cursor:n.hasChildren||n.explanation?"pointer":"default",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:6,lineHeight:1.4,boxShadow:o?"0 4px 12px rgba(37, 99, 235, 0.25)":n.depth<=1?"0 2px 6px rgba(0,0,0,0.15)":"none",transform:o?"translateY(-1px)":"none",transition:"all 0.2s ease"},children:[Z.jsx(si,{type:"target",position:xe.Left,style:{opacity:0,pointerEvents:"none"}}),Z.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flex:1,minWidth:0},children:[Z.jsx("span",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:n.label}),n.explanation&&Z.jsx("span",{style:{fontSize:11,opacity:.85,flexShrink:0},title:"개념 설명 있음",children:"📖"})]}),n.hasChildren&&Z.jsx("span",{style:{fontSize:9,opacity:.7,flexShrink:0,marginLeft:4},children:n.isCollapsed?"▶":"▼"}),Z.jsx(si,{type:"source",position:xe.Right,style:{opacity:0,pointerEvents:"none"}})]})}const qp={id:"root",label:"건축시공",children:[{id:"1",label:"1. 가설공사",children:[{id:"1-1",label:"규준틀",explanation:`건축물의 위치·높이·수평을 설정하기 위해 공사 초기에 세우는 기준 틀.

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
시멘트 창고 설치 기준(30cm 바닥고, 환기창 설치 금지, 13포대 쌓기 한계)이 실기 시험 빈출 단골 문제.`},{id:"1-exam",label:"[시험 포인트]",children:[{id:"1-e1",label:"비계: 강관·달·말·통나무"},{id:"1-e2",label:"규준틀의 역할과 설치"},{id:"1-e3",label:"흙의 성질: 함수비·간극비·포화도"},{id:"1-e4",label:"지반조사: 보링·SPT·베인시험"}]}]},{id:"2",label:"2. 토공사",children:[{id:"2-1",label:"터파기",children:[{id:"2-1-1",label:"줄파기",explanation:`벽·기초 띠를 따라 길고 좁게 굴착하는 방식.

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
다지면 부피가 줄어듦(C<1). 자연 흙 100m³를 다지면 약 90m³만 채워진다는 수축성 이해가 계산의 핵심.`}]},{id:"2-exam",label:"[시험 포인트]",children:[{id:"2-e1",label:"터파기: 줄·온통·독립파기"},{id:"2-e2",label:"흙막이: H-Pile·시트·슬러리월·앵커"},{id:"2-e3",label:"지반개량: 웰포·딥웰·샌드드레인"},{id:"2-e4",label:"토량변화율 (L·C)"}]}]},{id:"3",label:"3. 기초공사",children:[{id:"3-1",label:"직접기초",children:[{id:"3-1-1",label:"독립기초",explanation:`각 기둥 하나 아래에 독립적으로 설치하는 정사각형·직사각형 콘크리트 기초판.

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
박스케이슨 = 밑바닥 차단 상자 육상 제작 -> 해상 예인 -> 침설. 굴착 작업이 없는 침설 지정 기초.`}]},{id:"3-exam",label:"[시험 포인트]",children:[{id:"3-e1",label:"직접기초: 독립·줄·복합·온통기초"},{id:"3-e2",label:"말뚝: 나무·RC·PC·PHC·강관·H형강"},{id:"3-e3",label:"시공법: 항타·프리보링·중굴공법"},{id:"3-e4",label:"케이슨: 오픈·공기·박스"}]}]},{id:"4",label:"4. 철근콘크리트공사",children:[{id:"4-1",label:"거푸집",children:[{id:"4-1-1",label:"재래식 거푸집",explanation:`목재 합판(두께 12~18mm)과 각재를 현장에서 직접 제작하는 전통적인 거푸집.

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
프리텐션=부착력·공장·PHC말뚝, 포스트텐션=정착구·쉬스관·현장·교량. 이 두 가지 구분이 핵심`}]},{id:"4-exam",label:"[시험 포인트]",children:[{id:"4-e1",label:"거푸집: 갱폼·슬립·터널·플라잉·알폼"},{id:"4-e2",label:"철근: SR·HD, 피복두께, 이음, 정착"},{id:"4-e3",label:"혼화재(플라이애시) vs 혼화제(AE제)"},{id:"4-e4",label:"W/C·슬럼프·공기량·배합강도"},{id:"4-e5",label:"타설·다짐·양생(습윤·증기)"},{id:"4-e6",label:"특수콘크리트: 한중·서중·수중·매스"}]}]},{id:"5",label:"5. 철골공사",children:[{id:"5-1",label:"부재 종류",children:[{id:"5-1-1",label:"H형강",explanation:`H자 단면을 가진 철골 구조의 가장 기본적이고 범용적인 부재.

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
붙이기 내화 = 보드 부착 = 표면 깔끔 = 마감 겸용 가능. 뿜칠(경제)·타설(강함)·붙이기(마감)로 3종류 암기`}]},{id:"5-exam",label:"[시험 포인트]",children:[{id:"5-e1",label:"부재: H·I·ㄱ(앵글)·ㄷ(채널)형강"},{id:"5-e2",label:"용접: 맞댐용접·필릿용접"},{id:"5-e3",label:"볼트: 고력볼트·일반볼트"},{id:"5-e4",label:"내화피복: 뿜칠·타설·붙이기"},{id:"5-e5",label:"철골세우기 순서"}]}]},{id:"6",label:"6. 조적공사",children:[{id:"6-1",label:"벽돌쌓기",children:[{id:"6-1-1",label:"길이쌓기",explanation:`벽돌의 긴 면(길이면)이 벽 바깥쪽에 보이도록 쌓는 방법.

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
메쌓기 = 모르타르 없음 = 자연 배수 원활 = 수압 차단에 최적. 찰쌓기(모르타르 있음)와 1:1 비교.`}]},{id:"6-exam",label:"[시험 포인트]",children:[{id:"6-e1",label:"쌓기: 길이·마구리·영국·화란·미국·불식"},{id:"6-e2",label:"블록쌓기 방법"},{id:"6-e3",label:"찰쌓기(모르타르) vs 메쌓기(건식)"}]}]},{id:"7",label:"7. 방수공사",children:[{id:"7-1",label:"아스팔트 방수",explanation:`가열 용융 아스팔트와 아스팔트 루핑(Roofing)을 교대로 여러 겹 붙여 방수층을 형성하는 공법.

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
실링 = 코킹. 실리콘(도장불가)·PU(도장가능)·변성실리콘(도장가능). 줄눈·창호 방수 마감의 필수 공법`},{id:"7-exam",label:"[시험 포인트]",children:[{id:"7-e1",label:"방수공법: 아스팔트·시트·도막·액체·규산질·실링"},{id:"7-e2",label:"아스팔트 방수 공법 순서"}]}]},{id:"8",label:"8. 미장·타일공사",children:[{id:"8-1",label:"미장공사",children:[{id:"8-1-1",label:"시멘트 모르타르",explanation:`시멘트 + 잔골재(모래) + 물을 혼합한 가장 기본적이고 일반적인 미장 재료.

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
접착붙이기 = 접착제 사용 = 석고보드 등 건식 바탕 전용 = 매우 얇은 접착 두께.`}]},{id:"8-exam",label:"[시험 포인트]",children:[{id:"8-e1",label:"미장: 시멘트모르타르·석고플라스터·테라조"},{id:"8-e2",label:"타일: 압착·개량압착·떠붙이기·접착"}]}]},{id:"9",label:"9. 창호·유리공사",children:[{id:"9-1",label:"창호공사",children:[{id:"9-1-1",label:"알루미늄창호",explanation:`알루미늄 합금(6063-T5 등)을 압출 성형하여 제작한 현재 가장 많이 사용되는 창호.

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
Low-E = 낮은 열방사율 = 열(적외선) 반사. 빛은 통과. 복층유리와 조합이 기본. 에너지 절약 30~50%`}]},{id:"9-exam",label:"[시험 포인트]",children:[{id:"9-e1",label:"창호: 알루미늄·PVC·목재·스틸"},{id:"9-e2",label:"유리: 판·복층·강화·접합·로이"}]}]},{id:"10",label:"10. 도장공사",children:[{id:"10-1",label:"바탕처리",explanation:`도료를 바르기 전 피도물의 표면을 도장에 적합한 상태로 정비하는 기초 작업. 전체 도장 품질을 결정하는 가장 중요한 공정.

▶ 재질별 바탕처리 요령
• 콘크리트/모르타르: 함수율 10% 이하, pH 9 이하가 될 때까지 충분히 양생 건조 (수분과 알칼리성 제어 필수).
• 목부 (나무): 사포(연마지)로 표면을 밀어 거친 면과 대팻자국을 없앤 후, 옹이 구멍 등에서 송진이 베어 나오지 않도록 셀락 니스(Shellac Varnish)를 칠하는 옹이땜질 실시. 이후 퍼티(Putty)로 홈을 메움.
• 철부 (금속): 스크레이퍼나 와이어 브러시로 녹과 스케일을 완전히 제거(제청)하고 유분을 휘발유로 닦아낸 후 즉시 방청도료(광명단 등)를 초벌 도포. 화학적 바탕처리 공법으로는 인산염 피막법(파커라이징), 워시 프라이머법(에칭 프라이머)이 활용됨.

▶ 도장 제한 기후 기준 및 뿜칠 기준
• 시공 금지 기온/습도: 기온 5°C 이하, 35°C 이상, 혹은 상대습도 85% 이상일 때는 칠막 형성 불량으로 즉시 작업 중단.
• 뿜칠(에어스프레이) 요령: 스프레이건과 피도면의 거리는 30cm 표준 유지, 분사 각도는 직각 유지, 1행 뿜칠 폭은 30cm 정도로 하되 각 뿜칠행은 1/3~1/2 정도 겹치게 중복 분사. 뿜칠 압력은 0.2~0.4MPa 유지.

★ 시험 포인트
목재 옹이에서 나오는 송진을 차단하기 위한 옹이땜용 약제(셀락 니스) 쓰기, 뿜칠 거리(30cm) 및 압력(0.2~0.4MPa), 도장 작업 중지 기후 기준(기온 5°C 이하 또는 습도 85% 이상)이 단골 출제 포인트.`},{id:"10-2",label:"도료 종류",children:[{id:"10-2-1",label:"유성페인트",explanation:`보일유(건성유)를 전색제로 하고 안료와 건조제를 혼합하여 희석제로 녹여 만든 전통적인 유성 페인트.

▶ 특징 및 적용성
• 도막이 두껍고 탄성이 있어 외부 환경에 노출되어도 균열이 적고 철부나 목재 보호 성능(내후성)이 우수함.
• 건조 시간이 매우 느림 (보통 24시간 이상 필요).
• 내알칼리성에 극도로 취약함: 시멘트, 콘크리트, 모르타르, 회반죽 등의 알칼리 성분과 접촉하면 비누화(Saponification) 반응을 일으켜 칠막이 부풀어 오르고 녹아내림. 따라서 콘크리트/몰탈 바탕면에는 절대로 칠해서는 안 됨.

▶ 주요 성분 및 건조제
• 원료 구성: 건성유 + 안료 + 건조제(드라이어) + 희석제.
• 희석제 종류: 송진건류품(테레핀유), 석유건류품(미네랄 스피리트, 휘발유).
• 건조제(Dryer) 주의사항: 지나치게 많이 혼입하면 광택이 급격히 감소하고 피막의 신축성이 상실되어 정벌 칠에 균열이 발생함. 주로 동절기에 촉진용으로 많이 배합함.

★ 시험 포인트
유성페인트를 콘크리트나 모르타르면에 직접 도포할 수 없는 원인(알칼리에 의한 비누화 반응), 건조제 과다 배합 시 나타나는 도막 하자(균열 발생) 원리 출제 대비.`},{id:"10-2-2",label:"수성페인트",explanation:`안료를 물로 용해하여 카세인, 전분, 아교 등의 유기 수성 접착제와 배합해 사용하는 수용성 도료.

▶ 물리적 성질 및 특징
• 물을 희석제로 사용하기 때문에 인화 위험성이 없고 작업 중 냄새가 적어 실내 친환경 시공에 매우 유리함.
• 건조 시간이 1~2시간으로 매우 빠르고 시공비가 저렴함.
• 내알칼리성이 강함: 시멘트나 모르타르, 석고보드 등 알칼리성 바탕에 화학 반응을 일으키지 않고 안전하게 밀착됨.
• 내수성 및 내후성이 약해 습기가 많거나 외부 빗물에 직접 노출되는 곳에는 사용하지 않음 (실내 내부 건조 벽체용 마감으로 한정).
• 철재(쇠)에 직접 칠하면 물 성분으로 인해 즉시 녹이 유발되므로 금속면 시공은 절대 금지함. 최근에는 수성을 개량한 합성수지 에멀션 페인트(Emulsion Paint)가 널리 쓰임.

★ 시험 포인트
수성페인트의 용도(콘크리트, 몰탈, 회반죽면 등 실내 시멘트 마감), 구성요소(안료, 물, 아교), 철재면 시공이 불가한 원인(수분에 의한 녹 발생) 암기.`},{id:"10-2-3",label:"에폭시",explanation:`에폭시 수지와 아민계 경화제의 상온 2액형 화학 가교 반응으로 굳어지는 강력한 피막 형성 도료.

▶ 특징 및 성능
• 기계적 마찰 강도(내마모성)가 모든 도료 중 가장 뛰어나 무거운 차량이나 장비가 다니는 바닥 보호에 최적.
• 산, 알칼리, 유기용제 등에 견디는 내약품성과 부식 차단(내식성, 방청성) 능력이 매우 우수함.
• 콘크리트 바탕과의 접착력이 극도로 강해 방진(먼지 발생 차단) 및 방수 능력을 동시에 구현.
• 단점: 자외선(태풍, 강한 햇빛)에 장기간 노출되면 도막이 분해되어 색이 누렇게 변하고 바스러지는 황변(Yellowing) 현상이 일어남. 따라서 야외 외부 지붕이나 바닥에는 사용을 금지하며 지하 실내 주차장 바닥이나 화학 공장, 실험실 바닥에만 시공함.

★ 시험 포인트
에폭시 도료의 최대 장점(내마모성, 내약품성, 접착력 최우수), 주차장 및 공장 바닥 전용 용도 확인, 야외 외부 사용이 제한되는 치명적 약점(자외선에 의한 황변 현상) 기출.`},{id:"10-2-4",label:"우레탄",explanation:`우레탄 수지의 우레탄 결합으로 다공성 및 고탄성 질감의 두꺼운 방수성 막을 형성하는 합성수지계 도료.

▶ 물리적 성질 및 시공 특징
• 탄성과 신축성(파단 신율)이 매우 뛰어나, 겨울철 온도 수축이나 콘크리트 건조 수축으로 발생하는 거동 및 미세 균열에 방수층이 찢어지지 않고 그대로 늘어나는 균열 추종성이 최우수함.
• 내후성이 강해 야외 햇빛과 기온 변화에 잘 견디므로 건물 옥상 노출 방수 도장(녹색 우레탄 방수)에 표준으로 적용함.
• 화학 반응 중 공기 중이나 바탕면의 미세 수분과 반응하면 기포가 발생하므로, 바탕면에 잔여 습기가 있으면 칠막이 부풀어 오르는 들뜸 하자가 발생함 (바탕면 건조 필수). 5°C 이하 저온에서는 경화 속도가 급격히 늦어지므로 가속 촉진제를 추가 사용함.

★ 시험 포인트
우레탄 도료가 옥상 방수층 마감에 가장 널리 쓰이는 이유(고무 같은 탄성/신축성으로 건물의 크랙 및 신축 거동 수용), 시공 시 습기 바탕 조건 하에서의 부풀어 오름 하자 메커니즘 숙지.`},{id:"10-2-5",label:"락카",explanation:`질산섬유소(니트로셀룰로오스)와 유용성 수지, 가소제를 휘발성 유기용제(락카신너)로 용해하여 만든 속건성 도료.

▶ 시공적 특징
• 도막 형성 원리: 용제가 대기 중으로 날아가면서 고체 성분만 남는 완전 휘발건조식 도료.
• 건조 시간이 모든 도료 중 가장 빠름 (수분~수십 분 내에 건조).
• 칠막의 두께(살두께)가 얇고 표면 평활도 및 광택이 매우 우아하며 질감이 부드러워 내부 목재 가구, 실내 인테리어 목공예 마감에 최적.
• 시공 주의사항: 한 번 바른 위에 붓질을 덧칠하면, 락카 속의 강한 용제가 이미 굳어있는 초벌 도막을 녹여버려 솔 자국이 생기고 뭉개짐. 따라서 솔칠(붓칠)은 불가능하며 에어 스프레이건을 이용한 뿜칠 시공이 절대적임. 열과 습기에 약해 백화 현상(Blushing)이 발생하기 쉬움.

★ 시험 포인트
락카의 건조 방식(휘발 건조형) 및 빠른 건조 속도 특성, 솔칠이 불가능하고 뿜칠로만 시공해야 하는 원인(두 번째 칠의 용제가 초벌 칠막을 용해함)이 출제 포인트.`}]},{id:"10-exam",label:"[시험 포인트]",children:[{id:"10-e1",label:"도료: 유성·수성·에폭시·우레탄·락카"},{id:"10-e2",label:"바탕처리 순서"}]}]},{id:"11",label:"11. 수장공사",children:[{id:"11-1",label:"바닥",children:[{id:"11-1-1",label:"비닐타일",explanation:`폴리염화비닐(PVC) 수지를 주원료로 하여 가소제, 안료, 충전재를 혼합한 뒤 시트 형태로 압출 성형하여 만드는 얇은 바닥 마감 타일.

▶ 특징 및 시공성
• 강도가 높고 내마모성이 강해 보행 빈도가 높은 곳에서도 오랫동안 형태를 유지.
• 빗물이나 바닥 청소 시 수분에 잘 견디는 내수성을 가짐 (시공 본드의 접착선은 수분 침투 주의 필요).
• 시공 단가가 매우 저렴하고 깨진 조각만 부분적으로 떼어내어 보수하기 쉬워 가성비가 가장 우수.
• 주로 상업용 오피스 빌딩 사무실 바닥이나 상가 마트에 데코타일(Deco Tile)이라는 상품명으로 다량 설치됨.
• 단점: 가소제 성분 때문에 겨울철 저온 환경에서 딱딱하게 굳고 온도가 변하면 수축과 팽창이 크게 일어나 타일 틈새가 벌어지는 이격 하자가 잘 생김.

★ 시험 포인트
비닐타일의 원료(PVC 합성수지) 및 특징(가성비 우수, 내마모성/내수성 강함), 상업용 바닥 표준 자재로서의 특징과 겨울철 수축 틈새 하자가 주요 관리 요소.`},{id:"11-1-2",label:"카펫",explanation:`양모(천연 우단) 또는 나일론, 아크릴 등의 합성 섬유를 특수 기포지에 심어 굵은 파일(Pile)을 형성한 시트형 바닥 마감재.

▶ 물리적 성능 및 장점
• 소음 흡수(흡음 성능) 최우수: 보행 시 발소리나 실내 대화 음향이 바닥에 부딪혀 울리는 것을 완벽하게 방지하여 실내 정숙을 유지.
• 보온 및 단열성 우수: 직물 구조 내에 많은 공기층을 가두어 발바닥 체온 손실을 막고 실내 온기를 장기 보존.
• 충격 흡수력이 우수해 보행감이 푹신하고 넘어져도 크게 다치지 않음. 호텔 로비, 고급 연회장, 오피스 중역실, 영화관에 주로 적용.
• 단점: 수분이나 커피 등 액체 오염물이 번지면 세척이 극도로 어렵고 곰팡이와 진드기 온상이 되기 쉬우므로 상시 환기 및 진공청소 관리가 필수.

★ 시험 포인트
카펫 바닥재의 핵심 장점인 소음 흡수성(보행 소음 차단)과 실내 보온성 이해, 오염 취약성에 따른 습도 및 먼지 관리의 한계점이 출제 요소.`},{id:"11-1-3",label:"목재마루 (원목·강마루·강화마루)",explanation:`천연 나무 원목을 적절히 얇게 켜거나 가공하여 친환경 목조 바닥 질감을 재현하는 바닥 마감재.

▶ 3대 목재마루 종류 비교 (핵심!)
① 원목마루: 2mm 이상의 비교적 두꺼운 천연 원목 단판을 표면에 얹어 만든 고급 마루. 밟는 감촉과 무늬가 가장 미려하나 수분에 의한 수축 뒤틀림 하자율이 가장 높고 단가가 매우 비쌈.
② 강마루: 여러 겹의 합판 베이스 위에 표면 디자인 시트와 고강도 수지 필름(HPM)을 강하게 압착 접합한 자재. 접착 본드를 바탕 콘크리트에 도포하여 바닥에 완전히 밀착 고정하므로 바닥 난방(온돌)의 열전도율이 우수하고 뒤틀림이 매우 적음.
③ 강화마루: 톱밥을 고압 압축한 고밀도 섬유판(HDF) 위에 나뭇결 디자인 필름을 코팅한 자재. 본드 접착제 없이 마루판 모서리를 요철로 깎아 끼워 결합하는 클릭식 조립 공법으로 시공. 시공이 쉽고 친환경적이나 현가식(떠 있는) 조립 특성상 소음이 발생하기 쉽고 습기에 불어 터져 이격이 벌어지는 하자가 잦음.

★ 시험 포인트
강마루(합판 베이스 + 본드 접착식 시공 = 열전도 우수)와 강화마루(HDF 베이스 + 클릭식 조립 시공 = 틈새 변형 및 소음 발생 우려)의 공법적 차이와 재료적 특징 비교가 빈출.`}]},{id:"11-2",label:"천장",children:[{id:"11-2-1",label:"석고보드",explanation:`소석고를 주원료로 하고 섬유와 보강재를 배합하여 판형으로 압축 성형하고, 양면과 측면을 튼튼한 보드용 종이로 감싸 제조한 건식 벽체 및 천장 마감재.

▶ 물리적 성능 및 특징
• 내화성 및 단열성 우수: 석고 분자 결정체 내에 약 20%의 결정수가 내포되어 있어 화재 시 열을 차단하는 방화 보드로 널리 사용됨.
• 가공성 탁월: 일반 커터칼로 표면 종이를 자른 후 꺾으면 쉽게 절단되므로 현장 시공 속도가 매우 빠르고 곡면 형상도 유연하게 대응 가능.
• 단점: 수분에 극도로 취약함. 습도가 높은 화장실이나 지하실에 일반 보드를 시공하면 눅눅해져 처지고 썩으므로 방수 석고보드(녹색 종이)를 의무 적용함.
• 마감 전처리: 도장(페인트)이나 벽지를 붙이기 전 보드와 보드가 만나는 조인트 부분에 반드시 테이프를 붙이고 퍼티(Putty)를 먹여 표면을 평탄화하여야 이음새 균열을 막음.

★ 시험 포인트
석고보드의 방화 원리(석고 내 결정수의 화재 방지 역할), 칼로 자르는 가공성 장점과 수분 약점, 도장 전 퍼티 마감 처리의 필수적인 바탕처리 단계 이해.`},{id:"11-2-2",label:"텍스",explanation:`광물질 섬유인 암면(Rock Wool) 또는 석고 원료에 유기 바인더를 배합하여 소성한 흡음용 다공질 천장 마감판.

▶ 시공 및 기능적 특징
• 소음 흡수(흡음) 성능 우수: 판 표면에 미세한 불규칙 공극이나 구멍이 뚫려 있어 실내 소리의 반사를 제어하고 소음을 흡수함.
• 설치 방식: 경량 철골 천장틀용 부속 철물인 M-BAR(경량철골 지지대)에 조인트 바를 걸고 텍스를 나사못(피스)이나 핀으로 고정하여 현장 조립함.
• 사무실, 대형 상가, 학교, 공공시설 천장의 가장 표준적인 보급형 마감재.
• 교체성 우수: 손상되거나 오염된 판 부분만 피스를 풀어 개별적으로 신속하게 보수할 수 있음.
• 습기 취약: 누수나 습도가 올라가면 중력 하중과 습기 팽창으로 인해 천장 한가운데가 아래로 불룩하게 처지는 새깅(Sagging) 하자가 우려되므로 주의가 필요함.

★ 시험 포인트
천장 텍스 시공 시 사용되는 천장 구조틀용 주요 철물 명칭(경량철골 C-Channel 및 M-BAR) 및 조이너의 용도, 다공성 재질에 따른 흡음 성능의 특징 기출.`}]},{id:"11-3",label:"벽",children:[{id:"11-3-1",label:"벽지",explanation:`종이나 비닐 시트 뒷면에 전용 벽지풀(밀풀, 수용성 본드)을 도포하여 콘크리트 또는 석고보드 벽 바탕면에 밀착 부착하는 벽체 마감재.

▶ 재료별 특징 및 시공 순서
• 종이벽지(합지): 펄프 종이 2겹을 겹쳐 만든 벽지. 친환경적이고 통기성이 우수하여 실내 습도 조절에 유리하나 내수성이 없어 오염 시 닦이지 않고 찢어지기 쉬움.
• 실크벽지(비닐벽지): 일반 종이 바탕 위에 PVC(폴리염화비닐) 수지를 코팅하고 무늬를 엠보싱 처리한 고급 벽지. 표면이 방수 비닐막이므로 물걸레질을 통해 오염을 손쉽게 제거할 수 있어 실용적이나 통기성이 차단되어 내부 결로 시 곰팡이 유발 가능.
• 시공 절차: 벽체 틈새나 요철을 부직포 등을 벽에서 띄워 붙이는 초배(바탕처리)를 먼저 시행한 후, 그 위에 최종 치장 벽지를 정밀 밀착하여 부착하는 정배(정벌) 순서로 시공함.

★ 시험 포인트
실크벽지의 PVC 코팅 처리에 따른 물걸레 청소 가능(내수성, 오염 저항성) 원리, 도배공정의 조립 순서(바탕고르기 → 초배 → 정배) 숙지.`},{id:"11-3-2",label:"합판",explanation:`나무 원목을 회전 절삭기(Lathe)로 아주 얇게 깎아낸 단판(Veneer)을 나뭇결 방향이 서로 직각이 되도록 교차 적층하여 접착제로 강력 접착한 판재.

▶ 구조적 특징 및 물리 성능
• 수축/팽창 변형 억제: 목재는 결 방향(길이) 수축에 비해 직각(나이테) 방향 수축이 수십 배 큼. 따라서 단판의 나뭇결 방향을 서로 번갈아 직교(90도)하게 교차 부착하여 목재 고유의 방향성 수축 변형을 상호 구속함으로써 치수 안정성을 유지함.
• 강도 균일화: 나뭇결에 따라 쉽게 쪼개지는 원목의 약점을 보완하여 모든 방향에서 균일하고 튼튼한 휨 강도를 확보함.
• 옹이, 썩음 등 자연 목재 결점을 재단 가공 단계에서 완전 공제하여 고른 품질의 대면적 판재 생산이 가능함.
• 적층 두께의 균형을 위해 항상 홀수(3겹, 5겹, 7겹) 단판을 교차하여 대칭으로 접합함 (짝수 겹은 건조 시 비틀림 왜곡 유발).

★ 시험 포인트
합판을 제조할 때 단판의 결을 서로 직교시키고 반드시 홀수 겹으로 구성하여 생산하는 근본적 이유(방향성 변형 편차 상쇄, 강도 균일화, 건조 뒤틀림 변형 방지) 출제율 매우 높음.`}]}]},{id:"12",label:"12. 지붕·커튼월공사",children:[{id:"12-1",label:"지붕공사",children:[{id:"12-1-1",label:"기와지붕",explanation:`점토를 빚어 가마에 고온 소성한 한식 점토 기와 또는 시멘트에 골재를 배합해 프레스로 다진 시멘트 기와를 경사 지붕틀 위에 얹어 비막이를 하는 전통 지붕 공법.

▶ 물리적 성능 및 시공 기준
• 내화성 및 내구성이 매우 우수하여 화재에 견디고 수십 년간 부식 없이 사용 가능.
• 무거운 자중: 기와 자체의 중량이 매우 무거워(시멘트 기와는 1m2당 14장 소요) 지붕 하부의 보, 기둥, 기초 구조체의 구조 계산 시 활하중 및 고정하중을 훨씬 강하게 설계해야 함.
• 지붕 물매 기준: 기와지붕의 경사는 물매 1/3 이상을 표준으로 확보해야 빗물이 기와 틈새로 역류하지 않음 (강풍 지역은 1/2 이상 경사 필요).

▶ 한식 기와 잇기 전문 용어 (암기 필수!)
• 알매흙: 기와 바탕 산자나무나 펠트 위에 기와의 수평과 안착을 위해 얇게 펴 까는 암기와 밑면의 보강 진흙.
• 아귀토: 처마 끝 기와 구멍(막새 자리)에 빗물과 새의 침입을 막기 위해 석회와 진흙 반죽으로 동그랗게 메워 바른 흙.
• 홍두께흙: 수평 암기와 두 장이 만나는 골 사이에 숫기와를 덮기 전 홍두께 모양으로 뭉쳐 놓는 진흙 덩어리.
• 착고/부고: 지붕마루 용마루 하단 기와골에 맞춰 숫기와를 다듬어 옆으로 세워 대는 기와(착고)와 그 위에 추가로 쌓아 올리는 기와(부고).
• 머거불: 용마루 끝마구리에 숫기와를 옆으로 세워 마감한 부위.

★ 시험 포인트
한식기와 잇기 각 용어(알매흙, 아귀토, 홍두께흙, 착고, 부고, 머거불)의 정의 및 시공 위치 쓰기 문제 단골 출제, 1m2당 시멘트기와 표준 소요량(14매) 및 구배 물매 기준(1/3 이상) 필수 암기.`},{id:"12-1-2",label:"금속지붕",explanation:`함석판(아연도강판), 동판(구리판), 알루미늄판 등 다양한 두께의 얇은 금속 판재를 엮어 고정하는 지붕 공법.

▶ 특징 및 재료별 물성
• 경량성 우수: 무게가 기와나 슬래브의 수십 분의 일로 매우 가벼워 초경량 지붕 및 대형 체육관 대스팬 지붕에 최적.
• 열신축 대책(거멀접기): 금속은 온도 변화에 따른 열팽창 신축이 매우 심함. 따라서 지붕판을 바탕 못으로 직접 고정하지 않고 판의 옆면을 한 번 또는 두 번 접어서 서로 물리는 거멀접기(Standing Seam) 공법으로 연결하여 판의 신축 변동을 자연스럽게 허용함.
• 이온화 경향에 의한 부식(갈바닉 부식): 서로 다른 금속(예: 전위차가 큰 동판과 아연판/함석판)이 수분 조건 하에 직접 맞닿으면 전해 작용이 일어나 이온화 경향이 큰 연금속인 아연판이 즉시 부식되어 구멍이 뚫림. 따라서 절대 이종 금속을 직접 접촉시키지 않으며 접촉부에 아스팔트 펠트나 절연 도장을 시공함.

▶ 재료 특징
• 동판: 변소 암모니아 가스에 취약 (산에는 강함).
• 알루미늄판: 해안가 염분에 약함. 알칼리(콘크리트)에 부식되므로 절연 필수.
• 물매 기준: 일반 금속판 지붕은 1/4 이상 확보.

★ 시험 포인트
금속지붕 이음 시 직접 못 고정을 피하고 거멀접기(Flashing)로 결합하는 근본 원인(온도에 의한 금속 신축 팽창 흡수 및 누수 방지), 이온화 경향 순서(Al > Zn > Fe > Pb > Cu)에 따른 금속 간 갈바닉 부식 현상 및 방지 대책 숙지.`},{id:"12-1-3",label:"아스팔트싱글",explanation:`무기질 유리섬유(Glass Fiber) 매트를 심재로 하여 고성능 아스팔트를 양면에 코팅한 후, 표면에 직사광선 차단 및 색상을 위한 채색 돌가루(Granule)를 압착 살포하여 가공한 조립식 지붕재.

▶ 시공성 및 특징
• 초경량성: 지붕 자중이 점토 기와의 약 1/5 수준으로 매우 가벼워 구조 부재 단면을 대폭 절감 가능.
• 시공 단가가 매우 저렴하고 전용 못(Roofing Nail)과 루핑 접착 시트만으로 바탕 합판 위에 신속하게 망치질하여 조립 가능하므로 시공 편리성 최우수.
• 유연성이 있어 아치형 지붕 등 복잡한 기하학적 곡면 지붕에도 들뜸 없이 부착 가능.
• 단점: 접착력을 못과 아스팔트 자체 실란트에 의존하므로 태풍 등 초속 수십 미터의 강풍이 불면 판 가장자리가 들떠서 통째로 찢어져 날아가는 강풍 하자율이 높음.
• 물매 기준: 경사가 완만하면 물이 고이므로 최소 1/3 이상의 물매 구배를 의무 적용함 (강풍 지역일 때는 1/3 미만도 별도 보강 하에 가능).

★ 시험 포인트
아스팔트싱글의 장점(저렴함, 경량성, 곡면 시공 자유)과 한계점(강풍에 의한 들뜸/탈락 취약), 경사지붕 최소 구배 물매 기준(1/3 이상) 확인.`}]},{id:"12-2",label:"커튼월공사",children:[{id:"12-2-1",label:"멀리언방식",explanation:`수직 기둥 역할을 하는 세로 프레임인 멀리언(Mullion, 선대) 부재를 슬래브 구조체에 브래킷과 핀으로 견고히 먼저 고정하고, 그 사이에 수평 띠장 바와 유리창을 끼워 완성하는 현장 조립식 커튼월 공법.

▶ 특징 및 시공성
• 외관 디자인 특징: 외벽에 수직선이 길고 곧게 뻗어 올라가므로 건물의 연직성과 초고층의 높이감을 시각적으로 강하게 어필하는 효과가 있음.
• 수직 멀리언이 슬래브 사이에서 자중 및 전 풍압력을 일차적으로 모두 받아 지탱해야 하므로, 부재의 단면 휨 강성(좌굴 방지) 설계가 대단히 정밀해야 함.
• 수직 골조를 먼저 맞춘 후 수평 부재와 유리를 올리므로 현장 정밀 오차 제어 및 줄눈(실란트 코킹) 방수, 층간 변위(바람/지진에 의한 흔들림) 대응용 슬라이딩 조인트 연결이 공사 품질의 관건이 됨.

★ 시험 포인트
멀리언 방식 커튼월의 공법적 정의(수직 멀리언을 선시공 후 수평부재와 유리 결합), 입면 디자인 특성(수직 상승감 강조) 및 하중 전달 메커니즘 기출.`},{id:"12-2-2",label:"스팬드럴방식",explanation:`각 층 바닥 슬래브 사이의 불투명한 벽체 구간인 수평 스팬드럴(Spandrel) 패널을 외장 입면에 노출하여 수평 프레임을 강조하는 커튼월 공법.

▶ 특징 및 구조적 이점
• 외관 디자인 특징: 가로형 수평 띠가 건물을 둘러싸는 형태로 차분하고 안정감 있는 수평 지향적 미관을 완성함.
• 높은 구조 안전성: 각 층 바닥 슬래브 바로 앞에 수평 프레임이 위치하여 슬래브 지지 브래킷에 직접 하중을 전달하므로 구조적으로 횡압력 지지가 매우 우수함.
• 방화 및 단열성 우수: 초고층 화재 발생 시 상하층 간 개구부를 통한 화염의 연직 확산을 차단하기 위해 층간 스팬드럴 높이를 최소 90cm 이상(건축법 및 시방서 기준) 불연 패널로 채워 방화구획을 형성하기가 매우 유리함. 또한 내부 배수 처리를 위한 응축수 도랑 배출 설계가 용이함.

★ 시험 포인트
스팬드럴 방식의 입면 특징(수평선 부각), 초고층 층간 화재 연소 방지를 위해 확보해야 하는 스팬드럴 내화 구간의 최소 높이 기준(90cm 이상) 암기.`}]},{id:"12-exam",label:"[시험 포인트]",children:[{id:"12-e1",label:"지붕: 기와·금속·아스팔트싱글"},{id:"12-e2",label:"커튼월: 멀리언방식·스팬드럴방식"}]}]},{id:"13",label:"13. 공사관리",children:[{id:"13-1",label:"공정관리",children:[{id:"13-1-1",label:"바차트 (Bar Chart)",explanation:`세로축에는 공정의 세부 작업명(Activity), 가로축에는 공사 일적 타임라인을 나타내고 작업 기간을 굵은 막대(Bar)로 그려 일정의 진행을 표시하는 가장 단순한 횡선식 공정표.

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
3점 추정 시간치(낙관 a, 최빈 m, 비관 b)를 준 후 각 작업의 기대 시간(te)과 표준편차(σ)를 유도하는 계산 문제, CPM(결정론적 1점 추정)과의 공정 특성 비교가 출제 빈도 높음.`}]},{id:"13-1-3",label:"공기단축",explanation:`공사 완료 기한을 준수하거나 준공을 앞당기기 위해, 추가 공사비를 투입하여 주공정선(Critical Path) 상의 작업 시간을 전략적으로 단축하여 공사 총비용을 최적화하는 공정 관리 기법.

▶ 공기 단축의 대원칙 (MCX 공법)
• 반드시 주공정선(Critical Path) 상의 작업 중에서만 단축을 실행해야 함. (비주공정 작업을 단축하면 비용만 날리고 전체 공기는 그대로 유지됨).
• 비용경사(Cost Slope)가 가장 작은(즉, 하루 단축하는 데 추가 비용이 가장 적게 드는) 주공정 작업부터 순차적으로 단축을 실행해야 비용 손실이 최소화됨.
• 비용경사 계산 공식:
  Cost Slope = (급속 공사비 - 정상 공사비) / (정상 공기 - 급속 공기) = 추가 비용 / 단축 일수
• 단축을 진행함에 따라 기존의 비주공정 경로가 새로운 주공정선으로 변하여 다중 주공정선(Multiple Critical Paths)이 형성되면, 두 경로 상의 작업을 동시에 단축해야 전체 공기가 줄어듦.

★ 시험 포인트
주어진 공정 네트워크 네트워크 상에서 각 작업의 Cost Slope를 계산하여 표를 작성하고, 최소 비용 단축 단계별 주공정선 추적 및 총공사비(직접비+간접비)의 최적 균형점(최적공기)을 찾는 복합 계산 문제 출제 대비.`}]},{id:"13-2",label:"품질관리",children:[{id:"13-2-1",label:"관리도 (X-R 관리도)",explanation:`제조 공정 또는 현장에서 채취한 샘플의 품질 데이터를 그래프에 연속적으로 타점하여 공정 품질이 통계적 안정 상태에 있는지 감시하는 계량형 품질 도구.

▶ X-R 관리도의 구조 및 구성선
• 중심선 (CL, Center Line): 품질의 평균 목표값을 나타내는 중심 횡선.
• 관리상한선 (UCL, Upper Control Limit): 품질의 허용 상한 한계. 통계적 3시그마 원리에 의해 UCL = CL + 3σ로 설정.
• 관리하한선 (LCL, Lower Control Limit): 품질의 허용 하한 한계. 통계적으로 LCL = CL - 3σ로 설정.

▶ 품질 이상 유무 판정 기준
• 관리 한계(UCL, LCL) 횡선 외부로 단 1개의 점이라도 이탈하여 찍히면 공정에 명백한 이상이 발생한 것으로 보고 가동 중단 및 원인 분석.
• 관리선 내부에 있더라도 점들이 중심선 위나 아래에 연속하여 치우쳐 나타나는 현상(Run, 연), 점들이 서서히 일방향으로 올라가거나 내려가는 경향(Trend)이 관찰되면 불량의 조기 징후로 분석함.

★ 시험 포인트
관리도의 3대 구성선(UCL, CL, LCL) 정의 및 3시그마 한계 설정 원리 이해, 관리 한계선 내부 타점 시에도 공정 이상을 판정하는 비정상 패턴(Run, 경향) 종류 암기.`},{id:"13-2-2",label:"비파괴검사",children:[{id:"13-2-2-1",label:"방사선검사 (RT)",explanation:`X선 또는 감마선(γ-ray)의 강한 투과 특성을 이용하여 강재 용접부 내부의 결함 유무를 감광 필름상에 흑백 영상으로 투사해 식별하는 파괴 없는 검사 기법.

▶ 물리적 원리 및 특징
• 용접 부위에 방사선을 투과시키면 밀도가 낮은 내부 결함부(기공, 슬래그 혼입, 균열)를 통과한 방사선은 감쇠가 적어 반대쪽 필름을 강하게 감광시켜 검은 흔적으로 투영됨.
• 최대 장점: 용접부 내부 깊숙한 곳의 결함 형상(구형 기공, 선형 슬래그 등)을 육안으로 직관적이고 매우 정밀하게 감별할 수 있으며, 촬영 필름(RT Film)이 영구 보존되어 사후 재검토 및 객관적 품질 검증성이 최우수함.
• 단점: 방사선 노출 누출 위험이 대단히 커 검사 진행 시 안전 통제선을 촘촘히 치고 작업 반경 내 노무자 출입을 엄격히 통제해야 함.

★ 시험 포인트
RT의 용도(용접부 내부 결함 탐지), 검사 결과의 객관성 및 필름 기록 보존성이 타 비파괴검사(UT) 대비 뛰어난 강점을 설명하는 문제가 출제 포인트.`},{id:"13-2-2-2",label:"초음파검사 (UT)",explanation:`초음파 센서(탐촉자)를 강재 용접부 표면에 밀착시킨 후, 고주파 음파를 금속 내부로 주입하고 내부 결함 경계면에서 반사되어 돌아오는 반사파(Echo)의 파형 시간차를 오실로스코프 화면상에서 분석하는 비파괴 검사 기법.

▶ 특징 및 대비 성능
• 평면 결함 검출력 최우수: 두께가 얇은 미세 균열(Crack)이나 용융 불량(Lack of Fusion) 등 방사선(RT)으로 찾기 힘든 면상의 내부 균열 결함 탐지율이 극도로 높음.
• 안전성 및 현장성 우수: 방사선 노출 위험이 전혀 없어 용접 인접 구역에서 동시에 타 작업을 안전하게 병행할 수 있고, 장비가 휴대형으로 매우 작아 비좁은 초고층 철골 현장에서도 검사가 신속히 이루어짐.
• 단점: 검사 결과가 계측기 파형(펄스)으로만 표시되므로, 검사원의 숙련도에 따라 결함 유무 판정에 주관이 개입될 수 있으며 직관적인 현물 영상 기록 보존성이 RT보다 떨어짐.

★ 시험 포인트
초음파검사(UT)가 RT에 비해 가지는 실무적 장점(방사선 위험 없음, 균열 결함 탐지 우수, 장비 경량 기동성)과 단점(검사원 숙련도 의존, 기록 영구 필름 부재) 비교 숙지.`},{id:"13-2-2-3",label:"자분탐상검사 (MT)",explanation:`철, 니켈 등 자성이 강한 강재 용접부에 전기를 통하거나 자석을 대어 강력한 자장을 유도시킨 후, 용접부 표면에 미세한 철가루(자분)를 산포하여 결함 자장 띠로 균열을 식별하는 기법.

▶ 물리적 원리 및 특징
• 용접부 표면 또는 표면 바로 아래(깊이 수 밀리미터 이내의 표면 직하)에 미세 균열이나 기공이 있으면, 자력선이 균열 틈새의 공기 중으로 튀어나와 누설 자장(Magnetic Leakage Field)을 형성.
• 산포된 철가루가 이 누설 자장에 달라붙어 선명한 자분 지시 선을 형성하므로, 육안으로 표면 균열의 형상과 길이를 즉시 쉽게 감별할 수 있음.
• 적용 한계: 반드시 자성을 띠는 강자성체(강재, 철 등)에만 적용할 수 있으며, 알루미늄이나 동, 스테인리스강 등 비자성 금속 부재에는 자기 유도가 불가능하여 시험을 절대 할 수 없음.

★ 시험 포인트
자분탐상검사(MT)의 시험 가능 대상 재질 조건(강자성체 전용), 탐지 한계 깊이(표면 및 표면 직하 결함), 비자성체 적용 불가 조건이 핵심 출제 포인트.`},{id:"13-2-2-4",label:"침투탐상검사 (PT)",explanation:`용접부 표면에 붉은색 염료인 침투액을 뿌려 표면 균열 틈새로 스며들게 한 후, 표면의 잉크를 깨끗이 닦아내고 흰색 현상액 분말을 뿌려 틈새 속 붉은 잉크가 위로 빨려 나와 번지는 색상 대비로 결함을 확인하는 기법.

▶ 시공 단계 (순서 기출!)
① 표면 전처리 (오염 제거) → ② 침투액 도포 (약 10~20분간 스며들게 대기) → ③ 잉크 세척 (표면 잉크만 물/용제로 제거) → ④ 현상제 도포 (흰 분말 도포) → ⑤ 관찰 및 판정 (적색 침투선 확인) → ⑥ 최종 후처리.

▶ 특징 및 한계
• 오직 표면 외부로 노출되어 입구가 뚫려 있는 결함(Open Crack)만 검사할 수 있으며, 철판 속에 완전히 갇혀 있는 내부 기공은 침투액이 들어가지 못해 탐지 불가.
• 재질 무제한: 금속은 물론 자석이 안 통하는 알루미늄, 동판, 유리, 도자기, 플라스틱, 세라믹 등 표면에 구멍이 없는 거의 모든 단단한 재료에 자유롭게 적용 가능. 비용이 가장 저렴함.

★ 시험 포인트
침투탐상검사(PT)의 시공 순서 나열 문제, 오직 표면 노출 결함만 탐지 가능하다는 단점과 금속/비금속 재질 제약 없이 저렴하게 적용 가능하다는 최대 장점 출제 대비.`}]},{id:"13-2-3",label:"콘크리트 시험 (슬럼프·공기량·압축강도)",explanation:`콘크리트 구조물의 구조적 안전성과 소요 강도를 확보하기 위해 굳지 않은 상태의 점성 및 공기량과 굳은 후의 최종 압축강도를 검증하는 현장 3대 시험.

▶ 굳지 않은 콘크리트 시험 2종
① 슬럼프 시험 (Slump Test): 반죽의 끈기(시공 연도) 측정. 슬럼프 콘(상부 φ10cm, 하부 φ20cm, 높이 30cm)에 콘크리트를 3층으로 나누어 담고 다짐봉으로 층마다 25회 다진 후 콘을 수직으로 들어 올려 주저앉은 중심 높이(cm)를 측정. 일반 구조물은 8~15cm 합격 기준.
② 공기량 시험: 동결융해 저항성 향상을 위한 미세 기포 함유량 측정. 공기량 측정기(워싱턴형) 사용. 표준 기준값 4~7%. 공기량 1% 상승 시 슬럼프는 약 2cm 증가하지만 압축강도는 약 4~5% 저하하므로 상한 관리 철저.

▶ 굳은 콘크리트 압축강도 시험
• 공시체 제작: 직경 15cm × 높이 30cm (또는 직경 10cm × 높이 20cm) 원기둥형 강제 몰드에 다져 제작.
• 양생 및 재령: 20±2°C 수조 속에서 28일간 표준 수중 양생을 거친 후 압축 시험기로 압축 파괴 강도 측정.
• 합격 판정: 3개 공시체 강도 평균값이 설계기준강도(fck) 이상이고, 개별 시험값이 fck의 85% 이상(또는 fck - 3.5MPa 이상)을 동시에 만족해야 함.

★ 시험 포인트
슬럼프 콘 규격 치수 및 3층 25회 다짐법, 공기량이 콘크리트 품질에 미치는 양면성(1% 상승 시 강도 5% 저하 비례 관계), 압축강도 공시체 규격 및 표준 재령(28일) 기출 암기.`}]},{id:"13-3",label:"안전관리",explanation:`건설 현장 내에 도사리고 있는 불안전한 행동이나 불량한 기계 장치 상태를 통계적으로 모니터링하여 인명 피해 및 산업 재해를 방지하는 체계적 보건 관리 활동.

▶ 하인리히의 재해 예방 법칙 (1:29:300 법칙 - 핵심!)
미국의 하인리히가 수많은 산업 재해 통계를 분석하여 밝혀낸 법칙으로, 대형 재해는 우연히 갑자기 일어나는 것이 아니라 사전에 반드시 경미한 징후들이 누적되어 발생한다는 원리.
• 1건의 중상해 (사망 또는 치명적 중상사고)가 발생하기 전에는
• 29건의 경상해 (가벼운 부상을 입는 경미한 재해)가 이미 스쳐 지나갔고
• 300건의 무재해 사고 (상해를 입지는 않았으나 위험한 상태를 목격한 아차사고, Near Miss)가 사전에 반드시 발생함.
• 실무 대책: 현장의 사소한 아차사고(300번) 유발 요인인 불안전한 환경과 행동을 차단하고 신속 보수함으로써, 대형 참사(1번)의 발생 확률을 원천적으로 제로화하는 징후 관리가 안전관리의 핵심임.

★ 시험 포인트
하인리히 법칙의 재해 통계 비율(1:29:300) 각각의 정의와 숫자 쓰기, 아차사고(무재해 사고)를 제어하는 것이 대형 참사 방지의 근본 대책이라는 안전 원리 기출.`},{id:"13-exam",label:"[시험 포인트]",children:[{id:"13-e1",label:"3대 관리: 원가·공정·품질"},{id:"13-e2",label:"5대 관리: +안전·환경"},{id:"13-e3",label:"노무자: 직용·정용·날품"},{id:"13-e4",label:"도급: 일식·분할·공동도급·턴키"},{id:"13-e5",label:"VE(가치공학) 특징"},{id:"13-e6",label:"EC화·CIC·CALS·PMIS"},{id:"13-e7",label:"CPM·PERT — 플로트·주공정선"},{id:"13-e8",label:"품질도구: X-R관리도·파레토·히스토그램"}]}]},{id:"14",label:"14. 목공사",children:[{id:"14-1",label:"목재의 결점",children:[{id:"14-1-1",label:"옹이",explanation:`나뭇가지의 성장이 나무 줄기의 비대 성장 과정에서 체간 조직 속으로 파묻혀 들어가 옹이 나이테로 단단히 고정된 부분.

▶ 종류 및 구조적 결함 특징
• 생옹이: 나뭇가지가 살아있는 상태에서 몸통 나무와 유기적으로 나이테가 결합되어 밀착된 옹이. 목공 가구 제작 시 수려한 나뭇결 디자인으로 활용되나 구조 강도는 다소 감소함.
• 죽은옹이: 가지가 말라 죽은 후 줄기가 감싸고 돌아가면서 자란 것으로, 옹이 알갱이가 목질 모재와 결합되지 않고 겉돌아 건조 시 쉽게 탈락하여 구멍이 뻥 뚫리는 하자 옹이.
• 강도 저하: 옹이가 박힌 부위는 나뭇결(섬유 방향)이 휘어지고 연속성이 끊어져 인장강도가 크게 급감함. 특히 보(Beam) 부재 하단 인장 응력이 작용하는 부위나 인장 철물 결합부에 옹이가 있으면 부재 파괴가 일어나므로 구조재 사용 시 옹이 제거 선별이 필수적임.

★ 시험 포인트
옹이가 목재 강도 중 가장 치명적으로 떨어뜨리는 강도의 종류(인장강도 감소율 최대), 생옹이와 죽은옹이의 구조적 차이 구별 문제 출제 대비.`},{id:"14-1-2",label:"갈라짐",explanation:`목재를 건조하는 과정에서 수분 증발에 따른 체적 수축율 편차로 인해, 약한 나뭇결 틈새를 따라 목재가 쪼개지거나 할렬이 발생하는 결함.

▶ 원인 및 역학적 발생 원리
• 수축률의 방향성 편차: 목재는 건조 시 방향마다 수축량이 크게 다름. 나이테 접선 방향 수축률(약 8~10%)이 지름 반경 방향 수축률(약 4~5%)에 비해 거의 2배 가까이 크고, 섬유 길이 방향 수축률(0.1~0.2%)은 거의 없음.
• 이로 인해 건조 과정에서 나무 바깥쪽 외주부(접선 수축)가 내부(반경 수축)에 비해 과도하게 쪼그라들려다 힘을 견디지 못하고 외부에서 중심부를 향해 세로 방향으로 길게 갈라지는 할렬(Split)을 유발함.
• 구조 하자가 일어난 갈라진 목재는 부재의 전단 응력 저항 성능을 현저히 떨어뜨려 균열 붕괴 하자를 초래함.

★ 시험 포인트
목재가 건조 시 갈라지는 근본적인 원인을 수축 방향 편차(접선 방향 수축률 > 반경 방향 수축률)와 연계하여 서술하는 능력 평가 출제.`},{id:"14-1-3",label:"껍질박이",explanation:`나무가 자라는 성장 도중 태풍에 의한 수목 굽힘, 또는 동물의 흠집 등으로 상처를 입은 후 상처 주위의 외피 껍질(수피) 조직이 상처 복구 세포에 감싸여 나무 몸통 내부 옹이 틈새에 말려 들어간 결함.

▶ 특징 및 하자 요소
• 껍질박이가 들어간 부재는 단면 상에서 섬유 조직이 뚝 끊겨 서로 달라붙지 않고 어긋나 있는 불연속 결함을 유발함.
• 휨 강도 및 전단 강도를 현저히 낮추고 목재의 건조 왜곡을 심화시킴.
• 마감 품질 하락: 가공 시 껍질이 부스러져 떨어져 나가고 수지가 흘러나와 도장(페인트, 바니쉬) 시 마감층이 박리되거나 검게 번져 미관을 심각하게 손상시킴. 가설재용을 제외한 고급 수장 인테리어재에서는 불합격 처리됨.

★ 시험 포인트
껍질박이의 형성 메커니즘(수목 성장 중 외피 조직의 내부 함몰)과 부재 단면의 구조적 불연속성에 의한 강도 저하 하자 이해.`},{id:"14-1-4",label:"썩음",explanation:`습한 환경에서 활동하는 목재 부패균(목재부후균)이 목재 내부에 침투하여 리스, 리그닌, 섬유소 등의 다당류를 갉아먹어 분해함으로써 목재 고유의 강도와 점성을 완전히 상실시키고 손으로 누르면 가루로 부스러지게 만드는 부패 병해.

▶ 부패균 생장의 4대 필수 조건 (무조건 암기!)
① 온도: 20°C ~ 35°C (미생물 최적 활동 온도).
② 수분: 목재 내부 함수율 20% 이상 상태 유지.
③ 산소 (공기): 부패균의 호흡을 위한 산소 공급.
④ 영양원: 목재의 섬유소 성분 자체.
• 방지 대책: 4대 조건 중 하나만 확실히 차단하면 생장이 멈춤. 가장 완벽한 방지책은 목재를 철저히 건조하여 항상 함수율을 섬유포화점 이하(15% 이하)로 관리하는 것이며, 크레오소트유 등 화학 약제로 영양원을 소독 방부 처리함.

★ 시험 포인트
목재 부패균(부후균) 생장의 4대 필수 조건(온도, 수분, 공기, 영양) 쓰기, 부패 예방을 위한 함수율 기준 관리 한계치(15% 이하) 수치 암기.`}]},{id:"14-2",label:"함수율·섬유포화점 (28~30%)",explanation:`목재 세포 내부에 존재하는 수분의 비율과 목재의 수축팽창, 균열, 휨 강도 변동 간의 한계 물리적 상관관계.

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
섬유포화점(FSP)의 정확한 백분율 수치(28~30%) 및 물리적 의미, FSP 이하 조건에서 함수율 감소 시 나타나는 강도(증가)와 부피(수축) 변화의 반비례 특징 서술, 목재 방향별 수축율 크기 비교(접선>반경>섬유) 기출.`},{id:"14-3",label:"이음과 맞춤",children:[{id:"14-3-1",label:"장부이음",explanation:`두 목재 부재를 결합할 때, 한 부재 끝단에 튀어나온 촉(Tenon, 장부)을 정밀하게 깎고 상대 부재 측면에 촉 크기와 정합하는 홈구멍(Mortise, 장부구멍)을 파서 끼워 맞추는 기계적 접합 공법.

▶ 공학적 특징 및 적용
• 금속 못이나 인공 접착 본드를 쓰지 않고도, 나무 간의 마찰 면 밀착과 요철의 쐐기 결합력만으로 외력에 저항하는 구조를 형성.
• 결합부의 전단력과 휨 변형 저항이 매우 우수하여 전통 한옥의 굵은 기둥과 보(Beam) 접합부, 수평 도리 맞춤, 가구 문짝 모서리 프레임 접합에 표준으로 사용됨.
• 시공 시 장부 촉의 단면 폭이 너무 가늘면 전단 파괴가 일어나고, 너무 헐거우면 접합부 유동 하자가 발생하므로 정밀한 끌질과 톱질 가공 기술이 절대적으로 요구됨.

★ 시험 포인트
장부이음의 역학적 원리(쐐기 요철 및 마찰면 결합), 대표적인 활용 부위(목조 가구 모서리, 전통 한옥 보-기둥 맞춤) 숙지.`},{id:"14-3-2",label:"반턱이음",explanation:`두 목재의 이음부 단면 두께를 각각 정확히 절반인 50%(1/2 두께)씩 평평하게 따내어 깎아낸 후, 두 깎인 면을 위아래로 포개어 겹쳐 맞물리는 겹침 접합 공법.

▶ 특징 및 구조적 강성
• 이음 완료 후 전체 목재의 외경 두께와 원래 축선 라인이 일정하게 그대로 겹쳐 흘러가므로 외관 마무리 가공성이 매우 깔끔하고 편리함.
• 가설 비계 다리목 연결, 경량 목구조의 비내력벽 뼈대 조립에 신속하고 흔하게 쓰임.
• 치명적 구조 한계: 접합면이 가로로 얹혀 있을 뿐이어서 잡아당기는 인장력(Tension)이 가해지면 즉시 이음새가 가로로 미끄러져 빠져버림. 따라서 구조용 내력 부재로 쓸 때는 접합부 관통 볼트를 체결하거나 보강 목못, 철판 피스 꺾쇠로 이음 중심부를 인장 보강해야 함.

★ 시험 포인트
반턱이음의 단면 가공 한계(두께 50% 공제), 인장 하중 취약점에 따른 철물(못, 볼트, 꺾쇠) 보강의 필수성 이해.`},{id:"14-3-3",label:"주먹장이음",explanation:`목재 이음 단부의 접합 촉 형상을 나비 날개 또는 주먹을 쥔 손가락 형상의 비스듬한 사다리꼴 쐐기 모양(Dovetail)으로 가공하여 조립하는 고강도 맞춤 접합 공법.

▶ 구조적 특징 및 장점
• 인장 빠짐 방지 기능 최우수: 촉의 형상 자체가 안쪽은 넓고 입구는 좁게 빗깎여 있어, 결합 후 목재의 연장 축선 방향으로 인장력(잡아당기는 힘)이 가해져도 쐐기턱의 물리적 걸림 작용 때문에 절대로 접합부가 빠지지 않음.
• 별도의 못 보강 없이도 매우 높은 구조적 인장 부착 강도를 구현.
• 적용 부위: 가구 서랍장 앞판-옆판 모서리 조립(서랍 당길 때 안 빠짐), 전통 가옥의 지붕 처마도리와 서까래 보의 접합부, 넓은 판재를 옆으로 잇는 쪽매 접합.

★ 시험 포인트
주먹장이음의 사다리꼴 쐐기 형상 특징, 당기는 횡 인장력에 대해 물리적으로 이탈이 방지되는 역학적 강점 및 적용부위(서랍 모서리, 도리 접합) 암기.`}]},{id:"14-4",label:"방부·방충 처리법",explanation:`목재를 야외 습기 조건에서 갉아먹는 미생물 부패균이나 흰개미 등의 목재 해충 침입을 영구적으로 방지하기 위해 화학 방부 약제를 목재 세포에 주입하거나 표면 처리하는 기법.

▶ 표준 3대 방부 시공법
① 가압주입법 (가장 중요!): 밀폐된 고압 챔버 탱크에 목재를 입고한 후 내부 공기를 빼 감압시키고, 탱크 내에 고농도 방부액(크레오소트 오일, 수용성 구리 아연 화합물)을 주입한 뒤 수 기압의 고압을 가해 약제를 목재 내부 세포 심부까지 깊숙이 완전 충전 관입시키는 공법. 가장 오래가고 확실한 반영구적 표준 공법.
② 표면탄화법: 토치나 가열기를 이용해 목재의 외부 표면을 약 3mm ~ 5mm 두께로 그슬려 시꺼먼 숯(탄화막)을 만듦. 숯은 균류가 먹을 수 있는 유기 영양분이 전혀 없으므로 균 생장을 원천 차단. 한옥 하부 기둥 기초 안착부에 적용.
③ 도포법 및 침지법: 붓이나 롤러로 표면에 방부액을 수회 칠하거나 상압 방부조에 침지하는 방식. 가압법에 비해 약제 침투 깊이가 얕아 외부 비바람에 씻겨 나가므로 주기적으로 칠을 갱신해야 함.

★ 시험 포인트
목재 방부 공법 중 영구적인 침투 효과를 자랑하는 표준 공법 명칭(가압주입법)과 방부 오일(크레오소트유), 목재를 그슬려 숯으로 만드는 공법(표면탄화법) 및 탄화 두께 기준(3~5mm) 기출.`},{id:"14-exam",label:"[시험 포인트]",children:[{id:"14-e1",label:"결점: 옹이·갈라짐·껍질박이·썩음"},{id:"14-e2",label:"섬유포화점 28~30%"},{id:"14-e3",label:"이음과 맞춤 종류"},{id:"14-e4",label:"방부·방충 처리법"}]}]},{id:"15",label:"15. 건축적산",children:[{id:"15-1",label:"수량산출 원칙",explanation:`설계도면과 표준 품셈 기준에 의거하여 건축물을 시공하는 데 소요되는 원자재 재료량 및 공사인력 품셈 수량을 공종별 규칙에 맞춰 정확하게 계산하는 적산(Quantity Survey)의 기본 원칙.

▶ 정미량과 소요량의 차이 (핵심!)
• 정미량 (Net Quantity): 설계도면에 명기된 치수 라인 그대로 계산해 낸 건물 골조 내에 실제로 완전히 고정되어 남는 자재의 순수 체적/면적/중량 수량.
• 소요량 (Gross Quantity): 정미량 + 재료 할증량(운반 손실, 절단 조각 하자, 시공 오차로 소모되어 잉여 구입해야 하는 마진량).
  - 공식: 소요량 = 정미량 × (1 + 할증률)

▶ 주요 자재 표준 할증률 (암기율 100%!)
• 유리: 1%
• 시멘트, 페인트(도료): 2%
• 이형 철근, 붉은 벽돌, 자기질/도기질 타일, 내화 벽돌: 3%
• 시멘트 블록: 4%
• 원형 철근, 시멘트 기와, 목재(각재), 고장력 볼트, 리벳, 경량형강: 5%
• 대형 형강(강재): 7%
• 일반 합판, 강판(플레이트), 단열재, 석재(정형돌): 10%

★ 시험 포인트
정미량과 소요량의 공식적 차이 서술, 실기 단골 자재 할증률 수치 쓰기(이형철근 3%, 원형철근 5%, 붉은벽돌 3%, 시멘트블록 4%, 합판 10%, 유리 1%) 무조건 암기.`},{id:"15-2",label:"공종별 적산",children:[{id:"15-2-1",label:"콘크리트 적산",explanation:`구조 설계도면상의 기초, 기둥, 보, 바닥 슬래브의 가로×세로×높이 치수를 정합 계산하여 현장 타설에 필요한 굳지 않은 콘크리트(레미콘)의 총 체적(㎥) 수량을 구하는 적산 작업.

▶ 콘크리트 수량 산출의 기본 원칙
• 중복/누락 방지 순서: 반드시 아래에서 위로, 즉 기초 → 기둥 → 보 → 슬래브 → 벽 순서로 전개하여 중복 계산을 철저히 방지함.
• 부재 간 중첩 공제 우선순위:
  ① 기둥과 보가 접하는 부분: 기둥의 체적을 먼저 100% 산출하고, 보의 길이는 기둥 간의 순수 안목거리(유효길이)를 기준으로 하여 보 체적을 구함 (기둥 우선 원칙).
  ② 기둥과 슬래브 접합부: 기둥의 높이를 바닥 슬래브 두께를 뺀 안목 높이로 산출하여 기둥 체적을 구함.
  ③ 보와 슬래브 접합부: 보의 단면 높이(보춤)에서 슬래브 두께를 뺀 춤(Depth)만 보의 단면적으로 하여 체적을 계산함 (슬래브 우선 원칙).

★ 시험 포인트
각 골조 부재 간의 체적 중첩 부분 처리 시 기둥 우선 원칙(보 유효길이 산정 시 기둥 외경 공제), 보-슬래브 접합부 슬래브 두께 공제법의 개념을 묻는 서술 및 산출식 대입 기출.`},{id:"15-2-2",label:"철근 적산",explanation:`콘크리트 구조체 내부에 배근되는 각 철근 규격(직경)별 도면상 총 연장 길이(m)를 계산하고, 여기에 철근의 직경별 단위중량(kg/m)을 곱해 최종 소요 총 톤수(ton)를 산출하는 적산 작업.

▶ 철근 수량 산출 계산 구조
• 총 길이 = (도면상 부재 단일 철근 배근 길이 + 양단 정착 길이 + 중간 겹침이음 길이) × 배근 가닥수.
• 철근의 중량 산정: 철근은 1m당 무게가 직경마다 공칭 규격화되어 있음 (예: D10 = 0.56kg/m, D13 = 0.995kg/m, D19 = 2.23kg/m).
  - 공식: 총 중량(kg) = 규격별 총 연장 길이(m) × 직경별 단위중량(kg/m)
• 최종 철근 소요량(구입량) 계산: 위에서 산출한 철근 총 중량 정미량에 이형철근 할증률 3%를 곱해 할증 중량을 최종 합산 가산함.

★ 시험 포인트
도면 조건(부재 치수 및 배근 간격, 이음/정착 길이 배수)을 준 후 규격별 철근의 정미 중량(kg) 및 3% 할증을 반영한 최종 철근 소요 중량(ton)을 산정하는 고배점 계산 문제 기출.`},{id:"15-2-3",label:"거푸집 적산",explanation:`콘크리트 타설 시 수화 반응 중 발생하는 액성 측압과 상부 하중을 버티는 형틀인 거푸집의 실제 소요 소요 표면적(㎡)을 산출하는 적산 작업.

▶ 거푸집 면적 산정 및 공제 규칙
• 산정 면적: 거푸집은 굳지 않은 콘크리트 액체 표면과 직접 물리적으로 접촉하는 거푸집판의 표면적 합계로 계산함.
• 공제하지 않는 면적 (시험 출제 100%!):
  - 구조물 내에 있는 1m2 이하의 소형 개구부(소형 창문, 전선관 구멍 등) 면적은 산출 번잡 방지를 위해 거푸집 산출 면적에서 일절 공제하지 않음.
  - 콘크리트 속에 묻히는 철근의 체적이나 말뚝 머리 면적 등도 공제 대상에서 제외.
• 중복 공제: 기둥과 보, 보와 슬래브가 만나서 거푸집이 닿지 않는 면적은 보/슬래브 면적 산출 시 접합 단면적만큼 확실하게 차감 공제함.
• 수량 계산 단위: m2 단위로 산출하며 소요량 계산 시 거푸집용 합판 할증률 10% 가산.

★ 시험 포인트
거푸집 면적 계산 시 개구부 차감의 한계 기준(1m2 이하 개구부 공제 안 함) 수치 쓰기, 기둥-보 접합부 거푸집 차감법 기준 출제 대비.`},{id:"15-2-4",label:"조적 적산",explanation:`벽돌, 블록, 타일을 쌓거나 붙이기 위해 도면의 벽 면적을 기준으로 소요되는 조적 자재의 매수(장수)를 산출하는 적산 작업.

▶ 벽돌 1m2당 정미 소요 매수 (표준형 190×90×57mm, 줄눈 10mm 기준 - 암기 필수!)
• 0.5B 쌓기 (벽두께 90mm): 75매 / m2
• 1.0B 쌓기 (벽두께 190mm): 149매 / m2
• 1.5B 쌓기 (벽두께 290mm): 224매 / m2
• 2.0B 쌓기 (벽두께 390mm): 298매 / m2
• 벽돌 바닥 깔기: 모로 세워 깔기 75매/m2, 평평하게 깔기 50매/m2.
• 시멘트 블록 쌓기 (390×190×190mm 기준): 1m2당 13매 소요.

▶ 최종 반입 수량 계산식
• 최종 소요 매수 = (벽면적 × 두께별 1m2당 매수) × (1 + 할증률)
  - 할증률 기준: 시멘트 벽돌 5%, 점토(치장/붉은) 벽돌 3%, 시멘트 블록 4%.
• 타일 수량: 1m2당 매수 = 1 / [(타일 크기 + 줄눈) × (타일 크기 + 줄눈)]. 최종 소요량은 자기타일 할증률 3% 가산.

★ 시험 포인트
벽두께(0.5B, 1.0B, 1.5B)별 1m2당 기본 소요 벽돌 매수 암기 대입, 시멘트벽돌(할증 5%)과 점토벽돌(할증 3%)의 할증률 차이를 대입하여 창문 면적(1m2 초과)을 제외한 순수 벽체 조적 소요 매수를 계산하는 실기 문제 출제 1순위.`}]},{id:"15-exam",label:"[시험 포인트]",children:[{id:"15-e1",label:"적산총칙: 수량산출 원칙"},{id:"15-e2",label:"공종별: 콘크리트·철근·거푸집·조적"}]}]}]};var zu,Yp;function sf(){if(Yp)return zu;Yp=1;var n="\0",r="\0",o="";class s{constructor(m){Ue(this,"_isDirected",!0);Ue(this,"_isMultigraph",!1);Ue(this,"_isCompound",!1);Ue(this,"_label");Ue(this,"_defaultNodeLabelFn",()=>{});Ue(this,"_defaultEdgeLabelFn",()=>{});Ue(this,"_nodes",{});Ue(this,"_in",{});Ue(this,"_preds",{});Ue(this,"_out",{});Ue(this,"_sucs",{});Ue(this,"_edgeObjs",{});Ue(this,"_edgeLabels",{});Ue(this,"_nodeCount",0);Ue(this,"_edgeCount",0);Ue(this,"_parent");Ue(this,"_children");m&&(this._isDirected=Object.hasOwn(m,"directed")?m.directed:!0,this._isMultigraph=Object.hasOwn(m,"multigraph")?m.multigraph:!1,this._isCompound=Object.hasOwn(m,"compound")?m.compound:!1),this._isCompound&&(this._parent={},this._children={},this._children[r]={})}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(m){return this._label=m,this}graph(){return this._label}setDefaultNodeLabel(m){return this._defaultNodeLabelFn=m,typeof m!="function"&&(this._defaultNodeLabelFn=()=>m),this}nodeCount(){return this._nodeCount}nodes(){return Object.keys(this._nodes)}sources(){var m=this;return this.nodes().filter(h=>Object.keys(m._in[h]).length===0)}sinks(){var m=this;return this.nodes().filter(h=>Object.keys(m._out[h]).length===0)}setNodes(m,h){var v=arguments,w=this;return m.forEach(function(x){v.length>1?w.setNode(x,h):w.setNode(x)}),this}setNode(m,h){return Object.hasOwn(this._nodes,m)?(arguments.length>1&&(this._nodes[m]=h),this):(this._nodes[m]=arguments.length>1?h:this._defaultNodeLabelFn(m),this._isCompound&&(this._parent[m]=r,this._children[m]={},this._children[r][m]=!0),this._in[m]={},this._preds[m]={},this._out[m]={},this._sucs[m]={},++this._nodeCount,this)}node(m){return this._nodes[m]}hasNode(m){return Object.hasOwn(this._nodes,m)}removeNode(m){var h=this;if(Object.hasOwn(this._nodes,m)){var v=w=>h.removeEdge(h._edgeObjs[w]);delete this._nodes[m],this._isCompound&&(this._removeFromParentsChildList(m),delete this._parent[m],this.children(m).forEach(function(w){h.setParent(w)}),delete this._children[m]),Object.keys(this._in[m]).forEach(v),delete this._in[m],delete this._preds[m],Object.keys(this._out[m]).forEach(v),delete this._out[m],delete this._sucs[m],--this._nodeCount}return this}setParent(m,h){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(h===void 0)h=r;else{h+="";for(var v=h;v!==void 0;v=this.parent(v))if(v===m)throw new Error("Setting "+h+" as parent of "+m+" would create a cycle");this.setNode(h)}return this.setNode(m),this._removeFromParentsChildList(m),this._parent[m]=h,this._children[h][m]=!0,this}_removeFromParentsChildList(m){delete this._children[this._parent[m]][m]}parent(m){if(this._isCompound){var h=this._parent[m];if(h!==r)return h}}children(m=r){if(this._isCompound){var h=this._children[m];if(h)return Object.keys(h)}else{if(m===r)return this.nodes();if(this.hasNode(m))return[]}}predecessors(m){var h=this._preds[m];if(h)return Object.keys(h)}successors(m){var h=this._sucs[m];if(h)return Object.keys(h)}neighbors(m){var h=this.predecessors(m);if(h){const w=new Set(h);for(var v of this.successors(m))w.add(v);return Array.from(w.values())}}isLeaf(m){var h;return this.isDirected()?h=this.successors(m):h=this.neighbors(m),h.length===0}filterNodes(m){var h=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});h.setGraph(this.graph());var v=this;Object.entries(this._nodes).forEach(function([C,E]){m(C)&&h.setNode(C,E)}),Object.values(this._edgeObjs).forEach(function(C){h.hasNode(C.v)&&h.hasNode(C.w)&&h.setEdge(C,v.edge(C))});var w={};function x(C){var E=v.parent(C);return E===void 0||h.hasNode(E)?(w[C]=E,E):E in w?w[E]:x(E)}return this._isCompound&&h.nodes().forEach(C=>h.setParent(C,x(C))),h}setDefaultEdgeLabel(m){return this._defaultEdgeLabelFn=m,typeof m!="function"&&(this._defaultEdgeLabelFn=()=>m),this}edgeCount(){return this._edgeCount}edges(){return Object.values(this._edgeObjs)}setPath(m,h){var v=this,w=arguments;return m.reduce(function(x,C){return w.length>1?v.setEdge(x,C,h):v.setEdge(x,C),C}),this}setEdge(){var m,h,v,w,x=!1,C=arguments[0];typeof C=="object"&&C!==null&&"v"in C?(m=C.v,h=C.w,v=C.name,arguments.length===2&&(w=arguments[1],x=!0)):(m=C,h=arguments[1],v=arguments[3],arguments.length>2&&(w=arguments[2],x=!0)),m=""+m,h=""+h,v!==void 0&&(v=""+v);var E=u(this._isDirected,m,h,v);if(Object.hasOwn(this._edgeLabels,E))return x&&(this._edgeLabels[E]=w),this;if(v!==void 0&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(m),this.setNode(h),this._edgeLabels[E]=x?w:this._defaultEdgeLabelFn(m,h,v);var _=f(this._isDirected,m,h,v);return m=_.v,h=_.w,Object.freeze(_),this._edgeObjs[E]=_,l(this._preds[h],m),l(this._sucs[m],h),this._in[h][E]=_,this._out[m][E]=_,this._edgeCount++,this}edge(m,h,v){var w=arguments.length===1?p(this._isDirected,arguments[0]):u(this._isDirected,m,h,v);return this._edgeLabels[w]}edgeAsObj(){const m=this.edge(...arguments);return typeof m!="object"?{label:m}:m}hasEdge(m,h,v){var w=arguments.length===1?p(this._isDirected,arguments[0]):u(this._isDirected,m,h,v);return Object.hasOwn(this._edgeLabels,w)}removeEdge(m,h,v){var w=arguments.length===1?p(this._isDirected,arguments[0]):u(this._isDirected,m,h,v),x=this._edgeObjs[w];return x&&(m=x.v,h=x.w,delete this._edgeLabels[w],delete this._edgeObjs[w],c(this._preds[h],m),c(this._sucs[m],h),delete this._in[h][w],delete this._out[m][w],this._edgeCount--),this}inEdges(m,h){var v=this._in[m];if(v){var w=Object.values(v);return h?w.filter(x=>x.v===h):w}}outEdges(m,h){var v=this._out[m];if(v){var w=Object.values(v);return h?w.filter(x=>x.w===h):w}}nodeEdges(m,h){var v=this.inEdges(m,h);if(v)return v.concat(this.outEdges(m,h))}}function l(g,m){g[m]?g[m]++:g[m]=1}function c(g,m){--g[m]||delete g[m]}function u(g,m,h,v){var w=""+m,x=""+h;if(!g&&w>x){var C=w;w=x,x=C}return w+o+x+o+(v===void 0?n:v)}function f(g,m,h,v){var w=""+m,x=""+h;if(!g&&w>x){var C=w;w=x,x=C}var E={v:w,w:x};return v&&(E.name=v),E}function p(g,m){return u(g,m.v,m.w,m.name)}return zu=s,zu}var Du,Xp;function z_(){return Xp||(Xp=1,Du="2.2.4"),Du}var Au,Gp;function D_(){return Gp||(Gp=1,Au={Graph:sf(),version:z_()}),Au}var Ou,Qp;function A_(){if(Qp)return Ou;Qp=1;var n=sf();Ou={write:r,read:l};function r(c){var u={options:{directed:c.isDirected(),multigraph:c.isMultigraph(),compound:c.isCompound()},nodes:o(c),edges:s(c)};return c.graph()!==void 0&&(u.value=structuredClone(c.graph())),u}function o(c){return c.nodes().map(function(u){var f=c.node(u),p=c.parent(u),g={v:u};return f!==void 0&&(g.value=f),p!==void 0&&(g.parent=p),g})}function s(c){return c.edges().map(function(u){var f=c.edge(u),p={v:u.v,w:u.w};return u.name!==void 0&&(p.name=u.name),f!==void 0&&(p.value=f),p})}function l(c){var u=new n(c.options).setGraph(c.value);return c.nodes.forEach(function(f){u.setNode(f.v,f.value),f.parent&&u.setParent(f.v,f.parent)}),c.edges.forEach(function(f){u.setEdge({v:f.v,w:f.w,name:f.name},f.value)}),u}return Ou}var Fu,Kp;function O_(){if(Kp)return Fu;Kp=1,Fu=n;function n(r){var o={},s=[],l;function c(u){Object.hasOwn(o,u)||(o[u]=!0,l.push(u),r.successors(u).forEach(c),r.predecessors(u).forEach(c))}return r.nodes().forEach(function(u){l=[],c(u),l.length&&s.push(l)}),s}return Fu}var ju,Zp;function Mg(){if(Zp)return ju;Zp=1;class n{constructor(){Ue(this,"_arr",[]);Ue(this,"_keyIndices",{})}size(){return this._arr.length}keys(){return this._arr.map(function(o){return o.key})}has(o){return Object.hasOwn(this._keyIndices,o)}priority(o){var s=this._keyIndices[o];if(s!==void 0)return this._arr[s].priority}min(){if(this.size()===0)throw new Error("Queue underflow");return this._arr[0].key}add(o,s){var l=this._keyIndices;if(o=String(o),!Object.hasOwn(l,o)){var c=this._arr,u=c.length;return l[o]=u,c.push({key:o,priority:s}),this._decrease(u),!0}return!1}removeMin(){this._swap(0,this._arr.length-1);var o=this._arr.pop();return delete this._keyIndices[o.key],this._heapify(0),o.key}decrease(o,s){var l=this._keyIndices[o];if(s>this._arr[l].priority)throw new Error("New priority is greater than current priority. Key: "+o+" Old: "+this._arr[l].priority+" New: "+s);this._arr[l].priority=s,this._decrease(l)}_heapify(o){var s=this._arr,l=2*o,c=l+1,u=o;l<s.length&&(u=s[l].priority<s[u].priority?l:u,c<s.length&&(u=s[c].priority<s[u].priority?c:u),u!==o&&(this._swap(o,u),this._heapify(u)))}_decrease(o){for(var s=this._arr,l=s[o].priority,c;o!==0&&(c=o>>1,!(s[c].priority<l));)this._swap(o,c),o=c}_swap(o,s){var l=this._arr,c=this._keyIndices,u=l[o],f=l[s];l[o]=f,l[s]=u,c[f.key]=o,c[u.key]=s}}return ju=n,ju}var Hu,Jp;function Tg(){if(Jp)return Hu;Jp=1;var n=Mg();Hu=o;var r=()=>1;function o(l,c,u,f){return s(l,String(c),u||r,f||function(p){return l.outEdges(p)})}function s(l,c,u,f){var p={},g=new n,m,h,v=function(w){var x=w.v!==m?w.v:w.w,C=p[x],E=u(w),_=h.distance+E;if(E<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+w+" Weight: "+E);_<C.distance&&(C.distance=_,C.predecessor=m,g.decrease(x,_))};for(l.nodes().forEach(function(w){var x=w===c?0:Number.POSITIVE_INFINITY;p[w]={distance:x},g.add(w,x)});g.size()>0&&(m=g.removeMin(),h=p[m],h.distance!==Number.POSITIVE_INFINITY);)f(m).forEach(v);return p}return Hu}var $u,em;function F_(){if(em)return $u;em=1;var n=Tg();$u=r;function r(o,s,l){return o.nodes().reduce(function(c,u){return c[u]=n(o,u,s,l),c},{})}return $u}var Vu,nm;function Lg(){if(nm)return Vu;nm=1,Vu=n;function n(r){var o=0,s=[],l={},c=[];function u(f){var p=l[f]={onStack:!0,lowlink:o,index:o++};if(s.push(f),r.successors(f).forEach(function(h){Object.hasOwn(l,h)?l[h].onStack&&(p.lowlink=Math.min(p.lowlink,l[h].index)):(u(h),p.lowlink=Math.min(p.lowlink,l[h].lowlink))}),p.lowlink===p.index){var g=[],m;do m=s.pop(),l[m].onStack=!1,g.push(m);while(f!==m);c.push(g)}}return r.nodes().forEach(function(f){Object.hasOwn(l,f)||u(f)}),c}return Vu}var Bu,tm;function j_(){if(tm)return Bu;tm=1;var n=Lg();Bu=r;function r(o){return n(o).filter(function(s){return s.length>1||s.length===1&&o.hasEdge(s[0],s[0])})}return Bu}var Wu,rm;function H_(){if(rm)return Wu;rm=1,Wu=r;var n=()=>1;function r(s,l,c){return o(s,l||n,c||function(u){return s.outEdges(u)})}function o(s,l,c){var u={},f=s.nodes();return f.forEach(function(p){u[p]={},u[p][p]={distance:0},f.forEach(function(g){p!==g&&(u[p][g]={distance:Number.POSITIVE_INFINITY})}),c(p).forEach(function(g){var m=g.v===p?g.w:g.v,h=l(g);u[p][m]={distance:h,predecessor:p}})}),f.forEach(function(p){var g=u[p];f.forEach(function(m){var h=u[m];f.forEach(function(v){var w=h[p],x=g[v],C=h[v],E=w.distance+x.distance;E<C.distance&&(C.distance=E,C.predecessor=x.predecessor)})})}),u}return Wu}var Uu,im;function Ig(){if(im)return Uu;im=1;function n(o){var s={},l={},c=[];function u(f){if(Object.hasOwn(l,f))throw new r;Object.hasOwn(s,f)||(l[f]=!0,s[f]=!0,o.predecessors(f).forEach(u),delete l[f],c.push(f))}if(o.sinks().forEach(u),Object.keys(s).length!==o.nodeCount())throw new r;return c}class r extends Error{constructor(){super(...arguments)}}return Uu=n,n.CycleException=r,Uu}var qu,om;function $_(){if(om)return qu;om=1;var n=Ig();qu=r;function r(o){try{n(o)}catch(s){if(s instanceof n.CycleException)return!1;throw s}return!0}return qu}var Yu,lm;function Rg(){if(lm)return Yu;lm=1,Yu=n;function n(l,c,u){Array.isArray(c)||(c=[c]);var f=l.isDirected()?h=>l.successors(h):h=>l.neighbors(h),p=u==="post"?r:o,g=[],m={};return c.forEach(h=>{if(!l.hasNode(h))throw new Error("Graph does not have node: "+h);p(h,f,m,g)}),g}function r(l,c,u,f){for(var p=[[l,!1]];p.length>0;){var g=p.pop();g[1]?f.push(g[0]):Object.hasOwn(u,g[0])||(u[g[0]]=!0,p.push([g[0],!0]),s(c(g[0]),m=>p.push([m,!1])))}}function o(l,c,u,f){for(var p=[l];p.length>0;){var g=p.pop();Object.hasOwn(u,g)||(u[g]=!0,f.push(g),s(c(g),m=>p.push(m)))}}function s(l,c){for(var u=l.length;u--;)c(l[u],u,l);return l}return Yu}var Xu,sm;function V_(){if(sm)return Xu;sm=1;var n=Rg();Xu=r;function r(o,s){return n(o,s,"post")}return Xu}var Gu,am;function B_(){if(am)return Gu;am=1;var n=Rg();Gu=r;function r(o,s){return n(o,s,"pre")}return Gu}var Qu,um;function W_(){if(um)return Qu;um=1;var n=sf(),r=Mg();Qu=o;function o(s,l){var c=new n,u={},f=new r,p;function g(h){var v=h.v===p?h.w:h.v,w=f.priority(v);if(w!==void 0){var x=l(h);x<w&&(u[v]=p,f.decrease(v,x))}}if(s.nodeCount()===0)return c;s.nodes().forEach(function(h){f.add(h,Number.POSITIVE_INFINITY),c.setNode(h)}),f.decrease(s.nodes()[0],0);for(var m=!1;f.size()>0;){if(p=f.removeMin(),Object.hasOwn(u,p))c.setEdge(p,u[p]);else{if(m)throw new Error("Input graph is not connected: "+s);m=!0}s.nodeEdges(p).forEach(g)}return c}return Qu}var Ku,cm;function U_(){return cm||(cm=1,Ku={components:O_(),dijkstra:Tg(),dijkstraAll:F_(),findCycles:j_(),floydWarshall:H_(),isAcyclic:$_(),postorder:V_(),preorder:B_(),prim:W_(),tarjan:Lg(),topsort:Ig()}),Ku}var Zu,fm;function Xn(){if(fm)return Zu;fm=1;var n=D_();return Zu={Graph:n.Graph,json:A_(),alg:U_(),version:n.version},Zu}var Ju,dm;function q_(){if(dm)return Ju;dm=1;class n{constructor(){let l={};l._next=l._prev=l,this._sentinel=l}dequeue(){let l=this._sentinel,c=l._prev;if(c!==l)return r(c),c}enqueue(l){let c=this._sentinel;l._prev&&l._next&&r(l),l._next=c._next,c._next._prev=l,c._next=l,l._prev=c}toString(){let l=[],c=this._sentinel,u=c._prev;for(;u!==c;)l.push(JSON.stringify(u,o)),u=u._prev;return"["+l.join(", ")+"]"}}function r(s){s._prev._next=s._next,s._next._prev=s._prev,delete s._next,delete s._prev}function o(s,l){if(s!=="_next"&&s!=="_prev")return l}return Ju=n,Ju}var ec,hm;function Y_(){if(hm)return ec;hm=1;let n=Xn().Graph,r=q_();ec=s;let o=()=>1;function s(g,m){if(g.nodeCount()<=1)return[];let h=u(g,m||o);return l(h.graph,h.buckets,h.zeroIdx).flatMap(w=>g.outEdges(w.v,w.w))}function l(g,m,h){let v=[],w=m[m.length-1],x=m[0],C;for(;g.nodeCount();){for(;C=x.dequeue();)c(g,m,h,C);for(;C=w.dequeue();)c(g,m,h,C);if(g.nodeCount()){for(let E=m.length-2;E>0;--E)if(C=m[E].dequeue(),C){v=v.concat(c(g,m,h,C,!0));break}}}return v}function c(g,m,h,v,w){let x=w?[]:void 0;return g.inEdges(v.v).forEach(C=>{let E=g.edge(C),_=g.node(C.v);w&&x.push({v:C.v,w:C.w}),_.out-=E,f(m,h,_)}),g.outEdges(v.v).forEach(C=>{let E=g.edge(C),_=C.w,b=g.node(_);b.in-=E,f(m,h,b)}),g.removeNode(v.v),x}function u(g,m){let h=new n,v=0,w=0;g.nodes().forEach(E=>{h.setNode(E,{v:E,in:0,out:0})}),g.edges().forEach(E=>{let _=h.edge(E.v,E.w)||0,b=m(E),S=_+b;h.setEdge(E.v,E.w,S),w=Math.max(w,h.node(E.v).out+=b),v=Math.max(v,h.node(E.w).in+=b)});let x=p(w+v+3).map(()=>new r),C=v+1;return h.nodes().forEach(E=>{f(x,C,h.node(E))}),{graph:h,buckets:x,zeroIdx:C}}function f(g,m,h){h.out?h.in?g[h.out-h.in+m].enqueue(h):g[g.length-1].enqueue(h):g[0].enqueue(h)}function p(g){const m=[];for(let h=0;h<g;h++)m.push(h);return m}return ec}var nc,pm;function qe(){if(pm)return nc;pm=1;let n=Xn().Graph;nc={addBorderNode:m,addDummyNode:r,applyWithChunking:w,asNonCompoundGraph:s,buildLayerMatrix:f,intersectRect:u,mapValues:L,maxRank:x,normalizeRanks:p,notime:_,partition:C,pick:z,predecessorWeights:c,range:N,removeEmptyRanks:g,simplify:o,successorWeights:l,time:E,uniqueId:S,zipObject:F};function r(P,R,$,I){for(var A=I;P.hasNode(A);)A=S(I);return $.dummy=R,P.setNode(A,$),A}function o(P){let R=new n().setGraph(P.graph());return P.nodes().forEach($=>R.setNode($,P.node($))),P.edges().forEach($=>{let I=R.edge($.v,$.w)||{weight:0,minlen:1},A=P.edge($);R.setEdge($.v,$.w,{weight:I.weight+A.weight,minlen:Math.max(I.minlen,A.minlen)})}),R}function s(P){let R=new n({multigraph:P.isMultigraph()}).setGraph(P.graph());return P.nodes().forEach($=>{P.children($).length||R.setNode($,P.node($))}),P.edges().forEach($=>{R.setEdge($,P.edge($))}),R}function l(P){let R=P.nodes().map($=>{let I={};return P.outEdges($).forEach(A=>{I[A.w]=(I[A.w]||0)+P.edge(A).weight}),I});return F(P.nodes(),R)}function c(P){let R=P.nodes().map($=>{let I={};return P.inEdges($).forEach(A=>{I[A.v]=(I[A.v]||0)+P.edge(A).weight}),I});return F(P.nodes(),R)}function u(P,R){let $=P.x,I=P.y,A=R.x-$,J=R.y-I,T=P.width/2,Y=P.height/2;if(!A&&!J)throw new Error("Not possible to find intersection inside of the rectangle");let U,X;return Math.abs(J)*T>Math.abs(A)*Y?(J<0&&(Y=-Y),U=Y*A/J,X=Y):(A<0&&(T=-T),U=T,X=T*J/A),{x:$+U,y:I+X}}function f(P){let R=N(x(P)+1).map(()=>[]);return P.nodes().forEach($=>{let I=P.node($),A=I.rank;A!==void 0&&(R[A][I.order]=$)}),R}function p(P){let R=P.nodes().map(I=>{let A=P.node(I).rank;return A===void 0?Number.MAX_VALUE:A}),$=w(Math.min,R);P.nodes().forEach(I=>{let A=P.node(I);Object.hasOwn(A,"rank")&&(A.rank-=$)})}function g(P){let R=P.nodes().map(T=>P.node(T).rank),$=w(Math.min,R),I=[];P.nodes().forEach(T=>{let Y=P.node(T).rank-$;I[Y]||(I[Y]=[]),I[Y].push(T)});let A=0,J=P.graph().nodeRankFactor;Array.from(I).forEach((T,Y)=>{T===void 0&&Y%J!==0?--A:T!==void 0&&A&&T.forEach(U=>P.node(U).rank+=A)})}function m(P,R,$,I){let A={width:0,height:0};return arguments.length>=4&&(A.rank=$,A.order=I),r(P,"border",A,R)}function h(P,R=v){const $=[];for(let I=0;I<P.length;I+=R){const A=P.slice(I,I+R);$.push(A)}return $}const v=65535;function w(P,R){if(R.length>v){const $=h(R);return P.apply(null,$.map(I=>P.apply(null,I)))}else return P.apply(null,R)}function x(P){const $=P.nodes().map(I=>{let A=P.node(I).rank;return A===void 0?Number.MIN_VALUE:A});return w(Math.max,$)}function C(P,R){let $={lhs:[],rhs:[]};return P.forEach(I=>{R(I)?$.lhs.push(I):$.rhs.push(I)}),$}function E(P,R){let $=Date.now();try{return R()}finally{console.log(P+" time: "+(Date.now()-$)+"ms")}}function _(P,R){return R()}let b=0;function S(P){var R=++b;return P+(""+R)}function N(P,R,$=1){R==null&&(R=P,P=0);let I=J=>J<R;$<0&&(I=J=>R<J);const A=[];for(let J=P;I(J);J+=$)A.push(J);return A}function z(P,R){const $={};for(const I of R)P[I]!==void 0&&($[I]=P[I]);return $}function L(P,R){let $=R;return typeof R=="string"&&($=I=>I[R]),Object.entries(P).reduce((I,[A,J])=>(I[A]=$(J,A),I),{})}function F(P,R){return P.reduce(($,I,A)=>($[I]=R[A],$),{})}return nc}var tc,mm;function X_(){if(mm)return tc;mm=1;let n=Y_(),r=qe().uniqueId;tc={run:o,undo:l};function o(c){(c.graph().acyclicer==="greedy"?n(c,f(c)):s(c)).forEach(p=>{let g=c.edge(p);c.removeEdge(p),g.forwardName=p.name,g.reversed=!0,c.setEdge(p.w,p.v,g,r("rev"))});function f(p){return g=>p.edge(g).weight}}function s(c){let u=[],f={},p={};function g(m){Object.hasOwn(p,m)||(p[m]=!0,f[m]=!0,c.outEdges(m).forEach(h=>{Object.hasOwn(f,h.w)?u.push(h):g(h.w)}),delete f[m])}return c.nodes().forEach(g),u}function l(c){c.edges().forEach(u=>{let f=c.edge(u);if(f.reversed){c.removeEdge(u);let p=f.forwardName;delete f.reversed,delete f.forwardName,c.setEdge(u.w,u.v,f,p)}})}return tc}var rc,gm;function G_(){if(gm)return rc;gm=1;let n=qe();rc={run:r,undo:s};function r(l){l.graph().dummyChains=[],l.edges().forEach(c=>o(l,c))}function o(l,c){let u=c.v,f=l.node(u).rank,p=c.w,g=l.node(p).rank,m=c.name,h=l.edge(c),v=h.labelRank;if(g===f+1)return;l.removeEdge(c);let w,x,C;for(C=0,++f;f<g;++C,++f)h.points=[],x={width:0,height:0,edgeLabel:h,edgeObj:c,rank:f},w=n.addDummyNode(l,"edge",x,"_d"),f===v&&(x.width=h.width,x.height=h.height,x.dummy="edge-label",x.labelpos=h.labelpos),l.setEdge(u,w,{weight:h.weight},m),C===0&&l.graph().dummyChains.push(w),u=w;l.setEdge(u,p,{weight:h.weight},m)}function s(l){l.graph().dummyChains.forEach(c=>{let u=l.node(c),f=u.edgeLabel,p;for(l.setEdge(u.edgeObj,f);u.dummy;)p=l.successors(c)[0],l.removeNode(c),f.points.push({x:u.x,y:u.y}),u.dummy==="edge-label"&&(f.x=u.x,f.y=u.y,f.width=u.width,f.height=u.height),c=p,u=l.node(c)})}return rc}var ic,ym;function cs(){if(ym)return ic;ym=1;const{applyWithChunking:n}=qe();ic={longestPath:r,slack:o};function r(s){var l={};function c(u){var f=s.node(u);if(Object.hasOwn(l,u))return f.rank;l[u]=!0;let p=s.outEdges(u).map(m=>m==null?Number.POSITIVE_INFINITY:c(m.w)-s.edge(m).minlen);var g=n(Math.min,p);return g===Number.POSITIVE_INFINITY&&(g=0),f.rank=g}s.sources().forEach(c)}function o(s,l){return s.node(l.w).rank-s.node(l.v).rank-s.edge(l).minlen}return ic}var oc,vm;function zg(){if(vm)return oc;vm=1;var n=Xn().Graph,r=cs().slack;oc=o;function o(u){var f=new n({directed:!1}),p=u.nodes()[0],g=u.nodeCount();f.setNode(p,{});for(var m,h;s(f,u)<g;)m=l(f,u),h=f.hasNode(m.v)?r(u,m):-r(u,m),c(f,u,h);return f}function s(u,f){function p(g){f.nodeEdges(g).forEach(m=>{var h=m.v,v=g===h?m.w:h;!u.hasNode(v)&&!r(f,m)&&(u.setNode(v,{}),u.setEdge(g,v,{}),p(v))})}return u.nodes().forEach(p),u.nodeCount()}function l(u,f){return f.edges().reduce((g,m)=>{let h=Number.POSITIVE_INFINITY;return u.hasNode(m.v)!==u.hasNode(m.w)&&(h=r(f,m)),h<g[0]?[h,m]:g},[Number.POSITIVE_INFINITY,null])[1]}function c(u,f,p){u.nodes().forEach(g=>f.node(g).rank+=p)}return oc}var lc,wm;function Q_(){if(wm)return lc;wm=1;var n=zg(),r=cs().slack,o=cs().longestPath,s=Xn().alg.preorder,l=Xn().alg.postorder,c=qe().simplify;lc=u,u.initLowLimValues=m,u.initCutValues=f,u.calcCutValue=g,u.leaveEdge=v,u.enterEdge=w,u.exchangeEdges=x;function u(b){b=c(b),o(b);var S=n(b);m(S),f(S,b);for(var N,z;N=v(S);)z=w(S,b,N),x(S,b,N,z)}function f(b,S){var N=l(b,b.nodes());N=N.slice(0,N.length-1),N.forEach(z=>p(b,S,z))}function p(b,S,N){var z=b.node(N),L=z.parent;b.edge(N,L).cutvalue=g(b,S,N)}function g(b,S,N){var z=b.node(N),L=z.parent,F=!0,P=S.edge(N,L),R=0;return P||(F=!1,P=S.edge(L,N)),R=P.weight,S.nodeEdges(N).forEach($=>{var I=$.v===N,A=I?$.w:$.v;if(A!==L){var J=I===F,T=S.edge($).weight;if(R+=J?T:-T,E(b,N,A)){var Y=b.edge(N,A).cutvalue;R+=J?-Y:Y}}}),R}function m(b,S){arguments.length<2&&(S=b.nodes()[0]),h(b,{},1,S)}function h(b,S,N,z,L){var F=N,P=b.node(z);return S[z]=!0,b.neighbors(z).forEach(R=>{Object.hasOwn(S,R)||(N=h(b,S,N,R,z))}),P.low=F,P.lim=N++,L?P.parent=L:delete P.parent,N}function v(b){return b.edges().find(S=>b.edge(S).cutvalue<0)}function w(b,S,N){var z=N.v,L=N.w;S.hasEdge(z,L)||(z=N.w,L=N.v);var F=b.node(z),P=b.node(L),R=F,$=!1;F.lim>P.lim&&(R=P,$=!0);var I=S.edges().filter(A=>$===_(b,b.node(A.v),R)&&$!==_(b,b.node(A.w),R));return I.reduce((A,J)=>r(S,J)<r(S,A)?J:A)}function x(b,S,N,z){var L=N.v,F=N.w;b.removeEdge(L,F),b.setEdge(z.v,z.w,{}),m(b),f(b,S),C(b,S)}function C(b,S){var N=b.nodes().find(L=>!S.node(L).parent),z=s(b,N);z=z.slice(1),z.forEach(L=>{var F=b.node(L).parent,P=S.edge(L,F),R=!1;P||(P=S.edge(F,L),R=!0),S.node(L).rank=S.node(F).rank+(R?P.minlen:-P.minlen)})}function E(b,S,N){return b.hasEdge(S,N)}function _(b,S,N){return N.low<=S.lim&&S.lim<=N.lim}return lc}var sc,xm;function K_(){if(xm)return sc;xm=1;var n=cs(),r=n.longestPath,o=zg(),s=Q_();sc=l;function l(p){var g=p.graph().ranker;if(g instanceof Function)return g(p);switch(p.graph().ranker){case"network-simplex":f(p);break;case"tight-tree":u(p);break;case"longest-path":c(p);break;case"none":break;default:f(p)}}var c=r;function u(p){r(p),o(p)}function f(p){s(p)}return sc}var ac,Em;function Z_(){if(Em)return ac;Em=1,ac=n;function n(s){let l=o(s);s.graph().dummyChains.forEach(c=>{let u=s.node(c),f=u.edgeObj,p=r(s,l,f.v,f.w),g=p.path,m=p.lca,h=0,v=g[h],w=!0;for(;c!==f.w;){if(u=s.node(c),w){for(;(v=g[h])!==m&&s.node(v).maxRank<u.rank;)h++;v===m&&(w=!1)}if(!w){for(;h<g.length-1&&s.node(v=g[h+1]).minRank<=u.rank;)h++;v=g[h]}s.setParent(c,v),c=s.successors(c)[0]}})}function r(s,l,c,u){let f=[],p=[],g=Math.min(l[c].low,l[u].low),m=Math.max(l[c].lim,l[u].lim),h,v;h=c;do h=s.parent(h),f.push(h);while(h&&(l[h].low>g||m>l[h].lim));for(v=h,h=u;(h=s.parent(h))!==v;)p.push(h);return{path:f.concat(p.reverse()),lca:v}}function o(s){let l={},c=0;function u(f){let p=c;s.children(f).forEach(u),l[f]={low:p,lim:c++}}return s.children().forEach(u),l}return ac}var uc,Sm;function J_(){if(Sm)return uc;Sm=1;let n=qe();uc={run:r,cleanup:c};function r(u){let f=n.addDummyNode(u,"root",{},"_root"),p=s(u),g=Object.values(p),m=n.applyWithChunking(Math.max,g)-1,h=2*m+1;u.graph().nestingRoot=f,u.edges().forEach(w=>u.edge(w).minlen*=h);let v=l(u)+1;u.children().forEach(w=>o(u,f,h,v,m,p,w)),u.graph().nodeRankFactor=h}function o(u,f,p,g,m,h,v){let w=u.children(v);if(!w.length){v!==f&&u.setEdge(f,v,{weight:0,minlen:p});return}let x=n.addBorderNode(u,"_bt"),C=n.addBorderNode(u,"_bb"),E=u.node(v);u.setParent(x,v),E.borderTop=x,u.setParent(C,v),E.borderBottom=C,w.forEach(_=>{o(u,f,p,g,m,h,_);let b=u.node(_),S=b.borderTop?b.borderTop:_,N=b.borderBottom?b.borderBottom:_,z=b.borderTop?g:2*g,L=S!==N?1:m-h[v]+1;u.setEdge(x,S,{weight:z,minlen:L,nestingEdge:!0}),u.setEdge(N,C,{weight:z,minlen:L,nestingEdge:!0})}),u.parent(v)||u.setEdge(f,x,{weight:0,minlen:m+h[v]})}function s(u){var f={};function p(g,m){var h=u.children(g);h&&h.length&&h.forEach(v=>p(v,m+1)),f[g]=m}return u.children().forEach(g=>p(g,1)),f}function l(u){return u.edges().reduce((f,p)=>f+u.edge(p).weight,0)}function c(u){var f=u.graph();u.removeNode(f.nestingRoot),delete f.nestingRoot,u.edges().forEach(p=>{var g=u.edge(p);g.nestingEdge&&u.removeEdge(p)})}return uc}var cc,_m;function ek(){if(_m)return cc;_m=1;let n=qe();cc=r;function r(s){function l(c){let u=s.children(c),f=s.node(c);if(u.length&&u.forEach(l),Object.hasOwn(f,"minRank")){f.borderLeft=[],f.borderRight=[];for(let p=f.minRank,g=f.maxRank+1;p<g;++p)o(s,"borderLeft","_bl",c,f,p),o(s,"borderRight","_br",c,f,p)}}s.children().forEach(l)}function o(s,l,c,u,f,p){let g={width:0,height:0,rank:p,borderType:l},m=f[l][p-1],h=n.addDummyNode(s,"border",g,c);f[l][p]=h,s.setParent(h,u),m&&s.setEdge(m,h,{weight:1})}return cc}var fc,km;function nk(){if(km)return fc;km=1,fc={adjust:n,undo:r};function n(p){let g=p.graph().rankdir.toLowerCase();(g==="lr"||g==="rl")&&o(p)}function r(p){let g=p.graph().rankdir.toLowerCase();(g==="bt"||g==="rl")&&l(p),(g==="lr"||g==="rl")&&(u(p),o(p))}function o(p){p.nodes().forEach(g=>s(p.node(g))),p.edges().forEach(g=>s(p.edge(g)))}function s(p){let g=p.width;p.width=p.height,p.height=g}function l(p){p.nodes().forEach(g=>c(p.node(g))),p.edges().forEach(g=>{let m=p.edge(g);m.points.forEach(c),Object.hasOwn(m,"y")&&c(m)})}function c(p){p.y=-p.y}function u(p){p.nodes().forEach(g=>f(p.node(g))),p.edges().forEach(g=>{let m=p.edge(g);m.points.forEach(f),Object.hasOwn(m,"x")&&f(m)})}function f(p){let g=p.x;p.x=p.y,p.y=g}return fc}var dc,Cm;function tk(){if(Cm)return dc;Cm=1;let n=qe();dc=r;function r(o){let s={},l=o.nodes().filter(m=>!o.children(m).length),c=l.map(m=>o.node(m).rank),u=n.applyWithChunking(Math.max,c),f=n.range(u+1).map(()=>[]);function p(m){if(s[m])return;s[m]=!0;let h=o.node(m);f[h.rank].push(m),o.successors(m).forEach(p)}return l.sort((m,h)=>o.node(m).rank-o.node(h).rank).forEach(p),f}return dc}var hc,Nm;function rk(){if(Nm)return hc;Nm=1;let n=qe().zipObject;hc=r;function r(s,l){let c=0;for(let u=1;u<l.length;++u)c+=o(s,l[u-1],l[u]);return c}function o(s,l,c){let u=n(c,c.map((v,w)=>w)),f=l.flatMap(v=>s.outEdges(v).map(w=>({pos:u[w.w],weight:s.edge(w).weight})).sort((w,x)=>w.pos-x.pos)),p=1;for(;p<c.length;)p<<=1;let g=2*p-1;p-=1;let m=new Array(g).fill(0),h=0;return f.forEach(v=>{let w=v.pos+p;m[w]+=v.weight;let x=0;for(;w>0;)w%2&&(x+=m[w+1]),w=w-1>>1,m[w]+=v.weight;h+=v.weight*x}),h}return hc}var pc,bm;function ik(){if(bm)return pc;bm=1,pc=n;function n(r,o=[]){return o.map(s=>{let l=r.inEdges(s);if(l.length){let c=l.reduce((u,f)=>{let p=r.edge(f),g=r.node(f.v);return{sum:u.sum+p.weight*g.order,weight:u.weight+p.weight}},{sum:0,weight:0});return{v:s,barycenter:c.sum/c.weight,weight:c.weight}}else return{v:s}})}return pc}var mc,Pm;function ok(){if(Pm)return mc;Pm=1;let n=qe();mc=r;function r(l,c){let u={};l.forEach((p,g)=>{let m=u[p.v]={indegree:0,in:[],out:[],vs:[p.v],i:g};p.barycenter!==void 0&&(m.barycenter=p.barycenter,m.weight=p.weight)}),c.edges().forEach(p=>{let g=u[p.v],m=u[p.w];g!==void 0&&m!==void 0&&(m.indegree++,g.out.push(u[p.w]))});let f=Object.values(u).filter(p=>!p.indegree);return o(f)}function o(l){let c=[];function u(p){return g=>{g.merged||(g.barycenter===void 0||p.barycenter===void 0||g.barycenter>=p.barycenter)&&s(p,g)}}function f(p){return g=>{g.in.push(p),--g.indegree===0&&l.push(g)}}for(;l.length;){let p=l.pop();c.push(p),p.in.reverse().forEach(u(p)),p.out.forEach(f(p))}return c.filter(p=>!p.merged).map(p=>n.pick(p,["vs","i","barycenter","weight"]))}function s(l,c){let u=0,f=0;l.weight&&(u+=l.barycenter*l.weight,f+=l.weight),c.weight&&(u+=c.barycenter*c.weight,f+=c.weight),l.vs=c.vs.concat(l.vs),l.barycenter=u/f,l.weight=f,l.i=Math.min(c.i,l.i),c.merged=!0}return mc}var gc,Mm;function lk(){if(Mm)return gc;Mm=1;let n=qe();gc=r;function r(l,c){let u=n.partition(l,x=>Object.hasOwn(x,"barycenter")),f=u.lhs,p=u.rhs.sort((x,C)=>C.i-x.i),g=[],m=0,h=0,v=0;f.sort(s(!!c)),v=o(g,p,v),f.forEach(x=>{v+=x.vs.length,g.push(x.vs),m+=x.barycenter*x.weight,h+=x.weight,v=o(g,p,v)});let w={vs:g.flat(!0)};return h&&(w.barycenter=m/h,w.weight=h),w}function o(l,c,u){let f;for(;c.length&&(f=c[c.length-1]).i<=u;)c.pop(),l.push(f.vs),u++;return u}function s(l){return(c,u)=>c.barycenter<u.barycenter?-1:c.barycenter>u.barycenter?1:l?u.i-c.i:c.i-u.i}return gc}var yc,Tm;function sk(){if(Tm)return yc;Tm=1;let n=ik(),r=ok(),o=lk();yc=s;function s(u,f,p,g){let m=u.children(f),h=u.node(f),v=h?h.borderLeft:void 0,w=h?h.borderRight:void 0,x={};v&&(m=m.filter(b=>b!==v&&b!==w));let C=n(u,m);C.forEach(b=>{if(u.children(b.v).length){let S=s(u,b.v,p,g);x[b.v]=S,Object.hasOwn(S,"barycenter")&&c(b,S)}});let E=r(C,p);l(E,x);let _=o(E,g);if(v&&(_.vs=[v,_.vs,w].flat(!0),u.predecessors(v).length)){let b=u.node(u.predecessors(v)[0]),S=u.node(u.predecessors(w)[0]);Object.hasOwn(_,"barycenter")||(_.barycenter=0,_.weight=0),_.barycenter=(_.barycenter*_.weight+b.order+S.order)/(_.weight+2),_.weight+=2}return _}function l(u,f){u.forEach(p=>{p.vs=p.vs.flatMap(g=>f[g]?f[g].vs:g)})}function c(u,f){u.barycenter!==void 0?(u.barycenter=(u.barycenter*u.weight+f.barycenter*f.weight)/(u.weight+f.weight),u.weight+=f.weight):(u.barycenter=f.barycenter,u.weight=f.weight)}return yc}var vc,Lm;function ak(){if(Lm)return vc;Lm=1;let n=Xn().Graph,r=qe();vc=o;function o(l,c,u,f){f||(f=l.nodes());let p=s(l),g=new n({compound:!0}).setGraph({root:p}).setDefaultNodeLabel(m=>l.node(m));return f.forEach(m=>{let h=l.node(m),v=l.parent(m);(h.rank===c||h.minRank<=c&&c<=h.maxRank)&&(g.setNode(m),g.setParent(m,v||p),l[u](m).forEach(w=>{let x=w.v===m?w.w:w.v,C=g.edge(x,m),E=C!==void 0?C.weight:0;g.setEdge(x,m,{weight:l.edge(w).weight+E})}),Object.hasOwn(h,"minRank")&&g.setNode(m,{borderLeft:h.borderLeft[c],borderRight:h.borderRight[c]}))}),g}function s(l){for(var c;l.hasNode(c=r.uniqueId("_root")););return c}return vc}var wc,Im;function uk(){if(Im)return wc;Im=1,wc=n;function n(r,o,s){let l={},c;s.forEach(u=>{let f=r.parent(u),p,g;for(;f;){if(p=r.parent(f),p?(g=l[p],l[p]=f):(g=c,c=f),g&&g!==f){o.setEdge(g,f);return}f=p}})}return wc}var xc,Rm;function ck(){if(Rm)return xc;Rm=1;let n=tk(),r=rk(),o=sk(),s=ak(),l=uk(),c=Xn().Graph,u=qe();xc=f;function f(h,v){if(v&&typeof v.customOrder=="function"){v.customOrder(h,f);return}let w=u.maxRank(h),x=p(h,u.range(1,w+1),"inEdges"),C=p(h,u.range(w-1,-1,-1),"outEdges"),E=n(h);if(m(h,E),v&&v.disableOptimalOrderHeuristic)return;let _=Number.POSITIVE_INFINITY,b;for(let S=0,N=0;N<4;++S,++N){g(S%2?x:C,S%4>=2),E=u.buildLayerMatrix(h);let z=r(h,E);z<_&&(N=0,b=Object.assign({},E),_=z)}m(h,b)}function p(h,v,w){const x=new Map,C=(E,_)=>{x.has(E)||x.set(E,[]),x.get(E).push(_)};for(const E of h.nodes()){const _=h.node(E);if(typeof _.rank=="number"&&C(_.rank,E),typeof _.minRank=="number"&&typeof _.maxRank=="number")for(let b=_.minRank;b<=_.maxRank;b++)b!==_.rank&&C(b,E)}return v.map(function(E){return s(h,E,w,x.get(E)||[])})}function g(h,v){let w=new c;h.forEach(function(x){let C=x.graph().root,E=o(x,C,w,v);E.vs.forEach((_,b)=>x.node(_).order=b),l(x,w,E.vs)})}function m(h,v){Object.values(v).forEach(w=>w.forEach((x,C)=>h.node(x).order=C))}return xc}var Ec,zm;function fk(){if(zm)return Ec;zm=1;let n=Xn().Graph,r=qe();Ec={positionX:w,findType1Conflicts:o,findType2Conflicts:s,addConflict:c,hasConflict:u,verticalAlignment:f,horizontalCompaction:p,alignCoordinates:h,findSmallestWidthAlignment:m,balance:v};function o(E,_){let b={};function S(N,z){let L=0,F=0,P=N.length,R=z[z.length-1];return z.forEach(($,I)=>{let A=l(E,$),J=A?E.node(A).order:P;(A||$===R)&&(z.slice(F,I+1).forEach(T=>{E.predecessors(T).forEach(Y=>{let U=E.node(Y),X=U.order;(X<L||J<X)&&!(U.dummy&&E.node(T).dummy)&&c(b,Y,T)})}),F=I+1,L=J)}),z}return _.length&&_.reduce(S),b}function s(E,_){let b={};function S(z,L,F,P,R){let $;r.range(L,F).forEach(I=>{$=z[I],E.node($).dummy&&E.predecessors($).forEach(A=>{let J=E.node(A);J.dummy&&(J.order<P||J.order>R)&&c(b,A,$)})})}function N(z,L){let F=-1,P,R=0;return L.forEach(($,I)=>{if(E.node($).dummy==="border"){let A=E.predecessors($);A.length&&(P=E.node(A[0]).order,S(L,R,I,F,P),R=I,F=P)}S(L,R,L.length,P,z.length)}),L}return _.length&&_.reduce(N),b}function l(E,_){if(E.node(_).dummy)return E.predecessors(_).find(b=>E.node(b).dummy)}function c(E,_,b){if(_>b){let N=_;_=b,b=N}let S=E[_];S||(E[_]=S={}),S[b]=!0}function u(E,_,b){if(_>b){let S=_;_=b,b=S}return!!E[_]&&Object.hasOwn(E[_],b)}function f(E,_,b,S){let N={},z={},L={};return _.forEach(F=>{F.forEach((P,R)=>{N[P]=P,z[P]=P,L[P]=R})}),_.forEach(F=>{let P=-1;F.forEach(R=>{let $=S(R);if($.length){$=$.sort((A,J)=>L[A]-L[J]);let I=($.length-1)/2;for(let A=Math.floor(I),J=Math.ceil(I);A<=J;++A){let T=$[A];z[R]===R&&P<L[T]&&!u(b,R,T)&&(z[T]=R,z[R]=N[R]=N[T],P=L[T])}}})}),{root:N,align:z}}function p(E,_,b,S,N){let z={},L=g(E,_,b,N),F=N?"borderLeft":"borderRight";function P(I,A){let J=L.nodes(),T=J.pop(),Y={};for(;T;)Y[T]?I(T):(Y[T]=!0,J.push(T),J=J.concat(A(T))),T=J.pop()}function R(I){z[I]=L.inEdges(I).reduce((A,J)=>Math.max(A,z[J.v]+L.edge(J)),0)}function $(I){let A=L.outEdges(I).reduce((T,Y)=>Math.min(T,z[Y.w]-L.edge(Y)),Number.POSITIVE_INFINITY),J=E.node(I);A!==Number.POSITIVE_INFINITY&&J.borderType!==F&&(z[I]=Math.max(z[I],A))}return P(R,L.predecessors.bind(L)),P($,L.successors.bind(L)),Object.keys(S).forEach(I=>z[I]=z[b[I]]),z}function g(E,_,b,S){let N=new n,z=E.graph(),L=x(z.nodesep,z.edgesep,S);return _.forEach(F=>{let P;F.forEach(R=>{let $=b[R];if(N.setNode($),P){var I=b[P],A=N.edge(I,$);N.setEdge(I,$,Math.max(L(E,R,P),A||0))}P=R})}),N}function m(E,_){return Object.values(_).reduce((b,S)=>{let N=Number.NEGATIVE_INFINITY,z=Number.POSITIVE_INFINITY;Object.entries(S).forEach(([F,P])=>{let R=C(E,F)/2;N=Math.max(P+R,N),z=Math.min(P-R,z)});const L=N-z;return L<b[0]&&(b=[L,S]),b},[Number.POSITIVE_INFINITY,null])[1]}function h(E,_){let b=Object.values(_),S=r.applyWithChunking(Math.min,b),N=r.applyWithChunking(Math.max,b);["u","d"].forEach(z=>{["l","r"].forEach(L=>{let F=z+L,P=E[F];if(P===_)return;let R=Object.values(P),$=S-r.applyWithChunking(Math.min,R);L!=="l"&&($=N-r.applyWithChunking(Math.max,R)),$&&(E[F]=r.mapValues(P,I=>I+$))})})}function v(E,_){return r.mapValues(E.ul,(b,S)=>{if(_)return E[_.toLowerCase()][S];{let N=Object.values(E).map(z=>z[S]).sort((z,L)=>z-L);return(N[1]+N[2])/2}})}function w(E){let _=r.buildLayerMatrix(E),b=Object.assign(o(E,_),s(E,_)),S={},N;["u","d"].forEach(L=>{N=L==="u"?_:Object.values(_).reverse(),["l","r"].forEach(F=>{F==="r"&&(N=N.map(I=>Object.values(I).reverse()));let P=(L==="u"?E.predecessors:E.successors).bind(E),R=f(E,N,b,P),$=p(E,N,R.root,R.align,F==="r");F==="r"&&($=r.mapValues($,I=>-I)),S[L+F]=$})});let z=m(E,S);return h(S,z),v(S,E.graph().align)}function x(E,_,b){return(S,N,z)=>{let L=S.node(N),F=S.node(z),P=0,R;if(P+=L.width/2,Object.hasOwn(L,"labelpos"))switch(L.labelpos.toLowerCase()){case"l":R=-L.width/2;break;case"r":R=L.width/2;break}if(R&&(P+=b?R:-R),R=0,P+=(L.dummy?_:E)/2,P+=(F.dummy?_:E)/2,P+=F.width/2,Object.hasOwn(F,"labelpos"))switch(F.labelpos.toLowerCase()){case"l":R=F.width/2;break;case"r":R=-F.width/2;break}return R&&(P+=b?R:-R),R=0,P}}function C(E,_){return E.node(_).width}return Ec}var Sc,Dm;function dk(){if(Dm)return Sc;Dm=1;let n=qe(),r=fk().positionX;Sc=o;function o(l){l=n.asNonCompoundGraph(l),s(l),Object.entries(r(l)).forEach(([c,u])=>l.node(c).x=u)}function s(l){let c=n.buildLayerMatrix(l),u=l.graph().ranksep,f=0;c.forEach(p=>{const g=p.reduce((m,h)=>{const v=l.node(h).height;return m>v?m:v},0);p.forEach(m=>l.node(m).y=f+g/2),f+=g+u})}return Sc}var _c,Am;function hk(){if(Am)return _c;Am=1;let n=X_(),r=G_(),o=K_(),s=qe().normalizeRanks,l=Z_(),c=qe().removeEmptyRanks,u=J_(),f=ek(),p=nk(),g=ck(),m=dk(),h=qe(),v=Xn().Graph;_c=w;function w(O,W){let Q=W&&W.debugTiming?h.time:h.notime;Q("layout",()=>{let re=Q("  buildLayoutGraph",()=>P(O));Q("  runLayout",()=>x(re,Q,W)),Q("  updateInputGraph",()=>C(O,re))})}function x(O,W,Q){W("    makeSpaceForEdgeLabels",()=>R(O)),W("    removeSelfEdges",()=>B(O)),W("    acyclic",()=>n.run(O)),W("    nestingGraph.run",()=>u.run(O)),W("    rank",()=>o(h.asNonCompoundGraph(O))),W("    injectEdgeLabelProxies",()=>$(O)),W("    removeEmptyRanks",()=>c(O)),W("    nestingGraph.cleanup",()=>u.cleanup(O)),W("    normalizeRanks",()=>s(O)),W("    assignRankMinMax",()=>I(O)),W("    removeEdgeLabelProxies",()=>A(O)),W("    normalize.run",()=>r.run(O)),W("    parentDummyChains",()=>l(O)),W("    addBorderSegments",()=>f(O)),W("    order",()=>g(O,Q)),W("    insertSelfEdges",()=>V(O)),W("    adjustCoordinateSystem",()=>p.adjust(O)),W("    position",()=>m(O)),W("    positionSelfEdges",()=>G(O)),W("    removeBorderNodes",()=>X(O)),W("    normalize.undo",()=>r.undo(O)),W("    fixupEdgeLabelCoords",()=>Y(O)),W("    undoCoordinateSystem",()=>p.undo(O)),W("    translateGraph",()=>J(O)),W("    assignNodeIntersects",()=>T(O)),W("    reversePoints",()=>U(O)),W("    acyclic.undo",()=>n.undo(O))}function C(O,W){O.nodes().forEach(Q=>{let re=O.node(Q),le=W.node(Q);re&&(re.x=le.x,re.y=le.y,re.rank=le.rank,W.children(Q).length&&(re.width=le.width,re.height=le.height))}),O.edges().forEach(Q=>{let re=O.edge(Q),le=W.edge(Q);re.points=le.points,Object.hasOwn(le,"x")&&(re.x=le.x,re.y=le.y)}),O.graph().width=W.graph().width,O.graph().height=W.graph().height}let E=["nodesep","edgesep","ranksep","marginx","marginy"],_={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},b=["acyclicer","ranker","rankdir","align"],S=["width","height","rank"],N={width:0,height:0},z=["minlen","weight","width","height","labeloffset"],L={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},F=["labelpos"];function P(O){let W=new v({multigraph:!0,compound:!0}),Q=j(O.graph());return W.setGraph(Object.assign({},_,M(Q,E),h.pick(Q,b))),O.nodes().forEach(re=>{let le=j(O.node(re));const K=M(le,S);Object.keys(N).forEach(oe=>{K[oe]===void 0&&(K[oe]=N[oe])}),W.setNode(re,K),W.setParent(re,O.parent(re))}),O.edges().forEach(re=>{let le=j(O.edge(re));W.setEdge(re,Object.assign({},L,M(le,z),h.pick(le,F)))}),W}function R(O){let W=O.graph();W.ranksep/=2,O.edges().forEach(Q=>{let re=O.edge(Q);re.minlen*=2,re.labelpos.toLowerCase()!=="c"&&(W.rankdir==="TB"||W.rankdir==="BT"?re.width+=re.labeloffset:re.height+=re.labeloffset)})}function $(O){O.edges().forEach(W=>{let Q=O.edge(W);if(Q.width&&Q.height){let re=O.node(W.v),K={rank:(O.node(W.w).rank-re.rank)/2+re.rank,e:W};h.addDummyNode(O,"edge-proxy",K,"_ep")}})}function I(O){let W=0;O.nodes().forEach(Q=>{let re=O.node(Q);re.borderTop&&(re.minRank=O.node(re.borderTop).rank,re.maxRank=O.node(re.borderBottom).rank,W=Math.max(W,re.maxRank))}),O.graph().maxRank=W}function A(O){O.nodes().forEach(W=>{let Q=O.node(W);Q.dummy==="edge-proxy"&&(O.edge(Q.e).labelRank=Q.rank,O.removeNode(W))})}function J(O){let W=Number.POSITIVE_INFINITY,Q=0,re=Number.POSITIVE_INFINITY,le=0,K=O.graph(),oe=K.marginx||0,de=K.marginy||0;function we(he){let fe=he.x,_e=he.y,Ne=he.width,be=he.height;W=Math.min(W,fe-Ne/2),Q=Math.max(Q,fe+Ne/2),re=Math.min(re,_e-be/2),le=Math.max(le,_e+be/2)}O.nodes().forEach(he=>we(O.node(he))),O.edges().forEach(he=>{let fe=O.edge(he);Object.hasOwn(fe,"x")&&we(fe)}),W-=oe,re-=de,O.nodes().forEach(he=>{let fe=O.node(he);fe.x-=W,fe.y-=re}),O.edges().forEach(he=>{let fe=O.edge(he);fe.points.forEach(_e=>{_e.x-=W,_e.y-=re}),Object.hasOwn(fe,"x")&&(fe.x-=W),Object.hasOwn(fe,"y")&&(fe.y-=re)}),K.width=Q-W+oe,K.height=le-re+de}function T(O){O.edges().forEach(W=>{let Q=O.edge(W),re=O.node(W.v),le=O.node(W.w),K,oe;Q.points?(K=Q.points[0],oe=Q.points[Q.points.length-1]):(Q.points=[],K=le,oe=re),Q.points.unshift(h.intersectRect(re,K)),Q.points.push(h.intersectRect(le,oe))})}function Y(O){O.edges().forEach(W=>{let Q=O.edge(W);if(Object.hasOwn(Q,"x"))switch((Q.labelpos==="l"||Q.labelpos==="r")&&(Q.width-=Q.labeloffset),Q.labelpos){case"l":Q.x-=Q.width/2+Q.labeloffset;break;case"r":Q.x+=Q.width/2+Q.labeloffset;break}})}function U(O){O.edges().forEach(W=>{let Q=O.edge(W);Q.reversed&&Q.points.reverse()})}function X(O){O.nodes().forEach(W=>{if(O.children(W).length){let Q=O.node(W),re=O.node(Q.borderTop),le=O.node(Q.borderBottom),K=O.node(Q.borderLeft[Q.borderLeft.length-1]),oe=O.node(Q.borderRight[Q.borderRight.length-1]);Q.width=Math.abs(oe.x-K.x),Q.height=Math.abs(le.y-re.y),Q.x=K.x+Q.width/2,Q.y=re.y+Q.height/2}}),O.nodes().forEach(W=>{O.node(W).dummy==="border"&&O.removeNode(W)})}function B(O){O.edges().forEach(W=>{if(W.v===W.w){var Q=O.node(W.v);Q.selfEdges||(Q.selfEdges=[]),Q.selfEdges.push({e:W,label:O.edge(W)}),O.removeEdge(W)}})}function V(O){var W=h.buildLayerMatrix(O);W.forEach(Q=>{var re=0;Q.forEach((le,K)=>{var oe=O.node(le);oe.order=K+re,(oe.selfEdges||[]).forEach(de=>{h.addDummyNode(O,"selfedge",{width:de.label.width,height:de.label.height,rank:oe.rank,order:K+ ++re,e:de.e,label:de.label},"_se")}),delete oe.selfEdges})})}function G(O){O.nodes().forEach(W=>{var Q=O.node(W);if(Q.dummy==="selfedge"){var re=O.node(Q.e.v),le=re.x+re.width/2,K=re.y,oe=Q.x-le,de=re.height/2;O.setEdge(Q.e,Q.label),O.removeNode(W),Q.label.points=[{x:le+2*oe/3,y:K-de},{x:le+5*oe/6,y:K-de},{x:le+oe,y:K},{x:le+5*oe/6,y:K+de},{x:le+2*oe/3,y:K+de}],Q.label.x=Q.x,Q.label.y=Q.y}})}function M(O,W){return h.mapValues(h.pick(O,W),Number)}function j(O){var W={};return O&&Object.entries(O).forEach(([Q,re])=>{typeof Q=="string"&&(Q=Q.toLowerCase()),W[Q]=re}),W}return _c}var kc,Om;function pk(){if(Om)return kc;Om=1;let n=qe(),r=Xn().Graph;kc={debugOrdering:o};function o(s){let l=n.buildLayerMatrix(s),c=new r({compound:!0,multigraph:!0}).setGraph({});return s.nodes().forEach(u=>{c.setNode(u,{label:u}),c.setParent(u,"layer"+s.node(u).rank)}),s.edges().forEach(u=>c.setEdge(u.v,u.w,{},u.name)),l.forEach((u,f)=>{let p="layer"+f;c.setNode(p,{rank:"same"}),u.reduce((g,m)=>(c.setEdge(g,m,{style:"invis"}),m))}),c}return kc}var Cc,Fm;function mk(){return Fm||(Fm=1,Cc="1.1.8"),Cc}var Nc,jm;function gk(){return jm||(jm=1,Nc={graphlib:Xn(),layout:hk(),debug:pk(),util:{time:qe().time,notime:qe().notime},version:mk()}),Nc}var yk=gk();const Hm=$c(yk),$m=200,Vm=44;function Dg(n,r,o=null,s=0,l={nodes:[],edges:[]}){const c=!!(n.children&&n.children.length>0),u=r.has(n.id);return l.nodes.push({id:n.id,type:"mindMapNode",data:{label:n.label,depth:s,hasChildren:c,isCollapsed:u,explanation:n.explanation||null},position:{x:0,y:0}}),o&&l.edges.push({id:`e-${o}-${n.id}`,source:o,target:n.id,type:"smoothstep",style:{stroke:"#94a3b8",strokeWidth:1.5}}),c&&!u&&n.children.forEach(f=>Dg(f,r,n.id,s+1,l)),l}function vk(n,r){const o=new Hm.graphlib.Graph;return o.setDefaultEdgeLabel(()=>({})),o.setGraph({rankdir:"LR",nodesep:16,ranksep:60,marginx:20,marginy:20}),n.forEach(s=>o.setNode(s.id,{width:$m,height:Vm})),r.forEach(s=>o.setEdge(s.source,s.target)),Hm.layout(o),n.map(s=>({...s,position:{x:o.node(s.id).x-$m/2,y:o.node(s.id).y-Vm/2}}))}const wk={mindMapNode:R_};function xk(n){return n?n.split(`
`).map((r,o)=>{if(r.trim()==="")return Z.jsx("div",{style:{height:10}},o);if(r.startsWith("★")||r.startsWith("▶")&&r.includes("시험"))return Z.jsx("div",{style:{background:"#fffbeb",border:"1.5px solid #f59e0b",borderLeft:"4px solid #f59e0b",borderRadius:8,padding:"9px 13px",marginTop:14,color:"#92400e",fontWeight:700,fontSize:13,lineHeight:1.7},children:r},o);if(r.startsWith("▶"))return Z.jsx("div",{style:{color:"#2563eb",fontWeight:700,fontSize:14,marginTop:18,marginBottom:2,paddingBottom:4,borderBottom:"1.5px solid #dbeafe"},children:r},o);if(r.trimStart().startsWith("•")||r.trimStart().startsWith("-")){const s=r.length-r.trimStart().length;return Z.jsxs("div",{style:{display:"flex",gap:7,paddingLeft:s>0?20:0,marginTop:3,lineHeight:1.7},children:[Z.jsx("span",{style:{color:"#3b82f6",fontWeight:700,flexShrink:0,marginTop:1},children:"•"}),Z.jsx("span",{style:{color:"#1e293b",fontSize:13},children:r.trimStart().slice(1).trim()})]},o)}return Z.jsx("div",{style:{color:"#374151",fontSize:13,lineHeight:1.75,marginTop:2},children:r},o)}):null}function Ag(n,r=new Set,o=!0){return n.children&&n.children.length>0&&(o||r.add(n.id),n.children.forEach(s=>Ag(s,r,!1))),r}function Ek({onSelectNode:n}){const[r,o]=ie.useState(()=>Ag(qp)),{fitView:s}=Es(),{nodes:l,edges:c}=ie.useMemo(()=>Dg(qp,r),[r]),u=ie.useMemo(()=>vk(l,c),[l,c]),f=ie.useCallback((p,g)=>{g.data.explanation&&n(g.data),g.data.hasChildren&&(o(m=>{const h=new Set(m);return h.has(g.id)?h.delete(g.id):h.add(g.id),h}),setTimeout(()=>s({duration:400,padding:.08}),30))},[s,n]);return Z.jsxs(i_,{nodes:u,edges:c,nodeTypes:wk,onNodeClick:f,fitView:!0,fitViewOptions:{padding:.08},minZoom:.05,maxZoom:2,nodesDraggable:!1,nodesConnectable:!1,elementsSelectable:!1,children:[Z.jsx(u_,{color:"#e2e8f0",gap:24,size:1}),Z.jsx(g_,{showInteractive:!1}),Z.jsx(M_,{nodeColor:p=>{var m;const g=((m=p.data)==null?void 0:m.depth)??0;return g===0?"#1e3a5f":g===1?"#2563eb":g===2?"#60a5fa":"#dbeafe"},maskColor:"rgba(248, 250, 252, 0.7)"})]})}function Sk(){const[n,r]=ie.useState(null),[o,s]=ie.useState(340),l=ie.useRef(!1),c=ie.useCallback(u=>{u.preventDefault(),l.current=!0;const f=u.clientX,p=o,g=h=>{if(!l.current)return;const v=Math.max(260,Math.min(window.innerWidth*.75,p+(f-h.clientX)));s(v)},m=()=>{l.current=!1,document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",m),document.body.style.cursor="",document.body.style.userSelect=""};document.body.style.cursor="ew-resize",document.body.style.userSelect="none",document.addEventListener("mousemove",g),document.addEventListener("mouseup",m)},[o]);return Z.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#f8fafc",position:"relative"},children:[Z.jsx("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",background:"#1e3a5f",color:"white",padding:"7px 24px",borderRadius:24,fontWeight:700,fontSize:15,zIndex:10,fontFamily:"Noto Sans KR, sans-serif",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",whiteSpace:"nowrap"},children:"🏗️ 건축시공 마인드맵"}),Z.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",background:"rgba(30,58,95,0.08)",color:"#475569",padding:"5px 16px",borderRadius:12,fontSize:12,zIndex:10,fontFamily:"Noto Sans KR, sans-serif",whiteSpace:"nowrap"},children:"▶/▼ 클릭: 펼치기/접기  |  📖 클릭: 개념 설명 보기"}),Z.jsx(Cg,{children:Z.jsx(Ek,{onSelectNode:r})}),n&&Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{onClick:()=>r(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.15)",zIndex:999}}),Z.jsxs("div",{style:{position:"fixed",right:0,top:0,width:o,height:"100vh",background:"#fff",boxShadow:"-4px 0 24px rgba(0,0,0,0.18)",zIndex:1e3,display:"flex",flexDirection:"column",fontFamily:"Noto Sans KR, sans-serif"},children:[Z.jsx("div",{onMouseDown:c,style:{position:"absolute",left:0,top:0,width:6,height:"100%",cursor:"ew-resize",background:"transparent",zIndex:10},onMouseEnter:u=>u.currentTarget.style.background="rgba(37,99,235,0.18)",onMouseLeave:u=>u.currentTarget.style.background="transparent"}),Z.jsxs("div",{style:{background:"#2563eb",color:"#fff",padding:"14px 16px",display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[Z.jsxs("span",{style:{flex:1,fontWeight:700,fontSize:15,lineHeight:1.4},children:["📖 ",n.label]}),Z.jsx("button",{onClick:()=>r(null),style:{background:"none",border:"none",color:"#fff",fontSize:20,cursor:"pointer",lineHeight:1,opacity:.85,padding:"2px 4px"},children:"✕"})]}),Z.jsx("div",{style:{flex:1,overflowY:"auto",padding:"18px 16px"},children:xk(n.explanation)})]})]})]})}C1.createRoot(document.getElementById("root")).render(Z.jsx(ie.StrictMode,{children:Z.jsx(Sk,{})}));
