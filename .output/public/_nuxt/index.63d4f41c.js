import{_ as u}from"./NewsMain.aaab3f7a.js";import{b as d,c as f,u as l}from"./entry.f68164cd.js";import{u as w}from"./fetch.1e53e790.js";import{a0 as h,w as x,u as t,F as o,y,m as a}from"./swiper-vue.2993ddf4.js";import"./BreadCrumbs.24d0e7d4.js";import"./nuxt-link.93954f67.js";import"./index.c7f607e1.js";import"./transformDate.1d41c9d0.js";import"./ExpandArrow.8332e278.js";import"./composables.383ec119.js";const g={key:0,class:"pending-load"},k={key:1},O={__name:"index",async setup(N){let e,s;const{$texts:r}=d();f({title:r.news});const{newsApiBase:i}=l(),c=i+"news",{pending:n,data:p,refresh:_}=([e,s]=h(()=>w(c,{key:"news"},"$zNHINvfvSO")),e=await e,s(),e);return x(()=>{_()}),(v,A)=>{const m=u;return t(n)?(a(),o("div",g)):(a(),o("div",k,[y(m,{data:t(p),pending:t(n)},null,8,["data","pending"])]))}}};export{O as default};
