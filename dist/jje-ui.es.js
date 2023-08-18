import { getCurrentScope as B, onScopeDispose as C, unref as L, watch as S, ref as g, computed as N, openBlock as p, createElementBlock as f, createElementVNode as v, Fragment as b, renderList as I, toDisplayString as w, createCommentVNode as P, pushScopeId as T, popScopeId as F } from "vue";
function M(e) {
  return B() ? (C(e), !0) : !1;
}
function k(e) {
  return typeof e == "function" ? e() : L(e);
}
const A = typeof window < "u", E = () => {
}, D = /* @__PURE__ */ R();
function R() {
  var e;
  return A && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function y(e) {
  var l;
  const o = k(e);
  return (l = o == null ? void 0 : o.$el) != null ? l : o;
}
const O = A ? window : void 0;
function x(...e) {
  let l, o, n, u;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([o, n, u] = e, l = O) : [l, o, n, u] = e, !l)
    return E;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const i = [], m = () => {
    i.forEach((r) => r()), i.length = 0;
  }, c = (r, a, t, s) => (r.addEventListener(a, t, s), () => r.removeEventListener(a, t, s)), _ = S(
    () => [y(l), k(u)],
    ([r, a]) => {
      m(), r && i.push(
        ...o.flatMap((t) => n.map((s) => c(r, t, s, a)))
      );
    },
    { immediate: !0, flush: "post" }
  ), h = () => {
    _(), m();
  };
  return M(h), h;
}
let V = !1;
function W(e, l, o = {}) {
  const { window: n = O, ignore: u = [], capture: i = !0, detectIframe: m = !1 } = o;
  if (!n)
    return;
  D && !V && (V = !0, Array.from(n.document.body.children).forEach((t) => t.addEventListener("click", E)));
  let c = !0;
  const _ = (t) => u.some((s) => {
    if (typeof s == "string")
      return Array.from(n.document.querySelectorAll(s)).some((d) => d === t.target || t.composedPath().includes(d));
    {
      const d = y(s);
      return d && (t.target === d || t.composedPath().includes(d));
    }
  }), r = [
    x(n, "click", (t) => {
      const s = y(e);
      if (!(!s || s === t.target || t.composedPath().includes(s))) {
        if (t.detail === 0 && (c = !_(t)), !c) {
          c = !0;
          return;
        }
        l(t);
      }
    }, { passive: !0, capture: i }),
    x(n, "pointerdown", (t) => {
      const s = y(e);
      s && (c = !t.composedPath().includes(s) && !_(t));
    }, { passive: !0 }),
    m && x(n, "blur", (t) => {
      setTimeout(() => {
        var s;
        const d = y(e);
        ((s = n.document.activeElement) == null ? void 0 : s.tagName) === "IFRAME" && !(d != null && d.contains(n.document.activeElement)) && l(t);
      }, 0);
    })
  ].filter(Boolean);
  return () => r.forEach((t) => t());
}
const $ = (e, l) => {
  const o = e.__vccOpts || e;
  for (const [n, u] of l)
    o[n] = u;
  return o;
}, j = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, q = ["value"], z = {
  key: 0,
  absolute: "",
  "top-30px": "",
  "left-0": "",
  "bg-white": "",
  "w-full": "",
  "h-auto": "",
  border: "0px x-1px gray-4 solid"
}, G = ["onClick"], H = {
  __name: "VButton",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: l }) {
    const o = e, n = g(null), u = g(!1), i = g(!1);
    W(n, (r) => {
      u.value = !1;
    });
    const m = N(() => o.options.suffix ? o.options.suffix.map((r) => o.modelValue.split("@")[0] + r) : []), c = (r) => {
      l("update:modelValue", r);
    }, _ = () => {
      u.value = o.modelValue.length !== 0;
    }, h = (r) => {
      i.value = !0, u.value = !1, c(r), setTimeout(() => {
        i.value = !1;
      }, 300);
    };
    return S(
      () => o.modelValue,
      () => {
        i.value || (u.value = o.modelValue.length !== 0);
      }
    ), (r, a) => (p(), f("div", j, [
      v("input", {
        ref_key: "inputRef",
        ref: n,
        "w-full": "",
        "h-full": "",
        "pl-10px": "",
        value: e.modelValue,
        border: "1px gray-4 solid",
        onInput: a[0] || (a[0] = (t) => c(t.target.value)),
        onFocus: _
      }, null, 40, q),
      u.value ? (p(), f("ul", z, [
        (p(!0), f(b, null, I(m.value, (t) => (p(), f("li", {
          key: t,
          border: "0px b-1px gray-4 solid"
        }, [
          v("a", {
            "cursor-pointer": "",
            "w-full": "",
            block: "",
            "py-5px": "",
            "pl-10px": "",
            "text-14px": "",
            "hover:bg-gray-1": "",
            onClick: (s) => h(t)
          }, w(t), 9, G)
        ]))), 128))
      ])) : P("", !0)
    ]));
  }
}, te = /* @__PURE__ */ $(H, [["__scopeId", "data-v-29595b12"]]);
const J = (e) => (T("data-v-373871c7"), e = e(), F(), e), K = { class: "flex border-top margin-bottom" }, Q = { class: "timeitem" }, U = /* @__PURE__ */ J(() => /* @__PURE__ */ v("div", { class: "dot" }, null, -1)), X = { class: "content" }, Y = { class: "timestamp" }, Z = {
  __name: "VTimeline",
  props: {
    timeItem: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    return (l, o) => (p(), f("div", null, [
      v("ul", K, [
        (p(!0), f(b, null, I(e.timeItem, (n, u) => (p(), f("li", Q, [
          U,
          v("div", X, w(n.content), 1),
          v("div", Y, w(n.timestamp), 1)
        ]))), 256))
      ])
    ]));
  }
}, oe = /* @__PURE__ */ $(Z, [["__scopeId", "data-v-373871c7"]]);
export {
  te as VButton,
  oe as VTimeline
};
