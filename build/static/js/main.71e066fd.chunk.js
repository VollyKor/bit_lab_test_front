(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{238:function(e,t,a){},466:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a.n(s),r=a(58),n=a.n(r),l=(a(238),a(22)),i=a(33),j=a(1);function d(){var e=Object(l.g)().pathname.includes("/stats/user");return Object(j.jsx)("nav",{className:"navbar",children:Object(j.jsxs)("ul",{className:"navbar__list",children:[Object(j.jsx)("li",{className:"navbar__item",children:Object(j.jsx)(i.c,{exact:!0,to:"/",className:"navbar__link",activeClassName:"active",children:"Main page"})}),Object(j.jsxs)("li",{className:"navbar__item",children:[Object(j.jsx)("span",{className:"navarrow",children:">"}),Object(j.jsx)(i.c,{exact:!0,to:"/stats?page=1&limit=50",className:"navbar__link",activeClassName:"active",children:"User statistics"})]}),e&&Object(j.jsxs)("li",{className:"navbar__item",children:[Object(j.jsx)("span",{className:"navarrow",children:">"}),Object(j.jsx)(i.c,{to:"/stats/user",className:"navbar__link",activeClassName:"active",children:"Username"})]})]})})}function o(e){var t=e.children;return Object(j.jsx)("div",{className:"container",children:t})}function b(){return Object(j.jsx)("div",{className:"stats__footer-wrapper",children:Object(j.jsx)(o,{children:Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("p",{className:"footer__logo stats",children:"AppCo"}),Object(j.jsx)("p",{className:"footer__rights stats",children:"All rights reserved by ThemeTags"}),Object(j.jsx)("p",{className:"footer__trademark stats",children:"Copyrights \xa9 2019."})]})})})}function h(){return Object(j.jsx)("div",{className:"stats__header-wrapper",children:Object(j.jsx)(o,{children:Object(j.jsx)("header",{className:"stats__header",children:Object(j.jsx)("p",{className:"header__logo",children:"AppCo"})})})})}function u(){return Object(j.jsx)(o,{children:Object(j.jsx)("header",{className:"header",children:Object(j.jsx)("p",{className:"header__logo",children:"AppCo"})})})}var m=a.p+"static/media/mobilePhone.534c1090.png";function O(){return Object(j.jsxs)("div",{className:"hero__title-wrapper",children:[Object(j.jsxs)("h1",{className:"hero__title",children:[Object(j.jsx)("span",{className:"hero__accent",children:"Brainstorming"})," for desired perfect Usability"]}),Object(j.jsx)("p",{className:"hero__text",children:"Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!"}),Object(j.jsx)(i.b,{to:"/stats?page=1&limit=50",className:"hero__button",children:"Views Stats"})]})}var _=a.p+"static/media/pencils.d511c1f2.svg",p=a.p+"static/media/lock.cadfbe34.svg",x=a.p+"static/media/devices.fed80596.svg";function g(){return Object(j.jsxs)("section",{className:"products",children:[Object(j.jsxs)("h2",{className:"products__title",children:["Why"," ",Object(j.jsx)("span",{className:"products__title-accent",children:"small business owners love"})," ","AppCo?"]}),Object(j.jsx)("p",{className:"products__subtitle",children:"Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!"}),Object(j.jsxs)("ul",{className:"products__list",children:[Object(j.jsxs)("li",{className:"products__item",children:[Object(j.jsx)("div",{className:"product__item-thumb",children:Object(j.jsx)("img",{src:_,alt:"pencils"})}),Object(j.jsx)("h3",{className:"products__item-subtitle",children:"Clean Design"}),Object(j.jsx)("p",{className:"products__item-text",children:"Increase sales by showing true dynamics of your website."})]}),Object(j.jsxs)("li",{className:"products__item",children:[Object(j.jsx)("div",{className:"product__item-thumb",children:Object(j.jsx)("img",{src:p,alt:"lock"})}),Object(j.jsx)("h3",{className:"products__item-subtitle",children:"Secure Data"}),Object(j.jsx)("p",{className:"products__item-text",children:"Build your online store\u2019s trust using Social Proof & Urgency."})]}),Object(j.jsxs)("li",{className:"products__item",children:[Object(j.jsx)("div",{className:"product__item-thumb",children:Object(j.jsx)("img",{src:x,alt:"devices"})}),Object(j.jsx)("h3",{className:"products__item-subtitle",children:"Retina Ready"}),Object(j.jsx)("p",{className:"products__item-text",children:"Realize importance of social proof in customer\u2019s purchase decision."})]})]})]})}function f(){return Object(j.jsxs)("form",{className:"form",children:[Object(j.jsx)("label",{className:"form__label",children:Object(j.jsx)("input",{className:"form__input",type:"email",placeholder:"Subscribe"})}),Object(j.jsx)("button",{className:"form__button",type:"button",children:"Subscribe"})]})}function N(){return Object(j.jsx)(o,{children:Object(j.jsxs)("main",{className:"main",children:[Object(j.jsxs)("section",{className:"hero",children:[Object(j.jsx)(O,{}),Object(j.jsx)("div",{className:"hero__thumb",children:Object(j.jsx)("img",{src:m,alt:"phone img",className:"hero__img"})})]}),Object(j.jsx)(g,{}),Object(j.jsx)(f,{})]})})}function v(){return Object(j.jsx)(o,{children:Object(j.jsxs)("footer",{className:"footer",children:[Object(j.jsx)("p",{className:"footer__logo",children:"AppCo"}),Object(j.jsx)("p",{className:"footer__rights",children:"All rights reserved by ThemeTags"}),Object(j.jsx)("p",{className:"footer__trademark",children:"Copyrights \xa9 2019."})]})})}var y=a(23),w=a(208),k=a.n(w),C=a(209),S=a.n(C),F=a(45),A=a.n(F),P=a(116),E=a(91),I=a.n(E);I.a.defaults.baseURL="https://bit-lab-test.herokuapp.com";var L,D=function(){var e=Object(P.a)(A.a.mark((function e(){var t,a,s,c,r=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:1,a=r.length>1&&void 0!==r[1]?r[1]:50,e.next=4,I.a.get("/stats?page=".concat(t,"&limit=").concat(a));case 4:return s=e.sent,c=s.data,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(P.a)(A.a.mark((function e(t){var a,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("/stats/".concat(t));case 2:return a=e.sent,s=a.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(P.a)(A.a.mark((function e(t){var a,s,c,r,n=arguments;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:"2019-08-10",s=n.length>2&&void 0!==n[2]?n[2]:"2019-12-10",e.next=4,I.a.get("/stats/".concat(t,"?dateFrom=").concat(a,"&dateTo=").concat(s," "));case 4:return c=e.sent,r=c.data,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function U(e){var t=e.data,a=Object(l.f)(),s=Object(l.h)();return t.map((function(e){return Object(j.jsxs)("tr",{className:"table__body-row",onClick:function(){return function(e){a.push("".concat(s.url,"/user/").concat(e.user_id))}(e)},children:[Object(j.jsx)("td",{className:"table__body-cell id",children:e.id}),Object(j.jsx)("td",{className:"table__body-cell",children:e.first_name}),Object(j.jsx)("td",{className:"table__body-cell",children:e.last_name}),Object(j.jsx)("td",{className:"table__body-cell email",children:e.email}),Object(j.jsx)("td",{className:"table__body-cell gender",children:e.gender}),Object(j.jsx)("td",{className:"table__body-cell ip_address",children:e.ip_adress}),Object(j.jsx)("td",{className:"table__body-cell",children:e.total_click}),Object(j.jsx)("td",{className:"table__body-cell",children:e.total_page_views})]},e.id)}))}function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s])}return e}).apply(this,arguments)}function K(e,t){if(null==e)return{};var a,s,c=function(e,t){if(null==e)return{};var a,s,c={},r=Object.keys(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)a=r[s],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}function R(e,t){var a=e.title,c=e.titleId,r=K(e,["title","titleId"]);return s.createElement("svg",B({width:17,height:28,viewBox:"0 0 17 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":c},r),a?s.createElement("title",{id:c},a):null,L||(L=s.createElement("path",{d:"M15 2L3 14L15 26",stroke:"current",strokeWidth:4,strokeLinecap:"round"})))}var W=s.forwardRef(R);a.p;function J(){var e=Object(s.useState)(0),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(0),n=Object(y.a)(r,2),i=n[0],d=n[1],o=Object(s.useState)([]),b=Object(y.a)(o,2),h=b[0],u=b[1],m=Object(l.f)(),O=k.a.parse(m.location.search),_=m.location.pathname,p=O.limit,x=void 0===p?30:p,g=x>50?50:x;Object(s.useEffect)((function(){i!==O.page&&D(i,g).then((function(e){c(e.totalPages),u(e.data),d(i)}))}),[O.page]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h2",{className:"table__title",children:"Users statistics"}),Object(j.jsxs)("table",{className:"table",children:[Object(j.jsx)("thead",{className:"table__head",children:Object(j.jsxs)("tr",{className:"table__head-row",children:[Object(j.jsx)("td",{className:"table__head-cell id",children:"id"}),Object(j.jsx)("td",{className:"table__head-cell",children:"First name"}),Object(j.jsx)("td",{className:"table__head-cell",children:"Last name"}),Object(j.jsx)("td",{className:"table__head-cell email",children:"Email"}),Object(j.jsx)("td",{className:"table__head-cell gender",children:"Gender"}),Object(j.jsx)("td",{className:"table__head-cell ip_address",children:"IP address"}),Object(j.jsx)("td",{className:"table__head-cell",children:"Total clicks"}),Object(j.jsx)("td",{className:"table__head-cell",children:"Total page views"})]})}),Object(j.jsx)("tbody",{className:"table__body",children:h&&Object(j.jsx)(U,{data:h})})]}),h&&Object(j.jsx)(S.a,{pageCount:a,pageRangeDisplayed:3,marginPagesDisplayed:1,initialPage:O.page-1,disableInitialCallback:!0,onPageChange:function(e){var t=e.selected;d(t+1),m.push("".concat(_,"?page=").concat(t+1,"&limit=").concat(x))},containerClassName:"paginate__container",pageClassName:"paginate__page",activeClassName:"paginate__page active",nextLabel:Object(j.jsx)(W,{className:"paginate_arrow right"}),previousLabel:Object(j.jsx)(W,{className:"paginate_arrow"}),breakClassName:"paginate__page"})]})}a(275);var V=a(150),z=a.n(V),G=a(472),q=a(476),H=a(229),Q=a(94),X=a(90),Y=a(226),Z=a(227);function $(){var e=Object(s.useState)(new Date),t=Object(y.a)(e,2),a=t[0],c=t[1],r=Object(s.useState)(new Date),n=Object(y.a)(r,2),i=n[0],d=n[1],o=Object(s.useState)(null),b=Object(y.a)(o,2),h=b[0],u=b[1],m=Object(s.useState)(null),O=Object(y.a)(m,2),_=O[0],p=O[1],x=Object(l.h)().params.id,g=Number(void 0===x?1:x);function f(e){return e.toISOString().substring(0,10)}var N=function(){var e=window.innerWidth,t=0,a=0;return e>1180?(t=1e3,a=400):e>780?(t=600,a=200):e>380&&(t=300,a=150),{width:t,height:a}};return Object(s.useEffect)((function(){isNaN(g)||T(g).then((function(e){var t=e.data;c(new Date(t[0].date)),d(new Date(t[t.length-1].date)),u(t),p(t[0])})).catch((function(e){return console.log(e)}))}),[g]),_?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"date",children:[Object(j.jsx)("h2",{className:"user__title",children:"".concat(_.first_name," ").concat(_.last_name)}),Object(j.jsxs)("div",{className:"date__wrapper",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"date__desc",children:"From"}),Object(j.jsx)(z.a,{closeOnScroll:!0,selected:a,selectsStart:!0,className:"date__input",onChange:function(e){c(e)},dateFormat:"yyyy-MM-dd"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("span",{className:"date__desc",children:"to"}),Object(j.jsx)(z.a,{closeOnScroll:!0,selected:i,selectsEnd:!0,onChange:function(e){d(e)},dateFormat:"yyyy-MM-dd",className:"date__input"})]}),Object(j.jsx)("button",{className:"date__btn",onClick:function(){M(g,f(a),f(i)).then((function(e){var t=e.data;u(t)}))},children:"Filter"})]})]}),Object(j.jsxs)("div",{className:"graph",children:[Object(j.jsx)("h3",{className:"user__subtitle",children:"Clicks"}),Object(j.jsxs)(G.a,{width:N().width,height:N().height,data:h,children:[Object(j.jsx)(q.a,{vertical:!1,stroke:"#F1F1F1"}),Object(j.jsx)(H.a,{type:"monotone",dataKey:"clicks",strokeWidth:4,stroke:"#3A80BA"}),Object(j.jsx)(Q.a,{}),Object(j.jsx)(X.a,{}),Object(j.jsx)(Y.a,{dataKey:"date"}),Object(j.jsx)(Z.a,{dataKey:"clicks"})]})]}),Object(j.jsxs)("div",{className:"graph",children:[Object(j.jsx)("h3",{className:"user__subtitle",children:"Vievs"}),Object(j.jsxs)(G.a,{width:N().width,height:N().height,data:h,children:[Object(j.jsx)(q.a,{vertical:!1,stroke:"#F1F1F1"}),Object(j.jsx)(H.a,{type:"monotone",strokeWidth:4,legendType:"plainline",dataKey:"page_views",stroke:"#3A80BA"}),Object(j.jsx)(Q.a,{}),Object(j.jsx)(X.a,{}),Object(j.jsx)(Y.a,{dataKey:"date"}),Object(j.jsx)(Z.a,{dataKey:"page_views"})]})]})]}):Object(j.jsx)("div",{children:"UserId is not a valid number or data is absent"})}function ee(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsxs)(l.a,{path:"/stats",children:[Object(j.jsx)(h,{}),Object(j.jsxs)(o,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(l.a,{path:"/stats",exact:!0,children:Object(j.jsx)(J,{})}),Object(j.jsx)(l.a,{path:"/stats/user/:id",children:Object(j.jsx)($,{})})]}),Object(j.jsx)(b,{})]}),Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsxs)("div",{className:"header__bckg-wrapper",children:[Object(j.jsx)(u,{}),Object(j.jsxs)("div",{className:"footer__bckg-wrapper",children:[Object(j.jsx)(N,{}),Object(j.jsx)(v,{})]})]})})]})})}n.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(ee,{})})}),document.getElementById("root"))}},[[466,1,2]]]);
//# sourceMappingURL=main.71e066fd.chunk.js.map