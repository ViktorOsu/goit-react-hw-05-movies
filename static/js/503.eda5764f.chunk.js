"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[503],{936:function(n,e,t){t.d(e,{aV:function(){return i},ck:function(){return f},nf:function(){return p}});var r,a,u,c=t(168),o=t(87),s=t(82),i=s.ZP.ul(r||(r=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 350px;\n  gap: 5px;\n  list-style: none;\n  padding: 0px;\n"]))),f=s.ZP.li(a||(a=(0,c.Z)(["\n  border: none;\n  border-radius: 4px;\n  :hover {\n    color: orangered;\n  }\n"]))),p=(0,s.ZP)(o.rU)(u||(u=(0,c.Z)(["\n  display: block;\n  padding: 5px;\n  text-decoration: none;\n  color: #212121;\n  width: 100%;\n  :hover {\n    color: blue;\n  }\n"])))},503:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(861),a=t(439),u=t(687),c=t.n(u),o=t(791),s=t(87),i=t(689),f=t(139),p=t(936),l=t(184),d=function(n){var e=n.handleSubmit;return(0,l.jsxs)("form",{onSubmit:e,children:[(0,l.jsx)("input",{type:"text",name:"query"}),(0,l.jsx)("button",{type:"submit",children:"Search"})]})},v=function(){var n=(0,o.useState)(""),e=(0,a.Z)(n,2),t=e[0],u=e[1],v=(0,o.useState)([]),h=(0,a.Z)(v,2),x=h[0],m=h[1],g=(0,s.lr)(),y=(0,a.Z)(g,2),b=y[0],k=y[1],w=(0,i.TH)(),Z=b.get("query");(0,o.useEffect)((function(){if(Z){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.V0)(Z);case 3:e=n.sent,m(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}}),[Z]),(0,o.useEffect)((function(){if(t){var n=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.V0)(t);case 3:if(0!==(e=n.sent).results.length){n.next=7;break}return alert("no response on request ".concat(t)),n.abrupt("return");case 7:m(e.results),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0.message);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}}),[t]);return(0,l.jsxs)(l.Fragment,{children:[x&&(0,l.jsx)(d,{handleSubmit:function(n){n.preventDefault(),u(n.target.elements.query.value),k(""!==t?{}:{query:n.target.elements.query.value}),n.target.elements.query.value=""}}),(0,l.jsx)(p.aV,{children:x.map((function(n){var e=n.title,t=n.id;return(0,l.jsx)(p.ck,{children:(0,l.jsx)(p.nf,{to:"".concat(t),state:{from:w},children:e})},t)}))})]})}},139:function(n,e,t){t.d(e,{CJ:function(){return i},Jx:function(){return l},Pg:function(){return p},V0:function(){return f}});var r=t(861),a=t(687),u=t.n(a),c=t(243),o="f13d291a2e62abd75d768079816666c5",s=c.Z.create({baseURL:"https://api.themoviedb.org/3"}),i=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/trending/all/day?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/search/movie?api_key=".concat(o,"&query=").concat(e,"&language=en-US&page=1&include_adult=false"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e,t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/movie/".concat(e).concat(t,"?api_key=").concat(o));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.get("/configuration?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=503.eda5764f.chunk.js.map