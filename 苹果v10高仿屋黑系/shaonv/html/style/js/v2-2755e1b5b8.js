function isIE() {
    var e = navigator.userAgent.toLowerCase();
    return e.indexOf("msie") != -1 && parseInt(e.split("msie")[1])
}
function qs(e) {
    e = e.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&");
    var t = location.search.match(new RegExp("[?&]" + e + "=([^&]+)(&|$)"));
    return t && decodeURIComponent(t[1].replace(/\+/g, " "))
}
function avs(e) {
    for (var t = e.toString(), e = "", n = 0; n < t.length; n += 2) e += String.fromCharCode(parseInt(t.substr(n, 2), 16));
    return e
}
function createCookie(e, t, n) {
    if (n) {
        var r = new Date;
        r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
        var i = "; expires=" + r.toGMTString()
    } else var i = "";
    document.cookie = e + "=" + t + i + "; path=/"
}
function addUrlParam(e, t, n) {
    var r = t + "=" + n,
    i = "?" + r;
    return e && (i = e.replace(new RegExp("([?&])" + t + "[^&]*"), "$1" + r), i === e && (i += "&" + r)),
    i
}
function readCookie(e) {
    for (var t = e + "=",
    n = document.cookie.split(";"), r = 0; r < n.length; r++) {
        for (var i = n[r];
        " " == i.charAt(0);) i = i.substring(1, i.length);
        if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
    }
    return null
} !
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    }: t(e)
} ("undefined" != typeof window ? window: this,
function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length,
        n = ae.type(e);
        return "function" !== n && !ae.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function r(e, t, n) {
        if (ae.isFunction(t)) return ae.grep(e,
        function(e, r) {
            return !! t.call(e, r, e) !== n
        });
        if (t.nodeType) return ae.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (me.test(t)) return ae.filter(t, e, n);
            t = ae.filter(t, e)
        }
        return ae.grep(e,
        function(e) {
            return Z.call(t, e) > -1 !== n
        })
    }
    function i(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    function a(e) {
        var t = {};
        return ae.each(e.match(be) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function o() {
        Q.removeEventListener("DOMContentLoaded", o),
        e.removeEventListener("load", o),
        ae.ready()
    }
    function s() {
        this.expando = ae.expando + s.uid++
    }
    function l(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ze, "-$&").toLowerCase(), n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null: +n + "" === n ? +n: Me.test(n) ? ae.parseJSON(n) : n)
            } catch(i) {}
            ke.set(e, t, n)
        } else n = void 0;
        return n
    }
    function p(e, t, n, r) {
        var i, a = 1,
        o = 20,
        s = r ?
        function() {
            return r.cur()
        }: function() {
            return ae.css(e, t, "")
        },
        l = s(),
        p = n && n[3] || (ae.cssNumber[t] ? "": "px"),
        u = (ae.cssNumber[t] || "px" !== p && +l) && De.exec(ae.css(e, t));
        if (u && u[3] !== p) {
            p = p || u[3],
            n = n || [],
            u = +l || 1;
            do a = a || ".5",
            u /= a,
            ae.style(e, t, u + p);
            while (a !== (a = s() / l) && 1 !== a && --o)
        }
        return n && (u = +u || +l || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = p, r.start = u, r.end = i)),
        i
    }
    function u(e, t) {
        var n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([e], n) : n
    }
    function d(e, t) {
        for (var n = 0,
        r = e.length; r > n; n++) Ee.set(e[n], "globalEval", !t || Ee.get(t[n], "globalEval"))
    }
    function c(e, t, n, r, i) {
        for (var a, o, s, l, p, c, f = t.createDocumentFragment(), h = [], m = 0, g = e.length; g > m; m++) if (a = e[m], a || 0 === a) if ("object" === ae.type(a)) ae.merge(h, a.nodeType ? [a] : a);
        else if (Be.test(a)) {
            for (o = o || f.appendChild(t.createElement("div")), s = (Ae.exec(a) || ["", ""])[1].toLowerCase(), l = He[s] || He._default, o.innerHTML = l[1] + ae.htmlPrefilter(a) + l[2], c = l[0]; c--;) o = o.lastChild;
            ae.merge(h, o.childNodes),
            o = f.firstChild,
            o.textContent = ""
        } else h.push(t.createTextNode(a));
        for (f.textContent = "", m = 0; a = h[m++];) if (r && ae.inArray(a, r) > -1) i && i.push(a);
        else if (p = ae.contains(a.ownerDocument, a), o = u(f.appendChild(a), "script"), p && d(o), n) for (c = 0; a = o[c++];) Oe.test(a.type || "") && n.push(a);
        return f
    }
    function f() {
        return ! 0
    }
    function h() {
        return ! 1
    }
    function m() {
        try {
            return Q.activeElement
        } catch(e) {}
    }
    function g(e, t, n, r, i, a) {
        var o, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) g(e, s, n, r, t[s], a);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = h;
        else if (!i) return e;
        return 1 === a && (o = i, i = function(e) {
            return ae().off(e),
            o.apply(this, arguments)
        },
        i.guid = o.guid || (o.guid = ae.guid++)),
        e.each(function() {
            ae.event.add(this, t, i, r, n)
        })
    }
    function v(e, t) {
        return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function y(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function w(e) {
        var t = _e.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function x(e, t) {
        var n, r, i, a, o, s, l, p;
        if (1 === t.nodeType) {
            if (Ee.hasData(e) && (a = Ee.access(e), o = Ee.set(t, a), p = a.events)) {
                delete o.handle,
                o.events = {};
                for (i in p) for (n = 0, r = p[i].length; r > n; n++) ae.event.add(t, i, p[i][n])
            }
            ke.hasData(e) && (s = ke.access(e), l = ae.extend({},
            s), ke.set(t, l))
        }
    }
    function b(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ne.test(e.type) ? t.checked = e.checked: "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function T(e, t, n, r) {
        t = K.apply([], t);
        var i, a, o, s, l, p, d = 0,
        f = e.length,
        h = f - 1,
        m = t[0],
        g = ae.isFunction(m);
        if (g || f > 1 && "string" == typeof m && !re.checkClone && Ge.test(m)) return e.each(function(i) {
            var a = e.eq(i);
            g && (t[0] = m.call(this, i, a.html())),
            T(a, t, n, r)
        });
        if (f && (i = c(t, e[0].ownerDocument, !1, e, r), a = i.firstChild, 1 === i.childNodes.length && (i = a), a || r)) {
            for (o = ae.map(u(i, "script"), y), s = o.length; f > d; d++) l = i,
            d !== h && (l = ae.clone(l, !0, !0), s && ae.merge(o, u(l, "script"))),
            n.call(e[d], l, d);
            if (s) for (p = o[o.length - 1].ownerDocument, ae.map(o, w), d = 0; s > d; d++) l = o[d],
            Oe.test(l.type || "") && !Ee.access(l, "globalEval") && ae.contains(p, l) && (l.src ? ae._evalUrl && ae._evalUrl(l.src) : ae.globalEval(l.textContent.replace($e, "")))
        }
        return e
    }
    function C(e, t, n) {
        for (var r, i = t ? ae.filter(t, e) : e, a = 0; null != (r = i[a]); a++) n || 1 !== r.nodeType || ae.cleanData(u(r)),
        r.parentNode && (n && ae.contains(r.ownerDocument, r) && d(u(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    function S(e, t) {
        var n = ae(t.createElement(e)).appendTo(t.body),
        r = ae.css(n[0], "display");
        return n.detach(),
        r
    }
    function E(e) {
        var t = Q,
        n = Ve[e];
        return n || (n = S(e, t), "none" !== n && n || (Xe = (Xe || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Xe[0].contentDocument, t.write(), t.close(), n = S(e, t), Xe.detach()), Ve[e] = n),
        n
    }
    function k(e, t, n) {
        var r, i, a, o, s = e.style;
        return n = n || Ue(e),
        o = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== o && void 0 !== o || ae.contains(e.ownerDocument, e) || (o = ae.style(e, t)),
        n && !re.pixelMarginRight() && Qe.test(o) && Ye.test(t) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a),
        void 0 !== o ? o + "": o
    }
    function M(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get: (this.get = t).apply(this, arguments)
            }
        }
    }
    function z(e) {
        if (e in rt) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = nt.length; n--;) if (e = nt[n] + t, e in rt) return e
    }
    function P(e, t, n) {
        var r = De.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function D(e, t, n, r, i) {
        for (var a = n === (r ? "border": "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > a; a += 2)"margin" === n && (o += ae.css(e, n + Le[a], !0, i)),
        r ? ("content" === n && (o -= ae.css(e, "padding" + Le[a], !0, i)), "margin" !== n && (o -= ae.css(e, "border" + Le[a] + "Width", !0, i))) : (o += ae.css(e, "padding" + Le[a], !0, i), "padding" !== n && (o += ae.css(e, "border" + Le[a] + "Width", !0, i)));
        return o
    }
    function L(e, t, n) {
        var r = !0,
        i = "width" === t ? e.offsetWidth: e.offsetHeight,
        a = Ue(e),
        o = "border-box" === ae.css(e, "boxSizing", !1, a);
        if (0 >= i || null == i) {
            if (i = k(e, t, a), (0 > i || null == i) && (i = e.style[t]), Qe.test(i)) return i;
            r = o && (re.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + D(e, t, n || (o ? "border": "content"), r, a) + "px"
    }
    function I(e, t) {
        for (var n, r, i, a = [], o = 0, s = e.length; s > o; o++) r = e[o],
        r.style && (a[o] = Ee.get(r, "olddisplay"), n = r.style.display, t ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ie(r) && (a[o] = Ee.access(r, "olddisplay", E(r.nodeName)))) : (i = Ie(r), "none" === n && i || Ee.set(r, "olddisplay", i ? n: ae.css(r, "display"))));
        for (o = 0; s > o; o++) r = e[o],
        r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? a[o] || "": "none"));
        return e
    }
    function N(e, t, n, r, i) {
        return new N.prototype.init(e, t, n, r, i)
    }
    function A() {
        return e.setTimeout(function() {
            it = void 0
        }),
        it = ae.now()
    }
    function O(e, t) {
        var n, r = 0,
        i = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Le[r],
        i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function H(e, t, n) {
        for (var r, i = (q.tweeners[t] || []).concat(q.tweeners["*"]), a = 0, o = i.length; o > a; a++) if (r = i[a].call(n, t, e)) return r
    }
    function B(e, t, n) {
        var r, i, a, o, s, l, p, u, d = this,
        c = {},
        f = e.style,
        h = e.nodeType && Ie(e),
        m = Ee.get(e, "fxshow");
        n.queue || (s = ae._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
            s.unqueued || l()
        }), s.unqueued++, d.always(function() {
            d.always(function() {
                s.unqueued--,
                ae.queue(e, "fx").length || s.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], p = ae.css(e, "display"), u = "none" === p ? Ee.get(e, "olddisplay") || E(e.nodeName) : p, "inline" === u && "none" === ae.css(e, "float") && (f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden", d.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (r in t) if (i = t[r], ot.exec(i)) {
            if (delete t[r], a = a || "toggle" === i, i === (h ? "hide": "show")) {
                if ("show" !== i || !m || void 0 === m[r]) continue;
                h = !0
            }
            c[r] = m && m[r] || ae.style(e, r)
        } else p = void 0;
        if (ae.isEmptyObject(c))"inline" === ("none" === p ? E(e.nodeName) : p) && (f.display = p);
        else {
            m ? "hidden" in m && (h = m.hidden) : m = Ee.access(e, "fxshow", {}),
            a && (m.hidden = !h),
            h ? ae(e).show() : d.done(function() {
                ae(e).hide()
            }),
            d.done(function() {
                var t;
                Ee.remove(e, "fxshow");
                for (t in c) ae.style(e, t, c[t])
            });
            for (r in c) o = H(h ? m[r] : 0, r, d),
            r in m || (m[r] = o.start, h && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function j(e, t) {
        var n, r, i, a, o;
        for (n in e) if (r = ae.camelCase(n), i = t[r], a = e[n], ae.isArray(a) && (i = a[1], a = e[n] = a[0]), n !== r && (e[r] = a, delete e[n]), o = ae.cssHooks[r], o && "expand" in o) {
            a = o.expand(a),
            delete e[r];
            for (n in a) n in e || (e[n] = a[n], t[n] = i)
        } else t[r] = i
    }
    function q(e, t, n) {
        var r, i, a = 0,
        o = q.prefilters.length,
        s = ae.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (i) return ! 1;
            for (var t = it || A(), n = Math.max(0, p.startTime + p.duration - t), r = n / p.duration || 0, a = 1 - r, o = 0, l = p.tweens.length; l > o; o++) p.tweens[o].run(a);
            return s.notifyWith(e, [p, a, n]),
            1 > a && l ? n: (s.resolveWith(e, [p]), !1)
        },
        p = s.promise({
            elem: e,
            props: ae.extend({},
            t),
            opts: ae.extend(!0, {
                specialEasing: {},
                easing: ae.easing._default
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: it || A(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ae.Tween(e, p.opts, t, n, p.opts.specialEasing[t] || p.opts.easing);
                return p.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0,
                r = t ? p.tweens.length: 0;
                if (i) return this;
                for (i = !0; r > n; n++) p.tweens[n].run(1);
                return t ? (s.notifyWith(e, [p, 1, 0]), s.resolveWith(e, [p, t])) : s.rejectWith(e, [p, t]),
                this
            }
        }),
        u = p.props;
        for (j(u, p.opts.specialEasing); o > a; a++) if (r = q.prefilters[a].call(p, e, u, p.opts)) return ae.isFunction(r.stop) && (ae._queueHooks(p.elem, p.opts.queue).stop = ae.proxy(r.stop, r)),
        r;
        return ae.map(u, H, p),
        ae.isFunction(p.opts.start) && p.opts.start.call(e, p),
        ae.fx.timer(ae.extend(l, {
            elem: e,
            anim: p,
            queue: p.opts.queue
        })),
        p.progress(p.opts.progress).done(p.opts.done, p.opts.complete).fail(p.opts.fail).always(p.opts.always)
    }
    function R(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
            a = t.toLowerCase().match(be) || [];
            if (ae.isFunction(n)) for (; r = a[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function F(e, t, n, r) {
        function i(s) {
            var l;
            return a[s] = !0,
            ae.each(e[s] || [],
            function(e, s) {
                var p = s(t, n, r);
                return "string" != typeof p || o || a[p] ? o ? !(l = p) : void 0 : (t.dataTypes.unshift(p), i(p), !1)
            }),
            l
        }
        var a = {},
        o = e === kt;
        return i(t.dataTypes[0]) || !a["*"] && i("*")
    }
    function G(e, t) {
        var n, r, i = ae.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e: r || (r = {}))[n] = t[n]);
        return r && ae.extend(!0, e, r),
        e
    }
    function _(e, t, n) {
        for (var r, i, a, o, s = e.contents,
        l = e.dataTypes;
        "*" === l[0];) l.shift(),
        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            l.unshift(i);
            break
        }
        if (l[0] in n) a = l[0];
        else {
            for (i in n) {
                if (!l[0] || e.converters[i + " " + l[0]]) {
                    a = i;
                    break
                }
                o || (o = i)
            }
            a = a || o
        }
        return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
    }
    function $(e, t, n, r) {
        var i, a, o, s, l, p = {},
        u = e.dataTypes.slice();
        if (u[1]) for (o in e.converters) p[o.toLowerCase()] = e.converters[o];
        for (a = u.shift(); a;) if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift()) if ("*" === a) a = l;
        else if ("*" !== l && l !== a) {
            if (o = p[l + " " + a] || p["* " + a], !o) for (i in p) if (s = i.split(" "), s[1] === a && (o = p[l + " " + s[0]] || p["* " + s[0]])) {
                o === !0 ? o = p[i] : p[i] !== !0 && (a = s[0], u.unshift(s[1]));
                break
            }
            if (o !== !0) if (o && e["throws"]) t = o(t);
            else try {
                t = o(t)
            } catch(d) {
                return {
                    state: "parsererror",
                    error: o ? d: "No conversion from " + l + " to " + a
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function X(e, t, n, r) {
        var i;
        if (ae.isArray(t)) ae.each(t,
        function(t, i) {
            n || Dt.test(e) ? r(e, i) : X(e + "[" + ("object" == typeof i && null != i ? t: "") + "]", i, n, r)
        });
        else if (n || "object" !== ae.type(t)) r(e, t);
        else for (i in t) X(e + "[" + i + "]", t[i], n, r)
    }
    function V(e) {
        return ae.isWindow(e) ? e: 9 === e.nodeType && e.defaultView
    }
    var Y = [],
    Q = e.document,
    U = Y.slice,
    K = Y.concat,
    J = Y.push,
    Z = Y.indexOf,
    ee = {},
    te = ee.toString,
    ne = ee.hasOwnProperty,
    re = {},
    ie = "2.2.4",
    ae = function(e, t) {
        return new ae.fn.init(e, t)
    },
    oe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    se = /^-ms-/,
    le = /-([\da-z])/gi,
    pe = function(e, t) {
        return t.toUpperCase()
    };
    ae.fn = ae.prototype = {
        jquery: ie,
        constructor: ae,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : U.call(this)
        },
        pushStack: function(e) {
            var t = ae.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return ae.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ae.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: J,
        sort: Y.sort,
        splice: Y.splice
    },
    ae.extend = ae.fn.extend = function() {
        var e, t, n, r, i, a, o = arguments[0] || {},
        s = 1,
        l = arguments.length,
        p = !1;
        for ("boolean" == typeof o && (p = o, o = arguments[s] || {},
        s++), "object" == typeof o || ae.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++) if (null != (e = arguments[s])) for (t in e) n = o[t],
        r = e[t],
        o !== r && (p && r && (ae.isPlainObject(r) || (i = ae.isArray(r))) ? (i ? (i = !1, a = n && ae.isArray(n) ? n: []) : a = n && ae.isPlainObject(n) ? n: {},
        o[t] = ae.extend(p, a, r)) : void 0 !== r && (o[t] = r));
        return o
    },
    ae.extend({
        expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ae.type(e)
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return ! ae.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== ae.type(e) || e.nodeType || ae.isWindow(e)) return ! 1;
            if (e.constructor && !ne.call(e, "constructor") && !ne.call(e.constructor.prototype || {},
            "isPrototypeOf")) return ! 1;
            for (t in e);
            return void 0 === t || ne.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        type: function(e) {
            return null == e ? e + "": "object" == typeof e || "function" == typeof e ? ee[te.call(e)] || "object": typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = ae.trim(e),
            e && (1 === e.indexOf("use strict") ? (t = Q.createElement("script"), t.text = e, Q.head.appendChild(t).parentNode.removeChild(t)) : n(e))
        },
        camelCase: function(e) {
            return e.replace(se, "ms-").replace(le, pe)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e)) for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++);
            else for (i in e) if (t.call(e[i], i, e[i]) === !1) break;
            return e
        },
        trim: function(e) {
            return null == e ? "": (e + "").replace(oe, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ae.merge(r, "string" == typeof e ? [e] : e) : J.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Z.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length,
            r = 0,
            i = e.length; n > r; r++) e[i++] = t[r];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], a = 0, o = e.length, s = !n; o > a; a++) r = !t(e[a], a),
            r !== s && i.push(e[a]);
            return i
        },
        map: function(e, t, r) {
            var i, a, o = 0,
            s = [];
            if (n(e)) for (i = e.length; i > o; o++) a = t(e[o], o, r),
            null != a && s.push(a);
            else for (o in e) a = t(e[o], o, r),
            null != a && s.push(a);
            return K.apply([], s)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (n = e[t], t = e, e = n),
            ae.isFunction(e) ? (r = U.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(U.call(arguments)))
            },
            i.guid = e.guid = e.guid || ae.guid++, i) : void 0
        },
        now: Date.now,
        support: re
    }),
    "function" == typeof Symbol && (ae.fn[Symbol.iterator] = Y[Symbol.iterator]),
    ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
    function(e, t) {
        ee["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, r) {
            var i, a, o, s, l, p, d, f, h = t && t.ownerDocument,
            m = t ? t.nodeType: 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!r && ((t ? t.ownerDocument || t: R) !== I && L(t), t = t || I, A)) {
                if (11 !== m && (p = ve.exec(e))) if (i = p[1]) {
                    if (9 === m) {
                        if (! (o = t.getElementById(i))) return n;
                        if (o.id === i) return n.push(o),
                        n
                    } else if (h && (o = h.getElementById(i)) && j(t, o) && o.id === i) return n.push(o),
                    n
                } else {
                    if (p[2]) return J.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((i = p[3]) && b.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(i)),
                    n
                }
                if (b.qsa && !$[e + " "] && (!O || !O.test(e))) {
                    if (1 !== m) h = t,
                    f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(we, "\\$&") : t.setAttribute("id", s = q), d = E(e), a = d.length, l = ce.test(s) ? "#" + s: "[id='" + s + "']"; a--;) d[a] = l + " " + c(d[a]);
                        f = d.join(","),
                        h = ye.test(e) && u(t.parentNode) || t
                    }
                    if (f) try {
                        return J.apply(n, h.querySelectorAll(f)),
                        n
                    } catch(g) {} finally {
                        s === q && t.removeAttribute("id")
                    }
                }
            }
            return M(e.replace(se, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > T.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[q] = !0,
            e
        }
        function i(e) {
            var t = I.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) T.attrHandle[n[r]] = t
        }
        function o(e, t) {
            var n = t && e,
            r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (r) return r;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function s(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function p(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, a = e([], n.length, t), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function d() {}
        function c(e) {
            for (var t = 0,
            n = e.length,
            r = ""; n > t; t++) r += e[t].value;
            return r
        }
        function f(e, t, n) {
            var r = t.dir,
            i = n && "parentNode" === r,
            a = F++;
            return t.first ?
            function(t, n, a) {
                for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, a)
            }: function(t, n, o) {
                var s, l, p, u = [W, a];
                if (o) {
                    for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, o)) return ! 0
                } else for (; t = t[r];) if (1 === t.nodeType || i) {
                    if (p = t[q] || (t[q] = {}), l = p[t.uniqueID] || (p[t.uniqueID] = {}), (s = l[r]) && s[0] === W && s[1] === a) return u[2] = s[2];
                    if (l[r] = u, u[2] = e(t, n, o)) return ! 0
                }
            }
        }
        function h(e) {
            return e.length > 1 ?
            function(t, n, r) {
                for (var i = e.length; i--;) if (!e[i](t, n, r)) return ! 1;
                return ! 0
            }: e[0]
        }
        function m(e, n, r) {
            for (var i = 0,
            a = n.length; a > i; i++) t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var a, o = [], s = 0, l = e.length, p = null != t; l > s; s++)(a = e[s]) && (n && !n(a, r, i) || (o.push(a), p && t.push(s)));
            return o
        }
        function v(e, t, n, i, a, o) {
            return i && !i[q] && (i = v(i)),
            a && !a[q] && (a = v(a, o)),
            r(function(r, o, s, l) {
                var p, u, d, c = [],
                f = [],
                h = o.length,
                v = r || m(t || "*", s.nodeType ? [s] : s, []),
                y = !e || !r && t ? v: g(v, c, e, s, l),
                w = n ? a || (r ? e: h || i) ? [] : o: y;
                if (n && n(y, w, s, l), i) for (p = g(w, f), i(p, [], s, l), u = p.length; u--;)(d = p[u]) && (w[f[u]] = !(y[f[u]] = d));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (p = [], u = w.length; u--;)(d = w[u]) && p.push(y[u] = d);
                            a(null, w = [], p, l)
                        }
                        for (u = w.length; u--;)(d = w[u]) && (p = a ? ee(r, d) : c[u]) > -1 && (r[p] = !(o[p] = d))
                    }
                } else w = g(w === o ? w.splice(h, w.length) : w),
                a ? a(null, o, w, l) : J.apply(o, w)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length,
            a = T.relative[e[0].type], o = a || T.relative[" "], s = a ? 1 : 0, l = f(function(e) {
                return e === t
            },
            o, !0), p = f(function(e) {
                return ee(t, e) > -1
            },
            o, !0), u = [function(e, n, r) {
                var i = !a && (r || n !== z) || ((t = n).nodeType ? l(e, n, r) : p(e, n, r));
                return t = null,
                i
            }]; i > s; s++) if (n = T.relative[e[s].type]) u = [f(h(u), n)];
            else {
                if (n = T.filter[e[s].type].apply(null, e[s].matches), n[q]) {
                    for (r = ++s; i > r && !T.relative[e[r].type]; r++);
                    return v(s > 1 && h(u), s > 1 && c(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*": ""
                    })).replace(se, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && c(e))
                }
                u.push(n)
            }
            return h(u)
        }
        function w(e, n) {
            var i = n.length > 0,
            a = e.length > 0,
            o = function(r, o, s, l, p) {
                var u, d, c, f = 0,
                h = "0",
                m = r && [],
                v = [],
                y = z,
                w = r || a && T.find.TAG("*", p),
                x = W += null == y ? 1 : Math.random() || .1,
                b = w.length;
                for (p && (z = o === I || o || p); h !== b && null != (u = w[h]); h++) {
                    if (a && u) {
                        for (d = 0, o || u.ownerDocument === I || (L(u), s = !A); c = e[d++];) if (c(u, o || I, s)) {
                            l.push(u);
                            break
                        }
                        p && (W = x)
                    }
                    i && ((u = !c && u) && f--, r && m.push(u))
                }
                if (f += h, i && h !== f) {
                    for (d = 0; c = n[d++];) c(m, v, o, s);
                    if (r) {
                        if (f > 0) for (; h--;) m[h] || v[h] || (v[h] = U.call(l));
                        v = g(v)
                    }
                    J.apply(l, v),
                    p && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return p && (W = x, z = y),
                m
            };
            return i ? r(o) : o
        }
        var x, b, T, C, S, E, k, M, z, P, D, L, I, N, A, O, H, B, j, q = "sizzle" + 1 * new Date,
        R = e.document,
        W = 0,
        F = 0,
        G = n(),
        _ = n(),
        $ = n(),
        X = function(e, t) {
            return e === t && (D = !0),
            0
        },
        V = 1 << 31,
        Y = {}.hasOwnProperty,
        Q = [],
        U = Q.pop,
        K = Q.push,
        J = Q.push,
        Z = Q.slice,
        ee = function(e, t) {
            for (var n = 0,
            r = e.length; r > n; n++) if (e[n] === t) return n;
            return - 1
        },
        te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ne = "[\\x20\\t\\r\\n\\f]",
        re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]",
        ae = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)",
        oe = new RegExp(ne + "+", "g"),
        se = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$", "g"),
        le = new RegExp("^" + ne + "*," + ne + "*"),
        pe = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"),
        ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]", "g"),
        de = new RegExp(ae),
        ce = new RegExp("^" + re + "$"),
        fe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)", "i")
        },
        he = /^(?:input|select|textarea|button)$/i,
        me = /^h\d$/i,
        ge = /^[^{]+\{\s*\[native \w/,
        ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ye = /[+~]/,
        we = /'|\\/g,
        xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)", "ig"),
        be = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t: 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        },
        Te = function() {
            L()
        };
        try {
            J.apply(Q = Z.call(R.childNodes), R.childNodes),
            Q[R.childNodes.length].nodeType
        } catch(Ce) {
            J = {
                apply: Q.length ?
                function(e, t) {
                    K.apply(e, Z.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        b = t.support = {},
        S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !! t && "HTML" !== t.nodeName
        },
        L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e: R;
            return r !== I && 9 === r.nodeType && r.documentElement ? (I = r, N = I.documentElement, A = !S(I), (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), b.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), b.getElementsByTagName = i(function(e) {
                return e.appendChild(I.createComment("")),
                !e.getElementsByTagName("*").length
            }), b.getElementsByClassName = ge.test(I.getElementsByClassName), b.getById = i(function(e) {
                return N.appendChild(e).id = q,
                !I.getElementsByName || !I.getElementsByName(q).length
            }), b.getById ? (T.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && A) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            },
            T.filter.ID = function(e) {
                var t = e.replace(xe, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete T.find.ID, T.filter.ID = function(e) {
                var t = e.replace(xe, be);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), T.find.TAG = b.getElementsByTagName ?
            function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
            }: function(e, t) {
                var n, r = [],
                i = 0,
                a = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = a[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return a
            },
            T.find.CLASS = b.getElementsByClassName &&
            function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && A ? t.getElementsByClassName(e) : void 0
            },
            H = [], O = [], (b.qsa = ge.test(I.querySelectorAll)) && (i(function(e) {
                N.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && O.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || O.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + q + "-]").length || O.push("~="),
                e.querySelectorAll(":checked").length || O.push(":checked"),
                e.querySelectorAll("a#" + q + "+*").length || O.push(".#.+[+~]")
            }), i(function(e) {
                var t = I.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && O.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || O.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                O.push(",.*:")
            })), (b.matchesSelector = ge.test(B = N.matches || N.webkitMatchesSelector || N.mozMatchesSelector || N.oMatchesSelector || N.msMatchesSelector)) && i(function(e) {
                b.disconnectedMatch = B.call(e, "div"),
                B.call(e, "[s!='']:x"),
                H.push("!=", ae)
            }), O = O.length && new RegExp(O.join("|")), H = H.length && new RegExp(H.join("|")), t = ge.test(N.compareDocumentPosition), j = t || ge.test(N.contains) ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            X = t ?
            function(e, t) {
                if (e === t) return D = !0,
                0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n: (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === R && j(R, e) ? -1 : t === I || t.ownerDocument === R && j(R, t) ? 1 : P ? ee(P, e) - ee(P, t) : 0 : 4 & n ? -1 : 1)
            }: function(e, t) {
                if (e === t) return D = !0,
                0;
                var n, r = 0,
                i = e.parentNode,
                a = t.parentNode,
                s = [e],
                l = [t];
                if (!i || !a) return e === I ? -1 : t === I ? 1 : i ? -1 : a ? 1 : P ? ee(P, e) - ee(P, t) : 0;
                if (i === a) return o(e, t);
                for (n = e; n = n.parentNode;) s.unshift(n);
                for (n = t; n = n.parentNode;) l.unshift(n);
                for (; s[r] === l[r];) r++;
                return r ? o(s[r], l[r]) : s[r] === R ? -1 : l[r] === R ? 1 : 0
            },
            I) : I
        },
        t.matches = function(e, n) {
            return t(e, null, null, n)
        },
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== I && L(e), n = n.replace(ue, "='$1']"), b.matchesSelector && A && !$[n + " "] && (!H || !H.test(n)) && (!O || !O.test(n))) try {
                var r = B.call(e, n);
                if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch(i) {}
            return t(n, I, null, [e]).length > 0
        },
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== I && L(e),
            j(e, t)
        },
        t.attr = function(e, t) { (e.ownerDocument || e) !== I && L(e);
            var n = T.attrHandle[t.toLowerCase()],
            r = n && Y.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !A) : void 0;
            return void 0 !== r ? r: b.attributes || !A ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        },
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        t.uniqueSort = function(e) {
            var t, n = [],
            r = 0,
            i = 0;
            if (D = !b.detectDuplicates, P = !b.sortStable && e.slice(0), e.sort(X), D) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return P = null,
            e
        },
        C = t.getText = function(e) {
            var t, n = "",
            r = 0,
            i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else for (; t = e[r++];) n += C(t);
            return n
        },
        T = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, be),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(xe, be),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null: (e[3] ? e[2] = e[4] || e[5] || "": n && de.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, be).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = G[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && G(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var a = t.attr(i, e);
                        return null == a ? "!=" === n: !n || (a += "", "=" === n ? a === r: "!=" === n ? a !== r: "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice( - r.length) === r: "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (a === r || a.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var a = "nth" !== e.slice(0, 3),
                    o = "last" !== e.slice( - 4),
                    s = "of-type" === t;
                    return 1 === r && 0 === i ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, l) {
                        var p, u, d, c, f, h, m = a !== o ? "nextSibling": "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        y = !l && !s,
                        w = !1;
                        if (g) {
                            if (a) {
                                for (; m;) {
                                    for (c = t; c = c[m];) if (s ? c.nodeName.toLowerCase() === v: 1 === c.nodeType) return ! 1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return ! 0
                            }
                            if (h = [o ? g.firstChild: g.lastChild], o && y) {
                                for (c = g, d = c[q] || (c[q] = {}), u = d[c.uniqueID] || (d[c.uniqueID] = {}), p = u[e] || [], f = p[0] === W && p[1], w = f && p[2], c = f && g.childNodes[f]; c = ++f && c && c[m] || (w = f = 0) || h.pop();) if (1 === c.nodeType && ++w && c === t) {
                                    u[e] = [W, f, w];
                                    break
                                }
                            } else if (y && (c = t, d = c[q] || (c[q] = {}), u = d[c.uniqueID] || (d[c.uniqueID] = {}), p = u[e] || [], f = p[0] === W && p[1], w = f), w === !1) for (; (c = ++f && c && c[m] || (w = f = 0) || h.pop()) && ((s ? c.nodeName.toLowerCase() !== v: 1 !== c.nodeType) || !++w || (y && (d = c[q] || (c[q] = {}), u = d[c.uniqueID] || (d[c.uniqueID] = {}), u[e] = [W, w]), c !== t)););
                            return w -= i,
                            w === r || w % r === 0 && w / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return a[q] ? a(n) : a.length > 1 ? (i = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = a(e, n), o = i.length; o--;) r = ee(e, i[o]),
                        e[r] = !(t[r] = i[o])
                    }) : function(e) {
                        return a(e, 0, i)
                    }) : a
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                    n = [],
                    i = k(e.replace(se, "$1"));
                    return i[q] ? r(function(e, t, n, r) {
                        for (var a, o = i(e, null, r, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
                    }) : function(e, r, a) {
                        return t[0] = e,
                        i(t, null, a, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(xe, be),
                    function(t) {
                        return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(xe, be).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = A ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === N
                },
                focus: function(e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! T.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return he.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: p(function() {
                    return [0]
                }),
                last: p(function(e, t) {
                    return [t - 1]
                }),
                eq: p(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: p(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: p(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: p(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: p(function(e, t, n) {
                    for (var r = 0 > n ? n + t: n; ++r < t;) e.push(r);
                    return e
                })
            }
        },
        T.pseudos.nth = T.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[x] = s(x);
        for (x in {
            submit: !0,
            reset: !0
        }) T.pseudos[x] = l(x);
        return d.prototype = T.filters = T.pseudos,
        T.setFilters = new d,
        E = t.tokenize = function(e, n) {
            var r, i, a, o, s, l, p, u = _[e + " "];
            if (u) return n ? 0 : u.slice(0);
            for (s = e, l = [], p = T.preFilter; s;) {
                r && !(i = le.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(a = [])),
                r = !1,
                (i = pe.exec(s)) && (r = i.shift(), a.push({
                    value: r,
                    type: i[0].replace(se, " ")
                }), s = s.slice(r.length));
                for (o in T.filter) ! (i = fe[o].exec(s)) || p[o] && !(i = p[o](i)) || (r = i.shift(), a.push({
                    value: r,
                    type: o,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break
            }
            return n ? s.length: s ? t.error(e) : _(e, l).slice(0)
        },
        k = t.compile = function(e, t) {
            var n, r = [],
            i = [],
            a = $[e + " "];
            if (!a) {
                for (t || (t = E(e)), n = t.length; n--;) a = y(t[n]),
                a[q] ? r.push(a) : i.push(a);
                a = $(e, w(i, r)),
                a.selector = e
            }
            return a
        },
        M = t.select = function(e, t, n, r) {
            var i, a, o, s, l, p = "function" == typeof e && e,
            d = !r && E(e = p.selector || e);
            if (n = n || [], 1 === d.length) {
                if (a = d[0] = d[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && b.getById && 9 === t.nodeType && A && T.relative[a[1].type]) {
                    if (t = (T.find.ID(o.matches[0].replace(xe, be), t) || [])[0], !t) return n;
                    p && (t = t.parentNode),
                    e = e.slice(a.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : a.length; i--&&(o = a[i], !T.relative[s = o.type]);) if ((l = T.find[s]) && (r = l(o.matches[0].replace(xe, be), ye.test(a[0].type) && u(t.parentNode) || t))) {
                    if (a.splice(i, 1), e = r.length && c(a), !e) return J.apply(n, r),
                    n;
                    break
                }
            }
            return (p || k(e, d))(r, t, !A, n, !t || ye.test(e) && u(t.parentNode) || t),
            n
        },
        b.sortStable = q.split("").sort(X).join("") === q,
        b.detectDuplicates = !!D,
        L(),
        b.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(I.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        b.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || a("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te,
        function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value: null
        }),
        t
    } (e);
    ae.find = ue,
    ae.expr = ue.selectors,
    ae.expr[":"] = ae.expr.pseudos,
    ae.uniqueSort = ae.unique = ue.uniqueSort,
    ae.text = ue.getText,
    ae.isXMLDoc = ue.isXML,
    ae.contains = ue.contains;
    var de = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
            if (i && ae(e).is(n)) break;
            r.push(e)
        }
        return r
    },
    ce = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    },
    fe = ae.expr.match.needsContext,
    he = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    me = /^.[^:#\[\.,]*$/;
    ae.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? ae.find.matchesSelector(r, e) ? [r] : [] : ae.find.matches(e, ae.grep(t,
        function(e) {
            return 1 === e.nodeType
        }))
    },
    ae.fn.extend({
        find: function(e) {
            var t, n = this.length,
            r = [],
            i = this;
            if ("string" != typeof e) return this.pushStack(ae(e).filter(function() {
                for (t = 0; n > t; t++) if (ae.contains(i[t], this)) return ! 0
            }));
            for (t = 0; n > t; t++) ae.find(e, i[t], r);
            return r = this.pushStack(n > 1 ? ae.unique(r) : r),
            r.selector = this.selector ? this.selector + " " + e: e,
            r
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !! r(this, "string" == typeof e && fe.test(e) ? ae(e) : e || [], !1).length
        }
    });
    var ge, ve = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ye = ae.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || ge, "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : ve.exec(e), !r || !r[1] && t) return ! t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t: Q, !0)), he.test(r[1]) && ae.isPlainObject(t)) for (r in t) ae.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = Q.getElementById(r[2]),
            i && i.parentNode && (this.length = 1, this[0] = i),
            this.context = Q,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), ae.makeArray(e, this))
    };
    ye.prototype = ae.fn,
    ge = ae(Q);
    var we = /^(?:parents|prev(?:Until|All))/,
    xe = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ae.fn.extend({
        has: function(e) {
            var t = ae(e, this),
            n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (ae.contains(this, t[e])) return ! 0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0,
            i = this.length,
            a = [], o = fe.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
                a.push(n);
                break
            }
            return this.pushStack(a.length > 1 ? ae.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Z.call(ae(e), this[0]) : Z.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    ae.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return de(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return de(e, "nextSibling")
        },
        prevAll: function(e) {
            return de(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ce((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ce(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || ae.merge([], e.childNodes)
        }
    },
    function(e, t) {
        ae.fn[e] = function(n, r) {
            var i = ae.map(this, t, n);
            return "Until" !== e.slice( - 5) && (r = n),
            r && "string" == typeof r && (i = ae.filter(r, i)),
            this.length > 1 && (xe[e] || ae.uniqueSort(i), we.test(e) && i.reverse()),
            this.pushStack(i)
        }
    });
    var be = /\S+/g;
    ae.Callbacks = function(e) {
        e = "string" == typeof e ? a(e) : ae.extend({},
        e);
        var t, n, r, i, o = [],
        s = [],
        l = -1,
        p = function() {
            for (i = e.once, r = t = !0; s.length; l = -1) for (n = s.shift(); ++l < o.length;) o[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = o.length, n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (o = n ? [] : "")
        },
        u = {
            add: function() {
                return o && (n && !t && (l = o.length - 1, s.push(n)),
                function r(t) {
                    ae.each(t,
                    function(t, n) {
                        ae.isFunction(n) ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== ae.type(n) && r(n)
                    })
                } (arguments), n && !t && p()),
                this
            },
            remove: function() {
                return ae.each(arguments,
                function(e, t) {
                    for (var n; (n = ae.inArray(t, o, n)) > -1;) o.splice(n, 1),
                    l >= n && l--
                }),
                this
            },
            has: function(e) {
                return e ? ae.inArray(e, o) > -1 : o.length > 0
            },
            empty: function() {
                return o && (o = []),
                this
            },
            disable: function() {
                return i = s = [],
                o = n = "",
                this
            },
            disabled: function() {
                return ! o
            },
            lock: function() {
                return i = s = [],
                n || (o = n = ""),
                this
            },
            locked: function() {
                return !! i
            },
            fireWith: function(e, n) {
                return i || (n = n || [], n = [e, n.slice ? n.slice() : n], s.push(n), t || p()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! r
            }
        };
        return u
    },
    ae.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ae.Callbacks("once memory"), "resolved"], ["reject", "fail", ae.Callbacks("once memory"), "rejected"], ["notify", "progress", ae.Callbacks("memory")]],
            n = "pending",
            r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ae.Deferred(function(n) {
                        ae.each(t,
                        function(t, a) {
                            var o = ae.isFunction(e[t]) && e[t];
                            i[a[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && ae.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ae.extend(e, r) : r
                }
            },
            i = {};
            return r.pipe = r.then,
            ae.each(t,
            function(e, a) {
                var o = a[2],
                s = a[3];
                r[a[1]] = o.add,
                s && o.add(function() {
                    n = s
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                i[a[0]] = function() {
                    return i[a[0] + "With"](this === i ? r: this, arguments),
                    this
                },
                i[a[0] + "With"] = o.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0,
            a = U.call(arguments),
            o = a.length,
            s = 1 !== o || e && ae.isFunction(e.promise) ? o: 0,
            l = 1 === s ? e: ae.Deferred(),
            p = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? U.call(arguments) : i,
                    r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
                }
            };
            if (o > 1) for (t = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) a[i] && ae.isFunction(a[i].promise) ? a[i].promise().progress(p(i, n, t)).done(p(i, r, a)).fail(l.reject) : --s;
            return s || l.resolveWith(r, a),
            l.promise()
        }
    });
    var Te;
    ae.fn.ready = function(e) {
        return ae.ready.promise().done(e),
        this
    },
    ae.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ae.readyWait++:ae.ready(!0)
        },
        ready: function(e) { (e === !0 ? --ae.readyWait: ae.isReady) || (ae.isReady = !0, e !== !0 && --ae.readyWait > 0 || (Te.resolveWith(Q, [ae]), ae.fn.triggerHandler && (ae(Q).triggerHandler("ready"), ae(Q).off("ready"))))
        }
    }),
    ae.ready.promise = function(t) {
        return Te || (Te = ae.Deferred(), "complete" === Q.readyState || "loading" !== Q.readyState && !Q.documentElement.doScroll ? e.setTimeout(ae.ready) : (Q.addEventListener("DOMContentLoaded", o), e.addEventListener("load", o))),
        Te.promise(t)
    },
    ae.ready.promise();
    var Ce = function(e, t, n, r, i, a, o) {
        var s = 0,
        l = e.length,
        p = null == n;
        if ("object" === ae.type(n)) {
            i = !0;
            for (s in n) Ce(e, t, s, n[s], !0, a, o)
        } else if (void 0 !== r && (i = !0, ae.isFunction(r) || (o = !0), p && (o ? (t.call(e, r), t = null) : (p = t, t = function(e, t, n) {
            return p.call(ae(e), n)
        })), t)) for (; l > s; s++) t(e[s], n, o ? r: r.call(e[s], s, t(e[s], n)));
        return i ? e: p ? t.call(e) : l ? t(e[0], n) : a
    },
    Se = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    s.uid = 1,
    s.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n: Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }),
            e[this.expando]
        },
        cache: function(e) {
            if (!Se(e)) return {};
            var t = e[this.expando];
            return t || (t = {},
            Se(e) && (e.nodeType ? e[this.expando] = t: Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[t] = n;
            else for (r in t) i[r] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var r;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? (r = this.get(e, t), void 0 !== r ? r: this.get(e, ae.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n: t)
        },
        remove: function(e, t) {
            var n, r, i, a = e[this.expando];
            if (void 0 !== a) {
                if (void 0 === t) this.register(e);
                else {
                    ae.isArray(t) ? r = t.concat(t.map(ae.camelCase)) : (i = ae.camelCase(t), t in a ? r = [t, i] : (r = i, r = r in a ? [r] : r.match(be) || [])),
                    n = r.length;
                    for (; n--;) delete a[r[n]]
                } (void 0 === t || ae.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ae.isEmptyObject(t)
        }
    };
    var Ee = new s,
    ke = new s,
    Me = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    ze = /[A-Z]/g;
    ae.extend({
        hasData: function(e) {
            return ke.hasData(e) || Ee.hasData(e)
        },
        data: function(e, t, n) {
            return ke.access(e, t, n)
        },
        removeData: function(e, t) {
            ke.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ee.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ee.remove(e, t)
        }
    }),
    ae.fn.extend({
        data: function(e, t) {
            var n, r, i, a = this[0],
            o = a && a.attributes;
            if (void 0 === e) {
                if (this.length && (i = ke.get(a), 1 === a.nodeType && !Ee.get(a, "hasDataAttrs"))) {
                    for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = ae.camelCase(r.slice(5)), l(a, r, i[r])));
                    Ee.set(a, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                ke.set(this, e)
            }) : Ce(this,
            function(t) {
                var n, r;
                if (a && void 0 === t) {
                    if (n = ke.get(a, e) || ke.get(a, e.replace(ze, "-$&").toLowerCase()), void 0 !== n) return n;
                    if (r = ae.camelCase(e), n = ke.get(a, r), void 0 !== n) return n;
                    if (n = l(a, r, void 0), void 0 !== n) return n
                } else r = ae.camelCase(e),
                this.each(function() {
                    var n = ke.get(this, r);
                    ke.set(this, r, t),
                    e.indexOf("-") > -1 && void 0 !== n && ke.set(this, e, t)
                })
            },
            null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                ke.remove(this, e)
            })
        }
    }),
    ae.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = Ee.get(e, t), n && (!r || ae.isArray(n) ? r = Ee.access(e, t, ae.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ae.queue(e, t),
            r = n.length,
            i = n.shift(),
            a = ae._queueHooks(e, t),
            o = function() {
                ae.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--),
            i && ("fx" === t && n.unshift("inprogress"), delete a.stop, i.call(e, o, a)),
            !r && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ee.get(e, n) || Ee.access(e, n, {
                empty: ae.Callbacks("once memory").add(function() {
                    Ee.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    ae.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--),
            arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this: this.each(function() {
                var n = ae.queue(this, e, t);
                ae._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ae.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
            i = ae.Deferred(),
            a = this,
            o = this.length,
            s = function() {--r || i.resolveWith(a, [a])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;) n = Ee.get(a[o], e + "queueHooks"),
            n && n.empty && (r++, n.empty.add(s));
            return s(),
            i.promise(t)
        }
    });
    var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    De = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$", "i"),
    Le = ["Top", "Right", "Bottom", "Left"],
    Ie = function(e, t) {
        return e = t || e,
        "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e)
    },
    Ne = /^(?:checkbox|radio)$/i,
    Ae = /<([\w:-]+)/,
    Oe = /^$|\/(?:java|ecma)script/i,
    He = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    He.optgroup = He.option,
    He.tbody = He.tfoot = He.colgroup = He.caption = He.thead,
    He.th = He.td;
    var Be = /<|&#?\w+;/; !
    function() {
        var e = Q.createDocumentFragment(),
        t = e.appendChild(Q.createElement("div")),
        n = Q.createElement("input");
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        re.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        re.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    } ();
    var je = /^key/,
    qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Re = /^([^.]*)(?:\.(.+)|)/;
    ae.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var a, o, s, l, p, u, d, c, f, h, m, g = Ee.get(e);
            if (g) for (n.handler && (a = n, n = a.handler, i = a.selector), n.guid || (n.guid = ae.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
                return "undefined" != typeof ae && ae.event.triggered !== t.type ? ae.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(be) || [""], p = t.length; p--;) s = Re.exec(t[p]) || [],
            f = m = s[1],
            h = (s[2] || "").split(".").sort(),
            f && (d = ae.event.special[f] || {},
            f = (i ? d.delegateType: d.bindType) || f, d = ae.event.special[f] || {},
            u = ae.extend({
                type: f,
                origType: m,
                data: r,
                handler: n,
                guid: n.guid,
                selector: i,
                needsContext: i && ae.expr.match.needsContext.test(i),
                namespace: h.join(".")
            },
            a), (c = l[f]) || (c = l[f] = [], c.delegateCount = 0, d.setup && d.setup.call(e, r, h, o) !== !1 || e.addEventListener && e.addEventListener(f, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? c.splice(c.delegateCount++, 0, u) : c.push(u), ae.event.global[f] = !0)
        },
        remove: function(e, t, n, r, i) {
            var a, o, s, l, p, u, d, c, f, h, m, g = Ee.hasData(e) && Ee.get(e);
            if (g && (l = g.events)) {
                for (t = (t || "").match(be) || [""], p = t.length; p--;) if (s = Re.exec(t[p]) || [], f = m = s[1], h = (s[2] || "").split(".").sort(), f) {
                    for (d = ae.event.special[f] || {},
                    f = (r ? d.delegateType: d.bindType) || f, c = l[f] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = c.length; a--;) u = c[a],
                    !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (c.splice(a, 1), u.selector && c.delegateCount--, d.remove && d.remove.call(e, u));
                    o && !c.length && (d.teardown && d.teardown.call(e, h, g.handle) !== !1 || ae.removeEvent(e, f, g.handle), delete l[f])
                } else for (f in l) ae.event.remove(e, f + t[p], n, r, !0);
                ae.isEmptyObject(l) && Ee.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = ae.event.fix(e);
            var t, n, r, i, a, o = [],
            s = U.call(arguments),
            l = (Ee.get(this, "events") || {})[e.type] || [],
            p = ae.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !p.preDispatch || p.preDispatch.call(this, e) !== !1) {
                for (o = ae.event.handlers.call(this, e, l), t = 0; (i = o[t++]) && !e.isPropagationStopped();) for (e.currentTarget = i.elem, n = 0; (a = i.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, r = ((ae.event.special[a.origType] || {}).handle || a.handler).apply(i.elem, s), void 0 !== r && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return p.postDispatch && p.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, a, o = [],
            s = t.delegateCount,
            l = e.target;
            if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (; l !== this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (r = [], n = 0; s > n; n++) a = t[n],
                i = a.selector + " ",
                void 0 === r[i] && (r[i] = a.needsContext ? ae(i, this).index(l) > -1 : ae.find(i, this, null, [l]).length),
                r[i] && r.push(a);
                r.length && o.push({
                    elem: l,
                    handlers: r
                })
            }
            return s < t.length && o.push({
                elem: this,
                handlers: t.slice(s)
            }),
            o
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, a = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Q, r = n.documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)),
                e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                e
            }
        },
        fix: function(e) {
            if (e[ae.expando]) return e;
            var t, n, r, i = e.type,
            a = e,
            o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = qe.test(i) ? this.mouseHooks: je.test(i) ? this.keyHooks: {}), r = o.props ? this.props.concat(o.props) : this.props, e = new ae.Event(a), t = r.length; t--;) n = r[t],
            e[n] = a[n];
            return e.target || (e.target = Q),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            o.filter ? o.filter(e, a) : e
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== m() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === m() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && ae.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ae.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    ae.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    },
    ae.Event = function(e, t) {
        return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? f: h) : this.type = e, t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void(this[ae.expando] = !0)) : new ae.Event(e, t)
    },
    ae.Event.prototype = {
        constructor: ae.Event,
        isDefaultPrevented: h,
        isPropagationStopped: h,
        isImmediatePropagationStopped: h,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = f,
            e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = f,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = f,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    ae.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    },
    function(e, t) {
        ae.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                i = e.relatedTarget,
                a = e.handleObj;
                return i && (i === r || ae.contains(r, i)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    ae.fn.extend({
        on: function(e, t, n, r) {
            return g(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return g(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            ae(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0),
            n === !1 && (n = h),
            this.each(function() {
                ae.event.remove(this, e, n, t)
            })
        }
    });
    var We = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Fe = /<script|<style|<link/i,
    Ge = /checked\s*(?:[^=]|=\s*.checked.)/i,
    _e = /^true\/(.*)/,
    $e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ae.extend({
        htmlPrefilter: function(e) {
            return e.replace(We, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, a, o, s = e.cloneNode(!0),
            l = ae.contains(e.ownerDocument, e);
            if (! (re.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e))) for (o = u(s), a = u(e), r = 0, i = a.length; i > r; r++) b(a[r], o[r]);
            if (t) if (n) for (a = a || u(e), o = o || u(s), r = 0, i = a.length; i > r; r++) x(a[r], o[r]);
            else x(e, s);
            return o = u(s, "script"),
            o.length > 0 && d(o, !l && u(e, "script")),
            s
        },
        cleanData: function(e) {
            for (var t, n, r, i = ae.event.special,
            a = 0; void 0 !== (n = e[a]); a++) if (Se(n)) {
                if (t = n[Ee.expando]) {
                    if (t.events) for (r in t.events) i[r] ? ae.event.remove(n, r) : ae.removeEvent(n, r, t.handle);
                    n[Ee.expando] = void 0
                }
                n[ke.expando] && (n[ke.expando] = void 0)
            }
        }
    }),
    ae.fn.extend({
        domManip: T,
        detach: function(e) {
            return C(this, e, !0)
        },
        remove: function(e) {
            return C(this, e)
        },
        text: function(e) {
            return Ce(this,
            function(e) {
                return void 0 === e ? ae.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            },
            null, e, arguments.length)
        },
        append: function() {
            return T(this, arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return T(this, arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return T(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return T(this, arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ae.cleanData(u(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e: t,
            this.map(function() {
                return ae.clone(this, e, t)
            })
        },
        html: function(e) {
            return Ce(this,
            function(e) {
                var t = this[0] || {},
                n = 0,
                r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Fe.test(e) && !He[(Ae.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ae.htmlPrefilter(e);
                    try {
                        for (; r > n; n++) t = this[n] || {},
                        1 === t.nodeType && (ae.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch(i) {}
                }
                t && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return T(this, arguments,
            function(t) {
                var n = this.parentNode;
                ae.inArray(this, e) < 0 && (ae.cleanData(u(this)), n && n.replaceChild(t, this))
            },
            e)
        }
    }),
    ae.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        ae.fn[e] = function(e) {
            for (var n, r = [], i = ae(e), a = i.length - 1, o = 0; a >= o; o++) n = o === a ? this: this.clone(!0),
            ae(i[o])[t](n),
            J.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Xe, Ve = {
        HTML: "block",
        BODY: "block"
    },
    Ye = /^margin/,
    Qe = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$", "i"),
    Ue = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    },
    Ke = function(e, t, n, r) {
        var i, a, o = {};
        for (a in t) o[a] = e.style[a],
        e.style[a] = t[a];
        i = n.apply(e, r || []);
        for (a in t) e.style[a] = o[a];
        return i
    },
    Je = Q.documentElement; !
    function() {
        function t() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            s.innerHTML = "",
            Je.appendChild(o);
            var t = e.getComputedStyle(s);
            n = "1%" !== t.top,
            a = "2px" === t.marginLeft,
            r = "4px" === t.width,
            s.style.marginRight = "50%",
            i = "4px" === t.marginRight,
            Je.removeChild(o)
        }
        var n, r, i, a, o = Q.createElement("div"),
        s = Q.createElement("div");
        s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", re.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), ae.extend(re, {
            pixelPosition: function() {
                return t(),
                n
            },
            boxSizingReliable: function() {
                return null == r && t(),
                r
            },
            pixelMarginRight: function() {
                return null == r && t(),
                i
            },
            reliableMarginLeft: function() {
                return null == r && t(),
                a
            },
            reliableMarginRight: function() {
                var t, n = s.appendChild(Q.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                n.style.marginRight = n.style.width = "0",
                s.style.width = "1px",
                Je.appendChild(o),
                t = !parseFloat(e.getComputedStyle(n).marginRight),
                Je.removeChild(o),
                s.removeChild(n),
                t
            }
        }))
    } ();
    var Ze = /^(none|table(?!-c[ea]).+)/,
    et = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    tt = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    nt = ["Webkit", "O", "Moz", "ms"],
    rt = Q.createElement("div").style;
    ae.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = k(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, a, o, s = ae.camelCase(t),
                l = e.style;
                return t = ae.cssProps[s] || (ae.cssProps[s] = z(s) || s),
                o = ae.cssHooks[t] || ae.cssHooks[s],
                void 0 === n ? o && "get" in o && void 0 !== (i = o.get(e, !1, r)) ? i: l[t] : (a = typeof n, "string" === a && (i = De.exec(n)) && i[1] && (n = p(e, t, i), a = "number"), void(null != n && n === n && ("number" === a && (n += i && i[3] || (ae.cssNumber[s] ? "": "px")), re.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, r)) || (l[t] = n))))
            }
        },
        css: function(e, t, n, r) {
            var i, a, o, s = ae.camelCase(t);
            return t = ae.cssProps[s] || (ae.cssProps[s] = z(s) || s),
            o = ae.cssHooks[t] || ae.cssHooks[s],
            o && "get" in o && (i = o.get(e, !0, n)),
            void 0 === i && (i = k(e, t, r)),
            "normal" === i && t in tt && (i = tt[t]),
            "" === n || n ? (a = parseFloat(i), n === !0 || isFinite(a) ? a || 0 : i) : i
        }
    }),
    ae.each(["height", "width"],
    function(e, t) {
        ae.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? Ze.test(ae.css(e, "display")) && 0 === e.offsetWidth ? Ke(e, et,
                function() {
                    return L(e, t, r)
                }) : L(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i, a = r && Ue(e),
                o = r && D(e, t, r, "border-box" === ae.css(e, "boxSizing", !1, a), a);
                return o && (i = De.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ae.css(e, t)),
                P(e, n, o)
            }
        }
    }),
    ae.cssHooks.marginLeft = M(re.reliableMarginLeft,
    function(e, t) {
        return t ? (parseFloat(k(e, "marginLeft")) || e.getBoundingClientRect().left - Ke(e, {
            marginLeft: 0
        },
        function() {
            return e.getBoundingClientRect().left
        })) + "px": void 0
    }),
    ae.cssHooks.marginRight = M(re.reliableMarginRight,
    function(e, t) {
        return t ? Ke(e, {
            display: "inline-block"
        },
        k, [e, "marginRight"]) : void 0
    }),
    ae.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        ae.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0,
                i = {},
                a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + Le[r] + t] = a[r] || a[r - 2] || a[0];
                return i
            }
        },
        Ye.test(e) || (ae.cssHooks[e + t].set = P)
    }),
    ae.fn.extend({
        css: function(e, t) {
            return Ce(this,
            function(e, t, n) {
                var r, i, a = {},
                o = 0;
                if (ae.isArray(t)) {
                    for (r = Ue(e), i = t.length; i > o; o++) a[t[o]] = ae.css(e, t[o], !1, r);
                    return a
                }
                return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t)
            },
            e, t, arguments.length > 1)
        },
        show: function() {
            return I(this, !0)
        },
        hide: function() {
            return I(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Ie(this) ? ae(this).show() : ae(this).hide()
            })
        }
    }),
    ae.Tween = N,
    N.prototype = {
        constructor: N,
        init: function(e, t, n, r, i, a) {
            this.elem = e,
            this.prop = n,
            this.easing = i || ae.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = a || (ae.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = N.propHooks[this.prop];
            return e && e.get ? e.get(this) : N.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = N.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : N.propHooks._default.set(this),
            this
        }
    },
    N.prototype.init.prototype = N.prototype,
    N.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ae.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0)
            },
            set: function(e) {
                ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now: ae.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    N.propHooks.scrollTop = N.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ae.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    ae.fx = N.prototype.init,
    ae.fx.step = {};
    var it, at, ot = /^(?:toggle|show|hide)$/,
    st = /queueHooks$/;
    ae.Animation = ae.extend(q, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return p(n.elem, e, De.exec(t), n),
                n
            }]
        },
        tweener: function(e, t) {
            ae.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(be);
            for (var n, r = 0,
            i = e.length; i > r; r++) n = e[r],
            q.tweeners[n] = q.tweeners[n] || [],
            q.tweeners[n].unshift(t)
        },
        prefilters: [B],
        prefilter: function(e, t) {
            t ? q.prefilters.unshift(e) : q.prefilters.push(e)
        }
    }),
    ae.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ae.extend({},
        e) : {
            complete: n || !n && t || ae.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ae.isFunction(t) && t
        };
        return r.duration = ae.fx.off ? 0 : "number" == typeof r.duration ? r.duration: r.duration in ae.fx.speeds ? ae.fx.speeds[r.duration] : ae.fx.speeds._default,
        null != r.queue && r.queue !== !0 || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            ae.isFunction(r.old) && r.old.call(this),
            r.queue && ae.dequeue(this, r.queue)
        },
        r
    },
    ae.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Ie).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = ae.isEmptyObject(e),
            a = ae.speed(t, n, r),
            o = function() {
                var t = q(this, ae.extend({},
                e), a); (i || Ee.get(this, "finish")) && t.stop(!0)
            };
            return o.finish = o,
            i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                i = null != e && e + "queueHooks",
                a = ae.timers,
                o = Ee.get(this);
                if (i) o[i] && o[i].stop && r(o[i]);
                else for (i in o) o[i] && o[i].stop && st.test(i) && r(o[i]);
                for (i = a.length; i--;) a[i].elem !== this || null != e && a[i].queue !== e || (a[i].anim.stop(n), t = !1, a.splice(i, 1)); ! t && n || ae.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = Ee.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                a = ae.timers,
                o = r ? r.length: 0;
                for (n.finish = !0, ae.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
                for (t = 0; o > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    ae.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = ae.fn[t];
        ae.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, r, i)
        }
    }),
    ae.each({
        slideDown: O("show"),
        slideUp: O("hide"),
        slideToggle: O("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        ae.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    ae.timers = [],
    ae.fx.tick = function() {
        var e, t = 0,
        n = ae.timers;
        for (it = ae.now(); t < n.length; t++) e = n[t],
        e() || n[t] !== e || n.splice(t--, 1);
        n.length || ae.fx.stop(),
        it = void 0
    },
    ae.fx.timer = function(e) {
        ae.timers.push(e),
        e() ? ae.fx.start() : ae.timers.pop()
    },
    ae.fx.interval = 13,
    ae.fx.start = function() {
        at || (at = e.setInterval(ae.fx.tick, ae.fx.interval))
    },
    ae.fx.stop = function() {
        e.clearInterval(at),
        at = null
    },
    ae.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ae.fn.delay = function(t, n) {
        return t = ae.fx ? ae.fx.speeds[t] || t: t,
        n = n || "fx",
        this.queue(n,
        function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    },
    function() {
        var e = Q.createElement("input"),
        t = Q.createElement("select"),
        n = t.appendChild(Q.createElement("option"));
        e.type = "checkbox",
        re.checkOn = "" !== e.value,
        re.optSelected = n.selected,
        t.disabled = !0,
        re.optDisabled = !n.disabled,
        e = Q.createElement("input"),
        e.value = "t",
        e.type = "radio",
        re.radioValue = "t" === e.value
    } ();
    var lt, pt = ae.expr.attrHandle;
    ae.fn.extend({
        attr: function(e, t) {
            return Ce(this, ae.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ae.removeAttr(this, e)
            })
        }
    }),
    ae.extend({
        attr: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return "undefined" == typeof e.getAttribute ? ae.prop(e, t, n) : (1 === a && ae.isXMLDoc(e) || (t = t.toLowerCase(), i = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? lt: void 0)), void 0 !== n ? null === n ? void ae.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r: (r = ae.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!re.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0,
            a = t && t.match(be);
            if (a && 1 === e.nodeType) for (; n = a[i++];) r = ae.propFix[n] || n,
            ae.expr.match.bool.test(n) && (e[r] = !1),
            e.removeAttribute(n)
        }
    }),
    lt = {
        set: function(e, t, n) {
            return t === !1 ? ae.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    ae.each(ae.expr.match.bool.source.match(/\w+/g),
    function(e, t) {
        var n = pt[t] || ae.find.attr;
        pt[t] = function(e, t, r) {
            var i, a;
            return r || (a = pt[t], pt[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, pt[t] = a),
            i
        }
    });
    var ut = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
    ae.fn.extend({
        prop: function(e, t) {
            return Ce(this, ae.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ae.propFix[e] || e]
            })
        }
    }),
    ae.extend({
        prop: function(e, t, n) {
            var r, i, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && ae.isXMLDoc(e) || (t = ae.propFix[t] || t, i = ae.propHooks[t]),
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r: e[t] = n: i && "get" in i && null !== (r = i.get(e, t)) ? r: e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ae.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ut.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    re.optSelected || (ae.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    ae.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        ae.propFix[this.toLowerCase()] = this
    });
    var ct = /[\t\r\n\f]/g;
    ae.fn.extend({
        addClass: function(e) {
            var t, n, r, i, a, o, s, l = 0;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).addClass(e.call(this, t, R(this)))
            });
            if ("string" == typeof e && e) for (t = e.match(be) || []; n = this[l++];) if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(ct, " ")) {
                for (o = 0; a = t[o++];) r.indexOf(" " + a + " ") < 0 && (r += a + " ");
                s = ae.trim(r),
                i !== s && n.setAttribute("class", s)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, a, o, s, l = 0;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).removeClass(e.call(this, t, R(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(be) || []; n = this[l++];) if (i = R(n), r = 1 === n.nodeType && (" " + i + " ").replace(ct, " ")) {
                for (o = 0; a = t[o++];) for (; r.indexOf(" " + a + " ") > -1;) r = r.replace(" " + a + " ", " ");
                s = ae.trim(r),
                i !== s && n.setAttribute("class", s)
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function(n) {
                ae(this).toggleClass(e.call(this, n, R(this), t), t)
            }) : this.each(function() {
                var t, r, i, a;
                if ("string" === n) for (r = 0, i = ae(this), a = e.match(be) || []; t = a[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = R(this), t && Ee.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || e === !1 ? "": Ee.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];) if (1 === n.nodeType && (" " + R(n) + " ").replace(ct, " ").indexOf(t) > -1) return ! 0;
            return ! 1
        }
    });
    var ft = /\r/g,
    ht = /[\x20\t\r\n\f]+/g;
    ae.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ae.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, ae(this).val()) : e, null == i ? i = "": "number" == typeof i ? i += "": ae.isArray(i) && (i = ae.map(i,
                function(e) {
                    return null == e ? "": e + ""
                })), t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ae.valHooks[i.type] || ae.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n: (n = i.value, "string" == typeof n ? n.replace(ft, "") : null == n ? "": n)) : void 0
        }
    }),
    ae.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ae.find.attr(e, "value");
                    return null != t ? t: ae.trim(ae.text(e)).replace(ht, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options,
                    i = e.selectedIndex,
                    a = "select-one" === e.type || 0 > i,
                    o = a ? null: [], s = a ? i + 1 : r.length, l = 0 > i ? s: a ? i: 0; s > l; l++) if (n = r[l], (n.selected || l === i) && (re.optDisabled ? !n.disabled: null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ae.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ae(n).val(), a) return t;
                        o.push(t)
                    }
                    return o
                },
                set: function(e, t) {
                    for (var n, r, i = e.options,
                    a = ae.makeArray(t), o = i.length; o--;) r = i[o],
                    (r.selected = ae.inArray(ae.valHooks.option.get(r), a) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    a
                }
            }
        }
    }),
    ae.each(["radio", "checkbox"],
    function() {
        ae.valHooks[this] = {
            set: function(e, t) {
                return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) > -1 : void 0
            }
        },
        re.checkOn || (ae.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var mt = /^(?:focusinfocus|focusoutblur)$/;
    ae.extend(ae.event, {
        trigger: function(t, n, r, i) {
            var a, o, s, l, p, u, d, c = [r || Q],
            f = ne.call(t, "type") ? t.type: t,
            h = ne.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = s = r = r || Q, 3 !== r.nodeType && 8 !== r.nodeType && !mt.test(f + ae.event.triggered) && (f.indexOf(".") > -1 && (h = f.split("."), f = h.shift(), h.sort()), p = f.indexOf(":") < 0 && "on" + f, t = t[ae.expando] ? t: new ae.Event(f, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ae.makeArray(n, [t]), d = ae.event.special[f] || {},
            i || !d.trigger || d.trigger.apply(r, n) !== !1)) {
                if (!i && !d.noBubble && !ae.isWindow(r)) {
                    for (l = d.delegateType || f, mt.test(l + f) || (o = o.parentNode); o; o = o.parentNode) c.push(o),
                    s = o;
                    s === (r.ownerDocument || Q) && c.push(s.defaultView || s.parentWindow || e)
                }
                for (a = 0; (o = c[a++]) && !t.isPropagationStopped();) t.type = a > 1 ? l: d.bindType || f,
                u = (Ee.get(o, "events") || {})[t.type] && Ee.get(o, "handle"),
                u && u.apply(o, n),
                u = p && o[p],
                u && u.apply && Se(o) && (t.result = u.apply(o, n), t.result === !1 && t.preventDefault());
                return t.type = f,
                i || t.isDefaultPrevented() || d._default && d._default.apply(c.pop(), n) !== !1 || !Se(r) || p && ae.isFunction(r[f]) && !ae.isWindow(r) && (s = r[p], s && (r[p] = null), ae.event.triggered = f, r[f](), ae.event.triggered = void 0, s && (r[p] = s)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = ae.extend(new ae.Event, n, {
                type: e,
                isSimulated: !0
            });
            ae.event.trigger(r, null, t)
        }
    }),
    ae.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ae.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ae.event.trigger(e, t, n, !0) : void 0
        }
    }),
    ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        ae.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    ae.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    re.focusin = "onfocusin" in e,
    re.focusin || ae.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = function(e) {
            ae.event.simulate(t, e.target, ae.event.fix(e))
        };
        ae.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                i = Ee.access(r, t);
                i || r.addEventListener(e, n, !0),
                Ee.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                i = Ee.access(r, t) - 1;
                i ? Ee.access(r, t, i) : (r.removeEventListener(e, n, !0), Ee.remove(r, t))
            }
        }
    });
    var gt = e.location,
    vt = ae.now(),
    yt = /\?/;
    ae.parseJSON = function(e) {
        return JSON.parse(e + "")
    },
    ae.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch(r) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t),
        n
    };
    var wt = /#.*$/,
    xt = /([?&])_=[^&]*/,
    bt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Tt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Ct = /^(?:GET|HEAD)$/,
    St = /^\/\//,
    Et = {},
    kt = {},
    Mt = "*/".concat("*"),
    zt = Q.createElement("a");
    zt.href = gt.href,
    ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: gt.href,
            type: "GET",
            isLocal: Tt.test(gt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Mt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ae.parseJSON,
                "text xml": ae.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? G(G(e, ae.ajaxSettings), t) : G(ae.ajaxSettings, e)
        },
        ajaxPrefilter: W(Et),
        ajaxTransport: W(kt),
        ajax: function(t, n) {
            function r(t, n, r, s) {
                var p, d, y, w, b, C = n;
                2 !== x && (x = 2, l && e.clearTimeout(l), i = void 0, o = s || "", T.readyState = t > 0 ? 4 : 0, p = t >= 200 && 300 > t || 304 === t, r && (w = _(c, T, r)), w = $(c, w, T, p), p ? (c.ifModified && (b = T.getResponseHeader("Last-Modified"), b && (ae.lastModified[a] = b), b = T.getResponseHeader("etag"), b && (ae.etag[a] = b)), 204 === t || "HEAD" === c.type ? C = "nocontent": 304 === t ? C = "notmodified": (C = w.state, d = w.data, y = w.error, p = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), T.status = t, T.statusText = (n || C) + "", p ? m.resolveWith(f, [d, C, T]) : m.rejectWith(f, [T, C, y]), T.statusCode(v), v = void 0, u && h.trigger(p ? "ajaxSuccess": "ajaxError", [T, c, p ? d: y]), g.fireWith(f, [T, C]), u && (h.trigger("ajaxComplete", [T, c]), --ae.active || ae.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = void 0),
            n = n || {};
            var i, a, o, s, l, p, u, d, c = ae.ajaxSetup({},
            n),
            f = c.context || c,
            h = c.context && (f.nodeType || f.jquery) ? ae(f) : ae.event,
            m = ae.Deferred(),
            g = ae.Callbacks("once memory"),
            v = c.statusCode || {},
            y = {},
            w = {},
            x = 0,
            b = "canceled",
            T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!s) for (s = {}; t = bt.exec(o);) s[t[1].toLowerCase()] = t[2];
                        t = s[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? o: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = w[n] = w[n] || e, y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (c.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > x) for (t in e) v[t] = [v[t], e[t]];
                    else T.always(e[T.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || b;
                    return i && i.abort(t),
                    r(0, t),
                    this
                }
            };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, c.url = ((t || c.url || gt.href) + "").replace(wt, "").replace(St, gt.protocol + "//"), c.type = n.method || n.type || c.method || c.type, c.dataTypes = ae.trim(c.dataType || "*").toLowerCase().match(be) || [""], null == c.crossDomain) {
                p = Q.createElement("a");
                try {
                    p.href = c.url,
                    p.href = p.href,
                    c.crossDomain = zt.protocol + "//" + zt.host != p.protocol + "//" + p.host
                } catch(C) {
                    c.crossDomain = !0
                }
            }
            if (c.data && c.processData && "string" != typeof c.data && (c.data = ae.param(c.data, c.traditional)), F(Et, c, n, T), 2 === x) return T;
            u = ae.event && c.global,
            u && 0 === ae.active++&&ae.event.trigger("ajaxStart"),
            c.type = c.type.toUpperCase(),
            c.hasContent = !Ct.test(c.type),
            a = c.url,
            c.hasContent || (c.data && (a = c.url += (yt.test(a) ? "&": "?") + c.data, delete c.data), c.cache === !1 && (c.url = xt.test(a) ? a.replace(xt, "$1_=" + vt++) : a + (yt.test(a) ? "&": "?") + "_=" + vt++)),
            c.ifModified && (ae.lastModified[a] && T.setRequestHeader("If-Modified-Since", ae.lastModified[a]), ae.etag[a] && T.setRequestHeader("If-None-Match", ae.etag[a])),
            (c.data && c.hasContent && c.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", c.contentType),
            T.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + ("*" !== c.dataTypes[0] ? ", " + Mt + "; q=0.01": "") : c.accepts["*"]);
            for (d in c.headers) T.setRequestHeader(d, c.headers[d]);
            if (c.beforeSend && (c.beforeSend.call(f, T, c) === !1 || 2 === x)) return T.abort();
            b = "abort";
            for (d in {
                success: 1,
                error: 1,
                complete: 1
            }) T[d](c[d]);
            if (i = F(kt, c, n, T)) {
                if (T.readyState = 1, u && h.trigger("ajaxSend", [T, c]), 2 === x) return T;
                c.async && c.timeout > 0 && (l = e.setTimeout(function() {
                    T.abort("timeout")
                },
                c.timeout));
                try {
                    x = 1,
                    i.send(y, r)
                } catch(C) {
                    if (! (2 > x)) throw C;
                    r( - 1, C)
                }
            } else r( - 1, "No Transport");
            return T
        },
        getJSON: function(e, t, n) {
            return ae.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return ae.get(e, void 0, t, "script")
        }
    }),
    ae.each(["get", "post"],
    function(e, t) {
        ae[t] = function(e, n, r, i) {
            return ae.isFunction(n) && (i = i || r, r = n, n = void 0),
            ae.ajax(ae.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            },
            ae.isPlainObject(e) && e))
        }
    }),
    ae._evalUrl = function(e) {
        return ae.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    },
    ae.fn.extend({
        wrapAll: function(e) {
            var t;
            return ae.isFunction(e) ? this.each(function(t) {
                ae(this).wrapAll(e.call(this, t))
            }) : (this[0] && (t = ae(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this)
        },
        wrapInner: function(e) {
            return ae.isFunction(e) ? this.each(function(t) {
                ae(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ae(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ae.isFunction(e);
            return this.each(function(n) {
                ae(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    ae.expr.filters.hidden = function(e) {
        return ! ae.expr.filters.visible(e)
    },
    ae.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Pt = /%20/g,
    Dt = /\[\]$/,
    Lt = /\r?\n/g,
    It = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
    ae.param = function(e, t) {
        var n, r = [],
        i = function(e, t) {
            t = ae.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e,
        function() {
            i(this.name, this.value)
        });
        else for (n in e) X(n, e[n], t, i);
        return r.join("&").replace(Pt, "+")
    },
    ae.fn.extend({
        serialize: function() {
            return ae.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ae.prop(this, "elements");
                return e ? ae.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ae(this).is(":disabled") && Nt.test(this.nodeName) && !It.test(e) && (this.checked || !Ne.test(e))
            }).map(function(e, t) {
                var n = ae(this).val();
                return null == n ? null: ae.isArray(n) ? ae.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    }),
    ae.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    };
    var At = {
        0 : 200,
        1223 : 204
    },
    Ot = ae.ajaxSettings.xhr();
    re.cors = !!Ot && "withCredentials" in Ot,
    re.ajax = Ot = !!Ot,
    ae.ajaxTransport(function(t) {
        var n, r;
        return re.cors || Ot && !t.crossDomain ? {
            send: function(i, a) {
                var o, s = t.xhr();
                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) s[o] = t.xhrFields[o];
                t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (o in i) s.setRequestHeader(o, i[o]);
                n = function(e) {
                    return function() {
                        n && (n = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(At[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                            binary: s.response
                        }: {
                            text: s.responseText
                        },
                        s.getAllResponseHeaders()))
                    }
                },
                s.onload = n(),
                r = s.onerror = n("error"),
                void 0 !== s.onabort ? s.onabort = r: s.onreadystatechange = function() {
                    4 === s.readyState && e.setTimeout(function() {
                        n && r()
                    })
                },
                n = n("abort");
                try {
                    s.send(t.hasContent && t.data || null)
                } catch(l) {
                    if (n) throw l
                }
            },
            abort: function() {
                n && n()
            }
        }: void 0
    }),
    ae.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ae.globalEval(e),
                e
            }
        }
    }),
    ae.ajaxPrefilter("script",
    function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    ae.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, i) {
                    t = ae("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && i("error" === e.type ? 404 : 200, e.type)
                    }),
                    Q.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Ht = [],
    Bt = /(=)\?(?=&|$)|\?\?/;
    ae.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Ht.pop() || ae.expando + "_" + vt++;
            return this[e] = !0,
            e
        }
    }),
    ae.ajaxPrefilter("json jsonp",
    function(t, n, r) {
        var i, a, o, s = t.jsonp !== !1 && (Bt.test(t.url) ? "url": "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Bt.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Bt, "$1" + i) : t.jsonp !== !1 && (t.url += (yt.test(t.url) ? "&": "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return o || ae.error(i + " was not called"),
            o[0]
        },
        t.dataTypes[0] = "json", a = e[i], e[i] = function() {
            o = arguments
        },
        r.always(function() {
            void 0 === a ? ae(e).removeProp(i) : e[i] = a,
            t[i] && (t.jsonpCallback = n.jsonpCallback, Ht.push(i)),
            o && ae.isFunction(a) && a(o[0]),
            o = a = void 0
        }), "script") : void 0
    }),
    ae.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1),
        t = t || Q;
        var r = he.exec(e),
        i = !n && [];
        return r ? [t.createElement(r[1])] : (r = c([e], t, i), i && i.length && ae(i).remove(), ae.merge([], r.childNodes))
    };
    var jt = ae.fn.load;
    ae.fn.load = function(e, t, n) {
        if ("string" != typeof e && jt) return jt.apply(this, arguments);
        var r, i, a, o = this,
        s = e.indexOf(" ");
        return s > -1 && (r = ae.trim(e.slice(s)), e = e.slice(0, s)),
        ae.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"),
        o.length > 0 && ae.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments,
            o.html(r ? ae("<div>").append(ae.parseHTML(e)).find(r) : e)
        }).always(n &&
        function(e, t) {
            o.each(function() {
                n.apply(this, a || [e.responseText, t, e])
            })
        }),
        this
    },
    ae.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        ae.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ae.expr.filters.animated = function(e) {
        return ae.grep(ae.timers,
        function(t) {
            return e === t.elem
        }).length
    },
    ae.offset = {
        setOffset: function(e, t, n) {
            var r, i, a, o, s, l, p, u = ae.css(e, "position"),
            d = ae(e),
            c = {};
            "static" === u && (e.style.position = "relative"),
            s = d.offset(),
            a = ae.css(e, "top"),
            l = ae.css(e, "left"),
            p = ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1,
            p ? (r = d.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0),
            ae.isFunction(t) && (t = t.call(e, n, ae.extend({},
            s))),
            null != t.top && (c.top = t.top - s.top + o),
            null != t.left && (c.left = t.left - s.left + i),
            "using" in t ? t.using.call(e, c) : d.css(c)
        }
    },
    ae.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this: this.each(function(t) {
                ae.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0],
            i = {
                top: 0,
                left: 0
            },
            a = r && r.ownerDocument;
            return a ? (t = a.documentElement, ae.contains(t, r) ? (i = r.getBoundingClientRect(), n = V(a), {
                top: i.top + n.pageYOffset - t.clientTop,
                left: i.left + n.pageXOffset - t.clientLeft
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === ae.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ae.nodeName(e[0], "html") || (r = e.offset()), r.top += ae.css(e[0], "borderTopWidth", !0), r.left += ae.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - r.top - ae.css(n, "marginTop", !0),
                    left: t.left - r.left - ae.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ae.css(e, "position");) e = e.offsetParent;
                return e || Je
            })
        }
    }),
    ae.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, t) {
        var n = "pageYOffset" === t;
        ae.fn[e] = function(r) {
            return Ce(this,
            function(e, r, i) {
                var a = V(e);
                return void 0 === i ? a ? a[t] : e[r] : void(a ? a.scrollTo(n ? a.pageXOffset: i, n ? i: a.pageYOffset) : e[r] = i)
            },
            e, r, arguments.length)
        }
    }),
    ae.each(["top", "left"],
    function(e, t) {
        ae.cssHooks[t] = M(re.pixelPosition,
        function(e, n) {
            return n ? (n = k(e, t), Qe.test(n) ? ae(e).position()[t] + "px": n) : void 0
        })
    }),
    ae.each({
        Height: "height",
        Width: "width"
    },
    function(e, t) {
        ae.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        },
        function(n, r) {
            ae.fn[r] = function(r, i) {
                var a = arguments.length && (n || "boolean" != typeof r),
                o = n || (r === !0 || i === !0 ? "margin": "border");
                return Ce(this,
                function(t, n, r) {
                    var i;
                    return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ae.css(t, n, o) : ae.style(t, n, r, o)
                },
                t, a ? r: void 0, a, null)
            }
        })
    }),
    ae.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    }),
    ae.fn.andSelf = ae.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return ae
    });
    var qt = e.jQuery,
    Rt = e.$;
    return ae.noConflict = function(t) {
        return e.$ === ae && (e.$ = Rt),
        t && e.jQuery === ae && (e.jQuery = qt),
        ae
    },
    t || (e.jQuery = e.$ = ae),
    ae
}),
!
function() {
    "use strict";
    function e(e) {
        e.fn.swiper = function(t) {
            var r;
            return e(this).each(function() {
                var e = new n(this, t);
                r || (r = e)
            }),
            r
        }
    }
    var t, n = function(e, i) {
        function a(e) {
            return Math.floor(e)
        }
        function o() {
            x.autoplayTimeoutId = setTimeout(function() {
                x.params.loop ? (x.fixLoop(), x._slideNext(), x.emit("onAutoplay", x)) : x.isEnd ? i.autoplayStopOnLast ? x.stopAutoplay() : (x._slideTo(0), x.emit("onAutoplay", x)) : (x._slideNext(), x.emit("onAutoplay", x))
            },
            x.params.autoplay)
        }
        function s(e, n) {
            var r = t(e.target);
            if (!r.is(n)) if ("string" == typeof n) r = r.parents(n);
            else if (n.nodeType) {
                var i;
                return r.parents().each(function(e, t) {
                    t === n && (i = n)
                }),
                i ? n: void 0
            }
            if (0 !== r.length) return r[0]
        }
        function l(e, t) {
            t = t || {};
            var n = window.MutationObserver || window.WebkitMutationObserver,
            r = new n(function(e) {
                e.forEach(function(e) {
                    x.onResize(!0),
                    x.emit("onObserverUpdate", x, e)
                })
            });
            r.observe(e, {
                attributes: "undefined" == typeof t.attributes || t.attributes,
                childList: "undefined" == typeof t.childList || t.childList,
                characterData: "undefined" == typeof t.characterData || t.characterData
            }),
            x.observers.push(r)
        }
        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = e.keyCode || e.charCode;
            if (!x.params.allowSwipeToNext && (x.isHorizontal() && 39 === t || !x.isHorizontal() && 40 === t)) return ! 1;
            if (!x.params.allowSwipeToPrev && (x.isHorizontal() && 37 === t || !x.isHorizontal() && 38 === t)) return ! 1;
            if (! (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === t || 39 === t || 38 === t || 40 === t) {
                    var n = !1;
                    if (x.container.parents(".swiper-slide").length > 0 && 0 === x.container.parents(".swiper-slide-active").length) return;
                    var r = {
                        left: window.pageXOffset,
                        top: window.pageYOffset
                    },
                    i = window.innerWidth,
                    a = window.innerHeight,
                    o = x.container.offset();
                    x.rtl && (o.left = o.left - x.container[0].scrollLeft);
                    for (var s = [[o.left, o.top], [o.left + x.width, o.top], [o.left, o.top + x.height], [o.left + x.width, o.top + x.height]], l = 0; l < s.length; l++) {
                        var p = s[l];
                        p[0] >= r.left && p[0] <= r.left + i && p[1] >= r.top && p[1] <= r.top + a && (n = !0)
                    }
                    if (!n) return
                }
                x.isHorizontal() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === t && !x.rtl || 37 === t && x.rtl) && x.slideNext(), (37 === t && !x.rtl || 39 === t && x.rtl) && x.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === t && x.slideNext(), 38 === t && x.slidePrev())
            }
        }
        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var t = x.mousewheel.event,
            n = 0,
            r = x.rtl ? -1 : 1;
            if ("mousewheel" === t) if (x.params.mousewheelForceToAxis) if (x.isHorizontal()) {
                if (! (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                n = e.wheelDeltaX * r
            } else {
                if (! (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                n = e.wheelDeltaY
            } else n = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? -e.wheelDeltaX * r: -e.wheelDeltaY;
            else if ("DOMMouseScroll" === t) n = -e.detail;
            else if ("wheel" === t) if (x.params.mousewheelForceToAxis) if (x.isHorizontal()) {
                if (! (Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                n = -e.deltaX * r
            } else {
                if (! (Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                n = -e.deltaY
            } else n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX * r: -e.deltaY;
            if (0 !== n) {
                if (x.params.mousewheelInvert && (n = -n), x.params.freeMode) {
                    var i = x.getWrapperTranslate() + n * x.params.mousewheelSensitivity,
                    a = x.isBeginning,
                    o = x.isEnd;
                    if (i >= x.minTranslate() && (i = x.minTranslate()), i <= x.maxTranslate() && (i = x.maxTranslate()), x.setWrapperTransition(0), x.setWrapperTranslate(i), x.updateProgress(), x.updateActiveIndex(), (!a && x.isBeginning || !o && x.isEnd) && x.updateClasses(), x.params.freeModeSticky ? (clearTimeout(x.mousewheel.timeout), x.mousewheel.timeout = setTimeout(function() {
                        x.slideReset()
                    },
                    300)) : x.params.lazyLoading && x.lazy && x.lazy.load(), 0 === i || i === x.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - x.mousewheel.lastScrollTime > 60) if (0 > n) if (x.isEnd && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges) return ! 0
                    } else x.slideNext();
                    else if (x.isBeginning && !x.params.loop || x.animating) {
                        if (x.params.mousewheelReleaseOnEdges) return ! 0
                    } else x.slidePrev();
                    x.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return x.params.autoplay && x.stopAutoplay(),
                e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                !1
            }
        }
        function d(e, n) {
            e = t(e);
            var r, i, a, o = x.rtl ? -1 : 1;
            r = e.attr("data-swiper-parallax") || "0",
            i = e.attr("data-swiper-parallax-x"),
            a = e.attr("data-swiper-parallax-y"),
            i || a ? (i = i || "0", a = a || "0") : x.isHorizontal() ? (i = r, a = "0") : (a = r, i = "0"),
            i = i.indexOf("%") >= 0 ? parseInt(i, 10) * n * o + "%": i * n * o + "px",
            a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n + "%": a * n + "px",
            e.transform("translate3d(" + i + ", " + a + ",0px)")
        }
        function c(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
            e
        }
        if (! (this instanceof n)) return new n(e, i);
        var f = {
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            autoplay: !1,
            autoplayDisableOnInteraction: !0,
            autoplayStopOnLast: !1,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            coverflow: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: !0
            },
            flip: {
                slideShadows: !0,
                limitRotation: !0
            },
            cube: {
                slideShadows: !0,
                shadow: !0,
                shadowOffset: 20,
                shadowScale: .94
            },
            fade: {
                crossFade: !1
            },
            parallax: !1,
            scrollbar: null,
            scrollbarHide: !0,
            scrollbarDraggable: !1,
            scrollbarSnapOnRelease: !1,
            keyboardControl: !1,
            mousewheelControl: !1,
            mousewheelReleaseOnEdges: !1,
            mousewheelInvert: !1,
            mousewheelForceToAxis: !1,
            mousewheelSensitivity: 1,
            hashnav: !1,
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            onlyExternal: !1,
            threshold: 0,
            touchMoveStopPropagation: !0,
            uniqueNavElements: !0,
            pagination: null,
            paginationElement: "span",
            paginationClickable: !1,
            paginationHide: !1,
            paginationBulletRender: null,
            paginationProgressRender: null,
            paginationFractionRender: null,
            paginationCustomRender: null,
            paginationType: "bullets",
            resistance: !0,
            resistanceRatio: .85,
            nextButton: null,
            prevButton: null,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            lazyLoading: !1,
            lazyLoadingInPrevNext: !1,
            lazyLoadingInPrevNextAmount: 1,
            lazyLoadingOnTransitionStart: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            control: void 0,
            controlInverse: !1,
            controlBy: "slide",
            allowSwipeToPrev: !0,
            allowSwipeToNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            slideClass: "swiper-slide",
            slideActiveClass: "swiper-slide-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slidePrevClass: "swiper-slide-prev",
            wrapperClass: "swiper-wrapper",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            buttonDisabledClass: "swiper-button-disabled",
            paginationCurrentClass: "swiper-pagination-current",
            paginationTotalClass: "swiper-pagination-total",
            paginationHiddenClass: "swiper-pagination-hidden",
            paginationProgressbarClass: "swiper-pagination-progressbar",
            observer: !1,
            observeParents: !1,
            a11y: !1,
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
            runCallbacksOnInit: !0
        },
        h = i && i.virtualTranslate;
        i = i || {};
        var m = {};
        for (var g in i) if ("object" != typeof i[g] || null === i[g] || i[g].nodeType || i[g] === window || i[g] === document || "undefined" != typeof r && i[g] instanceof r || "undefined" != typeof jQuery && i[g] instanceof jQuery) m[g] = i[g];
        else {
            m[g] = {};
            for (var v in i[g]) m[g][v] = i[g][v]
        }
        for (var y in f) if ("undefined" == typeof i[y]) i[y] = f[y];
        else if ("object" == typeof i[y]) for (var w in f[y])"undefined" == typeof i[y][w] && (i[y][w] = f[y][w]);
        var x = this;
        if (x.params = i, x.originalParams = m, x.classNames = [], "undefined" != typeof t && "undefined" != typeof r && (t = r), ("undefined" != typeof t || (t = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery: r)) && (x.$ = t, x.currentBreakpoint = void 0, x.getActiveBreakpoint = function() {
            if (!x.params.breakpoints) return ! 1;
            var e, t = !1,
            n = [];
            for (e in x.params.breakpoints) x.params.breakpoints.hasOwnProperty(e) && n.push(e);
            n.sort(function(e, t) {
                return parseInt(e, 10) > parseInt(t, 10)
            });
            for (var r = 0; r < n.length; r++) e = n[r],
            e >= window.innerWidth && !t && (t = e);
            return t || "max"
        },
        x.setBreakpoint = function() {
            var e = x.getActiveBreakpoint();
            if (e && x.currentBreakpoint !== e) {
                var t = e in x.params.breakpoints ? x.params.breakpoints[e] : x.originalParams,
                n = x.params.loop && t.slidesPerView !== x.params.slidesPerView;
                for (var r in t) x.params[r] = t[r];
                x.currentBreakpoint = e,
                n && x.destroyLoop && x.reLoop(!0);
            }
        },
        x.params.breakpoints && x.setBreakpoint(), x.container = t(e), 0 !== x.container.length)) {
            if (x.container.length > 1) {
                var b = [];
                return x.container.each(function() {
                    b.push(new n(this, i))
                }),
                b
            }
            x.container[0].swiper = x,
            x.container.data("swiper", x),
            x.classNames.push("swiper-container-" + x.params.direction),
            x.params.freeMode && x.classNames.push("swiper-container-free-mode"),
            x.support.flexbox || (x.classNames.push("swiper-container-no-flexbox"), x.params.slidesPerColumn = 1),
            x.params.autoHeight && x.classNames.push("swiper-container-autoheight"),
            (x.params.parallax || x.params.watchSlidesVisibility) && (x.params.watchSlidesProgress = !0),
            ["cube", "coverflow", "flip"].indexOf(x.params.effect) >= 0 && (x.support.transforms3d ? (x.params.watchSlidesProgress = !0, x.classNames.push("swiper-container-3d")) : x.params.effect = "slide"),
            "slide" !== x.params.effect && x.classNames.push("swiper-container-" + x.params.effect),
            "cube" === x.params.effect && (x.params.resistanceRatio = 0, x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.centeredSlides = !1, x.params.spaceBetween = 0, x.params.virtualTranslate = !0, x.params.setWrapperSize = !1),
            ("fade" === x.params.effect || "flip" === x.params.effect) && (x.params.slidesPerView = 1, x.params.slidesPerColumn = 1, x.params.slidesPerGroup = 1, x.params.watchSlidesProgress = !0, x.params.spaceBetween = 0, x.params.setWrapperSize = !1, "undefined" == typeof h && (x.params.virtualTranslate = !0)),
            x.params.grabCursor && x.support.touch && (x.params.grabCursor = !1),
            x.wrapper = x.container.children("." + x.params.wrapperClass),
            x.params.pagination && (x.paginationContainer = t(x.params.pagination), x.params.uniqueNavElements && "string" == typeof x.params.pagination && x.paginationContainer.length > 1 && 1 === x.container.find(x.params.pagination).length && (x.paginationContainer = x.container.find(x.params.pagination)), "bullets" === x.params.paginationType && x.params.paginationClickable ? x.paginationContainer.addClass("swiper-pagination-clickable") : x.params.paginationClickable = !1, x.paginationContainer.addClass("swiper-pagination-" + x.params.paginationType)),
            (x.params.nextButton || x.params.prevButton) && (x.params.nextButton && (x.nextButton = t(x.params.nextButton), x.params.uniqueNavElements && "string" == typeof x.params.nextButton && x.nextButton.length > 1 && 1 === x.container.find(x.params.nextButton).length && (x.nextButton = x.container.find(x.params.nextButton))), x.params.prevButton && (x.prevButton = t(x.params.prevButton), x.params.uniqueNavElements && "string" == typeof x.params.prevButton && x.prevButton.length > 1 && 1 === x.container.find(x.params.prevButton).length && (x.prevButton = x.container.find(x.params.prevButton)))),
            x.isHorizontal = function() {
                return "horizontal" === x.params.direction
            },
            x.rtl = x.isHorizontal() && ("rtl" === x.container[0].dir.toLowerCase() || "rtl" === x.container.css("direction")),
            x.rtl && x.classNames.push("swiper-container-rtl"),
            x.rtl && (x.wrongRTL = "-webkit-box" === x.wrapper.css("display")),
            x.params.slidesPerColumn > 1 && x.classNames.push("swiper-container-multirow"),
            x.device.android && x.classNames.push("swiper-container-android"),
            x.container.addClass(x.classNames.join(" ")),
            x.translate = 0,
            x.progress = 0,
            x.velocity = 0,
            x.lockSwipeToNext = function() {
                x.params.allowSwipeToNext = !1
            },
            x.lockSwipeToPrev = function() {
                x.params.allowSwipeToPrev = !1
            },
            x.lockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !1
            },
            x.unlockSwipeToNext = function() {
                x.params.allowSwipeToNext = !0
            },
            x.unlockSwipeToPrev = function() {
                x.params.allowSwipeToPrev = !0
            },
            x.unlockSwipes = function() {
                x.params.allowSwipeToNext = x.params.allowSwipeToPrev = !0
            },
            x.params.grabCursor && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grab", x.container[0].style.cursor = "-moz-grab", x.container[0].style.cursor = "grab"),
            x.imagesToLoad = [],
            x.imagesLoaded = 0,
            x.loadImage = function(e, t, n, r, i) {
                function a() {
                    i && i()
                }
                var o;
                e.complete && r ? a() : t ? (o = new window.Image, o.onload = a, o.onerror = a, n && (o.srcset = n), t && (o.src = t)) : a()
            },
            x.preloadImages = function() {
                function e() {
                    "undefined" != typeof x && null !== x && (void 0 !== x.imagesLoaded && x.imagesLoaded++, x.imagesLoaded === x.imagesToLoad.length && (x.params.updateOnImagesReady && x.update(), x.emit("onImagesReady", x)))
                }
                x.imagesToLoad = x.container.find("img");
                for (var t = 0; t < x.imagesToLoad.length; t++) x.loadImage(x.imagesToLoad[t], x.imagesToLoad[t].currentSrc || x.imagesToLoad[t].getAttribute("src"), x.imagesToLoad[t].srcset || x.imagesToLoad[t].getAttribute("srcset"), !0, e)
            },
            x.autoplayTimeoutId = void 0,
            x.autoplaying = !1,
            x.autoplayPaused = !1,
            x.startAutoplay = function() {
                return "undefined" == typeof x.autoplayTimeoutId && ( !! x.params.autoplay && (!x.autoplaying && (x.autoplaying = !0, x.emit("onAutoplayStart", x), void o())))
            },
            x.stopAutoplay = function(e) {
                x.autoplayTimeoutId && (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplaying = !1, x.autoplayTimeoutId = void 0, x.emit("onAutoplayStop", x))
            },
            x.pauseAutoplay = function(e) {
                x.autoplayPaused || (x.autoplayTimeoutId && clearTimeout(x.autoplayTimeoutId), x.autoplayPaused = !0, 0 === e ? (x.autoplayPaused = !1, o()) : x.wrapper.transitionEnd(function() {
                    x && (x.autoplayPaused = !1, x.autoplaying ? o() : x.stopAutoplay())
                }))
            },
            x.minTranslate = function() {
                return - x.snapGrid[0]
            },
            x.maxTranslate = function() {
                return - x.snapGrid[x.snapGrid.length - 1]
            },
            x.updateAutoHeight = function() {
                var e = x.slides.eq(x.activeIndex)[0];
                if ("undefined" != typeof e) {
                    var t = e.offsetHeight;
                    t && x.wrapper.css("height", t + "px")
                }
            },
            x.updateContainerSize = function() {
                var e, t;
                e = "undefined" != typeof x.params.width ? x.params.width: x.container[0].clientWidth,
                t = "undefined" != typeof x.params.height ? x.params.height: x.container[0].clientHeight,
                0 === e && x.isHorizontal() || 0 === t && !x.isHorizontal() || (e = e - parseInt(x.container.css("padding-left"), 10) - parseInt(x.container.css("padding-right"), 10), t = t - parseInt(x.container.css("padding-top"), 10) - parseInt(x.container.css("padding-bottom"), 10), x.width = e, x.height = t, x.size = x.isHorizontal() ? x.width: x.height)
            },
            x.updateSlidesSize = function() {
                x.slides = x.wrapper.children("." + x.params.slideClass),
                x.snapGrid = [],
                x.slidesGrid = [],
                x.slidesSizesGrid = [];
                var e, t = x.params.spaceBetween,
                n = -x.params.slidesOffsetBefore,
                r = 0,
                i = 0;
                if ("undefined" != typeof x.size) {
                    "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * x.size),
                    x.virtualSize = -t,
                    x.rtl ? x.slides.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : x.slides.css({
                        marginRight: "",
                        marginBottom: ""
                    });
                    var o;
                    x.params.slidesPerColumn > 1 && (o = Math.floor(x.slides.length / x.params.slidesPerColumn) === x.slides.length / x.params.slidesPerColumn ? x.slides.length: Math.ceil(x.slides.length / x.params.slidesPerColumn) * x.params.slidesPerColumn, "auto" !== x.params.slidesPerView && "row" === x.params.slidesPerColumnFill && (o = Math.max(o, x.params.slidesPerView * x.params.slidesPerColumn)));
                    var s, l = x.params.slidesPerColumn,
                    p = o / l,
                    u = p - (x.params.slidesPerColumn * p - x.slides.length);
                    for (e = 0; e < x.slides.length; e++) {
                        s = 0;
                        var d = x.slides.eq(e);
                        if (x.params.slidesPerColumn > 1) {
                            var c, f, h;
                            "column" === x.params.slidesPerColumnFill ? (f = Math.floor(e / l), h = e - f * l, (f > u || f === u && h === l - 1) && ++h >= l && (h = 0, f++), c = f + h * o / l, d.css({
                                "-webkit-box-ordinal-group": c,
                                "-moz-box-ordinal-group": c,
                                "-ms-flex-order": c,
                                "-webkit-order": c,
                                order: c
                            })) : (h = Math.floor(e / p), f = e - h * p),
                            d.css({
                                "margin-top": 0 !== h && x.params.spaceBetween && x.params.spaceBetween + "px"
                            }).attr("data-swiper-column", f).attr("data-swiper-row", h)
                        }
                        "none" !== d.css("display") && ("auto" === x.params.slidesPerView ? (s = x.isHorizontal() ? d.outerWidth(!0) : d.outerHeight(!0), x.params.roundLengths && (s = a(s))) : (s = (x.size - (x.params.slidesPerView - 1) * t) / x.params.slidesPerView, x.params.roundLengths && (s = a(s)), x.isHorizontal() ? x.slides[e].style.width = s + "px": x.slides[e].style.height = s + "px"), x.slides[e].swiperSlideSize = s, x.slidesSizesGrid.push(s), x.params.centeredSlides ? (n = n + s / 2 + r / 2 + t, 0 === e && (n = n - x.size / 2 - t), Math.abs(n) < .001 && (n = 0), i % x.params.slidesPerGroup === 0 && x.snapGrid.push(n), x.slidesGrid.push(n)) : (i % x.params.slidesPerGroup === 0 && x.snapGrid.push(n), x.slidesGrid.push(n), n = n + s + t), x.virtualSize += s + t, r = s, i++)
                    }
                    x.virtualSize = Math.max(x.virtualSize, x.size) + x.params.slidesOffsetAfter;
                    var m;
                    if (x.rtl && x.wrongRTL && ("slide" === x.params.effect || "coverflow" === x.params.effect) && x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }), (!x.support.flexbox || x.params.setWrapperSize) && (x.isHorizontal() ? x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }) : x.wrapper.css({
                        height: x.virtualSize + x.params.spaceBetween + "px"
                    })), x.params.slidesPerColumn > 1 && (x.virtualSize = (s + x.params.spaceBetween) * o, x.virtualSize = Math.ceil(x.virtualSize / x.params.slidesPerColumn) - x.params.spaceBetween, x.wrapper.css({
                        width: x.virtualSize + x.params.spaceBetween + "px"
                    }), x.params.centeredSlides)) {
                        for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] < x.virtualSize + x.snapGrid[0] && m.push(x.snapGrid[e]);
                        x.snapGrid = m
                    }
                    if (!x.params.centeredSlides) {
                        for (m = [], e = 0; e < x.snapGrid.length; e++) x.snapGrid[e] <= x.virtualSize - x.size && m.push(x.snapGrid[e]);
                        x.snapGrid = m,
                        Math.floor(x.virtualSize - x.size) - Math.floor(x.snapGrid[x.snapGrid.length - 1]) > 1 && x.snapGrid.push(x.virtualSize - x.size)
                    }
                    0 === x.snapGrid.length && (x.snapGrid = [0]),
                    0 !== x.params.spaceBetween && (x.isHorizontal() ? x.rtl ? x.slides.css({
                        marginLeft: t + "px"
                    }) : x.slides.css({
                        marginRight: t + "px"
                    }) : x.slides.css({
                        marginBottom: t + "px"
                    })),
                    x.params.watchSlidesProgress && x.updateSlidesOffset()
                }
            },
            x.updateSlidesOffset = function() {
                for (var e = 0; e < x.slides.length; e++) x.slides[e].swiperSlideOffset = x.isHorizontal() ? x.slides[e].offsetLeft: x.slides[e].offsetTop
            },
            x.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = x.translate || 0), 0 !== x.slides.length) {
                    "undefined" == typeof x.slides[0].swiperSlideOffset && x.updateSlidesOffset();
                    var t = -e;
                    x.rtl && (t = e),
                    x.slides.removeClass(x.params.slideVisibleClass);
                    for (var n = 0; n < x.slides.length; n++) {
                        var r = x.slides[n],
                        i = (t - r.swiperSlideOffset) / (r.swiperSlideSize + x.params.spaceBetween);
                        if (x.params.watchSlidesVisibility) {
                            var a = -(t - r.swiperSlideOffset),
                            o = a + x.slidesSizesGrid[n],
                            s = a >= 0 && a < x.size || o > 0 && o <= x.size || 0 >= a && o >= x.size;
                            s && x.slides.eq(n).addClass(x.params.slideVisibleClass)
                        }
                        r.progress = x.rtl ? -i: i
                    }
                }
            },
            x.updateProgress = function(e) {
                "undefined" == typeof e && (e = x.translate || 0);
                var t = x.maxTranslate() - x.minTranslate(),
                n = x.isBeginning,
                r = x.isEnd;
                0 === t ? (x.progress = 0, x.isBeginning = x.isEnd = !0) : (x.progress = (e - x.minTranslate()) / t, x.isBeginning = x.progress <= 0, x.isEnd = x.progress >= 1),
                x.isBeginning && !n && x.emit("onReachBeginning", x),
                x.isEnd && !r && x.emit("onReachEnd", x),
                x.params.watchSlidesProgress && x.updateSlidesProgress(e),
                x.emit("onProgress", x, x.progress)
            },
            x.updateActiveIndex = function() {
                var e, t, n, r = x.rtl ? x.translate: -x.translate;
                for (t = 0; t < x.slidesGrid.length; t++)"undefined" != typeof x.slidesGrid[t + 1] ? r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] - (x.slidesGrid[t + 1] - x.slidesGrid[t]) / 2 ? e = t: r >= x.slidesGrid[t] && r < x.slidesGrid[t + 1] && (e = t + 1) : r >= x.slidesGrid[t] && (e = t); (0 > e || "undefined" == typeof e) && (e = 0),
                n = Math.floor(e / x.params.slidesPerGroup),
                n >= x.snapGrid.length && (n = x.snapGrid.length - 1),
                e !== x.activeIndex && (x.snapIndex = n, x.previousIndex = x.activeIndex, x.activeIndex = e, x.updateClasses())
            },
            x.updateClasses = function() {
                x.slides.removeClass(x.params.slideActiveClass + " " + x.params.slideNextClass + " " + x.params.slidePrevClass);
                var e = x.slides.eq(x.activeIndex);
                e.addClass(x.params.slideActiveClass);
                var n = e.next("." + x.params.slideClass).addClass(x.params.slideNextClass);
                x.params.loop && 0 === n.length && x.slides.eq(0).addClass(x.params.slideNextClass);
                var r = e.prev("." + x.params.slideClass).addClass(x.params.slidePrevClass);
                if (x.params.loop && 0 === r.length && x.slides.eq( - 1).addClass(x.params.slidePrevClass), x.paginationContainer && x.paginationContainer.length > 0) {
                    var i, a = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length;
                    if (x.params.loop ? (i = Math.ceil((x.activeIndex - x.loopedSlides) / x.params.slidesPerGroup), i > x.slides.length - 1 - 2 * x.loopedSlides && (i -= x.slides.length - 2 * x.loopedSlides), i > a - 1 && (i -= a), 0 > i && "bullets" !== x.params.paginationType && (i = a + i)) : i = "undefined" != typeof x.snapIndex ? x.snapIndex: x.activeIndex || 0, "bullets" === x.params.paginationType && x.bullets && x.bullets.length > 0 && (x.bullets.removeClass(x.params.bulletActiveClass), x.paginationContainer.length > 1 ? x.bullets.each(function() {
                        t(this).index() === i && t(this).addClass(x.params.bulletActiveClass)
                    }) : x.bullets.eq(i).addClass(x.params.bulletActiveClass)), "fraction" === x.params.paginationType && (x.paginationContainer.find("." + x.params.paginationCurrentClass).text(i + 1), x.paginationContainer.find("." + x.params.paginationTotalClass).text(a)), "progress" === x.params.paginationType) {
                        var o = (i + 1) / a,
                        s = o,
                        l = 1;
                        x.isHorizontal() || (l = o, s = 1),
                        x.paginationContainer.find("." + x.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + s + ") scaleY(" + l + ")").transition(x.params.speed)
                    }
                    "custom" === x.params.paginationType && x.params.paginationCustomRender && (x.paginationContainer.html(x.params.paginationCustomRender(x, i + 1, a)), x.emit("onPaginationRendered", x, x.paginationContainer[0]))
                }
                x.params.loop || (x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.isBeginning ? (x.prevButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.prevButton)) : (x.prevButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.prevButton))), x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.isEnd ? (x.nextButton.addClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.disable(x.nextButton)) : (x.nextButton.removeClass(x.params.buttonDisabledClass), x.params.a11y && x.a11y && x.a11y.enable(x.nextButton))))
            },
            x.updatePagination = function() {
                if (x.params.pagination && x.paginationContainer && x.paginationContainer.length > 0) {
                    var e = "";
                    if ("bullets" === x.params.paginationType) {
                        for (var t = x.params.loop ? Math.ceil((x.slides.length - 2 * x.loopedSlides) / x.params.slidesPerGroup) : x.snapGrid.length, n = 0; t > n; n++) e += x.params.paginationBulletRender ? x.params.paginationBulletRender(n, x.params.bulletClass) : "<" + x.params.paginationElement + ' class="' + x.params.bulletClass + '"></' + x.params.paginationElement + ">";
                        x.paginationContainer.html(e),
                        x.bullets = x.paginationContainer.find("." + x.params.bulletClass),
                        x.params.paginationClickable && x.params.a11y && x.a11y && x.a11y.initPagination()
                    }
                    "fraction" === x.params.paginationType && (e = x.params.paginationFractionRender ? x.params.paginationFractionRender(x, x.params.paginationCurrentClass, x.params.paginationTotalClass) : '<span class="' + x.params.paginationCurrentClass + '"></span> / <span class="' + x.params.paginationTotalClass + '"></span>', x.paginationContainer.html(e)),
                    "progress" === x.params.paginationType && (e = x.params.paginationProgressRender ? x.params.paginationProgressRender(x, x.params.paginationProgressbarClass) : '<span class="' + x.params.paginationProgressbarClass + '"></span>', x.paginationContainer.html(e)),
                    "custom" !== x.params.paginationType && x.emit("onPaginationRendered", x, x.paginationContainer[0])
                }
            },
            x.update = function(e) {
                function t() {
                    r = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate()),
                    x.setWrapperTranslate(r),
                    x.updateActiveIndex(),
                    x.updateClasses()
                }
                if (x.updateContainerSize(), x.updateSlidesSize(), x.updateProgress(), x.updatePagination(), x.updateClasses(), x.params.scrollbar && x.scrollbar && x.scrollbar.set(), e) {
                    var n, r;
                    x.controller && x.controller.spline && (x.controller.spline = void 0),
                    x.params.freeMode ? (t(), x.params.autoHeight && x.updateAutoHeight()) : (n = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0), n || t())
                } else x.params.autoHeight && x.updateAutoHeight()
            },
            x.onResize = function(e) {
                x.params.breakpoints && x.setBreakpoint();
                var t = x.params.allowSwipeToPrev,
                n = x.params.allowSwipeToNext;
                x.params.allowSwipeToPrev = x.params.allowSwipeToNext = !0,
                x.updateContainerSize(),
                x.updateSlidesSize(),
                ("auto" === x.params.slidesPerView || x.params.freeMode || e) && x.updatePagination(),
                x.params.scrollbar && x.scrollbar && x.scrollbar.set(),
                x.controller && x.controller.spline && (x.controller.spline = void 0);
                var r = !1;
                if (x.params.freeMode) {
                    var i = Math.min(Math.max(x.translate, x.maxTranslate()), x.minTranslate());
                    x.setWrapperTranslate(i),
                    x.updateActiveIndex(),
                    x.updateClasses(),
                    x.params.autoHeight && x.updateAutoHeight()
                } else x.updateClasses(),
                r = ("auto" === x.params.slidesPerView || x.params.slidesPerView > 1) && x.isEnd && !x.params.centeredSlides ? x.slideTo(x.slides.length - 1, 0, !1, !0) : x.slideTo(x.activeIndex, 0, !1, !0);
                x.params.lazyLoading && !r && x.lazy && x.lazy.load(),
                x.params.allowSwipeToPrev = t,
                x.params.allowSwipeToNext = n
            };
            var T = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? T = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (T = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
            x.touchEvents = {
                start: x.support.touch || !x.params.simulateTouch ? "touchstart": T[0],
                move: x.support.touch || !x.params.simulateTouch ? "touchmove": T[1],
                end: x.support.touch || !x.params.simulateTouch ? "touchend": T[2]
            },
            (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === x.params.touchEventsTarget ? x.container: x.wrapper).addClass("swiper-wp8-" + x.params.direction),
            x.initEvents = function(e) {
                var t = e ? "off": "on",
                n = e ? "removeEventListener": "addEventListener",
                r = "container" === x.params.touchEventsTarget ? x.container[0] : x.wrapper[0],
                a = x.support.touch ? r: document,
                o = !!x.params.nested;
                x.browser.ie ? (r[n](x.touchEvents.start, x.onTouchStart, !1), a[n](x.touchEvents.move, x.onTouchMove, o), a[n](x.touchEvents.end, x.onTouchEnd, !1)) : (x.support.touch && (r[n](x.touchEvents.start, x.onTouchStart, !1), r[n](x.touchEvents.move, x.onTouchMove, o), r[n](x.touchEvents.end, x.onTouchEnd, !1)), !i.simulateTouch || x.device.ios || x.device.android || (r[n]("mousedown", x.onTouchStart, !1), document[n]("mousemove", x.onTouchMove, o), document[n]("mouseup", x.onTouchEnd, !1))),
                window[n]("resize", x.onResize),
                x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.nextButton[t]("click", x.onClickNext), x.params.a11y && x.a11y && x.nextButton[t]("keydown", x.a11y.onEnterKey)),
                x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.prevButton[t]("click", x.onClickPrev), x.params.a11y && x.a11y && x.prevButton[t]("keydown", x.a11y.onEnterKey)),
                x.params.pagination && x.params.paginationClickable && (x.paginationContainer[t]("click", "." + x.params.bulletClass, x.onClickIndex), x.params.a11y && x.a11y && x.paginationContainer[t]("keydown", "." + x.params.bulletClass, x.a11y.onEnterKey)),
                (x.params.preventClicks || x.params.preventClicksPropagation) && r[n]("click", x.preventClicks, !0)
            },
            x.attachEvents = function() {
                x.initEvents()
            },
            x.detachEvents = function() {
                x.initEvents(!0)
            },
            x.allowClick = !0,
            x.preventClicks = function(e) {
                x.allowClick || (x.params.preventClicks && e.preventDefault(), x.params.preventClicksPropagation && x.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            },
            x.onClickNext = function(e) {
                e.preventDefault(),
                (!x.isEnd || x.params.loop) && x.slideNext()
            },
            x.onClickPrev = function(e) {
                e.preventDefault(),
                (!x.isBeginning || x.params.loop) && x.slidePrev()
            },
            x.onClickIndex = function(e) {
                e.preventDefault();
                var n = t(this).index() * x.params.slidesPerGroup;
                x.params.loop && (n += x.loopedSlides),
                x.slideTo(n)
            },
            x.updateClickedSlide = function(e) {
                var n = s(e, "." + x.params.slideClass),
                r = !1;
                if (n) for (var i = 0; i < x.slides.length; i++) x.slides[i] === n && (r = !0);
                if (!n || !r) return x.clickedSlide = void 0,
                void(x.clickedIndex = void 0);
                if (x.clickedSlide = n, x.clickedIndex = t(n).index(), x.params.slideToClickedSlide && void 0 !== x.clickedIndex && x.clickedIndex !== x.activeIndex) {
                    var a, o = x.clickedIndex;
                    if (x.params.loop) {
                        if (x.animating) return;
                        a = t(x.clickedSlide).attr("data-swiper-slide-index"),
                        x.params.centeredSlides ? o < x.loopedSlides - x.params.slidesPerView / 2 || o > x.slides.length - x.loopedSlides + x.params.slidesPerView / 2 ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            x.slideTo(o)
                        },
                        0)) : x.slideTo(o) : o > x.slides.length - x.params.slidesPerView ? (x.fixLoop(), o = x.wrapper.children("." + x.params.slideClass + '[data-swiper-slide-index="' + a + '"]:not(.swiper-slide-duplicate)').eq(0).index(), setTimeout(function() {
                            x.slideTo(o)
                        },
                        0)) : x.slideTo(o)
                    } else x.slideTo(o)
                }
            };
            var C, S, E, k, M, z, P, D, L, I, N = "input, select, textarea, button",
            A = Date.now(),
            O = [];
            x.animating = !1,
            x.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var H, B;
            if (x.onTouchStart = function(e) {
                if (e.originalEvent && (e = e.originalEvent), H = "touchstart" === e.type, H || !("which" in e) || 3 !== e.which) {
                    if (x.params.noSwiping && s(e, "." + x.params.noSwipingClass)) return void(x.allowClick = !0);
                    if (!x.params.swipeHandler || s(e, x.params.swipeHandler)) {
                        var n = x.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX: e.pageX,
                        r = x.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY: e.pageY;
                        if (! (x.device.ios && x.params.iOSEdgeSwipeDetection && n <= x.params.iOSEdgeSwipeThreshold)) {
                            if (C = !0, S = !1, E = !0, M = void 0, B = void 0, x.touches.startX = n, x.touches.startY = r, k = Date.now(), x.allowClick = !0, x.updateContainerSize(), x.swipeDirection = void 0, x.params.threshold > 0 && (D = !1), "touchstart" !== e.type) {
                                var i = !0;
                                t(e.target).is(N) && (i = !1),
                                document.activeElement && t(document.activeElement).is(N) && document.activeElement.blur(),
                                i && e.preventDefault()
                            }
                            x.emit("onTouchStart", x, e)
                        }
                    }
                }
            },
            x.onTouchMove = function(e) {
                if (e.originalEvent && (e = e.originalEvent), !H || "mousemove" !== e.type) {
                    if (e.preventedByNestedSwiper) return x.touches.startX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX,
                    void(x.touches.startY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY);
                    if (x.params.onlyExternal) return x.allowClick = !1,
                    void(C && (x.touches.startX = x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, x.touches.startY = x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, k = Date.now()));
                    if (H && document.activeElement && e.target === document.activeElement && t(e.target).is(N)) return S = !0,
                    void(x.allowClick = !1);
                    if (E && x.emit("onTouchMove", x, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                        if (x.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX, x.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY, "undefined" == typeof M) {
                            var n = 180 * Math.atan2(Math.abs(x.touches.currentY - x.touches.startY), Math.abs(x.touches.currentX - x.touches.startX)) / Math.PI;
                            M = x.isHorizontal() ? n > x.params.touchAngle: 90 - n > x.params.touchAngle
                        }
                        if (M && x.emit("onTouchMoveOpposite", x, e), "undefined" == typeof B && x.browser.ieTouch && (x.touches.currentX !== x.touches.startX || x.touches.currentY !== x.touches.startY) && (B = !0), C) {
                            if (M) return void(C = !1);
                            if (B || !x.browser.ieTouch) {
                                x.allowClick = !1,
                                x.emit("onSliderMove", x, e),
                                e.preventDefault(),
                                x.params.touchMoveStopPropagation && !x.params.nested && e.stopPropagation(),
                                S || (i.loop && x.fixLoop(), P = x.getWrapperTranslate(), x.setWrapperTransition(0), x.animating && x.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), x.params.autoplay && x.autoplaying && (x.params.autoplayDisableOnInteraction ? x.stopAutoplay() : x.pauseAutoplay()), I = !1, x.params.grabCursor && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grabbing", x.container[0].style.cursor = "-moz-grabbin", x.container[0].style.cursor = "grabbing")),
                                S = !0;
                                var r = x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX: x.touches.currentY - x.touches.startY;
                                r *= x.params.touchRatio,
                                x.rtl && (r = -r),
                                x.swipeDirection = r > 0 ? "prev": "next",
                                z = r + P;
                                var a = !0;
                                if (r > 0 && z > x.minTranslate() ? (a = !1, x.params.resistance && (z = x.minTranslate() - 1 + Math.pow( - x.minTranslate() + P + r, x.params.resistanceRatio))) : 0 > r && z < x.maxTranslate() && (a = !1, x.params.resistance && (z = x.maxTranslate() + 1 - Math.pow(x.maxTranslate() - P - r, x.params.resistanceRatio))), a && (e.preventedByNestedSwiper = !0), !x.params.allowSwipeToNext && "next" === x.swipeDirection && P > z && (z = P), !x.params.allowSwipeToPrev && "prev" === x.swipeDirection && z > P && (z = P), x.params.followFinger) {
                                    if (x.params.threshold > 0) {
                                        if (! (Math.abs(r) > x.params.threshold || D)) return void(z = P);
                                        if (!D) return D = !0,
                                        x.touches.startX = x.touches.currentX,
                                        x.touches.startY = x.touches.currentY,
                                        z = P,
                                        void(x.touches.diff = x.isHorizontal() ? x.touches.currentX - x.touches.startX: x.touches.currentY - x.touches.startY)
                                    } (x.params.freeMode || x.params.watchSlidesProgress) && x.updateActiveIndex(),
                                    x.params.freeMode && (0 === O.length && O.push({
                                        position: x.touches[x.isHorizontal() ? "startX": "startY"],
                                        time: k
                                    }), O.push({
                                        position: x.touches[x.isHorizontal() ? "currentX": "currentY"],
                                        time: (new window.Date).getTime()
                                    })),
                                    x.updateProgress(z),
                                    x.setWrapperTranslate(z)
                                }
                            }
                        }
                    }
                }
            },
            x.onTouchEnd = function(e) {
                if (e.originalEvent && (e = e.originalEvent), E && x.emit("onTouchEnd", x, e), E = !1, C) {
                    x.params.grabCursor && S && C && (x.container[0].style.cursor = "move", x.container[0].style.cursor = "-webkit-grab", x.container[0].style.cursor = "-moz-grab", x.container[0].style.cursor = "grab");
                    var n = Date.now(),
                    r = n - k;
                    if (x.allowClick && (x.updateClickedSlide(e), x.emit("onTap", x, e), 300 > r && n - A > 300 && (L && clearTimeout(L), L = setTimeout(function() {
                        x && (x.params.paginationHide && x.paginationContainer.length > 0 && !t(e.target).hasClass(x.params.bulletClass) && x.paginationContainer.toggleClass(x.params.paginationHiddenClass), x.emit("onClick", x, e))
                    },
                    300)), 300 > r && 300 > n - A && (L && clearTimeout(L), x.emit("onDoubleTap", x, e))), A = Date.now(), setTimeout(function() {
                        x && (x.allowClick = !0)
                    },
                    0), !C || !S || !x.swipeDirection || 0 === x.touches.diff || z === P) return void(C = S = !1);
                    C = S = !1;
                    var i;
                    if (i = x.params.followFinger ? x.rtl ? x.translate: -x.translate: -z, x.params.freeMode) {
                        if (i < -x.minTranslate()) return void x.slideTo(x.activeIndex);
                        if (i > -x.maxTranslate()) return void(x.slides.length < x.snapGrid.length ? x.slideTo(x.snapGrid.length - 1) : x.slideTo(x.slides.length - 1));
                        if (x.params.freeModeMomentum) {
                            if (O.length > 1) {
                                var a = O.pop(),
                                o = O.pop(),
                                s = a.position - o.position,
                                l = a.time - o.time;
                                x.velocity = s / l,
                                x.velocity = x.velocity / 2,
                                Math.abs(x.velocity) < x.params.freeModeMinimumVelocity && (x.velocity = 0),
                                (l > 150 || (new window.Date).getTime() - a.time > 300) && (x.velocity = 0)
                            } else x.velocity = 0;
                            O.length = 0;
                            var p = 1e3 * x.params.freeModeMomentumRatio,
                            u = x.velocity * p,
                            d = x.translate + u;
                            x.rtl && (d = -d);
                            var c, f = !1,
                            h = 20 * Math.abs(x.velocity) * x.params.freeModeMomentumBounceRatio;
                            if (d < x.maxTranslate()) x.params.freeModeMomentumBounce ? (d + x.maxTranslate() < -h && (d = x.maxTranslate() - h), c = x.maxTranslate(), f = !0, I = !0) : d = x.maxTranslate();
                            else if (d > x.minTranslate()) x.params.freeModeMomentumBounce ? (d - x.minTranslate() > h && (d = x.minTranslate() + h), c = x.minTranslate(), f = !0, I = !0) : d = x.minTranslate();
                            else if (x.params.freeModeSticky) {
                                var m, g = 0;
                                for (g = 0; g < x.snapGrid.length; g += 1) if (x.snapGrid[g] > -d) {
                                    m = g;
                                    break
                                }
                                d = Math.abs(x.snapGrid[m] - d) < Math.abs(x.snapGrid[m - 1] - d) || "next" === x.swipeDirection ? x.snapGrid[m] : x.snapGrid[m - 1],
                                x.rtl || (d = -d)
                            }
                            if (0 !== x.velocity) p = x.rtl ? Math.abs(( - d - x.translate) / x.velocity) : Math.abs((d - x.translate) / x.velocity);
                            else if (x.params.freeModeSticky) return void x.slideReset();
                            x.params.freeModeMomentumBounce && f ? (x.updateProgress(c), x.setWrapperTransition(p), x.setWrapperTranslate(d), x.onTransitionStart(), x.animating = !0, x.wrapper.transitionEnd(function() {
                                x && I && (x.emit("onMomentumBounce", x), x.setWrapperTransition(x.params.speed), x.setWrapperTranslate(c), x.wrapper.transitionEnd(function() {
                                    x && x.onTransitionEnd()
                                }))
                            })) : x.velocity ? (x.updateProgress(d), x.setWrapperTransition(p), x.setWrapperTranslate(d), x.onTransitionStart(), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                                x && x.onTransitionEnd()
                            }))) : x.updateProgress(d),
                            x.updateActiveIndex()
                        }
                        return void((!x.params.freeModeMomentum || r >= x.params.longSwipesMs) && (x.updateProgress(), x.updateActiveIndex()))
                    }
                    var v, y = 0,
                    w = x.slidesSizesGrid[0];
                    for (v = 0; v < x.slidesGrid.length; v += x.params.slidesPerGroup)"undefined" != typeof x.slidesGrid[v + x.params.slidesPerGroup] ? i >= x.slidesGrid[v] && i < x.slidesGrid[v + x.params.slidesPerGroup] && (y = v, w = x.slidesGrid[v + x.params.slidesPerGroup] - x.slidesGrid[v]) : i >= x.slidesGrid[v] && (y = v, w = x.slidesGrid[x.slidesGrid.length - 1] - x.slidesGrid[x.slidesGrid.length - 2]);
                    var b = (i - x.slidesGrid[y]) / w;
                    if (r > x.params.longSwipesMs) {
                        if (!x.params.longSwipes) return void x.slideTo(x.activeIndex);
                        "next" === x.swipeDirection && (b >= x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y)),
                        "prev" === x.swipeDirection && (b > 1 - x.params.longSwipesRatio ? x.slideTo(y + x.params.slidesPerGroup) : x.slideTo(y))
                    } else {
                        if (!x.params.shortSwipes) return void x.slideTo(x.activeIndex);
                        "next" === x.swipeDirection && x.slideTo(y + x.params.slidesPerGroup),
                        "prev" === x.swipeDirection && x.slideTo(y)
                    }
                }
            },
            x._slideTo = function(e, t) {
                return x.slideTo(e, t, !0, !0)
            },
            x.slideTo = function(e, t, n, r) {
                "undefined" == typeof n && (n = !0),
                "undefined" == typeof e && (e = 0),
                0 > e && (e = 0),
                x.snapIndex = Math.floor(e / x.params.slidesPerGroup),
                x.snapIndex >= x.snapGrid.length && (x.snapIndex = x.snapGrid.length - 1);
                var i = -x.snapGrid[x.snapIndex];
                x.params.autoplay && x.autoplaying && (r || !x.params.autoplayDisableOnInteraction ? x.pauseAutoplay(t) : x.stopAutoplay()),
                x.updateProgress(i);
                for (var a = 0; a < x.slidesGrid.length; a++) - Math.floor(100 * i) >= Math.floor(100 * x.slidesGrid[a]) && (e = a);
                return ! (!x.params.allowSwipeToNext && i < x.translate && i < x.minTranslate()) && (!(!x.params.allowSwipeToPrev && i > x.translate && i > x.maxTranslate() && (x.activeIndex || 0) !== e) && ("undefined" == typeof t && (t = x.params.speed), x.previousIndex = x.activeIndex || 0, x.activeIndex = e, x.rtl && -i === x.translate || !x.rtl && i === x.translate ? (x.params.autoHeight && x.updateAutoHeight(), x.updateClasses(), "slide" !== x.params.effect && x.setWrapperTranslate(i), !1) : (x.updateClasses(), x.onTransitionStart(n), 0 === t ? (x.setWrapperTranslate(i), x.setWrapperTransition(0), x.onTransitionEnd(n)) : (x.setWrapperTranslate(i), x.setWrapperTransition(t), x.animating || (x.animating = !0, x.wrapper.transitionEnd(function() {
                    x && x.onTransitionEnd(n)
                }))), !0)))
            },
            x.onTransitionStart = function(e) {
                "undefined" == typeof e && (e = !0),
                x.params.autoHeight && x.updateAutoHeight(),
                x.lazy && x.lazy.onTransitionStart(),
                e && (x.emit("onTransitionStart", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeStart", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextStart", x) : x.emit("onSlidePrevStart", x)))
            },
            x.onTransitionEnd = function(e) {
                x.animating = !1,
                x.setWrapperTransition(0),
                "undefined" == typeof e && (e = !0),
                x.lazy && x.lazy.onTransitionEnd(),
                e && (x.emit("onTransitionEnd", x), x.activeIndex !== x.previousIndex && (x.emit("onSlideChangeEnd", x), x.activeIndex > x.previousIndex ? x.emit("onSlideNextEnd", x) : x.emit("onSlidePrevEnd", x))),
                x.params.hashnav && x.hashnav && x.hashnav.setHash()
            },
            x.slideNext = function(e, t, n) {
                return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)) : x.slideTo(x.activeIndex + x.params.slidesPerGroup, t, e, n)
            },
            x._slideNext = function(e) {
                return x.slideNext(!0, e, !0)
            },
            x.slidePrev = function(e, t, n) {
                return x.params.loop ? !x.animating && (x.fixLoop(), x.container[0].clientLeft, x.slideTo(x.activeIndex - 1, t, e, n)) : x.slideTo(x.activeIndex - 1, t, e, n)
            },
            x._slidePrev = function(e) {
                return x.slidePrev(!0, e, !0)
            },
            x.slideReset = function(e, t, n) {
                return x.slideTo(x.activeIndex, t, e)
            },
            x.setWrapperTransition = function(e, t) {
                x.wrapper.transition(e),
                "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTransition(e),
                x.params.parallax && x.parallax && x.parallax.setTransition(e),
                x.params.scrollbar && x.scrollbar && x.scrollbar.setTransition(e),
                x.params.control && x.controller && x.controller.setTransition(e, t),
                x.emit("onSetTransition", x, e)
            },
            x.setWrapperTranslate = function(e, t, n) {
                var r = 0,
                i = 0,
                o = 0;
                x.isHorizontal() ? r = x.rtl ? -e: e: i = e,
                x.params.roundLengths && (r = a(r), i = a(i)),
                x.params.virtualTranslate || (x.support.transforms3d ? x.wrapper.transform("translate3d(" + r + "px, " + i + "px, " + o + "px)") : x.wrapper.transform("translate(" + r + "px, " + i + "px)")),
                x.translate = x.isHorizontal() ? r: i;
                var s, l = x.maxTranslate() - x.minTranslate();
                s = 0 === l ? 0 : (e - x.minTranslate()) / l,
                s !== x.progress && x.updateProgress(e),
                t && x.updateActiveIndex(),
                "slide" !== x.params.effect && x.effects[x.params.effect] && x.effects[x.params.effect].setTranslate(x.translate),
                x.params.parallax && x.parallax && x.parallax.setTranslate(x.translate),
                x.params.scrollbar && x.scrollbar && x.scrollbar.setTranslate(x.translate),
                x.params.control && x.controller && x.controller.setTranslate(x.translate, n),
                x.emit("onSetTranslate", x, x.translate)
            },
            x.getTranslate = function(e, t) {
                var n, r, i, a;
                return "undefined" == typeof t && (t = "x"),
                x.params.virtualTranslate ? x.rtl ? -x.translate: x.translate: (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (r = i.transform || i.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), a = new window.WebKitCSSMatrix("none" === r ? "": r)) : (a = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = a.toString().split(",")), "x" === t && (r = window.WebKitCSSMatrix ? a.m41: 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (r = window.WebKitCSSMatrix ? a.m42: 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), x.rtl && r && (r = -r), r || 0)
            },
            x.getWrapperTranslate = function(e) {
                return "undefined" == typeof e && (e = x.isHorizontal() ? "x": "y"),
                x.getTranslate(x.wrapper[0], e)
            },
            x.observers = [], x.initObservers = function() {
                if (x.params.observeParents) for (var e = x.container.parents(), t = 0; t < e.length; t++) l(e[t]);
                l(x.container[0], {
                    childList: !1
                }),
                l(x.wrapper[0], {
                    attributes: !1
                })
            },
            x.disconnectObservers = function() {
                for (var e = 0; e < x.observers.length; e++) x.observers[e].disconnect();
                x.observers = []
            },
            x.createLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove();
                var e = x.wrapper.children("." + x.params.slideClass);
                "auto" !== x.params.slidesPerView || x.params.loopedSlides || (x.params.loopedSlides = e.length),
                x.loopedSlides = parseInt(x.params.loopedSlides || x.params.slidesPerView, 10),
                x.loopedSlides = x.loopedSlides + x.params.loopAdditionalSlides,
                x.loopedSlides > e.length && (x.loopedSlides = e.length);
                var n, r = [],
                i = [];
                for (e.each(function(n, a) {
                    var o = t(this);
                    n < x.loopedSlides && i.push(a),
                    n < e.length && n >= e.length - x.loopedSlides && r.push(a),
                    o.attr("data-swiper-slide-index", n)
                }), n = 0; n < i.length; n++) x.wrapper.append(t(i[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass));
                for (n = r.length - 1; n >= 0; n--) x.wrapper.prepend(t(r[n].cloneNode(!0)).addClass(x.params.slideDuplicateClass))
            },
            x.destroyLoop = function() {
                x.wrapper.children("." + x.params.slideClass + "." + x.params.slideDuplicateClass).remove(),
                x.slides.removeAttr("data-swiper-slide-index")
            },
            x.reLoop = function(e) {
                var t = x.activeIndex - x.loopedSlides;
                x.destroyLoop(),
                x.createLoop(),
                x.updateSlidesSize(),
                e && x.slideTo(t + x.loopedSlides, 0, !1)
            },
            x.fixLoop = function() {
                var e;
                x.activeIndex < x.loopedSlides ? (e = x.slides.length - 3 * x.loopedSlides + x.activeIndex, e += x.loopedSlides, x.slideTo(e, 0, !1, !0)) : ("auto" === x.params.slidesPerView && x.activeIndex >= 2 * x.loopedSlides || x.activeIndex > x.slides.length - 2 * x.params.slidesPerView) && (e = -x.slides.length + x.activeIndex + x.loopedSlides, e += x.loopedSlides, x.slideTo(e, 0, !1, !0))
            },
            x.appendSlide = function(e) {
                if (x.params.loop && x.destroyLoop(), "object" == typeof e && e.length) for (var t = 0; t < e.length; t++) e[t] && x.wrapper.append(e[t]);
                else x.wrapper.append(e);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0)
            },
            x.prependSlide = function(e) {
                x.params.loop && x.destroyLoop();
                var t = x.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var n = 0; n < e.length; n++) e[n] && x.wrapper.prepend(e[n]);
                    t = x.activeIndex + e.length
                } else x.wrapper.prepend(e);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0),
                x.slideTo(t, 0, !1)
            },
            x.removeSlide = function(e) {
                x.params.loop && (x.destroyLoop(), x.slides = x.wrapper.children("." + x.params.slideClass));
                var t, n = x.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var r = 0; r < e.length; r++) t = e[r],
                    x.slides[t] && x.slides.eq(t).remove(),
                    n > t && n--;
                    n = Math.max(n, 0)
                } else t = e,
                x.slides[t] && x.slides.eq(t).remove(),
                n > t && n--,
                n = Math.max(n, 0);
                x.params.loop && x.createLoop(),
                x.params.observer && x.support.observer || x.update(!0),
                x.params.loop ? x.slideTo(n + x.loopedSlides, 0, !1) : x.slideTo(n, 0, !1)
            },
            x.removeAllSlides = function() {
                for (var e = [], t = 0; t < x.slides.length; t++) e.push(t);
                x.removeSlide(e)
            },
            x.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < x.slides.length; e++) {
                            var t = x.slides.eq(e),
                            n = t[0].swiperSlideOffset,
                            r = -n;
                            x.params.virtualTranslate || (r -= x.translate);
                            var i = 0;
                            x.isHorizontal() || (i = r, r = 0);
                            var a = x.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                            t.css({
                                opacity: a
                            }).transform("translate3d(" + r + "px, " + i + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (x.slides.transition(e), x.params.virtualTranslate && 0 !== e) {
                            var t = !1;
                            x.slides.transitionEnd(function() {
                                if (!t && x) {
                                    t = !0,
                                    x.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++) x.wrapper.trigger(e[n])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var e = 0; e < x.slides.length; e++) {
                            var n = x.slides.eq(e),
                            r = n[0].progress;
                            x.params.flip.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                            var i = n[0].swiperSlideOffset,
                            a = -180 * r,
                            o = a,
                            s = 0,
                            l = -i,
                            p = 0;
                            if (x.isHorizontal() ? x.rtl && (o = -o) : (p = l, l = 0, s = -o, o = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + x.slides.length, x.params.flip.slideShadows) {
                                var u = x.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                                d = x.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                                0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left": "top") + '"></div>'), n.append(u)),
                                0 === d.length && (d = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right": "bottom") + '"></div>'), n.append(d)),
                                u.length && (u[0].style.opacity = Math.max( - r, 0)),
                                d.length && (d[0].style.opacity = Math.max(r, 0))
                            }
                            n.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + s + "deg) rotateY(" + o + "deg)")
                        }
                    },
                    setTransition: function(e) {
                        if (x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), x.params.virtualTranslate && 0 !== e) {
                            var n = !1;
                            x.slides.eq(x.activeIndex).transitionEnd(function() {
                                if (!n && x && t(this).hasClass(x.params.slideActiveClass)) {
                                    n = !0,
                                    x.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = 0; r < e.length; r++) x.wrapper.trigger(e[r])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var e, n = 0;
                        x.params.cube.shadow && (x.isHorizontal() ? (e = x.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), x.wrapper.append(e)), e.css({
                            height: x.width + "px"
                        })) : (e = x.container.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), x.container.append(e))));
                        for (var r = 0; r < x.slides.length; r++) {
                            var i = x.slides.eq(r),
                            a = 90 * r,
                            o = Math.floor(a / 360);
                            x.rtl && (a = -a, o = Math.floor( - a / 360));
                            var s = Math.max(Math.min(i[0].progress, 1), -1),
                            l = 0,
                            p = 0,
                            u = 0;
                            r % 4 === 0 ? (l = 4 * -o * x.size, u = 0) : (r - 1) % 4 === 0 ? (l = 0, u = 4 * -o * x.size) : (r - 2) % 4 === 0 ? (l = x.size + 4 * o * x.size, u = x.size) : (r - 3) % 4 === 0 && (l = -x.size, u = 3 * x.size + 4 * x.size * o),
                            x.rtl && (l = -l),
                            x.isHorizontal() || (p = l, l = 0);
                            var d = "rotateX(" + (x.isHorizontal() ? 0 : -a) + "deg) rotateY(" + (x.isHorizontal() ? a: 0) + "deg) translate3d(" + l + "px, " + p + "px, " + u + "px)";
                            if (1 >= s && s > -1 && (n = 90 * r + 90 * s, x.rtl && (n = 90 * -r - 90 * s)), i.transform(d), x.params.cube.slideShadows) {
                                var c = x.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                f = x.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === c.length && (c = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left": "top") + '"></div>'), i.append(c)),
                                0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right": "bottom") + '"></div>'), i.append(f)),
                                c.length && (c[0].style.opacity = Math.max( - s, 0)),
                                f.length && (f[0].style.opacity = Math.max(s, 0))
                            }
                        }
                        if (x.wrapper.css({
                            "-webkit-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "-moz-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "-ms-transform-origin": "50% 50% -" + x.size / 2 + "px",
                            "transform-origin": "50% 50% -" + x.size / 2 + "px"
                        }), x.params.cube.shadow) if (x.isHorizontal()) e.transform("translate3d(0px, " + (x.width / 2 + x.params.cube.shadowOffset) + "px, " + -x.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + x.params.cube.shadowScale + ")");
                        else {
                            var h = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90),
                            m = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                            g = x.params.cube.shadowScale,
                            v = x.params.cube.shadowScale / m,
                            y = x.params.cube.shadowOffset;
                            e.transform("scale3d(" + g + ", 1, " + v + ") translate3d(0px, " + (x.height / 2 + y) + "px, " + -x.height / 2 / v + "px) rotateX(-90deg)")
                        }
                        var w = x.isSafari || x.isUiWebView ? -x.size / 2 : 0;
                        x.wrapper.transform("translate3d(0px,0," + w + "px) rotateX(" + (x.isHorizontal() ? 0 : n) + "deg) rotateY(" + (x.isHorizontal() ? -n: 0) + "deg)")
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        x.params.cube.shadow && !x.isHorizontal() && x.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var e = x.translate,
                        n = x.isHorizontal() ? -e + x.width / 2 : -e + x.height / 2, r = x.isHorizontal() ? x.params.coverflow.rotate: -x.params.coverflow.rotate, i = x.params.coverflow.depth, a = 0, o = x.slides.length; o > a; a++) {
                            var s = x.slides.eq(a),
                            l = x.slidesSizesGrid[a],
                            p = s[0].swiperSlideOffset,
                            u = (n - p - l / 2) / l * x.params.coverflow.modifier,
                            d = x.isHorizontal() ? r * u: 0,
                            c = x.isHorizontal() ? 0 : r * u,
                            f = -i * Math.abs(u),
                            h = x.isHorizontal() ? 0 : x.params.coverflow.stretch * u,
                            m = x.isHorizontal() ? x.params.coverflow.stretch * u: 0;
                            Math.abs(m) < .001 && (m = 0),
                            Math.abs(h) < .001 && (h = 0),
                            Math.abs(f) < .001 && (f = 0),
                            Math.abs(d) < .001 && (d = 0),
                            Math.abs(c) < .001 && (c = 0);
                            var g = "translate3d(" + m + "px," + h + "px," + f + "px)  rotateX(" + c + "deg) rotateY(" + d + "deg)";
                            if (s.transform(g), s[0].style.zIndex = -Math.abs(Math.round(u)) + 1, x.params.coverflow.slideShadows) {
                                var v = x.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                                y = x.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "left": "top") + '"></div>'), s.append(v)),
                                0 === y.length && (y = t('<div class="swiper-slide-shadow-' + (x.isHorizontal() ? "right": "bottom") + '"></div>'), s.append(y)),
                                v.length && (v[0].style.opacity = u > 0 ? u: 0),
                                y.length && (y[0].style.opacity = -u > 0 ? -u: 0)
                            }
                        }
                        if (x.browser.ie) {
                            var w = x.wrapper[0].style;
                            w.perspectiveOrigin = n + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        x.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            },
            x.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(e, n) {
                    if ("undefined" != typeof e && ("undefined" == typeof n && (n = !0), 0 !== x.slides.length)) {
                        var r = x.slides.eq(e),
                        i = r.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)"); ! r.hasClass("swiper-lazy") || r.hasClass("swiper-lazy-loaded") || r.hasClass("swiper-lazy-loading") || (i = i.add(r[0])),
                        0 !== i.length && i.each(function() {
                            var e = t(this);
                            e.addClass("swiper-lazy-loading");
                            var i = e.attr("data-background"),
                            a = e.attr("data-src"),
                            o = e.attr("data-srcset");
                            x.loadImage(e[0], a || i, o, !1,
                            function() {
                                if (i ? (e.css("background-image", 'url("' + i + '")'), e.removeAttr("data-background")) : (o && (e.attr("srcset", o), e.removeAttr("data-srcset")), a && (e.attr("src", a), e.removeAttr("data-src"))), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), r.find(".swiper-lazy-preloader, .preloader").remove(), x.params.loop && n) {
                                    var t = r.attr("data-swiper-slide-index");
                                    if (r.hasClass(x.params.slideDuplicateClass)) {
                                        var s = x.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + x.params.slideDuplicateClass + ")");
                                        x.lazy.loadImageInSlide(s.index(), !1)
                                    } else {
                                        var l = x.wrapper.children("." + x.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                        x.lazy.loadImageInSlide(l.index(), !1)
                                    }
                                }
                                x.emit("onLazyImageReady", x, r[0], e[0])
                            }),
                            x.emit("onLazyImageLoad", x, r[0], e[0])
                        })
                    }
                },
                load: function() {
                    var e;
                    if (x.params.watchSlidesVisibility) x.wrapper.children("." + x.params.slideVisibleClass).each(function() {
                        x.lazy.loadImageInSlide(t(this).index())
                    });
                    else if (x.params.slidesPerView > 1) for (e = x.activeIndex; e < x.activeIndex + x.params.slidesPerView; e++) x.slides[e] && x.lazy.loadImageInSlide(e);
                    else x.lazy.loadImageInSlide(x.activeIndex);
                    if (x.params.lazyLoadingInPrevNext) if (x.params.slidesPerView > 1 || x.params.lazyLoadingInPrevNextAmount && x.params.lazyLoadingInPrevNextAmount > 1) {
                        var n = x.params.lazyLoadingInPrevNextAmount,
                        r = x.params.slidesPerView,
                        i = Math.min(x.activeIndex + r + Math.max(n, r), x.slides.length),
                        a = Math.max(x.activeIndex - Math.max(r, n), 0);
                        for (e = x.activeIndex + x.params.slidesPerView; i > e; e++) x.slides[e] && x.lazy.loadImageInSlide(e);
                        for (e = a; e < x.activeIndex; e++) x.slides[e] && x.lazy.loadImageInSlide(e)
                    } else {
                        var o = x.wrapper.children("." + x.params.slideNextClass);
                        o.length > 0 && x.lazy.loadImageInSlide(o.index());
                        var s = x.wrapper.children("." + x.params.slidePrevClass);
                        s.length > 0 && x.lazy.loadImageInSlide(s.index())
                    }
                },
                onTransitionStart: function() {
                    x.params.lazyLoading && (x.params.lazyLoadingOnTransitionStart || !x.params.lazyLoadingOnTransitionStart && !x.lazy.initialImageLoaded) && x.lazy.load()
                },
                onTransitionEnd: function() {
                    x.params.lazyLoading && !x.params.lazyLoadingOnTransitionStart && x.lazy.load()
                }
            },
            x.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var t = x.scrollbar,
                    n = x.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX: e.pageX || e.clientX: "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY: e.pageY || e.clientY,
                    r = n - t.track.offset()[x.isHorizontal() ? "left": "top"] - t.dragSize / 2,
                    i = -x.minTranslate() * t.moveDivider,
                    a = -x.maxTranslate() * t.moveDivider;
                    i > r ? r = i: r > a && (r = a),
                    r = -r / t.moveDivider,
                    x.updateProgress(r),
                    x.setWrapperTranslate(r, !0)
                },
                dragStart: function(e) {
                    var t = x.scrollbar;
                    t.isTouched = !0,
                    e.preventDefault(),
                    e.stopPropagation(),
                    t.setDragPosition(e),
                    clearTimeout(t.dragTimeout),
                    t.track.transition(0),
                    x.params.scrollbarHide && t.track.css("opacity", 1),
                    x.wrapper.transition(100),
                    t.drag.transition(100),
                    x.emit("onScrollbarDragStart", x)
                },
                dragMove: function(e) {
                    var t = x.scrollbar;
                    t.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), x.wrapper.transition(0), t.track.transition(0), t.drag.transition(0), x.emit("onScrollbarDragMove", x))
                },
                dragEnd: function(e) {
                    var t = x.scrollbar;
                    t.isTouched && (t.isTouched = !1, x.params.scrollbarHide && (clearTimeout(t.dragTimeout), t.dragTimeout = setTimeout(function() {
                        t.track.css("opacity", 0),
                        t.track.transition(400)
                    },
                    1e3)), x.emit("onScrollbarDragEnd", x), x.params.scrollbarSnapOnRelease && x.slideReset())
                },
                enableDraggable: function() {
                    var e = x.scrollbar,
                    n = x.support.touch ? e.track: document;
                    t(e.track).on(x.touchEvents.start, e.dragStart),
                    t(n).on(x.touchEvents.move, e.dragMove),
                    t(n).on(x.touchEvents.end, e.dragEnd)
                },
                disableDraggable: function() {
                    var e = x.scrollbar,
                    n = x.support.touch ? e.track: document;
                    t(e.track).off(x.touchEvents.start, e.dragStart),
                    t(n).off(x.touchEvents.move, e.dragMove),
                    t(n).off(x.touchEvents.end, e.dragEnd)
                },
                set: function() {
                    if (x.params.scrollbar) {
                        var e = x.scrollbar;
                        e.track = t(x.params.scrollbar),
                        x.params.uniqueNavElements && "string" == typeof x.params.scrollbar && e.track.length > 1 && 1 === x.container.find(x.params.scrollbar).length && (e.track = x.container.find(x.params.scrollbar)),
                        e.drag = e.track.find(".swiper-scrollbar-drag"),
                        0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)),
                        e.drag[0].style.width = "",
                        e.drag[0].style.height = "",
                        e.trackSize = x.isHorizontal() ? e.track[0].offsetWidth: e.track[0].offsetHeight,
                        e.divider = x.size / x.virtualSize,
                        e.moveDivider = e.divider * (e.trackSize / x.size),
                        e.dragSize = e.trackSize * e.divider,
                        x.isHorizontal() ? e.drag[0].style.width = e.dragSize + "px": e.drag[0].style.height = e.dragSize + "px",
                        e.divider >= 1 ? e.track[0].style.display = "none": e.track[0].style.display = "",
                        x.params.scrollbarHide && (e.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (x.params.scrollbar) {
                        var e, t = x.scrollbar,
                        n = (x.translate || 0, t.dragSize);
                        e = (t.trackSize - t.dragSize) * x.progress,
                        x.rtl && x.isHorizontal() ? (e = -e, e > 0 ? (n = t.dragSize - e, e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e, e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e),
                        x.isHorizontal() ? (x.support.transforms3d ? t.drag.transform("translate3d(" + e + "px, 0, 0)") : t.drag.transform("translateX(" + e + "px)"), t.drag[0].style.width = n + "px") : (x.support.transforms3d ? t.drag.transform("translate3d(0px, " + e + "px, 0)") : t.drag.transform("translateY(" + e + "px)"), t.drag[0].style.height = n + "px"),
                        x.params.scrollbarHide && (clearTimeout(t.timeout), t.track[0].style.opacity = 1, t.timeout = setTimeout(function() {
                            t.track[0].style.opacity = 0,
                            t.track.transition(400)
                        },
                        1e3))
                    }
                },
                setTransition: function(e) {
                    x.params.scrollbar && x.scrollbar.drag.transition(e)
                }
            },
            x.controller = {
                LinearSpline: function(e, t) {
                    this.x = e,
                    this.y = t,
                    this.lastIndex = e.length - 1;
                    var n, r;
                    this.x.length,
                    this.interpolate = function(e) {
                        return e ? (r = i(this.x, e), n = r - 1, (e - this.x[n]) * (this.y[r] - this.y[n]) / (this.x[r] - this.x[n]) + this.y[n]) : 0
                    };
                    var i = function() {
                        var e, t, n;
                        return function(r, i) {
                            for (t = -1, e = r.length; e - t > 1;) r[n = e + t >> 1] <= i ? t = n: e = n;
                            return e
                        }
                    } ()
                },
                getInterpolateFunction: function(e) {
                    x.controller.spline || (x.controller.spline = x.params.loop ? new x.controller.LinearSpline(x.slidesGrid, e.slidesGrid) : new x.controller.LinearSpline(x.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function r(t) {
                        e = t.rtl && "horizontal" === t.params.direction ? -x.translate: x.translate,
                        "slide" === x.params.controlBy && (x.controller.getInterpolateFunction(t), a = -x.controller.spline.interpolate( - e)),
                        a && "container" !== x.params.controlBy || (i = (t.maxTranslate() - t.minTranslate()) / (x.maxTranslate() - x.minTranslate()), a = (e - x.minTranslate()) * i + t.minTranslate()),
                        x.params.controlInverse && (a = t.maxTranslate() - a),
                        t.updateProgress(a),
                        t.setWrapperTranslate(a, !1, x),
                        t.updateActiveIndex()
                    }
                    var i, a, o = x.params.control;
                    if (x.isArray(o)) for (var s = 0; s < o.length; s++) o[s] !== t && o[s] instanceof n && r(o[s]);
                    else o instanceof n && t !== o && r(o)
                },
                setTransition: function(e, t) {
                    function r(t) {
                        t.setWrapperTransition(e, x),
                        0 !== e && (t.onTransitionStart(), t.wrapper.transitionEnd(function() {
                            a && (t.params.loop && "slide" === x.params.controlBy && t.fixLoop(), t.onTransitionEnd())
                        }))
                    }
                    var i, a = x.params.control;
                    if (x.isArray(a)) for (i = 0; i < a.length; i++) a[i] !== t && a[i] instanceof n && r(a[i]);
                    else a instanceof n && t !== a && r(a)
                }
            },
            x.hashnav = {
                init: function() {
                    if (x.params.hashnav) {
                        x.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e) for (var t = 0,
                        n = 0,
                        r = x.slides.length; r > n; n++) {
                            var i = x.slides.eq(n),
                            a = i.attr("data-hash");
                            if (a === e && !i.hasClass(x.params.slideDuplicateClass)) {
                                var o = i.index();
                                x.slideTo(o, t, x.params.runCallbacksOnInit, !0)
                            }
                        }
                    }
                },
                setHash: function() {
                    x.hashnav.initialized && x.params.hashnav && (document.location.hash = x.slides.eq(x.activeIndex).attr("data-hash") || "")
                }
            },
            x.disableKeyboardControl = function() {
                x.params.keyboardControl = !1,
                t(document).off("keydown", p)
            },
            x.enableKeyboardControl = function() {
                x.params.keyboardControl = !0,
                t(document).on("keydown", p)
            },
            x.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            },
            x.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"),
                    x.mousewheel.event = "wheel"
                } catch(j) { (window.WheelEvent || x.container[0] && "wheel" in x.container[0]) && (x.mousewheel.event = "wheel")
                } ! x.mousewheel.event && window.WheelEvent,
                x.mousewheel.event || void 0 === document.onmousewheel || (x.mousewheel.event = "mousewheel"),
                x.mousewheel.event || (x.mousewheel.event = "DOMMouseScroll")
            }
            x.disableMousewheelControl = function() {
                return !! x.mousewheel.event && (x.container.off(x.mousewheel.event, u), !0)
            },
            x.enableMousewheelControl = function() {
                return !! x.mousewheel.event && (x.container.on(x.mousewheel.event, u), !0)
            },
            x.parallax = {
                setTranslate: function() {
                    x.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        d(this, x.progress)
                    }),
                    x.slides.each(function() {
                        var e = t(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var t = Math.min(Math.max(e[0].progress, -1), 1);
                            d(this, t)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = x.params.speed),
                    x.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var n = t(this),
                        r = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (r = 0),
                        n.transition(r)
                    })
                }
            },
            x._plugins = [];
            for (var q in x.plugins) {
                var R = x.plugins[q](x, x.params[q]);
                R && x._plugins.push(R)
            }
            return x.callPlugins = function(e) {
                for (var t = 0; t < x._plugins.length; t++) e in x._plugins[t] && x._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            },
            x.emitterEventListeners = {},
            x.emit = function(e) {
                x.params[e] && x.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var t;
                if (x.emitterEventListeners[e]) for (t = 0; t < x.emitterEventListeners[e].length; t++) x.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                x.callPlugins && x.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            },
            x.on = function(e, t) {
                return e = c(e),
                x.emitterEventListeners[e] || (x.emitterEventListeners[e] = []),
                x.emitterEventListeners[e].push(t),
                x
            },
            x.off = function(e, t) {
                var n;
                if (e = c(e), "undefined" == typeof t) return x.emitterEventListeners[e] = [],
                x;
                if (x.emitterEventListeners[e] && 0 !== x.emitterEventListeners[e].length) {
                    for (n = 0; n < x.emitterEventListeners[e].length; n++) x.emitterEventListeners[e][n] === t && x.emitterEventListeners[e].splice(n, 1);
                    return x
                }
            },
            x.once = function(e, t) {
                e = c(e);
                var n = function() {
                    t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                    x.off(e, n)
                };
                return x.on(e, n),
                x
            },
            x.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"),
                    e
                },
                addRole: function(e, t) {
                    return e.attr("role", t),
                    e
                },
                addLabel: function(e, t) {
                    return e.attr("aria-label", t),
                    e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0),
                    e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1),
                    e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (t(e.target).is(x.params.nextButton) ? (x.onClickNext(e), x.isEnd ? x.a11y.notify(x.params.lastSlideMessage) : x.a11y.notify(x.params.nextSlideMessage)) : t(e.target).is(x.params.prevButton) && (x.onClickPrev(e), x.isBeginning ? x.a11y.notify(x.params.firstSlideMessage) : x.a11y.notify(x.params.prevSlideMessage)), t(e.target).is("." + x.params.bulletClass) && t(e.target)[0].click())
                },
                liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var t = x.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e))
                },
                init: function() {
                    x.params.nextButton && x.nextButton && x.nextButton.length > 0 && (x.a11y.makeFocusable(x.nextButton), x.a11y.addRole(x.nextButton, "button"), x.a11y.addLabel(x.nextButton, x.params.nextSlideMessage)),
                    x.params.prevButton && x.prevButton && x.prevButton.length > 0 && (x.a11y.makeFocusable(x.prevButton), x.a11y.addRole(x.prevButton, "button"), x.a11y.addLabel(x.prevButton, x.params.prevSlideMessage)),
                    t(x.container).append(x.a11y.liveRegion)
                },
                initPagination: function() {
                    x.params.pagination && x.params.paginationClickable && x.bullets && x.bullets.length && x.bullets.each(function() {
                        var e = t(this);
                        x.a11y.makeFocusable(e),
                        x.a11y.addRole(e, "button"),
                        x.a11y.addLabel(e, x.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    x.a11y.liveRegion && x.a11y.liveRegion.length > 0 && x.a11y.liveRegion.remove()
                }
            },
            x.init = function() {
                x.params.loop && x.createLoop(),
                x.updateContainerSize(),
                x.updateSlidesSize(),
                x.updatePagination(),
                x.params.scrollbar && x.scrollbar && (x.scrollbar.set(), x.params.scrollbarDraggable && x.scrollbar.enableDraggable()),
                "slide" !== x.params.effect && x.effects[x.params.effect] && (x.params.loop || x.updateProgress(), x.effects[x.params.effect].setTranslate()),
                x.params.loop ? x.slideTo(x.params.initialSlide + x.loopedSlides, 0, x.params.runCallbacksOnInit) : (x.slideTo(x.params.initialSlide, 0, x.params.runCallbacksOnInit), 0 === x.params.initialSlide && (x.parallax && x.params.parallax && x.parallax.setTranslate(), x.lazy && x.params.lazyLoading && (x.lazy.load(), x.lazy.initialImageLoaded = !0))),
                x.attachEvents(),
                x.params.observer && x.support.observer && x.initObservers(),
                x.params.preloadImages && !x.params.lazyLoading && x.preloadImages(),
                x.params.autoplay && x.startAutoplay(),
                x.params.keyboardControl && x.enableKeyboardControl && x.enableKeyboardControl(),
                x.params.mousewheelControl && x.enableMousewheelControl && x.enableMousewheelControl(),
                x.params.hashnav && x.hashnav && x.hashnav.init(),
                x.params.a11y && x.a11y && x.a11y.init(),
                x.emit("onInit", x)
            },
            x.cleanupStyles = function() {
                x.container.removeClass(x.classNames.join(" ")).removeAttr("style"),
                x.wrapper.removeAttr("style"),
                x.slides && x.slides.length && x.slides.removeClass([x.params.slideVisibleClass, x.params.slideActiveClass, x.params.slideNextClass, x.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                x.paginationContainer && x.paginationContainer.length && x.paginationContainer.removeClass(x.params.paginationHiddenClass),
                x.bullets && x.bullets.length && x.bullets.removeClass(x.params.bulletActiveClass),
                x.params.prevButton && t(x.params.prevButton).removeClass(x.params.buttonDisabledClass),
                x.params.nextButton && t(x.params.nextButton).removeClass(x.params.buttonDisabledClass),
                x.params.scrollbar && x.scrollbar && (x.scrollbar.track && x.scrollbar.track.length && x.scrollbar.track.removeAttr("style"), x.scrollbar.drag && x.scrollbar.drag.length && x.scrollbar.drag.removeAttr("style"))
            },
            x.destroy = function(e, t) {
                x.detachEvents(),
                x.stopAutoplay(),
                x.params.scrollbar && x.scrollbar && x.params.scrollbarDraggable && x.scrollbar.disableDraggable(),
                x.params.loop && x.destroyLoop(),
                t && x.cleanupStyles(),
                x.disconnectObservers(),
                x.params.keyboardControl && x.disableKeyboardControl && x.disableKeyboardControl(),
                x.params.mousewheelControl && x.disableMousewheelControl && x.disableMousewheelControl(),
                x.params.a11y && x.a11y && x.a11y.destroy(),
                x.emit("onDestroy"),
                e !== !1 && (x = null)
            },
            x.init(),
            x
        }
    };
    n.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        } (),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent,
            t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            n = e.match(/(iPad).*OS\s([\d_]+)/),
            r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            i = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: n || i || r,
                android: t
            }
        } (),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 ||
            function() {
                return !! ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            } (),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 ||
            function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            } (),
            flexbox: function() {
                for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++) if (t[n] in e) return ! 0
            } (),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            } ()
        },
        plugins: {}
    };
    for (var r = (function() {
        var e = function(e) {
            var t = this,
            n = 0;
            for (n = 0; n < e.length; n++) t[n] = e[n];
            return t.length = e.length,
            this
        },
        t = function(t, n) {
            var r = [],
            i = 0;
            if (t && !n && t instanceof e) return t;
            if (t) if ("string" == typeof t) {
                var a, o, s = t.trim();
                if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                    var l = "div";
                    for (0 === s.indexOf("<li") && (l = "ul"), 0 === s.indexOf("<tr") && (l = "tbody"), (0 === s.indexOf("<td") || 0 === s.indexOf("<th")) && (l = "tr"), 0 === s.indexOf("<tbody") && (l = "table"), 0 === s.indexOf("<option") && (l = "select"), o = document.createElement(l), o.innerHTML = t, i = 0; i < o.childNodes.length; i++) r.push(o.childNodes[i])
                } else for (a = n || "#" !== t[0] || t.match(/[ .<>:~]/) ? (n || document).querySelectorAll(t) : [document.getElementById(t.split("#")[1])], i = 0; i < a.length; i++) a[i] && r.push(a[i])
            } else if (t.nodeType || t === window || t === document) r.push(t);
            else if (t.length > 0 && t[0].nodeType) for (i = 0; i < t.length; i++) r.push(t[i]);
            return new e(r)
        };
        return e.prototype = {
            addClass: function(e) {
                if ("undefined" == typeof e) return this;
                for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.add(t[n]);
                return this
            },
            removeClass: function(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.remove(t[n]);
                return this
            },
            hasClass: function(e) {
                return !! this[0] && this[0].classList.contains(e)
            },
            toggleClass: function(e) {
                for (var t = e.split(" "), n = 0; n < t.length; n++) for (var r = 0; r < this.length; r++) this[r].classList.toggle(t[n]);
                return this
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var n = 0; n < this.length; n++) if (2 === arguments.length) this[n].setAttribute(e, t);
                else for (var r in e) this[n][r] = e[r],
                this[n].setAttribute(r, e[r]);
                return this
            },
            removeAttr: function(e) {
                for (var t = 0; t < this.length; t++) this[t].removeAttribute(e);
                return this
            },
            data: function(e, t) {
                if ("undefined" != typeof t) {
                    for (var n = 0; n < this.length; n++) {
                        var r = this[n];
                        r.dom7ElementDataStorage || (r.dom7ElementDataStorage = {}),
                        r.dom7ElementDataStorage[e] = t
                    }
                    return this
                }
                if (this[0]) {
                    var i = this[0].getAttribute("data-" + e);
                    return i ? i: this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                }
            },
            transform: function(e) {
                for (var t = 0; t < this.length; t++) {
                    var n = this[t].style;
                    n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                }
                return this
            },
            transition: function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t++) {
                    var n = this[t].style;
                    n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                }
                return this
            },
            on: function(e, n, r, i) {
                function a(e) {
                    var i = e.target;
                    if (t(i).is(n)) r.call(i, e);
                    else for (var a = t(i).parents(), o = 0; o < a.length; o++) t(a[o]).is(n) && r.call(a[o], e)
                }
                var o, s, l = e.split(" ");
                for (o = 0; o < this.length; o++) if ("function" == typeof n || n === !1) for ("function" == typeof n && (r = arguments[1], i = arguments[2] || !1), s = 0; s < l.length; s++) this[o].addEventListener(l[s], r, i);
                else for (s = 0; s < l.length; s++) this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []),
                this[o].dom7LiveListeners.push({
                    listener: r,
                    liveListener: a
                }),
                this[o].addEventListener(l[s], a, i);
                return this
            },
            off: function(e, t, n, r) {
                for (var i = e.split(" "), a = 0; a < i.length; a++) for (var o = 0; o < this.length; o++) if ("function" == typeof t || t === !1)"function" == typeof t && (n = arguments[1], r = arguments[2] || !1),
                this[o].removeEventListener(i[a], n, r);
                else if (this[o].dom7LiveListeners) for (var s = 0; s < this[o].dom7LiveListeners.length; s++) this[o].dom7LiveListeners[s].listener === n && this[o].removeEventListener(i[a], this[o].dom7LiveListeners[s].liveListener, r);
                return this
            },
            once: function(e, t, n, r) {
                function i(o) {
                    n(o),
                    a.off(e, t, i, r)
                }
                var a = this;
                "function" == typeof t && (t = !1, n = arguments[1], r = arguments[2]),
                a.on(e, t, i, r)
            },
            trigger: function(e, t) {
                for (var n = 0; n < this.length; n++) {
                    var r;
                    try {
                        r = new window.CustomEvent(e, {
                            detail: t,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch(i) {
                        r = document.createEvent("Event"),
                        r.initEvent(e, !0, !0),
                        r.detail = t
                    }
                    this[n].dispatchEvent(r)
                }
                return this
            },
            transitionEnd: function(e) {
                function t(a) {
                    if (a.target === this) for (e.call(this, a), n = 0; n < r.length; n++) i.off(r[n], t)
                }
                var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                i = this;
                if (e) for (n = 0; n < r.length; n++) i.on(r[n], t);
                return this
            },
            width: function() {
                return this[0] === window ? window.innerWidth: this.length > 0 ? parseFloat(this.css("width")) : null
            },
            outerWidth: function(e) {
                return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth: null
            },
            height: function() {
                return this[0] === window ? window.innerHeight: this.length > 0 ? parseFloat(this.css("height")) : null
            },
            outerHeight: function(e) {
                return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight: null
            },
            offset: function() {
                if (this.length > 0) {
                    var e = this[0],
                    t = e.getBoundingClientRect(),
                    n = document.body,
                    r = e.clientTop || n.clientTop || 0,
                    i = e.clientLeft || n.clientLeft || 0,
                    a = window.pageYOffset || e.scrollTop,
                    o = window.pageXOffset || e.scrollLeft;
                    return {
                        top: t.top + a - r,
                        left: t.left + o - i
                    }
                }
                return null
            },
            css: function(e, t) {
                var n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n++) for (var r in e) this[n].style[r] = e[r];
                        return this
                    }
                    if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e) {
                    for (n = 0; n < this.length; n++) this[n].style[e] = t;
                    return this
                }
                return this
            },
            each: function(e) {
                for (var t = 0; t < this.length; t++) e.call(this[t], t, this[t]);
                return this
            },
            html: function(e) {
                if ("undefined" == typeof e) return this[0] ? this[0].innerHTML: void 0;
                for (var t = 0; t < this.length; t++) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if ("undefined" == typeof e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t++) this[t].textContent = e;
                return this
            },
            is: function(n) {
                if (!this[0]) return ! 1;
                var r, i;
                if ("string" == typeof n) {
                    var a = this[0];
                    if (a === document) return n === document;
                    if (a === window) return n === window;
                    if (a.matches) return a.matches(n);
                    if (a.webkitMatchesSelector) return a.webkitMatchesSelector(n);
                    if (a.mozMatchesSelector) return a.mozMatchesSelector(n);
                    if (a.msMatchesSelector) return a.msMatchesSelector(n);
                    for (r = t(n), i = 0; i < r.length; i++) if (r[i] === this[0]) return ! 0;
                    return ! 1
                }
                if (n === document) return this[0] === document;
                if (n === window) return this[0] === window;
                if (n.nodeType || n instanceof e) {
                    for (r = n.nodeType ? [n] : n, i = 0; i < r.length; i++) if (r[i] === this[0]) return ! 0;
                    return ! 1
                }
                return ! 1
            },
            index: function() {
                if (this[0]) {
                    for (var e = this[0], t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && t++;
                    return t
                }
            },
            eq: function(t) {
                if ("undefined" == typeof t) return this;
                var n, r = this.length;
                return t > r - 1 ? new e([]) : 0 > t ? (n = r + t, new e(0 > n ? [] : [this[n]])) : new e([this[t]])
            },
            append: function(t) {
                var n, r;
                for (n = 0; n < this.length; n++) if ("string" == typeof t) {
                    var i = document.createElement("div");
                    for (i.innerHTML = t; i.firstChild;) this[n].appendChild(i.firstChild)
                } else if (t instanceof e) for (r = 0; r < t.length; r++) this[n].appendChild(t[r]);
                else this[n].appendChild(t);
                return this
            },
            prepend: function(t) {
                var n, r;
                for (n = 0; n < this.length; n++) if ("string" == typeof t) {
                    var i = document.createElement("div");
                    for (i.innerHTML = t, r = i.childNodes.length - 1; r >= 0; r--) this[n].insertBefore(i.childNodes[r], this[n].childNodes[0])
                } else if (t instanceof e) for (r = 0; r < t.length; r++) this[n].insertBefore(t[r], this[n].childNodes[0]);
                else this[n].insertBefore(t, this[n].childNodes[0]);
                return this
            },
            insertBefore: function(e) {
                for (var n = t(e), r = 0; r < this.length; r++) if (1 === n.length) n[0].parentNode.insertBefore(this[r], n[0]);
                else if (n.length > 1) for (var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i])
            },
            insertAfter: function(e) {
                for (var n = t(e), r = 0; r < this.length; r++) if (1 === n.length) n[0].parentNode.insertBefore(this[r], n[0].nextSibling);
                else if (n.length > 1) for (var i = 0; i < n.length; i++) n[i].parentNode.insertBefore(this[r].cloneNode(!0), n[i].nextSibling)
            },
            next: function(n) {
                return new e(this.length > 0 ? n ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(n) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
            },
            nextAll: function(n) {
                var r = [],
                i = this[0];
                if (!i) return new e([]);
                for (; i.nextElementSibling;) {
                    var a = i.nextElementSibling;
                    n ? t(a).is(n) && r.push(a) : r.push(a),
                    i = a
                }
                return new e(r)
            },
            prev: function(n) {
                return new e(this.length > 0 ? n ? this[0].previousElementSibling && t(this[0].previousElementSibling).is(n) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
            },
            prevAll: function(n) {
                var r = [],
                i = this[0];
                if (!i) return new e([]);
                for (; i.previousElementSibling;) {
                    var a = i.previousElementSibling;
                    n ? t(a).is(n) && r.push(a) : r.push(a),
                    i = a
                }
                return new e(r)
            },
            parent: function(e) {
                for (var n = [], r = 0; r < this.length; r++) e ? t(this[r].parentNode).is(e) && n.push(this[r].parentNode) : n.push(this[r].parentNode);
                return t(t.unique(n))
            },
            parents: function(e) {
                for (var n = [], r = 0; r < this.length; r++) for (var i = this[r].parentNode; i;) e ? t(i).is(e) && n.push(i) : n.push(i),
                i = i.parentNode;
                return t(t.unique(n))
            },
            find: function(t) {
                for (var n = [], r = 0; r < this.length; r++) for (var i = this[r].querySelectorAll(t), a = 0; a < i.length; a++) n.push(i[a]);
                return new e(n)
            },
            children: function(n) {
                for (var r = [], i = 0; i < this.length; i++) for (var a = this[i].childNodes, o = 0; o < a.length; o++) n ? 1 === a[o].nodeType && t(a[o]).is(n) && r.push(a[o]) : 1 === a[o].nodeType && r.push(a[o]);
                return new e(t.unique(r))
            },
            remove: function() {
                for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            },
            add: function() {
                var e, n, r = this;
                for (e = 0; e < arguments.length; e++) {
                    var i = t(arguments[e]);
                    for (n = 0; n < i.length; n++) r[r.length] = i[n],
                    r.length++
                }
                return r
            }
        },
        t.fn = e.prototype,
        t.unique = function(e) {
            for (var t = [], n = 0; n < e.length; n++) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        },
        t
    } ()), i = ["jQuery", "Zepto", "Dom7"], a = 0; a < i.length; a++) window[i[a]] && e(window[i[a]]);
    var o;
    o = "undefined" == typeof r ? window.Dom7 || window.Zepto || window.jQuery: r,
    o && ("transitionEnd" in o.fn || (o.fn.transitionEnd = function(e) {
        function t(a) {
            if (a.target === this) for (e.call(this, a), n = 0; n < r.length; n++) i.off(r[n], t)
        }
        var n, r = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
        i = this;
        if (e) for (n = 0; n < r.length; n++) i.on(r[n], t);
        return this
    }), "transform" in o.fn || (o.fn.transform = function(e) {
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
        }
        return this
    }), "transition" in o.fn || (o.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var t = 0; t < this.length; t++) {
            var n = this[t].style;
            n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
        }
        return this
    })),
    window.Swiper = n
} (),
"undefined" != typeof module ? module.exports = window.Swiper: "function" == typeof define && define.amd && define([],
function() {
    "use strict";
    return window.Swiper
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t() : e.Blazy = t()
} (this,
function() {
    function e(e) {
        var n = e._util;
        n.elements = s(e.options.selector),
        n.count = n.elements.length,
        n.destroyed && (n.destroyed = !1, e.options.container && d(e.options.container,
        function(e) {
            p(e, "scroll", n.validateT)
        }), p(window, "resize", n.save_viewportOffsetT), p(window, "resize", n.validateT), p(window, "scroll", n.validateT)),
        t(e)
    }
    function t(e) {
        for (var t = e._util,
        n = 0; n < t.count; n++) {
            var r = t.elements[n],
            i = r.getBoundingClientRect(); (i.right >= h.left && i.bottom >= h.top && i.left <= h.right && i.top <= h.bottom || a(r, e.options.successClass)) && (e.load(r), t.elements.splice(n, 1), t.count--, n--)
        }
        0 === t.count && e.destroy()
    }
    function n(e, t, n) {
        if (!a(e, n.successClass) && (t || n.loadInvisible || 0 < e.offsetWidth && 0 < e.offsetHeight)) if (t = e.getAttribute(f) || e.getAttribute(n.src)) {
            t = t.split(n.separator);
            var s = t[m && 1 < t.length ? 1 : 0],
            l = "img" === e.nodeName.toLowerCase();
            if (l || void 0 === e.src) {
                var c = new Image,
                h = function() {
                    n.error && n.error(e, "invalid"),
                    o(e, n.errorClass),
                    u(c, "error", h),
                    u(c, "load", g)
                },
                g = function() {
                    if (l) {
                        e.src = s,
                        i(e, "srcset", n.srcset);
                        var t = e.parentNode;
                        t && "picture" === t.nodeName.toLowerCase() && d(t.getElementsByTagName("source"),
                        function(e) {
                            i(e, "srcset", n.srcset)
                        })
                    } else e.style.backgroundImage = 'url("' + s + '")';
                    r(e, n),
                    u(c, "load", g),
                    u(c, "error", h)
                };
                p(c, "error", h),
                p(c, "load", g),
                c.src = s
            } else e.src = s,
            r(e, n)
        } else "video" === e.nodeName.toLowerCase() ? (d(e.getElementsByTagName("source"),
        function(e) {
            i(e, "src", n.src)
        }), e.load(), r(e, n)) : (n.error && n.error(e, "missing"), o(e, n.errorClass))
    }
    function r(e, t) {
        o(e, t.successClass),
        t.success && t.success(e),
        e.removeAttribute(t.src),
        d(t.breakpoints,
        function(t) {
            e.removeAttribute(t.src)
        })
    }
    function i(e, t, n) {
        var r = e.getAttribute(n);
        r && (e[t] = r, e.removeAttribute(n))
    }
    function a(e, t) {
        return - 1 !== (" " + e.className + " ").indexOf(" " + t + " ")
    }
    function o(e, t) {
        a(e, t) || (e.className += " " + t)
    }
    function s(e) {
        var t = [];
        e = document.querySelectorAll(e);
        for (var n = e.length; n--; t.unshift(e[n]));
        return t
    }
    function l(e) {
        h.bottom = (window.innerHeight || document.documentElement.clientHeight) + e,
        h.right = (window.innerWidth || document.documentElement.clientWidth) + e
    }
    function p(e, t, n) {
        e.attachEvent ? e.attachEvent && e.attachEvent("on" + t, n) : e.addEventListener(t, n, !1)
    }
    function u(e, t, n) {
        e.detachEvent ? e.detachEvent && e.detachEvent("on" + t, n) : e.removeEventListener(t, n, !1)
    }
    function d(e, t) {
        if (e && t) for (var n = e.length,
        r = 0; r < n && !1 !== t(e[r], r); r++);
    }
    function c(e, t, n) {
        var r = 0;
        return function() {
            var i = +new Date;
            i - r < t || (r = i, e.apply(n, arguments))
        }
    }
    var f, h, m;
    return function(r) {
        if (!document.querySelectorAll) {
            var i = document.createStyleSheet();
            document.querySelectorAll = function(e, t, n, r, a) {
                for (a = document.all, t = [], e = e.replace(/\[for\b/gi, "[htmlFor").split(","), n = e.length; n--;) {
                    for (i.addRule(e[n], "k:v"), r = a.length; r--;) a[r].currentStyle.k && t.push(a[r]);
                    i.removeRule(0)
                }
                return t
            }
        }
        var a = this,
        o = a._util = {};
        o.elements = [],
        o.destroyed = !0,
        a.options = r || {},
        a.options.error = a.options.error || !1,
        a.options.offset = a.options.offset || 100,
        a.options.success = a.options.success || !1,
        a.options.selector = a.options.selector || ".b-lazy",
        a.options.separator = a.options.separator || "|",
        a.options.container = !!a.options.container && document.querySelectorAll(a.options.container),
        a.options.errorClass = a.options.errorClass || "b-error",
        a.options.breakpoints = a.options.breakpoints || !1,
        a.options.loadInvisible = a.options.loadInvisible || !1,
        a.options.successClass = a.options.successClass || "b-loaded",
        a.options.validateDelay = a.options.validateDelay || 25,
        a.options.save_viewportOffsetDelay = a.options.save_viewportOffsetDelay || 50,
        a.options.srcset = a.options.srcset || "data-srcset",
        a.options.src = f = a.options.src || "data-src",
        m = 1 < window.devicePixelRatio,
        h = {},
        h.top = 0 - a.options.offset,
        h.left = 0 - a.options.offset,
        a.revalidate = function() {
            e(this)
        },
        a.load = function(e, t) {
            var r = this.options;
            void 0 === e.length ? n(e, t, r) : d(e,
            function(e) {
                n(e, t, r)
            })
        },
        a.destroy = function() {
            var e = this._util;
            this.options.container && d(this.options.container,
            function(t) {
                u(t, "scroll", e.validateT)
            }),
            u(window, "scroll", e.validateT),
            u(window, "resize", e.validateT),
            u(window, "resize", e.save_viewportOffsetT),
            e.count = 0,
            e.elements.length = 0,
            e.destroyed = !0
        },
        o.validateT = c(function() {
            t(a)
        },
        a.options.validateDelay, a),
        o.save_viewportOffsetT = c(function() {
            l(a.options.offset)
        },
        a.options.save_viewportOffsetDelay, a),
        l(a.options.offset),
        d(a.options.breakpoints,
        function(e) {
            if (e.width >= window.screen.width) return f = e.src,
            !1
        }),
        setTimeout(function() {
            e(a)
        })
    }
}),
function(e, t) {
    var n = function(e, t, n) {
        var r;
        return function() {
            function i() {
                n || e.apply(a, o),
                r = null
            }
            var a = this,
            o = arguments;
            r ? clearTimeout(r) : n && e.apply(a, o),
            r = setTimeout(i, t || 100)
        }
    };
    jQuery.fn[t] = function(e) {
        return e ? this.bind("resize", n(e)) : this.trigger(t)
    }
} (jQuery, "smartModalResize"),
function(e) {
    "use strict";
    var t = {
        init: function(t) {
            var n = {
                top: "auto",
                left: "auto",
                autoOpen: !1,
                overlayOpacity: .5,
                overlayColor: "#000",
                overlayClose: !0,
                overlayParent: "body",
                closeOnEscape: !0,
                closeButtonClass: ".close",
                transitionIn: "",
                transitionOut: "",
                onOpen: !1,
                onClose: !1,
                zIndex: function() {
                    return function(e) {
                        return e === -(1 / 0) ? 0 : e + 1
                    } (Math.max.apply(Math, e.makeArray(e("*").map(function() {
                        return e(this).css("z-index")
                    }).filter(function() {
                        return e.isNumeric(this)
                    }).map(function() {
                        return parseInt(this, 10)
                    }))))
                },
                updateZIndexOnOpen: !0,
                hasVariableWidth: !1
            };
            return t = e.extend(n, t),
            this.each(function() {
                var n = t,
                r = e('<div class="lean-overlay"></div>'),
                i = e(this);
                r.css({
                    display: "none",
                    position: "fixed",
                    "z-index": n.updateZIndexOnOpen ? 0 : n.zIndex(),
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    background: n.overlayColor,
                    opacity: n.overlayOpacity,
                    overflow: "auto"
                }).appendTo(n.overlayParent),
                i.css({
                    display: "none",
                    position: "fixed",
                    "z-index": n.updateZIndexOnOpen ? 0 : n.zIndex() + 1,
                    left: parseInt(n.left, 10) > -1 ? n.left + "px": "50%",
                    top: parseInt(n.top, 10) > -1 ? n.top + "px": "50%"
                }),
                i.bind("openModal",
                function() {
                    var e = 5,
                    t = e + 1;
                    "" !== n.transitionIn && "" !== n.transitionOut && i.removeClass(n.transitionOut).addClass(n.transitionIn),
                    i.css({
                        display: "block",
                        "margin-left": (parseInt(n.left, 10) > -1 ? 0 : -(i.outerWidth() / 2)) + "px",
                        "margin-top": (parseInt(n.top, 10) > -1 ? 0 : -(i.outerHeight() / 2)) + "px",
                        "z-index": t
                    }),
                    r.css({
                        "z-index": e,
                        display: "block"
                    }),
                    n.onOpen && "function" == typeof n.onOpen && n.onOpen(i[0])
                }),
                i.bind("closeModal",
                function() {
                    "" !== n.transitionIn && "" !== n.transitionOut ? (i.removeClass(n.transitionIn).addClass(n.transitionOut), i.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function() {
                        i.css("display", "none"),
                        r.css("display", "none")
                    })) : (i.css("display", "none"), r.css("display", "none")),
                    n.onClose && "function" == typeof n.onClose && n.onClose(i[0])
                }),
                r.click(function() {
                    n.overlayClose && i.trigger("closeModal")
                }),
                e(document).keydown(function(e) {
                    n.closeOnEscape && 27 === e.keyCode && i.trigger("closeModal")
                }),
                e(window).smartModalResize(function() {
                    n.hasVariableWidth && i.css({
                        "margin-left": (parseInt(n.left, 10) > -1 ? 0 : -(i.outerWidth() / 2)) + "px",
                        "margin-top": (parseInt(n.top, 10) > -1 ? 0 : -(i.outerHeight() / 2)) + "px"
                    })
                }),
                i.on("click", n.closeButtonClass,
                function(e) {
                    i.trigger("closeModal"),
                    e.preventDefault()
                }),
                n.autoOpen && i.trigger("openModal")
            })
        }
    };
    e.fn.easyModal = function(n) {
        return t[n] ? t[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error("Method " + n + " does not exist on jQuery.easyModal") : t.init.apply(this, arguments)
    }
} (jQuery),
function(e, t) {
    function n(t, n) {
        n = n || {};
        var r = this,
        i = n.query || "> :even";
        e.extend(r, {
            $el: t,
            options: n,
            sections: [],
            isAccordion: n.accordion || !1,
            db: !!n.persist && jQueryCollapseStorage(t.get(0).id)
        }),
        r.states = r.db ? r.db.read() : [],
        r.$el.find(i).each(function() {
            new jQueryCollapseSection(e(this), r)
        }),
        function(t) {
            r.$el.on("click", "[data-collapse-summary] " + (t.options.clickQuery || ""), e.proxy(r.handleClick, t)),
            r.$el.bind("toggle close open", e.proxy(r.handleEvent, t))
        } (r)
    }
    function r(t, n) {
        n.options.clickQuery || t.wrapInner('<a href="#"/>'),
        e.extend(this, {
            isOpen: !1,
            $summary: t.attr("data-collapse-summary", ""),
            $details: t.next(),
            options: n.options,
            parent: n
        }),
        n.sections.push(this);
        var r = n.states[this._index()];
        0 === r ? this.close(!0) : this.$summary.is(".open") || 1 === r ? this.open(!0) : this.close(!0)
    }
    n.prototype = {
        handleClick: function(t, n) {
            t.preventDefault(),
            n = n || "toggle";
            for (var r = this.sections,
            i = r.length; i--;) if (e.contains(r[i].$summary[0], t.target)) {
                r[i][n]();
                break
            }
        },
        handleEvent: function(e) {
            return e.target == this.$el.get(0) ? this[e.type]() : void this.handleClick(e, e.type)
        },
        open: function(e) {
            this._change("open", e)
        },
        close: function(e) {
            this._change("close", e)
        },
        toggle: function(e) {
            this._change("toggle", e)
        },
        _change: function(t, n) {
            return isFinite(n) ? this.sections[n][t]() : void e.each(this.sections,
            function(e, n) {
                n[t]()
            })
        }
    },
    r.prototype = {
        toggle: function() {
            this.isOpen ? this.close() : this.open()
        },
        close: function(e) {
            this._changeState("close", e)
        },
        open: function(t) {
            var n = this;
            n.options.accordion && !t && e.each(n.parent.sections,
            function(e, t) {
                t.close()
            }),
            n._changeState("open", t)
        },
        _index: function() {
            return e.inArray(this, this.parent.sections)
        },
        _changeState: function(t, n) {
            var r = this;
            r.isOpen = "open" == t,
            e.isFunction(r.options[t]) && !n ? r.options[t].apply(r.$details) : r.$details[r.isOpen ? "show": "hide"](),
            r.$summary.toggleClass("open", "close" !== t),
            r.$details.attr("aria-hidden", "close" === t),
            r.$summary.attr("aria-expanded", "open" === t),
            r.$summary.trigger("open" === t ? "opened": "closed", r),
            r.parent.db && r.parent.db.write(r._index(), r.isOpen)
        }
    },
    e.fn.extend({
        collapse: function(t, r) {
            var i = r ? e("body").find("[data-collapse]") : e(this);
            return i.each(function() {
                var i = r ? {}: t,
                a = e(this).attr("data-collapse") || "";
                e.each(a.split(" "),
                function(e, t) {
                    t && (i[t] = !0)
                }),
                new n(e(this), i)
            })
        }
    }),
    t.jQueryCollapse = n,
    t.jQueryCollapseSection = r,
    e(function() {
        e.fn.collapse(!1, !0)
    })
} (window.jQuery, window),
function(e) {
    function t(t) {
        var r;
        try {
            r = window.localStorage || e.fn.collapse.cookieStorage
        } catch(i) {
            r = !1
        }
        return !! r && new n(t, r)
    }
    function n(e, t) {
        this.id = e,
        this.db = t,
        this.data = []
    }
    var r = "jQuery-Collapse";
    n.prototype = {
        write: function(t, n) {
            var i = this;
            i.data[t] = n ? 1 : 0,
            e.each(i.data,
            function(e) {
                "undefined" == typeof i.data[e] && (i.data[e] = 0)
            });
            var a = this._getDataObject();
            a[this.id] = this.data,
            this.db.setItem(r, JSON.stringify(a))
        },
        read: function() {
            var e = this._getDataObject();
            return e[this.id] || []
        },
        _getDataObject: function() {
            var e = this.db.getItem(r);
            return e ? JSON.parse(e) : {}
        }
    },
    jQueryCollapseStorage = t
} (jQuery);
var u_source = qs("utm_source"),
u_medium = qs("utm_medium"),
u_campaign = qs("utm_campaign"); (u_source || u_medium || u_campaign) && (createCookie("u_source", u_source, 7), createCookie("u_medium", u_medium, 7), createCookie("u_campaign", u_campaign, 7));
var referer = document.referrer;
referer && (readCookie("rr") || (referer.indexOf("avhd101.com") == -1 ? createCookie("rr", referer, 7) : createCookie("rr", "direct", 7))),
$(window).scroll(function() {
    $(this).scrollTop() > 100 ? $("#top-link-block").removeClass("hide").fadeIn() : $("#top-link-block").stop(!0, !0).fadeOut()
});
var imgW = $("html").width();
if (imgW < 767) var swiper = new Swiper(".menu-container", {
    slidesPerView: "auto",
    freeMode: !0,
    nextButton: ".menu-button-next",
    prevButton: ".menu-button-prev"
});
var bLazy = new Blazy({
    offset: 200
}),
searchShow = !1;
$(".search-icon").on("click",
function() {
    searchShow ? ($("form.search").removeClass("show"), searchShow = !1) : ($("form.search").addClass("show"), searchShow = !0)
}),
$("input.input-page-jump").keyup(function() {
    var e = parseInt($(this).attr("size")),
    t = $(this).val().length;
    t >= e && $(this).attr("size", t)
});