'use strict';
var ba, ca, da, ea, x, fa, ga, ha, G, ia, ja, la, ma, na, oa, Q, pa, qa, U, ra, ua, va, wa, V, xa, ya, za, Aa, Ca, W, Da, Ea, Fa, Ga, Ha, Ia, Ja, Ka, La, Ma, Na, Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Ya, Za, $a, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Y, Sb, Tb = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(d) { return d.__proto__ } : function(d) { return d.constructor.prototype });
(function() {
    function d(a, c, e, h) { this.set(a, c, e, h) }

    function n() { this.eb = this.cb = this.gb = this.fb = this.pb = this.ob = this.Ra = this.Qa = 0 }

    function k(a, c, e, h) { a < c ? e < h ? (v = a < e ? a : e, B = c > h ? c : h) : (v = a < h ? a : h, B = c > e ? c : e) : e < h ? (v = c < e ? c : e, B = a > h ? a : h) : (v = c < h ? c : h, B = a > e ? a : e) }

    function q() { this.items = this.Uc = null;
        this.rg = 0;
        aa && (this.Uc = new Set);
        this.If = [];
        this.Ad = !0 }

    function t(a) { z[S++] = a }

    function l() { this.qa = this.Di = this.y = this.$i = 0 }

    function b(a) { this.Pa = [];
        this.ih = this.kh = this.lh = this.jh = 0;
        this.Qg(a) }

    function a(a, c) {
        this.dj =
            a;
        this.cj = c;
        this.cells = {}
    }

    function f(a, c) { this.dj = a;
        this.cj = c;
        this.cells = {} }

    function r(a, c, e) { var h; return I.length ? (h = I.pop(), h.Jj = a, h.x = c, h.y = e, h) : new ca(a, c, e) }

    function c(a, c, e) { this.Jj = a;
        this.x = c;
        this.y = e;
        this.Ta = new da }

    function e(a, c, e) { var h; return J.length ? (h = J.pop(), h.Jj = a, h.x = c, h.y = e, h) : new ea(a, c, e) }

    function u(a, c, e) { this.Jj = a;
        this.x = c;
        this.y = e;
        this.Ta = [];
        this.kf = !0;
        this.Rc = new da;
        this.Mf = !1 }

    function g(a, c) { return a.Jc - c.Jc }
    x = function(a) { window.console && window.console.log && window.console.log(a) };
    fa = function(a) { window.console && window.console.error && window.console.error(a) };
    ba = function(a) { return a };
    ga = function(a) { return "undefined" === typeof a };
    ha = function(a) { return "number" === typeof a };
    G = function(a) { return "string" === typeof a };
    ia = function(a) { return 0 < a && 0 === (a - 1 & a) };
    ja = function(a) {--a; for (var c = 1; 32 > c; c <<= 1) a = a | a >> c; return a + 1 };
    la = function(a) { return 0 > a ? -a : a };
    ma = function(a, c) { return a > c ? a : c };
    na = function(a, c) { return a < c ? a : c };
    oa = Math.PI;
    Q = function(a) { return 0 <= a ? a | 0 : (a | 0) - 1 };
    pa = function(a) {
        var c =
            a | 0;
        return c === a ? c : c + 1
    };
    qa = function(a, c, e, h, f, g, w, y) { var A, m, r, b;
        a < e ? (m = a, A = e) : (m = e, A = a);
        f < w ? (b = f, r = w) : (b = w, r = f); if (A < b || m > r) return !1;
        c < h ? (m = c, A = h) : (m = h, A = c);
        g < y ? (b = g, r = y) : (b = y, r = g); if (A < b || m > r) return !1;
        A = f - a + w - e;
        m = g - c + y - h;
        a = e - a;
        c = h - c;
        f = w - f;
        g = y - g;
        y = la(c * f - g * a); return la(f * m - g * A) > y ? !1 : la(a * m - c * A) <= y };
    d.prototype.set = function(a, c, e, h) { this.left = a;
        this.top = c;
        this.right = e;
        this.bottom = h };
    d.prototype.Sf = function(a) { this.left = a.left;
        this.top = a.top;
        this.right = a.right;
        this.bottom = a.bottom };
    d.prototype.width =
        function() { return this.right - this.left };
    d.prototype.height = function() { return this.bottom - this.top };
    d.prototype.offset = function(a, c) { this.left += a;
        this.top += c;
        this.right += a;
        this.bottom += c; return this };
    d.prototype.normalize = function() { var a = 0;
        this.left > this.right && (a = this.left, this.left = this.right, this.right = a);
        this.top > this.bottom && (a = this.top, this.top = this.bottom, this.bottom = a) };
    d.prototype.xr = function(a) { return !(a.right < this.left || a.bottom < this.top || a.left > this.right || a.top > this.bottom) };
    d.prototype.yr =
        function(a, c, e) { return !(a.right + c < this.left || a.bottom + e < this.top || a.left + c > this.right || a.top + e > this.bottom) };
    d.prototype.sb = function(a, c) { return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom };
    d.prototype.Wf = function(a) { return this.left === a.left && this.top === a.top && this.right === a.right && this.bottom === a.bottom };
    U = d;
    n.prototype.Pg = function(a) { this.Qa = a.left;
        this.Ra = a.top;
        this.ob = a.right;
        this.pb = a.top;
        this.fb = a.right;
        this.gb = a.bottom;
        this.cb = a.left;
        this.eb = a.bottom };
    n.prototype.Mn = function(a,
        c) { if (0 === c) this.Pg(a);
        else { var e = Math.sin(c),
                h = Math.cos(c),
                f = a.left * e,
                g = a.top * e,
                w = a.right * e,
                e = a.bottom * e,
                y = a.left * h,
                A = a.top * h,
                m = a.right * h,
                h = a.bottom * h;
            this.Qa = y - g;
            this.Ra = A + f;
            this.ob = m - g;
            this.pb = A + w;
            this.fb = m - e;
            this.gb = h + w;
            this.cb = y - e;
            this.eb = h + f } };
    n.prototype.offset = function(a, c) { this.Qa += a;
        this.Ra += c;
        this.ob += a;
        this.pb += c;
        this.fb += a;
        this.gb += c;
        this.cb += a;
        this.eb += c; return this };
    var v = 0,
        B = 0;
    n.prototype.Hl = function(a) {
        k(this.Qa, this.ob, this.fb, this.cb);
        a.left = v;
        a.right = B;
        k(this.Ra, this.pb, this.gb,
            this.eb);
        a.top = v;
        a.bottom = B
    };
    n.prototype.sb = function(a, c) { var e = this.Qa,
            h = this.Ra,
            f = this.ob - e,
            g = this.pb - h,
            w = this.fb - e,
            y = this.gb - h,
            A = a - e,
            m = c - h,
            r = f * f + g * g,
            b = f * w + g * y,
            g = f * A + g * m,
            d = w * w + y * y,
            u = w * A + y * m,
            p = 1 / (r * d - b * b),
            f = (d * g - b * u) * p,
            r = (r * u - b * g) * p; if (0 <= f && 0 < r && 1 > f + r) return !0;
        f = this.cb - e;
        g = this.eb - h;
        r = f * f + g * g;
        b = f * w + g * y;
        g = f * A + g * m;
        p = 1 / (r * d - b * b);
        f = (d * g - b * u) * p;
        r = (r * u - b * g) * p; return 0 <= f && 0 < r && 1 > f + r };
    n.prototype.yd = function(a, c) {
        if (c) switch (a) {
            case 0:
                return this.Qa;
            case 1:
                return this.ob;
            case 2:
                return this.fb;
            case 3:
                return this.cb;
            case 4:
                return this.Qa;
            default:
                return this.Qa
        } else switch (a) {
            case 0:
                return this.Ra;
            case 1:
                return this.pb;
            case 2:
                return this.gb;
            case 3:
                return this.eb;
            case 4:
                return this.Ra;
            default:
                return this.Ra }
    };
    n.prototype.an = function() { return (this.Qa + this.ob + this.fb + this.cb) / 4 };
    n.prototype.bn = function() { return (this.Ra + this.pb + this.gb + this.eb) / 4 };
    n.prototype.tm = function(a) {
        var c = a.an(),
            e = a.bn();
        if (this.sb(c, e)) return !0;
        c = this.an();
        e = this.bn();
        if (a.sb(c, e)) return !0;
        var h, f, g, w, y, A, m, r;
        for (m = 0; 4 > m; m++)
            for (r = 0; 4 > r; r++)
                if (c =
                    this.yd(m, !0), e = this.yd(m, !1), h = this.yd(m + 1, !0), f = this.yd(m + 1, !1), g = a.yd(r, !0), w = a.yd(r, !1), y = a.yd(r + 1, !0), A = a.yd(r + 1, !1), qa(c, e, h, f, g, w, y, A)) return !0;
        return !1
    };
    ra = n;
    ua = function(a, c) { for (var e in c) c.hasOwnProperty(e) && (a[e] = c[e]); return a };
    va = function(a, c) { var e, h;
        c = Q(c); if (!(0 > c || c >= a.length)) { e = c; for (h = a.length - 1; e < h; e++) a[e] = a[e + 1];
            wa(a, h) } };
    wa = function(a, c) { a.length = c };
    V = function(a) { wa(a, 0) };
    xa = function(a, c) { V(a); var e, h;
        e = 0; for (h = c.length; e < h; ++e) a[e] = c[e] };
    ya = function(a, c) { a.push.apply(a, c) };
    za = function(a, c) { var e, h;
        e = 0; for (h = a.length; e < h; ++e)
            if (a[e] === c) return e;
        return -1 };
    Aa = function(a, c) { var e = za(a, c); - 1 !== e && va(a, e) };
    Ca = function(a, c, e) { return a < c ? c : a > e ? e : a };
    W = function(a) { return a / (180 / oa) };
    Da = function(a) { return 180 / oa * a };
    Ea = function(a) { a %= 360;
        0 > a && (a += 360); return a };
    Fa = function(a) { a %= 2 * oa;
        0 > a && (a += 2 * oa); return a };
    Ga = function(a) { return Ea(Da(a)) };
    Ha = function(a) { return Fa(W(a)) };
    Ia = function(a, c, e, h) { return Math.atan2(h - c, e - a) };
    Ja = function(a, c) {
        if (a === c) return 0;
        var e = Math.sin(a),
            h = Math.cos(a),
            f = Math.sin(c),
            g = Math.cos(c),
            e = e * f + h * g;
        return 1 <= e ? 0 : -1 >= e ? oa : Math.acos(e)
    };
    Ka = function(a, c, e) { var h = Math.sin(a),
            f = Math.cos(a),
            g = Math.sin(c),
            w = Math.cos(c); return Math.acos(h * g + f * w) > e ? 0 < f * g - h * w ? Fa(a + e) : Fa(a - e) : Fa(c) };
    La = function(a, c) { var e = Math.sin(a),
            h = Math.cos(a),
            f = Math.sin(c),
            g = Math.cos(c); return 0 >= h * f - e * g };
    Ma = function(a, c, e, h) { a = e - a;
        c = h - c; return Math.sqrt(a * a + c * c) };
    Na = function(a, c) { return !a !== !c };
    Oa = function(a) { for (var c in a)
            if (a.hasOwnProperty(c)) return !0;
        return !1 };
    Pa = function(a) {
        for (var c in a) a.hasOwnProperty(c) &&
            delete a[c]
    };
    var p = +new Date;
    Qa = function() { if ("undefined" !== typeof window.performance) { var a = window.performance; if ("undefined" !== typeof a.now) return a.now(); if ("undefined" !== typeof a.webkitNow) return a.webkitNow(); if ("undefined" !== typeof a.mozNow) return a.mozNow(); if ("undefined" !== typeof a.msNow) return a.msNow() } return Date.now() - p };
    var h = !1,
        m = h = !1,
        Ba = !1;
    "undefined" !== typeof window && (h = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), h = !h && /safari/i.test(navigator.userAgent),
        m = /(iphone|ipod|ipad)/i.test(navigator.userAgent), Ba = window.c2ejecta);
    var aa = !h && !Ba && !m && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
    q.prototype.contains = function(a) { return this.fd() ? !1 : aa ? this.Uc.has(a) : this.items && this.items.hasOwnProperty(a) };
    q.prototype.add = function(a) { if (aa) this.Uc.has(a) || (this.Uc.add(a), this.Ad = !1);
        else { var c = a.toString(),
                e = this.items;
            e ? e.hasOwnProperty(c) || (e[c] = a, this.rg++, this.Ad = !1) : (this.items = {}, this.items[c] = a, this.rg = 1, this.Ad = !1) } };
    q.prototype.remove =
        function(a) { if (!this.fd())
                if (aa) this.Uc.has(a) && (this.Uc["delete"](a), this.Ad = !1);
                else if (this.items) { a = a.toString(); var c = this.items;
                c.hasOwnProperty(a) && (delete c[a], this.rg--, this.Ad = !1) } };
    q.prototype.clear = function() { this.fd() || (aa ? this.Uc.clear() : (this.items = null, this.rg = 0), V(this.If), this.Ad = !0) };
    q.prototype.fd = function() { return 0 === this.count() };
    q.prototype.count = function() { return aa ? this.Uc.size : this.rg };
    var z = null,
        S = 0;
    q.prototype.Ns = function() {
        if (!this.Ad) {
            if (aa) V(this.If), z = this.If, S = 0,
                this.Uc.forEach(t), z = null, S = 0;
            else { var a = this.If;
                V(a); var c, e = 0,
                    h = this.items; if (h)
                    for (c in h) h.hasOwnProperty(c) && (a[e++] = h[c]) }
            this.Ad = !0
        }
    };
    q.prototype.qd = function() { this.Ns(); return this.If };
    da = q;
    new da;
    Ra = function(a, c) { aa ? Sa(a, c.Uc) : Ta(a, c.qd()) };
    Sa = function(a, c) { var e, h, f, g;
        h = e = 0; for (f = a.length; e < f; ++e) g = a[e], c.has(g) || (a[h++] = g);
        wa(a, h) };
    Ta = function(a, c) { var e, h, f, g;
        h = e = 0; for (f = a.length; e < f; ++e) g = a[e], -1 === za(c, g) && (a[h++] = g);
        wa(a, h) };
    l.prototype.add = function(a) {
        this.y = a - this.$i;
        this.Di = this.qa +
            this.y;
        this.$i = this.Di - this.qa - this.y;
        this.qa = this.Di
    };
    l.prototype.reset = function() { this.qa = this.Di = this.y = this.$i = 0 };
    Ua = l;
    Va = function(a) { return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") };
    b.prototype.Qg = function(a) { this.xn = a;
        this.Ec = a.length / 2;
        this.Pa.length = a.length;
        this.nh = this.oh = -1;
        this.Kl = 0 };
    b.prototype.hf = function() { return !this.xn.length };
    b.prototype.S = function() {
        for (var a = this.Pa, c = a[0], e = c, h = a[1], f = h, g, w, y = 1, m = this.Ec; y < m; ++y) w = 2 * y, g = a[w], w = a[w + 1], g < c && (c = g), g > e && (e = g), w < h && (h = w), w > f &&
            (f = w);
        this.jh = c;
        this.kh = e;
        this.lh = h;
        this.ih = f
    };
    b.prototype.Pg = function(a, c, e) { this.Pa.length = 8;
        this.Ec = 4; var h = this.Pa;
        h[0] = a.left - c;
        h[1] = a.top - e;
        h[2] = a.right - c;
        h[3] = a.top - e;
        h[4] = a.right - c;
        h[5] = a.bottom - e;
        h[6] = a.left - c;
        h[7] = a.bottom - e;
        this.oh = a.right - a.left;
        this.nh = a.bottom - a.top;
        this.S() };
    b.prototype.Cf = function(a, c, e, h, f) { this.Pa.length = 8;
        this.Ec = 4; var g = this.Pa;
        g[0] = a.Qa - c;
        g[1] = a.Ra - e;
        g[2] = a.ob - c;
        g[3] = a.pb - e;
        g[4] = a.fb - c;
        g[5] = a.gb - e;
        g[6] = a.cb - c;
        g[7] = a.eb - e;
        this.oh = h;
        this.nh = f;
        this.S() };
    b.prototype.Ln =
        function(a) { this.Ec = a.Ec;
            xa(this.Pa, a.Pa);
            this.jh = a.jh;
            this.lh - a.lh;
            this.kh = a.kh;
            this.ih = a.ih };
    b.prototype.Ye = function(a, c, e) { if (this.oh !== a || this.nh !== c || this.Kl !== e) { this.oh = a;
            this.nh = c;
            this.Kl = e; var h, f, g, w, y, m = 0,
                r = 1,
                b = this.xn,
                d = this.Pa;
            0 !== e && (m = Math.sin(e), r = Math.cos(e));
            e = 0; for (g = this.Ec; e < g; e++) h = 2 * e, f = h + 1, w = b[h] * a, y = b[f] * c, d[h] = w * r - y * m, d[f] = y * r + w * m;
            this.S() } };
    b.prototype.sb = function(a, c) {
        var e = this.Pa;
        if (a === e[0] && c === e[1]) return !0;
        var h, f, g, w = this.Ec,
            y = this.jh - 110,
            m = this.lh - 101,
            r = this.kh +
            131,
            b = this.ih + 120,
            d, u, p = 0,
            v = 0;
        for (h = 0; h < w; h++) f = 2 * h, g = (h + 1) % w * 2, d = e[f], f = e[f + 1], u = e[g], g = e[g + 1], qa(y, m, a, c, d, f, u, g) && p++, qa(r, b, a, c, d, f, u, g) && v++;
        return 1 === p % 2 || 1 === v % 2
    };
    b.prototype.kg = function(a, c, e) { var h = a.Pa,
            f = this.Pa; if (this.sb(h[0] + c, h[1] + e) || a.sb(f[0] - c, f[1] - e)) return !0; var g, w, y, m, r, b, d, u, p, v, k, l;
        g = 0; for (m = this.Ec; g < m; g++)
            for (w = 2 * g, y = (g + 1) % m * 2, u = f[w], w = f[w + 1], p = f[y], v = f[y + 1], y = 0, d = a.Ec; y < d; y++)
                if (r = 2 * y, b = (y + 1) % d * 2, k = h[r] + c, r = h[r + 1] + e, l = h[b] + c, b = h[b + 1] + e, qa(u, w, p, v, k, r, l, b)) return !0;
        return !1 };
    Wa = b;
    a.prototype.Id = function(a, c, e) { var h;
        h = this.cells[a]; return h ? (h = h[c]) ? h : e ? (h = r(this, a, c), this.cells[a][c] = h) : null : e ? (h = r(this, a, c), this.cells[a] = {}, this.cells[a][c] = h) : null };
    a.prototype.wb = function(a) { return Q(a / this.dj) };
    a.prototype.xb = function(a) { return Q(a / this.cj) };
    a.prototype.update = function(a, c, e) {
        var h, f, g, w, y;
        if (c)
            for (h = c.left, f = c.right; h <= f; ++h)
                for (g = c.top, w = c.bottom; g <= w; ++g)
                    if (!e || !e.sb(h, g))
                        if (y = this.Id(h, g, !1)) y.remove(a), y.fd() && (y.Ta.clear(), 1E3 > I.length && I.push(y), this.cells[h][g] =
                            null);
        if (e)
            for (h = e.left, f = e.right; h <= f; ++h)
                for (g = e.top, w = e.bottom; g <= w; ++g) c && c.sb(h, g) || this.Id(h, g, !0).Qj(a)
    };
    a.prototype.pi = function(a, c) { var e, h, f, g, w, y;
        e = this.wb(a.left);
        f = this.xb(a.top);
        h = this.wb(a.right); for (w = this.xb(a.bottom); e <= h; ++e)
            for (g = f; g <= w; ++g)(y = this.Id(e, g, !1)) && y.dump(c) };
    Ya = a;
    f.prototype.Id = function(a, c, h) { var f;
        f = this.cells[a]; return f ? (f = f[c]) ? f : h ? (f = e(this, a, c), this.cells[a][c] = f) : null : h ? (f = e(this, a, c), this.cells[a] = {}, this.cells[a][c] = f) : null };
    f.prototype.wb = function(a) {
        return Q(a /
            this.dj)
    };
    f.prototype.xb = function(a) { return Q(a / this.cj) };
    f.prototype.update = function(a, c, e) { var h, f, g, w, y; if (c)
            for (h = c.left, f = c.right; h <= f; ++h)
                for (g = c.top, w = c.bottom; g <= w; ++g)
                    if (!e || !e.sb(h, g))
                        if (y = this.Id(h, g, !1)) y.remove(a), y.fd() && (y.reset(), 1E3 > J.length && J.push(y), this.cells[h][g] = null);
        if (e)
            for (h = e.left, f = e.right; h <= f; ++h)
                for (g = e.top, w = e.bottom; g <= w; ++g) c && c.sb(h, g) || this.Id(h, g, !0).Qj(a) };
    f.prototype.pi = function(a, c, e, h, f) {
        var g, w;
        a = this.wb(a);
        c = this.xb(c);
        e = this.wb(e);
        for (g = this.xb(h); a <=
            e; ++a)
            for (h = c; h <= g; ++h)(w = this.Id(a, h, !1)) && w.dump(f)
    };
    f.prototype.Lr = function(a) { var c, e, h, f, g;
        c = a.left;
        h = a.top;
        e = a.right; for (f = a.bottom; c <= e; ++c)
            for (a = h; a <= f; ++a)
                if (g = this.Id(c, a, !1)) g.kf = !1 };
    Za = f;
    var I = [];
    c.prototype.fd = function() { return this.Ta.fd() };
    c.prototype.Qj = function(a) { this.Ta.add(a) };
    c.prototype.remove = function(a) { this.Ta.remove(a) };
    c.prototype.dump = function(a) { ya(a, this.Ta.qd()) };
    ca = c;
    var J = [];
    u.prototype.fd = function() {
        if (!this.Ta.length) return !0;
        if (this.Ta.length > this.Rc.count()) return !1;
        this.uj();
        return !0
    };
    u.prototype.Qj = function(a) { this.Rc.contains(a) ? (this.Rc.remove(a), this.Rc.fd() && (this.Mf = !1)) : this.Ta.length ? (this.Ta[this.Ta.length - 1].Oc() > a.Oc() && (this.kf = !1), this.Ta.push(a)) : (this.Ta.push(a), this.kf = !0) };
    u.prototype.remove = function(a) { this.Rc.add(a);
        this.Mf = !0;
        30 <= this.Rc.count() && this.uj() };
    u.prototype.uj = function() { this.Mf && (this.Rc.count() === this.Ta.length ? this.reset() : (Ra(this.Ta, this.Rc), this.Rc.clear(), this.Mf = !1)) };
    u.prototype.cq = function() {
        this.kf || (this.Ta.sort(g),
            this.kf = !0)
    };
    u.prototype.reset = function() { V(this.Ta);
        this.kf = !0;
        this.Rc.clear();
        this.Mf = !1 };
    u.prototype.dump = function(a) { this.uj();
        this.cq();
        this.Ta.length && a.push(this.Ta) };
    ea = u;
    var C = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
    $a = function(a) { return 0 >= a || 11 <= a ? "source-over" : C[a - 1] };
    ab = function(a, c, e) {
        if (e) switch (a.nb = e.ONE, a.ib = e.ONE_MINUS_SRC_ALPHA, c) {
            case 1:
                a.nb = e.ONE;
                a.ib = e.ONE;
                break;
            case 3:
                a.nb = e.ONE;
                a.ib = e.ZERO;
                break;
            case 4:
                a.nb = e.ONE_MINUS_DST_ALPHA;
                a.ib = e.ONE;
                break;
            case 5:
                a.nb = e.DST_ALPHA;
                a.ib = e.ZERO;
                break;
            case 6:
                a.nb = e.ZERO;
                a.ib = e.SRC_ALPHA;
                break;
            case 7:
                a.nb = e.ONE_MINUS_DST_ALPHA;
                a.ib = e.ZERO;
                break;
            case 8:
                a.nb = e.ZERO;
                a.ib = e.ONE_MINUS_SRC_ALPHA;
                break;
            case 9:
                a.nb = e.DST_ALPHA;
                a.ib = e.ONE_MINUS_SRC_ALPHA;
                break;
            case 10:
                a.nb = e.ONE_MINUS_DST_ALPHA, a.ib = e.SRC_ALPHA
        }
    };
    bb = function(a) { return Math.round(1E6 * a) / 1E6 };
    cb = function(a, c) {
        return "string" !== typeof a || "string" !== typeof c || a.length !== c.length ? !1 : a === c ? !0 : a.toLowerCase() ===
            c.toLowerCase()
    };
    db = function(a) { a = a.target; return !a || a === document || a === window || document && document.body && a === document.body || cb(a.tagName, "canvas") ? !0 : !1 }
})();
var Ub = "undefined" !== typeof Float32Array ? Float32Array : Array;

function Vb(d) { var n = new Ub(3);
    d && (n[0] = d[0], n[1] = d[1], n[2] = d[2]); return n }

function Wb(d) { var n = new Ub(16);
    d && (n[0] = d[0], n[1] = d[1], n[2] = d[2], n[3] = d[3], n[4] = d[4], n[5] = d[5], n[6] = d[6], n[7] = d[7], n[8] = d[8], n[9] = d[9], n[10] = d[10], n[11] = d[11], n[12] = d[12], n[13] = d[13], n[14] = d[14], n[15] = d[15]); return n }

function Xb(d, n) { n[0] = d[0];
    n[1] = d[1];
    n[2] = d[2];
    n[3] = d[3];
    n[4] = d[4];
    n[5] = d[5];
    n[6] = d[6];
    n[7] = d[7];
    n[8] = d[8];
    n[9] = d[9];
    n[10] = d[10];
    n[11] = d[11];
    n[12] = d[12];
    n[13] = d[13];
    n[14] = d[14];
    n[15] = d[15] }

function Yb(d, n) { var k = n[0],
        q = n[1];
    n = n[2];
    d[0] *= k;
    d[1] *= k;
    d[2] *= k;
    d[3] *= k;
    d[4] *= q;
    d[5] *= q;
    d[6] *= q;
    d[7] *= q;
    d[8] *= n;
    d[9] *= n;
    d[10] *= n;
    d[11] *= n }

