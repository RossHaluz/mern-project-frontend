"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[147],{3147:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var n=s(7689),l=s(9439),c=s(8820),a=s(6431),i=s.n(a),r=s(9434),x=s(8987),o=s(8174),d=s(1087),m=s(6920),u=s(2791),p=s(184),f=function(e){var t=e.item,s=t.comment,n=t.createdAt,l=s.split("").splice(0,2,1).join("").toUpperCase();return(0,p.jsxs)("li",{className:"flex items-center gap-2 border-2 border-gray-300 p-2",children:[(0,p.jsx)("div",{className:"rounded-[50%] bg-gray-500 w-[40px] h-[40px] flex justify-center items-center text-white",children:l}),(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"text-[#030303] text-[18px]",children:s}),(0,p.jsx)("p",{className:"text-[12px] text-gray-600 opacity-40",children:(0,p.jsx)(i(),{format:"DD MMM YYYY HH:mm",date:n})})]})]})},h=function(e){var t=e.userComments;return(0,p.jsx)(p.Fragment,{children:(0,p.jsx)("div",{className:"mt-5",children:0===t.length?"\u041f\u043e\u043a\u0438 \u0449\u043e \u043d\u0435\u043c\u0430\u0454 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0432":(0,p.jsx)("ul",{className:"flex flex-col gap-5",children:0===t.length?"\u041f\u043e\u043a\u0438 \u0449\u043e \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0457\u0432 \u043d\u0435\u043c\u0430\u0454":null===t||void 0===t?void 0:t.map((function(e){return(0,p.jsx)(f,{item:e},e._id)}))})})})},j=function(e){var t=e.post,s=e.id,a=(0,r.I0)(),f=(0,r.v9)((function(e){return e.post})).loading,j=(0,r.v9)((function(e){return e.auth})).user,g=(0,r.v9)((function(e){return e.comment})).comments,v=(0,n.s0)(),y=(0,u.useState)(""),N=(0,l.Z)(y,2),b=N[0],w=N[1];(0,u.useEffect)((function(){a((0,m.h)(s))}),[a,s]);var Y=t.title,k=t.text,C=t.imgUrl,M=t.username,_=t.createdAt,D=t.views,I=t.comments;return(0,p.jsxs)("div",{className:"flex flex-col gap-5 py-3",children:[!f&&(0,p.jsxs)("div",{className:"mt-4",children:[C&&(0,p.jsx)("div",{className:"flex h-[11rem] mb:h-80",children:(0,p.jsx)("img",{src:C,alt:C.name,className:"rounded-2xl object-contain w-full"})}),(0,p.jsxs)("div",{className:"flex justify-between items-center mt-5",children:[(0,p.jsxs)("span",{className:"text-xs text-[#030303] opacity-50",children:["\u0430\u0432\u0442\u043e\u0440: ",M]}),(0,p.jsx)("span",{className:"text-xs text-[#030303] opacity-50",children:(0,p.jsx)(i(),{date:_,format:"D MMM YYYY"})})]}),(0,p.jsxs)("div",{className:"mt-4",children:[(0,p.jsx)("h2",{className:"text-lg text-[#030303]",children:Y}),(0,p.jsx)("p",{className:"text-xs text-[#030303] opacity-60 pt-1",children:k})]}),(0,p.jsxs)("div",{className:"flex gap-3 mt-2 items-center justify-between",children:[(0,p.jsxs)("div",{className:"flex gap-3 mt-4",children:[(0,p.jsxs)("button",{type:"button",className:"flex items-center justify-center gap-2 text-sm text-[#030303] opacity-50",children:[(0,p.jsx)(c.w8I,{})," ",(0,p.jsx)("span",{children:D})]}),(0,p.jsxs)("button",{type:"button",className:"flex items-center justify-center gap-2 text-sm text-[#030303] opacity-50",children:[(0,p.jsx)(c.e$J,{})," ",(0,p.jsx)("span",{children:(null===I||void 0===I?void 0:I.length)||0})]})]}),(null===j||void 0===j?void 0:j._id)===(null===t||void 0===t?void 0:t.author)&&(0,p.jsxs)("div",{className:"flex gap-3",children:[(0,p.jsx)(d.rU,{to:"/".concat(s,"/eddit"),className:"flex items-center justify-center gap-2 text-lg text-[#030303] opacity-50",children:(0,p.jsx)(c.dEB,{})}),(0,p.jsx)("button",{type:"button",onClick:function(){a((0,x.Yb)(s)),o.Am.success("\u041f\u043e\u0441\u0442 \u0443\u0441\u043f\u0456\u0448\u043d\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0438\u0439"),v("/")},className:"flex items-center  text-lg justify-center gap-2 text-[#030303] opacity-50",children:(0,p.jsx)(c.ql3,{})})]})]})]}),(0,p.jsxs)("div",{className:"w-full md:w-[450px] mt-3 flex flex-col gap-3",children:[(0,p.jsx)("h2",{className:"text-lg text-[#030303] opacity-80 ",children:"\u0417\u0430\u043b\u0438\u0448\u0438\u0442\u0438 \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0456\u0457"}),(0,p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a((0,m.P)({postId:s,comment:b})),w("")},children:[(0,p.jsx)("textarea",{type:"text",value:b,onChange:function(e){return w(e.target.value)},placeholder:"\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0440\u0456\u0457",className:"border-2 border-solid border-[#030303] text-xs text-[#030303] w-full p-3 resize-none outline-none "}),(0,p.jsxs)("div",{className:"flex flex-row gap-3 mt-2",children:[(0,p.jsx)("button",{type:"submit",className:"text-xs bg-gray-800 text-white py-3 px-4 rounded-lg",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"}),(0,p.jsx)("button",{type:"click",className:"text-xs bg-red-600 text-white py-3 px-4 rounded-lg",children:"\u0421\u043a\u0430\u0441\u0443\u0432\u0430\u0442\u0438"})]})]}),(0,p.jsx)(h,{userComments:g})]})]})},g=function(){var e=(0,n.UO)().id,t=(0,r.I0)(),s=(0,r.v9)((function(e){return e.post})).post;return(0,u.useEffect)((function(){t((0,x.xl)(e))}),[e,t]),(0,p.jsx)(p.Fragment,{children:!!s&&(0,p.jsx)(j,{post:s,id:e})})}}}]);
//# sourceMappingURL=147.f344dd0b.chunk.js.map