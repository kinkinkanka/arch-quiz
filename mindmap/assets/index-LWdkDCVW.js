var _y=Object.defineProperty;var Sy=(n,r,o)=>r in n?_y(n,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[r]=o;var Ue=(n,r,o)=>Sy(n,typeof r!="symbol"?r+"":r,o);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function o(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(a){if(a.ep)return;a.ep=!0;const c=o(a);fetch(a.href,c)}})();function Bc(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gu={exports:{}},Zi={},yu={exports:{}},Ce={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Th;function ky(){if(Th)return Ce;Th=1;var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),h=Symbol.iterator;function v(M){return M===null||typeof M!="object"?null:(M=h&&M[h]||M["@@iterator"],typeof M=="function"?M:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function _(M,z,j){this.props=M,this.context=z,this.refs=C,this.updater=j||x}_.prototype.isReactComponent={},_.prototype.setState=function(M,z){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,z,"setState")},_.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function k(){}k.prototype=_.prototype;function $(M,z,j){this.props=M,this.context=z,this.refs=C,this.updater=j||x}var S=$.prototype=new k;S.constructor=$,w(S,_.prototype),S.isPureReactComponent=!0;var b=Array.isArray,R=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function P(M,z,j){var U,K={},ie=null,le=null;if(z!=null)for(U in z.ref!==void 0&&(le=z.ref),z.key!==void 0&&(ie=""+z.key),z)R.call(z,U)&&!F.hasOwnProperty(U)&&(K[U]=z[U]);var Z=arguments.length-2;if(Z===1)K.children=j;else if(1<Z){for(var oe=Array(Z),fe=0;fe<Z;fe++)oe[fe]=arguments[fe+2];K.children=oe}if(M&&M.defaultProps)for(U in Z=M.defaultProps,Z)K[U]===void 0&&(K[U]=Z[U]);return{$$typeof:n,type:M,key:ie,ref:le,props:K,_owner:N.current}}function A(M,z){return{$$typeof:n,type:M.type,key:z,ref:M.ref,props:M.props,_owner:M._owner}}function O(M){return typeof M=="object"&&M!==null&&M.$$typeof===n}function L(M){var z={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(j){return z[j]})}var D=/\/+/g;function J(M,z){return typeof M=="object"&&M!==null&&M.key!=null?L(""+M.key):z.toString(36)}function T(M,z,j,U,K){var ie=typeof M;(ie==="undefined"||ie==="boolean")&&(M=null);var le=!1;if(M===null)le=!0;else switch(ie){case"string":case"number":le=!0;break;case"object":switch(M.$$typeof){case n:case r:le=!0}}if(le)return le=M,K=K(le),M=U===""?"."+J(le,0):U,b(K)?(j="",M!=null&&(j=M.replace(D,"$&/")+"/"),T(K,z,j,"",function(fe){return fe})):K!=null&&(O(K)&&(K=A(K,j+(!K.key||le&&le.key===K.key?"":(""+K.key).replace(D,"$&/")+"/")+M)),z.push(K)),1;if(le=0,U=U===""?".":U+":",b(M))for(var Z=0;Z<M.length;Z++){ie=M[Z];var oe=U+J(ie,Z);le+=T(ie,z,j,oe,K)}else if(oe=v(M),typeof oe=="function")for(M=oe.call(M),Z=0;!(ie=M.next()).done;)ie=ie.value,oe=U+J(ie,Z++),le+=T(ie,z,j,oe,K);else if(ie==="object")throw z=String(M),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.");return le}function q(M,z,j){if(M==null)return M;var U=[],K=0;return T(M,U,"","",function(ie){return z.call(j,ie,K++)}),U}function Q(M){if(M._status===-1){var z=M._result;z=z(),z.then(function(j){(M._status===0||M._status===-1)&&(M._status=1,M._result=j)},function(j){(M._status===0||M._status===-1)&&(M._status=2,M._result=j)}),M._status===-1&&(M._status=0,M._result=z)}if(M._status===1)return M._result.default;throw M._result}var Y={current:null},W={transition:null},V={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:W,ReactCurrentOwner:N};function X(){throw Error("act(...) is not supported in production builds of React.")}return Ce.Children={map:q,forEach:function(M,z,j){q(M,function(){z.apply(this,arguments)},j)},count:function(M){var z=0;return q(M,function(){z++}),z},toArray:function(M){return q(M,function(z){return z})||[]},only:function(M){if(!O(M))throw Error("React.Children.only expected to receive a single React element child.");return M}},Ce.Component=_,Ce.Fragment=o,Ce.Profiler=a,Ce.PureComponent=$,Ce.StrictMode=l,Ce.Suspense=f,Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,Ce.act=X,Ce.cloneElement=function(M,z,j){if(M==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+M+".");var U=w({},M.props),K=M.key,ie=M.ref,le=M._owner;if(z!=null){if(z.ref!==void 0&&(ie=z.ref,le=N.current),z.key!==void 0&&(K=""+z.key),M.type&&M.type.defaultProps)var Z=M.type.defaultProps;for(oe in z)R.call(z,oe)&&!F.hasOwnProperty(oe)&&(U[oe]=z[oe]===void 0&&Z!==void 0?Z[oe]:z[oe])}var oe=arguments.length-2;if(oe===1)U.children=j;else if(1<oe){Z=Array(oe);for(var fe=0;fe<oe;fe++)Z[fe]=arguments[fe+2];U.children=Z}return{$$typeof:n,type:M.type,key:K,ref:ie,props:U,_owner:le}},Ce.createContext=function(M){return M={$$typeof:u,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},M.Provider={$$typeof:c,_context:M},M.Consumer=M},Ce.createElement=P,Ce.createFactory=function(M){var z=P.bind(null,M);return z.type=M,z},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(M){return{$$typeof:d,render:M}},Ce.isValidElement=O,Ce.lazy=function(M){return{$$typeof:m,_payload:{_status:-1,_result:M},_init:Q}},Ce.memo=function(M,z){return{$$typeof:g,type:M,compare:z===void 0?null:z}},Ce.startTransition=function(M){var z=W.transition;W.transition={};try{M()}finally{W.transition=z}},Ce.unstable_act=X,Ce.useCallback=function(M,z){return Y.current.useCallback(M,z)},Ce.useContext=function(M){return Y.current.useContext(M)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(M){return Y.current.useDeferredValue(M)},Ce.useEffect=function(M,z){return Y.current.useEffect(M,z)},Ce.useId=function(){return Y.current.useId()},Ce.useImperativeHandle=function(M,z,j){return Y.current.useImperativeHandle(M,z,j)},Ce.useInsertionEffect=function(M,z){return Y.current.useInsertionEffect(M,z)},Ce.useLayoutEffect=function(M,z){return Y.current.useLayoutEffect(M,z)},Ce.useMemo=function(M,z){return Y.current.useMemo(M,z)},Ce.useReducer=function(M,z,j){return Y.current.useReducer(M,z,j)},Ce.useRef=function(M){return Y.current.useRef(M)},Ce.useState=function(M){return Y.current.useState(M)},Ce.useSyncExternalStore=function(M,z,j){return Y.current.useSyncExternalStore(M,z,j)},Ce.useTransition=function(){return Y.current.useTransition()},Ce.version="18.3.1",Ce}var Lh;function mo(){return Lh||(Lh=1,yu.exports=ky()),yu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ah;function Ey(){if(Ah)return Zi;Ah=1;var n=mo(),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,g){var m,h={},v=null,x=null;g!==void 0&&(v=""+g),f.key!==void 0&&(v=""+f.key),f.ref!==void 0&&(x=f.ref);for(m in f)l.call(f,m)&&!c.hasOwnProperty(m)&&(h[m]=f[m]);if(d&&d.defaultProps)for(m in f=d.defaultProps,f)h[m]===void 0&&(h[m]=f[m]);return{$$typeof:r,type:d,key:v,ref:x,props:h,_owner:a.current}}return Zi.Fragment=o,Zi.jsx=u,Zi.jsxs=u,Zi}var Rh;function Cy(){return Rh||(Rh=1,gu.exports=Ey()),gu.exports}var B=Cy(),re=mo();const by=Bc(re);var zl={},vu={exports:{}},vn={},xu={exports:{}},wu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function $y(){return Ih||(Ih=1,(function(n){function r(W,V){var X=W.length;W.push(V);e:for(;0<X;){var M=X-1>>>1,z=W[M];if(0<a(z,V))W[M]=V,W[X]=z,X=M;else break e}}function o(W){return W.length===0?null:W[0]}function l(W){if(W.length===0)return null;var V=W[0],X=W.pop();if(X!==V){W[0]=X;e:for(var M=0,z=W.length,j=z>>>1;M<j;){var U=2*(M+1)-1,K=W[U],ie=U+1,le=W[ie];if(0>a(K,X))ie<z&&0>a(le,K)?(W[M]=le,W[ie]=X,M=ie):(W[M]=K,W[U]=X,M=U);else if(ie<z&&0>a(le,X))W[M]=le,W[ie]=X,M=ie;else break e}}return V}function a(W,V){var X=W.sortIndex-V.sortIndex;return X!==0?X:W.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();n.unstable_now=function(){return u.now()-d}}var f=[],g=[],m=1,h=null,v=3,x=!1,w=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(W){for(var V=o(g);V!==null;){if(V.callback===null)l(g);else if(V.startTime<=W)l(g),V.sortIndex=V.expirationTime,r(f,V);else break;V=o(g)}}function b(W){if(C=!1,S(W),!w)if(o(f)!==null)w=!0,Q(R);else{var V=o(g);V!==null&&Y(b,V.startTime-W)}}function R(W,V){w=!1,C&&(C=!1,k(P),P=-1),x=!0;var X=v;try{for(S(V),h=o(f);h!==null&&(!(h.expirationTime>V)||W&&!L());){var M=h.callback;if(typeof M=="function"){h.callback=null,v=h.priorityLevel;var z=M(h.expirationTime<=V);V=n.unstable_now(),typeof z=="function"?h.callback=z:h===o(f)&&l(f),S(V)}else l(f);h=o(f)}if(h!==null)var j=!0;else{var U=o(g);U!==null&&Y(b,U.startTime-V),j=!1}return j}finally{h=null,v=X,x=!1}}var N=!1,F=null,P=-1,A=5,O=-1;function L(){return!(n.unstable_now()-O<A)}function D(){if(F!==null){var W=n.unstable_now();O=W;var V=!0;try{V=F(!0,W)}finally{V?J():(N=!1,F=null)}}else N=!1}var J;if(typeof $=="function")J=function(){$(D)};else if(typeof MessageChannel<"u"){var T=new MessageChannel,q=T.port2;T.port1.onmessage=D,J=function(){q.postMessage(null)}}else J=function(){_(D,0)};function Q(W){F=W,N||(N=!0,J())}function Y(W,V){P=_(function(){W(n.unstable_now())},V)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(W){W.callback=null},n.unstable_continueExecution=function(){w||x||(w=!0,Q(R))},n.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<W?Math.floor(1e3/W):5},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return o(f)},n.unstable_next=function(W){switch(v){case 1:case 2:case 3:var V=3;break;default:V=v}var X=v;v=V;try{return W()}finally{v=X}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(W,V){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var X=v;v=W;try{return V()}finally{v=X}},n.unstable_scheduleCallback=function(W,V,X){var M=n.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?M+X:M):X=M,W){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=X+z,W={id:m++,callback:V,priorityLevel:W,startTime:X,expirationTime:z,sortIndex:-1},X>M?(W.sortIndex=X,r(g,W),o(f)===null&&W===o(g)&&(C?(k(P),P=-1):C=!0,Y(b,X-M))):(W.sortIndex=z,r(f,W),w||x||(w=!0,Q(R))),W},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(W){var V=v;return function(){var X=v;v=V;try{return W.apply(this,arguments)}finally{v=X}}}})(wu)),wu}var Dh;function Ny(){return Dh||(Dh=1,xu.exports=$y()),xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fh;function Py(){if(Fh)return vn;Fh=1;var n=mo(),r=Ny();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l=new Set,a={};function c(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(a[e]=t,e=0;e<t.length;e++)l.add(t[e])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},h={};function v(e){return f.call(h,e)?!0:f.call(m,e)?!1:g.test(e)?h[e]=!0:(m[e]=!0,!1)}function x(e,t,i,s){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return s?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w(e,t,i,s){if(t===null||typeof t>"u"||x(e,t,i,s))return!0;if(s)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function C(e,t,i,s,p,y,E){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=s,this.attributeNamespace=p,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=y,this.removeEmptyString=E}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new C(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new C(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new C(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new C(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new C(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new C(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new C(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new C(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new C(e,5,!1,e.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function $(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(k,$);_[t]=new C(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(k,$);_[t]=new C(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(k,$);_[t]=new C(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new C(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new C(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,i,s){var p=_.hasOwnProperty(t)?_[t]:null;(p!==null?p.type!==0:s||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w(t,i,p,s)&&(i=null),s||p===null?v(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):p.mustUseProperty?e[p.propertyName]=i===null?p.type===3?!1:"":i:(t=p.attributeName,s=p.attributeNamespace,i===null?e.removeAttribute(t):(p=p.type,i=p===3||p===4&&i===!0?"":""+i,s?e.setAttributeNS(s,t,i):e.setAttribute(t,i))))}var b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),L=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),W=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=W&&e[W]||e["@@iterator"],typeof e=="function"?e:null)}var X=Object.assign,M;function z(e){if(M===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return`
`+M+e}var j=!1;function U(e,t){if(!e||j)return"";j=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(te){var s=te}Reflect.construct(e,[],t)}else{try{t.call()}catch(te){s=te}e.call(t.prototype)}else{try{throw Error()}catch(te){s=te}e()}}catch(te){if(te&&s&&typeof te.stack=="string"){for(var p=te.stack.split(`
`),y=s.stack.split(`
`),E=p.length-1,I=y.length-1;1<=E&&0<=I&&p[E]!==y[I];)I--;for(;1<=E&&0<=I;E--,I--)if(p[E]!==y[I]){if(E!==1||I!==1)do if(E--,I--,0>I||p[E]!==y[I]){var H=`
`+p[E].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=E&&0<=I);break}}}finally{j=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?z(e):""}function K(e){switch(e.tag){case 5:return z(e.type);case 16:return z("Lazy");case 13:return z("Suspense");case 19:return z("SuspenseList");case 0:case 2:case 15:return e=U(e.type,!1),e;case 11:return e=U(e.type.render,!1),e;case 1:return e=U(e.type,!0),e;default:return""}}function ie(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case N:return"Portal";case A:return"Profiler";case P:return"StrictMode";case J:return"Suspense";case T:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case L:return(e.displayName||"Context")+".Consumer";case O:return(e._context.displayName||"Context")+".Provider";case D:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:ie(e.type)||"Memo";case Q:t=e._payload,e=e._init;try{return ie(e(t))}catch{}}return null}function le(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(t);case 8:return t===P?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Z(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function fe(e){var t=oe(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),s=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var p=i.get,y=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return p.call(this)},set:function(E){s=""+E,y.call(this,E)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function xe(e){e._valueTracker||(e._valueTracker=fe(e))}function he(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),s="";return e&&(s=oe(e)?e.checked?"true":"false":e.value),e=s,e!==i?(t.setValue(e),!0):!1}function de(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ke(e,t){var i=t.checked;return X({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function be(e,t){var i=t.defaultValue==null?"":t.defaultValue,s=t.checked!=null?t.checked:t.defaultChecked;i=Z(t.value!=null?t.value:i),e._wrapperState={initialChecked:s,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $e(e,t){t=t.checked,t!=null&&S(e,"checked",t,!1)}function Ae(e,t){$e(e,t);var i=Z(t.value),s=t.type;if(i!=null)s==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(s==="submit"||s==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dn(e,t.type,i):t.hasOwnProperty("defaultValue")&&dn(e,t.type,Z(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function sn(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var s=t.type;if(!(s!=="submit"&&s!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function dn(e,t,i){(t!=="number"||de(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var nn=Array.isArray;function tn(e,t,i,s){if(e=e.options,t){t={};for(var p=0;p<i.length;p++)t["$"+i[p]]=!0;for(i=0;i<e.length;i++)p=t.hasOwnProperty("$"+e[i].value),e[i].selected!==p&&(e[i].selected=p),p&&s&&(e[i].defaultSelected=!0)}else{for(i=""+Z(i),t=null,p=0;p<e.length;p++){if(e[p].value===i){e[p].selected=!0,s&&(e[p].defaultSelected=!0);return}t!==null||e[p].disabled||(t=e[p])}t!==null&&(t.selected=!0)}}function lt(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return X({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xn(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(nn(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:Z(i)}}function Kn(e,t){var i=Z(t.value),s=Z(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),s!=null&&(e.defaultValue=""+s)}function fn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pn(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wn(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pn(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mn,_o=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,s,p){MSApp.execUnsafeLocalFunction(function(){return e(t,i,s,p)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mn=Mn||document.createElement("div"),Mn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function at(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Qt={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ea=["Webkit","ms","Moz","O"];Object.keys(Qt).forEach(function(e){Ea.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qt[t]=Qt[e]})});function So(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Qt.hasOwnProperty(e)&&Qt[e]?(""+t).trim():t+"px"}function ko(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var s=i.indexOf("--")===0,p=So(i,t[i],s);i==="float"&&(i="cssFloat"),s?e.setProperty(i,p):e[i]=p}}var Ca=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ui(e,t){if(t){if(Ca[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function ci(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var di=null;function fi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var hi=null,_t=null,St=null;function Eo(e){if(e=Fi(e)){if(typeof hi!="function")throw Error(o(280));var t=e.stateNode;t&&(t=el(t),hi(e.stateNode,e.type,t))}}function Co(e){_t?St?St.push(e):St=[e]:_t=e}function bo(){if(_t){var e=_t,t=St;if(St=_t=null,Eo(e),t)for(e=0;e<t.length;e++)Eo(t[e])}}function $o(e,t){return e(t)}function No(){}var pi=!1;function Po(e,t,i){if(pi)return e(t,i);pi=!0;try{return $o(e,t,i)}finally{pi=!1,(_t!==null||St!==null)&&(No(),bo())}}function Gt(e,t){var i=e.stateNode;if(i===null)return null;var s=el(i);if(s===null)return null;i=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var mi=!1;if(d)try{var qt={};Object.defineProperty(qt,"passive",{get:function(){mi=!0}}),window.addEventListener("test",qt,qt),window.removeEventListener("test",qt,qt)}catch{mi=!1}function ba(e,t,i,s,p,y,E,I,H){var te=Array.prototype.slice.call(arguments,3);try{t.apply(i,te)}catch(se){this.onError(se)}}var Yt=!1,wr=null,_r=!1,gi=null,$a={onError:function(e){Yt=!0,wr=e}};function Na(e,t,i,s,p,y,E,I,H){Yt=!1,wr=null,ba.apply($a,arguments)}function Pa(e,t,i,s,p,y,E,I,H){if(Na.apply(this,arguments),Yt){if(Yt){var te=wr;Yt=!1,wr=null}else throw Error(o(198));_r||(_r=!0,gi=te)}}function Zn(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function yi(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vi(e){if(Zn(e)!==e)throw Error(o(188))}function Ma(e){var t=e.alternate;if(!t){if(t=Zn(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,s=t;;){var p=i.return;if(p===null)break;var y=p.alternate;if(y===null){if(s=p.return,s!==null){i=s;continue}break}if(p.child===y.child){for(y=p.child;y;){if(y===i)return vi(p),e;if(y===s)return vi(p),t;y=y.sibling}throw Error(o(188))}if(i.return!==s.return)i=p,s=y;else{for(var E=!1,I=p.child;I;){if(I===i){E=!0,i=p,s=y;break}if(I===s){E=!0,s=p,i=y;break}I=I.sibling}if(!E){for(I=y.child;I;){if(I===i){E=!0,i=y,s=p;break}if(I===s){E=!0,s=y,i=p;break}I=I.sibling}if(!E)throw Error(o(189))}}if(i.alternate!==s)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function Mo(e){return e=Ma(e),e!==null?To(e):null}function To(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=To(e);if(t!==null)return t;e=e.sibling}return null}var Lo=r.unstable_scheduleCallback,Ao=r.unstable_cancelCallback,Ta=r.unstable_shouldYield,Ro=r.unstable_requestPaint,ze=r.unstable_now,La=r.unstable_getCurrentPriorityLevel,xi=r.unstable_ImmediatePriority,Io=r.unstable_UserBlockingPriority,Sr=r.unstable_NormalPriority,Aa=r.unstable_LowPriority,Do=r.unstable_IdlePriority,kr=null,_n=null;function Ra(e){if(_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(kr,e,void 0,(e.current.flags&128)===128)}catch{}}var Sn=Math.clz32?Math.clz32:Fa,Ia=Math.log,Da=Math.LN2;function Fa(e){return e>>>=0,e===0?32:31-(Ia(e)/Da|0)|0}var Er=64,Cr=4194304;function Xt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function st(e,t){var i=e.pendingLanes;if(i===0)return 0;var s=0,p=e.suspendedLanes,y=e.pingedLanes,E=i&268435455;if(E!==0){var I=E&~p;I!==0?s=Xt(I):(y&=E,y!==0&&(s=Xt(y)))}else E=i&~p,E!==0?s=Xt(E):y!==0&&(s=Xt(y));if(s===0)return 0;if(t!==0&&t!==s&&(t&p)===0&&(p=s&-s,y=t&-t,p>=y||p===16&&(y&4194240)!==0))return t;if((s&4)!==0&&(s|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=s;0<t;)i=31-Sn(t),p=1<<i,s|=e[i],t&=~p;return s}function ja(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(e,t){for(var i=e.suspendedLanes,s=e.pingedLanes,p=e.expirationTimes,y=e.pendingLanes;0<y;){var E=31-Sn(y),I=1<<E,H=p[E];H===-1?((I&i)===0||(I&s)!==0)&&(p[E]=ja(I,t)):H<=t&&(e.expiredLanes|=I),y&=~I}}function wi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jo(){var e=Er;return Er<<=1,(Er&4194240)===0&&(Er=64),e}function Kt(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Zt(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Sn(t),e[t]=i}function za(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var s=e.eventTimes;for(e=e.expirationTimes;0<i;){var p=31-Sn(i),y=1<<p;t[p]=0,s[p]=-1,e[p]=-1,i&=~y}}function br(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var s=31-Sn(i),p=1<<s;p&t|e[s]&t&&(e[s]|=t),i&=~p}}var Te=0;function sd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ud,Oa,cd,dd,fd,Ha=!1,zo=[],kt=null,Et=null,Ct=null,_i=new Map,Si=new Map,bt=[],Vg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(e,t){switch(e){case"focusin":case"focusout":kt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Ct=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function ki(e,t,i,s,p,y){return e===null||e.nativeEvent!==y?(e={blockedOn:t,domEventName:i,eventSystemFlags:s,nativeEvent:y,targetContainers:[p]},t!==null&&(t=Fi(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,p!==null&&t.indexOf(p)===-1&&t.push(p),e)}function Wg(e,t,i,s,p){switch(t){case"focusin":return kt=ki(kt,e,t,i,s,p),!0;case"dragenter":return Et=ki(Et,e,t,i,s,p),!0;case"mouseover":return Ct=ki(Ct,e,t,i,s,p),!0;case"pointerover":var y=p.pointerId;return _i.set(y,ki(_i.get(y)||null,e,t,i,s,p)),!0;case"gotpointercapture":return y=p.pointerId,Si.set(y,ki(Si.get(y)||null,e,t,i,s,p)),!0}return!1}function pd(e){var t=Jt(e.target);if(t!==null){var i=Zn(t);if(i!==null){if(t=i.tag,t===13){if(t=yi(i),t!==null){e.blockedOn=t,fd(e.priority,function(){cd(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=Va(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var s=new i.constructor(i.type,i);di=s,i.target.dispatchEvent(s),di=null}else return t=Fi(i),t!==null&&Oa(t),e.blockedOn=i,!1;t.shift()}return!0}function md(e,t,i){Oo(e)&&i.delete(t)}function Ug(){Ha=!1,kt!==null&&Oo(kt)&&(kt=null),Et!==null&&Oo(Et)&&(Et=null),Ct!==null&&Oo(Ct)&&(Ct=null),_i.forEach(md),Si.forEach(md)}function Ei(e,t){e.blockedOn===t&&(e.blockedOn=null,Ha||(Ha=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ug)))}function Ci(e){function t(p){return Ei(p,e)}if(0<zo.length){Ei(zo[0],e);for(var i=1;i<zo.length;i++){var s=zo[i];s.blockedOn===e&&(s.blockedOn=null)}}for(kt!==null&&Ei(kt,e),Et!==null&&Ei(Et,e),Ct!==null&&Ei(Ct,e),_i.forEach(t),Si.forEach(t),i=0;i<bt.length;i++)s=bt[i],s.blockedOn===e&&(s.blockedOn=null);for(;0<bt.length&&(i=bt[0],i.blockedOn===null);)pd(i),i.blockedOn===null&&bt.shift()}var $r=b.ReactCurrentBatchConfig,Ho=!0;function Qg(e,t,i,s){var p=Te,y=$r.transition;$r.transition=null;try{Te=1,Ba(e,t,i,s)}finally{Te=p,$r.transition=y}}function Gg(e,t,i,s){var p=Te,y=$r.transition;$r.transition=null;try{Te=4,Ba(e,t,i,s)}finally{Te=p,$r.transition=y}}function Ba(e,t,i,s){if(Ho){var p=Va(e,t,i,s);if(p===null)ls(e,t,s,Bo,i),hd(e,s);else if(Wg(p,e,t,i,s))s.stopPropagation();else if(hd(e,s),t&4&&-1<Vg.indexOf(e)){for(;p!==null;){var y=Fi(p);if(y!==null&&ud(y),y=Va(e,t,i,s),y===null&&ls(e,t,s,Bo,i),y===p)break;p=y}p!==null&&s.stopPropagation()}else ls(e,t,s,null,i)}}var Bo=null;function Va(e,t,i,s){if(Bo=null,e=fi(s),e=Jt(e),e!==null)if(t=Zn(e),t===null)e=null;else if(i=t.tag,i===13){if(e=yi(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function gd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(La()){case xi:return 1;case Io:return 4;case Sr:case Aa:return 16;case Do:return 536870912;default:return 16}default:return 16}}var $t=null,Wa=null,Vo=null;function yd(){if(Vo)return Vo;var e,t=Wa,i=t.length,s,p="value"in $t?$t.value:$t.textContent,y=p.length;for(e=0;e<i&&t[e]===p[e];e++);var E=i-e;for(s=1;s<=E&&t[i-s]===p[y-s];s++);return Vo=p.slice(e,1<s?1-s:void 0)}function Wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function vd(){return!1}function kn(e){function t(i,s,p,y,E){this._reactName=i,this._targetInst=p,this.type=s,this.nativeEvent=y,this.target=E,this.currentTarget=null;for(var I in e)e.hasOwnProperty(I)&&(i=e[I],this[I]=i?i(y):y[I]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Uo:vd,this.isPropagationStopped=vd,this}return X(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var Nr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ua=kn(Nr),bi=X({},Nr,{view:0,detail:0}),qg=kn(bi),Qa,Ga,$i,Qo=X({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ya,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(Qa=e.screenX-$i.screenX,Ga=e.screenY-$i.screenY):Ga=Qa=0,$i=e),Qa)},movementY:function(e){return"movementY"in e?e.movementY:Ga}}),xd=kn(Qo),Yg=X({},Qo,{dataTransfer:0}),Xg=kn(Yg),Kg=X({},bi,{relatedTarget:0}),qa=kn(Kg),Zg=X({},Nr,{animationName:0,elapsedTime:0,pseudoElement:0}),Jg=kn(Zg),e1=X({},Nr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n1=kn(e1),t1=X({},Nr,{data:0}),wd=kn(t1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},i1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o1[e])?!!t[e]:!1}function Ya(){return l1}var a1=X({},bi,{key:function(e){if(e.key){var t=r1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?i1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ya,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),s1=kn(a1),u1=X({},Qo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_d=kn(u1),c1=X({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ya}),d1=kn(c1),f1=X({},Nr,{propertyName:0,elapsedTime:0,pseudoElement:0}),h1=kn(f1),p1=X({},Qo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),m1=kn(p1),g1=[9,13,27,32],Xa=d&&"CompositionEvent"in window,Ni=null;d&&"documentMode"in document&&(Ni=document.documentMode);var y1=d&&"TextEvent"in window&&!Ni,Sd=d&&(!Xa||Ni&&8<Ni&&11>=Ni),kd=" ",Ed=!1;function Cd(e,t){switch(e){case"keyup":return g1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pr=!1;function v1(e,t){switch(e){case"compositionend":return bd(t);case"keypress":return t.which!==32?null:(Ed=!0,kd);case"textInput":return e=t.data,e===kd&&Ed?null:e;default:return null}}function x1(e,t){if(Pr)return e==="compositionend"||!Xa&&Cd(e,t)?(e=yd(),Vo=Wa=$t=null,Pr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sd&&t.locale!=="ko"?null:t.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w1[e.type]:t==="textarea"}function Nd(e,t,i,s){Co(s),t=Ko(t,"onChange"),0<t.length&&(i=new Ua("onChange","change",null,i,s),e.push({event:i,listeners:t}))}var Pi=null,Mi=null;function _1(e){Qd(e,0)}function Go(e){var t=Rr(e);if(he(t))return e}function S1(e,t){if(e==="change")return t}var Pd=!1;if(d){var Ka;if(d){var Za="oninput"in document;if(!Za){var Md=document.createElement("div");Md.setAttribute("oninput","return;"),Za=typeof Md.oninput=="function"}Ka=Za}else Ka=!1;Pd=Ka&&(!document.documentMode||9<document.documentMode)}function Td(){Pi&&(Pi.detachEvent("onpropertychange",Ld),Mi=Pi=null)}function Ld(e){if(e.propertyName==="value"&&Go(Mi)){var t=[];Nd(t,Mi,e,fi(e)),Po(_1,t)}}function k1(e,t,i){e==="focusin"?(Td(),Pi=t,Mi=i,Pi.attachEvent("onpropertychange",Ld)):e==="focusout"&&Td()}function E1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Go(Mi)}function C1(e,t){if(e==="click")return Go(t)}function b1(e,t){if(e==="input"||e==="change")return Go(t)}function $1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fn=typeof Object.is=="function"?Object.is:$1;function Ti(e,t){if(Fn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),s=Object.keys(t);if(i.length!==s.length)return!1;for(s=0;s<i.length;s++){var p=i[s];if(!f.call(t,p)||!Fn(e[p],t[p]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rd(e,t){var i=Ad(e);e=0;for(var s;i;){if(i.nodeType===3){if(s=e+i.textContent.length,e<=t&&s>=t)return{node:i,offset:t-e};e=s}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Ad(i)}}function Id(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Id(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Dd(){for(var e=window,t=de();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=de(e.document)}return t}function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N1(e){var t=Dd(),i=e.focusedElem,s=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&Id(i.ownerDocument.documentElement,i)){if(s!==null&&Ja(i)){if(t=s.start,e=s.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var p=i.textContent.length,y=Math.min(s.start,p);s=s.end===void 0?y:Math.min(s.end,p),!e.extend&&y>s&&(p=s,s=y,y=p),p=Rd(i,y);var E=Rd(i,s);p&&E&&(e.rangeCount!==1||e.anchorNode!==p.node||e.anchorOffset!==p.offset||e.focusNode!==E.node||e.focusOffset!==E.offset)&&(t=t.createRange(),t.setStart(p.node,p.offset),e.removeAllRanges(),y>s?(e.addRange(t),e.extend(E.node,E.offset)):(t.setEnd(E.node,E.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var P1=d&&"documentMode"in document&&11>=document.documentMode,Mr=null,es=null,Li=null,ns=!1;function Fd(e,t,i){var s=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;ns||Mr==null||Mr!==de(s)||(s=Mr,"selectionStart"in s&&Ja(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Li&&Ti(Li,s)||(Li=s,s=Ko(es,"onSelect"),0<s.length&&(t=new Ua("onSelect","select",null,t,i),e.push({event:t,listeners:s}),t.target=Mr)))}function qo(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var Tr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},ts={},jd={};d&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Yo(e){if(ts[e])return ts[e];if(!Tr[e])return e;var t=Tr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in jd)return ts[e]=t[i];return e}var zd=Yo("animationend"),Od=Yo("animationiteration"),Hd=Yo("animationstart"),Bd=Yo("transitionend"),Vd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nt(e,t){Vd.set(e,t),c(t,[e])}for(var rs=0;rs<Wd.length;rs++){var is=Wd[rs],M1=is.toLowerCase(),T1=is[0].toUpperCase()+is.slice(1);Nt(M1,"on"+T1)}Nt(zd,"onAnimationEnd"),Nt(Od,"onAnimationIteration"),Nt(Hd,"onAnimationStart"),Nt("dblclick","onDoubleClick"),Nt("focusin","onFocus"),Nt("focusout","onBlur"),Nt(Bd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),L1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function Ud(e,t,i){var s=e.type||"unknown-event";e.currentTarget=i,Pa(s,t,void 0,e),e.currentTarget=null}function Qd(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var s=e[i],p=s.event;s=s.listeners;e:{var y=void 0;if(t)for(var E=s.length-1;0<=E;E--){var I=s[E],H=I.instance,te=I.currentTarget;if(I=I.listener,H!==y&&p.isPropagationStopped())break e;Ud(p,I,te),y=H}else for(E=0;E<s.length;E++){if(I=s[E],H=I.instance,te=I.currentTarget,I=I.listener,H!==y&&p.isPropagationStopped())break e;Ud(p,I,te),y=H}}}if(_r)throw e=gi,_r=!1,gi=null,e}function Re(e,t){var i=t[fs];i===void 0&&(i=t[fs]=new Set);var s=e+"__bubble";i.has(s)||(Gd(t,e,2,!1),i.add(s))}function os(e,t,i){var s=0;t&&(s|=4),Gd(i,e,s,t)}var Xo="_reactListening"+Math.random().toString(36).slice(2);function Ri(e){if(!e[Xo]){e[Xo]=!0,l.forEach(function(i){i!=="selectionchange"&&(L1.has(i)||os(i,!1,e),os(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xo]||(t[Xo]=!0,os("selectionchange",!1,t))}}function Gd(e,t,i,s){switch(gd(t)){case 1:var p=Qg;break;case 4:p=Gg;break;default:p=Ba}i=p.bind(null,t,i,e),p=void 0,!mi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(p=!0),s?p!==void 0?e.addEventListener(t,i,{capture:!0,passive:p}):e.addEventListener(t,i,!0):p!==void 0?e.addEventListener(t,i,{passive:p}):e.addEventListener(t,i,!1)}function ls(e,t,i,s,p){var y=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var E=s.tag;if(E===3||E===4){var I=s.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(E===4)for(E=s.return;E!==null;){var H=E.tag;if((H===3||H===4)&&(H=E.stateNode.containerInfo,H===p||H.nodeType===8&&H.parentNode===p))return;E=E.return}for(;I!==null;){if(E=Jt(I),E===null)return;if(H=E.tag,H===5||H===6){s=y=E;continue e}I=I.parentNode}}s=s.return}Po(function(){var te=y,se=fi(i),ue=[];e:{var ae=Vd.get(e);if(ae!==void 0){var pe=Ua,ge=e;switch(e){case"keypress":if(Wo(i)===0)break e;case"keydown":case"keyup":pe=s1;break;case"focusin":ge="focus",pe=qa;break;case"focusout":ge="blur",pe=qa;break;case"beforeblur":case"afterblur":pe=qa;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=d1;break;case zd:case Od:case Hd:pe=Jg;break;case Bd:pe=h1;break;case"scroll":pe=qg;break;case"wheel":pe=m1;break;case"copy":case"cut":case"paste":pe=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=_d}var ye=(t&4)!==0,Ve=!ye&&e==="scroll",ee=ye?ae!==null?ae+"Capture":null:ae;ye=[];for(var G=te,ne;G!==null;){ne=G;var ce=ne.stateNode;if(ne.tag===5&&ce!==null&&(ne=ce,ee!==null&&(ce=Gt(G,ee),ce!=null&&ye.push(Ii(G,ce,ne)))),Ve)break;G=G.return}0<ye.length&&(ae=new pe(ae,ge,null,i,se),ue.push({event:ae,listeners:ye}))}}if((t&7)===0){e:{if(ae=e==="mouseover"||e==="pointerover",pe=e==="mouseout"||e==="pointerout",ae&&i!==di&&(ge=i.relatedTarget||i.fromElement)&&(Jt(ge)||ge[ut]))break e;if((pe||ae)&&(ae=se.window===se?se:(ae=se.ownerDocument)?ae.defaultView||ae.parentWindow:window,pe?(ge=i.relatedTarget||i.toElement,pe=te,ge=ge?Jt(ge):null,ge!==null&&(Ve=Zn(ge),ge!==Ve||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(pe=null,ge=te),pe!==ge)){if(ye=xd,ce="onMouseLeave",ee="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(ye=_d,ce="onPointerLeave",ee="onPointerEnter",G="pointer"),Ve=pe==null?ae:Rr(pe),ne=ge==null?ae:Rr(ge),ae=new ye(ce,G+"leave",pe,i,se),ae.target=Ve,ae.relatedTarget=ne,ce=null,Jt(se)===te&&(ye=new ye(ee,G+"enter",ge,i,se),ye.target=ne,ye.relatedTarget=Ve,ce=ye),Ve=ce,pe&&ge)n:{for(ye=pe,ee=ge,G=0,ne=ye;ne;ne=Lr(ne))G++;for(ne=0,ce=ee;ce;ce=Lr(ce))ne++;for(;0<G-ne;)ye=Lr(ye),G--;for(;0<ne-G;)ee=Lr(ee),ne--;for(;G--;){if(ye===ee||ee!==null&&ye===ee.alternate)break n;ye=Lr(ye),ee=Lr(ee)}ye=null}else ye=null;pe!==null&&qd(ue,ae,pe,ye,!1),ge!==null&&Ve!==null&&qd(ue,Ve,ge,ye,!0)}}e:{if(ae=te?Rr(te):window,pe=ae.nodeName&&ae.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ae.type==="file")var ve=S1;else if($d(ae))if(Pd)ve=b1;else{ve=E1;var _e=k1}else(pe=ae.nodeName)&&pe.toLowerCase()==="input"&&(ae.type==="checkbox"||ae.type==="radio")&&(ve=C1);if(ve&&(ve=ve(e,te))){Nd(ue,ve,i,se);break e}_e&&_e(e,ae,te),e==="focusout"&&(_e=ae._wrapperState)&&_e.controlled&&ae.type==="number"&&dn(ae,"number",ae.value)}switch(_e=te?Rr(te):window,e){case"focusin":($d(_e)||_e.contentEditable==="true")&&(Mr=_e,es=te,Li=null);break;case"focusout":Li=es=Mr=null;break;case"mousedown":ns=!0;break;case"contextmenu":case"mouseup":case"dragend":ns=!1,Fd(ue,i,se);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":Fd(ue,i,se)}var Se;if(Xa)e:{switch(e){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else Pr?Cd(e,i)&&(Ee="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Ee="onCompositionStart");Ee&&(Sd&&i.locale!=="ko"&&(Pr||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&Pr&&(Se=yd()):($t=se,Wa="value"in $t?$t.value:$t.textContent,Pr=!0)),_e=Ko(te,Ee),0<_e.length&&(Ee=new wd(Ee,e,null,i,se),ue.push({event:Ee,listeners:_e}),Se?Ee.data=Se:(Se=bd(i),Se!==null&&(Ee.data=Se)))),(Se=y1?v1(e,i):x1(e,i))&&(te=Ko(te,"onBeforeInput"),0<te.length&&(se=new wd("onBeforeInput","beforeinput",null,i,se),ue.push({event:se,listeners:te}),se.data=Se))}Qd(ue,t)})}function Ii(e,t,i){return{instance:e,listener:t,currentTarget:i}}function Ko(e,t){for(var i=t+"Capture",s=[];e!==null;){var p=e,y=p.stateNode;p.tag===5&&y!==null&&(p=y,y=Gt(e,i),y!=null&&s.unshift(Ii(e,y,p)),y=Gt(e,t),y!=null&&s.push(Ii(e,y,p))),e=e.return}return s}function Lr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qd(e,t,i,s,p){for(var y=t._reactName,E=[];i!==null&&i!==s;){var I=i,H=I.alternate,te=I.stateNode;if(H!==null&&H===s)break;I.tag===5&&te!==null&&(I=te,p?(H=Gt(i,y),H!=null&&E.unshift(Ii(i,H,I))):p||(H=Gt(i,y),H!=null&&E.push(Ii(i,H,I)))),i=i.return}E.length!==0&&e.push({event:t,listeners:E})}var A1=/\r\n?/g,R1=/\u0000|\uFFFD/g;function Yd(e){return(typeof e=="string"?e:""+e).replace(A1,`
`).replace(R1,"")}function Zo(e,t,i){if(t=Yd(t),Yd(e)!==t&&i)throw Error(o(425))}function Jo(){}var as=null,ss=null;function us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=typeof setTimeout=="function"?setTimeout:void 0,I1=typeof clearTimeout=="function"?clearTimeout:void 0,Xd=typeof Promise=="function"?Promise:void 0,D1=typeof queueMicrotask=="function"?queueMicrotask:typeof Xd<"u"?function(e){return Xd.resolve(null).then(e).catch(F1)}:cs;function F1(e){setTimeout(function(){throw e})}function ds(e,t){var i=t,s=0;do{var p=i.nextSibling;if(e.removeChild(i),p&&p.nodeType===8)if(i=p.data,i==="/$"){if(s===0){e.removeChild(p),Ci(t);return}s--}else i!=="$"&&i!=="$?"&&i!=="$!"||s++;i=p}while(i);Ci(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),Jn="__reactFiber$"+Ar,Di="__reactProps$"+Ar,ut="__reactContainer$"+Ar,fs="__reactEvents$"+Ar,j1="__reactListeners$"+Ar,z1="__reactHandles$"+Ar;function Jt(e){var t=e[Jn];if(t)return t;for(var i=e.parentNode;i;){if(t=i[ut]||i[Jn]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=Kd(e);e!==null;){if(i=e[Jn])return i;e=Kd(e)}return t}e=i,i=e.parentNode}return null}function Fi(e){return e=e[Jn]||e[ut],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Rr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function el(e){return e[Di]||null}var hs=[],Ir=-1;function Mt(e){return{current:e}}function Ie(e){0>Ir||(e.current=hs[Ir],hs[Ir]=null,Ir--)}function Le(e,t){Ir++,hs[Ir]=e.current,e.current=t}var Tt={},rn=Mt(Tt),hn=Mt(!1),er=Tt;function Dr(e,t){var i=e.type.contextTypes;if(!i)return Tt;var s=e.stateNode;if(s&&s.__reactInternalMemoizedUnmaskedChildContext===t)return s.__reactInternalMemoizedMaskedChildContext;var p={},y;for(y in i)p[y]=t[y];return s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=p),p}function pn(e){return e=e.childContextTypes,e!=null}function nl(){Ie(hn),Ie(rn)}function Zd(e,t,i){if(rn.current!==Tt)throw Error(o(168));Le(rn,t),Le(hn,i)}function Jd(e,t,i){var s=e.stateNode;if(t=t.childContextTypes,typeof s.getChildContext!="function")return i;s=s.getChildContext();for(var p in s)if(!(p in t))throw Error(o(108,le(e)||"Unknown",p));return X({},i,s)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Tt,er=rn.current,Le(rn,e),Le(hn,hn.current),!0}function ef(e,t,i){var s=e.stateNode;if(!s)throw Error(o(169));i?(e=Jd(e,t,er),s.__reactInternalMemoizedMergedChildContext=e,Ie(hn),Ie(rn),Le(rn,e)):Ie(hn),Le(hn,i)}var ct=null,rl=!1,ps=!1;function nf(e){ct===null?ct=[e]:ct.push(e)}function O1(e){rl=!0,nf(e)}function Lt(){if(!ps&&ct!==null){ps=!0;var e=0,t=Te;try{var i=ct;for(Te=1;e<i.length;e++){var s=i[e];do s=s(!0);while(s!==null)}ct=null,rl=!1}catch(p){throw ct!==null&&(ct=ct.slice(e+1)),Lo(xi,Lt),p}finally{Te=t,ps=!1}}return null}var Fr=[],jr=0,il=null,ol=0,Tn=[],Ln=0,nr=null,dt=1,ft="";function tr(e,t){Fr[jr++]=ol,Fr[jr++]=il,il=e,ol=t}function tf(e,t,i){Tn[Ln++]=dt,Tn[Ln++]=ft,Tn[Ln++]=nr,nr=e;var s=dt;e=ft;var p=32-Sn(s)-1;s&=~(1<<p),i+=1;var y=32-Sn(t)+p;if(30<y){var E=p-p%5;y=(s&(1<<E)-1).toString(32),s>>=E,p-=E,dt=1<<32-Sn(t)+p|i<<p|s,ft=y+e}else dt=1<<y|i<<p|s,ft=e}function ms(e){e.return!==null&&(tr(e,1),tf(e,1,0))}function gs(e){for(;e===il;)il=Fr[--jr],Fr[jr]=null,ol=Fr[--jr],Fr[jr]=null;for(;e===nr;)nr=Tn[--Ln],Tn[Ln]=null,ft=Tn[--Ln],Tn[Ln]=null,dt=Tn[--Ln],Tn[Ln]=null}var En=null,Cn=null,De=!1,jn=null;function rf(e,t){var i=Dn(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function of(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,En=e,Cn=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,En=e,Cn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=nr!==null?{id:dt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Dn(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,En=e,Cn=null,!0):!1;default:return!1}}function ys(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vs(e){if(De){var t=Cn;if(t){var i=t;if(!of(e,t)){if(ys(e))throw Error(o(418));t=Pt(i.nextSibling);var s=En;t&&of(e,t)?rf(s,i):(e.flags=e.flags&-4097|2,De=!1,En=e)}}else{if(ys(e))throw Error(o(418));e.flags=e.flags&-4097|2,De=!1,En=e}}}function lf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;En=e}function ll(e){if(e!==En)return!1;if(!De)return lf(e),De=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!us(e.type,e.memoizedProps)),t&&(t=Cn)){if(ys(e))throw af(),Error(o(418));for(;t;)rf(e,t),t=Pt(t.nextSibling)}if(lf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){Cn=Pt(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}Cn=null}}else Cn=En?Pt(e.stateNode.nextSibling):null;return!0}function af(){for(var e=Cn;e;)e=Pt(e.nextSibling)}function zr(){Cn=En=null,De=!1}function xs(e){jn===null?jn=[e]:jn.push(e)}var H1=b.ReactCurrentBatchConfig;function ji(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var s=i.stateNode}if(!s)throw Error(o(147,e));var p=s,y=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===y?t.ref:(t=function(E){var I=p.refs;E===null?delete I[y]:I[y]=E},t._stringRef=y,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function al(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sf(e){var t=e._init;return t(e._payload)}function uf(e){function t(ee,G){if(e){var ne=ee.deletions;ne===null?(ee.deletions=[G],ee.flags|=16):ne.push(G)}}function i(ee,G){if(!e)return null;for(;G!==null;)t(ee,G),G=G.sibling;return null}function s(ee,G){for(ee=new Map;G!==null;)G.key!==null?ee.set(G.key,G):ee.set(G.index,G),G=G.sibling;return ee}function p(ee,G){return ee=Ot(ee,G),ee.index=0,ee.sibling=null,ee}function y(ee,G,ne){return ee.index=ne,e?(ne=ee.alternate,ne!==null?(ne=ne.index,ne<G?(ee.flags|=2,G):ne):(ee.flags|=2,G)):(ee.flags|=1048576,G)}function E(ee){return e&&ee.alternate===null&&(ee.flags|=2),ee}function I(ee,G,ne,ce){return G===null||G.tag!==6?(G=cu(ne,ee.mode,ce),G.return=ee,G):(G=p(G,ne),G.return=ee,G)}function H(ee,G,ne,ce){var ve=ne.type;return ve===F?se(ee,G,ne.props.children,ce,ne.key):G!==null&&(G.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Q&&sf(ve)===G.type)?(ce=p(G,ne.props),ce.ref=ji(ee,G,ne),ce.return=ee,ce):(ce=Tl(ne.type,ne.key,ne.props,null,ee.mode,ce),ce.ref=ji(ee,G,ne),ce.return=ee,ce)}function te(ee,G,ne,ce){return G===null||G.tag!==4||G.stateNode.containerInfo!==ne.containerInfo||G.stateNode.implementation!==ne.implementation?(G=du(ne,ee.mode,ce),G.return=ee,G):(G=p(G,ne.children||[]),G.return=ee,G)}function se(ee,G,ne,ce,ve){return G===null||G.tag!==7?(G=cr(ne,ee.mode,ce,ve),G.return=ee,G):(G=p(G,ne),G.return=ee,G)}function ue(ee,G,ne){if(typeof G=="string"&&G!==""||typeof G=="number")return G=cu(""+G,ee.mode,ne),G.return=ee,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case R:return ne=Tl(G.type,G.key,G.props,null,ee.mode,ne),ne.ref=ji(ee,null,G),ne.return=ee,ne;case N:return G=du(G,ee.mode,ne),G.return=ee,G;case Q:var ce=G._init;return ue(ee,ce(G._payload),ne)}if(nn(G)||V(G))return G=cr(G,ee.mode,ne,null),G.return=ee,G;al(ee,G)}return null}function ae(ee,G,ne,ce){var ve=G!==null?G.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ve!==null?null:I(ee,G,""+ne,ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case R:return ne.key===ve?H(ee,G,ne,ce):null;case N:return ne.key===ve?te(ee,G,ne,ce):null;case Q:return ve=ne._init,ae(ee,G,ve(ne._payload),ce)}if(nn(ne)||V(ne))return ve!==null?null:se(ee,G,ne,ce,null);al(ee,ne)}return null}function pe(ee,G,ne,ce,ve){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ee=ee.get(ne)||null,I(G,ee,""+ce,ve);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case R:return ee=ee.get(ce.key===null?ne:ce.key)||null,H(G,ee,ce,ve);case N:return ee=ee.get(ce.key===null?ne:ce.key)||null,te(G,ee,ce,ve);case Q:var _e=ce._init;return pe(ee,G,ne,_e(ce._payload),ve)}if(nn(ce)||V(ce))return ee=ee.get(ne)||null,se(G,ee,ce,ve,null);al(G,ce)}return null}function ge(ee,G,ne,ce){for(var ve=null,_e=null,Se=G,Ee=G=0,Ze=null;Se!==null&&Ee<ne.length;Ee++){Se.index>Ee?(Ze=Se,Se=null):Ze=Se.sibling;var Me=ae(ee,Se,ne[Ee],ce);if(Me===null){Se===null&&(Se=Ze);break}e&&Se&&Me.alternate===null&&t(ee,Se),G=y(Me,G,Ee),_e===null?ve=Me:_e.sibling=Me,_e=Me,Se=Ze}if(Ee===ne.length)return i(ee,Se),De&&tr(ee,Ee),ve;if(Se===null){for(;Ee<ne.length;Ee++)Se=ue(ee,ne[Ee],ce),Se!==null&&(G=y(Se,G,Ee),_e===null?ve=Se:_e.sibling=Se,_e=Se);return De&&tr(ee,Ee),ve}for(Se=s(ee,Se);Ee<ne.length;Ee++)Ze=pe(Se,ee,Ee,ne[Ee],ce),Ze!==null&&(e&&Ze.alternate!==null&&Se.delete(Ze.key===null?Ee:Ze.key),G=y(Ze,G,Ee),_e===null?ve=Ze:_e.sibling=Ze,_e=Ze);return e&&Se.forEach(function(Ht){return t(ee,Ht)}),De&&tr(ee,Ee),ve}function ye(ee,G,ne,ce){var ve=V(ne);if(typeof ve!="function")throw Error(o(150));if(ne=ve.call(ne),ne==null)throw Error(o(151));for(var _e=ve=null,Se=G,Ee=G=0,Ze=null,Me=ne.next();Se!==null&&!Me.done;Ee++,Me=ne.next()){Se.index>Ee?(Ze=Se,Se=null):Ze=Se.sibling;var Ht=ae(ee,Se,Me.value,ce);if(Ht===null){Se===null&&(Se=Ze);break}e&&Se&&Ht.alternate===null&&t(ee,Se),G=y(Ht,G,Ee),_e===null?ve=Ht:_e.sibling=Ht,_e=Ht,Se=Ze}if(Me.done)return i(ee,Se),De&&tr(ee,Ee),ve;if(Se===null){for(;!Me.done;Ee++,Me=ne.next())Me=ue(ee,Me.value,ce),Me!==null&&(G=y(Me,G,Ee),_e===null?ve=Me:_e.sibling=Me,_e=Me);return De&&tr(ee,Ee),ve}for(Se=s(ee,Se);!Me.done;Ee++,Me=ne.next())Me=pe(Se,ee,Ee,Me.value,ce),Me!==null&&(e&&Me.alternate!==null&&Se.delete(Me.key===null?Ee:Me.key),G=y(Me,G,Ee),_e===null?ve=Me:_e.sibling=Me,_e=Me);return e&&Se.forEach(function(wy){return t(ee,wy)}),De&&tr(ee,Ee),ve}function Ve(ee,G,ne,ce){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case R:e:{for(var ve=ne.key,_e=G;_e!==null;){if(_e.key===ve){if(ve=ne.type,ve===F){if(_e.tag===7){i(ee,_e.sibling),G=p(_e,ne.props.children),G.return=ee,ee=G;break e}}else if(_e.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===Q&&sf(ve)===_e.type){i(ee,_e.sibling),G=p(_e,ne.props),G.ref=ji(ee,_e,ne),G.return=ee,ee=G;break e}i(ee,_e);break}else t(ee,_e);_e=_e.sibling}ne.type===F?(G=cr(ne.props.children,ee.mode,ce,ne.key),G.return=ee,ee=G):(ce=Tl(ne.type,ne.key,ne.props,null,ee.mode,ce),ce.ref=ji(ee,G,ne),ce.return=ee,ee=ce)}return E(ee);case N:e:{for(_e=ne.key;G!==null;){if(G.key===_e)if(G.tag===4&&G.stateNode.containerInfo===ne.containerInfo&&G.stateNode.implementation===ne.implementation){i(ee,G.sibling),G=p(G,ne.children||[]),G.return=ee,ee=G;break e}else{i(ee,G);break}else t(ee,G);G=G.sibling}G=du(ne,ee.mode,ce),G.return=ee,ee=G}return E(ee);case Q:return _e=ne._init,Ve(ee,G,_e(ne._payload),ce)}if(nn(ne))return ge(ee,G,ne,ce);if(V(ne))return ye(ee,G,ne,ce);al(ee,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,G!==null&&G.tag===6?(i(ee,G.sibling),G=p(G,ne),G.return=ee,ee=G):(i(ee,G),G=cu(ne,ee.mode,ce),G.return=ee,ee=G),E(ee)):i(ee,G)}return Ve}var Or=uf(!0),cf=uf(!1),sl=Mt(null),ul=null,Hr=null,ws=null;function _s(){ws=Hr=ul=null}function Ss(e){var t=sl.current;Ie(sl),e._currentValue=t}function ks(e,t,i){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===i)break;e=e.return}}function Br(e,t){ul=e,ws=Hr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(mn=!0),e.firstContext=null)}function An(e){var t=e._currentValue;if(ws!==e)if(e={context:e,memoizedValue:t,next:null},Hr===null){if(ul===null)throw Error(o(308));Hr=e,ul.dependencies={lanes:0,firstContext:e}}else Hr=Hr.next=e;return t}var rr=null;function Es(e){rr===null?rr=[e]:rr.push(e)}function df(e,t,i,s){var p=t.interleaved;return p===null?(i.next=i,Es(t)):(i.next=p.next,p.next=i),t.interleaved=i,ht(e,s)}function ht(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var At=!1;function Cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ff(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Rt(e,t,i){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Pe&2)!==0){var p=s.pending;return p===null?t.next=t:(t.next=p.next,p.next=t),s.pending=t,ht(e,i)}return p=s.interleaved,p===null?(t.next=t,Es(s)):(t.next=p.next,p.next=t),s.interleaved=t,ht(e,i)}function cl(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,br(e,i)}}function hf(e,t){var i=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,i===s)){var p=null,y=null;if(i=i.firstBaseUpdate,i!==null){do{var E={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};y===null?p=y=E:y=y.next=E,i=i.next}while(i!==null);y===null?p=y=t:y=y.next=t}else p=y=t;i={baseState:s.baseState,firstBaseUpdate:p,lastBaseUpdate:y,shared:s.shared,effects:s.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function dl(e,t,i,s){var p=e.updateQueue;At=!1;var y=p.firstBaseUpdate,E=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var H=I,te=H.next;H.next=null,E===null?y=te:E.next=te,E=H;var se=e.alternate;se!==null&&(se=se.updateQueue,I=se.lastBaseUpdate,I!==E&&(I===null?se.firstBaseUpdate=te:I.next=te,se.lastBaseUpdate=H))}if(y!==null){var ue=p.baseState;E=0,se=te=H=null,I=y;do{var ae=I.lane,pe=I.eventTime;if((s&ae)===ae){se!==null&&(se=se.next={eventTime:pe,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ge=e,ye=I;switch(ae=t,pe=i,ye.tag){case 1:if(ge=ye.payload,typeof ge=="function"){ue=ge.call(pe,ue,ae);break e}ue=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ye.payload,ae=typeof ge=="function"?ge.call(pe,ue,ae):ge,ae==null)break e;ue=X({},ue,ae);break e;case 2:At=!0}}I.callback!==null&&I.lane!==0&&(e.flags|=64,ae=p.effects,ae===null?p.effects=[I]:ae.push(I))}else pe={eventTime:pe,lane:ae,tag:I.tag,payload:I.payload,callback:I.callback,next:null},se===null?(te=se=pe,H=ue):se=se.next=pe,E|=ae;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;ae=I,I=ae.next,ae.next=null,p.lastBaseUpdate=ae,p.shared.pending=null}}while(!0);if(se===null&&(H=ue),p.baseState=H,p.firstBaseUpdate=te,p.lastBaseUpdate=se,t=p.shared.interleaved,t!==null){p=t;do E|=p.lane,p=p.next;while(p!==t)}else y===null&&(p.shared.lanes=0);lr|=E,e.lanes=E,e.memoizedState=ue}}function pf(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var s=e[t],p=s.callback;if(p!==null){if(s.callback=null,s=i,typeof p!="function")throw Error(o(191,p));p.call(s)}}}var zi={},et=Mt(zi),Oi=Mt(zi),Hi=Mt(zi);function ir(e){if(e===zi)throw Error(o(174));return e}function bs(e,t){switch(Le(Hi,t),Le(Oi,e),Le(et,zi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wn(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wn(t,e)}Ie(et),Le(et,t)}function Vr(){Ie(et),Ie(Oi),Ie(Hi)}function mf(e){ir(Hi.current);var t=ir(et.current),i=wn(t,e.type);t!==i&&(Le(Oi,e),Le(et,i))}function $s(e){Oi.current===e&&(Ie(et),Ie(Oi))}var Oe=Mt(0);function fl(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ns=[];function Ps(){for(var e=0;e<Ns.length;e++)Ns[e]._workInProgressVersionPrimary=null;Ns.length=0}var hl=b.ReactCurrentDispatcher,Ms=b.ReactCurrentBatchConfig,or=0,He=null,qe=null,Xe=null,pl=!1,Bi=!1,Vi=0,B1=0;function on(){throw Error(o(321))}function Ts(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Fn(e[i],t[i]))return!1;return!0}function Ls(e,t,i,s,p,y){if(or=y,He=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?Q1:G1,e=i(s,p),Bi){y=0;do{if(Bi=!1,Vi=0,25<=y)throw Error(o(301));y+=1,Xe=qe=null,t.updateQueue=null,hl.current=q1,e=i(s,p)}while(Bi)}if(hl.current=yl,t=qe!==null&&qe.next!==null,or=0,Xe=qe=He=null,pl=!1,t)throw Error(o(300));return e}function As(){var e=Vi!==0;return Vi=0,e}function nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?He.memoizedState=Xe=e:Xe=Xe.next=e,Xe}function Rn(){if(qe===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=qe.next;var t=Xe===null?He.memoizedState:Xe.next;if(t!==null)Xe=t,qe=e;else{if(e===null)throw Error(o(310));qe=e,e={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},Xe===null?He.memoizedState=Xe=e:Xe=Xe.next=e}return Xe}function Wi(e,t){return typeof t=="function"?t(e):t}function Rs(e){var t=Rn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=qe,p=s.baseQueue,y=i.pending;if(y!==null){if(p!==null){var E=p.next;p.next=y.next,y.next=E}s.baseQueue=p=y,i.pending=null}if(p!==null){y=p.next,s=s.baseState;var I=E=null,H=null,te=y;do{var se=te.lane;if((or&se)===se)H!==null&&(H=H.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),s=te.hasEagerState?te.eagerState:e(s,te.action);else{var ue={lane:se,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};H===null?(I=H=ue,E=s):H=H.next=ue,He.lanes|=se,lr|=se}te=te.next}while(te!==null&&te!==y);H===null?E=s:H.next=I,Fn(s,t.memoizedState)||(mn=!0),t.memoizedState=s,t.baseState=E,t.baseQueue=H,i.lastRenderedState=s}if(e=i.interleaved,e!==null){p=e;do y=p.lane,He.lanes|=y,lr|=y,p=p.next;while(p!==e)}else p===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function Is(e){var t=Rn(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var s=i.dispatch,p=i.pending,y=t.memoizedState;if(p!==null){i.pending=null;var E=p=p.next;do y=e(y,E.action),E=E.next;while(E!==p);Fn(y,t.memoizedState)||(mn=!0),t.memoizedState=y,t.baseQueue===null&&(t.baseState=y),i.lastRenderedState=y}return[y,s]}function gf(){}function yf(e,t){var i=He,s=Rn(),p=t(),y=!Fn(s.memoizedState,p);if(y&&(s.memoizedState=p,mn=!0),s=s.queue,Ds(wf.bind(null,i,s,e),[e]),s.getSnapshot!==t||y||Xe!==null&&Xe.memoizedState.tag&1){if(i.flags|=2048,Ui(9,xf.bind(null,i,s,p,t),void 0,null),Ke===null)throw Error(o(349));(or&30)!==0||vf(i,t,p)}return p}function vf(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function xf(e,t,i,s){t.value=i,t.getSnapshot=s,_f(t)&&Sf(e)}function wf(e,t,i){return i(function(){_f(t)&&Sf(e)})}function _f(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Fn(e,i)}catch{return!0}}function Sf(e){var t=ht(e,1);t!==null&&Bn(t,e,1,-1)}function kf(e){var t=nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},t.queue=e,e=e.dispatch=U1.bind(null,He,e),[t.memoizedState,e]}function Ui(e,t,i,s){return e={tag:e,create:t,destroy:i,deps:s,next:null},t=He.updateQueue,t===null?(t={lastEffect:null,stores:null},He.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(s=i.next,i.next=e,e.next=s,t.lastEffect=e)),e}function Ef(){return Rn().memoizedState}function ml(e,t,i,s){var p=nt();He.flags|=e,p.memoizedState=Ui(1|t,i,void 0,s===void 0?null:s)}function gl(e,t,i,s){var p=Rn();s=s===void 0?null:s;var y=void 0;if(qe!==null){var E=qe.memoizedState;if(y=E.destroy,s!==null&&Ts(s,E.deps)){p.memoizedState=Ui(t,i,y,s);return}}He.flags|=e,p.memoizedState=Ui(1|t,i,y,s)}function Cf(e,t){return ml(8390656,8,e,t)}function Ds(e,t){return gl(2048,8,e,t)}function bf(e,t){return gl(4,2,e,t)}function $f(e,t){return gl(4,4,e,t)}function Nf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Pf(e,t,i){return i=i!=null?i.concat([e]):null,gl(4,4,Nf.bind(null,t,e),i)}function Fs(){}function Mf(e,t){var i=Rn();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Ts(t,s[1])?s[0]:(i.memoizedState=[e,t],e)}function Tf(e,t){var i=Rn();t=t===void 0?null:t;var s=i.memoizedState;return s!==null&&t!==null&&Ts(t,s[1])?s[0]:(e=e(),i.memoizedState=[e,t],e)}function Lf(e,t,i){return(or&21)===0?(e.baseState&&(e.baseState=!1,mn=!0),e.memoizedState=i):(Fn(i,t)||(i=jo(),He.lanes|=i,lr|=i,e.baseState=!0),t)}function V1(e,t){var i=Te;Te=i!==0&&4>i?i:4,e(!0);var s=Ms.transition;Ms.transition={};try{e(!1),t()}finally{Te=i,Ms.transition=s}}function Af(){return Rn().memoizedState}function W1(e,t,i){var s=jt(e);if(i={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null},Rf(e))If(t,i);else if(i=df(e,t,i,s),i!==null){var p=cn();Bn(i,e,s,p),Df(i,t,s)}}function U1(e,t,i){var s=jt(e),p={lane:s,action:i,hasEagerState:!1,eagerState:null,next:null};if(Rf(e))If(t,p);else{var y=e.alternate;if(e.lanes===0&&(y===null||y.lanes===0)&&(y=t.lastRenderedReducer,y!==null))try{var E=t.lastRenderedState,I=y(E,i);if(p.hasEagerState=!0,p.eagerState=I,Fn(I,E)){var H=t.interleaved;H===null?(p.next=p,Es(t)):(p.next=H.next,H.next=p),t.interleaved=p;return}}catch{}finally{}i=df(e,t,p,s),i!==null&&(p=cn(),Bn(i,e,s,p),Df(i,t,s))}}function Rf(e){var t=e.alternate;return e===He||t!==null&&t===He}function If(e,t){Bi=pl=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function Df(e,t,i){if((i&4194240)!==0){var s=t.lanes;s&=e.pendingLanes,i|=s,t.lanes=i,br(e,i)}}var yl={readContext:An,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useInsertionEffect:on,useLayoutEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useMutableSource:on,useSyncExternalStore:on,useId:on,unstable_isNewReconciler:!1},Q1={readContext:An,useCallback:function(e,t){return nt().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:Cf,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,ml(4194308,4,Nf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return ml(4194308,4,e,t)},useInsertionEffect:function(e,t){return ml(4,2,e,t)},useMemo:function(e,t){var i=nt();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var s=nt();return t=i!==void 0?i(t):t,s.memoizedState=s.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},s.queue=e,e=e.dispatch=W1.bind(null,He,e),[s.memoizedState,e]},useRef:function(e){var t=nt();return e={current:e},t.memoizedState=e},useState:kf,useDebugValue:Fs,useDeferredValue:function(e){return nt().memoizedState=e},useTransition:function(){var e=kf(!1),t=e[0];return e=V1.bind(null,e[1]),nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var s=He,p=nt();if(De){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),Ke===null)throw Error(o(349));(or&30)!==0||vf(s,t,i)}p.memoizedState=i;var y={value:i,getSnapshot:t};return p.queue=y,Cf(wf.bind(null,s,y,e),[e]),s.flags|=2048,Ui(9,xf.bind(null,s,y,i,t),void 0,null),i},useId:function(){var e=nt(),t=Ke.identifierPrefix;if(De){var i=ft,s=dt;i=(s&~(1<<32-Sn(s)-1)).toString(32)+i,t=":"+t+"R"+i,i=Vi++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=B1++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},G1={readContext:An,useCallback:Mf,useContext:An,useEffect:Ds,useImperativeHandle:Pf,useInsertionEffect:bf,useLayoutEffect:$f,useMemo:Tf,useReducer:Rs,useRef:Ef,useState:function(){return Rs(Wi)},useDebugValue:Fs,useDeferredValue:function(e){var t=Rn();return Lf(t,qe.memoizedState,e)},useTransition:function(){var e=Rs(Wi)[0],t=Rn().memoizedState;return[e,t]},useMutableSource:gf,useSyncExternalStore:yf,useId:Af,unstable_isNewReconciler:!1},q1={readContext:An,useCallback:Mf,useContext:An,useEffect:Ds,useImperativeHandle:Pf,useInsertionEffect:bf,useLayoutEffect:$f,useMemo:Tf,useReducer:Is,useRef:Ef,useState:function(){return Is(Wi)},useDebugValue:Fs,useDeferredValue:function(e){var t=Rn();return qe===null?t.memoizedState=e:Lf(t,qe.memoizedState,e)},useTransition:function(){var e=Is(Wi)[0],t=Rn().memoizedState;return[e,t]},useMutableSource:gf,useSyncExternalStore:yf,useId:Af,unstable_isNewReconciler:!1};function zn(e,t){if(e&&e.defaultProps){t=X({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function js(e,t,i,s){t=e.memoizedState,i=i(s,t),i=i==null?t:X({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var vl={isMounted:function(e){return(e=e._reactInternals)?Zn(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var s=cn(),p=jt(e),y=pt(s,p);y.payload=t,i!=null&&(y.callback=i),t=Rt(e,y,p),t!==null&&(Bn(t,e,p,s),cl(t,e,p))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var s=cn(),p=jt(e),y=pt(s,p);y.tag=1,y.payload=t,i!=null&&(y.callback=i),t=Rt(e,y,p),t!==null&&(Bn(t,e,p,s),cl(t,e,p))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=cn(),s=jt(e),p=pt(i,s);p.tag=2,t!=null&&(p.callback=t),t=Rt(e,p,s),t!==null&&(Bn(t,e,s,i),cl(t,e,s))}};function Ff(e,t,i,s,p,y,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,y,E):t.prototype&&t.prototype.isPureReactComponent?!Ti(i,s)||!Ti(p,y):!0}function jf(e,t,i){var s=!1,p=Tt,y=t.contextType;return typeof y=="object"&&y!==null?y=An(y):(p=pn(t)?er:rn.current,s=t.contextTypes,y=(s=s!=null)?Dr(e,p):Tt),t=new t(i,y),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vl,e.stateNode=t,t._reactInternals=e,s&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=p,e.__reactInternalMemoizedMaskedChildContext=y),t}function zf(e,t,i,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,s),t.state!==e&&vl.enqueueReplaceState(t,t.state,null)}function zs(e,t,i,s){var p=e.stateNode;p.props=i,p.state=e.memoizedState,p.refs={},Cs(e);var y=t.contextType;typeof y=="object"&&y!==null?p.context=An(y):(y=pn(t)?er:rn.current,p.context=Dr(e,y)),p.state=e.memoizedState,y=t.getDerivedStateFromProps,typeof y=="function"&&(js(e,t,y,i),p.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(t=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),t!==p.state&&vl.enqueueReplaceState(p,p.state,null),dl(e,i,p,s),p.state=e.memoizedState),typeof p.componentDidMount=="function"&&(e.flags|=4194308)}function Wr(e,t){try{var i="",s=t;do i+=K(s),s=s.return;while(s);var p=i}catch(y){p=`
Error generating stack: `+y.message+`
`+y.stack}return{value:e,source:t,stack:p,digest:null}}function Os(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function Hs(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Y1=typeof WeakMap=="function"?WeakMap:Map;function Of(e,t,i){i=pt(-1,i),i.tag=3,i.payload={element:null};var s=t.value;return i.callback=function(){Cl||(Cl=!0,tu=s),Hs(e,t)},i}function Hf(e,t,i){i=pt(-1,i),i.tag=3;var s=e.type.getDerivedStateFromError;if(typeof s=="function"){var p=t.value;i.payload=function(){return s(p)},i.callback=function(){Hs(e,t)}}var y=e.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(i.callback=function(){Hs(e,t),typeof s!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var E=t.stack;this.componentDidCatch(t.value,{componentStack:E!==null?E:""})}),i}function Bf(e,t,i){var s=e.pingCache;if(s===null){s=e.pingCache=new Y1;var p=new Set;s.set(t,p)}else p=s.get(t),p===void 0&&(p=new Set,s.set(t,p));p.has(i)||(p.add(i),e=uy.bind(null,e,t,i),t.then(e,e))}function Vf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wf(e,t,i,s,p){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=pt(-1,1),t.tag=2,Rt(i,t,1))),i.lanes|=1),e):(e.flags|=65536,e.lanes=p,e)}var X1=b.ReactCurrentOwner,mn=!1;function un(e,t,i,s){t.child=e===null?cf(t,null,i,s):Or(t,e.child,i,s)}function Uf(e,t,i,s,p){i=i.render;var y=t.ref;return Br(t,p),s=Ls(e,t,i,s,y,p),i=As(),e!==null&&!mn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~p,mt(e,t,p)):(De&&i&&ms(t),t.flags|=1,un(e,t,s,p),t.child)}function Qf(e,t,i,s,p){if(e===null){var y=i.type;return typeof y=="function"&&!uu(y)&&y.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=y,Gf(e,t,y,s,p)):(e=Tl(i.type,null,s,t,t.mode,p),e.ref=t.ref,e.return=t,t.child=e)}if(y=e.child,(e.lanes&p)===0){var E=y.memoizedProps;if(i=i.compare,i=i!==null?i:Ti,i(E,s)&&e.ref===t.ref)return mt(e,t,p)}return t.flags|=1,e=Ot(y,s),e.ref=t.ref,e.return=t,t.child=e}function Gf(e,t,i,s,p){if(e!==null){var y=e.memoizedProps;if(Ti(y,s)&&e.ref===t.ref)if(mn=!1,t.pendingProps=s=y,(e.lanes&p)!==0)(e.flags&131072)!==0&&(mn=!0);else return t.lanes=e.lanes,mt(e,t,p)}return Bs(e,t,i,s,p)}function qf(e,t,i){var s=t.pendingProps,p=s.children,y=e!==null?e.memoizedState:null;if(s.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(Qr,bn),bn|=i;else{if((i&1073741824)===0)return e=y!==null?y.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Le(Qr,bn),bn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},s=y!==null?y.baseLanes:i,Le(Qr,bn),bn|=s}else y!==null?(s=y.baseLanes|i,t.memoizedState=null):s=i,Le(Qr,bn),bn|=s;return un(e,t,p,i),t.child}function Yf(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function Bs(e,t,i,s,p){var y=pn(i)?er:rn.current;return y=Dr(t,y),Br(t,p),i=Ls(e,t,i,s,y,p),s=As(),e!==null&&!mn?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~p,mt(e,t,p)):(De&&s&&ms(t),t.flags|=1,un(e,t,i,p),t.child)}function Xf(e,t,i,s,p){if(pn(i)){var y=!0;tl(t)}else y=!1;if(Br(t,p),t.stateNode===null)wl(e,t),jf(t,i,s),zs(t,i,s,p),s=!0;else if(e===null){var E=t.stateNode,I=t.memoizedProps;E.props=I;var H=E.context,te=i.contextType;typeof te=="object"&&te!==null?te=An(te):(te=pn(i)?er:rn.current,te=Dr(t,te));var se=i.getDerivedStateFromProps,ue=typeof se=="function"||typeof E.getSnapshotBeforeUpdate=="function";ue||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==s||H!==te)&&zf(t,E,s,te),At=!1;var ae=t.memoizedState;E.state=ae,dl(t,s,E,p),H=t.memoizedState,I!==s||ae!==H||hn.current||At?(typeof se=="function"&&(js(t,i,se,s),H=t.memoizedState),(I=At||Ff(t,i,I,s,ae,H,te))?(ue||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(t.flags|=4194308)):(typeof E.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=H),E.props=s,E.state=H,E.context=te,s=I):(typeof E.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{E=t.stateNode,ff(e,t),I=t.memoizedProps,te=t.type===t.elementType?I:zn(t.type,I),E.props=te,ue=t.pendingProps,ae=E.context,H=i.contextType,typeof H=="object"&&H!==null?H=An(H):(H=pn(i)?er:rn.current,H=Dr(t,H));var pe=i.getDerivedStateFromProps;(se=typeof pe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ue||ae!==H)&&zf(t,E,s,H),At=!1,ae=t.memoizedState,E.state=ae,dl(t,s,E,p);var ge=t.memoizedState;I!==ue||ae!==ge||hn.current||At?(typeof pe=="function"&&(js(t,i,pe,s),ge=t.memoizedState),(te=At||Ff(t,i,te,s,ae,ge,H)||!1)?(se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(s,ge,H),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(s,ge,H)),typeof E.componentDidUpdate=="function"&&(t.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===e.memoizedProps&&ae===e.memoizedState||(t.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===e.memoizedProps&&ae===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=ge),E.props=s,E.state=ge,E.context=H,s=te):(typeof E.componentDidUpdate!="function"||I===e.memoizedProps&&ae===e.memoizedState||(t.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===e.memoizedProps&&ae===e.memoizedState||(t.flags|=1024),s=!1)}return Vs(e,t,i,s,y,p)}function Vs(e,t,i,s,p,y){Yf(e,t);var E=(t.flags&128)!==0;if(!s&&!E)return p&&ef(t,i,!1),mt(e,t,y);s=t.stateNode,X1.current=t;var I=E&&typeof i.getDerivedStateFromError!="function"?null:s.render();return t.flags|=1,e!==null&&E?(t.child=Or(t,e.child,null,y),t.child=Or(t,null,I,y)):un(e,t,I,y),t.memoizedState=s.state,p&&ef(t,i,!0),t.child}function Kf(e){var t=e.stateNode;t.pendingContext?Zd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zd(e,t.context,!1),bs(e,t.containerInfo)}function Zf(e,t,i,s,p){return zr(),xs(p),t.flags|=256,un(e,t,i,s),t.child}var Ws={dehydrated:null,treeContext:null,retryLane:0};function Us(e){return{baseLanes:e,cachePool:null,transitions:null}}function Jf(e,t,i){var s=t.pendingProps,p=Oe.current,y=!1,E=(t.flags&128)!==0,I;if((I=E)||(I=e!==null&&e.memoizedState===null?!1:(p&2)!==0),I?(y=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(p|=1),Le(Oe,p&1),e===null)return vs(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(E=s.children,e=s.fallback,y?(s=t.mode,y=t.child,E={mode:"hidden",children:E},(s&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=E):y=Ll(E,s,0,null),e=cr(e,s,i,null),y.return=t,e.return=t,y.sibling=e,t.child=y,t.child.memoizedState=Us(i),t.memoizedState=Ws,e):Qs(t,E));if(p=e.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return K1(e,t,E,s,I,p,i);if(y){y=s.fallback,E=t.mode,p=e.child,I=p.sibling;var H={mode:"hidden",children:s.children};return(E&1)===0&&t.child!==p?(s=t.child,s.childLanes=0,s.pendingProps=H,t.deletions=null):(s=Ot(p,H),s.subtreeFlags=p.subtreeFlags&14680064),I!==null?y=Ot(I,y):(y=cr(y,E,i,null),y.flags|=2),y.return=t,s.return=t,s.sibling=y,t.child=s,s=y,y=t.child,E=e.child.memoizedState,E=E===null?Us(i):{baseLanes:E.baseLanes|i,cachePool:null,transitions:E.transitions},y.memoizedState=E,y.childLanes=e.childLanes&~i,t.memoizedState=Ws,s}return y=e.child,e=y.sibling,s=Ot(y,{mode:"visible",children:s.children}),(t.mode&1)===0&&(s.lanes=i),s.return=t,s.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=s,t.memoizedState=null,s}function Qs(e,t){return t=Ll({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function xl(e,t,i,s){return s!==null&&xs(s),Or(t,e.child,null,i),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K1(e,t,i,s,p,y,E){if(i)return t.flags&256?(t.flags&=-257,s=Os(Error(o(422))),xl(e,t,E,s)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(y=s.fallback,p=t.mode,s=Ll({mode:"visible",children:s.children},p,0,null),y=cr(y,p,E,null),y.flags|=2,s.return=t,y.return=t,s.sibling=y,t.child=s,(t.mode&1)!==0&&Or(t,e.child,null,E),t.child.memoizedState=Us(E),t.memoizedState=Ws,y);if((t.mode&1)===0)return xl(e,t,E,null);if(p.data==="$!"){if(s=p.nextSibling&&p.nextSibling.dataset,s)var I=s.dgst;return s=I,y=Error(o(419)),s=Os(y,s,void 0),xl(e,t,E,s)}if(I=(E&e.childLanes)!==0,mn||I){if(s=Ke,s!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(s.suspendedLanes|E))!==0?0:p,p!==0&&p!==y.retryLane&&(y.retryLane=p,ht(e,p),Bn(s,e,p,-1))}return su(),s=Os(Error(o(421))),xl(e,t,E,s)}return p.data==="$?"?(t.flags|=128,t.child=e.child,t=cy.bind(null,e),p._reactRetry=t,null):(e=y.treeContext,Cn=Pt(p.nextSibling),En=t,De=!0,jn=null,e!==null&&(Tn[Ln++]=dt,Tn[Ln++]=ft,Tn[Ln++]=nr,dt=e.id,ft=e.overflow,nr=t),t=Qs(t,s.children),t.flags|=4096,t)}function eh(e,t,i){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),ks(e.return,t,i)}function Gs(e,t,i,s,p){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:i,tailMode:p}:(y.isBackwards=t,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=i,y.tailMode=p)}function nh(e,t,i){var s=t.pendingProps,p=s.revealOrder,y=s.tail;if(un(e,t,s.children,i),s=Oe.current,(s&2)!==0)s=s&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&eh(e,i,t);else if(e.tag===19)eh(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}if(Le(Oe,s),(t.mode&1)===0)t.memoizedState=null;else switch(p){case"forwards":for(i=t.child,p=null;i!==null;)e=i.alternate,e!==null&&fl(e)===null&&(p=i),i=i.sibling;i=p,i===null?(p=t.child,t.child=null):(p=i.sibling,i.sibling=null),Gs(t,!1,p,i,y);break;case"backwards":for(i=null,p=t.child,t.child=null;p!==null;){if(e=p.alternate,e!==null&&fl(e)===null){t.child=p;break}e=p.sibling,p.sibling=i,i=p,p=e}Gs(t,!0,i,null,y);break;case"together":Gs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mt(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,(i&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=Ot(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Ot(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Z1(e,t,i){switch(t.tag){case 3:Kf(t),zr();break;case 5:mf(t);break;case 1:pn(t.type)&&tl(t);break;case 4:bs(t,t.stateNode.containerInfo);break;case 10:var s=t.type._context,p=t.memoizedProps.value;Le(sl,s._currentValue),s._currentValue=p;break;case 13:if(s=t.memoizedState,s!==null)return s.dehydrated!==null?(Le(Oe,Oe.current&1),t.flags|=128,null):(i&t.child.childLanes)!==0?Jf(e,t,i):(Le(Oe,Oe.current&1),e=mt(e,t,i),e!==null?e.sibling:null);Le(Oe,Oe.current&1);break;case 19:if(s=(i&t.childLanes)!==0,(e.flags&128)!==0){if(s)return nh(e,t,i);t.flags|=128}if(p=t.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Le(Oe,Oe.current),s)break;return null;case 22:case 23:return t.lanes=0,qf(e,t,i)}return mt(e,t,i)}var th,qs,rh,ih;th=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},qs=function(){},rh=function(e,t,i,s){var p=e.memoizedProps;if(p!==s){e=t.stateNode,ir(et.current);var y=null;switch(i){case"input":p=ke(e,p),s=ke(e,s),y=[];break;case"select":p=X({},p,{value:void 0}),s=X({},s,{value:void 0}),y=[];break;case"textarea":p=lt(e,p),s=lt(e,s),y=[];break;default:typeof p.onClick!="function"&&typeof s.onClick=="function"&&(e.onclick=Jo)}ui(i,s);var E;i=null;for(te in p)if(!s.hasOwnProperty(te)&&p.hasOwnProperty(te)&&p[te]!=null)if(te==="style"){var I=p[te];for(E in I)I.hasOwnProperty(E)&&(i||(i={}),i[E]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(a.hasOwnProperty(te)?y||(y=[]):(y=y||[]).push(te,null));for(te in s){var H=s[te];if(I=p!=null?p[te]:void 0,s.hasOwnProperty(te)&&H!==I&&(H!=null||I!=null))if(te==="style")if(I){for(E in I)!I.hasOwnProperty(E)||H&&H.hasOwnProperty(E)||(i||(i={}),i[E]="");for(E in H)H.hasOwnProperty(E)&&I[E]!==H[E]&&(i||(i={}),i[E]=H[E])}else i||(y||(y=[]),y.push(te,i)),i=H;else te==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(y=y||[]).push(te,H)):te==="children"?typeof H!="string"&&typeof H!="number"||(y=y||[]).push(te,""+H):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(a.hasOwnProperty(te)?(H!=null&&te==="onScroll"&&Re("scroll",e),y||I===H||(y=[])):(y=y||[]).push(te,H))}i&&(y=y||[]).push("style",i);var te=y;(t.updateQueue=te)&&(t.flags|=4)}},ih=function(e,t,i,s){i!==s&&(t.flags|=4)};function Qi(e,t){if(!De)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function ln(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,s=0;if(t)for(var p=e.child;p!==null;)i|=p.lanes|p.childLanes,s|=p.subtreeFlags&14680064,s|=p.flags&14680064,p.return=e,p=p.sibling;else for(p=e.child;p!==null;)i|=p.lanes|p.childLanes,s|=p.subtreeFlags,s|=p.flags,p.return=e,p=p.sibling;return e.subtreeFlags|=s,e.childLanes=i,t}function J1(e,t,i){var s=t.pendingProps;switch(gs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ln(t),null;case 1:return pn(t.type)&&nl(),ln(t),null;case 3:return s=t.stateNode,Vr(),Ie(hn),Ie(rn),Ps(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ll(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,jn!==null&&(ou(jn),jn=null))),qs(e,t),ln(t),null;case 5:$s(t);var p=ir(Hi.current);if(i=t.type,e!==null&&t.stateNode!=null)rh(e,t,i,s,p),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!s){if(t.stateNode===null)throw Error(o(166));return ln(t),null}if(e=ir(et.current),ll(t)){s=t.stateNode,i=t.type;var y=t.memoizedProps;switch(s[Jn]=t,s[Di]=y,e=(t.mode&1)!==0,i){case"dialog":Re("cancel",s),Re("close",s);break;case"iframe":case"object":case"embed":Re("load",s);break;case"video":case"audio":for(p=0;p<Ai.length;p++)Re(Ai[p],s);break;case"source":Re("error",s);break;case"img":case"image":case"link":Re("error",s),Re("load",s);break;case"details":Re("toggle",s);break;case"input":be(s,y),Re("invalid",s);break;case"select":s._wrapperState={wasMultiple:!!y.multiple},Re("invalid",s);break;case"textarea":Xn(s,y),Re("invalid",s)}ui(i,y),p=null;for(var E in y)if(y.hasOwnProperty(E)){var I=y[E];E==="children"?typeof I=="string"?s.textContent!==I&&(y.suppressHydrationWarning!==!0&&Zo(s.textContent,I,e),p=["children",I]):typeof I=="number"&&s.textContent!==""+I&&(y.suppressHydrationWarning!==!0&&Zo(s.textContent,I,e),p=["children",""+I]):a.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Re("scroll",s)}switch(i){case"input":xe(s),sn(s,y,!0);break;case"textarea":xe(s),fn(s);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(s.onclick=Jo)}s=p,t.updateQueue=s,s!==null&&(t.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pn(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=E.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof s.is=="string"?e=E.createElement(i,{is:s.is}):(e=E.createElement(i),i==="select"&&(E=e,s.multiple?E.multiple=!0:s.size&&(E.size=s.size))):e=E.createElementNS(e,i),e[Jn]=t,e[Di]=s,th(e,t,!1,!1),t.stateNode=e;e:{switch(E=ci(i,s),i){case"dialog":Re("cancel",e),Re("close",e),p=s;break;case"iframe":case"object":case"embed":Re("load",e),p=s;break;case"video":case"audio":for(p=0;p<Ai.length;p++)Re(Ai[p],e);p=s;break;case"source":Re("error",e),p=s;break;case"img":case"image":case"link":Re("error",e),Re("load",e),p=s;break;case"details":Re("toggle",e),p=s;break;case"input":be(e,s),p=ke(e,s),Re("invalid",e);break;case"option":p=s;break;case"select":e._wrapperState={wasMultiple:!!s.multiple},p=X({},s,{value:void 0}),Re("invalid",e);break;case"textarea":Xn(e,s),p=lt(e,s),Re("invalid",e);break;default:p=s}ui(i,p),I=p;for(y in I)if(I.hasOwnProperty(y)){var H=I[y];y==="style"?ko(e,H):y==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&_o(e,H)):y==="children"?typeof H=="string"?(i!=="textarea"||H!=="")&&at(e,H):typeof H=="number"&&at(e,""+H):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(a.hasOwnProperty(y)?H!=null&&y==="onScroll"&&Re("scroll",e):H!=null&&S(e,y,H,E))}switch(i){case"input":xe(e),sn(e,s,!1);break;case"textarea":xe(e),fn(e);break;case"option":s.value!=null&&e.setAttribute("value",""+Z(s.value));break;case"select":e.multiple=!!s.multiple,y=s.value,y!=null?tn(e,!!s.multiple,y,!1):s.defaultValue!=null&&tn(e,!!s.multiple,s.defaultValue,!0);break;default:typeof p.onClick=="function"&&(e.onclick=Jo)}switch(i){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}}s&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ln(t),null;case 6:if(e&&t.stateNode!=null)ih(e,t,e.memoizedProps,s);else{if(typeof s!="string"&&t.stateNode===null)throw Error(o(166));if(i=ir(Hi.current),ir(et.current),ll(t)){if(s=t.stateNode,i=t.memoizedProps,s[Jn]=t,(y=s.nodeValue!==i)&&(e=En,e!==null))switch(e.tag){case 3:Zo(s.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Zo(s.nodeValue,i,(e.mode&1)!==0)}y&&(t.flags|=4)}else s=(i.nodeType===9?i:i.ownerDocument).createTextNode(s),s[Jn]=t,t.stateNode=s}return ln(t),null;case 13:if(Ie(Oe),s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(De&&Cn!==null&&(t.mode&1)!==0&&(t.flags&128)===0)af(),zr(),t.flags|=98560,y=!1;else if(y=ll(t),s!==null&&s.dehydrated!==null){if(e===null){if(!y)throw Error(o(318));if(y=t.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(o(317));y[Jn]=t}else zr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ln(t),y=!1}else jn!==null&&(ou(jn),jn=null),y=!0;if(!y)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=i,t):(s=s!==null,s!==(e!==null&&e.memoizedState!==null)&&s&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Oe.current&1)!==0?Ye===0&&(Ye=3):su())),t.updateQueue!==null&&(t.flags|=4),ln(t),null);case 4:return Vr(),qs(e,t),e===null&&Ri(t.stateNode.containerInfo),ln(t),null;case 10:return Ss(t.type._context),ln(t),null;case 17:return pn(t.type)&&nl(),ln(t),null;case 19:if(Ie(Oe),y=t.memoizedState,y===null)return ln(t),null;if(s=(t.flags&128)!==0,E=y.rendering,E===null)if(s)Qi(y,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(E=fl(e),E!==null){for(t.flags|=128,Qi(y,!1),s=E.updateQueue,s!==null&&(t.updateQueue=s,t.flags|=4),t.subtreeFlags=0,s=i,i=t.child;i!==null;)y=i,e=s,y.flags&=14680066,E=y.alternate,E===null?(y.childLanes=0,y.lanes=e,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=E.childLanes,y.lanes=E.lanes,y.child=E.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=E.memoizedProps,y.memoizedState=E.memoizedState,y.updateQueue=E.updateQueue,y.type=E.type,e=E.dependencies,y.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Le(Oe,Oe.current&1|2),t.child}e=e.sibling}y.tail!==null&&ze()>Gr&&(t.flags|=128,s=!0,Qi(y,!1),t.lanes=4194304)}else{if(!s)if(e=fl(E),e!==null){if(t.flags|=128,s=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),Qi(y,!0),y.tail===null&&y.tailMode==="hidden"&&!E.alternate&&!De)return ln(t),null}else 2*ze()-y.renderingStartTime>Gr&&i!==1073741824&&(t.flags|=128,s=!0,Qi(y,!1),t.lanes=4194304);y.isBackwards?(E.sibling=t.child,t.child=E):(i=y.last,i!==null?i.sibling=E:t.child=E,y.last=E)}return y.tail!==null?(t=y.tail,y.rendering=t,y.tail=t.sibling,y.renderingStartTime=ze(),t.sibling=null,i=Oe.current,Le(Oe,s?i&1|2:i&1),t):(ln(t),null);case 22:case 23:return au(),s=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==s&&(t.flags|=8192),s&&(t.mode&1)!==0?(bn&1073741824)!==0&&(ln(t),t.subtreeFlags&6&&(t.flags|=8192)):ln(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function ey(e,t){switch(gs(t),t.tag){case 1:return pn(t.type)&&nl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vr(),Ie(hn),Ie(rn),Ps(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return $s(t),null;case 13:if(Ie(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ie(Oe),null;case 4:return Vr(),null;case 10:return Ss(t.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var _l=!1,an=!1,ny=typeof WeakSet=="function"?WeakSet:Set,me=null;function Ur(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(s){Be(e,t,s)}else i.current=null}function Ys(e,t,i){try{i()}catch(s){Be(e,t,s)}}var oh=!1;function ty(e,t){if(as=Ho,e=Dd(),Ja(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var s=i.getSelection&&i.getSelection();if(s&&s.rangeCount!==0){i=s.anchorNode;var p=s.anchorOffset,y=s.focusNode;s=s.focusOffset;try{i.nodeType,y.nodeType}catch{i=null;break e}var E=0,I=-1,H=-1,te=0,se=0,ue=e,ae=null;n:for(;;){for(var pe;ue!==i||p!==0&&ue.nodeType!==3||(I=E+p),ue!==y||s!==0&&ue.nodeType!==3||(H=E+s),ue.nodeType===3&&(E+=ue.nodeValue.length),(pe=ue.firstChild)!==null;)ae=ue,ue=pe;for(;;){if(ue===e)break n;if(ae===i&&++te===p&&(I=E),ae===y&&++se===s&&(H=E),(pe=ue.nextSibling)!==null)break;ue=ae,ae=ue.parentNode}ue=pe}i=I===-1||H===-1?null:{start:I,end:H}}else i=null}i=i||{start:0,end:0}}else i=null;for(ss={focusedElem:e,selectionRange:i},Ho=!1,me=t;me!==null;)if(t=me,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,me=e;else for(;me!==null;){t=me;try{var ge=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ye=ge.memoizedProps,Ve=ge.memoizedState,ee=t.stateNode,G=ee.getSnapshotBeforeUpdate(t.elementType===t.type?ye:zn(t.type,ye),Ve);ee.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ne=t.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(ce){Be(t,t.return,ce)}if(e=t.sibling,e!==null){e.return=t.return,me=e;break}me=t.return}return ge=oh,oh=!1,ge}function Gi(e,t,i){var s=t.updateQueue;if(s=s!==null?s.lastEffect:null,s!==null){var p=s=s.next;do{if((p.tag&e)===e){var y=p.destroy;p.destroy=void 0,y!==void 0&&Ys(t,i,y)}p=p.next}while(p!==s)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var s=i.create;i.destroy=s()}i=i.next}while(i!==t)}}function Xs(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function lh(e){var t=e.alternate;t!==null&&(e.alternate=null,lh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Jn],delete t[Di],delete t[fs],delete t[j1],delete t[z1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ah(e){return e.tag===5||e.tag===3||e.tag===4}function sh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ah(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ks(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=Jo));else if(s!==4&&(e=e.child,e!==null))for(Ks(e,t,i),e=e.sibling;e!==null;)Ks(e,t,i),e=e.sibling}function Zs(e,t,i){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(s!==4&&(e=e.child,e!==null))for(Zs(e,t,i),e=e.sibling;e!==null;)Zs(e,t,i),e=e.sibling}var Je=null,On=!1;function It(e,t,i){for(i=i.child;i!==null;)uh(e,t,i),i=i.sibling}function uh(e,t,i){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(kr,i)}catch{}switch(i.tag){case 5:an||Ur(i,t);case 6:var s=Je,p=On;Je=null,It(e,t,i),Je=s,On=p,Je!==null&&(On?(e=Je,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Je.removeChild(i.stateNode));break;case 18:Je!==null&&(On?(e=Je,i=i.stateNode,e.nodeType===8?ds(e.parentNode,i):e.nodeType===1&&ds(e,i),Ci(e)):ds(Je,i.stateNode));break;case 4:s=Je,p=On,Je=i.stateNode.containerInfo,On=!0,It(e,t,i),Je=s,On=p;break;case 0:case 11:case 14:case 15:if(!an&&(s=i.updateQueue,s!==null&&(s=s.lastEffect,s!==null))){p=s=s.next;do{var y=p,E=y.destroy;y=y.tag,E!==void 0&&((y&2)!==0||(y&4)!==0)&&Ys(i,t,E),p=p.next}while(p!==s)}It(e,t,i);break;case 1:if(!an&&(Ur(i,t),s=i.stateNode,typeof s.componentWillUnmount=="function"))try{s.props=i.memoizedProps,s.state=i.memoizedState,s.componentWillUnmount()}catch(I){Be(i,t,I)}It(e,t,i);break;case 21:It(e,t,i);break;case 22:i.mode&1?(an=(s=an)||i.memoizedState!==null,It(e,t,i),an=s):It(e,t,i);break;default:It(e,t,i)}}function ch(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new ny),t.forEach(function(s){var p=dy.bind(null,e,s);i.has(s)||(i.add(s),s.then(p,p))})}}function Hn(e,t){var i=t.deletions;if(i!==null)for(var s=0;s<i.length;s++){var p=i[s];try{var y=e,E=t,I=E;e:for(;I!==null;){switch(I.tag){case 5:Je=I.stateNode,On=!1;break e;case 3:Je=I.stateNode.containerInfo,On=!0;break e;case 4:Je=I.stateNode.containerInfo,On=!0;break e}I=I.return}if(Je===null)throw Error(o(160));uh(y,E,p),Je=null,On=!1;var H=p.alternate;H!==null&&(H.return=null),p.return=null}catch(te){Be(p,t,te)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)dh(t,e),t=t.sibling}function dh(e,t){var i=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Hn(t,e),tt(e),s&4){try{Gi(3,e,e.return),Sl(3,e)}catch(ye){Be(e,e.return,ye)}try{Gi(5,e,e.return)}catch(ye){Be(e,e.return,ye)}}break;case 1:Hn(t,e),tt(e),s&512&&i!==null&&Ur(i,i.return);break;case 5:if(Hn(t,e),tt(e),s&512&&i!==null&&Ur(i,i.return),e.flags&32){var p=e.stateNode;try{at(p,"")}catch(ye){Be(e,e.return,ye)}}if(s&4&&(p=e.stateNode,p!=null)){var y=e.memoizedProps,E=i!==null?i.memoizedProps:y,I=e.type,H=e.updateQueue;if(e.updateQueue=null,H!==null)try{I==="input"&&y.type==="radio"&&y.name!=null&&$e(p,y),ci(I,E);var te=ci(I,y);for(E=0;E<H.length;E+=2){var se=H[E],ue=H[E+1];se==="style"?ko(p,ue):se==="dangerouslySetInnerHTML"?_o(p,ue):se==="children"?at(p,ue):S(p,se,ue,te)}switch(I){case"input":Ae(p,y);break;case"textarea":Kn(p,y);break;case"select":var ae=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!y.multiple;var pe=y.value;pe!=null?tn(p,!!y.multiple,pe,!1):ae!==!!y.multiple&&(y.defaultValue!=null?tn(p,!!y.multiple,y.defaultValue,!0):tn(p,!!y.multiple,y.multiple?[]:"",!1))}p[Di]=y}catch(ye){Be(e,e.return,ye)}}break;case 6:if(Hn(t,e),tt(e),s&4){if(e.stateNode===null)throw Error(o(162));p=e.stateNode,y=e.memoizedProps;try{p.nodeValue=y}catch(ye){Be(e,e.return,ye)}}break;case 3:if(Hn(t,e),tt(e),s&4&&i!==null&&i.memoizedState.isDehydrated)try{Ci(t.containerInfo)}catch(ye){Be(e,e.return,ye)}break;case 4:Hn(t,e),tt(e);break;case 13:Hn(t,e),tt(e),p=e.child,p.flags&8192&&(y=p.memoizedState!==null,p.stateNode.isHidden=y,!y||p.alternate!==null&&p.alternate.memoizedState!==null||(nu=ze())),s&4&&ch(e);break;case 22:if(se=i!==null&&i.memoizedState!==null,e.mode&1?(an=(te=an)||se,Hn(t,e),an=te):Hn(t,e),tt(e),s&8192){if(te=e.memoizedState!==null,(e.stateNode.isHidden=te)&&!se&&(e.mode&1)!==0)for(me=e,se=e.child;se!==null;){for(ue=me=se;me!==null;){switch(ae=me,pe=ae.child,ae.tag){case 0:case 11:case 14:case 15:Gi(4,ae,ae.return);break;case 1:Ur(ae,ae.return);var ge=ae.stateNode;if(typeof ge.componentWillUnmount=="function"){s=ae,i=ae.return;try{t=s,ge.props=t.memoizedProps,ge.state=t.memoizedState,ge.componentWillUnmount()}catch(ye){Be(s,i,ye)}}break;case 5:Ur(ae,ae.return);break;case 22:if(ae.memoizedState!==null){ph(ue);continue}}pe!==null?(pe.return=ae,me=pe):ph(ue)}se=se.sibling}e:for(se=null,ue=e;;){if(ue.tag===5){if(se===null){se=ue;try{p=ue.stateNode,te?(y=p.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(I=ue.stateNode,H=ue.memoizedProps.style,E=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=So("display",E))}catch(ye){Be(e,e.return,ye)}}}else if(ue.tag===6){if(se===null)try{ue.stateNode.nodeValue=te?"":ue.memoizedProps}catch(ye){Be(e,e.return,ye)}}else if((ue.tag!==22&&ue.tag!==23||ue.memoizedState===null||ue===e)&&ue.child!==null){ue.child.return=ue,ue=ue.child;continue}if(ue===e)break e;for(;ue.sibling===null;){if(ue.return===null||ue.return===e)break e;se===ue&&(se=null),ue=ue.return}se===ue&&(se=null),ue.sibling.return=ue.return,ue=ue.sibling}}break;case 19:Hn(t,e),tt(e),s&4&&ch(e);break;case 21:break;default:Hn(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(ah(i)){var s=i;break e}i=i.return}throw Error(o(160))}switch(s.tag){case 5:var p=s.stateNode;s.flags&32&&(at(p,""),s.flags&=-33);var y=sh(e);Zs(e,y,p);break;case 3:case 4:var E=s.stateNode.containerInfo,I=sh(e);Ks(e,I,E);break;default:throw Error(o(161))}}catch(H){Be(e,e.return,H)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ry(e,t,i){me=e,fh(e)}function fh(e,t,i){for(var s=(e.mode&1)!==0;me!==null;){var p=me,y=p.child;if(p.tag===22&&s){var E=p.memoizedState!==null||_l;if(!E){var I=p.alternate,H=I!==null&&I.memoizedState!==null||an;I=_l;var te=an;if(_l=E,(an=H)&&!te)for(me=p;me!==null;)E=me,H=E.child,E.tag===22&&E.memoizedState!==null?mh(p):H!==null?(H.return=E,me=H):mh(p);for(;y!==null;)me=y,fh(y),y=y.sibling;me=p,_l=I,an=te}hh(e)}else(p.subtreeFlags&8772)!==0&&y!==null?(y.return=p,me=y):hh(e)}}function hh(e){for(;me!==null;){var t=me;if((t.flags&8772)!==0){var i=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:an||Sl(5,t);break;case 1:var s=t.stateNode;if(t.flags&4&&!an)if(i===null)s.componentDidMount();else{var p=t.elementType===t.type?i.memoizedProps:zn(t.type,i.memoizedProps);s.componentDidUpdate(p,i.memoizedState,s.__reactInternalSnapshotBeforeUpdate)}var y=t.updateQueue;y!==null&&pf(t,y,s);break;case 3:var E=t.updateQueue;if(E!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}pf(t,E,i)}break;case 5:var I=t.stateNode;if(i===null&&t.flags&4){i=I;var H=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&i.focus();break;case"img":H.src&&(i.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var te=t.alternate;if(te!==null){var se=te.memoizedState;if(se!==null){var ue=se.dehydrated;ue!==null&&Ci(ue)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}an||t.flags&512&&Xs(t)}catch(ae){Be(t,t.return,ae)}}if(t===e){me=null;break}if(i=t.sibling,i!==null){i.return=t.return,me=i;break}me=t.return}}function ph(e){for(;me!==null;){var t=me;if(t===e){me=null;break}var i=t.sibling;if(i!==null){i.return=t.return,me=i;break}me=t.return}}function mh(e){for(;me!==null;){var t=me;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Sl(4,t)}catch(H){Be(t,i,H)}break;case 1:var s=t.stateNode;if(typeof s.componentDidMount=="function"){var p=t.return;try{s.componentDidMount()}catch(H){Be(t,p,H)}}var y=t.return;try{Xs(t)}catch(H){Be(t,y,H)}break;case 5:var E=t.return;try{Xs(t)}catch(H){Be(t,E,H)}}}catch(H){Be(t,t.return,H)}if(t===e){me=null;break}var I=t.sibling;if(I!==null){I.return=t.return,me=I;break}me=t.return}}var iy=Math.ceil,kl=b.ReactCurrentDispatcher,Js=b.ReactCurrentOwner,In=b.ReactCurrentBatchConfig,Pe=0,Ke=null,We=null,en=0,bn=0,Qr=Mt(0),Ye=0,qi=null,lr=0,El=0,eu=0,Yi=null,gn=null,nu=0,Gr=1/0,gt=null,Cl=!1,tu=null,Dt=null,bl=!1,Ft=null,$l=0,Xi=0,ru=null,Nl=-1,Pl=0;function cn(){return(Pe&6)!==0?ze():Nl!==-1?Nl:Nl=ze()}function jt(e){return(e.mode&1)===0?1:(Pe&2)!==0&&en!==0?en&-en:H1.transition!==null?(Pl===0&&(Pl=jo()),Pl):(e=Te,e!==0||(e=window.event,e=e===void 0?16:gd(e.type)),e)}function Bn(e,t,i,s){if(50<Xi)throw Xi=0,ru=null,Error(o(185));Zt(e,i,s),((Pe&2)===0||e!==Ke)&&(e===Ke&&((Pe&2)===0&&(El|=i),Ye===4&&zt(e,en)),yn(e,s),i===1&&Pe===0&&(t.mode&1)===0&&(Gr=ze()+500,rl&&Lt()))}function yn(e,t){var i=e.callbackNode;Fo(e,t);var s=st(e,e===Ke?en:0);if(s===0)i!==null&&Ao(i),e.callbackNode=null,e.callbackPriority=0;else if(t=s&-s,e.callbackPriority!==t){if(i!=null&&Ao(i),t===1)e.tag===0?O1(yh.bind(null,e)):nf(yh.bind(null,e)),D1(function(){(Pe&6)===0&&Lt()}),i=null;else{switch(sd(s)){case 1:i=xi;break;case 4:i=Io;break;case 16:i=Sr;break;case 536870912:i=Do;break;default:i=Sr}i=Ch(i,gh.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function gh(e,t){if(Nl=-1,Pl=0,(Pe&6)!==0)throw Error(o(327));var i=e.callbackNode;if(qr()&&e.callbackNode!==i)return null;var s=st(e,e===Ke?en:0);if(s===0)return null;if((s&30)!==0||(s&e.expiredLanes)!==0||t)t=Ml(e,s);else{t=s;var p=Pe;Pe|=2;var y=xh();(Ke!==e||en!==t)&&(gt=null,Gr=ze()+500,sr(e,t));do try{ay();break}catch(I){vh(e,I)}while(!0);_s(),kl.current=y,Pe=p,We!==null?t=0:(Ke=null,en=0,t=Ye)}if(t!==0){if(t===2&&(p=wi(e),p!==0&&(s=p,t=iu(e,p))),t===1)throw i=qi,sr(e,0),zt(e,s),yn(e,ze()),i;if(t===6)zt(e,s);else{if(p=e.current.alternate,(s&30)===0&&!oy(p)&&(t=Ml(e,s),t===2&&(y=wi(e),y!==0&&(s=y,t=iu(e,y))),t===1))throw i=qi,sr(e,0),zt(e,s),yn(e,ze()),i;switch(e.finishedWork=p,e.finishedLanes=s,t){case 0:case 1:throw Error(o(345));case 2:ur(e,gn,gt);break;case 3:if(zt(e,s),(s&130023424)===s&&(t=nu+500-ze(),10<t)){if(st(e,0)!==0)break;if(p=e.suspendedLanes,(p&s)!==s){cn(),e.pingedLanes|=e.suspendedLanes&p;break}e.timeoutHandle=cs(ur.bind(null,e,gn,gt),t);break}ur(e,gn,gt);break;case 4:if(zt(e,s),(s&4194240)===s)break;for(t=e.eventTimes,p=-1;0<s;){var E=31-Sn(s);y=1<<E,E=t[E],E>p&&(p=E),s&=~y}if(s=p,s=ze()-s,s=(120>s?120:480>s?480:1080>s?1080:1920>s?1920:3e3>s?3e3:4320>s?4320:1960*iy(s/1960))-s,10<s){e.timeoutHandle=cs(ur.bind(null,e,gn,gt),s);break}ur(e,gn,gt);break;case 5:ur(e,gn,gt);break;default:throw Error(o(329))}}}return yn(e,ze()),e.callbackNode===i?gh.bind(null,e):null}function iu(e,t){var i=Yi;return e.current.memoizedState.isDehydrated&&(sr(e,t).flags|=256),e=Ml(e,t),e!==2&&(t=gn,gn=i,t!==null&&ou(t)),e}function ou(e){gn===null?gn=e:gn.push.apply(gn,e)}function oy(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var s=0;s<i.length;s++){var p=i[s],y=p.getSnapshot;p=p.value;try{if(!Fn(y(),p))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zt(e,t){for(t&=~eu,t&=~El,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Sn(t),s=1<<i;e[i]=-1,t&=~s}}function yh(e){if((Pe&6)!==0)throw Error(o(327));qr();var t=st(e,0);if((t&1)===0)return yn(e,ze()),null;var i=Ml(e,t);if(e.tag!==0&&i===2){var s=wi(e);s!==0&&(t=s,i=iu(e,s))}if(i===1)throw i=qi,sr(e,0),zt(e,t),yn(e,ze()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ur(e,gn,gt),yn(e,ze()),null}function lu(e,t){var i=Pe;Pe|=1;try{return e(t)}finally{Pe=i,Pe===0&&(Gr=ze()+500,rl&&Lt())}}function ar(e){Ft!==null&&Ft.tag===0&&(Pe&6)===0&&qr();var t=Pe;Pe|=1;var i=In.transition,s=Te;try{if(In.transition=null,Te=1,e)return e()}finally{Te=s,In.transition=i,Pe=t,(Pe&6)===0&&Lt()}}function au(){bn=Qr.current,Ie(Qr)}function sr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,I1(i)),We!==null)for(i=We.return;i!==null;){var s=i;switch(gs(s),s.tag){case 1:s=s.type.childContextTypes,s!=null&&nl();break;case 3:Vr(),Ie(hn),Ie(rn),Ps();break;case 5:$s(s);break;case 4:Vr();break;case 13:Ie(Oe);break;case 19:Ie(Oe);break;case 10:Ss(s.type._context);break;case 22:case 23:au()}i=i.return}if(Ke=e,We=e=Ot(e.current,null),en=bn=t,Ye=0,qi=null,eu=El=lr=0,gn=Yi=null,rr!==null){for(t=0;t<rr.length;t++)if(i=rr[t],s=i.interleaved,s!==null){i.interleaved=null;var p=s.next,y=i.pending;if(y!==null){var E=y.next;y.next=p,s.next=E}i.pending=s}rr=null}return e}function vh(e,t){do{var i=We;try{if(_s(),hl.current=yl,pl){for(var s=He.memoizedState;s!==null;){var p=s.queue;p!==null&&(p.pending=null),s=s.next}pl=!1}if(or=0,Xe=qe=He=null,Bi=!1,Vi=0,Js.current=null,i===null||i.return===null){Ye=1,qi=t,We=null;break}e:{var y=e,E=i.return,I=i,H=t;if(t=en,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var te=H,se=I,ue=se.tag;if((se.mode&1)===0&&(ue===0||ue===11||ue===15)){var ae=se.alternate;ae?(se.updateQueue=ae.updateQueue,se.memoizedState=ae.memoizedState,se.lanes=ae.lanes):(se.updateQueue=null,se.memoizedState=null)}var pe=Vf(E);if(pe!==null){pe.flags&=-257,Wf(pe,E,I,y,t),pe.mode&1&&Bf(y,te,t),t=pe,H=te;var ge=t.updateQueue;if(ge===null){var ye=new Set;ye.add(H),t.updateQueue=ye}else ge.add(H);break e}else{if((t&1)===0){Bf(y,te,t),su();break e}H=Error(o(426))}}else if(De&&I.mode&1){var Ve=Vf(E);if(Ve!==null){(Ve.flags&65536)===0&&(Ve.flags|=256),Wf(Ve,E,I,y,t),xs(Wr(H,I));break e}}y=H=Wr(H,I),Ye!==4&&(Ye=2),Yi===null?Yi=[y]:Yi.push(y),y=E;do{switch(y.tag){case 3:y.flags|=65536,t&=-t,y.lanes|=t;var ee=Of(y,H,t);hf(y,ee);break e;case 1:I=H;var G=y.type,ne=y.stateNode;if((y.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Dt===null||!Dt.has(ne)))){y.flags|=65536,t&=-t,y.lanes|=t;var ce=Hf(y,I,t);hf(y,ce);break e}}y=y.return}while(y!==null)}_h(i)}catch(ve){t=ve,We===i&&i!==null&&(We=i=i.return);continue}break}while(!0)}function xh(){var e=kl.current;return kl.current=yl,e===null?yl:e}function su(){(Ye===0||Ye===3||Ye===2)&&(Ye=4),Ke===null||(lr&268435455)===0&&(El&268435455)===0||zt(Ke,en)}function Ml(e,t){var i=Pe;Pe|=2;var s=xh();(Ke!==e||en!==t)&&(gt=null,sr(e,t));do try{ly();break}catch(p){vh(e,p)}while(!0);if(_s(),Pe=i,kl.current=s,We!==null)throw Error(o(261));return Ke=null,en=0,Ye}function ly(){for(;We!==null;)wh(We)}function ay(){for(;We!==null&&!Ta();)wh(We)}function wh(e){var t=Eh(e.alternate,e,bn);e.memoizedProps=e.pendingProps,t===null?_h(e):We=t,Js.current=null}function _h(e){var t=e;do{var i=t.alternate;if(e=t.return,(t.flags&32768)===0){if(i=J1(i,t,bn),i!==null){We=i;return}}else{if(i=ey(i,t),i!==null){i.flags&=32767,We=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ye=6,We=null;return}}if(t=t.sibling,t!==null){We=t;return}We=t=e}while(t!==null);Ye===0&&(Ye=5)}function ur(e,t,i){var s=Te,p=In.transition;try{In.transition=null,Te=1,sy(e,t,i,s)}finally{In.transition=p,Te=s}return null}function sy(e,t,i,s){do qr();while(Ft!==null);if((Pe&6)!==0)throw Error(o(327));i=e.finishedWork;var p=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var y=i.lanes|i.childLanes;if(za(e,y),e===Ke&&(We=Ke=null,en=0),(i.subtreeFlags&2064)===0&&(i.flags&2064)===0||bl||(bl=!0,Ch(Sr,function(){return qr(),null})),y=(i.flags&15990)!==0,(i.subtreeFlags&15990)!==0||y){y=In.transition,In.transition=null;var E=Te;Te=1;var I=Pe;Pe|=4,Js.current=null,ty(e,i),dh(i,e),N1(ss),Ho=!!as,ss=as=null,e.current=i,ry(i),Ro(),Pe=I,Te=E,In.transition=y}else e.current=i;if(bl&&(bl=!1,Ft=e,$l=p),y=e.pendingLanes,y===0&&(Dt=null),Ra(i.stateNode),yn(e,ze()),t!==null)for(s=e.onRecoverableError,i=0;i<t.length;i++)p=t[i],s(p.value,{componentStack:p.stack,digest:p.digest});if(Cl)throw Cl=!1,e=tu,tu=null,e;return($l&1)!==0&&e.tag!==0&&qr(),y=e.pendingLanes,(y&1)!==0?e===ru?Xi++:(Xi=0,ru=e):Xi=0,Lt(),null}function qr(){if(Ft!==null){var e=sd($l),t=In.transition,i=Te;try{if(In.transition=null,Te=16>e?16:e,Ft===null)var s=!1;else{if(e=Ft,Ft=null,$l=0,(Pe&6)!==0)throw Error(o(331));var p=Pe;for(Pe|=4,me=e.current;me!==null;){var y=me,E=y.child;if((me.flags&16)!==0){var I=y.deletions;if(I!==null){for(var H=0;H<I.length;H++){var te=I[H];for(me=te;me!==null;){var se=me;switch(se.tag){case 0:case 11:case 15:Gi(8,se,y)}var ue=se.child;if(ue!==null)ue.return=se,me=ue;else for(;me!==null;){se=me;var ae=se.sibling,pe=se.return;if(lh(se),se===te){me=null;break}if(ae!==null){ae.return=pe,me=ae;break}me=pe}}}var ge=y.alternate;if(ge!==null){var ye=ge.child;if(ye!==null){ge.child=null;do{var Ve=ye.sibling;ye.sibling=null,ye=Ve}while(ye!==null)}}me=y}}if((y.subtreeFlags&2064)!==0&&E!==null)E.return=y,me=E;else e:for(;me!==null;){if(y=me,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Gi(9,y,y.return)}var ee=y.sibling;if(ee!==null){ee.return=y.return,me=ee;break e}me=y.return}}var G=e.current;for(me=G;me!==null;){E=me;var ne=E.child;if((E.subtreeFlags&2064)!==0&&ne!==null)ne.return=E,me=ne;else e:for(E=G;me!==null;){if(I=me,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Sl(9,I)}}catch(ve){Be(I,I.return,ve)}if(I===E){me=null;break e}var ce=I.sibling;if(ce!==null){ce.return=I.return,me=ce;break e}me=I.return}}if(Pe=p,Lt(),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(kr,e)}catch{}s=!0}return s}finally{Te=i,In.transition=t}}return!1}function Sh(e,t,i){t=Wr(i,t),t=Of(e,t,1),e=Rt(e,t,1),t=cn(),e!==null&&(Zt(e,1,t),yn(e,t))}function Be(e,t,i){if(e.tag===3)Sh(e,e,i);else for(;t!==null;){if(t.tag===3){Sh(t,e,i);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Dt===null||!Dt.has(s))){e=Wr(i,e),e=Hf(t,e,1),t=Rt(t,e,1),e=cn(),t!==null&&(Zt(t,1,e),yn(t,e));break}}t=t.return}}function uy(e,t,i){var s=e.pingCache;s!==null&&s.delete(t),t=cn(),e.pingedLanes|=e.suspendedLanes&i,Ke===e&&(en&i)===i&&(Ye===4||Ye===3&&(en&130023424)===en&&500>ze()-nu?sr(e,0):eu|=i),yn(e,t)}function kh(e,t){t===0&&((e.mode&1)===0?t=1:(t=Cr,Cr<<=1,(Cr&130023424)===0&&(Cr=4194304)));var i=cn();e=ht(e,t),e!==null&&(Zt(e,t,i),yn(e,i))}function cy(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),kh(e,i)}function dy(e,t){var i=0;switch(e.tag){case 13:var s=e.stateNode,p=e.memoizedState;p!==null&&(i=p.retryLane);break;case 19:s=e.stateNode;break;default:throw Error(o(314))}s!==null&&s.delete(t),kh(e,i)}var Eh;Eh=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||hn.current)mn=!0;else{if((e.lanes&i)===0&&(t.flags&128)===0)return mn=!1,Z1(e,t,i);mn=(e.flags&131072)!==0}else mn=!1,De&&(t.flags&1048576)!==0&&tf(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var s=t.type;wl(e,t),e=t.pendingProps;var p=Dr(t,rn.current);Br(t,i),p=Ls(null,t,s,e,p,i);var y=As();return t.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pn(s)?(y=!0,tl(t)):y=!1,t.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Cs(t),p.updater=vl,t.stateNode=p,p._reactInternals=t,zs(t,s,e,i),t=Vs(null,t,s,!0,y,i)):(t.tag=0,De&&y&&ms(t),un(null,t,p,i),t=t.child),t;case 16:s=t.elementType;e:{switch(wl(e,t),e=t.pendingProps,p=s._init,s=p(s._payload),t.type=s,p=t.tag=hy(s),e=zn(s,e),p){case 0:t=Bs(null,t,s,e,i);break e;case 1:t=Xf(null,t,s,e,i);break e;case 11:t=Uf(null,t,s,e,i);break e;case 14:t=Qf(null,t,s,zn(s.type,e),i);break e}throw Error(o(306,s,""))}return t;case 0:return s=t.type,p=t.pendingProps,p=t.elementType===s?p:zn(s,p),Bs(e,t,s,p,i);case 1:return s=t.type,p=t.pendingProps,p=t.elementType===s?p:zn(s,p),Xf(e,t,s,p,i);case 3:e:{if(Kf(t),e===null)throw Error(o(387));s=t.pendingProps,y=t.memoizedState,p=y.element,ff(e,t),dl(t,s,null,i);var E=t.memoizedState;if(s=E.element,y.isDehydrated)if(y={element:s,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},t.updateQueue.baseState=y,t.memoizedState=y,t.flags&256){p=Wr(Error(o(423)),t),t=Zf(e,t,s,i,p);break e}else if(s!==p){p=Wr(Error(o(424)),t),t=Zf(e,t,s,i,p);break e}else for(Cn=Pt(t.stateNode.containerInfo.firstChild),En=t,De=!0,jn=null,i=cf(t,null,s,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(zr(),s===p){t=mt(e,t,i);break e}un(e,t,s,i)}t=t.child}return t;case 5:return mf(t),e===null&&vs(t),s=t.type,p=t.pendingProps,y=e!==null?e.memoizedProps:null,E=p.children,us(s,p)?E=null:y!==null&&us(s,y)&&(t.flags|=32),Yf(e,t),un(e,t,E,i),t.child;case 6:return e===null&&vs(t),null;case 13:return Jf(e,t,i);case 4:return bs(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=Or(t,null,s,i):un(e,t,s,i),t.child;case 11:return s=t.type,p=t.pendingProps,p=t.elementType===s?p:zn(s,p),Uf(e,t,s,p,i);case 7:return un(e,t,t.pendingProps,i),t.child;case 8:return un(e,t,t.pendingProps.children,i),t.child;case 12:return un(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(s=t.type._context,p=t.pendingProps,y=t.memoizedProps,E=p.value,Le(sl,s._currentValue),s._currentValue=E,y!==null)if(Fn(y.value,E)){if(y.children===p.children&&!hn.current){t=mt(e,t,i);break e}}else for(y=t.child,y!==null&&(y.return=t);y!==null;){var I=y.dependencies;if(I!==null){E=y.child;for(var H=I.firstContext;H!==null;){if(H.context===s){if(y.tag===1){H=pt(-1,i&-i),H.tag=2;var te=y.updateQueue;if(te!==null){te=te.shared;var se=te.pending;se===null?H.next=H:(H.next=se.next,se.next=H),te.pending=H}}y.lanes|=i,H=y.alternate,H!==null&&(H.lanes|=i),ks(y.return,i,t),I.lanes|=i;break}H=H.next}}else if(y.tag===10)E=y.type===t.type?null:y.child;else if(y.tag===18){if(E=y.return,E===null)throw Error(o(341));E.lanes|=i,I=E.alternate,I!==null&&(I.lanes|=i),ks(E,i,t),E=y.sibling}else E=y.child;if(E!==null)E.return=y;else for(E=y;E!==null;){if(E===t){E=null;break}if(y=E.sibling,y!==null){y.return=E.return,E=y;break}E=E.return}y=E}un(e,t,p.children,i),t=t.child}return t;case 9:return p=t.type,s=t.pendingProps.children,Br(t,i),p=An(p),s=s(p),t.flags|=1,un(e,t,s,i),t.child;case 14:return s=t.type,p=zn(s,t.pendingProps),p=zn(s.type,p),Qf(e,t,s,p,i);case 15:return Gf(e,t,t.type,t.pendingProps,i);case 17:return s=t.type,p=t.pendingProps,p=t.elementType===s?p:zn(s,p),wl(e,t),t.tag=1,pn(s)?(e=!0,tl(t)):e=!1,Br(t,i),jf(t,s,p),zs(t,s,p,i),Vs(null,t,s,!0,e,i);case 19:return nh(e,t,i);case 22:return qf(e,t,i)}throw Error(o(156,t.tag))};function Ch(e,t){return Lo(e,t)}function fy(e,t,i,s){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(e,t,i,s){return new fy(e,t,i,s)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hy(e){if(typeof e=="function")return uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===D)return 11;if(e===q)return 14}return 2}function Ot(e,t){var i=e.alternate;return i===null?(i=Dn(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Tl(e,t,i,s,p,y){var E=2;if(s=e,typeof e=="function")uu(e)&&(E=1);else if(typeof e=="string")E=5;else e:switch(e){case F:return cr(i.children,p,y,t);case P:E=8,p|=8;break;case A:return e=Dn(12,i,t,p|2),e.elementType=A,e.lanes=y,e;case J:return e=Dn(13,i,t,p),e.elementType=J,e.lanes=y,e;case T:return e=Dn(19,i,t,p),e.elementType=T,e.lanes=y,e;case Y:return Ll(i,p,y,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:E=10;break e;case L:E=9;break e;case D:E=11;break e;case q:E=14;break e;case Q:E=16,s=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Dn(E,i,t,p),t.elementType=e,t.type=s,t.lanes=y,t}function cr(e,t,i,s){return e=Dn(7,e,s,t),e.lanes=i,e}function Ll(e,t,i,s){return e=Dn(22,e,s,t),e.elementType=Y,e.lanes=i,e.stateNode={isHidden:!1},e}function cu(e,t,i){return e=Dn(6,e,null,t),e.lanes=i,e}function du(e,t,i){return t=Dn(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function py(e,t,i,s,p){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kt(0),this.expirationTimes=Kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.identifierPrefix=s,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function fu(e,t,i,s,p,y,E,I,H){return e=new py(e,t,i,I,H),t===1?(t=1,y===!0&&(t|=8)):t=0,y=Dn(3,null,null,t),e.current=y,y.stateNode=e,y.memoizedState={element:s,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},Cs(y),e}function my(e,t,i){var s=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:s==null?null:""+s,children:e,containerInfo:t,implementation:i}}function bh(e){if(!e)return Tt;e=e._reactInternals;e:{if(Zn(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pn(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(pn(i))return Jd(e,i,t)}return t}function $h(e,t,i,s,p,y,E,I,H){return e=fu(i,s,!0,e,p,y,E,I,H),e.context=bh(null),i=e.current,s=cn(),p=jt(i),y=pt(s,p),y.callback=t??null,Rt(i,y,p),e.current.lanes=p,Zt(e,p,s),yn(e,s),e}function Al(e,t,i,s){var p=t.current,y=cn(),E=jt(p);return i=bh(i),t.context===null?t.context=i:t.pendingContext=i,t=pt(y,E),t.payload={element:e},s=s===void 0?null:s,s!==null&&(t.callback=s),e=Rt(p,t,E),e!==null&&(Bn(e,p,E,y),cl(e,p,E)),E}function Rl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function hu(e,t){Nh(e,t),(e=e.alternate)&&Nh(e,t)}function gy(){return null}var Ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}Il.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Al(e,t,null,null)},Il.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Al(null,e,null,null)}),t[ut]=null}};function Il(e){this._internalRoot=e}Il.prototype.unstable_scheduleHydration=function(e){if(e){var t=dd();e={blockedOn:null,target:e,priority:t};for(var i=0;i<bt.length&&t!==0&&t<bt[i].priority;i++);bt.splice(i,0,e),i===0&&pd(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Dl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mh(){}function yy(e,t,i,s,p){if(p){if(typeof s=="function"){var y=s;s=function(){var te=Rl(E);y.call(te)}}var E=$h(t,s,e,0,null,!1,!1,"",Mh);return e._reactRootContainer=E,e[ut]=E.current,Ri(e.nodeType===8?e.parentNode:e),ar(),E}for(;p=e.lastChild;)e.removeChild(p);if(typeof s=="function"){var I=s;s=function(){var te=Rl(H);I.call(te)}}var H=fu(e,0,!1,null,null,!1,!1,"",Mh);return e._reactRootContainer=H,e[ut]=H.current,Ri(e.nodeType===8?e.parentNode:e),ar(function(){Al(t,H,i,s)}),H}function Fl(e,t,i,s,p){var y=i._reactRootContainer;if(y){var E=y;if(typeof p=="function"){var I=p;p=function(){var H=Rl(E);I.call(H)}}Al(t,E,e,p)}else E=yy(i,t,e,p,s);return Rl(E)}ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Xt(t.pendingLanes);i!==0&&(br(t,i|1),yn(t,ze()),(Pe&6)===0&&(Gr=ze()+500,Lt()))}break;case 13:ar(function(){var s=ht(e,1);if(s!==null){var p=cn();Bn(s,e,1,p)}}),hu(e,1)}},Oa=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var i=cn();Bn(t,e,134217728,i)}hu(e,134217728)}},cd=function(e){if(e.tag===13){var t=jt(e),i=ht(e,t);if(i!==null){var s=cn();Bn(i,e,t,s)}hu(e,t)}},dd=function(){return Te},fd=function(e,t){var i=Te;try{return Te=e,t()}finally{Te=i}},hi=function(e,t,i){switch(t){case"input":if(Ae(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var s=i[t];if(s!==e&&s.form===e.form){var p=el(s);if(!p)throw Error(o(90));he(s),Ae(s,p)}}}break;case"textarea":Kn(e,i);break;case"select":t=i.value,t!=null&&tn(e,!!i.multiple,t,!1)}},$o=lu,No=ar;var vy={usingClientEntryPoint:!1,Events:[Fi,Rr,el,Co,bo,lu]},Ki={findFiberByHostInstance:Jt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xy={bundleType:Ki.bundleType,version:Ki.version,rendererPackageName:Ki.rendererPackageName,rendererConfig:Ki.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Mo(e),e===null?null:e.stateNode},findFiberByHostInstance:Ki.findFiberByHostInstance||gy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{kr=jl.inject(xy),_n=jl}catch{}}return vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vy,vn.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(o(200));return my(e,t,null,i)},vn.createRoot=function(e,t){if(!mu(e))throw Error(o(299));var i=!1,s="",p=Ph;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(p=t.onRecoverableError)),t=fu(e,1,!1,null,null,i,!1,s,p),e[ut]=t.current,Ri(e.nodeType===8?e.parentNode:e),new pu(t)},vn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=Mo(t),e=e===null?null:e.stateNode,e},vn.flushSync=function(e){return ar(e)},vn.hydrate=function(e,t,i){if(!Dl(t))throw Error(o(200));return Fl(null,e,t,!0,i)},vn.hydrateRoot=function(e,t,i){if(!mu(e))throw Error(o(405));var s=i!=null&&i.hydratedSources||null,p=!1,y="",E=Ph;if(i!=null&&(i.unstable_strictMode===!0&&(p=!0),i.identifierPrefix!==void 0&&(y=i.identifierPrefix),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),t=$h(t,null,e,1,i??null,p,!1,y,E),e[ut]=t.current,Ri(e),s)for(e=0;e<s.length;e++)i=s[e],p=i._getVersion,p=p(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,p]:t.mutableSourceEagerHydrationData.push(i,p);return new Il(t)},vn.render=function(e,t,i){if(!Dl(t))throw Error(o(200));return Fl(null,e,t,!1,i)},vn.unmountComponentAtNode=function(e){if(!Dl(e))throw Error(o(40));return e._reactRootContainer?(ar(function(){Fl(null,null,e,!1,function(){e._reactRootContainer=null,e[ut]=null})}),!0):!1},vn.unstable_batchedUpdates=lu,vn.unstable_renderSubtreeIntoContainer=function(e,t,i,s){if(!Dl(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Fl(e,t,i,!1,s)},vn.version="18.3.1-next-f1338f8080-20240426",vn}var jh;function Qm(){if(jh)return vu.exports;jh=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(r){console.error(r)}}return n(),vu.exports=Py(),vu.exports}var zh;function My(){if(zh)return zl;zh=1;var n=Qm();return zl.createRoot=n.createRoot,zl.hydrateRoot=n.hydrateRoot,zl}var Ty=My();function Ge(n){if(typeof n=="string"||typeof n=="number")return""+n;let r="";if(Array.isArray(n))for(let o=0,l;o<n.length;o++)(l=Ge(n[o]))!==""&&(r+=(r&&" ")+l);else for(let o in n)n[o]&&(r+=(r&&" ")+o);return r}var Ly={value:()=>{}};function da(){for(var n=0,r=arguments.length,o={},l;n<r;++n){if(!(l=arguments[n]+"")||l in o||/[\s.]/.test(l))throw new Error("illegal type: "+l);o[l]=[]}return new Yl(o)}function Yl(n){this._=n}function Ay(n,r){return n.trim().split(/^|\s+/).map(function(o){var l="",a=o.indexOf(".");if(a>=0&&(l=o.slice(a+1),o=o.slice(0,a)),o&&!r.hasOwnProperty(o))throw new Error("unknown type: "+o);return{type:o,name:l}})}Yl.prototype=da.prototype={constructor:Yl,on:function(n,r){var o=this._,l=Ay(n+"",o),a,c=-1,u=l.length;if(arguments.length<2){for(;++c<u;)if((a=(n=l[c]).type)&&(a=Ry(o[a],n.name)))return a;return}if(r!=null&&typeof r!="function")throw new Error("invalid callback: "+r);for(;++c<u;)if(a=(n=l[c]).type)o[a]=Oh(o[a],n.name,r);else if(r==null)for(a in o)o[a]=Oh(o[a],n.name,null);return this},copy:function(){var n={},r=this._;for(var o in r)n[o]=r[o].slice();return new Yl(n)},call:function(n,r){if((a=arguments.length-2)>0)for(var o=new Array(a),l=0,a,c;l<a;++l)o[l]=arguments[l+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(c=this._[n],l=0,a=c.length;l<a;++l)c[l].value.apply(r,o)},apply:function(n,r,o){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var l=this._[n],a=0,c=l.length;a<c;++a)l[a].value.apply(r,o)}};function Ry(n,r){for(var o=0,l=n.length,a;o<l;++o)if((a=n[o]).name===r)return a.value}function Oh(n,r,o){for(var l=0,a=n.length;l<a;++l)if(n[l].name===r){n[l]=Ly,n=n.slice(0,l).concat(n.slice(l+1));break}return o!=null&&n.push({name:r,value:o}),n}var $c="http://www.w3.org/1999/xhtml";const Hh={svg:"http://www.w3.org/2000/svg",xhtml:$c,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function fa(n){var r=n+="",o=r.indexOf(":");return o>=0&&(r=n.slice(0,o))!=="xmlns"&&(n=n.slice(o+1)),Hh.hasOwnProperty(r)?{space:Hh[r],local:n}:n}function Iy(n){return function(){var r=this.ownerDocument,o=this.namespaceURI;return o===$c&&r.documentElement.namespaceURI===$c?r.createElement(n):r.createElementNS(o,n)}}function Dy(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function Gm(n){var r=fa(n);return(r.local?Dy:Iy)(r)}function Fy(){}function Vc(n){return n==null?Fy:function(){return this.querySelector(n)}}function jy(n){typeof n!="function"&&(n=Vc(n));for(var r=this._groups,o=r.length,l=new Array(o),a=0;a<o;++a)for(var c=r[a],u=c.length,d=l[a]=new Array(u),f,g,m=0;m<u;++m)(f=c[m])&&(g=n.call(f,f.__data__,m,c))&&("__data__"in f&&(g.__data__=f.__data__),d[m]=g);return new Nn(l,this._parents)}function zy(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function Oy(){return[]}function qm(n){return n==null?Oy:function(){return this.querySelectorAll(n)}}function Hy(n){return function(){return zy(n.apply(this,arguments))}}function By(n){typeof n=="function"?n=Hy(n):n=qm(n);for(var r=this._groups,o=r.length,l=[],a=[],c=0;c<o;++c)for(var u=r[c],d=u.length,f,g=0;g<d;++g)(f=u[g])&&(l.push(n.call(f,f.__data__,g,u)),a.push(f));return new Nn(l,a)}function Ym(n){return function(){return this.matches(n)}}function Xm(n){return function(r){return r.matches(n)}}var Vy=Array.prototype.find;function Wy(n){return function(){return Vy.call(this.children,n)}}function Uy(){return this.firstElementChild}function Qy(n){return this.select(n==null?Uy:Wy(typeof n=="function"?n:Xm(n)))}var Gy=Array.prototype.filter;function qy(){return Array.from(this.children)}function Yy(n){return function(){return Gy.call(this.children,n)}}function Xy(n){return this.selectAll(n==null?qy:Yy(typeof n=="function"?n:Xm(n)))}function Ky(n){typeof n!="function"&&(n=Ym(n));for(var r=this._groups,o=r.length,l=new Array(o),a=0;a<o;++a)for(var c=r[a],u=c.length,d=l[a]=[],f,g=0;g<u;++g)(f=c[g])&&n.call(f,f.__data__,g,c)&&d.push(f);return new Nn(l,this._parents)}function Km(n){return new Array(n.length)}function Zy(){return new Nn(this._enter||this._groups.map(Km),this._parents)}function ea(n,r){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=r}ea.prototype={constructor:ea,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,r){return this._parent.insertBefore(n,r)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function Jy(n){return function(){return n}}function ev(n,r,o,l,a,c){for(var u=0,d,f=r.length,g=c.length;u<g;++u)(d=r[u])?(d.__data__=c[u],l[u]=d):o[u]=new ea(n,c[u]);for(;u<f;++u)(d=r[u])&&(a[u]=d)}function nv(n,r,o,l,a,c,u){var d,f,g=new Map,m=r.length,h=c.length,v=new Array(m),x;for(d=0;d<m;++d)(f=r[d])&&(v[d]=x=u.call(f,f.__data__,d,r)+"",g.has(x)?a[d]=f:g.set(x,f));for(d=0;d<h;++d)x=u.call(n,c[d],d,c)+"",(f=g.get(x))?(l[d]=f,f.__data__=c[d],g.delete(x)):o[d]=new ea(n,c[d]);for(d=0;d<m;++d)(f=r[d])&&g.get(v[d])===f&&(a[d]=f)}function tv(n){return n.__data__}function rv(n,r){if(!arguments.length)return Array.from(this,tv);var o=r?nv:ev,l=this._parents,a=this._groups;typeof n!="function"&&(n=Jy(n));for(var c=a.length,u=new Array(c),d=new Array(c),f=new Array(c),g=0;g<c;++g){var m=l[g],h=a[g],v=h.length,x=iv(n.call(m,m&&m.__data__,g,l)),w=x.length,C=d[g]=new Array(w),_=u[g]=new Array(w),k=f[g]=new Array(v);o(m,h,C,_,k,x,r);for(var $=0,S=0,b,R;$<w;++$)if(b=C[$]){for($>=S&&(S=$+1);!(R=_[S])&&++S<w;);b._next=R||null}}return u=new Nn(u,l),u._enter=d,u._exit=f,u}function iv(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function ov(){return new Nn(this._exit||this._groups.map(Km),this._parents)}function lv(n,r,o){var l=this.enter(),a=this,c=this.exit();return typeof n=="function"?(l=n(l),l&&(l=l.selection())):l=l.append(n+""),r!=null&&(a=r(a),a&&(a=a.selection())),o==null?c.remove():o(c),l&&a?l.merge(a).order():a}function av(n){for(var r=n.selection?n.selection():n,o=this._groups,l=r._groups,a=o.length,c=l.length,u=Math.min(a,c),d=new Array(a),f=0;f<u;++f)for(var g=o[f],m=l[f],h=g.length,v=d[f]=new Array(h),x,w=0;w<h;++w)(x=g[w]||m[w])&&(v[w]=x);for(;f<a;++f)d[f]=o[f];return new Nn(d,this._parents)}function sv(){for(var n=this._groups,r=-1,o=n.length;++r<o;)for(var l=n[r],a=l.length-1,c=l[a],u;--a>=0;)(u=l[a])&&(c&&u.compareDocumentPosition(c)^4&&c.parentNode.insertBefore(u,c),c=u);return this}function uv(n){n||(n=cv);function r(h,v){return h&&v?n(h.__data__,v.__data__):!h-!v}for(var o=this._groups,l=o.length,a=new Array(l),c=0;c<l;++c){for(var u=o[c],d=u.length,f=a[c]=new Array(d),g,m=0;m<d;++m)(g=u[m])&&(f[m]=g);f.sort(r)}return new Nn(a,this._parents).order()}function cv(n,r){return n<r?-1:n>r?1:n>=r?0:NaN}function dv(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function fv(){return Array.from(this)}function hv(){for(var n=this._groups,r=0,o=n.length;r<o;++r)for(var l=n[r],a=0,c=l.length;a<c;++a){var u=l[a];if(u)return u}return null}function pv(){let n=0;for(const r of this)++n;return n}function mv(){return!this.node()}function gv(n){for(var r=this._groups,o=0,l=r.length;o<l;++o)for(var a=r[o],c=0,u=a.length,d;c<u;++c)(d=a[c])&&n.call(d,d.__data__,c,a);return this}function yv(n){return function(){this.removeAttribute(n)}}function vv(n){return function(){this.removeAttributeNS(n.space,n.local)}}function xv(n,r){return function(){this.setAttribute(n,r)}}function wv(n,r){return function(){this.setAttributeNS(n.space,n.local,r)}}function _v(n,r){return function(){var o=r.apply(this,arguments);o==null?this.removeAttribute(n):this.setAttribute(n,o)}}function Sv(n,r){return function(){var o=r.apply(this,arguments);o==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,o)}}function kv(n,r){var o=fa(n);if(arguments.length<2){var l=this.node();return o.local?l.getAttributeNS(o.space,o.local):l.getAttribute(o)}return this.each((r==null?o.local?vv:yv:typeof r=="function"?o.local?Sv:_v:o.local?wv:xv)(o,r))}function Zm(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Ev(n){return function(){this.style.removeProperty(n)}}function Cv(n,r,o){return function(){this.style.setProperty(n,r,o)}}function bv(n,r,o){return function(){var l=r.apply(this,arguments);l==null?this.style.removeProperty(n):this.style.setProperty(n,l,o)}}function $v(n,r,o){return arguments.length>1?this.each((r==null?Ev:typeof r=="function"?bv:Cv)(n,r,o??"")):ei(this.node(),n)}function ei(n,r){return n.style.getPropertyValue(r)||Zm(n).getComputedStyle(n,null).getPropertyValue(r)}function Nv(n){return function(){delete this[n]}}function Pv(n,r){return function(){this[n]=r}}function Mv(n,r){return function(){var o=r.apply(this,arguments);o==null?delete this[n]:this[n]=o}}function Tv(n,r){return arguments.length>1?this.each((r==null?Nv:typeof r=="function"?Mv:Pv)(n,r)):this.node()[n]}function Jm(n){return n.trim().split(/^|\s+/)}function Wc(n){return n.classList||new e0(n)}function e0(n){this._node=n,this._names=Jm(n.getAttribute("class")||"")}e0.prototype={add:function(n){var r=this._names.indexOf(n);r<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var r=this._names.indexOf(n);r>=0&&(this._names.splice(r,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function n0(n,r){for(var o=Wc(n),l=-1,a=r.length;++l<a;)o.add(r[l])}function t0(n,r){for(var o=Wc(n),l=-1,a=r.length;++l<a;)o.remove(r[l])}function Lv(n){return function(){n0(this,n)}}function Av(n){return function(){t0(this,n)}}function Rv(n,r){return function(){(r.apply(this,arguments)?n0:t0)(this,n)}}function Iv(n,r){var o=Jm(n+"");if(arguments.length<2){for(var l=Wc(this.node()),a=-1,c=o.length;++a<c;)if(!l.contains(o[a]))return!1;return!0}return this.each((typeof r=="function"?Rv:r?Lv:Av)(o,r))}function Dv(){this.textContent=""}function Fv(n){return function(){this.textContent=n}}function jv(n){return function(){var r=n.apply(this,arguments);this.textContent=r??""}}function zv(n){return arguments.length?this.each(n==null?Dv:(typeof n=="function"?jv:Fv)(n)):this.node().textContent}function Ov(){this.innerHTML=""}function Hv(n){return function(){this.innerHTML=n}}function Bv(n){return function(){var r=n.apply(this,arguments);this.innerHTML=r??""}}function Vv(n){return arguments.length?this.each(n==null?Ov:(typeof n=="function"?Bv:Hv)(n)):this.node().innerHTML}function Wv(){this.nextSibling&&this.parentNode.appendChild(this)}function Uv(){return this.each(Wv)}function Qv(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function Gv(){return this.each(Qv)}function qv(n){var r=typeof n=="function"?n:Gm(n);return this.select(function(){return this.appendChild(r.apply(this,arguments))})}function Yv(){return null}function Xv(n,r){var o=typeof n=="function"?n:Gm(n),l=r==null?Yv:typeof r=="function"?r:Vc(r);return this.select(function(){return this.insertBefore(o.apply(this,arguments),l.apply(this,arguments)||null)})}function Kv(){var n=this.parentNode;n&&n.removeChild(this)}function Zv(){return this.each(Kv)}function Jv(){var n=this.cloneNode(!1),r=this.parentNode;return r?r.insertBefore(n,this.nextSibling):n}function ex(){var n=this.cloneNode(!0),r=this.parentNode;return r?r.insertBefore(n,this.nextSibling):n}function nx(n){return this.select(n?ex:Jv)}function tx(n){return arguments.length?this.property("__data__",n):this.node().__data__}function rx(n){return function(r){n.call(this,r,this.__data__)}}function ix(n){return n.trim().split(/^|\s+/).map(function(r){var o="",l=r.indexOf(".");return l>=0&&(o=r.slice(l+1),r=r.slice(0,l)),{type:r,name:o}})}function ox(n){return function(){var r=this.__on;if(r){for(var o=0,l=-1,a=r.length,c;o<a;++o)c=r[o],(!n.type||c.type===n.type)&&c.name===n.name?this.removeEventListener(c.type,c.listener,c.options):r[++l]=c;++l?r.length=l:delete this.__on}}}function lx(n,r,o){return function(){var l=this.__on,a,c=rx(r);if(l){for(var u=0,d=l.length;u<d;++u)if((a=l[u]).type===n.type&&a.name===n.name){this.removeEventListener(a.type,a.listener,a.options),this.addEventListener(a.type,a.listener=c,a.options=o),a.value=r;return}}this.addEventListener(n.type,c,o),a={type:n.type,name:n.name,value:r,listener:c,options:o},l?l.push(a):this.__on=[a]}}function ax(n,r,o){var l=ix(n+""),a,c=l.length,u;if(arguments.length<2){var d=this.node().__on;if(d){for(var f=0,g=d.length,m;f<g;++f)for(a=0,m=d[f];a<c;++a)if((u=l[a]).type===m.type&&u.name===m.name)return m.value}return}for(d=r?lx:ox,a=0;a<c;++a)this.each(d(l[a],r,o));return this}function r0(n,r,o){var l=Zm(n),a=l.CustomEvent;typeof a=="function"?a=new a(r,o):(a=l.document.createEvent("Event"),o?(a.initEvent(r,o.bubbles,o.cancelable),a.detail=o.detail):a.initEvent(r,!1,!1)),n.dispatchEvent(a)}function sx(n,r){return function(){return r0(this,n,r)}}function ux(n,r){return function(){return r0(this,n,r.apply(this,arguments))}}function cx(n,r){return this.each((typeof r=="function"?ux:sx)(n,r))}function*dx(){for(var n=this._groups,r=0,o=n.length;r<o;++r)for(var l=n[r],a=0,c=l.length,u;a<c;++a)(u=l[a])&&(yield u)}var i0=[null];function Nn(n,r){this._groups=n,this._parents=r}function go(){return new Nn([[document.documentElement]],i0)}function fx(){return this}Nn.prototype=go.prototype={constructor:Nn,select:jy,selectAll:By,selectChild:Qy,selectChildren:Xy,filter:Ky,data:rv,enter:Zy,exit:ov,join:lv,merge:av,selection:fx,order:sv,sort:uv,call:dv,nodes:fv,node:hv,size:pv,empty:mv,each:gv,attr:kv,style:$v,property:Tv,classed:Iv,text:zv,html:Vv,raise:Uv,lower:Gv,append:qv,insert:Xv,remove:Zv,clone:nx,datum:tx,on:ax,dispatch:cx,[Symbol.iterator]:dx};function $n(n){return typeof n=="string"?new Nn([[document.querySelector(n)]],[document.documentElement]):new Nn([[n]],i0)}function hx(n){let r;for(;r=n.sourceEvent;)n=r;return n}function Vn(n,r){if(n=hx(n),r===void 0&&(r=n.currentTarget),r){var o=r.ownerSVGElement||r;if(o.createSVGPoint){var l=o.createSVGPoint();return l.x=n.clientX,l.y=n.clientY,l=l.matrixTransform(r.getScreenCTM().inverse()),[l.x,l.y]}if(r.getBoundingClientRect){var a=r.getBoundingClientRect();return[n.clientX-a.left-r.clientLeft,n.clientY-a.top-r.clientTop]}}return[n.pageX,n.pageY]}const px={passive:!1},oo={capture:!0,passive:!1};function _u(n){n.stopImmediatePropagation()}function Zr(n){n.preventDefault(),n.stopImmediatePropagation()}function o0(n){var r=n.document.documentElement,o=$n(n).on("dragstart.drag",Zr,oo);"onselectstart"in r?o.on("selectstart.drag",Zr,oo):(r.__noselect=r.style.MozUserSelect,r.style.MozUserSelect="none")}function l0(n,r){var o=n.document.documentElement,l=$n(n).on("dragstart.drag",null);r&&(l.on("click.drag",Zr,oo),setTimeout(function(){l.on("click.drag",null)},0)),"onselectstart"in o?l.on("selectstart.drag",null):(o.style.MozUserSelect=o.__noselect,delete o.__noselect)}const Ol=n=>()=>n;function Nc(n,{sourceEvent:r,subject:o,target:l,identifier:a,active:c,x:u,y:d,dx:f,dy:g,dispatch:m}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:r,enumerable:!0,configurable:!0},subject:{value:o,enumerable:!0,configurable:!0},target:{value:l,enumerable:!0,configurable:!0},identifier:{value:a,enumerable:!0,configurable:!0},active:{value:c,enumerable:!0,configurable:!0},x:{value:u,enumerable:!0,configurable:!0},y:{value:d,enumerable:!0,configurable:!0},dx:{value:f,enumerable:!0,configurable:!0},dy:{value:g,enumerable:!0,configurable:!0},_:{value:m}})}Nc.prototype.on=function(){var n=this._.on.apply(this._,arguments);return n===this._?this:n};function mx(n){return!n.ctrlKey&&!n.button}function gx(){return this.parentNode}function yx(n,r){return r??{x:n.x,y:n.y}}function vx(){return navigator.maxTouchPoints||"ontouchstart"in this}function a0(){var n=mx,r=gx,o=yx,l=vx,a={},c=da("start","drag","end"),u=0,d,f,g,m,h=0;function v(b){b.on("mousedown.drag",x).filter(l).on("touchstart.drag",_).on("touchmove.drag",k,px).on("touchend.drag touchcancel.drag",$).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function x(b,R){if(!(m||!n.call(this,b,R))){var N=S(this,r.call(this,b,R),b,R,"mouse");N&&($n(b.view).on("mousemove.drag",w,oo).on("mouseup.drag",C,oo),o0(b.view),_u(b),g=!1,d=b.clientX,f=b.clientY,N("start",b))}}function w(b){if(Zr(b),!g){var R=b.clientX-d,N=b.clientY-f;g=R*R+N*N>h}a.mouse("drag",b)}function C(b){$n(b.view).on("mousemove.drag mouseup.drag",null),l0(b.view,g),Zr(b),a.mouse("end",b)}function _(b,R){if(n.call(this,b,R)){var N=b.changedTouches,F=r.call(this,b,R),P=N.length,A,O;for(A=0;A<P;++A)(O=S(this,F,b,R,N[A].identifier,N[A]))&&(_u(b),O("start",b,N[A]))}}function k(b){var R=b.changedTouches,N=R.length,F,P;for(F=0;F<N;++F)(P=a[R[F].identifier])&&(Zr(b),P("drag",b,R[F]))}function $(b){var R=b.changedTouches,N=R.length,F,P;for(m&&clearTimeout(m),m=setTimeout(function(){m=null},500),F=0;F<N;++F)(P=a[R[F].identifier])&&(_u(b),P("end",b,R[F]))}function S(b,R,N,F,P,A){var O=c.copy(),L=Vn(A||N,R),D,J,T;if((T=o.call(b,new Nc("beforestart",{sourceEvent:N,target:v,identifier:P,active:u,x:L[0],y:L[1],dx:0,dy:0,dispatch:O}),F))!=null)return D=T.x-L[0]||0,J=T.y-L[1]||0,function q(Q,Y,W){var V=L,X;switch(Q){case"start":a[P]=q,X=u++;break;case"end":delete a[P],--u;case"drag":L=Vn(W||Y,R),X=u;break}O.call(Q,b,new Nc(Q,{sourceEvent:Y,subject:T,target:v,identifier:P,active:X,x:L[0]+D,y:L[1]+J,dx:L[0]-V[0],dy:L[1]-V[1],dispatch:O}),F)}}return v.filter=function(b){return arguments.length?(n=typeof b=="function"?b:Ol(!!b),v):n},v.container=function(b){return arguments.length?(r=typeof b=="function"?b:Ol(b),v):r},v.subject=function(b){return arguments.length?(o=typeof b=="function"?b:Ol(b),v):o},v.touchable=function(b){return arguments.length?(l=typeof b=="function"?b:Ol(!!b),v):l},v.on=function(){var b=c.on.apply(c,arguments);return b===c?v:b},v.clickDistance=function(b){return arguments.length?(h=(b=+b)*b,v):Math.sqrt(h)},v}function Uc(n,r,o){n.prototype=r.prototype=o,o.constructor=n}function s0(n,r){var o=Object.create(n.prototype);for(var l in r)o[l]=r[l];return o}function yo(){}var lo=.7,na=1/lo,Jr="\\s*([+-]?\\d+)\\s*",ao="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",it="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",xx=/^#([0-9a-f]{3,8})$/,wx=new RegExp(`^rgb\\(${Jr},${Jr},${Jr}\\)$`),_x=new RegExp(`^rgb\\(${it},${it},${it}\\)$`),Sx=new RegExp(`^rgba\\(${Jr},${Jr},${Jr},${ao}\\)$`),kx=new RegExp(`^rgba\\(${it},${it},${it},${ao}\\)$`),Ex=new RegExp(`^hsl\\(${ao},${it},${it}\\)$`),Cx=new RegExp(`^hsla\\(${ao},${it},${it},${ao}\\)$`),Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Uc(yo,mr,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:Vh,formatHex:Vh,formatHex8:bx,formatHsl:$x,formatRgb:Wh,toString:Wh});function Vh(){return this.rgb().formatHex()}function bx(){return this.rgb().formatHex8()}function $x(){return u0(this).formatHsl()}function Wh(){return this.rgb().formatRgb()}function mr(n){var r,o;return n=(n+"").trim().toLowerCase(),(r=xx.exec(n))?(o=r[1].length,r=parseInt(r[1],16),o===6?Uh(r):o===3?new xn(r>>8&15|r>>4&240,r>>4&15|r&240,(r&15)<<4|r&15,1):o===8?Hl(r>>24&255,r>>16&255,r>>8&255,(r&255)/255):o===4?Hl(r>>12&15|r>>8&240,r>>8&15|r>>4&240,r>>4&15|r&240,((r&15)<<4|r&15)/255):null):(r=wx.exec(n))?new xn(r[1],r[2],r[3],1):(r=_x.exec(n))?new xn(r[1]*255/100,r[2]*255/100,r[3]*255/100,1):(r=Sx.exec(n))?Hl(r[1],r[2],r[3],r[4]):(r=kx.exec(n))?Hl(r[1]*255/100,r[2]*255/100,r[3]*255/100,r[4]):(r=Ex.exec(n))?qh(r[1],r[2]/100,r[3]/100,1):(r=Cx.exec(n))?qh(r[1],r[2]/100,r[3]/100,r[4]):Bh.hasOwnProperty(n)?Uh(Bh[n]):n==="transparent"?new xn(NaN,NaN,NaN,0):null}function Uh(n){return new xn(n>>16&255,n>>8&255,n&255,1)}function Hl(n,r,o,l){return l<=0&&(n=r=o=NaN),new xn(n,r,o,l)}function Nx(n){return n instanceof yo||(n=mr(n)),n?(n=n.rgb(),new xn(n.r,n.g,n.b,n.opacity)):new xn}function Pc(n,r,o,l){return arguments.length===1?Nx(n):new xn(n,r,o,l??1)}function xn(n,r,o,l){this.r=+n,this.g=+r,this.b=+o,this.opacity=+l}Uc(xn,Pc,s0(yo,{brighter(n){return n=n==null?na:Math.pow(na,n),new xn(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?lo:Math.pow(lo,n),new xn(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new xn(hr(this.r),hr(this.g),hr(this.b),ta(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:Qh,formatHex:Qh,formatHex8:Px,formatRgb:Gh,toString:Gh}));function Qh(){return`#${fr(this.r)}${fr(this.g)}${fr(this.b)}`}function Px(){return`#${fr(this.r)}${fr(this.g)}${fr(this.b)}${fr((isNaN(this.opacity)?1:this.opacity)*255)}`}function Gh(){const n=ta(this.opacity);return`${n===1?"rgb(":"rgba("}${hr(this.r)}, ${hr(this.g)}, ${hr(this.b)}${n===1?")":`, ${n})`}`}function ta(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function hr(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function fr(n){return n=hr(n),(n<16?"0":"")+n.toString(16)}function qh(n,r,o,l){return l<=0?n=r=o=NaN:o<=0||o>=1?n=r=NaN:r<=0&&(n=NaN),new Wn(n,r,o,l)}function u0(n){if(n instanceof Wn)return new Wn(n.h,n.s,n.l,n.opacity);if(n instanceof yo||(n=mr(n)),!n)return new Wn;if(n instanceof Wn)return n;n=n.rgb();var r=n.r/255,o=n.g/255,l=n.b/255,a=Math.min(r,o,l),c=Math.max(r,o,l),u=NaN,d=c-a,f=(c+a)/2;return d?(r===c?u=(o-l)/d+(o<l)*6:o===c?u=(l-r)/d+2:u=(r-o)/d+4,d/=f<.5?c+a:2-c-a,u*=60):d=f>0&&f<1?0:u,new Wn(u,d,f,n.opacity)}function Mx(n,r,o,l){return arguments.length===1?u0(n):new Wn(n,r,o,l??1)}function Wn(n,r,o,l){this.h=+n,this.s=+r,this.l=+o,this.opacity=+l}Uc(Wn,Mx,s0(yo,{brighter(n){return n=n==null?na:Math.pow(na,n),new Wn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?lo:Math.pow(lo,n),new Wn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,r=isNaN(n)||isNaN(this.s)?0:this.s,o=this.l,l=o+(o<.5?o:1-o)*r,a=2*o-l;return new xn(Su(n>=240?n-240:n+120,a,l),Su(n,a,l),Su(n<120?n+240:n-120,a,l),this.opacity)},clamp(){return new Wn(Yh(this.h),Bl(this.s),Bl(this.l),ta(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=ta(this.opacity);return`${n===1?"hsl(":"hsla("}${Yh(this.h)}, ${Bl(this.s)*100}%, ${Bl(this.l)*100}%${n===1?")":`, ${n})`}`}}));function Yh(n){return n=(n||0)%360,n<0?n+360:n}function Bl(n){return Math.max(0,Math.min(1,n||0))}function Su(n,r,o){return(n<60?r+(o-r)*n/60:n<180?o:n<240?r+(o-r)*(240-n)/60:r)*255}const Qc=n=>()=>n;function Tx(n,r){return function(o){return n+o*r}}function Lx(n,r,o){return n=Math.pow(n,o),r=Math.pow(r,o)-n,o=1/o,function(l){return Math.pow(n+l*r,o)}}function Ax(n){return(n=+n)==1?c0:function(r,o){return o-r?Lx(r,o,n):Qc(isNaN(r)?o:r)}}function c0(n,r){var o=r-n;return o?Tx(n,o):Qc(isNaN(n)?r:n)}const ra=(function n(r){var o=Ax(r);function l(a,c){var u=o((a=Pc(a)).r,(c=Pc(c)).r),d=o(a.g,c.g),f=o(a.b,c.b),g=c0(a.opacity,c.opacity);return function(m){return a.r=u(m),a.g=d(m),a.b=f(m),a.opacity=g(m),a+""}}return l.gamma=n,l})(1);function Rx(n,r){r||(r=[]);var o=n?Math.min(r.length,n.length):0,l=r.slice(),a;return function(c){for(a=0;a<o;++a)l[a]=n[a]*(1-c)+r[a]*c;return l}}function Ix(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Dx(n,r){var o=r?r.length:0,l=n?Math.min(o,n.length):0,a=new Array(l),c=new Array(o),u;for(u=0;u<l;++u)a[u]=ro(n[u],r[u]);for(;u<o;++u)c[u]=r[u];return function(d){for(u=0;u<l;++u)c[u]=a[u](d);return c}}function Fx(n,r){var o=new Date;return n=+n,r=+r,function(l){return o.setTime(n*(1-l)+r*l),o}}function rt(n,r){return n=+n,r=+r,function(o){return n*(1-o)+r*o}}function jx(n,r){var o={},l={},a;(n===null||typeof n!="object")&&(n={}),(r===null||typeof r!="object")&&(r={});for(a in r)a in n?o[a]=ro(n[a],r[a]):l[a]=r[a];return function(c){for(a in o)l[a]=o[a](c);return l}}var Mc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ku=new RegExp(Mc.source,"g");function zx(n){return function(){return n}}function Ox(n){return function(r){return n(r)+""}}function d0(n,r){var o=Mc.lastIndex=ku.lastIndex=0,l,a,c,u=-1,d=[],f=[];for(n=n+"",r=r+"";(l=Mc.exec(n))&&(a=ku.exec(r));)(c=a.index)>o&&(c=r.slice(o,c),d[u]?d[u]+=c:d[++u]=c),(l=l[0])===(a=a[0])?d[u]?d[u]+=a:d[++u]=a:(d[++u]=null,f.push({i:u,x:rt(l,a)})),o=ku.lastIndex;return o<r.length&&(c=r.slice(o),d[u]?d[u]+=c:d[++u]=c),d.length<2?f[0]?Ox(f[0].x):zx(r):(r=f.length,function(g){for(var m=0,h;m<r;++m)d[(h=f[m]).i]=h.x(g);return d.join("")})}function ro(n,r){var o=typeof r,l;return r==null||o==="boolean"?Qc(r):(o==="number"?rt:o==="string"?(l=mr(r))?(r=l,ra):d0:r instanceof mr?ra:r instanceof Date?Fx:Ix(r)?Rx:Array.isArray(r)?Dx:typeof r.valueOf!="function"&&typeof r.toString!="function"||isNaN(r)?jx:rt)(n,r)}var Xh=180/Math.PI,Tc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function f0(n,r,o,l,a,c){var u,d,f;return(u=Math.sqrt(n*n+r*r))&&(n/=u,r/=u),(f=n*o+r*l)&&(o-=n*f,l-=r*f),(d=Math.sqrt(o*o+l*l))&&(o/=d,l/=d,f/=d),n*l<r*o&&(n=-n,r=-r,f=-f,u=-u),{translateX:a,translateY:c,rotate:Math.atan2(r,n)*Xh,skewX:Math.atan(f)*Xh,scaleX:u,scaleY:d}}var Vl;function Hx(n){const r=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return r.isIdentity?Tc:f0(r.a,r.b,r.c,r.d,r.e,r.f)}function Bx(n){return n==null||(Vl||(Vl=document.createElementNS("http://www.w3.org/2000/svg","g")),Vl.setAttribute("transform",n),!(n=Vl.transform.baseVal.consolidate()))?Tc:(n=n.matrix,f0(n.a,n.b,n.c,n.d,n.e,n.f))}function h0(n,r,o,l){function a(g){return g.length?g.pop()+" ":""}function c(g,m,h,v,x,w){if(g!==h||m!==v){var C=x.push("translate(",null,r,null,o);w.push({i:C-4,x:rt(g,h)},{i:C-2,x:rt(m,v)})}else(h||v)&&x.push("translate("+h+r+v+o)}function u(g,m,h,v){g!==m?(g-m>180?m+=360:m-g>180&&(g+=360),v.push({i:h.push(a(h)+"rotate(",null,l)-2,x:rt(g,m)})):m&&h.push(a(h)+"rotate("+m+l)}function d(g,m,h,v){g!==m?v.push({i:h.push(a(h)+"skewX(",null,l)-2,x:rt(g,m)}):m&&h.push(a(h)+"skewX("+m+l)}function f(g,m,h,v,x,w){if(g!==h||m!==v){var C=x.push(a(x)+"scale(",null,",",null,")");w.push({i:C-4,x:rt(g,h)},{i:C-2,x:rt(m,v)})}else(h!==1||v!==1)&&x.push(a(x)+"scale("+h+","+v+")")}return function(g,m){var h=[],v=[];return g=n(g),m=n(m),c(g.translateX,g.translateY,m.translateX,m.translateY,h,v),u(g.rotate,m.rotate,h,v),d(g.skewX,m.skewX,h,v),f(g.scaleX,g.scaleY,m.scaleX,m.scaleY,h,v),g=m=null,function(x){for(var w=-1,C=v.length,_;++w<C;)h[(_=v[w]).i]=_.x(x);return h.join("")}}}var Vx=h0(Hx,"px, ","px)","deg)"),Wx=h0(Bx,", ",")",")"),Ux=1e-12;function Kh(n){return((n=Math.exp(n))+1/n)/2}function Qx(n){return((n=Math.exp(n))-1/n)/2}function Gx(n){return((n=Math.exp(2*n))-1)/(n+1)}const Xl=(function n(r,o,l){function a(c,u){var d=c[0],f=c[1],g=c[2],m=u[0],h=u[1],v=u[2],x=m-d,w=h-f,C=x*x+w*w,_,k;if(C<Ux)k=Math.log(v/g)/r,_=function(F){return[d+F*x,f+F*w,g*Math.exp(r*F*k)]};else{var $=Math.sqrt(C),S=(v*v-g*g+l*C)/(2*g*o*$),b=(v*v-g*g-l*C)/(2*v*o*$),R=Math.log(Math.sqrt(S*S+1)-S),N=Math.log(Math.sqrt(b*b+1)-b);k=(N-R)/r,_=function(F){var P=F*k,A=Kh(R),O=g/(o*$)*(A*Gx(r*P+R)-Qx(R));return[d+O*x,f+O*w,g*A/Kh(r*P+R)]}}return _.duration=k*1e3*r/Math.SQRT2,_}return a.rho=function(c){var u=Math.max(.001,+c),d=u*u,f=d*d;return n(u,d,f)},a})(Math.SQRT2,2,4);var ni=0,no=0,Ji=0,p0=1e3,ia,to,oa=0,gr=0,ha=0,so=typeof performance=="object"&&performance.now?performance:Date,m0=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Gc(){return gr||(m0(qx),gr=so.now()+ha)}function qx(){gr=0}function la(){this._call=this._time=this._next=null}la.prototype=g0.prototype={constructor:la,restart:function(n,r,o){if(typeof n!="function")throw new TypeError("callback is not a function");o=(o==null?Gc():+o)+(r==null?0:+r),!this._next&&to!==this&&(to?to._next=this:ia=this,to=this),this._call=n,this._time=o,Lc()},stop:function(){this._call&&(this._call=null,this._time=1/0,Lc())}};function g0(n,r,o){var l=new la;return l.restart(n,r,o),l}function Yx(){Gc(),++ni;for(var n=ia,r;n;)(r=gr-n._time)>=0&&n._call.call(void 0,r),n=n._next;--ni}function Zh(){gr=(oa=so.now())+ha,ni=no=0;try{Yx()}finally{ni=0,Kx(),gr=0}}function Xx(){var n=so.now(),r=n-oa;r>p0&&(ha-=r,oa=n)}function Kx(){for(var n,r=ia,o,l=1/0;r;)r._call?(l>r._time&&(l=r._time),n=r,r=r._next):(o=r._next,r._next=null,r=n?n._next=o:ia=o);to=n,Lc(l)}function Lc(n){if(!ni){no&&(no=clearTimeout(no));var r=n-gr;r>24?(n<1/0&&(no=setTimeout(Zh,n-so.now()-ha)),Ji&&(Ji=clearInterval(Ji))):(Ji||(oa=so.now(),Ji=setInterval(Xx,p0)),ni=1,m0(Zh))}}function Jh(n,r,o){var l=new la;return r=r==null?0:+r,l.restart(a=>{l.stop(),n(a+r)},r,o),l}var Zx=da("start","end","cancel","interrupt"),Jx=[],y0=0,ep=1,Ac=2,Kl=3,np=4,Rc=5,Zl=6;function pa(n,r,o,l,a,c){var u=n.__transition;if(!u)n.__transition={};else if(o in u)return;ew(n,o,{name:r,index:l,group:a,on:Zx,tween:Jx,time:c.time,delay:c.delay,duration:c.duration,ease:c.ease,timer:null,state:y0})}function qc(n,r){var o=Yn(n,r);if(o.state>y0)throw new Error("too late; already scheduled");return o}function ot(n,r){var o=Yn(n,r);if(o.state>Kl)throw new Error("too late; already running");return o}function Yn(n,r){var o=n.__transition;if(!o||!(o=o[r]))throw new Error("transition not found");return o}function ew(n,r,o){var l=n.__transition,a;l[r]=o,o.timer=g0(c,0,o.time);function c(g){o.state=ep,o.timer.restart(u,o.delay,o.time),o.delay<=g&&u(g-o.delay)}function u(g){var m,h,v,x;if(o.state!==ep)return f();for(m in l)if(x=l[m],x.name===o.name){if(x.state===Kl)return Jh(u);x.state===np?(x.state=Zl,x.timer.stop(),x.on.call("interrupt",n,n.__data__,x.index,x.group),delete l[m]):+m<r&&(x.state=Zl,x.timer.stop(),x.on.call("cancel",n,n.__data__,x.index,x.group),delete l[m])}if(Jh(function(){o.state===Kl&&(o.state=np,o.timer.restart(d,o.delay,o.time),d(g))}),o.state=Ac,o.on.call("start",n,n.__data__,o.index,o.group),o.state===Ac){for(o.state=Kl,a=new Array(v=o.tween.length),m=0,h=-1;m<v;++m)(x=o.tween[m].value.call(n,n.__data__,o.index,o.group))&&(a[++h]=x);a.length=h+1}}function d(g){for(var m=g<o.duration?o.ease.call(null,g/o.duration):(o.timer.restart(f),o.state=Rc,1),h=-1,v=a.length;++h<v;)a[h].call(n,m);o.state===Rc&&(o.on.call("end",n,n.__data__,o.index,o.group),f())}function f(){o.state=Zl,o.timer.stop(),delete l[r];for(var g in l)return;delete n.__transition}}function Jl(n,r){var o=n.__transition,l,a,c=!0,u;if(o){r=r==null?null:r+"";for(u in o){if((l=o[u]).name!==r){c=!1;continue}a=l.state>Ac&&l.state<Rc,l.state=Zl,l.timer.stop(),l.on.call(a?"interrupt":"cancel",n,n.__data__,l.index,l.group),delete o[u]}c&&delete n.__transition}}function nw(n){return this.each(function(){Jl(this,n)})}function tw(n,r){var o,l;return function(){var a=ot(this,n),c=a.tween;if(c!==o){l=o=c;for(var u=0,d=l.length;u<d;++u)if(l[u].name===r){l=l.slice(),l.splice(u,1);break}}a.tween=l}}function rw(n,r,o){var l,a;if(typeof o!="function")throw new Error;return function(){var c=ot(this,n),u=c.tween;if(u!==l){a=(l=u).slice();for(var d={name:r,value:o},f=0,g=a.length;f<g;++f)if(a[f].name===r){a[f]=d;break}f===g&&a.push(d)}c.tween=a}}function iw(n,r){var o=this._id;if(n+="",arguments.length<2){for(var l=Yn(this.node(),o).tween,a=0,c=l.length,u;a<c;++a)if((u=l[a]).name===n)return u.value;return null}return this.each((r==null?tw:rw)(o,n,r))}function Yc(n,r,o){var l=n._id;return n.each(function(){var a=ot(this,l);(a.value||(a.value={}))[r]=o.apply(this,arguments)}),function(a){return Yn(a,l).value[r]}}function v0(n,r){var o;return(typeof r=="number"?rt:r instanceof mr?ra:(o=mr(r))?(r=o,ra):d0)(n,r)}function ow(n){return function(){this.removeAttribute(n)}}function lw(n){return function(){this.removeAttributeNS(n.space,n.local)}}function aw(n,r,o){var l,a=o+"",c;return function(){var u=this.getAttribute(n);return u===a?null:u===l?c:c=r(l=u,o)}}function sw(n,r,o){var l,a=o+"",c;return function(){var u=this.getAttributeNS(n.space,n.local);return u===a?null:u===l?c:c=r(l=u,o)}}function uw(n,r,o){var l,a,c;return function(){var u,d=o(this),f;return d==null?void this.removeAttribute(n):(u=this.getAttribute(n),f=d+"",u===f?null:u===l&&f===a?c:(a=f,c=r(l=u,d)))}}function cw(n,r,o){var l,a,c;return function(){var u,d=o(this),f;return d==null?void this.removeAttributeNS(n.space,n.local):(u=this.getAttributeNS(n.space,n.local),f=d+"",u===f?null:u===l&&f===a?c:(a=f,c=r(l=u,d)))}}function dw(n,r){var o=fa(n),l=o==="transform"?Wx:v0;return this.attrTween(n,typeof r=="function"?(o.local?cw:uw)(o,l,Yc(this,"attr."+n,r)):r==null?(o.local?lw:ow)(o):(o.local?sw:aw)(o,l,r))}function fw(n,r){return function(o){this.setAttribute(n,r.call(this,o))}}function hw(n,r){return function(o){this.setAttributeNS(n.space,n.local,r.call(this,o))}}function pw(n,r){var o,l;function a(){var c=r.apply(this,arguments);return c!==l&&(o=(l=c)&&hw(n,c)),o}return a._value=r,a}function mw(n,r){var o,l;function a(){var c=r.apply(this,arguments);return c!==l&&(o=(l=c)&&fw(n,c)),o}return a._value=r,a}function gw(n,r){var o="attr."+n;if(arguments.length<2)return(o=this.tween(o))&&o._value;if(r==null)return this.tween(o,null);if(typeof r!="function")throw new Error;var l=fa(n);return this.tween(o,(l.local?pw:mw)(l,r))}function yw(n,r){return function(){qc(this,n).delay=+r.apply(this,arguments)}}function vw(n,r){return r=+r,function(){qc(this,n).delay=r}}function xw(n){var r=this._id;return arguments.length?this.each((typeof n=="function"?yw:vw)(r,n)):Yn(this.node(),r).delay}function ww(n,r){return function(){ot(this,n).duration=+r.apply(this,arguments)}}function _w(n,r){return r=+r,function(){ot(this,n).duration=r}}function Sw(n){var r=this._id;return arguments.length?this.each((typeof n=="function"?ww:_w)(r,n)):Yn(this.node(),r).duration}function kw(n,r){if(typeof r!="function")throw new Error;return function(){ot(this,n).ease=r}}function Ew(n){var r=this._id;return arguments.length?this.each(kw(r,n)):Yn(this.node(),r).ease}function Cw(n,r){return function(){var o=r.apply(this,arguments);if(typeof o!="function")throw new Error;ot(this,n).ease=o}}function bw(n){if(typeof n!="function")throw new Error;return this.each(Cw(this._id,n))}function $w(n){typeof n!="function"&&(n=Ym(n));for(var r=this._groups,o=r.length,l=new Array(o),a=0;a<o;++a)for(var c=r[a],u=c.length,d=l[a]=[],f,g=0;g<u;++g)(f=c[g])&&n.call(f,f.__data__,g,c)&&d.push(f);return new xt(l,this._parents,this._name,this._id)}function Nw(n){if(n._id!==this._id)throw new Error;for(var r=this._groups,o=n._groups,l=r.length,a=o.length,c=Math.min(l,a),u=new Array(l),d=0;d<c;++d)for(var f=r[d],g=o[d],m=f.length,h=u[d]=new Array(m),v,x=0;x<m;++x)(v=f[x]||g[x])&&(h[x]=v);for(;d<l;++d)u[d]=r[d];return new xt(u,this._parents,this._name,this._id)}function Pw(n){return(n+"").trim().split(/^|\s+/).every(function(r){var o=r.indexOf(".");return o>=0&&(r=r.slice(0,o)),!r||r==="start"})}function Mw(n,r,o){var l,a,c=Pw(r)?qc:ot;return function(){var u=c(this,n),d=u.on;d!==l&&(a=(l=d).copy()).on(r,o),u.on=a}}function Tw(n,r){var o=this._id;return arguments.length<2?Yn(this.node(),o).on.on(n):this.each(Mw(o,n,r))}function Lw(n){return function(){var r=this.parentNode;for(var o in this.__transition)if(+o!==n)return;r&&r.removeChild(this)}}function Aw(){return this.on("end.remove",Lw(this._id))}function Rw(n){var r=this._name,o=this._id;typeof n!="function"&&(n=Vc(n));for(var l=this._groups,a=l.length,c=new Array(a),u=0;u<a;++u)for(var d=l[u],f=d.length,g=c[u]=new Array(f),m,h,v=0;v<f;++v)(m=d[v])&&(h=n.call(m,m.__data__,v,d))&&("__data__"in m&&(h.__data__=m.__data__),g[v]=h,pa(g[v],r,o,v,g,Yn(m,o)));return new xt(c,this._parents,r,o)}function Iw(n){var r=this._name,o=this._id;typeof n!="function"&&(n=qm(n));for(var l=this._groups,a=l.length,c=[],u=[],d=0;d<a;++d)for(var f=l[d],g=f.length,m,h=0;h<g;++h)if(m=f[h]){for(var v=n.call(m,m.__data__,h,f),x,w=Yn(m,o),C=0,_=v.length;C<_;++C)(x=v[C])&&pa(x,r,o,C,v,w);c.push(v),u.push(m)}return new xt(c,u,r,o)}var Dw=go.prototype.constructor;function Fw(){return new Dw(this._groups,this._parents)}function jw(n,r){var o,l,a;return function(){var c=ei(this,n),u=(this.style.removeProperty(n),ei(this,n));return c===u?null:c===o&&u===l?a:a=r(o=c,l=u)}}function x0(n){return function(){this.style.removeProperty(n)}}function zw(n,r,o){var l,a=o+"",c;return function(){var u=ei(this,n);return u===a?null:u===l?c:c=r(l=u,o)}}function Ow(n,r,o){var l,a,c;return function(){var u=ei(this,n),d=o(this),f=d+"";return d==null&&(f=d=(this.style.removeProperty(n),ei(this,n))),u===f?null:u===l&&f===a?c:(a=f,c=r(l=u,d))}}function Hw(n,r){var o,l,a,c="style."+r,u="end."+c,d;return function(){var f=ot(this,n),g=f.on,m=f.value[c]==null?d||(d=x0(r)):void 0;(g!==o||a!==m)&&(l=(o=g).copy()).on(u,a=m),f.on=l}}function Bw(n,r,o){var l=(n+="")=="transform"?Vx:v0;return r==null?this.styleTween(n,jw(n,l)).on("end.style."+n,x0(n)):typeof r=="function"?this.styleTween(n,Ow(n,l,Yc(this,"style."+n,r))).each(Hw(this._id,n)):this.styleTween(n,zw(n,l,r),o).on("end.style."+n,null)}function Vw(n,r,o){return function(l){this.style.setProperty(n,r.call(this,l),o)}}function Ww(n,r,o){var l,a;function c(){var u=r.apply(this,arguments);return u!==a&&(l=(a=u)&&Vw(n,u,o)),l}return c._value=r,c}function Uw(n,r,o){var l="style."+(n+="");if(arguments.length<2)return(l=this.tween(l))&&l._value;if(r==null)return this.tween(l,null);if(typeof r!="function")throw new Error;return this.tween(l,Ww(n,r,o??""))}function Qw(n){return function(){this.textContent=n}}function Gw(n){return function(){var r=n(this);this.textContent=r??""}}function qw(n){return this.tween("text",typeof n=="function"?Gw(Yc(this,"text",n)):Qw(n==null?"":n+""))}function Yw(n){return function(r){this.textContent=n.call(this,r)}}function Xw(n){var r,o;function l(){var a=n.apply(this,arguments);return a!==o&&(r=(o=a)&&Yw(a)),r}return l._value=n,l}function Kw(n){var r="text";if(arguments.length<1)return(r=this.tween(r))&&r._value;if(n==null)return this.tween(r,null);if(typeof n!="function")throw new Error;return this.tween(r,Xw(n))}function Zw(){for(var n=this._name,r=this._id,o=w0(),l=this._groups,a=l.length,c=0;c<a;++c)for(var u=l[c],d=u.length,f,g=0;g<d;++g)if(f=u[g]){var m=Yn(f,r);pa(f,n,o,g,u,{time:m.time+m.delay+m.duration,delay:0,duration:m.duration,ease:m.ease})}return new xt(l,this._parents,n,o)}function Jw(){var n,r,o=this,l=o._id,a=o.size();return new Promise(function(c,u){var d={value:u},f={value:function(){--a===0&&c()}};o.each(function(){var g=ot(this,l),m=g.on;m!==n&&(r=(n=m).copy(),r._.cancel.push(d),r._.interrupt.push(d),r._.end.push(f)),g.on=r}),a===0&&c()})}var e2=0;function xt(n,r,o,l){this._groups=n,this._parents=r,this._name=o,this._id=l}function w0(){return++e2}var yt=go.prototype;xt.prototype={constructor:xt,select:Rw,selectAll:Iw,selectChild:yt.selectChild,selectChildren:yt.selectChildren,filter:$w,merge:Nw,selection:Fw,transition:Zw,call:yt.call,nodes:yt.nodes,node:yt.node,size:yt.size,empty:yt.empty,each:yt.each,on:Tw,attr:dw,attrTween:gw,style:Bw,styleTween:Uw,text:qw,textTween:Kw,remove:Aw,tween:iw,delay:xw,duration:Sw,ease:Ew,easeVarying:bw,end:Jw,[Symbol.iterator]:yt[Symbol.iterator]};function n2(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var t2={time:null,delay:0,duration:250,ease:n2};function r2(n,r){for(var o;!(o=n.__transition)||!(o=o[r]);)if(!(n=n.parentNode))throw new Error(`transition ${r} not found`);return o}function i2(n){var r,o;n instanceof xt?(r=n._id,n=n._name):(r=w0(),(o=t2).time=Gc(),n=n==null?null:n+"");for(var l=this._groups,a=l.length,c=0;c<a;++c)for(var u=l[c],d=u.length,f,g=0;g<d;++g)(f=u[g])&&pa(f,n,r,g,u,o||r2(f,r));return new xt(l,this._parents,n,r)}go.prototype.interrupt=nw;go.prototype.transition=i2;const Wl=n=>()=>n;function o2(n,{sourceEvent:r,target:o,transform:l,dispatch:a}){Object.defineProperties(this,{type:{value:n,enumerable:!0,configurable:!0},sourceEvent:{value:r,enumerable:!0,configurable:!0},target:{value:o,enumerable:!0,configurable:!0},transform:{value:l,enumerable:!0,configurable:!0},_:{value:a}})}function vt(n,r,o){this.k=n,this.x=r,this.y=o}vt.prototype={constructor:vt,scale:function(n){return n===1?this:new vt(this.k*n,this.x,this.y)},translate:function(n,r){return n===0&r===0?this:new vt(this.k,this.x+this.k*n,this.y+this.k*r)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};var ma=new vt(1,0,0);_0.prototype=vt.prototype;function _0(n){for(;!n.__zoom;)if(!(n=n.parentNode))return ma;return n.__zoom}function Eu(n){n.stopImmediatePropagation()}function eo(n){n.preventDefault(),n.stopImmediatePropagation()}function l2(n){return(!n.ctrlKey||n.type==="wheel")&&!n.button}function a2(){var n=this;return n instanceof SVGElement?(n=n.ownerSVGElement||n,n.hasAttribute("viewBox")?(n=n.viewBox.baseVal,[[n.x,n.y],[n.x+n.width,n.y+n.height]]):[[0,0],[n.width.baseVal.value,n.height.baseVal.value]]):[[0,0],[n.clientWidth,n.clientHeight]]}function tp(){return this.__zoom||ma}function s2(n){return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*(n.ctrlKey?10:1)}function u2(){return navigator.maxTouchPoints||"ontouchstart"in this}function c2(n,r,o){var l=n.invertX(r[0][0])-o[0][0],a=n.invertX(r[1][0])-o[1][0],c=n.invertY(r[0][1])-o[0][1],u=n.invertY(r[1][1])-o[1][1];return n.translate(a>l?(l+a)/2:Math.min(0,l)||Math.max(0,a),u>c?(c+u)/2:Math.min(0,c)||Math.max(0,u))}function S0(){var n=l2,r=a2,o=c2,l=s2,a=u2,c=[0,1/0],u=[[-1/0,-1/0],[1/0,1/0]],d=250,f=Xl,g=da("start","zoom","end"),m,h,v,x=500,w=150,C=0,_=10;function k(T){T.property("__zoom",tp).on("wheel.zoom",P,{passive:!1}).on("mousedown.zoom",A).on("dblclick.zoom",O).filter(a).on("touchstart.zoom",L).on("touchmove.zoom",D).on("touchend.zoom touchcancel.zoom",J).style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}k.transform=function(T,q,Q,Y){var W=T.selection?T.selection():T;W.property("__zoom",tp),T!==W?R(T,q,Q,Y):W.interrupt().each(function(){N(this,arguments).event(Y).start().zoom(null,typeof q=="function"?q.apply(this,arguments):q).end()})},k.scaleBy=function(T,q,Q,Y){k.scaleTo(T,function(){var W=this.__zoom.k,V=typeof q=="function"?q.apply(this,arguments):q;return W*V},Q,Y)},k.scaleTo=function(T,q,Q,Y){k.transform(T,function(){var W=r.apply(this,arguments),V=this.__zoom,X=Q==null?b(W):typeof Q=="function"?Q.apply(this,arguments):Q,M=V.invert(X),z=typeof q=="function"?q.apply(this,arguments):q;return o(S($(V,z),X,M),W,u)},Q,Y)},k.translateBy=function(T,q,Q,Y){k.transform(T,function(){return o(this.__zoom.translate(typeof q=="function"?q.apply(this,arguments):q,typeof Q=="function"?Q.apply(this,arguments):Q),r.apply(this,arguments),u)},null,Y)},k.translateTo=function(T,q,Q,Y,W){k.transform(T,function(){var V=r.apply(this,arguments),X=this.__zoom,M=Y==null?b(V):typeof Y=="function"?Y.apply(this,arguments):Y;return o(ma.translate(M[0],M[1]).scale(X.k).translate(typeof q=="function"?-q.apply(this,arguments):-q,typeof Q=="function"?-Q.apply(this,arguments):-Q),V,u)},Y,W)};function $(T,q){return q=Math.max(c[0],Math.min(c[1],q)),q===T.k?T:new vt(q,T.x,T.y)}function S(T,q,Q){var Y=q[0]-Q[0]*T.k,W=q[1]-Q[1]*T.k;return Y===T.x&&W===T.y?T:new vt(T.k,Y,W)}function b(T){return[(+T[0][0]+ +T[1][0])/2,(+T[0][1]+ +T[1][1])/2]}function R(T,q,Q,Y){T.on("start.zoom",function(){N(this,arguments).event(Y).start()}).on("interrupt.zoom end.zoom",function(){N(this,arguments).event(Y).end()}).tween("zoom",function(){var W=this,V=arguments,X=N(W,V).event(Y),M=r.apply(W,V),z=Q==null?b(M):typeof Q=="function"?Q.apply(W,V):Q,j=Math.max(M[1][0]-M[0][0],M[1][1]-M[0][1]),U=W.__zoom,K=typeof q=="function"?q.apply(W,V):q,ie=f(U.invert(z).concat(j/U.k),K.invert(z).concat(j/K.k));return function(le){if(le===1)le=K;else{var Z=ie(le),oe=j/Z[2];le=new vt(oe,z[0]-Z[0]*oe,z[1]-Z[1]*oe)}X.zoom(null,le)}})}function N(T,q,Q){return!Q&&T.__zooming||new F(T,q)}function F(T,q){this.that=T,this.args=q,this.active=0,this.sourceEvent=null,this.extent=r.apply(T,q),this.taps=0}F.prototype={event:function(T){return T&&(this.sourceEvent=T),this},start:function(){return++this.active===1&&(this.that.__zooming=this,this.emit("start")),this},zoom:function(T,q){return this.mouse&&T!=="mouse"&&(this.mouse[1]=q.invert(this.mouse[0])),this.touch0&&T!=="touch"&&(this.touch0[1]=q.invert(this.touch0[0])),this.touch1&&T!=="touch"&&(this.touch1[1]=q.invert(this.touch1[0])),this.that.__zoom=q,this.emit("zoom"),this},end:function(){return--this.active===0&&(delete this.that.__zooming,this.emit("end")),this},emit:function(T){var q=$n(this.that).datum();g.call(T,this.that,new o2(T,{sourceEvent:this.sourceEvent,target:k,transform:this.that.__zoom,dispatch:g}),q)}};function P(T,...q){if(!n.apply(this,arguments))return;var Q=N(this,q).event(T),Y=this.__zoom,W=Math.max(c[0],Math.min(c[1],Y.k*Math.pow(2,l.apply(this,arguments)))),V=Vn(T);if(Q.wheel)(Q.mouse[0][0]!==V[0]||Q.mouse[0][1]!==V[1])&&(Q.mouse[1]=Y.invert(Q.mouse[0]=V)),clearTimeout(Q.wheel);else{if(Y.k===W)return;Q.mouse=[V,Y.invert(V)],Jl(this),Q.start()}eo(T),Q.wheel=setTimeout(X,w),Q.zoom("mouse",o(S($(Y,W),Q.mouse[0],Q.mouse[1]),Q.extent,u));function X(){Q.wheel=null,Q.end()}}function A(T,...q){if(v||!n.apply(this,arguments))return;var Q=T.currentTarget,Y=N(this,q,!0).event(T),W=$n(T.view).on("mousemove.zoom",z,!0).on("mouseup.zoom",j,!0),V=Vn(T,Q),X=T.clientX,M=T.clientY;o0(T.view),Eu(T),Y.mouse=[V,this.__zoom.invert(V)],Jl(this),Y.start();function z(U){if(eo(U),!Y.moved){var K=U.clientX-X,ie=U.clientY-M;Y.moved=K*K+ie*ie>C}Y.event(U).zoom("mouse",o(S(Y.that.__zoom,Y.mouse[0]=Vn(U,Q),Y.mouse[1]),Y.extent,u))}function j(U){W.on("mousemove.zoom mouseup.zoom",null),l0(U.view,Y.moved),eo(U),Y.event(U).end()}}function O(T,...q){if(n.apply(this,arguments)){var Q=this.__zoom,Y=Vn(T.changedTouches?T.changedTouches[0]:T,this),W=Q.invert(Y),V=Q.k*(T.shiftKey?.5:2),X=o(S($(Q,V),Y,W),r.apply(this,q),u);eo(T),d>0?$n(this).transition().duration(d).call(R,X,Y,T):$n(this).call(k.transform,X,Y,T)}}function L(T,...q){if(n.apply(this,arguments)){var Q=T.touches,Y=Q.length,W=N(this,q,T.changedTouches.length===Y).event(T),V,X,M,z;for(Eu(T),X=0;X<Y;++X)M=Q[X],z=Vn(M,this),z=[z,this.__zoom.invert(z),M.identifier],W.touch0?!W.touch1&&W.touch0[2]!==z[2]&&(W.touch1=z,W.taps=0):(W.touch0=z,V=!0,W.taps=1+!!m);m&&(m=clearTimeout(m)),V&&(W.taps<2&&(h=z[0],m=setTimeout(function(){m=null},x)),Jl(this),W.start())}}function D(T,...q){if(this.__zooming){var Q=N(this,q).event(T),Y=T.changedTouches,W=Y.length,V,X,M,z;for(eo(T),V=0;V<W;++V)X=Y[V],M=Vn(X,this),Q.touch0&&Q.touch0[2]===X.identifier?Q.touch0[0]=M:Q.touch1&&Q.touch1[2]===X.identifier&&(Q.touch1[0]=M);if(X=Q.that.__zoom,Q.touch1){var j=Q.touch0[0],U=Q.touch0[1],K=Q.touch1[0],ie=Q.touch1[1],le=(le=K[0]-j[0])*le+(le=K[1]-j[1])*le,Z=(Z=ie[0]-U[0])*Z+(Z=ie[1]-U[1])*Z;X=$(X,Math.sqrt(le/Z)),M=[(j[0]+K[0])/2,(j[1]+K[1])/2],z=[(U[0]+ie[0])/2,(U[1]+ie[1])/2]}else if(Q.touch0)M=Q.touch0[0],z=Q.touch0[1];else return;Q.zoom("touch",o(S(X,M,z),Q.extent,u))}}function J(T,...q){if(this.__zooming){var Q=N(this,q).event(T),Y=T.changedTouches,W=Y.length,V,X;for(Eu(T),v&&clearTimeout(v),v=setTimeout(function(){v=null},x),V=0;V<W;++V)X=Y[V],Q.touch0&&Q.touch0[2]===X.identifier?delete Q.touch0:Q.touch1&&Q.touch1[2]===X.identifier&&delete Q.touch1;if(Q.touch1&&!Q.touch0&&(Q.touch0=Q.touch1,delete Q.touch1),Q.touch0)Q.touch0[1]=this.__zoom.invert(Q.touch0[0]);else if(Q.end(),Q.taps===2&&(X=Vn(X,this),Math.hypot(h[0]-X[0],h[1]-X[1])<_)){var M=$n(this).on("dblclick.zoom");M&&M.apply(this,arguments)}}}return k.wheelDelta=function(T){return arguments.length?(l=typeof T=="function"?T:Wl(+T),k):l},k.filter=function(T){return arguments.length?(n=typeof T=="function"?T:Wl(!!T),k):n},k.touchable=function(T){return arguments.length?(a=typeof T=="function"?T:Wl(!!T),k):a},k.extent=function(T){return arguments.length?(r=typeof T=="function"?T:Wl([[+T[0][0],+T[0][1]],[+T[1][0],+T[1][1]]]),k):r},k.scaleExtent=function(T){return arguments.length?(c[0]=+T[0],c[1]=+T[1],k):[c[0],c[1]]},k.translateExtent=function(T){return arguments.length?(u[0][0]=+T[0][0],u[1][0]=+T[1][0],u[0][1]=+T[0][1],u[1][1]=+T[1][1],k):[[u[0][0],u[0][1]],[u[1][0],u[1][1]]]},k.constrain=function(T){return arguments.length?(o=T,k):o},k.duration=function(T){return arguments.length?(d=+T,k):d},k.interpolate=function(T){return arguments.length?(f=T,k):f},k.on=function(){var T=g.on.apply(g,arguments);return T===g?k:T},k.clickDistance=function(T){return arguments.length?(C=(T=+T)*T,k):Math.sqrt(C)},k.tapDistance=function(T){return arguments.length?(_=+T,k):_},k}const Gn={error001:(n="react")=>`Seems like you have not used zustand provider as an ancestor. Help: https://${n}flow.dev/error#001`,error002:()=>"It looks like you've created a new nodeTypes or edgeTypes object. If this wasn't on purpose please define the nodeTypes/edgeTypes outside of the component or memoize them.",error003:n=>`Node type "${n}" not found. Using fallback type "default".`,error004:()=>"The parent container needs a width and a height to render the graph.",error005:()=>"Only child nodes can use a parent extent.",error006:()=>"Can't create edge. An edge needs a source and a target.",error007:n=>`The old edge with id=${n} does not exist.`,error009:n=>`Marker type "${n}" doesn't exist.`,error008:(n,{id:r,sourceHandle:o,targetHandle:l})=>`Couldn't create edge for ${n} handle id: "${n==="source"?o:l}", edge id: ${r}.`,error010:()=>"Handle: No node id found. Make sure to only use a Handle inside a custom Node.",error011:n=>`Edge type "${n}" not found. Using fallback type "default".`,error012:n=>`Node with id "${n}" does not exist, it may have been removed. This can happen when a node is deleted before the "onNodeClick" handler is called.`,error013:(n="react")=>`It seems that you haven't loaded the styles. Please import '@xyflow/${n}/dist/style.css' or base.css to make sure everything is working properly.`,error014:()=>"useNodeConnections: No node ID found. Call useNodeConnections inside a custom Node or provide a node ID.",error015:()=>"It seems that you are trying to drag a node that is not initialized. Please use onNodesChange as explained in the docs.",error016:n=>`Edge with id "${n}" does not exist, it may have been removed. This can happen when an edge is deleted before the "onEdgeClick" handler is called.`},uo=[[Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY],[Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY]],k0=["Enter"," ","Escape"],E0={"node.a11yDescription.default":"Press enter or space to select a node. Press delete to remove it and escape to cancel.","node.a11yDescription.keyboardDisabled":"Press enter or space to select a node. You can then use the arrow keys to move the node around. Press delete to remove it and escape to cancel.","node.a11yDescription.ariaLiveMessage":({direction:n,x:r,y:o})=>`Moved selected node ${n}. New position, x: ${r}, y: ${o}`,"edge.a11yDescription.default":"Press enter or space to select an edge. You can then press delete to remove it or escape to cancel.","controls.ariaLabel":"Control Panel","controls.zoomIn.ariaLabel":"Zoom In","controls.zoomOut.ariaLabel":"Zoom Out","controls.fitView.ariaLabel":"Fit View","controls.interactive.ariaLabel":"Toggle Interactivity","minimap.ariaLabel":"Mini Map","handle.ariaLabel":"Handle"};var ti;(function(n){n.Strict="strict",n.Loose="loose"})(ti||(ti={}));var pr;(function(n){n.Free="free",n.Vertical="vertical",n.Horizontal="horizontal"})(pr||(pr={}));var co;(function(n){n.Partial="partial",n.Full="full"})(co||(co={}));const C0={inProgress:!1,isValid:null,from:null,fromHandle:null,fromPosition:null,fromNode:null,to:null,toHandle:null,toPosition:null,toNode:null,pointer:null};var Wt;(function(n){n.Bezier="default",n.Straight="straight",n.Step="step",n.SmoothStep="smoothstep",n.SimpleBezier="simplebezier"})(Wt||(Wt={}));var aa;(function(n){n.Arrow="arrow",n.ArrowClosed="arrowclosed"})(aa||(aa={}));var we;(function(n){n.Left="left",n.Top="top",n.Right="right",n.Bottom="bottom"})(we||(we={}));const rp={[we.Left]:we.Right,[we.Right]:we.Left,[we.Top]:we.Bottom,[we.Bottom]:we.Top};function b0(n){return n===null?null:n?"valid":"invalid"}const $0=n=>"id"in n&&"source"in n&&"target"in n,d2=n=>"id"in n&&"position"in n&&!("source"in n)&&!("target"in n),Xc=n=>"id"in n&&"internals"in n&&!("source"in n)&&!("target"in n),vo=(n,r=[0,0])=>{const{width:o,height:l}=wt(n),a=n.origin??r,c=o*a[0],u=l*a[1];return{x:n.position.x-c,y:n.position.y-u}},f2=(n,r={nodeOrigin:[0,0]})=>{if(n.length===0)return{x:0,y:0,width:0,height:0};const o=n.reduce((l,a)=>{const c=typeof a=="string";let u=!r.nodeLookup&&!c?a:void 0;r.nodeLookup&&(u=c?r.nodeLookup.get(a):Xc(a)?a:r.nodeLookup.get(a.id));const d=u?sa(u,r.nodeOrigin):{x:0,y:0,x2:0,y2:0};return ga(l,d)},{x:1/0,y:1/0,x2:-1/0,y2:-1/0});return ya(o)},xo=(n,r={})=>{let o={x:1/0,y:1/0,x2:-1/0,y2:-1/0},l=!1;return n.forEach(a=>{(r.filter===void 0||r.filter(a))&&(o=ga(o,sa(a)),l=!0)}),l?ya(o):{x:0,y:0,width:0,height:0}},Kc=(n,r,[o,l,a]=[0,0,1],c=!1,u=!1)=>{const d={...si(r,[o,l,a]),width:r.width/a,height:r.height/a},f=[];for(const g of n.values()){const{measured:m,selectable:h=!0,hidden:v=!1}=g;if(u&&!h||v)continue;const x=m.width??g.width??g.initialWidth??null,w=m.height??g.height??g.initialHeight??null,C=fo(d,ii(g)),_=(x??0)*(w??0),k=c&&C>0;(!g.internals.handleBounds||k||C>=_||g.dragging)&&f.push(g)}return f},h2=(n,r)=>{const o=new Set;return n.forEach(l=>{o.add(l.id)}),r.filter(l=>o.has(l.source)||o.has(l.target))};function p2(n,r){const o=new Map,l=r!=null&&r.nodes?new Set(r.nodes.map(a=>a.id)):null;return n.forEach(a=>{a.measured.width&&a.measured.height&&((r==null?void 0:r.includeHiddenNodes)||!a.hidden)&&(!l||l.has(a.id))&&o.set(a.id,a)}),o}async function m2({nodes:n,width:r,height:o,panZoom:l,minZoom:a,maxZoom:c},u){if(n.size===0)return!0;const d=p2(n,u),f=xo(d),g=Jc(f,r,o,(u==null?void 0:u.minZoom)??a,(u==null?void 0:u.maxZoom)??c,(u==null?void 0:u.padding)??.1);return await l.setViewport(g,{duration:u==null?void 0:u.duration,ease:u==null?void 0:u.ease,interpolate:u==null?void 0:u.interpolate}),!0}function N0({nodeId:n,nextPosition:r,nodeLookup:o,nodeOrigin:l=[0,0],nodeExtent:a,onError:c}){const u=o.get(n),d=u.parentId?o.get(u.parentId):void 0,{x:f,y:g}=d?d.internals.positionAbsolute:{x:0,y:0},m=u.origin??l;let h=u.extent||a;if(u.extent==="parent"&&!u.expandParent)if(!d)c==null||c("005",Gn.error005());else{const x=d.measured.width,w=d.measured.height;x&&w&&(h=[[f,g],[f+x,g+w]])}else d&&vr(u.extent)&&(h=[[u.extent[0][0]+f,u.extent[0][1]+g],[u.extent[1][0]+f,u.extent[1][1]+g]]);const v=vr(h)?yr(r,h,u.measured):r;return(u.measured.width===void 0||u.measured.height===void 0)&&(c==null||c("015",Gn.error015())),{position:{x:v.x-f+(u.measured.width??0)*m[0],y:v.y-g+(u.measured.height??0)*m[1]},positionAbsolute:v}}async function g2({nodesToRemove:n=[],edgesToRemove:r=[],nodes:o,edges:l,onBeforeDelete:a}){const c=new Set(n.map(v=>v.id)),u=[];for(const v of o){if(v.deletable===!1)continue;const x=c.has(v.id),w=!x&&v.parentId&&u.find(C=>C.id===v.parentId);(x||w)&&u.push(v)}const d=new Set(r.map(v=>v.id)),f=l.filter(v=>v.deletable!==!1),m=h2(u,f);for(const v of f)d.has(v.id)&&!m.find(w=>w.id===v.id)&&m.push(v);if(!a)return{edges:m,nodes:u};const h=await a({nodes:u,edges:m});return typeof h=="boolean"?h?{edges:m,nodes:u}:{edges:[],nodes:[]}:h}const ri=(n,r=0,o=1)=>Math.min(Math.max(n,r),o),yr=(n={x:0,y:0},r,o)=>({x:ri(n.x,r[0][0],r[1][0]-((o==null?void 0:o.width)??0)),y:ri(n.y,r[0][1],r[1][1]-((o==null?void 0:o.height)??0))});function P0(n,r,o){const{width:l,height:a}=wt(o),{x:c,y:u}=o.internals.positionAbsolute;return yr(n,[[c,u],[c+l,u+a]],r)}const ip=(n,r,o)=>n<r?ri(Math.abs(n-r),1,r)/r:n>o?-ri(Math.abs(n-o),1,r)/r:0,Zc=(n,r,o=15,l=40)=>{const a=ip(n.x,l,r.width-l)*o,c=ip(n.y,l,r.height-l)*o;return[a,c]},ga=(n,r)=>({x:Math.min(n.x,r.x),y:Math.min(n.y,r.y),x2:Math.max(n.x2,r.x2),y2:Math.max(n.y2,r.y2)}),Ic=({x:n,y:r,width:o,height:l})=>({x:n,y:r,x2:n+o,y2:r+l}),ya=({x:n,y:r,x2:o,y2:l})=>({x:n,y:r,width:o-n,height:l-r}),ii=(n,r=[0,0])=>{var a,c;const{x:o,y:l}=Xc(n)?n.internals.positionAbsolute:vo(n,r);return{x:o,y:l,width:((a=n.measured)==null?void 0:a.width)??n.width??n.initialWidth??0,height:((c=n.measured)==null?void 0:c.height)??n.height??n.initialHeight??0}},sa=(n,r=[0,0])=>{var a,c;const{x:o,y:l}=Xc(n)?n.internals.positionAbsolute:vo(n,r);return{x:o,y:l,x2:o+(((a=n.measured)==null?void 0:a.width)??n.width??n.initialWidth??0),y2:l+(((c=n.measured)==null?void 0:c.height)??n.height??n.initialHeight??0)}},M0=(n,r)=>ya(ga(Ic(n),Ic(r))),fo=(n,r)=>{const o=Math.max(0,Math.min(n.x+n.width,r.x+r.width)-Math.max(n.x,r.x)),l=Math.max(0,Math.min(n.y+n.height,r.y+r.height)-Math.max(n.y,r.y));return Math.ceil(o*l)},op=n=>Un(n.width)&&Un(n.height)&&Un(n.x)&&Un(n.y),Un=n=>!isNaN(n)&&isFinite(n),T0=(n,r)=>(o,l)=>{},wo=(n,r=[1,1])=>({x:r[0]*Math.round(n.x/r[0]),y:r[1]*Math.round(n.y/r[1])}),si=({x:n,y:r},[o,l,a],c=!1,u=[1,1])=>{const d={x:(n-o)/a,y:(r-l)/a};return c?wo(d,u):d},oi=({x:n,y:r},[o,l,a])=>({x:n*a+o,y:r*a+l});function Yr(n,r){if(typeof n=="number")return Math.floor((r-r/(1+n))*.5);if(typeof n=="string"&&n.endsWith("px")){const o=parseFloat(n);if(!Number.isNaN(o))return Math.floor(o)}if(typeof n=="string"&&n.endsWith("%")){const o=parseFloat(n);if(!Number.isNaN(o))return Math.floor(r*o*.01)}return console.error(`The padding value "${n}" is invalid. Please provide a number or a string with a valid unit (px or %).`),0}function y2(n,r,o){if(typeof n=="string"||typeof n=="number"){const l=Yr(n,o),a=Yr(n,r);return{top:l,right:a,bottom:l,left:a,x:a*2,y:l*2}}if(typeof n=="object"){const l=Yr(n.top??n.y??0,o),a=Yr(n.bottom??n.y??0,o),c=Yr(n.left??n.x??0,r),u=Yr(n.right??n.x??0,r);return{top:l,right:u,bottom:a,left:c,x:c+u,y:l+a}}return{top:0,right:0,bottom:0,left:0,x:0,y:0}}function v2(n,r,o,l,a,c){const{x:u,y:d}=oi(n,[r,o,l]),{x:f,y:g}=oi({x:n.x+n.width,y:n.y+n.height},[r,o,l]),m=a-f,h=c-g;return{left:Math.floor(u),top:Math.floor(d),right:Math.floor(m),bottom:Math.floor(h)}}const Jc=(n,r,o,l,a,c)=>{const u=y2(c,r,o),d=(r-u.x)/n.width,f=(o-u.y)/n.height,g=Math.min(d,f),m=ri(g,l,a),h=n.x+n.width/2,v=n.y+n.height/2,x=r/2-h*m,w=o/2-v*m,C=v2(n,x,w,m,r,o),_={left:Math.min(C.left-u.left,0),top:Math.min(C.top-u.top,0),right:Math.min(C.right-u.right,0),bottom:Math.min(C.bottom-u.bottom,0)};return{x:x-_.left+_.right,y:w-_.top+_.bottom,zoom:m}},ho=()=>{var n;return typeof navigator<"u"&&((n=navigator==null?void 0:navigator.userAgent)==null?void 0:n.indexOf("Mac"))>=0};function vr(n){return n!=null&&n!=="parent"}function wt(n){var r,o;return{width:((r=n.measured)==null?void 0:r.width)??n.width??n.initialWidth??0,height:((o=n.measured)==null?void 0:o.height)??n.height??n.initialHeight??0}}function L0(n){var r,o;return(((r=n.measured)==null?void 0:r.width)??n.width??n.initialWidth)!==void 0&&(((o=n.measured)==null?void 0:o.height)??n.height??n.initialHeight)!==void 0}function A0(n,r={width:0,height:0},o,l,a){const c={...n},u=l.get(o);if(u){const d=u.origin||a;c.x+=u.internals.positionAbsolute.x-(r.width??0)*d[0],c.y+=u.internals.positionAbsolute.y-(r.height??0)*d[1]}return c}function lp(n,r){if(n.size!==r.size)return!1;for(const o of n)if(!r.has(o))return!1;return!0}function x2(){let n,r;return{promise:new Promise((l,a)=>{n=l,r=a}),resolve:n,reject:r}}function w2(n){return{...E0,...n||{}}}function io(n,{snapGrid:r=[0,0],snapToGrid:o=!1,transform:l,containerBounds:a}){const{x:c,y:u}=Qn(n),d=si({x:c-((a==null?void 0:a.left)??0),y:u-((a==null?void 0:a.top)??0)},l),{x:f,y:g}=o?wo(d,r):d;return{xSnapped:f,ySnapped:g,...d}}const ed=n=>({width:n.offsetWidth,height:n.offsetHeight}),R0=n=>{var r;return((r=n==null?void 0:n.getRootNode)==null?void 0:r.call(n))||(window==null?void 0:window.document)},_2=["INPUT","SELECT","TEXTAREA"];function I0(n){var l,a;const r=((a=(l=n.composedPath)==null?void 0:l.call(n))==null?void 0:a[0])||n.target;return(r==null?void 0:r.nodeType)!==1?!1:_2.includes(r.nodeName)||r.hasAttribute("contenteditable")||!!r.closest(".nokey")}const D0=n=>"clientX"in n,Qn=(n,r)=>{var c,u;const o=D0(n),l=o?n.clientX:(c=n.touches)==null?void 0:c[0].clientX,a=o?n.clientY:(u=n.touches)==null?void 0:u[0].clientY;return{x:l-((r==null?void 0:r.left)??0),y:a-((r==null?void 0:r.top)??0)}},ap=(n,r,o,l,a)=>{const c=r.querySelectorAll(`.${n}`);return!c||!c.length?null:Array.from(c).map(u=>{const d=u.getBoundingClientRect();return{id:u.getAttribute("data-handleid"),type:n,nodeId:a,position:u.getAttribute("data-handlepos"),x:(d.left-o.left)/l,y:(d.top-o.top)/l,...ed(u)}})};function F0({sourceX:n,sourceY:r,targetX:o,targetY:l,sourceControlX:a,sourceControlY:c,targetControlX:u,targetControlY:d}){const f=n*.125+a*.375+u*.375+o*.125,g=r*.125+c*.375+d*.375+l*.125,m=Math.abs(f-n),h=Math.abs(g-r);return[f,g,m,h]}function Ul(n,r){return n>=0?.5*n:r*25*Math.sqrt(-n)}function sp({pos:n,x1:r,y1:o,x2:l,y2:a,c}){switch(n){case we.Left:return[r-Ul(r-l,c),o];case we.Right:return[r+Ul(l-r,c),o];case we.Top:return[r,o-Ul(o-a,c)];case we.Bottom:return[r,o+Ul(a-o,c)]}}function j0({sourceX:n,sourceY:r,sourcePosition:o=we.Bottom,targetX:l,targetY:a,targetPosition:c=we.Top,curvature:u=.25}){const[d,f]=sp({pos:o,x1:n,y1:r,x2:l,y2:a,c:u}),[g,m]=sp({pos:c,x1:l,y1:a,x2:n,y2:r,c:u}),[h,v,x,w]=F0({sourceX:n,sourceY:r,targetX:l,targetY:a,sourceControlX:d,sourceControlY:f,targetControlX:g,targetControlY:m});return[`M${n},${r} C${d},${f} ${g},${m} ${l},${a}`,h,v,x,w]}function z0({sourceX:n,sourceY:r,targetX:o,targetY:l}){const a=Math.abs(o-n)/2,c=o<n?o+a:o-a,u=Math.abs(l-r)/2,d=l<r?l+u:l-u;return[c,d,a,u]}function S2({sourceNode:n,targetNode:r,selected:o=!1,zIndex:l=0,elevateOnSelect:a=!1,zIndexMode:c="basic"}){if(c==="manual")return l;const u=a&&o?l+1e3:l,d=Math.max(n.parentId||a&&n.selected?n.internals.z:0,r.parentId||a&&r.selected?r.internals.z:0);return u+d}function k2({sourceNode:n,targetNode:r,width:o,height:l,transform:a}){const c=ga(sa(n),sa(r));c.x===c.x2&&(c.x2+=1),c.y===c.y2&&(c.y2+=1);const u={x:-a[0]/a[2],y:-a[1]/a[2],width:o/a[2],height:l/a[2]};return fo(u,ya(c))>0}const E2=({source:n,sourceHandle:r,target:o,targetHandle:l})=>`xy-edge__${n}${r||""}-${o}${l||""}`,C2=(n,r)=>r.some(o=>o.source===n.source&&o.target===n.target&&(o.sourceHandle===n.sourceHandle||!o.sourceHandle&&!n.sourceHandle)&&(o.targetHandle===n.targetHandle||!o.targetHandle&&!n.targetHandle)),b2=(n,r,o={})=>{var c;if(!n.source||!n.target)return(c=o.onError)==null||c.call(o,"006",Gn.error006()),r;const l=o.getEdgeId||E2;let a;return $0(n)?a={...n}:a={...n,id:l(n)},C2(a,r)?r:(a.sourceHandle===null&&delete a.sourceHandle,a.targetHandle===null&&delete a.targetHandle,r.concat(a))};function O0({sourceX:n,sourceY:r,targetX:o,targetY:l}){const[a,c,u,d]=z0({sourceX:n,sourceY:r,targetX:o,targetY:l});return[`M ${n},${r}L ${o},${l}`,a,c,u,d]}const up={[we.Left]:{x:-1,y:0},[we.Right]:{x:1,y:0},[we.Top]:{x:0,y:-1},[we.Bottom]:{x:0,y:1}},$2=({source:n,sourcePosition:r=we.Bottom,target:o})=>r===we.Left||r===we.Right?n.x<o.x?{x:1,y:0}:{x:-1,y:0}:n.y<o.y?{x:0,y:1}:{x:0,y:-1},cp=(n,r)=>Math.sqrt(Math.pow(r.x-n.x,2)+Math.pow(r.y-n.y,2));function N2({source:n,sourcePosition:r=we.Bottom,target:o,targetPosition:l=we.Top,center:a,offset:c,stepPosition:u}){const d=up[r],f=up[l],g={x:n.x+d.x*c,y:n.y+d.y*c},m={x:o.x+f.x*c,y:o.y+f.y*c},h=$2({source:g,sourcePosition:r,target:m}),v=h.x!==0?"x":"y",x=h[v];let w=[],C,_;const k={x:0,y:0},$={x:0,y:0},[,,S,b]=z0({sourceX:n.x,sourceY:n.y,targetX:o.x,targetY:o.y});if(d[v]*f[v]===-1){v==="x"?(C=a.x??g.x+(m.x-g.x)*u,_=a.y??(g.y+m.y)/2):(C=a.x??(g.x+m.x)/2,_=a.y??g.y+(m.y-g.y)*u);const P=[{x:C,y:g.y},{x:C,y:m.y}],A=[{x:g.x,y:_},{x:m.x,y:_}];d[v]===x?w=v==="x"?P:A:w=v==="x"?A:P}else{const P=[{x:g.x,y:m.y}],A=[{x:m.x,y:g.y}];if(v==="x"?w=d.x===x?A:P:w=d.y===x?P:A,r===l){const T=Math.abs(n[v]-o[v]);if(T<=c){const q=Math.min(c-1,c-T);d[v]===x?k[v]=(g[v]>n[v]?-1:1)*q:$[v]=(m[v]>o[v]?-1:1)*q}}if(r!==l){const T=v==="x"?"y":"x",q=d[v]===f[T],Q=g[T]>m[T],Y=g[T]<m[T];(d[v]===1&&(!q&&Q||q&&Y)||d[v]!==1&&(!q&&Y||q&&Q))&&(w=v==="x"?P:A)}const O={x:g.x+k.x,y:g.y+k.y},L={x:m.x+$.x,y:m.y+$.y},D=Math.max(Math.abs(O.x-w[0].x),Math.abs(L.x-w[0].x)),J=Math.max(Math.abs(O.y-w[0].y),Math.abs(L.y-w[0].y));D>=J?(C=(O.x+L.x)/2,_=w[0].y):(C=w[0].x,_=(O.y+L.y)/2)}const R={x:g.x+k.x,y:g.y+k.y},N={x:m.x+$.x,y:m.y+$.y};return[[n,...R.x!==w[0].x||R.y!==w[0].y?[R]:[],...w,...N.x!==w[w.length-1].x||N.y!==w[w.length-1].y?[N]:[],o],C,_,S,b]}function P2(n,r,o,l){const a=Math.min(cp(n,r)/2,cp(r,o)/2,l),{x:c,y:u}=r;if(n.x===c&&c===o.x||n.y===u&&u===o.y)return`L${c} ${u}`;if(n.y===u){const g=n.x<o.x?-1:1,m=n.y<o.y?1:-1;return`L ${c+a*g},${u}Q ${c},${u} ${c},${u+a*m}`}const d=n.x<o.x?1:-1,f=n.y<o.y?-1:1;return`L ${c},${u+a*f}Q ${c},${u} ${c+a*d},${u}`}function Dc({sourceX:n,sourceY:r,sourcePosition:o=we.Bottom,targetX:l,targetY:a,targetPosition:c=we.Top,borderRadius:u=5,centerX:d,centerY:f,offset:g=20,stepPosition:m=.5}){const[h,v,x,w,C]=N2({source:{x:n,y:r},sourcePosition:o,target:{x:l,y:a},targetPosition:c,center:{x:d,y:f},offset:g,stepPosition:m});let _=`M${h[0].x} ${h[0].y}`;for(let k=1;k<h.length-1;k++)_+=P2(h[k-1],h[k],h[k+1],u);return _+=`L${h[h.length-1].x} ${h[h.length-1].y}`,[_,v,x,w,C]}function dp(n){var r;return n&&!!(n.internals.handleBounds||(r=n.handles)!=null&&r.length)&&!!(n.measured.width||n.width||n.initialWidth)}function M2(n){var h;const{sourceNode:r,targetNode:o}=n;if(!dp(r)||!dp(o))return null;const l=r.internals.handleBounds||fp(r.handles),a=o.internals.handleBounds||fp(o.handles),c=hp((l==null?void 0:l.source)??[],n.sourceHandle),u=hp(n.connectionMode===ti.Strict?(a==null?void 0:a.target)??[]:((a==null?void 0:a.target)??[]).concat((a==null?void 0:a.source)??[]),n.targetHandle);if(!c||!u)return(h=n.onError)==null||h.call(n,"008",Gn.error008(c?"target":"source",{id:n.id,sourceHandle:n.sourceHandle,targetHandle:n.targetHandle})),null;const d=(c==null?void 0:c.position)||we.Bottom,f=(u==null?void 0:u.position)||we.Top,g=xr(r,c,d),m=xr(o,u,f);return{sourceX:g.x,sourceY:g.y,targetX:m.x,targetY:m.y,sourcePosition:d,targetPosition:f}}function fp(n){if(!n)return null;const r=[],o=[];for(const l of n)l.width=l.width??1,l.height=l.height??1,l.type==="source"?r.push(l):l.type==="target"&&o.push(l);return{source:r,target:o}}function xr(n,r,o=we.Left,l=!1){const a=((r==null?void 0:r.x)??0)+n.internals.positionAbsolute.x,c=((r==null?void 0:r.y)??0)+n.internals.positionAbsolute.y,{width:u,height:d}=r??wt(n);if(l)return{x:a+u/2,y:c+d/2};switch((r==null?void 0:r.position)??o){case we.Top:return{x:a+u/2,y:c};case we.Right:return{x:a+u,y:c+d/2};case we.Bottom:return{x:a+u/2,y:c+d};case we.Left:return{x:a,y:c+d/2}}}function hp(n,r){return n&&(r?n.find(o=>o.id===r):n[0])||null}function Fc(n,r){return n?typeof n=="string"?n:`${r?`${r}__`:""}${Object.keys(n).sort().map(l=>`${l}=${n[l]}`).join("&")}`:""}function T2(n,{id:r,defaultColor:o,defaultMarkerStart:l,defaultMarkerEnd:a}){const c=new Set;return n.reduce((u,d)=>([d.markerStart||l,d.markerEnd||a].forEach(f=>{if(f&&typeof f=="object"){const g=Fc(f,r);c.has(g)||(u.push({id:g,color:f.color||o,...f}),c.add(g))}}),u),[]).sort((u,d)=>u.id.localeCompare(d.id))}const H0=1e3,L2=10,nd={nodeOrigin:[0,0],nodeExtent:uo,elevateNodesOnSelect:!0,zIndexMode:"basic",defaults:{}},A2={...nd,checkEquality:!0};function td(n,r){const o={...n};for(const l in r)r[l]!==void 0&&(o[l]=r[l]);return o}function R2(n,r,o){const l=td(nd,o);for(const a of n.values())if(a.parentId)id(a,n,r,l);else{const c=vo(a,l.nodeOrigin),u=vr(a.extent)?a.extent:l.nodeExtent,d=yr(c,u,wt(a));a.internals.positionAbsolute=d}}function I2(n,r){if(!n.handles)return n.measured?r==null?void 0:r.internals.handleBounds:void 0;const o=[],l=[];for(const a of n.handles){const c={id:a.id,width:a.width??1,height:a.height??1,nodeId:n.id,x:a.x,y:a.y,position:a.position,type:a.type};a.type==="source"?o.push(c):a.type==="target"&&l.push(c)}return{source:o,target:l}}function rd(n){return n==="manual"}function jc(n,r,o,l={}){var m,h;const a=td(A2,l),c={i:0},u=new Map(r),d=a!=null&&a.elevateNodesOnSelect&&!rd(a.zIndexMode)?H0:0;let f=n.length>0,g=!1;r.clear(),o.clear();for(const v of n){let x=u.get(v.id);if(a.checkEquality&&v===(x==null?void 0:x.internals.userNode))r.set(v.id,x);else{const w=vo(v,a.nodeOrigin),C=vr(v.extent)?v.extent:a.nodeExtent,_=yr(w,C,wt(v));x={...a.defaults,...v,measured:{width:(m=v.measured)==null?void 0:m.width,height:(h=v.measured)==null?void 0:h.height},internals:{positionAbsolute:_,handleBounds:I2(v,x),z:B0(v,d,a.zIndexMode),userNode:v}},r.set(v.id,x)}(x.measured===void 0||x.measured.width===void 0||x.measured.height===void 0)&&!x.hidden&&(f=!1),v.parentId&&id(x,r,o,l,c),g||(g=v.selected??!1)}return{nodesInitialized:f,hasSelectedNodes:g}}function D2(n,r){if(!n.parentId)return;const o=r.get(n.parentId);o?o.set(n.id,n):r.set(n.parentId,new Map([[n.id,n]]))}function id(n,r,o,l,a){const{elevateNodesOnSelect:c,nodeOrigin:u,nodeExtent:d,zIndexMode:f}=td(nd,l),g=n.parentId,m=r.get(g);if(!m){console.warn(`Parent node ${g} not found. Please make sure that parent nodes are in front of their child nodes in the nodes array.`);return}D2(n,o),a&&!m.parentId&&m.internals.rootParentIndex===void 0&&f==="auto"&&(m.internals.rootParentIndex=++a.i,m.internals.z=m.internals.z+a.i*L2),a&&m.internals.rootParentIndex!==void 0&&(a.i=m.internals.rootParentIndex);const h=c&&!rd(f)?H0:0,{x:v,y:x,z:w}=F2(n,m,u,d,h,f),{positionAbsolute:C}=n.internals,_=v!==C.x||x!==C.y;(_||w!==n.internals.z)&&r.set(n.id,{...n,internals:{...n.internals,positionAbsolute:_?{x:v,y:x}:C,z:w}})}function B0(n,r,o){const l=Un(n.zIndex)?n.zIndex:0;return rd(o)?l:l+(n.selected?r:0)}function F2(n,r,o,l,a,c){const{x:u,y:d}=r.internals.positionAbsolute,f=wt(n),g=vo(n,o),m=vr(n.extent)?yr(g,n.extent,f):g;let h=yr({x:u+m.x,y:d+m.y},l,f);n.extent==="parent"&&(h=P0(h,f,r));const v=B0(n,a,c),x=r.internals.z??0;return{x:h.x,y:h.y,z:x>=v?x+1:v}}function od(n,r,o,l=[0,0]){var u;const a=[],c=new Map;for(const d of n){const f=r.get(d.parentId);if(!f)continue;const g=((u=c.get(d.parentId))==null?void 0:u.expandedRect)??ii(f),m=M0(g,d.rect);c.set(d.parentId,{expandedRect:m,parent:f})}return c.size>0&&c.forEach(({expandedRect:d,parent:f},g)=>{var S;const m=f.internals.positionAbsolute,h=wt(f),v=f.origin??l,x=d.x<m.x?Math.round(Math.abs(m.x-d.x)):0,w=d.y<m.y?Math.round(Math.abs(m.y-d.y)):0,C=Math.max(h.width,Math.round(d.width)),_=Math.max(h.height,Math.round(d.height)),k=(C-h.width)*v[0],$=(_-h.height)*v[1];(x>0||w>0||k||$)&&(a.push({id:g,type:"position",position:{x:f.position.x-x+k,y:f.position.y-w+$}}),(S=o.get(g))==null||S.forEach(b=>{n.some(R=>R.id===b.id)||a.push({id:b.id,type:"position",position:{x:b.position.x+x,y:b.position.y+w}})})),(h.width<d.width||h.height<d.height||x||w)&&a.push({id:g,type:"dimensions",setAttributes:!0,dimensions:{width:C+(x?v[0]*x-k:0),height:_+(w?v[1]*w-$:0)}})}),a}function j2(n,r,o,l,a,c,u){const d=l==null?void 0:l.querySelector(".xyflow__viewport");let f=!1;if(!d)return{changes:[],updatedInternals:f};const g=[],m=window.getComputedStyle(d),{m22:h}=new window.DOMMatrixReadOnly(m.transform),v=[];for(const x of n.values()){const w=r.get(x.id);if(!w)continue;if(w.hidden){r.set(w.id,{...w,internals:{...w.internals,handleBounds:void 0}}),f=!0;continue}const C=ed(x.nodeElement),_=w.measured.width!==C.width||w.measured.height!==C.height;if(!!(C.width&&C.height&&(_||!w.internals.handleBounds||x.force))){const $=x.nodeElement.getBoundingClientRect(),S=vr(w.extent)?w.extent:c;let{positionAbsolute:b}=w.internals;w.parentId&&w.extent==="parent"?b=P0(b,C,r.get(w.parentId)):S&&(b=yr(b,S,C));const R={...w,measured:C,internals:{...w.internals,positionAbsolute:b,handleBounds:{source:ap("source",x.nodeElement,$,h,w.id),target:ap("target",x.nodeElement,$,h,w.id)}}};r.set(w.id,R),w.parentId&&id(R,r,o,{nodeOrigin:a,zIndexMode:u}),f=!0,_&&(g.push({id:w.id,type:"dimensions",dimensions:C}),w.expandParent&&w.parentId&&v.push({id:w.id,parentId:w.parentId,rect:ii(R,a)}))}}if(v.length>0){const x=od(v,r,o,a);g.push(...x)}return{changes:g,updatedInternals:f}}async function z2({delta:n,panZoom:r,transform:o,translateExtent:l,width:a,height:c}){if(!r||!n.x&&!n.y)return!1;const u=await r.setViewportConstrained({x:o[0]+n.x,y:o[1]+n.y,zoom:o[2]},[[0,0],[a,c]],l);return!!u&&(u.x!==o[0]||u.y!==o[1]||u.k!==o[2])}function pp(n,r,o,l,a,c){let u=a;const d=l.get(u)||new Map;l.set(u,d.set(o,r)),u=`${a}-${n}`;const f=l.get(u)||new Map;if(l.set(u,f.set(o,r)),c){u=`${a}-${n}-${c}`;const g=l.get(u)||new Map;l.set(u,g.set(o,r))}}function V0(n,r,o){n.clear(),r.clear();for(const l of o){const{source:a,target:c,sourceHandle:u=null,targetHandle:d=null}=l,f={edgeId:l.id,source:a,target:c,sourceHandle:u,targetHandle:d},g=`${a}-${u}--${c}-${d}`,m=`${c}-${d}--${a}-${u}`;pp("source",f,m,n,a,u),pp("target",f,g,n,c,d),r.set(l.id,l)}}function W0(n,r){if(!n.parentId)return!1;const o=r.get(n.parentId);return o?o.selected?!0:W0(o,r):!1}function mp(n,r,o){var a;let l=n;do{if((a=l==null?void 0:l.matches)!=null&&a.call(l,r))return!0;if(l===o)return!1;l=l==null?void 0:l.parentElement}while(l);return!1}function O2(n,r,o,l){const a=new Map;for(const[c,u]of n)if((u.selected||u.id===l)&&(!u.parentId||!W0(u,n))&&(u.draggable||r&&typeof u.draggable>"u")){const d=n.get(c);d&&a.set(c,{id:c,position:d.position||{x:0,y:0},distance:{x:o.x-d.internals.positionAbsolute.x,y:o.y-d.internals.positionAbsolute.y},extent:d.extent,parentId:d.parentId,origin:d.origin,expandParent:d.expandParent,internals:{positionAbsolute:d.internals.positionAbsolute||{x:0,y:0}},measured:{width:d.measured.width??0,height:d.measured.height??0}})}return a}function Cu({nodeId:n,dragItems:r,nodeLookup:o,dragging:l=!0}){var u,d,f;const a=[];for(const[g,m]of r){const h=(u=o.get(g))==null?void 0:u.internals.userNode;h&&a.push({...h,position:m.position,dragging:l})}if(!n)return[a[0],a];const c=(d=o.get(n))==null?void 0:d.internals.userNode;return[c?{...c,position:((f=r.get(n))==null?void 0:f.position)||c.position,dragging:l}:a[0],a]}function H2({dragItems:n,snapGrid:r,x:o,y:l}){const a=n.values().next().value;if(!a)return null;const c={x:o-a.distance.x,y:l-a.distance.y},u=wo(c,r);return{x:u.x-c.x,y:u.y-c.y}}function B2({onNodeMouseDown:n,getStoreItems:r,onDragStart:o,onDrag:l,onDragStop:a}){let c={x:null,y:null},u=0,d=new Map,f=!1,g={x:0,y:0},m=null,h=!1,v=null,x=!1,w=!1,C=null;function _({noDragClassName:$,handleSelector:S,domNode:b,isSelectable:R,nodeId:N,nodeClickDistance:F=0}){v=$n(b);function P({x:D,y:J}){const{nodeLookup:T,nodeExtent:q,snapGrid:Q,snapToGrid:Y,nodeOrigin:W,onNodeDrag:V,onSelectionDrag:X,onError:M,updateNodePositions:z}=r();c={x:D,y:J};let j=!1;const U=d.size>1,K=U&&q?Ic(xo(d)):null,ie=U&&Y?H2({dragItems:d,snapGrid:Q,x:D,y:J}):null;for(const[le,Z]of d){if(!T.has(le))continue;let oe={x:D-Z.distance.x,y:J-Z.distance.y};Y&&(oe=ie?{x:Math.round(oe.x+ie.x),y:Math.round(oe.y+ie.y)}:wo(oe,Q));let fe=null;if(U&&q&&!Z.extent&&K){const{positionAbsolute:de}=Z.internals,ke=de.x-K.x+q[0][0],be=de.x+Z.measured.width-K.x2+q[1][0],$e=de.y-K.y+q[0][1],Ae=de.y+Z.measured.height-K.y2+q[1][1];fe=[[ke,$e],[be,Ae]]}const{position:xe,positionAbsolute:he}=N0({nodeId:le,nextPosition:oe,nodeLookup:T,nodeExtent:fe||q,nodeOrigin:W,onError:M});j=j||Z.position.x!==xe.x||Z.position.y!==xe.y,Z.position=xe,Z.internals.positionAbsolute=he}if(w=w||j,!!j&&(z(d,!0),C&&(l||V||!N&&X))){const[le,Z]=Cu({nodeId:N,dragItems:d,nodeLookup:T});l==null||l(C,d,le,Z),V==null||V(C,le,Z),N||X==null||X(C,Z)}}async function A(){if(!m)return;const{transform:D,panBy:J,autoPanSpeed:T,autoPanOnNodeDrag:q}=r();if(!q){f=!1,cancelAnimationFrame(u);return}const[Q,Y]=Zc(g,m,T);(Q!==0||Y!==0)&&(c.x=(c.x??0)-Q/D[2],c.y=(c.y??0)-Y/D[2],await J({x:Q,y:Y})&&P(c)),u=requestAnimationFrame(A)}function O(D){var U;const{nodeLookup:J,multiSelectionActive:T,nodesDraggable:q,transform:Q,snapGrid:Y,snapToGrid:W,selectNodesOnDrag:V,onNodeDragStart:X,onSelectionDragStart:M,unselectNodesAndEdges:z}=r();h=!0,(!V||!R)&&!T&&N&&((U=J.get(N))!=null&&U.selected||z()),R&&V&&N&&(n==null||n(N));const j=io(D.sourceEvent,{transform:Q,snapGrid:Y,snapToGrid:W,containerBounds:m});if(c=j,d=O2(J,q,j,N),d.size>0&&(o||X||!N&&M)){const[K,ie]=Cu({nodeId:N,dragItems:d,nodeLookup:J});o==null||o(D.sourceEvent,d,K,ie),X==null||X(D.sourceEvent,K,ie),N||M==null||M(D.sourceEvent,ie)}}const L=a0().clickDistance(F).on("start",D=>{const{domNode:J,nodeDragThreshold:T,transform:q,snapGrid:Q,snapToGrid:Y}=r();m=(J==null?void 0:J.getBoundingClientRect())||null,x=!1,w=!1,C=D.sourceEvent,T===0&&O(D),c=io(D.sourceEvent,{transform:q,snapGrid:Q,snapToGrid:Y,containerBounds:m}),g=Qn(D.sourceEvent,m)}).on("drag",D=>{const{autoPanOnNodeDrag:J,transform:T,snapGrid:q,snapToGrid:Q,nodeDragThreshold:Y,nodeLookup:W}=r(),V=io(D.sourceEvent,{transform:T,snapGrid:q,snapToGrid:Q,containerBounds:m});if(C=D.sourceEvent,(D.sourceEvent.type==="touchmove"&&D.sourceEvent.touches.length>1||N&&!W.has(N))&&(x=!0),!x){if(!f&&J&&h&&(f=!0,A()),!h){const X=Qn(D.sourceEvent,m),M=X.x-g.x,z=X.y-g.y;Math.sqrt(M*M+z*z)>Y&&O(D)}(c.x!==V.xSnapped||c.y!==V.ySnapped)&&d&&h&&(g=Qn(D.sourceEvent,m),P(V))}}).on("end",D=>{if(!h||x){x&&d.size>0&&r().updateNodePositions(d,!1);return}if(f=!1,h=!1,cancelAnimationFrame(u),d.size>0){const{nodeLookup:J,updateNodePositions:T,onNodeDragStop:q,onSelectionDragStop:Q}=r();if(w&&(T(d,!1),w=!1),a||q||!N&&Q){const[Y,W]=Cu({nodeId:N,dragItems:d,nodeLookup:J,dragging:!1});a==null||a(D.sourceEvent,d,Y,W),q==null||q(D.sourceEvent,Y,W),N||Q==null||Q(D.sourceEvent,W)}}}).filter(D=>{const J=D.target;return!D.button&&(!$||!mp(J,`.${$}`,b))&&(!S||mp(J,S,b))});v.call(L)}function k(){v==null||v.on(".drag",null)}return{update:_,destroy:k}}function V2(n,r,o){const l=[],a={x:n.x-o,y:n.y-o,width:o*2,height:o*2};for(const c of r.values())fo(a,ii(c))>0&&l.push(c);return l}const W2=250;function U2(n,r,o,l){var d,f;let a=[],c=1/0;const u=V2(n,o,r+W2);for(const g of u){const m=[...((d=g.internals.handleBounds)==null?void 0:d.source)??[],...((f=g.internals.handleBounds)==null?void 0:f.target)??[]];for(const h of m){if(l.nodeId===h.nodeId&&l.type===h.type&&l.id===h.id)continue;const{x:v,y:x}=xr(g,h,h.position,!0),w=Math.sqrt(Math.pow(v-n.x,2)+Math.pow(x-n.y,2));w>r||(w<c?(a=[{...h,x:v,y:x}],c=w):w===c&&a.push({...h,x:v,y:x}))}}if(!a.length)return null;if(a.length>1){const g=l.type==="source"?"target":"source";return a.find(m=>m.type===g)??a[0]}return a[0]}function U0(n,r,o,l,a,c=!1){var g,m,h;const u=l.get(n);if(!u)return null;const d=a==="strict"?(g=u.internals.handleBounds)==null?void 0:g[r]:[...((m=u.internals.handleBounds)==null?void 0:m.source)??[],...((h=u.internals.handleBounds)==null?void 0:h.target)??[]],f=(o?d==null?void 0:d.find(v=>v.id===o):d==null?void 0:d[0])??null;return f&&c?{...f,...xr(u,f,f.position,!0)}:f}function Q0(n,r){return n||(r!=null&&r.classList.contains("target")?"target":r!=null&&r.classList.contains("source")?"source":null)}function Q2(n,r){let o=null;return r?o=!0:n&&!r&&(o=!1),o}const G0=()=>!0;function G2(n,{connectionMode:r,connectionRadius:o,handleId:l,nodeId:a,edgeUpdaterType:c,isTarget:u,domNode:d,nodeLookup:f,lib:g,autoPanOnConnect:m,flowId:h,panBy:v,cancelConnection:x,onConnectStart:w,onConnect:C,onConnectEnd:_,isValidConnection:k=G0,onReconnectEnd:$,updateConnection:S,getTransform:b,getFromHandle:R,autoPanSpeed:N,dragThreshold:F=1,handleDomNode:P}){const A=R0(n.target);let O=0,L;const{x:D,y:J}=Qn(n),T=Q0(c,P),q=d==null?void 0:d.getBoundingClientRect();let Q=!1;if(!q||!T)return;const Y=U0(a,T,l,f,r);if(!Y)return;let W=Qn(n,q),V=!1,X=null,M=!1,z=null;function j(){if(!m||!q)return;const[xe,he]=Zc(W,q,N);v({x:xe,y:he}),O=requestAnimationFrame(j)}const U={...Y,nodeId:a,type:T,position:Y.position},K=f.get(a);let le={inProgress:!0,isValid:null,from:xr(K,U,we.Left,!0),fromHandle:U,fromPosition:U.position,fromNode:K,to:W,toHandle:null,toPosition:rp[U.position],toNode:null,pointer:W};function Z(){Q=!0,S(le),w==null||w(n,{nodeId:a,handleId:l,handleType:T})}F===0&&Z();function oe(xe){if(!Q){const{x:Ae,y:sn}=Qn(xe),dn=Ae-D,nn=sn-J;if(!(dn*dn+nn*nn>F*F))return;Z()}if(!R()||!U){fe(xe);return}const he=b();W=Qn(xe,q),L=U2(si(W,he,!1,[1,1]),o,f,U),V||(j(),V=!0);const de=q0(xe,{handle:L,connectionMode:r,fromNodeId:a,fromHandleId:l,fromType:u?"target":"source",isValidConnection:k,doc:A,lib:g,flowId:h,nodeLookup:f});z=de.handleDomNode,X=de.connection,M=Q2(!!L,de.isValid);const ke=f.get(a),be=ke?xr(ke,U,we.Left,!0):le.from,$e={...le,from:be,isValid:M,to:de.toHandle&&M?oi({x:de.toHandle.x,y:de.toHandle.y},he):W,toHandle:de.toHandle,toPosition:M&&de.toHandle?de.toHandle.position:rp[U.position],toNode:de.toHandle?f.get(de.toHandle.nodeId):null,pointer:W};S($e),le=$e}function fe(xe){if(!("touches"in xe&&xe.touches.length>0)){if(Q){(L||z)&&X&&M&&(C==null||C(X));const{inProgress:he,...de}=le,ke={...de,toPosition:le.toHandle?le.toPosition:null};_==null||_(xe,ke),c&&($==null||$(xe,ke))}x(),cancelAnimationFrame(O),V=!1,M=!1,X=null,z=null,A.removeEventListener("mousemove",oe),A.removeEventListener("mouseup",fe),A.removeEventListener("touchmove",oe),A.removeEventListener("touchend",fe)}}A.addEventListener("mousemove",oe),A.addEventListener("mouseup",fe),A.addEventListener("touchmove",oe),A.addEventListener("touchend",fe)}function q0(n,{handle:r,connectionMode:o,fromNodeId:l,fromHandleId:a,fromType:c,doc:u,lib:d,flowId:f,isValidConnection:g=G0,nodeLookup:m}){const h=c==="target",v=r?u.querySelector(`.${d}-flow__handle[data-id="${f}-${r==null?void 0:r.nodeId}-${r==null?void 0:r.id}-${r==null?void 0:r.type}"]`):null,{x,y:w}=Qn(n),C=u.elementFromPoint(x,w),_=C!=null&&C.classList.contains(`${d}-flow__handle`)?C:v,k={handleDomNode:_,isValid:!1,connection:null,toHandle:null};if(_){const $=Q0(void 0,_),S=_.getAttribute("data-nodeid"),b=_.getAttribute("data-handleid"),R=_.classList.contains("connectable"),N=_.classList.contains("connectableend");if(!S||!$)return k;const F={source:h?S:l,sourceHandle:h?b:a,target:h?l:S,targetHandle:h?a:b};k.connection=F;const A=R&&N&&(o===ti.Strict?h&&$==="source"||!h&&$==="target":S!==l||b!==a);k.isValid=A&&g(F),k.toHandle=U0(S,$,b,m,o,!0)}return k}const zc={onPointerDown:G2,isValid:q0};function q2({domNode:n,panZoom:r,getTransform:o,getViewScale:l}){const a=$n(n);function c({translateExtent:d,width:f,height:g,zoomStep:m=1,pannable:h=!0,zoomable:v=!0,inversePan:x=!1}){const w=S=>{if(S.sourceEvent.type!=="wheel"||!r)return;const b=o(),R=S.sourceEvent.ctrlKey&&ho()?10:1,N=-S.sourceEvent.deltaY*(S.sourceEvent.deltaMode===1?.05:S.sourceEvent.deltaMode?1:.002)*m,F=b[2]*Math.pow(2,N*R);r.scaleTo(F)};let C=[0,0];const _=S=>{(S.sourceEvent.type==="mousedown"||S.sourceEvent.type==="touchstart")&&(C=[S.sourceEvent.clientX??S.sourceEvent.touches[0].clientX,S.sourceEvent.clientY??S.sourceEvent.touches[0].clientY])},k=S=>{const b=o();if(S.sourceEvent.type!=="mousemove"&&S.sourceEvent.type!=="touchmove"||!r)return;const R=[S.sourceEvent.clientX??S.sourceEvent.touches[0].clientX,S.sourceEvent.clientY??S.sourceEvent.touches[0].clientY],N=[R[0]-C[0],R[1]-C[1]];C=R;const F=l()*Math.max(b[2],Math.log(b[2]))*(x?-1:1),P={x:b[0]-N[0]*F,y:b[1]-N[1]*F},A=[[0,0],[f,g]];r.setViewportConstrained({x:P.x,y:P.y,zoom:b[2]},A,d)},$=S0().on("start",_).on("zoom",h?k:null).on("zoom.wheel",v?w:null);a.call($,{})}function u(){a.on("zoom",null)}return{update:c,destroy:u,pointer:Vn}}const va=n=>({x:n.x,y:n.y,zoom:n.k}),bu=({x:n,y:r,zoom:o})=>ma.translate(n,r).scale(o),Xr=(n,r)=>n.target.closest(`.${r}`),Y0=(n,r)=>r===2&&Array.isArray(n)&&n.includes(2),Y2=n=>((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2,$u=(n,r=0,o=Y2,l=()=>{})=>{const a=typeof r=="number"&&r>0;return a||l(),a?n.transition().duration(r).ease(o).on("end",l):n},X0=n=>{const r=n.ctrlKey&&ho()?10:1;return-n.deltaY*(n.deltaMode===1?.05:n.deltaMode?1:.002)*r};function X2({zoomPanValues:n,noWheelClassName:r,d3Selection:o,d3Zoom:l,panOnScrollMode:a,panOnScrollSpeed:c,zoomOnPinch:u,onPanZoomStart:d,onPanZoom:f,onPanZoomEnd:g}){return m=>{if(Xr(m,r))return m.ctrlKey&&m.preventDefault(),!1;m.preventDefault(),m.stopImmediatePropagation();const h=o.property("__zoom").k||1;if(m.ctrlKey&&u){const _=Vn(m),k=X0(m),$=h*Math.pow(2,k);l.scaleTo(o,$,_,m);return}const v=m.deltaMode===1?20:1;let x=a===pr.Vertical?0:m.deltaX*v,w=a===pr.Horizontal?0:m.deltaY*v;!ho()&&m.shiftKey&&a!==pr.Vertical&&(x=m.deltaY*v,w=0),l.translateBy(o,-(x/h)*c,-(w/h)*c,{internal:!0});const C=va(o.property("__zoom"));clearTimeout(n.panScrollTimeout),n.isPanScrolling?(f==null||f(m,C),n.panScrollTimeout=setTimeout(()=>{g==null||g(m,C),n.isPanScrolling=!1},150)):(n.isPanScrolling=!0,d==null||d(m,C))}}function K2({noWheelClassName:n,preventScrolling:r,d3ZoomHandler:o}){return function(l,a){const c=l.type==="wheel",u=!r&&c&&!l.ctrlKey,d=Xr(l,n);if(l.ctrlKey&&c&&d&&l.preventDefault(),u||d)return null;l.preventDefault(),o.call(this,l,a)}}function Z2({zoomPanValues:n,onDraggingChange:r,onPanZoomStart:o}){return l=>{var c,u,d;if((c=l.sourceEvent)!=null&&c.internal)return;const a=va(l.transform);n.mouseButton=((u=l.sourceEvent)==null?void 0:u.button)||0,n.isZoomingOrPanning=!0,n.prevViewport=a,((d=l.sourceEvent)==null?void 0:d.type)==="mousedown"&&r(!0),o&&(o==null||o(l.sourceEvent,a))}}function J2({zoomPanValues:n,panOnDrag:r,onPaneContextMenu:o,onTransformChange:l,onPanZoom:a}){return c=>{var u,d;n.usedRightMouseButton=!!(o&&Y0(r,n.mouseButton??0)),(u=c.sourceEvent)!=null&&u.sync||l([c.transform.x,c.transform.y,c.transform.k]),a&&!((d=c.sourceEvent)!=null&&d.internal)&&(a==null||a(c.sourceEvent,va(c.transform)))}}function e_({zoomPanValues:n,panOnDrag:r,panOnScroll:o,onDraggingChange:l,onPanZoomEnd:a,onPaneContextMenu:c}){return u=>{var d;if(!((d=u.sourceEvent)!=null&&d.internal)&&(n.isZoomingOrPanning=!1,c&&Y0(r,n.mouseButton??0)&&!n.usedRightMouseButton&&u.sourceEvent&&c(u.sourceEvent),n.usedRightMouseButton=!1,l(!1),a)){const f=va(u.transform);n.prevViewport=f,clearTimeout(n.timerId),n.timerId=setTimeout(()=>{a==null||a(u.sourceEvent,f)},o?150:0)}}}function n_({zoomActivationKeyPressed:n,zoomOnScroll:r,zoomOnPinch:o,panOnDrag:l,panOnScroll:a,zoomOnDoubleClick:c,userSelectionActive:u,noWheelClassName:d,noPanClassName:f,lib:g,connectionInProgress:m}){return h=>{var _;const v=n||r,x=o&&h.ctrlKey,w=h.type==="wheel";if(h.button===1&&h.type==="mousedown"&&(Xr(h,`${g}-flow__node`)||Xr(h,`${g}-flow__edge`)))return!0;if(!l&&!v&&!a&&!c&&!o||u||m&&!w||Xr(h,d)&&w||Xr(h,f)&&(!w||a&&w&&!n)||!o&&h.ctrlKey&&w)return!1;if(!o&&h.type==="touchstart"&&((_=h.touches)==null?void 0:_.length)>1)return h.preventDefault(),!1;if(!v&&!a&&!x&&w||!l&&(h.type==="mousedown"||h.type==="touchstart")||Array.isArray(l)&&!l.includes(h.button)&&h.type==="mousedown")return!1;const C=Array.isArray(l)&&l.includes(h.button)||!h.button||h.button<=1;return(!h.ctrlKey||w)&&C}}function t_({domNode:n,minZoom:r,maxZoom:o,translateExtent:l,viewport:a,onPanZoom:c,onPanZoomStart:u,onPanZoomEnd:d,onDraggingChange:f}){const g={isZoomingOrPanning:!1,usedRightMouseButton:!1,prevViewport:{},mouseButton:0,timerId:void 0,panScrollTimeout:void 0,isPanScrolling:!1},m=n.getBoundingClientRect(),h=S0().scaleExtent([r,o]).translateExtent(l),v=$n(n).call(h);$({x:a.x,y:a.y,zoom:ri(a.zoom,r,o)},[[0,0],[m.width,m.height]],l);const x=v.on("wheel.zoom"),w=v.on("dblclick.zoom");h.wheelDelta(X0);async function C(L,D){return v?new Promise(J=>{h==null||h.interpolate((D==null?void 0:D.interpolate)==="linear"?ro:Xl).transform($u(v,D==null?void 0:D.duration,D==null?void 0:D.ease,()=>J(!0)),L)}):!1}function _({noWheelClassName:L,noPanClassName:D,onPaneContextMenu:J,userSelectionActive:T,panOnScroll:q,panOnDrag:Q,panOnScrollMode:Y,panOnScrollSpeed:W,preventScrolling:V,zoomOnPinch:X,zoomOnScroll:M,zoomOnDoubleClick:z,zoomActivationKeyPressed:j,lib:U,onTransformChange:K,connectionInProgress:ie,paneClickDistance:le,selectionOnDrag:Z}){T&&!g.isZoomingOrPanning&&k();const oe=q&&!j&&!T;h.clickDistance(Z?1/0:!Un(le)||le<0?0:le);const fe=oe?X2({zoomPanValues:g,noWheelClassName:L,d3Selection:v,d3Zoom:h,panOnScrollMode:Y,panOnScrollSpeed:W,zoomOnPinch:X,onPanZoomStart:u,onPanZoom:c,onPanZoomEnd:d}):K2({noWheelClassName:L,preventScrolling:V,d3ZoomHandler:x});v.on("wheel.zoom",fe,{passive:!1});const xe=Z2({zoomPanValues:g,onDraggingChange:f,onPanZoomStart:u});h.on("start",xe);const he=J2({zoomPanValues:g,panOnDrag:Q,onPaneContextMenu:!!J,onPanZoom:c,onTransformChange:K});h.on("zoom",he);const de=e_({zoomPanValues:g,panOnDrag:Q,panOnScroll:q,onPaneContextMenu:J,onPanZoomEnd:d,onDraggingChange:f});h.on("end",de);const ke=n_({zoomActivationKeyPressed:j,panOnDrag:Q,zoomOnScroll:M,panOnScroll:q,zoomOnDoubleClick:z,zoomOnPinch:X,userSelectionActive:T,noPanClassName:D,noWheelClassName:L,lib:U,connectionInProgress:ie});h.filter(ke),z?v.on("dblclick.zoom",w):v.on("dblclick.zoom",null)}function k(){h.on("zoom",null)}async function $(L,D,J){const T=bu(L),q=h==null?void 0:h.constrain()(T,D,J);return q&&await C(q),q}async function S(L,D){const J=bu(L);return await C(J,D),J}function b(L){if(v){const D=bu(L),J=v.property("__zoom");(J.k!==L.zoom||J.x!==L.x||J.y!==L.y)&&(h==null||h.transform(v,D,null,{sync:!0}))}}function R(){const L=v?_0(v.node()):{x:0,y:0,k:1};return{x:L.x,y:L.y,zoom:L.k}}async function N(L,D){return v?new Promise(J=>{h==null||h.interpolate((D==null?void 0:D.interpolate)==="linear"?ro:Xl).scaleTo($u(v,D==null?void 0:D.duration,D==null?void 0:D.ease,()=>J(!0)),L)}):!1}async function F(L,D){return v?new Promise(J=>{h==null||h.interpolate((D==null?void 0:D.interpolate)==="linear"?ro:Xl).scaleBy($u(v,D==null?void 0:D.duration,D==null?void 0:D.ease,()=>J(!0)),L)}):!1}function P(L){h==null||h.scaleExtent(L)}function A(L){h==null||h.translateExtent(L)}function O(L){const D=!Un(L)||L<0?0:L;h==null||h.clickDistance(D)}return{update:_,destroy:k,setViewport:S,setViewportConstrained:$,getViewport:R,scaleTo:N,scaleBy:F,setScaleExtent:P,setTranslateExtent:A,syncViewport:b,setClickDistance:O}}var li;(function(n){n.Line="line",n.Handle="handle"})(li||(li={}));function r_({width:n,prevWidth:r,height:o,prevHeight:l,affectsX:a,affectsY:c}){const u=n-r,d=o-l,f=[u>0?1:u<0?-1:0,d>0?1:d<0?-1:0];return u&&a&&(f[0]=f[0]*-1),d&&c&&(f[1]=f[1]*-1),f}function gp(n){const r=n.includes("right")||n.includes("left"),o=n.includes("bottom")||n.includes("top"),l=n.includes("left"),a=n.includes("top");return{isHorizontal:r,isVertical:o,affectsX:l,affectsY:a}}function Bt(n,r){return Math.max(0,r-n)}function Vt(n,r){return Math.max(0,n-r)}function Ql(n,r,o){return Math.max(0,r-n,n-o)}function yp(n,r){return n?!r:r}function i_(n,r,o,l,a,c,u,d){let{affectsX:f,affectsY:g}=r;const{isHorizontal:m,isVertical:h}=r,v=m&&h,{xSnapped:x,ySnapped:w}=o,{minWidth:C,maxWidth:_,minHeight:k,maxHeight:$}=l,{x:S,y:b,width:R,height:N,aspectRatio:F}=n;let P=Math.floor(m?x-n.pointerX:0),A=Math.floor(h?w-n.pointerY:0);const O=R+(f?-P:P),L=N+(g?-A:A),D=-c[0]*R,J=-c[1]*N;let T=Ql(O,C,_),q=Ql(L,k,$);if(u){let W=0,V=0;f&&P<0?W=Bt(S+P+D,u[0][0]):!f&&P>0&&(W=Vt(S+O+D,u[1][0])),g&&A<0?V=Bt(b+A+J,u[0][1]):!g&&A>0&&(V=Vt(b+L+J,u[1][1])),T=Math.max(T,W),q=Math.max(q,V)}if(d){let W=0,V=0;f&&P>0?W=Vt(S+P,d[0][0]):!f&&P<0&&(W=Bt(S+O,d[1][0])),g&&A>0?V=Vt(b+A,d[0][1]):!g&&A<0&&(V=Bt(b+L,d[1][1])),T=Math.max(T,W),q=Math.max(q,V)}if(a){if(m){const W=Ql(O/F,k,$)*F;if(T=Math.max(T,W),u){let V=0;!f&&!g||f&&!g&&v?V=Vt(b+J+O/F,u[1][1])*F:V=Bt(b+J+(f?P:-P)/F,u[0][1])*F,T=Math.max(T,V)}if(d){let V=0;!f&&!g||f&&!g&&v?V=Bt(b+O/F,d[1][1])*F:V=Vt(b+(f?P:-P)/F,d[0][1])*F,T=Math.max(T,V)}}if(h){const W=Ql(L*F,C,_)/F;if(q=Math.max(q,W),u){let V=0;!f&&!g||g&&!f&&v?V=Vt(S+L*F+D,u[1][0])/F:V=Bt(S+(g?A:-A)*F+D,u[0][0])/F,q=Math.max(q,V)}if(d){let V=0;!f&&!g||g&&!f&&v?V=Bt(S+L*F,d[1][0])/F:V=Vt(S+(g?A:-A)*F,d[0][0])/F,q=Math.max(q,V)}}}A=A+(A<0?q:-q),P=P+(P<0?T:-T),a&&(v?O>L*F?A=(yp(f,g)?-P:P)/F:P=(yp(f,g)?-A:A)*F:m?(A=P/F,g=f):(P=A*F,f=g));const Q=f?S+P:S,Y=g?b+A:b;return{width:R+(f?-P:P),height:N+(g?-A:A),x:c[0]*P*(f?-1:1)+Q,y:c[1]*A*(g?-1:1)+Y}}const K0={width:0,height:0,x:0,y:0},o_={...K0,pointerX:0,pointerY:0,aspectRatio:1};function l_(n,r,o){const l=r.position.x+n.position.x,a=r.position.y+n.position.y,c=n.measured.width??0,u=n.measured.height??0,d=o[0]*c,f=o[1]*u;return[[l-d,a-f],[l+c-d,a+u-f]]}function a_({domNode:n,nodeId:r,getStoreItems:o,onChange:l,onEnd:a}){const c=$n(n);let u={controlDirection:gp("bottom-right"),boundaries:{minWidth:0,minHeight:0,maxWidth:Number.MAX_VALUE,maxHeight:Number.MAX_VALUE},resizeDirection:void 0,keepAspectRatio:!1};function d({controlPosition:g,boundaries:m,keepAspectRatio:h,resizeDirection:v,onResizeStart:x,onResize:w,onResizeEnd:C,shouldResize:_}){let k={...K0},$={...o_};u={boundaries:m,resizeDirection:v,keepAspectRatio:h,controlDirection:gp(g)};let S,b=null,R=[],N,F,P,A=!1;const O=a0().on("start",L=>{const{nodeLookup:D,transform:J,snapGrid:T,snapToGrid:q,nodeOrigin:Q,paneDomNode:Y}=o();if(S=D.get(r),!S)return;b=(Y==null?void 0:Y.getBoundingClientRect())??null;const{xSnapped:W,ySnapped:V}=io(L.sourceEvent,{transform:J,snapGrid:T,snapToGrid:q,containerBounds:b});k={width:S.measured.width??0,height:S.measured.height??0,x:S.position.x??0,y:S.position.y??0},$={...k,pointerX:W,pointerY:V,aspectRatio:k.width/k.height},N=void 0,F=vr(S.extent)?S.extent:void 0,S.parentId&&(S.extent==="parent"||S.expandParent)&&(N=D.get(S.parentId)),N&&S.extent==="parent"&&(F=[[0,0],[N.measured.width,N.measured.height]]),R=[],P=void 0;for(const[X,M]of D)if(M.parentId===r&&(R.push({id:X,position:{...M.position},extent:M.extent}),M.extent==="parent"||M.expandParent)){const z=l_(M,S,M.origin??Q);P?P=[[Math.min(z[0][0],P[0][0]),Math.min(z[0][1],P[0][1])],[Math.max(z[1][0],P[1][0]),Math.max(z[1][1],P[1][1])]]:P=z}x==null||x(L,{...k})}).on("drag",L=>{const{transform:D,snapGrid:J,snapToGrid:T,nodeOrigin:q}=o(),Q=io(L.sourceEvent,{transform:D,snapGrid:J,snapToGrid:T,containerBounds:b}),Y=[];if(!S)return;const{x:W,y:V,width:X,height:M}=k,z={},j=S.origin??q,{width:U,height:K,x:ie,y:le}=i_($,u.controlDirection,Q,u.boundaries,u.keepAspectRatio,j,F,P),Z=U!==X,oe=K!==M,fe=ie!==W&&Z,xe=le!==V&&oe;if(!fe&&!xe&&!Z&&!oe)return;if((fe||xe||j[0]===1||j[1]===1)&&(z.x=fe?ie:k.x,z.y=xe?le:k.y,k.x=z.x,k.y=z.y,R.length>0)){const be=ie-W,$e=le-V;for(const Ae of R)Ae.position={x:Ae.position.x-be+j[0]*(U-X),y:Ae.position.y-$e+j[1]*(K-M)},Y.push(Ae)}if((Z||oe)&&(z.width=Z&&(!u.resizeDirection||u.resizeDirection==="horizontal")?U:k.width,z.height=oe&&(!u.resizeDirection||u.resizeDirection==="vertical")?K:k.height,k.width=z.width,k.height=z.height),N&&S.expandParent){const be=j[0]*(z.width??0);z.x&&z.x<be&&(k.x=be,$.x=$.x-(z.x-be));const $e=j[1]*(z.height??0);z.y&&z.y<$e&&(k.y=$e,$.y=$.y-(z.y-$e))}const he=r_({width:k.width,prevWidth:X,height:k.height,prevHeight:M,affectsX:u.controlDirection.affectsX,affectsY:u.controlDirection.affectsY}),de={...k,direction:he};(_==null?void 0:_(L,de))!==!1&&(A=!0,w==null||w(L,de),l(z,Y))}).on("end",L=>{A&&(C==null||C(L,{...k}),a==null||a({...k}),A=!1)});c.call(O)}function f(){c.on(".drag",null)}return{update:d,destroy:f}}var Nu={exports:{}},Pu={},Mu={exports:{}},Tu={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function s_(){if(vp)return Tu;vp=1;var n=mo();function r(h,v){return h===v&&(h!==0||1/h===1/v)||h!==h&&v!==v}var o=typeof Object.is=="function"?Object.is:r,l=n.useState,a=n.useEffect,c=n.useLayoutEffect,u=n.useDebugValue;function d(h,v){var x=v(),w=l({inst:{value:x,getSnapshot:v}}),C=w[0].inst,_=w[1];return c(function(){C.value=x,C.getSnapshot=v,f(C)&&_({inst:C})},[h,x,v]),a(function(){return f(C)&&_({inst:C}),h(function(){f(C)&&_({inst:C})})},[h]),u(x),x}function f(h){var v=h.getSnapshot;h=h.value;try{var x=v();return!o(h,x)}catch{return!0}}function g(h,v){return v()}var m=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?g:d;return Tu.useSyncExternalStore=n.useSyncExternalStore!==void 0?n.useSyncExternalStore:m,Tu}var xp;function u_(){return xp||(xp=1,Mu.exports=s_()),Mu.exports}/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp;function c_(){if(wp)return Pu;wp=1;var n=mo(),r=u_();function o(g,m){return g===m&&(g!==0||1/g===1/m)||g!==g&&m!==m}var l=typeof Object.is=="function"?Object.is:o,a=r.useSyncExternalStore,c=n.useRef,u=n.useEffect,d=n.useMemo,f=n.useDebugValue;return Pu.useSyncExternalStoreWithSelector=function(g,m,h,v,x){var w=c(null);if(w.current===null){var C={hasValue:!1,value:null};w.current=C}else C=w.current;w=d(function(){function k(N){if(!$){if($=!0,S=N,N=v(N),x!==void 0&&C.hasValue){var F=C.value;if(x(F,N))return b=F}return b=N}if(F=b,l(S,N))return F;var P=v(N);return x!==void 0&&x(F,P)?(S=N,F):(S=N,b=P)}var $=!1,S,b,R=h===void 0?null:h;return[function(){return k(m())},R===null?void 0:function(){return k(R())}]},[m,h,v,x]);var _=a(g,w[0],w[1]);return u(function(){C.hasValue=!0,C.value=_},[_]),f(_),_},Pu}var _p;function d_(){return _p||(_p=1,Nu.exports=c_()),Nu.exports}var f_=d_();const h_=Bc(f_),p_={},Sp=n=>{let r;const o=new Set,l=(m,h)=>{const v=typeof m=="function"?m(r):m;if(!Object.is(v,r)){const x=r;r=h??(typeof v!="object"||v===null)?v:Object.assign({},r,v),o.forEach(w=>w(r,x))}},a=()=>r,f={setState:l,getState:a,getInitialState:()=>g,subscribe:m=>(o.add(m),()=>o.delete(m)),destroy:()=>{(p_?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},g=r=n(l,a,f);return f},m_=n=>n?Sp(n):Sp,{useDebugValue:g_}=by,{useSyncExternalStoreWithSelector:y_}=h_,v_=n=>n;function Z0(n,r=v_,o){const l=y_(n.subscribe,n.getState,n.getServerState||n.getInitialState,r,o);return g_(l),l}const kp=(n,r)=>{const o=m_(n),l=(a,c=r)=>Z0(o,a,c);return Object.assign(l,o),l},x_=(n,r)=>n?kp(n,r):kp;function Fe(n,r){if(Object.is(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;if(n instanceof Map&&r instanceof Map){if(n.size!==r.size)return!1;for(const[l,a]of n)if(!Object.is(a,r.get(l)))return!1;return!0}if(n instanceof Set&&r instanceof Set){if(n.size!==r.size)return!1;for(const l of n)if(!r.has(l))return!1;return!0}const o=Object.keys(n);if(o.length!==Object.keys(r).length)return!1;for(const l of o)if(!Object.prototype.hasOwnProperty.call(r,l)||!Object.is(n[l],r[l]))return!1;return!0}Qm();const xa=re.createContext(null),w_=xa.Provider,J0=Gn.error001("react");function Ne(n,r){const o=re.useContext(xa);if(o===null)throw new Error(J0);return Z0(o,n,r)}function je(){const n=re.useContext(xa);if(n===null)throw new Error(J0);return re.useMemo(()=>({getState:n.getState,setState:n.setState,subscribe:n.subscribe}),[n])}const Ep={display:"none"},__={position:"absolute",width:1,height:1,margin:-1,border:0,padding:0,overflow:"hidden",clip:"rect(0px, 0px, 0px, 0px)",clipPath:"inset(100%)"},eg="react-flow__node-desc",ng="react-flow__edge-desc",S_="react-flow__aria-live",k_=n=>n.ariaLiveMessage,E_=n=>n.ariaLabelConfig;function C_({rfId:n}){const r=Ne(k_);return B.jsx("div",{id:`${S_}-${n}`,"aria-live":"assertive","aria-atomic":"true",style:__,children:r})}function b_({rfId:n,disableKeyboardA11y:r}){const o=Ne(E_);return B.jsxs(B.Fragment,{children:[B.jsx("div",{id:`${eg}-${n}`,style:Ep,children:r?o["node.a11yDescription.default"]:o["node.a11yDescription.keyboardDisabled"]}),B.jsx("div",{id:`${ng}-${n}`,style:Ep,children:o["edge.a11yDescription.default"]}),!r&&B.jsx(C_,{rfId:n})]})}const wa=re.forwardRef(({position:n="top-left",children:r,className:o,style:l,...a},c)=>{const u=`${n}`.split("-");return B.jsx("div",{className:Ge(["react-flow__panel",o,...u]),style:l,ref:c,...a,children:r})});wa.displayName="Panel";function $_({proOptions:n,position:r="bottom-right"}){return n!=null&&n.hideAttribution?null:B.jsx(wa,{position:r,className:"react-flow__attribution","data-message":"Please only hide this attribution when you are subscribed to React Flow Pro: https://pro.reactflow.dev",children:B.jsx("a",{href:"https://reactflow.dev",target:"_blank",rel:"noopener noreferrer","aria-label":"React Flow attribution",children:"React Flow"})})}const N_=n=>{const r=[],o=[];for(const[,l]of n.nodeLookup)l.selected&&r.push(l.internals.userNode);for(const[,l]of n.edgeLookup)l.selected&&o.push(l);return{selectedNodes:r,selectedEdges:o}},Gl=n=>n.id;function P_(n,r){return Fe(n.selectedNodes.map(Gl),r.selectedNodes.map(Gl))&&Fe(n.selectedEdges.map(Gl),r.selectedEdges.map(Gl))}function M_({onSelectionChange:n}){const r=je(),{selectedNodes:o,selectedEdges:l}=Ne(N_,P_);return re.useEffect(()=>{const a={nodes:o,edges:l};n==null||n(a),r.getState().onSelectionChangeHandlers.forEach(c=>c(a))},[o,l,n]),null}const T_=n=>!!n.onSelectionChangeHandlers;function L_({onSelectionChange:n}){const r=Ne(T_);return n||r?B.jsx(M_,{onSelectionChange:n}):null}const tg=[0,0],A_={x:0,y:0,zoom:1},R_=["nodes","edges","defaultNodes","defaultEdges","onConnect","onConnectStart","onConnectEnd","onClickConnectStart","onClickConnectEnd","nodesDraggable","autoPanOnNodeFocus","nodesConnectable","nodesFocusable","edgesFocusable","edgesReconnectable","elevateNodesOnSelect","elevateEdgesOnSelect","minZoom","maxZoom","nodeExtent","onNodesChange","onEdgesChange","elementsSelectable","connectionMode","snapGrid","snapToGrid","translateExtent","connectOnClick","defaultEdgeOptions","fitView","fitViewOptions","onNodesDelete","onEdgesDelete","onDelete","onNodeDrag","onNodeDragStart","onNodeDragStop","onSelectionDrag","onSelectionDragStart","onSelectionDragStop","onMoveStart","onMove","onMoveEnd","noPanClassName","nodeOrigin","autoPanOnConnect","autoPanOnNodeDrag","onError","connectionRadius","isValidConnection","selectNodesOnDrag","nodeDragThreshold","connectionDragThreshold","onBeforeDelete","debug","autoPanSpeed","ariaLabelConfig","zIndexMode"],Cp=[...R_,"rfId"],I_=n=>({setNodes:n.setNodes,setEdges:n.setEdges,setMinZoom:n.setMinZoom,setMaxZoom:n.setMaxZoom,setTranslateExtent:n.setTranslateExtent,setNodeExtent:n.setNodeExtent,reset:n.reset,setDefaultNodesAndEdges:n.setDefaultNodesAndEdges}),bp={translateExtent:uo,nodeOrigin:tg,minZoom:.5,maxZoom:2,elementsSelectable:!0,noPanClassName:"nopan",rfId:"1"};function D_(n){const{setNodes:r,setEdges:o,setMinZoom:l,setMaxZoom:a,setTranslateExtent:c,setNodeExtent:u,reset:d,setDefaultNodesAndEdges:f}=Ne(I_,Fe),g=je();re.useEffect(()=>(f(n.defaultNodes,n.defaultEdges),()=>{m.current=bp,d()}),[]);const m=re.useRef(bp);return re.useEffect(()=>{for(const h of Cp){const v=n[h],x=m.current[h];v!==x&&(typeof n[h]>"u"||(h==="nodes"?r(v):h==="edges"?o(v):h==="minZoom"?l(v):h==="maxZoom"?a(v):h==="translateExtent"?c(v):h==="nodeExtent"?u(v):h==="ariaLabelConfig"?g.setState({ariaLabelConfig:w2(v)}):h==="fitView"?g.setState({fitViewQueued:v}):h==="fitViewOptions"?g.setState({fitViewOptions:v}):g.setState({[h]:v})))}m.current=n},Cp.map(h=>n[h])),null}function $p(){return typeof window>"u"||!window.matchMedia?null:window.matchMedia("(prefers-color-scheme: dark)")}function F_(n){var l;const[r,o]=re.useState(n==="system"?null:n);return re.useEffect(()=>{if(n!=="system"){o(n);return}const a=$p(),c=()=>o(a!=null&&a.matches?"dark":"light");return c(),a==null||a.addEventListener("change",c),()=>{a==null||a.removeEventListener("change",c)}},[n]),r!==null?r:(l=$p())!=null&&l.matches?"dark":"light"}const Np=typeof document<"u"?document:null;function po(n=null,r={target:Np,actInsideInputWithModifier:!0}){const[o,l]=re.useState(!1),a=re.useRef(!1),c=re.useRef(new Set([])),[u,d]=re.useMemo(()=>{if(n!==null){const g=(Array.isArray(n)?n:[n]).filter(h=>typeof h=="string").map(h=>h.replace("+",`
`).replace(`

`,`
+`).split(`
`)),m=g.reduce((h,v)=>h.concat(...v),[]);return[g,m]}return[[],[]]},[n]);return re.useEffect(()=>{const f=(r==null?void 0:r.target)??Np,g=(r==null?void 0:r.actInsideInputWithModifier)??!0;if(n!==null){const m=x=>{var _,k;if(a.current=x.ctrlKey||x.metaKey||x.shiftKey||x.altKey,(!a.current||a.current&&!g)&&I0(x))return!1;const C=Mp(x.code,d);if(c.current.add(x[C]),Pp(u,c.current,!1)){const $=((k=(_=x.composedPath)==null?void 0:_.call(x))==null?void 0:k[0])||x.target,S=($==null?void 0:$.nodeName)==="BUTTON"||($==null?void 0:$.nodeName)==="A";r.preventDefault!==!1&&(a.current||!S)&&x.preventDefault(),l(!0)}},h=x=>{const w=Mp(x.code,d);Pp(u,c.current,!0)?(l(!1),c.current.clear()):c.current.delete(x[w]),x.key==="Meta"&&c.current.clear(),a.current=!1},v=()=>{c.current.clear(),l(!1)};return f==null||f.addEventListener("keydown",m),f==null||f.addEventListener("keyup",h),window.addEventListener("blur",v),window.addEventListener("contextmenu",v),()=>{f==null||f.removeEventListener("keydown",m),f==null||f.removeEventListener("keyup",h),window.removeEventListener("blur",v),window.removeEventListener("contextmenu",v)}}},[n,l]),o}function Pp(n,r,o){return n.filter(l=>o||l.length===r.size).some(l=>l.every(a=>r.has(a)))}function Mp(n,r){return r.includes(n)?"code":"key"}const j_=()=>{const n=je();return re.useMemo(()=>({zoomIn:async r=>{const{panZoom:o}=n.getState();return o?o.scaleBy(1.2,r):!1},zoomOut:async r=>{const{panZoom:o}=n.getState();return o?o.scaleBy(1/1.2,r):!1},zoomTo:async(r,o)=>{const{panZoom:l}=n.getState();return l?l.scaleTo(r,o):!1},getZoom:()=>n.getState().transform[2],setViewport:async(r,o)=>{const{transform:[l,a,c],panZoom:u}=n.getState();return u?(await u.setViewport({x:r.x??l,y:r.y??a,zoom:r.zoom??c},o),!0):!1},getViewport:()=>{const[r,o,l]=n.getState().transform;return{x:r,y:o,zoom:l}},setCenter:async(r,o,l)=>n.getState().setCenter(r,o,l),fitBounds:async(r,o)=>{const{width:l,height:a,minZoom:c,maxZoom:u,panZoom:d}=n.getState(),f=Jc(r,l,a,c,u,(o==null?void 0:o.padding)??.1);return d?(await d.setViewport(f,{duration:o==null?void 0:o.duration,ease:o==null?void 0:o.ease,interpolate:o==null?void 0:o.interpolate}),!0):!1},screenToFlowPosition:(r,o={})=>{const{transform:l,snapGrid:a,snapToGrid:c,domNode:u}=n.getState();if(!u)return r;const{x:d,y:f}=u.getBoundingClientRect(),g={x:r.x-d,y:r.y-f},m=o.snapGrid??a,h=o.snapToGrid??c;return si(g,l,h,m)},flowToScreenPosition:r=>{const{transform:o,domNode:l}=n.getState();if(!l)return r;const{x:a,y:c}=l.getBoundingClientRect(),u=oi(r,o);return{x:u.x+a,y:u.y+c}}}),[])};function rg(n,r){const o=[],l=new Map,a=[];for(const c of n)if(c.type==="add"){a.push(c);continue}else if(c.type==="remove"||c.type==="replace")l.set(c.id,[c]);else{const u=l.get(c.id);u?u.push(c):l.set(c.id,[c])}for(const c of r){const u=l.get(c.id);if(!u){o.push(c);continue}if(u[0].type==="remove")continue;if(u[0].type==="replace"){o.push({...u[0].item});continue}const d={...c};for(const f of u)z_(f,d);o.push(d)}return a.length&&a.forEach(c=>{c.index!==void 0?o.splice(c.index,0,{...c.item}):o.push({...c.item})}),o}function z_(n,r){switch(n.type){case"select":{r.selected=n.selected;break}case"position":{typeof n.position<"u"&&(r.position=n.position),typeof n.dragging<"u"&&(r.dragging=n.dragging);break}case"dimensions":{typeof n.dimensions<"u"&&(r.measured={...n.dimensions},n.setAttributes&&((n.setAttributes===!0||n.setAttributes==="width")&&(r.width=n.dimensions.width),(n.setAttributes===!0||n.setAttributes==="height")&&(r.height=n.dimensions.height))),typeof n.resizing=="boolean"&&(r.resizing=n.resizing);break}}}function O_(n,r){return rg(n,r)}function H_(n,r){return rg(n,r)}function dr(n,r){return{id:n,type:"select",selected:r}}function Kr(n,r=new Set,o=!1){const l=[];for(const[a,c]of n){const u=r.has(a);!(c.selected===void 0&&!u)&&c.selected!==u&&(o&&(c.selected=u),l.push(dr(c.id,u)))}return l}function Tp({items:n=[],lookup:r}){var a;const o=[],l=new Map(n.map(c=>[c.id,c]));for(const[c,u]of n.entries()){const d=r.get(u.id),f=((a=d==null?void 0:d.internals)==null?void 0:a.userNode)??d;f!==void 0&&f!==u&&o.push({id:u.id,item:u,type:"replace"}),f===void 0&&o.push({item:u,type:"add",index:c})}for(const[c]of r)l.get(c)===void 0&&o.push({id:c,type:"remove"});return o}function Lp(n){return{id:n.id,type:"remove"}}const B_=T0();function V_(n,r,o={}){return b2(n,r,{...o,onError:o.onError??B_})}const Ap=n=>d2(n),W_=n=>$0(n);function ig(n){return re.forwardRef(n)}const U_=typeof window<"u"?re.useLayoutEffect:re.useEffect;function Rp(n){const[r,o]=re.useState(BigInt(0)),[l]=re.useState(()=>Q_(()=>o(a=>a+BigInt(1))));return U_(()=>{const a=l.get();a.length&&(n(a),l.reset())},[r]),l}function Q_(n){let r=[];return{get:()=>r,reset:()=>{r=[]},push:o=>{r.push(o),n()}}}const og=re.createContext(null);function G_({children:n}){const r=je(),o=re.useCallback(d=>{const{nodes:f=[],setNodes:g,hasDefaultNodes:m,onNodesChange:h,nodeLookup:v,fitViewQueued:x,onNodesChangeMiddlewareMap:w}=r.getState();let C=f;for(const k of d)C=typeof k=="function"?k(C):k;let _=Tp({items:C,lookup:v});for(const k of w.values())_=k(_);m&&g(C),_.length>0?h==null||h(_):x&&window.requestAnimationFrame(()=>{const{fitViewQueued:k,nodes:$,setNodes:S}=r.getState();k&&S($)})},[]),l=Rp(o),a=re.useCallback(d=>{const{edges:f=[],setEdges:g,hasDefaultEdges:m,onEdgesChange:h,edgeLookup:v}=r.getState();let x=f;for(const w of d)x=typeof w=="function"?w(x):w;m?g(x):h&&h(Tp({items:x,lookup:v}))},[]),c=Rp(a),u=re.useMemo(()=>({nodeQueue:l,edgeQueue:c}),[]);return B.jsx(og.Provider,{value:u,children:n})}function q_(){const n=re.useContext(og);if(!n)throw new Error("useBatchContext must be used within a BatchProvider");return n}const Y_=n=>!!n.panZoom;function _a(){const n=j_(),r=je(),o=q_(),l=Ne(Y_),a=re.useMemo(()=>{const c=h=>r.getState().nodeLookup.get(h),u=h=>{o.nodeQueue.push(h)},d=h=>{o.edgeQueue.push(h)},f=h=>{var k,$;const{nodeLookup:v,nodeOrigin:x}=r.getState(),w=Ap(h)?h:v.get(h.id),C=w.parentId?A0(w.position,w.measured,w.parentId,v,x):w.position,_={...w,position:C,width:((k=w.measured)==null?void 0:k.width)??w.width,height:(($=w.measured)==null?void 0:$.height)??w.height};return ii(_)},g=(h,v,x={replace:!1})=>{u(w=>w.map(C=>{if(C.id===h){const _=typeof v=="function"?v(C):v;return x.replace&&Ap(_)?_:{...C,..._}}return C}))},m=(h,v,x={replace:!1})=>{d(w=>w.map(C=>{if(C.id===h){const _=typeof v=="function"?v(C):v;return x.replace&&W_(_)?_:{...C,..._}}return C}))};return{getNodes:()=>r.getState().nodes.map(h=>({...h})),getNode:h=>{var v;return(v=c(h))==null?void 0:v.internals.userNode},getInternalNode:c,getEdges:()=>{const{edges:h=[]}=r.getState();return h.map(v=>({...v}))},getEdge:h=>r.getState().edgeLookup.get(h),setNodes:u,setEdges:d,addNodes:h=>{const v=Array.isArray(h)?h:[h];o.nodeQueue.push(x=>[...x,...v])},addEdges:h=>{const v=Array.isArray(h)?h:[h];o.edgeQueue.push(x=>[...x,...v])},toObject:()=>{const{nodes:h=[],edges:v=[],transform:x}=r.getState(),[w,C,_]=x;return{nodes:h.map(k=>({...k})),edges:v.map(k=>({...k})),viewport:{x:w,y:C,zoom:_}}},deleteElements:async({nodes:h=[],edges:v=[]})=>{const{nodes:x,edges:w,onNodesDelete:C,onEdgesDelete:_,triggerNodeChanges:k,triggerEdgeChanges:$,onDelete:S,onBeforeDelete:b}=r.getState(),{nodes:R,edges:N}=await g2({nodesToRemove:h,edgesToRemove:v,nodes:x,edges:w,onBeforeDelete:b}),F=N.length>0,P=R.length>0;if(F){const A=N.map(Lp);_==null||_(N),$(A)}if(P){const A=R.map(Lp);C==null||C(R),k(A)}return(P||F)&&(S==null||S({nodes:R,edges:N})),{deletedNodes:R,deletedEdges:N}},getIntersectingNodes:(h,v=!0,x)=>{const w=op(h),C=w?h:f(h),_=x!==void 0;return C?(x||r.getState().nodes).filter(k=>{const $=r.getState().nodeLookup.get(k.id);if($&&!w&&(k.id===h.id||!$.internals.positionAbsolute))return!1;const S=ii(_?k:$),b=fo(S,C);return v&&b>0||b>=S.width*S.height||b>=C.width*C.height}):[]},isNodeIntersecting:(h,v,x=!0)=>{const C=op(h)?h:f(h);if(!C)return!1;const _=fo(C,v);return x&&_>0||_>=v.width*v.height||_>=C.width*C.height},updateNode:g,updateNodeData:(h,v,x={replace:!1})=>{g(h,w=>{const C=typeof v=="function"?v(w):v;return x.replace?{...w,data:C}:{...w,data:{...w.data,...C}}},x)},updateEdge:m,updateEdgeData:(h,v,x={replace:!1})=>{m(h,w=>{const C=typeof v=="function"?v(w):v;return x.replace?{...w,data:C}:{...w,data:{...w.data,...C}}},x)},getNodesBounds:h=>{const{nodeLookup:v,nodeOrigin:x}=r.getState();return f2(h,{nodeLookup:v,nodeOrigin:x})},getHandleConnections:({type:h,id:v,nodeId:x})=>{var w;return Array.from(((w=r.getState().connectionLookup.get(`${x}-${h}${v?`-${v}`:""}`))==null?void 0:w.values())??[])},getNodeConnections:({type:h,handleId:v,nodeId:x})=>{var w;return Array.from(((w=r.getState().connectionLookup.get(`${x}${h?v?`-${h}-${v}`:`-${h}`:""}`))==null?void 0:w.values())??[])},fitView:async h=>{const v=r.getState().fitViewResolver??x2();return r.setState({fitViewQueued:!0,fitViewOptions:h,fitViewResolver:v}),o.nodeQueue.push(x=>[...x]),v.promise}}},[]);return re.useMemo(()=>({...a,...n,viewportInitialized:l}),[l])}const Ip=n=>n.selected,X_=typeof window<"u"?window:void 0;function K_({deleteKeyCode:n,multiSelectionKeyCode:r}){const o=je(),{deleteElements:l}=_a(),a=po(n,{actInsideInputWithModifier:!1}),c=po(r,{target:X_});re.useEffect(()=>{if(a){const{edges:u,nodes:d}=o.getState();l({nodes:d.filter(Ip),edges:u.filter(Ip)}),o.setState({nodesSelectionActive:!1})}},[a]),re.useEffect(()=>{o.setState({multiSelectionActive:c})},[c])}function Z_(n){const r=je();re.useEffect(()=>{const o=()=>{var a,c,u,d;if(!n.current||!(((c=(a=n.current).checkVisibility)==null?void 0:c.call(a))??!0))return!1;const l=ed(n.current);(l.height===0||l.width===0)&&((d=(u=r.getState()).onError)==null||d.call(u,"004",Gn.error004())),r.setState({width:l.width||500,height:l.height||500})};if(n.current){o(),window.addEventListener("resize",o);const l=new ResizeObserver(()=>o());return l.observe(n.current),()=>{window.removeEventListener("resize",o),l&&n.current&&l.unobserve(n.current)}}},[])}const Sa={position:"absolute",width:"100%",height:"100%",top:0,left:0},J_=n=>({userSelectionActive:n.userSelectionActive,lib:n.lib,connectionInProgress:n.connection.inProgress});function eS({onPaneContextMenu:n,zoomOnScroll:r=!0,zoomOnPinch:o=!0,panOnScroll:l=!1,panOnScrollSpeed:a=.5,panOnScrollMode:c=pr.Free,zoomOnDoubleClick:u=!0,panOnDrag:d=!0,defaultViewport:f,translateExtent:g,minZoom:m,maxZoom:h,zoomActivationKeyCode:v,preventScrolling:x=!0,children:w,noWheelClassName:C,noPanClassName:_,onViewportChange:k,isControlledViewport:$,paneClickDistance:S,selectionOnDrag:b}){const R=je(),N=re.useRef(null),{userSelectionActive:F,lib:P,connectionInProgress:A}=Ne(J_,Fe),O=po(v),L=re.useRef();Z_(N);const D=re.useCallback(J=>{k==null||k({x:J[0],y:J[1],zoom:J[2]}),$||R.setState({transform:J})},[k,$]);return re.useEffect(()=>{if(N.current){L.current=t_({domNode:N.current,minZoom:m,maxZoom:h,translateExtent:g,viewport:f,onDraggingChange:Q=>R.setState(Y=>Y.paneDragging===Q?Y:{paneDragging:Q}),onPanZoomStart:(Q,Y)=>{const{onViewportChangeStart:W,onMoveStart:V}=R.getState();V==null||V(Q,Y),W==null||W(Y)},onPanZoom:(Q,Y)=>{const{onViewportChange:W,onMove:V}=R.getState();V==null||V(Q,Y),W==null||W(Y)},onPanZoomEnd:(Q,Y)=>{const{onViewportChangeEnd:W,onMoveEnd:V}=R.getState();V==null||V(Q,Y),W==null||W(Y)}});const{x:J,y:T,zoom:q}=L.current.getViewport();return R.setState({panZoom:L.current,transform:[J,T,q],domNode:N.current.closest(".react-flow")}),()=>{var Q;(Q=L.current)==null||Q.destroy()}}},[]),re.useEffect(()=>{var J;(J=L.current)==null||J.update({onPaneContextMenu:n,zoomOnScroll:r,zoomOnPinch:o,panOnScroll:l,panOnScrollSpeed:a,panOnScrollMode:c,zoomOnDoubleClick:u,panOnDrag:d,zoomActivationKeyPressed:O,preventScrolling:x,noPanClassName:_,userSelectionActive:F,noWheelClassName:C,lib:P,onTransformChange:D,connectionInProgress:A,selectionOnDrag:b,paneClickDistance:S})},[n,r,o,l,a,c,u,d,O,x,_,F,C,P,D,A,b,S]),B.jsx("div",{className:"react-flow__renderer",ref:N,style:Sa,children:w})}const nS=n=>({userSelectionActive:n.userSelectionActive,userSelectionRect:n.userSelectionRect});function tS(){const{userSelectionActive:n,userSelectionRect:r}=Ne(nS,Fe);return n&&r?B.jsx("div",{className:"react-flow__selection react-flow__container",style:{width:r.width,height:r.height,transform:`translate(${r.x}px, ${r.y}px)`}}):null}const Lu=(n,r)=>o=>{o.target===r.current&&(n==null||n(o))},rS=n=>({userSelectionActive:n.userSelectionActive,elementsSelectable:n.elementsSelectable,connectionInProgress:n.connection.inProgress,dragging:n.paneDragging,panBy:n.panBy,autoPanSpeed:n.autoPanSpeed});function iS({isSelecting:n,selectionKeyPressed:r,selectionMode:o=co.Full,panOnDrag:l,autoPanOnSelection:a,paneClickDistance:c,selectionOnDrag:u,onSelectionStart:d,onSelectionEnd:f,onPaneClick:g,onPaneContextMenu:m,onPaneScroll:h,onPaneMouseEnter:v,onPaneMouseMove:x,onPaneMouseLeave:w,children:C}){const _=re.useRef(0),k=je(),{userSelectionActive:$,elementsSelectable:S,dragging:b,connectionInProgress:R,panBy:N,autoPanSpeed:F}=Ne(rS,Fe),P=S&&(n||$),A=re.useRef(null),O=re.useRef(),L=re.useRef(new Set),D=re.useRef(new Set),J=re.useRef(!1),T=re.useRef({x:0,y:0}),q=re.useRef(!1),Q=Z=>{if(J.current||R){J.current=!1;return}g==null||g(Z),k.getState().resetSelectedElements(),k.setState({nodesSelectionActive:!1})},Y=Z=>{if(Array.isArray(l)&&(l!=null&&l.includes(2))){Z.preventDefault();return}m==null||m(Z)},W=h?Z=>h(Z):void 0,V=Z=>{J.current&&(Z.stopPropagation(),J.current=!1)},X=Z=>{var Ae,sn;const{domNode:oe,transform:fe}=k.getState();if(O.current=oe==null?void 0:oe.getBoundingClientRect(),!O.current)return;const xe=Z.target===A.current;if(!xe&&!!Z.target.closest(".nokey")||!n||!(u&&xe||r)||Z.button!==0||!Z.isPrimary)return;(sn=(Ae=Z.target)==null?void 0:Ae.setPointerCapture)==null||sn.call(Ae,Z.pointerId),J.current=!1;const{x:ke,y:be}=Qn(Z.nativeEvent,O.current),$e=si({x:ke,y:be},fe);k.setState({userSelectionRect:{width:0,height:0,startX:$e.x,startY:$e.y,x:ke,y:be}}),xe||(Z.stopPropagation(),Z.preventDefault())};function M(Z,oe){const{userSelectionRect:fe}=k.getState();if(!fe)return;const{transform:xe,nodeLookup:he,edgeLookup:de,connectionLookup:ke,triggerNodeChanges:be,triggerEdgeChanges:$e,defaultEdgeOptions:Ae}=k.getState(),sn={x:fe.startX,y:fe.startY},{x:dn,y:nn}=oi(sn,xe),tn={startX:sn.x,startY:sn.y,x:Z<dn?Z:dn,y:oe<nn?oe:nn,width:Math.abs(Z-dn),height:Math.abs(oe-nn)},lt=L.current,Xn=D.current;L.current=new Set(Kc(he,tn,xe,o===co.Partial,!0).map(fn=>fn.id)),D.current=new Set;const Kn=(Ae==null?void 0:Ae.selectable)??!0;for(const fn of L.current){const Pn=ke.get(fn);if(Pn)for(const{edgeId:wn}of Pn.values()){const Mn=de.get(wn);Mn&&(Mn.selectable??Kn)&&D.current.add(wn)}}if(!lp(lt,L.current)){const fn=Kr(he,L.current,!0);be(fn)}if(!lp(Xn,D.current)){const fn=Kr(de,D.current);$e(fn)}k.setState({userSelectionRect:tn,userSelectionActive:!0,nodesSelectionActive:!1})}function z(){if(!a||!O.current)return;const[Z,oe]=Zc(T.current,O.current,F);N({x:Z,y:oe}).then(fe=>{if(!J.current||!fe){_.current=requestAnimationFrame(z);return}const{x:xe,y:he}=T.current;M(xe,he),_.current=requestAnimationFrame(z)})}const j=()=>{cancelAnimationFrame(_.current),_.current=0,q.current=!1};re.useEffect(()=>()=>j(),[]);const U=Z=>{const{userSelectionRect:oe,transform:fe,resetSelectedElements:xe}=k.getState();if(!O.current||!oe)return;const{x:he,y:de}=Qn(Z.nativeEvent,O.current);T.current={x:he,y:de};const ke=oi({x:oe.startX,y:oe.startY},fe);if(!J.current){const be=r?0:c;if(Math.hypot(he-ke.x,de-ke.y)<=be)return;xe(),d==null||d(Z)}J.current=!0,q.current||(z(),q.current=!0),M(he,de)},K=Z=>{var oe,fe;Z.button===0&&((fe=(oe=Z.target)==null?void 0:oe.releasePointerCapture)==null||fe.call(oe,Z.pointerId),!$&&Z.target===A.current&&k.getState().userSelectionRect&&(Q==null||Q(Z)),k.setState({userSelectionActive:!1,userSelectionRect:null}),J.current&&(f==null||f(Z),k.setState({nodesSelectionActive:L.current.size>0})),j())},ie=Z=>{var oe,fe;(fe=(oe=Z.target)==null?void 0:oe.releasePointerCapture)==null||fe.call(oe,Z.pointerId),j()},le=l===!0||Array.isArray(l)&&l.includes(0);return B.jsxs("div",{className:Ge(["react-flow__pane",{draggable:le,dragging:b,selection:n}]),onClick:P?void 0:Lu(Q,A),onContextMenu:Lu(Y,A),onWheel:Lu(W,A),onPointerEnter:P?void 0:v,onPointerMove:P?U:x,onPointerUp:P?K:void 0,onPointerCancel:P?ie:void 0,onPointerDownCapture:P?X:void 0,onClickCapture:P?V:void 0,onPointerLeave:w,ref:A,style:Sa,children:[C,B.jsx(tS,{})]})}function Oc({id:n,store:r,unselect:o=!1,nodeRef:l}){const{addSelectedNodes:a,unselectNodesAndEdges:c,multiSelectionActive:u,nodeLookup:d,onError:f}=r.getState(),g=d.get(n);if(!g){f==null||f("012",Gn.error012(n));return}r.setState({nodesSelectionActive:!1}),g.selected?(o||g.selected&&u)&&(c({nodes:[g],edges:[]}),requestAnimationFrame(()=>{var m;return(m=l==null?void 0:l.current)==null?void 0:m.blur()})):a([n])}function lg({nodeRef:n,disabled:r=!1,noDragClassName:o,handleSelector:l,nodeId:a,isSelectable:c,nodeClickDistance:u}){const d=je(),[f,g]=re.useState(!1),m=re.useRef();return re.useEffect(()=>{m.current=B2({getStoreItems:()=>d.getState(),onNodeMouseDown:h=>{Oc({id:h,store:d,nodeRef:n})},onDragStart:()=>{g(!0)},onDragStop:()=>{g(!1)}})},[]),re.useEffect(()=>{if(!(r||!n.current||!m.current))return m.current.update({noDragClassName:o,handleSelector:l,domNode:n.current,isSelectable:c,nodeId:a,nodeClickDistance:u}),()=>{var h;(h=m.current)==null||h.destroy()}},[o,l,r,c,n,a,u]),f}const oS=n=>r=>r.selected&&(r.draggable||n&&typeof r.draggable>"u");function ag(){const n=je();return re.useCallback(o=>{const{nodeExtent:l,snapToGrid:a,snapGrid:c,nodesDraggable:u,onError:d,updateNodePositions:f,nodeLookup:g,nodeOrigin:m}=n.getState(),h=new Map,v=oS(u),x=a?c[0]:5,w=a?c[1]:5,C=o.direction.x*x*o.factor,_=o.direction.y*w*o.factor;for(const[,k]of g){if(!v(k))continue;let $={x:k.internals.positionAbsolute.x+C,y:k.internals.positionAbsolute.y+_};a&&($=wo($,c));const{position:S,positionAbsolute:b}=N0({nodeId:k.id,nextPosition:$,nodeLookup:g,nodeExtent:l,nodeOrigin:m,onError:d});k.position=S,k.internals.positionAbsolute=b,h.set(k.id,k)}f(h)},[])}const ld=re.createContext(null),lS=ld.Provider;ld.Consumer;const sg=()=>re.useContext(ld),aS=n=>({connectOnClick:n.connectOnClick,noPanClassName:n.noPanClassName,rfId:n.rfId}),sS=(n,r,o)=>l=>{const{connectionClickStartHandle:a,connectionMode:c,connection:u}=l,{fromHandle:d,toHandle:f,isValid:g}=u,m=(f==null?void 0:f.nodeId)===n&&(f==null?void 0:f.id)===r&&(f==null?void 0:f.type)===o;return{connectingFrom:(d==null?void 0:d.nodeId)===n&&(d==null?void 0:d.id)===r&&(d==null?void 0:d.type)===o,connectingTo:m,clickConnecting:(a==null?void 0:a.nodeId)===n&&(a==null?void 0:a.id)===r&&(a==null?void 0:a.type)===o,isPossibleEndHandle:c===ti.Strict?(d==null?void 0:d.type)!==o:n!==(d==null?void 0:d.nodeId)||r!==(d==null?void 0:d.id),connectionInProcess:!!d,clickConnectionInProcess:!!a,valid:m&&g}};function uS({type:n="source",position:r=we.Top,isValidConnection:o,isConnectable:l=!0,isConnectableStart:a=!0,isConnectableEnd:c=!0,id:u,onConnect:d,children:f,className:g,onMouseDown:m,onTouchStart:h,...v},x){var q,Q;const w=u||null,C=n==="target",_=je(),k=sg(),{connectOnClick:$,noPanClassName:S,rfId:b}=Ne(aS,Fe),{connectingFrom:R,connectingTo:N,clickConnecting:F,isPossibleEndHandle:P,connectionInProcess:A,clickConnectionInProcess:O,valid:L}=Ne(sS(k,w,n),Fe);k||(Q=(q=_.getState()).onError)==null||Q.call(q,"010",Gn.error010());const D=Y=>{const{defaultEdgeOptions:W,onConnect:V,hasDefaultEdges:X}=_.getState(),M={...W,...Y};if(X){const{edges:z,setEdges:j,onError:U}=_.getState();j(V_(M,z,{onError:U}))}V==null||V(M),d==null||d(M)},J=Y=>{if(!k)return;const W=D0(Y.nativeEvent);if(a&&(W&&Y.button===0||!W)){const V=_.getState();zc.onPointerDown(Y.nativeEvent,{handleDomNode:Y.currentTarget,autoPanOnConnect:V.autoPanOnConnect,connectionMode:V.connectionMode,connectionRadius:V.connectionRadius,domNode:V.domNode,nodeLookup:V.nodeLookup,lib:V.lib,isTarget:C,handleId:w,nodeId:k,flowId:V.rfId,panBy:V.panBy,cancelConnection:V.cancelConnection,onConnectStart:V.onConnectStart,onConnectEnd:(...X)=>{var M,z;return(z=(M=_.getState()).onConnectEnd)==null?void 0:z.call(M,...X)},updateConnection:V.updateConnection,onConnect:D,isValidConnection:o||((...X)=>{var M,z;return((z=(M=_.getState()).isValidConnection)==null?void 0:z.call(M,...X))??!0}),getTransform:()=>_.getState().transform,getFromHandle:()=>_.getState().connection.fromHandle,autoPanSpeed:V.autoPanSpeed,dragThreshold:V.connectionDragThreshold})}W?m==null||m(Y):h==null||h(Y)},T=Y=>{const{onClickConnectStart:W,onClickConnectEnd:V,connectionClickStartHandle:X,connectionMode:M,isValidConnection:z,lib:j,rfId:U,nodeLookup:K,connection:ie}=_.getState();if(!k||!X&&!a)return;if(!X){W==null||W(Y.nativeEvent,{nodeId:k,handleId:w,handleType:n}),_.setState({connectionClickStartHandle:{nodeId:k,type:n,id:w}});return}const le=R0(Y.target),Z=o||z,{connection:oe,isValid:fe}=zc.isValid(Y.nativeEvent,{handle:{nodeId:k,id:w,type:n},connectionMode:M,fromNodeId:X.nodeId,fromHandleId:X.id||null,fromType:X.type,isValidConnection:Z,flowId:U,doc:le,lib:j,nodeLookup:K});fe&&oe&&D(oe);const xe=structuredClone(ie);delete xe.inProgress,xe.toPosition=xe.toHandle?xe.toHandle.position:null,V==null||V(Y,xe),_.setState({connectionClickStartHandle:null})};return B.jsx("div",{"data-handleid":w,"data-nodeid":k,"data-handlepos":r,"data-id":`${b}-${k}-${w}-${n}`,className:Ge(["react-flow__handle",`react-flow__handle-${r}`,"nodrag",S,g,{source:!C,target:C,connectable:l,connectablestart:a,connectableend:c,clickconnecting:F,connectingfrom:R,connectingto:N,valid:L,connectionindicator:l&&(!A||P)&&(A||O?c:a)}]),onMouseDown:J,onTouchStart:J,onClick:$?T:void 0,ref:x,...v,children:f})}const ai=re.memo(ig(uS));function cS({data:n,isConnectable:r,sourcePosition:o=we.Bottom}){return B.jsxs(B.Fragment,{children:[n==null?void 0:n.label,B.jsx(ai,{type:"source",position:o,isConnectable:r})]})}function dS({data:n,isConnectable:r,targetPosition:o=we.Top,sourcePosition:l=we.Bottom}){return B.jsxs(B.Fragment,{children:[B.jsx(ai,{type:"target",position:o,isConnectable:r}),n==null?void 0:n.label,B.jsx(ai,{type:"source",position:l,isConnectable:r})]})}function fS(){return null}function hS({data:n,isConnectable:r,targetPosition:o=we.Top}){return B.jsxs(B.Fragment,{children:[B.jsx(ai,{type:"target",position:o,isConnectable:r}),n==null?void 0:n.label]})}const ua={ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1},ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0}},Dp={input:cS,default:dS,output:hS,group:fS};function pS(n){var r,o,l,a;return n.internals.handleBounds===void 0?{width:n.width??n.initialWidth??((r=n.style)==null?void 0:r.width),height:n.height??n.initialHeight??((o=n.style)==null?void 0:o.height)}:{width:n.width??((l=n.style)==null?void 0:l.width),height:n.height??((a=n.style)==null?void 0:a.height)}}const mS=n=>{const{width:r,height:o,x:l,y:a}=xo(n.nodeLookup,{filter:c=>!!c.selected});return{width:Un(r)?r:null,height:Un(o)?o:null,userSelectionActive:n.userSelectionActive,transformString:`translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]}) translate(${l}px,${a}px)`}};function gS({onSelectionContextMenu:n,noPanClassName:r,disableKeyboardA11y:o}){const l=je(),{width:a,height:c,transformString:u,userSelectionActive:d}=Ne(mS,Fe),f=ag(),g=re.useRef(null);re.useEffect(()=>{var x;o||(x=g.current)==null||x.focus({preventScroll:!0})},[o]);const m=!d&&a!==null&&c!==null;if(lg({nodeRef:g,disabled:!m}),!m)return null;const h=n?x=>{const w=l.getState().nodes.filter(C=>C.selected);n(x,w)}:void 0,v=x=>{Object.prototype.hasOwnProperty.call(ua,x.key)&&(x.preventDefault(),f({direction:ua[x.key],factor:x.shiftKey?4:1}))};return B.jsx("div",{className:Ge(["react-flow__nodesselection","react-flow__container",r]),style:{transform:u},children:B.jsx("div",{ref:g,className:"react-flow__nodesselection-rect",onContextMenu:h,tabIndex:o?void 0:-1,onKeyDown:o?void 0:v,style:{width:a,height:c}})})}const Fp=typeof window<"u"?window:void 0,yS=n=>({nodesSelectionActive:n.nodesSelectionActive,userSelectionActive:n.userSelectionActive});function ug({children:n,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:l,onPaneMouseLeave:a,onPaneContextMenu:c,onPaneScroll:u,paneClickDistance:d,deleteKeyCode:f,selectionKeyCode:g,selectionOnDrag:m,selectionMode:h,onSelectionStart:v,onSelectionEnd:x,multiSelectionKeyCode:w,panActivationKeyCode:C,zoomActivationKeyCode:_,elementsSelectable:k,zoomOnScroll:$,zoomOnPinch:S,panOnScroll:b,panOnScrollSpeed:R,panOnScrollMode:N,zoomOnDoubleClick:F,panOnDrag:P,autoPanOnSelection:A,defaultViewport:O,translateExtent:L,minZoom:D,maxZoom:J,preventScrolling:T,onSelectionContextMenu:q,noWheelClassName:Q,noPanClassName:Y,disableKeyboardA11y:W,onViewportChange:V,isControlledViewport:X}){const{nodesSelectionActive:M,userSelectionActive:z}=Ne(yS,Fe),j=po(g,{target:Fp}),U=po(C,{target:Fp}),K=U||P,ie=U||b,le=m&&K!==!0,Z=j||z||le;return K_({deleteKeyCode:f,multiSelectionKeyCode:w}),B.jsx(eS,{onPaneContextMenu:c,elementsSelectable:k,zoomOnScroll:$,zoomOnPinch:S,panOnScroll:ie,panOnScrollSpeed:R,panOnScrollMode:N,zoomOnDoubleClick:F,panOnDrag:!j&&K,defaultViewport:O,translateExtent:L,minZoom:D,maxZoom:J,zoomActivationKeyCode:_,preventScrolling:T,noWheelClassName:Q,noPanClassName:Y,onViewportChange:V,isControlledViewport:X,paneClickDistance:d,selectionOnDrag:le,children:B.jsxs(iS,{onSelectionStart:v,onSelectionEnd:x,onPaneClick:r,onPaneMouseEnter:o,onPaneMouseMove:l,onPaneMouseLeave:a,onPaneContextMenu:c,onPaneScroll:u,panOnDrag:K,autoPanOnSelection:A,isSelecting:!!Z,selectionMode:h,selectionKeyPressed:j,paneClickDistance:d,selectionOnDrag:le,children:[n,M&&B.jsx(gS,{onSelectionContextMenu:q,noPanClassName:Y,disableKeyboardA11y:W})]})})}ug.displayName="FlowRenderer";const vS=re.memo(ug),xS=n=>r=>n?Kc(r.nodeLookup,{x:0,y:0,width:r.width,height:r.height},r.transform,!0).map(o=>o.id):Array.from(r.nodeLookup.keys());function wS(n){return Ne(re.useCallback(xS(n),[n]),Fe)}const _S=n=>n.updateNodeInternals;function SS(){const n=Ne(_S),[r]=re.useState(()=>typeof ResizeObserver>"u"?null:new ResizeObserver(o=>{const l=new Map;o.forEach(a=>{const c=a.target.getAttribute("data-id");l.set(c,{id:c,nodeElement:a.target,force:!0})}),n(l)}));return re.useEffect(()=>()=>{r==null||r.disconnect()},[r]),r}function kS({node:n,nodeType:r,hasDimensions:o,resizeObserver:l}){const a=je(),c=re.useRef(null),u=re.useRef(null),d=re.useRef(n.sourcePosition),f=re.useRef(n.targetPosition),g=re.useRef(r),m=o&&!!n.internals.handleBounds;return re.useEffect(()=>{c.current&&!n.hidden&&(!m||u.current!==c.current)&&(u.current&&(l==null||l.unobserve(u.current)),l==null||l.observe(c.current),u.current=c.current)},[m,n.hidden]),re.useEffect(()=>()=>{u.current&&(l==null||l.unobserve(u.current),u.current=null)},[]),re.useEffect(()=>{if(c.current){const h=g.current!==r,v=d.current!==n.sourcePosition,x=f.current!==n.targetPosition;(h||v||x)&&(g.current=r,d.current=n.sourcePosition,f.current=n.targetPosition,a.getState().updateNodeInternals(new Map([[n.id,{id:n.id,nodeElement:c.current,force:!0}]])))}},[n.id,r,n.sourcePosition,n.targetPosition]),c}function ES({id:n,onClick:r,onMouseEnter:o,onMouseMove:l,onMouseLeave:a,onContextMenu:c,onDoubleClick:u,nodesDraggable:d,elementsSelectable:f,nodesConnectable:g,nodesFocusable:m,resizeObserver:h,noDragClassName:v,noPanClassName:x,disableKeyboardA11y:w,rfId:C,nodeTypes:_,nodeClickDistance:k,onError:$}){const{node:S,internals:b,isParent:R}=Ne(Z=>{const oe=Z.nodeLookup.get(n),fe=Z.parentLookup.has(n);return{node:oe,internals:oe.internals,isParent:fe}},Fe);let N=S.type||"default",F=(_==null?void 0:_[N])||Dp[N];F===void 0&&($==null||$("003",Gn.error003(N)),N="default",F=(_==null?void 0:_.default)||Dp.default);const P=!!(S.draggable||d&&typeof S.draggable>"u"),A=!!(S.selectable||f&&typeof S.selectable>"u"),O=!!(S.connectable||g&&typeof S.connectable>"u"),L=!!(S.focusable||m&&typeof S.focusable>"u"),D=je(),J=L0(S),T=kS({node:S,nodeType:N,hasDimensions:J,resizeObserver:h}),q=lg({nodeRef:T,disabled:S.hidden||!P,noDragClassName:v,handleSelector:S.dragHandle,nodeId:n,isSelectable:A,nodeClickDistance:k}),Q=ag();if(S.hidden)return null;const Y=wt(S),W=pS(S),V=A||P||r||o||l||a,X=o?Z=>o(Z,{...b.userNode}):void 0,M=l?Z=>l(Z,{...b.userNode}):void 0,z=a?Z=>a(Z,{...b.userNode}):void 0,j=c?Z=>c(Z,{...b.userNode}):void 0,U=u?Z=>u(Z,{...b.userNode}):void 0,K=Z=>{const{selectNodesOnDrag:oe,nodeDragThreshold:fe}=D.getState();A&&(!oe||!P||fe>0)&&Oc({id:n,store:D,nodeRef:T}),r&&r(Z,{...b.userNode})},ie=Z=>{if(!(I0(Z.nativeEvent)||w)){if(k0.includes(Z.key)&&A){const oe=Z.key==="Escape";Oc({id:n,store:D,unselect:oe,nodeRef:T})}else if(P&&S.selected&&Object.prototype.hasOwnProperty.call(ua,Z.key)){Z.preventDefault();const{ariaLabelConfig:oe}=D.getState();D.setState({ariaLiveMessage:oe["node.a11yDescription.ariaLiveMessage"]({direction:Z.key.replace("Arrow","").toLowerCase(),x:~~b.positionAbsolute.x,y:~~b.positionAbsolute.y})}),Q({direction:ua[Z.key],factor:Z.shiftKey?4:1})}}},le=()=>{var ke;if(w||!((ke=T.current)!=null&&ke.matches(":focus-visible")))return;const{transform:Z,width:oe,height:fe,autoPanOnNodeFocus:xe,setCenter:he}=D.getState();if(!xe)return;Kc(new Map([[n,S]]),{x:0,y:0,width:oe,height:fe},Z,!0).length>0||he(S.position.x+Y.width/2,S.position.y+Y.height/2,{zoom:Z[2]})};return B.jsx("div",{className:Ge(["react-flow__node",`react-flow__node-${N}`,{[x]:P},S.className,{selected:S.selected,selectable:A,parent:R,draggable:P,dragging:q}]),ref:T,style:{zIndex:b.z,transform:`translate(${b.positionAbsolute.x}px,${b.positionAbsolute.y}px)`,pointerEvents:V?"all":"none",visibility:J?"visible":"hidden",...S.style,...W},"data-id":n,"data-testid":`rf__node-${n}`,onMouseEnter:X,onMouseMove:M,onMouseLeave:z,onContextMenu:j,onClick:K,onDoubleClick:U,onKeyDown:L?ie:void 0,tabIndex:L?0:void 0,onFocus:L?le:void 0,role:S.ariaRole??(L?"group":void 0),"aria-roledescription":"node","aria-describedby":w?void 0:`${eg}-${C}`,"aria-label":S.ariaLabel,...S.domAttributes,children:B.jsx(lS,{value:n,children:B.jsx(F,{id:n,data:S.data,type:N,positionAbsoluteX:b.positionAbsolute.x,positionAbsoluteY:b.positionAbsolute.y,selected:S.selected??!1,selectable:A,draggable:P,deletable:S.deletable??!0,isConnectable:O,sourcePosition:S.sourcePosition,targetPosition:S.targetPosition,dragging:q,dragHandle:S.dragHandle,zIndex:b.z,parentId:S.parentId,...Y})})})}var CS=re.memo(ES);const bS=n=>({nodesDraggable:n.nodesDraggable,nodesConnectable:n.nodesConnectable,nodesFocusable:n.nodesFocusable,elementsSelectable:n.elementsSelectable,onError:n.onError});function cg(n){const{nodesDraggable:r,nodesConnectable:o,nodesFocusable:l,elementsSelectable:a,onError:c}=Ne(bS,Fe),u=wS(n.onlyRenderVisibleElements),d=SS();return B.jsx("div",{className:"react-flow__nodes",style:Sa,children:u.map(f=>B.jsx(CS,{id:f,nodeTypes:n.nodeTypes,nodeExtent:n.nodeExtent,onClick:n.onNodeClick,onMouseEnter:n.onNodeMouseEnter,onMouseMove:n.onNodeMouseMove,onMouseLeave:n.onNodeMouseLeave,onContextMenu:n.onNodeContextMenu,onDoubleClick:n.onNodeDoubleClick,noDragClassName:n.noDragClassName,noPanClassName:n.noPanClassName,rfId:n.rfId,disableKeyboardA11y:n.disableKeyboardA11y,resizeObserver:d,nodesDraggable:r,nodesConnectable:o,nodesFocusable:l,elementsSelectable:a,nodeClickDistance:n.nodeClickDistance,onError:c},f))})}cg.displayName="NodeRenderer";const $S=re.memo(cg);function NS(n){return Ne(re.useCallback(o=>{if(!n)return o.edges.map(a=>a.id);const l=[];if(o.width&&o.height)for(const a of o.edges){const c=o.nodeLookup.get(a.source),u=o.nodeLookup.get(a.target);c&&u&&k2({sourceNode:c,targetNode:u,width:o.width,height:o.height,transform:o.transform})&&l.push(a.id)}return l},[n]),Fe)}const PS=({color:n="none",strokeWidth:r=1})=>{const o={strokeWidth:r,...n&&{stroke:n}};return B.jsx("polyline",{className:"arrow",style:o,strokeLinecap:"round",fill:"none",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4"})},MS=({color:n="none",strokeWidth:r=1})=>{const o={strokeWidth:r,...n&&{stroke:n,fill:n}};return B.jsx("polyline",{className:"arrowclosed",style:o,strokeLinecap:"round",strokeLinejoin:"round",points:"-5,-4 0,0 -5,4 -5,-4"})},jp={[aa.Arrow]:PS,[aa.ArrowClosed]:MS};function TS(n){const r=je();return re.useMemo(()=>{var a,c;return Object.prototype.hasOwnProperty.call(jp,n)?jp[n]:((c=(a=r.getState()).onError)==null||c.call(a,"009",Gn.error009(n)),null)},[n])}const LS=({id:n,type:r,color:o,width:l=12.5,height:a=12.5,markerUnits:c="strokeWidth",strokeWidth:u,orient:d="auto-start-reverse"})=>{const f=TS(r);return f?B.jsx("marker",{className:"react-flow__arrowhead",id:n,markerWidth:`${l}`,markerHeight:`${a}`,viewBox:"-10 -10 20 20",markerUnits:c,orient:d,refX:"0",refY:"0",children:B.jsx(f,{color:o,strokeWidth:u})}):null},dg=({defaultColor:n,rfId:r})=>{const o=Ne(c=>c.edges),l=Ne(c=>c.defaultEdgeOptions),a=re.useMemo(()=>T2(o,{id:r,defaultColor:n,defaultMarkerStart:l==null?void 0:l.markerStart,defaultMarkerEnd:l==null?void 0:l.markerEnd}),[o,l,r,n]);return a.length?B.jsx("svg",{className:"react-flow__marker","aria-hidden":"true",children:B.jsx("defs",{children:a.map(c=>B.jsx(LS,{id:c.id,type:c.type,color:c.color,width:c.width,height:c.height,markerUnits:c.markerUnits,strokeWidth:c.strokeWidth,orient:c.orient},c.id))})}):null};dg.displayName="MarkerDefinitions";var AS=re.memo(dg);function fg({x:n,y:r,label:o,labelStyle:l,labelShowBg:a=!0,labelBgStyle:c,labelBgPadding:u=[2,4],labelBgBorderRadius:d=2,children:f,className:g,...m}){const[h,v]=re.useState({x:1,y:0,width:0,height:0}),x=Ge(["react-flow__edge-textwrapper",g]),w=re.useRef(null);return re.useEffect(()=>{if(w.current){const C=w.current.getBBox();v({x:C.x,y:C.y,width:C.width,height:C.height})}},[o]),o?B.jsxs("g",{transform:`translate(${n-h.width/2} ${r-h.height/2})`,className:x,visibility:h.width?"visible":"hidden",...m,children:[a&&B.jsx("rect",{width:h.width+2*u[0],x:-u[0],y:-u[1],height:h.height+2*u[1],className:"react-flow__edge-textbg",style:c,rx:d,ry:d}),B.jsx("text",{className:"react-flow__edge-text",y:h.height/2,dy:"0.3em",ref:w,style:l,children:o}),f]}):null}fg.displayName="EdgeText";const RS=re.memo(fg);function ka({path:n,labelX:r,labelY:o,label:l,labelStyle:a,labelShowBg:c,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f,interactionWidth:g=20,...m}){return B.jsxs(B.Fragment,{children:[B.jsx("path",{...m,d:n,fill:"none",className:Ge(["react-flow__edge-path",m.className])}),g?B.jsx("path",{d:n,fill:"none",strokeOpacity:0,strokeWidth:g,className:"react-flow__edge-interaction"}):null,l&&Un(r)&&Un(o)?B.jsx(RS,{x:r,y:o,label:l,labelStyle:a,labelShowBg:c,labelBgStyle:u,labelBgPadding:d,labelBgBorderRadius:f}):null]})}function zp({pos:n,x1:r,y1:o,x2:l,y2:a}){return n===we.Left||n===we.Right?[.5*(r+l),o]:[r,.5*(o+a)]}function hg({sourceX:n,sourceY:r,sourcePosition:o=we.Bottom,targetX:l,targetY:a,targetPosition:c=we.Top}){const[u,d]=zp({pos:o,x1:n,y1:r,x2:l,y2:a}),[f,g]=zp({pos:c,x1:l,y1:a,x2:n,y2:r}),[m,h,v,x]=F0({sourceX:n,sourceY:r,targetX:l,targetY:a,sourceControlX:u,sourceControlY:d,targetControlX:f,targetControlY:g});return[`M${n},${r} C${u},${d} ${f},${g} ${l},${a}`,m,h,v,x]}function pg(n){return re.memo(({id:r,sourceX:o,sourceY:l,targetX:a,targetY:c,sourcePosition:u,targetPosition:d,label:f,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:x,style:w,markerEnd:C,markerStart:_,interactionWidth:k})=>{const[$,S,b]=hg({sourceX:o,sourceY:l,sourcePosition:u,targetX:a,targetY:c,targetPosition:d}),R=n.isInternal?void 0:r;return B.jsx(ka,{id:R,path:$,labelX:S,labelY:b,label:f,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:x,style:w,markerEnd:C,markerStart:_,interactionWidth:k})})}const IS=pg({isInternal:!1}),mg=pg({isInternal:!0});IS.displayName="SimpleBezierEdge";mg.displayName="SimpleBezierEdgeInternal";function gg(n){return re.memo(({id:r,sourceX:o,sourceY:l,targetX:a,targetY:c,label:u,labelStyle:d,labelShowBg:f,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,sourcePosition:x=we.Bottom,targetPosition:w=we.Top,markerEnd:C,markerStart:_,pathOptions:k,interactionWidth:$})=>{const[S,b,R]=Dc({sourceX:o,sourceY:l,sourcePosition:x,targetX:a,targetY:c,targetPosition:w,borderRadius:k==null?void 0:k.borderRadius,offset:k==null?void 0:k.offset,stepPosition:k==null?void 0:k.stepPosition}),N=n.isInternal?void 0:r;return B.jsx(ka,{id:N,path:S,labelX:b,labelY:R,label:u,labelStyle:d,labelShowBg:f,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:C,markerStart:_,interactionWidth:$})})}const yg=gg({isInternal:!1}),vg=gg({isInternal:!0});yg.displayName="SmoothStepEdge";vg.displayName="SmoothStepEdgeInternal";function xg(n){return re.memo(({id:r,...o})=>{var a;const l=n.isInternal?void 0:r;return B.jsx(yg,{...o,id:l,pathOptions:re.useMemo(()=>{var c;return{borderRadius:0,offset:(c=o.pathOptions)==null?void 0:c.offset}},[(a=o.pathOptions)==null?void 0:a.offset])})})}const DS=xg({isInternal:!1}),wg=xg({isInternal:!0});DS.displayName="StepEdge";wg.displayName="StepEdgeInternal";function _g(n){return re.memo(({id:r,sourceX:o,sourceY:l,targetX:a,targetY:c,label:u,labelStyle:d,labelShowBg:f,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:x,markerStart:w,interactionWidth:C})=>{const[_,k,$]=O0({sourceX:o,sourceY:l,targetX:a,targetY:c}),S=n.isInternal?void 0:r;return B.jsx(ka,{id:S,path:_,labelX:k,labelY:$,label:u,labelStyle:d,labelShowBg:f,labelBgStyle:g,labelBgPadding:m,labelBgBorderRadius:h,style:v,markerEnd:x,markerStart:w,interactionWidth:C})})}const FS=_g({isInternal:!1}),Sg=_g({isInternal:!0});FS.displayName="StraightEdge";Sg.displayName="StraightEdgeInternal";function kg(n){return re.memo(({id:r,sourceX:o,sourceY:l,targetX:a,targetY:c,sourcePosition:u=we.Bottom,targetPosition:d=we.Top,label:f,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:x,style:w,markerEnd:C,markerStart:_,pathOptions:k,interactionWidth:$})=>{const[S,b,R]=j0({sourceX:o,sourceY:l,sourcePosition:u,targetX:a,targetY:c,targetPosition:d,curvature:k==null?void 0:k.curvature}),N=n.isInternal?void 0:r;return B.jsx(ka,{id:N,path:S,labelX:b,labelY:R,label:f,labelStyle:g,labelShowBg:m,labelBgStyle:h,labelBgPadding:v,labelBgBorderRadius:x,style:w,markerEnd:C,markerStart:_,interactionWidth:$})})}const jS=kg({isInternal:!1}),Eg=kg({isInternal:!0});jS.displayName="BezierEdge";Eg.displayName="BezierEdgeInternal";const Op={default:Eg,straight:Sg,step:wg,smoothstep:vg,simplebezier:mg},Hp={sourceX:null,sourceY:null,targetX:null,targetY:null,sourcePosition:null,targetPosition:null},zS=(n,r,o)=>o===we.Left?n-r:o===we.Right?n+r:n,OS=(n,r,o)=>o===we.Top?n-r:o===we.Bottom?n+r:n,Bp="react-flow__edgeupdater";function Vp({position:n,centerX:r,centerY:o,radius:l=10,onMouseDown:a,onMouseEnter:c,onMouseOut:u,type:d}){return B.jsx("circle",{onMouseDown:a,onMouseEnter:c,onMouseOut:u,className:Ge([Bp,`${Bp}-${d}`]),cx:zS(r,l,n),cy:OS(o,l,n),r:l,stroke:"transparent",fill:"transparent"})}function HS({isReconnectable:n,reconnectRadius:r,edge:o,sourceX:l,sourceY:a,targetX:c,targetY:u,sourcePosition:d,targetPosition:f,onReconnect:g,onReconnectStart:m,onReconnectEnd:h,setReconnecting:v,setUpdateHover:x}){const w=je(),C=(b,R)=>{if(b.button!==0)return;const{autoPanOnConnect:N,domNode:F,connectionMode:P,connectionRadius:A,lib:O,onConnectStart:L,cancelConnection:D,nodeLookup:J,rfId:T,panBy:q,updateConnection:Q}=w.getState(),Y=R.type==="target",W=(M,z)=>{v(!1),h==null||h(M,o,R.type,z)},V=M=>g==null?void 0:g(o,M),X=(M,z)=>{v(!0),m==null||m(b,o,R.type),L==null||L(M,z)};zc.onPointerDown(b.nativeEvent,{autoPanOnConnect:N,connectionMode:P,connectionRadius:A,domNode:F,handleId:R.id,nodeId:R.nodeId,nodeLookup:J,isTarget:Y,edgeUpdaterType:R.type,lib:O,flowId:T,cancelConnection:D,panBy:q,isValidConnection:(...M)=>{var z,j;return((j=(z=w.getState()).isValidConnection)==null?void 0:j.call(z,...M))??!0},onConnect:V,onConnectStart:X,onConnectEnd:(...M)=>{var z,j;return(j=(z=w.getState()).onConnectEnd)==null?void 0:j.call(z,...M)},onReconnectEnd:W,updateConnection:Q,getTransform:()=>w.getState().transform,getFromHandle:()=>w.getState().connection.fromHandle,dragThreshold:w.getState().connectionDragThreshold,handleDomNode:b.currentTarget})},_=b=>C(b,{nodeId:o.target,id:o.targetHandle??null,type:"target"}),k=b=>C(b,{nodeId:o.source,id:o.sourceHandle??null,type:"source"}),$=()=>x(!0),S=()=>x(!1);return B.jsxs(B.Fragment,{children:[(n===!0||n==="source")&&B.jsx(Vp,{position:d,centerX:l,centerY:a,radius:r,onMouseDown:_,onMouseEnter:$,onMouseOut:S,type:"source"}),(n===!0||n==="target")&&B.jsx(Vp,{position:f,centerX:c,centerY:u,radius:r,onMouseDown:k,onMouseEnter:$,onMouseOut:S,type:"target"})]})}function BS({id:n,edgesFocusable:r,edgesReconnectable:o,elementsSelectable:l,onClick:a,onDoubleClick:c,onContextMenu:u,onMouseEnter:d,onMouseMove:f,onMouseLeave:g,reconnectRadius:m,onReconnect:h,onReconnectStart:v,onReconnectEnd:x,rfId:w,edgeTypes:C,noPanClassName:_,onError:k,disableKeyboardA11y:$}){let S=Ne(he=>he.edgeLookup.get(n));const b=Ne(he=>he.defaultEdgeOptions);S=b?{...b,...S}:S;let R=S.type||"default",N=(C==null?void 0:C[R])||Op[R];N===void 0&&(k==null||k("011",Gn.error011(R)),R="default",N=(C==null?void 0:C.default)||Op.default);const F=!!(S.focusable||r&&typeof S.focusable>"u"),P=typeof h<"u"&&(S.reconnectable||o&&typeof S.reconnectable>"u"),A=!!(S.selectable||l&&typeof S.selectable>"u"),O=re.useRef(null),[L,D]=re.useState(!1),[J,T]=re.useState(!1),q=je(),{zIndex:Q,sourceX:Y,sourceY:W,targetX:V,targetY:X,sourcePosition:M,targetPosition:z}=Ne(re.useCallback(he=>{const de=he.nodeLookup.get(S.source),ke=he.nodeLookup.get(S.target);if(!de||!ke)return{zIndex:S.zIndex,...Hp};const be=M2({id:n,sourceNode:de,targetNode:ke,sourceHandle:S.sourceHandle||null,targetHandle:S.targetHandle||null,connectionMode:he.connectionMode,onError:k});return{zIndex:S2({selected:S.selected,zIndex:S.zIndex,sourceNode:de,targetNode:ke,elevateOnSelect:he.elevateEdgesOnSelect,zIndexMode:he.zIndexMode}),...be||Hp}},[S.source,S.target,S.sourceHandle,S.targetHandle,S.selected,S.zIndex]),Fe),j=re.useMemo(()=>S.markerStart?`url('#${Fc(S.markerStart,w)}')`:void 0,[S.markerStart,w]),U=re.useMemo(()=>S.markerEnd?`url('#${Fc(S.markerEnd,w)}')`:void 0,[S.markerEnd,w]);if(S.hidden||Y===null||W===null||V===null||X===null)return null;const K=he=>{var $e;const{addSelectedEdges:de,unselectNodesAndEdges:ke,multiSelectionActive:be}=q.getState();A&&(q.setState({nodesSelectionActive:!1}),S.selected&&be?(ke({nodes:[],edges:[S]}),($e=O.current)==null||$e.blur()):de([n])),a&&a(he,S)},ie=c?he=>{c(he,{...S})}:void 0,le=u?he=>{u(he,{...S})}:void 0,Z=d?he=>{d(he,{...S})}:void 0,oe=f?he=>{f(he,{...S})}:void 0,fe=g?he=>{g(he,{...S})}:void 0,xe=he=>{var de;if(!$&&k0.includes(he.key)&&A){const{unselectNodesAndEdges:ke,addSelectedEdges:be}=q.getState();he.key==="Escape"?((de=O.current)==null||de.blur(),ke({edges:[S]})):be([n])}};return B.jsx("svg",{style:{zIndex:Q},children:B.jsxs("g",{className:Ge(["react-flow__edge",`react-flow__edge-${R}`,S.className,_,{selected:S.selected,animated:S.animated,inactive:!A&&!a,updating:L,selectable:A}]),onClick:K,onDoubleClick:ie,onContextMenu:le,onMouseEnter:Z,onMouseMove:oe,onMouseLeave:fe,onKeyDown:F?xe:void 0,tabIndex:F?0:void 0,role:S.ariaRole??(F?"group":"img"),"aria-roledescription":"edge","data-id":n,"data-testid":`rf__edge-${n}`,"aria-label":S.ariaLabel===null?void 0:S.ariaLabel||`Edge from ${S.source} to ${S.target}`,"aria-describedby":F?`${ng}-${w}`:void 0,ref:O,...S.domAttributes,children:[!J&&B.jsx(N,{id:n,source:S.source,target:S.target,type:S.type,selected:S.selected,animated:S.animated,selectable:A,deletable:S.deletable??!0,label:S.label,labelStyle:S.labelStyle,labelShowBg:S.labelShowBg,labelBgStyle:S.labelBgStyle,labelBgPadding:S.labelBgPadding,labelBgBorderRadius:S.labelBgBorderRadius,sourceX:Y,sourceY:W,targetX:V,targetY:X,sourcePosition:M,targetPosition:z,data:S.data,style:S.style,sourceHandleId:S.sourceHandle,targetHandleId:S.targetHandle,markerStart:j,markerEnd:U,pathOptions:"pathOptions"in S?S.pathOptions:void 0,interactionWidth:S.interactionWidth}),P&&B.jsx(HS,{edge:S,isReconnectable:P,reconnectRadius:m,onReconnect:h,onReconnectStart:v,onReconnectEnd:x,sourceX:Y,sourceY:W,targetX:V,targetY:X,sourcePosition:M,targetPosition:z,setUpdateHover:D,setReconnecting:T})]})})}var VS=re.memo(BS);const WS=n=>({edgesFocusable:n.edgesFocusable,edgesReconnectable:n.edgesReconnectable,elementsSelectable:n.elementsSelectable,connectionMode:n.connectionMode,onError:n.onError});function Cg({defaultMarkerColor:n,onlyRenderVisibleElements:r,rfId:o,edgeTypes:l,noPanClassName:a,onReconnect:c,onEdgeContextMenu:u,onEdgeMouseEnter:d,onEdgeMouseMove:f,onEdgeMouseLeave:g,onEdgeClick:m,reconnectRadius:h,onEdgeDoubleClick:v,onReconnectStart:x,onReconnectEnd:w,disableKeyboardA11y:C}){const{edgesFocusable:_,edgesReconnectable:k,elementsSelectable:$,onError:S}=Ne(WS,Fe),b=NS(r);return B.jsxs("div",{className:"react-flow__edges",children:[B.jsx(AS,{defaultColor:n,rfId:o}),b.map(R=>B.jsx(VS,{id:R,edgesFocusable:_,edgesReconnectable:k,elementsSelectable:$,noPanClassName:a,onReconnect:c,onContextMenu:u,onMouseEnter:d,onMouseMove:f,onMouseLeave:g,onClick:m,reconnectRadius:h,onDoubleClick:v,onReconnectStart:x,onReconnectEnd:w,rfId:o,onError:S,edgeTypes:l,disableKeyboardA11y:C},R))]})}Cg.displayName="EdgeRenderer";const US=re.memo(Cg),QS=n=>`translate(${n.transform[0]}px,${n.transform[1]}px) scale(${n.transform[2]})`;function GS({children:n}){const r=Ne(QS);return B.jsx("div",{className:"react-flow__viewport xyflow__viewport react-flow__container",style:{transform:r},children:n})}function qS(n){const r=_a(),o=re.useRef(!1);re.useEffect(()=>{!o.current&&r.viewportInitialized&&n&&(setTimeout(()=>n(r),1),o.current=!0)},[n,r.viewportInitialized])}const YS=n=>{var r;return(r=n.panZoom)==null?void 0:r.syncViewport};function XS(n){const r=Ne(YS),o=je();return re.useEffect(()=>{n&&(r==null||r(n),o.setState({transform:[n.x,n.y,n.zoom]}))},[n,r]),null}function KS(n){return n.connection.inProgress?{...n.connection,to:si(n.connection.to,n.transform)}:{...n.connection}}function ZS(n){return KS}function JS(n){const r=ZS();return Ne(r,Fe)}const e3=n=>({nodesConnectable:n.nodesConnectable,isValid:n.connection.isValid,inProgress:n.connection.inProgress,width:n.width,height:n.height});function n3({containerStyle:n,style:r,type:o,component:l}){const{nodesConnectable:a,width:c,height:u,isValid:d,inProgress:f}=Ne(e3,Fe);return!(c&&a&&f)?null:B.jsx("svg",{style:n,width:c,height:u,className:"react-flow__connectionline react-flow__container",children:B.jsx("g",{className:Ge(["react-flow__connection",b0(d)]),children:B.jsx(bg,{style:r,type:o,CustomComponent:l,isValid:d})})})}const bg=({style:n,type:r=Wt.Bezier,CustomComponent:o,isValid:l})=>{const{inProgress:a,from:c,fromNode:u,fromHandle:d,fromPosition:f,to:g,toNode:m,toHandle:h,toPosition:v,pointer:x}=JS();if(!a)return;if(o)return B.jsx(o,{connectionLineType:r,connectionLineStyle:n,fromNode:u,fromHandle:d,fromX:c.x,fromY:c.y,toX:g.x,toY:g.y,fromPosition:f,toPosition:v,connectionStatus:b0(l),toNode:m,toHandle:h,pointer:x});let w="";const C={sourceX:c.x,sourceY:c.y,sourcePosition:f,targetX:g.x,targetY:g.y,targetPosition:v};switch(r){case Wt.Bezier:[w]=j0(C);break;case Wt.SimpleBezier:[w]=hg(C);break;case Wt.Step:[w]=Dc({...C,borderRadius:0});break;case Wt.SmoothStep:[w]=Dc(C);break;default:[w]=O0(C)}return B.jsx("path",{d:w,fill:"none",className:"react-flow__connection-path",style:n})};bg.displayName="ConnectionLine";const t3={};function Wp(n=t3){re.useRef(n),je(),re.useEffect(()=>{},[n])}function r3(){je(),re.useRef(!1),re.useEffect(()=>{},[])}function $g({nodeTypes:n,edgeTypes:r,onInit:o,onNodeClick:l,onEdgeClick:a,onNodeDoubleClick:c,onEdgeDoubleClick:u,onNodeMouseEnter:d,onNodeMouseMove:f,onNodeMouseLeave:g,onNodeContextMenu:m,onSelectionContextMenu:h,onSelectionStart:v,onSelectionEnd:x,connectionLineType:w,connectionLineStyle:C,connectionLineComponent:_,connectionLineContainerStyle:k,selectionKeyCode:$,selectionOnDrag:S,selectionMode:b,multiSelectionKeyCode:R,panActivationKeyCode:N,zoomActivationKeyCode:F,deleteKeyCode:P,onlyRenderVisibleElements:A,elementsSelectable:O,defaultViewport:L,translateExtent:D,minZoom:J,maxZoom:T,preventScrolling:q,defaultMarkerColor:Q,zoomOnScroll:Y,zoomOnPinch:W,panOnScroll:V,panOnScrollSpeed:X,panOnScrollMode:M,zoomOnDoubleClick:z,panOnDrag:j,autoPanOnSelection:U,onPaneClick:K,onPaneMouseEnter:ie,onPaneMouseMove:le,onPaneMouseLeave:Z,onPaneScroll:oe,onPaneContextMenu:fe,paneClickDistance:xe,nodeClickDistance:he,onEdgeContextMenu:de,onEdgeMouseEnter:ke,onEdgeMouseMove:be,onEdgeMouseLeave:$e,reconnectRadius:Ae,onReconnect:sn,onReconnectStart:dn,onReconnectEnd:nn,noDragClassName:tn,noWheelClassName:lt,noPanClassName:Xn,disableKeyboardA11y:Kn,nodeExtent:fn,rfId:Pn,viewport:wn,onViewportChange:Mn}){return Wp(n),Wp(r),r3(),qS(o),XS(wn),B.jsx(vS,{onPaneClick:K,onPaneMouseEnter:ie,onPaneMouseMove:le,onPaneMouseLeave:Z,onPaneContextMenu:fe,onPaneScroll:oe,paneClickDistance:xe,deleteKeyCode:P,selectionKeyCode:$,selectionOnDrag:S,selectionMode:b,onSelectionStart:v,onSelectionEnd:x,multiSelectionKeyCode:R,panActivationKeyCode:N,zoomActivationKeyCode:F,elementsSelectable:O,zoomOnScroll:Y,zoomOnPinch:W,zoomOnDoubleClick:z,panOnScroll:V,panOnScrollSpeed:X,panOnScrollMode:M,panOnDrag:j,autoPanOnSelection:U,defaultViewport:L,translateExtent:D,minZoom:J,maxZoom:T,onSelectionContextMenu:h,preventScrolling:q,noDragClassName:tn,noWheelClassName:lt,noPanClassName:Xn,disableKeyboardA11y:Kn,onViewportChange:Mn,isControlledViewport:!!wn,children:B.jsxs(GS,{children:[B.jsx(US,{edgeTypes:r,onEdgeClick:a,onEdgeDoubleClick:u,onReconnect:sn,onReconnectStart:dn,onReconnectEnd:nn,onlyRenderVisibleElements:A,onEdgeContextMenu:de,onEdgeMouseEnter:ke,onEdgeMouseMove:be,onEdgeMouseLeave:$e,reconnectRadius:Ae,defaultMarkerColor:Q,noPanClassName:Xn,disableKeyboardA11y:Kn,rfId:Pn}),B.jsx(n3,{style:C,type:w,component:_,containerStyle:k}),B.jsx("div",{className:"react-flow__edgelabel-renderer"}),B.jsx($S,{nodeTypes:n,onNodeClick:l,onNodeDoubleClick:c,onNodeMouseEnter:d,onNodeMouseMove:f,onNodeMouseLeave:g,onNodeContextMenu:m,nodeClickDistance:he,onlyRenderVisibleElements:A,noPanClassName:Xn,noDragClassName:tn,disableKeyboardA11y:Kn,nodeExtent:fn,rfId:Pn}),B.jsx("div",{className:"react-flow__viewport-portal"})]})})}$g.displayName="GraphView";const i3=re.memo($g),o3=T0(),Up=({nodes:n,edges:r,defaultNodes:o,defaultEdges:l,width:a,height:c,fitView:u,fitViewOptions:d,minZoom:f=.5,maxZoom:g=2,nodeOrigin:m,nodeExtent:h,zIndexMode:v="basic"}={})=>{const x=new Map,w=new Map,C=new Map,_=new Map,k=l??r??[],$=o??n??[],S=m??[0,0],b=h??uo;V0(C,_,k);const{nodesInitialized:R}=jc($,x,w,{nodeOrigin:S,nodeExtent:b,zIndexMode:v});let N=[0,0,1];if(u&&a&&c){const F=xo(x,{filter:L=>!!((L.width||L.initialWidth)&&(L.height||L.initialHeight))}),{x:P,y:A,zoom:O}=Jc(F,a,c,f,g,(d==null?void 0:d.padding)??.1);N=[P,A,O]}return{rfId:"1",width:a??0,height:c??0,transform:N,nodes:$,nodesInitialized:R,nodeLookup:x,parentLookup:w,edges:k,edgeLookup:_,connectionLookup:C,onNodesChange:null,onEdgesChange:null,hasDefaultNodes:o!==void 0,hasDefaultEdges:l!==void 0,panZoom:null,minZoom:f,maxZoom:g,translateExtent:uo,nodeExtent:b,nodesSelectionActive:!1,userSelectionActive:!1,userSelectionRect:null,connectionMode:ti.Strict,domNode:null,paneDragging:!1,noPanClassName:"nopan",nodeOrigin:S,nodeDragThreshold:1,connectionDragThreshold:1,snapGrid:[15,15],snapToGrid:!1,nodesDraggable:!0,nodesConnectable:!0,nodesFocusable:!0,edgesFocusable:!0,edgesReconnectable:!0,elementsSelectable:!0,elevateNodesOnSelect:!0,elevateEdgesOnSelect:!0,selectNodesOnDrag:!0,multiSelectionActive:!1,fitViewQueued:u??!1,fitViewOptions:d,fitViewResolver:null,connection:{...C0},connectionClickStartHandle:null,connectOnClick:!0,ariaLiveMessage:"",autoPanOnConnect:!0,autoPanOnNodeDrag:!0,autoPanOnNodeFocus:!0,autoPanSpeed:15,connectionRadius:20,onError:o3,isValidConnection:void 0,onSelectionChangeHandlers:[],lib:"react",debug:!1,ariaLabelConfig:E0,zIndexMode:v,onNodesChangeMiddlewareMap:new Map,onEdgesChangeMiddlewareMap:new Map}},l3=({nodes:n,edges:r,defaultNodes:o,defaultEdges:l,width:a,height:c,fitView:u,fitViewOptions:d,minZoom:f,maxZoom:g,nodeOrigin:m,nodeExtent:h,zIndexMode:v})=>x_((x,w)=>{async function C(){const{nodeLookup:_,panZoom:k,fitViewOptions:$,fitViewResolver:S,width:b,height:R,minZoom:N,maxZoom:F}=w();k&&(await m2({nodes:_,width:b,height:R,panZoom:k,minZoom:N,maxZoom:F},$),S==null||S.resolve(!0),x({fitViewResolver:null}))}return{...Up({nodes:n,edges:r,width:a,height:c,fitView:u,fitViewOptions:d,minZoom:f,maxZoom:g,nodeOrigin:m,nodeExtent:h,defaultNodes:o,defaultEdges:l,zIndexMode:v}),setNodes:_=>{const{nodeLookup:k,parentLookup:$,nodeOrigin:S,elevateNodesOnSelect:b,fitViewQueued:R,zIndexMode:N,nodesSelectionActive:F}=w(),{nodesInitialized:P,hasSelectedNodes:A}=jc(_,k,$,{nodeOrigin:S,nodeExtent:h,elevateNodesOnSelect:b,checkEquality:!0,zIndexMode:N}),O=F&&A;R&&P?(C(),x({nodes:_,nodesInitialized:P,fitViewQueued:!1,fitViewOptions:void 0,nodesSelectionActive:O})):x({nodes:_,nodesInitialized:P,nodesSelectionActive:O})},setEdges:_=>{const{connectionLookup:k,edgeLookup:$}=w();V0(k,$,_),x({edges:_})},setDefaultNodesAndEdges:(_,k)=>{if(_){const{setNodes:$}=w();$(_),x({hasDefaultNodes:!0})}if(k){const{setEdges:$}=w();$(k),x({hasDefaultEdges:!0})}},updateNodeInternals:_=>{const{triggerNodeChanges:k,nodeLookup:$,parentLookup:S,domNode:b,nodeOrigin:R,nodeExtent:N,debug:F,fitViewQueued:P,zIndexMode:A}=w(),{changes:O,updatedInternals:L}=j2(_,$,S,b,R,N,A);L&&(R2($,S,{nodeOrigin:R,nodeExtent:N,zIndexMode:A}),P?(C(),x({fitViewQueued:!1,fitViewOptions:void 0})):x({}),(O==null?void 0:O.length)>0&&(F&&console.log("React Flow: trigger node changes",O),k==null||k(O)))},updateNodePositions:(_,k=!1)=>{const $=[];let S=[];const{nodeLookup:b,triggerNodeChanges:R,connection:N,updateConnection:F,onNodesChangeMiddlewareMap:P}=w();for(const[A,O]of _){const L=b.get(A),D=!!(L!=null&&L.expandParent&&(L!=null&&L.parentId)&&(O!=null&&O.position)),J={id:A,type:"position",position:D?{x:Math.max(0,O.position.x),y:Math.max(0,O.position.y)}:O.position,dragging:k};if(L&&N.inProgress&&N.fromNode.id===L.id){const T=xr(L,N.fromHandle,we.Left,!0);F({...N,from:T})}D&&L.parentId&&$.push({id:A,parentId:L.parentId,rect:{...O.internals.positionAbsolute,width:O.measured.width??0,height:O.measured.height??0}}),S.push(J)}if($.length>0){const{parentLookup:A,nodeOrigin:O}=w(),L=od($,b,A,O);S.push(...L)}for(const A of P.values())S=A(S);R(S)},triggerNodeChanges:_=>{const{onNodesChange:k,setNodes:$,nodes:S,hasDefaultNodes:b,debug:R}=w();if(_!=null&&_.length){if(b){const N=O_(_,S);$(N)}R&&console.log("React Flow: trigger node changes",_),k==null||k(_)}},triggerEdgeChanges:_=>{const{onEdgesChange:k,setEdges:$,edges:S,hasDefaultEdges:b,debug:R}=w();if(_!=null&&_.length){if(b){const N=H_(_,S);$(N)}R&&console.log("React Flow: trigger edge changes",_),k==null||k(_)}},addSelectedNodes:_=>{const{multiSelectionActive:k,edgeLookup:$,nodeLookup:S,triggerNodeChanges:b,triggerEdgeChanges:R}=w();if(k){const N=_.map(F=>dr(F,!0));b(N);return}b(Kr(S,new Set([..._]),!0)),R(Kr($))},addSelectedEdges:_=>{const{multiSelectionActive:k,edgeLookup:$,nodeLookup:S,triggerNodeChanges:b,triggerEdgeChanges:R}=w();if(k){const N=_.map(F=>dr(F,!0));R(N);return}R(Kr($,new Set([..._]))),b(Kr(S,new Set,!0))},unselectNodesAndEdges:({nodes:_,edges:k}={})=>{const{edges:$,nodes:S,nodeLookup:b,triggerNodeChanges:R,triggerEdgeChanges:N}=w(),F=_||S,P=k||$,A=[];for(const L of F){if(!L.selected)continue;const D=b.get(L.id);D&&(D.selected=!1),A.push(dr(L.id,!1))}const O=[];for(const L of P)L.selected&&O.push(dr(L.id,!1));R(A),N(O)},setMinZoom:_=>{const{panZoom:k,maxZoom:$}=w();k==null||k.setScaleExtent([_,$]),x({minZoom:_})},setMaxZoom:_=>{const{panZoom:k,minZoom:$}=w();k==null||k.setScaleExtent([$,_]),x({maxZoom:_})},setTranslateExtent:_=>{var k;(k=w().panZoom)==null||k.setTranslateExtent(_),x({translateExtent:_})},resetSelectedElements:()=>{const{edges:_,nodes:k,triggerNodeChanges:$,triggerEdgeChanges:S,elementsSelectable:b}=w();if(!b)return;const R=k.reduce((F,P)=>P.selected?[...F,dr(P.id,!1)]:F,[]),N=_.reduce((F,P)=>P.selected?[...F,dr(P.id,!1)]:F,[]);$(R),S(N)},setNodeExtent:_=>{const{nodes:k,nodeLookup:$,parentLookup:S,nodeOrigin:b,elevateNodesOnSelect:R,nodeExtent:N,zIndexMode:F}=w();_[0][0]===N[0][0]&&_[0][1]===N[0][1]&&_[1][0]===N[1][0]&&_[1][1]===N[1][1]||(jc(k,$,S,{nodeOrigin:b,nodeExtent:_,elevateNodesOnSelect:R,checkEquality:!1,zIndexMode:F}),x({nodeExtent:_}))},panBy:_=>{const{transform:k,width:$,height:S,panZoom:b,translateExtent:R}=w();return z2({delta:_,panZoom:b,transform:k,translateExtent:R,width:$,height:S})},setCenter:async(_,k,$)=>{const{width:S,height:b,maxZoom:R,panZoom:N}=w();if(!N)return!1;const F=typeof($==null?void 0:$.zoom)<"u"?$.zoom:R;return await N.setViewport({x:S/2-_*F,y:b/2-k*F,zoom:F},{duration:$==null?void 0:$.duration,ease:$==null?void 0:$.ease,interpolate:$==null?void 0:$.interpolate}),!0},cancelConnection:()=>{x({connection:{...C0}})},updateConnection:_=>{x({connection:_})},reset:()=>x({...Up()})}},Object.is);function Ng({initialNodes:n,initialEdges:r,defaultNodes:o,defaultEdges:l,initialWidth:a,initialHeight:c,initialMinZoom:u,initialMaxZoom:d,initialFitViewOptions:f,fitView:g,nodeOrigin:m,nodeExtent:h,zIndexMode:v,children:x}){const[w]=re.useState(()=>l3({nodes:n,edges:r,defaultNodes:o,defaultEdges:l,width:a,height:c,fitView:g,minZoom:u,maxZoom:d,fitViewOptions:f,nodeOrigin:m,nodeExtent:h,zIndexMode:v}));return B.jsx(w_,{value:w,children:B.jsx(G_,{children:x})})}function a3({children:n,nodes:r,edges:o,defaultNodes:l,defaultEdges:a,width:c,height:u,fitView:d,fitViewOptions:f,minZoom:g,maxZoom:m,nodeOrigin:h,nodeExtent:v,zIndexMode:x}){return re.useContext(xa)?B.jsx(B.Fragment,{children:n}):B.jsx(Ng,{initialNodes:r,initialEdges:o,defaultNodes:l,defaultEdges:a,initialWidth:c,initialHeight:u,fitView:d,initialFitViewOptions:f,initialMinZoom:g,initialMaxZoom:m,nodeOrigin:h,nodeExtent:v,zIndexMode:x,children:n})}const s3={width:"100%",height:"100%",overflow:"hidden",position:"relative",zIndex:0};function u3({nodes:n,edges:r,defaultNodes:o,defaultEdges:l,className:a,nodeTypes:c,edgeTypes:u,onNodeClick:d,onEdgeClick:f,onInit:g,onMove:m,onMoveStart:h,onMoveEnd:v,onConnect:x,onConnectStart:w,onConnectEnd:C,onClickConnectStart:_,onClickConnectEnd:k,onNodeMouseEnter:$,onNodeMouseMove:S,onNodeMouseLeave:b,onNodeContextMenu:R,onNodeDoubleClick:N,onNodeDragStart:F,onNodeDrag:P,onNodeDragStop:A,onNodesDelete:O,onEdgesDelete:L,onDelete:D,onSelectionChange:J,onSelectionDragStart:T,onSelectionDrag:q,onSelectionDragStop:Q,onSelectionContextMenu:Y,onSelectionStart:W,onSelectionEnd:V,onBeforeDelete:X,connectionMode:M,connectionLineType:z=Wt.Bezier,connectionLineStyle:j,connectionLineComponent:U,connectionLineContainerStyle:K,deleteKeyCode:ie="Backspace",selectionKeyCode:le="Shift",selectionOnDrag:Z=!1,selectionMode:oe=co.Full,panActivationKeyCode:fe="Space",multiSelectionKeyCode:xe=ho()?"Meta":"Control",zoomActivationKeyCode:he=ho()?"Meta":"Control",snapToGrid:de,snapGrid:ke,onlyRenderVisibleElements:be=!1,selectNodesOnDrag:$e,nodesDraggable:Ae,autoPanOnNodeFocus:sn,nodesConnectable:dn,nodesFocusable:nn,nodeOrigin:tn=tg,edgesFocusable:lt,edgesReconnectable:Xn,elementsSelectable:Kn=!0,defaultViewport:fn=A_,minZoom:Pn=.5,maxZoom:wn=2,translateExtent:Mn=uo,preventScrolling:_o=!0,nodeExtent:at,defaultMarkerColor:Qt="#b1b1b7",zoomOnScroll:Ea=!0,zoomOnPinch:So=!0,panOnScroll:ko=!1,panOnScrollSpeed:Ca=.5,panOnScrollMode:ui=pr.Free,zoomOnDoubleClick:ci=!0,panOnDrag:di=!0,onPaneClick:fi,onPaneMouseEnter:hi,onPaneMouseMove:_t,onPaneMouseLeave:St,onPaneScroll:Eo,onPaneContextMenu:Co,paneClickDistance:bo=1,nodeClickDistance:$o=0,children:No,onReconnect:pi,onReconnectStart:Po,onReconnectEnd:Gt,onEdgeContextMenu:mi,onEdgeDoubleClick:qt,onEdgeMouseEnter:ba,onEdgeMouseMove:Yt,onEdgeMouseLeave:wr,reconnectRadius:_r=10,onNodesChange:gi,onEdgesChange:$a,noDragClassName:Na="nodrag",noWheelClassName:Pa="nowheel",noPanClassName:Zn="nopan",fitView:yi,fitViewOptions:vi,connectOnClick:Ma,attributionPosition:Mo,proOptions:To,defaultEdgeOptions:Lo,elevateNodesOnSelect:Ao=!0,elevateEdgesOnSelect:Ta=!1,disableKeyboardA11y:Ro=!1,autoPanOnConnect:ze,autoPanOnNodeDrag:La,autoPanOnSelection:xi=!0,autoPanSpeed:Io,connectionRadius:Sr,isValidConnection:Aa,onError:Do,style:kr,id:_n,nodeDragThreshold:Ra,connectionDragThreshold:Sn,viewport:Ia,onViewportChange:Da,width:Fa,height:Er,colorMode:Cr="light",debug:Xt,onScroll:st,ariaLabelConfig:ja,zIndexMode:Fo="basic",...wi},jo){const Kt=_n||"1",Zt=F_(Cr),za=re.useCallback(br=>{br.currentTarget.scrollTo({top:0,left:0,behavior:"instant"}),st==null||st(br)},[st]);return B.jsx("div",{"data-testid":"rf__wrapper",...wi,onScroll:za,style:{...kr,...s3},ref:jo,className:Ge(["react-flow",a,Zt]),id:_n,role:"application",children:B.jsxs(a3,{nodes:n,edges:r,width:Fa,height:Er,fitView:yi,fitViewOptions:vi,minZoom:Pn,maxZoom:wn,nodeOrigin:tn,nodeExtent:at,zIndexMode:Fo,children:[B.jsx(D_,{nodes:n,edges:r,defaultNodes:o,defaultEdges:l,onConnect:x,onConnectStart:w,onConnectEnd:C,onClickConnectStart:_,onClickConnectEnd:k,nodesDraggable:Ae,autoPanOnNodeFocus:sn,nodesConnectable:dn,nodesFocusable:nn,edgesFocusable:lt,edgesReconnectable:Xn,elementsSelectable:Kn,elevateNodesOnSelect:Ao,elevateEdgesOnSelect:Ta,minZoom:Pn,maxZoom:wn,nodeExtent:at,onNodesChange:gi,onEdgesChange:$a,snapToGrid:de,snapGrid:ke,connectionMode:M,translateExtent:Mn,connectOnClick:Ma,defaultEdgeOptions:Lo,fitView:yi,fitViewOptions:vi,onNodesDelete:O,onEdgesDelete:L,onDelete:D,onNodeDragStart:F,onNodeDrag:P,onNodeDragStop:A,onSelectionDrag:q,onSelectionDragStart:T,onSelectionDragStop:Q,onMove:m,onMoveStart:h,onMoveEnd:v,noPanClassName:Zn,nodeOrigin:tn,rfId:Kt,autoPanOnConnect:ze,autoPanOnNodeDrag:La,autoPanSpeed:Io,onError:Do,connectionRadius:Sr,isValidConnection:Aa,selectNodesOnDrag:$e,nodeDragThreshold:Ra,connectionDragThreshold:Sn,onBeforeDelete:X,debug:Xt,ariaLabelConfig:ja,zIndexMode:Fo}),B.jsx(i3,{onInit:g,onNodeClick:d,onEdgeClick:f,onNodeMouseEnter:$,onNodeMouseMove:S,onNodeMouseLeave:b,onNodeContextMenu:R,onNodeDoubleClick:N,nodeTypes:c,edgeTypes:u,connectionLineType:z,connectionLineStyle:j,connectionLineComponent:U,connectionLineContainerStyle:K,selectionKeyCode:le,selectionOnDrag:Z,selectionMode:oe,deleteKeyCode:ie,multiSelectionKeyCode:xe,panActivationKeyCode:fe,zoomActivationKeyCode:he,onlyRenderVisibleElements:be,defaultViewport:fn,translateExtent:Mn,minZoom:Pn,maxZoom:wn,preventScrolling:_o,zoomOnScroll:Ea,zoomOnPinch:So,zoomOnDoubleClick:ci,panOnScroll:ko,panOnScrollSpeed:Ca,panOnScrollMode:ui,panOnDrag:di,autoPanOnSelection:xi,onPaneClick:fi,onPaneMouseEnter:hi,onPaneMouseMove:_t,onPaneMouseLeave:St,onPaneScroll:Eo,onPaneContextMenu:Co,paneClickDistance:bo,nodeClickDistance:$o,onSelectionContextMenu:Y,onSelectionStart:W,onSelectionEnd:V,onReconnect:pi,onReconnectStart:Po,onReconnectEnd:Gt,onEdgeContextMenu:mi,onEdgeDoubleClick:qt,onEdgeMouseEnter:ba,onEdgeMouseMove:Yt,onEdgeMouseLeave:wr,reconnectRadius:_r,defaultMarkerColor:Qt,noDragClassName:Na,noWheelClassName:Pa,noPanClassName:Zn,rfId:Kt,disableKeyboardA11y:Ro,nodeExtent:at,viewport:Ia,onViewportChange:Da}),B.jsx(L_,{onSelectionChange:J}),No,B.jsx($_,{proOptions:To,position:Mo}),B.jsx(b_,{rfId:Kt,disableKeyboardA11y:Ro})]})})}var c3=ig(u3);function d3({dimensions:n,lineWidth:r,variant:o,className:l}){return B.jsx("path",{strokeWidth:r,d:`M${n[0]/2} 0 V${n[1]} M0 ${n[1]/2} H${n[0]}`,className:Ge(["react-flow__background-pattern",o,l])})}function f3({radius:n,className:r}){return B.jsx("circle",{cx:n,cy:n,r:n,className:Ge(["react-flow__background-pattern","dots",r])})}var Ut;(function(n){n.Lines="lines",n.Dots="dots",n.Cross="cross"})(Ut||(Ut={}));const h3={[Ut.Dots]:1,[Ut.Lines]:1,[Ut.Cross]:6},p3=n=>({transform:n.transform,patternId:`pattern-${n.rfId}`});function Pg({id:n,variant:r=Ut.Dots,gap:o=20,size:l,lineWidth:a=1,offset:c=0,color:u,bgColor:d,style:f,className:g,patternClassName:m}){const h=re.useRef(null),{transform:v,patternId:x}=Ne(p3,Fe),w=l||h3[r],C=r===Ut.Dots,_=r===Ut.Cross,k=Array.isArray(o)?o:[o,o],$=[k[0]*v[2]||1,k[1]*v[2]||1],S=w*v[2],b=Array.isArray(c)?c:[c,c],R=_?[S,S]:$,N=[b[0]*v[2]||1+R[0]/2,b[1]*v[2]||1+R[1]/2],F=`${x}${n||""}`;return B.jsxs("svg",{className:Ge(["react-flow__background",g]),style:{...f,...Sa,"--xy-background-color-props":d,"--xy-background-pattern-color-props":u},ref:h,"data-testid":"rf__background",children:[B.jsx("pattern",{id:F,x:v[0]%$[0],y:v[1]%$[1],width:$[0],height:$[1],patternUnits:"userSpaceOnUse",patternTransform:`translate(-${N[0]},-${N[1]})`,children:C?B.jsx(f3,{radius:S/2,className:m}):B.jsx(d3,{dimensions:R,lineWidth:a,variant:r,className:m})}),B.jsx("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:`url(#${F})`})]})}Pg.displayName="Background";const m3=re.memo(Pg);function g3(){return B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",children:B.jsx("path",{d:"M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z"})})}function y3(){return B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 5",children:B.jsx("path",{d:"M0 0h32v4.2H0z"})})}function v3(){return B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 30",children:B.jsx("path",{d:"M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z"})})}function x3(){return B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:B.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z"})})}function w3(){return B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 25 32",children:B.jsx("path",{d:"M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z"})})}function ql({children:n,className:r,...o}){return B.jsx("button",{type:"button",className:Ge(["react-flow__controls-button",r]),...o,children:n})}const _3=n=>({isInteractive:n.nodesDraggable||n.nodesConnectable||n.elementsSelectable,minZoomReached:n.transform[2]<=n.minZoom,maxZoomReached:n.transform[2]>=n.maxZoom,ariaLabelConfig:n.ariaLabelConfig});function Mg({style:n,showZoom:r=!0,showFitView:o=!0,showInteractive:l=!0,fitViewOptions:a,onZoomIn:c,onZoomOut:u,onFitView:d,onInteractiveChange:f,className:g,children:m,position:h="bottom-left",orientation:v="vertical","aria-label":x}){const w=je(),{isInteractive:C,minZoomReached:_,maxZoomReached:k,ariaLabelConfig:$}=Ne(_3,Fe),{zoomIn:S,zoomOut:b,fitView:R}=_a(),N=()=>{S(),c==null||c()},F=()=>{b(),u==null||u()},P=()=>{R(a),d==null||d()},A=()=>{w.setState({nodesDraggable:!C,nodesConnectable:!C,elementsSelectable:!C}),f==null||f(!C)},O=v==="horizontal"?"horizontal":"vertical";return B.jsxs(wa,{className:Ge(["react-flow__controls",O,g]),position:h,style:n,"data-testid":"rf__controls","aria-label":x??$["controls.ariaLabel"],children:[r&&B.jsxs(B.Fragment,{children:[B.jsx(ql,{onClick:N,className:"react-flow__controls-zoomin",title:$["controls.zoomIn.ariaLabel"],"aria-label":$["controls.zoomIn.ariaLabel"],disabled:k,children:B.jsx(g3,{})}),B.jsx(ql,{onClick:F,className:"react-flow__controls-zoomout",title:$["controls.zoomOut.ariaLabel"],"aria-label":$["controls.zoomOut.ariaLabel"],disabled:_,children:B.jsx(y3,{})})]}),o&&B.jsx(ql,{className:"react-flow__controls-fitview",onClick:P,title:$["controls.fitView.ariaLabel"],"aria-label":$["controls.fitView.ariaLabel"],children:B.jsx(v3,{})}),l&&B.jsx(ql,{className:"react-flow__controls-interactive",onClick:A,title:$["controls.interactive.ariaLabel"],"aria-label":$["controls.interactive.ariaLabel"],children:C?B.jsx(w3,{}):B.jsx(x3,{})}),m]})}Mg.displayName="Controls";const S3=re.memo(Mg);function k3({id:n,x:r,y:o,width:l,height:a,style:c,color:u,strokeColor:d,strokeWidth:f,className:g,borderRadius:m,shapeRendering:h,selected:v,onClick:x}){const{background:w,backgroundColor:C}=c||{},_=u||w||C;return B.jsx("rect",{className:Ge(["react-flow__minimap-node",{selected:v},g]),x:r,y:o,rx:m,ry:m,width:l,height:a,style:{fill:_,stroke:d,strokeWidth:f},shapeRendering:h,onClick:x?k=>x(k,n):void 0})}const E3=re.memo(k3),C3=n=>n.nodes.map(r=>r.id),Au=n=>n instanceof Function?n:()=>n;function b3({nodeStrokeColor:n,nodeColor:r,nodeClassName:o="",nodeBorderRadius:l=5,nodeStrokeWidth:a,nodeComponent:c=E3,onClick:u}){const d=Ne(C3,Fe),f=Au(r),g=Au(n),m=Au(o),h=typeof window>"u"||window.chrome?"crispEdges":"geometricPrecision";return B.jsx(B.Fragment,{children:d.map(v=>B.jsx(N3,{id:v,nodeColorFunc:f,nodeStrokeColorFunc:g,nodeClassNameFunc:m,nodeBorderRadius:l,nodeStrokeWidth:a,NodeComponent:c,onClick:u,shapeRendering:h},v))})}function $3({id:n,nodeColorFunc:r,nodeStrokeColorFunc:o,nodeClassNameFunc:l,nodeBorderRadius:a,nodeStrokeWidth:c,shapeRendering:u,NodeComponent:d,onClick:f}){const{node:g,x:m,y:h,width:v,height:x}=Ne(w=>{const C=w.nodeLookup.get(n);if(!C)return{node:void 0,x:0,y:0,width:0,height:0};const _=C.internals.userNode,{x:k,y:$}=C.internals.positionAbsolute,{width:S,height:b}=wt(_);return{node:_,x:k,y:$,width:S,height:b}},Fe);return!g||g.hidden||!L0(g)?null:B.jsx(d,{x:m,y:h,width:v,height:x,style:g.style,selected:!!g.selected,className:l(g),color:r(g),borderRadius:a,strokeColor:o(g),strokeWidth:c,shapeRendering:u,onClick:f,id:g.id})}const N3=re.memo($3);var P3=re.memo(b3);const M3=200,T3=150,L3=n=>!n.hidden,A3=n=>{const r={x:-n.transform[0]/n.transform[2],y:-n.transform[1]/n.transform[2],width:n.width/n.transform[2],height:n.height/n.transform[2]};return{viewBB:r,boundingRect:n.nodeLookup.size>0?M0(xo(n.nodeLookup,{filter:L3}),r):r,rfId:n.rfId,panZoom:n.panZoom,translateExtent:n.translateExtent,flowWidth:n.width,flowHeight:n.height,ariaLabelConfig:n.ariaLabelConfig}},R3="react-flow__minimap-desc";function Tg({style:n,className:r,nodeStrokeColor:o,nodeColor:l,nodeClassName:a="",nodeBorderRadius:c=5,nodeStrokeWidth:u,nodeComponent:d,bgColor:f,maskColor:g,maskStrokeColor:m,maskStrokeWidth:h,position:v="bottom-right",onClick:x,onNodeClick:w,pannable:C=!1,zoomable:_=!1,ariaLabel:k,inversePan:$,zoomStep:S=1,offsetScale:b=5}){const R=je(),N=re.useRef(null),{boundingRect:F,viewBB:P,rfId:A,panZoom:O,translateExtent:L,flowWidth:D,flowHeight:J,ariaLabelConfig:T}=Ne(A3,Fe),q=(n==null?void 0:n.width)??M3,Q=(n==null?void 0:n.height)??T3,Y=F.width/q,W=F.height/Q,V=Math.max(Y,W),X=V*q,M=V*Q,z=b*V,j=F.x-(X-F.width)/2-z,U=F.y-(M-F.height)/2-z,K=X+z*2,ie=M+z*2,le=`${R3}-${A}`,Z=re.useRef(0),oe=re.useRef();Z.current=V,re.useEffect(()=>{if(N.current&&O)return oe.current=q2({domNode:N.current,panZoom:O,getTransform:()=>R.getState().transform,getViewScale:()=>Z.current}),()=>{var de;(de=oe.current)==null||de.destroy()}},[O]),re.useEffect(()=>{var de;(de=oe.current)==null||de.update({translateExtent:L,width:D,height:J,inversePan:$,pannable:C,zoomStep:S,zoomable:_})},[C,_,$,S,L,D,J]);const fe=x?de=>{var $e;const[ke,be]=(($e=oe.current)==null?void 0:$e.pointer(de))||[0,0];x(de,{x:ke,y:be})}:void 0,xe=w?re.useCallback((de,ke)=>{const be=R.getState().nodeLookup.get(ke).internals.userNode;w(de,be)},[]):void 0,he=k??T["minimap.ariaLabel"];return B.jsx(wa,{position:v,style:{...n,"--xy-minimap-background-color-props":typeof f=="string"?f:void 0,"--xy-minimap-mask-background-color-props":typeof g=="string"?g:void 0,"--xy-minimap-mask-stroke-color-props":typeof m=="string"?m:void 0,"--xy-minimap-mask-stroke-width-props":typeof h=="number"?h*V:void 0,"--xy-minimap-node-background-color-props":typeof l=="string"?l:void 0,"--xy-minimap-node-stroke-color-props":typeof o=="string"?o:void 0,"--xy-minimap-node-stroke-width-props":typeof u=="number"?u:void 0},className:Ge(["react-flow__minimap",r]),"data-testid":"rf__minimap",children:B.jsxs("svg",{width:q,height:Q,viewBox:`${j} ${U} ${K} ${ie}`,className:"react-flow__minimap-svg",role:"img","aria-labelledby":le,ref:N,onClick:fe,children:[he&&B.jsx("title",{id:le,children:he}),B.jsx(P3,{onClick:xe,nodeColor:l,nodeStrokeColor:o,nodeBorderRadius:c,nodeClassName:a,nodeStrokeWidth:u,nodeComponent:d}),B.jsx("path",{className:"react-flow__minimap-mask",d:`M${j-z},${U-z}h${K+z*2}v${ie+z*2}h${-K-z*2}z
        M${P.x},${P.y}h${P.width}v${P.height}h${-P.width}z`,fillRule:"evenodd",pointerEvents:"none"})]})})}Tg.displayName="MiniMap";const I3=re.memo(Tg),D3=n=>r=>n?`${Math.max(1/r.transform[2],1)}`:void 0,F3={[li.Line]:"right",[li.Handle]:"bottom-right"};function j3({nodeId:n,position:r,variant:o=li.Handle,className:l,style:a=void 0,children:c,color:u,minWidth:d=10,minHeight:f=10,maxWidth:g=Number.MAX_VALUE,maxHeight:m=Number.MAX_VALUE,keepAspectRatio:h=!1,resizeDirection:v,autoScale:x=!0,shouldResize:w,onResizeStart:C,onResize:_,onResizeEnd:k}){const $=sg(),S=typeof n=="string"?n:$,b=je(),R=re.useRef(null),N=o===li.Handle,F=Ne(re.useCallback(D3(N&&x),[N,x]),Fe),P=re.useRef(null),A=r??F3[o];re.useEffect(()=>{if(!(!R.current||!S))return P.current||(P.current=a_({domNode:R.current,nodeId:S,getStoreItems:()=>{const{nodeLookup:L,transform:D,snapGrid:J,snapToGrid:T,nodeOrigin:q,domNode:Q}=b.getState();return{nodeLookup:L,transform:D,snapGrid:J,snapToGrid:T,nodeOrigin:q,paneDomNode:Q}},onChange:(L,D)=>{const{triggerNodeChanges:J,nodeLookup:T,parentLookup:q,nodeOrigin:Q}=b.getState(),Y=[],W={x:L.x,y:L.y},V=T.get(S);if(V&&V.expandParent&&V.parentId){const X=V.origin??Q,M=L.width??V.measured.width??0,z=L.height??V.measured.height??0,j={id:V.id,parentId:V.parentId,rect:{width:M,height:z,...A0({x:L.x??V.position.x,y:L.y??V.position.y},{width:M,height:z},V.parentId,T,X)}},U=od([j],T,q,Q);Y.push(...U),W.x=L.x?Math.max(X[0]*M,L.x):void 0,W.y=L.y?Math.max(X[1]*z,L.y):void 0}if(W.x!==void 0&&W.y!==void 0){const X={id:S,type:"position",position:{...W}};Y.push(X)}if(L.width!==void 0&&L.height!==void 0){const M={id:S,type:"dimensions",resizing:!0,setAttributes:v?v==="horizontal"?"width":"height":!0,dimensions:{width:L.width,height:L.height}};Y.push(M)}for(const X of D){const M={...X,type:"position"};Y.push(M)}J(Y)},onEnd:({width:L,height:D})=>{const J={id:S,type:"dimensions",resizing:!1,dimensions:{width:L,height:D}};b.getState().triggerNodeChanges([J])}})),P.current.update({controlPosition:A,boundaries:{minWidth:d,minHeight:f,maxWidth:g,maxHeight:m},keepAspectRatio:h,resizeDirection:v,onResizeStart:C,onResize:_,onResizeEnd:k,shouldResize:w}),()=>{var L;(L=P.current)==null||L.destroy()}},[A,d,f,g,m,h,C,_,k,w]);const O=A.split("-");return B.jsx("div",{className:Ge(["react-flow__resize-control","nodrag",...O,o,l]),ref:R,style:{...a,scale:F,...u&&{[N?"backgroundColor":"borderColor"]:u}},children:c})}re.memo(j3);const Qp=[{bg:"#1e3a5f",text:"#ffffff",border:"#1e3a5f",fontSize:14,fontWeight:700},{bg:"#2563eb",text:"#ffffff",border:"#2563eb",fontSize:12,fontWeight:700},{bg:"#60a5fa",text:"#ffffff",border:"#60a5fa",fontSize:11,fontWeight:600},{bg:"#dbeafe",text:"#1e3a5f",border:"#93c5fd",fontSize:11,fontWeight:400},{bg:"#f0f9ff",text:"#1e3a5f",border:"#bae6fd",fontSize:10,fontWeight:400}];function z3({data:n}){const r=Qp[Math.min(n.depth,Qp.length-1)],[o,l]=re.useState(!1);return B.jsxs("div",{onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),style:{background:r.bg,color:r.text,border:`2px solid ${r.border}`,borderRadius:8,padding:"6px 10px",width:200,fontSize:r.fontSize,fontWeight:r.fontWeight,fontFamily:"Noto Sans KR, sans-serif",cursor:n.hasChildren||n.explanation?"pointer":"default",userSelect:"none",display:"flex",alignItems:"center",justifyContent:"space-between",gap:6,lineHeight:1.4,boxShadow:o?"0 4px 12px rgba(37, 99, 235, 0.25)":n.depth<=1?"0 2px 6px rgba(0,0,0,0.15)":"none",transform:o?"translateY(-1px)":"none",transition:"all 0.2s ease"},children:[B.jsx(ai,{type:"target",position:we.Left,style:{opacity:0,pointerEvents:"none"}}),B.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,flex:1,minWidth:0},children:[B.jsx("span",{style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:n.label}),n.explanation&&B.jsx("span",{style:{fontSize:11,opacity:.85,flexShrink:0},title:"개념 설명 있음",children:"📖"})]}),n.hasChildren&&B.jsx("span",{style:{fontSize:9,opacity:.7,flexShrink:0,marginLeft:4},children:n.isCollapsed?"▶":"▼"}),B.jsx(ai,{type:"source",position:we.Right,style:{opacity:0,pointerEvents:"none"}})]})}const O3={id:"root",label:"건축시공",children:[{id:"1",label:"1. 가설공사",children:[{id:"1-1",label:"규준틀",explanation:`건축물의 위치·높이·수평을 설정하기 위해 공사 초기에 세우는 기준 틀.

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
규준틀 = 기초 공사 전 가장 먼저 설치. 건물에서 1~2m 이격. 공사 기간 내 이동 금지`},{id:"1-2",label:"비계",children:[{id:"1-2-1",label:"강관비계",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Andamio_de_tres_cuerpos_de_Aneur.jpg/330px-Andamio_de_tres_cuerpos_de_Aneur.jpg",caption:"Steel pipe scaffolding on a building exterior"}],explanation:`강관(φ48.6mm 강관 파이프)을 클램프(연결철물)로 조립하는 가장 일반적인 비계.

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
벽이음 5×5m, 작업발판 40cm 이상, 기둥 간격 1.8m — 세 가지 수치가 핵심 출제 포인트`},{id:"1-2-2",label:"달비계",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Workers_on_suspended_scaffold_in_Korolyov.jpg/400px-Workers_on_suspended_scaffold_in_Korolyov.jpg",caption:"Workers on a suspended scaffold (달비계) on a high-rise building exterior"}],explanation:`건물 상부 구조체(옥상·지붕)에서 로프·체인으로 달아 내리는 작업 발판.

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
말비계 = A형 이동식 = 소규모 실내 전용. 4가지 비계 특징 비교 문제로 자주 출제`},{id:"1-2-4",label:"통나무비계",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bamboo_scaffolding_around_a_water_tower.jpg/330px-Bamboo_scaffolding_around_a_water_tower.jpg",caption:"Bamboo (timber) scaffolding erected around a water tower"}],explanation:`통나무(대나무, 소나무, 낙엽송 등)를 새끼줄이나 철선(결속선)으로 묶어 조립하는 전통적인 임시 비계.

▶ 특징 및 한계
• 강관비계가 보급되기 이전에 널리 쓰이던 방식으로, 부재 연결을 결속선에 의존
• 신축성이 있는 목재 특성상 강풍에 꼬임이 생기거나 건조 시 묶음이 느슨해져 붕괴 위험이 높음
• 현재는 조립식 강관비계에 밀려 일반 현장에서는 원칙적으로 사용 금지 (문화재 보수 등 특수 구역 외 제외)

▶ 설치 기준
• 비계기둥 간격: 1.5m~2.0m 이하
• 띠장 수직 간격: 1.5m 이하 (첫 번째 띠장은 지면에서 2.0m 이하에 설치하여 통로 확보)
• 비계기둥 최고 높이: 18m 이하 (초과 시 보강재 설치 필수)

★ 시험 포인트
전통 방식 비계로 현재는 거의 사용 안 함. 기둥 간격 1.5~2.0m, 높이 제한 18m가 핵심 수치.`}]},{id:"1-3",label:"가설시설 (울타리·창고·사무소)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Site_Safety_-_geograph.org.uk_-_7799558.jpg/330px-Site_Safety_-_geograph.org.uk_-_7799558.jpg",caption:"Construction site safety fencing and signage"}],explanation:`공사 기간 중에만 가설하여 시공과 운영을 지원하고 공사가 완료되면 철거하는 모든 현장 시설물.

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
SPT 시험의 해머 중량 63.5kg, 낙하 높이 76cm, 관입 깊이 30cm 수치 가로 채우기 및 N값을 통한 사질 지반의 조밀도(N값 30 이상 조밀) 판정법이 출제됩니다.`}]}]},{id:"2",label:"2. 토공사",children:[{id:"2-1",label:"터파기",children:[{id:"2-1-1",label:"줄파기",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Polyethylene_gas_main.jpg/330px-Polyethylene_gas_main.jpg",caption:"Trench (strip) excavation showing a narrow cut through soil"}],explanation:`벽·기초 띠를 따라 길고 좁게 굴착하는 방식.

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
독립파기 = 독립기초용. 터파기 수량이 최소이며, 기둥식 구조에 적합.`}]},{id:"2-2",label:"흙막이공사",children:[{id:"2-2-1",label:"H-Pile + 흙막이판",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/PileDriving.jpg/330px-PileDriving.jpg",caption:"H-pile soldier pile system at an excavation site"}],explanation:`H형강 말뚝을 지반에 박고, 굴착하면서 강재 사이에 흙막이판(목재 또는 PC판)을 끼워 흙을 지지하는 공법.

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
시트파일 = U형 강재 + 맞물림 이음 = 차수성 우수. H-Pile과의 차이는 '차수 여부'`},{id:"2-2-3",label:"슬러리월",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/World_Trade_Center_Slurry_Wall%2C_Eric_Ascalon%2C_9-4-02.jpg/330px-World_Trade_Center_Slurry_Wall%2C_Eric_Ascalon%2C_9-4-02.jpg",caption:"Slurry wall (diaphragm wall) exposed at the World Trade Center site"}],explanation:`벤토나이트 안정액을 채운 트렌치(도랑)를 굴착한 후 철근망 삽입 → 콘크리트 타설하여 만드는 연속 지하벽.

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
슬러리월 = 가장 고급·고가·차수 최우수. 벤토나이트 안정액이 핵심. 영구벽 활용 가능`},{id:"2-2-4",label:"어스앵커",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Erdanker-Schraube.jpg/330px-Erdanker-Schraube.jpg",caption:"Ground anchor (earth anchor) used in soil retention"}],explanation:`흙막이 벽체에 구멍을 뚫고 강연선(PC강선)을 삽입 → 선단부 그라우팅으로 지반에 정착시켜 흙막이를 지지하는 방식.

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
샌드드레인(모래기둥) vs 페이퍼드레인(합성수지 보드)의 드레인재 차이점 및 압밀 배수 원리가 출제 포인트.`}]},{id:"2-4",label:"토량계산",children:[{id:"2-4-1",label:"토량변화율 (L, C)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/CaseCrawlerWithTamper3658.JPG/330px-CaseCrawlerWithTamper3658.JPG",caption:"Soil compaction roller tamping earthfill on a construction site"}],explanation:`흙의 상태 변화에 따른 부피 변화를 나타내는 계수.

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
덤프트럭 수량 산출 시에는 반드시 '흐트러진 토량(자연 토량 × L)'을 기준으로 덤프 용량을 나누어야 함을 잊지 마세요. 단골 출제 계산 문제입니다.`}]}]},{id:"3",label:"3. 기초공사",children:[{id:"3-1",label:"직접기초",children:[{id:"3-1-1",label:"독립기초",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mock_foundations_for_House_and_Apartment.png/330px-Mock_foundations_for_House_and_Apartment.png",caption:"Isolated spread footing under an individual column"}],explanation:`각 기둥 하나 아래에 독립적으로 설치하는 정사각형·직사각형 콘크리트 기초판.

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
독립기초 = 기둥 1개당 기초 1개. 지반이 균질하고 기둥 간격 넓을 때 선택. 접지압 = 하중÷면적`},{id:"3-1-2",label:"줄기초",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Mock_foundations_for_House_and_Apartment.png/330px-Mock_foundations_for_House_and_Apartment.png",caption:"Strip foundation running continuously under load-bearing walls"}],explanation:`벽 또는 기둥 열을 따라 길게 연속으로 이어진 콘크리트 기초.

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
현장타설말뚝은 대구경 시공이 가능하여 중량 하중 지지에 최적. 기성 RC말뚝은 현재PHC로 대체됨.`},{id:"3-2-3",label:"PC말뚝",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Precast_concrete_house_in_construction.JPG/330px-Precast_concrete_house_in_construction.JPG",caption:"Precast concrete elements used in construction"}],explanation:`공장에서 원심력 다짐 방식으로 고밀도 제작한 프리스트레스트 콘크리트(Prestressed Concrete) 기성 말뚝.

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
H형강말뚝 = 배토량이 적은 말뚝 = 단단한 암반 관입성 최우수. 흙막이 H-Pile과 형태 동일.`}]},{id:"3-3",label:"말뚝 시공법",children:[{id:"3-3-1",label:"항타공법",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Caterpillar_385C_L_with_Junttan_pile_driver_%28owner_Cofra%29_p3.JPG/330px-Caterpillar_385C_L_with_Junttan_pile_driver_%28owner_Cofra%29_p3.JPG",caption:"Pile driver machine driving piles into the ground"}],explanation:`해머(Hammer)로 말뚝 머리를 반복 타격하여 지중에 박는 가장 기본적인 말뚝 시공법.

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
중굴공법 = PHC 속 구멍 굴착 = 저소음/저진동 = 선단 시멘트 풀 주입 마무리.`}]},{id:"3-4",label:"케이슨기초",children:[{id:"3-4-1",label:"오픈케이슨",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Caisson_Schematic_2.svg/330px-Caisson_Schematic_2.svg.png",caption:"Schematic of an open caisson sinking method"}],explanation:`상·하부가 개방된 콘크리트 상자(케이슨)를 자중으로 압하·침하시키며 내부를 굴착하는 공법.

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
오픈케이슨 = 위아래 열린 구조. 지하수 처리 어려움이 약점. 우물통기초라고도 함`},{id:"3-4-2",label:"공기케이슨",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Caisson_Schematic_2.svg/330px-Caisson_Schematic_2.svg.png",caption:"Caisson schematic — pneumatic pressurized working chamber variant"}],explanation:`케이슨 하부 작업실에 압축공기를 불어넣어 지하수를 배제하고 작업자가 내부에서 직접 굴착하는 공법.

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
오픈케이슨(우물통 굴착 침하), 공기케이슨(하부 작업실에 기압을 가해 지하수 차단 후 작업), 박스케이슨(스스로 부유 침설)의 3가지 공법을 구분해 쓰세요.`}]}]},{id:"4",label:"4. 철근콘크리트공사",children:[{id:"4-1",label:"거푸집",children:[{id:"4-1-1",label:"재래식 거푸집",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Formwork.ogv/330px--Formwork.ogv.jpg",caption:"Traditional timber formwork assembled for a concrete pour"}],explanation:`목재 합판(두께 12~18mm)과 각재를 현장에서 직접 제작하는 전통적인 거푸집.

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
갱폼 = 크레인으로 통째 인양. 고층 아파트 전단벽이 키워드. 50~100회 반복 사용`},{id:"4-1-3",label:"슬립폼 (Slip Form)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/V%C3%A4stertorp%2C_bebyggelse_med_glidform_1950.jpg/330px-V%C3%A4stertorp%2C_bebyggelse_med_glidform_1950.jpg",caption:"Slip form climbing upward during continuous concrete placement"}],explanation:`높이 1.0~1.5m의 거푸집을 유압잭(Hydraulic Jack)으로 시간당 15~30cm 속도로 연속 상승시키면서 콘크리트를 쉬지 않고 타설하는 공법.

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
알폼 = 알루미늄 경량 = 인력 설치 = 200~400회 최다 반복. 크레인 불필요가 갱폼과의 핵심 차이`}]},{id:"4-2",label:"철근공사",children:[{id:"4-2-1",label:"철근의 종류 (SR, HD)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/A_bunch_of_rebar.jpg/330px-A_bunch_of_rebar.jpg",caption:"Bundled steel reinforcing bars (rebar) ready for use"}],explanation:`철근의 표면 형태에 따른 분류: 원형(SR)과 이형(HD).

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
갈고리 의무 설치 부위 3가지(원형철근 단부, 스터럽/대근 단부, 캔틸레버 보 주근 단부) 쓰기 문제 대비.`}]},{id:"4-3",label:"콘크리트 재료",children:[{id:"4-3-1",label:"시멘트 종류",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Portland_Cement_Bags.jpg/330px-Portland_Cement_Bags.jpg",caption:"Bags of Portland cement stacked at a construction site"}],explanation:`건축공사에 사용되는 주요 시멘트의 종류와 특성.

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
3종 조강 = 빠른 강도(한중·긴급), 2종 중용열 = 발열 낮음(매스콘크리트). 세트로 암기`},{id:"4-3-2",label:"골재 (잔골재·굵은골재)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Concrete_aggregate_grinding.JPG/330px-Concrete_aggregate_grinding.JPG",caption:"Coarse aggregate (crushed stone) used in concrete mix design"}],explanation:`콘크리트 체적의 약 70~80%를 점유하여 수화 반응 시 시멘트 풀과 섞여 골격 체적을 이루는 모래(잔골재)와 자갈(굵은골재).

▶ 체눈 규격 기준 분류
• 잔골재 (Fine Aggregate): 10mm 체를 전부 통과하고, 4.75mm(No.4) 체를 95% 이상 통과하며 0.075mm 체에 거의 다 남는 골재 (모래).
• 굵은골재 (Coarse Aggregate): 4.75mm 체에 거의 다 남는 입경의 골재 (자갈).
• 골재 요구 조건: 깨끗하고 강하며 내구성이 있을 것. 편평하거나 길쭉한 석편(공극률 상승 원인)이 없을 것. 입도(크고 작은 알갱이 분포)가 균일할 것(조립률 F.M. 적정 범위 유지).

★ 시험 포인트
잔골재와 굵은골재를 나누는 입경 기준 체눈 크기는 4.75mm(No.4 체)이다.`},{id:"4-3-3",label:"혼화재료 (혼화재·혼화제)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/CoalCombustionWastes-01.png/330px-CoalCombustionWastes-01.png",caption:"Fly ash — a common supplementary cementitious admixture material"}],explanation:`시멘트·물·골재 이외에 추가로 넣는 재료. 사용량에 따라 혼화재(많음)와 혼화제(소량)로 구분.

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
설계강도 fck와 현장 표준편차 s를 준 후 배합강도 fcr을 계산하는 통계 공식 대입 문제 단골 출제.`}]},{id:"4-5",label:"콘크리트 시공",children:[{id:"4-5-1",label:"비비기 (믹싱)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/GH-SA.jpg/330px-GH-SA.jpg",caption:"Rotating drum concrete mixer used to blend concrete on site"}],explanation:`시멘트, 물, 골재, 혼화재료를 믹서(Mixer)에 투입하여 굳지 않은 콘크리트가 균일하게 섞이도록 섞어주는 공정.

▶ 비비기 시간 기준 (재료 투입 완료 후 기준)
• 가제식(강제 혼합식) 믹서: 최소 1분 이상 비비기 진행.
• 가경식(회전 드럼식) 믹서: 최소 1분 30초(90초) 이상 비비기 진행.
• 주의 사항:
  - 비비기 시간은 적정 시간을 준수하되 최대 시간 제한(보통 3분 이내)을 초과하지 않음. 과도하면 온도가 상승하고 유동성이 저하됨.
  - 비빈 콘크리트를 믹서에서 배출할 때는 1회 배출량을 전부 비워 재료 분리 방지.

★ 시험 포인트
믹서 종류에 따른 최소 비비기 시간(강제식 1분, 가경식 1.5분) 수치가 핵심 출제 요소.`},{id:"4-5-2",label:"운반",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Concrete_boom_pump.jpg/330px-Concrete_boom_pump.jpg",caption:"Concrete boom pump truck transporting and placing concrete"}],explanation:`공장 비비기가 완료된 레미콘을 타설 현장 위치까지 전용 트럭(Agitator Truck) 등으로 신속하게 수송하는 과정.

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
80cm 이상 = 매스콘크리트 정의. 온도차 25°C 이상이 균열 기준. 파이프쿨링이 가장 직접적 냉각법`},{id:"4-6-5",label:"경량콘크리트",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/UW_280748.jpg/330px-UW_280748.jpg",caption:"Lightweight concrete blocks — low-density aggregate reduces weight"}],explanation:`단위중량이 일반 콘크리트(2,300kg/m³)보다 작은 콘크리트.

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
골재 선배치 + 그라우트 주입 메커니즘. 일반 콘크리트 대비 낮은 건조수축성이 핵심 장점.`},{id:"4-6-7",label:"PSC (프리스트레스트)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/PrestressedConcrete-en1.png/330px-PrestressedConcrete-en1.png",caption:"Prestressed concrete beam with tensioned steel tendons"}],explanation:`철근 대신 고강도 강재(PC강선·강봉)를 콘크리트에 인장하여 압축 프리스트레스를 미리 도입하는 구조.

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
한중콘크리트의 초기강도 5MPa 발현 기준 수치, 매스콘크리트의 수화열 온도 균열 방지 대책(벨트 컨베이어 냉각, 파이프 쿨링 공법) 기출 대비.`}]}]},{id:"5",label:"5. 철골공사",children:[{id:"5-1",label:"부재 종류",children:[{id:"5-1-1",label:"H형강",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Manchester_Victoria_roof_view.JPG/330px-Manchester_Victoria_roof_view.JPG",caption:"Wide-flange H-beam structural steel members in a roof frame"}],explanation:`H자 단면을 가진 철골 구조의 가장 기본적이고 범용적인 부재.

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
H형강 = 플랜지(수평)+웨브(수직). 기둥·보에 범용. I형강보다 플랜지 넓어 안정적`},{id:"5-1-2",label:"I형강",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/I-Beam_002.JPG/330px-I-Beam_002.JPG",caption:"Standard I-beam (I-section) structural steel member"}],explanation:`단면의 형상이 알파벳 I자 형태인 열간 압연 강재.

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
ㄷ자 단면의 비틀림 민감성 및 경량 천장틀 등의 조립 지재 용도 출제.`}]},{id:"5-2",label:"접합",children:[{id:"5-2-1",label:"용접접합",children:[{id:"5-2-1-1",label:"맞댐용접",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Automatic_butt-welding_machine.webm/330px--Automatic_butt-welding_machine.webm.jpg",caption:"Butt (groove) weld joining two steel plates end to end"}],explanation:`두 강재의 끝면을 맞대어 용접하는 방법. 부재를 완전히 일체화.

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
맞댐용접 = 끝면을 맞대어 일체화. 완전용입(CJP) = 가장 강함. UT·RT로 검사 필수`},{id:"5-2-1-2",label:"필릿용접",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Schwei%C3%9Fen2.jpg/330px-Schwei%C3%9Fen2.jpg",caption:"Welder performing a fillet weld joining two steel members"}],explanation:`두 부재를 겹치거나 직각으로 교차시켜 접합할 때 그 모서리(삼각형 단면)를 용접하는 공법.

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
가조립 볼트 체결 기준 비율(1/3 이상) 및 최소 개수(2개 이상)는 직접 쓰기 단골 문제이니 무조건 외워 두세요.`}]}]},{id:"6",label:"6. 조적공사",children:[{id:"6-1",label:"벽돌쌓기",children:[{id:"6-1-1",label:"길이쌓기",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Hampton_stacks.JPG/330px-Hampton_stacks.JPG",caption:"Stretcher bond (길이쌓기): bricks laid lengthwise in each course"}],explanation:`벽돌의 긴 면(길이면)이 벽 바깥쪽에 보이도록 쌓는 방법.

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
길이쌓기 = 벽돌 긴 면(길이면) 노출 = 0.5B 두께. 쌓기법 중 가장 얇음`},{id:"6-1-2",label:"마구리쌓기",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Brick-terms-1.jpg/330px-Brick-terms-1.jpg",caption:"Header bond (마구리쌓기): bricks laid with short end face outward"}],explanation:`벽돌의 짧은 면(마구리)이 벽 바깥쪽에 보이도록 쌓는 방법.

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
영국식 = 길이켜+마구리켜 교대 = 강도 최강. 마구리켜가 벽 전후를 결합하는 것이 강도의 이유`},{id:"6-1-4",label:"화란식쌓기",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Brickwork_on_Ludwell%E2%80%93Paradise_House.jpg/330px-Brickwork_on_Ludwell%E2%80%93Paradise_House.jpg",caption:"Flemish bond (화란식쌓기): alternating headers and stretchers per course"}],explanation:`벽돌쌓기에서 길이쌓기와 마구리쌓기 단을 교대로 쌓되, 모서리(귀통이) 부분에 칠오토막(7/8 토막) 벽돌을 사용하여 줄눈을 정리하는 네덜란드식 벽돌 쌓기 기법.

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
불식 = 프랑스식 = 같은 켜에 길이+마구리 혼합. 외관 다양, 강도 낮음`}]},{id:"6-2",label:"블록쌓기",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Concreteblocks.jpg/330px-Concreteblocks.jpg",caption:"Concrete masonry units (CMU blocks) for block wall construction"}],explanation:`속 빈 콘크리트 블록(시멘트 블록)을 모르타르로 쌓는 공사.

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
블록 190×390×190mm. 통줄눈 금지. 1일 1.6m 이하. 보강 블록 = 철근+그라우트. 세로줄눈 완전 충전`},{id:"6-3",label:"돌쌓기",children:[{id:"6-3-1",label:"찰쌓기",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Three_old_bricks_held_together_with_mortar.jpg",caption:"Bricks bonded with mortar — 찰쌓기 (mortar rubble masonry)"}],explanation:`모르타르(시멘트+모래+물)를 사용하여 돌을 쌓는 습식 공법.

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
찰쌓기 = 습식(모르타르 사용). 구조적으로 강함. 배수공 설치 필수`},{id:"6-3-2",label:"메쌓기",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Dry_stone_fences_in_the_Yorkshire_Dales%2C_England.jpg/330px-Dry_stone_fences_in_the_Yorkshire_Dales%2C_England.jpg",caption:"Dry stone wall without mortar — 메쌓기 (dry masonry)"}],explanation:`모르타르 등의 접합용 충전재를 일절 사용하지 않고, 오직 석재(돌) 간의 맞춤 가공과 자중, 그리고 마찰력만으로 쌓아 올리는 건식 돌쌓기 공법.

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
아스팔트 방수 = 루핑 다층 구조 = 신뢰성 최우수. 시공 순서 프라이머→아스팔트→루핑 반복`},{id:"7-2",label:"시트 방수",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Applying_waterproofing_material_to_the_outside_of_a_tunnel.jpg/330px-Applying_waterproofing_material_to_the_outside_of_a_tunnel.jpg",caption:"Sheet waterproofing membrane applied to a concrete surface"}],explanation:`합성고무(EPDM) 또는 합성수지(PVC·TPO) 시트를 바탕면에 접착·기계 고정하는 방수 공법.

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
규산질 방수 = 침투식 = 공극 충전. 자기치유 기능이 가장 큰 특징. 수조·저수탱크에 필수`},{id:"7-6",label:"실링 (Sealing) 방수",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Self_level_silicone.jpg/330px-Self_level_silicone.jpg",caption:"Silicone sealant applied to a construction joint"}],explanation:`창호 주변, 줄눈, 패널 접합부 등 틈새에 실링재(Sealant, 코킹재)를 충전하여 물·공기·소음 침투를 막는 공법.

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
시멘트 모르타르 = 1회 7mm 이하, 총 25mm 이하. 초벌→재벌→정벌 3회 바름 순서 암기`},{id:"8-1-2",label:"석고 플라스터",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Fontainebleau_escalier_roi5.jpg/330px-Fontainebleau_escalier_roi5.jpg",caption:"Gypsum plaster (석고 플라스터) finish on an interior wall"}],explanation:`소석고(반수석고, CaSO₄·0.5H₂O)를 주원료로 혼화재와 물을 섞어 공벽 바탕면에 바르는 수경성 미장 마감재.

▶ 특징 및 물리 성질
• 수경성 재료: 시멘트처럼 물과의 화학 결합 반응으로 경화함 (공기 접촉이 없어도 경화되며, 경화 속도가 매우 빠름).
• 균열 방지: 경화 시 건조 수축이 극히 적어 미장 건조 크랙(균열)이 거의 발생하지 않음.
• 마감성: 건조 후 표면이 대단히 평활하고 백색 마감이 우수하여 실내 벽/천장의 정벌(마감) 바름용으로 최적.
• 약점: 습기와 수분에 매우 취약함 -> 욕실, 수영장, 지하실 등 습한 구역에는 사용 절대 불가.

★ 시험 포인트
석고 플라스터 = 수경성 미장재 = 수축 균열이 적어 평활도 우수 = 물에 약하므로 건조 실내용.`},{id:"8-1-3",label:"테라조",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Terrazzo_entryway.jpg/330px-Terrazzo_entryway.jpg",caption:"Polished terrazzo (테라조) floor in a building entryway"}],explanation:`백색 포틀랜드 시멘트에 잘게 부순 천연 석재(종석, 주로 대대리석 조각)와 색소를 배합하여 타설한 후, 경화 뒤 그라인더로 표면을 연마하여 대리석 질감을 내는 바닥 미장 공법.

▶ 현장 갈기 시공 순서 (순서 기출!)
① 바탕 청소 및 평탄 작업
② 황동 줄눈대(Brass Joint Bar) 설치 (균열 방지 및 색상 구획용)
③ 테라조 모르타르 타설 및 다짐 양생
④ 초갈기 (거친 숫돌로 종석이 보이도록 갈아냄)
⑤ 구멍 메움 (연마 중 생긴 미세 기포 구멍에 시멘트 풀 문지름)
⑥ 중갈기 및 정갈기 (고운 숫돌로 표면 평활화)
⑦ 물청소 및 왁스 광택 칠 마감.

★ 시험 포인트
테라조 현장 갈기 시공 순서 나열 문제 빈출. 황동 줄눈대 규격(4~5mm 두께, 12mm 높이) 암기.`}]},{id:"8-2",label:"타일공사",children:[{id:"8-2-1",label:"압착붙이기",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Alban_chambon%2C_decorazione_in_marmo_e_ceramica%2C_dal_castello_reale_delle_ardenne%2C_houyet%2C_1905_ca._02.jpg/330px-Alban_chambon%2C_decorazione_in_marmo_e_ceramica%2C_dal_castello_reale_delle_ardenne%2C_houyet%2C_1905_ca._02.jpg",caption:"Ceramic tile installation — press-bonding (압착붙이기) method"}],explanation:`바탕 모르타르 위에 타일을 올리고 나무망치(고무망치)로 두들겨 눌러 붙이는 기본적인 타일 시공법.

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
스틸창호 = 방화구획 방화용 = 강도 최강 = 녹방지 방청도장 필수.`}]},{id:"9-2",label:"유리공사",children:[{id:"9-2-1",label:"판유리",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/CrystalPalaceStation.jpg/330px-CrystalPalaceStation.jpg",caption:"Float glass (판유리) panels in a large station facade"}],explanation:`원료를 고온 용융시켜 평탄한 판형으로 롤링 성형한 가장 베이직하고 일반적인 유리.

▶ 종류 및 성질
• 두께에 따라 단판유리(2mm, 3mm, 5mm 등)로 구분되며, 창문에 한 겹으로 끼우는 기초 마감재.
• 맑은 판유리와 서리 판유리(표면 조면 처리로 불투명화) 등이 있음.
• 약점: 깨질 때 날카롭고 큰 쐐기 모양의破片(파편)으로 부서져 사람에게 꽂히는 등 2차 상해 위험이 큼 (안전유리 기준 불합격).
• 풍하중에 약해 고층 건물 외벽에 단독 스팬으로 절대 시공 금지.

★ 시험 포인트
판유리 = 2차 상해 위험이 높은 취성 유리. 고층 외벽이나 안전 구역 단독 사용 금지.`},{id:"9-2-2",label:"복층유리",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Double_Glazed_Fixed_Window_Diagram.png/330px-Double_Glazed_Fixed_Window_Diagram.png",caption:"Double glazing (복층유리) cross-section diagram with insulating air gap"}],explanation:`2장 이상의 유리 사이에 건조 공기층 또는 아르곤(Ar) 가스를 밀봉한 단열 유리.
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
복층유리 = 2장 + 공기층. 단열·방음·결로 방지. 아르곤 가스 = 단열 향상. Low-E와 조합이 최선`},{id:"9-2-3",label:"강화유리",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Broken_phone_box.jpg/330px-Broken_phone_box.jpg",caption:"Tempered glass (강화유리) shattering into small safe granules"}],explanation:`판유리를 약 650°C로 가열 후 양면에 강한 냉풍을 불어 급속 냉각하여 강도를 높인 안전유리.

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
강화유리 = 650°C 가열 후 급냉 → 강도 3~5배. 파손 시 미세 알갱이 = 안전. 추가 가공 불가`},{id:"9-2-4",label:"접합유리",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Windshield-spiderweb.jpg/330px-Windshield-spiderweb.jpg",caption:"Laminated glass (접합유리) holding together after impact thanks to PVB interlayer"}],explanation:`최소 2장 이상의 판유리 사이에 고신축성 PVB(Polyvinyl Butyral) 합성수지 투명 필름을 끼워 압착 접합한 고기능 안전유리.

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
로이유리의 반사/단열 원리, 접합유리 중간막 필름명(PVB 필름) 및 강화유리의 급냉 열처리 생산 방식 차이점이 핵심 문제입니다.`}]}]},{id:"10",label:"10. 도장공사",children:[{id:"10-1",label:"바탕처리",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Sandblasting1.jpg/330px-Sandblasting1.jpg",caption:"Sandblasting surface preparation before paint application (바탕처리)"}],explanation:`도료를 바르기 전 표면을 도장에 적합한 상태로 준비하는 작업. 도장 품질을 결정하는 가장 중요한 단계.

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
수성페인트 = 시멘트/콘크리트 벽면용. 냄새 적음. 철재 사용 곤란.`},{id:"10-2-3",label:"에폭시",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Aerospace_epoxy_resin.jpg/330px-Aerospace_epoxy_resin.jpg",caption:"Epoxy coating (에폭시) providing a hard protective surface finish"}],explanation:`주제와 경화제를 혼합하여 강력한 화학 결합으로 경화되는 도료.

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
칠 횟수 판별을 위한 색상 변경 시공 조치, 그리고 도막 결함 중 주름(두껍게 발랐을 때 표면만 건조) 및 리프팅(재벌 용제가 초벌 칠막 용해) 정의 암기.`}]}]},{id:"11",label:"11. 수장공사",children:[{id:"11-1",label:"바닥",children:[{id:"11-1-1",label:"비닐타일",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Vintage_Vinyl_Tile_Flooring_South_Beach_%2845568707481%29.jpg/330px-Vintage_Vinyl_Tile_Flooring_South_Beach_%2845568707481%29.jpg",caption:"Vinyl tile (비닐타일) flooring installed in a building interior"}],explanation:`PVC(폴리염화비닐) 수지를 주원료로 가소제와 안료를 섞어 프레스로 성형한 바닥 타일.

▶ 특징
• 시공이 간편하고 단가가 저렴하여 널리 사용
• 내수성·내마모성이 우수하여 청소가 용이
• 주로 상업용 빌딩 사무실, 상가 바닥의 기본 사양 (데코타일)
• 온도 변화에 따라 이음매 수축 발생 가능

★ 시험 포인트
비닐타일 = 데코타일 = 상업 빌딩 바닥 표준 = 가성비·내마모성 우수.`},{id:"11-1-2",label:"카펫",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Wollteppich_1.jpg/330px-Wollteppich_1.jpg",caption:"Wall-to-wall carpet (카펫) installed in an interior room"}],explanation:`양모 또는 아크릴 섬유를 직조하거나 파일(Pile)을 만들어 시트 형태로 깔아주는 바닥재.

▶ 특징
• 흡음성·보온성이 최우수하여 보행감이 좋고 안락함
• 실내 보행 소음 방지 효과 탁월
• 주로 호텔 로비, 오피스 임원실, 극장 바닥에 사용
• 습기에 취약하여 곰팡이 우려가 있고 오염 세척이 어려움

★ 시험 포인트
카펫 = 보온 및 소음 흡수 최우수. 오염에 약함.`},{id:"11-1-3",label:"목재마루 (원목·강마루·강화마루)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Flooring.jpg/330px-Flooring.jpg",caption:"Hardwood timber floor (목재마루) planks installed in a residential interior"}],explanation:`천연 목재를 가공하거나 목재 베니어 위에 데코 필름을 조합해 만든 친환경 바닥 마감재.

▶ 종류별 특징
• 원목마루: 두꺼운 천연 원목(2mm 이상) 사용. 보행감 좋으나 뒤틀림 위험 높고 고가.
• 강마루: 합판 위에 고강도 HPM 필름 부착. 본드 접착식 시공으로 열전도(온돌)에 우수.
• 강화마루: HDF(고밀도 섬유판) 위에 필름 부착. 클릭식 비접착 조립으로 수축팽창으로 인한 이격 발생 가능.

★ 시험 포인트
강마루는 접착식(열전도 우수), 강화마루는 조립식(수축팽창 우려).`}]},{id:"11-2",label:"천장",children:[{id:"11-2-1",label:"석고보드",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Drywall_and_tools.jpg/330px-Drywall_and_tools.jpg",caption:"Gypsum board (석고보드 / drywall) sheets for interior wall construction"}],explanation:`소석고와 섬유 등을 혼합해 판형태로 성형하고 종이로 양면을 감싼 천장 및 벽체 마감재.

▶ 특징
• 내화성·단열성 우수 (방화 보드로 널리 사용)
• 칼로 쉽게 잘려 시공성 및 가공성 탁월
• 수분에 취약해 습기가 많은 곳(화장실 등)은 방수석고보드 필수 사용
• 도장 또는 벽지 부착 전 퍼티 처리가 필수적

★ 시험 포인트
석고보드 = 방화·단열 우수 = 시공 용이. 물에 취약한 것이 약점.`},{id:"11-2-2",label:"텍스",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Dropped_Ceiling_1.tiff/lossless-page1-330px-Dropped_Ceiling_1.tiff.png",caption:"Acoustic ceiling tiles (텍스) in a suspended drop ceiling grid"}],explanation:`암면(Rock Wool) 또는 광물 섬유로 만든 흡음 천장판.

▶ 특징
• 흡음성·단열성 우수
• T-BAR(금속 격자)에 얹는 방식 — 교체·보수 쉬움
• 사무실·공장 천장 마감재의 표준
• 습기에 취약하여 습도 높을 때 처짐 현상 발생 우려

★ 시험 포인트
텍스 = 사무실 천장 표준 = 흡음·단열 우수.`}]},{id:"11-3",label:"벽",children:[{id:"11-3-1",label:"벽지",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Original_William_Morris%27s_patterns%2C_digitally_enhanced_by_rawpixel_00015.jpg/330px-Original_William_Morris%27s_patterns%2C_digitally_enhanced_by_rawpixel_00015.jpg",caption:"Decorative wallpaper (벽지) pattern for interior wall finishing"}],explanation:`벽체 바탕면 위에 접착 풀을 이용해 시트 형태로 도배하는 마감재.

▶ 특징
• 종이벽지: 저렴하고 친환경적이며 통기성 좋으나 내구성 낮음
• 비닐실크벽지: 표면 PVC 코팅 처리로 내수성 우수, 오염 시 물걸레질 가능하나 통기성 낮음
• 초배(바탕 한지 접착) 작업 후 정배(최종 벽지 부착)로 시공

★ 시험 포인트
비닐실크벽지 = PVC 코팅 = 물걸레질 가능.`},{id:"11-3-2",label:"합판",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Spruce_plywood.JPG/330px-Spruce_plywood.JPG",caption:"Plywood (합판) sheet showing layered wood veneer construction"}],explanation:`얇은 목재 단판(Veneer)을 나뭇결 방향이 서로 직교하도록 홀수 겹으로 접착한 판재.

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
기와 = 내구성 우수 but 자중이 무거움. 기와고정 철저.`},{id:"12-1-2",label:"금속지붕",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Standing_seam_metal_roof_3.jpg/330px-Standing_seam_metal_roof_3.jpg",caption:"Standing seam metal roof (금속지붕) panels on a building"}],explanation:`아연도금강판·스테인리스·알루미늄·동판 등 금속 판재로 마감하는 지붕 공법.

▶ 특징
• 경량 — 구조체 하중 부담 적음 (초경량 지붕 구현 가능)
• 방수 성능 우수 및 수밀성 탁월
• 평지붕·경사지붕 모두 가능하며 복잡한 형상 가공성 우수
• 단열 성능이 부족하여 하부 단열재와 거멀접기 접합 품질이 핵심

★ 시험 포인트
금속지붕 = 가볍고 방수 성능 우수 = 세련된 입면 기하학 적용 유리.`},{id:"12-1-3",label:"아스팔트싱글",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Song_bird_perched_on_asphalt_shingle_roof.JPG/330px-Song_bird_perched_on_asphalt_shingle_roof.JPG",caption:"Asphalt shingles (아스팔트싱글) on a residential roof"}],explanation:`유리섬유(Glass Fiber) 매트에 아스팔트를 코팅하고 색 자갈(Granule)을 살포하여 만든 경사 지붕재.

▶ 특징
• 경량이며 시공이 매우 간편함 (전용 못과 루핑 시트로 접착)
• 색상과 모양이 다양해 미관 우수
• 가격이 저렴해 빌라 및 단독주택 경사 지붕 표준 마감
• 강풍 시 들뜨거나 찢어지기 쉬움

★ 시험 포인트
아스팔트싱글 = 유리섬유+아스팔트 = 저렴·경량·셀프 시공 용이.`}]},{id:"12-2",label:"커튼월공사",children:[{id:"12-2-1",label:"멀리언방식",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Partially_completed_buildings_in_Wuhan.jpg/330px-Partially_completed_buildings_in_Wuhan.jpg",caption:"Curtain wall mullion stick system (멀리언방식) being installed on a high-rise"}],explanation:`수직 멀리언(Mullion) 부재를 먼저 건물 슬래브에 고정하고, 그 사이에 수평바와 유리를 조합해 설치하는 커튼월.

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
Mock-up Test 4대 항목(기밀, 정압수밀, 동압수밀, 구조) 정확하게 쓰기 및 예비시험(내풍압 50%) 단계가 매년 출제됩니다.`}]}]},{id:"13",label:"13. 공사관리",children:[{id:"13-1",label:"공정관리",children:[{id:"13-1-1",label:"바차트 (Bar Chart)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/GanttChartAnatomy.svg/330px-GanttChartAnatomy.svg.png",caption:"Gantt (bar) chart showing construction activity timeline (바차트)"}],explanation:`세로축에는 공정의 세부 작업명(Activity), 가로축에는 공사 일적 타임라인을 나타내고 작업 기간을 굵은 막대(Bar)로 그려 일정의 진행을 표시하는 가장 단순한 횡선식 공정표.

▶ 일정표의 장단점
• 장점:
  - 도표 구조가 대단히 단순하고 직관적이어서 건축주, 노무자, 비전문가 등 누구나 한눈에 공사의 개략적인 시작일, 완료일, 소요 일수를 파악할 수 있음.
  - 소규모 주택 공사나 단순 단기 공사에 가장 가성비 높게 일정 관리 도구로 활용 가능.
• 단점 (시험 출제 100%!):
  ① 작업 간의 상호 인과 관계(선후 관계, 연관성)를 전혀 표현할 수 없음 (예: 콘크리트 양생 완료 후에만 조적이 가능한 접합 관계 표현 불가).
  ② 어떤 작업이 지연될 때 전체 공기를 지연시키는 핵심 경로인 주공정선(Critical Path)을 찾을 수 없음.
  ③ 특정 공종 지연이 후속 공종에 미치는 연쇄 지연 여파 계산 불가능.

★ 시험 포인트
바차트(횡선식 공정표)의 결정적 단점 3가지(작업 간 선후 연관 관계 표시 불가, 주공정선 파악 불가, 일정 변경 시 수정 곤란)를 네트워크 공정표와 대비하여 쓰기 문제 기출.`},{id:"13-1-2",label:"네트워크공정표",children:[{id:"13-1-2-1",label:"CPM (주공정선)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Pert_chart_colored.svg/330px-Pert_chart_colored.svg.png",caption:"CPM network diagram showing critical path activities"}],explanation:`Critical Path Method. 네트워크 공정표에서 여유 시간(Float)이 전혀 없는 작업들을 선형으로 연결하여 전체 공사 기간을 지배하는 가장 긴 경로인 주공정선(Critical Path)을 결정하고 이를 중점 관리하는 공정 기법.

▶ 핵심 계산 및 용어
• 전진 계산 (Forward Pass): 시작점부터 공정표 진행 방향으로 덧셈 계산하여 각 작업의 가장 빠른 시작일(EST)과 완료일(EFT)을 산출.
• 후진 계산 (Backward Pass): 최종 완료 기한부터 시작점 역방향으로 뺄셈 계산하여 가장 늦은 시작일(LST)과 완료일(LFT)을 산출.
• 여유 시간 종류:
  - 총여유시간 (Total Float, TF): 전체 공기를 지연시키지 않는 한도 내에서 가질 수 있는 작업의 최대 여유 시간 (TF = LST - EST = LFT - EFT).
  - 자유여유시간 (Free Float, FF): 후속 작업의 가장 빠른 시작일(EST)을 지연시키지 않으면서 한 작업이 가질 수 있는 순수 여유 시간.
• 주공정선(Critical Path): TF = 0인 작업의 연속 경로. 이 경로 위의 작업이 단 1일만 지연되어도 전체 준공일이 즉시 지연됨.

★ 시험 포인트
네트워크 공정표 전진/후진 계산을 통한 각 노드의 EST, EFT, LST, LFT 구하기, 총여유시간(TF)과 자유여유시간(FF)의 공식 유도 및 주공정선(Critical Path) 경로 표시 기출율 최상위.`},{id:"13-1-2-2",label:"PERT",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Pert_chart_colored.svg/330px-Pert_chart_colored.svg.png",caption:"PERT chart for program evaluation and review technique"}],explanation:`Program Evaluation and Review Technique. 과거 시공 경험이 없거나 불확실성이 큰 연구개발, 신규 복합 건설 프로젝트의 소요 기간을 낙관, 최빈, 비관 3가지 시간 변수로 분석하여 확률적 완료 기한을 예측하는 공정 기법.

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
공기 단축은 반드시 주공정선(CP) 위에서만 적용하며, 비용구배가 최소인 작업부터 착수.`}]},{id:"13-2",label:"품질관리",children:[{id:"13-2-1",label:"관리도 (X-R 관리도)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Xbar_chart_for_a_paired_xbar_and_R_chart.svg/330px-Xbar_chart_for_a_paired_xbar_and_R_chart.svg.png",caption:"X-bar R control chart for statistical quality management"}],explanation:`공정의 품질 변동 상태를 꺾은선그래프로 나타내고, 이상 변동이 한계를 벗어나는지 관리하는 도구.

▶ 구성선
• UCL (Upper Control Limit): 관리 상한선 (중심에서 +3σ)
• CL (Center Line): 품질 목표 중심선
• LCL (Lower Control Limit): 관리 하한선 (중심에서 -3σ)

▶ 판정 기준
• 관리선(UCL, LCL) 외부로 점이 나가면 공정 이상
• 점들이 한쪽에 연달아 치우치는 현상(Run) 발생 시 불량 징후 분석 착수

★ 시험 포인트
관리도 = 3시그마 한계선 관리. 공정 이상 징후 조기 탐색용.`},{id:"13-2-2",label:"비파괴검사",children:[{id:"13-2-2-1",label:"방사선검사 (RT)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/RT_Film_Making_a_Radiograph.jpg/330px-RT_Film_Making_a_Radiograph.jpg",caption:"Radiographic testing (RT) — X-ray inspection of a weld"}],explanation:`X선 또는 γ선(감마선)을 철골 용접부에 투과하여 내부 결함 유무를 필름에 감광시켜 확인하는 비파괴검사.

▶ 특징
• 내부 결함(기공, 슬래그 혼입, 균열 등) 식별이 매우 정밀함
• 검사 결과가 필름(RT 필름)으로 남아 영구 보존 가능
• 방사선 위험성으로 검사 시 작업 반경 출입 통제 필요

★ 시험 포인트
방사선검사(RT) = 용접 내부 검사 표준 = 정밀한 필름 기록 보존성 우수.`},{id:"13-2-2-2",label:"초음파검사 (UT)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/UT_principe.svg/330px-UT_principe.svg.png",caption:"Ultrasonic testing (UT) pulse-echo method diagram"}],explanation:`초음파를 철골 용접부에 투과하고 반사되는 파형의 형태와 깊이로 결함의 유무를 분석하는 비파괴검사.

▶ 특징
• 내부 균열, 융합 불량 등 평면성 결함 탐지에 매우 뛰어남
• 방사선 위험이 없고 장비가 비교적 소형이어서 현장성 우수
• 결함 종류를 직접 목안으로 확인하기 어려워 숙련 기술자 필요

★ 시험 포인트
초음파검사(UT) = 현장 철골 내부 검사 주류 = 안전하고 균열 탐지 우수.`},{id:"13-2-2-3",label:"자분탐상검사 (MT)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Wet_magnetic_particle_testing_on_a_pipeline.jpg/330px-Wet_magnetic_particle_testing_on_a_pipeline.jpg",caption:"Magnetic particle testing (MT) on a pipeline to detect cracks"}],explanation:`철골 부재를 전자기력으로 자화시킨 후 자분(철가루)을 뿌려 결함부 주변의 누설 자장에 모여드는 자분 띠로 결함을 탐지하는 기법.

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
파레토도, 특성요인도, 히스토그램(도수분포표), 관리도(X-R)의 각 정의를 1:1로 묻는 단답형 및 명칭 쓰기에 대비하세요.`}]}]},{id:"14",label:"14. 목공사",children:[{id:"14-1",label:"목재의 결점",children:[{id:"14-1-1",label:"옹이",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/16_wood_samples.jpg/330px-16_wood_samples.jpg",caption:"Wood knots (옹이) visible in cross-sections of lumber samples"}],explanation:`나뭇가지가 줄기에 파묻혀 자란 흔적으로, 목재 횡단면상에 매우 단단한 짙은 원형 나이테로 남아있는 부분.

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
껍질박이 = 성장 중 수피가 내부 침투 = 목재 연속성 단절 및 약점 형성.`},{id:"14-1-4",label:"썩음",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Braunfaeule_Holz_FI20070208.jpg/330px-Braunfaeule_Holz_FI20070208.jpg",caption:"Brown rot (썩음) wood decay causing structural deterioration in timber"}],explanation:`목재 부패균(Fungus)이 목재의 섬유소 성분을 분해해 강도를 소실시키고 가벼운 부스러기로 만드는 병해.

▶ 부패균 4대 생장 조건
① 온도: 20~35°C
② 수분: 함수율 20% 이상
③ 공기: 산소 존재
④ 영양: 목재 자체 성분
→ 대책: 목재 함수율을 섬유포화점 이하(15% 이하)로 철저히 건조하거나, 방부제 도포.

★ 시험 포인트
부패균 4대 조건(온도·수분·공기·영양). 목재 건조(함수율 15% 이하)가 최선의 예방.`}]},{id:"14-2",label:"함수율·섬유포화점 (28~30%)",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Neat_organized_wood_drying_rack_%283947424419%29.jpg/330px-Neat_organized_wood_drying_rack_%283947424419%29.jpg",caption:"Lumber drying racks — controlling wood moisture content (함수율)"}],explanation:`목재 세포 내부에 존재하는 수분의 비율과 목재의 수축팽창, 균열, 휨 강도 변동 간의 한계 물리적 상관관계.

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
섬유포화점(FSP)의 정확한 백분율 수치(28~30%) 및 물리적 의미, FSP 이하 조건에서 함수율 감소 시 나타나는 강도(증가)와 부피(수축) 변화의 반비례 특징 서술, 목재 방향별 수축율 크기 비교(접선>반경>섬유) 기출.`},{id:"14-3",label:"이음과 맞춤",children:[{id:"14-3-1",label:"장부이음",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Mortise_and_tenon_joint.svg/330px-Mortise_and_tenon_joint.svg.png",caption:"Mortise and tenon (장부이음) joint — traditional timber connection"}],explanation:`한 부재의 끝단에 촉(장부)을 돌출시키고, 상대 부재에 정밀한 구멍(장부구멍)을 파서 끼워 결합하는 이음.

▶ 특징
• 못이나 접착제 없이도 기계적 강도가 확실함
• 한옥 기둥-보, 창호 문틀 모서리 마감의 기본
• 촉의 길이와 결합 밀착도가 구조 성능 결정

★ 시험 포인트
장부이음 = 돌기(장부)+구멍 결합 = 한옥 목조건물의 기본 접합.`},{id:"14-3-2",label:"반턱이음",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Woodworking_lap_joints.svg/330px-Woodworking_lap_joints.svg.png",caption:"Half-lap joint (반턱이음) — two timber members overlapping at mid-depth"}],explanation:`두 목재 부재의 접합 단부 두께를 각각 50%(반씩) 따내어 서로 포개어 맞대는 단순 이음.

▶ 특징
• 부재의 원래 두께와 수평 단면이 유지됨
• 시공성이 매우 편리해 가설 비계나 간단한 인테리어 틀재에 사용
• 당기는 힘(인장력)에 매우 약해 못이나 볼트 보강 필수

★ 시험 포인트
반턱이음 = 두께 반씩 깎아 포갬 = 인장 보강용 못·피스 체결 필수.`},{id:"14-3-3",label:"주먹장이음",images:[{url:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Finished_dovetail.jpg/330px-Finished_dovetail.jpg",caption:"Dovetail joint (주먹장이음) — interlocking wedge-shaped timber connection"}],explanation:`부재 끝단을 나비 날개 또는 주먹 쥔 손 모양의 쐐기 형태로 비스듬히 가공하여 끼우는 결합 공법.

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
조적 적산 계산(면적 × B별 매수 × 할증), 거푸집 산출 시 1.0m2 이하 개구부 공제 제외 규정, 콘크리트 중첩 시 기둥 우선 원칙을 적용한 계산식이 시험 단골 고배점 문항입니다.`}]}]}]},H3={id:"root",label:"건축구조",children:[{id:"part1",label:"제1편 구조역학",children:[{id:"ch1-1",label:"힘의 합성과 회전",children:[{id:"ch1-1-1",label:"합력"},{id:"ch1-1-2",label:"모멘트"},{id:"ch1-1-3",label:"우력"},{id:"ch1-1-4",label:"바리뇽의 정리"},{id:"ch1-1-5",label:"라미의 정리"},{id:"ch1-1-6",label:"sin 법칙"},{id:"ch1-1-7",label:"벡터 · 스칼라"}]},{id:"ch1-2",label:"힘의 평형",children:[{id:"ch1-2-1",label:"평형조건"},{id:"ch1-2-2",label:"부정정차수"},{id:"ch1-2-3",label:"이동지점 (롤러)"},{id:"ch1-2-4",label:"회전지점 (힌지)"},{id:"ch1-2-5",label:"고정지점"},{id:"ch1-2-6",label:"정정구조 · 부정정구조"}]},{id:"ch1-3",label:"지점반력",children:[{id:"ch1-3-1",label:"반력 계산"},{id:"ch1-3-2",label:"단순보"},{id:"ch1-3-3",label:"캔틸레버보"},{id:"ch1-3-4",label:"내민보"},{id:"ch1-3-5",label:"겔버보"},{id:"ch1-3-6",label:"아치"},{id:"ch1-3-7",label:"중첩의 원리"}]},{id:"ch1-4",label:"전단력 · 휨모멘트",children:[{id:"ch1-4-1",label:"전단력 (SF)"},{id:"ch1-4-2",label:"휨모멘트 (BM)"},{id:"ch1-4-3",label:"SFD (전단력도)"},{id:"ch1-4-4",label:"BMD (휨모멘트도)"},{id:"ch1-4-5",label:"부재력 · 내력"},{id:"ch1-4-6",label:"절대최대 휨모멘트"}]},{id:"ch1-5",label:"트러스 구조해석",children:[{id:"ch1-5-1",label:"트러스 기본 개념"},{id:"ch1-5-2",label:"절점법"},{id:"ch1-5-3",label:"절단법"},{id:"ch1-5-4",label:"영부재"},{id:"ch1-5-5",label:"축방향력"}]},{id:"ch1-6",label:"단면의 성질",children:[{id:"ch1-6-1",label:"단면 1차 모멘트"},{id:"ch1-6-2",label:"단면 2차 모멘트 (I)"},{id:"ch1-6-3",label:"단면계수 (Z)"},{id:"ch1-6-4",label:"도심 · 중립축"},{id:"ch1-6-5",label:"회전반경"}]},{id:"ch1-7",label:"응력과 변형률",children:[{id:"ch1-7-1",label:"수직응력 · 전단응력"},{id:"ch1-7-2",label:"변형률 (ε)"},{id:"ch1-7-3",label:"후크의 법칙"},{id:"ch1-7-4",label:"탄성계수 (E)"},{id:"ch1-7-5",label:"포아송비 (ν)"}]},{id:"ch1-8",label:"보의 휨변형",children:[{id:"ch1-8-1",label:"처짐 (δ)"},{id:"ch1-8-2",label:"처짐각 (θ)"},{id:"ch1-8-3",label:"공액보법"},{id:"ch1-8-4",label:"탄성곡선"}]},{id:"ch1-9",label:"기둥",children:[{id:"ch1-9-1",label:"단주 · 장주"},{id:"ch1-9-2",label:"편심 압축"},{id:"ch1-9-3",label:"핵 (kern)"},{id:"ch1-9-4",label:"좌굴 (buckling)"},{id:"ch1-9-5",label:"오일러 공식"}]},{id:"ch1-10",label:"부정정구조",children:[{id:"ch1-10-1",label:"변위일치법"},{id:"ch1-10-2",label:"처짐각법"},{id:"ch1-10-3",label:"모멘트분배법"},{id:"ch1-10-4",label:"고정단모멘트"},{id:"ch1-10-5",label:"분배율 · 전달률"}]}]},{id:"part2",label:"제2편 철근콘크리트구조",children:[{id:"ch2-1",label:"RC 해석과 설계의 원칙",children:[{id:"ch2-1-1",label:"강도설계법 (USD)"},{id:"ch2-1-2",label:"하중계수 (U)"},{id:"ch2-1-3",label:"강도감소계수 (φ)"},{id:"ch2-1-4",label:"소요강도 · 설계강도"},{id:"ch2-1-5",label:"공칭강도"}]},{id:"ch2-2",label:"RC구조해석 일반사항",children:[{id:"ch2-2-1",label:"탄성계수 (Ec, Es)"},{id:"ch2-2-2",label:"탄성계수비 (n)"},{id:"ch2-2-3",label:"T형보 · 유효폭"},{id:"ch2-2-4",label:"철근비 (ρ)"},{id:"ch2-2-5",label:"띠철근 · 나선철근"}]},{id:"ch2-3",label:"RC 단철근 보 해석",children:[{id:"ch2-3-1",label:"단철근 직사각형 보"},{id:"ch2-3-2",label:"등가응력블록 (Whitney)"},{id:"ch2-3-3",label:"균형철근비 (ρb)"},{id:"ch2-3-4",label:"인장지배 · 압축지배"},{id:"ch2-3-5",label:"공칭휨강도 (Mn)"}]},{id:"ch2-4",label:"RC 전단설계",children:[{id:"ch2-4-1",label:"전단강도 (Vn)"},{id:"ch2-4-2",label:"스터럽 (Stirrup)"},{id:"ch2-4-3",label:"전단철근 간격"},{id:"ch2-4-4",label:"사인장균열"},{id:"ch2-4-5",label:"복부보강"}]},{id:"ch2-5",label:"RC 슬래브",children:[{id:"ch2-5-1",label:"1방향 슬래브"},{id:"ch2-5-2",label:"2방향 슬래브"},{id:"ch2-5-3",label:"철근 간격"},{id:"ch2-5-4",label:"최소두께"}]},{id:"ch2-6",label:"RC구조 사용성",children:[{id:"ch2-6-1",label:"처짐 제한"},{id:"ch2-6-2",label:"균열 제어"},{id:"ch2-6-3",label:"내구성"},{id:"ch2-6-4",label:"피복두께"}]},{id:"ch2-7",label:"RC구조 철근 상세",children:[{id:"ch2-7-1",label:"정착길이 (ld)"},{id:"ch2-7-2",label:"이음 (겹침·기계적·용접)"},{id:"ch2-7-3",label:"갈고리 (Hook)"},{id:"ch2-7-4",label:"부착강도"},{id:"ch2-7-5",label:"철근 간격 · 피복두께"}]}]},{id:"part3",label:"제3편 강구조",children:[{id:"ch3-1",label:"강구조 일반사항",children:[{id:"ch3-1-1",label:"강재의 종류 (SS400, SM)"},{id:"ch3-1-2",label:"허용응력설계법"},{id:"ch3-1-3",label:"항복강도 · 인장강도"},{id:"ch3-1-4",label:"잔류응력 · 취성파괴"}]},{id:"ch3-2",label:"강구조 접합 (I) — 볼트",children:[{id:"ch3-2-1",label:"고장력볼트 (HTB)"},{id:"ch3-2-2",label:"마찰접합 · 지압접합"},{id:"ch3-2-3",label:"볼트 전단강도"},{id:"ch3-2-4",label:"순단면 · 전단지연"}]},{id:"ch3-3",label:"강구조 접합 (II) — 용접",children:[{id:"ch3-3-1",label:"맞댐용접 (BW)"},{id:"ch3-3-2",label:"필릿용접 (FW)"},{id:"ch3-3-3",label:"유효목두께 (a)"},{id:"ch3-3-4",label:"용접 강도 계산"}]},{id:"ch3-4",label:"강구조 부재 설계",children:[{id:"ch3-4-1",label:"인장재 설계"},{id:"ch3-4-2",label:"압축재 (기둥) 설계"},{id:"ch3-4-3",label:"좌굴 · 세장비 (λ)"},{id:"ch3-4-4",label:"유효좌굴길이 (KL)"},{id:"ch3-4-5",label:"판좌굴 (국부좌굴)"}]}]},{id:"part4",label:"제4편 건축구조 일반사항",children:[{id:"ch4-1",label:"구조시스템",children:[{id:"ch4-1-1",label:"라멘구조"},{id:"ch4-1-2",label:"전단벽 구조"},{id:"ch4-1-3",label:"내력벽 구조"},{id:"ch4-1-4",label:"코어 시스템"},{id:"ch4-1-5",label:"아웃리거 시스템"},{id:"ch4-1-6",label:"튜브 구조"}]},{id:"ch4-2",label:"토질 및 기초",children:[{id:"ch4-2-1",label:"토질 기본 성질"},{id:"ch4-2-2",label:"독립기초 · 복합기초"},{id:"ch4-2-3",label:"온통기초 (매트기초)"},{id:"ch4-2-4",label:"지지력 · 침하"},{id:"ch4-2-5",label:"말뚝기초"}]},{id:"ch4-3",label:"내진 설계",children:[{id:"ch4-3-1",label:"지진하중 산정"},{id:"ch4-3-2",label:"반응수정계수 (R)"},{id:"ch4-3-3",label:"밑면전단력 (V)"},{id:"ch4-3-4",label:"층간변위 제한"},{id:"ch4-3-5",label:"중요도계수 (Ie)"}]}]}]},B3={"ch1-1-1":{title:"합력",content:`## 핵심 개념
동일 작용점에 여러 힘이 작용할 때, 이들의 효과와 동등한 하나의 가상적인 힘을 **합력**이라 한다.

## 중요 공식
2차원 평면 상의 두 힘 $F_1, F_2$의 사이각이 $\x07lpha$일 때 합력 $R$:
$$R = sqrt{F_1^2 + F_2^2 + 2F_1F_2cosalpha}$$

## 시험 포인트
- 힘은 크기와 방향을 가지는 **벡터(Vector)**량이므로 단순 합산이 아닌 벡터 합을 구해야 함.
- 두 힘의 크기가 같고 사이각이 120°이면 합력의 크기도 두 힘의 크기와 같음.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
합성과 회전
CHECK
작용점이 같은 두 힘의 합력, 모멘트의 정의에 따른 계산, 우력의 특징,
바리뇽의 정리, 라미의 정리
n 이 단위,  (시계방향)리스 문자
(1) SI 단위
학습 PO1NT
1960년 11차 국제도량형총회(GeneR_Al Con↓erence on Weigh↑s and Measures)에서 규정되고 공인된
MKS 절대단위계로서 기본단위를 길이(미터, m), 시간(초, s), 질량(킬로 (시계방향)램, kg)으로 하며 힘은
F= m • a로부터 유도된 단위로서 1N = (1kg) (1m/s²) = 1kg • m/s2을 표준단위로 하고 있다.
\`\`\``},"ch1-1-2":{title:"모멘트",content:`## 핵심 개념
힘이 물체를 특정 회전축 또는 점을 중심으로 회전시키려는 물리적인 효과의 척도를 **모멘트**라 한다.

## 중요 공식
모멘트 $M$ (단위: $Ncdot m$ 또는 $kNcdot m$):
$$M = F cdot d$$
- $F$: 작용하는 힘
- $d$: 회전 중심점(축)에서 힘의 작용선까지의 **수직 거리(모멘트 팔)**

## 시험 포인트
- 모멘트의 부호는 일반적으로 시계 방향을 (+), 반시계 방향을 (-)로 규정한다.
- 힘이 작용점을 지나면 모멘트 팔의 거리가 0이 되므로 모멘트값은 0이다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
합성과 회전
CHECK
작용점이 같은 두 힘의 합력, 모멘트의 정의에 따른 계산, 우력의 특징,
바리뇽의 정리, 라미의 정리
n 이 단위,  (시계방향)리스 문자
(1) SI 단위
학습 PO1NT
1960년 11차 국제도량형총회(GeneR_Al Con↓erence on Weigh↑s and Measures)에서 규정되고 공인된
MKS 절대단위계로서 기본단위를 길이(미터, m), 시간(초, s), 질량(킬로 (시계방향)램, kg)으로 하며 힘은
F= m • a로부터 유도된 단위로서 1N = (1kg) (1m/s²) = 1kg • m/s2을 표준단위로 하고 있다.
\`\`\``},"ch1-1-3":{title:"우력",content:`## 핵심 개념
크기가 같고 방향이 반대이며 작용선이 평행한 두 힘의 쌍을 **우력(Couple)**이라 한다.

## 중요 공식
우력 모멘트 $M_c$:
$$M_c = F cdot d$$
- $F$: 우력을 이루는 한 힘의 크기
- $d$: 두 평행한 힘 사이의 수직 거리

## 시험 포인트
- 우력은 모멘트만 발생시키고 수평·수직 합력은 0이다.
- 우력 모멘트는 임의의 기준점에 대해 항상 일정한 크기와 방향을 갖는다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
합성과 회전
CHECK
작용점이 같은 두 힘의 합력, 모멘트의 정의에 따른 계산, 우력의 특징,
바리뇽의 정리, 라미의 정리
n 이 단위,  (시계방향)리스 문자
(1) SI 단위
학습 PO1NT
1960년 11차 국제도량형총회(GeneR_Al Con↓erence on Weigh↑s and Measures)에서 규정되고 공인된
MKS 절대단위계로서 기본단위를 길이(미터, m), 시간(초, s), 질량(킬로 (시계방향)램, kg)으로 하며 힘은
F= m • a로부터 유도된 단위로서 1N = (1kg) (1m/s²) = 1kg • m/s2을 표준단위로 하고 있다.
\`\`\``},"ch1-1-4":{title:"바리뇽의 정리",content:`## 핵심 개념
**합력의 모멘트 = 각 분력의 모멘트의 합**

여러 힘을 따로 계산해서 더해도 합력을 직접 계산한 것과 같다. 복잡한 하중을 단순화하는 핵심 도구.

## 중요 공식
R × x̄ = F₁×d₁ + F₂×d₂ + F₃×d₃ + ...

- R = 합력의 크기 (모든 힘의 합)
- x̄ = 합력의 작용점 (기준점까지 거리)
- d_i = 각 힘의 모멘트 팔 (기준점까지 수직거리)

## 계산 예제
6m 보 위 세 집중하중: P₁=10kN(2m), P₂=20kN(4m), P₃=15kN(6m)

합력: R = 10 + 20 + 15 = 45 kN
A점 기준 모멘트:
45 × x̄ = 10×2 + 20×4 + 15×6 = 190
x̄ = 190 ÷ 45 = 4.22 m

## 분포하중 적용
- **균일분포(UDL)**: 합력 = w×L, 작용점 = **중간(L/2)**
- **삼각형분포**: 합력 = ½×w_max×L, 작용점 = **큰 쪽에서 1/3**

## 시험 포인트
- ΣM = 0 계산 = 이미 바리뇽 정리 사용 중
- **기준점은 계산 편한 곳** (지점, 하중 집중점) 선택
- 분포하중 → **반드시 합력으로 변환 후** 모멘트 계산
- 부호: 시계방향(+), 반시계방향(-) 통일 필수`},"ch1-1-5":{title:"라미의 정리",content:`## 핵심 개념
세 힘이 한 점에서 작용하여 **평형**을 이룰 때, 각 힘의 크기는 그 힘의 **맞은편 각도의 sin값**에 비례한다.

## 적용 조건
- 반드시 **세 힘**이 한 점에 작용
- 세 힘의 합력 = 0 (평형 상태)
- 세 힘이 같은 평면 위에 존재

## 중요 공식
F₁/sin α = F₂/sin β = F₃/sin γ

- α = F₂와 F₃ 사이의 각도 (F₁의 맞은편)
- β = F₁과 F₃ 사이의 각도 (F₂의 맞은편)
- γ = F₁과 F₂ 사이의 각도 (F₃의 맞은편)
- 세 각도의 합 = 360°

## 계산 예제 — 케이블 두 개로 하중 지지
왼쪽 30°, 오른쪽 60° 케이블로 W = 10 kN 지지:

각도 파악 (합 = 90° + 150° + 120° = 360°):
- W의 맞은편 = 두 케이블 사이 각도 = 90°
- T_A(왼쪽)의 맞은편 = 150°
- T_B(오른쪽)의 맞은편 = 120°

라미의 정리 적용:
- T_A = 10 × sin 150° = 5 kN
- T_B = 10 × sin 120° ≈ 8.66 kN

## 활용 사례
- **케이블/줄 2개 + 하중**: 가장 전형적인 출제 유형
- **경사 버팀대(Strut)**: 압축력·케이블장력·하중 세 힘 평형
- **도르래 결합점**: 두 장력과 합력의 관계

## 시험 포인트
- **힘의 방향은 결합점 기준 바깥으로** 통일해야 각도 혼선 없음
- 각도 세 개의 합이 **360°** 인지 먼저 검산
- sin 값이 0 또는 이상한 값 → 힘 방향 설정 다시 확인`},"ch1-1-6":{title:"sin 법칙",content:`## 핵심 개념
삼각형에서 각 변의 길이와 그 대각의 사인값의 비율이 항상 일정하다는 법칙이다. 힘의 삼각형을 해석할 때 요긴하게 쓰인다.

## 중요 공식
$$\frac{a}{sin A} = \frac{b}{sin B} = \frac{c}{sin C}$$

## 시험 포인트
- 라미의 정리는 힘의 평형 상태에서 이 sin 법칙을 응용한 특수한 형태이다.
- 세 각과 세 힘의 대응 관계를 삼각형 비례식으로 신속하게 연계하여 푼다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
합성과 회전
CHECK
작용점이 같은 두 힘의 합력, 모멘트의 정의에 따른 계산, 우력의 특징,
바리뇽의 정리, 라미의 정리
n 이 단위,  (시계방향)리스 문자
(1) SI 단위
학습 PO1NT
1960년 11차 국제도량형총회(GeneR_Al Con↓erence on Weigh↑s and Measures)에서 규정되고 공인된
MKS 절대단위계로서 기본단위를 길이(미터, m), 시간(초, s), 질량(킬로 (시계방향)램, kg)으로 하며 힘은
F= m • a로부터 유도된 단위로서 1N = (1kg) (1m/s²) = 1kg • m/s2을 표준단위로 하고 있다.
\`\`\``},"ch1-1-7":{title:"벡터 · 스칼라",content:`## 핵심 개념
물리량을 표현할 때 크기만을 나타내는 스칼라(Scalar)와 크기와 방향을 동시에 가지는 벡터(Vector)로 구분한다.

## 물리량 분류
- **스칼라**: 길이, 질량, 시간, 면적, 온도, 일, 에너지
- **벡터**: 힘, 속도, 가속도, 모멘트, 변위

## 시험 포인트
- 힘은 대표적인 벡터량이므로 2차원 평면 상에서 합산 시 각도 성분 분해가 필요하다.
- 스칼라 연산은 대수적 합산이 가능하지만 벡터는 기하학적 합산이 필수적이다.`},"ch1-2-1":{title:"평형조건",content:`## 핵심 개념
구조물이 이동하거나 회전하지 않고 안정적인 상태를 유지하기 위해 만족해야 하는 역학적 평형 조건이다.

## 중요 공식 (평형 3조건)
1. 수평 힘의 합 = 0: $$sum F_x = 0$$
2. 수직 힘의 합 = 0: $$sum F_y = 0$$
3. 모멘트 합 = 0: $$sum M = 0$$

## 시험 포인트
- 정정 구조물은 이 평형 3조건식만을 이용하여 모든 반력과 부재력을 계산해 낼 수 있다.
- 모멘트의 기준점은 연산이 가장 단순해지는 지점(미지 반력이 많은 곳)으로 설정한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
I ① P
I ②$
—：—：—
T^----- s-----^w i---- ^2w ----->P
서 ③{
④ 2P
(1) 수평하중만 작용하므로 수직평형 및 모멘트평형조건을 고려할 필요가 없다.
(2) W=0： —0 + (w)十(2w) + (P)=0 "* ―2P 이므로 w = 으
핵장피제2 ।.................................................................... .............................................
：  (시계방향)림과 같은 구조물에 작용하는 4개의 힘이 평형을 이룰 때 F의 크기 및
\`\`\``},"ch1-2-2":{title:"부정정 차수",content:`## 핵심 개념
평형방정식(3개)으로 풀 수 없는 **미지 반력의 초과 수**. 이 수만큼 추가 조건(변형 적합)이 필요하다.

## 핵심 공식
n = r - (3 + c)

- r = 총 반력 수
- 3 = 평형방정식 수 (ΣFx, ΣFy, ΣM)
- c = 내부 힌지(게르버 힌지) 수

## 지점별 반력 수 — 반드시 암기
- **이동지점 (롤러)**: 반력 1개 (수직)
- **회전지점 (핀/힌지)**: 반력 2개 (수직 + 수평)
- **고정지점 (Fixed)**: 반력 3개 (수직 + 수평 + 모멘트)

## 구조별 부정정 차수
- **단순보** (힌지+롤러): r=3 → n=0 정정
- **캔틸레버보** (고정단): r=3 → n=0 정정
- **고정+롤러**: r=4 → **n=1** 1차 부정정
- **고정+힌지**: r=5 → **n=2** 2차 부정정
- **양단 고정보**: r=6 → **n=3** 3차 부정정

## 판별 기준
- n < 0 → **불안정** (무너짐)
- n = 0 → **정정** (평형방정식만으로 해결)
- n > 0 → **n차 부정정** (변위일치법, 처짐각법 등 필요)

## 시험 포인트
- **이동1 / 회전2 / 고정3** 반드시 암기
- 게르버 힌지 1개 = c값 +1 = 조건식 1개 추가
- n=0이어도 지점이 모두 평행(수직)이면 **수평 불안정**
- 양단고정보(n=3)는 **모멘트분배법** 적용 대표 예제`},"ch1-2-3":{title:"이동지점 (롤러)",content:`## 핵심 개념
지반에 롤러로 지지되어 수평 방향 및 회전은 자유롭고, 수직 방향의 이동만 구속하는 지점이다.

## 반력 특성
- 수직 반력 **1개** 존재
- 수평 반력 = 0, 모멘트 반력 = 0

## 시험 포인트
- 이동단(롤러)은 상부 구조물의 온도 변화나 건조수축에 따른 수평 변형을 자유롭게 허용하여 2차 응력을 방지하는 목적으로 사용된다.
- 교량의 한쪽 지점이나 단순보의 우측 지점에 흔히 배치된다.`},"ch1-2-4":{title:"회전지점 (힌지)",content:`## 핵심 개념
지반에 핀으로 연결되어 회전은 자유롭고 수평 및 수직 방향의 이동을 구속하는 지점이다.

## 반력 특성
- 수직 및 수평 반력 **2개** 존재 (회전은 구속하지 않으므로 모멘트 반력은 없음)
- 지점 모멘트 $M_A = 0$

## 시험 포인트
- 단순보의 좌측 지점 또는 트러스의 절점 연결부에 주로 회전단(힌지)이 쓰인다.
- 핀 연결부에 하중이 작용해도 힌지점 자체에서는 모멘트 회전이 자유롭다는 성질을 평형방정식 수립에 적극 활용한다.`},"ch1-2-5":{title:"고정지점",content:`## 핵심 개념
수평 및 수직 방향의 변위뿐만 아니라 회전각 변위까지 완벽하게 구속하는 지점이다.

## 반력 특성
- 수직 반력, 수평 반력, 모멘트 반력 **3개** 존재
- 지점 변위 $delta = 0$, 회전각 $	heta = 0$

## 시험 포인트
- 캔틸레버보의 고정단 또는 라멘 구조의 기초 결합부에 주로 고정단이 배치된다.
- 구조 해석 시 3개의 반력이 작용하므로 평형 3조건식만으로 하나의 고정단 반력을 바로 구할 수 있다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
사용되는 많은 부재 요소들의 집합체라고 정의할 수 있다.
다음의 세 가지 이상화된 지지모델들은 이동지점 및 회전지점에서는 작은 양 만큼의 수평 및 수직이동이 존재할 것이고,
고정지점에서는 작은 양 만큼의 회전이 존재할 것이며, 어떤 지점이든 전적으로 마찰（Fric↑ion）에 대해 자유로울 수 없을
것이지만 이러한 편차들은 구조물의 실제 거동에는 δ주 작은 영향을 미칠 것이므로 안전하게 무시될 수 있게 된다.
δ동지점
（Roller Suppor↑, δ동단）
Beam
Anchor B어↑
in Slo↑↑ed H이e
Concre↑e Wall
\`\`\``},"ch1-2-6":{title:"정정구조 · 부정정구조",content:`## 핵심 개념
- **정정 구조**: 평형 3조건식만으로 반력과 부재력을 모두 구할 수 있는 구조물 ($n=0$)
- **부정정 구조**: 조건식보다 미지수가 많아 변형 적합 방정식이 추가로 필요한 구조물 ($n>0$)

## 판별 기준
- 부정정 차수 $n$:
  - $n < 0$: 불안정 구조 (무너짐)
  - $n = 0$: 정정 구조 (안정)
  - $n > 0$: $n$차 부정정 구조 (안정)

## 시험 포인트
- 부정정 구조물은 한 지점이 침하되거나 온도 변화가 있을 때 내부에 2차 응력이 발생하므로 주의해야 한다.`},"ch1-3-1":{title:"반력 계산",content:`## 핵심 개념
상부 하중에 대항하여 구조물의 지점에서 지반이나 지지 기둥이 버텨내는 반작용력을 계산하는 방법이다.

## 계산 절차
1. 미지 반력의 방향(수직, 수평, 모멘트)을 가상으로 설정한다.
2. 평형 방정식 수립:
   - $$sum F_x = 0, sum F_y = 0, sum M = 0$$
3. 모멘트 방정식 수립 시, 하나의 미지 지점을 기준으로 잡아 식을 단순화한다.

## 시험 포인트
- 계산 결과가 음수(-)가 나오면, 최초 설정한 반력의 방향과 반대임을 나타낸다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
지점 상태
H 나 £"~
쓰 I—
■ 건축구조 30
El 단순보(Simple Beam)의 반력 계산
(1) 평형 3조건식의 적용:
ΣF=0, —+ , SK=O, ? 十, SM=O, 즈 +
■ 단순보의 지점반력을 계산할 수 있다면
부재력, 부재력도를 이해할 수 있게
되며, 이후의 정정보(캔틸레버보,
\`\`\``},"ch1-3-2":{title:"단순보",content:`## 핵심 개념
양단 중 일측은 회전단(힌지), 타측은 이동단(롤러)으로 지지되어 하중을 지탱하는 가장 대표적인 정정 보이다.

## 중요 반력 공식
보의 중앙(L/2)에 집중하중 $P$가 작용 시 반력:
$$R_A = R_B = \frac{P}{2}$$
보 전체에 등분포하중 $w$가 작용 시 반력:
$$R_A = R_B = \frac{wL}{2}$$

## 시험 포인트
- 단순보는 수직 하중 하에서 휨 압축이 상부에, 휨 인장이 하부에 발생한다.
- 횡변형이 자유롭기 때문에 온도하중이나 건조수축에 따른 추가 2차 응력이 거의 생기지 않는다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
지점반력 (Reac↑ion)
CHECK
(1) 보의 지점반력: 단순보(Simple Beam), 캔틸레버보(Can↑ilever Beam), 내민보(Overhanging Beam),
겔버보(Gerber Beam)
(2) 3-Hinge 구조의 지점반력: 라멘(R_Ahmen), δ치(Arch)
U 주요 하중(Load)의 종류 및 표기방법
(1) 집중호주(Concen↑R_A↑ed Load, P)
부재의 특정 위치에서 한 점(Poin↑)에 작용하는 하중을 말하며, 집중하중의
기호는 주로 P로 표현하고, 단위는 힘의 단위［N, kN］를 적용한다.
지표면과 수직으로 작용할 때를 수직집중하중 또는 연직집중하중이라고 하며,
\`\`\``},"ch1-3-3":{title:"캔틸레버보",content:`## 핵심 개념
일단은 고정단으로 완벽히 구속되어 있고, 타단은 아무런 지지 없이 완전히 자유롭게 열려 있는 정정 보이다.

## 중요 반력 공식
자유단 끝에 집중하중 $P$가 작용할 때 고정단 반력:
- 수직 반력 $V_A = P$
- 모멘트 반력 $M_A = P cdot L$ (반시계)

## 시험 포인트
- 하중이 작용할 때 부재 상부에 인장력(인장 철근 배치 필요)이, 하부에 압축력이 작용하는 특이한 거동을 보인다.
- 자유단 끝에서의 모멘트 값은 항상 0이다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
지점반력 (Reac↑ion)
CHECK
(1) 보의 지점반력: 단순보(Simple Beam), 캔틸레버보(Can↑ilever Beam), 내민보(Overhanging Beam),
겔버보(Gerber Beam)
(2) 3-Hinge 구조의 지점반력: 라멘(R_Ahmen), δ치(Arch)
U 주요 하중(Load)의 종류 및 표기방법
(1) 집중호주(Concen↑R_A↑ed Load, P)
부재의 특정 위치에서 한 점(Poin↑)에 작용하는 하중을 말하며, 집중하중의
기호는 주로 P로 표현하고, 단위는 힘의 단위［N, kN］를 적용한다.
지표면과 수직으로 작용할 때를 수직집중하중 또는 연직집중하중이라고 하며,
\`\`\``},"ch1-3-4":{title:"내민보",content:`## 핵심 개념
단순보의 지점 바깥쪽으로 보 부재의 일부가 외팔보(캔틸레버) 형태로 삐져나와 연장된 구조이다.

## 역학적 특징
- 지점 A와 B 사이에 단순보 구동 성질과 지점 바깥쪽 캔틸레버 구동 성질이 공존한다.
- 삐져나온 구간의 끝단 하중은 인접 지점에 역방향 회전 모멘트를 전달한다.

## 시험 포인트
- 내민 구간의 하중으로 인해 지점 내부에는 휨모멘트 부호가 바뀌는 **변곡점(Inflection Point)**이 존재할 수 있다.
- 지점 반력 계산 시 외곽 내민 부분의 하중 모멘트를 잊지 말고 계산에 포함해야 한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
지점반력 (Reac↑ion)
CHECK
(1) 보의 지점반력: 단순보(Simple Beam), 캔틸레버보(Can↑ilever Beam), 내민보(Overhanging Beam),
겔버보(Gerber Beam)
(2) 3-Hinge 구조의 지점반력: 라멘(R_Ahmen), δ치(Arch)
U 주요 하중(Load)의 종류 및 표기방법
(1) 집중호주(Concen↑R_A↑ed Load, P)
부재의 특정 위치에서 한 점(Poin↑)에 작용하는 하중을 말하며, 집중하중의
기호는 주로 P로 표현하고, 단위는 힘의 단위［N, kN］를 적용한다.
지표면과 수직으로 작용할 때를 수직집중하중 또는 연직집중하중이라고 하며,
\`\`\``},"ch1-3-5":{title:"겔버보",content:`## 핵심 개념
연속보의 중간중간에 내부 힌지(게르버 힌지)를 삽입하여, 부정정 구조물을 정정 구조물로 단순화한 형태의 보이다.

## 역학적 특징
- 연속보는 원래 부정정이지만 내부 힌지 하나당 모멘트가 0이 되는 조건식($M_c=0$)이 추가되므로 정정 해석이 가능해진다.
- 힌지를 기준으로 독립된 단순보/캔틸레버 구조로 분할하여 단계별로 반력을 구한다.

## 시험 포인트
- 힌지 부위에서는 휨모멘트가 항상 **0**이다.
- 하중 전달 경로를 파악할 때 힌지로 매달려 있는 종속적인 보를 먼저 해석하고, 그 반력을 주 보의 하중으로 넘겨준다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
지점반력 (Reac↑ion)
CHECK
(1) 보의 지점반력: 단순보(Simple Beam), 캔틸레버보(Can↑ilever Beam), 내민보(Overhanging Beam),
겔버보(Gerber Beam)
(2) 3-Hinge 구조의 지점반력: 라멘(R_Ahmen), δ치(Arch)
U 주요 하중(Load)의 종류 및 표기방법
(1) 집중호주(Concen↑R_A↑ed Load, P)
부재의 특정 위치에서 한 점(Poin↑)에 작용하는 하중을 말하며, 집중하중의
기호는 주로 P로 표현하고, 단위는 힘의 단위［N, kN］를 적용한다.
지표면과 수직으로 작용할 때를 수직집중하중 또는 연직집중하중이라고 하며,
\`\`\``},"ch1-3-6":{title:"아치",content:`## 핵심 개념
곡선 형태의 축선을 가짐으로써 연직 하중을 축선 방향의 압축력으로 지반에 전달하여 휨모멘트를 최소화하는 구조이다.

## 역학적 특징
- 연직 하중을 받으면 아치 양 지점이 바깥쪽으로 벌어지려는 수평력이 발생한다.
- **3힌지 아치**는 대표적인 정정 아치로, 양 지점 힌지 2개와 중앙 힌지 1개로 구성된다.

## 시험 포인트
- 수평 반력을 구하기 위해 중앙 힌지점의 모멘트가 0($sum M_{center} = 0$)임을 이용하여 해석한다.
- 등분포하중을 받는 포물선 아치는 부재 내부에 휨모멘트와 전단력이 전혀 발생하지 않고 순수 압축력만 전달된다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
, 캔틸레버보(Can↑ilever Beam), 내민보(Overhanging Beam),
겔버보(Gerber Beam)
(2) 3-Hinge 구조의 지점반력: 라멘(R_Ahmen), δ치(Arch)
U 주요 하중(Load)의 종류 및 표기방법
(1) 집중호주(Concen↑R_A↑ed Load, P)
부재의 특정 위치에서 한 점(Poin↑)에 작용하는 하중을 말하며, 집중하중의
기호는 주로 P로 표현하고, 단위는 힘의 단위［N, kN］를 적용한다.
지표면과 수직으로 작용할 때를 수직집중하중 또는 연직집중하중이라고 하며,
지표면과 일정한 각도를 갖고 경사로 작용할 때를 경사집중하중이라고 한다.
학습 P 이 NT
\`\`\``},"ch1-3-7":{title:"중첩의 원리",content:`## 핵심 개념
구조물이 탄성 상태에 있을 때, 여러 개의 하중이 동시에 작용하여 발생하는 전체 변형이나 응력은 각 하중이 단독으로 작용하여 발생한 효과들의 대수적 합과 같다는 원리이다.

## 적용 조건
- 재료가 훅의 법칙(탄성 영역)을 만족해야 한다.
- 하중에 따른 변형이 아주 미세한 미소변형 이론을 따라야 한다.

## 시험 포인트
- 복잡한 하중(집중하중 + 등분포하중)이 섞여 있는 보의 처짐이나 지점반력 계산 시, 각각을 나누어 계산한 뒤 합산하여 해결한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
nch)로 회전시킨다거나, 볼트
내지는 못(Nail)으로 연결된 수평의
목재와 수직의 목재에서 수직의 목재에
수평력이 작용하는 형태를 회전하중
이라고 간주할 수 있다.
H 중첩의 원리(Principal o↓ Superposi↑ion)
다양한 하중이 동시에 작용하고 있는 구조물에서 임의 점의 부재력과
변위는 각각의 하중에 대한 결과를 합해서 구할 수 있다.
30kN/m
30kN/m
\`\`\``},"ch1-4-1":{title:"전단력 (SF)",content:`## 핵심 개념
보의 임의 단면을 수직 방향으로 미끄러져 떨어지게(전단) 만들려는 내력을 **전단력(Shear Force)**이라 한다.

## 부호 규약
- 단면 좌측이 위로 향하고 우측이 아래로 향하는 형태의 미끄러짐을 **(+) 전단력**으로 규정한다.

## 시험 포인트
- 전단력은 집중하중이 작용하는 위치에서 불연속적으로 급격하게 수치가 변화(Step Jump)한다.
- 전단력 $V$는 휨모멘트 $M$의 미분값이다: $V = \frac{dM}{dx}$`},"ch1-4-2":{title:"휨모멘트 (BM)",content:`## 핵심 개념
보 부재를 굽혀서 휘어지게 만들려는 내부적인 회전 모멘트를 **휨모멘트(Bending Moment)**라 한다.

## 부호 규약
- 보 부재가 아래쪽으로 볼록하게 휘는 거동(상부 압축, 하부 인장)을 **(+) 휨모멘트**로 규정한다.

## 시험 포인트
- 휨모멘트의 최댓값은 전단력이 **0**이 되는 위치(또는 부호가 바뀌는 지점)에서 발생한다.
- 등분포하중 하에서 단순보의 최대 휨모멘트는 중앙에서 발생하며 그 크기는 $\frac{wL^2}{8}$이다.`},"ch1-4-3":{title:"SFD (전단력도)",content:`## 핵심 개념
보의 길이 방향에 따른 전단력 값의 분포를 시각적으로 나타낸 그래프를 **SFD (Shear Force Diagram)**라 한다.

## 도화 규칙
- 집중하중 작용점: 하중의 크기와 방향만큼 수직으로 급격하게 꺾인다.
- 등분포하중 구간: 일차 경사 직선 형태로 나타난다.
- 무하중 구간: 전단력 수치가 일정한 수평 직선을 유지한다.

## 시험 포인트
- SFD의 면적은 인접한 두 단면 간의 휨모멘트 변화량과 같다.`},"ch1-4-4":{title:"BMD (휨모멘트도)",content:`## 핵심 개념
보의 길이 방향에 따른 내부 휨모멘트의 변화를 그래프로 나타낸 그림을 **BMD (Bending Moment Diagram)**라 한다.

## 도화 규칙
- 집중하중만 작용하는 구간: 휨모멘트도가 1차 경사 직선으로 꺾인다.
- 등분포하중이 작용하는 구간: 2차 포물선 곡선 형태로 굽는다.

## 시험 포인트
- 모멘트의 최대점은 SFD가 축선과 교차하는 점(전단력 $V=0$)과 수직 방향으로 일치한다.
- 핀(회전) 지점 및 롤러 지점의 자유단 끝에서는 BMD 값이 항상 **0**이다.`},"ch1-4-5":{title:"부재력 · 내력",content:`## 핵심 개념
외부 하중에 저항하여 부재 내부 단면에 발생하는 저항력들로, 대표적으로 축방향력, 전단력, 휨모멘트가 있다.

## 부재력의 3요소
1. **축방향력 (Axial Force, N)**: 부재 축선에 평행한 힘 (인장(+), 압축(-))
2. **전단력 (Shear Force, V)**: 부재 축선에 수직인 힘
3. **휨모멘트 (Bending Moment, M)**: 부재를 휘게 만드는 회전력

## 시험 포인트
- 단면 자유물체도를 잘라 임의 단면 좌측(또는 우측)의 외력 합을 구함으로써 부재력을 손쉽게 계산한다.`},"ch1-4-6":{title:"절대최대 휨모멘트",content:`## 핵심 개념
이동하중(차량, 열차 등)이 보 위를 지나갈 때, 보의 전 구간을 통틀어 발생할 수 있는 가장 큰 휨모멘트 값을 의미한다.

## 계산 원리
- 복합 집중하중군의 경우, 합력 $R$과 여러 하중 중 가장 큰 하중 $P_i$ 사이의 이등분선이 보의 중앙선과 일치하도록 배치할 때 최대 모멘트가 발생한다.

## 시험 포인트
- 등분포이동하중의 경우 보의 전체 경간에 하중이 가득 찼을 때 단순보 중앙에서 절대최대 휨모멘트가 발생한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
□ 전단력,휨모멘트
CHECK
(1) 전단력( K Shear Force)과 휨모멘트(M, Bending Momen↑)의 계산의 원칙
(2) 전단력도(57⑦I Shear Force DiagR_Am)와 휨모멘트도(■日A↓Z7, Bending Momen↑ DiagR_Am)의 관계
(3) 전단력( V, Shear Force)과 휨모멘트(M, Bending Momen↑)의 원칙에 위배되는 계산
(4) 이동하중에 대한 절대최대휨모멘트(J4ax,=)의 계산
n 부재력仁단면력, 내력): 부호 규약
외적인 하중이 구조물에 작용하게 되면, 구조물을 지지하고 있는 부재의 단면
마다 하중과 반력의 합력과 크기가 같고 방향이 반대인 부재력(Member
Force) 이 유발된다.
\`\`\``},"ch1-5-1":{title:"트러스 기본 개념",content:`## 핵심 개념
직선 부재들을 끝단에서 핀(힌지) 접합하여 삼각형 그물망 형태로 구성한 골조 구조물이다.

## 역학적 가정
1. 모든 부재는 마찰이 없는 핀으로만 접합되어 있다.
2. 모든 하중과 지점 반력은 오직 절점(Joint)에만 작용한다.
3. 부재의 자중은 무시하거나 양끝 절점에 나누어 가한다.

## 시험 포인트
- 이러한 가정으로 인해 트러스 부재에는 오직 **축방향력(인장, 압축)**만 발생하며, 휨모멘트와 전단력은 0이다.`},"ch1-5-2":{title:"절점법",content:`## 핵심 개념
트러스의 각 절점을 순서대로 격리하여 개별 절점에서의 힘의 평형 조건($sum F_x = 0, sum F_y = 0$)만으로 미지 부재력을 구하는 방법이다.

## 해석 순서
1. 외력에 따른 전체 지점 반력을 구한다.
2. 미지 부재가 2개 이하인 절점을 선택하여 자유물체도를 그린다.
3. 평형 조건식 2개를 세워 부재력을 연립해 구하고 다음 인접 절점으로 이동한다.

## 시험 포인트
- 연산이 비교적 단순하나 전체 절점을 순서대로 거쳐야 하므로 시간이 많이 소요된다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
트러스(Truss) 구조해석
CHECK
⑴ 트러스 구조해석: 절점법(Me↑hod o↓ Join↑)에 의한 축방향력 산정
•* Zero Force Member： 부재력이 0인 부재
(2) 트러스 구조해석: 절단법(Me↑hod o↓ Sec↑ions)에 의한 축방향력 산정
① 전단력법( μ=0): 복부재(수직재 및 경사재)의 해석
② 모멘트법(M=0): 현재(상현재 및 하현재)의 해석
n 기본적인 트러스의 종류
트러스(Truss)의 사전적인 의미는「다발(Bundle), 꾸러미, 묶음」이다.
역학분야에서는 2개 이상, 보통 3개 이상의 직선 부재가 삼각형 단위로 구성된
\`\`\``},"ch1-5-3":{title:"절단법",content:`## 핵심 개념
트러스의 특정 부재력을 직접 구하기 위해, 해당 부재를 포함하여 트러스를 가상으로 단절하고 절단된 한쪽 부분 전체의 평형 조건을 세우는 방법이다.

## 해석 순서
1. 구하고자 하는 부재를 통과하도록 트러스를 가상으로 싹둑 자른다 (단, 절단 부재 수는 대개 3개 이하).
2. 잘려진 일측의 자유물체도를 그린다.
3. $sum M = 0$ 식을 활용하여 두 미지 부재의 교점을 모멘트 기준점으로 삼으면, 구하고자 하는 하나의 부재력만 즉시 얻을 수 있다.

## 시험 포인트
- 트러스 내부 특정 단일 부재의 힘을 신속하게 계산할 때 대단히 효율적이다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
CHECK
⑴ 트러스 구조해석: 절점법(Me↑hod o↓ Join↑)에 의한 축방향력 산정
•* Zero Force Member： 부재력이 0인 부재
(2) 트러스 구조해석: 절단법(Me↑hod o↓ Sec↑ions)에 의한 축방향력 산정
① 전단력법( μ=0): 복부재(수직재 및 경사재)의 해석
② 모멘트법(M=0): 현재(상현재 및 하현재)의 해석
n 기본적인 트러스의 종류
트러스(Truss)의 사전적인 의미는「다발(Bundle), 꾸러미, 묶음」이다.
역학분야에서는 2개 이상, 보통 3개 이상의 직선 부재가 삼각형 단위로 구성된
구조형식을 말한다. 여러가지 이유가 있었겠지만 하나의 면(Plane)을 밀실하게
\`\`\``},"ch1-5-4":{title:"영부재",content:`## 핵심 개념
하중이 작용할 때 부재력이 발생하지 않는($N=0$) 트러스의 무하중 부재이다. 구조적 안정 및 시공 편의상 배치된다.

## 판별 규칙 (암기 필수)
1. **L형 절점**: 하중이 없는 절점에 2개 부재가 경사지게 만나면 두 부재 모두 영부재이다.
2. **T형 절점**: 하중이 없는 절점에 3개 부재가 만나고 그 중 2개가 일직선 상에 있으면, 나머지 1개 가지 부재는 영부재이다.

## 시험 포인트
- 영부재를 빠르게 찾아내어 소거하면 트러스 구조 해석 연산 속도를 대폭 향상할 수 있다.`},"ch1-5-5":{title:"축방향력",content:`## 핵심 개념
트러스 부재의 중심축 방향으로 작용하는 인장(Tension) 또는 압축(Compression) 내력을 의미한다.

## 부호 규약
- 절점 기준 바깥 방향으로 당겨지는 거동을 **인장력 (+)**이라 한다.
- 절점을 밀어붙이는 거동을 **압축력 (-)**이라 한다.

## 시험 포인트
- 부재의 길이가 길 때 압축력이 작용하면 가느다란 트러스 부재가 옆으로 꺾여 나가는 **좌굴(Buckling)** 위험이 생기므로 단면 설계 시 면밀히 검토해야 한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
트러스(Truss) 구조해석
CHECK
⑴ 트러스 구조해석: 절점법(Me↑hod o↓ Join↑)에 의한 축방향력 산정
•* Zero Force Member： 부재력이 0인 부재
(2) 트러스 구조해석: 절단법(Me↑hod o↓ Sec↑ions)에 의한 축방향력 산정
① 전단력법( μ=0): 복부재(수직재 및 경사재)의 해석
② 모멘트법(M=0): 현재(상현재 및 하현재)의 해석
n 기본적인 트러스의 종류
트러스(Truss)의 사전적인 의미는「다발(Bundle), 꾸러미, 묶음」이다.
역학분야에서는 2개 이상, 보통 3개 이상의 직선 부재가 삼각형 단위로 구성된
\`\`\``},"ch1-6-1":{title:"단면 1차 모멘트",content:`## 핵심 개념
단면의 각 미소 면적에 기준축까지의 **거리(1제곱)**를 곱해서 합산한 값.

## 공식
Q = Σ(A_i × y_i) = ∫y·dA

## 핵심 용도
① 도심(중립축) 위치 계산
ȳ = Q / A = Σ(A_i × y_i) / ΣA_i

② 전단응력 계산
τ = VQ / (Ib)

## T형 단면 예제
플랜지 120×20mm (y₁=90mm), 웨브 30×80mm (y₂=40mm), 밑단 기준:
A₁ = A₂ = 2,400mm²
ȳ = (2400×90 + 2400×40) / 4800 = **65mm** (밑단에서)

## 핵심 성질
- **도심축에서 Q = 0** → Q=0인 축이 도심축임을 확인하는 수단
- 단위: mm³ (거리 1제곱 × 면적)
- 기준축 위치에 따라 값이 달라짐

## 시험 포인트
- 복합 단면(T형, I형)의 도심 계산에 필수
- 도심 위치를 먼저 구한 뒤 단면 2차 모멘트 계산
- 전단응력 공식 τ=VQ/Ib에서 Q는 관심 위치 위(또는 아래)의 단면에 대해 계산`},"ch1-6-2":{title:"단면 2차 모멘트 (I)",content:`## 핵심 개념
단면의 각 미소 면적에 기준축까지의 **거리²(2제곱)**를 곱해서 합산한 값. 단면의 휨 저항 능력을 나타냄.

## 공식
I = Σ(A_i × y_i²) = ∫y²·dA

## 기본 단면 I 공식 — 암기 필수
- 직사각형 도심축: **I_G = bh³/12**
- 직사각형 밑변축: **I_base = bh³/3**
- 원형 도심축: I = πd⁴/64
- 삼각형 도심축: I = bh³/36

## 평행축 정리 (복합 단면 필수)
**I = I_G + A × d²**
- I_G: 도심 기준 관성모멘트
- A: 단면적
- d: 도심에서 계산 기준축까지의 거리

## T형 단면 예제 (ȳ = 65mm, 밑단 기준)
플랜지(d₁ = 90-65 = 25mm):
I₁ = 120×20³/12 + 2400×25² = 1,580,000mm⁴

웨브(d₂ = 65-40 = 25mm):
I₂ = 30×80³/12 + 2400×25² = 2,780,000mm⁴

I_total = **4,360,000mm⁴**

## 시험 포인트
- **bh³/12** (도심), **bh³/3** (밑변) — 반드시 암기
- 복합 단면은 평행축 정리(I = I_G + Ad²) 반복 적용
- I 클수록 → 동일 하중에서 응력·처짐 작음
- H형 단면이 효율적인 이유: 재료를 중립축에서 멀리 배치 → I 극대화`},"ch1-6-3":{title:"단면계수 (Z)",content:`## 핵심 개념
부재 단면의 휨 저항성 정도를 타격 지점의 최외단 거리까지의 기하학적 수치로 환산하여 나타낸 단면 상수이다.

## 중요 공식
$$Z = \frac{I}{y_{max}}$$
- $I$: 도심축 기준 단면 2차 모멘트
- $y_{max}$: 단면 도심에서 가장 멀리 떨어진 외곽 표면까지의 수직 거리

## 직사각형 단면 ($b 	imes h$) 공식
$$Z = \frac{b h^2}{6}$$

## 시험 포인트
- 보 부재의 최대 휨 응력 $sigma_{max}$은 단면계수에 반비례한다: $sigma_{max} = \frac{M}{Z}$`},"ch1-6-4":{title:"도심 · 중립축",content:`## 핵심 개념
- **도심(Centroid)**: 단면 도형의 기하학적 중심점 (단면 1차 모멘트 $Q=0$이 되는 축들의 교점)
- **중립축(Neutral Axis)**: 부재가 휠 때 응력과 변형률이 0이 되어 압축과 인장이 나뉘는 경계선 축

## 도심 거리 공식
$$\bar{y} = \frac{sum (A_i cdot y_i)}{sum A_i}$$

## 시험 포인트
- 대칭 단면(정사각형, 원형 등)은 기하학적 대칭축 자체가 중립축과 도심축이 된다.
- T형이나 비대칭 복합 단면은 항상 하단 기준 도심 거리 $\bar{y}$를 먼저 구해놓아야 단면 2차 모멘트를 계산할 수 있다.`},"ch1-6-5":{title:"회전반경",content:`## 핵심 개념
단면의 면적이 도심축에서 평균적으로 얼마나 멀리 분포하고 있는지를 선형 척도로 나타낸 단면 상수이다. **좌굴** 해석의 기둥 설계에 널리 활용된다.

## 중요 공식
$$r = sqrt{\frac{I}{A}}$$
- $I$: 단면 2차 모멘트
- $A$: 단면적

## 시험 포인트
- 기둥의 세장비 $lambda$ 계산식 $lambda = \frac{KL}{r}$에 쓰이며, 이 회전반경 $r$ 값이 작을수록 기둥이 휠 위험(좌굴)이 비약적으로 증가한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
단면의 성질
CHECK
단면 1 차모멘트(<7),
단면2차모멘트(7), 평행축정리, 단면2차극모멘트(고), 단면2차상승모멘트(수,)
단면계수(으), 단면2차회전반경(r)
D 단면1차모멘트((7, Firs↑ M이nen↑ o↓ Area)
(1) 정의
(2) 용도 및 특성
① 단위는 mm cm3 이며, 부호는 (+), (-) 값을 갖는다.
② 단면의 도심(圖心, Cen↑roid)을 구할 때 사용된다.
\`\`\``},"ch1-7-1":{title:"수직응력 · 전단응력",content:`## 핵심 개념
- **수직응력 (Normal Stress, $sigma$)**: 단면에 수직인 방향으로 작용하여 당기거나 미는 응력 (인장, 압축)
- **전단응력 (Shear Stress, $	au$)**: 단면에 평행한 방향으로 미끄러뜨리려 작용하는 응력

## 중요 공식
$$sigma = \frac{P}{A}$$
$$	au = \frac{V}{A} 	ext{ (평균 전단응력)}$$

## 시험 포인트
- 휨 부재 내부의 실질 최대 전단응력은 직사각형 단면인 경우 평균의 1.5배이다: $	au_{max} = 1.5 \frac{V}{A}$
- 최대 전단응력은 중립축(도심) 위치에서 발생한다.`},"ch1-7-2":{title:"변형률 (ε)",content:`## 핵심 개념
하중 작용 하에서 부재의 최초 원래 길이에 대한 길이 변화량(늘어나거나 줄어든 비율)을 나타내는 무차원의 비율이다.

## 중요 공식
$$epsilon = \frac{Delta L}{L}$$
- $Delta L$: 변형량 (단위: mm)
- $L$: 원래 부재 길이 (단위: mm)

## 시험 포인트
- 비율이기 때문에 단위가 없는 무차원 상수이다.
- 압축 변형률은 대개 음수(-), 인장 변형률은 양수(+)로 나타낸다.`},"ch1-7-3":{title:"후크의 법칙",content:`## 핵심 개념
탄성 영역 내에서 재료에 작용하는 응력과 발생하는 변형률은 비례 관계에 있다는 탄성학의 가장 핵심 법칙이다.

## 중요 공식
$$sigma = E cdot epsilon$$
- $sigma$: 수직 응력
- $epsilon$: 축 변형률
- $E$: 탄성계수 (Young's Modulus)

## 시험 포인트
- 하중 하에 놓인 기둥/축 부재의 전체 축방향 변형량 $delta$:
  $$delta = \frac{P L}{A E}$$
  (이 수식은 시험 계산 문제에 매우 빈번하게 출제되므로 통째로 외워야 함)

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
변형된 형태이다.)
② 0.5
③ 0.3
④ 0.1
L- AD _ (1,000)(0.03)
D’AL~
(100)(1)—
답 : ③
■ 건축구조 110
H 후크의 법칙(R.Hooke's Law)
\`\`\``},"ch1-7-4":{title:"탄성계수 (E)",content:`## 핵심 개념
재료가 탄성 변형에 대해 저항하려는 강성(Stiffness)의 정도를 나타내는 물리적 성질의 계수이다.

## 역학적 정의
- 응력-변형률 선도의 탄성 한계 영역 내에서의 기울기를 뜻한다.
- 강재의 탄성계수 $E_s$: 대략 $2.0 	imes 10^5 	ext{ MPa}$ ($205,000 	ext{ N/mm}^2$)

## 시험 포인트
- 탄성계수 $E$의 단위는 응력과 같은 $	ext{N/mm}^2$ 또는 $	ext{MPa}$이다.
- 강도가 다른 강재(예: 일반강 vs 고강도강)여도 탄성계수 $E_s$ 값은 거의 동일하다.`},"ch1-7-5":{title:"포아송비 (ν)",content:`## 핵심 개념
부재가 축방향 힘을 받아 늘어나거나 줄어들 때, 축직각방향(가로방향)으로 변형되는 비율과 축방향(세로방향) 변형률 간의 비율을 뜻한다.

## 중요 공식
$$
u = - \frac{epsilon_{lateral}}{epsilon_{axial}}$$

## 대표적 값
- 강재: 약 0.3
- 콘크리트: 약 0.15 ~ 0.20

## 시험 포인트
- 포아송비 $
u$는 항상 양수로 표현하기 위해 공식에 마이너스(-)를 붙인다.
- 체적 변화가 없는 완전 소성 변형 시의 이론상 최대 포아송비는 0.5이다.`},"ch1-8-1":{title:"처짐 (δ)",content:`## 핵심 개념
보 부재에 수직 하중이 작용할 때, 하중 재하 전의 원래 수평 축선 위치로부터 수직 방향으로 휘어 내려앉은 변위량을 **처짐(Deflection)**이라 한다.

## 휨강성과 처짐의 관계
- 처짐량은 부재의 휨강성 $EI$에 반비례한다. 즉, 단면 2차 모멘트 $I$가 클수록 처짐이 작아진다.

## 시험 포인트
- 처짐량 제한 기준은 건물의 사용성(마감재 균열 방지, 거주자 불쾌감 방지) 확보를 위해 매우 엄격하게 규정된다.
- 처짐 공식을 단순보 집중하중($\frac{PL^3}{48EI}$) 및 등분포하중($\frac{5wL^4}{384EI}$) 단위로 암기해야 한다.`},"ch1-8-2":{title:"처짐각 (θ)",content:`## 핵심 개념
보가 휘어졌을 때, 변형 후 탄성곡선의 접선이 원래 변형 전의 수평 축선과 이루는 회전 각도를 뜻한다. (단위: 라디안, rad)

## 주요 대표 공식
- 단순보 일단에 집중 모멘트 $M$ 적용 시 지점 처짐각:
  $$	heta = \frac{M L}{3 E I}$$
- 단순보 중앙 집중하중 $P$ 적용 시 지점 처짐각:
  $$	heta_A = 	heta_B = \frac{P L^2}{16 E I}$$

## 시험 포인트
- 처짐각은 부재 양끝 지점(힌지, 롤러)에서 대개 최댓값을 가지며, 고정단 지점에서는 각도가 0이다.`},"ch1-8-3":{title:"공액보법",content:`## 핵심 개념
원래 실제 보를 기하학적 경계 조건에 맞춘 가상의 **공액보(Conjugate Beam)**로 변환하고, 휨모멘트 하중인 $M/EI$를 공액보에 가하여 처짐과 처짐각을 구하는 방법이다.

## 대응 관계 (암기 필수)
- 실제 보의 **처짐각($	heta$)** = 공액보의 **전단력($V_c$)**
- 실제 보의 **처짐($delta$)** = 공액보의 **휨모멘트($M_c$)**

## 지점 변환
- 실제 고정단 $leftrightarrow$ 공액보 자유단
- 실제 힌지/롤러 단부 $leftrightarrow$ 공액보 힌지/롤러 단부
- 실제 내부 힌지 $leftrightarrow$ 공액보 내부 지점

## 시험 포인트
- 기하학적 지점 변환 규칙을 실수 없이 처리해야 정확한 답안을 도출할 수 있다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
보의 휨변형
CHECK
(1) 처짐곡선 미분방정식법: 곡률(«), 곡률반경(R)
(2) 공액보법 (Conjuga↑e Beam Me↑hod)에 의한 처짐각(0), 처짐 (5)의 계산
“* 캔틸레버보(Can↑ilever Beam) ■ 단순보(Simple Beam) «* 내민보(Overhanging Beam)
■ 겔버보(Gerber Beam)
n 처짐각 및 처짐
(1) 처짐각(Slope, De↓lec↑ion Angle, Ro↑a↑ion Angle), 처짐(De↓lec↑ion)
(2) 휨변형을 해석하는 기본적인 방법
주요 적용
\`\`\``},"ch1-8-4":{title:"탄성곡선",content:`## 핵심 개념
하중 작용 하에 휨 변형된 보 부재의 도심 축선의 궤적을 평면 상의 곡선 방정식으로 표현한 선을 말한다.

## 미분 방정식
$$EI \frac{d^2 y}{dx^2} = M(x)$$
- 1차 미분 ($dy/dx$): 처짐각 ($	heta$)
- 2차 미분 ($d^2 y/dx^2$): 곡률 ($M/EI$)
- 3차 미분: 전단력 ($V/EI$)
- 4차 미분: 하중 ($w/EI$)

## 시험 포인트
- 경계 조건(예: 고정단 $x=0$에서 $y=0, y'=0$)을 활용하여 적분상수를 구하는 수학적 흐름을 숙지해야 한다.`},"ch1-9-1":{title:"단주 · 장주",content:`## 핵심 개념
- **단주 (Short Column)**: 부재 길이가 짧아 횡방향 좌굴 없이 오직 재료 자체의 압축 강도 파괴에 의해 내력이 지배되는 기둥이다.
- **장주 (Long Column)**: 부재 길이가 길고 세장하여 재료 항복 전에 기둥이 갑자기 휘는 **좌굴** 파괴가 먼저 발생하는 기둥이다.

## 시험 포인트
- 기둥 판별은 세장비 $lambda = \frac{KL}{r}$에 기초하며, 기준 한계 세장비를 초과하면 장주로 판별하여 좌굴 강도로 설계한다.
- 단주는 압축응력 공식 $sigma = P/A$를 그대로 적용할 수 있다.`},"ch1-9-2":{title:"편심 압축",content:`## 핵심 개념
기둥 단면의 도심축에서 일정한 거리(편심 거리, $e$)만큼 벗어난 위치에 압축하중 $P$가 작용하는 상태이다.

## 응력 상태
압축력에 의한 균일 압축응력과 편심 모멘트($M=Pcdot e$)에 의한 휨응력이 동시에 작용한다.
$$sigma = -\frac{P}{A} pm \frac{M}{Z}$$

## 시험 포인트
- 편심량이 크면 단면의 일측에 인장 응력이 발생하게 된다. 콘크리트 기둥의 경우 인장에 매우 취약하므로 인장 응력 발생 여부를 세밀히 통제해야 한다.`},"ch1-9-3":{title:"핵 (kern)",content:`## 핵심 개념
기둥 단면에 편심 압축하중이 작용할 때, 단면 내부 어디에 하중이 가해져도 단면 전체에 **인장 응력이 단 한 곳도 발생하지 않도록** 하는 하중 재하 허용 영역을 뜻한다.

## 단면별 핵의 범위
- 직사각형 단면 ($b 	imes h$): 중앙부 높이 $h/3$, 폭 $b/3$ 이내의 마름모꼴 영역 (즉, 편심 거리 $e le h/6$)
- 원형 단면 (지름 $d$): 중앙부 $d/4$ 이내의 원형 영역 ($e le d/8$)

## 시험 포인트
- 직사각형 단면 기둥에서 편심 하중이 **마름모 형태의 핵** 내부(1/3 구간)를 벗어나면 단면에 인장이 즉각 시작된다는 점이 단골 출제 대상이다.`},"ch1-9-4":{title:"좌굴 (buckling)",content:`## 핵심 개념
압축력을 받는 가늘고 긴 부재가 압축하중이 특정 임계값에 도달했을 때, 축선 방향의 압축 변형 외에 갑자기 횡방향으로 크게 휘어지며 불안정해지는 현상이다.

## 역학적 성질
- 압축재의 단면 강도와 무관하게 부재의 **기하학적 강성(휨강성 $EI$ 및 유효좌굴길이 $KL$)**에 의해서 임계 좌굴 하중이 결정된다.

## 시험 포인트
- 좌굴은 압축 강도보다 현저히 낮은 하중 상태에서 돌발적으로 발생하므로 대단히 위험한 파괴 형태이다.
- 세장비가 클수록 좌굴 발생 위험이 대폭 증가한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
CHECK
(1) 단주(S↑ub Column)： 가 편심축하중을 받는 단주 amax =
흐 一$干쓰
min 月 Z A Z
■ 단면의 핵 (Core o↓ Cross Sec↑ion)
(2) 장주(Slender Column)：
«* 좌굴하중(Buckling Load)： P„. = •흐쓰 ‘"* 세장비(Slenderness R_A↑io)： A= 쓰 =_씌:
(AZ)2
KI 편심축하중을 받는 단주(S↑ub Column)
압축력 F가 단면의 중심에서 e(Eccen↑ric
\`\`\``},"ch1-9-5":{title:"오일러 공식",content:`## 핵심 개념
탄성 범위 내에 있는 양단 핀 지지 장주 기둥의 임계 좌굴 하중($P_{cr}$)을 구하는 공식이다.

## 중요 공식 (오일러 임계 하중)
$$P_{cr} = \frac{pi^2 E I}{(K L)^2}$$
- $E$: 재료의 탄성계수
- $I$: 단면 최소 2차 모멘트 (약축 기준)
- $K L$: 기둥의 유효좌굴길이 ($K$: 단부 구속 조건 계수)

## 시험 포인트
- 분모가 유효좌굴길이의 **제곱**에 비례하므로 단부 구속 조건을 확실히 알아야 한다.
- 임계 응력 $sigma_{cr} = \frac{pi^2 E}{lambda^2}$ 이다.`},"ch1-10-1":{title:"변위일치법",content:`## 핵심 개념
부정정 구조물의 지점 반력 중 일부(여분의 미지수, 중복 반력)를 제거하여 정정 구조물(기본정정계)로 만든 뒤, 제거한 지점에서의 변위가 실제 구조물 지점 조건과 일치해야 한다는 변형 적합 조건을 이용하는 해석법이다.

## 해석 절차
1. 부정정 차수만큼 중복 반력($R_1$)을 선정한다.
2. 하중에 의한 기본정정계 변위($delta_0$)와 중복 반력 단위하중에 의한 변위($f$)를 계산한다.
3. 변위 적합식 수립: $delta_0 + R_1 cdot f = 0 \rightarrow$ 중복 반력을 풀이한다.

## 시험 포인트
- 주로 1차 부정정 보나 라멘 구조 해석에 널리 응용된다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
5 = 히) 등을 추가적
으로 고려해야 하는 상태의 구조를
부정정구조(S↑a↑ically Inde↑ermina↑e
S↑ruc↑ure)라고 정의한다.
■ 건축구조 162
H 변위일치법 (Me↑hod o↓ Consis↑en↑ Displacemen↑, 1864)
탄성처짐에 관한 이론을  (시계방향)대로 적용하여
부정정 구조물을 해석하는 방법이다.
O↑↑o Mohr(1874)가 독자적으로  (시계방향) 이론을
오늘날의 수준까지 개발하였다.
\`\`\``},"ch1-10-2":{title:"처짐각법",content:`## 핵심 개념
부재 단부의 알 수 없는 처짐각($	heta$)과 부재각($R$)을 미지 변수로 설정하고, 각 절점에서의 모멘트 평형 조건을 이용하여 미지 각을 먼저 구한 뒤 단부 모멘트를 산정하는 부정정 해석법이다.

## 처짐각 방정식
$$M_{ab} = 2E_k (2	heta_a + 	heta_b - 3R) + C_{ab}$$
- $E_k$: 상대 강도 ($EI/L$)
- $C_{ab}$: 하중에 따른 고정단 모멘트 (FEM)

## 시험 포인트
- 연속보나 횡변위가 발생하는 강접 라멘 구조의 일반 해석에 표준적으로 쓰인다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
10 부정 정구조
CHECK
⑴ 런형일치법(Me↑hod o↓ Consis↑en↑ De↓orma↑ion, 1864)을 적용한 1차~3차 부정정 보의 해석
(2) 처짐각법(Slope—D이ec↑ion Me↑hod)： 절점방정식과 층방정식
(3) 모멘트 분배법(Momen↑ Dis↑ribu↑ed Me↑hod) = 부정정 보 및 부정정 라멘의 모멘트분배법의 적용
K1 부정정 구조(S↑a↑ically Inde↑ermina↑e S↑ruc↑ures)
(1) 해석조건
힘의 평형조건식
적합조건식 (탄성방정식)
ΣF=0, sy=o, sm=o
\`\`\``},"ch1-10-3":{title:"모멘트분배법",content:`## 핵심 개념
Hardy Cross가 창안한 방법으로, 처짐각법의 연립방정식을 직접 풀지 않고 각 절점의 불평형 모멘트를 **분배**와 **전달** 과정을 반복 수행하여 수치 근사적으로 최종 단부 모멘트를 수렴해 구하는 방법이다.

## 핵심 연산 요소
- **분배 모멘트**: 각 절점 부재들의 휨강성 비율(분배율)에 따라 배분
- **전달 모멘트**: 분배된 모멘트의 절반($1/2$)을 부재의 반대편 단부로 전달 (전달률 = 0.5)

## 시험 포인트
- 계산이 단순 덧셈과 나눗셈의 루프로 진행되어 컴퓨터식 알고리즘에 매우 적합하다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
) 처짐각법(Slope—D이ec↑ion Me↑hod)： 절점방정식과 층방정식
(3) 모멘트 분배법(Momen↑ Dis↑ribu↑ed Me↑hod) = 부정정 보 및 부정정 라멘의 모멘트분배법의 적용
K1 부정정 구조(S↑a↑ically Inde↑ermina↑e S↑ruc↑ures)
(1) 해석조건
힘의 평형조건식
적합조건식 (탄성방정식)
ΣF=0, sy=o, sm=o
부재의 변형, 지점의 변형 등
(2) 정정 구조와 비교한 부정정 구조의 특징
① 재료 절감
\`\`\``},"ch1-10-4":{title:"고정단모멘트",content:`## 핵심 개념
부재의 양끝 절점이 회전할 수 없도록 완벽하게 고정되어 있다고 가정할 때, 부재 중간에 작용하는 하중으로 인해 양단 지점에 유발되는 휨모멘트 값(FEM, Fixed-End Moment)이다.

## 주요 암기 공식
- 양단고정보 중앙에 집중하중 $P$ 작용 시:
  $$M_{ab} = -\frac{PL}{8}, M_{ba} = +\frac{PL}{8}$$
- 양단고정보 전체에 등분포하중 $w$ 작용 시:
  $$M_{ab} = -\frac{wL^2}{12}, M_{ba} = +\frac{wL^2}{12}$$

## 시험 포인트
- 처짐각법이나 모멘트분배법을 적용하기 위한 첫 출발점이 되므로, 하중 조건에 따른 공식 암기가 비타협적으로 요구된다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
양단 고정
2a 기
■ 제10장 부정정 구조 165
El 처짐각법(Slope-De↓lec↑ion Me↑hod, 1915)
(1) 고정단모멘트(FEM, Hxed 타id Momen↑)
↓emab =— 으끄으 (O
↓em。―쁨 (시계방향)。)
FEMba =4■으으%)
↓emda =+쁘(〜)
부정정 구조물에 수직의 하중이 작용하면 부재 양단에서 부재를
\`\`\``},"ch1-10-5":{title:"분배율 · 전달률",content:`## 핵심 개념
- **분배율 (Distribution Factor, DF)**: 절점에 모인 부재들의 상대 강비(Stiffness) 합에 대한 각 부재 강비의 비율로, 불평형 모멘트를 배분하는 분할 비율이다.
- **전달률 (Carry-over Factor)**: 부재의 일측 단부에서 모멘트가 회전할 때, 타측 단부(고정단)로 전달되는 모멘트의 비율이다.

## 중요 기준
- 수평 부재의 고정단 전달률 = **0.5**
- 분배율의 합: 한 절점에 모인 모든 부재 분배율의 합은 항상 **1.0**이어야 한다.

## 시험 포인트
- 힌지/롤러 단부 지점의 분배율은 1.0(완전 방출)이며, 완벽 고정단 지점의 분배율은 0(모멘트 고정)이다.`},"ch2-1-1":{title:"강도설계법 (USD)",content:`## 핵심 개념
**"하중은 크게, 강도는 작게"** — 양쪽을 보수적으로 잡아 안전하게 설계한다.

## 설계 원칙
φRn ≥ U

- **Rn** (공칭강도): 이론적으로 계산한 최대 강도
- **φ** (강도감소계수): 불확실성 반영, 강도를 줄임
- **φRn** (설계강도): 실제 설계에 쓰는 강도
- **U** (소요강도): 계수하중으로 구한 최대 단면력

## 소요강도 U — 하중 조합
- U = **1.2D + 1.6L** ← 기본 조합 (시험 단골)
- U = 1.2D + 1.0L + 1.0W (풍하중)
- U = 1.2D + 1.0L + 1.0E (지진하중)

D=고정하중, L=활하중, W=풍하중, E=지진하중

## 강도감소계수 φ — 암기 필수
- 인장지배 단면 (휨·인장): **φ = 0.85**
- 전단 · 비틀림: **φ = 0.75**
- 압축지배 — 나선철근: **φ = 0.75**
- 압축지배 — 띠철근: **φ = 0.65**

## 시험 포인트
- **φRn ≥ U** 설계 조건 — 가장 먼저 떠올려야 함
- 하중 조합 기본: **1.2D + 1.6L** (숫자 통째 암기)
- φ 값 순서: 인장(0.85) > 전단/나선압축(0.75) > 띠철근압축(0.65)
- 공칭강도 Rn은 직접 사용 금지 → 반드시 φ 곱한 후 사용`},"ch2-1-2":{title:"하중계수 (U)",content:`## 핵심 개념
구조물에 작용하는 실제 하중의 불확실성을 고려하여 설계 시 안전 여유를 확보하기 위해 실하중에 곱해주는 보수적인 증폭 계수이다.

## 중요 소요강도($U$) 하중 조합 (KDS 14 20 10)
- $U = 1.4D$ (고정하중 단독)
- $U = 1.2D + 1.6L$ (기본 조합, 압도적 출제 빈도)
- $U = 1.2D + 1.0L + 1.0W$ (풍하중 포함 조합)
- $U = 1.2D + 1.0L + 1.0E$ (지진하중 포함 조합)

## 시험 포인트
- $D$: 고정하중, $L$: 활하중. 이 조합의 수치(1.2와 1.6)는 계산 문제 풀이를 위해 확실히 숙지해야 한다.`},"ch2-1-3":{title:"강도감소계수 (φ)",content:`## 핵심 개념
재료 강도의 불확실성, 시공 오차, 부재 강도 계산식의 불완전성 등을 고려하여 공칭강도를 보수적으로 감축해주는 계수이다.

## 부재별 계수 기준 (암기 필수)
- 휨 부재 (인장지배단면): **$phi = 0.85$** (안전성 높음)
- 전단 및 비틀림: **$phi = 0.75$**
- 압축지배단면 — 나선철근 규격: **$phi = 0.75$**
- 압축지배단면 — 띠철근 규격: **$phi = 0.65$** (취성파괴 위험으로 계수 낮춤)

## 시험 포인트
- 부재의 중요도나 파괴 거동의 취성/연성 여부에 따라 감소 비율이 다르게 설정되어 있다.`},"ch2-1-4":{title:"소요강도 · 설계강도",content:`## 핵심 개념
- **소요강도 (Required Strength, $U$)**: 하중계수를 적용한 설계용 소요 단면력 (예: $M_u, V_u$)
- **설계강도 (Design Strength)**: 부재의 공칭강도에 강도감소계수를 곱한 실제 설계 내력 (예: $phi M_n, phi V_n$)

## 강도 조건식
$$phi R_n ge U$$
(즉, 부재의 설계강도는 소요하중에 의한 소요강도보다 항상 크거나 같아야 안전하다.)

## 시험 포인트
- 단면 설계 시 이 조건이 충족되는지 확인하는 최종 단계 검토식이다.`},"ch2-1-5":{title:"공칭강도",content:`## 핵심 개념
부재가 최대로 버틸 수 있는 이론적인 한계 내력을 재료 역학적 가정을 기초로 직접 산정한 순수 강도($R_n$)이다.

## 대표 종류
- $M_n$: 공칭휨강도
- $V_n$: 공칭전단강도
- $P_n$: 공칭압축강도

## 시험 포인트
- 설계에 쓰일 때는 안전 확보를 위해 반드시 여기에 강도감소계수 $phi$를 곱한 설계강도 상태로 변환하여 쓴다. 공칭강도 단독 상태로는 직접 설계하중과 비교하지 않는다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
X =0.65
답 : ③
■ 건축구조 188
EI （극한）강도설계법（USD, Ul↑ima↑e S↑reng↑h Design me↑hod）
하중계수x하중 < 강도감소계수(qi>)x공칭강도(n)
소요강도U7)< 설계강도이)
(1) 소요강도(Required S↑rengh, ↑z)
소요강도 U는 사용하중에 하중계수를 곱한 계수하중(Fac↑ored Load) 또는 이와 관련된 단면력으로 표현
된다. 각각의 하중에 대부분 1보다 큰 하중계수를 곱하는 이유는 극한상태에 대한 극한외력으로서 구조물이
나 구조부재에 작용할 수 있는 가장 불리한 조건을 고려하기 위함이다.
\`\`\``},"ch2-2-1":{title:"탄성계수 (Ec, Es)",content:`## 핵심 개념
- **콘크리트 탄성계수 ($E_c$)**: 압축강도에 따라 변하는 재료 변수
- **철근 탄성계수 ($E_s$)**: 강종에 관계없이 일정한 재료 상수 ($2.0 	imes 10^5 	ext{ MPa}$)

## 콘크리트 탄성계수 산정식
보통중량 콘크리트($m_c = 2,300 	ext{ kg/m}^3$) 기준:
$$E_c = 8,500 sqrt[3]{f_{cu}}$$
(단, 설계기준압축강도 $f_{ck} le 40 	ext{ MPa}$ 인 경우 $E_c = 4,700 sqrt{f_{ck}}$ 도 적용 가능)

## 시험 포인트
- 콘크리트는 압축 강도가 높을수록 탄성계수도 커진다.`},"ch2-2-2":{title:"탄성계수비 (n)",content:`## 핵심 개념
철근의 탄성계수($E_s$)와 콘크리트의 탄성계수($E_c$)의 상대 비율을 뜻한다. 이종 재료인 RC 부재를 등가 단면으로 환산 해석할 때 매우 중요한 변수이다.

## 중요 공식
$$n = \frac{E_s}{E_c}$$

## 시험 포인트
- 강도가 낮은 콘크리트일수록 탄성계수 $E_c$가 작아지므로, 탄성계수비 $n$ 값은 오히려 커진다.
- 철근콘크리트 보의 사용성 탄성 해석 시 단면 2차 모멘트 계산의 환산 단면적으로 활용된다.`},"ch2-2-3":{title:"T형보 · 유효폭",content:`## 핵심 개념
슬래브와 보를 일체로 타설할 때, 슬래브의 일부가 보의 상부 플랜지 역할을 수행하여 강성을 높인 단면이다. 이때 휨 저항에 참여하는 슬래브의 실제 유효한 너비를 **유효폭($b$)**이라 한다.

## 양대칭 T형보 유효폭 규정 (세 조건 중 최솟값)
1. 인접 보와의 중심 간 거리
2. 보의 경간의 1/4 ($L/4$)
3. $b_w + 16t_f$ (웨브 폭 + 16배 플랜지 두께)

## 시험 포인트
- 보의 경간 $L$, 플랜지 두께 $t_f$, 보 폭 $b_w$ 수치를 기준으로 유효폭 $b$를 구하는 단순 판정 문제가 자주 출제된다.`},"ch2-2-4":{title:"철근비 (ρ)",content:`## 핵심 개념
콘크리트 단면적에 대해 배치된 인장 철근 단면적의 상대적인 비율을 의미한다.

## 중요 공식
$$\rho = \frac{A_s}{b cdot d}$$
- $A_s$: 인장 철근 단면적
- $b$: 보의 폭
- $d$: 보의 유효깊이 (압축측 외단에서 인장철근 도심까지 거리)

## 시험 포인트
- 구조 부재의 균열 및 좌굴 방지를 위해 기준상 최소 철근비 규정과 취성파괴 방지를 위한 최대 철근비 규정이 존재한다.`},"ch2-2-5":{title:"띠철근 · 나선철근",content:`## 핵심 개념
압축력을 받는 철근콘크리트 기둥에서 주철근(축방향 철근)의 좌굴을 방지하고 내부 콘크리트를 횡방향으로 구속하여 연성을 높이기 위해 감아주는 횡철근들이다.

## 특징 비교
- **띠철근 (Tie)**: 사각형 또는 일정 간격으로 끊어 배치하는 형태로, 강도감소계수 $phi = 0.65$ 적용.
- **나선철근 (Spiral)**: 끊어짐 없이 나선형으로 촘촘히 연속 감는 형태로, 횡구속 효과가 극대화되어 $phi = 0.75$ 적용.

## 시험 포인트
- 나선철근 기둥이 띠철근 기둥보다 지지력이 뛰어나며 지진하중에 대한 저항 능력이 훨씬 우수하다.`},"ch2-3-1":{title:"단철근 직사각형 보",content:`## 핵심 개념
휨모멘트를 받는 직사각형 단면 보에서 압축측에는 철근 없이 오직 콘크리트만 저항하게 하고, 인장측에만 철근을 배치하여 인장력에 저항하도록 설계한 보이다.

## 역학적 가정
- 철근과 콘크리트의 부착은 완벽하다.
- 변형률은 중립축으로부터의 거리에 비례하여 선형적으로 분포한다 (평면유지의 가정).
- 인장측 콘크리트의 인장강도는 무시한다.

## 시험 포인트
- 콘크리트는 압축을 담당하고, 인장은 전적으로 하부 철근이 전담한다는 가정을 기초로 한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
.......... ................_.................................................
6 = 300mm, d = 600mm인 단철근 직사각형 보에서 유효하게 배근될 수
있는 최대 철근량은? （단, 九 = 24MPa, /y=400MPa）
① 2,840mm2
② 3,320mm2
③ 3,840mm2
④ 4,340mm2
（1） /싸 < 40MPa, ↓y = 400MPa
"* 해 =0-0033, 하,min =0-004, S = ^=（200,000）= °’°°2
(2) 균형철근비
\`\`\``},"ch2-3-2":{title:"등가응력블록 (Whitney)",content:`## 핵심 개념
실제 휨 변형 시 콘크리트의 압축응력 분포는 복잡한 포물선 형태이지만, 단면 계산의 편의를 위해 면적과 중심 위치가 같은 단순한 직사각형 응력 분포로 등가 치환한 모델이다.

## 중요 공식
- 등가응력블록 깊이 $a$:
  $$a = \beta_1 cdot c$$
  - $c$: 실제 중립축 깊이
  - $\beta_1$: 콘크리트 강도에 따라 변하는 계수 (보통 $f_{ck} le 28 	ext{ MPa}$ 이면 0.85)
- 등가 압축응력 크기: $0.85 f_{ck}$

## 시험 포인트
- 실제 중립축 깊이 $c$와 등가응력블록 깊이 $a$의 차이를 구분해야 한다.`},"ch2-3-3":{title:"균형철근비 (ρb)",content:`## 핵심 개념
인장 철근이 항복강도($f_y$)에 도달함과 동시에, 압축측 콘크리트 최외단 변형률이 극한 변형률인 **0.003**에 정확히 동시에 도달하는 가상의 단면 상태 철근비이다.

## 중요 공식
$$\rho_b = 0.85 \beta_1 \frac{f_{ck}}{f_y} \frac{600}{600 + f_y}$$

## 시험 포인트
- 실제 설계 시 취성파괴를 피하기 위해 이 균형철근비보다 작은 철근비를 갖도록 설계(과소철근보 설계 원칙)해야 한다.`},"ch2-3-4":{title:"인장지배 · 압축지배",content:`## 핵심 개념
- **인장지배단면**: 철근이 먼저 많이 늘어나(연성) 파괴 징후를 보이며 무너지는 안전한 상태
- **압축지배단면**: 철근은 버티는데 콘크리트가 먼저 파괴되어 돌발 붕괴하는 위험한 상태

## 판정 기준
- 인장지배: 최외단 철근의 순인장변형률 $epsilon_t ge 0.005$ (항복 변형률의 약 2.5배 이상)
- 압축지배: $epsilon_t le epsilon_y$ (철근 항복 변형률 이하)

## 시험 포인트
- 연성파괴 유도를 위해 휨 부재는 반드시 **인장지배단면**이 되도록 제한한다.`},"ch2-3-5":{title:"공칭휨강도 (Mn)",content:`## 핵심 개념
직사각형 보 단면의 한계 변동력 상태에서 재료의 힘 평형(압축력 $C$ = 인장력 $T$)을 기준으로 도출해 낸 이론적인 최대 저항 모멘트이다.

## 중요 공식
$$M_n = A_s f_y left(d - \frac{a}{2}\right)$$
- $C = 0.85 f_{ck} b a$
- $T = A_s f_y$
- $C = T \rightarrow a = \frac{A_s f_y}{0.85 f_{ck} b}$

## 시험 포인트
- 등가응력 깊이 $a$를 먼저 구한 뒤 휨모멘트 팔 길이 $(d - a/2)$를 곱해 공칭강도를 얻는다.`},"ch2-4-1":{title:"전단강도 (Vn)",content:`## 핵심 개념
철근콘크리트 보 부재가 전단력에 의해 비스듬하게 쪼개지는 파괴에 대해 저항할 수 있는 전체 공칭전단강도이다.

## 중요 공식
$$V_n = V_c + V_s$$
- $V_c$: 콘크리트가 부담하는 공칭전단강도
- $V_s$: 전단철근(스터럽)이 부담하는 공칭전단강도

## 콘크리트 단독 전단강도 공식
$$V_c = \frac{1}{6} sqrt{f_{ck}} b_w d$$

## 시험 포인트
- 콘크리트 자체의 저항 한계를 넘어설 경우 반드시 스터럽을 추가로 설계해야 한다.`},"ch2-4-2":{title:"스터럽 (Stirrup)",content:`## 핵심 개념
보 부재의 전단 응력에 저항하고 사인장 균열을 제어하기 위해 인장 주철근을 횡방향으로 감싸 올려 수직 배치하는 보강 철근이다.

## 스터럽 설계 강도 ($V_s$) 공식
$$V_s = \frac{A_v f_y d}{s}$$
- $A_v$: 전단 철근 단면적 (일반 U자형 스터럽은 주근을 양갈래로 감싸므로 $2 	imes$ 철근 1본 단면적)
- $s$: 스터럽 배치 간격
- $f_y$: 전단 철근의 항복 강도

## 시험 포인트
- 전단 하중이 가해질 때 대각 균열을 가로질러 응력을 분산하는 역할을 핵심적으로 담당한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
중 때문에  (시계방향)림과 같은 균열이
생겼다 이 균열이 생기지 않게 하기 위해서 취하여야 할
적당한 방법은?
① 인장철근을 증가시킨다.
② 압축철근을 증가시킨다.
③ 스터럽 (S↑irrup)을 증가시킨다.
④ 인장 및 압축철근의 부착력을 증가시킨다.
［해설］
전단력에 의한 사인장균열은 지점반력이 큰 양단에서
부재축과 45O 경사방향으로 중립축까지 발생되며
\`\`\``},"ch2-4-3":{title:"전단철근 간격",content:`## 핵심 개념
스터럽을 보 길이 방향으로 배치할 때, 규정된 전단 강도를 충족시키고 효율적인 균열 방지를 위해 제한하는 배치 피치(간격) 조건이다.

## 최대 간격 제한 기준 (KDS 14 20 22)
- 전단보강근 부담력 $V_s le \frac{5}{6} V_c$ 인 경우: $d/2$ 이하 또한 $600,mm$ 이하 중 작은 값
- $V_s > \frac{5}{6} V_c$ 인 고강도 요구 경우: $d/4$ 이하 또한 $300,mm$ 이하로 축소 제한

## 시험 포인트
- 유효깊이 $d$ 값을 기준으로 스터럽 최대 간격 규정을 계산 검토하는 실기 문제가 빈번하게 출제된다.`},"ch2-4-4":{title:"사인장균열",content:`## 핵심 개념
보 단부에 휨모멘트와 전단력이 동시에 크게 작용하여 발생하는 주 인장 응력이 원인이 되어, 보 측면에 약 45° 경사각 모양으로 발생하는 대각선 형태의 전단 균열이다.

## 발생 메커니즘
- 보 단부: 전단력 최대 $\rightarrow$ 수평응력과 전단응력의 합성 주 인장 응력이 경사 방향으로 발생 $\rightarrow$ 콘크리트 인장 강도를 초과하여 대각 균열 유발.

## 시험 포인트
- 이 사인장 균열을 가로막기 위해 수직 스터럽이나 사경사 철근을 적정 위치에 배치하는 것이다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
↓↓i RC 전단설계
CHECK
사인장균열의 원인•주요 발생위치, 전단보강철근의 종류,
강도설계법의 전단강도 설계식, 콘크리트 공칭 및 설계전단강도, 스더럽의 공칭전단강도 및 스터럽의 간격,
전단위험단면, 전단철근의 설계 및 간격 제한
EI 전단력에 의한 사인장균열(Diagon기 Tension CR_Ack)
학습 PO1NT
사인장균열
전단력 및 비틀림에 의하여 보의 축과 약 45° 의 각도를 이루고 보의 단부
(Diagonal Tension CR_Ack) (지점)에서 주인장응력 궤적도의 연직방향으로 발생한다.
\`\`\``},"ch2-4-5":{title:"복부보강",content:`## 핵심 개념
보의 깊이가 깊은 깊은 보(Deep Beam) 등에서, 부재 높이(복부) 중간 부위 콘크리트의 쪼갬 전단 균열 방지를 위해 종방향으로 배치하는 추가적인 복부(Web) 보강 철근이다.

## 목적
- 콘크리트의 두께 변화 및 건조수축에 따른 전단 응력 집중을 완화하고 보 측면의 박락을 예방한다.

## 시험 포인트
- 전체 보 깊이가 특정 한계를 넘을 경우 스터럽 외에 측면에 평행하게 종방향 스킨철근(복부철근) 배치가 의무화된다.`},"ch2-5-1":{title:"1방향 슬래브",content:`## 핵심 개념
슬래브의 두 변의 길이 비(장변 $L_y$ / 단변 $L_x$)가 **2.0을 초과**하여, 가해지는 하중이 대부분 짧은 변 방향의 1방향 보처럼 거동하는 슬래브이다.

## 역학적 설계
- 하중을 받는 짧은 변 방향을 주 휨방향으로 보고 주철근을 조밀하게 배치한다.
- 긴 변 방향에는 수온·건조수축 균열 제어용 **수축·온도철근**만 최소한으로 배치한다.

## 시험 포인트
- $L_y / L_x > 2.0$ 판정식을 암기하여, 1방향과 2방향 슬래브를 우선 분류하는 절차를 밟아야 한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
배근 기준 및 최소철근비
U 슬래브(Slab) 일반사항
학습 PO1NT
변장비 =
변장비 =
장변방향 山 < L,
단변방향 £, < Z^
장변 Span
단변 Span
•* 1방향 슬래브(1—Way Slab)
\`\`\``},"ch2-5-2":{title:"2방향 슬래브",content:`## 핵심 개념
슬래브의 두 변 길이 비(장변 $L_y$ / 단변 $L_x$)가 **2.0 이하**여서, 하중이 종횡 두 방향의 기둥/보로 골고루 분산 전달되는 2차원 판 구조물이다.

## 역학적 특징
- 짧은 변과 긴 변 방향 모두 주 휨 설계철근을 구조 계산을 통해 균등하게 배근한다.
- 모서리 부분(네 귀퉁이)은 비틀림 모멘트가 발생하므로 상하부 모서리 보강철근을 배치해야 한다.

## 시험 포인트
- 1방향 슬래브보다 처짐 및 균열 억제 성능이 우수하나 배근 상세가 상대적으로 복잡하다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
변장비 =
장변방향 山 < L,
단변방향 £, < Z^
장변 Span
단변 Span
•* 1방향 슬래브(1—Way Slab)
장변 Span
단변 Span
“• 2방향 슬래브(2—Way Slab)
⑴ 1방향 슬래브의 폭
\`\`\``},"ch2-5-3":{title:"철근 간격",content:`## 핵심 개념
슬래브 단면에서 철근을 나란히 배열할 때 균열의 고른 분산과 시공 및 자갈 채움의 정밀성을 보증하기 위해 제한하는 철근의 배열 피치 기준이다.

## 중요 기준 (KDS)
- 위험단면에서의 휨 주철근 최대 간격:
  - 슬래브 두께의 3배 이하, 또한 $450,mm$ 이하 중 작은 값.
- 온도·수축철근 간격:
  - 슬래브 두께의 5배 이하, 또한 $450,mm$ 이하 중 작은 값.

## 시험 포인트
- 굵은 골재의 최대 치수보다 최소한의 철근 이격 거리를 더 확보하여 틈새 메꿈 불량을 막는다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
최소철근량 4,min =Pmin - 허 • d=(0-002)(1,000)(150)= 300mm2
단위폭 1m당 철근의 개수: n=(『°0mm? = 4.23개
(71mm2)
철근 간격: s = ‘쏴씦뜨스丄= 236.4m m/1 개
답: ②
■ 제5장 RC 슬래브(Slab) 247
H 2방향 슬래브(2-Way Slab)： 직접설계법(Direc↑ Design Me↑hod)
등분포하중이 작용하는 슬래브-보의 위험단면에서 설계모멘트를 결정
하는 경험적인 설계방법으로, 골조의 각 경간을 단순보로 고려하여
계산한 휨모멘트(S↑a↑ic Momen↑) 를 받침부의 최대 부모멘트와 경간
\`\`\``},"ch2-5-4":{title:"최소두께",content:`## 핵심 개념
처짐 계산을 생략할 수 있는 슬래브 부재의 구조 기준상 명시된 최소 한계 두께이다.

## 판정 기준
- 일반 1방향 슬래브 단순 지지인 경우: 두께 $t ge L / 20$
- 1단 연속인 경우: $t ge L / 24$
- 양단 연속인 경우: $t ge L / 28$
- 캔틸레버식인 경우: $t ge L / 10$

## 시험 포인트
- 이 최소 한계 두께 규정을 충족하지 못하면, 직접 번거로운 처짐량 계산식을 적용하여 사용성 검토를 입증해야 한다.`},"ch2-6-1":{title:"처짐 제한",content:`## 핵심 개념
하중 작용 하에 발생하는 보/슬래브의 즉시 및 장기 처짐량이 마감재 훼손이나 거주성 저하를 방지하도록 설정한 한계치 기준이다.

## 중요 허용 기준
- 활하중에 의한 즉시 처짐 제한: 일반적으로 경간 $L / 360$ 이내
- 마감재 손상 우려가 있는 경우(장기 처짐 합산): $L / 480$ 이내

## 시험 포인트
- 장기 처짐은 즉시 처짐량에 장기처짐유발계수 $lambda_Delta$를 곱하여 합산하며, 압축철근비가 높을수록 장기 처짐량이 대폭 감소하는 역학적 성질이 시험에 자주 출제된다.`},"ch2-6-2":{title:"균열 제어",content:`## 핵심 개념
콘크리트 인장 영역에 불가피하게 발생하는 균열폭을 구조 성능이나 미관상 허용 가능한 임계 수준 이하로 제한하는 설계 관리 기법이다.

## 제어 인자
- **철근의 배치 간격**: 굵은 철근을 드문드문 배치하기보다 가느다란 철근을 촘촘히 쪼개 배치하는 것이 균열폭 억제에 절대적으로 유리하다.

## 시험 포인트
- 균열폭은 철근의 응력 크기 및 피복두께에 비례하여 증가한다. 따라서 인장 영역 내 철근의 허용인장응력을 억제 제어한다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
사용성의 정의, 강도한계상태와 사용성한계상태의 구분,
장기처짐계수, 총처짐의 계산,
최대허용처짐 규정, 처짐을 계산하지 않는 경우 보 또는 1방향슬래브의 최소두께 규정,
휨균열 제어(보 및 1방향 슬래브의 휨철근 배치)
HI 사용성(Serviceabili↑y)： 처짐, 균열, 진동 등
구조물 또는 구조부재에 과대한 처짐, 균열, 진동 등이 일어나면
구조물의 기능에 지장을 초래할 뿐만 δ니라, 미관을 해치고 사용자
에게 불안감을 제공하게 되므로 구조물은 외력에 대해 안전해야 될
뿐만 δ니라 사용성도 확보되어야 한다.
학습 PO1NT
\`\`\``},"ch2-6-3":{title:"내구성",content:`## 핵심 개념
건축물이 외부 유해 환경(염해, 동결융해, 이산화탄소 침투 등)에 노출되어 시간이 지남에 따라 구조 성능이 손상되지 않고 목표 수명 동안 안전하게 사용될 수 있는 성능이다.

## 대책
- 콘크리트 강도 확보 ($f_{ck} ge 30 	ext{ MPa}$)
- 물-시멘트비 저하 ($W/C le 50%$)
- 충분한 피복두께 확보 및 방청 코팅 철근 사용

## 시험 포인트
- 염분 환경 하에서는 피복두께 기준이 일반 내풍 환경 대비 최소 20mm 이상 상향 조정된다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
지능력을 잃고 붕괴되는 상태
한계상태
사용성한계상태
구조체가 붕괴되지는 않더라도 구조기능이 저하되어 외관, 유지관리,
(Serviceabili↑y Limi↑ S↑a↑e) 내구성 및 사용에 매우 부적합하게 되는 상태
계수하중(Fac↑ored Load)으로 검토 * U= 1.2刀+ 1.6Z
설계상의 검토
사용하중(Service Load)으로 검토 파 U= 1.0刀十 L0Z
핵심예제'1 ‘-••…-—-........- -.••....-........................-....-................
콘크리트 구조물의 설계법 중 강도설계법의 특징으로 옳지 않은 것은?
\`\`\``},"ch2-6-4":{title:"피복두께",content:`## 핵심 개념
철근 표면에서 콘크리트 외부 표면까지의 최소 거리로, 철근을 부식과 화재로부터 보호하는 콘크리트 보호층이다.

## 중요 규정 (최소 피복두께)
- 흙에 접하여 콘크리트를 친 후 영구히 흙에 묻혀 있는 콘크리트: **$60,mm$**
- 흙에 직접 치는 수중 콘크리트 또는 흙 접지면 기초: **$80,mm$**
- 옥외 노출 보·기둥: **$50,mm$**
- 일반 실내 보·기둥: **$40,mm$**, 슬래브·벽체: **$20,mm$**

## 시험 포인트
- 피복두께를 설계 기준보다 얇게 시공하면 중성화가 철근까지 도달하는 시간이 짧아져 건물 수명이 단축된다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
연단에 가장 가까이에 배치되는 철근의 중심간격（S）은다음 ①，② 중 작은값 이하로 결정한다.
«V_A = 280
건조환경에 노출되는 경우
«„. =210
(시계방향) 외의 경우
. Cc
순피복두께（Clear Cover o↓ Rein↓orcemen↑）
인장철근이나 긴장재 표면과 콘크리트 표면 사이의 최소두께
사용하중 상태에서 인장연단에서 가장 가까이에 위치한 철근의 응력 （근사값 : /., = |/,）
핵짐예제 "7
\`\`\``},"ch2-7-1":{title:"정착길이 (ld)",content:`## 핵심 개념
철근이 힘을 받을 때 콘크리트 밖으로 뽑혀 나가지(부착 파괴) 않도록 철근을 단면 내에 묻어주어야 하는 최소 설계 깊이이다.

## 영향 인자
- 철근 지름이 클수록, 철근 항복강도($f_y$)가 높을수록 정착길이가 **길어져야** 한다.
- 콘크리트 압축강도($f_{ck}$)가 높을수록 부착력이 커지므로 정착길이는 **짧아진다**.

## 시험 포인트
- 인장 보정 계수 및 상부철근(정착길이 1.3배 할증) 보정 계수 등 상세 보정 요인이 시험의 주요 타겟이다.`},"ch2-7-2":{title:"이음 (겹침·기계적·용접)",content:`## 핵심 개념
제작 및 운반 한계로 생산되는 철근을 보완하기 위해 두 철근의 끝단을 묶거나 연결하여 연속화시키는 방법이다.

## 종류 특징
- **겹침이음 (Lap Splice)**: 두 철근을 겹쳐 결속선으로 고정한 이음 (D35 초과 굵은 철근은 적용 금지).
- **기계적 이음 (Coupler)**: 나사식 커플러 슬리브를 사용해 직접 맞댐 연결.
- **가스압접 이음**: 산소 아세틸렌염으로 단부를 가열 압착 연결.

## 시험 포인트
- 겹침이음은 응력이 집중되는 단면 취약점이 되므로, 동일 단면에서 이음 부위가 전체 철근의 **50%**를 넘지 않도록 상호 엇갈림 배치를 해야 한다.`},"ch2-7-3":{title:"갈고리 (Hook)",content:`## 핵심 개념
철근 단부를 특정 각도(90도 또는 135도, 180도)로 구부려 콘크리트 내부 구조체에 기계적으로 걸리게 함으로써 정착 성능을 비약적으로 보장해주는 갈고리 정착 장치이다.

## 중요 기준
- 스터럽 및 띠철근의 내부 갈고리 각도는 급격한 횡력 작용 시 벌어짐을 방지하기 위해 최소 **135° 이상** 구부려 정착하는 것이 내진 설계의 필수적 의무 조건이다.

## 시험 포인트
- 90도 갈고리는 콘크리트 압축 파괴 시 쉽게 풀려 빠질 위험이 있어 보강용 스터럽에는 부적합하다.`},"ch2-7-4":{title:"부착강도",content:`## 핵심 개념
철근 표면과 콘크리트 접촉면 사이의 상대적 미끄러짐에 저항하는 응력의 크기이다.

## 부착력 구성 요소
1. 시멘트 페이스트와 철근 표면의 화학적 접착력
2. 마찰 저항력
3. 이형철근 표면의 마디(Lug)와 리브(Rib)가 콘크리트를 기계적으로 걸고 버티는 지압력 (가장 지배적)

## 시험 포인트
- 원형철근보다 표면에 요철이 있는 이형철근의 부착강도가 약 2~3배 이상 강력하다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
철근 공칭지름의 1.5배 이상으로 하여야 한다.
답 : ③
■ 건축구조 274
El 부착(Bond) 성능에 영향을 주는 요인
뽑힘부착파괴
쪼갬부착파괴
이형철근이 원형철근 보다 부착강도가 크며, 직경이 굵은 철근보다 가는 것을
여러 개 쓰는 것이 좋다.
② 녹이 많이 슨 철근은 녹을 제거해야 하지만 약간 녹이 슨 철근은 새 철근보다
V 부착강도가크다.
\`\`\``},"ch2-7-5":{title:"철근 간격 · 피복두께",content:`## 핵심 개념
철근배근 시 자갈 콘크리트 페이스트가 철근 사이 틈새를 통해 원활하게 흘러 들어가 밀실한 타설이 되도록 설정한 최소의 빈 공간 이격 기준이다.

## 수평 최소 간격 기준 (세 조건 중 최댓값 이상 이격)
1. $25,mm$ 이상
2. 철근 공칭 지름 ($d_b$) 이상
3. 굵은 골재 최대 치수의 4/3배 이상

## 시험 포인트
- 철근이 너무 촘촘하게 붙어 시공되면 자갈이 끼어 하부에 공동(Honey Comb, 빈틈 불량)이 발생하여 심각한 강도 결함을 유발한다.`},"ch3-1-1":{title:"강재의 종류 (SS400, SM)",content:`## 핵심 개념
건축구조용 압연 강재의 규격 및 사용 목적으로 구분된다.
- **SS (일반 구조용 압연강재)**: 기둥, 보 등 일반적인 프레임 구조체에 널리 활용된다. (예: SS400은 인장강도 최솟값이 400 MPa 임을 의미했으나, 신 규격 개정으로 SS275 등 항복강도 기준 명칭으로 변경됨)
- **SM (용접 구조용 압연강재)**: 용접성이 강조되어 강재의 탄소량을 억제하고 충격 인성을 강화한 강재이다.

## 시험 포인트
- 용접 접합이 주를 이루는 대형 보-기둥 결합부에는 SS 강재보다 용접성이 우수한 **SM 강재** 사용이 필수적으로 권장된다.`},"ch3-1-2":{title:"허용응력설계법 (ASD)",content:`## 핵심 개념
강재에 하중을 가할 때 발생하는 단면의 최대 응력이 재료가 안전하게 버틸 수 있는 **허용응력** 이하가 되도록 부재 단면을 설계하는 고전적인 탄성 설계 기법이다.

## 관계식
$$sigma_{max} le F_a$$
- $F_a$: 허용응력 ($= 	ext{항복강도 } F_y div 	ext{안전율}$)
- 안전율(Factor of Safety)은 대개 1.5 ~ 2.0 범위를 적용한다.

## 시험 포인트
- 한계상태설계법(LSD) 도입 이전의 전통적인 설계법으로, 직관적이고 연산이 단순하여 강구조 설계 가이드의 기반을 이룬다.`},"ch3-1-3":{title:"항복강도 · 인장강도",content:`## 핵심 개념
- **항복강도 (Yield Strength, $F_y$)**: 강재가 변형된 후 하중을 제거해도 원래 형태로 복원되지 못하고 영구적인 소성 변형이 개시되는 임계 응력이다.
- **인장강도 (Tensile Strength, $F_u$)**: 인장 시험 시 강재 시편이 버텨낼 수 있는 최대 응력 지점의 값이다.

## 강도적 특징
- 강재의 허용 내력 계산은 주로 구조물 영구 손상을 방지하기 위해 이 **항복강도** 값을 기준점으로 잡고 설계한다.

## 시험 포인트
- 고강도 강재일수록 항복강도가 인장강도에 극도로 가까워지는 특성(항복비가 커짐)을 보이나, 이 경우 연성이 감소하므로 주의해야 한다.`},"ch3-1-4":{title:"잔류응력 · 취성파괴",content:`## 핵심 개념
- **잔류응력**: 강재의 용접 가열 후 냉각 또는 불균일 압연 과정에서 외부 하중이 없는 상태에서 부재 내부에 스스로 갇혀 잔존하게 된 응력이다.
- **취성파괴**: 강재가 영구 소성 변형이나 뚜렷한 사전 경고 징후 없이 급작스럽게 유리처럼 쪼개져 나가는 파괴 형태이다.

## 잔류응력의 영향
- 압축재의 초기 좌굴을 앞당기거나 용접 접합부 주위의 취성 균열을 유발하는 중대한 결함 요인이다.

## 시험 포인트
- 저온 환경, 두꺼운 판 두께, 용접 구속 상태가 가혹할수록 **취성파괴** 위험이 기하급수적으로 증가한다.`},"ch3-2-1":{title:"고장력볼트 (HTB)",content:`## 핵심 개념
일반 볼트보다 인장 강도가 현저히 높은 강재(F8T, F10T 등)로 제작된 볼트로, 강력한 토크 조임력을 부재에 인가하여 마찰력 접합을 구현하는 핵심 부품이다.

## 체결 방식
- 토크렌치나 너트회전법을 통해 설계상 명시된 일정한 기준 긴장력(Pretension) 이상으로 균일하게 체결 관리한다.

## 시험 포인트
- 조임 시 중앙 볼트에서 시작해 외부 가장자리 방향으로 단계를 밟아가며 체결해야 응력 치우침을 막을 수 있다.`},"ch3-2-2":{title:"마찰접합 · 지압접합",content:`## 핵심 개념
- **마찰접합**: 고력볼트 조임력에 의해 겹쳐진 두 부재 사이에 수반되는 강력한 **마찰 저항**을 이용해 응력을 전하므로 미끄러짐이 전혀 발생하지 않는다.
- **지압접합**: 미끄러짐을 허용한 채, 볼트축의 전단력과 구멍 측벽의 압축 지압력으로 힘을 전달한다.

## 접합면 처리 (마찰접합)
- 부재 접착 표면의 마찰 계수를 극대화하기 위해 녹막이칠(방청 도장)을 금지하고 샌드블라스트(Shot Blast) 처리하여 붉은 녹이 슬 정도로 거칠게 처리한다.

## 시험 포인트
- 마찰접합은 구멍 변형이 없어 진동 및 피로 하중에 저항 능력이 대단히 강력하다.`},"ch3-2-3":{title:"볼트 전단강도",content:`## 핵심 개념
볼트 체결 접합부에서 볼트의 단면이 전단력에 의해 끊어지는 전단 파괴에 견디는 설계 한계 강도이다.

## 중요 공식 (1개 볼트의 공칭전단강도 $R_n$)
$$R_n = F_{nv} cdot A_b cdot N_s$$
- $F_{nv}$: 볼트재의 공칭전단강도
- $A_b$: 볼트 축부의 공칭 단면적
- $N_s$: 전단 작용면의 수 (단일 전단 = 1, 이중 전단 = 2)

## 시험 포인트
- 나사부가 전단면에 걸치게 배치되면 단면 결손이 생겨 전단 강도가 약 30%가량 감소하므로 설계 시 나사면 통과 여부를 구별 확인해야 한다.`},"ch3-2-4":{title:"순단면 · 전단지연",content:`## 핵심 개념
- **순단면 (Net Area)**: 볼트 구멍 등으로 인한 단면 결손을 공제한 실질 유효 인장 단면적이다.
- **전단지연 (Shear Lag)**: 인장재 접합부에서 일부 요소(예: ㄱ형강의 한쪽 플랜지만 볼트 접합 시)만 접합되어, 단면 전체에 인장 응력이 고르게 전달되지 못하고 응력 흐름이 지체되어 인장 효율이 떨어지는 현상이다.

## 시험 포인트
- 전단지연 효과를 반영하기 위해 순단면에 전단지연계수 $U$(항상 $le 1.0$)를 곱해 최종 **유효순단면적 ($A_e$)**을 구한다: $A_e = U cdot A_n$`},"ch3-3-1":{title:"맞댐용접 (BW)",content:`## 핵심 개념
두 모재의 끝단을 맞대어 놓고 그 틈새(그루브)를 용접봉으로 녹여 채워 완전히 일체화시키는 용접법(그루브 용접, Groove Weld)이다.

## 특징
- 완전용입용접(CJP)인 경우 결함이 없다면 접합부 강도가 모재의 강도와 완전히 동등하다.
- 힘의 전달 경로가 꺾임 없이 일직선으로 진행되므로 응력 집중이 매우 적다.

## 시험 포인트
- 용접 전 판 단부를 비스듬히 깎아내는 개선(Groove) 가공 작업이 사전 필수적이다.`},"ch3-3-2":{title:"필릿용접 (FW)",content:`## 핵심 개념
두 부재가 서로 겹치거나 직각으로 교차하는 결합 모서리에 삼각형 형태의 단면을 가지도록 접합하는 용접법이다.

## 특징
- 모재 단부 가공이 불필요하여 맞댐용접에 비해 현장 시공이 대단히 간편하다.
- 단면 응력 경로가 90도로 꺾여 용접부에 복잡한 전단 응력이 발생하므로 강도는 맞댐용접보다 상대적으로 약하다.

## 시험 포인트
- 필릿용접의 설계 강도는 오직 **유효 전단 면적(유효목두께 $	imes$ 유효용접길이)**을 기준으로 계산한다.`},"ch3-3-3":{title:"유효목두께 (a)",content:`## 핵심 개념
용접부의 설계상 힘을 안전하게 전달할 수 있는 최소의 유효한 용접 단면 두께를 의미한다.

## 중요 공식 (필릿용접 기준)
$$a = 0.7 cdot S$$
- $S$: 필릿용접의 다리 길이 (사이즈)

## 시험 포인트
- 필릿용접의 단면은 직각 이등변 삼각형 형상으로 가정되므로, 최단 거리인 높이 비율 $1/sqrt{2} approx 0.7$배가 유효목두께가 된다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
관련 주요용어
■■  (시계방향)루브용접(Groove Voiding, 맞댐용접)
학습 PO1NT
두 모재의 접합부를 일정한 모양으로
가공하고  (시계방향) 속에 용착금속을 채워 넣어
용접하는 방법
유효목두께 (a)
마 모재두께가 다를 경우 얇은 쪽 모재두께
용접유효길이(AJ
- 부재축에 직각인 접합부의 폭
\`\`\``},"ch3-3-4":{title:"용접 강도 계산",content:`## 핵심 개념
용접 접합부가 외부 하중(전단, 휨)에 파괴되지 않도록 유효 목단면을 기준으로 설계 내력을 산정하는 절차이다.

## 중요 계산 공식
인장/전단을 받는 필릿용접의 허용 설계 강도 $P_d$:
$$P_d = a cdot L_{eff} cdot F_w$$
- $a$: 유효목두께 ($0.7S$)
- $L_{eff}$: 유효용접길이 (실제 용접 길이에서 크레이터 등 결함 방지를 위해 단부에서 각각 용접 사이즈 $S$만큼 감한 길이: $L_{eff} = L - 2S$)
- $F_w$: 용접재의 설계 응력 강도

## 시험 포인트
- 유효 용접 길이 계산 시 양단에서 각각 용접 크기 $S$를 한 번씩, 총 **$2S$**를 차감해 주는 보정이 필수적이다.`},"ch3-4-1":{title:"인장재 설계",content:`## 핵심 개념
부재의 축방향으로 당겨지는 인장력을 받는 부재(트러스 현재, 가새 등)를 안전하게 설계하는 기법이다.

## 설계 한계 상태
1. **총단면의 항복**: 부재 전체의 과도한 변형 방지 (설계 강도 $phi R_n = 0.9 cdot A_g cdot F_y$)
2. **유효순단면의 파단**: 접합 볼트 구멍 위치에서의 찢어짐 파괴 방지 (설계 강도 $phi R_n = 0.75 cdot A_e cdot F_u$)

## 시험 포인트
- 인장재는 좌굴 우려가 없으므로 압축재에 비해 단면 효율이 극대화되나, 볼트 구멍에 의한 단면 결손 검토가 주요 핵심이다.`},"ch3-4-2":{title:"압축재 (기둥) 설계",content:`## 핵심 개념
축방향 압축력을 받는 기둥 부재를 좌굴 파괴와 압축 압괴에 대해 안전하도록 단면 크기를 결정하는 설계 기법이다.

## 역학적 특성
- 압축재의 강도는 부재의 전체 좌굴에 대단히 지배적이므로 단면 형상뿐만 아니라 기둥의 길이, 단부 지지 조건(경계 조건)을 연계하여 설계 축력을 구한다.

## 시험 포인트
- 가늘고 긴 압축재는 세장비 크기가 증가하면 오일러 임계 하중에 의해 지지 능력이 비약적으로 낮아지므로 세장비를 일정 기준 이하로 제한해야 한다.`},"ch3-4-3":{title:"좌굴 · 세장비 (λ)",content:`## 핵심 개념
기둥이나 가새 같은 압축 부재의 가늘고 긴 정도를 기하학적 수치로 나타낸 비율로, 압축재의 **좌굴**을 지배하는 가장 핵심적인 변수이다.

## 중요 공식 (세장비 $lambda$)
$$lambda = \frac{K L}{r}$$
- $K L$: 유효좌굴길이
- $r$: 단면의 회전반경 ($r = sqrt{I/A}$)

## 시험 포인트
- 세장비가 클수록 압축재의 허용 압축응력(좌굴 강도)이 급격하게 낮아진다.
- 일반적으로 압축력을 받는 기둥 부재의 한계 세장비는 **200 이하**로 설계 제한(인장재는 300 이하)한다.`},"ch3-4-4":{title:"유효좌굴길이 (KL)",content:`## 핵심 개념
기둥 단부의 구속 조건(고정, 핀, 자유)에 따라 기둥이 실제로 좌굴 변형을 일으킬 때 나타나는 휨 곡선의 변곡점(모멘트 = 0) 사이의 등가 길이를 의미한다.

## 구속 조건 계수 ($K$ 값, 양단 핀 기준 1.0)
- 양단 고정: $K = 0.5$ (가장 안정적, 등가 길이 반감)
- 힌지-고정: $K = 0.7$
- 일단 고정, 일단 자유 (캔틸레버): $K = 2.0$ (가장 취약)

## 시험 포인트
- 단부 구속 지점의 특성(고정3/힌지2/롤러1)과 연계하여 최적의 $K$ 값을 결정하는 문제가 빈번하다.`},"ch3-4-5":{title:"판좌굴 (국부좌굴)",content:`## 핵심 개념
기둥 전체가 휘기 전에, 기둥 단면을 구성하는 얇은 강판(플랜지 또는 웨브)의 일부가 압축력에 의해 쪼글쪼글하게 물결 모양으로 먼저 꺾여 붕괴하는 국부적인 불안정 현상이다.

## 방지 대책
- **폭두께비 제한**: 판의 두께($t$) 대비 판의 폭($b$)의 비율인 폭두께비($b/t$)를 규정된 한계치 이하로 설계하여 판을 너무 얇지 않게 유지한다.
- 취약 부위에 보강 스티프너(Stiffener)를 설치한다.

## 시험 포인트
- 판좌굴을 방지하기 위한 강재 단면 분류(조밀, 비조밀, 세장단면) 기준이 출제된다.`},"ch4-1-1":{title:"라멘구조",content:`## 핵심 개념
기둥과 보를 일체로 결합하여 횡하중에 저항하게 만든 골조 구조물(Rigid Frame)이다.

## 역학적 특징
- 접합부가 **강접(Rigid Joint)**되어 있어 하중 발생 시 기둥과 보가 함께 휨모멘트로 저항한다.
- 전단벽이 없어 내부 평면 계획(공간 확보 및 가변성)이 매우 자유롭다.

## 시험 포인트
- 지진이나 바람 같은 횡력이 작용할 때 건물 상부로 갈수록 모멘트 및 횡변위가 크게 유발되므로 고층 건물에는 단독 사용이 제한된다.`},"ch4-1-2":{title:"전단벽 구조",content:`## 핵심 개념
상부의 연직 하중뿐만 아니라 지진 및 풍하중 같은 수평 방향의 횡하중을 전단 강성이 매우 높은 철근콘크리트 벽체로 직접 지탱하는 구조시스템이다.

## 역학적 특징
- 벽체가 캔틸레버식 수직 거대 보처럼 거동하여 강성이 매우 뛰어나다.
- 횡변위 제어 능력이 라멘조에 비해 비약적으로 우수하다.

## 시험 포인트
- 국내 아파트(공동주택)의 가장 지배적인 표준 구조이며, 벽체 제거가 불가능하여 평면 가변성이 떨어진다는 단점이 있다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
25% 이상을 부담하는 연성모멘트골조가 전단벽이나 가새골조와
조합되어 있는 구조방식을 무엇이라 하는가?
① 제진시스템방식
② 면진시스템방식
: ③ 이중골조방식
④ 메가칼럼-전단벽 구조방식
답: ③
핵잠예제 12
초고층건물의 구조형식 중 건물 외곽 기둥을 밀실하게 배치하고 일체화
하여 초고층 건물을 계획하는 구조형식은?
\`\`\``},"ch4-1-3":{title:"내력벽 구조",content:`## 핵심 개념
보나 기둥 없이 슬래브의 하중을 오직 벽체(조적벽 또는 콘크리트벽)가 직접 받아 기초로 전달하는 방식의 중력식 지지 구조체이다.

## 특징
- 보와 기둥이 돌출되지 않아 실내 공간의 요철이 없고 깔끔하다.
- 주로 벽돌조 건물이나 저층 아파트, 연립주택에 사용된다.

## 시험 포인트
- 내벽을 마음대로 허물면 구조체 전체 붕괴로 이어지므로 리모델링 시 매우 취약한 구조적 한계를 지닌다.`},"ch4-1-4":{title:"코어 시스템",content:`## 핵심 개념
초고층 건물 중앙부에 엘리베이터, 계단실, 배관 샤프트 등을 모아서 강성이 대단히 높은 상자형 콘크리트 박스 코어벽을 구축하고, 이 코어가 횡력의 대부분을 부담하도록 설계한 시스템이다.

## 역학적 효율성
- 비틀림 저항 및 횡력 저항의 중심 뼈대 역할을 원스톱으로 수행한다.
- 코어 바깥쪽 사무실 평면은 기둥을 최소화하여 개방감을 확보할 수 있다.

## 시험 포인트
- 건물 높이가 올라가면 코어 단독만으로는 휨 모멘트에 버티기 힘들어 아웃리거 시스템과 흔히 병행 설계된다.`},"ch4-1-5":{title:"아웃리거 시스템",content:`## 핵심 개념
건물 중앙의 코어와 외곽의 거대 기둥(Mega Column)을 강성이 매우 큰 트러스나 보(아웃리거)로 결합하여 초고층 건물의 횡강성을 극대화한 시스템이다.

## 작동 원리
- 횡력 작용 시, 중앙 코어가 휠 때 외곽 기둥이 코어를 꽉 붙잡아 외곽 기둥에는 인장과 압축의 축방향력만 유도함으로써 건물의 수평 변위를 대폭 경감시킨다.

## 시험 포인트
- 코어의 변곡점 휨 모멘트를 분산시키고 기둥의 효율을 극대화하여 80층 이상의 초고층 빌딩 설계 시 표준적 대안으로 활용된다.`},"ch4-1-6":{title:"튜브 구조",content:`## 핵심 개념
건물 외곽 전체에 촘촘한 간격으로 기둥을 촘촘히 세우고 이들을 깊이가 깊은 보로 조립하여, 건물 전체가 하나의 거대한 속이 빈 사각형 상자(튜브) 형태로 횡하중에 저항하게 한 초고층 구조시스템이다.

## 역학적 특징
- 건물 전체가 외곽 외피 튜브의 거동을 통해 횡력에 저항하므로 기둥의 면외 전단 변형이 적다.
- 단점: 보의 전단 변형으로 인해 모서리 기둥에만 응력이 몰리고 중앙 기둥은 효율이 떨어지는 **전단지연(Shear Lag) 현상**이 발생한다.

## 시험 포인트
- 초고층 빌딩(예: 옛 뉴욕 세계무역센터)에 도입되었던 혁신적인 구조 기법이다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
초고층건물의 구조형식 중 건물 외곽 기둥을 밀실하게 배치하고 일체화
하여 초고층 건물을 계획하는 구조형식은?
서 ① 메가칼럼 구조
② 대각가새 구조
： ③ 전단벽 구조
④ 튜브 구조
답 : ④
핵적혀쩌떠.......................................................
고층건물의 구조형식 중에서 건물의 중간층에 대형 수평부재를 설치하여
횡력을 외곽기둥이 분담할 수 있도록 한 형식은?
\`\`\``},"ch4-2-1":{title:"토질 기본 성질",content:`## 핵심 개념
기초가 놓이는 지반 토층의 역학적 특성으로, 입자 크기에 따라 점성토와 사질토로 크게 양분된다.

## 흙의 특성 비교
- **점성토 (Clay)**: 입자가 미세하여 점착력이 있고 투수성이 매우 낮음. 장기적인 **압밀 침하**가 주요 문제.
- **사질토 (Sand)**: 모래 입자로 점착력은 없으나 마찰각이 큼. 투수성이 좋아 하중 작용 시 **즉시 침하**가 발생하고 종결됨.

## 시험 포인트
- 사질토의 전단 강도는 내부마찰각($phi$), 점성토의 전단 강도는 점착력($c$)에 지배된다.`},"ch4-2-2":{title:"독립기초 · 복합기초",content:`## 핵심 개념
- **독립기초 (Isolated Footing)**: 기둥 1개당 단독으로 1개의 사각형 기초판을 매칭하여 하중을 지반에 전달하는 기초이다.
- **복합기초 (Combined Footing)**: 대지 경계선에 걸치거나 기둥 간격이 좁아 독립판 설치가 곤란할 때, 2개 이상의 기둥을 하나의 기초판으로 묶어 지지하는 기초이다.

## 시험 포인트
- 독립기초는 구조가 명료하고 공사비가 가장 저렴하나, 지반이 불균질할 경우 기둥 간 가라앉는 양이 다른 **부동침하** 위험이 있다.`},"ch4-2-3":{title:"온통기초 (매트기초)",content:`## 핵심 개념
건물 하부 전체 면적에 걸쳐 하나의 두껍고 넓은 철근콘크리트 판을 깔아 모든 기둥과 벽체의 하중을 통합 지지하는 기초이다.

## 역학적 장점
- 접지 면적을 최대로 넓혀 단위 면적당 지반 접지압을 최소화한다.
- 지반 지지력이 연약하거나 기둥 하중이 비대칭이어도 단일 판이 덩어리로 저동하므로 **부동침하** 방지에 최고 효율을 가진다.

## 시험 포인트
- 지하 주차장 전체 방수 및 지하수 부력에 의한 부상 저항용 기초판으로 설계된다.`},"ch4-2-4":{title:"지지력 · 침하",content:`## 핵심 개념
- **지지력 (Bearing Capacity)**: 지반이 상부 하중에 파괴(전단 파괴)되지 않고 버틸 수 있는 한계 응력이다.
- **침하 (Settlement)**: 하중 재하로 지반의 간극이 축소되면서 지동이나 기초판이 아래로 꺼지는 현상이다.

## 옹벽의 안정 조건 3가지
옹벽이나 지반 설계 시 파괴 방지를 위해 아래 3가지를 필히 검토한다:
1. **활동에 대한 안정**: 수평 밀림 방지 (안전율 $ge 1.5$)
2. **전도에 대한 안정**: 회전 넘어짐 방지 (안전율 $ge 2.0$)
3. **지반 지지력에 대한 안정**: 지반 압괴 방지

## 시험 포인트
- 전체가 동일하게 침하하는 등분포 침하보다 구조물 균열과 변형을 유발하는 **부동침하(부등침하)**가 훨씬 위험하다.`},"ch4-2-5":{title:"말뚝기초",content:`## 핵심 개념
상부의 연직 하중이 크거나 지표면 가까이의 연약층 지지력이 미달할 때, 지중 깊이 말뚝을 박아 단단한 암반 지지층까지 하중을 유도 전달하는 깊은 기초 구조이다.

## 지지 방식 분류
1. **선단지지 말뚝**: 말뚝 끝단(선단)이 단단한 암반층에 닿아 선단 저항력($Q_p$)으로 지지
2. **마찰 말뚝**: 말뚝 주위 흙과의 마찰력($Q_s$)으로 지지 (지지층이 너무 깊을 때)

## 시험 포인트
- 기성 콘크리트 말뚝의 국내 표준 규격은 고강도 원심력 프리스트레스트 콘크리트 말뚝인 **PHC 말뚝**이다.

### 📖 교재 수록 내용 (OCR 발췌)
\`\`\`text
반의 깊이에 따라 기초구조를 얕은 기초(Shallow Founda↑ion), 깊은 기초(Deep Founda↑ion)S. 분류하며,
얕은 기초는 직접기초라고도 하며 깊은 기초는 말뚝기초, 피어기초, 케이슨(Caisson, 잠함) 기초로 구분한다.
• 얕은 기초(Shallow Founda↑ion)： 지표면 가까이에 굳은 지충이 있어서 기초판을 통해 하중을 직접 지반에
전달하는 기초
• 깊은 기초(Deep Founda↑ion)： 굳은 지층이 깊이 있어서 말뚝(Pile)기초, 피어(Pier)기초, 케이슨(Caisson, 잠함)기초
등을 통해 간접적으로 하중을 전달하는 기초
(2) 기초판 형식에 의한 분류
독립기초
연속(줄) 기초
복합기초
\`\`\``},"ch4-3-1":{title:"지진하중 산정",content:`## 핵심 개념
지진 시 지반 운동으로 인해 건물 구조체 자중과 가속도의 곱에 의해 유발되는 관성 하중(횡력)을 공학적으로 계산하는 방법이다.

## 산정 원칙
- 건물 전체의 유효 자중(건물 중량 $W$)이 무거울수록, 지반의 가속도가 클수록 설계 지진하중은 정비례하여 증가한다.
- 따라서 내진 설계를 위해서는 건물 자중을 가볍게 경량화하는 것이 근본 대책이 된다.

## 시험 포인트
- 등가정적해석법을 통해 복잡한 동적 지진동을 단순 수평 하중 분포로 치환하여 설계에 대입한다.`},"ch4-3-2":{title:"반응수정계수 (R)",content:`## 핵심 개념
내진 설계 시 구조물의 연성(인성)과 에너지 소산 능력을 감안하여, 가상의 지진력을 합리적으로 줄여주기 위해 설계식의 분모에 곱해주는 감소 계수이다.

## 중요 특징
- 구조 시스템의 횡력 변형 능력이 우수할수록(연성이 클수록) 높은 R 값을 부여한다.
- R 값이 큰 구조(예: 특수모멘트골조, $R=8$)는 R 값이 작은 구조(예: 전단벽조, $R=3sim4$)에 비해 설계 밑면전단력이 대폭 줄어든다.

## 시험 포인트
- R 계수는 지진력 산정 공식의 **분모**에 위치하므로, 이 값이 클수록 실제 설계해야 하는 지진 하중이 작아진다.`},"ch4-3-3":{title:"밑면전단력 (V)",content:`## 핵심 개념
지진 발생 시 건물의 맨 밑바닥 기초면에 가해지는 전체 수평 전단력의 합력으로, 내진 설계의 출발점이 되는 총 횡하중이다.

## 중요 공식 (KDS 41 17 00)
$$V = \frac{S_{ds} cdot I_e}{R} W$$
- $S_{ds}$: 설계 단주기 지진가속도 스펙트럼 값
- $I_e$: 지진 중요도계수
- $R$: 반응수정계수
- $W$: 건물의 유효 건물 중량

## 시험 포인트
- 이 공식의 구성 요소와 각 기호의 정비례/반비례 영향을 구체적으로 기술할 수 있어야 한다.`},"ch4-3-4":{title:"층간변위 제한",content:`## 핵심 개념
지진 시 인접한 상하 층간에 발생하는 수평 방향의 상대적인 변위량(이격거리)을 제한하여, 건물 골조의 과도한 변형과 내부 비구조재(유리창, 칸막이벽)의 파손 탈락을 막는 내진 안전 기준이다.

## 허용 한계값
- 건물의 내진 등급에 따라 층높이($h_x$)의 대략 1.0% ~ 2.0% 이내로 엄격하게 규정한다 (예: 일반 빌딩은 층고의 1.5% 이하).

## 시험 포인트
- 골조가 튼튼해도 이 층간변위 변형 제한을 충족하지 못하면 횡방향 강성을 보강하기 위해 전단벽이나 브레이스를 추가해야 한다.`},"ch4-3-5":{title:"중요도계수 (Ie)",content:`## 핵심 개념
지진 시 재난 대피소, 소방서, 종합병원 등 공공 안녕과 복구에 핵심적인 중요 시설물이 일반 시설보다 지진력을 더 안전하게 견디도록 하중을 가중하는 내진 중요도 할증 계수이다.

## 등급별 계수
- 특등급 (병원, 통신망, 소방서): $I_e = 1.5$ (설계 지진력 50% 가중)
- 1등급 (학교, 다중이용시설): $I_e = 1.2$
- 2등급 (일반 창고 등): $I_e = 1.0$

## 시험 포인트
- 중요도계수는 밑면전단력 산정 공식의 **분자**에 위치하므로, 건물의 중요성이 클수록 설계 지진력이 증폭되어 튼튼하게 설계된다.`}};var Ru,Gp;function ad(){if(Gp)return Ru;Gp=1;var n="\0",r="\0",o="";class l{constructor(m){Ue(this,"_isDirected",!0);Ue(this,"_isMultigraph",!1);Ue(this,"_isCompound",!1);Ue(this,"_label");Ue(this,"_defaultNodeLabelFn",()=>{});Ue(this,"_defaultEdgeLabelFn",()=>{});Ue(this,"_nodes",{});Ue(this,"_in",{});Ue(this,"_preds",{});Ue(this,"_out",{});Ue(this,"_sucs",{});Ue(this,"_edgeObjs",{});Ue(this,"_edgeLabels",{});Ue(this,"_nodeCount",0);Ue(this,"_edgeCount",0);Ue(this,"_parent");Ue(this,"_children");m&&(this._isDirected=Object.hasOwn(m,"directed")?m.directed:!0,this._isMultigraph=Object.hasOwn(m,"multigraph")?m.multigraph:!1,this._isCompound=Object.hasOwn(m,"compound")?m.compound:!1),this._isCompound&&(this._parent={},this._children={},this._children[r]={})}isDirected(){return this._isDirected}isMultigraph(){return this._isMultigraph}isCompound(){return this._isCompound}setGraph(m){return this._label=m,this}graph(){return this._label}setDefaultNodeLabel(m){return this._defaultNodeLabelFn=m,typeof m!="function"&&(this._defaultNodeLabelFn=()=>m),this}nodeCount(){return this._nodeCount}nodes(){return Object.keys(this._nodes)}sources(){var m=this;return this.nodes().filter(h=>Object.keys(m._in[h]).length===0)}sinks(){var m=this;return this.nodes().filter(h=>Object.keys(m._out[h]).length===0)}setNodes(m,h){var v=arguments,x=this;return m.forEach(function(w){v.length>1?x.setNode(w,h):x.setNode(w)}),this}setNode(m,h){return Object.hasOwn(this._nodes,m)?(arguments.length>1&&(this._nodes[m]=h),this):(this._nodes[m]=arguments.length>1?h:this._defaultNodeLabelFn(m),this._isCompound&&(this._parent[m]=r,this._children[m]={},this._children[r][m]=!0),this._in[m]={},this._preds[m]={},this._out[m]={},this._sucs[m]={},++this._nodeCount,this)}node(m){return this._nodes[m]}hasNode(m){return Object.hasOwn(this._nodes,m)}removeNode(m){var h=this;if(Object.hasOwn(this._nodes,m)){var v=x=>h.removeEdge(h._edgeObjs[x]);delete this._nodes[m],this._isCompound&&(this._removeFromParentsChildList(m),delete this._parent[m],this.children(m).forEach(function(x){h.setParent(x)}),delete this._children[m]),Object.keys(this._in[m]).forEach(v),delete this._in[m],delete this._preds[m],Object.keys(this._out[m]).forEach(v),delete this._out[m],delete this._sucs[m],--this._nodeCount}return this}setParent(m,h){if(!this._isCompound)throw new Error("Cannot set parent in a non-compound graph");if(h===void 0)h=r;else{h+="";for(var v=h;v!==void 0;v=this.parent(v))if(v===m)throw new Error("Setting "+h+" as parent of "+m+" would create a cycle");this.setNode(h)}return this.setNode(m),this._removeFromParentsChildList(m),this._parent[m]=h,this._children[h][m]=!0,this}_removeFromParentsChildList(m){delete this._children[this._parent[m]][m]}parent(m){if(this._isCompound){var h=this._parent[m];if(h!==r)return h}}children(m=r){if(this._isCompound){var h=this._children[m];if(h)return Object.keys(h)}else{if(m===r)return this.nodes();if(this.hasNode(m))return[]}}predecessors(m){var h=this._preds[m];if(h)return Object.keys(h)}successors(m){var h=this._sucs[m];if(h)return Object.keys(h)}neighbors(m){var h=this.predecessors(m);if(h){const x=new Set(h);for(var v of this.successors(m))x.add(v);return Array.from(x.values())}}isLeaf(m){var h;return this.isDirected()?h=this.successors(m):h=this.neighbors(m),h.length===0}filterNodes(m){var h=new this.constructor({directed:this._isDirected,multigraph:this._isMultigraph,compound:this._isCompound});h.setGraph(this.graph());var v=this;Object.entries(this._nodes).forEach(function([C,_]){m(C)&&h.setNode(C,_)}),Object.values(this._edgeObjs).forEach(function(C){h.hasNode(C.v)&&h.hasNode(C.w)&&h.setEdge(C,v.edge(C))});var x={};function w(C){var _=v.parent(C);return _===void 0||h.hasNode(_)?(x[C]=_,_):_ in x?x[_]:w(_)}return this._isCompound&&h.nodes().forEach(C=>h.setParent(C,w(C))),h}setDefaultEdgeLabel(m){return this._defaultEdgeLabelFn=m,typeof m!="function"&&(this._defaultEdgeLabelFn=()=>m),this}edgeCount(){return this._edgeCount}edges(){return Object.values(this._edgeObjs)}setPath(m,h){var v=this,x=arguments;return m.reduce(function(w,C){return x.length>1?v.setEdge(w,C,h):v.setEdge(w,C),C}),this}setEdge(){var m,h,v,x,w=!1,C=arguments[0];typeof C=="object"&&C!==null&&"v"in C?(m=C.v,h=C.w,v=C.name,arguments.length===2&&(x=arguments[1],w=!0)):(m=C,h=arguments[1],v=arguments[3],arguments.length>2&&(x=arguments[2],w=!0)),m=""+m,h=""+h,v!==void 0&&(v=""+v);var _=u(this._isDirected,m,h,v);if(Object.hasOwn(this._edgeLabels,_))return w&&(this._edgeLabels[_]=x),this;if(v!==void 0&&!this._isMultigraph)throw new Error("Cannot set a named edge when isMultigraph = false");this.setNode(m),this.setNode(h),this._edgeLabels[_]=w?x:this._defaultEdgeLabelFn(m,h,v);var k=d(this._isDirected,m,h,v);return m=k.v,h=k.w,Object.freeze(k),this._edgeObjs[_]=k,a(this._preds[h],m),a(this._sucs[m],h),this._in[h][_]=k,this._out[m][_]=k,this._edgeCount++,this}edge(m,h,v){var x=arguments.length===1?f(this._isDirected,arguments[0]):u(this._isDirected,m,h,v);return this._edgeLabels[x]}edgeAsObj(){const m=this.edge(...arguments);return typeof m!="object"?{label:m}:m}hasEdge(m,h,v){var x=arguments.length===1?f(this._isDirected,arguments[0]):u(this._isDirected,m,h,v);return Object.hasOwn(this._edgeLabels,x)}removeEdge(m,h,v){var x=arguments.length===1?f(this._isDirected,arguments[0]):u(this._isDirected,m,h,v),w=this._edgeObjs[x];return w&&(m=w.v,h=w.w,delete this._edgeLabels[x],delete this._edgeObjs[x],c(this._preds[h],m),c(this._sucs[m],h),delete this._in[h][x],delete this._out[m][x],this._edgeCount--),this}inEdges(m,h){var v=this._in[m];if(v){var x=Object.values(v);return h?x.filter(w=>w.v===h):x}}outEdges(m,h){var v=this._out[m];if(v){var x=Object.values(v);return h?x.filter(w=>w.w===h):x}}nodeEdges(m,h){var v=this.inEdges(m,h);if(v)return v.concat(this.outEdges(m,h))}}function a(g,m){g[m]?g[m]++:g[m]=1}function c(g,m){--g[m]||delete g[m]}function u(g,m,h,v){var x=""+m,w=""+h;if(!g&&x>w){var C=x;x=w,w=C}return x+o+w+o+(v===void 0?n:v)}function d(g,m,h,v){var x=""+m,w=""+h;if(!g&&x>w){var C=x;x=w,w=C}var _={v:x,w};return v&&(_.name=v),_}function f(g,m){return u(g,m.v,m.w,m.name)}return Ru=l,Ru}var Iu,qp;function V3(){return qp||(qp=1,Iu="2.2.4"),Iu}var Du,Yp;function W3(){return Yp||(Yp=1,Du={Graph:ad(),version:V3()}),Du}var Fu,Xp;function U3(){if(Xp)return Fu;Xp=1;var n=ad();Fu={write:r,read:a};function r(c){var u={options:{directed:c.isDirected(),multigraph:c.isMultigraph(),compound:c.isCompound()},nodes:o(c),edges:l(c)};return c.graph()!==void 0&&(u.value=structuredClone(c.graph())),u}function o(c){return c.nodes().map(function(u){var d=c.node(u),f=c.parent(u),g={v:u};return d!==void 0&&(g.value=d),f!==void 0&&(g.parent=f),g})}function l(c){return c.edges().map(function(u){var d=c.edge(u),f={v:u.v,w:u.w};return u.name!==void 0&&(f.name=u.name),d!==void 0&&(f.value=d),f})}function a(c){var u=new n(c.options).setGraph(c.value);return c.nodes.forEach(function(d){u.setNode(d.v,d.value),d.parent&&u.setParent(d.v,d.parent)}),c.edges.forEach(function(d){u.setEdge({v:d.v,w:d.w,name:d.name},d.value)}),u}return Fu}var ju,Kp;function Q3(){if(Kp)return ju;Kp=1,ju=n;function n(r){var o={},l=[],a;function c(u){Object.hasOwn(o,u)||(o[u]=!0,a.push(u),r.successors(u).forEach(c),r.predecessors(u).forEach(c))}return r.nodes().forEach(function(u){a=[],c(u),a.length&&l.push(a)}),l}return ju}var zu,Zp;function Lg(){if(Zp)return zu;Zp=1;class n{constructor(){Ue(this,"_arr",[]);Ue(this,"_keyIndices",{})}size(){return this._arr.length}keys(){return this._arr.map(function(o){return o.key})}has(o){return Object.hasOwn(this._keyIndices,o)}priority(o){var l=this._keyIndices[o];if(l!==void 0)return this._arr[l].priority}min(){if(this.size()===0)throw new Error("Queue underflow");return this._arr[0].key}add(o,l){var a=this._keyIndices;if(o=String(o),!Object.hasOwn(a,o)){var c=this._arr,u=c.length;return a[o]=u,c.push({key:o,priority:l}),this._decrease(u),!0}return!1}removeMin(){this._swap(0,this._arr.length-1);var o=this._arr.pop();return delete this._keyIndices[o.key],this._heapify(0),o.key}decrease(o,l){var a=this._keyIndices[o];if(l>this._arr[a].priority)throw new Error("New priority is greater than current priority. Key: "+o+" Old: "+this._arr[a].priority+" New: "+l);this._arr[a].priority=l,this._decrease(a)}_heapify(o){var l=this._arr,a=2*o,c=a+1,u=o;a<l.length&&(u=l[a].priority<l[u].priority?a:u,c<l.length&&(u=l[c].priority<l[u].priority?c:u),u!==o&&(this._swap(o,u),this._heapify(u)))}_decrease(o){for(var l=this._arr,a=l[o].priority,c;o!==0&&(c=o>>1,!(l[c].priority<a));)this._swap(o,c),o=c}_swap(o,l){var a=this._arr,c=this._keyIndices,u=a[o],d=a[l];a[o]=d,a[l]=u,c[d.key]=o,c[u.key]=l}}return zu=n,zu}var Ou,Jp;function Ag(){if(Jp)return Ou;Jp=1;var n=Lg();Ou=o;var r=()=>1;function o(a,c,u,d){return l(a,String(c),u||r,d||function(f){return a.outEdges(f)})}function l(a,c,u,d){var f={},g=new n,m,h,v=function(x){var w=x.v!==m?x.v:x.w,C=f[w],_=u(x),k=h.distance+_;if(_<0)throw new Error("dijkstra does not allow negative edge weights. Bad edge: "+x+" Weight: "+_);k<C.distance&&(C.distance=k,C.predecessor=m,g.decrease(w,k))};for(a.nodes().forEach(function(x){var w=x===c?0:Number.POSITIVE_INFINITY;f[x]={distance:w},g.add(x,w)});g.size()>0&&(m=g.removeMin(),h=f[m],h.distance!==Number.POSITIVE_INFINITY);)d(m).forEach(v);return f}return Ou}var Hu,em;function G3(){if(em)return Hu;em=1;var n=Ag();Hu=r;function r(o,l,a){return o.nodes().reduce(function(c,u){return c[u]=n(o,u,l,a),c},{})}return Hu}var Bu,nm;function Rg(){if(nm)return Bu;nm=1,Bu=n;function n(r){var o=0,l=[],a={},c=[];function u(d){var f=a[d]={onStack:!0,lowlink:o,index:o++};if(l.push(d),r.successors(d).forEach(function(h){Object.hasOwn(a,h)?a[h].onStack&&(f.lowlink=Math.min(f.lowlink,a[h].index)):(u(h),f.lowlink=Math.min(f.lowlink,a[h].lowlink))}),f.lowlink===f.index){var g=[],m;do m=l.pop(),a[m].onStack=!1,g.push(m);while(d!==m);c.push(g)}}return r.nodes().forEach(function(d){Object.hasOwn(a,d)||u(d)}),c}return Bu}var Vu,tm;function q3(){if(tm)return Vu;tm=1;var n=Rg();Vu=r;function r(o){return n(o).filter(function(l){return l.length>1||l.length===1&&o.hasEdge(l[0],l[0])})}return Vu}var Wu,rm;function Y3(){if(rm)return Wu;rm=1,Wu=r;var n=()=>1;function r(l,a,c){return o(l,a||n,c||function(u){return l.outEdges(u)})}function o(l,a,c){var u={},d=l.nodes();return d.forEach(function(f){u[f]={},u[f][f]={distance:0},d.forEach(function(g){f!==g&&(u[f][g]={distance:Number.POSITIVE_INFINITY})}),c(f).forEach(function(g){var m=g.v===f?g.w:g.v,h=a(g);u[f][m]={distance:h,predecessor:f}})}),d.forEach(function(f){var g=u[f];d.forEach(function(m){var h=u[m];d.forEach(function(v){var x=h[f],w=g[v],C=h[v],_=x.distance+w.distance;_<C.distance&&(C.distance=_,C.predecessor=w.predecessor)})})}),u}return Wu}var Uu,im;function Ig(){if(im)return Uu;im=1;function n(o){var l={},a={},c=[];function u(d){if(Object.hasOwn(a,d))throw new r;Object.hasOwn(l,d)||(a[d]=!0,l[d]=!0,o.predecessors(d).forEach(u),delete a[d],c.push(d))}if(o.sinks().forEach(u),Object.keys(l).length!==o.nodeCount())throw new r;return c}class r extends Error{constructor(){super(...arguments)}}return Uu=n,n.CycleException=r,Uu}var Qu,om;function X3(){if(om)return Qu;om=1;var n=Ig();Qu=r;function r(o){try{n(o)}catch(l){if(l instanceof n.CycleException)return!1;throw l}return!0}return Qu}var Gu,lm;function Dg(){if(lm)return Gu;lm=1,Gu=n;function n(a,c,u){Array.isArray(c)||(c=[c]);var d=a.isDirected()?h=>a.successors(h):h=>a.neighbors(h),f=u==="post"?r:o,g=[],m={};return c.forEach(h=>{if(!a.hasNode(h))throw new Error("Graph does not have node: "+h);f(h,d,m,g)}),g}function r(a,c,u,d){for(var f=[[a,!1]];f.length>0;){var g=f.pop();g[1]?d.push(g[0]):Object.hasOwn(u,g[0])||(u[g[0]]=!0,f.push([g[0],!0]),l(c(g[0]),m=>f.push([m,!1])))}}function o(a,c,u,d){for(var f=[a];f.length>0;){var g=f.pop();Object.hasOwn(u,g)||(u[g]=!0,d.push(g),l(c(g),m=>f.push(m)))}}function l(a,c){for(var u=a.length;u--;)c(a[u],u,a);return a}return Gu}var qu,am;function K3(){if(am)return qu;am=1;var n=Dg();qu=r;function r(o,l){return n(o,l,"post")}return qu}var Yu,sm;function Z3(){if(sm)return Yu;sm=1;var n=Dg();Yu=r;function r(o,l){return n(o,l,"pre")}return Yu}var Xu,um;function J3(){if(um)return Xu;um=1;var n=ad(),r=Lg();Xu=o;function o(l,a){var c=new n,u={},d=new r,f;function g(h){var v=h.v===f?h.w:h.v,x=d.priority(v);if(x!==void 0){var w=a(h);w<x&&(u[v]=f,d.decrease(v,w))}}if(l.nodeCount()===0)return c;l.nodes().forEach(function(h){d.add(h,Number.POSITIVE_INFINITY),c.setNode(h)}),d.decrease(l.nodes()[0],0);for(var m=!1;d.size()>0;){if(f=d.removeMin(),Object.hasOwn(u,f))c.setEdge(f,u[f]);else{if(m)throw new Error("Input graph is not connected: "+l);m=!0}l.nodeEdges(f).forEach(g)}return c}return Xu}var Ku,cm;function ek(){return cm||(cm=1,Ku={components:Q3(),dijkstra:Ag(),dijkstraAll:G3(),findCycles:q3(),floydWarshall:Y3(),isAcyclic:X3(),postorder:K3(),preorder:Z3(),prim:J3(),tarjan:Rg(),topsort:Ig()}),Ku}var Zu,dm;function qn(){if(dm)return Zu;dm=1;var n=W3();return Zu={Graph:n.Graph,json:U3(),alg:ek(),version:n.version},Zu}var Ju,fm;function nk(){if(fm)return Ju;fm=1;class n{constructor(){let a={};a._next=a._prev=a,this._sentinel=a}dequeue(){let a=this._sentinel,c=a._prev;if(c!==a)return r(c),c}enqueue(a){let c=this._sentinel;a._prev&&a._next&&r(a),a._next=c._next,c._next._prev=a,c._next=a,a._prev=c}toString(){let a=[],c=this._sentinel,u=c._prev;for(;u!==c;)a.push(JSON.stringify(u,o)),u=u._prev;return"["+a.join(", ")+"]"}}function r(l){l._prev._next=l._next,l._next._prev=l._prev,delete l._next,delete l._prev}function o(l,a){if(l!=="_next"&&l!=="_prev")return a}return Ju=n,Ju}var ec,hm;function tk(){if(hm)return ec;hm=1;let n=qn().Graph,r=nk();ec=l;let o=()=>1;function l(g,m){if(g.nodeCount()<=1)return[];let h=u(g,m||o);return a(h.graph,h.buckets,h.zeroIdx).flatMap(x=>g.outEdges(x.v,x.w))}function a(g,m,h){let v=[],x=m[m.length-1],w=m[0],C;for(;g.nodeCount();){for(;C=w.dequeue();)c(g,m,h,C);for(;C=x.dequeue();)c(g,m,h,C);if(g.nodeCount()){for(let _=m.length-2;_>0;--_)if(C=m[_].dequeue(),C){v=v.concat(c(g,m,h,C,!0));break}}}return v}function c(g,m,h,v,x){let w=x?[]:void 0;return g.inEdges(v.v).forEach(C=>{let _=g.edge(C),k=g.node(C.v);x&&w.push({v:C.v,w:C.w}),k.out-=_,d(m,h,k)}),g.outEdges(v.v).forEach(C=>{let _=g.edge(C),k=C.w,$=g.node(k);$.in-=_,d(m,h,$)}),g.removeNode(v.v),w}function u(g,m){let h=new n,v=0,x=0;g.nodes().forEach(_=>{h.setNode(_,{v:_,in:0,out:0})}),g.edges().forEach(_=>{let k=h.edge(_.v,_.w)||0,$=m(_),S=k+$;h.setEdge(_.v,_.w,S),x=Math.max(x,h.node(_.v).out+=$),v=Math.max(v,h.node(_.w).in+=$)});let w=f(x+v+3).map(()=>new r),C=v+1;return h.nodes().forEach(_=>{d(w,C,h.node(_))}),{graph:h,buckets:w,zeroIdx:C}}function d(g,m,h){h.out?h.in?g[h.out-h.in+m].enqueue(h):g[g.length-1].enqueue(h):g[0].enqueue(h)}function f(g){const m=[];for(let h=0;h<g;h++)m.push(h);return m}return ec}var nc,pm;function Qe(){if(pm)return nc;pm=1;let n=qn().Graph;nc={addBorderNode:m,addDummyNode:r,applyWithChunking:x,asNonCompoundGraph:l,buildLayerMatrix:d,intersectRect:u,mapValues:N,maxRank:w,normalizeRanks:f,notime:k,partition:C,pick:R,predecessorWeights:c,range:b,removeEmptyRanks:g,simplify:o,successorWeights:a,time:_,uniqueId:S,zipObject:F};function r(P,A,O,L){for(var D=L;P.hasNode(D);)D=S(L);return O.dummy=A,P.setNode(D,O),D}function o(P){let A=new n().setGraph(P.graph());return P.nodes().forEach(O=>A.setNode(O,P.node(O))),P.edges().forEach(O=>{let L=A.edge(O.v,O.w)||{weight:0,minlen:1},D=P.edge(O);A.setEdge(O.v,O.w,{weight:L.weight+D.weight,minlen:Math.max(L.minlen,D.minlen)})}),A}function l(P){let A=new n({multigraph:P.isMultigraph()}).setGraph(P.graph());return P.nodes().forEach(O=>{P.children(O).length||A.setNode(O,P.node(O))}),P.edges().forEach(O=>{A.setEdge(O,P.edge(O))}),A}function a(P){let A=P.nodes().map(O=>{let L={};return P.outEdges(O).forEach(D=>{L[D.w]=(L[D.w]||0)+P.edge(D).weight}),L});return F(P.nodes(),A)}function c(P){let A=P.nodes().map(O=>{let L={};return P.inEdges(O).forEach(D=>{L[D.v]=(L[D.v]||0)+P.edge(D).weight}),L});return F(P.nodes(),A)}function u(P,A){let O=P.x,L=P.y,D=A.x-O,J=A.y-L,T=P.width/2,q=P.height/2;if(!D&&!J)throw new Error("Not possible to find intersection inside of the rectangle");let Q,Y;return Math.abs(J)*T>Math.abs(D)*q?(J<0&&(q=-q),Q=q*D/J,Y=q):(D<0&&(T=-T),Q=T,Y=T*J/D),{x:O+Q,y:L+Y}}function d(P){let A=b(w(P)+1).map(()=>[]);return P.nodes().forEach(O=>{let L=P.node(O),D=L.rank;D!==void 0&&(A[D][L.order]=O)}),A}function f(P){let A=P.nodes().map(L=>{let D=P.node(L).rank;return D===void 0?Number.MAX_VALUE:D}),O=x(Math.min,A);P.nodes().forEach(L=>{let D=P.node(L);Object.hasOwn(D,"rank")&&(D.rank-=O)})}function g(P){let A=P.nodes().map(T=>P.node(T).rank),O=x(Math.min,A),L=[];P.nodes().forEach(T=>{let q=P.node(T).rank-O;L[q]||(L[q]=[]),L[q].push(T)});let D=0,J=P.graph().nodeRankFactor;Array.from(L).forEach((T,q)=>{T===void 0&&q%J!==0?--D:T!==void 0&&D&&T.forEach(Q=>P.node(Q).rank+=D)})}function m(P,A,O,L){let D={width:0,height:0};return arguments.length>=4&&(D.rank=O,D.order=L),r(P,"border",D,A)}function h(P,A=v){const O=[];for(let L=0;L<P.length;L+=A){const D=P.slice(L,L+A);O.push(D)}return O}const v=65535;function x(P,A){if(A.length>v){const O=h(A);return P.apply(null,O.map(L=>P.apply(null,L)))}else return P.apply(null,A)}function w(P){const O=P.nodes().map(L=>{let D=P.node(L).rank;return D===void 0?Number.MIN_VALUE:D});return x(Math.max,O)}function C(P,A){let O={lhs:[],rhs:[]};return P.forEach(L=>{A(L)?O.lhs.push(L):O.rhs.push(L)}),O}function _(P,A){let O=Date.now();try{return A()}finally{console.log(P+" time: "+(Date.now()-O)+"ms")}}function k(P,A){return A()}let $=0;function S(P){var A=++$;return P+(""+A)}function b(P,A,O=1){A==null&&(A=P,P=0);let L=J=>J<A;O<0&&(L=J=>A<J);const D=[];for(let J=P;L(J);J+=O)D.push(J);return D}function R(P,A){const O={};for(const L of A)P[L]!==void 0&&(O[L]=P[L]);return O}function N(P,A){let O=A;return typeof A=="string"&&(O=L=>L[A]),Object.entries(P).reduce((L,[D,J])=>(L[D]=O(J,D),L),{})}function F(P,A){return P.reduce((O,L,D)=>(O[L]=A[D],O),{})}return nc}var tc,mm;function rk(){if(mm)return tc;mm=1;let n=tk(),r=Qe().uniqueId;tc={run:o,undo:a};function o(c){(c.graph().acyclicer==="greedy"?n(c,d(c)):l(c)).forEach(f=>{let g=c.edge(f);c.removeEdge(f),g.forwardName=f.name,g.reversed=!0,c.setEdge(f.w,f.v,g,r("rev"))});function d(f){return g=>f.edge(g).weight}}function l(c){let u=[],d={},f={};function g(m){Object.hasOwn(f,m)||(f[m]=!0,d[m]=!0,c.outEdges(m).forEach(h=>{Object.hasOwn(d,h.w)?u.push(h):g(h.w)}),delete d[m])}return c.nodes().forEach(g),u}function a(c){c.edges().forEach(u=>{let d=c.edge(u);if(d.reversed){c.removeEdge(u);let f=d.forwardName;delete d.reversed,delete d.forwardName,c.setEdge(u.w,u.v,d,f)}})}return tc}var rc,gm;function ik(){if(gm)return rc;gm=1;let n=Qe();rc={run:r,undo:l};function r(a){a.graph().dummyChains=[],a.edges().forEach(c=>o(a,c))}function o(a,c){let u=c.v,d=a.node(u).rank,f=c.w,g=a.node(f).rank,m=c.name,h=a.edge(c),v=h.labelRank;if(g===d+1)return;a.removeEdge(c);let x,w,C;for(C=0,++d;d<g;++C,++d)h.points=[],w={width:0,height:0,edgeLabel:h,edgeObj:c,rank:d},x=n.addDummyNode(a,"edge",w,"_d"),d===v&&(w.width=h.width,w.height=h.height,w.dummy="edge-label",w.labelpos=h.labelpos),a.setEdge(u,x,{weight:h.weight},m),C===0&&a.graph().dummyChains.push(x),u=x;a.setEdge(u,f,{weight:h.weight},m)}function l(a){a.graph().dummyChains.forEach(c=>{let u=a.node(c),d=u.edgeLabel,f;for(a.setEdge(u.edgeObj,d);u.dummy;)f=a.successors(c)[0],a.removeNode(c),d.points.push({x:u.x,y:u.y}),u.dummy==="edge-label"&&(d.x=u.x,d.y=u.y,d.width=u.width,d.height=u.height),c=f,u=a.node(c)})}return rc}var ic,ym;function ca(){if(ym)return ic;ym=1;const{applyWithChunking:n}=Qe();ic={longestPath:r,slack:o};function r(l){var a={};function c(u){var d=l.node(u);if(Object.hasOwn(a,u))return d.rank;a[u]=!0;let f=l.outEdges(u).map(m=>m==null?Number.POSITIVE_INFINITY:c(m.w)-l.edge(m).minlen);var g=n(Math.min,f);return g===Number.POSITIVE_INFINITY&&(g=0),d.rank=g}l.sources().forEach(c)}function o(l,a){return l.node(a.w).rank-l.node(a.v).rank-l.edge(a).minlen}return ic}var oc,vm;function Fg(){if(vm)return oc;vm=1;var n=qn().Graph,r=ca().slack;oc=o;function o(u){var d=new n({directed:!1}),f=u.nodes()[0],g=u.nodeCount();d.setNode(f,{});for(var m,h;l(d,u)<g;)m=a(d,u),h=d.hasNode(m.v)?r(u,m):-r(u,m),c(d,u,h);return d}function l(u,d){function f(g){d.nodeEdges(g).forEach(m=>{var h=m.v,v=g===h?m.w:h;!u.hasNode(v)&&!r(d,m)&&(u.setNode(v,{}),u.setEdge(g,v,{}),f(v))})}return u.nodes().forEach(f),u.nodeCount()}function a(u,d){return d.edges().reduce((g,m)=>{let h=Number.POSITIVE_INFINITY;return u.hasNode(m.v)!==u.hasNode(m.w)&&(h=r(d,m)),h<g[0]?[h,m]:g},[Number.POSITIVE_INFINITY,null])[1]}function c(u,d,f){u.nodes().forEach(g=>d.node(g).rank+=f)}return oc}var lc,xm;function ok(){if(xm)return lc;xm=1;var n=Fg(),r=ca().slack,o=ca().longestPath,l=qn().alg.preorder,a=qn().alg.postorder,c=Qe().simplify;lc=u,u.initLowLimValues=m,u.initCutValues=d,u.calcCutValue=g,u.leaveEdge=v,u.enterEdge=x,u.exchangeEdges=w;function u($){$=c($),o($);var S=n($);m(S),d(S,$);for(var b,R;b=v(S);)R=x(S,$,b),w(S,$,b,R)}function d($,S){var b=a($,$.nodes());b=b.slice(0,b.length-1),b.forEach(R=>f($,S,R))}function f($,S,b){var R=$.node(b),N=R.parent;$.edge(b,N).cutvalue=g($,S,b)}function g($,S,b){var R=$.node(b),N=R.parent,F=!0,P=S.edge(b,N),A=0;return P||(F=!1,P=S.edge(N,b)),A=P.weight,S.nodeEdges(b).forEach(O=>{var L=O.v===b,D=L?O.w:O.v;if(D!==N){var J=L===F,T=S.edge(O).weight;if(A+=J?T:-T,_($,b,D)){var q=$.edge(b,D).cutvalue;A+=J?-q:q}}}),A}function m($,S){arguments.length<2&&(S=$.nodes()[0]),h($,{},1,S)}function h($,S,b,R,N){var F=b,P=$.node(R);return S[R]=!0,$.neighbors(R).forEach(A=>{Object.hasOwn(S,A)||(b=h($,S,b,A,R))}),P.low=F,P.lim=b++,N?P.parent=N:delete P.parent,b}function v($){return $.edges().find(S=>$.edge(S).cutvalue<0)}function x($,S,b){var R=b.v,N=b.w;S.hasEdge(R,N)||(R=b.w,N=b.v);var F=$.node(R),P=$.node(N),A=F,O=!1;F.lim>P.lim&&(A=P,O=!0);var L=S.edges().filter(D=>O===k($,$.node(D.v),A)&&O!==k($,$.node(D.w),A));return L.reduce((D,J)=>r(S,J)<r(S,D)?J:D)}function w($,S,b,R){var N=b.v,F=b.w;$.removeEdge(N,F),$.setEdge(R.v,R.w,{}),m($),d($,S),C($,S)}function C($,S){var b=$.nodes().find(N=>!S.node(N).parent),R=l($,b);R=R.slice(1),R.forEach(N=>{var F=$.node(N).parent,P=S.edge(N,F),A=!1;P||(P=S.edge(F,N),A=!0),S.node(N).rank=S.node(F).rank+(A?P.minlen:-P.minlen)})}function _($,S,b){return $.hasEdge(S,b)}function k($,S,b){return b.low<=S.lim&&S.lim<=b.lim}return lc}var ac,wm;function lk(){if(wm)return ac;wm=1;var n=ca(),r=n.longestPath,o=Fg(),l=ok();ac=a;function a(f){var g=f.graph().ranker;if(g instanceof Function)return g(f);switch(f.graph().ranker){case"network-simplex":d(f);break;case"tight-tree":u(f);break;case"longest-path":c(f);break;case"none":break;default:d(f)}}var c=r;function u(f){r(f),o(f)}function d(f){l(f)}return ac}var sc,_m;function ak(){if(_m)return sc;_m=1,sc=n;function n(l){let a=o(l);l.graph().dummyChains.forEach(c=>{let u=l.node(c),d=u.edgeObj,f=r(l,a,d.v,d.w),g=f.path,m=f.lca,h=0,v=g[h],x=!0;for(;c!==d.w;){if(u=l.node(c),x){for(;(v=g[h])!==m&&l.node(v).maxRank<u.rank;)h++;v===m&&(x=!1)}if(!x){for(;h<g.length-1&&l.node(v=g[h+1]).minRank<=u.rank;)h++;v=g[h]}l.setParent(c,v),c=l.successors(c)[0]}})}function r(l,a,c,u){let d=[],f=[],g=Math.min(a[c].low,a[u].low),m=Math.max(a[c].lim,a[u].lim),h,v;h=c;do h=l.parent(h),d.push(h);while(h&&(a[h].low>g||m>a[h].lim));for(v=h,h=u;(h=l.parent(h))!==v;)f.push(h);return{path:d.concat(f.reverse()),lca:v}}function o(l){let a={},c=0;function u(d){let f=c;l.children(d).forEach(u),a[d]={low:f,lim:c++}}return l.children().forEach(u),a}return sc}var uc,Sm;function sk(){if(Sm)return uc;Sm=1;let n=Qe();uc={run:r,cleanup:c};function r(u){let d=n.addDummyNode(u,"root",{},"_root"),f=l(u),g=Object.values(f),m=n.applyWithChunking(Math.max,g)-1,h=2*m+1;u.graph().nestingRoot=d,u.edges().forEach(x=>u.edge(x).minlen*=h);let v=a(u)+1;u.children().forEach(x=>o(u,d,h,v,m,f,x)),u.graph().nodeRankFactor=h}function o(u,d,f,g,m,h,v){let x=u.children(v);if(!x.length){v!==d&&u.setEdge(d,v,{weight:0,minlen:f});return}let w=n.addBorderNode(u,"_bt"),C=n.addBorderNode(u,"_bb"),_=u.node(v);u.setParent(w,v),_.borderTop=w,u.setParent(C,v),_.borderBottom=C,x.forEach(k=>{o(u,d,f,g,m,h,k);let $=u.node(k),S=$.borderTop?$.borderTop:k,b=$.borderBottom?$.borderBottom:k,R=$.borderTop?g:2*g,N=S!==b?1:m-h[v]+1;u.setEdge(w,S,{weight:R,minlen:N,nestingEdge:!0}),u.setEdge(b,C,{weight:R,minlen:N,nestingEdge:!0})}),u.parent(v)||u.setEdge(d,w,{weight:0,minlen:m+h[v]})}function l(u){var d={};function f(g,m){var h=u.children(g);h&&h.length&&h.forEach(v=>f(v,m+1)),d[g]=m}return u.children().forEach(g=>f(g,1)),d}function a(u){return u.edges().reduce((d,f)=>d+u.edge(f).weight,0)}function c(u){var d=u.graph();u.removeNode(d.nestingRoot),delete d.nestingRoot,u.edges().forEach(f=>{var g=u.edge(f);g.nestingEdge&&u.removeEdge(f)})}return uc}var cc,km;function uk(){if(km)return cc;km=1;let n=Qe();cc=r;function r(l){function a(c){let u=l.children(c),d=l.node(c);if(u.length&&u.forEach(a),Object.hasOwn(d,"minRank")){d.borderLeft=[],d.borderRight=[];for(let f=d.minRank,g=d.maxRank+1;f<g;++f)o(l,"borderLeft","_bl",c,d,f),o(l,"borderRight","_br",c,d,f)}}l.children().forEach(a)}function o(l,a,c,u,d,f){let g={width:0,height:0,rank:f,borderType:a},m=d[a][f-1],h=n.addDummyNode(l,"border",g,c);d[a][f]=h,l.setParent(h,u),m&&l.setEdge(m,h,{weight:1})}return cc}var dc,Em;function ck(){if(Em)return dc;Em=1,dc={adjust:n,undo:r};function n(f){let g=f.graph().rankdir.toLowerCase();(g==="lr"||g==="rl")&&o(f)}function r(f){let g=f.graph().rankdir.toLowerCase();(g==="bt"||g==="rl")&&a(f),(g==="lr"||g==="rl")&&(u(f),o(f))}function o(f){f.nodes().forEach(g=>l(f.node(g))),f.edges().forEach(g=>l(f.edge(g)))}function l(f){let g=f.width;f.width=f.height,f.height=g}function a(f){f.nodes().forEach(g=>c(f.node(g))),f.edges().forEach(g=>{let m=f.edge(g);m.points.forEach(c),Object.hasOwn(m,"y")&&c(m)})}function c(f){f.y=-f.y}function u(f){f.nodes().forEach(g=>d(f.node(g))),f.edges().forEach(g=>{let m=f.edge(g);m.points.forEach(d),Object.hasOwn(m,"x")&&d(m)})}function d(f){let g=f.x;f.x=f.y,f.y=g}return dc}var fc,Cm;function dk(){if(Cm)return fc;Cm=1;let n=Qe();fc=r;function r(o){let l={},a=o.nodes().filter(m=>!o.children(m).length),c=a.map(m=>o.node(m).rank),u=n.applyWithChunking(Math.max,c),d=n.range(u+1).map(()=>[]);function f(m){if(l[m])return;l[m]=!0;let h=o.node(m);d[h.rank].push(m),o.successors(m).forEach(f)}return a.sort((m,h)=>o.node(m).rank-o.node(h).rank).forEach(f),d}return fc}var hc,bm;function fk(){if(bm)return hc;bm=1;let n=Qe().zipObject;hc=r;function r(l,a){let c=0;for(let u=1;u<a.length;++u)c+=o(l,a[u-1],a[u]);return c}function o(l,a,c){let u=n(c,c.map((v,x)=>x)),d=a.flatMap(v=>l.outEdges(v).map(x=>({pos:u[x.w],weight:l.edge(x).weight})).sort((x,w)=>x.pos-w.pos)),f=1;for(;f<c.length;)f<<=1;let g=2*f-1;f-=1;let m=new Array(g).fill(0),h=0;return d.forEach(v=>{let x=v.pos+f;m[x]+=v.weight;let w=0;for(;x>0;)x%2&&(w+=m[x+1]),x=x-1>>1,m[x]+=v.weight;h+=v.weight*w}),h}return hc}var pc,$m;function hk(){if($m)return pc;$m=1,pc=n;function n(r,o=[]){return o.map(l=>{let a=r.inEdges(l);if(a.length){let c=a.reduce((u,d)=>{let f=r.edge(d),g=r.node(d.v);return{sum:u.sum+f.weight*g.order,weight:u.weight+f.weight}},{sum:0,weight:0});return{v:l,barycenter:c.sum/c.weight,weight:c.weight}}else return{v:l}})}return pc}var mc,Nm;function pk(){if(Nm)return mc;Nm=1;let n=Qe();mc=r;function r(a,c){let u={};a.forEach((f,g)=>{let m=u[f.v]={indegree:0,in:[],out:[],vs:[f.v],i:g};f.barycenter!==void 0&&(m.barycenter=f.barycenter,m.weight=f.weight)}),c.edges().forEach(f=>{let g=u[f.v],m=u[f.w];g!==void 0&&m!==void 0&&(m.indegree++,g.out.push(u[f.w]))});let d=Object.values(u).filter(f=>!f.indegree);return o(d)}function o(a){let c=[];function u(f){return g=>{g.merged||(g.barycenter===void 0||f.barycenter===void 0||g.barycenter>=f.barycenter)&&l(f,g)}}function d(f){return g=>{g.in.push(f),--g.indegree===0&&a.push(g)}}for(;a.length;){let f=a.pop();c.push(f),f.in.reverse().forEach(u(f)),f.out.forEach(d(f))}return c.filter(f=>!f.merged).map(f=>n.pick(f,["vs","i","barycenter","weight"]))}function l(a,c){let u=0,d=0;a.weight&&(u+=a.barycenter*a.weight,d+=a.weight),c.weight&&(u+=c.barycenter*c.weight,d+=c.weight),a.vs=c.vs.concat(a.vs),a.barycenter=u/d,a.weight=d,a.i=Math.min(c.i,a.i),c.merged=!0}return mc}var gc,Pm;function mk(){if(Pm)return gc;Pm=1;let n=Qe();gc=r;function r(a,c){let u=n.partition(a,w=>Object.hasOwn(w,"barycenter")),d=u.lhs,f=u.rhs.sort((w,C)=>C.i-w.i),g=[],m=0,h=0,v=0;d.sort(l(!!c)),v=o(g,f,v),d.forEach(w=>{v+=w.vs.length,g.push(w.vs),m+=w.barycenter*w.weight,h+=w.weight,v=o(g,f,v)});let x={vs:g.flat(!0)};return h&&(x.barycenter=m/h,x.weight=h),x}function o(a,c,u){let d;for(;c.length&&(d=c[c.length-1]).i<=u;)c.pop(),a.push(d.vs),u++;return u}function l(a){return(c,u)=>c.barycenter<u.barycenter?-1:c.barycenter>u.barycenter?1:a?u.i-c.i:c.i-u.i}return gc}var yc,Mm;function gk(){if(Mm)return yc;Mm=1;let n=hk(),r=pk(),o=mk();yc=l;function l(u,d,f,g){let m=u.children(d),h=u.node(d),v=h?h.borderLeft:void 0,x=h?h.borderRight:void 0,w={};v&&(m=m.filter($=>$!==v&&$!==x));let C=n(u,m);C.forEach($=>{if(u.children($.v).length){let S=l(u,$.v,f,g);w[$.v]=S,Object.hasOwn(S,"barycenter")&&c($,S)}});let _=r(C,f);a(_,w);let k=o(_,g);if(v&&(k.vs=[v,k.vs,x].flat(!0),u.predecessors(v).length)){let $=u.node(u.predecessors(v)[0]),S=u.node(u.predecessors(x)[0]);Object.hasOwn(k,"barycenter")||(k.barycenter=0,k.weight=0),k.barycenter=(k.barycenter*k.weight+$.order+S.order)/(k.weight+2),k.weight+=2}return k}function a(u,d){u.forEach(f=>{f.vs=f.vs.flatMap(g=>d[g]?d[g].vs:g)})}function c(u,d){u.barycenter!==void 0?(u.barycenter=(u.barycenter*u.weight+d.barycenter*d.weight)/(u.weight+d.weight),u.weight+=d.weight):(u.barycenter=d.barycenter,u.weight=d.weight)}return yc}var vc,Tm;function yk(){if(Tm)return vc;Tm=1;let n=qn().Graph,r=Qe();vc=o;function o(a,c,u,d){d||(d=a.nodes());let f=l(a),g=new n({compound:!0}).setGraph({root:f}).setDefaultNodeLabel(m=>a.node(m));return d.forEach(m=>{let h=a.node(m),v=a.parent(m);(h.rank===c||h.minRank<=c&&c<=h.maxRank)&&(g.setNode(m),g.setParent(m,v||f),a[u](m).forEach(x=>{let w=x.v===m?x.w:x.v,C=g.edge(w,m),_=C!==void 0?C.weight:0;g.setEdge(w,m,{weight:a.edge(x).weight+_})}),Object.hasOwn(h,"minRank")&&g.setNode(m,{borderLeft:h.borderLeft[c],borderRight:h.borderRight[c]}))}),g}function l(a){for(var c;a.hasNode(c=r.uniqueId("_root")););return c}return vc}var xc,Lm;function vk(){if(Lm)return xc;Lm=1,xc=n;function n(r,o,l){let a={},c;l.forEach(u=>{let d=r.parent(u),f,g;for(;d;){if(f=r.parent(d),f?(g=a[f],a[f]=d):(g=c,c=d),g&&g!==d){o.setEdge(g,d);return}d=f}})}return xc}var wc,Am;function xk(){if(Am)return wc;Am=1;let n=dk(),r=fk(),o=gk(),l=yk(),a=vk(),c=qn().Graph,u=Qe();wc=d;function d(h,v){if(v&&typeof v.customOrder=="function"){v.customOrder(h,d);return}let x=u.maxRank(h),w=f(h,u.range(1,x+1),"inEdges"),C=f(h,u.range(x-1,-1,-1),"outEdges"),_=n(h);if(m(h,_),v&&v.disableOptimalOrderHeuristic)return;let k=Number.POSITIVE_INFINITY,$;for(let S=0,b=0;b<4;++S,++b){g(S%2?w:C,S%4>=2),_=u.buildLayerMatrix(h);let R=r(h,_);R<k&&(b=0,$=Object.assign({},_),k=R)}m(h,$)}function f(h,v,x){const w=new Map,C=(_,k)=>{w.has(_)||w.set(_,[]),w.get(_).push(k)};for(const _ of h.nodes()){const k=h.node(_);if(typeof k.rank=="number"&&C(k.rank,_),typeof k.minRank=="number"&&typeof k.maxRank=="number")for(let $=k.minRank;$<=k.maxRank;$++)$!==k.rank&&C($,_)}return v.map(function(_){return l(h,_,x,w.get(_)||[])})}function g(h,v){let x=new c;h.forEach(function(w){let C=w.graph().root,_=o(w,C,x,v);_.vs.forEach((k,$)=>w.node(k).order=$),a(w,x,_.vs)})}function m(h,v){Object.values(v).forEach(x=>x.forEach((w,C)=>h.node(w).order=C))}return wc}var _c,Rm;function wk(){if(Rm)return _c;Rm=1;let n=qn().Graph,r=Qe();_c={positionX:x,findType1Conflicts:o,findType2Conflicts:l,addConflict:c,hasConflict:u,verticalAlignment:d,horizontalCompaction:f,alignCoordinates:h,findSmallestWidthAlignment:m,balance:v};function o(_,k){let $={};function S(b,R){let N=0,F=0,P=b.length,A=R[R.length-1];return R.forEach((O,L)=>{let D=a(_,O),J=D?_.node(D).order:P;(D||O===A)&&(R.slice(F,L+1).forEach(T=>{_.predecessors(T).forEach(q=>{let Q=_.node(q),Y=Q.order;(Y<N||J<Y)&&!(Q.dummy&&_.node(T).dummy)&&c($,q,T)})}),F=L+1,N=J)}),R}return k.length&&k.reduce(S),$}function l(_,k){let $={};function S(R,N,F,P,A){let O;r.range(N,F).forEach(L=>{O=R[L],_.node(O).dummy&&_.predecessors(O).forEach(D=>{let J=_.node(D);J.dummy&&(J.order<P||J.order>A)&&c($,D,O)})})}function b(R,N){let F=-1,P,A=0;return N.forEach((O,L)=>{if(_.node(O).dummy==="border"){let D=_.predecessors(O);D.length&&(P=_.node(D[0]).order,S(N,A,L,F,P),A=L,F=P)}S(N,A,N.length,P,R.length)}),N}return k.length&&k.reduce(b),$}function a(_,k){if(_.node(k).dummy)return _.predecessors(k).find($=>_.node($).dummy)}function c(_,k,$){if(k>$){let b=k;k=$,$=b}let S=_[k];S||(_[k]=S={}),S[$]=!0}function u(_,k,$){if(k>$){let S=k;k=$,$=S}return!!_[k]&&Object.hasOwn(_[k],$)}function d(_,k,$,S){let b={},R={},N={};return k.forEach(F=>{F.forEach((P,A)=>{b[P]=P,R[P]=P,N[P]=A})}),k.forEach(F=>{let P=-1;F.forEach(A=>{let O=S(A);if(O.length){O=O.sort((D,J)=>N[D]-N[J]);let L=(O.length-1)/2;for(let D=Math.floor(L),J=Math.ceil(L);D<=J;++D){let T=O[D];R[A]===A&&P<N[T]&&!u($,A,T)&&(R[T]=A,R[A]=b[A]=b[T],P=N[T])}}})}),{root:b,align:R}}function f(_,k,$,S,b){let R={},N=g(_,k,$,b),F=b?"borderLeft":"borderRight";function P(L,D){let J=N.nodes(),T=J.pop(),q={};for(;T;)q[T]?L(T):(q[T]=!0,J.push(T),J=J.concat(D(T))),T=J.pop()}function A(L){R[L]=N.inEdges(L).reduce((D,J)=>Math.max(D,R[J.v]+N.edge(J)),0)}function O(L){let D=N.outEdges(L).reduce((T,q)=>Math.min(T,R[q.w]-N.edge(q)),Number.POSITIVE_INFINITY),J=_.node(L);D!==Number.POSITIVE_INFINITY&&J.borderType!==F&&(R[L]=Math.max(R[L],D))}return P(A,N.predecessors.bind(N)),P(O,N.successors.bind(N)),Object.keys(S).forEach(L=>R[L]=R[$[L]]),R}function g(_,k,$,S){let b=new n,R=_.graph(),N=w(R.nodesep,R.edgesep,S);return k.forEach(F=>{let P;F.forEach(A=>{let O=$[A];if(b.setNode(O),P){var L=$[P],D=b.edge(L,O);b.setEdge(L,O,Math.max(N(_,A,P),D||0))}P=A})}),b}function m(_,k){return Object.values(k).reduce(($,S)=>{let b=Number.NEGATIVE_INFINITY,R=Number.POSITIVE_INFINITY;Object.entries(S).forEach(([F,P])=>{let A=C(_,F)/2;b=Math.max(P+A,b),R=Math.min(P-A,R)});const N=b-R;return N<$[0]&&($=[N,S]),$},[Number.POSITIVE_INFINITY,null])[1]}function h(_,k){let $=Object.values(k),S=r.applyWithChunking(Math.min,$),b=r.applyWithChunking(Math.max,$);["u","d"].forEach(R=>{["l","r"].forEach(N=>{let F=R+N,P=_[F];if(P===k)return;let A=Object.values(P),O=S-r.applyWithChunking(Math.min,A);N!=="l"&&(O=b-r.applyWithChunking(Math.max,A)),O&&(_[F]=r.mapValues(P,L=>L+O))})})}function v(_,k){return r.mapValues(_.ul,($,S)=>{if(k)return _[k.toLowerCase()][S];{let b=Object.values(_).map(R=>R[S]).sort((R,N)=>R-N);return(b[1]+b[2])/2}})}function x(_){let k=r.buildLayerMatrix(_),$=Object.assign(o(_,k),l(_,k)),S={},b;["u","d"].forEach(N=>{b=N==="u"?k:Object.values(k).reverse(),["l","r"].forEach(F=>{F==="r"&&(b=b.map(L=>Object.values(L).reverse()));let P=(N==="u"?_.predecessors:_.successors).bind(_),A=d(_,b,$,P),O=f(_,b,A.root,A.align,F==="r");F==="r"&&(O=r.mapValues(O,L=>-L)),S[N+F]=O})});let R=m(_,S);return h(S,R),v(S,_.graph().align)}function w(_,k,$){return(S,b,R)=>{let N=S.node(b),F=S.node(R),P=0,A;if(P+=N.width/2,Object.hasOwn(N,"labelpos"))switch(N.labelpos.toLowerCase()){case"l":A=-N.width/2;break;case"r":A=N.width/2;break}if(A&&(P+=$?A:-A),A=0,P+=(N.dummy?k:_)/2,P+=(F.dummy?k:_)/2,P+=F.width/2,Object.hasOwn(F,"labelpos"))switch(F.labelpos.toLowerCase()){case"l":A=F.width/2;break;case"r":A=-F.width/2;break}return A&&(P+=$?A:-A),A=0,P}}function C(_,k){return _.node(k).width}return _c}var Sc,Im;function _k(){if(Im)return Sc;Im=1;let n=Qe(),r=wk().positionX;Sc=o;function o(a){a=n.asNonCompoundGraph(a),l(a),Object.entries(r(a)).forEach(([c,u])=>a.node(c).x=u)}function l(a){let c=n.buildLayerMatrix(a),u=a.graph().ranksep,d=0;c.forEach(f=>{const g=f.reduce((m,h)=>{const v=a.node(h).height;return m>v?m:v},0);f.forEach(m=>a.node(m).y=d+g/2),d+=g+u})}return Sc}var kc,Dm;function Sk(){if(Dm)return kc;Dm=1;let n=rk(),r=ik(),o=lk(),l=Qe().normalizeRanks,a=ak(),c=Qe().removeEmptyRanks,u=sk(),d=uk(),f=ck(),g=xk(),m=_k(),h=Qe(),v=qn().Graph;kc=x;function x(j,U){let K=U&&U.debugTiming?h.time:h.notime;K("layout",()=>{let ie=K("  buildLayoutGraph",()=>P(j));K("  runLayout",()=>w(ie,K,U)),K("  updateInputGraph",()=>C(j,ie))})}function w(j,U,K){U("    makeSpaceForEdgeLabels",()=>A(j)),U("    removeSelfEdges",()=>W(j)),U("    acyclic",()=>n.run(j)),U("    nestingGraph.run",()=>u.run(j)),U("    rank",()=>o(h.asNonCompoundGraph(j))),U("    injectEdgeLabelProxies",()=>O(j)),U("    removeEmptyRanks",()=>c(j)),U("    nestingGraph.cleanup",()=>u.cleanup(j)),U("    normalizeRanks",()=>l(j)),U("    assignRankMinMax",()=>L(j)),U("    removeEdgeLabelProxies",()=>D(j)),U("    normalize.run",()=>r.run(j)),U("    parentDummyChains",()=>a(j)),U("    addBorderSegments",()=>d(j)),U("    order",()=>g(j,K)),U("    insertSelfEdges",()=>V(j)),U("    adjustCoordinateSystem",()=>f.adjust(j)),U("    position",()=>m(j)),U("    positionSelfEdges",()=>X(j)),U("    removeBorderNodes",()=>Y(j)),U("    normalize.undo",()=>r.undo(j)),U("    fixupEdgeLabelCoords",()=>q(j)),U("    undoCoordinateSystem",()=>f.undo(j)),U("    translateGraph",()=>J(j)),U("    assignNodeIntersects",()=>T(j)),U("    reversePoints",()=>Q(j)),U("    acyclic.undo",()=>n.undo(j))}function C(j,U){j.nodes().forEach(K=>{let ie=j.node(K),le=U.node(K);ie&&(ie.x=le.x,ie.y=le.y,ie.rank=le.rank,U.children(K).length&&(ie.width=le.width,ie.height=le.height))}),j.edges().forEach(K=>{let ie=j.edge(K),le=U.edge(K);ie.points=le.points,Object.hasOwn(le,"x")&&(ie.x=le.x,ie.y=le.y)}),j.graph().width=U.graph().width,j.graph().height=U.graph().height}let _=["nodesep","edgesep","ranksep","marginx","marginy"],k={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},$=["acyclicer","ranker","rankdir","align"],S=["width","height","rank"],b={width:0,height:0},R=["minlen","weight","width","height","labeloffset"],N={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},F=["labelpos"];function P(j){let U=new v({multigraph:!0,compound:!0}),K=z(j.graph());return U.setGraph(Object.assign({},k,M(K,_),h.pick(K,$))),j.nodes().forEach(ie=>{let le=z(j.node(ie));const Z=M(le,S);Object.keys(b).forEach(oe=>{Z[oe]===void 0&&(Z[oe]=b[oe])}),U.setNode(ie,Z),U.setParent(ie,j.parent(ie))}),j.edges().forEach(ie=>{let le=z(j.edge(ie));U.setEdge(ie,Object.assign({},N,M(le,R),h.pick(le,F)))}),U}function A(j){let U=j.graph();U.ranksep/=2,j.edges().forEach(K=>{let ie=j.edge(K);ie.minlen*=2,ie.labelpos.toLowerCase()!=="c"&&(U.rankdir==="TB"||U.rankdir==="BT"?ie.width+=ie.labeloffset:ie.height+=ie.labeloffset)})}function O(j){j.edges().forEach(U=>{let K=j.edge(U);if(K.width&&K.height){let ie=j.node(U.v),Z={rank:(j.node(U.w).rank-ie.rank)/2+ie.rank,e:U};h.addDummyNode(j,"edge-proxy",Z,"_ep")}})}function L(j){let U=0;j.nodes().forEach(K=>{let ie=j.node(K);ie.borderTop&&(ie.minRank=j.node(ie.borderTop).rank,ie.maxRank=j.node(ie.borderBottom).rank,U=Math.max(U,ie.maxRank))}),j.graph().maxRank=U}function D(j){j.nodes().forEach(U=>{let K=j.node(U);K.dummy==="edge-proxy"&&(j.edge(K.e).labelRank=K.rank,j.removeNode(U))})}function J(j){let U=Number.POSITIVE_INFINITY,K=0,ie=Number.POSITIVE_INFINITY,le=0,Z=j.graph(),oe=Z.marginx||0,fe=Z.marginy||0;function xe(he){let de=he.x,ke=he.y,be=he.width,$e=he.height;U=Math.min(U,de-be/2),K=Math.max(K,de+be/2),ie=Math.min(ie,ke-$e/2),le=Math.max(le,ke+$e/2)}j.nodes().forEach(he=>xe(j.node(he))),j.edges().forEach(he=>{let de=j.edge(he);Object.hasOwn(de,"x")&&xe(de)}),U-=oe,ie-=fe,j.nodes().forEach(he=>{let de=j.node(he);de.x-=U,de.y-=ie}),j.edges().forEach(he=>{let de=j.edge(he);de.points.forEach(ke=>{ke.x-=U,ke.y-=ie}),Object.hasOwn(de,"x")&&(de.x-=U),Object.hasOwn(de,"y")&&(de.y-=ie)}),Z.width=K-U+oe,Z.height=le-ie+fe}function T(j){j.edges().forEach(U=>{let K=j.edge(U),ie=j.node(U.v),le=j.node(U.w),Z,oe;K.points?(Z=K.points[0],oe=K.points[K.points.length-1]):(K.points=[],Z=le,oe=ie),K.points.unshift(h.intersectRect(ie,Z)),K.points.push(h.intersectRect(le,oe))})}function q(j){j.edges().forEach(U=>{let K=j.edge(U);if(Object.hasOwn(K,"x"))switch((K.labelpos==="l"||K.labelpos==="r")&&(K.width-=K.labeloffset),K.labelpos){case"l":K.x-=K.width/2+K.labeloffset;break;case"r":K.x+=K.width/2+K.labeloffset;break}})}function Q(j){j.edges().forEach(U=>{let K=j.edge(U);K.reversed&&K.points.reverse()})}function Y(j){j.nodes().forEach(U=>{if(j.children(U).length){let K=j.node(U),ie=j.node(K.borderTop),le=j.node(K.borderBottom),Z=j.node(K.borderLeft[K.borderLeft.length-1]),oe=j.node(K.borderRight[K.borderRight.length-1]);K.width=Math.abs(oe.x-Z.x),K.height=Math.abs(le.y-ie.y),K.x=Z.x+K.width/2,K.y=ie.y+K.height/2}}),j.nodes().forEach(U=>{j.node(U).dummy==="border"&&j.removeNode(U)})}function W(j){j.edges().forEach(U=>{if(U.v===U.w){var K=j.node(U.v);K.selfEdges||(K.selfEdges=[]),K.selfEdges.push({e:U,label:j.edge(U)}),j.removeEdge(U)}})}function V(j){var U=h.buildLayerMatrix(j);U.forEach(K=>{var ie=0;K.forEach((le,Z)=>{var oe=j.node(le);oe.order=Z+ie,(oe.selfEdges||[]).forEach(fe=>{h.addDummyNode(j,"selfedge",{width:fe.label.width,height:fe.label.height,rank:oe.rank,order:Z+ ++ie,e:fe.e,label:fe.label},"_se")}),delete oe.selfEdges})})}function X(j){j.nodes().forEach(U=>{var K=j.node(U);if(K.dummy==="selfedge"){var ie=j.node(K.e.v),le=ie.x+ie.width/2,Z=ie.y,oe=K.x-le,fe=ie.height/2;j.setEdge(K.e,K.label),j.removeNode(U),K.label.points=[{x:le+2*oe/3,y:Z-fe},{x:le+5*oe/6,y:Z-fe},{x:le+oe,y:Z},{x:le+5*oe/6,y:Z+fe},{x:le+2*oe/3,y:Z+fe}],K.label.x=K.x,K.label.y=K.y}})}function M(j,U){return h.mapValues(h.pick(j,U),Number)}function z(j){var U={};return j&&Object.entries(j).forEach(([K,ie])=>{typeof K=="string"&&(K=K.toLowerCase()),U[K]=ie}),U}return kc}var Ec,Fm;function kk(){if(Fm)return Ec;Fm=1;let n=Qe(),r=qn().Graph;Ec={debugOrdering:o};function o(l){let a=n.buildLayerMatrix(l),c=new r({compound:!0,multigraph:!0}).setGraph({});return l.nodes().forEach(u=>{c.setNode(u,{label:u}),c.setParent(u,"layer"+l.node(u).rank)}),l.edges().forEach(u=>c.setEdge(u.v,u.w,{},u.name)),a.forEach((u,d)=>{let f="layer"+d;c.setNode(f,{rank:"same"}),u.reduce((g,m)=>(c.setEdge(g,m,{style:"invis"}),m))}),c}return Ec}var Cc,jm;function Ek(){return jm||(jm=1,Cc="1.1.8"),Cc}var bc,zm;function Ck(){return zm||(zm=1,bc={graphlib:qn(),layout:Sk(),debug:kk(),util:{time:Qe().time,notime:Qe().notime},version:Ek()}),bc}var bk=Ck();const Om=Bc(bk),Hm=200,Bm=44;function jg(n,r,o=null,l=0,a={nodes:[],edges:[]}){const c=!!(n.children&&n.children.length>0),u=r.has(n.id);return a.nodes.push({id:n.id,type:"mindMapNode",data:{label:n.label,depth:l,hasChildren:c,isCollapsed:u,explanation:n.explanation||null,images:n.images||null},position:{x:0,y:0}}),o&&a.edges.push({id:`e-${o}-${n.id}`,source:o,target:n.id,type:"smoothstep",style:{stroke:"#94a3b8",strokeWidth:1.5}}),c&&!u&&n.children.forEach(d=>jg(d,r,n.id,l+1,a)),a}function $k(n,r){const o=new Om.graphlib.Graph;return o.setDefaultEdgeLabel(()=>({})),o.setGraph({rankdir:"LR",nodesep:16,ranksep:60,marginx:20,marginy:20}),n.forEach(l=>o.setNode(l.id,{width:Hm,height:Bm})),r.forEach(l=>o.setEdge(l.source,l.target)),Om.layout(o),n.map(l=>({...l,position:{x:o.node(l.id).x-Hm/2,y:o.node(l.id).y-Bm/2}}))}const Vm=/\d+(?:\.\d+)?\s?(?:mm|cm|m³|m²|m|MPa|kg|%|일|시간|층|개|배|t|tf|°C)/g,Nk=/^(\s*[•\-]\s*)([가-힣A-Za-z0-9\-+]{2,})(?=\s*[:(（])/;function Pk(n){const o=(n.explanation||"").split(`
`),l=(n.label||"").replace(/\s*\(.*?\)\s*/g,"").trim(),a=[];o.forEach((u,d)=>{if(u.startsWith("▶")||u.trim()==="")return;if(l.length>=2){let m=u.indexOf(l);for(;m!==-1;)a.push({lineIndex:d,start:m,end:m+l.length,answer:l,priority:0}),m=u.indexOf(l,m+l.length)}let f;for(Vm.lastIndex=0;(f=Vm.exec(u))!==null;)a.push({lineIndex:d,start:f.index,end:f.index+f[0].length,answer:f[0],priority:1});const g=Nk.exec(u);if(g){const m=g[1].length,h=m+g[2].length,v=g[2];v!==l&&a.push({lineIndex:d,start:m,end:h,answer:v,priority:2})}}),a.sort((u,d)=>u.lineIndex-d.lineIndex||u.start-d.start);const c=[];return a.forEach(u=>{c.find(f=>f.lineIndex===u.lineIndex&&u.start<f.end&&u.end>f.start)||c.push(u)}),c}function Wm(n){return(n||"").replace(/\s+/g,"").replace(/[을를이가은는도와과의에서로부터까지만]+$/g,"").toLowerCase()}function zg(n,r){const o=Wm(n),l=Wm(r);return!o||!l?!1:o.includes(l)||l.includes(o)}function Mk(n){return(n||"").match(/[가-힣0-9]{2,}|[A-Za-z]{2,}/g)||[]}function Um(n,r){const o=Mk(r);if(!o.length)return!1;const l=(n||"").replace(/\s+/g,""),a=o.filter(u=>l.includes(u)).length,c=Math.max(1,Math.ceil(o.length*.5));return a>=c}function Og(n,r){if(n.id===r)return n;if(!n.children)return null;for(const o of n.children){const l=Og(o,r);if(l)return l}return null}function Hg(n,r,o=[]){if(n.id===r)return o;if(!n.children)return null;for(const l of n.children){const a=Hg(l,r,[...o,n.id]);if(a)return a}return null}const Tk={mindMapNode:z3};function Lk(n){return n?n.split(`
`).map(r=>/^##+ /.test(r)?"▶ "+r.replace(/^##+ /,""):/^!\[.*?\]\(.*?\)$/.test(r.trim())?"":(r=r.replace(/\[\[.*?\]\]\((.*?)\)/g,"$1"),r=r.replace(/\*\*(.*?)\*\*/g,"$1"),r)).join(`
`):""}function Ak(n,r){function o(l){const a=r[l.id],c=a?{...l,explanation:Lk(a.content)}:{...l};return c.children&&(c.children=c.children.map(o)),c}return o(n)}const Rk=Ak(H3,B3),Hc={sigong:{titleBar:"#1e3a5f",header:"#2563eb",miniDepth1:"#2563eb",miniDepth2:"#60a5fa",miniDepth3:"#dbeafe",hint:"rgba(30,58,95,0.08)"},gujoo:{titleBar:"#064e3b",header:"#059669",miniDepth1:"#059669",miniDepth2:"#34d399",miniDepth3:"#d1fae5",hint:"rgba(6,78,59,0.08)"}};function Ik(n){return n?n.split(`
`).map((r,o)=>{if(r.trim()==="")return B.jsx("div",{style:{height:10}},o);if(r.startsWith("★")||r.startsWith("▶")&&r.includes("시험"))return B.jsx("div",{style:{background:"#fffbeb",border:"1.5px solid #f59e0b",borderLeft:"4px solid #f59e0b",borderRadius:8,padding:"9px 13px",marginTop:14,color:"#92400e",fontWeight:700,fontSize:13,lineHeight:1.7},children:r},o);if(r.startsWith("▶"))return B.jsx("div",{style:{color:"#2563eb",fontWeight:700,fontSize:14,marginTop:18,marginBottom:2,paddingBottom:4,borderBottom:"1.5px solid #dbeafe"},children:r},o);if(r.trimStart().startsWith("•")||r.trimStart().startsWith("-")){const l=r.length-r.trimStart().length;return B.jsxs("div",{style:{display:"flex",gap:7,paddingLeft:l>0?20:0,marginTop:3,lineHeight:1.7},children:[B.jsx("span",{style:{color:"#3b82f6",fontWeight:700,flexShrink:0,marginTop:1},children:"•"}),B.jsx("span",{style:{color:"#1e293b",fontSize:13},children:r.trimStart().slice(1).trim()})]},o)}return B.jsx("div",{style:{color:"#374151",fontSize:13,lineHeight:1.75,marginTop:2},children:r},o)}):null}function Dk(n,r,o,l,a){if(!r.length)return n;const c=[];let u=0;return r.forEach(d=>{d.start>u&&c.push(n.slice(u,d.start));const f=o[d.key]||"";if(l){const g=zg(f,d.answer);c.push(B.jsx("span",{style:{background:g?"#dcfce7":"#fee2e2",color:g?"#15803d":"#dc2626",padding:"1px 6px",borderRadius:5,fontWeight:700,textDecoration:g?"none":"line-through"},children:f||"(빈칸)"},d.key)),g||c.push(B.jsxs("span",{style:{color:"#15803d",fontWeight:700,marginLeft:4},children:["→ ",d.answer]},d.key+"-a"))}else c.push(B.jsx("input",{value:f,onChange:g=>a(d.key,g.target.value),style:{width:Math.max(50,d.answer.length*11),display:"inline-block",border:"none",borderBottom:"2px solid #3b82f6",background:"#eff6ff",font:"inherit",fontSize:13,padding:"0 4px",margin:"0 2px",outline:"none"}},d.key));u=d.end}),u<n.length&&c.push(n.slice(u)),c}function Fk({node:n}){const r=re.useMemo(()=>Pk(n).map((f,g)=>({...f,key:`b${g}`})),[n]),[o,l]=re.useState({}),[a,c]=re.useState(!1),u=(f,g)=>l(m=>({...m,[f]:g}));if(!r.length)return B.jsx("div",{style:{color:"#64748b",fontSize:13,padding:"20px 0",textAlign:"center"},children:"이 노드에는 빈칸으로 만들 핵심 용어·숫자가 없습니다."});const d=r.filter(f=>zg(o[f.key]||"",f.answer)).length;return B.jsxs("div",{children:[(n.explanation||"").split(`
`).map((f,g)=>{if(f.trim()==="")return B.jsx("div",{style:{height:10}},g);if(f.startsWith("★")||f.startsWith("▶")&&f.includes("시험"))return B.jsx("div",{style:{background:"#fffbeb",border:"1.5px solid #f59e0b",borderLeft:"4px solid #f59e0b",borderRadius:8,padding:"9px 13px",marginTop:14,color:"#92400e",fontWeight:700,fontSize:13,lineHeight:1.7},children:f},g);if(f.startsWith("▶"))return B.jsx("div",{style:{color:"#2563eb",fontWeight:700,fontSize:14,marginTop:18,marginBottom:2,paddingBottom:4,borderBottom:"1.5px solid #dbeafe"},children:f},g);const m=r.filter(v=>v.lineIndex===g),h=Dk(f,m,o,a,u);if(f.trimStart().startsWith("•")||f.trimStart().startsWith("-")){const v=f.length-f.trimStart().length;return B.jsxs("div",{style:{display:"flex",gap:7,paddingLeft:v>0?20:0,marginTop:3,lineHeight:1.7},children:[B.jsx("span",{style:{color:"#3b82f6",fontWeight:700,flexShrink:0,marginTop:1},children:"•"}),B.jsx("span",{style:{color:"#1e293b",fontSize:13},children:h})]},g)}return B.jsx("div",{style:{color:"#374151",fontSize:13,lineHeight:1.75,marginTop:2},children:h},g)}),B.jsx("div",{style:{marginTop:18,paddingTop:14,borderTop:"1.5px solid #e2e8f0"},children:a?B.jsxs("div",{style:{textAlign:"center",fontWeight:700,color:"#15803d",fontSize:14},children:[d," / ",r.length," 정답 ",d===r.length?"🎉":""]}):B.jsx("button",{onClick:()=>c(!0),style:{width:"100%",padding:"10px 0",background:"#16a34a",color:"#fff",border:"none",borderRadius:8,fontWeight:700,fontSize:14,cursor:"pointer"},children:"✅ 채점하기"})})]})}function jk({node:n}){const r=(n.explanation||"").split(`
`).map((g,m)=>{if(g.trim()==="")return{type:"empty",key:`e${m}`};if(g.startsWith("★")||g.startsWith("▶")&&g.includes("시험"))return{type:"exam",key:`x${m}`,content:g};if(g.startsWith("▶"))return{type:"header",key:`h${m}`,content:g};const h=g.trimStart().startsWith("•")||g.trimStart().startsWith("-")?g.trimStart().slice(1).trim():g;return{type:"blank",key:`b${m}`,answer:h}}),o=r.filter(g=>g.type==="blank"),[l,a]=re.useState({}),[c,u]=re.useState(!1),d=(g,m)=>a(h=>({...h,[g]:m})),f=o.filter(g=>Um(l[g.key]||"",g.answer)).length;return o.length?B.jsxs("div",{children:[r.map(g=>{if(g.type==="empty")return B.jsx("div",{style:{height:10}},g.key);if(g.type==="exam")return B.jsx("div",{style:{background:"#fffbeb",border:"1.5px solid #f59e0b",borderLeft:"4px solid #f59e0b",borderRadius:8,padding:"9px 13px",marginTop:14,color:"#92400e",fontWeight:700,fontSize:13,lineHeight:1.7},children:g.content},g.key);if(g.type==="header")return B.jsx("div",{style:{color:"#2563eb",fontWeight:700,fontSize:14,marginTop:18,marginBottom:2,paddingBottom:4,borderBottom:"1.5px solid #dbeafe"},children:g.content},g.key);if(c){const m=Um(l[g.key]||"",g.answer);return B.jsxs("div",{style:{marginTop:6},children:[B.jsx("div",{style:{background:m?"#dcfce7":"#fee2e2",borderRadius:8,padding:"7px 12px",fontSize:13,lineHeight:1.7,color:m?"#15803d":"#dc2626",textDecoration:m?"none":"line-through"},children:l[g.key]||"(빈칸)"}),!m&&B.jsxs("div",{style:{fontSize:12.5,color:"#15803d",fontWeight:700,marginTop:3,paddingLeft:4},children:["→ ",g.answer]})]},g.key)}return B.jsx("input",{value:l[g.key]||"",onChange:m=>d(g.key,m.target.value),placeholder:"문장을 입력하세요",style:{display:"block",width:"100%",marginTop:6,boxSizing:"border-box",border:"none",borderBottom:"2px solid #3b82f6",background:"#eff6ff",font:"inherit",fontSize:13,padding:"6px 8px",outline:"none",borderRadius:"4px 4px 0 0"}},g.key)}),B.jsx("div",{style:{marginTop:18,paddingTop:14,borderTop:"1.5px solid #e2e8f0"},children:c?B.jsxs("div",{style:{textAlign:"center",fontWeight:700,color:"#15803d",fontSize:14},children:[f," / ",o.length," 정답 ",f===o.length?"🎉":""]}):B.jsx("button",{onClick:()=>u(!0),style:{width:"100%",padding:"10px 0",background:"#16a34a",color:"#fff",border:"none",borderRadius:8,fontWeight:700,fontSize:14,cursor:"pointer"},children:"✅ 채점하기"})})]}):B.jsx("div",{style:{color:"#64748b",fontSize:13,padding:"20px 0",textAlign:"center"},children:"이 노드에는 빈 문장으로 만들 내용이 없습니다."})}function Bg(n,r=new Set,o=!0){return n.children&&n.children.length>0&&(o||r.add(n.id),n.children.forEach(l=>Bg(l,r,!1))),r}function zk({onSelectNode:n,treeData:r,subject:o}){const l=Hc[o],[a,c]=re.useState(()=>{const h=Bg(r),v=new URLSearchParams(window.location.search).get("focus");return v&&((Hg(r,v)||[]).forEach(w=>h.delete(w)),h.delete(v)),h}),{fitView:u}=_a();re.useEffect(()=>{const h=new URLSearchParams(window.location.search).get("focus");if(!h)return;const v=Og(r,h);v&&(!v.children||!v.children.length)&&v.explanation&&(n(v),setTimeout(()=>u({duration:400,padding:.08}),60))},[]);const{nodes:d,edges:f}=re.useMemo(()=>jg(r,a),[r,a]),g=re.useMemo(()=>$k(d,f),[d,f]),m=re.useCallback((h,v)=>{v.data.explanation&&n(v.data),v.data.hasChildren&&(c(x=>{const w=new Set(x);return w.has(v.id)?w.delete(v.id):w.add(v.id),w}),setTimeout(()=>u({duration:400,padding:.08}),30))},[u,n]);return B.jsxs(c3,{nodes:g,edges:f,nodeTypes:Tk,onNodeClick:m,fitView:!0,fitViewOptions:{padding:.08},minZoom:.05,maxZoom:2,nodesDraggable:!1,nodesConnectable:!1,elementsSelectable:!1,children:[B.jsx(m3,{color:"#e2e8f0",gap:24,size:1}),B.jsx(S3,{showInteractive:!1}),B.jsx(I3,{nodeColor:h=>{var x;const v=((x=h.data)==null?void 0:x.depth)??0;return v===0?l.titleBar:v===1?l.miniDepth1:v===2?l.miniDepth2:l.miniDepth3},maskColor:"rgba(248, 250, 252, 0.7)"})]})}function Ok(){var b,R;const[n,r]=re.useState("sigong"),[o,l]=re.useState(null),[a,c]=re.useState(340),[u,d]=re.useState("view"),[f,g]=re.useState({nodeToQuestions:{},questionToNodes:{}}),[m,h]=re.useState({nodeToQuestions:{},questionToNodes:{}}),[v,x]=re.useState({}),w=re.useRef(!1);re.useEffect(()=>{fetch("../linkMap.json").then(N=>N.json()).then(g).catch(()=>{}),fetch("../gujooLinkMap.json").then(N=>N.json()).then(h).catch(()=>{}),fetch("../questions.json").then(N=>N.json()).then(N=>{const F={};(N.questions||[]).forEach(P=>{F[P.id]=P}),x(F)}).catch(()=>{})},[]);const C=n==="sigong"?O3:Rk,_=n==="sigong"?f:m,k=Hc[n],$=N=>{N!==n&&(r(N),l(null))},S=re.useCallback(N=>{N.preventDefault(),w.current=!0;const F=N.clientX,P=a,A=L=>{if(!w.current)return;const D=Math.max(260,Math.min(window.innerWidth*.75,P+(F-L.clientX)));c(D)},O=()=>{w.current=!1,document.removeEventListener("mousemove",A),document.removeEventListener("mouseup",O),document.body.style.cursor="",document.body.style.userSelect=""};document.body.style.cursor="ew-resize",document.body.style.userSelect="none",document.addEventListener("mousemove",A),document.addEventListener("mouseup",O)},[a]);return B.jsxs("div",{style:{width:"100vw",height:"100vh",background:"#f8fafc",position:"relative"},children:[B.jsx("div",{style:{position:"absolute",top:16,left:"50%",transform:"translateX(-50%)",background:k.titleBar,color:"white",padding:"7px 24px",borderRadius:24,fontWeight:700,fontSize:15,zIndex:10,fontFamily:"Noto Sans KR, sans-serif",boxShadow:"0 2px 8px rgba(0,0,0,0.2)",whiteSpace:"nowrap"},children:n==="sigong"?"🏗️ 건축시공 마인드맵":"🏛️ 건축구조 마인드맵"}),B.jsx("div",{style:{position:"absolute",top:16,left:16,display:"flex",gap:4,background:"#fff",borderRadius:20,padding:4,boxShadow:"0 2px 8px rgba(0,0,0,0.12)",zIndex:10,fontFamily:"Noto Sans KR, sans-serif"},children:[["sigong","🏗️ 시공"],["gujoo","🏛️ 구조"]].map(([N,F])=>B.jsx("button",{onClick:()=>$(N),style:{padding:"6px 14px",borderRadius:16,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",background:n===N?Hc[N].header:"transparent",color:n===N?"#fff":"#475569",transition:"background 0.15s"},children:F},N))}),B.jsx("div",{style:{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",background:k.hint,color:"#475569",padding:"5px 16px",borderRadius:12,fontSize:12,zIndex:10,fontFamily:"Noto Sans KR, sans-serif",whiteSpace:"nowrap"},children:"▶/▼ 클릭: 펼치기/접기  |  📖 클릭: 개념 설명 보기"}),B.jsx("div",{style:{position:"absolute",top:60,left:"50%",transform:"translateX(-50%)",display:"flex",gap:4,background:"#fff",borderRadius:20,padding:4,boxShadow:"0 2px 8px rgba(0,0,0,0.12)",zIndex:10,fontFamily:"Noto Sans KR, sans-serif"},children:[["view","📖 개념 보기"],["easy","✏️ 빈칸(쉬움)"],["hard","🔥 빈칸(어려움)"]].map(([N,F])=>B.jsx("button",{onClick:()=>d(N),style:{padding:"6px 14px",borderRadius:16,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",background:u===N?k.header:"transparent",color:u===N?"#fff":"#475569"},children:F},N))}),B.jsx(Ng,{children:B.jsx(zk,{treeData:C,subject:n,onSelectNode:l},n)}),o&&B.jsxs(B.Fragment,{children:[B.jsx("div",{onClick:()=>l(null),style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.15)",zIndex:999}}),B.jsxs("div",{style:{position:"fixed",right:0,top:0,width:a,height:"100vh",background:"#fff",boxShadow:"-4px 0 24px rgba(0,0,0,0.18)",zIndex:1e3,display:"flex",flexDirection:"column",fontFamily:"Noto Sans KR, sans-serif"},children:[B.jsx("div",{onMouseDown:S,style:{position:"absolute",left:0,top:0,width:6,height:"100%",cursor:"ew-resize",background:"transparent",zIndex:10},onMouseEnter:N=>N.currentTarget.style.background=`${k.header}30`,onMouseLeave:N=>N.currentTarget.style.background="transparent"}),B.jsxs("div",{style:{background:k.header,color:"#fff",padding:"14px 16px",display:"flex",alignItems:"center",gap:10,flexShrink:0},children:[B.jsxs("span",{style:{flex:1,fontWeight:700,fontSize:15,lineHeight:1.4},children:["📖 ",o.label]}),B.jsx("button",{onClick:()=>l(null),style:{background:"none",border:"none",color:"#fff",fontSize:20,cursor:"pointer",lineHeight:1,opacity:.85,padding:"2px 4px"},children:"✕"})]}),B.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"18px 16px"},children:[((b=o.images)==null?void 0:b[0])&&B.jsxs("div",{style:{marginBottom:14},children:[B.jsx("img",{src:o.images[0].url,alt:o.images[0].caption||o.label,style:{width:"100%",height:170,objectFit:"cover",borderRadius:8,display:"block"},onError:N=>{N.currentTarget.style.display="none"}}),o.images[0].caption&&B.jsx("div",{style:{fontSize:11,color:"#64748b",marginTop:5,textAlign:"center",lineHeight:1.4},children:o.images[0].caption})]}),u==="view"?Ik(o.explanation):u==="easy"?B.jsx(Fk,{node:o},o.id+u):B.jsx(jk,{node:o},o.id+u),((R=_.nodeToQuestions[o.id])==null?void 0:R.length)>0&&B.jsxs("div",{style:{marginTop:20,paddingTop:14,borderTop:"1.5px solid #e2e8f0"},children:[B.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#475569",marginBottom:8},children:"🔗 관련 기출문제"}),_.nodeToQuestions[o.id].slice(0,2).map(N=>{const F=v[N];return F?B.jsxs("div",{onClick:()=>window.parent.postMessage({type:"openQuestion",id:N},window.location.origin),style:{padding:"10px 12px",background:"#f8fafc",border:"1px solid #e2e8f0",borderRadius:8,marginBottom:6,cursor:"pointer",fontSize:12.5,lineHeight:1.6},children:[B.jsx("span",{style:{display:"inline-block",padding:"1px 8px",borderRadius:10,fontSize:11,fontWeight:700,background:"#dbeafe",color:"#1d4ed8",marginBottom:4},children:F.category}),B.jsxs("div",{style:{color:"#334155"},children:[F.question.slice(0,50).replace(/\n/g," "),F.question.length>50?"...":""]})]},N):null})]})]})]})]})]})}Ty.createRoot(document.getElementById("root")).render(B.jsx(re.StrictMode,{children:B.jsx(Ok,{})}));
