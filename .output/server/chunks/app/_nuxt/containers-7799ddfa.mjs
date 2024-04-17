import { _ as __nuxt_component_0$2 } from './BreadCrumbs-51af2094.mjs';
import { _ as __nuxt_component_0$3 } from './nuxt-link-0d39ff03.mjs';
import { u as useCalculatorPopup } from './state-06d22502.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { t as texts, _ as _export_sfc, u as useNuxtApp, a as useHead } from '../server.mjs';
import { _ as __nuxt_component_0$4 } from './nuxt-img-6da1c54a.mjs';
import { _ as __nuxt_component_2 } from './ConclusionCard-d5feb195.mjs';
import { u as useServerHead } from './internalLinks-4b44e090.mjs';
import { u as useImage } from './composables-5d51eb10.mjs';
import 'ufo';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'h3';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';
import 'ipx';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';

const _sfc_main$4 = {
  __name: "MainHeader",
  __ssrInlineRender: true,
  setup(__props) {
    useCalculatorPopup();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SharedBreadCrumbs = __nuxt_component_0$2;
      const _component_NuxtLink = __nuxt_component_0$3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "containers-header" }, _attrs))} data-v-fa0e6c0a>`);
      _push(ssrRenderComponent(_component_SharedBreadCrumbs, null, null, _parent));
      _push(`<h1 class="main-header__header" data-v-fa0e6c0a>${ssrInterpolate(_ctx.$texts.containersHeader)} <br class="mobile-tablet-only" data-v-fa0e6c0a><span data-v-fa0e6c0a>${ssrInterpolate(_ctx.$texts.companyName)}</span></h1><div class="containers-header__btns" data-v-fa0e6c0a><button class="animate-red" data-v-fa0e6c0a>${ssrInterpolate(_ctx.$texts.containersCalculate)}</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contacts",
        class: "animate-yellow-btn containers-header__btn_white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.$texts.contacts)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.$texts.contacts), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Containers/MainHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-fa0e6c0a"]]);
