import { _ as __nuxt_component_0 } from './nuxt-link-349f040b.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'file:///home/andros/workspace/pets/idegram/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///home/andros/workspace/pets/idegram/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/ufo/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/ofetch/dist/node.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/hookable/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unctx/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unhead/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/h3/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/destr/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/scule/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/ohash/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unstorage/dist/index.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/unstorage/drivers/fs.mjs';
import 'file:///home/andros/workspace/pets/idegram/node_modules/radix3/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}><h1>Blog</h1><p>Texto de blog</p><p>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Volver`);
      } else {
        return [
          createTextVNode("Volver")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const blog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { blog as default };
//# sourceMappingURL=blog-2cb5e053.mjs.map
