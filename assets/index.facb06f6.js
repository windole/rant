import{c as B}from"./rc-cli_site-mobile-demo.b251df1e.js";import"./index.832b6367.js";import{k as e,F as r,j as D,l as o,R as h,U as C}from"./Uploader.7389df6b.js";import"./index.3fcd27f5.js";import{a as s}from"./index.40c7e291.js";import{T as m}from"./index.772ab941.js";import"./index.886c0933.js";import"./constant.6ebb020b.js";import{R as b}from"./Rate.800b965d.js";import"./TextEllipsis.165110de.js";import"./index.b9396322.js";import{a as i,j as u}from"./react-libs.a577cd60.js";import"./ConfigProviderContext.df49d753.js";import"./locales.fc745e15.js";import"./mobile.279b54c4.js";import"./use-event-listener.0323d8ba.js";import"./use-touch.99c6363f.js";const S=()=>{const{DemoBlock:a,DemoSection:p}=B,[F]=e.useForm(),n=l=>{console.log(l)};return i(p,{children:[u(a,{title:"\u57FA\u7840\u7528\u6CD5",children:i(e,{showValidateMessage:!1,onFinish:n,footer:u("div",{style:{margin:"16px 16px 0"},children:u(s,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(e.Item,{tooltip:{message:"A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself."},intro:"\u786E\u4FDD\u8FD9\u662F\u552F\u4E00\u7684\u7528\u6237\u540D",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}],name:"username",label:"\u7528\u6237\u540D",children:u(r,{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"})}),u(e.Item,{rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}],name:"password",label:"\u5BC6\u7801",children:u(r,{placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"})})]})}),u(a,{title:"\u6821\u9A8C\u89C4\u5219-\u89E6\u53D1\u65F6\u673AonSubmit",children:i(e,{onFinish:n,validateTrigger:"onSubmit",footer:u("div",{style:{margin:"16px 16px 0"},children:u(s,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(e.Item,{name:"text1",label:"\u6B63\u5219\u6821\u9A8C",rules:[{pattern:/\d{6}/,message:"\u8BF7\u8F93\u51656\u4F4D\u6570\u5B57"}],children:u(r,{placeholder:"\u6B63\u5219\u6821\u9A8C"})}),u(e.Item,{name:"text2",label:"\u51FD\u6570\u6821\u9A8C",rules:[{validator:(l,t)=>/1\d{10}/.test(t)?Promise.resolve(!0):Promise.reject(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801"))}],children:u(r,{placeholder:"\u51FD\u6570\u6821\u9A8C"})}),u(e.Item,{label:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",name:"text3",rules:[{validator:(l,t)=>new Promise((d,c)=>{m.loading("\u9A8C\u8BC1\u4E2D..."),setTimeout(()=>{/\d{6}/.test(t)?d(!0):c(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9")),m.clear()},1e3)})}],children:u(r,{placeholder:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C"})})]})}),u(a,{title:"\u6821\u9A8C\u89C4\u5219-\u89E6\u53D1\u65F6\u673AonChange",children:i(e,{onFinish:n,footer:u("div",{style:{margin:"16px 16px 0"},children:u(s,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(e.Item,{name:"text1",label:"\u6B63\u5219\u6821\u9A8C2",rules:[{pattern:/\d{6}/,message:"\u8BF7\u8F93\u51656\u4F4D\u6570\u5B57"}],children:u(r,{placeholder:"\u6B63\u5219\u6821\u9A8C"})}),u(e.Item,{name:"text2",label:"\u51FD\u6570\u6821\u9A8C",rules:[{validator:(l,t)=>/1\d{10}/.test(t)?Promise.resolve(!0):Promise.reject(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801"))}],children:u(r,{placeholder:"\u51FD\u6570\u6821\u9A8C"})}),u(e.Item,{label:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",name:"text3",rules:[{validator:(l,t)=>new Promise((d,c)=>{m.loading("\u9A8C\u8BC1\u4E2D..."),setTimeout(()=>{/\d{6}/.test(t)?d(!0):c(new Error("\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9")),m.clear()},1e3)})}],children:u(r,{placeholder:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C"})})]})}),u(a,{title:"\u8868\u5355\u7C7B\u578B",children:i(e,{inset:!0,form:F,onFinish:n,footer:u("div",{style:{margin:"16px 16px 0"},children:u(s,{round:!0,nativeType:"submit",type:"primary",block:!0,children:"\u63D0\u4EA4"})}),children:[u(e.Item,{name:"switch",label:"\u5F00\u5173",valuePropName:"checked",children:u(D,{size:20})}),u(e.Item,{name:"checkbox",label:"\u590D\u9009\u6846",valuePropName:"checked",children:u(o,{shape:"square"})}),u(e.Item,{name:"checkbox_group",label:"\u590D\u9009\u6846\u7EC4",children:i(o.Group,{direction:"horizontal",children:[u(o,{shape:"square",name:"c1",children:"\u590D\u9009\u68461"}),u(o,{shape:"square",name:"c2",children:"\u590D\u9009\u68462"})]})}),u(e.Item,{name:"radio",label:"\u5355\u9009\u6846",initialValue:"r1",children:i(h.Group,{direction:"horizontal",children:[u(h,{name:"r1",children:"\u5355\u9009\u68461"}),u(h,{name:"r2",children:"\u5355\u9009\u68462"})]})}),u(e.Item,{name:"rate",label:"\u8BC4\u5206",initialValue:3,children:u(b,{})}),u(e.Item,{name:"uploader",label:"\u4E0A\u4F20\u6587\u4EF6",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u6587\u4EF6"}],initialValue:[{url:"https://img.yzcdn.cn/vant/sand.jpg",status:"done",name:"\u56FE\u7247\u540D\u79F0"}],children:u(C,{})}),u(e.Item,{name:"textarea",label:"\u8BE6\u7EC6\u5730\u5740",children:u(r,{rows:3,autosize:!0,type:"textarea",maxlength:140,showWordLimit:!0})})]})})]})};export{S as default};
