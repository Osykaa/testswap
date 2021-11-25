"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1316],{78999:function(s,a,e){e.d(a,{_:function(){return h},b:function(){return m}});var o=e(19642),t=e(67294),n=e(58529),c=e(60852),d=e(92506),i=(0,t.createContext)(null);function r(){var s=(0,t.useContext)(i);if(null===s){var a=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,r),a}return s}function m(){var s=(0,t.useState)([]),a=s[0],e=s[1];return[a.length>0?a.join(" "):void 0,(0,t.useMemo)((function(){return function(s){var a=(0,t.useCallback)((function(s){return e((function(a){return[].concat(a,[s])})),function(){return e((function(a){var e=a.slice(),o=e.indexOf(s);return-1!==o&&e.splice(o,1),e}))}}),[]),o=(0,t.useMemo)((function(){return{register:a,slot:s.slot,name:s.name,props:s.props}}),[a,s.slot,s.name,s.props]);return t.createElement(i.Provider,{value:o},s.children)}}),[e])]}function h(s){var a=s.passive,e=void 0!==a&&a,t=(0,o.gK)(s,["passive"]),i=r(),m="headlessui-label-"+(0,d.M)();(0,c.e)((function(){return i.register(m)}),[m,i.register]);var h=(0,o.gY)({},i.props,{id:m}),l=(0,o.gY)({},t,h);return e&&delete l.onClick,(0,n.sY)({props:l,slot:i.slot||{},defaultTag:"label",name:i.name||"Label"})}},85460:function(s,a,e){e.d(a,{r:function(){return g}});var o=e(19642),t=e(67294),n=e(58529),c=e(57471),d=e(62659),i=e(79016),r=e(92506),m=e(87587),h=e(56637),l=e(78999),p=(0,t.createContext)(null);p.displayName="GroupContext";var u=t.Fragment;function g(s){var a=s.checked,e=s.onChange,m=(0,o.gK)(s,["checked","onChange"]),l="headlessui-switch-"+(0,r.M)(),u=(0,t.useContext)(p),g=(0,t.useRef)(null),b=(0,c.T)(g,null===u?null:u.setSwitch),D=(0,t.useCallback)((function(){return e(!a)}),[e,a]),I=(0,t.useCallback)((function(s){if((0,i.P)(s.currentTarget))return s.preventDefault();s.preventDefault(),D()}),[D]),A=(0,t.useCallback)((function(s){s.key!==d.R.Tab&&s.preventDefault(),s.key===d.R.Space&&D()}),[D]),C=(0,t.useCallback)((function(s){return s.preventDefault()}),[]),E=(0,t.useMemo)((function(){return{checked:a}}),[a]),w={id:l,ref:b,role:"switch",type:(0,h.f)(s,g),tabIndex:0,"aria-checked":a,"aria-labelledby":null==u?void 0:u.labelledby,"aria-describedby":null==u?void 0:u.describedby,onClick:I,onKeyUp:A,onKeyPress:C};return(0,n.sY)({props:(0,o.gY)({},m,w),slot:E,defaultTag:"button",name:"Switch"})}g.Group=function(s){var a=(0,t.useState)(null),e=a[0],o=a[1],c=(0,l.b)(),d=c[0],i=c[1],r=(0,m.f)(),h=r[0],g=r[1],b=(0,t.useMemo)((function(){return{switch:e,setSwitch:o,labelledby:d,describedby:h}}),[e,o,d,h]);return t.createElement(g,{name:"Switch.Description"},t.createElement(i,{name:"Switch.Label",props:{onClick:function(){e&&(e.click(),e.focus({preventScroll:!0}))}}},t.createElement(p.Provider,{value:b},(0,n.sY)({props:s,defaultTag:u,name:"Switch.Group"}))))},g.Label=l._,g.Description=m.d},99140:function(s){s.exports=JSON.parse('{"X":{"137":[[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"}],[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"}],[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"Dai Stablecoin","address":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063","symbol":"DAI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg"}],[{"name":"Wrapped BTC","address":"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6","symbol":"WBTC","decimals":8,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"Tether USD","address":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F","symbol":"USDT","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"IRON Stablecoin","address":"0xD86b5923F3AD7b585eD81B448170ae026c65ae9a","symbol":"IRON","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xD86b5923F3AD7b585eD81B448170ae026c65ae9a/logo.png"}],[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"Tether USD","address":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F","symbol":"USDT","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"Dai Stablecoin","address":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063","symbol":"DAI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg"}],[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"Aave","address":"0xD6DF932A45C0f255f85145f286eA0b292B21C90B","symbol":"AAVE","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/aave.jpg"}],[{"name":"ChainLink Token","address":"0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39","symbol":"LINK","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/link.jpg"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"Frax","address":"0x104592a158490a9228070E0A8e5343B499e125D0","symbol":"FRAX","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x104592a158490a9228070E0A8e5343B499e125D0/logo.png"},{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Fish","address":"0x3a3Df212b7AA91Aa0402B9035b098891d276572B","symbol":"FISH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x3a3Df212b7AA91Aa0402B9035b098891d276572B/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"IRON Titanium","address":"0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A","symbol":"TITAN","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A/logo.png"}],[{"name":"Curve","address":"0x172370d5Cd63279eFa6d502DAB29171933a610AF","symbol":"CRV","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/crv.jpg"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"Synthetix Network Token","address":"0x50B728D8D964fd00C2d0AAD81718b71311feF68a","symbol":"SNX","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/snx.jpg"},{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"}],[{"name":"Frax","address":"0x104592a158490a9228070E0A8e5343B499e125D0","symbol":"FRAX","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x104592a158490a9228070E0A8e5343B499e125D0/logo.png"},{"name":"Frax Share","address":"0x3e121107F6F22DA4911079845a470757aF4e1A1b","symbol":"FXS","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x3e121107F6F22DA4911079845a470757aF4e1A1b/logo.png"}],[{"name":"SushiToken","address":"0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a","symbol":"SUSHI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/sushi.jpg"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"Graph Token","address":"0x5fe2B58c013d7601147DcdD68C143A77499f5531","symbol":"GRT","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/grt.jpg"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"Wrapped BTC","address":"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6","symbol":"WBTC","decimals":8,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg"},{"name":"Interest-Bearing BTC","address":"0x4EaC4c4e9050464067D673102F8E24b2FccEB350","symbol":"ibBTC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x4EaC4c4e9050464067D673102F8E24b2FccEB350/logo.png"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"PUSD","address":"0x9aF3b7DC29D3C4B1A5731408B6A9656fA7aC3b72","symbol":"PUSD","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x9aF3b7DC29D3C4B1A5731408B6A9656fA7aC3b72/logo.png"}],[{"name":"dHEDGE Top Index","address":"0x0361BdEAB89DF6BBcc52c43589FABba5143d19dD","symbol":"dTOP","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x0361BdEAB89DF6BBcc52c43589FABba5143d19dD/logo.png"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"Synthetix Network Token","address":"0x50B728D8D964fd00C2d0AAD81718b71311feF68a","symbol":"SNX","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/snx.jpg"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"dHedge DAO Token","address":"0x8C92e38eCA8210f4fcBf17F0951b198Dd7668292","symbol":"DHT","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x8C92e38eCA8210f4fcBf17F0951b198Dd7668292/logo.png"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"SportX","address":"0x840195888Db4D6A99ED9F73FcD3B225Bb3cB1A79","symbol":"SX","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x840195888Db4D6A99ED9F73FcD3B225Bb3cB1A79/logo.png"}],[{"name":"Augury Finance","address":"0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E","symbol":"OMEN","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E/logo.png"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"Augury Finance","address":"0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E","symbol":"OMEN","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x76e63a3E7Ba1e2E61D3DA86a87479f983dE89a7E/logo.png"},{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"}],[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"Wrapped Filecoin","address":"0xEde1B77C0Ccc45BFa949636757cd2cA7eF30137F","symbol":"wFIL","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/fil.jpg"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"Beefy.finance","address":"0xFbdd194376de19a88118e84E279b977f165d01b8","symbol":"BIFI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xFbdd194376de19a88118e84E279b977f165d01b8/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Woofy","address":"0xD0660cD418a64a1d44E9214ad8e459324D8157f1","symbol":"WOOFY","decimals":12,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xD0660cD418a64a1d44E9214ad8e459324D8157f1/logo.png"}],[{"name":"SushiToken","address":"0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a","symbol":"SUSHI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/sushi.jpg"},{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"bZX PGOV Token","address":"0xd5d84e75f48E75f01fb2EB6dFD8eA148eE3d0FEb","symbol":"PGOV","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xd5d84e75f48E75f01fb2EB6dFD8eA148eE3d0FEb/logo.png"}],[{"name":"Ren DOGE","address":"0xcE829A89d4A55a63418bcC43F00145adef0eDB8E","symbol":"renDOGE","decimals":8,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/doge.jpg"},{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"BONE Token","address":"0x6bb45cEAC714c52342Ef73ec663479da35934bf7","symbol":"BONE","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x6bb45cEAC714c52342Ef73ec663479da35934bf7/logo.png"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"BONE Token","address":"0x6bb45cEAC714c52342Ef73ec663479da35934bf7","symbol":"BONE","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x6bb45cEAC714c52342Ef73ec663479da35934bf7/logo.png"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"SushiToken","address":"0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a","symbol":"SUSHI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/sushi.jpg"}],[{"name":"ChainLink Token","address":"0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39","symbol":"LINK","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/link.jpg"},{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Dai Stablecoin","address":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063","symbol":"DAI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg"}],[{"name":"Tether USD","address":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F","symbol":"USDT","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg"},{"name":"Dai Stablecoin","address":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063","symbol":"DAI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"address":"0xf5EA626334037a2cf0155D49eA6462fDdC6Eff19","chainId":137,"name":"PolygonFarm Finance","symbol":"SPADE","decimals":18,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xf5EA626334037a2cf0155D49eA6462fDdC6Eff19/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"address":"0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369","chainId":137,"name":"DefiPulse Index","symbol":"DPI","decimals":18,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x85955046DF4668e1DD369D2DE9f3AEB98DD2A369/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"address":"0x61E9c2F3501889f6167921087Bd6EA306002904a","chainId":137,"name":"Pixel","symbol":"PIXEL","decimals":18,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x61E9c2F3501889f6167921087Bd6EA306002904a/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Gemstones","address":"0x0d962A1A2A27B402e4D84772dea65Ac8592Eb6bF","symbol":"GMS","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x0d962A1A2A27B402e4D84772dea65Ac8592Eb6bF/logo.png"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"MAI","address":"0xa3Fa99A148fA48D14Ed51d610c367C61876997F1","symbol":"miMatic","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xa3Fa99A148fA48D14Ed51d610c367C61876997F1/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Tether USD","address":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F","symbol":"USDT","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Aave","address":"0xD6DF932A45C0f255f85145f286eA0b292B21C90B","symbol":"AAVE","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/aave.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Polaris Token","address":"0xdC3aCB92712D1D44fFE15d3A8D66d9d18C81e038","symbol":"POLAR","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xdC3aCB92712D1D44fFE15d3A8D66d9d18C81e038/logo.png"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"Polaris Token","address":"0xdC3aCB92712D1D44fFE15d3A8D66d9d18C81e038","symbol":"POLAR","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xdC3aCB92712D1D44fFE15d3A8D66d9d18C81e038/logo.png"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"JPY Coin","address":"0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c","symbol":"JPYC","decimals":18,"chainId":137,"logoURI":"https://jpyc.jp/static/media/jpyc.0d1e5d3f.png"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"ChumHum","address":"0x2e2DDe47952b9c7deFDE7424d00dD2341AD927Ca","symbol":"CHUM","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x2e2DDe47952b9c7deFDE7424d00dD2341AD927Ca/logo.png"}],[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"JPY Coin","address":"0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c","symbol":"JPYC","decimals":18,"chainId":137,"logoURI":"https://jpyc.jp/static/media/jpyc.0d1e5d3f.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"JPY Coin","address":"0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c","symbol":"JPYC","decimals":18,"chainId":137,"logoURI":"https://jpyc.jp/static/media/jpyc.0d1e5d3f.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Wrapped BTC","address":"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6","symbol":"WBTC","decimals":8,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"Wrapped BTC","address":"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6","symbol":"WBTC","decimals":8,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg"}],[{"name":"Ren BTC","address":"0xDBf31dF14B66535aF65AaC99C32e9eA844e14501","symbol":"renBTC","decimals":8,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg"},{"name":"Wrapped BTC","address":"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6","symbol":"WBTC","decimals":8,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"address":"0xAa9654BECca45B5BDFA5ac646c939C62b527D394","chainId":137,"name":"DinoSwap","symbol":"DINO","decimals":18,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xAa9654BECca45B5BDFA5ac646c939C62b527D394/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"address":"0xAa9654BECca45B5BDFA5ac646c939C62b527D394","chainId":137,"name":"DinoSwap","symbol":"DINO","decimals":18,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xAa9654BECca45B5BDFA5ac646c939C62b527D394/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"PolyGaj Token","address":"0xF4B0903774532AEe5ee567C02aaB681a81539e92","symbol":"GAJ","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xF4B0903774532AEe5ee567C02aaB681a81539e92/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Dark Magic","address":"0x61dAECaB65EE2A1D5b6032df030f3fAA3d116Aa7","symbol":"DMAGIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x61dAECaB65EE2A1D5b6032df030f3fAA3d116Aa7/logo.png"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"PolyGaj Token","address":"0xF4B0903774532AEe5ee567C02aaB681a81539e92","symbol":"GAJ","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xF4B0903774532AEe5ee567C02aaB681a81539e92/logo.png"}],[{"name":"Wrapped Ether","address":"0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619","symbol":"WETH","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/eth.jpg"},{"name":"PolyDoge","address":"0x8A953CfE442c5E8855cc6c61b1293FA648BAE472","symbol":"PolyDoge","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/doge.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"PolyDoge","address":"0x8A953CfE442c5E8855cc6c61b1293FA648BAE472","symbol":"PolyDoge","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/doge.jpg"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"PolyDoge","address":"0x8A953CfE442c5E8855cc6c61b1293FA648BAE472","symbol":"PolyDoge","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/doge.jpg"}],[{"name":"SushiToken","address":"0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a","symbol":"SUSHI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/sushi.jpg"},{"name":"ChainLink Token","address":"0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39","symbol":"LINK","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/link.jpg"}],[{"name":"SushiToken","address":"0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a","symbol":"SUSHI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/sushi.jpg"},{"name":"Tether USD","address":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F","symbol":"USDT","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg"}],[{"name":"SushiToken","address":"0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a","symbol":"SUSHI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/sushi.jpg"},{"name":"Dai Stablecoin","address":"0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063","symbol":"DAI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/dai.jpg"}],[{"name":"SushiToken","address":"0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a","symbol":"SUSHI","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/sushi.jpg"},{"name":"Wrapped BTC","address":"0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6","symbol":"WBTC","decimals":8,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/btc.jpg"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"Curve","address":"0x172370d5Cd63279eFa6d502DAB29171933a610AF","symbol":"CRV","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/crv.jpg"}],[{"name":"JPY Coin","address":"0x6AE7Dfc73E0dDE2aa99ac063DcF7e8A63265108c","symbol":"JPYC","decimals":18,"chainId":137,"logoURI":"https://jpyc.jp/static/media/jpyc.0d1e5d3f.png"},{"name":"Tether USD","address":"0xc2132D05D31c914a87C6611C10748AEb04B58e8F","symbol":"USDT","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdt.jpg"}],[{"name":"USD Coin","address":"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174","symbol":"USDC","decimals":6,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/usdc.jpg"},{"name":"IRON Titanium","address":"0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A","symbol":"TITAN","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0xaAa5B9e6c589642f98a1cDA99B9D024B8407285A/logo.png"}],[{"name":"Wrapped Matic","address":"0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270","symbol":"WMATIC","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/icons/master/token/polygon.jpg"},{"name":"PUSD","address":"0x9aF3b7DC29D3C4B1A5731408B6A9656fA7aC3b72","symbol":"PUSD","decimals":18,"chainId":137,"logoURI":"https://raw.githubusercontent.com/sushiswap/assets/master/blockchains/polygon/assets/0x9aF3b7DC29D3C4B1A5731408B6A9656fA7aC3b72/logo.png"}]]}}')}}]);