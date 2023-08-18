import { getCurrentScope as T, onScopeDispose as C, unref as L, watch as I, ref as k, computed as x, openBlock as p, createElementBlock as f, createElementVNode as h, Fragment as w, renderList as g, toDisplayString as S, createCommentVNode as N, useSlots as D, normalizeStyle as E, renderSlot as F } from "vue";
function j(t) {
  return T() ? (C(t), !0) : !1;
}
function V(t) {
  return typeof t == "function" ? t() : L(t);
}
const M = typeof window < "u", O = () => {
}, B = /* @__PURE__ */ R();
function R() {
  var t;
  return M && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && /* @__PURE__ */ /iP(ad|hone|od)/.test(window.navigator.userAgent);
}
function v(t) {
  var l;
  const o = V(t);
  return (l = o == null ? void 0 : o.$el) != null ? l : o;
}
const P = M ? window : void 0;
function b(...t) {
  let l, o, n, u;
  if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([o, n, u] = t, l = P) : [l, o, n, u] = t, !l)
    return O;
  Array.isArray(o) || (o = [o]), Array.isArray(n) || (n = [n]);
  const m = [], a = () => {
    m.forEach((s) => s()), m.length = 0;
  }, i = (s, d, e, r) => (s.addEventListener(d, e, r), () => s.removeEventListener(d, e, r)), c = I(
    () => [v(l), V(u)],
    ([s, d]) => {
      a(), s && m.push(
        ...o.flatMap((e) => n.map((r) => i(s, e, r, d)))
      );
    },
    { immediate: !0, flush: "post" }
  ), _ = () => {
    c(), a();
  };
  return j(_), _;
}
let A = !1;
function W(t, l, o = {}) {
  const { window: n = P, ignore: u = [], capture: m = !0, detectIframe: a = !1 } = o;
  if (!n)
    return;
  B && !A && (A = !0, Array.from(n.document.body.children).forEach((e) => e.addEventListener("click", O)));
  let i = !0;
  const c = (e) => u.some((r) => {
    if (typeof r == "string")
      return Array.from(n.document.querySelectorAll(r)).some((y) => y === e.target || e.composedPath().includes(y));
    {
      const y = v(r);
      return y && (e.target === y || e.composedPath().includes(y));
    }
  }), s = [
    b(n, "click", (e) => {
      const r = v(t);
      if (!(!r || r === e.target || e.composedPath().includes(r))) {
        if (e.detail === 0 && (i = !c(e)), !i) {
          i = !0;
          return;
        }
        l(e);
      }
    }, { passive: !0, capture: m }),
    b(n, "pointerdown", (e) => {
      const r = v(t);
      r && (i = !e.composedPath().includes(r) && !c(e));
    }, { passive: !0 }),
    a && b(n, "blur", (e) => {
      setTimeout(() => {
        var r;
        const y = v(t);
        ((r = n.document.activeElement) == null ? void 0 : r.tagName) === "IFRAME" && !(y != null && y.contains(n.document.activeElement)) && l(e);
      }, 0);
    })
  ].filter(Boolean);
  return () => s.forEach((e) => e());
}
const $ = (t, l) => {
  const o = t.__vccOpts || t;
  for (const [n, u] of l)
    o[n] = u;
  return o;
}, q = {
  relative: "",
  "w-full": "",
  "h-30px": ""
}, z = ["value"], G = {
  key: 0,
  absolute: "",
  "top-30px": "",
  "left-0": "",
  "bg-white": "",
  "w-full": "",
  "h-auto": "",
  border: "0px x-1px gray-4 solid"
}, H = ["onClick"], J = {
  __name: "MEmailInput",
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
  setup(t, { emit: l }) {
    const o = t, n = k(null), u = k(!1), m = k(!1);
    W(n, (s) => {
      u.value = !1;
    });
    const a = x(() => o.options.suffix ? o.options.suffix.map((s) => o.modelValue.split("@")[0] + s) : []), i = (s) => {
      l("update:modelValue", s);
    }, c = () => {
      u.value = o.modelValue.length !== 0;
    }, _ = (s) => {
      m.value = !0, u.value = !1, i(s), setTimeout(() => {
        m.value = !1;
      }, 300);
    };
    return I(
      () => o.modelValue,
      () => {
        m.value || (u.value = o.modelValue.length !== 0);
      }
    ), (s, d) => (p(), f("div", q, [
      h("input", {
        ref_key: "inputRef",
        ref: n,
        "w-full": "",
        "h-full": "",
        "pl-10px": "",
        value: t.modelValue,
        border: "1px gray-4 solid",
        onInput: d[0] || (d[0] = (e) => i(e.target.value)),
        onFocus: c
      }, null, 40, z),
      u.value ? (p(), f("ul", G, [
        (p(!0), f(w, null, g(a.value, (e) => (p(), f("li", {
          key: e,
          border: "0px b-1px gray-4 solid"
        }, [
          h("a", {
            "cursor-pointer": "",
            "w-full": "",
            block: "",
            "py-5px": "",
            "pl-10px": "",
            "text-14px": "",
            "hover:bg-gray-1": "",
            onClick: (r) => _(e)
          }, S(e), 9, H)
        ]))), 128))
      ])) : N("", !0)
    ]));
  }
}, ee = /* @__PURE__ */ $(J, [["__scopeId", "data-v-7a0cd896"]]);
const K = { class: "vue-pure-table" }, Q = { id: "columns" }, U = {
  id: "rows",
  class: "flex-col"
}, X = { key: 0 }, Y = {
  __name: "MPureTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  },
  setup(t) {
    const l = t, o = D(), n = x(() => l.columns.map((a) => a.field)), u = x(() => l.rows.map((a) => {
      const i = [];
      return Object.keys(a).forEach((c, _) => {
        n.value[_] && i.push(a[n.value[_]]);
      }), i;
    })), m = (a) => Object.keys(o).includes(a);
    return (a, i) => (p(), f("div", K, [
      h("ul", Q, [
        (p(!0), f(w, null, g(l.columns, (c) => (p(), f("li", {
          key: c.label,
          class: "table_columns",
          style: E(c.style)
        }, S(c.label), 5))), 128))
      ]),
      h("ul", U, [
        (p(!0), f(w, null, g(u.value, (c, _) => (p(), f("li", { key: _ }, [
          h("ul", null, [
            (p(!0), f(w, null, g(c, (s, d) => (p(), f("li", {
              key: s.id,
              style: E(l.columns[d].style)
            }, [
              m(l.columns[d].field) ? F(a.$slots, l.columns[d].field, {
                key: 1,
                data: { rowData: s, rowTarget: u.value[_] }
              }, void 0, !0) : (p(), f("p", X, S(s), 1))
            ], 4))), 128))
          ])
        ]))), 128))
      ])
    ]));
  }
}, te = /* @__PURE__ */ $(Y, [["__scopeId", "data-v-947644cc"]]);
export {
  ee as MEmailInput,
  te as MPureTable
};
