(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,c){},12:function(e,a,c){"use strict";c.r(a);var t=c(5),n=c.n(t),i=c(4),r=c(1),l=(c(10),c(2)),s=c.n(l);function o(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var j=o(1,42).map((function(e){return"Item ".concat(e)})),d=[3,5,10,20],u=c(0),h=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),r=o(1,i);return Object(u.jsxs)("ul",{className:"pagination",children:[Object(u.jsx)("li",{className:s()("page-item",{disabled:1===t}),children:Object(u.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),r.map((function(e){return Object(u.jsx)("li",{className:s()("page-item",{active:e===t}),children:Object(u.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e})})})),Object(u.jsx)("li",{className:s()("page-item",{disabled:t===i}),children:Object(u.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){t!==i&&n(t+1)},children:"\xbb"})})]})},m=function(){var e=Object(r.useState)(5),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),s=l[0],o=l[1],m=c*(s-1),b=m+c<=j.length?m+c:j.length,g=j.slice(m,b);return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h1",{children:"Items with Pagination"}),Object(u.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(m+1," - ").concat(b," of ").concat(j.length,")")}),Object(u.jsxs)("div",{className:"form-group row",children:[Object(u.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(u.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:c,onChange:function(e){t(Number(e.target.value)),o(1)},children:d.map((function(e){return Object(u.jsx)("option",{value:e,children:e},e)}))})}),Object(u.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(u.jsx)(h,{total:j.length,perPage:c,currentPage:s,onPageChange:function(e){o(e)}}),Object(u.jsx)("ul",{children:g.map((function(e){return Object(u.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.67bf9129.chunk.js.map