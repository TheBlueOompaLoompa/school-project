function V() {}
function H(s) {
  return s();
}
function J() {
  return Object.create(null);
}
function D(s) {
  s.forEach(H);
}
function fe(s) {
  return typeof s == 'function';
}
function Qe(s, e) {
  return s != s
    ? e == e
    : s !== e || (s && typeof s == 'object') || typeof s == 'function';
}
function ge(s) {
  return Object.keys(s).length === 0;
}
function Fe(s, e) {
  s.appendChild(e);
}
function We(s, e, t) {
  s.insertBefore(e, t || null);
}
function de(s) {
  s.parentNode.removeChild(s);
}
function Xe(s) {
  return document.createElement(s);
}
function ke(s) {
  return document.createTextNode(s);
}
function Ge() {
  return ke(' ');
}
function Ve(s, e, t, n) {
  return s.addEventListener(e, t, n), () => s.removeEventListener(e, t, n);
}
function He(s, e, t) {
  t == null
    ? s.removeAttribute(e)
    : s.getAttribute(e) !== t && s.setAttribute(e, t);
}
function me(s) {
  return Array.from(s.childNodes);
}
function Je(s, e) {
  (e = '' + e), s.wholeText !== e && (s.data = e);
}
function Ke(s, e) {
  s.value = e == null ? '' : e;
}
function Ye(s, e, t, n) {
  t === null
    ? s.style.removeProperty(e)
    : s.style.setProperty(e, t, n ? 'important' : '');
}
let Z;
function q(s) {
  Z = s;
}
function xe() {
  if (!Z) throw new Error('Function called outside component initialization');
  return Z;
}
function et(s) {
  xe().$$.on_mount.push(s);
}
const v = [],
  K = [],
  O = [],
  Y = [],
  we = Promise.resolve();
