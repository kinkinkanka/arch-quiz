var mv=Object.defineProperty;var gv=(t,r,o)=>r in t?mv(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;var Ue=(t,r,o)=>gv(t,typeof r!="symbol"?r+"":r,o);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=o(l);fetch(l.href,c)}})();function Hc(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gu={exports:{}},Zi={},yu={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function yv(){if(Th)return Ce;Th=1;var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.iterator;function v(M){return M===null||typeof M!="object"?null:(M=h&&M[h]||M["@@iterator"],typeof M=="function"?M:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,C={};function E(M,j,D){this.props=M,this.context=j,this.refs=C,this.updater=D||w}E.prototype.isReactComponent={},E.prototype.setState=function(M,j){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,j,"setState")},E.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function S(){}S.prototype=E.prototype;function b(M,j,D){this.props=M,this.context=j,this.refs=C,this.updater=D||w}var _=b.prototype=new S;_.constructor=b,x(_,E.prototype),_.isPureReactComponent=!0;var N=Array.isArray,z=Object.prototype.hasOwnProperty,I={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function P(M,j,D){var W,Q={},re=null,le=null;if(j!=null)for(W in j.ref!==void 0&&(le=j.ref),j.key!==void 0&&(re=""+j.key),j)z.call(j,W)&&!F.hasOwnProperty(W)&&(Q[W]=j[W]);var K=arguments.length-2;if(K===1)Q.children=D;else if(1<K){for(var oe=Array(K),de=0;de<K;de++)oe[de]=arguments[de+2];Q.children=oe}if(M&&M.defaultProps)for(W in K=M.defaultProps,K)Q[W]===void 0&&(Q[W]=K[W]);return{$$typeof:t,type:M,key:re,ref:le,props:Q,_owner:I.current}}function R(M,j){return{$$typeof:t,type:M.type,key:j,ref:M.ref,props:M.props,_owner:M._owner}}function H(M){return typeof M=="object"&&M!==null&&M.$$typeof===t}function L(M){var j={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(D){return j[D]})}var O=/\/+/g;function J(M,j){return typeof M=="object"&&M!==null&&M.key!=null?L(""+M.key):j.toString(36)}function T(M,j,D,W,Q){var re=typeof M;(re==="undefined"||re==="boolean")&&(M=null);var le=!1;if(M===null)le=!0;else switch(re){case"string":case"number":le=!0;break;case"object":switch(M.$$typeof){case t:case r:le=!0}}if(le)return le=M,Q=Q(le),M=W===""?"."+J(le,0):W,N(Q)?(D="",M!=null&&(D=M.replace(O,"$&/")+"/"),T(Q,j,D,"",function(de){return de})):Q!=null&&(H(Q)&&(Q=R(Q,D+(!Q.key||le&&le.key===Q.key?"":(""+Q.key).replace(O,"$&/")+"/")+M)),j.push(Q)),1;if(le=0,W=W===""?".":W+":",N(M))for(var K=0;K<M.length;K++){re=M[K];var oe=W+J(re,K);le+=T(re,j,D,oe,Q)}else if(oe=v(M),typeof oe=="function")for(M=oe.call(M),K=0;!(re=M.next()).done;)re=re.value,oe=W+J(re,K++),le+=T(re,j,D,oe,Q);else if(re==="object")throw j=String(M),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.");return le}function Y(M,j,D){if(M==null)return M;var W=[],Q=0;return T(M,W,"","",function(re){return j.call(D,re,Q++)}),W}function U(M){if(M._status===-1){var j=M._result;j=j(),j.then(function(D){(M._status===0||M._status===-1)&&(M._status=1,M._result=D)},function(D){(M._status===0||M._status===-1)&&(M._status=2,M._result=D)}),M._status===-1&&(M._status=0,M._result=j)}if(M._status===1)return M._result.default;throw M._result}var X={current:null},B={transition:null},V={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function G(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:Y,forEach:function(M,j,D){Y(M,function(){j.apply(this,arguments)},D)},count:function(M){var j=0;return Y(M,function(){j++}),j},toArray:function(M){return Y(M,function(j){return j})||[]},only:function(M){if(!H(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ce.Component=E,Ce.Fragment=o,Ce.Profiler=l,Ce.PureComponent=b,Ce.StrictMode=s,Ce.Suspense=p,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,Ce.act=G,Ce.cloneElement=function(M,j,D){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var W=x({},M.props),Q=M.key,re=M.ref,le=M._owner;if(j!=null){if(j.ref!==void 0&&(re=j.ref,le=I.current),j.key!==void 0&&(Q=""+j.key),M.type&&M.type.defaultProps)var K=M.type.defaultProps;for(oe in j)z.call(j,oe)&&!F.hasOwnProperty(oe)&&(W[oe]=j[oe]===void 0&&K!==void 0?K[oe]:j[oe])}var oe=arguments.length-2;if(oe===1)W.children=D;else if(1<oe){K=Array(oe);for(var de=0;de<oe;de++)K[de]=arguments[de+2];W.children=K}return{$$typeof:t,type:M.type,key:Q,ref:re,props:W,_owner:le}},Ce.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:c,_context:M},M.Consumer=M},Ce.createElement=P,Ce.createFactory=function(M){var j=P.bind(null,M);return j.type=M,j},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:f,render:M}},Ce.isValidElement=H,Ce.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:U}},Ce.memo=function(M,j){return{$$typeof:g,type:M,compare:j===void 0?null:j}},Ce.startTransition=function(M){var j=B.transition;B.transition={};try{M()}finally{B.transition=j}},Ce.unstable_act=G,Ce.useCallback=function(M,j){return X.current.useCallback(M,j)},Ce.useContext=function(M){return X.current.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M){return X.current.useDeferredValue(M)},Ce.useEffect=function(M,j){return X.current.useEffect(M,j)},Ce.useId=function(){return X.current.useId()},Ce.useImperativeHandle=function(M,j,D){return X.current.useImperativeHandle(M,j,D)},Ce.useInsertionEffect=function(M,j){return X.current.useInsertionEffect(M,j)},Ce.useLayoutEffect=function(M,j){return X.current.useLayoutEffect(M,j)},Ce.useMemo=function(M,j){return X.current.useMemo(M,j)},Ce.useReducer=function(M,j,D){return X.current.useReducer(M,j,D)},Ce.useRef=function(M){return X.current.useRef(M)},Ce.useState=function(M){return X.current.useState(M)},Ce.useSyncExternalStore=function(M,j,D){return X.current.useSyncExternalStore(M,j,D)},Ce.useTransition=function(){return X.current.useTransition()},Ce.version="18.3.1",Ce}var Ih;function mo(){return Ih||(Ih=1,yu.exports=yv()),yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lh;function vv(){if(Lh)return Zi;Lh=1;var t=mo(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(f,p,g){var m,h={},v=null,w=null;g!==void 0&&(v=""+g),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(w=p.ref);for(m in p)s.call(p,m)&&!c.hasOwnProperty(m)&&(h[m]=p[m]);if(f&&f.defaultProps)for(m in p=f.defaultProps,p)h[m]===void 0&&(h[m]=p[m]);return{$$typeof:r,type:f,key:v,ref:w,props:h,_owner:l.current}}return Zi.Fragment=o,Zi.jsx=u,Zi.jsxs=u,Zi}var Rh;function wv(){return Rh||(Rh=1,gu.exports=vv()),gu.exports}var Z=wv(),ie=mo();const xv=Hc(ie);var jl={},vu={exports:{}},yt={},wu={exports:{}},xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zh;function Ev(){return zh||(zh=1,(function(t){function r(B,V){var G=B.length;B.push(V);e:for(;0<G;){var M=G-1>>>1,j=B[M];if(0<l(j,V))B[M]=V,B[G]=j,G=M;else break e}}function o(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var V=B[0],G=B.pop();if(G!==V){B[0]=G;e:for(var M=0,j=B.length,D=j>>>1;M<D;){var W=2*(M+1)-1,Q=B[W],re=W+1,le=B[re];if(0>l(Q,G))re<j&&0>l(le,Q)?(B[M]=le,B[re]=G,M=re):(B[M]=Q,B[W]=G,M=W);else if(re<j&&0>l(le,G))B[M]=le,B[re]=G,M=re;else break e}}return V}function l(B,V){var G=B.sortIndex-V.sortIndex;return G!==0?G:B.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();t.unstable_now=function(){return u.now()-f}}var p=[],g=[],m=1,h=null,v=3,w=!1,x=!1,C=!1,E=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(B){for(var V=o(g);V!==null;){if(V.callback===null)s(g);else if(V.startTime<=B)s(g),V.sortIndex=V.expirationTime,r(p,V);else break;V=o(g)}}function N(B){if(C=!1,_(B),!x)if(o(p)!==null)x=!0,U(z);else{var V=o(g);V!==null&&X(N,V.startTime-B)}}function z(B,V){x=!1,C&&(C=!1,S(P),P=-1),w=!0;var G=v;try{for(_(V),h=o(p);h!==null&&(!(h.expirationTime>V)||B&&!L());){var M=h.callback;if(typeof M=="function"){h.callback=null,v=h.priorityLevel;var j=M(h.expirationTime<=V);V=t.unstable_now(),typeof j=="function"?h.callback=j:h===o(p)&&s(p),_(V)}else s(p);h=o(p)}if(h!==null)var D=!0;else{var W=o(g);W!==null&&X(N,W.startTime-V),D=!1}return D}finally{h=null,v=G,w=!1}}var I=!1,F=null,P=-1,R=5,H=-1;function L(){return!(t.unstable_now()-H<R)}function O(){if(F!==null){var B=t.unstable_now();H=B;var V=!0;try{V=F(!0,B)}finally{V?J():(I=!1,F=null)}}else I=!1}var J;if(typeof b=="function")J=function(){b(O)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,Y=T.port2;T.port1.onmessage=O,J=function(){Y.postMessage(null)}}else J=function(){E(O,0)};function U(B){F=B,I||(I=!0,J())}function X(B,V){P=E(function(){B(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){x||w||(x=!0,U(z))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return v},t.unstable_getFirstCallbackNode=function(){return o(p)},t.unstable_next=function(B){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var G=v;v=V;try{return B()}finally{v=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var G=v;v=B;try{return V()}finally{v=G}},t.unstable_scheduleCallback=function(B,V,G){var M=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?M+G:M):G=M,B){case 1:var j=-1;break;case 2:j=250;break;case 5:j=1073741823;break;case 4:j=1e4;break;default:j=5e3}return j=G+j,B={id:m++,callback:V,priorityLevel:B,startTime:G,expirationTime:j,sortIndex:-1},G>M?(B.sortIndex=G,r(g,B),o(p)===null&&B===o(g)&&(C?(S(P),P=-1):C=!0,X(N,G-M))):(B.sortIndex=j,r(p,B),x||w||(x=!0,U(z))),B},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(B){var V=v;return function(){var G=v;v=V;try{return B.apply(this,arguments)}finally{v=G}}}})(xu)),xu}var Ah;function _v(){return Ah||(Ah=1,wu.exports=Ev()),wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oh;function Sv(){if(Oh)return yt;Oh=1;var t=mo(),r=_v();function o(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function c(e,n){u(e,n),u(e+"Capture",n)}function u(e,n){for(l[e]=n,e=0;e<n.length;e++)s.add(n[e])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},h={};function v(e){return p.call(h,e)?!0:p.call(m,e)?!1:g.test(e)?h[e]=!0:(m[e]=!0,!1)}function w(e,n,i,a){if(i!==null&&i.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x(e,n,i,a){if(n===null||typeof n>"u"||w(e,n,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(e,n,i,a,d,y,k){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=a,this.attributeNamespace=d,this.mustUseProperty=i,this.propertyName=e,this.type=n,this.sanitizeURL=y,this.removeEmptyString=k}var E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){E[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var n=e[0];E[n]=new C(n,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){E[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){E[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){E[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){E[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){E[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){E[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){E[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var n=e.replace(S,b);E[n]=new C(n,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var n=e.replace(S,b);E[n]=new C(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var n=e.replace(S,b);E[n]=new C(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){E[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),E.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){E[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function _(e,n,i,a){var d=E.hasOwnProperty(n)?E[n]:null;(d!==null?d.type!==0:a||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(x(n,i,d,a)&&(i=null),a||d===null?v(n)&&(i===null?e.removeAttribute(n):e.setAttribute(n,""+i)):d.mustUseProperty?e[d.propertyName]=i===null?d.type===3?!1:"":i:(n=d.attributeName,a=d.attributeNamespace,i===null?e.removeAttribute(n):(d=d.type,i=d===3||d===4&&i===!0?"":""+i,a?e.setAttributeNS(a,n,i):e.setAttribute(n,i))))}var N=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,z=Symbol.for("react.element"),I=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),L=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),Y=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),B=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=B&&e[B]||e["@@iterator"],typeof e=="function"?e:null)}var G=Object.assign,M;function j(e){if(M===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);M=n&&n[1]||""}return`
`+M+e}var D=!1;function W(e,n){if(!e||D)return"";D=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(ne){var a=ne}Reflect.construct(e,[],n)}else{try{n.call()}catch(ne){a=ne}e.call(n.prototype)}else{try{throw Error()}catch(ne){a=ne}e()}}catch(ne){if(ne&&a&&typeof ne.stack=="string"){for(var d=ne.stack.split(`
`),y=a.stack.split(`
`),k=d.length-1,A=y.length-1;1<=k&&0<=A&&d[k]!==y[A];)A--;for(;1<=k&&0<=A;k--,A--)if(d[k]!==y[A]){if(k!==1||A!==1)do if(k--,A--,0>A||d[k]!==y[A]){var $=`
`+d[k].replace(" at new "," at ");return e.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",e.displayName)),$}while(1<=k&&0<=A);break}}}finally{D=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?j(e):""}function Q(e){switch(e.tag){case 5:return j(e.type);case 16:return j("Lazy");case 13:return j("Suspense");case 19:return j("SuspenseList");case 0:case 2:case 15:return e=W(e.type,!1),e;case 11:return e=W(e.type.render,!1),e;case 1:return e=W(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case I:return"Portal";case R:return"Profiler";case P:return"StrictMode";case J:return"Suspense";case T:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case L:return(e.displayName||"Context")+".Consumer";case H:return(e._context.displayName||"Context")+".Provider";case O:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Y:return n=e.displayName||null,n!==null?n:re(e.type)||"Memo";case U:n=e._payload,e=e._init;try{return re(e(n))}catch{}}return null}function le(e){var n=e.type;switch(e.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=n.render,e=e.displayName||e.name||"",n.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(n);case 8:return n===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function K(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function de(e){var n=oe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),a=""+e[n];if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var d=i.get,y=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return d.call(this)},set:function(k){a=""+k,y.call(this,k)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(k){a=""+k},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function we(e){e._valueTracker||(e._valueTracker=de(e))}function he(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=oe(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function fe(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Se(e,n){var i=n.checked;return G({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function Ne(e,n){var i=n.defaultValue==null?"":n.defaultValue,a=n.checked!=null?n.checked:n.defaultChecked;i=K(n.value!=null?n.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function be(e,n){n=n.checked,n!=null&&_(e,"checked",n,!1)}function Re(e,n){be(e,n);var i=K(n.value),a=n.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}n.hasOwnProperty("value")?ct(e,n.type,i):n.hasOwnProperty("defaultValue")&&ct(e,n.type,K(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(e.defaultChecked=!!n.defaultChecked)}function st(e,n,i){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var a=n.type;if(!(a!=="submit"&&a!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+e._wrapperState.initialValue,i||n===e.value||(e.value=n),e.defaultValue=n}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function ct(e,n,i){(n!=="number"||fe(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var tt=Array.isArray;function nt(e,n,i,a){if(e=e.options,n){n={};for(var d=0;d<i.length;d++)n["$"+i[d]]=!0;for(i=0;i<e.length;i++)d=n.hasOwnProperty("$"+e[i].value),e[i].selected!==d&&(e[i].selected=d),d&&a&&(e[i].defaultSelected=!0)}else{for(i=""+K(i),n=null,d=0;d<e.length;d++){if(e[d].value===i){e[d].selected=!0,a&&(e[d].defaultSelected=!0);return}n!==null||e[d].disabled||(n=e[d])}n!==null&&(n.selected=!0)}}function ln(e,n){if(n.dangerouslySetInnerHTML!=null)throw Error(o(91));return G({},n,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gt(e,n){var i=n.value;if(i==null){if(i=n.children,n=n.defaultValue,i!=null){if(n!=null)throw Error(o(92));if(tt(i)){if(1<i.length)throw Error(o(93));i=i[0]}n=i}n==null&&(n=""),i=n}e._wrapperState={initialValue:K(i)}}function Qt(e,n){var i=K(n.value),a=K(n.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),n.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function ft(e){var n=e.textContent;n===e._wrapperState.initialValue&&n!==""&&n!==null&&(e.value=n)}function Pt(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wt(e,n){return e==null||e==="http://www.w3.org/1999/xhtml"?Pt(n):e==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mt,Eo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,i,a,d){MSApp.execUnsafeLocalFunction(function(){return e(n,i,a,d)})}:e})(function(e,n){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=n;else{for(Mt=Mt||document.createElement("div"),Mt.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Mt.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;n.firstChild;)e.appendChild(n.firstChild)}});function sn(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var qn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ks=["Webkit","ms","Moz","O"];Object.keys(qn).forEach(function(e){ks.forEach(function(n){n=n+e.charAt(0).toUpperCase()+e.substring(1),qn[n]=qn[e]})});function _o(e,n,i){return n==null||typeof n=="boolean"||n===""?"":i||typeof n!="number"||n===0||qn.hasOwnProperty(e)&&qn[e]?(""+n).trim():n+"px"}function So(e,n){e=e.style;for(var i in n)if(n.hasOwnProperty(i)){var a=i.indexOf("--")===0,d=_o(i,n[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,d):e[i]=d}}var Cs=G({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,n){if(n){if(Cs[e]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(o(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(o(61))}if(n.style!=null&&typeof n.style!="object")throw Error(o(62))}}function ci(e,n){if(e.indexOf("-")===-1)return typeof n.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fi=null;function di(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,En=null,_n=null;function ko(e){if(e=Di(e)){if(typeof hi!="function")throw Error(o(280));var n=e.stateNode;n&&(n=el(n),hi(e.stateNode,e.type,n))}}function Co(e){En?_n?_n.push(e):_n=[e]:En=e}function No(){if(En){var e=En,n=_n;if(_n=En=null,ko(e),n)for(e=0;e<n.length;e++)ko(n[e])}}function bo(e,n){return e(n)}function Po(){}var pi=!1;function Mo(e,n,i){if(pi)return e(n,i);pi=!0;try{return bo(e,n,i)}finally{pi=!1,(En!==null||_n!==null)&&(Po(),No())}}function Yn(e,n){var i=e.stateNode;if(i===null)return null;var a=el(i);if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,n,typeof i));return i}var mi=!1;if(f)try{var Xn={};Object.defineProperty(Xn,"passive",{get:function(){mi=!0}}),window.addEventListener("test",Xn,Xn),window.removeEventListener("test",Xn,Xn)}catch{mi=!1}function Ns(e,n,i,a,d,y,k,A,$){var ne=Array.prototype.slice.call(arguments,3);try{n.apply(i,ne)}catch(ae){this.onError(ae)}}var Gn=!1,xr=null,Er=!1,gi=null,bs={onError:function(e){Gn=!0,xr=e}};function Ps(e,n,i,a,d,y,k,A,$){Gn=!1,xr=null,Ns.apply(bs,arguments)}function Ms(e,n,i,a,d,y,k,A,$){if(Ps.apply(this,arguments),Gn){if(Gn){var ne=xr;Gn=!1,xr=null}else throw Error(o(198));Er||(Er=!0,gi=ne)}}function Kt(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function yi(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function vi(e){if(Kt(e)!==e)throw Error(o(188))}function Ts(e){var n=e.alternate;if(!n){if(n=Kt(e),n===null)throw Error(o(188));return n!==e?null:e}for(var i=e,a=n;;){var d=i.return;if(d===null)break;var y=d.alternate;if(y===null){if(a=d.return,a!==null){i=a;continue}break}if(d.child===y.child){for(y=d.child;y;){if(y===i)return vi(d),e;if(y===a)return vi(d),n;y=y.sibling}throw Error(o(188))}if(i.return!==a.return)i=d,a=y;else{for(var k=!1,A=d.child;A;){if(A===i){k=!0,i=d,a=y;break}if(A===a){k=!0,a=d,i=y;break}A=A.sibling}if(!k){for(A=y.child;A;){if(A===i){k=!0,i=y,a=d;break}if(A===a){k=!0,a=y,i=d;break}A=A.sibling}if(!k)throw Error(o(189))}}if(i.alternate!==a)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:n}function To(e){return e=Ts(e),e!==null?Io(e):null}function Io(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var n=Io(e);if(n!==null)return n;e=e.sibling}return null}var Lo=r.unstable_scheduleCallback,Ro=r.unstable_cancelCallback,Is=r.unstable_shouldYield,zo=r.unstable_requestPaint,je=r.unstable_now,Ls=r.unstable_getCurrentPriorityLevel,wi=r.unstable_ImmediatePriority,Ao=r.unstable_UserBlockingPriority,_r=r.unstable_NormalPriority,Rs=r.unstable_LowPriority,Oo=r.unstable_IdlePriority,Sr=null,xt=null;function zs(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Sr,e,void 0,(e.current.flags&128)===128)}catch{}}var Et=Math.clz32?Math.clz32:Ds,As=Math.log,Os=Math.LN2;function Ds(e){return e>>>=0,e===0?32:31-(As(e)/Os|0)|0}var kr=64,Cr=4194304;function Qn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function an(e,n){var i=e.pendingLanes;if(i===0)return 0;var a=0,d=e.suspendedLanes,y=e.pingedLanes,k=i&268435455;if(k!==0){var A=k&~d;A!==0?a=Qn(A):(y&=k,y!==0&&(a=Qn(y)))}else k=i&~d,k!==0?a=Qn(k):y!==0&&(a=Qn(y));if(a===0)return 0;if(n!==0&&n!==a&&(n&d)===0&&(d=a&-a,y=n&-n,d>=y||d===16&&(y&4194240)!==0))return n;if((a&4)!==0&&(a|=i&16),n=e.entangledLanes,n!==0)for(e=e.entanglements,n&=a;0<n;)i=31-Et(n),d=1<<i,a|=e[i],n&=~d;return a}function Fs(e,n){switch(e){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Do(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,d=e.expirationTimes,y=e.pendingLanes;0<y;){var k=31-Et(y),A=1<<k,$=d[k];$===-1?((A&i)===0||(A&a)!==0)&&(d[k]=Fs(A,n)):$<=n&&(e.expiredLanes|=A),y&=~A}}function xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fo(){var e=kr;return kr<<=1,(kr&4194240)===0&&(kr=64),e}function Kn(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function Zn(e,n,i){e.pendingLanes|=n,n!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,n=31-Et(n),e[n]=i}function js(e,n){var i=e.pendingLanes&~n;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=n,e.mutableReadLanes&=n,e.entangledLanes&=n,n=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var d=31-Et(i),y=1<<d;n[d]=0,a[d]=-1,e[d]=-1,i&=~y}}function Nr(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-Et(i),d=1<<a;d&n|e[a]&n&&(e[a]|=n),i&=~d}}var Ie=0;function af(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var uf,$s,cf,ff,df,Hs=!1,jo=[],Sn=null,kn=null,Cn=null,Ei=new Map,_i=new Map,Nn=[],D0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(e,n){switch(e){case"focusin":case"focusout":Sn=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Ei.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_i.delete(n.pointerId)}}function Si(e,n,i,a,d,y){return e===null||e.nativeEvent!==y?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:y,targetContainers:[d]},n!==null&&(n=Di(n),n!==null&&$s(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,d!==null&&n.indexOf(d)===-1&&n.push(d),e)}function F0(e,n,i,a,d){switch(n){case"focusin":return Sn=Si(Sn,e,n,i,a,d),!0;case"dragenter":return kn=Si(kn,e,n,i,a,d),!0;case"mouseover":return Cn=Si(Cn,e,n,i,a,d),!0;case"pointerover":var y=d.pointerId;return Ei.set(y,Si(Ei.get(y)||null,e,n,i,a,d)),!0;case"gotpointercapture":return y=d.pointerId,_i.set(y,Si(_i.get(y)||null,e,n,i,a,d)),!0}return!1}function pf(e){var n=Jn(e.target);if(n!==null){var i=Kt(n);if(i!==null){if(n=i.tag,n===13){if(n=yi(i),n!==null){e.blockedOn=n,df(e.priority,function(){cf(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=Bs(e.domEventName,e.eventSystemFlags,n[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);fi=a,i.target.dispatchEvent(a),fi=null}else return n=Di(i),n!==null&&$s(n),e.blockedOn=i,!1;n.shift()}return!0}function mf(e,n,i){$o(e)&&i.delete(n)}function j0(){Hs=!1,Sn!==null&&$o(Sn)&&(Sn=null),kn!==null&&$o(kn)&&(kn=null),Cn!==null&&$o(Cn)&&(Cn=null),Ei.forEach(mf),_i.forEach(mf)}function ki(e,n){e.blockedOn===n&&(e.blockedOn=null,Hs||(Hs=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,j0)))}function Ci(e){function n(d){return ki(d,e)}if(0<jo.length){ki(jo[0],e);for(var i=1;i<jo.length;i++){var a=jo[i];a.blockedOn===e&&(a.blockedOn=null)}}for(Sn!==null&&ki(Sn,e),kn!==null&&ki(kn,e),Cn!==null&&ki(Cn,e),Ei.forEach(n),_i.forEach(n),i=0;i<Nn.length;i++)a=Nn[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<Nn.length&&(i=Nn[0],i.blockedOn===null);)pf(i),i.blockedOn===null&&Nn.shift()}var br=N.ReactCurrentBatchConfig,Ho=!0;function $0(e,n,i,a){var d=Ie,y=br.transition;br.transition=null;try{Ie=1,Vs(e,n,i,a)}finally{Ie=d,br.transition=y}}function H0(e,n,i,a){var d=Ie,y=br.transition;br.transition=null;try{Ie=4,Vs(e,n,i,a)}finally{Ie=d,br.transition=y}}function Vs(e,n,i,a){if(Ho){var d=Bs(e,n,i,a);if(d===null)la(e,n,a,Vo,i),hf(e,a);else if(F0(d,e,n,i,a))a.stopPropagation();else if(hf(e,a),n&4&&-1<D0.indexOf(e)){for(;d!==null;){var y=Di(d);if(y!==null&&uf(y),y=Bs(e,n,i,a),y===null&&la(e,n,a,Vo,i),y===d)break;d=y}d!==null&&a.stopPropagation()}else la(e,n,a,null,i)}}var Vo=null;function Bs(e,n,i,a){if(Vo=null,e=di(a),e=Jn(e),e!==null)if(n=Kt(e),n===null)e=null;else if(i=n.tag,i===13){if(e=yi(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null);return Vo=e,null}function gf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ls()){case wi:return 1;case Ao:return 4;case _r:case Rs:return 16;case Oo:return 536870912;default:return 16}default:return 16}}var bn=null,Ws=null,Bo=null;function yf(){if(Bo)return Bo;var e,n=Ws,i=n.length,a,d="value"in bn?bn.value:bn.textContent,y=d.length;for(e=0;e<i&&n[e]===d[e];e++);var k=i-e;for(a=1;a<=k&&n[i-a]===d[y-a];a++);return Bo=d.slice(e,1<a?1-a:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function vf(){return!1}function _t(e){function n(i,a,d,y,k){this._reactName=i,this._targetInst=d,this.type=a,this.nativeEvent=y,this.target=k,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(i=e[A],this[A]=i?i(y):y[A]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Uo:vf,this.isPropagationStopped=vf,this}return G(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),n}var Pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Us=_t(Pr),Ni=G({},Pr,{view:0,detail:0}),V0=_t(Ni),qs,Ys,bi,qo=G({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(qs=e.screenX-bi.screenX,Ys=e.screenY-bi.screenY):Ys=qs=0,bi=e),qs)},movementY:function(e){return"movementY"in e?e.movementY:Ys}}),wf=_t(qo),B0=G({},qo,{dataTransfer:0}),W0=_t(B0),U0=G({},Ni,{relatedTarget:0}),Xs=_t(U0),q0=G({},Pr,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=_t(q0),X0=G({},Pr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),G0=_t(X0),Q0=G({},Pr,{data:0}),xf=_t(Q0),K0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},J0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ey(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=J0[e])?!!n[e]:!1}function Gs(){return ey}var ty=G({},Ni,{key:function(e){if(e.key){var n=K0[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Z0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gs,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ny=_t(ty),ry=G({},qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ef=_t(ry),iy=G({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gs}),oy=_t(iy),ly=G({},Pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),sy=_t(ly),ay=G({},qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),uy=_t(ay),cy=[9,13,27,32],Qs=f&&"CompositionEvent"in window,Pi=null;f&&"documentMode"in document&&(Pi=document.documentMode);var fy=f&&"TextEvent"in window&&!Pi,_f=f&&(!Qs||Pi&&8<Pi&&11>=Pi),Sf=" ",kf=!1;function Cf(e,n){switch(e){case"keyup":return cy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Mr=!1;function dy(e,n){switch(e){case"compositionend":return Nf(n);case"keypress":return n.which!==32?null:(kf=!0,Sf);case"textInput":return e=n.data,e===Sf&&kf?null:e;default:return null}}function hy(e,n){if(Mr)return e==="compositionend"||!Qs&&Cf(e,n)?(e=yf(),Bo=Ws=bn=null,Mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return _f&&n.locale!=="ko"?null:n.data;default:return null}}var py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!py[e.type]:n==="textarea"}function Pf(e,n,i,a){Co(a),n=Ko(n,"onChange"),0<n.length&&(i=new Us("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var Mi=null,Ti=null;function my(e){qf(e,0)}function Yo(e){var n=zr(e);if(he(n))return e}function gy(e,n){if(e==="change")return n}var Mf=!1;if(f){var Ks;if(f){var Zs="oninput"in document;if(!Zs){var Tf=document.createElement("div");Tf.setAttribute("oninput","return;"),Zs=typeof Tf.oninput=="function"}Ks=Zs}else Ks=!1;Mf=Ks&&(!document.documentMode||9<document.documentMode)}function If(){Mi&&(Mi.detachEvent("onpropertychange",Lf),Ti=Mi=null)}function Lf(e){if(e.propertyName==="value"&&Yo(Ti)){var n=[];Pf(n,Ti,e,di(e)),Mo(my,n)}}function yy(e,n,i){e==="focusin"?(If(),Mi=n,Ti=i,Mi.attachEvent("onpropertychange",Lf)):e==="focusout"&&If()}function vy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yo(Ti)}function wy(e,n){if(e==="click")return Yo(n)}function xy(e,n){if(e==="input"||e==="change")return Yo(n)}function Ey(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ot=typeof Object.is=="function"?Object.is:Ey;function Ii(e,n){if(Ot(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var d=i[a];if(!p.call(n,d)||!Ot(e[d],n[d]))return!1}return!0}function Rf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zf(e,n){var i=Rf(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Rf(i)}}function Af(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Af(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Of(){for(var e=window,n=fe();n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=fe(e.document)}return n}function Js(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function _y(e){var n=Of(),i=e.focusedElem,a=e.selectionRange;if(n!==i&&i&&i.ownerDocument&&Af(i.ownerDocument.documentElement,i)){if(a!==null&&Js(i)){if(n=a.start,e=a.end,e===void 0&&(e=n),"selectionStart"in i)i.selectionStart=n,i.selectionEnd=Math.min(e,i.value.length);else if(e=(n=i.ownerDocument||document)&&n.defaultView||window,e.getSelection){e=e.getSelection();var d=i.textContent.length,y=Math.min(a.start,d);a=a.end===void 0?y:Math.min(a.end,d),!e.extend&&y>a&&(d=a,a=y,y=d),d=zf(i,y);var k=zf(i,a);d&&k&&(e.rangeCount!==1||e.anchorNode!==d.node||e.anchorOffset!==d.offset||e.focusNode!==k.node||e.focusOffset!==k.offset)&&(n=n.createRange(),n.setStart(d.node,d.offset),e.removeAllRanges(),y>a?(e.addRange(n),e.extend(k.node,k.offset)):(n.setEnd(k.node,k.offset),e.addRange(n)))}}for(n=[],e=i;e=e.parentNode;)e.nodeType===1&&n.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<n.length;i++)e=n[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sy=f&&"documentMode"in document&&11>=document.documentMode,Tr=null,ea=null,Li=null,ta=!1;function Df(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ta||Tr==null||Tr!==fe(a)||(a=Tr,"selectionStart"in a&&Js(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Li&&Ii(Li,a)||(Li=a,a=Ko(ea,"onSelect"),0<a.length&&(n=new Us("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=Tr)))}function Xo(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var Ir={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},na={},Ff={};f&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete Ir.animationend.animation,delete Ir.animationiteration.animation,delete Ir.animationstart.animation),"TransitionEvent"in window||delete Ir.transitionend.transition);function Go(e){if(na[e])return na[e];if(!Ir[e])return e;var n=Ir[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Ff)return na[e]=n[i];return e}var jf=Go("animationend"),$f=Go("animationiteration"),Hf=Go("animationstart"),Vf=Go("transitionend"),Bf=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pn(e,n){Bf.set(e,n),c(n,[e])}for(var ra=0;ra<Wf.length;ra++){var ia=Wf[ra],ky=ia.toLowerCase(),Cy=ia[0].toUpperCase()+ia.slice(1);Pn(ky,"on"+Cy)}Pn(jf,"onAnimationEnd"),Pn($f,"onAnimationIteration"),Pn(Hf,"onAnimationStart"),Pn("dblclick","onDoubleClick"),Pn("focusin","onFocus"),Pn("focusout","onBlur"),Pn(Vf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ri));function Uf(e,n,i){var a=e.type||"unknown-event";e.currentTarget=i,Ms(a,n,void 0,e),e.currentTarget=null}function qf(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],d=a.event;a=a.listeners;e:{var y=void 0;if(n)for(var k=a.length-1;0<=k;k--){var A=a[k],$=A.instance,ne=A.currentTarget;if(A=A.listener,$!==y&&d.isPropagationStopped())break e;Uf(d,A,ne),y=$}else for(k=0;k<a.length;k++){if(A=a[k],$=A.instance,ne=A.currentTarget,A=A.listener,$!==y&&d.isPropagationStopped())break e;Uf(d,A,ne),y=$}}}if(Er)throw e=gi,Er=!1,gi=null,e}function ze(e,n){var i=n[da];i===void 0&&(i=n[da]=new Set);var a=e+"__bubble";i.has(a)||(Yf(n,e,2,!1),i.add(a))}function oa(e,n,i){var a=0;n&&(a|=4),Yf(i,e,a,n)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function zi(e){if(!e[Qo]){e[Qo]=!0,s.forEach(function(i){i!=="selectionchange"&&(Ny.has(i)||oa(i,!1,e),oa(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Qo]||(n[Qo]=!0,oa("selectionchange",!1,n))}}function Yf(e,n,i,a){switch(gf(n)){case 1:var d=$0;break;case 4:d=H0;break;default:d=Vs}i=d.bind(null,n,i,e),d=void 0,!mi||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(d=!0),a?d!==void 0?e.addEventListener(n,i,{capture:!0,passive:d}):e.addEventListener(n,i,!0):d!==void 0?e.addEventListener(n,i,{passive:d}):e.addEventListener(n,i,!1)}function la(e,n,i,a,d){var y=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var k=a.tag;if(k===3||k===4){var A=a.stateNode.containerInfo;if(A===d||A.nodeType===8&&A.parentNode===d)break;if(k===4)for(k=a.return;k!==null;){var $=k.tag;if(($===3||$===4)&&($=k.stateNode.containerInfo,$===d||$.nodeType===8&&$.parentNode===d))return;k=k.return}for(;A!==null;){if(k=Jn(A),k===null)return;if($=k.tag,$===5||$===6){a=y=k;continue e}A=A.parentNode}}a=a.return}Mo(function(){var ne=y,ae=di(i),ue=[];e:{var se=Bf.get(e);if(se!==void 0){var pe=Us,ge=e;switch(e){case"keypress":if(Wo(i)===0)break e;case"keydown":case"keyup":pe=ny;break;case"focusin":ge="focus",pe=Xs;break;case"focusout":ge="blur",pe=Xs;break;case"beforeblur":case"afterblur":pe=Xs;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=wf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=oy;break;case jf:case $f:case Hf:pe=Y0;break;case Vf:pe=sy;break;case"scroll":pe=V0;break;case"wheel":pe=uy;break;case"copy":case"cut":case"paste":pe=G0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=Ef}var ye=(n&4)!==0,Be=!ye&&e==="scroll",ee=ye?se!==null?se+"Capture":null:se;ye=[];for(var q=ne,te;q!==null;){te=q;var ce=te.stateNode;if(te.tag===5&&ce!==null&&(te=ce,ee!==null&&(ce=Yn(q,ee),ce!=null&&ye.push(Ai(q,ce,te)))),Be)break;q=q.return}0<ye.length&&(se=new pe(se,ge,null,i,ae),ue.push({event:se,listeners:ye}))}}if((n&7)===0){e:{if(se=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",se&&i!==fi&&(ge=i.relatedTarget||i.fromElement)&&(Jn(ge)||ge[un]))break e;if((pe||se)&&(se=ae.window===ae?ae:(se=ae.ownerDocument)?se.defaultView||se.parentWindow:window,pe?(ge=i.relatedTarget||i.toElement,pe=ne,ge=ge?Jn(ge):null,ge!==null&&(Be=Kt(ge),ge!==Be||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(pe=null,ge=ne),pe!==ge)){if(ye=wf,ce="onMouseLeave",ee="onMouseEnter",q="mouse",(e==="pointerout"||e==="pointerover")&&(ye=Ef,ce="onPointerLeave",ee="onPointerEnter",q="pointer"),Be=pe==null?se:zr(pe),te=ge==null?se:zr(ge),se=new ye(ce,q+"leave",pe,i,ae),se.target=Be,se.relatedTarget=te,ce=null,Jn(ae)===ne&&(ye=new ye(ee,q+"enter",ge,i,ae),ye.target=te,ye.relatedTarget=Be,ce=ye),Be=ce,pe&&ge)t:{for(ye=pe,ee=ge,q=0,te=ye;te;te=Lr(te))q++;for(te=0,ce=ee;ce;ce=Lr(ce))te++;for(;0<q-te;)ye=Lr(ye),q--;for(;0<te-q;)ee=Lr(ee),te--;for(;q--;){if(ye===ee||ee!==null&&ye===ee.alternate)break t;ye=Lr(ye),ee=Lr(ee)}ye=null}else ye=null;pe!==null&&Xf(ue,se,pe,ye,!1),ge!==null&&Be!==null&&Xf(ue,Be,ge,ye,!0)}}e:{if(se=ne?zr(ne):window,pe=se.nodeName&&se.nodeName.toLowerCase(),pe==="select"||pe==="input"&&se.type==="file")var ve=gy;else if(bf(se))if(Mf)ve=xy;else{ve=vy;var Ee=yy}else(pe=se.nodeName)&&pe.toLowerCase()==="input"&&(se.type==="checkbox"||se.type==="radio")&&(ve=wy);if(ve&&(ve=ve(e,ne))){Pf(ue,ve,i,ae);break e}Ee&&Ee(e,se,ne),e==="focusout"&&(Ee=se._wrapperState)&&Ee.controlled&&se.type==="number"&&ct(se,"number",se.value)}switch(Ee=ne?zr(ne):window,e){case"focusin":(bf(Ee)||Ee.contentEditable==="true")&&(Tr=Ee,ea=ne,Li=null);break;case"focusout":Li=ea=Tr=null;break;case"mousedown":ta=!0;break;case"contextmenu":case"mouseup":case"dragend":ta=!1,Df(ue,i,ae);break;case"selectionchange":if(Sy)break;case"keydown":case"keyup":Df(ue,i,ae)}var _e;if(Qs)e:{switch(e){case"compositionstart":var ke="onCompositionStart";break e;case"compositionend":ke="onCompositionEnd";break e;case"compositionupdate":ke="onCompositionUpdate";break e}ke=void 0}else Mr?Cf(e,i)&&(ke="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ke="onCompositionStart");ke&&(_f&&i.locale!=="ko"&&(Mr||ke!=="onCompositionStart"?ke==="onCompositionEnd"&&Mr&&(_e=yf()):(bn=ae,Ws="value"in bn?bn.value:bn.textContent,Mr=!0)),Ee=Ko(ne,ke),0<Ee.length&&(ke=new xf(ke,e,null,i,ae),ue.push({event:ke,listeners:Ee}),_e?ke.data=_e:(_e=Nf(i),_e!==null&&(ke.data=_e)))),(_e=fy?dy(e,i):hy(e,i))&&(ne=Ko(ne,"onBeforeInput"),0<ne.length&&(ae=new xf("onBeforeInput","beforeinput",null,i,ae),ue.push({event:ae,listeners:ne}),ae.data=_e))}qf(ue,n)})}function Ai(e,n,i){return{instance:e,listener:n,currentTarget:i}}function Ko(e,n){for(var i=n+"Capture",a=[];e!==null;){var d=e,y=d.stateNode;d.tag===5&&y!==null&&(d=y,y=Yn(e,i),y!=null&&a.unshift(Ai(e,y,d)),y=Yn(e,n),y!=null&&a.push(Ai(e,y,d))),e=e.return}return a}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Xf(e,n,i,a,d){for(var y=n._reactName,k=[];i!==null&&i!==a;){var A=i,$=A.alternate,ne=A.stateNode;if($!==null&&$===a)break;A.tag===5&&ne!==null&&(A=ne,d?($=Yn(i,y),$!=null&&k.unshift(Ai(i,$,A))):d||($=Yn(i,y),$!=null&&k.push(Ai(i,$,A)))),i=i.return}k.length!==0&&e.push({event:n,listeners:k})}var by=/\r\n?/g,Py=/\u0000|\uFFFD/g;function Gf(e){return(typeof e=="string"?e:""+e).replace(by,`
`).replace(Py,"")}function Zo(e,n,i){if(n=Gf(n),Gf(e)!==n&&i)throw Error(o(425))}function Jo(){}var sa=null,aa=null;function ua(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ca=typeof setTimeout=="function"?setTimeout:void 0,My=typeof clearTimeout=="function"?clearTimeout:void 0,Qf=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof Qf<"u"?function(e){return Qf.resolve(null).then(e).catch(Iy)}:ca;function Iy(e){setTimeout(function(){throw e})}function fa(e,n){var i=n,a=0;do{var d=i.nextSibling;if(e.removeChild(i),d&&d.nodeType===8)if(i=d.data,i==="/$"){if(a===0){e.removeChild(d),Ci(n);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=d}while(i);Ci(n)}function Mn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return e}function Kf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(n===0)return e;n--}else i==="/$"&&n++}e=e.previousSibling}return null}var Rr=Math.random().toString(36).slice(2),Zt="__reactFiber$"+Rr,Oi="__reactProps$"+Rr,un="__reactContainer$"+Rr,da="__reactEvents$"+Rr,Ly="__reactListeners$"+Rr,Ry="__reactHandles$"+Rr;function Jn(e){var n=e[Zt];if(n)return n;for(var i=e.parentNode;i;){if(n=i[un]||i[Zt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Kf(e);e!==null;){if(i=e[Zt])return i;e=Kf(e)}return n}e=i,i=e.parentNode}return null}function Di(e){return e=e[Zt]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function el(e){return e[Oi]||null}var ha=[],Ar=-1;function Tn(e){return{current:e}}function Ae(e){0>Ar||(e.current=ha[Ar],ha[Ar]=null,Ar--)}function Le(e,n){Ar++,ha[Ar]=e.current,e.current=n}var In={},rt=Tn(In),dt=Tn(!1),er=In;function Or(e,n){var i=e.type.contextTypes;if(!i)return In;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===n)return a.__reactInternalMemoizedMaskedChildContext;var d={},y;for(y in i)d[y]=n[y];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=n,e.__reactInternalMemoizedMaskedChildContext=d),d}function ht(e){return e=e.childContextTypes,e!=null}function tl(){Ae(dt),Ae(rt)}function Zf(e,n,i){if(rt.current!==In)throw Error(o(168));Le(rt,n),Le(dt,i)}function Jf(e,n,i){var a=e.stateNode;if(n=n.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var d in a)if(!(d in n))throw Error(o(108,le(e)||"Unknown",d));return G({},i,a)}function nl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||In,er=rt.current,Le(rt,e),Le(dt,dt.current),!0}function ed(e,n,i){var a=e.stateNode;if(!a)throw Error(o(169));i?(e=Jf(e,n,er),a.__reactInternalMemoizedMergedChildContext=e,Ae(dt),Ae(rt),Le(rt,e)):Ae(dt),Le(dt,i)}var cn=null,rl=!1,pa=!1;function td(e){cn===null?cn=[e]:cn.push(e)}function zy(e){rl=!0,td(e)}function Ln(){if(!pa&&cn!==null){pa=!0;var e=0,n=Ie;try{var i=cn;for(Ie=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}cn=null,rl=!1}catch(d){throw cn!==null&&(cn=cn.slice(e+1)),Lo(wi,Ln),d}finally{Ie=n,pa=!1}}return null}var Dr=[],Fr=0,il=null,ol=0,Tt=[],It=0,tr=null,fn=1,dn="";function nr(e,n){Dr[Fr++]=ol,Dr[Fr++]=il,il=e,ol=n}function nd(e,n,i){Tt[It++]=fn,Tt[It++]=dn,Tt[It++]=tr,tr=e;var a=fn;e=dn;var d=32-Et(a)-1;a&=~(1<<d),i+=1;var y=32-Et(n)+d;if(30<y){var k=d-d%5;y=(a&(1<<k)-1).toString(32),a>>=k,d-=k,fn=1<<32-Et(n)+d|i<<d|a,dn=y+e}else fn=1<<y|i<<d|a,dn=e}function ma(e){e.return!==null&&(nr(e,1),nd(e,1,0))}function ga(e){for(;e===il;)il=Dr[--Fr],Dr[Fr]=null,ol=Dr[--Fr],Dr[Fr]=null;for(;e===tr;)tr=Tt[--It],Tt[It]=null,dn=Tt[--It],Tt[It]=null,fn=Tt[--It],Tt[It]=null}var St=null,kt=null,Oe=!1,Dt=null;function rd(e,n){var i=At(5,null,null,0);i.elementType="DELETED",i.stateNode=n,i.return=e,n=e.deletions,n===null?(e.deletions=[i],e.flags|=16):n.push(i)}function id(e,n){switch(e.tag){case 5:var i=e.type;return n=n.nodeType!==1||i.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(e.stateNode=n,St=e,kt=Mn(n.firstChild),!0):!1;case 6:return n=e.pendingProps===""||n.nodeType!==3?null:n,n!==null?(e.stateNode=n,St=e,kt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(i=tr!==null?{id:fn,overflow:dn}:null,e.memoizedState={dehydrated:n,treeContext:i,retryLane:1073741824},i=At(18,null,null,0),i.stateNode=n,i.return=e,e.child=i,St=e,kt=null,!0):!1;default:return!1}}function ya(e){return(e.mode&1)!==0&&(e.flags&128)===0}function va(e){if(Oe){var n=kt;if(n){var i=n;if(!id(e,n)){if(ya(e))throw Error(o(418));n=Mn(i.nextSibling);var a=St;n&&id(e,n)?rd(a,i):(e.flags=e.flags&-4097|2,Oe=!1,St=e)}}else{if(ya(e))throw Error(o(418));e.flags=e.flags&-4097|2,Oe=!1,St=e}}}function od(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function ll(e){if(e!==St)return!1;if(!Oe)return od(e),Oe=!0,!1;var n;if((n=e.tag!==3)&&!(n=e.tag!==5)&&(n=e.type,n=n!=="head"&&n!=="body"&&!ua(e.type,e.memoizedProps)),n&&(n=kt)){if(ya(e))throw ld(),Error(o(418));for(;n;)rd(e,n),n=Mn(n.nextSibling)}if(od(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(n===0){kt=Mn(e.nextSibling);break e}n--}else i!=="$"&&i!=="$!"&&i!=="$?"||n++}e=e.nextSibling}kt=null}}else kt=St?Mn(e.stateNode.nextSibling):null;return!0}function ld(){for(var e=kt;e;)e=Mn(e.nextSibling)}function jr(){kt=St=null,Oe=!1}function wa(e){Dt===null?Dt=[e]:Dt.push(e)}var Ay=N.ReactCurrentBatchConfig;function Fi(e,n,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var a=i.stateNode}if(!a)throw Error(o(147,e));var d=a,y=""+e;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===y?n.ref:(n=function(k){var A=d.refs;k===null?delete A[y]:A[y]=k},n._stringRef=y,n)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function sl(e,n){throw e=Object.prototype.toString.call(n),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e))}function sd(e){var n=e._init;return n(e._payload)}function ad(e){function n(ee,q){if(e){var te=ee.deletions;te===null?(ee.deletions=[q],ee.flags|=16):te.push(q)}}function i(ee,q){if(!e)return null;for(;q!==null;)n(ee,q),q=q.sibling;return null}function a(ee,q){for(ee=new Map;q!==null;)q.key!==null?ee.set(q.key,q):ee.set(q.index,q),q=q.sibling;return ee}function d(ee,q){return ee=$n(ee,q),ee.index=0,ee.sibling=null,ee}function y(ee,q,te){return ee.index=te,e?(te=ee.alternate,te!==null?(te=te.index,te<q?(ee.flags|=2,q):te):(ee.flags|=2,q)):(ee.flags|=1048576,q)}function k(ee){return e&&ee.alternate===null&&(ee.flags|=2),ee}function A(ee,q,te,ce){return q===null||q.tag!==6?(q=cu(te,ee.mode,ce),q.return=ee,q):(q=d(q,te),q.return=ee,q)}function $(ee,q,te,ce){var ve=te.type;return ve===F?ae(ee,q,te.props.children,ce,te.key):q!==null&&(q.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===U&&sd(ve)===q.type)?(ce=d(q,te.props),ce.ref=Fi(ee,q,te),ce.return=ee,ce):(ce=Il(te.type,te.key,te.props,null,ee.mode,ce),ce.ref=Fi(ee,q,te),ce.return=ee,ce)}function ne(ee,q,te,ce){return q===null||q.tag!==4||q.stateNode.containerInfo!==te.containerInfo||q.stateNode.implementation!==te.implementation?(q=fu(te,ee.mode,ce),q.return=ee,q):(q=d(q,te.children||[]),q.return=ee,q)}function ae(ee,q,te,ce,ve){return q===null||q.tag!==7?(q=cr(te,ee.mode,ce,ve),q.return=ee,q):(q=d(q,te),q.return=ee,q)}function ue(ee,q,te){if(typeof q=="string"&&q!==""||typeof q=="number")return q=cu(""+q,ee.mode,te),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case z:return te=Il(q.type,q.key,q.props,null,ee.mode,te),te.ref=Fi(ee,null,q),te.return=ee,te;case I:return q=fu(q,ee.mode,te),q.return=ee,q;case U:var ce=q._init;return ue(ee,ce(q._payload),te)}if(tt(q)||V(q))return q=cr(q,ee.mode,te,null),q.return=ee,q;sl(ee,q)}return null}function se(ee,q,te,ce){var ve=q!==null?q.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return ve!==null?null:A(ee,q,""+te,ce);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case z:return te.key===ve?$(ee,q,te,ce):null;case I:return te.key===ve?ne(ee,q,te,ce):null;case U:return ve=te._init,se(ee,q,ve(te._payload),ce)}if(tt(te)||V(te))return ve!==null?null:ae(ee,q,te,ce,null);sl(ee,te)}return null}function pe(ee,q,te,ce,ve){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ee=ee.get(te)||null,A(q,ee,""+ce,ve);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case z:return ee=ee.get(ce.key===null?te:ce.key)||null,$(q,ee,ce,ve);case I:return ee=ee.get(ce.key===null?te:ce.key)||null,ne(q,ee,ce,ve);case U:var Ee=ce._init;return pe(ee,q,te,Ee(ce._payload),ve)}if(tt(ce)||V(ce))return ee=ee.get(te)||null,ae(q,ee,ce,ve,null);sl(q,ce)}return null}function ge(ee,q,te,ce){for(var ve=null,Ee=null,_e=q,ke=q=0,Ze=null;_e!==null&&ke<te.length;ke++){_e.index>ke?(Ze=_e,_e=null):Ze=_e.sibling;var Te=se(ee,_e,te[ke],ce);if(Te===null){_e===null&&(_e=Ze);break}e&&_e&&Te.alternate===null&&n(ee,_e),q=y(Te,q,ke),Ee===null?ve=Te:Ee.sibling=Te,Ee=Te,_e=Ze}if(ke===te.length)return i(ee,_e),Oe&&nr(ee,ke),ve;if(_e===null){for(;ke<te.length;ke++)_e=ue(ee,te[ke],ce),_e!==null&&(q=y(_e,q,ke),Ee===null?ve=_e:Ee.sibling=_e,Ee=_e);return Oe&&nr(ee,ke),ve}for(_e=a(ee,_e);ke<te.length;ke++)Ze=pe(_e,ee,ke,te[ke],ce),Ze!==null&&(e&&Ze.alternate!==null&&_e.delete(Ze.key===null?ke:Ze.key),q=y(Ze,q,ke),Ee===null?ve=Ze:Ee.sibling=Ze,Ee=Ze);return e&&_e.forEach(function(Hn){return n(ee,Hn)}),Oe&&nr(ee,ke),ve}function ye(ee,q,te,ce){var ve=V(te);if(typeof ve!="function")throw Error(o(150));if(te=ve.call(te),te==null)throw Error(o(151));for(var Ee=ve=null,_e=q,ke=q=0,Ze=null,Te=te.next();_e!==null&&!Te.done;ke++,Te=te.next()){_e.index>ke?(Ze=_e,_e=null):Ze=_e.sibling;var Hn=se(ee,_e,Te.value,ce);if(Hn===null){_e===null&&(_e=Ze);break}e&&_e&&Hn.alternate===null&&n(ee,_e),q=y(Hn,q,ke),Ee===null?ve=Hn:Ee.sibling=Hn,Ee=Hn,_e=Ze}if(Te.done)return i(ee,_e),Oe&&nr(ee,ke),ve;if(_e===null){for(;!Te.done;ke++,Te=te.next())Te=ue(ee,Te.value,ce),Te!==null&&(q=y(Te,q,ke),Ee===null?ve=Te:Ee.sibling=Te,Ee=Te);return Oe&&nr(ee,ke),ve}for(_e=a(ee,_e);!Te.done;ke++,Te=te.next())Te=pe(_e,ee,ke,Te.value,ce),Te!==null&&(e&&Te.alternate!==null&&_e.delete(Te.key===null?ke:Te.key),q=y(Te,q,ke),Ee===null?ve=Te:Ee.sibling=Te,Ee=Te);return e&&_e.forEach(function(pv){return n(ee,pv)}),Oe&&nr(ee,ke),ve}function Be(ee,q,te,ce){if(typeof te=="object"&&te!==null&&te.type===F&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case z:e:{for(var ve=te.key,Ee=q;Ee!==null;){if(Ee.key===ve){if(ve=te.type,ve===F){if(Ee.tag===7){i(ee,Ee.sibling),q=d(Ee,te.props.children),q.return=ee,ee=q;break e}}else if(Ee.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===U&&sd(ve)===Ee.type){i(ee,Ee.sibling),q=d(Ee,te.props),q.ref=Fi(ee,Ee,te),q.return=ee,ee=q;break e}i(ee,Ee);break}else n(ee,Ee);Ee=Ee.sibling}te.type===F?(q=cr(te.props.children,ee.mode,ce,te.key),q.return=ee,ee=q):(ce=Il(te.type,te.key,te.props,null,ee.mode,ce),ce.ref=Fi(ee,q,te),ce.return=ee,ee=ce)}return k(ee);case I:e:{for(Ee=te.key;q!==null;){if(q.key===Ee)if(q.tag===4&&q.stateNode.containerInfo===te.containerInfo&&q.stateNode.implementation===te.implementation){i(ee,q.sibling),q=d(q,te.children||[]),q.return=ee,ee=q;break e}else{i(ee,q);break}else n(ee,q);q=q.sibling}q=fu(te,ee.mode,ce),q.return=ee,ee=q}return k(ee);case U:return Ee=te._init,Be(ee,q,Ee(te._payload),ce)}if(tt(te))return ge(ee,q,te,ce);if(V(te))return ye(ee,q,te,ce);sl(ee,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,q!==null&&q.tag===6?(i(ee,q.sibling),q=d(q,te),q.return=ee,ee=q):(i(ee,q),q=cu(te,ee.mode,ce),q.return=ee,ee=q),k(ee)):i(ee,q)}return Be}var $r=ad(!0),ud=ad(!1),al=Tn(null),ul=null,Hr=null,xa=null;function Ea(){xa=Hr=ul=null}function _a(e){var n=al.current;Ae(al),e._currentValue=n}function Sa(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function Vr(e,n){ul=e,xa=Hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&n)!==0&&(pt=!0),e.firstContext=null)}function Lt(e){var n=e._currentValue;if(xa!==e)if(e={context:e,memoizedValue:n,next:null},Hr===null){if(ul===null)throw Error(o(308));Hr=e,ul.dependencies={lanes:0,firstContext:e}}else Hr=Hr.next=e;return n}var rr=null;function ka(e){rr===null?rr=[e]:rr.push(e)}function cd(e,n,i,a){var d=n.interleaved;return d===null?(i.next=i,ka(n)):(i.next=d.next,d.next=i),n.interleaved=i,hn(e,a)}function hn(e,n){e.lanes|=n;var i=e.alternate;for(i!==null&&(i.lanes|=n),i=e,e=e.return;e!==null;)e.childLanes|=n,i=e.alternate,i!==null&&(i.childLanes|=n),i=e,e=e.return;return i.tag===3?i.stateNode:null}var Rn=!1;function Ca(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fd(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,n){return{eventTime:e,lane:n,tag:0,payload:null,callback:null,next:null}}function zn(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Me&2)!==0){var d=a.pending;return d===null?n.next=n:(n.next=d.next,d.next=n),a.pending=n,hn(e,i)}return d=a.interleaved,d===null?(n.next=n,ka(a)):(n.next=d.next,d.next=n),a.interleaved=n,hn(e,i)}function cl(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194240)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Nr(e,i)}}function dd(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var d=null,y=null;if(i=i.firstBaseUpdate,i!==null){do{var k={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};y===null?d=y=k:y=y.next=k,i=i.next}while(i!==null);y===null?d=y=n:y=y.next=n}else d=y=n;i={baseState:a.baseState,firstBaseUpdate:d,lastBaseUpdate:y,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}function fl(e,n,i,a){var d=e.updateQueue;Rn=!1;var y=d.firstBaseUpdate,k=d.lastBaseUpdate,A=d.shared.pending;if(A!==null){d.shared.pending=null;var $=A,ne=$.next;$.next=null,k===null?y=ne:k.next=ne,k=$;var ae=e.alternate;ae!==null&&(ae=ae.updateQueue,A=ae.lastBaseUpdate,A!==k&&(A===null?ae.firstBaseUpdate=ne:A.next=ne,ae.lastBaseUpdate=$))}if(y!==null){var ue=d.baseState;k=0,ae=ne=$=null,A=y;do{var se=A.lane,pe=A.eventTime;if((a&se)===se){ae!==null&&(ae=ae.next={eventTime:pe,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var ge=e,ye=A;switch(se=n,pe=i,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){ue=ge.call(pe,ue,se);break e}ue=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,se=typeof ge=="function"?ge.call(pe,ue,se):ge,se==null)break e;ue=G({},ue,se);break e;case 2:Rn=!0}}A.callback!==null&&A.lane!==0&&(e.flags|=64,se=d.effects,se===null?d.effects=[A]:se.push(A))}else pe={eventTime:pe,lane:se,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ae===null?(ne=ae=pe,$=ue):ae=ae.next=pe,k|=se;if(A=A.next,A===null){if(A=d.shared.pending,A===null)break;se=A,A=se.next,se.next=null,d.lastBaseUpdate=se,d.shared.pending=null}}while(!0);if(ae===null&&($=ue),d.baseState=$,d.firstBaseUpdate=ne,d.lastBaseUpdate=ae,n=d.shared.interleaved,n!==null){d=n;do k|=d.lane,d=d.next;while(d!==n)}else y===null&&(d.shared.lanes=0);lr|=k,e.lanes=k,e.memoizedState=ue}}function hd(e,n,i){if(e=n.effects,n.effects=null,e!==null)for(n=0;n<e.length;n++){var a=e[n],d=a.callback;if(d!==null){if(a.callback=null,a=i,typeof d!="function")throw Error(o(191,d));d.call(a)}}}var ji={},Jt=Tn(ji),$i=Tn(ji),Hi=Tn(ji);function ir(e){if(e===ji)throw Error(o(174));return e}function Na(e,n){switch(Le(Hi,n),Le($i,e),Le(Jt,ji),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:wt(null,"");break;default:e=e===8?n.parentNode:n,n=e.namespaceURI||null,e=e.tagName,n=wt(n,e)}Ae(Jt),Le(Jt,n)}function Br(){Ae(Jt),Ae($i),Ae(Hi)}function pd(e){ir(Hi.current);var n=ir(Jt.current),i=wt(n,e.type);n!==i&&(Le($i,e),Le(Jt,i))}function ba(e){$i.current===e&&(Ae(Jt),Ae($i))}var $e=Tn(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Pa=[];function Ma(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var hl=N.ReactCurrentDispatcher,Ta=N.ReactCurrentBatchConfig,or=0,He=null,Xe=null,Qe=null,pl=!1,Vi=!1,Bi=0,Oy=0;function it(){throw Error(o(321))}function Ia(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Ot(e[i],n[i]))return!1;return!0}function La(e,n,i,a,d,y){if(or=y,He=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,hl.current=e===null||e.memoizedState===null?$y:Hy,e=i(a,d),Vi){y=0;do{if(Vi=!1,Bi=0,25<=y)throw Error(o(301));y+=1,Qe=Xe=null,n.updateQueue=null,hl.current=Vy,e=i(a,d)}while(Vi)}if(hl.current=yl,n=Xe!==null&&Xe.next!==null,or=0,Qe=Xe=He=null,pl=!1,n)throw Error(o(300));return e}function Ra(){var e=Bi!==0;return Bi=0,e}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?He.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Rt(){if(Xe===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=Xe.next;var n=Qe===null?He.memoizedState:Qe.next;if(n!==null)Qe=n,Xe=e;else{if(e===null)throw Error(o(310));Xe=e,e={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},Qe===null?He.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Wi(e,n){return typeof n=="function"?n(e):n}function za(e){var n=Rt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=Xe,d=a.baseQueue,y=i.pending;if(y!==null){if(d!==null){var k=d.next;d.next=y.next,y.next=k}a.baseQueue=d=y,i.pending=null}if(d!==null){y=d.next,a=a.baseState;var A=k=null,$=null,ne=y;do{var ae=ne.lane;if((or&ae)===ae)$!==null&&($=$.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),a=ne.hasEagerState?ne.eagerState:e(a,ne.action);else{var ue={lane:ae,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};$===null?(A=$=ue,k=a):$=$.next=ue,He.lanes|=ae,lr|=ae}ne=ne.next}while(ne!==null&&ne!==y);$===null?k=a:$.next=A,Ot(a,n.memoizedState)||(pt=!0),n.memoizedState=a,n.baseState=k,n.baseQueue=$,i.lastRenderedState=a}if(e=i.interleaved,e!==null){d=e;do y=d.lane,He.lanes|=y,lr|=y,d=d.next;while(d!==e)}else d===null&&(i.lanes=0);return[n.memoizedState,i.dispatch]}function Aa(e){var n=Rt(),i=n.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=i.dispatch,d=i.pending,y=n.memoizedState;if(d!==null){i.pending=null;var k=d=d.next;do y=e(y,k.action),k=k.next;while(k!==d);Ot(y,n.memoizedState)||(pt=!0),n.memoizedState=y,n.baseQueue===null&&(n.baseState=y),i.lastRenderedState=y}return[y,a]}function md(){}function gd(e,n){var i=He,a=Rt(),d=n(),y=!Ot(a.memoizedState,d);if(y&&(a.memoizedState=d,pt=!0),a=a.queue,Oa(wd.bind(null,i,a,e),[e]),a.getSnapshot!==n||y||Qe!==null&&Qe.memoizedState.tag&1){if(i.flags|=2048,Ui(9,vd.bind(null,i,a,d,n),void 0,null),Ke===null)throw Error(o(349));(or&30)!==0||yd(i,n,d)}return d}function yd(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=He.updateQueue,n===null?(n={lastEffect:null,stores:null},He.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function vd(e,n,i,a){n.value=i,n.getSnapshot=a,xd(n)&&Ed(e)}function wd(e,n,i){return i(function(){xd(n)&&Ed(e)})}function xd(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Ot(e,i)}catch{return!0}}function Ed(e){var n=hn(e,1);n!==null&&Ht(n,e,1,-1)}function _d(e){var n=en();return typeof e=="function"&&(e=e()),n.memoizedState=n.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n.queue=e,e=e.dispatch=jy.bind(null,He,e),[n.memoizedState,e]}function Ui(e,n,i,a){return e={tag:e,create:n,destroy:i,deps:a,next:null},n=He.updateQueue,n===null?(n={lastEffect:null,stores:null},He.updateQueue=n,n.lastEffect=e.next=e):(i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e)),e}function Sd(){return Rt().memoizedState}function ml(e,n,i,a){var d=en();He.flags|=e,d.memoizedState=Ui(1|n,i,void 0,a===void 0?null:a)}function gl(e,n,i,a){var d=Rt();a=a===void 0?null:a;var y=void 0;if(Xe!==null){var k=Xe.memoizedState;if(y=k.destroy,a!==null&&Ia(a,k.deps)){d.memoizedState=Ui(n,i,y,a);return}}He.flags|=e,d.memoizedState=Ui(1|n,i,y,a)}function kd(e,n){return ml(8390656,8,e,n)}function Oa(e,n){return gl(2048,8,e,n)}function Cd(e,n){return gl(4,2,e,n)}function Nd(e,n){return gl(4,4,e,n)}function bd(e,n){if(typeof n=="function")return e=e(),n(e),function(){n(null)};if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pd(e,n,i){return i=i!=null?i.concat([e]):null,gl(4,4,bd.bind(null,n,e),i)}function Da(){}function Md(e,n){var i=Rt();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&Ia(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function Td(e,n){var i=Rt();n=n===void 0?null:n;var a=i.memoizedState;return a!==null&&n!==null&&Ia(n,a[1])?a[0]:(e=e(),i.memoizedState=[e,n],e)}function Id(e,n,i){return(or&21)===0?(e.baseState&&(e.baseState=!1,pt=!0),e.memoizedState=i):(Ot(i,n)||(i=Fo(),He.lanes|=i,lr|=i,e.baseState=!0),n)}function Dy(e,n){var i=Ie;Ie=i!==0&&4>i?i:4,e(!0);var a=Ta.transition;Ta.transition={};try{e(!1),n()}finally{Ie=i,Ta.transition=a}}function Ld(){return Rt().memoizedState}function Fy(e,n,i){var a=Fn(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},Rd(e))zd(n,i);else if(i=cd(e,n,i,a),i!==null){var d=ut();Ht(i,e,a,d),Ad(i,n,a)}}function jy(e,n,i){var a=Fn(e),d={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(Rd(e))zd(n,d);else{var y=e.alternate;if(e.lanes===0&&(y===null||y.lanes===0)&&(y=n.lastRenderedReducer,y!==null))try{var k=n.lastRenderedState,A=y(k,i);if(d.hasEagerState=!0,d.eagerState=A,Ot(A,k)){var $=n.interleaved;$===null?(d.next=d,ka(n)):(d.next=$.next,$.next=d),n.interleaved=d;return}}catch{}finally{}i=cd(e,n,d,a),i!==null&&(d=ut(),Ht(i,e,a,d),Ad(i,n,a))}}function Rd(e){var n=e.alternate;return e===He||n!==null&&n===He}function zd(e,n){Vi=pl=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Ad(e,n,i){if((i&4194240)!==0){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Nr(e,i)}}var yl={readContext:Lt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},$y={readContext:Lt,useCallback:function(e,n){return en().memoizedState=[e,n===void 0?null:n],e},useContext:Lt,useEffect:kd,useImperativeHandle:function(e,n,i){return i=i!=null?i.concat([e]):null,ml(4194308,4,bd.bind(null,n,e),i)},useLayoutEffect:function(e,n){return ml(4194308,4,e,n)},useInsertionEffect:function(e,n){return ml(4,2,e,n)},useMemo:function(e,n){var i=en();return n=n===void 0?null:n,e=e(),i.memoizedState=[e,n],e},useReducer:function(e,n,i){var a=en();return n=i!==void 0?i(n):n,a.memoizedState=a.baseState=n,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},a.queue=e,e=e.dispatch=Fy.bind(null,He,e),[a.memoizedState,e]},useRef:function(e){var n=en();return e={current:e},n.memoizedState=e},useState:_d,useDebugValue:Da,useDeferredValue:function(e){return en().memoizedState=e},useTransition:function(){var e=_d(!1),n=e[0];return e=Dy.bind(null,e[1]),en().memoizedState=e,[n,e]},useMutableSource:function(){},useSyncExternalStore:function(e,n,i){var a=He,d=en();if(Oe){if(i===void 0)throw Error(o(407));i=i()}else{if(i=n(),Ke===null)throw Error(o(349));(or&30)!==0||yd(a,n,i)}d.memoizedState=i;var y={value:i,getSnapshot:n};return d.queue=y,kd(wd.bind(null,a,y,e),[e]),a.flags|=2048,Ui(9,vd.bind(null,a,y,i,n),void 0,null),i},useId:function(){var e=en(),n=Ke.identifierPrefix;if(Oe){var i=dn,a=fn;i=(a&~(1<<32-Et(a)-1)).toString(32)+i,n=":"+n+"R"+i,i=Bi++,0<i&&(n+="H"+i.toString(32)),n+=":"}else i=Oy++,n=":"+n+"r"+i.toString(32)+":";return e.memoizedState=n},unstable_isNewReconciler:!1},Hy={readContext:Lt,useCallback:Md,useContext:Lt,useEffect:Oa,useImperativeHandle:Pd,useInsertionEffect:Cd,useLayoutEffect:Nd,useMemo:Td,useReducer:za,useRef:Sd,useState:function(){return za(Wi)},useDebugValue:Da,useDeferredValue:function(e){var n=Rt();return Id(n,Xe.memoizedState,e)},useTransition:function(){var e=za(Wi)[0],n=Rt().memoizedState;return[e,n]},useMutableSource:md,useSyncExternalStore:gd,useId:Ld,unstable_isNewReconciler:!1},Vy={readContext:Lt,useCallback:Md,useContext:Lt,useEffect:Oa,useImperativeHandle:Pd,useInsertionEffect:Cd,useLayoutEffect:Nd,useMemo:Td,useReducer:Aa,useRef:Sd,useState:function(){return Aa(Wi)},useDebugValue:Da,useDeferredValue:function(e){var n=Rt();return Xe===null?n.memoizedState=e:Id(n,Xe.memoizedState,e)},useTransition:function(){var e=Aa(Wi)[0],n=Rt().memoizedState;return[e,n]},useMutableSource:md,useSyncExternalStore:gd,useId:Ld,unstable_isNewReconciler:!1};function Ft(e,n){if(e&&e.defaultProps){n=G({},n),e=e.defaultProps;for(var i in e)n[i]===void 0&&(n[i]=e[i]);return n}return n}function Fa(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:G({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var vl={isMounted:function(e){return(e=e._reactInternals)?Kt(e)===e:!1},enqueueSetState:function(e,n,i){e=e._reactInternals;var a=ut(),d=Fn(e),y=pn(a,d);y.payload=n,i!=null&&(y.callback=i),n=zn(e,y,d),n!==null&&(Ht(n,e,d,a),cl(n,e,d))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=ut(),d=Fn(e),y=pn(a,d);y.tag=1,y.payload=n,i!=null&&(y.callback=i),n=zn(e,y,d),n!==null&&(Ht(n,e,d,a),cl(n,e,d))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=ut(),a=Fn(e),d=pn(i,a);d.tag=2,n!=null&&(d.callback=n),n=zn(e,d,a),n!==null&&(Ht(n,e,a,i),cl(n,e,a))}};function Od(e,n,i,a,d,y,k){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,y,k):n.prototype&&n.prototype.isPureReactComponent?!Ii(i,a)||!Ii(d,y):!0}function Dd(e,n,i){var a=!1,d=In,y=n.contextType;return typeof y=="object"&&y!==null?y=Lt(y):(d=ht(n)?er:rt.current,a=n.contextTypes,y=(a=a!=null)?Or(e,d):In),n=new n(i,y),e.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=vl,e.stateNode=n,n._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=d,e.__reactInternalMemoizedMaskedChildContext=y),n}function Fd(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&vl.enqueueReplaceState(n,n.state,null)}function ja(e,n,i,a){var d=e.stateNode;d.props=i,d.state=e.memoizedState,d.refs={},Ca(e);var y=n.contextType;typeof y=="object"&&y!==null?d.context=Lt(y):(y=ht(n)?er:rt.current,d.context=Or(e,y)),d.state=e.memoizedState,y=n.getDerivedStateFromProps,typeof y=="function"&&(Fa(e,n,y,i),d.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(n=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),n!==d.state&&vl.enqueueReplaceState(d,d.state,null),fl(e,i,d,a),d.state=e.memoizedState),typeof d.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,n){try{var i="",a=n;do i+=Q(a),a=a.return;while(a);var d=i}catch(y){d=`
Error generating stack: `+y.message+`
`+y.stack}return{value:e,source:n,stack:d,digest:null}}function $a(e,n,i){return{value:e,source:null,stack:i??null,digest:n??null}}function Ha(e,n){try{console.error(n.value)}catch(i){setTimeout(function(){throw i})}}var By=typeof WeakMap=="function"?WeakMap:Map;function jd(e,n,i){i=pn(-1,i),i.tag=3,i.payload={element:null};var a=n.value;return i.callback=function(){Cl||(Cl=!0,nu=a),Ha(e,n)},i}function $d(e,n,i){i=pn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var d=n.value;i.payload=function(){return a(d)},i.callback=function(){Ha(e,n)}}var y=e.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(i.callback=function(){Ha(e,n),typeof a!="function"&&(On===null?On=new Set([this]):On.add(this));var k=n.stack;this.componentDidCatch(n.value,{componentStack:k!==null?k:""})}),i}function Hd(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new By;var d=new Set;a.set(n,d)}else d=a.get(n),d===void 0&&(d=new Set,a.set(n,d));d.has(i)||(d.add(i),e=rv.bind(null,e,n,i),n.then(e,e))}function Vd(e){do{var n;if((n=e.tag===13)&&(n=e.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return e;e=e.return}while(e!==null);return null}function Bd(e,n,i,a,d){return(e.mode&1)===0?(e===n?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(n=pn(-1,1),n.tag=2,zn(i,n,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=d,e)}var Wy=N.ReactCurrentOwner,pt=!1;function at(e,n,i,a){n.child=e===null?ud(n,null,i,a):$r(n,e.child,i,a)}function Wd(e,n,i,a,d){i=i.render;var y=n.ref;return Vr(n,d),a=La(e,n,i,a,y,d),i=Ra(),e!==null&&!pt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,mn(e,n,d)):(Oe&&i&&ma(n),n.flags|=1,at(e,n,a,d),n.child)}function Ud(e,n,i,a,d){if(e===null){var y=i.type;return typeof y=="function"&&!uu(y)&&y.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(n.tag=15,n.type=y,qd(e,n,y,a,d)):(e=Il(i.type,null,a,n,n.mode,d),e.ref=n.ref,e.return=n,n.child=e)}if(y=e.child,(e.lanes&d)===0){var k=y.memoizedProps;if(i=i.compare,i=i!==null?i:Ii,i(k,a)&&e.ref===n.ref)return mn(e,n,d)}return n.flags|=1,e=$n(y,a),e.ref=n.ref,e.return=n,n.child=e}function qd(e,n,i,a,d){if(e!==null){var y=e.memoizedProps;if(Ii(y,a)&&e.ref===n.ref)if(pt=!1,n.pendingProps=a=y,(e.lanes&d)!==0)(e.flags&131072)!==0&&(pt=!0);else return n.lanes=e.lanes,mn(e,n,d)}return Va(e,n,i,a,d)}function Yd(e,n,i){var a=n.pendingProps,d=a.children,y=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(qr,Ct),Ct|=i;else{if((i&1073741824)===0)return e=y!==null?y.baseLanes|i:i,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:e,cachePool:null,transitions:null},n.updateQueue=null,Le(qr,Ct),Ct|=e,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=y!==null?y.baseLanes:i,Le(qr,Ct),Ct|=a}else y!==null?(a=y.baseLanes|i,n.memoizedState=null):a=i,Le(qr,Ct),Ct|=a;return at(e,n,d,i),n.child}function Xd(e,n){var i=n.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(n.flags|=512,n.flags|=2097152)}function Va(e,n,i,a,d){var y=ht(i)?er:rt.current;return y=Or(n,y),Vr(n,d),i=La(e,n,i,a,y,d),a=Ra(),e!==null&&!pt?(n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~d,mn(e,n,d)):(Oe&&a&&ma(n),n.flags|=1,at(e,n,i,d),n.child)}function Gd(e,n,i,a,d){if(ht(i)){var y=!0;nl(n)}else y=!1;if(Vr(n,d),n.stateNode===null)xl(e,n),Dd(n,i,a),ja(n,i,a,d),a=!0;else if(e===null){var k=n.stateNode,A=n.memoizedProps;k.props=A;var $=k.context,ne=i.contextType;typeof ne=="object"&&ne!==null?ne=Lt(ne):(ne=ht(i)?er:rt.current,ne=Or(n,ne));var ae=i.getDerivedStateFromProps,ue=typeof ae=="function"||typeof k.getSnapshotBeforeUpdate=="function";ue||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(A!==a||$!==ne)&&Fd(n,k,a,ne),Rn=!1;var se=n.memoizedState;k.state=se,fl(n,a,k,d),$=n.memoizedState,A!==a||se!==$||dt.current||Rn?(typeof ae=="function"&&(Fa(n,i,ae,a),$=n.memoizedState),(A=Rn||Od(n,i,A,a,se,$,ne))?(ue||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(n.flags|=4194308)):(typeof k.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=$),k.props=a,k.state=$,k.context=ne,a=A):(typeof k.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{k=n.stateNode,fd(e,n),A=n.memoizedProps,ne=n.type===n.elementType?A:Ft(n.type,A),k.props=ne,ue=n.pendingProps,se=k.context,$=i.contextType,typeof $=="object"&&$!==null?$=Lt($):($=ht(i)?er:rt.current,$=Or(n,$));var pe=i.getDerivedStateFromProps;(ae=typeof pe=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(A!==ue||se!==$)&&Fd(n,k,a,$),Rn=!1,se=n.memoizedState,k.state=se,fl(n,a,k,d);var ge=n.memoizedState;A!==ue||se!==ge||dt.current||Rn?(typeof pe=="function"&&(Fa(n,i,pe,a),ge=n.memoizedState),(ne=Rn||Od(n,i,ne,a,se,ge,$)||!1)?(ae||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(a,ge,$),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(a,ge,$)),typeof k.componentDidUpdate=="function"&&(n.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof k.componentDidUpdate!="function"||A===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=ge),k.props=a,k.state=ge,k.context=$,a=ne):(typeof k.componentDidUpdate!="function"||A===e.memoizedProps&&se===e.memoizedState||(n.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||A===e.memoizedProps&&se===e.memoizedState||(n.flags|=1024),a=!1)}return Ba(e,n,i,a,y,d)}function Ba(e,n,i,a,d,y){Xd(e,n);var k=(n.flags&128)!==0;if(!a&&!k)return d&&ed(n,i,!1),mn(e,n,y);a=n.stateNode,Wy.current=n;var A=k&&typeof i.getDerivedStateFromError!="function"?null:a.render();return n.flags|=1,e!==null&&k?(n.child=$r(n,e.child,null,y),n.child=$r(n,null,A,y)):at(e,n,A,y),n.memoizedState=a.state,d&&ed(n,i,!0),n.child}function Qd(e){var n=e.stateNode;n.pendingContext?Zf(e,n.pendingContext,n.pendingContext!==n.context):n.context&&Zf(e,n.context,!1),Na(e,n.containerInfo)}function Kd(e,n,i,a,d){return jr(),wa(d),n.flags|=256,at(e,n,i,a),n.child}var Wa={dehydrated:null,treeContext:null,retryLane:0};function Ua(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zd(e,n,i){var a=n.pendingProps,d=$e.current,y=!1,k=(n.flags&128)!==0,A;if((A=k)||(A=e!==null&&e.memoizedState===null?!1:(d&2)!==0),A?(y=!0,n.flags&=-129):(e===null||e.memoizedState!==null)&&(d|=1),Le($e,d&1),e===null)return va(n),e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((n.mode&1)===0?n.lanes=1:e.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(k=a.children,e=a.fallback,y?(a=n.mode,y=n.child,k={mode:"hidden",children:k},(a&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=k):y=Ll(k,a,0,null),e=cr(e,a,i,null),y.return=n,e.return=n,y.sibling=e,n.child=y,n.child.memoizedState=Ua(i),n.memoizedState=Wa,e):qa(n,k));if(d=e.memoizedState,d!==null&&(A=d.dehydrated,A!==null))return Uy(e,n,k,a,A,d,i);if(y){y=a.fallback,k=n.mode,d=e.child,A=d.sibling;var $={mode:"hidden",children:a.children};return(k&1)===0&&n.child!==d?(a=n.child,a.childLanes=0,a.pendingProps=$,n.deletions=null):(a=$n(d,$),a.subtreeFlags=d.subtreeFlags&14680064),A!==null?y=$n(A,y):(y=cr(y,k,i,null),y.flags|=2),y.return=n,a.return=n,a.sibling=y,n.child=a,a=y,y=n.child,k=e.child.memoizedState,k=k===null?Ua(i):{baseLanes:k.baseLanes|i,cachePool:null,transitions:k.transitions},y.memoizedState=k,y.childLanes=e.childLanes&~i,n.memoizedState=Wa,a}return y=e.child,e=y.sibling,a=$n(y,{mode:"visible",children:a.children}),(n.mode&1)===0&&(a.lanes=i),a.return=n,a.sibling=null,e!==null&&(i=n.deletions,i===null?(n.deletions=[e],n.flags|=16):i.push(e)),n.child=a,n.memoizedState=null,a}function qa(e,n){return n=Ll({mode:"visible",children:n},e.mode,0,null),n.return=e,e.child=n}function wl(e,n,i,a){return a!==null&&wa(a),$r(n,e.child,null,i),e=qa(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Uy(e,n,i,a,d,y,k){if(i)return n.flags&256?(n.flags&=-257,a=$a(Error(o(422))),wl(e,n,k,a)):n.memoizedState!==null?(n.child=e.child,n.flags|=128,null):(y=a.fallback,d=n.mode,a=Ll({mode:"visible",children:a.children},d,0,null),y=cr(y,d,k,null),y.flags|=2,a.return=n,y.return=n,a.sibling=y,n.child=a,(n.mode&1)!==0&&$r(n,e.child,null,k),n.child.memoizedState=Ua(k),n.memoizedState=Wa,y);if((n.mode&1)===0)return wl(e,n,k,null);if(d.data==="$!"){if(a=d.nextSibling&&d.nextSibling.dataset,a)var A=a.dgst;return a=A,y=Error(o(419)),a=$a(y,a,void 0),wl(e,n,k,a)}if(A=(k&e.childLanes)!==0,pt||A){if(a=Ke,a!==null){switch(k&-k){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(a.suspendedLanes|k))!==0?0:d,d!==0&&d!==y.retryLane&&(y.retryLane=d,hn(e,d),Ht(a,e,d,-1))}return au(),a=$a(Error(o(421))),wl(e,n,k,a)}return d.data==="$?"?(n.flags|=128,n.child=e.child,n=iv.bind(null,e),d._reactRetry=n,null):(e=y.treeContext,kt=Mn(d.nextSibling),St=n,Oe=!0,Dt=null,e!==null&&(Tt[It++]=fn,Tt[It++]=dn,Tt[It++]=tr,fn=e.id,dn=e.overflow,tr=n),n=qa(n,a.children),n.flags|=4096,n)}function Jd(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),Sa(e.return,n,i)}function Ya(e,n,i,a,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:d}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=a,y.tail=i,y.tailMode=d)}function eh(e,n,i){var a=n.pendingProps,d=a.revealOrder,y=a.tail;if(at(e,n,a.children,i),a=$e.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jd(e,i,n);else if(e.tag===19)Jd(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Le($e,a),(n.mode&1)===0)n.memoizedState=null;else switch(d){case"forwards":for(i=n.child,d=null;i!==null;)e=i.alternate,e!==null&&dl(e)===null&&(d=i),i=i.sibling;i=d,i===null?(d=n.child,n.child=null):(d=i.sibling,i.sibling=null),Ya(n,!1,d,i,y);break;case"backwards":for(i=null,d=n.child,n.child=null;d!==null;){if(e=d.alternate,e!==null&&dl(e)===null){n.child=d;break}e=d.sibling,d.sibling=i,i=d,d=e}Ya(n,!0,i,null,y);break;case"together":Ya(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function xl(e,n){(n.mode&1)===0&&e!==null&&(e.alternate=null,n.alternate=null,n.flags|=2)}function mn(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),lr|=n.lanes,(i&n.childLanes)===0)return null;if(e!==null&&n.child!==e.child)throw Error(o(153));if(n.child!==null){for(e=n.child,i=$n(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=$n(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function qy(e,n,i){switch(n.tag){case 3:Qd(n),jr();break;case 5:pd(n);break;case 1:ht(n.type)&&nl(n);break;case 4:Na(n,n.stateNode.containerInfo);break;case 10:var a=n.type._context,d=n.memoizedProps.value;Le(al,a._currentValue),a._currentValue=d;break;case 13:if(a=n.memoizedState,a!==null)return a.dehydrated!==null?(Le($e,$e.current&1),n.flags|=128,null):(i&n.child.childLanes)!==0?Zd(e,n,i):(Le($e,$e.current&1),e=mn(e,n,i),e!==null?e.sibling:null);Le($e,$e.current&1);break;case 19:if(a=(i&n.childLanes)!==0,(e.flags&128)!==0){if(a)return eh(e,n,i);n.flags|=128}if(d=n.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Le($e,$e.current),a)break;return null;case 22:case 23:return n.lanes=0,Yd(e,n,i)}return mn(e,n,i)}var th,Xa,nh,rh;th=function(e,n){for(var i=n.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},Xa=function(){},nh=function(e,n,i,a){var d=e.memoizedProps;if(d!==a){e=n.stateNode,ir(Jt.current);var y=null;switch(i){case"input":d=Se(e,d),a=Se(e,a),y=[];break;case"select":d=G({},d,{value:void 0}),a=G({},a,{value:void 0}),y=[];break;case"textarea":d=ln(e,d),a=ln(e,a),y=[];break;default:typeof d.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=Jo)}ui(i,a);var k;i=null;for(ne in d)if(!a.hasOwnProperty(ne)&&d.hasOwnProperty(ne)&&d[ne]!=null)if(ne==="style"){var A=d[ne];for(k in A)A.hasOwnProperty(k)&&(i||(i={}),i[k]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(l.hasOwnProperty(ne)?y||(y=[]):(y=y||[]).push(ne,null));for(ne in a){var $=a[ne];if(A=d!=null?d[ne]:void 0,a.hasOwnProperty(ne)&&$!==A&&($!=null||A!=null))if(ne==="style")if(A){for(k in A)!A.hasOwnProperty(k)||$&&$.hasOwnProperty(k)||(i||(i={}),i[k]="");for(k in $)$.hasOwnProperty(k)&&A[k]!==$[k]&&(i||(i={}),i[k]=$[k])}else i||(y||(y=[]),y.push(ne,i)),i=$;else ne==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,A=A?A.__html:void 0,$!=null&&A!==$&&(y=y||[]).push(ne,$)):ne==="children"?typeof $!="string"&&typeof $!="number"||(y=y||[]).push(ne,""+$):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(l.hasOwnProperty(ne)?($!=null&&ne==="onScroll"&&ze("scroll",e),y||A===$||(y=[])):(y=y||[]).push(ne,$))}i&&(y=y||[]).push("style",i);var ne=y;(n.updateQueue=ne)&&(n.flags|=4)}},rh=function(e,n,i,a){i!==a&&(n.flags|=4)};function qi(e,n){if(!Oe)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ot(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var d=e.child;d!==null;)i|=d.lanes|d.childLanes,a|=d.subtreeFlags&14680064,a|=d.flags&14680064,d.return=e,d=d.sibling;else for(d=e.child;d!==null;)i|=d.lanes|d.childLanes,a|=d.subtreeFlags,a|=d.flags,d.return=e,d=d.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function Yy(e,n,i){var a=n.pendingProps;switch(ga(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(n),null;case 1:return ht(n.type)&&tl(),ot(n),null;case 3:return a=n.stateNode,Br(),Ae(dt),Ae(rt),Ma(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ll(n)?n.flags|=4:e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Dt!==null&&(ou(Dt),Dt=null))),Xa(e,n),ot(n),null;case 5:ba(n);var d=ir(Hi.current);if(i=n.type,e!==null&&n.stateNode!=null)nh(e,n,i,a,d),e.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!a){if(n.stateNode===null)throw Error(o(166));return ot(n),null}if(e=ir(Jt.current),ll(n)){a=n.stateNode,i=n.type;var y=n.memoizedProps;switch(a[Zt]=n,a[Oi]=y,e=(n.mode&1)!==0,i){case"dialog":ze("cancel",a),ze("close",a);break;case"iframe":case"object":case"embed":ze("load",a);break;case"video":case"audio":for(d=0;d<Ri.length;d++)ze(Ri[d],a);break;case"source":ze("error",a);break;case"img":case"image":case"link":ze("error",a),ze("load",a);break;case"details":ze("toggle",a);break;case"input":Ne(a,y),ze("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!y.multiple},ze("invalid",a);break;case"textarea":Gt(a,y),ze("invalid",a)}ui(i,y),d=null;for(var k in y)if(y.hasOwnProperty(k)){var A=y[k];k==="children"?typeof A=="string"?a.textContent!==A&&(y.suppressHydrationWarning!==!0&&Zo(a.textContent,A,e),d=["children",A]):typeof A=="number"&&a.textContent!==""+A&&(y.suppressHydrationWarning!==!0&&Zo(a.textContent,A,e),d=["children",""+A]):l.hasOwnProperty(k)&&A!=null&&k==="onScroll"&&ze("scroll",a)}switch(i){case"input":we(a),st(a,y,!0);break;case"textarea":we(a),ft(a);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(a.onclick=Jo)}a=d,n.updateQueue=a,a!==null&&(n.flags|=4)}else{k=d.nodeType===9?d:d.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pt(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=k.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=k.createElement(i,{is:a.is}):(e=k.createElement(i),i==="select"&&(k=e,a.multiple?k.multiple=!0:a.size&&(k.size=a.size))):e=k.createElementNS(e,i),e[Zt]=n,e[Oi]=a,th(e,n,!1,!1),n.stateNode=e;e:{switch(k=ci(i,a),i){case"dialog":ze("cancel",e),ze("close",e),d=a;break;case"iframe":case"object":case"embed":ze("load",e),d=a;break;case"video":case"audio":for(d=0;d<Ri.length;d++)ze(Ri[d],e);d=a;break;case"source":ze("error",e),d=a;break;case"img":case"image":case"link":ze("error",e),ze("load",e),d=a;break;case"details":ze("toggle",e),d=a;break;case"input":Ne(e,a),d=Se(e,a),ze("invalid",e);break;case"option":d=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},d=G({},a,{value:void 0}),ze("invalid",e);break;case"textarea":Gt(e,a),d=ln(e,a),ze("invalid",e);break;default:d=a}ui(i,d),A=d;for(y in A)if(A.hasOwnProperty(y)){var $=A[y];y==="style"?So(e,$):y==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&Eo(e,$)):y==="children"?typeof $=="string"?(i!=="textarea"||$!=="")&&sn(e,$):typeof $=="number"&&sn(e,""+$):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(l.hasOwnProperty(y)?$!=null&&y==="onScroll"&&ze("scroll",e):$!=null&&_(e,y,$,k))}switch(i){case"input":we(e),st(e,a,!1);break;case"textarea":we(e),ft(e);break;case"option":a.value!=null&&e.setAttribute("value",""+K(a.value));break;case"select":e.multiple=!!a.multiple,y=a.value,y!=null?nt(e,!!a.multiple,y,!1):a.defaultValue!=null&&nt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof d.onClick=="function"&&(e.onclick=Jo)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return ot(n),null;case 6:if(e&&n.stateNode!=null)rh(e,n,e.memoizedProps,a);else{if(typeof a!="string"&&n.stateNode===null)throw Error(o(166));if(i=ir(Hi.current),ir(Jt.current),ll(n)){if(a=n.stateNode,i=n.memoizedProps,a[Zt]=n,(y=a.nodeValue!==i)&&(e=St,e!==null))switch(e.tag){case 3:Zo(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(a.nodeValue,i,(e.mode&1)!==0)}y&&(n.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[Zt]=n,n.stateNode=a}return ot(n),null;case 13:if(Ae($e),a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Oe&&kt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)ld(),jr(),n.flags|=98560,y=!1;else if(y=ll(n),a!==null&&a.dehydrated!==null){if(e===null){if(!y)throw Error(o(318));if(y=n.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(o(317));y[Zt]=n}else jr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;ot(n),y=!1}else Dt!==null&&(ou(Dt),Dt=null),y=!0;if(!y)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=i,n):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(n.child.flags|=8192,(n.mode&1)!==0&&(e===null||($e.current&1)!==0?Ge===0&&(Ge=3):au())),n.updateQueue!==null&&(n.flags|=4),ot(n),null);case 4:return Br(),Xa(e,n),e===null&&zi(n.stateNode.containerInfo),ot(n),null;case 10:return _a(n.type._context),ot(n),null;case 17:return ht(n.type)&&tl(),ot(n),null;case 19:if(Ae($e),y=n.memoizedState,y===null)return ot(n),null;if(a=(n.flags&128)!==0,k=y.rendering,k===null)if(a)qi(y,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(k=dl(e),k!==null){for(n.flags|=128,qi(y,!1),a=k.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),n.subtreeFlags=0,a=i,i=n.child;i!==null;)y=i,e=a,y.flags&=14680066,k=y.alternate,k===null?(y.childLanes=0,y.lanes=e,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=k.childLanes,y.lanes=k.lanes,y.child=k.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=k.memoizedProps,y.memoizedState=k.memoizedState,y.updateQueue=k.updateQueue,y.type=k.type,e=k.dependencies,y.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Le($e,$e.current&1|2),n.child}e=e.sibling}y.tail!==null&&je()>Yr&&(n.flags|=128,a=!0,qi(y,!1),n.lanes=4194304)}else{if(!a)if(e=dl(k),e!==null){if(n.flags|=128,a=!0,i=e.updateQueue,i!==null&&(n.updateQueue=i,n.flags|=4),qi(y,!0),y.tail===null&&y.tailMode==="hidden"&&!k.alternate&&!Oe)return ot(n),null}else 2*je()-y.renderingStartTime>Yr&&i!==1073741824&&(n.flags|=128,a=!0,qi(y,!1),n.lanes=4194304);y.isBackwards?(k.sibling=n.child,n.child=k):(i=y.last,i!==null?i.sibling=k:n.child=k,y.last=k)}return y.tail!==null?(n=y.tail,y.rendering=n,y.tail=n.sibling,y.renderingStartTime=je(),n.sibling=null,i=$e.current,Le($e,a?i&1|2:i&1),n):(ot(n),null);case 22:case 23:return su(),a=n.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(n.flags|=8192),a&&(n.mode&1)!==0?(Ct&1073741824)!==0&&(ot(n),n.subtreeFlags&6&&(n.flags|=8192)):ot(n),null;case 24:return null;case 25:return null}throw Error(o(156,n.tag))}function Xy(e,n){switch(ga(n),n.tag){case 1:return ht(n.type)&&tl(),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Br(),Ae(dt),Ae(rt),Ma(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 5:return ba(n),null;case 13:if(Ae($e),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(o(340));jr()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Ae($e),null;case 4:return Br(),null;case 10:return _a(n.type._context),null;case 22:case 23:return su(),null;case 24:return null;default:return null}}var El=!1,lt=!1,Gy=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ur(e,n){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){Ve(e,n,a)}else i.current=null}function Ga(e,n,i){try{i()}catch(a){Ve(e,n,a)}}var ih=!1;function Qy(e,n){if(sa=Ho,e=Of(),Js(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var d=a.anchorOffset,y=a.focusNode;a=a.focusOffset;try{i.nodeType,y.nodeType}catch{i=null;break e}var k=0,A=-1,$=-1,ne=0,ae=0,ue=e,se=null;t:for(;;){for(var pe;ue!==i||d!==0&&ue.nodeType!==3||(A=k+d),ue!==y||a!==0&&ue.nodeType!==3||($=k+a),ue.nodeType===3&&(k+=ue.nodeValue.length),(pe=ue.firstChild)!==null;)se=ue,ue=pe;for(;;){if(ue===e)break t;if(se===i&&++ne===d&&(A=k),se===y&&++ae===a&&($=k),(pe=ue.nextSibling)!==null)break;ue=se,se=ue.parentNode}ue=pe}i=A===-1||$===-1?null:{start:A,end:$}}else i=null}i=i||{start:0,end:0}}else i=null;for(aa={focusedElem:e,selectionRange:i},Ho=!1,me=n;me!==null;)if(n=me,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,me=e;else for(;me!==null;){n=me;try{var ge=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,Be=ge.memoizedState,ee=n.stateNode,q=ee.getSnapshotBeforeUpdate(n.elementType===n.type?ye:Ft(n.type,ye),Be);ee.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var te=n.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(ce){Ve(n,n.return,ce)}if(e=n.sibling,e!==null){e.return=n.return,me=e;break}me=n.return}return ge=ih,ih=!1,ge}function Yi(e,n,i){var a=n.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var d=a=a.next;do{if((d.tag&e)===e){var y=d.destroy;d.destroy=void 0,y!==void 0&&Ga(n,i,y)}d=d.next}while(d!==a)}}function _l(e,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==n)}}function Qa(e){var n=e.ref;if(n!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof n=="function"?n(e):n.current=e}}function oh(e){var n=e.alternate;n!==null&&(e.alternate=null,oh(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&(delete n[Zt],delete n[Oi],delete n[da],delete n[Ly],delete n[Ry])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lh(e){return e.tag===5||e.tag===3||e.tag===4}function sh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ka(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.nodeType===8?i.parentNode.insertBefore(e,n):i.insertBefore(e,n):(i.nodeType===8?(n=i.parentNode,n.insertBefore(e,i)):(n=i,n.appendChild(e)),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Jo));else if(a!==4&&(e=e.child,e!==null))for(Ka(e,n,i),e=e.sibling;e!==null;)Ka(e,n,i),e=e.sibling}function Za(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Za(e,n,i),e=e.sibling;e!==null;)Za(e,n,i),e=e.sibling}var Je=null,jt=!1;function An(e,n,i){for(i=i.child;i!==null;)ah(e,n,i),i=i.sibling}function ah(e,n,i){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Sr,i)}catch{}switch(i.tag){case 5:lt||Ur(i,n);case 6:var a=Je,d=jt;Je=null,An(e,n,i),Je=a,jt=d,Je!==null&&(jt?(e=Je,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Je.removeChild(i.stateNode));break;case 18:Je!==null&&(jt?(e=Je,i=i.stateNode,e.nodeType===8?fa(e.parentNode,i):e.nodeType===1&&fa(e,i),Ci(e)):fa(Je,i.stateNode));break;case 4:a=Je,d=jt,Je=i.stateNode.containerInfo,jt=!0,An(e,n,i),Je=a,jt=d;break;case 0:case 11:case 14:case 15:if(!lt&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){d=a=a.next;do{var y=d,k=y.destroy;y=y.tag,k!==void 0&&((y&2)!==0||(y&4)!==0)&&Ga(i,n,k),d=d.next}while(d!==a)}An(e,n,i);break;case 1:if(!lt&&(Ur(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(A){Ve(i,n,A)}An(e,n,i);break;case 21:An(e,n,i);break;case 22:i.mode&1?(lt=(a=lt)||i.memoizedState!==null,An(e,n,i),lt=a):An(e,n,i);break;default:An(e,n,i)}}function uh(e){var n=e.updateQueue;if(n!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Gy),n.forEach(function(a){var d=ov.bind(null,e,a);i.has(a)||(i.add(a),a.then(d,d))})}}function $t(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var d=i[a];try{var y=e,k=n,A=k;e:for(;A!==null;){switch(A.tag){case 5:Je=A.stateNode,jt=!1;break e;case 3:Je=A.stateNode.containerInfo,jt=!0;break e;case 4:Je=A.stateNode.containerInfo,jt=!0;break e}A=A.return}if(Je===null)throw Error(o(160));ah(y,k,d),Je=null,jt=!1;var $=d.alternate;$!==null&&($.return=null),d.return=null}catch(ne){Ve(d,n,ne)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)ch(n,e),n=n.sibling}function ch(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($t(n,e),tn(e),a&4){try{Yi(3,e,e.return),_l(3,e)}catch(ye){Ve(e,e.return,ye)}try{Yi(5,e,e.return)}catch(ye){Ve(e,e.return,ye)}}break;case 1:$t(n,e),tn(e),a&512&&i!==null&&Ur(i,i.return);break;case 5:if($t(n,e),tn(e),a&512&&i!==null&&Ur(i,i.return),e.flags&32){var d=e.stateNode;try{sn(d,"")}catch(ye){Ve(e,e.return,ye)}}if(a&4&&(d=e.stateNode,d!=null)){var y=e.memoizedProps,k=i!==null?i.memoizedProps:y,A=e.type,$=e.updateQueue;if(e.updateQueue=null,$!==null)try{A==="input"&&y.type==="radio"&&y.name!=null&&be(d,y),ci(A,k);var ne=ci(A,y);for(k=0;k<$.length;k+=2){var ae=$[k],ue=$[k+1];ae==="style"?So(d,ue):ae==="dangerouslySetInnerHTML"?Eo(d,ue):ae==="children"?sn(d,ue):_(d,ae,ue,ne)}switch(A){case"input":Re(d,y);break;case"textarea":Qt(d,y);break;case"select":var se=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!y.multiple;var pe=y.value;pe!=null?nt(d,!!y.multiple,pe,!1):se!==!!y.multiple&&(y.defaultValue!=null?nt(d,!!y.multiple,y.defaultValue,!0):nt(d,!!y.multiple,y.multiple?[]:"",!1))}d[Oi]=y}catch(ye){Ve(e,e.return,ye)}}break;case 6:if($t(n,e),tn(e),a&4){if(e.stateNode===null)throw Error(o(162));d=e.stateNode,y=e.memoizedProps;try{d.nodeValue=y}catch(ye){Ve(e,e.return,ye)}}break;case 3:if($t(n,e),tn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Ci(n.containerInfo)}catch(ye){Ve(e,e.return,ye)}break;case 4:$t(n,e),tn(e);break;case 13:$t(n,e),tn(e),d=e.child,d.flags&8192&&(y=d.memoizedState!==null,d.stateNode.isHidden=y,!y||d.alternate!==null&&d.alternate.memoizedState!==null||(tu=je())),a&4&&uh(e);break;case 22:if(ae=i!==null&&i.memoizedState!==null,e.mode&1?(lt=(ne=lt)||ae,$t(n,e),lt=ne):$t(n,e),tn(e),a&8192){if(ne=e.memoizedState!==null,(e.stateNode.isHidden=ne)&&!ae&&(e.mode&1)!==0)for(me=e,ae=e.child;ae!==null;){for(ue=me=ae;me!==null;){switch(se=me,pe=se.child,se.tag){case 0:case 11:case 14:case 15:Yi(4,se,se.return);break;case 1:Ur(se,se.return);var ge=se.stateNode;if(typeof ge.componentWillUnmount=="function"){a=se,i=se.return;try{n=a,ge.props=n.memoizedProps,ge.state=n.memoizedState,ge.componentWillUnmount()}catch(ye){Ve(a,i,ye)}}break;case 5:Ur(se,se.return);break;case 22:if(se.memoizedState!==null){hh(ue);continue}}pe!==null?(pe.return=se,me=pe):hh(ue)}ae=ae.sibling}e:for(ae=null,ue=e;;){if(ue.tag===5){if(ae===null){ae=ue;try{d=ue.stateNode,ne?(y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(A=ue.stateNode,$=ue.memoizedProps.style,k=$!=null&&$.hasOwnProperty("display")?$.display:null,A.style.display=_o("display",k))}catch(ye){Ve(e,e.return,ye)}}}else if(ue.tag===6){if(ae===null)try{ue.stateNode.nodeValue=ne?"":ue.memoizedProps}catch(ye){Ve(e,e.return,ye)}}else if((ue.tag!==22&&ue.tag!==23||ue.memoizedState===null||ue===e)&&ue.child!==null){ue.child.return=ue,ue=ue.child;continue}if(ue===e)break e;for(;ue.sibling===null;){if(ue.return===null||ue.return===e)break e;ae===ue&&(ae=null),ue=ue.return}ae===ue&&(ae=null),ue.sibling.return=ue.return,ue=ue.sibling}}break;case 19:$t(n,e),tn(e),a&4&&uh(e);break;case 21:break;default:$t(n,e),tn(e)}}function tn(e){var n=e.flags;if(n&2){try{e:{for(var i=e.return;i!==null;){if(lh(i)){var a=i;break e}i=i.return}throw Error(o(160))}switch(a.tag){case 5:var d=a.stateNode;a.flags&32&&(sn(d,""),a.flags&=-33);var y=sh(e);Za(e,y,d);break;case 3:case 4:var k=a.stateNode.containerInfo,A=sh(e);Ka(e,A,k);break;default:throw Error(o(161))}}catch($){Ve(e,e.return,$)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Ky(e,n,i){me=e,fh(e)}function fh(e,n,i){for(var a=(e.mode&1)!==0;me!==null;){var d=me,y=d.child;if(d.tag===22&&a){var k=d.memoizedState!==null||El;if(!k){var A=d.alternate,$=A!==null&&A.memoizedState!==null||lt;A=El;var ne=lt;if(El=k,(lt=$)&&!ne)for(me=d;me!==null;)k=me,$=k.child,k.tag===22&&k.memoizedState!==null?ph(d):$!==null?($.return=k,me=$):ph(d);for(;y!==null;)me=y,fh(y),y=y.sibling;me=d,El=A,lt=ne}dh(e)}else(d.subtreeFlags&8772)!==0&&y!==null?(y.return=d,me=y):dh(e)}}function dh(e){for(;me!==null;){var n=me;if((n.flags&8772)!==0){var i=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:lt||_l(5,n);break;case 1:var a=n.stateNode;if(n.flags&4&&!lt)if(i===null)a.componentDidMount();else{var d=n.elementType===n.type?i.memoizedProps:Ft(n.type,i.memoizedProps);a.componentDidUpdate(d,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var y=n.updateQueue;y!==null&&hd(n,y,a);break;case 3:var k=n.updateQueue;if(k!==null){if(i=null,n.child!==null)switch(n.child.tag){case 5:i=n.child.stateNode;break;case 1:i=n.child.stateNode}hd(n,k,i)}break;case 5:var A=n.stateNode;if(i===null&&n.flags&4){i=A;var $=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&i.focus();break;case"img":$.src&&(i.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var ne=n.alternate;if(ne!==null){var ae=ne.memoizedState;if(ae!==null){var ue=ae.dehydrated;ue!==null&&Ci(ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}lt||n.flags&512&&Qa(n)}catch(se){Ve(n,n.return,se)}}if(n===e){me=null;break}if(i=n.sibling,i!==null){i.return=n.return,me=i;break}me=n.return}}function hh(e){for(;me!==null;){var n=me;if(n===e){me=null;break}var i=n.sibling;if(i!==null){i.return=n.return,me=i;break}me=n.return}}function ph(e){for(;me!==null;){var n=me;try{switch(n.tag){case 0:case 11:case 15:var i=n.return;try{_l(4,n)}catch($){Ve(n,i,$)}break;case 1:var a=n.stateNode;if(typeof a.componentDidMount=="function"){var d=n.return;try{a.componentDidMount()}catch($){Ve(n,d,$)}}var y=n.return;try{Qa(n)}catch($){Ve(n,y,$)}break;case 5:var k=n.return;try{Qa(n)}catch($){Ve(n,k,$)}}}catch($){Ve(n,n.return,$)}if(n===e){me=null;break}var A=n.sibling;if(A!==null){A.return=n.return,me=A;break}me=n.return}}var Zy=Math.ceil,Sl=N.ReactCurrentDispatcher,Ja=N.ReactCurrentOwner,zt=N.ReactCurrentBatchConfig,Me=0,Ke=null,We=null,et=0,Ct=0,qr=Tn(0),Ge=0,Xi=null,lr=0,kl=0,eu=0,Gi=null,mt=null,tu=0,Yr=1/0,gn=null,Cl=!1,nu=null,On=null,Nl=!1,Dn=null,bl=0,Qi=0,ru=null,Pl=-1,Ml=0;function ut(){return(Me&6)!==0?je():Pl!==-1?Pl:Pl=je()}function Fn(e){return(e.mode&1)===0?1:(Me&2)!==0&&et!==0?et&-et:Ay.transition!==null?(Ml===0&&(Ml=Fo()),Ml):(e=Ie,e!==0||(e=window.event,e=e===void 0?16:gf(e.type)),e)}function Ht(e,n,i,a){if(50<Qi)throw Qi=0,ru=null,Error(o(185));Zn(e,i,a),((Me&2)===0||e!==Ke)&&(e===Ke&&((Me&2)===0&&(kl|=i),Ge===4&&jn(e,et)),gt(e,a),i===1&&Me===0&&(n.mode&1)===0&&(Yr=je()+500,rl&&Ln()))}function gt(e,n){var i=e.callbackNode;Do(e,n);var a=an(e,e===Ke?et:0);if(a===0)i!==null&&Ro(i),e.callbackNode=null,e.callbackPriority=0;else if(n=a&-a,e.callbackPriority!==n){if(i!=null&&Ro(i),n===1)e.tag===0?zy(gh.bind(null,e)):td(gh.bind(null,e)),Ty(function(){(Me&6)===0&&Ln()}),i=null;else{switch(af(a)){case 1:i=wi;break;case 4:i=Ao;break;case 16:i=_r;break;case 536870912:i=Oo;break;default:i=_r}i=kh(i,mh.bind(null,e))}e.callbackPriority=n,e.callbackNode=i}}function mh(e,n){if(Pl=-1,Ml=0,(Me&6)!==0)throw Error(o(327));var i=e.callbackNode;if(Xr()&&e.callbackNode!==i)return null;var a=an(e,e===Ke?et:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||n)n=Tl(e,a);else{n=a;var d=Me;Me|=2;var y=vh();(Ke!==e||et!==n)&&(gn=null,Yr=je()+500,ar(e,n));do try{tv();break}catch(A){yh(e,A)}while(!0);Ea(),Sl.current=y,Me=d,We!==null?n=0:(Ke=null,et=0,n=Ge)}if(n!==0){if(n===2&&(d=xi(e),d!==0&&(a=d,n=iu(e,d))),n===1)throw i=Xi,ar(e,0),jn(e,a),gt(e,je()),i;if(n===6)jn(e,a);else{if(d=e.current.alternate,(a&30)===0&&!Jy(d)&&(n=Tl(e,a),n===2&&(y=xi(e),y!==0&&(a=y,n=iu(e,y))),n===1))throw i=Xi,ar(e,0),jn(e,a),gt(e,je()),i;switch(e.finishedWork=d,e.finishedLanes=a,n){case 0:case 1:throw Error(o(345));case 2:ur(e,mt,gn);break;case 3:if(jn(e,a),(a&130023424)===a&&(n=tu+500-je(),10<n)){if(an(e,0)!==0)break;if(d=e.suspendedLanes,(d&a)!==a){ut(),e.pingedLanes|=e.suspendedLanes&d;break}e.timeoutHandle=ca(ur.bind(null,e,mt,gn),n);break}ur(e,mt,gn);break;case 4:if(jn(e,a),(a&4194240)===a)break;for(n=e.eventTimes,d=-1;0<a;){var k=31-Et(a);y=1<<k,k=n[k],k>d&&(d=k),a&=~y}if(a=d,a=je()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*Zy(a/1960))-a,10<a){e.timeoutHandle=ca(ur.bind(null,e,mt,gn),a);break}ur(e,mt,gn);break;case 5:ur(e,mt,gn);break;default:throw Error(o(329))}}}return gt(e,je()),e.callbackNode===i?mh.bind(null,e):null}function iu(e,n){var i=Gi;return e.current.memoizedState.isDehydrated&&(ar(e,n).flags|=256),e=Tl(e,n),e!==2&&(n=mt,mt=i,n!==null&&ou(n)),e}function ou(e){mt===null?mt=e:mt.push.apply(mt,e)}function Jy(e){for(var n=e;;){if(n.flags&16384){var i=n.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var d=i[a],y=d.getSnapshot;d=d.value;try{if(!Ot(y(),d))return!1}catch{return!1}}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function jn(e,n){for(n&=~eu,n&=~kl,e.suspendedLanes|=n,e.pingedLanes&=~n,e=e.expirationTimes;0<n;){var i=31-Et(n),a=1<<i;e[i]=-1,n&=~a}}function gh(e){if((Me&6)!==0)throw Error(o(327));Xr();var n=an(e,0);if((n&1)===0)return gt(e,je()),null;var i=Tl(e,n);if(e.tag!==0&&i===2){var a=xi(e);a!==0&&(n=a,i=iu(e,a))}if(i===1)throw i=Xi,ar(e,0),jn(e,n),gt(e,je()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=n,ur(e,mt,gn),gt(e,je()),null}function lu(e,n){var i=Me;Me|=1;try{return e(n)}finally{Me=i,Me===0&&(Yr=je()+500,rl&&Ln())}}function sr(e){Dn!==null&&Dn.tag===0&&(Me&6)===0&&Xr();var n=Me;Me|=1;var i=zt.transition,a=Ie;try{if(zt.transition=null,Ie=1,e)return e()}finally{Ie=a,zt.transition=i,Me=n,(Me&6)===0&&Ln()}}function su(){Ct=qr.current,Ae(qr)}function ar(e,n){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,My(i)),We!==null)for(i=We.return;i!==null;){var a=i;switch(ga(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&tl();break;case 3:Br(),Ae(dt),Ae(rt),Ma();break;case 5:ba(a);break;case 4:Br();break;case 13:Ae($e);break;case 19:Ae($e);break;case 10:_a(a.type._context);break;case 22:case 23:su()}i=i.return}if(Ke=e,We=e=$n(e.current,null),et=Ct=n,Ge=0,Xi=null,eu=kl=lr=0,mt=Gi=null,rr!==null){for(n=0;n<rr.length;n++)if(i=rr[n],a=i.interleaved,a!==null){i.interleaved=null;var d=a.next,y=i.pending;if(y!==null){var k=y.next;y.next=d,a.next=k}i.pending=a}rr=null}return e}function yh(e,n){do{var i=We;try{if(Ea(),hl.current=yl,pl){for(var a=He.memoizedState;a!==null;){var d=a.queue;d!==null&&(d.pending=null),a=a.next}pl=!1}if(or=0,Qe=Xe=He=null,Vi=!1,Bi=0,Ja.current=null,i===null||i.return===null){Ge=1,Xi=n,We=null;break}e:{var y=e,k=i.return,A=i,$=n;if(n=et,A.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var ne=$,ae=A,ue=ae.tag;if((ae.mode&1)===0&&(ue===0||ue===11||ue===15)){var se=ae.alternate;se?(ae.updateQueue=se.updateQueue,ae.memoizedState=se.memoizedState,ae.lanes=se.lanes):(ae.updateQueue=null,ae.memoizedState=null)}var pe=Vd(k);if(pe!==null){pe.flags&=-257,Bd(pe,k,A,y,n),pe.mode&1&&Hd(y,ne,n),n=pe,$=ne;var ge=n.updateQueue;if(ge===null){var ye=new Set;ye.add($),n.updateQueue=ye}else ge.add($);break e}else{if((n&1)===0){Hd(y,ne,n),au();break e}$=Error(o(426))}}else if(Oe&&A.mode&1){var Be=Vd(k);if(Be!==null){(Be.flags&65536)===0&&(Be.flags|=256),Bd(Be,k,A,y,n),wa(Wr($,A));break e}}y=$=Wr($,A),Ge!==4&&(Ge=2),Gi===null?Gi=[y]:Gi.push(y),y=k;do{switch(y.tag){case 3:y.flags|=65536,n&=-n,y.lanes|=n;var ee=jd(y,$,n);dd(y,ee);break e;case 1:A=$;var q=y.type,te=y.stateNode;if((y.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(On===null||!On.has(te)))){y.flags|=65536,n&=-n,y.lanes|=n;var ce=$d(y,A,n);dd(y,ce);break e}}y=y.return}while(y!==null)}xh(i)}catch(ve){n=ve,We===i&&i!==null&&(We=i=i.return);continue}break}while(!0)}function vh(){var e=Sl.current;return Sl.current=yl,e===null?yl:e}function au(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),Ke===null||(lr&268435455)===0&&(kl&268435455)===0||jn(Ke,et)}function Tl(e,n){var i=Me;Me|=2;var a=vh();(Ke!==e||et!==n)&&(gn=null,ar(e,n));do try{ev();break}catch(d){yh(e,d)}while(!0);if(Ea(),Me=i,Sl.current=a,We!==null)throw Error(o(261));return Ke=null,et=0,Ge}function ev(){for(;We!==null;)wh(We)}function tv(){for(;We!==null&&!Is();)wh(We)}function wh(e){var n=Sh(e.alternate,e,Ct);e.memoizedProps=e.pendingProps,n===null?xh(e):We=n,Ja.current=null}function xh(e){var n=e;do{var i=n.alternate;if(e=n.return,(n.flags&32768)===0){if(i=Yy(i,n,Ct),i!==null){We=i;return}}else{if(i=Xy(i,n),i!==null){i.flags&=32767,We=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ge=6,We=null;return}}if(n=n.sibling,n!==null){We=n;return}We=n=e}while(n!==null);Ge===0&&(Ge=5)}function ur(e,n,i){var a=Ie,d=zt.transition;try{zt.transition=null,Ie=1,nv(e,n,i,a)}finally{zt.transition=d,Ie=a}return null}function nv(e,n,i,a){do Xr();while(Dn!==null);if((Me&6)!==0)throw Error(o(327));i=e.finishedWork;var d=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var y=i.lanes|i.childLanes;if(js(e,y),e===Ke&&(We=Ke=null,et=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||Nl||(Nl=!0,kh(_r,function(){return Xr(),null})),y=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||y){y=zt.transition,zt.transition=null;var k=Ie;Ie=1;var A=Me;Me|=4,Ja.current=null,Qy(e,i),ch(i,e),_y(aa),Ho=!!sa,aa=sa=null,e.current=i,Ky(i),zo(),Me=A,Ie=k,zt.transition=y}else e.current=i;if(Nl&&(Nl=!1,Dn=e,bl=d),y=e.pendingLanes,y===0&&(On=null),zs(i.stateNode),gt(e,je()),n!==null)for(a=e.onRecoverableError,i=0;i<n.length;i++)d=n[i],a(d.value,{componentStack:d.stack,digest:d.digest});if(Cl)throw Cl=!1,e=nu,nu=null,e;return(bl&1)!==0&&e.tag!==0&&Xr(),y=e.pendingLanes,(y&1)!==0?e===ru?Qi++:(Qi=0,ru=e):Qi=0,Ln(),null}function Xr(){if(Dn!==null){var e=af(bl),n=zt.transition,i=Ie;try{if(zt.transition=null,Ie=16>e?16:e,Dn===null)var a=!1;else{if(e=Dn,Dn=null,bl=0,(Me&6)!==0)throw Error(o(331));var d=Me;for(Me|=4,me=e.current;me!==null;){var y=me,k=y.child;if((me.flags&16)!==0){var A=y.deletions;if(A!==null){for(var $=0;$<A.length;$++){var ne=A[$];for(me=ne;me!==null;){var ae=me;switch(ae.tag){case 0:case 11:case 15:Yi(8,ae,y)}var ue=ae.child;if(ue!==null)ue.return=ae,me=ue;else for(;me!==null;){ae=me;var se=ae.sibling,pe=ae.return;if(oh(ae),ae===ne){me=null;break}if(se!==null){se.return=pe,me=se;break}me=pe}}}var ge=y.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var Be=ye.sibling;ye.sibling=null,ye=Be}while(ye!==null)}}me=y}}if((y.subtreeFlags&2064)!==0&&k!==null)k.return=y,me=k;else e:for(;me!==null;){if(y=me,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Yi(9,y,y.return)}var ee=y.sibling;if(ee!==null){ee.return=y.return,me=ee;break e}me=y.return}}var q=e.current;for(me=q;me!==null;){k=me;var te=k.child;if((k.subtreeFlags&2064)!==0&&te!==null)te.return=k,me=te;else e:for(k=q;me!==null;){if(A=me,(A.flags&2048)!==0)try{switch(A.tag){case 0:case 11:case 15:_l(9,A)}}catch(ve){Ve(A,A.return,ve)}if(A===k){me=null;break e}var ce=A.sibling;if(ce!==null){ce.return=A.return,me=ce;break e}me=A.return}}if(Me=d,Ln(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Sr,e)}catch{}a=!0}return a}finally{Ie=i,zt.transition=n}}return!1}function Eh(e,n,i){n=Wr(i,n),n=jd(e,n,1),e=zn(e,n,1),n=ut(),e!==null&&(Zn(e,1,n),gt(e,n))}function Ve(e,n,i){if(e.tag===3)Eh(e,e,i);else for(;n!==null;){if(n.tag===3){Eh(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(On===null||!On.has(a))){e=Wr(i,e),e=$d(n,e,1),n=zn(n,e,1),e=ut(),n!==null&&(Zn(n,1,e),gt(n,e));break}}n=n.return}}function rv(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),n=ut(),e.pingedLanes|=e.suspendedLanes&i,Ke===e&&(et&i)===i&&(Ge===4||Ge===3&&(et&130023424)===et&&500>je()-tu?ar(e,0):eu|=i),gt(e,n)}function _h(e,n){n===0&&((e.mode&1)===0?n=1:(n=Cr,Cr<<=1,(Cr&130023424)===0&&(Cr=4194304)));var i=ut();e=hn(e,n),e!==null&&(Zn(e,n,i),gt(e,i))}function iv(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),_h(e,i)}function ov(e,n){var i=0;switch(e.tag){case 13:var a=e.stateNode,d=e.memoizedState;d!==null&&(i=d.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(n),_h(e,i)}var Sh;Sh=function(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps||dt.current)pt=!0;else{if((e.lanes&i)===0&&(n.flags&128)===0)return pt=!1,qy(e,n,i);pt=(e.flags&131072)!==0}else pt=!1,Oe&&(n.flags&1048576)!==0&&nd(n,ol,n.index);switch(n.lanes=0,n.tag){case 2:var a=n.type;xl(e,n),e=n.pendingProps;var d=Or(n,rt.current);Vr(n,i),d=La(null,n,a,e,d,i);var y=Ra();return n.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,ht(a)?(y=!0,nl(n)):y=!1,n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Ca(n),d.updater=vl,n.stateNode=d,d._reactInternals=n,ja(n,a,e,i),n=Ba(null,n,a,!0,y,i)):(n.tag=0,Oe&&y&&ma(n),at(null,n,d,i),n=n.child),n;case 16:a=n.elementType;e:{switch(xl(e,n),e=n.pendingProps,d=a._init,a=d(a._payload),n.type=a,d=n.tag=sv(a),e=Ft(a,e),d){case 0:n=Va(null,n,a,e,i);break e;case 1:n=Gd(null,n,a,e,i);break e;case 11:n=Wd(null,n,a,e,i);break e;case 14:n=Ud(null,n,a,Ft(a.type,e),i);break e}throw Error(o(306,a,""))}return n;case 0:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Ft(a,d),Va(e,n,a,d,i);case 1:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Ft(a,d),Gd(e,n,a,d,i);case 3:e:{if(Qd(n),e===null)throw Error(o(387));a=n.pendingProps,y=n.memoizedState,d=y.element,fd(e,n),fl(n,a,null,i);var k=n.memoizedState;if(a=k.element,y.isDehydrated)if(y={element:a,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},n.updateQueue.baseState=y,n.memoizedState=y,n.flags&256){d=Wr(Error(o(423)),n),n=Kd(e,n,a,i,d);break e}else if(a!==d){d=Wr(Error(o(424)),n),n=Kd(e,n,a,i,d);break e}else for(kt=Mn(n.stateNode.containerInfo.firstChild),St=n,Oe=!0,Dt=null,i=ud(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(jr(),a===d){n=mn(e,n,i);break e}at(e,n,a,i)}n=n.child}return n;case 5:return pd(n),e===null&&va(n),a=n.type,d=n.pendingProps,y=e!==null?e.memoizedProps:null,k=d.children,ua(a,d)?k=null:y!==null&&ua(a,y)&&(n.flags|=32),Xd(e,n),at(e,n,k,i),n.child;case 6:return e===null&&va(n),null;case 13:return Zd(e,n,i);case 4:return Na(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=$r(n,null,a,i):at(e,n,a,i),n.child;case 11:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Ft(a,d),Wd(e,n,a,d,i);case 7:return at(e,n,n.pendingProps,i),n.child;case 8:return at(e,n,n.pendingProps.children,i),n.child;case 12:return at(e,n,n.pendingProps.children,i),n.child;case 10:e:{if(a=n.type._context,d=n.pendingProps,y=n.memoizedProps,k=d.value,Le(al,a._currentValue),a._currentValue=k,y!==null)if(Ot(y.value,k)){if(y.children===d.children&&!dt.current){n=mn(e,n,i);break e}}else for(y=n.child,y!==null&&(y.return=n);y!==null;){var A=y.dependencies;if(A!==null){k=y.child;for(var $=A.firstContext;$!==null;){if($.context===a){if(y.tag===1){$=pn(-1,i&-i),$.tag=2;var ne=y.updateQueue;if(ne!==null){ne=ne.shared;var ae=ne.pending;ae===null?$.next=$:($.next=ae.next,ae.next=$),ne.pending=$}}y.lanes|=i,$=y.alternate,$!==null&&($.lanes|=i),Sa(y.return,i,n),A.lanes|=i;break}$=$.next}}else if(y.tag===10)k=y.type===n.type?null:y.child;else if(y.tag===18){if(k=y.return,k===null)throw Error(o(341));k.lanes|=i,A=k.alternate,A!==null&&(A.lanes|=i),Sa(k,i,n),k=y.sibling}else k=y.child;if(k!==null)k.return=y;else for(k=y;k!==null;){if(k===n){k=null;break}if(y=k.sibling,y!==null){y.return=k.return,k=y;break}k=k.return}y=k}at(e,n,d.children,i),n=n.child}return n;case 9:return d=n.type,a=n.pendingProps.children,Vr(n,i),d=Lt(d),a=a(d),n.flags|=1,at(e,n,a,i),n.child;case 14:return a=n.type,d=Ft(a,n.pendingProps),d=Ft(a.type,d),Ud(e,n,a,d,i);case 15:return qd(e,n,n.type,n.pendingProps,i);case 17:return a=n.type,d=n.pendingProps,d=n.elementType===a?d:Ft(a,d),xl(e,n),n.tag=1,ht(a)?(e=!0,nl(n)):e=!1,Vr(n,i),Dd(n,a,d),ja(n,a,d,i),Ba(null,n,a,!0,e,i);case 19:return eh(e,n,i);case 22:return Yd(e,n,i)}throw Error(o(156,n.tag))};function kh(e,n){return Lo(e,n)}function lv(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(e,n,i,a){return new lv(e,n,i,a)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function sv(e){if(typeof e=="function")return uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===O)return 11;if(e===Y)return 14}return 2}function $n(e,n){var i=e.alternate;return i===null?(i=At(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Il(e,n,i,a,d,y){var k=2;if(a=e,typeof e=="function")uu(e)&&(k=1);else if(typeof e=="string")k=5;else e:switch(e){case F:return cr(i.children,d,y,n);case P:k=8,d|=8;break;case R:return e=At(12,i,n,d|2),e.elementType=R,e.lanes=y,e;case J:return e=At(13,i,n,d),e.elementType=J,e.lanes=y,e;case T:return e=At(19,i,n,d),e.elementType=T,e.lanes=y,e;case X:return Ll(i,d,y,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:k=10;break e;case L:k=9;break e;case O:k=11;break e;case Y:k=14;break e;case U:k=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return n=At(k,i,n,d),n.elementType=e,n.type=a,n.lanes=y,n}function cr(e,n,i,a){return e=At(7,e,a,n),e.lanes=i,e}function Ll(e,n,i,a){return e=At(22,e,a,n),e.elementType=X,e.lanes=i,e.stateNode={isHidden:!1},e}function cu(e,n,i){return e=At(6,e,null,n),e.lanes=i,e}function fu(e,n,i){return n=At(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function av(e,n,i,a,d){this.tag=n,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kn(0),this.expirationTimes=Kn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kn(0),this.identifierPrefix=a,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function du(e,n,i,a,d,y,k,A,$){return e=new av(e,n,i,A,$),n===1?(n=1,y===!0&&(n|=8)):n=0,y=At(3,null,null,n),e.current=y,y.stateNode=e,y.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ca(y),e}function uv(e,n,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:a==null?null:""+a,children:e,containerInfo:n,implementation:i}}function Ch(e){if(!e)return In;e=e._reactInternals;e:{if(Kt(e)!==e||e.tag!==1)throw Error(o(170));var n=e;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(ht(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(ht(i))return Jf(e,i,n)}return n}function Nh(e,n,i,a,d,y,k,A,$){return e=du(i,a,!0,e,d,y,k,A,$),e.context=Ch(null),i=e.current,a=ut(),d=Fn(i),y=pn(a,d),y.callback=n??null,zn(i,y,d),e.current.lanes=d,Zn(e,d,a),gt(e,a),e}function Rl(e,n,i,a){var d=n.current,y=ut(),k=Fn(d);return i=Ch(i),n.context===null?n.context=i:n.pendingContext=i,n=pn(y,k),n.payload={element:e},a=a===void 0?null:a,a!==null&&(n.callback=a),e=zn(d,n,k),e!==null&&(Ht(e,d,k,y),cl(e,d,k)),k}function zl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function bh(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function hu(e,n){bh(e,n),(e=e.alternate)&&bh(e,n)}function cv(){return null}var Ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}Al.prototype.render=pu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(o(409));Rl(e,n,null,null)},Al.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;sr(function(){Rl(null,e,null,null)}),n[un]=null}};function Al(e){this._internalRoot=e}Al.prototype.unstable_scheduleHydration=function(e){if(e){var n=ff();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Nn.length&&n!==0&&n<Nn[i].priority;i++);Nn.splice(i,0,e),i===0&&pf(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ol(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mh(){}function fv(e,n,i,a,d){if(d){if(typeof a=="function"){var y=a;a=function(){var ne=zl(k);y.call(ne)}}var k=Nh(n,a,e,0,null,!1,!1,"",Mh);return e._reactRootContainer=k,e[un]=k.current,zi(e.nodeType===8?e.parentNode:e),sr(),k}for(;d=e.lastChild;)e.removeChild(d);if(typeof a=="function"){var A=a;a=function(){var ne=zl($);A.call(ne)}}var $=du(e,0,!1,null,null,!1,!1,"",Mh);return e._reactRootContainer=$,e[un]=$.current,zi(e.nodeType===8?e.parentNode:e),sr(function(){Rl(n,$,i,a)}),$}function Dl(e,n,i,a,d){var y=i._reactRootContainer;if(y){var k=y;if(typeof d=="function"){var A=d;d=function(){var $=zl(k);A.call($)}}Rl(n,k,e,d)}else k=fv(i,n,e,d,a);return zl(k)}uf=function(e){switch(e.tag){case 3:var n=e.stateNode;if(n.current.memoizedState.isDehydrated){var i=Qn(n.pendingLanes);i!==0&&(Nr(n,i|1),gt(n,je()),(Me&6)===0&&(Yr=je()+500,Ln()))}break;case 13:sr(function(){var a=hn(e,1);if(a!==null){var d=ut();Ht(a,e,1,d)}}),hu(e,1)}},$s=function(e){if(e.tag===13){var n=hn(e,134217728);if(n!==null){var i=ut();Ht(n,e,134217728,i)}hu(e,134217728)}},cf=function(e){if(e.tag===13){var n=Fn(e),i=hn(e,n);if(i!==null){var a=ut();Ht(i,e,n,a)}hu(e,n)}},ff=function(){return Ie},df=function(e,n){var i=Ie;try{return Ie=e,n()}finally{Ie=i}},hi=function(e,n,i){switch(n){case"input":if(Re(e,i),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var d=el(a);if(!d)throw Error(o(90));he(a),Re(a,d)}}}break;case"textarea":Qt(e,i);break;case"select":n=i.value,n!=null&&nt(e,!!i.multiple,n,!1)}},bo=lu,Po=sr;var dv={usingClientEntryPoint:!1,Events:[Di,zr,el,Co,No,lu]},Ki={findFiberByHostInstance:Jn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hv={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=To(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{Sr=Fl.inject(hv),xt=Fl}catch{}}return yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dv,yt.createPortal=function(e,n){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(n))throw Error(o(200));return uv(e,n,null,i)},yt.createRoot=function(e,n){if(!mu(e))throw Error(o(299));var i=!1,a="",d=Ph;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(d=n.onRecoverableError)),n=du(e,1,!1,null,null,i,!1,a,d),e[un]=n.current,zi(e.nodeType===8?e.parentNode:e),new pu(n)},yt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=To(n),e=e===null?null:e.stateNode,e},yt.flushSync=function(e){return sr(e)},yt.hydrate=function(e,n,i){if(!Ol(n))throw Error(o(200));return Dl(null,e,n,!0,i)},yt.hydrateRoot=function(e,n,i){if(!mu(e))throw Error(o(405));var a=i!=null&&i.hydratedSources||null,d=!1,y="",k=Ph;if(i!=null&&(i.unstable_strictMode===!0&&(d=!0),i.identifierPrefix!==void 0&&(y=i.identifierPrefix),i.onRecoverableError!==void 0&&(k=i.onRecoverableError)),n=Nh(n,null,e,1,i??null,d,!1,y,k),e[un]=n.current,zi(e),a)for(e=0;e<a.length;e++)i=a[e],d=i._getVersion,d=d(i._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[i,d]:n.mutableSourceEagerHydrationData.push(i,d);return new Al(n)},yt.render=function(e,n,i){if(!Ol(n))throw Error(o(200));return Dl(null,e,n,!1,i)},yt.unmountComponentAtNode=function(e){if(!Ol(e))throw Error(o(40));return e._reactRootContainer?(sr(function(){Dl(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1},yt.unstable_batchedUpdates=lu,yt.unstable_renderSubtreeIntoContainer=function(e,n,i,a){if(!Ol(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Dl(e,n,i,!1,a)},yt.version="18.3.1-next-f1338f8080-20240426",yt}var Dh;function Bm(){if(Dh)return vu.exports;Dh=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(r){console.error(r)}}return t(),vu.exports=Sv(),vu.exports}var Fh;function kv(){if(Fh)return jl;Fh=1;var t=Bm();return jl.createRoot=t.createRoot,jl.hydrateRoot=t.hydrateRoot,jl}var Cv=kv();function Ye(t){if(typeof t=="string"||typeof t=="number")return""+t;let r="";if(Array.isArray(t))for(let o=0,s;o<t.length;o++)(s=Ye(t[o]))!==""&&(r+=(r&&" ")+s);else for(let o in t)t[o]&&(r+=(r&&" ")+o);return r}var Nv={value:()=>{}};function fs(){for(var t=0,r=arguments.length,o={},s;t<r;++t){if(!(s=arguments[t]+"")||s in o||/[\s.]/.test(s))throw new Error("illegal type: "+s);o[s]=[]}return new Gl(o)}function Gl(t){this._=t}function bv(t,r){return t.trim().split(/^|\s+/).map(function(o){var s="",l=o.indexOf(".");if(l>=0&&(s=o.slice(l+1),o=o.slice(0,l)),o&&!r.hasOwnProperty(o))throw new Error("unknown type: "+o);return{type:o,name:s}})}Gl.prototype=fs.prototype={constructor:Gl,on:function(t,r){var o=this._,s=bv(t+"",o),l,c=-1,u=s.length;if(arguments.length<2){for(;++c<u;)if((l=(t=s[c]).type)&&(l=Pv(o[l],t.name)))return l;return}if(r!=null&&typeof r!="function")throw new Error("invalid callback: "+r);for(;++c<u;)if(l=(t=s[c]).type)o[l]=jh(o[l],t.name,r);else if(r==null)for(l in o)o[l]=jh(o[l],t.name,null);return this},copy:function(){var t={},r=this._;for(var o in r)t[o]=r[o].slice();return new Gl(t)},call:function(t,r){if((l=arguments.length-2)>0)for(var o=new Array(l),s=0,l,c;s<l;++s)o[s]=arguments[s+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(c=this._[t],s=0,l=c.length;s<l;++s)c[s].value.apply(r,o)},apply:function(t,r,o){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var s=this._[t],l=0,c=s.length;l<c;++l)s[l].value.apply(r,o)}};function Pv(t,r){for(var o=0,s=t.length,l;o<s;++o)if((l=t[o]).name===r)return l.value}function jh(t,r,o){for(var s=0,l=t.length;s<l;++s)if(t[s].name===r){t[s]=Nv,t=t.slice(0,s).concat(t.slice(s+1));break}return o!=null&&t.push({name:r,value:o}),t}var bc="http://www.w3.org/1999/xhtml";const $h={svg:"http://www.w3.org/2000/svg",xhtml:bc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function ds(t){var r=t+="",o=r.indexOf(":");return o>=0&&(r=t.slice(0,o))!=="xmlns"&&(t=t.slice(o+1)),$h.hasOwnProperty(r)?{space:$h[r],local:t}:t}function Mv(t){return function(){var r=this.ownerDocument,o=this.namespaceURI;return o===bc&&r.documentElement.namespaceURI===bc?r.createElement(t):r.createElementNS(o,t)}}function Tv(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function Wm(t){var r=ds(t);return(r.local?Tv:Mv)(r)}function Iv(){}function Vc(t){return t==null?Iv:function(){return this.querySelector(t)}}function Lv(t){typeof t!="function"&&(t=Vc(t));for(var r=this._groups,o=r.length,s=new Array(o),l=0;l<o;++l)for(var c=r[l],u=c.length,f=s[l]=new Array(u),p,g,m=0;m<u;++m)(p=c[m])&&(g=t.call(p,p.__data__,m,c))&&("__data__"in p&&(g.__data__=p.__data__),f[m]=g);return new bt(s,this._parents)}function Rv(t){return t==null?[]:Array.isArray(t)?t:Array.from(t)}function zv(){return[]}function Um(t){return t==null?zv:function(){return this.querySelectorAll(t)}}function Av(t){return function(){return Rv(t.apply(this,arguments))}}function Ov(t){typeof t=="function"?t=Av(t):t=Um(t);for(var r=this._groups,o=r.length,s=[],l=[],c=0;c<o;++c)for(var u=r[c],f=u.length,p,g=0;g<f;++g)(p=u[g])&&(s.push(t.call(p,p.__data__,g,u)),l.push(p));return new bt(s,l)}function qm(t){return function(){return this.matches(t)}}function Ym(t){return function(r){return r.matches(t)}}var Dv=Array.prototype.find;function Fv(t){return function(){return Dv.call(this.children,t)}}function jv(){return this.firstElementChild}function $v(t){return this.select(t==null?jv:Fv(typeof t=="function"?t:Ym(t)))}var Hv=Array.prototype.filter;function Vv(){return Array.from(this.children)}function Bv(t){return function(){return Hv.call(this.children,t)}}function Wv(t){return this.selectAll(t==null?Vv:Bv(typeof t=="function"?t:Ym(t)))}function Uv(t){typeof t!="function"&&(t=qm(t));for(var r=this._groups,o=r.length,s=new Array(o),l=0;l<o;++l)for(var c=r[l],u=c.length,f=s[l]=[],p,g=0;g<u;++g)(p=c[g])&&t.call(p,p.__data__,g,c)&&f.push(p);return new bt(s,this._parents)}function Xm(t){return new Array(t.length)}function qv(){return new bt(this._enter||this._groups.map(Xm),this._parents)}function es(t,r){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=r}es.prototype={constructor:es,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,r){return this._parent.insertBefore(t,r)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};function Yv(t){return function(){return t}}function Xv(t,r,o,s,l,c){for(var u=0,f,p=r.length,g=c.length;u<g;++u)(f=r[u])?(f.__data__=c[u],s[u]=f):o[u]=new es(t,c[u]);for(;u<p;++u)(f=r[u])&&(l[u]=f)}function Gv(t,r,o,s,l,c,u){var f,p,g=new Map,m=r.length,h=c.length,v=new Array(m),w;for(f=0;f<m;++f)(p=r[f])&&(v[f]=w=u.call(p,p.__data__,f,r)+"",g.has(w)?l[f]=p:g.set(w,p));for(f=0;f<h;++f)w=u.call(t,c[f],f,c)+"",(p=g.get(w))?(s[f]=p,p.__data__=c[f],g.delete(w)):o[f]=new es(t,c[f]);for(f=0;f<m;++f)(p=r[f])&&g.get(v[f])===p&&(l[f]=p)}function Qv(t){return t.__data__}function Kv(t,r){if(!arguments.length)return Array.from(this,Qv);var o=r?Gv:Xv,s=this._parents,l=this._groups;typeof t!="function"&&(t=Yv(t));for(var c=l.length,u=new Array(c),f=new Array(c),p=new Array(c),g=0;g<c;++g){var m=s[g],h=l[g],v=h.length,w=Zv(t.call(m,m&&m.__data__,g,s)),x=w.length,C=f[g]=new Array(x),E=u[g]=new Array(x),S=p[g]=new Array(v);o(m,h,C,E,S,w,r);for(var b=0,_=0,N,z;b<x;++b)if(N=C[b]){for(b>=_&&(_=b+1);!(z=E[_])&&++_<x;);N._next=z||null}}return u=new bt(u,s),u._enter=f,u._exit=p,u}function Zv(t){return typeof t=="object"&&"length"in t?t:Array.from(t)}function Jv(){return new bt(this._exit||this._groups.map(Xm),this._parents)}function e1(t,r,o){var s=this.enter(),l=this,c=this.exit();return typeof t=="function"?(s=t(s),s&&(s=s.selection())):s=s.append(t+""),r!=null&&(l=r(l),l&&(l=l.selection())),o==null?c.remove():o(c),s&&l?s.merge(l).order():l}function t1(t){for(var r=t.selection?t.selection():t,o=this._groups,s=r._groups,l=o.length,c=s.length,u=Math.min(l,c),f=new Array(l),p=0;p<u;++p)for(var g=o[p],m=s[p],h=g.length,v=f[p]=new Array(h),w,x=0;x<h;++x)(w=g[x]||m[x])&&(v[x]=w);for(;p<l;++p)f[p]=o[p];return new bt(f,this._parents)}function n1(){for(var t=this._groups,r=-1,o=t.length;++r<o;)for(var s=t[r],l=s.length-1,c=s[l],u;--l>=0;)(u=s[l])&&(c&&u.compareDocumentPosition(c)^4&&c.parentNode.insertBefore(u,c),c=u);return this}function r1(t){t||(t=i1);function r(h,v){return h&&v?t(h.__data__,v.__data__):!h-!v}for(var o=this._groups,s=o.length,l=new Array(s),c=0;c<s;++c){for(var u=o[c],f=u.length,p=l[c]=new Array(f),g,m=0;m<f;++m)(g=u[m])&&(p[m]=g);p.sort(r)}return new bt(l,this._parents).order()}function i1(t,r){return t<r?-1:t>r?1:t>=r?0:NaN}function o1(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this}function l1(){return Array.from(this)}function s1(){for(var t=this._groups,r=0,o=t.length;r<o;++r)for(var s=t[r],l=0,c=s.length;l<c;++l){var u=s[l];if(u)return u}return null}function a1(){let t=0;for(const r of this)++t;return t}function u1(){return!this.node()}function c1(t){for(var r=this._groups,o=0,s=r.length;o<s;++o)for(var l=r[o],c=0,u=l.length,f;c<u;++c)(f=l[c])&&t.call(f,f.__data__,c,l);return this}function f1(t){return function(){this.removeAttribute(t)}}function d1(t){return function(){this.removeAttributeNS(t.space,t.local)}}function h1(t,r){return function(){this.setAttribute(t,r)}}function p1(t,r){return function(){this.setAttributeNS(t.space,t.local,r)}}function m1(t,r){return function(){var o=r.apply(this,arguments);o==null?this.removeAttribute(t):this.setAttribute(t,o)}}function g1(t,r){return function(){var o=r.apply(this,arguments);o==null?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,o)}}function y1(t,r){var o=ds(t);if(arguments.length<2){var s=this.node();return o.local?s.getAttributeNS(o.space,o.local):s.getAttribute(o)}return this.each((r==null?o.local?d1:f1:typeof r=="function"?o.local?g1:m1:o.local?p1:h1)(o,r))}function Gm(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}function v1(t){return function(){this.style.removeProperty(t)}}function w1(t,r,o){return function(){this.style.setProperty(t,r,o)}}function x1(t,r,o){return function(){var s=r.apply(this,arguments);s==null?this.style.removeProperty(t):this.style.setProperty(t,s,o)}}function E1(t,r,o){return arguments.length>1?this.each((r==null?v1:typeof r=="function"?x1:w1)(t,r,o??"")):ei(this.node(),t)}function ei(t,r){return t.style.getPropertyValue(r)||Gm(t).getComputedStyle(t,null).getPropertyValue(r)}function _1(t){return function(){delete this[t]}}function S1(t,r){return function(){this[t]=r}}function k1(t,r){return function(){var o=r.apply(this,arguments);o==null?delete this[t]:this[t]=o}}function C1(t,r){return arguments.length>1?this.each((r==null?_1:typeof r=="function"?k1:S1)(t,r)):this.node()[t]}function Qm(t){return t.trim().split(/^|\s+/)}function Bc(t){return t.classList||new Km(t)}function Km(t){this._node=t,this._names=Qm(t.getAttribute("class")||"")}Km.prototype={add:function(t){var r=this._names.indexOf(t);r<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var r=this._names.indexOf(t);r>=0&&(this._names.splice(r,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function Zm(t,r){for(var o=Bc(t),s=-1,l=r.length;++s<l;)o.add(r[s])}function Jm(t,r){for(var o=Bc(t),s=-1,l=r.length;++s<l;)o.remove(r[s])}function N1(t){return function(){Zm(this,t)}}function b1(t){return function(){Jm(this,t)}}function P1(t,r){return function(){(r.apply(this,arguments)?Zm:Jm)(this,t)}}function M1(t,r){var o=Qm(t+"");if(arguments.length<2){for(var s=Bc(this.node()),l=-1,c=o.length;++l<c;)if(!s.contains(o[l]))return!1;return!0}return this.each((typeof r=="function"?P1:r?N1:b1)(o,r))}function T1(){this.textContent=""}function I1(t){return function(){this.textContent=t}}function L1(t){return function(){var r=t.apply(this,arguments);this.textContent=r??""}}function R1(t){return arguments.length?this.each(t==null?T1:(typeof t=="function"?L1:I1)(t)):this.node().textContent}function z1(){this.innerHTML=""}function A1(t){return function(){this.innerHTML=t}}function O1(t){return function(){var r=t.apply(this,arguments);this.innerHTML=r??""}}function D1(t){return arguments.length?this.each(t==null?z1:(typeof t=="function"?O1:A1)(t)):this.node().innerHTML}function F1(){this.nextSibling&&this.parentNode.appendChild(this)}function j1(){return this.each(F1)}function $1(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function H1(){return this.each($1)}function V1(t){var r=typeof t=="function"?t:Wm(t);return this.select(function(){return this.appendChild(r.apply(this,arguments))})}function B1(){return null}function W1(t,r){var o=typeof t=="function"?t:Wm(t),s=r==null?B1:typeof r=="function"?r:Vc(r);return this.select(function(){return this.insertBefore(o.apply(this,arguments),s.apply(this,arguments)||null)})}function U1(){var t=this.parentNode;t&&t.removeChild(this)}function q1(){return this.each(U1)}function Y1(){var t=this.cloneNode(!1),r=this.parentNode;return r?r.insertBefore(t,this.nextSibling):t}function X1(){var t=this.cloneNode(!0),r=this.parentNode;return r?r.insertBefore(t,this.nextSibling):t}function G1(t){return this.select(t?X1:Y1)}function Q1(t){return arguments.length?this.property("__data__",t):this.node().__data__}function K1(t){return function(r){t.call(this,r,this.__data__)}}function Z1(t){return t.trim().split(/^|\s+/).map(function(r){var o="",s=r.indexOf(".");return s>=0&&(o=r.slice(s+1),r=r.slice(0,s)),{type:r,name:o}})}function J1(t){return function(){var r=this.__on;if(r){for(var o=0,s=-1,l=r.length,c;o<l;++o)c=r[o],(!t.type||c.type===t.type)&&c.name===t.name?this.removeEventListener(c.type,c.listener,c.options):r[++s]=c;++s?r.length=s:delete this.__on}}}function ew(t,r,o){return function(){var s=this.__on,l,c=K1(r);if(s){for(var u=0,f=s.length;u<f;++u)if((l=s[u]).type===t.type&&l.name===t.name){this.removeEventListener(l.type,l.listener,l.options),this.addEventListener(l.type,l.listener=c,l.options=o),l.value=r;return}}this.addEventListener(t.type,c,o),l={type:t.type,name:t.name,value:r,listener:c,options:o},s?s.push(l):this.__on=[l]}}function tw(t,r,o){var s=Z1(t+""),l,c=s.length,u;if(arguments.length<2){var f=this.node().__on;if(f){for(var p=0,g=f.length,m;p<g;++p)for(l=0,m=f[p];l<c;++l)if((u=s[l]).type===m.type&&u.name===m.name)return m.value}return}for(f=r?ew:J1,l=0;l<c;++l)this.each(f(s[l],r,o));return this}function eg(t,r,o){var s=Gm(t),l=s.CustomEvent;typeof l=="function"?l=new l(r,o):(l=s.document.createEvent("Event"),o?(l.initEvent(r,o.bubbles,o.cancelable),l.detail=o.detail):l.initEvent(r,!1,!1)),t.dispatchEvent(l)}function nw(t,r){return function(){return eg(this,t,r)}}function rw(t,r){return function(){return eg(this,t,r.apply(this,arguments))}}function iw(t,r){return this.each((typeof r=="function"?rw:nw)(t,r))}function*ow(){for(var t=this._groups,r=0,o=t.length;r<o;++r)for(var s=t[r],l=0,c=s.length,u;l<c;++l)(u=s[l])&&(yield u)}var tg=[null];function bt(t,r){this._groups=t,this._parents=r}function go(){return new bt([[document.documentElement]],tg)}function lw(){return this}bt.prototype=go.prototype={constructor:bt,select:Lv,selectAll:Ov,selectChild:$v,selectChildren:Wv,filter:Uv,data:Kv,enter:qv,exit:Jv,join:e1,merge:t1,selection:lw,order:n1,sort:r1,call:o1,nodes:l1,node:s1,size:a1,empty:u1,each:c1,attr:y1,style:E1,property:C1,classed:M1,text:R1,html:D1,raise:j1,lower:H1,append:V1,insert:W1,remove:q1,clone:G1,datum:Q1,on:tw,dispatch:iw,[Symbol.iterator]:ow};function Nt(t){return typeof t=="string"?new bt([[document.querySelector(t)]],[document.documentElement]):new bt([[t]],tg)}function sw(t){let r;for(;r=t.sourceEvent;)t=r;return t}function Vt(t,r){if(t=sw(t),r===void 0&&(r=t.currentTarget),r){var o=r.ownerSVGElement||r;if(o.createSVGPoint){var s=o.createSVGPoint();return s.x=t.clientX,s.y=t.clientY,s=s.matrixTransform(r.getScreenCTM().inverse()),[s.x,s.y]}if(r.getBoundingClientRect){var l=r.getBoundingClientRect();return[t.clientX-l.left-r.clientLeft,t.clientY-l.top-r.clientTop]}}return[t.pageX,t.pageY]}const aw={passive:!1},oo={capture:!0,passive:!1};function Eu(t){t.stopImmediatePropagation()}function Zr(t){t.preventDefault(),t.stopImmediatePropagation()}function ng(t){var r=t.document.documentElement,o=Nt(t).on("dragstart.drag",Zr,oo);"onselectstart"in r?o.on("selectstart.drag",Zr,oo):(r.__noselect=r.style.MozUserSelect,r.style.MozUserSelect="none")}function rg(t,r){var o=t.document.documentElement,s=Nt(t).on("dragstart.drag",null);r&&(s.on("click.drag",Zr,oo),setTimeout(function(){s.on("click.drag",null)},0)),"onselectstart"in o?s.on("selectstart.drag",null):(o.style.MozUserSelect=o.__noselect,delete o.__noselect)}const $l=t=>()=>t;function Pc(t,{sourceEvent:r,subject:o,target:s,identifier:l,active:c,x:u,y:f,dx:p,dy:g,dispatch:m}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:r,enumerable:!0,configurable:!0},subject:{value:o,enumerable:!0,configurable:!0},target:{value:s,enumerable:!0,configurable:!0},identifier:{value:l,enumerable:!0,configurable:!0},active:{value:c,enumerable:!0,configurable:!0},x:{value:u,enumerable:!0,configurable:!0},y:{value:f,enumerable:!0,configurable:!0},dx:{value:p,enumerable:!0,configurable:!0},dy:{value:g,enumerable:!0,configurable:!0},_:{value:m}})}Pc.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};function uw(t){return!t.ctrlKey&&!t.button}function cw(){return this.parentNode}function fw(t,r){return r??{x:t.x,y:t.y}}function dw(){return navigator.maxTouchPoints||"ontouchstart"in this}function ig(){var t=uw,r=cw,o=fw,s=dw,l={},c=fs("start","drag","end"),u=0,f,p,g,m,h=0;function v(N){N.on("mousedown.drag",w).filter(s).on("touchstart.drag",E).on("touchmove.drag",S,aw).on("touchend.drag touchcancel.drag",b).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function w(N,z){if(!(m||!t.call(this,N,z))){var I=_(this,r.call(this,N,z),N,z,"mouse");I&&(Nt(N.view).on("mousemove.drag",x,oo).on("mouseup.drag",C,oo),ng(N.view),Eu(N),g=!1,f=N.clientX,p=N.clientY,I("start",N))}}function x(N){if(Zr(N),!g){var z=N.clientX-f,I=N.clientY-p;g=z*z+I*I>h}l.mouse("drag",N)}function C(N){Nt(N.view).on("mousemove.drag mouseup.drag",null),rg(N.view,g),Zr(N),l.mouse("end",N)}function E(N,z){if(t.call(this,N,z)){var I=N.changedTouches,F=r.call(this,N,z),P=I.length,R,H;for(R=0;R<P;++R)(H=_(this,F,N,z,I[R].identifier,I[R]))&&(Eu(N),H("start",N,I[R]))}}function S(N){var z=N.changedTouches,I=z.length,F,P;for(F=0;F<I;++F)(P=l[z[F].identifier])&&(Zr(N),P("drag",N,z[F]))}function b(N){var z=N.changedTouches,I=z.length,F,P;for(m&&clearTimeout(m),m=setTimeout(function(){m=null},500),F=0;F<I;++F)(P=l[z[F].identifier])&&(Eu(N),P("end",N,z[F]))}function _(N,z,I,F,P,R){var H=c.copy(),L=Vt(R||I,z),O,J,T;if((T=o.call(N,new Pc("beforestart",{sourceEvent:I,target:v,identifier:P,active:u,x:L[0],y:L[1],dx:0,dy:0,dispatch:H}),F))!=null)return O=T.x-L[0]||0,J=T.y-L[1]||0,function Y(U,X,B){var V=L,G;switch(U){case"start":l[P]=Y,G=u++;break;case"end":delete l[P],--u;case"drag":L=Vt(B||X,z),G=u;break}H.call(U,N,new Pc(U,{sourceEvent:X,subject:T,target:v,identifier:P,active:G,x:L[0]+O,y:L[1]+J,dx:L[0]-V[0],dy:L[1]-V[1],dispatch:H}),F)}}return v.filter=function(N){return arguments.length?(t=typeof N=="function"?N:$l(!!N),v):t},v.container=function(N){return arguments.length?(r=typeof N=="function"?N:$l(N),v):r},v.subject=function(N){return arguments.length?(o=typeof N=="function"?N:$l(N),v):o},v.touchable=function(N){return arguments.length?(s=typeof N=="function"?N:$l(!!N),v):s},v.on=function(){var N=c.on.apply(c,arguments);return N===c?v:N},v.clickDistance=function(N){return arguments.length?(h=(N=+N)*N,v):Math.sqrt(h)},v}function Wc(t,r,o){t.prototype=r.prototype=o,o.constructor=t}function og(t,r){var o=Object.create(t.prototype);for(var s in r)o[s]=r[s];return o}function yo(){}var lo=.7,ts=1/lo,Jr="\\s*([+-]?\\d+)\\s*",so="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",rn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",hw=/^#([0-9a-f]{3,8})$/,pw=new RegExp(`^rgb\\(${Jr},${Jr},${Jr}\\)$`),mw=new RegExp(`^rgb\\(${rn},${rn},${rn}\\)$`),gw=new RegExp(`^rgba\\(${Jr},${Jr},${Jr},${so}\\)$`),yw=new RegExp(`^rgba\\(${rn},${rn},${rn},${so}\\)$`),vw=new RegExp(`^hsl\\(${so},${rn},${rn}\\)$`),ww=new RegExp(`^hsla\\(${so},${rn},${rn},${so}\\)$`),Hh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Wc(yo,mr,{copy(t){return Object.assign(new this.constructor,this,t)},displayable(){return this.rgb().displayable()},hex:Vh,formatHex:Vh,formatHex8:xw,formatHsl:Ew,formatRgb:Bh,toString:Bh});function Vh(){return this.rgb().formatHex()}function xw(){return this.rgb().formatHex8()}function Ew(){return lg(this).formatHsl()}function Bh(){return this.rgb().formatRgb()}function mr(t){var r,o;return t=(t+"").trim().toLowerCase(),(r=hw.exec(t))?(o=r[1].length,r=parseInt(r[1],16),o===6?Wh(r):o===3?new vt(r>>8&15|r>>4&240,r>>4&15|r&240,(r&15)<<4|r&15,1):o===8?Hl(r>>24&255,r>>16&255,r>>8&255,(r&255)/255):o===4?Hl(r>>12&15|r>>8&240,r>>8&15|r>>4&240,r>>4&15|r&240,((r&15)<<4|r&15)/255):null):(r=pw.exec(t))?new vt(r[1],r[2],r[3],1):(r=mw.exec(t))?new vt(r[1]*255/100,r[2]*255/100,r[3]*255/100,1):(r=gw.exec(t))?Hl(r[1],r[2],r[3],r[4]):(r=yw.exec(t))?Hl(r[1]*255/100,r[2]*255/100,r[3]*255/100,r[4]):(r=vw.exec(t))?Yh(r[1],r[2]/100,r[3]/100,1):(r=ww.exec(t))?Yh(r[1],r[2]/100,r[3]/100,r[4]):Hh.hasOwnProperty(t)?Wh(Hh[t]):t==="transparent"?new vt(NaN,NaN,NaN,0):null}function Wh(t){return new vt(t>>16&255,t>>8&255,t&255,1)}function Hl(t,r,o,s){return s<=0&&(t=r=o=NaN),new vt(t,r,o,s)}function _w(t){return t instanceof yo||(t=mr(t)),t?(t=t.rgb(),new vt(t.r,t.g,t.b,t.opacity)):new vt}function Mc(t,r,o,s){return arguments.length===1?_w(t):new vt(t,r,o,s??1)}function vt(t,r,o,s){this.r=+t,this.g=+r,this.b=+o,this.opacity=+s}Wc(vt,Mc,og(yo,{brighter(t){return t=t==null?ts:Math.pow(ts,t),new vt(this.r*t,this.g*t,this.b*t,this.opacity)},darker(t){return t=t==null?lo:Math.pow(lo,t),new vt(this.r*t,this.g*t,this.b*t,this.opacity)},rgb(){return this},clamp(){return new vt(hr(this.r),hr(this.g),hr(this.b),ns(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Uh,formatHex:Uh,formatHex8:Sw,formatRgb:qh,toString:qh}));function Uh(){return`#${dr(this.r)}${dr(this.g)}${dr(this.b)}`}function Sw(){return`#${dr(this.r)}${dr(this.g)}${dr(this.b)}${dr((isNaN(this.opacity)?1:this.opacity)*255)}`}function qh(){const t=ns(this.opacity);return`${t===1?"rgb(":"rgba("}${hr(this.r)}, ${hr(this.g)}, ${hr(this.b)}${t===1?")":`, ${t})`}`}function ns(t){return isNaN(t)?1:Math.max(0,Math.min(1,t))}function hr(t){return Math.max(0,Math.min(255,Math.round(t)||0))}function dr(t){return t=hr(t),(t<16?"0":"")+t.toString(16)}function Yh(t,r,o,s){return s<=0?t=r=o=NaN:o<=0||o>=1?t=r=NaN:r<=0&&(t=NaN),new Bt(t,r,o,s)}function lg(t){if(t instanceof Bt)return new Bt(t.h,t.s,t.l,t.opacity);if(t instanceof yo||(t=mr(t)),!t)return new Bt;if(t instanceof Bt)return t;t=t.rgb();var r=t.r/255,o=t.g/255,s=t.b/255,l=Math.min(r,o,s),c=Math.max(r,o,s),u=NaN,f=c-l,p=(c+l)/2;return f?(r===c?u=(o-s)/f+(o<s)*6:o===c?u=(s-r)/f+2:u=(r-o)/f+4,f/=p<.5?c+l:2-c-l,u*=60):f=p>0&&p<1?0:u,new Bt(u,f,p,t.opacity)}function kw(t,r,o,s){return arguments.length===1?lg(t):new Bt(t,r,o,s??1)}function Bt(t,r,o,s){this.h=+t,this.s=+r,this.l=+o,this.opacity=+s}Wc(Bt,kw,og(yo,{brighter(t){return t=t==null?ts:Math.pow(ts,t),new Bt(this.h,this.s,this.l*t,this.opacity)},darker(t){return t=t==null?lo:Math.pow(lo,t),new Bt(this.h,this.s,this.l*t,this.opacity)},rgb(){var t=this.h%360+(this.h<0)*360,r=isNaN(t)||isNaN(this.s)?0:this.s,o=this.l,s=o+(o<.5?o:1-o)*r,l=2*o-s;return new vt(_u(t>=240?t-240:t+120,l,s),_u(t,l,s),_u(t<120?t+240:t-120,l,s),this.opacity)},clamp(){return new Bt(Xh(this.h),Vl(this.s),Vl(this.l),ns(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const t=ns(this.opacity);return`${t===1?"hsl(":"hsla("}${Xh(this.h)}, ${Vl(this.s)*100}%, ${Vl(this.l)*100}%${t===1?")":`, ${t})`}`}}));function Xh(t){return t=(t||0)%360,t<0?t+360:t}function Vl(t){return Math.max(0,Math.min(1,t||0))}function _u(t,r,o){return(t<60?r+(o-r)*t/60:t<180?o:t<240?r+(o-r)*(240-t)/60:r)*255}const Uc=t=>()=>t;function Cw(t,r){return function(o){return t+o*r}}function Nw(t,r,o){return t=Math.pow(t,o),r=Math.pow(r,o)-t,o=1/o,function(s){return Math.pow(t+s*r,o)}}function bw(t){return(t=+t)==1?sg:function(r,o){return o-r?Nw(r,o,t):Uc(isNaN(r)?o:r)}}function sg(t,r){var o=r-t;return o?Cw(t,o):Uc(isNaN(t)?r:t)}const rs=(function t(r){var o=bw(r);function s(l,c){var u=o((l=Mc(l)).r,(c=Mc(c)).r),f=o(l.g,c.g),p=o(l.b,c.b),g=sg(l.opacity,c.opacity);return function(m){return l.r=u(m),l.g=f(m),l.b=p(m),l.opacity=g(m),l+""}}return s.gamma=t,s})(1);function Pw(t,r){r||(r=[]);var o=t?Math.min(r.length,t.length):0,s=r.slice(),l;return function(c){for(l=0;l<o;++l)s[l]=t[l]*(1-c)+r[l]*c;return s}}function Mw(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Tw(t,r){var o=r?r.length:0,s=t?Math.min(o,t.length):0,l=new Array(s),c=new Array(o),u;for(u=0;u<s;++u)l[u]=ro(t[u],r[u]);for(;u<o;++u)c[u]=r[u];return function(f){for(u=0;u<s;++u)c[u]=l[u](f);return c}}function Iw(t,r){var o=new Date;return t=+t,r=+r,function(s){return o.setTime(t*(1-s)+r*s),o}}function nn(t,r){return t=+t,r=+r,function(o){return t*(1-o)+r*o}}function Lw(t,r){var o={},s={},l;(t===null||typeof t!="object")&&(t={}),(r===null||typeof r!="object")&&(r={});for(l in r)l in t?o[l]=ro(t[l],r[l]):s[l]=r[l];return function(c){for(l in o)s[l]=o[l](c);return s}}var Tc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Su=new RegExp(Tc.source,"g");function Rw(t){return function(){return t}}function zw(t){return function(r){return t(r)+""}}function ag(t,r){var o=Tc.lastIndex=Su.lastIndex=0,s,l,c,u=-1,f=[],p=[];for(t=t+"",r=r+"";(s=Tc.exec(t))&&(l=Su.exec(r));)(c=l.index)>o&&(c=r.slice(o,c),f[u]?f[u]+=c:f[++u]=c),(s=s[0])===(l=l[0])?f[u]?f[u]+=l:f[++u]=l:(f[++u]=null,p.push({i:u,x:nn(s,l)})),o=Su.lastIndex;return o<r.length&&(c=r.slice(o),f[u]?f[u]+=c:f[++u]=c),f.length<2?p[0]?zw(p[0].x):Rw(r):(r=p.length,function(g){for(var m=0,h;m<r;++m)f[(h=p[m]).i]=h.x(g);return f.join("")})}function ro(t,r){var o=typeof r,s;return r==null||o==="boolean"?Uc(r):(o==="number"?nn:o==="string"?(s=mr(r))?(r=s,rs):ag:r instanceof mr?rs:r instanceof Date?Iw:Mw(r)?Pw:Array.isArray(r)?Tw:typeof r.valueOf!="function"&&typeof r.toString!="function"||isNaN(r)?Lw:nn)(t,r)}var Gh=180/Math.PI,Ic={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function ug(t,r,o,s,l,c){var u,f,p;return(u=Math.sqrt(t*t+r*r))&&(t/=u,r/=u),(p=t*o+r*s)&&(o-=t*p,s-=r*p),(f=Math.sqrt(o*o+s*s))&&(o/=f,s/=f,p/=f),t*s<r*o&&(t=-t,r=-r,p=-p,u=-u),{translateX:l,translateY:c,rotate:Math.atan2(r,t)*Gh,skewX:Math.atan(p)*Gh,scaleX:u,scaleY:f}}var Bl;function Aw(t){const r=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(t+"");return r.isIdentity?Ic:ug(r.a,r.b,r.c,r.d,r.e,r.f)}function Ow(t){return t==null||(Bl||(Bl=document.createElementNS("http://www.w3.org/2000/svg","g")),Bl.setAttribute("transform",t),!(t=Bl.transform.baseVal.consolidate()))?Ic:(t=t.matrix,ug(t.a,t.b,t.c,t.d,t.e,t.f))}function cg(t,r,o,s){function l(g){return g.length?g.pop()+" ":""}function c(g,m,h,v,w,x){if(g!==h||m!==v){var C=w.push("translate(",null,r,null,o);x.push({i:C-4,x:nn(g,h)},{i:C-2,x:nn(m,v)})}else(h||v)&&w.push("translate("+h+r+v+o)}function u(g,m,h,v){g!==m?(g-m>180?m+=360:m-g>180&&(g+=360),v.push({i:h.push(l(h)+"rotate(",null,s)-2,x:nn(g,m)})):m&&h.push(l(h)+"rotate("+m+s)}function f(g,m,h,v){g!==m?v.push({i:h.push(l(h)+"skewX(",null,s)-2,x:nn(g,m)}):m&&h.push(l(h)+"skewX("+m+s)}function p(g,m,h,v,w,x){if(g!==h||m!==v){var C=w.push(l(w)+"scale(",null,",",null,")");x.push({i:C-4,x:nn(g,h)},{i:C-2,x:nn(m,v)})}else(h!==1||v!==1)&&w.push(l(w)+"scale("+h+","+v+")")}return function(g,m){var h=[],v=[];return g=t(g),m=t(m),c(g.translateX,g.translateY,m.translateX,m.translateY,h,v),u(g.rotate,m.rotate,h,v),f(g.skewX,m.skewX,h,v),p(g.scaleX,g.scaleY,m.scaleX,m.scaleY,h,v),g=m=null,function(w){for(var x=-1,C=v.length,E;++x<C;)h[(E=v[x]).i]=E.x(w);return h.join("")}}}var Dw=cg(Aw,"px, ","px)","deg)"),Fw=cg(Ow,", ",")",")"),jw=1e-12;function Qh(t){return((t=Math.exp(t))+1/t)/2}function $w(t){return((t=Math.exp(t))-1/t)/2}function Hw(t){return((t=Math.exp(2*t))-1)/(t+1)}const Ql=(function t(r,o,s){function l(c,u){var f=c[0],p=c[1],g=c[2],m=u[0],h=u[1],v=u[2],w=m-f,x=h-p,C=w*w+x*x,E,S;if(C<jw)S=Math.log(v/g)/r,E=function(F){return[f+F*w,p+F*x,g*Math.exp(r*F*S)]};else{var b=Math.sqrt(C),_=(v*v-g*g+s*C)/(2*g*o*b),N=(v*v-g*g-s*C)/(2*v*o*b),z=Math.log(Math.sqrt(_*_+1)-_),I=Math.log(Math.sqrt(N*N+1)-N);S=(I-z)/r,E=function(F){var P=F*S,R=Qh(z),H=g/(o*b)*(R*Hw(r*P+z)-$w(z));return[f+H*w,p+H*x,g*R/Qh(r*P+z)]}}return E.duration=S*1e3*r/Math.SQRT2,E}return l.rho=function(c){var u=Math.max(.001,+c),f=u*u,p=f*f;return t(u,f,p)},l})(Math.SQRT2,2,4);var ti=0,to=0,Ji=0,fg=1e3,is,no,os=0,gr=0,hs=0,ao=typeof performance=="object"&&performance.now?performance:Date,dg=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function qc(){return gr||(dg(Vw),gr=ao.now()+hs)}function Vw(){gr=0}function ls(){this._call=this._time=this._next=null}ls.prototype=hg.prototype={constructor:ls,restart:function(t,r,o){if(typeof t!="function")throw new TypeError("callback is not a function");o=(o==null?qc():+o)+(r==null?0:+r),!this._next&&no!==this&&(no?no._next=this:is=this,no=this),this._call=t,this._time=o,Lc()},stop:function(){this._call&&(this._call=null,this._time=1/0,Lc())}};function hg(t,r,o){var s=new ls;return s.restart(t,r,o),s}function Bw(){qc(),++ti;for(var t=is,r;t;)(r=gr-t._time)>=0&&t._call.call(void 0,r),t=t._next;--ti}function Kh(){gr=(os=ao.now())+hs,ti=to=0;try{Bw()}finally{ti=0,Uw(),gr=0}}function Ww(){var t=ao.now(),r=t-os;r>fg&&(hs-=r,os=t)}function Uw(){for(var t,r=is,o,s=1/0;r;)r._call?(s>r._time&&(s=r._time),t=r,r=r._next):(o=r._next,r._next=null,r=t?t._next=o:is=o);no=t,Lc(s)}function Lc(t){if(!ti){to&&(to=clearTimeout(to));var r=t-gr;r>24?(t<1/0&&(to=setTimeout(Kh,t-ao.now()-hs)),Ji&&(Ji=clearInterval(Ji))):(Ji||(os=ao.now(),Ji=setInterval(Ww,fg)),ti=1,dg(Kh))}}function Zh(t,r,o){var s=new ls;return r=r==null?0:+r,s.restart(l=>{s.stop(),t(l+r)},r,o),s}var qw=fs("start","end","cancel","interrupt"),Yw=[],pg=0,Jh=1,Rc=2,Kl=3,ep=4,zc=5,Zl=6;function ps(t,r,o,s,l,c){var u=t.__transition;if(!u)t.__transition={};else if(o in u)return;Xw(t,o,{name:r,index:s,group:l,on:qw,tween:Yw,time:c.time,delay:c.delay,duration:c.duration,ease:c.ease,timer:null,state:pg})}function Yc(t,r){var o=Xt(t,r);if(o.state>pg)throw new Error("too late; already scheduled");return o}function on(t,r){var o=Xt(t,r);if(o.state>Kl)throw new Error("too late; already running");return o}function Xt(t,r){var o=t.__transition;if(!o||!(o=o[r]))throw new Error("transition not found");return o}function Xw(t,r,o){var s=t.__transition,l;s[r]=o,o.timer=hg(c,0,o.time);function c(g){o.state=Jh,o.timer.restart(u,o.delay,o.time),o.delay<=g&&u(g-o.delay)}function u(g){var m,h,v,w;if(o.state!==Jh)return p();for(m in s)if(w=s[m],w.name===o.name){if(w.state===Kl)return Zh(u);w.state===ep?(w.state=Zl,w.timer.stop(),w.on.call("interrupt",t,t.__data__,w.index,w.group),delete s[m]):+m<r&&(w.state=Zl,w.timer.stop(),w.on.call("cancel",t,t.__data__,w.index,w.group),delete s[m])}if(Zh(function(){o.state===Kl&&(o.state=ep,o.timer.restart(f,o.delay,o.time),f(g))}),o.state=Rc,o.on.call("start",t,t.__data__,o.index,o.group),o.state===Rc){for(o.state=Kl,l=new Array(v=o.tween.length),m=0,h=-1;m<v;++m)(w=o.tween[m].value.call(t,t.__data__,o.index,o.group))&&(l[++h]=w);l.length=h+1}}function f(g){for(var m=g<o.duration?o.ease.call(null,g/o.duration):(o.timer.restart(p),o.state=zc,1),h=-1,v=l.length;++h<v;)l[h].call(t,m);o.state===zc&&(o.on.call("end",t,t.__data__,o.index,o.group),p())}function p(){o.state=Zl,o.timer.stop(),delete s[r];for(var g in s)return;delete t.__transition}}function Jl(t,r){var o=t.__transition,s,l,c=!0,u;if(o){r=r==null?null:r+"";for(u in o){if((s=o[u]).name!==r){c=!1;continue}l=s.state>Rc&&s.state<zc,s.state=Zl,s.timer.stop(),s.on.call(l?"interrupt":"cancel",t,t.__data__,s.index,s.group),delete o[u]}c&&delete t.__transition}}function Gw(t){return this.each(function(){Jl(this,t)})}function Qw(t,r){var o,s;return function(){var l=on(this,t),c=l.tween;if(c!==o){s=o=c;for(var u=0,f=s.length;u<f;++u)if(s[u].name===r){s=s.slice(),s.splice(u,1);break}}l.tween=s}}function Kw(t,r,o){var s,l;if(typeof o!="function")throw new Error;return function(){var c=on(this,t),u=c.tween;if(u!==s){l=(s=u).slice();for(var f={name:r,value:o},p=0,g=l.length;p<g;++p)if(l[p].name===r){l[p]=f;break}p===g&&l.push(f)}c.tween=l}}function Zw(t,r){var o=this._id;if(t+="",arguments.length<2){for(var s=Xt(this.node(),o).tween,l=0,c=s.length,u;l<c;++l)if((u=s[l]).name===t)return u.value;return null}return this.each((r==null?Qw:Kw)(o,t,r))}function Xc(t,r,o){var s=t._id;return t.each(function(){var l=on(this,s);(l.value||(l.value={}))[r]=o.apply(this,arguments)}),function(l){return Xt(l,s).value[r]}}function mg(t,r){var o;return(typeof r=="number"?nn:r instanceof mr?rs:(o=mr(r))?(r=o,rs):ag)(t,r)}function Jw(t){return function(){this.removeAttribute(t)}}function ex(t){return function(){this.removeAttributeNS(t.space,t.local)}}function tx(t,r,o){var s,l=o+"",c;return function(){var u=this.getAttribute(t);return u===l?null:u===s?c:c=r(s=u,o)}}function nx(t,r,o){var s,l=o+"",c;return function(){var u=this.getAttributeNS(t.space,t.local);return u===l?null:u===s?c:c=r(s=u,o)}}function rx(t,r,o){var s,l,c;return function(){var u,f=o(this),p;return f==null?void this.removeAttribute(t):(u=this.getAttribute(t),p=f+"",u===p?null:u===s&&p===l?c:(l=p,c=r(s=u,f)))}}function ix(t,r,o){var s,l,c;return function(){var u,f=o(this),p;return f==null?void this.removeAttributeNS(t.space,t.local):(u=this.getAttributeNS(t.space,t.local),p=f+"",u===p?null:u===s&&p===l?c:(l=p,c=r(s=u,f)))}}function ox(t,r){var o=ds(t),s=o==="transform"?Fw:mg;return this.attrTween(t,typeof r=="function"?(o.local?ix:rx)(o,s,Xc(this,"attr."+t,r)):r==null?(o.local?ex:Jw)(o):(o.local?nx:tx)(o,s,r))}function lx(t,r){return function(o){this.setAttribute(t,r.call(this,o))}}function sx(t,r){return function(o){this.setAttributeNS(t.space,t.local,r.call(this,o))}}function ax(t,r){var o,s;function l(){var c=r.apply(this,arguments);return c!==s&&(o=(s=c)&&sx(t,c)),o}return l._value=r,l}function ux(t,r){var o,s;function l(){var c=r.apply(this,arguments);return c!==s&&(o=(s=c)&&lx(t,c)),o}return l._value=r,l}function cx(t,r){var o="attr."+t;if(arguments.length<2)return(o=this.tween(o))&&o._value;if(r==null)return this.tween(o,null);if(typeof r!="function")throw new Error;var s=ds(t);return this.tween(o,(s.local?ax:ux)(s,r))}function fx(t,r){return function(){Yc(this,t).delay=+r.apply(this,arguments)}}function dx(t,r){return r=+r,function(){Yc(this,t).delay=r}}function hx(t){var r=this._id;return arguments.length?this.each((typeof t=="function"?fx:dx)(r,t)):Xt(this.node(),r).delay}function px(t,r){return function(){on(this,t).duration=+r.apply(this,arguments)}}function mx(t,r){return r=+r,function(){on(this,t).duration=r}}function gx(t){var r=this._id;return arguments.length?this.each((typeof t=="function"?px:mx)(r,t)):Xt(this.node(),r).duration}function yx(t,r){if(typeof r!="function")throw new Error;return function(){on(this,t).ease=r}}function vx(t){var r=this._id;return arguments.length?this.each(yx(r,t)):Xt(this.node(),r).ease}function wx(t,r){return function(){var o=r.apply(this,arguments);if(typeof o!="function")throw new Error;on(this,t).ease=o}}function xx(t){if(typeof t!="function")throw new Error;return this.each(wx(this._id,t))}function Ex(t){typeof t!="function"&&(t=qm(t));for(var r=this._groups,o=r.length,s=new Array(o),l=0;l<o;++l)for(var c=r[l],u=c.length,f=s[l]=[],p,g=0;g<u;++g)(p=c[g])&&t.call(p,p.__data__,g,c)&&f.push(p);return new wn(s,this._parents,this._name,this._id)}function _x(t){if(t._id!==this._id)throw new Error;for(var r=this._groups,o=t._groups,s=r.length,l=o.length,c=Math.min(s,l),u=new Array(s),f=0;f<c;++f)for(var p=r[f],g=o[f],m=p.length,h=u[f]=new Array(m),v,w=0;w<m;++w)(v=p[w]||g[w])&&(h[w]=v);for(;f<s;++f)u[f]=r[f];return new wn(u,this._parents,this._name,this._id)}function Sx(t){return(t+"").trim().split(/^|\s+/).every(function(r){var o=r.indexOf(".");return o>=0&&(r=r.slice(0,o)),!r||r==="start"})}function kx(t,r,o){var s,l,c=Sx(r)?Yc:on;return function(){var u=c(this,t),f=u.on;f!==s&&(l=(s=f).copy()).on(r,o),u.on=l}}function Cx(t,r){var o=this._id;return arguments.length<2?Xt(this.node(),o).on.on(t):this.each(kx(o,t,r))}function Nx(t){return function(){var r=this.parentNode;for(var o in this.__transition)if(+o!==t)return;r&&r.removeChild(this)}}function bx(){return this.on("end.remove",Nx(this._id))}function Px(t){var r=this._name,o=this._id;typeof t!="function"&&(t=Vc(t));for(var s=this._groups,l=s.length,c=new Array(l),u=0;u<l;++u)for(var f=s[u],p=f.length,g=c[u]=new Array(p),m,h,v=0;v<p;++v)(m=f[v])&&(h=t.call(m,m.__data__,v,f))&&("__data__"in m&&(h.__data__=m.__data__),g[v]=h,ps(g[v],r,o,v,g,Xt(m,o)));return new wn(c,this._parents,r,o)}function Mx(t){var r=this._name,o=this._id;typeof t!="function"&&(t=Um(t));for(var s=this._groups,l=s.length,c=[],u=[],f=0;f<l;++f)for(var p=s[f],g=p.length,m,h=0;h<g;++h)if(m=p[h]){for(var v=t.call(m,m.__data__,h,p),w,x=Xt(m,o),C=0,E=v.length;C<E;++C)(w=v[C])&&ps(w,r,o,C,v,x);c.push(v),u.push(m)}return new wn(c,u,r,o)}var Tx=go.prototype.constructor;function Ix(){return new Tx(this._groups,this._parents)}function Lx(t,r){var o,s,l;return function(){var c=ei(this,t),u=(this.style.removeProperty(t),ei(this,t));return c===u?null:c===o&&u===s?l:l=r(o=c,s=u)}}function gg(t){return function(){this.style.removeProperty(t)}}function Rx(t,r,o){var s,l=o+"",c;return function(){var u=ei(this,t);return u===l?null:u===s?c:c=r(s=u,o)}}function zx(t,r,o){var s,l,c;return function(){var u=ei(this,t),f=o(this),p=f+"";return f==null&&(p=f=(this.style.removeProperty(t),ei(this,t))),u===p?null:u===s&&p===l?c:(l=p,c=r(s=u,f))}}function Ax(t,r){var o,s,l,c="style."+r,u="end."+c,f;return function(){var p=on(this,t),g=p.on,m=p.value[c]==null?f||(f=gg(r)):void 0;(g!==o||l!==m)&&(s=(o=g).copy()).on(u,l=m),p.on=s}}function Ox(t,r,o){var s=(t+="")=="transform"?Dw:mg;return r==null?this.styleTween(t,Lx(t,s)).on("end.style."+t,gg(t)):typeof r=="function"?this.styleTween(t,zx(t,s,Xc(this,"style."+t,r))).each(Ax(this._id,t)):this.styleTween(t,Rx(t,s,r),o).on("end.style."+t,null)}function Dx(t,r,o){return function(s){this.style.setProperty(t,r.call(this,s),o)}}function Fx(t,r,o){var s,l;function c(){var u=r.apply(this,arguments);return u!==l&&(s=(l=u)&&Dx(t,u,o)),s}return c._value=r,c}function jx(t,r,o){var s="style."+(t+="");if(arguments.length<2)return(s=this.tween(s))&&s._value;if(r==null)return this.tween(s,null);if(typeof r!="function")throw new Error;return this.tween(s,Fx(t,r,o??""))}function $x(t){return function(){this.textContent=t}}function Hx(t){return function(){var r=t(this);this.textContent=r??""}}function Vx(t){return this.tween("text",typeof t=="function"?Hx(Xc(this,"text",t)):$x(t==null?"":t+""))}function Bx(t){return function(r){this.textContent=t.call(this,r)}}function Wx(t){var r,o;function s(){var l=t.apply(this,arguments);return l!==o&&(r=(o=l)&&Bx(l)),r}return s._value=t,s}function Ux(t){var r="text";if(arguments.length<1)return(r=this.tween(r))&&r._value;if(t==null)return this.tween(r,null);if(typeof t!="function")throw new Error;return this.tween(r,Wx(t))}function qx(){for(var t=this._name,r=this._id,o=yg(),s=this._groups,l=s.length,c=0;c<l;++c)for(var u=s[c],f=u.length,p,g=0;g<f;++g)if(p=u[g]){var m=Xt(p,r);ps(p,t,o,g,u,{time:m.time+m.delay+m.duration,delay:0,duration:m.duration,ease:m.ease})}return new wn(s,this._parents,t,o)}function Yx(){var t,r,o=this,s=o._id,l=o.size();return new Promise(function(c,u){var f={value:u},p={value:function(){--l===0&&c()}};o.each(function(){var g=on(this,s),m=g.on;m!==t&&(r=(t=m).copy(),r._.cancel.push(f),r._.interrupt.push(f),r._.end.push(p)),g.on=r}),l===0&&c()})}var Xx=0;function wn(t,r,o,s){this._groups=t,this._parents=r,this._name=o,this._id=s}function yg(){return++Xx}var yn=go.prototype;wn.prototype={constructor:wn,select:Px,selectAll:Mx,selectChild:yn.selectChild,selectChildren:yn.selectChildren,filter:Ex,merge:_x,selection:Ix,transition:qx,call:yn.call,nodes:yn.nodes,node:yn.node,size:yn.size,empty:yn.empty,each:yn.each,on:Cx,attr:ox,attrTween:cx,style:Ox,styleTween:jx,text:Vx,textTween:Ux,remove:bx,tween:Zw,delay:hx,duration:gx,ease:vx,easeVarying:xx,end:Yx,[Symbol.iterator]:yn[Symbol.iterator]};function Gx(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}var Qx={time:null,delay:0,duration:250,ease:Gx};function Kx(t,r){for(var o;!(o=t.__transition)||!(o=o[r]);)if(!(t=t.parentNode))throw new Error(`transition ${r} not found`);return o}function Zx(t){var r,o;t instanceof wn?(r=t._id,t=t._name):(r=yg(),(o=Qx).time=qc(),t=t==null?null:t+"");for(var s=this._groups,l=s.length,c=0;c<l;++c)for(var u=s[c],f=u.length,p,g=0;g<f;++g)(p=u[g])&&ps(p,t,r,g,u,o||Kx(p,r));return new wn(s,this._parents,t,r)}go.prototype.interrupt=Gw;go.prototype.transition=Zx;const Wl=t=>()=>t;function Jx(t,{sourceEvent:r,target:o,transform:s,dispatch:l}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:r,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},transform:{value:s,enumerable:!0,configurable:!0},_:{value:l}})}function vn(t,r,o){this.k=t,this.x=r,this.y=o}vn.prototype={constructor:vn,scale:function(t){return t===1?this:new vn(this.k*t,this.x,this.y)},translate:function(t,r){return t===0&r===0?this:new vn(this.k,this.x+this.k*t,this.y+this.k*r)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ms=new vn(1,0,0);vg.prototype=vn.prototype;function vg(t){for(;!t.__zoom;)if(!(t=t.parentNode))return ms;return t.__zoom}function ku(t){t.stopImmediatePropagation()}function eo(t){t.preventDefault(),t.stopImmediatePropagation()}function eE(t){return(!t.ctrlKey||t.type==="wheel")&&!t.button}function tE(){var t=this;return t instanceof SVGElement?(t=t.ownerSVGElement||t,t.hasAttribute("viewBox")?(t=t.viewBox.baseVal,[[t.x,t.y],[t.x+t.width,t.y+t.height]]):[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]):[[0,0],[t.clientWidth,t.clientHeight]]}function tp(){return this.__zoom||ms}function nE(t){return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*(t.ctrlKey?10:1)}function rE(){return navigator.maxTouchPoints||"ontouchstart"in this}function iE(t,r,o){var s=t.invertX(r[0][0])-o[0][0],l=t.invertX(r[1][0])-o[1][0],c=t.invertY(r[0][1])-o[0][1],u=t.invertY(r[1][1])-o[1][1];return t.translate(l>s?(s+l)/2:Math.min(0,s)||Math.max(0,l),u>c?(c+u)/2:Math.min(0,c)||Math.max(0,u))}function wg(){var t=eE,r=tE,o=iE,s=nE,l=rE,c=[0,1/0],u=[[-1/0,-1/0],[1/0,1/0]],f=250,p=Ql,g=fs("start","zoom","end"),m,h,v,w=500,x=150,C=0,E=10;function S(T){T.property("__zoom",tp).on("wheel.zoom",P,{passive:!1}).on("mousedown.zoom",R).on("dblclick.zoom",H).filter(l).on("touchstart.zoom",L).on("touchmove.zoom",O).on("touchend.zoom touchcancel.zoom",J).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}S.transform=function(T,Y,U,X){var B=T.selection?T.selection():T;B.property("__zoom",tp),T!==B?z(T,Y,U,X):B.interrupt().each(function(){I(this,arguments).event(X).start().zoom(null,typeof Y=="function"?Y.apply(this,arguments):Y).end()})},S.scaleBy=function(T,Y,U,X){S.scaleTo(T,function(){var B=this.__zoom.k,V=typeof Y=="function"?Y.apply(this,arguments):Y;return B*V},U,X)},S.scaleTo=function(T,Y,U,X){S.transform(T,function(){var B=r.apply(this,arguments),V=this.__zoom,G=U==null?N(B):typeof U=="function"?U.apply(this,arguments):U,M=V.invert(G),j=typeof Y=="function"?Y.apply(this,arguments):Y;return o(_(b(V,j),G,M),B,u)},U,X)},S.translateBy=function(T,Y,U,X){S.transform(T,function(){return o(this.__zoom.translate(typeof Y=="function"?Y.apply(this,arguments):Y,typeof U=="function"?U.apply(this,arguments):U),r.apply(this,arguments),u)},null,X)},S.translateTo=function(T,Y,U,X,B){S.transform(T,function(){var V=r.apply(this,arguments),G=this.__zoom,M=X==null?N(V):typeof X=="function"?X.apply(this,arguments):X;return o(ms.translate(M[0],M[1]).scale(G.k).translate(typeof Y=="function"?-Y.apply(this,arguments):-Y,typeof U=="function"?-U.apply(this,arguments):-U),V,u)},X,B)};function b(T,Y){return Y=Math.max(c[0],Math.min(c[1],Y)),Y===T.k?T:new vn(Y,T.x,T.y)}function _(T,Y,U){var X=Y[0]-U[0]*T.k,B=Y[1]-U[1]*T.k;return X===T.x&&B===T.y?T:new vn(T.k,X,B)}function N(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function z(T,Y,U,X){T.on("start.zoom",function(){I(this,arguments).event(X).start()}).on("interrupt.zoom end.zoom",function(){I(this,arguments).event(X).end()}).tween("zoom",function(){var B=this,V=arguments,G=I(B,V).event(X),M=r.apply(B,V),j=U==null?N(M):typeof U=="function"?U.apply(B,V):U,D=Math.max(M[1][0]-M[0][0],M[1][1]-M[0][1]),W=B.__zoom,Q=typeof Y=="function"?Y.apply(B,V):Y,re=p(W.invert(j).concat(D/W.k),Q.invert(j).concat(D/Q.k));return function(le){if(le===1)le=Q;else{var K=re(le),oe=D/K[2];le=new vn(oe,j[0]-K[0]*oe,j[1]-K[1]*oe)}G.zoom(null,le)}})}function I(T,Y,U){return!U&&T.__zooming||new F(T,Y)}function F(T,Y){this.that=T,this.args=Y,this.active=0,this.sourceEvent=null,this.extent=r.apply(T,Y),this.taps=0}F.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,Y){return this.mouse&&T!=="mouse"&&(this.mouse[1]=Y.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=Y.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=Y.invert(this.touch1[0])),this.that.__zoom=Y,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var Y=Nt(this.that).datum();g.call(T,this.that,new Jx(T,{sourceEvent:this.sourceEvent,target:S,transform:this.that.__zoom,dispatch:g}),Y)}};function P(T,...Y){if(!t.apply(this,arguments))return;var U=I(this,Y).event(T),X=this.__zoom,B=Math.max(c[0],Math.min(c[1],X.k*Math.pow(2,s.apply(this,arguments)))),V=Vt(T);if(U.wheel)(U.mouse[0][0]!==V[0]||U.mouse[0][1]!==V[1])&&(U.mouse[1]=X.invert(U.mouse[0]=V)),clearTimeout(U.wheel);else{if(X.k===B)return;U.mouse=[V,X.invert(V)],Jl(this),U.start()}eo(T),U.wheel=setTimeout(G,x),U.zoom("mouse",o(_(b(X,B),U.mouse[0],U.mouse[1]),U.extent,u));function G(){U.wheel=null,U.end()}}function R(T,...Y){if(v||!t.apply(this,arguments))return;var U=T.currentTarget,X=I(this,Y,!0).event(T),B=Nt(T.view).on("mousemove.zoom",j,!0).on("mouseup.zoom",D,!0),V=Vt(T,U),G=T.clientX,M=T.clientY;ng(T.view),ku(T),X.mouse=[V,this.__zoom.invert(V)],Jl(this),X.start();function j(W){if(eo(W),!X.moved){var Q=W.clientX-G,re=W.clientY-M;X.moved=Q*Q+re*re>C}X.event(W).zoom("mouse",o(_(X.that.__zoom,X.mouse[0]=Vt(W,U),X.mouse[1]),X.extent,u))}function D(W){B.on("mousemove.zoom mouseup.zoom",null),rg(W.view,X.moved),eo(W),X.event(W).end()}}function H(T,...Y){if(t.apply(this,arguments)){var U=this.__zoom,X=Vt(T.changedTouches?T.changedTouches[0]:T,this),B=U.invert(X),V=U.k*(T.shiftKey?.5:2),G=o(_(b(U,V),X,B),r.apply(this,Y),u);eo(T),f>0?Nt(this).transition().duration(f).call(z,G,X,T):Nt(this).call(S.transform,G,X,T)}}function L(T,...Y){if(t.apply(this,arguments)){var U=T.touches,X=U.length,B=I(this,Y,T.changedTouches.length===X).event(T),V,G,M,j;for(ku(T),G=0;G<X;++G)M=U[G],j=Vt(M,this),j=[j,this.__zoom.invert(j),M.identifier],B.touch0?!B.touch1&&B.touch0[2]!==j[2]&&(B.touch1=j,B.taps=0):(B.touch0=j,V=!0,B.taps=1+!!m);m&&(m=clearTimeout(m)),V&&(B.taps<2&&(h=j[0],m=setTimeout(function(){m=null},w)),Jl(this),B.start())}}function O(T,...Y){if(this.__zooming){var U=I(this,Y).event(T),X=T.changedTouches,B=X.length,V,G,M,j;for(eo(T),V=0;V<B;++V)G=X[V],M=Vt(G,this),U.touch0&&U.touch0[2]===G.identifier?U.touch0[0]=M:U.touch1&&U.touch1[2]===G.identifier&&(U.touch1[0]=M);if(G=U.that.__zoom,U.touch1){var D=U.touch0[0],W=U.touch0[1],Q=U.touch1[0],re=U.touch1[1],le=(le=Q[0]-D[0])*le+(le=Q[1]-D[1])*le,K=(K=re[0]-W[0])*K+(K=re[1]-W[1])*K;G=b(G,Math.sqrt(le/K)),M=[(D[0]+Q[0])/2,(D[1]+Q[1])/2],j=[(W[0]+re[0])/2,(W[1]+re[1])/2]}else if(U.touch0)M=U.touch0[0],j=U.touch0[1];else return;U.zoom("touch",o(_(G,M,j),U.extent,u))}}function J(T,...Y){if(this.__zooming){var U=I(this,Y).event(T),X=T.changedTouches,B=X.length,V,G;for(ku(T),v&&clearTimeout(v),v=setTimeout(function(){v=null},w),V=0;V<B;++V)G=X[V],U.touch0&&U.touch0[2]===G.identifier?delete U.touch0:U.touch1&&U.touch1[2]===G.identifier&&delete U.touch1;if(U.touch1&&!U.touch0&&(U.touch0=U.touch1,delete U.touch1),U.touch0)U.touch0[1]=this.__zoom.invert(U.touch0[0]);else if(U.end(),U.taps===2&&(G=Vt(G,this),Math.hypot(h[0]-G[0],h[1]-G[1])<E)){var M=Nt(this).on("dblclick.zoom");M&&M.apply(this,arguments)}}}return S.wheelDelta=function(T){return arguments.length?(s=typeof T=="function"?T:Wl(+T),S):s},S.filter=function(T){return arguments.length?(t=typeof T=="function"?T:Wl(!!T),S):t},S.touchable=function(T){return arguments.length?(l=typeof T=="function"?T:Wl(!!T),S):l},S.extent=function(T){return arguments.length?(r=typeof T=="function"?T:Wl([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),S):r},S.scaleExtent=function(T){return arguments.length?(c[0]=+T[0],c[1]=+T[1],S):[c[0],c[1]]},S.translateExtent=function(T){return arguments.length?(u[0][0]=+T[0][0],u[1][0]=+T[1][0],u[0][1]=+T[0][1],u[1][1]=+T[1][1],S):[[u[0][0],u[0][1]],[u[1][0],u[1][1]]]},S.constrain=function(T){return arguments.length?(o=T,S):o},S.duration=function(T){return arguments.length?(f=+T,S):f},S.interpolate=function(T){return arguments.length?(p=T,S):p},S.on=function(){var T=g.on.apply(g,arguments);return T===g?S:T},S.clickDistance=function(T){return arguments.length?(C=(T=+T)*T,S):Math.sqrt(C)},S.tapDistance=function(T){return arguments.length?(E=+T,S):E},S}const qt={error001:(t="react")=>`Seems like you have not used zustand provider as an ancestor. Help: https://${t}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:t=>`Node type "${t}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:t=>`The old edge with id=${t} does not exist.`,error009:t=>`Marker type "${t}" doesn't exist.`,error008:(t,{id:r,sourceHandle:o,targetHandle:s})=>`Couldn't create edge for ${t} handle id: "${t==="source"?o:s}", edge id: ${r}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:t=>`Edge type "${t}" not found. Using fallback type "default".`,error012:t=>`Node with id "${t}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(t="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${t}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:t=>`Edge with id "${t}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},uo=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],xg=["Enter"," ","Escape"],Eg={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:t,x:r,y:o})=>`Moved selected node ${t}. New position, x: ${r}, y: ${o}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"};var ni;(function(t){t.Strict="strict",t.Loose="loose"})(ni||(ni={}));var pr;(function(t){t.Free="free",t.Vertical="vertical",t.Horizontal="horizontal"})(pr||(pr={}));var co;(function(t){t.Partial="partial",t.Full="full"})(co||(co={}));const _g={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null};var Wn;(function(t){t.Bezier="default",t.Straight="straight",t.Step="step",t.SmoothStep="smoothstep",t.SimpleBezier="simplebezier"})(Wn||(Wn={}));var ss;(function(t){t.Arrow="arrow",t.ArrowClosed="arrowclosed"})(ss||(ss={}));var xe;(function(t){t.Left="left",t.Top="top",t.Right="right",t.Bottom="bottom"})(xe||(xe={}));const np={[xe.Left]:xe.Right,[xe.Right]:xe.Left,[xe.Top]:xe.Bottom,[xe.Bottom]:xe.Top};function Sg(t){return t===null?null:t?"valid":"invalid"}const kg=t=>"id"in t&&"source"in t&&"target"in t,oE=t=>"id"in t&&"position"in t&&!("source"in t)&&!("target"in t),Gc=t=>"id"in t&&"internals"in t&&!("source"in t)&&!("target"in t),vo=(t,r=[0,0])=>{const{width:o,height:s}=xn(t),l=t.origin??r,c=o*l[0],u=s*l[1];return{x:t.position.x-c,y:t.position.y-u}},lE=(t,r={nodeOrigin:[0,0]})=>{if(t.length===0)return{x:0,y:0,width:0,height:0};const o=t.reduce((s,l)=>{const c=typeof l=="string";let u=!r.nodeLookup&&!c?l:void 0;r.nodeLookup&&(u=c?r.nodeLookup.get(l):Gc(l)?l:r.nodeLookup.get(l.id));const f=u?as(u,r.nodeOrigin):{x:0,y:0,x2:0,y2:0};return gs(s,f)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return ys(o)},wo=(t,r={})=>{let o={x:1/0,y:1/0,x2:-1/0,y2:-1/0},s=!1;return t.forEach(l=>{(r.filter===void 0||r.filter(l))&&(o=gs(o,as(l)),s=!0)}),s?ys(o):{x:0,y:0,width:0,height:0}},Qc=(t,r,[o,s,l]=[0,0,1],c=!1,u=!1)=>{const f={...ai(r,[o,s,l]),width:r.width/l,height:r.height/l},p=[];for(const g of t.values()){const{measured:m,selectable:h=!0,hidden:v=!1}=g;if(u&&!h||v)continue;const w=m.width??g.width??g.initialWidth??null,x=m.height??g.height??g.initialHeight??null,C=fo(f,ii(g)),E=(w??0)*(x??0),S=c&&C>0;(!g.internals.handleBounds||S||C>=E||g.dragging)&&p.push(g)}return p},sE=(t,r)=>{const o=new Set;return t.forEach(s=>{o.add(s.id)}),r.filter(s=>o.has(s.source)||o.has(s.target))};function aE(t,r){const o=new Map,s=r!=null&&r.nodes?new Set(r.nodes.map(l=>l.id)):null;return t.forEach(l=>{l.measured.width&&l.measured.height&&((r==null?void 0:r.includeHiddenNodes)||!l.hidden)&&(!s||s.has(l.id))&&o.set(l.id,l)}),o}async function uE({nodes:t,width:r,height:o,panZoom:s,minZoom:l,maxZoom:c},u){if(t.size===0)return!0;const f=aE(t,u),p=wo(f),g=Zc(p,r,o,(u==null?void 0:u.minZoom)??l,(u==null?void 0:u.maxZoom)??c,(u==null?void 0:u.padding)??.1);return await s.setViewport(g,{duration:u==null?void 0:u.duration,ease:u==null?void 0:u.ease,interpolate:u==null?void 0:u.interpolate}),!0}function Cg({nodeId:t,nextPosition:r,nodeLookup:o,nodeOrigin:s=[0,0],nodeExtent:l,onError:c}){const u=o.get(t),f=u.parentId?o.get(u.parentId):void 0,{x:p,y:g}=f?f.internals.positionAbsolute:{x:0,y:0},m=u.origin??s;let h=u.extent||l;if(u.extent==="parent"&&!u.expandParent)if(!f)c==null||c("005",qt.error005());else{const w=f.measured.width,x=f.measured.height;w&&x&&(h=[[p,g],[p+w,g+x]])}else f&&vr(u.extent)&&(h=[[u.extent[0][0]+p,u.extent[0][1]+g],[u.extent[1][0]+p,u.extent[1][1]+g]]);const v=vr(h)?yr(r,h,u.measured):r;return(u.measured.width===void 0||u.measured.height===void 0)&&(c==null||c("015",qt.error015())),{position:{x:v.x-p+(u.measured.width??0)*m[0],y:v.y-g+(u.measured.height??0)*m[1]},positionAbsolute:v}}async function cE({nodesToRemove:t=[],edgesToRemove:r=[],nodes:o,edges:s,onBeforeDelete:l}){const c=new Set(t.map(v=>v.id)),u=[];for(const v of o){if(v.deletable===!1)continue;const w=c.has(v.id),x=!w&&v.parentId&&u.find(C=>C.id===v.parentId);(w||x)&&u.push(v)}const f=new Set(r.map(v=>v.id)),p=s.filter(v=>v.deletable!==!1),m=sE(u,p);for(const v of p)f.has(v.id)&&!m.find(x=>x.id===v.id)&&m.push(v);if(!l)return{edges:m,nodes:u};const h=await l({nodes:u,edges:m});return typeof h=="boolean"?h?{edges:m,nodes:u}:{edges:[],nodes:[]}:h}const ri=(t,r=0,o=1)=>Math.min(Math.max(t,r),o),yr=(t={x:0,y:0},r,o)=>({x:ri(t.x,r[0][0],r[1][0]-((o==null?void 0:o.width)??0)),y:ri(t.y,r[0][1],r[1][1]-((o==null?void 0:o.height)??0))});function Ng(t,r,o){const{width:s,height:l}=xn(o),{x:c,y:u}=o.internals.positionAbsolute;return yr(t,[[c,u],[c+s,u+l]],r)}const rp=(t,r,o)=>t<r?ri(Math.abs(t-r),1,r)/r:t>o?-ri(Math.abs(t-o),1,r)/r:0,Kc=(t,r,o=15,s=40)=>{const l=rp(t.x,s,r.width-s)*o,c=rp(t.y,s,r.height-s)*o;return[l,c]},gs=(t,r)=>({x:Math.min(t.x,r.x),y:Math.min(t.y,r.y),x2:Math.max(t.x2,r.x2),y2:Math.max(t.y2,r.y2)}),Ac=({x:t,y:r,width:o,height:s})=>({x:t,y:r,x2:t+o,y2:r+s}),ys=({x:t,y:r,x2:o,y2:s})=>({x:t,y:r,width:o-t,height:s-r}),ii=(t,r=[0,0])=>{var l,c;const{x:o,y:s}=Gc(t)?t.internals.positionAbsolute:vo(t,r);return{x:o,y:s,width:((l=t.measured)==null?void 0:l.width)??t.width??t.initialWidth??0,height:((c=t.measured)==null?void 0:c.height)??t.height??t.initialHeight??0}},as=(t,r=[0,0])=>{var l,c;const{x:o,y:s}=Gc(t)?t.internals.positionAbsolute:vo(t,r);return{x:o,y:s,x2:o+(((l=t.measured)==null?void 0:l.width)??t.width??t.initialWidth??0),y2:s+(((c=t.measured)==null?void 0:c.height)??t.height??t.initialHeight??0)}},bg=(t,r)=>ys(gs(Ac(t),Ac(r))),fo=(t,r)=>{const o=Math.max(0,Math.min(t.x+t.width,r.x+r.width)-Math.max(t.x,r.x)),s=Math.max(0,Math.min(t.y+t.height,r.y+r.height)-Math.max(t.y,r.y));return Math.ceil(o*s)},ip=t=>Wt(t.width)&&Wt(t.height)&&Wt(t.x)&&Wt(t.y),Wt=t=>!isNaN(t)&&isFinite(t),Pg=(t,r)=>(o,s)=>{},xo=(t,r=[1,1])=>({x:r[0]*Math.round(t.x/r[0]),y:r[1]*Math.round(t.y/r[1])}),ai=({x:t,y:r},[o,s,l],c=!1,u=[1,1])=>{const f={x:(t-o)/l,y:(r-s)/l};return c?xo(f,u):f},oi=({x:t,y:r},[o,s,l])=>({x:t*l+o,y:r*l+s});function Gr(t,r){if(typeof t=="number")return Math.floor((r-r/(1+t))*.5);if(typeof t=="string"&&t.endsWith("px")){const o=parseFloat(t);if(!Number.isNaN(o))return Math.floor(o)}if(typeof t=="string"&&t.endsWith("%")){const o=parseFloat(t);if(!Number.isNaN(o))return Math.floor(r*o*.01)}return console.error(`The padding value "${t}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function fE(t,r,o){if(typeof t=="string"||typeof t=="number"){const s=Gr(t,o),l=Gr(t,r);return{top:s,right:l,bottom:s,left:l,x:l*2,y:s*2}}if(typeof t=="object"){const s=Gr(t.top??t.y??0,o),l=Gr(t.bottom??t.y??0,o),c=Gr(t.left??t.x??0,r),u=Gr(t.right??t.x??0,r);return{top:s,right:u,bottom:l,left:c,x:c+u,y:s+l}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function dE(t,r,o,s,l,c){const{x:u,y:f}=oi(t,[r,o,s]),{x:p,y:g}=oi({x:t.x+t.width,y:t.y+t.height},[r,o,s]),m=l-p,h=c-g;return{left:Math.floor(u),top:Math.floor(f),right:Math.floor(m),bottom:Math.floor(h)}}const Zc=(t,r,o,s,l,c)=>{const u=fE(c,r,o),f=(r-u.x)/t.width,p=(o-u.y)/t.height,g=Math.min(f,p),m=ri(g,s,l),h=t.x+t.width/2,v=t.y+t.height/2,w=r/2-h*m,x=o/2-v*m,C=dE(t,w,x,m,r,o),E={left:Math.min(C.left-u.left,0),top:Math.min(C.top-u.top,0),right:Math.min(C.right-u.right,0),bottom:Math.min(C.bottom-u.bottom,0)};return{x:w-E.left+E.right,y:x-E.top+E.bottom,zoom:m}},ho=()=>{var t;return typeof navigator<"u"&&((t=navigator==null?void 0:navigator.userAgent)==null?void 0:t.indexOf("Mac"))>=0};function vr(t){return t!=null&&t!=="parent"}function xn(t){var r,o;return{width:((r=t.measured)==null?void 0:r.width)??t.width??t.initialWidth??0,height:((o=t.measured)==null?void 0:o.height)??t.height??t.initialHeight??0}}function Mg(t){var r,o;return(((r=t.measured)==null?void 0:r.width)??t.width??t.initialWidth)!==void 0&&(((o=t.measured)==null?void 0:o.height)??t.height??t.initialHeight)!==void 0}function Tg(t,r={width:0,height:0},o,s,l){const c={...t},u=s.get(o);if(u){const f=u.origin||l;c.x+=u.internals.positionAbsolute.x-(r.width??0)*f[0],c.y+=u.internals.positionAbsolute.y-(r.height??0)*f[1]}return c}function op(t,r){if(t.size!==r.size)return!1;for(const o of t)if(!r.has(o))return!1;return!0}function hE(){let t,r;return{promise:new Promise((s,l)=>{t=s,r=l}),resolve:t,reject:r}}function pE(t){return{...Eg,...t||{}}}function io(t,{snapGrid:r=[0,0],snapToGrid:o=!1,transform:s,containerBounds:l}){const{x:c,y:u}=Ut(t),f=ai({x:c-((l==null?void 0:l.left)??0),y:u-((l==null?void 0:l.top)??0)},s),{x:p,y:g}=o?xo(f,r):f;return{xSnapped:p,ySnapped:g,...f}}const Jc=t=>({width:t.offsetWidth,height:t.offsetHeight}),Ig=t=>{var r;return((r=t==null?void 0:t.getRootNode)==null?void 0:r.call(t))||(window==null?void 0:window.document)},mE=["INPUT","SELECT","TEXTAREA"];function Lg(t){var s,l;const r=((l=(s=t.composedPath)==null?void 0:s.call(t))==null?void 0:l[0])||t.target;return(r==null?void 0:r.nodeType)!==1?!1:mE.includes(r.nodeName)||r.hasAttribute("contenteditable")||!!r.closest(".nokey")}const Rg=t=>"clientX"in t,Ut=(t,r)=>{var c,u;const o=Rg(t),s=o?t.clientX:(c=t.touches)==null?void 0:c[0].clientX,l=o?t.clientY:(u=t.touches)==null?void 0:u[0].clientY;return{x:s-((r==null?void 0:r.left)??0),y:l-((r==null?void 0:r.top)??0)}},lp=(t,r,o,s,l)=>{const c=r.querySelectorAll(`.${t}`);return!c||!c.length?null:Array.from(c).map(u=>{const f=u.getBoundingClientRect();return{id:u.getAttribute("data-handleid"),type:t,nodeId:l,position:u.getAttribute("data-handlepos"),x:(f.left-o.left)/s,y:(f.top-o.top)/s,...Jc(u)}})};function zg({sourceX:t,sourceY:r,targetX:o,targetY:s,sourceControlX:l,sourceControlY:c,targetControlX:u,targetControlY:f}){const p=t*.125+l*.375+u*.375+o*.125,g=r*.125+c*.375+f*.375+s*.125,m=Math.abs(p-t),h=Math.abs(g-r);return[p,g,m,h]}function Ul(t,r){return t>=0?.5*t:r*25*Math.sqrt(-t)}function sp({pos:t,x1:r,y1:o,x2:s,y2:l,c}){switch(t){case xe.Left:return[r-Ul(r-s,c),o];case xe.Right:return[r+Ul(s-r,c),o];case xe.Top:return[r,o-Ul(o-l,c)];case xe.Bottom:return[r,o+Ul(l-o,c)]}}function Ag({sourceX:t,sourceY:r,sourcePosition:o=xe.Bottom,targetX:s,targetY:l,targetPosition:c=xe.Top,curvature:u=.25}){const[f,p]=sp({pos:o,x1:t,y1:r,x2:s,y2:l,c:u}),[g,m]=sp({pos:c,x1:s,y1:l,x2:t,y2:r,c:u}),[h,v,w,x]=zg({sourceX:t,sourceY:r,targetX:s,targetY:l,sourceControlX:f,sourceControlY:p,targetControlX:g,targetControlY:m});return[`M${t},${r} C${f},${p} ${g},${m} ${s},${l}`,h,v,w,x]}function Og({sourceX:t,sourceY:r,targetX:o,targetY:s}){const l=Math.abs(o-t)/2,c=o<t?o+l:o-l,u=Math.abs(s-r)/2,f=s<r?s+u:s-u;return[c,f,l,u]}function gE({sourceNode:t,targetNode:r,selected:o=!1,zIndex:s=0,elevateOnSelect:l=!1,zIndexMode:c="basic"}){if(c==="manual")return s;const u=l&&o?s+1e3:s,f=Math.max(t.parentId||l&&t.selected?t.internals.z:0,r.parentId||l&&r.selected?r.internals.z:0);return u+f}function yE({sourceNode:t,targetNode:r,width:o,height:s,transform:l}){const c=gs(as(t),as(r));c.x===c.x2&&(c.x2+=1),c.y===c.y2&&(c.y2+=1);const u={x:-l[0]/l[2],y:-l[1]/l[2],width:o/l[2],height:s/l[2]};return fo(u,ys(c))>0}const vE=({source:t,sourceHandle:r,target:o,targetHandle:s})=>`xy-edge__${t}${r||""}-${o}${s||""}`,wE=(t,r)=>r.some(o=>o.source===t.source&&o.target===t.target&&(o.sourceHandle===t.sourceHandle||!o.sourceHandle&&!t.sourceHandle)&&(o.targetHandle===t.targetHandle||!o.targetHandle&&!t.targetHandle)),xE=(t,r,o={})=>{var c;if(!t.source||!t.target)return(c=o.onError)==null||c.call(o,"006",qt.error006()),r;const s=o.getEdgeId||vE;let l;return kg(t)?l={...t}:l={...t,id:s(t)},wE(l,r)?r:(l.sourceHandle===null&&delete l.sourceHandle,l.targetHandle===null&&delete l.targetHandle,r.concat(l))};function Dg({sourceX:t,sourceY:r,targetX:o,targetY:s}){const[l,c,u,f]=Og({sourceX:t,sourceY:r,targetX:o,targetY:s});return[`M ${t},${r}L ${o},${s}`,l,c,u,f]}const ap={[xe.Left]:{x:-1,y:0},[xe.Right]:{x:1,y:0},[xe.Top]:{x:0,y:-1},[xe.Bottom]:{x:0,y:1}},EE=({source:t,sourcePosition:r=xe.Bottom,target:o})=>r===xe.Left||r===xe.Right?t.x<o.x?{x:1,y:0}:{x:-1,y:0}:t.y<o.y?{x:0,y:1}:{x:0,y:-1},up=(t,r)=>Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2));function _E({source:t,sourcePosition:r=xe.Bottom,target:o,targetPosition:s=xe.Top,center:l,offset:c,stepPosition:u}){const f=ap[r],p=ap[s],g={x:t.x+f.x*c,y:t.y+f.y*c},m={x:o.x+p.x*c,y:o.y+p.y*c},h=EE({source:g,sourcePosition:r,target:m}),v=h.x!==0?"x":"y",w=h[v];let x=[],C,E;const S={x:0,y:0},b={x:0,y:0},[,,_,N]=Og({sourceX:t.x,sourceY:t.y,targetX:o.x,targetY:o.y});if(f[v]*p[v]===-1){v==="x"?(C=l.x??g.x+(m.x-g.x)*u,E=l.y??(g.y+m.y)/2):(C=l.x??(g.x+m.x)/2,E=l.y??g.y+(m.y-g.y)*u);const P=[{x:C,y:g.y},{x:C,y:m.y}],R=[{x:g.x,y:E},{x:m.x,y:E}];f[v]===w?x=v==="x"?P:R:x=v==="x"?R:P}else{const P=[{x:g.x,y:m.y}],R=[{x:m.x,y:g.y}];if(v==="x"?x=f.x===w?R:P:x=f.y===w?P:R,r===s){const T=Math.abs(t[v]-o[v]);if(T<=c){const Y=Math.min(c-1,c-T);f[v]===w?S[v]=(g[v]>t[v]?-1:1)*Y:b[v]=(m[v]>o[v]?-1:1)*Y}}if(r!==s){const T=v==="x"?"y":"x",Y=f[v]===p[T],U=g[T]>m[T],X=g[T]<m[T];(f[v]===1&&(!Y&&U||Y&&X)||f[v]!==1&&(!Y&&X||Y&&U))&&(x=v==="x"?P:R)}const H={x:g.x+S.x,y:g.y+S.y},L={x:m.x+b.x,y:m.y+b.y},O=Math.max(Math.abs(H.x-x[0].x),Math.abs(L.x-x[0].x)),J=Math.max(Math.abs(H.y-x[0].y),Math.abs(L.y-x[0].y));O>=J?(C=(H.x+L.x)/2,E=x[0].y):(C=x[0].x,E=(H.y+L.y)/2)}const z={x:g.x+S.x,y:g.y+S.y},I={x:m.x+b.x,y:m.y+b.y};return[[t,...z.x!==x[0].x||z.y!==x[0].y?[z]:[],...x,...I.x!==x[x.length-1].x||I.y!==x[x.length-1].y?[I]:[],o],C,E,_,N]}function SE(t,r,o,s){const l=Math.min(up(t,r)/2,up(r,o)/2,s),{x:c,y:u}=r;if(t.x===c&&c===o.x||t.y===u&&u===o.y)return`L${c} ${u}`;if(t.y===u){const g=t.x<o.x?-1:1,m=t.y<o.y?1:-1;return`L ${c+l*g},${u}Q ${c},${u} ${c},${u+l*m}`}const f=t.x<o.x?1:-1,p=t.y<o.y?-1:1;return`L ${c},${u+l*p}Q ${c},${u} ${c+l*f},${u}`}function Oc({sourceX:t,sourceY:r,sourcePosition:o=xe.Bottom,targetX:s,targetY:l,targetPosition:c=xe.Top,borderRadius:u=5,centerX:f,centerY:p,offset:g=20,stepPosition:m=.5}){const[h,v,w,x,C]=_E({source:{x:t,y:r},sourcePosition:o,target:{x:s,y:l},targetPosition:c,center:{x:f,y:p},offset:g,stepPosition:m});let E=`M${h[0].x} ${h[0].y}`;for(let S=1;S<h.length-1;S++)E+=SE(h[S-1],h[S],h[S+1],u);return E+=`L${h[h.length-1].x} ${h[h.length-1].y}`,[E,v,w,x,C]}function cp(t){var r;return t&&!!(t.internals.handleBounds||(r=t.handles)!=null&&r.length)&&!!(t.measured.width||t.width||t.initialWidth)}function kE(t){var h;const{sourceNode:r,targetNode:o}=t;if(!cp(r)||!cp(o))return null;const s=r.internals.handleBounds||fp(r.handles),l=o.internals.handleBounds||fp(o.handles),c=dp((s==null?void 0:s.source)??[],t.sourceHandle),u=dp(t.connectionMode===ni.Strict?(l==null?void 0:l.target)??[]:((l==null?void 0:l.target)??[]).concat((l==null?void 0:l.source)??[]),t.targetHandle);if(!c||!u)return(h=t.onError)==null||h.call(t,"008",qt.error008(c?"target":"source",{id:t.id,sourceHandle:t.sourceHandle,targetHandle:t.targetHandle})),null;const f=(c==null?void 0:c.position)||xe.Bottom,p=(u==null?void 0:u.position)||xe.Top,g=wr(r,c,f),m=wr(o,u,p);return{sourceX:g.x,sourceY:g.y,targetX:m.x,targetY:m.y,sourcePosition:f,targetPosition:p}}function fp(t){if(!t)return null;const r=[],o=[];for(const s of t)s.width=s.width??1,s.height=s.height??1,s.type==="source"?r.push(s):s.type==="target"&&o.push(s);return{source:r,target:o}}function wr(t,r,o=xe.Left,s=!1){const l=((r==null?void 0:r.x)??0)+t.internals.positionAbsolute.x,c=((r==null?void 0:r.y)??0)+t.internals.positionAbsolute.y,{width:u,height:f}=r??xn(t);if(s)return{x:l+u/2,y:c+f/2};switch((r==null?void 0:r.position)??o){case xe.Top:return{x:l+u/2,y:c};case xe.Right:return{x:l+u,y:c+f/2};case xe.Bottom:return{x:l+u/2,y:c+f};case xe.Left:return{x:l,y:c+f/2}}}function dp(t,r){return t&&(r?t.find(o=>o.id===r):t[0])||null}function Dc(t,r){return t?typeof t=="string"?t:`${r?`${r}__`:""}${Object.keys(t).sort().map(s=>`${s}=${t[s]}`).join("&")}`:""}function CE(t,{id:r,defaultColor:o,defaultMarkerStart:s,defaultMarkerEnd:l}){const c=new Set;return t.reduce((u,f)=>([f.markerStart||s,f.markerEnd||l].forEach(p=>{if(p&&typeof p=="object"){const g=Dc(p,r);c.has(g)||(u.push({id:g,color:p.color||o,...p}),c.add(g))}}),u),[]).sort((u,f)=>u.id.localeCompare(f.id))}const Fg=1e3,NE=10,ef={nodeOrigin:[0,0],nodeExtent:uo,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},bE={...ef,checkEquality:!0};function tf(t,r){const o={...t};for(const s in r)r[s]!==void 0&&(o[s]=r[s]);return o}function PE(t,r,o){const s=tf(ef,o);for(const l of t.values())if(l.parentId)rf(l,t,r,s);else{const c=vo(l,s.nodeOrigin),u=vr(l.extent)?l.extent:s.nodeExtent,f=yr(c,u,xn(l));l.internals.positionAbsolute=f}}function ME(t,r){if(!t.handles)return t.measured?r==null?void 0:r.internals.handleBounds:void 0;const o=[],s=[];for(const l of t.handles){const c={id:l.id,width:l.width??1,height:l.height??1,nodeId:t.id,x:l.x,y:l.y,position:l.position,type:l.type};l.type==="source"?o.push(c):l.type==="target"&&s.push(c)}return{source:o,target:s}}function nf(t){return t==="manual"}function Fc(t,r,o,s={}){var m,h;const l=tf(bE,s),c={i:0},u=new Map(r),f=l!=null&&l.elevateNodesOnSelect&&!nf(l.zIndexMode)?Fg:0;let p=t.length>0,g=!1;r.clear(),o.clear();for(const v of t){let w=u.get(v.id);if(l.checkEquality&&v===(w==null?void 0:w.internals.userNode))r.set(v.id,w);else{const x=vo(v,l.nodeOrigin),C=vr(v.extent)?v.extent:l.nodeExtent,E=yr(x,C,xn(v));w={...l.defaults,...v,measured:{width:(m=v.measured)==null?void 0:m.width,height:(h=v.measured)==null?void 0:h.height},internals:{positionAbsolute:E,handleBounds:ME(v,w),z:jg(v,f,l.zIndexMode),userNode:v}},r.set(v.id,w)}(w.measured===void 0||w.measured.width===void 0||w.measured.height===void 0)&&!w.hidden&&(p=!1),v.parentId&&rf(w,r,o,s,c),g||(g=v.selected??!1)}return{nodesInitialized:p,hasSelectedNodes:g}}function TE(t,r){if(!t.parentId)return;const o=r.get(t.parentId);o?o.set(t.id,t):r.set(t.parentId,new Map([[t.id,t]]))}function rf(t,r,o,s,l){const{elevateNodesOnSelect:c,nodeOrigin:u,nodeExtent:f,zIndexMode:p}=tf(ef,s),g=t.parentId,m=r.get(g);if(!m){console.warn(`Parent node ${g} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}TE(t,o),l&&!m.parentId&&m.internals.rootParentIndex===void 0&&p==="auto"&&(m.internals.rootParentIndex=++l.i,m.internals.z=m.internals.z+l.i*NE),l&&m.internals.rootParentIndex!==void 0&&(l.i=m.internals.rootParentIndex);const h=c&&!nf(p)?Fg:0,{x:v,y:w,z:x}=IE(t,m,u,f,h,p),{positionAbsolute:C}=t.internals,E=v!==C.x||w!==C.y;(E||x!==t.internals.z)&&r.set(t.id,{...t,internals:{...t.internals,positionAbsolute:E?{x:v,y:w}:C,z:x}})}function jg(t,r,o){const s=Wt(t.zIndex)?t.zIndex:0;return nf(o)?s:s+(t.selected?r:0)}function IE(t,r,o,s,l,c){const{x:u,y:f}=r.internals.positionAbsolute,p=xn(t),g=vo(t,o),m=vr(t.extent)?yr(g,t.extent,p):g;let h=yr({x:u+m.x,y:f+m.y},s,p);t.extent==="parent"&&(h=Ng(h,p,r));const v=jg(t,l,c),w=r.internals.z??0;return{x:h.x,y:h.y,z:w>=v?w+1:v}}function of(t,r,o,s=[0,0]){var u;const l=[],c=new Map;for(const f of t){const p=r.get(f.parentId);if(!p)continue;const g=((u=c.get(f.parentId))==null?void 0:u.expandedRect)??ii(p),m=bg(g,f.rect);c.set(f.parentId,{expandedRect:m,parent:p})}return c.size>0&&c.forEach(({expandedRect:f,parent:p},g)=>{var _;const m=p.internals.positionAbsolute,h=xn(p),v=p.origin??s,w=f.x<m.x?Math.round(Math.abs(m.x-f.x)):0,x=f.y<m.y?Math.round(Math.abs(m.y-f.y)):0,C=Math.max(h.width,Math.round(f.width)),E=Math.max(h.height,Math.round(f.height)),S=(C-h.width)*v[0],b=(E-h.height)*v[1];(w>0||x>0||S||b)&&(l.push({id:g,type:"position",position:{x:p.position.x-w+S,y:p.position.y-x+b}}),(_=o.get(g))==null||_.forEach(N=>{t.some(z=>z.id===N.id)||l.push({id:N.id,type:"position",position:{x:N.position.x+w,y:N.position.y+x}})})),(h.width<f.width||h.height<f.height||w||x)&&l.push({id:g,type:"dimensions",setAttributes:!0,dimensions:{width:C+(w?v[0]*w-S:0),height:E+(x?v[1]*x-b:0)}})}),l}function LE(t,r,o,s,l,c,u){const f=s==null?void 0:s.querySelector(".xyflow__viewport");let p=!1;if(!f)return{changes:[],updatedInternals:p};const g=[],m=window.getComputedStyle(f),{m22:h}=new window.DOMMatrixReadOnly(m.transform),v=[];for(const w of t.values()){const x=r.get(w.id);if(!x)continue;if(x.hidden){r.set(x.id,{...x,internals:{...x.internals,handleBounds:void 0}}),p=!0;continue}const C=Jc(w.nodeElement),E=x.measured.width!==C.width||x.measured.height!==C.height;if(!!(C.width&&C.height&&(E||!x.internals.handleBounds||w.force))){const b=w.nodeElement.getBoundingClientRect(),_=vr(x.extent)?x.extent:c;let{positionAbsolute:N}=x.internals;x.parentId&&x.extent==="parent"?N=Ng(N,C,r.get(x.parentId)):_&&(N=yr(N,_,C));const z={...x,measured:C,internals:{...x.internals,positionAbsolute:N,handleBounds:{source:lp("source",w.nodeElement,b,h,x.id),target:lp("target",w.nodeElement,b,h,x.id)}}};r.set(x.id,z),x.parentId&&rf(z,r,o,{nodeOrigin:l,zIndexMode:u}),p=!0,E&&(g.push({id:x.id,type:"dimensions",dimensions:C}),x.expandParent&&x.parentId&&v.push({id:x.id,parentId:x.parentId,rect:ii(z,l)}))}}if(v.length>0){const w=of(v,r,o,l);g.push(...w)}return{changes:g,updatedInternals:p}}async function RE({delta:t,panZoom:r,transform:o,translateExtent:s,width:l,height:c}){if(!r||!t.x&&!t.y)return!1;const u=await r.setViewportConstrained({x:o[0]+t.x,y:o[1]+t.y,zoom:o[2]},[[0,0],[l,c]],s);return!!u&&(u.x!==o[0]||u.y!==o[1]||u.k!==o[2])}function hp(t,r,o,s,l,c){let u=l;const f=s.get(u)||new Map;s.set(u,f.set(o,r)),u=`${l}-${t}`;const p=s.get(u)||new Map;if(s.set(u,p.set(o,r)),c){u=`${l}-${t}-${c}`;const g=s.get(u)||new Map;s.set(u,g.set(o,r))}}function $g(t,r,o){t.clear(),r.clear();for(const s of o){const{source:l,target:c,sourceHandle:u=null,targetHandle:f=null}=s,p={edgeId:s.id,source:l,target:c,sourceHandle:u,targetHandle:f},g=`${l}-${u}--${c}-${f}`,m=`${c}-${f}--${l}-${u}`;hp("source",p,m,t,l,u),hp("target",p,g,t,c,f),r.set(s.id,s)}}function Hg(t,r){if(!t.parentId)return!1;const o=r.get(t.parentId);return o?o.selected?!0:Hg(o,r):!1}function pp(t,r,o){var l;let s=t;do{if((l=s==null?void 0:s.matches)!=null&&l.call(s,r))return!0;if(s===o)return!1;s=s==null?void 0:s.parentElement}while(s);return!1}function zE(t,r,o,s){const l=new Map;for(const[c,u]of t)if((u.selected||u.id===s)&&(!u.parentId||!Hg(u,t))&&(u.draggable||r&&typeof u.draggable>"u")){const f=t.get(c);f&&l.set(c,{id:c,position:f.position||{x:0,y:0},distance:{x:o.x-f.internals.positionAbsolute.x,y:o.y-f.internals.positionAbsolute.y},extent:f.extent,parentId:f.parentId,origin:f.origin,expandParent:f.expandParent,internals:{positionAbsolute:f.internals.positionAbsolute||{x:0,y:0}},measured:{width:f.measured.width??0,height:f.measured.height??0}})}return l}function Cu({nodeId:t,dragItems:r,nodeLookup:o,dragging:s=!0}){var u,f,p;const l=[];for(const[g,m]of r){const h=(u=o.get(g))==null?void 0:u.internals.userNode;h&&l.push({...h,position:m.position,dragging:s})}if(!t)return[l[0],l];const c=(f=o.get(t))==null?void 0:f.internals.userNode;return[c?{...c,position:((p=r.get(t))==null?void 0:p.position)||c.position,dragging:s}:l[0],l]}function AE({dragItems:t,snapGrid:r,x:o,y:s}){const l=t.values().next().value;if(!l)return null;const c={x:o-l.distance.x,y:s-l.distance.y},u=xo(c,r);return{x:u.x-c.x,y:u.y-c.y}}function OE({onNodeMouseDown:t,getStoreItems:r,onDragStart:o,onDrag:s,onDragStop:l}){let c={x:null,y:null},u=0,f=new Map,p=!1,g={x:0,y:0},m=null,h=!1,v=null,w=!1,x=!1,C=null;function E({noDragClassName:b,handleSelector:_,domNode:N,isSelectable:z,nodeId:I,nodeClickDistance:F=0}){v=Nt(N);function P({x:O,y:J}){const{nodeLookup:T,nodeExtent:Y,snapGrid:U,snapToGrid:X,nodeOrigin:B,onNodeDrag:V,onSelectionDrag:G,onError:M,updateNodePositions:j}=r();c={x:O,y:J};let D=!1;const W=f.size>1,Q=W&&Y?Ac(wo(f)):null,re=W&&X?AE({dragItems:f,snapGrid:U,x:O,y:J}):null;for(const[le,K]of f){if(!T.has(le))continue;let oe={x:O-K.distance.x,y:J-K.distance.y};X&&(oe=re?{x:Math.round(oe.x+re.x),y:Math.round(oe.y+re.y)}:xo(oe,U));let de=null;if(W&&Y&&!K.extent&&Q){const{positionAbsolute:fe}=K.internals,Se=fe.x-Q.x+Y[0][0],Ne=fe.x+K.measured.width-Q.x2+Y[1][0],be=fe.y-Q.y+Y[0][1],Re=fe.y+K.measured.height-Q.y2+Y[1][1];de=[[Se,be],[Ne,Re]]}const{position:we,positionAbsolute:he}=Cg({nodeId:le,nextPosition:oe,nodeLookup:T,nodeExtent:de||Y,nodeOrigin:B,onError:M});D=D||K.position.x!==we.x||K.position.y!==we.y,K.position=we,K.internals.positionAbsolute=he}if(x=x||D,!!D&&(j(f,!0),C&&(s||V||!I&&G))){const[le,K]=Cu({nodeId:I,dragItems:f,nodeLookup:T});s==null||s(C,f,le,K),V==null||V(C,le,K),I||G==null||G(C,K)}}async function R(){if(!m)return;const{transform:O,panBy:J,autoPanSpeed:T,autoPanOnNodeDrag:Y}=r();if(!Y){p=!1,cancelAnimationFrame(u);return}const[U,X]=Kc(g,m,T);(U!==0||X!==0)&&(c.x=(c.x??0)-U/O[2],c.y=(c.y??0)-X/O[2],await J({x:U,y:X})&&P(c)),u=requestAnimationFrame(R)}function H(O){var W;const{nodeLookup:J,multiSelectionActive:T,nodesDraggable:Y,transform:U,snapGrid:X,snapToGrid:B,selectNodesOnDrag:V,onNodeDragStart:G,onSelectionDragStart:M,unselectNodesAndEdges:j}=r();h=!0,(!V||!z)&&!T&&I&&((W=J.get(I))!=null&&W.selected||j()),z&&V&&I&&(t==null||t(I));const D=io(O.sourceEvent,{transform:U,snapGrid:X,snapToGrid:B,containerBounds:m});if(c=D,f=zE(J,Y,D,I),f.size>0&&(o||G||!I&&M)){const[Q,re]=Cu({nodeId:I,dragItems:f,nodeLookup:J});o==null||o(O.sourceEvent,f,Q,re),G==null||G(O.sourceEvent,Q,re),I||M==null||M(O.sourceEvent,re)}}const L=ig().clickDistance(F).on("start",O=>{const{domNode:J,nodeDragThreshold:T,transform:Y,snapGrid:U,snapToGrid:X}=r();m=(J==null?void 0:J.getBoundingClientRect())||null,w=!1,x=!1,C=O.sourceEvent,T===0&&H(O),c=io(O.sourceEvent,{transform:Y,snapGrid:U,snapToGrid:X,containerBounds:m}),g=Ut(O.sourceEvent,m)}).on("drag",O=>{const{autoPanOnNodeDrag:J,transform:T,snapGrid:Y,snapToGrid:U,nodeDragThreshold:X,nodeLookup:B}=r(),V=io(O.sourceEvent,{transform:T,snapGrid:Y,snapToGrid:U,containerBounds:m});if(C=O.sourceEvent,(O.sourceEvent.type==="touchmove"&&O.sourceEvent.touches.length>1||I&&!B.has(I))&&(w=!0),!w){if(!p&&J&&h&&(p=!0,R()),!h){const G=Ut(O.sourceEvent,m),M=G.x-g.x,j=G.y-g.y;Math.sqrt(M*M+j*j)>X&&H(O)}(c.x!==V.xSnapped||c.y!==V.ySnapped)&&f&&h&&(g=Ut(O.sourceEvent,m),P(V))}}).on("end",O=>{if(!h||w){w&&f.size>0&&r().updateNodePositions(f,!1);return}if(p=!1,h=!1,cancelAnimationFrame(u),f.size>0){const{nodeLookup:J,updateNodePositions:T,onNodeDragStop:Y,onSelectionDragStop:U}=r();if(x&&(T(f,!1),x=!1),l||Y||!I&&U){const[X,B]=Cu({nodeId:I,dragItems:f,nodeLookup:J,dragging:!1});l==null||l(O.sourceEvent,f,X,B),Y==null||Y(O.sourceEvent,X,B),I||U==null||U(O.sourceEvent,B)}}}).filter(O=>{const J=O.target;return!O.button&&(!b||!pp(J,`.${b}`,N))&&(!_||pp(J,_,N))});v.call(L)}function S(){v==null||v.on(".drag",null)}return{update:E,destroy:S}}function DE(t,r,o){const s=[],l={x:t.x-o,y:t.y-o,width:o*2,height:o*2};for(const c of r.values())fo(l,ii(c))>0&&s.push(c);return s}const FE=250;function jE(t,r,o,s){var f,p;let l=[],c=1/0;const u=DE(t,o,r+FE);for(const g of u){const m=[...((f=g.internals.handleBounds)==null?void 0:f.source)??[],...((p=g.internals.handleBounds)==null?void 0:p.target)??[]];for(const h of m){if(s.nodeId===h.nodeId&&s.type===h.type&&s.id===h.id)continue;const{x:v,y:w}=wr(g,h,h.position,!0),x=Math.sqrt(Math.pow(v-t.x,2)+Math.pow(w-t.y,2));x>r||(x<c?(l=[{...h,x:v,y:w}],c=x):x===c&&l.push({...h,x:v,y:w}))}}if(!l.length)return null;if(l.length>1){const g=s.type==="source"?"target":"source";return l.find(m=>m.type===g)??l[0]}return l[0]}function Vg(t,r,o,s,l,c=!1){var g,m,h;const u=s.get(t);if(!u)return null;const f=l==="strict"?(g=u.internals.handleBounds)==null?void 0:g[r]:[...((m=u.internals.handleBounds)==null?void 0:m.source)??[],...((h=u.internals.handleBounds)==null?void 0:h.target)??[]],p=(o?f==null?void 0:f.find(v=>v.id===o):f==null?void 0:f[0])??null;return p&&c?{...p,...wr(u,p,p.position,!0)}:p}function Bg(t,r){return t||(r!=null&&r.classList.contains("target")?"target":r!=null&&r.classList.contains("source")?"source":null)}function $E(t,r){let o=null;return r?o=!0:t&&!r&&(o=!1),o}const Wg=()=>!0;function HE(t,{connectionMode:r,connectionRadius:o,handleId:s,nodeId:l,edgeUpdaterType:c,isTarget:u,domNode:f,nodeLookup:p,lib:g,autoPanOnConnect:m,flowId:h,panBy:v,cancelConnection:w,onConnectStart:x,onConnect:C,onConnectEnd:E,isValidConnection:S=Wg,onReconnectEnd:b,updateConnection:_,getTransform:N,getFromHandle:z,autoPanSpeed:I,dragThreshold:F=1,handleDomNode:P}){const R=Ig(t.target);let H=0,L;const{x:O,y:J}=Ut(t),T=Bg(c,P),Y=f==null?void 0:f.getBoundingClientRect();let U=!1;if(!Y||!T)return;const X=Vg(l,T,s,p,r);if(!X)return;let B=Ut(t,Y),V=!1,G=null,M=!1,j=null;function D(){if(!m||!Y)return;const[we,he]=Kc(B,Y,I);v({x:we,y:he}),H=requestAnimationFrame(D)}const W={...X,nodeId:l,type:T,position:X.position},Q=p.get(l);let le={inProgress:!0,isValid:null,from:wr(Q,W,xe.Left,!0),fromHandle:W,fromPosition:W.position,fromNode:Q,to:B,toHandle:null,toPosition:np[W.position],toNode:null,pointer:B};function K(){U=!0,_(le),x==null||x(t,{nodeId:l,handleId:s,handleType:T})}F===0&&K();function oe(we){if(!U){const{x:Re,y:st}=Ut(we),ct=Re-O,tt=st-J;if(!(ct*ct+tt*tt>F*F))return;K()}if(!z()||!W){de(we);return}const he=N();B=Ut(we,Y),L=jE(ai(B,he,!1,[1,1]),o,p,W),V||(D(),V=!0);const fe=Ug(we,{handle:L,connectionMode:r,fromNodeId:l,fromHandleId:s,fromType:u?"target":"source",isValidConnection:S,doc:R,lib:g,flowId:h,nodeLookup:p});j=fe.handleDomNode,G=fe.connection,M=$E(!!L,fe.isValid);const Se=p.get(l),Ne=Se?wr(Se,W,xe.Left,!0):le.from,be={...le,from:Ne,isValid:M,to:fe.toHandle&&M?oi({x:fe.toHandle.x,y:fe.toHandle.y},he):B,toHandle:fe.toHandle,toPosition:M&&fe.toHandle?fe.toHandle.position:np[W.position],toNode:fe.toHandle?p.get(fe.toHandle.nodeId):null,pointer:B};_(be),le=be}function de(we){if(!("touches"in we&&we.touches.length>0)){if(U){(L||j)&&G&&M&&(C==null||C(G));const{inProgress:he,...fe}=le,Se={...fe,toPosition:le.toHandle?le.toPosition:null};E==null||E(we,Se),c&&(b==null||b(we,Se))}w(),cancelAnimationFrame(H),V=!1,M=!1,G=null,j=null,R.removeEventListener("mousemove",oe),R.removeEventListener("mouseup",de),R.removeEventListener("touchmove",oe),R.removeEventListener("touchend",de)}}R.addEventListener("mousemove",oe),R.addEventListener("mouseup",de),R.addEventListener("touchmove",oe),R.addEventListener("touchend",de)}function Ug(t,{handle:r,connectionMode:o,fromNodeId:s,fromHandleId:l,fromType:c,doc:u,lib:f,flowId:p,isValidConnection:g=Wg,nodeLookup:m}){const h=c==="target",v=r?u.querySelector(`.${f}-flow__handle[data-id="${p}-${r==null?void 0:r.nodeId}-${r==null?void 0:r.id}-${r==null?void 0:r.type}"]`):null,{x:w,y:x}=Ut(t),C=u.elementFromPoint(w,x),E=C!=null&&C.classList.contains(`${f}-flow__handle`)?C:v,S={handleDomNode:E,isValid:!1,connection:null,toHandle:null};if(E){const b=Bg(void 0,E),_=E.getAttribute("data-nodeid"),N=E.getAttribute("data-handleid"),z=E.classList.contains("connectable"),I=E.classList.contains("connectableend");if(!_||!b)return S;const F={source:h?_:s,sourceHandle:h?N:l,target:h?s:_,targetHandle:h?l:N};S.connection=F;const R=z&&I&&(o===ni.Strict?h&&b==="source"||!h&&b==="target":_!==s||N!==l);S.isValid=R&&g(F),S.toHandle=Vg(_,b,N,m,o,!0)}return S}const jc={onPointerDown:HE,isValid:Ug};function VE({domNode:t,panZoom:r,getTransform:o,getViewScale:s}){const l=Nt(t);function c({translateExtent:f,width:p,height:g,zoomStep:m=1,pannable:h=!0,zoomable:v=!0,inversePan:w=!1}){const x=_=>{if(_.sourceEvent.type!=="wheel"||!r)return;const N=o(),z=_.sourceEvent.ctrlKey&&ho()?10:1,I=-_.sourceEvent.deltaY*(_.sourceEvent.deltaMode===1?.05:_.sourceEvent.deltaMode?1:.002)*m,F=N[2]*Math.pow(2,I*z);r.scaleTo(F)};let C=[0,0];const E=_=>{(_.sourceEvent.type==="mousedown"||_.sourceEvent.type==="touchstart")&&(C=[_.sourceEvent.clientX??_.sourceEvent.touches[0].clientX,_.sourceEvent.clientY??_.sourceEvent.touches[0].clientY])},S=_=>{const N=o();if(_.sourceEvent.type!=="mousemove"&&_.sourceEvent.type!=="touchmove"||!r)return;const z=[_.sourceEvent.clientX??_.sourceEvent.touches[0].clientX,_.sourceEvent.clientY??_.sourceEvent.touches[0].clientY],I=[z[0]-C[0],z[1]-C[1]];C=z;const F=s()*Math.max(N[2],Math.log(N[2]))*(w?-1:1),P={x:N[0]-I[0]*F,y:N[1]-I[1]*F},R=[[0,0],[p,g]];r.setViewportConstrained({x:P.x,y:P.y,zoom:N[2]},R,f)},b=wg().on("start",E).on("zoom",h?S:null).on("zoom.wheel",v?x:null);l.call(b,{})}function u(){l.on("zoom",null)}return{update:c,destroy:u,pointer:Vt}}const vs=t=>({x:t.x,y:t.y,zoom:t.k}),Nu=({x:t,y:r,zoom:o})=>ms.translate(t,r).scale(o),Qr=(t,r)=>t.target.closest(`.${r}`),qg=(t,r)=>r===2&&Array.isArray(t)&&t.includes(2),BE=t=>((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2,bu=(t,r=0,o=BE,s=()=>{})=>{const l=typeof r=="number"&&r>0;return l||s(),l?t.transition().duration(r).ease(o).on("end",s):t},Yg=t=>{const r=t.ctrlKey&&ho()?10:1;return-t.deltaY*(t.deltaMode===1?.05:t.deltaMode?1:.002)*r};function WE({zoomPanValues:t,noWheelClassName:r,d3Selection:o,d3Zoom:s,panOnScrollMode:l,panOnScrollSpeed:c,zoomOnPinch:u,onPanZoomStart:f,onPanZoom:p,onPanZoomEnd:g}){return m=>{if(Qr(m,r))return m.ctrlKey&&m.preventDefault(),!1;m.preventDefault(),m.stopImmediatePropagation();const h=o.property("__zoom").k||1;if(m.ctrlKey&&u){const E=Vt(m),S=Yg(m),b=h*Math.pow(2,S);s.scaleTo(o,b,E,m);return}const v=m.deltaMode===1?20:1;let w=l===pr.Vertical?0:m.deltaX*v,x=l===pr.Horizontal?0:m.deltaY*v;!ho()&&m.shiftKey&&l!==pr.Vertical&&(w=m.deltaY*v,x=0),s.translateBy(o,-(w/h)*c,-(x/h)*c,{internal:!0});const C=vs(o.property("__zoom"));clearTimeout(t.panScrollTimeout),t.isPanScrolling?(p==null||p(m,C),t.panScrollTimeout=setTimeout(()=>{g==null||g(m,C),t.isPanScrolling=!1},150)):(t.isPanScrolling=!0,f==null||f(m,C))}}function UE({noWheelClassName:t,preventScrolling:r,d3ZoomHandler:o}){return function(s,l){const c=s.type==="wheel",u=!r&&c&&!s.ctrlKey,f=Qr(s,t);if(s.ctrlKey&&c&&f&&s.preventDefault(),u||f)return null;s.preventDefault(),o.call(this,s,l)}}function qE({zoomPanValues:t,onDraggingChange:r,onPanZoomStart:o}){return s=>{var c,u,f;if((c=s.sourceEvent)!=null&&c.internal)return;const l=vs(s.transform);t.mouseButton=((u=s.sourceEvent)==null?void 0:u.button)||0,t.isZoomingOrPanning=!0,t.prevViewport=l,((f=s.sourceEvent)==null?void 0:f.type)==="mousedown"&&r(!0),o&&(o==null||o(s.sourceEvent,l))}}function YE({zoomPanValues:t,panOnDrag:r,onPaneContextMenu:o,onTransformChange:s,onPanZoom:l}){return c=>{var u,f;t.usedRightMouseButton=!!(o&&qg(r,t.mouseButton??0)),(u=c.sourceEvent)!=null&&u.sync||s([c.transform.x,c.transform.y,c.transform.k]),l&&!((f=c.sourceEvent)!=null&&f.internal)&&(l==null||l(c.sourceEvent,vs(c.transform)))}}function XE({zoomPanValues:t,panOnDrag:r,panOnScroll:o,onDraggingChange:s,onPanZoomEnd:l,onPaneContextMenu:c}){return u=>{var f;if(!((f=u.sourceEvent)!=null&&f.internal)&&(t.isZoomingOrPanning=!1,c&&qg(r,t.mouseButton??0)&&!t.usedRightMouseButton&&u.sourceEvent&&c(u.sourceEvent),t.usedRightMouseButton=!1,s(!1),l)){const p=vs(u.transform);t.prevViewport=p,clearTimeout(t.timerId),t.timerId=setTimeout(()=>{l==null||l(u.sourceEvent,p)},o?150:0)}}}function GE({zoomActivationKeyPressed:t,zoomOnScroll:r,zoomOnPinch:o,panOnDrag:s,panOnScroll:l,zoomOnDoubleClick:c,userSelectionActive:u,noWheelClassName:f,noPanClassName:p,lib:g,connectionInProgress:m}){return h=>{var E;const v=t||r,w=o&&h.ctrlKey,x=h.type==="wheel";if(h.button===1&&h.type==="mousedown"&&(Qr(h,`${g}-flow__node`)||Qr(h,`${g}-flow__edge`)))return!0;if(!s&&!v&&!l&&!c&&!o||u||m&&!x||Qr(h,f)&&x||Qr(h,p)&&(!x||l&&x&&!t)||!o&&h.ctrlKey&&x)return!1;if(!o&&h.type==="touchstart"&&((E=h.touches)==null?void 0:E.length)>1)return h.preventDefault(),!1;if(!v&&!l&&!w&&x||!s&&(h.type==="mousedown"||h.type==="touchstart")||Array.isArray(s)&&!s.includes(h.button)&&h.type==="mousedown")return!1;const C=Array.isArray(s)&&s.includes(h.button)||!h.button||h.button<=1;return(!h.ctrlKey||x)&&C}}function QE({domNode:t,minZoom:r,maxZoom:o,translateExtent:s,viewport:l,onPanZoom:c,onPanZoomStart:u,onPanZoomEnd:f,onDraggingChange:p}){const g={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},m=t.getBoundingClientRect(),h=wg().scaleExtent([r,o]).translateExtent(s),v=Nt(t).call(h);b({x:l.x,y:l.y,zoom:ri(l.zoom,r,o)},[[0,0],[m.width,m.height]],s);const w=v.on("wheel.zoom"),x=v.on("dblclick.zoom");h.wheelDelta(Yg);async function C(L,O){return v?new Promise(J=>{h==null||h.interpolate((O==null?void 0:O.interpolate)==="linear"?ro:Ql).transform(bu(v,O==null?void 0:O.duration,O==null?void 0:O.ease,()=>J(!0)),L)}):!1}function E({noWheelClassName:L,noPanClassName:O,onPaneContextMenu:J,userSelectionActive:T,panOnScroll:Y,panOnDrag:U,panOnScrollMode:X,panOnScrollSpeed:B,preventScrolling:V,zoomOnPinch:G,zoomOnScroll:M,zoomOnDoubleClick:j,zoomActivationKeyPressed:D,lib:W,onTransformChange:Q,connectionInProgress:re,paneClickDistance:le,selectionOnDrag:K}){T&&!g.isZoomingOrPanning&&S();const oe=Y&&!D&&!T;h.clickDistance(K?1/0:!Wt(le)||le<0?0:le);const de=oe?WE({zoomPanValues:g,noWheelClassName:L,d3Selection:v,d3Zoom:h,panOnScrollMode:X,panOnScrollSpeed:B,zoomOnPinch:G,onPanZoomStart:u,onPanZoom:c,onPanZoomEnd:f}):UE({noWheelClassName:L,preventScrolling:V,d3ZoomHandler:w});v.on("wheel.zoom",de,{passive:!1});const we=qE({zoomPanValues:g,onDraggingChange:p,onPanZoomStart:u});h.on("start",we);const he=YE({zoomPanValues:g,panOnDrag:U,onPaneContextMenu:!!J,onPanZoom:c,onTransformChange:Q});h.on("zoom",he);const fe=XE({zoomPanValues:g,panOnDrag:U,panOnScroll:Y,onPaneContextMenu:J,onPanZoomEnd:f,onDraggingChange:p});h.on("end",fe);const Se=GE({zoomActivationKeyPressed:D,panOnDrag:U,zoomOnScroll:M,panOnScroll:Y,zoomOnDoubleClick:j,zoomOnPinch:G,userSelectionActive:T,noPanClassName:O,noWheelClassName:L,lib:W,connectionInProgress:re});h.filter(Se),j?v.on("dblclick.zoom",x):v.on("dblclick.zoom",null)}function S(){h.on("zoom",null)}async function b(L,O,J){const T=Nu(L),Y=h==null?void 0:h.constrain()(T,O,J);return Y&&await C(Y),Y}async function _(L,O){const J=Nu(L);return await C(J,O),J}function N(L){if(v){const O=Nu(L),J=v.property("__zoom");(J.k!==L.zoom||J.x!==L.x||J.y!==L.y)&&(h==null||h.transform(v,O,null,{sync:!0}))}}function z(){const L=v?vg(v.node()):{x:0,y:0,k:1};return{x:L.x,y:L.y,zoom:L.k}}async function I(L,O){return v?new Promise(J=>{h==null||h.interpolate((O==null?void 0:O.interpolate)==="linear"?ro:Ql).scaleTo(bu(v,O==null?void 0:O.duration,O==null?void 0:O.ease,()=>J(!0)),L)}):!1}async function F(L,O){return v?new Promise(J=>{h==null||h.interpolate((O==null?void 0:O.interpolate)==="linear"?ro:Ql).scaleBy(bu(v,O==null?void 0:O.duration,O==null?void 0:O.ease,()=>J(!0)),L)}):!1}function P(L){h==null||h.scaleExtent(L)}function R(L){h==null||h.translateExtent(L)}function H(L){const O=!Wt(L)||L<0?0:L;h==null||h.clickDistance(O)}return{update:E,destroy:S,setViewport:_,setViewportConstrained:b,getViewport:z,scaleTo:I,scaleBy:F,setScaleExtent:P,setTranslateExtent:R,syncViewport:N,setClickDistance:H}}var li;(function(t){t.Line="line",t.Handle="handle"})(li||(li={}));function KE({width:t,prevWidth:r,height:o,prevHeight:s,affectsX:l,affectsY:c}){const u=t-r,f=o-s,p=[u>0?1:u<0?-1:0,f>0?1:f<0?-1:0];return u&&l&&(p[0]=p[0]*-1),f&&c&&(p[1]=p[1]*-1),p}function mp(t){const r=t.includes("right")||t.includes("left"),o=t.includes("bottom")||t.includes("top"),s=t.includes("left"),l=t.includes("top");return{isHorizontal:r,isVertical:o,affectsX:s,affectsY:l}}function Vn(t,r){return Math.max(0,r-t)}function Bn(t,r){return Math.max(0,t-r)}function ql(t,r,o){return Math.max(0,r-t,t-o)}function gp(t,r){return t?!r:r}function ZE(t,r,o,s,l,c,u,f){let{affectsX:p,affectsY:g}=r;const{isHorizontal:m,isVertical:h}=r,v=m&&h,{xSnapped:w,ySnapped:x}=o,{minWidth:C,maxWidth:E,minHeight:S,maxHeight:b}=s,{x:_,y:N,width:z,height:I,aspectRatio:F}=t;let P=Math.floor(m?w-t.pointerX:0),R=Math.floor(h?x-t.pointerY:0);const H=z+(p?-P:P),L=I+(g?-R:R),O=-c[0]*z,J=-c[1]*I;let T=ql(H,C,E),Y=ql(L,S,b);if(u){let B=0,V=0;p&&P<0?B=Vn(_+P+O,u[0][0]):!p&&P>0&&(B=Bn(_+H+O,u[1][0])),g&&R<0?V=Vn(N+R+J,u[0][1]):!g&&R>0&&(V=Bn(N+L+J,u[1][1])),T=Math.max(T,B),Y=Math.max(Y,V)}if(f){let B=0,V=0;p&&P>0?B=Bn(_+P,f[0][0]):!p&&P<0&&(B=Vn(_+H,f[1][0])),g&&R>0?V=Bn(N+R,f[0][1]):!g&&R<0&&(V=Vn(N+L,f[1][1])),T=Math.max(T,B),Y=Math.max(Y,V)}if(l){if(m){const B=ql(H/F,S,b)*F;if(T=Math.max(T,B),u){let V=0;!p&&!g||p&&!g&&v?V=Bn(N+J+H/F,u[1][1])*F:V=Vn(N+J+(p?P:-P)/F,u[0][1])*F,T=Math.max(T,V)}if(f){let V=0;!p&&!g||p&&!g&&v?V=Vn(N+H/F,f[1][1])*F:V=Bn(N+(p?P:-P)/F,f[0][1])*F,T=Math.max(T,V)}}if(h){const B=ql(L*F,C,E)/F;if(Y=Math.max(Y,B),u){let V=0;!p&&!g||g&&!p&&v?V=Bn(_+L*F+O,u[1][0])/F:V=Vn(_+(g?R:-R)*F+O,u[0][0])/F,Y=Math.max(Y,V)}if(f){let V=0;!p&&!g||g&&!p&&v?V=Vn(_+L*F,f[1][0])/F:V=Bn(_+(g?R:-R)*F,f[0][0])/F,Y=Math.max(Y,V)}}}R=R+(R<0?Y:-Y),P=P+(P<0?T:-T),l&&(v?H>L*F?R=(gp(p,g)?-P:P)/F:P=(gp(p,g)?-R:R)*F:m?(R=P/F,g=p):(P=R*F,p=g));const U=p?_+P:_,X=g?N+R:N;return{width:z+(p?-P:P),height:I+(g?-R:R),x:c[0]*P*(p?-1:1)+U,y:c[1]*R*(g?-1:1)+X}}const Xg={width:0,height:0,x:0,y:0},JE={...Xg,pointerX:0,pointerY:0,aspectRatio:1};function e2(t,r,o){const s=r.position.x+t.position.x,l=r.position.y+t.position.y,c=t.measured.width??0,u=t.measured.height??0,f=o[0]*c,p=o[1]*u;return[[s-f,l-p],[s+c-f,l+u-p]]}function t2({domNode:t,nodeId:r,getStoreItems:o,onChange:s,onEnd:l}){const c=Nt(t);let u={controlDirection:mp("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function f({controlPosition:g,boundaries:m,keepAspectRatio:h,resizeDirection:v,onResizeStart:w,onResize:x,onResizeEnd:C,shouldResize:E}){let S={...Xg},b={...JE};u={boundaries:m,resizeDirection:v,keepAspectRatio:h,controlDirection:mp(g)};let _,N=null,z=[],I,F,P,R=!1;const H=ig().on("start",L=>{const{nodeLookup:O,transform:J,snapGrid:T,snapToGrid:Y,nodeOrigin:U,paneDomNode:X}=o();if(_=O.get(r),!_)return;N=(X==null?void 0:X.getBoundingClientRect())??null;const{xSnapped:B,ySnapped:V}=io(L.sourceEvent,{transform:J,snapGrid:T,snapToGrid:Y,containerBounds:N});S={width:_.measured.width??0,height:_.measured.height??0,x:_.position.x??0,y:_.position.y??0},b={...S,pointerX:B,pointerY:V,aspectRatio:S.width/S.height},I=void 0,F=vr(_.extent)?_.extent:void 0,_.parentId&&(_.extent==="parent"||_.expandParent)&&(I=O.get(_.parentId)),I&&_.extent==="parent"&&(F=[[0,0],[I.measured.width,I.measured.height]]),z=[],P=void 0;for(const[G,M]of O)if(M.parentId===r&&(z.push({id:G,position:{...M.position},extent:M.extent}),M.extent==="parent"||M.expandParent)){const j=e2(M,_,M.origin??U);P?P=[[Math.min(j[0][0],P[0][0]),Math.min(j[0][1],P[0][1])],[Math.max(j[1][0],P[1][0]),Math.max(j[1][1],P[1][1])]]:P=j}w==null||w(L,{...S})}).on("drag",L=>{const{transform:O,snapGrid:J,snapToGrid:T,nodeOrigin:Y}=o(),U=io(L.sourceEvent,{transform:O,snapGrid:J,snapToGrid:T,containerBounds:N}),X=[];if(!_)return;const{x:B,y:V,width:G,height:M}=S,j={},D=_.origin??Y,{width:W,height:Q,x:re,y:le}=ZE(b,u.controlDirection,U,u.boundaries,u.keepAspectRatio,D,F,P),K=W!==G,oe=Q!==M,de=re!==B&&K,we=le!==V&&oe;if(!de&&!we&&!K&&!oe)return;if((de||we||D[0]===1||D[1]===1)&&(j.x=de?re:S.x,j.y=we?le:S.y,S.x=j.x,S.y=j.y,z.length>0)){const Ne=re-B,be=le-V;for(const Re of z)Re.position={x:Re.position.x-Ne+D[0]*(W-G),y:Re.position.y-be+D[1]*(Q-M)},X.push(Re)}if((K||oe)&&(j.width=K&&(!u.resizeDirection||u.resizeDirection==="horizontal")?W:S.width,j.height=oe&&(!u.resizeDirection||u.resizeDirection==="vertical")?Q:S.height,S.width=j.width,S.height=j.height),I&&_.expandParent){const Ne=D[0]*(j.width??0);j.x&&j.x<Ne&&(S.x=Ne,b.x=b.x-(j.x-Ne));const be=D[1]*(j.height??0);j.y&&j.y<be&&(S.y=be,b.y=b.y-(j.y-be))}const he=KE({width:S.width,prevWidth:G,height:S.height,prevHeight:M,affectsX:u.controlDirection.affectsX,affectsY:u.controlDirection.affectsY}),fe={...S,direction:he};(E==null?void 0:E(L,fe))!==!1&&(R=!0,x==null||x(L,fe),s(j,X))}).on("end",L=>{R&&(C==null||C(L,{...S}),l==null||l({...S}),R=!1)});c.call(H)}function p(){c.on(".drag",null)}return{update:f,destroy:p}}var Pu={exports:{}},Mu={},Tu={exports:{}},Iu={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function n2(){if(yp)return Iu;yp=1;var t=mo();function r(h,v){return h===v&&(h!==0||1/h===1/v)||h!==h&&v!==v}var o=typeof Object.is=="function"?Object.is:r,s=t.useState,l=t.useEffect,c=t.useLayoutEffect,u=t.useDebugValue;function f(h,v){var w=v(),x=s({inst:{value:w,getSnapshot:v}}),C=x[0].inst,E=x[1];return c(function(){C.value=w,C.getSnapshot=v,p(C)&&E({inst:C})},[h,w,v]),l(function(){return p(C)&&E({inst:C}),h(function(){p(C)&&E({inst:C})})},[h]),u(w),w}function p(h){var v=h.getSnapshot;h=h.value;try{var w=v();return!o(h,w)}catch{return!0}}function g(h,v){return v()}var m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g:f;return Iu.useSyncExternalStore=t.useSyncExternalStore!==void 0?t.useSyncExternalStore:m,Iu}var vp;function r2(){return vp||(vp=1,Tu.exports=n2()),Tu.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function i2(){if(wp)return Mu;wp=1;var t=mo(),r=r2();function o(g,m){return g===m&&(g!==0||1/g===1/m)||g!==g&&m!==m}var s=typeof Object.is=="function"?Object.is:o,l=r.useSyncExternalStore,c=t.useRef,u=t.useEffect,f=t.useMemo,p=t.useDebugValue;return Mu.useSyncExternalStoreWithSelector=function(g,m,h,v,w){var x=c(null);if(x.current===null){var C={hasValue:!1,value:null};x.current=C}else C=x.current;x=f(function(){function S(I){if(!b){if(b=!0,_=I,I=v(I),w!==void 0&&C.hasValue){var F=C.value;if(w(F,I))return N=F}return N=I}if(F=N,s(_,I))return F;var P=v(I);return w!==void 0&&w(F,P)?(_=I,F):(_=I,N=P)}var b=!1,_,N,z=h===void 0?null:h;return[function(){return S(m())},z===null?void 0:function(){return S(z())}]},[m,h,v,w]);var E=l(g,x[0],x[1]);return u(function(){C.hasValue=!0,C.value=E},[E]),p(E),E},Mu}var xp;function o2(){return xp||(xp=1,Pu.exports=i2()),Pu.exports}var l2=o2();const s2=Hc(l2),a2={},Ep=t=>{let r;const o=new Set,s=(m,h)=>{const v=typeof m=="function"?m(r):m;if(!Object.is(v,r)){const w=r;r=h??(typeof v!="object"||v===null)?v:Object.assign({},r,v),o.forEach(x=>x(r,w))}},l=()=>r,p={setState:s,getState:l,getInitialState:()=>g,subscribe:m=>(o.add(m),()=>o.delete(m)),destroy:()=>{(a2?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},g=r=t(s,l,p);return p},u2=t=>t?Ep(t):Ep,{useDebugValue:c2}=xv,{useSyncExternalStoreWithSelector:f2}=s2,d2=t=>t;function Gg(t,r=d2,o){const s=f2(t.subscribe,t.getState,t.getServerState||t.getInitialState,r,o);return c2(s),s}const _p=(t,r)=>{const o=u2(t),s=(l,c=r)=>Gg(o,l,c);return Object.assign(s,o),s},h2=(t,r)=>t?_p(t,r):_p;function De(t,r){if(Object.is(t,r))return!0;if(typeof t!="object"||t===null||typeof r!="object"||r===null)return!1;if(t instanceof Map&&r instanceof Map){if(t.size!==r.size)return!1;for(const[s,l]of t)if(!Object.is(l,r.get(s)))return!1;return!0}if(t instanceof Set&&r instanceof Set){if(t.size!==r.size)return!1;for(const s of t)if(!r.has(s))return!1;return!0}const o=Object.keys(t);if(o.length!==Object.keys(r).length)return!1;for(const s of o)if(!Object.prototype.hasOwnProperty.call(r,s)||!Object.is(t[s],r[s]))return!1;return!0}Bm();const ws=ie.createContext(null),p2=ws.Provider,Qg=qt.error001("react");function Pe(t,r){const o=ie.useContext(ws);if(o===null)throw new Error(Qg);return Gg(o,t,r)}function Fe(){const t=ie.useContext(ws);if(t===null)throw new Error(Qg);return ie.useMemo(()=>({getState:t.getState,setState:t.setState,subscribe:t.subscribe}),[t])}const Sp={display:"none"},m2={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},Kg="react-flow__node-desc",Zg="react-flow__edge-desc",g2="react-flow__aria-live",y2=t=>t.ariaLiveMessage,v2=t=>t.ariaLabelConfig;function w2({rfId:t}){const r=Pe(y2);return Z.jsx("div",{id:`${g2}-${t}`,"aria-live":"assertive","aria-atomic":"true",style:m2,children:r})}function x2({rfId:t,disableKeyboardA11y:r}){const o=Pe(v2);return Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{id:`${Kg}-${t}`,style:Sp,children:r?o["node.a11yDescription.default"]:o["node.a11yDescription.keyboardDisabled"]}),Z.jsx("div",{id:`${Zg}-${t}`,style:Sp,children:o["edge.a11yDescription.default"]}),!r&&Z.jsx(w2,{rfId:t})]})}const xs=ie.forwardRef(({position:t="top-left",children:r,className:o,style:s,...l},c)=>{const u=`${t}`.split("-");return Z.jsx("div",{className:Ye(["react-flow__panel",o,...u]),style:s,ref:c,...l,children:r})});xs.displayName="Panel";function E2({proOptions:t,position:r="bottom-right"}){return t!=null&&t.hideAttribution?null:Z.jsx(xs,{position:r,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",children:Z.jsx("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}const _2=t=>{const r=[],o=[];for(const[,s]of t.nodeLookup)s.selected&&r.push(s.internals.userNode);for(const[,s]of t.edgeLookup)s.selected&&o.push(s);return{selectedNodes:r,selectedEdges:o}},Yl=t=>t.id;function S2(t,r){return De(t.selectedNodes.map(Yl),r.selectedNodes.map(Yl))&&De(t.selectedEdges.map(Yl),r.selectedEdges.map(Yl))}function k2({onSelectionChange:t}){const r=Fe(),{selectedNodes:o,selectedEdges:s}=Pe(_2,S2);return ie.useEffect(()=>{const l={nodes:o,edges:s};t==null||t(l),r.getState().onSelectionChangeHandlers.forEach(c=>c(l))},[o,s,t]),null}const C2=t=>!!t.onSelectionChangeHandlers;function N2({onSelectionChange:t}){const r=Pe(C2);return t||r?Z.jsx(k2,{onSelectionChange:t}):null}const Jg=[0,0],b2={x:0,y:0,zoom:1},P2=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],kp=[...P2,"rfId"],M2=t=>({setNodes:t.setNodes,setEdges:t.setEdges,setMinZoom:t.setMinZoom,setMaxZoom:t.setMaxZoom,setTranslateExtent:t.setTranslateExtent,setNodeExtent:t.setNodeExtent,reset:t.reset,setDefaultNodesAndEdges:t.setDefaultNodesAndEdges}),Cp={translateExtent:uo,nodeOrigin:Jg,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function T2(t){const{setNodes:r,setEdges:o,setMinZoom:s,setMaxZoom:l,setTranslateExtent:c,setNodeExtent:u,reset:f,setDefaultNodesAndEdges:p}=Pe(M2,De),g=Fe();ie.useEffect(()=>(p(t.defaultNodes,t.defaultEdges),()=>{m.current=Cp,f()}),[]);const m=ie.useRef(Cp);return ie.useEffect(()=>{for(const h of kp){const v=t[h],w=m.current[h];v!==w&&(typeof t[h]>"u"||(h==="nodes"?r(v):h==="edges"?o(v):h==="minZoom"?s(v):h==="maxZoom"?l(v):h==="translateExtent"?c(v):h==="nodeExtent"?u(v):h==="ariaLabelConfig"?g.setState({ariaLabelConfig:pE(v)}):h==="fitView"?g.setState({fitViewQueued:v}):h==="fitViewOptions"?g.setState({fitViewOptions:v}):g.setState({[h]:v})))}m.current=t},kp.map(h=>t[h])),null}function Np(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function I2(t){var s;const[r,o]=ie.useState(t==="system"?null:t);return ie.useEffect(()=>{if(t!=="system"){o(t);return}const l=Np(),c=()=>o(l!=null&&l.matches?"dark":"light");return c(),l==null||l.addEventListener("change",c),()=>{l==null||l.removeEventListener("change",c)}},[t]),r!==null?r:(s=Np())!=null&&s.matches?"dark":"light"}const bp=typeof document<"u"?document:null;function po(t=null,r={target:bp,actInsideInputWithModifier:!0}){const[o,s]=ie.useState(!1),l=ie.useRef(!1),c=ie.useRef(new Set([])),[u,f]=ie.useMemo(()=>{if(t!==null){const g=(Array.isArray(t)?t:[t]).filter(h=>typeof h=="string").map(h=>h.replace("+",`
`).replace(`

`,`
+`).split(`
`)),m=g.reduce((h,v)=>h.concat(...v),[]);return[g,m]}return[[],[]]},[t]);return ie.useEffect(()=>{const p=(r==null?void 0:r.target)??bp,g=(r==null?void 0:r.actInsideInputWithModifier)??!0;if(t!==null){const m=w=>{var E,S;if(l.current=w.ctrlKey||w.metaKey||w.shiftKey||w.altKey,(!l.current||l.current&&!g)&&Lg(w))return!1;const C=Mp(w.code,f);if(c.current.add(w[C]),Pp(u,c.current,!1)){const b=((S=(E=w.composedPath)==null?void 0:E.call(w))==null?void 0:S[0])||w.target,_=(b==null?void 0:b.nodeName)==="BUTTON"||(b==null?void 0:b.nodeName)==="A";r.preventDefault!==!1&&(l.current||!_)&&w.preventDefault(),s(!0)}},h=w=>{const x=Mp(w.code,f);Pp(u,c.current,!0)?(s(!1),c.current.clear()):c.current.delete(w[x]),w.key==="Meta"&&c.current.clear(),l.current=!1},v=()=>{c.current.clear(),s(!1)};return p==null||p.addEventListener("keydown",m),p==null||p.addEventListener("keyup",h),window.addEventListener("blur",v),window.addEventListener("contextmenu",v),()=>{p==null||p.removeEventListener("keydown",m),p==null||p.removeEventListener("keyup",h),window.removeEventListener("blur",v),window.removeEventListener("contextmenu",v)}}},[t,s]),o}function Pp(t,r,o){return t.filter(s=>o||s.length===r.size).some(s=>s.every(l=>r.has(l)))}function Mp(t,r){return r.includes(t)?"code":"key"}const L2=()=>{const t=Fe();return ie.useMemo(()=>({zoomIn:async r=>{const{panZoom:o}=t.getState();return o?o.scaleBy(1.2,r):!1},zoomOut:async r=>{const{panZoom:o}=t.getState();return o?o.scaleBy(1/1.2,r):!1},zoomTo:async(r,o)=>{const{panZoom:s}=t.getState();return s?s.scaleTo(r,o):!1},getZoom:()=>t.getState().transform[2],setViewport:async(r,o)=>{const{transform:[s,l,c],panZoom:u}=t.getState();return u?(await u.setViewport({x:r.x??s,y:r.y??l,zoom:r.zoom??c},o),!0):!1},getViewport:()=>{const[r,o,s]=t.getState().transform;return{x:r,y:o,zoom:s}},setCenter:async(r,o,s)=>t.getState().setCenter(r,o,s),fitBounds:async(r,o)=>{const{width:s,height:l,minZoom:c,maxZoom:u,panZoom:f}=t.getState(),p=Zc(r,s,l,c,u,(o==null?void 0:o.padding)??.1);return f?(await f.setViewport(p,{duration:o==null?void 0:o.duration,ease:o==null?void 0:o.ease,interpolate:o==null?void 0:o.interpolate}),!0):!1},screenToFlowPosition:(r,o={})=>{const{transform:s,snapGrid:l,snapToGrid:c,domNode:u}=t.getState();if(!u)return r;const{x:f,y:p}=u.getBoundingClientRect(),g={x:r.x-f,y:r.y-p},m=o.snapGrid??l,h=o.snapToGrid??c;return ai(g,s,h,m)},flowToScreenPosition:r=>{const{transform:o,domNode:s}=t.getState();if(!s)return r;const{x:l,y:c}=s.getBoundingClientRect(),u=oi(r,o);return{x:u.x+l,y:u.y+c}}}),[])};function e0(t,r){const o=[],s=new Map,l=[];for(const c of t)if(c.type==="add"){l.push(c);continue}else if(c.type==="remove"||c.type==="replace")s.set(c.id,[c]);else{const u=s.get(c.id);u?u.push(c):s.set(c.id,[c])}for(const c of r){const u=s.get(c.id);if(!u){o.push(c);continue}if(u[0].type==="remove")continue;if(u[0].type==="replace"){o.push({...u[0].item});continue}const f={...c};for(const p of u)R2(p,f);o.push(f)}return l.length&&l.forEach(c=>{c.index!==void 0?o.splice(c.index,0,{...c.item}):o.push({...c.item})}),o}function R2(t,r){switch(t.type){case"select":{r.selected=t.selected;break}case"position":{typeof t.position<"u"&&(r.position=t.position),typeof t.dragging<"u"&&(r.dragging=t.dragging);break}case"dimensions":{typeof t.dimensions<"u"&&(r.measured={...t.dimensions},t.setAttributes&&((t.setAttributes===!0||t.setAttributes==="width")&&(r.width=t.dimensions.width),(t.setAttributes===!0||t.setAttributes==="height")&&(r.height=t.dimensions.height))),typeof t.resizing=="boolean"&&(r.resizing=t.resizing);break}}}function z2(t,r){return e0(t,r)}function A2(t,r){return e0(t,r)}function fr(t,r){return{id:t,type:"select",selected:r}}function Kr(t,r=new Set,o=!1){const s=[];for(const[l,c]of t){const u=r.has(l);!(c.selected===void 0&&!u)&&c.selected!==u&&(o&&(c.selected=u),s.push(fr(c.id,u)))}return s}function Tp({items:t=[],lookup:r}){var l;const o=[],s=new Map(t.map(c=>[c.id,c]));for(const[c,u]of t.entries()){const f=r.get(u.id),p=((l=f==null?void 0:f.internals)==null?void 0:l.userNode)??f;p!==void 0&&p!==u&&o.push({id:u.id,item:u,type:"replace"}),p===void 0&&o.push({item:u,type:"add",index:c})}for(const[c]of r)s.get(c)===void 0&&o.push({id:c,type:"remove"});return o}function Ip(t){return{id:t.id,type:"remove"}}const O2=Pg();function D2(t,r,o={}){return xE(t,r,{...o,onError:o.onError??O2})}const Lp=t=>oE(t),F2=t=>kg(t);function t0(t){return ie.forwardRef(t)}const j2=typeof window<"u"?ie.useLayoutEffect:ie.useEffect;function Rp(t){const[r,o]=ie.useState(BigInt(0)),[s]=ie.useState(()=>$2(()=>o(l=>l+BigInt(1))));return j2(()=>{const l=s.get();l.length&&(t(l),s.reset())},[r]),s}function $2(t){let r=[];return{get:()=>r,reset:()=>{r=[]},push:o=>{r.push(o),t()}}}const n0=ie.createContext(null);function H2({children:t}){const r=Fe(),o=ie.useCallback(f=>{const{nodes:p=[],setNodes:g,hasDefaultNodes:m,onNodesChange:h,nodeLookup:v,fitViewQueued:w,onNodesChangeMiddlewareMap:x}=r.getState();let C=p;for(const S of f)C=typeof S=="function"?S(C):S;let E=Tp({items:C,lookup:v});for(const S of x.values())E=S(E);m&&g(C),E.length>0?h==null||h(E):w&&window.requestAnimationFrame(()=>{const{fitViewQueued:S,nodes:b,setNodes:_}=r.getState();S&&_(b)})},[]),s=Rp(o),l=ie.useCallback(f=>{const{edges:p=[],setEdges:g,hasDefaultEdges:m,onEdgesChange:h,edgeLookup:v}=r.getState();let w=p;for(const x of f)w=typeof x=="function"?x(w):x;m?g(w):h&&h(Tp({items:w,lookup:v}))},[]),c=Rp(l),u=ie.useMemo(()=>({nodeQueue:s,edgeQueue:c}),[]);return Z.jsx(n0.Provider,{value:u,children:t})}function V2(){const t=ie.useContext(n0);if(!t)throw new Error("useBatchContext must be used within a BatchProvider");return t}const B2=t=>!!t.panZoom;function Es(){const t=L2(),r=Fe(),o=V2(),s=Pe(B2),l=ie.useMemo(()=>{const c=h=>r.getState().nodeLookup.get(h),u=h=>{o.nodeQueue.push(h)},f=h=>{o.edgeQueue.push(h)},p=h=>{var S,b;const{nodeLookup:v,nodeOrigin:w}=r.getState(),x=Lp(h)?h:v.get(h.id),C=x.parentId?Tg(x.position,x.measured,x.parentId,v,w):x.position,E={...x,position:C,width:((S=x.measured)==null?void 0:S.width)??x.width,height:((b=x.measured)==null?void 0:b.height)??x.height};return ii(E)},g=(h,v,w={replace:!1})=>{u(x=>x.map(C=>{if(C.id===h){const E=typeof v=="function"?v(C):v;return w.replace&&Lp(E)?E:{...C,...E}}return C}))},m=(h,v,w={replace:!1})=>{f(x=>x.map(C=>{if(C.id===h){const E=typeof v=="function"?v(C):v;return w.replace&&F2(E)?E:{...C,...E}}return C}))};return{getNodes:()=>r.getState().nodes.map(h=>({...h})),getNode:h=>{var v;return(v=c(h))==null?void 0:v.internals.userNode},getInternalNode:c,getEdges:()=>{const{edges:h=[]}=r.getState();return h.map(v=>({...v}))},getEdge:h=>r.getState().edgeLookup.get(h),setNodes:u,setEdges:f,addNodes:h=>{const v=Array.isArray(h)?h:[h];o.nodeQueue.push(w=>[...w,...v])},addEdges:h=>{const v=Array.isArray(h)?h:[h];o.edgeQueue.push(w=>[...w,...v])},toObject:()=>{const{nodes:h=[],edges:v=[],transform:w}=r.getState(),[x,C,E]=w;return{nodes:h.map(S=>({...S})),edges:v.map(S=>({...S})),viewport:{x,y:C,zoom:E}}},deleteElements:async({nodes:h=[],edges:v=[]})=>{const{nodes:w,edges:x,onNodesDelete:C,onEdgesDelete:E,triggerNodeChanges:S,triggerEdgeChanges:b,onDelete:_,onBeforeDelete:N}=r.getState(),{nodes:z,edges:I}=await cE({nodesToRemove:h,edgesToRemove:v,nodes:w,edges:x,onBeforeDelete:N}),F=I.length>0,P=z.length>0;if(F){const R=I.map(Ip);E==null||E(I),b(R)}if(P){const R=z.map(Ip);C==null||C(z),S(R)}return(P||F)&&(_==null||_({nodes:z,edges:I})),{deletedNodes:z,deletedEdges:I}},getIntersectingNodes:(h,v=!0,w)=>{const x=ip(h),C=x?h:p(h),E=w!==void 0;return C?(w||r.getState().nodes).filter(S=>{const b=r.getState().nodeLookup.get(S.id);if(b&&!x&&(S.id===h.id||!b.internals.positionAbsolute))return!1;const _=ii(E?S:b),N=fo(_,C);return v&&N>0||N>=_.width*_.height||N>=C.width*C.height}):[]},isNodeIntersecting:(h,v,w=!0)=>{const C=ip(h)?h:p(h);if(!C)return!1;const E=fo(C,v);return w&&E>0||E>=v.width*v.height||E>=C.width*C.height},updateNode:g,updateNodeData:(h,v,w={replace:!1})=>{g(h,x=>{const C=typeof v=="function"?v(x):v;return w.replace?{...x,data:C}:{...x,data:{...x.data,...C}}},w)},updateEdge:m,updateEdgeData:(h,v,w={replace:!1})=>{m(h,x=>{const C=typeof v=="function"?v(x):v;return w.replace?{...x,data:C}:{...x,data:{...x.data,...C}}},w)},getNodesBounds:h=>{const{nodeLookup:v,nodeOrigin:w}=r.getState();return lE(h,{nodeLookup:v,nodeOrigin:w})},getHandleConnections:({type:h,id:v,nodeId:w})=>{var x;return Array.from(((x=r.getState().connectionLookup.get(`${w}-${h}${v?`-${v}`:""}`))==null?void 0:x.values())??[])},getNodeConnections:({type:h,handleId:v,nodeId:w})=>{var x;return Array.from(((x=r.getState().connectionLookup.get(`${w}${h?v?`-${h}-${v}`:`-${h}`:""}`))==null?void 0:x.values())??[])},fitView:async h=>{const v=r.getState().fitViewResolver??hE();return r.setState({fitViewQueued:!0,fitViewOptions:h,fitViewResolver:v}),o.nodeQueue.push(w=>[...w]),v.promise}}},[]);return ie.useMemo(()=>({...l,...t,viewportInitialized:s}),[s])}const zp=t=>t.selected,W2=typeof window<"u"?window:void 0;function U2({deleteKeyCode:t,multiSelectionKeyCode:r}){const o=Fe(),{deleteElements:s}=Es(),l=po(t,{actInsideInputWithModifier:!1}),c=po(r,{target:W2});ie.useEffect(()=>{if(l){const{edges:u,nodes:f}=o.getState();s({nodes:f.filter(zp),edges:u.filter(zp)}),o.setState({nodesSelectionActive:!1})}},[l]),ie.useEffect(()=>{o.setState({multiSelectionActive:c})},[c])}function q2(t){const r=Fe();ie.useEffect(()=>{const o=()=>{var l,c,u,f;if(!t.current||!(((c=(l=t.current).checkVisibility)==null?void 0:c.call(l))??!0))return!1;const s=Jc(t.current);(s.height===0||s.width===0)&&((f=(u=r.getState()).onError)==null||f.call(u,"004",qt.error004())),r.setState({width:s.width||500,height:s.height||500})};if(t.current){o(),window.addEventListener("resize",o);const s=new ResizeObserver(()=>o());return s.observe(t.current),()=>{window.removeEventListener("resize",o),s&&t.current&&s.unobserve(t.current)}}},[])}const _s={position:"absolute",width:"100%",height:"100%",top:0,left:0},Y2=t=>({userSelectionActive:t.userSelectionActive,lib:t.lib,connectionInProgress:t.connection.inProgress});function X2({onPaneContextMenu:t,zoomOnScroll:r=!0,zoomOnPinch:o=!0,panOnScroll:s=!1,panOnScrollSpeed:l=.5,panOnScrollMode:c=pr.Free,zoomOnDoubleClick:u=!0,panOnDrag:f=!0,defaultViewport:p,translateExtent:g,minZoom:m,maxZoom:h,zoomActivationKeyCode:v,preventScrolling:w=!0,children:x,noWheelClassName:C,noPanClassName:E,onViewportChange:S,isControlledViewport:b,paneClickDistance:_,selectionOnDrag:N}){const z=Fe(),I=ie.useRef(null),{userSelectionActive:F,lib:P,connectionInProgress:R}=Pe(Y2,De),H=po(v),L=ie.useRef();q2(I);const O=ie.useCallback(J=>{S==null||S({x:J[0],y:J[1],zoom:J[2]}),b||z.setState({transform:J})},[S,b]);return ie.useEffect(()=>{if(I.current){L.current=QE({domNode:I.current,minZoom:m,maxZoom:h,translateExtent:g,viewport:p,onDraggingChange:U=>z.setState(X=>X.paneDragging===U?X:{paneDragging:U}),onPanZoomStart:(U,X)=>{const{onViewportChangeStart:B,onMoveStart:V}=z.getState();V==null||V(U,X),B==null||B(X)},onPanZoom:(U,X)=>{const{onViewportChange:B,onMove:V}=z.getState();V==null||V(U,X),B==null||B(X)},onPanZoomEnd:(U,X)=>{const{onViewportChangeEnd:B,onMoveEnd:V}=z.getState();V==null||V(U,X),B==null||B(X)}});const{x:J,y:T,zoom:Y}=L.current.getViewport();return z.setState({panZoom:L.current,transform:[J,T,Y],domNode:I.current.closest(".react-flow")}),()=>{var U;(U=L.current)==null||U.destroy()}}},[]),ie.useEffect(()=>{var J;(J=L.current)==null||J.update({onPaneContextMenu:t,zoomOnScroll:r,zoomOnPinch:o,panOnScroll:s,panOnScrollSpeed:l,panOnScrollMode:c,zoomOnDoubleClick:u,panOnDrag:f,zoomActivationKeyPressed:H,preventScrolling:w,noPanClassName:E,userSelectionActive:F,noWheelClassName:C,lib:P,onTransformChange:O,connectionInProgress:R,selectionOnDrag:N,paneClickDistance:_})},[t,r,o,s,l,c,u,f,H,w,E,F,C,P,O,R,N,_]),Z.jsx("div",{className:"react-flow__renderer",ref:I,style:_s,children:x})}const G2=t=>({userSelectionActive:t.userSelectionActive,userSelectionRect:t.userSelectionRect});function Q2(){const{userSelectionActive:t,userSelectionRect:r}=Pe(G2,De);return t&&r?Z.jsx("div",{className:"react-flow__selection react-flow__container",style:{width:r.width,height:r.height,transform:`translate(${r.x}px, ${r.y}px)`}}):null}const Lu=(t,r)=>o=>{o.target===r.current&&(t==null||t(o))},K2=t=>({userSelectionActive:t.userSelectionActive,elementsSelectable:t.elementsSelectable,connectionInProgress:t.connection.inProgress,dragging:t.paneDragging,panBy:t.panBy,autoPanSpeed:t.autoPanSpeed});function Z2({isSelecting:t,selectionKeyPressed:r,selectionMode:o=co.Full,panOnDrag:s,autoPanOnSelection:l,paneClickDistance:c,selectionOnDrag:u,onSelectionStart:f,onSelectionEnd:p,onPaneClick:g,onPaneContextMenu:m,onPaneScroll:h,onPaneMouseEnter:v,onPaneMouseMove:w,onPaneMouseLeave:x,children:C}){const E=ie.useRef(0),S=Fe(),{userSelectionActive:b,elementsSelectable:_,dragging:N,connectionInProgress:z,panBy:I,autoPanSpeed:F}=Pe(K2,De),P=_&&(t||b),R=ie.useRef(null),H=ie.useRef(),L=ie.useRef(new Set),O=ie.useRef(new Set),J=ie.useRef(!1),T=ie.useRef({x:0,y:0}),Y=ie.useRef(!1),U=K=>{if(J.current||z){J.current=!1;return}g==null||g(K),S.getState().resetSelectedElements(),S.setState({nodesSelectionActive:!1})},X=K=>{if(Array.isArray(s)&&(s!=null&&s.includes(2))){K.preventDefault();return}m==null||m(K)},B=h?K=>h(K):void 0,V=K=>{J.current&&(K.stopPropagation(),J.current=!1)},G=K=>{var Re,st;const{domNode:oe,transform:de}=S.getState();if(H.current=oe==null?void 0:oe.getBoundingClientRect(),!H.current)return;const we=K.target===R.current;if(!we&&!!K.target.closest(".nokey")||!t||!(u&&we||r)||K.button!==0||!K.isPrimary)return;(st=(Re=K.target)==null?void 0:Re.setPointerCapture)==null||st.call(Re,K.pointerId),J.current=!1;const{x:Se,y:Ne}=Ut(K.nativeEvent,H.current),be=ai({x:Se,y:Ne},de);S.setState({userSelectionRect:{width:0,height:0,startX:be.x,startY:be.y,x:Se,y:Ne}}),we||(K.stopPropagation(),K.preventDefault())};function M(K,oe){const{userSelectionRect:de}=S.getState();if(!de)return;const{transform:we,nodeLookup:he,edgeLookup:fe,connectionLookup:Se,triggerNodeChanges:Ne,triggerEdgeChanges:be,defaultEdgeOptions:Re}=S.getState(),st={x:de.startX,y:de.startY},{x:ct,y:tt}=oi(st,we),nt={startX:st.x,startY:st.y,x:K<ct?K:ct,y:oe<tt?oe:tt,width:Math.abs(K-ct),height:Math.abs(oe-tt)},ln=L.current,Gt=O.current;L.current=new Set(Qc(he,nt,we,o===co.Partial,!0).map(ft=>ft.id)),O.current=new Set;const Qt=(Re==null?void 0:Re.selectable)??!0;for(const ft of L.current){const Pt=Se.get(ft);if(Pt)for(const{edgeId:wt}of Pt.values()){const Mt=fe.get(wt);Mt&&(Mt.selectable??Qt)&&O.current.add(wt)}}if(!op(ln,L.current)){const ft=Kr(he,L.current,!0);Ne(ft)}if(!op(Gt,O.current)){const ft=Kr(fe,O.current);be(ft)}S.setState({userSelectionRect:nt,userSelectionActive:!0,nodesSelectionActive:!1})}function j(){if(!l||!H.current)return;const[K,oe]=Kc(T.current,H.current,F);I({x:K,y:oe}).then(de=>{if(!J.current||!de){E.current=requestAnimationFrame(j);return}const{x:we,y:he}=T.current;M(we,he),E.current=requestAnimationFrame(j)})}const D=()=>{cancelAnimationFrame(E.current),E.current=0,Y.current=!1};ie.useEffect(()=>()=>D(),[]);const W=K=>{const{userSelectionRect:oe,transform:de,resetSelectedElements:we}=S.getState();if(!H.current||!oe)return;const{x:he,y:fe}=Ut(K.nativeEvent,H.current);T.current={x:he,y:fe};const Se=oi({x:oe.startX,y:oe.startY},de);if(!J.current){const Ne=r?0:c;if(Math.hypot(he-Se.x,fe-Se.y)<=Ne)return;we(),f==null||f(K)}J.current=!0,Y.current||(j(),Y.current=!0),M(he,fe)},Q=K=>{var oe,de;K.button===0&&((de=(oe=K.target)==null?void 0:oe.releasePointerCapture)==null||de.call(oe,K.pointerId),!b&&K.target===R.current&&S.getState().userSelectionRect&&(U==null||U(K)),S.setState({userSelectionActive:!1,userSelectionRect:null}),J.current&&(p==null||p(K),S.setState({nodesSelectionActive:L.current.size>0})),D())},re=K=>{var oe,de;(de=(oe=K.target)==null?void 0:oe.releasePointerCapture)==null||de.call(oe,K.pointerId),D()},le=s===!0||Array.isArray(s)&&s.includes(0);return Z.jsxs("div",{className:Ye(["react-flow__pane",{draggable:le,dragging:N,selection:t}]),onClick:P?void 0:Lu(U,R),onContextMenu:Lu(X,R),onWheel:Lu(B,R),onPointerEnter:P?void 0:v,onPointerMove:P?W:w,onPointerUp:P?Q:void 0,onPointerCancel:P?re:void 0,onPointerDownCapture:P?G:void 0,onClickCapture:P?V:void 0,onPointerLeave:x,ref:R,style:_s,children:[C,Z.jsx(Q2,{})]})}function $c({id:t,store:r,unselect:o=!1,nodeRef:s}){const{addSelectedNodes:l,unselectNodesAndEdges:c,multiSelectionActive:u,nodeLookup:f,onError:p}=r.getState(),g=f.get(t);if(!g){p==null||p("012",qt.error012(t));return}r.setState({nodesSelectionActive:!1}),g.selected?(o||g.selected&&u)&&(c({nodes:[g],edges:[]}),requestAnimationFrame(()=>{var m;return(m=s==null?void 0:s.current)==null?void 0:m.blur()})):l([t])}function r0({nodeRef:t,disabled:r=!1,noDragClassName:o,handleSelector:s,nodeId:l,isSelectable:c,nodeClickDistance:u}){const f=Fe(),[p,g]=ie.useState(!1),m=ie.useRef();return ie.useEffect(()=>{m.current=OE({getStoreItems:()=>f.getState(),onNodeMouseDown:h=>{$c({id:h,store:f,nodeRef:t})},onDragStart:()=>{g(!0)},onDragStop:()=>{g(!1)}})},[]),ie.useEffect(()=>{if(!(r||!t.current||!m.current))return m.current.update({noDragClassName:o,handleSelector:s,domNode:t.current,isSelectable:c,nodeId:l,nodeClickDistance:u}),()=>{var h;(h=m.current)==null||h.destroy()}},[o,s,r,c,t,l,u]),p}const J2=t=>r=>r.selected&&(r.draggable||t&&typeof r.draggable>"u");function i0(){const t=Fe();return ie.useCallback(o=>{const{nodeExtent:s,snapToGrid:l,snapGrid:c,nodesDraggable:u,onError:f,updateNodePositions:p,nodeLookup:g,nodeOrigin:m}=t.getState(),h=new Map,v=J2(u),w=l?c[0]:5,x=l?c[1]:5,C=o.direction.x*w*o.factor,E=o.direction.y*x*o.factor;for(const[,S]of g){if(!v(S))continue;let b={x:S.internals.positionAbsolute.x+C,y:S.internals.positionAbsolute.y+E};l&&(b=xo(b,c));const{position:_,positionAbsolute:N}=Cg({nodeId:S.id,nextPosition:b,nodeLookup:g,nodeExtent:s,nodeOrigin:m,onError:f});S.position=_,S.internals.positionAbsolute=N,h.set(S.id,S)}p(h)},[])}const lf=ie.createContext(null),e_=lf.Provider;lf.Consumer;const o0=()=>ie.useContext(lf),t_=t=>({connectOnClick:t.connectOnClick,noPanClassName:t.noPanClassName,rfId:t.rfId}),n_=(t,r,o)=>s=>{const{connectionClickStartHandle:l,connectionMode:c,connection:u}=s,{fromHandle:f,toHandle:p,isValid:g}=u,m=(p==null?void 0:p.nodeId)===t&&(p==null?void 0:p.id)===r&&(p==null?void 0:p.type)===o;return{connectingFrom:(f==null?void 0:f.nodeId)===t&&(f==null?void 0:f.id)===r&&(f==null?void 0:f.type)===o,connectingTo:m,clickConnecting:(l==null?void 0:l.nodeId)===t&&(l==null?void 0:l.id)===r&&(l==null?void 0:l.type)===o,isPossibleEndHandle:c===ni.Strict?(f==null?void 0:f.type)!==o:t!==(f==null?void 0:f.nodeId)||r!==(f==null?void 0:f.id),connectionInProcess:!!f,clickConnectionInProcess:!!l,valid:m&&g}};function r_({type:t="source",position:r=xe.Top,isValidConnection:o,isConnectable:s=!0,isConnectableStart:l=!0,isConnectableEnd:c=!0,id:u,onConnect:f,children:p,className:g,onMouseDown:m,onTouchStart:h,...v},w){var Y,U;const x=u||null,C=t==="target",E=Fe(),S=o0(),{connectOnClick:b,noPanClassName:_,rfId:N}=Pe(t_,De),{connectingFrom:z,connectingTo:I,clickConnecting:F,isPossibleEndHandle:P,connectionInProcess:R,clickConnectionInProcess:H,valid:L}=Pe(n_(S,x,t),De);S||(U=(Y=E.getState()).onError)==null||U.call(Y,"010",qt.error010());const O=X=>{const{defaultEdgeOptions:B,onConnect:V,hasDefaultEdges:G}=E.getState(),M={...B,...X};if(G){const{edges:j,setEdges:D,onError:W}=E.getState();D(D2(M,j,{onError:W}))}V==null||V(M),f==null||f(M)},J=X=>{if(!S)return;const B=Rg(X.nativeEvent);if(l&&(B&&X.button===0||!B)){const V=E.getState();jc.onPointerDown(X.nativeEvent,{handleDomNode:X.currentTarget,autoPanOnConnect:V.autoPanOnConnect,connectionMode:V.connectionMode,connectionRadius:V.connectionRadius,domNode:V.domNode,nodeLookup:V.nodeLookup,lib:V.lib,isTarget:C,handleId:x,nodeId:S,flowId:V.rfId,panBy:V.panBy,cancelConnection:V.cancelConnection,onConnectStart:V.onConnectStart,onConnectEnd:(...G)=>{var M,j;return(j=(M=E.getState()).onConnectEnd)==null?void 0:j.call(M,...G)},updateConnection:V.updateConnection,onConnect:O,isValidConnection:o||((...G)=>{var M,j;return((j=(M=E.getState()).isValidConnection)==null?void 0:j.call(M,...G))??!0}),getTransform:()=>E.getState().transform,getFromHandle:()=>E.getState().connection.fromHandle,autoPanSpeed:V.autoPanSpeed,dragThreshold:V.connectionDragThreshold})}B?m==null||m(X):h==null||h(X)},T=X=>{const{onClickConnectStart:B,onClickConnectEnd:V,connectionClickStartHandle:G,connectionMode:M,isValidConnection:j,lib:D,rfId:W,nodeLookup:Q,connection:re}=E.getState();if(!S||!G&&!l)return;if(!G){B==null||B(X.nativeEvent,{nodeId:S,handleId:x,handleType:t}),E.setState({connectionClickStartHandle:{nodeId:S,type:t,id:x}});return}const le=Ig(X.target),K=o||j,{connection:oe,isValid:de}=jc.isValid(X.nativeEvent,{handle:{nodeId:S,id:x,type:t},connectionMode:M,fromNodeId:G.nodeId,fromHandleId:G.id||null,fromType:G.type,isValidConnection:K,flowId:W,doc:le,lib:D,nodeLookup:Q});de&&oe&&O(oe);const we=structuredClone(re);delete we.inProgress,we.toPosition=we.toHandle?we.toHandle.position:null,V==null||V(X,we),E.setState({connectionClickStartHandle:null})};return Z.jsx("div",{"data-handleid":x,"data-nodeid":S,"data-handlepos":r,"data-id":`${N}-${S}-${x}-${t}`,className:Ye(["react-flow__handle",`react-flow__handle-${r}`,"nodrag",_,g,{source:!C,target:C,connectable:s,connectablestart:l,connectableend:c,clickconnecting:F,connectingfrom:z,connectingto:I,valid:L,connectionindicator:s&&(!R||P)&&(R||H?c:l)}]),onMouseDown:J,onTouchStart:J,onClick:b?T:void 0,ref:w,...v,children:p})}const si=ie.memo(t0(r_));function i_({data:t,isConnectable:r,sourcePosition:o=xe.Bottom}){return Z.jsxs(Z.Fragment,{children:[t==null?void 0:t.label,Z.jsx(si,{type:"source",position:o,isConnectable:r})]})}function o_({data:t,isConnectable:r,targetPosition:o=xe.Top,sourcePosition:s=xe.Bottom}){return Z.jsxs(Z.Fragment,{children:[Z.jsx(si,{type:"target",position:o,isConnectable:r}),t==null?void 0:t.label,Z.jsx(si,{type:"source",position:s,isConnectable:r})]})}function l_(){return null}function s_({data:t,isConnectable:r,targetPosition:o=xe.Top}){return Z.jsxs(Z.Fragment,{children:[Z.jsx(si,{type:"target",position:o,isConnectable:r}),t==null?void 0:t.label]})}const us={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Ap={input:i_,default:o_,output:s_,group:l_};function a_(t){var r,o,s,l;return t.internals.handleBounds===void 0?{width:t.width??t.initialWidth??((r=t.style)==null?void 0:r.width),height:t.height??t.initialHeight??((o=t.style)==null?void 0:o.height)}:{width:t.width??((s=t.style)==null?void 0:s.width),height:t.height??((l=t.style)==null?void 0:l.height)}}const u_=t=>{const{width:r,height:o,x:s,y:l}=wo(t.nodeLookup,{filter:c=>!!c.selected});return{width:Wt(r)?r:null,height:Wt(o)?o:null,userSelectionActive:t.userSelectionActive,transformString:`translate(${t.transform[0]}px,${t.transform[1]}px) scale(${t.transform[2]}) translate(${s}px,${l}px)`}};function c_({onSelectionContextMenu:t,noPanClassName:r,disableKeyboardA11y:o}){const s=Fe(),{width:l,height:c,transformString:u,userSelectionActive:f}=Pe(u_,De),p=i0(),g=ie.useRef(null);ie.useEffect(()=>{var w;o||(w=g.current)==null||w.focus({preventScroll:!0})},[o]);const m=!f&&l!==null&&c!==null;if(r0({nodeRef:g,disabled:!m}),!m)return null;const h=t?w=>{const x=s.getState().nodes.filter(C=>C.selected);t(w,x)}:void 0,v=w=>{Object.prototype.hasOwnProperty.call(us,w.key)&&(w.preventDefault(),p({direction:us[w.key],factor:w.shiftKey?4:1}))};return Z.jsx("div",{className:Ye(["react-flow__nodesselection","react-flow__container",r]),style:{transform:u},children:Z.jsx("div",{ref:g,className:"react-flow__nodesselection-rect",onContextMenu:h,tabIndex:o?void 0:-1,onKeyDown:o?void 0:v,style:{width:l,height:c}})})}const Op=typeof window<"u"?window:void 0,f_=t=>({nodesSelectionActive:t.nodesSelectionActive,userSelectionActive:t.userSelectionActive});function l0({children:t,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:s,onPaneMouseLeave:l,onPaneContextMenu:c,onPaneScroll:u,paneClickDistance:f,deleteKeyCode:p,selectionKeyCode:g,selectionOnDrag:m,selectionMode:h,onSelectionStart:v,onSelectionEnd:w,multiSelectionKeyCode:x,panActivationKeyCode:C,zoomActivationKeyCode:E,elementsSelectable:S,zoomOnScroll:b,zoomOnPinch:_,panOnScroll:N,panOnScrollSpeed:z,panOnScrollMode:I,zoomOnDoubleClick:F,panOnDrag:P,autoPanOnSelection:R,defaultViewport:H,translateExtent:L,minZoom:O,maxZoom:J,preventScrolling:T,onSelectionContextMenu:Y,noWheelClassName:U,noPanClassName:X,disableKeyboardA11y:B,onViewportChange:V,isControlledViewport:G}){const{nodesSelectionActive:M,userSelectionActive:j}=Pe(f_,De),D=po(g,{target:Op}),W=po(C,{target:Op}),Q=W||P,re=W||N,le=m&&Q!==!0,K=D||j||le;return U2({deleteKeyCode:p,multiSelectionKeyCode:x}),Z.jsx(X2,{onPaneContextMenu:c,elementsSelectable:S,zoomOnScroll:b,zoomOnPinch:_,panOnScroll:re,panOnScrollSpeed:z,panOnScrollMode:I,zoomOnDoubleClick:F,panOnDrag:!D&&Q,defaultViewport:H,translateExtent:L,minZoom:O,maxZoom:J,zoomActivationKeyCode:E,preventScrolling:T,noWheelClassName:U,noPanClassName:X,onViewportChange:V,isControlledViewport:G,paneClickDistance:f,selectionOnDrag:le,children:Z.jsxs(Z2,{onSelectionStart:v,onSelectionEnd:w,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:s,onPaneMouseLeave:l,onPaneContextMenu:c,onPaneScroll:u,panOnDrag:Q,autoPanOnSelection:R,isSelecting:!!K,selectionMode:h,selectionKeyPressed:D,paneClickDistance:f,selectionOnDrag:le,children:[t,M&&Z.jsx(c_,{onSelectionContextMenu:Y,noPanClassName:X,disableKeyboardA11y:B})]})})}l0.displayName="FlowRenderer";const d_=ie.memo(l0),h_=t=>r=>t?Qc(r.nodeLookup,{x:0,y:0,width:r.width,height:r.height},r.transform,!0).map(o=>o.id):Array.from(r.nodeLookup.keys());function p_(t){return Pe(ie.useCallback(h_(t),[t]),De)}const m_=t=>t.updateNodeInternals;function g_(){const t=Pe(m_),[r]=ie.useState(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(o=>{const s=new Map;o.forEach(l=>{const c=l.target.getAttribute("data-id");s.set(c,{id:c,nodeElement:l.target,force:!0})}),t(s)}));return ie.useEffect(()=>()=>{r==null||r.disconnect()},[r]),r}function y_({node:t,nodeType:r,hasDimensions:o,resizeObserver:s}){const l=Fe(),c=ie.useRef(null),u=ie.useRef(null),f=ie.useRef(t.sourcePosition),p=ie.useRef(t.targetPosition),g=ie.useRef(r),m=o&&!!t.internals.handleBounds;return ie.useEffect(()=>{c.current&&!t.hidden&&(!m||u.current!==c.current)&&(u.current&&(s==null||s.unobserve(u.current)),s==null||s.observe(c.current),u.current=c.current)},[m,t.hidden]),ie.useEffect(()=>()=>{u.current&&(s==null||s.unobserve(u.current),u.current=null)},[]),ie.useEffect(()=>{if(c.current){const h=g.current!==r,v=f.current!==t.sourcePosition,w=p.current!==t.targetPosition;(h||v||w)&&(g.current=r,f.current=t.sourcePosition,p.current=t.targetPosition,l.getState().updateNodeInternals(new Map([[t.id,{id:t.id,nodeElement:c.current,force:!0}]])))}},[t.id,r,t.sourcePosition,t.targetPosition]),c}function v_({id:t,onClick:r,onMouseEnter:o,onMouseMove:s,onMouseLeave:l,onContextMenu:c,onDoubleClick:u,nodesDraggable:f,elementsSelectable:p,nodesConnectable:g,nodesFocusable:m,resizeObserver:h,noDragClassName:v,noPanClassName:w,disableKeyboardA11y:x,rfId:C,nodeTypes:E,nodeClickDistance:S,onError:b}){const{node:_,internals:N,isParent:z}=Pe(K=>{const oe=K.nodeLookup.get(t),de=K.parentLookup.has(t);return{node:oe,internals:oe.internals,isParent:de}},De);let I=_.type||"default",F=(E==null?void 0:E[I])||Ap[I];F===void 0&&(b==null||b("003",qt.error003(I)),I="default",F=(E==null?void 0:E.default)||Ap.default);const P=!!(_.draggable||f&&typeof _.draggable>"u"),R=!!(_.selectable||p&&typeof _.selectable>"u"),H=!!(_.connectable||g&&typeof _.connectable>"u"),L=!!(_.focusable||m&&typeof _.focusable>"u"),O=Fe(),J=Mg(_),T=y_({node:_,nodeType:I,hasDimensions:J,resizeObserver:h}),Y=r0({nodeRef:T,disabled:_.hidden||!P,noDragClassName:v,handleSelector:_.dragHandle,nodeId:t,isSelectable:R,nodeClickDistance:S}),U=i0();if(_.hidden)return null;const X=xn(_),B=a_(_),V=R||P||r||o||s||l,G=o?K=>o(K,{...N.userNode}):void 0,M=s?K=>s(K,{...N.userNode}):void 0,j=l?K=>l(K,{...N.userNode}):void 0,D=c?K=>c(K,{...N.userNode}):void 0,W=u?K=>u(K,{...N.userNode}):void 0,Q=K=>{const{selectNodesOnDrag:oe,nodeDragThreshold:de}=O.getState();R&&(!oe||!P||de>0)&&$c({id:t,store:O,nodeRef:T}),r&&r(K,{...N.userNode})},re=K=>{if(!(Lg(K.nativeEvent)||x)){if(xg.includes(K.key)&&R){const oe=K.key==="Escape";$c({id:t,store:O,unselect:oe,nodeRef:T})}else if(P&&_.selected&&Object.prototype.hasOwnProperty.call(us,K.key)){K.preventDefault();const{ariaLabelConfig:oe}=O.getState();O.setState({ariaLiveMessage:oe["node.a11yDescription.ariaLiveMessage"]({direction:K.key.replace("Arrow","").toLowerCase(),x:~~N.positionAbsolute.x,y:~~N.positionAbsolute.y})}),U({direction:us[K.key],factor:K.shiftKey?4:1})}}},le=()=>{var Se;if(x||!((Se=T.current)!=null&&Se.matches(":focus-visible")))return;const{transform:K,width:oe,height:de,autoPanOnNodeFocus:we,setCenter:he}=O.getState();if(!we)return;Qc(new Map([[t,_]]),{x:0,y:0,width:oe,height:de},K,!0).length>0||he(_.position.x+X.width/2,_.position.y+X.height/2,{zoom:K[2]})};return Z.jsx("div",{className:Ye(["react-flow__node",`react-flow__node-${I}`,{[w]:P},_.className,{selected:_.selected,selectable:R,parent:z,draggable:P,dragging:Y}]),ref:T,style:{zIndex:N.z,transform:`translate(${N.positionAbsolute.x}px,${N.positionAbsolute.y}px)`,pointerEvents:V?"all":"none",visibility:J?"visible":"hidden",..._.style,...B},"data-id":t,"data-testid":`rf__node-${t}`,onMouseEnter:G,onMouseMove:M,onMouseLeave:j,onContextMenu:D,onClick:Q,onDoubleClick:W,onKeyDown:L?re:void 0,tabIndex:L?0:void 0,onFocus:L?le:void 0,role:_.ariaRole??(L?"group":void 0),"aria-roledescription":"node","aria-describedby":x?void 0:`${Kg}-${C}`,"aria-label":_.ariaLabel,..._.domAttributes,children:Z.jsx(e_,{value:t,children:Z.jsx(F,{id:t,data:_.data,type:I,positionAbsoluteX:N.positionAbsolute.x,positionAbsoluteY:N.positionAbsolute.y,selected:_.selected??!1,selectable:R,draggable:P,deletable:_.deletable??!0,isConnectable:H,sourcePosition:_.sourcePosition,targetPosition:_.targetPosition,dragging:Y,dragHandle:_.dragHandle,zIndex:N.z,parentId:_.parentId,...X})})})}var w_=ie.memo(v_);const x_=t=>({nodesDraggable:t.nodesDraggable,nodesConnectable:t.nodesConnectable,nodesFocusable:t.nodesFocusable,elementsSelectable:t.elementsSelectable,onError:t.onError});function s0(t){const{nodesDraggable:r,nodesConnectable:o,nodesFocusable:s,elementsSelectable:l,onError:c}=Pe(x_,De),u=p_(t.onlyRenderVisibleElements),f=g_();return Z.jsx("div",{className:"react-flow__nodes",style:_s,children:u.map(p=>Z.jsx(w_,{id:p,nodeTypes:t.nodeTypes,nodeExtent:t.nodeExtent,onClick:t.onNodeClick,onMouseEnter:t.onNodeMouseEnter,onMouseMove:t.onNodeMouseMove,onMouseLeave:t.onNodeMouseLeave,onContextMenu:t.onNodeContextMenu,onDoubleClick:t.onNodeDoubleClick,noDragClassName:t.noDragClassName,noPanClassName:t.noPanClassName,rfId:t.rfId,disableKeyboardA11y:t.disableKeyboardA11y,resizeObserver:f,nodesDraggable:r,nodesConnectable:o,nodesFocusable:s,elementsSelectable:l,nodeClickDistance:t.nodeClickDistance,onError:c},p))})}s0.displayName="NodeRenderer";const E_=ie.memo(s0);function __(t){return Pe(ie.useCallback(o=>{if(!t)return o.edges.map(l=>l.id);const s=[];if(o.width&&o.height)for(const l of o.edges){const c=o.nodeLookup.get(l.source),u=o.nodeLookup.get(l.target);c&&u&&yE({sourceNode:c,targetNode:u,width:o.width,height:o.height,transform:o.transform})&&s.push(l.id)}return s},[t]),De)}const S_=({color:t="none",strokeWidth:r=1})=>{const o={strokeWidth:r,...t&&{stroke:t}};return Z.jsx("polyline",{className:"arrow",style:o,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},k_=({color:t="none",strokeWidth:r=1})=>{const o={strokeWidth:r,...t&&{stroke:t,fill:t}};return Z.jsx("polyline",{className:"arrowclosed",style:o,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},Dp={[ss.Arrow]:S_,[ss.ArrowClosed]:k_};function C_(t){const r=Fe();return ie.useMemo(()=>{var l,c;return Object.prototype.hasOwnProperty.call(Dp,t)?Dp[t]:((c=(l=r.getState()).onError)==null||c.call(l,"009",qt.error009(t)),null)},[t])}const N_=({id:t,type:r,color:o,width:s=12.5,height:l=12.5,markerUnits:c="strokeWidth",strokeWidth:u,orient:f="auto-start-reverse"})=>{const p=C_(r);return p?Z.jsx("marker",{className:"react-flow__arrowhead",id:t,markerWidth:`${s}`,markerHeight:`${l}`,viewBox:"-10 -10 20 20",markerUnits:c,orient:f,refX:"0",refY:"0",children:Z.jsx(p,{color:o,strokeWidth:u})}):null},a0=({defaultColor:t,rfId:r})=>{const o=Pe(c=>c.edges),s=Pe(c=>c.defaultEdgeOptions),l=ie.useMemo(()=>CE(o,{id:r,defaultColor:t,defaultMarkerStart:s==null?void 0:s.markerStart,defaultMarkerEnd:s==null?void 0:s.markerEnd}),[o,s,r,t]);return l.length?Z.jsx("svg",{className:"react-flow__marker","aria-hidden":"true",children:Z.jsx("defs",{children:l.map(c=>Z.jsx(N_,{id:c.id,type:c.type,color:c.color,width:c.width,height:c.height,markerUnits:c.markerUnits,strokeWidth:c.strokeWidth,orient:c.orient},c.id))})}):null};a0.displayName="MarkerDefinitions";var b_=ie.memo(a0);function u0({x:t,y:r,label:o,labelStyle:s,labelShowBg:l=!0,labelBgStyle:c,labelBgPadding:u=[2,4],labelBgBorderRadius:f=2,children:p,className:g,...m}){const[h,v]=ie.useState({x:1,y:0,width:0,height:0}),w=Ye(["react-flow__edge-textwrapper",g]),x=ie.useRef(null);return ie.useEffect(()=>{if(x.current){const C=x.current.getBBox();v({x:C.x,y:C.y,width:C.width,height:C.height})}},[o]),o?Z.jsxs("g",{transform:`translate(${t-h.width/2} ${r-h.height/2})`,className:w,visibility:h.width?"visible":"hidden",...m,children:[l&&Z.jsx("rect",{width:h.width+2*u[0],x:-u[0],y:-u[1],height:h.height+2*u[1],className:"react-flow__edge-textbg",style:c,rx:f,ry:f}),Z.jsx("text",{className:"react-flow__edge-text",y:h.height/2,dy:"0.3em",ref:x,style:s,children:o}),p]}):null}u0.displayName="EdgeText";const P_=ie.memo(u0);function Ss({path:t,labelX:r,labelY:o,label:s,labelStyle:l,labelShowBg:c,labelBgStyle:u,labelBgPadding:f,labelBgBorderRadius:p,interactionWidth:g=20,...m}){return Z.jsxs(Z.Fragment,{children:[Z.jsx("path",{...m,d:t,fill:"none",className:Ye(["react-flow__edge-path",m.className])}),g?Z.jsx("path",{d:t,fill:"none",strokeOpacity:0,strokeWidth:g,className:"react-flow__edge-interaction"}):null,s&&Wt(r)&&Wt(o)?Z.jsx(P_,{x:r,y:o,label:s,labelStyle:l,labelShowBg:c,labelBgStyle:u,labelBgPadding:f,labelBgBorderRadius:p}):null]})}function Fp({pos:t,x1:r,y1:o,x2:s,y2:l}){return t===xe.Left||t===xe.Right?[.5*(r+s),o]:[r,.5*(o+l)]}function c0({sourceX:t,sourceY:r,sourcePosition:o=xe.Bottom,targetX:s,targetY:l,targetPosition:c=xe.Top}){const[u,f]=Fp({pos:o,x1:t,y1:r,x2:s,y2:l}),[p,g]=Fp({pos:c,x1:s,y1:l,x2:t,y2:r}),[m,h,v,w]=zg({sourceX:t,sourceY:r,targetX:s,targetY:l,sourceControlX:u,sourceControlY:f,targetControlX:p,targetControlY:g});return[`M${t},${r} C${u},${f} ${p},${g} ${s},${l}`,m,h,v,w]}function f0(t){return ie.memo(({id:r,sourceX:o,sourceY:s,targetX:l,targetY:c,sourcePosition:u,targetPosition:f,label:p,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:w,style:x,markerEnd:C,markerStart:E,interactionWidth:S})=>{const[b,_,N]=c0({sourceX:o,sourceY:s,sourcePosition:u,targetX:l,targetY:c,targetPosition:f}),z=t.isInternal?void 0:r;return Z.jsx(Ss,{id:z,path:b,labelX:_,labelY:N,label:p,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:w,style:x,markerEnd:C,markerStart:E,interactionWidth:S})})}const M_=f0({isInternal:!1}),d0=f0({isInternal:!0});M_.displayName="SimpleBezierEdge";d0.displayName="SimpleBezierEdgeInternal";function h0(t){return ie.memo(({id:r,sourceX:o,sourceY:s,targetX:l,targetY:c,label:u,labelStyle:f,labelShowBg:p,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,sourcePosition:w=xe.Bottom,targetPosition:x=xe.Top,markerEnd:C,markerStart:E,pathOptions:S,interactionWidth:b})=>{const[_,N,z]=Oc({sourceX:o,sourceY:s,sourcePosition:w,targetX:l,targetY:c,targetPosition:x,borderRadius:S==null?void 0:S.borderRadius,offset:S==null?void 0:S.offset,stepPosition:S==null?void 0:S.stepPosition}),I=t.isInternal?void 0:r;return Z.jsx(Ss,{id:I,path:_,labelX:N,labelY:z,label:u,labelStyle:f,labelShowBg:p,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:C,markerStart:E,interactionWidth:b})})}const p0=h0({isInternal:!1}),m0=h0({isInternal:!0});p0.displayName="SmoothStepEdge";m0.displayName="SmoothStepEdgeInternal";function g0(t){return ie.memo(({id:r,...o})=>{var l;const s=t.isInternal?void 0:r;return Z.jsx(p0,{...o,id:s,pathOptions:ie.useMemo(()=>{var c;return{borderRadius:0,offset:(c=o.pathOptions)==null?void 0:c.offset}},[(l=o.pathOptions)==null?void 0:l.offset])})})}const T_=g0({isInternal:!1}),y0=g0({isInternal:!0});T_.displayName="StepEdge";y0.displayName="StepEdgeInternal";function v0(t){return ie.memo(({id:r,sourceX:o,sourceY:s,targetX:l,targetY:c,label:u,labelStyle:f,labelShowBg:p,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:w,markerStart:x,interactionWidth:C})=>{const[E,S,b]=Dg({sourceX:o,sourceY:s,targetX:l,targetY:c}),_=t.isInternal?void 0:r;return Z.jsx(Ss,{id:_,path:E,labelX:S,labelY:b,label:u,labelStyle:f,labelShowBg:p,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:w,markerStart:x,interactionWidth:C})})}const I_=v0({isInternal:!1}),w0=v0({isInternal:!0});I_.displayName="StraightEdge";w0.displayName="StraightEdgeInternal";function x0(t){return ie.memo(({id:r,sourceX:o,sourceY:s,targetX:l,targetY:c,sourcePosition:u=xe.Bottom,targetPosition:f=xe.Top,label:p,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:w,style:x,markerEnd:C,markerStart:E,pathOptions:S,interactionWidth:b})=>{const[_,N,z]=Ag({sourceX:o,sourceY:s,sourcePosition:u,targetX:l,targetY:c,targetPosition:f,curvature:S==null?void 0:S.curvature}),I=t.isInternal?void 0:r;return Z.jsx(Ss,{id:I,path:_,labelX:N,labelY:z,label:p,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:w,style:x,markerEnd:C,markerStart:E,interactionWidth:b})})}const L_=x0({isInternal:!1}),E0=x0({isInternal:!0});L_.displayName="BezierEdge";E0.displayName="BezierEdgeInternal";const jp={default:E0,straight:w0,step:y0,smoothstep:m0,simplebezier:d0},$p={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null},R_=(t,r,o)=>o===xe.Left?t-r:o===xe.Right?t+r:t,z_=(t,r,o)=>o===xe.Top?t-r:o===xe.Bottom?t+r:t,Hp="react-flow__edgeupdater";function Vp({position:t,centerX:r,centerY:o,radius:s=10,onMouseDown:l,onMouseEnter:c,onMouseOut:u,type:f}){return Z.jsx("circle",{onMouseDown:l,onMouseEnter:c,onMouseOut:u,className:Ye([Hp,`${Hp}-${f}`]),cx:R_(r,s,t),cy:z_(o,s,t),r:s,stroke:"transparent",fill:"transparent"})}function A_({isReconnectable:t,reconnectRadius:r,edge:o,sourceX:s,sourceY:l,targetX:c,targetY:u,sourcePosition:f,targetPosition:p,onReconnect:g,onReconnectStart:m,onReconnectEnd:h,setReconnecting:v,setUpdateHover:w}){const x=Fe(),C=(N,z)=>{if(N.button!==0)return;const{autoPanOnConnect:I,domNode:F,connectionMode:P,connectionRadius:R,lib:H,onConnectStart:L,cancelConnection:O,nodeLookup:J,rfId:T,panBy:Y,updateConnection:U}=x.getState(),X=z.type==="target",B=(M,j)=>{v(!1),h==null||h(M,o,z.type,j)},V=M=>g==null?void 0:g(o,M),G=(M,j)=>{v(!0),m==null||m(N,o,z.type),L==null||L(M,j)};jc.onPointerDown(N.nativeEvent,{autoPanOnConnect:I,connectionMode:P,connectionRadius:R,domNode:F,handleId:z.id,nodeId:z.nodeId,nodeLookup:J,isTarget:X,edgeUpdaterType:z.type,lib:H,flowId:T,cancelConnection:O,panBy:Y,isValidConnection:(...M)=>{var j,D;return((D=(j=x.getState()).isValidConnection)==null?void 0:D.call(j,...M))??!0},onConnect:V,onConnectStart:G,onConnectEnd:(...M)=>{var j,D;return(D=(j=x.getState()).onConnectEnd)==null?void 0:D.call(j,...M)},onReconnectEnd:B,updateConnection:U,getTransform:()=>x.getState().transform,getFromHandle:()=>x.getState().connection.fromHandle,dragThreshold:x.getState().connectionDragThreshold,handleDomNode:N.currentTarget})},E=N=>C(N,{nodeId:o.target,id:o.targetHandle??null,type:"target"}),S=N=>C(N,{nodeId:o.source,id:o.sourceHandle??null,type:"source"}),b=()=>w(!0),_=()=>w(!1);return Z.jsxs(Z.Fragment,{children:[(t===!0||t==="source")&&Z.jsx(Vp,{position:f,centerX:s,centerY:l,radius:r,onMouseDown:E,onMouseEnter:b,onMouseOut:_,type:"source"}),(t===!0||t==="target")&&Z.jsx(Vp,{position:p,centerX:c,centerY:u,radius:r,onMouseDown:S,onMouseEnter:b,onMouseOut:_,type:"target"})]})}function O_({id:t,edgesFocusable:r,edgesReconnectable:o,elementsSelectable:s,onClick:l,onDoubleClick:c,onContextMenu:u,onMouseEnter:f,onMouseMove:p,onMouseLeave:g,reconnectRadius:m,onReconnect:h,onReconnectStart:v,onReconnectEnd:w,rfId:x,edgeTypes:C,noPanClassName:E,onError:S,disableKeyboardA11y:b}){let _=Pe(he=>he.edgeLookup.get(t));const N=Pe(he=>he.defaultEdgeOptions);_=N?{...N,..._}:_;let z=_.type||"default",I=(C==null?void 0:C[z])||jp[z];I===void 0&&(S==null||S("011",qt.error011(z)),z="default",I=(C==null?void 0:C.default)||jp.default);const F=!!(_.focusable||r&&typeof _.focusable>"u"),P=typeof h<"u"&&(_.reconnectable||o&&typeof _.reconnectable>"u"),R=!!(_.selectable||s&&typeof _.selectable>"u"),H=ie.useRef(null),[L,O]=ie.useState(!1),[J,T]=ie.useState(!1),Y=Fe(),{zIndex:U,sourceX:X,sourceY:B,targetX:V,targetY:G,sourcePosition:M,targetPosition:j}=Pe(ie.useCallback(he=>{const fe=he.nodeLookup.get(_.source),Se=he.nodeLookup.get(_.target);if(!fe||!Se)return{zIndex:_.zIndex,...$p};const Ne=kE({id:t,sourceNode:fe,targetNode:Se,sourceHandle:_.sourceHandle||null,targetHandle:_.targetHandle||null,connectionMode:he.connectionMode,onError:S});return{zIndex:gE({selected:_.selected,zIndex:_.zIndex,sourceNode:fe,targetNode:Se,elevateOnSelect:he.elevateEdgesOnSelect,zIndexMode:he.zIndexMode}),...Ne||$p}},[_.source,_.target,_.sourceHandle,_.targetHandle,_.selected,_.zIndex]),De),D=ie.useMemo(()=>_.markerStart?`url('#${Dc(_.markerStart,x)}')`:void 0,[_.markerStart,x]),W=ie.useMemo(()=>_.markerEnd?`url('#${Dc(_.markerEnd,x)}')`:void 0,[_.markerEnd,x]);if(_.hidden||X===null||B===null||V===null||G===null)return null;const Q=he=>{var be;const{addSelectedEdges:fe,unselectNodesAndEdges:Se,multiSelectionActive:Ne}=Y.getState();R&&(Y.setState({nodesSelectionActive:!1}),_.selected&&Ne?(Se({nodes:[],edges:[_]}),(be=H.current)==null||be.blur()):fe([t])),l&&l(he,_)},re=c?he=>{c(he,{..._})}:void 0,le=u?he=>{u(he,{..._})}:void 0,K=f?he=>{f(he,{..._})}:void 0,oe=p?he=>{p(he,{..._})}:void 0,de=g?he=>{g(he,{..._})}:void 0,we=he=>{var fe;if(!b&&xg.includes(he.key)&&R){const{unselectNodesAndEdges:Se,addSelectedEdges:Ne}=Y.getState();he.key==="Escape"?((fe=H.current)==null||fe.blur(),Se({edges:[_]})):Ne([t])}};return Z.jsx("svg",{style:{zIndex:U},children:Z.jsxs("g",{className:Ye(["react-flow__edge",`react-flow__edge-${z}`,_.className,E,{selected:_.selected,animated:_.animated,inactive:!R&&!l,updating:L,selectable:R}]),onClick:Q,onDoubleClick:re,onContextMenu:le,onMouseEnter:K,onMouseMove:oe,onMouseLeave:de,onKeyDown:F?we:void 0,tabIndex:F?0:void 0,role:_.ariaRole??(F?"group":"img"),"aria-roledescription":"edge","data-id":t,"data-testid":`rf__edge-${t}`,"aria-label":_.ariaLabel===null?void 0:_.ariaLabel||`Edge from ${_.source} to ${_.target}`,"aria-describedby":F?`${Zg}-${x}`:void 0,ref:H,..._.domAttributes,children:[!J&&Z.jsx(I,{id:t,source:_.source,target:_.target,type:_.type,selected:_.selected,animated:_.animated,selectable:R,deletable:_.deletable??!0,label:_.label,labelStyle:_.labelStyle,labelShowBg:_.labelShowBg,labelBgStyle:_.labelBgStyle,labelBgPadding:_.labelBgPadding,labelBgBorderRadius:_.labelBgBorderRadius,sourceX:X,sourceY:B,targetX:V,targetY:G,sourcePosition:M,targetPosition:j,data:_.data,style:_.style,sourceHandleId:_.sourceHandle,targetHandleId:_.targetHandle,markerStart:D,markerEnd:W,pathOptions:"pathOptions"in _?_.pathOptions:void 0,interactionWidth:_.interactionWidth}),P&&Z.jsx(A_,{edge:_,isReconnectable:P,reconnectRadius:m,onReconnect:h,onReconnectStart:v,onReconnectEnd:w,sourceX:X,sourceY:B,targetX:V,targetY:G,sourcePosition:M,targetPosition:j,setUpdateHover:O,setReconnecting:T})]})})}var D_=ie.memo(O_);const F_=t=>({edgesFocusable:t.edgesFocusable,edgesReconnectable:t.edgesReconnectable,elementsSelectable:t.elementsSelectable,connectionMode:t.connectionMode,onError:t.onError});function _0({defaultMarkerColor:t,onlyRenderVisibleElements:r,rfId:o,edgeTypes:s,noPanClassName:l,onReconnect:c,onEdgeContextMenu:u,onEdgeMouseEnter:f,onEdgeMouseMove:p,onEdgeMouseLeave:g,onEdgeClick:m,reconnectRadius:h,onEdgeDoubleClick:v,onReconnectStart:w,onReconnectEnd:x,disableKeyboardA11y:C}){const{edgesFocusable:E,edgesReconnectable:S,elementsSelectable:b,onError:_}=Pe(F_,De),N=__(r);return Z.jsxs("div",{className:"react-flow__edges",children:[Z.jsx(b_,{defaultColor:t,rfId:o}),N.map(z=>Z.jsx(D_,{id:z,edgesFocusable:E,edgesReconnectable:S,elementsSelectable:b,noPanClassName:l,onReconnect:c,onContextMenu:u,onMouseEnter:f,onMouseMove:p,onMouseLeave:g,onClick:m,reconnectRadius:h,onDoubleClick:v,onReconnectStart:w,onReconnectEnd:x,rfId:o,onError:_,edgeTypes:s,disableKeyboardA11y:C},z))]})}_0.displayName="EdgeRenderer";const j_=ie.memo(_0),$_=t=>`translate(${t.transform[0]}px,${t.transform[1]}px) scale(${t.transform[2]})`;function H_({children:t}){const r=Pe($_);return Z.jsx("div",{className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:r},children:t})}function V_(t){const r=Es(),o=ie.useRef(!1);ie.useEffect(()=>{!o.current&&r.viewportInitialized&&t&&(setTimeout(()=>t(r),1),o.current=!0)},[t,r.viewportInitialized])}const B_=t=>{var r;return(r=t.panZoom)==null?void 0:r.syncViewport};function W_(t){const r=Pe(B_),o=Fe();return ie.useEffect(()=>{t&&(r==null||r(t),o.setState({transform:[t.x,t.y,t.zoom]}))},[t,r]),null}function U_(t){return t.connection.inProgress?{...t.connection,to:ai(t.connection.to,t.transform)}:{...t.connection}}function q_(t){return U_}function Y_(t){const r=q_();return Pe(r,De)}const X_=t=>({nodesConnectable:t.nodesConnectable,isValid:t.connection.isValid,inProgress:t.connection.inProgress,width:t.width,height:t.height});function G_({containerStyle:t,style:r,type:o,component:s}){const{nodesConnectable:l,width:c,height:u,isValid:f,inProgress:p}=Pe(X_,De);return!(c&&l&&p)?null:Z.jsx("svg",{style:t,width:c,height:u,className:"react-flow__connectionline react-flow__container",children:Z.jsx("g",{className:Ye(["react-flow__connection",Sg(f)]),children:Z.jsx(S0,{style:r,type:o,CustomComponent:s,isValid:f})})})}const S0=({style:t,type:r=Wn.Bezier,CustomComponent:o,isValid:s})=>{const{inProgress:l,from:c,fromNode:u,fromHandle:f,fromPosition:p,to:g,toNode:m,toHandle:h,toPosition:v,pointer:w}=Y_();if(!l)return;if(o)return Z.jsx(o,{connectionLineType:r,connectionLineStyle:t,fromNode:u,fromHandle:f,fromX:c.x,fromY:c.y,toX:g.x,toY:g.y,fromPosition:p,toPosition:v,connectionStatus:Sg(s),toNode:m,toHandle:h,pointer:w});let x="";const C={sourceX:c.x,sourceY:c.y,sourcePosition:p,targetX:g.x,targetY:g.y,targetPosition:v};switch(r){case Wn.Bezier:[x]=Ag(C);break;case Wn.SimpleBezier:[x]=c0(C);break;case Wn.Step:[x]=Oc({...C,borderRadius:0});break;case Wn.SmoothStep:[x]=Oc(C);break;default:[x]=Dg(C)}return Z.jsx("path",{d:x,fill:"none",className:"react-flow__connection-path",style:t})};S0.displayName="ConnectionLine";const Q_={};function Bp(t=Q_){ie.useRef(t),Fe(),ie.useEffect(()=>{},[t])}function K_(){Fe(),ie.useRef(!1),ie.useEffect(()=>{},[])}function k0({nodeTypes:t,edgeTypes:r,onInit:o,onNodeClick:s,onEdgeClick:l,onNodeDoubleClick:c,onEdgeDoubleClick:u,onNodeMouseEnter:f,onNodeMouseMove:p,onNodeMouseLeave:g,onNodeContextMenu:m,onSelectionContextMenu:h,onSelectionStart:v,onSelectionEnd:w,connectionLineType:x,connectionLineStyle:C,connectionLineComponent:E,connectionLineContainerStyle:S,selectionKeyCode:b,selectionOnDrag:_,selectionMode:N,multiSelectionKeyCode:z,panActivationKeyCode:I,zoomActivationKeyCode:F,deleteKeyCode:P,onlyRenderVisibleElements:R,elementsSelectable:H,defaultViewport:L,translateExtent:O,minZoom:J,maxZoom:T,preventScrolling:Y,defaultMarkerColor:U,zoomOnScroll:X,zoomOnPinch:B,panOnScroll:V,panOnScrollSpeed:G,panOnScrollMode:M,zoomOnDoubleClick:j,panOnDrag:D,autoPanOnSelection:W,onPaneClick:Q,onPaneMouseEnter:re,onPaneMouseMove:le,onPaneMouseLeave:K,onPaneScroll:oe,onPaneContextMenu:de,paneClickDistance:we,nodeClickDistance:he,onEdgeContextMenu:fe,onEdgeMouseEnter:Se,onEdgeMouseMove:Ne,onEdgeMouseLeave:be,reconnectRadius:Re,onReconnect:st,onReconnectStart:ct,onReconnectEnd:tt,noDragClassName:nt,noWheelClassName:ln,noPanClassName:Gt,disableKeyboardA11y:Qt,nodeExtent:ft,rfId:Pt,viewport:wt,onViewportChange:Mt}){return Bp(t),Bp(r),K_(),V_(o),W_(wt),Z.jsx(d_,{onPaneClick:Q,onPaneMouseEnter:re,onPaneMouseMove:le,onPaneMouseLeave:K,onPaneContextMenu:de,onPaneScroll:oe,paneClickDistance:we,deleteKeyCode:P,selectionKeyCode:b,selectionOnDrag:_,selectionMode:N,onSelectionStart:v,onSelectionEnd:w,multiSelectionKeyCode:z,panActivationKeyCode:I,zoomActivationKeyCode:F,elementsSelectable:H,zoomOnScroll:X,zoomOnPinch:B,zoomOnDoubleClick:j,panOnScroll:V,panOnScrollSpeed:G,panOnScrollMode:M,panOnDrag:D,autoPanOnSelection:W,defaultViewport:L,translateExtent:O,minZoom:J,maxZoom:T,onSelectionContextMenu:h,preventScrolling:Y,noDragClassName:nt,noWheelClassName:ln,noPanClassName:Gt,disableKeyboardA11y:Qt,onViewportChange:Mt,isControlledViewport:!!wt,children:Z.jsxs(H_,{children:[Z.jsx(j_,{edgeTypes:r,onEdgeClick:l,onEdgeDoubleClick:u,onReconnect:st,onReconnectStart:ct,onReconnectEnd:tt,onlyRenderVisibleElements:R,onEdgeContextMenu:fe,onEdgeMouseEnter:Se,onEdgeMouseMove:Ne,onEdgeMouseLeave:be,reconnectRadius:Re,defaultMarkerColor:U,noPanClassName:Gt,disableKeyboardA11y:Qt,rfId:Pt}),Z.jsx(G_,{style:C,type:x,component:E,containerStyle:S}),Z.jsx("div",{className:"react-flow__edgelabel-renderer"}),Z.jsx(E_,{nodeTypes:t,onNodeClick:s,onNodeDoubleClick:c,onNodeMouseEnter:f,onNodeMouseMove:p,onNodeMouseLeave:g,onNodeContextMenu:m,nodeClickDistance:he,onlyRenderVisibleElements:R,noPanClassName:Gt,noDragClassName:nt,disableKeyboardA11y:Qt,nodeExtent:ft,rfId:Pt}),Z.jsx("div",{className:"react-flow__viewport-portal"})]})})}k0.displayName="GraphView";const Z_=ie.memo(k0),J_=Pg(),Wp=({nodes:t,edges:r,defaultNodes:o,defaultEdges:s,width:l,height:c,fitView:u,fitViewOptions:f,minZoom:p=.5,maxZoom:g=2,nodeOrigin:m,nodeExtent:h,zIndexMode:v="basic"}={})=>{const w=new Map,x=new Map,C=new Map,E=new Map,S=s??r??[],b=o??t??[],_=m??[0,0],N=h??uo;$g(C,E,S);const{nodesInitialized:z}=Fc(b,w,x,{nodeOrigin:_,nodeExtent:N,zIndexMode:v});let I=[0,0,1];if(u&&l&&c){const F=wo(w,{filter:L=>!!((L.width||L.initialWidth)&&(L.height||L.initialHeight))}),{x:P,y:R,zoom:H}=Zc(F,l,c,p,g,(f==null?void 0:f.padding)??.1);I=[P,R,H]}return{rfId:"1",width:l??0,height:c??0,transform:I,nodes:b,nodesInitialized:z,nodeLookup:w,parentLookup:x,edges:S,edgeLookup:E,connectionLookup:C,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:o!==void 0,hasDefaultEdges:s!==void 0,panZoom:null,minZoom:p,maxZoom:g,translateExtent:uo,nodeExtent:N,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:ni.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:_,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:u??!1,fitViewOptions:f,fitViewResolver:null,connection:{..._g},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:J_,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:Eg,zIndexMode:v,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},eS=({nodes:t,edges:r,defaultNodes:o,defaultEdges:s,width:l,height:c,fitView:u,fitViewOptions:f,minZoom:p,maxZoom:g,nodeOrigin:m,nodeExtent:h,zIndexMode:v})=>h2((w,x)=>{async function C(){const{nodeLookup:E,panZoom:S,fitViewOptions:b,fitViewResolver:_,width:N,height:z,minZoom:I,maxZoom:F}=x();S&&(await uE({nodes:E,width:N,height:z,panZoom:S,minZoom:I,maxZoom:F},b),_==null||_.resolve(!0),w({fitViewResolver:null}))}return{...Wp({nodes:t,edges:r,width:l,height:c,fitView:u,fitViewOptions:f,minZoom:p,maxZoom:g,nodeOrigin:m,nodeExtent:h,defaultNodes:o,defaultEdges:s,zIndexMode:v}),setNodes:E=>{const{nodeLookup:S,parentLookup:b,nodeOrigin:_,elevateNodesOnSelect:N,fitViewQueued:z,zIndexMode:I,nodesSelectionActive:F}=x(),{nodesInitialized:P,hasSelectedNodes:R}=Fc(E,S,b,{nodeOrigin:_,nodeExtent:h,elevateNodesOnSelect:N,checkEquality:!0,zIndexMode:I}),H=F&&R;z&&P?(C(),w({nodes:E,nodesInitialized:P,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:H})):w({nodes:E,nodesInitialized:P,nodesSelectionActive:H})},setEdges:E=>{const{connectionLookup:S,edgeLookup:b}=x();$g(S,b,E),w({edges:E})},setDefaultNodesAndEdges:(E,S)=>{if(E){const{setNodes:b}=x();b(E),w({hasDefaultNodes:!0})}if(S){const{setEdges:b}=x();b(S),w({hasDefaultEdges:!0})}},updateNodeInternals:E=>{const{triggerNodeChanges:S,nodeLookup:b,parentLookup:_,domNode:N,nodeOrigin:z,nodeExtent:I,debug:F,fitViewQueued:P,zIndexMode:R}=x(),{changes:H,updatedInternals:L}=LE(E,b,_,N,z,I,R);L&&(PE(b,_,{nodeOrigin:z,nodeExtent:I,zIndexMode:R}),P?(C(),w({fitViewQueued:!1,fitViewOptions:void 0})):w({}),(H==null?void 0:H.length)>0&&(F&&console.log("React Flow: trigger node changes",H),S==null||S(H)))},updateNodePositions:(E,S=!1)=>{const b=[];let _=[];const{nodeLookup:N,triggerNodeChanges:z,connection:I,updateConnection:F,onNodesChangeMiddlewareMap:P}=x();for(const[R,H]of E){const L=N.get(R),O=!!(L!=null&&L.expandParent&&(L!=null&&L.parentId)&&(H!=null&&H.position)),J={id:R,type:"position",position:O?{x:Math.max(0,H.position.x),y:Math.max(0,H.position.y)}:H.position,dragging:S};if(L&&I.inProgress&&I.fromNode.id===L.id){const T=wr(L,I.fromHandle,xe.Left,!0);F({...I,from:T})}O&&L.parentId&&b.push({id:R,parentId:L.parentId,rect:{...H.internals.positionAbsolute,width:H.measured.width??0,height:H.measured.height??0}}),_.push(J)}if(b.length>0){const{parentLookup:R,nodeOrigin:H}=x(),L=of(b,N,R,H);_.push(...L)}for(const R of P.values())_=R(_);z(_)},triggerNodeChanges:E=>{const{onNodesChange:S,setNodes:b,nodes:_,hasDefaultNodes:N,debug:z}=x();if(E!=null&&E.length){if(N){const I=z2(E,_);b(I)}z&&console.log("React Flow: trigger node changes",E),S==null||S(E)}},triggerEdgeChanges:E=>{const{onEdgesChange:S,setEdges:b,edges:_,hasDefaultEdges:N,debug:z}=x();if(E!=null&&E.length){if(N){const I=A2(E,_);b(I)}z&&console.log("React Flow: trigger edge changes",E),S==null||S(E)}},addSelectedNodes:E=>{const{multiSelectionActive:S,edgeLookup:b,nodeLookup:_,triggerNodeChanges:N,triggerEdgeChanges:z}=x();if(S){const I=E.map(F=>fr(F,!0));N(I);return}N(Kr(_,new Set([...E]),!0)),z(Kr(b))},addSelectedEdges:E=>{const{multiSelectionActive:S,edgeLookup:b,nodeLookup:_,triggerNodeChanges:N,triggerEdgeChanges:z}=x();if(S){const I=E.map(F=>fr(F,!0));z(I);return}z(Kr(b,new Set([...E]))),N(Kr(_,new Set,!0))},unselectNodesAndEdges:({nodes:E,edges:S}={})=>{const{edges:b,nodes:_,nodeLookup:N,triggerNodeChanges:z,triggerEdgeChanges:I}=x(),F=E||_,P=S||b,R=[];for(const L of F){if(!L.selected)continue;const O=N.get(L.id);O&&(O.selected=!1),R.push(fr(L.id,!1))}const H=[];for(const L of P)L.selected&&H.push(fr(L.id,!1));z(R),I(H)},setMinZoom:E=>{const{panZoom:S,maxZoom:b}=x();S==null||S.setScaleExtent([E,b]),w({minZoom:E})},setMaxZoom:E=>{const{panZoom:S,minZoom:b}=x();S==null||S.setScaleExtent([b,E]),w({maxZoom:E})},setTranslateExtent:E=>{var S;(S=x().panZoom)==null||S.setTranslateExtent(E),w({translateExtent:E})},resetSelectedElements:()=>{const{edges:E,nodes:S,triggerNodeChanges:b,triggerEdgeChanges:_,elementsSelectable:N}=x();if(!N)return;const z=S.reduce((F,P)=>P.selected?[...F,fr(P.id,!1)]:F,[]),I=E.reduce((F,P)=>P.selected?[...F,fr(P.id,!1)]:F,[]);b(z),_(I)},setNodeExtent:E=>{const{nodes:S,nodeLookup:b,parentLookup:_,nodeOrigin:N,elevateNodesOnSelect:z,nodeExtent:I,zIndexMode:F}=x();E[0][0]===I[0][0]&&E[0][1]===I[0][1]&&E[1][0]===I[1][0]&&E[1][1]===I[1][1]||(Fc(S,b,_,{nodeOrigin:N,nodeExtent:E,elevateNodesOnSelect:z,checkEquality:!1,zIndexMode:F}),w({nodeExtent:E}))},panBy:E=>{const{transform:S,width:b,height:_,panZoom:N,translateExtent:z}=x();return RE({delta:E,panZoom:N,transform:S,translateExtent:z,width:b,height:_})},setCenter:async(E,S,b)=>{const{width:_,height:N,maxZoom:z,panZoom:I}=x();if(!I)return!1;const F=typeof(b==null?void 0:b.zoom)<"u"?b.zoom:z;return await I.setViewport({x:_/2-E*F,y:N/2-S*F,zoom:F},{duration:b==null?void 0:b.duration,ease:b==null?void 0:b.ease,interpolate:b==null?void 0:b.interpolate}),!0},cancelConnection:()=>{w({connection:{..._g}})},updateConnection:E=>{w({connection:E})},reset:()=>w({...Wp()})}},Object.is);function C0({initialNodes:t,initialEdges:r,defaultNodes:o,defaultEdges:s,initialWidth:l,initialHeight:c,initialMinZoom:u,initialMaxZoom:f,initialFitViewOptions:p,fitView:g,nodeOrigin:m,nodeExtent:h,zIndexMode:v,children:w}){const[x]=ie.useState(()=>eS({nodes:t,edges:r,defaultNodes:o,defaultEdges:s,width:l,height:c,fitView:g,minZoom:u,maxZoom:f,fitViewOptions:p,nodeOrigin:m,nodeExtent:h,zIndexMode:v}));return Z.jsx(p2,{value:x,children:Z.jsx(H2,{children:w})})}function tS({children:t,nodes:r,edges:o,defaultNodes:s,defaultEdges:l,width:c,height:u,fitView:f,fitViewOptions:p,minZoom:g,maxZoom:m,nodeOrigin:h,nodeExtent:v,zIndexMode:w}){return ie.useContext(ws)?Z.jsx(Z.Fragment,{children:t}):Z.jsx(C0,{initialNodes:r,initialEdges:o,defaultNodes:s,defaultEdges:l,initialWidth:c,initialHeight:u,fitView:f,initialFitViewOptions:p,initialMinZoom:g,initialMaxZoom:m,nodeOrigin:h,nodeExtent:v,zIndexMode:w,children:t})}const nS={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function rS({nodes:t,edges:r,defaultNodes:o,defaultEdges:s,className:l,nodeTypes:c,edgeTypes:u,onNodeClick:f,onEdgeClick:p,onInit:g,onMove:m,onMoveStart:h,onMoveEnd:v,onConnect:w,onConnectStart:x,onConnectEnd:C,onClickConnectStart:E,onClickConnectEnd:S,onNodeMouseEnter:b,onNodeMouseMove:_,onNodeMouseLeave:N,onNodeContextMenu:z,onNodeDoubleClick:I,onNodeDragStart:F,onNodeDrag:P,onNodeDragStop:R,onNodesDelete:H,onEdgesDelete:L,onDelete:O,onSelectionChange:J,onSelectionDragStart:T,onSelectionDrag:Y,onSelectionDragStop:U,onSelectionContextMenu:X,onSelectionStart:B,onSelectionEnd:V,onBeforeDelete:G,connectionMode:M,connectionLineType:j=Wn.Bezier,connectionLineStyle:D,connectionLineComponent:W,connectionLineContainerStyle:Q,deleteKeyCode:re="Backspace",selectionKeyCode:le="Shift",selectionOnDrag:K=!1,selectionMode:oe=co.Full,panActivationKeyCode:de="Space",multiSelectionKeyCode:we=ho()?"Meta":"Control",zoomActivationKeyCode:he=ho()?"Meta":"Control",snapToGrid:fe,snapGrid:Se,onlyRenderVisibleElements:Ne=!1,selectNodesOnDrag:be,nodesDraggable:Re,autoPanOnNodeFocus:st,nodesConnectable:ct,nodesFocusable:tt,nodeOrigin:nt=Jg,edgesFocusable:ln,edgesReconnectable:Gt,elementsSelectable:Qt=!0,defaultViewport:ft=b2,minZoom:Pt=.5,maxZoom:wt=2,translateExtent:Mt=uo,preventScrolling:Eo=!0,nodeExtent:sn,defaultMarkerColor:qn="#b1b1b7",zoomOnScroll:ks=!0,zoomOnPinch:_o=!0,panOnScroll:So=!1,panOnScrollSpeed:Cs=.5,panOnScrollMode:ui=pr.Free,zoomOnDoubleClick:ci=!0,panOnDrag:fi=!0,onPaneClick:di,onPaneMouseEnter:hi,onPaneMouseMove:En,onPaneMouseLeave:_n,onPaneScroll:ko,onPaneContextMenu:Co,paneClickDistance:No=1,nodeClickDistance:bo=0,children:Po,onReconnect:pi,onReconnectStart:Mo,onReconnectEnd:Yn,onEdgeContextMenu:mi,onEdgeDoubleClick:Xn,onEdgeMouseEnter:Ns,onEdgeMouseMove:Gn,onEdgeMouseLeave:xr,reconnectRadius:Er=10,onNodesChange:gi,onEdgesChange:bs,noDragClassName:Ps="nodrag",noWheelClassName:Ms="nowheel",noPanClassName:Kt="nopan",fitView:yi,fitViewOptions:vi,connectOnClick:Ts,attributionPosition:To,proOptions:Io,defaultEdgeOptions:Lo,elevateNodesOnSelect:Ro=!0,elevateEdgesOnSelect:Is=!1,disableKeyboardA11y:zo=!1,autoPanOnConnect:je,autoPanOnNodeDrag:Ls,autoPanOnSelection:wi=!0,autoPanSpeed:Ao,connectionRadius:_r,isValidConnection:Rs,onError:Oo,style:Sr,id:xt,nodeDragThreshold:zs,connectionDragThreshold:Et,viewport:As,onViewportChange:Os,width:Ds,height:kr,colorMode:Cr="light",debug:Qn,onScroll:an,ariaLabelConfig:Fs,zIndexMode:Do="basic",...xi},Fo){const Kn=xt||"1",Zn=I2(Cr),js=ie.useCallback(Nr=>{Nr.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),an==null||an(Nr)},[an]);return Z.jsx("div",{"data-testid":"rf__wrapper",...xi,onScroll:js,style:{...Sr,...nS},ref:Fo,className:Ye(["react-flow",l,Zn]),id:xt,role:"application",children:Z.jsxs(tS,{nodes:t,edges:r,width:Ds,height:kr,fitView:yi,fitViewOptions:vi,minZoom:Pt,maxZoom:wt,nodeOrigin:nt,nodeExtent:sn,zIndexMode:Do,children:[Z.jsx(T2,{nodes:t,edges:r,defaultNodes:o,defaultEdges:s,onConnect:w,onConnectStart:x,onConnectEnd:C,onClickConnectStart:E,onClickConnectEnd:S,nodesDraggable:Re,autoPanOnNodeFocus:st,nodesConnectable:ct,nodesFocusable:tt,edgesFocusable:ln,edgesReconnectable:Gt,elementsSelectable:Qt,elevateNodesOnSelect:Ro,elevateEdgesOnSelect:Is,minZoom:Pt,maxZoom:wt,nodeExtent:sn,onNodesChange:gi,onEdgesChange:bs,snapToGrid:fe,snapGrid:Se,connectionMode:M,translateExtent:Mt,connectOnClick:Ts,defaultEdgeOptions:Lo,fitView:yi,fitViewOptions:vi,onNodesDelete:H,onEdgesDelete:L,onDelete:O,onNodeDragStart:F,onNodeDrag:P,onNodeDragStop:R,onSelectionDrag:Y,onSelectionDragStart:T,onSelectionDragStop:U,onMove:m,onMoveStart:h,onMoveEnd:v,noPanClassName:Kt,nodeOrigin:nt,rfId:Kn,autoPanOnConnect:je,autoPanOnNodeDrag:Ls,autoPanSpeed:Ao,onError:Oo,connectionRadius:_r,isValidConnection:Rs,selectNodesOnDrag:be,nodeDragThreshold:zs,connectionDragThreshold:Et,onBeforeDelete:G,debug:Qn,ariaLabelConfig:Fs,zIndexMode:Do}),Z.jsx(Z_,{onInit:g,onNodeClick:f,onEdgeClick:p,onNodeMouseEnter:b,onNodeMouseMove:_,onNodeMouseLeave:N,onNodeContextMenu:z,onNodeDoubleClick:I,nodeTypes:c,edgeTypes:u,connectionLineType:j,connectionLineStyle:D,connectionLineComponent:W,connectionLineContainerStyle:Q,selectionKeyCode:le,selectionOnDrag:K,selectionMode:oe,deleteKeyCode:re,multiSelectionKeyCode:we,panActivationKeyCode:de,zoomActivationKeyCode:he,onlyRenderVisibleElements:Ne,defaultViewport:ft,translateExtent:Mt,minZoom:Pt,maxZoom:wt,preventScrolling:Eo,zoomOnScroll:ks,zoomOnPinch:_o,zoomOnDoubleClick:ci,panOnScroll:So,panOnScrollSpeed:Cs,panOnScrollMode:ui,panOnDrag:fi,autoPanOnSelection:wi,onPaneClick:di,onPaneMouseEnter:hi,onPaneMouseMove:En,onPaneMouseLeave:_n,onPaneScroll:ko,onPaneContextMenu:Co,paneClickDistance:No,nodeClickDistance:bo,onSelectionContextMenu:X,onSelectionStart:B,onSelectionEnd:V,onReconnect:pi,onReconnectStart:Mo,onReconnectEnd:Yn,onEdgeContextMenu:mi,onEdgeDoubleClick:Xn,onEdgeMouseEnter:Ns,onEdgeMouseMove:Gn,onEdgeMouseLeave:xr,reconnectRadius:Er,defaultMarkerColor:qn,noDragClassName:Ps,noWheelClassName:Ms,noPanClassName:Kt,rfId:Kn,disableKeyboardA11y:zo,nodeExtent:sn,viewport:As,onViewportChange:Os}),Z.jsx(N2,{onSelectionChange:J}),Po,Z.jsx(E2,{proOptions:Io,position:To}),Z.jsx(x2,{rfId:Kn,disableKeyboardA11y:zo})]})})}var iS=t0(rS);function oS({dimensions:t,lineWidth:r,variant:o,className:s}){return Z.jsx("path",{strokeWidth:r,d:`M${t[0]/2} 0 V${t[1]} M0 ${t[1]/2} H${t[0]}`,className:Ye(["react-flow__background-pattern",o,s])})}function lS({radius:t,className:r}){return Z.jsx("circle",{cx:t,cy:t,r:t,className:Ye(["react-flow__background-pattern","dots",r])})}var Un;(function(t){t.Lines="lines",t.Dots="dots",t.Cross="cross"})(Un||(Un={}));const sS={[Un.Dots]:1,[Un.Lines]:1,[Un.Cross]:6},aS=t=>({transform:t.transform,patternId:`pattern-${t.rfId}`});function N0({id:t,variant:r=Un.Dots,gap:o=20,size:s,lineWidth:l=1,offset:c=0,color:u,bgColor:f,style:p,className:g,patternClassName:m}){const h=ie.useRef(null),{transform:v,patternId:w}=Pe(aS,De),x=s||sS[r],C=r===Un.Dots,E=r===Un.Cross,S=Array.isArray(o)?o:[o,o],b=[S[0]*v[2]||1,S[1]*v[2]||1],_=x*v[2],N=Array.isArray(c)?c:[c,c],z=E?[_,_]:b,I=[N[0]*v[2]||1+z[0]/2,N[1]*v[2]||1+z[1]/2],F=`${w}${t||""}`;return Z.jsxs("svg",{className:Ye(["react-flow__background",g]),style:{...p,..._s,"--xy-background-color-props":f,"--xy-background-pattern-color-props":u},ref:h,"data-testid":"rf__background",children:[Z.jsx("pattern",{id:F,x:v[0]%b[0],y:v[1]%b[1],width:b[0],height:b[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${I[0]},-${I[1]})`,children:C?Z.jsx(lS,{radius:_/2,className:m}):Z.jsx(oS,{dimensions:z,lineWidth:l,variant:r,className:m})}),Z.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${F})`})]})}N0.displayName="Background";const uS=ie.memo(N0);function cS(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:Z.jsx("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function fS(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:Z.jsx("path",{d:"M0 0h32v4.2H0z"})})}function dS(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:Z.jsx("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function hS(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:Z.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function pS(){return Z.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:Z.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function Xl({children:t,className:r,...o}){return Z.jsx("button",{type:"button",className:Ye(["react-flow__controls-button",r]),...o,children:t})}const mS=t=>({isInteractive:t.nodesDraggable||t.nodesConnectable||t.elementsSelectable,minZoomReached:t.transform[2]<=t.minZoom,maxZoomReached:t.transform[2]>=t.maxZoom,ariaLabelConfig:t.ariaLabelConfig});function b0({style:t,showZoom:r=!0,showFitView:o=!0,showInteractive:s=!0,fitViewOptions:l,onZoomIn:c,onZoomOut:u,onFitView:f,onInteractiveChange:p,className:g,children:m,position:h="bottom-left",orientation:v="vertical","aria-label":w}){const x=Fe(),{isInteractive:C,minZoomReached:E,maxZoomReached:S,ariaLabelConfig:b}=Pe(mS,De),{zoomIn:_,zoomOut:N,fitView:z}=Es(),I=()=>{_(),c==null||c()},F=()=>{N(),u==null||u()},P=()=>{z(l),f==null||f()},R=()=>{x.setState({nodesDraggable:!C,nodesConnectable:!C,elementsSelectable:!C}),p==null||p(!C)},H=v==="horizontal"?"horizontal":"vertical";return Z.jsxs(xs,{className:Ye(["react-flow__controls",H,g]),position:h,style:t,"data-testid":"rf__controls","aria-label":w??b["controls.ariaLabel"],children:[r&&Z.jsxs(Z.Fragment,{children:[Z.jsx(Xl,{onClick:I,className:"react-flow__controls-zoomin",title:b["controls.zoomIn.ariaLabel"],"aria-label":b["controls.zoomIn.ariaLabel"],disabled:S,children:Z.jsx(cS,{})}),Z.jsx(Xl,{onClick:F,className:"react-flow__controls-zoomout",title:b["controls.zoomOut.ariaLabel"],"aria-label":b["controls.zoomOut.ariaLabel"],disabled:E,children:Z.jsx(fS,{})})]}),o&&Z.jsx(Xl,{className:"react-flow__controls-fitview",onClick:P,title:b["controls.fitView.ariaLabel"],"aria-label":b["controls.fitView.ariaLabel"],children:Z.jsx(dS,{})}),s&&Z.jsx(Xl,{className:"react-flow__controls-interactive",onClick:R,title:b["controls.interactive.ariaLabel"],"aria-label":b["controls.interactive.ariaLabel"],children:C?Z.jsx(pS,{}):Z.jsx(hS,{})}),m]})}b0.displayName="Controls";const gS=ie.memo(b0);function yS({id:t,x:r,y:o,width:s,height:l,style:c,color:u,strokeColor:f,strokeWidth:p,className:g,borderRadius:m,shapeRendering:h,selected:v,onClick:w}){const{background:x,backgroundColor:C}=c||{},E=u||x||C;return Z.jsx("rect",{className:Ye(["react-flow__minimap-node",{selected:v},g]),x:r,y:o,rx:m,ry:m,width:s,height:l,style:{fill:E,stroke:f,strokeWidth:p},shapeRendering:h,onClick:w?S=>w(S,t):void 0})}const vS=ie.memo(yS),wS=t=>t.nodes.map(r=>r.id),Ru=t=>t instanceof Function?t:()=>t;function xS({nodeStrokeColor:t,nodeColor:r,nodeClassName:o="",nodeBorderRadius:s=5,nodeStrokeWidth:l,nodeComponent:c=vS,onClick:u}){const f=Pe(wS,De),p=Ru(r),g=Ru(t),m=Ru(o),h=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return Z.jsx(Z.Fragment,{children:f.map(v=>Z.jsx(_S,{id:v,nodeColorFunc:p,nodeStrokeColorFunc:g,nodeClassNameFunc:m,nodeBorderRadius:s,nodeStrokeWidth:l,NodeComponent:c,onClick:u,shapeRendering:h},v))})}function ES({id:t,nodeColorFunc:r,nodeStrokeColorFunc:o,nodeClassNameFunc:s,nodeBorderRadius:l,nodeStrokeWidth:c,shapeRendering:u,NodeComponent:f,onClick:p}){const{node:g,x:m,y:h,width:v,height:w}=Pe(x=>{const C=x.nodeLookup.get(t);if(!C)return{node:void 0,x:0,y:0,width:0,height:0};const E=C.internals.userNode,{x:S,y:b}=C.internals.positionAbsolute,{width:_,height:N}=xn(E);return{node:E,x:S,y:b,width:_,height:N}},De);return!g||g.hidden||!Mg(g)?null:Z.jsx(f,{x:m,y:h,width:v,height:w,style:g.style,selected:!!g.selected,className:s(g),color:r(g),borderRadius:l,strokeColor:o(g),strokeWidth:c,shapeRendering:u,onClick:p,id:g.id})}const _S=ie.memo(ES);var SS=ie.memo(xS);const kS=200,CS=150,NS=t=>!t.hidden,bS=t=>{const r={x:-t.transform[0]/t.transform[2],y:-t.transform[1]/t.transform[2],width:t.width/t.transform[2],height:t.height/t.transform[2]};return{viewBB:r,boundingRect:t.nodeLookup.size>0?bg(wo(t.nodeLookup,{filter:NS}),r):r,rfId:t.rfId,panZoom:t.panZoom,translateExtent:t.translateExtent,flowWidth:t.width,flowHeight:t.height,ariaLabelConfig:t.ariaLabelConfig}},PS="react-flow__minimap-desc";function P0({style:t,className:r,nodeStrokeColor:o,nodeColor:s,nodeClassName:l="",nodeBorderRadius:c=5,nodeStrokeWidth:u,nodeComponent:f,bgColor:p,maskColor:g,maskStrokeColor:m,maskStrokeWidth:h,position:v="bottom-right",onClick:w,onNodeClick:x,pannable:C=!1,zoomable:E=!1,ariaLabel:S,inversePan:b,zoomStep:_=1,offsetScale:N=5}){const z=Fe(),I=ie.useRef(null),{boundingRect:F,viewBB:P,rfId:R,panZoom:H,translateExtent:L,flowWidth:O,flowHeight:J,ariaLabelConfig:T}=Pe(bS,De),Y=(t==null?void 0:t.width)??kS,U=(t==null?void 0:t.height)??CS,X=F.width/Y,B=F.height/U,V=Math.max(X,B),G=V*Y,M=V*U,j=N*V,D=F.x-(G-F.width)/2-j,W=F.y-(M-F.height)/2-j,Q=G+j*2,re=M+j*2,le=`${PS}-${R}`,K=ie.useRef(0),oe=ie.useRef();K.current=V,ie.useEffect(()=>{if(I.current&&H)return oe.current=VE({domNode:I.current,panZoom:H,getTransform:()=>z.getState().transform,getViewScale:()=>K.current}),()=>{var fe;(fe=oe.current)==null||fe.destroy()}},[H]),ie.useEffect(()=>{var fe;(fe=oe.current)==null||fe.update({translateExtent:L,width:O,height:J,inversePan:b,pannable:C,zoomStep:_,zoomable:E})},[C,E,b,_,L,O,J]);const de=w?fe=>{var be;const[Se,Ne]=((be=oe.current)==null?void 0:be.pointer(fe))||[0,0];w(fe,{x:Se,y:Ne})}:void 0,we=x?ie.useCallback((fe,Se)=>{const Ne=z.getState().nodeLookup.get(Se).internals.userNode;x(fe,Ne)},[]):void 0,he=S??T["minimap.ariaLabel"];return Z.jsx(xs,{position:v,style:{...t,"--xy-minimap-background-color-props":typeof p=="string"?p:void 0,"--xy-minimap-mask-background-color-props":typeof g=="string"?g:void 0,"--xy-minimap-mask-stroke-color-props":typeof m=="string"?m:void 0,"--xy-minimap-mask-stroke-width-props":typeof h=="number"?h*V:void 0,"--xy-minimap-node-background-color-props":typeof s=="string"?s:void 0,"--xy-minimap-node-stroke-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-width-props":typeof u=="number"?u:void 0},className:Ye(["react-flow__minimap",r]),"data-testid":"rf__minimap",children:Z.jsxs("svg",{width:Y,height:U,viewBox:`${D} ${W} ${Q} ${re}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":le,ref:I,onClick:de,children:[he&&Z.jsx("title",{id:le,children:he}),Z.jsx(SS,{onClick:we,nodeColor:s,nodeStrokeColor:o,nodeBorderRadius:c,nodeClassName:l,nodeStrokeWidth:u,nodeComponent:f}),Z.jsx("path",{className:"react-flow__minimap-mask",d:`M${D-j},${W-j}h${Q+j*2}v${re+j*2}h${-Q-j*2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}P0.displayName="MiniMap";const MS=ie.memo(P0),TS=t=>r=>t?`${Math.max(1/r.transform[2],1)}`:void 0,IS={[li.Line]:"right",[li.Handle]:"bottom-right"};function LS({nodeId:t,position:r,variant:o=li.Handle,className:s,style:l=void 0,children:c,color:u,minWidth:f=10,minHeight:p=10,maxWidth:g=Number.MAX_VALUE,maxHeight:m=Number.MAX_VALUE,keepAspectRatio:h=!1,resizeDirection:v,autoScale:w=!0,shouldResize:x,onResizeStart:C,onResize:E,onResizeEnd:S}){const b=o0(),_=typeof t=="string"?t:b,N=Fe(),z=ie.useRef(null),I=o===li.Handle,F=Pe(ie.useCallback(TS(I&&w),[I,w]),De),P=ie.useRef(null),R=r??IS[o];ie.useEffect(()=>{if(!(!z.current||!_))return P.current||(P.current=t2({domNode:z.current,nodeId:_,getStoreItems:()=>{const{nodeLookup:L,transform:O,snapGrid:J,snapToGrid:T,nodeOrigin:Y,domNode:U}=N.getState();return{nodeLookup:L,transform:O,snapGrid:J,snapToGrid:T,nodeOrigin:Y,paneDomNode:U}},onChange:(L,O)=>{const{triggerNodeChanges:J,nodeLookup:T,parentLookup:Y,nodeOrigin:U}=N.getState(),X=[],B={x:L.x,y:L.y},V=T.get(_);if(V&&V.expandParent&&V.parentId){const G=V.origin??U,M=L.width??V.measured.width??0,j=L.height??V.measured.height??0,D={id:V.id,parentId:V.parentId,rect:{width:M,height:j,...Tg({x:L.x??V.position.x,y:L.y??V.position.y},{width:M,height:j},V.parentId,T,G)}},W=of([D],T,Y,U);X.push(...W),B.x=L.x?Math.max(G[0]*M,L.x):void 0,B.y=L.y?Math.max(G[1]*j,L.y):void 0}if(B.x!==void 0&&B.y!==void 0){const G={id:_,type:"position",position:{...B}};X.push(G)}if(L.width!==void 0&&L.height!==void 0){const M={id:_,type:"dimensions",resizing:!0,setAttributes:v?v==="horizontal"?"width":"height":!0,dimensions:{width:L.width,height:L.height}};X.push(M)}for(const G of O){const M={...G,type:"position"};X.push(M)}J(X)},onEnd:({width:L,height:O})=>{const J={id:_,type:"dimensions",resizing:!1,dimensions:{width:L,height:O}};N.getState().triggerNodeChanges([J])}})),P.current.update({controlPosition:R,boundaries:{minWidth:f,minHeight:p,maxWidth:g,maxHeight:m},keepAspectRatio:h,resizeDirection:v,onResizeStart:C,onResize:E,onResizeEnd:S,shouldResize:x}),()=>{var L;(L=P.current)==null||L.destroy()}},[R,f,p,g,m,h,C,E,S,x]);const H=R.split("-");return Z.jsx("div",{className:Ye(["react-flow__resize-control","nodrag",...H,o,s]),ref:z,style:{...l,scale:F,...u&&{[I?"backgroundColor":"borderColor"]:u}},children:c})}ie.memo(LS);const Up=[{bg:"#1e3a5f",text:"#ffffff",border:"#1e3a5f",fontSize:14,fontWeight:700},{bg:"#2563eb",text:"#ffffff",border:"#2563eb",fontSize:12,fontWeight:700},{bg:"#60a5fa",text:"#ffffff",border:"#60a5fa",fontSize:11,fontWeight:600},{bg:"#dbeafe",text:"#1e3a5f",border:"#93c5fd",fontSize:11,fontWeight:400},{bg:"#f0f9ff",text:"#1e3a5f",border:"#bae6fd",fontSize:10,fontWeight:400}];function RS({data:t}){const r=Up[Math.min(t.depth,Up.length-1)];return Z.jsxs("div",{style:{background:r.bg,color:r.text,border:`2px solid ${r.border}`,borderRadius:8,padding:"6px 10px",width:200,fontSize:r.fontSize,fontWeight:r.fontWeight,fontFamily:"Noto Sans KR, sans-serif",cursor:t.hasChildren||t.explanation?"pointer":"default",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:6,lineHeight:1.4,boxShadow:t.depth<=1?"0 2px 6px rgba(0,0,0,0.15)":"none"},children:[Z.jsx(si,{type:"target",position:xe.Left,style:{opacity:0,pointerEvents:"none"}}),Z.jsx("span",{children:t.label}),t.hasChildren&&Z.jsx("span",{style:{fontSize:9,opacity:.7,flexShrink:0},children:t.isCollapsed?"▶":"▼"}),!t.hasChildren&&t.explanation&&Z.jsx("span",{style:{fontSize:10,opacity:.7,flexShrink:0},children:"📖"}),Z.jsx(si,{type:"source",position:xe.Right,style:{opacity:0,pointerEvents:"none"}})]})}const qp={id:"root",label:"건축시공",children:[{id:"1",label:"1. 가설공사",children:[{id:"1-1",label:"규준틀",explanation:`건축물의 위치·높이·수평을 설정하기 위해 공사 초기에 세우는 기준 틀.

▶ 역할
• 건물 외벽선·기초 위치를 지면에 표시
• 터파기 깊이의 기준점 제공
• 공사 중 측량 기준으로 반복 활용

▶ 설치 방법
• 건물 모서리에서 1~2m 떨어진 곳에 설치
• 수평기로 수평 여부 반드시 확인
• 공사 완료 시까지 이동·훼손 금지

▶ 시험 포인트
기초 공사 전 가장 먼저 하는 작업.`},{id:"1-2",label:"비계",children:[{id:"1-2-1",label:"강관비계",explanation:`강관(φ48.6mm 강관 파이프)을 클램프(연결철물)로 조립하는 가장 일반적인 비계.

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
벽이음 5×5m, 작업발판 40cm 이상, 기둥 간격 1.8m — 세 가지 수치가 핵심 출제 포인트`},{id:"1-2-2",label:"달비계",explanation:`건물 상부 구조체에서 로프로 달아 내리는 비계.

▶ 특징
• 지면에서 비계를 세울 수 없는 곳에 사용
• 고층 건물 외벽 마감·유리 청소·보수 작업에 주로 사용
• 작업대를 위아래로 이동 가능

▶ 안전 기준
• 와이어로프 안전계수: 10 이상
• 작업발판 폭: 40cm 이상
• 작업자 안전대(안전벨트) 착용 의무

▶ 시험 포인트
4가지 비계 중 고층 외벽 전용 비계.`},{id:"1-2-3",label:"말비계",explanation:`A자형(역 V형) 지지대로 구성된 소형 이동식 비계.

▶ 특징
• 목재 또는 금속제 A형 프레임 구조
• 설치·해체·이동이 간편
• 소규모 실내 마감 작업(도장·미장·전기 배선 등)에 사용
• 높이가 낮아 고층 외부 작업에는 사용 불가

▶ 시험 포인트
4가지 비계 중 가장 소규모·실내 작업용.`},{id:"1-2-4",label:"통나무비계",explanation:`통나무(대나무 포함)를 새끼줄·철선으로 묶어 조립하는 전통 비계.

▶ 특징
• 강관비계 보급 이전에 사용된 방식
• 현재는 도서·산간 지역 등 특수 환경에서만 제한적 사용
• 구조적 안전성이 강관비계보다 낮음
• 습기에 의한 부식·변형 우려

▶ 시험 포인트
4가지 비계 중 전통 방식. 현재는 거의 사용 안 함.`}]},{id:"1-3",label:"가설시설 (울타리·창고·사무소)",explanation:`공사 기간 중 임시로 설치하는 각종 시설물.

▶ 종류
• 가설 울타리 — 공사 구역 경계, 외부인 출입 통제
• 가설 창고 — 자재 보관, 도난·우천 방지
• 가설 사무소 — 현장 감독·사무 공간
• 가설 화장실 — 작업자 편의 시설

▶ 설치 기준
• 가설 울타리 높이: 1.8m 이상
• 공사 시작 전 설치, 준공 후 철거

▶ 시험 포인트
가설공사 = 공사 전 설치, 완료 후 철거하는 임시 구조물 전반.`},{id:"1-exam",label:"[시험 포인트]",children:[{id:"1-e1",label:"비계: 강관·달·말·통나무"},{id:"1-e2",label:"규준틀의 역할과 설치"},{id:"1-e3",label:"흙의 성질: 함수비·간극비·포화도"},{id:"1-e4",label:"지반조사: 보링·SPT·베인시험"}]}]},{id:"2",label:"2. 토공사",children:[{id:"2-1",label:"터파기",children:[{id:"2-1-1",label:"줄파기",explanation:`벽이나 기초 띠를 따라 길고 좁게 굴착하는 방식.

▶ 적용
• 줄기초(연속기초) 설치 시 사용
• 조적조, 소규모 건물의 기초 파기

▶ 특징
• 굴착 폭이 좁아 굴착량이 적음
• 기계보다 수작업 병행이 많음

▶ 시험 포인트
터파기 3종류: 줄파기(줄기초), 온통파기(매트기초), 독립파기(독립기초) — 기초 종류와 세트로 암기.`},{id:"2-1-2",label:"온통파기",explanation:`건물 지하 전체 바닥 면적을 모두 굴착하는 방식.

▶ 적용
• 온통기초(매트기초) 설치 시
• 지하실이 있는 건물 전체 굴착

▶ 특징
• 굴착량이 가장 많음
• 토류벽(흙막이) 필수
• 대형 장비 투입

▶ 시험 포인트
온통파기 = 지하실 전체 굴착. 흙막이공사와 반드시 함께 계획.`},{id:"2-1-3",label:"독립파기",explanation:`기둥 하나하나 아래에 개별적으로 굴착하는 방식.

▶ 적용
• 독립기초 설치 시
• 기둥 간격이 넓고 하중이 집중되는 구조

▶ 특징
• 각 기둥 위치마다 별도 굴착
• 굴착 규모가 3종류 중 가장 작음

▶ 시험 포인트
독립파기 → 독립기초, 줄파기 → 줄기초, 온통파기 → 온통기초. 1:1 대응 관계 암기.`}]},{id:"2-2",label:"흙막이공사",children:[{id:"2-2-1",label:"H-Pile + 흙막이판",explanation:`H형강 말뚝을 지반에 박고, 굴착하면서 강재 사이에 흙막이판(목재 또는 PC판)을 끼워 흙을 지지하는 공법.

▶ 특징
• 가장 일반적이고 경제적인 흙막이 공법
• 시공이 간단하고 H-Pile 재사용 가능
• 차수(물막기) 능력이 낮음 — 지하수가 많으면 불리

▶ 구성
• H형강말뚝 (Soldier Pile)
• 흙막이판 (Lagging)
• 버팀대(Strut) 또는 어스앵커로 지지

▶ 시험 포인트
차수성 낮음 = 지하수 없는 곳에 유리. 가장 일반적·경제적.`},{id:"2-2-2",label:"시트파일",explanation:`U형(또는 Z형) 단면의 강재 시트를 서로 맞물려 연속으로 지중에 박는 흙막이 공법.

▶ 특징
• 차수성(물막기) 우수 — 지하수가 많은 곳에 적합
• 연약 지반에 효과적
• H-Pile보다 고가
• 인접 구조물에 진동 전달 우려

▶ 시험 포인트
시트파일 = 차수성 우수. H-Pile과 차이는 "차수 여부"로 구분.`},{id:"2-2-3",label:"슬러리월",explanation:`벤토나이트 안정액을 채운 트렌치(도랑)를 굴착한 후 철근망 삽입 → 콘크리트 타설하여 만드는 연속 지하벽.

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
슬러리월 = 가장 고급·고가·차수 최우수. 벤토나이트 안정액이 핵심. 영구벽 활용 가능`},{id:"2-2-4",label:"어스앵커",explanation:`흙막이 벽에 구멍을 뚫고 강연선(PC강선)을 삽입 → 선단부를 그라우팅으로 지반에 고정하여 흙막이를 지지하는 방식.

▶ 특징
• 버팀대(스트럿) 없이 넓은 굴착 공간 확보
• 지하실 작업 공간이 넓어 시공 효율 향상
• 인접 대지에 앵커가 들어가 지장 물건 확인 필요
• 공사 후 앵커 제거 작업 필요

▶ 구조
자유장(Free Length) + 정착장(Fixed Length)

▶ 시험 포인트
어스앵커 = 버팀대 없이 굴착 공간 확보. 정착장이 인접 지반에 고정된다는 점 주의.`}]},{id:"2-3",label:"지반개량",children:[{id:"2-3-1",label:"웰포인트",explanation:`지중에 소구경 집수관(Well Point)을 촘촘히 박고 진공펌프로 지하수를 강제 흡입·배수하는 공법.

▶ 적용
• 지하수위가 얕은 경우 (6m 이내)
• 모래·자갈층 지반에 효과적

▶ 특징
• 설치·철거가 빠르고 경제적
• 6m 이상 깊은 곳은 딥웰 사용
• 진공을 이용하므로 미세한 지하수도 배수 가능

▶ 시험 포인트
웰포인트(6m 이내) vs 딥웰(6m 이상). 배수공법의 깊이 기준 암기.`},{id:"2-3-2",label:"딥웰",explanation:`지중 깊이 대구경 우물(Deep Well)을 굴착하고 수중펌프를 설치하여 지하수를 대량 배수하는 공법.

▶ 적용
• 지하수위가 깊은 경우 (6m 이상)
• 대량 지하수 배수 필요 시

▶ 특징
• 우물 구경이 크고 심도 제한 없음
• 웰포인트가 도달하지 못하는 깊은 곳에 적용
• 광범위한 지역 수위 저하 가능

▶ 시험 포인트
딥웰 = 깊은 지하수 대량 배수. 웰포인트(6m 이내)와 깊이 기준 비교 암기.`},{id:"2-3-3",label:"샌드드레인",explanation:`연약한 점성토 지반에 모래 기둥(Sand Drain)을 형성하여 간극수를 배출하고 지반을 압밀·강화하는 공법.

▶ 원리
점토층 → 수직 모래 기둥 삽입 → 물이 모래 기둥으로 빠져나감 → 압밀 촉진 → 지반 강화

▶ 특징
• 연약 점성토 지반 개량에 효과적
• 공사 기간이 김 (압밀에 시간 필요)
• 선재하(Preloading)와 병행

▶ 시험 포인트
샌드드레인 = 연약 점토 지반 + 수직 배수로 형성 + 압밀 촉진. 페이퍼드레인과 원리 동일, 재료만 다름.`},{id:"2-3-4",label:"페이퍼드레인",explanation:`모래 대신 합성 섬유 드레인 보드(PBD: Plastic Board Drain)를 지중에 삽입하여 압밀 배수를 촉진하는 공법.

▶ 샌드드레인과 차이
• 재료: 모래(샌드드레인) → 합성 섬유 보드(페이퍼드레인)
• 시공 속도 빠름
• 골재(모래) 불필요 → 경제적
• 현재 더 많이 사용됨

▶ 시험 포인트
페이퍼드레인 = 샌드드레인의 발전형. 재료가 합성 섬유라는 것이 차이점.`}]},{id:"2-4",label:"토량계산",children:[{id:"2-4-1",label:"토량변화율 (L, C)",explanation:`흙의 상태 변화에 따른 부피 변화를 나타내는 계수.

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
L>1(굴착 후 부피 증가), C<1(다짐 후 부피 감소). 계산 문제 자주 출제. 덤프 대수=흐트러진 토량÷적재용량`},{id:"2-4-2",label:"흐트러진 토량",explanation:`자연 상태의 흙을 굴착하여 운반 중인 상태의 토량.

▶ 공식
흐트러진 토량(㎥) = 자연 토량(㎥) × L

▶ 활용
• 덤프트럭 대수 계산 시 사용
• 적재 용량은 흐트러진 상태 기준

▶ 예시
L = 1.25, 자연 상태 200㎥
흐트러진 토량 = 200 × 1.25 = 250㎥

▶ 시험 포인트
운반·적재는 흐트러진 상태 기준. 덤프트럭 대수 = 흐트러진 토량 ÷ 적재용량.`},{id:"2-4-3",label:"다진 토량",explanation:`성토(흙 쌓기) 후 다짐 작업을 거친 최종 상태의 토량.

▶ 공식
다진 토량(㎥) = 자연 토량(㎥) × C

▶ 활용
• 성토·뒤채움 계획 시 필요량 계산
• C < 1이므로 자연 상태보다 부피 감소

▶ 예시
C = 0.85, 자연 상태 200㎥
다진 토량 = 200 × 0.85 = 170㎥

▶ 시험 포인트
성토 완료 후 부피가 줄어든다는 점 주의. L·C 공식 세트로 암기.`}]},{id:"2-exam",label:"[시험 포인트]",children:[{id:"2-e1",label:"터파기: 줄·온통·독립파기"},{id:"2-e2",label:"흙막이: H-Pile·시트·슬러리월·앵커"},{id:"2-e3",label:"지반개량: 웰포·딥웰·샌드드레인"},{id:"2-e4",label:"토량변화율 (L·C)"}]}]},{id:"3",label:"3. 기초공사",children:[{id:"3-1",label:"직접기초",children:[{id:"3-1-1",label:"독립기초",explanation:`각 기둥 아래에 독립적으로 설치하는 기초판.

▶ 특징
• 각 기둥이 개별 기초로 하중 지지
• 단순하고 경제적
• 기둥 간격이 넓고 지반이 양호할 때 사용

▶ 형태
정사각형 또는 직사각형 철근콘크리트 기초판

▶ 시험 포인트
독립기초 = 기둥 1개 → 기초 1개. 지반이 좋고 기둥 하중이 일정할 때 선택.`},{id:"3-1-2",label:"줄기초",explanation:`벽 또는 기둥 열을 따라 길게 연속으로 설치하는 기초.

▶ 특징
• 조적조(벽돌·블록) 건물에 주로 사용
• 벽 아래 연속적으로 하중 분산
• 연속기초라고도 함

▶ 시험 포인트
줄기초 = 조적조(벽돌집)의 기초. 줄파기 → 줄기초 세트.`},{id:"3-1-3",label:"복합기초",explanation:`2개 이상의 기둥을 하나의 기초판으로 지지하는 기초.

▶ 사용 이유
• 기둥 간격이 좁아 독립기초가 겹칠 때
• 대지 경계선에 기둥이 위치할 때 (경계선 밖으로 기초 못 내밀 때)

▶ 시험 포인트
복합기초 = 독립기초 2개가 겹치는 상황. 기둥이 대지 경계선에 있을 때 자주 등장.`},{id:"3-1-4",label:"온통기초 (매트기초)",explanation:`건물 바닥 전체 면적에 걸쳐 하나의 넓고 두꺼운 콘크리트 기초판을 설치하는 기초.
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
온통기초=매트기초=연약지반+부동침하 방지 최선. 기초 형식 중 접지압 가장 낮음`}]},{id:"3-2",label:"말뚝기초",children:[{id:"3-2-1",label:"나무말뚝",explanation:`소나무·낙엽송 등 원목을 말뚝으로 사용하는 가장 오래된 방식.

▶ 특징
• 지하수위 아래 (상시 침수)에서만 내구성 유지 — 건조하면 부식
• 가볍고 시공 간단
• 허용 하중이 낮음 (10~20tf 정도)
• 현재는 특수 목적 외 거의 사용 안 함

▶ 시험 포인트
나무말뚝 = 지하수위 아래에서만 사용. 건조 시 부식 → 상시 침수 조건 필수.`},{id:"3-2-2",label:"RC말뚝",explanation:`현장에서 철근 조립 후 콘크리트를 타설하는 현장타설 콘크리트 말뚝 또는 기성 RC말뚝.

▶ 특징
• 허용 하중: 30~100tf
• 철근 + 콘크리트로 내구성 우수
• 기성 RC말뚝: 공장 제작, 현장 항타

▶ 시험 포인트
RC말뚝 → PC말뚝(프리스트레스) → PHC말뚝(고강도) 순으로 강도 높아짐.`},{id:"3-2-3",label:"PC말뚝",explanation:`공장에서 원심력으로 제작한 프리스트레스트 콘크리트 말뚝.

▶ 특징
• 원심력 다짐 → 고강도·고밀도
• RC말뚝보다 강도 향상
• 원형 중공(속이 빈) 단면
• 허용 하중: 50~120tf

▶ 시험 포인트
PC말뚝 = 프리스트레스 + 원심력 제작. RC말뚝보다 강도 높음.`},{id:"3-2-4",label:"PHC말뚝",explanation:`Pretensioned High-strength Concrete Pile.
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
PHC = 현재 국내 표준 기성 말뚝. 고강도(80MPa 이상). A·B·C종 구분. 중굴공법과 세트`},{id:"3-2-5",label:"강관말뚝",explanation:`강재 파이프를 말뚝으로 사용하는 공법.

▶ 특징
• 인장력·압축력 모두 우수
• 긴 말뚝 제작 가능, 이음(용접) 가능
• 허용 하중이 매우 높음
• 부식 방지 처리 필요 (도장, 피복)

▶ 시험 포인트
강관말뚝 = 깊은 기초, 대하중. 부식 방지가 약점.`},{id:"3-2-6",label:"H형강말뚝",explanation:`H형강(Steel H-Pile)을 지중에 박아 사용하는 말뚝.

▶ 특징
• 단면 효율이 좋고 항타 저항 낮음
• 단단한 지반(암반 등)까지 관입 가능
• 흙막이공사의 H-Pile과 동일 형태 (용도가 다름)
• 부식 방지 처리 필요

▶ 시험 포인트
H형강말뚝 = 단단한 지반 관입 유리. 흙막이 H-Pile과 외형은 같지만 기능이 다름.`}]},{id:"3-3",label:"말뚝 시공법",children:[{id:"3-3-1",label:"항타공법",explanation:`해머(hammer)로 말뚝 머리를 쳐서 지중에 박는 가장 기본적인 시공법.

▶ 해머 종류
• 드롭해머 (Drop Hammer): 무거운 추를 낙하
• 증기해머 (Steam Hammer): 증기압 이용
• 디젤해머 (Diesel Hammer): 디젤 폭발력 이용
• 유압해머 (Hydraulic Hammer): 유압 이용

▶ 특징
• 시공 간단, 경제적
• 소음·진동 발생 — 도심지 불리

▶ 시험 포인트
항타공법 = 두드려 박기. 소음·진동 문제 = 도심지 사용 제한.`},{id:"3-3-2",label:"프리보링공법",explanation:`말뚝을 박기 전에 먼저 어스오거(Earth Auger)로 구멍을 뚫은 후 말뚝을 삽입하는 공법.

▶ 특징
• 소음·진동 최소화 → 도심지·인접 구조물 근처에 적합
• 지반 저항이 큰 경우 선굴착으로 관입 용이
• 지지력이 항타공법보다 다소 낮을 수 있음

▶ 시험 포인트
프리보링 = 먼저(Pre) 굴착(Boring). 소음·진동 적음 = 도심지 적합.`},{id:"3-3-3",label:"중굴공법",explanation:`중공(속이 빈) PHC말뚝 안으로 어스오거를 넣어 말뚝 내부를 굴착하면서 말뚝을 관입하는 공법.

▶ 특징
• 소음·진동 매우 적음
• 관입 효율이 높고 말뚝 손상 최소화
• 선단 처리: 시멘트 밀크 주입으로 지지력 확보
• PHC말뚝과 함께 가장 많이 사용되는 공법

▶ 시험 포인트
중굴공법 = PHC 속 구멍으로 오거 삽입. 선단 시멘트 밀크 처리 = 지지력 확보.`}]},{id:"3-4",label:"케이슨기초",children:[{id:"3-4-1",label:"오픈케이슨",explanation:`상·하부가 개방된 콘크리트 상자(케이슨)를 자중으로 침하시키며 내부를 굴착하는 공법.

▶ 특징
• 구조 단순, 시공 경제적
• 지하수 없는 곳에 유리
• 침하 속도 조절이 어려움
• Open Caisson = 우물통기초

▶ 시험 포인트
오픈케이슨 = 위아래 열려있음. 지하수 처리 어려움이 단점.`},{id:"3-4-2",label:"공기케이슨",explanation:`케이슨 하부에 압축공기를 불어넣어 지하수를 배제하고 작업자가 내부에서 직접 굴착하는 공법.

▶ 특징
• 지하수가 많은 지반에 적합
• 작업자가 고기압 환경에서 작업 → 잠수병 위험
• 시공비 고가
• Pneumatic Caisson

▶ 시험 포인트
공기케이슨 = 압축공기로 물 배제. 잠수병(감압증) 위험이 단점.`},{id:"3-4-3",label:"박스케이슨",explanation:`육상에서 제작한 콘크리트 상자(박스)를 해상에 예인 후 침설하는 공법.

▶ 특징
• 주로 항만·교량·해양 구조물 기초에 사용
• 육상에서 제작 후 진수(물에 띄워 이동)
• 지정 위치에 침설(가라앉히기)

▶ 시험 포인트
박스케이슨 = 육상 제작 → 해상 진수 → 침설. 항만·교량 기초에 사용.`}]},{id:"3-exam",label:"[시험 포인트]",children:[{id:"3-e1",label:"직접기초: 독립·줄·복합·온통기초"},{id:"3-e2",label:"말뚝: 나무·RC·PC·PHC·강관·H형강"},{id:"3-e3",label:"시공법: 항타·프리보링·중굴공법"},{id:"3-e4",label:"케이슨: 오픈·공기·박스"}]}]},{id:"4",label:"4. 철근콘크리트공사",children:[{id:"4-1",label:"거푸집",children:[{id:"4-1-1",label:"재래식 거푸집",explanation:`목재 합판과 각재로 현장에서 직접 제작하는 전통적인 거푸집.

▶ 특징
• 특수 장비 불필요, 어떤 형태도 제작 가능
• 설치·해체 반복 작업 인력이 많이 필요
• 공기(공사기간)가 길고 폐자재 발생
• 현재도 복잡한 형태의 구조물에 활용

▶ 시험 포인트
재래식 = 목재합판 현장 제작. 인력 의존, 공기 길다. 다른 거푸집들과 장단점 비교.`},{id:"4-1-2",label:"갱폼 (Gang Form)",explanation:`대형 패널과 지지 프레임·작업발판을 일체로 조립한 대형 거푸집 시스템.
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
슬립폼 = 연속 상승 = 콜드 조인트 없음 = 24시간 연속 작업 필수. 사일로·굴뚝이 키워드`},{id:"4-1-4",label:"터널폼 (Tunnel Form)",explanation:`벽과 슬래브를 동시에 타설할 수 있도록 ㄷ자 단면으로 제작된 거푸집.

▶ 특징
• 벽체 + 슬래브 동시 타설 → 공기 단축
• 아파트 등 표준화된 평면에 최적
• 형상이 터널 단면과 유사
• 대형 장비(크레인) 필요

▶ 시험 포인트
터널폼 = 벽+슬래브 동시 타설. ㄷ자 단면 형태.`},{id:"4-1-5",label:"플라잉폼 (Flying Form)",explanation:`슬래브(바닥판) 전용 대형 거푸집. 타설 후 크레인으로 통째 상층으로 비행(Flying)하듯 이동.

▶ 특징
• 슬래브 전용 (벽체는 별도 거푸집 사용)
• 대형 바닥 면적 고층 건물에 적합
• 해체 없이 상층으로 반복 이동

▶ 시험 포인트
플라잉폼 = 슬래브 전용 + 크레인으로 날아서 이동.`},{id:"4-1-6",label:"알폼 (Al Form)",explanation:`알루미늄 합금으로 제작된 경량 거푸집.

▶ 특징
• 가벼워 인력 설치 가능 (크레인 불필요)
• 반복 사용 횟수 많음 (200~300회)
• 아파트 실내 벽·슬래브 동시 사용 가능
• 초기 비용이 높지만 대량 사용 시 경제적

▶ 시험 포인트
알폼 = 알루미늄 = 가벼움 = 인력 설치. 고반복 사용이 장점.`}]},{id:"4-2",label:"철근공사",children:[{id:"4-2-1",label:"철근의 종류 (SR, HD)",explanation:`철근은 표면 형태에 따라 원형(SR)과 이형(HD)으로 구분.

▶ SR (Round bar, 원형철근)
• 표면이 매끄러운 원형 단면
• 콘크리트와의 부착력이 낮음
• 현재는 거의 사용 안 함

▶ HD (Deformed bar, 이형철근)
• 표면에 마디(돌기)가 있음
• 콘크리트와 부착력이 우수
• 현재 표준 사용 철근

▶ 강도 등급
HD10, HD13, HD16... 숫자 = 공칭 지름(mm)

▶ 시험 포인트
SR = 원형(매끄러움), HD = 이형(마디). 현재는 HD 표준. 부착력은 HD > SR.`},{id:"4-2-2",label:"피복두께",explanation:`철근 표면에서 콘크리트 외부 표면까지의 최소 거리. 철근을 감싸는 콘크리트 보호층의 두께.

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
3가지 이유(부식방지·내화·부착력). 기초 60mm, 옥외 슬래브 40mm, 실내 슬래브 20mm 수치 암기`},{id:"4-2-3",label:"이음 (겹침·기계적·용접)",explanation:`철근 길이가 부족할 때 두 철근을 연결하는 방법.

▶ 겹침이음 (Lap Splice)
• 두 철근을 일정 길이 겹쳐 결속선으로 묶음
• 가장 일반적인 이음 방법
• 최소 겹침 길이: 40d 이상 (d = 철근 지름)

▶ 기계적 이음 (Mechanical Coupler)
• 금속 커플러로 두 철근 연결
• 겹침이음 어려운 대구경 철근에 사용

▶ 용접이음
• 철근 끝을 용접으로 접합
• 고강도 철근·대구경에 사용
• 용접 결함 시 강도 저하 위험

▶ 시험 포인트
이음은 인장력이 작은 위치에 설치. 동일 단면에 이음 집중 금지.`},{id:"4-2-4",label:"정착길이",explanation:`철근이 콘크리트로부터 빠져나오지 않도록 묻혀야 하는 최소 길이.

▶ 원리
철근을 잡아당기는 힘 ≤ 철근 표면과 콘크리트 사이 부착력

▶ 기준
인장 정착길이 = 최소 25d 이상 (d = 철근 지름)

▶ 정착 위치
• 보 → 기둥, 슬래브 → 보, 벽 → 기초로 들어가는 길이

▶ 시험 포인트
정착길이 = 철근이 뽑히지 않도록. 최소 25d(인장). 이음과 정착 구분하여 암기.`},{id:"4-2-5",label:"갈고리 (Hook)",explanation:`철근 단부를 구부려 부착력과 정착력을 높이는 처리.

▶ 형태
• 반원형 갈고리: 180° 구부린 후 4d 연장
• 직각 갈고리: 90° 구부린 후 12d 연장
• 예각 갈고리: 135° 구부린 후 6d 연장 (대근, 스터럽에 사용)

▶ 사용 위치
• 철근 단부 정착이 부족할 때
• 스터럽·띠철근 단부

▶ 시험 포인트
갈고리 = 정착력 보완. 반원형(180°), 직각(90°), 예각(135°) 세 종류 암기.`}]},{id:"4-3",label:"콘크리트 재료",children:[{id:"4-3-1",label:"시멘트 종류",explanation:`건축공사에 사용되는 주요 시멘트의 종류와 특성.

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
3종 조강 = 빠른 강도(한중·긴급), 2종 중용열 = 발열 낮음(매스콘크리트). 세트로 암기`},{id:"4-3-2",label:"골재 (잔골재·굵은골재)",explanation:`콘크리트 부피의 약 70%를 차지하는 재료.

▶ 잔골재 (Fine Aggregate)
• 5mm 체를 85% 이상 통과하는 골재
• 모래(강모래, 바다모래, 산모래)
• 바다모래: 염분 제거(수세) 후 사용

▶ 굵은골재 (Coarse Aggregate)
• 5mm 체에 남는 골재
• 자갈, 쇄석(깬자갈)
• 최대 치수: 슬래브 두께의 1/3 이하

▶ 골재의 조건
• 깨끗하고 강한 것 (불순물 없을 것)
• 입도(입자 크기 분포)가 적당할 것

▶ 시험 포인트
잔골재 = 5mm 이하, 굵은골재 = 5mm 이상. 바다모래 염분 제거 필수.`},{id:"4-3-3",label:"혼화재료 (혼화재·혼화제)",explanation:`시멘트·물·골재 이외에 추가로 넣는 재료. 사용량에 따라 혼화재(많음)와 혼화제(소량)로 구분.

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
W/C = 물/시멘트 비율. W/C 낮을수록 강도↑ 이 원리가 콘크리트 강도 결정의 핵심`},{id:"4-4-2",label:"슬럼프 (Slump)",explanation:`굳지 않은 콘크리트의 반죽 질기(유동성)를 측정하는 지표.

▶ 측정 방법
높이 30cm 원뿔형 슬럼프 콘에 콘크리트를 채운 후 콘을 들어 올렸을 때 중앙부 침하량(cm)

▶ 기준값
• 일반 구조물: 8~15cm
• 무근 콘크리트: 5~8cm
• 슬럼프 클수록 반죽 묽음 → 타설 쉽지만 강도 저하

▶ 시험 포인트
슬럼프 값 = 침하량(cm) = 묽기 지표. 슬럼프↑ = 워커빌리티↑ but 강도↓.`},{id:"4-4-3",label:"공기량",explanation:`콘크리트 속에 포함된 공기(기포)의 비율(%).

▶ AE콘크리트 기준
• 적정 공기량: 4~7%
• 공기량 1% 증가 → 강도 약 4~5% 감소

▶ 역할
• AE제(공기연행제)로 인위적 기포 도입
• 동결융해 시 수분 팽창 완충
• 워커빌리티 향상

▶ 시험 포인트
공기량 4~7%가 적정. 과도하면 강도 저하. 동결융해 저항이 목적.`},{id:"4-4-4",label:"배합강도",explanation:`콘크리트를 배합할 때 목표로 하는 강도.

▶ 개념
• 설계기준강도(fck)보다 높게 설정 — 현장 오차를 고려
• 배합강도(fcr) = fck + 할증치

▶ 이유
콘크리트는 재료 품질·시공 환경·양생 조건 등으로 강도 편차 발생 → 안전 여유 필요

▶ 시험 포인트
배합강도 > 설계기준강도. 현장 편차를 반영한 할증 개념.`}]},{id:"4-5",label:"콘크리트 시공",children:[{id:"4-5-1",label:"비비기 (믹싱)",explanation:`시멘트·물·골재·혼화재료를 균일하게 혼합하는 작업.

▶ 방법
• 기계비비기 (Machine Mixing): 믹서 사용 — 표준
• 손비비기 (Hand Mixing): 소규모·긴급 시 예외적 사용

▶ 믹서 종류
• 중력식(Tilting): 드럼 기울여 배출 — 경량·건조 배합
• 강제식(Forced): 패들로 강제 혼합 — 경량콘크리트·고강도

▶ 시험 포인트
기계비비기 원칙. 비빔 시간 부족하면 불균질. 재비비기 원칙적 금지.`},{id:"4-5-2",label:"운반",explanation:`비빈 콘크리트를 타설 위치까지 이동하는 작업.

▶ 운반 방법
• 레미콘(Transit Mixer): 공장에서 현장까지 운반 — 표준
• 콘크리트 펌프: 펌프로 압송 — 고층·협소한 곳
• 버킷+크레인: 소규모·특수한 형상

▶ 주의사항
• 운반 시간 제한: 90분 이내 (비빔 완료부터 타설 완료까지)
• 재료분리 방지: 진동·충격 최소화

▶ 시험 포인트
운반 시간 90분 이내. 레미콘 = 가장 일반적. 재료분리 방지.`},{id:"4-5-3",label:"타설·다짐",explanation:`거푸집 내에 콘크리트를 붓고(타설) 균질하게 채우는(다짐) 일련의 작업.

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
1회 타설 40~50cm, 낙하 높이 1.5m 이하, 이어치기 2시간(여름), 바이브레이터 간격 60cm 이하 — 4가지 수치`},{id:"4-5-4",label:"양생 (습윤·증기)",explanation:`타설 후 콘크리트가 충분한 강도를 얻도록 온도·습도를 관리하는 작업.

▶ 습윤양생
• 물·습포·양생 시트로 표면을 젖은 상태 유지
• 수화반응이 계속 진행되도록 수분 공급
• 기간: 보통 포틀랜드 시멘트 → 5일 이상

▶ 증기양생
• 고온 증기를 쐬어 단시간에 강도 발현
• 프리캐스트 부재, PHC말뚝 공장 제작 시 사용
• 65°C 이하에서 시행

▶ 양생 온도
• 5°C 이하 타설 금지 (한중콘크리트 주의)

▶ 시험 포인트
습윤양생 = 물 공급, 증기양생 = 공장 부재 단시간 강도. 양생 기간 5일 이상.`}]},{id:"4-6",label:"특수 콘크리트",children:[{id:"4-6-1",label:"한중콘크리트",explanation:`일 평균기온이 4°C 이하, 또는 타설 후 양생 중 콘크리트 온도가 동결할 우려가 있을 때 시공하는 콘크리트.
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
일평균 4°C 이하 = 한중콘크리트. 물 가열 최대 60°C, 타설 온도 5~20°C, 초기 동해 방지 5MPa — 3가지 수치`},{id:"4-6-2",label:"서중콘크리트",explanation:`일평균 기온 25°C 이상의 여름철에 타설하는 콘크리트.

▶ 문제점
• 고온에서 수화반응 빨라져 슬럼프 저하
• 급격한 응결·균열 발생 우려
• 단위수량 증가 → 강도 저하

▶ 대책
• 재료 냉각: 물, 골재를 냉각 (얼음 사용 가능)
• 운반·타설 시간 단축
• 저열 시멘트 사용
• 직사광선 차단, 바람 막기

▶ 시험 포인트
일평균 25°C 이상 = 서중콘크리트. 재료 냉각 + 타설 시간 단축이 대책.`},{id:"4-6-3",label:"수중콘크리트",explanation:`물 속에서 타설하는 콘크리트.

▶ 종류
• 트레미(Tremie)공법: 관을 물속에 삽입하여 콘크리트를 흘려 넣음 — 가장 일반적
• 수중 불분리성 콘크리트: 특수 혼화제로 수중에서도 재료분리 없음

▶ 기준
• W/C: 50% 이하 (공기 중보다 10% 낮게)
• 슬럼프: 18cm 이하
• 단위시멘트량: 370kg/㎥ 이상

▶ 주의
물을 정지시킨 상태에서 타설 (유속 있으면 재료분리)

▶ 시험 포인트
트레미관 수중 타설이 기본. W/C 50% 이하, 물 정지 상태 타설.`},{id:"4-6-4",label:"매스콘크리트",explanation:`부재 최소 단면이 80cm 이상이거나 수화열에 의한 내외부 온도차가 25°C 이상 예상될 때 적용.
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
80cm 이상 = 매스콘크리트 정의. 온도차 25°C 이상이 균열 기준. 파이프쿨링이 가장 직접적 냉각법`},{id:"4-6-5",label:"경량콘크리트",explanation:`단위중량이 일반 콘크리트(2,300kg/㎥)보다 가벼운 콘크리트.

▶ 종류
• 경량골재 콘크리트: 경량 골재(팽창점토, 펄라이트) 사용
• 기포 콘크리트(ALC): 기포제로 기공 형성 → 단열·방음 우수
• 무세골재 콘크리트: 잔골재 생략

▶ 특징
• 구조물 자중 감소 → 기초·구조체 부담 경감
• 단열·방음 성능 향상
• 일반 콘크리트보다 강도 낮음

▶ 시험 포인트
ALC (Autoclaved Lightweight Concrete) = 기포 콘크리트. 자중 감소 + 단열이 장점.`},{id:"4-6-6",label:"프리팩트콘크리트",explanation:`거푸집에 먼저 굵은골재를 채운 후 그 사이에 모르타르를 주입하는 콘크리트.

▶ 특징
• 수중·협소 공간·기초 등에 적합
• 재료분리 없음 (모르타르 주입)
• 건조수축·크리프 적음 (골재가 맞닿아 있어서)

▶ 주입 모르타르
플루이드(Fluid) 모르타르 — 유동성이 매우 높음

▶ 시험 포인트
프리팩트 = 미리 채워 넣기. 굵은골재 먼저 → 모르타르 주입 순서.`},{id:"4-6-7",label:"PSC (프리스트레스트)",explanation:`철근 대신 고강도 강재(PC강선·강봉)를 콘크리트에 인장하여 압축 프리스트레스를 미리 도입하는 구조.

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
H형강 = 플랜지(수평)+웨브(수직). 기둥·보에 범용. I형강보다 플랜지 넓어 안정적`},{id:"5-1-2",label:"I형강",explanation:`I자 단면의 철골 부재. H형강과 유사하나 플랜지 폭이 좁음.

▶ H형강과 차이
• H형강: 플랜지 폭이 넓어 안정적
• I형강: 플랜지 폭이 좁고 얇음
• 현재는 H형강이 I형강을 대부분 대체

▶ 용도
• 보(Beam)로 주로 사용

▶ 시험 포인트
I형강 ≈ H형강이나 플랜지가 좁음. 현재는 H형강이 주류.`},{id:"5-1-3",label:"ㄱ형강 (앵글)",explanation:`ㄱ자(L자) 단면의 철골 부재. 앵글(Angle)이라고도 함.

▶ 용도
• 가새(브레이스) 부재
• 접합판(거싯 플레이트)에 연결
• 경량 트러스 부재
• 형태 유지·보강 목적의 소부재

▶ 시험 포인트
ㄱ형강 = 앵글. 보조 부재, 가새에 사용.`},{id:"5-1-4",label:"ㄷ형강 (채널)",explanation:`ㄷ자(C자) 단면의 철골 부재. 채널(Channel)이라고도 함.

▶ 용도
• 데크플레이트 지지 부재
• 창호 틀
• 경량 구조물 및 보조 부재

▶ 시험 포인트
ㄷ형강 = 채널. ㄱ형강(앵글)·ㄷ형강(채널) = 보조 부재로 함께 암기.`}]},{id:"5-2",label:"접합",children:[{id:"5-2-1",label:"용접접합",children:[{id:"5-2-1-1",label:"맞댐용접",explanation:`두 강재의 끝면을 맞대어 용접하는 방법. 부재를 완전히 일체화.

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
맞댐용접 = 끝면을 맞대어 일체화. 완전용입(CJP) = 가장 강함. UT·RT로 검사 필수`},{id:"5-2-1-2",label:"필릿용접",explanation:`두 강재가 직각 또는 예각으로 만나는 부위에 삼각형 단면 형태로 용접하는 방법.

▶ 특징
• 가장 일반적인 용접 방법
• 맞댐용접보다 시공이 쉽고 경제적
• 유효목두께: 필릿 치수의 0.7배

▶ 주요 위치
• 보의 웨브와 플랜지 접합
• 스티프너(보강판) 접합

▶ 시험 포인트
필릿용접 = 삼각형 단면 = 가장 일반적. 유효목두께 = 0.7 × 필릿 치수.`}]},{id:"5-2-2",label:"볼트접합",children:[{id:"5-2-2-1",label:"고력볼트",explanation:`고강도 볼트(F8T·F10T·F13T급)를 규정 장력으로 조여 접합면의 마찰력으로 하중을 전달하는 접합 방법.

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
고력볼트 = 마찰형이 표준. 접합면 블라스트 처리 필수. 토크 렌치로 규정 체결력 관리`},{id:"5-2-2-2",label:"일반볼트 (앙카볼트)",explanation:`일반 강재 볼트로 접합하거나, 앙카볼트로 철골을 기초에 고정하는 방법.

▶ 일반볼트
• 주로 가설·임시 접합에 사용
• 전단력은 볼트 몸통으로 저항
• 고력볼트보다 강도 낮음

▶ 앙카볼트 (Anchor Bolt)
• 철골 기둥을 콘크리트 기초에 고정
• 기초 타설 시 미리 매입
• 위치 정밀도가 중요

▶ 시험 포인트
앙카볼트 = 기초에 철골 고정. 기초 타설 전에 정확한 위치 설치 필수.`}]}]},{id:"5-3",label:"내화피복",children:[{id:"5-3-1",label:"뿜칠공법",explanation:`내화재(암면·질석 등)와 결합재를 물로 섞어 철골 표면에 분사하는 공법.

▶ 특징
• 가장 경제적이고 시공 빠름
• 복잡한 형태에도 적용 가능
• 내화 두께 조절 용이
• 충격에 약하고 마감이 불균일할 수 있음

▶ 시험 포인트
뿜칠 = 분사. 가장 경제적이고 일반적. 충격에 약함이 단점.`},{id:"5-3-2",label:"타설공법",explanation:`철골 주위에 거푸집을 설치하고 콘크리트나 경량 내화재를 타설하여 피복하는 공법.

▶ 특징
• 내구성·강도 우수
• 철골을 완전히 콘크리트로 감쌈
• 시공 시간이 길고 거푸집 비용 추가
• 철골·콘크리트 복합 구조에서 사용

▶ 시험 포인트
타설 = 콘크리트로 감싸기. 가장 튼튼하지만 시공이 복잡.`},{id:"5-3-3",label:"붙이기공법",explanation:`내화 보드(규산칼슘판, 석고보드)나 벽돌을 철골 표면에 붙이는 공법.

▶ 특징
• 표면이 깔끔하여 마감으로도 활용
• 접착·앵커 고정 방식
• 복잡한 단면에 적용 어려움
• 뿜칠보다 강도·내충격성 우수

▶ 시험 포인트
붙이기 = 내화보드 부착. 마감과 내화 동시 해결 가능.`}]},{id:"5-exam",label:"[시험 포인트]",children:[{id:"5-e1",label:"부재: H·I·ㄱ(앵글)·ㄷ(채널)형강"},{id:"5-e2",label:"용접: 맞댐용접·필릿용접"},{id:"5-e3",label:"볼트: 고력볼트·일반볼트"},{id:"5-e4",label:"내화피복: 뿜칠·타설·붙이기"},{id:"5-e5",label:"철골세우기 순서"}]}]},{id:"6",label:"6. 조적공사",children:[{id:"6-1",label:"벽돌쌓기",children:[{id:"6-1-1",label:"길이쌓기",explanation:`벽돌의 긴 면(길이 방향)이 벽면에 보이도록 쌓는 방법.

▶ 특징
• 벽 두께 = 벽돌 두께 1장 = 0.5B
• 가장 얇은 벽 구성
• 비내력 칸막이벽에 사용

▶ 시험 포인트
길이쌓기 = 벽돌 긴 면이 보임 = 0.5B 두께.`},{id:"6-1-2",label:"마구리쌓기",explanation:`벽돌의 짧은 면(마구리)이 벽면에 보이도록 쌓는 방법.

▶ 특징
• 벽 두께 = 벽돌 길이 1장 = 1.0B
• 길이쌓기보다 두꺼운 벽

▶ 시험 포인트
마구리 = 짧은 면. 마구리쌓기 = 1.0B 두께. 길이쌓기(0.5B)와 두께 비교 암기.`},{id:"6-1-3",label:"영국식쌓기",explanation:`길이켜(길이쌓기 한 줄)와 마구리켜(마구리쌓기 한 줄)를 교대로 반복 쌓는 방법.

▶ 특징
• 강도가 가장 우수한 쌓기법
• 모서리(코너) 처리에 이오토막 사용
• 내·외부가 완전히 결합

▶ 시험 포인트
영국식 = 길이켜+마구리켜 교대 = 강도 최강. 가장 튼튼한 쌓기법.`},{id:"6-1-4",label:"화란식쌓기",explanation:`영국식과 비슷하나 모서리에서 길이켜와 마구리켜 처리 방법이 다른 쌓기법.

▶ 특징
• 네덜란드(화란)식이라 불림
• 모서리 처리: 3/4 이오토막 사용
• 영국식만큼 견고하고 시공 효율도 높음
• 국내에서 영국식 다음으로 많이 사용

▶ 시험 포인트
화란식 = 영국식 변형. 모서리 처리 방식이 차이점.`},{id:"6-1-5",label:"미국식쌓기",explanation:`5~6켜의 길이쌓기 후 1켜 마구리쌓기를 반복하는 쌓기법.

▶ 특징
• 외관이 깔끔하고 길이쌓기 위주로 미적 효과
• 영국식보다 강도 낮음
• 시공 속도 빠름

▶ 시험 포인트
미국식 = 길이 5~6켜 + 마구리 1켜. 외관 중시, 영국식보다 강도 낮음.`},{id:"6-1-6",label:"불식쌓기",explanation:`길이켜와 마구리켜를 같은 켜 안에 혼합하여 쌓는 프랑스식 쌓기법.

▶ 특징
• 프랑스(불란서)식이라 불림
• 길이벽돌과 마구리벽돌이 같은 줄에 번갈아 배치
• 외관상 다양한 패턴 표현 가능
• 강도는 영국식보다 낮음

▶ 시험 포인트
불식 = 같은 켜에 길이+마구리 혼합. 장식적 효과 = 약점이기도 함.`}]},{id:"6-2",label:"블록쌓기",explanation:`속 빈 콘크리트 블록(시멘트 블록)을 모르타르로 쌓는 공사.

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
블록 190×390×190mm. 통줄눈 금지. 1일 1.6m 이하. 보강 블록 = 철근+그라우트. 세로줄눈 완전 충전`},{id:"6-3",label:"돌쌓기",children:[{id:"6-3-1",label:"찰쌓기",explanation:`모르타르(시멘트 풀)를 사용하여 돌을 쌓는 습식 공법.

▶ 특징
• 돌 사이에 모르타르를 채워 접합
• 구조적 강도와 안정성이 높음
• 옹벽, 석축 등 구조용으로 사용
• 물빠짐 구멍(배수공) 설치 필요

▶ 시험 포인트
찰쌓기 = 모르타르 사용 = 습식. 구조적 강도 우수.`},{id:"6-3-2",label:"메쌓기",explanation:`모르타르를 전혀 사용하지 않고 돌만 쌓는 건식 공법.

▶ 특징
• 돌 자중과 맞물림으로만 지지
• 배수성이 자연스러워 수압 발생 없음
• 구조적 강도는 찰쌓기보다 낮음
• 소규모 조경·전통 담장에 사용

▶ 시험 포인트
메쌓기 = 모르타르 없음 = 건식. 배수 자연스러움, 강도 낮음.`}]},{id:"6-exam",label:"[시험 포인트]",children:[{id:"6-e1",label:"쌓기: 길이·마구리·영국·화란·미국·불식"},{id:"6-e2",label:"블록쌓기 방법"},{id:"6-e3",label:"찰쌓기(모르타르) vs 메쌓기(건식)"}]}]},{id:"7",label:"7. 방수공사",children:[{id:"7-1",label:"아스팔트 방수",explanation:`가열 용융 아스팔트와 아스팔트 루핑(Roofing)을 교대로 여러 겹 붙여 방수층을 형성하는 공법.

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
아스팔트 방수 = 루핑 다층 구조 = 신뢰성 최우수. 시공 순서 프라이머→아스팔트→루핑 반복`},{id:"7-2",label:"시트 방수",explanation:`합성고무(EPDM) 또는 합성수지(PVC) 시트를 바탕면에 접착·고정하는 방수 공법.

▶ 특징
• 균일한 두께의 방수층 확보
• 현장 작업 간단, 냄새·화재 없음
• 부착력이 아스팔트보다 약함
• 겹침 이음부 처리 중요

▶ 시트 종류
• EPDM 시트: 고무 계열, 내구성 우수
• PVC 시트: 열 용접 가능, 시공 편리

▶ 시험 포인트
시트 방수 = 합성 시트 부착. 이음부 처리가 품질 관건.`},{id:"7-3",label:"도막 방수",explanation:`우레탄·아크릴 등 액상 방수재를 바탕면에 도포하여 연속 도막을 형성하는 공법.

▶ 특징
• 복잡한 형태·곡면에도 적용 가능
• 이음매 없는 연속 방수층
• 두께 균일성 확보가 어려움
• 자외선 노출 시 열화 우려 → 보호층 필요

▶ 종류
• 우레탄 도막: 내구성·신축성 우수 (옥상에 주로 사용)
• 아크릴 도막: 친환경, 실내 방수

▶ 시험 포인트
도막 방수 = 액체 → 도포 → 굳혀서 피막. 이음매 없는 것이 최대 장점.`},{id:"7-4",label:"시멘트 액체 방수",explanation:`시멘트 풀에 방수제를 혼합하여 콘크리트 표면에 바르는 방수 공법.

▶ 특징
• 콘크리트와 재료 성질이 같아 부착력 우수
• 타설 콘크리트에 방수제를 혼합하는 방법(혼입)도 포함
• 신축·균열 발생 시 방수층 파단 우려
• 얇은 방수층

▶ 용도
• 저수조, 지하 외벽, 화장실 바닥

▶ 시험 포인트
시멘트 액체 방수 = 시멘트 계열. 부착력 우수, 신축성 낮음.`},{id:"7-5",label:"규산질 방수",explanation:`규산질(SiO₂) 분말 성분이 콘크리트 공극으로 침투하여 결정화·팽창하면서 공극을 차단하는 침투식 방수 공법.

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
규산질 방수 = 침투식 = 공극 충전. 자기치유 기능이 가장 큰 특징. 수조·저수탱크에 필수`},{id:"7-6",label:"실링 (Sealing) 방수",explanation:`창호 주변, 줄눈, 접합부 틈새에 실링재(Sealant)를 충전하여 물 침투를 막는 공법.

▶ 실링재 종류
• 실리콘계: 내수성·내열성 우수, 도장 불가
• 폴리우레탄계: 신축성·내구성 우수
• 변성실리콘(MS): 도장 가능

▶ 특징
• 다른 방수공법의 보조·마감 역할
• 창호 주변·외장패널 줄눈에 필수
• 신축·수축에 유연하게 대응

▶ 시험 포인트
실링 = 코킹(Caulking). 줄눈·틈새 방수. 실리콘·우레탄·변성실리콘 구분.`},{id:"7-exam",label:"[시험 포인트]",children:[{id:"7-e1",label:"방수공법: 아스팔트·시트·도막·액체·규산질·실링"},{id:"7-e2",label:"아스팔트 방수 공법 순서"}]}]},{id:"8",label:"8. 미장·타일공사",children:[{id:"8-1",label:"미장공사",children:[{id:"8-1-1",label:"시멘트 모르타르",explanation:`시멘트 + 잔골재(모래) + 물을 혼합한 가장 일반적인 미장 재료.

▶ 특징
• 강도·내구성 우수
• 실내·외부 벽·바닥 모두 사용 가능
• 건조 수축에 의한 균열 발생 가능
• 바름 두께: 1회 7mm 이하, 총 25mm 이하

▶ 바름 순서
초벌 → 재벌 → 정벌 (3회 나누어 바름)

▶ 시험 포인트
모르타르 = 시멘트+모래. 1회 7mm 이하, 초벌→재벌→정벌 순서.`},{id:"8-1-2",label:"석고 플라스터",explanation:`소석고(Gypsum)를 주재료로 한 실내 전용 미장 재료.

▶ 특징
• 건조 속도 빠름 (시멘트 모르타르보다 빠름)
• 수축·균열 적음
• 실내 전용 — 습기·물에 약함 (외부 사용 불가)
• 흰색 마감, 표면 평활도 우수

▶ 시험 포인트
석고 플라스터 = 실내 전용. 건조 빠름, 습기 약함.`},{id:"8-1-3",label:"테라조",explanation:`대리석 잔 조각(Marble Chip)과 백시멘트를 혼합하여 바른 후 경화시키고 갈아서 광택을 내는 마감.

▶ 특징
• 화려하고 고급스러운 바닥·벽 마감
• 현장 타설 후 연마(研磨)하여 대리석 질감 표현
• 이음새 없이 넓은 면적 시공 가능
• 공기(공사 기간)가 길고 숙련 인력 필요

▶ 시험 포인트
테라조 = 대리석 칩 + 백시멘트 → 갈아서 광택. 고급 바닥재.`}]},{id:"8-2",label:"타일공사",children:[{id:"8-2-1",label:"압착붙이기",explanation:`바탕 모르타르 위에 타일을 대고 나무망치(고무망치)로 두들겨 눌러 붙이는 공법.

▶ 특징
• 가장 일반적인 타일 붙이기 방법
• 내벽 타일에 주로 사용
• 모르타르 경화 전에 신속히 붙여야 함
• 공기 방울 발생 주의

▶ 시험 포인트
압착붙이기 = 바탕에 모르타르 바르고 타일 눌러 붙임. 내벽 기본 방법.`},{id:"8-2-2",label:"개량압착붙이기",explanation:`바탕 모르타르 도포 + 타일 뒷면에도 모르타르를 추가로 발라 부착력을 강화한 공법.

▶ 특징
• 압착붙이기 개선 방법
• 공극(빈 공간) 발생 최소화
• 외벽·바닥 등 강한 부착력이 필요한 곳에 사용
• 시공 시간이 압착붙이기보다 더 필요

▶ 시험 포인트
개량압착 = 압착 + 타일 뒷면 모르타르 추가. 부착력 강화 버전.`},{id:"8-2-3",label:"떠붙이기",explanation:`타일 뒷면에 모르타르를 크게 떠서(두껍게) 바탕에 직접 붙이는 공법.

▶ 특징
• 바탕면 요철이 심한 곳에 적합
• 접착 두께가 두꺼워 불균일한 바탕 흡수
• 공극 발생 우려
• 외장 대형 타일에 사용 감소 추세

▶ 시험 포인트
떠붙이기 = 모르타르를 크게 떠서 붙임. 두꺼운 접착층이 특징.`},{id:"8-2-4",label:"접착붙이기",explanation:`유기계 접착제(에폭시·우레탄 등)로 타일을 붙이는 건식 공법.

▶ 특징
• 물 사용 없어 백화(하얀 얼룩) 현상 없음
• 얇은 접착층 → 경량 설치
• 기존 타일 위 재시공 가능 (건식 공법)
• 접착제 비용이 높음

▶ 시험 포인트
접착붙이기 = 유기접착제. 백화 없음, 얇은 두께, 기존 타일 위 가능.`}]},{id:"8-exam",label:"[시험 포인트]",children:[{id:"8-e1",label:"미장: 시멘트모르타르·석고플라스터·테라조"},{id:"8-e2",label:"타일: 압착·개량압착·떠붙이기·접착"}]}]},{id:"9",label:"9. 창호·유리공사",children:[{id:"9-1",label:"창호공사",children:[{id:"9-1-1",label:"알루미늄창호",explanation:`알루미늄 합금 압출재로 제작한 창호.

▶ 특징
• 경량·내부식성·내구성 우수
• 기밀성·수밀성 좋음
• 열 전도율이 높아 단열 불리 (단열바 삽입으로 보완)
• 현재 가장 많이 사용되는 창호

▶ 열교(Cold Bridge) 문제
알루미늄 프레임이 열을 그대로 전달 → 결로 발생. 단열바(Thermal Break) 삽입으로 해결.

▶ 시험 포인트
알루미늄 = 경량·내식성 최강. 단열 약점 → 단열바로 보완.`},{id:"9-1-2",label:"PVC창호",explanation:`PVC(폴리염화비닐) 수지로 제작한 창호.

▶ 특징
• 단열성·방음성 우수
• 결로 발생이 적음 (열전도율 낮음)
• 알루미늄보다 무겁고 강도 낮음
• 흰색이 일반적, 색상 변형 가능
• 유럽에서 특히 많이 사용

▶ 시험 포인트
PVC = 단열·방음 최강. 결로 적음. 알루미늄보다 무겁고 강도 낮음.`},{id:"9-1-3",label:"목재창호",explanation:`목재를 가공하여 제작한 전통적인 창호.

▶ 특징
• 단열성·미관 우수
• 자연 친화적, 고급 인테리어에 사용
• 습기·수분에 취약 → 부패·뒤틀림 발생
• 화재에 약함
• 유지·보수 비용이 높음

▶ 시험 포인트
목재창호 = 단열·미관 좋음. 습기·화재 약함이 단점.`},{id:"9-1-4",label:"스틸창호",explanation:`강재(Steel)로 제작한 창호.

▶ 특징
• 강도·내화성 우수
• 얇은 프레임으로 시각적 개방감
• 녹(부식) 발생 취약 — 도장·도금 처리 필요
• 열 전도율 높아 단열 불리
• 공장·창고·방화문에 주로 사용

▶ 시험 포인트
스틸창호 = 강도·내화성 최강. 부식과 단열이 약점.`}]},{id:"9-2",label:"유리공사",children:[{id:"9-2-1",label:"판유리",explanation:`가장 기본적인 유리. 용융 유리를 주석(Tin) 위에 띄워 평탄하게 굳히는 플로트(Float) 공법으로 제조.

▶ 특징
• 평활도·투명도 우수
• 강도는 낮음 (가공하지 않은 원판 유리)
• 다른 특수 유리의 원재료

▶ 시험 포인트
판유리 = 플로트 공법. 모든 특수 유리의 기본 원재료.`},{id:"9-2-2",label:"복층유리",explanation:`2장 이상의 유리 사이에 건조 공기층 또는 아르곤(Ar) 가스를 밀봉한 단열 유리.
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
복층유리 = 2장 + 공기층. 단열·방음·결로 방지. 아르곤 가스 = 단열 향상. Low-E와 조합이 최선`},{id:"9-2-3",label:"강화유리",explanation:`판유리를 고온(약 650°C)으로 가열 후 급속 냉각하여 강도를 높인 유리.

▶ 특징
• 일반 유리 대비 3~5배 강도
• 충격 파손 시 작은 입자로 부서져 안전 (안전유리)
• 한번 가공 후 추가 절단 불가

▶ 용도
• 자동문, 욕실, 강화유리 바닥, 난간

▶ 시험 포인트
강화유리 = 열처리 → 강도 3~5배. 파손 시 잘게 부서짐(안전). 추가 가공 불가.`},{id:"9-2-4",label:"접합유리",explanation:`2장의 유리 사이에 PVB(폴리비닐부티랄) 필름을 삽입하여 접합한 유리.

▶ 특징
• 파손 시 파편이 필름에 붙어 비산(날아다님) 방지 → 안전유리
• 방범·방탄 유리의 기본 구조
• 자외선 차단 효과 (PVB 필름)

▶ 용도
• 자동차 앞유리, 스카이라이트, 방범창

▶ 시험 포인트
접합유리 = PVB 필름으로 접합. 파편 비산 방지(안전). 강화유리와 혼동 주의.`},{id:"9-2-5",label:"로이유리",explanation:`유리 표면에 금속 산화물(Low-E 코팅)을 증착하여 열복사를 차단하는 유리.

▶ Low-E의 의미
Low Emissivity = 낮은 열방사율

▶ 특징
• 가시광선은 통과, 적외선(열)은 반사
• 여름: 외부 열 차단, 겨울: 실내 열 보존
• 복층유리와 함께 사용 시 에너지 성능 극대화
• 일반 유리 대비 냉난방 에너지 30~40% 절감

▶ 시험 포인트
로이유리 = Low-E 코팅. 적외선 차단 → 에너지 절약. 복층유리와 조합이 기본.`}]},{id:"9-exam",label:"[시험 포인트]",children:[{id:"9-e1",label:"창호: 알루미늄·PVC·목재·스틸"},{id:"9-e2",label:"유리: 판·복층·강화·접합·로이"}]}]},{id:"10",label:"10. 도장공사",children:[{id:"10-1",label:"바탕처리",explanation:`도료를 바르기 전 표면을 도장에 적합한 상태로 준비하는 작업. 도장 품질을 결정하는 가장 중요한 단계.

▶ 바탕처리 순서
① 표면 청소 (먼지·유분·이물질 제거)
② 결함 보수 (균열·구멍 메우기)
③ 샌딩 (사포질, 표면 거칠게 하여 부착력 향상)
④ 프라이머(Primer) 도포 — 도료와 바탕 사이 접착제 역할

▶ 철재 바탕처리
• 녹 제거 (샌드블라스트·와이어 브러시)
• 방청 프라이머 도포

▶ 시험 포인트
바탕처리 = 도장의 가장 중요한 공정. 청소→보수→샌딩→프라이머 순서 암기.`},{id:"10-2",label:"도료 종류",children:[{id:"10-2-1",label:"유성페인트",explanation:`건성유(아마인유 등)와 안료로 만든 전통적 페인트.

▶ 특징
• 내수성·내구성 우수
• 냄새 강하고 건조 느림
• 유해물질(VOC) 발생
• 목재·철재 도장에 사용

▶ 시험 포인트
유성 = 기름 성분. 내구성 우수, 냄새·VOC가 단점.`},{id:"10-2-2",label:"수성페인트",explanation:`물을 용제로 사용하는 환경친화적 페인트.

▶ 특징
• 냄새 적고 VOC 낮음 — 실내 환경 우수
• 건조 빠름
• 유성보다 내수성 약함
• 현재 실내 도장의 주류

▶ 시험 포인트
수성 = 물 용제. 친환경·냄새 없음. 실내 표준 도료.`},{id:"10-2-3",label:"에폭시",explanation:`에폭시 수지와 경화제를 2액형으로 혼합하여 사용하는 고성능 도료.

▶ 특징
• 부착력·강도 최강
• 내화학성·내마모성 우수
• 2액형 혼합 후 가사시간 내에 사용
• 공장 바닥, 지하 주차장, 수조 내부에 사용

▶ 시험 포인트
에폭시 = 2액형(주제+경화제). 부착력·내화학성 최강. 공장 바닥 = 에폭시.`},{id:"10-2-4",label:"우레탄",explanation:`폴리우레탄 수지 기반의 도료. 신축성과 내마모성이 뛰어남.

▶ 특징
• 신축성 우수 → 균열 발생 면에도 추종
• 내마모성·내충격성 우수
• 옥상·발코니 방수도장에 사용
• 목재·콘크리트 마감에도 활용

▶ 시험 포인트
우레탄 = 신축성 도료. 옥상 방수도장 = 우레탄.`},{id:"10-2-5",label:"락카",explanation:`니트로셀룰로이스(섬유소)를 용제에 녹인 빠른 건조 도료.

▶ 특징
• 건조 속도 매우 빠름 (10~30분)
• 광택 우수
• 목재 투명 마감에 사용 (클리어 락카)
• 고VOC — 환기 필수
• 두꺼운 도막 형성 어려움

▶ 시험 포인트
락카 = 건조 빠름. 목재 투명 마감. 고VOC 주의.`}]},{id:"10-exam",label:"[시험 포인트]",children:[{id:"10-e1",label:"도료: 유성·수성·에폭시·우레탄·락카"},{id:"10-e2",label:"바탕처리 순서"}]}]},{id:"11",label:"11. 수장공사",children:[{id:"11-1",label:"바닥",children:[{id:"11-1-1",label:"비닐타일",explanation:`PVC(폴리염화비닐)를 주성분으로 한 바닥재 타일.

▶ 종류
• 동질타일: PVC가 균일하게 혼합 — 내마모성 우수
• 이질타일: 표면층과 심층의 재질이 다름 — 디자인 다양

▶ 특징
• 내마모성·내수성 우수
• 시공이 간단하고 경제적
• 차갑고 딱딱한 느낌

▶ 시험 포인트
비닐타일 = PVC 계열. 동질(내마모) vs 이질(디자인) 구분.`},{id:"11-1-2",label:"카펫",explanation:`섬유 재질의 부드러운 바닥 마감재.

▶ 특징
• 방음·흡음 효과 우수
• 단열·보온 성능
• 고급스러운 분위기
• 습기에 취약, 청소 어려움, 진드기 번식 가능

▶ 시공 방법
• 그리퍼(Gripper) 방식: 가장자리 고정재로 당겨 붙임
• 전면 접착 방식

▶ 시험 포인트
카펫 = 방음·보온. 습기 취약이 단점. 그리퍼 방식 시공.`},{id:"11-1-3",label:"목재마루 (원목·강마루·강화마루)",explanation:`목재 계열 바닥재의 3종류 비교.

▶ 원목마루
• 천연 목재를 그대로 사용
• 질감·자연미 최상
• 습기에 의한 수축·팽창 큼, 고가

▶ 강마루 (합판마루)
• 합판 + 목재 무늬목 표면층
• 원목보다 안정적 (변형 적음)
• 강화마루보다 질감 우수

▶ 강화마루
• HDF(고밀도 섬유판) + 인쇄 필름 표면
• 가장 저렴하고 내구성 좋음
• 습기에 약하고 질감은 인공적

▶ 시험 포인트
원목(천연·고급) > 강마루(합판+무늬목) > 강화마루(HDF+인쇄). 가격·내구성 역순.`}]},{id:"11-2",label:"천장",children:[{id:"11-2-1",label:"석고보드",explanation:`석고를 종이로 감싼 패널. 천장·벽 건식 마감의 표준 재료.

▶ 특징
• 내화성·방음성 우수
• 가볍고 시공 간단
• 수분에 약함 (습기 있는 곳은 내수 석고보드 사용)
• 가격 저렴

▶ 규격
• 표준 두께: 9.5mm, 12.5mm
• 표준 크기: 900×1800mm

▶ 시험 포인트
석고보드 = 내화+방음. 건식 마감 표준. 두께 9.5·12.5mm.`},{id:"11-2-2",label:"텍스",explanation:`암면(Rock Wool) 또는 광물 섬유로 만든 흡음 천장판.

▶ 특징
• 흡음성·단열성 우수
• T-BAR(금속 격자)에 얹는 방식 — 교체·보수 쉬움
• 사무실·공장·학교에 일반적으로 사용
• 수분에 약하고 충격에 부서지기 쉬움

▶ 시험 포인트
텍스 = T-BAR 천장 시스템. 흡음 최우선. 교체 간편.`}]},{id:"11-3",label:"벽",children:[{id:"11-3-1",label:"벽지",explanation:`벽면 마감을 위해 붙이는 시트형 재료.

▶ 종류
• 종이벽지: 통기성 좋으나 내구성 낮음
• 비닐벽지: 내수성·내구성 우수, 가장 일반적
• 천(직물)벽지: 고급스러운 질감, 방음 효과
• 실크벽지: 광택·고급감, 비닐 계열

▶ 시험 포인트
비닐벽지 = 실내 표준. 종이<비닐<천 순으로 내구성 높아짐.`},{id:"11-3-2",label:"합판",explanation:`얇은 목재 단판(Veneer)을 여러 겹 접착한 판재.

▶ 특징
• 강도·치수 안정성 우수
• 원목보다 저렴하고 넓은 면적 시공 가능
• 표면에 무늬목 또는 도장으로 마감
• 실내 벽 목재 마감의 기본 재료

▶ 시험 포인트
합판 = 단판 여러 겹. 결 방향 교차 → 강도 향상.`}]}]},{id:"12",label:"12. 지붕·커튼월공사",children:[{id:"12-1",label:"지붕공사",children:[{id:"12-1-1",label:"기와지붕",explanation:`점토 기와 또는 시멘트 기와를 서까래·기와잇기 위에 덮어 방수하는 전통적 지붕 공법.

▶ 특징
• 내구성·내화성 우수
• 무거워 구조체 하중 부담
• 경사 지붕에만 사용 (최소 경사 필요)
• 전통 건축·한옥·주택에 사용

▶ 기와 종류
• 한식 기와: 수키와·암키와
• 서양식(평기와): 갈매기 모양

▶ 시험 포인트
기와지붕 = 경사 지붕 전용. 내구성·내화성 장점, 자중 무거움이 단점.`},{id:"12-1-2",label:"금속지붕",explanation:`아연도금강판·스테인리스·알루미늄·동판 등 금속 재료로 마감하는 지붕 공법.

▶ 특징
• 경량 — 구조체 하중 부담 적음
• 방수 성능 우수
• 평지붕·경사지붕 모두 가능
• 공장·체육관·대형 지붕에 적합

▶ 이음 방법
• 심(Seam) 이음: 금속판 끝을 겹쳐 접어서 고정

▶ 시험 포인트
금속지붕 = 경량. 공장·대형 건물. 열팽창에 의한 이음 처리 중요.`},{id:"12-1-3",label:"아스팔트싱글",explanation:`유리섬유(Glass Fiber) 기재에 아스팔트를 코팅하고 색 자갈(Granule)을 뿌려 제작한 경사 지붕재.

▶ 특징
• 경량이고 시공이 간단
• 색상·형태 다양
• 주로 3~4寸 이상 경사 지붕에 사용
• 내구연한 20~30년

▶ 주요 용도
• 단독주택·타운하우스 경사 지붕

▶ 시험 포인트
아스팔트싱글 = 유리섬유+아스팔트 경사 지붕재. 경량·다양한 디자인.`}]},{id:"12-2",label:"커튼월공사",children:[{id:"12-2-1",label:"멀리언방식",explanation:`수직 부재(Mullion)를 구조 기준으로 하여 패널을 끼워 넣는 커튼월 방식.

▶ 특징
• 수직 선을 강조하는 외관
• 수직 하중을 멀리언이 지지
• 고층 건물에 적합

▶ 시험 포인트
멀리언 = 수직 부재. 수직선이 강조되는 외관.`},{id:"12-2-2",label:"스팬드럴방식",explanation:`수평 부재(Spandrel)를 구조 기준으로 하는 커튼월 방식. 층과 층 사이 수평 패널을 강조.

▶ 특징
• 수평 선을 강조하는 외관
• 각 층 슬래브에서 직접 지지
• 층 구분이 명확히 보임

▶ 시험 포인트
스팬드럴 = 수평 부재. 수평선 강조. 멀리언(수직) vs 스팬드럴(수평) 구분 암기.`}]},{id:"12-exam",label:"[시험 포인트]",children:[{id:"12-e1",label:"지붕: 기와·금속·아스팔트싱글"},{id:"12-e2",label:"커튼월: 멀리언방식·스팬드럴방식"}]}]},{id:"13",label:"13. 공사관리",children:[{id:"13-1",label:"공정관리",children:[{id:"13-1-1",label:"바차트 (Bar Chart)",explanation:`공정 진행 상황을 가로 막대(Bar)로 나타내는 가장 단순한 공정표.
가로축 = 시간(날짜·주·월), 세로축 = 작업 항목.

▶ 장점
• 작성이 매우 쉽고 직관적 → 건축주·비전문가도 이해
• 각 작업의 시작일·완료일·소요 기간 한눈에 파악
• 진도율을 막대 색칠로 쉽게 표현
• 소규모 단순 공사에 충분히 활용 가능

▶ 단점 (시험 핵심)
① 작업 간 선후 관계(Dependency) 표현 불가
   예: "거푸집 해체 후에만 철근 배근 가능" → 바차트로 표현 불가
② 주공정선(Critical Path) 파악 불가
   → 어느 작업이 지연되면 전체 공기가 늦어지는지 알 수 없음
③ 작업 지연의 연쇄 영향 분석 불가
   → 한 작업 지연 시 다른 작업에 미치는 영향 파악 어려움
④ 대규모·복잡 공사에 부적합 (수백 개 작업 관리 한계)

▶ 기간별 사용 지침
소규모(공사비 20억 미만): 바차트만으로 충분
중대형: 바차트(전체 조감) + CPM(세부 관리) 병행

▶ 실무 예시
단독주택 신축(6개월): 공사 항목 20개 → 바차트 적합
100층 초고층(5년): 공사 항목 수천 개 → CPM 네트워크 필수

★ 시험 포인트
바차트 단점 = '상호 관계 표현 불가 + 주공정 파악 불가'. 이 두 가지가 네트워크 공정표 필요 이유`},{id:"13-1-2",label:"네트워크공정표",children:[{id:"13-1-2-1",label:"CPM (주공정선)",explanation:`Critical Path Method. 네트워크 공정표에서 주공정선(Critical Path)을 찾아 공기 관리·비용 최적화하는 기법.

▶ 핵심 용어
• 주공정선 (Critical Path): 시작에서 완료까지 가장 긴 경로 = 전체 공기 결정
• 플로트 (Float, 여유시간): 작업 지연 허용 한계
  - 전체 플로트 (TF, Total Float): 전체 공기를 지연시키지 않는 범위의 여유시간
  - 자유 플로트 (FF, Free Float): 후속 작업 시작 시간을 지연시키지 않는 여유시간
• 주공정 작업: TF = 0 인 작업들의 연속 경로

▶ 계산 절차
① 전진 계산 (Forward Pass): 시작→완료 방향
   • EST (Earliest Start Time): 가장 빠른 시작 시각
   • EFT (Earliest Finish Time): = EST + 소요기간
② 후진 계산 (Backward Pass): 완료→시작 방향
   • LFT (Latest Finish Time): 가장 늦은 완료 시각
   • LST (Latest Start Time): = LFT - 소요기간
③ TF = LST - EST = LFT - EFT
④ TF = 0인 작업 연결 = 주공정선 (Critical Path)

▶ 공기 단축 원칙
주공정선 위의 작업만 단축해야 전체 공기 단축
비주공정 작업 단축 → 공기 단축 없음 (비용만 낭비)

▶ 비용구배 (Cost Slope)
비용구배 = (급속공사비 - 정상공사비) ÷ (정상공기 - 급속공기)
비용구배 낮은 주공정 작업부터 단축 = 가장 경제적 공기 단축

▶ PERT와 비교
CPM: 1점 추정(결정론적), 경험 있는 공사, 비용 분석 가능
PERT: 3점 추정(확률론적), 신규·불확실 프로젝트

★ 시험 포인트
TF=0 = 주공정 작업. 공기 단축은 반드시 주공정선 위 작업만. 비용구배 낮은 것부터 선택`},{id:"13-1-2-2",label:"PERT",explanation:`Program Evaluation and Review Technique.
작업 기간이 불확실할 때 3점 추정으로 확률적 공기를 계산하는 기법.

▶ 3점 추정 (Three-Point Estimation)
• 낙관치 (a, Optimistic): 최선의 조건에서의 최단 기간
• 최빈치 (m, Most Likely): 가장 빈번히 발생하는 기간 (가중치 4배)
• 비관치 (b, Pessimistic): 최악의 조건에서의 최장 기간

▶ 기대값 (Expected Time) 공식 ★ 암기 필수
te = (a + 4m + b) ÷ 6

▶ 계산 예제
어떤 작업: a=6일, m=10일, b=20일
te = (6 + 4×10 + 20) ÷ 6 = (6 + 40 + 20) ÷ 6 = 66 ÷ 6 = 11일

▶ 표준편차 공식
σ = (b - a) ÷ 6
→ 위 예제: σ = (20-6)/6 = 14/6 ≈ 2.3일

▶ 완료 확률 계산
전체 공기(T)에 대해 Z = (T - Σte) ÷ √Σσ² 계산 후 정규분포표에서 확률 조회

▶ PERT의 적합한 프로젝트
• 전례 없는 신규 프로젝트
• 연구·개발(R&D) 프로젝트
• 우주·국방·첨단기술 프로젝트
• 폴라리스 미사일 개발(1957) — 최초 적용

▶ CPM과의 차이
PERT: 3점(a,m,b), 확률론적, 시간 관리 중심
CPM: 1점, 결정론적, 시간+비용 관리 가능

★ 시험 포인트
te = (a+4m+b)/6 공식이 핵심. 숫자 대입 계산 문제 반드시 연습. PERT=3점 추정·확률론적`}]},{id:"13-1-3",label:"공기단축",explanation:`공사 기간을 줄이기 위한 기법. 주공정선(CP) 작업을 단축해야 전체 공기가 단축됨.

▶ 방법
• 추가 인원·장비 투입
• 교대 근무·야간 작업
• 시공법 변경

▶ 비용구배 (Cost Slope)
Cost Slope = (급속공비 - 정상공비) / (정상공기 - 급속공기)
→ 낮은 값부터 단축 = 가장 경제적

▶ 시험 포인트
CP 작업만 단축 효과 있음. 비용구배 낮은 것부터 선택. 공기↓ = 비용↑ (반비례).`}]},{id:"13-2",label:"품질관리",children:[{id:"13-2-1",label:"관리도 (X-R 관리도)",explanation:`공정의 품질 변동이 관리 한계 내에 있는지 시간 순서로 나타내는 그래프.

▶ 구성
• UCL (Upper Control Limit): 관리 상한
• CL (Center Line): 중심선 (평균)
• LCL (Lower Control Limit): 관리 하한

▶ X-R 관리도
• X 관리도: 시료 평균값 관리
• R 관리도: 시료 범위(최대-최소) 관리

▶ 이상 판정
• 점이 UCL 또는 LCL 밖으로 벗어남
• 점이 한쪽으로 연속 7개 이상 나타남

▶ 시험 포인트
X-R 관리도 = 공정 이상 여부 판정 도구. UCL/LCL 벗어나면 이상.`},{id:"13-2-2",label:"비파괴검사",children:[{id:"13-2-2-1",label:"방사선검사 (RT)",explanation:`Radiographic Test. X선 또는 γ선(감마선)을 재료에 투과시켜 내부 결함을 필름에 기록하는 검사.

▶ 특징
• 내부 결함(기공·균열·용입불량) 확인 가능
• 필름 기록 → 증거 보존
• 방사선 피폭 위험 — 방호 필요
• 용접 이음부 검사에 표준적 사용

▶ 시험 포인트
RT = X선·γ선. 내부 결함. 필름 기록. 방사선 위험이 단점.`},{id:"13-2-2-2",label:"초음파검사 (UT)",explanation:`Ultrasonic Test. 초음파를 재료에 입사하여 내부 결함에서 반사되는 신호를 분석하는 검사.

▶ 특징
• 내부 깊은 결함 탐지 우수
• 방사선 없어 안전
• 두꺼운 부재도 검사 가능
• 용접부 균열·용입불량·라미네이션 검사

▶ 시험 포인트
UT = 초음파. 방사선 없음(안전). 두꺼운 부재 내부 결함.`},{id:"13-2-2-3",label:"자분탐상검사 (MT)",explanation:`Magnetic particle Test. 자성체 재료를 자화한 후 표면에 철분(자분)을 뿌려 표면 결함을 탐지하는 검사.

▶ 특징
• 표면 및 표면 직하 결함 탐지
• 자성체(철강)에만 적용 — 비자성체 불가
• 시공이 간단하고 경제적
• 결함 위치에 자분이 집적되어 육안 확인

▶ 시험 포인트
MT = 자성체 전용. 표면 결함. 자분이 결함에 붙는 원리.`},{id:"13-2-2-4",label:"침투탐상검사 (PT)",explanation:`Penetrant Test. 침투액을 표면에 도포하고 세척 후 현상액을 뿌려 표면 균열을 가시화하는 검사.

▶ 특징
• 자성체·비자성체 모두 적용 가능 (MT가 불가한 알루미늄·스테인리스에 사용)
• 표면 개구 결함만 탐지 (내부 결함 불가)
• 간단하고 경제적

▶ 시험 순서
전처리 → 침투액 도포 → 세척 → 현상액 도포 → 관찰

▶ 시험 포인트
PT = 자성체·비자성체 모두 가능. 표면 개구 결함만. MT와 적용 재료 차이 암기.`}]},{id:"13-2-3",label:"콘크리트 시험 (슬럼프·공기량·압축강도)",explanation:`콘크리트 타설 전·후 품질 확인을 위한 현장 시험 3종.

▶ 슬럼프 시험 (Slump Test)
측정 목적: 굳지 않은 콘크리트의 반죽 질기(유동성, 워커빌리티) 측정
시험 방법:
① 슬럼프 콘(원뿔형, 밑면 200mm, 윗면 100mm, 높이 300mm) 내부 채우기 (3층 나누어)
② 각 층을 25회 다짐봉으로 다짐
③ 슬럼프 콘을 수직으로 들어 올림
④ 침하량(cm) 측정 = 슬럼프 값

기준값: 일반 구조물 8~15cm (너무 높으면 강도↓)

▶ 공기량 시험 (Air Content Test)
측정 목적: AE 콘크리트의 공기량(%) 확인
방법: 공기량 측정기(워싱턴형·보일의 법칙 이용)
기준값: 4~7% (이하 동결 위험, 이상 강도 저하)
주의: 공기량 1% 증가 → 강도 약 4~5% 감소

▶ 압축강도 시험 (Compressive Strength Test)
측정 목적: 경화된 콘크리트의 설계기준강도(fck) 만족 여부 확인
공시체: 원기둥형 φ100×200mm 또는 φ150×300mm
재령: 표준 28일 (단기 확인용 7일 병행)
방법: 공시체를 압축 시험기에 설치 → 하중 증가 → 파괴 하중 측정
판정: 28일 강도가 fck의 85% 이상·평균 fck 이상 = 합격

▶ 현장 시험 시기
슬럼프·공기량: 타설 전(레미콘 도착 후 즉시) — 매 레미콘 차량 또는 일정 주기
압축강도: 타설 시 공시체 채취 → 28일 후 시험

★ 시험 포인트
슬럼프 8~15cm, 공기량 4~7%, 압축강도 28일 재령. 공시체 크기 φ150×300mm 암기`}]},{id:"13-3",label:"안전관리",explanation:`산업재해를 예방하고 근로자의 안전을 확보하기 위한 관리 활동.

▶ 5대 관리
원가관리·공정관리·품질관리·안전관리·환경관리

▶ 재해 발생 원인
• 불안전한 행동 (인적 요인): 88%
• 불안전한 상태 (물적 요인): 10%
• 천재지변: 2%

▶ 재해율 지표
• 도수율 = 재해건수 / 연간 근로시간 × 10⁶
• 강도율 = 근로손실일수 / 연간 근로시간 × 10³

▶ 안전 장구
안전모·안전대·안전화·안전장갑·방진마스크

▶ 시험 포인트
불안전 행동(인적) 88%가 재해 원인. 도수율·강도율 공식 암기.`},{id:"13-exam",label:"[시험 포인트]",children:[{id:"13-e1",label:"3대 관리: 원가·공정·품질"},{id:"13-e2",label:"5대 관리: +안전·환경"},{id:"13-e3",label:"노무자: 직용·정용·날품"},{id:"13-e4",label:"도급: 일식·분할·공동도급·턴키"},{id:"13-e5",label:"VE(가치공학) 특징"},{id:"13-e6",label:"EC화·CIC·CALS·PMIS"},{id:"13-e7",label:"CPM·PERT — 플로트·주공정선"},{id:"13-e8",label:"품질도구: X-R관리도·파레토·히스토그램"}]}]},{id:"14",label:"14. 목공사",children:[{id:"14-1",label:"목재의 결점",children:[{id:"14-1-1",label:"옹이",explanation:`가지가 줄기에 흡수된 흔적. 목재 단면에 나뭇가지 모양의 단단한 부분이 보임.

▶ 영향
• 섬유 방향이 흐트러져 강도 저하
• 특히 인장강도에 불리
• 옹이 주변 균열 발생 가능

▶ 구분
• 산옹이: 단단하게 붙어있어 강도 영향 적음
• 죽은옹이: 떨어져 나가 구멍 형성 → 강도에 가장 불리

▶ 시험 포인트
옹이 = 가지 흔적. 죽은옹이가 가장 위험. 인장강도 저하.`},{id:"14-1-2",label:"갈라짐",explanation:`건조 과정에서 수분 증발에 의한 수축으로 발생하는 균열.

▶ 종류
• 할렬: 목재 끝단이 세로 방향으로 갈라짐
• 윤할: 나이테를 따라 원형으로 갈라짐
• 표면할: 표면에 발생하는 균열

▶ 원인
• 급격한 건조
• 내부와 표면의 수축률 차이

▶ 시험 포인트
갈라짐 = 건조 수축 균열. 강도·방부 처리 모두에 악영향.`},{id:"14-1-3",label:"껍질박이",explanation:`나무 성장 중 나무껍질(수피)이 목재 안에 박힌 결함.

▶ 특징
• 수피가 목재 섬유 사이에 끼어있는 형태
• 섬유 연속성 방해 → 강도 저하
• 육안으로 확인 가능 (검은 줄 형태)

▶ 시험 포인트
껍질박이 = 수피가 내부에 박힘. 섬유 연속성 단절 → 강도 저하.`},{id:"14-1-4",label:"썩음",explanation:`부패균(Fungus)에 의해 목재 조직이 분해되는 결함.

▶ 발생 조건
• 온도: 20~35°C
• 수분: 함수율 20% 이상
• 공기(산소) 존재

▶ 종류
• 갈색부패: 셀룰로오스 분해 → 갈색·입방형 균열
• 백색부패: 리그닌 분해 → 흰색·섬유질 잔여

▶ 방지
• 함수율 20% 이하 유지
• 방부 처리

▶ 시험 포인트
썩음 = 균류. 함수율 20% 이상이 발생 조건. 방부 처리로 예방.`}]},{id:"14-2",label:"함수율·섬유포화점 (28~30%)",explanation:`목재 내부의 수분 함량 비율과 강도·치수 안정성의 관계.

▶ 함수율 계산
함수율(%) = (습윤 중량 - 전건 중량) / 전건 중량 × 100
전건 중량: 105±2°C에서 건조하여 무게가 변하지 않을 때의 무게

▶ 목재 내 수분의 종류
• 자유수 (Free Water): 세포 공동 속 수분 — 먼저 건조됨
• 결합수 (Bound Water): 세포벽 내 흡착 수분 — 나중에 건조됨

▶ 섬유포화점 (Fiber Saturation Point, FSP) ★핵심
약 28~30%
세포벽이 수분으로 포화된 상태 = 자유수는 없고 결합수만 남은 시점

▶ 함수율과 강도·치수의 관계
함수율 > FSP (28~30% 이상): 강도·치수 일정 (자유수 출입만)
함수율 < FSP: 함수율 감소할수록 강도↑, 수축 발생

예시:
함수율 30% → 15%로 건조 시
강도: 약 2배 증가 (인장·압축·휨 모두)
치수: 수축 발생 → 뒤틀림·균열 위험

▶ 건조 목적
① 강도 향상
② 치수 안정성 (수축·팽창 방지)
③ 균류·해충 예방 (함수율 20% 이하 유지 시 균류 생장 억제)
④ 도장·접착 성능 향상
⑤ 중량 감소

▶ 건조 방법
자연건조: 야외 공기 중 건조 (수개월~수년)
인공건조: 건조 가마(Kiln) — 시간 단축, 품질 균일

▶ 사용 기준
실내 목공: 함수율 15% 이하
내장재: 12~15%
가구·마루: 10~12%

★ 시험 포인트
섬유포화점 28~30% — 이 이하로 건조 시 강도↑·수축 발생. 함수율 20% 이상이면 균류 발생 조건`},{id:"14-3",label:"이음과 맞춤",children:[{id:"14-3-1",label:"장부이음",explanation:`한 부재의 끝에 돌기(장부)를 만들고, 다른 부재에 구멍(장부구멍)을 파서 끼워 맞추는 이음.

▶ 특징
• 힘 전달이 확실
• 빠짐 방지 효과
• 수평·수직 부재 접합에 사용

▶ 시험 포인트
장부이음 = 돌기+구멍 끼워맞춤. 확실한 힘 전달.`},{id:"14-3-2",label:"반턱이음",explanation:`두 부재의 두께를 각각 반씩 따내어 맞대어 접합하는 이음.

▶ 특징
• 같은 두께로 이어 부재 단면 유지
• 시공이 간단
• 인장력에 약함 (빠질 수 있음)

▶ 시험 포인트
반턱 = 절반씩 따내어 겹침. 단면 변화 없음이 장점.`},{id:"14-3-3",label:"주먹장이음",explanation:`한 부재의 끝을 쐐기형(주먹장 모양)으로 만들어 다른 부재에 끼우는 이음. 빠짐 방지 기능.

▶ 특징
• 쐐기형 단면으로 인장력에도 저항
• 목재 구조물 보·처마도리 등에 사용
• 전통 목구조의 대표 이음법

▶ 시험 포인트
주먹장이음 = 쐐기형. 인장력 저항 가능. 전통 목구조 대표.`}]},{id:"14-4",label:"방부·방충 처리법",explanation:`목재의 부패(균류)와 해충(흰개미 등)에 의한 손상을 예방하기 위한 처리.

▶ 방부 처리법
• 가압주입법: 방부제를 압력으로 목재 내부에 주입 — 가장 효과적
  (CCA, ACQ 방부제)
• 도포법: 표면에 방부제 바름 — 간단하나 효과 제한적
• 침지법: 방부액에 담가 스며들게 함

▶ 방충 처리
• 방충제(살충제) 도포 또는 주입
• 바닥과 이격하여 통풍 확보

▶ 시험 포인트
가압주입법 = 가장 효과적인 방부 처리. CCA·ACQ 방부제.`},{id:"14-exam",label:"[시험 포인트]",children:[{id:"14-e1",label:"결점: 옹이·갈라짐·껍질박이·썩음"},{id:"14-e2",label:"섬유포화점 28~30%"},{id:"14-e3",label:"이음과 맞춤 종류"},{id:"14-e4",label:"방부·방충 처리법"}]}]},{id:"15",label:"15. 건축적산",children:[{id:"15-1",label:"수량산출 원칙",explanation:`공사에 소요되는 재료·노무·장비의 수량을 정확하게 계산하기 위한 기본 원칙.

▶ 적산 목적
• 공사비 예산 수립
• 입찰·계약의 근거
• 자재 발주량 결정

▶ 기본 원칙
• 설계 도면과 시방서 기준
• 실제 시공 수량 기준 (마무리 치수)
• 재료별·공종별로 구분
• 단위: 체적(㎥), 면적(㎡), 길이(m), 개수(개·ton 등)

▶ 로스율 (Loss Rate)
절단·운반·작업 손실을 고려한 할증률 적용

▶ 시험 포인트
적산 = 수량 계산. 로스율 = 할증. 마무리 치수(정미량)가 기준.`},{id:"15-2",label:"공종별 적산",children:[{id:"15-2-1",label:"콘크리트 적산",explanation:`콘크리트 타설에 필요한 체적(㎥)을 계산.

▶ 기본 공식
체적(㎥) = 길이(m) × 너비(m) × 두께(m)

▶ 주의사항
• 거푸집 두께 제외 (안쪽 치수 기준)
• 개구부(창·문) 면적은 공제
• 기둥·보·슬래브 중복 계산 주의

▶ 배합량 계산
재료량 = 체적 × 단위 재료량 (배합표 기준)

▶ 시험 포인트
콘크리트 = ㎥ 단위. 개구부 공제, 이중 계산 주의.`},{id:"15-2-2",label:"철근 적산",explanation:`철근의 총 중량(ton 또는 kg)을 계산.

▶ 계산 순서
① 철근 종류·직경·길이 파악
② 개수 × 길이 = 총 연장(m)
③ 총 연장 × 단위 중량(kg/m) = 총 중량

▶ 단위 중량 (암기)
• HD10: 0.617 kg/m
• HD13: 0.995 kg/m
• HD16: 1.56 kg/m
• HD19: 2.25 kg/m

▶ 주의
• 이음 길이 포함
• 갈고리(Hook) 길이 포함

▶ 시험 포인트
철근 = kg·ton 단위. 직경별 단위 중량 암기 필수.`},{id:"15-2-3",label:"거푸집 적산",explanation:`거푸집이 접촉하는 콘크리트 면적(㎡)을 계산.

▶ 원칙
• 콘크리트와 접하는 표면적 기준
• 기초·기둥·보·슬래브·벽 각각 산출

▶ 슬래브
하부면 면적 (= 평면 면적)

▶ 기둥
(기둥 둘레) × 높이

▶ 보
(보 밑면 + 보 양 측면) × 길이
단, 슬래브와 접하는 면 제외

▶ 시험 포인트
거푸집 = 접촉 면적(㎡). 콘크리트와 닿는 면만 계산. 슬래브 하부는 평면적.`},{id:"15-2-4",label:"조적 적산",explanation:`벽돌·블록의 매수 또는 쌓기 면적(㎡)을 계산.

▶ 벽돌 수량 (1㎡당)
• 0.5B(길이쌓기): 75매/㎡
• 1.0B(마구리쌓기): 149매/㎡
• 1.5B: 224매/㎡
(줄눈 포함 기준, 표준 벽돌 190×90×57mm)

▶ 계산 방법
수량 = 쌓기 면적(㎡) × 단위 수량(매/㎡) × (1 + 할증률)

▶ 개구부
창·문 등의 개구부는 면적에서 공제

▶ 시험 포인트
1㎡당 0.5B = 75매, 1.0B = 149매. 개구부 공제. 할증 5~10% 가산.`}]},{id:"15-exam",label:"[시험 포인트]",children:[{id:"15-e1",label:"적산총칙: 수량산출 원칙"},{id:"15-e2",label:"공종별: 콘크리트·철근·거푸집·조적"}]}]}]};var zu,Yp;function sf(){if(Yp)return zu;Yp=1;var t="\0",r="\0",o="";class s{constructor(m){Ue(this,"_isDirected",!0);Ue(this,"_isMultigraph",!1);Ue(this,"_isCompound",!1);Ue(this,"_label");Ue(this,"_defaultNodeLabelFn",()=>{});Ue(this,"_defaultEdgeLabelFn",()=>{});Ue(this,"_nodes",{});Ue(this,"_in",{});Ue(this,"_preds",{});Ue(this,"_out",{});Ue(this,"_sucs",{});Ue(this,"_edgeObjs",{});Ue(this,"_edgeLabels",{});Ue(this,"_nodeCount",0);Ue(this,"_edgeCount",0);Ue(this,"_parent");Ue(this,"_children");m&&(this._isDirected=Object.hasOwn(m,"directed")?m.directed:!0,this._isMultigraph=Object.hasOwn(m,"multigraph")?m.multigraph:!1,this._isCompound=Object.hasOwn(m,"compound")?m.compound:!1),this._isCompound&&(this._parent={},this._children={},this._children[r]={})}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(m){return this._label=m,this}graph(){return this._label}setDefaultNodeLabel(m){return this._defaultNodeLabelFn=m,typeof m!="function"&&(this._defaultNodeLabelFn=()=>m),this}nodeCount(){return this._nodeCount}nodes(){return Object.keys(this._nodes)}sources(){var m=this;return this.nodes().filter(h=>Object.keys(m._in[h]).length===0)}sinks(){var m=this;return this.nodes().filter(h=>Object.keys(m._out[h]).length===0)}setNodes(m,h){var v=arguments,w=this;return m.forEach(function(x){v.length>1?w.setNode(x,h):w.setNode(x)}),this}setNode(m,h){return Object.hasOwn(this._nodes,m)?(arguments.length>1&&(this._nodes[m]=h),this):(this._nodes[m]=arguments.length>1?h:this._defaultNodeLabelFn(m),this._isCompound&&(this._parent[m]=r,this._children[m]={},this._children[r][m]=!0),this._in[m]={},this._preds[m]={},this._out[m]={},this._sucs[m]={},++this._nodeCount,this)}node(m){return this._nodes[m]}hasNode(m){return Object.hasOwn(this._nodes,m)}removeNode(m){var h=this;if(Object.hasOwn(this._nodes,m)){var v=w=>h.removeEdge(h._edgeObjs[w]);delete this._nodes[m],this._isCompound&&(this._removeFromParentsChildList(m),delete this._parent[m],this.children(m).forEach(function(w){h.setParent(w)}),delete this._children[m]),Object.keys(this._in[m]).forEach(v),delete this._in[m],delete this._preds[m],Object.keys(this._out[m]).forEach(v),delete this._out[m],delete this._sucs[m],--this._nodeCount}return this}setParent(m,h){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(h===void 0)h=r;else{h+="";for(var v=h;v!==void 0;v=this.parent(v))if(v===m)throw new Error("Setting "+h+" as parent of "+m+" would create a cycle");this.setNode(h)}return this.setNode(m),this._removeFromParentsChildList(m),this._parent[m]=h,this._children[h][m]=!0,this}_removeFromParentsChildList(m){delete this._children[this._parent[m]][m]}parent(m){if(this._isCompound){var h=this._parent[m];if(h!==r)return h}}children(m=r){if(this._isCompound){var h=this._children[m];if(h)return Object.keys(h)}else{if(m===r)return this.nodes();if(this.hasNode(m))return[]}}predecessors(m){var h=this._preds[m];if(h)return Object.keys(h)}successors(m){var h=this._sucs[m];if(h)return Object.keys(h)}neighbors(m){var h=this.predecessors(m);if(h){const w=new Set(h);for(var v of this.successors(m))w.add(v);return Array.from(w.values())}}isLeaf(m){var h;return this.isDirected()?h=this.successors(m):h=this.neighbors(m),h.length===0}filterNodes(m){var h=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});h.setGraph(this.graph());var v=this;Object.entries(this._nodes).forEach(function([C,E]){m(C)&&h.setNode(C,E)}),Object.values(this._edgeObjs).forEach(function(C){h.hasNode(C.v)&&h.hasNode(C.w)&&h.setEdge(C,v.edge(C))});var w={};function x(C){var E=v.parent(C);return E===void 0||h.hasNode(E)?(w[C]=E,E):E in w?w[E]:x(E)}return this._isCompound&&h.nodes().forEach(C=>h.setParent(C,x(C))),h}setDefaultEdgeLabel(m){return this._defaultEdgeLabelFn=m,typeof m!="function"&&(this._defaultEdgeLabelFn=()=>m),this}edgeCount(){return this._edgeCount}edges(){return Object.values(this._edgeObjs)}setPath(m,h){var v=this,w=arguments;return m.reduce(function(x,C){return w.length>1?v.setEdge(x,C,h):v.setEdge(x,C),C}),this}setEdge(){var m,h,v,w,x=!1,C=arguments[0];typeof C=="object"&&C!==null&&"v"in C?(m=C.v,h=C.w,v=C.name,arguments.length===2&&(w=arguments[1],x=!0)):(m=C,h=arguments[1],v=arguments[3],arguments.length>2&&(w=arguments[2],x=!0)),m=""+m,h=""+h,v!==void 0&&(v=""+v);var E=u(this._isDirected,m,h,v);if(Object.hasOwn(this._edgeLabels,E))return x&&(this._edgeLabels[E]=w),this;if(v!==void 0&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(m),this.setNode(h),this._edgeLabels[E]=x?w:this._defaultEdgeLabelFn(m,h,v);var S=f(this._isDirected,m,h,v);return m=S.v,h=S.w,Object.freeze(S),this._edgeObjs[E]=S,l(this._preds[h],m),l(this._sucs[m],h),this._in[h][E]=S,this._out[m][E]=S,this._edgeCount++,this}edge(m,h,v){var w=arguments.length===1?p(this._isDirected,arguments[0]):u(this._isDirected,m,h,v);return this._edgeLabels[w]}edgeAsObj(){const m=this.edge(...arguments);return typeof m!="object"?{label:m}:m}hasEdge(m,h,v){var w=arguments.length===1?p(this._isDirected,arguments[0]):u(this._isDirected,m,h,v);return Object.hasOwn(this._edgeLabels,w)}removeEdge(m,h,v){var w=arguments.length===1?p(this._isDirected,arguments[0]):u(this._isDirected,m,h,v),x=this._edgeObjs[w];return x&&(m=x.v,h=x.w,delete this._edgeLabels[w],delete this._edgeObjs[w],c(this._preds[h],m),c(this._sucs[m],h),delete this._in[h][w],delete this._out[m][w],this._edgeCount--),this}inEdges(m,h){var v=this._in[m];if(v){var w=Object.values(v);return h?w.filter(x=>x.v===h):w}}outEdges(m,h){var v=this._out[m];if(v){var w=Object.values(v);return h?w.filter(x=>x.w===h):w}}nodeEdges(m,h){var v=this.inEdges(m,h);if(v)return v.concat(this.outEdges(m,h))}}function l(g,m){g[m]?g[m]++:g[m]=1}function c(g,m){--g[m]||delete g[m]}function u(g,m,h,v){var w=""+m,x=""+h;if(!g&&w>x){var C=w;w=x,x=C}return w+o+x+o+(v===void 0?t:v)}function f(g,m,h,v){var w=""+m,x=""+h;if(!g&&w>x){var C=w;w=x,x=C}var E={v:w,w:x};return v&&(E.name=v),E}function p(g,m){return u(g,m.v,m.w,m.name)}return zu=s,zu}var Au,Xp;function zS(){return Xp||(Xp=1,Au="2.2.4"),Au}var Ou,Gp;function AS(){return Gp||(Gp=1,Ou={Graph:sf(),version:zS()}),Ou}var Du,Qp;function OS(){if(Qp)return Du;Qp=1;var t=sf();Du={write:r,read:l};function r(c){var u={options:{directed:c.isDirected(),multigraph:c.isMultigraph(),compound:c.isCompound()},nodes:o(c),edges:s(c)};return c.graph()!==void 0&&(u.value=structuredClone(c.graph())),u}function o(c){return c.nodes().map(function(u){var f=c.node(u),p=c.parent(u),g={v:u};return f!==void 0&&(g.value=f),p!==void 0&&(g.parent=p),g})}function s(c){return c.edges().map(function(u){var f=c.edge(u),p={v:u.v,w:u.w};return u.name!==void 0&&(p.name=u.name),f!==void 0&&(p.value=f),p})}function l(c){var u=new t(c.options).setGraph(c.value);return c.nodes.forEach(function(f){u.setNode(f.v,f.value),f.parent&&u.setParent(f.v,f.parent)}),c.edges.forEach(function(f){u.setEdge({v:f.v,w:f.w,name:f.name},f.value)}),u}return Du}var Fu,Kp;function DS(){if(Kp)return Fu;Kp=1,Fu=t;function t(r){var o={},s=[],l;function c(u){Object.hasOwn(o,u)||(o[u]=!0,l.push(u),r.successors(u).forEach(c),r.predecessors(u).forEach(c))}return r.nodes().forEach(function(u){l=[],c(u),l.length&&s.push(l)}),s}return Fu}var ju,Zp;function M0(){if(Zp)return ju;Zp=1;class t{constructor(){Ue(this,"_arr",[]);Ue(this,"_keyIndices",{})}size(){return this._arr.length}keys(){return this._arr.map(function(o){return o.key})}has(o){return Object.hasOwn(this._keyIndices,o)}priority(o){var s=this._keyIndices[o];if(s!==void 0)return this._arr[s].priority}min(){if(this.size()===0)throw new Error("Queue underflow");return this._arr[0].key}add(o,s){var l=this._keyIndices;if(o=String(o),!Object.hasOwn(l,o)){var c=this._arr,u=c.length;return l[o]=u,c.push({key:o,priority:s}),this._decrease(u),!0}return!1}removeMin(){this._swap(0,this._arr.length-1);var o=this._arr.pop();return delete this._keyIndices[o.key],this._heapify(0),o.key}decrease(o,s){var l=this._keyIndices[o];if(s>this._arr[l].priority)throw new Error("New priority is greater than current priority. Key: "+o+" Old: "+this._arr[l].priority+" New: "+s);this._arr[l].priority=s,this._decrease(l)}_heapify(o){var s=this._arr,l=2*o,c=l+1,u=o;l<s.length&&(u=s[l].priority<s[u].priority?l:u,c<s.length&&(u=s[c].priority<s[u].priority?c:u),u!==o&&(this._swap(o,u),this._heapify(u)))}_decrease(o){for(var s=this._arr,l=s[o].priority,c;o!==0&&(c=o>>1,!(s[c].priority<l));)this._swap(o,c),o=c}_swap(o,s){var l=this._arr,c=this._keyIndices,u=l[o],f=l[s];l[o]=f,l[s]=u,c[f.key]=o,c[u.key]=s}}return ju=t,ju}var $u,Jp;function T0(){if(Jp)return $u;Jp=1;var t=M0();$u=o;var r=()=>1;function o(l,c,u,f){return s(l,String(c),u||r,f||function(p){return l.outEdges(p)})}function s(l,c,u,f){var p={},g=new t,m,h,v=function(w){var x=w.v!==m?w.v:w.w,C=p[x],E=u(w),S=h.distance+E;if(E<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+w+" Weight: "+E);S<C.distance&&(C.distance=S,C.predecessor=m,g.decrease(x,S))};for(l.nodes().forEach(function(w){var x=w===c?0:Number.POSITIVE_INFINITY;p[w]={distance:x},g.add(w,x)});g.size()>0&&(m=g.removeMin(),h=p[m],h.distance!==Number.POSITIVE_INFINITY);)f(m).forEach(v);return p}return $u}var Hu,em;function FS(){if(em)return Hu;em=1;var t=T0();Hu=r;function r(o,s,l){return o.nodes().reduce(function(c,u){return c[u]=t(o,u,s,l),c},{})}return Hu}var Vu,tm;function I0(){if(tm)return Vu;tm=1,Vu=t;function t(r){var o=0,s=[],l={},c=[];function u(f){var p=l[f]={onStack:!0,lowlink:o,index:o++};if(s.push(f),r.successors(f).forEach(function(h){Object.hasOwn(l,h)?l[h].onStack&&(p.lowlink=Math.min(p.lowlink,l[h].index)):(u(h),p.lowlink=Math.min(p.lowlink,l[h].lowlink))}),p.lowlink===p.index){var g=[],m;do m=s.pop(),l[m].onStack=!1,g.push(m);while(f!==m);c.push(g)}}return r.nodes().forEach(function(f){Object.hasOwn(l,f)||u(f)}),c}return Vu}var Bu,nm;function jS(){if(nm)return Bu;nm=1;var t=I0();Bu=r;function r(o){return t(o).filter(function(s){return s.length>1||s.length===1&&o.hasEdge(s[0],s[0])})}return Bu}var Wu,rm;function $S(){if(rm)return Wu;rm=1,Wu=r;var t=()=>1;function r(s,l,c){return o(s,l||t,c||function(u){return s.outEdges(u)})}function o(s,l,c){var u={},f=s.nodes();return f.forEach(function(p){u[p]={},u[p][p]={distance:0},f.forEach(function(g){p!==g&&(u[p][g]={distance:Number.POSITIVE_INFINITY})}),c(p).forEach(function(g){var m=g.v===p?g.w:g.v,h=l(g);u[p][m]={distance:h,predecessor:p}})}),f.forEach(function(p){var g=u[p];f.forEach(function(m){var h=u[m];f.forEach(function(v){var w=h[p],x=g[v],C=h[v],E=w.distance+x.distance;E<C.distance&&(C.distance=E,C.predecessor=x.predecessor)})})}),u}return Wu}var Uu,im;function L0(){if(im)return Uu;im=1;function t(o){var s={},l={},c=[];function u(f){if(Object.hasOwn(l,f))throw new r;Object.hasOwn(s,f)||(l[f]=!0,s[f]=!0,o.predecessors(f).forEach(u),delete l[f],c.push(f))}if(o.sinks().forEach(u),Object.keys(s).length!==o.nodeCount())throw new r;return c}class r extends Error{constructor(){super(...arguments)}}return Uu=t,t.CycleException=r,Uu}var qu,om;function HS(){if(om)return qu;om=1;var t=L0();qu=r;function r(o){try{t(o)}catch(s){if(s instanceof t.CycleException)return!1;throw s}return!0}return qu}var Yu,lm;function R0(){if(lm)return Yu;lm=1,Yu=t;function t(l,c,u){Array.isArray(c)||(c=[c]);var f=l.isDirected()?h=>l.successors(h):h=>l.neighbors(h),p=u==="post"?r:o,g=[],m={};return c.forEach(h=>{if(!l.hasNode(h))throw new Error("Graph does not have node: "+h);p(h,f,m,g)}),g}function r(l,c,u,f){for(var p=[[l,!1]];p.length>0;){var g=p.pop();g[1]?f.push(g[0]):Object.hasOwn(u,g[0])||(u[g[0]]=!0,p.push([g[0],!0]),s(c(g[0]),m=>p.push([m,!1])))}}function o(l,c,u,f){for(var p=[l];p.length>0;){var g=p.pop();Object.hasOwn(u,g)||(u[g]=!0,f.push(g),s(c(g),m=>p.push(m)))}}function s(l,c){for(var u=l.length;u--;)c(l[u],u,l);return l}return Yu}var Xu,sm;function VS(){if(sm)return Xu;sm=1;var t=R0();Xu=r;function r(o,s){return t(o,s,"post")}return Xu}var Gu,am;function BS(){if(am)return Gu;am=1;var t=R0();Gu=r;function r(o,s){return t(o,s,"pre")}return Gu}var Qu,um;function WS(){if(um)return Qu;um=1;var t=sf(),r=M0();Qu=o;function o(s,l){var c=new t,u={},f=new r,p;function g(h){var v=h.v===p?h.w:h.v,w=f.priority(v);if(w!==void 0){var x=l(h);x<w&&(u[v]=p,f.decrease(v,x))}}if(s.nodeCount()===0)return c;s.nodes().forEach(function(h){f.add(h,Number.POSITIVE_INFINITY),c.setNode(h)}),f.decrease(s.nodes()[0],0);for(var m=!1;f.size()>0;){if(p=f.removeMin(),Object.hasOwn(u,p))c.setEdge(p,u[p]);else{if(m)throw new Error("Input graph is not connected: "+s);m=!0}s.nodeEdges(p).forEach(g)}return c}return Qu}var Ku,cm;function US(){return cm||(cm=1,Ku={components:DS(),dijkstra:T0(),dijkstraAll:FS(),findCycles:jS(),floydWarshall:$S(),isAcyclic:HS(),postorder:VS(),preorder:BS(),prim:WS(),tarjan:I0(),topsort:L0()}),Ku}var Zu,fm;function Yt(){if(fm)return Zu;fm=1;var t=AS();return Zu={Graph:t.Graph,json:OS(),alg:US(),version:t.version},Zu}var Ju,dm;function qS(){if(dm)return Ju;dm=1;class t{constructor(){let l={};l._next=l._prev=l,this._sentinel=l}dequeue(){let l=this._sentinel,c=l._prev;if(c!==l)return r(c),c}enqueue(l){let c=this._sentinel;l._prev&&l._next&&r(l),l._next=c._next,c._next._prev=l,c._next=l,l._prev=c}toString(){let l=[],c=this._sentinel,u=c._prev;for(;u!==c;)l.push(JSON.stringify(u,o)),u=u._prev;return"["+l.join(", ")+"]"}}function r(s){s._prev._next=s._next,s._next._prev=s._prev,delete s._next,delete s._prev}function o(s,l){if(s!=="_next"&&s!=="_prev")return l}return Ju=t,Ju}var ec,hm;function YS(){if(hm)return ec;hm=1;let t=Yt().Graph,r=qS();ec=s;let o=()=>1;function s(g,m){if(g.nodeCount()<=1)return[];let h=u(g,m||o);return l(h.graph,h.buckets,h.zeroIdx).flatMap(w=>g.outEdges(w.v,w.w))}function l(g,m,h){let v=[],w=m[m.length-1],x=m[0],C;for(;g.nodeCount();){for(;C=x.dequeue();)c(g,m,h,C);for(;C=w.dequeue();)c(g,m,h,C);if(g.nodeCount()){for(let E=m.length-2;E>0;--E)if(C=m[E].dequeue(),C){v=v.concat(c(g,m,h,C,!0));break}}}return v}function c(g,m,h,v,w){let x=w?[]:void 0;return g.inEdges(v.v).forEach(C=>{let E=g.edge(C),S=g.node(C.v);w&&x.push({v:C.v,w:C.w}),S.out-=E,f(m,h,S)}),g.outEdges(v.v).forEach(C=>{let E=g.edge(C),S=C.w,b=g.node(S);b.in-=E,f(m,h,b)}),g.removeNode(v.v),x}function u(g,m){let h=new t,v=0,w=0;g.nodes().forEach(E=>{h.setNode(E,{v:E,in:0,out:0})}),g.edges().forEach(E=>{let S=h.edge(E.v,E.w)||0,b=m(E),_=S+b;h.setEdge(E.v,E.w,_),w=Math.max(w,h.node(E.v).out+=b),v=Math.max(v,h.node(E.w).in+=b)});let x=p(w+v+3).map(()=>new r),C=v+1;return h.nodes().forEach(E=>{f(x,C,h.node(E))}),{graph:h,buckets:x,zeroIdx:C}}function f(g,m,h){h.out?h.in?g[h.out-h.in+m].enqueue(h):g[g.length-1].enqueue(h):g[0].enqueue(h)}function p(g){const m=[];for(let h=0;h<g;h++)m.push(h);return m}return ec}var tc,pm;function qe(){if(pm)return tc;pm=1;let t=Yt().Graph;tc={addBorderNode:m,addDummyNode:r,applyWithChunking:w,asNonCompoundGraph:s,buildLayerMatrix:f,intersectRect:u,mapValues:I,maxRank:x,normalizeRanks:p,notime:S,partition:C,pick:z,predecessorWeights:c,range:N,removeEmptyRanks:g,simplify:o,successorWeights:l,time:E,uniqueId:_,zipObject:F};function r(P,R,H,L){for(var O=L;P.hasNode(O);)O=_(L);return H.dummy=R,P.setNode(O,H),O}function o(P){let R=new t().setGraph(P.graph());return P.nodes().forEach(H=>R.setNode(H,P.node(H))),P.edges().forEach(H=>{let L=R.edge(H.v,H.w)||{weight:0,minlen:1},O=P.edge(H);R.setEdge(H.v,H.w,{weight:L.weight+O.weight,minlen:Math.max(L.minlen,O.minlen)})}),R}function s(P){let R=new t({multigraph:P.isMultigraph()}).setGraph(P.graph());return P.nodes().forEach(H=>{P.children(H).length||R.setNode(H,P.node(H))}),P.edges().forEach(H=>{R.setEdge(H,P.edge(H))}),R}function l(P){let R=P.nodes().map(H=>{let L={};return P.outEdges(H).forEach(O=>{L[O.w]=(L[O.w]||0)+P.edge(O).weight}),L});return F(P.nodes(),R)}function c(P){let R=P.nodes().map(H=>{let L={};return P.inEdges(H).forEach(O=>{L[O.v]=(L[O.v]||0)+P.edge(O).weight}),L});return F(P.nodes(),R)}function u(P,R){let H=P.x,L=P.y,O=R.x-H,J=R.y-L,T=P.width/2,Y=P.height/2;if(!O&&!J)throw new Error("Not possible to find intersection inside of the rectangle");let U,X;return Math.abs(J)*T>Math.abs(O)*Y?(J<0&&(Y=-Y),U=Y*O/J,X=Y):(O<0&&(T=-T),U=T,X=T*J/O),{x:H+U,y:L+X}}function f(P){let R=N(x(P)+1).map(()=>[]);return P.nodes().forEach(H=>{let L=P.node(H),O=L.rank;O!==void 0&&(R[O][L.order]=H)}),R}function p(P){let R=P.nodes().map(L=>{let O=P.node(L).rank;return O===void 0?Number.MAX_VALUE:O}),H=w(Math.min,R);P.nodes().forEach(L=>{let O=P.node(L);Object.hasOwn(O,"rank")&&(O.rank-=H)})}function g(P){let R=P.nodes().map(T=>P.node(T).rank),H=w(Math.min,R),L=[];P.nodes().forEach(T=>{let Y=P.node(T).rank-H;L[Y]||(L[Y]=[]),L[Y].push(T)});let O=0,J=P.graph().nodeRankFactor;Array.from(L).forEach((T,Y)=>{T===void 0&&Y%J!==0?--O:T!==void 0&&O&&T.forEach(U=>P.node(U).rank+=O)})}function m(P,R,H,L){let O={width:0,height:0};return arguments.length>=4&&(O.rank=H,O.order=L),r(P,"border",O,R)}function h(P,R=v){const H=[];for(let L=0;L<P.length;L+=R){const O=P.slice(L,L+R);H.push(O)}return H}const v=65535;function w(P,R){if(R.length>v){const H=h(R);return P.apply(null,H.map(L=>P.apply(null,L)))}else return P.apply(null,R)}function x(P){const H=P.nodes().map(L=>{let O=P.node(L).rank;return O===void 0?Number.MIN_VALUE:O});return w(Math.max,H)}function C(P,R){let H={lhs:[],rhs:[]};return P.forEach(L=>{R(L)?H.lhs.push(L):H.rhs.push(L)}),H}function E(P,R){let H=Date.now();try{return R()}finally{console.log(P+" time: "+(Date.now()-H)+"ms")}}function S(P,R){return R()}let b=0;function _(P){var R=++b;return P+(""+R)}function N(P,R,H=1){R==null&&(R=P,P=0);let L=J=>J<R;H<0&&(L=J=>R<J);const O=[];for(let J=P;L(J);J+=H)O.push(J);return O}function z(P,R){const H={};for(const L of R)P[L]!==void 0&&(H[L]=P[L]);return H}function I(P,R){let H=R;return typeof R=="string"&&(H=L=>L[R]),Object.entries(P).reduce((L,[O,J])=>(L[O]=H(J,O),L),{})}function F(P,R){return P.reduce((H,L,O)=>(H[L]=R[O],H),{})}return tc}var nc,mm;function XS(){if(mm)return nc;mm=1;let t=YS(),r=qe().uniqueId;nc={run:o,undo:l};function o(c){(c.graph().acyclicer==="greedy"?t(c,f(c)):s(c)).forEach(p=>{let g=c.edge(p);c.removeEdge(p),g.forwardName=p.name,g.reversed=!0,c.setEdge(p.w,p.v,g,r("rev"))});function f(p){return g=>p.edge(g).weight}}function s(c){let u=[],f={},p={};function g(m){Object.hasOwn(p,m)||(p[m]=!0,f[m]=!0,c.outEdges(m).forEach(h=>{Object.hasOwn(f,h.w)?u.push(h):g(h.w)}),delete f[m])}return c.nodes().forEach(g),u}function l(c){c.edges().forEach(u=>{let f=c.edge(u);if(f.reversed){c.removeEdge(u);let p=f.forwardName;delete f.reversed,delete f.forwardName,c.setEdge(u.w,u.v,f,p)}})}return nc}var rc,gm;function GS(){if(gm)return rc;gm=1;let t=qe();rc={run:r,undo:s};function r(l){l.graph().dummyChains=[],l.edges().forEach(c=>o(l,c))}function o(l,c){let u=c.v,f=l.node(u).rank,p=c.w,g=l.node(p).rank,m=c.name,h=l.edge(c),v=h.labelRank;if(g===f+1)return;l.removeEdge(c);let w,x,C;for(C=0,++f;f<g;++C,++f)h.points=[],x={width:0,height:0,edgeLabel:h,edgeObj:c,rank:f},w=t.addDummyNode(l,"edge",x,"_d"),f===v&&(x.width=h.width,x.height=h.height,x.dummy="edge-label",x.labelpos=h.labelpos),l.setEdge(u,w,{weight:h.weight},m),C===0&&l.graph().dummyChains.push(w),u=w;l.setEdge(u,p,{weight:h.weight},m)}function s(l){l.graph().dummyChains.forEach(c=>{let u=l.node(c),f=u.edgeLabel,p;for(l.setEdge(u.edgeObj,f);u.dummy;)p=l.successors(c)[0],l.removeNode(c),f.points.push({x:u.x,y:u.y}),u.dummy==="edge-label"&&(f.x=u.x,f.y=u.y,f.width=u.width,f.height=u.height),c=p,u=l.node(c)})}return rc}var ic,ym;function cs(){if(ym)return ic;ym=1;const{applyWithChunking:t}=qe();ic={longestPath:r,slack:o};function r(s){var l={};function c(u){var f=s.node(u);if(Object.hasOwn(l,u))return f.rank;l[u]=!0;let p=s.outEdges(u).map(m=>m==null?Number.POSITIVE_INFINITY:c(m.w)-s.edge(m).minlen);var g=t(Math.min,p);return g===Number.POSITIVE_INFINITY&&(g=0),f.rank=g}s.sources().forEach(c)}function o(s,l){return s.node(l.w).rank-s.node(l.v).rank-s.edge(l).minlen}return ic}var oc,vm;function z0(){if(vm)return oc;vm=1;var t=Yt().Graph,r=cs().slack;oc=o;function o(u){var f=new t({directed:!1}),p=u.nodes()[0],g=u.nodeCount();f.setNode(p,{});for(var m,h;s(f,u)<g;)m=l(f,u),h=f.hasNode(m.v)?r(u,m):-r(u,m),c(f,u,h);return f}function s(u,f){function p(g){f.nodeEdges(g).forEach(m=>{var h=m.v,v=g===h?m.w:h;!u.hasNode(v)&&!r(f,m)&&(u.setNode(v,{}),u.setEdge(g,v,{}),p(v))})}return u.nodes().forEach(p),u.nodeCount()}function l(u,f){return f.edges().reduce((g,m)=>{let h=Number.POSITIVE_INFINITY;return u.hasNode(m.v)!==u.hasNode(m.w)&&(h=r(f,m)),h<g[0]?[h,m]:g},[Number.POSITIVE_INFINITY,null])[1]}function c(u,f,p){u.nodes().forEach(g=>f.node(g).rank+=p)}return oc}var lc,wm;function QS(){if(wm)return lc;wm=1;var t=z0(),r=cs().slack,o=cs().longestPath,s=Yt().alg.preorder,l=Yt().alg.postorder,c=qe().simplify;lc=u,u.initLowLimValues=m,u.initCutValues=f,u.calcCutValue=g,u.leaveEdge=v,u.enterEdge=w,u.exchangeEdges=x;function u(b){b=c(b),o(b);var _=t(b);m(_),f(_,b);for(var N,z;N=v(_);)z=w(_,b,N),x(_,b,N,z)}function f(b,_){var N=l(b,b.nodes());N=N.slice(0,N.length-1),N.forEach(z=>p(b,_,z))}function p(b,_,N){var z=b.node(N),I=z.parent;b.edge(N,I).cutvalue=g(b,_,N)}function g(b,_,N){var z=b.node(N),I=z.parent,F=!0,P=_.edge(N,I),R=0;return P||(F=!1,P=_.edge(I,N)),R=P.weight,_.nodeEdges(N).forEach(H=>{var L=H.v===N,O=L?H.w:H.v;if(O!==I){var J=L===F,T=_.edge(H).weight;if(R+=J?T:-T,E(b,N,O)){var Y=b.edge(N,O).cutvalue;R+=J?-Y:Y}}}),R}function m(b,_){arguments.length<2&&(_=b.nodes()[0]),h(b,{},1,_)}function h(b,_,N,z,I){var F=N,P=b.node(z);return _[z]=!0,b.neighbors(z).forEach(R=>{Object.hasOwn(_,R)||(N=h(b,_,N,R,z))}),P.low=F,P.lim=N++,I?P.parent=I:delete P.parent,N}function v(b){return b.edges().find(_=>b.edge(_).cutvalue<0)}function w(b,_,N){var z=N.v,I=N.w;_.hasEdge(z,I)||(z=N.w,I=N.v);var F=b.node(z),P=b.node(I),R=F,H=!1;F.lim>P.lim&&(R=P,H=!0);var L=_.edges().filter(O=>H===S(b,b.node(O.v),R)&&H!==S(b,b.node(O.w),R));return L.reduce((O,J)=>r(_,J)<r(_,O)?J:O)}function x(b,_,N,z){var I=N.v,F=N.w;b.removeEdge(I,F),b.setEdge(z.v,z.w,{}),m(b),f(b,_),C(b,_)}function C(b,_){var N=b.nodes().find(I=>!_.node(I).parent),z=s(b,N);z=z.slice(1),z.forEach(I=>{var F=b.node(I).parent,P=_.edge(I,F),R=!1;P||(P=_.edge(F,I),R=!0),_.node(I).rank=_.node(F).rank+(R?P.minlen:-P.minlen)})}function E(b,_,N){return b.hasEdge(_,N)}function S(b,_,N){return N.low<=_.lim&&_.lim<=N.lim}return lc}var sc,xm;function KS(){if(xm)return sc;xm=1;var t=cs(),r=t.longestPath,o=z0(),s=QS();sc=l;function l(p){var g=p.graph().ranker;if(g instanceof Function)return g(p);switch(p.graph().ranker){case"network-simplex":f(p);break;case"tight-tree":u(p);break;case"longest-path":c(p);break;case"none":break;default:f(p)}}var c=r;function u(p){r(p),o(p)}function f(p){s(p)}return sc}var ac,Em;function ZS(){if(Em)return ac;Em=1,ac=t;function t(s){let l=o(s);s.graph().dummyChains.forEach(c=>{let u=s.node(c),f=u.edgeObj,p=r(s,l,f.v,f.w),g=p.path,m=p.lca,h=0,v=g[h],w=!0;for(;c!==f.w;){if(u=s.node(c),w){for(;(v=g[h])!==m&&s.node(v).maxRank<u.rank;)h++;v===m&&(w=!1)}if(!w){for(;h<g.length-1&&s.node(v=g[h+1]).minRank<=u.rank;)h++;v=g[h]}s.setParent(c,v),c=s.successors(c)[0]}})}function r(s,l,c,u){let f=[],p=[],g=Math.min(l[c].low,l[u].low),m=Math.max(l[c].lim,l[u].lim),h,v;h=c;do h=s.parent(h),f.push(h);while(h&&(l[h].low>g||m>l[h].lim));for(v=h,h=u;(h=s.parent(h))!==v;)p.push(h);return{path:f.concat(p.reverse()),lca:v}}function o(s){let l={},c=0;function u(f){let p=c;s.children(f).forEach(u),l[f]={low:p,lim:c++}}return s.children().forEach(u),l}return ac}var uc,_m;function JS(){if(_m)return uc;_m=1;let t=qe();uc={run:r,cleanup:c};function r(u){let f=t.addDummyNode(u,"root",{},"_root"),p=s(u),g=Object.values(p),m=t.applyWithChunking(Math.max,g)-1,h=2*m+1;u.graph().nestingRoot=f,u.edges().forEach(w=>u.edge(w).minlen*=h);let v=l(u)+1;u.children().forEach(w=>o(u,f,h,v,m,p,w)),u.graph().nodeRankFactor=h}function o(u,f,p,g,m,h,v){let w=u.children(v);if(!w.length){v!==f&&u.setEdge(f,v,{weight:0,minlen:p});return}let x=t.addBorderNode(u,"_bt"),C=t.addBorderNode(u,"_bb"),E=u.node(v);u.setParent(x,v),E.borderTop=x,u.setParent(C,v),E.borderBottom=C,w.forEach(S=>{o(u,f,p,g,m,h,S);let b=u.node(S),_=b.borderTop?b.borderTop:S,N=b.borderBottom?b.borderBottom:S,z=b.borderTop?g:2*g,I=_!==N?1:m-h[v]+1;u.setEdge(x,_,{weight:z,minlen:I,nestingEdge:!0}),u.setEdge(N,C,{weight:z,minlen:I,nestingEdge:!0})}),u.parent(v)||u.setEdge(f,x,{weight:0,minlen:m+h[v]})}function s(u){var f={};function p(g,m){var h=u.children(g);h&&h.length&&h.forEach(v=>p(v,m+1)),f[g]=m}return u.children().forEach(g=>p(g,1)),f}function l(u){return u.edges().reduce((f,p)=>f+u.edge(p).weight,0)}function c(u){var f=u.graph();u.removeNode(f.nestingRoot),delete f.nestingRoot,u.edges().forEach(p=>{var g=u.edge(p);g.nestingEdge&&u.removeEdge(p)})}return uc}var cc,Sm;function ek(){if(Sm)return cc;Sm=1;let t=qe();cc=r;function r(s){function l(c){let u=s.children(c),f=s.node(c);if(u.length&&u.forEach(l),Object.hasOwn(f,"minRank")){f.borderLeft=[],f.borderRight=[];for(let p=f.minRank,g=f.maxRank+1;p<g;++p)o(s,"borderLeft","_bl",c,f,p),o(s,"borderRight","_br",c,f,p)}}s.children().forEach(l)}function o(s,l,c,u,f,p){let g={width:0,height:0,rank:p,borderType:l},m=f[l][p-1],h=t.addDummyNode(s,"border",g,c);f[l][p]=h,s.setParent(h,u),m&&s.setEdge(m,h,{weight:1})}return cc}var fc,km;function tk(){if(km)return fc;km=1,fc={adjust:t,undo:r};function t(p){let g=p.graph().rankdir.toLowerCase();(g==="lr"||g==="rl")&&o(p)}function r(p){let g=p.graph().rankdir.toLowerCase();(g==="bt"||g==="rl")&&l(p),(g==="lr"||g==="rl")&&(u(p),o(p))}function o(p){p.nodes().forEach(g=>s(p.node(g))),p.edges().forEach(g=>s(p.edge(g)))}function s(p){let g=p.width;p.width=p.height,p.height=g}function l(p){p.nodes().forEach(g=>c(p.node(g))),p.edges().forEach(g=>{let m=p.edge(g);m.points.forEach(c),Object.hasOwn(m,"y")&&c(m)})}function c(p){p.y=-p.y}function u(p){p.nodes().forEach(g=>f(p.node(g))),p.edges().forEach(g=>{let m=p.edge(g);m.points.forEach(f),Object.hasOwn(m,"x")&&f(m)})}function f(p){let g=p.x;p.x=p.y,p.y=g}return fc}var dc,Cm;function nk(){if(Cm)return dc;Cm=1;let t=qe();dc=r;function r(o){let s={},l=o.nodes().filter(m=>!o.children(m).length),c=l.map(m=>o.node(m).rank),u=t.applyWithChunking(Math.max,c),f=t.range(u+1).map(()=>[]);function p(m){if(s[m])return;s[m]=!0;let h=o.node(m);f[h.rank].push(m),o.successors(m).forEach(p)}return l.sort((m,h)=>o.node(m).rank-o.node(h).rank).forEach(p),f}return dc}var hc,Nm;function rk(){if(Nm)return hc;Nm=1;let t=qe().zipObject;hc=r;function r(s,l){let c=0;for(let u=1;u<l.length;++u)c+=o(s,l[u-1],l[u]);return c}function o(s,l,c){let u=t(c,c.map((v,w)=>w)),f=l.flatMap(v=>s.outEdges(v).map(w=>({pos:u[w.w],weight:s.edge(w).weight})).sort((w,x)=>w.pos-x.pos)),p=1;for(;p<c.length;)p<<=1;let g=2*p-1;p-=1;let m=new Array(g).fill(0),h=0;return f.forEach(v=>{let w=v.pos+p;m[w]+=v.weight;let x=0;for(;w>0;)w%2&&(x+=m[w+1]),w=w-1>>1,m[w]+=v.weight;h+=v.weight*x}),h}return hc}var pc,bm;function ik(){if(bm)return pc;bm=1,pc=t;function t(r,o=[]){return o.map(s=>{let l=r.inEdges(s);if(l.length){let c=l.reduce((u,f)=>{let p=r.edge(f),g=r.node(f.v);return{sum:u.sum+p.weight*g.order,weight:u.weight+p.weight}},{sum:0,weight:0});return{v:s,barycenter:c.sum/c.weight,weight:c.weight}}else return{v:s}})}return pc}var mc,Pm;function ok(){if(Pm)return mc;Pm=1;let t=qe();mc=r;function r(l,c){let u={};l.forEach((p,g)=>{let m=u[p.v]={indegree:0,in:[],out:[],vs:[p.v],i:g};p.barycenter!==void 0&&(m.barycenter=p.barycenter,m.weight=p.weight)}),c.edges().forEach(p=>{let g=u[p.v],m=u[p.w];g!==void 0&&m!==void 0&&(m.indegree++,g.out.push(u[p.w]))});let f=Object.values(u).filter(p=>!p.indegree);return o(f)}function o(l){let c=[];function u(p){return g=>{g.merged||(g.barycenter===void 0||p.barycenter===void 0||g.barycenter>=p.barycenter)&&s(p,g)}}function f(p){return g=>{g.in.push(p),--g.indegree===0&&l.push(g)}}for(;l.length;){let p=l.pop();c.push(p),p.in.reverse().forEach(u(p)),p.out.forEach(f(p))}return c.filter(p=>!p.merged).map(p=>t.pick(p,["vs","i","barycenter","weight"]))}function s(l,c){let u=0,f=0;l.weight&&(u+=l.barycenter*l.weight,f+=l.weight),c.weight&&(u+=c.barycenter*c.weight,f+=c.weight),l.vs=c.vs.concat(l.vs),l.barycenter=u/f,l.weight=f,l.i=Math.min(c.i,l.i),c.merged=!0}return mc}var gc,Mm;function lk(){if(Mm)return gc;Mm=1;let t=qe();gc=r;function r(l,c){let u=t.partition(l,x=>Object.hasOwn(x,"barycenter")),f=u.lhs,p=u.rhs.sort((x,C)=>C.i-x.i),g=[],m=0,h=0,v=0;f.sort(s(!!c)),v=o(g,p,v),f.forEach(x=>{v+=x.vs.length,g.push(x.vs),m+=x.barycenter*x.weight,h+=x.weight,v=o(g,p,v)});let w={vs:g.flat(!0)};return h&&(w.barycenter=m/h,w.weight=h),w}function o(l,c,u){let f;for(;c.length&&(f=c[c.length-1]).i<=u;)c.pop(),l.push(f.vs),u++;return u}function s(l){return(c,u)=>c.barycenter<u.barycenter?-1:c.barycenter>u.barycenter?1:l?u.i-c.i:c.i-u.i}return gc}var yc,Tm;function sk(){if(Tm)return yc;Tm=1;let t=ik(),r=ok(),o=lk();yc=s;function s(u,f,p,g){let m=u.children(f),h=u.node(f),v=h?h.borderLeft:void 0,w=h?h.borderRight:void 0,x={};v&&(m=m.filter(b=>b!==v&&b!==w));let C=t(u,m);C.forEach(b=>{if(u.children(b.v).length){let _=s(u,b.v,p,g);x[b.v]=_,Object.hasOwn(_,"barycenter")&&c(b,_)}});let E=r(C,p);l(E,x);let S=o(E,g);if(v&&(S.vs=[v,S.vs,w].flat(!0),u.predecessors(v).length)){let b=u.node(u.predecessors(v)[0]),_=u.node(u.predecessors(w)[0]);Object.hasOwn(S,"barycenter")||(S.barycenter=0,S.weight=0),S.barycenter=(S.barycenter*S.weight+b.order+_.order)/(S.weight+2),S.weight+=2}return S}function l(u,f){u.forEach(p=>{p.vs=p.vs.flatMap(g=>f[g]?f[g].vs:g)})}function c(u,f){u.barycenter!==void 0?(u.barycenter=(u.barycenter*u.weight+f.barycenter*f.weight)/(u.weight+f.weight),u.weight+=f.weight):(u.barycenter=f.barycenter,u.weight=f.weight)}return yc}var vc,Im;function ak(){if(Im)return vc;Im=1;let t=Yt().Graph,r=qe();vc=o;function o(l,c,u,f){f||(f=l.nodes());let p=s(l),g=new t({compound:!0}).setGraph({root:p}).setDefaultNodeLabel(m=>l.node(m));return f.forEach(m=>{let h=l.node(m),v=l.parent(m);(h.rank===c||h.minRank<=c&&c<=h.maxRank)&&(g.setNode(m),g.setParent(m,v||p),l[u](m).forEach(w=>{let x=w.v===m?w.w:w.v,C=g.edge(x,m),E=C!==void 0?C.weight:0;g.setEdge(x,m,{weight:l.edge(w).weight+E})}),Object.hasOwn(h,"minRank")&&g.setNode(m,{borderLeft:h.borderLeft[c],borderRight:h.borderRight[c]}))}),g}function s(l){for(var c;l.hasNode(c=r.uniqueId("_root")););return c}return vc}var wc,Lm;function uk(){if(Lm)return wc;Lm=1,wc=t;function t(r,o,s){let l={},c;s.forEach(u=>{let f=r.parent(u),p,g;for(;f;){if(p=r.parent(f),p?(g=l[p],l[p]=f):(g=c,c=f),g&&g!==f){o.setEdge(g,f);return}f=p}})}return wc}var xc,Rm;function ck(){if(Rm)return xc;Rm=1;let t=nk(),r=rk(),o=sk(),s=ak(),l=uk(),c=Yt().Graph,u=qe();xc=f;function f(h,v){if(v&&typeof v.customOrder=="function"){v.customOrder(h,f);return}let w=u.maxRank(h),x=p(h,u.range(1,w+1),"inEdges"),C=p(h,u.range(w-1,-1,-1),"outEdges"),E=t(h);if(m(h,E),v&&v.disableOptimalOrderHeuristic)return;let S=Number.POSITIVE_INFINITY,b;for(let _=0,N=0;N<4;++_,++N){g(_%2?x:C,_%4>=2),E=u.buildLayerMatrix(h);let z=r(h,E);z<S&&(N=0,b=Object.assign({},E),S=z)}m(h,b)}function p(h,v,w){const x=new Map,C=(E,S)=>{x.has(E)||x.set(E,[]),x.get(E).push(S)};for(const E of h.nodes()){const S=h.node(E);if(typeof S.rank=="number"&&C(S.rank,E),typeof S.minRank=="number"&&typeof S.maxRank=="number")for(let b=S.minRank;b<=S.maxRank;b++)b!==S.rank&&C(b,E)}return v.map(function(E){return s(h,E,w,x.get(E)||[])})}function g(h,v){let w=new c;h.forEach(function(x){let C=x.graph().root,E=o(x,C,w,v);E.vs.forEach((S,b)=>x.node(S).order=b),l(x,w,E.vs)})}function m(h,v){Object.values(v).forEach(w=>w.forEach((x,C)=>h.node(x).order=C))}return xc}var Ec,zm;function fk(){if(zm)return Ec;zm=1;let t=Yt().Graph,r=qe();Ec={positionX:w,findType1Conflicts:o,findType2Conflicts:s,addConflict:c,hasConflict:u,verticalAlignment:f,horizontalCompaction:p,alignCoordinates:h,findSmallestWidthAlignment:m,balance:v};function o(E,S){let b={};function _(N,z){let I=0,F=0,P=N.length,R=z[z.length-1];return z.forEach((H,L)=>{let O=l(E,H),J=O?E.node(O).order:P;(O||H===R)&&(z.slice(F,L+1).forEach(T=>{E.predecessors(T).forEach(Y=>{let U=E.node(Y),X=U.order;(X<I||J<X)&&!(U.dummy&&E.node(T).dummy)&&c(b,Y,T)})}),F=L+1,I=J)}),z}return S.length&&S.reduce(_),b}function s(E,S){let b={};function _(z,I,F,P,R){let H;r.range(I,F).forEach(L=>{H=z[L],E.node(H).dummy&&E.predecessors(H).forEach(O=>{let J=E.node(O);J.dummy&&(J.order<P||J.order>R)&&c(b,O,H)})})}function N(z,I){let F=-1,P,R=0;return I.forEach((H,L)=>{if(E.node(H).dummy==="border"){let O=E.predecessors(H);O.length&&(P=E.node(O[0]).order,_(I,R,L,F,P),R=L,F=P)}_(I,R,I.length,P,z.length)}),I}return S.length&&S.reduce(N),b}function l(E,S){if(E.node(S).dummy)return E.predecessors(S).find(b=>E.node(b).dummy)}function c(E,S,b){if(S>b){let N=S;S=b,b=N}let _=E[S];_||(E[S]=_={}),_[b]=!0}function u(E,S,b){if(S>b){let _=S;S=b,b=_}return!!E[S]&&Object.hasOwn(E[S],b)}function f(E,S,b,_){let N={},z={},I={};return S.forEach(F=>{F.forEach((P,R)=>{N[P]=P,z[P]=P,I[P]=R})}),S.forEach(F=>{let P=-1;F.forEach(R=>{let H=_(R);if(H.length){H=H.sort((O,J)=>I[O]-I[J]);let L=(H.length-1)/2;for(let O=Math.floor(L),J=Math.ceil(L);O<=J;++O){let T=H[O];z[R]===R&&P<I[T]&&!u(b,R,T)&&(z[T]=R,z[R]=N[R]=N[T],P=I[T])}}})}),{root:N,align:z}}function p(E,S,b,_,N){let z={},I=g(E,S,b,N),F=N?"borderLeft":"borderRight";function P(L,O){let J=I.nodes(),T=J.pop(),Y={};for(;T;)Y[T]?L(T):(Y[T]=!0,J.push(T),J=J.concat(O(T))),T=J.pop()}function R(L){z[L]=I.inEdges(L).reduce((O,J)=>Math.max(O,z[J.v]+I.edge(J)),0)}function H(L){let O=I.outEdges(L).reduce((T,Y)=>Math.min(T,z[Y.w]-I.edge(Y)),Number.POSITIVE_INFINITY),J=E.node(L);O!==Number.POSITIVE_INFINITY&&J.borderType!==F&&(z[L]=Math.max(z[L],O))}return P(R,I.predecessors.bind(I)),P(H,I.successors.bind(I)),Object.keys(_).forEach(L=>z[L]=z[b[L]]),z}function g(E,S,b,_){let N=new t,z=E.graph(),I=x(z.nodesep,z.edgesep,_);return S.forEach(F=>{let P;F.forEach(R=>{let H=b[R];if(N.setNode(H),P){var L=b[P],O=N.edge(L,H);N.setEdge(L,H,Math.max(I(E,R,P),O||0))}P=R})}),N}function m(E,S){return Object.values(S).reduce((b,_)=>{let N=Number.NEGATIVE_INFINITY,z=Number.POSITIVE_INFINITY;Object.entries(_).forEach(([F,P])=>{let R=C(E,F)/2;N=Math.max(P+R,N),z=Math.min(P-R,z)});const I=N-z;return I<b[0]&&(b=[I,_]),b},[Number.POSITIVE_INFINITY,null])[1]}function h(E,S){let b=Object.values(S),_=r.applyWithChunking(Math.min,b),N=r.applyWithChunking(Math.max,b);["u","d"].forEach(z=>{["l","r"].forEach(I=>{let F=z+I,P=E[F];if(P===S)return;let R=Object.values(P),H=_-r.applyWithChunking(Math.min,R);I!=="l"&&(H=N-r.applyWithChunking(Math.max,R)),H&&(E[F]=r.mapValues(P,L=>L+H))})})}function v(E,S){return r.mapValues(E.ul,(b,_)=>{if(S)return E[S.toLowerCase()][_];{let N=Object.values(E).map(z=>z[_]).sort((z,I)=>z-I);return(N[1]+N[2])/2}})}function w(E){let S=r.buildLayerMatrix(E),b=Object.assign(o(E,S),s(E,S)),_={},N;["u","d"].forEach(I=>{N=I==="u"?S:Object.values(S).reverse(),["l","r"].forEach(F=>{F==="r"&&(N=N.map(L=>Object.values(L).reverse()));let P=(I==="u"?E.predecessors:E.successors).bind(E),R=f(E,N,b,P),H=p(E,N,R.root,R.align,F==="r");F==="r"&&(H=r.mapValues(H,L=>-L)),_[I+F]=H})});let z=m(E,_);return h(_,z),v(_,E.graph().align)}function x(E,S,b){return(_,N,z)=>{let I=_.node(N),F=_.node(z),P=0,R;if(P+=I.width/2,Object.hasOwn(I,"labelpos"))switch(I.labelpos.toLowerCase()){case"l":R=-I.width/2;break;case"r":R=I.width/2;break}if(R&&(P+=b?R:-R),R=0,P+=(I.dummy?S:E)/2,P+=(F.dummy?S:E)/2,P+=F.width/2,Object.hasOwn(F,"labelpos"))switch(F.labelpos.toLowerCase()){case"l":R=F.width/2;break;case"r":R=-F.width/2;break}return R&&(P+=b?R:-R),R=0,P}}function C(E,S){return E.node(S).width}return Ec}var _c,Am;function dk(){if(Am)return _c;Am=1;let t=qe(),r=fk().positionX;_c=o;function o(l){l=t.asNonCompoundGraph(l),s(l),Object.entries(r(l)).forEach(([c,u])=>l.node(c).x=u)}function s(l){let c=t.buildLayerMatrix(l),u=l.graph().ranksep,f=0;c.forEach(p=>{const g=p.reduce((m,h)=>{const v=l.node(h).height;return m>v?m:v},0);p.forEach(m=>l.node(m).y=f+g/2),f+=g+u})}return _c}var Sc,Om;function hk(){if(Om)return Sc;Om=1;let t=XS(),r=GS(),o=KS(),s=qe().normalizeRanks,l=ZS(),c=qe().removeEmptyRanks,u=JS(),f=ek(),p=tk(),g=ck(),m=dk(),h=qe(),v=Yt().Graph;Sc=w;function w(D,W){let Q=W&&W.debugTiming?h.time:h.notime;Q("layout",()=>{let re=Q("  buildLayoutGraph",()=>P(D));Q("  runLayout",()=>x(re,Q,W)),Q("  updateInputGraph",()=>C(D,re))})}function x(D,W,Q){W("    makeSpaceForEdgeLabels",()=>R(D)),W("    removeSelfEdges",()=>B(D)),W("    acyclic",()=>t.run(D)),W("    nestingGraph.run",()=>u.run(D)),W("    rank",()=>o(h.asNonCompoundGraph(D))),W("    injectEdgeLabelProxies",()=>H(D)),W("    removeEmptyRanks",()=>c(D)),W("    nestingGraph.cleanup",()=>u.cleanup(D)),W("    normalizeRanks",()=>s(D)),W("    assignRankMinMax",()=>L(D)),W("    removeEdgeLabelProxies",()=>O(D)),W("    normalize.run",()=>r.run(D)),W("    parentDummyChains",()=>l(D)),W("    addBorderSegments",()=>f(D)),W("    order",()=>g(D,Q)),W("    insertSelfEdges",()=>V(D)),W("    adjustCoordinateSystem",()=>p.adjust(D)),W("    position",()=>m(D)),W("    positionSelfEdges",()=>G(D)),W("    removeBorderNodes",()=>X(D)),W("    normalize.undo",()=>r.undo(D)),W("    fixupEdgeLabelCoords",()=>Y(D)),W("    undoCoordinateSystem",()=>p.undo(D)),W("    translateGraph",()=>J(D)),W("    assignNodeIntersects",()=>T(D)),W("    reversePoints",()=>U(D)),W("    acyclic.undo",()=>t.undo(D))}function C(D,W){D.nodes().forEach(Q=>{let re=D.node(Q),le=W.node(Q);re&&(re.x=le.x,re.y=le.y,re.rank=le.rank,W.children(Q).length&&(re.width=le.width,re.height=le.height))}),D.edges().forEach(Q=>{let re=D.edge(Q),le=W.edge(Q);re.points=le.points,Object.hasOwn(le,"x")&&(re.x=le.x,re.y=le.y)}),D.graph().width=W.graph().width,D.graph().height=W.graph().height}let E=["nodesep","edgesep","ranksep","marginx","marginy"],S={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},b=["acyclicer","ranker","rankdir","align"],_=["width","height","rank"],N={width:0,height:0},z=["minlen","weight","width","height","labeloffset"],I={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},F=["labelpos"];function P(D){let W=new v({multigraph:!0,compound:!0}),Q=j(D.graph());return W.setGraph(Object.assign({},S,M(Q,E),h.pick(Q,b))),D.nodes().forEach(re=>{let le=j(D.node(re));const K=M(le,_);Object.keys(N).forEach(oe=>{K[oe]===void 0&&(K[oe]=N[oe])}),W.setNode(re,K),W.setParent(re,D.parent(re))}),D.edges().forEach(re=>{let le=j(D.edge(re));W.setEdge(re,Object.assign({},I,M(le,z),h.pick(le,F)))}),W}function R(D){let W=D.graph();W.ranksep/=2,D.edges().forEach(Q=>{let re=D.edge(Q);re.minlen*=2,re.labelpos.toLowerCase()!=="c"&&(W.rankdir==="TB"||W.rankdir==="BT"?re.width+=re.labeloffset:re.height+=re.labeloffset)})}function H(D){D.edges().forEach(W=>{let Q=D.edge(W);if(Q.width&&Q.height){let re=D.node(W.v),K={rank:(D.node(W.w).rank-re.rank)/2+re.rank,e:W};h.addDummyNode(D,"edge-proxy",K,"_ep")}})}function L(D){let W=0;D.nodes().forEach(Q=>{let re=D.node(Q);re.borderTop&&(re.minRank=D.node(re.borderTop).rank,re.maxRank=D.node(re.borderBottom).rank,W=Math.max(W,re.maxRank))}),D.graph().maxRank=W}function O(D){D.nodes().forEach(W=>{let Q=D.node(W);Q.dummy==="edge-proxy"&&(D.edge(Q.e).labelRank=Q.rank,D.removeNode(W))})}function J(D){let W=Number.POSITIVE_INFINITY,Q=0,re=Number.POSITIVE_INFINITY,le=0,K=D.graph(),oe=K.marginx||0,de=K.marginy||0;function we(he){let fe=he.x,Se=he.y,Ne=he.width,be=he.height;W=Math.min(W,fe-Ne/2),Q=Math.max(Q,fe+Ne/2),re=Math.min(re,Se-be/2),le=Math.max(le,Se+be/2)}D.nodes().forEach(he=>we(D.node(he))),D.edges().forEach(he=>{let fe=D.edge(he);Object.hasOwn(fe,"x")&&we(fe)}),W-=oe,re-=de,D.nodes().forEach(he=>{let fe=D.node(he);fe.x-=W,fe.y-=re}),D.edges().forEach(he=>{let fe=D.edge(he);fe.points.forEach(Se=>{Se.x-=W,Se.y-=re}),Object.hasOwn(fe,"x")&&(fe.x-=W),Object.hasOwn(fe,"y")&&(fe.y-=re)}),K.width=Q-W+oe,K.height=le-re+de}function T(D){D.edges().forEach(W=>{let Q=D.edge(W),re=D.node(W.v),le=D.node(W.w),K,oe;Q.points?(K=Q.points[0],oe=Q.points[Q.points.length-1]):(Q.points=[],K=le,oe=re),Q.points.unshift(h.intersectRect(re,K)),Q.points.push(h.intersectRect(le,oe))})}function Y(D){D.edges().forEach(W=>{let Q=D.edge(W);if(Object.hasOwn(Q,"x"))switch((Q.labelpos==="l"||Q.labelpos==="r")&&(Q.width-=Q.labeloffset),Q.labelpos){case"l":Q.x-=Q.width/2+Q.labeloffset;break;case"r":Q.x+=Q.width/2+Q.labeloffset;break}})}function U(D){D.edges().forEach(W=>{let Q=D.edge(W);Q.reversed&&Q.points.reverse()})}function X(D){D.nodes().forEach(W=>{if(D.children(W).length){let Q=D.node(W),re=D.node(Q.borderTop),le=D.node(Q.borderBottom),K=D.node(Q.borderLeft[Q.borderLeft.length-1]),oe=D.node(Q.borderRight[Q.borderRight.length-1]);Q.width=Math.abs(oe.x-K.x),Q.height=Math.abs(le.y-re.y),Q.x=K.x+Q.width/2,Q.y=re.y+Q.height/2}}),D.nodes().forEach(W=>{D.node(W).dummy==="border"&&D.removeNode(W)})}function B(D){D.edges().forEach(W=>{if(W.v===W.w){var Q=D.node(W.v);Q.selfEdges||(Q.selfEdges=[]),Q.selfEdges.push({e:W,label:D.edge(W)}),D.removeEdge(W)}})}function V(D){var W=h.buildLayerMatrix(D);W.forEach(Q=>{var re=0;Q.forEach((le,K)=>{var oe=D.node(le);oe.order=K+re,(oe.selfEdges||[]).forEach(de=>{h.addDummyNode(D,"selfedge",{width:de.label.width,height:de.label.height,rank:oe.rank,order:K+ ++re,e:de.e,label:de.label},"_se")}),delete oe.selfEdges})})}function G(D){D.nodes().forEach(W=>{var Q=D.node(W);if(Q.dummy==="selfedge"){var re=D.node(Q.e.v),le=re.x+re.width/2,K=re.y,oe=Q.x-le,de=re.height/2;D.setEdge(Q.e,Q.label),D.removeNode(W),Q.label.points=[{x:le+2*oe/3,y:K-de},{x:le+5*oe/6,y:K-de},{x:le+oe,y:K},{x:le+5*oe/6,y:K+de},{x:le+2*oe/3,y:K+de}],Q.label.x=Q.x,Q.label.y=Q.y}})}function M(D,W){return h.mapValues(h.pick(D,W),Number)}function j(D){var W={};return D&&Object.entries(D).forEach(([Q,re])=>{typeof Q=="string"&&(Q=Q.toLowerCase()),W[Q]=re}),W}return Sc}var kc,Dm;function pk(){if(Dm)return kc;Dm=1;let t=qe(),r=Yt().Graph;kc={debugOrdering:o};function o(s){let l=t.buildLayerMatrix(s),c=new r({compound:!0,multigraph:!0}).setGraph({});return s.nodes().forEach(u=>{c.setNode(u,{label:u}),c.setParent(u,"layer"+s.node(u).rank)}),s.edges().forEach(u=>c.setEdge(u.v,u.w,{},u.name)),l.forEach((u,f)=>{let p="layer"+f;c.setNode(p,{rank:"same"}),u.reduce((g,m)=>(c.setEdge(g,m,{style:"invis"}),m))}),c}return kc}var Cc,Fm;function mk(){return Fm||(Fm=1,Cc="1.1.8"),Cc}var Nc,jm;function gk(){return jm||(jm=1,Nc={graphlib:Yt(),layout:hk(),debug:pk(),util:{time:qe().time,notime:qe().notime},version:mk()}),Nc}var yk=gk();const $m=Hc(yk),Hm=200,Vm=44;function A0(t,r,o=null,s=0,l={nodes:[],edges:[]}){const c=!!(t.children&&t.children.length>0),u=r.has(t.id);return l.nodes.push({id:t.id,type:"mindMapNode",data:{label:t.label,depth:s,hasChildren:c,isCollapsed:u,explanation:t.explanation||null},position:{x:0,y:0}}),o&&l.edges.push({id:`e-${o}-${t.id}`,source:o,target:t.id,type:"smoothstep",style:{stroke:"#94a3b8",strokeWidth:1.5}}),c&&!u&&t.children.forEach(f=>A0(f,r,t.id,s+1,l)),l}function vk(t,r){const o=new $m.graphlib.Graph;return o.setDefaultEdgeLabel(()=>({})),o.setGraph({rankdir:"LR",nodesep:16,ranksep:60,marginx:20,marginy:20}),t.forEach(s=>o.setNode(s.id,{width:Hm,height:Vm})),r.forEach(s=>o.setEdge(s.source,s.target)),$m.layout(o),t.map(s=>({...s,position:{x:o.node(s.id).x-Hm/2,y:o.node(s.id).y-Vm/2}}))}const wk={mindMapNode:RS};function xk(t){return t?t.split(`
`).map((r,o)=>{if(r.trim()==="")return Z.jsx("div",{style:{height:10}},o);if(r.startsWith("★")||r.startsWith("▶")&&r.includes("시험"))return Z.jsx("div",{style:{background:"#fffbeb",border:"1.5px solid #f59e0b",borderLeft:"4px solid #f59e0b",borderRadius:8,padding:"9px 13px",marginTop:14,color:"#92400e",fontWeight:700,fontSize:13,lineHeight:1.7},children:r},o);if(r.startsWith("▶"))return Z.jsx("div",{style:{color:"#2563eb",fontWeight:700,fontSize:14,marginTop:18,marginBottom:2,paddingBottom:4,borderBottom:"1.5px solid #dbeafe"},children:r},o);if(r.trimStart().startsWith("•")||r.trimStart().startsWith("-")){const s=r.length-r.trimStart().length;return Z.jsxs("div",{style:{display:"flex",gap:7,paddingLeft:s>0?20:0,marginTop:3,lineHeight:1.7},children:[Z.jsx("span",{style:{color:"#3b82f6",fontWeight:700,flexShrink:0,marginTop:1},children:"•"}),Z.jsx("span",{style:{color:"#1e293b",fontSize:13},children:r.trimStart().slice(1).trim()})]},o)}return Z.jsx("div",{style:{color:"#374151",fontSize:13,lineHeight:1.75,marginTop:2},children:r},o)}):null}function O0(t,r=new Set,o=!0){return t.children&&t.children.length>0&&(o||r.add(t.id),t.children.forEach(s=>O0(s,r,!1))),r}function Ek({onSelectNode:t}){const[r,o]=ie.useState(()=>O0(qp)),{fitView:s}=Es(),{nodes:l,edges:c}=ie.useMemo(()=>A0(qp,r),[r]),u=ie.useMemo(()=>vk(l,c),[l,c]),f=ie.useCallback((p,g)=>{g.data.hasChildren?(o(m=>{const h=new Set(m);return h.has(g.id)?h.delete(g.id):h.add(g.id),h}),setTimeout(()=>s({duration:400,padding:.08}),30)):g.data.explanation&&t(g.data)},[s,t]);return Z.jsxs(iS,{nodes:u,edges:c,nodeTypes:wk,onNodeClick:f,fitView:!0,fitViewOptions:{padding:.08},minZoom:.05,maxZoom:2,nodesDraggable:!1,nodesConnectable:!1,elementsSelectable:!1,children:[Z.jsx(uS,{color:"#e2e8f0",gap:24,size:1}),Z.jsx(gS,{showInteractive:!1}),Z.jsx(MS,{nodeColor:p=>{var m;const g=((m=p.data)==null?void 0:m.depth)??0;return g===0?"#1e3a5f":g===1?"#2563eb":g===2?"#60a5fa":"#dbeafe"},maskColor:"rgba(248, 250, 252, 0.7)"})]})}function _k(){const[t,r]=ie.useState(null);return Z.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#f8fafc",position:"relative"},children:[Z.jsx("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",background:"#1e3a5f",color:"white",padding:"7px 24px",borderRadius:24,fontWeight:700,fontSize:15,zIndex:10,fontFamily:"Noto Sans KR, sans-serif",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",whiteSpace:"nowrap"},children:"🏗️ 건축시공 마인드맵"}),Z.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",background:"rgba(30,58,95,0.08)",color:"#475569",padding:"5px 16px",borderRadius:12,fontSize:12,zIndex:10,fontFamily:"Noto Sans KR, sans-serif",whiteSpace:"nowrap"},children:"▶/▼ 클릭: 펼치기/접기  |  📖 클릭: 개념 설명 보기"}),Z.jsx(C0,{children:Z.jsx(Ek,{onSelectNode:r})}),t&&Z.jsxs(Z.Fragment,{children:[Z.jsx("div",{onClick:()=>r(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.15)",zIndex:999}}),Z.jsxs("div",{style:{position:"fixed",right:0,top:0,width:340,maxWidth:"90vw",height:"100vh",background:"#fff",boxShadow:"-4px 0 24px rgba(0,0,0,0.18)",zIndex:1e3,display:"flex",flexDirection:"column",fontFamily:"Noto Sans KR, sans-serif"},children:[Z.jsxs("div",{style:{background:"#2563eb",color:"#fff",padding:"14px 16px",display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[Z.jsxs("span",{style:{flex:1,fontWeight:700,fontSize:15,lineHeight:1.4},children:["📖 ",t.label]}),Z.jsx("button",{onClick:()=>r(null),style:{background:"none",border:"none",color:"#fff",fontSize:20,cursor:"pointer",lineHeight:1,opacity:.85,padding:"2px 4px"},children:"✕"})]}),Z.jsx("div",{style:{flex:1,overflowY:"auto",padding:"18px 16px"},children:xk(t.explanation)})]})]})]})}Cv.createRoot(document.getElementById("root")).render(Z.jsx(ie.StrictMode,{children:Z.jsx(_k,{})}));
