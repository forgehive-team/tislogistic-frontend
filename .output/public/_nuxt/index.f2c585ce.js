import{_ as u}from"./BreadCrumbs.24d0e7d4.js";import{a as _,b as h,c as S}from"./entry.f68164cd.js";import{m as d,F as l,y as c,H as s,R as r,I as t,U as $,V as x}from"./swiper-vue.2993ddf4.js";import{_ as f}from"./ServicesCards.eefe7954.js";import{_ as b}from"./ConclusionCard.aa29a51c.js";import{s as n}from"./servicesList.b0c11f18.js";import"./nuxt-link.93954f67.js";import"./index.c7f607e1.js";import"./nuxt-img.e914a1fe.js";import"./composables.383ec119.js";import"./state.ba484c07.js";const g={},y={class:"header"},C={class:"header__title"},I={class:"header__note"};function N(e,p){const o=u;return d(),l("header",y,[c(o),s("h1",C,[r(t(e.$texts.transportCompany)+" ",1),s("span",null,t(e.$texts.companyName),1),r(" "+t(e.$texts.servicesTitle),1)]),s("p",I,t(e.$texts.servicesNote),1)])}const B=_(g,[["render",N],["__scopeId","data-v-d77e532b"]]);const H={setup(){const{$texts:e}=h();S({title:e.seoServicesTitle})},computed:{mainServices(){return n.slice(0,5)},additionalServices(){return n.slice(5)}}},V=e=>($("data-v-b557a517"),e=e(),x(),e),T={class:"services-header"},k=V(()=>s("div",{class:"bg gradient-bg white-theme-only services-bg"},null,-1)),w={class:"services-main"},M={class:"services-list__title"},A={class:"services-extra"},D={class:"services-list__title"},E={class:"services-card"};function F(e,p,o,L,R,i){const m=B,a=f,v=b;return d(),l("div",null,[s("section",T,[k,c(m)]),s("section",w,[s("h2",M,t(e.$texts.mainServices),1),c(a,{class:"services-cards_services-page services-cards_main-services","services-list":i.mainServices},null,8,["services-list"])]),s("section",A,[s("h2",D,t(e.$texts.additionalServices),1),c(a,{class:"services-cards_services-page services-cards_additional-services","services-list":i.additionalServices},null,8,["services-list"])]),s("section",E,[c(v,{"seo-alt":e.$texts.seoConclusionServices},null,8,["seo-alt"])])])}const X=_(H,[["render",F],["__scopeId","data-v-b557a517"]]);export{X as default};
