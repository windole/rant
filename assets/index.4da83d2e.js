import{r as d,a as n,j as e}from"./react-libs.a577cd60.js";import{c as h}from"./rc-cli_site-mobile-demo.b251df1e.js";import"./index.832b6367.js";import{M as i}from"./Uploader.7389df6b.js";import"./index.3fcd27f5.js";import"./index.40c7e291.js";import{T as l}from"./index.772ab941.js";import"./index.886c0933.js";import"./constant.6ebb020b.js";import"./Rate.800b965d.js";import"./TextEllipsis.165110de.js";import"./index.b9396322.js";import"./ConfigProviderContext.df49d753.js";import"./locales.fc745e15.js";import"./mobile.279b54c4.js";import"./use-event-listener.0323d8ba.js";import"./use-touch.99c6363f.js";const c={active:"https://img.yzcdn.cn/vant/user-active.png",inactive:"https://img.yzcdn.cn/vant/user-inactive.png"},T=()=>{const{DemoBlock:t,DemoSection:u}=h,[r,m]=d.exports.useState("setting");return n(u,{className:"demo-badge",children:[e(t,{title:"\u57FA\u7840\u7528\u6CD5",children:n(i,{children:[e(i.Item,{icon:"home-o",children:"\u6807\u7B7E"}),e(i.Item,{icon:"search",children:"\u6807\u7B7E"}),e(i.Item,{icon:"friends-o",children:"\u6807\u7B7E"}),e(i.Item,{icon:"setting-o",children:"\u6807\u7B7E"})]})}),e(t,{title:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",children:n(i,{value:r,onChange:o=>{m(o)},children:[e(i.Item,{name:"home",icon:"home-o",children:"\u6807\u7B7E"}),e(i.Item,{name:"search",icon:"search",children:"\u6807\u7B7E"}),e(i.Item,{name:"firends",icon:"friends-o",children:"\u6807\u7B7E"}),e(i.Item,{name:"setting",icon:"setting-o",children:"\u6807\u7B7E"})]})}),e(t,{title:"\u5FBD\u6807\u63D0\u793A",children:n(i,{children:[e(i.Item,{icon:"home-o",children:"\u6807\u7B7E"}),e(i.Item,{badge:{dot:!0},icon:"search",children:"\u6807\u7B7E"}),e(i.Item,{badge:{content:5},icon:"friends-o",children:"\u6807\u7B7E"}),e(i.Item,{badge:{content:20},icon:"setting-o",children:"\u6807\u7B7E"})]})}),e(t,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807",children:n(i,{children:[e(i.Item,{icon:o=>e("img",{alt:"",src:o?c.active:c.inactive}),children:"\u6807\u7B7E"}),e(i.Item,{icon:"friends-o",children:"\u6807\u7B7E"}),e(i.Item,{icon:"setting-o",children:"\u6807\u7B7E"})]})}),e(t,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",children:n(i,{activeColor:"#f44336",inactiveColor:"#000",children:[e(i.Item,{icon:"home-o",children:"\u6807\u7B7E"}),e(i.Item,{icon:"search",children:"\u6807\u7B7E"}),e(i.Item,{icon:"friends-o",children:"\u6807\u7B7E"}),e(i.Item,{icon:"setting-o",children:"\u6807\u7B7E"})]})}),e(t,{title:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6",children:n(i,{onChange:o=>l.info(`\u6807\u7B7E${+o+1}`),children:[e(i.Item,{icon:"home-o",children:"\u6807\u7B7E"}),e(i.Item,{icon:"search",children:"\u6807\u7B7E"}),e(i.Item,{icon:"friends-o",children:"\u6807\u7B7E"}),e(i.Item,{icon:"setting-o",children:"\u6807\u7B7E"})]})})]})};export{T as default};