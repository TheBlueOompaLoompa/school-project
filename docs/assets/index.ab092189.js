import {
  S as U,
  i as V,
  s as W,
  e as i,
  t as p,
  a as f,
  b as Z,
  c as X,
  d as t,
  f as c,
  n as P,
  g as Y,
  o as re,
  m as oe,
  h as x,
  j as ee,
  k as te,
  l as se,
  p as ie,
  q as le,
  r as ne,
  u as ae,
} from './vendor.8b376795.js';
const fe = function () {
  const s = document.createElement('link').relList;
  if (s && s.supports && s.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) r(n);
  new MutationObserver((n) => {
    for (const a of n)
      if (a.type === 'childList')
        for (const q of a.addedNodes)
          q.tagName === 'LINK' && q.rel === 'modulepreload' && r(q);
  }).observe(document, { childList: !0, subtree: !0 });
  function e(n) {
    const a = {};
    return (
      n.integrity && (a.integrity = n.integrity),
      n.referrerpolicy && (a.referrerPolicy = n.referrerpolicy),
      n.crossorigin === 'use-credentials'
        ? (a.credentials = 'include')
        : n.crossorigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function r(n) {
    if (n.ep) return;
    n.ep = !0;
    const a = e(n);
    fetch(n.href, a);
  }
};
fe();
function ue(l) {
  let s,
    e,
    r,
    n,
    a,
    q,
    m,
    _,
    g,
    h,
    v,
    d,
    $,
    T,
    L,
    j,
    w,
    y,
    M,
    B,
    b,
    C,
    A,
    F,
    O,
    K,
    I,
    z,
    N,
    D,
    S,
    G,
    k,
    J,
    E,
    Q,
    H,
    R;
  return {
    c() {
      (s = i('div')),
        (e = i('mq')),
        (r = i('h2')),
        (n = p(l[0])),
        (a = i('h2')),
        (q = p(l[0])),
        (m = i('h2')),
        (_ = p(l[0])),
        (g = i('h2')),
        (h = p(l[0])),
        (v = i('h2')),
        (d = p(l[0])),
        ($ = i('h2')),
        (T = p(l[0])),
        (L = i('h2')),
        (j = p(l[0])),
        (w = i('h2')),
        (y = p(l[0])),
        (M = i('h2')),
        (B = p(l[0])),
        (b = i('h2')),
        (C = p(l[0])),
        (A = i('h2')),
        (F = p(l[0])),
        (O = i('h2')),
        (K = p(l[0])),
        (I = i('h2')),
        (z = p(l[0])),
        (N = i('h2')),
        (D = p(l[0])),
        (S = i('h2')),
        (G = p(l[0])),
        (k = i('h2')),
        (J = p(l[0])),
        (E = i('h2')),
        (Q = p(l[0])),
        (H = i('h2')),
        (R = p(l[0])),
        f(r, 'class', 'svelte-141qqn5'),
        f(a, 'class', 'svelte-141qqn5'),
        f(m, 'class', 'svelte-141qqn5'),
        f(g, 'class', 'svelte-141qqn5'),
        f(v, 'class', 'svelte-141qqn5'),
        f($, 'class', 'svelte-141qqn5'),
        f(L, 'class', 'svelte-141qqn5'),
        f(w, 'class', 'svelte-141qqn5'),
        f(M, 'class', 'svelte-141qqn5'),
        f(b, 'class', 'svelte-141qqn5'),
        f(A, 'class', 'svelte-141qqn5'),
        f(O, 'class', 'svelte-141qqn5'),
        f(I, 'class', 'svelte-141qqn5'),
        f(N, 'class', 'svelte-141qqn5'),
        f(S, 'class', 'svelte-141qqn5'),
        f(k, 'class', 'svelte-141qqn5'),
        f(E, 'class', 'svelte-141qqn5'),
        f(H, 'class', 'svelte-141qqn5'),
        f(e, 'class', 'svelte-141qqn5'),
        Z(s, 'top', l[1] + 'px'),
        f(s, 'class', 'svelte-141qqn5');
    },
    m(o, u) {
      X(o, s, u),
        t(s, e),
        t(e, r),
        t(r, n),
        t(e, a),
        t(a, q),
        t(e, m),
        t(m, _),
        t(e, g),
        t(g, h),
        t(e, v),
        t(v, d),
        t(e, $),
        t($, T),
        t(e, L),
        t(L, j),
        t(e, w),
        t(w, y),
        t(e, M),
        t(M, B),
        t(e, b),
        t(b, C),
        t(e, A),
        t(A, F),
        t(e, O),
        t(O, K),
        t(e, I),
        t(I, z),
        t(e, N),
        t(N, D),
        t(e, S),
        t(S, G),
        t(e, k),
        t(k, J),
        t(e, E),
        t(E, Q),
        t(e, H),
        t(H, R);
    },
    p(o, [u]) {
      u & 1 && c(n, o[0]),
        u & 1 && c(q, o[0]),
        u & 1 && c(_, o[0]),
        u & 1 && c(h, o[0]),
        u & 1 && c(d, o[0]),
        u & 1 && c(T, o[0]),
        u & 1 && c(j, o[0]),
        u & 1 && c(y, o[0]),
        u & 1 && c(B, o[0]),
        u & 1 && c(C, o[0]),
        u & 1 && c(F, o[0]),
        u & 1 && c(K, o[0]),
        u & 1 && c(z, o[0]),
        u & 1 && c(D, o[0]),
        u & 1 && c(G, o[0]),
        u & 1 && c(J, o[0]),
        u & 1 && c(Q, o[0]),
        u & 1 && c(R, o[0]),
        u & 2 && Z(s, 'top', o[1] + 'px');
    },
    i: P,
    o: P,
    d(o) {
      o && Y(s);
    },
  };
}
function pe(l, s, e) {
  let { text: r } = s,
    { pos: n = '0' } = s;
  return (
    (l.$$set = (a) => {
      'text' in a && e(0, (r = a.text)), 'pos' in a && e(1, (n = a.pos));
    }),
    [r, n]
  );
}
class ce extends U {
  constructor(s) {
    super();
    V(this, s, pe, ue, W, { text: 0, pos: 1 });
  }
}
function he(l) {
  let s;
  return {
    c() {
      (s = i('article')), f(s, 'class', 'svelte-4rv3e8');
    },
    m(e, r) {
      X(e, s, r), (s.innerHTML = l[0]);
    },
    p(e, [r]) {
      r & 1 && (s.innerHTML = e[0]);
    },
    i: P,
    o: P,
    d(e) {
      e && Y(s);
    },
  };
}
function qe(l, s, e) {
  let r = 'Loading...';
  return (
    re(async () => {
      const a = await (await fetch('/article.md')).text();
      e(0, (r = oe.parse(a)));
    }),
    [r]
  );
}
class me extends U {
  constructor(s) {
    super();
    V(this, s, qe, he, W, {});
  }
}
function ve(l) {
  let s, e, r, n, a, q, m, _, g;
  return (
    (e = new me({})),
    (q = new ce({ props: { text: l[0], pos: '2000' } })),
    {
      c() {
        (s = i('main')),
          x(e.$$.fragment),
          (r = ee()),
          (n = i('input')),
          (a = ee()),
          x(q.$$.fragment),
          f(n, 'class', 'svelte-1qprftp'),
          f(s, 'class', 'svelte-1qprftp');
      },
      m(h, v) {
        X(h, s, v),
          te(e, s, null),
          t(s, r),
          t(s, n),
          se(n, l[0]),
          t(s, a),
          te(q, s, null),
          (m = !0),
          _ || ((g = ie(n, 'input', l[1])), (_ = !0));
      },
      p(h, [v]) {
        v & 1 && n.value !== h[0] && se(n, h[0]);
        const d = {};
        v & 1 && (d.text = h[0]), q.$set(d);
      },
      i(h) {
        m || (le(e.$$.fragment, h), le(q.$$.fragment, h), (m = !0));
      },
      o(h) {
        ne(e.$$.fragment, h), ne(q.$$.fragment, h), (m = !1);
      },
      d(h) {
        h && Y(s), ae(e), ae(q), (_ = !1), g();
      },
    }
  );
}
function _e(l, s, e) {
  let r = 'Input text into the text box!';
  function n() {
    (r = this.value), e(0, r);
  }
  return [r, n];
}
class ge extends U {
  constructor(s) {
    super();
    V(this, s, _e, ve, W, {});
  }
}
new ge({ target: document.getElementById('app') });
