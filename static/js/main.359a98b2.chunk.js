(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,t,n){},51:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(26),i=n.n(a),o=n(8),l=(n(32),n(12)),r=n.n(l),u=n(9),j=(n(51),n(0)),h=function(e){var t=e.notificationStatus;return Object(j.jsx)("div",{className:"notificationBar",children:t})},g=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(o.a)(a,2),l=i[0],g=i[1],d=Object(s.useState)(""),b=Object(o.a)(d,2),p=b[0],O=b[1];return Object(j.jsx)("div",{className:"login",children:Object(j.jsxs)("div",{className:"loginWrapper",children:[Object(j.jsxs)("div",{className:"loginLeft",children:[Object(j.jsx)("h3",{className:"loginLogo",children:"TechBase"}),Object(j.jsx)("span",{className:"loginDesc",children:"Test page for login."})]}),Object(j.jsx)("div",{className:"loginRight",children:Object(j.jsxs)("form",{className:"loginBox",onSubmit:function(e){e.preventDefault(),(n&&l||(O("Fill out both fields!"),0))&&r()({method:"post",url:"login/",data:{login:n,password:l},headers:{"Content-Type":"application/json"}}).then((function(e){return O("Request was successful with request code ".concat(e.status))})).catch((function(e){return O("Request failed with status code ".concat(e.response.status))}))},children:[Object(j.jsx)("input",{type:"text",placeholder:"Login",className:"loginInput",value:n,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"Password",className:"loginInput",value:l,onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("input",{type:"submit",value:"Log in",className:"loginRegisterButton"}),Object(j.jsx)(u.b,{to:"/register",className:"registerLink",children:Object(j.jsx)("button",{className:"loginButton",children:"Create a New Account"})}),Object(j.jsx)(h,{notificationStatus:p})]})})]})})};n(58);function d(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=Object(s.useState)(""),i=Object(o.a)(a,2),l=i[0],g=i[1],d=Object(s.useState)(""),b=Object(o.a)(d,2),p=b[0],O=b[1],x=Object(s.useState)(""),m=Object(o.a)(x,2),f=m[0],v=m[1],N=Object(s.useState)(""),w=Object(o.a)(N,2),S=w[0],B=w[1];return Object(j.jsx)("div",{className:"login",children:Object(j.jsxs)("div",{className:"loginWrapper",children:[Object(j.jsxs)("div",{className:"loginLeft",children:[Object(j.jsx)("h3",{className:"loginLogo",children:"TechBase"}),Object(j.jsx)("span",{className:"loginDesc",children:"Test page for registration."})]}),Object(j.jsx)("div",{className:"loginRight",children:Object(j.jsxs)("form",{className:"loginBox",onSubmit:function(e){e.preventDefault(),(n&&l&&p&&f?l.length<5||p.length<7?(B("Not enough character length in login or password!"),0):p!==f?(B("Passwords do not match!"),0):/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(n)||(B("Email is not valid!"),0):(B("Fields can not be empty!"),0))&&r()({method:"post",url:"register/",data:{login:l,password:p,email:n},headers:{"Content-Type":"application/json"}}).then((function(e){return B("Request was successful with request code ".concat(e.status))})).catch((function(e){return B("Request failed with status code ".concat(e.response.status))}))},children:[Object(j.jsx)("input",{type:"text",placeholder:"Login",className:"loginInput",value:l,onChange:function(e){return g(e.target.value)}}),Object(j.jsx)("input",{type:"text",placeholder:"Email",className:"loginInput",value:n,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"Password",className:"loginInput",value:p,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("input",{type:"password",placeholder:"Confirm password",className:"loginInput",value:f,onChange:function(e){return v(e.target.value)}}),Object(j.jsx)("input",{className:"loginButton",type:"submit",value:"Sign Up"}),Object(j.jsx)(u.b,{to:"/login",className:"loginRegisterLink",children:Object(j.jsx)("button",{className:"loginRegisterButton",children:"Log Into Existing Account"})}),Object(j.jsx)(h,{notificationStatus:S})]})})]})})}var b=n(2),p=(n(59),function(){return Object(j.jsx)("div",{className:"home",children:Object(j.jsxs)("div",{className:"homeWrapper",children:[Object(j.jsx)("h1",{children:"Welcome to the test page of TechBase"}),Object(j.jsx)("h3",{children:"Sign up or use existing account to log in"}),Object(j.jsxs)("div",{className:"navigationButtons",children:[Object(j.jsx)(u.b,{to:"/register",children:Object(j.jsx)("button",{className:"homeRegisterButton",children:"Create an Account"})}),Object(j.jsx)(u.b,{to:"/login",children:Object(j.jsx)("button",{className:"homeSignUpButton",children:"Sign in"})})]})]})})});var O=function(){return Object(j.jsx)(u.a,{children:Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{exact:!0,path:"/",children:Object(j.jsx)(p,{})}),Object(j.jsx)(b.a,{path:"/login",children:Object(j.jsx)(g,{})}),Object(j.jsx)(b.a,{path:"/register",children:Object(j.jsx)(d,{})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),x()}},[[60,1,2]]]);
//# sourceMappingURL=main.359a98b2.chunk.js.map