function Zb(d, n, k, q) {
    q || (q = Wb());
    var t, l, b, a, f, r, c, e, u = d[0],
        g = d[1];
    d = d[2];
    l = k[0];
    b = k[1];
    t = k[2];
    k = n[1];
    r = n[2];
    u === n[0] && g === k && d === r ? (d = q, d[0] = 1, d[1] = 0, d[2] = 0, d[3] = 0, d[4] = 0, d[5] = 1, d[6] = 0, d[7] = 0, d[8] = 0, d[9] = 0, d[10] = 1, d[11] = 0, d[12] = 0, d[13] = 0, d[14] = 0, d[15] = 1) : (k = u - n[0], r = g - n[1], c = d - n[2], e = 1 / Math.sqrt(k * k + r * r + c * c), k *= e, r *= e, c *= e, n = b * c - t * r, t = t * k - l * c, l = l * r - b * k, (e = Math.sqrt(n * n + t * t + l * l)) ? (e = 1 / e, n *= e, t *= e, l *= e) : l = t = n = 0, b = r * l - c * t, a = c * n - k * l, f = k * t - r * n, (e = Math.sqrt(b * b + a * a + f * f)) ? (e = 1 / e, b *= e, a *= e, f *= e) : f = a = b = 0,
        q[0] = n, q[1] = b, q[2] = k, q[3] = 0, q[4] = t, q[5] = a, q[6] = r, q[7] = 0, q[8] = l, q[9] = f, q[10] = c, q[11] = 0, q[12] = -(n * u + t * g + l * d), q[13] = -(b * u + a * g + f * d), q[14] = -(k * u + r * g + c * d), q[15] = 1)
}
(function() {
    function d(a, f, r) { this.Kd = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
        this.height = this.width = 0;
        this.la = !!r;
        this.Lh = this.lg = !1;
        this.kj = 0;
        this.Qi = 1;
        this.ll = 1E3;
        this.Ts = (this.ll - this.Qi) / 32768;
        this.aj = Vb([0, 0, 100]);
        this.Lm = Vb([0, 0, 0]);
        this.ho = Vb([0, 1, 0]);
        this.bh = Vb([1, 1, 1]);
        this.Sl = !0;
        this.fi = Wb();
        this.Xb = Wb();
        this.ck = Wb();
        this.jj = Wb();
        this.r = a;
        this.om() }

    function n(a, f, r) {
        this.r = a;
        this.Rg = f;
        this.name = r;
        this.fc = a.getAttribLocation(f, "aPos");
        this.Yd = a.getAttribLocation(f,
            "aTex");
        this.Jm = a.getUniformLocation(f, "matP");
        this.ai = a.getUniformLocation(f, "matMV");
        this.rf = a.getUniformLocation(f, "opacity");
        this.hk = a.getUniformLocation(f, "colorFill");
        this.Km = a.getUniformLocation(f, "samplerFront");
        this.xg = a.getUniformLocation(f, "samplerBack");
        this.Fe = a.getUniformLocation(f, "destStart");
        this.Ee = a.getUniformLocation(f, "destEnd");
        this.zg = a.getUniformLocation(f, "seconds");
        this.jk = a.getUniformLocation(f, "pixelWidth");
        this.ik = a.getUniformLocation(f, "pixelHeight");
        this.wg = a.getUniformLocation(f,
            "layerScale");
        this.vg = a.getUniformLocation(f, "layerAngle");
        this.Ag = a.getUniformLocation(f, "viewOrigin");
        this.yg = a.getUniformLocation(f, "scrollPos");
        this.qr = !!(this.jk || this.ik || this.zg || this.xg || this.Fe || this.Ee || this.wg || this.vg || this.Ag || this.yg);
        this.Tm = this.Um = -999;
        this.ei = 1;
        this.Pm = this.Om = 0;
        this.Rm = this.Nm = this.Mm = 1;
        this.Xm = this.Wm = this.Vm = this.Zm = this.Ym = this.Qm = 0;
        this.bk = [];
        this.Sm = Wb();
        this.rf && a.uniform1f(this.rf, 1);
        this.hk && a.uniform4f(this.hk, 1, 1, 1, 1);
        this.Km && a.uniform1i(this.Km, 0);
        this.xg &&
            a.uniform1i(this.xg, 1);
        this.Fe && a.uniform2f(this.Fe, 0, 0);
        this.Ee && a.uniform2f(this.Ee, 1, 1);
        this.wg && a.uniform1f(this.wg, 1);
        this.vg && a.uniform1f(this.vg, 0);
        this.Ag && a.uniform2f(this.Ag, 0, 0);
        this.yg && a.uniform2f(this.yg, 0, 0);
        this.zg && a.uniform1f(this.zg, 0);
        this.ve = !1
    }

    function k(a, f) {
        return a[0] === f[0] && a[1] === f[1] && a[2] === f[2] && a[3] === f[3] && a[4] === f[4] && a[5] === f[5] && a[6] === f[6] && a[7] === f[7] && a[8] === f[8] && a[9] === f[9] && a[10] === f[10] && a[11] === f[11] && a[12] === f[12] && a[13] === f[13] && a[14] === f[14] && a[15] ===
            f[15]
    }

    function q(a, f) { this.type = a;
        this.p = f;
        this.r = f.r;
        this.Pc = this.ub = this.pn = 0;
        this.M = this.oc = null;
        this.Nn = [] }
    var t = Wb();
    d.prototype.om = function() {
        var a = this.r,
            f;
        this.Em = 1;
        this.Be = this.Rd = null;
        this.uh = 1;
        a.clearColor(0, 0, 0, 0);
        a.clear(a.COLOR_BUFFER_BIT);
        a.enable(a.BLEND);
        a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA);
        a.disable(a.CULL_FACE);
        a.disable(a.STENCIL_TEST);
        a.disable(a.DITHER);
        this.la ? (a.enable(a.DEPTH_TEST), a.depthFunc(a.LEQUAL)) : a.disable(a.DEPTH_TEST);
        this.Fm = a.ONE;
        this.Dm = a.ONE_MINUS_SRC_ALPHA;
        this.Oi = new Float32Array(8E3 * (this.la ? 3 : 2));
        this.Ei = new Float32Array(16E3);
        this.un = new Float32Array(32E3);
        this.sk = a.createBuffer();
        a.bindBuffer(a.ARRAY_BUFFER, this.sk);
        a.bufferData(a.ARRAY_BUFFER, this.un.byteLength, a.DYNAMIC_DRAW);
        this.ah = Array(4);
        this.Wg = Array(4);
        for (f = 0; 4 > f; f++) this.ah[f] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.ah[f]), a.bufferData(a.ARRAY_BUFFER, this.Oi.byteLength, a.DYNAMIC_DRAW), this.Wg[f] = a.createBuffer(), a.bindBuffer(a.ARRAY_BUFFER, this.Wg[f]), a.bufferData(a.ARRAY_BUFFER,
            this.Ei.byteLength, a.DYNAMIC_DRAW);
        this.$c = 0;
        this.tr = a.createBuffer();
        a.bindBuffer(a.ELEMENT_ARRAY_BUFFER, this.tr);
        for (var r = new Uint16Array(12E3), c = f = 0; 12E3 > f;) r[f++] = c, r[f++] = c + 1, r[f++] = c + 2, r[f++] = c, r[f++] = c + 2, r[f++] = c + 3, c += 4;
        a.bufferData(a.ELEMENT_ARRAY_BUFFER, r, a.STATIC_DRAW);
        this.tk = this.Ff = this.rd = 0;
        this.Ca = [];
        f = this.la ? "attribute highp vec3 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, aPos.z, 1.0);\n\tvTex = aTex;\n}" :
            "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}";
        r = this.Tf({ src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}" }, f, "<default>");
        this.Ca.push(r);
        r = this.Tf({ src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}" },
            "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}", "<point>");
        this.Ca.push(r);
        r = this.Tf({ src: "varying mediump vec2 vTex;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tif (texture2D(samplerFront, vTex).a < 1.0)\n\t\tdiscard;\n}" }, f, "<earlyz>");
        this.Ca.push(r);
        r = this.Tf({ src: "uniform lowp vec4 colorFill;\nvoid main(void) {\n\tgl_FragColor = colorFill;\n}" },
            f, "<fill>");
        this.Ca.push(r);
        for (var e in $b) $b.hasOwnProperty(e) && this.Ca.push(this.Tf($b[e], f, e));
        a.activeTexture(a.TEXTURE0);
        a.bindTexture(a.TEXTURE_2D, null);
        this.zd = [];
        this.Yc = 0;
        this.kb = !1;
        this.Pl = this.tg = -1;
        this.$e = null;
        this.tj = a.createFramebuffer();
        this.wh = this.qi = null;
        this.El = !1;
        this.la && (this.wh = a.createRenderbuffer());
        this.ge = Vb([0, 0, 0]);
        this.$m = a.getParameter(a.ALIASED_POINT_SIZE_RANGE)[1];
        2048 < this.$m && (this.$m = 2048);
        this.Eb(0)
    };
    n.prototype.dl = function(a) {
        k(this.Sm, a) || (Xb(a, this.Sm), this.r.uniformMatrix4fv(this.ai, !1, a))
    };
    d.prototype.Tf = function(a, f, r) {
        var c = this.r,
            e = c.createShader(c.FRAGMENT_SHADER);
        c.shaderSource(e, a.src);
        c.compileShader(e);
        if (!c.getShaderParameter(e, c.COMPILE_STATUS)) return c.deleteShader(e), null;
        var b = c.createShader(c.VERTEX_SHADER);
        c.shaderSource(b, f);
        c.compileShader(b);
        if (!c.getShaderParameter(b, c.COMPILE_STATUS)) return c.deleteShader(e), c.deleteShader(b), null;
        f = c.createProgram();
        c.attachShader(f, e);
        c.attachShader(f, b);
        c.linkProgram(f);
        if (!c.getProgramParameter(f, c.LINK_STATUS)) return c.deleteShader(e),
            c.deleteShader(b), c.deleteProgram(f), null;
        c.useProgram(f);
        c.deleteShader(e);
        c.deleteShader(b);
        r = new n(c, f, r);
        r.rj = a.rj || 0;
        r.sj = a.sj || 0;
        r.Ol = !!a.Ol;
        r.Cc = !!a.Cc;
        r.Cl = !!a.Cl;
        r.N = a.N || [];
        a = 0;
        for (e = r.N.length; a < e; a++) r.N[a][1] = c.getUniformLocation(f, r.N[a][0]), r.bk.push(0), c.uniform1f(r.N[a][1], 0);
        return r
    };
    d.prototype.Hj = function(a) { var f, r;
        f = 0; for (r = this.Ca.length; f < r; f++)
            if (this.Ca[f].name === a) return f;
        return -1 };
    d.prototype.wn = function(a, f, r) {
        var c = this.Xb,
            e = this.fi,
            b = [0, 0, 0, 0, 0, 0, 0, 0];
        b[0] = c[0] * a +
            c[4] * f + c[12];
        b[1] = c[1] * a + c[5] * f + c[13];
        b[2] = c[2] * a + c[6] * f + c[14];
        b[3] = c[3] * a + c[7] * f + c[15];
        b[4] = e[0] * b[0] + e[4] * b[1] + e[8] * b[2] + e[12] * b[3];
        b[5] = e[1] * b[0] + e[5] * b[1] + e[9] * b[2] + e[13] * b[3];
        b[6] = e[2] * b[0] + e[6] * b[1] + e[10] * b[2] + e[14] * b[3];
        b[7] = -b[2];
        0 !== b[7] && (b[7] = 1 / b[7], b[4] *= b[7], b[5] *= b[7], b[6] *= b[7], r[0] = (.5 * b[4] + .5) * this.width, r[1] = (.5 * b[5] + .5) * this.height)
    };
    d.prototype.Ke = function(a, f, b) {
        if (this.width !== a || this.height !== f || b) {
            this.Gd();
            b = this.r;
            this.width = a;
            this.height = f;
            b.viewport(0, 0, a, f);
            Zb(this.aj,
                this.Lm, this.ho, this.Xb);
            if (this.la) { var c = -a / 2;
                a = a / 2; var e = f / 2;
                f = -f / 2; var d = this.Qi,
                    g = this.ll,
                    v = this.fi;
                v || (v = Wb()); var k = a - c,
                    p = f - e,
                    h = g - d;
                v[0] = 2 / k;
                v[1] = 0;
                v[2] = 0;
                v[3] = 0;
                v[4] = 0;
                v[5] = 2 / p;
                v[6] = 0;
                v[7] = 0;
                v[8] = 0;
                v[9] = 0;
                v[10] = -2 / h;
                v[11] = 0;
                v[12] = -(c + a) / k;
                v[13] = -(f + e) / p;
                v[14] = -(g + d) / h;
                v[15] = 1;
                this.bh[0] = 1;
                this.bh[1] = 1 } else f = a / f, c = this.Qi, a = this.ll, v = this.fi, g = c * Math.tan(45 * Math.PI / 360), f *= g, e = -f, d = -g, v || (v = Wb()), k = f - e, p = g - d, h = a - c, v[0] = 2 * c / k, v[1] = 0, v[2] = 0, v[3] = 0, v[4] = 0, v[5] = 2 * c / p, v[6] = 0, v[7] = 0, v[8] = (f + e) /
                k, v[9] = (g + d) / p, v[10] = -(a + c) / h, v[11] = -1, v[12] = 0, v[13] = 0, v[14] = -(a * c * 2) / h, v[15] = 0, c = [0, 0], a = [0, 0], this.wn(0, 0, c), this.wn(1, 1, a), this.bh[0] = 1 / (a[0] - c[0]), this.bh[1] = -1 / (a[1] - c[1]);
            c = 0;
            for (a = this.Ca.length; c < a; c++) e = this.Ca[c], e.ve = !1, e.Jm && (b.useProgram(e.Rg), b.uniformMatrix4fv(e.Jm, !1, this.fi));
            b.useProgram(this.Ca[this.tg].Rg);
            b.bindTexture(b.TEXTURE_2D, null);
            b.activeTexture(b.TEXTURE1);
            b.bindTexture(b.TEXTURE_2D, null);
            b.activeTexture(b.TEXTURE0);
            this.Be = this.Rd = null;
            this.wh && (b.bindFramebuffer(b.FRAMEBUFFER,
                this.tj), b.bindRenderbuffer(b.RENDERBUFFER, this.wh), b.renderbufferStorage(b.RENDERBUFFER, b.DEPTH_COMPONENT16, this.width, this.height), this.El || (b.framebufferRenderbuffer(b.FRAMEBUFFER, b.DEPTH_ATTACHMENT, b.RENDERBUFFER, this.wh), this.El = !0), b.bindRenderbuffer(b.RENDERBUFFER, null), b.bindFramebuffer(b.FRAMEBUFFER, null), this.qi = null)
        }
    };
    d.prototype.lc = function() { Zb(this.aj, this.Lm, this.ho, this.Xb);
        Yb(this.Xb, this.bh) };
    d.prototype.translate = function(a, f) {
        if (0 !== a || 0 !== f) {
            this.ge[0] = a;
            this.ge[1] = f;
            this.ge[2] =
                0;
            var b = this.Xb,
                c = this.ge,
                e = c[0],
                d = c[1],
                c = c[2];
            b[12] = b[0] * e + b[4] * d + b[8] * c + b[12];
            b[13] = b[1] * e + b[5] * d + b[9] * c + b[13];
            b[14] = b[2] * e + b[6] * d + b[10] * c + b[14];
            b[15] = b[3] * e + b[7] * d + b[11] * c + b[15]
        }
    };
    d.prototype.scale = function(a, f) { if (1 !== a || 1 !== f) this.ge[0] = a, this.ge[1] = f, this.ge[2] = 1, Yb(this.Xb, this.ge) };
    d.prototype.si = function(a) {
        if (0 !== a) {
            var f = this.Xb,
                b, c = Math.sin(a);
            a = Math.cos(a);
            var e = f[0],
                d = f[1],
                g = f[2],
                v = f[3],
                k = f[4],
                p = f[5],
                h = f[6],
                m = f[7];
            b ? f !== b && (b[8] = f[8], b[9] = f[9], b[10] = f[10], b[11] = f[11], b[12] = f[12], b[13] =
                f[13], b[14] = f[14], b[15] = f[15]) : b = f;
            b[0] = e * a + k * c;
            b[1] = d * a + p * c;
            b[2] = g * a + h * c;
            b[3] = v * a + m * c;
            b[4] = e * -c + k * a;
            b[5] = d * -c + p * a;
            b[6] = g * -c + h * a;
            b[7] = v * -c + m * a
        }
    };
    d.prototype.Zb = function() { if (!k(this.ck, this.Xb)) { var a = this.Lb();
            a.type = 5;
            a.M ? Xb(this.Xb, a.M) : a.M = Wb(this.Xb);
            Xb(this.Xb, this.ck);
            this.kb = !1 } };
    d.prototype.wi = function(a) { this.la && (32760 < a && (a = 32760), this.kj = this.aj[2] - this.Qi - a * this.Ts) };
    q.prototype.Np = function() {
        var a = this.r,
            f = this.p;
        0 !== this.ub ? (a.depthMask(!0), a.colorMask(!1, !1, !1, !1), a.disable(a.BLEND),
            a.bindFramebuffer(a.FRAMEBUFFER, f.tj), a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.clear(a.DEPTH_BUFFER_BIT), a.bindFramebuffer(a.FRAMEBUFFER, null), f.Lh = !0) : (a.depthMask(!1), a.colorMask(!0, !0, !0, !0), a.enable(a.BLEND), f.Lh = !1)
    };
    q.prototype.Rp = function() { this.r.bindTexture(this.r.TEXTURE_2D, this.oc) };
    q.prototype.Sp = function() { var a = this.r;
        a.activeTexture(a.TEXTURE1);
        a.bindTexture(a.TEXTURE_2D, this.oc);
        a.activeTexture(a.TEXTURE0) };
    q.prototype.Op = function() {
        var a = this.pn,
            f = this.p;
        f.uh = a;
        f = f.$e;
        f.rf && f.ei !== a && (f.ei = a, this.r.uniform1f(f.rf, a))
    };
    q.prototype.Ip = function() { this.r.drawElements(this.r.TRIANGLES, this.Pc, this.r.UNSIGNED_SHORT, this.ub) };
    q.prototype.Kp = function() { this.r.blendFunc(this.ub, this.Pc) };
    q.prototype.Tp = function() { var a, f, b, c = this.p.Ca,
            e = this.p.Pl;
        a = 0; for (f = c.length; a < f; a++) b = c[a], a === e && b.ai ? (b.dl(this.M), b.ve = !0) : b.ve = !1;
        Xb(this.M, this.p.jj) };
    q.prototype.Jp = function() {
        var a = this.r,
            f = this.p;
        this.oc ? (f.Be === this.oc && (a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D,
            null), f.Be = null, a.activeTexture(a.TEXTURE0)), a.bindFramebuffer(a.FRAMEBUFFER, f.tj), f.Lh || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, this.oc, 0)) : (f.la || a.framebufferTexture2D(a.FRAMEBUFFER, a.COLOR_ATTACHMENT0, a.TEXTURE_2D, null, 0), a.bindFramebuffer(a.FRAMEBUFFER, null))
    };
    q.prototype.Fp = function() {
        var a = this.r,
            f = this.ub;
        0 === f ? (a.clearColor(this.M[0], this.M[1], this.M[2], this.M[3]), a.clear(a.COLOR_BUFFER_BIT)) : 1 === f ? (a.enable(a.SCISSOR_TEST), a.scissor(this.M[0], this.M[1], this.M[2],
            this.M[3]), a.clearColor(0, 0, 0, 0), a.clear(a.COLOR_BUFFER_BIT), a.disable(a.SCISSOR_TEST)) : a.clear(a.DEPTH_BUFFER_BIT)
    };
    q.prototype.Mp = function() { var a = this.r;
        0 !== this.ub ? a.enable(a.DEPTH_TEST) : a.disable(a.DEPTH_TEST) };
    q.prototype.Hp = function() {
        var a = this.r,
            f = this.p;
        f.la && a.disable(a.DEPTH_TEST);
        var b = f.Ca[1];
        a.useProgram(b.Rg);
        !b.ve && b.ai && (b.dl(f.jj), b.ve = !0);
        a.enableVertexAttribArray(b.fc);
        a.bindBuffer(a.ARRAY_BUFFER, f.sk);
        a.vertexAttribPointer(b.fc, 4, a.FLOAT, !1, 0, 0);
        a.drawArrays(a.POINTS, this.ub /
            4, this.Pc);
        b = f.$e;
        a.useProgram(b.Rg);
        0 <= b.fc && (a.enableVertexAttribArray(b.fc), a.bindBuffer(a.ARRAY_BUFFER, f.ah[f.$c]), a.vertexAttribPointer(b.fc, f.la ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= b.Yd && (a.enableVertexAttribArray(b.Yd), a.bindBuffer(a.ARRAY_BUFFER, f.Wg[f.$c]), a.vertexAttribPointer(b.Yd, 2, a.FLOAT, !1, 0, 0));
        f.la && a.enable(a.DEPTH_TEST)
    };
    q.prototype.Pp = function() {
        var a = this.r,
            f = this.p,
            b = f.Ca[this.ub];
        f.Pl = this.ub;
        f.$e = b;
        a.useProgram(b.Rg);
        !b.ve && b.ai && (b.dl(f.jj), b.ve = !0);
        b.rf && b.ei !== f.uh && (b.ei = f.uh, a.uniform1f(b.rf,
            f.uh));
        0 <= b.fc && (a.enableVertexAttribArray(b.fc), a.bindBuffer(a.ARRAY_BUFFER, f.ah[f.$c]), a.vertexAttribPointer(b.fc, f.la ? 3 : 2, a.FLOAT, !1, 0, 0));
        0 <= b.Yd && (a.enableVertexAttribArray(b.Yd), a.bindBuffer(a.ARRAY_BUFFER, f.Wg[f.$c]), a.vertexAttribPointer(b.Yd, 2, a.FLOAT, !1, 0, 0))
    };
    q.prototype.Lp = function() { var a = this.M;
        this.r.uniform4f(this.p.$e.hk, a[0], a[1], a[2], a[3]) };
    q.prototype.Qp = function() {
        var a, f, b = this.p.$e,
            c = this.r;
        a = this.M;
        b.xg && this.p.Be !== this.oc && (c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D,
            this.oc), this.p.Be = this.oc, c.activeTexture(c.TEXTURE0));
        var e = a[0];
        b.jk && e !== b.Um && (b.Um = e, c.uniform1f(b.jk, e));
        e = a[1];
        b.ik && e !== b.Tm && (b.Tm = e, c.uniform1f(b.ik, e));
        e = a[2];
        f = a[3];
        !b.Fe || e === b.Om && f === b.Pm || (b.Om = e, b.Pm = f, c.uniform2f(b.Fe, e, f));
        e = a[4];
        f = a[5];
        !b.Ee || e === b.Mm && f === b.Nm || (b.Mm = e, b.Nm = f, c.uniform2f(b.Ee, e, f));
        e = a[6];
        b.wg && e !== b.Rm && (b.Rm = e, c.uniform1f(b.wg, e));
        e = a[7];
        b.vg && e !== b.Qm && (b.Qm = e, c.uniform1f(b.vg, e));
        e = a[8];
        f = a[9];
        !b.Ag || e === b.Ym && f === b.Zm || (b.Ym = e, b.Zm = f, c.uniform2f(b.Ag, e,
            f));
        e = a[10];
        f = a[11];
        !b.yg || e === b.Vm && f === b.Wm || (b.Vm = e, b.Wm = f, c.uniform2f(b.yg, e, f));
        e = a[12];
        b.zg && e !== b.Xm && (b.Xm = e, c.uniform1f(b.zg, e));
        if (b.N.length)
            for (a = 0, f = b.N.length; a < f; a++) e = this.Nn[a], e !== b.bk[a] && (b.bk[a] = e, c.uniform1f(b.N[a][1], e))
    };
    d.prototype.Lb = function() { this.Yc === this.zd.length && this.zd.push(new q(0, this)); return this.zd[this.Yc++] };
    d.prototype.Gd = function() {
        if (0 !== this.Yc && !this.r.isContextLost()) {
            var a = this.r;
            0 < this.tk && (a.bindBuffer(a.ARRAY_BUFFER, this.sk), a.bufferSubData(a.ARRAY_BUFFER,
                0, this.un.subarray(0, this.tk)), b && 0 <= b.fc && "<point>" === b.name && a.vertexAttribPointer(b.fc, 4, a.FLOAT, !1, 0, 0));
            if (0 < this.rd) {
                var b = this.$e;
                a.bindBuffer(a.ARRAY_BUFFER, this.ah[this.$c]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.Oi.subarray(0, this.rd));
                b && 0 <= b.fc && "<point>" !== b.name && a.vertexAttribPointer(b.fc, this.la ? 3 : 2, a.FLOAT, !1, 0, 0);
                a.bindBuffer(a.ARRAY_BUFFER, this.Wg[this.$c]);
                a.bufferSubData(a.ARRAY_BUFFER, 0, this.Ei.subarray(0, this.Ff));
                b && 0 <= b.Yd && "<point>" !== b.name && a.vertexAttribPointer(b.Yd, 2,
                    a.FLOAT, !1, 0, 0)
            }
            for (var d, a = 0, b = this.Yc; a < b; a++) switch (d = this.zd[a], d.type) {
                case 1:
                    d.Ip(); break;
                case 2:
                    d.Rp(); break;
                case 3:
                    d.Op(); break;
                case 4:
                    d.Kp(); break;
                case 5:
                    d.Tp(); break;
                case 6:
                    d.Jp(); break;
                case 7:
                    d.Fp(); break;
                case 8:
                    d.Hp(); break;
                case 9:
                    d.Pp(); break;
                case 10:
                    d.Qp(); break;
                case 11:
                    d.Sp(); break;
                case 12:
                    d.Lp(); break;
                case 13:
                    d.Mp(); break;
                case 14:
                    d.Np() }
            this.tk = this.Ff = this.rd = this.Yc = 0;
            this.Lh = this.kb = !1;
            this.$c++;
            4 <= this.$c && (this.$c = 0)
        }
    };
    d.prototype.Je = function(a) {
        if (a !== this.Em && !this.lg) {
            var b =
                this.Lb();
            b.type = 3;
            this.Em = b.pn = a;
            this.kb = !1
        }
    };
    d.prototype.Mb = function(a) { if (a !== this.Rd) { var b = this.Lb();
            b.type = 2;
            this.Rd = b.oc = a;
            this.kb = !1 } };
    d.prototype.ee = function(a, b) { if ((a !== this.Fm || b !== this.Dm) && !this.lg) { var d = this.Lb();
            d.type = 4;
            d.ub = a;
            d.Pc = b;
            this.Fm = a;
            this.Dm = b;
            this.kb = !1 } };
    d.prototype.Dn = function() { this.ee(this.r.ONE, this.r.ONE_MINUS_SRC_ALPHA) };
    d.prototype.Kg = function(a, b, d, c, e, u, g, v) {
        15992 <= this.rd && this.Gd();
        var k = this.rd,
            p = this.Ff,
            h = this.Oi,
            m = this.Ei,
            l = this.kj;
        if (this.kb) this.zd[this.Yc -
            1].Pc += 6;
        else { var n = this.Lb();
            n.type = 1;
            n.ub = this.la ? k : k / 2 * 3;
            n.Pc = 6;
            this.kb = !0 }
        this.la ? (h[k++] = a, h[k++] = b, h[k++] = l, h[k++] = d, h[k++] = c, h[k++] = l, h[k++] = e, h[k++] = u, h[k++] = l, h[k++] = g, h[k++] = v, h[k++] = l) : (h[k++] = a, h[k++] = b, h[k++] = d, h[k++] = c, h[k++] = e, h[k++] = u, h[k++] = g, h[k++] = v);
        m[p++] = 0;
        m[p++] = 0;
        m[p++] = 1;
        m[p++] = 0;
        m[p++] = 1;
        m[p++] = 1;
        m[p++] = 0;
        m[p++] = 1;
        this.rd = k;
        this.Ff = p
    };
    d.prototype.Sc = function(a, b, d, c, e, u, g, v, k) {
        15992 <= this.rd && this.Gd();
        var p = this.rd,
            h = this.Ff,
            m = this.Oi,
            l = this.Ei,
            n = this.kj;
        if (this.kb) this.zd[this.Yc -
            1].Pc += 6;
        else { var q = this.Lb();
            q.type = 1;
            q.ub = this.la ? p : p / 2 * 3;
            q.Pc = 6;
            this.kb = !0 }
        var q = k.left,
            t = k.top,
            I = k.right;
        k = k.bottom;
        this.la ? (m[p++] = a, m[p++] = b, m[p++] = n, m[p++] = d, m[p++] = c, m[p++] = n, m[p++] = e, m[p++] = u, m[p++] = n, m[p++] = g, m[p++] = v, m[p++] = n) : (m[p++] = a, m[p++] = b, m[p++] = d, m[p++] = c, m[p++] = e, m[p++] = u, m[p++] = g, m[p++] = v);
        l[h++] = q;
        l[h++] = t;
        l[h++] = I;
        l[h++] = t;
        l[h++] = I;
        l[h++] = k;
        l[h++] = q;
        l[h++] = k;
        this.rd = p;
        this.Ff = h
    };
    d.prototype.Eb = function(a) {
        if (this.tg !== a) {
            if (!this.Ca[a]) { if (0 === this.tg) return;
                a = 0 }
            var b = this.Lb();
            b.type = 9;
            this.tg = b.ub = a;
            this.kb = !1
        }
    };
    d.prototype.Hg = function(a) { a = this.Ca[a]; return !(!a.Fe && !a.Ee) };
    d.prototype.xk = function(a) { a = this.Ca[a]; return !!(a.Fe || a.Ee || a.Ol) };
    d.prototype.wk = function(a) { return this.Ca[a].Cc };
    d.prototype.ks = function(a) { a = this.Ca[a]; return 0 !== a.rj || 0 !== a.sj };
    d.prototype.Wq = function(a) { return this.Ca[a].rj };
    d.prototype.Xq = function(a) { return this.Ca[a].sj };
    d.prototype.Yq = function(a, b) { return this.Ca[a].N[b][2] };
    d.prototype.ni = function(a) { return this.Ca[a].Cl };
    d.prototype.Bf =
        function(a, b, d, c, e, u, g, k, l, p, h, m, n, q, z) { var t = this.Ca[this.tg],
                I, J; if (t.qr || z.length) { I = this.Lb();
                I.type = 10;
                I.M ? Xb(this.Xb, I.M) : I.M = Wb();
                J = I.M;
                J[0] = b;
                J[1] = d;
                J[2] = c;
                J[3] = e;
                J[4] = u;
                J[5] = g;
                J[6] = k;
                J[7] = l;
                J[8] = p;
                J[9] = h;
                J[10] = m;
                J[11] = n;
                J[12] = q;
                t.xg ? I.oc = a : I.oc = null; if (z.length)
                    for (d = I.Nn, d.length = z.length, a = 0, b = z.length; a < b; a++) d[a] = z[a];
                this.kb = !1 } };
    d.prototype.clear = function(a, b, d, c) { var e = this.Lb();
        e.type = 7;
        e.ub = 0;
        e.M || (e.M = Wb());
        e.M[0] = a;
        e.M[1] = b;
        e.M[2] = d;
        e.M[3] = c;
        this.kb = !1 };
    d.prototype.clearRect = function(a,
        b, d, c) { if (!(0 > d || 0 > c)) { var e = this.Lb();
            e.type = 7;
            e.ub = 1;
            e.M || (e.M = Wb());
            e.M[0] = a;
            e.M[1] = b;
            e.M[2] = d;
            e.M[3] = c;
            this.kb = !1 } };
    d.prototype.Gn = function(a) { if (this.la && (a = !!a, this.lg !== a)) { var b = this.Lb();
            b.type = 14;
            b.ub = a ? 1 : 0;
            this.kb = !1;
            this.lg = a;
            this.qi = null;
            this.lg ? this.Eb(2) : this.Eb(0) } };
    d.prototype.Fn = function(a) { if (this.la) { var b = this.Lb();
            b.type = 13;
            b.ub = a ? 1 : 0;
            this.kb = !1 } };
    d.prototype.$l = function() {
        Xb(this.ck, t);
        this.lc();
        this.Zb();
        var a = this.width / 2,
            b = this.height / 2;
        this.Kg(-a, b, a, b, a, -b, -a, -b);
        Xb(t,
            this.Xb);
        this.Zb()
    };
    d.prototype.En = function(a, b, d) { this.Eb(3); var c = this.Lb();
        c.type = 12;
        c.M || (c.M = Wb());
        c.M[0] = a;
        c.M[1] = b;
        c.M[2] = d;
        c.M[3] = 1;
        this.kb = !1 };
    d.prototype.Ds = function() { this.Eb(0) };
    d.prototype.us = function() { this.Eb(2) };
    d.prototype.js = function() { this.Gd();
        this.r.flush() };
    var l = [],
        b = {};
    d.prototype.xp = function() { V(l);
        b = {} };
    d.prototype.Zh = function(a, f, d, c) {
        f = !!f;
        d = !!d;
        var e = a.src + "," + f + "," + d + (f ? ",undefined" : ""),
            u = null;
        if ("undefined" !== typeof a.src && b.hasOwnProperty(e)) return u = b[e], u.mh++, u;
        this.Gd();
        var g = this.r,
            k = ia(a.width) && ia(a.height),
            u = g.createTexture();
        g.bindTexture(g.TEXTURE_2D, u);
        g.pixelStorei(g.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
        var n = g.RGBA,
            p = g.RGBA,
            h = g.UNSIGNED_BYTE;
        if (c && !this.Kd) switch (c) {
            case 1:
                p = n = g.RGB; break;
            case 2:
                h = g.UNSIGNED_SHORT_4_4_4_4; break;
            case 3:
                h = g.UNSIGNED_SHORT_5_5_5_1; break;
            case 4:
                p = n = g.RGB, h = g.UNSIGNED_SHORT_5_6_5 }
        if (!k && f) {
            c = document.createElement("canvas");
            c.width = ja(a.width);
            c.height = ja(a.height);
            var m = c.getContext("2d");
            "undefined" !== typeof m.imageSmoothingEnabled ?
                m.imageSmoothingEnabled = d : (m.webkitImageSmoothingEnabled = d, m.mozImageSmoothingEnabled = d, m.msImageSmoothingEnabled = d);
            m.drawImage(a, 0, 0, a.width, a.height, 0, 0, c.width, c.height);
            g.texImage2D(g.TEXTURE_2D, 0, n, p, h, c)
        } else g.texImage2D(g.TEXTURE_2D, 0, n, p, h, a);
        f ? (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.REPEAT), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.REPEAT)) : (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE));
        d ? (g.texParameteri(g.TEXTURE_2D,
            g.TEXTURE_MAG_FILTER, g.LINEAR), k && this.Sl ? (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR_MIPMAP_LINEAR), g.generateMipmap(g.TEXTURE_2D)) : g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR)) : (g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.NEAREST), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.NEAREST));
        g.bindTexture(g.TEXTURE_2D, null);
        this.Rd = null;
        u.me = a.width;
        u.le = a.height;
        u.mh = 1;
        u.Jl = e;
        l.push(u);
        return b[e] = u
    };
    d.prototype.Sb = function(a, b, d, c) {
        this.Gd();
        var e = this.r;
        this.Kd && (c = !1);
        var u = e.createTexture();
        e.bindTexture(e.TEXTURE_2D, u);
        e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, a, b, 0, e.RGBA, c ? e.UNSIGNED_SHORT_4_4_4_4 : e.UNSIGNED_BYTE, null);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, d ? e.LINEAR : e.NEAREST);
        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, d ? e.LINEAR : e.NEAREST);
        e.bindTexture(e.TEXTURE_2D, null);
        this.Rd = null;
        u.me = a;
        u.le = b;
        l.push(u);
        return u
    };
    d.prototype.Rs = function(a, b, d) { this.Gd(); var c = this.r;
        this.Kd && (d = !1);
        c.bindTexture(c.TEXTURE_2D, b);
        c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0); try { c.texImage2D(c.TEXTURE_2D, 0, c.RGBA, c.RGBA, d ? c.UNSIGNED_SHORT_4_4_4_4 : c.UNSIGNED_BYTE, a) } catch (e) { console && console.error && console.error("Error updating WebGL texture: ", e) }
        c.bindTexture(c.TEXTURE_2D, null);
        this.Rd = null };
    d.prototype.deleteTexture = function(a) {
        a && ("undefined" !== typeof a.mh && 1 < a.mh ? a.mh-- : (this.Gd(), a === this.Rd && (this.r.bindTexture(this.r.TEXTURE_2D,
            null), this.Rd = null), a === this.Be && (this.r.activeTexture(this.r.TEXTURE1), this.r.bindTexture(this.r.TEXTURE_2D, null), this.r.activeTexture(this.r.TEXTURE0), this.Be = null), Aa(l, a), "undefined" !== typeof a.Jl && delete b[a.Jl], this.r.deleteTexture(a)))
    };
    d.prototype.mc = function(a) { if (a !== this.qi) { var b = this.Lb();
            b.type = 6;
            this.qi = b.oc = a;
            this.kb = !1 } };
    eb = d
})();
(function() {
    function d(a) {
        if (a && (a.getContext || a.dc) && !a.c2runtime) {
            a.c2runtime = this;
            var c = this;
            this.ed = (this.Mh = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk)) || "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2iscordova && window.c2iscordova;
            this.ze = !!a.dc;
            this.Br = "undefined" !== typeof window.AppMobi ||
                this.ze;
            this.xc = !!window.c2cocoonjs;
            this.yc = !!window.c2ejecta;
            this.xc && (CocoonJS.App.onSuspended.addEventListener(function() { c.setSuspended(!0) }), CocoonJS.App.onActivated.addEventListener(function() { c.setSuspended(!1) }));
            this.yc && (document.addEventListener("pagehide", function() { c.setSuspended(!0) }), document.addEventListener("pageshow", function() { c.setSuspended(!1) }), document.addEventListener("resize", function() { c.setSize(window.innerWidth, window.innerHeight) }));
            this.W = this.ze || this.xc || this.yc;
            this.Nh =
                /edge\//i.test(navigator.userAgent);
            this.Kd = (/msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent) || /iemobile/i.test(navigator.userAgent)) && !this.Nh;
            this.xm = /tizen/i.test(navigator.userAgent);
            this.vm = /android/i.test(navigator.userAgent) && !this.xm && !this.Kd && !this.Nh;
            this.Cm = (/iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent)) && !this.Kd && !this.Nh;
            this.Hr = /ipad/i.test(navigator.userAgent);
            this.ak = this.Cm || this.Hr || this.yc;
            this.Tj = (/chrome/i.test(navigator.userAgent) ||
                /chromium/i.test(navigator.userAgent)) && !this.Kd && !this.Nh;
            this.um = /amazonwebappplatform/i.test(navigator.userAgent);
            this.Dr = /firefox/i.test(navigator.userAgent);
            this.Md = "undefined" !== typeof window.c2nodewebkit || "undefined" !== typeof window.c2nwjs || /nodewebkit/i.test(navigator.userAgent) || /nwjs/i.test(navigator.userAgent);
            this.Am = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
            this.Gr = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
            this.gf = !("undefined" ===
                typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
            this.Zj = !("undefined" === typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
            this.zm = !!window.cr_windows10;
            this.ym = this.Am || this.Gr || this.Zj || this.zm;
            this.Cr = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
            this.wm = this.vm && !this.Tj && !this.Mh && !this.Dr && !this.um && !this.W;
            this.devicePixelRatio = 1;
            this.Ld = this.ed || this.Mh || this.Br || this.xc || this.vm || this.ak || this.gf || this.Zj || this.Cr || this.xm || this.yc;
            this.Ld ||
                (this.Ld = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
            this.Yj = !!(this.ak && this.ed && window.webkit);
            this.Nj = null;
            this.rr = "";
            this.Yj && (this.Nj = cordova && cordova.plugins && cordova.plugins.CorHttpd ? cordova.plugins.CorHttpd : null);
            "undefined" === typeof cr_is_preview || this.Md || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) && !/nwjs/i.test(navigator.userAgent) || (this.Md = !0);
            this.canvas = a;
            this.Bd = document.getElementById("damepole");
            this.p = this.r = null;
            this.Ij = "(unavailable)";
            this.la = !1;
            this.qe = 0;
            this.ra = null;
            this.wj = "";
            this.Ah = !1;
            this.mn = this.nn = 0;
            this.canvas.oncontextmenu = function(a) { a.preventDefault && a.preventDefault(); return !1 };
            this.canvas.onselectstart = function(a) { a.preventDefault && a.preventDefault(); return !1 };
            this.ze && (window.c2runtime = this);
            this.Md && (window.ondragover = function(a) { a.preventDefault(); return !1 }, window.ondrop = function(a) { a.preventDefault(); return !1 }, window.nwgui && window.nwgui.App.clearCache && window.nwgui.App.clearCache());
            this.wm && "undefined" !== typeof jQuery && jQuery("canvas").parents("*").css("overflow", "visible");
            this.width = a.width;
            this.height = a.height;
            this.F = this.width;
            this.D = this.height;
            this.rh = this.width;
            this.Vf = this.height;
            this.of = window.innerWidth;
            this.nf = window.innerHeight;
            this.Lq = !1;
            this.Z = !0;
            this.og = !1;
            Date.now || (Date.now = function() { return +new Date });
            this.plugins = [];
            this.types = {};
            this.q = [];
            this.ya = [];
            this.ek = {};
            this.Ac = [];
            this.qj = {};
            this.bd = [];
            this.Kf = [];
            this.Ji = [];
            this.ip = [];
            this.jp = [];
            this.Sn = null;
            this.ne = {};
            this.Vj = this.Jd = !1;
            this.zc = 0;
            this.Uj = this.Xj = !1;
            this.vc = [];
            this.mg = !1;
            this.gd = this.lb = this.Xh = this.Ik = "";
            this.Vg = this.Qn = !1;
            this.zh = [];
            this.pe = this.bf = 0;
            this.cn = 30;
            this.ij = this.Bg = 0;
            this.Gf = 1;
            this.Jb = new Ua;
            this.Pi = new Ua;
            this.ii = this.Dh = this.Zf = this.Wc = this.De = this.vj = this.Qh = 0;
            this.Qf = null;
            this.nj = [];
            this.pj = [];
            this.xh = -1;
            this.kk = [
                []
            ];
            this.Zk = this.bi = 0;
            this.oi(null);
            this.lk = [];
            this.di = -1;
            this.$f = this.hn = this.Dg = 0;
            this.Ci = [];
            this.Wk = this.zk = -1;
            this.qg = !0;
            this.$h = 0;
            this.ng = !1;
            this.Gs = 0;
            this.Pf =
                null;
            this.tb = this.jm = !1;
            this.kn = new da;
            this.ok = new da;
            this.ln = new da;
            this.Lg = [];
            this.Gc = new Wa([]);
            this.Rk = new Wa([]);
            this.xd = [];
            this.Ih = {};
            this.Cd = {};
            this.vd = {};
            this.Jf = {};
            this.Gl = {};
            this.Im = this.Wh = this.Ga = this.Na = this.Hm = this.Vh = this.aa = null;
            this.Hf = this.$j = !1;
            this.xj = [null, null];
            this.ue = 0;
            this.kd = {};
            this.Tg = this.Wd = null;
            this.Rn = "";
            this.hi = [];
            this.ts()
        }
    }

    function n(a, c) { return 128 >= c ? a[3] : 256 >= c ? a[2] : 512 >= c ? a[1] : a[0] }

    function k() { try { return !!window.indexedDB } catch (a) { return !1 } }

    function q(a) {
        a.target.result.createObjectStore("saves", { keyPath: "slot" })
    }

    function t(a, c, e, h) { try { var b = indexedDB.open("_C2SaveStates");
            b.onupgradeneeded = q;
            b.onerror = h;
            b.onsuccess = function(b) { b = b.target.result;
                b.onerror = h;
                b.transaction(["saves"], "readwrite").objectStore("saves").put({ slot: a, data: c }).onsuccess = e } } catch (g) { h(g) } }

    function l(a, c, e) {
        try {
            var b = indexedDB.open("_C2SaveStates");
            b.onupgradeneeded = q;
            b.onerror = e;
            b.onsuccess = function(b) {
                b = b.target.result;
                b.onerror = e;
                var h = b.transaction(["saves"]).objectStore("saves").get(a);
                h.onsuccess = function() {
                    h.result ?
                        c(h.result.data) : c(null)
                }
            }
        } catch (h) { e(h) }
    }

    function b() { x("Reloading for continuous preview");
        window.c2cocoonjs ? CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location = window.location + "?continuous" }

    function a(a) { var c, e = {}; for (c in a) !a.hasOwnProperty(c) || a[c] instanceof da || a[c] && "undefined" !== typeof a[c].Zt || "spriteCreatedDestroyCallback" !== c && (e[c] = a[c]); return e }
    var f = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame || window.oRequestAnimationFrame;
    d.prototype.ts = function() {
        var a = this;
        if (this.Yj) this.Nj ? this.Nj.startServer({ port: 0, localhost_only: !0 }, function(c) { a.rr = c;
            a.Xl(function(c) { a.qf(JSON.parse(c)) }, function() { alert("Error fetching data.js") }) }, function(a) { alert("error starting local server: " + a) }) : this.Xl(function(c) { a.qf(JSON.parse(c)) }, function() { alert("Error fetching data.js") });
        else {
            var c;
            this.gf ? c = new ActiveXObject("Microsoft.XMLHTTP") : c = new XMLHttpRequest;
            var e = "data.js";
            if (this.Am || this.gf || this.Zj || this.zm) e = "data.json";
            c.open("GET", e, !0);
            var b = !1;
            if (!this.W && "response" in c && "responseType" in c) try { c.responseType = "json", b = "json" === c.responseType } catch (h) { b = !1 }
            if (!b && "responseType" in c) try { c.responseType = "text" } catch (g) {}
            if ("overrideMimeType" in c) try { c.overrideMimeType("application/json; charset=utf-8") } catch (f) {}
            this.gf ? c.onreadystatechange = function() { 4 === c.readyState && a.qf(JSON.parse(c.responseText)) } : (c.onload = function() {
                if (b) a.qf(c.response);
                else if (a.yc) {
                    var e =
                        c.responseText,
                        e = e.substr(e.indexOf("{"));
                    a.qf(JSON.parse(e))
                } else a.qf(JSON.parse(c.responseText))
            }, c.onerror = function(a) { fa("Error requesting " + e + ":");
                fa(a) });
            c.send()
        }
    };
    d.prototype.ur = function() {
        var a = this,
            c, e, b, h, g, f, m, d, p;
        this.Ae = (!this.W || this.yc || this.ed) && this.Ps && !this.wm;
        0 === this.yb && this.ak && (this.Ae = !1);
        this.devicePixelRatio = this.Ae ? window.devicePixelRatio || window.webkitDevicePixelRatio || window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
        this.ab();
        e = !(!this.Lq && (!this.Ui || this.Md ||
            this.ym || this.gf || this.Mh || this.ed || this.um));
        0 < this.yb && this.setSize(window.innerWidth, window.innerHeight, !0);
        try { this.aq && (this.xc || this.yc || !this.W) && (c = { alpha: e, depth: !1, antialias: !1, failIfMajorPerformanceCaveat: !0 }, this.r = this.canvas.getContext("webgl", c) || this.canvas.getContext("experimental-webgl", c)) } catch (u) {}
        if (this.r) {
            if (c = this.r.getExtension("WEBGL_debug_renderer_info")) this.Ij = this.r.getParameter(c.UNMASKED_RENDERER_WEBGL) + " [" + this.r.getParameter(c.UNMASKED_VENDOR_WEBGL) + "]";
            this.la &&
                (this.Ij += " [front-to-back enabled]");
            this.W || (this.Za = document.createElement("canvas"), jQuery(this.Za).appendTo(this.canvas.parentNode), this.Za.oncontextmenu = function() { return !1 }, this.Za.onselectstart = function() { return !1 }, this.Za.width = Math.round(this.rh * this.devicePixelRatio), this.Za.height = Math.round(this.Vf * this.devicePixelRatio), jQuery(this.Za).css({ width: this.rh + "px", height: this.Vf + "px" }), this.vn(), this.rk = this.Za.getContext("2d"));
            this.p = new eb(this.r, this.Ld, this.la);
            this.p.Ke(this.canvas.width,
                this.canvas.height);
            this.p.Sl = 0 !== this.Up;
            this.ra = null;
            this.canvas.addEventListener("webglcontextlost", function(c) { c.preventDefault();
                a.Pr();
                x("[Construct 2] WebGL context lost");
                window.cr_setSuspended(!0) }, !1);
            this.canvas.addEventListener("webglcontextrestored", function() { a.p.om();
                a.p.Ke(a.p.width, a.p.height, !0);
                a.Na = null;
                a.Ga = null;
                a.xj[0] = null;
                a.xj[1] = null;
                a.Qr();
                a.Z = !0;
                x("[Construct 2] WebGL context restored");
                window.cr_setSuspended(!1) }, !1);
            c = 0;
            for (e = this.q.length; c < e; c++)
                for (g = this.q[c], b = 0,
                    h = g.I.length; b < h; b++) m = g.I[b], m.Ia = this.p.Hj(m.id), m.Cc = this.p.wk(m.Ia), this.Hf = this.Hf || this.p.Hg(m.Ia);
            c = 0;
            for (e = this.Ac.length; c < e; c++) { d = this.Ac[c];
                b = 0; for (h = d.I.length; b < h; b++) m = d.I[b], m.Ia = this.p.Hj(m.id), m.Cc = this.p.wk(m.Ia);
                d.Ic();
                b = 0; for (h = d.K.length; b < h; b++) { p = d.K[b];
                    g = 0; for (f = p.I.length; g < f; g++) m = p.I[g], m.Ia = this.p.Hj(m.id), m.Cc = this.p.wk(m.Ia), this.Hf = this.Hf || this.p.Hg(m.Ia);
                    p.Ic() } }
        } else {
            if (0 < this.yb && this.ze) {
                this.canvas = null;
                document.oncontextmenu = function() { return !1 };
                document.onselectstart =
                    function() { return !1 };
                this.ra = AppMobi.canvas.getContext("2d");
                try { this.ra.samplingMode = this.wa ? "smooth" : "sharp", this.ra.globalScale = 1, this.ra.HTML5CompatibilityMode = !0, this.ra.imageSmoothingEnabled = this.wa } catch (k) {}
                0 !== this.width && 0 !== this.height && (this.ra.width = this.width, this.ra.height = this.height)
            }
            this.ra || (this.xc ? (c = { antialias: !!this.wa, alpha: e }, this.ra = this.canvas.getContext("2d", c)) : (c = { alpha: e }, this.ra = this.canvas.getContext("2d", c)), this.vi(this.ra, this.wa));
            this.rk = this.Za = null
        }
        this.Yn =
            function(c) { a.Yb(!1, c) };
        window == window.top || this.W || this.ym || this.gf || (document.addEventListener("mousedown", function() { window.focus() }, !0), document.addEventListener("touchstart", function() { window.focus() }, !0));
        "undefined" !== typeof cr_is_preview && (this.xc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (x("Reloading for continuous preview"), this.Xh = "__c2_continuouspreview", this.Vg = !0), this.$r && !this.Ld && (jQuery(window).focus(function() { a.setSuspended(!1) }),
            jQuery(window).blur(function() { var c = window.parent;
                c && c.document.hasFocus() || a.setSuspended(!0) })));
        window.addEventListener("blur", function() { a.wf() });
        this.W || (c = function(a) { if (db(a) && document.activeElement && document.activeElement !== document.getElementsByTagName("body")[0] && document.activeElement.blur) try { document.activeElement.blur() } catch (c) {} }, window.navigator.pointerEnabled ? document.addEventListener("pointerdown", c) : window.navigator.msPointerEnabled ? document.addEventListener("MSPointerDown", c) :
            document.addEventListener("touchstart", c), document.addEventListener("mousedown", c));
        0 === this.yb && this.Ae && 1 < this.devicePixelRatio && this.setSize(this.Ea, this.Da, !0);
        this.co();
        this.nr();
        this.go();
        this.J = {}
    };
    d.prototype.setSize = function(a, c, e) {
        var b = 0,
            h = 0,
            g = 0,
            f = 0,
            f = 0;
        if (this.of !== a || this.nf !== c || e) {
            this.of = a;
            this.nf = c;
            var m = this.yb,
                d = (document.mozFullScreen || document.webkitIsFullScreen || !!document.msFullscreenElement || document.fullScreen || this.ng) && !this.ed;
            if (d || 0 !== this.yb || e) d && 0 < this.ue && (m = this.ue),
                e = this.devicePixelRatio, 4 <= m ? (g = this.Ea / this.Da, a / c > g ? (g *= c, 5 === m ? (f = g * e / this.Ea, 1 < f ? f = Math.floor(f) : 1 > f && (f = 1 / Math.ceil(1 / f)), g = this.Ea * f / e, f = this.Da * f / e, b = (a - g) / 2, h = (c - f) / 2, a = g, c = f) : (b = (a - g) / 2, a = g)) : (f = a / g, 5 === m ? (f = f * e / this.Da, 1 < f ? f = Math.floor(f) : 1 > f && (f = 1 / Math.ceil(1 / f)), g = this.Ea * f / e, f = this.Da * f / e, b = (a - g) / 2, h = (c - f) / 2, a = g) : h = (c - f) / 2, c = f), d && !this.Md && (h = b = 0)) : this.Md && this.ng && 0 === this.am && (b = Math.floor((a - this.Ea) / 2), h = Math.floor((c - this.Da) / 2), a = this.Ea, c = this.Da), 2 > m && (this.Of = e), this.rh = Math.round(a),
                this.Vf = Math.round(c), this.width = Math.round(a * e), this.height = Math.round(c * e), this.Z = !0, this.po ? (this.F = this.width, this.D = this.height, this.Ub = !0) : this.width < this.Ea && this.height < this.Da || 1 === m ? (this.F = this.width, this.D = this.height, this.Ub = !0) : (this.F = this.Ea, this.D = this.Da, this.Ub = !1, 2 === m ? (g = this.Ea / this.Da, m = this.of / this.nf, m < g ? this.F = this.D * m : m > g && (this.D = this.F / m)) : 3 === m && (g = this.Ea / this.Da, m = this.of / this.nf, m > g ? this.F = this.D * m : m < g && (this.D = this.F / m))), this.Bd && !this.W && (jQuery(this.Bd).css({
                    width: Math.round(a) +
                        "px",
                    height: Math.round(c) + "px",
                    "margin-left": Math.floor(b) + "px",
                    "margin-top": Math.floor(h) + "px"
                }), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({ width: Math.round(a) + "px", height: Math.round(c) + "px" })), this.canvas && (this.canvas.width = Math.round(a * e), this.canvas.height = Math.round(c * e), this.yc ? (this.canvas.style.left = Math.floor(b) + "px", this.canvas.style.top = Math.floor(h) + "px", this.canvas.style.width = Math.round(a) + "px", this.canvas.style.height = Math.round(c) + "px") : this.Ae && !this.W && (this.canvas.style.width =
                    Math.round(a) + "px", this.canvas.style.height = Math.round(c) + "px")), this.Za && (this.Za.width = Math.round(a * e), this.Za.height = Math.round(c * e), this.Za.style.width = this.rh + "px", this.Za.style.height = this.Vf + "px"), this.p && this.p.Ke(Math.round(a * e), Math.round(c * e)), this.ze && this.ra && (this.ra.width = Math.round(a), this.ra.height = Math.round(c)), this.ra && this.vi(this.ra, this.wa), this.co(), this.Cm && !this.ed && window.scrollTo(0, 0)
        }
    };
    d.prototype.co = function() {
        if (this.op && 0 !== this.qk) {
            var a = "portrait";
            2 === this.qk && (a =
                "landscape");
            try { screen.orientation && screen.orientation.lock ? screen.orientation.lock(a).catch(function() {}) : screen.lockOrientation ? screen.lockOrientation(a) : screen.webkitLockOrientation ? screen.webkitLockOrientation(a) : screen.mozLockOrientation ? screen.mozLockOrientation(a) : screen.msLockOrientation && screen.msLockOrientation(a) } catch (c) { console && console.warn && console.warn("Failed to lock orientation: ", c) }
        }
    };
    d.prototype.Pr = function() {
        this.p.xp();
        this.$j = !0;
        var a, c, e;
        a = 0;
        for (c = this.q.length; a < c; a++) e =
            this.q[a], e.ji && e.ji()
    };
    d.prototype.Qr = function() { this.$j = !1; var a, c, e;
        a = 0; for (c = this.q.length; a < c; a++) e = this.q[a], e.pk && e.pk() };
    d.prototype.vn = function() { if (!this.W) { var a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.ng) && !this.ed ? jQuery(this.canvas).offset() : jQuery(this.canvas).position();
            a.position = "absolute";
            jQuery(this.Za).css(a) } };
    var r = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
        window.msCancelAnimationFrame || window.oCancelAnimationFrame;
    d.prototype.setSuspended = function(a) { var c; if (a && !this.og)
            for (x("[Construct 2] Suspending"), this.og = !0, -1 !== this.zk && r && r(this.zk), -1 !== this.Wk && clearTimeout(this.Wk), a = 0, c = this.Ci.length; a < c; a++) this.Ci[a](!0);
        else if (!a && this.og) { x("[Construct 2] Resuming");
            this.og = !1;
            this.Qh = Qa();
            this.De = Qa();
            a = this.Bg = this.Dh = 0; for (c = this.Ci.length; a < c; a++) this.Ci[a](!1);
            this.Yb(!1) } };
    d.prototype.td = function(a) { return this.hi[a] };
    d.prototype.qf = function(a) {
        a &&
            a.project || fa("Project model unavailable");
        a = a.project;
        this.name = a[0];
        this.Zl = a[1];
        this.yb = a[12];
        this.am = a[12];
        this.Ea = a[10];
        this.Da = a[11];
        this.qn = this.Ea / 2;
        this.rn = this.Da / 2;
        this.W && !this.yc && (4 <= a[12] || 0 === a[12]) && (x("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.am = this.yb = 3);
        this.fl = a[18];
        this.Xd = a[19];
        if (0 === this.Xd) { var c = new Image;
            c.crossOrigin = "anonymous";
            this.In(c, "loading-logo.png");
            this.Wd = { ci: c } } else if (4 === this.Xd) {
            c =
                new Image;
            c.src = "";
            var e = new Image;
            e.src = "";
            var b = new Image;
            b.src = "";
            var h = new Image;
            h.src = "";
            var g = new Image;
            g.src = "";
            var f = new Image;
            f.src = "";
            var m = new Image;
            m.src = "";
            var d = new Image;
            d.src = "";
            var p = new Image;
            p.src = "";
            var u = new Image;
            u.src = "";
            var k = new Image;
            k.src = "";
            var v = new Image;
            v.src = "";
            this.Wd = { ci: [c, e, b, h], es: [g, f, m, d], Ss: [p, u, k, v] }
        }
        this.Dg = a[21];
        this.hi = ac();
        this.Vc = new Z(this);
        c = 0;
        for (e = a[2].length; c < e; c++) m = a[2][c], b = this.td(m[0]), fb(m, b.prototype), d = new b(this), d.Ai = m[1], d.Nd = m[2], d.en =
            m[9], d.T && d.T(), this.plugins.push(d);
        this.hi = ac();
        c = 0;
        for (e = a[3].length; c < e; c++) {
            m = a[3][c];
            g = this.td(m[1]);
            d = null;
            b = 0;
            for (h = this.plugins.length; b < h; b++)
                if (this.plugins[b] instanceof g) { d = this.plugins[b]; break }
            p = new d.xa(d);
            p.name = m[0];
            p.H = m[2];
            p.Rj = m[3].slice(0);
            p.Qs = m[3].length;
            p.pp = m[4];
            p.Mq = m[5];
            p.R = m[11];
            p.H ? (p.tf = [], p.cd = this.$f++, p.ua = null) : (p.tf = null, p.cd = -1, p.ua = []);
            p.yh = null;
            p.df = null;
            p.Tl = null;
            p.Ib = !1;
            p.Gb = null;
            m[6] ? (p.Sk = m[6][0], p.Tk = m[6][1], p.Uk = m[6][2]) : (p.Sk = null, p.Tk = 0, p.Uk = 0);
            m[7] ?
                p.Fb = m[7] : p.Fb = null;
            p.index = c;
            p.d = [];
            p.vh = [];
            p.od = [new gb(p)];
            p.Mc = 0;
            p.cc = null;
            p.Bp = 0;
            p.Ef = !0;
            p.Ki = hb;
            p.Qq = ib;
            p.Vq = jb;
            p.V = kb;
            p.Jg = lb;
            p.yf = mb;
            p.ld = nb;
            p.Fh = ob;
            p.yj = pb;
            p.Cj = qb;
            p.sc = rb;
            p.Ej = sb;
            p.ph = new Ya(this.Ea, this.Da);
            p.gh = !0;
            p.hh = !1;
            p.J = {};
            p.toString = tb;
            p.ya = [];
            b = 0;
            for (h = m[8].length; b < h; b++) {
                u = m[8][b];
                k = this.td(u[1]);
                v = null;
                g = 0;
                for (f = this.ya.length; g < f; g++)
                    if (this.ya[g] instanceof k) { v = this.ya[g]; break }
                v || (v = new k(this), v.nk = [], v.gi = new da, v.T && v.T(), this.ya.push(v), Tb.Fs && v instanceof Tb.Fs && (this.Sn =
                    v)); - 1 === v.nk.indexOf(p) && v.nk.push(p);
                g = new v.xa(v, p);
                g.name = u[0];
                g.R = u[2];
                g.T();
                p.ya.push(g)
            }
            p.global = m[9];
            p.Wj = m[10];
            p.I = [];
            b = 0;
            for (h = m[12].length; b < h; b++) p.I.push({ id: m[12][b][0], name: m[12][b][1], Ia: -1, Cc: !1, Qb: !0, index: b });
            p.ju = m[13];
            this.fl && !p.H && !p.Wj && d.Nd || p.T();
            p.name && (this.types[p.name] = p);
            this.q.push(p);
            d.Ai && (b = new d.ka(p), b.uid = this.Dg++, b.yn = this.hn++, b.we = 0, b.eg = ub, b.toString = vb, b.u = m[14], b.T(), p.d.push(b), this.kd[b.uid.toString()] = b)
        }
        c = 0;
        for (e = a[4].length; c < e; c++)
            for (g = a[4][c],
                f = this.q[g[0]], b = 1, h = g.length; b < h; b++) m = this.q[g[b]], m.ua.push(f), f.tf.push(m);
        c = 0;
        for (e = a[28].length; c < e; c++) { g = a[28][c];
            f = [];
            b = 0; for (h = g.length; b < h; b++) f.push(this.q[g[b]]);
            b = 0; for (h = f.length; b < h; b++) f[b].Ib = !0, f[b].Gb = f }
        if (0 < this.$f)
            for (c = 0, e = this.q.length; c < e; c++)
                if (m = this.q[c], !m.H && m.ua.length) {
                    m.yh = Array(this.$f);
                    m.df = Array(this.$f);
                    m.Tl = Array(this.$f);
                    p = [];
                    b = v = k = u = 0;
                    for (h = m.ua.length; b < h; b++)
                        for (d = m.ua[b], m.yh[d.cd] = u, u += d.Qs, m.df[d.cd] = k, k += d.pp, m.Tl[d.cd] = v, v += d.Mq, g = 0, f = d.I.length; g < f; g++) p.push(ua({},
                            d.I[g]));
                    m.I = p.concat(m.I);
                    b = 0;
                    for (h = m.I.length; b < h; b++) m.I[b].index = b
                }
        c = 0;
        for (e = a[5].length; c < e; c++) m = a[5][c], b = new wb(this, m), this.ek[b.name] = b, this.Ac.push(b);
        c = 0;
        for (e = a[6].length; c < e; c++) m = a[6][c], b = new xb(this, m), this.qj[b.name] = b, this.bd.push(b);
        c = 0;
        for (e = this.bd.length; c < e; c++) this.bd[c].Fa();
        c = 0;
        for (e = this.bd.length; c < e; c++) this.bd[c].cl();
        c = 0;
        for (e = this.Ji.length; c < e; c++) this.Ji[c].Fa();
        V(this.Ji);
        this.mp = a[7];
        this.Bc = a[9];
        this.Of = 1;
        this.aq = a[13];
        this.wa = a[14];
        this.Ui = a[15];
        this.Ps = a[17];
        this.qk = a[20];
        this.op = 0 < this.qk;
        this.$r = a[22];
        this.Ub = this.po = a[23];
        this.Up = a[24];
        this.gs = a[25];
        this.la = a[27] && !this.Kd;
        this.Bi = Date.now();
        V(this.hi);
        this.ur()
    };
    var c = !1;
    d.prototype.oo = function(a, e) {
        a.cocoonLazyLoad = !0;
        a.onerror = function(e) { c = a.Il = !0;
            console && console.error && console.error("Error loading image '" + a.src + "': ", e) };
        this.yc ? a.src = e : a.src || ("undefined" !== typeof XAPKReader ? XAPKReader.get(e, function(c) { a.src = c }, function(b) {
            c = a.Il = !0;
            console && console.error && console.error("Error extracting image '" +
                e + "' from expansion file: ", b)
        }) : (a.crossOrigin = "anonymous", this.In(a, e)));
        this.Kf.push(a)
    };
    d.prototype.Kq = function(a) { var c, e;
        c = 0; for (e = this.Kf.length; c < e; c++)
            if (this.Kf[c].yp === a) return this.Kf[c];
        return null };
    var e = 0,
        u = !1;
    d.prototype.nr = function() { this.Pf && (e = this.Pf.gu(this.mp)) };
    d.prototype.Dl = function() {
        var a = e,
            c = 0,
            b = 0,
            h = !0,
            g, f, b = 0;
        for (g = this.Kf.length; b < g; b++) { f = this.Kf[b]; var m = f.Ml; if (!m || 0 >= m) m = 5E4;
            a += m;
            f.src && (f.complete || f.loaded) && !f.Il ? c += m : h = !1 }
        h && this.gs && this.Pf && (u || (this.Pf.hu(),
            u = !0), b = this.Pf.bu(), c += b, b < e && (h = !1));
        this.Dc = 0 == a ? 1 : c / a;
        return h
    };
    var g = !1;
    d.prototype.go = function() {
        if (this.ra || this.p) {
            var a = this.ra || this.rk;
            this.Za && this.vn();
            var e = window.innerWidth,
                b = window.innerHeight;
            this.of === e && this.nf === b || this.setSize(e, b);
            this.Dc = 0;
            this.Gm = -1;
            var h = this;
            if (this.Dl() && (4 !== this.Xd || g)) this.or();
            else {
                b = Date.now() - this.Bi;
                if (a) {
                    var m = this.width,
                        d = this.height,
                        e = this.devicePixelRatio;
                    if (3 > this.Xd && (this.xc || 500 <= b && this.Gm != this.Dc)) {
                        a.clearRect(0, 0, m, d);
                        var b = m / 2,
                            d = d / 2,
                            m = 0 === this.Xd && this.Wd.ci.complete,
                            p = 40 * e,
                            u = 0,
                            k = 80 * e,
                            v;
                        if (m) { var r = this.Wd.ci,
                                k = r.width * e;
                            v = r.height * e;
                            p = k / 2;
                            u = v / 2;
                            a.drawImage(r, Q(b - p), Q(d - u), k, v) }
                        1 >= this.Xd ? (b = Q(b - p) + .5, d = Q(d + (u + (m ? 12 * e : 0))) + .5, a.fillStyle = c ? "red" : "DodgerBlue", a.fillRect(b, d, Math.floor(k * this.Dc), 6 * e), a.strokeStyle = "black", a.strokeRect(b, d, k, 6 * e), a.strokeStyle = "white", a.strokeRect(b - 1 * e, d - 1 * e, k + 2 * e, 8 * e)) : 2 === this.Xd && (a.font = this.yc ? "12pt ArialMT" : "12pt Arial", a.fillStyle = c ? "#f00" : "#999", a.iu = "middle", e = Math.round(100 * this.Dc) +
                            "%", m = a.measureText ? a.measureText(e) : null, a.fillText(e, b - (m ? m.width : 0) / 2, d));
                        this.Gm = this.Dc
                    } else if (4 === this.Xd) { this.Zp(a);
                        f ? f(function() { h.go() }) : setTimeout(function() { h.go() }, 16); return }
                }
                setTimeout(function() { h.go() }, this.xc ? 10 : 100)
            }
        }
    };
    var v = -1,
        B = "undefined" === typeof cr_is_preview ? 200 : 0,
        p = !0,
        h = !1,
        m = 0,
        Ba = 0,
        aa = "undefined" === typeof cr_is_preview ? 3E3 : 0,
        z = null,
        S = null,
        I = 0;
    d.prototype.Zp = function(a) {
        if (!g) {
            for (var e = Math.ceil(this.width), b = Math.ceil(this.height), f = this.Wd.ci, d = this.Wd.es, u = this.Wd.Ss,
                    k = 0; 4 > k; ++k)
                if (!f[k].complete || !d[k].complete || !u[k].complete) return;
            0 === I && (v = Date.now());
            var k = Date.now(),
                r = !1,
                l = a,
                q, t;
            p || h ? (a.clearRect(0, 0, e, b), z && z.width === e && z.height === b || (z = document.createElement("canvas"), z.width = e, z.height = b, S = z.getContext("2d")), l = S, r = !0, p && 1 === I && (v = Date.now())) : a.globalAlpha = 1;
            l.fillStyle = "#333333";
            l.fillRect(0, 0, e, b);
            256 < this.Vf ? (q = Ca(.22 * b, 105, .6 * e), t = .25 * q, l.drawImage(n(d, q), .5 * e - q / 2, .2 * b - t / 2, q, t), t = q = Math.min(.395 * b, .95 * e), l.drawImage(n(f, q), .5 * e - q / 2, .485 * b - t / 2, q,
                t), q = Ca(.22 * b, 105, .6 * e), t = .25 * q, l.drawImage(n(u, q), .5 * e - q / 2, .868 * b - t / 2, q, t), l.fillStyle = "#3C3C3C", q = e, t = Math.max(.005 * b, 2), l.fillRect(0, .8 * b - t / 2, q, t), l.fillStyle = c ? "red" : "#E0FF65", q = e * this.Dc, l.fillRect(.5 * e - q / 2, .8 * b - t / 2, q, t)) : (t = q = .55 * b, l.drawImage(n(f, q), .5 * e - q / 2, .45 * b - t / 2, q, t), l.fillStyle = "#3C3C3C", q = e, t = Math.max(.005 * b, 2), l.fillRect(0, .85 * b - t / 2, q, t), l.fillStyle = c ? "red" : "#E0FF65", q = e * this.Dc, l.fillRect(.5 * e - q / 2, .85 * b - t / 2, q, t));
            r && (p ? a.globalAlpha = 0 === I ? 0 : Math.min((k - v) / 300, 1) : h && (a.globalAlpha =
                Math.max(1 - (k - Ba) / 300, 0)), a.drawImage(z, 0, 0, e, b));
            p && 300 <= k - v && 2 <= I && (p = !1, m = k);
            !p && k - m >= aa && !h && 1 <= this.Dc && (h = !0, Ba = k);
            if (h && k - Ba >= 300 + B || "undefined" !== typeof cr_is_preview && 1 <= this.Dc && 500 > Date.now() - v) g = !0, h = p = !1, this.Wd = S = z = null;
            ++I
        }
    };
    d.prototype.or = function() {
        this.Za && (this.canvas.parentNode.removeChild(this.Za), this.Za = this.rk = null);
        this.Bi = Date.now();
        this.De = Qa();
        var a, c, e;
        if (this.fl)
            for (a = 0, c = this.q.length; a < c; a++) e = this.q[a], e.H || e.Wj || !e.ja.Nd || e.T();
        else this.qg = !1;
        a = 0;
        for (c = this.Ac.length; a <
            c; a++) this.Ac[a].zp();
        2 <= this.yb && (a = this.Ea / this.Da, c = this.width / this.height, this.Of = 2 !== this.yb && c > a || 2 === this.yb && c < a ? this.height / this.Da : this.width / this.Ea);
        this.Zl ? this.ek[this.Zl].Qk() : this.Ac[0].Qk();
        this.fl || (this.$h = 1, this.trigger(Z.prototype.n.pl, null), window.C2_RegisterSW && window.C2_RegisterSW());
        navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
        a = 0;
        for (c = this.q.length; a < c; a++) e = this.q[a], e.Or && e.Or();
        document.hidden || document.webkitHidden || document.mozHidden ||
            document.msHidden ? window.cr_setSuspended(!0) : this.Yb(!1);
        this.ze && AppMobi.webview.execute("onGameReady();")
    };
    d.prototype.Yb = function(a, c, e) {
        if (this.aa) {
            var b = Qa();
            if (e || !this.og || a) {
                a || (f ? this.zk = f(this.Yn) : this.Wk = setTimeout(this.Yn, this.Ld ? 1 : 16));
                c = c || b;
                var h = this.yb;
                ((e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.ed) || this.ng) && 0 < this.ue && (h = this.ue);
                if (0 < h) {
                    var h = window.innerWidth,
                        g = window.innerHeight;
                    this.of === h && this.nf ===
                        g || this.setSize(h, g)
                }
                this.W || (e ? (this.Ah || (this.wj = jQuery(this.canvas).css("margin") || "0", this.Ah = !0), this.Tj || this.Md || jQuery(this.canvas).css({ "margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px", "margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px" })) : this.Ah ? (this.Tj || this.Md || jQuery(this.canvas).css("margin", this.wj), this.wj = "", this.Ah = !1, 0 === this.yb && this.setSize(Math.round(this.nn / this.devicePixelRatio), Math.round(this.mn / this.devicePixelRatio), !0)) : (this.nn = this.width, this.mn = this.height));
                this.qg && (e = this.Dl(), this.$h = this.Dc, e && (this.qg = !1, this.Dc = 1, this.trigger(Z.prototype.n.pl, null), window.C2_RegisterSW && window.C2_RegisterSW()));
                this.Kr(c);
                !this.Z && !this.xc || this.$j || this.Vg || a || (this.Z = !1, this.p ? this.jb() : this.Tb(), this.Tg && (this.canvas && this.canvas.toDataURL && (this.Rn = this.canvas.toDataURL(this.Tg[0], this.Tg[1]), window.cr_onSnapshot && window.cr_onSnapshot(this.Rn), this.trigger(Z.prototype.n.Mo, null)), this.Tg = null));
                this.cu || (this.Wc++,
                    this.Zf++, this.Dh++);
                this.Bg += Qa() - b
            }
        }
    };
    d.prototype.Kr = function(a) {
        var c, e, b, h, g, f, m, d;
        1E3 <= a - this.De && (this.De += 1E3, 1E3 <= a - this.De && (this.De = a), this.vj = this.Dh, this.Dh = 0, this.ij = this.Bg, this.Bg = 0);
        c = 0;
        0 !== this.Qh && (c = a - this.Qh, 0 > c && (c = 0), this.pe = c /= 1E3, .5 < this.pe ? this.pe = 0 : this.pe > 1 / this.cn && (this.pe = 1 / this.cn));
        this.Qh = a;
        this.bf = this.pe * this.Gf;
        this.Jb.add(this.bf);
        this.Pi.add(c);
        a = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.ng) &&
            !this.ed;
        2 <= this.yb || a && 0 < this.ue ? (c = this.Ea / this.Da, e = this.width / this.height, b = this.yb, a && 0 < this.ue && (b = this.ue), this.Of = 2 !== b && e > c || 2 === b && e < c ? this.height / this.Da : this.width / this.Ea, this.aa && (this.aa.Jk(this.aa.scrollX), this.aa.Kk(this.aa.scrollY))) : this.Of = this.Ae ? this.devicePixelRatio : 1;
        this.ab();
        this.zc++;
        this.Vc.ws();
        this.zc--;
        this.ab();
        this.zc++;
        e = this.kn.qd();
        a = 0;
        for (c = e.length; a < c; a++) e[a].du();
        a = 0;
        for (c = this.q.length; a < c; a++)
            if (f = this.q[a], !f.H && (f.ya.length || f.ua.length))
                for (e = 0, b = f.d.length; e <
                    b; e++)
                    for (m = f.d[e], h = 0, g = m.G.length; h < g; h++) m.G[h].Yb();
        a = 0;
        for (c = this.q.length; a < c; a++)
            if (f = this.q[a], !f.H && (f.ya.length || f.ua.length))
                for (e = 0, b = f.d.length; e < b; e++)
                    for (m = f.d[e], h = 0, g = m.G.length; h < g; h++) d = m.G[h], d.ds && d.ds();
        e = this.ok.qd();
        a = 0;
        for (c = e.length; a < c; a++) e[a].Yb();
        this.zc--;
        this.pr();
        for (a = 0; this.Qf && 10 > a++;) this.Rl(this.Qf);
        a = 0;
        for (c = this.bd.length; a < c; a++) this.bd[a].Mj = !1;
        this.aa.re && this.aa.re.Ha();
        V(this.Lg);
        this.zc++;
        a = 0;
        for (c = this.q.length; a < c; a++)
            if (f = this.q[a], !f.H && (f.ya.length ||
                    f.ua.length))
                for (e = 0, b = f.d.length; e < b; e++)
                    for (m = f.d[e], h = 0, g = m.G.length; h < g; h++) d = m.G[h], d.Vk && d.Vk();
        e = this.ln.qd();
        a = 0;
        for (c = e.length; a < c; a++) e[a].Vk();
        this.zc--
    };
    d.prototype.wf = function() { var a, c, e, b, h, g, f, m, d;
        a = 0; for (c = this.q.length; a < c; a++)
            if (f = this.q[a], !f.H)
                for (e = 0, b = f.d.length; e < b; e++)
                    if (m = f.d[e], m.wf && m.wf(), m.G)
                        for (h = 0, g = m.G.length; h < g; h++) d = m.G[h], d.wf && d.wf() };
    d.prototype.Rl = function(a) {
        var c = this.aa;
        this.aa.Hs();
        var e, b, h;
        if (this.p)
            for (e = 0, b = this.q.length; e < b; e++) h = this.q[e], h.H || !h.bl ||
                h.global && 0 !== h.d.length || -1 !== a.jg.indexOf(h) || h.bl();
        c == a && V(this.Vc.Pb);
        V(this.Lg);
        this.An(!0);
        a.Qk();
        this.An(!1);
        this.Z = !0;
        this.ab()
    };
    d.prototype.An = function(a) { var c, e, b, h, g, f, m, d, p;
        c = 0; for (e = this.ya.length; c < e; c++) b = this.ya[c], a ? b.Eg && b.Eg() : b.Fg && b.Fg();
        c = 0; for (e = this.q.length; c < e; c++)
            if (b = this.q[c], b.global || b.ja.Ai)
                for (h = 0, g = b.d.length; h < g; h++)
                    if (f = b.d[h], a ? f.Eg && f.Eg() : f.Fg && f.Fg(), f.G)
                        for (m = 0, d = f.G.length; m < d; m++) p = f.G[m], a ? p.Eg && p.Eg() : p.Fg && p.Fg() };
    d.prototype.Xg = function(a) { this.ok.add(a) };
    d.prototype.Aj = function(a) { return a && -1 !== a.Cg ? this.pe * a.Cg : this.bf };
    d.prototype.Tb = function() { this.aa.Tb(this.ra);
        this.ze && this.ra.present() };
    d.prototype.jb = function() { this.la && (this.qe = 1, this.aa.oe(this.p));
        this.aa.jb(this.p);
        this.p.js() };
    d.prototype.gp = function(a) { a && this.nj.push(a) };
    d.prototype.im = function(a) { a = a.toString(); return this.kd.hasOwnProperty(a) ? this.kd[a] : null };
    var J = [];
    d.prototype.Se = function(a) {
        var c, e;
        c = a.type.name;
        var b = null;
        if (this.ne.hasOwnProperty(c)) { if (b = this.ne[c], b.contains(a)) return } else b =
            J.length ? J.pop() : new da, this.ne[c] = b;
        b.add(a);
        this.Jd = !0;
        if (a.Ib)
            for (c = 0, e = a.siblings.length; c < e; c++) this.Se(a.siblings[c]);
        this.Vj && b.If.push(a);
        this.Uj || (this.zc++, this.trigger(Object.getPrototypeOf(a.type.ja).n.Po, a), this.zc--)
    };
    d.prototype.ab = function() { if (this.Jd) { var a, c, e, b, h, f;
            this.Vj = !0;
            e = 0; for (h = this.vc.length; e < h; ++e)
                for (a = this.vc[e], c = a.type, c.d.push(a), b = 0, f = c.ua.length; b < f; ++b) c.ua[b].d.push(a), c.ua[b].Ef = !0;
            V(this.vc);
            this.Io();
            Pa(this.ne);
            this.Jd = this.Vj = !1 } };
    d.prototype.Io = function() {
        for (var a in this.ne) this.ne.hasOwnProperty(a) &&
            this.wo(this.ne[a])
    };
    d.prototype.wo = function(a) {
        var c = a.qd(),
            e = c[0].type,
            b, h, f, g, m, d;
        Ra(e.d, a);
        e.Ef = !0;
        0 === e.d.length && (e.hh = !1);
        b = 0;
        for (h = e.ua.length; b < h; ++b) d = e.ua[b], Ra(d.d, a), d.Ef = !0;
        b = 0;
        for (h = this.Vc.Pb.length; b < h; ++b)
            if (m = this.Vc.Pb[b], m.Ob.hasOwnProperty(e.index) && Ra(m.Ob[e.index].ye, a), !e.H)
                for (f = 0, g = e.ua.length; f < g; ++f) d = e.ua[f], m.Ob.hasOwnProperty(d.index) && Ra(m.Ob[d.index].ye, a);
        if (m = c[0].j) {
            if (m.$b)
                for (f = m.d, b = 0, h = f.length; b < h; ++b) g = f[b], a.contains(g) && (g.S(), m.$a.update(g, g.Db, null),
                    g.Db.set(0, 0, -1, -1));
            Ra(m.d, a);
            m.Og(0)
        }
        for (b = 0; b < c.length; ++b) this.vo(c[b], e);
        a.clear();
        J.push(a);
        this.Z = !0
    };
    d.prototype.vo = function(a, c) { var e, b, h;
        e = 0; for (b = this.nj.length; e < b; ++e) this.nj[e](a);
        a.Dd && c.ph.update(a, a.Dd, null);
        (e = a.j) && e.zf(a, !0); if (a.G)
            for (e = 0, b = a.G.length; e < b; ++e) h = a.G[e], h.ae && h.ae(), h.behavior.gi.remove(a);
        this.kn.remove(a);
        this.ok.remove(a);
        this.ln.remove(a);
        a.ae && a.ae();
        this.kd.hasOwnProperty(a.uid.toString()) && delete this.kd[a.uid.toString()];
        this.ii--;
        100 > c.vh.length && c.vh.push(a) };
    d.prototype.Nl = function(a, c, e, b) { if (a.H) { var h = Q(Math.random() * a.tf.length); return this.Nl(a.tf[h], c, e, b) } return a.cc ? this.Ed(a.cc, c, !1, e, b, !1) : null };
    var C = [];
    d.prototype.Ed = function(a, c, e, b, h, f) {
        var g, m, d, p;
        if (!a) return null;
        var u = this.q[a[1]],
            k = u.ja.Nd;
        if (this.qg && k && !u.Wj || k && !this.p && 11 === a[0][11]) return null;
        var v = c;
        k || (c = null);
        var l;
        u.vh.length ? (l = u.vh.pop(), l.kc = !0, u.ja.ka.call(l, u)) : (l = new u.ja.ka(u), l.kc = !1);
        !e || f || this.kd.hasOwnProperty(a[2].toString()) ? l.uid = this.Dg++ : l.uid = a[2];
        this.kd[l.uid.toString()] =
            l;
        l.yn = this.hn++;
        l.we = u.d.length;
        g = 0;
        for (m = this.vc.length; g < m; ++g) this.vc[g].type === u && l.we++;
        l.eg = ub;
        l.toString = vb;
        d = a[3];
        if (l.kc) Pa(l.J);
        else { l.J = {}; if ("undefined" !== typeof cr_is_preview)
                for (l.rm = [], l.rm.length = d.length, g = 0, m = d.length; g < m; g++) l.rm[g] = d[g][1];
            l.Ma = [];
            l.Ma.length = d.length }
        g = 0;
        for (m = d.length; g < m; g++) l.Ma[g] = d[g][0];
        if (k) {
            var r = a[0];
            l.x = ga(b) ? r[0] : b;
            l.y = ga(h) ? r[1] : h;
            l.z = r[2];
            l.width = r[3];
            l.height = r[4];
            l.depth = r[5];
            l.k = r[6];
            l.opacity = r[7];
            l.Ab = r[8];
            l.Bb = r[9];
            l.bb = r[10];
            g = r[11];
            !this.p &&
                u.I.length && (l.bb = g);
            l.Rf = $a(l.bb);
            this.r && ab(l, l.bb, this.r);
            if (l.kc) { g = 0; for (m = r[12].length; g < m; g++)
                    for (d = 0, p = r[12][g].length; d < p; d++) l.za[g][d] = r[12][g][d];
                l.Y.set(0, 0, 0, 0);
                l.Dd.set(0, 0, -1, -1);
                l.Db.set(0, 0, -1, -1);
                l.qb.Pg(l.Y);
                V(l.Yi) } else { l.za = r[12].slice(0);
                g = 0; for (m = l.za.length; g < m; g++) l.za[g] = r[12][g].slice(0);
                l.U = [];
                l.ud = [];
                l.ud.length = u.I.length;
                l.Y = new U(0, 0, 0, 0);
                l.Dd = new U(0, 0, -1, -1);
                l.Db = new U(0, 0, -1, -1);
                l.qb = new ra;
                l.Yi = [];
                l.L = yb;
                l.Yt = zb;
                l.sb = Ab;
                l.S = Bb;
                l.Os = Cb;
                l.lo = Db;
                l.Oc = Eb }
            l.Yg = !1;
            l.Ms =
                0;
            l.Ls = 0;
            l.Ks = null;
            14 === r.length && (l.Yg = !0, l.Ms = r[13][0], l.Ls = r[13][1], l.Ks = r[13][2]);
            g = 0;
            for (m = u.I.length; g < m; g++) l.ud[g] = !0;
            l.md = !0;
            l.Ic = Fb;
            l.Ic();
            l.mo = !!l.U.length;
            l.Xi = !0;
            l.bj = !0;
            u.gh = !0;
            l.visible = !0;
            l.Cg = -1;
            l.j = c;
            l.Jc = c.d.length;
            l.qe = 0;
            "undefined" === typeof l.X && (l.X = null);
            this.Z = l.Zc = !0
        }
        var n;
        V(C);
        g = 0;
        for (m = u.ua.length; g < m; g++) C.push.apply(C, u.ua[g].ya);
        C.push.apply(C, u.ya);
        if (l.kc)
            for (g = 0, m = C.length; g < m; g++) {
                var q = C[g];
                n = l.G[g];
                n.kc = !0;
                q.behavior.ka.call(n, q, l);
                r = a[4][g];
                d = 0;
                for (p = r.length; d <
                    p; d++) n.u[d] = r[d];
                n.T();
                q.behavior.gi.add(l)
            } else
                for (l.G = [], g = 0, m = C.length; g < m; g++) q = C[g], n = new q.behavior.ka(q, l), n.kc = !1, n.u = a[4][g].slice(0), n.T(), l.G.push(n), q.behavior.gi.add(l);
        r = a[5];
        if (l.kc)
            for (g = 0, m = r.length; g < m; g++) l.u[g] = r[g];
        else l.u = r.slice(0);
        this.vc.push(l);
        this.Jd = !0;
        c && (c.Nf(l, !0), 1 !== c.ic || 1 !== c.jc) && (u.hh = !0);
        this.ii++;
        if (u.Ib) {
            if (l.Ib = !0, l.kc ? V(l.siblings) : l.siblings = [], !e && !f) {
                g = 0;
                for (m = u.Gb.length; g < m; g++)
                    if (u.Gb[g] !== u) {
                        if (!u.Gb[g].cc) return null;
                        l.siblings.push(this.Ed(u.Gb[g].cc,
                            v, !1, k ? l.x : b, k ? l.y : h, !0))
                    }
                g = 0;
                for (m = l.siblings.length; g < m; g++)
                    for (l.siblings[g].siblings.push(l), d = 0; d < m; d++) g !== d && l.siblings[g].siblings.push(l.siblings[d])
            }
        } else l.Ib = !1, l.siblings = null;
        l.T();
        g = 0;
        for (m = l.G.length; g < m; g++) l.G[g].cs && l.G[g].cs();
        return l
    };
    d.prototype.Fj = function(a) { var c, e;
        c = 0; for (e = this.aa.K.length; c < e; c++) { var b = this.aa.K[c]; if (cb(b.name, a)) return b } return null };
    d.prototype.ag = function(a) { a = Q(a);
        0 > a && (a = 0);
        a >= this.aa.K.length && (a = this.aa.K.length - 1); return this.aa.K[a] };
    d.prototype.gj =
        function(a) { var c, e;
            c = 0; for (e = a.length; c < e; c++) a[c].V().ia = !0 };
    d.prototype.Jg = function(a) { var c, e;
        c = 0; for (e = a.length; c < e; c++) a[c].Jg() };
    d.prototype.yf = function(a) { var c, e;
        c = 0; for (e = a.length; c < e; c++) a[c].yf() };
    d.prototype.ld = function(a) { var c, e;
        c = 0; for (e = a.length; c < e; c++) a[c].ld() };
    d.prototype.jo = function(a) { if (a.gh) { var c, e, b = a.d;
            c = 0; for (e = b.length; c < e; ++c) b[c].lo();
            b = this.vc;
            c = 0; for (e = b.length; c < e; ++c) b[c].type === a && b[c].lo();
            a.gh = !1 } };
    d.prototype.dm = function(a, c, e, b) {
        var h, g, f = a ? 1 !== a.ic || 1 !== a.jc :
            !1;
        if (c.H)
            for (a = 0, h = c.tf.length; a < h; ++a) g = c.tf[a], f || g.hh ? ya(b, g.d) : (this.jo(g), g.ph.pi(e, b));
        else f || c.hh ? ya(b, c.d) : (this.jo(c), c.ph.pi(e, b))
    };
    d.prototype.$q = function(a, c, e, b) { var h, g;
        h = 0; for (g = c.length; h < g; ++h) this.dm(a, c[h], e, b) };
    d.prototype.Zq = function(a, c, e) { var b = this.Sn;
        b && this.$q(a, b.nk, c, e) };
    d.prototype.Js = function(a, c, e) {
        var b = a.V(),
            h, g, f, m, d = this.Ya().hb.gc,
            p, l, u;
        if (b.ia)
            for (b.ia = !1, V(b.d), h = 0, m = a.d.length; h < m; h++) f = a.d[h], f.S(), p = f.j.rb(c, e, !0), l = f.j.rb(c, e, !1), f.sb(p, l) ? b.d.push(f) : d &&
                b.O.push(f);
        else { g = 0;
            u = d ? b.O : b.d;
            h = 0; for (m = u.length; h < m; h++) f = u[h], f.S(), p = f.j.rb(c, e, !0), l = f.j.rb(c, e, !1), f.sb(p, l) && (d ? b.d.push(f) : (b.d[g] = b.d[h], g++));
            u.length = g }
        a.sc();
        return b.Lj()
    };
    d.prototype.Ne = function(a, c) {
        if (!(a && c && a !== c && a.Zc && c.Zc)) return !1;
        a.S();
        c.S();
        var e = a.j,
            b = c.j,
            h, g, f, m, d, p, l, u;
        if (e === b || e.ic === b.ic && b.jc === b.jc && e.scale === b.scale && e.k === b.k && e.Kc === b.Kc) {
            if (!a.Y.xr(c.Y) || !a.qb.tm(c.qb) || a.Yg && c.Yg) return !1;
            if (a.Yg) return this.Vn(a, c);
            if (c.Yg) return this.Vn(c, a);
            l = a.X && !a.X.hf();
            h = c.X && !c.X.hf();
            if (!l && !h) return !0;
            l ? (a.X.Ye(a.width, a.height, a.k), l = a.X) : (this.Gc.Cf(a.qb, a.x, a.y, a.width, a.height), l = this.Gc);
            h ? (c.X.Ye(c.width, c.height, c.k), u = c.X) : (this.Gc.Cf(c.qb, c.x, c.y, c.width, c.height), u = this.Gc);
            return l.kg(u, c.x - a.x, c.y - a.y)
        }
        l = a.X && !a.X.hf();
        h = c.X && !c.X.hf();
        l ? (a.X.Ye(a.width, a.height, a.k), this.Gc.Ln(a.X)) : this.Gc.Cf(a.qb, a.x, a.y, a.width, a.height);
        l = this.Gc;
        h ? (c.X.Ye(c.width, c.height, c.k), this.Rk.Ln(c.X)) : this.Rk.Cf(c.qb, c.x, c.y, c.width, c.height);
        u = this.Rk;
        h = 0;
        for (g = l.Ec; h <
            g; h++) f = 2 * h, m = f + 1, d = l.Pa[f], p = l.Pa[m], l.Pa[f] = e.P(d + a.x, p + a.y, !0), l.Pa[m] = e.P(d + a.x, p + a.y, !1);
        l.S();
        h = 0;
        for (g = u.Ec; h < g; h++) f = 2 * h, m = f + 1, d = u.Pa[f], p = u.Pa[m], u.Pa[f] = b.P(d + c.x, p + c.y, !0), u.Pa[m] = b.P(d + c.x, p + c.y, !1);
        u.S();
        return l.kg(u, 0, 0)
    };
    var H = new ra;
    new U(0, 0, 0, 0);
    var O = [];
    d.prototype.Vn = function(a, c) {
        var e, b, h, g, f = c.Y,
            m = a.x,
            d = a.y;
        a.$t(f, O);
        var p = c.X && !c.X.hf();
        e = 0;
        for (b = O.length; e < b; ++e)
            if (h = O[e], g = h.eu, f.yr(g, m, d) && (H.Pg(g), H.offset(m, d), H.tm(c.qb)))
                if (p)
                    if (c.X.Ye(c.width, c.height, c.k), h.uk) {
                        if (h.uk.kg(c.X,
                                c.x - (m + g.left), c.y - (d + g.top))) return V(O), !0
                    } else { if (this.Gc.Cf(H, 0, 0, g.right - g.left, g.bottom - g.top), this.Gc.kg(c.X, c.x, c.y)) return V(O), !0 }
        else if (h.uk) { if (this.Gc.Cf(c.qb, 0, 0, c.width, c.height), h.uk.kg(this.Gc, -(m + g.left), -(d + g.top))) return V(O), !0 } else return V(O), !0;
        V(O);
        return !1
    };
    d.prototype.eo = function(a, c) {
        if (!c) return !1;
        var e, b, h, g, f;
        e = 0;
        for (b = a.ya.length; e < b; e++)
            if (a.ya[e].behavior instanceof c) return !0;
        if (!a.H)
            for (e = 0, b = a.ua.length; e < b; e++)
                for (f = a.ua[e], h = 0, g = f.ya.length; h < g; h++)
                    if (f.ya[h].behavior instanceof c) return !0;
        return !1
    };
    d.prototype.$k = function(a) { return this.eo(a, Tb.wt) };
    d.prototype.al = function(a) { return this.eo(a, Tb.xt) };
    var L = [];
    d.prototype.Oe = function(a) { var c, e, b;
        a.S();
        this.Zq(a.j, a.Y, L);
        c = 0; for (e = L.length; c < e; ++c)
            if (b = L[c], b.J.solidEnabled && this.Ne(a, b)) return V(L), b;
        V(L); return null };
    d.prototype.os = function(a, c, e, b) {
        b = b || 50;
        var h = a.x,
            g = a.y,
            f, m = null,
            d = null;
        for (f = 0; f < b; f++)
            if (a.x = h + c * f, a.y = g + e * f, a.L(), !this.Ne(a, m) && ((m = this.Oe(a)) && (d = m), !m && !m)) return d && this.ls(a, c, e, d), !0;
        a.x = h;
        a.y = g;
        a.L();
        return !1
    };
    d.prototype.ls = function(a, c, e, b) { var h = 2,
            g, f = !1;
        g = !1; for (var m = a.x, d = a.y; 16 >= h;) g = 1 / h, h *= 2, a.x += c * g * (f ? 1 : -1), a.y += e * g * (f ? 1 : -1), a.L(), this.Ne(a, b) ? g = f = !0 : (g = f = !1, m = a.x, d = a.y);
        g && (a.x = m, a.y = d, a.L()) };
    d.prototype.qs = function(a) {
        var c = 0,
            e = a.x,
            b = a.y,
            h = 0,
            g = 0,
            f = 0,
            m = this.Oe(a);
        if (m) {
            for (; 100 >= c;) {
                switch (h) {
                    case 0:
                        g = 0;
                        f = -1;
                        c++; break;
                    case 1:
                        g = 1;
                        f = -1; break;
                    case 2:
                        g = 1;
                        f = 0; break;
                    case 3:
                        f = g = 1; break;
                    case 4:
                        g = 0;
                        f = 1; break;
                    case 5:
                        g = -1;
                        f = 1; break;
                    case 6:
                        g = -1;
                        f = 0; break;
                    case 7:
                        f = g = -1 }
                h = (h + 1) % 8;
                a.x = Q(e +
                    g * c);
                a.y = Q(b + f * c);
                a.L();
                if (!this.Ne(a, m) && (m = this.Oe(a), !m)) return
            }
            a.x = e;
            a.y = b;
            a.L()
        }
    };
    d.prototype.rs = function(a, c) { a.Zc && c.Zc && this.Lg.push([a, c]) };
    d.prototype.vp = function(a, c) { var e, b, h;
        e = 0; for (b = this.Lg.length; e < b; e++)
            if (h = this.Lg[e], h[0] == a && h[1] == c || h[0] == c && h[1] == a) return !0;
        return !1 };
    d.prototype.tp = function(a, c, e) {
        var b = a.x,
            h = a.y,
            g = ma(10, Ma(c, e, b, h)),
            f = Ia(c, e, b, h),
            m = this.Oe(a);
        if (!m) return Fa(f + oa);
        var d = m,
            p, l, u, k, v = W(5);
        for (p = 1; 36 > p; p++)
            if (l = f - p * v, a.x = c + Math.cos(l) * g, a.y = e + Math.sin(l) * g, a.L(), !this.Ne(a, d) && (d = this.Oe(a), !d)) { u = l; break }
        36 === p && (u = Fa(f + oa));
        d = m;
        for (p = 1; 36 > p; p++)
            if (l = f + p * v, a.x = c + Math.cos(l) * g, a.y = e + Math.sin(l) * g, a.L(), !this.Ne(a, d) && (d = this.Oe(a), !d)) { k = l; break }
        36 === p && (k = Fa(f + oa));
        a.x = b;
        a.y = h;
        a.L();
        if (k === u) return k;
        a = Ja(k, u) / 2;
        a = La(k, u) ? Fa(u + a + oa) : Fa(k + a);
        u = Math.cos(f);
        f = Math.sin(f);
        k = Math.cos(a);
        a = Math.sin(a);
        c = u * k + f * a;
        return Ia(0, 0, u - 2 * c * k, f - 2 * c * a)
    };
    var X = -1;
    d.prototype.trigger = function(a, c, e) {
        if (!this.aa) return !1;
        var b = this.aa.re;
        if (!b) return !1;
        var h = !1,
            g, f, m;
        X++;
        var d =
            b.mj;
        f = 0;
        for (m = d.length; f < m; ++f) g = this.ao(a, c, d[f], e), h = h || g;
        g = this.ao(a, c, b, e);
        X--;
        return h || g
    };
    d.prototype.ao = function(a, c, e, b) { var h = !1,
            g, f, m, d; if (c)
            for (m = this.Yk(a, c, c.type.name, e, b), h = h || m, d = c.type.ua, g = 0, f = d.length; g < f; ++g) m = this.Yk(a, c, d[g].name, e, b), h = h || m;
        else m = this.Yk(a, c, "system", e, b), h = h || m; return h };
    d.prototype.Yk = function(a, c, e, b, h) {
        var g, f = !1,
            m = !1,
            m = "undefined" !== typeof h,
            d = (m ? b.Vl : b.bo)[e];
        if (!d) return f;
        var p = null;
        b = 0;
        for (g = d.length; b < g; ++b)
            if (d[b].method == a) { p = d[b].Yf; break }
        if (!p) return f;
        var l;
        m ? l = p[h] : l = p;
        if (!l) return null;
        b = 0;
        for (g = l.length; b < g; b++) a = l[b][0], h = l[b][1], m = this.Hq(c, e, a, h), f = f || m;
        return f
    };
    d.prototype.Hq = function(a, c, e, b) {
        var h, g, f = !1;
        this.Zk++;
        var m = this.Ya().hb;
        m && this.Jg(m.fe);
        var d = 1 < this.Zk;
        this.Jg(e.fe);
        d && this.ms();
        var p = this.oi(e);
        p.hb = e;
        a && (h = this.types[c].V(), h.ia = !1, V(h.d), h.d[0] = a, this.types[c].sc());
        a = !0;
        if (e.parent) { c = p.Un; for (h = e.parent; h;) c.push(h), h = h.parent;
            c.reverse();
            h = 0; for (g = c.length; h < g; h++)
                if (!c[h].ys()) { a = !1; break } }
        a && (this.Zf++, e.gc ? e.xs(b) :
            e.Ha(), f = f || p.Ce);
        this.li();
        d && this.as();
        this.ld(e.fe);
        m && this.ld(m.fe);
        this.Jd && 0 === this.zc && 0 === X && !this.Xj && this.ab();
        this.Zk--;
        return f
    };
    d.prototype.zj = function() { var a = this.Ya(); return a.hb.Ka[a.Ja] };
    d.prototype.ms = function() { this.bi++;
        this.bi >= this.kk.length && this.kk.push([]) };
    d.prototype.as = function() { this.bi-- };
    d.prototype.em = function() { return this.kk[this.bi] };
    d.prototype.oi = function(a) { this.xh++;
        this.xh >= this.pj.length && this.pj.push(new Gb); var c = this.Ya();
        c.reset(a); return c };
    d.prototype.li =
        function() { this.xh-- };
    d.prototype.Ya = function() { return this.pj[this.xh] };
    d.prototype.ns = function(a) { this.di++;
        this.di >= this.lk.length && this.lk.push(ba({ name: a, index: 0, Ug: !1 })); var c = this.Pq();
        c.name = a;
        c.index = 0;
        c.Ug = !1; return c };
    d.prototype.bs = function() { this.di-- };
    d.prototype.Pq = function() { return this.lk[this.di] };
    d.prototype.fm = function(a, c) {
        for (var e, b, h, g, f, m; c;) { e = 0; for (b = c.nc.length; e < b; e++)
                if (m = c.nc[e], m instanceof Hb && cb(a, m.name)) return m;
            c = c.parent }
        e = 0;
        for (b = this.bd.length; e < b; e++)
            for (f =
                this.bd[e], h = 0, g = f.Hd.length; h < g; h++)
                if (m = f.Hd[h], m instanceof Hb && cb(a, m.name)) return m;
        return null
    };
    d.prototype.gm = function(a) { var c, e;
        c = 0; for (e = this.Ac.length; c < e; c++)
            if (this.Ac[c].R === a) return this.Ac[c];
        return null };
    d.prototype.Hh = function(a) { var c, e;
        c = 0; for (e = this.q.length; c < e; c++)
            if (this.q[c].R === a) return this.q[c];
        return null };
    d.prototype.Rq = function(a) { var c, e;
        c = 0; for (e = this.xd.length; c < e; c++)
            if (this.xd[c].R === a) return this.xd[c];
        return null };
    d.prototype.Cp = function(a, c) {
        this.Tg = [a, c];
        this.Z = !0
    };
    d.prototype.pr = function() {
        var a = this,
            c = this.Ik,
            e = this.gd,
            h = this.Xh,
            g = !1;
        this.Qn && (g = !0, c = "__c2_continuouspreview", this.Qn = !1);
        if (c.length) {
            this.ab();
            e = this.Cs();
            if (k() && !this.xc) t(c, e, function() { x("Saved state to IndexedDB storage (" + e.length + " bytes)");
                a.gd = e;
                a.trigger(Z.prototype.n.Si, null);
                a.gd = "";
                g && b() }, function(h) {
                try { localStorage.setItem("__c2save_" + c, e), x("Saved state to WebStorage (" + e.length + " bytes)"), a.gd = e, a.trigger(Z.prototype.n.Si, null), a.gd = "", g && b() } catch (f) {
                    x("Failed to save game state: " +
                        h + "; " + f), a.trigger(Z.prototype.n.sl, null)
                }
            });
            else try { localStorage.setItem("__c2save_" + c, e), x("Saved state to WebStorage (" + e.length + " bytes)"), a.gd = e, this.trigger(Z.prototype.n.Si, null), a.gd = "", g && b() } catch (f) { x("Error saving to WebStorage: " + f), a.trigger(Z.prototype.n.sl, null) }
            this.lb = this.Xh = this.Ik = ""
        }
        if (h.length) {
            if (k() && !this.xc) l(h, function(c) {
                c ? (a.lb = c, x("Loaded state from IndexedDB storage (" + a.lb.length + " bytes)")) : (a.lb = localStorage.getItem("__c2save_" + h) || "", x("Loaded state from WebStorage (" +
                    a.lb.length + " bytes)"));
                a.Vg = !1;
                a.lb.length || a.trigger(Z.prototype.n.Ri, null)
            }, function() { a.lb = localStorage.getItem("__c2save_" + h) || "";
                x("Loaded state from WebStorage (" + a.lb.length + " bytes)");
                a.Vg = !1;
                a.lb.length || a.trigger(Z.prototype.n.Ri, null) });
            else { try { this.lb = localStorage.getItem("__c2save_" + h) || "", x("Loaded state from WebStorage (" + this.lb.length + " bytes)") } catch (m) { this.lb = "" }
                this.Vg = !1;
                a.lb.length || a.trigger(Z.prototype.n.Ri, null) }
            this.Ik = this.Xh = ""
        }
        this.lb.length && (this.ab(), this.Jr(this.lb),
            this.gd = this.lb, this.trigger(Z.prototype.n.Ro, null), this.lb = this.gd = "")
    };
    d.prototype.Cs = function() {
        var c, e, b, h, g, f, m, d = { c2save: !0, version: 1, rt: { time: this.Jb.qa, walltime: this.Pi.qa, timescale: this.Gf, tickcount: this.Wc, execcount: this.Zf, next_uid: this.Dg, running_layout: this.aa.R, start_time_offset: Date.now() - this.Bi }, types: {}, layouts: {}, events: { groups: {}, cnds: {}, acts: {}, vars: {} } };
        c = 0;
        for (e = this.q.length; c < e; c++)
            if (g = this.q[c], !g.H && !this.$k(g)) {
                f = { instances: [] };
                Oa(g.J) && (f.ex = a(g.J));
                b = 0;
                for (h = g.d.length; b <
                    h; b++) f.instances.push(this.Hk(g.d[b]));
                d.types[g.R.toString()] = f
            }
        c = 0;
        for (e = this.Ac.length; c < e; c++) b = this.Ac[c], d.layouts[b.R.toString()] = b.mb();
        h = d.events.groups;
        c = 0;
        for (e = this.xd.length; c < e; c++) b = this.xd[c], h[b.R.toString()] = this.Ih[b.gg].fg;
        e = d.events.cnds;
        for (m in this.Cd) this.Cd.hasOwnProperty(m) && (c = this.Cd[m], Oa(c.J) && (e[m] = { ex: a(c.J) }));
        e = d.events.acts;
        for (m in this.vd) this.vd.hasOwnProperty(m) && (c = this.vd[m], Oa(c.J) && (e[m] = { ex: a(c.J) }));
        e = d.events.vars;
        for (m in this.Jf) this.Jf.hasOwnProperty(m) &&
            (c = this.Jf[m], c.Oh || c.parent && !c.pg || (e[m] = c.data));
        d.system = this.Vc.mb();
        return JSON.stringify(d)
    };
    d.prototype.zn = function() { var a, c, e, b, h, g;
        this.kd = {};
        a = 0; for (c = this.q.length; a < c; a++)
            if (e = this.q[a], !e.H)
                for (b = 0, h = e.d.length; b < h; b++) g = e.d[b], this.kd[g.uid.toString()] = g };
    d.prototype.Jr = function(a) {
        a = JSON.parse(a);
        if (a.c2save && !(1 < a.version)) {
            this.mg = !0;
            var c = a.rt;
            this.Jb.reset();
            this.Jb.qa = c.time;
            this.Pi.reset();
            this.Pi.qa = c.walltime || 0;
            this.Gf = c.timescale;
            this.Wc = c.tickcount;
            this.Zf = c.execcount;
            this.Bi = Date.now() - c.start_time_offset;
            var e = c.running_layout;
            if (e !== this.aa.R)
                if (e = this.gm(e)) this.Rl(e);
                else return;
            var b, h, g, f, m, d, p;
            d = a.types;
            for (h in d)
                if (d.hasOwnProperty(h) && (f = this.Hh(parseInt(h, 10))) && !f.H && !this.$k(f)) {
                    d[h].ex ? f.J = d[h].ex : Pa(f.J);
                    m = f.d;
                    g = d[h].instances;
                    e = 0;
                    for (b = na(m.length, g.length); e < b; e++) this.Yh(m[e], g[e]);
                    e = g.length;
                    for (b = m.length; e < b; e++) this.Se(m[e]);
                    e = m.length;
                    for (b = g.length; e < b; e++) {
                        m = null;
                        if (f.ja.Nd && (m = this.aa.Gh(g[e].w.l), !m)) continue;
                        m = this.Ed(f.cc, m, !1, 0, 0, !0);
                        this.Yh(m, g[e])
                    }
                    f.Ef = !0
                }
            this.ab();
            this.zn();
            b = a.layouts;
            for (h in b) b.hasOwnProperty(h) && (e = this.gm(parseInt(h, 10))) && e.Cb(b[h]);
            b = a.events.groups;
            for (h in b) b.hasOwnProperty(h) && (e = this.Rq(parseInt(h, 10))) && this.Ih[e.gg] && this.Ih[e.gg].Hn(b[h]);
            e = a.events.cnds;
            for (h in this.Cd) this.Cd.hasOwnProperty(h) && (e.hasOwnProperty(h) ? this.Cd[h].J = e[h].ex : this.Cd[h].J = {});
            e = a.events.acts;
            for (h in this.vd) this.vd.hasOwnProperty(h) && (e.hasOwnProperty(h) ? this.vd[h].J = e[h].ex : this.vd[h].J = {});
            e = a.events.vars;
            for (h in e) e.hasOwnProperty(h) && this.Jf.hasOwnProperty(h) && (this.Jf[h].data = e[h]);
            this.Dg = c.next_uid;
            this.mg = !1;
            e = 0;
            for (b = this.zh.length; e < b; ++e) m = this.zh[e], this.trigger(Object.getPrototypeOf(m.type.ja).n.dh, m);
            V(this.zh);
            this.Vc.Cb(a.system);
            e = 0;
            for (b = this.q.length; e < b; e++)
                if (f = this.q[e], !f.H && !this.$k(f))
                    for (h = 0, a = f.d.length; h < a; h++) {
                        m = f.d[h];
                        if (f.Ib)
                            for (d = m.eg(), V(m.siblings), c = 0, g = f.Gb.length; c < g; c++) p = f.Gb[c], f !== p && m.siblings.push(p.d[d]);
                        m.wd && m.wd();
                        if (m.G)
                            for (c = 0, g = m.G.length; c < g; c++) d =
                                m.G[c], d.wd && d.wd()
                    }
                this.Z = !0
        }
    };
    d.prototype.Hk = function(c, e) {
        var b, h, g, f, m;
        f = c.type;
        g = f.ja;
        var d = {};
        e ? d.c2 = !0 : d.uid = c.uid;
        Oa(c.J) && (d.ex = a(c.J));
        if (c.Ma && c.Ma.length)
            for (d.ivs = {}, b = 0, h = c.Ma.length; b < h; b++) d.ivs[c.type.Rj[b].toString()] = c.Ma[b];
        if (g.Nd) {
            g = { x: c.x, y: c.y, w: c.width, h: c.height, l: c.j.R, zi: c.Oc() };
            0 !== c.k && (g.a = c.k);
            1 !== c.opacity && (g.o = c.opacity);
            .5 !== c.Ab && (g.hX = c.Ab);
            .5 !== c.Bb && (g.hY = c.Bb);
            0 !== c.bb && (g.bm = c.bb);
            c.visible || (g.v = c.visible);
            c.Zc || (g.ce = c.Zc); - 1 !== c.Cg && (g.mts = c.Cg);
            if (f.I.length)
                for (g.fx = [], b = 0, h = f.I.length; b < h; b++) m = f.I[b], g.fx.push({ name: m.name, active: c.ud[m.index], params: c.za[m.index] });
            d.w = g
        }
        if (c.G && c.G.length)
            for (d.behs = {}, b = 0, h = c.G.length; b < h; b++) f = c.G[b], f.mb && (d.behs[f.type.R.toString()] = f.mb());
        c.mb && (d.data = c.mb());
        return d
    };
    d.prototype.Tq = function(a, c) { var e, b;
        e = 0; for (b = a.Rj.length; e < b; e++)
            if (a.Rj[e] === c) return e;
        return -1 };
    d.prototype.Oq = function(a, c) { var e, b;
        e = 0; for (b = a.G.length; e < b; e++)
            if (a.G[e].type.R === c) return e;
        return -1 };
    d.prototype.Yh = function(a, c, e) {
        var b, h, g, f,
            m;
        m = a.type;
        f = m.ja;
        if (e) { if (!c.c2) return } else a.uid = c.uid;
        c.ex ? a.J = c.ex : Pa(a.J);
        if (h = c.ivs)
            for (b in h) h.hasOwnProperty(b) && (g = this.Tq(m, parseInt(b, 10)), 0 > g || g >= a.Ma.length || (a.Ma[g] = h[b]));
        if (f.Nd) {
            g = c.w;
            a.j.R !== g.l && (h = a.j, a.j = this.aa.Gh(g.l), a.j ? (h.zf(a, !0), a.j.Nf(a, !0), a.L(), a.j.Og(0)) : (a.j = h, e || this.Se(a)));
            a.x = g.x;
            a.y = g.y;
            a.width = g.w;
            a.height = g.h;
            a.Jc = g.zi;
            a.k = g.hasOwnProperty("a") ? g.a : 0;
            a.opacity = g.hasOwnProperty("o") ? g.o : 1;
            a.Ab = g.hasOwnProperty("hX") ? g.hX : .5;
            a.Bb = g.hasOwnProperty("hY") ? g.hY :
                .5;
            a.visible = g.hasOwnProperty("v") ? g.v : !0;
            a.Zc = g.hasOwnProperty("ce") ? g.ce : !0;
            a.Cg = g.hasOwnProperty("mts") ? g.mts : -1;
            a.bb = g.hasOwnProperty("bm") ? g.bm : 0;
            a.Rf = $a(a.bb);
            this.r && ab(a, a.bb, this.r);
            a.L();
            if (g.hasOwnProperty("fx"))
                for (e = 0, h = g.fx.length; e < h; e++) f = m.Cj(g.fx[e].name), 0 > f || (a.ud[f] = g.fx[e].active, a.za[f] = g.fx[e].params);
            a.Ic()
        }
        if (m = c.behs)
            for (b in m) m.hasOwnProperty(b) && (e = this.Oq(a, parseInt(b, 10)), 0 > e || a.G[e].Cb(m[b]));
        c.data && a.Cb(c.data)
    };
    d.prototype.Wl = function(a, c, e) {
        window.resolveLocalFileSystemURL(cordova.file.applicationDirectory +
            "www/" + a,
            function(a) { a.file(c, e) }, e)
    };
    d.prototype.Xl = function(a, c) { this.Wl("data.js", function(e) { var b = new FileReader;
            b.onload = function(c) { a(c.target.result) };
            b.onerror = c;
            b.readAsText(e) }, c) };
    var N = [],
        K = 0;
    d.prototype.mk = function() { if (N.length && !(8 <= K)) { K++; var a = N.shift();
            this.Gp(a.filename, a.Is, a.dq) } };
    d.prototype.Iq = function(a, c, e) { var b = this;
        N.push({ filename: a, Is: function(a) { K--;
                b.mk();
                c(a) }, dq: function(a) { K--;
                b.mk();
                e(a) } });
        this.mk() };
    d.prototype.Gp = function(a, c, e) {
        this.Wl(a, function(a) {
            var e =
                new FileReader;
            e.onload = function(a) { c(a.target.result) };
            e.readAsArrayBuffer(a)
        }, e)
    };
    d.prototype.Jq = function(a, c, e) { this.Iq(a, function(a) { a = URL.createObjectURL(new Blob([a]));
            c(a) }, e) };
    d.prototype.Ar = function(a) { return /^(?:[a-z]+:)?\/\//.test(a) || "data:" === a.substr(0, 5) || "blob:" === a.substr(0, 5) };
    d.prototype.In = function(a, c) { this.Yj && !this.Ar(c) ? this.Jq(c, function(c) { a.src = c }, function(a) { alert("Failed to load image: " + a) }) : a.src = c };
    d.prototype.vi = function(a, c) {
        "undefined" !== typeof a.imageSmoothingEnabled ?
            a.imageSmoothingEnabled = c : (a.webkitImageSmoothingEnabled = c, a.mozImageSmoothingEnabled = c, a.msImageSmoothingEnabled = c)
    };
    Ib = function(a) { return new d(document.getElementById(a)) };
    Jb = function(a, c) { return new d({ dc: !0, width: a, height: c }) };
    window.cr_createRuntime = Ib;
    window.cr_createDCRuntime = Jb;
    window.createCocoonJSRuntime = function() {
        window.c2cocoonjs = !0;
        var a = document.createElement("screencanvas") || document.createElement("canvas");
        a.Fl = !0;
        document.body.appendChild(a);
        a = new d(a);
        window.c2runtime = a;
        window.addEventListener("orientationchange",
            function() { window.c2runtime.setSize(window.innerWidth, window.innerHeight) });
        window.c2runtime.setSize(window.innerWidth, window.innerHeight);
        return a
    };
    window.createEjectaRuntime = function() { var a = new d(document.getElementById("canvas"));
        window.c2runtime = a;
        window.c2runtime.setSize(window.innerWidth, window.innerHeight); return a }
})();
window.cr_getC2Runtime = function() { var d = document.getElementById("c2canvas"); return d ? d.c2runtime : window.c2runtime ? window.c2runtime : null };
window.cr_getSnapshot = function(d, n) { var k = window.cr_getC2Runtime();
    k && k.Cp(d, n) };