let Q = !1;
function be() {
  Q || ((Q = !0), we.then(ee));
}
function F(s) {
  O.push(s);
}
const W = new Set();
let j = 0;
function ee() {
  const s = Z;
  do {
    for (; j < v.length; ) {
      const e = v[j];
      j++, q(e), _e(e.$$);
    }
    for (q(null), v.length = 0, j = 0; K.length; ) K.pop()();
    for (let e = 0; e < O.length; e += 1) {
      const t = O[e];
      W.has(t) || (W.add(t), t());
    }
    O.length = 0;
  } while (v.length);
  for (; Y.length; ) Y.pop()();
  (Q = !1), W.clear(), q(s);
}
function _e(s) {
  if (s.fragment !== null) {
    s.update(), D(s.before_update);
    const e = s.dirty;
    (s.dirty = [-1]),
      s.fragment && s.fragment.p(s.ctx, e),
      s.after_update.forEach(F);
  }
}
const U = new Set();
let ye;
function $e(s, e) {
  s && s.i && (U.delete(s), s.i(e));
}
function tt(s, e, t, n) {
  if (s && s.o) {
    if (U.has(s)) return;
    U.add(s),
      ye.c.push(() => {
        U.delete(s), n && (t && s.d(1), n());
      }),
      s.o(e);
  }
}
function nt(s) {
  s && s.c();
}
function ze(s, e, t, n) {
  const { fragment: i, on_mount: r, on_destroy: l, after_update: a } = s.$$;
  i && i.m(e, t),
    n ||
      F(() => {
        const o = r.map(H).filter(fe);
        l ? l.push(...o) : D(o), (s.$$.on_mount = []);
      }),
    a.forEach(F);
}
function Se(s, e) {
  const t = s.$$;
  t.fragment !== null &&
    (D(t.on_destroy),
    t.fragment && t.fragment.d(e),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function Te(s, e) {
  s.$$.dirty[0] === -1 && (v.push(s), be(), s.$$.dirty.fill(0)),
    (s.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function it(s, e, t, n, i, r, l, a = [-1]) {
  const o = Z;
  q(s);
  const u = (s.$$ = {
    fragment: null,
    ctx: null,
    props: r,
    update: V,
    not_equal: i,
    bound: J(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    callbacks: J(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root,
  });
  l && l(u.root);
  let f = !1;
  if (
    ((u.ctx = t
      ? t(s, e.props || {}, (x, d, ...h) => {
          const $ = h.length ? h[0] : d;
          return (
            u.ctx &&
              i(u.ctx[x], (u.ctx[x] = $)) &&
              (!u.skip_bound && u.bound[x] && u.bound[x]($), f && Te(s, x)),
            d
          );
        })
      : []),
    u.update(),
    (f = !0),
    D(u.before_update),
    (u.fragment = n ? n(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const x = me(e.target);
      u.fragment && u.fragment.l(x), x.forEach(de);
    } else u.fragment && u.fragment.c();
    e.intro && $e(s.$$.fragment),
      ze(s, e.target, e.anchor, e.customElement),
      ee();
  }
  q(o);
}
class st {
  $destroy() {
    Se(this, 1), (this.$destroy = V);
  }
  $on(e, t) {
    const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      n.push(t),
      () => {
        const i = n.indexOf(t);
        i !== -1 && n.splice(i, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !ge(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
function te() {
  return {
    baseUrl: null,
    breaks: !1,
    extensions: null,
    gfm: !0,
    headerIds: !0,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: !0,
    pedantic: !1,
    renderer: null,
    sanitize: !1,
    sanitizer: null,
    silent: !1,
    smartLists: !1,
    smartypants: !1,
    tokenizer: null,
    walkTokens: null,
    xhtml: !1,
  };
}
let E = te();
function Re(s) {
  E = s;
}
const Ae = /[&<>"']/,
  Ie = /[&<>"']/g,
  Ee = /[<>"']|&(?!#?\w+;)/,
  Ce = /[<>"']|&(?!#?\w+;)/g,
  Le = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
  ne = (s) => Le[s];
function w(s, e) {
  if (e) {
    if (Ae.test(s)) return s.replace(Ie, ne);
  } else if (Ee.test(s)) return s.replace(Ce, ne);
  return s;
}
const Ze = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
function ie(s) {
  return s.replace(
    Ze,
    (e, t) => (
      (t = t.toLowerCase()),
      t === 'colon'
        ? ':'
        : t.charAt(0) === '#'
        ? t.charAt(1) === 'x'
          ? String.fromCharCode(parseInt(t.substring(2), 16))
          : String.fromCharCode(+t.substring(1))
        : ''
    )
  );
}
const qe = /(^|[^\[])\^/g;
function k(s, e) {
  (s = s.source || s), (e = e || '');
  const t = {
    replace: (n, i) => (
      (i = i.source || i), (i = i.replace(qe, '$1')), (s = s.replace(n, i)), t
    ),
    getRegex: () => new RegExp(s, e),
  };
  return t;
}
const ve = /[^\w:]/g,
  Be = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function se(s, e, t) {
  if (s) {
    let n;
    try {
      n = decodeURIComponent(ie(t)).replace(ve, '').toLowerCase();
    } catch {
      return null;
    }
    if (
      n.indexOf('javascript:') === 0 ||
      n.indexOf('vbscript:') === 0 ||
      n.indexOf('data:') === 0
    )
      return null;
  }
  e && !Be.test(t) && (t = Ue(e, t));
  try {
    t = encodeURI(t).replace(/%25/g, '%');
  } catch {
    return null;
  }
  return t;
}
const P = {},
  De = /^[^:]+:\/*[^/]*$/,
  Oe = /^([^:]+:)[\s\S]*$/,
  je = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function Ue(s, e) {
  P[' ' + s] ||
    (De.test(s) ? (P[' ' + s] = s + '/') : (P[' ' + s] = N(s, '/', !0))),
    (s = P[' ' + s]);
  const t = s.indexOf(':') === -1;
  return e.substring(0, 2) === '//'
    ? t
      ? e
      : s.replace(Oe, '$1') + e
    : e.charAt(0) === '/'
    ? t
      ? e
      : s.replace(je, '$1') + e
    : s + e;
}
const M = { exec: function () {} };
function y(s) {
  let e = 1,
    t,
    n;
  for (; e < arguments.length; e++) {
    t = arguments[e];
    for (n in t) Object.prototype.hasOwnProperty.call(t, n) && (s[n] = t[n]);
  }
  return s;
}
function re(s, e) {
  const t = s.replace(/\|/g, (r, l, a) => {
      let o = !1,
        u = l;
      for (; --u >= 0 && a[u] === '\\'; ) o = !o;
      return o ? '|' : ' |';
    }),
    n = t.split(/ \|/);
  let i = 0;
  if (
    (n[0].trim() || n.shift(),
    n.length > 0 && !n[n.length - 1].trim() && n.pop(),
    n.length > e)
  )
    n.splice(e);
  else for (; n.length < e; ) n.push('');
  for (; i < n.length; i++) n[i] = n[i].trim().replace(/\\\|/g, '|');
  return n;
}
function N(s, e, t) {
  const n = s.length;
  if (n === 0) return '';
  let i = 0;
  for (; i < n; ) {
    const r = s.charAt(n - i - 1);
    if (r === e && !t) i++;
    else if (r !== e && t) i++;
    else break;
  }
  return s.substr(0, n - i);
}
function Pe(s, e) {
  if (s.indexOf(e[1]) === -1) return -1;
  const t = s.length;
  let n = 0,
    i = 0;
  for (; i < t; i++)
    if (s[i] === '\\') i++;
    else if (s[i] === e[0]) n++;
    else if (s[i] === e[1] && (n--, n < 0)) return i;
  return -1;
}
function le(s) {
  s &&
    s.sanitize &&
    !s.silent &&
    console.warn(
      'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
    );
}
function ae(s, e) {
  if (e < 1) return '';
  let t = '';
  for (; e > 1; ) e & 1 && (t += s), (e >>= 1), (s += s);
  return t + s;
}
function oe(s, e, t, n) {
  const i = e.href,
    r = e.title ? w(e.title) : null,
    l = s[1].replace(/\\([\[\]])/g, '$1');
  if (s[0].charAt(0) !== '!') {
    n.state.inLink = !0;
    const a = {
      type: 'link',
      raw: t,
      href: i,
      title: r,
      text: l,
      tokens: n.inlineTokens(l, []),
    };
    return (n.state.inLink = !1), a;
  } else return { type: 'image', raw: t, href: i, title: r, text: w(l) };
}
function Me(s, e) {
  const t = s.match(/^(\s+)(?:```)/);
  if (t === null) return e;
  const n = t[1];
  return e
    .split(
      `
`
    )
    .map((i) => {
      const r = i.match(/^\s+/);
      if (r === null) return i;
      const [l] = r;
      return l.length >= n.length ? i.slice(n.length) : i;
    }).join(`
`);
}
class X {
  constructor(e) {
    this.options = e || E;
  }
  space(e) {
    const t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0) return { type: 'space', raw: t[0] };
  }
  code(e) {
    const t = this.rules.block.code.exec(e);
    if (t) {
      const n = t[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: t[0],
        codeBlockStyle: 'indented',
        text: this.options.pedantic
          ? n
          : N(
              n,
              `
`
            ),
      };
    }
  }
  fences(e) {
    const t = this.rules.block.fences.exec(e);
    if (t) {
      const n = t[0],
        i = Me(n, t[3] || '');
      return { type: 'code', raw: n, lang: t[2] ? t[2].trim() : t[2], text: i };
    }
  }
  heading(e) {
    const t = this.rules.block.heading.exec(e);
    if (t) {
      let n = t[2].trim();
      if (/#$/.test(n)) {
        const r = N(n, '#');
        (this.options.pedantic || !r || / $/.test(r)) && (n = r.trim());
      }
      const i = {
        type: 'heading',
        raw: t[0],
        depth: t[1].length,
        text: n,
        tokens: [],
      };
      return this.lexer.inline(i.text, i.tokens), i;
    }
  }
  hr(e) {
    const t = this.rules.block.hr.exec(e);
    if (t) return { type: 'hr', raw: t[0] };
  }
  blockquote(e) {
    const t = this.rules.block.blockquote.exec(e);
    if (t) {
      const n = t[0].replace(/^ *> ?/gm, '');
      return {
        type: 'blockquote',
        raw: t[0],
        tokens: this.lexer.blockTokens(n, []),
        text: n,
      };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let n,
        i,
        r,
        l,
        a,
        o,
        u,
        f,
        x,
        d,
        h,
        $,
        _ = t[1].trim();
      const T = _.length > 1,
        m = {
          type: 'list',
          raw: '',
          ordered: T,
          start: T ? +_.slice(0, -1) : '',
          loose: !1,
          items: [],
        };
      (_ = T ? `\\d{1,9}\\${_.slice(-1)}` : `\\${_}`),
        this.options.pedantic && (_ = T ? _ : '[*+-]');
      const b = new RegExp(`^( {0,3}${_})((?: [^\\n]*)?(?:\\n|$))`);
      for (
        ;
        e && (($ = !1), !(!(t = b.exec(e)) || this.rules.block.hr.test(e)));

      ) {
        if (
          ((n = t[0]),
          (e = e.substring(n.length)),
          (f = t[2].split(
            `
`,
            1
          )[0]),
          (x = e.split(
            `
`,
            1
          )[0]),
          this.options.pedantic
            ? ((l = 2), (h = f.trimLeft()))
            : ((l = t[2].search(/[^ ]/)),
              (l = l > 4 ? 1 : l),
              (h = f.slice(l)),
              (l += t[1].length)),
          (o = !1),
          !f &&
            /^ *$/.test(x) &&
            ((n +=
              x +
              `
`),
            (e = e.substring(x.length + 1)),
            ($ = !0)),
          !$)
        ) {
          const R = new RegExp(
            `^ {0,${Math.min(3, l - 1)}}(?:[*+-]|\\d{1,9}[.)])`
          );
          for (
            ;
            e &&
            ((d = e.split(
              `
`,
              1
            )[0]),
            (f = d),
            this.options.pedantic &&
              (f = f.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ')),
            !R.test(f));

          ) {
            if (f.search(/[^ ]/) >= l || !f.trim())
              h +=
                `
` + f.slice(l);
            else if (!o)
              h +=
                `
` + f;
            else break;
            !o && !f.trim() && (o = !0),
              (n +=
                d +
                `
`),
              (e = e.substring(d.length + 1));
          }
        }
        m.loose || (u ? (m.loose = !0) : /\n *\n *$/.test(n) && (u = !0)),
          this.options.gfm &&
            ((i = /^\[[ xX]\] /.exec(h)),
            i && ((r = i[0] !== '[ ] '), (h = h.replace(/^\[[ xX]\] +/, '')))),
          m.items.push({
            type: 'list_item',
            raw: n,
            task: !!i,
            checked: r,
            loose: !1,
            text: h,
          }),
          (m.raw += n);
      }
      (m.items[m.items.length - 1].raw = n.trimRight()),
        (m.items[m.items.length - 1].text = h.trimRight()),
        (m.raw = m.raw.trimRight());
      const C = m.items.length;
      for (a = 0; a < C; a++) {
        (this.lexer.state.top = !1),
          (m.items[a].tokens = this.lexer.blockTokens(m.items[a].text, []));
        const R = m.items[a].tokens.filter((I) => I.type === 'space'),
          A = R.every((I) => {
            const B = I.raw.split('');
            let L = 0;
            for (const pe of B)
              if (
                (pe ===
                  `
` && (L += 1),
                L > 1)
              )
                return !0;
            return !1;
          });
        !m.loose && R.length && A && ((m.loose = !0), (m.items[a].loose = !0));
      }
      return m;
    }
  }
  html(e) {
    const t = this.rules.block.html.exec(e);
    if (t) {
      const n = {
        type: 'html',
        raw: t[0],
        pre:
          !this.options.sanitizer &&
          (t[1] === 'pre' || t[1] === 'script' || t[1] === 'style'),
        text: t[0],
      };
      return (
        this.options.sanitize &&
          ((n.type = 'paragraph'),
          (n.text = this.options.sanitizer
            ? this.options.sanitizer(t[0])
            : w(t[0])),
          (n.tokens = []),
          this.lexer.inline(n.text, n.tokens)),
        n
      );
    }
  }
  def(e) {
    const t = this.rules.block.def.exec(e);
    if (t) {
      t[3] && (t[3] = t[3].substring(1, t[3].length - 1));
      const n = t[1].toLowerCase().replace(/\s+/g, ' ');
      return { type: 'def', tag: n, raw: t[0], href: t[2], title: t[3] };
    }
  }
  table(e) {
    const t = this.rules.block.table.exec(e);
    if (t) {
      const n = {
        type: 'table',
        header: re(t[1]).map((i) => ({ text: i })),
        align: t[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows:
          t[3] && t[3].trim()
            ? t[3].replace(/\n[ \t]*$/, '').split(`
`)
            : [],
      };
      if (n.header.length === n.align.length) {
        n.raw = t[0];
        let i = n.align.length,
          r,
          l,
          a,
          o;
        for (r = 0; r < i; r++)
          /^ *-+: *$/.test(n.align[r])
            ? (n.align[r] = 'right')
            : /^ *:-+: *$/.test(n.align[r])
            ? (n.align[r] = 'center')
            : /^ *:-+ *$/.test(n.align[r])
            ? (n.align[r] = 'left')
            : (n.align[r] = null);
        for (i = n.rows.length, r = 0; r < i; r++)
          n.rows[r] = re(n.rows[r], n.header.length).map((u) => ({ text: u }));
        for (i = n.header.length, l = 0; l < i; l++)
          (n.header[l].tokens = []),
            this.lexer.inlineTokens(n.header[l].text, n.header[l].tokens);
        for (i = n.rows.length, l = 0; l < i; l++)
          for (o = n.rows[l], a = 0; a < o.length; a++)
            (o[a].tokens = []), this.lexer.inlineTokens(o[a].text, o[a].tokens);
        return n;
      }
    }
  }
  lheading(e) {
    const t = this.rules.block.lheading.exec(e);
    if (t) {
      const n = {
        type: 'heading',
        raw: t[0],
        depth: t[2].charAt(0) === '=' ? 1 : 2,
        text: t[1],
        tokens: [],
      };
      return this.lexer.inline(n.text, n.tokens), n;
    }
  }
  paragraph(e) {
    const t = this.rules.block.paragraph.exec(e);
    if (t) {
      const n = {
        type: 'paragraph',
        raw: t[0],
        text:
          t[1].charAt(t[1].length - 1) ===
          `
`
            ? t[1].slice(0, -1)
            : t[1],
        tokens: [],
      };
      return this.lexer.inline(n.text, n.tokens), n;
    }
  }
  text(e) {
    const t = this.rules.block.text.exec(e);
    if (t) {
      const n = { type: 'text', raw: t[0], text: t[0], tokens: [] };
      return this.lexer.inline(n.text, n.tokens), n;
    }
  }
  escape(e) {
    const t = this.rules.inline.escape.exec(e);
    if (t) return { type: 'escape', raw: t[0], text: w(t[1]) };
  }
  tag(e) {
    const t = this.rules.inline.tag.exec(e);
    if (t)
      return (
        !this.lexer.state.inLink && /^<a /i.test(t[0])
          ? (this.lexer.state.inLink = !0)
          : this.lexer.state.inLink &&
            /^<\/a>/i.test(t[0]) &&
            (this.lexer.state.inLink = !1),
        !this.lexer.state.inRawBlock &&
        /^<(pre|code|kbd|script)(\s|>)/i.test(t[0])
          ? (this.lexer.state.inRawBlock = !0)
          : this.lexer.state.inRawBlock &&
            /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) &&
            (this.lexer.state.inRawBlock = !1),
        {
          type: this.options.sanitize ? 'text' : 'html',
          raw: t[0],
          inLink: this.lexer.state.inLink,
          inRawBlock: this.lexer.state.inRawBlock,
          text: this.options.sanitize
            ? this.options.sanitizer
              ? this.options.sanitizer(t[0])
              : w(t[0])
            : t[0],
        }
      );
  }
  link(e) {
    const t = this.rules.inline.link.exec(e);
    if (t) {
      const n = t[2].trim();
      if (!this.options.pedantic && /^</.test(n)) {
        if (!/>$/.test(n)) return;
        const l = N(n.slice(0, -1), '\\');
        if ((n.length - l.length) % 2 === 0) return;
      } else {
        const l = Pe(t[2], '()');
        if (l > -1) {
          const o = (t[0].indexOf('!') === 0 ? 5 : 4) + t[1].length + l;
          (t[2] = t[2].substring(0, l)),
            (t[0] = t[0].substring(0, o).trim()),
            (t[3] = '');
        }
      }
      let i = t[2],
        r = '';
      if (this.options.pedantic) {
        const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        l && ((i = l[1]), (r = l[3]));
      } else r = t[3] ? t[3].slice(1, -1) : '';
      return (
        (i = i.trim()),
        /^</.test(i) &&
          (this.options.pedantic && !/>$/.test(n)
            ? (i = i.slice(1))
            : (i = i.slice(1, -1))),
        oe(
          t,
          {
            href: i && i.replace(this.rules.inline._escapes, '$1'),
            title: r && r.replace(this.rules.inline._escapes, '$1'),
          },
          t[0],
          this.lexer
        )
      );
    }
  }
  reflink(e, t) {
    let n;
    if (
      (n = this.rules.inline.reflink.exec(e)) ||
      (n = this.rules.inline.nolink.exec(e))
    ) {
      let i = (n[2] || n[1]).replace(/\s+/g, ' ');
      if (((i = t[i.toLowerCase()]), !i || !i.href)) {
        const r = n[0].charAt(0);
        return { type: 'text', raw: r, text: r };
      }
      return oe(n, i, n[0], this.lexer);
    }
  }
  emStrong(e, t, n = '') {
    let i = this.rules.inline.emStrong.lDelim.exec(e);
    if (!i || (i[3] && n.match(/[\p{L}\p{N}]/u))) return;
    const r = i[1] || i[2] || '';
    if (!r || (r && (n === '' || this.rules.inline.punctuation.exec(n)))) {
      const l = i[0].length - 1;
      let a,
        o,
        u = l,
        f = 0;
      const x =
        i[0][0] === '*'
          ? this.rules.inline.emStrong.rDelimAst
          : this.rules.inline.emStrong.rDelimUnd;
      for (
        x.lastIndex = 0, t = t.slice(-1 * e.length + l);
        (i = x.exec(t)) != null;

      ) {
        if (((a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6]), !a)) continue;
        if (((o = a.length), i[3] || i[4])) {
          u += o;
          continue;
        } else if ((i[5] || i[6]) && l % 3 && !((l + o) % 3)) {
          f += o;
          continue;
        }
        if (((u -= o), u > 0)) continue;
        if (((o = Math.min(o, o + u + f)), Math.min(l, o) % 2)) {
          const h = e.slice(1, l + i.index + o);
          return {
            type: 'em',
            raw: e.slice(0, l + i.index + o + 1),
            text: h,
            tokens: this.lexer.inlineTokens(h, []),
          };
        }
        const d = e.slice(2, l + i.index + o - 1);
        return {
          type: 'strong',
          raw: e.slice(0, l + i.index + o + 1),
          text: d,
          tokens: this.lexer.inlineTokens(d, []),
        };
      }
    }
  }
  codespan(e) {
    const t = this.rules.inline.code.exec(e);
    if (t) {
      let n = t[2].replace(/\n/g, ' ');
      const i = /[^ ]/.test(n),
        r = /^ /.test(n) && / $/.test(n);
      return (
        i && r && (n = n.substring(1, n.length - 1)),
        (n = w(n, !0)),
        { type: 'codespan', raw: t[0], text: n }
      );
    }
  }
  br(e) {
    const t = this.rules.inline.br.exec(e);
    if (t) return { type: 'br', raw: t[0] };
  }
  del(e) {
    const t = this.rules.inline.del.exec(e);
    if (t)
      return {
        type: 'del',
        raw: t[0],
        text: t[2],
        tokens: this.lexer.inlineTokens(t[2], []),
      };
  }
  autolink(e, t) {
    const n = this.rules.inline.autolink.exec(e);
    if (n) {
      let i, r;
      return (
        n[2] === '@'
          ? ((i = w(this.options.mangle ? t(n[1]) : n[1])), (r = 'mailto:' + i))
          : ((i = w(n[1])), (r = i)),
        {
          type: 'link',
          raw: n[0],
          text: i,
          href: r,
          tokens: [{ type: 'text', raw: i, text: i }],
        }
      );
    }
  }
  url(e, t) {
    let n;
    if ((n = this.rules.inline.url.exec(e))) {
      let i, r;
      if (n[2] === '@')
        (i = w(this.options.mangle ? t(n[0]) : n[0])), (r = 'mailto:' + i);
      else {
        let l;
        do (l = n[0]), (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
        while (l !== n[0]);
        (i = w(n[0])), n[1] === 'www.' ? (r = 'http://' + i) : (r = i);
      }
      return {
        type: 'link',
        raw: n[0],
        text: i,
        href: r,
        tokens: [{ type: 'text', raw: i, text: i }],
      };
    }
  }
  inlineText(e, t) {
    const n = this.rules.inline.text.exec(e);
    if (n) {
      let i;
      return (
        this.lexer.state.inRawBlock
          ? (i = this.options.sanitize
              ? this.options.sanitizer
                ? this.options.sanitizer(n[0])
                : w(n[0])
              : n[0])
          : (i = w(this.options.smartypants ? t(n[0]) : n[0])),
        { type: 'text', raw: n[0], text: i }
      );
    }
  }
}
const p = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences:
    /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)( [^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: M,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph:
    /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/,
};
p._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
p._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
p.def = k(p.def)
  .replace('label', p._label)
  .replace('title', p._title)
  .getRegex();
p.bullet = /(?:[*+-]|\d{1,9}[.)])/;
p.listItemStart = k(/^( *)(bull) */)
  .replace('bull', p.bullet)
  .getRegex();
p.list = k(p.list)
  .replace(/bull/g, p.bullet)
  .replace(
    'hr',
    '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
  )
  .replace('def', '\\n+(?=' + p.def.source + ')')
  .getRegex();
p._tag =
  'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul';
p._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
p.html = k(p.html, 'i')
  .replace('comment', p._comment)
  .replace('tag', p._tag)
  .replace(
    'attribute',
    / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
  )
  .getRegex();
p.paragraph = k(p._paragraph)
  .replace('hr', p.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace(
    'html',
    '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
  )
  .replace('tag', p._tag)
  .getRegex();
p.blockquote = k(p.blockquote).replace('paragraph', p.paragraph).getRegex();
p.normal = y({}, p);
p.gfm = y({}, p.normal, {
  table:
    '^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
});
p.gfm.table = k(p.gfm.table)
  .replace('hr', p.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace(
    'html',
    '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
  )
  .replace('tag', p._tag)
  .getRegex();
p.gfm.paragraph = k(p._paragraph)
  .replace('hr', p.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '')
  .replace('table', p.gfm.table)
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
  .replace(
    'html',
    '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)'
  )
  .replace('tag', p._tag)
  .getRegex();
p.pedantic = y({}, p.normal, {
  html: k(
    `^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`
  )
    .replace('comment', p._comment)
    .replace(
      /tag/g,
      '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
    )
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: M,
  paragraph: k(p.normal._paragraph)
    .replace('hr', p.hr)
    .replace(
      'heading',
      ` *#{1,6} *[^
]`
    )
    .replace('lheading', p.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex(),
});
const c = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: M,
  tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst:
      /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd:
      /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: M,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/,
};
c._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
c.punctuation = k(c.punctuation)
  .replace(/punctuation/g, c._punctuation)
  .getRegex();
c.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
c.escapedEmSt = /\\\*|\\_/g;
c._comment = k(p._comment).replace('(?:-->|$)', '-->').getRegex();
c.emStrong.lDelim = k(c.emStrong.lDelim)
  .replace(/punct/g, c._punctuation)
  .getRegex();
c.emStrong.rDelimAst = k(c.emStrong.rDelimAst, 'g')
  .replace(/punct/g, c._punctuation)
  .getRegex();
c.emStrong.rDelimUnd = k(c.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, c._punctuation)
  .getRegex();
c._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
c._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
c._email =
  /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
c.autolink = k(c.autolink)
  .replace('scheme', c._scheme)
  .replace('email', c._email)
  .getRegex();
c._attribute =
  /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
c.tag = k(c.tag)
  .replace('comment', c._comment)
  .replace('attribute', c._attribute)
  .getRegex();
c._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
c._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
c._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
c.link = k(c.link)
  .replace('label', c._label)
  .replace('href', c._href)
  .replace('title', c._title)
  .getRegex();
c.reflink = k(c.reflink)
  .replace('label', c._label)
  .replace('ref', p._label)
  .getRegex();
c.nolink = k(c.nolink).replace('ref', p._label).getRegex();
c.reflinkSearch = k(c.reflinkSearch, 'g')
  .replace('reflink', c.reflink)
  .replace('nolink', c.nolink)
  .getRegex();
c.normal = y({}, c);
c.pedantic = y({}, c.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g,
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g,
  },
  link: k(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', c._label)
    .getRegex(),
  reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', c._label)
    .getRegex(),
});
c.gfm = y({}, c.normal, {
  escape: k(c.escape).replace('])', '~|])').getRegex(),
  _extended_email:
    /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal:
    /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/,
});
c.gfm.url = k(c.gfm.url, 'i')
  .replace('email', c.gfm._extended_email)
  .getRegex();
c.breaks = y({}, c.gfm, {
  br: k(c.br).replace('{2,}', '*').getRegex(),
  text: k(c.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex(),
});
function Ne(s) {
  return s
    .replace(/---/g, '\u2014')
    .replace(/--/g, '\u2013')
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    .replace(/'/g, '\u2019')
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201C')
    .replace(/"/g, '\u201D')
    .replace(/\.{3}/g, '\u2026');
}
function ce(s) {
  let e = '',
    t,
    n;
  const i = s.length;
  for (t = 0; t < i; t++)
    (n = s.charCodeAt(t)),
      Math.random() > 0.5 && (n = 'x' + n.toString(16)),
      (e += '&#' + n + ';');
  return e;
}
class z {
  constructor(e) {
    (this.tokens = []),
      (this.tokens.links = Object.create(null)),
      (this.options = e || E),
      (this.options.tokenizer = this.options.tokenizer || new X()),
      (this.tokenizer = this.options.tokenizer),
      (this.tokenizer.options = this.options),
      (this.tokenizer.lexer = this),
      (this.inlineQueue = []),
      (this.state = { inLink: !1, inRawBlock: !1, top: !0 });
    const t = { block: p.normal, inline: c.normal };
    this.options.pedantic
      ? ((t.block = p.pedantic), (t.inline = c.pedantic))
      : this.options.gfm &&
        ((t.block = p.gfm),
        this.options.breaks ? (t.inline = c.breaks) : (t.inline = c.gfm)),
      (this.tokenizer.rules = t);
  }
  static get rules() {
    return { block: p, inline: c };
  }
  static lex(e, t) {
    return new z(t).lex(e);
  }
  static lexInline(e, t) {
    return new z(t).inlineTokens(e);
  }
  lex(e) {
    (e = e
      .replace(
        /\r\n|\r/g,
        `
`
      )
      .replace(/\t/g, '    ')),
      this.blockTokens(e, this.tokens);
    let t;
    for (; (t = this.inlineQueue.shift()); ) this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic && (e = e.replace(/^ +$/gm, ''));
    let n, i, r, l;
    for (; e; )
      if (
        !(
          this.options.extensions &&
          this.options.extensions.block &&
          this.options.extensions.block.some((a) =>
            (n = a.call({ lexer: this }, e, t))
              ? ((e = e.substring(n.raw.length)), t.push(n), !0)
              : !1
          )
        )
      ) {
        if ((n = this.tokenizer.space(e))) {
          (e = e.substring(n.raw.length)),
            n.raw.length === 1 && t.length > 0
              ? (t[t.length - 1].raw += `
`)
              : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.code(e))) {
          (e = e.substring(n.raw.length)),
            (i = t[t.length - 1]),
            i && (i.type === 'paragraph' || i.type === 'text')
              ? ((i.raw +=
                  `
` + n.raw),
                (i.text +=
                  `
` + n.text),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.fences(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.heading(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.hr(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.blockquote(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.list(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.html(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.def(e))) {
          (e = e.substring(n.raw.length)),
            (i = t[t.length - 1]),
            i && (i.type === 'paragraph' || i.type === 'text')
              ? ((i.raw +=
                  `
` + n.raw),
                (i.text +=
                  `
` + n.raw),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : this.tokens.links[n.tag] ||
                (this.tokens.links[n.tag] = { href: n.href, title: n.title });
          continue;
        }
        if ((n = this.tokenizer.table(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.lheading(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (
          ((r = e),
          this.options.extensions && this.options.extensions.startBlock)
        ) {
          let a = 1 / 0;
          const o = e.slice(1);
          let u;
          this.options.extensions.startBlock.forEach(function (f) {
            (u = f.call({ lexer: this }, o)),
              typeof u == 'number' && u >= 0 && (a = Math.min(a, u));
          }),
            a < 1 / 0 && a >= 0 && (r = e.substring(0, a + 1));
        }
        if (this.state.top && (n = this.tokenizer.paragraph(r))) {
          (i = t[t.length - 1]),
            l && i.type === 'paragraph'
              ? ((i.raw +=
                  `
` + n.raw),
                (i.text +=
                  `
` + n.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : t.push(n),
            (l = r.length !== e.length),
            (e = e.substring(n.raw.length));
          continue;
        }
        if ((n = this.tokenizer.text(e))) {
          (e = e.substring(n.raw.length)),
            (i = t[t.length - 1]),
            i && i.type === 'text'
              ? ((i.raw +=
                  `
` + n.raw),
                (i.text +=
                  `
` + n.text),
                this.inlineQueue.pop(),
                (this.inlineQueue[this.inlineQueue.length - 1].src = i.text))
              : t.push(n);
          continue;
        }
        if (e) {
          const a = 'Infinite loop on byte: ' + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else throw new Error(a);
        }
      }
    return (this.state.top = !0), t;
  }
  inline(e, t) {
    this.inlineQueue.push({ src: e, tokens: t });
  }
  inlineTokens(e, t = []) {
    let n,
      i,
      r,
      l = e,
      a,
      o,
      u;
    if (this.tokens.links) {
      const f = Object.keys(this.tokens.links);
      if (f.length > 0)
        for (
          ;
          (a = this.tokenizer.rules.inline.reflinkSearch.exec(l)) != null;

        )
          f.includes(a[0].slice(a[0].lastIndexOf('[') + 1, -1)) &&
            (l =
              l.slice(0, a.index) +
              '[' +
              ae('a', a[0].length - 2) +
              ']' +
              l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(l)) != null; )
      l =
        l.slice(0, a.index) +
        '[' +
        ae('a', a[0].length - 2) +
        ']' +
        l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.escapedEmSt.exec(l)) != null; )
      l =
        l.slice(0, a.index) +
        '++' +
        l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    for (; e; )
      if (
        (o || (u = ''),
        (o = !1),
        !(
          this.options.extensions &&
          this.options.extensions.inline &&
          this.options.extensions.inline.some((f) =>
            (n = f.call({ lexer: this }, e, t))
              ? ((e = e.substring(n.raw.length)), t.push(n), !0)
              : !1
          )
        ))
      ) {
        if ((n = this.tokenizer.escape(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.tag(e))) {
          (e = e.substring(n.raw.length)),
            (i = t[t.length - 1]),
            i && n.type === 'text' && i.type === 'text'
              ? ((i.raw += n.raw), (i.text += n.text))
              : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.link(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.reflink(e, this.tokens.links))) {
          (e = e.substring(n.raw.length)),
            (i = t[t.length - 1]),
            i && n.type === 'text' && i.type === 'text'
              ? ((i.raw += n.raw), (i.text += n.text))
              : t.push(n);
          continue;
        }
        if ((n = this.tokenizer.emStrong(e, l, u))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.codespan(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.br(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.del(e))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if ((n = this.tokenizer.autolink(e, ce))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (!this.state.inLink && (n = this.tokenizer.url(e, ce))) {
          (e = e.substring(n.raw.length)), t.push(n);
          continue;
        }
        if (
          ((r = e),
          this.options.extensions && this.options.extensions.startInline)
        ) {
          let f = 1 / 0;
          const x = e.slice(1);
          let d;
          this.options.extensions.startInline.forEach(function (h) {
            (d = h.call({ lexer: this }, x)),
              typeof d == 'number' && d >= 0 && (f = Math.min(f, d));
          }),
            f < 1 / 0 && f >= 0 && (r = e.substring(0, f + 1));
        }
        if ((n = this.tokenizer.inlineText(r, Ne))) {
          (e = e.substring(n.raw.length)),
            n.raw.slice(-1) !== '_' && (u = n.raw.slice(-1)),
            (o = !0),
            (i = t[t.length - 1]),
            i && i.type === 'text'
              ? ((i.raw += n.raw), (i.text += n.text))
              : t.push(n);
          continue;
        }
        if (e) {
          const f = 'Infinite loop on byte: ' + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(f);
            break;
          } else throw new Error(f);
        }
      }
    return t;
  }
}
class G {
  constructor(e) {
    this.options = e || E;
  }
  code(e, t, n) {
    const i = (t || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const r = this.options.highlight(e, i);
      r != null && r !== e && ((n = !0), (e = r));
    }
    return (
      (e =
        e.replace(/\n$/, '') +
        `
`),
      i
        ? '<pre><code class="' +
          this.options.langPrefix +
          w(i, !0) +
          '">' +
          (n ? e : w(e, !0)) +
          `</code></pre>
`
        : '<pre><code>' +
          (n ? e : w(e, !0)) +
          `</code></pre>
`
    );
  }
  blockquote(e) {
    return (
      `<blockquote>
` +
      e +
      `</blockquote>
`
    );
  }
  html(e) {
    return e;
  }
  heading(e, t, n, i) {
    return this.options.headerIds
      ? '<h' +
          t +
          ' id="' +
          this.options.headerPrefix +
          i.slug(n) +
          '">' +
          e +
          '</h' +
          t +
          `>
`
      : '<h' +
          t +
          '>' +
          e +
          '</h' +
          t +
          `>
`;
  }
  hr() {
    return this.options.xhtml
      ? `<hr/>
`
      : `<hr>
`;
  }
  list(e, t, n) {
    const i = t ? 'ol' : 'ul',
      r = t && n !== 1 ? ' start="' + n + '"' : '';
    return (
      '<' +
      i +
      r +
      `>
` +
      e +
      '</' +
      i +
      `>
`
    );
  }
  listitem(e) {
    return (
      '<li>' +
      e +
      `</li>
`
    );
  }
  checkbox(e) {
    return (
      '<input ' +
      (e ? 'checked="" ' : '') +
      'disabled="" type="checkbox"' +
      (this.options.xhtml ? ' /' : '') +
      '> '
    );
  }
  paragraph(e) {
    return (
      '<p>' +
      e +
      `</p>
`
    );
  }
  table(e, t) {
    return (
      t && (t = '<tbody>' + t + '</tbody>'),
      `<table>
<thead>
` +
        e +
        `</thead>
` +
        t +
        `</table>
`
    );
  }
  tablerow(e) {
    return (
      `<tr>
` +
      e +
      `</tr>
`
    );
  }
  tablecell(e, t) {
    const n = t.header ? 'th' : 'td';
    return (
      (t.align ? '<' + n + ' align="' + t.align + '">' : '<' + n + '>') +
      e +
      '</' +
      n +
      `>
`
    );
  }
  strong(e) {
    return '<strong>' + e + '</strong>';
  }
  em(e) {
    return '<em>' + e + '</em>';
  }
  codespan(e) {
    return '<code>' + e + '</code>';
  }
  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }
  del(e) {
    return '<del>' + e + '</del>';
  }
  link(e, t, n) {
    if (((e = se(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return n;
    let i = '<a href="' + w(e) + '"';
    return t && (i += ' title="' + t + '"'), (i += '>' + n + '</a>'), i;
  }
  image(e, t, n) {
    if (((e = se(this.options.sanitize, this.options.baseUrl, e)), e === null))
      return n;
    let i = '<img src="' + e + '" alt="' + n + '"';
    return (
      t && (i += ' title="' + t + '"'),
      (i += this.options.xhtml ? '/>' : '>'),
      i
    );
  }
  text(e) {
    return e;
  }
}
class ue {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, n) {
    return '' + n;
  }
  image(e, t, n) {
    return '' + n;
  }
  br() {
    return '';
  }
}
class he {
  constructor() {
    this.seen = {};
  }
  serialize(e) {
    return e
      .toLowerCase()
      .trim()
      .replace(/<[!\/a-z].*?>/gi, '')
      .replace(
        /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
        ''
      )
      .replace(/\s/g, '-');
  }
  getNextSafeSlug(e, t) {
    let n = e,
      i = 0;
    if (this.seen.hasOwnProperty(n)) {
      i = this.seen[e];
      do i++, (n = e + '-' + i);
      while (this.seen.hasOwnProperty(n));
    }
    return t || ((this.seen[e] = i), (this.seen[n] = 0)), n;
  }
  slug(e, t = {}) {
    const n = this.serialize(e);
    return this.getNextSafeSlug(n, t.dryrun);
  }
}
class S {
  constructor(e) {
    (this.options = e || E),
      (this.options.renderer = this.options.renderer || new G()),
      (this.renderer = this.options.renderer),
      (this.renderer.options = this.options),
      (this.textRenderer = new ue()),
      (this.slugger = new he());
  }
  static parse(e, t) {
    return new S(t).parse(e);
  }
  static parseInline(e, t) {
    return new S(t).parseInline(e);
  }
  parse(e, t = !0) {
    let n = '',
      i,
      r,
      l,
      a,
      o,
      u,
      f,
      x,
      d,
      h,
      $,
      _,
      T,
      m,
      b,
      C,
      R,
      A,
      I;
    const B = e.length;
    for (i = 0; i < B; i++) {
      if (
        ((h = e[i]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[h.type] &&
          ((I = this.options.extensions.renderers[h.type].call(
            { parser: this },
            h
          )),
          I !== !1 ||
            ![
              'space',
              'hr',
              'heading',
              'code',
              'table',
              'blockquote',
              'list',
              'html',
              'paragraph',
              'text',
            ].includes(h.type)))
      ) {
        n += I || '';
        continue;
      }
      switch (h.type) {
        case 'space':
          continue;
        case 'hr': {
          n += this.renderer.hr();
          continue;
        }
        case 'heading': {
          n += this.renderer.heading(
            this.parseInline(h.tokens),
            h.depth,
            ie(this.parseInline(h.tokens, this.textRenderer)),
            this.slugger
          );
          continue;
        }
        case 'code': {
          n += this.renderer.code(h.text, h.lang, h.escaped);
          continue;
        }
        case 'table': {
          for (x = '', f = '', a = h.header.length, r = 0; r < a; r++)
            f += this.renderer.tablecell(this.parseInline(h.header[r].tokens), {
              header: !0,
              align: h.align[r],
            });
          for (
            x += this.renderer.tablerow(f), d = '', a = h.rows.length, r = 0;
            r < a;
            r++
          ) {
            for (u = h.rows[r], f = '', o = u.length, l = 0; l < o; l++)
              f += this.renderer.tablecell(this.parseInline(u[l].tokens), {
                header: !1,
                align: h.align[l],
              });
            d += this.renderer.tablerow(f);
          }
          n += this.renderer.table(x, d);
          continue;
        }
        case 'blockquote': {
          (d = this.parse(h.tokens)), (n += this.renderer.blockquote(d));
          continue;
        }
        case 'list': {
          for (
            $ = h.ordered,
              _ = h.start,
              T = h.loose,
              a = h.items.length,
              d = '',
              r = 0;
            r < a;
            r++
          )
            (b = h.items[r]),
              (C = b.checked),
              (R = b.task),
              (m = ''),
              b.task &&
                ((A = this.renderer.checkbox(C)),
                T
                  ? b.tokens.length > 0 && b.tokens[0].type === 'paragraph'
                    ? ((b.tokens[0].text = A + ' ' + b.tokens[0].text),
                      b.tokens[0].tokens &&
                        b.tokens[0].tokens.length > 0 &&
                        b.tokens[0].tokens[0].type === 'text' &&
                        (b.tokens[0].tokens[0].text =
                          A + ' ' + b.tokens[0].tokens[0].text))
                    : b.tokens.unshift({ type: 'text', text: A })
                  : (m += A)),
              (m += this.parse(b.tokens, T)),
              (d += this.renderer.listitem(m, R, C));
          n += this.renderer.list(d, $, _);
          continue;
        }
        case 'html': {
          n += this.renderer.html(h.text);
          continue;
        }
        case 'paragraph': {
          n += this.renderer.paragraph(this.parseInline(h.tokens));
          continue;
        }
        case 'text': {
          for (
            d = h.tokens ? this.parseInline(h.tokens) : h.text;
            i + 1 < B && e[i + 1].type === 'text';

          )
            (h = e[++i]),
              (d +=
                `
` + (h.tokens ? this.parseInline(h.tokens) : h.text));
          n += t ? this.renderer.paragraph(d) : d;
          continue;
        }
        default: {
          const L = 'Token with "' + h.type + '" type was not found.';
          if (this.options.silent) {
            console.error(L);
            return;
          } else throw new Error(L);
        }
      }
    }
    return n;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let n = '',
      i,
      r,
      l;
    const a = e.length;
    for (i = 0; i < a; i++) {
      if (
        ((r = e[i]),
        this.options.extensions &&
          this.options.extensions.renderers &&
          this.options.extensions.renderers[r.type] &&
          ((l = this.options.extensions.renderers[r.type].call(
            { parser: this },
            r
          )),
          l !== !1 ||
            ![
              'escape',
              'html',
              'link',
              'image',
              'strong',
              'em',
              'codespan',
              'br',
              'del',
              'text',
            ].includes(r.type)))
      ) {
        n += l || '';
        continue;
      }
      switch (r.type) {
        case 'escape': {
          n += t.text(r.text);
          break;
        }
        case 'html': {
          n += t.html(r.text);
          break;
        }
        case 'link': {
          n += t.link(r.href, r.title, this.parseInline(r.tokens, t));
          break;
        }
        case 'image': {
          n += t.image(r.href, r.title, r.text);
          break;
        }
        case 'strong': {
          n += t.strong(this.parseInline(r.tokens, t));
          break;
        }
        case 'em': {
          n += t.em(this.parseInline(r.tokens, t));
          break;
        }
        case 'codespan': {
          n += t.codespan(r.text);
          break;
        }
        case 'br': {
          n += t.br();
          break;
        }
        case 'del': {
          n += t.del(this.parseInline(r.tokens, t));
          break;
        }
        case 'text': {
          n += t.text(r.text);
          break;
        }
        default: {
          const o = 'Token with "' + r.type + '" type was not found.';
          if (this.options.silent) {
            console.error(o);
            return;
          } else throw new Error(o);
        }
      }
    }
    return n;
  }
}
function g(s, e, t) {
  if (typeof s == 'undefined' || s === null)
    throw new Error('marked(): input parameter is undefined or null');
  if (typeof s != 'string')
    throw new Error(
      'marked(): input parameter is of type ' +
        Object.prototype.toString.call(s) +
        ', string expected'
    );
  if (
    (typeof e == 'function' && ((t = e), (e = null)),
    (e = y({}, g.defaults, e || {})),
    le(e),
    t)
  ) {
    const n = e.highlight;
    let i;
    try {
      i = z.lex(s, e);
    } catch (a) {
      return t(a);
    }
    const r = function (a) {
      let o;
      if (!a)
        try {
          e.walkTokens && g.walkTokens(i, e.walkTokens), (o = S.parse(i, e));
        } catch (u) {
          a = u;
        }
      return (e.highlight = n), a ? t(a) : t(null, o);
    };
    if (!n || n.length < 3 || (delete e.highlight, !i.length)) return r();
    let l = 0;
    g.walkTokens(i, function (a) {
      a.type === 'code' &&
        (l++,
        setTimeout(() => {
          n(a.text, a.lang, function (o, u) {
            if (o) return r(o);
            u != null && u !== a.text && ((a.text = u), (a.escaped = !0)),
              l--,
              l === 0 && r();
          });
        }, 0));
    }),
      l === 0 && r();
    return;
  }
  try {
    const n = z.lex(s, e);
    return e.walkTokens && g.walkTokens(n, e.walkTokens), S.parse(n, e);
  } catch (n) {
    if (
      ((n.message += `
Please report this to https://github.com/markedjs/marked.`),
      e.silent)
    )
      return (
        '<p>An error occurred:</p><pre>' + w(n.message + '', !0) + '</pre>'
      );
    throw n;
  }
}
g.options = g.setOptions = function (s) {
  return y(g.defaults, s), Re(g.defaults), g;
};
g.getDefaults = te;
g.defaults = E;
g.use = function (...s) {
  const e = y({}, ...s),
    t = g.defaults.extensions || { renderers: {}, childTokens: {} };
  let n;
  s.forEach((i) => {
    if (
      (i.extensions &&
        ((n = !0),
        i.extensions.forEach((r) => {
          if (!r.name) throw new Error('extension name required');
          if (r.renderer) {
            const l = t.renderers ? t.renderers[r.name] : null;
            l
              ? (t.renderers[r.name] = function (...a) {
                  let o = r.renderer.apply(this, a);
                  return o === !1 && (o = l.apply(this, a)), o;
                })
              : (t.renderers[r.name] = r.renderer);
          }
          if (r.tokenizer) {
            if (!r.level || (r.level !== 'block' && r.level !== 'inline'))
              throw new Error("extension level must be 'block' or 'inline'");
            t[r.level]
              ? t[r.level].unshift(r.tokenizer)
              : (t[r.level] = [r.tokenizer]),
              r.start &&
                (r.level === 'block'
                  ? t.startBlock
                    ? t.startBlock.push(r.start)
                    : (t.startBlock = [r.start])
                  : r.level === 'inline' &&
                    (t.startInline
                      ? t.startInline.push(r.start)
                      : (t.startInline = [r.start])));
          }
          r.childTokens && (t.childTokens[r.name] = r.childTokens);
        })),
      i.renderer)
    ) {
      const r = g.defaults.renderer || new G();
      for (const l in i.renderer) {
        const a = r[l];
        r[l] = (...o) => {
          let u = i.renderer[l].apply(r, o);
          return u === !1 && (u = a.apply(r, o)), u;
        };
      }
      e.renderer = r;
    }
    if (i.tokenizer) {
      const r = g.defaults.tokenizer || new X();
      for (const l in i.tokenizer) {
        const a = r[l];
        r[l] = (...o) => {
          let u = i.tokenizer[l].apply(r, o);
          return u === !1 && (u = a.apply(r, o)), u;
        };
      }
      e.tokenizer = r;
    }
    if (i.walkTokens) {
      const r = g.defaults.walkTokens;
      e.walkTokens = function (l) {
        i.walkTokens.call(this, l), r && r.call(this, l);
      };
    }
    n && (e.extensions = t), g.setOptions(e);
  });
};
g.walkTokens = function (s, e) {
  for (const t of s)
    switch ((e.call(g, t), t.type)) {
      case 'table': {
        for (const n of t.header) g.walkTokens(n.tokens, e);
        for (const n of t.rows) for (const i of n) g.walkTokens(i.tokens, e);
        break;
      }
      case 'list': {
        g.walkTokens(t.items, e);
        break;
      }
      default:
        g.defaults.extensions &&
        g.defaults.extensions.childTokens &&
        g.defaults.extensions.childTokens[t.type]
          ? g.defaults.extensions.childTokens[t.type].forEach(function (n) {
              g.walkTokens(t[n], e);
            })
          : t.tokens && g.walkTokens(t.tokens, e);
    }
};
g.parseInline = function (s, e) {
  if (typeof s == 'undefined' || s === null)
    throw new Error(
      'marked.parseInline(): input parameter is undefined or null'
    );
  if (typeof s != 'string')
    throw new Error(
      'marked.parseInline(): input parameter is of type ' +
        Object.prototype.toString.call(s) +
        ', string expected'
    );
  (e = y({}, g.defaults, e || {})), le(e);
  try {
    const t = z.lexInline(s, e);
    return e.walkTokens && g.walkTokens(t, e.walkTokens), S.parseInline(t, e);
  } catch (t) {
    if (
      ((t.message += `
Please report this to https://github.com/markedjs/marked.`),
      e.silent)
    )
      return (
        '<p>An error occurred:</p><pre>' + w(t.message + '', !0) + '</pre>'
      );
    throw t;
  }
};
g.Parser = S;
g.parser = S.parse;
g.Renderer = G;
g.TextRenderer = ue;
g.Lexer = z;
g.lexer = z.lex;
g.Tokenizer = X;
g.Slugger = he;
g.parse = g;
S.parse;
z.lex;
export {
  st as S,
  He as a,
  Ye as b,
  We as c,
  Fe as d,
  Xe as e,
  Je as f,
  de as g,
  nt as h,
  it as i,
  Ge as j,
  ze as k,
  Ke as l,
  g as m,
  V as n,
  et as o,
  Ve as p,
  $e as q,
  tt as r,
  Qe as s,
  ke as t,
  Se as u,
};
