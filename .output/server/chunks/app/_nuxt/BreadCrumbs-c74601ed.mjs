import { _ as __nuxt_component_0$1 } from './nuxt-link-0d39ff03.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { _ as _export_sfc, d as useSchemaOrg, e as defineBreadcrumb, f as useRoute, b as useRouter } from '../server.mjs';
import { parseURL, hasTrailingSlash, stringifyParsedURL, withTrailingSlash } from 'ufo';
import { t as titleCase, r as resolveAbsoluteInternalLink, a as resolveTrailingSlash } from './internalLinks-11d3a882.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderSlot, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const getBreadcrumbs = (input) => {
  const startNode = parseURL(input);
  const appendsTrailingSlash = hasTrailingSlash(startNode.pathname);
  const stepNode = (node, nodes = []) => {
    const fullPath = stringifyParsedURL(node);
    const currentPathName = node.pathname;
    nodes.push(fullPath || "/");
    node.pathname = currentPathName.substring(0, currentPathName.lastIndexOf("/"));
    if (appendsTrailingSlash)
      node.pathname = withTrailingSlash(node.pathname.substring(0, node.pathname.lastIndexOf("/")));
    if (node.pathname !== currentPathName)
      stepNode(node, nodes);
    return nodes;
  };
  return stepNode(startNode);
};
function useBreadcrumbs() {
  const router = useRouter();
  return computed(() => {
    const routes = router.getRoutes();
    const route = router.currentRoute.value;
    return getBreadcrumbs(route.path).reverse().map((path) => {
      var _a;
      return {
        path,
        meta: (_a = routes.find((route2) => route2.path === path)) == null ? void 0 : _a.meta
      };
    }).map(({ path, meta }) => {
      let title = (meta == null ? void 0 : meta.breadcrumbTitle) || (meta == null ? void 0 : meta.title);
      if (!title)
        if (path === "/")
          title = "Home";
        else
          title = titleCase(path.split("/").pop() || "");
      return {
        schema: {
          name: title,
          item: resolveAbsoluteInternalLink(path)
        },
        to: resolveTrailingSlash(path),
        title
      };
    });
  });
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  setup(__props) {
    const breadcrumbs = useBreadcrumbs();
    const schemaBreadcrumbs = computed(() => breadcrumbs.value.map((breadcrumb) => breadcrumb.schema));
    useSchemaOrg([
      defineBreadcrumb({
        itemListElement: schemaBreadcrumbs
      })
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "Breadcrumb" }, _attrs))}>`);
      if (unref(breadcrumbs).length > 1) {
        _push(`<ul><!--[-->`);
        ssrRenderList(unref(breadcrumbs), (item, key) => {
          _push(`<li>`);
          ssrRenderSlot(_ctx.$slots, "breadcrumb", {
            to: item.to,
            title: item.title,
            last: key === unref(breadcrumbs).length - 1,
            first: key === 0
          }, () => {
            _push(ssrRenderComponent(_component_NuxtLink, {
              to: item.to
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`${ssrInterpolate(item.title)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(item.title), 1)
                  ];
                }
              }),
              _: 2
            }, _parent));
          }, _push, _parent);
          _push(`</li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt-seo-kit/components/Breadcrumbs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  props: {
    reactiveLabel: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup() {
    const route = useRoute();
    const currentRoute = route.fullPath;
    return {
      currentRoute
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Breadcrumbs = _sfc_main$1;
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_Breadcrumbs, mergeProps({ class: "breadcrumbs" }, _attrs), {
    breadcrumb: withCtx(({ to, title }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtLink, {
          class: "breadcrumbs__link",
          to
        }, {
          default: withCtx((_, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($props.reactiveLabel && to === $setup.currentRoute ? $props.reactiveLabel : title)}`);
            } else {
              return [
                createTextVNode(toDisplayString($props.reactiveLabel && to === $setup.currentRoute ? $props.reactiveLabel : title), 1)
              ];
            }
          }),
          _: 2
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtLink, {
            class: "breadcrumbs__link",
            to
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($props.reactiveLabel && to === $setup.currentRoute ? $props.reactiveLabel : title), 1)
            ]),
            _: 2
          }, 1032, ["to"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Shared/BreadCrumbs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=BreadCrumbs-c74601ed.mjs.map
