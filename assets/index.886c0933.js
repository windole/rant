import{r as i,j as c}from"./react-libs.a577cd60.js";import{c as u}from"./locales.fc745e15.js";import{C as y}from"./ConfigProviderContext.df49d753.js";const C=i.exports.createContext({}),h=l=>{const{direction:m,wrap:p,justify:o,align:a,gutter:s,style:r,className:d,children:n,...x}=l,{prefixCls:f,createNamespace:g}=i.exports.useContext(y),[e]=g("flexbox",f),t=i.exports.useMemo(()=>Array.isArray(s)?s:[s,0],[s]),F={...t[0]>0?{marginLeft:t[0]/-2,marginRight:t[0]/-2}:{},...t[1]>0?{marginTop:t[1]/-2,marginBottom:t[1]/2}:{},...r},N=u(d,e([m,p,o?`justify-${o}`:!1,a?`align-${a}`:!1]));return c(C.Provider,{value:{gutter:t},children:c("div",{className:N,style:F,...x,children:n})})};h.defaultProps={gutter:0};const $=l=>{const{prefixCls:m,createNamespace:p}=i.exports.useContext(y),[o]=p("flexitem",m),{style:a,className:s,span:r,children:d,flex:n,...x}=l,f=u(o([r==null?void 0:r.toString()]),s),g=e=>typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e;return c(C.Consumer,{children:({gutter:e})=>{let t={...a};return e&&(t={...e[0]>0?{paddingLeft:e[0]/2,paddingRight:e[0]/2}:{},...e[1]>0?{paddingTop:e[1]/2,paddingBottom:e[1]/2}:{},...t}),n&&(t.flex=g(n)),c("div",{...x,style:t,className:f,children:d})}})},b=Object.assign(h,{Item:$}),P=b;export{P as F};