window.cr_sizeCanvas = function(d, n) { if (0 !== d && 0 !== n) { var k = window.cr_getC2Runtime();
        k && k.setSize(d, n) } };
window.cr_setSuspended = function(d) { var n = window.cr_getC2Runtime();
    n && n.setSuspended(d) };
(function() {
    function d(a, e) {
        this.b = a;
        this.re = null;
        this.scrollX = this.b.Ea / 2;
        this.scrollY = this.b.Da / 2;
        this.scale = 1;
        this.k = 0;
        this.ef = !0;
        this.name = e[0];
        this.Yr = e[1];
        this.Xr = e[2];
        this.width = e[1];
        this.height = e[2];
        this.fo = e[3];
        this.On = e[4];
        this.R = e[5];
        var b = e[6],
            g, f;
        this.K = [];
        this.jg = [];
        g = 0;
        for (f = b.length; g < f; g++) { var d = new Kb(this, b[g]);
            d.jn = g;
            this.K.push(d) }
        b = e[7];
        this.xe = [];
        g = 0;
        for (f = b.length; g < f; g++) { var d = b[g],
                p = this.b.q[d[1]];
            p.cc || (p.cc = d);
            this.xe.push(d); - 1 === this.jg.indexOf(p) && this.jg.push(p) }
        this.I = [];
        this.U = [];
        this.md = !0;
        this.za = [];
        g = 0;
        for (f = e[8].length; g < f; g++) this.I.push({ id: e[8][g][0], name: e[8][g][1], Ia: -1, Cc: !1, Qb: !0, index: g }), this.za.push(e[8][g][2].slice(0));
        this.Ic();
        this.de = new U(0, 0, 1, 1);
        this.Ak = new U(0, 0, 1, 1);
        this.be = {}
    }

    function n(a, e) { return a.Jc - e.Jc }

    function k(a, e) {
        this.Oa = a;
        this.b = a.b;
        this.d = [];
        this.scale = 1;
        this.k = 0;
        this.ad = !1;
        this.pd = new U(0, 0, 0, 0);
        this.Zn = new ra;
        this.ea = this.ca = this.fa = this.ba = 0;
        this.Re = !1;
        this.sd = -1;
        this.hj = 0;
        this.name = e[0];
        this.index = e[1];
        this.R = e[2];
        this.visible =
            e[3];
        this.tc = e[4];
        this.Hc = e[5];
        this.ic = e[6];
        this.jc = e[7];
        this.opacity = e[8];
        this.Ch = e[9];
        this.$b = e[10];
        this.Kc = e[11];
        this.bb = e[12];
        this.$p = e[13];
        this.Rf = "source-over";
        this.ib = this.nb = 0;
        this.$a = null;
        this.hd = q();
        this.Fc = !0;
        this.pf = new U(0, 0, -1, -1);
        this.Va = new U(0, 0, -1, -1);
        this.$b && (this.$a = new Za(this.b.Ea, this.b.Da));
        this.Tc = !1;
        var b = e[14],
            g, f;
        this.Tn = [];
        this.Wb = [];
        this.Uf = [];
        g = 0;
        for (f = b.length; g < f; g++) {
            var d = b[g],
                p = this.b.q[d[1]];
            p.cc || (p.cc = d, p.Bp = this.index);
            this.Wb.push(d); - 1 === this.Oa.jg.indexOf(p) &&
                this.Oa.jg.push(p)
        }
        xa(this.Tn, this.Wb);
        this.I = [];
        this.U = [];
        this.md = !0;
        this.za = [];
        g = 0;
        for (f = e[15].length; g < f; g++) this.I.push({ id: e[15][g][0], name: e[15][g][1], Ia: -1, Cc: !1, Qb: !0, index: g }), this.za.push(e[15][g][2].slice(0));
        this.Ic();
        this.de = new U(0, 0, 1, 1);
        this.Ak = new U(0, 0, 1, 1)
    }

    function q() { return a.length ? a.pop() : [] }

    function t(c) { V(c);
        a.push(c) }
    d.prototype.Bs = function(a) { var e = a.type.R.toString();
        this.be.hasOwnProperty(e) || (this.be[e] = []);
        this.be[e].push(this.b.Hk(a)) };
    d.prototype.km = function() {
        var a =
            this.K[0];
        return !a.Hc && 1 === a.opacity && !a.Ch && a.visible
    };
    d.prototype.Ic = function() { V(this.U);
        this.md = !0; var a, e, b;
        a = 0; for (e = this.I.length; a < e; a++) b = this.I[a], b.Qb && (this.U.push(b), b.Cc || (this.md = !1)) };
    d.prototype.Bj = function(a) { var e, b, g;
        e = 0; for (b = this.I.length; e < b; e++)
            if (g = this.I[e], g.name === a) return g;
        return null };
    var l = [],
        b = !0;
    d.prototype.Qk = function() {
        this.On && (this.re = this.b.qj[this.On], this.re.cl());
        this.b.aa = this;
        this.width = this.Yr;
        this.height = this.Xr;
        this.scrollX = this.b.Ea / 2;
        this.scrollY = this.b.Da /
            2;
        var a, e, f, g, d, k, p;
        a = 0;
        for (f = this.b.q.length; a < f; a++)
            if (e = this.b.q[a], !e.H)
                for (d = e.d, e = 0, g = d.length; e < g; e++)
                    if (k = d[e], k.j) { var h = k.j.jn;
                        h >= this.K.length && (h = this.K.length - 1);
                        k.j = this.K[h]; - 1 === k.j.d.indexOf(k) && k.j.d.push(k);
                        k.j.Re = !0 }
        if (!b)
            for (a = 0, f = this.K.length; a < f; ++a) this.K[a].d.sort(n);
        V(l);
        this.rp();
        a = 0;
        for (f = this.K.length; a < f; a++) k = this.K[a], k.Ap(), k.Li();
        d = !1;
        if (!this.ef) {
            for (p in this.be)
                if (this.be.hasOwnProperty(p) && (e = this.b.Hh(parseInt(p, 10))) && !e.H && this.b.al(e)) {
                    g = this.be[p];
                    a = 0;
                    for (f =
                        g.length; a < f; a++) { k = null; if (e.ja.Nd && (k = this.Gh(g[a].w.l), !k)) continue;
                        k = this.b.Ed(e.cc, k, !1, 0, 0, !0);
                        this.b.Yh(k, g[a]);
                        d = !0;
                        l.push(k) }
                    V(g)
                }
            a = 0;
            for (f = this.K.length; a < f; a++) this.K[a].d.sort(n), this.K[a].Re = !0
        }
        d && (this.b.ab(), this.b.zn());
        for (a = 0; a < l.length; a++)
            if (k = l[a], k.type.Ib)
                for (f = k.eg(), e = 0, g = k.type.Gb.length; e < g; e++) p = k.type.Gb[e], k.type !== p && (p.d.length > f ? k.siblings.push(p.d[f]) : p.cc && (d = this.b.Ed(p.cc, k.j, !0, k.x, k.y, !0), this.b.ab(), p.Ki(), k.siblings.push(d), l.push(d)));
        a = 0;
        for (f = this.xe.length; a <
            f; a++) this.b.Ed(this.xe[a], null, !0);
        this.b.Qf = null;
        this.b.ab();
        if (this.b.ra && !this.b.W)
            for (a = 0, f = this.b.q.length; a < f; a++) p = this.b.q[a], !p.H && p.d.length && p.vk && p.vk(this.b.ra);
        if (this.b.mg) xa(this.b.zh, l);
        else
            for (a = 0, f = l.length; a < f; a++) k = l[a], this.b.trigger(Object.getPrototypeOf(k.type.ja).n.dh, k);
        V(l);
        this.b.mg || this.b.trigger(Z.prototype.n.ol, null);
        this.ef = !1
    };
    d.prototype.zp = function() {
        var a, e, b, g, f;
        e = a = 0;
        for (b = this.xe.length; a < b; a++) g = this.xe[a], f = this.b.q[g[1]], f.global ? f.Ib || this.b.Ed(g, null, !0) : (this.xe[e] = g, e++);
        wa(this.xe, e)
    };
    d.prototype.Hs = function() {
        this.b.mg || this.b.trigger(Z.prototype.n.Qo, null);
        this.b.Uj = !0;
        V(this.b.Vc.Pb);
        var a, e, f, g, d, l;
        if (!this.ef)
            for (a = 0, e = this.K.length; a < e; a++)
                for (this.K[a].el(), d = this.K[a].d, f = 0, g = d.length; f < g; f++) l = d[f], l.type.global || this.b.al(l.type) && this.Bs(l);
        a = 0;
        for (e = this.K.length; a < e; a++) { d = this.K[a].d;
            f = 0; for (g = d.length; f < g; f++) l = d[f], l.type.global || this.b.Se(l);
            this.b.ab();
            V(d);
            this.K[a].Re = !0 }
        a = 0;
        for (e = this.b.q.length; a < e; a++)
            if (d = this.b.q[a], !(d.global || d.ja.Nd || d.ja.Ai || d.H)) { f = 0; for (g = d.d.length; f < g; f++) this.b.Se(d.d[f]);
                this.b.ab() }
        b = !1;
        this.b.Uj = !1
    };
    new U(0, 0, 0, 0);
    d.prototype.Tb = function(a) {
        var e, b = a,
            g = !1,
            f = !this.b.Ub;
        f && (this.b.Wh || (this.b.Wh = document.createElement("canvas"), e = this.b.Wh, e.width = this.b.F, e.height = this.b.D, this.b.Im = e.getContext("2d"), g = !0), e = this.b.Wh, b = this.b.Im, e.width !== this.b.F && (e.width = this.b.F, g = !0), e.height !== this.b.D && (e.height = this.b.D, g = !0), g && this.b.vi(b, this.b.wa));
        b.globalAlpha = 1;
        b.globalCompositeOperation =
            "source-over";
        this.b.Ui && !this.km() && b.clearRect(0, 0, this.b.F, this.b.D);
        var d, p, g = 0;
        for (d = this.K.length; g < d; g++) p = this.K[g], p.visible && 0 < p.opacity && 11 !== p.bb && (p.d.length || !p.Hc) ? p.Tb(b) : p.Li();
        f && a.drawImage(e, 0, 0, this.b.width, this.b.height)
    };
    d.prototype.oe = function(a) {
        a.Gn(!0);
        this.b.Ga || (this.b.Ga = a.Sb(this.b.F, this.b.D, this.b.wa));
        if (this.b.Ga.me !== this.b.F || this.b.Ga.le !== this.b.D) a.deleteTexture(this.b.Ga), this.b.Ga = a.Sb(this.b.F, this.b.D, this.b.wa);
        a.mc(this.b.Ga);
        this.b.Ub || a.Ke(this.b.F,
            this.b.D);
        var e, b;
        for (e = this.K.length - 1; 0 <= e; --e) b = this.K[e], b.visible && 1 === b.opacity && b.md && 0 === b.bb && (b.d.length || !b.Hc) ? b.oe(a) : b.Li();
        a.Gn(!1)
    };
    d.prototype.jb = function(a) {
        var e = 0 < this.U.length || this.b.Hf || !this.b.Ub || this.b.la;
        if (e) { this.b.Ga || (this.b.Ga = a.Sb(this.b.F, this.b.D, this.b.wa)); if (this.b.Ga.me !== this.b.F || this.b.Ga.le !== this.b.D) a.deleteTexture(this.b.Ga), this.b.Ga = a.Sb(this.b.F, this.b.D, this.b.wa);
            a.mc(this.b.Ga);
            this.b.Ub || a.Ke(this.b.F, this.b.D) } else this.b.Ga && (a.mc(null), a.deleteTexture(this.b.Ga),
            this.b.Ga = null);
        this.b.Ui && !this.km() && a.clear(0, 0, 0, 0);
        var b, g, f;
        b = 0;
        for (g = this.K.length; b < g; b++) f = this.K[b], f.visible && 0 < f.opacity && (f.d.length || !f.Hc) ? f.jb(a) : f.Li();
        e && (0 === this.U.length || 1 === this.U.length && this.b.Ub ? (1 === this.U.length ? (e = this.U[0].index, a.Eb(this.U[0].Ia), a.Bf(null, 1 / this.b.F, 1 / this.b.D, 0, 0, 1, 1, this.scale, this.k, 0, 0, this.b.F / 2, this.b.D / 2, this.b.Jb.qa, this.za[e]), a.ni(this.U[0].Ia) && (this.b.Z = !0)) : a.Eb(0), this.b.Ub || a.Ke(this.b.width, this.b.height), a.mc(null), a.Fn(!1), a.Je(1),
            a.Mb(this.b.Ga), a.Dn(), a.lc(), a.Zb(), e = this.b.width / 2, b = this.b.height / 2, a.Kg(-e, b, e, b, e, -b, -e, -b), a.Mb(null), a.Fn(!0)) : this.Ck(a, null, null, null))
    };
    d.prototype.bg = function() { return 0 < this.U.length || this.b.Hf || !this.b.Ub || this.b.la ? this.b.Ga : null };
    d.prototype.hm = function() { var a = this.K[0].zb(),
            e, b, g;
        e = 1; for (b = this.K.length; e < b; e++) g = this.K[e], (0 !== g.ic || 0 !== g.jc) && g.zb() < a && (a = g.zb()); return a };
    d.prototype.Jk = function(a) {
        if (!this.fo) {
            var e = 1 / this.hm() * this.b.F / 2;
            a > this.width - e && (a = this.width - e);
            a < e &&
                (a = e)
        }
        this.scrollX !== a && (this.scrollX = a, this.b.Z = !0)
    };
    d.prototype.Kk = function(a) { if (!this.fo) { var e = 1 / this.hm() * this.b.D / 2;
            a > this.height - e && (a = this.height - e);
            a < e && (a = e) }
        this.scrollY !== a && (this.scrollY = a, this.b.Z = !0) };
    d.prototype.rp = function() { this.Jk(this.scrollX);
        this.Kk(this.scrollY) };
    d.prototype.Ck = function(a, e, b, g) {
        var f = b ? b.U : e ? e.U : this.U,
            d = 1,
            p = 0,
            h = 0,
            m = 0,
            l = this.b.F,
            k = this.b.D;
        b ? (d = b.j.zb(), p = b.j.Hb(), h = b.j.ba, m = b.j.ca, l = b.j.fa, k = b.j.ea) : e && (d = e.zb(), p = e.Hb(), h = e.ba, m = e.ca, l = e.fa, k = e.ea);
        var r =
            this.b.xj,
            n, q, t, C, H = 0,
            O = 1,
            L, X, N = this.b.F,
            K = this.b.D,
            w = N / 2,
            y = K / 2,
            A = e ? e.de : this.de,
            E = e ? e.Ak : this.Ak,
            M = 0,
            T = 0,
            F = 0,
            D = 0,
            R = N,
            sa = N,
            P = K,
            ta = K,
            ka = t = 0;
        C = b ? b.j.Hb() : 0;
        if (b) {
            n = 0;
            for (q = f.length; n < q; n++) t += a.Wq(f[n].Ia), ka += a.Xq(f[n].Ia);
            D = b.Y;
            M = e.P(D.left, D.top, !0, !0);
            F = e.P(D.left, D.top, !1, !0);
            R = e.P(D.right, D.bottom, !0, !0);
            P = e.P(D.right, D.bottom, !1, !0);
            0 !== C && (n = e.P(D.right, D.top, !0, !0), q = e.P(D.right, D.top, !1, !0), T = e.P(D.left, D.bottom, !0, !0), D = e.P(D.left, D.bottom, !1, !0), C = Math.min(M, R, n, T), R = Math.max(M, R, n, T), M =
                C, C = Math.min(F, P, q, D), P = Math.max(F, P, q, D), F = C);
            M -= t;
            F -= ka;
            R += t;
            P += ka;
            E.left = M / N;
            E.top = 1 - F / K;
            E.right = R / N;
            E.bottom = 1 - P / K;
            T = M = Q(M);
            D = F = Q(F);
            sa = R = pa(R);
            ta = P = pa(P);
            T -= t;
            D -= ka;
            sa += t;
            ta += ka;
            0 > M && (M = 0);
            0 > F && (F = 0);
            R > N && (R = N);
            P > K && (P = K);
            0 > T && (T = 0);
            0 > D && (D = 0);
            sa > N && (sa = N);
            ta > K && (ta = K);
            A.left = M / N;
            A.top = 1 - F / K;
            A.right = R / N;
            A.bottom = 1 - P / K
        } else A.left = E.left = 0, A.top = E.top = 0, A.right = E.right = 1, A.bottom = E.bottom = 1;
        ka = b && (a.Hg(f[0].Ia) || 0 !== t || 0 !== ka || 1 !== b.opacity || b.type.ja.en) || e && !b && 1 !== e.opacity;
        a.Dn();
        if (ka) {
            r[H] ||
                (r[H] = a.Sb(N, K, this.b.wa));
            if (r[H].me !== N || r[H].le !== K) a.deleteTexture(r[H]), r[H] = a.Sb(N, K, this.b.wa);
            a.Eb(0);
            a.mc(r[H]);
            X = ta - D;
            a.clearRect(T, K - D - X, sa - T, X);
            b ? b.jb(a) : (a.Mb(this.b.Na), a.Je(e.opacity), a.lc(), a.translate(-w, -y), a.Zb(), a.Sc(M, P, R, P, R, F, M, F, A));
            E.left = E.top = 0;
            E.right = E.bottom = 1;
            b && (C = A.top, A.top = A.bottom, A.bottom = C);
            H = 1;
            O = 0
        }
        a.Je(1);
        t = f.length - 1;
        var Xa = a.xk(f[t].Ia) || !e && !b && !this.b.Ub;
        n = C = 0;
        for (q = f.length; n < q; n++) {
            r[H] || (r[H] = a.Sb(N, K, this.b.wa));
            if (r[H].me !== N || r[H].le !== K) a.deleteTexture(r[H]),
                r[H] = a.Sb(N, K, this.b.wa);
            a.Eb(f[n].Ia);
            C = f[n].index;
            a.ni(f[n].Ia) && (this.b.Z = !0);
            0 != n || ka ? (a.Bf(g, 1 / N, 1 / K, E.left, E.top, E.right, E.bottom, d, p, h, m, (h + l) / 2, (m + k) / 2, this.b.Jb.qa, b ? b.za[C] : e ? e.za[C] : this.za[C]), a.Mb(null), n !== t || Xa ? (a.mc(r[H]), X = ta - D, L = K - D - X, a.clearRect(T, L, sa - T, X)) : (b ? a.ee(b.nb, b.ib) : e && a.ee(e.nb, e.ib), a.mc(g)), a.Mb(r[O]), a.lc(), a.translate(-w, -y), a.Zb(), a.Sc(M, P, R, P, R, F, M, F, A), n !== t || Xa || a.Mb(null)) : (a.mc(r[H]), X = ta - D, L = K - D - X, a.clearRect(T, L, sa - T, X), b ? (b.Ua && b.Ua.Q ? (L = b.Ua.Q, O = 1 / L.width,
                L = 1 / L.height) : (O = 1 / b.width, L = 1 / b.height), a.Bf(g, O, L, E.left, E.top, E.right, E.bottom, d, p, h, m, (h + l) / 2, (m + k) / 2, this.b.Jb.qa, b.za[C]), b.jb(a)) : (a.Bf(g, 1 / N, 1 / K, 0, 0, 1, 1, d, p, h, m, (h + l) / 2, (m + k) / 2, this.b.Jb.qa, e ? e.za[C] : this.za[C]), a.Mb(e ? this.b.Na : this.b.Ga), a.lc(), a.translate(-w, -y), a.Zb(), a.Sc(M, P, R, P, R, F, M, F, A)), E.left = E.top = 0, E.right = E.bottom = 1, b && !Xa && (C = P, P = F, F = C));
            H = 0 === H ? 1 : 0;
            O = 0 === H ? 1 : 0
        }
        Xa && (a.Eb(0), b ? a.ee(b.nb, b.ib) : e ? a.ee(e.nb, e.ib) : this.b.Ub || (a.Ke(this.b.width, this.b.height), w = this.b.width / 2, y = this.b.height /
            2, F = M = 0, R = this.b.width, P = this.b.height), a.mc(g), a.Mb(r[O]), a.lc(), a.translate(-w, -y), a.Zb(), b && 1 === f.length && !ka ? a.Sc(M, F, R, F, R, P, M, P, A) : a.Sc(M, P, R, P, R, F, M, F, A), a.Mb(null))
    };
    d.prototype.Gh = function(a) { var e, b;
        e = 0; for (b = this.K.length; e < b; e++)
            if (this.K[e].R === a) return this.K[e];
        return null };
    d.prototype.mb = function() {
        var a, e, b, g = { sx: this.scrollX, sy: this.scrollY, s: this.scale, a: this.k, w: this.width, h: this.height, fv: this.ef, persist: this.be, fx: [], layers: {} };
        a = 0;
        for (e = this.I.length; a < e; a++) b = this.I[a], g.fx.push({
            name: b.name,
            active: b.Qb,
            params: this.za[b.index]
        });
        a = 0;
        for (e = this.K.length; a < e; a++) b = this.K[a], g.layers[b.R.toString()] = b.mb();
        return g
    };
    d.prototype.Cb = function(a) {
        var e, b, g, f;
        this.scrollX = a.sx;
        this.scrollY = a.sy;
        this.scale = a.s;
        this.k = a.a;
        this.width = a.w;
        this.height = a.h;
        this.be = a.persist;
        "undefined" !== typeof a.fv && (this.ef = a.fv);
        var d = a.fx;
        e = 0;
        for (b = d.length; e < b; e++)
            if (g = this.Bj(d[e].name)) g.Qb = d[e].active, this.za[g.index] = d[e].params;
        this.Ic();
        e = a.layers;
        for (f in e) e.hasOwnProperty(f) && (a = this.Gh(parseInt(f, 10))) &&
            a.Cb(e[f])
    };
    wb = d;
    k.prototype.Ic = function() { V(this.U);
        this.md = !0; var a, e, b;
        a = 0; for (e = this.I.length; a < e; a++) b = this.I[a], b.Qb && (this.U.push(b), b.Cc || (this.md = !1)) };
    k.prototype.Bj = function(a) { var b, f, g;
        b = 0; for (f = this.I.length; b < f; b++)
            if (g = this.I[b], g.name === a) return g;
        return null };
    k.prototype.Ap = function() {
        var a, b, f, g, d, k;
        b = a = 0;
        for (f = this.Wb.length; a < f; a++) {
            g = this.Wb[a];
            d = this.b.q[g[1]];
            k = this.b.al(d);
            d = !0;
            if (!k || this.Oa.ef) { g = this.b.Ed(g, this, !0); if (!g) continue;
                l.push(g);
                g.type.global && (d = !1, this.Uf.push(g.uid)) }
            d &&
                (this.Wb[b] = this.Wb[a], b++)
        }
        this.Wb.length = b;
        this.b.ab();
        !this.b.p && this.I.length && (this.bb = this.$p);
        this.Rf = $a(this.bb);
        this.b.r && ab(this, this.bb, this.b.r);
        this.Fc = !0
    };
    k.prototype.zf = function(a, b) { var f = za(this.d, a);
        0 > f || (b && this.$b && a.Db && a.Db.right >= a.Db.left && (a.S(), this.$a.update(a, a.Db, null), a.Db.set(0, 0, -1, -1)), f === this.d.length - 1 ? this.d.pop() : (va(this.d, f), this.Og(f)), this.Fc = !0) };
    k.prototype.Nf = function(a, b) { a.Jc = this.d.length;
        this.d.push(a);
        b && this.$b && a.Db && a.L();
        this.Fc = !0 };
    k.prototype.hs =
        function(a) { this.d.unshift(a);
            this.Og(0) };
    k.prototype.Nr = function(a, b, f) { var g = a.Oc();
        b = b.Oc();
        va(this.d, g);
        g < b && b--;
        f && b++;
        b === this.d.length ? this.d.push(a) : this.d.splice(b, 0, a);
        this.Og(g < b ? g : b) };
    k.prototype.Og = function(a) {-1 === this.sd ? this.sd = a : a < this.sd && (this.sd = a);
        this.Fc = this.Re = !0 };
    k.prototype.el = function() {
        if (this.Re) {
            -1 === this.sd && (this.sd = 0);
            var a, b, f;
            if (this.$b)
                for (a = this.sd, b = this.d.length; a < b; ++a) f = this.d[a], f.Jc = a, this.$a.Lr(f.Db);
            else
                for (a = this.sd, b = this.d.length; a < b; ++a) this.d[a].Jc =
                    a;
            this.Re = !1;
            this.sd = -1
        }
    };
    k.prototype.zb = function(a) { return this.Uq() * (this.b.Ub || a ? this.b.Of : 1) };
    k.prototype.Uq = function() { return (this.scale * this.Oa.scale - 1) * this.Kc + 1 };
    k.prototype.Hb = function() { return this.ad ? 0 : Fa(this.Oa.k + this.k) };
    var a = [],
        f = [],
        r = [];
    k.prototype.Gj = function() {
        this.el();
        this.$a.pi(this.ba, this.ca, this.fa, this.ea, r);
        if (!r.length) return q();
        if (1 === r.length) { var a = q();
            xa(a, r[0]);
            V(r); return a }
        for (var b = !0; 1 < r.length;) {
            for (var a = r, d = void 0, g = void 0, l = void 0, k = void 0, p = void 0, d = 0, g =
                    a.length; d < g - 1; d += 2) { var l = a[d],
                    k = a[d + 1],
                    p = q(),
                    h = l,
                    m = k,
                    n = p,
                    aa = 0,
                    z = 0,
                    S = 0,
                    I = h.length,
                    J = m.length,
                    C = void 0,
                    H = void 0; for (n.length = I + J; aa < I && z < J; ++S) C = h[aa], H = m[z], C.Jc < H.Jc ? (n[S] = C, ++aa) : (n[S] = H, ++z); for (; aa < I; ++aa, ++S) n[S] = h[aa]; for (; z < J; ++z, ++S) n[S] = m[z];
                b || (t(l), t(k));
                f.push(p) }
            1 === g % 2 && (b ? (l = q(), xa(l, a[g - 1]), f.push(l)) : f.push(a[g - 1]));
            xa(a, f);
            V(f);
            b = !1
        }
        a = r[0];
        V(r);
        return a
    };
    k.prototype.Tb = function(a) {
        this.Tc = this.Ch || 1 !== this.opacity || 0 !== this.bb;
        var b = this.b.canvas,
            f = a,
            g = !1;
        this.Tc && (this.b.Vh || (this.b.Vh =
            document.createElement("canvas"), b = this.b.Vh, b.width = this.b.F, b.height = this.b.D, this.b.Hm = b.getContext("2d"), g = !0), b = this.b.Vh, f = this.b.Hm, b.width !== this.b.F && (b.width = this.b.F, g = !0), b.height !== this.b.D && (b.height = this.b.D, g = !0), g && this.b.vi(f, this.b.wa), this.Hc && f.clearRect(0, 0, this.b.F, this.b.D));
        f.globalAlpha = 1;
        f.globalCompositeOperation = "source-over";
        this.Hc || (f.fillStyle = "rgb(" + this.tc[0] + "," + this.tc[1] + "," + this.tc[2] + ")", f.fillRect(0, 0, this.b.F, this.b.D));
        f.save();
        this.ad = !0;
        var g = this.rb(0,
                0, !0, !0),
            d = this.rb(0, 0, !1, !0);
        this.ad = !1;
        this.b.Bc && (g = Math.round(g), d = Math.round(d));
        this.ri(g, d, f);
        var l = this.zb();
        f.scale(l, l);
        f.translate(-g, -d);
        this.$b ? (this.Va.left = this.$a.wb(this.ba), this.Va.top = this.$a.xb(this.ca), this.Va.right = this.$a.wb(this.fa), this.Va.bottom = this.$a.xb(this.ea), this.Fc || !this.Va.Wf(this.pf) ? (t(this.hd), g = this.Gj(), this.Fc = !1, this.pf.Sf(this.Va)) : g = this.hd) : g = this.d;
        for (var p, h = null, d = 0, l = g.length; d < l; ++d) p = g[d], p !== h && (this.Vp(p, f), h = p);
        this.$b && (this.hd = g);
        f.restore();
        this.Tc && (a.globalCompositeOperation = this.Rf, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
    };
    k.prototype.Vp = function(a, b) { if (a.visible && 0 !== a.width && 0 !== a.height) { a.S(); var f = a.Y;
            f.right < this.ba || f.bottom < this.ca || f.left > this.fa || f.top > this.ea || (b.globalCompositeOperation = a.Rf, a.Tb(b)) } };
    k.prototype.Li = function() { this.ad = !0; var a = this.rb(0, 0, !0, !0),
            b = this.rb(0, 0, !1, !0);
        this.ad = !1;
        this.b.Bc && (a = Math.round(a), b = Math.round(b));
        this.ri(a, b, null) };
    k.prototype.ri = function(a, b, f) {
        var g = this.zb();
        this.ba =
            a;
        this.ca = b;
        this.fa = a + 1 / g * this.b.F;
        this.ea = b + 1 / g * this.b.D;
        this.ba > this.fa && (a = this.ba, this.ba = this.fa, this.fa = a);
        this.ca > this.ea && (a = this.ca, this.ca = this.ea, this.ea = a);
        a = this.Hb();
        0 !== a && (f && (f.translate(this.b.F / 2, this.b.D / 2), f.rotate(-a), f.translate(this.b.F / -2, this.b.D / -2)), this.pd.set(this.ba, this.ca, this.fa, this.ea), this.pd.offset((this.ba + this.fa) / -2, (this.ca + this.ea) / -2), this.Zn.Mn(this.pd, a), this.Zn.Hl(this.pd), this.pd.offset((this.ba + this.fa) / 2, (this.ca + this.ea) / 2), this.ba = this.pd.left, this.ca =
            this.pd.top, this.fa = this.pd.right, this.ea = this.pd.bottom)
    };
    k.prototype.oe = function(a) {
        if (this.Tc = this.Ch) { this.b.Na || (this.b.Na = a.Sb(this.b.F, this.b.D, this.b.wa)); if (this.b.Na.me !== this.b.F || this.b.Na.le !== this.b.D) a.deleteTexture(this.b.Na), this.b.Na = a.Sb(this.b.F, this.b.D, this.b.wa);
            a.mc(this.b.Na) }
        this.ad = !0;
        var b = this.rb(0, 0, !0, !0),
            f = this.rb(0, 0, !1, !0);
        this.ad = !1;
        this.b.Bc && (b = Math.round(b), f = Math.round(f));
        this.ri(b, f, null);
        b = this.zb();
        a.lc();
        a.scale(b, b);
        a.si(-this.Hb());
        a.translate((this.ba +
            this.fa) / -2, (this.ca + this.ea) / -2);
        a.Zb();
        this.$b ? (this.Va.left = this.$a.wb(this.ba), this.Va.top = this.$a.xb(this.ca), this.Va.right = this.$a.wb(this.fa), this.Va.bottom = this.$a.xb(this.ea), this.Fc || !this.Va.Wf(this.pf) ? (t(this.hd), b = this.Gj(), this.Fc = !1, this.pf.Sf(this.Va)) : b = this.hd) : b = this.d;
        for (var g, d = null, f = b.length - 1; 0 <= f; --f) g = b[f], g !== d && (this.Xp(b[f], a), d = g);
        this.$b && (this.hd = b);
        this.Hc || (this.hj = this.b.qe++, a.wi(this.hj), a.En(1, 1, 1), a.$l(), a.us())
    };
    k.prototype.jb = function(a) {
        var b = 0,
            f = 0;
        if (this.Tc =
            this.Ch || 1 !== this.opacity || 0 < this.U.length || 0 !== this.bb) { this.b.Na || (this.b.Na = a.Sb(this.b.F, this.b.D, this.b.wa)); if (this.b.Na.me !== this.b.F || this.b.Na.le !== this.b.D) a.deleteTexture(this.b.Na), this.b.Na = a.Sb(this.b.F, this.b.D, this.b.wa);
            a.mc(this.b.Na);
            this.Hc && a.clear(0, 0, 0, 0) }
        this.Hc || (this.b.la ? (a.wi(this.hj), a.En(this.tc[0] / 255, this.tc[1] / 255, this.tc[2] / 255), a.$l(), a.Ds()) : a.clear(this.tc[0] / 255, this.tc[1] / 255, this.tc[2] / 255, 1));
        this.ad = !0;
        var g = this.rb(0, 0, !0, !0),
            b = this.rb(0, 0, !1, !0);
        this.ad = !1;
        this.b.Bc && (g = Math.round(g), b = Math.round(b));
        this.ri(g, b, null);
        g = this.zb();
        a.lc();
        a.scale(g, g);
        a.si(-this.Hb());
        a.translate((this.ba + this.fa) / -2, (this.ca + this.ea) / -2);
        a.Zb();
        this.$b ? (this.Va.left = this.$a.wb(this.ba), this.Va.top = this.$a.xb(this.ca), this.Va.right = this.$a.wb(this.fa), this.Va.bottom = this.$a.xb(this.ea), this.Fc || !this.Va.Wf(this.pf) ? (t(this.hd), b = this.Gj(), this.Fc = !1, this.pf.Sf(this.Va)) : b = this.hd) : b = this.d;
        var d, l, p = null,
            f = 0;
        for (d = b.length; f < d; ++f) l = b[f], l !== p && (this.Wp(b[f], a), p =
            l);
        this.$b && (this.hd = b);
        this.Tc && (b = this.U.length ? this.U[0].Ia : 0, f = this.U.length ? this.U[0].index : 0, 0 === this.U.length || 1 === this.U.length && !a.xk(b) && 1 === this.opacity ? (1 === this.U.length ? (a.Eb(b), a.Bf(this.Oa.bg(), 1 / this.b.F, 1 / this.b.D, 0, 0, 1, 1, g, this.Hb(), this.ba, this.ca, (this.ba + this.fa) / 2, (this.ca + this.ea) / 2, this.b.Jb.qa, this.za[f]), a.ni(b) && (this.b.Z = !0)) : a.Eb(0), a.mc(this.Oa.bg()), a.Je(this.opacity), a.Mb(this.b.Na), a.ee(this.nb, this.ib), a.lc(), a.Zb(), g = this.b.F / 2, b = this.b.D / 2, a.Kg(-g, b, g, b, g, -b, -g, -b), a.Mb(null)) : this.Oa.Ck(a, this, null, this.Oa.bg()))
    };
    k.prototype.Wp = function(a, b) { if (a.visible && 0 !== a.width && 0 !== a.height) { a.S(); var f = a.Y;
            f.right < this.ba || f.bottom < this.ca || f.left > this.fa || f.top > this.ea || (b.wi(a.qe), a.mo ? this.Yp(a, b) : (b.Eb(0), b.ee(a.nb, a.ib), a.jb(b))) } };
    k.prototype.Xp = function(a, b) { if (a.visible && 0 !== a.width && 0 !== a.height) { a.S(); var f = a.Y;
            f.right < this.ba || f.bottom < this.ca || f.left > this.fa || f.top > this.ea || (a.qe = this.b.qe++, 0 === a.bb && 1 === a.opacity && a.md && a.oe && (b.wi(a.qe), a.oe(b))) } };
    k.prototype.Yp = function(a, b) {
        var f = a.U[0].Ia,
            g = a.U[0].index,
            d = this.zb();
        if (1 !== a.U.length || b.xk(f) || b.ks(f) || (a.k || a.j.Hb()) && b.Hg(f) || 1 !== a.opacity || a.type.ja.en) this.Oa.Ck(b, this, a, this.Tc ? this.b.Na : this.Oa.bg()), b.lc(), b.scale(d, d), b.si(-this.Hb()), b.translate((this.ba + this.fa) / -2, (this.ca + this.ea) / -2), b.Zb();
        else {
            b.Eb(f);
            b.ee(a.nb, a.ib);
            b.ni(f) && (this.b.Z = !0);
            var l = 0,
                p = 0,
                h = 0,
                m = 0;
            b.Hg(f) && (m = a.Y, l = this.P(m.left, m.top, !0, !0), p = this.P(m.left, m.top, !1, !0), h = this.P(m.right, m.bottom, !0, !0), m = this.P(m.right,
                m.bottom, !1, !0), l = l / windowWidth, p = 1 - p / windowHeight, h = h / windowWidth, m = 1 - m / windowHeight);
            var k;
            a.Ua && a.Ua.Q ? (k = a.Ua.Q, f = 1 / k.width, k = 1 / k.height) : (f = 1 / a.width, k = 1 / a.height);
            b.Bf(this.Tc ? this.b.Na : this.Oa.bg(), f, k, l, p, h, m, d, this.Hb(), this.ba, this.ca, (this.ba + this.fa) / 2, (this.ca + this.ea) / 2, this.b.Jb.qa, a.za[g]);
            a.jb(b)
        }
    };
    k.prototype.rb = function(a, b, f, g) {
        var d = this.b.devicePixelRatio;
        this.b.Ae && (a *= d, b *= d);
        var d = this.b.qn,
            l = this.b.rn,
            d = (this.Oa.scrollX - d) * this.ic + d,
            l = (this.Oa.scrollY - l) * this.jc + l,
            p = d,
            h =
            l,
            m = 1 / this.zb(!g);
        g ? (p -= this.b.F * m / 2, h -= this.b.D * m / 2) : (p -= this.b.width * m / 2, h -= this.b.height * m / 2);
        p += a * m;
        h += b * m;
        b = this.Hb();
        0 !== b && (p -= d, h -= l, a = Math.cos(b), b = Math.sin(b), g = p * a - h * b, h = h * a + p * b, p = g + d, h += l);
        return f ? p : h
    };
    k.prototype.P = function(a, b, f, g) {
        var d = this.b.qn,
            l = this.b.rn,
            p = (this.Oa.scrollX - d) * this.ic + d,
            h = (this.Oa.scrollY - l) * this.jc + l,
            l = p,
            d = h,
            m = this.Hb();
        if (0 !== m) { a -= p;
            b -= h; var k = Math.cos(-m),
                m = Math.sin(-m),
                r = a * k - b * m;
            b = b * k + a * m;
            a = r + p;
            b += h }
        p = 1 / this.zb(!g);
        g ? (l -= this.b.F * p / 2, d -= this.b.D * p / 2) : (l -= this.b.width *
            p / 2, d -= this.b.height * p / 2);
        l = (a - l) / p;
        d = (b - d) / p;
        a = this.b.devicePixelRatio;
        this.b.Ae && !g && (l /= a, d /= a);
        return f ? l : d
    };
    k.prototype.mb = function() { var a, b, f, g = { s: this.scale, a: this.k, vl: this.ba, vt: this.ca, vr: this.fa, vb: this.ea, v: this.visible, bc: this.tc, t: this.Hc, px: this.ic, py: this.jc, o: this.opacity, zr: this.Kc, fx: [], cg: this.Uf, instances: [] };
        a = 0; for (b = this.I.length; a < b; a++) f = this.I[a], g.fx.push({ name: f.name, active: f.Qb, params: this.za[f.index] }); return g };
    k.prototype.Cb = function(a) {
        var b, f, g;
        this.scale = a.s;
        this.k =
            a.a;
        this.ba = a.vl;
        this.ca = a.vt;
        this.fa = a.vr;
        this.ea = a.vb;
        this.visible = a.v;
        this.tc = a.bc;
        this.Hc = a.t;
        this.ic = a.px;
        this.jc = a.py;
        this.opacity = a.o;
        this.Kc = a.zr;
        this.Uf = a.cg || [];
        xa(this.Wb, this.Tn);
        var d = new da;
        b = 0;
        for (g = this.Uf.length; b < g; ++b) d.add(this.Uf[b]);
        f = b = 0;
        for (g = this.Wb.length; b < g; ++b) d.contains(this.Wb[b][2]) || (this.Wb[f] = this.Wb[b], ++f);
        wa(this.Wb, f);
        f = a.fx;
        b = 0;
        for (g = f.length; b < g; b++)
            if (a = this.Bj(f[b].name)) a.Qb = f[b].active, this.za[a.index] = f[b].params;
        this.Ic();
        this.d.sort(n);
        this.Re = !0
    };
    Kb =
        k
})();
(function() {
    function d(a, b) { var c, e = a.length; switch (e) {
            case 0:
                return !0;
            case 1:
                return a[0] === b[0];
            case 2:
                return a[0] === b[0] && a[1] === b[1];
            default:
                for (c = 0; c < e; c++)
                    if (a[c] !== b[c]) return !1;
                return !0 } }

    function n(a, b) { return a.index - b.index }

    function k(a) { var b, c, e, f;
        2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(n);
        a.length >= v.length && (v.length = a.length + 1);
        v[a.length] || (v[a.length] = []);
        f = v[a.length];
        b = 0; for (c = f.length; b < c; b++)
            if (e = f[b], d(a, e)) return e;
        f.push(a); return a }

    function q(a,
        b) { this.b = a;
        this.bo = {};
        this.Vl = {};
        this.Mj = !1;
        this.nm = new da;
        this.mj = [];
        this.Vi = [];
        this.name = b[0]; var c = b[1];
        this.Hd = []; var e, f;
        e = 0; for (f = c.length; e < f; e++) this.pm(c[e], null, this.Hd) }

    function t(a) { this.type = a;
        this.d = [];
        this.O = [];
        this.ia = !0 }

    function l(a, b, c) {
        this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.da = [];
        this.fe = [];
        this.lm = this.Gi = this.Xk = this.Kh = this.group = this.Pk = !1;
        this.Ka = [];
        this.qc = [];
        this.nc = [];
        this.gg = "";
        this.fg = this.Kh = this.group = !1;
        this.qh = null;
        c[1] && (this.gg = c[1][1].toLowerCase(), this.group = !0, this.Kh = !!c[1][0], this.qh = [], this.fg = this.Kh, this.b.xd.push(this), this.b.Ih[this.gg] = this);
        this.gc = c[2];
        this.R = c[4];
        this.group || (this.b.Gl[this.R.toString()] = this);
        var e = c[5];
        a = 0;
        for (b = e.length; a < b; a++) { var f = new Lb(this, e[a]);
            f.index = a;
            this.Ka.push(f);
            this.yl(f.type) }
        e = c[6];
        a = 0;
        for (b = e.length; a < b; a++) f = new Mb(this, e[a]), f.index = a, this.qc.push(f);
        if (8 === c.length)
            for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.pm(c[a], this, this.nc);
        this.Ph = !1;
        this.Ka.length && (this.Ph = null == this.Ka[0].type && this.Ka[0].Xa ==
            Z.prototype.n.Co)
    }

    function b(a, b) { var c, e, f; if (a && (-1 === b.indexOf(a) && b.push(a), a.Ib))
            for (c = 0, e = a.Gb.length; c < e; c++) f = a.Gb[c], a !== f && -1 === b.indexOf(f) && b.push(f) }

    function a(a, b) {
        this.Rb = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.N = [];
        this.Ba = [];
        this.J = {};
        this.index = -1;
        this.Lf = !1;
        this.Xa = this.b.td(b[1]);
        this.trigger = 0 < b[3];
        this.Ul = 2 === b[3];
        this.Sj = b[5];
        this.Ir = b[6];
        this.R = b[7];
        this.b.Cd[this.R.toString()] = this; - 1 === b[0] ? (this.type = null, this.Ha = this.Gk, this.ke = null, this.uc = -1) : (this.type = this.b.q[b[0]], this.Ha =
            this.Ir ? this.zs : this.Fk, b[2] ? (this.ke = this.type.Fh(b[2]), this.uc = this.type.yj(b[2])) : (this.ke = null, this.uc = -1), this.Rb.parent && this.Rb.parent.xi());
        this.Ul && (this.Ha = this.As);
        if (10 === b.length) { var c, e, f = b[9];
            c = 0; for (e = f.length; c < e; c++) { var g = new Nb(this, f[c]);
                this.N.push(g) }
            this.Ba.length = f.length }
    }

    function f(a, b) {
        this.Rb = a;
        this.sheet = a.sheet;
        this.b = a.b;
        this.N = [];
        this.Ba = [];
        this.J = {};
        this.index = -1;
        this.Lf = !1;
        this.Xa = this.b.td(b[1]); - 1 === b[0] ? (this.type = null, this.Ha = this.Gk, this.ke = null, this.uc = -1) :
            (this.type = this.b.q[b[0]], this.Ha = this.Fk, b[2] ? (this.ke = this.type.Fh(b[2]), this.uc = this.type.yj(b[2])) : (this.ke = null, this.uc = -1));
        this.R = b[3];
        this.b.vd[this.R.toString()] = this;
        if (6 === b.length) { var c, e, f = b[5];
            c = 0; for (e = f.length; c < e; c++) { var g = new Nb(this, f[c]);
                this.N.push(g) }
            this.Ba.length = f.length }
    }

    function r() { p++;
        B.length === p && B.push(new Ob); return B[p] }

    function c(a, b) {
        this.hc = a;
        this.Rb = a.Rb;
        this.sheet = a.sheet;
        this.b = a.b;
        this.type = b[0];
        this.Nc = null;
        this.nd = 0;
        this.get = null;
        this.Ll = 0;
        this.Oa = null;
        this.key = 0;
        this.object = null;
        this.index = 0;
        this.Zg = this.Me = this.Zg = this.Me = this.Yl = this.te = this.$g = null;
        this.pc = !1;
        var c, e, f;
        switch (b[0]) {
            case 0:
            case 7:
                this.Nc = new Pb(this, b[1]);
                this.nd = 0;
                this.get = this.er;
                break;
            case 1:
                this.Nc = new Pb(this, b[1]);
                this.nd = 0;
                this.get = this.fr;
                break;
            case 5:
                this.Nc = new Pb(this, b[1]);
                this.nd = 0;
                this.get = this.jr;
                break;
            case 3:
            case 8:
                this.Ll = b[1];
                this.get = this.cr;
                break;
            case 6:
                this.Oa = this.b.ek[b[1]];
                this.get = this.kr;
                break;
            case 9:
                this.key = b[1];
                this.get = this.ir;
                break;
            case 4:
                this.object =
                    this.b.q[b[1]];
                this.get = this.lr;
                this.Rb.yl(this.object);
                this.hc instanceof Mb ? this.Rb.xi() : this.Rb.parent && this.Rb.parent.xi();
                break;
            case 10:
                this.index = b[1];
                a.type && a.type.H ? (this.get = this.gr, this.pc = !0) : this.get = this.hr;
                break;
            case 11:
                this.$g = b[1];
                this.te = null;
                this.get = this.dr;
                break;
            case 2:
            case 12:
                this.Yl = b[1];
                this.get = this.br;
                break;
            case 13:
                for (this.get = this.mr, this.Me = [], this.Zg = [], c = 1, e = b.length; c < e; c++) f = new Nb(this.hc, b[c]), this.Me.push(f), this.Zg.push(0)
        }
    }

    function e(a, b, c) {
        this.sheet = a;
        this.parent =
            b;
        this.b = a.b;
        this.da = [];
        this.name = c[1];
        this.Ni = c[2];
        this.Pj = c[3];
        this.pg = !!c[4];
        this.Oh = !!c[5];
        this.R = c[6];
        this.b.Jf[this.R.toString()] = this;
        this.data = this.Pj;
        this.parent ? (this.Ge = this.pg || this.Oh ? -1 : this.b.Gs++, this.b.jp.push(this)) : (this.Ge = -1, this.b.ip.push(this))
    }

    function u(a, b, c) { this.sheet = a;
        this.parent = b;
        this.b = a.b;
        this.da = [];
        this.ig = null;
        this.sr = c[1];
        this.Qb = !0 }

    function g() { this.Un = [];
        this.reset(null) }
    var v = [];
    q.prototype.toString = function() { return this.name };
    q.prototype.pm = function(a, b, c) {
        switch (a[0]) {
            case 0:
                a =
                    new Qb(this, b, a);
                if (a.gc)
                    for (c.push(a), c = 0, b = a.Ka.length; c < b; c++) a.Ka[c].trigger && this.qm(a, c);
                else a.Bm() ? this.qm(a, 0) : c.push(a);
                break;
            case 1:
                a = new Hb(this, b, a);
                c.push(a);
                break;
            case 2:
                a = new Rb(this, b, a), c.push(a)
        }
    };
    q.prototype.Fa = function() { var a, b;
        a = 0; for (b = this.Hd.length; a < b; a++) this.Hd[a].Fa(a < b - 1 && this.Hd[a + 1].Ph) };
    q.prototype.cl = function() { V(this.mj);
        V(this.Vi);
        this.xl(this);
        V(this.Vi) };
    q.prototype.xl = function(a) {
        var b, c, e, f, g = a.mj,
            d = a.Vi,
            l = this.nm.qd();
        b = 0;
        for (c = l.length; b < c; ++b) e = l[b], f = e.ig, !e.Qb || a === f || -1 < d.indexOf(f) || (d.push(f), f.xl(a), g.push(f))
    };
    q.prototype.Ha = function(a) { this.b.fu || (this.Mj = !0, a || (this.b.Xj = !0)); var b, c;
        b = 0; for (c = this.Hd.length; b < c; b++) { var e = this.Hd[b];
            e.Ha();
            this.b.gj(e.da);
            this.b.Jd && this.b.ab() }
        a || (this.b.Xj = !1) };
    q.prototype.qm = function(a, b) {
        a.gc || this.b.Ji.push(a);
        var c, e, f = a.Ka[b],
            g;
        f.type ? g = f.type.name : g = "system";
        var d = (c = f.Ul) ? this.Vl : this.bo;
        d[g] || (d[g] = []);
        g = d[g];
        d = f.Xa;
        if (c) {
            if (f.N.length && (f = f.N[0], 1 === f.type && 2 === f.Nc.type)) {
                f = f.Nc.value.toLowerCase();
                c = 0;
                for (e = g.length; c < e; c++)
                    if (g[c].method == d) { c = g[c].Yf;
                        c[f] ? c[f].push([a, b]) : c[f] = [
                            [a, b]
                        ]; return }
                c = {};
                c[f] = [
                    [a, b]
                ];
                g.push({ method: d, Yf: c })
            }
        } else { c = 0; for (e = g.length; c < e; c++)
                if (g[c].method == d) { g[c].Yf.push([a, b]); return }
            bc && d === bc.prototype.n.We ? g.unshift({ method: d, Yf: [
                    [a, b]
                ] }) : g.push({ method: d, Yf: [
                    [a, b]
                ] }) }
    };
    xb = q;
    t.prototype.Lj = function() { return this.ia ? this.type.d.length : this.d.length };
    t.prototype.Vb = function() { return this.ia ? this.type.d : this.d };
    t.prototype.Gg = function(a) {
        a && (a.b.Ya().hb.gc ? (this.ia &&
            (V(this.d), xa(this.O, a.type.d), this.ia = !1), a = this.O.indexOf(a), -1 !== a && (this.d.push(this.O[a]), this.O.splice(a, 1))) : (this.ia = !1, V(this.d), this.d[0] = a))
    };
    gb = t;
    window._c2hh_ = "28A2D03DEA61B51C5A7055F609133412A146F06D";
    l.prototype.Fa = function(a) {
        var b, c = this.parent;
        if (this.group)
            for (this.Gi = !0; c;) { if (!c.group) { this.Gi = !1; break }
                c = c.parent }
        this.Xk = !this.Bm() && (!this.parent || this.parent.group && this.parent.Gi);
        this.lm = !!a;
        this.fe = this.da.slice(0);
        for (c = this.parent; c;) {
            a = 0;
            for (b = c.da.length; a < b; a++) this.hp(c.da[a]);
            c = c.parent
        }
        this.da = k(this.da);
        this.fe = k(this.fe);
        a = 0;
        for (b = this.Ka.length; a < b; a++) this.Ka[a].Fa();
        a = 0;
        for (b = this.qc.length; a < b; a++) this.qc[a].Fa();
        a = 0;
        for (b = this.nc.length; a < b; a++) this.nc[a].Fa(a < b - 1 && this.nc[a + 1].Ph)
    };
    l.prototype.Hn = function(a) { if (this.fg !== !!a) { this.fg = !!a; var b;
            a = 0; for (b = this.qh.length; a < b; ++a) this.qh[a].io();
            0 < b && this.b.aa.re && this.b.aa.re.cl() } };
    l.prototype.yl = function(a) { b(a, this.da) };
    l.prototype.hp = function(a) { b(a, this.fe) };
    l.prototype.xi = function() {
        this.Pk = !0;
        this.parent &&
            this.parent.xi()
    };
    l.prototype.Bm = function() { return this.Ka.length ? this.Ka[0].trigger : !1 };
    l.prototype.Ha = function() { var a, b, c = !1,
            e = this.b,
            f = this.b.Ya();
        f.hb = this; var g = this.Ka;
        this.Ph || (f.oj = !1); if (this.gc) { 0 === g.length && (c = !0);
            f.Ja = 0; for (a = g.length; f.Ja < a; f.Ja++) b = g[f.Ja], b.trigger || (b = b.Ha()) && (c = !0);
            (f.Ce = c) && this.ti() } else { f.Ja = 0; for (a = g.length; f.Ja < a; f.Ja++)
                if (b = g[f.Ja].Ha(), !b) { f.Ce = !1;
                    this.Xk && e.Jd && e.ab(); return }
            f.Ce = !0;
            this.ti() }
        this.bq(f) };
    l.prototype.bq = function(a) {
        a.Ce && this.lm && (a.oj = !0);
        this.Xk && this.b.Jd && this.b.ab()
    };
    l.prototype.xs = function(a) { this.b.Ya().hb = this;
        this.Ka[a].Ha() && (this.ti(), this.b.Ya().Ce = !0) };
    l.prototype.ti = function() { var a = this.b.Ya(),
            b;
        a.ac = 0; for (b = this.qc.length; a.ac < b; a.ac++)
            if (this.qc[a.ac].Ha()) return;
        this.Bn() };
    l.prototype.vs = function() { var a = this.b.Ya(),
            b; for (b = this.qc.length; a.ac < b; a.ac++)
            if (this.qc[a.ac].Ha()) return;
        this.Bn() };
    l.prototype.Bn = function() {
        if (this.nc.length) {
            var a, b, c, e, f = this.nc.length - 1;
            this.b.oi(this);
            if (this.Pk)
                for (a = 0, b = this.nc.length; a <
                    b; a++) c = this.nc[a], (e = !this.Gi || !this.group && a < f) && this.b.yf(c.da), c.Ha(), e ? this.b.ld(c.da) : this.b.gj(c.da);
            else
                for (a = 0, b = this.nc.length; a < b; a++) this.nc[a].Ha();
            this.b.li()
        }
    };
    l.prototype.ys = function() { var a = this.b.Ya();
        a.hb = this; var b = !1,
            c;
        a.Ja = 0; for (c = this.Ka.length; a.Ja < c; a.Ja++)
            if (this.Ka[a.Ja].Ha()) b = !0;
            else if (!this.gc) return !1; return this.gc ? b : !0 };
    l.prototype.Ng = function() {
        this.b.Zf++;
        var a = this.b.Ya().Ja,
            b = this.b.oi(this);
        if (!this.gc)
            for (b.Ja = a + 1, a = this.Ka.length; b.Ja < a; b.Ja++)
                if (!this.Ka[b.Ja].Ha()) {
                    this.b.li();
                    return
                }
        this.ti();
        this.b.li()
    };
    l.prototype.Er = function(a) { var b = a.index; if (0 === b) return !0; for (--b; 0 <= b; --b)
            if (this.Ka[b].type === a.type) return !1;
        return !0 };
    Qb = l;
    a.prototype.Fa = function() { var a, b, c;
        a = 0; for (b = this.N.length; a < b; a++) c = this.N[a], c.Fa(), c.pc && (this.Lf = !0) };
    a.prototype.As = function() { return !0 };
    a.prototype.Gk = function() { var a, b;
        a = 0; for (b = this.N.length; a < b; a++) this.Ba[a] = this.N[a].get(); return Na(this.Xa.apply(this.b.Vc, this.Ba), this.Sj) };
    a.prototype.zs = function() {
        var a, b;
        a = 0;
        for (b = this.N.length; a <
            b; a++) this.Ba[a] = this.N[a].get();
        a = this.Xa.apply(this.ke ? this.ke : this.type, this.Ba);
        this.type.sc();
        return a
    };
    a.prototype.Fk = function() {
        var a, b, c, e, f, g, d, l, p = this.type,
            k = p.V(),
            r = this.Rb.gc && !this.trigger;
        b = 0;
        var n = p.Ib,
            q = p.H,
            t = p.cd,
            v = this.uc,
            u = -1 < v,
            B = this.Lf,
            A = this.N,
            E = this.Ba,
            M = this.Sj,
            T = this.Xa,
            F;
        if (B)
            for (b = 0, f = A.length; b < f; ++b) g = A[b], g.pc || (E[b] = g.get(0));
        else
            for (b = 0, f = A.length; b < f; ++b) E[b] = A[b].get(0);
        if (k.ia) {
            V(k.d);
            V(k.O);
            F = p.d;
            a = 0;
            for (e = F.length; a < e; ++a) {
                l = F[a];
                if (B)
                    for (b = 0, f = A.length; b < f; ++b) g =
                        A[b], g.pc && (E[b] = g.get(a));
                u ? (b = 0, q && (b = l.type.df[t]), b = T.apply(l.G[v + b], E)) : b = T.apply(l, E);
                (d = Na(b, M)) ? k.d.push(l): r && k.O.push(l)
            }
            p.finish && p.finish(!0);
            k.ia = !1;
            p.sc();
            return k.Lj()
        }
        c = 0;
        F = (d = r && !this.Rb.Er(this)) ? k.O : k.d;
        var D = !1;
        a = 0;
        for (e = F.length; a < e; ++a) {
            l = F[a];
            if (B)
                for (b = 0, f = A.length; b < f; ++b) g = A[b], g.pc && (E[b] = g.get(a));
            u ? (b = 0, q && (b = l.type.df[t]), b = T.apply(l.G[v + b], E)) : b = T.apply(l, E);
            if (Na(b, M))
                if (D = !0, d) { if (k.d.push(l), n)
                        for (b = 0, f = l.siblings.length; b < f; b++) g = l.siblings[b], g.type.V().d.push(g) } else {
                    F[c] =
                        l;
                    if (n)
                        for (b = 0, f = l.siblings.length; b < f; b++) g = l.siblings[b], g.type.V().d[c] = g;
                    c++
                }
            else if (d) { F[c] = l; if (n)
                    for (b = 0, f = l.siblings.length; b < f; b++) g = l.siblings[b], g.type.V().O[c] = g;
                c++ } else if (r && (k.O.push(l), n))
                for (b = 0, f = l.siblings.length; b < f; b++) g = l.siblings[b], g.type.V().O.push(g)
        }
        wa(F, c);
        if (n)
            for (q = p.Gb, a = 0, e = q.length; a < e; a++) l = q[a].V(), d ? wa(l.O, c) : wa(l.d, c);
        c = D;
        if (d && !D)
            for (a = 0, e = k.d.length; a < e; a++) {
                l = k.d[a];
                if (B)
                    for (b = 0, f = A.length; b < f; b++) g = A[b], g.pc && (E[b] = g.get(a));
                b = u ? T.apply(l.G[v], E) : T.apply(l,
                    E);
                if (Na(b, M)) { D = !0; break }
            }
        p.finish && p.finish(c || r);
        return r ? D : k.Lj()
    };
    Lb = a;
    f.prototype.Fa = function() { var a, b, c;
        a = 0; for (b = this.N.length; a < b; a++) c = this.N[a], c.Fa(), c.pc && (this.Lf = !0) };
    f.prototype.Gk = function() { var a = this.b,
            b, c, e = this.N,
            f = this.Ba;
        b = 0; for (c = e.length; b < c; ++b) f[b] = e[b].get(); return this.Xa.apply(a.Vc, f) };
    f.prototype.Fk = function() {
        var a = this.type,
            b = this.uc,
            c = a.cd,
            e = this.Lf,
            f = this.N,
            g = this.Ba,
            d = this.Xa,
            l = a.V().Vb(),
            a = a.H,
            p = -1 < b,
            k, r, n, q, t, v;
        if (e)
            for (r = 0, q = f.length; r < q; ++r) t = f[r], t.pc || (g[r] =
                t.get(0));
        else
            for (r = 0, q = f.length; r < q; ++r) g[r] = f[r].get(0);
        k = 0;
        for (n = l.length; k < n; ++k) { v = l[k]; if (e)
                for (r = 0, q = f.length; r < q; ++r) t = f[r], t.pc && (g[r] = t.get(k));
            p ? (r = 0, a && (r = v.type.df[c]), d.apply(v.G[b + r], g)) : d.apply(v, g) }
        return !1
    };
    Mb = f;
    var B = [],
        p = -1;
    c.prototype.Fa = function() { var a, b; if (11 === this.type) this.te = this.b.fm(this.$g, this.Rb.parent);
        else if (13 === this.type)
            for (a = 0, b = this.Me.length; a < b; a++) this.Me[a].Fa();
        this.Nc && this.Nc.Fa() };
    c.prototype.Mr = function(a) { this.pc || !a || a.ja.Ai || (this.pc = !0) };
    c.prototype.Jn =
        function() { this.pc = !0 };
    c.prototype.er = function(a) { this.nd = a || 0;
        a = r();
        this.Nc.get(a);
        p--; return a.data };
    c.prototype.fr = function(a) { this.nd = a || 0;
        a = r();
        this.Nc.get(a);
        p--; return G(a.data) ? a.data : "" };
    c.prototype.lr = function() { return this.object };
    c.prototype.cr = function() { return this.Ll };
    c.prototype.jr = function(a) { this.nd = a || 0;
        a = r();
        this.Nc.get(a);
        p--; return a.Sa() ? this.b.ag(a.data) : this.b.Fj(a.data) };
    c.prototype.kr = function() { return this.Oa };
    c.prototype.ir = function() { return this.key };
    c.prototype.hr = function() { return this.index };
    c.prototype.gr = function(a) { a = a || 0; var b = this.hc.type,
            c = null,
            c = b.V(),
            e = c.Vb(); if (e.length) c = e[a % e.length].type;
        else if (c.O.length) c = c.O[a % c.O.length].type;
        else if (b.d.length) c = b.d[a % b.d.length].type;
        else return 0; return this.index + c.yh[b.cd] };
    c.prototype.dr = function() { return this.te };
    c.prototype.br = function() { return this.Yl };
    c.prototype.mr = function() { var a, b;
        a = 0; for (b = this.Me.length; a < b; a++) this.Zg[a] = this.Me[a].get(); return this.Zg };
    Nb = c;
    e.prototype.Fa = function() { this.da = k(this.da) };
    e.prototype.Le =
        function(a) { var b = this.b.em();
            this.parent && !this.pg && b ? (this.Ge >= b.length && (b.length = this.Ge + 1), b[this.Ge] = a) : this.data = a };
    e.prototype.dg = function() { var a = this.b.em(); return !this.parent || this.pg || !a || this.Oh ? this.data : this.Ge >= a.length || "undefined" === typeof a[this.Ge] ? this.Pj : a[this.Ge] };
    e.prototype.Ha = function() {!this.parent || this.pg || this.Oh || this.Le(this.Pj) };
    Hb = e;
    u.prototype.toString = function() { return "include:" + this.ig.toString() };
    u.prototype.Fa = function() {
        this.ig = this.b.qj[this.sr];
        this.sheet.nm.add(this);
        this.da = k(this.da);
        for (var a = this.parent; a;) a.group && a.qh.push(this), a = a.parent;
        this.io()
    };
    u.prototype.Ha = function() { this.parent && this.b.Jg(this.b.q);
        this.ig.Mj || this.ig.Ha(!0);
        this.parent && this.b.ld(this.b.q) };
    u.prototype.io = function() { for (var a = this.parent; a;) { if (a.group && !a.fg) { this.Qb = !1; return }
            a = a.parent }
        this.Qb = !0 };
    Rb = u;
    g.prototype.reset = function(a) { this.hb = a;
        this.ac = this.Ja = 0;
        V(this.Un);
        this.oj = this.Ce = !1 };
    g.prototype.Fr = function() {
        return this.hb.Pk ? !0 : this.Ja < this.hb.Ka.length - 1 ? !!this.hb.da.length :
            !1
    };
    Gb = g
})();
(function() {
    function d(b, a) {
        this.hc = b;
        this.b = b.b;
        this.type = a[0];
        this.get = [this.uq, this.qq, this.Dq, this.Gq, this.fq, this.Eq, this.yq, this.nq, this.xq, this.Cq, this.gq, this.Bq, this.oq, this.zq, this.vq, this.wq, this.rq, this.sq, this.mq, this.Fq, this.Aq, this.tq, this.lq, this.pq][this.type];
        var f = null;
        this.jd = this.N = this.Ba = this.Xa = this.Fi = this.second = this.first = this.value = null;
        this.uc = -1;
        this.wc = null;
        this.no = -1;
        this.te = this.$g = null;
        this.Af = !1;
        switch (this.type) {
            case 0:
            case 1:
            case 2:
                this.value = a[1];
                break;
            case 3:
                this.first =
                    new Pb(b, a[1]);
                break;
            case 18:
                this.first = new Pb(b, a[1]);
                this.second = new Pb(b, a[2]);
                this.Fi = new Pb(b, a[3]);
                break;
            case 19:
                this.Xa = this.b.td(a[1]);
                this.Xa !== Z.prototype.ta.random && this.Xa !== Z.prototype.ta.wp || this.hc.Jn();
                this.Ba = [];
                this.N = [];
                3 === a.length ? (f = a[2], this.Ba.length = f.length + 1) : this.Ba.length = 1;
                break;
            case 20:
                this.jd = this.b.q[a[1]];
                this.uc = -1;
                this.Xa = this.b.td(a[2]);
                this.Af = a[3];
                cc && this.Xa === cc.prototype.ta.uo && this.hc.Jn();
                a[4] ? this.wc = new Pb(b, a[4]) : this.wc = null;
                this.Ba = [];
                this.N = [];
                6 ===
                    a.length ? (f = a[5], this.Ba.length = f.length + 1) : this.Ba.length = 1;
                break;
            case 21:
                this.jd = this.b.q[a[1]];
                this.Af = a[2];
                a[3] ? this.wc = new Pb(b, a[3]) : this.wc = null;
                this.no = a[4];
                break;
            case 22:
                this.jd = this.b.q[a[1]];
                this.jd.Fh(a[2]);
                this.uc = this.jd.yj(a[2]);
                this.Xa = this.b.td(a[3]);
                this.Af = a[4];
                a[5] ? this.wc = new Pb(b, a[5]) : this.wc = null;
                this.Ba = [];
                this.N = [];
                7 === a.length ? (f = a[6], this.Ba.length = f.length + 1) : this.Ba.length = 1;
                break;
            case 23:
                this.$g = a[1], this.te = null
        }
        this.hc.Mr(this.jd);
        4 <= this.type && 17 >= this.type && (this.first =
            new Pb(b, a[1]), this.second = new Pb(b, a[2]));
        if (f) { var d, c;
            d = 0; for (c = f.length; d < c; d++) this.N.push(new Pb(b, f[d])) }
    }

    function n() {++l;
        t.length === l && t.push(new Ob); return t[l] }

    function k(b, a, f) { var d, c;
        d = 0; for (c = b.length; d < c; ++d) b[d].get(f), a[d + 1] = f.data }

    function q(b, a) { this.type = b || Y.Ue;
        this.data = a || 0;
        this.Ie = null;
        this.type == Y.Ue && (this.data = Math.floor(this.data)) }
    d.prototype.Fa = function() {
        23 === this.type && (this.te = this.hc.b.fm(this.$g, this.hc.Rb.parent));
        this.first && this.first.Fa();
        this.second && this.second.Fa();
        this.Fi && this.Fi.Fa();
        this.wc && this.wc.Fa();
        if (this.N) { var b, a;
            b = 0; for (a = this.N.length; b < a; b++) this.N[b].Fa() }
    };
    var t = [],
        l = -1;
    d.prototype.Fq = function(b) { var a = this.N,
            f = this.Ba;
        f[0] = b;
        b = n();
        k(a, f, b);--l;
        this.Xa.apply(this.b.Vc, f) };
    d.prototype.Aq = function(b) {
        var a = this.jd,
            f = this.Ba,
            d = this.N,
            c = this.wc,
            e = this.Xa,
            q = this.hc.nd,
            g = a.V(),
            t = g.Vb();
        if (!t.length)
            if (g.O.length) t = g.O;
            else { this.Af ? b.Nb("") : b.na(0); return }
        f[0] = b;
        b.Ie = a;
        b = n();
        k(d, f, b);
        c && (c.get(b), b.Sa() && (q = b.data, t = a.d));
        --l;
        a = t.length;
        if (q >= a ||
            q <= -a) q %= a;
        0 > q && (q += a);
        e.apply(t[q], f)
    };
    d.prototype.lq = function(b) { var a = this.jd,
            f = this.Ba,
            d = this.N,
            c = this.wc,
            e = this.uc,
            q = this.Xa,
            g = this.hc.nd,
            t = a.V(),
            B = t.Vb(); if (!B.length)
            if (t.O.length) B = t.O;
            else { this.Af ? b.Nb("") : b.na(0); return }
        f[0] = b;
        b.Ie = a;
        b = n();
        k(d, f, b);
        c && (c.get(b), b.Sa() && (g = b.data, B = a.d));--l;
        d = B.length; if (g >= d || g <= -d) g %= d;
        0 > g && (g += d);
        g = B[g];
        B = 0;
        a.H && (B = g.type.df[a.cd]);
        q.apply(g.G[e + B], f) };
    d.prototype.tq = function(b) {
        var a = this.wc,
            f = this.jd,
            d = this.no,
            c = this.hc.nd,
            e = f.V(),
            k = e.Vb();
        if (!k.length)
            if (e.O.length) k =
                e.O;
            else { this.Af ? b.Nb("") : b.na(0); return }
        if (a) { e = n();
            a.get(e); if (e.Sa()) { c = e.data;
                k = f.d;
                0 !== k.length && (c %= k.length, 0 > c && (c += k.length));
                c = f.Ej(c);
                f = c.Ma[d];
                G(f) ? b.Nb(f) : b.C(f);--l; return }--l }
        a = k.length;
        if (c >= a || c <= -a) c %= a;
        0 > c && (c += a);
        c = k[c];
        k = 0;
        f.H && (k = c.type.yh[f.cd]);
        f = c.Ma[d + k];
        G(f) ? b.Nb(f) : b.C(f)
    };
    d.prototype.uq = function(b) { b.type = Y.Ue;
        b.data = this.value };
    d.prototype.qq = function(b) { b.type = Y.Te;
        b.data = this.value };
    d.prototype.Dq = function(b) { b.type = Y.String;
        b.data = this.value };
    d.prototype.Gq = function(b) {
        this.first.get(b);
        b.Sa() && (b.data = -b.data)
    };
    d.prototype.fq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.Sa() && a.Sa() && (b.data += a.data, a.jf() && b.sf());--l };
    d.prototype.Eq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.Sa() && a.Sa() && (b.data -= a.data, a.jf() && b.sf());--l };
    d.prototype.yq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.Sa() && a.Sa() && (b.data *= a.data, a.jf() && b.sf());--l };
    d.prototype.nq = function(b) {
        this.first.get(b);
        var a = n();
        this.second.get(a);
        b.Sa() && a.Sa() && (b.data /=
            a.data, b.sf());
        --l
    };
    d.prototype.xq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.Sa() && a.Sa() && (b.data %= a.data, a.jf() && b.sf());--l };
    d.prototype.Cq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.Sa() && a.Sa() && (b.data = Math.pow(b.data, a.data), a.jf() && b.sf());--l };
    d.prototype.gq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        a.lf() || b.lf() ? this.iq(b, a) : this.hq(b, a);--l };
    d.prototype.iq = function(b, a) { b.lf() && a.lf() ? this.kq(b, a) : this.jq(b, a) };
    d.prototype.kq = function(b,
        a) { b.data += a.data };
    d.prototype.jq = function(b, a) { b.lf() ? b.data += (Math.round(1E10 * a.data) / 1E10).toString() : b.Nb(b.data.toString() + a.data) };
    d.prototype.hq = function(b, a) { b.na(b.data && a.data ? 1 : 0) };
    d.prototype.Bq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.Sa() && a.Sa() && (b.data || a.data ? b.na(1) : b.na(0));--l };
    d.prototype.mq = function(b) { this.first.get(b);
        b.data ? this.second.get(b) : this.Fi.get(b) };
    d.prototype.oq = function(b) {
        this.first.get(b);
        var a = n();
        this.second.get(a);
        b.na(b.data === a.data ?
            1 : 0);
        --l
    };
    d.prototype.zq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.na(b.data !== a.data ? 1 : 0);--l };
    d.prototype.vq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.na(b.data < a.data ? 1 : 0);--l };
    d.prototype.wq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.na(b.data <= a.data ? 1 : 0);--l };
    d.prototype.rq = function(b) { this.first.get(b); var a = n();
        this.second.get(a);
        b.na(b.data > a.data ? 1 : 0);--l };
    d.prototype.sq = function(b) {
        this.first.get(b);
        var a = n();
        this.second.get(a);
        b.na(b.data >=
            a.data ? 1 : 0);
        --l
    };
    d.prototype.pq = function(b) { var a = this.te.dg();
        ha(a) ? b.C(a) : b.Nb(a) };
    Pb = d;
    q.prototype.jf = function() { return this.type === Y.Te };
    q.prototype.Sa = function() { return this.type === Y.Ue || this.type === Y.Te };
    q.prototype.lf = function() { return this.type === Y.String };
    q.prototype.sf = function() { this.jf() || (this.lf() && (this.data = parseFloat(this.data)), this.type = Y.Te) };
    q.prototype.na = function(b) { this.type = Y.Ue;
        this.data = Math.floor(b) };
    q.prototype.C = function(b) { this.type = Y.Te;
        this.data = b };
    q.prototype.Nb =
        function(b) { this.type = Y.String;
            this.data = b };
    q.prototype.Kn = function(b) { ha(b) ? (this.type = Y.Te, this.data = b) : G(b) ? (this.type = Y.String, this.data = b.toString()) : (this.type = Y.Ue, this.data = 0) };
    Ob = q;
    Y = { Ue: 0, Te: 1, String: 2 }
})();

