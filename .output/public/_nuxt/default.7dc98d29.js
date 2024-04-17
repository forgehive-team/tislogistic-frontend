import{k as Q,b as N,u as V,h as Y,c as A,a as S,e as ee}from"./entry.8f66b6e8.js";import{r as te,f as W,e as B,m as a,F as f,a5 as se,a8 as oe,u as K,H as t,j as ne,U as M,V as O,q as y,x as h,a9 as ae,y as c,R as b,I as u,Q as C,J as k,L as $,N as L,T as re,a4 as le}from"./swiper-vue.cf596ed4.js";import{t as ie,u as ce,b as _e,c as ue,e as de,r as pe}from"./index.82c35a84.js";import{_ as T}from"./nuxt-link.eea73dbd.js";import{_ as H}from"./ExpandArrow.f95d67a2.js";import{b as G,u as I,a as j,c as me}from"./state.d59fa9d4.js";import{_ as q}from"./CompanyLogo.156e437d.js";import{G as he}from"./index.ff9b83a7.js";import{s as X}from"./servicesList.0e20c2a0.js";import{_ as fe,a as ve}from"./ReturnCallForm.d8579cc1.js";import{_ as ge}from"./DeliveryCalculator.d0e60dee.js";import"./maska.b0acde3f.js";import"./validate.359f59e0.js";import"./expand.c2d6f9f3.js";const be={},we=Q(be);function ye(){const e=N();return e._appConfig||(e._appConfig=te(we)),e._appConfig}const Se=W({__name:"SeoKit",props:{siteUrl:null,siteName:null,siteDescription:null,siteImage:null,titleSeparator:null,language:null},setup(e){const s=e,n=V().public,d=ye(),l=["siteName","siteDescription","siteImage","siteUrl","titleSeparator","trailingSlash","language"],o=B(()=>{const _={};for(const g of l)n[g]&&(_[g]=n[g]);const i={};for(const g of l)s[g]&&(i[g]=s[g]);return{..._,...d.site,...i}}),r=Y().currentRoute,m=de();function w(){var p,x,P,R,F;const _=[{property:"og:url",content:m(((p=r.value)==null?void 0:p.path)||"/")},{property:"og:locale",content:o.value.language}];o.value.siteName&&_.push({property:"og:site_name",content:o.value.siteName});let i=((P=(x=r.value)==null?void 0:x.meta)==null?void 0:P.image)||o.value.siteImage;typeof i=="string"&&(i.startsWith("/")&&(i=pe(i)),_.push({property:"og:image",content:i}));const g=((F=(R=r.value)==null?void 0:R.meta)==null?void 0:F.description)||o.value.siteDescription;return g&&_.push({name:"description",content:g}),_}return A({templateParams:{siteName:()=>o.value.siteName,siteDescription:()=>o.value.siteDescription,siteImage:()=>o.value.siteImage,siteUrl:()=>o.value.siteUrl,titleSeparator:()=>o.value.titleSeparator,trailingSlash:()=>o.value.trailingSlash,language:()=>o.value.language},htmlAttrs:{lang:()=>o.value.language},title:()=>{var g,p,x,P,R;if(typeof((p=(g=r.value)==null?void 0:g.meta)==null?void 0:p.title)=="string")return(P=(x=r.value)==null?void 0:x.meta)==null?void 0:P.title;const i=(((R=r.value)==null?void 0:R.path)||"/").split("/").pop();return i?ie(i):null},link:[{rel:"canonical",href:()=>{var _;return m(((_=r.value)==null?void 0:_.path)||"/")}}],meta:w}),ce([_e({name:()=>{var _;return((_=o.value)==null?void 0:_.siteName)||""},inLanguage:()=>{var _;return((_=o.value)==null?void 0:_.language)||""},description:()=>{var _;return((_=o.value)==null?void 0:_.siteDescription)||""}}),ue()]),(_,i)=>(a(),f("div"))}}),ke=""+new URL("sun.6778997c.svg",import.meta.url).href,Ce=""+new URL("moon.4bc1f6d3.svg",import.meta.url).href;const U=e=>(M("data-v-c8ecfa66"),e=e(),O(),e),$e={class:"switch"},xe=U(()=>t("span",{class:"slider round"},null,-1)),Pe=U(()=>t("img",{class:"sun",src:ke,alt:""},null,-1)),Re=U(()=>t("img",{class:"moon",src:Ce,alt:""},null,-1)),Le={__name:"ThemeSwitch",setup(e){const s=G();return(n,d)=>(a(),f("label",$e,[se(t("input",{"onUpdate:modelValue":d[0]||(d[0]=l=>ne(s)?s.value=l:null),type:"checkbox"},null,512),[[oe,K(s)]]),xe,Pe,Re]))}},Z=S(Le,[["__scopeId","data-v-c8ecfa66"]]),E={"/services/terminalnie-uslugi":"/services/terminal-services","/services/morskie-gruzoperevozki":"/services/sea-freight","/services/zheleznodorozhnye-perevozki":"/services/railway-freight","/services/avtomobilnye-perevozki":"/services/automobile-transportation","/services/aviaperevozki":"/services/air-freight","/services/arenda-konteynerov":"/services/rental-containers","/services/tamozhennoe-oformlenie":"/services/customs-clearance","/services/multimodalnye-perevozki":"/services/multimodal-transportation","/services/vneshneekonomicheskaya-deyatelnost":"/services/foreign-economic-activity","/tarify-na-tamozhennoe-oformlenie-gruzov":"/custom-clearance-tariffs","/politika-konfidencialnosti":"/privacy-policy"};function Ne(e,s){const[n,d]=e.split(/\?(.+)/),l=s?E[n]:Te(E,n);return l?d?l+"?"+d:l:e}function Te(e,s){return Object.keys(e).find(n=>e[n]===s)}const z=e=>(M("data-v-3c3ffe96"),e=e(),O(),e),Ie=z(()=>t("span",{class:"slider round"},null,-1)),je=z(()=>t("span",{class:"sun lang-name"},"Ru",-1)),Be=z(()=>t("span",{class:"moon lang-name"},"En",-1)),Me=W({__name:"LanguageSwitch",setup(e){const{siteUrl:s}=V(),n=ee(),d=s==="https://tislogistic.ru/",l=B(()=>{const o=Ne(n.fullPath,d);return d?"https://tislogistic.com"+o:"https://tislogistic.ru"+o});return(o,v)=>{const r=T;return a(),y(r,{to:K(l),class:"link-wrapper"},{default:h(()=>[t("label",{class:"switch dummy"},[t("input",{checked:d,type:"checkbox"}),Ie,je,Be])]),_:1},8,["to"])}}});const J=S(Me,[["__scopeId","data-v-3c3ffe96"]]),Oe={},Ue={width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},ze=t("path",{d:"M14.23 10.6289C13.2733 10.6289 12.3478 10.4733 11.4844 10.1933C11.2559 10.115 11.0053 10.1518 10.8066 10.2899C10.7298 10.3432 10.6731 10.4195 10.6221 10.4977V10.4977C10.2519 11.065 9.5141 11.2774 8.93924 10.9192C7.51624 10.0325 6.2136 8.77657 5.27519 7.33993C4.84404 6.67987 5.03522 5.81994 5.63556 5.30889V5.30889C5.84556 5.09111 5.90778 4.78778 5.82222 4.51556C5.53444 3.65222 5.38667 2.72667 5.38667 1.77C5.38667 1.35 5.03667 1 4.61667 1H1.92556C1.50556 1 1 1.18667 1 1.77C1 8.99556 7.01222 15 14.23 15C14.7822 15 15 14.51 15 14.0822V11.3989C15 10.9789 14.65 10.6289 14.23 10.6289Z"},null,-1),De=[ze];function Fe(e,s){return a(),f("svg",Ue,De)}const Ee=S(Oe,[["render",Fe]]),Ve=""+new URL("close.e501a77d.svg",import.meta.url).href;const Ae={components:{Collapse:he},props:{toggleSidebar:{type:Function,required:!0},links:{type:Object,required:!0}},setup(){const e=I(),s=j(),{$texts:n}=N(),d=[{label:n.containerClassification,to:"/containers",className:"classification"},{label:n.tariffs,to:"/tarify-na-tamozhennoe-oformlenie-gruzov",className:"tariffs"},{label:n.websiteMap,to:"/sitemap",className:"map"}];return{calculatorPopupShown:e,returnCallShown:s,secondaryLinks:d}},data(){return{servicesShown:!1}},computed:{services(){return X.filter(e=>!e.disabled)}},methods:{openCalculatorPopup(){this.toggleSidebar(),this.calculatorPopupShown=!0},openReturnCall(){this.toggleSidebar(),this.returnCallShown=!0},toggleServices(){this.servicesShown=!this.servicesShown}}},We={class:"sidebar mobile-tablet-only"},Ke={class:"sidebar__container"},He={class:"sidebar__top"},Ge=["alt"],qe={class:"sidebar__theme-container"},Xe={class:"sidebar__contacts"},Ze=["href"],Je={class:"sidebar__buttons"},Qe={class:"sidebar__links"},Ye={class:"sidebar__services-list"},et={class:"sidebar__links sidebar__links_secondary"},tt={href:"/traffic",class:"vessels"};function st(e,s,n,d,l,o){const v=q,r=T,m=Z,w=J,_=Ee,i=H,g=ae("Collapse");return a(),f("aside",We,[t("div",Ke,[t("div",He,[c(r,{class:"sidebar__logo",to:"/",onClick:n.toggleSidebar},{default:h(()=>[c(v,{alt:e.$texts.homePage+e.$texts.companyNameSeo},null,8,["alt"])]),_:1},8,["onClick"]),t("button",{class:"sidebar__close",onClick:s[0]||(s[0]=(...p)=>n.toggleSidebar&&n.toggleSidebar(...p))},[t("img",{src:Ve,alt:e.$texts.close},null,8,Ge)])]),t("div",qe,[c(m),c(w)]),t("div",Xe,[t("a",{href:`tel:${e.$texts.companyPhone}`},[c(_),b(" "+u(e.$texts.companyPhone),1)],8,Ze)]),t("div",Je,[t("button",{class:"navbar__btn navbar__btn_red sidebar__btn",onClick:s[1]||(s[1]=(...p)=>o.openCalculatorPopup&&o.openCalculatorPopup(...p))},u(e.$texts.calculateDelivery),1),t("button",{class:"navbar__btn sidebar__btn",onClick:s[2]||(s[2]=(...p)=>o.openReturnCall&&o.openReturnCall(...p))},u(e.$texts.returnCall),1)]),t("div",Qe,[c(r,{to:"/about",class:"sidebar__link",onClick:n.toggleSidebar},{default:h(()=>[b(u(e.$texts.about),1)]),_:1},8,["onClick"]),t("div",null,[t("div",{class:"sidebar__services-link",onClick:s[3]||(s[3]=(...p)=>o.toggleServices&&o.toggleServices(...p))},[c(r,{class:"sidebar__link"},{default:h(()=>[b(u(e.$texts.services),1)]),_:1}),c(i,{class:C(["expand-arrow",{rotated:l.servicesShown}])},null,8,["class"])]),c(g,{when:l.servicesShown,class:"collapse"},{default:h(()=>[t("div",Ye,[(a(!0),f(k,null,$(o.services,(p,x)=>(a(),y(r,{key:x,class:"service-link service-link_sidebar",to:p.to,onClick:n.toggleSidebar},{default:h(()=>[b(u(p.title),1)]),_:2},1032,["to","onClick"]))),128))])]),_:1},8,["when"])]),(a(!0),f(k,null,$(n.links,p=>(a(),y(r,{key:p.label,to:p.path,class:"sidebar__link",onClick:n.toggleSidebar},{default:h(()=>[b(u(p.label),1)]),_:2},1032,["to","onClick"]))),128))]),t("div",et,[t("a",tt,u(e.$texts.vesselsPosition),1),(a(!0),f(k,null,$(d.secondaryLinks,p=>(a(),y(r,{key:p.label,to:p.to,onClick:n.toggleSidebar},{default:h(()=>[b(u(p.label),1)]),_:2},1032,["to","onClick"]))),128))])])])}const ot=S(Ae,[["render",st],["__scopeId","data-v-6328f3e5"]]),nt=""+new URL("logoBlack.445f085f.svg",import.meta.url).href,at=""+new URL("bars.fdd7c7de.svg",import.meta.url).href;const rt={setup(){const e=I(),s=j();return{calculatorPopupShown:e,returnCallShown:s}},data(){return{isScrolled:!1,sidebarShown:!1,servicesListShown:!1}},computed:{links(){const{$texts:e}=N();return[{label:e.vacancies,path:"/vacancies"},{label:e.contacts,path:"/contacts"},{label:e.news,path:"/news"}]},services(){return X.filter(e=>!e.disabled)}},mounted(){new IntersectionObserver(s=>{s.forEach(n=>{this.isScrolled=!n.isIntersecting})},{threshold:[0]}).observe(this.$refs.scrollTracker)},methods:{toggleSidebar(){this.sidebarShown=!this.sidebarShown},toggleServicesList(e){this.servicesListShown=e}}},lt={class:"navbar__layout-container"},it={class:"navbar__left"},ct=["alt"],_t={class:"navbar__links"},ut={key:0,class:"navbar__services-list"},dt={class:"navbar__center"},pt={class:"navbar__right"},mt={href:"tel:8 (800) 234-80-70",class:"navbar__phone"},ht={class:"navbar__desktop-buttons"},ft=t("img",{src:at,class:"",alt:""},null,-1),vt=[ft],gt={ref:"scrollTracker",class:"scroll-tracker"};function bt(e,s,n,d,l,o){const v=T,r=H,m=Z,w=J,_=ot;return a(),f(k,null,[t("nav",{class:C(["navbar",{navbar_black:l.isScrolled}])},[t("div",lt,[t("div",it,[c(v,{class:"navbar__logo-container",to:"/"},{default:h(()=>[t("img",{src:nt,class:"navbar__logo",alt:e.$texts.homePage+e.$texts.companyNameSeo},null,8,ct)]),_:1}),t("div",_t,[c(v,{to:"/about",class:"navbar__link"},{default:h(()=>[b(u(e.$texts.about),1)]),_:1}),t("div",{class:"navbar__services-link",onMouseover:s[0]||(s[0]=i=>o.toggleServicesList(!0)),onMouseleave:s[1]||(s[1]=i=>o.toggleServicesList(!1))},[c(v,{class:"navbar__link"},{default:h(()=>[b(u(e.$texts.services+" ")+" ",1),c(r,{class:C(["expand-arrow",{rotated:l.servicesListShown}])},null,8,["class"])]),_:1}),c(re,null,{default:h(()=>[l.servicesListShown?(a(),f("div",ut,[(a(!0),f(k,null,$(o.services,(i,g)=>(a(),y(v,{key:g,to:i.to,class:"service-link"},{default:h(()=>[b(u(i.title),1)]),_:2},1032,["to"]))),128))])):L("",!0)]),_:1})],32),(a(!0),f(k,null,$(o.links,i=>(a(),y(v,{key:i.label,to:i.path,class:"navbar__link"},{default:h(()=>[b(u(i.label),1)]),_:2},1032,["to"]))),128))])]),t("div",dt,[c(m),c(w)]),t("div",pt,[t("a",mt,u(e.$texts.companyPhone),1),t("div",ht,[t("button",{class:"navbar__btn",onClick:s[2]||(s[2]=i=>d.returnCallShown=!0)},u(e.$texts.returnCall),1),t("button",{class:"navbar__btn navbar__btn_red",onClick:s[3]||(s[3]=i=>d.calculatorPopupShown=!0)},u(e.$texts.calculateDelivery),1)]),t("button",{class:"navbar__expand-btn mobile-tablet-only",onClick:s[4]||(s[4]=(...i)=>o.toggleSidebar&&o.toggleSidebar(...i))},vt)])]),t("div",{class:C(["blur",{blur_shown:l.sidebarShown}])},null,2),c(_,{class:C({sidebar_shown:l.sidebarShown}),"toggle-sidebar":o.toggleSidebar,links:o.links},null,8,["class","toggle-sidebar","links"])],2),t("div",gt,null,512)],64)}const wt=S(rt,[["render",bt]]);const yt={setup(){return{returnCallShown:j()}},methods:{closeFromBoundaries(e){e.target===e.currentTarget&&(this.returnCallShown=!1)}}};function St(e,s,n,d,l,o){const v=fe;return a(),f("div",{class:"blur_shown return-bg visibility-animate",onClick:s[0]||(s[0]=(...r)=>o.closeFromBoundaries&&o.closeFromBoundaries(...r))},[c(v,{title:e.$texts.returnCall,modal:!0,"rental-containers":!1,"sumbit-btn-text":e.$texts.send},null,8,["title","sumbit-btn-text"])])}const kt=S(yt,[["render",St],["__scopeId","data-v-43c35789"]]),Ct={},$t={width:"74",height:"74",viewBox:"0 0 74 74",fill:"none",xmlns:"http://www.w3.org/2000/svg"},xt=t("path",{d:"M37.0013 67.8334C54.0306 67.8334 67.8346 54.0293 67.8346 37.0001C67.8346 19.9708 54.0306 6.16675 37.0013 6.16675C19.9721 6.16675 6.16797 19.9708 6.16797 37.0001C6.16797 54.0293 19.9721 67.8334 37.0013 67.8334Z",stroke:"currentColor","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Pt=t("path",{d:"M27.75 36.9999L33.9167 43.1666L46.25 30.8333",stroke:"currentColor","stroke-width":"5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),Rt=[xt,Pt];function Lt(e,s){return a(),f("svg",$t,Rt)}const Nt=S(Ct,[["render",Lt]]);const Tt={},It={class:"success-bg visibility-animate"},jt={class:"success"};function Bt(e,s){const n=Nt;return a(),f("div",It,[t("div",jt,[c(n,{alt:""}),t("h3",null,u(e.$texts.calculatorSuccessTitle),1),t("h5",null,u(e.$texts.calculatorSuccessNote),1)])])}const Mt=S(Tt,[["render",Bt],["__scopeId","data-v-0fe3e498"]]);const Ot={setup(){return{calculatorPopupShown:I()}},methods:{closeFromBoundaries(e){e.target===e.currentTarget&&(this.calculatorPopupShown=!1)}}},Ut={class:"calc-popup"};function zt(e,s,n,d,l,o){const v=ve,r=ge;return a(),f("div",{class:"blur_shown calculator-blur visibility-animate",onClick:s[1]||(s[1]=(...m)=>o.closeFromBoundaries&&o.closeFromBoundaries(...m))},[t("div",Ut,[t("button",{class:"calc-popup__close",onClick:s[0]||(s[0]=m=>d.calculatorPopupShown=!1)},[c(v,{alt:e.$texts.close},null,8,["alt"])]),c(r)])])}const Dt=S(Ot,[["render",zt],["__scopeId","data-v-7f563f1d"]]),Ft=""+new URL("logo-yellow-red.efbf8528.svg",import.meta.url).href,Et=""+new URL("rhino.858bfab7.svg",import.meta.url).href;const Vt={computed:{texts(){const{$texts:e}=N();return e},linksLeft(){return[{label:this.texts.about,to:"/about"},{label:this.texts.services,to:"/services"},{label:this.texts.vacancies,to:"/vacancies"},{label:this.texts.contacts,to:"/contacts"},{label:this.texts.news,to:"/news"}]},linksCenter(){return[{label:this.texts.news,to:"/news",className:"projects"},{label:this.texts.websiteMap,to:"/sitemap",className:"map"}]},linksRight(){return[{label:this.texts.tariffs,to:"/tarify-na-tamozhennoe-oformlenie-gruzov",className:"tariffs"},{label:this.texts.containerClassification,to:"/containers",className:"classification"}]},phoneRef(){return`tel:${this.texts.companyPhone}`}}},D=e=>(M("data-v-4a863d90"),e=e(),O(),e),At={class:"footer"},Wt={class:"footer__container"},Kt=["alt"],Ht={class:"footer__nav-links"},Gt={class:"footer__info footer__info_left"},qt={href:"/traffic",class:"vessels"},Xt={class:"footer__info footer__info_right"},Zt={class:"footer__branch-info phone-block"},Jt=["href"],Qt=D(()=>t("div",{class:"desktop-placeholder"},null,-1)),Yt=D(()=>t("img",{class:"footer__bg",src:Et,alt:""},null,-1)),es={class:"footer__bottom"},ts=D(()=>t("div",{class:"placeholder"},null,-1)),ss={class:"copyright"};function os(e,s,n,d,l,o){const v=q,r=T;return a(),f("footer",At,[t("div",Wt,[c(r,{class:"footer__logo-container",to:"/"},{default:h(()=>[c(v),t("img",{src:Ft,alt:e.$texts.companyNameSeo},null,8,Kt)]),_:1}),t("div",Ht,[(a(!0),f(k,null,$(o.linksLeft,(m,w)=>(a(),y(r,{key:w,to:m.to},{default:h(()=>[b(u(m.label),1)]),_:2},1032,["to"]))),128))]),t("div",Gt,[(a(!0),f(k,null,$(o.linksCenter,(m,w)=>(a(),y(r,{key:w,to:m.to},{default:h(()=>[b(u(m.label),1)]),_:2},1032,["to"]))),128)),t("a",qt,u(e.$texts.vesselsPosition),1)]),t("div",Xt,[(a(!0),f(k,null,$(o.linksRight,(m,w)=>(a(),y(r,{key:w,to:m.to},{default:h(()=>[b(u(m.label),1)]),_:2},1032,["to"]))),128))]),t("div",Zt,[t("span",null,u(e.$texts.phone),1),t("a",{href:o.phoneRef},u(e.$texts.companyPhone),9,Jt)]),Qt,Yt]),t("div",es,[c(r,{class:"confidentiality",to:"/politika-konfidencialnosti"},{default:h(()=>[b(u(e.$texts.confidentialityPolicy),1)]),_:1}),ts,c(r,{class:"agreement",to:"/eula"},{default:h(()=>[b(u(e.$texts.customerAgreement),1)]),_:1}),t("span",ss,u(e.$texts.footerNote),1)])])}const ns=S(Vt,[["render",os],["__scopeId","data-v-4a863d90"]]),as={setup(){const e=G();A({meta:[{name:"yandex-verification",content:"12db09dc804685c2"}],script:[{children:`(function(w, d, s, h, id) {w.roistatProjectId = id; w.roistatHost = h; var p = d.location.protocol == "https:" ? "https://" : "http://"; var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);})(window, document, 'script', 'cloud.roistat.com', '089514df0b4eabe45f1a32e7191da33e');`,tagPosition:"bodyOpen"},{children:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5WKX7NL');"},{children:"(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5WX5RR9V');"}],noscript:[{innerHTML:'<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WKX7NL" height="0" width="0" style="display:none;visibility:hidden"></iframe>',tagPosition:"bodyOpen"},{innerHTML:'<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5WX5RR9V" height="0" width="0" style="display:none;visibility:hidden"></iframe>',tagPosition:"bodyOpen"}],bodyAttrs:{class:B(()=>e.value?"white-theme":"dark-theme")}});const s=j(),n=me(),d=I();return{returnCallShown:s,successShown:n,calculatorPopupShown:d}},data(){return{returnCallRendered:!1,returnCallOpacity:!1,successRendered:!1,successOpacity:!1,calculatorPopupRendered:!1,calculatorPopupOpacity:!1}},watch:{returnCallShown(e){e?(this.returnCallRendered=!0,setTimeout(()=>this.returnCallOpacity=!0,10)):(this.returnCallOpacity=!1,setTimeout(()=>this.returnCallRendered=!1,210))},successShown(){this.successRendered=!0,setTimeout(()=>{this.successOpacity=!0},10),setTimeout(()=>{this.successOpacity=!1},3e3),setTimeout(()=>{this.successRendered=!1},3210)},calculatorPopupShown(e){e?(this.calculatorPopupRendered=!0,setTimeout(()=>this.calculatorPopupOpacity=!0,10)):(this.calculatorPopupOpacity=!1,setTimeout(()=>this.calculatorPopupRendered=!1,210))}}};function rs(e,s,n,d,l,o){const v=Se,r=wt,m=kt,w=Mt,_=Dt,i=ns;return a(),f("main",null,[c(v),c(r),l.returnCallRendered?(a(),y(m,{key:0,class:C({visible:l.returnCallOpacity})},null,8,["class"])):L("",!0),l.successRendered?(a(),y(w,{key:1,class:C({visible:l.successOpacity})},null,8,["class"])):L("",!0),l.calculatorPopupRendered?(a(),y(_,{key:2,class:C({visible:l.calculatorPopupOpacity})},null,8,["class"])):L("",!0),le(e.$slots,"default"),c(i)])}const ys=S(as,[["render",rs]]);export{ys as default};
