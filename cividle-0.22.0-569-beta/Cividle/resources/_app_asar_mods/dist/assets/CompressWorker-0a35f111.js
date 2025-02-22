!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      n = new Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = "decc3236-820e-58b2-b3b8-8bd910ef04ed"));
  } catch (e) {}
})();
var Br = (A, B, j) =>
  new Promise((ar, d) => {
    var lr = (W) => {
        try {
          er(j.next(W));
        } catch (rr) {
          d(rr);
        }
      },
      tr = (W) => {
        try {
          er(j.throw(W));
        } catch (rr) {
          d(rr);
        }
      },
      er = (W) =>
        W.done ? ar(W.value) : Promise.resolve(W.value).then(lr, tr);
    er((j = j.apply(A, B)).next());
  });
(function () {
  "use strict";
  var A = Uint8Array,
    B = Uint16Array,
    j = Int32Array,
    ar = new A([
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5,
      5, 5, 5, 0, 0, 0, 0,
    ]),
    d = new A([
      0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10,
      11, 11, 12, 12, 13, 13, 0, 0,
    ]),
    lr = new A([
      16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
    ]),
    tr = function (r, a) {
      for (var e = new B(31), n = 0; n < 31; ++n) e[n] = a += 1 << r[n - 1];
      for (var f = new j(e[30]), n = 1; n < 30; ++n)
        for (var v = e[n]; v < e[n + 1]; ++v) f[v] = ((v - e[n]) << 5) | n;
      return { b: e, r: f };
    },
    er = tr(ar, 2),
    W = er.b,
    rr = er.r;
  (W[28] = 258), (rr[258] = 28);
  for (
    var Tr = tr(d, 0), Ir = Tr.b, yr = Tr.r, br = new B(32768), t = 0;
    t < 32768;
    ++t
  ) {
    var L = ((t & 43690) >> 1) | ((t & 21845) << 1);
    (L = ((L & 52428) >> 2) | ((L & 13107) << 2)),
      (L = ((L & 61680) >> 4) | ((L & 3855) << 4)),
      (br[t] = (((L & 65280) >> 8) | ((L & 255) << 8)) >> 1);
  }
  for (
    var X = function (r, a, e) {
        for (var n = r.length, f = 0, v = new B(a); f < n; ++f)
          r[f] && ++v[r[f] - 1];
        var c = new B(a);
        for (f = 1; f < a; ++f) c[f] = (c[f - 1] + v[f - 1]) << 1;
        var w;
        if (e) {
          w = new B(1 << a);
          var g = 15 - a;
          for (f = 0; f < n; ++f)
            if (r[f])
              for (
                var x = (f << 4) | r[f],
                  l = a - r[f],
                  i = c[r[f] - 1]++ << l,
                  u = i | ((1 << l) - 1);
                i <= u;
                ++i
              )
                w[br[i] >> g] = x;
        } else
          for (w = new B(n), f = 0; f < n; ++f)
            r[f] && (w[f] = br[c[r[f] - 1]++] >> (15 - r[f]));
        return w;
      },
      m = new A(288),
      t = 0;
    t < 144;
    ++t
  )
    m[t] = 8;
  for (var t = 144; t < 256; ++t) m[t] = 9;
  for (var t = 256; t < 280; ++t) m[t] = 7;
  for (var t = 280; t < 288; ++t) m[t] = 8;
  for (var ir = new A(32), t = 0; t < 32; ++t) ir[t] = 5;
  var Or = X(m, 9, 0),
    Dr = X(m, 9, 1),
    Gr = X(ir, 5, 0),
    Hr = X(ir, 5, 1),
    kr = function (r) {
      for (var a = r[0], e = 1; e < r.length; ++e) r[e] > a && (a = r[e]);
      return a;
    },
    R = function (r, a, e) {
      var n = (a / 8) | 0;
      return ((r[n] | (r[n + 1] << 8)) >> (a & 7)) & e;
    },
    sr = function (r, a) {
      var e = (a / 8) | 0;
      return (r[e] | (r[e + 1] << 8) | (r[e + 2] << 16)) >> (a & 7);
    },
    xr = function (r) {
      return ((r + 7) / 8) | 0;
    },
    Cr = function (r, a, e) {
      return (
        (a == null || a < 0) && (a = 0),
        (e == null || e > r.length) && (e = r.length),
        new A(r.subarray(a, e))
      );
    },
    Jr = [
      "unexpected EOF",
      "invalid block type",
      "invalid length/literal",
      "invalid distance",
      "stream finished",
      "no stream handler",
      ,
      "no callback",
      "invalid UTF-8 data",
      "extra field too long",
      "date not in range 1980-2099",
      "filename too long",
      "stream finishing",
      "invalid zip data",
    ],
    Z = function (r, a, e) {
      var n = new Error(a || Jr[r]);
      if (
        ((n.code = r),
        Error.captureStackTrace && Error.captureStackTrace(n, Z),
        !e)
      )
        throw n;
      return n;
    },
    Kr = function (r, a, e, n) {
      var f = r.length,
        v = n ? n.length : 0;
      if (!f || (a.f && !a.l)) return e || new A(0);
      var c = !e,
        w = c || a.i != 2,
        g = a.i;
      c && (e = new A(f * 3));
      var x = function (hr) {
          var wr = e.length;
          if (hr > wr) {
            var vr = new A(Math.max(wr * 2, hr));
            vr.set(e), (e = vr);
          }
        },
        l = a.f || 0,
        i = a.p || 0,
        u = a.b || 0,
        M = a.l,
        z = a.d,
        b = a.m,
        D = a.n,
        V = f * 8;
      do {
        if (!M) {
          l = R(r, i, 1);
          var J = R(r, i + 1, 3);
          if (((i += 3), J))
            if (J == 1) (M = Dr), (z = Hr), (b = 9), (D = 5);
            else if (J == 2) {
              var O = R(r, i, 31) + 257,
                T = R(r, i + 10, 15) + 4,
                h = O + R(r, i + 5, 31) + 1;
              i += 14;
              for (var o = new A(h), y = new A(19), F = 0; F < T; ++F)
                y[lr[F]] = R(r, i + F * 3, 7);
              i += T * 3;
              for (
                var q = kr(y), p = (1 << q) - 1, K = X(y, q, 1), F = 0;
                F < h;

              ) {
                var G = K[R(r, i, p)];
                i += G & 15;
                var S = G >> 4;
                if (S < 16) o[F++] = S;
                else {
                  var C = 0,
                    k = 0;
                  for (
                    S == 16
                      ? ((k = 3 + R(r, i, 3)), (i += 2), (C = o[F - 1]))
                      : S == 17
                      ? ((k = 3 + R(r, i, 7)), (i += 3))
                      : S == 18 && ((k = 11 + R(r, i, 127)), (i += 7));
                    k--;

                  )
                    o[F++] = C;
                }
              }
              var H = o.subarray(0, O),
                E = o.subarray(O);
              (b = kr(H)), (D = kr(E)), (M = X(H, b, 1)), (z = X(E, D, 1));
            } else Z(1);
          else {
            var S = xr(i) + 4,
              I = r[S - 4] | (r[S - 3] << 8),
              U = S + I;
            if (U > f) {
              g && Z(0);
              break;
            }
            w && x(u + I),
              e.set(r.subarray(S, U), u),
              (a.b = u += I),
              (a.p = i = U * 8),
              (a.f = l);
            continue;
          }
          if (i > V) {
            g && Z(0);
            break;
          }
        }
        w && x(u + 131072);
        for (var ur = (1 << b) - 1, Q = (1 << D) - 1, _ = i; ; _ = i) {
          var C = M[sr(r, i) & ur],
            N = C >> 4;
          if (((i += C & 15), i > V)) {
            g && Z(0);
            break;
          }
          if ((C || Z(2), N < 256)) e[u++] = N;
          else if (N == 256) {
            (_ = i), (M = null);
            break;
          } else {
            var P = N - 254;
            if (N > 264) {
              var F = N - 257,
                s = ar[F];
              (P = R(r, i, (1 << s) - 1) + W[F]), (i += s);
            }
            var Y = z[sr(r, i) & Q],
              nr = Y >> 4;
            Y || Z(3), (i += Y & 15);
            var E = Ir[nr];
            if (nr > 3) {
              var s = d[nr];
              (E += sr(r, i) & ((1 << s) - 1)), (i += s);
            }
            if (i > V) {
              g && Z(0);
              break;
            }
            w && x(u + 131072);
            var fr = u + P;
            if (u < E) {
              var gr = v - E,
                Mr = Math.min(E, fr);
              for (gr + u < 0 && Z(3); u < Mr; ++u) e[u] = n[gr + u];
            }
            for (; u < fr; ++u) e[u] = e[u - E];
          }
        }
        (a.l = M),
          (a.p = _),
          (a.b = u),
          (a.f = l),
          M && ((l = 1), (a.m = b), (a.d = z), (a.n = D));
      } while (!l);
      return u != e.length && c ? Cr(e, 0, u) : e.subarray(0, u);
    },
    $ = function (r, a, e) {
      e <<= a & 7;
      var n = (a / 8) | 0;
      (r[n] |= e), (r[n + 1] |= e >> 8);
    },
    or = function (r, a, e) {
      e <<= a & 7;
      var n = (a / 8) | 0;
      (r[n] |= e), (r[n + 1] |= e >> 8), (r[n + 2] |= e >> 16);
    },
    Fr = function (r, a) {
      for (var e = [], n = 0; n < r.length; ++n)
        r[n] && e.push({ s: n, f: r[n] });
      var f = e.length,
        v = e.slice();
      if (!f) return { t: qr, l: 0 };
      if (f == 1) {
        var c = new A(e[0].s + 1);
        return (c[e[0].s] = 1), { t: c, l: 1 };
      }
      e.sort(function (U, O) {
        return U.f - O.f;
      }),
        e.push({ s: -1, f: 25001 });
      var w = e[0],
        g = e[1],
        x = 0,
        l = 1,
        i = 2;
      for (e[0] = { s: -1, f: w.f + g.f, l: w, r: g }; l != f - 1; )
        (w = e[e[x].f < e[i].f ? x++ : i++]),
          (g = e[x != l && e[x].f < e[i].f ? x++ : i++]),
          (e[l++] = { s: -1, f: w.f + g.f, l: w, r: g });
      for (var u = v[0].s, n = 1; n < f; ++n) v[n].s > u && (u = v[n].s);
      var M = new B(u + 1),
        z = Ar(e[l - 1], M, 0);
      if (z > a) {
        var n = 0,
          b = 0,
          D = z - a,
          V = 1 << D;
        for (
          v.sort(function (O, T) {
            return M[T.s] - M[O.s] || O.f - T.f;
          });
          n < f;
          ++n
        ) {
          var J = v[n].s;
          if (M[J] > a) (b += V - (1 << (z - M[J]))), (M[J] = a);
          else break;
        }
        for (b >>= D; b > 0; ) {
          var S = v[n].s;
          M[S] < a ? (b -= 1 << (a - M[S]++ - 1)) : ++n;
        }
        for (; n >= 0 && b; --n) {
          var I = v[n].s;
          M[I] == a && (--M[I], ++b);
        }
        z = a;
      }
      return { t: new A(M), l: z };
    },
    Ar = function (r, a, e) {
      return r.s == -1
        ? Math.max(Ar(r.l, a, e + 1), Ar(r.r, a, e + 1))
        : (a[r.s] = e);
    },
    Er = function (r) {
      for (var a = r.length; a && !r[--a]; );
      for (
        var e = new B(++a),
          n = 0,
          f = r[0],
          v = 1,
          c = function (g) {
            e[n++] = g;
          },
          w = 1;
        w <= a;
        ++w
      )
        if (r[w] == f && w != a) ++v;
        else {
          if (!f && v > 2) {
            for (; v > 138; v -= 138) c(32754);
            v > 2 &&
              (c(v > 10 ? ((v - 11) << 5) | 28690 : ((v - 3) << 5) | 12305),
              (v = 0));
          } else if (v > 3) {
            for (c(f), --v; v > 6; v -= 6) c(8304);
            v > 2 && (c(((v - 3) << 5) | 8208), (v = 0));
          }
          for (; v--; ) c(f);
          (v = 1), (f = r[w]);
        }
      return { c: e.subarray(0, n), n: a };
    },
    cr = function (r, a) {
      for (var e = 0, n = 0; n < a.length; ++n) e += r[n] * a[n];
      return e;
    },
    zr = function (r, a, e) {
      var n = e.length,
        f = xr(a + 2);
      (r[f] = n & 255),
        (r[f + 1] = n >> 8),
        (r[f + 2] = r[f] ^ 255),
        (r[f + 3] = r[f + 1] ^ 255);
      for (var v = 0; v < n; ++v) r[f + v + 4] = e[v];
      return (f + 4 + n) * 8;
    },
    Ur = function (r, a, e, n, f, v, c, w, g, x, l) {
      $(a, l++, e), ++f[256];
      for (
        var i = Fr(f, 15),
          u = i.t,
          M = i.l,
          z = Fr(v, 15),
          b = z.t,
          D = z.l,
          V = Er(u),
          J = V.c,
          S = V.n,
          I = Er(b),
          U = I.c,
          O = I.n,
          T = new B(19),
          h = 0;
        h < J.length;
        ++h
      )
        ++T[J[h] & 31];
      for (var h = 0; h < U.length; ++h) ++T[U[h] & 31];
      for (
        var o = Fr(T, 7), y = o.t, F = o.l, q = 19;
        q > 4 && !y[lr[q - 1]];
        --q
      );
      var p = (x + 5) << 3,
        K = cr(f, m) + cr(v, ir) + c,
        G =
          cr(f, u) +
          cr(v, b) +
          c +
          14 +
          3 * q +
          cr(T, y) +
          2 * T[16] +
          3 * T[17] +
          7 * T[18];
      if (g >= 0 && p <= K && p <= G) return zr(a, l, r.subarray(g, g + x));
      var C, k, H, E;
      if (($(a, l, 1 + (G < K)), (l += 2), G < K)) {
        (C = X(u, M, 0)), (k = u), (H = X(b, D, 0)), (E = b);
        var ur = X(y, F, 0);
        $(a, l, S - 257), $(a, l + 5, O - 1), $(a, l + 10, q - 4), (l += 14);
        for (var h = 0; h < q; ++h) $(a, l + 3 * h, y[lr[h]]);
        l += 3 * q;
        for (var Q = [J, U], _ = 0; _ < 2; ++_)
          for (var N = Q[_], h = 0; h < N.length; ++h) {
            var P = N[h] & 31;
            $(a, l, ur[P]),
              (l += y[P]),
              P > 15 && ($(a, l, (N[h] >> 5) & 127), (l += N[h] >> 12));
          }
      } else (C = Or), (k = m), (H = Gr), (E = ir);
      for (var h = 0; h < w; ++h) {
        var s = n[h];
        if (s > 255) {
          var P = (s >> 18) & 31;
          or(a, l, C[P + 257]),
            (l += k[P + 257]),
            P > 7 && ($(a, l, (s >> 23) & 31), (l += ar[P]));
          var Y = s & 31;
          or(a, l, H[Y]),
            (l += E[Y]),
            Y > 3 && (or(a, l, (s >> 5) & 8191), (l += d[Y]));
        } else or(a, l, C[s]), (l += k[s]);
      }
      return or(a, l, C[256]), l + k[256];
    },
    Nr = new j([
      65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632,
    ]),
    qr = new A(0),
    Pr = function (r, a, e, n, f, v) {
      var c = v.z || r.length,
        w = new A(n + c + 5 * (1 + Math.ceil(c / 7e3)) + f),
        g = w.subarray(n, w.length - f),
        x = v.l,
        l = (v.r || 0) & 7;
      if (a) {
        l && (g[0] = v.r >> 3);
        for (
          var i = Nr[a - 1],
            u = i >> 13,
            M = i & 8191,
            z = (1 << e) - 1,
            b = v.p || new B(32768),
            D = v.h || new B(z + 1),
            V = Math.ceil(e / 3),
            J = 2 * V,
            S = function (Sr) {
              return (r[Sr] ^ (r[Sr + 1] << V) ^ (r[Sr + 2] << J)) & z;
            },
            I = new j(25e3),
            U = new B(288),
            O = new B(32),
            T = 0,
            h = 0,
            o = v.i || 0,
            y = 0,
            F = v.w || 0,
            q = 0;
          o + 2 < c;
          ++o
        ) {
          var p = S(o),
            K = o & 32767,
            G = D[p];
          if (((b[K] = G), (D[p] = K), F <= o)) {
            var C = c - o;
            if ((T > 7e3 || y > 24576) && (C > 423 || !x)) {
              (l = Ur(r, g, 0, I, U, O, h, y, q, o - q, l)),
                (y = T = h = 0),
                (q = o);
              for (var k = 0; k < 286; ++k) U[k] = 0;
              for (var k = 0; k < 30; ++k) O[k] = 0;
            }
            var H = 2,
              E = 0,
              ur = M,
              Q = (K - G) & 32767;
            if (C > 2 && p == S(o - Q))
              for (
                var _ = Math.min(u, C) - 1,
                  N = Math.min(32767, o),
                  P = Math.min(258, C);
                Q <= N && --ur && K != G;

              ) {
                if (r[o + H] == r[o + H - Q]) {
                  for (var s = 0; s < P && r[o + s] == r[o + s - Q]; ++s);
                  if (s > H) {
                    if (((H = s), (E = Q), s > _)) break;
                    for (
                      var Y = Math.min(Q, s - 2), nr = 0, k = 0;
                      k < Y;
                      ++k
                    ) {
                      var fr = (o - Q + k) & 32767,
                        gr = b[fr],
                        Mr = (fr - gr) & 32767;
                      Mr > nr && ((nr = Mr), (G = fr));
                    }
                  }
                }
                (K = G), (G = b[K]), (Q += (K - G) & 32767);
              }
            if (E) {
              I[y++] = 268435456 | (rr[H] << 18) | yr[E];
              var hr = rr[H] & 31,
                wr = yr[E] & 31;
              (h += ar[hr] + d[wr]), ++U[257 + hr], ++O[wr], (F = o + H), ++T;
            } else (I[y++] = r[o]), ++U[r[o]];
          }
        }
        for (o = Math.max(o, F); o < c; ++o) (I[y++] = r[o]), ++U[r[o]];
        (l = Ur(r, g, x, I, U, O, h, y, q, o - q, l)),
          x ||
            ((v.r = (l & 7) | (g[(l / 8) | 0] << 3)),
            (l -= 7),
            (v.h = D),
            (v.p = b),
            (v.i = o),
            (v.w = F));
      } else {
        for (var o = v.w || 0; o < c + x; o += 65535) {
          var vr = o + 65535;
          vr >= c && ((g[(l / 8) | 0] = x), (vr = c)),
            (l = zr(g, l + 1, r.subarray(o, vr)));
        }
        v.i = c;
      }
      return Cr(w, 0, n + xr(l) + f);
    },
    Qr = function (r, a, e, n, f) {
      if (!f && ((f = { l: 1 }), a.dictionary)) {
        var v = a.dictionary.subarray(-32768),
          c = new A(v.length + r.length);
        c.set(v), c.set(r, v.length), (r = c), (f.w = v.length);
      }
      return Pr(
        r,
        a.level == null ? 6 : a.level,
        a.mem == null
          ? f.l
            ? Math.ceil(Math.max(8, Math.min(13, Math.log(r.length))) * 1.5)
            : 20
          : 12 + a.mem,
        e,
        n,
        f
      );
    };
  function Rr(r, a) {
    return Qr(r, a || {}, 0, 0);
  }
  function Vr(r, a) {
    return Kr(r, { i: 2 }, a && a.out, a && a.dictionary);
  }
  var Wr = typeof TextDecoder != "undefined" && new TextDecoder(),
    Xr = 0;
  try {
    Wr.decode(qr, { stream: !0 }), (Xr = 1);
  } catch (r) {}
  onmessage = (r) =>
    Br(this, null, function* () {
      switch (r.data.op) {
        case "compress": {
          const a = Rr(r.data.buffer);
          postMessage({ id: r.data.id, buffer: a }, [a.buffer]);
          break;
        }
        case "decompress": {
          const a = Vr(r.data.buffer);
          postMessage({ id: r.data.id, buffer: a }, [a.buffer]);
          break;
        }
      }
    });
})();
//# sourceMappingURL=CompressWorker-0a35f111.js.map

//# debugId=decc3236-820e-58b2-b3b8-8bd910ef04ed