function Z(d) { this.b = d;
    this.Pb = [] }
Z.prototype.mb = function() { var d = {},
        n, k, q, t, l, b, a, f;
    d.waits = []; var r = d.waits,
        c;
    n = 0; for (k = this.Pb.length; n < k; n++) { b = this.Pb[n];
        c = { t: b.time, st: b.Es, s: b.Pn, ev: b.Xf.R, sm: [], sols: {} };
        b.Xf.qc[b.ac] && (c.act = b.Xf.qc[b.ac].R);
        q = 0; for (t = b.da.length; q < t; q++) c.sm.push(b.da[q].R); for (l in b.Ob)
            if (b.Ob.hasOwnProperty(l)) { a = this.b.q[parseInt(l, 10)];
                f = { sa: b.Ob[l].Cn, insts: [] };
                q = 0; for (t = b.Ob[l].ye.length; q < t; q++) f.insts.push(b.Ob[l].ye[q].uid);
                c.sols[a.R.toString()] = f }
        r.push(c) } return d };
Z.prototype.Cb = function(d) {
    d = d.waits;
    var n, k, q, t, l, b, a, f, r, c, e;
    V(this.Pb);
    n = 0;
    for (k = d.length; n < k; n++)
        if (b = d[n], f = this.b.Gl[b.ev.toString()]) {
            r = -1;
            q = 0;
            for (t = f.qc.length; q < t; q++)
                if (f.qc[q].R === b.act) { r = q; break }
            if (-1 !== r) {
                a = { Ob: {}, da: [], Ql: !1 };
                a.time = b.t;
                a.Es = b.st || "";
                a.Pn = !!b.s;
                a.Xf = f;
                a.ac = r;
                q = 0;
                for (t = b.sm.length; q < t; q++)(f = this.b.Hh(b.sm[q])) && a.da.push(f);
                for (l in b.sols)
                    if (b.sols.hasOwnProperty(l) && (f = this.b.Hh(parseInt(l, 10)))) {
                        r = b.sols[l];
                        c = { Cn: r.sa, ye: [] };
                        q = 0;
                        for (t = r.insts.length; q < t; q++)(e = this.b.im(r.insts[q])) &&
                            c.ye.push(e);
                        a.Ob[f.index.toString()] = c
                    }
                this.Pb.push(a)
            }
        }
};
(function() {
    function d() {}

    function n() {}

    function k() {}
    var q = Z.prototype;
    d.prototype.Eo = function() { return !0 };
    d.prototype.ol = function() { return !0 };
    d.prototype.Qo = function() { return !0 };
    d.prototype.Fo = function(b, a, f) {
        var d = this.b.Ya(),
            c = d.hb,
            d = d.Fr();
        b = this.b.ns(b);
        if (f < a)
            if (d)
                for (; a >= f && !b.Ug; --a) this.b.yf(c.da), b.index = a, c.Ng(), this.b.ld(c.da);
            else
                for (; a >= f && !b.Ug; --a) b.index = a, c.Ng();
        else if (d)
            for (; a <= f && !b.Ug; ++a) this.b.yf(c.da), b.index = a, c.Ng(), this.b.ld(c.da);
        else
            for (; a <= f && !b.Ug; ++a) b.index = a,
                c.Ng();
        this.b.bs();
        return !1
    };
    d.prototype.Do = function(b) { var a = this.b.zj(),
            f = a.J.Every_lastTime || 0,
            d = this.b.Jb.qa; "undefined" === typeof a.J.Every_seconds && (a.J.Every_seconds = b); var c = a.J.Every_seconds; if (d >= f + c) return a.J.Every_lastTime = f + c, d >= a.J.Every_lastTime + .04 && (a.J.Every_lastTime = d), a.J.Every_seconds = b, !0;
        d < f - .1 && (a.J.Every_lastTime = d); return !1 };
    d.prototype.zo = function(b, a, f) { return Sb(b.dg(), a, f) };
    d.prototype.Co = function() { var b = this.b.Ya(); return b.oj ? !1 : !b.Ce };
    d.prototype.pl = function() { return !0 };
    d.prototype.Mo = function() { return !0 };
    d.prototype.Si = function() { return !0 };
    d.prototype.sl = function() { return !0 };
    d.prototype.Ro = function() { return !0 };
    d.prototype.Ri = function() { return !0 };
    d.prototype.so = function(b, a, f) { return Ja(W(b), W(f)) <= W(a) };
    d.prototype.Ho = function(b, a) { return La(W(b), W(a)) };
    d.prototype.Go = function(b, a, f) { b = Ha(b);
        a = Ha(a);
        f = Ha(f); return La(f, a) ? La(b, a) && !La(b, f) : !(!La(b, a) && La(b, f)) };
    q.n = new d;
    n.prototype.Ao = function(b, a, f, d) {
        if (a && b && (a = this.b.Nl(b, a, f, d))) {
            this.b.zc++;
            var c;
            this.b.trigger(Object.getPrototypeOf(b.ja).n.dh,
                a);
            if (a.Ib)
                for (f = 0, d = a.siblings.length; f < d; f++) c = a.siblings[f], this.b.trigger(Object.getPrototypeOf(c.type.ja).n.dh, c);
            this.b.zc--;
            b = b.V();
            b.ia = !1;
            V(b.d);
            b.d[0] = a;
            if (a.Ib)
                for (f = 0, d = a.siblings.length; f < d; f++) c = a.siblings[f], b = c.type.V(), b.ia = !1, V(b.d), b.d[0] = c
        }
    };
    n.prototype.Xo = function(b, a) { b && b.visible !== a && (b.visible = a, this.b.Z = !0) };
    n.prototype.$o = function(b, a) { 0 === b.Ni ? ha(a) ? b.Le(a) : b.Le(parseFloat(a)) : 1 === b.Ni && b.Le(a.toString()) };
    n.prototype.ro = function(b, a) {
        0 === b.Ni ? ha(a) ? b.Le(b.dg() + a) : b.Le(b.dg() +
            parseFloat(a)) : 1 === b.Ni && b.Le(b.dg() + a.toString())
    };
    var t = [],
        l = [];
    n.prototype.Uo = function() { if (!this.b.qg && !this.b.Qf && this.b.aa) { this.b.Qf = this.b.aa; var b, a, f;
            b = 0; for (a = this.b.xd.length; b < a; b++) f = this.b.xd[b], f.Hn(f.Kh) } };
    q.ga = new n;
    k.prototype["int"] = function(b, a) { G(a) ? (b.na(parseInt(a, 10)), isNaN(b.data) && (b.data = 0)) : b.na(a) };
    k.prototype["float"] = function(b, a) { G(a) ? (b.C(parseFloat(a)), isNaN(b.data) && (b.data = 0)) : b.C(a) };
    k.prototype.random = function(b, a, f) {
        void 0 === f ? b.C(Math.random() * a) : b.C(Math.random() *
            (f - a) + a)
    };
    k.prototype.sqrt = function(b, a) { b.C(Math.sqrt(a)) };
    k.prototype.abs = function(b, a) { b.C(Math.abs(a)) };
    k.prototype.round = function(b, a) { b.na(Math.round(a)) };
    k.prototype.floor = function(b, a) { b.na(Math.floor(a)) };
    k.prototype.ceil = function(b, a) { b.na(Math.ceil(a)) };
    k.prototype.sin = function(b, a) { b.C(Math.sin(W(a))) };
    k.prototype.cos = function(b, a) { b.C(Math.cos(W(a))) };
    k.prototype.tan = function(b, a) { b.C(Math.tan(W(a))) };
    k.prototype.asin = function(b, a) { b.C(Da(Math.asin(a))) };
    k.prototype.acos = function(b, a) { b.C(Da(Math.acos(a))) };
    k.prototype.atan = function(b, a) { b.C(Da(Math.atan(a))) };
    k.prototype.exp = function(b, a) { b.C(Math.exp(a)) };
    k.prototype.log10 = function(b, a) { b.C(Math.log(a) / Math.LN10) };
    k.prototype.max = function(b) { var a = arguments[1]; "number" !== typeof a && (a = 0); var f, d, c;
        f = 2; for (d = arguments.length; f < d; f++) c = arguments[f], "number" === typeof c && a < c && (a = c);
        b.C(a) };
    k.prototype.min = function(b) {
        var a = arguments[1];
        "number" !== typeof a && (a = 0);
        var f, d, c;
        f = 2;
        for (d = arguments.length; f < d; f++) c = arguments[f], "number" === typeof c && a > c && (a = c);
        b.C(a)
    };
    k.prototype.bf = function(b) { b.C(this.b.bf) };
    k.prototype.Gf = function(b) { b.C(this.b.Gf) };
    k.prototype.time = function(b) { b.C(this.b.Jb.qa) };
    k.prototype.Wc = function(b) { b.na(this.b.Wc) };
    k.prototype.ii = function(b) { b.na(this.b.ii) };
    k.prototype.vj = function(b) { b.na(this.b.vj) };
    k.prototype.k = function(b, a, f, d, c) { b.C(Da(Ia(a, f, d, c))) };
    k.prototype.left = function(b, a, f) { b.Nb(G(a) ? a.substr(0, f) : "") };
    k.prototype.right = function(b, a, f) { b.Nb(G(a) ? a.substr(a.length - f) : "") };
    k.prototype.replace = function(b, a, f, d) {
        G(a) &&
            G(f) && G(d) ? b.Nb(a.replace(new RegExp(Va(f), "gi"), d)) : b.Nb(G(a) ? a : "")
    };
    k.prototype.trim = function(b, a) { b.Nb(G(a) ? a.trim() : "") };
    k.prototype.wp = function(b) { var a = Q(Math.random() * (arguments.length - 1));
        b.Kn(arguments[a + 1]) };
    k.prototype.ij = function(b) { b.C(this.b.ij / 1E3) };
    k.prototype.$h = function(b) { b.C(this.b.$h) };
    q.ta = new k;
    q.ws = function() {
        var b, a, f, d, c, e, k = this.b.Ya();
        b = 0;
        for (f = this.Pb.length; b < f; b++) {
            d = this.Pb[b];
            if (-1 === d.time) { if (!d.Pn) continue } else if (d.time > this.b.Jb.qa) continue;
            k.hb = d.Xf;
            k.ac = d.ac;
            k.Ja = 0;
            for (a in d.Ob) d.Ob.hasOwnProperty(a) && (c = this.b.q[parseInt(a, 10)].V(), e = d.Ob[a], c.ia = e.Cn, xa(c.d, e.ye), c = e, V(c.ye), l.push(c));
            d.Xf.vs();
            this.b.gj(d.da);
            d.Ql = !0
        }
        a = b = 0;
        for (f = this.Pb.length; b < f; b++) d = this.Pb[b], this.Pb[a] = d, d.Ql ? (Pa(d.Ob), V(d.da), t.push(d)) : a++;
        wa(this.Pb, a)
    }
})();
(function() {
    fb = function(d, k) {
        var q = d[1],
            t = d[3],
            l = d[4],
            b = d[5],
            a = d[6],
            f = d[7],
            r = d[8];
        k.n || (k.n = {});
        k.ga || (k.ga = {});
        k.ta || (k.ta = {});
        var c = k.n,
            e = k.ga,
            u = k.ta;
        t && (c.ct = function(a, b) { return Sb(this.x, a, b) }, c.dt = function(a, b) { return Sb(this.y, a, b) }, c.jt = function() { var a = this.j;
                this.S(); var b = this.Y; return !(b.right < a.ba || b.bottom < a.ca || b.left > a.fa || b.top > a.ea) }, c.kt = function() { this.S(); var a = this.Y,
                    b = this.b.aa; return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height }, c.zt = function(a, b, c) {
                var e = this.V(),
                    f = e.Vb();
                if (!f.length) return !1;
                var d = f[0],
                    l = d,
                    k = Ma(d.x, d.y, b, c),
                    n, q, r;
                n = 1;
                for (q = f.length; n < q; n++)
                    if (d = f[n], r = Ma(d.x, d.y, b, c), 0 === a && r < k || 1 === a && r > k) k = r, l = d;
                e.Gg(l);
                return !0
            }, e.Qt = function(a) { this.x !== a && (this.x = a, this.L()) }, e.Rt = function(a) { this.y !== a && (this.y = a, this.L()) }, e.Yo = function(a, b) { if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.L() }, e.Nt = function(a, b) { var c = a.Vq(this); if (c) { var e;
                    c.Dj ? (e = c.Dj(b, !0), c = c.Dj(b, !1)) : (e = c.x, c = c.y); if (this.x !== e || this.y !== c) this.x = e, this.y = c, this.L() } }, e.pt =
            function(a) { 0 !== a && (this.x += Math.cos(this.k) * a, this.y += Math.sin(this.k) * a, this.L()) }, e.ot = function(a, b) { 0 !== b && (this.x += Math.cos(W(a)) * b, this.y += Math.sin(W(a)) * b, this.L()) }, u.ul = function(a) { a.C(this.x) }, u.wl = function(a) { a.C(this.y) }, u.bf = function(a) { a.C(this.b.Aj(this)) });
        l && (c.bt = function(a, b) { return Sb(this.width, a, b) }, c.Zs = function(a, b) { return Sb(this.height, a, b) }, e.bp = function(a) { this.width !== a && (this.width = a, this.L()) }, e.Lt = function(a) { this.height !== a && (this.height = a, this.L()) }, e.Ot = function(a,
            b) { if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.L() }, u.Vt = function(a) { a.C(this.width) }, u.ft = function(a) { a.C(this.height) }, u.Ws = function(a) { this.S();
            a.C(this.Y.left) }, u.Ys = function(a) { this.S();
            a.C(this.Y.top) }, u.Xs = function(a) { this.S();
            a.C(this.Y.right) }, u.Vs = function(a) { this.S();
            a.C(this.Y.bottom) });
        b && (c.so = function(a, b) { return Ja(this.k, W(b)) <= W(a) }, c.Ho = function(a) { return La(this.k, W(a)) }, c.Go = function(a, b) {
            var c = Ha(a),
                e = Ha(b),
                f = Fa(this.k);
            return La(e, c) ? La(f, c) && !La(f, e) :
                !(!La(f, c) && La(f, e))
        }, e.Ht = function(a) { a = W(Ea(a));
            isNaN(a) || this.k === a || (this.k = a, this.L()) }, e.Dt = function(a) { 0 === a || isNaN(a) || (this.k += W(a), this.k = Fa(this.k), this.L()) }, e.Et = function(a) { 0 === a || isNaN(a) || (this.k -= W(a), this.k = Fa(this.k), this.L()) }, e.Ft = function(a, b) { var c = Ka(this.k, W(b), W(a));
            isNaN(c) || this.k === c || (this.k = c, this.L()) }, e.Gt = function(a, b, c) { a = Ka(this.k, Math.atan2(c - this.y, b - this.x), W(a));
            isNaN(a) || this.k === a || (this.k = a, this.L()) }, e.Pt = function(a, b) {
            var c = Math.atan2(b - this.y, a - this.x);
            isNaN(c) || this.k === c || (this.k = c, this.L())
        }, u.Us = function(a) { a.C(Ga(this.k)) });
        q || (c.xo = function(a, b, c) { return Sb(this.Ma[a], b, c) }, c.ht = function(a) { return this.Ma[a] }, c.At = function(a, b) { var c = this.V(),
                e = c.Vb(); if (!e.length) return !1; var f = e[0],
                d = f,
                l = f.Ma[b],
                k, n, r;
            k = 1; for (n = e.length; k < n; k++)
                if (f = e[k], r = f.Ma[b], 0 === a && r < l || 1 === a && r > l) l = r, d = f;
            c.Gg(d); return !0 }, c.yt = function(a) {
            var b, c, e, f, d;
            if (this.b.zj().Sj) {
                d = this.V();
                if (d.ia)
                    for (d.ia = !1, V(d.d), V(d.O), e = this.d, b = 0, c = e.length; b < c; b++) f = e[b], f.uid === a ?
                        d.O.push(f) : d.d.push(f);
                else { e = b = 0; for (c = d.d.length; b < c; b++) f = d.d[b], d.d[e] = f, f.uid === a ? d.O.push(f) : e++;
                    wa(d.d, e) }
                this.sc();
                return !!d.d.length
            }
            f = this.b.im(a);
            if (!f) return !1;
            d = this.V();
            if (!d.ia && -1 === d.d.indexOf(f)) return !1;
            if (this.H)
                for (a = f.type.ua, b = 0, c = a.length; b < c; b++) { if (a[b] === this) return d.Gg(f), this.sc(), !0 } else if (f.type === this) return d.Gg(f), this.sc(), !0;
            return !1
        }, c.dh = function() { return !0 }, c.Po = function() { return !0 }, e.Wo = function(a, b) {
            var c = this.Ma;
            ha(c[a]) ? c[a] = ha(b) ? b : parseFloat(b) : G(c[a]) &&
                (c[a] = G(b) ? b : b.toString())
        }, e.qo = function(a, b) { var c = this.Ma;
            ha(c[a]) ? c[a] = ha(b) ? c[a] + b : c[a] + parseFloat(b) : G(c[a]) && (c[a] = G(b) ? c[a] + b : c[a] + b.toString()) }, e.St = function(a, b) { var c = this.Ma;
            ha(c[a]) && (c[a] = ha(b) ? c[a] - b : c[a] - parseFloat(b)) }, e.It = function(a, b) { this.Ma[a] = b ? 1 : 0 }, e.Tt = function(a) { this.Ma[a] = 1 - this.Ma[a] }, e.Bo = function() { this.b.Se(this) }, e.Jo || (e.Jo = function(a) {
            var b, c;
            try { b = JSON.parse(a) } catch (e) { return }
            this.b.Yh(this, b, !0);
            this.wd && this.wd();
            if (this.G)
                for (a = 0, b = this.G.length; a < b; ++a) c =
                    this.G[a], c.wd && c.wd()
        }), u.et = function(a) { var b = a.Ie.d.length,
                c, e, f;
            c = 0; for (e = this.b.vc.length; c < e; c++) f = this.b.vc[c], a.Ie.H ? 0 <= f.type.ua.indexOf(a.Ie) && b++ : f.type === a.Ie && b++;
            a.na(b) }, u.Ct = function(a) { a.na(a.Ie.V().Vb().length) }, u.Ut = function(a) { a.na(this.uid) }, u.gt = function(a) { a.na(this.eg()) }, u.to || (u.to = function(a) { a.Nb(JSON.stringify(this.b.Hk(this, !0))) }));
        a && (c.lt = function() { return this.visible }, e.Ti = function(a) {!a !== !this.visible && (this.visible = !!a, this.b.Z = !0) }, c.$s = function(a, b) {
            return Sb(bb(100 *
                this.opacity), a, b)
        }, e.Mt = function(a) { a = a / 100;
            0 > a ? a = 0 : 1 < a && (a = 1);
            a !== this.opacity && (this.opacity = a, this.b.Z = !0) }, u.Opacity = function(a) { a.C(bb(100 * this.opacity)) });
        f && (c.it = function(a) { return a ? this.j === a : !1 }, c.Bt = function(a) { var b = this.V(),
                    c = b.Vb(); if (!c.length) return !1; var e = c[0],
                    f = e,
                    d, l;
                d = 1; for (l = c.length; d < l; d++)
                    if (e = c[d], 0 === a) { if (e.j.index > f.j.index || e.j.index === f.j.index && e.Oc() > f.Oc()) f = e } else if (e.j.index < f.j.index || e.j.index === f.j.index && e.Oc() < f.Oc()) f = e;
                b.Gg(f); return !0 }, e.ut = function() {
                var a =
                    this.j,
                    b = a.d;
                b.length && b[b.length - 1] === this || (a.zf(this, !1), a.Nf(this, !1), this.b.Z = !0)
            }, e.qt = function() { var a = this.j,
                    b = a.d;
                b.length && b[0] === this || (a.zf(this, !1), a.hs(this), this.b.Z = !0) }, e.tt = function(a) { a && a != this.j && (this.j.zf(this, !0), this.j = a, a.Nf(this, !0), this.b.Z = !0) }, e.Xt = function(a, b) { var c = 0 === a; if (b) { var e = b.Qq(this);
                    e && e.uid !== this.uid && (this.j.index !== e.j.index && (this.j.zf(this, !0), this.j = e.j, e.j.Nf(this, !0)), this.j.Nr(this, e, c), this.b.Z = !0) } }, u.nt = function(a) { a.na(this.j.jn) }, u.mt = function(a) { a.Nb(this.j.name) },
            u.Wt = function(a) { a.na(this.Oc()) });
        r && (e.Jt = function(a, b) { if (this.b.p) { var c = this.type.Cj(b); if (!(0 > c)) { var e = 1 === a;
                    this.ud[c] !== e && (this.ud[c] = e, this.Ic(), this.b.Z = !0) } } }, e.Kt = function(a, b, c) { if (this.b.p) { var e = this.type.Cj(a);
                0 > e || (a = this.type.I[e], e = this.za[e], b = Math.floor(b), 0 > b || b >= e.length || (1 === this.b.p.Yq(a.Ia, b) && (c /= 100), e[b] !== c && (e[b] = c, a.Qb && (this.b.Z = !0)))) } })
    };
    yb = function() {
        this.bj = this.Xi = !0;
        this.type.gh = !0;
        this.b.Z = !0;
        var d, k, q = this.Yi;
        d = 0;
        for (k = q.length; d < k; ++d) q[d](this);
        this.j.$b &&
            this.S()
    };
    zb = function(d) { d && this.Yi.push(d) };
    Bb = function() { if (this.Xi) { var d = this.Y,
                k = this.qb;
            d.set(this.x, this.y, this.x + this.width, this.y + this.height);
            d.offset(-this.Ab * this.width, -this.Bb * this.height);
            this.k ? (d.offset(-this.x, -this.y), k.Mn(d, this.k), k.offset(this.x, this.y), k.Hl(d)) : k.Pg(d);
            d.normalize();
            this.Xi = !1;
            this.Os() } };
    var d = new U(0, 0, 0, 0);
    Cb = function() {
        if (this.j.$b) {
            var n = this.j.$a,
                k = this.Y;
            d.set(n.wb(k.left), n.xb(k.top), n.wb(k.right), n.xb(k.bottom));
            this.Db.Wf(d) || (this.Db.right < this.Db.left ?
                n.update(this, null, d) : n.update(this, this.Db, d), this.Db.Sf(d), this.j.Fc = !0)
        }
    };
    Db = function() { if (this.bj && this.Zc) { this.S(); var n = this.type.ph,
                k = this.Y;
            d.set(n.wb(k.left), n.xb(k.top), n.wb(k.right), n.xb(k.bottom));
            this.Dd.Wf(d) || (this.Dd.right < this.Dd.left ? n.update(this, null, d) : n.update(this, this.Dd, d), this.Dd.Sf(d), this.bj = !1) } };
    Ab = function(d, k) { return this.Y.sb(d, k) && this.qb.sb(d, k) ? this.X && !this.X.hf() ? (this.X.Ye(this.width, this.height, this.k), this.X.sb(d - this.x, k - this.y)) : !0 : !1 };
    ub = function() {
        this.type.Ki();
        return this.we
    };
    Eb = function() { this.j.el(); return this.Jc };
    Fb = function() { V(this.U); var d, k, q, t = !0;
        d = 0; for (k = this.ud.length; d < k; d++) this.ud[d] && (q = this.type.I[d], this.U.push(q), q.Cc || (t = !1));
        this.mo = !!this.U.length;
        this.md = t };
    vb = function() { return "Inst" + this.yn };
    ib = function(d) { if (d && d.Ib && d.type != this) { var k, q, t;
            k = 0; for (q = d.siblings.length; k < q; k++)
                if (t = d.siblings[k], t.type == this) return t }
        d = this.V().Vb(); return d.length ? d[0] : null };
    jb = function(d) {
        var k = this.V().Vb();
        return k.length ? k[d.eg() % k.length] :
            null
    };
    hb = function() { if (this.Ef && !this.H) { var d, k;
            d = 0; for (k = this.d.length; d < k; d++) this.d[d].we = d; var q = d,
                t = this.b.vc;
            d = 0; for (k = t.length; d < k; ++d) t[d].type === this && (t[d].we = q++);
            this.Ef = !1 } };
    sb = function(d) { if (d < this.d.length) return this.d[d];
        d -= this.d.length; var k = this.b.vc,
            q, t;
        q = 0; for (t = k.length; q < t; ++q)
            if (k[q].type === this) { if (0 === d) return k[q];--d }
        return null };
    kb = function() { return this.od[this.Mc] };
    lb = function() {
        this.Mc++;
        this.Mc === this.od.length ? this.od.push(new gb(this)) : (this.od[this.Mc].ia = !0,
            V(this.od[this.Mc].O))
    };
    mb = function() { this.Mc++;
        this.Mc === this.od.length && this.od.push(new gb(this)); var d = this.od[this.Mc],
            k = this.od[this.Mc - 1];
        k.ia ? (d.ia = !0, V(d.O)) : (d.ia = !1, xa(d.d, k.d), xa(d.O, k.O)) };
    nb = function() { this.Mc-- };
    ob = function(d) {
        var k, q, t, l, b, a = 0;
        if (!this.H)
            for (k = 0, q = this.ua.length; k < q; k++)
                for (b = this.ua[k], t = 0, l = b.ya.length; t < l; t++) { if (d === b.ya[t].name) return this.J.lastBehIndex = a, b.ya[t];
                    a++ }
        k = 0;
        for (q = this.ya.length; k < q; k++) {
            if (d === this.ya[k].name) return this.J.lastBehIndex = a, this.ya[k];
            a++
        }
        return null
    };
    pb = function(d) { return this.Fh(d) ? this.J.lastBehIndex : -1 };
    qb = function(d) { var k, q;
        k = 0; for (q = this.I.length; k < q; k++)
            if (this.I[k].name === d) return k;
        return -1 };
    rb = function() { if (this.Ib && !this.H) { var d, k, q, t, l, b, a;
            this.Ki();
            b = this.V(); var f = b.ia,
                r = (d = this.b.Ya()) && d.hb && d.hb.gc;
            d = 0; for (k = this.Gb.length; d < k; d++)
                if (l = this.Gb[d], l !== this && (l.Ki(), a = l.V(), a.ia = f, !f)) { V(a.d);
                    q = 0; for (t = b.d.length; q < t; ++q) a.d[q] = l.Ej(b.d[q].we); if (r)
                        for (V(a.O), q = 0, t = b.O.length; q < t; ++q) a.O[q] = l.Ej(b.O[q].we) } } };
    tb = function() { return "Type" + this.R };
    Sb = function(d, k, q) { if ("undefined" === typeof d || "undefined" === typeof q) return !1; switch (k) {
            case 0:
                return d === q;
            case 1:
                return d !== q;
            case 2:
                return d < q;
            case 3:
                return d <= q;
            case 4:
                return d > q;
            case 5:
                return d >= q;
            default:
                return !1 } }
})();
var $b = {};

