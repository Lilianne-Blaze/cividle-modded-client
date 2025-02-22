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
      (e._sentryDebugIds[n] = "244e1787-6f9a-5881-a923-58e3acbd6a51"));
  } catch (e) {}
})();
var i = (c, e, t) =>
  new Promise((r, a) => {
    var p = (s) => {
        try {
          n(t.next(s));
        } catch (l) {
          a(l);
        }
      },
      o = (s) => {
        try {
          n(t.throw(s));
        } catch (l) {
          a(l);
        }
      },
      n = (s) => (s.done ? r(s.value) : Promise.resolve(s.value).then(p, o));
    n((t = t.apply(c, e)).next());
  });
import { W as y } from "./index-ecbe5e3b.js";
class m extends y {
  constructor() {
    super(...arguments), (this.group = "CapacitorStorage");
  }
  configure(t) {
    return i(this, arguments, function* ({ group: e }) {
      typeof e == "string" && (this.group = e);
    });
  }
  get(e) {
    return i(this, null, function* () {
      return { value: this.impl.getItem(this.applyPrefix(e.key)) };
    });
  }
  set(e) {
    return i(this, null, function* () {
      this.impl.setItem(this.applyPrefix(e.key), e.value);
    });
  }
  remove(e) {
    return i(this, null, function* () {
      this.impl.removeItem(this.applyPrefix(e.key));
    });
  }
  keys() {
    return i(this, null, function* () {
      return {
        keys: this.rawKeys().map((t) => t.substring(this.prefix.length)),
      };
    });
  }
  clear() {
    return i(this, null, function* () {
      for (const e of this.rawKeys()) this.impl.removeItem(e);
    });
  }
  migrate() {
    return i(this, null, function* () {
      var e;
      const t = [],
        r = [],
        a = "_cap_",
        p = Object.keys(this.impl).filter((o) => o.indexOf(a) === 0);
      for (const o of p) {
        const n = o.substring(a.length),
          s = (e = this.impl.getItem(o)) !== null && e !== void 0 ? e : "",
          { value: l } = yield this.get({ key: n });
        typeof l == "string"
          ? r.push(n)
          : (yield this.set({ key: n, value: s }), t.push(n));
      }
      return { migrated: t, existing: r };
    });
  }
  removeOld() {
    return i(this, null, function* () {
      const e = "_cap_",
        t = Object.keys(this.impl).filter((r) => r.indexOf(e) === 0);
      for (const r of t) this.impl.removeItem(r);
    });
  }
  get impl() {
    return window.localStorage;
  }
  get prefix() {
    return this.group === "NativeStorage" ? "" : `${this.group}.`;
  }
  rawKeys() {
    return Object.keys(this.impl).filter((e) => e.indexOf(this.prefix) === 0);
  }
  applyPrefix(e) {
    return this.prefix + e;
  }
}
export { m as PreferencesWeb };
//# sourceMappingURL=web-0bd22094.js.map

//# debugId=244e1787-6f9a-5881-a923-58e3acbd6a51
