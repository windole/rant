import{r as c,a as s,j as t}from"./react-libs.a577cd60.js";import{c as a}from"./rc-cli_site-mobile-demo.b251df1e.js";import"./index.832b6367.js";import{m as e}from"./Uploader.7389df6b.js";import"./index.3fcd27f5.js";import"./index.40c7e291.js";import{C as i,T as m}from"./index.772ab941.js";import"./index.886c0933.js";import"./constant.6ebb020b.js";import"./Rate.800b965d.js";import"./TextEllipsis.165110de.js";import"./index.b9396322.js";import"./ConfigProviderContext.df49d753.js";import"./locales.fc745e15.js";import"./mobile.279b54c4.js";import"./use-event-listener.0323d8ba.js";import"./use-touch.99c6363f.js";const u=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg"],I=()=>{const{DemoBlock:o,DemoSection:n}=a,[l,r]=c.exports.useState(!1);return s(n,{children:[t(o,{card:!0,title:"\u57FA\u7840\u7528\u6CD5",children:t(i,{title:"\u9884\u89C8\u56FE\u7247",isLink:!0,onClick:()=>e.open({images:u})})}),s(o,{card:!0,title:"\u4F20\u5165\u914D\u7F6E\u9879",children:[t(i,{title:"\u6307\u5B9A\u521D\u59CB\u4F4D\u7F6E",isLink:!0,onClick:()=>e.open({images:u,startPosition:2})}),t(i,{title:"\u5C55\u793A\u5173\u95ED\u6309\u94AE",isLink:!0,onClick:()=>e.open({images:u,startPosition:2,closeable:!0})}),t(i,{title:"\u76D1\u542C\u5173\u95ED\u4E8B\u4EF6",isLink:!0,onClick:()=>e.open({images:u,startPosition:2,onClose:()=>{m.info("\u5173\u95ED\u9884\u89C8")}})}),t(i,{title:"\u5C55\u793A\u6307\u793A\u70B9",isLink:!0,onClick:()=>e.open({images:u,showIndicators:!0,showIndex:!1})})]}),t(o,{card:!0,title:"\u5F02\u6B65\u5173\u95ED",children:t(i,{title:"\u9884\u89C8\u56FE\u7247",isLink:!0,onClick:()=>{const p=()=>e.open({images:u});setTimeout(()=>p(),2e3)}})}),t(o,{card:!0,title:"\u7EC4\u4EF6\u8C03\u7528",children:t(i,{title:"\u7EC4\u4EF6\u8C03\u7528",isLink:!0,onClick:()=>r(!0)})}),t(e,{visible:l,onClose:()=>r(!1),images:u,showIndicators:!0,showIndex:!1})]})};export{I as default};