"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5220],{87587:function(e,n,t){t.d(n,{d:function(){return s},f:function(){return d}});var r=t(19642),o=t(67294),i=t(58529),u=t(60852),a=t(92506),l=(0,o.createContext)(null);function c(){var e=(0,o.useContext)(l);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,c),n}return e}function d(){var e=(0,o.useState)([]),n=e[0],t=e[1];return[n.length>0?n.join(" "):void 0,(0,o.useMemo)((function(){return function(e){var n=(0,o.useCallback)((function(e){return t((function(n){return[].concat(n,[e])})),function(){return t((function(n){var t=n.slice(),r=t.indexOf(e);return-1!==r&&t.splice(r,1),t}))}}),[]),r=(0,o.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return o.createElement(l.Provider,{value:r},e.children)}}),[t])]}function s(e){var n=c(),t="headlessui-description-"+(0,a.M)();(0,u.e)((function(){return n.register(t)}),[t,n.register]);var o=e,l=(0,r.gY)({},n.props,{id:t});return(0,i.sY)({props:(0,r.gY)({},o,l),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}},85220:function(e,n,t){t.d(n,{V:function(){return K}});var r,o=t(19642),i=t(67294),u=t(133),a=t(58529),l=t(57471),c=t(62659),d=t(79016),s=t(35989),f=t(92506),p=t(24198),v=t(35057),m=t(77933);function g(e,n,t){void 0===n&&(n=r.All);var u=void 0===t?{}:t,a=u.initialFocus,l=u.containers,d=(0,i.useRef)("undefined"!==typeof window?document.activeElement:null),s=(0,i.useRef)(null),f=(0,m.t)(),g=Boolean(n&r.RestoreFocus),h=Boolean(n&r.InitialFocus);(0,i.useEffect)((function(){g&&(d.current=document.activeElement)}),[g]),(0,i.useEffect)((function(){if(g)return function(){(0,v.C5)(d.current),d.current=null}}),[g]),(0,i.useEffect)((function(){if(h&&e.current){var n=document.activeElement;if(null==a?void 0:a.current){if((null==a?void 0:a.current)===n)return void(s.current=n)}else if(e.current.contains(n))return void(s.current=n);(null==a?void 0:a.current)?(0,v.C5)(a.current):(0,v.jA)(e.current,v.TO.First)===v.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),s.current=document.activeElement}}),[e,a,h]),(0,p.s)("keydown",(function(t){n&r.TabLock&&e.current&&t.key===c.R.Tab&&(t.preventDefault(),(0,v.jA)(e.current,(t.shiftKey?v.TO.Previous:v.TO.Next)|v.TO.WrapAround)===v.fE.Success&&(s.current=document.activeElement))})),(0,p.s)("focus",(function(t){if(n&r.FocusLock){var i=new Set(null==l?void 0:l.current);if(i.add(e),i.size){var u=s.current;if(u&&f.current){var a=t.target;a&&a instanceof HTMLElement?!function(e,n){for(var t,r=(0,o.Ul)(e);!(t=r()).done;){var i;if(null==(i=t.value.current)?void 0:i.contains(n))return!0}return!1}(i,a)?(t.preventDefault(),t.stopPropagation(),(0,v.C5)(u)):(s.current=a,(0,v.C5)(a)):(0,v.C5)(s.current)}}}}),!0)}!function(e){e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All"}(r||(r={}));var h=t(60852),E=new Set,y=new Map;function C(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function b(e){var n=y.get(e);n&&(null===n["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",n["aria-hidden"]),e.inert=n.inert)}var w=(0,i.createContext)(!1);function T(e){return i.createElement(w.Provider,{value:e.force},e.children)}var k=t(73935);function O(){var e=(0,i.useContext)(w),n=(0,i.useContext)(D),t=(0,i.useState)((function(){if(!e&&null!==n)return null;if("undefined"===typeof window)return null;var t=document.getElementById("headlessui-portal-root");if(t)return t;var r=document.createElement("div");return r.setAttribute("id","headlessui-portal-root"),document.body.appendChild(r)})),r=t[0],o=t[1];return(0,i.useEffect)((function(){e||null!==n&&o(n.current)}),[n,o,e]),r}var R=i.Fragment;function S(e){var n=e,t=O(),r=(0,i.useState)((function(){return"undefined"===typeof window?null:document.createElement("div")}))[0],o=(0,s.H)();return(0,h.e)((function(){if(t&&r)return t.appendChild(r),function(){var e;t&&(r&&(t.removeChild(r),t.childNodes.length<=0&&(null==(e=t.parentElement)||e.removeChild(t))))}}),[t,r]),o&&t&&r?(0,k.createPortal)((0,a.sY)({props:n,defaultTag:R,name:"Portal"}),r):null}var A=i.Fragment,D=(0,i.createContext)(null);S.Group=function(e){var n=e.target,t=(0,o.gK)(e,["target"]);return i.createElement(D.Provider,{value:n},(0,a.sY)({props:t,defaultTag:A,name:"Popover.Group"}))};var F,Y,x,M,I=t(87587),P=t(3980),N=(0,i.createContext)((function(){}));function L(e){var n=e.children,t=e.onUpdate,r=e.type,o=e.element,u=(0,i.useContext)(N),a=(0,i.useCallback)((function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];null==t||t.apply(void 0,n),u.apply(void 0,n)}),[u,t]);return(0,h.e)((function(){return a(F.Add,r,o),function(){return a(F.Remove,r,o)}}),[a,r,o]),i.createElement(N.Provider,{value:a},n)}N.displayName="StackContext",function(e){e[e.Add=0]="Add",e[e.Remove=1]="Remove"}(F||(F={})),function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(x||(x={})),function(e){e[e.SetTitleId=0]="SetTitleId"}(M||(M={}));var U=((Y={})[M.SetTitleId]=function(e,n){return e.titleId===n.id?e:(0,o.gY)({},e,{titleId:n.id})},Y),j=(0,i.createContext)(null);function H(e){var n=(0,i.useContext)(j);if(null===n){var t=new Error("<"+e+" /> is missing a parent <"+K.displayName+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(t,H),t}return n}function _(e,n){return(0,u.E)(n.type,U,e,n)}j.displayName="DialogContext";var z=a.AN.RenderStrategy|a.AN.Static,B=(0,a.yV)((function(e,n){var t,d=e.open,v=e.onClose,m=e.initialFocus,w=(0,o.gK)(e,["open","onClose","initialFocus"]),k=(0,i.useState)(0),O=k[0],R=k[1],A=(0,P.oJ)();void 0===d&&null!==A&&(d=(0,u.E)(A,((t={})[P.ZM.Open]=!0,t[P.ZM.Closed]=!1,t)));var D=(0,i.useRef)(new Set),Y=(0,i.useRef)(null),N=(0,l.T)(Y,n),U=e.hasOwnProperty("open")||null!==A,H=e.hasOwnProperty("onClose");if(!U&&!H)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!U)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!H)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!==typeof d)throw new Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: "+d);if("function"!==typeof v)throw new Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: "+v);var B=d?x.Open:x.Closed,G=null!==A?A===P.ZM.Open:B===x.Open,K=(0,i.useReducer)(_,{titleId:null,descriptionId:null}),V=K[0],W=K[1],Z=(0,i.useCallback)((function(){return v(!1)}),[v]),q=(0,i.useCallback)((function(e){return W({type:M.SetTitleId,id:e})}),[W]),J=(0,s.H)()&&B===x.Open,Q=O>1,X=null!==(0,i.useContext)(j),$=Q?"parent":"leaf";g(Y,J?(0,u.E)($,{parent:r.RestoreFocus,leaf:r.All}):r.None,{initialFocus:m,containers:D}),function(e,n){void 0===n&&(n=!0),(0,h.e)((function(){if(n&&e.current){var t=e.current;E.add(t);for(var r,i=(0,o.Ul)(y.keys());!(r=i()).done;){var u=r.value;u.contains(t)&&(b(u),y.delete(u))}return document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement){for(var n,t=(0,o.Ul)(E);!(n=t()).done;){var r=n.value;if(e.contains(r))return}1===E.size&&(y.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),C(e))}})),function(){if(E.delete(t),E.size>0)document.querySelectorAll("body > *").forEach((function(e){if(e instanceof HTMLElement&&!y.has(e)){for(var n,t=(0,o.Ul)(E);!(n=t()).done;){var r=n.value;if(e.contains(r))return}y.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),C(e)}}));else for(var e,n=(0,o.Ul)(y.keys());!(e=n()).done;){var r=e.value;b(r),y.delete(r)}}}}),[n])}(Y,!!Q&&J),(0,p.s)("mousedown",(function(e){var n,t=e.target;B===x.Open&&(Q||(null==(n=Y.current)?void 0:n.contains(t))||Z())})),(0,p.s)("keydown",(function(e){e.key===c.R.Escape&&B===x.Open&&(Q||(e.preventDefault(),e.stopPropagation(),Z()))})),(0,i.useEffect)((function(){if(B===x.Open&&!X){var e=document.documentElement.style.overflow,n=document.documentElement.style.paddingRight,t=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=t+"px",function(){document.documentElement.style.overflow=e,document.documentElement.style.paddingRight=n}}}),[B,X]),(0,i.useEffect)((function(){if(B===x.Open&&Y.current){var e=new IntersectionObserver((function(e){for(var n,t=(0,o.Ul)(e);!(n=t()).done;){var r=n.value;0===r.boundingClientRect.x&&0===r.boundingClientRect.y&&0===r.boundingClientRect.width&&0===r.boundingClientRect.height&&Z()}}));return e.observe(Y.current),function(){return e.disconnect()}}}),[B,Y,Z]);var ee=(0,I.f)(),ne=ee[0],te=ee[1],re="headlessui-dialog-"+(0,f.M)(),oe=(0,i.useMemo)((function(){return[{dialogState:B,close:Z,setTitleId:q},V]}),[B,V,Z,q]),ie=(0,i.useMemo)((function(){return{open:B===x.Open}}),[B]),ue={ref:N,id:re,role:"dialog","aria-modal":B===x.Open||void 0,"aria-labelledby":V.titleId,"aria-describedby":ne,onClick:function(e){e.stopPropagation()}},ae=w;return i.createElement(L,{type:"Dialog",element:Y,onUpdate:(0,i.useCallback)((function(e,n,t){var r;"Dialog"===n&&(0,u.E)(e,((r={})[F.Add]=function(){D.current.add(t),R((function(e){return e+1}))},r[F.Remove]=function(){D.current.add(t),R((function(e){return e-1}))},r))}),[])},i.createElement(T,{force:!0},i.createElement(S,null,i.createElement(j.Provider,{value:oe},i.createElement(S.Group,{target:Y},i.createElement(T,{force:!1},i.createElement(te,{slot:ie,name:"Dialog.Description"},(0,a.sY)({props:(0,o.gY)({},ae,ue),slot:ie,defaultTag:"div",features:z,visible:G,name:"Dialog"}))))))))})),G=(0,a.yV)((function e(n,t){var r=H([K.displayName,e.name].join("."))[0],u=r.dialogState,c=r.close,s=(0,l.T)(t),p="headlessui-dialog-overlay-"+(0,f.M)(),v=(0,i.useCallback)((function(e){if((0,d.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),c()}),[c]),m=(0,i.useMemo)((function(){return{open:u===x.Open}}),[u]),g={ref:s,id:p,"aria-hidden":!0,onClick:v},h=n;return(0,a.sY)({props:(0,o.gY)({},h,g),slot:m,defaultTag:"div",name:"Dialog.Overlay"})}));var K=Object.assign(B,{Overlay:G,Title:function e(n){var t=H([K.displayName,e.name].join("."))[0],r=t.dialogState,u=t.setTitleId,l="headlessui-dialog-title-"+(0,f.M)();(0,i.useEffect)((function(){return u(l),function(){return u(null)}}),[l,u]);var c=(0,i.useMemo)((function(){return{open:r===x.Open}}),[r]),d={id:l},s=n;return(0,a.sY)({props:(0,o.gY)({},s,d),slot:c,defaultTag:"h2",name:"Dialog.Title"})},Description:I.d})}}]);