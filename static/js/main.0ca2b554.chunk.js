(this.webpackJsonpblogger=this.webpackJsonpblogger||[]).push([[0],{22:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),a=c(16),l=c.n(a),s=(c(22),c(7)),o=c(0),i=function(){return Object(o.jsxs)("nav",{children:[Object(o.jsx)(s.c,{exact:!0,to:"/blogger-react-app/",children:Object(o.jsx)("h1",{className:"title",children:"Blogger"})}),Object(o.jsxs)("div",{className:"nav-links",children:[Object(o.jsx)(s.c,{exact:!0,to:"/blogger-react-app/",activeStyle:{color:"whitesmoke"},activeClassName:"active",className:"nav-link",children:Object(o.jsx)("span",{children:"Home"})}),Object(o.jsx)(s.c,{exact:!0,to:"/blogger-react-app/newblog",activeClassName:"active",activeStyle:{color:"whitesmoke"},className:"nav-link",children:Object(o.jsx)("span",{children:"New Blog"})})]})]})},j=function(e){var t=e.blogs;return Object(o.jsxs)("div",{className:"blog-list",children:[Object(o.jsx)("h1",{style:{color:"hsl(340, 57%, 64%)"},children:"All Blogs!"}),t.map((function(e){return Object(o.jsx)("div",{className:"blog-preview",children:Object(o.jsxs)(s.b,{to:"/blogger-react-app/blogs/".concat(e.id),children:[Object(o.jsx)("h1",{children:e.title}),Object(o.jsxs)("p",{children:["Written By: ",e.author]})]})},e.id)}))]})},b=c(8),d=function(e){var t=Object(r.useState)(null),c=Object(b.a)(t,2),n=c[0],a=c[1],l=Object(r.useState)(!0),s=Object(b.a)(l,2),o=s[0],i=s[1],j=Object(r.useState)(null),d=Object(b.a)(j,2),h=d[0],u=d[1];return Object(r.useEffect)((function(){var t=new AbortController;return fetch(e,{signal:t.signal}).then((function(e){if(!e.ok)throw Error("Could not fetch the data");return e.json()})).then((function(e){i(!1),a(e),u(null)})).catch((function(e){"AbortError"===e.name?console.log("Fetch aborted"):(i(!1),u(e.message))})),function(){return t.abort()}}),[e]),{data:n,isPending:o,error:h}},h=function(){var e=d("https://blogger-rolify-api.herokuapp.com/blogs"),t=e.error,c=e.isPending,r=e.data;return Object(o.jsxs)("div",{className:"home",children:[t&&Object(o.jsx)("div",{children:t}),c&&Object(o.jsx)("div",{children:"Loading..."}),r&&Object(o.jsx)(j,{blogs:r})]})},u=c(2),O=function(){var e=Object(u.g)().id,t=d("https://blogger-rolify-api.herokuapp.com/blogs/"+e),c=t.data,r=t.isPending,n=t.error,a=Object(u.f)();return Object(o.jsxs)("div",{className:"blog-details",children:[r&&Object(o.jsx)("div",{children:"Loading..."}),n&&Object(o.jsx)("div",{children:n}),c&&Object(o.jsxs)("article",{children:[Object(o.jsx)("h1",{children:c.title}),Object(o.jsxs)("p",{children:["Written By: ",c.author]}),Object(o.jsx)("div",{children:c.body}),Object(o.jsx)("button",{onClick:function(){fetch("https://blogger-rolify-api.herokuapp.com/blogs/"+c.id,{method:"DELETE"}).then((function(){a.push("/blogger-react-app/")}))},children:"Delete"})]})]})},g=function(){var e=Object(r.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(""),l=Object(b.a)(a,2),s=l[0],i=l[1],j=Object(r.useState)(""),d=Object(b.a)(j,2),h=d[0],O=d[1],g=Object(u.f)();return Object(o.jsx)("div",{className:"create-blog",children:Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={title:c,body:s,author:h};fetch("https://blogger-rolify-api.herokuapp.com/blogs/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){g.push("/blogger-react-app/")}))},children:[Object(o.jsx)("label",{children:"Blog Title:"}),Object(o.jsx)("input",{type:"text",placeholder:"Title",required:!0,value:c,onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("label",{children:"Body:"}),Object(o.jsx)("textarea",{rows:"7",type:"text",placeholder:"Body",required:!0,value:s,onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("label",{children:"Author:"}),Object(o.jsx)("input",{type:"text",placeholder:"Author",required:!0,value:h,onChange:function(e){return O(e.target.value)}}),Object(o.jsx)("button",{children:"Add Blog"})]})})},p=function(){return Object(o.jsxs)("div",{className:"not-found",children:[Object(o.jsx)("h1",{children:"404"}),Object(o.jsx)("p",{children:"Not found or Page doesn't exist"})]})};var x=function(){return Object(o.jsx)(s.a,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/blogger-react-app/",children:Object(o.jsx)(h,{})}),Object(o.jsx)(u.a,{exact:!0,path:"/blogger-react-app/newblog",children:Object(o.jsx)(g,{})}),Object(o.jsx)(u.a,{exact:!0,path:"/blogger-react-app/blogs/:id",children:Object(o.jsx)(O,{})}),Object(o.jsx)(u.a,{path:"*",children:Object(o.jsx)(p,{})})]})})]})})};l.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.0ca2b554.chunk.js.map