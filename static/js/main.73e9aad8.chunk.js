(this["webpackJsonpcoin-comparator"]=this["webpackJsonpcoin-comparator"]||[]).push([[0],{14:function(e,c,t){},16:function(e,c,t){},18:function(e,c,t){"use strict";t.r(c);var n=t(1),r=t.n(n),s=t(8),i=t.n(s),a=(t(14),t(6)),l=t.n(a),o=t(9),d=t(7),j=t(3),u=(t(16),t(0)),h=function(e){var c=e.setData,t=Object(n.useState)(""),r=Object(j.a)(t,2),s=r[0],i=r[1],a=Object(n.useState)([]),h=Object(j.a)(a,2),p=h[0],b=h[1],x=Object(n.useState)(""),O=Object(j.a)(x,2),v=O[0],m=O[1];Object(n.useEffect)((function(){b(p)}),[p]);var f=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==p.length&&""!==s){e.next=2;break}return e.abrupt("return");case 2:t="https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?convert_id=2790&symbol="+p.join(","),(n=new Headers).append("X-CMC_PRO_API_KEY",s),fetch(t,{method:"GET",headers:n,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log("error",e)}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"menu-container",children:[Object(u.jsxs)("div",{className:"key-container",children:[Object(u.jsxs)("p",{className:"title",children:[Object(u.jsx)("a",{href:"https://pro.coinmarketcap.com/login",target:"_blank",rel:"noreferrer",children:"CoinMarketCap"}),"API Key"]}),Object(u.jsx)("input",{type:"text",onChange:function(e){!function(e){e.preventDefault();var c=e.target.value;i(c)}(e)},defaultValue:s})]}),Object(u.jsxs)("div",{className:"control-container",children:[Object(u.jsx)("p",{className:"title",children:"Input Coin"}),Object(u.jsx)("input",{type:"text",placeholder:"ETH",onChange:function(e){!function(e){e.preventDefault();var c=e.target.value;m(c)}(e)}}),Object(u.jsx)("button",{className:"add-button",onClick:function(){""!==v&&b((function(e){return[].concat(Object(d.a)(e),[v])}))},children:"Add"}),Object(u.jsx)("button",{className:"remove-button",onClick:function(){""!==v&&b((function(e){return Object(d.a)(e.filter((function(e){return e!==v})))}))},children:"Remove"})]}),Object(u.jsxs)("div",{className:"coins-container",children:[Object(u.jsx)("p",{className:"title",children:"Saved Coins"}),Object(u.jsx)("div",{className:"coins",children:p.map((function(e,c){return Object(u.jsx)("div",{className:"coin",children:e},"coin_"+c)}))}),Object(u.jsx)("button",{className:"clear-button",onClick:function(){b([])},children:"Clear"})]}),Object(u.jsx)("button",{className:"fetch-button",onClick:function(){f()},children:"Load Data"})]},p.join("_"))},p=function(e){var c=e.response;return null===c||0===c.length?[]:Object(u.jsx)("div",{className:"coinsTable-container",children:Object(u.jsxs)("div",{className:"table",children:[Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("div",{className:"cell",children:"Coin"}),Object(u.jsx)("div",{className:"cell",children:"3 Months"}),Object(u.jsx)("div",{className:"cell",children:"2 Months"}),Object(u.jsx)("div",{className:"cell",children:"1 Month"}),Object(u.jsx)("div",{className:"cell",children:"7 Days"}),Object(u.jsx)("div",{className:"cell",children:"24 Hours"}),Object(u.jsx)("div",{className:"cell",children:"1 Hour"}),Object(u.jsx)("div",{className:"cell",children:"Current Price"}),Object(u.jsx)("div",{className:"cell",children:"Comparator"})]}),function(e){var c=e.data,t=[];return Object.keys(c).forEach((function(e){var n=c[e].quote[2790].price,r=c[e].quote[2790].percent_change_1h,s=n-n*(r/100),i=c[e].quote[2790].percent_change_24h,a=n-n*(i/100),l=c[e].quote[2790].percent_change_7d,o=n-n*(l/100),d=c[e].quote[2790].percent_change_30d,j=n-n*(d/100),u=c[e].quote[2790].percent_change_60d,h=n-n*(u/100),p=c[e].quote[2790].percent_change_90d,b=n-n*(p/100),x=function(e,c,t,n,r,s,i){return(1*c+1*t+.9*n+.8*r+.6*s+.4*i)/6}(0,r,i,l,d,u,p);t.push({symbol:c[e].symbol,price:n.toFixed(4)+"\u20ac",percentChange1h:r.toFixed(4)+"%",previous1hPrice:s.toFixed(4)+"\u20ac",percentChange24h:i.toFixed(4)+"%",previous24hPrice:a.toFixed(4)+"\u20ac",percentChange7d:l.toFixed(4)+"%",previous7hPrice:o.toFixed(4)+"\u20ac",percentChange30d:d.toFixed(4)+"%",previous30dPrice:j.toFixed(4)+"\u20ac",percentChange60d:u.toFixed(4)+"%",previous60dPrice:h.toFixed(4)+"\u20ac",percentChange90d:p.toFixed(4)+"%",previous90dPrice:b.toFixed(4)+"\u20ac",compareValue:x.toFixed(4)})})),t.sort((function(e,c){return e.compareValue-c.compareValue})),t}(c).map((function(e,c){return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"cell",children:e.symbol}),Object(u.jsxs)("div",{className:"cell",children:[Object(u.jsx)("p",{children:e.percentChange90d}),Object(u.jsx)("p",{children:e.previous90dPrice})]}),Object(u.jsxs)("div",{className:"cell",children:[Object(u.jsx)("p",{children:e.percentChange60d}),Object(u.jsx)("p",{children:e.previous60dPrice})]}),Object(u.jsxs)("div",{className:"cell",children:[Object(u.jsx)("p",{children:e.percentChange30d}),Object(u.jsx)("p",{children:e.previous30dPrice})]}),Object(u.jsxs)("div",{className:"cell",children:[Object(u.jsx)("p",{children:e.percentChange7d}),Object(u.jsx)("p",{children:e.previous7hPrice})]}),Object(u.jsxs)("div",{className:"cell",children:[Object(u.jsx)("p",{children:e.percentChange24h}),Object(u.jsx)("p",{children:e.previous24hPrice})]}),Object(u.jsxs)("div",{className:"cell",children:[Object(u.jsx)("p",{children:e.percentChange1h}),Object(u.jsx)("p",{children:e.previous1hPrice})]}),Object(u.jsx)("div",{className:"cell",children:Object(u.jsx)("p",{children:e.price})}),Object(u.jsx)("div",{className:"cell",children:e.compareValue})]},"coinRow"+c)}))]})})},b=function(){var e=Object(n.useState)([]),c=Object(j.a)(e,2),t=c[0],r=c[1];return Object(u.jsxs)("div",{className:"app-container",children:[Object(u.jsx)(h,{setData:r}),Object(u.jsx)(p,{response:t})]})};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(b,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.73e9aad8.chunk.js.map