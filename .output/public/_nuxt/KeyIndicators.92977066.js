import{a as u,u as v}from"./entry.f68164cd.js";import{m as e,F as s,H as r,I as _,a as f,M as y,N as d,u as l,J as g,L as h,q as I}from"./swiper-vue.2993ddf4.js";const S={props:{title:{type:String,required:!0},description:{type:String,required:!0},measurement:{type:String,default:"",required:!1},inServices:{type:Boolean,required:!0}}},x={ref:"advantage",class:"advantage"},k={class:"advantage__title"},$={class:"advantage__description"};function B(i,t,n,o,a,p){return e(),s("div",x,[r("div",k,[r("span",null,_(n.title),1)]),r("p",$,_(n.description),1)],512)}const q=u(S,[["render",B],["__scopeId","data-v-a6ef0bd9"]]);const K={class:"advantages"},b={key:0,class:"advantages__title advantages__title_services"},N={key:1,class:"advantages__container"},w={__name:"KeyIndicators",props:["title","inServices"],setup(i){const t=i,{newsApiBase:n}=v(),o=n+"key-indicators",a=f([]);return y(async()=>{a.value=await $fetch(o)}),(p,C)=>{const m=q;return e(),s("div",K,[t.inServices&&t.title?(e(),s("h2",b,_(t.title),1)):d("",!0),l(a)?(e(),s("div",N,[(e(!0),s(g,null,h(l(a),c=>(e(),I(m,{key:c.header,title:c.title,description:c.description,measurement:c.measurement,"in-services":t.inServices},null,8,["title","description","measurement","in-services"]))),128))])):d("",!0)])}}},M=u(w,[["__scopeId","data-v-cffdc38c"]]);export{M as _};