const _sfc_main$3 = {
  props: {
    container: {
      type: Object,
      required: true
    }
  },
  computed: {
    innerHeight() {
      return this.container.inner.height.length < 10 ? this.container.inner.height + " mm" : this.container.inner.height;
    },
    dimensions() {
      const { $texts } = useNuxtApp();
      return [
        $texts.containerDimensions,
        $texts.length,
        $texts.width,
        $texts.height,
        $texts.outer,
        this.container.outer.length + " mm",
        this.container.outer.width + " mm",
        this.container.outer.height + " mm",
        $texts.inner,
        this.container.inner.length + " mm",
        this.container.inner.width + " mm",
        this.innerHeight,
        $texts.doors,
        "--",
        this.container.doors.width,
        this.container.doors.height
      ];
    },
    weights() {
      const { $texts } = useNuxtApp();
      return [
        $texts.grossWeightMax,
        this.container.maxGrossWeight,
        $texts.tare,
        this.container.tare,
        $texts.maxLoad,
        this.container.maxLoad,
        $texts.volume,
        this.container.volume
      ];
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["list-item", $props.container.className]
  }, _attrs))} data-v-64bdc958><h2 class="list-item__title" data-v-64bdc958>${ssrInterpolate($props.container.title)}</h2><p class="list-item__description" data-v-64bdc958>${ssrInterpolate($props.container.description)}</p><div class="list-item__img-container" data-v-64bdc958>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    class: "list-item__img",
    src: $props.container.img,
    quality: "100",
    style: { "min-height": "130px" },
    alt: $props.container.title + " from TIS Logistic",
    format: "webp"
  }, null, _parent));
  _push(`</div><div class="list-item__table" data-v-64bdc958><div class="table-dimensions" data-v-64bdc958><!--[-->`);
  ssrRenderList($options.dimensions, (item) => {
    _push(`<div class="table-item" data-v-64bdc958>${ssrInterpolate(item)}</div>`);
  });
  _push(`<!--]--></div><div class="table-weight-title" data-v-64bdc958>${ssrInterpolate(_ctx.$texts.weight)}</div><div class="table-weights" data-v-64bdc958><!--[-->`);
  ssrRenderList($options.weights, (item) => {
    _push(`<div class="table-item" data-v-64bdc958>${ssrInterpolate(item)}</div>`);
  });
  _push(`<!--]--></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Containers/StatsListItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-64bdc958"]]);
const imgPath = "images/containers/";
const containers$1 = [
  {
    title: "Pallet Wide 40' PW container.",
    description: "This is a new type of container of increased capacity in international practice, which can hold 30 euro pallets on the floor. This capacity is achieved by increasing the width of the container (reducing the depth of the ribs).",
    outer: {
      length: "12,192",
      width: "2,484",
      height: "2,896"
    },
    inner: {
      length: "12,100",
      width: "2,426",
      height: "2,694"
    },
    doors: {
      width: "2,360 mm",
      height: "2,585 mm"
    },
    maxGrossWeight: "34 000 kg",
    tare: "4,150 kg",
    maxLoad: "29,850 kg",
    volume: "79.1 cub. M>",
    img: imgPath + "container1.png"
  },
  {
    title: "20' Pallet Wide \n(20' HC PW, increased capacity)",
    description: "Used when transporting small oversized loads or medium quantities of small oversized loads",
    outer: {
      length: "6,058",
      width: "2,484",
      height: "2,896"
    },
    inner: {
      length: "5,898",
      width: "2,440",
      height: "2,698"
    },
    doors: {
      width: "2,374 mm",
      height: "2,585 mm"
    },
    maxGrossWeight: "30 480 kg",
    tare: "2,560 kg",
    maxLoad: "27,920 kg",
    volume: "38.4 cub. M>",
    img: imgPath + "container2.png",
    className: "shrink-img"
  },
  {
    title: "20-foot reinforced container \n(HEAVY TESTED)",
    description: "For the transportation of heavy loads (porcelain stoneware, natural stone, metal products)",
    outer: {
      length: "6,058",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "5,898",
      width: "2,352",
      height: "2,393"
    },
    doors: {
      width: "2,340 mm",
      height: "2,280 mm"
    },
    maxGrossWeight: "30 500 kg",
    tare: "2,300 kg",
    maxLoad: "28,200 kg",
    volume: "33.10 cub. M>",
    img: imgPath + "container2.png",
    className: "shrink-img"
  },
  {
    title: "45-foot standard container",
    description: "The 45' standard container is used for light and bulky goods and is also ideal for transporting loads of exactly 12 meters or more up to 13.5 meters in length.",
    outer: {
      length: "13,742",
      width: "2,438",
      height: "2,895"
    },
    inner: {
      length: "13,582",
      width: "2,347",
      height: "2,690"
    },
    doors: {
      width: "2,340 mm",
      height: "2,584 mm"
    },
    maxGrossWeight: "32 500 kg",
    tare: "4,110 kg",
    maxLoad: "28,390 kg",
    volume: "85.7 cub. M>",
    img: imgPath + "container4.png"
  },
  {
    title: "40-foot High Cube (40' HC) container \n(increased capacity)",
    description: texts.containerSharedDescription,
    outer: {
      length: "12,192",
      width: "2,438",
      height: "2,896"
    },
    inner: {
      length: "12,032",
      width: "2,352",
      height: "2,698"
    },
    doors: {
      width: "2,340 mm",
      height: "2,585 mm"
    },
    maxGrossWeight: "32 500 kg",
    tare: "3,850 kg",
    maxLoad: "28,650 kg",
    volume: "76.4 cub. M>",
    img: imgPath + "container1.png"
  },
  {
    title: "20' High Cube container{n}.",
    description: texts.containerSharedDescription,
    outer: {
      length: "6,058",
      width: "2,484",
      height: "2,896"
    },
    inner: {
      length: "5,898",
      width: "2,440",
      height: "2,698"
    },
    doors: {
      width: "2,374 mm",
      height: "2,585 mm"
    },
    maxGrossWeight: "30 480 kg",
    tare: "2,560 kg",
    maxLoad: "27,920 kg",
    volume: "38.4 cub. M>",
    img: imgPath + "container2.png",
    className: "shrink-img"
  },
  {
    title: "40-foot standard (steel) container",
    description: texts.containerSharedDescription2,
    outer: {
      length: "12,192",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "12,039",
      width: "2,350",
      height: "2,372"
    },
    doors: {
      width: "2,336 mm",
      height: "2,291 mm"
    },
    maxGrossWeight: "30 480 kg",
    tare: "3,980 kg",
    maxLoad: "26,500 kg",
    volume: "66.5 cub. M>",
    img: imgPath + "container4.png"
  },
  {
    title: "20-foot standard (steel) container",
    description: texts.containerSharedDescription2,
    outer: {
      length: "6,058",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "5,898",
      width: "2,352",
      height: "2,393"
    },
    doors: {
      width: "2,340 mm",
      height: "2,280 mm"
    },
    maxGrossWeight: "30 480 kg",
    tare: "2,220 kg",
    maxLoad: "28,260 kg",
    volume: "33.2 cub. M>",
    img: imgPath + "container2.png",
    className: "shrink-img"
  },
  {
    title: "20-foot (steel) open top container \nOPEN TOP",
    description: texts.containerSharedDescription3,
    outer: {
      length: "6,096",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "5,902",
      width: "2,240",
      height: "2,352"
    },
    doors: {
      width: "2,335 mm",
      height: "2,240 mm"
    },
    maxGrossWeight: "24 000 kg",
    tare: "2,440 kg",
    maxLoad: "21,560 kg",
    volume: "32 cub. M>",
    img: imgPath + "container9.png",
    className: "shrink-img-open"
  },
  {
    title: "40-foot (steel) open top container",
    description: texts.containerSharedDescription3,
    outer: {
      length: "12,192",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "12,021",
      width: "2,350",
      height: "2,330"
    },
    doors: {
      width: "2,338 mm",
      height: "2,234 mm"
    },
    maxGrossWeight: "36 000 kg",
    tare: "4,430 kg",
    maxLoad: "31,570 kg",
    volume: "66.7 cub. M>",
    img: imgPath + "container10.png",
    className: "grow-img"
  },
  {
    title: "40-foot (steel) Hard Top container with removable rigid lid",
    description: "For ease of loading, the container shall be equipped with a removable top bar over the doors at the end of the container.",
    outer: {
      length: "12,192",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "12,021",
      width: "2,350",
      height: "2,330"
    },
    doors: {
      width: "2,338 mm",
      height: "2,234 mm"
    },
    maxGrossWeight: "36 000 kg",
    tare: "4,430 kg",
    maxLoad: "31,570 kg",
    volume: "66.7 cub. M>",
    img: imgPath + "container11.png",
    className: "grow-img"
  },
  {
    title: "20-foot (steel) container with end walls",
    description: texts.containerSharedDescription4,
    outer: {
      length: "6,096",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "5,737",
      width: "2,240",
      height: "2,170 mm\n420 mm\n (compact)"
    },
    doors: {
      width: "--",
      height: "--"
    },
    maxGrossWeight: "30 480 kg",
    tare: "2,950 kg",
    maxLoad: "27,530 kg",
    volume: "27.9 cub. M>",
    img: imgPath + "container12.png",
    className: "grow-img stretch-row"
  },
  {
    title: "40-foot (steel) container with end walls",
    description: texts.containerSharedDescription4,
    outer: {
      length: "12,192",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "12,032",
      width: "2,240",
      height: "2,034 mm\n570 mm\n (compact)"
    },
    doors: {
      width: "--",
      height: "--"
    },
    maxGrossWeight: "45 000 kg",
    tare: "5,530 kg",
    maxLoad: "39,470 kg",
    volume: "58.8 cub. M>",
    img: imgPath + "container13.png",
    className: "grow-img stretch-row"
  },
  {
    title: "40-foot High Cube refrigerated (steel) container (increased capacity)",
    description: texts.containerSharedDescription,
    outer: {
      length: "12,192",
      width: "2,438",
      height: "2,895"
    },
    inner: {
      length: "11,560",
      width: "2,286",
      height: "2,500"
    },
    doors: {
      width: "2,286 mm",
      height: "2,478 mm"
    },
    maxGrossWeight: "30 480 kg",
    tare: "4,200 kg",
    maxLoad: "26,280 kg",
    volume: "66.1 cub. M>",
    img: imgPath + "container1.png"
  },
  {
    title: "40-foot refrigerated \n(steel) container",
    description: texts.containerSharedDescription,
    outer: {
      length: "12,192",
      width: "2,438",
      height: "2,591"
    },
    inner: {
      length: "11,555",
      width: "2,286",
      height: "2,280"
    },
    doors: {
      width: "2,286 mm",
      height: "2,245 mm"
    },
    maxGrossWeight: "30 480 kg",
    tare: "4,370 kg",
    maxLoad: "26,110 kg",
    volume: "60.2 cub. M>",
    img: imgPath + "container4.png"
  },
  {
    title: "20-foot refrigerated \n(steel) container",
    description: texts.containerSharedDescription,
    outer: {
      length: "6,096",
      width: "2,370",
      height: "2,591"
    },
    inner: {
      length: "5,455",
      width: "2,260",
      height: "2,275"
    },
    doors: {
      width: "2,340 mm",
      height: "2,260 mm"
    },
    maxGrossWeight: "27,000 kg",
    tare: "3,050 kg",
    maxLoad: "23,950 kg",
    volume: "28.0 cub. M>",
    img: imgPath + "container2.png",
    className: "shrink-img"
  }
];
const containersRus = {
  sizesDesignation: {
    3: "3 t",
    5: "5 t",
    20: "20 t",
    24: "24 t"
  },
  grossWeightTonns: {
    3: "3,0",
    5: "5,0",
    20: "20,0",
    24: "24,0"
  },
  innerVolume: {
    3: "5,16",
    5: "10,40",
    20: "30,60",
    24: "32,70"
  },
  sizes: {
    outer: {
      length: {
        3: "2 100",
        5: "2 650",
        20: "6 058",
        24: "6 058"
      },
      width: {
        3: "1 325",
        5: "2 100",
        20: "2 438",
        24: "2 438"
      },
      height: {
        3: "2 400",
        5: "2 400",
        20: "2 438",
        24: "2 591"
      }
    },
    inner: {
      length: {
        3: "1 930",
        5: "2 515",
        20: "5 867",
        24: "5 867"
      },
      width: {
        3: "1 225",
        5: "1 950",
        20: "2 330",
        24: "2 330"
      },
      height: {
        3: "2 128",
        5: "2 128",
        20: "2 197",
        24: "2 350"
      }
    },
    doors: {
      width: {
        3: "1 225",
        5: "1 950",
        20: "2 286",
        24: "2 286"
      },
      height: {
        3: "2 090",
        5: "2 100",
        20: "2 134",
        24: "2 261"
      }
    }
  }
};
const _sfc_main$2 = {
  computed: {
    tableItems() {
      const { $texts } = useNuxtApp();
      return [
        $texts.sizesDesignation,
        containersRus.sizesDesignation[3],
        containersRus.sizesDesignation[5],
        containersRus.sizesDesignation[20],
        containersRus.sizesDesignation[24],
        $texts.grossWeightTonns,
        containersRus.grossWeightTonns[3],
        containersRus.grossWeightTonns[5],
        containersRus.grossWeightTonns[20],
        containersRus.grossWeightTonns[24],
        $texts.innerVolume,
        containersRus.innerVolume[3],
        containersRus.innerVolume[5],
        containersRus.innerVolume[20],
        containersRus.innerVolume[24],
        $texts.sizes,
        $texts.outer,
        $texts.inner,
        $texts.length,
        containersRus.sizes.outer.length[3],
        containersRus.sizes.outer.length[5],
        containersRus.sizes.outer.length[20],
        containersRus.sizes.outer.length[24],
        $texts.width,
        containersRus.sizes.outer.width[3],
        containersRus.sizes.outer.width[5],
        containersRus.sizes.outer.width[20],
        containersRus.sizes.outer.width[24],
        $texts.height,
        containersRus.sizes.outer.height[3],
        containersRus.sizes.outer.height[5],
        containersRus.sizes.outer.height[20],
        containersRus.sizes.outer.height[24],
        $texts.length,
        containersRus.sizes.inner.length[3],
        containersRus.sizes.inner.length[5],
        containersRus.sizes.inner.length[20],
        containersRus.sizes.inner.length[24],
        $texts.width,
        containersRus.sizes.inner.width[3],
        containersRus.sizes.inner.width[5],
        containersRus.sizes.inner.width[20],
        containersRus.sizes.inner.width[24],
        $texts.height,
        containersRus.sizes.inner.height[3],
        containersRus.sizes.inner.height[5],
        containersRus.sizes.inner.height[20],
        containersRus.sizes.inner.height[24],
        $texts.doorsSizes,
        $texts.width,
        containersRus.sizes.doors.width[3],
        containersRus.sizes.doors.width[5],
        containersRus.sizes.doors.width[20],
        containersRus.sizes.doors.width[24],
        $texts.height,
        containersRus.sizes.doors.height[3],
        containersRus.sizes.doors.height[5],
        containersRus.sizes.doors.height[20],
        containersRus.sizes.doors.height[24]
      ];
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_img = __nuxt_component_0$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "list-item" }, _attrs))} data-v-a8deb291><h4 class="list-item__title" data-v-a8deb291>${ssrInterpolate(_ctx.$texts.containerRusTitle)}</h4><p class="list-item__description" data-v-a8deb291>${ssrInterpolate(_ctx.$texts.containerSharedDescription2)}</p><div class="list-item__img-container list-item__img-container_rus" data-v-a8deb291>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    class: "list-item__img list-item__img",
    src: "images/containers/container2.png",
    format: "webp",
    alt: _ctx.$texts.containerRusTitle + "from " + _ctx.$texts.companyNameSeo
  }, null, _parent));
  _push(ssrRenderComponent(_component_nuxt_img, {
    class: "list-item__img",
    src: "images/containers/container4.png",
    format: "webp",
    alt: _ctx.$texts.containerRusTitle + "from " + _ctx.$texts.companyNameSeo
  }, null, _parent));
  _push(`</div><div class="list-item__table list-item__table_rus" data-v-a8deb291><!--[-->`);
  ssrRenderList($options.tableItems, (item) => {
    _push(`<div class="table-item" data-v-a8deb291>${ssrInterpolate(item)}</div>`);
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Containers/StatsListItemRus.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-a8deb291"]]);
const _sfc_main$1 = {
  computed: {
    containersListTop() {
      return containers$1.slice(0, 13);
    },
    containersListBottom() {
      return containers$1.slice(-3);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainersStatsListItem = __nuxt_component_0;
  const _component_ContainersStatsListItemRus = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "stats-list" }, _attrs))} data-v-da9c4628><!--[-->`);
  ssrRenderList($options.containersListTop, (container) => {
    _push(ssrRenderComponent(_component_ContainersStatsListItem, {
      key: container.title,
      container
    }, null, _parent));
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_ContainersStatsListItemRus, null, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList($options.containersListBottom, (container) => {
    _push(ssrRenderComponent(_component_ContainersStatsListItem, {
      key: container.title,
      container
    }, null, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Containers/StatsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-da9c4628"]]);
const _sfc_main = {
  setup() {
    const { $texts } = useNuxtApp();
    useHead({
      title: $texts.seoContainersTitle
    });
    useServerHead({
      meta: [
        { property: "og:title", content: $texts.seoContainersTitle },
        { name: "description", content: $texts.seoContainersDescription },
        { property: "og:description", content: $texts.seoContainersDescription },
        { name: "keywords", content: $texts.seoKeywordsBase + $texts.seoContainersKeywords }
      ]
    });
  },
  computed: {
    background() {
      const $img = useImage();
      const imgUrl = $img("images/containers_background.png", {
        format: "webp",
        preload: true,
        sizes: "xxl:1512",
        quality: 100
      });
      return {
        backgroundImage: `url('${imgUrl}')`
      };
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ContainersMainHeader = __nuxt_component_0$1;
  const _component_ContainersStatsList = __nuxt_component_1;
  const _component_SharedConclusionCard = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-d396e308><section class="containers-main" data-v-d396e308><div style="${ssrRenderStyle($options.background)}" class="containers-bg" data-v-d396e308></div>`);
  _push(ssrRenderComponent(_component_ContainersMainHeader, null, null, _parent));
  _push(`</section><section class="containers-list" data-v-d396e308>`);
  _push(ssrRenderComponent(_component_ContainersStatsList, null, null, _parent));
  _push(`</section><section class="containers-card" data-v-d396e308>`);
  _push(ssrRenderComponent(_component_SharedConclusionCard, {
    "seo-alt": _ctx.$texts.seoConclusionContainers
  }, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/containers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const containers = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d396e308"]]);

export { containers as default };
//# sourceMappingURL=containers-7799ddfa.mjs.map
