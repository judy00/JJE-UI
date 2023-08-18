import { getCurrentScope as A, onScopeDispose as I, unref as O, watch as V, ref as h, computed as B, openBlock as _, createElementBlock as y, createElementVNode as w, Fragment as C, renderList as L, toDisplayString as N, createCommentVNode as P } from "vue";
function F(t) {
  return A() ? (I(t), !0) : !1;
}
function b(t) {
  return typeof t == "function" ? t() : O(t);
}
const k = typeof window < "u", E = () => {
}, M = /* @__PURE__ */ D();
function D() {
  var t;
  return k && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function v(t) {
  var u;
  const o = b(t);
  return (u = o == null ? void 0 : o.$el) != null ? u : o;
}
const S = k ? window : void 0;
function g(...t) {
  let u, o, n, s;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([o, n, s] = t, u = S) : [u, o, n, s] = t, !u)
    return E;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const i = [], p = () => {
    i.forEach((l) => l()), i.length = 0;
  }, a = (l, c, e, r) => (l.addEventListener(c, e, r), () => l.removeEventListener(c, e, r)), f = V(
    () => [v(u), b(s)],
    ([l, c]) => {
      p(), l && i.push(
        ...o.flatMap((e) => n.map((r) => a(l, e, r, c)))
      );
    },
    { immediate: !0, flush: "post" }
  ), m = () => {
    f(), p();
  };
  return F(m), m;
}
let x = !1;
function R(t, u, o = {}) {
  const { window: n = S, ignore: s = [], capture: i = !0, detectIframe: p = !1 } = o;
  if (!n)
    return;
  M && !x && (x = !0, Array.from(n.document.body.children).forEach((e) => e.addEventListener("click", E)));
  let a = !0;
  const f = (e) => s.some((r) => {
    if (typeof r == "string")
      return Array.from(n.document.querySelectorAll(r)).some((d) => d === e.target || e.composedPath().includes(d));
    {
      const d = v(r);
      return d && (e.target === d || e.composedPath().includes(d));
    }
  }), l = [
    g(n, "click", (e) => {
      const r = v(t);
      if (!(!r || r === e.target || e.composedPath().includes(r))) {
        if (e.detail === 0 && (a = !f(e)), !a) {
          a = !0;
          return;
        }
        u(e);
      }
    }, { passive: !0, capture: i }),
    g(n, "pointerdown", (e) => {
      const r = v(t);
      r && (a = !e.composedPath().includes(r) && !f(e));
    }, { passive: !0 }),
    p && g(n, "blur", (e) => {
      setTimeout(() => {
        var r;
        const d = v(t);
        ((r = n.document.activeElement) == null ? void 0 : r.tagName) === "IFRAME" && !(d != null && d.contains(n.document.activeElement)) && u(e);
      }, 0);
    })
  ].filter(Boolean);
  return () => l.forEach((e) => e());
}
const W = (t, u) => {
  const o = t.__vccOpts || t;
  for (const [n, s] of u)
    o[n] = s;
  return o;
}, T = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, $ = ["value"], j = {
  key: 0,
  absolute: "",
  "top-30px": "",
  "left-0": "",
  "bg-white": "",
  "w-full": "",
  "h-auto": "",
  border: "0px x-1px gray-4 solid"
}, q = ["onClick"], z = {
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
  setup(t, { emit: u }) {
    const o = t, n = h(null), s = h(!1), i = h(!1);
    R(n, (l) => {
      s.value = !1;
    });
    const p = B(() => o.options.suffix ? o.options.suffix.map((l) => o.modelValue.split("@")[0] + l) : []), a = (l) => {
      u("update:modelValue", l);
    }, f = () => {
      s.value = o.modelValue.length !== 0;
    }, m = (l) => {
      i.value = !0, s.value = !1, a(l), setTimeout(() => {
        i.value = !1;
      }, 300);
    };
    return V(
      () => o.modelValue,
      () => {
        i.value || (s.value = o.modelValue.length !== 0);
      }
    ), (l, c) => (_(), y("div", T, [
      w("input", {
        ref_key: "inputRef",
        ref: n,
        "w-full": "",
        "h-full": "",
        "pl-10px": "",
        value: t.modelValue,
        border: "1px gray-4 solid",
        onInput: c[0] || (c[0] = (e) => a(e.target.value)),
        onFocus: f
      }, null, 40, $),
      s.value ? (_(), y("ul", j, [
        (_(!0), y(C, null, L(p.value, (e) => (_(), y("li", {
          key: e,
          border: "0px b-1px gray-4 solid"
        }, [
          w("a", {
            "cursor-pointer": "",
            "w-full": "",
            block: "",
            "py-5px": "",
            "pl-10px": "",
            "text-14px": "",
            "hover:bg-gray-1": "",
            onClick: (r) => m(e)
          }, N(e), 9, q)
        ]))), 128))
      ])) : P("", !0)
    ]));
  }
}, H = /* @__PURE__ */ W(z, [["__scopeId", "data-v-29595b12"]]);
export {
  H as VButton
};
