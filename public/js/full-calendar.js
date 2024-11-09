/*!
FullCalendar Premium Bundle v6.1.15
Docs & License: https://fullcalendar.io/docs/initialize-globals
(c) 2024 Adam Shaw
*/
var FullCalendar = (function (e) {
  'use strict';
  var t,
    n,
    r,
    i,
    s,
    o,
    l,
    a,
    c,
    d = {},
    u = [],
    h = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function f(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function p(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function g(e, n, r) {
    var i,
      s,
      o,
      l = {};
    for (o in n) 'key' == o ? (i = n[o]) : 'ref' == o ? (s = n[o]) : (l[o] = n[o]);
    if (
      (arguments.length > 2 && (l.children = arguments.length > 3 ? t.call(arguments, 2) : r),
      'function' == typeof e && null != e.defaultProps)
    )
      for (o in e.defaultProps) void 0 === l[o] && (l[o] = e.defaultProps[o]);
    return m(e, l, i, s, null);
  }
  function m(e, t, i, s, o) {
    var l = {
      type: e,
      props: t,
      key: i,
      ref: s,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++r : o,
    };
    return null == o && null != n.vnode && n.vnode(l), l;
  }
  function v(e) {
    return e.children;
  }
  function y(e, t, n) {
    '-' === t[0]
      ? e.setProperty(t, null == n ? '' : n)
      : (e[t] = null == n ? '' : 'number' != typeof n || h.test(t) ? n : n + 'px');
  }
  function b(e, t, n, r, i) {
    var s;
    e: if ('style' === t)
      if ('string' == typeof n) e.style.cssText = n;
      else {
        if (('string' == typeof r && (e.style.cssText = r = ''), r)) for (t in r) (n && t in n) || y(e.style, t, '');
        if (n) for (t in n) (r && n[t] === r[t]) || y(e.style, t, n[t]);
      }
    else if ('o' === t[0] && 'n' === t[1])
      (s = t !== (t = t.replace(/Capture$/, ''))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + s] = n),
        n ? r || e.addEventListener(t, s ? E : S, s) : e.removeEventListener(t, s ? E : S, s);
    else if ('dangerouslySetInnerHTML' !== t) {
      if (i) t = t.replace(/xlink(H|:h)/, 'h').replace(/sName$/, 's');
      else if (
        'width' !== t &&
        'height' !== t &&
        'href' !== t &&
        'list' !== t &&
        'form' !== t &&
        'tabIndex' !== t &&
        'download' !== t &&
        t in e
      )
        try {
          e[t] = null == n ? '' : n;
          break e;
        } catch (e) {}
      'function' == typeof n ||
        (null == n || (!1 === n && -1 == t.indexOf('-')) ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
  }
  function S(e) {
    s = !0;
    try {
      return this.l[e.type + !1](n.event ? n.event(e) : e);
    } finally {
      s = !1;
    }
  }
  function E(e) {
    s = !0;
    try {
      return this.l[e.type + !0](n.event ? n.event(e) : e);
    } finally {
      s = !1;
    }
  }
  function C(e, t) {
    (this.props = e), (this.context = t);
  }
  function w(e, t) {
    if (null == t) return e.__ ? w(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return 'function' == typeof e.type ? w(e) : null;
  }
  function D(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return D(e);
    }
  }
  function R(e) {
    s ? setTimeout(e) : a(e);
  }
  function A(e) {
    ((!e.__d && (e.__d = !0) && o.push(e) && !x.__r++) || l !== n.debounceRendering) &&
      ((l = n.debounceRendering) || R)(x);
  }
  function x() {
    var e, t, n, r, i, s, l, a;
    for (
      o.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      });
      (e = o.shift());

    )
      e.__d &&
        ((t = o.length),
        (r = void 0),
        (i = void 0),
        (l = (s = (n = e).__v).__e),
        (a = n.__P) &&
          ((r = []),
          ((i = f({}, s)).__v = s.__v + 1),
          O(a, s, i, n.__n, void 0 !== a.ownerSVGElement, null != s.__h ? [l] : null, r, null == l ? w(s) : l, s.__h),
          N(r, s),
          s.__e != l && D(s)),
        o.length > t &&
          o.sort(function (e, t) {
            return e.__v.__b - t.__v.__b;
          }));
    x.__r = 0;
  }
  function T(e, t, n, r, i, s, o, l, a, c) {
    var h,
      f,
      p,
      g,
      y,
      b,
      S,
      E = (r && r.__k) || u,
      C = E.length;
    for (n.__k = [], h = 0; h < t.length; h++)
      if (
        null !=
        (g = n.__k[h] =
          null == (g = t[h]) || 'boolean' == typeof g
            ? null
            : 'string' == typeof g || 'number' == typeof g || 'bigint' == typeof g
              ? m(null, g, null, null, g)
              : Array.isArray(g)
                ? m(v, { children: g }, null, null, null)
                : g.__b > 0
                  ? m(g.type, g.props, g.key, g.ref ? g.ref : null, g.__v)
                  : g)
      ) {
        if (((g.__ = n), (g.__b = n.__b + 1), null === (p = E[h]) || (p && g.key == p.key && g.type === p.type)))
          E[h] = void 0;
        else
          for (f = 0; f < C; f++) {
            if ((p = E[f]) && g.key == p.key && g.type === p.type) {
              E[f] = void 0;
              break;
            }
            p = null;
          }
        O(e, g, (p = p || d), i, s, o, l, a, c),
          (y = g.__e),
          (f = g.ref) && p.ref != f && (S || (S = []), p.ref && S.push(p.ref, null, g), S.push(f, g.__c || y, g)),
          null != y
            ? (null == b && (b = y),
              'function' == typeof g.type && g.__k === p.__k ? (g.__d = a = _(g, a, e)) : (a = M(e, g, p, E, y, a)),
              'function' == typeof n.type && (n.__d = a))
            : a && p.__e == a && a.parentNode != e && (a = w(p));
      }
    for (n.__e = b, h = C; h--; )
      null != E[h] &&
        ('function' == typeof n.type && null != E[h].__e && E[h].__e == n.__d && (n.__d = I(r).nextSibling),
        W(E[h], E[h]));
    if (S) for (h = 0; h < S.length; h++) H(S[h], S[++h], S[++h]);
  }
  function _(e, t, n) {
    for (var r, i = e.__k, s = 0; i && s < i.length; s++)
      (r = i[s]) && ((r.__ = e), (t = 'function' == typeof r.type ? _(r, t, n) : M(n, r, r, i, r.__e, t)));
    return t;
  }
  function k(e, t) {
    return (
      (t = t || []),
      null == e ||
        'boolean' == typeof e ||
        (Array.isArray(e)
          ? e.some(function (e) {
              k(e, t);
            })
          : t.push(e)),
      t
    );
  }
  function M(e, t, n, r, i, s) {
    var o, l, a;
    if (void 0 !== t.__d) (o = t.__d), (t.__d = void 0);
    else if (null == n || i != s || null == i.parentNode)
      e: if (null == s || s.parentNode !== e) e.appendChild(i), (o = null);
      else {
        for (l = s, a = 0; (l = l.nextSibling) && a < r.length; a += 1) if (l == i) break e;
        e.insertBefore(i, s), (o = s);
      }
    return void 0 !== o ? o : i.nextSibling;
  }
  function I(e) {
    var t, n, r;
    if (null == e.type || 'string' == typeof e.type) return e.__e;
    if (e.__k) for (t = e.__k.length - 1; t >= 0; t--) if ((n = e.__k[t]) && (r = I(n))) return r;
    return null;
  }
  function O(e, t, r, i, s, o, l, a, c) {
    var d,
      u,
      h,
      p,
      g,
      m,
      y,
      b,
      S,
      E,
      w,
      D,
      R,
      A,
      x,
      _ = t.type;
    if (void 0 !== t.constructor) return null;
    null != r.__h && ((c = r.__h), (a = t.__e = r.__e), (t.__h = null), (o = [a])), (d = n.__b) && d(t);
    try {
      e: if ('function' == typeof _) {
        if (
          ((b = t.props),
          (S = (d = _.contextType) && i[d.__c]),
          (E = d ? (S ? S.props.value : d.__) : i),
          r.__c
            ? (y = (u = t.__c = r.__c).__ = u.__E)
            : ('prototype' in _ && _.prototype.render
                ? (t.__c = u = new _(b, E))
                : ((t.__c = u = new C(b, E)), (u.constructor = _), (u.render = B)),
              S && S.sub(u),
              (u.props = b),
              u.state || (u.state = {}),
              (u.context = E),
              (u.__n = i),
              (h = u.__d = !0),
              (u.__h = []),
              (u._sb = [])),
          null == u.__s && (u.__s = u.state),
          null != _.getDerivedStateFromProps &&
            (u.__s == u.state && (u.__s = f({}, u.__s)), f(u.__s, _.getDerivedStateFromProps(b, u.__s))),
          (p = u.props),
          (g = u.state),
          (u.__v = t),
          h)
        )
          null == _.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(),
            null != u.componentDidMount && u.__h.push(u.componentDidMount);
        else {
          if (
            (null == _.getDerivedStateFromProps &&
              b !== p &&
              null != u.componentWillReceiveProps &&
              u.componentWillReceiveProps(b, E),
            (!u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(b, u.__s, E)) ||
              t.__v === r.__v)
          ) {
            for (
              t.__v !== r.__v && ((u.props = b), (u.state = u.__s), (u.__d = !1)),
                t.__e = r.__e,
                t.__k = r.__k,
                t.__k.forEach(function (e) {
                  e && (e.__ = t);
                }),
                w = 0;
              w < u._sb.length;
              w++
            )
              u.__h.push(u._sb[w]);
            (u._sb = []), u.__h.length && l.push(u);
            break e;
          }
          null != u.componentWillUpdate && u.componentWillUpdate(b, u.__s, E),
            null != u.componentDidUpdate &&
              u.__h.push(function () {
                u.componentDidUpdate(p, g, m);
              });
        }
        if (
          ((u.context = E), (u.props = b), (u.__P = e), (D = n.__r), (R = 0), 'prototype' in _ && _.prototype.render)
        ) {
          for (
            u.state = u.__s, u.__d = !1, D && D(t), d = u.render(u.props, u.state, u.context), A = 0;
            A < u._sb.length;
            A++
          )
            u.__h.push(u._sb[A]);
          u._sb = [];
        } else
          do {
            (u.__d = !1), D && D(t), (d = u.render(u.props, u.state, u.context)), (u.state = u.__s);
          } while (u.__d && ++R < 25);
        (u.state = u.__s),
          null != u.getChildContext && (i = f(f({}, i), u.getChildContext())),
          h || null == u.getSnapshotBeforeUpdate || (m = u.getSnapshotBeforeUpdate(p, g)),
          (x = null != d && d.type === v && null == d.key ? d.props.children : d),
          T(e, Array.isArray(x) ? x : [x], t, r, i, s, o, l, a, c),
          (u.base = t.__e),
          (t.__h = null),
          u.__h.length && l.push(u),
          y && (u.__E = u.__ = null),
          (u.__e = !1);
      } else
        null == o && t.__v === r.__v ? ((t.__k = r.__k), (t.__e = r.__e)) : (t.__e = P(r.__e, t, r, i, s, o, l, c));
      (d = n.diffed) && d(t);
    } catch (e) {
      (t.__v = null), (c || null != o) && ((t.__e = a), (t.__h = !!c), (o[o.indexOf(a)] = null)), n.__e(e, t, r);
    }
  }
  function N(e, t) {
    n.__c && n.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          n.__e(e, t.__v);
        }
      });
  }
  function P(e, n, r, i, s, o, l, a) {
    var c,
      u,
      h,
      f = r.props,
      g = n.props,
      m = n.type,
      v = 0;
    if (('svg' === m && (s = !0), null != o))
      for (; v < o.length; v++)
        if ((c = o[v]) && 'setAttribute' in c == !!m && (m ? c.localName === m : 3 === c.nodeType)) {
          (e = c), (o[v] = null);
          break;
        }
    if (null == e) {
      if (null === m) return document.createTextNode(g);
      (e = s ? document.createElementNS('http://www.w3.org/2000/svg', m) : document.createElement(m, g.is && g)),
        (o = null),
        (a = !1);
    }
    if (null === m) f === g || (a && e.data === g) || (e.data = g);
    else {
      if (
        ((o = o && t.call(e.childNodes)),
        (u = (f = r.props || d).dangerouslySetInnerHTML),
        (h = g.dangerouslySetInnerHTML),
        !a)
      ) {
        if (null != o)
          for (f = {}, v = 0; v < e.attributes.length; v++) f[e.attributes[v].name] = e.attributes[v].value;
        (h || u) &&
          ((h && ((u && h.__html == u.__html) || h.__html === e.innerHTML)) || (e.innerHTML = (h && h.__html) || ''));
      }
      if (
        ((function (e, t, n, r, i) {
          var s;
          for (s in n) 'children' === s || 'key' === s || s in t || b(e, s, null, n[s], r);
          for (s in t)
            (i && 'function' != typeof t[s]) ||
              'children' === s ||
              'key' === s ||
              'value' === s ||
              'checked' === s ||
              n[s] === t[s] ||
              b(e, s, t[s], n[s], r);
        })(e, g, f, s, a),
        h)
      )
        n.__k = [];
      else if (
        ((v = n.props.children),
        T(e, Array.isArray(v) ? v : [v], n, r, i, s && 'foreignObject' !== m, o, l, o ? o[0] : r.__k && w(r, 0), a),
        null != o)
      )
        for (v = o.length; v--; ) null != o[v] && p(o[v]);
      a ||
        ('value' in g &&
          void 0 !== (v = g.value) &&
          (v !== e.value || ('progress' === m && !v) || ('option' === m && v !== f.value)) &&
          b(e, 'value', v, f.value, !1),
        'checked' in g && void 0 !== (v = g.checked) && v !== e.checked && b(e, 'checked', v, f.checked, !1));
    }
    return e;
  }
  function H(e, t, r) {
    try {
      'function' == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      n.__e(e, r);
    }
  }
  function W(e, t, r) {
    var i, s;
    if (
      (n.unmount && n.unmount(e),
      (i = e.ref) && ((i.current && i.current !== e.__e) || H(i, null, t)),
      null != (i = e.__c))
    ) {
      if (i.componentWillUnmount)
        try {
          i.componentWillUnmount();
        } catch (e) {
          n.__e(e, t);
        }
      (i.base = i.__P = null), (e.__c = void 0);
    }
    if ((i = e.__k)) for (s = 0; s < i.length; s++) i[s] && W(i[s], t, r || 'function' != typeof e.type);
    r || null == e.__e || p(e.__e), (e.__ = e.__e = e.__d = void 0);
  }
  function B(e, t, n) {
    return this.constructor(e, n);
  }
  function j(e, r, i) {
    var s, o, l;
    n.__ && n.__(e, r),
      (o = (s = 'function' == typeof i) ? null : (i && i.__k) || r.__k),
      (l = []),
      O(
        r,
        (e = ((!s && i) || r).__k = g(v, null, [e])),
        o || d,
        d,
        void 0 !== r.ownerSVGElement,
        !s && i ? [i] : o ? null : r.firstChild ? t.call(r.childNodes) : null,
        l,
        !s && i ? i : o ? o.__e : r.firstChild,
        s,
      ),
      N(l, e);
  }
  (t = u.slice),
    (n = {
      __e: function (e, t, n, r) {
        for (var i, s, o; (t = t.__); )
          if ((i = t.__c) && !i.__)
            try {
              if (
                ((s = i.constructor) &&
                  null != s.getDerivedStateFromError &&
                  (i.setState(s.getDerivedStateFromError(e)), (o = i.__d)),
                null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), (o = i.__d)),
                o)
              )
                return (i.__E = i);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (r = 0),
    (i = function (e) {
      return null != e && void 0 === e.constructor;
    }),
    (s = !1),
    (C.prototype.setState = function (e, t) {
      var n;
      (n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = f({}, this.state))),
        'function' == typeof e && (e = e(f({}, n), this.props)),
        e && f(n, e),
        null != e && this.__v && (t && this._sb.push(t), A(this));
    }),
    (C.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), A(this));
    }),
    (C.prototype.render = v),
    (o = []),
    (a = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
    (x.__r = 0),
    (c = 0);
  var L,
    z,
    U,
    G = [],
    F = [],
    V = n.__b,
    q = n.__r,
    Y = n.diffed,
    Q = n.__c,
    Z = n.unmount;
  function X() {
    for (var e; (e = G.shift()); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(K), e.__H.__h.forEach(ee), (e.__H.__h = []);
        } catch (t) {
          (e.__H.__h = []), n.__e(t, e.__v);
        }
  }
  (n.__b = function (e) {
    (L = null), V && V(e);
  }),
    (n.__r = function (e) {
      q && q(e);
      var t = (L = e.__c).__H;
      t &&
        (z === L
          ? ((t.__h = []),
            (L.__h = []),
            t.__.forEach(function (e) {
              e.__N && (e.__ = e.__N), (e.__V = F), (e.__N = e.i = void 0);
            }))
          : (t.__h.forEach(K), t.__h.forEach(ee), (t.__h = []))),
        (z = L);
    }),
    (n.diffed = function (e) {
      Y && Y(e);
      var t = e.__c;
      t &&
        t.__H &&
        (t.__H.__h.length &&
          ((1 !== G.push(t) && U === n.requestAnimationFrame) || ((U = n.requestAnimationFrame) || J)(X)),
        t.__H.__.forEach(function (e) {
          e.i && (e.__H = e.i), e.__V !== F && (e.__ = e.__V), (e.i = void 0), (e.__V = F);
        })),
        (z = L = null);
    }),
    (n.__c = function (e, t) {
      t.some(function (e) {
        try {
          e.__h.forEach(K),
            (e.__h = e.__h.filter(function (e) {
              return !e.__ || ee(e);
            }));
        } catch (r) {
          t.some(function (e) {
            e.__h && (e.__h = []);
          }),
            (t = []),
            n.__e(r, e.__v);
        }
      }),
        Q && Q(e, t);
    }),
    (n.unmount = function (e) {
      Z && Z(e);
      var t,
        r = e.__c;
      r &&
        r.__H &&
        (r.__H.__.forEach(function (e) {
          try {
            K(e);
          } catch (e) {
            t = e;
          }
        }),
        (r.__H = void 0),
        t && n.__e(t, r.__v));
    });
  var $ = 'function' == typeof requestAnimationFrame;
  function J(e) {
    var t,
      n = function () {
        clearTimeout(r), $ && cancelAnimationFrame(t), setTimeout(e);
      },
      r = setTimeout(n, 100);
    $ && (t = requestAnimationFrame(n));
  }
  function K(e) {
    var t = L,
      n = e.__c;
    'function' == typeof n && ((e.__c = void 0), n()), (L = t);
  }
  function ee(e) {
    var t = L;
    (e.__c = e.__()), (L = t);
  }
  function te(e, t) {
    for (var n in e) if ('__source' !== n && !(n in t)) return !0;
    for (var r in t) if ('__source' !== r && e[r] !== t[r]) return !0;
    return !1;
  }
  function ne(e) {
    this.props = e;
  }
  ((ne.prototype = new C()).isPureReactComponent = !0),
    (ne.prototype.shouldComponentUpdate = function (e, t) {
      return te(this.props, e) || te(this.state, t);
    });
  var re = n.__b;
  n.__b = function (e) {
    e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), re && re(e);
  };
  var ie = n.__e;
  n.__e = function (e, t, n, r) {
    if (e.then)
      for (var i, s = t; (s = s.__); )
        if ((i = s.__c) && i.__c) return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t);
    ie(e, t, n, r);
  };
  var se = n.unmount;
  function oe() {
    (this.__u = 0), (this.t = null), (this.__b = null);
  }
  function le(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function ae() {
    (this.u = null), (this.o = null);
  }
  (n.unmount = function (e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), se && se(e);
  }),
    ((oe.prototype = new C()).__c = function (e, t) {
      var n = t.__c,
        r = this;
      null == r.t && (r.t = []), r.t.push(n);
      var i = le(r.__v),
        s = !1,
        o = function () {
          s || ((s = !0), (n.__R = null), i ? i(l) : l());
        };
      n.__R = o;
      var l = function () {
          if (!--r.__u) {
            if (r.state.__a) {
              var e = r.state.__a;
              r.__v.__k[0] = (function e(t, n, r) {
                return (
                  t &&
                    ((t.__v = null),
                    (t.__k =
                      t.__k &&
                      t.__k.map(function (t) {
                        return e(t, n, r);
                      })),
                    t.__c &&
                      t.__c.__P === n &&
                      (t.__e && r.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = r))),
                  t
                );
              })(e, e.__c.__P, e.__c.__O);
            }
            var t;
            for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); ) t.forceUpdate();
          }
        },
        a = !0 === t.__h;
      r.__u++ || a || r.setState({ __a: (r.__b = r.__v.__k[0]) }), e.then(o, o);
    }),
    (oe.prototype.componentWillUnmount = function () {
      this.t = [];
    }),
    (oe.prototype.render = function (e, t) {
      if (this.__b) {
        if (this.__v.__k) {
          var n = document.createElement('div'),
            r = this.__v.__k[0].__c;
          this.__v.__k[0] = (function e(t, n, r) {
            return (
              t &&
                (t.__c &&
                  t.__c.__H &&
                  (t.__c.__H.__.forEach(function (e) {
                    'function' == typeof e.__c && e.__c();
                  }),
                  (t.__c.__H = null)),
                null !=
                  (t = (function (e, t) {
                    for (var n in t) e[n] = t[n];
                    return e;
                  })({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), (t.__c = null)),
                (t.__k =
                  t.__k &&
                  t.__k.map(function (t) {
                    return e(t, n, r);
                  }))),
              t
            );
          })(this.__b, n, (r.__O = r.__P));
        }
        this.__b = null;
      }
      var i = t.__a && g(v, null, e.fallback);
      return i && (i.__h = null), [g(v, null, t.__a ? null : e.children), i];
    });
  var ce = function (e, t, n) {
    if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.o.size)))
      for (n = e.u; n; ) {
        for (; n.length > 3; ) n.pop()();
        if (n[1] < n[0]) break;
        e.u = n = n[2];
      }
  };
  function de(e) {
    return (
      (this.getChildContext = function () {
        return e.context;
      }),
      e.children
    );
  }
  function ue(e) {
    var t = this,
      n = e.i;
    (t.componentWillUnmount = function () {
      j(null, t.l), (t.l = null), (t.i = null);
    }),
      t.i && t.i !== n && t.componentWillUnmount(),
      e.__v
        ? (t.l ||
            ((t.i = n),
            (t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (e) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              insertBefore: function (e, n) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e);
              },
            })),
          j(g(de, { context: t.context }, e.__v), t.l))
        : t.l && t.componentWillUnmount();
  }
  ((ae.prototype = new C()).__a = function (e) {
    var t = this,
      n = le(t.__v),
      r = t.o.get(e);
    return (
      r[0]++,
      function (i) {
        var s = function () {
          t.props.revealOrder ? (r.push(i), ce(t, e, r)) : i();
        };
        n ? n(s) : s();
      }
    );
  }),
    (ae.prototype.render = function (e) {
      (this.u = null), (this.o = new Map());
      var t = k(e.children);
      e.revealOrder && 'b' === e.revealOrder[0] && t.reverse();
      for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]));
      return e.children;
    }),
    (ae.prototype.componentDidUpdate = ae.prototype.componentDidMount =
      function () {
        var e = this;
        this.o.forEach(function (t, n) {
          ce(e, n, t);
        });
      });
  var he = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
    fe =
      /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
    pe = 'undefined' != typeof document,
    ge = function (e) {
      return ('undefined' != typeof Symbol && 'symbol' == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e);
    };
  (C.prototype.isReactComponent = {}),
    ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
      Object.defineProperty(C.prototype, e, {
        configurable: !0,
        get: function () {
          return this['UNSAFE_' + e];
        },
        set: function (t) {
          Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
        },
      });
    });
  var me = n.event;
  function ve() {}
  function ye() {
    return this.cancelBubble;
  }
  function be() {
    return this.defaultPrevented;
  }
  n.event = function (e) {
    return (
      me && (e = me(e)),
      (e.persist = ve),
      (e.isPropagationStopped = ye),
      (e.isDefaultPrevented = be),
      (e.nativeEvent = e)
    );
  };
  var Se = {
      configurable: !0,
      get: function () {
        return this.class;
      },
    },
    Ee = n.vnode;
  n.vnode = function (e) {
    var t = e.type,
      n = e.props,
      r = n;
    if ('string' == typeof t) {
      var i = -1 === t.indexOf('-');
      for (var s in ((r = {}), n)) {
        var o = n[s];
        (pe && 'children' === s && 'noscript' === t) ||
          ('value' === s && 'defaultValue' in n && null == o) ||
          ('defaultValue' === s && 'value' in n && null == n.value
            ? (s = 'value')
            : 'download' === s && !0 === o
              ? (o = '')
              : /ondoubleclick/i.test(s)
                ? (s = 'ondblclick')
                : /^onchange(textarea|input)/i.test(s + t) && !ge(n.type)
                  ? (s = 'oninput')
                  : /^onfocus$/i.test(s)
                    ? (s = 'onfocusin')
                    : /^onblur$/i.test(s)
                      ? (s = 'onfocusout')
                      : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)
                        ? (s = s.toLowerCase())
                        : i && fe.test(s)
                          ? (s = s.replace(/[A-Z0-9]/g, '-$&').toLowerCase())
                          : null === o && (o = void 0),
          /^oninput$/i.test(s) && ((s = s.toLowerCase()), r[s] && (s = 'oninputCapture')),
          (r[s] = o));
      }
      'select' == t &&
        r.multiple &&
        Array.isArray(r.value) &&
        (r.value = k(n.children).forEach(function (e) {
          e.props.selected = -1 != r.value.indexOf(e.props.value);
        })),
        'select' == t &&
          null != r.defaultValue &&
          (r.value = k(n.children).forEach(function (e) {
            e.props.selected = r.multiple
              ? -1 != r.defaultValue.indexOf(e.props.value)
              : r.defaultValue == e.props.value;
          })),
        (e.props = r),
        n.class != n.className &&
          ((Se.enumerable = 'className' in n),
          null != n.className && (r.class = n.className),
          Object.defineProperty(r, 'className', Se));
    }
    (e.$$typeof = he), Ee && Ee(e);
  };
  var Ce = n.__r;
  n.__r = function (e) {
    Ce && Ce(e), e.__c;
  };
  const we = [],
    De = new Map();
  function Re(e) {
    we.push(e),
      De.forEach((t) => {
        xe(t, e);
      });
  }
  function Ae(e) {
    let t = De.get(e);
    if (!t || !t.isConnected) {
      if (((t = e.querySelector('style[data-fullcalendar]')), !t)) {
        (t = document.createElement('style')), t.setAttribute('data-fullcalendar', '');
        const n = (function () {
          void 0 === Te &&
            (Te = (function () {
              const e = document.querySelector('meta[name="csp-nonce"]');
              if (e && e.hasAttribute('content')) return e.getAttribute('content');
              const t = document.querySelector('script[nonce]');
              if (t) return t.nonce || '';
              return '';
            })());
          return Te;
        })();
        n && (t.nonce = n);
        const r = e === document ? document.head : e,
          i = e === document ? r.querySelector('script,link[rel=stylesheet],link[as=style],style') : r.firstChild;
        r.insertBefore(t, i);
      }
      De.set(e, t),
        (function (e) {
          for (const t of we) xe(e, t);
        })(t);
    }
  }
  function xe(e, t) {
    const { sheet: n } = e,
      r = n.cssRules.length;
    t.split('}').forEach((e, t) => {
      (e = e.trim()) && n.insertRule(e + '}', r + t);
    });
  }
  let Te;
  'undefined' != typeof document && Ae(document);
  Re(
    ':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}',
  );
  class _e {
    constructor(e) {
      (this.drainedOption = e),
        (this.isRunning = !1),
        (this.isDirty = !1),
        (this.pauseDepths = {}),
        (this.timeoutId = 0);
    }
    request(e) {
      (this.isDirty = !0),
        this.isPaused() ||
          (this.clearTimeout(),
          null == e ? this.tryDrain() : (this.timeoutId = setTimeout(this.tryDrain.bind(this), e)));
    }
    pause(e = '') {
      let { pauseDepths: t } = this;
      (t[e] = (t[e] || 0) + 1), this.clearTimeout();
    }
    resume(e = '', t) {
      let { pauseDepths: n } = this;
      if (e in n) {
        if (t) delete n[e];
        else {
          (n[e] -= 1), n[e] <= 0 && delete n[e];
        }
        this.tryDrain();
      }
    }
    isPaused() {
      return Object.keys(this.pauseDepths).length;
    }
    tryDrain() {
      if (!this.isRunning && !this.isPaused()) {
        for (this.isRunning = !0; this.isDirty; ) (this.isDirty = !1), this.drained();
        this.isRunning = !1;
      }
    }
    clear() {
      this.clearTimeout(), (this.isDirty = !1), (this.pauseDepths = {});
    }
    clearTimeout() {
      this.timeoutId && (clearTimeout(this.timeoutId), (this.timeoutId = 0));
    }
    drained() {
      this.drainedOption && this.drainedOption();
    }
  }
  function ke(e) {
    e.parentNode && e.parentNode.removeChild(e);
  }
  function Me(e, t) {
    if (e.closest) return e.closest(t);
    if (!document.documentElement.contains(e)) return null;
    do {
      if (Ie(e, t)) return e;
      e = e.parentElement || e.parentNode;
    } while (null !== e && 1 === e.nodeType);
    return null;
  }
  function Ie(e, t) {
    return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t);
  }
  function Oe(e, t) {
    let n = e instanceof HTMLElement ? [e] : e,
      r = [];
    for (let e = 0; e < n.length; e += 1) {
      let i = n[e].querySelectorAll(t);
      for (let e = 0; e < i.length; e += 1) r.push(i[e]);
    }
    return r;
  }
  function Ne(e, t) {
    let n = e instanceof HTMLElement ? [e] : e,
      r = [];
    for (let e = 0; e < n.length; e += 1) {
      let i = n[e].children;
      for (let e = 0; e < i.length; e += 1) {
        let n = i[e];
        (t && !Ie(n, t)) || r.push(n);
      }
    }
    return r;
  }
  const Pe = /(top|left|right|bottom|width|height)$/i;
  function He(e, t) {
    for (let n in t) We(e, n, t[n]);
  }
  function We(e, t, n) {
    null == n ? (e.style[t] = '') : 'number' == typeof n && Pe.test(t) ? (e.style[t] = n + 'px') : (e.style[t] = n);
  }
  function Be(e) {
    var t, n;
    return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n
      ? n
      : e.target;
  }
  let je = 0;
  function Le() {
    return (je += 1), 'fc-dom-' + je;
  }
  function ze(e) {
    e.preventDefault();
  }
  function Ue(e, t, n, r) {
    let i = (function (e, t) {
      return (n) => {
        let r = Me(n.target, e);
        r && t.call(r, n, r);
      };
    })(n, r);
    return (
      e.addEventListener(t, i),
      () => {
        e.removeEventListener(t, i);
      }
    );
  }
  const Ge = ['webkitTransitionEnd', 'otransitionend', 'oTransitionEnd', 'msTransitionEnd', 'transitionend'];
  function Fe(e, t) {
    let n = (r) => {
      t(r),
        Ge.forEach((t) => {
          e.removeEventListener(t, n);
        });
    };
    Ge.forEach((t) => {
      e.addEventListener(t, n);
    });
  }
  function Ve(e) {
    return Object.assign({ onClick: e }, qe(e));
  }
  function qe(e) {
    return {
      tabIndex: 0,
      onKeyDown(t) {
        ('Enter' !== t.key && ' ' !== t.key) || (e(t), t.preventDefault());
      },
    };
  }
  let Ye = 0;
  function Qe() {
    return (Ye += 1), String(Ye);
  }
  function Ze() {
    document.body.classList.add('fc-not-allowed');
  }
  function Xe() {
    document.body.classList.remove('fc-not-allowed');
  }
  function $e(e) {
    (e.style.userSelect = 'none'), (e.style.webkitUserSelect = 'none'), e.addEventListener('selectstart', ze);
  }
  function Je(e) {
    (e.style.userSelect = ''), (e.style.webkitUserSelect = ''), e.removeEventListener('selectstart', ze);
  }
  function Ke(e) {
    e.addEventListener('contextmenu', ze);
  }
  function et(e) {
    e.removeEventListener('contextmenu', ze);
  }
  function tt(e) {
    let t,
      n,
      r = [],
      i = [];
    for (
      'string' == typeof e
        ? (i = e.split(/\s*,\s*/))
        : 'function' == typeof e
          ? (i = [e])
          : Array.isArray(e) && (i = e),
        t = 0;
      t < i.length;
      t += 1
    )
      (n = i[t]),
        'string' == typeof n
          ? r.push('-' === n.charAt(0) ? { field: n.substring(1), order: -1 } : { field: n, order: 1 })
          : 'function' == typeof n && r.push({ func: n });
    return r;
  }
  function nt(e, t, n) {
    let r, i;
    for (r = 0; r < n.length; r += 1) if (((i = rt(e, t, n[r])), i)) return i;
    return 0;
  }
  function rt(e, t, n) {
    return n.func ? n.func(e, t) : it(e[n.field], t[n.field]) * (n.order || 1);
  }
  function it(e, t) {
    return e || t
      ? null == t
        ? -1
        : null == e
          ? 1
          : 'string' == typeof e || 'string' == typeof t
            ? String(e).localeCompare(String(t))
            : e - t
      : 0;
  }
  function st(e, t) {
    let n = String(e);
    return '000'.substr(0, t - n.length) + n;
  }
  function ot(e, t, n) {
    return 'function' == typeof e
      ? e(...t)
      : 'string' == typeof e
        ? t.reduce((e, t, n) => e.replace('$' + n, t || ''), e)
        : n;
  }
  function lt(e, t) {
    return e - t;
  }
  function at(e) {
    return e % 1 == 0;
  }
  function ct(e) {
    let t = e.querySelector('.fc-scrollgrid-shrink-frame'),
      n = e.querySelector('.fc-scrollgrid-shrink-cushion');
    if (!t) throw new Error('needs fc-scrollgrid-shrink-frame className');
    if (!n) throw new Error('needs fc-scrollgrid-shrink-cushion className');
    return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width;
  }
  const dt = ['years', 'months', 'days', 'milliseconds'],
    ut = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  function ht(e, t) {
    return 'string' == typeof e
      ? (function (e) {
          let t = ut.exec(e);
          if (t) {
            let e = t[1] ? -1 : 1;
            return {
              years: 0,
              months: 0,
              days: e * (t[2] ? parseInt(t[2], 10) : 0),
              milliseconds:
                e *
                (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 +
                  60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 +
                  1e3 * (t[5] ? parseInt(t[5], 10) : 0) +
                  (t[6] ? parseInt(t[6], 10) : 0)),
            };
          }
          return null;
        })(e)
      : 'object' == typeof e && e
        ? ft(e)
        : 'number' == typeof e
          ? ft({ [t || 'milliseconds']: e })
          : null;
  }
  function ft(e) {
    let t = {
        years: e.years || e.year || 0,
        months: e.months || e.month || 0,
        days: e.days || e.day || 0,
        milliseconds:
          60 * (e.hours || e.hour || 0) * 60 * 1e3 +
          60 * (e.minutes || e.minute || 0) * 1e3 +
          1e3 * (e.seconds || e.second || 0) +
          (e.milliseconds || e.millisecond || e.ms || 0),
      },
      n = e.weeks || e.week;
    return n && ((t.days += 7 * n), (t.specifiedWeeks = !0)), t;
  }
  function pt(e) {
    return e.years || e.months || e.milliseconds ? 0 : e.days;
  }
  function gt(e, t) {
    return {
      years: e.years + t.years,
      months: e.months + t.months,
      days: e.days + t.days,
      milliseconds: e.milliseconds + t.milliseconds,
    };
  }
  function mt(e, t) {
    return { years: e.years * t, months: e.months * t, days: e.days * t, milliseconds: e.milliseconds * t };
  }
  function vt(e) {
    return St(e) / 864e5;
  }
  function yt(e) {
    return St(e) / 6e4;
  }
  function bt(e) {
    return St(e) / 1e3;
  }
  function St(e) {
    return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds;
  }
  function Et(e, t) {
    let n = null;
    for (let r = 0; r < dt.length; r += 1) {
      let i = dt[r];
      if (t[i]) {
        let r = e[i] / t[i];
        if (!at(r) || (null !== n && n !== r)) return null;
        n = r;
      } else if (e[i]) return null;
    }
    return n;
  }
  function Ct(e) {
    let t = e.milliseconds;
    if (t) {
      if (t % 1e3 != 0) return { unit: 'millisecond', value: t };
      if (t % 6e4 != 0) return { unit: 'second', value: t / 1e3 };
      if (t % 36e5 != 0) return { unit: 'minute', value: t / 6e4 };
      if (t) return { unit: 'hour', value: t / 36e5 };
    }
    return e.days
      ? e.specifiedWeeks && e.days % 7 == 0
        ? { unit: 'week', value: e.days / 7 }
        : { unit: 'day', value: e.days }
      : e.months
        ? { unit: 'month', value: e.months }
        : e.years
          ? { unit: 'year', value: e.years }
          : { unit: 'millisecond', value: 0 };
  }
  function wt(e, t) {
    let n = 0,
      r = 0;
    for (; r < e.length; ) e[r] === t ? (e.splice(r, 1), (n += 1)) : (r += 1);
    return n;
  }
  function Dt(e, t, n) {
    if (e === t) return !0;
    let r,
      i = e.length;
    if (i !== t.length) return !1;
    for (r = 0; r < i; r += 1) if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
    return !0;
  }
  const Rt = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  function At(e, t) {
    let n = jt(e);
    return (n[2] += 7 * t), Lt(n);
  }
  function xt(e, t) {
    let n = jt(e);
    return (n[2] += t), Lt(n);
  }
  function Tt(e, t) {
    let n = jt(e);
    return (n[6] += t), Lt(n);
  }
  function _t(e, t) {
    return kt(e, t) / 7;
  }
  function kt(e, t) {
    return (t.valueOf() - e.valueOf()) / 864e5;
  }
  function Mt(e, t) {
    let n = Nt(e),
      r = Nt(t);
    return {
      years: 0,
      months: 0,
      days: Math.round(kt(n, r)),
      milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf()),
    };
  }
  function It(e, t) {
    let n = Ot(e, t);
    return null !== n && n % 7 == 0 ? n / 7 : null;
  }
  function Ot(e, t) {
    return Ut(e) === Ut(t) ? Math.round(kt(e, t)) : null;
  }
  function Nt(e) {
    return Lt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()]);
  }
  function Pt(e, t, n, r) {
    let i = Lt([t, 0, 1 + Ht(t, n, r)]),
      s = Nt(e),
      o = Math.round(kt(i, s));
    return Math.floor(o / 7) + 1;
  }
  function Ht(e, t, n) {
    let r = 7 + t - n;
    return -((7 + Lt([e, 0, r]).getUTCDay() - t) % 7) + r - 1;
  }
  function Wt(e) {
    return [
      e.getFullYear(),
      e.getMonth(),
      e.getDate(),
      e.getHours(),
      e.getMinutes(),
      e.getSeconds(),
      e.getMilliseconds(),
    ];
  }
  function Bt(e) {
    return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0);
  }
  function jt(e) {
    return [
      e.getUTCFullYear(),
      e.getUTCMonth(),
      e.getUTCDate(),
      e.getUTCHours(),
      e.getUTCMinutes(),
      e.getUTCSeconds(),
      e.getUTCMilliseconds(),
    ];
  }
  function Lt(e) {
    return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC(...e));
  }
  function zt(e) {
    return !isNaN(e.valueOf());
  }
  function Ut(e) {
    return (
      1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
    );
  }
  function Gt(e, t, n = !1) {
    let r = e.toISOString();
    return (
      (r = r.replace('.000', '')),
      n && (r = r.replace('T00:00:00Z', '')),
      r.length > 10 && (null == t ? (r = r.replace('Z', '')) : 0 !== t && (r = r.replace('Z', Yt(t, !0)))),
      r
    );
  }
  function Ft(e) {
    return e.toISOString().replace(/T.*$/, '');
  }
  function Vt(e) {
    return e.toISOString().match(/^\d{4}-\d{2}/)[0];
  }
  function qt(e) {
    return st(e.getUTCHours(), 2) + ':' + st(e.getUTCMinutes(), 2) + ':' + st(e.getUTCSeconds(), 2);
  }
  function Yt(e, t = !1) {
    let n = e < 0 ? '-' : '+',
      r = Math.abs(e),
      i = Math.floor(r / 60),
      s = Math.round(r % 60);
    return t ? `${n + st(i, 2)}:${st(s, 2)}` : `GMT${n}${i}${s ? ':' + st(s, 2) : ''}`;
  }
  function Qt(e, t, n) {
    let r, i;
    return function (...s) {
      if (r) {
        if (!Dt(r, s)) {
          n && n(i);
          let r = e.apply(this, s);
          (t && t(r, i)) || (i = r);
        }
      } else i = e.apply(this, s);
      return (r = s), i;
    };
  }
  function Zt(e, t, n) {
    let r, i;
    return (s) => {
      if (r) {
        if (!kn(r, s)) {
          n && n(i);
          let r = e.call(this, s);
          (t && t(r, i)) || (i = r);
        }
      } else i = e.call(this, s);
      return (r = s), i;
    };
  }
  function Xt(e, t, n) {
    let r = [],
      i = [];
    return (s) => {
      let o = r.length,
        l = s.length,
        a = 0;
      for (; a < o; a += 1)
        if (s[a]) {
          if (!Dt(r[a], s[a])) {
            n && n(i[a]);
            let r = e.apply(this, s[a]);
            (t && t(r, i[a])) || (i[a] = r);
          }
        } else n && n(i[a]);
      for (; a < l; a += 1) i[a] = e.apply(this, s[a]);
      return (r = s), i.splice(l), i;
    };
  }
  function $t(e, t, n) {
    let r = {},
      i = {};
    return (s) => {
      let o = {};
      for (let l in s)
        if (i[l])
          if (Dt(r[l], s[l])) o[l] = i[l];
          else {
            n && n(i[l]);
            let r = e.apply(this, s[l]);
            o[l] = t && t(r, i[l]) ? i[l] : r;
          }
        else o[l] = e.apply(this, s[l]);
      return (r = s), (i = o), o;
    };
  }
  const Jt = { week: 3, separator: 0, omitZeroMinute: 0, meridiem: 0, omitCommas: 0 },
    Kt = { timeZoneName: 7, era: 6, year: 5, month: 4, day: 2, weekday: 2, hour: 1, minute: 1, second: 1 },
    en = /\s*([ap])\.?m\.?/i,
    tn = /,/g,
    nn = /\s+/g,
    rn = /\u200e/g,
    sn = /UTC|GMT/;
  class on {
    constructor(e) {
      let t = {},
        n = {},
        r = 0;
      for (let i in e)
        i in Jt ? ((n[i] = e[i]), (r = Math.max(Jt[i], r))) : ((t[i] = e[i]), i in Kt && (r = Math.max(Kt[i], r)));
      (this.standardDateProps = t),
        (this.extendedSettings = n),
        (this.severity = r),
        (this.buildFormattingFunc = Qt(ln));
    }
    format(e, t) {
      return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e);
    }
    formatRange(e, t, n, r) {
      let { standardDateProps: i, extendedSettings: s } = this,
        o = (function (e, t, n) {
          if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
          if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
          if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
          if (Ut(e) !== Ut(t)) return 1;
          return 0;
        })(e.marker, t.marker, n.calendarSystem);
      if (!o) return this.format(e, n);
      let l = o;
      !(l > 1) ||
        ('numeric' !== i.year && '2-digit' !== i.year) ||
        ('numeric' !== i.month && '2-digit' !== i.month) ||
        ('numeric' !== i.day && '2-digit' !== i.day) ||
        (l = 1);
      let a = this.format(e, n),
        c = this.format(t, n);
      if (a === c) return a;
      let d = ln(
          (function (e, t) {
            let n = {};
            for (let r in e) (!(r in Kt) || Kt[r] <= t) && (n[r] = e[r]);
            return n;
          })(i, l),
          s,
          n,
        ),
        u = d(e),
        h = d(t),
        f = (function (e, t, n, r) {
          let i = 0;
          for (; i < e.length; ) {
            let s = e.indexOf(t, i);
            if (-1 === s) break;
            let o = e.substr(0, s);
            i = s + t.length;
            let l = e.substr(i),
              a = 0;
            for (; a < n.length; ) {
              let e = n.indexOf(r, a);
              if (-1 === e) break;
              let t = n.substr(0, e);
              a = e + r.length;
              let i = n.substr(a);
              if (o === t && l === i) return { before: o, after: l };
            }
          }
          return null;
        })(a, u, c, h),
        p = s.separator || r || n.defaultSeparator || '';
      return f ? f.before + u + p + h + f.after : a + p + c;
    }
    getLargestUnit() {
      switch (this.severity) {
        case 7:
        case 6:
        case 5:
          return 'year';
        case 4:
          return 'month';
        case 3:
          return 'week';
        case 2:
          return 'day';
        default:
          return 'time';
      }
    }
  }
  function ln(e, t, n) {
    let r = Object.keys(e).length;
    return 1 === r && 'short' === e.timeZoneName
      ? (e) => Yt(e.timeZoneOffset)
      : 0 === r && t.week
        ? (e) =>
            (function (e, t, n, r, i) {
              let s = [];
              'long' === i ? s.push(n) : ('short' !== i && 'narrow' !== i) || s.push(t);
              ('long' !== i && 'short' !== i) || s.push(' ');
              s.push(r.simpleNumberFormat.format(e)), 'rtl' === r.options.direction && s.reverse();
              return s.join('');
            })(n.computeWeekNumber(e.marker), n.weekText, n.weekTextLong, n.locale, t.week)
        : (function (e, t, n) {
            (e = Object.assign({}, e)),
              (t = Object.assign({}, t)),
              (function (e, t) {
                e.timeZoneName && (e.hour || (e.hour = '2-digit'), e.minute || (e.minute = '2-digit'));
                'long' === e.timeZoneName && (e.timeZoneName = 'short');
                t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute;
              })(e, t),
              (e.timeZone = 'UTC');
            let r,
              i = new Intl.DateTimeFormat(n.locale.codes, e);
            if (t.omitZeroMinute) {
              let t = Object.assign({}, e);
              delete t.minute, (r = new Intl.DateTimeFormat(n.locale.codes, t));
            }
            return (s) => {
              let o,
                { marker: l } = s;
              return (
                (o = r && !l.getUTCMinutes() ? r : i),
                (function (e, t, n, r, i) {
                  (e = e.replace(rn, '')),
                    'short' === n.timeZoneName &&
                      (e = (function (e, t) {
                        let n = !1;
                        (e = e.replace(sn, () => ((n = !0), t))), n || (e += ' ' + t);
                        return e;
                      })(e, 'UTC' === i.timeZone || null == t.timeZoneOffset ? 'UTC' : Yt(t.timeZoneOffset)));
                  r.omitCommas && (e = e.replace(tn, '').trim());
                  r.omitZeroMinute && (e = e.replace(':00', ''));
                  !1 === r.meridiem
                    ? (e = e.replace(en, '').trim())
                    : 'narrow' === r.meridiem
                      ? (e = e.replace(en, (e, t) => t.toLocaleLowerCase()))
                      : 'short' === r.meridiem
                        ? (e = e.replace(en, (e, t) => t.toLocaleLowerCase() + 'm'))
                        : 'lowercase' === r.meridiem && (e = e.replace(en, (e) => e.toLocaleLowerCase()));
                  return (e = (e = e.replace(nn, ' ')).trim());
                })(o.format(l), s, e, t, n)
              );
            };
          })(e, t, n);
  }
  function an(e, t) {
    let n = t.markerToArray(e.marker);
    return {
      marker: e.marker,
      timeZoneOffset: e.timeZoneOffset,
      array: n,
      year: n[0],
      month: n[1],
      day: n[2],
      hour: n[3],
      minute: n[4],
      second: n[5],
      millisecond: n[6],
    };
  }
  function cn(e, t, n, r) {
    let i = an(e, n.calendarSystem);
    return {
      date: i,
      start: i,
      end: t ? an(t, n.calendarSystem) : null,
      timeZone: n.timeZone,
      localeCodes: n.locale.codes,
      defaultSeparator: r || n.defaultSeparator,
    };
  }
  class dn {
    constructor(e) {
      this.cmdStr = e;
    }
    format(e, t, n) {
      return t.cmdFormatter(this.cmdStr, cn(e, null, t, n));
    }
    formatRange(e, t, n, r) {
      return n.cmdFormatter(this.cmdStr, cn(e, t, n, r));
    }
  }
  class un {
    constructor(e) {
      this.func = e;
    }
    format(e, t, n) {
      return this.func(cn(e, null, t, n));
    }
    formatRange(e, t, n, r) {
      return this.func(cn(e, t, n, r));
    }
  }
  function hn(e) {
    return 'object' == typeof e && e
      ? new on(e)
      : 'string' == typeof e
        ? new dn(e)
        : 'function' == typeof e
          ? new un(e)
          : null;
  }
  const fn = {
      navLinkDayClick: wn,
      navLinkWeekClick: wn,
      duration: ht,
      bootstrapFontAwesome: wn,
      buttonIcons: wn,
      customButtons: wn,
      defaultAllDayEventDuration: ht,
      defaultTimedEventDuration: ht,
      nextDayThreshold: ht,
      scrollTime: ht,
      scrollTimeReset: Boolean,
      slotMinTime: ht,
      slotMaxTime: ht,
      dayPopoverFormat: hn,
      slotDuration: ht,
      snapDuration: ht,
      headerToolbar: wn,
      footerToolbar: wn,
      defaultRangeSeparator: String,
      titleRangeSeparator: String,
      forceEventDuration: Boolean,
      dayHeaders: Boolean,
      dayHeaderFormat: hn,
      dayHeaderClassNames: wn,
      dayHeaderContent: wn,
      dayHeaderDidMount: wn,
      dayHeaderWillUnmount: wn,
      dayCellClassNames: wn,
      dayCellContent: wn,
      dayCellDidMount: wn,
      dayCellWillUnmount: wn,
      initialView: String,
      aspectRatio: Number,
      weekends: Boolean,
      weekNumberCalculation: wn,
      weekNumbers: Boolean,
      weekNumberClassNames: wn,
      weekNumberContent: wn,
      weekNumberDidMount: wn,
      weekNumberWillUnmount: wn,
      editable: Boolean,
      viewClassNames: wn,
      viewDidMount: wn,
      viewWillUnmount: wn,
      nowIndicator: Boolean,
      nowIndicatorClassNames: wn,
      nowIndicatorContent: wn,
      nowIndicatorDidMount: wn,
      nowIndicatorWillUnmount: wn,
      showNonCurrentDates: Boolean,
      lazyFetching: Boolean,
      startParam: String,
      endParam: String,
      timeZoneParam: String,
      timeZone: String,
      locales: wn,
      locale: wn,
      themeSystem: String,
      dragRevertDuration: Number,
      dragScroll: Boolean,
      allDayMaintainDuration: Boolean,
      unselectAuto: Boolean,
      dropAccept: wn,
      eventOrder: tt,
      eventOrderStrict: Boolean,
      handleWindowResize: Boolean,
      windowResizeDelay: Number,
      longPressDelay: Number,
      eventDragMinDistance: Number,
      expandRows: Boolean,
      height: wn,
      contentHeight: wn,
      direction: String,
      weekNumberFormat: hn,
      eventResizableFromStart: Boolean,
      displayEventTime: Boolean,
      displayEventEnd: Boolean,
      weekText: String,
      weekTextLong: String,
      progressiveEventRendering: Boolean,
      businessHours: wn,
      initialDate: wn,
      now: wn,
      eventDataTransform: wn,
      stickyHeaderDates: wn,
      stickyFooterScrollbar: wn,
      viewHeight: wn,
      defaultAllDay: Boolean,
      eventSourceFailure: wn,
      eventSourceSuccess: wn,
      eventDisplay: String,
      eventStartEditable: Boolean,
      eventDurationEditable: Boolean,
      eventOverlap: wn,
      eventConstraint: wn,
      eventAllow: wn,
      eventBackgroundColor: String,
      eventBorderColor: String,
      eventTextColor: String,
      eventColor: String,
      eventClassNames: wn,
      eventContent: wn,
      eventDidMount: wn,
      eventWillUnmount: wn,
      selectConstraint: wn,
      selectOverlap: wn,
      selectAllow: wn,
      droppable: Boolean,
      unselectCancel: String,
      slotLabelFormat: wn,
      slotLaneClassNames: wn,
      slotLaneContent: wn,
      slotLaneDidMount: wn,
      slotLaneWillUnmount: wn,
      slotLabelClassNames: wn,
      slotLabelContent: wn,
      slotLabelDidMount: wn,
      slotLabelWillUnmount: wn,
      dayMaxEvents: wn,
      dayMaxEventRows: wn,
      dayMinWidth: Number,
      slotLabelInterval: ht,
      allDayText: String,
      allDayClassNames: wn,
      allDayContent: wn,
      allDayDidMount: wn,
      allDayWillUnmount: wn,
      slotMinWidth: Number,
      navLinks: Boolean,
      eventTimeFormat: hn,
      rerenderDelay: Number,
      moreLinkText: wn,
      moreLinkHint: wn,
      selectMinDistance: Number,
      selectable: Boolean,
      selectLongPressDelay: Number,
      eventLongPressDelay: Number,
      selectMirror: Boolean,
      eventMaxStack: Number,
      eventMinHeight: Number,
      eventMinWidth: Number,
      eventShortHeight: Number,
      slotEventOverlap: Boolean,
      plugins: wn,
      firstDay: Number,
      dayCount: Number,
      dateAlignment: String,
      dateIncrement: ht,
      hiddenDays: wn,
      fixedWeekCount: Boolean,
      validRange: wn,
      visibleRange: wn,
      titleFormat: wn,
      eventInteractive: Boolean,
      noEventsText: String,
      viewHint: wn,
      navLinkHint: wn,
      closeHint: String,
      timeHint: String,
      eventHint: String,
      moreLinkClick: wn,
      moreLinkClassNames: wn,
      moreLinkContent: wn,
      moreLinkDidMount: wn,
      moreLinkWillUnmount: wn,
      monthStartFormat: hn,
      handleCustomRendering: wn,
      customRenderingMetaMap: wn,
      customRenderingReplaces: Boolean,
    },
    pn = {
      eventDisplay: 'auto',
      defaultRangeSeparator: ' - ',
      titleRangeSeparator: ' – ',
      defaultTimedEventDuration: '01:00:00',
      defaultAllDayEventDuration: { day: 1 },
      forceEventDuration: !1,
      nextDayThreshold: '00:00:00',
      dayHeaders: !0,
      initialView: '',
      aspectRatio: 1.35,
      headerToolbar: { start: 'title', center: '', end: 'today prev,next' },
      weekends: !0,
      weekNumbers: !1,
      weekNumberCalculation: 'local',
      editable: !1,
      nowIndicator: !1,
      scrollTime: '06:00:00',
      scrollTimeReset: !0,
      slotMinTime: '00:00:00',
      slotMaxTime: '24:00:00',
      showNonCurrentDates: !0,
      lazyFetching: !0,
      startParam: 'start',
      endParam: 'end',
      timeZoneParam: 'timeZone',
      timeZone: 'local',
      locales: [],
      locale: '',
      themeSystem: 'standard',
      dragRevertDuration: 500,
      dragScroll: !0,
      allDayMaintainDuration: !1,
      unselectAuto: !0,
      dropAccept: '*',
      eventOrder: 'start,-duration,allDay,title',
      dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
      handleWindowResize: !0,
      windowResizeDelay: 100,
      longPressDelay: 1e3,
      eventDragMinDistance: 5,
      expandRows: !1,
      navLinks: !1,
      selectable: !1,
      eventMinHeight: 15,
      eventMinWidth: 30,
      eventShortHeight: 30,
      monthStartFormat: { month: 'long', day: 'numeric' },
    },
    gn = {
      datesSet: wn,
      eventsSet: wn,
      eventAdd: wn,
      eventChange: wn,
      eventRemove: wn,
      windowResize: wn,
      eventClick: wn,
      eventMouseEnter: wn,
      eventMouseLeave: wn,
      select: wn,
      unselect: wn,
      loading: wn,
      _unmount: wn,
      _beforeprint: wn,
      _afterprint: wn,
      _noEventDrop: wn,
      _noEventResize: wn,
      _resize: wn,
      _scrollRequest: wn,
    },
    mn = { buttonText: wn, buttonHints: wn, views: wn, plugins: wn, initialEvents: wn, events: wn, eventSources: wn },
    vn = {
      headerToolbar: yn,
      footerToolbar: yn,
      buttonText: yn,
      buttonHints: yn,
      buttonIcons: yn,
      dateIncrement: yn,
      plugins: bn,
      events: bn,
      eventSources: bn,
      resources: bn,
    };
  function yn(e, t) {
    return 'object' == typeof e && 'object' == typeof t && e && t ? kn(e, t) : e === t;
  }
  function bn(e, t) {
    return Array.isArray(e) && Array.isArray(t) ? Dt(e, t) : e === t;
  }
  const Sn = {
    type: String,
    component: wn,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: wn,
    usesMinMaxTime: Boolean,
    classNames: wn,
    content: wn,
    didMount: wn,
    willUnmount: wn,
  };
  function En(e) {
    return Rn(e, vn);
  }
  function Cn(e, t) {
    let n = {},
      r = {};
    for (let r in t) r in e && (n[r] = t[r](e[r]));
    for (let n in e) n in t || (r[n] = e[n]);
    return { refined: n, extra: r };
  }
  function wn(e) {
    return e;
  }
  const { hasOwnProperty: Dn } = Object.prototype;
  function Rn(e, t) {
    let n = {};
    if (t)
      for (let r in t)
        if (t[r] === yn) {
          let t = [];
          for (let i = e.length - 1; i >= 0; i -= 1) {
            let s = e[i][r];
            if ('object' == typeof s && s) t.unshift(s);
            else if (void 0 !== s) {
              n[r] = s;
              break;
            }
          }
          t.length && (n[r] = Rn(t));
        }
    for (let t = e.length - 1; t >= 0; t -= 1) {
      let r = e[t];
      for (let e in r) e in n || (n[e] = r[e]);
    }
    return n;
  }
  function An(e, t) {
    let n = {};
    for (let r in e) t(e[r], r) && (n[r] = e[r]);
    return n;
  }
  function xn(e, t) {
    let n = {};
    for (let r in e) n[r] = t(e[r], r);
    return n;
  }
  function Tn(e) {
    let t = {};
    for (let n of e) t[n] = !0;
    return t;
  }
  function _n(e) {
    let t = [];
    for (let n in e) t.push(e[n]);
    return t;
  }
  function kn(e, t) {
    if (e === t) return !0;
    for (let n in e) if (Dn.call(e, n) && !(n in t)) return !1;
    for (let n in t) if (Dn.call(t, n) && e[n] !== t[n]) return !1;
    return !0;
  }
  const Mn = /^on[A-Z]/;
  function In(e, t) {
    let n = [];
    for (let r in e) Dn.call(e, r) && (r in t || n.push(r));
    for (let r in t) Dn.call(t, r) && e[r] !== t[r] && n.push(r);
    return n;
  }
  function On(e, t, n = {}) {
    if (e === t) return !0;
    for (let r in t) if (!(r in e) || !Nn(e[r], t[r], n[r])) return !1;
    for (let n in e) if (!(n in t)) return !1;
    return !0;
  }
  function Nn(e, t, n) {
    return e === t || !0 === n || (!!n && n(e, t));
  }
  function Pn(e, t = 0, n, r = 1) {
    let i = [];
    null == n && (n = Object.keys(e).length);
    for (let s = t; s < n; s += r) {
      let t = e[s];
      void 0 !== t && i.push(t);
    }
    return i;
  }
  let Hn = {};
  var Wn, Bn;
  (Wn = 'gregory'),
    (Bn = class {
      getMarkerYear(e) {
        return e.getUTCFullYear();
      }
      getMarkerMonth(e) {
        return e.getUTCMonth();
      }
      getMarkerDay(e) {
        return e.getUTCDate();
      }
      arrayToMarker(e) {
        return Lt(e);
      }
      markerToArray(e) {
        return jt(e);
      }
    }),
    (Hn[Wn] = Bn);
  const jn =
    /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
  function Ln(e) {
    let t = jn.exec(e);
    if (t) {
      let e = new Date(
        Date.UTC(
          Number(t[1]),
          t[3] ? Number(t[3]) - 1 : 0,
          Number(t[5] || 1),
          Number(t[7] || 0),
          Number(t[8] || 0),
          Number(t[10] || 0),
          t[12] ? 1e3 * Number('0.' + t[12]) : 0,
        ),
      );
      if (zt(e)) {
        let n = null;
        return (
          t[13] && (n = ('-' === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))),
          { marker: e, isTimeUnspecified: !t[6], timeZoneOffset: n }
        );
      }
    }
    return null;
  }
  class zn {
    constructor(e) {
      let t = (this.timeZone = e.timeZone),
        n = 'local' !== t && 'UTC' !== t;
      e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)),
        (this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl)),
        (this.calendarSystem = (function (e) {
          return new Hn[e]();
        })(e.calendarSystem)),
        (this.locale = e.locale),
        (this.weekDow = e.locale.week.dow),
        (this.weekDoy = e.locale.week.doy),
        'ISO' === e.weekNumberCalculation && ((this.weekDow = 1), (this.weekDoy = 4)),
        'number' == typeof e.firstDay && (this.weekDow = e.firstDay),
        'function' == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation),
        (this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText),
        (this.weekTextLong =
          (null != e.weekTextLong ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText),
        (this.cmdFormatter = e.cmdFormatter),
        (this.defaultSeparator = e.defaultSeparator);
    }
    createMarker(e) {
      let t = this.createMarkerMeta(e);
      return null === t ? null : t.marker;
    }
    createNowMarker() {
      return this.canComputeOffset ? this.timestampToMarker(new Date().valueOf()) : Lt(Wt(new Date()));
    }
    createMarkerMeta(e) {
      if ('string' == typeof e) return this.parse(e);
      let t = null;
      return (
        'number' == typeof e
          ? (t = this.timestampToMarker(e))
          : e instanceof Date
            ? ((e = e.valueOf()), isNaN(e) || (t = this.timestampToMarker(e)))
            : Array.isArray(e) && (t = Lt(e)),
        null !== t && zt(t) ? { marker: t, isTimeUnspecified: !1, forcedTzo: null } : null
      );
    }
    parse(e) {
      let t = Ln(e);
      if (null === t) return null;
      let { marker: n } = t,
        r = null;
      return (
        null !== t.timeZoneOffset &&
          (this.canComputeOffset
            ? (n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3))
            : (r = t.timeZoneOffset)),
        { marker: n, isTimeUnspecified: t.isTimeUnspecified, forcedTzo: r }
      );
    }
    getYear(e) {
      return this.calendarSystem.getMarkerYear(e);
    }
    getMonth(e) {
      return this.calendarSystem.getMarkerMonth(e);
    }
    getDay(e) {
      return this.calendarSystem.getMarkerDay(e);
    }
    add(e, t) {
      let n = this.calendarSystem.markerToArray(e);
      return (
        (n[0] += t.years),
        (n[1] += t.months),
        (n[2] += t.days),
        (n[6] += t.milliseconds),
        this.calendarSystem.arrayToMarker(n)
      );
    }
    subtract(e, t) {
      let n = this.calendarSystem.markerToArray(e);
      return (
        (n[0] -= t.years),
        (n[1] -= t.months),
        (n[2] -= t.days),
        (n[6] -= t.milliseconds),
        this.calendarSystem.arrayToMarker(n)
      );
    }
    addYears(e, t) {
      let n = this.calendarSystem.markerToArray(e);
      return (n[0] += t), this.calendarSystem.arrayToMarker(n);
    }
    addMonths(e, t) {
      let n = this.calendarSystem.markerToArray(e);
      return (n[1] += t), this.calendarSystem.arrayToMarker(n);
    }
    diffWholeYears(e, t) {
      let { calendarSystem: n } = this;
      return Ut(e) === Ut(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t)
        ? n.getMarkerYear(t) - n.getMarkerYear(e)
        : null;
    }
    diffWholeMonths(e, t) {
      let { calendarSystem: n } = this;
      return Ut(e) === Ut(t) && n.getMarkerDay(e) === n.getMarkerDay(t)
        ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e))
        : null;
    }
    greatestWholeUnit(e, t) {
      let n = this.diffWholeYears(e, t);
      return null !== n
        ? { unit: 'year', value: n }
        : ((n = this.diffWholeMonths(e, t)),
          null !== n
            ? { unit: 'month', value: n }
            : ((n = It(e, t)),
              null !== n
                ? { unit: 'week', value: n }
                : ((n = Ot(e, t)),
                  null !== n
                    ? { unit: 'day', value: n }
                    : ((n = (function (e, t) {
                        return (t.valueOf() - e.valueOf()) / 36e5;
                      })(e, t)),
                      at(n)
                        ? { unit: 'hour', value: n }
                        : ((n = (function (e, t) {
                            return (t.valueOf() - e.valueOf()) / 6e4;
                          })(e, t)),
                          at(n)
                            ? { unit: 'minute', value: n }
                            : ((n = (function (e, t) {
                                return (t.valueOf() - e.valueOf()) / 1e3;
                              })(e, t)),
                              at(n)
                                ? { unit: 'second', value: n }
                                : { unit: 'millisecond', value: t.valueOf() - e.valueOf() }))))));
    }
    countDurationsBetween(e, t, n) {
      let r;
      return n.years && ((r = this.diffWholeYears(e, t)), null !== r)
        ? r / (vt(n) / 365)
        : n.months && ((r = this.diffWholeMonths(e, t)), null !== r)
          ? r /
            (function (e) {
              return vt(e) / 30;
            })(n)
          : n.days && ((r = Ot(e, t)), null !== r)
            ? r / vt(n)
            : (t.valueOf() - e.valueOf()) / St(n);
    }
    startOf(e, t) {
      return 'year' === t
        ? this.startOfYear(e)
        : 'month' === t
          ? this.startOfMonth(e)
          : 'week' === t
            ? this.startOfWeek(e)
            : 'day' === t
              ? Nt(e)
              : 'hour' === t
                ? (function (e) {
                    return Lt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()]);
                  })(e)
                : 'minute' === t
                  ? (function (e) {
                      return Lt([
                        e.getUTCFullYear(),
                        e.getUTCMonth(),
                        e.getUTCDate(),
                        e.getUTCHours(),
                        e.getUTCMinutes(),
                      ]);
                    })(e)
                  : 'second' === t
                    ? (function (e) {
                        return Lt([
                          e.getUTCFullYear(),
                          e.getUTCMonth(),
                          e.getUTCDate(),
                          e.getUTCHours(),
                          e.getUTCMinutes(),
                          e.getUTCSeconds(),
                        ]);
                      })(e)
                    : null;
    }
    startOfYear(e) {
      return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)]);
    }
    startOfMonth(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
      ]);
    }
    startOfWeek(e) {
      return this.calendarSystem.arrayToMarker([
        this.calendarSystem.getMarkerYear(e),
        this.calendarSystem.getMarkerMonth(e),
        e.getUTCDate() - ((e.getUTCDay() - this.weekDow + 7) % 7),
      ]);
    }
    computeWeekNumber(e) {
      return this.weekNumberFunc
        ? this.weekNumberFunc(this.toDate(e))
        : (function (e, t, n) {
            let r = e.getUTCFullYear(),
              i = Pt(e, r, t, n);
            if (i < 1) return Pt(e, r - 1, t, n);
            let s = Pt(e, r + 1, t, n);
            return s >= 1 ? Math.min(i, s) : i;
          })(e, this.weekDow, this.weekDoy);
    }
    format(e, t, n = {}) {
      return t.format({ marker: e, timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e) }, this);
    }
    formatRange(e, t, n, r = {}) {
      return (
        r.isEndExclusive && (t = Tt(t, -1)),
        n.formatRange(
          { marker: e, timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e) },
          { marker: t, timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t) },
          this,
          r.defaultSeparator,
        )
      );
    }
    formatIso(e, t = {}) {
      let n = null;
      return (
        t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), Gt(e, n, t.omitTime)
      );
    }
    timestampToMarker(e) {
      return 'local' === this.timeZone
        ? Lt(Wt(new Date(e)))
        : 'UTC' !== this.timeZone && this.namedTimeZoneImpl
          ? Lt(this.namedTimeZoneImpl.timestampToArray(e))
          : new Date(e);
    }
    offsetForMarker(e) {
      return 'local' === this.timeZone
        ? -Bt(jt(e)).getTimezoneOffset()
        : 'UTC' === this.timeZone
          ? 0
          : this.namedTimeZoneImpl
            ? this.namedTimeZoneImpl.offsetForArray(jt(e))
            : null;
    }
    toDate(e, t) {
      return 'local' === this.timeZone
        ? Bt(jt(e))
        : 'UTC' === this.timeZone
          ? new Date(e.valueOf())
          : this.namedTimeZoneImpl
            ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(jt(e)) * 60)
            : new Date(e.valueOf() - (t || 0));
    }
  }
  class Un {
    constructor(e) {
      this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption]);
    }
    setIconOverride(e) {
      let t, n;
      if ('object' == typeof e && e) {
        for (n in ((t = Object.assign({}, this.iconClasses)), e)) t[n] = this.applyIconOverridePrefix(e[n]);
        this.iconClasses = t;
      } else !1 === e && (this.iconClasses = {});
    }
    applyIconOverridePrefix(e) {
      let t = this.iconOverridePrefix;
      return t && 0 !== e.indexOf(t) && (e = t + e), e;
    }
    getClass(e) {
      return this.classes[e] || '';
    }
    getIconClass(e, t) {
      let n;
      return (
        (n = (t && this.rtlIconClasses && this.rtlIconClasses[e]) || this.iconClasses[e]),
        n ? `${this.baseIconClass} ${n}` : ''
      );
    }
    getCustomButtonIconClass(e) {
      let t;
      return this.iconOverrideCustomButtonOption && ((t = e[this.iconOverrideCustomButtonOption]), t)
        ? `${this.baseIconClass} ${this.applyIconOverridePrefix(t)}`
        : '';
    }
  }
  function Gn(e) {
    e();
    let t = n.debounceRendering,
      r = [];
    for (
      n.debounceRendering = function (e) {
        r.push(e);
      },
        j(g(Fn, {}), document.createElement('div'));
      r.length;

    )
      r.shift()();
    n.debounceRendering = t;
  }
  (Un.prototype.classes = {}),
    (Un.prototype.iconClasses = {}),
    (Un.prototype.baseIconClass = ''),
    (Un.prototype.iconOverridePrefix = '');
  class Fn extends C {
    render() {
      return g('div', {});
    }
    componentDidMount() {
      this.setState({});
    }
  }
  function Vn(e) {
    let t = (function (e, t) {
        var n = {
          __c: (t = '__cC' + c++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = []),
                ((r = {})[t] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    n.some(function (e) {
                      (e.__e = !0), A(e);
                    });
                }),
                (this.sub = function (e) {
                  n.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    n.splice(n.indexOf(e), 1), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      })(e),
      n = t.Provider;
    return (
      (t.Provider = function () {
        let e = !this.getChildContext,
          t = n.apply(this, arguments);
        if (e) {
          let e = [];
          (this.shouldComponentUpdate = (t) => {
            this.props.value !== t.value &&
              e.forEach((e) => {
                (e.context = t.value), e.forceUpdate();
              });
          }),
            (this.sub = (t) => {
              e.push(t);
              let n = t.componentWillUnmount;
              t.componentWillUnmount = () => {
                e.splice(e.indexOf(t), 1), n && n.call(t);
              };
            });
        }
        return t;
      }),
      t
    );
  }
  class qn {
    constructor(e, t, n, r) {
      (this.execFunc = e),
        (this.emitter = t),
        (this.scrollTime = n),
        (this.scrollTimeReset = r),
        (this.handleScrollRequest = (e) => {
          (this.queuedRequest = Object.assign({}, this.queuedRequest || {}, e)), this.drain();
        }),
        t.on('_scrollRequest', this.handleScrollRequest),
        this.fireInitialScroll();
    }
    detach() {
      this.emitter.off('_scrollRequest', this.handleScrollRequest);
    }
    update(e) {
      e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain();
    }
    fireInitialScroll() {
      this.handleScrollRequest({ time: this.scrollTime });
    }
    drain() {
      this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null);
    }
  }
  const Yn = Vn({});
  function Qn(e, t, n, r, i, s, o, l, a, c, d, u, h) {
    return {
      dateEnv: i,
      options: n,
      pluginHooks: o,
      emitter: c,
      dispatch: l,
      getCurrentData: a,
      calendarApi: d,
      viewSpec: e,
      viewApi: t,
      dateProfileGenerator: r,
      theme: s,
      isRtl: 'rtl' === n.direction,
      addResizeHandler(e) {
        c.on('_resize', e);
      },
      removeResizeHandler(e) {
        c.off('_resize', e);
      },
      createScrollResponder: (e) => new qn(e, c, ht(n.scrollTime), n.scrollTimeReset),
      registerInteractiveComponent: u,
      unregisterInteractiveComponent: h,
    };
  }
  class Zn extends C {
    shouldComponentUpdate(e, t) {
      return (
        this.debug && console.log(In(e, this.props), In(t, this.state)),
        !On(this.props, e, this.propEquality) || !On(this.state, t, this.stateEquality)
      );
    }
    safeSetState(e) {
      On(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e);
    }
  }
  (Zn.addPropsEquality = function (e) {
    let t = Object.create(this.prototype.propEquality);
    Object.assign(t, e), (this.prototype.propEquality = t);
  }),
    (Zn.addStateEquality = function (e) {
      let t = Object.create(this.prototype.stateEquality);
      Object.assign(t, e), (this.prototype.stateEquality = t);
    }),
    (Zn.contextType = Yn),
    (Zn.prototype.propEquality = {}),
    (Zn.prototype.stateEquality = {});
  class Xn extends Zn {}
  function $n(e, t) {
    'function' == typeof e ? e(t) : e && (e.current = t);
  }
  Xn.contextType = Yn;
  class Jn extends Xn {
    constructor() {
      super(...arguments),
        (this.id = Qe()),
        (this.queuedDomNodes = []),
        (this.currentDomNodes = []),
        (this.handleEl = (e) => {
          const { options: t } = this.context,
            { generatorName: n } = this.props;
          (t.customRenderingReplaces && Kn(n, t)) || this.updateElRef(e);
        }),
        (this.updateElRef = (e) => {
          this.props.elRef && $n(this.props.elRef, e);
        });
    }
    render() {
      const { props: e, context: t } = this,
        { options: n } = t,
        { customGenerator: r, defaultGenerator: s, renderProps: o } = e,
        l = er(e, [], this.handleEl);
      let a,
        c,
        d = !1,
        u = [];
      if (null != r) {
        const e = 'function' == typeof r ? r(o, g) : r;
        if (!0 === e) d = !0;
        else {
          const t = e && 'object' == typeof e;
          t && 'html' in e
            ? (l.dangerouslySetInnerHTML = { __html: e.html })
            : t && 'domNodes' in e
              ? (u = Array.prototype.slice.call(e.domNodes))
              : (t ? i(e) : 'function' != typeof e)
                ? (a = e)
                : (c = e);
        }
      } else d = !Kn(e.generatorName, n);
      return d && s && (a = s(o)), (this.queuedDomNodes = u), (this.currentGeneratorMeta = c), g(e.elTag, l, a);
    }
    componentDidMount() {
      this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
    }
    componentDidUpdate() {
      this.applyQueueudDomNodes(), this.triggerCustomRendering(!0);
    }
    componentWillUnmount() {
      this.triggerCustomRendering(!1);
    }
    triggerCustomRendering(e) {
      var t;
      const { props: n, context: r } = this,
        { handleCustomRendering: i, customRenderingMetaMap: s } = r.options;
      if (i) {
        const r =
          null !== (t = this.currentGeneratorMeta) && void 0 !== t ? t : null == s ? void 0 : s[n.generatorName];
        r &&
          i(
            Object.assign(
              Object.assign(
                {
                  id: this.id,
                  isActive: e,
                  containerEl: this.base,
                  reportNewContainerEl: this.updateElRef,
                  generatorMeta: r,
                },
                n,
              ),
              { elClasses: (n.elClasses || []).filter(tr) },
            ),
          );
      }
    }
    applyQueueudDomNodes() {
      const { queuedDomNodes: e, currentDomNodes: t } = this,
        n = this.base;
      if (!Dt(e, t)) {
        t.forEach(ke);
        for (let t of e) n.appendChild(t);
        this.currentDomNodes = e;
      }
    }
  }
  function Kn(e, t) {
    var n;
    return Boolean(
      t.handleCustomRendering && e && (null === (n = t.customRenderingMetaMap) || void 0 === n ? void 0 : n[e]),
    );
  }
  function er(e, t, n) {
    const r = Object.assign(Object.assign({}, e.elAttrs), { ref: n });
    return (
      (e.elClasses || t) &&
        (r.className = (e.elClasses || [])
          .concat(t || [])
          .concat(r.className || [])
          .filter(Boolean)
          .join(' ')),
      e.elStyle && (r.style = e.elStyle),
      r
    );
  }
  function tr(e) {
    return Boolean(e);
  }
  Jn.addPropsEquality({
    elClasses: Dt,
    elStyle: kn,
    elAttrs: function (e, t) {
      const n = In(e, t);
      for (let e of n) if (!Mn.test(e)) return !1;
      return !0;
    },
    renderProps: kn,
  });
  const nr = Vn(0);
  class rr extends C {
    constructor() {
      super(...arguments),
        (this.InnerContent = ir.bind(void 0, this)),
        (this.handleEl = (e) => {
          (this.el = e),
            this.props.elRef && ($n(this.props.elRef, e), e && this.didMountMisfire && this.componentDidMount());
        });
    }
    render() {
      const { props: e } = this,
        t = (function (e, t) {
          const n = 'function' == typeof e ? e(t) : e || [];
          return 'string' == typeof n ? [n] : n;
        })(e.classNameGenerator, e.renderProps);
      if (e.children) {
        const n = er(e, t, this.handleEl),
          r = e.children(this.InnerContent, e.renderProps, n);
        return e.elTag ? g(e.elTag, n, r) : r;
      }
      return g(
        Jn,
        Object.assign(Object.assign({}, e), {
          elRef: this.handleEl,
          elTag: e.elTag || 'div',
          elClasses: (e.elClasses || []).concat(t),
          renderId: this.context,
        }),
      );
    }
    componentDidMount() {
      var e, t;
      this.el
        ? null === (t = (e = this.props).didMount) ||
          void 0 === t ||
          t.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }))
        : (this.didMountMisfire = !0);
    }
    componentWillUnmount() {
      var e, t;
      null === (t = (e = this.props).willUnmount) ||
        void 0 === t ||
        t.call(e, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
    }
  }
  function ir(e, t) {
    const n = e.props;
    return g(
      Jn,
      Object.assign(
        {
          renderProps: n.renderProps,
          generatorName: n.generatorName,
          customGenerator: n.customGenerator,
          defaultGenerator: n.defaultGenerator,
          renderId: e.context,
        },
        t,
      ),
    );
  }
  rr.contextType = nr;
  class sr extends Xn {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        r = { view: t.viewApi };
      return g(
        rr,
        Object.assign({}, e, {
          elTag: e.elTag || 'div',
          elClasses: [...or(e.viewSpec), ...(e.elClasses || [])],
          renderProps: r,
          classNameGenerator: n.viewClassNames,
          generatorName: void 0,
          didMount: n.viewDidMount,
          willUnmount: n.viewWillUnmount,
        }),
        () => e.children,
      );
    }
  }
  function or(e) {
    return [`fc-${e.type}-view`, 'fc-view'];
  }
  function lr(e, t) {
    let n,
      r,
      i = [],
      { start: s } = t;
    for (e.sort(ar), n = 0; n < e.length; n += 1)
      (r = e[n]), r.start > s && i.push({ start: s, end: r.start }), r.end > s && (s = r.end);
    return s < t.end && i.push({ start: s, end: t.end }), i;
  }
  function ar(e, t) {
    return e.start.valueOf() - t.start.valueOf();
  }
  function cr(e, t) {
    let { start: n, end: r } = e,
      i = null;
    return (
      null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))),
      null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))),
      (null === n || null === r || n < r) && (i = { start: n, end: r }),
      i
    );
  }
  function dr(e, t) {
    return (
      (null === e.start ? null : e.start.valueOf()) === (null === t.start ? null : t.start.valueOf()) &&
      (null === e.end ? null : e.end.valueOf()) === (null === t.end ? null : t.end.valueOf())
    );
  }
  function ur(e, t) {
    return (
      (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
    );
  }
  function hr(e, t) {
    return (
      (null === e.start || (null !== t.start && t.start >= e.start)) &&
      (null === e.end || (null !== t.end && t.end <= e.end))
    );
  }
  function fr(e, t) {
    return (null === e.start || t >= e.start) && (null === e.end || t < e.end);
  }
  function pr(e) {
    let t = Math.floor(kt(e.start, e.end)) || 1,
      n = Nt(e.start);
    return { start: n, end: xt(n, t) };
  }
  function gr(e, t = ht(0)) {
    let n = null,
      r = null;
    if (e.end) {
      r = Nt(e.end);
      let n = e.end.valueOf() - r.valueOf();
      n && n >= St(t) && (r = xt(r, 1));
    }
    return e.start && ((n = Nt(e.start)), r && r <= n && (r = xt(n, 1))), { start: n, end: r };
  }
  function mr(e) {
    let t = gr(e);
    return kt(t.start, t.end) > 1;
  }
  function vr(e, t, n, r) {
    return 'year' === r
      ? ht(n.diffWholeYears(e, t), 'year')
      : 'month' === r
        ? ht(n.diffWholeMonths(e, t), 'month')
        : Mt(e, t);
  }
  function yr(e, t) {
    return 'function' == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e);
  }
  class br {
    constructor(e) {
      (this.props = e), (this.nowDate = yr(e.nowInput, e.dateEnv)), this.initHiddenDays();
    }
    buildPrev(e, t, n) {
      let { dateEnv: r } = this.props,
        i = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
      return this.build(i, -1, n);
    }
    buildNext(e, t, n) {
      let { dateEnv: r } = this.props,
        i = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
      return this.build(i, 1, n);
    }
    build(e, t, n = !0) {
      let r,
        i,
        s,
        o,
        l,
        a,
        { props: c } = this;
      var d, u;
      return (
        (r = this.buildValidRange()),
        (r = this.trimHiddenDays(r)),
        n &&
          ((d = e),
          (e =
            null != (u = r).start && d < u.start
              ? u.start
              : null != u.end && d >= u.end
                ? new Date(u.end.valueOf() - 1)
                : d)),
        (i = this.buildCurrentRangeInfo(e, t)),
        (s = /^(year|month|week|day)$/.test(i.unit)),
        (o = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, s)),
        (o = this.trimHiddenDays(o)),
        (l = o),
        c.showNonCurrentDates || (l = cr(l, i.range)),
        (l = this.adjustActiveRange(l)),
        (l = cr(l, r)),
        (a = ur(i.range, r)),
        fr(o, e) || (e = o.start),
        {
          currentDate: e,
          validRange: r,
          currentRange: i.range,
          currentRangeUnit: i.unit,
          isRangeAllDay: s,
          activeRange: l,
          renderRange: o,
          slotMinTime: c.slotMinTime,
          slotMaxTime: c.slotMaxTime,
          isValid: a,
          dateIncrement: this.buildDateIncrement(i.duration),
        }
      );
    }
    buildValidRange() {
      let e = this.props.validRangeInput,
        t = 'function' == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
      return this.refineRange(t) || { start: null, end: null };
    }
    buildCurrentRangeInfo(e, t) {
      let n,
        { props: r } = this,
        i = null,
        s = null,
        o = null;
      return (
        r.duration
          ? ((i = r.duration), (s = r.durationUnit), (o = this.buildRangeFromDuration(e, t, i, s)))
          : (n = this.props.dayCount)
            ? ((s = 'day'), (o = this.buildRangeFromDayCount(e, t, n)))
            : (o = this.buildCustomVisibleRange(e))
              ? (s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit)
              : ((i = this.getFallbackDuration()), (s = Ct(i).unit), (o = this.buildRangeFromDuration(e, t, i, s))),
        { duration: i, unit: s, range: o }
      );
    }
    getFallbackDuration() {
      return ht({ day: 1 });
    }
    adjustActiveRange(e) {
      let { dateEnv: t, usesMinMaxTime: n, slotMinTime: r, slotMaxTime: i } = this.props,
        { start: s, end: o } = e;
      return (
        n &&
          (vt(r) < 0 && ((s = Nt(s)), (s = t.add(s, r))),
          vt(i) > 1 && ((o = Nt(o)), (o = xt(o, -1)), (o = t.add(o, i)))),
        { start: s, end: o }
      );
    }
    buildRangeFromDuration(e, t, n, r) {
      let i,
        s,
        o,
        { dateEnv: l, dateAlignment: a } = this.props;
      if (!a) {
        let { dateIncrement: e } = this.props;
        a = e && St(e) < St(n) ? Ct(e).unit : r;
      }
      function c() {
        (i = l.startOf(e, a)), (s = l.add(i, n)), (o = { start: i, end: s });
      }
      return (
        vt(n) <= 1 && this.isHiddenDay(i) && ((i = this.skipHiddenDays(i, t)), (i = Nt(i))),
        c(),
        this.trimHiddenDays(o) || ((e = this.skipHiddenDays(e, t)), c()),
        o
      );
    }
    buildRangeFromDayCount(e, t, n) {
      let r,
        { dateEnv: i, dateAlignment: s } = this.props,
        o = 0,
        l = e;
      s && (l = i.startOf(l, s)), (l = Nt(l)), (l = this.skipHiddenDays(l, t)), (r = l);
      do {
        (r = xt(r, 1)), this.isHiddenDay(r) || (o += 1);
      } while (o < n);
      return { start: l, end: r };
    }
    buildCustomVisibleRange(e) {
      let { props: t } = this,
        n = t.visibleRangeInput,
        r = 'function' == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n,
        i = this.refineRange(r);
      return !i || (null != i.start && null != i.end) ? i : null;
    }
    buildRenderRange(e, t, n) {
      return e;
    }
    buildDateIncrement(e) {
      let t,
        { dateIncrement: n } = this.props;
      return n || ((t = this.props.dateAlignment) ? ht(1, t) : e || ht({ days: 1 }));
    }
    refineRange(e) {
      if (e) {
        let t = (function (e, t) {
          let n = null,
            r = null;
          return (
            e.start && (n = t.createMarker(e.start)),
            e.end && (r = t.createMarker(e.end)),
            n || r ? (n && r && r < n ? null : { start: n, end: r }) : null
          );
        })(e, this.props.dateEnv);
        return t && (t = gr(t)), t;
      }
      return null;
    }
    initHiddenDays() {
      let e,
        t = this.props.hiddenDays || [],
        n = [],
        r = 0;
      for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1) (n[e] = -1 !== t.indexOf(e)) || (r += 1);
      if (!r) throw new Error('invalid hiddenDays');
      this.isHiddenDayHash = n;
    }
    trimHiddenDays(e) {
      let { start: t, end: n } = e;
      return (
        t && (t = this.skipHiddenDays(t)),
        n && (n = this.skipHiddenDays(n, -1, !0)),
        null == t || null == n || t < n ? { start: t, end: n } : null
      );
    }
    isHiddenDay(e) {
      return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e];
    }
    skipHiddenDays(e, t = 1, n = !1) {
      for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7]; ) e = xt(e, t);
      return e;
    }
  }
  function Sr(e, t, n, r) {
    return {
      instanceId: Qe(),
      defId: e,
      range: t,
      forcedStartTzo: null == n ? null : n,
      forcedEndTzo: null == r ? null : r,
    };
  }
  function Er(e, t, n) {
    let { dateEnv: r, pluginHooks: i, options: s } = n,
      { defs: o, instances: l } = e;
    l = An(l, (e) => !o[e.defId].recurringDef);
    for (let e in o) {
      let n = o[e];
      if (n.recurringDef) {
        let { duration: o } = n.recurringDef;
        o || (o = n.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
        let a = Cr(n, o, t, r, i.recurringTypes);
        for (let t of a) {
          let n = Sr(e, { start: t, end: r.add(t, o) });
          l[n.instanceId] = n;
        }
      }
    }
    return { defs: o, instances: l };
  }
  function Cr(e, t, n, r, i) {
    let s = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, { start: r.subtract(n.start, t), end: n.end }, r);
    return e.allDay && (s = s.map(Nt)), s;
  }
  const wr = { id: String, groupId: String, title: String, url: String, interactive: Boolean },
    Dr = { start: wn, end: wn, date: wn, allDay: Boolean },
    Rr = Object.assign(Object.assign(Object.assign({}, wr), Dr), { extendedProps: wn });
  function Ar(e, t, n, r, i = Tr(n), s, o) {
    let { refined: l, extra: a } = xr(e, n, i),
      c = (function (e, t) {
        let n = null;
        e && (n = e.defaultAllDay);
        null == n && (n = t.options.defaultAllDay);
        return n;
      })(t, n),
      d = (function (e, t, n, r) {
        for (let i = 0; i < r.length; i += 1) {
          let s = r[i].parse(e, n);
          if (s) {
            let { allDay: n } = e;
            return (
              null == n && ((n = t), null == n && ((n = s.allDayGuess), null == n && (n = !1))),
              { allDay: n, duration: s.duration, typeData: s.typeData, typeId: i }
            );
          }
        }
        return null;
      })(l, c, n.dateEnv, n.pluginHooks.recurringTypes);
    if (d) {
      let e = _r(l, a, t ? t.sourceId : '', d.allDay, Boolean(d.duration), n, s);
      return (
        (e.recurringDef = { typeId: d.typeId, typeData: d.typeData, duration: d.duration }), { def: e, instance: null }
      );
    }
    let u = (function (e, t, n, r) {
      let i,
        s,
        { allDay: o } = e,
        l = null,
        a = !1,
        c = null,
        d = null != e.start ? e.start : e.date;
      if (((i = n.dateEnv.createMarkerMeta(d)), i)) l = i.marker;
      else if (!r) return null;
      null != e.end && (s = n.dateEnv.createMarkerMeta(e.end));
      null == o && (o = null != t ? t : (!i || i.isTimeUnspecified) && (!s || s.isTimeUnspecified));
      o && l && (l = Nt(l));
      s && ((c = s.marker), o && (c = Nt(c)), l && c <= l && (c = null));
      c
        ? (a = !0)
        : r ||
          ((a = n.options.forceEventDuration || !1),
          (c = n.dateEnv.add(l, o ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration)));
      return {
        allDay: o,
        hasEnd: a,
        range: { start: l, end: c },
        forcedStartTzo: i ? i.forcedTzo : null,
        forcedEndTzo: s ? s.forcedTzo : null,
      };
    })(l, c, n, r);
    if (u) {
      let e = _r(l, a, t ? t.sourceId : '', u.allDay, u.hasEnd, n, s),
        r = Sr(e.defId, u.range, u.forcedStartTzo, u.forcedEndTzo);
      return o && e.publicId && o[e.publicId] && (r.instanceId = o[e.publicId]), { def: e, instance: r };
    }
    return null;
  }
  function xr(e, t, n = Tr(t)) {
    return Cn(e, n);
  }
  function Tr(e) {
    return Object.assign(Object.assign(Object.assign({}, Wr), Rr), e.pluginHooks.eventRefiners);
  }
  function _r(e, t, n, r, i, s, o) {
    let l = {
      title: e.title || '',
      groupId: e.groupId || '',
      publicId: e.id || '',
      url: e.url || '',
      recurringDef: null,
      defId: (o && e.id ? o[e.id] : '') || Qe(),
      sourceId: n,
      allDay: r,
      hasEnd: i,
      interactive: e.interactive,
      ui: jr(e, s),
      extendedProps: Object.assign(Object.assign({}, e.extendedProps || {}), t),
    };
    for (let t of s.pluginHooks.eventDefMemberAdders) Object.assign(l, t(e));
    return Object.freeze(l.ui.classNames), Object.freeze(l.extendedProps), l;
  }
  function kr(e, t, n, r, i, s) {
    let o = { defs: {}, instances: {} },
      l = Tr(n);
    for (let a of e) {
      let e = Ar(a, t, n, r, l, i, s);
      e && Mr(e, o);
    }
    return o;
  }
  function Mr(e, t = { defs: {}, instances: {} }) {
    return (t.defs[e.def.defId] = e.def), e.instance && (t.instances[e.instance.instanceId] = e.instance), t;
  }
  function Ir(e, t) {
    let n = e.instances[t];
    if (n) {
      let t = e.defs[n.defId],
        r = Pr(e, (e) => {
          return (n = t), (r = e), Boolean(n.groupId && n.groupId === r.groupId);
          var n, r;
        });
      return (r.defs[t.defId] = t), (r.instances[n.instanceId] = n), r;
    }
    return { defs: {}, instances: {} };
  }
  function Or() {
    return { defs: {}, instances: {} };
  }
  function Nr(e, t) {
    return {
      defs: Object.assign(Object.assign({}, e.defs), t.defs),
      instances: Object.assign(Object.assign({}, e.instances), t.instances),
    };
  }
  function Pr(e, t) {
    let n = An(e.defs, t),
      r = An(e.instances, (e) => n[e.defId]);
    return { defs: n, instances: r };
  }
  function Hr(e) {
    return Array.isArray(e) ? e : 'string' == typeof e ? e.split(/\s+/) : [];
  }
  const Wr = {
      display: String,
      editable: Boolean,
      startEditable: Boolean,
      durationEditable: Boolean,
      constraint: wn,
      overlap: wn,
      allow: wn,
      className: Hr,
      classNames: Hr,
      color: String,
      backgroundColor: String,
      borderColor: String,
      textColor: String,
    },
    Br = {
      display: null,
      startEditable: null,
      durationEditable: null,
      constraints: [],
      overlap: null,
      allows: [],
      backgroundColor: '',
      borderColor: '',
      textColor: '',
      classNames: [],
    };
  function jr(e, t) {
    let n = (function (e, t) {
      return Array.isArray(e)
        ? kr(e, null, t, !0)
        : 'object' == typeof e && e
          ? kr([e], null, t, !0)
          : null != e
            ? String(e)
            : null;
    })(e.constraint, t);
    return {
      display: e.display || null,
      startEditable: null != e.startEditable ? e.startEditable : e.editable,
      durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
      constraints: null != n ? [n] : [],
      overlap: null != e.overlap ? e.overlap : null,
      allows: null != e.allow ? [e.allow] : [],
      backgroundColor: e.backgroundColor || e.color || '',
      borderColor: e.borderColor || e.color || '',
      textColor: e.textColor || '',
      classNames: (e.className || []).concat(e.classNames || []),
    };
  }
  function Lr(e) {
    return e.reduce(zr, Br);
  }
  function zr(e, t) {
    return {
      display: null != t.display ? t.display : e.display,
      startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
      durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
      constraints: e.constraints.concat(t.constraints),
      overlap: 'boolean' == typeof t.overlap ? t.overlap : e.overlap,
      allows: e.allows.concat(t.allows),
      backgroundColor: t.backgroundColor || e.backgroundColor,
      borderColor: t.borderColor || e.borderColor,
      textColor: t.textColor || e.textColor,
      classNames: e.classNames.concat(t.classNames),
    };
  }
  const Ur = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: wn,
    eventDataTransform: wn,
    success: wn,
    failure: wn,
  };
  function Gr(e, t, n = Fr(t)) {
    let r;
    if (
      ('string' == typeof e
        ? (r = { url: e })
        : 'function' == typeof e || Array.isArray(e)
          ? (r = { events: e })
          : 'object' == typeof e && e && (r = e),
      r)
    ) {
      let { refined: i, extra: s } = Cn(r, n),
        o = (function (e, t) {
          let n = t.pluginHooks.eventSourceDefs;
          for (let t = n.length - 1; t >= 0; t -= 1) {
            let r = n[t].parseMeta(e);
            if (r) return { sourceDefId: t, meta: r };
          }
          return null;
        })(i, t);
      if (o)
        return {
          _raw: e,
          isFetching: !1,
          latestFetchId: '',
          fetchRange: null,
          defaultAllDay: i.defaultAllDay,
          eventDataTransform: i.eventDataTransform,
          success: i.success,
          failure: i.failure,
          publicId: i.id || '',
          sourceId: Qe(),
          sourceDefId: o.sourceDefId,
          meta: o.meta,
          ui: jr(i, t),
          extendedProps: s,
        };
    }
    return null;
  }
  function Fr(e) {
    return Object.assign(Object.assign(Object.assign({}, Wr), Ur), e.pluginHooks.eventSourceRefiners);
  }
  function Vr(e, t, n, r, i) {
    switch (t.type) {
      case 'RECEIVE_EVENTS':
        return (function (e, t, n, r, i, s) {
          if (t && n === t.latestFetchId) {
            let n = kr(qr(i, t, s), t, s);
            return r && (n = Er(n, r, s)), Nr(Zr(e, t.sourceId), n);
          }
          return e;
        })(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
      case 'RESET_RAW_EVENTS':
        return (function (e, t, n, r, i) {
          const { defIdMap: s, instanceIdMap: o } = (function (e) {
            const { defs: t, instances: n } = e,
              r = {},
              i = {};
            for (let e in t) {
              const n = t[e],
                { publicId: i } = n;
              i && (r[i] = e);
            }
            for (let e in n) {
              const r = n[e],
                s = t[r.defId],
                { publicId: o } = s;
              o && (i[o] = e);
            }
            return { defIdMap: r, instanceIdMap: i };
          })(e);
          return Er(kr(qr(n, t, i), t, i, !1, s, o), r, i);
        })(e, n[t.sourceId], t.rawEvents, r.activeRange, i);
      case 'ADD_EVENTS':
        return (function (e, t, n, r) {
          n && (t = Er(t, n, r));
          return Nr(e, t);
        })(e, t.eventStore, r ? r.activeRange : null, i);
      case 'RESET_EVENTS':
        return t.eventStore;
      case 'MERGE_EVENTS':
        return Nr(e, t.eventStore);
      case 'PREV':
      case 'NEXT':
      case 'CHANGE_DATE':
      case 'CHANGE_VIEW_TYPE':
        return r ? Er(e, r.activeRange, i) : e;
      case 'REMOVE_EVENTS':
        return (function (e, t) {
          let { defs: n, instances: r } = e,
            i = {},
            s = {};
          for (let e in n) t.defs[e] || (i[e] = n[e]);
          for (let e in r) !t.instances[e] && i[r[e].defId] && (s[e] = r[e]);
          return { defs: i, instances: s };
        })(e, t.eventStore);
      case 'REMOVE_EVENT_SOURCE':
        return Zr(e, t.sourceId);
      case 'REMOVE_ALL_EVENT_SOURCES':
        return Pr(e, (e) => !e.sourceId);
      case 'REMOVE_ALL_EVENTS':
        return { defs: {}, instances: {} };
      default:
        return e;
    }
  }
  function qr(e, t, n) {
    let r = n.options.eventDataTransform,
      i = t ? t.eventDataTransform : null;
    return i && (e = Yr(e, i)), r && (e = Yr(e, r)), e;
  }
  function Yr(e, t) {
    let n;
    if (t) {
      n = [];
      for (let r of e) {
        let e = t(r);
        e ? n.push(e) : null == e && n.push(r);
      }
    } else n = e;
    return n;
  }
  function Qr(e, t, n) {
    let { defs: r } = e,
      i = xn(e.instances, (e) =>
        r[e.defId].allDay
          ? e
          : Object.assign(Object.assign({}, e), {
              range: {
                start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo)),
              },
              forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
              forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo,
            }),
      );
    return { defs: r, instances: i };
  }
  function Zr(e, t) {
    return Pr(e, (e) => e.sourceId !== t);
  }
  class Xr {
    constructor() {
      (this.handlers = {}), (this.thisContext = null);
    }
    setThisContext(e) {
      this.thisContext = e;
    }
    setOptions(e) {
      this.options = e;
    }
    on(e, t) {
      !(function (e, t, n) {
        (e[t] || (e[t] = [])).push(n);
      })(this.handlers, e, t);
    }
    off(e, t) {
      !(function (e, t, n) {
        n ? e[t] && (e[t] = e[t].filter((e) => e !== n)) : delete e[t];
      })(this.handlers, e, t);
    }
    trigger(e, ...t) {
      let n = this.handlers[e] || [],
        r = this.options && this.options[e],
        i = [].concat(r || [], n);
      for (let e of i) e.apply(this.thisContext, t);
    }
    hasHandlers(e) {
      return Boolean((this.handlers[e] && this.handlers[e].length) || (this.options && this.options[e]));
    }
  }
  const $r = {
    startTime: '09:00',
    endTime: '17:00',
    daysOfWeek: [1, 2, 3, 4, 5],
    display: 'inverse-background',
    classNames: 'fc-non-business',
    groupId: '_businessHours',
  };
  function Jr(e, t) {
    return kr(
      (function (e) {
        let t;
        t = !0 === e ? [{}] : Array.isArray(e) ? e.filter((e) => e.daysOfWeek) : 'object' == typeof e && e ? [e] : [];
        return (t = t.map((e) => Object.assign(Object.assign({}, $r), e))), t;
      })(e),
      null,
      t,
    );
  }
  function Kr(e, t, n) {
    n.emitter.trigger(
      'select',
      Object.assign(Object.assign({}, ei(e, n)), {
        jsEvent: t ? t.origEvent : null,
        view: n.viewApi || n.calendarApi.view,
      }),
    );
  }
  function ei(e, t) {
    let n = {};
    for (let r of t.pluginHooks.dateSpanTransforms) Object.assign(n, r(e, t));
    var r, i;
    return (
      Object.assign(
        n,
        ((r = e), (i = t.dateEnv), Object.assign(Object.assign({}, _i(r.range, i, r.allDay)), { allDay: r.allDay })),
      ),
      n
    );
  }
  function ti(e, t, n) {
    let { dateEnv: r, options: i } = n,
      s = t;
    return (
      e ? ((s = Nt(s)), (s = r.add(s, i.defaultAllDayEventDuration))) : (s = r.add(s, i.defaultTimedEventDuration)), s
    );
  }
  function ni(e, t, n, r) {
    let i = fi(e.defs, t),
      s = { defs: {}, instances: {} };
    for (let t in e.defs) {
      let o = e.defs[t];
      s.defs[t] = ri(o, i[t], n, r);
    }
    for (let t in e.instances) {
      let o = e.instances[t],
        l = s.defs[o.defId];
      s.instances[t] = ii(o, l, i[o.defId], n, r);
    }
    return s;
  }
  function ri(e, t, n, r) {
    let i = n.standardProps || {};
    null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
    let s = Object.assign(Object.assign(Object.assign({}, e), i), { ui: Object.assign(Object.assign({}, e.ui), i.ui) });
    n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
    for (let e of r.pluginHooks.eventDefMutationAppliers) e(s, n, r);
    return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s;
  }
  function ii(e, t, n, r, i) {
    let { dateEnv: s } = i,
      o = r.standardProps && !0 === r.standardProps.allDay,
      l = r.standardProps && !1 === r.standardProps.hasEnd,
      a = Object.assign({}, e);
    return (
      o && (a.range = pr(a.range)),
      r.datesDelta &&
        n.startEditable &&
        (a.range = { start: s.add(a.range.start, r.datesDelta), end: s.add(a.range.end, r.datesDelta) }),
      r.startDelta && n.durationEditable && (a.range = { start: s.add(a.range.start, r.startDelta), end: a.range.end }),
      r.endDelta && n.durationEditable && (a.range = { start: a.range.start, end: s.add(a.range.end, r.endDelta) }),
      l && (a.range = { start: a.range.start, end: ti(t.allDay, a.range.start, i) }),
      t.allDay && (a.range = { start: Nt(a.range.start), end: Nt(a.range.end) }),
      a.range.end < a.range.start && (a.range.end = ti(t.allDay, a.range.start, i)),
      a
    );
  }
  class si {
    constructor(e, t) {
      (this.context = e), (this.internalEventSource = t);
    }
    remove() {
      this.context.dispatch({ type: 'REMOVE_EVENT_SOURCE', sourceId: this.internalEventSource.sourceId });
    }
    refetch() {
      this.context.dispatch({
        type: 'FETCH_EVENT_SOURCES',
        sourceIds: [this.internalEventSource.sourceId],
        isRefetch: !0,
      });
    }
    get id() {
      return this.internalEventSource.publicId;
    }
    get url() {
      return this.internalEventSource.meta.url;
    }
    get format() {
      return this.internalEventSource.meta.format;
    }
  }
  class oi {
    constructor(e, t, n) {
      (this._context = e), (this._def = t), (this._instance = n || null);
    }
    setProp(e, t) {
      if (e in Dr) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
      else if ('id' === e) (t = wr[e](t)), this.mutate({ standardProps: { publicId: t } });
      else if (e in wr) (t = wr[e](t)), this.mutate({ standardProps: { [e]: t } });
      else if (e in Wr) {
        let n = Wr[e](t);
        (n =
          'color' === e
            ? { backgroundColor: t, borderColor: t }
            : 'editable' === e
              ? { startEditable: t, durationEditable: t }
              : { [e]: t }),
          this.mutate({ standardProps: { ui: n } });
      } else console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`);
    }
    setExtendedProp(e, t) {
      this.mutate({ extendedProps: { [e]: t } });
    }
    setStart(e, t = {}) {
      let { dateEnv: n } = this._context,
        r = n.createMarker(e);
      if (r && this._instance) {
        let e = vr(this._instance.range.start, r, n, t.granularity);
        t.maintainDuration ? this.mutate({ datesDelta: e }) : this.mutate({ startDelta: e });
      }
    }
    setEnd(e, t = {}) {
      let n,
        { dateEnv: r } = this._context;
      if ((null == e || ((n = r.createMarker(e)), n)) && this._instance)
        if (n) {
          let e = vr(this._instance.range.end, n, r, t.granularity);
          this.mutate({ endDelta: e });
        } else this.mutate({ standardProps: { hasEnd: !1 } });
    }
    setDates(e, t, n = {}) {
      let r,
        { dateEnv: i } = this._context,
        s = { allDay: n.allDay },
        o = i.createMarker(e);
      var l, a;
      if (o && (null == t || ((r = i.createMarker(t)), r)) && this._instance) {
        let e = this._instance.range;
        !0 === n.allDay && (e = pr(e));
        let t = vr(e.start, o, i, n.granularity);
        if (r) {
          let o = vr(e.end, r, i, n.granularity);
          (a = o),
            (l = t).years === a.years && l.months === a.months && l.days === a.days && l.milliseconds === a.milliseconds
              ? this.mutate({ datesDelta: t, standardProps: s })
              : this.mutate({ startDelta: t, endDelta: o, standardProps: s });
        } else (s.hasEnd = !1), this.mutate({ datesDelta: t, standardProps: s });
      }
    }
    moveStart(e) {
      let t = ht(e);
      t && this.mutate({ startDelta: t });
    }
    moveEnd(e) {
      let t = ht(e);
      t && this.mutate({ endDelta: t });
    }
    moveDates(e) {
      let t = ht(e);
      t && this.mutate({ datesDelta: t });
    }
    setAllDay(e, t = {}) {
      let n = { allDay: e },
        { maintainDuration: r } = t;
      null == r && (r = this._context.options.allDayMaintainDuration),
        this._def.allDay !== e && (n.hasEnd = r),
        this.mutate({ standardProps: n });
    }
    formatRange(e) {
      let { dateEnv: t } = this._context,
        n = this._instance,
        r = hn(e);
      return this._def.hasEnd
        ? t.formatRange(n.range.start, n.range.end, r, {
            forcedStartTzo: n.forcedStartTzo,
            forcedEndTzo: n.forcedEndTzo,
          })
        : t.format(n.range.start, r, { forcedTzo: n.forcedStartTzo });
    }
    mutate(e) {
      let t = this._instance;
      if (t) {
        let n = this._def,
          r = this._context,
          { eventStore: i } = r.getCurrentData(),
          s = Ir(i, t.instanceId);
        s = ni(
          s,
          {
            '': {
              display: '',
              startEditable: !0,
              durationEditable: !0,
              constraints: [],
              overlap: null,
              allows: [],
              backgroundColor: '',
              borderColor: '',
              textColor: '',
              classNames: [],
            },
          },
          e,
          r,
        );
        let o = new oi(r, n, t);
        (this._def = s.defs[n.defId]),
          (this._instance = s.instances[t.instanceId]),
          r.dispatch({ type: 'MERGE_EVENTS', eventStore: s }),
          r.emitter.trigger('eventChange', {
            oldEvent: o,
            event: this,
            relatedEvents: ai(s, r, t),
            revert() {
              r.dispatch({ type: 'RESET_EVENTS', eventStore: i });
            },
          });
      }
    }
    remove() {
      let e = this._context,
        t = li(this);
      e.dispatch({ type: 'REMOVE_EVENTS', eventStore: t }),
        e.emitter.trigger('eventRemove', {
          event: this,
          relatedEvents: [],
          revert() {
            e.dispatch({ type: 'MERGE_EVENTS', eventStore: t });
          },
        });
    }
    get source() {
      let { sourceId: e } = this._def;
      return e ? new si(this._context, this._context.getCurrentData().eventSources[e]) : null;
    }
    get start() {
      return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null;
    }
    get end() {
      return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null;
    }
    get startStr() {
      let e = this._instance;
      return e
        ? this._context.dateEnv.formatIso(e.range.start, { omitTime: this._def.allDay, forcedTzo: e.forcedStartTzo })
        : '';
    }
    get endStr() {
      let e = this._instance;
      return e && this._def.hasEnd
        ? this._context.dateEnv.formatIso(e.range.end, { omitTime: this._def.allDay, forcedTzo: e.forcedEndTzo })
        : '';
    }
    get id() {
      return this._def.publicId;
    }
    get groupId() {
      return this._def.groupId;
    }
    get allDay() {
      return this._def.allDay;
    }
    get title() {
      return this._def.title;
    }
    get url() {
      return this._def.url;
    }
    get display() {
      return this._def.ui.display || 'auto';
    }
    get startEditable() {
      return this._def.ui.startEditable;
    }
    get durationEditable() {
      return this._def.ui.durationEditable;
    }
    get constraint() {
      return this._def.ui.constraints[0] || null;
    }
    get overlap() {
      return this._def.ui.overlap;
    }
    get allow() {
      return this._def.ui.allows[0] || null;
    }
    get backgroundColor() {
      return this._def.ui.backgroundColor;
    }
    get borderColor() {
      return this._def.ui.borderColor;
    }
    get textColor() {
      return this._def.ui.textColor;
    }
    get classNames() {
      return this._def.ui.classNames;
    }
    get extendedProps() {
      return this._def.extendedProps;
    }
    toPlainObject(e = {}) {
      let t = this._def,
        { ui: n } = t,
        { startStr: r, endStr: i } = this,
        s = { allDay: t.allDay };
      return (
        t.title && (s.title = t.title),
        r && (s.start = r),
        i && (s.end = i),
        t.publicId && (s.id = t.publicId),
        t.groupId && (s.groupId = t.groupId),
        t.url && (s.url = t.url),
        n.display && 'auto' !== n.display && (s.display = n.display),
        e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor
          ? (s.color = n.backgroundColor)
          : (n.backgroundColor && (s.backgroundColor = n.backgroundColor),
            n.borderColor && (s.borderColor = n.borderColor)),
        n.textColor && (s.textColor = n.textColor),
        n.classNames.length && (s.classNames = n.classNames),
        Object.keys(t.extendedProps).length &&
          (e.collapseExtendedProps ? Object.assign(s, t.extendedProps) : (s.extendedProps = t.extendedProps)),
        s
      );
    }
    toJSON() {
      return this.toPlainObject();
    }
  }
  function li(e) {
    let t = e._def,
      n = e._instance;
    return { defs: { [t.defId]: t }, instances: n ? { [n.instanceId]: n } : {} };
  }
  function ai(e, t, n) {
    let { defs: r, instances: i } = e,
      s = [],
      o = n ? n.instanceId : '';
    for (let e in i) {
      let n = i[e],
        l = r[n.defId];
      n.instanceId !== o && s.push(new oi(t, l, n));
    }
    return s;
  }
  function ci(e, t, n, r) {
    let i = {},
      s = {},
      o = {},
      l = [],
      a = [],
      c = fi(e.defs, t);
    for (let t in e.defs) {
      let n = e.defs[t];
      'inverse-background' === c[n.defId].display &&
        (n.groupId ? ((i[n.groupId] = []), o[n.groupId] || (o[n.groupId] = n)) : (s[t] = []));
    }
    for (let t in e.instances) {
      let o = e.instances[t],
        d = e.defs[o.defId],
        u = c[d.defId],
        h = o.range,
        f = !d.allDay && r ? gr(h, r) : h,
        p = cr(f, n);
      p &&
        ('inverse-background' === u.display
          ? d.groupId
            ? i[d.groupId].push(p)
            : s[o.defId].push(p)
          : 'none' !== u.display &&
            ('background' === u.display ? l : a).push({
              def: d,
              ui: u,
              instance: o,
              range: p,
              isStart: f.start && f.start.valueOf() === p.start.valueOf(),
              isEnd: f.end && f.end.valueOf() === p.end.valueOf(),
            }));
    }
    for (let e in i) {
      let t = lr(i[e], n);
      for (let n of t) {
        let t = o[e],
          r = c[t.defId];
        l.push({ def: t, ui: r, instance: null, range: n, isStart: !1, isEnd: !1 });
      }
    }
    for (let t in s) {
      let r = lr(s[t], n);
      for (let n of r) l.push({ def: e.defs[t], ui: c[t], instance: null, range: n, isStart: !1, isEnd: !1 });
    }
    return { bg: l, fg: a };
  }
  function di(e) {
    return 'background' === e.ui.display || 'inverse-background' === e.ui.display;
  }
  function ui(e, t) {
    e.fcSeg = t;
  }
  function hi(e) {
    return e.fcSeg || e.parentNode.fcSeg || null;
  }
  function fi(e, t) {
    return xn(e, (e) => pi(e, t));
  }
  function pi(e, t) {
    let n = [];
    return t[''] && n.push(t['']), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), Lr(n);
  }
  function gi(e, t) {
    let n = e.map(mi);
    return n.sort((e, n) => nt(e, n, t)), n.map((e) => e._seg);
  }
  function mi(e) {
    let { eventRange: t } = e,
      n = t.def,
      r = t.instance ? t.instance.range : t.range,
      i = r.start ? r.start.valueOf() : 0,
      s = r.end ? r.end.valueOf() : 0;
    return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
      id: n.publicId,
      start: i,
      end: s,
      duration: s - i,
      allDay: Number(n.allDay),
      _seg: e,
    });
  }
  function vi(e, t) {
    let { pluginHooks: n } = t,
      r = n.isDraggableTransformers,
      { def: i, ui: s } = e.eventRange,
      o = s.startEditable;
    for (let e of r) o = e(o, i, s, t);
    return o;
  }
  function yi(e, t) {
    return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart;
  }
  function bi(e, t) {
    return e.isEnd && e.eventRange.ui.durationEditable;
  }
  function Si(e, t, n, r, i, s, o) {
    let { dateEnv: l, options: a } = n,
      { displayEventTime: c, displayEventEnd: d } = a,
      u = e.eventRange.def,
      h = e.eventRange.instance;
    null == c && (c = !1 !== r), null == d && (d = !1 !== i);
    let f = h.range.start,
      p = h.range.end,
      g = s || e.start || e.eventRange.range.start,
      m = o || e.end || e.eventRange.range.end,
      v = Nt(f).valueOf() === Nt(g).valueOf(),
      y = Nt(Tt(p, -1)).valueOf() === Nt(Tt(m, -1)).valueOf();
    return c && !u.allDay && (v || y)
      ? ((g = v ? f : g),
        (m = y ? p : m),
        d && u.hasEnd
          ? l.formatRange(g, m, t, {
              forcedStartTzo: s ? null : h.forcedStartTzo,
              forcedEndTzo: o ? null : h.forcedEndTzo,
            })
          : l.format(g, t, { forcedTzo: s ? null : h.forcedStartTzo }))
      : '';
  }
  function Ei(e, t, n) {
    let r = e.eventRange.range;
    return { isPast: r.end <= (n || t.start), isFuture: r.start >= (n || t.end), isToday: t && fr(t, r.start) };
  }
  function Ci(e) {
    let t = ['fc-event'];
    return (
      e.isMirror && t.push('fc-event-mirror'),
      e.isDraggable && t.push('fc-event-draggable'),
      (e.isStartResizable || e.isEndResizable) && t.push('fc-event-resizable'),
      e.isDragging && t.push('fc-event-dragging'),
      e.isResizing && t.push('fc-event-resizing'),
      e.isSelected && t.push('fc-event-selected'),
      e.isStart && t.push('fc-event-start'),
      e.isEnd && t.push('fc-event-end'),
      e.isPast && t.push('fc-event-past'),
      e.isToday && t.push('fc-event-today'),
      e.isFuture && t.push('fc-event-future'),
      t
    );
  }
  function wi(e) {
    return e.instance ? e.instance.instanceId : `${e.def.defId}:${e.range.start.toISOString()}`;
  }
  function Di(e, t) {
    let { def: n, instance: r } = e.eventRange,
      { url: i } = n;
    if (i) return { href: i };
    let { emitter: s, options: o } = t,
      { eventInteractive: l } = o;
    return (
      null == l && ((l = n.interactive), null == l && (l = Boolean(s.hasHandlers('eventClick')))),
      l
        ? qe((e) => {
            s.trigger('eventClick', { el: e.target, event: new oi(t, n, r), jsEvent: e, view: t.viewApi });
          })
        : {}
    );
  }
  const Ri = { start: wn, end: wn, allDay: Boolean };
  function Ai(e, t, n) {
    let r = (function (e, t) {
        let { refined: n, extra: r } = Cn(e, Ri),
          i = n.start ? t.createMarkerMeta(n.start) : null,
          s = n.end ? t.createMarkerMeta(n.end) : null,
          { allDay: o } = n;
        null == o && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified));
        return Object.assign({ range: { start: i ? i.marker : null, end: s ? s.marker : null }, allDay: o }, r);
      })(e, t),
      { range: i } = r;
    if (!i.start) return null;
    if (!i.end) {
      if (null == n) return null;
      i.end = t.add(i.start, n);
    }
    return r;
  }
  function xi(e, t) {
    return (
      dr(e.range, t.range) &&
      e.allDay === t.allDay &&
      (function (e, t) {
        for (let n in t) if ('range' !== n && 'allDay' !== n && e[n] !== t[n]) return !1;
        for (let n in e) if (!(n in t)) return !1;
        return !0;
      })(e, t)
    );
  }
  function Ti(e, t, n) {
    return Object.assign(Object.assign({}, _i(e, t, n)), { timeZone: t.timeZone });
  }
  function _i(e, t, n) {
    return {
      start: t.toDate(e.start),
      end: t.toDate(e.end),
      startStr: t.formatIso(e.start, { omitTime: n }),
      endStr: t.formatIso(e.end, { omitTime: n }),
    };
  }
  function ki(e, t, n) {
    let r = !1,
      i = function (e) {
        r || ((r = !0), t(e));
      },
      s = function (e) {
        r || ((r = !0), n(e));
      },
      o = e(i, s);
    o && 'function' == typeof o.then && o.then(i, s);
  }
  class Mi extends Error {
    constructor(e, t) {
      super(e), (this.response = t);
    }
  }
  function Ii(e, t, n) {
    const r = { method: (e = e.toUpperCase()) };
    return (
      'GET' === e
        ? (t += (-1 === t.indexOf('?') ? '?' : '&') + new URLSearchParams(n))
        : ((r.body = new URLSearchParams(n)), (r.headers = { 'Content-Type': 'application/x-www-form-urlencoded' })),
      fetch(t, r).then((e) => {
        if (e.ok)
          return e.json().then(
            (t) => [t, e],
            () => {
              throw new Mi('Failure parsing JSON', e);
            },
          );
        throw new Mi('Request failed', e);
      })
    );
  }
  let Oi;
  function Ni() {
    return (
      null == Oi &&
        (Oi = (function () {
          if ('undefined' == typeof document) return !0;
          let e = document.createElement('div');
          (e.style.position = 'absolute'),
            (e.style.top = '0px'),
            (e.style.left = '0px'),
            (e.innerHTML = '<table><tr><td><div></div></td></tr></table>'),
            (e.querySelector('table').style.height = '100px'),
            (e.querySelector('div').style.height = '100%'),
            document.body.appendChild(e);
          let t = e.querySelector('div').offsetHeight > 0;
          return document.body.removeChild(e), t;
        })()),
      Oi
    );
  }
  class Pi extends Xn {
    constructor() {
      super(...arguments),
        (this.state = { forPrint: !1 }),
        (this.handleBeforePrint = () => {
          Gn(() => {
            this.setState({ forPrint: !0 });
          });
        }),
        (this.handleAfterPrint = () => {
          Gn(() => {
            this.setState({ forPrint: !1 });
          });
        });
    }
    render() {
      let { props: e } = this,
        { options: t } = e,
        { forPrint: n } = this.state,
        r = n || 'auto' === t.height || 'auto' === t.contentHeight,
        i = r || null == t.height ? '' : t.height,
        s = ['fc', n ? 'fc-media-print' : 'fc-media-screen', 'fc-direction-' + t.direction, e.theme.getClass('root')];
      return Ni() || s.push('fc-liquid-hack'), e.children(s, i, r, n);
    }
    componentDidMount() {
      let { emitter: e } = this.props;
      e.on('_beforeprint', this.handleBeforePrint), e.on('_afterprint', this.handleAfterPrint);
    }
    componentWillUnmount() {
      let { emitter: e } = this.props;
      e.off('_beforeprint', this.handleBeforePrint), e.off('_afterprint', this.handleAfterPrint);
    }
  }
  class Hi {
    constructor(e) {
      (this.component = e.component), (this.isHitComboAllowed = e.isHitComboAllowed || null);
    }
    destroy() {}
  }
  function Wi(e) {
    return { [e.component.uid]: e };
  }
  const Bi = {};
  class ji {
    getCurrentData() {
      return this.currentDataManager.getCurrentData();
    }
    dispatch(e) {
      this.currentDataManager.dispatch(e);
    }
    get view() {
      return this.getCurrentData().viewApi;
    }
    batchRendering(e) {
      e();
    }
    updateSize() {
      this.trigger('_resize', !0);
    }
    setOption(e, t) {
      this.dispatch({ type: 'SET_OPTION', optionName: e, rawOptionValue: t });
    }
    getOption(e) {
      return this.currentDataManager.currentCalendarOptionsInput[e];
    }
    getAvailableLocaleCodes() {
      return Object.keys(this.getCurrentData().availableRawLocales);
    }
    on(e, t) {
      let { currentDataManager: n } = this;
      n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn(`Unknown listener name '${e}'`);
    }
    off(e, t) {
      this.currentDataManager.emitter.off(e, t);
    }
    trigger(e, ...t) {
      this.currentDataManager.emitter.trigger(e, ...t);
    }
    changeView(e, t) {
      this.batchRendering(() => {
        if ((this.unselect(), t))
          if (t.start && t.end)
            this.dispatch({ type: 'CHANGE_VIEW_TYPE', viewType: e }),
              this.dispatch({ type: 'SET_OPTION', optionName: 'visibleRange', rawOptionValue: t });
          else {
            let { dateEnv: n } = this.getCurrentData();
            this.dispatch({ type: 'CHANGE_VIEW_TYPE', viewType: e, dateMarker: n.createMarker(t) });
          }
        else this.dispatch({ type: 'CHANGE_VIEW_TYPE', viewType: e });
      });
    }
    zoomTo(e, t) {
      let n;
      (t = t || 'day'),
        (n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t)),
        this.unselect(),
        n
          ? this.dispatch({ type: 'CHANGE_VIEW_TYPE', viewType: n.type, dateMarker: e })
          : this.dispatch({ type: 'CHANGE_DATE', dateMarker: e });
    }
    getUnitViewSpec(e) {
      let t,
        n,
        { viewSpecs: r, toolbarConfig: i } = this.getCurrentData(),
        s = [].concat(i.header ? i.header.viewsWithButtons : [], i.footer ? i.footer.viewsWithButtons : []);
      for (let e in r) s.push(e);
      for (t = 0; t < s.length; t += 1) if (((n = r[s[t]]), n && n.singleUnit === e)) return n;
      return null;
    }
    prev() {
      this.unselect(), this.dispatch({ type: 'PREV' });
    }
    next() {
      this.unselect(), this.dispatch({ type: 'NEXT' });
    }
    prevYear() {
      let e = this.getCurrentData();
      this.unselect(), this.dispatch({ type: 'CHANGE_DATE', dateMarker: e.dateEnv.addYears(e.currentDate, -1) });
    }
    nextYear() {
      let e = this.getCurrentData();
      this.unselect(), this.dispatch({ type: 'CHANGE_DATE', dateMarker: e.dateEnv.addYears(e.currentDate, 1) });
    }
    today() {
      let e = this.getCurrentData();
      this.unselect(), this.dispatch({ type: 'CHANGE_DATE', dateMarker: yr(e.calendarOptions.now, e.dateEnv) });
    }
    gotoDate(e) {
      let t = this.getCurrentData();
      this.unselect(), this.dispatch({ type: 'CHANGE_DATE', dateMarker: t.dateEnv.createMarker(e) });
    }
    incrementDate(e) {
      let t = this.getCurrentData(),
        n = ht(e);
      n && (this.unselect(), this.dispatch({ type: 'CHANGE_DATE', dateMarker: t.dateEnv.add(t.currentDate, n) }));
    }
    getDate() {
      let e = this.getCurrentData();
      return e.dateEnv.toDate(e.currentDate);
    }
    formatDate(e, t) {
      let { dateEnv: n } = this.getCurrentData();
      return n.format(n.createMarker(e), hn(t));
    }
    formatRange(e, t, n) {
      let { dateEnv: r } = this.getCurrentData();
      return r.formatRange(r.createMarker(e), r.createMarker(t), hn(n), n);
    }
    formatIso(e, t) {
      let { dateEnv: n } = this.getCurrentData();
      return n.formatIso(n.createMarker(e), { omitTime: t });
    }
    select(e, t) {
      let n;
      n = null == t ? (null != e.start ? e : { start: e, end: null }) : { start: e, end: t };
      let r = this.getCurrentData(),
        i = Ai(n, r.dateEnv, ht({ days: 1 }));
      i && (this.dispatch({ type: 'SELECT_DATES', selection: i }), Kr(i, null, r));
    }
    unselect(e) {
      let t = this.getCurrentData();
      t.dateSelection &&
        (this.dispatch({ type: 'UNSELECT_DATES' }),
        (function (e, t) {
          t.emitter.trigger('unselect', { jsEvent: e ? e.origEvent : null, view: t.viewApi || t.calendarApi.view });
        })(e, t));
    }
    addEvent(e, t) {
      if (e instanceof oi) {
        let t = e._def,
          n = e._instance;
        return (
          this.getCurrentData().eventStore.defs[t.defId] ||
            (this.dispatch({ type: 'ADD_EVENTS', eventStore: Mr({ def: t, instance: n }) }), this.triggerEventAdd(e)),
          e
        );
      }
      let n,
        r = this.getCurrentData();
      if (t instanceof si) n = t.internalEventSource;
      else if ('boolean' == typeof t) t && ([n] = _n(r.eventSources));
      else if (null != t) {
        let e = this.getEventSourceById(t);
        if (!e) return console.warn(`Could not find an event source with ID "${t}"`), null;
        n = e.internalEventSource;
      }
      let i = Ar(e, n, r, !1);
      if (i) {
        let e = new oi(r, i.def, i.def.recurringDef ? null : i.instance);
        return this.dispatch({ type: 'ADD_EVENTS', eventStore: Mr(i) }), this.triggerEventAdd(e), e;
      }
      return null;
    }
    triggerEventAdd(e) {
      let { emitter: t } = this.getCurrentData();
      t.trigger('eventAdd', {
        event: e,
        relatedEvents: [],
        revert: () => {
          this.dispatch({ type: 'REMOVE_EVENTS', eventStore: li(e) });
        },
      });
    }
    getEventById(e) {
      let t = this.getCurrentData(),
        { defs: n, instances: r } = t.eventStore;
      e = String(e);
      for (let i in n) {
        let s = n[i];
        if (s.publicId === e) {
          if (s.recurringDef) return new oi(t, s, null);
          for (let e in r) {
            let n = r[e];
            if (n.defId === s.defId) return new oi(t, s, n);
          }
        }
      }
      return null;
    }
    getEvents() {
      let e = this.getCurrentData();
      return ai(e.eventStore, e);
    }
    removeAllEvents() {
      this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
    }
    getEventSources() {
      let e = this.getCurrentData(),
        t = e.eventSources,
        n = [];
      for (let r in t) n.push(new si(e, t[r]));
      return n;
    }
    getEventSourceById(e) {
      let t = this.getCurrentData(),
        n = t.eventSources;
      e = String(e);
      for (let r in n) if (n[r].publicId === e) return new si(t, n[r]);
      return null;
    }
    addEventSource(e) {
      let t = this.getCurrentData();
      if (e instanceof si)
        return (
          t.eventSources[e.internalEventSource.sourceId] ||
            this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [e.internalEventSource] }),
          e
        );
      let n = Gr(e, t);
      return n ? (this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [n] }), new si(t, n)) : null;
    }
    removeAllEventSources() {
      this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
    }
    refetchEvents() {
      this.dispatch({ type: 'FETCH_EVENT_SOURCES', isRefetch: !0 });
    }
    scrollToTime(e) {
      let t = ht(e);
      t && this.trigger('_scrollRequest', { time: t });
    }
  }
  function Li(e, t) {
    return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom;
  }
  function zi(e, t) {
    let n = {
      left: Math.max(e.left, t.left),
      right: Math.min(e.right, t.right),
      top: Math.max(e.top, t.top),
      bottom: Math.min(e.bottom, t.bottom),
    };
    return n.left < n.right && n.top < n.bottom && n;
  }
  function Ui(e, t, n) {
    return { left: e.left + t, right: e.right + t, top: e.top + n, bottom: e.bottom + n };
  }
  function Gi(e, t) {
    return { left: Math.min(Math.max(e.left, t.left), t.right), top: Math.min(Math.max(e.top, t.top), t.bottom) };
  }
  function Fi(e) {
    return { left: (e.left + e.right) / 2, top: (e.top + e.bottom) / 2 };
  }
  function Vi(e, t) {
    return { left: e.left - t.left, top: e.top - t.top };
  }
  const qi = { defs: {}, instances: {} };
  class Yi {
    constructor() {
      (this.getKeysForEventDefs = Qt(this._getKeysForEventDefs)),
        (this.splitDateSelection = Qt(this._splitDateSpan)),
        (this.splitEventStore = Qt(this._splitEventStore)),
        (this.splitIndividualUi = Qt(this._splitIndividualUi)),
        (this.splitEventDrag = Qt(this._splitInteraction)),
        (this.splitEventResize = Qt(this._splitInteraction)),
        (this.eventUiBuilders = {});
    }
    splitProps(e) {
      let t = this.getKeyInfo(e),
        n = this.getKeysForEventDefs(e.eventStore),
        r = this.splitDateSelection(e.dateSelection),
        i = this.splitIndividualUi(e.eventUiBases, n),
        s = this.splitEventStore(e.eventStore, n),
        o = this.splitEventDrag(e.eventDrag),
        l = this.splitEventResize(e.eventResize),
        a = {};
      this.eventUiBuilders = xn(t, (e, t) => this.eventUiBuilders[t] || Qt(Qi));
      for (let n in t) {
        let c = t[n],
          d = s[n] || qi,
          u = this.eventUiBuilders[n];
        a[n] = {
          businessHours: c.businessHours || e.businessHours,
          dateSelection: r[n] || null,
          eventStore: d,
          eventUiBases: u(e.eventUiBases[''], c.ui, i[n]),
          eventSelection: d.instances[e.eventSelection] ? e.eventSelection : '',
          eventDrag: o[n] || null,
          eventResize: l[n] || null,
        };
      }
      return a;
    }
    _splitDateSpan(e) {
      let t = {};
      if (e) {
        let n = this.getKeysForDateSpan(e);
        for (let r of n) t[r] = e;
      }
      return t;
    }
    _getKeysForEventDefs(e) {
      return xn(e.defs, (e) => this.getKeysForEventDef(e));
    }
    _splitEventStore(e, t) {
      let { defs: n, instances: r } = e,
        i = {};
      for (let e in n) for (let r of t[e]) i[r] || (i[r] = { defs: {}, instances: {} }), (i[r].defs[e] = n[e]);
      for (let e in r) {
        let n = r[e];
        for (let r of t[n.defId]) i[r] && (i[r].instances[e] = n);
      }
      return i;
    }
    _splitIndividualUi(e, t) {
      let n = {};
      for (let r in e) if (r) for (let i of t[r]) n[i] || (n[i] = {}), (n[i][r] = e[r]);
      return n;
    }
    _splitInteraction(e) {
      let t = {};
      if (e) {
        let n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
          r = this._getKeysForEventDefs(e.mutatedEvents),
          i = this._splitEventStore(e.mutatedEvents, r),
          s = (r) => {
            t[r] || (t[r] = { affectedEvents: n[r] || qi, mutatedEvents: i[r] || qi, isEvent: e.isEvent });
          };
        for (let e in n) s(e);
        for (let e in i) s(e);
      }
      return t;
    }
  }
  function Qi(e, t, n) {
    let r = [];
    e && r.push(e), t && r.push(t);
    let i = { '': Lr(r) };
    return n && Object.assign(i, n), i;
  }
  function Zi(e, t, n, r) {
    return {
      dow: e.getUTCDay(),
      isDisabled: Boolean(r && !fr(r.activeRange, e)),
      isOther: Boolean(r && !fr(r.currentRange, e)),
      isToday: Boolean(t && fr(t, e)),
      isPast: Boolean(n ? e < n : !!t && e < t.start),
      isFuture: Boolean(n ? e > n : !!t && e >= t.end),
    };
  }
  function Xi(e, t) {
    let n = ['fc-day', 'fc-day-' + Rt[e.dow]];
    return (
      e.isDisabled
        ? n.push('fc-day-disabled')
        : (e.isToday && (n.push('fc-day-today'), n.push(t.getClass('today'))),
          e.isPast && n.push('fc-day-past'),
          e.isFuture && n.push('fc-day-future'),
          e.isOther && n.push('fc-day-other')),
      n
    );
  }
  function $i(e, t) {
    let n = ['fc-slot', 'fc-slot-' + Rt[e.dow]];
    return (
      e.isDisabled
        ? n.push('fc-slot-disabled')
        : (e.isToday && (n.push('fc-slot-today'), n.push(t.getClass('today'))),
          e.isPast && n.push('fc-slot-past'),
          e.isFuture && n.push('fc-slot-future')),
      n
    );
  }
  const Ji = hn({ year: 'numeric', month: 'long', day: 'numeric' }),
    Ki = hn({ week: 'long' });
  function es(e, t, n = 'day', r = !0) {
    const { dateEnv: i, options: s, calendarApi: o } = e;
    let l = i.format(t, 'week' === n ? Ki : Ji);
    if (s.navLinks) {
      let e = i.toDate(t);
      const a = (e) => {
        let r = 'day' === n ? s.navLinkDayClick : 'week' === n ? s.navLinkWeekClick : null;
        'function' == typeof r ? r.call(o, i.toDate(t), e) : ('string' == typeof r && (n = r), o.zoomTo(t, n));
      };
      return Object.assign({ title: ot(s.navLinkHint, [l, e], l), 'data-navlink': '' }, r ? Ve(a) : { onClick: a });
    }
    return { 'aria-label': l };
  }
  let ts,
    ns = null;
  function rs() {
    return (
      null === ns &&
        (ns = (function () {
          let e = document.createElement('div');
          He(e, {
            position: 'absolute',
            top: -1e3,
            left: 0,
            border: 0,
            padding: 0,
            overflow: 'scroll',
            direction: 'rtl',
          }),
            (e.innerHTML = '<div></div>'),
            document.body.appendChild(e);
          let t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
          return ke(e), t;
        })()),
      ns
    );
  }
  function is() {
    return (
      ts ||
        (ts = (function () {
          let e = document.createElement('div');
          (e.style.overflow = 'scroll'),
            (e.style.position = 'absolute'),
            (e.style.top = '-9999px'),
            (e.style.left = '-9999px'),
            document.body.appendChild(e);
          let t = ss(e);
          return document.body.removeChild(e), t;
        })()),
      ts
    );
  }
  function ss(e) {
    return { x: e.offsetHeight - e.clientHeight, y: e.offsetWidth - e.clientWidth };
  }
  function os(e, t = !1) {
    let n = window.getComputedStyle(e),
      r = parseInt(n.borderLeftWidth, 10) || 0,
      i = parseInt(n.borderRightWidth, 10) || 0,
      s = parseInt(n.borderTopWidth, 10) || 0,
      o = parseInt(n.borderBottomWidth, 10) || 0,
      l = ss(e),
      a = l.y - r - i,
      c = {
        borderLeft: r,
        borderRight: i,
        borderTop: s,
        borderBottom: o,
        scrollbarBottom: l.x - s - o,
        scrollbarLeft: 0,
        scrollbarRight: 0,
      };
    return (
      rs() && 'rtl' === n.direction ? (c.scrollbarLeft = a) : (c.scrollbarRight = a),
      t &&
        ((c.paddingLeft = parseInt(n.paddingLeft, 10) || 0),
        (c.paddingRight = parseInt(n.paddingRight, 10) || 0),
        (c.paddingTop = parseInt(n.paddingTop, 10) || 0),
        (c.paddingBottom = parseInt(n.paddingBottom, 10) || 0)),
      c
    );
  }
  function ls(e, t = !1, n) {
    let r = n ? e.getBoundingClientRect() : as(e),
      i = os(e, t),
      s = {
        left: r.left + i.borderLeft + i.scrollbarLeft,
        right: r.right - i.borderRight - i.scrollbarRight,
        top: r.top + i.borderTop,
        bottom: r.bottom - i.borderBottom - i.scrollbarBottom,
      };
    return (
      t &&
        ((s.left += i.paddingLeft),
        (s.right -= i.paddingRight),
        (s.top += i.paddingTop),
        (s.bottom -= i.paddingBottom)),
      s
    );
  }
  function as(e) {
    let t = e.getBoundingClientRect();
    return {
      left: t.left + window.scrollX,
      top: t.top + window.scrollY,
      right: t.right + window.scrollX,
      bottom: t.bottom + window.scrollY,
    };
  }
  function cs(e) {
    let t = [];
    for (; e instanceof HTMLElement; ) {
      let n = window.getComputedStyle(e);
      if ('fixed' === n.position) break;
      /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), (e = e.parentNode);
    }
    return t;
  }
  class ds {
    constructor(e, t, n, r) {
      this.els = t;
      let i = (this.originClientRect = e.getBoundingClientRect());
      n && this.buildElHorizontals(i.left), r && this.buildElVerticals(i.top);
    }
    buildElHorizontals(e) {
      let t = [],
        n = [];
      for (let r of this.els) {
        let i = r.getBoundingClientRect();
        t.push(i.left - e), n.push(i.right - e);
      }
      (this.lefts = t), (this.rights = n);
    }
    buildElVerticals(e) {
      let t = [],
        n = [];
      for (let r of this.els) {
        let i = r.getBoundingClientRect();
        t.push(i.top - e), n.push(i.bottom - e);
      }
      (this.tops = t), (this.bottoms = n);
    }
    leftToIndex(e) {
      let t,
        { lefts: n, rights: r } = this,
        i = n.length;
      for (t = 0; t < i; t += 1) if (e >= n[t] && e < r[t]) return t;
    }
    topToIndex(e) {
      let t,
        { tops: n, bottoms: r } = this,
        i = n.length;
      for (t = 0; t < i; t += 1) if (e >= n[t] && e < r[t]) return t;
    }
    getWidth(e) {
      return this.rights[e] - this.lefts[e];
    }
    getHeight(e) {
      return this.bottoms[e] - this.tops[e];
    }
    similarTo(e) {
      return (
        us(this.tops || [], e.tops || []) &&
        us(this.bottoms || [], e.bottoms || []) &&
        us(this.lefts || [], e.lefts || []) &&
        us(this.rights || [], e.rights || [])
      );
    }
  }
  function us(e, t) {
    const n = e.length;
    if (n !== t.length) return !1;
    for (let r = 0; r < n; r++) if (Math.round(e[r]) !== Math.round(t[r])) return !1;
    return !0;
  }
  class hs {
    getMaxScrollTop() {
      return this.getScrollHeight() - this.getClientHeight();
    }
    getMaxScrollLeft() {
      return this.getScrollWidth() - this.getClientWidth();
    }
    canScrollVertically() {
      return this.getMaxScrollTop() > 0;
    }
    canScrollHorizontally() {
      return this.getMaxScrollLeft() > 0;
    }
    canScrollUp() {
      return this.getScrollTop() > 0;
    }
    canScrollDown() {
      return this.getScrollTop() < this.getMaxScrollTop();
    }
    canScrollLeft() {
      return this.getScrollLeft() > 0;
    }
    canScrollRight() {
      return this.getScrollLeft() < this.getMaxScrollLeft();
    }
  }
  class fs extends hs {
    constructor(e) {
      super(), (this.el = e);
    }
    getScrollTop() {
      return this.el.scrollTop;
    }
    getScrollLeft() {
      return this.el.scrollLeft;
    }
    setScrollTop(e) {
      this.el.scrollTop = e;
    }
    setScrollLeft(e) {
      this.el.scrollLeft = e;
    }
    getScrollWidth() {
      return this.el.scrollWidth;
    }
    getScrollHeight() {
      return this.el.scrollHeight;
    }
    getClientHeight() {
      return this.el.clientHeight;
    }
    getClientWidth() {
      return this.el.clientWidth;
    }
  }
  class ps extends hs {
    getScrollTop() {
      return window.scrollY;
    }
    getScrollLeft() {
      return window.scrollX;
    }
    setScrollTop(e) {
      window.scroll(window.scrollX, e);
    }
    setScrollLeft(e) {
      window.scroll(e, window.scrollY);
    }
    getScrollWidth() {
      return document.documentElement.scrollWidth;
    }
    getScrollHeight() {
      return document.documentElement.scrollHeight;
    }
    getClientHeight() {
      return document.documentElement.clientHeight;
    }
    getClientWidth() {
      return document.documentElement.clientWidth;
    }
  }
  class gs extends Xn {
    constructor() {
      super(...arguments), (this.uid = Qe());
    }
    prepareHits() {}
    queryHit(e, t, n, r) {
      return null;
    }
    isValidSegDownEl(e) {
      return !this.props.eventDrag && !this.props.eventResize && !Me(e, '.fc-event-mirror');
    }
    isValidDateDownEl(e) {
      return !(
        Me(e, '.fc-event:not(.fc-bg-event)') ||
        Me(e, '.fc-more-link') ||
        Me(e, 'a[data-navlink]') ||
        Me(e, '.fc-popover')
      );
    }
  }
  class ms {
    constructor(e = (e) => e.thickness || 1) {
      (this.getEntryThickness = e),
        (this.strictOrder = !1),
        (this.allowReslicing = !1),
        (this.maxCoord = -1),
        (this.maxStackCnt = -1),
        (this.levelCoords = []),
        (this.entriesByLevel = []),
        (this.stackCnts = {});
    }
    addSegs(e) {
      let t = [];
      for (let n of e) this.insertEntry(n, t);
      return t;
    }
    insertEntry(e, t) {
      let n = this.findInsertion(e);
      this.isInsertionValid(n, e) ? this.insertEntryAt(e, n) : this.handleInvalidInsertion(n, e, t);
    }
    isInsertionValid(e, t) {
      return (
        (-1 === this.maxCoord || e.levelCoord + this.getEntryThickness(t) <= this.maxCoord) &&
        (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
      );
    }
    handleInvalidInsertion(e, t, n) {
      if (this.allowReslicing && e.touchingEntry) {
        const r = Object.assign(Object.assign({}, t), { span: Ss(t.span, e.touchingEntry.span) });
        n.push(r), this.splitEntry(t, e.touchingEntry, n);
      } else n.push(t);
    }
    splitEntry(e, t, n) {
      let r = e.span,
        i = t.span;
      r.start < i.start &&
        this.insertEntry({ index: e.index, thickness: e.thickness, span: { start: r.start, end: i.start } }, n),
        r.end > i.end &&
          this.insertEntry({ index: e.index, thickness: e.thickness, span: { start: i.end, end: r.end } }, n);
    }
    insertEntryAt(e, t) {
      let { entriesByLevel: n, levelCoords: r } = this;
      -1 === t.lateral ? (Es(r, t.level, t.levelCoord), Es(n, t.level, [e])) : Es(n[t.level], t.lateral, e),
        (this.stackCnts[ys(e)] = t.stackCnt);
    }
    findInsertion(e) {
      let { levelCoords: t, entriesByLevel: n, strictOrder: r, stackCnts: i } = this,
        s = t.length,
        o = 0,
        l = -1,
        a = -1,
        c = null,
        d = 0;
      for (let u = 0; u < s; u += 1) {
        const s = t[u];
        if (!r && s >= o + this.getEntryThickness(e)) break;
        let h,
          f = n[u],
          p = Cs(f, e.span.start, vs),
          g = p[0] + p[1];
        for (; (h = f[g]) && h.span.start < e.span.end; ) {
          let e = s + this.getEntryThickness(h);
          e > o && ((o = e), (c = h), (l = u), (a = g)), e === o && (d = Math.max(d, i[ys(h)] + 1)), (g += 1);
        }
      }
      let u = 0;
      if (c) for (u = l + 1; u < s && t[u] < o; ) u += 1;
      let h = -1;
      return (
        u < s && t[u] === o && (h = Cs(n[u], e.span.end, vs)[0]),
        { touchingLevel: l, touchingLateral: a, touchingEntry: c, stackCnt: d, levelCoord: o, level: u, lateral: h }
      );
    }
    toRects() {
      let { entriesByLevel: e, levelCoords: t } = this,
        n = e.length,
        r = [];
      for (let i = 0; i < n; i += 1) {
        let n = e[i],
          s = t[i];
        for (let e of n)
          r.push(Object.assign(Object.assign({}, e), { thickness: this.getEntryThickness(e), levelCoord: s }));
      }
      return r;
    }
  }
  function vs(e) {
    return e.span.end;
  }
  function ys(e) {
    return e.index + ':' + e.span.start;
  }
  function bs(e) {
    let t = [];
    for (let i of e) {
      let e = [],
        s = { span: i.span, entries: [i] };
      for (let i of t)
        Ss(i.span, s.span)
          ? (s = {
              entries: i.entries.concat(s.entries),
              span: ((n = i.span), (r = s.span), { start: Math.min(n.start, r.start), end: Math.max(n.end, r.end) }),
            })
          : e.push(i);
      e.push(s), (t = e);
    }
    var n, r;
    return t;
  }
  function Ss(e, t) {
    let n = Math.max(e.start, t.start),
      r = Math.min(e.end, t.end);
    return n < r ? { start: n, end: r } : null;
  }
  function Es(e, t, n) {
    e.splice(t, 0, n);
  }
  function Cs(e, t, n) {
    let r = 0,
      i = e.length;
    if (!i || t < n(e[r])) return [0, 0];
    if (t > n(e[i - 1])) return [i, 0];
    for (; r < i; ) {
      let s = Math.floor(r + (i - r) / 2),
        o = n(e[s]);
      if (t < o) i = s;
      else {
        if (!(t > o)) return [s, 1];
        r = s + 1;
      }
    }
    return [r, 0];
  }
  class ws {
    constructor(e, t) {
      this.emitter = new Xr();
    }
    destroy() {}
    setMirrorIsVisible(e) {}
    setMirrorNeedsRevert(e) {}
    setAutoScrollEnabled(e) {}
  }
  const Ds = {},
    Rs = { startTime: ht, duration: ht, create: Boolean, sourceId: String };
  function As(e) {
    let { refined: t, extra: n } = Cn(e, Rs);
    return {
      startTime: t.startTime || null,
      duration: t.duration || null,
      create: null == t.create || t.create,
      sourceId: t.sourceId,
      leftoverProps: n,
    };
  }
  function xs(e, t) {
    return hn(
      !e || t > 10
        ? { weekday: 'short' }
        : t > 1
          ? { weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: !0 }
          : { weekday: 'long' },
    );
  }
  const Ts = 'fc-col-header-cell';
  function _s(e) {
    return e.text;
  }
  class ks extends Xn {
    render() {
      let { dateEnv: e, options: t, theme: n, viewApi: r } = this.context,
        { props: i } = this,
        { date: s, dateProfile: o } = i,
        l = Zi(s, i.todayRange, null, o),
        a = [Ts].concat(Xi(l, n)),
        c = e.format(s, i.dayHeaderFormat),
        d = !l.isDisabled && i.colCnt > 1 ? es(this.context, s) : {},
        u = Object.assign(
          Object.assign(Object.assign({ date: e.toDate(s), view: r }, i.extraRenderProps), { text: c }),
          l,
        );
      return g(
        rr,
        {
          elTag: 'th',
          elClasses: a,
          elAttrs: Object.assign(
            { role: 'columnheader', colSpan: i.colSpan, 'data-date': l.isDisabled ? void 0 : Ft(s) },
            i.extraDataAttrs,
          ),
          renderProps: u,
          generatorName: 'dayHeaderContent',
          customGenerator: t.dayHeaderContent,
          defaultGenerator: _s,
          classNameGenerator: t.dayHeaderClassNames,
          didMount: t.dayHeaderDidMount,
          willUnmount: t.dayHeaderWillUnmount,
        },
        (e) =>
          g(
            'div',
            { className: 'fc-scrollgrid-sync-inner' },
            !l.isDisabled &&
              g(e, { elTag: 'a', elAttrs: d, elClasses: ['fc-col-header-cell-cushion', i.isSticky && 'fc-sticky'] }),
          ),
      );
    }
  }
  const Ms = hn({ weekday: 'long' });
  class Is extends Xn {
    render() {
      let { props: e } = this,
        { dateEnv: t, theme: n, viewApi: r, options: i } = this.context,
        s = xt(new Date(2592e5), e.dow),
        o = { dow: e.dow, isDisabled: !1, isFuture: !1, isPast: !1, isToday: !1, isOther: !1 },
        l = t.format(s, e.dayHeaderFormat),
        a = Object.assign(
          Object.assign(Object.assign(Object.assign({ date: s }, o), { view: r }), e.extraRenderProps),
          { text: l },
        );
      return g(
        rr,
        {
          elTag: 'th',
          elClasses: [Ts, ...Xi(o, n), ...(e.extraClassNames || [])],
          elAttrs: Object.assign({ role: 'columnheader', colSpan: e.colSpan }, e.extraDataAttrs),
          renderProps: a,
          generatorName: 'dayHeaderContent',
          customGenerator: i.dayHeaderContent,
          defaultGenerator: _s,
          classNameGenerator: i.dayHeaderClassNames,
          didMount: i.dayHeaderDidMount,
          willUnmount: i.dayHeaderWillUnmount,
        },
        (n) =>
          g(
            'div',
            { className: 'fc-scrollgrid-sync-inner' },
            g(n, {
              elTag: 'a',
              elClasses: ['fc-col-header-cell-cushion', e.isSticky && 'fc-sticky'],
              elAttrs: { 'aria-label': t.format(s, Ms) },
            }),
          ),
      );
    }
  }
  class Os extends C {
    constructor(e, t) {
      super(e, t),
        (this.initialNowDate = yr(t.options.now, t.dateEnv)),
        (this.initialNowQueriedMs = new Date().valueOf()),
        (this.state = this.computeTiming().currentState);
    }
    render() {
      let { props: e, state: t } = this;
      return e.children(t.nowDate, t.todayRange);
    }
    componentDidMount() {
      this.setTimeout();
    }
    componentDidUpdate(e) {
      e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout());
    }
    componentWillUnmount() {
      this.clearTimeout();
    }
    computeTiming() {
      let { props: e, context: t } = this,
        n = Tt(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs),
        r = t.dateEnv.startOf(n, e.unit),
        i = t.dateEnv.add(r, ht(1, e.unit)),
        s = i.valueOf() - n.valueOf();
      return (
        (s = Math.min(864e5, s)),
        { currentState: { nowDate: r, todayRange: Ns(r) }, nextState: { nowDate: i, todayRange: Ns(i) }, waitMs: s }
      );
    }
    setTimeout() {
      let { nextState: e, waitMs: t } = this.computeTiming();
      this.timeoutId = setTimeout(() => {
        this.setState(e, () => {
          this.setTimeout();
        });
      }, t);
    }
    clearTimeout() {
      this.timeoutId && clearTimeout(this.timeoutId);
    }
  }
  function Ns(e) {
    let t = Nt(e);
    return { start: t, end: xt(t, 1) };
  }
  Os.contextType = Yn;
  class Ps extends Xn {
    constructor() {
      super(...arguments), (this.createDayHeaderFormatter = Qt(Hs));
    }
    render() {
      let { context: e } = this,
        { dates: t, dateProfile: n, datesRepDistinctDays: r, renderIntro: i } = this.props,
        s = this.createDayHeaderFormatter(e.options.dayHeaderFormat, r, t.length);
      return g(Os, { unit: 'day' }, (e, o) =>
        g(
          'tr',
          { role: 'row' },
          i && i('day'),
          t.map((e) =>
            r
              ? g(ks, {
                  key: e.toISOString(),
                  date: e,
                  dateProfile: n,
                  todayRange: o,
                  colCnt: t.length,
                  dayHeaderFormat: s,
                })
              : g(Is, { key: e.getUTCDay(), dow: e.getUTCDay(), dayHeaderFormat: s }),
          ),
        ),
      );
    }
  }
  function Hs(e, t, n) {
    return e || xs(t, n);
  }
  class Ws {
    constructor(e, t) {
      let n = e.start,
        { end: r } = e,
        i = [],
        s = [],
        o = -1;
      for (; n < r; ) t.isHiddenDay(n) ? i.push(o + 0.5) : ((o += 1), i.push(o), s.push(n)), (n = xt(n, 1));
      (this.dates = s), (this.indices = i), (this.cnt = s.length);
    }
    sliceRange(e) {
      let t = this.getDateDayIndex(e.start),
        n = this.getDateDayIndex(xt(e.end, -1)),
        r = Math.max(0, t),
        i = Math.min(this.cnt - 1, n);
      return (
        (r = Math.ceil(r)),
        (i = Math.floor(i)),
        r <= i ? { firstIndex: r, lastIndex: i, isStart: t === r, isEnd: n === i } : null
      );
    }
    getDateDayIndex(e) {
      let { indices: t } = this,
        n = Math.floor(kt(this.dates[0], e));
      return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n];
    }
  }
  class Bs {
    constructor(e, t) {
      let n,
        r,
        i,
        { dates: s } = e;
      if (t) {
        for (r = s[0].getUTCDay(), n = 1; n < s.length && s[n].getUTCDay() !== r; n += 1);
        i = Math.ceil(s.length / n);
      } else (i = 1), (n = s.length);
      (this.rowCnt = i),
        (this.colCnt = n),
        (this.daySeries = e),
        (this.cells = this.buildCells()),
        (this.headerDates = this.buildHeaderDates());
    }
    buildCells() {
      let e = [];
      for (let t = 0; t < this.rowCnt; t += 1) {
        let n = [];
        for (let e = 0; e < this.colCnt; e += 1) n.push(this.buildCell(t, e));
        e.push(n);
      }
      return e;
    }
    buildCell(e, t) {
      let n = this.daySeries.dates[e * this.colCnt + t];
      return { key: n.toISOString(), date: n };
    }
    buildHeaderDates() {
      let e = [];
      for (let t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
      return e;
    }
    sliceRange(e) {
      let { colCnt: t } = this,
        n = this.daySeries.sliceRange(e),
        r = [];
      if (n) {
        let { firstIndex: e, lastIndex: i } = n,
          s = e;
        for (; s <= i; ) {
          let o = Math.floor(s / t),
            l = Math.min((o + 1) * t, i + 1);
          r.push({
            row: o,
            firstCol: s % t,
            lastCol: (l - 1) % t,
            isStart: n.isStart && s === e,
            isEnd: n.isEnd && l - 1 === i,
          }),
            (s = l);
        }
      }
      return r;
    }
  }
  class js {
    constructor() {
      (this.sliceBusinessHours = Qt(this._sliceBusinessHours)),
        (this.sliceDateSelection = Qt(this._sliceDateSpan)),
        (this.sliceEventStore = Qt(this._sliceEventStore)),
        (this.sliceEventDrag = Qt(this._sliceInteraction)),
        (this.sliceEventResize = Qt(this._sliceInteraction)),
        (this.forceDayIfListItem = !1);
    }
    sliceProps(e, t, n, r, ...i) {
      let { eventUiBases: s } = e,
        o = this.sliceEventStore(e.eventStore, s, t, n, ...i);
      return {
        dateSelectionSegs: this.sliceDateSelection(e.dateSelection, t, n, s, r, ...i),
        businessHourSegs: this.sliceBusinessHours(e.businessHours, t, n, r, ...i),
        fgEventSegs: o.fg,
        bgEventSegs: o.bg,
        eventDrag: this.sliceEventDrag(e.eventDrag, s, t, n, ...i),
        eventResize: this.sliceEventResize(e.eventResize, s, t, n, ...i),
        eventSelection: e.eventSelection,
      };
    }
    sliceNowDate(e, t, n, r, ...i) {
      return this._sliceDateSpan({ range: { start: e, end: Tt(e, 1) }, allDay: !1 }, t, n, {}, r, ...i);
    }
    _sliceBusinessHours(e, t, n, r, ...i) {
      return e ? this._sliceEventStore(Er(e, Ls(t, Boolean(n)), r), {}, t, n, ...i).bg : [];
    }
    _sliceEventStore(e, t, n, r, ...i) {
      if (e) {
        let s = ci(e, t, Ls(n, Boolean(r)), r);
        return { bg: this.sliceEventRanges(s.bg, i), fg: this.sliceEventRanges(s.fg, i) };
      }
      return { bg: [], fg: [] };
    }
    _sliceInteraction(e, t, n, r, ...i) {
      if (!e) return null;
      let s = ci(e.mutatedEvents, t, Ls(n, Boolean(r)), r);
      return {
        segs: this.sliceEventRanges(s.fg, i),
        affectedInstances: e.affectedEvents.instances,
        isEvent: e.isEvent,
      };
    }
    _sliceDateSpan(e, t, n, r, i, ...s) {
      if (!e) return [];
      let o = Ls(t, Boolean(n)),
        l = cr(e.range, o);
      if (l) {
        let t = (function (e, t, n) {
            let r = xr({ editable: !1 }, n),
              i = _r(r.refined, r.extra, '', e.allDay, !0, n);
            return { def: i, ui: pi(i, t), instance: Sr(i.defId, e.range), range: e.range, isStart: !0, isEnd: !0 };
          })((e = Object.assign(Object.assign({}, e), { range: l })), r, i),
          n = this.sliceRange(e.range, ...s);
        for (let e of n) e.eventRange = t;
        return n;
      }
      return [];
    }
    sliceEventRanges(e, t) {
      let n = [];
      for (let r of e) n.push(...this.sliceEventRange(r, t));
      return n;
    }
    sliceEventRange(e, t) {
      let n = e.range;
      this.forceDayIfListItem && 'list-item' === e.ui.display && (n = { start: n.start, end: xt(n.start, 1) });
      let r = this.sliceRange(n, ...t);
      for (let t of r) (t.eventRange = e), (t.isStart = e.isStart && t.isStart), (t.isEnd = e.isEnd && t.isEnd);
      return r;
    }
  }
  function Ls(e, t) {
    let n = e.activeRange;
    return t
      ? n
      : { start: Tt(n.start, e.slotMinTime.milliseconds), end: Tt(n.end, e.slotMaxTime.milliseconds - 864e5) };
  }
  function zs(e, t, n) {
    let { instances: r } = e.mutatedEvents;
    for (let e in r) if (!hr(t.validRange, r[e].range)) return !1;
    return Gs({ eventDrag: e }, n);
  }
  function Us(e, t, n) {
    return !!hr(t.validRange, e.range) && Gs({ dateSelection: e }, n);
  }
  function Gs(e, t) {
    let n = t.getCurrentData(),
      r = Object.assign(
        {
          businessHours: n.businessHours,
          dateSelection: '',
          eventStore: n.eventStore,
          eventUiBases: n.eventUiBases,
          eventSelection: '',
          eventDrag: null,
          eventResize: null,
        },
        e,
      );
    return (t.pluginHooks.isPropsValid || Fs)(r, t);
  }
  function Fs(e, t, n = {}, r) {
    return (
      !(
        e.eventDrag &&
        !(function (e, t, n, r) {
          let i = t.getCurrentData(),
            s = e.eventDrag,
            o = s.mutatedEvents,
            l = o.defs,
            a = o.instances,
            c = fi(l, s.isEvent ? e.eventUiBases : { '': i.selectionConfig });
          r && (c = xn(c, r));
          let d =
              ((p = e.eventStore),
              (g = s.affectedEvents.instances),
              { defs: p.defs, instances: An(p.instances, (e) => !g[e.instanceId]) }),
            u = d.defs,
            h = d.instances,
            f = fi(u, e.eventUiBases);
          var p, g;
          for (let r in a) {
            let o = a[r],
              p = o.range,
              g = c[o.defId],
              m = l[o.defId];
            if (!Vs(g.constraints, p, d, e.businessHours, t)) return !1;
            let { eventOverlap: v } = t.options,
              y = 'function' == typeof v ? v : null;
            for (let e in h) {
              let n = h[e];
              if (ur(p, n.range)) {
                if (!1 === f[n.defId].overlap && s.isEvent) return !1;
                if (!1 === g.overlap) return !1;
                if (y && !y(new oi(t, u[n.defId], n), new oi(t, m, o))) return !1;
              }
            }
            let b = i.eventStore;
            for (let e of g.allows) {
              let i,
                s = Object.assign(Object.assign({}, n), { range: o.range, allDay: m.allDay }),
                l = b.defs[m.defId],
                a = b.instances[r];
              if (((i = l ? new oi(t, l, a) : new oi(t, m)), !e(ei(s, t), i))) return !1;
            }
          }
          return !0;
        })(e, t, n, r)
      ) &&
      !(
        e.dateSelection &&
        !(function (e, t, n, r) {
          let i = e.eventStore,
            s = i.defs,
            o = i.instances,
            l = e.dateSelection,
            a = l.range,
            { selectionConfig: c } = t.getCurrentData();
          r && (c = r(c));
          if (!Vs(c.constraints, a, i, e.businessHours, t)) return !1;
          let { selectOverlap: d } = t.options,
            u = 'function' == typeof d ? d : null;
          for (let e in o) {
            let n = o[e];
            if (ur(a, n.range)) {
              if (!1 === c.overlap) return !1;
              if (u && !u(new oi(t, s[n.defId], n), null)) return !1;
            }
          }
          for (let e of c.allows) {
            let r = Object.assign(Object.assign({}, n), l);
            if (!e(ei(r, t), null)) return !1;
          }
          return !0;
        })(e, t, n, r)
      )
    );
  }
  function Vs(e, t, n, r, i) {
    for (let s of e) if (!Qs(qs(s, t, n, r, i), t)) return !1;
    return !0;
  }
  function qs(e, t, n, r, i) {
    return 'businessHours' === e
      ? Ys(Er(r, t, i))
      : 'string' == typeof e
        ? Ys(Pr(n, (t) => t.groupId === e))
        : 'object' == typeof e && e
          ? Ys(Er(e, t, i))
          : [];
  }
  function Ys(e) {
    let { instances: t } = e,
      n = [];
    for (let e in t) n.push(t[e].range);
    return n;
  }
  function Qs(e, t) {
    for (let n of e) if (hr(n, t)) return !0;
    return !1;
  }
  const Zs = /^(visible|hidden)$/;
  class Xs extends Xn {
    constructor() {
      super(...arguments),
        (this.handleEl = (e) => {
          (this.el = e), $n(this.props.elRef, e);
        });
    }
    render() {
      let { props: e } = this,
        { liquid: t, liquidIsAbsolute: n } = e,
        r = t && n,
        i = ['fc-scroller'];
      return (
        t && (n ? i.push('fc-scroller-liquid-absolute') : i.push('fc-scroller-liquid')),
        g(
          'div',
          {
            ref: this.handleEl,
            className: i.join(' '),
            style: {
              overflowX: e.overflowX,
              overflowY: e.overflowY,
              left: (r && -(e.overcomeLeft || 0)) || '',
              right: (r && -(e.overcomeRight || 0)) || '',
              bottom: (r && -(e.overcomeBottom || 0)) || '',
              marginLeft: (!r && -(e.overcomeLeft || 0)) || '',
              marginRight: (!r && -(e.overcomeRight || 0)) || '',
              marginBottom: (!r && -(e.overcomeBottom || 0)) || '',
              maxHeight: e.maxHeight || '',
            },
          },
          e.children,
        )
      );
    }
    needsXScrolling() {
      if (Zs.test(this.props.overflowX)) return !1;
      let { el: e } = this,
        t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(),
        { children: n } = e;
      for (let e = 0; e < n.length; e += 1) {
        if (n[e].getBoundingClientRect().width > t) return !0;
      }
      return !1;
    }
    needsYScrolling() {
      if (Zs.test(this.props.overflowY)) return !1;
      let { el: e } = this,
        t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(),
        { children: n } = e;
      for (let e = 0; e < n.length; e += 1) {
        if (n[e].getBoundingClientRect().height > t) return !0;
      }
      return !1;
    }
    getXScrollbarWidth() {
      return Zs.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight;
    }
    getYScrollbarWidth() {
      return Zs.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth;
    }
  }
  class $s {
    constructor(e) {
      (this.masterCallback = e),
        (this.currentMap = {}),
        (this.depths = {}),
        (this.callbackMap = {}),
        (this.handleValue = (e, t) => {
          let { depths: n, currentMap: r } = this,
            i = !1,
            s = !1;
          null !== e
            ? ((i = t in r), (r[t] = e), (n[t] = (n[t] || 0) + 1), (s = !0))
            : ((n[t] -= 1), n[t] || (delete r[t], delete this.callbackMap[t], (i = !0))),
            this.masterCallback && (i && this.masterCallback(null, String(t)), s && this.masterCallback(e, String(t)));
        });
    }
    createRef(e) {
      let t = this.callbackMap[e];
      return (
        t ||
          (t = this.callbackMap[e] =
            (t) => {
              this.handleValue(t, String(e));
            }),
        t
      );
    }
    collect(e, t, n) {
      return Pn(this.currentMap, e, t, n);
    }
    getAll() {
      return _n(this.currentMap);
    }
  }
  function Js(e) {
    let t = Oe(e, '.fc-scrollgrid-shrink'),
      n = 0;
    for (let e of t) n = Math.max(n, ct(e));
    return Math.ceil(n);
  }
  function Ks(e, t) {
    return e.liquid && t.liquid;
  }
  function eo(e, t) {
    return null != t.maxHeight || Ks(e, t);
  }
  function to(e, t, n, r) {
    let { expandRows: i } = n;
    return 'function' == typeof t.content
      ? t.content(n)
      : g(
          'table',
          {
            role: 'presentation',
            className: [t.tableClassName, e.syncRowHeights ? 'fc-scrollgrid-sync-table' : ''].join(' '),
            style: { minWidth: n.tableMinWidth, width: n.clientWidth, height: i ? n.clientHeight : '' },
          },
          n.tableColGroupNode,
          g(
            r ? 'thead' : 'tbody',
            { role: 'presentation' },
            'function' == typeof t.rowContent ? t.rowContent(n) : t.rowContent,
          ),
        );
  }
  function no(e, t) {
    return Dt(e, t, kn);
  }
  function ro(e, t) {
    let n = [];
    for (let r of e) {
      let e = r.span || 1;
      for (let i = 0; i < e; i += 1)
        n.push(
          g('col', { style: { width: 'shrink' === r.width ? io(t) : r.width || '', minWidth: r.minWidth || '' } }),
        );
    }
    return g('colgroup', {}, ...n);
  }
  function io(e) {
    return null == e ? 4 : e;
  }
  function so(e) {
    for (let t of e) if ('shrink' === t.width) return !0;
    return !1;
  }
  function oo(e, t) {
    let n = ['fc-scrollgrid', t.theme.getClass('table')];
    return e && n.push('fc-scrollgrid-liquid'), n;
  }
  function lo(e, t) {
    let n = ['fc-scrollgrid-section', 'fc-scrollgrid-section-' + e.type, e.className];
    return (
      t && e.liquid && null == e.maxHeight && n.push('fc-scrollgrid-section-liquid'),
      e.isSticky && n.push('fc-scrollgrid-section-sticky'),
      n
    );
  }
  function ao(e) {
    return g('div', {
      className: 'fc-scrollgrid-sticky-shim',
      style: { width: e.clientWidth, minWidth: e.tableMinWidth },
    });
  }
  function co(e) {
    let { stickyHeaderDates: t } = e;
    return (null != t && 'auto' !== t) || (t = 'auto' === e.height || 'auto' === e.viewHeight), t;
  }
  function uo(e) {
    let { stickyFooterScrollbar: t } = e;
    return (null != t && 'auto' !== t) || (t = 'auto' === e.height || 'auto' === e.viewHeight), t;
  }
  class ho extends Xn {
    constructor() {
      super(...arguments),
        (this.processCols = Qt((e) => e, no)),
        (this.renderMicroColGroup = Qt(ro)),
        (this.scrollerRefs = new $s()),
        (this.scrollerElRefs = new $s(this._handleScrollerEl.bind(this))),
        (this.state = { shrinkWidth: null, forceYScrollbars: !1, scrollerClientWidths: {}, scrollerClientHeights: {} }),
        (this.handleSizing = () => {
          this.safeSetState(Object.assign({ shrinkWidth: this.computeShrinkWidth() }, this.computeScrollerDims()));
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        r = e.sections || [],
        i = this.processCols(e.cols),
        s = this.renderMicroColGroup(i, t.shrinkWidth),
        o = oo(e.liquid, n);
      e.collapsibleWidth && o.push('fc-scrollgrid-collapsible');
      let l,
        a = r.length,
        c = 0,
        d = [],
        u = [],
        h = [];
      for (; c < a && 'header' === (l = r[c]).type; ) d.push(this.renderSection(l, s, !0)), (c += 1);
      for (; c < a && 'body' === (l = r[c]).type; ) u.push(this.renderSection(l, s, !1)), (c += 1);
      for (; c < a && 'footer' === (l = r[c]).type; ) h.push(this.renderSection(l, s, !0)), (c += 1);
      let f = !Ni();
      const p = { role: 'rowgroup' };
      return g(
        'table',
        { role: 'grid', className: o.join(' '), style: { height: e.height } },
        Boolean(!f && d.length) && g('thead', p, ...d),
        Boolean(!f && u.length) && g('tbody', p, ...u),
        Boolean(!f && h.length) && g('tfoot', p, ...h),
        f && g('tbody', p, ...d, ...u, ...h),
      );
    }
    renderSection(e, t, n) {
      return 'outerContent' in e
        ? g(v, { key: e.key }, e.outerContent)
        : g(
            'tr',
            { key: e.key, role: 'presentation', className: lo(e, this.props.liquid).join(' ') },
            this.renderChunkTd(e, t, e.chunk, n),
          );
    }
    renderChunkTd(e, t, n, r) {
      if ('outerContent' in n) return n.outerContent;
      let { props: i } = this,
        { forceYScrollbars: s, scrollerClientWidths: o, scrollerClientHeights: l } = this.state,
        a = eo(i, e),
        c = Ks(i, e),
        d = i.liquid ? (s ? 'scroll' : a ? 'auto' : 'hidden') : 'visible',
        u = e.key,
        h = to(
          e,
          n,
          {
            tableColGroupNode: t,
            tableMinWidth: '',
            clientWidth: i.collapsibleWidth || void 0 === o[u] ? null : o[u],
            clientHeight: void 0 !== l[u] ? l[u] : null,
            expandRows: e.expandRows,
            syncRowHeights: !1,
            rowSyncHeights: [],
            reportRowHeightChange: () => {},
          },
          r,
        );
      return g(
        r ? 'th' : 'td',
        { ref: n.elRef, role: 'presentation' },
        g(
          'div',
          { className: 'fc-scroller-harness' + (c ? ' fc-scroller-harness-liquid' : '') },
          g(
            Xs,
            {
              ref: this.scrollerRefs.createRef(u),
              elRef: this.scrollerElRefs.createRef(u),
              overflowY: d,
              overflowX: i.liquid ? 'hidden' : 'visible',
              maxHeight: e.maxHeight,
              liquid: c,
              liquidIsAbsolute: !0,
            },
            h,
          ),
        ),
      );
    }
    _handleScrollerEl(e, t) {
      let n = (function (e, t) {
        for (let n of e) if (n.key === t) return n;
        return null;
      })(this.props.sections, t);
      n && $n(n.chunk.scrollerElRef, e);
    }
    componentDidMount() {
      this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
    }
    componentDidUpdate() {
      this.handleSizing();
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleSizing);
    }
    computeShrinkWidth() {
      return so(this.props.cols) ? Js(this.scrollerElRefs.getAll()) : 0;
    }
    computeScrollerDims() {
      let e = is(),
        { scrollerRefs: t, scrollerElRefs: n } = this,
        r = !1,
        i = {},
        s = {};
      for (let e in t.currentMap) {
        let n = t.currentMap[e];
        if (n && n.needsYScrolling()) {
          r = !0;
          break;
        }
      }
      for (let t of this.props.sections) {
        let o = t.key,
          l = n.currentMap[o];
        if (l) {
          let t = l.parentNode;
          (i[o] = Math.floor(t.getBoundingClientRect().width - (r ? e.y : 0))),
            (s[o] = Math.floor(t.getBoundingClientRect().height));
        }
      }
      return { forceYScrollbars: r, scrollerClientWidths: i, scrollerClientHeights: s };
    }
  }
  ho.addStateEquality({ scrollerClientWidths: kn, scrollerClientHeights: kn });
  class fo extends Xn {
    constructor() {
      super(...arguments),
        (this.handleEl = (e) => {
          (this.el = e), e && ui(e, this.props.seg);
        });
    }
    render() {
      const { props: e, context: t } = this,
        { options: n } = t,
        { seg: r } = e,
        { eventRange: i } = r,
        { ui: s } = i,
        o = {
          event: new oi(t, i.def, i.instance),
          view: t.viewApi,
          timeText: e.timeText,
          textColor: s.textColor,
          backgroundColor: s.backgroundColor,
          borderColor: s.borderColor,
          isDraggable: !e.disableDragging && vi(r, t),
          isStartResizable: !e.disableResizing && yi(r, t),
          isEndResizable: !e.disableResizing && bi(r),
          isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
          isStart: Boolean(r.isStart),
          isEnd: Boolean(r.isEnd),
          isPast: Boolean(e.isPast),
          isFuture: Boolean(e.isFuture),
          isToday: Boolean(e.isToday),
          isSelected: Boolean(e.isSelected),
          isDragging: Boolean(e.isDragging),
          isResizing: Boolean(e.isResizing),
        };
      return g(
        rr,
        Object.assign({}, e, {
          elRef: this.handleEl,
          elClasses: [...Ci(o), ...r.eventRange.ui.classNames, ...(e.elClasses || [])],
          renderProps: o,
          generatorName: 'eventContent',
          customGenerator: n.eventContent,
          defaultGenerator: e.defaultGenerator,
          classNameGenerator: n.eventClassNames,
          didMount: n.eventDidMount,
          willUnmount: n.eventWillUnmount,
        }),
      );
    }
    componentDidUpdate(e) {
      this.el && this.props.seg !== e.seg && ui(this.el, this.props.seg);
    }
  }
  class po extends Xn {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        { seg: r } = e,
        { ui: i } = r.eventRange,
        s = Si(r, n.eventTimeFormat || e.defaultTimeFormat, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
      return g(
        fo,
        Object.assign({}, e, {
          elTag: 'a',
          elStyle: { borderColor: i.borderColor, backgroundColor: i.backgroundColor },
          elAttrs: Di(r, t),
          defaultGenerator: go,
          timeText: s,
        }),
        (e, t) =>
          g(
            v,
            null,
            g(e, { elTag: 'div', elClasses: ['fc-event-main'], elStyle: { color: t.textColor } }),
            Boolean(t.isStartResizable) && g('div', { className: 'fc-event-resizer fc-event-resizer-start' }),
            Boolean(t.isEndResizable) && g('div', { className: 'fc-event-resizer fc-event-resizer-end' }),
          ),
      );
    }
  }
  function go(e) {
    return g(
      'div',
      { className: 'fc-event-main-frame' },
      e.timeText && g('div', { className: 'fc-event-time' }, e.timeText),
      g(
        'div',
        { className: 'fc-event-title-container' },
        g('div', { className: 'fc-event-title fc-sticky' }, e.event.title || g(v, null, ' ')),
      ),
    );
  }
  const mo = (e) =>
      g(Yn.Consumer, null, (t) => {
        let { options: n } = t,
          r = { isAxis: e.isAxis, date: t.dateEnv.toDate(e.date), view: t.viewApi };
        return g(
          rr,
          Object.assign({}, e, {
            elTag: e.elTag || 'div',
            renderProps: r,
            generatorName: 'nowIndicatorContent',
            customGenerator: n.nowIndicatorContent,
            classNameGenerator: n.nowIndicatorClassNames,
            didMount: n.nowIndicatorDidMount,
            willUnmount: n.nowIndicatorWillUnmount,
          }),
        );
      }),
    vo = hn({ day: 'numeric' });
  class yo extends Xn {
    constructor() {
      super(...arguments), (this.refineRenderProps = Zt(So));
    }
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        r = this.refineRenderProps({
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          isMonthStart: e.isMonthStart || !1,
          showDayNumber: e.showDayNumber,
          extraRenderProps: e.extraRenderProps,
          viewApi: t.viewApi,
          dateEnv: t.dateEnv,
          monthStartFormat: n.monthStartFormat,
        });
      return g(
        rr,
        Object.assign({}, e, {
          elClasses: [...Xi(r, t.theme), ...(e.elClasses || [])],
          elAttrs: Object.assign(Object.assign({}, e.elAttrs), r.isDisabled ? {} : { 'data-date': Ft(e.date) }),
          renderProps: r,
          generatorName: 'dayCellContent',
          customGenerator: n.dayCellContent,
          defaultGenerator: e.defaultGenerator,
          classNameGenerator: r.isDisabled ? void 0 : n.dayCellClassNames,
          didMount: n.dayCellDidMount,
          willUnmount: n.dayCellWillUnmount,
        }),
      );
    }
  }
  function bo(e) {
    return Boolean(e.dayCellContent || Kn('dayCellContent', e));
  }
  function So(e) {
    let { date: t, dateEnv: n, dateProfile: r, isMonthStart: i } = e,
      s = Zi(t, e.todayRange, null, r),
      o = e.showDayNumber ? n.format(t, i ? e.monthStartFormat : vo) : '';
    return Object.assign(
      Object.assign(Object.assign({ date: n.toDate(t), view: e.viewApi }, s), { isMonthStart: i, dayNumberText: o }),
      e.extraRenderProps,
    );
  }
  class Eo extends Xn {
    render() {
      let { props: e } = this,
        { seg: t } = e;
      return g(fo, {
        elTag: 'div',
        elClasses: ['fc-bg-event'],
        elStyle: { backgroundColor: t.eventRange.ui.backgroundColor },
        defaultGenerator: Co,
        seg: t,
        timeText: '',
        isDragging: !1,
        isResizing: !1,
        isDateSelecting: !1,
        isSelected: !1,
        isPast: e.isPast,
        isFuture: e.isFuture,
        isToday: e.isToday,
        disableDragging: !0,
        disableResizing: !0,
      });
    }
  }
  function Co(e) {
    let { title: t } = e.event;
    return t && g('div', { className: 'fc-event-title' }, e.event.title);
  }
  function wo(e) {
    return g('div', { className: 'fc-' + e });
  }
  const Do = (e) =>
    g(Yn.Consumer, null, (t) => {
      let { dateEnv: n, options: r } = t,
        { date: i } = e,
        s = r.weekNumberFormat || e.defaultFormat,
        o = { num: n.computeWeekNumber(i), text: n.format(i, s), date: i };
      return g(
        rr,
        Object.assign({}, e, {
          renderProps: o,
          generatorName: 'weekNumberContent',
          customGenerator: r.weekNumberContent,
          defaultGenerator: Ro,
          classNameGenerator: r.weekNumberClassNames,
          didMount: r.weekNumberDidMount,
          willUnmount: r.weekNumberWillUnmount,
        }),
      );
    });
  function Ro(e) {
    return e.text;
  }
  class Ao extends Xn {
    constructor() {
      super(...arguments),
        (this.state = { titleId: Le() }),
        (this.handleRootEl = (e) => {
          (this.rootEl = e), this.props.elRef && $n(this.props.elRef, e);
        }),
        (this.handleDocumentMouseDown = (e) => {
          const t = Be(e);
          this.rootEl.contains(t) || this.handleCloseClick();
        }),
        (this.handleDocumentKeyDown = (e) => {
          'Escape' === e.key && this.handleCloseClick();
        }),
        (this.handleCloseClick = () => {
          let { onClose: e } = this.props;
          e && e();
        });
    }
    render() {
      let { theme: e, options: t } = this.context,
        { props: n, state: r } = this,
        i = ['fc-popover', e.getClass('popover')].concat(n.extraClassNames || []);
      return (function (e, t) {
        var n = g(ue, { __v: e, i: t });
        return (n.containerInfo = t), n;
      })(
        g(
          'div',
          Object.assign({}, n.extraAttrs, {
            id: n.id,
            className: i.join(' '),
            'aria-labelledby': r.titleId,
            ref: this.handleRootEl,
          }),
          g(
            'div',
            { className: 'fc-popover-header ' + e.getClass('popoverHeader') },
            g('span', { className: 'fc-popover-title', id: r.titleId }, n.title),
            g('span', {
              className: 'fc-popover-close ' + e.getIconClass('close'),
              title: t.closeHint,
              onClick: this.handleCloseClick,
            }),
          ),
          g('div', { className: 'fc-popover-body ' + e.getClass('popoverContent') }, n.children),
        ),
        n.parentEl,
      );
    }
    componentDidMount() {
      document.addEventListener('mousedown', this.handleDocumentMouseDown),
        document.addEventListener('keydown', this.handleDocumentKeyDown),
        this.updateSize();
    }
    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleDocumentMouseDown),
        document.removeEventListener('keydown', this.handleDocumentKeyDown);
    }
    updateSize() {
      let { isRtl: e } = this.context,
        { alignmentEl: t, alignGridTop: n } = this.props,
        { rootEl: r } = this,
        i = (function (e) {
          let t = cs(e),
            n = e.getBoundingClientRect();
          for (let e of t) {
            let t = zi(n, e.getBoundingClientRect());
            if (!t) return null;
            n = t;
          }
          return n;
        })(t);
      if (i) {
        let s = r.getBoundingClientRect(),
          o = n ? Me(t, '.fc-scrollgrid').getBoundingClientRect().top : i.top,
          l = e ? i.right - s.width : i.left;
        (o = Math.max(o, 10)),
          (l = Math.min(l, document.documentElement.clientWidth - 10 - s.width)),
          (l = Math.max(l, 10));
        let a = r.offsetParent.getBoundingClientRect();
        He(r, { top: o - a.top, left: l - a.left });
      }
    }
  }
  class xo extends gs {
    constructor() {
      super(...arguments),
        (this.handleRootEl = (e) => {
          (this.rootEl = e),
            e
              ? this.context.registerInteractiveComponent(this, { el: e, useEventCenter: !1 })
              : this.context.unregisterInteractiveComponent(this);
        });
    }
    render() {
      let { options: e, dateEnv: t } = this.context,
        { props: n } = this,
        { startDate: r, todayRange: i, dateProfile: s } = n,
        o = t.format(r, e.dayPopoverFormat);
      return g(yo, { elRef: this.handleRootEl, date: r, dateProfile: s, todayRange: i }, (t, r, i) =>
        g(
          Ao,
          {
            elRef: i.ref,
            id: n.id,
            title: o,
            extraClassNames: ['fc-more-popover'].concat(i.className || []),
            extraAttrs: i,
            parentEl: n.parentEl,
            alignmentEl: n.alignmentEl,
            alignGridTop: n.alignGridTop,
            onClose: n.onClose,
          },
          bo(e) && g(t, { elTag: 'div', elClasses: ['fc-more-popover-misc'] }),
          n.children,
        ),
      );
    }
    queryHit(e, t, n, r) {
      let { rootEl: i, props: s } = this;
      return e >= 0 && e < n && t >= 0 && t < r
        ? {
            dateProfile: s.dateProfile,
            dateSpan: Object.assign(
              { allDay: !s.forceTimed, range: { start: s.startDate, end: s.endDate } },
              s.extraDateSpan,
            ),
            dayEl: i,
            rect: { left: 0, top: 0, right: n, bottom: r },
            layer: 1,
          }
        : null;
    }
  }
  class To extends Xn {
    constructor() {
      super(...arguments),
        (this.state = { isPopoverOpen: !1, popoverId: Le() }),
        (this.handleLinkEl = (e) => {
          (this.linkEl = e), this.props.elRef && $n(this.props.elRef, e);
        }),
        (this.handleClick = (e) => {
          let { props: t, context: n } = this,
            { moreLinkClick: r } = n.options,
            i = ko(t).start;
          function s(e) {
            let { def: t, instance: r, range: i } = e.eventRange;
            return {
              event: new oi(n, t, r),
              start: n.dateEnv.toDate(i.start),
              end: n.dateEnv.toDate(i.end),
              isStart: e.isStart,
              isEnd: e.isEnd,
            };
          }
          'function' == typeof r &&
            (r = r({
              date: i,
              allDay: Boolean(t.allDayDate),
              allSegs: t.allSegs.map(s),
              hiddenSegs: t.hiddenSegs.map(s),
              jsEvent: e,
              view: n.viewApi,
            })),
            r && 'popover' !== r
              ? 'string' == typeof r && n.calendarApi.zoomTo(i, r)
              : this.setState({ isPopoverOpen: !0 });
        }),
        (this.handlePopoverClose = () => {
          this.setState({ isPopoverOpen: !1 });
        });
    }
    render() {
      let { props: e, state: t } = this;
      return g(Yn.Consumer, null, (n) => {
        let { viewApi: r, options: i, calendarApi: s } = n,
          { moreLinkText: o } = i,
          { moreCnt: l } = e,
          a = ko(e),
          c = 'function' == typeof o ? o.call(s, l) : `+${l} ${o}`,
          d = ot(i.moreLinkHint, [l], c),
          u = { num: l, shortText: '+' + l, text: c, view: r };
        return g(
          v,
          null,
          Boolean(e.moreCnt) &&
            g(
              rr,
              {
                elTag: e.elTag || 'a',
                elRef: this.handleLinkEl,
                elClasses: [...(e.elClasses || []), 'fc-more-link'],
                elStyle: e.elStyle,
                elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), Ve(this.handleClick)), {
                  title: d,
                  'aria-expanded': t.isPopoverOpen,
                  'aria-controls': t.isPopoverOpen ? t.popoverId : '',
                }),
                renderProps: u,
                generatorName: 'moreLinkContent',
                customGenerator: i.moreLinkContent,
                defaultGenerator: e.defaultGenerator || _o,
                classNameGenerator: i.moreLinkClassNames,
                didMount: i.moreLinkDidMount,
                willUnmount: i.moreLinkWillUnmount,
              },
              e.children,
            ),
          t.isPopoverOpen &&
            g(
              xo,
              {
                id: t.popoverId,
                startDate: a.start,
                endDate: a.end,
                dateProfile: e.dateProfile,
                todayRange: e.todayRange,
                extraDateSpan: e.extraDateSpan,
                parentEl: this.parentEl,
                alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl,
                alignGridTop: e.alignGridTop,
                forceTimed: e.forceTimed,
                onClose: this.handlePopoverClose,
              },
              e.popoverContent(),
            ),
        );
      });
    }
    componentDidMount() {
      this.updateParentEl();
    }
    componentDidUpdate() {
      this.updateParentEl();
    }
    updateParentEl() {
      this.linkEl && (this.parentEl = Me(this.linkEl, '.fc-view-harness'));
    }
  }
  function _o(e) {
    return e.text;
  }
  function ko(e) {
    if (e.allDayDate) return { start: e.allDayDate, end: xt(e.allDayDate, 1) };
    let { hiddenSegs: t } = e;
    return { start: Mo(t), end: ((n = t), n.reduce(Oo).eventRange.range.end) };
    var n;
  }
  function Mo(e) {
    return e.reduce(Io).eventRange.range.start;
  }
  function Io(e, t) {
    return e.eventRange.range.start < t.eventRange.range.start ? e : t;
  }
  function Oo(e, t) {
    return e.eventRange.range.end > t.eventRange.range.end ? e : t;
  }
  var No = {
    __proto__: null,
    BASE_OPTION_DEFAULTS: pn,
    BaseComponent: Xn,
    BgEvent: Eo,
    CalendarImpl: ji,
    CalendarRoot: Pi,
    ContentContainer: rr,
    CustomRenderingStore: class extends class {
      constructor() {
        this.handlers = [];
      }
      set(e) {
        this.currentValue = e;
        for (let t of this.handlers) t(e);
      }
      subscribe(e) {
        this.handlers.push(e), void 0 !== this.currentValue && e(this.currentValue);
      }
    } {
      constructor() {
        super(...arguments), (this.map = new Map());
      }
      handle(e) {
        const { map: t } = this;
        let n = !1;
        e.isActive ? (t.set(e.id, e), (n = !0)) : t.has(e.id) && (t.delete(e.id), (n = !0)), n && this.set(t);
      }
    },
    DateComponent: gs,
    DateEnv: zn,
    DateProfileGenerator: br,
    DayCellContainer: yo,
    DayHeader: Ps,
    DaySeriesModel: Ws,
    DayTableModel: Bs,
    DelayedRunner: _e,
    ElementDragging: ws,
    ElementScrollController: fs,
    Emitter: Xr,
    EventContainer: fo,
    EventImpl: oi,
    Interaction: Hi,
    MoreLinkContainer: To,
    NamedTimeZoneImpl: class {
      constructor(e) {
        this.timeZoneName = e;
      }
    },
    NowIndicatorContainer: mo,
    NowTimer: Os,
    PositionCache: ds,
    RefMap: $s,
    ScrollController: hs,
    ScrollResponder: qn,
    Scroller: Xs,
    SegHierarchy: ms,
    SimpleScrollGrid: ho,
    Slicer: js,
    Splitter: Yi,
    StandardEvent: po,
    TableDateCell: ks,
    TableDowCell: Is,
    Theme: Un,
    ViewContainer: sr,
    ViewContextType: Yn,
    WeekNumberContainer: Do,
    WindowScrollController: ps,
    addDays: xt,
    addDurations: gt,
    addMs: Tt,
    addWeeks: At,
    allowContextMenu: et,
    allowSelection: Je,
    applyMutationToEventStore: ni,
    applyStyle: He,
    asCleanDays: pt,
    asRoughMinutes: yt,
    asRoughMs: St,
    asRoughSeconds: bt,
    binarySearch: Cs,
    buildElAttrs: er,
    buildEntryKey: ys,
    buildEventApis: ai,
    buildEventRangeKey: wi,
    buildIsoString: Gt,
    buildNavLinkAttrs: es,
    buildSegTimeText: Si,
    collectFromHash: Pn,
    combineEventUis: Lr,
    compareByFieldSpecs: nt,
    compareNumbers: lt,
    compareObjs: On,
    computeEarliestSegStart: Mo,
    computeEdges: os,
    computeFallbackHeaderFormat: xs,
    computeInnerRect: ls,
    computeRect: as,
    computeShrinkWidth: Js,
    computeVisibleDayRange: gr,
    config: Ds,
    constrainPoint: Gi,
    createDuration: ht,
    createEmptyEventStore: Or,
    createEventInstance: Sr,
    createEventUi: jr,
    createFormatter: hn,
    diffDates: vr,
    diffDayAndTime: Mt,
    diffDays: kt,
    diffPoints: Vi,
    diffWeeks: _t,
    diffWholeDays: Ot,
    diffWholeWeeks: It,
    disableCursor: Ze,
    elementClosest: Me,
    elementMatches: Ie,
    enableCursor: Xe,
    eventTupleToStore: Mr,
    filterHash: An,
    findDirectChildren: Ne,
    findElements: Oe,
    flexibleCompare: it,
    formatDayString: Ft,
    formatIsoMonthStr: Vt,
    formatIsoTimeString: qt,
    getAllowYScrolling: eo,
    getCanVGrowWithinCell: Ni,
    getClippingParents: cs,
    getDateMeta: Zi,
    getDayClassNames: Xi,
    getDefaultEventEnd: ti,
    getElSeg: hi,
    getEntrySpanEnd: vs,
    getEventTargetViaRoot: Be,
    getIsRtlScrollbarOnLeft: rs,
    getRectCenter: Fi,
    getRelevantEvents: Ir,
    getScrollGridClassNames: oo,
    getScrollbarWidths: is,
    getSectionClassNames: lo,
    getSectionHasLiquidHeight: Ks,
    getSegAnchorAttrs: Di,
    getSegMeta: Ei,
    getSlotClassNames: $i,
    getStickyFooterScrollbar: uo,
    getStickyHeaderDates: co,
    getUniqueDomId: Le,
    greatestDurationDenominator: Ct,
    groupIntersectingEntries: bs,
    guid: Qe,
    hasBgRendering: di,
    hasCustomDayCellContent: bo,
    hasShrinkWidth: so,
    identity: wn,
    injectStyles: Re,
    interactionSettingsStore: Bi,
    interactionSettingsToStore: Wi,
    intersectRanges: cr,
    intersectRects: zi,
    intersectSpans: Ss,
    isArraysEqual: Dt,
    isColPropsEqual: no,
    isDateSelectionValid: Us,
    isDateSpansEqual: xi,
    isInt: at,
    isInteractionValid: zs,
    isMultiDayRange: mr,
    isPropsEqual: kn,
    isPropsValid: Fs,
    isValidDate: zt,
    mapHash: xn,
    memoize: Qt,
    memoizeArraylike: Xt,
    memoizeHashlike: $t,
    memoizeObjArg: Zt,
    mergeEventStores: Nr,
    multiplyDuration: mt,
    padStart: st,
    parseBusinessHours: Jr,
    parseClassNames: Hr,
    parseDragMeta: As,
    parseEventDef: _r,
    parseFieldSpecs: tt,
    parseMarker: Ln,
    pointInsideRect: Li,
    preventContextMenu: Ke,
    preventDefault: ze,
    preventSelection: $e,
    rangeContainsMarker: fr,
    rangeContainsRange: hr,
    rangesEqual: dr,
    rangesIntersect: ur,
    refineEventDef: xr,
    refineProps: Cn,
    removeElement: ke,
    removeExact: wt,
    renderChunkContent: to,
    renderFill: wo,
    renderMicroColGroup: ro,
    renderScrollShim: ao,
    requestJson: Ii,
    sanitizeShrinkWidth: io,
    setRef: $n,
    sliceEventStore: ci,
    sortEventSegs: gi,
    startOfDay: Nt,
    translateRect: Ui,
    triggerDateSelect: Kr,
    unpromisify: ki,
    whenTransitionDone: Fe,
    wholeDivideDurations: Et,
  };
  const Po = [],
    Ho = {
      code: 'en',
      week: { dow: 0, doy: 4 },
      direction: 'ltr',
      buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: 'year',
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day',
        list: 'list',
      },
      weekText: 'W',
      weekTextLong: 'Week',
      closeHint: 'Close',
      timeHint: 'Time',
      eventHint: 'Event',
      allDayText: 'all-day',
      moreLinkText: 'more',
      noEventsText: 'No events to display',
    },
    Wo = Object.assign(Object.assign({}, Ho), {
      buttonHints: { prev: 'Previous $0', next: 'Next $0', today: (e, t) => ('day' === t ? 'Today' : 'This ' + e) },
      viewHint: '$0 view',
      navLinkHint: 'Go to $0',
      moreLinkHint: (e) => `Show ${e} more event${1 === e ? '' : 's'}`,
    });
  function Bo(e) {
    let t = e.length > 0 ? e[0].code : 'en',
      n = Po.concat(e),
      r = { en: Wo };
    for (let e of n) r[e.code] = e;
    return { map: r, defaultCode: t };
  }
  function jo(e, t) {
    return 'object' != typeof e || Array.isArray(e)
      ? (function (e, t) {
          let n = [].concat(e || []),
            r =
              (function (e, t) {
                for (let n = 0; n < e.length; n += 1) {
                  let r = e[n].toLocaleLowerCase().split('-');
                  for (let e = r.length; e > 0; e -= 1) {
                    let n = r.slice(0, e).join('-');
                    if (t[n]) return t[n];
                  }
                }
                return null;
              })(n, t) || Wo;
          return Lo(e, n, r);
        })(e, t)
      : Lo(e.code, [e.code], e);
  }
  function Lo(e, t, n) {
    let r = Rn([Ho, n], ['buttonText']);
    delete r.code;
    let { week: i } = r;
    return delete r.week, { codeArg: e, codes: t, week: i, simpleNumberFormat: new Intl.NumberFormat(e), options: r };
  }
  function zo(e) {
    return {
      id: Qe(),
      name: e.name,
      premiumReleaseDate: e.premiumReleaseDate ? new Date(e.premiumReleaseDate) : void 0,
      deps: e.deps || [],
      reducers: e.reducers || [],
      isLoadingFuncs: e.isLoadingFuncs || [],
      contextInit: [].concat(e.contextInit || []),
      eventRefiners: e.eventRefiners || {},
      eventDefMemberAdders: e.eventDefMemberAdders || [],
      eventSourceRefiners: e.eventSourceRefiners || {},
      isDraggableTransformers: e.isDraggableTransformers || [],
      eventDragMutationMassagers: e.eventDragMutationMassagers || [],
      eventDefMutationAppliers: e.eventDefMutationAppliers || [],
      dateSelectionTransformers: e.dateSelectionTransformers || [],
      datePointTransforms: e.datePointTransforms || [],
      dateSpanTransforms: e.dateSpanTransforms || [],
      views: e.views || {},
      viewPropsTransformers: e.viewPropsTransformers || [],
      isPropsValid: e.isPropsValid || null,
      externalDefTransforms: e.externalDefTransforms || [],
      viewContainerAppends: e.viewContainerAppends || [],
      eventDropTransformers: e.eventDropTransformers || [],
      componentInteractions: e.componentInteractions || [],
      calendarInteractions: e.calendarInteractions || [],
      themeClasses: e.themeClasses || {},
      eventSourceDefs: e.eventSourceDefs || [],
      cmdFormatter: e.cmdFormatter,
      recurringTypes: e.recurringTypes || [],
      namedTimeZonedImpl: e.namedTimeZonedImpl,
      initialView: e.initialView || '',
      elementDraggingImpl: e.elementDraggingImpl,
      optionChangeHandlers: e.optionChangeHandlers || {},
      scrollGridImpl: e.scrollGridImpl || null,
      listenerRefiners: e.listenerRefiners || {},
      optionRefiners: e.optionRefiners || {},
      propSetHandlers: e.propSetHandlers || {},
    };
  }
  function Uo() {
    let e,
      t = [],
      n = [];
    return (r, i) => (
      (e && Dt(r, t) && Dt(i, n)) ||
        (e = (function (e, t) {
          let n = {},
            r = {
              premiumReleaseDate: void 0,
              reducers: [],
              isLoadingFuncs: [],
              contextInit: [],
              eventRefiners: {},
              eventDefMemberAdders: [],
              eventSourceRefiners: {},
              isDraggableTransformers: [],
              eventDragMutationMassagers: [],
              eventDefMutationAppliers: [],
              dateSelectionTransformers: [],
              datePointTransforms: [],
              dateSpanTransforms: [],
              views: {},
              viewPropsTransformers: [],
              isPropsValid: null,
              externalDefTransforms: [],
              viewContainerAppends: [],
              eventDropTransformers: [],
              componentInteractions: [],
              calendarInteractions: [],
              themeClasses: {},
              eventSourceDefs: [],
              cmdFormatter: null,
              recurringTypes: [],
              namedTimeZonedImpl: null,
              initialView: '',
              elementDraggingImpl: null,
              optionChangeHandlers: {},
              scrollGridImpl: null,
              listenerRefiners: {},
              optionRefiners: {},
              propSetHandlers: {},
            };
          function i(e) {
            for (let o of e) {
              const e = o.name,
                l = n[e];
              void 0 === l
                ? ((n[e] = o.id),
                  i(o.deps),
                  (s = o),
                  (r = {
                    premiumReleaseDate: Go((t = r).premiumReleaseDate, s.premiumReleaseDate),
                    reducers: t.reducers.concat(s.reducers),
                    isLoadingFuncs: t.isLoadingFuncs.concat(s.isLoadingFuncs),
                    contextInit: t.contextInit.concat(s.contextInit),
                    eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), s.eventRefiners),
                    eventDefMemberAdders: t.eventDefMemberAdders.concat(s.eventDefMemberAdders),
                    eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), s.eventSourceRefiners),
                    isDraggableTransformers: t.isDraggableTransformers.concat(s.isDraggableTransformers),
                    eventDragMutationMassagers: t.eventDragMutationMassagers.concat(s.eventDragMutationMassagers),
                    eventDefMutationAppliers: t.eventDefMutationAppliers.concat(s.eventDefMutationAppliers),
                    dateSelectionTransformers: t.dateSelectionTransformers.concat(s.dateSelectionTransformers),
                    datePointTransforms: t.datePointTransforms.concat(s.datePointTransforms),
                    dateSpanTransforms: t.dateSpanTransforms.concat(s.dateSpanTransforms),
                    views: Object.assign(Object.assign({}, t.views), s.views),
                    viewPropsTransformers: t.viewPropsTransformers.concat(s.viewPropsTransformers),
                    isPropsValid: s.isPropsValid || t.isPropsValid,
                    externalDefTransforms: t.externalDefTransforms.concat(s.externalDefTransforms),
                    viewContainerAppends: t.viewContainerAppends.concat(s.viewContainerAppends),
                    eventDropTransformers: t.eventDropTransformers.concat(s.eventDropTransformers),
                    calendarInteractions: t.calendarInteractions.concat(s.calendarInteractions),
                    componentInteractions: t.componentInteractions.concat(s.componentInteractions),
                    themeClasses: Object.assign(Object.assign({}, t.themeClasses), s.themeClasses),
                    eventSourceDefs: t.eventSourceDefs.concat(s.eventSourceDefs),
                    cmdFormatter: s.cmdFormatter || t.cmdFormatter,
                    recurringTypes: t.recurringTypes.concat(s.recurringTypes),
                    namedTimeZonedImpl: s.namedTimeZonedImpl || t.namedTimeZonedImpl,
                    initialView: t.initialView || s.initialView,
                    elementDraggingImpl: t.elementDraggingImpl || s.elementDraggingImpl,
                    optionChangeHandlers: Object.assign(
                      Object.assign({}, t.optionChangeHandlers),
                      s.optionChangeHandlers,
                    ),
                    scrollGridImpl: s.scrollGridImpl || t.scrollGridImpl,
                    listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), s.listenerRefiners),
                    optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), s.optionRefiners),
                    propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), s.propSetHandlers),
                  }))
                : l !== o.id && console.warn(`Duplicate plugin '${e}'`);
            }
            var t, s;
          }
          return e && i(e), i(t), r;
        })(r, i)),
      (t = r),
      (n = i),
      e
    );
  }
  function Go(e, t) {
    return void 0 === e ? t : void 0 === t ? e : new Date(Math.max(e.valueOf(), t.valueOf()));
  }
  class Fo extends Un {}
  function Vo(e, t, n, r) {
    if (t[e]) return t[e];
    let i = (function (e, t, n, r) {
      let i = n[e],
        s = r[e],
        o = (e) => (i && null !== i[e] ? i[e] : s && null !== s[e] ? s[e] : null),
        l = o('component'),
        a = o('superType'),
        c = null;
      if (a) {
        if (a === e) throw new Error("Can't have a custom view type that references itself");
        c = Vo(a, t, n, r);
      }
      !l && c && (l = c.component);
      if (!l) return null;
      return {
        type: e,
        component: l,
        defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
        overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), s ? s.rawOptions : {}),
      };
    })(e, t, n, r);
    return i && (t[e] = i), i;
  }
  function qo(e) {
    return xn(e, Yo);
  }
  function Yo(e) {
    let t = 'function' == typeof e ? { component: e } : e,
      { component: n } = t;
    return (
      t.content
        ? (n = Qo(t))
        : !n || n.prototype instanceof Xn || (n = Qo(Object.assign(Object.assign({}, t), { content: n }))),
      { superType: t.type, component: n, rawOptions: t }
    );
  }
  function Qo(e) {
    return (t) =>
      g(Yn.Consumer, null, (n) =>
        g(rr, {
          elTag: 'div',
          elClasses: or(n.viewSpec),
          renderProps: Object.assign(Object.assign({}, t), { nextDayThreshold: n.options.nextDayThreshold }),
          generatorName: void 0,
          customGenerator: e.content,
          classNameGenerator: e.classNames,
          didMount: e.didMount,
          willUnmount: e.willUnmount,
        }),
      );
  }
  function Zo(e, t, n, r) {
    let i = qo(e),
      s = qo(t.views);
    return xn(
      (function (e, t) {
        let n,
          r = {};
        for (n in e) Vo(n, r, e, t);
        for (n in t) Vo(n, r, e, t);
        return r;
      })(i, s),
      (e) =>
        (function (e, t, n, r, i) {
          let s = e.overrides.duration || e.defaults.duration || r.duration || n.duration,
            o = null,
            l = '',
            a = '',
            c = {};
          if (
            s &&
            ((o = (function (e) {
              let t = JSON.stringify(e),
                n = Xo[t];
              void 0 === n && ((n = ht(e)), (Xo[t] = n));
              return n;
            })(s)),
            o)
          ) {
            let e = Ct(o);
            (l = e.unit), 1 === e.value && ((a = l), (c = t[l] ? t[l].rawOptions : {}));
          }
          let d = (t) => {
              let n = t.buttonText || {},
                r = e.defaults.buttonTextKey;
              return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[a] ? n[a] : null;
            },
            u = (t) => {
              let n = t.buttonHints || {},
                r = e.defaults.buttonTextKey;
              return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[a] ? n[a] : null;
            };
          return {
            type: e.type,
            component: e.component,
            duration: o,
            durationUnit: l,
            singleUnit: a,
            optionDefaults: e.defaults,
            optionOverrides: Object.assign(Object.assign({}, c), e.overrides),
            buttonTextOverride: d(r) || d(n) || e.overrides.buttonText,
            buttonTextDefault: d(i) || e.defaults.buttonText || d(pn) || e.type,
            buttonTitleOverride: u(r) || u(n) || e.overrides.buttonHint,
            buttonTitleDefault: u(i) || e.defaults.buttonHint || u(pn),
          };
        })(e, s, t, n, r),
    );
  }
  (Fo.prototype.classes = {
    root: 'fc-theme-standard',
    tableCellShaded: 'fc-cell-shaded',
    buttonGroup: 'fc-button-group',
    button: 'fc-button fc-button-primary',
    buttonActive: 'fc-button-active',
  }),
    (Fo.prototype.baseIconClass = 'fc-icon'),
    (Fo.prototype.iconClasses = {
      close: 'fc-icon-x',
      prev: 'fc-icon-chevron-left',
      next: 'fc-icon-chevron-right',
      prevYear: 'fc-icon-chevrons-left',
      nextYear: 'fc-icon-chevrons-right',
    }),
    (Fo.prototype.rtlIconClasses = {
      prev: 'fc-icon-chevron-right',
      next: 'fc-icon-chevron-left',
      prevYear: 'fc-icon-chevrons-right',
      nextYear: 'fc-icon-chevrons-left',
    }),
    (Fo.prototype.iconOverrideOption = 'buttonIcons'),
    (Fo.prototype.iconOverrideCustomButtonOption = 'icon'),
    (Fo.prototype.iconOverridePrefix = 'fc-icon-');
  let Xo = {};
  function $o(e, t, n) {
    let r = t ? t.activeRange : null;
    return el(
      {},
      (function (e, t) {
        let n = Fr(t),
          r = [].concat(e.eventSources || []),
          i = [];
        e.initialEvents && r.unshift(e.initialEvents);
        e.events && r.unshift(e.events);
        for (let e of r) {
          let r = Gr(e, t, n);
          r && i.push(r);
        }
        return i;
      })(e, n),
      r,
      n,
    );
  }
  function Jo(e, t, n, r) {
    let i = n ? n.activeRange : null;
    switch (t.type) {
      case 'ADD_EVENT_SOURCES':
        return el(e, t.sources, i, r);
      case 'REMOVE_EVENT_SOURCE':
        return (s = e), (o = t.sourceId), An(s, (e) => e.sourceId !== o);
      case 'PREV':
      case 'NEXT':
      case 'CHANGE_DATE':
      case 'CHANGE_VIEW_TYPE':
        return n ? tl(e, i, r) : e;
      case 'FETCH_EVENT_SOURCES':
        return nl(e, t.sourceIds ? Tn(t.sourceIds) : il(e, r), i, t.isRefetch || !1, r);
      case 'RECEIVE_EVENTS':
      case 'RECEIVE_EVENT_ERROR':
        return (function (e, t, n, r) {
          let i = e[t];
          if (i && n === i.latestFetchId)
            return Object.assign(Object.assign({}, e), {
              [t]: Object.assign(Object.assign({}, i), { isFetching: !1, fetchRange: r }),
            });
          return e;
        })(e, t.sourceId, t.fetchId, t.fetchRange);
      case 'REMOVE_ALL_EVENT_SOURCES':
        return {};
      default:
        return e;
    }
    var s, o;
  }
  function Ko(e) {
    for (let t in e) if (e[t].isFetching) return !0;
    return !1;
  }
  function el(e, t, n, r) {
    let i = {};
    for (let e of t) i[e.sourceId] = e;
    return n && (i = tl(i, n, r)), Object.assign(Object.assign({}, e), i);
  }
  function tl(e, t, n) {
    return nl(
      e,
      An(e, (e) =>
        (function (e, t, n) {
          if (!sl(e, n)) return !e.latestFetchId;
          return (
            !n.options.lazyFetching ||
            !e.fetchRange ||
            e.isFetching ||
            t.start < e.fetchRange.start ||
            t.end > e.fetchRange.end
          );
        })(e, t, n),
      ),
      t,
      !1,
      n,
    );
  }
  function nl(e, t, n, r, i) {
    let s = {};
    for (let o in e) {
      let l = e[o];
      t[o] ? (s[o] = rl(l, n, r, i)) : (s[o] = l);
    }
    return s;
  }
  function rl(e, t, n, r) {
    let { options: i, calendarApi: s } = r,
      o = r.pluginHooks.eventSourceDefs[e.sourceDefId],
      l = Qe();
    return (
      o.fetch(
        { eventSource: e, range: t, isRefetch: n, context: r },
        (n) => {
          let { rawEvents: o } = n;
          i.eventSourceSuccess && (o = i.eventSourceSuccess.call(s, o, n.response) || o),
            e.success && (o = e.success.call(s, o, n.response) || o),
            r.dispatch({ type: 'RECEIVE_EVENTS', sourceId: e.sourceId, fetchId: l, fetchRange: t, rawEvents: o });
        },
        (n) => {
          let o = !1;
          i.eventSourceFailure && (i.eventSourceFailure.call(s, n), (o = !0)),
            e.failure && (e.failure(n), (o = !0)),
            o || console.warn(n.message, n),
            r.dispatch({ type: 'RECEIVE_EVENT_ERROR', sourceId: e.sourceId, fetchId: l, fetchRange: t, error: n });
        },
      ),
      Object.assign(Object.assign({}, e), { isFetching: !0, latestFetchId: l })
    );
  }
  function il(e, t) {
    return An(e, (e) => sl(e, t));
  }
  function sl(e, t) {
    return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange;
  }
  function ol(e, t) {
    switch (t.type) {
      case 'UNSELECT_DATES':
        return null;
      case 'SELECT_DATES':
        return t.selection;
      default:
        return e;
    }
  }
  function ll(e, t) {
    switch (t.type) {
      case 'UNSELECT_EVENT':
        return '';
      case 'SELECT_EVENT':
        return t.eventInstanceId;
      default:
        return e;
    }
  }
  function al(e, t) {
    let n;
    switch (t.type) {
      case 'UNSET_EVENT_DRAG':
        return null;
      case 'SET_EVENT_DRAG':
        return (n = t.state), { affectedEvents: n.affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent };
      default:
        return e;
    }
  }
  function cl(e, t) {
    let n;
    switch (t.type) {
      case 'UNSET_EVENT_RESIZE':
        return null;
      case 'SET_EVENT_RESIZE':
        return (n = t.state), { affectedEvents: n.affectedEvents, mutatedEvents: n.mutatedEvents, isEvent: n.isEvent };
      default:
        return e;
    }
  }
  function dl(e, t, n, r, i) {
    return {
      header: e.headerToolbar ? ul(e.headerToolbar, e, t, n, r, i) : null,
      footer: e.footerToolbar ? ul(e.footerToolbar, e, t, n, r, i) : null,
    };
  }
  function ul(e, t, n, r, i, s) {
    let o = {},
      l = [],
      a = !1;
    for (let c in e) {
      let d = hl(e[c], t, n, r, i, s);
      (o[c] = d.widgets), l.push(...d.viewsWithButtons), (a = a || d.hasTitle);
    }
    return { sectionWidgets: o, viewsWithButtons: l, hasTitle: a };
  }
  function hl(e, t, n, r, i, s) {
    let o = 'rtl' === t.direction,
      l = t.customButtons || {},
      a = n.buttonText || {},
      c = t.buttonText || {},
      d = n.buttonHints || {},
      u = t.buttonHints || {},
      h = e ? e.split(' ') : [],
      f = [],
      p = !1;
    return {
      widgets: h.map((e) =>
        e.split(',').map((e) => {
          if ('title' === e) return (p = !0), { buttonName: e };
          let n, h, g, m, v, y;
          if ((n = l[e]))
            (g = (e) => {
              n.click && n.click.call(e.target, e, e.target);
            }),
              (m = r.getCustomButtonIconClass(n)) || (m = r.getIconClass(e, o)) || (v = n.text),
              (y = n.hint || n.text);
          else if ((h = i[e])) {
            f.push(e),
              (g = () => {
                s.changeView(e);
              }),
              (v = h.buttonTextOverride) || (m = r.getIconClass(e, o)) || (v = h.buttonTextDefault);
            let n = h.buttonTextOverride || h.buttonTextDefault;
            y = ot(h.buttonTitleOverride || h.buttonTitleDefault || t.viewHint, [n, e], n);
          } else if (s[e])
            if (
              ((g = () => {
                s[e]();
              }),
              (v = a[e]) || (m = r.getIconClass(e, o)) || (v = c[e]),
              'prevYear' === e || 'nextYear' === e)
            ) {
              let t = 'prevYear' === e ? 'prev' : 'next';
              y = ot(d[t] || u[t], [c.year || 'year', 'year'], c[e]);
            } else y = (t) => ot(d[e] || u[e], [c[t] || t, t], c[e]);
          return { buttonName: e, buttonClick: g, buttonIcon: m, buttonText: v, buttonHint: y };
        }),
      ),
      viewsWithButtons: f,
      hasTitle: p,
    };
  }
  class fl {
    constructor(e, t, n) {
      (this.type = e), (this.getCurrentData = t), (this.dateEnv = n);
    }
    get calendar() {
      return this.getCurrentData().calendarApi;
    }
    get title() {
      return this.getCurrentData().viewTitle;
    }
    get activeStart() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
    }
    get activeEnd() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
    }
    get currentStart() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
    }
    get currentEnd() {
      return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
    }
    getOption(e) {
      return this.getCurrentData().options[e];
    }
  }
  function pl(e, t) {
    let n = _n(t.getCurrentData().eventSources);
    if (1 === n.length && 1 === e.length && Array.isArray(n[0]._raw) && Array.isArray(e[0]))
      return void t.dispatch({ type: 'RESET_RAW_EVENTS', sourceId: n[0].sourceId, rawEvents: e[0] });
    let r = [];
    for (let t of e) {
      let e = !1;
      for (let r = 0; r < n.length; r += 1)
        if (n[r]._raw === t) {
          n.splice(r, 1), (e = !0);
          break;
        }
      e || r.push(t);
    }
    for (let e of n) t.dispatch({ type: 'REMOVE_EVENT_SOURCE', sourceId: e.sourceId });
    for (let e of r) t.calendarApi.addEventSource(e);
  }
  const gl = [
    zo({
      name: 'array-event-source',
      eventSourceDefs: [
        {
          ignoreRange: !0,
          parseMeta: (e) => (Array.isArray(e.events) ? e.events : null),
          fetch(e, t) {
            t({ rawEvents: e.eventSource.meta });
          },
        },
      ],
    }),
    zo({
      name: 'func-event-source',
      eventSourceDefs: [
        {
          parseMeta: (e) => ('function' == typeof e.events ? e.events : null),
          fetch(e, t, n) {
            const { dateEnv: r } = e.context;
            ki(e.eventSource.meta.bind(null, Ti(e.range, r)), (e) => t({ rawEvents: e }), n);
          },
        },
      ],
    }),
    zo({
      name: 'json-event-source',
      eventSourceRefiners: {
        method: String,
        extraParams: wn,
        startParam: String,
        endParam: String,
        timeZoneParam: String,
      },
      eventSourceDefs: [
        {
          parseMeta: (e) =>
            !e.url || ('json' !== e.format && e.format)
              ? null
              : {
                  url: e.url,
                  format: 'json',
                  method: (e.method || 'GET').toUpperCase(),
                  extraParams: e.extraParams,
                  startParam: e.startParam,
                  endParam: e.endParam,
                  timeZoneParam: e.timeZoneParam,
                },
          fetch(e, t, n) {
            const { meta: r } = e.eventSource,
              i = (function (e, t, n) {
                let r,
                  i,
                  s,
                  o,
                  { dateEnv: l, options: a } = n,
                  c = {};
                (r = e.startParam), null == r && (r = a.startParam);
                (i = e.endParam), null == i && (i = a.endParam);
                (s = e.timeZoneParam), null == s && (s = a.timeZoneParam);
                o = 'function' == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                Object.assign(c, o),
                  (c[r] = l.formatIso(t.start)),
                  (c[i] = l.formatIso(t.end)),
                  'local' !== l.timeZone && (c[s] = l.timeZone);
                return c;
              })(r, e.range, e.context);
            Ii(r.method, r.url, i).then(([e, n]) => {
              t({ rawEvents: e, response: n });
            }, n);
          },
        },
      ],
    }),
    zo({
      name: 'simple-recurring-event',
      recurringTypes: [
        {
          parse(e, t) {
            if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
              let i,
                s = {
                  daysOfWeek: e.daysOfWeek || null,
                  startTime: e.startTime || null,
                  endTime: e.endTime || null,
                  startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                  endRecur: e.endRecur ? t.createMarker(e.endRecur) : null,
                };
              return (
                e.duration && (i = e.duration),
                !i &&
                  e.startTime &&
                  e.endTime &&
                  ((n = e.endTime),
                  (r = e.startTime),
                  (i = {
                    years: n.years - r.years,
                    months: n.months - r.months,
                    days: n.days - r.days,
                    milliseconds: n.milliseconds - r.milliseconds,
                  })),
                { allDayGuess: Boolean(!e.startTime && !e.endTime), duration: i, typeData: s }
              );
            }
            var n, r;
            return null;
          },
          expand(e, t, n) {
            let r = cr(t, { start: e.startRecur, end: e.endRecur });
            return r
              ? (function (e, t, n, r) {
                  let i = e ? Tn(e) : null,
                    s = Nt(n.start),
                    o = n.end,
                    l = [];
                  for (; s < o; ) {
                    let e;
                    (i && !i[s.getUTCDay()]) || ((e = t ? r.add(s, t) : s), l.push(e)), (s = xt(s, 1));
                  }
                  return l;
                })(e.daysOfWeek, e.startTime, r, n)
              : [];
          },
        },
      ],
      eventRefiners: { daysOfWeek: wn, startTime: ht, endTime: ht, duration: ht, startRecur: wn, endRecur: wn },
    }),
    zo({
      name: 'change-handler',
      optionChangeHandlers: {
        events(e, t) {
          pl([e], t);
        },
        eventSources: pl,
      },
    }),
    zo({
      name: 'misc',
      isLoadingFuncs: [(e) => Ko(e.eventSources)],
      propSetHandlers: {
        dateProfile: function (e, t) {
          t.emitter.trigger(
            'datesSet',
            Object.assign(Object.assign({}, Ti(e.activeRange, t.dateEnv)), { view: t.viewApi }),
          );
        },
        eventStore: function (e, t) {
          let { emitter: n } = t;
          n.hasHandlers('eventsSet') && n.trigger('eventsSet', ai(e, t));
        },
      },
    }),
  ];
  class ml {
    constructor(e, t) {
      (this.runTaskOption = e),
        (this.drainedOption = t),
        (this.queue = []),
        (this.delayedRunner = new _e(this.drain.bind(this)));
    }
    request(e, t) {
      this.queue.push(e), this.delayedRunner.request(t);
    }
    pause(e) {
      this.delayedRunner.pause(e);
    }
    resume(e, t) {
      this.delayedRunner.resume(e, t);
    }
    drain() {
      let { queue: e } = this;
      for (; e.length; ) {
        let t,
          n = [];
        for (; (t = e.shift()); ) this.runTask(t), n.push(t);
        this.drained(n);
      }
    }
    runTask(e) {
      this.runTaskOption && this.runTaskOption(e);
    }
    drained(e) {
      this.drainedOption && this.drainedOption(e);
    }
  }
  function vl(e, t, n) {
    let r;
    return (
      (r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange),
      n.formatRange(
        r.start,
        r.end,
        hn(
          t.titleFormat ||
            (function (e) {
              let { currentRangeUnit: t } = e;
              if ('year' === t) return { year: 'numeric' };
              if ('month' === t) return { year: 'numeric', month: 'long' };
              let n = Ot(e.currentRange.start, e.currentRange.end);
              if (null !== n && n > 1) return { year: 'numeric', month: 'short', day: 'numeric' };
              return { year: 'numeric', month: 'long', day: 'numeric' };
            })(e),
        ),
        { isEndExclusive: e.isRangeAllDay, defaultSeparator: t.titleRangeSeparator },
      )
    );
  }
  class yl {
    constructor(e) {
      (this.computeCurrentViewData = Qt(this._computeCurrentViewData)),
        (this.organizeRawLocales = Qt(Bo)),
        (this.buildLocale = Qt(jo)),
        (this.buildPluginHooks = Uo()),
        (this.buildDateEnv = Qt(bl)),
        (this.buildTheme = Qt(Sl)),
        (this.parseToolbars = Qt(dl)),
        (this.buildViewSpecs = Qt(Zo)),
        (this.buildDateProfileGenerator = Zt(El)),
        (this.buildViewApi = Qt(Cl)),
        (this.buildViewUiProps = Zt(Rl)),
        (this.buildEventUiBySource = Qt(wl, kn)),
        (this.buildEventUiBases = Qt(Dl)),
        (this.parseContextBusinessHours = Zt(xl)),
        (this.buildTitle = Qt(vl)),
        (this.emitter = new Xr()),
        (this.actionRunner = new ml(this._handleAction.bind(this), this.updateData.bind(this))),
        (this.currentCalendarOptionsInput = {}),
        (this.currentCalendarOptionsRefined = {}),
        (this.currentViewOptionsInput = {}),
        (this.currentViewOptionsRefined = {}),
        (this.currentCalendarOptionsRefiners = {}),
        (this.optionsForRefining = []),
        (this.optionsForHandling = []),
        (this.getCurrentData = () => this.data),
        (this.dispatch = (e) => {
          this.actionRunner.request(e);
        }),
        (this.props = e),
        this.actionRunner.pause();
      let t = {},
        n = this.computeOptionsData(e.optionOverrides, t, e.calendarApi),
        r = n.calendarOptions.initialView || n.pluginHooks.initialView,
        i = this.computeCurrentViewData(r, n, e.optionOverrides, t);
      (e.calendarApi.currentDataManager = this),
        this.emitter.setThisContext(e.calendarApi),
        this.emitter.setOptions(i.options);
      let s = (function (e, t) {
          let n = e.initialDate;
          return null != n ? t.createMarker(n) : yr(e.now, t);
        })(n.calendarOptions, n.dateEnv),
        o = i.dateProfileGenerator.build(s);
      fr(o.activeRange, s) || (s = o.currentRange.start);
      let l = {
        dateEnv: n.dateEnv,
        options: n.calendarOptions,
        pluginHooks: n.pluginHooks,
        calendarApi: e.calendarApi,
        dispatch: this.dispatch,
        emitter: this.emitter,
        getCurrentData: this.getCurrentData,
      };
      for (let e of n.pluginHooks.contextInit) e(l);
      let a = $o(n.calendarOptions, o, l),
        c = {
          dynamicOptionOverrides: t,
          currentViewType: r,
          currentDate: s,
          dateProfile: o,
          businessHours: this.parseContextBusinessHours(l),
          eventSources: a,
          eventUiBases: {},
          eventStore: { defs: {}, instances: {} },
          renderableEventStore: { defs: {}, instances: {} },
          dateSelection: null,
          eventSelection: '',
          eventDrag: null,
          eventResize: null,
          selectionConfig: this.buildViewUiProps(l).selectionConfig,
        },
        d = Object.assign(Object.assign({}, l), c);
      for (let e of n.pluginHooks.reducers) Object.assign(c, e(null, null, d));
      Al(c, l) && this.emitter.trigger('loading', !0), (this.state = c), this.updateData(), this.actionRunner.resume();
    }
    resetOptions(e, t) {
      let { props: n } = this;
      void 0 === t
        ? (n.optionOverrides = e)
        : ((n.optionOverrides = Object.assign(Object.assign({}, n.optionOverrides || {}), e)),
          this.optionsForRefining.push(...t)),
        (void 0 === t || t.length) && this.actionRunner.request({ type: 'NOTHING' });
    }
    _handleAction(e) {
      let { props: t, state: n, emitter: r } = this,
        i = (function (e, t) {
          switch (t.type) {
            case 'SET_OPTION':
              return Object.assign(Object.assign({}, e), { [t.optionName]: t.rawOptionValue });
            default:
              return e;
          }
        })(n.dynamicOptionOverrides, e),
        s = this.computeOptionsData(t.optionOverrides, i, t.calendarApi),
        o = (function (e, t) {
          switch (t.type) {
            case 'CHANGE_VIEW_TYPE':
              e = t.viewType;
          }
          return e;
        })(n.currentViewType, e),
        l = this.computeCurrentViewData(o, s, t.optionOverrides, i);
      (t.calendarApi.currentDataManager = this), r.setThisContext(t.calendarApi), r.setOptions(l.options);
      let a = {
          dateEnv: s.dateEnv,
          options: s.calendarOptions,
          pluginHooks: s.pluginHooks,
          calendarApi: t.calendarApi,
          dispatch: this.dispatch,
          emitter: r,
          getCurrentData: this.getCurrentData,
        },
        { currentDate: c, dateProfile: d } = n;
      this.data && this.data.dateProfileGenerator !== l.dateProfileGenerator && (d = l.dateProfileGenerator.build(c)),
        (c = (function (e, t) {
          switch (t.type) {
            case 'CHANGE_DATE':
              return t.dateMarker;
            default:
              return e;
          }
        })(c, e)),
        (d = (function (e, t, n, r) {
          let i;
          switch (t.type) {
            case 'CHANGE_VIEW_TYPE':
              return r.build(t.dateMarker || n);
            case 'CHANGE_DATE':
              return r.build(t.dateMarker);
            case 'PREV':
              if (((i = r.buildPrev(e, n)), i.isValid)) return i;
              break;
            case 'NEXT':
              if (((i = r.buildNext(e, n)), i.isValid)) return i;
          }
          return e;
        })(d, e, c, l.dateProfileGenerator)),
        ('PREV' !== e.type && 'NEXT' !== e.type && fr(d.currentRange, c)) || (c = d.currentRange.start);
      let u = Jo(n.eventSources, e, d, a),
        h = Vr(n.eventStore, e, u, d, a),
        f = (Ko(u) && !l.options.progressiveEventRendering && n.renderableEventStore) || h,
        { eventUiSingleBase: p, selectionConfig: g } = this.buildViewUiProps(a),
        m = this.buildEventUiBySource(u),
        v = {
          dynamicOptionOverrides: i,
          currentViewType: o,
          currentDate: c,
          dateProfile: d,
          eventSources: u,
          eventStore: h,
          renderableEventStore: f,
          selectionConfig: g,
          eventUiBases: this.buildEventUiBases(f.defs, p, m),
          businessHours: this.parseContextBusinessHours(a),
          dateSelection: ol(n.dateSelection, e),
          eventSelection: ll(n.eventSelection, e),
          eventDrag: al(n.eventDrag, e),
          eventResize: cl(n.eventResize, e),
        },
        y = Object.assign(Object.assign({}, a), v);
      for (let t of s.pluginHooks.reducers) Object.assign(v, t(n, e, y));
      let b = Al(n, a),
        S = Al(v, a);
      !b && S ? r.trigger('loading', !0) : b && !S && r.trigger('loading', !1),
        (this.state = v),
        t.onAction && t.onAction(e);
    }
    updateData() {
      let { props: e, state: t } = this,
        n = this.data,
        r = this.computeOptionsData(e.optionOverrides, t.dynamicOptionOverrides, e.calendarApi),
        i = this.computeCurrentViewData(t.currentViewType, r, e.optionOverrides, t.dynamicOptionOverrides),
        s = (this.data = Object.assign(
          Object.assign(
            Object.assign(
              {
                viewTitle: this.buildTitle(t.dateProfile, i.options, r.dateEnv),
                calendarApi: e.calendarApi,
                dispatch: this.dispatch,
                emitter: this.emitter,
                getCurrentData: this.getCurrentData,
              },
              r,
            ),
            i,
          ),
          t,
        )),
        o = r.pluginHooks.optionChangeHandlers,
        l = n && n.calendarOptions,
        a = r.calendarOptions;
      if (l && l !== a) {
        l.timeZone !== a.timeZone &&
          ((t.eventSources = s.eventSources =
            (function (e, t, n) {
              let r = t ? t.activeRange : null;
              return nl(e, il(e, n), r, !0, n);
            })(s.eventSources, t.dateProfile, s)),
          (t.eventStore = s.eventStore = Qr(s.eventStore, n.dateEnv, s.dateEnv)),
          (t.renderableEventStore = s.renderableEventStore = Qr(s.renderableEventStore, n.dateEnv, s.dateEnv)));
        for (let e in o) (-1 === this.optionsForHandling.indexOf(e) && l[e] === a[e]) || o[e](a[e], s);
      }
      (this.optionsForHandling = []), e.onData && e.onData(s);
    }
    computeOptionsData(e, t, n) {
      if (
        !this.optionsForRefining.length &&
        e === this.stableOptionOverrides &&
        t === this.stableDynamicOptionOverrides
      )
        return this.stableCalendarOptionsData;
      let {
        refinedOptions: r,
        pluginHooks: i,
        localeDefaults: s,
        availableLocaleData: o,
        extra: l,
      } = this.processRawCalendarOptions(e, t);
      Tl(l);
      let a = this.buildDateEnv(
          r.timeZone,
          r.locale,
          r.weekNumberCalculation,
          r.firstDay,
          r.weekText,
          i,
          o,
          r.defaultRangeSeparator,
        ),
        c = this.buildViewSpecs(i.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, s),
        d = this.buildTheme(r, i),
        u = this.parseToolbars(r, this.stableOptionOverrides, d, c, n);
      return (this.stableCalendarOptionsData = {
        calendarOptions: r,
        pluginHooks: i,
        dateEnv: a,
        viewSpecs: c,
        theme: d,
        toolbarConfig: u,
        localeDefaults: s,
        availableRawLocales: o.map,
      });
    }
    processRawCalendarOptions(e, t) {
      let { locales: n, locale: r } = En([pn, e, t]),
        i = this.organizeRawLocales(n),
        s = i.map,
        o = this.buildLocale(r || i.defaultCode, s).options,
        l = this.buildPluginHooks(e.plugins || [], gl),
        a = (this.currentCalendarOptionsRefiners = Object.assign(
          Object.assign(Object.assign(Object.assign(Object.assign({}, fn), gn), mn), l.listenerRefiners),
          l.optionRefiners,
        )),
        c = {},
        d = En([pn, o, e, t]),
        u = {},
        h = this.currentCalendarOptionsInput,
        f = this.currentCalendarOptionsRefined,
        p = !1;
      for (let e in d)
        -1 === this.optionsForRefining.indexOf(e) && (d[e] === h[e] || (vn[e] && e in h && vn[e](h[e], d[e])))
          ? (u[e] = f[e])
          : a[e]
            ? ((u[e] = a[e](d[e])), (p = !0))
            : (c[e] = h[e]);
      return (
        p &&
          ((this.currentCalendarOptionsInput = d),
          (this.currentCalendarOptionsRefined = u),
          (this.stableOptionOverrides = e),
          (this.stableDynamicOptionOverrides = t)),
        this.optionsForHandling.push(...this.optionsForRefining),
        (this.optionsForRefining = []),
        {
          rawOptions: this.currentCalendarOptionsInput,
          refinedOptions: this.currentCalendarOptionsRefined,
          pluginHooks: l,
          availableLocaleData: i,
          localeDefaults: o,
          extra: c,
        }
      );
    }
    _computeCurrentViewData(e, t, n, r) {
      let i = t.viewSpecs[e];
      if (!i)
        throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
      let { refinedOptions: s, extra: o } = this.processRawViewOptions(i, t.pluginHooks, t.localeDefaults, n, r);
      return (
        Tl(o),
        {
          viewSpec: i,
          options: s,
          dateProfileGenerator: this.buildDateProfileGenerator({
            dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
            duration: i.duration,
            durationUnit: i.durationUnit,
            usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
            dateEnv: t.dateEnv,
            calendarApi: this.props.calendarApi,
            slotMinTime: s.slotMinTime,
            slotMaxTime: s.slotMaxTime,
            showNonCurrentDates: s.showNonCurrentDates,
            dayCount: s.dayCount,
            dateAlignment: s.dateAlignment,
            dateIncrement: s.dateIncrement,
            hiddenDays: s.hiddenDays,
            weekends: s.weekends,
            nowInput: s.now,
            validRangeInput: s.validRange,
            visibleRangeInput: s.visibleRange,
            fixedWeekCount: s.fixedWeekCount,
          }),
          viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv),
        }
      );
    }
    processRawViewOptions(e, t, n, r, i) {
      let s = En([pn, e.optionDefaults, n, r, e.optionOverrides, i]),
        o = Object.assign(
          Object.assign(
            Object.assign(Object.assign(Object.assign(Object.assign({}, fn), gn), mn), Sn),
            t.listenerRefiners,
          ),
          t.optionRefiners,
        ),
        l = {},
        a = this.currentViewOptionsInput,
        c = this.currentViewOptionsRefined,
        d = !1,
        u = {};
      for (let e in s)
        s[e] === a[e] || (vn[e] && vn[e](s[e], a[e]))
          ? (l[e] = c[e])
          : (s[e] === this.currentCalendarOptionsInput[e] || (vn[e] && vn[e](s[e], this.currentCalendarOptionsInput[e]))
              ? e in this.currentCalendarOptionsRefined && (l[e] = this.currentCalendarOptionsRefined[e])
              : o[e]
                ? (l[e] = o[e](s[e]))
                : (u[e] = s[e]),
            (d = !0));
      return (
        d && ((this.currentViewOptionsInput = s), (this.currentViewOptionsRefined = l)),
        { rawOptions: this.currentViewOptionsInput, refinedOptions: this.currentViewOptionsRefined, extra: u }
      );
    }
  }
  function bl(e, t, n, r, i, s, o, l) {
    let a = jo(t || o.defaultCode, o.map);
    return new zn({
      calendarSystem: 'gregory',
      timeZone: e,
      namedTimeZoneImpl: s.namedTimeZonedImpl,
      locale: a,
      weekNumberCalculation: n,
      firstDay: r,
      weekText: i,
      cmdFormatter: s.cmdFormatter,
      defaultSeparator: l,
    });
  }
  function Sl(e, t) {
    return new (t.themeClasses[e.themeSystem] || Fo)(e);
  }
  function El(e) {
    return new (e.dateProfileGeneratorClass || br)(e);
  }
  function Cl(e, t, n) {
    return new fl(e, t, n);
  }
  function wl(e) {
    return xn(e, (e) => e.ui);
  }
  function Dl(e, t, n) {
    let r = { '': t };
    for (let t in e) {
      let i = e[t];
      i.sourceId && n[i.sourceId] && (r[t] = n[i.sourceId]);
    }
    return r;
  }
  function Rl(e) {
    let { options: t } = e;
    return {
      eventUiSingleBase: jr(
        {
          display: t.eventDisplay,
          editable: t.editable,
          startEditable: t.eventStartEditable,
          durationEditable: t.eventDurationEditable,
          constraint: t.eventConstraint,
          overlap: 'boolean' == typeof t.eventOverlap ? t.eventOverlap : void 0,
          allow: t.eventAllow,
          backgroundColor: t.eventBackgroundColor,
          borderColor: t.eventBorderColor,
          textColor: t.eventTextColor,
          color: t.eventColor,
        },
        e,
      ),
      selectionConfig: jr(
        {
          constraint: t.selectConstraint,
          overlap: 'boolean' == typeof t.selectOverlap ? t.selectOverlap : void 0,
          allow: t.selectAllow,
        },
        e,
      ),
    };
  }
  function Al(e, t) {
    for (let n of t.pluginHooks.isLoadingFuncs) if (n(e)) return !0;
    return !1;
  }
  function xl(e) {
    return Jr(e.options.businessHours, e);
  }
  function Tl(e, t) {
    for (let n in e) console.warn(`Unknown option '${n}'` + (t ? ` for view '${t}'` : ''));
  }
  class _l extends Xn {
    render() {
      return g(
        'div',
        { className: 'fc-toolbar-chunk' },
        ...this.props.widgetGroups.map((e) => this.renderWidgetGroup(e)),
      );
    }
    renderWidgetGroup(e) {
      let { props: t } = this,
        { theme: n } = this.context,
        r = [],
        i = !0;
      for (let s of e) {
        let { buttonName: e, buttonClick: o, buttonText: l, buttonIcon: a, buttonHint: c } = s;
        if ('title' === e) (i = !1), r.push(g('h2', { className: 'fc-toolbar-title', id: t.titleId }, t.title));
        else {
          let i = e === t.activeButton,
            s =
              (!t.isTodayEnabled && 'today' === e) ||
              (!t.isPrevEnabled && 'prev' === e) ||
              (!t.isNextEnabled && 'next' === e),
            d = [`fc-${e}-button`, n.getClass('button')];
          i && d.push(n.getClass('buttonActive')),
            r.push(
              g(
                'button',
                {
                  type: 'button',
                  title: 'function' == typeof c ? c(t.navUnit) : c,
                  disabled: s,
                  'aria-pressed': i,
                  className: d.join(' '),
                  onClick: o,
                },
                l || (a ? g('span', { className: a, role: 'img' }) : ''),
              ),
            );
        }
      }
      if (r.length > 1) {
        return g('div', { className: (i && n.getClass('buttonGroup')) || '' }, ...r);
      }
      return r[0];
    }
  }
  class kl extends Xn {
    render() {
      let e,
        t,
        { model: n, extraClassName: r } = this.props,
        i = !1,
        s = n.sectionWidgets,
        o = s.center;
      return (
        s.left ? ((i = !0), (e = s.left)) : (e = s.start),
        s.right ? ((i = !0), (t = s.right)) : (t = s.end),
        g(
          'div',
          { className: [r || '', 'fc-toolbar', i ? 'fc-toolbar-ltr' : ''].join(' ') },
          this.renderSection('start', e || []),
          this.renderSection('center', o || []),
          this.renderSection('end', t || []),
        )
      );
    }
    renderSection(e, t) {
      let { props: n } = this;
      return g(_l, {
        key: e,
        widgetGroups: t,
        title: n.title,
        navUnit: n.navUnit,
        activeButton: n.activeButton,
        isTodayEnabled: n.isTodayEnabled,
        isPrevEnabled: n.isPrevEnabled,
        isNextEnabled: n.isNextEnabled,
        titleId: n.titleId,
      });
    }
  }
  class Ml extends Xn {
    constructor() {
      super(...arguments),
        (this.state = { availableWidth: null }),
        (this.handleEl = (e) => {
          (this.el = e), $n(this.props.elRef, e), this.updateAvailableWidth();
        }),
        (this.handleResize = () => {
          this.updateAvailableWidth();
        });
    }
    render() {
      let { props: e, state: t } = this,
        { aspectRatio: n } = e,
        r = ['fc-view-harness', n || e.liquid || e.height ? 'fc-view-harness-active' : 'fc-view-harness-passive'],
        i = '',
        s = '';
      return (
        n ? (null !== t.availableWidth ? (i = t.availableWidth / n) : (s = (1 / n) * 100 + '%')) : (i = e.height || ''),
        g(
          'div',
          {
            'aria-labelledby': e.labeledById,
            ref: this.handleEl,
            className: r.join(' '),
            style: { height: i, paddingBottom: s },
          },
          e.children,
        )
      );
    }
    componentDidMount() {
      this.context.addResizeHandler(this.handleResize);
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    updateAvailableWidth() {
      this.el && this.props.aspectRatio && this.setState({ availableWidth: this.el.offsetWidth });
    }
  }
  class Il extends Hi {
    constructor(e) {
      super(e),
        (this.handleSegClick = (e, t) => {
          let { component: n } = this,
            { context: r } = n,
            i = hi(t);
          if (i && n.isValidSegDownEl(e.target)) {
            let s = Me(e.target, '.fc-event-forced-url'),
              o = s ? s.querySelector('a[href]').href : '';
            r.emitter.trigger('eventClick', {
              el: t,
              event: new oi(n.context, i.eventRange.def, i.eventRange.instance),
              jsEvent: e,
              view: r.viewApi,
            }),
              o && !e.defaultPrevented && (window.location.href = o);
          }
        }),
        (this.destroy = Ue(e.el, 'click', '.fc-event', this.handleSegClick));
    }
  }
  class Ol extends Hi {
    constructor(e) {
      super(e),
        (this.handleEventElRemove = (e) => {
          e === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl);
        }),
        (this.handleSegEnter = (e, t) => {
          hi(t) && ((this.currentSegEl = t), this.triggerEvent('eventMouseEnter', e, t));
        }),
        (this.handleSegLeave = (e, t) => {
          this.currentSegEl && ((this.currentSegEl = null), this.triggerEvent('eventMouseLeave', e, t));
        }),
        (this.removeHoverListeners = (function (e, t, n, r) {
          let i;
          return Ue(e, 'mouseover', t, (e, t) => {
            if (t !== i) {
              (i = t), n(e, t);
              let s = (e) => {
                (i = null), r(e, t), t.removeEventListener('mouseleave', s);
              };
              t.addEventListener('mouseleave', s);
            }
          });
        })(e.el, '.fc-event', this.handleSegEnter, this.handleSegLeave));
    }
    destroy() {
      this.removeHoverListeners();
    }
    triggerEvent(e, t, n) {
      let { component: r } = this,
        { context: i } = r,
        s = hi(n);
      (t && !r.isValidSegDownEl(t.target)) ||
        i.emitter.trigger(e, {
          el: n,
          event: new oi(i, s.eventRange.def, s.eventRange.instance),
          jsEvent: t,
          view: i.viewApi,
        });
    }
  }
  class Nl extends Zn {
    constructor() {
      super(...arguments),
        (this.buildViewContext = Qt(Qn)),
        (this.buildViewPropTransformers = Qt(Hl)),
        (this.buildToolbarProps = Qt(Pl)),
        (this.headerRef = { current: null }),
        (this.footerRef = { current: null }),
        (this.interactionsStore = {}),
        (this.state = { viewLabelId: Le() }),
        (this.registerInteractiveComponent = (e, t) => {
          let n = (function (e, t) {
              return {
                component: e,
                el: t.el,
                useEventCenter: null == t.useEventCenter || t.useEventCenter,
                isHitComboAllowed: t.isHitComboAllowed || null,
              };
            })(e, t),
            r = [Il, Ol].concat(this.props.pluginHooks.componentInteractions).map((e) => new e(n));
          (this.interactionsStore[e.uid] = r), (Bi[e.uid] = n);
        }),
        (this.unregisterInteractiveComponent = (e) => {
          let t = this.interactionsStore[e.uid];
          if (t) {
            for (let e of t) e.destroy();
            delete this.interactionsStore[e.uid];
          }
          delete Bi[e.uid];
        }),
        (this.resizeRunner = new _e(() => {
          this.props.emitter.trigger('_resize', !0),
            this.props.emitter.trigger('windowResize', { view: this.props.viewApi });
        })),
        (this.handleWindowResize = (e) => {
          let { options: t } = this.props;
          t.handleWindowResize && e.target === window && this.resizeRunner.request(t.windowResizeDelay);
        });
    }
    render() {
      let e,
        { props: t } = this,
        { toolbarConfig: n, options: r } = t,
        i = this.buildToolbarProps(
          t.viewSpec,
          t.dateProfile,
          t.dateProfileGenerator,
          t.currentDate,
          yr(t.options.now, t.dateEnv),
          t.viewTitle,
        ),
        s = !1,
        o = '';
      t.isHeightAuto || t.forPrint
        ? (o = '')
        : null != r.height
          ? (s = !0)
          : null != r.contentHeight
            ? (o = r.contentHeight)
            : (e = Math.max(r.aspectRatio, 0.5));
      let l = this.buildViewContext(
          t.viewSpec,
          t.viewApi,
          t.options,
          t.dateProfileGenerator,
          t.dateEnv,
          t.theme,
          t.pluginHooks,
          t.dispatch,
          t.getCurrentData,
          t.emitter,
          t.calendarApi,
          this.registerInteractiveComponent,
          this.unregisterInteractiveComponent,
        ),
        a = n.header && n.header.hasTitle ? this.state.viewLabelId : void 0;
      return g(
        Yn.Provider,
        { value: l },
        n.header &&
          g(
            kl,
            Object.assign({ ref: this.headerRef, extraClassName: 'fc-header-toolbar', model: n.header, titleId: a }, i),
          ),
        g(Ml, { liquid: s, height: o, aspectRatio: e, labeledById: a }, this.renderView(t), this.buildAppendContent()),
        n.footer &&
          g(
            kl,
            Object.assign(
              { ref: this.footerRef, extraClassName: 'fc-footer-toolbar', model: n.footer, titleId: '' },
              i,
            ),
          ),
      );
    }
    componentDidMount() {
      let { props: e } = this;
      (this.calendarInteractions = e.pluginHooks.calendarInteractions.map((t) => new t(e))),
        window.addEventListener('resize', this.handleWindowResize);
      let { propSetHandlers: t } = e.pluginHooks;
      for (let n in t) t[n](e[n], e);
    }
    componentDidUpdate(e) {
      let { props: t } = this,
        { propSetHandlers: n } = t.pluginHooks;
      for (let r in n) t[r] !== e[r] && n[r](t[r], t);
    }
    componentWillUnmount() {
      window.removeEventListener('resize', this.handleWindowResize), this.resizeRunner.clear();
      for (let e of this.calendarInteractions) e.destroy();
      this.props.emitter.trigger('_unmount');
    }
    buildAppendContent() {
      let { props: e } = this;
      return g(v, {}, ...e.pluginHooks.viewContainerAppends.map((t) => t(e)));
    }
    renderView(e) {
      let { pluginHooks: t } = e,
        { viewSpec: n } = e,
        r = {
          dateProfile: e.dateProfile,
          businessHours: e.businessHours,
          eventStore: e.renderableEventStore,
          eventUiBases: e.eventUiBases,
          dateSelection: e.dateSelection,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          isHeightAuto: e.isHeightAuto,
          forPrint: e.forPrint,
        },
        i = this.buildViewPropTransformers(t.viewPropsTransformers);
      for (let t of i) Object.assign(r, t.transform(r, e));
      return g(n.component, Object.assign({}, r));
    }
  }
  function Pl(e, t, n, r, i, s) {
    let o = n.build(i, void 0, !1),
      l = n.buildPrev(t, r, !1),
      a = n.buildNext(t, r, !1);
    return {
      title: s,
      activeButton: e.type,
      navUnit: e.singleUnit,
      isTodayEnabled: o.isValid && !fr(t.currentRange, i),
      isPrevEnabled: l.isValid,
      isNextEnabled: a.isValid,
    };
  }
  function Hl(e) {
    return e.map((e) => new e());
  }
  function Wl(e) {
    let t = jo(e.locale || 'en', Bo([]).map);
    return new zn(Object.assign(Object.assign({ timeZone: pn.timeZone, calendarSystem: 'gregory' }, e), { locale: t }));
  }
  Ds.touchMouseIgnoreWait = 500;
  let Bl = 0,
    jl = 0,
    Ll = !1;
  class zl {
    constructor(e) {
      (this.subjectEl = null),
        (this.selector = ''),
        (this.handleSelector = ''),
        (this.shouldIgnoreMove = !1),
        (this.shouldWatchScroll = !0),
        (this.isDragging = !1),
        (this.isTouchDragging = !1),
        (this.wasTouchScroll = !1),
        (this.handleMouseDown = (e) => {
          if (
            !this.shouldIgnoreMouse() &&
            (function (e) {
              return 0 === e.button && !e.ctrlKey;
            })(e) &&
            this.tryStart(e)
          ) {
            let t = this.createEventFromMouse(e, !0);
            this.emitter.trigger('pointerdown', t),
              this.initScrollWatch(t),
              this.shouldIgnoreMove || document.addEventListener('mousemove', this.handleMouseMove),
              document.addEventListener('mouseup', this.handleMouseUp);
          }
        }),
        (this.handleMouseMove = (e) => {
          let t = this.createEventFromMouse(e);
          this.recordCoords(t), this.emitter.trigger('pointermove', t);
        }),
        (this.handleMouseUp = (e) => {
          document.removeEventListener('mousemove', this.handleMouseMove),
            document.removeEventListener('mouseup', this.handleMouseUp),
            this.emitter.trigger('pointerup', this.createEventFromMouse(e)),
            this.cleanup();
        }),
        (this.handleTouchStart = (e) => {
          if (this.tryStart(e)) {
            this.isTouchDragging = !0;
            let t = this.createEventFromTouch(e, !0);
            this.emitter.trigger('pointerdown', t), this.initScrollWatch(t);
            let n = e.target;
            this.shouldIgnoreMove || n.addEventListener('touchmove', this.handleTouchMove),
              n.addEventListener('touchend', this.handleTouchEnd),
              n.addEventListener('touchcancel', this.handleTouchEnd),
              window.addEventListener('scroll', this.handleTouchScroll, !0);
          }
        }),
        (this.handleTouchMove = (e) => {
          let t = this.createEventFromTouch(e);
          this.recordCoords(t), this.emitter.trigger('pointermove', t);
        }),
        (this.handleTouchEnd = (e) => {
          if (this.isDragging) {
            let t = e.target;
            t.removeEventListener('touchmove', this.handleTouchMove),
              t.removeEventListener('touchend', this.handleTouchEnd),
              t.removeEventListener('touchcancel', this.handleTouchEnd),
              window.removeEventListener('scroll', this.handleTouchScroll, !0),
              this.emitter.trigger('pointerup', this.createEventFromTouch(e)),
              this.cleanup(),
              (this.isTouchDragging = !1),
              (Bl += 1),
              setTimeout(() => {
                Bl -= 1;
              }, Ds.touchMouseIgnoreWait);
          }
        }),
        (this.handleTouchScroll = () => {
          this.wasTouchScroll = !0;
        }),
        (this.handleScroll = (e) => {
          if (!this.shouldIgnoreMove) {
            let t = window.scrollX - this.prevScrollX + this.prevPageX,
              n = window.scrollY - this.prevScrollY + this.prevPageY;
            this.emitter.trigger('pointermove', {
              origEvent: e,
              isTouch: this.isTouchDragging,
              subjectEl: this.subjectEl,
              pageX: t,
              pageY: n,
              deltaX: t - this.origPageX,
              deltaY: n - this.origPageY,
            });
          }
        }),
        (this.containerEl = e),
        (this.emitter = new Xr()),
        e.addEventListener('mousedown', this.handleMouseDown),
        e.addEventListener('touchstart', this.handleTouchStart, { passive: !0 }),
        (jl += 1),
        1 === jl && window.addEventListener('touchmove', Ul, { passive: !1 });
    }
    destroy() {
      this.containerEl.removeEventListener('mousedown', this.handleMouseDown),
        this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: !0 }),
        (jl -= 1),
        jl || window.removeEventListener('touchmove', Ul, { passive: !1 });
    }
    tryStart(e) {
      let t = this.querySubjectEl(e),
        n = e.target;
      return (
        !(!t || (this.handleSelector && !Me(n, this.handleSelector))) &&
        ((this.subjectEl = t), (this.isDragging = !0), (this.wasTouchScroll = !1), !0)
      );
    }
    cleanup() {
      (Ll = !1), (this.isDragging = !1), (this.subjectEl = null), this.destroyScrollWatch();
    }
    querySubjectEl(e) {
      return this.selector ? Me(e.target, this.selector) : this.containerEl;
    }
    shouldIgnoreMouse() {
      return Bl || this.isTouchDragging;
    }
    cancelTouchScroll() {
      this.isDragging && (Ll = !0);
    }
    initScrollWatch(e) {
      this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener('scroll', this.handleScroll, !0));
    }
    recordCoords(e) {
      this.shouldWatchScroll &&
        ((this.prevPageX = e.pageX),
        (this.prevPageY = e.pageY),
        (this.prevScrollX = window.scrollX),
        (this.prevScrollY = window.scrollY));
    }
    destroyScrollWatch() {
      this.shouldWatchScroll && window.removeEventListener('scroll', this.handleScroll, !0);
    }
    createEventFromMouse(e, t) {
      let n = 0,
        r = 0;
      return (
        t
          ? ((this.origPageX = e.pageX), (this.origPageY = e.pageY))
          : ((n = e.pageX - this.origPageX), (r = e.pageY - this.origPageY)),
        { origEvent: e, isTouch: !1, subjectEl: this.subjectEl, pageX: e.pageX, pageY: e.pageY, deltaX: n, deltaY: r }
      );
    }
    createEventFromTouch(e, t) {
      let n,
        r,
        i = e.touches,
        s = 0,
        o = 0;
      return (
        i && i.length ? ((n = i[0].pageX), (r = i[0].pageY)) : ((n = e.pageX), (r = e.pageY)),
        t ? ((this.origPageX = n), (this.origPageY = r)) : ((s = n - this.origPageX), (o = r - this.origPageY)),
        { origEvent: e, isTouch: !0, subjectEl: this.subjectEl, pageX: n, pageY: r, deltaX: s, deltaY: o }
      );
    }
  }
  function Ul(e) {
    Ll && e.preventDefault();
  }
  class Gl {
    constructor() {
      (this.isVisible = !1),
        (this.sourceEl = null),
        (this.mirrorEl = null),
        (this.sourceElRect = null),
        (this.parentNode = document.body),
        (this.zIndex = 9999),
        (this.revertDuration = 0);
    }
    start(e, t, n) {
      (this.sourceEl = e),
        (this.sourceElRect = this.sourceEl.getBoundingClientRect()),
        (this.origScreenX = t - window.scrollX),
        (this.origScreenY = n - window.scrollY),
        (this.deltaX = 0),
        (this.deltaY = 0),
        this.updateElPosition();
    }
    handleMove(e, t) {
      (this.deltaX = e - window.scrollX - this.origScreenX),
        (this.deltaY = t - window.scrollY - this.origScreenY),
        this.updateElPosition();
    }
    setIsVisible(e) {
      e
        ? this.isVisible ||
          (this.mirrorEl && (this.mirrorEl.style.display = ''), (this.isVisible = e), this.updateElPosition())
        : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = 'none'), (this.isVisible = e));
    }
    stop(e, t) {
      let n = () => {
        this.cleanup(), t();
      };
      e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY)
        ? this.doRevertAnimation(n, this.revertDuration)
        : setTimeout(n, 0);
    }
    doRevertAnimation(e, t) {
      let n = this.mirrorEl,
        r = this.sourceEl.getBoundingClientRect();
      (n.style.transition = 'top ' + t + 'ms,left ' + t + 'ms'),
        He(n, { left: r.left, top: r.top }),
        Fe(n, () => {
          (n.style.transition = ''), e();
        });
    }
    cleanup() {
      this.mirrorEl && (ke(this.mirrorEl), (this.mirrorEl = null)), (this.sourceEl = null);
    }
    updateElPosition() {
      this.sourceEl &&
        this.isVisible &&
        He(this.getMirrorEl(), {
          left: this.sourceElRect.left + this.deltaX,
          top: this.sourceElRect.top + this.deltaY,
        });
    }
    getMirrorEl() {
      let e = this.sourceElRect,
        t = this.mirrorEl;
      return (
        t ||
          ((t = this.mirrorEl = this.sourceEl.cloneNode(!0)),
          (t.style.userSelect = 'none'),
          (t.style.webkitUserSelect = 'none'),
          (t.style.pointerEvents = 'none'),
          t.classList.add('fc-event-dragging'),
          He(t, {
            position: 'fixed',
            zIndex: this.zIndex,
            visibility: '',
            boxSizing: 'border-box',
            width: e.right - e.left,
            height: e.bottom - e.top,
            right: 'auto',
            bottom: 'auto',
            margin: 0,
          }),
          this.parentNode.appendChild(t)),
        t
      );
    }
  }
  class Fl extends hs {
    constructor(e, t) {
      super(),
        (this.handleScroll = () => {
          (this.scrollTop = this.scrollController.getScrollTop()),
            (this.scrollLeft = this.scrollController.getScrollLeft()),
            this.handleScrollChange();
        }),
        (this.scrollController = e),
        (this.doesListening = t),
        (this.scrollTop = this.origScrollTop = e.getScrollTop()),
        (this.scrollLeft = this.origScrollLeft = e.getScrollLeft()),
        (this.scrollWidth = e.getScrollWidth()),
        (this.scrollHeight = e.getScrollHeight()),
        (this.clientWidth = e.getClientWidth()),
        (this.clientHeight = e.getClientHeight()),
        (this.clientRect = this.computeClientRect()),
        this.doesListening && this.getEventTarget().addEventListener('scroll', this.handleScroll);
    }
    destroy() {
      this.doesListening && this.getEventTarget().removeEventListener('scroll', this.handleScroll);
    }
    getScrollTop() {
      return this.scrollTop;
    }
    getScrollLeft() {
      return this.scrollLeft;
    }
    setScrollTop(e) {
      this.scrollController.setScrollTop(e),
        this.doesListening ||
          ((this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0)), this.handleScrollChange());
    }
    setScrollLeft(e) {
      this.scrollController.setScrollLeft(e),
        this.doesListening ||
          ((this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0)), this.handleScrollChange());
    }
    getClientWidth() {
      return this.clientWidth;
    }
    getClientHeight() {
      return this.clientHeight;
    }
    getScrollWidth() {
      return this.scrollWidth;
    }
    getScrollHeight() {
      return this.scrollHeight;
    }
    handleScrollChange() {}
  }
  class Vl extends Fl {
    constructor(e, t) {
      super(new fs(e), t);
    }
    getEventTarget() {
      return this.scrollController.el;
    }
    computeClientRect() {
      return ls(this.scrollController.el);
    }
  }
  class ql extends Fl {
    constructor(e) {
      super(new ps(), e);
    }
    getEventTarget() {
      return window;
    }
    computeClientRect() {
      return {
        left: this.scrollLeft,
        right: this.scrollLeft + this.clientWidth,
        top: this.scrollTop,
        bottom: this.scrollTop + this.clientHeight,
      };
    }
    handleScrollChange() {
      this.clientRect = this.computeClientRect();
    }
  }
  const Yl = 'function' == typeof performance ? performance.now : Date.now;
  class Ql {
    constructor() {
      (this.isEnabled = !0),
        (this.scrollQuery = [window, '.fc-scroller']),
        (this.edgeThreshold = 50),
        (this.maxVelocity = 300),
        (this.pointerScreenX = null),
        (this.pointerScreenY = null),
        (this.isAnimating = !1),
        (this.scrollCaches = null),
        (this.everMovedUp = !1),
        (this.everMovedDown = !1),
        (this.everMovedLeft = !1),
        (this.everMovedRight = !1),
        (this.animate = () => {
          if (this.isAnimating) {
            let e = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
            if (e) {
              let t = Yl();
              this.handleSide(e, (t - this.msSinceRequest) / 1e3), this.requestAnimation(t);
            } else this.isAnimating = !1;
          }
        });
    }
    start(e, t, n) {
      this.isEnabled &&
        ((this.scrollCaches = this.buildCaches(n)),
        (this.pointerScreenX = null),
        (this.pointerScreenY = null),
        (this.everMovedUp = !1),
        (this.everMovedDown = !1),
        (this.everMovedLeft = !1),
        (this.everMovedRight = !1),
        this.handleMove(e, t));
    }
    handleMove(e, t) {
      if (this.isEnabled) {
        let n = e - window.scrollX,
          r = t - window.scrollY,
          i = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
          s = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
        i < 0 ? (this.everMovedUp = !0) : i > 0 && (this.everMovedDown = !0),
          s < 0 ? (this.everMovedLeft = !0) : s > 0 && (this.everMovedRight = !0),
          (this.pointerScreenX = n),
          (this.pointerScreenY = r),
          this.isAnimating || ((this.isAnimating = !0), this.requestAnimation(Yl()));
      }
    }
    stop() {
      if (this.isEnabled) {
        this.isAnimating = !1;
        for (let e of this.scrollCaches) e.destroy();
        this.scrollCaches = null;
      }
    }
    requestAnimation(e) {
      (this.msSinceRequest = e), requestAnimationFrame(this.animate);
    }
    handleSide(e, t) {
      let { scrollCache: n } = e,
        { edgeThreshold: r } = this,
        i = r - e.distance,
        s = ((i * i) / (r * r)) * this.maxVelocity * t,
        o = 1;
      switch (e.name) {
        case 'left':
          o = -1;
        case 'right':
          n.setScrollLeft(n.getScrollLeft() + s * o);
          break;
        case 'top':
          o = -1;
        case 'bottom':
          n.setScrollTop(n.getScrollTop() + s * o);
      }
    }
    computeBestEdge(e, t) {
      let { edgeThreshold: n } = this,
        r = null,
        i = this.scrollCaches || [];
      for (let s of i) {
        let i = s.clientRect,
          o = e - i.left,
          l = i.right - e,
          a = t - i.top,
          c = i.bottom - t;
        o >= 0 &&
          l >= 0 &&
          a >= 0 &&
          c >= 0 &&
          (a <= n &&
            this.everMovedUp &&
            s.canScrollUp() &&
            (!r || r.distance > a) &&
            (r = { scrollCache: s, name: 'top', distance: a }),
          c <= n &&
            this.everMovedDown &&
            s.canScrollDown() &&
            (!r || r.distance > c) &&
            (r = { scrollCache: s, name: 'bottom', distance: c }),
          o <= n &&
            this.everMovedLeft &&
            s.canScrollLeft() &&
            (!r || r.distance > o) &&
            (r = { scrollCache: s, name: 'left', distance: o }),
          l <= n &&
            this.everMovedRight &&
            s.canScrollRight() &&
            (!r || r.distance > l) &&
            (r = { scrollCache: s, name: 'right', distance: l }));
      }
      return r;
    }
    buildCaches(e) {
      return this.queryScrollEls(e).map((e) => (e === window ? new ql(!1) : new Vl(e, !1)));
    }
    queryScrollEls(e) {
      let t = [];
      for (let n of this.scrollQuery)
        'object' == typeof n ? t.push(n) : t.push(...Array.prototype.slice.call(e.getRootNode().querySelectorAll(n)));
      return t;
    }
  }
  class Zl extends ws {
    constructor(e, t) {
      super(e),
        (this.containerEl = e),
        (this.delay = null),
        (this.minDistance = 0),
        (this.touchScrollAllowed = !0),
        (this.mirrorNeedsRevert = !1),
        (this.isInteracting = !1),
        (this.isDragging = !1),
        (this.isDelayEnded = !1),
        (this.isDistanceSurpassed = !1),
        (this.delayTimeoutId = null),
        (this.onPointerDown = (e) => {
          this.isDragging ||
            ((this.isInteracting = !0),
            (this.isDelayEnded = !1),
            (this.isDistanceSurpassed = !1),
            $e(document.body),
            Ke(document.body),
            e.isTouch || e.origEvent.preventDefault(),
            this.emitter.trigger('pointerdown', e),
            this.isInteracting &&
              !this.pointer.shouldIgnoreMove &&
              (this.mirror.setIsVisible(!1),
              this.mirror.start(e.subjectEl, e.pageX, e.pageY),
              this.startDelay(e),
              this.minDistance || this.handleDistanceSurpassed(e)));
        }),
        (this.onPointerMove = (e) => {
          if (this.isInteracting) {
            if ((this.emitter.trigger('pointermove', e), !this.isDistanceSurpassed)) {
              let t,
                n = this.minDistance,
                { deltaX: r, deltaY: i } = e;
              (t = r * r + i * i), t >= n * n && this.handleDistanceSurpassed(e);
            }
            this.isDragging &&
              ('scroll' !== e.origEvent.type &&
                (this.mirror.handleMove(e.pageX, e.pageY), this.autoScroller.handleMove(e.pageX, e.pageY)),
              this.emitter.trigger('dragmove', e));
          }
        }),
        (this.onPointerUp = (e) => {
          this.isInteracting &&
            ((this.isInteracting = !1),
            Je(document.body),
            et(document.body),
            this.emitter.trigger('pointerup', e),
            this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(e)),
            this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), (this.delayTimeoutId = null)));
        });
      let n = (this.pointer = new zl(e));
      n.emitter.on('pointerdown', this.onPointerDown),
        n.emitter.on('pointermove', this.onPointerMove),
        n.emitter.on('pointerup', this.onPointerUp),
        t && (n.selector = t),
        (this.mirror = new Gl()),
        (this.autoScroller = new Ql());
    }
    destroy() {
      this.pointer.destroy(), this.onPointerUp({});
    }
    startDelay(e) {
      'number' == typeof this.delay
        ? (this.delayTimeoutId = setTimeout(() => {
            (this.delayTimeoutId = null), this.handleDelayEnd(e);
          }, this.delay))
        : this.handleDelayEnd(e);
    }
    handleDelayEnd(e) {
      (this.isDelayEnded = !0), this.tryStartDrag(e);
    }
    handleDistanceSurpassed(e) {
      (this.isDistanceSurpassed = !0), this.tryStartDrag(e);
    }
    tryStartDrag(e) {
      this.isDelayEnded &&
        this.isDistanceSurpassed &&
        ((this.pointer.wasTouchScroll && !this.touchScrollAllowed) ||
          ((this.isDragging = !0),
          (this.mirrorNeedsRevert = !1),
          this.autoScroller.start(e.pageX, e.pageY, this.containerEl),
          this.emitter.trigger('dragstart', e),
          !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()));
    }
    tryStopDrag(e) {
      this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e));
    }
    stopDrag(e) {
      (this.isDragging = !1), this.emitter.trigger('dragend', e);
    }
    setIgnoreMove(e) {
      this.pointer.shouldIgnoreMove = e;
    }
    setMirrorIsVisible(e) {
      this.mirror.setIsVisible(e);
    }
    setMirrorNeedsRevert(e) {
      this.mirrorNeedsRevert = e;
    }
    setAutoScrollEnabled(e) {
      this.autoScroller.isEnabled = e;
    }
  }
  class Xl {
    constructor(e) {
      (this.el = e), (this.origRect = as(e)), (this.scrollCaches = cs(e).map((e) => new Vl(e, !0)));
    }
    destroy() {
      for (let e of this.scrollCaches) e.destroy();
    }
    computeLeft() {
      let e = this.origRect.left;
      for (let t of this.scrollCaches) e += t.origScrollLeft - t.getScrollLeft();
      return e;
    }
    computeTop() {
      let e = this.origRect.top;
      for (let t of this.scrollCaches) e += t.origScrollTop - t.getScrollTop();
      return e;
    }
    isWithinClipping(e, t) {
      let n = { left: e, top: t };
      for (let e of this.scrollCaches) if (!$l(e.getEventTarget()) && !Li(n, e.clientRect)) return !1;
      return !0;
    }
  }
  function $l(e) {
    let t = e.tagName;
    return 'HTML' === t || 'BODY' === t;
  }
  class Jl {
    constructor(e, t) {
      (this.useSubjectCenter = !1),
        (this.requireInitial = !0),
        (this.disablePointCheck = !1),
        (this.initialHit = null),
        (this.movingHit = null),
        (this.finalHit = null),
        (this.handlePointerDown = (e) => {
          let { dragging: t } = this;
          (this.initialHit = null),
            (this.movingHit = null),
            (this.finalHit = null),
            this.prepareHits(),
            this.processFirstCoord(e),
            this.initialHit || !this.requireInitial
              ? (t.setIgnoreMove(!1), this.emitter.trigger('pointerdown', e))
              : t.setIgnoreMove(!0);
        }),
        (this.handleDragStart = (e) => {
          this.emitter.trigger('dragstart', e), this.handleMove(e, !0);
        }),
        (this.handleDragMove = (e) => {
          this.emitter.trigger('dragmove', e), this.handleMove(e);
        }),
        (this.handlePointerUp = (e) => {
          this.releaseHits(), this.emitter.trigger('pointerup', e);
        }),
        (this.handleDragEnd = (e) => {
          this.movingHit && this.emitter.trigger('hitupdate', null, !0, e),
            (this.finalHit = this.movingHit),
            (this.movingHit = null),
            this.emitter.trigger('dragend', e);
        }),
        (this.droppableStore = t),
        e.emitter.on('pointerdown', this.handlePointerDown),
        e.emitter.on('dragstart', this.handleDragStart),
        e.emitter.on('dragmove', this.handleDragMove),
        e.emitter.on('pointerup', this.handlePointerUp),
        e.emitter.on('dragend', this.handleDragEnd),
        (this.dragging = e),
        (this.emitter = new Xr());
    }
    processFirstCoord(e) {
      let t,
        n = { left: e.pageX, top: e.pageY },
        r = n,
        i = e.subjectEl;
      i instanceof HTMLElement && ((t = as(i)), (r = Gi(r, t)));
      let s = (this.initialHit = this.queryHitForOffset(r.left, r.top));
      if (s) {
        if (this.useSubjectCenter && t) {
          let e = zi(t, s.rect);
          e && (r = Fi(e));
        }
        this.coordAdjust = Vi(r, n);
      } else this.coordAdjust = { left: 0, top: 0 };
    }
    handleMove(e, t) {
      let n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
      (!t && Kl(this.movingHit, n)) || ((this.movingHit = n), this.emitter.trigger('hitupdate', n, !1, e));
    }
    prepareHits() {
      this.offsetTrackers = xn(this.droppableStore, (e) => (e.component.prepareHits(), new Xl(e.el)));
    }
    releaseHits() {
      let { offsetTrackers: e } = this;
      for (let t in e) e[t].destroy();
      this.offsetTrackers = {};
    }
    queryHitForOffset(e, t) {
      let { droppableStore: n, offsetTrackers: r } = this,
        i = null;
      for (let s in n) {
        let o = n[s].component,
          l = r[s];
        if (l && l.isWithinClipping(e, t)) {
          let n = l.computeLeft(),
            r = l.computeTop(),
            a = e - n,
            c = t - r,
            { origRect: d } = l,
            u = d.right - d.left,
            h = d.bottom - d.top;
          if (a >= 0 && a < u && c >= 0 && c < h) {
            let e = o.queryHit(a, c, u, h);
            e &&
              hr(e.dateProfile.activeRange, e.dateSpan.range) &&
              (this.disablePointCheck ||
                l.el.contains(l.el.getRootNode().elementFromPoint(a + n - window.scrollX, c + r - window.scrollY))) &&
              (!i || e.layer > i.layer) &&
              ((e.componentId = s),
              (e.context = o.context),
              (e.rect.left += n),
              (e.rect.right += n),
              (e.rect.top += r),
              (e.rect.bottom += r),
              (i = e));
          }
        }
      }
      return i;
    }
  }
  function Kl(e, t) {
    return (!e && !t) || (Boolean(e) === Boolean(t) && xi(e.dateSpan, t.dateSpan));
  }
  function ea(e, t) {
    let n = {};
    for (let r of t.pluginHooks.datePointTransforms) Object.assign(n, r(e, t));
    var r, i;
    return (
      Object.assign(
        n,
        ((r = e),
        {
          date: (i = t.dateEnv).toDate(r.range.start),
          dateStr: i.formatIso(r.range.start, { omitTime: r.allDay }),
          allDay: r.allDay,
        }),
      ),
      n
    );
  }
  class ta extends Hi {
    constructor(e) {
      super(e),
        (this.subjectEl = null),
        (this.subjectSeg = null),
        (this.isDragging = !1),
        (this.eventRange = null),
        (this.relevantEvents = null),
        (this.receivingContext = null),
        (this.validMutation = null),
        (this.mutatedRelevantEvents = null),
        (this.handlePointerDown = (e) => {
          let t = e.origEvent.target,
            { component: n, dragging: r } = this,
            { mirror: i } = r,
            { options: s } = n.context,
            o = n.context;
          this.subjectEl = e.subjectEl;
          let l = (this.subjectSeg = hi(e.subjectEl)),
            a = (this.eventRange = l.eventRange).instance.instanceId;
          (this.relevantEvents = Ir(o.getCurrentData().eventStore, a)),
            (r.minDistance = e.isTouch ? 0 : s.eventDragMinDistance),
            (r.delay =
              e.isTouch && a !== n.props.eventSelection
                ? (function (e) {
                    let { options: t } = e.context,
                      n = t.eventLongPressDelay;
                    null == n && (n = t.longPressDelay);
                    return n;
                  })(n)
                : null),
            s.fixedMirrorParent ? (i.parentNode = s.fixedMirrorParent) : (i.parentNode = Me(t, '.fc')),
            (i.revertDuration = s.dragRevertDuration);
          let c = n.isValidSegDownEl(t) && !Me(t, '.fc-event-resizer');
          r.setIgnoreMove(!c), (this.isDragging = c && e.subjectEl.classList.contains('fc-event-draggable'));
        }),
        (this.handleDragStart = (e) => {
          let t = this.component.context,
            n = this.eventRange,
            r = n.instance.instanceId;
          e.isTouch
            ? r !== this.component.props.eventSelection && t.dispatch({ type: 'SELECT_EVENT', eventInstanceId: r })
            : t.dispatch({ type: 'UNSELECT_EVENT' }),
            this.isDragging &&
              (t.calendarApi.unselect(e),
              t.emitter.trigger('eventDragStart', {
                el: this.subjectEl,
                event: new oi(t, n.def, n.instance),
                jsEvent: e.origEvent,
                view: t.viewApi,
              }));
        }),
        (this.handleHitUpdate = (e, t) => {
          if (!this.isDragging) return;
          let n = this.relevantEvents,
            r = this.hitDragging.initialHit,
            i = this.component.context,
            s = null,
            o = null,
            l = null,
            a = !1,
            c = { affectedEvents: n, mutatedEvents: { defs: {}, instances: {} }, isEvent: !0 };
          if (e) {
            s = e.context;
            let t = s.options;
            i === s || (t.editable && t.droppable)
              ? ((o = (function (e, t, n, r) {
                  let i = e.dateSpan,
                    s = t.dateSpan,
                    o = i.range.start,
                    l = s.range.start,
                    a = {};
                  i.allDay !== s.allDay &&
                    ((a.allDay = s.allDay),
                    (a.hasEnd = t.context.options.allDayMaintainDuration),
                    (o = s.allDay ? Nt(n) : n));
                  let c = vr(o, l, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
                  c.milliseconds && (a.allDay = !1);
                  let d = { datesDelta: c, standardProps: a };
                  for (let n of r) n(d, e, t);
                  return d;
                })(
                  r,
                  e,
                  this.eventRange.instance.range.start,
                  s.getCurrentData().pluginHooks.eventDragMutationMassagers,
                )),
                o &&
                  ((l = ni(n, s.getCurrentData().eventUiBases, o, s)),
                  (c.mutatedEvents = l),
                  zs(c, e.dateProfile, s) ||
                    ((a = !0), (o = null), (l = null), (c.mutatedEvents = { defs: {}, instances: {} }))))
              : (s = null);
          }
          this.displayDrag(s, c),
            a ? Ze() : Xe(),
            t ||
              (i === s && Kl(r, e) && (o = null),
              this.dragging.setMirrorNeedsRevert(!o),
              this.dragging.setMirrorIsVisible(!e || !this.subjectEl.getRootNode().querySelector('.fc-event-mirror')),
              (this.receivingContext = s),
              (this.validMutation = o),
              (this.mutatedRelevantEvents = l));
        }),
        (this.handlePointerUp = () => {
          this.isDragging || this.cleanup();
        }),
        (this.handleDragEnd = (e) => {
          if (this.isDragging) {
            let t = this.component.context,
              n = t.viewApi,
              { receivingContext: r, validMutation: i } = this,
              s = this.eventRange.def,
              o = this.eventRange.instance,
              l = new oi(t, s, o),
              a = this.relevantEvents,
              c = this.mutatedRelevantEvents,
              { finalHit: d } = this.hitDragging;
            if (
              (this.clearDrag(),
              t.emitter.trigger('eventDragStop', { el: this.subjectEl, event: l, jsEvent: e.origEvent, view: n }),
              i)
            ) {
              if (r === t) {
                let r = new oi(t, c.defs[s.defId], o ? c.instances[o.instanceId] : null);
                t.dispatch({ type: 'MERGE_EVENTS', eventStore: c });
                let d = {
                    oldEvent: l,
                    event: r,
                    relatedEvents: ai(c, t, o),
                    revert() {
                      t.dispatch({ type: 'MERGE_EVENTS', eventStore: a });
                    },
                  },
                  u = {};
                for (let e of t.getCurrentData().pluginHooks.eventDropTransformers) Object.assign(u, e(i, t));
                t.emitter.trigger(
                  'eventDrop',
                  Object.assign(Object.assign(Object.assign({}, d), u), {
                    el: e.subjectEl,
                    delta: i.datesDelta,
                    jsEvent: e.origEvent,
                    view: n,
                  }),
                ),
                  t.emitter.trigger('eventChange', d);
              } else if (r) {
                let i = {
                  event: l,
                  relatedEvents: ai(a, t, o),
                  revert() {
                    t.dispatch({ type: 'MERGE_EVENTS', eventStore: a });
                  },
                };
                t.emitter.trigger(
                  'eventLeave',
                  Object.assign(Object.assign({}, i), { draggedEl: e.subjectEl, view: n }),
                ),
                  t.dispatch({ type: 'REMOVE_EVENTS', eventStore: a }),
                  t.emitter.trigger('eventRemove', i);
                let u = c.defs[s.defId],
                  h = c.instances[o.instanceId],
                  f = new oi(r, u, h);
                r.dispatch({ type: 'MERGE_EVENTS', eventStore: c });
                let p = {
                  event: f,
                  relatedEvents: ai(c, r, h),
                  revert() {
                    r.dispatch({ type: 'REMOVE_EVENTS', eventStore: c });
                  },
                };
                r.emitter.trigger('eventAdd', p),
                  e.isTouch && r.dispatch({ type: 'SELECT_EVENT', eventInstanceId: o.instanceId }),
                  r.emitter.trigger(
                    'drop',
                    Object.assign(Object.assign({}, ea(d.dateSpan, r)), {
                      draggedEl: e.subjectEl,
                      jsEvent: e.origEvent,
                      view: d.context.viewApi,
                    }),
                  ),
                  r.emitter.trigger(
                    'eventReceive',
                    Object.assign(Object.assign({}, p), { draggedEl: e.subjectEl, view: d.context.viewApi }),
                  );
              }
            } else t.emitter.trigger('_noEventDrop');
          }
          this.cleanup();
        });
      let { component: t } = this,
        { options: n } = t.context,
        r = (this.dragging = new Zl(e.el));
      (r.pointer.selector = ta.SELECTOR), (r.touchScrollAllowed = !1), (r.autoScroller.isEnabled = n.dragScroll);
      let i = (this.hitDragging = new Jl(this.dragging, Bi));
      (i.useSubjectCenter = e.useEventCenter),
        i.emitter.on('pointerdown', this.handlePointerDown),
        i.emitter.on('dragstart', this.handleDragStart),
        i.emitter.on('hitupdate', this.handleHitUpdate),
        i.emitter.on('pointerup', this.handlePointerUp),
        i.emitter.on('dragend', this.handleDragEnd);
    }
    destroy() {
      this.dragging.destroy();
    }
    displayDrag(e, t) {
      let n = this.component.context,
        r = this.receivingContext;
      r &&
        r !== e &&
        (r === n
          ? r.dispatch({
              type: 'SET_EVENT_DRAG',
              state: { affectedEvents: t.affectedEvents, mutatedEvents: { defs: {}, instances: {} }, isEvent: !0 },
            })
          : r.dispatch({ type: 'UNSET_EVENT_DRAG' })),
        e && e.dispatch({ type: 'SET_EVENT_DRAG', state: t });
    }
    clearDrag() {
      let e = this.component.context,
        { receivingContext: t } = this;
      t && t.dispatch({ type: 'UNSET_EVENT_DRAG' }), e !== t && e.dispatch({ type: 'UNSET_EVENT_DRAG' });
    }
    cleanup() {
      (this.subjectSeg = null),
        (this.isDragging = !1),
        (this.eventRange = null),
        (this.relevantEvents = null),
        (this.receivingContext = null),
        (this.validMutation = null),
        (this.mutatedRelevantEvents = null);
    }
  }
  ta.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
  const na = { fixedMirrorParent: wn },
    ra = {
      dateClick: wn,
      eventDragStart: wn,
      eventDragStop: wn,
      eventDrop: wn,
      eventResizeStart: wn,
      eventResizeStop: wn,
      eventResize: wn,
      drop: wn,
      eventReceive: wn,
      eventLeave: wn,
    };
  class ia {
    constructor(e, t) {
      (this.receivingContext = null),
        (this.droppableEvent = null),
        (this.suppliedDragMeta = null),
        (this.dragMeta = null),
        (this.handleDragStart = (e) => {
          this.dragMeta = this.buildDragMeta(e.subjectEl);
        }),
        (this.handleHitUpdate = (e, t, n) => {
          let { dragging: r } = this.hitDragging,
            i = null,
            s = null,
            o = !1,
            l = {
              affectedEvents: { defs: {}, instances: {} },
              mutatedEvents: { defs: {}, instances: {} },
              isEvent: this.dragMeta.create,
            };
          e &&
            ((i = e.context),
            this.canDropElOnCalendar(n.subjectEl, i) &&
              ((s = (function (e, t, n) {
                let r = Object.assign({}, t.leftoverProps);
                for (let i of n.pluginHooks.externalDefTransforms) Object.assign(r, i(e, t));
                let { refined: i, extra: s } = xr(r, n),
                  o = _r(i, s, t.sourceId, e.allDay, n.options.forceEventDuration || Boolean(t.duration), n),
                  l = e.range.start;
                e.allDay && t.startTime && (l = n.dateEnv.add(l, t.startTime));
                let a = t.duration ? n.dateEnv.add(l, t.duration) : ti(e.allDay, l, n),
                  c = Sr(o.defId, { start: l, end: a });
                return { def: o, instance: c };
              })(e.dateSpan, this.dragMeta, i)),
              (l.mutatedEvents = Mr(s)),
              (o = !zs(l, e.dateProfile, i)),
              o && ((l.mutatedEvents = { defs: {}, instances: {} }), (s = null)))),
            this.displayDrag(i, l),
            r.setMirrorIsVisible(t || !s || !document.querySelector('.fc-event-mirror')),
            o ? Ze() : Xe(),
            t || (r.setMirrorNeedsRevert(!s), (this.receivingContext = i), (this.droppableEvent = s));
        }),
        (this.handleDragEnd = (e) => {
          let { receivingContext: t, droppableEvent: n } = this;
          if ((this.clearDrag(), t && n)) {
            let r = this.hitDragging.finalHit,
              i = r.context.viewApi,
              s = this.dragMeta;
            if (
              (t.emitter.trigger(
                'drop',
                Object.assign(Object.assign({}, ea(r.dateSpan, t)), {
                  draggedEl: e.subjectEl,
                  jsEvent: e.origEvent,
                  view: i,
                }),
              ),
              s.create)
            ) {
              let r = Mr(n);
              t.dispatch({ type: 'MERGE_EVENTS', eventStore: r }),
                e.isTouch && t.dispatch({ type: 'SELECT_EVENT', eventInstanceId: n.instance.instanceId }),
                t.emitter.trigger('eventReceive', {
                  event: new oi(t, n.def, n.instance),
                  relatedEvents: [],
                  revert() {
                    t.dispatch({ type: 'REMOVE_EVENTS', eventStore: r });
                  },
                  draggedEl: e.subjectEl,
                  view: i,
                });
            }
          }
          (this.receivingContext = null), (this.droppableEvent = null);
        });
      let n = (this.hitDragging = new Jl(e, Bi));
      (n.requireInitial = !1),
        n.emitter.on('dragstart', this.handleDragStart),
        n.emitter.on('hitupdate', this.handleHitUpdate),
        n.emitter.on('dragend', this.handleDragEnd),
        (this.suppliedDragMeta = t);
    }
    buildDragMeta(e) {
      return 'object' == typeof this.suppliedDragMeta
        ? As(this.suppliedDragMeta)
        : 'function' == typeof this.suppliedDragMeta
          ? As(this.suppliedDragMeta(e))
          : (function (e) {
              let t = (function (e, t) {
                let n = Ds.dataAttrPrefix,
                  r = (n ? n + '-' : '') + t;
                return e.getAttribute('data-' + r) || '';
              })(e, 'event');
              return As(t ? JSON.parse(t) : { create: !1 });
            })(e);
    }
    displayDrag(e, t) {
      let n = this.receivingContext;
      n && n !== e && n.dispatch({ type: 'UNSET_EVENT_DRAG' }), e && e.dispatch({ type: 'SET_EVENT_DRAG', state: t });
    }
    clearDrag() {
      this.receivingContext && this.receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
    }
    canDropElOnCalendar(e, t) {
      let n = t.options.dropAccept;
      return 'function' == typeof n ? n.call(t.calendarApi, e) : 'string' != typeof n || !n || Boolean(Ie(e, n));
    }
  }
  Ds.dataAttrPrefix = '';
  class sa extends ws {
    constructor(e) {
      super(e),
        (this.shouldIgnoreMove = !1),
        (this.mirrorSelector = ''),
        (this.currentMirrorEl = null),
        (this.handlePointerDown = (e) => {
          this.emitter.trigger('pointerdown', e), this.shouldIgnoreMove || this.emitter.trigger('dragstart', e);
        }),
        (this.handlePointerMove = (e) => {
          this.shouldIgnoreMove || this.emitter.trigger('dragmove', e);
        }),
        (this.handlePointerUp = (e) => {
          this.emitter.trigger('pointerup', e), this.shouldIgnoreMove || this.emitter.trigger('dragend', e);
        });
      let t = (this.pointer = new zl(e));
      t.emitter.on('pointerdown', this.handlePointerDown),
        t.emitter.on('pointermove', this.handlePointerMove),
        t.emitter.on('pointerup', this.handlePointerUp);
    }
    destroy() {
      this.pointer.destroy();
    }
    setIgnoreMove(e) {
      this.shouldIgnoreMove = e;
    }
    setMirrorIsVisible(e) {
      if (e) this.currentMirrorEl && ((this.currentMirrorEl.style.visibility = ''), (this.currentMirrorEl = null));
      else {
        let e = this.mirrorSelector ? document.querySelector(this.mirrorSelector) : null;
        e && ((this.currentMirrorEl = e), (e.style.visibility = 'hidden'));
      }
    }
  }
  var oa = zo({
    name: '@fullcalendar/interaction',
    componentInteractions: [
      class extends Hi {
        constructor(e) {
          super(e),
            (this.handlePointerDown = (e) => {
              let { dragging: t } = this,
                n = e.origEvent.target;
              t.setIgnoreMove(!this.component.isValidDateDownEl(n));
            }),
            (this.handleDragEnd = (e) => {
              let { component: t } = this,
                { pointer: n } = this.dragging;
              if (!n.wasTouchScroll) {
                let { initialHit: n, finalHit: r } = this.hitDragging;
                if (n && r && Kl(n, r)) {
                  let { context: r } = t,
                    i = Object.assign(Object.assign({}, ea(n.dateSpan, r)), {
                      dayEl: n.dayEl,
                      jsEvent: e.origEvent,
                      view: r.viewApi || r.calendarApi.view,
                    });
                  r.emitter.trigger('dateClick', i);
                }
              }
            }),
            (this.dragging = new Zl(e.el)),
            (this.dragging.autoScroller.isEnabled = !1);
          let t = (this.hitDragging = new Jl(this.dragging, Wi(e)));
          t.emitter.on('pointerdown', this.handlePointerDown), t.emitter.on('dragend', this.handleDragEnd);
        }
        destroy() {
          this.dragging.destroy();
        }
      },
      class extends Hi {
        constructor(e) {
          super(e),
            (this.dragSelection = null),
            (this.handlePointerDown = (e) => {
              let { component: t, dragging: n } = this,
                { options: r } = t.context,
                i = r.selectable && t.isValidDateDownEl(e.origEvent.target);
              n.setIgnoreMove(!i),
                (n.delay = e.isTouch
                  ? (function (e) {
                      let { options: t } = e.context,
                        n = t.selectLongPressDelay;
                      null == n && (n = t.longPressDelay);
                      return n;
                    })(t)
                  : null);
            }),
            (this.handleDragStart = (e) => {
              this.component.context.calendarApi.unselect(e);
            }),
            (this.handleHitUpdate = (e, t) => {
              let { context: n } = this.component,
                r = null,
                i = !1;
              if (e) {
                let t = this.hitDragging.initialHit;
                (e.componentId === t.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(t, e)) ||
                  (r = (function (e, t, n) {
                    let r = e.dateSpan,
                      i = t.dateSpan,
                      s = [r.range.start, r.range.end, i.range.start, i.range.end];
                    s.sort(lt);
                    let o = {};
                    for (let r of n) {
                      let n = r(e, t);
                      if (!1 === n) return null;
                      n && Object.assign(o, n);
                    }
                    return (o.range = { start: s[0], end: s[3] }), (o.allDay = r.allDay), o;
                  })(t, e, n.pluginHooks.dateSelectionTransformers)),
                  (r && Us(r, e.dateProfile, n)) || ((i = !0), (r = null));
              }
              r ? n.dispatch({ type: 'SELECT_DATES', selection: r }) : t || n.dispatch({ type: 'UNSELECT_DATES' }),
                i ? Ze() : Xe(),
                t || (this.dragSelection = r);
            }),
            (this.handlePointerUp = (e) => {
              this.dragSelection && (Kr(this.dragSelection, e, this.component.context), (this.dragSelection = null));
            });
          let { component: t } = e,
            { options: n } = t.context,
            r = (this.dragging = new Zl(e.el));
          (r.touchScrollAllowed = !1),
            (r.minDistance = n.selectMinDistance || 0),
            (r.autoScroller.isEnabled = n.dragScroll);
          let i = (this.hitDragging = new Jl(this.dragging, Wi(e)));
          i.emitter.on('pointerdown', this.handlePointerDown),
            i.emitter.on('dragstart', this.handleDragStart),
            i.emitter.on('hitupdate', this.handleHitUpdate),
            i.emitter.on('pointerup', this.handlePointerUp);
        }
        destroy() {
          this.dragging.destroy();
        }
      },
      ta,
      class extends Hi {
        constructor(e) {
          super(e),
            (this.draggingSegEl = null),
            (this.draggingSeg = null),
            (this.eventRange = null),
            (this.relevantEvents = null),
            (this.validMutation = null),
            (this.mutatedRelevantEvents = null),
            (this.handlePointerDown = (e) => {
              let { component: t } = this,
                n = hi(this.querySegEl(e)),
                r = (this.eventRange = n.eventRange);
              (this.dragging.minDistance = t.context.options.eventDragMinDistance),
                this.dragging.setIgnoreMove(
                  !this.component.isValidSegDownEl(e.origEvent.target) ||
                    (e.isTouch && this.component.props.eventSelection !== r.instance.instanceId),
                );
            }),
            (this.handleDragStart = (e) => {
              let { context: t } = this.component,
                n = this.eventRange;
              this.relevantEvents = Ir(t.getCurrentData().eventStore, this.eventRange.instance.instanceId);
              let r = this.querySegEl(e);
              (this.draggingSegEl = r),
                (this.draggingSeg = hi(r)),
                t.calendarApi.unselect(),
                t.emitter.trigger('eventResizeStart', {
                  el: r,
                  event: new oi(t, n.def, n.instance),
                  jsEvent: e.origEvent,
                  view: t.viewApi,
                });
            }),
            (this.handleHitUpdate = (e, t, n) => {
              let { context: r } = this.component,
                i = this.relevantEvents,
                s = this.hitDragging.initialHit,
                o = this.eventRange.instance,
                l = null,
                a = null,
                c = !1,
                d = { affectedEvents: i, mutatedEvents: { defs: {}, instances: {} }, isEvent: !0 };
              if (e) {
                (e.componentId === s.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(s, e)) ||
                  (l = (function (e, t, n, r) {
                    let i = e.context.dateEnv,
                      s = e.dateSpan.range.start,
                      o = t.dateSpan.range.start,
                      l = vr(s, o, i, e.largeUnit);
                    if (n) {
                      if (i.add(r.start, l) < r.end) return { startDelta: l };
                    } else if (i.add(r.end, l) > r.start) return { endDelta: l };
                    return null;
                  })(s, e, n.subjectEl.classList.contains('fc-event-resizer-start'), o.range));
              }
              l &&
                ((a = ni(i, r.getCurrentData().eventUiBases, l, r)),
                (d.mutatedEvents = a),
                zs(d, e.dateProfile, r) || ((c = !0), (l = null), (a = null), (d.mutatedEvents = null))),
                a ? r.dispatch({ type: 'SET_EVENT_RESIZE', state: d }) : r.dispatch({ type: 'UNSET_EVENT_RESIZE' }),
                c ? Ze() : Xe(),
                t || (l && Kl(s, e) && (l = null), (this.validMutation = l), (this.mutatedRelevantEvents = a));
            }),
            (this.handleDragEnd = (e) => {
              let { context: t } = this.component,
                n = this.eventRange.def,
                r = this.eventRange.instance,
                i = new oi(t, n, r),
                s = this.relevantEvents,
                o = this.mutatedRelevantEvents;
              if (
                (t.emitter.trigger('eventResizeStop', {
                  el: this.draggingSegEl,
                  event: i,
                  jsEvent: e.origEvent,
                  view: t.viewApi,
                }),
                this.validMutation)
              ) {
                let l = new oi(t, o.defs[n.defId], r ? o.instances[r.instanceId] : null);
                t.dispatch({ type: 'MERGE_EVENTS', eventStore: o });
                let a = {
                  oldEvent: i,
                  event: l,
                  relatedEvents: ai(o, t, r),
                  revert() {
                    t.dispatch({ type: 'MERGE_EVENTS', eventStore: s });
                  },
                };
                t.emitter.trigger(
                  'eventResize',
                  Object.assign(Object.assign({}, a), {
                    el: this.draggingSegEl,
                    startDelta: this.validMutation.startDelta || ht(0),
                    endDelta: this.validMutation.endDelta || ht(0),
                    jsEvent: e.origEvent,
                    view: t.viewApi,
                  }),
                ),
                  t.emitter.trigger('eventChange', a);
              } else t.emitter.trigger('_noEventResize');
              (this.draggingSeg = null), (this.relevantEvents = null), (this.validMutation = null);
            });
          let { component: t } = e,
            n = (this.dragging = new Zl(e.el));
          (n.pointer.selector = '.fc-event-resizer'),
            (n.touchScrollAllowed = !1),
            (n.autoScroller.isEnabled = t.context.options.dragScroll);
          let r = (this.hitDragging = new Jl(this.dragging, Wi(e)));
          r.emitter.on('pointerdown', this.handlePointerDown),
            r.emitter.on('dragstart', this.handleDragStart),
            r.emitter.on('hitupdate', this.handleHitUpdate),
            r.emitter.on('dragend', this.handleDragEnd);
        }
        destroy() {
          this.dragging.destroy();
        }
        querySegEl(e) {
          return Me(e.subjectEl, '.fc-event');
        }
      },
    ],
    calendarInteractions: [
      class {
        constructor(e) {
          (this.context = e),
            (this.isRecentPointerDateSelect = !1),
            (this.matchesCancel = !1),
            (this.matchesEvent = !1),
            (this.onSelect = (e) => {
              e.jsEvent && (this.isRecentPointerDateSelect = !0);
            }),
            (this.onDocumentPointerDown = (e) => {
              let t = this.context.options.unselectCancel,
                n = Be(e.origEvent);
              (this.matchesCancel = !!Me(n, t)), (this.matchesEvent = !!Me(n, ta.SELECTOR));
            }),
            (this.onDocumentPointerUp = (e) => {
              let { context: t } = this,
                { documentPointer: n } = this,
                r = t.getCurrentData();
              if (!n.wasTouchScroll) {
                if (r.dateSelection && !this.isRecentPointerDateSelect) {
                  let n = t.options.unselectAuto;
                  !n || (n && this.matchesCancel) || t.calendarApi.unselect(e);
                }
                r.eventSelection && !this.matchesEvent && t.dispatch({ type: 'UNSELECT_EVENT' });
              }
              this.isRecentPointerDateSelect = !1;
            });
          let t = (this.documentPointer = new zl(document));
          (t.shouldIgnoreMove = !0),
            (t.shouldWatchScroll = !1),
            t.emitter.on('pointerdown', this.onDocumentPointerDown),
            t.emitter.on('pointerup', this.onDocumentPointerUp),
            e.emitter.on('select', this.onSelect);
        }
        destroy() {
          this.context.emitter.off('select', this.onSelect), this.documentPointer.destroy();
        }
      },
    ],
    elementDraggingImpl: Zl,
    optionRefiners: na,
    listenerRefiners: ra,
  });
  class la extends gs {
    constructor() {
      super(...arguments), (this.headerElRef = { current: null });
    }
    renderSimpleLayout(e, t) {
      let { props: n, context: r } = this,
        i = [],
        s = co(r.options);
      return (
        e &&
          i.push({
            type: 'header',
            key: 'header',
            isSticky: s,
            chunk: { elRef: this.headerElRef, tableClassName: 'fc-col-header', rowContent: e },
          }),
        i.push({ type: 'body', key: 'body', liquid: !0, chunk: { content: t } }),
        g(
          sr,
          { elClasses: ['fc-daygrid'], viewSpec: r.viewSpec },
          g(ho, { liquid: !n.isHeightAuto && !n.forPrint, collapsibleWidth: n.forPrint, cols: [], sections: i }),
        )
      );
    }
    renderHScrollLayout(e, t, n, r) {
      let i = this.context.pluginHooks.scrollGridImpl;
      if (!i) throw new Error('No ScrollGrid implementation');
      let { props: s, context: o } = this,
        l = !s.forPrint && co(o.options),
        a = !s.forPrint && uo(o.options),
        c = [];
      return (
        e &&
          c.push({
            type: 'header',
            key: 'header',
            isSticky: l,
            chunks: [{ key: 'main', elRef: this.headerElRef, tableClassName: 'fc-col-header', rowContent: e }],
          }),
        c.push({ type: 'body', key: 'body', liquid: !0, chunks: [{ key: 'main', content: t }] }),
        a && c.push({ type: 'footer', key: 'footer', isSticky: !0, chunks: [{ key: 'main', content: ao }] }),
        g(
          sr,
          { elClasses: ['fc-daygrid'], viewSpec: o.viewSpec },
          g(i, {
            liquid: !s.isHeightAuto && !s.forPrint,
            forPrint: s.forPrint,
            collapsibleWidth: s.forPrint,
            colGroups: [{ cols: [{ span: n, minWidth: r }] }],
            sections: c,
          }),
        )
      );
    }
  }
  function aa(e, t) {
    let n = [];
    for (let e = 0; e < t; e += 1) n[e] = [];
    for (let t of e) n[t.row].push(t);
    return n;
  }
  function ca(e, t) {
    let n = [];
    for (let e = 0; e < t; e += 1) n[e] = [];
    for (let t of e) n[t.firstCol].push(t);
    return n;
  }
  function da(e, t) {
    let n = [];
    if (e) {
      for (let r = 0; r < t; r += 1) n[r] = { affectedInstances: e.affectedInstances, isEvent: e.isEvent, segs: [] };
      for (let t of e.segs) n[t.row].segs.push(t);
    } else for (let e = 0; e < t; e += 1) n[e] = null;
    return n;
  }
  const ua = hn({ hour: 'numeric', minute: '2-digit', omitZeroMinute: !0, meridiem: 'narrow' });
  function ha(e) {
    let { display: t } = e.eventRange.ui;
    return (
      'list-item' === t ||
      ('auto' === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd)
    );
  }
  class fa extends Xn {
    render() {
      let { props: e } = this;
      return g(
        po,
        Object.assign({}, e, {
          elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'],
          defaultTimeFormat: ua,
          defaultDisplayEventEnd: e.defaultDisplayEventEnd,
          disableResizing: !e.seg.eventRange.def.allDay,
        }),
      );
    }
  }
  class pa extends Xn {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        { seg: r } = e,
        i = Si(r, n.eventTimeFormat || ua, t, !0, e.defaultDisplayEventEnd);
      return g(
        fo,
        Object.assign({}, e, {
          elTag: 'a',
          elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'],
          elAttrs: Di(e.seg, t),
          defaultGenerator: ga,
          timeText: i,
          isResizing: !1,
          isDateSelecting: !1,
        }),
      );
    }
  }
  function ga(e) {
    return g(
      v,
      null,
      g('div', { className: 'fc-daygrid-event-dot', style: { borderColor: e.borderColor || e.backgroundColor } }),
      e.timeText && g('div', { className: 'fc-event-time' }, e.timeText),
      g('div', { className: 'fc-event-title' }, e.event.title || g(v, null, ' ')),
    );
  }
  class ma extends Xn {
    constructor() {
      super(...arguments), (this.compileSegs = Qt(va));
    }
    render() {
      let { props: e } = this,
        { allSegs: t, invisibleSegs: n } = this.compileSegs(e.singlePlacements);
      return g(To, {
        elClasses: ['fc-daygrid-more-link'],
        dateProfile: e.dateProfile,
        todayRange: e.todayRange,
        allDayDate: e.allDayDate,
        moreCnt: e.moreCnt,
        allSegs: t,
        hiddenSegs: n,
        alignmentElRef: e.alignmentElRef,
        alignGridTop: e.alignGridTop,
        extraDateSpan: e.extraDateSpan,
        popoverContent: () => {
          let n =
            (e.eventDrag ? e.eventDrag.affectedInstances : null) ||
            (e.eventResize ? e.eventResize.affectedInstances : null) ||
            {};
          return g(
            v,
            null,
            t.map((t) => {
              let r = t.eventRange.instance.instanceId;
              return g(
                'div',
                { className: 'fc-daygrid-event-harness', key: r, style: { visibility: n[r] ? 'hidden' : '' } },
                ha(t)
                  ? g(
                      pa,
                      Object.assign(
                        { seg: t, isDragging: !1, isSelected: r === e.eventSelection, defaultDisplayEventEnd: !1 },
                        Ei(t, e.todayRange),
                      ),
                    )
                  : g(
                      fa,
                      Object.assign(
                        {
                          seg: t,
                          isDragging: !1,
                          isResizing: !1,
                          isDateSelecting: !1,
                          isSelected: r === e.eventSelection,
                          defaultDisplayEventEnd: !1,
                        },
                        Ei(t, e.todayRange),
                      ),
                    ),
              );
            }),
          );
        },
      });
    }
  }
  function va(e) {
    let t = [],
      n = [];
    for (let r of e) t.push(r.seg), r.isVisible || n.push(r.seg);
    return { allSegs: t, invisibleSegs: n };
  }
  const ya = hn({ week: 'narrow' });
  class ba extends gs {
    constructor() {
      super(...arguments),
        (this.rootElRef = { current: null }),
        (this.state = { dayNumberId: Le() }),
        (this.handleRootEl = (e) => {
          $n(this.rootElRef, e), $n(this.props.elRef, e);
        });
    }
    render() {
      let { context: e, props: t, state: n, rootElRef: r } = this,
        { options: i, dateEnv: s } = e,
        { date: o, dateProfile: l } = t;
      const a =
        t.showDayNumber &&
        (function (e, t, n) {
          const { start: r, end: i } = t,
            s = Tt(i, -1),
            o = n.getYear(r),
            l = n.getMonth(r),
            a = n.getYear(s),
            c = n.getMonth(s);
          return (
            !(o === a && l === c) &&
            Boolean(e.valueOf() === r.valueOf() || (1 === n.getDay(e) && e.valueOf() < i.valueOf()))
          );
        })(o, l.currentRange, s);
      return g(
        yo,
        {
          elTag: 'td',
          elRef: this.handleRootEl,
          elClasses: ['fc-daygrid-day', ...(t.extraClassNames || [])],
          elAttrs: Object.assign(
            Object.assign(
              Object.assign({}, t.extraDataAttrs),
              t.showDayNumber ? { 'aria-labelledby': n.dayNumberId } : {},
            ),
            { role: 'gridcell' },
          ),
          defaultGenerator: Sa,
          date: o,
          dateProfile: l,
          todayRange: t.todayRange,
          showDayNumber: t.showDayNumber,
          isMonthStart: a,
          extraRenderProps: t.extraRenderProps,
        },
        (s, l) =>
          g(
            'div',
            {
              ref: t.innerElRef,
              className: 'fc-daygrid-day-frame fc-scrollgrid-sync-inner',
              style: { minHeight: t.minHeight },
            },
            t.showWeekNumber &&
              g(Do, {
                elTag: 'a',
                elClasses: ['fc-daygrid-week-number'],
                elAttrs: es(e, o, 'week'),
                date: o,
                defaultFormat: ya,
              }),
            !l.isDisabled && (t.showDayNumber || bo(i) || t.forceDayTop)
              ? g(
                  'div',
                  { className: 'fc-daygrid-day-top' },
                  g(s, {
                    elTag: 'a',
                    elClasses: ['fc-daygrid-day-number', a && 'fc-daygrid-month-start'],
                    elAttrs: Object.assign(Object.assign({}, es(e, o)), { id: n.dayNumberId }),
                  }),
                )
              : t.showDayNumber
                ? g(
                    'div',
                    { className: 'fc-daygrid-day-top', style: { visibility: 'hidden' } },
                    g('a', { className: 'fc-daygrid-day-number' }, ' '),
                  )
                : void 0,
            g(
              'div',
              { className: 'fc-daygrid-day-events', ref: t.fgContentElRef },
              t.fgContent,
              g(
                'div',
                { className: 'fc-daygrid-day-bottom', style: { marginTop: t.moreMarginTop } },
                g(ma, {
                  allDayDate: o,
                  singlePlacements: t.singlePlacements,
                  moreCnt: t.moreCnt,
                  alignmentElRef: r,
                  alignGridTop: !t.showDayNumber,
                  extraDateSpan: t.extraDateSpan,
                  dateProfile: t.dateProfile,
                  eventSelection: t.eventSelection,
                  eventDrag: t.eventDrag,
                  eventResize: t.eventResize,
                  todayRange: t.todayRange,
                }),
              ),
            ),
            g('div', { className: 'fc-daygrid-day-bg' }, t.bgContent),
          ),
      );
    }
  }
  function Sa(e) {
    return e.dayNumberText || g(v, null, ' ');
  }
  function Ea(e) {
    return e.eventRange.instance.instanceId + ':' + e.firstCol;
  }
  function Ca(e) {
    return Ea(e) + ':' + e.lastCol;
  }
  function wa(e, t, n, r, i, s, o) {
    let l = new Ra((t) => {
      let n = e[t.index].eventRange.instance.instanceId + ':' + t.span.start + ':' + (t.span.end - 1);
      return i[n] || 1;
    });
    (l.allowReslicing = !0),
      (l.strictOrder = r),
      !0 === t || !0 === n
        ? ((l.maxCoord = s), (l.hiddenConsumes = !0))
        : 'number' == typeof t
          ? (l.maxStackCnt = t)
          : 'number' == typeof n && ((l.maxStackCnt = n), (l.hiddenConsumes = !0));
    let a = [],
      c = [];
    for (let t = 0; t < e.length; t += 1) {
      let n = e[t],
        r = Ca(n);
      null != i[r] ? a.push({ index: t, span: { start: n.firstCol, end: n.lastCol + 1 } }) : c.push(n);
    }
    let d = l.addSegs(a),
      u = l.toRects(),
      {
        singleColPlacements: h,
        multiColPlacements: f,
        leftoverMargins: p,
      } = (function (e, t, n) {
        let r = (function (e, t) {
            let n = [];
            for (let e = 0; e < t; e += 1) n.push([]);
            for (let t of e) for (let e = t.span.start; e < t.span.end; e += 1) n[e].push(t);
            return n;
          })(e, n.length),
          i = [],
          s = [],
          o = [];
        for (let e = 0; e < n.length; e += 1) {
          let l = r[e],
            a = [],
            c = 0,
            d = 0;
          for (let r of l) {
            let i = t[r.index];
            a.push({
              seg: Da(i, e, e + 1, n),
              isVisible: !0,
              isAbsolute: !1,
              absoluteTop: r.levelCoord,
              marginTop: r.levelCoord - c,
            }),
              (c = r.levelCoord + r.thickness);
          }
          let u = [];
          (c = 0), (d = 0);
          for (let r of l) {
            let i = t[r.index],
              s = r.span.end - r.span.start > 1,
              o = r.span.start === e;
            (d += r.levelCoord - c),
              (c = r.levelCoord + r.thickness),
              s
                ? ((d += r.thickness),
                  o &&
                    u.push({
                      seg: Da(i, r.span.start, r.span.end, n),
                      isVisible: !0,
                      isAbsolute: !0,
                      absoluteTop: r.levelCoord,
                      marginTop: 0,
                    }))
                : o &&
                  (u.push({
                    seg: Da(i, r.span.start, r.span.end, n),
                    isVisible: !0,
                    isAbsolute: !1,
                    absoluteTop: r.levelCoord,
                    marginTop: d,
                  }),
                  (d = 0));
          }
          i.push(a), s.push(u), o.push(d);
        }
        return { singleColPlacements: i, multiColPlacements: s, leftoverMargins: o };
      })(u, e, o),
      g = [],
      m = [];
    for (let e of c) {
      f[e.firstCol].push({ seg: e, isVisible: !1, isAbsolute: !0, absoluteTop: 0, marginTop: 0 });
      for (let t = e.firstCol; t <= e.lastCol; t += 1)
        h[t].push({ seg: Da(e, t, t + 1, o), isVisible: !1, isAbsolute: !1, absoluteTop: 0, marginTop: 0 });
    }
    for (let e = 0; e < o.length; e += 1) g.push(0);
    for (let t of d) {
      let n = e[t.index],
        r = t.span;
      f[r.start].push({ seg: Da(n, r.start, r.end, o), isVisible: !1, isAbsolute: !0, absoluteTop: 0, marginTop: 0 });
      for (let e = r.start; e < r.end; e += 1)
        (g[e] += 1),
          h[e].push({ seg: Da(n, e, e + 1, o), isVisible: !1, isAbsolute: !1, absoluteTop: 0, marginTop: 0 });
    }
    for (let e = 0; e < o.length; e += 1) m.push(p[e]);
    return { singleColPlacements: h, multiColPlacements: f, moreCnts: g, moreMarginTops: m };
  }
  function Da(e, t, n, r) {
    if (e.firstCol === t && e.lastCol === n - 1) return e;
    let i = e.eventRange,
      s = i.range,
      o = cr(s, { start: r[t].date, end: xt(r[n - 1].date, 1) });
    return Object.assign(Object.assign({}, e), {
      firstCol: t,
      lastCol: n - 1,
      eventRange: {
        def: i.def,
        ui: Object.assign(Object.assign({}, i.ui), { durationEditable: !1 }),
        instance: i.instance,
        range: o,
      },
      isStart: e.isStart && o.start.valueOf() === s.start.valueOf(),
      isEnd: e.isEnd && o.end.valueOf() === s.end.valueOf(),
    });
  }
  class Ra extends ms {
    constructor() {
      super(...arguments), (this.hiddenConsumes = !1), (this.forceHidden = {});
    }
    addSegs(e) {
      const t = super.addSegs(e),
        { entriesByLevel: n } = this,
        r = (e) => !this.forceHidden[ys(e)];
      for (let e = 0; e < n.length; e += 1) n[e] = n[e].filter(r);
      return t;
    }
    handleInvalidInsertion(e, t, n) {
      const { entriesByLevel: r, forceHidden: i } = this,
        { touchingEntry: s, touchingLevel: o, touchingLateral: l } = e;
      if (this.hiddenConsumes && s) {
        const e = ys(s);
        if (!i[e])
          if (this.allowReslicing) {
            const e = Object.assign(Object.assign({}, s), { span: Ss(s.span, t.span) });
            (i[ys(e)] = !0), (r[o][l] = e), n.push(e), this.splitEntry(s, t, n);
          } else (i[e] = !0), n.push(s);
      }
      super.handleInvalidInsertion(e, t, n);
    }
  }
  class Aa extends gs {
    constructor() {
      super(...arguments),
        (this.cellElRefs = new $s()),
        (this.frameElRefs = new $s()),
        (this.fgElRefs = new $s()),
        (this.segHarnessRefs = new $s()),
        (this.rootElRef = { current: null }),
        (this.state = { framePositions: null, maxContentHeight: null, segHeights: {} }),
        (this.handleResize = (e) => {
          e && this.updateSizing(!0);
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        { options: r } = n,
        i = e.cells.length,
        s = ca(e.businessHourSegs, i),
        o = ca(e.bgEventSegs, i),
        l = ca(this.getHighlightSegs(), i),
        a = ca(this.getMirrorSegs(), i),
        {
          singleColPlacements: c,
          multiColPlacements: d,
          moreCnts: u,
          moreMarginTops: h,
        } = wa(
          gi(e.fgEventSegs, r.eventOrder),
          e.dayMaxEvents,
          e.dayMaxEventRows,
          r.eventOrderStrict,
          t.segHeights,
          t.maxContentHeight,
          e.cells,
        ),
        f = (e.eventDrag && e.eventDrag.affectedInstances) || (e.eventResize && e.eventResize.affectedInstances) || {};
      return g(
        'tr',
        { ref: this.rootElRef, role: 'row' },
        e.renderIntro && e.renderIntro(),
        e.cells.map((t, n) => {
          let r = this.renderFgSegs(n, e.forPrint ? c[n] : d[n], e.todayRange, f),
            i = this.renderFgSegs(
              n,
              (function (e, t) {
                if (!e.length) return [];
                let n = (function (e) {
                  let t = {};
                  for (let n of e) for (let e of n) t[e.seg.eventRange.instance.instanceId] = e.absoluteTop;
                  return t;
                })(t);
                return e.map((e) => ({
                  seg: e,
                  isVisible: !0,
                  isAbsolute: !0,
                  absoluteTop: n[e.eventRange.instance.instanceId],
                  marginTop: 0,
                }));
              })(a[n], d),
              e.todayRange,
              {},
              Boolean(e.eventDrag),
              Boolean(e.eventResize),
              !1,
            );
          return g(ba, {
            key: t.key,
            elRef: this.cellElRefs.createRef(t.key),
            innerElRef: this.frameElRefs.createRef(t.key),
            dateProfile: e.dateProfile,
            date: t.date,
            showDayNumber: e.showDayNumbers,
            showWeekNumber: e.showWeekNumbers && 0 === n,
            forceDayTop: e.showWeekNumbers,
            todayRange: e.todayRange,
            eventSelection: e.eventSelection,
            eventDrag: e.eventDrag,
            eventResize: e.eventResize,
            extraRenderProps: t.extraRenderProps,
            extraDataAttrs: t.extraDataAttrs,
            extraClassNames: t.extraClassNames,
            extraDateSpan: t.extraDateSpan,
            moreCnt: u[n],
            moreMarginTop: h[n],
            singlePlacements: c[n],
            fgContentElRef: this.fgElRefs.createRef(t.key),
            fgContent: g(v, null, g(v, null, r), g(v, null, i)),
            bgContent: g(
              v,
              null,
              this.renderFillSegs(l[n], 'highlight'),
              this.renderFillSegs(s[n], 'non-business'),
              this.renderFillSegs(o[n], 'bg-event'),
            ),
            minHeight: e.cellMinHeight,
          });
        }),
      );
    }
    componentDidMount() {
      this.updateSizing(!0), this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(e, t) {
      let n = this.props;
      this.updateSizing(!kn(e, n));
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    getHighlightSegs() {
      let { props: e } = this;
      return e.eventDrag && e.eventDrag.segs.length
        ? e.eventDrag.segs
        : e.eventResize && e.eventResize.segs.length
          ? e.eventResize.segs
          : e.dateSelectionSegs;
    }
    getMirrorSegs() {
      let { props: e } = this;
      return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : [];
    }
    renderFgSegs(e, t, n, r, i, s, o) {
      let { context: l } = this,
        { eventSelection: a } = this.props,
        { framePositions: c } = this.state,
        d = 1 === this.props.cells.length,
        u = i || s || o,
        h = [];
      if (c)
        for (let e of t) {
          let { seg: t } = e,
            { instanceId: f } = t.eventRange.instance,
            p = e.isVisible && !r[f],
            m = e.isAbsolute,
            v = '',
            y = '';
          m &&
            (l.isRtl
              ? ((y = 0), (v = c.lefts[t.lastCol] - c.lefts[t.firstCol]))
              : ((v = 0), (y = c.rights[t.firstCol] - c.rights[t.lastCol]))),
            h.push(
              g(
                'div',
                {
                  className: 'fc-daygrid-event-harness' + (m ? ' fc-daygrid-event-harness-abs' : ''),
                  key: Ea(t),
                  ref: u ? null : this.segHarnessRefs.createRef(Ca(t)),
                  style: {
                    visibility: p ? '' : 'hidden',
                    marginTop: m ? '' : e.marginTop,
                    top: m ? e.absoluteTop : '',
                    left: v,
                    right: y,
                  },
                },
                ha(t)
                  ? g(
                      pa,
                      Object.assign(
                        { seg: t, isDragging: i, isSelected: f === a, defaultDisplayEventEnd: d },
                        Ei(t, n),
                      ),
                    )
                  : g(
                      fa,
                      Object.assign(
                        {
                          seg: t,
                          isDragging: i,
                          isResizing: s,
                          isDateSelecting: o,
                          isSelected: f === a,
                          defaultDisplayEventEnd: d,
                        },
                        Ei(t, n),
                      ),
                    ),
              ),
            );
        }
      return h;
    }
    renderFillSegs(e, t) {
      let { isRtl: n } = this.context,
        { todayRange: r } = this.props,
        { framePositions: i } = this.state,
        s = [];
      if (i)
        for (let o of e) {
          let e = n
            ? { right: 0, left: i.lefts[o.lastCol] - i.lefts[o.firstCol] }
            : { left: 0, right: i.rights[o.firstCol] - i.rights[o.lastCol] };
          s.push(
            g(
              'div',
              { key: wi(o.eventRange), className: 'fc-daygrid-bg-harness', style: e },
              'bg-event' === t ? g(Eo, Object.assign({ seg: o }, Ei(o, r))) : wo(t),
            ),
          );
        }
      return g(v, {}, ...s);
    }
    updateSizing(e) {
      let { props: t, state: n, frameElRefs: r } = this;
      if (!t.forPrint && null !== t.clientWidth) {
        if (e) {
          let e = t.cells.map((e) => r.currentMap[e.key]);
          if (e.length) {
            let t = this.rootElRef.current,
              r = new ds(t, e, !0, !1);
            (n.framePositions && n.framePositions.similarTo(r)) ||
              this.setState({ framePositions: new ds(t, e, !0, !1) });
          }
        }
        const i = this.state.segHeights,
          s = this.querySegHeights(),
          o = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
        this.safeSetState({
          segHeights: Object.assign(Object.assign({}, i), s),
          maxContentHeight: o ? this.computeMaxContentHeight() : null,
        });
      }
    }
    querySegHeights() {
      let e = this.segHarnessRefs.currentMap,
        t = {};
      for (let n in e) {
        let r = Math.round(e[n].getBoundingClientRect().height);
        t[n] = Math.max(t[n] || 0, r);
      }
      return t;
    }
    computeMaxContentHeight() {
      let e = this.props.cells[0].key,
        t = this.cellElRefs.currentMap[e],
        n = this.fgElRefs.currentMap[e];
      return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top;
    }
    getCellEls() {
      let e = this.cellElRefs.currentMap;
      return this.props.cells.map((t) => e[t.key]);
    }
  }
  Aa.addStateEquality({ segHeights: kn });
  class xa extends gs {
    constructor() {
      super(...arguments),
        (this.splitBusinessHourSegs = Qt(aa)),
        (this.splitBgEventSegs = Qt(aa)),
        (this.splitFgEventSegs = Qt(aa)),
        (this.splitDateSelectionSegs = Qt(aa)),
        (this.splitEventDrag = Qt(da)),
        (this.splitEventResize = Qt(da)),
        (this.rowRefs = new $s());
    }
    render() {
      let { props: e, context: t } = this,
        n = e.cells.length,
        r = this.splitBusinessHourSegs(e.businessHourSegs, n),
        i = this.splitBgEventSegs(e.bgEventSegs, n),
        s = this.splitFgEventSegs(e.fgEventSegs, n),
        o = this.splitDateSelectionSegs(e.dateSelectionSegs, n),
        l = this.splitEventDrag(e.eventDrag, n),
        a = this.splitEventResize(e.eventResize, n),
        c = n >= 7 && e.clientWidth ? e.clientWidth / t.options.aspectRatio / 6 : null;
      return g(Os, { unit: 'day' }, (t, d) =>
        g(
          v,
          null,
          e.cells.map((t, u) =>
            g(Aa, {
              ref: this.rowRefs.createRef(u),
              key: t.length ? t[0].date.toISOString() : u,
              showDayNumbers: n > 1,
              showWeekNumbers: e.showWeekNumbers,
              todayRange: d,
              dateProfile: e.dateProfile,
              cells: t,
              renderIntro: e.renderRowIntro,
              businessHourSegs: r[u],
              eventSelection: e.eventSelection,
              bgEventSegs: i[u].filter(Ta),
              fgEventSegs: s[u],
              dateSelectionSegs: o[u],
              eventDrag: l[u],
              eventResize: a[u],
              dayMaxEvents: e.dayMaxEvents,
              dayMaxEventRows: e.dayMaxEventRows,
              clientWidth: e.clientWidth,
              clientHeight: e.clientHeight,
              cellMinHeight: c,
              forPrint: e.forPrint,
            }),
          ),
        ),
      );
    }
    componentDidMount() {
      this.registerInteractiveComponent();
    }
    componentDidUpdate() {
      this.registerInteractiveComponent();
    }
    registerInteractiveComponent() {
      if (!this.rootEl) {
        const e = this.rowRefs.currentMap[0].getCellEls()[0],
          t = e ? e.closest('.fc-daygrid-body') : null;
        t &&
          ((this.rootEl = t),
          this.context.registerInteractiveComponent(this, { el: t, isHitComboAllowed: this.props.isHitComboAllowed }));
      }
    }
    componentWillUnmount() {
      this.rootEl && (this.context.unregisterInteractiveComponent(this), (this.rootEl = null));
    }
    prepareHits() {
      (this.rowPositions = new ds(
        this.rootEl,
        this.rowRefs.collect().map((e) => e.getCellEls()[0]),
        !1,
        !0,
      )),
        (this.colPositions = new ds(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1));
    }
    queryHit(e, t) {
      let { colPositions: n, rowPositions: r } = this,
        i = n.leftToIndex(e),
        s = r.topToIndex(t);
      if (null != s && null != i) {
        let e = this.props.cells[s][i];
        return {
          dateProfile: this.props.dateProfile,
          dateSpan: Object.assign({ range: this.getCellRange(s, i), allDay: !0 }, e.extraDateSpan),
          dayEl: this.getCellEl(s, i),
          rect: { left: n.lefts[i], right: n.rights[i], top: r.tops[s], bottom: r.bottoms[s] },
          layer: 0,
        };
      }
      return null;
    }
    getCellEl(e, t) {
      return this.rowRefs.currentMap[e].getCellEls()[t];
    }
    getCellRange(e, t) {
      let n = this.props.cells[e][t].date;
      return { start: n, end: xt(n, 1) };
    }
  }
  function Ta(e) {
    return e.eventRange.def.allDay;
  }
  class _a extends gs {
    constructor() {
      super(...arguments), (this.elRef = { current: null }), (this.needsScrollReset = !1);
    }
    render() {
      let { props: e } = this,
        { dayMaxEventRows: t, dayMaxEvents: n, expandRows: r } = e,
        i = !0 === n || !0 === t;
      i && !r && ((i = !1), (t = null), (n = null));
      let s = [
        'fc-daygrid-body',
        i ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
        r ? '' : 'fc-daygrid-body-natural',
      ];
      return g(
        'div',
        { ref: this.elRef, className: s.join(' '), style: { width: e.clientWidth, minWidth: e.tableMinWidth } },
        g(
          'table',
          {
            role: 'presentation',
            className: 'fc-scrollgrid-sync-table',
            style: { width: e.clientWidth, minWidth: e.tableMinWidth, height: r ? e.clientHeight : '' },
          },
          e.colGroupNode,
          g(
            'tbody',
            { role: 'presentation' },
            g(xa, {
              dateProfile: e.dateProfile,
              cells: e.cells,
              renderRowIntro: e.renderRowIntro,
              showWeekNumbers: e.showWeekNumbers,
              clientWidth: e.clientWidth,
              clientHeight: e.clientHeight,
              businessHourSegs: e.businessHourSegs,
              bgEventSegs: e.bgEventSegs,
              fgEventSegs: e.fgEventSegs,
              dateSelectionSegs: e.dateSelectionSegs,
              eventSelection: e.eventSelection,
              eventDrag: e.eventDrag,
              eventResize: e.eventResize,
              dayMaxEvents: n,
              dayMaxEventRows: t,
              forPrint: e.forPrint,
              isHitComboAllowed: e.isHitComboAllowed,
            }),
          ),
        ),
      );
    }
    componentDidMount() {
      this.requestScrollReset();
    }
    componentDidUpdate(e) {
      e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
    }
    requestScrollReset() {
      (this.needsScrollReset = !0), this.flushScrollReset();
    }
    flushScrollReset() {
      if (this.needsScrollReset && this.props.clientWidth) {
        const e = (function (e, t) {
          let n;
          t.currentRangeUnit.match(/year|month/) && (n = e.querySelector(`[data-date="${Vt(t.currentDate)}-01"]`));
          n || (n = e.querySelector(`[data-date="${Ft(t.currentDate)}"]`));
          return n;
        })(this.elRef.current, this.props.dateProfile);
        if (e) {
          const t = e.closest('.fc-daygrid-body'),
            n = t.closest('.fc-scroller'),
            r = e.getBoundingClientRect().top - t.getBoundingClientRect().top;
          n.scrollTop = r ? r + 1 : 0;
        }
        this.needsScrollReset = !1;
      }
    }
  }
  class ka extends js {
    constructor() {
      super(...arguments), (this.forceDayIfListItem = !0);
    }
    sliceRange(e, t) {
      return t.sliceRange(e);
    }
  }
  class Ma extends gs {
    constructor() {
      super(...arguments), (this.slicer = new ka()), (this.tableRef = { current: null });
    }
    render() {
      let { props: e, context: t } = this;
      return g(
        _a,
        Object.assign(
          { ref: this.tableRef },
          this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel),
          {
            dateProfile: e.dateProfile,
            cells: e.dayTableModel.cells,
            colGroupNode: e.colGroupNode,
            tableMinWidth: e.tableMinWidth,
            renderRowIntro: e.renderRowIntro,
            dayMaxEvents: e.dayMaxEvents,
            dayMaxEventRows: e.dayMaxEventRows,
            showWeekNumbers: e.showWeekNumbers,
            expandRows: e.expandRows,
            headerAlignElRef: e.headerAlignElRef,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            forPrint: e.forPrint,
          },
        ),
      );
    }
  }
  function Ia(e, t) {
    let n = new Ws(e.renderRange, t);
    return new Bs(n, /year|month|week/.test(e.currentRangeUnit));
  }
  class Oa extends br {
    buildRenderRange(e, t, n) {
      let r = super.buildRenderRange(e, t, n),
        { props: i } = this;
      return Na({
        currentRange: r,
        snapToWeek: /^(year|month)$/.test(t),
        fixedWeekCount: i.fixedWeekCount,
        dateEnv: i.dateEnv,
      });
    }
  }
  function Na(e) {
    let t,
      { dateEnv: n, currentRange: r } = e,
      { start: i, end: s } = r;
    if (
      (e.snapToWeek && ((i = n.startOfWeek(i)), (t = n.startOfWeek(s)), t.valueOf() !== s.valueOf() && (s = At(t, 1))),
      e.fixedWeekCount)
    ) {
      let e = n.startOfWeek(n.startOfMonth(xt(r.end, -1)));
      s = At(s, 6 - Math.ceil(_t(e, s)));
    }
    return { start: i, end: s };
  }
  Re(
    ':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;margin:0 2px}.fc .fc-daygrid-day-bottom:after,.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc .fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-more-link{float:left}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-more-link{float:right}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}',
  );
  var Pa = zo({
    name: '@fullcalendar/daygrid',
    initialView: 'dayGridMonth',
    views: {
      dayGrid: {
        component: class extends la {
          constructor() {
            super(...arguments),
              (this.buildDayTableModel = Qt(Ia)),
              (this.headerRef = { current: null }),
              (this.tableRef = { current: null });
          }
          render() {
            let { options: e, dateProfileGenerator: t } = this.context,
              { props: n } = this,
              r = this.buildDayTableModel(n.dateProfile, t),
              i =
                e.dayHeaders &&
                g(Ps, {
                  ref: this.headerRef,
                  dateProfile: n.dateProfile,
                  dates: r.headerDates,
                  datesRepDistinctDays: 1 === r.rowCnt,
                }),
              s = (t) =>
                g(Ma, {
                  ref: this.tableRef,
                  dateProfile: n.dateProfile,
                  dayTableModel: r,
                  businessHours: n.businessHours,
                  dateSelection: n.dateSelection,
                  eventStore: n.eventStore,
                  eventUiBases: n.eventUiBases,
                  eventSelection: n.eventSelection,
                  eventDrag: n.eventDrag,
                  eventResize: n.eventResize,
                  nextDayThreshold: e.nextDayThreshold,
                  colGroupNode: t.tableColGroupNode,
                  tableMinWidth: t.tableMinWidth,
                  dayMaxEvents: e.dayMaxEvents,
                  dayMaxEventRows: e.dayMaxEventRows,
                  showWeekNumbers: e.weekNumbers,
                  expandRows: !n.isHeightAuto,
                  headerAlignElRef: this.headerElRef,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  forPrint: n.forPrint,
                });
            return e.dayMinWidth
              ? this.renderHScrollLayout(i, s, r.colCnt, e.dayMinWidth)
              : this.renderSimpleLayout(i, s);
          }
        },
        dateProfileGeneratorClass: Oa,
      },
      dayGridDay: { type: 'dayGrid', duration: { days: 1 } },
      dayGridWeek: { type: 'dayGrid', duration: { weeks: 1 } },
      dayGridMonth: { type: 'dayGrid', duration: { months: 1 }, fixedWeekCount: !0 },
      dayGridYear: { type: 'dayGrid', duration: { years: 1 } },
    },
  });
  class Ha extends Yi {
    getKeyInfo() {
      return { allDay: {}, timed: {} };
    }
    getKeysForDateSpan(e) {
      return e.allDay ? ['allDay'] : ['timed'];
    }
    getKeysForEventDef(e) {
      return e.allDay ? (di(e) ? ['timed', 'allDay'] : ['allDay']) : ['timed'];
    }
  }
  const Wa = hn({ hour: 'numeric', minute: '2-digit', omitZeroMinute: !0, meridiem: 'short' });
  function Ba(e) {
    let t = [
      'fc-timegrid-slot',
      'fc-timegrid-slot-label',
      e.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
    ];
    return g(Yn.Consumer, null, (n) => {
      if (!e.isLabeled) return g('td', { className: t.join(' '), 'data-time': e.isoTimeStr });
      let { dateEnv: r, options: i, viewApi: s } = n,
        o =
          null == i.slotLabelFormat
            ? Wa
            : Array.isArray(i.slotLabelFormat)
              ? hn(i.slotLabelFormat[0])
              : hn(i.slotLabelFormat),
        l = { level: 0, time: e.time, date: r.toDate(e.date), view: s, text: r.format(e.date, o) };
      return g(
        rr,
        {
          elTag: 'td',
          elClasses: t,
          elAttrs: { 'data-time': e.isoTimeStr },
          renderProps: l,
          generatorName: 'slotLabelContent',
          customGenerator: i.slotLabelContent,
          defaultGenerator: ja,
          classNameGenerator: i.slotLabelClassNames,
          didMount: i.slotLabelDidMount,
          willUnmount: i.slotLabelWillUnmount,
        },
        (e) =>
          g(
            'div',
            { className: 'fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame' },
            g(e, { elTag: 'div', elClasses: ['fc-timegrid-slot-label-cushion', 'fc-scrollgrid-shrink-cushion'] }),
          ),
      );
    });
  }
  function ja(e) {
    return e.text;
  }
  class La extends Xn {
    render() {
      return this.props.slatMetas.map((e) => g('tr', { key: e.key }, g(Ba, Object.assign({}, e))));
    }
  }
  const za = hn({ week: 'short' });
  class Ua extends gs {
    constructor() {
      super(...arguments),
        (this.allDaySplitter = new Ha()),
        (this.headerElRef = { current: null }),
        (this.rootElRef = { current: null }),
        (this.scrollerElRef = { current: null }),
        (this.state = { slatCoords: null }),
        (this.handleScrollTopRequest = (e) => {
          let t = this.scrollerElRef.current;
          t && (t.scrollTop = e);
        }),
        (this.renderHeadAxis = (e, t = '') => {
          let { options: n } = this.context,
            { dateProfile: r } = this.props,
            i = r.renderRange,
            s = 1 === kt(i.start, i.end) ? es(this.context, i.start, 'week') : {};
          return n.weekNumbers && 'day' === e
            ? g(
                Do,
                {
                  elTag: 'th',
                  elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
                  elAttrs: { 'aria-hidden': !0 },
                  date: i.start,
                  defaultFormat: za,
                },
                (e) =>
                  g(
                    'div',
                    {
                      className: [
                        'fc-timegrid-axis-frame',
                        'fc-scrollgrid-shrink-frame',
                        'fc-timegrid-axis-frame-liquid',
                      ].join(' '),
                      style: { height: t },
                    },
                    g(e, {
                      elTag: 'a',
                      elClasses: [
                        'fc-timegrid-axis-cushion',
                        'fc-scrollgrid-shrink-cushion',
                        'fc-scrollgrid-sync-inner',
                      ],
                      elAttrs: s,
                    }),
                  ),
              )
            : g(
                'th',
                { 'aria-hidden': !0, className: 'fc-timegrid-axis' },
                g('div', { className: 'fc-timegrid-axis-frame', style: { height: t } }),
              );
        }),
        (this.renderTableRowAxis = (e) => {
          let { options: t, viewApi: n } = this.context,
            r = { text: t.allDayText, view: n };
          return g(
            rr,
            {
              elTag: 'td',
              elClasses: ['fc-timegrid-axis', 'fc-scrollgrid-shrink'],
              elAttrs: { 'aria-hidden': !0 },
              renderProps: r,
              generatorName: 'allDayContent',
              customGenerator: t.allDayContent,
              defaultGenerator: Ga,
              classNameGenerator: t.allDayClassNames,
              didMount: t.allDayDidMount,
              willUnmount: t.allDayWillUnmount,
            },
            (t) =>
              g(
                'div',
                {
                  className: [
                    'fc-timegrid-axis-frame',
                    'fc-scrollgrid-shrink-frame',
                    null == e ? ' fc-timegrid-axis-frame-liquid' : '',
                  ].join(' '),
                  style: { height: e },
                },
                g(t, {
                  elTag: 'span',
                  elClasses: ['fc-timegrid-axis-cushion', 'fc-scrollgrid-shrink-cushion', 'fc-scrollgrid-sync-inner'],
                }),
              ),
          );
        }),
        (this.handleSlatCoords = (e) => {
          this.setState({ slatCoords: e });
        });
    }
    renderSimpleLayout(e, t, n) {
      let { context: r, props: i } = this,
        s = [],
        o = co(r.options);
      return (
        e &&
          s.push({
            type: 'header',
            key: 'header',
            isSticky: o,
            chunk: { elRef: this.headerElRef, tableClassName: 'fc-col-header', rowContent: e },
          }),
        t &&
          (s.push({ type: 'body', key: 'all-day', chunk: { content: t } }),
          s.push({
            type: 'body',
            key: 'all-day-divider',
            outerContent: g(
              'tr',
              { role: 'presentation', className: 'fc-scrollgrid-section' },
              g('td', { className: 'fc-timegrid-divider ' + r.theme.getClass('tableCellShaded') }),
            ),
          })),
        s.push({
          type: 'body',
          key: 'body',
          liquid: !0,
          expandRows: Boolean(r.options.expandRows),
          chunk: { scrollerElRef: this.scrollerElRef, content: n },
        }),
        g(
          sr,
          { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: r.viewSpec },
          g(ho, {
            liquid: !i.isHeightAuto && !i.forPrint,
            collapsibleWidth: i.forPrint,
            cols: [{ width: 'shrink' }],
            sections: s,
          }),
        )
      );
    }
    renderHScrollLayout(e, t, n, r, i, s, o) {
      let l = this.context.pluginHooks.scrollGridImpl;
      if (!l) throw new Error('No ScrollGrid implementation');
      let { context: a, props: c } = this,
        d = !c.forPrint && co(a.options),
        u = !c.forPrint && uo(a.options),
        h = [];
      e &&
        h.push({
          type: 'header',
          key: 'header',
          isSticky: d,
          syncRowHeights: !0,
          chunks: [
            {
              key: 'axis',
              rowContent: (e) => g('tr', { role: 'presentation' }, this.renderHeadAxis('day', e.rowSyncHeights[0])),
            },
            { key: 'cols', elRef: this.headerElRef, tableClassName: 'fc-col-header', rowContent: e },
          ],
        }),
        t &&
          (h.push({
            type: 'body',
            key: 'all-day',
            syncRowHeights: !0,
            chunks: [
              {
                key: 'axis',
                rowContent: (e) => g('tr', { role: 'presentation' }, this.renderTableRowAxis(e.rowSyncHeights[0])),
              },
              { key: 'cols', content: t },
            ],
          }),
          h.push({
            key: 'all-day-divider',
            type: 'body',
            outerContent: g(
              'tr',
              { role: 'presentation', className: 'fc-scrollgrid-section' },
              g('td', { colSpan: 2, className: 'fc-timegrid-divider ' + a.theme.getClass('tableCellShaded') }),
            ),
          }));
      let f = a.options.nowIndicator;
      return (
        h.push({
          type: 'body',
          key: 'body',
          liquid: !0,
          expandRows: Boolean(a.options.expandRows),
          chunks: [
            {
              key: 'axis',
              content: (e) =>
                g(
                  'div',
                  { className: 'fc-timegrid-axis-chunk' },
                  g(
                    'table',
                    { 'aria-hidden': !0, style: { height: e.expandRows ? e.clientHeight : '' } },
                    e.tableColGroupNode,
                    g('tbody', null, g(La, { slatMetas: s })),
                  ),
                  g(
                    'div',
                    { className: 'fc-timegrid-now-indicator-container' },
                    g(Os, { unit: f ? 'minute' : 'day' }, (e) => {
                      let t = f && o && o.safeComputeTop(e);
                      return 'number' == typeof t
                        ? g(mo, {
                            elClasses: ['fc-timegrid-now-indicator-arrow'],
                            elStyle: { top: t },
                            isAxis: !0,
                            date: e,
                          })
                        : null;
                    }),
                  ),
                ),
            },
            { key: 'cols', scrollerElRef: this.scrollerElRef, content: n },
          ],
        }),
        u &&
          h.push({
            key: 'footer',
            type: 'footer',
            isSticky: !0,
            chunks: [
              { key: 'axis', content: ao },
              { key: 'cols', content: ao },
            ],
          }),
        g(
          sr,
          { elRef: this.rootElRef, elClasses: ['fc-timegrid'], viewSpec: a.viewSpec },
          g(l, {
            liquid: !c.isHeightAuto && !c.forPrint,
            forPrint: c.forPrint,
            collapsibleWidth: !1,
            colGroups: [{ width: 'shrink', cols: [{ width: 'shrink' }] }, { cols: [{ span: r, minWidth: i }] }],
            sections: h,
          }),
        )
      );
    }
    getAllDayMaxEventProps() {
      let { dayMaxEvents: e, dayMaxEventRows: t } = this.context.options;
      return (!0 !== e && !0 !== t) || ((e = void 0), (t = 5)), { dayMaxEvents: e, dayMaxEventRows: t };
    }
  }
  function Ga(e) {
    return e.text;
  }
  class Fa {
    constructor(e, t, n) {
      (this.positions = e), (this.dateProfile = t), (this.slotDuration = n);
    }
    safeComputeTop(e) {
      let { dateProfile: t } = this;
      if (fr(t.currentRange, e)) {
        let n = Nt(e),
          r = e.valueOf() - n.valueOf();
        if (r >= St(t.slotMinTime) && r < St(t.slotMaxTime)) return this.computeTimeTop(ht(r));
      }
      return null;
    }
    computeDateTop(e, t) {
      return t || (t = Nt(e)), this.computeTimeTop(ht(e.valueOf() - t.valueOf()));
    }
    computeTimeTop(e) {
      let t,
        n,
        { positions: r, dateProfile: i } = this,
        s = r.els.length,
        o = (e.milliseconds - St(i.slotMinTime)) / St(this.slotDuration);
      return (
        (o = Math.max(0, o)),
        (o = Math.min(s, o)),
        (t = Math.floor(o)),
        (t = Math.min(t, s - 1)),
        (n = o - t),
        r.tops[t] + r.getHeight(t) * n
      );
    }
  }
  class Va extends Xn {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        { slatElRefs: r } = e;
      return g(
        'tbody',
        null,
        e.slatMetas.map((i, s) => {
          let o = { time: i.time, date: t.dateEnv.toDate(i.date), view: t.viewApi };
          return g(
            'tr',
            { key: i.key, ref: r.createRef(i.key) },
            e.axis && g(Ba, Object.assign({}, i)),
            g(rr, {
              elTag: 'td',
              elClasses: ['fc-timegrid-slot', 'fc-timegrid-slot-lane', !i.isLabeled && 'fc-timegrid-slot-minor'],
              elAttrs: { 'data-time': i.isoTimeStr },
              renderProps: o,
              generatorName: 'slotLaneContent',
              customGenerator: n.slotLaneContent,
              classNameGenerator: n.slotLaneClassNames,
              didMount: n.slotLaneDidMount,
              willUnmount: n.slotLaneWillUnmount,
            }),
          );
        }),
      );
    }
  }
  class qa extends Xn {
    constructor() {
      super(...arguments), (this.rootElRef = { current: null }), (this.slatElRefs = new $s());
    }
    render() {
      let { props: e, context: t } = this;
      return g(
        'div',
        { ref: this.rootElRef, className: 'fc-timegrid-slots' },
        g(
          'table',
          {
            'aria-hidden': !0,
            className: t.theme.getClass('table'),
            style: { minWidth: e.tableMinWidth, width: e.clientWidth, height: e.minHeight },
          },
          e.tableColGroupNode,
          g(Va, { slatElRefs: this.slatElRefs, axis: e.axis, slatMetas: e.slatMetas }),
        ),
      );
    }
    componentDidMount() {
      this.updateSizing();
    }
    componentDidUpdate() {
      this.updateSizing();
    }
    componentWillUnmount() {
      this.props.onCoords && this.props.onCoords(null);
    }
    updateSizing() {
      let { context: e, props: t } = this;
      if (t.onCoords && null !== t.clientWidth) {
        this.rootElRef.current.offsetHeight &&
          t.onCoords(
            new Fa(
              new ds(
                this.rootElRef.current,
                ((n = this.slatElRefs.currentMap), t.slatMetas.map((e) => n[e.key])),
                !1,
                !0,
              ),
              this.props.dateProfile,
              e.options.slotDuration,
            ),
          );
      }
      var n;
    }
  }
  function Ya(e, t) {
    let n,
      r = [];
    for (n = 0; n < t; n += 1) r.push([]);
    if (e) for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
    return r;
  }
  function Qa(e, t) {
    let n = [];
    if (e) {
      for (let r = 0; r < t; r += 1) n[r] = { affectedInstances: e.affectedInstances, isEvent: e.isEvent, segs: [] };
      for (let t of e.segs) n[t.col].segs.push(t);
    } else for (let e = 0; e < t; e += 1) n[e] = null;
    return n;
  }
  class Za extends Xn {
    render() {
      let { props: e } = this;
      return g(
        To,
        {
          elClasses: ['fc-timegrid-more-link'],
          elStyle: { top: e.top, bottom: e.bottom },
          allDayDate: null,
          moreCnt: e.hiddenSegs.length,
          allSegs: e.hiddenSegs,
          hiddenSegs: e.hiddenSegs,
          extraDateSpan: e.extraDateSpan,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          popoverContent: () => oc(e.hiddenSegs, e),
          defaultGenerator: Xa,
          forceTimed: !0,
        },
        (e) => g(e, { elTag: 'div', elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky'] }),
      );
    }
  }
  function Xa(e) {
    return e.shortText;
  }
  function $a(e, t, n) {
    let r = new ms();
    null != t && (r.strictOrder = t), null != n && (r.maxStackCnt = n);
    let i = bs(r.addSegs(e)),
      s = (function (e) {
        const { entriesByLevel: t } = e,
          n = tc(
            (e, t) => e + ':' + t,
            (r, i) => {
              let s = Ja(
                  (function (e, t, n) {
                    let { levelCoords: r, entriesByLevel: i } = e,
                      s = i[t][n],
                      o = r[t] + s.thickness,
                      l = r.length,
                      a = t;
                    for (; a < l && r[a] < o; a += 1);
                    for (; a < l; a += 1) {
                      let e,
                        t = i[a],
                        n = Cs(t, s.span.start, vs),
                        r = n[0] + n[1],
                        o = r;
                      for (; (e = t[o]) && e.span.start < s.span.end; ) o += 1;
                      if (r < o) return { level: a, lateralStart: r, lateralEnd: o };
                    }
                    return null;
                  })(e, r, i),
                  n,
                ),
                o = t[r][i];
              return [Object.assign(Object.assign({}, o), { nextLevelNodes: s[0] }), o.thickness + s[1]];
            },
          );
        return Ja(t.length ? { level: 0, lateralStart: 0, lateralEnd: t[0].length } : null, n)[0];
      })(r);
    return (
      (s = (function (e, t) {
        const n = tc(
          (e, t, n) => ys(e),
          (e, r, i) => {
            let s,
              { nextLevelNodes: o, thickness: l } = e,
              a = l + i,
              c = l / a,
              d = [];
            if (o.length)
              for (let e of o)
                if (void 0 === s) {
                  let t = n(e, r, a);
                  (s = t[0]), d.push(t[1]);
                } else {
                  let t = n(e, s, 0);
                  d.push(t[1]);
                }
            else s = t;
            let u = (s - r) * c;
            return [s - u, Object.assign(Object.assign({}, e), { thickness: u, nextLevelNodes: d })];
          },
        );
        return e.map((e) => n(e, 0, 0)[1]);
      })(s, 1)),
      {
        segRects: (function (e) {
          let t = [];
          const n = tc(
            (e, t, n) => ys(e),
            (e, n, i) => {
              let s = Object.assign(Object.assign({}, e), { levelCoord: n, stackDepth: i, stackForward: 0 });
              return t.push(s), (s.stackForward = r(e.nextLevelNodes, n + e.thickness, i + 1) + 1);
            },
          );
          function r(e, t, r) {
            let i = 0;
            for (let s of e) i = Math.max(n(s, t, r), i);
            return i;
          }
          return r(e, 0, 0), t;
        })(s),
        hiddenGroups: i,
      }
    );
  }
  function Ja(e, t) {
    if (!e) return [[], 0];
    let { level: n, lateralStart: r, lateralEnd: i } = e,
      s = r,
      o = [];
    for (; s < i; ) o.push(t(n, s)), (s += 1);
    return o.sort(Ka), [o.map(ec), o[0][1]];
  }
  function Ka(e, t) {
    return t[1] - e[1];
  }
  function ec(e) {
    return e[0];
  }
  function tc(e, t) {
    const n = {};
    return (...r) => {
      let i = e(...r);
      return i in n ? n[i] : (n[i] = t(...r));
    };
  }
  function nc(e, t, n = null, r = 0) {
    let i = [];
    if (n)
      for (let s = 0; s < e.length; s += 1) {
        let o = e[s],
          l = n.computeDateTop(o.start, t),
          a = Math.max(l + (r || 0), n.computeDateTop(o.end, t));
        i.push({ start: Math.round(l), end: Math.round(a) });
      }
    return i;
  }
  const rc = hn({ hour: 'numeric', minute: '2-digit', meridiem: !1 });
  class ic extends Xn {
    render() {
      return g(
        po,
        Object.assign({}, this.props, {
          elClasses: ['fc-timegrid-event', 'fc-v-event', this.props.isShort && 'fc-timegrid-event-short'],
          defaultTimeFormat: rc,
        }),
      );
    }
  }
  class sc extends Xn {
    constructor() {
      super(...arguments), (this.sortEventSegs = Qt(gi));
    }
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        r = n.selectMirror,
        i =
          (e.eventDrag && e.eventDrag.segs) ||
          (e.eventResize && e.eventResize.segs) ||
          (r && e.dateSelectionSegs) ||
          [],
        s = (e.eventDrag && e.eventDrag.affectedInstances) || (e.eventResize && e.eventResize.affectedInstances) || {},
        o = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
      return g(
        yo,
        {
          elTag: 'td',
          elRef: e.elRef,
          elClasses: ['fc-timegrid-col', ...(e.extraClassNames || [])],
          elAttrs: Object.assign({ role: 'gridcell' }, e.extraDataAttrs),
          date: e.date,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          extraRenderProps: e.extraRenderProps,
        },
        (t) =>
          g(
            'div',
            { className: 'fc-timegrid-col-frame' },
            g(
              'div',
              { className: 'fc-timegrid-col-bg' },
              this.renderFillSegs(e.businessHourSegs, 'non-business'),
              this.renderFillSegs(e.bgEventSegs, 'bg-event'),
              this.renderFillSegs(e.dateSelectionSegs, 'highlight'),
            ),
            g('div', { className: 'fc-timegrid-col-events' }, this.renderFgSegs(o, s, !1, !1, !1)),
            g(
              'div',
              { className: 'fc-timegrid-col-events' },
              this.renderFgSegs(i, {}, Boolean(e.eventDrag), Boolean(e.eventResize), Boolean(r), 'mirror'),
            ),
            g('div', { className: 'fc-timegrid-now-indicator-container' }, this.renderNowIndicator(e.nowIndicatorSegs)),
            bo(n) && g(t, { elTag: 'div', elClasses: ['fc-timegrid-col-misc'] }),
          ),
      );
    }
    renderFgSegs(e, t, n, r, i, s) {
      let { props: o } = this;
      return o.forPrint ? oc(e, o) : this.renderPositionedFgSegs(e, t, n, r, i, s);
    }
    renderPositionedFgSegs(e, t, n, r, i, s) {
      let { eventMaxStack: o, eventShortHeight: l, eventOrderStrict: a, eventMinHeight: c } = this.context.options,
        { date: d, slatCoords: u, eventSelection: h, todayRange: f, nowDate: p } = this.props,
        m = n || r || i,
        y = nc(e, d, u, c),
        { segPlacements: b, hiddenGroups: S } = (function (e, t, n, r) {
          let i = [],
            s = [];
          for (let n = 0; n < e.length; n += 1) {
            let r = t[n];
            r ? i.push({ index: n, thickness: 1, span: r }) : s.push(e[n]);
          }
          let { segRects: o, hiddenGroups: l } = $a(i, n, r),
            a = [];
          for (let t of o) a.push({ seg: e[t.index], rect: t });
          for (let e of s) a.push({ seg: e, rect: null });
          return { segPlacements: a, hiddenGroups: l };
        })(e, y, a, o);
      return g(
        v,
        null,
        this.renderHiddenGroups(S, e),
        b.map((e) => {
          let { seg: o, rect: a } = e,
            c = o.eventRange.instance.instanceId,
            d = m || Boolean(!t[c] && a),
            u = lc(a && a.span),
            v = !m && a ? this.computeSegHStyle(a) : { left: 0, right: 0 },
            y = Boolean(a) && a.stackForward > 0,
            b = Boolean(a) && a.span.end - a.span.start < l;
          return g(
            'div',
            {
              className: 'fc-timegrid-event-harness' + (y ? ' fc-timegrid-event-harness-inset' : ''),
              key: s || c,
              style: Object.assign(Object.assign({ visibility: d ? '' : 'hidden' }, u), v),
            },
            g(
              ic,
              Object.assign(
                { seg: o, isDragging: n, isResizing: r, isDateSelecting: i, isSelected: c === h, isShort: b },
                Ei(o, f, p),
              ),
            ),
          );
        }),
      );
    }
    renderHiddenGroups(e, t) {
      let {
        extraDateSpan: n,
        dateProfile: r,
        todayRange: i,
        nowDate: s,
        eventSelection: o,
        eventDrag: l,
        eventResize: a,
      } = this.props;
      return g(
        v,
        null,
        e.map((e) => {
          let c = lc(e.span),
            d = ((u = e.entries), (h = t), u.map((e) => h[e.index]));
          var u, h;
          return g(Za, {
            key: Gt(Mo(d)),
            hiddenSegs: d,
            top: c.top,
            bottom: c.bottom,
            extraDateSpan: n,
            dateProfile: r,
            todayRange: i,
            nowDate: s,
            eventSelection: o,
            eventDrag: l,
            eventResize: a,
          });
        }),
      );
    }
    renderFillSegs(e, t) {
      let { props: n, context: r } = this,
        i = nc(e, n.date, n.slatCoords, r.options.eventMinHeight).map((r, i) => {
          let s = e[i];
          return g(
            'div',
            { key: wi(s.eventRange), className: 'fc-timegrid-bg-harness', style: lc(r) },
            'bg-event' === t ? g(Eo, Object.assign({ seg: s }, Ei(s, n.todayRange, n.nowDate))) : wo(t),
          );
        });
      return g(v, null, i);
    }
    renderNowIndicator(e) {
      let { slatCoords: t, date: n } = this.props;
      return t
        ? e.map((e, r) =>
            g(mo, {
              key: r,
              elClasses: ['fc-timegrid-now-indicator-line'],
              elStyle: { top: t.computeDateTop(e.start, n) },
              isAxis: !1,
              date: n,
            }),
          )
        : null;
    }
    computeSegHStyle(e) {
      let t,
        n,
        { isRtl: r, options: i } = this.context,
        s = i.slotEventOverlap,
        o = e.levelCoord,
        l = e.levelCoord + e.thickness;
      s && (l = Math.min(1, o + 2 * (l - o))), r ? ((t = 1 - l), (n = o)) : ((t = o), (n = 1 - l));
      let a = { zIndex: e.stackDepth + 1, left: 100 * t + '%', right: 100 * n + '%' };
      return s && !e.stackForward && (a[r ? 'marginLeft' : 'marginRight'] = 20), a;
    }
  }
  function oc(e, { todayRange: t, nowDate: n, eventSelection: r, eventDrag: i, eventResize: s }) {
    let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
    return g(
      v,
      null,
      e.map((e) => {
        let i = e.eventRange.instance.instanceId;
        return g(
          'div',
          { key: i, style: { visibility: o[i] ? 'hidden' : '' } },
          g(
            ic,
            Object.assign(
              { seg: e, isDragging: !1, isResizing: !1, isDateSelecting: !1, isSelected: i === r, isShort: !1 },
              Ei(e, t, n),
            ),
          ),
        );
      }),
    );
  }
  function lc(e) {
    return e ? { top: e.start, bottom: -e.end } : { top: '', bottom: '' };
  }
  class ac extends Xn {
    constructor() {
      super(...arguments),
        (this.splitFgEventSegs = Qt(Ya)),
        (this.splitBgEventSegs = Qt(Ya)),
        (this.splitBusinessHourSegs = Qt(Ya)),
        (this.splitNowIndicatorSegs = Qt(Ya)),
        (this.splitDateSelectionSegs = Qt(Ya)),
        (this.splitEventDrag = Qt(Qa)),
        (this.splitEventResize = Qt(Qa)),
        (this.rootElRef = { current: null }),
        (this.cellElRefs = new $s());
    }
    render() {
      let { props: e, context: t } = this,
        n = t.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate),
        r = e.cells.length,
        i = this.splitFgEventSegs(e.fgEventSegs, r),
        s = this.splitBgEventSegs(e.bgEventSegs, r),
        o = this.splitBusinessHourSegs(e.businessHourSegs, r),
        l = this.splitNowIndicatorSegs(e.nowIndicatorSegs, r),
        a = this.splitDateSelectionSegs(e.dateSelectionSegs, r),
        c = this.splitEventDrag(e.eventDrag, r),
        d = this.splitEventResize(e.eventResize, r);
      return g(
        'div',
        { className: 'fc-timegrid-cols', ref: this.rootElRef },
        g(
          'table',
          { role: 'presentation', style: { minWidth: e.tableMinWidth, width: e.clientWidth } },
          e.tableColGroupNode,
          g(
            'tbody',
            { role: 'presentation' },
            g(
              'tr',
              { role: 'row' },
              e.axis &&
                g(
                  'td',
                  { 'aria-hidden': !0, className: 'fc-timegrid-col fc-timegrid-axis' },
                  g(
                    'div',
                    { className: 'fc-timegrid-col-frame' },
                    g(
                      'div',
                      { className: 'fc-timegrid-now-indicator-container' },
                      'number' == typeof n &&
                        g(mo, {
                          elClasses: ['fc-timegrid-now-indicator-arrow'],
                          elStyle: { top: n },
                          isAxis: !0,
                          date: e.nowDate,
                        }),
                    ),
                  ),
                ),
              e.cells.map((t, n) =>
                g(sc, {
                  key: t.key,
                  elRef: this.cellElRefs.createRef(t.key),
                  dateProfile: e.dateProfile,
                  date: t.date,
                  nowDate: e.nowDate,
                  todayRange: e.todayRange,
                  extraRenderProps: t.extraRenderProps,
                  extraDataAttrs: t.extraDataAttrs,
                  extraClassNames: t.extraClassNames,
                  extraDateSpan: t.extraDateSpan,
                  fgEventSegs: i[n],
                  bgEventSegs: s[n],
                  businessHourSegs: o[n],
                  nowIndicatorSegs: l[n],
                  dateSelectionSegs: a[n],
                  eventDrag: c[n],
                  eventResize: d[n],
                  slatCoords: e.slatCoords,
                  eventSelection: e.eventSelection,
                  forPrint: e.forPrint,
                }),
              ),
            ),
          ),
        ),
      );
    }
    componentDidMount() {
      this.updateCoords();
    }
    componentDidUpdate() {
      this.updateCoords();
    }
    updateCoords() {
      let { props: e } = this;
      var t;
      e.onColCoords &&
        null !== e.clientWidth &&
        e.onColCoords(
          new ds(this.rootElRef.current, ((t = this.cellElRefs.currentMap), e.cells.map((e) => t[e.key])), !0, !1),
        );
    }
  }
  class cc extends gs {
    constructor() {
      super(...arguments),
        (this.processSlotOptions = Qt(dc)),
        (this.state = { slatCoords: null }),
        (this.handleRootEl = (e) => {
          e
            ? this.context.registerInteractiveComponent(this, {
                el: e,
                isHitComboAllowed: this.props.isHitComboAllowed,
              })
            : this.context.unregisterInteractiveComponent(this);
        }),
        (this.handleScrollRequest = (e) => {
          let { onScrollTopRequest: t } = this.props,
            { slatCoords: n } = this.state;
          if (t && n) {
            if (e.time) {
              let r = n.computeTimeTop(e.time);
              (r = Math.ceil(r)), r && (r += 1), t(r);
            }
            return !0;
          }
          return !1;
        }),
        (this.handleColCoords = (e) => {
          this.colCoords = e;
        }),
        (this.handleSlatCoords = (e) => {
          this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
        });
    }
    render() {
      let { props: e, state: t } = this;
      return g(
        'div',
        {
          className: 'fc-timegrid-body',
          ref: this.handleRootEl,
          style: { width: e.clientWidth, minWidth: e.tableMinWidth },
        },
        g(qa, {
          axis: e.axis,
          dateProfile: e.dateProfile,
          slatMetas: e.slatMetas,
          clientWidth: e.clientWidth,
          minHeight: e.expandRows ? e.clientHeight : '',
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.axis ? e.tableColGroupNode : null,
          onCoords: this.handleSlatCoords,
        }),
        g(ac, {
          cells: e.cells,
          axis: e.axis,
          dateProfile: e.dateProfile,
          businessHourSegs: e.businessHourSegs,
          bgEventSegs: e.bgEventSegs,
          fgEventSegs: e.fgEventSegs,
          dateSelectionSegs: e.dateSelectionSegs,
          eventSelection: e.eventSelection,
          eventDrag: e.eventDrag,
          eventResize: e.eventResize,
          todayRange: e.todayRange,
          nowDate: e.nowDate,
          nowIndicatorSegs: e.nowIndicatorSegs,
          clientWidth: e.clientWidth,
          tableMinWidth: e.tableMinWidth,
          tableColGroupNode: e.tableColGroupNode,
          slatCoords: t.slatCoords,
          onColCoords: this.handleColCoords,
          forPrint: e.forPrint,
        }),
      );
    }
    componentDidMount() {
      this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    }
    componentDidUpdate(e) {
      this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
    }
    componentWillUnmount() {
      this.scrollResponder.detach();
    }
    queryHit(e, t) {
      let { dateEnv: n, options: r } = this.context,
        { colCoords: i } = this,
        { dateProfile: s } = this.props,
        { slatCoords: o } = this.state,
        { snapDuration: l, snapsPerSlot: a } = this.processSlotOptions(this.props.slotDuration, r.snapDuration),
        c = i.leftToIndex(e),
        d = o.positions.topToIndex(t);
      if (null != c && null != d) {
        let e = this.props.cells[c],
          r = o.positions.tops[d],
          u = o.positions.getHeight(d),
          h = (t - r) / u,
          f = d * a + Math.floor(h * a),
          p = this.props.cells[c].date,
          g = gt(s.slotMinTime, mt(l, f)),
          m = n.add(p, g),
          v = n.add(m, l);
        return {
          dateProfile: s,
          dateSpan: Object.assign({ range: { start: m, end: v }, allDay: !1 }, e.extraDateSpan),
          dayEl: i.els[c],
          rect: { left: i.lefts[c], right: i.rights[c], top: r, bottom: r + u },
          layer: 0,
        };
      }
      return null;
    }
  }
  function dc(e, t) {
    let n = t || e,
      r = Et(e, n);
    return null === r && ((n = e), (r = 1)), { snapDuration: n, snapsPerSlot: r };
  }
  class uc extends js {
    sliceRange(e, t) {
      let n = [];
      for (let r = 0; r < t.length; r += 1) {
        let i = cr(e, t[r]);
        i &&
          n.push({
            start: i.start,
            end: i.end,
            isStart: i.start.valueOf() === e.start.valueOf(),
            isEnd: i.end.valueOf() === e.end.valueOf(),
            col: r,
          });
      }
      return n;
    }
  }
  class hc extends gs {
    constructor() {
      super(...arguments),
        (this.buildDayRanges = Qt(fc)),
        (this.slicer = new uc()),
        (this.timeColsRef = { current: null });
    }
    render() {
      let { props: e, context: t } = this,
        { dateProfile: n, dayTableModel: r } = e,
        { nowIndicator: i, nextDayThreshold: s } = t.options,
        o = this.buildDayRanges(r, n, t.dateEnv);
      return g(Os, { unit: i ? 'minute' : 'day' }, (l, a) =>
        g(
          cc,
          Object.assign({ ref: this.timeColsRef }, this.slicer.sliceProps(e, n, null, t, o), {
            forPrint: e.forPrint,
            axis: e.axis,
            dateProfile: n,
            slatMetas: e.slatMetas,
            slotDuration: e.slotDuration,
            cells: r.cells[0],
            tableColGroupNode: e.tableColGroupNode,
            tableMinWidth: e.tableMinWidth,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            expandRows: e.expandRows,
            nowDate: l,
            nowIndicatorSegs: i && this.slicer.sliceNowDate(l, n, s, t, o),
            todayRange: a,
            onScrollTopRequest: e.onScrollTopRequest,
            onSlatCoords: e.onSlatCoords,
          }),
        ),
      );
    }
  }
  function fc(e, t, n) {
    let r = [];
    for (let i of e.headerDates) r.push({ start: n.add(i, t.slotMinTime), end: n.add(i, t.slotMaxTime) });
    return r;
  }
  const pc = [{ hours: 1 }, { minutes: 30 }, { minutes: 15 }, { seconds: 30 }, { seconds: 15 }];
  function gc(e, t, n, r, i) {
    let s = new Date(0),
      o = e,
      l = ht(0),
      a =
        n ||
        (function (e) {
          let t, n, r;
          for (t = pc.length - 1; t >= 0; t -= 1) if (((n = ht(pc[t])), (r = Et(n, e)), null !== r && r > 1)) return n;
          return e;
        })(r),
      c = [];
    for (; St(o) < St(t); ) {
      let e = i.add(s, o),
        t = null !== Et(l, a);
      c.push({ date: e, time: o, key: e.toISOString(), isoTimeStr: qt(e), isLabeled: t }),
        (o = gt(o, r)),
        (l = gt(l, r));
    }
    return c;
  }
  function mc(e, t) {
    let n = new Ws(e.renderRange, t);
    return new Bs(n, !1);
  }
  Re(
    '.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-arrow,.fc .fc-timegrid-now-indicator-line{pointer-events:none}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}',
  );
  var vc = zo({
    name: '@fullcalendar/timegrid',
    initialView: 'timeGridWeek',
    optionRefiners: { allDaySlot: Boolean },
    views: {
      timeGrid: {
        component: class extends Ua {
          constructor() {
            super(...arguments), (this.buildTimeColsModel = Qt(mc)), (this.buildSlatMetas = Qt(gc));
          }
          render() {
            let { options: e, dateEnv: t, dateProfileGenerator: n } = this.context,
              { props: r } = this,
              { dateProfile: i } = r,
              s = this.buildTimeColsModel(i, n),
              o = this.allDaySplitter.splitProps(r),
              l = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, t),
              { dayMinWidth: a } = e,
              c = !a,
              d = a,
              u =
                e.dayHeaders &&
                g(Ps, {
                  dates: s.headerDates,
                  dateProfile: i,
                  datesRepDistinctDays: !0,
                  renderIntro: c ? this.renderHeadAxis : null,
                }),
              h =
                !1 !== e.allDaySlot &&
                ((t) =>
                  g(
                    Ma,
                    Object.assign(
                      {},
                      o.allDay,
                      {
                        dateProfile: i,
                        dayTableModel: s,
                        nextDayThreshold: e.nextDayThreshold,
                        tableMinWidth: t.tableMinWidth,
                        colGroupNode: t.tableColGroupNode,
                        renderRowIntro: c ? this.renderTableRowAxis : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: this.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: r.forPrint,
                      },
                      this.getAllDayMaxEventProps(),
                    ),
                  )),
              f = (t) =>
                g(
                  hc,
                  Object.assign({}, o.timed, {
                    dayTableModel: s,
                    dateProfile: i,
                    axis: c,
                    slotDuration: e.slotDuration,
                    slatMetas: l,
                    forPrint: r.forPrint,
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    onSlatCoords: this.handleSlatCoords,
                    expandRows: t.expandRows,
                    onScrollTopRequest: this.handleScrollTopRequest,
                  }),
                );
            return d
              ? this.renderHScrollLayout(u, h, f, s.colCnt, a, l, this.state.slatCoords)
              : this.renderSimpleLayout(u, h, f);
          }
        },
        usesMinMaxTime: !0,
        allDaySlot: !0,
        slotDuration: '00:30:00',
        slotEventOverlap: !0,
      },
      timeGridDay: { type: 'timeGrid', duration: { days: 1 } },
      timeGridWeek: { type: 'timeGrid', duration: { weeks: 1 } },
    },
  });
  class yc extends Xn {
    constructor() {
      super(...arguments), (this.state = { textId: Le() });
    }
    render() {
      let { theme: e, dateEnv: t, options: n, viewApi: r } = this.context,
        { cellId: i, dayDate: s, todayRange: o } = this.props,
        { textId: l } = this.state,
        a = Zi(s, o),
        c = n.listDayFormat ? t.format(s, n.listDayFormat) : '',
        d = n.listDaySideFormat ? t.format(s, n.listDaySideFormat) : '',
        u = Object.assign(
          {
            date: t.toDate(s),
            view: r,
            textId: l,
            text: c,
            sideText: d,
            navLinkAttrs: es(this.context, s),
            sideNavLinkAttrs: es(this.context, s, 'day', !1),
          },
          a,
        );
      return g(
        rr,
        {
          elTag: 'tr',
          elClasses: ['fc-list-day', ...Xi(a, e)],
          elAttrs: { 'data-date': Ft(s) },
          renderProps: u,
          generatorName: 'dayHeaderContent',
          customGenerator: n.dayHeaderContent,
          defaultGenerator: bc,
          classNameGenerator: n.dayHeaderClassNames,
          didMount: n.dayHeaderDidMount,
          willUnmount: n.dayHeaderWillUnmount,
        },
        (t) =>
          g(
            'th',
            { scope: 'colgroup', colSpan: 3, id: i, 'aria-labelledby': l },
            g(t, { elTag: 'div', elClasses: ['fc-list-day-cushion', e.getClass('tableCellShaded')] }),
          ),
      );
    }
  }
  function bc(e) {
    return g(
      v,
      null,
      e.text && g('a', Object.assign({ id: e.textId, className: 'fc-list-day-text' }, e.navLinkAttrs), e.text),
      e.sideText &&
        g(
          'a',
          Object.assign({ 'aria-hidden': !0, className: 'fc-list-day-side-text' }, e.sideNavLinkAttrs),
          e.sideText,
        ),
    );
  }
  const Sc = hn({ hour: 'numeric', minute: '2-digit', meridiem: 'short' });
  class Ec extends Xn {
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        { seg: r, timeHeaderId: i, eventHeaderId: s, dateHeaderId: o } = e,
        l = n.eventTimeFormat || Sc;
      return g(
        fo,
        Object.assign({}, e, {
          elTag: 'tr',
          elClasses: ['fc-list-event', r.eventRange.def.url && 'fc-event-forced-url'],
          defaultGenerator: () =>
            (function (e, t) {
              let n = Di(e, t);
              return g('a', Object.assign({}, n), e.eventRange.def.title);
            })(r, t),
          seg: r,
          timeText: '',
          disableDragging: !0,
          disableResizing: !0,
        }),
        (e, n) =>
          g(
            v,
            null,
            (function (e, t, n, r, i) {
              let { options: s } = n;
              if (!1 !== s.displayEventTime) {
                let o,
                  l = e.eventRange.def,
                  a = e.eventRange.instance,
                  c = !1;
                if (
                  (l.allDay
                    ? (c = !0)
                    : mr(e.eventRange.range)
                      ? e.isStart
                        ? (o = Si(e, t, n, null, null, a.range.start, e.end))
                        : e.isEnd
                          ? (o = Si(e, t, n, null, null, e.start, a.range.end))
                          : (c = !0)
                      : (o = Si(e, t, n)),
                  c)
                ) {
                  let e = { text: n.options.allDayText, view: n.viewApi };
                  return g(rr, {
                    elTag: 'td',
                    elClasses: ['fc-list-event-time'],
                    elAttrs: { headers: `${r} ${i}` },
                    renderProps: e,
                    generatorName: 'allDayContent',
                    customGenerator: s.allDayContent,
                    defaultGenerator: Cc,
                    classNameGenerator: s.allDayClassNames,
                    didMount: s.allDayDidMount,
                    willUnmount: s.allDayWillUnmount,
                  });
                }
                return g('td', { className: 'fc-list-event-time' }, o);
              }
              return null;
            })(r, l, t, i, o),
            g(
              'td',
              { 'aria-hidden': !0, className: 'fc-list-event-graphic' },
              g('span', { className: 'fc-list-event-dot', style: { borderColor: n.borderColor || n.backgroundColor } }),
            ),
            g(e, { elTag: 'td', elClasses: ['fc-list-event-title'], elAttrs: { headers: `${s} ${o}` } }),
          ),
      );
    }
  }
  function Cc(e) {
    return e.text;
  }
  function wc(e) {
    return e.text;
  }
  function Dc(e) {
    let t = Nt(e.renderRange.start),
      n = e.renderRange.end,
      r = [],
      i = [];
    for (; t < n; ) r.push(t), i.push({ start: t, end: xt(t, 1) }), (t = xt(t, 1));
    return { dayDates: r, dayRanges: i };
  }
  Re(
    ':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}',
  );
  function Rc(e) {
    return !1 === e ? null : hn(e);
  }
  var Ac = zo({
    name: '@fullcalendar/list',
    optionRefiners: {
      listDayFormat: Rc,
      listDaySideFormat: Rc,
      noEventsClassNames: wn,
      noEventsContent: wn,
      noEventsDidMount: wn,
      noEventsWillUnmount: wn,
    },
    views: {
      list: {
        component: class extends gs {
          constructor() {
            super(...arguments),
              (this.computeDateVars = Qt(Dc)),
              (this.eventStoreToSegs = Qt(this._eventStoreToSegs)),
              (this.state = { timeHeaderId: Le(), eventHeaderId: Le(), dateHeaderIdRoot: Le() }),
              (this.setRootEl = (e) => {
                e
                  ? this.context.registerInteractiveComponent(this, { el: e })
                  : this.context.unregisterInteractiveComponent(this);
              });
          }
          render() {
            let { props: e, context: t } = this,
              { dayDates: n, dayRanges: r } = this.computeDateVars(e.dateProfile),
              i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);
            return g(
              sr,
              {
                elRef: this.setRootEl,
                elClasses: [
                  'fc-list',
                  t.theme.getClass('table'),
                  !1 !== t.options.stickyHeaderDates ? 'fc-list-sticky' : '',
                ],
                viewSpec: t.viewSpec,
              },
              g(
                Xs,
                {
                  liquid: !e.isHeightAuto,
                  overflowX: e.isHeightAuto ? 'visible' : 'hidden',
                  overflowY: e.isHeightAuto ? 'visible' : 'auto',
                },
                i.length > 0 ? this.renderSegList(i, n) : this.renderEmptyMessage(),
              ),
            );
          }
          renderEmptyMessage() {
            let { options: e, viewApi: t } = this.context,
              n = { text: e.noEventsText, view: t };
            return g(
              rr,
              {
                elTag: 'div',
                elClasses: ['fc-list-empty'],
                renderProps: n,
                generatorName: 'noEventsContent',
                customGenerator: e.noEventsContent,
                defaultGenerator: wc,
                classNameGenerator: e.noEventsClassNames,
                didMount: e.noEventsDidMount,
                willUnmount: e.noEventsWillUnmount,
              },
              (e) => g(e, { elTag: 'div', elClasses: ['fc-list-empty-cushion'] }),
            );
          }
          renderSegList(e, t) {
            let { theme: n, options: r } = this.context,
              { timeHeaderId: i, eventHeaderId: s, dateHeaderIdRoot: o } = this.state,
              l = (function (e) {
                let t,
                  n,
                  r = [];
                for (t = 0; t < e.length; t += 1) (n = e[t]), (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                return r;
              })(e);
            return g(Os, { unit: 'day' }, (e, a) => {
              let c = [];
              for (let n = 0; n < l.length; n += 1) {
                let d = l[n];
                if (d) {
                  let l = Ft(t[n]),
                    u = o + '-' + l;
                  c.push(g(yc, { key: l, cellId: u, dayDate: t[n], todayRange: a })), (d = gi(d, r.eventOrder));
                  for (let t of d)
                    c.push(
                      g(
                        Ec,
                        Object.assign(
                          {
                            key: l + ':' + t.eventRange.instance.instanceId,
                            seg: t,
                            isDragging: !1,
                            isResizing: !1,
                            isDateSelecting: !1,
                            isSelected: !1,
                            timeHeaderId: i,
                            eventHeaderId: s,
                            dateHeaderId: u,
                          },
                          Ei(t, a, e),
                        ),
                      ),
                    );
                }
              }
              return g(
                'table',
                { className: 'fc-list-table ' + n.getClass('table') },
                g(
                  'thead',
                  null,
                  g(
                    'tr',
                    null,
                    g('th', { scope: 'col', id: i }, r.timeHint),
                    g('th', { scope: 'col', 'aria-hidden': !0 }),
                    g('th', { scope: 'col', id: s }, r.eventHint),
                  ),
                ),
                g('tbody', null, c),
              );
            });
          }
          _eventStoreToSegs(e, t, n) {
            return this.eventRangesToSegs(
              ci(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg,
              n,
            );
          }
          eventRangesToSegs(e, t) {
            let n = [];
            for (let r of e) n.push(...this.eventRangeToSegs(r, t));
            return n;
          }
          eventRangeToSegs(e, t) {
            let n,
              r,
              i,
              { dateEnv: s } = this.context,
              { nextDayThreshold: o } = this.context.options,
              l = e.range,
              a = e.def.allDay,
              c = [];
            for (n = 0; n < t.length; n += 1)
              if (
                ((r = cr(l, t[n])),
                r &&
                  ((i = {
                    component: this,
                    eventRange: e,
                    start: r.start,
                    end: r.end,
                    isStart: e.isStart && r.start.valueOf() === l.start.valueOf(),
                    isEnd: e.isEnd && r.end.valueOf() === l.end.valueOf(),
                    dayIndex: n,
                  }),
                  c.push(i),
                  !i.isEnd && !a && n + 1 < t.length && l.end < s.add(t[n + 1].start, o)))
              ) {
                (i.end = l.end), (i.isEnd = !0);
                break;
              }
            return c;
          }
        },
        buttonTextKey: 'list',
        listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' },
      },
      listDay: { type: 'list', duration: { days: 1 }, listDayFormat: { weekday: 'long' } },
      listWeek: {
        type: 'list',
        duration: { weeks: 1 },
        listDayFormat: { weekday: 'long' },
        listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
      },
      listMonth: { type: 'list', duration: { month: 1 }, listDaySideFormat: { weekday: 'long' } },
      listYear: { type: 'list', duration: { year: 1 }, listDaySideFormat: { weekday: 'long' } },
    },
  });
  class xc extends gs {
    constructor() {
      super(...arguments),
        (this.buildDayTableModel = Qt(Ia)),
        (this.slicer = new ka()),
        (this.state = { labelId: Le() });
    }
    render() {
      const { props: e, state: t, context: n } = this,
        { dateProfile: r, forPrint: i } = e,
        { options: s } = n,
        o = this.buildDayTableModel(r, n.dateProfileGenerator),
        l = this.slicer.sliceProps(e, r, s.nextDayThreshold, n, o),
        a = null != e.tableWidth ? e.tableWidth / s.aspectRatio : null,
        c = o.cells.length,
        d = null != a ? a / c : null;
      return g(
        'div',
        {
          ref: e.elRef,
          'data-date': e.isoDateStr,
          className: 'fc-multimonth-month',
          style: { width: e.width },
          role: 'grid',
          'aria-labelledby': t.labelId,
        },
        g(
          'div',
          { className: 'fc-multimonth-header', style: { marginBottom: d }, role: 'presentation' },
          g(
            'div',
            { className: 'fc-multimonth-title', id: t.labelId },
            n.dateEnv.format(e.dateProfile.currentRange.start, e.titleFormat),
          ),
          g(
            'table',
            { className: ['fc-multimonth-header-table', n.theme.getClass('table')].join(' '), role: 'presentation' },
            g(
              'thead',
              { role: 'rowgroup' },
              g(Ps, { dateProfile: e.dateProfile, dates: o.headerDates, datesRepDistinctDays: !1 }),
            ),
          ),
        ),
        g(
          'div',
          {
            className: [
              'fc-multimonth-daygrid',
              'fc-daygrid',
              'fc-daygrid-body',
              !i && 'fc-daygrid-body-balanced',
              i && 'fc-daygrid-body-unbalanced',
              i && 'fc-daygrid-body-natural',
            ].join(' '),
            style: { marginTop: -d },
          },
          g(
            'table',
            {
              className: ['fc-multimonth-daygrid-table', n.theme.getClass('table')].join(' '),
              style: { height: i ? '' : a },
              role: 'presentation',
            },
            g(
              'tbody',
              { role: 'rowgroup' },
              g(
                xa,
                Object.assign({}, l, {
                  dateProfile: r,
                  cells: o.cells,
                  eventSelection: e.eventSelection,
                  dayMaxEvents: !i,
                  dayMaxEventRows: !i,
                  showWeekNumbers: s.weekNumbers,
                  clientWidth: e.clientWidth,
                  clientHeight: e.clientHeight,
                  forPrint: i,
                }),
              ),
            ),
          ),
        ),
      );
    }
  }
  const Tc = ht(1, 'month');
  function _c(e, t, n, r, i) {
    const { start: s, end: o } = t.currentRange;
    let l = s;
    const a = [];
    for (; l.valueOf() < o.valueOf(); ) {
      const s = n.add(l, Tc),
        o = { start: e.skipHiddenDays(l), end: e.skipHiddenDays(s, -1, !0) };
      let c = Na({ currentRange: o, snapToWeek: !0, fixedWeekCount: r, dateEnv: n });
      c = { start: e.skipHiddenDays(c.start), end: e.skipHiddenDays(c.end, -1, !0) };
      const d = t.activeRange ? cr(t.activeRange, i ? c : o) : null;
      a.push({
        currentDate: t.currentDate,
        isValid: t.isValid,
        validRange: t.validRange,
        renderRange: c,
        activeRange: d,
        currentRange: o,
        currentRangeUnit: 'month',
        isRangeAllDay: !0,
        dateIncrement: t.dateIncrement,
        slotMinTime: t.slotMaxTime,
        slotMaxTime: t.slotMinTime,
      }),
        (l = s);
    }
    return a;
  }
  const kc = hn({ year: 'numeric', month: 'long' }),
    Mc = hn({ month: 'long' });
  function Ic(e, t) {
    return (
      e || (t[0].currentRange.start.getUTCFullYear() !== t[t.length - 1].currentRange.start.getUTCFullYear() ? kc : Mc)
    );
  }
  const Oc = { multiMonthTitleFormat: hn, multiMonthMaxColumns: Number, multiMonthMinWidth: Number };
  Re(
    '.fc .fc-multimonth{border:1px solid var(--fc-border-color);display:flex;flex-wrap:wrap;overflow-x:hidden;overflow-y:auto}.fc .fc-multimonth-title{font-size:1.2em;font-weight:700;padding:1em 0;text-align:center}.fc .fc-multimonth-daygrid{background:var(--fc-page-bg-color)}.fc .fc-multimonth-daygrid-table,.fc .fc-multimonth-header-table{table-layout:fixed;width:100%}.fc .fc-multimonth-daygrid-table{border-top-style:hidden!important}.fc .fc-multimonth-singlecol .fc-multimonth{position:relative}.fc .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:relative;top:0;z-index:2}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid{position:relative;z-index:1}.fc .fc-multimonth-singlecol .fc-multimonth-daygrid-table,.fc .fc-multimonth-singlecol .fc-multimonth-header-table{border-left-style:hidden;border-right-style:hidden}.fc .fc-multimonth-singlecol .fc-multimonth-month:last-child .fc-multimonth-daygrid-table{border-bottom-style:hidden}.fc .fc-multimonth-multicol{line-height:1}.fc .fc-multimonth-multicol .fc-multimonth-month{padding:0 1.2em 1.2em}.fc .fc-multimonth-multicol .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);display:block;float:none;padding:1px}.fc .fc-multimonth-compact{line-height:1}.fc .fc-multimonth-compact .fc-multimonth-daygrid-table,.fc .fc-multimonth-compact .fc-multimonth-header-table{font-size:.9em}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{position:sticky}.fc-media-print .fc-multimonth{overflow:visible}',
  );
  var Nc = zo({
    name: '@fullcalendar/multimonth',
    initialView: 'multiMonthYear',
    optionRefiners: Oc,
    views: {
      multiMonth: {
        component: class extends gs {
          constructor() {
            super(...arguments),
              (this.splitDateProfileByMonth = Qt(_c)),
              (this.buildMonthFormat = Qt(Ic)),
              (this.scrollElRef = { current: null }),
              (this.firstMonthElRef = { current: null }),
              (this.needsScrollReset = !1),
              (this.handleSizing = (e) => {
                e && this.updateSize();
              });
          }
          render() {
            const { context: e, props: t, state: n } = this,
              { options: r } = e,
              { clientWidth: i, clientHeight: s } = n,
              o = n.monthHPadding || 0,
              l = Math.min(null != i ? Math.floor(i / (r.multiMonthMinWidth + o)) : 1, r.multiMonthMaxColumns) || 1,
              a = 100 / l + '%',
              c = null == i ? null : i / l - o,
              d = null != i && 1 === l,
              u = this.splitDateProfileByMonth(
                e.dateProfileGenerator,
                t.dateProfile,
                e.dateEnv,
                !d && r.fixedWeekCount,
                r.showNonCurrentDates,
              ),
              h = this.buildMonthFormat(r.multiMonthTitleFormat, u),
              f = [
                'fc-multimonth',
                d ? 'fc-multimonth-singlecol' : 'fc-multimonth-multicol',
                null != c && c < 400 ? 'fc-multimonth-compact' : '',
                t.isHeightAuto ? '' : 'fc-scroller',
              ];
            return g(
              sr,
              { elRef: this.scrollElRef, elClasses: f, viewSpec: e.viewSpec },
              u.map((e, n) => {
                const r = Vt(e.currentRange.start);
                return g(
                  xc,
                  Object.assign({}, t, {
                    key: r,
                    isoDateStr: r,
                    elRef: 0 === n ? this.firstMonthElRef : void 0,
                    titleFormat: h,
                    dateProfile: e,
                    width: a,
                    tableWidth: c,
                    clientWidth: i,
                    clientHeight: s,
                  }),
                );
              }),
            );
          }
          componentDidMount() {
            this.updateSize(), this.context.addResizeHandler(this.handleSizing), this.requestScrollReset();
          }
          componentDidUpdate(e) {
            kn(e, this.props) || this.handleSizing(!1),
              e.dateProfile !== this.props.dateProfile ? this.requestScrollReset() : this.flushScrollReset();
          }
          componentWillUnmount() {
            this.context.removeResizeHandler(this.handleSizing);
          }
          updateSize() {
            const e = this.scrollElRef.current,
              t = this.firstMonthElRef.current;
            e && this.setState({ clientWidth: e.clientWidth, clientHeight: e.clientHeight }),
              t &&
                e &&
                null == this.state.monthHPadding &&
                this.setState({ monthHPadding: e.clientWidth - t.firstChild.offsetWidth });
          }
          requestScrollReset() {
            (this.needsScrollReset = !0), this.flushScrollReset();
          }
          flushScrollReset() {
            if (this.needsScrollReset && null != this.state.monthHPadding) {
              const { currentDate: e } = this.props.dateProfile,
                t = this.scrollElRef.current,
                n = t.querySelector(`[data-date="${Vt(e)}"]`);
              (t.scrollTop = n.getBoundingClientRect().top - this.firstMonthElRef.current.getBoundingClientRect().top),
                (this.needsScrollReset = !1);
            }
          }
          shouldComponentUpdate() {
            return !0;
          }
        },
        dateProfileGeneratorClass: Oa,
        multiMonthMinWidth: 350,
        multiMonthMaxColumns: 3,
      },
      multiMonthYear: { type: 'multiMonth', duration: { years: 1 }, fixedWeekCount: !0, showNonCurrentDates: !1 },
    },
  });
  const Pc = ['GPL-My-Project-Is-Open-Source', 'CC-Attribution-NonCommercial-NoDerivatives'],
    Hc = {
      position: 'absolute',
      zIndex: 99999,
      bottom: '1px',
      left: '1px',
      background: '#eee',
      borderColor: '#ddd',
      borderStyle: 'solid',
      borderWidth: '1px 1px 0 0',
      padding: '2px 4px',
      fontSize: '12px',
      borderTopRightRadius: '3px',
    };
  var Wc = zo({
    name: '@fullcalendar/premium-common',
    premiumReleaseDate: '2024-07-12',
    optionRefiners: { schedulerLicenseKey: String },
    viewContainerAppends: [
      function (e) {
        let t = e.options.schedulerLicenseKey,
          n = 'undefined' != typeof window ? window.location.href : '';
        if (!/\w+:\/\/fullcalendar\.io\/|\/examples\/[\w-]+\.html$/.test(n)) {
          let n = (function (e, t) {
            if (-1 !== Pc.indexOf(e)) return 'valid';
            const n = (e || '').match(/^(\d+)-fcs-(\d+)$/);
            if (n && 10 === n[1].length) {
              const e = new Date(1e3 * parseInt(n[2], 10)),
                r = Ds.mockSchedulerReleaseDate || t;
              if (zt(r)) {
                return xt(r, -372) < e ? 'valid' : 'outdated';
              }
            }
            return 'invalid';
          })(t, e.pluginHooks.premiumReleaseDate);
          if ('valid' !== n)
            return g(
              'div',
              { className: 'fc-license-message', style: Hc },
              'outdated' === n
                ? g(
                    v,
                    null,
                    'Your license key is too old to work with this version. ',
                    g('a', { href: 'https://fullcalendar.io/docs/schedulerLicenseKey#outdated' }, 'More Info'),
                  )
                : g(
                    v,
                    null,
                    'Your license key is invalid. ',
                    g('a', { href: 'https://fullcalendar.io/docs/schedulerLicenseKey#invalid' }, 'More Info'),
                  ),
            );
        }
        return null;
      },
    ],
  });
  function Bc(e) {
    let t = e.scrollLeft;
    if ('rtl' === window.getComputedStyle(e).direction)
      switch (zc()) {
        case 'negative':
          t *= -1;
        case 'reverse':
          t = e.scrollWidth - t - e.clientWidth;
      }
    return t;
  }
  function jc(e, t) {
    if ('rtl' === window.getComputedStyle(e).direction)
      switch (zc()) {
        case 'reverse':
          t = e.scrollWidth - t;
          break;
        case 'negative':
          t = -(e.scrollWidth - t);
      }
    e.scrollLeft = t;
  }
  let Lc;
  function zc() {
    return (
      Lc ||
      (Lc = (function () {
        let e = document.createElement('div');
        (e.style.position = 'absolute'),
          (e.style.top = '-1000px'),
          (e.style.width = '100px'),
          (e.style.height = '100px'),
          (e.style.overflow = 'scroll'),
          (e.style.direction = 'rtl');
        let t,
          n = document.createElement('div');
        (n.style.width = '200px'),
          (n.style.height = '200px'),
          e.appendChild(n),
          document.body.appendChild(e),
          e.scrollLeft > 0 ? (t = 'positive') : ((e.scrollLeft = 1), (t = e.scrollLeft > 0 ? 'reverse' : 'negative'));
        return ke(e), t;
      })())
    );
  }
  class Uc {
    constructor(e, t) {
      (this.scrollEl = e),
        (this.isRtl = t),
        (this.updateSize = () => {
          let { scrollEl: e } = this,
            t = Oe(e, '.fc-sticky');
          !(function (e, t, n) {
            e.forEach((e, r) => {
              let i,
                { textAlign: s, elWidth: o, parentBound: l } = t[r],
                a = l.right - l.left;
              (i = 'center' === s && a > n ? (n - o) / 2 : ''), He(e, { left: i, right: i, top: 0 });
            });
          })(t, this.queryElGeoms(t), e.clientWidth);
        });
    }
    queryElGeoms(e) {
      let { scrollEl: t, isRtl: n } = this,
        r = (function (e) {
          let t = e.getBoundingClientRect(),
            n = os(e);
          return { left: t.left + n.borderLeft + n.scrollbarLeft - Bc(e), top: t.top + n.borderTop - e.scrollTop };
        })(t),
        i = [];
      for (let t of e) {
        let e = Ui(ls(t.parentNode, !0, !0), -r.left, -r.top),
          s = t.getBoundingClientRect(),
          o = window.getComputedStyle(t),
          l = window.getComputedStyle(t.parentNode).textAlign,
          a = null;
        'start' === l ? (l = n ? 'right' : 'left') : 'end' === l && (l = n ? 'left' : 'right'),
          'sticky' !== o.position &&
            (a = Ui(s, -r.left - (parseFloat(o.left) || 0), -r.top - (parseFloat(o.top) || 0))),
          i.push({ parentBound: e, naturalBound: a, elWidth: s.width, elHeight: s.height, textAlign: l });
      }
      return i;
    }
  }
  class Gc extends Xn {
    constructor() {
      super(...arguments),
        (this.elRef = { current: null }),
        (this.state = { xScrollbarWidth: 0, yScrollbarWidth: 0 }),
        (this.handleScroller = (e) => {
          (this.scroller = e), $n(this.props.scrollerRef, e);
        }),
        (this.handleSizing = () => {
          let { props: e } = this;
          'scroll-hidden' === e.overflowY && this.setState({ yScrollbarWidth: this.scroller.getYScrollbarWidth() }),
            'scroll-hidden' === e.overflowX && this.setState({ xScrollbarWidth: this.scroller.getXScrollbarWidth() });
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        r = n.isRtl && rs(),
        i = 0,
        s = 0,
        o = 0,
        { overflowX: l, overflowY: a } = e;
      return (
        e.forPrint && ((l = 'visible'), (a = 'visible')),
        'scroll-hidden' === l && (o = t.xScrollbarWidth),
        'scroll-hidden' === a && null != t.yScrollbarWidth && (r ? (i = t.yScrollbarWidth) : (s = t.yScrollbarWidth)),
        g(
          'div',
          { ref: this.elRef, className: 'fc-scroller-harness' + (e.liquid ? ' fc-scroller-harness-liquid' : '') },
          g(
            Xs,
            {
              ref: this.handleScroller,
              elRef: this.props.scrollerElRef,
              overflowX: 'scroll-hidden' === l ? 'scroll' : l,
              overflowY: 'scroll-hidden' === a ? 'scroll' : a,
              overcomeLeft: i,
              overcomeRight: s,
              overcomeBottom: o,
              maxHeight:
                'number' == typeof e.maxHeight ? e.maxHeight + ('scroll-hidden' === l ? t.xScrollbarWidth : 0) : '',
              liquid: e.liquid,
              liquidIsAbsolute: !0,
            },
            e.children,
          ),
        )
      );
    }
    componentDidMount() {
      this.handleSizing(), this.context.addResizeHandler(this.handleSizing);
    }
    getSnapshotBeforeUpdate(e) {
      return this.props.forPrint && !e.forPrint ? { simulateScrollLeft: this.scroller.el.scrollLeft } : {};
    }
    componentDidUpdate(e, t, n) {
      const {
        props: r,
        scroller: { el: i },
      } = this;
      if ((kn(e, r) || this.handleSizing(), void 0 !== n.simulateScrollLeft))
        i.style.left = -n.simulateScrollLeft + 'px';
      else if (!r.forPrint && e.forPrint) {
        const e = -parseInt(i.style.left);
        (i.style.left = ''), (i.scrollLeft = e);
      }
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleSizing);
    }
    needsXScrolling() {
      return this.scroller.needsXScrolling();
    }
    needsYScrolling() {
      return this.scroller.needsYScrolling();
    }
  }
  const Fc = 'wheel mousewheel DomMouseScroll MozMousePixelScroll'.split(' ');
  class Vc {
    constructor(e) {
      (this.el = e),
        (this.emitter = new Xr()),
        (this.isScrolling = !1),
        (this.isTouching = !1),
        (this.isRecentlyWheeled = !1),
        (this.isRecentlyScrolled = !1),
        (this.wheelWaiter = new _e(this._handleWheelWaited.bind(this))),
        (this.scrollWaiter = new _e(this._handleScrollWaited.bind(this))),
        (this.handleScroll = () => {
          this.startScroll(),
            this.emitter.trigger('scroll', this.isRecentlyWheeled, this.isTouching),
            (this.isRecentlyScrolled = !0),
            this.scrollWaiter.request(500);
        }),
        (this.handleWheel = () => {
          (this.isRecentlyWheeled = !0), this.wheelWaiter.request(500);
        }),
        (this.handleTouchStart = () => {
          this.isTouching = !0;
        }),
        (this.handleTouchEnd = () => {
          (this.isTouching = !1), this.isRecentlyScrolled || this.endScroll();
        }),
        e.addEventListener('scroll', this.handleScroll),
        e.addEventListener('touchstart', this.handleTouchStart, { passive: !0 }),
        e.addEventListener('touchend', this.handleTouchEnd);
      for (let t of Fc) e.addEventListener(t, this.handleWheel);
    }
    destroy() {
      let { el: e } = this;
      e.removeEventListener('scroll', this.handleScroll),
        e.removeEventListener('touchstart', this.handleTouchStart, { passive: !0 }),
        e.removeEventListener('touchend', this.handleTouchEnd);
      for (let t of Fc) e.removeEventListener(t, this.handleWheel);
    }
    startScroll() {
      this.isScrolling ||
        ((this.isScrolling = !0), this.emitter.trigger('scrollStart', this.isRecentlyWheeled, this.isTouching));
    }
    endScroll() {
      this.isScrolling &&
        (this.emitter.trigger('scrollEnd'),
        (this.isScrolling = !1),
        (this.isRecentlyScrolled = !0),
        (this.isRecentlyWheeled = !1),
        this.scrollWaiter.clear(),
        this.wheelWaiter.clear());
    }
    _handleScrollWaited() {
      (this.isRecentlyScrolled = !1), this.isTouching || this.endScroll();
    }
    _handleWheelWaited() {
      this.isRecentlyWheeled = !1;
    }
  }
  class qc {
    constructor(e, t) {
      (this.isVertical = e),
        (this.scrollEls = t),
        (this.isPaused = !1),
        (this.scrollListeners = t.map((e) => this.bindScroller(e)));
    }
    destroy() {
      for (let e of this.scrollListeners) e.destroy();
    }
    bindScroller(e) {
      let { scrollEls: t, isVertical: n } = this,
        r = new Vc(e);
      return (
        r.emitter.on('scroll', (r, i) => {
          if (
            !this.isPaused &&
            ((!this.masterEl || (this.masterEl !== e && (r || i))) && this.assignMaster(e), this.masterEl === e)
          )
            for (let r of t) r !== e && (n ? (r.scrollTop = e.scrollTop) : (r.scrollLeft = e.scrollLeft));
        }),
        r.emitter.on('scrollEnd', () => {
          this.masterEl === e && (this.masterEl = null);
        }),
        r
      );
    }
    assignMaster(e) {
      this.masterEl = e;
      for (let t of this.scrollListeners) t.el !== e && t.endScroll();
    }
    forceScrollLeft(e) {
      this.isPaused = !0;
      for (let t of this.scrollListeners) jc(t.el, e);
      this.isPaused = !1;
    }
    forceScrollTop(e) {
      this.isPaused = !0;
      for (let t of this.scrollListeners) t.el.scrollTop = e;
      this.isPaused = !1;
    }
  }
  Ds.SCROLLGRID_RESIZE_INTERVAL = 500;
  class Yc extends Xn {
    constructor() {
      super(...arguments),
        (this.compileColGroupStats = Xt($c, ed)),
        (this.renderMicroColGroups = Xt(ro)),
        (this.clippedScrollerRefs = new $s()),
        (this.scrollerElRefs = new $s(this._handleScrollerEl.bind(this))),
        (this.chunkElRefs = new $s(this._handleChunkEl.bind(this))),
        (this.scrollSyncersBySection = {}),
        (this.scrollSyncersByColumn = {}),
        (this.rowUnstableMap = new Map()),
        (this.rowInnerMaxHeightMap = new Map()),
        (this.anyRowHeightsChanged = !1),
        (this.recentSizingCnt = 0),
        (this.state = {
          shrinkWidths: [],
          forceYScrollbars: !1,
          forceXScrollbars: !1,
          scrollerClientWidths: {},
          scrollerClientHeights: {},
          sectionRowMaxHeights: [],
        }),
        (this.handleSizing = (e, t) => {
          if (!this.allowSizing()) return;
          t || (this.anyRowHeightsChanged = !0);
          let n = {};
          (e || (!t && !this.rowUnstableMap.size)) && (n.sectionRowMaxHeights = this.computeSectionRowMaxHeights()),
            this.setState(
              Object.assign(Object.assign({ shrinkWidths: this.computeShrinkWidths() }, this.computeScrollerDims()), n),
              () => {
                this.rowUnstableMap.size || this.updateStickyScrolling();
              },
            );
        }),
        (this.handleRowHeightChange = (e, t) => {
          let { rowUnstableMap: n, rowInnerMaxHeightMap: r } = this;
          if (t) {
            n.delete(e);
            let t = Zc(e);
            (r.has(e) && r.get(e) === t) || (r.set(e, t), (this.anyRowHeightsChanged = !0)),
              !n.size &&
                this.anyRowHeightsChanged &&
                ((this.anyRowHeightsChanged = !1),
                this.setState({ sectionRowMaxHeights: this.computeSectionRowMaxHeights() }));
          } else n.set(e, !0);
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        { shrinkWidths: r } = t,
        i = this.compileColGroupStats(e.colGroups.map((e) => [e])),
        s = this.renderMicroColGroups(i.map((e, t) => [e.cols, r[t]])),
        o = oo(e.liquid, n);
      this.getDims();
      let l,
        a = e.sections,
        c = a.length,
        d = 0,
        u = [],
        h = [],
        f = [];
      for (; d < c && 'header' === (l = a[d]).type; )
        u.push(this.renderSection(l, d, i, s, t.sectionRowMaxHeights, !0)), (d += 1);
      for (; d < c && 'body' === (l = a[d]).type; )
        h.push(this.renderSection(l, d, i, s, t.sectionRowMaxHeights, !1)), (d += 1);
      for (; d < c && 'footer' === (l = a[d]).type; )
        f.push(this.renderSection(l, d, i, s, t.sectionRowMaxHeights, !0)), (d += 1);
      const p = !Ni(),
        m = { role: 'rowgroup' };
      return g(
        'table',
        { ref: e.elRef, role: 'grid', className: o.join(' ') },
        (function (e, t) {
          let n = e.map((e, n) => {
            let r = e.width;
            return 'shrink' === r && (r = e.totalColWidth + io(t[n]) + 1), g('col', { style: { width: r } });
          });
          return g('colgroup', {}, ...n);
        })(i, r),
        Boolean(!p && u.length) && g('thead', m, ...u),
        Boolean(!p && h.length) && g('tbody', m, ...h),
        Boolean(!p && f.length) && g('tfoot', m, ...f),
        p && g('tbody', m, ...u, ...h, ...f),
      );
    }
    renderSection(e, t, n, r, i, s) {
      return 'outerContent' in e
        ? g(v, { key: e.key }, e.outerContent)
        : g(
            'tr',
            { key: e.key, role: 'presentation', className: lo(e, this.props.liquid).join(' ') },
            e.chunks.map((o, l) => this.renderChunk(e, t, n[l], r[l], o, l, (i[t] || [])[l] || [], s)),
          );
    }
    renderChunk(e, t, n, r, i, s, o, l) {
      if ('outerContent' in i) return g(v, { key: i.key }, i.outerContent);
      let { state: a } = this,
        { scrollerClientWidths: c, scrollerClientHeights: d } = a,
        [u, h] = this.getDims(),
        f = t * h + s,
        p = s === (!this.context.isRtl || rs() ? h - 1 : 0),
        m = t === u - 1,
        y = m && a.forceXScrollbars,
        b = p && a.forceYScrollbars,
        S = n && n.allowXScrolling,
        E = eo(this.props, e),
        C = Ks(this.props, e),
        w = e.expandRows && C,
        D = to(
          e,
          i,
          {
            tableColGroupNode: r,
            tableMinWidth: (n && n.totalColMinWidth) || '',
            clientWidth: void 0 !== c[f] ? c[f] : null,
            clientHeight: void 0 !== d[f] ? d[f] : null,
            expandRows: w,
            syncRowHeights: Boolean(e.syncRowHeights),
            rowSyncHeights: o,
            reportRowHeightChange: this.handleRowHeightChange,
          },
          l,
        ),
        R = y ? (m ? 'scroll' : 'scroll-hidden') : S ? (m ? 'auto' : 'scroll-hidden') : 'hidden',
        A = b ? (p ? 'scroll' : 'scroll-hidden') : E ? (p ? 'auto' : 'scroll-hidden') : 'hidden';
      return (
        (D = g(
          Gc,
          {
            ref: this.clippedScrollerRefs.createRef(f),
            scrollerElRef: this.scrollerElRefs.createRef(f),
            overflowX: R,
            overflowY: A,
            forPrint: this.props.forPrint,
            liquid: C,
            maxHeight: e.maxHeight,
          },
          D,
        )),
        g(l ? 'th' : 'td', { key: i.key, ref: this.chunkElRefs.createRef(f), role: 'presentation' }, D)
      );
    }
    componentDidMount() {
      (this.getStickyScrolling = Xt(rd)),
        (this.getScrollSyncersBySection = $t(td.bind(this, !0), null, nd)),
        (this.getScrollSyncersByColumn = $t(td.bind(this, !1), null, nd)),
        this.updateScrollSyncers(),
        this.handleSizing(!1),
        this.context.addResizeHandler(this.handleSizing);
    }
    componentDidUpdate(e, t) {
      this.updateScrollSyncers(), this.handleSizing(!1, t.sectionRowMaxHeights !== this.state.sectionRowMaxHeights);
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleSizing), this.destroyScrollSyncers();
    }
    allowSizing() {
      let e = new Date();
      return !this.lastSizingDate || e.valueOf() > this.lastSizingDate.valueOf() + Ds.SCROLLGRID_RESIZE_INTERVAL
        ? ((this.lastSizingDate = e), (this.recentSizingCnt = 0), !0)
        : (this.recentSizingCnt += 1) <= 10;
    }
    computeShrinkWidths() {
      let e = this.compileColGroupStats(this.props.colGroups.map((e) => [e])),
        [t, n] = this.getDims(),
        r = t * n,
        i = [];
      return (
        e.forEach((e, t) => {
          if (e.hasShrinkCol) {
            let e = this.chunkElRefs.collect(t, r, n);
            i[t] = Js(e);
          }
        }),
        i
      );
    }
    computeSectionRowMaxHeights() {
      let e = new Map(),
        [t, n] = this.getDims(),
        r = [];
      for (let i = 0; i < t; i += 1) {
        let t = this.props.sections[i],
          s = [];
        if (t && t.syncRowHeights) {
          let r = [];
          for (let t = 0; t < n; t += 1) {
            let s = i * n + t,
              o = [],
              l = this.chunkElRefs.currentMap[s];
            (o = l
              ? Oe(l, '.fc-scrollgrid-sync-table tr').map((t) => {
                  let n = Zc(t);
                  return e.set(t, n), n;
                })
              : []),
              r.push(o);
          }
          let o = r[0].length,
            l = !0;
          for (let e = 1; e < n; e += 1) {
            if (!(t.chunks[e] && void 0 !== t.chunks[e].outerContent) && r[e].length !== o) {
              l = !1;
              break;
            }
          }
          if (l) {
            for (let e = 0; e < n; e += 1) s.push([]);
            for (let e = 0; e < o; e += 1) {
              let t = [];
              for (let i = 0; i < n; i += 1) {
                let n = r[i][e];
                null != n && t.push(n);
              }
              let i = Math.max(...t);
              for (let e = 0; e < n; e += 1) s[e].push(i);
            }
          } else {
            let e = [];
            for (let t = 0; t < n; t += 1) e.push(Qc(r[t]) + r[t].length);
            let t = Math.max(...e);
            for (let e = 0; e < n; e += 1) {
              let n = r[e].length,
                i = t - n,
                o = Math.floor(i / n),
                l = i - o * (n - 1),
                a = [],
                c = 0;
              for (c < n && (a.push(l), (c += 1)); c < n; ) a.push(o), (c += 1);
              s.push(a);
            }
          }
        }
        r.push(s);
      }
      return (this.rowInnerMaxHeightMap = e), r;
    }
    computeScrollerDims() {
      let e = is(),
        [t, n] = this.getDims(),
        r = !this.context.isRtl || rs() ? n - 1 : 0,
        i = t - 1,
        s = this.clippedScrollerRefs.currentMap,
        o = this.scrollerElRefs.currentMap,
        l = !1,
        a = !1,
        c = {},
        d = {};
      for (let e = 0; e < t; e += 1) {
        let t = s[e * n + r];
        if (t && t.needsYScrolling()) {
          l = !0;
          break;
        }
      }
      for (let e = 0; e < n; e += 1) {
        let t = s[i * n + e];
        if (t && t.needsXScrolling()) {
          a = !0;
          break;
        }
      }
      for (let s = 0; s < t; s += 1)
        for (let t = 0; t < n; t += 1) {
          let u = s * n + t,
            h = o[u];
          if (h) {
            let n = h.parentNode;
            (c[u] = Math.floor(n.getBoundingClientRect().width - (t === r && l ? e.y : 0))),
              (d[u] = Math.floor(n.getBoundingClientRect().height - (s === i && a ? e.x : 0)));
          }
        }
      return { forceYScrollbars: l, forceXScrollbars: a, scrollerClientWidths: c, scrollerClientHeights: d };
    }
    updateStickyScrolling() {
      let { isRtl: e } = this.context,
        t = this.scrollerElRefs.getAll().map((t) => [t, e]);
      this.getStickyScrolling(t).forEach((e) => e.updateSize());
    }
    updateScrollSyncers() {
      let [e, t] = this.getDims(),
        n = e * t,
        r = {},
        i = {},
        s = this.scrollerElRefs.currentMap;
      for (let n = 0; n < e; n += 1) {
        let e = n * t,
          i = e + t;
        r[n] = Pn(s, e, i, 1);
      }
      for (let e = 0; e < t; e += 1) i[e] = this.scrollerElRefs.collect(e, n, t);
      (this.scrollSyncersBySection = this.getScrollSyncersBySection(r)),
        (this.scrollSyncersByColumn = this.getScrollSyncersByColumn(i));
    }
    destroyScrollSyncers() {
      xn(this.scrollSyncersBySection, nd), xn(this.scrollSyncersByColumn, nd);
    }
    getChunkConfigByIndex(e) {
      let t = this.getDims()[1],
        n = Math.floor(e / t),
        r = e % t,
        i = this.props.sections[n];
      return i && i.chunks[r];
    }
    forceScrollLeft(e, t) {
      let n = this.scrollSyncersByColumn[e];
      n && n.forceScrollLeft(t);
    }
    forceScrollTop(e, t) {
      let n = this.scrollSyncersBySection[e];
      n && n.forceScrollTop(t);
    }
    _handleChunkEl(e, t) {
      let n = this.getChunkConfigByIndex(parseInt(t, 10));
      n && $n(n.elRef, e);
    }
    _handleScrollerEl(e, t) {
      let n = this.getChunkConfigByIndex(parseInt(t, 10));
      n && $n(n.scrollerElRef, e);
    }
    getDims() {
      let e = this.props.sections.length;
      return [e, e ? this.props.sections[0].chunks.length : 0];
    }
  }
  function Qc(e) {
    let t = 0;
    for (let n of e) t += n;
    return t;
  }
  function Zc(e) {
    let t = Oe(e, '.fc-scrollgrid-sync-inner').map(Xc);
    return t.length ? Math.max(...t) : 0;
  }
  function Xc(e) {
    return e.offsetHeight;
  }
  function $c(e) {
    let t = Jc(e.cols, 'width'),
      n = Jc(e.cols, 'minWidth'),
      r = so(e.cols);
    return {
      hasShrinkCol: r,
      totalColWidth: t,
      totalColMinWidth: n,
      allowXScrolling: 'shrink' !== e.width && Boolean(t || n || r),
      cols: e.cols,
      width: e.width,
    };
  }
  function Jc(e, t) {
    let n = 0;
    for (let r of e) {
      let e = r[t];
      'number' == typeof e && (n += e * (r.span || 1));
    }
    return n;
  }
  Yc.addStateEquality({ shrinkWidths: Dt, scrollerClientWidths: kn, scrollerClientHeights: kn });
  const Kc = { cols: no };
  function ed(e, t) {
    return On(e, t, Kc);
  }
  function td(e, ...t) {
    return new qc(e, t);
  }
  function nd(e) {
    e.destroy();
  }
  function rd(e, t) {
    return new Uc(e, t);
  }
  var id = zo({ name: '@fullcalendar/scrollgrid', premiumReleaseDate: '2024-07-12', deps: [Wc], scrollGridImpl: Yc });
  Ds.COLLAPSIBLE_WIDTH_THRESHOLD = 1200;
  let sd = [],
    od = [];
  function ld() {
    for (let e of sd) e.emitter.trigger('_beforeprint');
    Gn(() => {
      od.push(
        (function () {
          let e = Oe(document.body, '.fc-scrollgrid');
          return e.forEach(cd), () => e.forEach(dd);
        })(),
      );
    });
  }
  function ad() {
    for (let e of sd) e.emitter.trigger('_afterprint');
    Gn(() => {
      for (; od.length; ) od.shift()();
    });
  }
  function cd(e) {
    let t = e.getBoundingClientRect().width;
    (!e.classList.contains('fc-scrollgrid-collapsible') || t < Ds.COLLAPSIBLE_WIDTH_THRESHOLD) &&
      (e.style.width = t + 'px');
  }
  function dd(e) {
    e.style.width = '';
  }
  Re(
    '.fc .fc-event,.fc .fc-scrollgrid table tr{-moz-column-break-inside:avoid;break-inside:avoid}.fc-media-print{display:block;max-width:100%}.fc-media-print .fc-bg-event,.fc-media-print .fc-non-business,.fc-media-print .fc-timegrid-axis-chunk,.fc-media-print .fc-timegrid-slots,.fc-media-print .fc-timeline-slots{display:none}.fc-media-print .fc-h-event,.fc-media-print .fc-toolbar button,.fc-media-print .fc-v-event{background:#fff!important;color:#000!important}.fc-media-print .fc-event,.fc-media-print .fc-event-main{color:#000!important}.fc-media-print .fc-timegrid-event{margin:.5em 0}',
  );
  var ud = zo({
    name: '@fullcalendar/adaptive',
    premiumReleaseDate: '2024-07-12',
    deps: [Wc],
    contextInit: function (e) {
      sd.length || (window.addEventListener('beforeprint', ld), window.addEventListener('afterprint', ad)),
        sd.push(e),
        e.calendarApi.on('_unmount', () => {
          wt(sd, e),
            sd.length || (window.removeEventListener('beforeprint', ld), window.removeEventListener('afterprint', ad));
        });
    },
  });
  Ds.MAX_TIMELINE_SLOTS = 1e3;
  const hd = [
    { years: 1 },
    { months: 1 },
    { days: 1 },
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { minutes: 10 },
    { minutes: 5 },
    { minutes: 1 },
    { seconds: 30 },
    { seconds: 15 },
    { seconds: 10 },
    { seconds: 5 },
    { seconds: 1 },
    { milliseconds: 500 },
    { milliseconds: 100 },
    { milliseconds: 10 },
    { milliseconds: 1 },
  ];
  function fd(e, t, n, r) {
    let i = { labelInterval: n.slotLabelInterval, slotDuration: n.slotDuration };
    !(function (e, t, n) {
      const { currentRange: r } = t;
      if (e.labelInterval) {
        n.countDurationsBetween(r.start, r.end, e.labelInterval) > Ds.MAX_TIMELINE_SLOTS &&
          (console.warn('slotLabelInterval results in too many cells'), (e.labelInterval = null));
      }
      if (e.slotDuration) {
        n.countDurationsBetween(r.start, r.end, e.slotDuration) > Ds.MAX_TIMELINE_SLOTS &&
          (console.warn('slotDuration results in too many cells'), (e.slotDuration = null));
      }
      if (e.labelInterval && e.slotDuration) {
        const t = Et(e.labelInterval, e.slotDuration);
        (null === t || t < 1) &&
          (console.warn('slotLabelInterval must be a multiple of slotDuration'), (e.slotDuration = null));
      }
    })(i, e, t),
      md(i, e, t),
      (function (e, t, n) {
        const { currentRange: r } = t;
        let { slotDuration: i } = e;
        if (!i) {
          const s = md(e, t, n);
          for (let e of hd) {
            const t = ht(e),
              n = Et(s, t);
            if (null !== n && n > 1 && n <= 6) {
              i = t;
              break;
            }
          }
          if (i) {
            n.countDurationsBetween(r.start, r.end, i) > 200 && (i = null);
          }
          i || (i = s), (e.slotDuration = i);
        }
      })(i, e, t);
    let s = n.slotLabelFormat,
      o = Array.isArray(s)
        ? s
        : null != s
          ? [s]
          : (function (e, t, n, r) {
              let i, s;
              const { labelInterval: o } = e;
              let l = Ct(o).unit;
              const a = r.weekNumbers;
              let c = (i = s = null);
              'week' !== l || a || (l = 'day');
              switch (l) {
                case 'year':
                  c = { year: 'numeric' };
                  break;
                case 'month':
                  vd('years', t, n) > 1 && (c = { year: 'numeric' }), (i = { month: 'short' });
                  break;
                case 'week':
                  vd('years', t, n) > 1 && (c = { year: 'numeric' }), (i = { week: 'narrow' });
                  break;
                case 'day':
                  vd('years', t, n) > 1
                    ? (c = { year: 'numeric', month: 'long' })
                    : vd('months', t, n) > 1 && (c = { month: 'long' }),
                    a && (i = { week: 'short' }),
                    (s = { weekday: 'narrow', day: 'numeric' });
                  break;
                case 'hour':
                  a && (c = { week: 'short' }),
                    vd('days', t, n) > 1 &&
                      (i = { weekday: 'short', day: 'numeric', month: 'numeric', omitCommas: !0 }),
                    (s = { hour: 'numeric', minute: '2-digit', omitZeroMinute: !0, meridiem: 'short' });
                  break;
                case 'minute':
                  yt(o) / 60 >= 6
                    ? ((c = { hour: 'numeric', meridiem: 'short' }), (i = (e) => ':' + st(e.date.minute, 2)))
                    : (c = { hour: 'numeric', minute: 'numeric', meridiem: 'short' });
                  break;
                case 'second':
                  bt(o) / 60 >= 6
                    ? ((c = { hour: 'numeric', minute: '2-digit', meridiem: 'lowercase' }),
                      (i = (e) => ':' + st(e.date.second, 2)))
                    : (c = { hour: 'numeric', minute: '2-digit', second: '2-digit', meridiem: 'lowercase' });
                  break;
                case 'millisecond':
                  (c = { hour: 'numeric', minute: '2-digit', second: '2-digit', meridiem: 'lowercase' }),
                    (i = (e) => '.' + st(e.millisecond, 3));
              }
              return [].concat(c || [], i || [], s || []);
            })(i, e, t, n);
    (i.headerFormats = o.map((e) => hn(e))), (i.isTimeScale = Boolean(i.slotDuration.milliseconds));
    let l = null;
    if (!i.isTimeScale) {
      const e = Ct(i.slotDuration).unit;
      /year|month|week/.test(e) && (l = e);
    }
    (i.largeUnit = l), (i.emphasizeWeeks = 1 === pt(i.slotDuration) && vd('weeks', e, t) >= 2 && !n.businessHours);
    let a,
      c,
      d = n.snapDuration;
    d && ((a = ht(d)), (c = Et(i.slotDuration, a))),
      null == c && ((a = i.slotDuration), (c = 1)),
      (i.snapDuration = a),
      (i.snapsPerSlot = c);
    let u = St(e.slotMaxTime) - St(e.slotMinTime),
      h = pd(e.renderRange.start, i, t),
      f = pd(e.renderRange.end, i, t);
    i.isTimeScale && ((h = t.add(h, e.slotMinTime)), (f = t.add(xt(f, -1), e.slotMaxTime))),
      (i.timeWindowMs = u),
      (i.normalizedRange = { start: h, end: f });
    let p = [],
      g = h;
    for (; g < f; ) gd(g, i, e, r) && p.push(g), (g = t.add(g, i.slotDuration));
    i.slotDates = p;
    let m = -1,
      v = 0;
    const y = [],
      b = [];
    for (g = h; g < f; )
      gd(g, i, e, r) ? ((m += 1), y.push(m), b.push(v)) : y.push(m + 0.5), (g = t.add(g, i.snapDuration)), (v += 1);
    return (
      (i.snapDiffToIndex = y),
      (i.snapIndexToDiff = b),
      (i.snapCnt = m + 1),
      (i.slotCnt = i.snapCnt / i.snapsPerSlot),
      (i.isWeekStarts = (function (e, t) {
        let { slotDates: n, emphasizeWeeks: r } = e,
          i = null,
          s = [];
        for (let e of n) {
          let n = t.computeWeekNumber(e),
            o = r && null !== i && i !== n;
          (i = n), s.push(o);
        }
        return s;
      })(i, t)),
      (i.cellRows = (function (e, t) {
        let n = e.slotDates,
          r = e.headerFormats,
          i = r.map(() => []),
          s = pt(e.slotDuration),
          o = 7 === s ? 'week' : 1 === s ? 'day' : null,
          l = r.map((e) => (e.getLargestUnit ? e.getLargestUnit() : null));
        for (let s = 0; s < n.length; s += 1) {
          let a = n[s],
            c = e.isWeekStarts[s];
          for (let n = 0; n < r.length; n += 1) {
            let s = r[n],
              d = i[n],
              u = d[d.length - 1],
              h = n === r.length - 1,
              f = r.length > 1 && !h,
              p = null,
              g = l[n] || (h ? o : null);
            if (f) {
              let e = t.format(a, s);
              u && u.text === e ? (u.colspan += 1) : (p = yd(a, e, g));
            } else if (!u || at(t.countDurationsBetween(e.normalizedRange.start, a, e.labelInterval))) {
              let e = t.format(a, s);
              p = yd(a, e, g);
            } else u.colspan += 1;
            p && ((p.weekStart = c), d.push(p));
          }
        }
        return i;
      })(i, t)),
      (i.slotsPerLabel = Et(i.labelInterval, i.slotDuration)),
      i
    );
  }
  function pd(e, t, n) {
    let r = e;
    return t.isTimeScale || ((r = Nt(r)), t.largeUnit && (r = n.startOf(r, t.largeUnit))), r;
  }
  function gd(e, t, n, r) {
    if (r.isHiddenDay(e)) return !1;
    if (t.isTimeScale) {
      let r = Nt(e),
        i = e.valueOf() - r.valueOf() - St(n.slotMinTime);
      return (i = ((i % 864e5) + 864e5) % 864e5), i < t.timeWindowMs;
    }
    return !0;
  }
  function md(e, t, n) {
    const { currentRange: r } = t;
    let { labelInterval: i } = e;
    if (!i) {
      let t;
      if (e.slotDuration) {
        for (t of hd) {
          const n = ht(t),
            r = Et(n, e.slotDuration);
          if (null !== r && r <= 6) {
            i = n;
            break;
          }
        }
        i || (i = e.slotDuration);
      } else
        for (t of hd) {
          i = ht(t);
          if (n.countDurationsBetween(r.start, r.end, i) >= 18) break;
        }
      e.labelInterval = i;
    }
    return i;
  }
  function vd(e, t, n) {
    let r = t.currentRange,
      i = null;
    return (
      'years' === e
        ? (i = n.diffWholeYears(r.start, r.end))
        : 'months' === e || 'weeks' === e
          ? (i = n.diffWholeMonths(r.start, r.end))
          : 'days' === e && (i = Ot(r.start, r.end)),
      i || 0
    );
  }
  function yd(e, t, n) {
    return { date: e, text: t, rowUnit: n, colspan: 1, isWeekStart: !1 };
  }
  class bd extends Xn {
    constructor() {
      super(...arguments), (this.refineRenderProps = Zt(Cd)), (this.buildCellNavLinkAttrs = Qt(Sd));
    }
    render() {
      let { props: e, context: t } = this,
        { dateEnv: n, options: r } = t,
        { cell: i, dateProfile: s, tDateProfile: o } = e,
        l = Zi(i.date, e.todayRange, e.nowDate, s),
        a = this.refineRenderProps({
          level: e.rowLevel,
          dateMarker: i.date,
          text: i.text,
          dateEnv: t.dateEnv,
          viewApi: t.viewApi,
        });
      return g(
        rr,
        {
          elTag: 'th',
          elClasses: [
            'fc-timeline-slot',
            'fc-timeline-slot-label',
            i.isWeekStart && 'fc-timeline-slot-em',
            ...('time' === i.rowUnit ? $i(l, t.theme) : Xi(l, t.theme)),
          ],
          elAttrs: {
            colSpan: i.colspan,
            'data-date': n.formatIso(i.date, { omitTime: !o.isTimeScale, omitTimeZoneOffset: !0 }),
          },
          renderProps: a,
          generatorName: 'slotLabelContent',
          customGenerator: r.slotLabelContent,
          defaultGenerator: Ed,
          classNameGenerator: r.slotLabelClassNames,
          didMount: r.slotLabelDidMount,
          willUnmount: r.slotLabelWillUnmount,
        },
        (n) =>
          g(
            'div',
            { className: 'fc-timeline-slot-frame', style: { height: e.rowInnerHeight } },
            g(n, {
              elTag: 'a',
              elClasses: ['fc-timeline-slot-cushion', 'fc-scrollgrid-sync-inner', e.isSticky && 'fc-sticky'],
              elAttrs: this.buildCellNavLinkAttrs(t, i.date, i.rowUnit),
            }),
          ),
      );
    }
  }
  function Sd(e, t, n) {
    return n && 'time' !== n ? es(e, t, n) : {};
  }
  function Ed(e) {
    return e.text;
  }
  function Cd(e) {
    return { level: e.level, date: e.dateEnv.toDate(e.dateMarker), view: e.viewApi, text: e.text };
  }
  class wd extends Xn {
    render() {
      let { dateProfile: e, tDateProfile: t, rowInnerHeights: n, todayRange: r, nowDate: i } = this.props,
        { cellRows: s } = t;
      return g(
        v,
        null,
        s.map((o, l) => {
          let a = l === s.length - 1,
            c = t.isTimeScale && a;
          return g(
            'tr',
            { key: l, className: ['fc-timeline-header-row', c ? 'fc-timeline-header-row-chrono' : ''].join(' ') },
            o.map((s) =>
              g(bd, {
                key: s.date.toISOString(),
                cell: s,
                rowLevel: l,
                dateProfile: e,
                tDateProfile: t,
                todayRange: r,
                nowDate: i,
                rowInnerHeight: n && n[l],
                isSticky: !a,
              }),
            ),
          );
        }),
      );
    }
  }
  class Dd {
    constructor(e, t, n, r, i, s) {
      (this.slatRootEl = e),
        (this.dateProfile = n),
        (this.tDateProfile = r),
        (this.dateEnv = i),
        (this.isRtl = s),
        (this.outerCoordCache = new ds(e, t, !0, !1)),
        (this.innerCoordCache = new ds(e, Ne(t, 'div'), !0, !1));
    }
    isDateInRange(e) {
      return fr(this.dateProfile.currentRange, e);
    }
    dateToCoord(e) {
      let { tDateProfile: t } = this,
        n = this.computeDateSnapCoverage(e) / t.snapsPerSlot,
        r = Math.floor(n);
      r = Math.min(r, t.slotCnt - 1);
      let i = n - r,
        { innerCoordCache: s, outerCoordCache: o } = this;
      return this.isRtl ? o.originClientRect.width - (o.rights[r] - s.getWidth(r) * i) : o.lefts[r] + s.getWidth(r) * i;
    }
    rangeToCoords(e) {
      return { start: this.dateToCoord(e.start), end: this.dateToCoord(e.end) };
    }
    durationToCoord(e) {
      let { dateProfile: t, tDateProfile: n, dateEnv: r, isRtl: i } = this,
        s = 0;
      if (t) {
        let o = r.add(t.activeRange.start, e);
        n.isTimeScale || (o = Nt(o)), (s = this.dateToCoord(o)), !i && s && (s += 1);
      }
      return s;
    }
    coordFromLeft(e) {
      return this.isRtl ? this.outerCoordCache.originClientRect.width - e : e;
    }
    computeDateSnapCoverage(e) {
      return Rd(e, this.tDateProfile, this.dateEnv);
    }
  }
  function Rd(e, t, n) {
    let r = n.countDurationsBetween(t.normalizedRange.start, e, t.snapDuration);
    if (r < 0) return 0;
    if (r >= t.snapDiffToIndex.length) return t.snapCnt;
    let i = Math.floor(r),
      s = t.snapDiffToIndex[i];
    return at(s) ? (s += r - i) : (s = Math.ceil(s)), s;
  }
  function Ad(e, t) {
    return null === e ? { left: '', right: '' } : t ? { right: e, left: '' } : { left: e, right: '' };
  }
  function xd(e, t) {
    return e ? (t ? { right: e.start, left: -e.end } : { left: e.start, right: -e.end }) : { left: '', right: '' };
  }
  class Td extends Xn {
    constructor() {
      super(...arguments), (this.rootElRef = { current: null });
    }
    render() {
      let { props: e, context: t } = this,
        n = Ct(e.tDateProfile.slotDuration).unit,
        r = e.slatCoords && e.slatCoords.dateProfile === e.dateProfile ? e.slatCoords : null;
      return g(Os, { unit: n }, (n, i) =>
        g(
          'div',
          { className: 'fc-timeline-header', ref: this.rootElRef },
          g(
            'table',
            {
              'aria-hidden': !0,
              className: 'fc-scrollgrid-sync-table',
              style: { minWidth: e.tableMinWidth, width: e.clientWidth },
            },
            e.tableColGroupNode,
            g(
              'tbody',
              null,
              g(wd, {
                dateProfile: e.dateProfile,
                tDateProfile: e.tDateProfile,
                nowDate: n,
                todayRange: i,
                rowInnerHeights: e.rowInnerHeights,
              }),
            ),
          ),
          t.options.nowIndicator &&
            g(
              'div',
              { className: 'fc-timeline-now-indicator-container' },
              r &&
                r.isDateInRange(n) &&
                g(mo, {
                  elClasses: ['fc-timeline-now-indicator-arrow'],
                  elStyle: Ad(r.dateToCoord(n), t.isRtl),
                  isAxis: !0,
                  date: n,
                }),
            ),
        ),
      );
    }
    componentDidMount() {
      this.updateSize();
    }
    componentDidUpdate() {
      this.updateSize();
    }
    updateSize() {
      this.props.onMaxCushionWidth && this.props.onMaxCushionWidth(this.computeMaxCushionWidth());
    }
    computeMaxCushionWidth() {
      return Math.max(
        ...Oe(this.rootElRef.current, '.fc-timeline-header-row:last-child .fc-timeline-slot-cushion').map(
          (e) => e.getBoundingClientRect().width,
        ),
      );
    }
  }
  class _d extends Xn {
    render() {
      let { props: e, context: t } = this,
        { dateEnv: n, options: r, theme: i } = t,
        { date: s, tDateProfile: o, isEm: l } = e,
        a = Zi(e.date, e.todayRange, e.nowDate, e.dateProfile),
        c = Object.assign(Object.assign({ date: n.toDate(e.date) }, a), { view: t.viewApi });
      return g(
        rr,
        {
          elTag: 'td',
          elRef: e.elRef,
          elClasses: [
            'fc-timeline-slot',
            'fc-timeline-slot-lane',
            l && 'fc-timeline-slot-em',
            o.isTimeScale
              ? at(n.countDurationsBetween(o.normalizedRange.start, e.date, o.labelInterval))
                ? 'fc-timeline-slot-major'
                : 'fc-timeline-slot-minor'
              : '',
            ...(e.isDay ? Xi(a, i) : $i(a, i)),
          ],
          elAttrs: { 'data-date': n.formatIso(s, { omitTimeZoneOffset: !0, omitTime: !o.isTimeScale }) },
          renderProps: c,
          generatorName: 'slotLaneContent',
          customGenerator: r.slotLaneContent,
          classNameGenerator: r.slotLaneClassNames,
          didMount: r.slotLaneDidMount,
          willUnmount: r.slotLaneWillUnmount,
        },
        (e) => g(e, { elTag: 'div' }),
      );
    }
  }
  class kd extends Xn {
    render() {
      let { props: e } = this,
        { tDateProfile: t, cellElRefs: n } = e,
        { slotDates: r, isWeekStarts: i } = t,
        s = !t.isTimeScale && !t.largeUnit;
      return g(
        'tbody',
        null,
        g(
          'tr',
          null,
          r.map((r, o) => {
            let l = r.toISOString();
            return g(_d, {
              key: l,
              elRef: n.createRef(l),
              date: r,
              dateProfile: e.dateProfile,
              tDateProfile: t,
              nowDate: e.nowDate,
              todayRange: e.todayRange,
              isEm: i[o],
              isDay: s,
            });
          }),
        ),
      );
    }
  }
  class Md extends Xn {
    constructor() {
      super(...arguments),
        (this.rootElRef = { current: null }),
        (this.cellElRefs = new $s()),
        (this.handleScrollRequest = (e) => {
          let { onScrollLeftRequest: t } = this.props,
            { coords: n } = this;
          if (t && n) {
            if (e.time) {
              t(n.coordFromLeft(n.durationToCoord(e.time)));
            }
            return !0;
          }
          return null;
        });
    }
    render() {
      let { props: e, context: t } = this;
      return g(
        'div',
        { className: 'fc-timeline-slots', ref: this.rootElRef },
        g(
          'table',
          {
            'aria-hidden': !0,
            className: t.theme.getClass('table'),
            style: { minWidth: e.tableMinWidth, width: e.clientWidth },
          },
          e.tableColGroupNode,
          g(kd, {
            cellElRefs: this.cellElRefs,
            dateProfile: e.dateProfile,
            tDateProfile: e.tDateProfile,
            nowDate: e.nowDate,
            todayRange: e.todayRange,
          }),
        ),
      );
    }
    componentDidMount() {
      this.updateSizing(), (this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest));
    }
    componentDidUpdate(e) {
      this.updateSizing(), this.scrollResponder.update(e.dateProfile !== this.props.dateProfile);
    }
    componentWillUnmount() {
      this.scrollResponder.detach(), this.props.onCoords && this.props.onCoords(null);
    }
    updateSizing() {
      let { props: e, context: t } = this;
      if (null !== e.clientWidth && this.scrollResponder) {
        this.rootElRef.current.offsetWidth &&
          ((this.coords = new Dd(
            this.rootElRef.current,
            ((n = this.cellElRefs.currentMap),
            e.tDateProfile.slotDates.map((e) => {
              let t = e.toISOString();
              return n[t];
            })),
            e.dateProfile,
            e.tDateProfile,
            t.dateEnv,
            t.isRtl,
          )),
          e.onCoords && e.onCoords(this.coords),
          this.scrollResponder.update(!1));
      }
      var n;
    }
    positionToHit(e) {
      let { outerCoordCache: t } = this.coords,
        { dateEnv: n, isRtl: r } = this.context,
        { tDateProfile: i } = this.props,
        s = t.leftToIndex(e);
      if (null != s) {
        let o = t.getWidth(s),
          l = r ? (t.rights[s] - e) / o : (e - t.lefts[s]) / o,
          a = Math.floor(l * i.snapsPerSlot),
          c = n.add(i.slotDates[s], mt(i.snapDuration, a));
        return {
          dateSpan: {
            range: { start: c, end: n.add(c, i.snapDuration) },
            allDay: !this.props.tDateProfile.isTimeScale,
          },
          dayEl: this.cellElRefs.currentMap[s],
          left: t.lefts[s],
          right: t.rights[s],
        };
      }
      return null;
    }
  }
  function Id(e, t, n) {
    let r = [];
    if (n)
      for (let i of e) {
        let e = n.rangeToCoords(i),
          s = Math.round(e.start),
          o = Math.round(e.end);
        o - s < t && (o = s + t), r.push({ start: s, end: o });
      }
    return r;
  }
  class Od extends Xn {
    render() {
      let { props: e } = this,
        t = [].concat(e.eventResizeSegs, e.dateSelectionSegs);
      return (
        e.timelineCoords &&
        g(
          'div',
          { className: 'fc-timeline-bg' },
          this.renderSegs(e.businessHourSegs || [], e.timelineCoords, 'non-business'),
          this.renderSegs(e.bgEventSegs || [], e.timelineCoords, 'bg-event'),
          this.renderSegs(t, e.timelineCoords, 'highlight'),
        )
      );
    }
    renderSegs(e, t, n) {
      let { todayRange: r, nowDate: i } = this.props,
        { isRtl: s } = this.context,
        o = Id(e, 0, t),
        l = e.map((e, t) => {
          let l = xd(o[t], s);
          return g(
            'div',
            { key: wi(e.eventRange), className: 'fc-timeline-bg-harness', style: l },
            'bg-event' === n ? g(Eo, Object.assign({ seg: e }, Ei(e, r, i))) : wo(n),
          );
        });
      return g(v, null, l);
    }
  }
  class Nd extends js {
    sliceRange(e, t, n, r, i) {
      let s = (function (e, t, n) {
          if (!t.isTimeScale && ((e = gr(e)), t.largeUnit)) {
            let r = e;
            ((e = { start: n.startOf(e.start, t.largeUnit), end: n.startOf(e.end, t.largeUnit) }).end.valueOf() !==
              r.end.valueOf() ||
              e.end <= e.start) &&
              (e = { start: e.start, end: n.add(e.end, t.slotDuration) });
          }
          return e;
        })(e, r, i),
        o = [];
      if (Rd(s.start, r, i) < Rd(s.end, r, i)) {
        let e = cr(s, r.normalizedRange);
        e &&
          o.push({
            start: e.start,
            end: e.end,
            isStart: e.start.valueOf() === s.start.valueOf() && gd(e.start, r, t, n),
            isEnd: e.end.valueOf() === s.end.valueOf() && gd(Tt(e.end, -1), r, t, n),
          });
      }
      return o;
    }
  }
  const Pd = hn({ hour: 'numeric', minute: '2-digit', omitZeroMinute: !0, meridiem: 'narrow' });
  class Hd extends Xn {
    render() {
      let { props: e } = this;
      return g(
        po,
        Object.assign({}, e, {
          elClasses: ['fc-timeline-event', 'fc-h-event'],
          defaultTimeFormat: Pd,
          defaultDisplayEventTime: !e.isTimeScale,
        }),
      );
    }
  }
  class Wd extends Xn {
    render() {
      let { props: e, context: t } = this,
        { hiddenSegs: n, placement: r, resourceId: i } = e,
        { top: s, hcoords: o } = r,
        l = o && null !== s,
        a = xd(o, t.isRtl),
        c = i ? { resourceId: i } : {};
      return g(
        To,
        {
          elRef: e.elRef,
          elClasses: ['fc-timeline-more-link'],
          elStyle: Object.assign({ visibility: l ? '' : 'hidden', top: s || 0 }, a),
          allDayDate: null,
          moreCnt: n.length,
          allSegs: n,
          hiddenSegs: n,
          dateProfile: e.dateProfile,
          todayRange: e.todayRange,
          extraDateSpan: c,
          popoverContent: () =>
            g(
              v,
              null,
              n.map((t) => {
                let n = t.eventRange.instance.instanceId;
                return g(
                  'div',
                  { key: n, style: { visibility: e.isForcedInvisible[n] ? 'hidden' : '' } },
                  g(
                    Hd,
                    Object.assign(
                      {
                        isTimeScale: e.isTimeScale,
                        seg: t,
                        isDragging: !1,
                        isResizing: !1,
                        isDateSelecting: !1,
                        isSelected: n === e.eventSelection,
                      },
                      Ei(t, e.todayRange, e.nowDate),
                    ),
                  ),
                );
              }),
            ),
        },
        (e) => g(e, { elTag: 'div', elClasses: ['fc-timeline-more-link-inner', 'fc-sticky'] }),
      );
    }
  }
  class Bd extends Xn {
    constructor() {
      super(...arguments),
        (this.slicer = new Nd()),
        (this.sortEventSegs = Qt(gi)),
        (this.harnessElRefs = new $s()),
        (this.moreElRefs = new $s()),
        (this.innerElRef = { current: null }),
        (this.state = { eventInstanceHeights: {}, moreLinkHeights: {} }),
        (this.handleResize = (e) => {
          e && this.updateSize();
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        { options: r } = n,
        { dateProfile: i, tDateProfile: s } = e,
        o = this.slicer.sliceProps(
          e,
          i,
          s.isTimeScale ? null : e.nextDayThreshold,
          n,
          i,
          n.dateProfileGenerator,
          s,
          n.dateEnv,
        ),
        l = (o.eventDrag ? o.eventDrag.segs : null) || (o.eventResize ? o.eventResize.segs : null) || [],
        a = this.sortEventSegs(o.fgEventSegs, r.eventOrder),
        c = Id(a, r.eventMinWidth, e.timelineCoords),
        [d, u] = (function (e, t, n, r, i, s) {
          let o = [],
            l = [];
          for (let r = 0; r < e.length; r += 1) {
            let i = e[r],
              s = n[i.eventRange.instance.instanceId],
              a = t[r];
            s && a ? o.push({ index: r, span: a, thickness: s }) : l.push({ seg: i, hcoords: a, top: null });
          }
          let a = new ms();
          null != i && (a.strictOrder = i), null != s && (a.maxStackCnt = s);
          let c = a.addSegs(o),
            d = c.map((t) => ({ seg: e[t.index], hcoords: t.span, top: null })),
            u = bs(c),
            h = [],
            f = [];
          const p = (t) => e[t.index];
          for (let t = 0; t < u.length; t += 1) {
            let n = u[t],
              i = n.entries.map(p),
              s = r[Gt(Mo(i))];
            null != s
              ? h.push({ index: e.length + t, thickness: s, span: n.span })
              : f.push({ seg: i, hcoords: n.span, top: null });
          }
          (a.maxStackCnt = -1), a.addSegs(h);
          let g = a.toRects(),
            m = [],
            v = 0;
          for (let t of g) {
            let n = t.index;
            m.push({ seg: n < e.length ? e[n] : u[n - e.length].entries.map(p), hcoords: t.span, top: t.levelCoord }),
              (v = Math.max(v, t.levelCoord + t.thickness));
          }
          return [m.concat(l, d, f), v];
        })(a, c, t.eventInstanceHeights, t.moreLinkHeights, r.eventOrderStrict, r.eventMaxStack),
        h =
          (o.eventDrag ? o.eventDrag.affectedInstances : null) ||
          (o.eventResize ? o.eventResize.affectedInstances : null) ||
          {};
      return g(
        v,
        null,
        g(Od, {
          businessHourSegs: o.businessHourSegs,
          bgEventSegs: o.bgEventSegs,
          timelineCoords: e.timelineCoords,
          eventResizeSegs: o.eventResize ? o.eventResize.segs : [],
          dateSelectionSegs: o.dateSelectionSegs,
          nowDate: e.nowDate,
          todayRange: e.todayRange,
        }),
        g(
          'div',
          { className: 'fc-timeline-events fc-scrollgrid-sync-inner', ref: this.innerElRef, style: { height: u } },
          this.renderFgSegs(d, h, !1, !1, !1),
          this.renderFgSegs(
            (function (e, t, n) {
              if (!e.length || !t) return [];
              let r = (function (e) {
                let t = {};
                for (let n of e) {
                  let { seg: e } = n;
                  Array.isArray(e) || (t[e.eventRange.instance.instanceId] = n.top);
                }
                return t;
              })(n);
              return e.map((e) => ({ seg: e, hcoords: t.rangeToCoords(e), top: r[e.eventRange.instance.instanceId] }));
            })(l, e.timelineCoords, d),
            {},
            Boolean(o.eventDrag),
            Boolean(o.eventResize),
            !1,
          ),
        ),
      );
    }
    componentDidMount() {
      this.updateSize(), this.context.addResizeHandler(this.handleResize);
    }
    componentDidUpdate(e, t) {
      (e.eventStore === this.props.eventStore &&
        e.timelineCoords === this.props.timelineCoords &&
        t.moreLinkHeights === this.state.moreLinkHeights) ||
        this.updateSize();
    }
    componentWillUnmount() {
      this.context.removeResizeHandler(this.handleResize);
    }
    updateSize() {
      let { props: e } = this,
        { timelineCoords: t } = e;
      const n = this.innerElRef.current;
      e.onHeightChange && e.onHeightChange(n, !1),
        t &&
          this.setState(
            {
              eventInstanceHeights: xn(this.harnessElRefs.currentMap, (e) =>
                Math.round(e.getBoundingClientRect().height),
              ),
              moreLinkHeights: xn(this.moreElRefs.currentMap, (e) => Math.round(e.getBoundingClientRect().height)),
            },
            () => {
              e.onHeightChange && e.onHeightChange(n, !0);
            },
          ),
        e.syncParentMinHeight && (n.parentElement.style.minHeight = n.style.height);
    }
    renderFgSegs(e, t, n, r, i) {
      let { harnessElRefs: s, moreElRefs: o, props: l, context: a } = this,
        c = n || r || i;
      return g(
        v,
        null,
        e.map((e) => {
          let { seg: d, hcoords: u, top: h } = e;
          if (Array.isArray(d)) {
            let n = Gt(Mo(d));
            return g(Wd, {
              key: 'm:' + n,
              elRef: o.createRef(n),
              hiddenSegs: d,
              placement: e,
              dateProfile: l.dateProfile,
              nowDate: l.nowDate,
              todayRange: l.todayRange,
              isTimeScale: l.tDateProfile.isTimeScale,
              eventSelection: l.eventSelection,
              resourceId: l.resourceId,
              isForcedInvisible: t,
            });
          }
          let f = d.eventRange.instance.instanceId,
            p = c || Boolean(!t[f] && u && null !== h),
            m = xd(u, a.isRtl);
          return g(
            'div',
            {
              key: 'e:' + f,
              ref: c ? null : s.createRef(f),
              className: 'fc-timeline-event-harness',
              style: Object.assign({ visibility: p ? '' : 'hidden', top: h || 0 }, m),
            },
            g(
              Hd,
              Object.assign(
                {
                  isTimeScale: l.tDateProfile.isTimeScale,
                  seg: d,
                  isDragging: n,
                  isResizing: r,
                  isDateSelecting: i,
                  isSelected: f === l.eventSelection,
                },
                Ei(d, l.todayRange, l.nowDate),
              ),
            ),
          );
        }),
      );
    }
  }
  Bd.addStateEquality({ eventInstanceHeights: kn, moreLinkHeights: kn });
  class jd extends gs {
    constructor() {
      super(...arguments),
        (this.slatsRef = { current: null }),
        (this.state = { coords: null }),
        (this.handeEl = (e) => {
          e
            ? this.context.registerInteractiveComponent(this, { el: e })
            : this.context.unregisterInteractiveComponent(this);
        }),
        (this.handleCoords = (e) => {
          this.setState({ coords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        { options: r } = n,
        { dateProfile: i, tDateProfile: s } = e,
        o = Ct(s.slotDuration).unit;
      return g(
        'div',
        {
          className: 'fc-timeline-body',
          ref: this.handeEl,
          style: { minWidth: e.tableMinWidth, height: e.clientHeight, width: e.clientWidth },
        },
        g(Os, { unit: o }, (o, l) =>
          g(
            v,
            null,
            g(Md, {
              ref: this.slatsRef,
              dateProfile: i,
              tDateProfile: s,
              nowDate: o,
              todayRange: l,
              clientWidth: e.clientWidth,
              tableColGroupNode: e.tableColGroupNode,
              tableMinWidth: e.tableMinWidth,
              onCoords: this.handleCoords,
              onScrollLeftRequest: e.onScrollLeftRequest,
            }),
            g(Bd, {
              dateProfile: i,
              tDateProfile: e.tDateProfile,
              nowDate: o,
              todayRange: l,
              nextDayThreshold: r.nextDayThreshold,
              businessHours: e.businessHours,
              eventStore: e.eventStore,
              eventUiBases: e.eventUiBases,
              dateSelection: e.dateSelection,
              eventSelection: e.eventSelection,
              eventDrag: e.eventDrag,
              eventResize: e.eventResize,
              timelineCoords: t.coords,
              syncParentMinHeight: !0,
            }),
            r.nowIndicator &&
              t.coords &&
              t.coords.isDateInRange(o) &&
              g(
                'div',
                { className: 'fc-timeline-now-indicator-container' },
                g(mo, {
                  elClasses: ['fc-timeline-now-indicator-line'],
                  elStyle: Ad(t.coords.dateToCoord(o), n.isRtl),
                  isAxis: !1,
                  date: o,
                }),
              ),
          ),
        ),
      );
    }
    queryHit(e, t, n, r) {
      let i = this.slatsRef.current.positionToHit(e);
      return i
        ? {
            dateProfile: this.props.dateProfile,
            dateSpan: i.dateSpan,
            rect: { left: i.left, right: i.right, top: 0, bottom: r },
            dayEl: i.dayEl,
            layer: 0,
          }
        : null;
    }
  }
  function Ld(e, t) {
    return [{ span: e.slotCnt, minWidth: t || 1 }];
  }
  Re(
    '.fc .fc-timeline-body{min-height:100%;position:relative;z-index:1}.fc .fc-timeline-slots{bottom:0;position:absolute;top:0;z-index:1}.fc .fc-timeline-slots>table{height:100%}.fc .fc-timeline-slot-minor{border-style:dotted}.fc .fc-timeline-slot-frame{align-items:center;display:flex;justify-content:center}.fc .fc-timeline-header-row-chrono .fc-timeline-slot-frame{justify-content:flex-start}.fc .fc-timeline-header-row:last-child .fc-timeline-slot-frame{overflow:hidden}.fc .fc-timeline-slot-cushion{padding:4px 5px;white-space:nowrap}.fc-direction-ltr .fc-timeline-slot{border-right:0!important}.fc-direction-rtl .fc-timeline-slot{border-left:0!important}.fc .fc-timeline-now-indicator-container{bottom:0;left:0;position:absolute;right:0;top:0;width:0;z-index:4}.fc .fc-timeline-now-indicator-arrow,.fc .fc-timeline-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;pointer-events:none;position:absolute;top:0}.fc .fc-timeline-now-indicator-arrow{border-left-color:transparent;border-right-color:transparent;border-width:6px 5px 0;margin:0 -6px}.fc .fc-timeline-now-indicator-line{border-width:0 0 0 1px;bottom:0;margin:0 -1px}.fc .fc-timeline-events{position:relative;width:0;z-index:3}.fc .fc-timeline-event-harness,.fc .fc-timeline-more-link{position:absolute;top:0}.fc-timeline-event{z-index:1}.fc-timeline-event.fc-event-mirror{z-index:2}.fc-timeline-event{align-items:center;border-radius:0;display:flex;font-size:var(--fc-small-font-size);margin-bottom:1px;padding:2px 1px;position:relative}.fc-timeline-event .fc-event-main{flex-grow:1;flex-shrink:1;min-width:0}.fc-timeline-event .fc-event-time{font-weight:700}.fc-timeline-event .fc-event-time,.fc-timeline-event .fc-event-title{padding:0 2px;white-space:nowrap}.fc-direction-ltr .fc-timeline-event.fc-event-end,.fc-direction-ltr .fc-timeline-more-link{margin-right:1px}.fc-direction-rtl .fc-timeline-event.fc-event-end,.fc-direction-rtl .fc-timeline-more-link{margin-left:1px}.fc-timeline-overlap-disabled .fc-timeline-event{margin-bottom:0;padding-bottom:5px;padding-top:5px}.fc-timeline-event:not(.fc-event-end):after,.fc-timeline-event:not(.fc-event-start):before{border-color:transparent #000;border-style:solid;border-width:5px;content:"";flex-grow:0;flex-shrink:0;height:0;margin:0 1px;opacity:.5;width:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-start):before,.fc-direction-rtl .fc-timeline-event:not(.fc-event-end):after{border-left:0}.fc-direction-ltr .fc-timeline-event:not(.fc-event-end):after,.fc-direction-rtl .fc-timeline-event:not(.fc-event-start):before{border-right:0}.fc-timeline-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;font-size:var(--fc-small-font-size);padding:1px}.fc-timeline-more-link-inner{display:inline-block;left:0;padding:2px;right:0}.fc .fc-timeline-bg{bottom:0;left:0;position:absolute;right:0;top:0;width:0;z-index:2}.fc .fc-timeline-bg .fc-non-business{z-index:1}.fc .fc-timeline-bg .fc-bg-event{z-index:2}.fc .fc-timeline-bg .fc-highlight{z-index:3}.fc .fc-timeline-bg-harness{bottom:0;position:absolute;top:0}',
  );
  var zd = zo({
    name: '@fullcalendar/timeline',
    premiumReleaseDate: '2024-07-12',
    deps: [Wc],
    initialView: 'timelineDay',
    views: {
      timeline: {
        component: class extends gs {
          constructor() {
            super(...arguments),
              (this.buildTimelineDateProfile = Qt(fd)),
              (this.scrollGridRef = { current: null }),
              (this.state = { slatCoords: null, slotCushionMaxWidth: null }),
              (this.handleSlatCoords = (e) => {
                this.setState({ slatCoords: e });
              }),
              (this.handleScrollLeftRequest = (e) => {
                this.scrollGridRef.current.forceScrollLeft(0, e);
              }),
              (this.handleMaxCushionWidth = (e) => {
                this.setState({ slotCushionMaxWidth: Math.ceil(e) });
              });
          }
          render() {
            let { props: e, state: t, context: n } = this,
              { options: r } = n,
              i = !e.forPrint && co(r),
              s = !e.forPrint && uo(r),
              o = this.buildTimelineDateProfile(e.dateProfile, n.dateEnv, r, n.dateProfileGenerator),
              { slotMinWidth: l } = r,
              a = Ld(o, l || this.computeFallbackSlotMinWidth(o)),
              c = [
                {
                  type: 'header',
                  key: 'header',
                  isSticky: i,
                  chunks: [
                    {
                      key: 'timeline',
                      content: (n) =>
                        g(Td, {
                          dateProfile: e.dateProfile,
                          clientWidth: n.clientWidth,
                          clientHeight: n.clientHeight,
                          tableMinWidth: n.tableMinWidth,
                          tableColGroupNode: n.tableColGroupNode,
                          tDateProfile: o,
                          slatCoords: t.slatCoords,
                          onMaxCushionWidth: l ? null : this.handleMaxCushionWidth,
                        }),
                    },
                  ],
                },
                {
                  type: 'body',
                  key: 'body',
                  liquid: !0,
                  chunks: [
                    {
                      key: 'timeline',
                      content: (t) =>
                        g(
                          jd,
                          Object.assign({}, e, {
                            clientWidth: t.clientWidth,
                            clientHeight: t.clientHeight,
                            tableMinWidth: t.tableMinWidth,
                            tableColGroupNode: t.tableColGroupNode,
                            tDateProfile: o,
                            onSlatCoords: this.handleSlatCoords,
                            onScrollLeftRequest: this.handleScrollLeftRequest,
                          }),
                        ),
                    },
                  ],
                },
              ];
            return (
              s && c.push({ type: 'footer', key: 'footer', isSticky: !0, chunks: [{ key: 'timeline', content: ao }] }),
              g(
                sr,
                {
                  elClasses: ['fc-timeline', !1 === r.eventOverlap ? 'fc-timeline-overlap-disabled' : ''],
                  viewSpec: n.viewSpec,
                },
                g(Yc, {
                  ref: this.scrollGridRef,
                  liquid: !e.isHeightAuto && !e.forPrint,
                  forPrint: e.forPrint,
                  collapsibleWidth: !1,
                  colGroups: [{ cols: a }],
                  sections: c,
                }),
              )
            );
          }
          computeFallbackSlotMinWidth(e) {
            return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel);
          }
        },
        usesMinMaxTime: !0,
        eventResizableFromStart: !0,
      },
      timelineDay: { type: 'timeline', duration: { days: 1 } },
      timelineWeek: { type: 'timeline', duration: { weeks: 1 } },
      timelineMonth: { type: 'timeline', duration: { months: 1 } },
      timelineYear: { type: 'timeline', duration: { years: 1 } },
    },
  });
  const Ud = {
    id: String,
    parentId: String,
    children: wn,
    title: String,
    businessHours: wn,
    extendedProps: wn,
    eventEditable: Boolean,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventConstraint: wn,
    eventOverlap: Boolean,
    eventAllow: wn,
    eventClassNames: Hr,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
  };
  function Gd(e, t = '', n, r) {
    let { refined: i, extra: s } = Cn(e, Ud),
      o = {
        id: i.id || '_fc:' + Qe(),
        parentId: i.parentId || t,
        title: i.title || '',
        businessHours: i.businessHours ? Jr(i.businessHours, r) : null,
        ui: jr(
          {
            editable: i.eventEditable,
            startEditable: i.eventStartEditable,
            durationEditable: i.eventDurationEditable,
            constraint: i.eventConstraint,
            overlap: i.eventOverlap,
            allow: i.eventAllow,
            classNames: i.eventClassNames,
            backgroundColor: i.eventBackgroundColor,
            borderColor: i.eventBorderColor,
            textColor: i.eventTextColor,
            color: i.eventColor,
          },
          r,
        ),
        extendedProps: Object.assign(Object.assign({}, s), i.extendedProps),
      };
    if ((Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), n[o.id]));
    else if (((n[o.id] = o), i.children)) for (let e of i.children) Gd(e, o.id, n, r);
    return o;
  }
  function Fd(e) {
    return 0 === e.indexOf('_fc:') ? '' : e;
  }
  class Vd {
    constructor(e, t) {
      (this._context = e), (this._resource = t);
    }
    setProp(e, t) {
      let n = this._resource;
      this._context.dispatch({ type: 'SET_RESOURCE_PROP', resourceId: n.id, propName: e, propValue: t }), this.sync(n);
    }
    setExtendedProp(e, t) {
      let n = this._resource;
      this._context.dispatch({ type: 'SET_RESOURCE_EXTENDED_PROP', resourceId: n.id, propName: e, propValue: t }),
        this.sync(n);
    }
    sync(e) {
      let t = this._context,
        n = e.id;
      (this._resource = t.getCurrentData().resourceStore[n]),
        t.emitter.trigger('resourceChange', {
          oldResource: new Vd(t, e),
          resource: this,
          revert() {
            t.dispatch({ type: 'ADD_RESOURCE', resourceHash: { [n]: e } });
          },
        });
    }
    remove() {
      let e = this._context,
        t = this._resource,
        n = t.id;
      e.dispatch({ type: 'REMOVE_RESOURCE', resourceId: n }),
        e.emitter.trigger('resourceRemove', {
          resource: this,
          revert() {
            e.dispatch({ type: 'ADD_RESOURCE', resourceHash: { [n]: t } });
          },
        });
    }
    getParent() {
      let e = this._context,
        t = this._resource.parentId;
      return t ? new Vd(e, e.getCurrentData().resourceStore[t]) : null;
    }
    getChildren() {
      let e = this._resource.id,
        t = this._context,
        { resourceStore: n } = t.getCurrentData(),
        r = [];
      for (let i in n) n[i].parentId === e && r.push(new Vd(t, n[i]));
      return r;
    }
    getEvents() {
      let e = this._resource.id,
        t = this._context,
        { defs: n, instances: r } = t.getCurrentData().eventStore,
        i = [];
      for (let s in r) {
        let o = r[s],
          l = n[o.defId];
        -1 !== l.resourceIds.indexOf(e) && i.push(new oi(t, l, o));
      }
      return i;
    }
    get id() {
      return Fd(this._resource.id);
    }
    get title() {
      return this._resource.title;
    }
    get eventConstraint() {
      return this._resource.ui.constraints[0] || null;
    }
    get eventOverlap() {
      return this._resource.ui.overlap;
    }
    get eventAllow() {
      return this._resource.ui.allows[0] || null;
    }
    get eventBackgroundColor() {
      return this._resource.ui.backgroundColor;
    }
    get eventBorderColor() {
      return this._resource.ui.borderColor;
    }
    get eventTextColor() {
      return this._resource.ui.textColor;
    }
    get eventClassNames() {
      return this._resource.ui.classNames;
    }
    get extendedProps() {
      return this._resource.extendedProps;
    }
    toPlainObject(e = {}) {
      let t = this._resource,
        { ui: n } = t,
        r = this.id,
        i = {};
      return (
        r && (i.id = r),
        t.title && (i.title = t.title),
        e.collapseEventColor && n.backgroundColor && n.backgroundColor === n.borderColor
          ? (i.eventColor = n.backgroundColor)
          : (n.backgroundColor && (i.eventBackgroundColor = n.backgroundColor),
            n.borderColor && (i.eventBorderColor = n.borderColor)),
        n.textColor && (i.eventTextColor = n.textColor),
        n.classNames.length && (i.eventClassNames = n.classNames),
        Object.keys(t.extendedProps).length &&
          (e.collapseExtendedProps ? Object.assign(i, t.extendedProps) : (i.extendedProps = t.extendedProps)),
        i
      );
    }
    toJSON() {
      return this.toPlainObject();
    }
  }
  class qd extends Yi {
    getKeyInfo(e) {
      return Object.assign({ '': {} }, e.resourceStore);
    }
    getKeysForDateSpan(e) {
      return [e.resourceId || ''];
    }
    getKeysForEventDef(e) {
      let t = e.resourceIds;
      return t.length ? t : [''];
    }
  }
  const Yd = tt('id,title');
  function Qd(e) {
    return { resource: new Vd(e.context, e.resource) };
  }
  class Zd extends Xn {
    constructor() {
      super(...arguments), (this.refineRenderProps = Zt($d));
    }
    render() {
      const { props: e } = this;
      return g(Yn.Consumer, null, (t) => {
        let { options: n } = t,
          r = this.refineRenderProps({ resource: e.resource, date: e.date, context: t });
        return g(
          rr,
          Object.assign({}, e, {
            elAttrs: Object.assign(Object.assign({}, e.elAttrs), {
              'data-resource-id': e.resource.id,
              'data-date': e.date ? Ft(e.date) : void 0,
            }),
            renderProps: r,
            generatorName: 'resourceLabelContent',
            customGenerator: n.resourceLabelContent,
            defaultGenerator: Xd,
            classNameGenerator: n.resourceLabelClassNames,
            didMount: n.resourceLabelDidMount,
            willUnmount: n.resourceLabelWillUnmount,
          }),
        );
      });
    }
  }
  function Xd(e) {
    return e.resource.title || e.resource.id;
  }
  function $d(e) {
    return {
      resource: new Vd(e.context, e.resource),
      date: e.date ? e.context.dateEnv.toDate(e.date) : null,
      view: e.context.viewApi,
    };
  }
  class Jd extends Xn {
    render() {
      let { props: e } = this;
      return g(
        Zd,
        {
          elTag: 'th',
          elClasses: ['fc-col-header-cell', 'fc-resource'],
          elAttrs: { role: 'columnheader', colSpan: e.colSpan },
          resource: e.resource,
          date: e.date,
        },
        (t) =>
          g(
            'div',
            { className: 'fc-scrollgrid-sync-inner' },
            g(t, { elTag: 'span', elClasses: ['fc-col-header-cell-cushion', e.isSticky && 'fc-sticky'] }),
          ),
      );
    }
  }
  class Kd extends Xn {
    constructor() {
      super(...arguments), (this.buildDateFormat = Qt(eu));
    }
    render() {
      let { props: e, context: t } = this,
        n = this.buildDateFormat(t.options.dayHeaderFormat, e.datesRepDistinctDays, e.dates.length);
      return g(Os, { unit: 'day' }, (r, i) =>
        1 === e.dates.length
          ? this.renderResourceRow(e.resources, e.dates[0])
          : t.options.datesAboveResources
            ? this.renderDayAndResourceRows(e.dates, n, i, e.resources)
            : this.renderResourceAndDayRows(e.resources, e.dates, n, i),
      );
    }
    renderResourceRow(e, t) {
      let n = e.map((e) => g(Jd, { key: e.id, resource: e, colSpan: 1, date: t }));
      return this.buildTr(n, 'resources');
    }
    renderDayAndResourceRows(e, t, n, r) {
      let i = [],
        s = [];
      for (let o of e) {
        i.push(this.renderDateCell(o, t, n, r.length, null, !0));
        for (let e of r) s.push(g(Jd, { key: e.id + ':' + o.toISOString(), resource: e, colSpan: 1, date: o }));
      }
      return g(v, null, this.buildTr(i, 'day'), this.buildTr(s, 'resources'));
    }
    renderResourceAndDayRows(e, t, n, r) {
      let i = [],
        s = [];
      for (let o of e) {
        i.push(g(Jd, { key: o.id, resource: o, colSpan: t.length, isSticky: !0 }));
        for (let e of t) s.push(this.renderDateCell(e, n, r, 1, o));
      }
      return g(v, null, this.buildTr(i, 'resources'), this.buildTr(s, 'day'));
    }
    renderDateCell(e, t, n, r, i, s) {
      let { props: o } = this,
        l = i ? ':' + i.id : '',
        a = i ? { resource: new Vd(this.context, i) } : {},
        c = i ? { 'data-resource-id': i.id } : {};
      return o.datesRepDistinctDays
        ? g(ks, {
            key: e.toISOString() + l,
            date: e,
            dateProfile: o.dateProfile,
            todayRange: n,
            colCnt: o.dates.length * o.resources.length,
            dayHeaderFormat: t,
            colSpan: r,
            isSticky: s,
            extraRenderProps: a,
            extraDataAttrs: c,
          })
        : g(Is, {
            key: e.getUTCDay() + l,
            dow: e.getUTCDay(),
            dayHeaderFormat: t,
            colSpan: r,
            isSticky: s,
            extraRenderProps: a,
            extraDataAttrs: c,
          });
    }
    buildTr(e, t) {
      let { renderIntro: n } = this.props;
      return e.length || (e = [g('td', { key: 0 }, ' ')]), g('tr', { key: t, role: 'row' }, n && n(t), e);
    }
  }
  function eu(e, t, n) {
    return e || xs(t, n);
  }
  class tu {
    constructor(e) {
      let t = {},
        n = [];
      for (let r = 0; r < e.length; r += 1) {
        let i = e[r].id;
        n.push(i), (t[i] = r);
      }
      (this.ids = n), (this.indicesById = t), (this.length = e.length);
    }
  }
  class nu {
    constructor(e, t, n) {
      (this.dayTableModel = e),
        (this.resources = t),
        (this.context = n),
        (this.resourceIndex = new tu(t)),
        (this.rowCnt = e.rowCnt),
        (this.colCnt = e.colCnt * t.length),
        (this.cells = this.buildCells());
    }
    buildCells() {
      let { rowCnt: e, dayTableModel: t, resources: n } = this,
        r = [];
      for (let i = 0; i < e; i += 1) {
        let e = [];
        for (let r = 0; r < t.colCnt; r += 1)
          for (let s = 0; s < n.length; s += 1) {
            let o = n[s],
              l = { resource: new Vd(this.context, o) },
              a = { 'data-resource-id': o.id },
              c = ['fc-resource'],
              d = { resourceId: o.id },
              u = t.cells[i][r].date;
            e[this.computeCol(r, s)] = {
              key: o.id + ':' + u.toISOString(),
              date: u,
              extraRenderProps: l,
              extraDataAttrs: a,
              extraClassNames: c,
              extraDateSpan: d,
            };
          }
        r.push(e);
      }
      return r;
    }
  }
  class ru extends nu {
    computeCol(e, t) {
      return t * this.dayTableModel.colCnt + e;
    }
    computeColRanges(e, t, n) {
      return [{ firstCol: this.computeCol(e, n), lastCol: this.computeCol(t, n), isStart: !0, isEnd: !0 }];
    }
  }
  class iu extends nu {
    computeCol(e, t) {
      return e * this.resources.length + t;
    }
    computeColRanges(e, t, n) {
      let r = [];
      for (let i = e; i <= t; i += 1) {
        let s = this.computeCol(i, n);
        r.push({ firstCol: s, lastCol: s, isStart: i === e, isEnd: i === t });
      }
      return r;
    }
  }
  const su = [];
  class ou {
    constructor() {
      (this.joinDateSelection = Qt(this.joinSegs)),
        (this.joinBusinessHours = Qt(this.joinSegs)),
        (this.joinFgEvents = Qt(this.joinSegs)),
        (this.joinBgEvents = Qt(this.joinSegs)),
        (this.joinEventDrags = Qt(this.joinInteractions)),
        (this.joinEventResizes = Qt(this.joinInteractions));
    }
    joinProps(e, t) {
      let n = [],
        r = [],
        i = [],
        s = [],
        o = [],
        l = [],
        a = '',
        c = t.resourceIndex.ids.concat(['']);
      for (let t of c) {
        let c = e[t];
        n.push(c.dateSelectionSegs),
          r.push(t ? c.businessHourSegs : su),
          i.push(t ? c.fgEventSegs : su),
          s.push(c.bgEventSegs),
          o.push(c.eventDrag),
          l.push(c.eventResize),
          (a = a || c.eventSelection);
      }
      return {
        dateSelectionSegs: this.joinDateSelection(t, ...n),
        businessHourSegs: this.joinBusinessHours(t, ...r),
        fgEventSegs: this.joinFgEvents(t, ...i),
        bgEventSegs: this.joinBgEvents(t, ...s),
        eventDrag: this.joinEventDrags(t, ...o),
        eventResize: this.joinEventResizes(t, ...l),
        eventSelection: a,
      };
    }
    joinSegs(e, ...t) {
      let n = e.resources.length,
        r = [];
      for (let i = 0; i < n; i += 1) {
        for (let n of t[i]) r.push(...this.transformSeg(n, e, i));
        for (let s of t[n]) r.push(...this.transformSeg(s, e, i));
      }
      return r;
    }
    expandSegs(e, t) {
      let n = e.resources.length,
        r = [];
      for (let i = 0; i < n; i += 1) for (let n of t) r.push(...this.transformSeg(n, e, i));
      return r;
    }
    joinInteractions(e, ...t) {
      let n = e.resources.length,
        r = {},
        i = [],
        s = !1,
        o = !1;
      for (let l = 0; l < n; l += 1) {
        let a = t[l];
        if (a) {
          s = !0;
          for (let t of a.segs) i.push(...this.transformSeg(t, e, l));
          Object.assign(r, a.affectedInstances), (o = o || a.isEvent);
        }
        if (t[n]) for (let r of t[n].segs) i.push(...this.transformSeg(r, e, l));
      }
      return s ? { affectedInstances: r, segs: i, isEvent: o } : null;
    }
  }
  class lu extends Yi {
    getKeyInfo(e) {
      let { resourceDayTableModel: t } = e,
        n = xn(t.resourceIndex.indicesById, (e) => t.resources[e]);
      return (n[''] = {}), n;
    }
    getKeysForDateSpan(e) {
      return [e.resourceId || ''];
    }
    getKeysForEventDef(e) {
      let t = e.resourceIds;
      return t.length ? t : [''];
    }
  }
  function au(e, t) {
    return cu(e, [], t, !1, {}, !0).map((e) => e.resource);
  }
  function cu(e, t, n, r, i, s) {
    let o = [];
    return (
      (function e(t, n, r, i, s, o, l) {
        for (let a = 0; a < t.length; a += 1) {
          let c = t[a],
            d = c.group;
          if (d)
            if (r) {
              let t = n.length,
                a = i.length;
              if ((e(c.children, n, r, i.concat(0), s, o, l), t < n.length)) {
                let e = n[t];
                (e.rowSpans = e.rowSpans.slice())[a] = n.length - t;
              }
            } else {
              let t = d.spec.field + ':' + d.value,
                a = null != o[t] ? o[t] : l;
              n.push({ id: t, group: d, isExpanded: a }), a && e(c.children, n, r, i, s + 1, o, l);
            }
          else if (c.resource) {
            let t = c.resource.id,
              a = null != o[t] ? o[t] : l;
            n.push({
              id: t,
              rowSpans: i,
              depth: s,
              isExpanded: a,
              hasChildren: Boolean(c.children.length),
              resource: c.resource,
              resourceFields: c.resourceFields,
            }),
              a && e(c.children, n, r, i, s + 1, o, l);
          }
        }
      })(
        (function (e, t, n, r) {
          let i = (function (e, t) {
              let n = {};
              for (let t in e) {
                let r = e[t];
                n[t] = { resource: r, resourceFields: hu(r), children: [] };
              }
              for (let r in e) {
                let i = e[r];
                if (i.parentId) {
                  let e = n[i.parentId];
                  e && uu(n[r], e.children, t);
                }
              }
              return n;
            })(e, r),
            s = [];
          for (let e in i) {
            let o = i[e];
            o.resource.parentId || du(o, s, n, 0, t, r);
          }
          return s;
        })(e, r ? -1 : 1, t, n),
        o,
        r,
        [],
        0,
        i,
        s,
      ),
      o
    );
  }
  function du(e, t, n, r, i, s) {
    if (n.length && (-1 === i || r <= i)) {
      du(
        e,
        (function (e, t, n) {
          let r,
            i,
            s = e.resourceFields[n.field];
          if (n.order)
            for (i = 0; i < t.length; i += 1) {
              let e = t[i];
              if (e.group) {
                let t = it(s, e.group.value) * n.order;
                if (0 === t) {
                  r = e;
                  break;
                }
                if (t < 0) break;
              }
            }
          else
            for (i = 0; i < t.length; i += 1) {
              let e = t[i];
              if (e.group && s === e.group.value) {
                r = e;
                break;
              }
            }
          r || ((r = { group: { value: s, spec: n }, children: [] }), t.splice(i, 0, r));
          return r;
        })(e, t, n[0]).children,
        n.slice(1),
        r + 1,
        i,
        s,
      );
    } else uu(e, t, s);
  }
  function uu(e, t, n) {
    let r;
    for (r = 0; r < t.length; r += 1) {
      if (nt(t[r].resourceFields, e.resourceFields, n) > 0) break;
    }
    t.splice(r, 0, e);
  }
  function hu(e) {
    let t = Object.assign(Object.assign(Object.assign({}, e.extendedProps), e.ui), e);
    return delete t.ui, delete t.extendedProps, t;
  }
  function fu(e, t) {
    let { resourceEditable: n } = e;
    if (null == n) {
      let r = e.sourceId && t.getCurrentData().eventSources[e.sourceId];
      r && (n = r.extendedProps.resourceEditable),
        null == n && ((n = t.options.eventResourceEditable), null == n && (n = t.options.editable));
    }
    return n;
  }
  function pu(e, t, n, r) {
    if (t) {
      let t = (function (e, t) {
        let n = {};
        for (let r in e) {
          let i = e[r];
          for (let e of t[i.defId].resourceIds) n[e] = !0;
        }
        return n;
      })(
        (function (e, t) {
          return An(e, (e) => ur(e.range, t));
        })(n.instances, r),
        n.defs,
      );
      return (
        Object.assign(
          t,
          (function (e, t) {
            let n = {};
            for (let r in e) {
              let e;
              for (; (e = t[r]) && ((r = e.parentId), r); ) n[r] = !0;
            }
            return n;
          })(t, e),
        ),
        An(e, (e, n) => t[n])
      );
    }
    return e;
  }
  function gu(e) {
    return xn(e, (e) => e.ui);
  }
  function mu(e, t, n) {
    return xn(e, (e, r) =>
      r
        ? (function (e, t, n) {
            let r = [];
            for (let e of t.resourceIds) n[e] && r.unshift(n[e]);
            return r.unshift(e), Lr(r);
          })(e, t[r], n)
        : e,
    );
  }
  let vu = [];
  function yu(e) {
    vu.push(e);
  }
  function bu(e) {
    return vu[e];
  }
  function Su() {
    return vu;
  }
  const Eu = {
    id: String,
    resources: wn,
    url: String,
    method: String,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    extraParams: wn,
  };
  function Cu(e) {
    let t;
    if (
      ('string' == typeof e
        ? (t = { url: e })
        : 'function' == typeof e || Array.isArray(e)
          ? (t = { resources: e })
          : 'object' == typeof e && e && (t = e),
      t)
    ) {
      let { refined: n, extra: r } = Cn(t, Eu);
      !(function (e) {
        for (let t in e) console.warn(`Unknown resource prop '${t}'`);
      })(r);
      let i = (function (e) {
        let t = Su();
        for (let n = t.length - 1; n >= 0; n -= 1) {
          let r = t[n].parseMeta(e);
          if (r) return { meta: r, sourceDefId: n };
        }
        return null;
      })(n);
      if (i)
        return {
          _raw: e,
          sourceId: Qe(),
          sourceDefId: i.sourceDefId,
          meta: i.meta,
          publicId: n.id || '',
          isFetching: !1,
          latestFetchId: '',
          fetchRange: null,
        };
    }
    return null;
  }
  function wu(e, t, n) {
    let { options: r, dateProfile: i } = n;
    if (!e || !t) return Du(r.initialResources || r.resources, i.activeRange, r.refetchResourcesOnNavigate, n);
    switch (t.type) {
      case 'RESET_RESOURCE_SOURCE':
        return Du(t.resourceSourceInput, i.activeRange, r.refetchResourcesOnNavigate, n);
      case 'PREV':
      case 'NEXT':
      case 'CHANGE_DATE':
      case 'CHANGE_VIEW_TYPE':
        return (function (e, t, n, r) {
          if (
            n &&
            !(function (e) {
              return Boolean(bu(e.sourceDefId).ignoreRange);
            })(e) &&
            (!e.fetchRange || !dr(e.fetchRange, t))
          )
            return Ru(e, t, r);
          return e;
        })(e, i.activeRange, r.refetchResourcesOnNavigate, n);
      case 'RECEIVE_RESOURCES':
      case 'RECEIVE_RESOURCE_ERROR':
        return (function (e, t, n) {
          if (t === e.latestFetchId) return Object.assign(Object.assign({}, e), { isFetching: !1, fetchRange: n });
          return e;
        })(e, t.fetchId, t.fetchRange);
      case 'REFETCH_RESOURCES':
        return Ru(e, i.activeRange, n);
      default:
        return e;
    }
  }
  function Du(e, t, n, r) {
    if (e) {
      let i = Cu(e);
      return (i = Ru(i, n ? t : null, r)), i;
    }
    return null;
  }
  function Ru(e, t, n) {
    let r = bu(e.sourceDefId),
      i = Qe();
    return (
      r.fetch(
        { resourceSource: e, range: t, context: n },
        (e) => {
          n.dispatch({ type: 'RECEIVE_RESOURCES', fetchId: i, fetchRange: t, rawResources: e.rawResources });
        },
        (e) => {
          n.dispatch({ type: 'RECEIVE_RESOURCE_ERROR', fetchId: i, fetchRange: t, error: e });
        },
      ),
      Object.assign(Object.assign({}, e), { isFetching: !0, latestFetchId: i })
    );
  }
  function Au(e, t, n, r) {
    if (!e || !t) return {};
    switch (t.type) {
      case 'RECEIVE_RESOURCES':
        return (function (e, t, n, r, i) {
          if (r.latestFetchId === n) {
            let e = {};
            for (let n of t) Gd(n, '', e, i);
            return e;
          }
          return e;
        })(e, t.rawResources, t.fetchId, n, r);
      case 'ADD_RESOURCE':
        return (i = e), (s = t.resourceHash), Object.assign(Object.assign({}, i), s);
      case 'REMOVE_RESOURCE':
        return (function (e, t) {
          let n = Object.assign({}, e);
          delete n[t];
          for (let e in n) n[e].parentId === t && (n[e] = Object.assign(Object.assign({}, n[e]), { parentId: '' }));
          return n;
        })(e, t.resourceId);
      case 'SET_RESOURCE_PROP':
        return (function (e, t, n, r) {
          let i = e[t];
          if (i) return Object.assign(Object.assign({}, e), { [t]: Object.assign(Object.assign({}, i), { [n]: r }) });
          return e;
        })(e, t.resourceId, t.propName, t.propValue);
      case 'SET_RESOURCE_EXTENDED_PROP':
        return (function (e, t, n, r) {
          let i = e[t];
          if (i)
            return Object.assign(Object.assign({}, e), {
              [t]: Object.assign(Object.assign({}, i), {
                extendedProps: Object.assign(Object.assign({}, i.extendedProps), { [n]: r }),
              }),
            });
          return e;
        })(e, t.resourceId, t.propName, t.propValue);
      default:
        return e;
    }
    var i, s;
  }
  const xu = { resourceId: String, resourceIds: wn, resourceEditable: Boolean };
  function Tu(e, t) {
    return Object.assign(Object.assign({}, t), { constraints: _u(e, t.constraints) });
  }
  function _u(e, t) {
    return t.map((t) => {
      let n = t.defs;
      if (n)
        for (let t in n) {
          let r = n[t].resourceIds;
          if (r.length && -1 === r.indexOf(e)) return !1;
        }
      return t;
    });
  }
  (ji.prototype.addResource = function (e, t = !0) {
    let n,
      r,
      i = this.getCurrentData();
    e instanceof Vd ? ((r = e._resource), (n = { [r.id]: r })) : ((n = {}), (r = Gd(e, '', n, i))),
      this.dispatch({ type: 'ADD_RESOURCE', resourceHash: n }),
      t && this.trigger('_scrollRequest', { resourceId: r.id });
    let s = new Vd(i, r);
    return (
      i.emitter.trigger('resourceAdd', {
        resource: s,
        revert: () => {
          this.dispatch({ type: 'REMOVE_RESOURCE', resourceId: r.id });
        },
      }),
      s
    );
  }),
    (ji.prototype.getResourceById = function (e) {
      e = String(e);
      let t = this.getCurrentData();
      if (t.resourceStore) {
        let n = t.resourceStore[e];
        if (n) return new Vd(t, n);
      }
      return null;
    }),
    (ji.prototype.getResources = function () {
      let e = this.getCurrentData(),
        { resourceStore: t } = e,
        n = [];
      if (t) for (let r in t) n.push(new Vd(e, t[r]));
      return n;
    }),
    (ji.prototype.getTopLevelResources = function () {
      let e = this.getCurrentData(),
        { resourceStore: t } = e,
        n = [];
      if (t) for (let r in t) t[r].parentId || n.push(new Vd(e, t[r]));
      return n;
    }),
    (ji.prototype.refetchResources = function () {
      this.dispatch({ type: 'REFETCH_RESOURCES' });
    });
  const ku = {
    resources: function (e, t) {
      t.getCurrentData().resourceSource._raw !== e &&
        t.dispatch({ type: 'RESET_RESOURCE_SOURCE', resourceSourceInput: e });
    },
  };
  const Mu = {
      initialResources: wn,
      resources: wn,
      eventResourceEditable: Boolean,
      refetchResourcesOnNavigate: Boolean,
      resourceOrder: tt,
      filterResourcesWithEvents: Boolean,
      resourceGroupField: String,
      resourceAreaWidth: wn,
      resourceAreaColumns: wn,
      resourcesInitiallyExpanded: Boolean,
      datesAboveResources: Boolean,
      needsResourceData: Boolean,
      resourceAreaHeaderClassNames: wn,
      resourceAreaHeaderContent: wn,
      resourceAreaHeaderDidMount: wn,
      resourceAreaHeaderWillUnmount: wn,
      resourceGroupLabelClassNames: wn,
      resourceGroupLabelContent: wn,
      resourceGroupLabelDidMount: wn,
      resourceGroupLabelWillUnmount: wn,
      resourceLabelClassNames: wn,
      resourceLabelContent: wn,
      resourceLabelDidMount: wn,
      resourceLabelWillUnmount: wn,
      resourceLaneClassNames: wn,
      resourceLaneContent: wn,
      resourceLaneDidMount: wn,
      resourceLaneWillUnmount: wn,
      resourceGroupLaneClassNames: wn,
      resourceGroupLaneContent: wn,
      resourceGroupLaneDidMount: wn,
      resourceGroupLaneWillUnmount: wn,
    },
    Iu = { resourcesSet: wn, resourceAdd: wn, resourceChange: wn, resourceRemove: wn };
  (oi.prototype.getResources = function () {
    let { calendarApi: e } = this._context;
    return this._def.resourceIds.map((t) => e.getResourceById(t));
  }),
    (oi.prototype.setResources = function (e) {
      let t = [];
      for (let n of e) {
        let e = null;
        'string' == typeof n
          ? (e = n)
          : 'number' == typeof n
            ? (e = String(n))
            : n instanceof Vd
              ? (e = n.id)
              : console.warn('unknown resource type: ' + n),
          e && t.push(e);
      }
      this.mutate({ standardProps: { resourceIds: t } });
    }),
    yu({
      ignoreRange: !0,
      parseMeta: (e) => (Array.isArray(e.resources) ? e.resources : null),
      fetch(e, t) {
        t({ rawResources: e.resourceSource.meta });
      },
    }),
    yu({
      parseMeta: (e) => ('function' == typeof e.resources ? e.resources : null),
      fetch(e, t, n) {
        const r = e.context.dateEnv,
          i = e.resourceSource.meta,
          s = e.range
            ? {
                start: r.toDate(e.range.start),
                end: r.toDate(e.range.end),
                startStr: r.formatIso(e.range.start),
                endStr: r.formatIso(e.range.end),
                timeZone: r.timeZone,
              }
            : {};
        ki(i.bind(null, s), (e) => t({ rawResources: e }), n);
      },
    }),
    yu({
      parseMeta: (e) =>
        e.url ? { url: e.url, method: (e.method || 'GET').toUpperCase(), extraParams: e.extraParams } : null,
      fetch(e, t, n) {
        const r = e.resourceSource.meta,
          i = (function (e, t, n) {
            let r,
              i,
              s,
              o,
              { dateEnv: l, options: a } = n,
              c = {};
            t &&
              ((r = e.startParam),
              null == r && (r = a.startParam),
              (i = e.endParam),
              null == i && (i = a.endParam),
              (s = e.timeZoneParam),
              null == s && (s = a.timeZoneParam),
              (c[r] = l.formatIso(t.start)),
              (c[i] = l.formatIso(t.end)),
              'local' !== l.timeZone && (c[s] = l.timeZone));
            o = 'function' == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
            return Object.assign(c, o), c;
          })(r, e.range, e.context);
        Ii(r.method, r.url, i).then(([e, n]) => {
          t({ rawResources: e, response: n });
        }, n);
      },
    });
  var Ou = zo({
    name: '@fullcalendar/resource',
    premiumReleaseDate: '2024-07-12',
    deps: [Wc],
    reducers: [
      function (e, t, n) {
        let r = wu(e && e.resourceSource, t, n);
        return {
          resourceSource: r,
          resourceStore: Au(e && e.resourceStore, t, r, n),
          resourceEntityExpansions: (function (e, t) {
            if (!e || !t) return {};
            switch (t.type) {
              case 'SET_RESOURCE_ENTITY_EXPANDED':
                return Object.assign(Object.assign({}, e), { [t.id]: t.isExpanded });
              default:
                return e;
            }
          })(e && e.resourceEntityExpansions, t),
        };
      },
    ],
    isLoadingFuncs: [(e) => e.resourceSource && e.resourceSource.isFetching],
    eventRefiners: xu,
    eventDefMemberAdders: [
      function (e) {
        return {
          resourceIds: ((t = e.resourceIds), (t || []).map((e) => String(e))).concat(
            e.resourceId ? [e.resourceId] : [],
          ),
          resourceEditable: e.resourceEditable,
        };
        var t;
      },
    ],
    isDraggableTransformers: [
      function (e, t, n, r) {
        if (!e) {
          let e = r.getCurrentData();
          if (e.viewSpecs[e.currentViewType].optionDefaults.needsResourceData && fu(t, r)) return !0;
        }
        return e;
      },
    ],
    eventDragMutationMassagers: [
      function (e, t, n) {
        let r = t.dateSpan.resourceId,
          i = n.dateSpan.resourceId;
        r && i && r !== i && (e.resourceMutation = { matchResourceId: r, setResourceId: i });
      },
    ],
    eventDefMutationAppliers: [
      function (e, t, n) {
        let r = t.resourceMutation;
        if (r && fu(e, n)) {
          let t = e.resourceIds.indexOf(r.matchResourceId);
          if (-1 !== t) {
            let n = e.resourceIds.slice();
            n.splice(t, 1), -1 === n.indexOf(r.setResourceId) && n.push(r.setResourceId), (e.resourceIds = n);
          }
        }
      },
    ],
    dateSelectionTransformers: [
      function (e, t) {
        let n = e.dateSpan.resourceId,
          r = t.dateSpan.resourceId;
        return n && r ? { resourceId: n } : null;
      },
    ],
    datePointTransforms: [
      function (e, t) {
        return e.resourceId ? { resource: t.calendarApi.getResourceById(e.resourceId) } : {};
      },
    ],
    dateSpanTransforms: [
      function (e, t) {
        return e.resourceId ? { resource: t.calendarApi.getResourceById(e.resourceId) } : {};
      },
    ],
    viewPropsTransformers: [
      class {
        constructor() {
          this.filterResources = Qt(pu);
        }
        transform(e, t) {
          return t.viewSpec.optionDefaults.needsResourceData
            ? {
                resourceStore: this.filterResources(
                  t.resourceStore,
                  t.options.filterResourcesWithEvents,
                  t.eventStore,
                  t.dateProfile.activeRange,
                ),
                resourceEntityExpansions: t.resourceEntityExpansions,
              }
            : null;
        }
      },
      class {
        constructor() {
          (this.buildResourceEventUis = Qt(gu, kn)), (this.injectResourceEventUis = Qt(mu));
        }
        transform(e, t) {
          return t.viewSpec.optionDefaults.needsResourceData
            ? null
            : {
                eventUiBases: this.injectResourceEventUis(
                  e.eventUiBases,
                  e.eventStore.defs,
                  this.buildResourceEventUis(t.resourceStore),
                ),
              };
        }
      },
    ],
    isPropsValid: function (e, t) {
      let n = new qd().splitProps(
        Object.assign(Object.assign({}, e), { resourceStore: t.getCurrentData().resourceStore }),
      );
      for (let e in n) {
        let r = n[e];
        if (
          (e &&
            n[''] &&
            (r = Object.assign(Object.assign({}, r), {
              eventStore: Nr(n[''].eventStore, r.eventStore),
              eventUiBases: Object.assign(Object.assign({}, n[''].eventUiBases), r.eventUiBases),
            })),
          !Fs(r, t, { resourceId: e }, Tu.bind(null, e)))
        )
          return !1;
      }
      return !0;
    },
    externalDefTransforms: [
      function (e) {
        return e.resourceId ? { resourceId: e.resourceId } : {};
      },
    ],
    eventDropTransformers: [
      function (e, t) {
        let { resourceMutation: n } = e;
        if (n) {
          let { calendarApi: e } = t;
          return { oldResource: e.getResourceById(n.matchResourceId), newResource: e.getResourceById(n.setResourceId) };
        }
        return { oldResource: null, newResource: null };
      },
    ],
    optionChangeHandlers: ku,
    optionRefiners: Mu,
    listenerRefiners: Iu,
    propSetHandlers: {
      resourceStore: function (e, t) {
        let { emitter: n } = t;
        n.hasHandlers('resourcesSet') &&
          n.trigger(
            'resourcesSet',
            (function (e, t) {
              let n = [];
              for (let r in e) n.push(new Vd(t, e[r]));
              return n;
            })(e, t),
          );
      },
    },
  });
  class Nu extends ou {
    transformSeg(e, t, n) {
      return t.computeColRanges(e.firstCol, e.lastCol, n).map((t) =>
        Object.assign(Object.assign(Object.assign({}, e), t), {
          isStart: e.isStart && t.isStart,
          isEnd: e.isEnd && t.isEnd,
        }),
      );
    }
  }
  class Pu extends gs {
    constructor() {
      super(...arguments),
        (this.splitter = new lu()),
        (this.slicers = {}),
        (this.joiner = new Nu()),
        (this.tableRef = { current: null }),
        (this.isHitComboAllowed = (e, t) =>
          1 === this.props.resourceDayTableModel.dayTableModel.colCnt ||
          e.dateSpan.resourceId === t.dateSpan.resourceId);
    }
    render() {
      let { props: e, context: t } = this,
        { resourceDayTableModel: n, nextDayThreshold: r, dateProfile: i } = e,
        s = this.splitter.splitProps(e);
      this.slicers = xn(s, (e, t) => this.slicers[t] || new ka());
      let o = xn(this.slicers, (e, o) => e.sliceProps(s[o], i, r, t, n.dayTableModel));
      return g(
        _a,
        Object.assign({ forPrint: e.forPrint, ref: this.tableRef }, this.joiner.joinProps(o, n), {
          cells: n.cells,
          dateProfile: i,
          colGroupNode: e.colGroupNode,
          tableMinWidth: e.tableMinWidth,
          renderRowIntro: e.renderRowIntro,
          dayMaxEvents: e.dayMaxEvents,
          dayMaxEventRows: e.dayMaxEventRows,
          showWeekNumbers: e.showWeekNumbers,
          expandRows: e.expandRows,
          headerAlignElRef: e.headerAlignElRef,
          clientWidth: e.clientWidth,
          clientHeight: e.clientHeight,
          isHitComboAllowed: this.isHitComboAllowed,
        }),
      );
    }
  }
  function Hu(e, t, n, r, i) {
    let s = Ia(e, t);
    return r ? new iu(s, n, i) : new ru(s, n, i);
  }
  var Wu = zo({
    name: '@fullcalendar/resource-daygrid',
    premiumReleaseDate: '2024-07-12',
    deps: [Wc, Ou, Pa],
    initialView: 'resourceDayGridDay',
    views: {
      resourceDayGrid: {
        type: 'dayGrid',
        component: class extends la {
          constructor() {
            super(...arguments),
              (this.flattenResources = Qt(au)),
              (this.buildResourceDayTableModel = Qt(Hu)),
              (this.headerRef = { current: null }),
              (this.tableRef = { current: null });
          }
          render() {
            let { props: e, context: t } = this,
              { options: n } = t,
              r = n.resourceOrder || Yd,
              i = this.flattenResources(e.resourceStore, r),
              s = this.buildResourceDayTableModel(e.dateProfile, t.dateProfileGenerator, i, n.datesAboveResources, t),
              o =
                n.dayHeaders &&
                g(Kd, {
                  ref: this.headerRef,
                  resources: i,
                  dateProfile: e.dateProfile,
                  dates: s.dayTableModel.headerDates,
                  datesRepDistinctDays: !0,
                }),
              l = (t) =>
                g(Pu, {
                  ref: this.tableRef,
                  dateProfile: e.dateProfile,
                  resourceDayTableModel: s,
                  businessHours: e.businessHours,
                  eventStore: e.eventStore,
                  eventUiBases: e.eventUiBases,
                  dateSelection: e.dateSelection,
                  eventSelection: e.eventSelection,
                  eventDrag: e.eventDrag,
                  eventResize: e.eventResize,
                  nextDayThreshold: n.nextDayThreshold,
                  tableMinWidth: t.tableMinWidth,
                  colGroupNode: t.tableColGroupNode,
                  dayMaxEvents: n.dayMaxEvents,
                  dayMaxEventRows: n.dayMaxEventRows,
                  showWeekNumbers: n.weekNumbers,
                  expandRows: !e.isHeightAuto,
                  headerAlignElRef: this.headerElRef,
                  clientWidth: t.clientWidth,
                  clientHeight: t.clientHeight,
                  forPrint: e.forPrint,
                });
            return n.dayMinWidth
              ? this.renderHScrollLayout(o, l, s.colCnt, n.dayMinWidth)
              : this.renderSimpleLayout(o, l);
          }
        },
        needsResourceData: !0,
      },
      resourceDayGridDay: { type: 'resourceDayGrid', duration: { days: 1 } },
      resourceDayGridWeek: { type: 'resourceDayGrid', duration: { weeks: 1 } },
      resourceDayGridMonth: { type: 'resourceDayGrid', duration: { months: 1 }, fixedWeekCount: !0 },
    },
  });
  class Bu extends ou {
    transformSeg(e, t, n) {
      return [Object.assign(Object.assign({}, e), { col: t.computeCol(e.col, n) })];
    }
  }
  class ju extends gs {
    constructor() {
      super(...arguments),
        (this.buildDayRanges = Qt(fc)),
        (this.splitter = new lu()),
        (this.slicers = {}),
        (this.joiner = new Bu()),
        (this.timeColsRef = { current: null }),
        (this.isHitComboAllowed = (e, t) =>
          1 === this.dayRanges.length || e.dateSpan.resourceId === t.dateSpan.resourceId);
    }
    render() {
      let { props: e, context: t } = this,
        { dateEnv: n, options: r } = t,
        { dateProfile: i, resourceDayTableModel: s } = e,
        o = (this.dayRanges = this.buildDayRanges(s.dayTableModel, i, n)),
        l = this.splitter.splitProps(e);
      this.slicers = xn(l, (e, t) => this.slicers[t] || new uc());
      let a = xn(this.slicers, (e, n) => e.sliceProps(l[n], i, null, t, o));
      return g(Os, { unit: r.nowIndicator ? 'minute' : 'day' }, (t, n) =>
        g(
          cc,
          Object.assign({ ref: this.timeColsRef }, this.joiner.joinProps(a, s), {
            dateProfile: i,
            axis: e.axis,
            slotDuration: e.slotDuration,
            slatMetas: e.slatMetas,
            cells: s.cells[0],
            tableColGroupNode: e.tableColGroupNode,
            tableMinWidth: e.tableMinWidth,
            clientWidth: e.clientWidth,
            clientHeight: e.clientHeight,
            expandRows: e.expandRows,
            nowDate: t,
            nowIndicatorSegs: r.nowIndicator && this.buildNowIndicatorSegs(t),
            todayRange: n,
            onScrollTopRequest: e.onScrollTopRequest,
            forPrint: e.forPrint,
            onSlatCoords: e.onSlatCoords,
            isHitComboAllowed: this.isHitComboAllowed,
          }),
        ),
      );
    }
    buildNowIndicatorSegs(e) {
      let t = this.slicers[''].sliceNowDate(
        e,
        this.props.dateProfile,
        this.context.options.nextDayThreshold,
        this.context,
        this.dayRanges,
      );
      return this.joiner.expandSegs(this.props.resourceDayTableModel, t);
    }
  }
  function Lu(e, t, n, r, i) {
    let s = mc(e, t);
    return r ? new iu(s, n, i) : new ru(s, n, i);
  }
  var zu = zo({
    name: '@fullcalendar/resource-timegrid',
    premiumReleaseDate: '2024-07-12',
    deps: [Wc, Ou, vc],
    initialView: 'resourceTimeGridDay',
    views: {
      resourceTimeGrid: {
        type: 'timeGrid',
        component: class extends Ua {
          constructor() {
            super(...arguments),
              (this.flattenResources = Qt(au)),
              (this.buildResourceTimeColsModel = Qt(Lu)),
              (this.buildSlatMetas = Qt(gc));
          }
          render() {
            let { props: e, context: t } = this,
              { options: n, dateEnv: r } = t,
              { dateProfile: i } = e,
              s = this.allDaySplitter.splitProps(e),
              o = n.resourceOrder || Yd,
              l = this.flattenResources(e.resourceStore, o),
              a = this.buildResourceTimeColsModel(i, t.dateProfileGenerator, l, n.datesAboveResources, t),
              c = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, n.slotLabelInterval, n.slotDuration, r),
              { dayMinWidth: d } = n,
              u = !d,
              h = d,
              f =
                n.dayHeaders &&
                g(Kd, {
                  resources: l,
                  dates: a.dayTableModel.headerDates,
                  dateProfile: i,
                  datesRepDistinctDays: !0,
                  renderIntro: u ? this.renderHeadAxis : null,
                }),
              p =
                !1 !== n.allDaySlot &&
                ((t) =>
                  g(
                    Pu,
                    Object.assign(
                      {},
                      s.allDay,
                      {
                        dateProfile: i,
                        resourceDayTableModel: a,
                        nextDayThreshold: n.nextDayThreshold,
                        tableMinWidth: t.tableMinWidth,
                        colGroupNode: t.tableColGroupNode,
                        renderRowIntro: u ? this.renderTableRowAxis : null,
                        showWeekNumbers: !1,
                        expandRows: !1,
                        headerAlignElRef: this.headerElRef,
                        clientWidth: t.clientWidth,
                        clientHeight: t.clientHeight,
                        forPrint: e.forPrint,
                      },
                      this.getAllDayMaxEventProps(),
                    ),
                  )),
              m = (t) =>
                g(
                  ju,
                  Object.assign({}, s.timed, {
                    dateProfile: i,
                    axis: u,
                    slotDuration: n.slotDuration,
                    slatMetas: c,
                    resourceDayTableModel: a,
                    tableColGroupNode: t.tableColGroupNode,
                    tableMinWidth: t.tableMinWidth,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    onSlatCoords: this.handleSlatCoords,
                    expandRows: t.expandRows,
                    forPrint: e.forPrint,
                    onScrollTopRequest: this.handleScrollTopRequest,
                  }),
                );
            return h
              ? this.renderHScrollLayout(f, p, m, a.colCnt, d, c, this.state.slatCoords)
              : this.renderSimpleLayout(f, p, m);
          }
        },
        needsResourceData: !0,
      },
      resourceTimeGridDay: { type: 'resourceTimeGrid', duration: { days: 1 } },
      resourceTimeGridWeek: { type: 'resourceTimeGrid', duration: { weeks: 1 } },
    },
  });
  function Uu({ depth: e, hasChildren: t, isExpanded: n, onExpanderClick: r }) {
    let i = [];
    for (let t = 0; t < e; t += 1) i.push(g('span', { className: 'fc-icon' }));
    let s = ['fc-icon'];
    return (
      t && (n ? s.push('fc-icon-minus-square') : s.push('fc-icon-plus-square')),
      i.push(
        g(
          'span',
          { className: 'fc-datagrid-expander' + (t ? '' : ' fc-datagrid-expander-placeholder'), onClick: r },
          g('span', { className: s.join(' ') }),
        ),
      ),
      g(v, {}, ...i)
    );
  }
  class Gu extends Xn {
    constructor() {
      super(...arguments),
        (this.refineRenderProps = Zt(Vu)),
        (this.onExpanderClick = (e) => {
          let { props: t } = this;
          t.hasChildren &&
            this.context.dispatch({
              type: 'SET_RESOURCE_ENTITY_EXPANDED',
              id: t.resource.id,
              isExpanded: !t.isExpanded,
            });
        });
    }
    render() {
      let { props: e, context: t } = this,
        { colSpec: n } = e,
        r = this.refineRenderProps({ resource: e.resource, fieldValue: e.fieldValue, context: t });
      return g(
        rr,
        {
          elTag: 'td',
          elClasses: ['fc-datagrid-cell', 'fc-resource'],
          elAttrs: { role: 'gridcell', 'data-resource-id': e.resource.id },
          renderProps: r,
          generatorName: n.isMain ? 'resourceLabelContent' : void 0,
          customGenerator: n.cellContent,
          defaultGenerator: Fu,
          classNameGenerator: n.cellClassNames,
          didMount: n.cellDidMount,
          willUnmount: n.cellWillUnmount,
        },
        (t) =>
          g(
            'div',
            { className: 'fc-datagrid-cell-frame', style: { height: e.innerHeight } },
            g(
              'div',
              { className: 'fc-datagrid-cell-cushion fc-scrollgrid-sync-inner' },
              n.isMain &&
                g(Uu, {
                  depth: e.depth,
                  hasChildren: e.hasChildren,
                  isExpanded: e.isExpanded,
                  onExpanderClick: this.onExpanderClick,
                }),
              g(t, { elTag: 'span', elClasses: ['fc-datagrid-cell-main'] }),
            ),
          ),
      );
    }
  }
  function Fu(e) {
    return e.fieldValue || g(v, null, ' ');
  }
  function Vu(e) {
    return { resource: new Vd(e.context, e.resource), fieldValue: e.fieldValue, view: e.context.viewApi };
  }
  class qu extends Xn {
    render() {
      let { props: e, context: t } = this,
        { colSpec: n } = e,
        r = { groupValue: e.fieldValue, view: t.viewApi };
      return g(
        rr,
        {
          elTag: 'td',
          elClasses: ['fc-datagrid-cell', 'fc-resource-group'],
          elAttrs: { role: 'gridcell', rowSpan: e.rowSpan },
          renderProps: r,
          generatorName: 'resourceGroupLabelContent',
          customGenerator: n.cellContent,
          defaultGenerator: Yu,
          classNameGenerator: n.cellClassNames,
          didMount: n.cellDidMount,
          willUnmount: n.cellWillUnmount,
        },
        (e) =>
          g(
            'div',
            { className: 'fc-datagrid-cell-frame fc-datagrid-cell-frame-liquid' },
            g(e, { elTag: 'div', elClasses: ['fc-datagrid-cell-cushion', 'fc-sticky'] }),
          ),
      );
    }
  }
  function Yu(e) {
    return e.groupValue || g(v, null, ' ');
  }
  class Qu extends Xn {
    render() {
      let { props: e } = this,
        { resource: t, rowSpans: n, depth: r } = e,
        i = hu(t);
      return g(
        'tr',
        { role: 'row' },
        e.colSpecs.map((s, o) => {
          let l = n[o];
          if (0 === l) return null;
          null == l && (l = 1);
          let a = s.field ? i[s.field] : t.title || Fd(t.id);
          return l > 1
            ? g(qu, { key: o, colSpec: s, fieldValue: a, rowSpan: l })
            : g(Gu, {
                key: o,
                colSpec: s,
                resource: t,
                fieldValue: a,
                depth: r,
                hasChildren: e.hasChildren,
                isExpanded: e.isExpanded,
                innerHeight: e.innerHeight,
              });
        }),
      );
    }
  }
  Qu.addPropsEquality({ rowSpans: Dt });
  class Zu extends Xn {
    constructor() {
      super(...arguments),
        (this.innerInnerRef = { current: null }),
        (this.onExpanderClick = () => {
          let { props: e } = this;
          this.context.dispatch({ type: 'SET_RESOURCE_ENTITY_EXPANDED', id: e.id, isExpanded: !e.isExpanded });
        });
    }
    render() {
      let { props: e, context: t } = this,
        n = { groupValue: e.group.value, view: t.viewApi },
        r = e.group.spec;
      return g(
        'tr',
        { role: 'row' },
        g(
          rr,
          {
            elTag: 'th',
            elClasses: ['fc-datagrid-cell', 'fc-resource-group', t.theme.getClass('tableCellShaded')],
            elAttrs: { role: 'columnheader', scope: 'colgroup', colSpan: e.spreadsheetColCnt },
            renderProps: n,
            generatorName: 'resourceGroupLabelContent',
            customGenerator: r.labelContent,
            defaultGenerator: Xu,
            classNameGenerator: r.labelClassNames,
            didMount: r.labelDidMount,
            willUnmount: r.labelWillUnmount,
          },
          (t) =>
            g(
              'div',
              { className: 'fc-datagrid-cell-frame', style: { height: e.innerHeight } },
              g(
                'div',
                { className: 'fc-datagrid-cell-cushion fc-scrollgrid-sync-inner', ref: this.innerInnerRef },
                g(Uu, { depth: 0, hasChildren: !0, isExpanded: e.isExpanded, onExpanderClick: this.onExpanderClick }),
                g(t, { elTag: 'span', elClasses: ['fc-datagrid-cell-main'] }),
              ),
            ),
        ),
      );
    }
  }
  function Xu(e) {
    return e.groupValue || g(v, null, ' ');
  }
  Zu.addPropsEquality({
    group: function (e, t) {
      return e.spec === t.spec && e.value === t.value;
    },
  });
  class $u extends Xn {
    constructor() {
      super(...arguments), (this.resizerElRefs = new $s(this._handleColResizerEl.bind(this))), (this.colDraggings = {});
    }
    render() {
      let { colSpecs: e, superHeaderRendering: t, rowInnerHeights: n } = this.props,
        r = { view: this.context.viewApi },
        i = [];
      if (((n = n.slice()), t)) {
        let s = n.shift();
        i.push(
          g(
            'tr',
            { key: 'row-super', role: 'row' },
            g(
              rr,
              {
                elTag: 'th',
                elClasses: ['fc-datagrid-cell', 'fc-datagrid-cell-super'],
                elAttrs: { role: 'columnheader', scope: 'colgroup', colSpan: e.length },
                renderProps: r,
                generatorName: 'resourceAreaHeaderContent',
                customGenerator: t.headerContent,
                defaultGenerator: t.headerDefault,
                classNameGenerator: t.headerClassNames,
                didMount: t.headerDidMount,
                willUnmount: t.headerWillUnmount,
              },
              (e) =>
                g(
                  'div',
                  { className: 'fc-datagrid-cell-frame', style: { height: s } },
                  g(e, { elTag: 'div', elClasses: ['fc-datagrid-cell-cushion', 'fc-scrollgrid-sync-inner'] }),
                ),
            ),
          ),
        );
      }
      let s = n.shift();
      return (
        i.push(
          g(
            'tr',
            { key: 'row', role: 'row' },
            e.map((t, n) => {
              let i = n === e.length - 1;
              return g(
                rr,
                {
                  key: n,
                  elTag: 'th',
                  elClasses: ['fc-datagrid-cell'],
                  elAttrs: { role: 'columnheader' },
                  renderProps: r,
                  generatorName: 'resourceAreaHeaderContent',
                  customGenerator: t.headerContent,
                  defaultGenerator: t.headerDefault,
                  classNameGenerator: t.headerClassNames,
                  didMount: t.headerDidMount,
                  willUnmount: t.headerWillUnmount,
                },
                (e) =>
                  g(
                    'div',
                    { className: 'fc-datagrid-cell-frame', style: { height: s } },
                    g(
                      'div',
                      { className: 'fc-datagrid-cell-cushion fc-scrollgrid-sync-inner' },
                      t.isMain &&
                        g(
                          'span',
                          { className: 'fc-datagrid-expander fc-datagrid-expander-placeholder' },
                          g('span', { className: 'fc-icon' }),
                        ),
                      g(e, { elTag: 'span', elClasses: ['fc-datagrid-cell-main'] }),
                    ),
                    !i && g('div', { className: 'fc-datagrid-cell-resizer', ref: this.resizerElRefs.createRef(n) }),
                  ),
              );
            }),
          ),
        ),
        g(v, null, i)
      );
    }
    _handleColResizerEl(e, t) {
      let { colDraggings: n } = this;
      if (e) {
        let r = this.initColResizing(e, parseInt(t, 10));
        r && (n[t] = r);
      } else {
        let e = n[t];
        e && (e.destroy(), delete n[t]);
      }
    }
    initColResizing(e, t) {
      let { pluginHooks: n, isRtl: r } = this.context,
        { onColWidthChange: i } = this.props,
        s = n.elementDraggingImpl;
      if (s) {
        let n,
          o,
          l = new s(e);
        return (
          l.emitter.on('dragstart', () => {
            let r = Oe(Me(e, 'tr'), 'th');
            (o = r.map((e) => e.getBoundingClientRect().width)), (n = o[t]);
          }),
          l.emitter.on('dragmove', (e) => {
            (o[t] = Math.max(n + e.deltaX * (r ? -1 : 1), 20)), i && i(o.slice());
          }),
          l.setAutoScrollEnabled(!1),
          l
        );
      }
      return null;
    }
  }
  class Ju extends Xn {
    constructor() {
      super(...arguments),
        (this.refineRenderProps = Zt(Qd)),
        (this.handleHeightChange = (e, t) => {
          this.props.onHeightChange && this.props.onHeightChange(Me(e, 'tr'), t);
        });
    }
    render() {
      let { props: e, context: t } = this,
        { options: n } = t,
        r = this.refineRenderProps({ resource: e.resource, context: t });
      return g(
        'tr',
        { ref: e.elRef },
        g(
          rr,
          {
            elTag: 'td',
            elClasses: ['fc-timeline-lane', 'fc-resource'],
            elAttrs: { 'data-resource-id': e.resource.id },
            renderProps: r,
            generatorName: 'resourceLaneContent',
            customGenerator: n.resourceLaneContent,
            classNameGenerator: n.resourceLaneClassNames,
            didMount: n.resourceLaneDidMount,
            willUnmount: n.resourceLaneWillUnmount,
          },
          (t) =>
            g(
              'div',
              { className: 'fc-timeline-lane-frame', style: { height: e.innerHeight } },
              g(t, { elTag: 'div', elClasses: ['fc-timeline-lane-misc'] }),
              g(Bd, {
                dateProfile: e.dateProfile,
                tDateProfile: e.tDateProfile,
                nowDate: e.nowDate,
                todayRange: e.todayRange,
                nextDayThreshold: e.nextDayThreshold,
                businessHours: e.businessHours,
                eventStore: e.eventStore,
                eventUiBases: e.eventUiBases,
                dateSelection: e.dateSelection,
                eventSelection: e.eventSelection,
                eventDrag: e.eventDrag,
                eventResize: e.eventResize,
                timelineCoords: e.timelineCoords,
                onHeightChange: this.handleHeightChange,
                resourceId: e.resource.id,
              }),
            ),
        ),
      );
    }
  }
  class Ku extends Xn {
    render() {
      let { props: e, context: t } = this,
        { renderHooks: n } = e,
        r = { groupValue: e.groupValue, view: t.viewApi };
      return g(
        'tr',
        { ref: e.elRef },
        g(
          rr,
          {
            elTag: 'td',
            elRef: e.elRef,
            elClasses: ['fc-timeline-lane', 'fc-resource-group', t.theme.getClass('tableCellShaded')],
            renderProps: r,
            generatorName: 'resourceGroupLaneContent',
            customGenerator: n.laneContent,
            classNameGenerator: n.laneClassNames,
            didMount: n.laneDidMount,
            willUnmount: n.laneWillUnmount,
          },
          (t) => g(t, { elTag: 'div', elStyle: { height: e.innerHeight } }),
        ),
      );
    }
  }
  class eh extends Xn {
    render() {
      let { props: e, context: t } = this,
        { rowElRefs: n, innerHeights: r } = e;
      return g(
        'tbody',
        null,
        e.rowNodes.map((i, s) => {
          if (i.group)
            return g(Ku, {
              key: i.id,
              elRef: n.createRef(i.id),
              groupValue: i.group.value,
              renderHooks: i.group.spec,
              innerHeight: r[s] || '',
            });
          if (i.resource) {
            let o = i.resource;
            return g(
              Ju,
              Object.assign({ key: i.id, elRef: n.createRef(i.id) }, e.splitProps[o.id], {
                resource: o,
                dateProfile: e.dateProfile,
                tDateProfile: e.tDateProfile,
                nowDate: e.nowDate,
                todayRange: e.todayRange,
                nextDayThreshold: t.options.nextDayThreshold,
                businessHours: o.businessHours || e.fallbackBusinessHours,
                innerHeight: r[s] || '',
                timelineCoords: e.slatCoords,
                onHeightChange: e.onRowHeightChange,
              }),
            );
          }
          return null;
        }),
      );
    }
  }
  class th extends Xn {
    constructor() {
      super(...arguments), (this.rootElRef = { current: null }), (this.rowElRefs = new $s());
    }
    render() {
      let { props: e, context: t } = this;
      return g(
        'table',
        {
          ref: this.rootElRef,
          'aria-hidden': !0,
          className: 'fc-scrollgrid-sync-table ' + t.theme.getClass('table'),
          style: { minWidth: e.tableMinWidth, width: e.clientWidth, height: e.minHeight },
        },
        g(eh, {
          rowElRefs: this.rowElRefs,
          rowNodes: e.rowNodes,
          dateProfile: e.dateProfile,
          tDateProfile: e.tDateProfile,
          nowDate: e.nowDate,
          todayRange: e.todayRange,
          splitProps: e.splitProps,
          fallbackBusinessHours: e.fallbackBusinessHours,
          slatCoords: e.slatCoords,
          innerHeights: e.innerHeights,
          onRowHeightChange: e.onRowHeightChange,
        }),
      );
    }
    componentDidMount() {
      this.updateCoords();
    }
    componentDidUpdate() {
      this.updateCoords();
    }
    componentWillUnmount() {
      this.props.onRowCoords && this.props.onRowCoords(null);
    }
    updateCoords() {
      let { props: e } = this;
      var t;
      e.onRowCoords &&
        null !== e.clientWidth &&
        this.props.onRowCoords(
          new ds(this.rootElRef.current, ((t = this.rowElRefs.currentMap), e.rowNodes.map((e) => t[e.id])), !1, !0),
        );
    }
  }
  class nh extends gs {
    constructor() {
      super(...arguments),
        (this.computeHasResourceBusinessHours = Qt(rh)),
        (this.resourceSplitter = new qd()),
        (this.bgSlicer = new Nd()),
        (this.slatsRef = { current: null }),
        (this.state = { slatCoords: null }),
        (this.handleEl = (e) => {
          e
            ? this.context.registerInteractiveComponent(this, { el: e })
            : this.context.unregisterInteractiveComponent(this);
        }),
        (this.handleSlatCoords = (e) => {
          this.setState({ slatCoords: e }), this.props.onSlatCoords && this.props.onSlatCoords(e);
        }),
        (this.handleRowCoords = (e) => {
          (this.rowCoords = e), this.props.onRowCoords && this.props.onRowCoords(e);
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        { dateProfile: r, tDateProfile: i } = e,
        s = Ct(i.slotDuration).unit,
        o = this.computeHasResourceBusinessHours(e.rowNodes),
        l = this.resourceSplitter.splitProps(e),
        a = l[''],
        c = this.bgSlicer.sliceProps(
          a,
          r,
          i.isTimeScale ? null : e.nextDayThreshold,
          n,
          r,
          n.dateProfileGenerator,
          i,
          n.dateEnv,
        ),
        d = t.slatCoords && t.slatCoords.dateProfile === e.dateProfile ? t.slatCoords : null;
      return g(
        'div',
        {
          ref: this.handleEl,
          className: ['fc-timeline-body', e.expandRows ? 'fc-timeline-body-expandrows' : ''].join(' '),
          style: { minWidth: e.tableMinWidth },
        },
        g(Os, { unit: s }, (t, s) =>
          g(
            v,
            null,
            g(Md, {
              ref: this.slatsRef,
              dateProfile: r,
              tDateProfile: i,
              nowDate: t,
              todayRange: s,
              clientWidth: e.clientWidth,
              tableColGroupNode: e.tableColGroupNode,
              tableMinWidth: e.tableMinWidth,
              onCoords: this.handleSlatCoords,
              onScrollLeftRequest: e.onScrollLeftRequest,
            }),
            g(Od, {
              businessHourSegs: o ? null : c.businessHourSegs,
              bgEventSegs: c.bgEventSegs,
              timelineCoords: d,
              eventResizeSegs: c.eventResize ? c.eventResize.segs : [],
              dateSelectionSegs: c.dateSelectionSegs,
              nowDate: t,
              todayRange: s,
            }),
            g(th, {
              rowNodes: e.rowNodes,
              dateProfile: r,
              tDateProfile: e.tDateProfile,
              nowDate: t,
              todayRange: s,
              splitProps: l,
              fallbackBusinessHours: o ? e.businessHours : null,
              clientWidth: e.clientWidth,
              minHeight: e.expandRows ? e.clientHeight : '',
              tableMinWidth: e.tableMinWidth,
              innerHeights: e.rowInnerHeights,
              slatCoords: d,
              onRowCoords: this.handleRowCoords,
              onRowHeightChange: e.onRowHeightChange,
            }),
            n.options.nowIndicator &&
              d &&
              d.isDateInRange(t) &&
              g(
                'div',
                { className: 'fc-timeline-now-indicator-container' },
                g(mo, {
                  elClasses: ['fc-timeline-now-indicator-line'],
                  elStyle: Ad(d.dateToCoord(t), n.isRtl),
                  isAxis: !1,
                  date: t,
                }),
              ),
          ),
        ),
      );
    }
    queryHit(e, t) {
      let n = this.rowCoords,
        r = n.topToIndex(t);
      if (null != r) {
        let t = this.props.rowNodes[r].resource;
        if (t) {
          let i = this.slatsRef.current.positionToHit(e);
          if (i)
            return {
              dateProfile: this.props.dateProfile,
              dateSpan: { range: i.dateSpan.range, allDay: i.dateSpan.allDay, resourceId: t.id },
              rect: { left: i.left, right: i.right, top: n.tops[r], bottom: n.bottoms[r] },
              dayEl: i.dayEl,
              layer: 0,
            };
        }
      }
      return null;
    }
  }
  function rh(e) {
    for (let t of e) {
      let e = t.resource;
      if (e && e.businessHours) return !0;
    }
    return !1;
  }
  class ih extends Xn {
    constructor() {
      super(...arguments),
        (this.scrollGridRef = { current: null }),
        (this.timeBodyScrollerElRef = { current: null }),
        (this.spreadsheetHeaderChunkElRef = { current: null }),
        (this.rootElRef = { current: null }),
        (this.ensureScrollGridResizeId = 0),
        (this.state = { resourceAreaWidthOverride: null }),
        (this.ensureScrollGridResize = () => {
          this.ensureScrollGridResizeId && clearTimeout(this.ensureScrollGridResizeId),
            (this.ensureScrollGridResizeId = setTimeout(() => {
              this.scrollGridRef.current.handleSizing(!1);
            }, Ds.SCROLLGRID_RESIZE_INTERVAL + 1));
        });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        { options: r } = n,
        i = !e.forPrint && co(r),
        s = !e.forPrint && uo(r),
        o = [
          {
            type: 'header',
            key: 'header',
            syncRowHeights: !0,
            isSticky: i,
            chunks: [
              {
                key: 'datagrid',
                elRef: this.spreadsheetHeaderChunkElRef,
                tableClassName: 'fc-datagrid-header',
                rowContent: e.spreadsheetHeaderRows,
              },
              {
                key: 'divider',
                outerContent: g('td', {
                  role: 'presentation',
                  className: 'fc-resource-timeline-divider ' + n.theme.getClass('tableCellShaded'),
                }),
              },
              { key: 'timeline', content: e.timeHeaderContent },
            ],
          },
          {
            type: 'body',
            key: 'body',
            syncRowHeights: !0,
            liquid: !0,
            expandRows: Boolean(r.expandRows),
            chunks: [
              { key: 'datagrid', tableClassName: 'fc-datagrid-body', rowContent: e.spreadsheetBodyRows },
              {
                key: 'divider',
                outerContent: g('td', {
                  role: 'presentation',
                  className: 'fc-resource-timeline-divider ' + n.theme.getClass('tableCellShaded'),
                }),
              },
              { key: 'timeline', scrollerElRef: this.timeBodyScrollerElRef, content: e.timeBodyContent },
            ],
          },
        ];
      s &&
        o.push({
          type: 'footer',
          key: 'footer',
          isSticky: !0,
          chunks: [
            { key: 'datagrid', content: ao },
            {
              key: 'divider',
              outerContent: g('td', {
                role: 'presentation',
                className: 'fc-resource-timeline-divider ' + n.theme.getClass('tableCellShaded'),
              }),
            },
            { key: 'timeline', content: ao },
          ],
        });
      let l = null != t.resourceAreaWidthOverride ? t.resourceAreaWidthOverride : r.resourceAreaWidth;
      return g(Yc, {
        ref: this.scrollGridRef,
        elRef: this.rootElRef,
        liquid: !e.isHeightAuto && !e.forPrint,
        forPrint: e.forPrint,
        collapsibleWidth: !1,
        colGroups: [{ cols: e.spreadsheetCols, width: l }, { cols: [] }, { cols: e.timeCols }],
        sections: o,
      });
    }
    forceTimeScroll(e) {
      this.scrollGridRef.current.forceScrollLeft(2, e);
    }
    forceResourceScroll(e) {
      this.scrollGridRef.current.forceScrollTop(1, e);
    }
    getResourceScroll() {
      return this.timeBodyScrollerElRef.current.scrollTop;
    }
    componentDidMount() {
      this.initSpreadsheetResizing();
    }
    componentWillUnmount() {
      this.destroySpreadsheetResizing();
    }
    initSpreadsheetResizing() {
      let { isRtl: e, pluginHooks: t } = this.context,
        n = t.elementDraggingImpl,
        r = this.spreadsheetHeaderChunkElRef.current;
      if (n) {
        let t,
          i,
          s = this.rootElRef.current,
          o = (this.spreadsheetResizerDragging = new n(s, '.fc-resource-timeline-divider'));
        o.emitter.on('dragstart', () => {
          (t = r.getBoundingClientRect().width), (i = s.getBoundingClientRect().width);
        }),
          o.emitter.on('dragmove', (n) => {
            let r = t + n.deltaX * (e ? -1 : 1);
            (r = Math.max(r, 30)),
              (r = Math.min(r, i - 30)),
              this.setState({ resourceAreaWidthOverride: r }, this.ensureScrollGridResize);
          }),
          o.setAutoScrollEnabled(!1);
      }
    }
    destroySpreadsheetResizing() {
      this.spreadsheetResizerDragging && this.spreadsheetResizerDragging.destroy();
    }
  }
  class sh extends Xn {
    constructor(e, t) {
      super(e, t),
        (this.processColOptions = Qt(ch)),
        (this.buildTimelineDateProfile = Qt(fd)),
        (this.hasNesting = Qt(ah)),
        (this.buildRowNodes = Qt(cu)),
        (this.layoutRef = { current: null }),
        (this.rowNodes = []),
        (this.renderedRowNodes = []),
        (this.buildRowIndex = Qt(oh)),
        (this.handleSlatCoords = (e) => {
          this.setState({ slatCoords: e });
        }),
        (this.handleRowCoords = (e) => {
          (this.rowCoords = e), this.scrollResponder.update(!1);
        }),
        (this.handleMaxCushionWidth = (e) => {
          this.setState({ slotCushionMaxWidth: Math.ceil(e) });
        }),
        (this.handleScrollLeftRequest = (e) => {
          this.layoutRef.current.forceTimeScroll(e);
        }),
        (this.handleScrollRequest = (e) => {
          let { rowCoords: t } = this,
            n = this.layoutRef.current,
            r = e.rowId || e.resourceId;
          if (t) {
            if (r) {
              let i = this.buildRowIndex(this.renderedRowNodes)[r];
              if (null != i) {
                let r = null != e.fromBottom ? t.bottoms[i] - e.fromBottom : t.tops[i];
                n.forceResourceScroll(r);
              }
            }
            return !0;
          }
          return null;
        }),
        (this.handleColWidthChange = (e) => {
          this.setState({ spreadsheetColWidths: e });
        }),
        (this.state = { resourceAreaWidth: t.options.resourceAreaWidth, spreadsheetColWidths: [] });
    }
    render() {
      let { props: e, state: t, context: n } = this,
        { options: r, viewSpec: i } = n,
        {
          superHeaderRendering: s,
          groupSpecs: o,
          orderSpecs: l,
          isVGrouping: a,
          colSpecs: c,
        } = this.processColOptions(n.options),
        d = this.buildTimelineDateProfile(e.dateProfile, n.dateEnv, r, n.dateProfileGenerator),
        u = (this.rowNodes = this.buildRowNodes(
          e.resourceStore,
          o,
          l,
          a,
          e.resourceEntityExpansions,
          r.resourcesInitiallyExpanded,
        )),
        { slotMinWidth: h } = r,
        f = Ld(d, h || this.computeFallbackSlotMinWidth(d));
      return g(
        sr,
        {
          elClasses: [
            'fc-resource-timeline',
            !this.hasNesting(u) && 'fc-resource-timeline-flat',
            'fc-timeline',
            !1 === r.eventOverlap ? 'fc-timeline-overlap-disabled' : 'fc-timeline-overlap-enabled',
          ],
          viewSpec: i,
        },
        g(ih, {
          ref: this.layoutRef,
          forPrint: e.forPrint,
          isHeightAuto: e.isHeightAuto,
          spreadsheetCols: lh(c, t.spreadsheetColWidths, ''),
          spreadsheetHeaderRows: (e) =>
            g($u, {
              superHeaderRendering: s,
              colSpecs: c,
              onColWidthChange: this.handleColWidthChange,
              rowInnerHeights: e.rowSyncHeights,
            }),
          spreadsheetBodyRows: (e) => g(v, null, this.renderSpreadsheetRows(u, c, e.rowSyncHeights)),
          timeCols: f,
          timeHeaderContent: (n) =>
            g(Td, {
              clientWidth: n.clientWidth,
              clientHeight: n.clientHeight,
              tableMinWidth: n.tableMinWidth,
              tableColGroupNode: n.tableColGroupNode,
              dateProfile: e.dateProfile,
              tDateProfile: d,
              slatCoords: t.slatCoords,
              rowInnerHeights: n.rowSyncHeights,
              onMaxCushionWidth: h ? null : this.handleMaxCushionWidth,
            }),
          timeBodyContent: (t) =>
            g(nh, {
              dateProfile: e.dateProfile,
              clientWidth: t.clientWidth,
              clientHeight: t.clientHeight,
              tableMinWidth: t.tableMinWidth,
              tableColGroupNode: t.tableColGroupNode,
              expandRows: t.expandRows,
              tDateProfile: d,
              rowNodes: u,
              businessHours: e.businessHours,
              dateSelection: e.dateSelection,
              eventStore: e.eventStore,
              eventUiBases: e.eventUiBases,
              eventSelection: e.eventSelection,
              eventDrag: e.eventDrag,
              eventResize: e.eventResize,
              resourceStore: e.resourceStore,
              nextDayThreshold: n.options.nextDayThreshold,
              rowInnerHeights: t.rowSyncHeights,
              onSlatCoords: this.handleSlatCoords,
              onRowCoords: this.handleRowCoords,
              onScrollLeftRequest: this.handleScrollLeftRequest,
              onRowHeightChange: t.reportRowHeightChange,
            }),
        }),
      );
    }
    renderSpreadsheetRows(e, t, n) {
      return e.map((e, r) =>
        e.group
          ? g(Zu, {
              key: e.id,
              id: e.id,
              spreadsheetColCnt: t.length,
              isExpanded: e.isExpanded,
              group: e.group,
              innerHeight: n[r] || '',
            })
          : e.resource
            ? g(Qu, {
                key: e.id,
                colSpecs: t,
                rowSpans: e.rowSpans,
                depth: e.depth,
                isExpanded: e.isExpanded,
                hasChildren: e.hasChildren,
                resource: e.resource,
                innerHeight: n[r] || '',
              })
            : null,
      );
    }
    componentDidMount() {
      (this.renderedRowNodes = this.rowNodes),
        (this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest));
    }
    getSnapshotBeforeUpdate() {
      return this.props.forPrint ? {} : { resourceScroll: this.queryResourceScroll() };
    }
    componentDidUpdate(e, t, n) {
      (this.renderedRowNodes = this.rowNodes),
        this.scrollResponder.update(e.dateProfile !== this.props.dateProfile),
        n.resourceScroll && this.handleScrollRequest(n.resourceScroll);
    }
    componentWillUnmount() {
      this.scrollResponder.detach();
    }
    computeFallbackSlotMinWidth(e) {
      return Math.max(30, (this.state.slotCushionMaxWidth || 0) / e.slotsPerLabel);
    }
    queryResourceScroll() {
      let { rowCoords: e, renderedRowNodes: t } = this;
      if (e) {
        let n = this.layoutRef.current,
          r = e.bottoms,
          i = n.getResourceScroll(),
          s = {};
        for (let e = 0; e < r.length; e += 1) {
          let n = t[e],
            o = r[e] - i;
          if (o > 0) {
            (s.rowId = n.id), (s.fromBottom = o);
            break;
          }
        }
        return s;
      }
      return null;
    }
  }
  function oh(e) {
    let t = {};
    for (let n = 0; n < e.length; n += 1) t[e[n].id] = n;
    return t;
  }
  function lh(e, t, n = '') {
    return e.map((e, r) => ({ className: e.isMain ? 'fc-main-col' : '', width: t[r] || e.width || n }));
  }
  function ah(e) {
    for (let t of e) {
      if (t.group) return !0;
      if (t.resource && t.hasChildren) return !0;
    }
    return !1;
  }
  function ch(e) {
    let t = e.resourceAreaColumns || [],
      n = null;
    t.length
      ? e.resourceAreaHeaderContent &&
        (n = {
          headerClassNames: e.resourceAreaHeaderClassNames,
          headerContent: e.resourceAreaHeaderContent,
          headerDidMount: e.resourceAreaHeaderDidMount,
          headerWillUnmount: e.resourceAreaHeaderWillUnmount,
        })
      : t.push({
          headerClassNames: e.resourceAreaHeaderClassNames,
          headerContent: e.resourceAreaHeaderContent,
          headerDefault: () => 'Resources',
          headerDidMount: e.resourceAreaHeaderDidMount,
          headerWillUnmount: e.resourceAreaHeaderWillUnmount,
        });
    let r = [],
      i = [],
      s = [],
      o = !1;
    for (let n of t)
      n.group
        ? i.push(
            Object.assign(Object.assign({}, n), {
              cellClassNames: n.cellClassNames || e.resourceGroupLabelClassNames,
              cellContent: n.cellContent || e.resourceGroupLabelContent,
              cellDidMount: n.cellDidMount || e.resourceGroupLabelDidMount,
              cellWillUnmount: n.cellWillUnmount || e.resourceGroupLaneWillUnmount,
            }),
          )
        : r.push(n);
    let l = r[0];
    if (
      ((l.isMain = !0),
      (l.cellClassNames = l.cellClassNames || e.resourceLabelClassNames),
      (l.cellContent = l.cellContent || e.resourceLabelContent),
      (l.cellDidMount = l.cellDidMount || e.resourceLabelDidMount),
      (l.cellWillUnmount = l.cellWillUnmount || e.resourceLabelWillUnmount),
      i.length)
    )
      (s = i), (o = !0);
    else {
      let t = e.resourceGroupField;
      t &&
        s.push({
          field: t,
          labelClassNames: e.resourceGroupLabelClassNames,
          labelContent: e.resourceGroupLabelContent,
          labelDidMount: e.resourceGroupLabelDidMount,
          labelWillUnmount: e.resourceGroupLabelWillUnmount,
          laneClassNames: e.resourceGroupLaneClassNames,
          laneContent: e.resourceGroupLaneContent,
          laneDidMount: e.resourceGroupLaneDidMount,
          laneWillUnmount: e.resourceGroupLaneWillUnmount,
        });
    }
    let a = e.resourceOrder || Yd,
      c = [];
    for (let e of a) {
      let t = !1;
      for (let n of s)
        if (n.field === e.field) {
          (n.order = e.order), (t = !0);
          break;
        }
      t || c.push(e);
    }
    return { superHeaderRendering: n, isVGrouping: o, groupSpecs: s, colSpecs: i.concat(r), orderSpecs: c };
  }
  sh.addStateEquality({ spreadsheetColWidths: Dt });
  Re(
    '.fc .fc-resource-timeline-divider{cursor:col-resize;width:3px}.fc .fc-resource-group{font-weight:inherit;text-align:inherit}.fc .fc-resource-timeline .fc-resource-group:not([rowspan]){background:var(--fc-neutral-bg-color)}.fc .fc-timeline-lane-frame{position:relative}.fc .fc-timeline-overlap-enabled .fc-timeline-lane-frame .fc-timeline-events{box-sizing:content-box;padding-bottom:10px}.fc-timeline-body-expandrows td.fc-timeline-lane{position:relative}.fc-timeline-body-expandrows .fc-timeline-lane-frame{position:static}.fc-datagrid-cell-frame-liquid{height:100%}.fc-liquid-hack .fc-datagrid-cell-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-datagrid-header .fc-datagrid-cell-frame{align-items:center;display:flex;justify-content:flex-start;position:relative}.fc .fc-datagrid-cell-resizer{bottom:0;cursor:col-resize;position:absolute;top:0;width:5px;z-index:1}.fc .fc-datagrid-cell-cushion{overflow:hidden;padding:8px;white-space:nowrap}.fc .fc-datagrid-expander{cursor:pointer;opacity:.65}.fc .fc-datagrid-expander .fc-icon{display:inline-block;width:1em}.fc .fc-datagrid-expander-placeholder{cursor:auto}.fc .fc-resource-timeline-flat .fc-datagrid-expander-placeholder{display:none}.fc-direction-ltr .fc-datagrid-cell-resizer{right:-3px}.fc-direction-rtl .fc-datagrid-cell-resizer{left:-3px}.fc-direction-ltr .fc-datagrid-expander{margin-right:3px}.fc-direction-rtl .fc-datagrid-expander{margin-left:3px}',
  );
  var dh = zo({
    name: '@fullcalendar/resource-timeline',
    premiumReleaseDate: '2024-07-12',
    deps: [Wc, Ou, zd],
    initialView: 'resourceTimelineDay',
    views: {
      resourceTimeline: {
        type: 'timeline',
        component: sh,
        needsResourceData: !0,
        resourceAreaWidth: '30%',
        resourcesInitiallyExpanded: !0,
        eventResizableFromStart: !0,
      },
      resourceTimelineDay: { type: 'resourceTimeline', duration: { days: 1 } },
      resourceTimelineWeek: { type: 'resourceTimeline', duration: { weeks: 1 } },
      resourceTimelineMonth: { type: 'resourceTimeline', duration: { months: 1 } },
      resourceTimelineYear: { type: 'resourceTimeline', duration: { years: 1 } },
    },
  });
  return (
    gl.push(oa, Pa, vc, Ac, Nc, id, ud, zd, Ou, Wu, zu, dh),
    (e.Calendar = class extends ji {
      constructor(e, t = {}) {
        super(),
          (this.isRendering = !1),
          (this.isRendered = !1),
          (this.currentClassNames = []),
          (this.customContentRenderId = 0),
          (this.handleAction = (e) => {
            switch (e.type) {
              case 'SET_EVENT_DRAG':
              case 'SET_EVENT_RESIZE':
                this.renderRunner.tryDrain();
            }
          }),
          (this.handleData = (e) => {
            (this.currentData = e), this.renderRunner.request(e.calendarOptions.rerenderDelay);
          }),
          (this.handleRenderRequest = () => {
            if (this.isRendering) {
              this.isRendered = !0;
              let { currentData: e } = this;
              Gn(() => {
                j(
                  g(
                    Pi,
                    { options: e.calendarOptions, theme: e.theme, emitter: e.emitter },
                    (t, n, r, i) => (
                      this.setClassNames(t),
                      this.setHeight(n),
                      g(
                        nr.Provider,
                        { value: this.customContentRenderId },
                        g(Nl, Object.assign({ isHeightAuto: r, forPrint: i }, e)),
                      )
                    ),
                  ),
                  this.el,
                );
              });
            } else
              this.isRendered && ((this.isRendered = !1), j(null, this.el), this.setClassNames([]), this.setHeight(''));
          }),
          (function (e) {
            e.isConnected && e.getRootNode && Ae(e.getRootNode());
          })(e),
          (this.el = e),
          (this.renderRunner = new _e(this.handleRenderRequest)),
          new yl({ optionOverrides: t, calendarApi: this, onAction: this.handleAction, onData: this.handleData });
      }
      render() {
        let e = this.isRendering;
        e ? (this.customContentRenderId += 1) : (this.isRendering = !0),
          this.renderRunner.request(),
          e && this.updateSize();
      }
      destroy() {
        this.isRendering && ((this.isRendering = !1), this.renderRunner.request());
      }
      updateSize() {
        Gn(() => {
          super.updateSize();
        });
      }
      batchRendering(e) {
        this.renderRunner.pause('batchRendering'), e(), this.renderRunner.resume('batchRendering');
      }
      pauseRendering() {
        this.renderRunner.pause('pauseRendering');
      }
      resumeRendering() {
        this.renderRunner.resume('pauseRendering', !0);
      }
      resetOptions(e, t) {
        this.currentDataManager.resetOptions(e, t);
      }
      setClassNames(e) {
        if (!Dt(e, this.currentClassNames)) {
          let { classList: t } = this.el;
          for (let e of this.currentClassNames) t.remove(e);
          for (let n of e) t.add(n);
          this.currentClassNames = e;
        }
      }
      setHeight(e) {
        We(this.el, 'height', e);
      }
    }),
    (e.Draggable = class {
      constructor(e, t = {}) {
        (this.handlePointerDown = (e) => {
          let { dragging: t } = this,
            { minDistance: n, longPressDelay: r } = this.settings;
          (t.minDistance = null != n ? n : e.isTouch ? 0 : pn.eventDragMinDistance),
            (t.delay = e.isTouch ? (null != r ? r : pn.longPressDelay) : 0);
        }),
          (this.handleDragStart = (e) => {
            e.isTouch &&
              this.dragging.delay &&
              e.subjectEl.classList.contains('fc-event') &&
              this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
          }),
          (this.settings = t);
        let n = (this.dragging = new Zl(e));
        (n.touchScrollAllowed = !1),
          null != t.itemSelector && (n.pointer.selector = t.itemSelector),
          null != t.appendTo && (n.mirror.parentNode = t.appendTo),
          n.emitter.on('pointerdown', this.handlePointerDown),
          n.emitter.on('dragstart', this.handleDragStart),
          new ia(n, t.eventData);
      }
      destroy() {
        this.dragging.destroy();
      }
    }),
    (e.Internal = No),
    (e.JsonRequestError = Mi),
    (e.ThirdPartyDraggable = class {
      constructor(e, t) {
        let n = document;
        e === document || e instanceof Element ? ((n = e), (t = t || {})) : (t = e || {});
        let r = (this.dragging = new sa(n));
        'string' == typeof t.itemSelector
          ? (r.pointer.selector = t.itemSelector)
          : n === document && (r.pointer.selector = '[data-event]'),
          'string' == typeof t.mirrorSelector && (r.mirrorSelector = t.mirrorSelector),
          (new ia(r, t.eventData).hitDragging.disablePointCheck = !0);
      }
      destroy() {
        this.dragging.destroy();
      }
    }),
    (e.createPlugin = zo),
    (e.formatDate = function (e, t = {}) {
      let n = Wl(t),
        r = hn(t),
        i = n.createMarkerMeta(e);
      return i ? n.format(i.marker, r, { forcedTzo: i.forcedTzo }) : '';
    }),
    (e.formatRange = function (e, t, n) {
      let r = Wl('object' == typeof n && n ? n : {}),
        i = hn(n),
        s = r.createMarkerMeta(e),
        o = r.createMarkerMeta(t);
      return s && o
        ? r.formatRange(s.marker, o.marker, i, {
            forcedStartTzo: s.forcedTzo,
            forcedEndTzo: o.forcedTzo,
            isEndExclusive: n.isEndExclusive,
            defaultSeparator: pn.defaultRangeSeparator,
          })
        : '';
    }),
    (e.globalLocales = Po),
    (e.globalPlugins = gl),
    (e.sliceEvents = function (e, t) {
      return ci(e.eventStore, e.eventUiBases, e.dateProfile.activeRange, t ? e.nextDayThreshold : null).fg;
    }),
    (e.version = '6.1.15'),
    Object.defineProperty(e, '__esModule', { value: !0 }),
    e
  );
})({});
