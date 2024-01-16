import{_ as U}from"./BreadCrumbs.058581cb.js";import{_ as Y}from"./CitySlider.cbaccc78.js";import{f as L,a as $,M as k,F as p,m as _,q as x,x as g,y as d,u as c,H as e,J as C,L as w,I as o,Q,N as f,O as V,P as q,R as H,e as P,U as R,V as D,W as O}from"./swiper-vue.27e78005.js";import{Y as F,d as j,a as v,b as I,c as z,u as E}from"./entry.92e2d9ec.js";import{u as J}from"./composables.cdd16945.js";import{_ as W}from"./LinkUnderline.28137004.js";import{_ as G}from"./nuxt-img.aa236df6.js";import{_ as K}from"./DeliveryCalculator.099f90ed.js";import{_ as X}from"./CompanyLogo.02e3b768.js";import"./nuxt-link.11b8d193.js";import"./index.e8ce400e.js";import"./maska.b0acde3f.js";import"./expand.d5924fc7.js";import"./state.f1f43e6f.js";import"./validate.359f59e0.js";const Z=L({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(n,{slots:t,attrs:r}){const i=$(!1);return k(()=>{i.value=!0}),s=>{var m;if(i.value)return(m=t.default)==null?void 0:m.call(t);const u=t.fallback||t.placeholder;if(u)return u();const a=s.fallback||s.placeholder||"",l=s.fallbackTag||s.placeholderTag||"span";return p(l,r,a)}}});const ee={__name:"YandexMap",props:["coordinates"],setup(n){const t=n;return(r,i)=>{const s=Z;return _(),x(s,null,{default:g(()=>[d(c(F),{coordinates:t.coordinates},{default:g(()=>[d(c(j),{coordinates:t.coordinates,"marker-id":123},null,8,["coordinates"])]),_:1},8,["coordinates"])]),_:1})}}};const te={class:"branch-info"},se={class:"info"},oe={class:"label"},ne={key:0,class:"map"},ae={__name:"BranchInfo",props:["data"],setup(n){const t=n,{$texts:r}=I(),i=$(!1);k(()=>{setTimeout(()=>{i.value=!0},1e3)});const s=[{label:r.phone,ref:"phone_number"},{label:r.address,ref:"address"},{label:r.workingHours,ref:"schedule"}];return(u,a)=>{const l=ee;return _(),p("div",te,[e("div",se,[(_(),p(C,null,w(s,(m,h)=>e("div",{key:h,class:"item"},[e("p",oe,o(m.label),1),e("p",{class:Q(["value",h<1&&"value_bold"])},o(t.data[m.ref]),3)])),64))]),c(i)?(_(),p("div",ne,[d(l,{coordinates:t.data.coordinates},null,8,["coordinates"]),e("div",null,[e("h3",null,o(t.data.coords),1)])])):f("",!0)])}}},ce=v(ae,[["__scopeId","data-v-a956898c"]]);const _e={class:"ceo-wrapper"},ie={class:"ceo-container"},re={class:"person"},le={class:"name"},de={class:"ceo"},pe={class:"text-container"},ue={class:"quote"},me={class:"mobile-only mobile-content"},he={class:"name"},fe={class:"ceo"},ge={class:"ceo-container ceo-container_deputy"},ve={class:"person"},ye={class:"name"},$e={class:"ceo"},xe={__name:"CeoQuote",setup(n){const t=J(),i=`background-image: url('${t("images/ceo.png")}')`,u=`background-image: url('${t("images/deputy_ceo.png")}')`;return(a,l)=>(_(),p("div",_e,[e("div",ie,[e("div",{class:"photo-container photo-container_ceo",style:i},[e("div",re,[e("p",le,o(a.$texts.ceoName),1),e("p",de,o(a.$texts.ceo),1)])]),e("div",pe,[e("p",ue,o(a.$texts.ceoQuote),1),e("div",me,[e("div",{class:"photo-container",style:i}),e("p",he,o(a.$texts.ceoName),1),e("p",fe,o(a.$texts.ceo),1)])])]),e("div",ge,[e("div",{class:"photo-container photo-container_deputy",style:u},[e("div",ve,[e("p",ye,o(a.$texts.deputyCeoName),1),e("p",$e,o(a.$texts.deputyCeo),1)])])])]))}},be=v(xe,[["__scopeId","data-v-203f276c"]]);const ke={class:"administration"},Ce={class:"slide-content"},we={class:"img-container"},Ie=["src"],Se={class:"name"},Be={class:"position"},Te={__name:"AdministrationSlider",props:["data"],setup(n){const t=n;return(r,i)=>{const s=V,u=q;return _(),p("div",ke,[e("h2",null,o(r.$texts.branchAdministration),1),d(u,{class:"swiper","slides-per-view":"auto",breakpoints:{320:{spaceBetween:12},768:{spaceBetween:12},1248:{spaceBetween:16}}},{default:g(()=>[(_(!0),p(C,null,w(t.data,(a,l)=>(_(),x(s,{key:l,class:"slide"},{default:g(()=>[e("div",Ce,[e("div",we,[a.image?(_(),p("img",{key:0,src:a.image},null,8,Ie)):f("",!0)]),e("p",Se,o(a.name),1),e("p",Be,o(a.position),1)])]),_:2},1024))),128))]),_:1})])}}},Ne=v(Te,[["__scopeId","data-v-e262988c"]]);const Ae={},Me={class:"telegram"};function Ue(n,t){const r=W,i=G;return _(),p("div",Me,[e("h2",null,o(n.$texts.telegramTitle),1),e("p",null,o(n.$texts.telegramDescription),1),d(r,{to:n.$texts.telegramLink,blank:!0},{default:g(()=>[H(o(n.$texts.goToTelegram),1)]),_:1},8,["to"]),d(i,{src:"images/telegram.png",format:"webp",quality:"100"})])}const Ye=v(Ae,[["render",Ue],["__scopeId","data-v-bc5eda65"]]);const Le=n=>(R("data-v-ae861809"),n=n(),D(),n),Qe=Le(()=>e("div",{class:"bg white-theme-only gradient-bg"},null,-1)),Ve={class:"city-slider"},qe={class:"branch-info"},He={key:0},Pe={key:1,class:"administration"},Re={class:"calculator__back-blur"},De={__name:"contacts",setup(n){const{$texts:t}=I(),{newsApiBase:r}=E(),i=r+"contacts";z({title:t.contacts});const s=$(null),u=$(1),a=m=>{u.value=m},l=P(()=>s.value?O(s.value).find(m=>m.id===u.value):null);return k(async()=>{const h=(await $fetch(i)).map(y=>({...y,coordinates:Object.values(y.coordinates).map(b=>Number(b))}));s.value=h}),(m,h)=>{const y=U,b=Y,S=ce,B=be,T=Ne,N=Ye,A=K,M=X;return _(),p("div",null,[e("section",null,[Qe,d(y,{class:"breadcrumbs"}),e("h1",null,o(c(t).contacts),1)]),e("section",Ve,[c(s)?(_(),x(b,{key:0,"active-city-id":c(u),cities:c(s),onPickCity:a},null,8,["active-city-id","cities"])):f("",!0)]),e("section",qe,[c(l)?(_(),x(S,{key:0,data:c(l)},null,8,["data"])):f("",!0)]),c(l)&&c(l).is_major_branch?(_(),p("section",He,[e("h2",null,o(c(t).companyAdministration),1),d(B,{class:"ceo-quote"})])):c(s)&&c(l).employees.length?(_(),p("section",Pe,[d(T,{data:c(l).employees},null,8,["data"])])):f("",!0),e("section",null,[d(N)]),e("section",null,[e("div",Re,[d(A),d(M,{class:"logo"})])])])}}},nt=v(De,[["__scopeId","data-v-ae861809"]]);export{nt as default};