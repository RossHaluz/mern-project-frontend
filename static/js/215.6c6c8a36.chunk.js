"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[215],{9215:function(e,t,s){s.r(t);var n=s(9439),a=s(2791),r=s(9434),o=s(7689),l=s(8987),i=s(8174),u=s(184);t.default=function(){var e=(0,o.UO)().id,t=(0,r.v9)((function(e){return e.post})).posts.find((function(t){return t._id===e})),s=(0,a.useState)(t.title),c=(0,n.Z)(s,2),p=c[0],x=c[1],m=(0,a.useState)(t.text),d=(0,n.Z)(m,2),f=d[0],g=d[1],h=(0,a.useState)(t.imgUrl),b=(0,n.Z)(h,1)[0],j=(0,a.useState)(""),y=(0,n.Z)(j,2),v=y[0],w=y[1],N=(0,r.I0)(),C=(0,o.s0)();return(0,u.jsx)("div",{className:"flex mt-10 m-auto w-[650px]",children:(0,u.jsxs)("form",{className:"flex flex-col gap-3 w-full",onSubmit:function(t){t.preventDefault();var s=new FormData;s.append("title",p),s.append("text",f),s.append("image",v),N((0,l.CP)({id:e,postData:s})),i.Am.success("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0437\u043c\u0456\u043d\u0435\u043d\u043e"),C("/posts")},children:[b&&!v?(0,u.jsx)("img",{src:"http://localhost:3005/".concat(b),alt:"Post img"}):(0,u.jsx)("img",{src:URL.createObjectURL(v),alt:"Post img"}),(0,u.jsxs)("label",{className:"text-gray-300 bg-gray-600 text-sm flex justify-center items-center border-2 border-dotted cursor-pointer py-4",children:["\u0417\u043c\u0456\u043d\u0438\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f",(0,u.jsx)("input",{type:"file",className:"hidden",onChange:function(e){return w(e.target.files[0])}})]}),(0,u.jsx)("input",{type:"text",value:p,onChange:function(e){return x(e.target.value)},className:"border-2 border-solid py-4 px-2 text-sm texs-[#030303] outline-none"}),(0,u.jsx)("textarea",{type:"text",value:f,onChange:function(e){return g(e.target.value)},className:"border-2 border-solid py-4 px-2 text-sm texs-[#030303] resize-none min-h-min outline-none"}),(0,u.jsxs)("div",{className:"flex gap-3 items-center",children:[(0,u.jsx)("button",{type:"submit",className:"bg-[#00684a] py-3 px-6 text-sm text-white rounded-lg",children:"Save"}),(0,u.jsx)("button",{type:"button",onClick:function(){C("/posts")},className:"bg-red-700 py-3 px-6 text-sm text-white rounded-lg",children:"Cansel"})]})]})})}}}]);
//# sourceMappingURL=215.6c6c8a36.chunk.js.map