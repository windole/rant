import{r as o,a as l,j as e}from"./react-libs.a577cd60.js";import{c as p}from"./rc-cli_site-mobile-demo.b251df1e.js";import"./index.832b6367.js";import{x as u}from"./Uploader.7389df6b.js";import"./index.3fcd27f5.js";import"./index.40c7e291.js";import{T as d,C as i}from"./index.772ab941.js";import"./index.886c0933.js";import"./constant.6ebb020b.js";import"./Rate.800b965d.js";import"./TextEllipsis.165110de.js";import"./index.b9396322.js";import"./ConfigProviderContext.df49d753.js";import"./locales.fc745e15.js";import"./mobile.279b54c4.js";import"./use-event-listener.0323d8ba.js";import"./use-touch.99c6363f.js";let n;const j=()=>{const[c,t]=o.exports.useState("1"),[m,a]=o.exports.useState(""),{DemoBlock:r,DemoSection:h}=p;return l(h,{children:[e(r,{title:"\u57FA\u7840\u7528\u6CD5",children:e("div",{className:"demo-radio-group",children:l(u.Group,{defaultValue:"1",children:[e(u,{name:"1",children:"\u5355\u9009\u68461"}),e(u,{name:"2",children:"\u5355\u9009\u68462"})]})})}),e(r,{title:"\u6C34\u5E73\u6392\u5217",children:e("div",{className:"demo-radio-group",children:l(u.Group,{defaultValue:"1",direction:"horizontal",children:[e(u,{name:"1",children:"\u5355\u9009\u68461"}),e(u,{name:"2",children:"\u5355\u9009\u68462"})]})})}),e(r,{title:"\u7981\u7528\u72B6\u6001",children:e("div",{className:"demo-radio-group",children:l(u.Group,{defaultValue:"1",disabled:!0,children:[e(u,{name:"1",children:"\u5355\u9009\u68461"}),e(u,{name:"2",children:"\u5355\u9009\u68462"})]})})}),e(r,{title:"\u81EA\u5B9A\u4E49\u5F62\u72B6",children:e("div",{className:"demo-radio-group",children:l(u.Group,{defaultValue:"1",children:[e(u,{name:"1",shape:"square",children:"\u5355\u9009\u68461"}),e(u,{name:"2",shape:"square",children:"\u5355\u9009\u68462"})]})})}),e(r,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",children:e("div",{className:"demo-radio-group",children:l(u.Group,{defaultValue:"1",children:[e(u,{name:"1",checkedColor:"#ee0a24",children:"\u5355\u9009\u68461"}),e(u,{name:"2",checkedColor:"#ee0a24",children:"\u5355\u9009\u68462"})]})})}),e(r,{title:"\u81EA\u5B9A\u4E49\u5927\u5C0F",children:e("div",{className:"demo-radio-group",children:l(u.Group,{defaultValue:"1",children:[e(u,{name:"1",iconSize:"24px",children:"\u5355\u9009\u68461"}),e(u,{name:"2",iconSize:"24px",children:"\u5355\u9009\u68462"})]})})}),e(r,{title:"\u7981\u6B62\u6587\u672C\u70B9\u51FB",children:e("div",{className:"demo-radio-group",children:l(u.Group,{defaultValue:"1",children:[e(u,{name:"1",labelDisabled:!0,children:"\u5355\u9009\u68461"}),e(u,{name:"2",labelDisabled:!0,children:"\u5355\u9009\u68462"})]})})}),e(r,{title:"\u5F02\u6B65\u66F4\u65B0",children:e("div",{className:"demo-radio-group",children:l(u.Group,{value:c,onChange:s=>{d.loading({forbidClick:!0}),clearTimeout(n),n=setTimeout(()=>{d.clear(),t(s)},500)},children:[e(u,{name:"1",labelDisabled:!0,children:"\u5355\u9009\u6846 1"}),e(u,{name:"2",labelDisabled:!0,children:"\u5355\u9009\u6846 2"})]})})}),e(r,{title:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",children:e(u.Group,{value:m,children:l(i.Group,{children:[e(i,{clickable:!0,title:"\u5355\u9009\u68461",icon:"shop-o",onClick:()=>a("1"),rightIcon:e(u,{name:"1"})}),e(i,{clickable:!0,title:"\u5355\u9009\u68462",icon:"shop-o",onClick:()=>a("2"),rightIcon:e(u,{name:"2"})})]})})})]})};export{j as default};