function dc(d) { this.b = d }
(function() {
    function d() {}

    function n() {}
    var k = dc.prototype;
    k.xa = function(d) { this.ja = d;
        this.b = d.b };
    k.xa.prototype.T = function() {};
    k.ka = function(d) { this.type = d;
        this.b = d.b };
    var q = k.ka.prototype;
    q.T = function() {
        this.b.W ? x("[Construct 2] Button plugin not supported on this platform - the object will not be created") : (this.ff = 1 === this.u[0], this.ec = document.createElement("input"), this.i = this.ff ? document.createElement("label") : this.ec, this.sg = null, this.ec.type = this.ff ? "checkbox" : "button", this.ec.id = this.u[6],
            jQuery(this.i).appendTo(this.b.Bd ? this.b.Bd : "body"), this.ff ? (jQuery(this.ec).appendTo(this.i), this.sg = document.createTextNode(this.u[1]), jQuery(this.i).append(this.sg), this.ec.checked = 0 !== this.u[7], jQuery(this.i).css("font-family", "sans-serif"), jQuery(this.i).css("display", "inline-block"), jQuery(this.i).css("color", "black")) : this.ec.value = this.u[1], this.i.title = this.u[2], this.ec.disabled = 0 === this.u[4], this.np = 0 !== this.u[5], this.Aa = !1, 0 === this.u[3] && (jQuery(this.i).hide(), this.visible = !1, this.Aa = !0),
            this.ec.onclick = function(d) { return function(l) { l.stopPropagation();
                    d.b.tb = !0;
                    d.b.trigger(dc.prototype.n.Ve, d);
                    d.b.tb = !1 } }(this), this.i.addEventListener("touchstart", function(d) { d.stopPropagation() }, !1), this.i.addEventListener("touchmove", function(d) { d.stopPropagation() }, !1), this.i.addEventListener("touchend", function(d) { d.stopPropagation() }, !1), jQuery(this.i).mousedown(function(d) { d.stopPropagation() }), jQuery(this.i).mouseup(function(d) { d.stopPropagation() }), jQuery(this.i).keydown(function(d) { d.stopPropagation() }),
            jQuery(this.i).keyup(function(d) { d.stopPropagation() }), this.Td = this.Ud = this.Od = this.Qd = this.Sd = this.Pd = 0, this.he(!0), this.b.Xg(this))
    };
    q.mb = function() { var d = { tooltip: this.i.title, disabled: !!this.ec.disabled };
        this.ff ? (d.checked = !!this.ec.checked, d.text = this.sg.nodeValue) : d.text = this.i.value; return d };
    q.Cb = function(d) { this.i.title = d.tooltip;
        this.ec.disabled = d.disabled;
        this.ff ? (this.ec.checked = d.checked, this.sg.nodeValue = d.text) : this.i.value = d.text };
    q.ae = function() {
        this.b.W || (jQuery(this.i).remove(),
            this.i = null)
    };
    q.Yb = function() { this.he() };
    q.he = function(d) {
        if (!this.b.W) {
            var l = this.j.P(this.x, this.y, !0),
                b = this.j.P(this.x, this.y, !1),
                a = this.j.P(this.x + this.width, this.y + this.height, !0),
                f = this.j.P(this.x + this.width, this.y + this.height, !1),
                k = this.b.width / this.b.devicePixelRatio,
                c = this.b.height / this.b.devicePixelRatio;
            !this.visible || !this.j.visible || 0 >= a || 0 >= f || l >= k || b >= c ? (this.Aa || jQuery(this.i).hide(), this.Aa = !0) : (1 > l && (l = 1), 1 > b && (b = 1), a >= k && (a = k - 1), f >= c && (f = c - 1), k = window.innerWidth, c = window.innerHeight,
                d || this.Pd !== l || this.Sd !== b || this.Qd !== a || this.Od !== f || this.Ud !== k || this.Td !== c ? (this.Pd = l, this.Sd = b, this.Qd = a, this.Od = f, this.Ud = k, this.Td = c, this.Aa && (jQuery(this.i).show(), this.Aa = !1), d = Math.round(l) + jQuery(this.b.canvas).offset().left, k = Math.round(b) + jQuery(this.b.canvas).offset().top, jQuery(this.i).css("position", "absolute"), jQuery(this.i).offset({ left: d, top: k }), jQuery(this.i).width(Math.round(a - l)), jQuery(this.i).height(Math.round(f - b)), this.np && jQuery(this.i).css("font-size", this.j.zb(!0) / this.b.devicePixelRatio -
                    .2 + "em")) : this.Aa && (jQuery(this.i).show(), this.Aa = !1))
        }
    };
    q.Tb = function() {};
    q.jb = function() {};
    d.prototype.Ve = function() { return !0 };
    k.n = new d;
    n.prototype.tl = function(d) { this.b.W || (this.ff ? this.sg.nodeValue = d : this.i.value = d) };
    n.prototype.Ti = function(d) { this.b.W || (this.visible = 0 !== d) };
    k.ga = new n;
    k.ta = new function() {}
})();

