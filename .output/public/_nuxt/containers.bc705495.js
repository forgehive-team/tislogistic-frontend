import{_ as L}from"./BreadCrumbs.14866252.js";import{_ as S}from"./nuxt-link.27a9c7c3.js";import{u as y}from"./state.73f9c402.js";import{a as k,b,t as g,c as W}from"./entry.79df3faa.js";import{m as s,F as r,y as d,H as i,R as $,I as h,u as C,x as D,U as M,V as N,J as w,L as x,Q as G,q as v,X as I}from"./swiper-vue.27e78005.js";import{_ as f}from"./nuxt-img.5c631e8f.js";import{_ as T}from"./ConclusionCard.87354733.js";import{u as H}from"./composables.e0c01892.js";import"./index.781e7d23.js";const V=t=>(M("data-v-fa0e6c0a"),t=t(),N(),t),P={class:"containers-header"},B={class:"main-header__header"},R=V(()=>i("br",{class:"mobile-tablet-only"},null,-1)),E={class:"containers-header__btns"},q={__name:"MainHeader",setup(t){const l=y();return(o,u)=>{const p=L,c=S;return s(),r("header",P,[d(p),i("h1",B,[$(h(o.$texts.containersHeader)+" ",1),R,i("span",null,h(o.$texts.companyName),1)]),i("div",E,[i("button",{class:"animate-red",onClick:u[0]||(u[0]=m=>l.value=!C(l))},h(o.$texts.containersCalculate),1),d(c,{to:"/contacts",class:"animate-yellow-btn containers-header__btn_white"},{default:D(()=>[$(h(o.$texts.contacts),1)]),_:1})])])}}},O=k(q,[["__scopeId","data-v-fa0e6c0a"]]);const U={props:{container:{type:Object,required:!0}},computed:{innerHeight(){return this.container.inner.height.length<10?this.container.inner.height+" mm":this.container.inner.height},dimensions(){const{$texts:t}=b();return[t.containerDimensions,t.length,t.width,t.height,t.outer,this.container.outer.length+" mm",this.container.outer.width+" mm",this.container.outer.height+" mm",t.inner,this.container.inner.length+" mm",this.container.inner.width+" mm",this.innerHeight,t.doors,"--",this.container.doors.width,this.container.doors.height]},weights(){const{$texts:t}=b();return[t.grossWeightMax,this.container.maxGrossWeight,t.tare,this.container.tare,t.maxLoad,this.container.maxLoad,t.volume,this.container.volume]}}},A={class:"list-item__title"},F={class:"list-item__description"},j={class:"list-item__img-container"},J={class:"list-item__table"},Q={class:"table-dimensions"},X={class:"table-weight-title"},Y={class:"table-weights"};function K(t,l,o,u,p,c){const m=f;return s(),r("div",{class:G(["list-item",o.container.className])},[i("h2",A,h(o.container.title),1),i("p",F,h(o.container.description),1),i("div",j,[d(m,{class:"list-item__img",src:o.container.img,quality:"100",style:{"min-height":"130px"},alt:o.container.title+" для грузоперевозок от ТИС Лоджистик",format:"webp"},null,8,["src","alt"])]),i("div",J,[i("div",Q,[(s(!0),r(w,null,x(c.dimensions,a=>(s(),r("div",{key:a,class:"table-item"},h(a),1))),128))]),i("div",X,h(t.$texts.weight),1),i("div",Y,[(s(!0),r(w,null,x(c.weights,a=>(s(),r("div",{key:a,class:"table-item"},h(a),1))),128))])])],2)}const Z=k(U,[["render",K],["__scopeId","data-v-ab4ab7a6"]]),n="images/containers/",z=[{title:`40-ка футовый контейнер Pallet Wide 
(40' НC PW, увеличенной вместимости)`,description:"Это новый тип контейнеров увеличенной вместимости в международной практике, которые вмещают 30 евро-паллет по полу. Подобная вместимость обеспечивается за счёт увеличенной ширины контейнера (сокращение глубины рёбер).",outer:{length:"12 192",width:"2 484",height:"2 896"},inner:{length:"12 100",width:"2 426",height:"2 694"},doors:{width:"2 360 mm",height:"2 585 mm"},maxGrossWeight:"34 000 kg",tare:"4 150 kg",maxLoad:"29 850 kg",volume:"79.1 cub. M>",img:n+"container1.png"},{title:`20-ти футовый контейнер Pallet Wide 
(20' НC PW, увеличенной вместимости)`,description:"Используется при транспортировке небольших негабаритных грузов или среднего количества мелких негабаритных грузов",outer:{length:"6 058",width:"2 484",height:"2 896"},inner:{length:"5 898",width:"2 440",height:"2 698"},doors:{width:"2 374 mm",height:"2 585 mm"},maxGrossWeight:"30 480 kg",tare:"2 560 kg",maxLoad:"27 920 kg",volume:"38.4 cub. M>",img:n+"container2.png",className:"shrink-img"},{title:`20-футовый контейнер усиленный 
(HEAVY TESTED)`,description:"Для перевозки тяжелых грузов (керамогранит, природный камень, металлические изделия)",outer:{length:"6 058",width:"2 438",height:"2 591"},inner:{length:"5 898",width:"2 352",height:"2 393"},doors:{width:"2 340 mm",height:"2 280 mm"},maxGrossWeight:"30 500 kg",tare:"2 300 kg",maxLoad:"28 200 kg",volume:"33.10 cub. M>",img:n+"container2.png",className:"shrink-img"},{title:"45-ти футовый стандартный контейнер",description:"45-ти футовый стандартный контейнер используется для перевозки легких и объемных грузов, а также идеально подходит для перевозки грузов длиной ровно 12 метров и более до 13,5 метров.",outer:{length:"13 742",width:"2 438",height:"2 895"},inner:{length:"13 582",width:"2 347",height:"2 690"},doors:{width:"2 340 mm",height:"2 584 mm"},maxGrossWeight:"32 500 kg",tare:"4 110 kg",maxLoad:"28 390 kg",volume:"85.7 cub. M>",img:n+"container4.png"},{title:`40-ка футовый High Cube (40' НC) контейнер 
(увеличенной вместимости)`,description:g.containerSharedDescription,outer:{length:"12 192",width:"2 438",height:"2 896"},inner:{length:"12 032",width:"2 352",height:"2 698"},doors:{width:"2 340 mm",height:"2 585 mm"},maxGrossWeight:"32 500 kg",tare:"3 850 kg",maxLoad:"28 650 kg",volume:"76.4 cub. M>",img:n+"container1.png"},{title:`20-ти футовый High Cube (20' НC) контейнер 
(увеличенной вместимости)`,description:g.containerSharedDescription,outer:{length:"6 058",width:"2 484",height:"2 896"},inner:{length:"5 898",width:"2 440",height:"2 698"},doors:{width:"2 374 mm",height:"2 585 mm"},maxGrossWeight:"30 480 kg",tare:"2 560 kg",maxLoad:"27 920 kg",volume:"38.4 cub. M>",img:n+"container2.png",className:"shrink-img"},{title:"40-ка футовый стандартный (стальной) контейнер",description:g.containerSharedDescription2,outer:{length:"12 192",width:"2 438",height:"2 591"},inner:{length:"12 039",width:"2 350",height:"2 372"},doors:{width:"2 336 mm",height:"2 291 mm"},maxGrossWeight:"30 480 kg",tare:"3 980 kg",maxLoad:"26 500 kg",volume:"66.5 cub. M>",img:n+"container4.png"},{title:"20-ти футовый стандартный (стальной) контейнер",description:g.containerSharedDescription2,outer:{length:"6 058",width:"2 438",height:"2 591"},inner:{length:"5 898",width:"2 352",height:"2 393"},doors:{width:"2 340 mm",height:"2 280 mm"},maxGrossWeight:"30 480 kg",tare:"2 220 kg",maxLoad:"28 260 kg",volume:"33.2 cub. M>",img:n+"container2.png",className:"shrink-img"},{title:`20-ти футовый  (стальной) контейнер 
OPEN TOP с открытым верхом`,description:g.containerSharedDescription3,outer:{length:"6 096",width:"2 438",height:"2 591"},inner:{length:"5 902",width:"2 240",height:"2 352"},doors:{width:"2 335 mm",height:"2 240 mm"},maxGrossWeight:"24 000 kg",tare:"2 440 kg",maxLoad:"21 560 kg",volume:"32 cub. M>",img:n+"container9.png",className:"shrink-img-open"},{title:`40-футовый (стальной) контейнер 
с открытым верхом`,description:g.containerSharedDescription3,outer:{length:"12 192",width:"2 438",height:"2 591"},inner:{length:"12 021",width:"2 350",height:"2 330"},doors:{width:"2 338 mm",height:"2 234 mm"},maxGrossWeight:"36 000 kg",tare:"4 430 kg",maxLoad:"31 570 kg",volume:"66.7 cub. M>",img:n+"container10.png",className:"grow-img"},{title:`40-футовый (стальной) контейнер Hard Top 
cо снимаемой жесткой крышкой`,description:"Для удобства погрузки контейнер оборудуют съемной верхней перекладиной над дверями в торце контейнера.",outer:{length:"12 192",width:"2 438",height:"2 591"},inner:{length:"12 021",width:"2 350",height:"2 330"},doors:{width:"2 338 mm",height:"2 234 mm"},maxGrossWeight:"36 000 kg",tare:"4 430 kg",maxLoad:"31 570 kg",volume:"66.7 cub. M>",img:n+"container11.png",className:"grow-img"},{title:`20-ти футовый  (стальной) контейнер 
с торцевыми стенками`,description:g.containerSharedDescription4,outer:{length:"6 096",width:"2 438",height:"2 591"},inner:{length:"5 737",width:"2 240",height:`2 170 mm
420 mm
(компактный)`},doors:{width:"--",height:"--"},maxGrossWeight:"30 480 kg",tare:"2 950 kg",maxLoad:"27 530 kg",volume:"27.9 cub. M>",img:n+"container12.png",className:"grow-img stretch-row"},{title:`40-ка футовый  (стальной) контейнер 
с торцевыми стенками`,description:g.containerSharedDescription4,outer:{length:"12 192",width:"2 438",height:"2 591"},inner:{length:"12 032",width:"2 240",height:`2 034 mm
570 mm
(компактный)`},doors:{width:"--",height:"--"},maxGrossWeight:"45 000 kg",tare:"5 530 kg",maxLoad:"39 470 kg",volume:"58.8 cub. M>",img:n+"container13.png",className:"grow-img stretch-row"},{title:"40-ка футовый High Cube рефрижераторный (стальной) контейнер (увеличенной вместимости)",description:g.containerSharedDescription,outer:{length:"12 192",width:"2 438",height:"2 895"},inner:{length:"11 560",width:"2 286",height:"2 500"},doors:{width:"2 286 mm",height:"2 478 mm"},maxGrossWeight:"30 480 kg",tare:"4 200 kg",maxLoad:"26 280 kg",volume:"66.1 cub. M>",img:n+"container1.png"},{title:`40-ка футовый рефрижераторный 
(стальной) контейнер`,description:g.containerSharedDescription,outer:{length:"12 192",width:"2 438",height:"2 591"},inner:{length:"11 555",width:"2 286",height:"2 280"},doors:{width:"2 286 mm",height:"2 245 mm"},maxGrossWeight:"30 480 kg",tare:"4 370 kg",maxLoad:"26 110 kg",volume:"60.2 cub. M>",img:n+"container4.png"},{title:`20-ти футовый рефрижераторный 
(стальной) контейнер`,description:g.containerSharedDescription,outer:{length:"6 096",width:"2 370",height:"2 591"},inner:{length:"5 455",width:"2 260",height:"2 275"},doors:{width:"2 340 mm",height:"2 260 mm"},maxGrossWeight:"27 000 kg",tare:"3 050 kg",maxLoad:"23 950 kg",volume:"28.0 cub. M>",img:n+"container2.png",className:"shrink-img"}],e={sizesDesignation:{3:"3 т",5:"5 т",20:"20 т",24:"24 т"},grossWeightTonns:{3:"3,0",5:"5,0",20:"20,0",24:"24,0"},innerVolume:{3:"5,16",5:"10,40",20:"30,60",24:"32,70"},sizes:{outer:{length:{3:"2 100",5:"2 650",20:"6 058",24:"6 058"},width:{3:"1 325",5:"2 100",20:"2 438",24:"2 438"},height:{3:"2 400",5:"2 400",20:"2 438",24:"2 591"}},inner:{length:{3:"1 930",5:"2 515",20:"5 867",24:"5 867"},width:{3:"1 225",5:"1 950",20:"2 330",24:"2 330"},height:{3:"2 128",5:"2 128",20:"2 197",24:"2 350"}},doors:{width:{3:"1 225",5:"1 950",20:"2 286",24:"2 286"},height:{3:"2 090",5:"2 100",20:"2 134",24:"2 261"}}}};const tt={computed:{tableItems(){const{$texts:t}=b();return[t.sizesDesignation,e.sizesDesignation[3],e.sizesDesignation[5],e.sizesDesignation[20],e.sizesDesignation[24],t.grossWeightTonns,e.grossWeightTonns[3],e.grossWeightTonns[5],e.grossWeightTonns[20],e.grossWeightTonns[24],t.innerVolume,e.innerVolume[3],e.innerVolume[5],e.innerVolume[20],e.innerVolume[24],t.sizes,t.outer,t.inner,t.length,e.sizes.outer.length[3],e.sizes.outer.length[5],e.sizes.outer.length[20],e.sizes.outer.length[24],t.width,e.sizes.outer.width[3],e.sizes.outer.width[5],e.sizes.outer.width[20],e.sizes.outer.width[24],t.height,e.sizes.outer.height[3],e.sizes.outer.height[5],e.sizes.outer.height[20],e.sizes.outer.height[24],t.length,e.sizes.inner.length[3],e.sizes.inner.length[5],e.sizes.inner.length[20],e.sizes.inner.length[24],t.width,e.sizes.inner.width[3],e.sizes.inner.width[5],e.sizes.inner.width[20],e.sizes.inner.width[24],t.height,e.sizes.inner.height[3],e.sizes.inner.height[5],e.sizes.inner.height[20],e.sizes.inner.height[24],t.doorsSizes,t.width,e.sizes.doors.width[3],e.sizes.doors.width[5],e.sizes.doors.width[20],e.sizes.doors.width[24],t.height,e.sizes.doors.height[3],e.sizes.doors.height[5],e.sizes.doors.height[20],e.sizes.doors.height[24]]}}},et={class:"list-item"},it={class:"list-item__title"},nt={class:"list-item__description"},st={class:"list-item__img-container list-item__img-container_rus"},ot={class:"list-item__table list-item__table_rus"};function rt(t,l,o,u,p,c){const m=f;return s(),r("div",et,[i("h4",it,h(t.$texts.containerRusTitle),1),i("p",nt,h(t.$texts.containerSharedDescription2),1),i("div",st,[d(m,{class:"list-item__img list-item__img",src:"images/containers/container2.png",format:"webp",alt:t.$texts.containerRusTitle+"для грузоперевозок от "+t.$texts.companyNameSeo},null,8,["alt"]),d(m,{class:"list-item__img",src:"images/containers/container4.png",format:"webp",alt:t.$texts.containerRusTitle+"для грузоперевозок от "+t.$texts.companyNameSeo},null,8,["alt"])]),i("div",ot,[(s(!0),r(w,null,x(c.tableItems,a=>(s(),r("div",{key:a,class:"table-item"},h(a),1))),128))])])}const at=k(tt,[["render",rt],["__scopeId","data-v-98a27b61"]]);const ht={computed:{containersListTop(){return z.slice(0,13)},containersListBottom(){return z.slice(-3)}}},ct={class:"stats-list"};function gt(t,l,o,u,p,c){const m=Z,a=at;return s(),r("div",ct,[(s(!0),r(w,null,x(c.containersListTop,_=>(s(),v(m,{key:_.title,container:_},null,8,["container"]))),128)),d(a),(s(!0),r(w,null,x(c.containersListBottom,_=>(s(),v(m,{key:_.title,container:_},null,8,["container"]))),128))])}const mt=k(ht,[["render",gt],["__scopeId","data-v-da9c4628"]]);const dt={setup(){const{$texts:t}=b();W({title:t.seoContainersTitle})},computed:{background(){return{backgroundImage:`url('${H()("images/containers_background.png",{format:"webp",preload:!0,sizes:"xxl:1512",quality:100})}')`}}}},lt={class:"containers-main"},_t={class:"containers-list"},ut={class:"containers-card"};function pt(t,l,o,u,p,c){const m=O,a=mt,_=T;return s(),r("div",null,[i("section",lt,[i("div",{style:I(c.background),class:"containers-bg"},null,4),d(m)]),i("section",_t,[d(a)]),i("section",ut,[d(_,{"seo-alt":t.$texts.seoConclusionContainers},null,8,["seo-alt"])])])}const St=k(dt,[["render",pt],["__scopeId","data-v-ad1f6958"]]);export{St as default};
