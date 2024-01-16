import { defineComponent, createVNode, defineAsyncComponent } from 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/index.mjs';
import { c as createError } from './server.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ofetch/dist/node.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ufo/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/vue/server-renderer/index.mjs';
import './nitro-prerenderer.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/unstorage/drivers/fs.mjs';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/radix3/dist/index.mjs';
import 'node:url';
import 'file://C:/Users/tzhovtyy/Desktop/tislogistic-frontend/node_modules/ipx/dist/index.mjs';

const OgImageBasic = /* @__PURE__ */ defineAsyncComponent(() => import(
  './OgImageBasic.island-5dd1597a.mjs'
  /* webpackChunkName: "components/og-image-basic" */
).then((c) => c.default || c));
const islandComponents = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  OgImageBasic
});
const islandRenderer = /* @__PURE__ */ defineComponent({
  props: {
    context: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const component = islandComponents[props.context.name];
    if (!component) {
      throw createError({
        statusCode: 404,
        statusMessage: `Island component not found: ${JSON.stringify(component)}`
      });
    }
    return () => createVNode(component || "span", props.context.props);
  }
});

export { islandRenderer as default };
//# sourceMappingURL=island-renderer-2624e4e3.mjs.map