function cc(d) { this.b = d }
(function() {
    function d() { this.name = "";
        this.Mg = 0;
        this.xf = [] }

    function n() { a++;
        a === b.length && b.push(new d); return b[a] }

    function k() {}

    function q() {}

    function t() {}
    var l = cc.prototype;
    l.xa = function(a) { this.ja = a;
        this.b = a.b };
    l.xa.prototype.T = function() {};
    l.ka = function(a) { this.type = a;
        this.b = a.b };
    var b = [],
        a = -1;
    l.ka.prototype.T = function() {
        var b = this;
        window.c2_callFunction = function(d, c) {
            var e, l, g, k = n();
            k.name = d.toLowerCase();
            k.Mg = 0;
            if (c)
                for (k.xf.length = c.length, e = 0, l = c.length; e < l; ++e) g = c[e], k.xf[e] = "number" ===
                    typeof g || "string" === typeof g ? g : "boolean" === typeof g ? g ? 1 : 0 : 0;
            else V(k.xf);
            b.b.trigger(cc.prototype.n.eh, b, k.name);
            a--;
            return k.Mg
        }
    };
    k.prototype.eh = function(f) { var d = 0 > a ? null : b[a]; return d ? cb(f, d.name) : !1 };
    l.n = new k;
    q.prototype.CallFunction = function(b, d) { var c = n();
        c.name = b.toLowerCase();
        c.Mg = 0;
        xa(c.xf, d);
        this.b.trigger(cc.prototype.n.eh, this, c.name);
        a-- };
    l.ga = new q;
    t.prototype.uo = function(b, d) {
        var c = n();
        c.name = d.toLowerCase();
        c.Mg = 0;
        V(c.xf);
        var e, l;
        e = 2;
        for (l = arguments.length; e < l; e++) c.xf.push(arguments[e]);
        this.b.trigger(cc.prototype.n.eh, this, c.name);
        a--;
        b.Kn(c.Mg)
    };
    l.ta = new t
})();

