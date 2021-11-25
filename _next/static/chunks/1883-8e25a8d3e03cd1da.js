"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1883],{98332:function(e,t,r){r.d(t,{Z:function(){return l}});var n=r(67294),i=r(63153),s=r(32025),a=r(85893),o={information:{color:"bg-purple bg-opacity-20 text-high-emphesis",icon:(0,a.jsx)("svg",{width:"33",height:"33",className:"text-low-emphesis",viewBox:"0 0 33 33",xmlns:"http://www.w3.org/2000/svg",path:"currentColor",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{d:"M16.5 0C7.40184 0 0 7.40184 0 16.5C0 25.5982 7.40184 33 16.5 33C25.5982 33 33 25.5982 33 16.5C33 7.40184 25.5982 0 16.5 0ZM16.5 25.9909C15.5747 25.9909 14.8245 25.2407 14.8245 24.3154C14.8245 23.39 15.5747 22.6398 16.5 22.6398C17.4253 22.6398 18.1755 23.39 18.1755 24.3154C18.1755 25.2407 17.4253 25.9909 16.5 25.9909ZM18.1755 17.3898C18.1755 18.3152 17.4253 19.0654 16.5 19.0654C15.5747 19.0654 14.8245 18.3152 14.8245 17.3898V8.56534C14.8245 7.63999 15.5747 6.8898 16.5 6.8898C17.4253 6.8898 18.1755 7.63999 18.1755 8.56534V17.3898Z",fill:"#575757"})})},warning:{color:"bg-yellow bg-opacity-25 text-high-emphesis",icon:(0,a.jsx)("svg",{className:"w-5 h-5 text-yellow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",clipRule:"evenodd"})})},error:{color:"bg-red bg-opacity-25 text-high-emphesis",icon:(0,a.jsx)("svg",{className:"w-5 h-5 text-red",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:(0,a.jsx)("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",clipRule:"evenodd"})})}};function l(e){var t=e.title,r=e.message,l=e.type,d=void 0===l?"warning":l,c=e.className,m=void 0===c?"":c,u=e.showIcon,x=void 0!==u&&u,p=e.dismissable,h=void 0===p||p,f=(0,n.useState)(!0),v=f[0],g=f[1],y=o[d],b=y.color,k=y.icon;return r&&v?(0,a.jsxs)("div",{className:(0,s.AK)("block relative w-full rounded text-sm p-4",v&&"pr-10",b,m),children:[t&&(0,a.jsx)("div",{className:"mb-1 text-2xl font-medium",children:t}),(0,a.jsxs)("div",{className:"flex items-center",children:[x&&(0,a.jsx)("div",{className:"flex-shrink-0",children:k}),(0,a.jsx)("div",{className:x?"ml-3":"ml-0",children:(0,a.jsx)("p",{className:"text-base",children:r})})]}),h&&(0,a.jsx)("div",{className:"absolute top-2 right-2",children:(0,a.jsxs)("button",{type:"button",onClick:function(){return g(!v)},className:"inline-flex opacity-80 hover:opacity-100 focused:opacity-100 rounded p-1.5 text-primary hover:text-high-emphesis focus:text-high-emphesis focus:outline-none focus:ring focus:ring-offset focus:ring-offset-purple focus:ring-purple",children:[(0,a.jsx)("span",{className:"sr-only",children:"Dismiss"}),(0,a.jsx)(i.b0D,{className:"w-5 h-5","aria-hidden":"true"})]})})]}):null}},58165:function(e,t,r){r(67294);var n=r(85893),i={default:"",blue:"bg-blue bg-opacity-20 outline-blue rounded text-xs text-blue px-2 py-1",pink:"bg-pink bg-opacity-20 outline-pink rounded text-xs text-pink px-2 py-1",gradient:"bg-gradient-to-r from-blue to-pink opacity-80 hover:opacity-100 bg-pink bg-opacity-20 outline-pink rounded text-base text-white px-2 py-1"},s={default:"text-xs",medium:"text-sm",large:"text-lg"};t.ZP=function(e){var t=e.color,r=void 0===t?"default":t,a=e.size,o=void 0===a?"default":a,l=e.children,d=e.className,c=void 0===d?"":d;return(0,n.jsx)("div",{className:"".concat(i[r]," ").concat(s[o]," ").concat(c),children:l})}},49127:function(e,t,r){r.d(t,{x:function(){return a}});var n=r(67294),i=r(40588),s=r(85893);function a(e){var t=e.fiatValue,r=e.priceImpact,a=(0,n.useMemo)((function(){if(r){if(r.lessThan("0"))return"text-green";var e=(0,i.oX)(r);return e<1?"text-secondary":e<3?"text-yellow":"text-red"}}),[r]);return(0,s.jsxs)("div",{className:"flex justify-end space-x-1 text-xs font-medium text-right text-secondary",children:[t?(0,s.jsxs)(s.Fragment,{children:["\u2248$ ",(0,s.jsx)("div",{className:"cursor-pointer",children:null===t||void 0===t?void 0:t.toSignificant(6,{groupSeparator:","})})]}):"",r?(0,s.jsxs)("span",{className:a,children:[r.multiply(-1).toSignificant(3),"%"]}):null]})}},73929:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(67294),i=r(32025),s=r(71862),a=r(63801),o=r(26368),l=r(8244),d=r(66223),c=r(49127),m=r(69260),u=r.n(m),x=r(20651),p=r(134),h=r(11178),f=r(98950),v=r(85169),g=r(85893);function y(e){var t=e.value,r=e.onUserInput,m=e.onMax,y=e.showMaxButton,b=e.label,k=void 0===b?"Input":b,j=e.onCurrencySelect,w=e.currency,C=e.disableCurrencySelect,N=void 0!==C&&C,S=e.otherCurrency,O=e.id,_=e.showCommonBases,Z=e.renderBalance,A=e.fiatValue,P=e.priceImpact,D=e.hideBalance,E=void 0!==D&&D,B=e.pair,I=void 0===B?null:B,T=e.hideInput,M=void 0!==T&&T,V=(e.locked,e.customBalanceText,e.allowManageTokenList),z=void 0===V||V,$=e.showSearch,L=void 0===$||$,q=(0,v.mV)().i18n,H=(0,n.useState)(!1),W=H[0],U=H[1],F=(0,h.a)().account,G=(0,f._h)(null!==F&&void 0!==F?F:void 0,null!==w&&void 0!==w?w:void 0),K=(0,n.useCallback)((function(){U(!1)}),[U]);return(0,g.jsxs)("div",{id:O,className:(0,i.AK)(M?"p-4":"p-5","rounded bg-dark-800"),children:[(0,g.jsxs)("div",{className:"flex flex-col justify-between space-y-3 sm:space-y-0 sm:flex-row",children:[(0,g.jsx)("div",{className:(0,i.AK)("w-full sm:w-2/5"),children:(0,g.jsx)("button",{type:"button",className:(0,i.AK)(w?"text-primary":"text-high-emphesis","open-currency-select-button h-full outline-none select-none cursor-pointer border-none text-xl font-medium items-center"),onClick:function(){j&&U(!0)},children:(0,g.jsxs)("div",{className:"flex",children:[I?(0,g.jsx)(d.Z,{currency0:I.token0,currency1:I.token1,size:54,margin:!0}):w?(0,g.jsx)("div",{className:"flex items-center",children:(0,g.jsx)(o.Z,{currency:w,size:"54px"})}):(0,g.jsx)("div",{className:"rounded bg-dark-700",style:{maxWidth:54,maxHeight:54},children:(0,g.jsx)("div",{style:{width:54,height:54},children:(0,g.jsx)(u(),{animationData:p,autoplay:!0,loop:!0})})}),I?(0,g.jsxs)("span",{className:(0,i.AK)("pair-name-container",Boolean(w&&w.symbol)?"text-2xl":"text-xs"),children:[null===I||void 0===I?void 0:I.token0.symbol,":",null===I||void 0===I?void 0:I.token1.symbol]}):(0,g.jsxs)("div",{className:"flex flex-1 flex-col items-start justify-center mx-3.5",children:[k&&(0,g.jsx)("div",{className:"text-xs font-medium text-secondary whitespace-nowrap",children:k}),(0,g.jsxs)("div",{className:"flex items-center",children:[(0,g.jsx)("div",{className:"text-lg font-bold token-symbol-container md:text-2xl",children:(w&&w.symbol&&w.symbol.length>20?w.symbol.slice(0,4)+"..."+w.symbol.slice(w.symbol.length-5,w.symbol.length):null===w||void 0===w?void 0:w.symbol)||(0,g.jsx)("div",{className:"px-2 py-1 mt-1 text-xs font-medium bg-transparent border rounded-full hover:bg-primary border-low-emphesis text-secondary whitespace-nowrap ",children:q._(q._("Select a token"))})}),!N&&w&&(0,g.jsx)(a.v4q,{width:16,height:16,className:"ml-2 stroke-current"})]})]})]})})}),!M&&(0,g.jsx)("div",{className:(0,i.AK)("flex items-center w-full space-x-3 rounded bg-dark-900 focus:bg-dark-700 p-3 sm:w-3/5"),children:(0,g.jsxs)(g.Fragment,{children:[y&&G&&(0,g.jsx)(s.ZP,{onClick:m,size:"xs",className:"text-xs font-medium bg-transparent border rounded-full hover:bg-primary border-low-emphesis text-secondary whitespace-nowrap",children:q._(q._("Max"))}),(0,g.jsx)(x.I,{id:"token-amount-input",value:t,onUserInput:function(e){r(e)}}),!E&&w&&G?(0,g.jsxs)("div",{className:"flex flex-col",children:[(0,g.jsx)("div",{onClick:m,className:"text-xs font-medium text-right cursor-pointer text-low-emphesis",children:Z?Z(G):(0,g.jsxs)(g.Fragment,{children:[q._(q._("Balance:"))," ",(0,i.ZO)(G,4)," ",w.symbol]})}),(0,g.jsx)(c.x,{fiatValue:A,priceImpact:P})]}):null]})})]}),!N&&j&&(0,g.jsx)(l.Z,{isOpen:W,onDismiss:K,onCurrencySelect:j,selectedCurrency:w,otherSelectedCurrency:S,showCommonBases:_,allowManageTokenList:z,hideBalance:E,showSearch:L})]})}},3382:function(e,t,r){var n=r(59359),i=r(32025),s=r(85893);t.Z=function(e){var t=e.children,r=e.className;return n.tq?(0,s.jsx)("div",{className:"shadow-swap",children:t}):(0,s.jsxs)("div",{className:(0,i.AK)(r,"relative w-full max-w-2xl"),children:[(0,s.jsx)("div",{className:"absolute top-1/4 -left-10 bg-blue bottom-4 w-3/5 rounded-full z-0 filter blur-[150px]"}),(0,s.jsx)("div",{className:"absolute bottom-1/4 -right-10 bg-pink top-4 w-3/5 rounded-full z-0  filter blur-[150px]"}),(0,s.jsx)("div",{className:"relative filter drop-shadow",children:t})]})}},66223:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(26368),i=(r(67294),r(32025)),s=r(85893);function a(e){var t=e.currency0,r=e.currency1,a=e.className,o=void 0===a?"":a,l=e.logoClassName,d=void 0===l?"":l,c=e.size,m=void 0===c?16:c;return(0,s.jsxs)("div",{className:(0,i.AK)("flex items-center space-x-2",o),children:[(0,s.jsx)(n.Z,{className:d,currency:t,size:m.toString()+"px"}),(0,s.jsx)(n.Z,{className:d,currency:r,size:m.toString()+"px"})]})}},87584:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(84772),i=r(67294),s=r(82515),a=r(85169),o=r(85893);var l=function(){var e=(0,a.mV)().i18n,t=(0,s.ZP)("https://ethgasstation.info/api/ethgasAPI.json?",(function(e){return fetch(e).then((function(e){return e.json()}))})),r=t.data;return t.error?(0,o.jsx)("div",{children:e._(e._("failed to load"))}):r?(0,o.jsx)("div",{children:r.average/10}):(0,o.jsx)("div",{children:e._(e._("loading..."))})},d=r(64958),c=r(98595),m=r(32025),u=r(61885),x=r(11163),p=r(58165),h=r(45742),f=r(63801),v=function(){var e=(0,a.mV)().i18n,t=(0,h.Z)().pending;return(0,o.jsx)(d.Z,{href:"/open-order",children:(0,o.jsxs)("a",{className:"text-secondary hover:text-high-emphesis",children:[(0,o.jsxs)("div",{className:"md:flex hidden gap-3 items-center",children:[(0,o.jsx)("div",{children:e._(e._("My Orders"))}),(0,o.jsx)(p.ZP,{color:"blue",children:t.totalOrders})]}),(0,o.jsx)("div",{className:"flex md:hidden text-primary",children:(0,o.jsx)(f.zTD,{className:"w-[26px] h-[26px]"})})]})})},g=function(e,t){if(e||t)return e&&!t?{inputCurrency:e.address||"ETH"}:e&&t?{inputCurrency:e.address,outputCurrency:t.address}:void 0},y=function(e){var t=e.input,r=e.output,s=e.allowedSlippage,p=(0,a.mV)().i18n,h=(0,u.aQ)().chainId,f=(0,x.useRouter)(),y=(0,i.useState)(!1),b=(y[0],y[1],f.asPath.startsWith("/remove")),k=f.asPath.startsWith("/limit-order");return(0,o.jsxs)("div",{className:"flex justify-between mb-4 space-x-3 items-center",children:[(0,o.jsxs)("div",{className:"grid grid-cols-3 rounded p-3px bg-dark-800 h-[46px]",children:[(0,o.jsx)(d.Z,{activeClassName:"font-bold border rounded text-high-emphesis border-dark-800 bg-gradient-to-r from-opaque-blue to-opaque-pink hover:from-blue hover:to-pink",href:{pathname:"/swap",query:g(t,r)},children:(0,o.jsx)("a",{className:"flex items-center justify-center px-4 text-base font-medium text-center rounded-md text-secondary hover:text-high-emphesis",children:p._(p._("Swap"))})}),(0,o.jsx)(d.Z,{activeClassName:"font-bold border rounded text-high-emphesis border-dark-800 bg-gradient-to-r from-opaque-blue to-opaque-pink hover:from-blue hover:to-pink",href:{pathname:"/limit-order",query:g(t,r)},children:(0,o.jsx)("a",{className:"flex items-center justify-center px-4 text-base font-medium text-center rounded-md text-secondary hover:text-high-emphesis",children:p._(p._("Limit"))})}),(0,o.jsx)(d.Z,{activeClassName:"font-bold border rounded text-high-emphesis border-dark-800 bg-gradient-to-r from-opaque-blue to-opaque-pink hover:from-blue hover:to-pink",href:"/".concat(b?"remove":"add").concat(t?"/".concat((0,m.Hh)(t)):"").concat(r?"/".concat((0,m.Hh)(r)):""),children:(0,o.jsx)("a",{className:"flex items-center justify-center px-4 text-base font-medium text-center rounded-md text-secondary hover:text-high-emphesis",children:p._(p._("Liquidity"))})})]}),(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsxs)("div",{className:"grid grid-flow-col gap-1",children:[k&&(0,o.jsx)("div",{className:"items-center h-full w-full cursor-pointer hover:bg-dark-800 rounded px-3 py-1.5",children:(0,o.jsx)(v,{})}),h===n.a_.MAINNET&&(0,o.jsxs)("div",{className:" text-green text-opacity-80 hover:text-opacity-100 hidden md:flex space-x-3 items-center hover:bg-dark-800 rounded h-full w-full px-3 cursor-pointer",children:[(0,o.jsx)("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,o.jsx)("path",{d:"M13.5215 0.618164L12.6818 1.57302L15.933 4.37393V13.2435C15.9114 13.6891 15.5239 14.0498 15.0502 14.0286C14.6196 14.0074 14.2751 13.6679 14.2536 13.2435V7.28093C14.2536 6.21998 13.3923 5.37122 12.3158 5.37122H11.8421V2.67641C11.8421 1.61546 10.9808 0.766697 9.90428 0.766697H1.93779C0.861242 0.766697 0 1.61546 0 2.67641V18.4421C0 18.9089 0.387559 19.2909 0.861242 19.2909H10.9808C11.4545 19.2909 11.8421 18.9089 11.8421 18.4421V6.64436H12.3158C12.6818 6.64436 12.9617 6.92021 12.9617 7.28093V13.2435C13.0048 14.4105 13.9737 15.3017 15.1579 15.2805C16.2775 15.2381 17.1818 14.3469 17.2248 13.2435V3.80102L13.5215 0.618164ZM9.66744 8.89358H2.17464V3.10079H9.66744V8.89358Z",fill:"#7CFF6B"})}),(0,o.jsx)("div",{className:"hidden md:block  text-baseline",children:(0,o.jsx)(l,{})})]}),(0,o.jsx)("div",{className:"relative w-full h-full rounded hover:bg-dark-800 flex items-center",children:(0,o.jsx)(c.Z,{placeholderSlippage:s})})]})})]})}},20651:function(e,t,r){r.d(t,{I:function(){return u}});var n=r(4942),i=r(45987),s=r(32025),a=r(67294),o=r(85893),l=["value","onUserInput","placeholder","className"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=RegExp("^\\d*(?:\\\\[.])?\\d*$"),u=a.memo((function(e){var t=e.value,r=e.onUserInput,n=e.placeholder,a=e.className,d=void 0===a?"w-0 p-0 text-2xl bg-transparent":a,u=(0,i.Z)(e,l);return(0,o.jsx)("input",c(c({},u),{},{value:t,onChange:function(e){var t;(""===(t=e.target.value.replace(/,/g,"."))||m.test((0,s.hr)(t)))&&r(t)},inputMode:"decimal",title:"Token Amount",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:n||"0.0",min:0,minLength:1,maxLength:79,spellCheck:"false",className:(0,s.AK)("relative font-bold outline-none border-none flex-auto overflow-hidden overflow-ellipsis placeholder-low-emphesis focus:placeholder-primary",d)}))}));u.displayName="NumericalInput"},78787:function(e,t,r){r.d(t,{Z:function(){return b}});var n,i=r(30168),s=r(14202),a=r(67294),o=r(73957),l=r(71862),d=r(3768),c=r(26368),m=r(50442),u=r(32481),x=r(84293),p=r(87379),h=r(11178),f=r(62483),v=r(85893),g=p.ZP.div.withConfig({displayName:"UnsupportedCurrencyFooter__DetailsFooter",componentId:"sc-16au0zd-0"})(["padding-top:calc(16px + 2rem);padding-bottom:20px;margin-top:-2rem;width:100%;border-bottom-left-radius:20px;border-bottom-right-radius:20px;z-index:-1;transform:",";transition:transform 300ms ease-in-out;text-align:center;"],(function(e){return e.show?"translateY(0%)":"translateY(-100%)"})),y=p.ZP.div.withConfig({displayName:"UnsupportedCurrencyFooter__AddressText",componentId:"sc-16au0zd-1"})(["font-size:12px;",""],(function(e){return e.theme.mediaWidth.upToSmall(n||(n=(0,i.Z)(["\n    font-size: 10px;\n"])))}));function b(e){var t=e.show,r=e.currencies,n=(0,h.a)().chainId,i=(0,a.useState)(!1),p=i[0],b=i[1],k=n&&r?r.map((function(e){return null===e||void 0===e?void 0:e.wrapped})):[],j=(0,f.l6)();return(0,v.jsxs)(g,{show:t,children:[(0,v.jsx)(u.Z,{isOpen:p,onDismiss:function(){return b(!1)},children:(0,v.jsx)("div",{style:{padding:"2rem"},children:(0,v.jsxs)(o.Tz,{gap:"lg",children:[(0,v.jsxs)(s.m0,{children:[(0,v.jsx)("div",{children:"Unsupported Assets"}),(0,v.jsx)(d.Z,{onClick:function(){return b(!1)}})]}),k.map((function(e){var t;return e&&j&&Object.keys(j).includes(e.address)&&(0,v.jsx)("div",{className:"border border-dark-700",children:(0,v.jsxs)(o.Tz,{gap:"10px",children:[(0,v.jsxs)(s.BA,{gap:"5px",align:"center",children:[(0,v.jsx)(c.Z,{currency:e,size:"24px"}),(0,v.jsx)("div",{className:"font-medium",children:e.symbol})]}),n&&(0,v.jsx)(m.Z,{href:(0,x.E)(n,e.address,"address"),children:(0,v.jsx)(y,{children:e.address})})]})},null===(t=e.address)||void 0===t?void 0:t.concat("not-supported"))})),(0,v.jsx)(o.Tz,{gap:"lg",children:(0,v.jsx)("div",{className:"font-medium",children:"Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons."})})]})})}),(0,v.jsx)(l.ZP,{variant:"empty",style:{padding:"0px"},onClick:function(){return b(!0)},children:(0,v.jsx)("div",{children:"Read more about unsupported assets"})})]})}},46847:function(e,t,r){r.d(t,{G:function(){return s}});var n=r(67294),i=r(62483);function s(e,t){var r=(0,i.l6)();return(0,n.useMemo)((function(){return Boolean(r&&((null===e||void 0===e?void 0:e.isToken)&&r[e.address]||(null===t||void 0===t?void 0:t.isToken)&&r[t.address]))}),[e,t,r])}},45742:function(e,t,r){var n=r(15861),i=r(4942),s=r(87757),a=r.n(s),o=r(61885),l=r(82515),d=r(75592),c=r(2593),m=r(67294),u=r(84772),x=r(62483);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:18;return u.QA.exponentiate(u.QA.BigInt(10),u.QA.BigInt(e))},v="".concat(d.Zu,"/orders/view"),g=function(e,t,r,n,i){return fetch(e,{method:"POST",body:JSON.stringify({address:t,chainId:r,page:i,pendingPage:n})}).then((function(e){return e.json()})).then((function(e){return e.data}))};t.Z=function(){var e=(0,o.aQ)(),t=e.account,r=e.chainId,i=(0,o.JY)(),s=(0,x.e_)(),p=(0,m.useState)({pending:{page:1,maxPages:null,data:[],loading:!0,totalOrders:0},completed:{page:1,maxPages:null,data:[],loading:!0,totalOrders:0}}),y=p[0],b=p[1],k=(0,m.useMemo)((function(){return v&&t&&r?[v,t,r,y.pending.page,y.completed.page]:null}),[t,r,y.completed.page,y.pending.page]),j=(0,l.ZP)(k,g),w=j.data,C=j.mutate,N=(0,m.useCallback)((function(e){b((function(t){return h(h({},t),{},{pending:h(h({},t.pending),{},{page:e,loading:!0})})}))}),[]),S=(0,m.useCallback)((function(e){b((function(t){return h(h({},t),{},{completed:h(h({},t.completed),{},{page:e,loading:!0})})}))}),[]);return(0,m.useEffect)((function(){if(t&&r&&w&&w.pendingOrders&&w.otherOrders&&Array.isArray(w.pendingOrders.orders)&&Array.isArray(w.otherOrders.orders)){var e=function(){var e=(0,n.Z)(a().mark((function e(t){var n,i,o,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=d.eN.getLimitOrder(h(h({},t),{},{chainId:+t.chainId,tokenInDecimals:+t.tokenInDecimals,tokenOutDecimals:+t.tokenOutDecimals})),i=n.amountIn.currency,o=n.amountOut.currency,l={tokenIn:s[i.address]||new u.WU(r,i.address.toLowerCase(),i.decimals,i.symbol),tokenOut:s[o.address]||new u.WU(r,o.address.toLowerCase(),o.decimals,o.symbol),limitOrder:n,filledPercent:t.filledAmount?t.filledAmount.mul(c.O$.from("100")).div(c.O$.from(t.amountIn)).toString():"0",status:t.status,rate:new u.gG(n.amountOut.quotient,f(o.decimals)).divide(new u.gG(n.amountIn.quotient,f(i.decimals))).divide(f(2)).toSignificant(6)},e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();(0,n.Z)(a().mark((function t(){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(w.pendingOrders.orders.map((function(t){return e(t)})));case 2:return r=t.sent,t.next=5,Promise.all(w.otherOrders.orders.map((function(t){return e(t)})));case 5:n=t.sent,b((function(e){return{pending:h(h({},e.pending),{},{data:r,maxPages:w.pendingOrders.pendingOrderMaxPage,loading:!1,totalOrders:w.pendingOrders.totalPendingOrders}),completed:h(h({},e.completed),{},{data:n,maxPages:w.otherOrders.maxPage,loading:!1,totalOrders:w.otherOrders.totalOrders})}}));case 7:case"end":return t.stop()}}),t)})))()}}),[t,r,w,i,N,S]),(0,m.useMemo)((function(){return h(h({},y),{},{pending:h(h({},y.pending),{},{setPage:N}),completed:h(h({},y.completed),{},{setPage:S}),mutate:C})}),[C,S,N,y])}},74272:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(16339),i=r(47083),s=r(1569);var a=r(67294);function o(){var e=(0,n.C)((function(e){return e.user.userDeadline})),t=function(){var e,t,r=(0,i.Fe)();return null===(e=(0,s.Wk)(r,"getCurrentBlockTimestamp"))||void 0===e||null===(t=e.result)||void 0===t?void 0:t[0]}();return(0,a.useMemo)((function(){if(t&&e)return t.add(e)}),[t,e])}},7793:function(e,t,r){r.d(t,{pM:function(){return w},ht:function(){return C},ZP:function(){return N}});var n=r(99548),i=r(84501),s=r(67294),a=r(71862),o=r(3768),l=r(50442),d=r(68482),c=r(69260),m=r.n(c),u=r(32481),x=r(92289),p=r(14202),h=r(84293),f=JSON.parse('{"v":"5.6.10","fr":24,"ip":0,"op":72,"w":500,"h":500,"nm":"339-loader-10","ddd":0,"assets":[{"id":"comp_0","layers":[]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"Watermark","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2},"a":{"a":0,"k":[250,250,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"tm":{"a":0,"k":0.292,"ix":2},"w":500,"h":500,"ip":0,"op":500,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":3,"nm":"Color  & Stroke Change","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ef":[{"ty":5,"nm":"Primary","np":3,"mn":"ADBE Color Control","ix":1,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0.886,0.886,0.886],"ix":1}}]},{"ty":5,"nm":"Secondary","np":3,"mn":"ADBE Color Control","ix":2,"en":1,"ef":[{"ty":2,"nm":"Color","mn":"ADBE Color Control-0001","ix":1,"v":{"a":0,"k":[0,0.714,0.945],"ix":1}}]},{"ty":5,"nm":"Stroke","np":3,"mn":"ADBE Slider Control","ix":3,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":112,"ix":1}}]},{"ty":5,"nm":"Scale","np":3,"mn":"ADBE Slider Control","ix":4,"en":1,"ef":[{"ty":0,"nm":"Slider","mn":"ADBE Slider Control-0001","ix":1,"v":{"a":0,"k":100,"ix":1}}]},{"ty":5,"nm":"Axis","np":3,"mn":"ADBE Point Control","ix":5,"en":1,"ef":[{"ty":3,"nm":"Point","mn":"ADBE Point Control-0001","ix":1,"v":{"a":0,"k":[250,250],"ix":1}}]}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":3,"nm":"NULL 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250,250,0],"ix":2,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Axis\')(\'Point\');"},"a":{"a":0,"k":[60,60,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6,"x":"var $bm_rt;\\nvar temp;\\ntemp = thisComp.layer(\'Color  & Stroke Change\').effect(\'Scale\')(\'Slider\');\\n$bm_rt = [\\n    temp,\\n    temp\\n];"}},"ao":0,"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"Shape Layer 3","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.562],"y":[0.589]},"o":{"x":[0.195],"y":[0.225]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.8]},"o":{"x":[0.31],"y":[0.311]},"t":18,"s":[185.773]},{"i":{"x":[0.69],"y":[0.686]},"o":{"x":[0.167],"y":[0.198]},"t":36,"s":[359.73]},{"i":{"x":[0.805],"y":[0.774]},"o":{"x":[0.438],"y":[0.415]},"t":54,"s":[533.78]},{"t":72,"s":[720]}],"ix":10},"p":{"a":0,"k":[0,23.125,0],"ix":2},"a":{"a":0,"k":[0,23.125,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[20,20],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,33.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-1,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"Shape Layer 2","parent":6,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.21],"y":[0.543]},"o":{"x":[0.167],"y":[0.397]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.602]},"o":{"x":[0.79],"y":[0.46]},"t":18,"s":[90]},{"i":{"x":[0.21],"y":[0.539]},"o":{"x":[0.167],"y":[0.398]},"t":36,"s":[180]},{"i":{"x":[0.833],"y":[0.601]},"o":{"x":[0.79],"y":[0.462]},"t":54,"s":[270]},{"t":72,"s":[360]}],"ix":10},"p":{"a":0,"k":[0,0,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[46,46],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Secondary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,23.125],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":-1,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"Shape Layer 1","parent":3,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.21],"y":[0.543]},"o":{"x":[0.167],"y":[0.397]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.602]},"o":{"x":[0.79],"y":[0.46]},"t":18,"s":[90]},{"i":{"x":[0.21],"y":[0.539]},"o":{"x":[0.167],"y":[0.398]},"t":36,"s":[180]},{"i":{"x":[0.833],"y":[0.601]},"o":{"x":[0.79],"y":[0.462]},"t":54,"s":[270]},{"t":72,"s":[360]}],"ix":10},"p":{"a":0,"k":[60,60,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[430,430,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[100,100],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0.070588235294,0.074509803922,0.192156877705,1],"ix":3,"x":"var $bm_rt;\\n$bm_rt = thisComp.layer(\'Color  & Stroke Change\').effect(\'Primary\')(\'Color\');"},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":4,"ix":5,"x":"var $bm_rt;\\n$bm_rt = $bm_mul(4 / 100, thisComp.layer(\'Color  & Stroke Change\').effect(\'Stroke\')(\'Slider\'));"},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":120,"st":0,"bm":0}],"markers":[]}'),v=r(11178),g=r(26368);var y=r(85169),b=r(85893),k=function(e){var t=e.onDismiss,r=e.pendingText,n=e.pendingText2,i=(0,y.mV)().i18n;return(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"flex justify-end",children:(0,b.jsx)(o.Z,{onClick:t})}),(0,b.jsx)("div",{className:"w-24 pb-4 m-auto",children:(0,b.jsx)(m(),{animationData:f,autoplay:!0,loop:!0})}),(0,b.jsxs)("div",{className:"flex flex-col items-center justify-center gap-3",children:[(0,b.jsx)("div",{className:"text-xl font-bold text-high-emphesis",children:i._(i._("Waiting for Confirmation"))}),(0,b.jsx)("div",{className:"font-bold",children:r}),(0,b.jsx)("div",{className:"font-bold",children:n}),(0,b.jsx)("div",{className:"text-sm font-bold text-secondary",children:i._(i._("Confirm this transaction in your wallet"))})]})]})},j=function(e){var t,r=e.onDismiss,i=e.chainId,c=e.hash,m=e.currencyToAdd,u=(0,y.mV)().i18n,x=(0,v.a)().library,f=function(e){var t=(0,v.a)(),r=t.chainId,n=t.library,i=null===e||void 0===e?void 0:e.wrapped,a=(0,s.useState)(),o=a[0],l=a[1];return{addToken:(0,s.useCallback)((function(){n&&n.provider.isMetaMask&&n.provider.request&&i?n.provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:i.address,symbol:i.symbol,decimals:i.decimals,image:(0,g.a)(i.address,r)}}}).then((function(e){l(e)})).catch((function(){return l(!1)})):l(!1)}),[r,n,i]),success:o}}(m),k=f.addToken,j=f.success;return(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"flex justify-end",children:(0,b.jsx)(o.Z,{onClick:r})}),(0,b.jsx)("div",{className:"w-24 pb-4 m-auto",children:(0,b.jsx)(n.Z,{strokeWidth:.5,size:90,className:"text-blue"})}),(0,b.jsxs)("div",{className:"flex flex-col items-center justify-center gap-1",children:[(0,b.jsx)("div",{className:"text-xl font-bold",children:u._(u._("Transaction Submitted"))}),i&&c&&(0,b.jsx)(l.Z,{href:(0,h.E)(i,c,"transaction"),children:(0,b.jsx)("div",{className:"font-bold text-blue",children:"View on explorer"})}),m&&(null===x||void 0===x||null===(t=x.provider)||void 0===t?void 0:t.isMetaMask)&&(0,b.jsx)(a.ZP,{color:"gradient",onClick:k,className:"w-auto mt-4",children:j?(0,b.jsxs)(p.DA,{children:[u._(u._("Added"))," ",m.symbol]}):(0,b.jsxs)(p.DA,{className:"mx-auto space-x-2",children:[(0,b.jsx)("span",{children:u._(u._("Add {0} to MetaMask",{0:m.symbol}))}),(0,b.jsx)(d.Z,{src:"/images/wallets/metamask.png",alt:u._(u._("Add {0} to MetaMask",{0:m.symbol})),width:24,height:24,className:"ml-1"})]})})]})]})},w=function(e){var t=e.title,r=e.bottomContent,n=e.onDismiss,i=e.topContent;return(0,b.jsxs)("div",{className:"grid gap-4",children:[(0,b.jsx)(x.Z,{title:t,onClose:n}),i(),r()]})},C=function(e){var t=e.message,r=e.onDismiss,n=(0,y.mV)().i18n;return(0,b.jsxs)("div",{className:"grid gap-6",children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("div",{className:"flex justify-between",children:[(0,b.jsx)("div",{className:"text-lg font-medium text-high-emphesis",children:n._(n._("Error"))}),(0,b.jsx)(o.Z,{onClick:r})]}),(0,b.jsxs)("div",{className:"flex flex-col items-center justify-center gap-3",children:[(0,b.jsx)(i.Z,{className:"text-red",style:{strokeWidth:1.5},size:64}),(0,b.jsx)("div",{className:"font-bold text-red",children:t})]})]}),(0,b.jsx)("div",{children:(0,b.jsx)(a.ZP,{color:"gradient",size:"lg",onClick:r,children:"Dismiss"})})]})},N=function(e){var t=e.isOpen,r=e.onDismiss,n=e.attemptingTxn,i=e.hash,s=e.pendingText,a=e.pendingText2,o=e.content,l=e.currencyToAdd,d=(0,v.a)().chainId;return d?(0,b.jsx)(u.Z,{isOpen:t,onDismiss:r,maxHeight:90,children:n?(0,b.jsx)(k,{onDismiss:r,pendingText:s,pendingText2:a}):i?(0,b.jsx)(j,{chainId:d,hash:i,onDismiss:r,currencyToAdd:l}):o()}):null}}}]);