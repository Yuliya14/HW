(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={message:"Message_message__2m-lK",img:"Message_img__23qY6",content:"Message_content__2qkrk",angle:"Message_angle__1CNJW",text:"Message_text__38zzF",name:"Message_name__2Lp0a",time:"Message_time__2QaMu"}},,,,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2LpXm",errorInput:"SuperInputText_errorInput__Nvpyl",error:"SuperInputText_error__17oxV"}},,function(e,t,n){e.exports={someClass:"Greeting_someClass__2VeOI",error:"Greeting_error__2Az5b",errorInput:"Greeting_errorInput__39sRJ",Input:"Greeting_Input__1cqz0",errorText:"Greeting_errorText__1OdO2"}},function(e,t,n){e.exports={blue:"HW4_blue__15qM6",column:"HW4_column__2CKvO",testSpanError:"HW4_testSpanError__3Ecgp"}},,,,,function(e,t,n){e.exports={default:"SuperButton_default__15s3s",red:"SuperButton_red__236Il"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__hVkJB",spanClassName:"SuperCheckbox_spanClassName__lwj4s"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__1ctQg",input:"SuperEditableSpan_input__1Xxx0"}},,,,function(e,t,n){e.exports={App:"App_App__2SVTs"}},,,,,,function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(26),s=n.n(a),i=(n(33),n(27)),o=n.n(i),j=n(9),l=(n(34),n(0));var u=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)("button",{className:"mainMenuButton",children:"nav"}),Object(l.jsxs)("div",{className:"dropdownChild",children:[Object(l.jsx)(j.b,{to:"/pre-junior",children:"preJunior "}),Object(l.jsx)(j.b,{to:"/junior",children:"Junior "}),Object(l.jsx)(j.b,{to:"/junior-plus",children:"Junior+"})]})]})},b=n(3),d=n(8),O=n.n(d);var h=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:O.a.message,children:[Object(l.jsx)("img",{className:O.a.img,src:e.avatar,alt:""}),Object(l.jsx)("div",{className:O.a.angle}),Object(l.jsxs)("div",{className:O.a.content,children:[Object(l.jsx)("h4",{className:O.a.name,children:e.name}),Object(l.jsx)("h3",{className:O.a.text,children:e.message}),Object(l.jsxs)("h6",{className:O.a.time,children:[" ",e.time]})]})]})})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",p="Nana",m="\u041f\u043e\u043b\u043d\u0430\u044f \u043a\u0430\u0431\u0437\u0434\u0430",f="22:00";var v=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:"homeworks 1"}),Object(l.jsx)(h,{avatar:x,name:p,message:m,time:f}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},g=n(2);var _=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"}),e.affair.name,e.affair.priority]})};var C=function(e){var t=e.data.map((function(t){return Object(l.jsx)(_,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(l.jsxs)("div",{children:[t,Object(l.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(l.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},k=[{_id:1,name:"React ",priority:"high"},{_id:2,name:"anime ",priority:"low"},{_id:3,name:"games ",priority:"low"},{_id:4,name:"work ",priority:"high"},{_id:5,name:"html & css ",priority:"middle"}];var N=function(){var e=Object(r.useState)(k),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(g.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"high"===t?e.filter((function(e){return"high"===e.priority})):"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 2",Object(l.jsx)(C,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},y=n(12),S=n(15),w=n.n(S),I=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=e.onKeyPressHandler,i=c?w.a.errorInput:w.a.Input;return Object(l.jsxs)("span",{children:[Object(l.jsx)("input",{value:t,onChange:n,className:"".concat(i),onBlur:n,onKeyPress:s}),Object(l.jsx)("button",{onClick:r,disabled:!t,children:"add"}),Object(l.jsx)("span",{children:a}),Object(l.jsx)("div",{className:w.a.errorText,children:c})]})},T=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(g.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(g.a)(o,2),u=j[0],b=j[1],d=function(){n(s),alert("Hello ".concat(s," !")),i("")},O=t.length;return console.log(O),Object(l.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),b("")):(b("Is not valid name! Try again!"),i(""))},addUser:d,error:u,totalUsers:O,onKeyPressHandler:function(e){console.log(e),13===e.charCode&&d()}})},E=n(46);var A=function(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),Object(l.jsx)("div",{children:"homeworks 3"}),Object(l.jsx)(T,{users:n,addUserCallback:function(e){var t={_id:Object(E.a)(),name:e};c([t].concat(Object(y.a)(n)))}}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},M=n(5),F=n(4),B=n(13),J=n.n(B),P=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(J.a.error," ").concat(i||""),u="".concat(J.a.input," ").concat(a?J.a.errorInput:J.a.superInput," ").concat(s);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("input",Object(M.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:u},o)),a&&Object(l.jsx)("span",{className:j,children:a})]})},H=n(16),K=n.n(H),W=n(21),D=n.n(W),G=function(e){var t=e.red,n=e.className,r=Object(F.a)(e,["red","className"]),c="".concat(t?D.a.red:D.a.default," ").concat(n);return Object(l.jsx)("button",Object(M.a)({className:c},r))},L=n(22),U=n.n(L),q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(U.a.checkbox," ").concat(r||"");return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",Object(M.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(l.jsx)("span",{className:U.a.spanClassName,children:c})]})};var z=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(g.a)(i,2),j=o[0],u=o[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 4",Object(l.jsxs)("div",{className:K.a.column,children:[Object(l.jsx)(P,{value:n,onChangeText:c,onEnter:s,error:a,spanClassName:K.a.testSpanError}),Object(l.jsx)(P,{className:K.a.blue}),Object(l.jsx)(G,{children:"default"}),Object(l.jsx)(G,{red:!0,onClick:s,children:"delete "}),Object(l.jsx)(G,{disabled:!0,children:"disabled"}),Object(l.jsx)(q,{checked:j,onChangeChecked:u,children:"some text "}),Object(l.jsx)(q,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},V=n(23),X=n.n(V),R=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,c=e.spanProps,a=Object(F.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(r.useState)(!1),i=Object(g.a)(s,2),o=i[0],j=i[1],u=c||{},b=u.children,d=u.onDoubleClick,O=u.className,h=Object(F.a)(u,["children","onDoubleClick","className"]),x=" ".concat(X.a.span," ").concat(O);return Object(l.jsx)(l.Fragment,{children:o?Object(l.jsx)(P,Object(M.a)({autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()},className:X.a.input},a)):Object(l.jsxs)("span",Object(M.a)(Object(M.a)({onDoubleClick:function(e){j(!o),d&&d(e)},className:x},h),{},{children:[Object(l.jsx)("img",{src:"https://findicons.com/files/icons/1673/diagram_part_2/96/diagram_v2_25.png",height:"30px",width:"30px"})," ",b||a.value]}))})};function Q(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function Y(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}Q("test",{x:"A",y:1});Y("test",{x:"",y:0});var Z=function(){var e=Object(r.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 6",Object(l.jsx)("div",{children:Object(l.jsx)(R,{value:n,onChangeText:c,spanProps:{children:n?void 0:"enter text..."}})}),Object(l.jsx)(G,{onClick:function(){Q("editable-span-value",n)},children:"save"}),Object(l.jsx)(G,{onClick:function(){c(Y("editable-span-value",n))},children:"restore"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var $=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(v,{}),Object(l.jsx)(N,{}),Object(l.jsx)(A,{}),Object(l.jsx)(z,{}),Object(l.jsx)(Z,{})]})};n(41);var ee=function(){return Object(l.jsxs)("div",{className:"error",children:[Object(l.jsx)("div",{children:"404"}),Object(l.jsx)("div",{children:"Page not found!"}),Object(l.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},te=(n(42),function(e){var t=e.options,n=e.onChange,r=e.onChangeOption,c=Object(F.a)(e,["options","onChange","onChangeOption"]),a=null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)("option",{className:"option",value:e,children:e},t)}));return Object(l.jsx)("select",Object(M.a)(Object(M.a)({className:"select",onChange:function(e){n&&n(e),r&&r(e.currentTarget.value)}},c),{},{children:a}))}),ne=(n(43),function(e){e.type;var t=e.name,n=e.options,r=e.value,c=e.onChange,a=e.onChangeOption,s=(Object(F.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){c&&c(e),a&&a(e.currentTarget.value)}),i=n?n.map((function(e,n){return Object(l.jsxs)("label",{children:[Object(l.jsx)("input",{className:"radio",type:"radio",name:t,onChange:s,checked:e===r,value:e}),e]},t+"-"+n)})):[];return Object(l.jsx)("div",{children:i})}),re=["x","y","z"];var ce=function(){var e=Object(r.useState)(re[1]),t=Object(g.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 7",Object(l.jsx)("div",{children:Object(l.jsx)(te,{options:re,value:n,onChangeOption:c})}),Object(l.jsx)("div",{children:Object(l.jsx)(ne,{name:"radio",options:re,value:n,onChangeOption:c})}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})},ae=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(y.a)(e).sort((function(e,t){return e.age-t.age})):Object(y.a)(e).sort((function(e,t){return e.age-t.age})).reverse();case"check":return e.filter((function(e){return e.age>=18}));default:return e}},se=[{_id:0,name:"\u041a\u043e\u0442 ",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 ",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f ",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440 ",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439 ",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430 ",age:55}];var ie=function(){var e=Object(r.useState)(se),t=Object(g.a)(e,2),n=t[0],c=t[1],a=n.map((function(e){return Object(l.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1.7fr 0.7fr 10fr",gridAutoRows:"30px"},children:[Object(l.jsx)("div",{style:{border:"2px solid lightcoral"},children:e.name}),Object(l.jsx)("div",{style:{border:"2px solid lightcoral"},children:e.age})]},e._id)}));return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 8",a,Object(l.jsx)(G,{onClick:function(){return c(ae(se,{type:"sort",payload:"up"}))},children:"sort up"}),Object(l.jsx)(G,{onClick:function(){return c(ae(se,{type:"sort",payload:"down"}))},children:"sort down"}),Object(l.jsx)(G,{onClick:function(){return c(ae(se,{type:"check",payload:"check"}))},children:"check 18"}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var oe=function(){var e=Object(r.useState)(0),t=Object(g.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(new Date),s=Object(g.a)(a,2),i=s[0],o=s[1],j=Object(r.useState)(!1),u=Object(g.a)(j,2),b=u[0],d=u[1],O=function(){clearInterval(n)},h=(null===i||void 0===i?void 0:i.toLocaleTimeString())||Object(l.jsx)("br",{}),x=(null===i||void 0===i?void 0:i.toLocaleDateString())||Object(l.jsx)("br",{});return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{onMouseEnter:function(){d(!0)},onMouseLeave:function(){d(!1)},children:h}),b?Object(l.jsx)("div",{children:x}):Object(l.jsx)("br",{}),Object(l.jsx)(G,{onClick:function(){O();var e=window.setInterval((function(e){o(new Date)}),1e3);c(e)},children:"start"}),Object(l.jsx)(G,{onClick:O,children:"stop"})]})};var je=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)("hr",{}),"homeworks 9",Object(l.jsx)(oe,{}),Object(l.jsx)("hr",{}),Object(l.jsx)("hr",{})]})};var le=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(ce,{}),Object(l.jsx)(ie,{}),Object(l.jsx)(je,{})]})};var ue=function(){return Object(l.jsx)("div",{})},be="/pre-junior",de="/junior",Oe="/junior-plus";var he=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(b.d,{children:[Object(l.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(l.jsx)(b.a,{to:be})}}),Object(l.jsx)(b.b,{path:be,render:function(){return Object(l.jsx)($,{})}}),Object(l.jsx)(b.b,{path:de,render:function(){return Object(l.jsx)(le,{})}}),Object(l.jsx)(b.b,{path:Oe,render:function(){return Object(l.jsx)(ue,{})}}),Object(l.jsx)(b.b,{render:function(){return Object(l.jsx)(ee,{})}})]})})};var xe=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(j.a,{children:[Object(l.jsx)(u,{}),Object(l.jsx)(he,{})]})})};var pe=function(){return Object(l.jsxs)("div",{className:o.a.App,children:[Object(l.jsx)("div",{children:"react homeworks:"}),Object(l.jsx)("hr",{}),Object(l.jsx)(xe,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(pe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.957ad515.chunk.js.map