function ec(d) { this.b = d }
(function() {
    function d() {}

    function n() {}
    var k = ec.prototype;
    k.xa = function(d) { this.ja = d;
        this.b = d.b };
    k.xa.prototype.T = function() {};
    k.ka = function(d) { this.type = d;
        this.b = d.b;
        this.Xe = Array(4);
        this.$n = this.Ii = this.Qe = this.$d = this.Zd = 0;
        this.Kj = !1 };
    var q = k.ka.prototype;
    q.T = function() {
        var d = this;
        if (!this.b.W) {
            jQuery(document).mousemove(function(a) { d.Tr(a) });
            jQuery(document).mousedown(function(a) { d.Sr(a) });
            jQuery(document).mouseup(function(a) { d.Ur(a) });
            jQuery(document).dblclick(function(a) { d.Rr(a) });
            var b = function(a) { d.Wr(a) };
            document.addEventListener("mousewheel", b, !1);
            document.addEventListener("DOMMouseScroll", b, !1)
        }
    };
    var t = { left: 0, top: 0 };
    q.Tr = function(d) { var b = this.b.W ? t : jQuery(this.b.canvas).offset();
        this.Zd = d.pageX - b.left;
        this.$d = d.pageY - b.top };
    q.dn = function() { return 0 < this.b.yb ? !0 : 0 <= this.Zd && 0 <= this.$d && this.Zd < this.b.width && this.$d < this.b.height };
    q.Sr = function(d) {
        this.dn() && (this.Xe[d.which] = !0, this.b.tb = !0, this.b.trigger(ec.prototype.n.ml, this), this.Qe = d.which - 1, this.Ii = 0, this.b.trigger(ec.prototype.n.nl, this),
            this.b.trigger(ec.prototype.n.ql, this), this.b.tb = !1)
    };
    q.Ur = function(d) { this.Xe[d.which] && (this.b.jm && !this.b.Ld && d.preventDefault(), this.b.jm = !0, this.Xe[d.which] = !1, this.b.tb = !0, this.Qe = d.which - 1, this.b.trigger(ec.prototype.n.rl, this), this.b.tb = !1) };
    q.Rr = function(d) { this.dn() && (d.preventDefault(), this.b.tb = !0, this.Qe = d.which - 1, this.Ii = 1, this.b.trigger(ec.prototype.n.nl, this), this.b.trigger(ec.prototype.n.ql, this), this.b.tb = !1) };
    q.Wr = function(d) {
        this.$n = 0 > (d.wheelDelta ? d.wheelDelta : d.detail ? -d.detail :
            0) ? 0 : 1;
        this.Kj = !1;
        this.b.tb = !0;
        this.b.trigger(ec.prototype.n.So, this);
        this.b.tb = !1;
        this.Kj && db(d) && d.preventDefault()
    };
    q.wf = function() { var d, b;
        d = 0; for (b = this.Xe.length; d < b; ++d) this.Xe[d] && (this.Xe[d] = !1, this.Qe = d - 1, this.b.trigger(ec.prototype.n.rl, this)) };
    d.prototype.nl = function(d, b) { return d === this.Qe && b === this.Ii };
    d.prototype.ml = function() { return !0 };
    d.prototype.rl = function(d) { return d === this.Qe };
    d.prototype.ql = function(d, b, a) { return d !== this.Qe || b !== this.Ii ? !1 : this.b.Js(a, this.Zd, this.$d) };
    d.prototype.So =
        function(d) { this.Kj = !0; return d === this.$n };
    k.n = new d;
    k.ga = new function() {};
    n.prototype.ul = function(d, b) { var a, f, k, c, e;
        ga(b) ? (a = this.b.ag(0), f = a.scale, k = a.Kc, c = a.ic, e = a.k, a.scale = 1, a.Kc = 1, a.ic = 1, a.k = 0, d.C(a.rb(this.Zd, this.$d, !0)), a.scale = f, a.Kc = k, a.ic = c, a.k = e) : (a = ha(b) ? this.b.ag(b) : this.b.Fj(b)) ? d.C(a.rb(this.Zd, this.$d, !0)) : d.C(0) };
    n.prototype.wl = function(d, b) {
        var a, f, k, c, e;
        ga(b) ? (a = this.b.ag(0), f = a.scale, k = a.Kc, c = a.jc, e = a.k, a.scale = 1, a.Kc = 1, a.jc = 1, a.k = 0, d.C(a.rb(this.Zd, this.$d, !1)), a.scale = f, a.Kc =
            k, a.jc = c, a.k = e) : (a = ha(b) ? this.b.ag(b) : this.b.Fj(b)) ? d.C(a.rb(this.Zd, this.$d, !1)) : d.C(0)
    };
    k.ta = new n
})();

function bc(d) { this.b = d }
(function() {
    function d() { if (0 === this.lj.length) { var a = document.createElement("canvas");
            a.width = this.width;
            a.height = this.height; var b = a.getContext("2d");
            this.Df ? b.drawImage(this.Q, this.uf, this.vf, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.Q, 0, 0, this.width, this.height);
            this.lj = a.toDataURL("image/png") } return this.lj }

    function n() {}

    function k(a) { a[0] = 0;
        a[1] = 0;
        a[2] = 0;
        e.push(a) }

    function q(a, b) { return a < b ? "" + a + "," + b : "" + b + "," + a }

    function t(a, b, c, f) {
        b = b.uid;
        c = c.uid;
        var d = q(b, c);
        if (a.hasOwnProperty(d)) a[d][2] =
            f;
        else { var g = e.length ? e.pop() : [0, 0, 0];
            g[0] = b;
            g[1] = c;
            g[2] = f;
            a[d] = g }
    }

    function l(a, b, c) { b = q(b.uid, c.uid);
        a.hasOwnProperty(b) && (k(a[b]), delete a[b]) }

    function b(a, b, c) { b = q(b.uid, c.uid); if (a.hasOwnProperty(b)) return u = a[b][2], !0;
        u = -2; return !1 }
    var a = bc.prototype;
    a.xa = function(a) { this.ja = a;
        this.b = a.b };
    var f = a.xa.prototype;
    f.T = function() {
        if (!this.H) {
            var a, b, c, e, f, g, l, k, q;
            this.rc = [];
            this.hg = !1;
            a = 0;
            for (b = this.Fb.length; a < b; a++) {
                f = this.Fb[a];
                l = {};
                l.name = f[0];
                l.speed = f[1];
                l.loop = f[2];
                l.Dk = f[3];
                l.Ek = f[4];
                l.sn =
                    f[5];
                l.R = f[6];
                l.frames = [];
                c = 0;
                for (e = f[7].length; c < e; c++) g = f[7][c], k = {}, k.Sk = g[0], k.Tk = g[1], k.uf = g[2], k.vf = g[3], k.width = g[4], k.height = g[5], k.duration = g[6], k.Ab = g[7], k.Bb = g[8], k.Oj = g[9], k.ki = g[10], k.tn = g[11], k.Df = 0 !== k.width, k.lj = "", k.au = d, q = { left: 0, top: 0, right: 1, bottom: 1 }, k.Ok = q, k.oa = null, (q = this.b.Kq(g[0])) ? k.Q = q : (k.Q = new Image, k.Q.yp = g[0], k.Q.Ml = g[1], k.Q.sp = null, this.b.oo(k.Q, g[0])), l.frames.push(k), this.rc.push(k);
                this.Fb[a] = l
            }
        }
    };
    f.ko = function() {
        var a, b, c;
        a = 0;
        for (b = this.d.length; a < b; a++) c = this.d[a],
            c.sh = c.Ua.oa
    };
    f.ji = function() { if (!this.H) { var a, b, c;
            a = 0; for (b = this.rc.length; a < b; ++a) c = this.rc[a], c.Q.sp = null, c.oa = null;
            this.hg = !1;
            this.ko() } };
    f.pk = function() { if (!this.H && this.d.length) { var a, b, c;
            a = 0; for (b = this.rc.length; a < b; ++a) c = this.rc[a], c.oa = this.b.p.Zh(c.Q, !1, this.b.wa, c.tn);
            this.ko() } };
    f.gk = function() { if (!this.H && !this.hg && this.b.p) { var a, b, c;
            a = 0; for (b = this.rc.length; a < b; ++a) c = this.rc[a], c.oa = this.b.p.Zh(c.Q, !1, this.b.wa, c.tn);
            this.hg = !0 } };
    f.bl = function() {
        if (!this.H && !this.d.length && this.hg) {
            var a,
                b, c;
            a = 0;
            for (b = this.rc.length; a < b; ++a) c = this.rc[a], this.b.p.deleteTexture(c.oa), c.oa = null;
            this.hg = !1
        }
    };
    var r = [];
    f.vk = function(a) { var b, c, e;
        V(r);
        b = 0; for (c = this.rc.length; b < c; ++b) e = this.rc[b].Q, -1 === r.indexOf(e) && (a.drawImage(e, 0, 0), r.push(e)) };
    a.ka = function(a) { this.type = a;
        this.b = a.b;
        a = this.type.Fb[0].frames[0].ki;
        this.kc ? this.X.Qg(a) : this.X = new Wa(a) };
    var c = a.ka.prototype;
    c.T = function() {
        this.visible = 0 === this.u[0];
        this.Zc = 0 !== this.u[3];
        this.pa = this.cm(this.u[1]) || this.type.Fb[0];
        this.A = this.u[2];
        0 > this.A &&
            (this.A = 0);
        this.A >= this.pa.frames.length && (this.A = this.pa.frames.length - 1);
        var a = this.pa.frames[this.A];
        this.X.Qg(a.ki);
        this.Ab = a.Ab;
        this.Bb = a.Bb;
        this.Ze = this.pa.speed;
        this.Fd = this.pa.Ek;
        1 === this.type.Fb.length && 1 === this.type.Fb[0].frames.length || 0 === this.Ze || this.b.Xg(this);
        this.kc ? this.Lc.reset() : this.Lc = new Ua;
        this.dd = this.Lc.qa;
        this.je = !0;
        this.Xc = 0;
        this.ie = !0;
        this.fj = this.Bl = "";
        this.up = 0;
        this.ej = -1;
        this.type.gk();
        var b, c, e, f, d, g, k, a = 0;
        for (b = this.type.Fb.length; a < b; a++)
            for (f = this.type.Fb[a], c =
                0, e = f.frames.length; c < e; c++) d = f.frames[c], 0 === d.width && (d.width = d.Q.width, d.height = d.Q.height), d.Df && (k = d.Q, g = d.Ok, g.left = d.uf / k.width, g.top = d.vf / k.height, g.right = (d.uf + d.width) / k.width, g.bottom = (d.vf + d.height) / k.height, 0 === d.uf && 0 === d.vf && d.width === k.width && d.height === k.height && (d.Df = !1));
        this.Ua = this.pa.frames[this.A];
        this.sh = this.Ua.oa
    };
    c.mb = function() { var a = { a: this.pa.R, f: this.A, cas: this.Ze, fs: this.dd, ar: this.Xc, at: this.Lc.qa, rt: this.Fd };
        this.je || (a.ap = this.je);
        this.ie || (a.af = this.ie); return a };
    c.Cb = function(a) { var b = this.Nq(a.a);
        b && (this.pa = b);
        this.A = a.f;
        0 > this.A && (this.A = 0);
        this.A >= this.pa.frames.length && (this.A = this.pa.frames.length - 1);
        this.Ze = a.cas;
        this.dd = a.fs;
        this.Xc = a.ar;
        this.Lc.reset();
        this.Lc.qa = a.at;
        this.je = a.hasOwnProperty("ap") ? a.ap : !0;
        this.ie = a.hasOwnProperty("af") ? a.af : !0;
        a.hasOwnProperty("rt") ? this.Fd = a.rt : this.Fd = this.pa.Ek;
        this.Ua = this.pa.frames[this.A];
        this.sh = this.Ua.oa;
        this.X.Qg(this.Ua.ki);
        this.Ab = this.Ua.Ab;
        this.Bb = this.Ua.Bb };
    c.Wi = function(a) {
        this.A = a ? 0 : this.pa.frames.length -
            1;
        this.je = !1;
        this.Bl = this.pa.name;
        this.b.trigger(bc.prototype.n.Lo, this);
        this.b.trigger(bc.prototype.n.Ko, this);
        this.Xc = 0
    };
    c.Fl = function() { return this.Lc.qa };
    c.Yb = function() {
        this.Lc.add(this.b.Aj(this));
        this.fj.length && this.Dp();
        0 <= this.ej && this.Ep();
        var a = this.Lc.qa,
            b = this.pa,
            c = b.frames[this.A],
            e = c.duration / this.Ze;
        this.je && a >= this.dd + e && (this.ie ? this.A++ : this.A--, this.dd += e, this.A >= b.frames.length && (b.sn ? (this.ie = !1, this.A = b.frames.length - 2) : b.loop ? this.A = this.Fd : (this.Xc++, this.Xc >= b.Dk ? this.Wi(!1) :
            this.A = this.Fd)), 0 > this.A && (b.sn ? (this.A = 1, this.ie = !0, b.loop || (this.Xc++, this.Xc >= b.Dk && this.Wi(!0))) : b.loop ? this.A = this.Fd : (this.Xc++, this.Xc >= b.Dk ? this.Wi(!0) : this.A = this.Fd)), 0 > this.A ? this.A = 0 : this.A >= b.frames.length && (this.A = b.frames.length - 1), a > this.dd + b.frames[this.A].duration / this.Ze && (this.dd = a), a = b.frames[this.A], this.We(c, a), this.b.Z = !0)
    };
    c.cm = function(a) { var b, c, e;
        b = 0; for (c = this.type.Fb.length; b < c; b++)
            if (e = this.type.Fb[b], cb(e.name, a)) return e;
        return null };
    c.Nq = function(a) {
        var b, c, e;
        b =
            0;
        for (c = this.type.Fb.length; b < c; b++)
            if (e = this.type.Fb[b], e.R === a) return e;
        return null
    };
    c.Dp = function() { var a = this.pa.frames[this.A],
            b = this.cm(this.fj);
        this.fj = "";!b || cb(b.name, this.pa.name) && this.je || (this.pa = b, this.Ze = b.speed, this.Fd = b.Ek, 0 > this.A && (this.A = 0), this.A >= this.pa.frames.length && (this.A = this.pa.frames.length - 1), 1 === this.up && (this.A = 0), this.je = !0, this.dd = this.Lc.qa, this.ie = !0, this.We(a, this.pa.frames[this.A]), this.b.Z = !0) };
    c.Ep = function() {
        var a = this.pa.frames[this.A],
            b = this.A;
        this.A = Q(this.ej);
        0 > this.A && (this.A = 0);
        this.A >= this.pa.frames.length && (this.A = this.pa.frames.length - 1);
        b !== this.A && (this.We(a, this.pa.frames[this.A]), this.dd = this.Lc.qa, this.b.Z = !0);
        this.ej = -1
    };
    c.We = function(a, b) { var c = a.width,
            e = a.height,
            f = b.width,
            d = b.height;
        c != f && (this.width *= f / c);
        e != d && (this.height *= d / e);
        this.Ab = b.Ab;
        this.Bb = b.Bb;
        this.X.Qg(b.ki);
        this.L();
        this.Ua = b;
        this.sh = b.oa;
        c = 0; for (e = this.G.length; c < e; c++) f = this.G[c], f.Vr && f.Vr(a, b);
        this.b.trigger(bc.prototype.n.We, this) };
    c.Tb = function(a) {
        a.globalAlpha = this.opacity;
        var b = this.Ua,
            c = b.Df,
            e = b.Q,
            f = this.x,
            d = this.y,
            g = this.width,
            k = this.height;
        if (0 === this.k && 0 <= g && 0 <= k) f -= this.Ab * g, d -= this.Bb * k, this.b.Bc && (f = Math.round(f), d = Math.round(d)), c ? a.drawImage(e, b.uf, b.vf, b.width, b.height, f, d, g, k) : a.drawImage(e, f, d, g, k);
        else {
            this.b.Bc && (f = Math.round(f), d = Math.round(d));
            a.save();
            var l = 0 < g ? 1 : -1,
                q = 0 < k ? 1 : -1;
            a.translate(f, d);
            1 === l && 1 === q || a.scale(l, q);
            a.rotate(this.k * l * q);
            f = 0 - this.Ab * la(g);
            d = 0 - this.Bb * la(k);
            c ? a.drawImage(e, b.uf, b.vf, b.width, b.height, f, d, la(g), la(k)) : a.drawImage(e,
                f, d, la(g), la(k));
            a.restore()
        }
    };
    c.oe = function(a) { this.jb(a) };
    c.jb = function(a) { a.Mb(this.sh);
        a.Je(this.opacity); var b = this.Ua,
            c = this.qb; if (this.b.Bc) { var e = Math.round(this.x) - this.x,
                f = Math.round(this.y) - this.y;
            b.Df ? a.Sc(c.Qa + e, c.Ra + f, c.ob + e, c.pb + f, c.fb + e, c.gb + f, c.cb + e, c.eb + f, b.Ok) : a.Kg(c.Qa + e, c.Ra + f, c.ob + e, c.pb + f, c.fb + e, c.gb + f, c.cb + e, c.eb + f) } else b.Df ? a.Sc(c.Qa, c.Ra, c.ob, c.pb, c.fb, c.gb, c.cb, c.eb, b.Ok) : a.Kg(c.Qa, c.Ra, c.ob, c.pb, c.fb, c.gb, c.cb, c.eb) };
    c.Sq = function(a) {
        var b = this.Ua,
            c, e;
        c = 0;
        for (e = b.Oj.length; c <
            e; c++)
            if (cb(a, b.Oj[c][0])) return c;
        return -1
    };
    c.Dj = function(a, b) { var c = this.Ua,
            e = c.Oj,
            f;
        G(a) ? f = this.Sq(a) : f = a - 1;
        f = Q(f); if (0 > f || f >= e.length) return b ? this.x : this.y; var d = (e[f][1] - c.Ab) * this.width,
            e = e[f][2],
            e = (e - c.Bb) * this.height,
            c = Math.cos(this.k);
        f = Math.sin(this.k); var g = d * c - e * f,
            e = e * c + d * f,
            d = g + this.x,
            e = e + this.y; return b ? d : e };
    var e = [],
        u = -2,
        g = [];
    n.prototype.Oo = function(a) {
        if (!a) return !1;
        var c = this.b,
            e = c.zj(),
            f = e.type,
            d = null;
        e.J.collmemory ? d = e.J.collmemory : (d = {}, e.J.collmemory = d);
        e.J.spriteCreatedDestroyCallback ||
            (e.J.spriteCreatedDestroyCallback = !0, c.gp(function(a) { var b = e.J.collmemory;
                a = a.uid; var c, f; for (c in b) b.hasOwnProperty(c) && (f = b[c], f[0] === a || f[1] === a) && (k(b[c]), delete b[c]) }));
        var q = f.V(),
            r = a.V(),
            q = q.Vb(),
            n, v, B, H, O, L, X, N = this.b.Wc,
            K = N - 1,
            w = c.Ya().hb;
        for (v = 0; v < q.length; v++) {
            B = q[v];
            r.ia ? (B.S(), this.b.dm(B.j, a, B.Y, g), n = g) : n = r.Vb();
            for (H = 0; H < n.length; H++) O = n[H], c.Ne(B, O) || c.vp(B, O) ? (L = b(d, B, O), L = !L || u < K, t(d, B, O, N), L && (c.yf(w.da), L = f.V(), X = a.V(), L.ia = !1, X.ia = !1, f === a ? (L.d.length = 2, L.d[0] = B, L.d[1] = O, f.sc()) :
                (L.d.length = 1, X.d.length = 1, L.d[0] = B, X.d[0] = O, f.sc(), a.sc()), w.Ng(), c.ld(w.da))) : l(d, B, O);
            V(g)
        }
        return !1
    };
    var v = new da,
        B = !1;
    new U(0, 0, 0, 0);
    f.finish = function(a) { if (B) { if (a) { var b = this.b.Ya().hb.gc;
                a = null.V(); var c = v.qd(),
                    e, f; if (a.ia) { a.ia = !1;
                    V(a.d);
                    e = 0; for (f = c.length; e < f; ++e) a.d[e] = c[e]; if (b)
                        for (V(a.O), e = 0, f = null.d.length; e < f; ++e) c = null.d[e], v.contains(c) || a.O.push(c) } else if (b)
                    for (b = a.d.length, e = 0, f = c.length; e < f; ++e) a.d[b + e] = c[e], Aa(a.O, c[e]);
                else xa(a.d, c);
                null.sc() }
            v.clear();
            B = !1 } };
    n.prototype.Ko =
        function(a) { return cb(this.Bl, a) };
    n.prototype.Lo = function() { return !0 };
    n.prototype.We = function() { return !0 };
    a.n = new n;
    a.ga = new function() {};
    a.ta = new function() {}
})();

