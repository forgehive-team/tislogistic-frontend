import{_}from"./NewsPage.8822d7fb.js";import{e as u,c as l,u as f}from"./entry.f68164cd.js";import{a as d}from"./fetch.1e53e790.js";import{a0 as g,F as r,u as a,q as w,m as o}from"./swiper-vue.2993ddf4.js";import"./BreadCrumbs.24d0e7d4.js";import"./nuxt-link.93954f67.js";import"./index.c7f607e1.js";import"./SwiperControls.2fdcce77.js";import"./ArrowLeft.dc31d419.js";import"./ArrowRight.d3f20c99.js";import"./FullScreenImg.96b542a5.js";import"./ProjectsItem.df50e865.js";import"./transformDate.1d41c9d0.js";import"./state.ba484c07.js";import"./expand.901515da.js";const h={class:"news"},k={key:0},$={__name:"[slug]",async setup(y){let e,s;const{slug:n}=u().params,{newsApiBase:i}=f(),m=i+"projects/"+n,{pending:c,data:t}=([e,s]=g(()=>d(m,"$06HzrrEgMX")),e=await e,s(),e);return l({title:()=>t!=null&&t.value?t.value.title:"Projects"}),(x,B)=>{const p=_;return o(),r("div",h,[a(c)?(o(),r("section",k,"Loading...")):(o(),w(p,{key:1,data:a(t),"is-news":!1},null,8,["data"]))])}}};export{$ as default};
