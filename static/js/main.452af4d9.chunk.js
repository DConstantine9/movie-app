(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{35:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),n=a(26),i=a.n(n),r=a(8),l=a(2),o=(a(35),a(1));var j=function(){return Object(o.jsx)("div",{className:"about__container",children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435: \u044f \u0441\u0434\u0435\u043b\u0430\u043b \u044d\u0442\u043e\u0442 \u043f\u0440\u043e\u0435\u043a\u0442, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043b\u044e\u0431\u043b\u044e \u0444\u0438\u043b\u044c\u043c\u044b"})},m=a(15),u=a.n(m),d=a(27),b=a(11),h=a(28),v=a.n(h);a(57);var p=function(e){var t=e.id,a=e.year,s=e.title,c=e.summary,n=e.poster,i=e.genres;return Object(o.jsx)("div",{className:"movie",children:Object(o.jsxs)(r.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:s,summary:c,poster:n,genres:i}},children:[Object(o.jsx)("img",{src:n,alt:s,title:s}),Object(o.jsxs)("div",{className:"movie__column",children:[Object(o.jsx)("h3",{className:"movie__title",children:s}),Object(o.jsx)("h5",{className:"movie__year",children:a}),Object(o.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(o.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(o.jsxs)("p",{className:"movie__summary",children:[c.slice(0,140),"..."]})]})]})})};a(63);var x=function(e){for(var t=e.moviesPerPage,a=e.totalMovies,s=e.currentPage,c=e.paginate,n=[],i=1;i<=Math.ceil(a/t);i++)n.push(i);return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{children:Object(o.jsx)("ul",{className:"pagination",children:n.map((function(e){return Object(o.jsx)("li",{className:"page__item",children:Object(o.jsx)("a",{onClick:function(){return c(e)},href:"!#",className:s===e?"page__active":"page__link",children:e})},e)}))})})})};a(64);var O=function(){var e=c.a.useState(!0),t=Object(b.a)(e,2),a=t[0],s=t[1],n=c.a.useState([]),i=Object(b.a)(n,2),r=i[0],l=i[1],j=c.a.useState(1),m=Object(b.a)(j,2),h=m[0],O=m[1],_=c.a.useState(10),f=Object(b.a)(_,2),g=f[0];function N(){return(N=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=raiting");case 2:t=e.sent,a=t.data.data.movies,s(!1),l(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}f[1],c.a.useEffect((function(){!function(){N.apply(this,arguments)}()}),[]);var y=h*g,k=y-g,P=r.slice(k,y);return Object(o.jsxs)("section",{className:"container",children:[a?Object(o.jsx)("div",{className:"loader",children:Object(o.jsx)("span",{className:"loder__text",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})}):Object(o.jsx)("div",{className:"movies",children:P.map((function(e){return Object(o.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))}),Object(o.jsx)(x,{totalMovies:r.length,moviesPerPage:g,paginate:function(e){return O(e)},currentPage:h})]})};a(65);var _=function(){return Object(o.jsxs)("div",{className:"nav",children:[Object(o.jsx)(r.b,{to:"/",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(o.jsx)(r.b,{to:{pathname:"/about",state:{fromLocation:!0}},children:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435"})]})};a(66);var f=function(e){var t=e.location.state;return c.a.useEffect((function(){void 0===t&&e.history.push("/")})),t?Object(o.jsxs)("div",{className:"detail__block",children:[Object(o.jsx)("div",{className:"detail__poster",children:Object(o.jsx)("img",{src:t.poster,alt:t.title,title:t.title})}),Object(o.jsxs)("div",{className:"detail__info",children:[Object(o.jsx)("h1",{className:"detail__title",children:t.title}),Object(o.jsx)("h4",{className:"detail__year",children:t.year}),Object(o.jsx)("ul",{className:"detail__genres",children:t.genres.map((function(e,t){return Object(o.jsx)("li",{className:"detail__genres__genre",children:e},t)}))}),Object(o.jsx)("p",{className:"movie__summary",children:t.summary})]})]}):null};a(67);var g=function(){return Object(o.jsxs)(r.a,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(l.a,{path:"/",exact:!0,component:O}),Object(o.jsx)(l.a,{path:"/about",component:j}),Object(o.jsx)(l.a,{path:"/movie/:id",component:f})]})};i.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.452af4d9.chunk.js.map