function fc(d) { this.b = d }
(function() {
    function d() { return a.length ? a.pop() : {} }

    function n(b) { var d, c;
        d = 0; for (c = b.length; d < c; d++) a.push(b[d]);
        V(b) }

    function k(a) { return a.length && " " === a.charAt(a.length - 1) ? a.substring(0, a.length - 1) : a }

    function q() {}
    var t = fc.prototype;
    t.T = function() { t.ga.bp = function(a) { this.width !== a && (this.width = a, this.Pe = !0, this.L()) } };
    t.xa = function(a) { this.ja = a;
        this.b = a.b };
    var l = t.xa.prototype;
    l.T = function() {};
    l.ji = function() {
        if (!this.H) {
            var a, b, c;
            a = 0;
            for (b = this.d.length; a < b; a++) c = this.d[a], c.Qc = null, c.He = null,
                c.Kb = null
        }
    };
    t.ka = function(a) { this.type = a;
        this.b = a.b;
        this.kc ? V(this.Vd) : this.Vd = [];
        this.Pe = !0 };
    l = t.ka.prototype;
    l.T = function() {
        this.text = this.u[0];
        this.visible = 0 === this.u[1];
        this.font = this.u[2];
        this.color = this.u[3];
        this.Jh = this.u[4];
        this.Mi = this.u[5];
        this.gl = 0 === this.u[7];
        this.dk = this.Sh = this.width;
        this.Rh = this.height;
        this.fk = this.u[8];
        this.Bh = this.cf = "";
        this.Wn = this.Xn = this.Ig = 0;
        this.Zr();
        this.Kb = this.He = this.Qc = null;
        this.gn = !1;
        this.ug = this.b.Wc;
        this.kc ? this.de.set(0, 0, 1, 1) : this.de = new U(0, 0, 1, 1);
        this.b.p && this.b.Xg(this)
    };
    l.Zr = function() { var a = this.font.split(" "),
            b; for (b = 0; b < a.length; b++)
            if ("pt" === a[b].substr(a[b].length - 2, 2)) { this.Ig = parseInt(a[b].substr(0, a[b].length - 2));
                this.yk = Math.ceil(this.Ig / 72 * 96) + 4;
                0 < b && (this.Bh = a[b - 1]);
                this.cf = a[b + 1]; for (b += 2; b < a.length; b++) this.cf += " " + a[b]; break } };
    l.mb = function() { return { t: this.text, f: this.font, c: this.color, ha: this.Jh, va: this.Mi, wr: this.gl, lho: this.fk, fn: this.cf, fs: this.Bh, ps: this.Ig, pxh: this.yk, tw: this.Xn, th: this.Wn, lrt: this.ug } };
    l.Cb = function(a) {
        this.text =
            a.t;
        this.font = a.f;
        this.color = a.c;
        this.Jh = a.ha;
        this.Mi = a.va;
        this.gl = a.wr;
        this.fk = a.lho;
        this.cf = a.fn;
        this.Bh = a.fs;
        this.Ig = a.ps;
        this.yk = a.pxh;
        this.Xn = a.tw;
        this.Wn = a.th;
        this.ug = a.lrt;
        this.Pe = !0;
        this.dk = this.Sh = this.width;
        this.Rh = this.height
    };
    l.Yb = function() { if (this.b.p && this.Kb && 300 <= this.b.Wc - this.ug) { var a = this.j;
            this.S(); var b = this.Y; if (b.right < a.ba || b.bottom < a.ca || b.left > a.fa || b.top > a.ea) this.b.p.deleteTexture(this.Kb), this.Qc = this.He = this.Kb = null } };
    l.ae = function() {
        this.Qc = this.He = null;
        this.b.p &&
            this.Kb && this.b.p.deleteTexture(this.Kb);
        this.Kb = null
    };
    l.Fl = function() { this.font = this.Bh + " " + this.Ig.toString() + "pt " + this.cf;
        this.Pe = !0;
        this.b.Z = !0 };
    l.Tb = function(a, b) {
        a.font = this.font;
        a.textBaseline = "top";
        a.fillStyle = this.color;
        a.globalAlpha = b ? 1 : this.opacity;
        var c = 1;
        b && (c = Math.abs(this.j.zb()), a.save(), a.scale(c, c));
        if (this.Pe || this.width !== this.dk) this.type.ja.ep(this.text, this.Vd, a, this.width, this.gl), this.Pe = !1, this.dk = this.width;
        this.S();
        var c = b ? 0 : this.qb.Qa,
            e = b ? 0 : this.qb.Ra;
        this.b.Bc && (c = c +
            .5 | 0, e = e + .5 | 0);
        0 === this.k || b || (a.save(), a.translate(c, e), a.rotate(this.k), e = c = 0);
        var d = e + this.height,
            g = this.yk,
            g = g + this.fk,
            k, l;
        1 === this.Mi ? e += Math.max(this.height / 2 - this.Vd.length * g / 2, 0) : 2 === this.Mi && (e += Math.max(this.height - this.Vd.length * g - 2, 0));
        for (l = 0; l < this.Vd.length && !(k = c, 1 === this.Jh ? k = c + (this.width - this.Vd[l].width) / 2 : 2 === this.Jh && (k = c + (this.width - this.Vd[l].width)), a.fillText(this.Vd[l].text, k, e), e += g, e >= d - g); l++);
        (0 !== this.k || b) && a.restore();
        this.ug = this.b.Wc
    };
    l.jb = function(a) {
        if (!(1 > this.width ||
                1 > this.height)) {
            var b = this.Pe || this.gn;
            this.gn = !1;
            var c = this.j.zb(),
                e = this.j.Hb(),
                d = this.de,
                g = c * this.width,
                k = c * this.height,
                l = Math.ceil(g),
                q = Math.ceil(k),
                h = Math.abs(l),
                m = Math.abs(q),
                n = this.b.F / 2,
                t = this.b.D / 2;
            this.He || (this.Qc = document.createElement("canvas"), this.Qc.width = h, this.Qc.height = m, this.Sh = h, this.Rh = m, b = !0, this.He = this.Qc.getContext("2d"));
            if (h !== this.Sh || m !== this.Rh) this.Qc.width = h, this.Qc.height = m, this.Kb && (a.deleteTexture(this.Kb), this.Kb = null), b = !0;
            b && (this.He.clearRect(0, 0, h, m), this.Tb(this.He, !0), this.Kb || (this.Kb = a.Sb(h, m, this.b.wa, this.b.Ld)), a.Rs(this.Qc, this.Kb, this.b.Ld));
            this.Sh = h;
            this.Rh = m;
            a.Mb(this.Kb);
            a.Je(this.opacity);
            a.lc();
            a.translate(-n, -t);
            a.Zb();
            var z = this.qb,
                b = this.j.P(z.Qa, z.Ra, !0, !0),
                h = this.j.P(z.Qa, z.Ra, !1, !0),
                m = this.j.P(z.ob, z.pb, !0, !0),
                n = this.j.P(z.ob, z.pb, !1, !0),
                t = this.j.P(z.fb, z.gb, !0, !0),
                S = this.j.P(z.fb, z.gb, !1, !0),
                I = this.j.P(z.cb, z.eb, !0, !0),
                z = this.j.P(z.cb, z.eb, !1, !0);
            if (this.b.Bc || 0 === this.k && 0 === e) var J = (b + .5 | 0) - b,
                C = (h + .5 | 0) - h,
                b = b + J,
                h = h + C,
                m = m + J,
                n = n + C,
                t = t + J,
                S = S + C,
                I = I + J,
                z = z + C;
            0 === this.k && 0 === e ? (m = b + l, n = h, t = m, S = h + q, I = b, z = S, d.right = 1, d.bottom = 1) : (d.right = g / l, d.bottom = k / q);
            a.Sc(b, h, m, n, t, S, I, z, d);
            a.lc();
            a.scale(c, c);
            a.si(-this.j.Hb());
            a.translate((this.j.ba + this.j.fa) / -2, (this.j.ca + this.j.ea) / -2);
            a.Zb();
            this.ug = this.b.Wc
        }
    };
    var b = [];
    t.cp = function(a) {
        V(b);
        for (var d = "", c, e = 0; e < a.length;)
            if (c = a.charAt(e), "\n" === c) d.length && (b.push(d), d = ""), b.push("\n"), ++e;
            else if (" " === c || "\t" === c || "-" === c) {
            do d += a.charAt(e), e++; while (e < a.length && (" " === a.charAt(e) || "\t" ===
                    a.charAt(e)));
            b.push(d);
            d = ""
        } else e < a.length && (d += c, e++);
        d.length && b.push(d)
    };
    var a = [];
    t.ep = function(a, b, c, e, k) { if (a && a.length)
            if (2 >= e) n(b);
            else { if (100 >= a.length && -1 === a.indexOf("\n")) { var g = c.measureText(a).width; if (g <= e) { n(b);
                        b.push(d());
                        b[0].text = a;
                        b[0].width = g; return } }
                this.fp(a, b, c, e, k) }
        else n(b) };
    t.fp = function(f, l, c, e, q) {
        q && (this.cp(f), f = b);
        var g = "",
            n, t, p, h = 0;
        for (p = 0; p < f.length; p++) "\n" === f[p] ? (h >= l.length && l.push(d()), g = k(g), t = l[h], t.text = g, t.width = c.measureText(g).width, h++, g = "") : (n = g, g += f[p],
            t = c.measureText(g).width, t >= e && (h >= l.length && l.push(d()), n = k(n), t = l[h], t.text = n, t.width = c.measureText(n).width, h++, g = f[p], q || " " !== g || (g = "")));
        g.length && (h >= l.length && l.push(d()), g = k(g), t = l[h], t.text = g, t.width = c.measureText(g).width, h++);
        for (p = h; p < l.length; p++) a.push(l[p]);
        l.length = h
    };
    t.n = new function() {};
    q.prototype.tl = function(a) { ha(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
        a = a.toString();
        this.text !== a && (this.text = a, this.Pe = !0, this.b.Z = !0) };
    t.ga = new q;
    t.ta = new function() {}
})();

function gc(d) { this.b = d }
(function() {
    var d = gc.prototype;
    d.xa = function(d) { this.ja = d;
        this.b = d.b };
    var n = d.xa.prototype;
    n.T = function() { this.H || (this.Q = new Image, this.Q.Ml = this.Tk, this.b.oo(this.Q, this.Sk), this.oa = this.pattern = null) };
    n.ji = function() { this.H || (this.oa = null) };
    n.pk = function() { if (!this.H && this.d.length) { this.oa || (this.oa = this.b.p.Zh(this.Q, !0, this.b.wa, this.Uk)); var d, q;
            d = 0; for (q = this.d.length; d < q; d++) this.d[d].oa = this.oa } };
    n.gk = function() { this.H || this.oa || !this.b.p || (this.oa = this.b.p.Zh(this.Q, !0, this.b.wa, this.Uk)) };
    n.bl = function() { this.H || this.d.length || !this.oa || (this.b.p.deleteTexture(this.oa), this.oa = null) };
    n.vk = function(d) { d.drawImage(this.Q, 0, 0) };
    d.ka = function(d) { this.type = d;
        this.b = d.b };
    n = d.ka.prototype;
    n.T = function() { this.visible = 0 === this.u[0];
        this.de = new U(0, 0, 0, 0);
        this.mm = !1;
        this.Q = this.type.Q;
        this.b.p ? (this.type.gk(), this.oa = this.type.oa) : (this.type.pattern || (this.type.pattern = this.b.ra.createPattern(this.type.Q, "repeat")), this.pattern = this.type.pattern) };
    n.wd = function() { this.mm = !1;
        this.Q = this.type.Q };
    n.ae = function() { this.b.p && this.mm && this.oa && (this.b.p.deleteTexture(this.oa), this.oa = null) };
    n.Tb = function(d) { d.globalAlpha = this.opacity;
        d.save();
        d.fillStyle = this.pattern; var q = this.x,
            n = this.y;
        this.b.Bc && (q = Math.round(q), n = Math.round(n)); var l = -(this.Ab * this.width),
            b = -(this.Bb * this.height),
            a = l % this.Q.width,
            f = b % this.Q.height;
        0 > a && (a += this.Q.width);
        0 > f && (f += this.Q.height);
        d.translate(q, n);
        d.rotate(this.k);
        d.translate(a, f);
        d.fillRect(l - a, b - f, this.width, this.height);
        d.restore() };
    n.oe = function(d) { this.jb(d) };
    n.jb = function(d) { d.Mb(this.oa);
        d.Je(this.opacity); var q = this.de;
        q.right = this.width / this.Q.width;
        q.bottom = this.height / this.Q.height; var n = this.qb; if (this.b.Bc) { var l = Math.round(this.x) - this.x,
                b = Math.round(this.y) - this.y;
            d.Sc(n.Qa + l, n.Ra + b, n.ob + l, n.pb + b, n.fb + l, n.gb + b, n.cb + l, n.eb + b, q) } else d.Sc(n.Qa, n.Ra, n.ob, n.pb, n.fb, n.gb, n.cb, n.eb, q) };
    d.n = new function() {};
    d.ga = new function() {};
    d.ta = new function() {}
})();

function hc(d) { this.b = d }
(function() {
    function d() {}

    function n() {}

    function k() {}
    var q = hc.prototype;
    q.xa = function(d) { this.ja = d;
        this.b = d.b };
    q.xa.prototype.T = function() {};
    q.ka = function(d) { this.type = d;
        this.b = d.b };
    var t = q.ka.prototype;
    t.T = function() {
        this.b.W ? x("[Construct 2] Progress Bar plugin not supported on this platform - the object will not be created") : (this.i = document.createElement("progress"), this.value = this.u[0], this.max = this.u[1], 0 < this.max && 0 <= this.value && (this.i.max = this.max, this.i.value = this.value), this.i.id = this.u[4],
            this.i.title = this.u[2], jQuery(this.i).appendTo(this.b.Bd ? this.b.Bd : "body"), this.Aa = !1, 0 === this.u[3] && (jQuery(this.i).hide(), this.visible = !1, this.Aa = !0), this.i.onclick = function(d) { return function(b) { b.stopPropagation();
                    d.b.tb = !0;
                    d.b.trigger(hc.prototype.n.Ve, d);
                    d.b.tb = !1 } }(this), this.i.addEventListener("touchstart", function(d) { d.stopPropagation() }, !1), this.i.addEventListener("touchmove", function(d) { d.stopPropagation() }, !1), this.i.addEventListener("touchend", function(d) { d.stopPropagation() }, !1), jQuery(this.i).mousedown(function(d) { d.stopPropagation() }),
            jQuery(this.i).mouseup(function(d) { d.stopPropagation() }), this.Td = this.Ud = this.Od = this.Qd = this.Sd = this.Pd = 0, this.he(!0), this.b.Xg(this))
    };
    t.mb = function() { return { v: this.i.value, m: this.i.max } };
    t.Cb = function(d) { this.i.value = d.v;
        this.i.max = d.m };
    t.ae = function() { this.b.W || (jQuery(this.i).remove(), this.i = null) };
    t.Yb = function() { this.he() };
    t.he = function(d) {
        if (!this.b.W) {
            var b = this.j.P(this.x, this.y, !0),
                a = this.j.P(this.x, this.y, !1),
                f = this.j.P(this.x + this.width, this.y + this.height, !0),
                k = this.j.P(this.x + this.width,
                    this.y + this.height, !1),
                c = this.b.width / this.b.devicePixelRatio,
                e = this.b.height / this.b.devicePixelRatio;
            !this.visible || !this.j.visible || 0 >= f || 0 >= k || b >= c || a >= e ? (this.Aa || jQuery(this.i).hide(), this.Aa = !0) : (1 > b && (b = 1), 1 > a && (a = 1), f >= c && (f = c - 1), k >= e && (k = e - 1), c = window.innerWidth, e = window.innerHeight, d || this.Pd !== b || this.Sd !== a || this.Qd !== f || this.Od !== k || this.Ud !== c || this.Td !== e ? (this.Pd = b, this.Sd = a, this.Qd = f, this.Od = k, this.Ud = c, this.Td = e, this.Aa && (jQuery(this.i).show(), this.Aa = !1), d = Math.round(b) + jQuery(this.b.canvas).offset().left,
                c = Math.round(a) + jQuery(this.b.canvas).offset().top, jQuery(this.i).css("position", "absolute"), jQuery(this.i).offset({ left: d, top: c }), jQuery(this.i).width(Math.round(f - b)), jQuery(this.i).height(Math.round(k - a))) : this.Aa && (jQuery(this.i).show(), this.Aa = !1))
        }
    };
    t.Tb = function() {};
    t.jb = function() {};
    d.prototype.Ve = function() { return !0 };
    d.prototype.yo = function(d, b) { return this.W ? !1 : Sb(this.i.value, d, b) };
    q.n = new d;
    n.prototype.Ti = function(d) { this.b.W || (this.visible = 0 !== d) };
    n.prototype.Zo = function(d) {
        this.b.W ||
            (this.value = d, this.i.max = this.max, this.i.value = this.value)
    };
    q.ga = new n;
    k.prototype.To = function(d) { d.C(this.b.W ? 0 : this.i.value) };
    q.ta = new k
})();

function ic(d) { this.b = d }
(function() {
    function d() {}

    function n() {}

    function k() {}
    var q = ic.prototype;
    q.xa = function(d) { this.ja = d;
        this.b = d.b };
    q.xa.prototype.T = function() {};
    q.ka = function(d) { this.type = d;
        this.b = d.b };
    var t = q.ka.prototype;
    t.T = function() {
        this.b.W ? x("[Construct 2] Slider Bar plugin not supported on this platform - the object will not be created") : (this.i = document.createElement("input"), this.i.type = "range", this.i.max = this.u[2], this.i.min = this.u[1], this.i.step = this.u[3], this.i.value = this.u[0], this.i.disabled = 0 === this.u[6],
            this.i.id = this.u[7], this.i.title = this.u[4], jQuery(this.i).appendTo(this.b.Bd ? this.b.Bd : "body"), this.Aa = !1, 0 === this.u[5] && (jQuery(this.i).hide(), this.visible = !1, this.Aa = !0), this.i.onclick = function(d) { return function(b) { b.stopPropagation();
                    d.b.tb = !0;
                    d.b.trigger(ic.prototype.n.Ve, d);
                    d.b.tb = !1 } }(this), this.i.onchange = function(d) { return function() { d.b.tb = !0;
                    d.b.trigger(ic.prototype.n.No, d);
                    d.b.tb = !1 } }(this), this.i.addEventListener("touchstart", function(d) { d.stopPropagation() }, !1), this.i.addEventListener("touchmove",
                function(d) { d.stopPropagation() }, !1), this.i.addEventListener("touchend", function(d) { d.stopPropagation() }, !1), jQuery(this.i).mousedown(function(d) { d.stopPropagation() }), jQuery(this.i).mouseup(function(d) { d.stopPropagation() }), jQuery(this.i).keydown(function(d) { d.stopPropagation() }), jQuery(this.i).keyup(function(d) { d.stopPropagation() }), this.Td = this.Ud = this.Od = this.Qd = this.Sd = this.Pd = 0, this.he(!0), this.b.Xg(this))
    };
    t.mb = function() { return { v: this.i.value, mi: this.i.min, ma: this.i.max, s: this.i.step } };
    t.Cb =
        function(d) { this.i.min = d.mi;
            this.i.max = d.ma;
            this.i.step = d.s;
            this.i.value = d.v };
    t.ae = function() { this.b.W || (jQuery(this.i).remove(), this.i = null) };
    t.Yb = function() { this.he() };
    t.he = function(d) {
        if (!this.b.W) {
            var b = this.j.P(this.x, this.y, !0),
                a = this.j.P(this.x, this.y, !1),
                f = this.j.P(this.x + this.width, this.y + this.height, !0),
                k = this.j.P(this.x + this.width, this.y + this.height, !1),
                c = this.b.width / this.b.devicePixelRatio,
                e = this.b.height / this.b.devicePixelRatio;
            !this.visible || !this.j.visible || 0 >= f || 0 >= k || b >= c || a >= e ?
                (this.Aa || jQuery(this.i).hide(), this.Aa = !0) : (1 > b && (b = 1), 1 > a && (a = 1), f >= c && (f = c - 1), k >= e && (k = e - 1), c = window.innerWidth, e = window.innerHeight, d || this.Pd !== b || this.Sd !== a || this.Qd !== f || this.Od !== k || this.Ud !== c || this.Td !== e ? (this.Pd = b, this.Sd = a, this.Qd = f, this.Od = k, this.Ud = c, this.Td = e, this.Aa && (jQuery(this.i).show(), this.Aa = !1), d = Math.round(b) + jQuery(this.b.canvas).offset().left, c = Math.round(a) + jQuery(this.b.canvas).offset().top, jQuery(this.i).css("position", "absolute"), jQuery(this.i).offset({ left: d, top: c }),
                    jQuery(this.i).width(Math.round(f - b)), jQuery(this.i).height(Math.round(k - a))) : this.Aa && (jQuery(this.i).show(), this.Aa = !1))
        }
    };
    t.Tb = function() {};
    t.jb = function() {};
    d.prototype.Ve = function() { return !0 };
    d.prototype.No = function() { return !0 };
    q.n = new d;
    n.prototype.Ti = function(d) { this.b.W || (this.visible = 0 !== d) };
    q.ga = new n;
    k.prototype.dp = function(d) { d.C(this.b.W ? 0 : parseFloat(this.i.value) || 0) };
    q.ta = new k
})();

function jc(d) { this.b = d }
(function() {
    var d = jc.prototype;
    d.xa = function(d) { this.behavior = d;
        this.b = d.b };
    d.xa.prototype.T = function() {};
    d.ka = function(d, q) { this.type = d;
        this.behavior = d.behavior;
        this.B = q;
        this.b = d.b };
    var n = d.ka.prototype;
    n.T = function() { this.zl = this.u[0];
        this.Al = this.u[1];
        this.lp = this.u[2];
        this.kp = this.u[3];
        this.B.S();
        this.hl = this.B.Y.left;
        this.kl = this.B.Y.top;
        this.il = this.b.Ea - this.B.Y.left;
        this.jl = this.b.Da - this.B.Y.top;
        this.Bk = this.b.Ea - this.B.Y.right;
        this.Zi = this.b.Da - this.B.Y.bottom;
        this.enabled = 0 !== this.u[4] };
    n.mb = function() { return { xleft: this.hl, ytop: this.kl, xright: this.il, ybottom: this.jl, rdiff: this.Bk, bdiff: this.Zi, enabled: this.enabled } };
    n.Cb = function(d) { this.hl = d.xleft;
        this.kl = d.ytop;
        this.il = d.xright;
        this.jl = d.ybottom;
        this.Bk = d.rdiff;
        this.Zi = d.bdiff;
        this.enabled = d.enabled };
    n.Yb = function() {
        if (this.enabled) {
            var d, q = this.B.j,
                n = this.B,
                l = this.B.Y;
            0 === this.zl ? (n.S(), d = q.ba + this.hl - l.left, 0 !== d && (n.x += d, n.L())) : 1 === this.zl && (n.S(), d = q.fa - this.il - l.left, 0 !== d && (n.x += d, n.L()));
            0 === this.Al ? (n.S(), d = q.ca + this.kl -
                l.top, 0 !== d && (n.y += d, n.L())) : 1 === this.Al && (n.S(), d = q.ea - this.jl - l.top, 0 !== d && (n.y += d, n.L()));
            1 === this.lp && (n.S(), d = q.fa - this.Bk - l.right, 0 !== d && (n.width += d, 0 > n.width && (n.width = 0), n.L()));
            1 === this.kp && (n.S(), d = q.ea - this.Zi - l.bottom, 0 !== d && (n.height += d, 0 > n.height && (n.height = 0), n.L()))
        }
    };
    d.n = new function() {};
    d.ga = new function() {};
    d.ta = new function() {}
})();

function kc(d) { this.b = d }
(function() {
    function d() {}
    var n = kc.prototype;
    n.xa = function(d) { this.behavior = d;
        this.b = d.b };
    n.xa.prototype.T = function() {};
    n.ka = function(d, k) { this.type = d;
        this.behavior = d.behavior;
        this.B = k;
        this.b = d.b };
    var k = n.ka.prototype;
    k.T = function() { var d = this.u[0];
        this.fh = this.u[1];
        this.Eh = this.u[2];
        this.qp = 0 !== this.u[3];
        this.Lk = 0 !== this.u[4];
        this.Wa = Math.cos(this.B.k) * d;
        this.La = Math.sin(this.B.k) * d;
        this.Th = this.B.x;
        this.Uh = this.B.y;
        this.mf = this.B.k;
        this.Hi = 0;
        this.enabled = 0 !== this.u[5] };
    k.mb = function() {
        return {
            acc: this.fh,
            g: this.Eh,
            dx: this.Wa,
            dy: this.La,
            lx: this.Th,
            ly: this.Uh,
            lka: this.mf,
            t: this.Hi,
            e: this.enabled
        }
    };
    k.Cb = function(d) { this.fh = d.acc;
        this.Eh = d.g;
        this.Wa = d.dx;
        this.La = d.dy;
        this.Th = d.lx;
        this.Uh = d.ly;
        this.mf = d.lka;
        this.Hi = d.t;
        this.enabled = d.e };
    k.Yb = function() {
        if (this.enabled) {
            var d = this.b.Aj(this.B),
                k, l;
            this.B.k !== this.mf && (this.Lk && (k = Ma(0, 0, this.Wa, this.La), this.Wa = Math.cos(this.B.k) * k, this.La = Math.sin(this.B.k) * k), this.mf = this.B.k);
            0 !== this.fh && (k = Ma(0, 0, this.Wa, this.La), l = 0 === this.Wa && 0 === this.La ? this.B.k :
                Ia(0, 0, this.Wa, this.La), k += this.fh * d, 0 > k && (k = 0), this.Wa = Math.cos(l) * k, this.La = Math.sin(l) * k);
            0 !== this.Eh && (this.La += this.Eh * d);
            this.Th = this.B.x;
            this.Uh = this.B.y;
            if (0 !== this.Wa || 0 !== this.La)
                if (this.B.x += this.Wa * d, this.B.y += this.La * d, this.Hi += Ma(0, 0, this.Wa * d, this.La * d), this.Lk && (this.B.k = Ia(0, 0, this.Wa, this.La), this.B.L(), this.mf = this.B.k), this.B.L(), this.qp && (k = this.b.Oe(this.B))) this.b.rs(this.B, k), k = Ma(0, 0, this.Wa, this.La), l = this.b.tp(this.B, this.Th, this.Uh), this.Wa = Math.cos(l) * k, this.La = Math.sin(l) *
                    k, this.B.x += this.Wa * d, this.B.y += this.La * d, this.B.L(), this.Lk && (this.mf = this.B.k = l, this.B.L()), this.b.os(this.B, this.Wa / k, this.La / k, Math.max(2.5 * k * d, 30)) || this.b.qs(this.B)
        }
    };
    n.n = new function() {};
    d.prototype.Vo = function(d) { d = W(d); var k = Ma(0, 0, this.Wa, this.La);
        this.Wa = Math.cos(d) * k;
        this.La = Math.sin(d) * k };
    n.ga = new d;
    n.ta = new function() {}
})();

function lc(d) { this.b = d;
    this.Nk = this.yi = this.Sg = this.Mk = 0 }
(function() {
    var d = lc.prototype;
    d.xa = function(d) { this.behavior = d;
        this.b = d.b };
    d.xa.prototype.T = function() {};
    d.ka = function(d, n) { this.type = d;
        this.behavior = d.behavior;
        this.B = n;
        this.b = d.b };
    var n = d.ka.prototype;
    n.T = function() { this.enabled = 0 !== this.u[0] };
    n.mb = function() { return { smg: this.behavior.Mk, ss: this.behavior.Sg, se: this.behavior.yi, smd: this.behavior.Nk } };
    n.Cb = function(d) { this.behavior.Mk = d.smg;
        this.behavior.Sg = d.ss;
        this.behavior.yi = d.se;
        this.behavior.Nk = d.smd };
    n.Yb = function() {};
    n.Vk = function() {
        if (this.enabled) {
            var d =
                this.behavior.gi.qd(),
                n = 0,
                t = 0,
                l, b, a, f = 0;
            l = 0;
            for (b = d.length; l < b; l++) { a: { a = d[l]; for (var r = void 0, c = void 0, e = void 0, r = 0, c = a.G.length; r < c; ++r)
                        if (e = a.G[r], e.behavior instanceof lc) { a = e; break a }
                    a = null }
                a && a.enabled && (n += d[l].x, t += d[l].y, ++f) }
            d = this.B.j.Oa;
            b = this.b.Jb.qa;
            a = l = 0;
            b >= this.behavior.Sg && b < this.behavior.yi && (l = this.behavior.Mk * Math.min(this.b.Gf, 1), 0 === this.behavior.Nk && (l *= 1 - (b - this.behavior.Sg) / (this.behavior.yi - this.behavior.Sg)), b = Math.random() * Math.PI * 2, a = Math.random() * l, l = Math.cos(b) * a, a *=
                Math.sin(b));
            d.Jk(n / f + l);
            d.Kk(t / f + a)
        }
    };
    d.ga = new function() {}
})();

function ac() {
    return [dc, cc, ec, bc, ic, fc, hc, gc, lc, kc, jc, ec.prototype.n.ml, Z.prototype.n.zo, Z.prototype.ga.Ao, bc.prototype.ta.ul, bc.prototype.ta.wl, kc.prototype.ga.Vo, Z.prototype.ga.ro, Z.prototype.ga.$o, Z.prototype.n.ol, bc.prototype.ga.Bo, cc.prototype.ga.CallFunction, Z.prototype.n.Do, hc.prototype.ga.Zo, hc.prototype.ta.To, fc.prototype.ga.tl, Z.prototype.ta.floor, Z.prototype.n.Eo, bc.prototype.n.xo, bc.prototype.ga.Yo, Z.prototype.ta.cos, Z.prototype.ta.sin, bc.prototype.ga.qo, bc.prototype.n.Oo, hc.prototype.n.yo,
        Z.prototype.ga.Xo, cc.prototype.n.eh, Z.prototype.ta.random, bc.prototype.ga.Wo, Z.prototype.n.Fo, ic.prototype.ta.dp, dc.prototype.n.Ve, Z.prototype.ga.Uo
    ]
};