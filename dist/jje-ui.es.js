import { openBlock as _, createElementBlock as s, createElementVNode as r, normalizeStyle as l, toDisplayString as a } from "vue";
const p = (t, o) => {
  const e = t.__vccOpts || t;
  for (const [n, c] of o)
    e[n] = c;
  return e;
}, i = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, u = {
  __name: "VButton",
  props: {
    text: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: {}
    }
  },
  setup(t) {
    return (o, e) => (_(), s("div", i, [
      r("h3", {
        class: "jje-btn jje-btn-bg",
        style: l(t.options)
      }, a(t.text), 5)
    ]));
  }
}, y = /* @__PURE__ */ p(u, [["__scopeId", "data-v-e4dc72c3"]]);
export {
  y as VButton
};
