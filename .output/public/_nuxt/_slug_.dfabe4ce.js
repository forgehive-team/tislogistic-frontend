import{_}from"./NewsPage.dab4537d.js";import{e as u,c as l,u as f}from"./entry.79df3faa.js";import{a as d}from"./fetch.887bc802.js";import{a0 as g,F as a,u as r,q as w,m as o}from"./swiper-vue.27e78005.js";import"./BreadCrumbs.14866252.js";import"./nuxt-link.27a9c7c3.js";import"./index.781e7d23.js";import"./SwiperControls.ea3766d1.js";import"./ArrowLeft.131675f1.js";import"./ArrowRight.bd0292b8.js";import"./FullScreenImg.033ce62f.js";import"./ProjectsItem.903bb2fd.js";import"./transformDate.5300e742.js";import"./state.73f9c402.js";import"./expand.bca86c69.js";const h={class:"news"},k={key:0},$={__name:"[slug]",async setup(y){let e,s;const{slug:n}=u().params,{newsApiBase:i}=f(),m=i+"projects/"+n,{pending:p,data:t}=([e,s]=g(()=>d(m,"$06HzrrEgMX")),e=await e,s(),e);return l({title:()=>t!=null&&t.value?t.value.title:"Проекты"}),(x,B)=>{const c=_;return o(),a("div",h,[r(p)?(o(),a("section",k,"Loading...")):(o(),w(c,{key:1,data:r(t),"is-news":!1},null,8,["data"]))])}}};export{$ as default};