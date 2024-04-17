import{_ as v}from"./BreadCrumbs.24d0e7d4.js";import{_ as x}from"./nuxt-link.93954f67.js";import{t as q}from"./transformDate.1d41c9d0.js";import{a as y,e as S,b as T}from"./entry.f68164cd.js";import{m as o,q as h,x as d,H as s,I as a,F as _,X as $,y as i,R as l,Q as g,J as f,L as C,N as B}from"./swiper-vue.2993ddf4.js";import{_ as I}from"./ExpandArrow.8332e278.js";import{u as R}from"./composables.383ec119.js";const D={props:{title:{type:String,required:!0},text:{type:String,required:!0},date:{type:String,required:!0},url:{type:String,required:!0},img:{type:String,required:!0}},computed:{processedDate(){return q(this.date)}}},L={class:"img-container"},V=["src","alt"],j={class:"date"};function A(e,c,t,m,k,r){const u=x;return o(),h(u,{to:t.url,class:"card"},{default:d(()=>[s("div",L,[s("img",{src:t.img,alt:t.title+e.$texts.companyNameSeo},null,8,V)]),s("h2",null,a(t.title),1),s("p",null,a(t.text),1),s("p",j,a(r.processedDate),1)]),_:1},8,["to"])}const M=y(D,[["render",A],["__scopeId","data-v-223685f9"]]);const U={props:{data:{type:Array,required:!0},pending:{type:Boolean,required:!0}},setup(){return{currentRoute:S().fullPath}},computed:{isNews(){return this.currentRoute==="/news"},title(){const{$texts:e}=T();return this.isNews?e.news:e.projects},background(){return{backgroundImage:`url('${R()("images/containers_background.png",{format:"webp",preload:!0,quality:"90"})}')`}}},methods:{scrollToTop(){window.scrollTo({top:0,left:0,behavior:"smooth"})}}},z={class:"links-container"},E={key:0},F={key:0,class:"cards-container"},H={class:"btn-container"};function J(e,c,t,m,k,r){const u=v,p=x,w=M,b=I;return o(),_("section",null,[s("div",{style:$(r.background),class:"bg news-bg"},null,4),i(u,{class:"breadcrumbs"}),s("div",z,[i(p,{to:"/news",class:g(["link",{"link-current":r.isNews}])},{default:d(()=>[l(a(e.$texts.news),1)]),_:1},8,["class"]),i(p,{to:"/projects",class:g(["link",{"link-current":!r.isNews}])},{default:d(()=>[l(a(e.$texts.projects),1)]),_:1},8,["class"])]),t.pending?(o(),_("div",E)):(o(),_(f,{key:1},[t.data.length?(o(),_("div",F,[(o(!0),_(f,null,C(t.data,(n,N)=>(o(),h(w,{key:N,title:n.title,text:n.short_description,date:n.published_at,url:m.currentRoute+"/"+n.slug,img:n.preview_image},null,8,["title","text","date","url","img"]))),128))])):B("",!0),s("div",H,[s("button",{class:"go-up-btn",onClick:c[0]||(c[0]=(...n)=>r.scrollToTop&&r.scrollToTop(...n))},[l(a(e.$texts.goUp)+" ",1),i(b)])])],64))])}const Y=y(U,[["render",J],["__scopeId","data-v-7077cc63"]]);export{Y as _};
