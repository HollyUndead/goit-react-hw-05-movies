"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[416],{416:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var n=r(861),c=r(439),s=r(757),a=r.n(s),i=r(243),o=r(988);function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=r(791),f=r(87),v=r(689),d=r(184),m=function(e){var t=Object.assign({},e).idForFetch,r=(0,v.s0)(),n=(0,v.TH)(),c=(0,h.useRef)();return(0,h.useEffect)((function(){c.current=n.pathname.replace("/cast","").replace("/review","")}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)("h4",{children:"Addithinal information"}),(0,d.jsxs)("div",{className:"router",children:[(0,d.jsx)(f.OL,{className:"cast",to:c.current+"/cast",onClick:function(e){e.preventDefault(),r(c.current+"/cast",{state:p(p({},n.state),{},{idForFetch:t})})},children:"Cast"}),(0,d.jsx)(f.OL,{className:"review",to:c.current+"/review",onClick:function(e){e.preventDefault(),r(c.current+"/review",{state:p(p({},n.state),{},{idForFetch:t})})},children:"Review"})]})]})},j=function(){var e,t,r,s=(0,h.useState)(),u=(0,c.Z)(s,2),l=u[0],p=u[1],f=(0,h.useState)(!0),j=(0,c.Z)(f,2),b=j[0],w=j[1],x=(0,h.useState)(!1),O=(0,c.Z)(x,2),g=O[0],y=O[1],k=(0,v.s0)(),N=(0,v.TH)(),_=(0,h.useRef)(),F=(0,h.useRef)();return(0,h.useEffect)((function(){function e(){return(e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(F.current,"?api_key=b76e2e4e0948108c3961a907afb4d0c6"));case 3:t=e.sent,p(t.data),w(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),y(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}F.current=N.pathname.slice(N.pathname.indexOf("movie/")+6).replace("/cast","").replace("/reviw",""),null!==N.state&&(_.current=N.state.pathname+N.state.search),function(){e.apply(this,arguments)}()}),[]),void 0!==l&&(e="https://image.tmdb.org/t/p/w500".concat(l.poster_path),t=Math.round(10*l.vote_average),r=l.genres.map((function(e){return e.name})).join(", ")),console.log(l),(0,d.jsxs)("div",{children:[b?(0,d.jsx)(o.a,{}):(0,d.jsxs)("div",{className:"movie-wraper",children:[(0,d.jsx)("button",{type:"button",className:"go-back",onClick:function(){k(_.current)},children:"Go back"}),(0,d.jsxs)("div",{className:"main-info-wrap",children:[(0,d.jsx)("img",{className:"movie-poster",src:e,alt:""}),(0,d.jsxs)("div",{className:"main-info",children:[(0,d.jsx)("h2",{className:"movie-name",children:l.title}),(0,d.jsxs)("p",{className:"movie-user-score",children:["User score: ",t,"%"]}),(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{className:"overview",children:l.overview}),(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{className:"genres",children:r})]})]}),(0,d.jsx)(m,{idForFetch:F.current}),(0,d.jsx)(v.j3,{})]}),!1===g?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)("h2",{children:["Oops, there was an error: ",g]})]})}}}]);
//# sourceMappingURL=416.5b4e7bcc.chunk.js.map