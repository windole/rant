import{r as c,a as i,j as u}from"./react-libs.a577cd60.js";import{c as a}from"./rc-cli_site-mobile-demo.b251df1e.js";import"./index.832b6367.js";import{q as e}from"./Uploader.7389df6b.js";import{a as o}from"./index.3fcd27f5.js";import"./index.40c7e291.js";import{C as t}from"./index.772ab941.js";import{F as m}from"./index.886c0933.js";import"./constant.6ebb020b.js";import"./Rate.800b965d.js";import"./TextEllipsis.165110de.js";import"./index.b9396322.js";import"./ConfigProviderContext.df49d753.js";import"./locales.fc745e15.js";import"./mobile.279b54c4.js";import"./use-event-listener.0323d8ba.js";import"./use-touch.99c6363f.js";const j=()=>{const{DemoBlock:s,DemoSection:n}=a,[l,r]=c.exports.useState(!1);return i(n,{className:"demo-notify",children:[u(s,{card:!0,title:"\u57FA\u7840\u7528\u6CD5",children:u(t,{title:"\u57FA\u7840\u7528\u6CD5",isLink:!0,onClick:()=>e.show("\u901A\u77E5\u5185\u5BB9")})}),i(s,{card:!0,title:"\u901A\u77E5\u7C7B\u578B",children:[u(t,{title:"\u4E3B\u8981\u901A\u77E5",isLink:!0,onClick:()=>e.show({type:"primary",message:"\u901A\u77E5\u5185\u5BB9"})}),u(t,{title:"\u6210\u529F\u901A\u77E5",isLink:!0,onClick:()=>e.show({type:"success",message:"\u901A\u77E5\u5185\u5BB9"})}),u(t,{title:"\u5371\u9669\u901A\u77E5",isLink:!0,onClick:()=>e.show({type:"danger",message:"\u901A\u77E5\u5185\u5BB9"})}),u(t,{title:"\u8B66\u544A\u901A\u77E5",isLink:!0,onClick:()=>e.show({type:"warning",message:"\u901A\u77E5\u5185\u5BB9"})})]}),i(s,{card:!0,title:"\u81EA\u5B9A\u4E49\u914D\u7F6E",children:[u(t,{title:"\u81EA\u5B9A\u4E49\u989C\u8272",isLink:!0,onClick:()=>e.show({message:"\u81EA\u5B9A\u4E49\u989C\u8272",color:"#ad0000",background:"#ffe1e1"})}),u(t,{title:"\u81EA\u5B9A\u4E49\u65F6\u957F",isLink:!0,onClick:()=>e.show({message:"\u81EA\u5B9A\u4E49\u65F6\u957F",duration:1e3})})]}),i(s,{card:!0,title:"\u7EC4\u4EF6\u8C03\u7528",children:[u(t,{title:"\u7EC4\u4EF6\u8C03\u7528",isLink:!0,onClick:()=>r(!0)}),u(e,{visible:l,type:"success",children:i(m,{style:{width:"100%"},align:"center",justify:"between",children:[u("div",{}),i("div",{children:[u(o,{name:"bell",style:{marginRight:4}}),u("span",{children:"\u901A\u77E5\u5185\u5BB9"})]}),u(o,{name:"close",onClick:()=>r(!1)})]})})]})]})};export{j as default};