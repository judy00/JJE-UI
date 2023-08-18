import { openBlock as s, createElementBlock as c, createElementVNode as e, normalizeStyle as a, toDisplayString as i, Fragment as d, renderList as p, pushScopeId as u, popScopeId as m } from "vue";
const r = (t, _) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of _)
    o[n] = l;
  return o;
}, v = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, y = {
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
    return (_, o) => (s(), c("div", v, [
      e("h3", {
        class: "jje-btn jje-btn-bg",
        style: a(t.options)
      }, i(t.text), 5)
    ]));
  }
}, j = /* @__PURE__ */ r(y, [["__scopeId", "data-v-d612413d"]]);
const h = (t) => (u("data-v-373871c7"), t = t(), m(), t), x = { class: "flex border-top margin-bottom" }, f = { class: "timeitem" }, g = /* @__PURE__ */ h(() => /* @__PURE__ */ e("div", { class: "dot" }, null, -1)), I = { class: "content" }, V = { class: "timestamp" }, b = {
  __name: "VTimeline",
  props: {
    timeItem: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    return (_, o) => (s(), c("div", null, [
      e("ul", x, [
        (s(!0), c(d, null, p(t.timeItem, (n, l) => (s(), c("li", f, [
          g,
          e("div", I, i(n.content), 1),
          e("div", V, i(n.timestamp), 1)
        ]))), 256))
      ])
    ]));
  }
}, B = /* @__PURE__ */ r(b, [["__scopeId", "data-v-373871c7"]]);
export {
  j as VButton,
  B as VTimeline
};
