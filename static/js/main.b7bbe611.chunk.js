(this.webpackJsonphooks=this.webpackJsonphooks||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),s=a(5),r=a.n(s),i=(a(10),a(11),a(0));var l=function(e){return Object(i.jsxs)("div",{className:"contact",children:[Object(i.jsxs)("div",{className:"contact-all",children:[Object(i.jsx)("div",{className:"name",children:e.firstName+" "+e.lastName}),Object(i.jsx)("div",{className:"gender",children:e.gender})]}),Object(i.jsx)("div",{className:"phone",children:e.phone})]})},o=a(4),m=a(3),d=[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u044c\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0456\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u044c\u043a\u0430",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043d\u0456\u043c\u043d\u0438\u0439",lastName:"\u0410\u043d\u043e\u043d\u0456\u043c\u0443\u0441",phone:"+380666666666"},{firstName:"\u041b\u0456\u043b\u0456\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u0435\u043d",lastName:"\u0415\u0440\u0456\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u0435\u0441",phone:"+380956319521",gender:"male"}];var j=function(){var e=0,t=Object(n.useState)(d),a=Object(m.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(""),j=Object(m.a)(r,2),u=j[0],h=j[1];return Object(n.useEffect)((function(){var e=d.filter((function(e){return e.lastName.toLowerCase().includes(u.toLowerCase())||e.firstName.toLowerCase().includes(u.toLowerCase())||e.phone.includes(u)}));s(e)}),[u]),Object(i.jsx)("div",{className:"block-all",children:Object(i.jsxs)("div",{className:"search",children:[Object(i.jsx)("input",{className:"search-contact",value:u,onChange:function(e){h(e.target.value)},placeholder:"Search"}),c.map((function(t){return Object(n.createElement)(l,Object(o.a)(Object(o.a)({},t),{},{key:e++}))}))]})})};var u=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(j,{}),";"]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(u,{})}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.b7bbe611.chunk.js.map