import{_ as D}from"./ServicesHeader.730c5bfb.js";import{_ as z}from"./nuxt-img.5c631e8f.js";import{a as g,b as L,c as T}from"./entry.79df3faa.js";import{m as n,F as a,H as e,I as m,J as v,L as y,y as o,X as b,q as A,u as P,a as C,Y as N,x as I,O as B,P as U,U as q,V as H,R as O}from"./swiper-vue.27e78005.js";import{u as k}from"./composables.e0c01892.js";import{_ as V}from"./SwiperControls.87f549ae.js";import{_ as F}from"./AdvantagesSliderSlide.0b98855e.js";import{_ as K}from"./KeyIndicators.52e5cc8f.js";import{_ as W}from"./CompanyProjects.e0d1ee15.js";import{_ as R}from"./DeliveryCalculator.b34b13f9.js";import{_ as E}from"./CompanyLogo.8a5d8e4c.js";import{_ as G}from"./ServicesLinks.35ceaa43.js";import{b as J}from"./state.73f9c402.js";import"./BreadCrumbs.14866252.js";import"./nuxt-link.27a9c7c3.js";import"./index.781e7d23.js";import"./ExpandArrow.38c87ede.js";import"./ArrowLeft.131675f1.js";import"./ArrowRight.bd0292b8.js";import"./LinkUnderline.0725a594.js";import"./ProjectsItem.903bb2fd.js";import"./transformDate.5300e742.js";import"./maska.b0acde3f.js";import"./expand.bca86c69.js";import"./validate.359f59e0.js";import"./servicesList.e9ab9919.js";const X={computed:{points(){const{$texts:t}=L();return[{title:t.optimalProjectDevelopment,text:t.optimalProjectDevelopmentDesc,img:"images/complex_organization/optimal_project_development.svg"},{title:t.turnKeySupport,text:t.turnKeySupportDesc,img:"images/complex_organization/turn_key_support.svg"},{title:t.employConstructor,text:t.employConstructorDesc,img:"images/complex_organization/employ_constructor.svg"},{title:t.closeAllTasks,text:t.closeAllTasksDesc,img:"images/complex_organization/close_all_tasks.svg"}]}}},Y={class:"complex-organization"},M={class:"complex-organization__points-container"};function Q(t,i,_,d,p,c){const s=z;return n(),a("div",Y,[e("h2",null,m(t.$texts.deliveryComplexOrganization),1),e("div",M,[(n(!0),a(v,null,y(c.points,(l,u)=>(n(),a("div",{key:u,class:"complex-organization__point"},[o(s,{src:l.img,alt:l.title+" в ТИС Лоджистик",class:"icon-gray"},null,8,["src","alt"]),e("h4",null,m(l.title),1),e("p",null,m(l.text),1)]))),128))])])}const Z=g(X,[["render",Q],["__scopeId","data-v-cc7a3027"]]);const tt={props:{data:{type:Object,required:!0}},computed:{bg(){return{backgroundImage:`url('${k()(this.data.img,{format:"webp",quality:60,alt:this.data.seoAlt})}')`}}}},et={class:"card"},st=["title"],ot={class:"card__info"};function nt(t,i,_,d,p,c){return n(),a("div",et,[e("div",{class:"card__img-container",title:_.data.seoAlt,style:b(c.bg)},null,12,st),e("div",ot,[e("h3",null,m(_.data.title),1),e("ul",null,[(n(!0),a(v,null,y(_.data.list,(s,l)=>(n(),a("li",{key:l},m(s),1))),128))])])])}const it=g(tt,[["render",nt],["__scopeId","data-v-f3557c55"]]),S="images/any_delivery/",ct=[{title:"Перевозка оборудования",img:S+"equipment_transportation.jpg",list:["Нефтегазовой промышленности","Горнодобывающей промышленности","Металлургической промышленности","Энергетическое оборудование","Крупногабаритные станки","Силосы для сельхозтоваропроизводителей"],seoAlt:"Перевозка оборудования от TIS Logistic"},{title:"Перевозка специальной техники",img:S+"special_transportation.jpg",list:["Экскаваторы","Трактора","Башенные краны","Катки","Погрузчики","Сельхозтехника"],seoAlt:"Перевозка специальной техники от TIS Logistic"},{title:"Перевозка транспорта",img:S+"vehicles_transportation.jpg",list:["Легковые автомобили","Грузовые автомобили, автобусы","Яхты, круизные катера","Корабельные якоря","Судовые двигатели"],seoAlt:"Перевозка транспорта от TIS Logistic"}];const rt={class:"any-delivery"},at={__name:"AnyDelivery",setup(t){return(i,_)=>{const d=it;return n(),a("div",rt,[e("h2",null,m(i.$texts.anyDeliveryTitle),1),(n(!0),a(v,null,y(P(ct),(p,c)=>(n(),A(d,{key:c,data:p},null,8,["data"]))),128))])}}},_t=g(at,[["__scopeId","data-v-f9bf815d"]]),r="images/project_logistics_slides",lt=[r+"/slide_1.jpg",r+"/slide_2.jpg",r+"/slide_3.jpg",r+"/slide_5.jpg",r+"/slide_6.jpg",r+"/slide_8.jpg",r+"/slide_9.jpg",r+"/slide_10.jpg",r+"/slide_11.jpg",r+"/slide_12.jpg",r+"/slide_13.jpg"];const pt=t=>(q("data-v-1713cac6"),t=t(),H(),t),mt={class:"advantages-slider"},dt=pt(()=>e("div",{class:"tablet-desktop-only",style:{height:"62px"}},null,-1)),ut={__name:"ImagesSlider",setup(t){const i=C(null);let _;const d=s=>{i.value=s,_=setInterval(()=>{p()},7e3)},p=()=>{var s;(s=i.value)==null||s.slideNext()},c=()=>{var s;(s=i.value)==null||s.slidePrev()};return N(()=>{_&&clearInterval(_)}),(s,l)=>{const u=V,x=F,h=B,f=U;return n(),a("div",mt,[dt,o(u,{class:"controls-desktop",onSlideNext:p,onSlidePrev:c}),o(f,{class:"swiper",speed:600,"slides-per-view":"1",loop:"",onSwiper:d},{default:I(()=>[(n(!0),a(v,null,y(P(lt),($,j)=>(n(),A(h,{key:j,class:"slide"},{default:I(()=>[o(x,{img:$},null,8,["img"])]),_:2},1024))),128))]),_:1}),o(u,{class:"controls-mobile",onSlideNext:p,onSlidePrev:c})])}}},gt=g(ut,[["__scopeId","data-v-1713cac6"]]);const vt={setup(){const{$texts:t}=L();return T({title:t.projectLogistics}),{isWhiteTheme:J()}},computed:{background(){return{backgroundImage:`url('${k()("images/project_logistics_background.png",{format:"webp",preload:!0,sizes:"xxl:1512",quality:100})}')`}},bottomBackground(){return this.isWhiteTheme?"":{backgroundImage:`linear-gradient(180deg, #1B1B1F 12.17%, rgba(20, 20, 23, 0.829382) 24.78%, rgba(0, 0, 0, 0.61) 45.5%), url('${k()("images/main_background.jpg",{format:"webp"})}')`}}}},yt={class:"project-logistics-main"},xt=["title"],ht={id:"scroll-target",class:"project-logistics-complex-organization"},ft={class:"project-logistics-any-delivery"},$t={class:"project-logistics-stats"},jt={class:"project-logistics-projects"},St={class:"calculator__back-blur"};function bt(t,i,_,d,p,c){const s=D,l=Z,u=_t,x=gt,h=K,f=W,$=R,j=E,w=G;return n(),a("main",null,[e("section",yt,[e("div",{style:b(c.background),class:"bg project-logistics-bg",title:t.$texts.seoAltProjectLogistics},null,12,xt),o(s,{title:t.$texts.projectLogisticsTitle,subtitle:t.$texts.projectLogisticsNote},null,8,["title","subtitle"])]),e("section",ht,[o(l)]),e("section",ft,[o(u)]),e("section",null,[o(x)]),e("section",$t,[o(h,{title:t.$texts.keyIndicators,"in-services":!0},null,8,["title"])]),e("section",jt,[o(f,{"in-services":!0})]),e("section",{class:"project-logistics-calculator",style:b(c.bottomBackground)},[e("h2",null,[O(m(t.$texts.ourTask),1),e("span",null,m(t.$texts.ourGoal),1)]),e("div",St,[o($),o(j,{class:"logo"})]),o(w,{class:"other"})],4)])}const Mt=g(vt,[["render",bt],["__scopeId","data-v-48433a6b"]]);export{Mt as default};