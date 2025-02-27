/* Third-party software licenses can be found at licenses.txt */
var CLSTAMP = "7175736";
!(function (e) {
  function t(t) {
    for (
      var n, i, o = t[0], c = t[1], l = t[2], u = 0, m = [];
      u < o.length;
      u++
    )
      (i = o[u]),
        Object.prototype.hasOwnProperty.call(a, i) && a[i] && m.push(a[i][0]),
        (a[i] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
    for (d && d(t); m.length; ) m.shift()();
    return s.push.apply(s, l || []), r();
  }
  function r() {
    for (var e, t = 0; t < s.length; t++) {
      for (var r = s[t], n = !0, i = 1; i < r.length; i++) {
        var c = r[i];
        0 !== a[c] && (n = !1);
      }
      n && (s.splice(t--, 1), (e = o((o.s = r[0]))));
    }
    return e;
  }
  var n = {},
    i = { 6: 0 },
    a = { 6: 0 },
    s = [];
  function o(t) {
    if (n[t]) return n[t].exports;
    var r = (n[t] = { i: t, l: !1, exports: {} });
    return e[t].call(r.exports, r, r.exports, o), (r.l = !0), r.exports;
  }
  (o.e = function (e) {
    var t = [];
    i[e]
      ? t.push(i[e])
      : 0 !== i[e] &&
        { 2: 1, 3: 1, 4: 1, 7: 1, 38: 1, 39: 1 }[e] &&
        t.push(
          (i[e] = new Promise(function (t, r) {
            for (
              var n = "css\\" + e + ".css",
                a = o.p + n,
                s = document.getElementsByTagName("link"),
                c = 0;
              c < s.length;
              c++
            ) {
              var l =
                (d = s[c]).getAttribute("data-href") || d.getAttribute("href");
              if ("stylesheet" === d.rel && (l === n || l === a)) return t();
            }
            var u = document.getElementsByTagName("style");
            for (c = 0; c < u.length; c++) {
              var d;
              if ((l = (d = u[c]).getAttribute("data-href")) === n || l === a)
                return t();
            }
            var m = document.createElement("link");
            (m.rel = "stylesheet"),
              (m.type = "text/css"),
              (m.onload = t),
              (m.onerror = function (t) {
                var n = (t && t.target && t.target.src) || a,
                  s = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + n + ")"
                  );
                (s.code = "CSS_CHUNK_LOAD_FAILED"),
                  (s.request = n),
                  delete i[e],
                  m.parentNode.removeChild(m),
                  r(s);
              }),
              (m.href = a),
              document.getElementsByTagName("head")[0].appendChild(m);
          }).then(function () {
            i[e] = 0;
          }))
        );
    var r = a[e];
    if (0 !== r)
      if (r) t.push(r[2]);
      else {
        var n = new Promise(function (t, n) {
          r = a[e] = [t, n];
        });
        t.push((r[2] = n));
        var s,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          o.nc && c.setAttribute("nonce", o.nc),
          (c.src = (function (e) {
            return (
              o.p +
              "" +
              ({
                1: "libraryroot~login~sp",
                2: "libraryroot~sp",
                3: "awardicon",
                4: "broadcast",
                7: "libraryroot",
                8: "localization/shared_arabic-json",
                9: "localization/shared_brazilian-json",
                10: "localization/shared_bulgarian-json",
                11: "localization/shared_czech-json",
                12: "localization/shared_danish-json",
                13: "localization/shared_dutch-json",
                14: "localization/shared_english-json",
                15: "localization/shared_finnish-json",
                16: "localization/shared_french-json",
                17: "localization/shared_german-json",
                18: "localization/shared_greek-json",
                19: "localization/shared_hungarian-json",
                20: "localization/shared_italian-json",
                21: "localization/shared_japanese-json",
                22: "localization/shared_koreana-json",
                23: "localization/shared_latam-json",
                24: "localization/shared_norwegian-json",
                25: "localization/shared_polish-json",
                26: "localization/shared_portuguese-json",
                27: "localization/shared_romanian-json",
                28: "localization/shared_russian-json",
                29: "localization/shared_sc_schinese-json",
                30: "localization/shared_schinese-json",
                31: "localization/shared_spanish-json",
                32: "localization/shared_swedish-json",
                33: "localization/shared_tchinese-json",
                34: "localization/shared_thai-json",
                35: "localization/shared_turkish-json",
                36: "localization/shared_ukrainian-json",
                37: "localization/shared_vietnamese-json",
                38: "login",
                39: "sp",
              }[e] || e) +
              ".js"
            );
          })(e));
        var l = new Error();
        s = function (t) {
          (c.onerror = c.onload = null), clearTimeout(u);
          var r = a[e];
          if (0 !== r) {
            if (r) {
              var n = t && ("load" === t.type ? "missing" : t.type),
                i = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + n + ": " + i + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = n),
                (l.request = i),
                r[1](l);
            }
            a[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          s({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = s), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (o.m = e),
    (o.c = n),
    (o.d = function (e, t, r) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (o.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var n in e)
          o.d(
            r,
            n,
            function (t) {
              return e[t];
            }.bind(null, n)
          );
      return r;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "/"),
    (o.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var d = l;
  s.push(["tVvj", 5, 0]), r();
})({
  "0OaU": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return c;
    });
    var n = r("q1tI"),
      i = r.n(n),
      a = r("6Y59"),
      s = r("2i24"),
      o = r.n(s);
    class c extends i.a.PureComponent {
      constructor(e) {
        super(e);
      }
      AddSizeClass(e) {
        "small" == this.props.size
          ? e.push(o.a.throbber_small)
          : "medium" == this.props.size
          ? e.push(o.a.throbber_medium)
          : "xlarge" == this.props.size
          ? e.push(o.a.throbber_xlarge)
          : "xxlarge" == this.props.size
          ? e.push(o.a.throbber_xxlarge)
          : e.push(o.a.throbber_large);
      }
      render() {
        let e = [o.a.LoadingWrapper, "SteamLogoThrobber"];
        this.AddSizeClass(e),
          void 0 === this.props.string && e.push(o.a.noString),
          this.props.className && e.push(this.props.className),
          this.props.static && e.push(o.a.Static);
        let t = i.a.createElement(
          "div",
          { className: e.join(" ") },
          i.a.createElement(
            "div",
            { className: o.a.Throbber },
            i.a.createElement(a.Ab, { className: o.a.base }),
            i.a.createElement(a.Ab, { className: o.a.blur })
          )
        );
        return i.a.createElement(
          "div",
          {
            className:
              "center" == this.props.position
                ? o.a.throbber_center_wrapper
                : "",
          },
          t,
          Boolean(this.props.string) &&
            i.a.createElement(
              "div",
              { className: o.a.ThrobberText },
              this.props.string
            )
        );
      }
    }
  },
  "2ErG": function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return s;
    }),
      r.d(t, "g", function () {
        return c;
      }),
      r.d(t, "a", function () {
        return l;
      }),
      r.d(t, "e", function () {
        return u;
      }),
      r.d(t, "f", function () {
        return d;
      }),
      r.d(t, "d", function () {
        return _;
      }),
      r.d(t, "b", function () {
        return b;
      });
    var n = r("hRO2"),
      i = r("OS8t");
    const a = n.Message;
    class s extends a {
      constructor(e = null) {
        super(),
          s.prototype.bincremental || i.a(s.M()),
          a.initialize(this, e, 0, -1, [2], null);
      }
      static M() {
        return (
          s.sm_m ||
            (s.sm_m = {
              proto: s,
              fields: {
                bincremental: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                friends: { n: 2, c: o, r: !0, q: !0 },
                max_friend_count: {
                  n: 3,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                active_friend_count: {
                  n: 4,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                friends_limit_hit: {
                  n: 5,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
              },
            }),
          s.sm_m
        );
      }
      static MBF() {
        return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
      }
      toObject(e = !1) {
        return s.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(s.M(), e, t);
      }
      static fromObject(e) {
        return i.c(s.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new s();
        return s.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(s.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(s.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientFriendsList";
      }
    }
    class o extends a {
      constructor(e = null) {
        super(),
          o.prototype.ulfriendid || i.a(o.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          o.sm_m ||
            (o.sm_m = {
              proto: o,
              fields: {
                ulfriendid: {
                  n: 1,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                efriendrelationship: {
                  n: 2,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
              },
            }),
          o.sm_m
        );
      }
      static MBF() {
        return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
      }
      toObject(e = !1) {
        return o.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(o.M(), e, t);
      }
      static fromObject(e) {
        return i.c(o.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new o();
        return o.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(o.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(o.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientFriendsList_Friend";
      }
    }
    class c extends a {
      constructor(e = null) {
        super(),
          c.prototype.persona_state_requested || i.a(c.M()),
          a.initialize(this, e, 0, -1, [2], null);
      }
      static M() {
        return (
          c.sm_m ||
            (c.sm_m = {
              proto: c,
              fields: {
                persona_state_requested: {
                  n: 1,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                friends: {
                  n: 2,
                  r: !0,
                  q: !0,
                  br: i.d.readFixed64String,
                  bw: i.h.writeRepeatedFixed64String,
                },
              },
            }),
          c.sm_m
        );
      }
      static MBF() {
        return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
      }
      toObject(e = !1) {
        return c.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(c.M(), e, t);
      }
      static fromObject(e) {
        return i.c(c.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new c();
        return c.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(c.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(c.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientRequestFriendData";
      }
    }
    class l extends a {
      constructor(e = null) {
        super(),
          l.prototype.persona_state || i.a(l.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          l.sm_m ||
            (l.sm_m = {
              proto: l,
              fields: {
                persona_state: {
                  n: 1,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                player_name: { n: 2, br: i.d.readString, bw: i.h.writeString },
                is_auto_generated_name: {
                  n: 3,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                high_priority: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                persona_set_by_user: {
                  n: 5,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                persona_state_flags: {
                  n: 6,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                need_persona_response: {
                  n: 7,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                is_client_idle: { n: 8, br: i.d.readBool, bw: i.h.writeBool },
              },
            }),
          l.sm_m
        );
      }
      static MBF() {
        return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
      }
      toObject(e = !1) {
        return l.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(l.M(), e, t);
      }
      static fromObject(e) {
        return i.c(l.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new l();
        return l.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(l.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(l.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientChangeStatus";
      }
    }
    class u extends a {
      constructor(e = null) {
        super(),
          u.prototype.status_flags || i.a(u.M()),
          a.initialize(this, e, 0, -1, [2], null);
      }
      static M() {
        return (
          u.sm_m ||
            (u.sm_m = {
              proto: u,
              fields: {
                status_flags: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                friends: { n: 2, c: d, r: !0, q: !0 },
              },
            }),
          u.sm_m
        );
      }
      static MBF() {
        return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
      }
      toObject(e = !1) {
        return u.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(u.M(), e, t);
      }
      static fromObject(e) {
        return i.c(u.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new u();
        return u.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(u.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(u.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientPersonaState";
      }
    }
    class d extends a {
      constructor(e = null) {
        super(),
          d.prototype.friendid || i.a(d.M()),
          a.initialize(this, e, 0, -1, [71], null);
      }
      static M() {
        return (
          d.sm_m ||
            (d.sm_m = {
              proto: d,
              fields: {
                friendid: {
                  n: 1,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                persona_state: {
                  n: 2,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                game_played_app_id: {
                  n: 3,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                game_server_ip: {
                  n: 4,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                game_server_port: {
                  n: 5,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                persona_state_flags: {
                  n: 6,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                online_session_instances: {
                  n: 7,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                persona_set_by_user: {
                  n: 10,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                player_name: { n: 15, br: i.d.readString, bw: i.h.writeString },
                query_port: { n: 20, br: i.d.readUint32, bw: i.h.writeUint32 },
                steamid_source: {
                  n: 25,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                avatar_hash: { n: 31, br: i.d.readBytes, bw: i.h.writeBytes },
                last_logoff: { n: 45, br: i.d.readUint32, bw: i.h.writeUint32 },
                last_logon: { n: 46, br: i.d.readUint32, bw: i.h.writeUint32 },
                last_seen_online: {
                  n: 47,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                clan_rank: { n: 50, br: i.d.readUint32, bw: i.h.writeUint32 },
                game_name: { n: 55, br: i.d.readString, bw: i.h.writeString },
                gameid: {
                  n: 56,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                game_data_blob: {
                  n: 60,
                  br: i.d.readBytes,
                  bw: i.h.writeBytes,
                },
                clan_data: { n: 64, c: m },
                clan_tag: { n: 65, br: i.d.readString, bw: i.h.writeString },
                rich_presence: { n: 71, c: h, r: !0, q: !0 },
                broadcast_id: {
                  n: 72,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                game_lobby_id: {
                  n: 73,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                watching_broadcast_accountid: {
                  n: 74,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                watching_broadcast_appid: {
                  n: 75,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                watching_broadcast_viewers: {
                  n: 76,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                watching_broadcast_title: {
                  n: 77,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                is_community_banned: {
                  n: 78,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                player_name_pending_review: {
                  n: 79,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                avatar_pending_review: {
                  n: 80,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
              },
            }),
          d.sm_m
        );
      }
      static MBF() {
        return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
      }
      toObject(e = !1) {
        return d.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(d.M(), e, t);
      }
      static fromObject(e) {
        return i.c(d.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new d();
        return d.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(d.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(d.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientPersonaState_Friend";
      }
    }
    class m extends a {
      constructor(e = null) {
        super(),
          m.prototype.ogg_app_id || i.a(m.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          m.sm_m ||
            (m.sm_m = {
              proto: m,
              fields: {
                ogg_app_id: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                chat_group_id: {
                  n: 2,
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
              },
            }),
          m.sm_m
        );
      }
      static MBF() {
        return m.sm_mbf || (m.sm_mbf = i.e(m.M())), m.sm_mbf;
      }
      toObject(e = !1) {
        return m.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(m.M(), e, t);
      }
      static fromObject(e) {
        return i.c(m.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new m();
        return m.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(m.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(m.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientPersonaState_Friend_ClanData";
      }
    }
    class h extends a {
      constructor(e = null) {
        super(),
          h.prototype.key || i.a(h.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          h.sm_m ||
            (h.sm_m = {
              proto: h,
              fields: {
                key: { n: 1, br: i.d.readString, bw: i.h.writeString },
                value: { n: 2, br: i.d.readString, bw: i.h.writeString },
              },
            }),
          h.sm_m
        );
      }
      static MBF() {
        return h.sm_mbf || (h.sm_mbf = i.e(h.M())), h.sm_mbf;
      }
      toObject(e = !1) {
        return h.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(h.M(), e, t);
      }
      static fromObject(e) {
        return i.c(h.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new h();
        return h.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(h.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(h.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientPersonaState_Friend_KV";
      }
    }
    class _ extends a {
      constructor(e = null) {
        super(), a.initialize(this, e, 0, -1, void 0, null);
      }
      toObject(e = !1) {
        return _.toObject(e, this);
      }
      static toObject(e, t) {
        return e ? { $jspbMessageInstance: t } : {};
      }
      static fromObject(e) {
        return new _();
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new _();
        return _.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return e;
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {}
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientGetEmoticonList";
      }
    }
    class b extends a {
      constructor(e = null) {
        super(),
          b.prototype.emoticons || i.a(b.M()),
          a.initialize(this, e, 0, -1, [1, 2, 3], null);
      }
      static M() {
        return (
          b.sm_m ||
            (b.sm_m = {
              proto: b,
              fields: {
                emoticons: { n: 1, c: g, r: !0, q: !0 },
                stickers: { n: 2, c: f, r: !0, q: !0 },
                effects: { n: 3, c: p, r: !0, q: !0 },
              },
            }),
          b.sm_m
        );
      }
      static MBF() {
        return b.sm_mbf || (b.sm_mbf = i.e(b.M())), b.sm_mbf;
      }
      toObject(e = !1) {
        return b.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(b.M(), e, t);
      }
      static fromObject(e) {
        return i.c(b.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new b();
        return b.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(b.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(b.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientEmoticonList";
      }
    }
    class g extends a {
      constructor(e = null) {
        super(),
          g.prototype.name || i.a(g.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          g.sm_m ||
            (g.sm_m = {
              proto: g,
              fields: {
                name: { n: 1, br: i.d.readString, bw: i.h.writeString },
                count: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                time_last_used: {
                  n: 3,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                use_count: { n: 4, br: i.d.readUint32, bw: i.h.writeUint32 },
                time_received: {
                  n: 5,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                appid: { n: 6, br: i.d.readUint32, bw: i.h.writeUint32 },
              },
            }),
          g.sm_m
        );
      }
      static MBF() {
        return g.sm_mbf || (g.sm_mbf = i.e(g.M())), g.sm_mbf;
      }
      toObject(e = !1) {
        return g.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(g.M(), e, t);
      }
      static fromObject(e) {
        return i.c(g.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new g();
        return g.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(g.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(g.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientEmoticonList_Emoticon";
      }
    }
    class f extends a {
      constructor(e = null) {
        super(),
          f.prototype.name || i.a(f.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          f.sm_m ||
            (f.sm_m = {
              proto: f,
              fields: {
                name: { n: 1, br: i.d.readString, bw: i.h.writeString },
                count: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                time_received: {
                  n: 3,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                appid: { n: 4, br: i.d.readUint32, bw: i.h.writeUint32 },
                time_last_used: {
                  n: 5,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                use_count: { n: 6, br: i.d.readUint32, bw: i.h.writeUint32 },
              },
            }),
          f.sm_m
        );
      }
      static MBF() {
        return f.sm_mbf || (f.sm_mbf = i.e(f.M())), f.sm_mbf;
      }
      toObject(e = !1) {
        return f.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(f.M(), e, t);
      }
      static fromObject(e) {
        return i.c(f.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new f();
        return f.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(f.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(f.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientEmoticonList_Sticker";
      }
    }
    class p extends a {
      constructor(e = null) {
        super(),
          p.prototype.name || i.a(p.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          p.sm_m ||
            (p.sm_m = {
              proto: p,
              fields: {
                name: { n: 1, br: i.d.readString, bw: i.h.writeString },
                count: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                time_received: {
                  n: 3,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                infinite_use: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                appid: { n: 5, br: i.d.readUint32, bw: i.h.writeUint32 },
              },
            }),
          p.sm_m
        );
      }
      static MBF() {
        return p.sm_mbf || (p.sm_mbf = i.e(p.M())), p.sm_mbf;
      }
      toObject(e = !1) {
        return p.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(p.M(), e, t);
      }
      static fromObject(e) {
        return i.c(p.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new p();
        return p.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(p.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(p.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientEmoticonList_Effect";
      }
    }
  },
  "2i24": function (e, t, r) {
    e.exports = {
      LoadingWrapper: "throbber_LoadingWrapper_2wAKy",
      Static: "throbber_Static_1Qfwp",
      none: "throbber_none_1F0lz",
      bottomCircle: "throbber_bottomCircle_2qjZm",
      noString: "throbber_noString_1Sy0p",
      Throbber: "throbber_Throbber_lYUEj",
      throbber_small: "throbber_throbber_small_2zbyh",
      throbber_medium: "throbber_throbber_medium_2CphU",
      throbber_large: "throbber_throbber_large_1x18v",
      throbber_center_wrapper: "throbber_throbber_center_wrapper_3IYPz",
      ThrobberText: "throbber_ThrobberText_21nVi",
      blur: "throbber_blur_1ctjA",
      ThrobberRoundLoop: "throbber_ThrobberRoundLoop_1O-cW",
      roundOuterOutline: "throbber_roundOuterOutline_1Vv--",
      roundOuter: "throbber_roundOuter_2K0Lz",
      roundFill: "throbber_roundFill_3sQFk",
      ThrobberFillLoop: "throbber_ThrobberFillLoop_ofdi9",
      topCircle: "throbber_topCircle_1LZff",
      circlePulse: "throbber_circlePulse_1XN6Z",
      ThrobberTopCircleLoop: "throbber_ThrobberTopCircleLoop_1jALk",
      ThrobberBottomCircleLoop: "throbber_ThrobberBottomCircleLoop_1KvOg",
      roundThrobber15: "throbber_roundThrobber15_2LGHp",
      roundThrobber14: "throbber_roundThrobber14_2FGCn",
      roundThrobber13: "throbber_roundThrobber13_1X-5j",
      roundThrobber12: "throbber_roundThrobber12_1pj1Q",
      roundThrobber11: "throbber_roundThrobber11_xFmZa",
      roundThrobber10: "throbber_roundThrobber10_3MGYo",
      roundThrobber09: "throbber_roundThrobber09_ktVJ4",
      roundThrobber08: "throbber_roundThrobber08_3s_7m",
      roundThrobber07: "throbber_roundThrobber07_11MVp",
      roundThrobber06: "throbber_roundThrobber06_2cl-m",
      roundThrobber05: "throbber_roundThrobber05_3-JE0",
      roundThrobber04: "throbber_roundThrobber04_1xNIK",
      roundThrobber03: "throbber_roundThrobber03_1S17y",
      roundThrobber02: "throbber_roundThrobber02_1-oUJ",
      roundThrobber01: "throbber_roundThrobber01_2tXge",
      ThrobberRoundLoopThickness: "throbber_ThrobberRoundLoopThickness_1fs4R",
      throbber_xlarge: "throbber_throbber_xlarge_1gYeZ",
      throbber_xxlarge: "throbber_throbber_xxlarge_3j-p4",
    };
  },
  "2lL1": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    }),
      r.d(t, "b", function () {
        return a;
      });
    var n = r("hRO2");
    r("OS8t");
    n.Message;
    function i(e) {
      return "unknown ECceResult ( " + e + " )";
    }
    function a(e) {
      return "unknown EControllerModeInput ( " + e + " )";
    }
  },
  "5LhG": function (e, t) {
    e.exports = "/movies/deck_startup.webm";
  },
  "6NF1": function (e, t, r) {},
  "6Y59": function (e, t, r) {
    "use strict";
    r.d(t, "mb", function () {
      return m;
    }),
      r.d(t, "w", function () {
        return h;
      }),
      r.d(t, "C", function () {
        return _;
      }),
      r.d(t, "R", function () {
        return b;
      }),
      r.d(t, "o", function () {
        return g;
      }),
      r.d(t, "A", function () {
        return f;
      }),
      r.d(t, "zb", function () {
        return p;
      }),
      r.d(t, "M", function () {
        return w;
      }),
      r.d(t, "Nb", function () {
        return y;
      }),
      r.d(t, "Ob", function () {
        return B;
      }),
      r.d(t, "cb", function () {
        return M;
      }),
      r.d(t, "X", function () {
        return S;
      }),
      r.d(t, "Jb", function () {
        return v;
      }),
      r.d(t, "Hb", function () {
        return C;
      }),
      r.d(t, "ab", function () {
        return k;
      }),
      r.d(t, "Z", function () {
        return E;
      }),
      r.d(t, "gb", function () {
        return x;
      }),
      r.d(t, "n", function () {
        return z;
      }),
      r.d(t, "t", function () {
        return R;
      }),
      r.d(t, "P", function () {
        return L;
      }),
      r.d(t, "Ab", function () {
        return O;
      }),
      r.d(t, "f", function () {
        return T;
      }),
      r.d(t, "d", function () {
        return F;
      }),
      r.d(t, "r", function () {
        return I;
      }),
      r.d(t, "v", function () {
        return W;
      }),
      r.d(t, "S", function () {
        return U;
      }),
      r.d(t, "V", function () {
        return j;
      }),
      r.d(t, "ib", function () {
        return N;
      }),
      r.d(t, "hb", function () {
        return A;
      }),
      r.d(t, "Db", function () {
        return G;
      }),
      r.d(t, "G", function () {
        return D;
      }),
      r.d(t, "H", function () {
        return P;
      }),
      r.d(t, "u", function () {
        return H;
      }),
      r.d(t, "T", function () {
        return V;
      }),
      r.d(t, "wb", function () {
        return q;
      }),
      r.d(t, "Ib", function () {
        return Y;
      }),
      r.d(t, "m", function () {
        return Z;
      }),
      r.d(t, "I", function () {
        return K;
      }),
      r.d(t, "pb", function () {
        return $;
      }),
      r.d(t, "kb", function () {
        return X;
      }),
      r.d(t, "lb", function () {
        return J;
      }),
      r.d(t, "g", function () {
        return Q;
      }),
      r.d(t, "W", function () {
        return ee;
      }),
      r.d(t, "Gb", function () {
        return te;
      }),
      r.d(t, "N", function () {
        return re;
      }),
      r.d(t, "B", function () {
        return ne;
      }),
      r.d(t, "E", function () {
        return ie;
      }),
      r.d(t, "Fb", function () {
        return ae;
      }),
      r.d(t, "Pb", function () {
        return se;
      }),
      r.d(t, "Eb", function () {
        return oe;
      }),
      r.d(t, "l", function () {
        return ce;
      }),
      r.d(t, "p", function () {
        return le;
      }),
      r.d(t, "J", function () {
        return ue;
      }),
      r.d(t, "qb", function () {
        return de;
      }),
      r.d(t, "x", function () {
        return me;
      }),
      r.d(t, "a", function () {
        return he;
      }),
      r.d(t, "bb", function () {
        return _e;
      }),
      r.d(t, "F", function () {
        return be;
      }),
      r.d(t, "db", function () {
        return ge;
      }),
      r.d(t, "fb", function () {
        return fe;
      }),
      r.d(t, "z", function () {
        return pe;
      }),
      r.d(t, "K", function () {
        return we;
      }),
      r.d(t, "y", function () {
        return ye;
      }),
      r.d(t, "ob", function () {
        return Be;
      }),
      r.d(t, "Y", function () {
        return Me;
      }),
      r.d(t, "c", function () {
        return Se;
      }),
      r.d(t, "O", function () {
        return ve;
      }),
      r.d(t, "Kb", function () {
        return Ce;
      }),
      r.d(t, "b", function () {
        return ke;
      }),
      r.d(t, "xb", function () {
        return Ee;
      }),
      r.d(t, "U", function () {
        return xe;
      }),
      r.d(t, "L", function () {
        return ze;
      }),
      r.d(t, "D", function () {
        return Re;
      }),
      r.d(t, "q", function () {
        return Le;
      }),
      r.d(t, "s", function () {
        return Oe;
      }),
      r.d(t, "Cb", function () {
        return Te;
      }),
      r.d(t, "Bb", function () {
        return Fe;
      }),
      r.d(t, "jb", function () {
        return Ie;
      }),
      r.d(t, "Mb", function () {
        return We;
      }),
      r.d(t, "k", function () {
        return Ue;
      }),
      r.d(t, "e", function () {
        return je;
      }),
      r.d(t, "Q", function () {
        return Ne;
      }),
      r.d(t, "eb", function () {
        return Ae;
      }),
      r.d(t, "Lb", function () {
        return Ge;
      }),
      r.d(t, "j", function () {
        return De;
      }),
      r.d(t, "i", function () {
        return Pe;
      }),
      r.d(t, "h", function () {
        return He;
      }),
      r.d(t, "nb", function () {
        return Ve;
      }),
      r.d(t, "yb", function () {
        return qe;
      }),
      r.d(t, "rb", function () {
        return Ye;
      }),
      r.d(t, "vb", function () {
        return Ze;
      }),
      r.d(t, "sb", function () {
        return Ke;
      }),
      r.d(t, "ub", function () {
        return $e;
      }),
      r.d(t, "tb", function () {
        return Xe;
      });
    var n = r("mrSG"),
      i = r("q1tI"),
      a = r("2i24"),
      s = r.n(a),
      o = r("exH9"),
      c = r("YyVH"),
      l = r("Z7Ow"),
      u = r.n(l),
      d = r("lkRc");
    function m() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Settings",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "-305.5 396.5 256 256",
          enableBackground: "new -305.5 396.5 256 256",
        },
        i.createElement("path", {
          d:
            "M-232.755,589.942l3.103,2.408c5.78,4.492,11.973,8.18,18.409,10.959l3.581,1.547l2.276,33.783 c0.089,1.33,1.385,2.54,2.715,2.54h48.62c1.355,0,2.745-1.273,2.852-2.621l2.74-33.284l3.602-1.496 c6.406-2.656,12.646-6.262,18.554-10.707l3.137-2.366l30.578,15.009c1.155,0.571,2.924,0.017,3.563-1.087l24.303-42.1 c0.674-1.173,0.265-3.014-0.852-3.785l-27.872-19.309l0.469-3.832c0.495-4.032,0.725-7.395,0.725-10.57 c0-3.129-0.227-6.5-0.687-10.307l-0.469-3.896l28.699-19.253c1.112-0.741,1.509-2.473,0.84-3.627l-24.3-42.104 c-0.657-1.139-2.502-1.727-3.7-1.155l-31.208,14.748l-3.091-2.341c-5.571-4.224-11.466-7.688-17.522-10.306l-3.58-1.548 l-2.34-34.887c-0.089-1.33-1.381-2.536-2.715-2.536h-48.617c-1.355,0-2.74,1.274-2.851,2.626l-2.834,34.371l-3.593,1.501 c-6.082,2.535-12.028,5.924-17.667,10.071l-3.124,2.302l-31.392-15.413c-1.168-0.575-2.924-0.025-3.559,1.074l-24.309,42.107 c-0.678,1.172-0.264,3.014,0.848,3.781l28.068,19.444l-0.524,3.883c-0.592,4.378-0.865,8.018-0.865,11.462 c0,2.988,0.179,6.065,0.55,9.403l0.431,3.853l-28.528,19.125c-1.108,0.742-1.509,2.468-0.84,3.632l24.308,42.1 c0.656,1.142,2.489,1.726,3.7,1.154L-232.755,589.942z M-177.498,560.051c-19.311,0-35.02-15.709-35.02-35.02 s15.709-35.02,35.02-35.02s35.02,15.709,35.02,35.02S-158.188,560.051-177.498,560.051z",
          fill: "currentColor",
        })
      );
    }
    function h() {
      return i.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DownArrowContextMenu",
          "data-name": "Layer 1",
          viewBox: "0 0 128 128",
          x: "0px",
          y: "0px",
        },
        i.createElement("polygon", {
          points:
            "50 59.49 13.21 22.89 4.74 31.39 50 76.41 95.26 31.39 86.79 22.89 50 59.49",
        })
      );
    }
    function _(e) {
      return i.createElement(
        "svg",
        {
          style: { transform: `rotate(${e.angle}deg)` },
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "24.833px",
          height: "21.917px",
          viewBox: "0 0 24.833 21.917",
        },
        i.createElement("polygon", {
          points:
            "12.5,14.873 3.302,5.723 1.185,7.848 12.5,19.103 23.814,7.848 21.697,5.723 ",
        })
      );
    }
    function b(e) {
      let t = "SVGIcon_Button SVGIcon_MagnifyingGlass";
      return (
        e.className && (t += ` ${e.className}`),
        i.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "0 0 100 100",
          },
          i.createElement(
            "g",
            { transform: "translate(0,-952.36218)" },
            i.createElement("path", {
              className: "ColorSelector",
              d:
                "m 40.99855,964.36216 c -15.9798,0 -28.9986,13.01864 -28.9986,28.99862 0,15.97992 13.0188,28.99862 28.9986,28.99862 6.9189,0 13.2881,-2.4349 18.2803,-6.4997 l 23.5927,23.6239 c 1.1714,1.1714 3.0784,1.1715 4.2498,0 1.1716,-1.1715 1.1716,-3.0783 0,-4.2498 l -23.6239,-23.5926 c 4.0649,-4.9923 6.4997,-11.3615 6.4997,-18.28042 0,-15.97998 -13.0187,-28.99862 -28.9986,-28.99862 z m 0,5.99972 c 12.7374,0 22.9989,10.26145 22.9989,22.9989 0,12.73732 -10.2615,22.99892 -22.9989,22.99892 -12.7374,0 -22.9989,-10.2616 -22.9989,-22.99892 0,-12.73745 10.2615,-22.9989 22.9989,-22.9989 z",
              fill: "#ffffff",
              fillOpacity: "1",
              stroke: "none",
              visibility: "visible",
              display: "inline",
              overflow: "visible",
            })
          )
        )
      );
    }
    function g() {
      return i.createElement(
        "svg",
        {
          className: "SVGIcon_Button SVGIcon_Clock",
          version: "1.1",
          x: "0px",
          y: "0px",
          width: "20px",
          height: "20px",
          viewBox: "0 0 20 20",
        },
        i.createElement("path", {
          d:
            "M15.999 15c-.15 0-.303-.034-.446-.105l-4-2A1.001 1.001 0 0111 12V5a1 1 0 012 0v6.382l3.447 1.724A1 1 0 0115.999 15zM12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z",
        })
      );
    }
    function f() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Emoticon",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "107.5",
        }),
        i.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M74.484,145.945 c0,0,12.996,37.533,53.514,37.533c38.084,0,53.499-37.533,53.499-37.533",
        }),
        i.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "94.5",
          y1: "97.5",
          x2: "94.5",
          y2: "109.5",
        }),
        i.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "12",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "160.5",
          y1: "97.5",
          x2: "160.5",
          y2: "109.5",
        })
      );
    }
    function p(e) {
      return d.c.IN_GAMEPADUI
        ? i.createElement(
            "svg",
            Object.assign(
              {
                width: "24",
                height: "24",
                viewBox: "0 0 36 36",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Submit",
              },
              e
            ),
            i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M4.16683 8.982C4.10732 8.3908 3.83847 7.42693 4.15486 7.17995C4.46877 6.93489 4.7797 6.90487 5.90123 7.31306L31.1931 17.2282C32.2693 17.6503 32.2686 18.335 31.1931 18.7564L5.90123 28.6715C4.77972 29.1235 4.46864 29.0497 4.15487 28.8049C3.83836 28.5579 4.0953 27.5939 4.15484 27.0028L4.7797 21.2151C4.89862 20.0374 5.92644 18.9801 7.0706 18.854L15.467 18.4429C24.1686 17.9924 24.1686 17.9924 15.467 17.5419L7.0706 17.1313C5.92423 17.0053 4.89825 15.9476 4.7797 14.7706L4.16683 8.982Z",
              fill: "currentColor",
            })
          )
        : i.createElement(
            "svg",
            {
              fill: "#FFFFFF",
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Submit",
              version: "1.1",
              x: "0px",
              y: "0px",
              viewBox: "0 0 100 100",
            },
            i.createElement(
              "g",
              { transform: "translate(0,-952.36218)" },
              i.createElement("path", {
                d:
                  "m 92.115057,974.14842 a 2.0001999,2.0001999 0 0 0 -1.96764,2.02965 l 0.0376,31.19553 -77.475501,0 16.161909,-15.73013 a 2.0002746,2.0002746 0 1 0 -2.790355,-2.8667 L 6.3913393,1007.9405 a 2.0001999,2.0001999 0 0 0 -0.0011,2.8646 l 19.6896957,19.2036 a 2.0002671,2.0002671 0 1 0 2.792551,-2.8646 l -16.170767,-15.771 79.153048,0 a 2.0001999,2.0001999 0 0 0 1.72959,-0.5437 2.0001999,2.0001999 0 0 0 0.0598,-0.058 2.0001999,2.0001999 0 0 0 0.54259,-1.7218 l -0.0388,-32.87638 a 2.0001999,2.0001999 0 0 0 -2.03297,-2.02522 z",
                fill: "#FFFFFF",
                fillOpacity: "1",
                fillRule: "evenodd",
                stroke: "none",
                visibility: "visible",
                display: "inline",
                overflow: "visible",
              })
            )
          );
    }
    function w() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "100px",
          height: "91.582px",
          viewBox: "0 0 100 91.582",
          enableBackground: "new 0 0 100 91.582",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            clipPath: "url(#SVGID_2_)",
            d:
              "M88.853,29.724H62.271V11.351C62.262,5.18,57.26,0.179,51.089,0.169H11.255\r\n\t\t\t\tC5.085,0.179,0.085,5.18,0.074,11.351v24.908c-0.001,2.207,0.657,4.36,1.888,6.19c3.942,7.586,22.118,18.799,22.314,18.916\r\n\t\t\t\tc0.389,0.229,0.83,0.354,1.281,0.361c1.351,0.01,2.455-1.074,2.468-2.426c0.003-0.329-0.062-0.654-0.187-0.958\r\n\t\t\t\tc-1.319-3.565-2.341-7.233-3.053-10.968h13.135v18.389C37.93,71.9,42.882,76.882,49.02,76.928H75.29\r\n\t\t\t\tc-0.715,3.724-1.737,7.379-3.054,10.936c-0.517,1.248,0.076,2.678,1.323,3.196c0.303,0.125,0.63,0.188,0.959,0.186\r\n\t\t\t\tc0.451-0.006,0.894-0.13,1.279-0.361c0.197-0.115,18.373-11.329,22.314-18.914c1.235-1.834,1.894-3.997,1.888-6.207V40.906\r\n\t\t\t\tC99.99,34.746,95.01,29.751,88.853,29.724 M32.797,42.449H21.831c-0.721,0.01-1.4,0.327-1.873,0.869\r\n\t\t\t\tc-0.464,0.544-0.669,1.265-0.558,1.973c0,0.228,0.59,3.79,1.641,8.028c-5.517-3.842-12.773-9.425-14.776-13.136\r\n\t\t\t\tc-0.067-0.162-0.149-0.314-0.247-0.46c-0.738-1.033-1.13-2.276-1.116-3.546V11.351c0.008-3.463,2.825-6.264,6.288-6.255h0.065\r\n\t\t\t\th39.833c3.45,0.007,6.246,2.804,6.255,6.255v18.373H49.02c-3.223,0.005-6.286,1.399-8.406,3.825\r\n\t\t\t\tc-1.744-0.054-3.464-0.427-5.074-1.101c2.588-3.257,4.169-7.2,4.548-11.345h1.33c1.359,0,2.463-1.103,2.463-2.463\r\n\t\t\t\tc0-1.361-1.104-2.461-2.463-2.461h-7.784v-4.384c0-1.36-1.102-2.464-2.461-2.464c-1.361,0-2.463,1.104-2.463,2.464v4.384h-7.668\r\n\t\t\t\tc-1.361,0-2.462,1.1-2.462,2.461c0,1.36,1.102,2.463,2.462,2.463H35.13c-0.348,3.137-1.604,6.104-3.613,8.538\r\n\t\t\t\tc-1.439-1.598-2.553-3.46-3.284-5.482c-0.489-1.271-1.916-1.903-3.185-1.414c-1.27,0.489-1.902,1.917-1.412,3.185\r\n\t\t\t\tc0.892,2.395,2.192,4.619,3.841,6.57c-2.017,0.812-4.178,1.208-6.354,1.165c-1.359,0-2.463,1.102-2.463,2.461\r\n\t\t\t\tc0,1.362,1.104,2.465,2.463,2.465c3.647,0.07,7.244-0.868,10.393-2.71c2.032,1.239,4.293,2.049,6.649,2.38\r\n\t\t\t\tc-0.218,0.859-0.327,1.741-0.327,2.627v1.641L32.797,42.449z M95.19,65.763c0.013,1.271-0.379,2.514-1.117,3.547\r\n\t\t\t\tc-0.097,0.138-0.181,0.287-0.246,0.443c-1.938,3.678-9.211,9.277-14.776,13.135c1.099-4.236,1.64-7.799,1.64-8.03\r\n\t\t\t\tc0.111-0.704-0.091-1.425-0.558-1.969c-0.462-0.548-1.138-0.871-1.854-0.887H49.02c-3.447,0-6.246-2.791-6.255-6.239V40.906\r\n\t\t\t\tc0.009-3.452,2.805-6.249,6.255-6.257h39.833c3.449,0.008,6.246,2.805,6.256,6.257L95.19,65.763z M77.834,56.635L77.834,56.635\r\n\t\t\t\tl-6.564-16.42c-0.037-0.092-0.081-0.18-0.133-0.262l-0.099-0.165c-0.047-0.078-0.102-0.15-0.164-0.214l-0.132-0.164l-0.182-0.147\r\n\t\t\t\tl-0.195-0.099c-0.056-0.043-0.116-0.076-0.182-0.098l-0.246-0.132c-0.06-0.009-0.121-0.009-0.18,0l-0.248-0.082h-0.245h-0.231\r\n\t\t\t\th-0.261h-0.214l-0.279,0.082c-0.055-0.007-0.109-0.007-0.164,0l-0.246,0.132l-0.247,0.098c-0.064,0.044-0.124,0.095-0.18,0.147\r\n\t\t\t\tl-0.182,0.148l-0.149,0.166c-0.056,0.066-0.113,0.138-0.161,0.211v0.166l-0.149,0.263l-6.567,16.418l-3.282,8.21\r\n\t\t\t\tc-0.546,1.246,0.026,2.697,1.272,3.24c0.036,0.016,0.072,0.029,0.105,0.042c0.29,0.127,0.604,0.189,0.919,0.182\r\n\t\t\t\tc1.005-0.006,1.905-0.616,2.283-1.544l2.657-6.665h9.854l2.66,6.665c0.383,0.931,1.291,1.54,2.298,1.544\r\n\t\t\t\tc0.31,0.003,0.619-0.059,0.904-0.182c1.269-0.485,1.906-1.907,1.422-3.18c-0.014-0.034-0.028-0.069-0.044-0.103L77.834,56.635z\r\n\t\t\t\tM66.062,55.123l2.939-7.323l2.923,7.323H66.062z",
          })
        )
      );
    }
    function y(e) {
      return i.createElement(
        "svg",
        Object.assign(
          {
            fill: "#FFFFFF",
            xmlns: "http://www.w3.org/2000/svg",
            className: "SVGIcon_Button SVGIcon_X",
            version: "1.1",
            x: "0px",
            y: "0px",
            viewBox: "-165 95 100 100",
          },
          e
        ),
        i.createElement(
          "g",
          null,
          i.createElement("polygon", {
            points:
              "-74.9,117.2 -102.2,145 -74.9,172.8 -89.1,186.8 -116.2,159.3 -143.2,186.8 -157.5,172.8 -130.2,145 -157.5,117.2 -143.2,103.2 -116.2,130.7 -89.1,103.2",
          })
        )
      );
    }
    function B(e) {
      const t = e.color || "#FFFFFF";
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_X_Line",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("line", {
          fill: "none",
          stroke: t,
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "212",
          y1: "212",
          x2: "44",
          y2: "44",
        }),
        i.createElement("line", {
          fill: "none",
          stroke: t,
          strokeWidth: "45",
          strokeMiterlimit: "10",
          x1: "44",
          y1: "212",
          x2: "212",
          y2: "44",
        })
      );
    }
    function M(e) {
      const { className: t } = e;
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: Object(o.a)("SVGIcon_Button SVGIcon_PlusCircle", t),
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        !e.nocircle &&
          i.createElement("circle", {
            fill: "none",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            cx: "128",
            cy: "128",
            r: "95.333",
          }),
        i.createElement("line", {
          className: "horizontalLine",
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "73.333",
          y1: "128",
          x2: "183.333",
          y2: "128",
        }),
        !e.minus &&
          i.createElement("line", {
            className: "verticalLine",
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "128.333",
            y1: "73.335",
            x2: "128.333",
            y2: "183.333",
          })
      );
    }
    function S() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Paperclip",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M167.768,62.647 l-0.012,123.052c0,24.729-19.334,44.856-43.096,44.866c-23.765-0.006-43.099-20.134-43.096-44.872L81.557,48.851 c0-15.345,14.483-27.827,29.83-27.83c15.342,0.003,27.827,12.488,27.833,27.833l-0.002,139.245 c0.003,6.376-8.546,12.925-14.925,12.925c0,0-13.929-0.166-13.929-12.928l0.003-124.839",
        })
      );
    }
    function v(e) {
      const { muted: t, className: r } = e;
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: Object(o.a)("SVGIcon_Button", "SVGIcon_Volume", r),
          x: "0px",
          y: "0px",
          width: "256px",
          height: "255.999px",
          viewBox: "0 0 256 255.999",
        },
        i.createElement(
          "g",
          { className: "Speaker" },
          i.createElement("path", {
            d:
              "M93.785,52.265c-0.946,0-2.357,0.63-3.304,1.577L40.284,98.022c-0.947,0.789-2.831,1.578-4.093,1.578H9.367 C8.104,99.6,7,100.706,7,101.967v52.069c0,1.264,1.104,2.367,2.367,2.367H36.19c1.262,0,3.146,0.632,4.093,1.578l50.197,44.181 c0.947,0.789,2.516,1.578,3.304,1.578s1.578-1.104,1.578-2.367V54.631C95.363,53.369,94.731,52.265,93.785,52.265z",
          })
        ),
        !t &&
          i.createElement(
            "g",
            { className: "SoundWaves" },
            i.createElement("path", {
              className: "SoundWavesHighest",
              d:
                "M193.826,30.402c24.959,24.958,40.349,59.403,40.349,97.604c0,38.199-15.388,72.645-40.349,97.603l9.916,9.916 c28.067-28.067,44.263-64.673,44.263-107.521c0-42.847-16.196-79.455-44.263-107.521",
            }),
            i.createElement("path", {
              className: "SoundWavesHigh",
              d:
                "M175.737,47.628l-8.924,8.924c18.271,18.27,29.536,43.484,29.536,71.448s-11.264,53.178-29.536,71.448l8.924,8.924 c20.546-20.546,33.234-49.008,33.234-80.374c0-31.366-12.688-59.829-33.234-80.374V47.628z",
            }),
            i.createElement("path", {
              className: "SoundWavesMed",
              d:
                "M148.913,74.454l-8.925,8.925c11.488,11.488,18.491,27.236,18.491,44.624c0,17.388-7.054,33.281-18.491,44.575l8.875,8.975 c13.811-13.635,22.239-32.753,22.239-53.55c0-20.797-8.432-39.793-22.189-53.55V74.454z",
            }),
            i.createElement("path", {
              className: "SoundWavesLow",
              d:
                "M121.989,101.229l-8.778,9.073c4.641,4.516,7.397,10.706,7.397,17.702c0,6.995-2.755,13.186-7.397,17.702l8.778,9.073 c7.035-6.844,11.243-16.413,11.243-26.775C133.232,117.643,129.024,108.075,121.989,101.229z",
            })
          ),
        i.createElement(
          "g",
          { className: "SoundX" },
          i.createElement("line", {
            fill: "none",
            strokeWidth: t ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "170.667",
            x2: "223.167",
            y2: "84.5",
          }),
          i.createElement("line", {
            fill: "none",
            strokeWidth: t ? 10 : 0,
            stroke: "#fff",
            strokeMiterlimit: "10",
            x1: "137",
            y1: "84.5",
            x2: "223.167",
            y2: "170.667",
          })
        )
      );
    }
    function C() {
      return i.createElement(
        "svg",
        { width: "50px", height: "25px", viewBox: "0 0 50 25" },
        i.createElement("path", {
          d:
            "M46 0H4C1.8 0 0 1.8 0 4v17c0 2.2 1.8 4 4 4h42c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM21 18.916V5.084L32.805 12 21 18.916z",
        })
      );
    }
    function k() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Play",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          className: "playTriangle",
          d:
            "M65.321,33.521c-11.274-6.615-20.342-1.471-20.342,11.52V210.96c0,12.989,9.068,18.135,20.342,11.521l137.244-82.348 c11.274-6.618,11.274-17.646,0-24.509L65.321,33.521z",
        })
      );
    }
    function E() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Pause",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M44.979,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6H50.979c-3.3,0-6,2.7-6,6V219.364z",
        }),
        i.createElement("path", {
          d:
            "M149.267,219.364c0,3.3,2.7,6,6,6h49.753c3.3,0,6-2.7,6-6V36.5c0-3.3-2.7-6-6-6h-49.753c-3.3,0-6,2.7-6,6V219.364z",
        })
      );
    }
    function x() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_SortBy",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement(
          "g",
          { className: "time" },
          i.createElement("circle", {
            fill: "none",
            strokeWidth: "10",
            strokeMiterlimit: "10",
            cx: "91.735",
            cy: "128.014",
            r: "64",
          }),
          i.createElement("polyline", {
            fill: "none",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "91.735,90.833 91.735,128.014 116.58,152.086 \t",
          })
        )
      );
    }
    function z() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Check",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polyline", {
          fill: "none",
          stroke: "#fff",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "49.5,147.75 95,210.75 206.5,45.25 ",
        })
      );
    }
    function R(e) {
      let t = e.highlightColor || "#00ccff",
        r = e.color || "#2d73ff";
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DialogCheck",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement(
          "defs",
          null,
          i.createElement(
            "linearGradient",
            { id: "linear", x1: "0%", y1: "0%", x2: "100%", y2: "100%" },
            i.createElement("stop", {
              id: "stop0",
              offset: "0%",
              stopColor: t,
            }),
            i.createElement("stop", {
              id: "stop1",
              offset: "100%",
              stopColor: r,
            })
          ),
          i.createElement(
            "filter",
            { id: "f1", x: "0", y: "0", width: "200%", height: "200%" },
            i.createElement("feOffset", {
              result: "offOut",
              in: "SourceAlpha",
              dx: "20",
              dy: "20",
            }),
            i.createElement("feGaussianBlur", {
              result: "blurOut",
              in: "offOut",
              stdDeviation: "10",
            }),
            i.createElement("feBlend", {
              in: "SourceGraphic",
              in2: "blurOut",
              mode: "normal",
            })
          )
        ),
        i.createElement("path", {
          fill: "none",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00",
        }),
        i.createElement("path", {
          fill: "none",
          opacity: ".2",
          filter: "url(#f1)",
          stroke: "url(#linear)",
          strokeWidth: "24",
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: "10",
          d: "M206.5,45.25L95,210.75l-45.5-63",
          strokeDasharray: "365.19 365.19",
          strokeDashoffset: "0.00",
        })
      );
    }
    function L() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Lock",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          className: "topLock",
          d:
            "M203.553,197.794c0,21.929-17.778,39.706-39.706,39.706H92.154c-21.929,0-39.706-17.777-39.706-39.706v-71.693 c0-21.928,17.778-39.706,39.706-39.706h71.692c21.928,0,39.706,17.778,39.706,39.706V197.794z M128.001,129.664 c-8.941,0-16.19,7.248-16.19,16.189c0,5.589,2.833,10.518,7.137,13.427c2.066,1.395,0.318,23.508,0.318,32.842 c0,2.292-0.078,3.65,8.734,3.65c8.676,0,8.75-1.221,8.75-3.654c0-9.348-1.708-31.469,0.368-32.886 c4.269-2.916,7.071-7.821,7.071-13.38C144.191,136.912,136.941,129.664,128.001,129.664z",
        }),
        i.createElement("path", {
          className: "baseLock",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "22",
          strokeMiterlimit: "10",
          d:
            "M84.813,172.74V73.688l0,0 c0-23.85,19.335-43.188,43.187-43.188l0,0c23.852,0,43.188,19.337,43.188,43.188l0,0v23.885",
        })
      );
    }
    function O(e) {
      let t = "SVGIcon_Button SVGIcon_Throbber ";
      return (
        e.className && (t += e.className),
        i.createElement(
          "svg",
          {
            version: "1.1",
            id: "base",
            xmlns: "http://www.w3.org/2000/svg",
            className: t,
            x: "0px",
            y: "0px",
            width: "256px",
            height: "256px",
            viewBox: "0 0 256 256",
          },
          i.createElement(
            "g",
            { className: s.a.partCircle },
            i.createElement("path", {
              className: s.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895",
            }),
            i.createElement("path", {
              className: s.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M201.432,101.166",
            }),
            i.createElement("path", {
              className: s.a.roundOuter,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d: "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754",
            })
          ),
          i.createElement(
            "g",
            { className: s.a.mainOutline },
            i.createElement("path", {
              className: s.a.roundFill,
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundOuterOutline,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber01,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber02,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber03,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber04,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber05,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber06,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber07,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber08,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber09,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber10,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber11,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber12,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber13,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber14,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            }),
            i.createElement("path", {
              className: s.a.roundThrobber15,
              strokeLinecap: "butt",
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              d:
                "M127.82,23.895 c-54.686,0-99.487,42.167-103.745,95.754l55.797,23.069c4.729-3.231,10.44-5.122,16.584-5.122c0.551,0,1.098,0.014,1.642,0.047 l24.815-35.968c0-0.17-0.004-0.338-0.004-0.509c0-21.647,17.61-39.261,39.26-39.261s39.263,17.613,39.263,39.261 c0,21.65-17.611,39.264-39.263,39.264c-0.299,0-0.593-0.007-0.887-0.014l-35.392,25.251c0.018,0.462,0.035,0.931,0.035,1.396 c0,16.252-13.22,29.472-29.469,29.472c-14.265,0-26.19-10.185-28.892-23.666L27.66,156.37 c12.355,43.698,52.503,75.733,100.16,75.733c57.495,0,104.104-46.61,104.104-104.105S185.314,23.895,127.82,23.895z",
            })
          ),
          i.createElement(
            "g",
            { className: s.a.bottomCircle },
            i.createElement("path", {
              fill: "#ffffff",
              d:
                "M89.226,181.579L76.5,176.321c2.256,4.696,6.159,8.628,11.339,10.786 c11.197,4.668,24.11-0.647,28.779-11.854c2.259-5.425,2.274-11.405,0.033-16.841c-2.237-5.436-6.46-9.675-11.886-11.938 c-5.384-2.24-11.151-2.156-16.22-0.244l13.146,5.436c8.261,3.443,12.166,12.93,8.725,21.189 C106.976,181.115,97.486,185.022,89.226,181.579",
            })
          ),
          i.createElement(
            "g",
            { className: s.a.topCircle },
            i.createElement("circle", {
              fill: "none",
              stroke: "#ffffff",
              strokeWidth: "6",
              strokeMiterlimit: "10",
              cx: "161.731",
              cy: "101.274",
              r: "23.019",
            })
          )
        )
      );
    }
    function T(e) {
      return d.c.IN_GAMEPADUI
        ? i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "SVGIcon_Button SVGIcon_Bell",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e
            ),
            i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d:
                "M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24ZM18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z",
              fill: "currentColor",
            })
          )
        : i.createElement(
            "svg",
            {
              version: "1.1",
              id: "base",
              xmlns: "http://www.w3.org/2000/svg",
              className: "SVGIcon_Button SVGIcon_Bell",
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
            },
            i.createElement("path", {
              d:
                "M107.785,33.965c-34.875,8.972-60.644,40.618-60.644,78.308v53.903c0,4.965-4.035,8.99-8.975,8.99 c-9.929,0-17.978,8.066-17.978,17.971c0,9.924,8.059,17.969,18.013,17.969h179.598c9.948,0,18.014-8.066,18.014-17.969 c0-9.926-8.087-17.971-17.979-17.971c-4.956,0-8.975-3.993-8.975-8.99v-53.903c0-37.676-25.763-69.333-60.644-78.308v-9.281 c0-11.193-9.052-20.219-20.215-20.219c-11.143,0-20.215,9.052-20.215,20.219V33.965L107.785,33.965z M96.554,220.09h62.891 c0,17.366-14.079,31.445-31.445,31.445C110.633,251.535,96.554,237.458,96.554,220.09z",
            })
          );
    }
    function F(e) {
      return i.createElement(
        "svg",
        {
          style: { transform: `rotate(${e.angle}deg)` },
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Arrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 181.061,61.674 ",
        }),
        i.createElement("polyline", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "128,247.688 128,8.313 74.939,61.674 ",
        })
      );
    }
    function I() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          width: "50px",
          height: "100px",
          viewBox: "0 0 50 100",
        },
        i.createElement("polygon", {
          fill: "#ffffff",
          points:
            "0,0.093 0,25.702 24.323,50.026 0,74.349 0,99.955 49.929,50.026 ",
        })
      );
    }
    function W(e) {
      return i.createElement(
        "svg",
        {
          style: { transform: `rotate(${e.angle}deg)` },
          version: "1.1",
          id: "arrowBase",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoubleArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polyline", {
          className: "Arrow1",
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "23",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          points: "135.65,21.667 30.081,127.235 137.18,234.333 ",
        }),
        !e.singlearrow &&
          i.createElement("polyline", {
            className: "Arrow2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "23",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "224.389,21.667 118.821,127.235 225.92,234.333 ",
          })
      );
    }
    function U() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Maximize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("rect", {
          x: "24",
          y: "42.167",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "208",
          height: "171.667",
        }),
        i.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "42",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "54.01",
          x2: "232",
          y2: "54.01",
        })
      );
    }
    function j() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Minimize",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("line", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          x1: "24",
          y1: "209.01",
          x2: "232",
          y2: "209.01",
        })
      );
    }
    function N() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Restore",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polyline", {
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "12",
          strokeMiterlimit: "10",
          points: "83,90.861 83,42.167 232,42.167 232,165.14 173,165.14 ",
        }),
        i.createElement("rect", {
          x: "24",
          y: "90.861",
          fill: "none",
          stroke: "rgb(120, 138, 146)",
          strokeWidth: "18",
          strokeMiterlimit: "10",
          width: "149",
          height: "122.973",
        })
      );
    }
    function A() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Reload",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "30",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M229.809,147.639 c-9.178,47.863-51.27,84.027-101.809,84.027c-57.253,0-103.667-46.412-103.667-103.666S70.747,24.334,128,24.334 c34.107,0,64.368,16.472,83.261,41.895",
        }),
        i.createElement("polygon", {
          points: "147.639,108.361 245.755,10.166 245.834,108.361 ",
        })
      );
    }
    function G() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Trash",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement(
          "g",
          { className: "base" },
          i.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d:
              "M216.773,43.909 l-7.399,177.589c-0.37,8.893-7.919,16.1-16.812,16.1H63.437c-8.914,0-16.442-7.24-16.812-16.1L39.226,43.909",
          })
        ),
        i.createElement(
          "g",
          { className: "lines" },
          i.createElement("path", {
            className: "line1",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M128,68.12v137.197",
          }),
          i.createElement("path", {
            className: "line2",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M83.613,68.12 l4.035,137.197",
          }),
          i.createElement("path", {
            className: "line3",
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M172.387,68.12 l-4.035,137.197",
          })
        ),
        i.createElement(
          "g",
          { className: "lid" },
          i.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M27.121,38.577H228.88",
          }),
          i.createElement("path", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "10",
            d:
              "M87.648,38.577l4.319-10.796c2.072-5.181,8.292-9.379,13.84-9.379h44.386 c5.572,0,11.761,4.18,13.841,9.379l4.319,10.796",
          })
        )
      );
    }
    function D(e) {
      return i.createElement(
        "svg",
        {
          style: { transform: `rotate(${e.angle}deg)` },
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_FlatArrow",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polygon", {
          points: "13.913,141 128,59 242.087,141 ",
          fill: "#ffffff",
        })
      );
    }
    function P(e) {
      return d.c.IN_GAMEPADUI
        ? i.createElement(
            "svg",
            {
              width: "36",
              height: "36",
              className: "SVGIcon_Button SVGIcon_FriendIcon",
              viewBox: "0 0 36 36",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            i.createElement("path", {
              d:
                "M18 17C15.6131 17 13.3239 17.9482 11.636 19.636C9.94821 21.3239 9 23.6131 9 26V31H27V26C27 23.6131 26.0518 21.3239 24.364 19.636C22.6761 17.9482 20.3869 17 18 17ZM18 14C18.9889 14 19.9556 13.7068 20.7779 13.1573C21.6001 12.6079 22.241 11.827 22.6194 10.9134C22.9978 9.99979 23.0969 8.99446 22.9039 8.02455C22.711 7.05465 22.2348 6.16373 21.5355 5.46447C20.8363 4.76521 19.9454 4.289 18.9755 4.09608C18.0055 3.90315 17.0002 4.00217 16.0866 4.3806C15.173 4.75904 14.3921 5.39991 13.8427 6.22215C13.2932 7.0444 13 8.0111 13 9C13 10.3261 13.5268 11.5979 14.4645 12.5355C15.4021 13.4732 16.6739 14 18 14Z",
              fill: "currentColor",
            }),
            i.createElement("path", {
              className: "WavingArm",
              opacity: e.bShowArm ? "1" : "0",
              d:
                "M4.67541 11.8555C5.6007 10.8308 7.18156 10.7501 8.20635 11.6754L18.9515 21.3773L15.6007 25.0884L4.85556 15.3865C3.83077 14.4612 3.75011 12.8803 4.67541 11.8555V11.8555Z",
              fill: "currentColor",
              strokeWidth: "0",
            }),
            i.createElement("path", {
              opacity: e.bShowArm ? "1" : "0",
              d:
                "M32.3573 11.8876C33.2626 12.93 33.1515 14.509 32.109 15.4144L23.2784 23.083L20 19.3078L28.8305 11.6392C29.873 10.7339 31.452 10.8451 32.3573 11.8876Z",
              fill: "currentColor",
              strokeWidth: "0",
            })
          )
        : i.createElement(
            "svg",
            {
              version: "1.1",
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "SVGIcon_Button SVGIcon_FriendIcon" +
                (e.bPending ? " SVGIcon_FriendIcon_Pending" : ""),
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 256 256",
            },
            i.createElement(
              "g",
              { className: "Outline" },
              i.createElement(
                "g",
                { transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)" },
                i.createElement("path", {
                  d:
                    "M102.239,90.394c-22.556,0-40.906-18.351-40.906-40.906c0-22.556,18.35-40.906,40.906-40.906s40.906,18.35,40.906,40.906 C143.145,72.043,124.795,90.394,102.239,90.394z",
                })
              ),
              i.createElement("path", {
                d:
                  "M127.453,250.212c-30.208,0-52.086-4.188-65.028-12.45c-12.507-7.983-13.141-17.484-13.141-19.308v-41.781 c0-20.554,5.356-38.104,15.489-50.754c11.63-14.519,29.216-22.193,50.858-22.194h23.646c21.643,0,39.229,7.674,50.858,22.193 c10.133,12.65,15.488,30.201,15.488,50.754v41.751c0.011,2.202-0.586,8.058-6.43,14.175 c-11.164,11.687-35.301,17.613-71.732,17.613C127.458,250.212,127.458,250.212,127.453,250.212z",
              }),
              i.createElement("path", {
                className: "WavingArm",
                opacity: e.bPending ? "1" : "0",
                d:
                  "M87.625,170.102c-5.877,0-14.85-1.804-24.219-10.4c-8.677-7.961-20.959-20.438-30.563-31.048 c-18.766-20.732-21.125-26.658-19.522-32.832c1.463-5.64,10.288-27.077,26.729-28.926c0.429-0.048,0.867-0.072,1.303-0.072 c7.609,0,14.543,6.335,38.063,31.516c7.141,7.645,14.524,15.549,18.002,18.33l0.803,0.641c5.551,4.432,11.291,9.015,15.104,14.136 c8.477,11.383,3.634,20.705,1.158,24.185C108.034,164.692,97.995,170.102,87.625,170.102z",
              })
            ),
            i.createElement(
              "g",
              { className: "foreground" },
              i.createElement(
                "g",
                { transform: "matrix(1.34048,0,0,1.34048,-10.0942,-5.50445)" },
                i.createElement("circle", {
                  fill: "currentColor",
                  cx: "102.239",
                  cy: "49.488",
                  r: "33.446",
                })
              ),
              i.createElement("path", {
                fill: "currentColor",
                d:
                  "M195.624,218.454v-41.781c0-34.743-16.666-62.948-56.347-62.948h-11.822h-0.997h-10.826 c-39.68,0.001-56.348,28.205-56.348,62.948v41.781c0,0,0,21.758,68.169,21.758C196.62,240.214,195.624,218.454,195.624,218.454z",
              }),
              i.createElement("path", {
                className: "WavingArm",
                opacity: e.bPending ? "1" : "0",
                d:
                  "M41.167,76.833c6.53-0.734,39.348,39.127,50.007,47.647c10.659,8.52,21.327,16.686,15.16,25.353 s-20.646,16.74-36.167,2.5 s-48.516-48.801-47.167-54S31.599,77.909,41.167,76.833z",
              })
            )
          );
    }
    function H() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DoNotDisturb",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("circle", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "24",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "101.5",
        }),
        i.createElement("line", {
          fill: "none",
          stroke: "#ffffff",
          strokeWidth: "24",
          strokeMiterlimit: "10",
          x1: "73",
          y1: "128",
          x2: "183",
          y2: "128",
        })
      );
    }
    function V(e) {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          style: { transform: `scaleX(${e.bFlipHorizontal ? -1 : 1})` },
          className: "SVGIcon_Button SVGIcon_MediaControls",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          className: "Arrow",
          d:
            "M77.003,54.763h32.784c3.794,0,9.113,2.181,11.814,4.848l63.604,62.773c2.703,2.667,2.727,7.054,0.05,9.748 l-63.705,64.206c-2.674,2.693-7.968,4.898-11.763,4.898H77.003",
        }),
        i.createElement("polyline", {
          className: "preArrowBox",
          opacity: e.bHidePreArrow ? "0" : "1",
          points: "6.833,54.763 46.71,54.763 46.71,201.236 6.833,201.236 \t",
        }),
        i.createElement("polyline", {
          className: "jumpAheadBox",
          opacity: e.bShowJumpAheadBox ? "1" : "0",
          points: "6.833,54.764 86.386,54.764 86.386,201.236 6.833,201.236 \t",
        }),
        i.createElement("polyline", {
          className: "postArrowBox",
          opacity: e.bHidePostArrow ? "0" : "1",
          points:
            "209.29,54.763 249.167,54.763 249.167,201.236 209.29,201.236 \t",
        })
      );
    }
    function q(e) {
      const t = Object(o.a)(
        "SVGIcon_Button",
        "SVGIcon_SteamLogo",
        e && e.className
      );
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          fill: "#ffffff",
          d:
            "M127.374,5.355c-64.404,0-117.167,49.661-122.18,112.77l65.712,27.171 c5.567-3.808,12.293-6.032,19.53-6.032c0.649,0,1.294,0.017,1.934,0.051l29.226-42.354c0-0.202-0.005-0.399-0.005-0.598 c0-25.496,20.74-46.241,46.237-46.241c25.498,0,46.238,20.745,46.238,46.241c0,25.494-20.74,46.242-46.238,46.242 c-0.352,0-0.698-0.011-1.047-0.021l-41.68,29.741c0.022,0.546,0.041,1.095,0.041,1.644c0,19.141-15.569,34.707-34.706,34.707 c-16.796,0-30.843-11.99-34.026-27.869l-46.993-19.43c14.55,51.464,61.831,89.189,117.957,89.189 c67.713,0,122.604-54.893,122.604-122.604C249.979,60.244,195.086,5.355,127.374,5.355",
        }),
        i.createElement("path", {
          fill: "#ffffff",
          d:
            "M82.026,191.387l-15.061-6.22c2.67,5.56,7.285,10.208,13.418,12.767 c13.25,5.521,28.531-0.771,34.054-14.027c2.674-6.416,2.694-13.5,0.04-19.93c-2.646-6.431-7.64-11.451-14.063-14.129 c-6.371-2.647-13.196-2.552-19.198-0.291l15.561,6.437c9.776,4.073,14.396,15.299,10.324,25.071 C103.031,190.841,91.801,195.464,82.026,191.387",
        }),
        i.createElement("path", {
          fill: "#ffffff",
          d:
            "M198.639,96.359c0-16.987-13.82-30.809-30.809-30.809c-16.987,0-30.813,13.821-30.813,30.809 c0,16.988,13.824,30.806,30.813,30.806S198.639,113.347,198.639,96.359 M144.736,96.306c0-12.783,10.363-23.142,23.145-23.142 c12.783,0,23.145,10.359,23.145,23.142c0,12.783-10.36,23.142-23.145,23.142C155.1,119.447,144.736,109.089,144.736,96.306",
        })
      );
    }
    function Y() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Viewers",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          className: "frontGuy",
          fill: "#666666",
          d:
            "M181.732,53.151c-17.255,0-31.321,13.316-31.321,32.634v25.132 c0,18.005,24.006,21.006,24.382,21.381c-10.691,2.813-30.947,8.252-40.888,15.566c-8.252,6.003-11.44,18.005-13.128,22.882 c-0.75,2.063-1.688,5.064-1.688,7.127c0,0,0,9.94,0,19.881s12.941,16.505,18.005,16.505h89.65c4.877,0,18.006-5.627,18.006-16.505 s0-19.881,0-19.881c0-2.251-0.938-5.627-1.688-7.689c-4.313-10.878-4.688-16.316-13.315-22.319 c-9.941-6.939-30.009-12.19-40.512-15.004c0.374-0.563,24.193-4.127,24.193-22.131V85.785 C213.053,66.467,198.986,53.151,181.732,53.151L181.732,53.151z",
        }),
        i.createElement("path", {
          className: "backGuy",
          fill: "rgb(144, 153, 161)",
          d:
            "M84.204,34.396c-20.068,0-36.385,15.38-36.385,38.074v29.258c0,20.818,27.945,24.382,28.32,24.944 c-12.378,3.189-36.01,9.565-47.638,18.006c-9.753,7.127-13.504,21.006-15.379,26.632c-0.75,2.251-1.876,6.002-1.876,8.253  c0,0,0,11.44,0,23.257c0,11.815,15.004,19.13,20.819,19.13h104.279c5.814,0,20.818-6.564,20.818-19.13c0-12.566,0-23.257,0-23.257 c0-2.438-1.125-6.564-2.063-8.815c-5.063-12.566-5.438-18.942-15.566-26.069c-11.628-8.065-34.885-14.067-47.076-17.443 c0.375-0.563,28.133-4.876,28.133-25.695V72.469C120.59,49.775,104.272,34.396,84.204,34.396L84.204,34.396z",
        })
      );
    }
    function Z() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          className: "SVGIcon_Button SVGIcon_ChatBubble",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 64 64",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            d:
              "M33,5C18.7,5,7.1,16.6,7.1,30.9c0,5.2,1.5,10.1,4.2,14.1c-0.6,3.7-4.5,10.5-6.2,13.5c-1.3,2.2,11.4-3.8,16.3-4.5c3.5,1.8,7.5,2.8,11.7,2.8c14.3,0,25.9-11.6,25.9-25.9S47.3,5,33,5z",
          })
        )
      );
    }
    function K() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          className: "SVGIcon_Button SVGIcon_Globe",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 64 64",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            d:
              "M32.5,5C17.9,5,6,16.9,6,31.5C6,46.1,17.9,58,32.5,58S59,46.1,59,31.5C59,16.9,47.1,5,32.5,5 M32.5,54.7c-1.2,0-2.5-0.1-3.7-0.3c-1.1-1.1-2.1-2.8-3-4.8c-0.8-1.8-1.4-3.8-2-6c2.7-0.3,5.6-0.5,8.6-0.5c3,0,5.9,0.2,8.6,0.5c-0.5,2.2-1.2,4.2-2,6c-0.9,2-1.9,3.7-3,4.8C35,54.6,33.7,54.7,32.5,54.7 M32.5,41.4c-3.2,0-6.2,0.2-9,0.5c-0.6-3-0.9-6.2-1-9.6h19.9c0,3.4-0.4,6.6-1,9.6C38.7,41.6,35.7,41.4,32.5,41.4 M32.5,8.3c1.2,0,2.5,0.1,3.7,0.3c1.1,1.1,2.1,2.8,3,4.8c0.8,1.8,1.4,3.8,2,6c-2.7,0.3-5.6,0.5-8.6,0.5c-3,0-5.9-0.2-8.6-0.5c0.5-2.2,1.2-4.2,2-6c0.9-2,1.9-3.7,3-4.8C30,8.4,31.3,8.3,32.5,8.3 M32.5,21.6c3.2,0,6.2-0.2,9-0.5c0.6,3,0.9,6.2,1,9.6H22.6c0-3.4,0.4-6.6,1-9.6C26.3,21.4,29.3,21.6,32.5,21.6 M44.1,30.7c0-3.5-0.4-6.8-1-9.8c3.4-0.5,6.4-1.1,8.8-2c2.3,3.5,3.6,7.5,3.7,11.8H44.1z M20.9,30.7H9.3c0.1-4.2,1.4-8.3,3.7-11.8c2.5,0.8,5.5,1.5,8.8,2C21.3,23.9,21,27.2,20.9,30.7 M20.9,32.3c0,3.5,0.4,6.8,1,9.8c-3.4,0.5-6.4,1.1-8.8,2c-2.3-3.5-3.6-7.5-3.7-11.8H20.9z M44.1,32.3h11.6c-0.1,4.2-1.4,8.3-3.7,11.8c-2.5-0.8-5.5-1.5-8.8-2C43.7,39.1,44,35.8,44.1,32.3 M51,17.5c-0.1,0-0.2,0.1-0.3,0.1c-2.3,0.7-5,1.3-7.9,1.7c-0.9-4.1-2.3-7.6-4-10.1c3.8,1.1,7.3,3.1,10.2,5.9C49.6,15.9,50.3,16.6,51,17.5 M26.3,9.2c-1.7,2.5-3.1,6-4,10.1c-2.9-0.4-5.6-1-7.9-1.7c-0.1,0-0.2-0.1-0.3-0.1c0.6-0.8,1.3-1.6,2.1-2.4C19,12.2,22.5,10.2,26.3,9.2 M14,45.5c0.1,0,0.2-0.1,0.3-0.1c2.3-0.7,5-1.3,7.9-1.7c0.9,4.1,2.3,7.6,4,10.1c-3.8-1.1-7.3-3.1-10.2-5.9C15.4,47.1,14.7,46.4,14,45.5 M38.7,53.8c1.7-2.5,3.1-6,4-10.1c2.9,0.4,5.6,1,7.9,1.7c0.1,0,0.2,0.1,0.3,0.1c-0.6,0.8-1.3,1.6-2.1,2.4C46,50.8,42.5,52.8,38.7,53.8",
          })
        )
      );
    }
    function $() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_5",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 64 64",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            d:
              "M40.6,32.7l15.1-15.1c2.6-2.6,2.6-6.7,0-9.3c-2.6-2.6-6.7-2.6-9.3,0L31.3,23.4L16.2,8.3c-2.6-2.6-6.7-2.6-9.3,0c-2.6,2.6-2.6,6.7,0,9.3L22,32.7L6.9,47.8c-2.6,2.6-2.6,6.7,0,9.3c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9L31.3,42l15.1,15.1c1.3,1.3,3,1.9,4.7,1.9s3.4-0.6,4.7-1.9c2.6-2.6,2.6-6.7,0-9.3L40.6,32.7z",
          })
        )
      );
    }
    function X() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineGrabber",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement(
          "g",
          { className: "leftarrow", opacity: "0" },
          i.createElement("polygon", {
            points: "127.817,4.403 4,128 127.817,251.598",
          })
        ),
        i.createElement(
          "g",
          { className: "rightarrow", opacity: "0" },
          i.createElement("polygon", {
            points: "127.816,4.403 251.633,128 127.816,251.598",
          })
        ),
        i.createElement(
          "g",
          { className: "grabber" },
          i.createElement("polygon", {
            points:
              "145.692,22.132 145.692,234.361 127.817,251.598 110.307,234.361 110.307,22.132 127.817,4.403",
          })
        )
      );
    }
    function J() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_STVTimelineMarker",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polygon", {
          className: "pointer",
          points:
            "128,154.979 46.374,230.548 46.374,253.333 209.626,253.333 209.626,230.548 \t",
        }),
        i.createElement("rect", {
          className: "line",
          x: "116.271",
          y: "3.168",
          width: "23.459",
          height: "137.332",
        })
      );
    }
    function Q() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_BigPicture",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          fill: "currentColor",
          d:
            "M213.771,68.659c-4.108-7.066-46.007-7.231-49.293-7.231H128H91.522c-3.286,0-45.186,0.165-49.293,7.231 c-19.555,29.248-27.385,100.263-27.276,104.01c0.238,8.294,2.11,24.583,16.595,35.162c9.201,6.72,22.183,8.709,29.083,3.614 c4.989-3.682,11.995-19.224,19.061-32.204c7.064-12.981,9.202-11.174,12.98-12.159c3.78-0.986,36.066-0.74,36.066-0.74 s30.809-0.247,34.588,0.74c3.777,0.985,5.915-0.822,12.98,12.159c7.064,12.98,14.07,28.522,19.061,32.204 c6.9,5.095,19.882,3.106,29.083-3.614c14.485-10.58,16.356-26.868,16.595-35.162C241.154,168.922,233.325,97.906,213.771,68.659z M67.251,128.14c-14.974,0-27.112-12.137-27.112-27.111c0-14.975,12.137-27.112,27.112-27.112 c14.973,0,27.111,12.137,27.111,27.112C94.362,116.003,82.224,128.14,67.251,128.14z M188.749,128.14 c-14.974,0-27.111-12.137-27.111-27.111c0-14.975,12.138-27.112,27.111-27.112c14.973,0,27.111,12.137,27.111,27.112 C215.86,116.003,203.722,128.14,188.749,128.14z",
        })
      );
    }
    function ee(e) {
      const { className: t } = e;
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: Object(o.a)("SVGIcon_Button", "SVGIcon_MobilePhone", t),
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M165.693,45.186H91.368c-7.963,0-14.41,6.447-14.41,14.41V210.9c0,7.964,6.447,14.41,14.41,14.41h74.134 c7.965,0,14.41-6.447,14.41-14.41V59.596C180.102,51.633,173.657,45.186,165.693,45.186z M113.172,57.509h30.717 c1.707,0,3.223,1.327,3.223,3.224c0,1.896-1.328,3.223-3.223,3.223h-30.717c-1.707,0-3.223-1.328-3.223-3.223 C109.949,58.837,111.465,57.509,113.172,57.509z M128.529,213.554c-4.551,0-8.152-3.603-8.152-8.153c0-4.55,3.604-8.152,8.152-8.152 s8.151,3.603,8.151,8.152C136.682,209.761,133.081,213.554,128.529,213.554z M169.105,186.819h-81.15V74.384h81.15V186.819 L169.105,186.819z",
        })
      );
    }
    function te() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_VR",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M224.389,62.411H31.613c-10.147,0-18.36,8.214-18.36,18.36v94.453c0,10.147,8.215,18.359,18.36,18.359h192.775 c10.146,0.241,18.358-7.968,18.358-18.116V80.771C242.747,70.625,234.534,62.411,224.389,62.411z M92.317,175.026H71.646 L35.472,79.832h21.895l25.022,72.484l24.343-72.484h21.895L92.317,175.026z M195.264,175.026l-19.175-32.095h-2.176h-14.279 v32.095h-19.991V79.832h35.63c13.056,0,22.664,2.607,28.831,7.819c6.164,5.215,9.247,12.49,9.247,21.827 c0,7.343-1.61,13.463-4.828,18.359c-3.219,4.896-7.729,8.614-13.531,11.151l22.575,36.038H195.264z",
        }),
        i.createElement("path", {
          d:
            "M187.784,100.298c-2.812-2.312-7.391-3.468-13.735-3.468h-14.415v28.966h15.639c5.257,0,9.36-1.336,12.308-4.012 c2.945-2.673,4.42-6.368,4.42-11.083C192,106.078,190.593,102.61,187.784,100.298z",
        })
      );
    }
    function re() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_LargeMobilePhone",
          x: "0px",
          y: "0px",
          width: "128px",
          height: "255px",
          viewBox: "0 0 128 255",
        },
        i.createElement("rect", {
          className: "screen",
          x: "7.756",
          y: "5.518",
          fill: "#292D33",
          width: "112.144",
          height: "234.357",
        }),
        i.createElement("path", {
          className: "frame",
          fill: "#3C414B",
          d:
            "M40.334,15.72h47.237c3.957,0,7.164-3.259,7.164-7.28c0-1.113,0.889-2.017,1.984-2.017h9.746 c7.417,0,13.432,6.108,13.432,13.646v206.156c0,7.538-6.015,13.647-13.431,13.647H21.459c-7.417,0-13.429-6.109-13.429-13.647 V20.071c0-7.536,6.013-13.646,13.429-13.646h9.728c1.096,0,1.983,0.903,1.983,2.017C33.17,12.461,36.377,15.72,40.334,15.72 M107.057,0.001H20.87c-9.922,0-17.965,8.174-17.965,18.256v217.505c0,10.082,8.043,18.256,17.965,18.256h86.188 c9.923,0,17.966-8.174,17.966-18.256V18.257C125.022,8.175,116.979,0.001,107.057,0.001",
        }),
        i.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,33.349C0.369,33.349,0,33.725,0,34.189v7.616c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 v-7.617C1.653,33.725,1.283,33.349,0.826,33.349",
        }),
        i.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,51.56C0.369,51.56,0,51.936,0,52.4v16.8c0,0.465,0.37,0.841,0.826,0.841s0.827-0.376,0.827-0.841 V52.4C1.653,51.936,1.283,51.56,0.826,51.56",
        }),
        i.createElement("path", {
          fill: "#3C414B",
          d:
            "M0.826,75.304C0.369,75.304,0,75.68,0,76.144v15.904c0,0.464,0.37,0.84,0.826,0.84s0.827-0.376,0.827-0.84 V76.144C1.653,75.68,1.283,75.304,0.826,75.304",
        }),
        i.createElement("path", {
          fill: "#3C414B",
          d:
            "M127.617,58.056c-0.457,0-0.827,0.376-0.827,0.84v27.328c0,0.464,0.37,0.84,0.827,0.84 c0.456,0,0.826-0.376,0.826-0.84V58.896C128.443,58.432,128.073,58.056,127.617,58.056",
        })
      );
    }
    function ne() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Envelope",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,48.809 127.22,128 252.833,48.809 ",
        }),
        i.createElement("polygon", {
          fill: "#3C414B",
          points: "252.833,203.68 252.833,55.439 185.151,99.131 ",
        }),
        i.createElement("polygon", {
          fill: "#3C414B",
          points:
            "247.958,207.191 180.47,101.472 128.001,134.24 75.142,101.472 7.849,207.191 ",
        }),
        i.createElement("polygon", {
          fill: "#3C414B",
          points: "3.167,203.682 3.167,55.441 70.851,99.132 ",
        })
      );
    }
    function ie() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Facebook",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M236.824,5.666H19.176c-7.467,0-13.51,6.043-13.51,13.51v217.658c0,7.457,6.043,13.5,13.51,13.5h117.186v-94.746h-31.893 v-36.926h31.893V91.434c0-31.604,19.295-48.813,47.488-48.813c13.51,0,25.109,1.012,28.494,1.459v33.027l-19.553,0.01 c-15.332,0-18.299,7.293-18.299,17.975v23.58h36.576l-4.768,36.926h-31.809v94.736h62.352c7.447,0,13.49-6.043,13.49-13.51V19.176 C250.334,11.709,244.291,5.666,236.824,5.666z",
        })
      );
    }
    function ae() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Twitter",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M250.151,128.021c0,67.418-54.604,122.022-122.022,122.022S6.107,195.439,6.107,128.021C6.107,60.604,60.712,6,128.129,6 S250.151,60.604,250.151,128.021z M105.799,192.389c54.117,0,83.707-44.842,83.707-83.707c0-1.282,0-2.563-0.062-3.783 c5.736-4.148,10.739-9.335,14.705-15.252c-5.247,2.318-10.922,3.905-16.901,4.637c6.103-3.661,10.738-9.396,12.936-16.29 c-5.675,3.355-11.959,5.796-18.67,7.138c-5.369-5.734-12.995-9.273-21.477-9.273c-16.228,0-29.406,13.179-29.406,29.407 c0,2.318,0.243,4.576,0.793,6.711c-24.466-1.22-46.125-12.934-60.646-30.75c-2.501,4.332-3.965,9.396-3.965,14.765 c0,10.189,5.186,19.218,13.117,24.465c-4.819-0.122-9.334-1.464-13.3-3.661c0,0.122,0,0.244,0,0.366 c0,14.275,10.128,26.113,23.611,28.857c-2.44,0.672-5.064,1.039-7.748,1.039c-1.892,0-3.723-0.184-5.553-0.551 c3.722,11.714,14.581,20.195,27.455,20.44c-10.067,7.868-22.757,12.566-36.546,12.566c-2.379,0-4.697-0.122-7.016-0.427 C73.707,187.507,89.204,192.389,105.799,192.389",
        })
      );
    }
    function se() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_YouTube",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M243.402,70.101c-2.775-10.309-10.906-18.439-21.217-21.217c-18.838-5.152-94.185-5.152-94.185-5.152 s-75.348,0-94.185,4.957c-10.112,2.775-18.44,11.104-21.216,21.413C7.644,88.94,7.644,128,7.644,128s0,39.257,4.957,57.896 c2.775,10.313,10.905,18.439,21.216,21.219c19.036,5.154,94.185,5.154,94.185,5.154s75.347,0,94.185-4.957 c10.311-2.771,18.441-10.906,21.217-21.217c4.953-18.838,4.953-57.898,4.953-57.898S248.557,88.94,243.402,70.101z M104.008,164.088 V91.912L166.668,128L104.008,164.088z",
        })
      );
    }
    function oe() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_TwitchTV",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M28.176,8.026L11.763,49.97v171.427h58.358v31.003h32.826l31.003-31.003h47.414l63.829-63.829V8.026H28.176z M223.311,146.625l-36.474,36.474h-58.359l-31.002,31.003v-31.003H48.237V29.91h175.074V146.625z M186.837,71.855v63.829h-21.885 V71.855H186.837z M128.478,71.855v63.829h-21.883V71.855H128.478z",
        })
      );
    }
    function ce() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_CSGO",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M236.979,138.059c0.548,0.078,6.91,0.101,7.772,0.032 c1.215-0.095,1.396,0.068,1.388,0.708c-0.01,0.397,0.012,3.039-2.365,7.32c-3.301,5.948-12.079,10.436-12.55,10.672 c-0.47,0.233-0.53,0.484-0.136,0.75c0.434,0.295,8.068,1.454,9.084,1.611c1.017,0.154,0.637,1.001,0.637,1.001 s-0.704,2.621-2.895,5.36c-2.189,2.738-9.311,6.123-8.583,6.123c0.731,0,7.187,0.159,6.181,1.422 c-3.019,3.786-13.603,9.528-18.43,13.813c-13.388,11.885-13.217,12.864-15.52,15.09c-0.983-3.298-3.02-12.658-3.02-12.658 l-6.105-11.467c4.413,0.18,6.364,0.081,8.952,0.081c9.214,0,17.525-2.185,22.234-5.841l2.371-1.843l-2.911-0.728 c-2.131-0.528-7.121-1.782-11.896-2.979c2.184-0.104,10.803-1.299,14.413-5.339c0.136-0.151,0.276-0.321,0.406-0.494l1.245-1.664 l-2.404-0.735c-2.607-0.799-5.948-1.682-8.517-2.335c3.173-1.572,7.585-3.942,10.048-6.088c4.83-4.203,7.226-9.709,7.322-9.943 l0.9-2.098l-10.772,0.318c1.503-1.483,3.218-3.197,3.939-3.991c1.43-1.571,4.053-6.221,4.198-9.896l0.072-1.787l-1.763,0.288 c-1.979,0.322-5.301,1.279-8.179,2.173c2.025-2.193,4.296-4.767,5.46-6.484c2.687-3.964,2.76-8.371,2.597-12.916l-0.104-2.881 l-2.261,1.79c-2.559,2.028-7.595,5.031-11.097,7.047c1.538-3.644,3.54-8.752,3.813-11.276c0.5-4.681-0.248-10.196-0.248-10.196 l-10.76,9.394c0.885-1.953,1.684-4.013,2.117-5.832c1.735-7.29,0.055-17.892-0.021-18.338l-0.452-2.807l-7.777,7.739 c0.722-3.535,1.465-8.253,1.23-11.789c-0.426-6.321-2.278-10.517-2.359-10.694l-1.01-2.251l-6.465,8.577 c0.231-4.285,0.27-10.24-0.948-13.547c-1.934-5.262-3.651-8.007-3.723-8.121l-1.232-1.958l-3.057,4.85 c0.018-2.967-0.11-6.475-0.69-8.68c-1.202-4.543-2.825-6.396-3.002-6.592l-1.325-1.433l-1.623,2.705 c-0.278-3.19-1.112-7.084-3.343-9.478l-0.814-0.872l-1.012,0.623c-0.327,0.201-0.714,0.497-1.104,0.823 c-0.154-1.135-0.365-2.451-0.639-3.691c0.563-4.733,1.186-10.03,1.206-10.452c0.027-0.547,0.274-0.767,1.017-0.391 c0.898,0.452,3.156,2.064,5.187,6.133c2.036,4.067,3.132,11.324,3.117,12.044c-0.009,0.383,0.291,0.757,0.438,0.151 c0.145-0.607,0.478-7.591,0.623-8.312c0.081-0.383,0.199-0.484,0.737-0.212c0.496,0.249,2.959,2.181,4.899,6.463 c1.179,2.599,1.634,11.946,1.574,12.653c-0.106,1.278,0.313,0.891,0.339,0.883c-0.009,0.013-0.025,0.04-0.03,0.049 c0.03-0.041,0.036-0.049,0.03-0.049c0.573-0.841,4.21-8.99,4.519-9.377c0.313-0.39,0.521-0.395,0.835,0.002 c0.262,0.33,2.095,1.717,4.049,10.088c1.902,8.135,1.949,11.542,1.848,12.682c-0.08,0.86,0.339,0.993,0.731,0.524 c0.389-0.47,5.104-9.201,5.497-9.515c0.389-0.313,0.613-0.309,0.927,0.161c0.312,0.469,2.718,4.762,3.684,11.448 c0.861,5.947,0.608,13.599,0.375,14.381c-0.235,0.782-0.135,1.077,0.493,0.53c0.623-0.548,10.299-8.412,11.004-9.038 c0.703-0.627,1.18-0.65,1.34-0.046c0.172,0.654,0.822,8.654,0.275,15.225c-0.549,6.571-2.626,12.752-2.94,13.145 c-0.312,0.391,0.087,0.712,0.478,0.555c0.394-0.157,11.902-10.018,12.645-10.402c0.711-0.367,1.043,0.005,1.105,0.507 c0.068,0.544,0.966,3.098-0.419,11.269c-0.959,5.65-3.54,11.876-3.855,12.033c-0.313,0.157-0.077,0.336,0.234,0.259 c0.315-0.079,8.324-3.488,8.872-3.567c0.546-0.079,0.671,0.339,0.514,0.808c-0.158,0.469-0.458,6.273-2.534,11.639 c-2.603,6.732-6.056,11.001-6.056,11.001s-0.252,0.519,0.217,0.519s9.266-0.186,9.813-0.263c0.547-0.079,0.627,0.156,0.547,0.704 c-0.077,0.547,0.858,9.116-8.624,14.601C236.524,137.734,236.432,137.979,236.979,138.059z M174.473,24.823 c1.981,3.34,2.018,9.248,1.836,11.469l-0.52,6.238l5.25-8.744c0.395,0.843,0.85,2.003,1.25,3.524 c1.02,3.877,0.422,13.082,0.417,13.173l-0.384,5.752l6.435-10.212c0.628,1.27,1.45,3.097,2.32,5.459 c1.466,3.983,0.772,13.806,0.381,17.257l-0.602,5.308l9.568-12.69c0.493,1.707,1.058,4.21,1.259,7.227 c0.39,5.821-2.272,15.731-2.299,15.83l-1.428,5.26l11.125-11.068c0.377,3.586,0.772,9.774-0.304,14.302 c-1.2,5.057-5.778,12.588-5.823,12.664l-1.806,3.992l16.878-14.09c-0.116,1.366-0.262,2.944-0.423,4.435 c-0.312,2.935-3.954,11.389-5.335,14.399l-1.827,4.002l3.856-2.115c0.381-0.208,8.027-4.41,12.979-7.778 c-0.039,3.484-0.537,6.042-2.139,8.4c-2.189,3.234-9.05,10.198-9.118,10.268l-4.352,4.408l5.861-2.004 c0.08-0.025,6.868-2.34,11.188-3.41c-0.675,2.445-2.208,5.125-3.11,6.118c-1.319,1.449-6.429,6.429-6.48,6.482l-2.682,2.614 l13.475-0.404c-1.06,1.837-2.89,4.549-5.457,6.783c-3.727,3.244-12.956,7.341-13.048,7.383l-3.952,1.746l4.201,1.008 c0.062,0.015,5.637,1.354,10.266,2.67c-3.412,2.191-9.291,3.081-10.948,3.138c-2.06,0.072-11.075,0.125-11.075,0.125l-11.51,0.069 l11.162,2.804c0,0,12.587,3.164,19.486,4.894c-4.398,2.216-10.717,3.493-17.657,3.493c-3.102,0-10.335-0.284-15.048-0.483 c4.064,6.069,7.041,11.004,7.992,13.681c2.813,7.915,6.777,28.269,6.889,48.907c0.039,6.572-1.081,11.649-9.022,11.649 c-0.288,0-0.597-0.038-0.908-0.092c-1.846,0.339-4.351,0.595-5.438-0.095c-1.805-1.149-3.163-2.627-3.544-3.957 c-0.383-1.334-1.146-9.374-3.106-20.675c-1.92-11.046-4.038-19.431-4.237-19.525c-1.535-0.731-9.358-18.45-9.358-18.45 l-37.23-47.615c0,0-20.737,23.917-37.455,47.8c-0.867,1.235-5.994,11.251-9.275,17.989c-0.212,0.437-0.181,0.475-0.281,0.808 c-0.604,2.015-2.396,9.525-4.039,18.994c-1.962,11.301-2.725,19.341-3.105,20.675c-0.384,1.33-1.74,2.808-3.546,3.957 c-1.085,0.689-3.592,0.434-5.437,0.095c-0.313,0.054-0.621,0.092-0.909,0.092c-7.941,0-9.061-5.077-9.024-11.649 c0.114-20.639,4.078-40.992,6.892-48.907c0.95-2.677,3.926-7.611,7.993-13.681c-4.714,0.199-11.946,0.483-15.051,0.483 c-6.939,0-13.26-1.277-17.653-3.493c6.896-1.729,19.486-4.894,19.486-4.894l11.159-2.804l-11.508-0.069 c0,0-9.019-0.053-11.076-0.125c-1.66-0.057-7.537-0.946-10.949-3.138c4.629-1.315,10.202-2.655,10.264-2.67l4.201-1.008l-3.95-1.746 c-0.094-0.042-9.324-4.139-13.049-7.383c-2.566-2.234-4.397-4.946-5.458-6.783l13.477,0.404l-2.684-2.614 c-0.05-0.054-5.16-5.033-6.48-6.482c-0.9-0.993-2.436-3.673-3.108-6.118c4.319,1.069,11.108,3.384,11.188,3.41l5.861,2.004 l-4.352-4.408c-0.069-0.069-6.928-7.033-9.12-10.268c-1.601-2.358-2.099-4.916-2.139-8.4c4.953,3.368,12.601,7.57,12.98,7.778 l3.858,2.115l-1.829-4.002c-1.379-3.011-5.022-11.465-5.334-14.399c-0.161-1.491-0.305-3.068-0.421-4.435l16.877,14.09l-1.806-3.992 c-0.046-0.076-4.622-7.607-5.821-12.664c-1.078-4.528-0.682-10.716-0.307-14.302L58.57,89.672l-1.426-5.26 c-0.025-0.098-2.688-10.008-2.3-15.83c0.203-3.017,0.767-5.52,1.26-7.227l9.566,12.69l-0.601-5.308 c-0.391-3.451-1.083-13.274,0.381-17.257c0.871-2.362,1.693-4.189,2.32-5.459l6.435,10.212l-0.382-5.752 c-0.006-0.091-0.604-9.295,0.416-13.173c0.401-1.521,0.854-2.681,1.251-3.524l5.249,8.744l-0.52-6.238 c-0.181-2.221-0.144-8.129,1.836-11.469c0.596,0.522,1.248,1.148,1.67,1.575l2.215,2.245l0.276-3.142 c0.162-1.838,0.783-7.003,1.703-8.813c1.342-2.635,4.69-3.91,7.104-4.505c-6.691,13.614-36.889,77.59-36.889,122.937 c0,23.658,16.206,23.931,16.368,23.931c4.881,0,6.947-7.914,6.947-11.063V133.45c0-2.744,1.148-2.744,1.835-2.744 c5.807,0,10.48,3.196,13.855,6.69c8.813-11.615,15.81-20.526,15.81-20.526s0.16-0.182,0.248-0.345 c-1.03-2.443-7.165-16.995-7.165-16.995l1.708-43.717c0,0-0.278-3.797,1.044-6.052c1.314-2.245,4.247-3.175,4.247-3.175 l13.307,41.443c0,0-4.107,0.866-4.107,5.585c0,2.982,2.658,4.99,6.227,5.013c3.572-0.022,6.227-2.031,6.227-5.013 c0-4.719-4.109-5.585-4.109-5.585l13.311-41.443c0,0,2.93,0.93,4.245,3.175c1.322,2.255,1.043,6.052,1.043,6.052l1.709,43.717 l-7.309,17.34c0,0,6.997,8.911,15.809,20.526c3.375-3.494,8.048-6.69,13.855-6.69c0.687,0,1.833,0,1.833,2.744v14.538 c0,3.148,2.068,11.063,6.95,11.063c0.159,0,16.367-0.272,16.367-23.931c0-45.347-30.197-109.322-36.888-122.937 c2.412,0.595,5.761,1.87,7.104,4.505c0.92,1.809,1.541,6.975,1.705,8.813l0.275,3.142l2.213-2.245 C173.226,25.972,173.875,25.345,174.473,24.823z M176.157,181.396c-1.644-2.189-41.07-55.856-41.07-55.856l-6.723,8.809 l-0.946-1.233l-0.829-1.082l-5.053-6.594l-0.095,0.101c0,0-39.427,53.667-41.07,55.856c-1.643,2.191-4.777,6.708-6.058,9.322 c-1.279,2.614-8.946,39.306-8.946,42.592c0,2.005,0.041,8.618,0.071,13.47c1.536,0.2,3.411,0.761,4.357,0.125 c1.624-1.093,2.363-2.323,2.491-3.372c0.128-1.048,1.367-12.969,2.69-20.812c1.779-10.547,4.571-19.005,4.415-18.97 c3.213-6.672,8.966-17.938,9.887-19.252c17.808-25.439,38.994-49.947,38.994-49.947s21.166,24.502,38.978,49.947 c0.921,1.313,6.672,12.58,9.888,19.252c-0.158-0.035,2.635,8.423,4.414,18.97c1.322,7.843,2.562,19.764,2.688,20.812 c0.131,1.049,0.87,2.279,2.493,3.372c0.944,0.636,2.818,0.075,4.355-0.125c0.032-4.852,0.073-11.465,0.073-13.47 c0-3.286-7.667-39.978-8.948-42.592C180.936,188.104,177.801,183.588,176.157,181.396z M82.538,21.517l-1.014-0.623l-0.813,0.872 c-2.231,2.394-3.063,6.287-3.342,9.478l-1.624-2.705l-1.323,1.433c-0.179,0.197-1.801,2.049-3.004,6.592 c-0.581,2.205-0.709,5.712-0.689,8.68l-3.057-4.85l-1.234,1.958c-0.072,0.114-1.787,2.859-3.722,8.121 c-1.22,3.307-1.179,9.262-0.949,13.547l-6.463-8.577l-1.012,2.251c-0.08,0.177-1.934,4.373-2.359,10.694 c-0.234,3.536,0.51,8.253,1.231,11.789l-7.778-7.739l-0.453,2.807c-0.073,0.446-1.754,11.048-0.02,18.338 c0.433,1.819,1.231,3.879,2.117,5.832l-10.759-9.394c0,0-0.749,5.515-0.248,10.196c0.271,2.523,2.272,7.632,3.813,11.276 c-3.503-2.016-8.539-5.019-11.099-7.047l-2.259-1.79l-0.106,2.881c-0.162,4.545-0.087,8.952,2.6,12.916 c1.161,1.717,3.433,4.291,5.459,6.484c-2.877-0.894-6.201-1.851-8.179-2.173l-1.763-0.288l0.071,1.787 c0.148,3.675,2.771,8.324,4.198,9.896c0.723,0.794,2.436,2.508,3.941,3.991L21.93,137.83l0.896,2.098 c0.1,0.234,2.493,5.74,7.324,9.943c2.464,2.146,6.876,4.516,10.047,6.088c-2.57,0.653-5.908,1.536-8.518,2.335l-2.402,0.735 l1.246,1.664c0.13,0.173,0.27,0.343,0.407,0.494c3.608,4.04,12.229,5.234,14.412,5.339c-4.774,1.197-9.767,2.451-11.896,2.979 l-2.911,0.728l2.371,1.843c4.708,3.656,13.02,5.841,22.233,5.841c2.588,0,4.539,0.099,8.954-0.081l-6.105,11.467 c0,0-2.038,9.36-3.02,12.658c-2.304-2.226-2.133-3.205-15.52-15.09c-4.829-4.284-15.411-10.026-18.429-13.813 c-1.005-1.263,5.449-1.422,6.179-1.422c0.73,0-6.393-3.385-8.582-6.123c-2.191-2.739-2.895-5.36-2.895-5.36s-0.38-0.847,0.637-1.001 c1.018-0.157,8.65-1.316,9.084-1.611c0.395-0.266,0.332-0.517-0.137-0.75c-0.469-0.236-9.248-4.724-12.548-10.672 c-2.375-4.281-2.357-6.923-2.364-7.32c-0.01-0.64,0.17-0.803,1.385-0.708c0.862,0.068,7.226,0.046,7.774-0.032 c0.546-0.08,0.453-0.324,0.019-0.576c-9.483-5.484-8.546-14.054-8.624-14.601c-0.079-0.548,0-0.783,0.548-0.704 c0.546,0.077,9.342,0.263,9.812,0.263c0.469,0,0.218-0.519,0.218-0.519s-3.452-4.27-6.056-11.001 c-2.077-5.366-2.377-11.169-2.533-11.639c-0.157-0.469-0.034-0.887,0.514-0.808c0.549,0.079,8.558,3.488,8.87,3.567 c0.313,0.077,0.548-0.103,0.235-0.259c-0.314-0.157-2.896-6.383-3.855-12.033c-1.384-8.17-0.488-10.725-0.42-11.269 c0.063-0.502,0.397-0.874,1.105-0.507c0.743,0.385,12.255,10.245,12.646,10.402c0.391,0.157,0.79-0.164,0.477-0.555 c-0.313-0.392-2.392-6.574-2.938-13.145c-0.548-6.571,0.1-14.571,0.274-15.225c0.161-0.604,0.635-0.581,1.339,0.046 c0.704,0.626,10.381,8.489,11.006,9.038c0.625,0.547,0.727,0.252,0.492-0.53c-0.235-0.782-0.484-8.435,0.375-14.381 c0.965-6.686,3.372-10.979,3.685-11.448s0.536-0.474,0.927-0.161c0.391,0.313,5.106,9.045,5.497,9.515 c0.391,0.469,0.809,0.336,0.732-0.524c-0.104-1.14-0.057-4.547,1.845-12.682c1.956-8.371,3.789-9.758,4.052-10.088 c0.313-0.396,0.521-0.392,0.833-0.002c0.309,0.387,3.945,8.536,4.519,9.377c-0.005,0,0,0.008,0.031,0.049 c-0.007-0.009-0.022-0.036-0.031-0.049c0.025,0.008,0.446,0.395,0.34-0.883c-0.058-0.707,0.396-10.055,1.574-12.653 c1.941-4.282,4.404-6.214,4.899-6.463c0.54-0.272,0.658-0.171,0.737,0.212c0.146,0.721,0.478,7.705,0.625,8.312 c0.146,0.606,0.444,0.232,0.437-0.151c-0.015-0.72,1.081-7.977,3.115-12.044c2.033-4.069,4.292-5.681,5.188-6.133 c0.742-0.376,0.989-0.156,1.018,0.391c0.022,0.422,0.645,5.719,1.206,10.452c-0.272,1.24-0.484,2.556-0.639,3.691 C83.251,22.014,82.866,21.718,82.538,21.517z M127.35,141.814c-1.158,12.032-4.978,23.045-6.326,29.486 c-1.643,7.849-4.788,18.061-6.793,20.931c-4.433,6.343-18.036,18.547-20.403,19.732c-1.094,0.547-6.376-4.115-6.56-4.846 c-0.182-0.728,2.883-3.993,2.154-3.627c-0.731,0.364-4.104,0.906-5.06,0.87c-0.753-0.026,0.633-2.728,0.633-2.728 s-1.484,2.217-3.021,2.947c-0.03,0.015,9.433-18.119,9.433-18.119S127.52,140.043,127.35,141.814z M119.7,169.39l3.104-10.647 l-1.869-0.559l-3.152,10.656L119.7,169.39z M114.072,167.242l4.687-10.051l-1.764-0.838l-4.735,10.055L114.072,167.242z  M126.961,159.319l-0.82,11.06l-1.991-0.139l0.867-11.079L126.961,159.319z M131.727,170.391l-1.986,0.167l-0.828-11.078 l1.944-0.144L131.727,170.391z M164.422,186.462c0,0,9.463,18.134,9.434,18.119c-1.54-0.73-3.021-2.947-3.021-2.947 s1.384,2.701,0.633,2.728c-0.957,0.036-4.33-0.506-5.06-0.87c-0.731-0.366,2.334,2.899,2.153,3.627 c-0.185,0.73-5.467,5.393-6.56,4.846c-2.368-1.186-15.973-13.39-20.404-19.732c-2.007-2.87-5.149-13.082-6.792-20.931 c-1.349-6.441-4.621-17.127-5.778-29.16C128.854,140.373,164.422,186.462,164.422,186.462z M142.029,167.242l1.813-0.834 l-4.735-10.055l-1.762,0.838L142.029,167.242z M136.402,169.39l1.917-0.55l-3.152-10.656l-1.868,0.559L136.402,169.39z",
        })
      );
    }
    function le() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ClosedCaption",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          className: "CCBox",
          fill: "none",
          stroke: "#000000",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          d:
            "M238,210c0,6.627-5.373,12-12,12H30 c-6.627,0-12-5.373-12-12V46c0-6.627,5.373-12,12-12h196c6.627,0,12,5.373,12,12V210z",
        }),
        i.createElement("path", {
          className: "C1",
          d:
            "M90.505,173.207c11.431,0,22.338-4.276,30.72-12.036c2.6-2.407,2.753-6.47,0.347-9.068c-2.41-2.604-6.47-2.757-9.072-0.349 c-5.998,5.559-13.811,8.62-21.995,8.62c-17.852,0-32.373-14.524-32.373-32.372c0-17.849,14.521-32.373,32.373-32.373 c8.177,0,15.981,3.055,21.979,8.603c2.603,2.407,6.662,2.25,9.072-0.353c2.407-2.602,2.249-6.662-0.353-9.068 c-8.375-7.751-19.276-12.019-30.694-12.019c-24.931,0-45.209,20.281-45.209,45.209C45.3,152.93,65.574,173.207,90.505,173.207z",
        }),
        i.createElement("path", {
          className: "C1",
          d:
            "M177.926,173.207c11.431,0,22.338-4.276,30.721-12.036c2.6-2.407,2.754-6.47,0.347-9.068 c-2.41-2.604-6.47-2.757-9.072-0.349c-5.998,5.559-13.812,8.62-21.995,8.62c-17.852,0-32.372-14.524-32.372-32.372 c0-17.849,14.521-32.373,32.372-32.373c8.178,0,15.981,3.055,21.979,8.603c2.604,2.407,6.663,2.25,9.072-0.353 c2.407-2.602,2.25-6.662-0.353-9.068c-8.375-7.751-19.277-12.019-30.694-12.019c-24.932,0-45.209,20.281-45.209,45.209 C132.721,152.93,152.996,173.207,177.926,173.207z",
        })
      );
    }
    function ue() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Hidden",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d: "M62.499,172.263 c-32.755-16.197-47.415-39.509-47.415-39.509",
        }),
        i.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M177.948,85.392 c48.213,14.998,68.451,47.362,68.451,47.362s-36.393,54.737-115.689,54.737c-17.938,0-33.591-2.671-47.096-6.832",
        }),
        i.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M15.084,132.754 c0,0,32.933-56.576,115.674-54.785c8.505,0.185,16.486,0.913,23.96,2.072",
        }),
        i.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M93.981,141.131 c-0.475-2.385-0.725-4.852-0.725-7.377c0-20.711,16.789-37.5,37.5-37.5c2.42,0,4.787,0.229,7.08,0.668",
        }),
        i.createElement("path", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          d:
            "M156.528,106.512 c7.223,6.836,11.729,16.513,11.729,27.242c0,20.711-16.789,37.5-37.5,37.5c-10.609,0-20.189-4.405-27.012-11.487",
        }),
        i.createElement("line", {
          fill: "none",
          stroke: "#FFFFFF",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeMiterlimit: "10",
          x1: "53.007",
          y1: "210.504",
          x2: "208.507",
          y2: "55.004",
        })
      );
    }
    function de(e) {
      const t = Object(o.a)(
        "SVGIcon_Button",
        e.filled ? "SVGIcon_Star_Filled" : "SVGIcon_Star_Unfilled"
      );
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: t,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          fill: e.filled ? "#currentColor" : "none",
          stroke: "#currentColor",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          d:
            "M127.755,18.624 c-2.061,0.101-3.846,1.465-4.485,3.427L98.312,96.933H18.379c-2.745,0.01-4.963,2.242-4.955,4.989 c0.006,1.572,0.754,3.05,2.019,3.984l64.925,47.476L55.41,230.873c-0.848,2.612,0.582,5.417,3.192,6.265 c1.521,0.495,3.186,0.228,4.475-0.719L128,188.945l64.926,47.474c2.212,1.624,5.324,1.144,6.947-1.071 c0.944-1.29,1.211-2.954,0.719-4.475l-24.959-77.492l64.922-47.476c2.211-1.63,2.681-4.743,1.049-6.953 c-0.934-1.265-2.41-2.015-3.984-2.02H157.69l-24.959-74.882C132.033,19.917,129.997,18.513,127.755,18.624z",
        })
      );
    }
    function me() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Download",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement(
          "g",
          { className: "arrow" },
          i.createElement("line", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            x1: "129",
            y1: "182",
            x2: "129",
            y2: "24",
          }),
          i.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "174.25,141.25 128.732,183.625 84.25,141.25",
          })
        ),
        i.createElement(
          "g",
          { className: "catch" },
          i.createElement("polyline", {
            fill: "none",
            stroke: "#ffffff",
            strokeWidth: "12",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            points: "23.25,173.5 23.25,235.75 234.75,235.75 234.75,173.5",
          })
        )
      );
    }
    function he(e) {
      const { fullcolor: t, className: r } = e;
      let n = t ? "rgb(102, 185, 255)" : "none",
        a = t ? "rgb(255, 208, 0)" : "none",
        s = t ? "rgb(255, 145, 0)" : "rgba(255, 255, 255, .2)",
        c = t ? "rgb(34, 98, 150)" : "rgb(255, 255, 255, .4)";
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: Object(o.a)("SVGIcon_Button", "SVGIcon_Achievement", r),
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polyline", {
          fill: n,
          stroke: c,
          strokeWidth: "10",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points:
            "111.689,174.543 97.276,245.256 78.612,208.64 41.298,217.794 66.575,149.584 ",
        }),
        i.createElement("polyline", {
          fill: n,
          stroke: c,
          strokeWidth: "10",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points:
            "189.403,149.584 214.68,217.794 177.359,208.64 158.701,245.256 144.289,174.544 ",
        }),
        i.createElement("polygon", {
          fill: n,
          stroke: c,
          strokeWidth: "10",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points:
            "108.668,171.035 81.336,179.573 75.21,152.086 47.185,146.07 55.893,119.256 34.693,100.302 55.893,81.349 47.185,54.533 75.21,48.52 81.343,21.031 108.668,29.567 127.985,8.766 147.304,29.567 174.636,21.031 180.768,48.52 208.787,54.533 200.078,81.349 221.285,100.302 200.086,119.256 208.787,146.072 180.768,152.086 174.636,179.573 147.311,171.035 127.992,191.84 ",
        }),
        i.createElement("path", {
          fill: a,
          stroke: s,
          strokeWidth: "6",
          strokeMiterlimit: "10",
          d:
            "M127.985,45.378 c30.868,0,55.979,24.638,55.979,54.923c0,30.282-25.111,54.924-55.979,54.924c-30.862,0-55.978-24.642-55.978-54.924 C72.007,70.017,97.124,45.378,127.985,45.378",
        })
      );
    }
    function _e() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_PlayTime",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polyline", {
          fill: "none",
          stroke: "#000000",
          strokeWidth: "16",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          points: "85.5,149.167 128,128 128,55.167 ",
        }),
        i.createElement("path", {
          fill: "none",
          stroke: "#000000",
          strokeWidth: "16",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          d:
            "M128,17.5c61.027,0,110.5,49.473,110.5,110.5S189.027,238.5,128,238.5S17.5,189.027,17.5,128",
        }),
        i.createElement("circle", {
          stroke: "#000000",
          strokeWidth: "7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          cx: "26.448",
          cy: "85.833",
          r: "5.5",
        }),
        i.createElement("circle", {
          stroke: "#000000",
          strokeWidth: "7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          cx: "50.167",
          cy: "50.5",
          r: "5.5",
        }),
        i.createElement("circle", {
          stroke: "#000000",
          strokeWidth: "7",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          cx: "86",
          cy: "26.667",
          r: "5.5",
        })
      );
    }
    function be() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Filter",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M236.445,23.522c-1.085-2.35-3.438-3.855-6.025-3.855H25.58c-2.586,0-4.936,1.501-6.024,3.855 c-1.08,2.349-0.698,5.112,0.983,7.083l80.328,94.039v104.181c0,2.74,1.682,5.194,4.237,6.188c0.778,0.3,1.588,0.445,2.392,0.445 c1.832,0,3.626-0.762,4.91-2.17l41.012-45.13c1.111-1.219,1.724-2.811,1.724-4.459v-59.054l80.325-94.04 C237.144,28.634,237.526,25.867,236.445,23.522z",
        })
      );
    }
    function ge(e) {
      let t = c.c(e.percentComplete, 0, 100, 800, 0);
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_4",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ProgressCircle",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
          style: { transform: "rotateZ(-90deg)" },
        },
        i.createElement("circle", {
          cx: "128",
          cy: "128",
          r: "128",
          stroke: "#ffffff",
          strokeWidth: "10",
          fill: "#00000000",
          strokeDasharray: "800",
          strokeDashoffset: t,
        })
      );
    }
    function fe() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_ReadyToPlay",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "-305.5 396.5 256 256",
        },
        i.createElement("circle", {
          fill: "none",
          stroke: "#000000",
          strokeWidth: "10",
          strokeMiterlimit: "10",
          cx: "-177.5",
          cy: "520.5",
          r: "64",
        }),
        i.createElement("path", {
          d:
            "M-194.852,487.664c-3.918-2.299-7.07-0.511-7.07,4.004v57.665c0,4.515,3.152,6.303,7.07,4.003l47.699-28.619 c3.918-2.3,3.918-6.133,0-8.519L-194.852,487.664z",
        })
      );
    }
    function pe() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Edit",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M16.757,233.795c-1.324,3.973,2.455,7.752,6.427,6.428l50.912-16.971l-40.368-40.367L16.757,233.795z",
        }),
        i.createElement("rect", {
          x: "83.614",
          y: "75.466",
          transform: "matrix(-0.7071 -0.7071 0.7071 -0.7071 93.7468 324.5916)",
          width: "60.971",
          height: "134.827",
        }),
        i.createElement("rect", {
          x: "149.28",
          y: "68.116",
          transform: "matrix(-0.7071 -0.7071 0.7071 -0.7071 252.0431 259.4951)",
          width: "60.971",
          height: "18.862",
        }),
        i.createElement("path", {
          d:
            "M233.545,37.803l-14.368-14.369c-7.928-7.928-20.846-7.897-28.809,0.064l-14.305,14.307l43.112,43.111l14.306-14.305 C241.511,58.582,241.513,45.771,233.545,37.803z",
        })
      );
    }
    function we() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Information",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polyline", {
          className: "I",
          points:
            "86.883,110.957 152.894,110.957 152.894,181.406 177.117,181.406 177.117,202.485 86.883,202.485 86.883,181.775 109.441,181.775 109.441,130.372 86.883,130.372 ",
        }),
        i.createElement("circle", {
          className: "I",
          cx: "128.47",
          cy: "67.607",
          r: "25.517",
        }),
        i.createElement("circle", {
          fill: "none",
          stroke: "#000000",
          strokeWidth: "14",
          strokeMiterlimit: "10",
          cx: "128",
          cy: "128",
          r: "116.833",
        })
      );
    }
    function ye(e) {
      return i.createElement(
        "svg",
        {
          style: { height: e.height, width: e.height },
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_DynamicCollection",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("polyline", {
          style: { opacity: 0.2 },
          points:
            "27.875,27.875 73.692,27.893 51.91,154.75 74.672,155 62.787,227.93 27.875,228.125",
        }),
        i.createElement("polyline", {
          style: { opacity: 0.2 },
          points:
            "202.723,27.875 228.147,27.875 228.541,227.93 111.667,227.93 209.345,91.25 175.523,91.218",
        }),
        i.createElement("polygon", {
          points:
            "178.671,16.667 103.833,16.667 75.506,140.146 103.83,140.025 75.506,242.5 174.837,107.74 142.5,107.5",
        })
      );
    }
    function Be() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_SketchArrowTopLeft",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          d:
            "M5,52.991l10.823-27.306C68.038,201.104,124.475,254.751,251,220.579",
        }),
        i.createElement("line", {
          fill: "none",
          strokeWidth: "10",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: "10",
          x1: "15.823",
          y1: "25.686",
          x2: "40.363",
          y2: "41.714",
        })
      );
    }
    function Me() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Patch",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M171.176,136.219c-5.516-5.516-14.166-5.948-20.223-1.406L92.125,75.984l-8.002-29.738c-0.324-1.406-1.73-3.027-3.028-3.785 L46.49,24.186c-1.298-0.648-3.136-0.433-4.218,0.648L25.295,41.813c-0.974,0.973-1.298,2.92-0.649,4.217l18.276,34.605 c0.648,1.297,2.379,2.596,3.785,3.027l29.739,8.003l58.828,58.828c-4.542,6.056-4.109,14.707,1.405,20.222l56.882,56.882 c6.056,6.056,15.896,6.056,21.845,0l12.544-12.544c6.056-6.056,6.056-15.788,0-21.845L171.176,136.219z",
        }),
        i.createElement("path", {
          d:
            "M153.116,122.16c2.271-0.648,4.65-0.973,7.138-0.973c0.865,0,1.622,0,2.486,0.107l26.928-26.927 c12.328,2.92,25.846-0.324,35.361-9.948c9.517-9.625,12.869-23.034,9.949-35.254l-20.33,20.33l-21.845-5.84l-5.84-21.952 l20.331-20.33c-12.221-2.92-25.738,0.324-35.254,9.948c-9.625,9.625-12.869,23.143-9.949,35.362L129.866,98.91L153.116,122.16z",
        }),
        i.createElement("path", {
          d:
            "M99.371,129.406l-32.226,32.226c-12.328-2.92-25.845,0.324-35.362,9.948c-9.517,9.625-12.869,23.034-9.949,35.254 l20.331-20.33l21.953,5.84l5.839,21.952l-20.331,20.33c12.22,2.92,25.737-0.324,35.254-9.949 c9.625-9.624,12.869-23.142,9.949-35.361l27.035-27.035c-0.325-3.136,0-6.38,0.865-9.517L99.371,129.406z",
        })
      );
    }
    function Se() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "base",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_AppleLogo",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M138.365,26.557c16.139-21.272,38.578-21.376,38.578-21.376s3.336,19.999-12.696,39.266 c-17.12,20.572-36.58,17.206-36.58,17.206S124.012,45.473,138.365,26.557z",
        }),
        i.createElement("path", {
          d:
            "M129.719,75.662c8.305,0,23.713-11.413,43.771-11.413c34.527,0,48.109,24.566,48.109,24.566s-26.565,13.583-26.565,46.54 c0,37.179,33.093,49.991,33.093,49.991s-23.134,65.112-54.38,65.112c-14.353,0-25.509-9.672-40.631-9.672 c-15.41,0-30.702,10.032-40.662,10.032c-28.533,0-64.581-61.765-64.581-111.414c0-48.849,30.512-74.474,59.13-74.474 C105.61,64.933,120.047,75.662,129.719,75.662z",
        })
      );
    }
    function ve() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_LinuxLogo2",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256",
        },
        i.createElement(
          "g",
          { id: "g4768_2_", transform: "translate(-6.9308024,-10)" },
          i.createElement("g", { id: "g4763_2_" })
        ),
        i.createElement("path", {
          d:
            "M235.4,158.1c-14.6-33.7-46.9-69.7-49.3-80.3c-2-6.4-2.3-32.5-16.5-52.3c-11.8-13.8-25.2-23.1-42.7-23.1 c-17.4,0-32.5,8.7-43,23.1C69.7,45.2,69.4,70,67.4,77.8c-0.9,9.9-33.1,43.8-48,77.5c-6.8,15.3-11.1,27.4-9.3,30.6 c4.4,4,5.4-1.5,31.1-8.4c0.2,26.2,8.7,76,84.8,76c0.3,0,0.5,0,0.7,0c0.3,0,0.5,0,0.7,0c77.4,0,85.6-59.8,84.8-77.4 c-0.1-2.6,28,15.6,31.1,9.8C245.1,182.8,241.4,172,235.4,158.1z M182,213.8c-4.9,8.9-16.4,24.1-52.6,24.6c-0.9,0-1.7,0-2.6,0 c-0.9,0-1.7,0-2.6,0c-36.2-0.5-47.7-15.7-52.6-24.6c-15.9-28.5,0.1-83.4,10.1-109.2c5.7-14.7,12.9-23.5,22.1-28.3 c5.8,9.9,19.4,21.6,23.7,21.6c4.5,0,17.2-11,23.2-20.7c9,5.4,15.9,14.5,21.2,27.4C181,126.7,197.8,185.3,182,213.8z",
        })
      );
    }
    function Ce() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          className: "SVGIcon_Button SVGIcon_WindowsLogo",
          width: "100%",
          height: "100%",
          viewBox: "0 0 128 128",
          enableBackground: "new 0 0 128 128",
        },
        i.createElement("rect", {
          fill: "#FFFFFF",
          width: "60.834",
          height: "60.835",
        }),
        i.createElement("rect", {
          x: "67.165",
          fill: "#FFFFFF",
          width: "60.835",
          height: "60.835",
        }),
        i.createElement("rect", {
          y: "67.164",
          fill: "#FFFFFF",
          width: "60.834",
          height: "60.836",
        }),
        i.createElement("rect", {
          x: "67.165",
          y: "67.164",
          fill: "#FFFFFF",
          width: "60.835",
          height: "60.836",
        })
      );
    }
    function ke() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_3_copy",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256",
        },
        i.createElement(
          "g",
          { id: "Layer_3_copy" },
          i.createElement(
            "g",
            { id: "g4768_1_", transform: "translate(-6.9308024,-10)" },
            i.createElement("g", { id: "g4763_1_" })
          ),
          i.createElement("path", {
            d:
              "M206.3,36.6c-19.4,0-35.8,14.1-40.3,33H24.8c-6,0-10.8,4.8-10.8,10.8s4.8,10.8,10.8,10.8h141.3\r\n\t\t\t\tc4.7,18.6,20.9,32.4,40.2,32.4c22.9,0,41.5-19.5,41.5-43.5C247.9,56.2,229.2,36.6,206.3,36.6z M206.3,109.7\r\n\t\t\t\tc-15.2,0-27.5-13.2-27.5-29.5c0-16.3,12.4-29.5,27.5-29.5s27.5,13.2,27.5,29.5C233.9,96.4,221.5,109.7,206.3,109.7z",
          }),
          i.createElement("path", {
            d:
              "M230.4,157.3H107.9c-4.6-14.6-18.3-25.2-34.3-25.2s-29.7,10.6-34.3,25.2H24.8c-6,0-10.8,4.8-10.8,10.8\r\n\t\t\t\tS18.9,179,24.8,179h14.3c4.6,14.6,18.3,25.2,34.3,25.2s29.7-10.6,34.3-25.2h122.5c6,0,10.8-4.8,10.8-10.8S236.4,157.3,230.4,157.3z\r\n\t\t\t\tM73.5,189.8c-8,0-14.9-4.3-18.7-10.8l0,0c-0.7-1.2-1.3-2.4-1.7-3.7c0,0,0-0.1,0-0.1c-0.1-0.4-0.2-0.8-0.4-1.2c0-0.1,0-0.1,0-0.2\r\n\t\t\t\tc-0.2-0.8-0.4-1.7-0.5-2.6c0-0.1,0-0.2,0-0.3c0-0.3-0.1-0.7-0.1-1c0-0.1,0-0.2,0-0.4c0-0.4,0-0.9,0-1.3s0-0.9,0-1.3\r\n\t\t\t\tc0-0.1,0-0.2,0-0.4c0-0.3,0.1-0.7,0.1-1c0-0.1,0-0.2,0-0.3c0.1-0.9,0.3-1.8,0.5-2.6c0-0.1,0-0.1,0-0.2c0.1-0.4,0.2-0.8,0.4-1.2\r\n\t\t\t\tc0,0,0-0.1,0-0.1c0.5-1.3,1-2.6,1.7-3.7c3.7-6.4,10.7-10.8,18.7-10.8c8,0,14.9,4.3,18.7,10.8c0.7,1.2,1.3,2.4,1.7,3.7\r\n\t\t\t\tc0,0,0,0.1,0,0.1c0.1,0.4,0.3,0.8,0.4,1.2c0,0.1,0,0.1,0,0.2c0.2,0.8,0.4,1.7,0.5,2.6c0,0.1,0,0.2,0,0.3c0,0.3,0.1,0.7,0.1,1\r\n\t\t\t\tc0,0.1,0,0.2,0,0.4c0,0.4,0,0.9,0,1.3s0,0.9,0,1.3c0,0.1,0,0.2,0,0.4c0,0.3-0.1,0.7-0.1,1c0,0.1,0,0.2,0,0.3\r\n\t\t\t\tc-0.1,0.9-0.3,1.8-0.5,2.6c0,0.1,0,0.1,0,0.2c-0.1,0.4-0.2,0.8-0.4,1.2c0,0,0,0.1,0,0.1c-0.5,1.3-1,2.6-1.7,3.7l0,0\r\n\t\t\t\tC88.5,185.4,81.5,189.8,73.5,189.8z",
          })
        )
      );
    }
    function Ee() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            d:
              "M216.3,84.7c-18,0-32.7,14.7-32.7,32.7c0,0.1,0,0.3,0,0.4l-21.1,30.6c-3.4-0.1-6.8,0.4-10.1,1.8c-1.4,0.6-2.8,1.3-4,2.1 l-95.1-39.3c-1.6-7.4-6.7-13.9-14.2-17.1c-12.2-5.1-26.2,0.7-31.3,12.9c-5.1,12.2,0.7,26.2,12.9,31.3c5.9,2.5,12.4,2.5,18.3,0 c1.4-0.6,2.6-1.2,3.9-2l95.3,39.4c1.6,7.3,6.7,13.8,14.1,16.9c12.2,5.1,26.2-0.7,31.3-12.9c1.3-3.2,1.9-6.5,1.8-9.8l30.2-21.5 c0.2,0,0.5,0,0.7,0c18.1,0,32.7-14.7,32.7-32.7C249,99.4,234.3,84.7,216.3,84.7z M22.8,135.1c-7.1-2.9-11.3-9.8-11.3-17 c0-2.4,0.5-4.8,1.4-7.1c3.9-9.4,14.7-13.8,24.1-9.9c4.4,1.8,7.7,5.2,9.6,9.3l-10.9-4.5c-6.9-2.9-14.9,0.4-17.8,7.3 c-2.9,6.9,0.4,14.9,7.3,17.8l10.9,4.5C31.8,137,27.1,136.9,22.8,135.1z M178.5,179.4c-3.9,9.4-14.7,13.8-24.1,9.9 c-4.3-1.8-7.6-5.1-9.5-9l10.7,4.4c6.9,2.9,14.9-0.4,17.8-7.3c2.9-6.9-0.4-14.9-7.3-17.8l-11-4.6c4.2-1.6,9.1-1.7,13.6,0.2 c4.5,1.9,8.1,5.4,10,10C180.4,169.9,180.4,174.9,178.5,179.4z M216.3,139.3c-12,0-21.8-9.8-21.8-21.8c0-12,9.8-21.8,21.8-21.8 c12,0,21.8,9.8,21.8,21.8C238.1,129.5,228.3,139.3,216.3,139.3z M216.3,133.8c-9,0-16.4-7.3-16.4-16.4s7.3-16.4,16.4-16.4 c9.1,0,16.4,7.3,16.4,16.4S225.4,133.8,216.3,133.8z",
          })
        )
      );
    }
    function xe() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 256 256",
        },
        i.createElement("circle", { cx: "126", cy: "134", r: "20.6" }),
        i.createElement("circle", { cx: "189.4", cy: "134", r: "20.6" }),
        i.createElement("circle", { cx: "62.6", cy: "134", r: "20.6" })
      );
    }
    function ze() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          className: "SVGIcon_Button SVGIcon_Invalid",
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("path", {
          d:
            "M128.5,27.4C74.1,27.4,30,71.5,30,125.9c0,54.4,44.1,98.5,98.5,98.5s98.5-44.1,98.5-98.5C226.9,71.5,182.9,27.4,128.5,27.4 z M206.8,125.9c0,17.7-5.9,34-15.8,47.2L81.3,63.3c13.1-9.9,29.5-15.8,47.2-15.8C171.7,47.5,206.8,82.6,206.8,125.9z M50.2,125.9 c0-17.7,5.9-34,15.8-47.2l109.7,109.7c-13.1,9.9-29.5,15.8-47.2,15.8C85.2,204.2,50.2,169.1,50.2,125.9z",
        })
      );
    }
    function Re() {
      return i.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 18 18",
          version: "1.1",
          x: "0px",
          y: "0px",
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: "1.41421",
        },
        i.createElement("path", {
          d:
            "M12.621,2.491c-0.021,0.019 -0.042,0.039 -0.063,0.06l-5.125,5.201c-0.579,0.587 -0.575,1.527 -0.001,2.109l0.691,0.702c0.576,0.584 1.505,0.582 2.079,-0.001l5.126,-5.201c0.021,-0.021 0.04,-0.042 0.059,-0.063l1.573,1.595c0.573,0.582 1.04,0.386 1.04,-0.439l0,-5.957c0,-0.276 -0.219,-0.497 -0.49,-0.497l-5.87,0c-0.82,0 -1.008,0.473 -0.434,1.056l1.415,1.435Zm-9.618,-2.491c-1.665,0 -3.003,1.344 -3.003,3.003l0,11.994c0,1.665 1.344,3.003 3.003,3.003l11.994,0c1.665,0 3.003,-1.344 3.003,-3.003l0,-7.746l0,4.249l-3,-2.488l0,4.492c0,0.826 -0.671,1.496 -1.496,1.496l-9.008,0c-0.826,0 -1.496,-0.671 -1.496,-1.496l0,-9.008c0,-0.826 0.671,-1.496 1.496,-1.496l4.504,0l-2.5,-3l4.249,0l-7.746,0Z",
        })
      );
    }
    function Le(e, t) {
      return d.c.IN_GAMEPADUI
        ? i.createElement(
            "svg",
            Object.assign(
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 36 36",
                fill: "none",
              },
              e
            ),
            i.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2 4V16V20L7 16H24V4H2ZM12 20V32H29L34 36V32V20H12Z",
              fill: "currentColor",
            })
          )
        : i.createElement(
            "svg",
            {
              version: "1.1",
              id: "Layer_2",
              xmlns: "http://www.w3.org/2000/svg",
              className: e.className,
              x: "0px",
              y: "0px",
              width: "256px",
              height: "256px",
              viewBox: "0 0 409.6 409.6",
            },
            i.createElement("path", {
              d:
                "M109.9,96.2H302c16.3,0,29.6,13,29.6,29v101.4c0,16-13.2,29-29.6,29h-90.1l-57.6,57.9L138,255.6h-28.1\r\n\t\t\t\tc-16.3,0-29.6-13-29.6-29V125.2C80.4,109.2,93.6,96.2,109.9,96.2z",
            })
          );
    }
    function Oe(e) {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 409.6 409.6",
        },
        i.createElement("path", {
          d:
            "M275.1,153c-4.3-0.2-8,3.9-8.2,9.1l-5.8,136.5c-0.1,3.3-2.5,6.1-5.3,6.1H155.1c-2.7,0-5.1-2.8-5.3-6.1\r\n\t\t\t\t\t\tl-5.8-136.5c-0.2-5.2-3.9-9.3-8.2-9.1c-4.3,0.2-7.7,4.6-7.5,9.9l5.8,136.5c0.5,13.4,9.8,24.2,21,24.2h100.8\r\n\t\t\t\t\t\tc11.2,0,20.5-10.8,21-24.2l5.8-136.5C282.9,157.6,279.5,153.2,275.1,153z M211.8,276.1v-98.4c0-4.2-2.8-7.6-6.3-7.6\r\n\t\t\t\t\t\tc-3.5,0-6.3,3.4-6.3,7.6v98.4c0,4.2,2.8,7.6,6.3,7.6C209,283.7,211.8,280.3,211.8,276.1z M174.2,283.7c3.5-0.1,6.2-3.6,6.1-7.8\r\n\t\t\t\t\t\tl-3.1-98.4c-0.1-4.2-3-7.5-6.5-7.4c-3.5,0.1-6.2,3.6-6.1,7.8l3.1,98.4C167.8,280.5,170.7,283.8,174.2,283.7z M243.3,276.3l3.2-98.4\r\n\t\t\t\t\t\tc0.1-4.2-2.6-7.7-6.1-7.8c-3.5-0.1-6.4,3.2-6.5,7.4l-3.2,98.4c-0.1,4.2,2.6,7.7,6.1,7.8C240.3,283.8,243.2,280.5,243.3,276.3z\r\n\t\t\t\t\t\tM284.3,120.7h-40l-3-12.6c-2.6-11.1-12-19.6-21.6-19.6h-28.4c-9.6,0-19,8.5-21.6,19.6l-3,12.6h-40c-4.3,0-7.9,4.3-7.9,9.5\r\n\t\t\t\t\t\ts3.5,9.5,7.9,9.5h157.5c4.3,0,7.9-4.2,7.9-9.5S288.6,120.7,284.3,120.7z M183.1,120.7l1.8-7.4c0.7-3,3.9-5.9,6.4-5.9h28.4\r\n\t\t\t\t\t\tc2.6,0,5.7,2.9,6.4,5.9l1.8,7.4H183.1z",
        })
      );
    }
    function Te(e) {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 409.6 409.6",
        },
        i.createElement("path", {
          d:
            "M225.1,328.8c-12.6,0-15.3-1.9-29.5-5.3c-18.7-4.8-35.3-6.3-51-5.3c-3.5,0.5-7.1,0.5-10.6,1l-7.6,1\r\n\t\t\t\tc-2.5,0.5-4.5-1-5.6-3.4c-12.6-36.2-16.6-74.7-11.6-117.6c0-2.4,2-3.9,4.5-4.3l4.5-0.5c3.5-0.5,6.6-1,10.1-1c5-0.5,9.6-2.9,13.1-7.2\r\n\t\t\t\tl0.5-1c0.5-0.5,1-1.4,1.5-2.4c9.1-14.5,22.2-25.6,36.8-37.6c7.6-6.3,14.1-12.5,20.2-18.3c6.6-7.2,10.1-16.4,10.6-27\r\n\t\t\t\tc0-9.6,5.6-15.4,16.1-16.4c13.6-1,22.7,3.9,27.8,15.9c7.6,16.4-4.4,33.3-13.9,50.6c-2,3.9-4.5,7.2-7.1,10.6c-1,1.4-2,2.9-3,4.3\r\n\t\t\t\tl-3.5,4.8c-1.5,1.9-3,3.9-4.5,6.3c4,0,7.6,0,11.6,0c11.1-0.5,34.6-0.5,46.7,1.4c7.6,1,13.6,4.8,17.7,10.1c3.5,4.8,4.5,11.1,3,17.8\r\n\t\t\t\tc-0.5,2.9-2,5.8-5,9.2c-1.5,1.9-14.4,3.9-16.5,5.3h10.9c2.5,1.9,5,3.9,7.1,6.3c4,4.3,5.6,9.2,5,14.9c-0.5,5.3-3,10.6-7.6,14\r\n\t\t\t\tc-2.5,1.9-16,3.9-18.5,5.3c5,5.3,18,12.1,16.5,19.3c-2,9.6-7.6,15.4-18.2,17.8c2.5,3.9,3,8.7,1.5,13.5c-0.5,2.4-1.5,4.3-2.5,6.3\r\n\t\t\t\tc-2.5,5.3-6.6,8.2-13.1,9.6C253.2,327.8,233.7,328.8,225.1,328.8z",
        })
      );
    }
    function Fe(e) {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("title", null, e.title),
        i.createElement("path", {
          d:
            "M126.16,44c-0.18-1.38-0.8-3.93-2.71-4.15c0,0-16.02-1.85-18.59,12.29c0,0-5.13,18.82,9.41,46.21l-15.08,0.64\r\n\t\t\tH68.51c-10.2,0-18.45,10.81-18.51,24.16h44.89c1.87,0,3.38,1.51,3.38,3.38c0,1.86-1.51,3.38-3.38,3.38H51.86l5.43,19.22h43.68\r\n\t\t\tc1.86,0,3.38,1.51,3.38,3.38c0,1.86-1.52,3.37-3.38,3.37H59.2l5.43,19.23h33.45c1.86,0,3.38,1.51,3.38,3.37\r\n\t\t\tc0,1.86-1.51,3.38-3.38,3.38H67.09c5.27,11.59,13.82,20.4,23.03,20.4h68.13l21.34-62.23C174.13,134.96,132.53,92.42,126.16,44z\r\n\t\t\t M208.44,154.04c-1.8-3.64-4.9-6.36-8.74-7.67l-7.55-2.57L170.86,206l7.56,2.59c3.84,1.32,7.99,1.05,11.64-0.74\r\n\t\t\tc3.65-1.79,6.36-4.89,7.67-8.73l11.45-33.45C210.49,161.82,210.23,157.69,208.44,154.04z",
        })
      );
    }
    function Ie(e) {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("title", null, e.title),
        i.createElement("path", {
          d:
            "M128.55,137.4c0-21,17.02-38.02,38.02-38.02c0,0,0.01,0,0.01,0c-7.68-19.04-26.32-32.47-48.11-32.47\r\n\t\t\t\t\t\t\t\t\t\t\t\tc-28.64,0-51.86,23.22-51.86,51.86c0,9.48,2.54,18.37,6.99,26.01c0.03,0.05,0.06,0.1,0.09,0.16l-6.85,29.66l32.69-7.54\r\n\t\t\t\t\t\t\t\t\t\t\t\tc5.87,2.3,12.26,3.57,18.94,3.57c8.06,0,15.68-1.84,22.49-5.12C133.34,158.55,128.55,148.53,128.55,137.4z",
        }),
        i.createElement("path", {
          d:
            "M196.36,154.8c2.95-5.08,4.64-10.97,4.64-17.27c0-19.01-15.41-34.42-34.42-34.42s-34.42,15.41-34.42,34.42\r\n\t\t\t\t\t\tc0,19.01,15.41,34.42,34.42,34.42c4.44,0,8.68-0.84,12.57-2.37l21.7,5.01l-4.54-19.69C196.32,154.87,196.34,154.84,196.36,154.8z\r\n\t\t\t\t\t\tM167.05,157.78c-2.3,0-4.16-1.86-4.16-4.16c0-2.3,1.86-4.16,4.16-4.16c2.3,0,4.16,1.86,4.16,4.16\r\n\t\t\t\t\t\tC171.21,155.91,169.34,157.78,167.05,157.78z M171.21,140.62v0.52c0,2.3-1.86,4.16-4.16,4.16s-4.16-1.86-4.16-4.16v-4.16\r\n\t\t\t\t\t\tc0-2.3,1.86-4.16,4.16-4.16c3.32,0,6.24-1.94,6.24-4.16c0-2.22-2.91-4.16-6.24-4.16c-2.13,0-4.1,0.75-5.29,2.01\r\n\t\t\t\t\t\tc-1.57,1.67-4.2,1.76-5.88,0.19c-1.67-1.57-1.76-4.2-0.19-5.88c2.77-2.95,6.9-4.64,11.35-4.64c8.02,0,14.55,5.6,14.55,12.47\r\n\t\t\t\t\t\tC181.6,134.31,177.18,139.08,171.21,140.62z",
        })
      );
    }
    function We(e) {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_2",
          xmlns: "http://www.w3.org/2000/svg",
          className: e.className,
          x: "0px",
          y: "0px",
          width: "256px",
          height: "256px",
          viewBox: "0 0 256 256",
        },
        i.createElement("title", null, e.title),
        i.createElement("path", {
          d:
            "M152.07,132.73c0,0,4.05,3.28,7.04,6.86s5.74,7.59,5.74,7.59c1.45-0.55,3.27-1.36,4.09-2.05l55.4-47.84\r\n\t\t\t\t\t\t\t\t\t\t\t\tl-14.19-16.04l-55.45,47.88C153.88,129.82,152.83,131.42,152.07,132.73z",
        }),
        i.createElement("path", {
          d:
            "M192.74,71.58c0-1.97-1.61-3.58-3.58-3.58H49.56c-1.97,0-3.58,1.61-3.58,3.58v97.84\r\n\t\t\t\t\t\tc0,1.97,1.61,3.58,3.58,3.58h139.6c1.97,0,3.58-1.61,3.58-3.58v-40.11l-21.48,18.54c-1.95,1.65-5.95,2.98-6.41,3.12\r\n\t\t\t\t\t\tc-0.18,0.06-0.37,0.09-0.55,0.09c-0.5,0-1-0.21-1.34-0.6l-0.68-0.76c0,0.15,0,0.3-0.02,0.45c-0.14,1.25-0.97,2.3-2.16,2.75\r\n\t\t\t\t\t\tl-1.98,0.79c-0.12,0.05-0.25,0.08-0.38,0.1l-14.52,2.33c-0.36,0.12-0.73,0.18-1.1,0.18c-0.96,0-1.9-0.39-2.56-1.11\r\n\t\t\t\t\t\tc-0.99-1.09-1.16-2.62-0.45-3.87l2.95-6.95H67.76c-0.99,0-1.79-0.8-1.79-1.79c0-0.99,0.8-1.79,1.79-1.79h75.84l1.6-3.76\r\n\t\t\t\t\t\tc0.04-0.09,0.09-0.19,0.15-0.27c0.6-0.92,1.68-1.48,2.89-1.5c0.55-0.02,1.11,0.12,1.62,0.38l-1.29-1.46\r\n\t\t\t\t\t\tc-0.49-0.55-0.59-1.35-0.25-2c0.21-0.42,2.14-4.11,4.06-5.75l2.19-1.89h-86.8c-0.99,0-1.79-0.8-1.79-1.79\r\n\t\t\t\t\t\tc0-0.99,0.8-1.79,1.79-1.79h90.94l34.04-29.4V71.58z M170.97,104.69H67.76c-0.99,0-1.79-0.8-1.79-1.79c0-0.99,0.8-1.79,1.79-1.79\r\n\t\t\t\t\t\th103.21c0.99,0,1.79,0.8,1.79,1.79C172.76,103.89,171.95,104.69,170.97,104.69z",
        })
      );
    }
    function Ue(e) {
      return i.createElement(
        "svg",
        { width: "100%", height: "100%", viewBox: "0 0 50 50" },
        i.createElement("rect", {
          x: "0",
          y: "10",
          width: "40",
          height: "5",
          rx: "5",
        }),
        i.createElement("rect", {
          x: "0",
          y: "20",
          width: "40",
          height: "5",
          rx: "5",
        }),
        i.createElement("rect", {
          x: "0",
          y: "30",
          width: "40",
          height: "5",
          rx: "5",
        })
      );
    }
    function je(e) {
      const { className: t, color: r } = e;
      return i.createElement(
        "svg",
        {
          className: Object(o.a)(t),
          width: "13",
          height: "21",
          viewBox: "0 0 13 21",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i.createElement("path", {
          fill: r || "#ffc83d",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M5.80814 0.197492L5.19324 0.62086C4.96265 0.774812 4.69363 0.851788 4.38619 0.8133L3.92501 0.736324C3.42541 0.697836 2.96424 0.928764 2.73365 1.39062L2.4262 2.04492C2.27248 2.31433 2.08032 2.50677 1.8113 2.62224L1.38856 2.81468C0.92739 3.00712 0.658372 3.46897 0.696803 3.96932L0.735234 4.70059C0.773665 5.00849 0.696803 5.23942 0.504648 5.47035L0.23563 5.85523C-0.0718184 6.24011 -0.0718184 6.77894 0.197199 7.20231L0.619941 7.81812C0.773665 8.04904 0.812097 8.31846 0.812097 8.62636L0.735234 9.08822C0.696803 9.58856 0.92739 10.0504 1.38856 10.2813L2.04189 10.5893C2.31091 10.7432 2.50306 10.9356 2.61836 11.2051L2.77208 11.6284C3.00267 12.0903 3.42541 12.3597 3.96344 12.3212L4.69363 12.2827C4.96265 12.2442 5.23167 12.3212 5.46226 12.5137L5.84657 12.7831C6.23088 13.091 6.76891 13.091 7.19165 12.8216L7.80655 12.3982C8.03714 12.2442 8.30616 12.2057 8.57517 12.2057L9.03635 12.2827C9.53595 12.3212 10.0356 12.0903 10.2277 11.6284L10.5736 10.9741C10.6889 10.7047 10.881 10.5123 11.1501 10.3968L11.5728 10.2429C12.034 10.0119 12.3414 9.58856 12.303 9.04973L12.2646 8.31846C12.2261 8.04904 12.303 7.77963 12.4951 7.5487L12.7642 7.16382C13.0716 6.77894 13.0716 6.24011 12.8026 5.81674L12.3798 5.20093C12.2261 4.97 12.1493 4.70059 12.1877 4.43117L12.2646 3.96932C12.303 3.46897 12.0724 2.96863 11.6112 2.77619L10.9579 2.4298C10.6889 2.31433 10.4967 2.12189 10.3814 1.85248L10.1893 1.42911C9.99712 0.967252 9.53595 0.659348 9.03635 0.697836L8.30616 0.736324C7.99871 0.774812 7.76812 0.697836 7.53753 0.505396L7.15322 0.23598C6.76891 -0.0719243 6.23088 -0.0719243 5.80814 0.197492ZM6.4999 2.69921C4.38619 2.69921 2.65679 4.39268 2.65679 6.50952C2.65679 8.62636 4.38619 10.3583 6.4999 10.3583C8.6136 10.3583 10.3046 8.62636 10.3046 6.50952C10.3046 4.39268 8.6136 2.69921 6.4999 2.69921Z",
        }),
        i.createElement("path", {
          fill: r || "#ffc83d",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M3.04084 12.7833V20.096L6.49963 17.6328L9.95843 20.096V12.7833C9.65098 12.8988 9.3051 12.9758 8.95922 12.9373L8.53648 12.8603C8.38276 12.8603 8.26746 12.8988 8.15217 12.9758L7.53727 13.3606C6.88394 13.784 6.07689 13.784 5.42356 13.3222L5.07768 13.0143C4.96239 12.9373 4.8471 12.9373 4.7318 12.9373L4.00161 12.9758C3.65573 12.9758 3.30985 12.9373 3.04084 12.7833Z",
        })
      );
    }
    function Ne(e) {
      const { className: t } = e;
      Object(n.c)(e, ["className"]);
      return i.createElement(
        "svg",
        {
          className: t,
          width: "32",
          height: "32",
          viewBox: "0 0 32 32",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
        },
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "16",
          fill: "#BDCCDB",
        }),
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "16",
          fill: "url(#paint0_linear)",
        }),
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "14.2745",
          fill: "#98A8B7",
        }),
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "14.2745",
          fill: "url(#paint1_linear)",
        }),
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "14.2745",
          stroke: "#7A92A9",
        }),
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "11.1309",
          fill: "#BDCCDB",
        }),
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "11.1309",
          fill: "url(#paint2_linear)",
        }),
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "10.2107",
          fill: "#5792C8",
        }),
        i.createElement("circle", {
          cx: "16",
          cy: "16",
          r: "10.2107",
          fill: "url(#paint3_linear)",
        }),
        i.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
          fill: "#BDCCDB",
        }),
        i.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M20.6016 17.9523C22.8425 17.9523 24.6591 16.1357 24.6591 13.8948C24.6591 11.6539 22.8425 9.83727 20.6016 9.83727C18.3607 9.83727 16.5441 11.6539 16.5441 13.8948C16.5441 13.9609 16.5457 14.0266 16.5488 14.0919L14.0477 17.6314C14.0205 17.6306 13.9933 17.6303 13.966 17.6303C13.2606 17.6303 12.6127 17.8767 12.1038 18.2882L6.33398 15.9235C6.33398 17.4638 6.62381 19.1438 6.97803 19.5302C7.16531 19.7345 9.1256 20.4564 11.0502 21.127C11.3013 22.5093 12.5112 23.5574 13.966 23.5574C15.6027 23.5574 16.9296 22.2306 16.9296 20.5939C16.9296 20.5326 16.9277 20.4717 16.924 20.4113L20.2613 17.9382C20.3735 17.9475 20.487 17.9523 20.6016 17.9523ZM12.1995 21.5232C12.5338 22.1572 13.1994 22.5894 13.966 22.5894C15.0681 22.5894 15.9615 21.696 15.9615 20.5939C15.9615 19.4917 15.0681 18.5983 13.966 18.5983C13.7007 18.5983 13.4475 18.65 13.216 18.744L14.1914 19.1438L14.1886 19.1617C14.8832 19.2688 15.4151 19.8692 15.4151 20.5939C15.4151 21.3942 14.7663 22.043 13.966 22.043C13.8901 22.043 13.8157 22.0371 13.743 22.0259L13.7405 22.042L13.6136 21.9998C13.5414 21.9818 13.4713 21.9583 13.4038 21.9299C13.0402 21.8084 12.6309 21.6704 12.1995 21.5232ZM20.6016 16.5998C22.0956 16.5998 23.3066 15.3887 23.3066 13.8948C23.3066 12.4008 22.0956 11.1898 20.6016 11.1898C19.1077 11.1898 17.8966 12.4008 17.8966 13.8948C17.8966 15.3887 19.1077 16.5998 20.6016 16.5998ZM22.4 13.8948C22.4 14.888 21.5948 15.6932 20.6016 15.6932C19.6083 15.6932 18.8032 14.888 18.8032 13.8948C18.8032 12.9015 19.6083 12.0964 20.6016 12.0964C21.5948 12.0964 22.4 12.9015 22.4 13.8948Z",
          fill: "url(#paint4_linear)",
        }),
        i.createElement(
          "defs",
          null,
          i.createElement(
            "linearGradient",
            {
              id: "paint0_linear",
              x1: "8.4375",
              y1: "1.75",
              x2: "23.1875",
              y2: "22.9375",
              gradientUnits: "userSpaceOnUse",
            },
            i.createElement("stop", {
              stopColor: "white",
              stopOpacity: "0.54",
            }),
            i.createElement("stop", {
              offset: "1",
              stopColor: "white",
              stopOpacity: "0",
            })
          ),
          i.createElement(
            "linearGradient",
            {
              id: "paint1_linear",
              x1: "9",
              y1: "3.125",
              x2: "22.4375",
              y2: "24.625",
              gradientUnits: "userSpaceOnUse",
            },
            i.createElement("stop", {
              stopColor: "white",
              stopOpacity: "0.25",
            }),
            i.createElement("stop", {
              offset: "1",
              stopColor: "white",
              stopOpacity: "0",
            })
          ),
          i.createElement(
            "linearGradient",
            {
              id: "paint2_linear",
              x1: "10.3125",
              y1: "6.375",
              x2: "19.6875",
              y2: "23.125",
              gradientUnits: "userSpaceOnUse",
            },
            i.createElement("stop", {
              stopColor: "white",
              stopOpacity: "0.65",
            }),
            i.createElement("stop", {
              offset: "1",
              stopColor: "white",
              stopOpacity: "0",
            })
          ),
          i.createElement(
            "linearGradient",
            {
              id: "paint3_linear",
              x1: "10",
              y1: "8",
              x2: "20.5",
              y2: "26.2107",
              gradientUnits: "userSpaceOnUse",
            },
            i.createElement("stop", { stopColor: "#72A5D3" }),
            i.createElement("stop", { offset: "1", stopColor: "#4F7294" })
          ),
          i.createElement(
            "linearGradient",
            {
              id: "paint4_linear",
              x1: "12.1875",
              y1: "13.5625",
              x2: "18.5625",
              y2: "23.5574",
              gradientUnits: "userSpaceOnUse",
            },
            i.createElement("stop", {
              stopColor: "white",
              stopOpacity: "0.44",
            }),
            i.createElement("stop", {
              offset: "1",
              stopColor: "white",
              stopOpacity: "0",
            })
          )
        )
      );
    }
    function Ae() {
      return i.createElement(
        "svg",
        {
          height: "100px",
          width: "100px",
          fill: "#000000",
          x: "0px",
          y: "0px",
          viewBox: "0 0 101 101",
          enableBackground: "new 0 0 101 101",
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            d:
              "M16.929,30.115 M84.446,84.262c0-37.271-30.323-67.613-67.587-67.613l0,0l0.069,13.467   c29.777,0.039,53.995,24.256,54.051,54.042L84.446,84.262z",
          }),
          i.createElement("path", {
            d:
              "M16.843,53.089 M61.472,84.262c0-24.616-20.026-44.639-44.628-44.639l0,0v13.466c17.182,0,31.161,13.984,31.161,31.173   H61.472z",
          }),
          i.createElement("circle", { cx: "26.695", cy: "74.305", r: "9.812" })
        )
      );
    }
    function Ge(e) {
      return i.createElement(
        "svg",
        Object.assign({}, e, {
          height: "24px",
          width: "24px",
          viewBox: "0 0 24 24",
          x: "0px",
          y: "0px",
        }),
        i.createElement("path", {
          fill: "white",
          d:
            "M3.3,0.5v23h17.5v-23H3.3z M10.2,9.6l-3-2.2h3.7L12,3.9l1.2,3.6H17l-3,2.2l1.2,3.6L12,11l-3,2.2L10.2,9.6z M17.3,16.1 M17.4,18H6.6v-1.2h10.7L17.4,18L17.4,18z M17.3,19.9",
        })
      );
    }
    function De() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 32 32",
          enableBackground: "new 0 0 32 32",
        },
        i.createElement("path", {
          fill: "white",
          d:
            "M24.68,19.53l6.9-5.69c0.98-0.81,0.47-2.39-0.81-2.46l-8.89-0.54c-0.54-0.03-1.01-0.37-1.21-0.88L17.4,1.61\r\n\t\t\tc-0.47-1.18-2.12-1.18-2.59,0l-3.27,8.32c-0.2,0.51-0.67,0.84-1.21,0.88l-8.92,0.54c-1.28,0.07-1.78,1.65-0.81,2.46l6.9,5.66\r\n\t\t\tc0.4,0.34,0.61,0.91,0.47,1.41l-2.26,8.65c-0.3,1.21,1.01,2.19,2.09,1.52l7.51-4.81c0.47-0.3,1.04-0.3,1.48,0l7.54,4.81\r\n\t\t\tc1.08,0.67,2.39-0.3,2.09-1.52l-2.26-8.62C24.07,20.4,24.24,19.86,24.68,19.53z",
        })
      );
    }
    function Pe() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 32 32",
          enableBackground: "new 0 0 32 32",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            fill: "white",
            d:
              "M28.4,1.49H3.79c-1.99,0-3.6,1.61-3.6,3.6v14.88c0,1.99,1.61,3.6,3.6,3.6h2.37c0,1.61-0.38,3.7-1.51,5.88\r\n\t\t\tc-0.28,0.57-0.19,1.33,0.19,1.8c0.28,0.38,0.76,0.47,1.14,0.47c0.19,0,0.38,0,0.57-0.09c4.07-1.61,7.57-5.59,9.47-8.05h12.4\r\n\t\t\tc1.99,0,3.6-1.61,3.6-3.6V5.1C31.91,3.11,30.3,1.49,28.4,1.49z M8.23,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\ts2.37,1.04,2.37,2.37S9.56,14.97,8.23,14.97z M15.99,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S17.32,14.97,15.99,14.97z M23.85,14.97c-1.33,0-2.37-1.04-2.37-2.37s1.04-2.37,2.37-2.37\r\n\t\t\tc1.33,0,2.37,1.04,2.37,2.37S25.18,14.97,23.85,14.97z",
          })
        )
      );
    }
    function He() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 32 32",
          enableBackground: "new 0 0 32 32",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            fill: "white",
            d:
              "M23.32,28.28C23,25.55,20.68,23.52,18,23.52h-3.78c-2.73,0-5,2.03-5.33,4.76L8.56,30.8h15.09L23.32,28.28z",
          }),
          i.createElement("path", {
            fill: "white",
            d:
              "M16.08,22.15c2.82,0,5.1-2.28,5.1-5.1c0-2.82-2.28-5.1-5.1-5.1s-5.1,2.28-5.1,5.1\r\n\t\t\tC10.98,19.86,13.27,22.15,16.08,22.15z",
          }),
          i.createElement(
            "g",
            null,
            i.createElement("path", {
              fill: "white",
              d:
                "M24.09,10.21c-0.94-1.22-2.18-2.23-3.57-2.9c-1.39-0.68-2.94-1.02-4.48-1.01l-0.02,0L16,6.3\r\n\t\t\t\tc-0.03,0-0.05,0-0.08,0c-1.52,0-3.04,0.35-4.4,1.01c-1.39,0.68-2.62,1.68-3.57,2.9c-0.94,1.22-1.6,2.67-1.91,4.18\r\n\t\t\t\tc-0.3,1.51-0.25,3.1,0.15,4.59c0.14,0.55,0.62,0.92,1.18,0.92c0.01,0,0.02,0,0.04,0h0.27l0.03-0.01c0.32-0.08,0.59-0.29,0.76-0.57\r\n\t\t\t\tl0.07-0.1c0.14-0.21,0.18-0.46,0.11-0.7L8.6,18.38c-0.18-0.62-0.27-1.27-0.29-1.92c0-4.24,3.45-7.68,7.69-7.68h0.04\r\n\t\t\t\tc4.24,0,7.69,3.45,7.69,7.68c-0.02,0.65-0.11,1.3-0.29,1.92l-0.04,0.15c-0.07,0.24-0.03,0.49,0.11,0.7l0.07,0.1\r\n\t\t\t\tc0.17,0.28,0.44,0.49,0.76,0.57l0.03,0.01l0.26,0c0.01,0,0.02,0,0.04,0c0.56,0,1.04-0.37,1.18-0.92c0.4-1.49,0.46-3.08,0.15-4.59\r\n\t\t\t\tC25.69,12.88,25.04,11.44,24.09,10.21z",
            }),
            i.createElement("path", {
              fill: "white",
              d:
                "M16.02,0.68c-8.83,0-15.99,7.16-16,15.99h0.01c-0.02,2.68,0.74,5.31,2.18,7.57l0,0.01l0.01,0.01\r\n\t\t\t\tc0.37,0.43,1,0.51,1.47,0.19c0.47-0.32,0.62-0.94,0.36-1.44l0,0l0,0c-1.19-1.89-1.81-4.09-1.79-6.32v0v0\r\n\t\t\t\tc0-7.6,6.16-13.76,13.76-13.76c7.6,0,13.76,6.16,13.76,13.76v0v0c0.03,2.24-0.59,4.43-1.79,6.32l0,0l0,0\r\n\t\t\t\tc-0.26,0.5-0.11,1.12,0.36,1.44c0.47,0.32,1.1,0.24,1.47-0.19l0.01-0.01l0-0.01c1.45-2.26,2.2-4.89,2.18-7.57h0.01\r\n\t\t\t\tC32.02,7.84,24.86,0.68,16.02,0.68",
            })
          )
        )
      );
    }
    function Ve(e) {
      return i.createElement(
        "svg",
        Object.assign({}, e, {
          height: "100px",
          width: "100px",
          fill: "#000000",
          xmlns: "http://www.w3.org/2000/svg",
          version: "1.1",
          viewBox: "0 0 32 32",
          x: "0px",
          y: "0px",
        }),
        i.createElement("path", {
          d:
            "M26.286 0c-3.142 0-5.714 2.572-5.714 5.714 0 0.512 0.074 1.006 0.202 1.479l-10.573 5.287c-1.049-1.332-2.67-2.194-4.487-2.194-3.142 0-5.714 2.572-5.714 5.714s2.572 5.714 5.714 5.714c1.815 0 3.437-0.862 4.486-2.193l10.574 5.287c-0.127 0.473-0.202 0.966-0.202 1.478 0 3.142 2.572 5.714 5.714 5.714s5.714-2.572 5.714-5.714c0-3.142-2.572-5.714-5.714-5.714-1.817 0-3.438 0.862-4.487 2.194l-10.573-5.287c0.128-0.473 0.202-0.967 0.202-1.479s-0.074-1.005-0.202-1.478l10.574-5.287c1.049 1.331 2.67 2.193 4.486 2.193 3.142 0 5.714-2.572 5.714-5.714s-2.572-5.714-5.714-5.714zM26.286 2.286c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM5.714 12.571c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429zM26.286 22.857c1.907 0 3.429 1.522 3.429 3.429s-1.522 3.429-3.429 3.429c-1.907 0-3.429-1.522-3.429-3.429s1.522-3.429 3.429-3.429z",
        })
      );
    }
    function qe() {
      return i.createElement(
        "svg",
        {
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          x: "0px",
          y: "0px",
          viewBox: "0 0 44 44",
          enableBackground: "new 0 0 44 44",
        },
        i.createElement(
          "g",
          null,
          i.createElement("path", {
            d:
              "M2 5.90007C2 5.90007 4.92505 2 11.7502 2C18.5753 2 21.5003 5.90007 21.5003 5.90007V33.2005C21.5003 33.2005 18.5753 31.2505 11.7502 31.2505C4.92505 31.2505 2 33.2005 2 33.2005V5.90007Z",
            stroke: "#fefeef",
            fill: "none",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
          i.createElement("path", {
            d:
              "M21.4998 5.90007C21.4998 5.90007 24.4248 2 31.2499 2C38.075 2 41.0001 5.90007 41.0001 5.90007V33.2005C41.0001 33.2005 38.075 31.2505 31.2499 31.2505C24.4248 31.2505 21.4998 33.2005 21.4998 33.2005V5.90007Z",
            stroke: "#fefeef",
            fill: "none",
            strokeWidth: "3",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          })
        )
      );
    }
    function Ye(e) {
      const { className: t } = e,
        r = Object(n.c)(e, ["className"]);
      return i.createElement(
        "svg",
        Object.assign(
          { className: Object(o.a)(u.a.SteamDeckCompatLogo, t) },
          r,
          {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i.createElement("path", {
          opacity: "0.84",
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M7.77715 4.30197C10.9241 4.30197 13.4752 6.85305 13.4752 9.99997C13.4752 13.1469 10.9241 15.698 7.77715 15.698V18.8889C12.6864 18.8889 16.666 14.9092 16.666 9.99997C16.666 5.09078 12.6864 1.11108 7.77715 1.11108V4.30197ZM7.77756 13.8889C9.92533 13.8889 11.6664 12.1477 11.6664 9.99997C11.6664 7.8522 9.92533 6.11108 7.77756 6.11108C5.62979 6.11108 3.88867 7.8522 3.88867 9.99997C3.88867 12.1477 5.62979 13.8889 7.77756 13.8889Z",
          fill: "white",
        })
      );
    }
    function Ze(e) {
      const { className: t } = e,
        r = Object(n.c)(e, ["className"]);
      return i.createElement(
        "svg",
        Object.assign(
          {
            className: Object(o.a)(
              u.a.SteamDeckCompatIcon,
              u.a.SteamDeckCompatVerified,
              t
            ),
          },
          r,
          {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.33342 11.9222L14.4945 5.76667L16.4556 7.72779L8.33342 15.8556L3.26675 10.7833L5.22786 8.82223L8.33342 11.9222Z",
          fill: "currentColor",
        })
      );
    }
    function Ke(e) {
      const { className: t } = e,
        r = Object(n.c)(e, ["className"]);
      return i.createElement(
        "svg",
        Object.assign(
          {
            className: Object(o.a)(
              u.a.SteamDeckCompatIcon,
              u.a.SteamDeckCompatPlayable,
              t
            ),
          },
          r,
          {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19ZM8.61079 9.44444V15H11.3886V9.44444H8.61079ZM9.07372 8.05245C9.34781 8.23558 9.67004 8.33333 9.99967 8.33333C10.4417 8.33333 10.8656 8.15774 11.1782 7.84518C11.4907 7.53262 11.6663 7.10869 11.6663 6.66667C11.6663 6.33703 11.5686 6.0148 11.3855 5.74072C11.2023 5.46663 10.942 5.25301 10.6375 5.12687C10.3329 5.00072 9.99783 4.96771 9.67452 5.03202C9.35122 5.09633 9.05425 5.25507 8.82116 5.48815C8.58808 5.72124 8.42934 6.01821 8.36503 6.34152C8.30072 6.66482 8.33373 6.99993 8.45988 7.30447C8.58602 7.60902 8.79964 7.86931 9.07372 8.05245Z",
          fill: "currentColor",
        })
      );
    }
    function $e(e) {
      const { className: t } = e,
        r = Object(n.c)(e, ["className"]);
      return i.createElement(
        "svg",
        Object.assign(
          {
            className: Object(o.a)(
              u.a.SteamDeckCompatIcon,
              u.a.SteamDeckCompatUnsupported,
              t
            ),
          },
          r,
          {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M14.1931 15.6064C13.0246 16.4816 11.5733 17 10.001 17C6.13498 17 3.00098 13.866 3.00098 10C3.00098 8.42766 3.51938 6.97641 4.39459 5.80783L14.1931 15.6064ZM15.6074 14.1922C16.4826 13.0236 17.001 11.5723 17.001 10C17.001 6.13401 13.867 3 10.001 3C8.42864 3 6.97739 3.5184 5.80881 4.39362L15.6074 14.1922ZM19.001 10C19.001 14.9706 14.9715 19 10.001 19C5.03041 19 1.00098 14.9706 1.00098 10C1.00098 5.02944 5.03041 1 10.001 1C14.9715 1 19.001 5.02944 19.001 10Z",
          fill: "currentColor",
        })
      );
    }
    function Xe(e) {
      const { className: t } = e,
        r = Object(n.c)(e, ["className"]);
      return i.createElement(
        "svg",
        Object.assign(
          {
            className: Object(o.a)(
              u.a.SteamDeckCompatIcon,
              u.a.SteamDeckCompatUnknown,
              t
            ),
          },
          r,
          {
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        i.createElement("path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d:
            "M17.3972 11.2461L18.8767 11.4932C18.9578 11.0075 19 10.5087 19 10C19 9.49131 18.9578 8.99248 18.8767 8.50682L17.3972 8.75386C17.4647 9.15821 17.5 9.57442 17.5 10C17.5 10.4256 17.4647 10.8418 17.3972 11.2461ZM17.0295 7.3783L18.4348 6.8539C18.0814 5.90668 17.5729 5.03501 16.9403 4.26971L15.7842 5.22538C16.3119 5.86387 16.7354 6.59021 17.0295 7.3783ZM14.7746 4.21582L15.7303 3.05967C14.965 2.42708 14.0933 1.91864 13.1461 1.56519L12.6217 2.97054C13.4098 3.26461 14.1361 3.68805 14.7746 4.21582ZM11.2461 2.60281L11.4932 1.1233C11.0075 1.0422 10.5087 1 10 1C9.49131 1 8.99248 1.0422 8.50682 1.1233L8.75386 2.60281C9.15821 2.5353 9.57442 2.5 10 2.5C10.4256 2.5 10.8418 2.5353 11.2461 2.60281ZM7.3783 2.97054L6.8539 1.56519C5.90668 1.91864 5.03501 2.42708 4.26971 3.05967L5.22538 4.21582C5.86387 3.68805 6.59021 3.26461 7.3783 2.97054ZM4.21582 5.22538L3.05967 4.26971C2.42708 5.03501 1.91864 5.90668 1.56519 6.8539L2.97054 7.3783C3.26461 6.59022 3.68805 5.86387 4.21582 5.22538ZM1 10C1 9.49131 1.0422 8.99248 1.1233 8.50682L2.60281 8.75386C2.5353 9.15821 2.5 9.57442 2.5 10C2.5 10.4256 2.5353 10.8418 2.60281 11.2461L1.1233 11.4932C1.0422 11.0075 1 10.5087 1 10ZM2.97054 12.6217L1.56519 13.1461C1.91864 14.0933 2.42708 14.965 3.05967 15.7303L4.21582 14.7746C3.68805 14.1361 3.26461 13.4098 2.97054 12.6217ZM5.22538 15.7842L4.26971 16.9403C5.03501 17.5729 5.90668 18.0814 6.8539 18.4348L7.3783 17.0295C6.59022 16.7354 5.86387 16.3119 5.22538 15.7842ZM8.75386 17.3972L8.50682 18.8767C8.99248 18.9578 9.49131 19 10 19C10.5087 19 11.0075 18.9578 11.4932 18.8767L11.2461 17.3972C10.8418 17.4647 10.4256 17.5 10 17.5C9.57442 17.5 9.15821 17.4647 8.75386 17.3972ZM12.6217 17.0295L13.1461 18.4348C14.0933 18.0814 14.965 17.5729 15.7303 16.9403L14.7746 15.7842C14.1361 16.3119 13.4098 16.7354 12.6217 17.0295ZM15.7842 14.7746L16.9403 15.7303C17.5729 14.965 18.0814 14.0933 18.4348 13.1461L17.0295 12.6217C16.7354 13.4098 16.3119 14.1361 15.7842 14.7746ZM9.2425 14.7702C9.46679 14.92 9.73048 15 10.0002 15C10.362 15 10.7089 14.8563 10.9646 14.6006C11.2204 14.3448 11.3641 13.998 11.3641 13.6363C11.3641 13.3666 11.2841 13.1029 11.1343 12.8787C10.9844 12.6544 10.7714 12.4796 10.5222 12.3764C10.2729 12.2732 9.99872 12.2462 9.73415 12.2988C9.46958 12.3514 9.22656 12.4813 9.03582 12.672C8.84508 12.8628 8.71518 13.1057 8.66255 13.3703C8.60993 13.6348 8.63694 13.909 8.74016 14.1582C8.84339 14.4074 9.01821 14.6203 9.2425 14.7702ZM11.0981 10.3552C11.1722 10.2348 11.2765 10.1358 11.4005 10.068C11.8099 9.82315 12.1479 9.47526 12.3808 9.05903C12.6137 8.64279 12.7333 8.17276 12.7278 7.69584C12.7223 7.21892 12.5918 6.75179 12.3493 6.34105C12.1069 5.93031 11.7609 5.59033 11.346 5.35502C10.9311 5.11972 10.4617 4.99732 9.98466 5.00004C9.50764 5.00277 9.03969 5.13052 8.62748 5.37054C8.21527 5.61057 7.87321 5.95448 7.63545 6.36796C7.39769 6.78144 7.27253 7.25004 7.27246 7.72699H9.23191C9.23191 7.6261 9.25178 7.52621 9.29039 7.43301C9.32901 7.3398 9.3856 7.25511 9.45694 7.18378C9.52829 7.11244 9.61299 7.05586 9.70621 7.01725C9.79942 6.97865 9.89933 6.95878 10.0002 6.95878C10.1659 6.96387 10.3255 7.02207 10.4556 7.12479C10.5856 7.22751 10.6792 7.3693 10.7225 7.52925C10.7658 7.6892 10.7565 7.85883 10.6961 8.01311C10.6356 8.16739 10.5271 8.29816 10.3867 8.3861C9.97322 8.62846 9.63003 8.97429 9.39088 9.38955C9.15173 9.80482 9.02487 10.2752 9.02278 10.7544V11.3635H10.9777V10.7544C10.9825 10.6131 11.024 10.4755 11.0981 10.3552Z",
          fill: "currentColor",
        })
      );
    }
  },
  "75qM": function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    });
    var n = r("mrSG");
    class i {
      GetObject(e) {
        return Object(n.a)(this, void 0, void 0, function* () {
          try {
            const t = yield this.GetString(e);
            return t ? JSON.parse(t) : null;
          } catch (e) {
            return null;
          }
        });
      }
      StoreObject(e, t) {
        return Object(n.a)(this, void 0, void 0, function* () {
          return this.StoreString(e, JSON.stringify(t));
        });
      }
    }
  },
  CZLW: function (e, t, r) {
    e.exports = {
      Container: "steamdeckbootupthrobber_Container_j78ib",
      MoviePlaying: "steamdeckbootupthrobber_MoviePlaying_3aJvw",
      fade: "steamdeckbootupthrobber_fade_2V_oo",
      "ItemFocusAnim-darkerGrey-nocolor":
        "steamdeckbootupthrobber_ItemFocusAnim-darkerGrey-nocolor_p-Xec",
      "ItemFocusAnim-darkerGrey":
        "steamdeckbootupthrobber_ItemFocusAnim-darkerGrey_2zGWv",
      "ItemFocusAnim-darkGrey":
        "steamdeckbootupthrobber_ItemFocusAnim-darkGrey_2-3TO",
      "ItemFocusAnim-grey": "steamdeckbootupthrobber_ItemFocusAnim-grey_IFP1W",
      "ItemFocusAnimBorder-darkGrey":
        "steamdeckbootupthrobber_ItemFocusAnimBorder-darkGrey_1w_pm",
      "ItemFocusAnim-green":
        "steamdeckbootupthrobber_ItemFocusAnim-green_2nv8F",
      focusAnimation: "steamdeckbootupthrobber_focusAnimation_3_tSH",
      hoverAnimation: "steamdeckbootupthrobber_hoverAnimation_1NqZd",
    };
  },
  CdLH: function (e, t, r) {
    "use strict";
    r.d(t, "g", function () {
      return n;
    }),
      r.d(t, "b", function () {
        return i;
      }),
      r.d(t, "c", function () {
        return a;
      }),
      r.d(t, "e", function () {
        return s;
      }),
      r.d(t, "d", function () {
        return o;
      }),
      r.d(t, "f", function () {
        return c;
      }),
      r.d(t, "h", function () {
        return l;
      }),
      r.d(t, "a", function () {
        return u;
      }),
      r.d(t, "i", function () {
        return d;
      });
    const n = {
      PerYear: 31536e3,
      PerMonth: 2628e3,
      PerWeek: 604800,
      PerDay: 86400,
      PerHour: 3600,
      PerMinute: 60,
    };
    function i(e, t) {
      return (
        e.getFullYear() == t.getFullYear() &&
        e.getMonth() == t.getMonth() &&
        e.getDate() == t.getDate()
      );
    }
    function a(e, t) {
      return e.getFullYear() == t.getFullYear();
    }
    function s(e) {
      return new Date(
        e.getFullYear(),
        e.getMonth(),
        e.getDate(),
        e.getHours(),
        0,
        0,
        0
      );
    }
    function o(e) {
      return new Date(e.getFullYear(), e.getMonth(), e.getDate(), 0, 0, 0, 0);
    }
    function c(e) {
      return new Date(e.getFullYear(), e.getMonth(), 1, 0, 0, 0, 0);
    }
    function l(e) {
      return new Promise((t) => setTimeout(t, e));
    }
    function u() {
      return Math.floor(Date.now() / 1e3);
    }
    function d(e) {
      return Math.floor(e.getTime() / 1e3);
    }
  },
  E4Op: function (e, t, r) {
    "use strict";
  },
  FMQ2: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return u;
    });
    var n = r("q1tI"),
      i = r("CZLW"),
      a = (r("kyHq"), r("UKyN")),
      s = r.n(a),
      o = r("QeIi"),
      c = r.n(o),
      l = r("exH9");
    const u = (e) => {
      let [t, r] = n.useState(!1),
        a = s.a,
        o = e.strOverrideStartupMovie;
      const u = n.useCallback(() => {
        SteamClient.Input.TriggerSimpleHapticEvent(0, 2, 6, 2, 0), r(!0);
      }, [r]);
      let d = Object(l.a)(i.Container, t && i.MoviePlaying);
      return n.createElement(
        "div",
        { className: d },
        !o && n.createElement("img", { alt: "Steam Spinner", src: a }),
        o &&
          n.createElement("video", {
            src: o,
            autoPlay: !0,
            onPlay: u,
            onEnded: e.onVideoComplete,
          }),
        n.createElement("img", {
          alt: "Steam Spinner Preload",
          src: c.a,
          style: { display: "none" },
        })
      );
    };
  },
  FVDh: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return s;
    }),
      r.d(t, "a", function () {
        return u;
      }),
      r.d(t, "b", function () {
        return m;
      });
    var n = r("hRO2"),
      i = r("OS8t");
    r("li7h");
    const a = n.Message;
    function s(e) {
      return "unknown EDisplayStatus ( " + e + " )";
    }
    class o extends a {
      constructor(e = null) {
        super(),
          o.prototype.type || i.a(o.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          o.sm_m ||
            (o.sm_m = {
              proto: o,
              fields: {
                type: { n: 1, br: i.d.readEnum, bw: i.h.writeEnum },
                name: { n: 2, br: i.d.readString, bw: i.h.writeString },
              },
            }),
          o.sm_m
        );
      }
      static MBF() {
        return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
      }
      toObject(e = !1) {
        return o.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(o.M(), e, t);
      }
      static fromObject(e) {
        return i.c(o.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new o();
        return o.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(o.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(o.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CAppOverview_AppAssociation";
      }
    }
    class c extends a {
      constructor(e = null) {
        super(),
          c.prototype.clientid || i.a(c.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          c.sm_m ||
            (c.sm_m = {
              proto: c,
              fields: {
                clientid: {
                  n: 1,
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
                client_name: { n: 2, br: i.d.readString, bw: i.h.writeString },
                display_status: { n: 3, br: i.d.readEnum, bw: i.h.writeEnum },
                status_percentage: {
                  n: 4,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                active_beta: { n: 5, br: i.d.readString, bw: i.h.writeString },
                installed: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
                bytes_downloaded: {
                  n: 7,
                  d: "0",
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
                bytes_total: {
                  n: 8,
                  d: "0",
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
                streaming_to_local_client: {
                  n: 9,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                is_available_on_current_platform: {
                  n: 10,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                is_invalid_os_type: {
                  n: 11,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                playtime_left: {
                  n: 12,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                cloud_status: { n: 13, br: i.d.readEnum, bw: i.h.writeEnum },
              },
            }),
          c.sm_m
        );
      }
      static MBF() {
        return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
      }
      toObject(e = !1) {
        return c.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(c.M(), e, t);
      }
      static fromObject(e) {
        return i.c(c.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new c();
        return c.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(c.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(c.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CAppOverview_PerClientData";
      }
    }
    class l extends a {
      constructor(e = null) {
        super(),
          l.prototype.appid || i.a(l.M()),
          a.initialize(this, e, 0, -1, [19, 20, 23, 43], null);
      }
      static M() {
        return (
          l.sm_m ||
            (l.sm_m = {
              proto: l,
              fields: {
                appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                display_name: { n: 2, br: i.d.readString, bw: i.h.writeString },
                visible_in_game_list: {
                  n: 4,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                sort_as: { n: 6, br: i.d.readString, bw: i.h.writeString },
                app_type: { n: 7, br: i.d.readEnum, bw: i.h.writeEnum },
                mru_index: { n: 13, br: i.d.readUint32, bw: i.h.writeUint32 },
                rt_recent_activity_time: {
                  n: 14,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                minutes_playtime_forever: {
                  n: 16,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                minutes_playtime_last_two_weeks: {
                  n: 17,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                rt_last_time_played: {
                  n: 18,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                store_tag: {
                  n: 19,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
                association: { n: 20, c: o, r: !0, q: !0 },
                store_category: {
                  n: 23,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
                rt_original_release_date: {
                  n: 25,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                rt_steam_release_date: {
                  n: 26,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                icon_hash: { n: 27, br: i.d.readString, bw: i.h.writeString },
                controller_support: {
                  n: 31,
                  br: i.d.readEnum,
                  bw: i.h.writeEnum,
                },
                vr_supported: { n: 32, br: i.d.readBool, bw: i.h.writeBool },
                metacritic_score: {
                  n: 36,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                size_on_disk: {
                  n: 37,
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
                third_party_mod: { n: 38, br: i.d.readBool, bw: i.h.writeBool },
                icon_data: { n: 39, br: i.d.readString, bw: i.h.writeString },
                icon_data_format: {
                  n: 40,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                gameid: { n: 41, br: i.d.readString, bw: i.h.writeString },
                library_capsule_filename: {
                  n: 42,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                per_client_data: { n: 43, c: c, r: !0, q: !0 },
                most_available_clientid: {
                  n: 44,
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
                selected_clientid: {
                  n: 45,
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
                rt_store_asset_mtime: {
                  n: 46,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                rt_custom_image_mtime: {
                  n: 47,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                optional_parent_app_id: {
                  n: 48,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                owner_account_id: {
                  n: 49,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                compat_mapping_enabled: {
                  n: 50,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                compat_mapping_priority: {
                  n: 51,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                compat_mapping_tool_name: {
                  n: 52,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                review_score_with_bombs: {
                  n: 53,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                review_percentage_with_bombs: {
                  n: 54,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                review_score_without_bombs: {
                  n: 55,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                review_percentage_without_bombs: {
                  n: 56,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                library_id: { n: 57, br: i.d.readString, bw: i.h.writeString },
                vr_only: { n: 58, br: i.d.readBool, bw: i.h.writeBool },
                mastersub_appid: {
                  n: 59,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                mastersub_includedwith_logo: {
                  n: 60,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                site_license_site_name: {
                  n: 62,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                shortcut_override_appid: {
                  n: 63,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                steam_deck_compat_category: {
                  n: 64,
                  br: i.d.readEnum,
                  bw: i.h.writeEnum,
                },
                rt_last_time_locally_played: {
                  n: 65,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                rt_purchased_time: {
                  n: 66,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
              },
            }),
          l.sm_m
        );
      }
      static MBF() {
        return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
      }
      toObject(e = !1) {
        return l.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(l.M(), e, t);
      }
      static fromObject(e) {
        return i.c(l.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new l();
        return l.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(l.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(l.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CAppOverview";
      }
    }
    class u extends a {
      constructor(e = null) {
        super(),
          u.prototype.app_overview || i.a(u.M()),
          a.initialize(this, e, 0, -1, [1, 2], null);
      }
      static M() {
        return (
          u.sm_m ||
            (u.sm_m = {
              proto: u,
              fields: {
                app_overview: { n: 1, c: l, r: !0, q: !0 },
                removed_appid: {
                  n: 2,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
              },
            }),
          u.sm_m
        );
      }
      static MBF() {
        return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
      }
      toObject(e = !1) {
        return u.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(u.M(), e, t);
      }
      static fromObject(e) {
        return i.c(u.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new u();
        return u.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(u.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(u.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CAppOverview_Change";
      }
    }
    class d extends a {
      constructor(e = null) {
        super(),
          d.prototype.appid || i.a(d.M()),
          a.initialize(this, e, 0, -1, [3], null);
      }
      static M() {
        return (
          d.sm_m ||
            (d.sm_m = {
              proto: d,
              fields: {
                appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                hidden: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                user_tag: {
                  n: 3,
                  r: !0,
                  q: !0,
                  br: i.d.readString,
                  bw: i.h.writeRepeatedString,
                },
              },
            }),
          d.sm_m
        );
      }
      static MBF() {
        return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
      }
      toObject(e = !1) {
        return d.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(d.M(), e, t);
      }
      static fromObject(e) {
        return i.c(d.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new d();
        return d.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(d.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(d.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CAppBootstrapData";
      }
    }
    class m extends a {
      constructor(e = null) {
        super(),
          m.prototype.app_data || i.a(m.M()),
          a.initialize(this, e, 0, -1, [1], null);
      }
      static M() {
        return (
          m.sm_m ||
            (m.sm_m = {
              proto: m,
              fields: { app_data: { n: 1, c: d, r: !0, q: !0 } },
            }),
          m.sm_m
        );
      }
      static MBF() {
        return m.sm_mbf || (m.sm_mbf = i.e(m.M())), m.sm_mbf;
      }
      toObject(e = !1) {
        return m.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(m.M(), e, t);
      }
      static fromObject(e) {
        return i.c(m.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new m();
        return m.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(m.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(m.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CLibraryBootstrapData";
      }
    }
  },
  Jnrd: function (e, t, r) {
    "use strict";
    function n(e) {
      if (!a() || !window.document.cookie) return null;
      let t = document.cookie.match("(^|; )" + e + "=([^;]*)");
      return t && t[2] ? decodeURIComponent(t[2]) : null;
    }
    function i(e, t, r, n) {
      if (!a()) return;
      n || (n = "/");
      let i = "";
      if (void 0 !== r && r) {
        let e = new Date();
        e.setTime(e.getTime() + 864e5 * r),
          (i = "; expires=" + e.toUTCString());
      }
      document.cookie =
        encodeURIComponent(e) + "=" + encodeURIComponent(t) + i + ";path=" + n;
    }
    function a() {
      return !!window.document;
    }
    r.d(t, "b", function () {
      return n;
    }),
      r.d(t, "c", function () {
        return i;
      }),
      r.d(t, "a", function () {
        return a;
      });
  },
  K5Iu: function (e, t, r) {
    "use strict";
    r.d(t, "d", function () {
      return o;
    }),
      r.d(t, "a", function () {
        return c;
      }),
      r.d(t, "b", function () {
        return l;
      }),
      r.d(t, "c", function () {
        return u;
      });
    var n = r("mrSG"),
      i = r("bxBv"),
      a = (r("NtSG"), r("hRO2"), r("2vnA"));
    r("mgoM"), r("E4Op"), r("6NF1");
    class s {
      constructor() {
        (this.m_mapCallbacks = new Map()),
          (this.m_rgRegisteredEMsgs = []),
          (this.m_mapServiceMethodHandlers = new Map()),
          (this.m_rgRegisteredServiceMethodHandlers = []);
      }
      InstallErrorReportingStore(e) {
        this.m_ErrorReportingStore = e;
      }
      DispatchMsgToHandlers(e, t) {
        let r = e.GetEMsg();
        if (146 == r) {
          let r = e.Hdr().target_job_name();
          if (r) {
            let n = this.m_mapServiceMethodHandlers.get(r);
            if (n) {
              this.DEBUG_LogMessageDispatch(e, n[0]);
              for (let r of n)
                try {
                  r.invoke(e, t);
                } catch (e) {
                  e instanceof Error && this.m_ErrorReportingStore
                    ? this.m_ErrorReportingStore.ReportError(e)
                    : console.error(
                        "MessageHandlers failed to dispatch message to handler: ",
                        e
                      );
                }
              return !0;
            }
          }
        } else {
          let t = this.m_mapCallbacks.get(r);
          if (t) {
            this.DEBUG_LogMessageDispatch(e, t[0]);
            for (let r of t)
              try {
                r.invoke(e);
              } catch (e) {
                e instanceof Error && this.m_ErrorReportingStore
                  ? this.m_ErrorReportingStore.ReportError(e)
                  : console.error(
                      "MessageHandlers failed to dispatch message to handler: ",
                      e
                    );
              }
            return !0;
          }
        }
        return !1;
      }
      DEBUG_LogMessageDispatch(e, t) {
        0;
      }
      get emsg_list() {
        return this.m_rgRegisteredEMsgs;
      }
      get servicemethod_list() {
        return this.m_rgRegisteredServiceMethodHandlers;
      }
      AddCallback(e, t, r) {
        let n = this.m_mapCallbacks.get(e);
        return (
          n ||
            ((n = []),
            this.m_mapCallbacks.set(e, n),
            this.m_rgRegisteredEMsgs.push(e)),
          n.push({ invoke: r, msgClass: t }),
          {
            invoke: r,
            unregister: () => {
              let t = this.m_mapCallbacks.get(e);
              if (t)
                for (let e = 0; e < t.length; e++)
                  t[e].invoke == r && (t.splice(e, 1), e--);
            },
          }
        );
      }
      AddServiceMethodHandler(e, t) {
        let r = (r, n) => {
          let a = i.b.InitFromMsg(e.request, r),
            s = i.b.Init(e.response, 147),
            o = t(a, s),
            c = (e) => {
              s.Hdr().set_eresult(e), n(s);
            };
          o instanceof Promise
            ? o.then(c).catch(() => {
                c(2);
              })
            : c(o);
        };
        return (
          this.m_mapServiceMethodHandlers.has(e.name)
            ? console.error("Duplicate registration for method " + e.name)
            : (this.m_mapServiceMethodHandlers.set(e.name, [
                { invoke: r, msgClass: e.request },
              ]),
              this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
          {
            invoke: r,
            unregister: () => {
              let t = this.m_mapServiceMethodHandlers.get(e.name);
              if (t)
                for (let e = 0; e < t.length; e++)
                  t[e].invoke == r && (t.splice(e, 1), e--);
            },
          }
        );
      }
      AddServiceNotificationHandler(e, t) {
        let r = (r, n) => {
            let a = i.b.InitFromMsg(e.request, r);
            t(a);
          },
          n = this.m_mapServiceMethodHandlers.get(e.name);
        return (
          n ||
            ((n = []),
            this.m_mapServiceMethodHandlers.set(e.name, n),
            this.m_rgRegisteredServiceMethodHandlers.push(e.name)),
          n.push({ invoke: r, msgClass: e.request }),
          {
            invoke: r,
            unregister: () => {
              let t = this.m_mapServiceMethodHandlers.get(e.name);
              if (t)
                for (let e = 0; e < t.length; e++)
                  t[e].invoke == r && (t.splice(e, 1), e--);
            },
          }
        );
      }
    }
    Object(n.b)([a.C], s.prototype, "m_rgRegisteredEMsgs", void 0),
      Object(n.b)(
        [a.C],
        s.prototype,
        "m_rgRegisteredServiceMethodHandlers",
        void 0
      );
    let o = new s();
    function c(e, t, r) {
      return o.AddCallback(e, t, (e) => {
        Object(a.G)(() => {
          r(i.b.InitFromMsg(t, e));
        });
      });
    }
    function l(e, t) {
      return o.AddServiceNotificationHandler(e, t);
    }
    function u(e, t) {
      return o.AddServiceNotificationHandler(e, (e) => {
        let r;
        return (
          Object(a.G)(() => {
            r = t(e);
          }),
          r
        );
      });
    }
  },
  Kw0F: function (e, t, r) {
    "use strict";
    r.d(t, "h", function () {
      return n;
    }),
      r.d(t, "f", function () {
        return i;
      }),
      r.d(t, "a", function () {
        return a;
      }),
      r.d(t, "d", function () {
        return s;
      }),
      r.d(t, "e", function () {
        return o;
      }),
      r.d(t, "b", function () {
        return c;
      }),
      r.d(t, "i", function () {
        return l;
      }),
      r.d(t, "c", function () {
        return u;
      }),
      r.d(t, "g", function () {
        return d;
      });
    r("r64O");
    function n(e) {
      if ((null == e ? void 0 : e.length) > 1) {
        let t = e.length;
        for (; 0 !== t; ) {
          let r = Math.floor(Math.random() * t);
          t -= 1;
          let n = e[t];
          (e[t] = e[r]), (e[r] = n);
        }
      }
    }
    function i(e, t, r) {
      t < 0 ||
        r < 0 ||
        (r >= e.length && (e[r] = void 0), e.splice(r, 0, e.splice(t, 1)[0]));
    }
    function a(e, t) {
      if (!e && !t) return !0;
      if (!e || !t) return !1;
      if (e.length != t.length) return !1;
      for (let r = 0; r < e.length; r++) if (e[r] !== t[r]) return !1;
      return !0;
    }
    function s(e, t) {
      return o(e, (e) => t == e);
    }
    function o(e, t) {
      let r = e.findIndex(t);
      return r >= 0 && (e.splice(r, 1), !0);
    }
    function c(e, t) {
      return e.reduce((e, r, n, i) => e + (t(r, n, i) ? 1 : 0), 0);
    }
    function l(e, t, r) {
      let n = 0,
        i = e.length - 1;
      for (; n <= i; ) {
        let a = Math.floor((n + i) / 2),
          s = r(e[a], t);
        if (s < 0) n = a + 1;
        else if (s > 0) i = a - 1;
        else {
          if (i == a) return a;
          if (a == n) return i > a && r(t, e[a + 1]) < 0 ? a : a + 1;
          n = a;
        }
      }
      return i;
    }
    function u(e, t) {
      let r = 0,
        n = 0;
      for (; r < e.length; ) {
        const i = e[r];
        t(i, r, e) && (e[n++] = i), r++;
      }
      return (e.length = n), e;
    }
    function d(e, t, r) {
      return (
        e ||
          console.error(
            "array should be defined for us to fill in the missing indexes"
          ),
        e.length < t ? e.concat(Array(t - e.length).fill(r)) : e
      );
    }
  },
  NtSG: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    });
    var n = r("hRO2");
    r("OS8t");
    n.Message;
    function i(e) {
      return "unknown EMsg ( " + e + " )";
    }
  },
  OS8t: function (e, t, r) {
    "use strict";
    r.d(t, "d", function () {
      return i;
    }),
      r.d(t, "h", function () {
        return a;
      }),
      r.d(t, "e", function () {
        return s;
      }),
      r.d(t, "c", function () {
        return o;
      }),
      r.d(t, "g", function () {
        return c;
      }),
      r.d(t, "b", function () {
        return l;
      }),
      r.d(t, "f", function () {
        return u;
      }),
      r.d(t, "a", function () {
        return d;
      });
    var n = r("hRO2");
    const i = n.BinaryReader.prototype,
      a = n.BinaryWriter.prototype;
    function s(e) {
      let t = {};
      const { fields: r } = e;
      for (let e in r) {
        const n = r[e];
        t[n.n] = n;
      }
      return t;
    }
    function o(e, t) {
      const { proto: r, fields: i } = e,
        a = new r();
      for (let e in i) {
        const { n: r, c: s, r: o, d: c, q: l } = i[e];
        if (!t.hasOwnProperty(e)) continue;
        const u = t[e];
        s
          ? o
            ? n.Message.setRepeatedWrapperField(
                a,
                r,
                Array.isArray(u) ? u.map((e) => s.fromObject(e)) : []
              )
            : n.Message.setWrapperField(a, r, s.fromObject(u))
          : n.Message.setField(a, r, u);
      }
      return a;
    }
    function c(e, t, r) {
      const { proto: i, fields: a } = e;
      let s = {};
      for (let e in a) {
        const { n: i, c: o, r: c, d: l, q: u } = a[e];
        if (o)
          if (c)
            s[e] = n.Message.toObjectList(
              n.Message.getRepeatedWrapperField(r, o, i),
              o.toObject,
              t
            );
          else {
            const a = n.Message.getWrapperField(r, o, i, u ? 1 : 0);
            a && (s[e] = o.toObject(t, a));
          }
        else {
          const t = n.Message.getFieldWithDefault(
            r,
            i,
            void 0 !== l ? l : null
          );
          (null !== t || u) && (s[e] = t);
        }
      }
      return t && (s.$jspbMessageInstance = r), s;
    }
    function l(e, t, r) {
      for (; r.nextField() && !r.isEndGroup(); ) {
        const i = e[r.getFieldNumber()];
        if (i) {
          const { n: e, c: a, r: s, d: o, q: c, br: l } = i;
          if (a) {
            const i = new a();
            r.readMessage(i, a.deserializeBinaryFromReader),
              s
                ? n.Message.addToRepeatedWrapperField(t, e, i, a)
                : n.Message.setWrapperField(t, e, i);
          } else if (l) {
            const i = l.call(r);
            s
              ? n.Message.addToRepeatedField(t, e, i)
              : n.Message.setField(t, e, i);
          } else
            console.assert(
              l,
              `Reader func not set for field number ${e} in class ${a}`
            ),
              r.skipField();
        } else r.skipField();
      }
      return t;
    }
    function u(e, t, r) {
      const { fields: i } = e;
      for (let e in i) {
        const { n: a, c: s, r: o, d: c, q: l, bw: u } = i[e];
        if (s)
          if (o) {
            const e = n.Message.getRepeatedWrapperField(t, s, a);
            ((e && e.length) || l) &&
              r.writeRepeatedMessage(a, e, s.serializeBinaryToWriter);
          } else {
            const e = n.Message.getWrapperField(t, s, a, l ? 1 : 0);
            e && r.writeMessage(a, e, s.serializeBinaryToWriter);
          }
        else if (u) {
          const e = n.Message.getField(t, a);
          void 0 !== e && u.call(r, a, e);
        } else
          console.assert(
            u,
            `Writer func not set for field number ${a} in class ${s}`
          );
      }
    }
    function d(e) {
      const t = e.proto;
      for (const r in e.fields) {
        const i = e.fields[r],
          { n: a, c: s, r: o, d: c, q: l } = i;
        i.hasOwnProperty("d")
          ? (t.prototype[r] = m(n.Message.getFieldWithDefault, a, c))
          : (t.prototype[r] = s
              ? o
                ? m(n.Message.getRepeatedWrapperField, s, a)
                : h(s, a)
              : m(n.Message.getField, a)),
          (t.prototype[`set_${r}`] = _(
            s
              ? o
                ? n.Message.setRepeatedWrapperField
                : n.Message.setWrapperField
              : n.Message.setField,
            a
          )),
          o && (t.prototype[`add_${r}`] = b(a, s));
      }
    }
    function m(e, ...t) {
      return function () {
        return e(this, ...t);
      };
    }
    function h(e, t) {
      return function (r = !0) {
        return n.Message.getWrapperField(this, e, t, r ? 1 : 0);
      };
    }
    function _(e, t) {
      return function (r) {
        return e(this, t, r);
      };
    }
    function b(e, t) {
      return t
        ? function (r, i) {
            return n.Message.addToRepeatedWrapperField(this, e, r, t, i);
          }
        : function (t, r) {
            n.Message.addToRepeatedField(this, e, t, r);
          };
    }
  },
  QeIi: function (e, t) {
    e.exports = "/images/steam_spinner.png";
  },
  "RD/U": function (e, t, r) {
    "use strict";
    r.d(t, "d", function () {
      return s;
    }),
      r.d(t, "f", function () {
        return o;
      }),
      r.d(t, "e", function () {
        return c;
      }),
      r.d(t, "c", function () {
        return l;
      }),
      r.d(t, "a", function () {
        return u;
      }),
      r.d(t, "b", function () {
        return m;
      });
    var n = r("hRO2"),
      i = r("OS8t");
    const a = n.Message;
    class s extends a {
      constructor(e = null) {
        super(),
          s.prototype.v4 || i.a(s.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          s.sm_m ||
            (s.sm_m = {
              proto: s,
              fields: {
                v4: { n: 1, br: i.d.readFixed32, bw: i.h.writeFixed32 },
                v6: { n: 2, br: i.d.readBytes, bw: i.h.writeBytes },
              },
            }),
          s.sm_m
        );
      }
      static MBF() {
        return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
      }
      toObject(e = !1) {
        return s.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(s.M(), e, t);
      }
      static fromObject(e) {
        return i.c(s.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new s();
        return s.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(s.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(s.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgIPAddress";
      }
    }
    class o extends a {
      constructor(e = null) {
        super(),
          o.prototype.steamid || i.a(o.M()),
          a.initialize(this, e, 0, -1, [27], null);
      }
      static M() {
        return (
          o.sm_m ||
            (o.sm_m = {
              proto: o,
              fields: {
                steamid: {
                  n: 1,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                client_sessionid: {
                  n: 2,
                  br: i.d.readInt32,
                  bw: i.h.writeInt32,
                },
                routing_appid: {
                  n: 3,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                jobid_source: {
                  n: 10,
                  d: "18446744073709551615",
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                jobid_target: {
                  n: 11,
                  d: "18446744073709551615",
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                target_job_name: {
                  n: 12,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                seq_num: { n: 24, br: i.d.readInt32, bw: i.h.writeInt32 },
                eresult: { n: 13, d: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                error_message: {
                  n: 14,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                ip: { n: 15, br: i.d.readUint32, bw: i.h.writeUint32 },
                ip_v6: { n: 29, br: i.d.readBytes, bw: i.h.writeBytes },
                auth_account_flags: {
                  n: 16,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                token_source: {
                  n: 22,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                admin_spoofing_user: {
                  n: 23,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                transport_error: {
                  n: 17,
                  d: 1,
                  br: i.d.readInt32,
                  bw: i.h.writeInt32,
                },
                messageid: {
                  n: 18,
                  d: "18446744073709551615",
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
                publisher_group_id: {
                  n: 19,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                sysid: { n: 20, br: i.d.readUint32, bw: i.h.writeUint32 },
                trace_tag: {
                  n: 21,
                  br: i.d.readUint64String,
                  bw: i.h.writeUint64String,
                },
                webapi_key_id: {
                  n: 25,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                is_from_external_source: {
                  n: 26,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                forward_to_sysid: {
                  n: 27,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
                cm_sysid: { n: 28, br: i.d.readUint32, bw: i.h.writeUint32 },
                launcher_type: {
                  n: 31,
                  d: 0,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                realm: { n: 32, d: 0, br: i.d.readUint32, bw: i.h.writeUint32 },
              },
            }),
          o.sm_m
        );
      }
      static MBF() {
        return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
      }
      toObject(e = !1) {
        return o.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(o.M(), e, t);
      }
      static fromObject(e) {
        return i.c(o.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new o();
        return o.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(o.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(o.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgProtoBufHeader";
      }
    }
    class c extends a {
      constructor(e = null) {
        super(),
          c.prototype.size_unzipped || i.a(c.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          c.sm_m ||
            (c.sm_m = {
              proto: c,
              fields: {
                size_unzipped: {
                  n: 1,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                message_body: { n: 2, br: i.d.readBytes, bw: i.h.writeBytes },
              },
            }),
          c.sm_m
        );
      }
      static MBF() {
        return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
      }
      toObject(e = !1) {
        return c.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(c.M(), e, t);
      }
      static fromObject(e) {
        return i.c(c.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new c();
        return c.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(c.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(c.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgMulti";
      }
    }
    class l extends a {
      constructor(e = null) {
        super(),
          l.prototype.estate || i.a(l.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          l.sm_m ||
            (l.sm_m = {
              proto: l,
              fields: {
                estate: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                eresult: {
                  n: 2,
                  d: 2,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                steamid: {
                  n: 3,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                gameid: {
                  n: 4,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                h_steam_pipe: { n: 5, br: i.d.readUint32, bw: i.h.writeUint32 },
                ticket_crc: { n: 6, br: i.d.readUint32, bw: i.h.writeUint32 },
                ticket: { n: 7, br: i.d.readBytes, bw: i.h.writeBytes },
              },
            }),
          l.sm_m
        );
      }
      static MBF() {
        return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
      }
      toObject(e = !1) {
        return l.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(l.M(), e, t);
      }
      static fromObject(e) {
        return i.c(l.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new l();
        return l.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(l.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(l.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgAuthTicket";
      }
    }
    class u extends a {
      constructor(e = null) {
        super(),
          u.prototype.appid || i.a(u.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          u.sm_m ||
            (u.sm_m = {
              proto: u,
              fields: {
                appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                name: { n: 2, br: i.d.readString, bw: i.h.writeString },
                icon: { n: 3, br: i.d.readString, bw: i.h.writeString },
                tool: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
                demo: { n: 7, br: i.d.readBool, bw: i.h.writeBool },
                media: { n: 8, br: i.d.readBool, bw: i.h.writeBool },
                community_visible_stats: {
                  n: 9,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                friendly_name: {
                  n: 10,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                propagation: { n: 11, br: i.d.readString, bw: i.h.writeString },
                has_adult_content: {
                  n: 12,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                is_visible_in_steam_china: {
                  n: 13,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                app_type: { n: 14, br: i.d.readUint32, bw: i.h.writeUint32 },
              },
            }),
          u.sm_m
        );
      }
      static MBF() {
        return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
      }
      toObject(e = !1) {
        return u.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(u.M(), e, t);
      }
      static fromObject(e) {
        return i.c(u.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new u();
        return u.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(u.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(u.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CCDDBAppDetailCommon";
      }
    }
    class d extends a {
      constructor(e = null) {
        super(),
          d.prototype.clanid || i.a(d.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          d.sm_m ||
            (d.sm_m = {
              proto: d,
              fields: {
                clanid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                event_gid: {
                  n: 2,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                announcement_gid: {
                  n: 3,
                  br: i.d.readFixed64String,
                  bw: i.h.writeFixed64String,
                },
                rtime_start: { n: 4, br: i.d.readUint32, bw: i.h.writeUint32 },
                rtime_end: { n: 5, br: i.d.readUint32, bw: i.h.writeUint32 },
                priority_score: {
                  n: 6,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                type: { n: 7, br: i.d.readUint32, bw: i.h.writeUint32 },
                clamp_range_slot: {
                  n: 8,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                appid: { n: 9, br: i.d.readUint32, bw: i.h.writeUint32 },
                rtime32_last_modified: {
                  n: 10,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
              },
            }),
          d.sm_m
        );
      }
      static MBF() {
        return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
      }
      toObject(e = !1) {
        return d.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(d.M(), e, t);
      }
      static fromObject(e) {
        return i.c(d.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new d();
        return d.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(d.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(d.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CClanEventUserNewsTuple";
      }
    }
    class m extends a {
      constructor(e = null) {
        super(),
          m.prototype.rtime_before || i.a(m.M()),
          a.initialize(this, e, 0, -1, [4], null);
      }
      static M() {
        return (
          m.sm_m ||
            (m.sm_m = {
              proto: m,
              fields: {
                rtime_before: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                rtime_after: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                qualified: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                events: { n: 4, c: d, r: !0, q: !0 },
              },
            }),
          m.sm_m
        );
      }
      static MBF() {
        return m.sm_mbf || (m.sm_mbf = i.e(m.M())), m.sm_mbf;
      }
      toObject(e = !1) {
        return m.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(m.M(), e, t);
      }
      static fromObject(e) {
        return i.c(m.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new m();
        return m.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(m.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(m.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CClanMatchEventByRange";
      }
    }
  },
  SvTV: function (e, t, r) {
    "use strict";
    var n = r("hRO2");
    r("OS8t");
    n.Message;
  },
  TLQK: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return u;
    }),
      r.d(t, "a", function () {
        return d;
      }),
      r.d(t, "g", function () {
        return m;
      }),
      r.d(t, "p", function () {
        return h;
      }),
      r.d(t, "q", function () {
        return _;
      }),
      r.d(t, "n", function () {
        return b;
      }),
      r.d(t, "o", function () {
        return g;
      }),
      r.d(t, "b", function () {
        return p;
      }),
      r.d(t, "e", function () {
        return y;
      }),
      r.d(t, "d", function () {
        return B;
      }),
      r.d(t, "f", function () {
        return M;
      });
    var n = r("q1tI"),
      i = r("mgoM"),
      a = r("kyHq"),
      s = r("lkRc"),
      o = r("Kw0F"),
      c = (r("r64O"), r("6NF1"), r("qiKp")),
      l = r("Z1oF");
    r.d(t, "h", function () {
      return l.b;
    }),
      r.d(t, "i", function () {
        return l.c;
      }),
      r.d(t, "j", function () {
        return l.d;
      }),
      r.d(t, "l", function () {
        return l.f;
      }),
      r.d(t, "m", function () {
        return l.g;
      }),
      r.d(t, "r", function () {
        return l.i;
      }),
      r.d(t, "s", function () {
        return l.j;
      }),
      r.d(t, "t", function () {
        return l.k;
      }),
      r.d(t, "k", function () {
        return l.e;
      });
    class u {
      constructor() {
        (this.m_mapTokens = new Map()),
          (this.m_mapFallbackTokens = new Map()),
          (this.m_cbkTokensChanged = new c.a());
      }
      static InstallErrorReportingStore(e) {
        this.sm_ErrorReportingStore = e;
      }
      static GetLanguageFallback(e) {
        return "sc_schinese" === e ? "schinese" : "english";
      }
      static GetELanguageFallback(e) {
        return 29 === e ? 6 : 0;
      }
      static IsELanguageValidInRealm(e, t) {
        return (
          t === (29 === e ? a.z.k_ESteamRealmChina : a.z.k_ESteamRealmGlobal)
        );
      }
      static GetLanguageListForRealms(e) {
        const t = new Array();
        for (let r = 0; r < 30; r++)
          for (const n of e)
            if (this.IsELanguageValidInRealm(r, n)) {
              t.push(r);
              break;
            }
        return t;
      }
      InitFromObjects(e, t, r, n, i) {
        i || this.m_mapTokens.clear();
        const a = Object.assign(Object.assign({}, r || {}), e),
          s = Object.assign(Object.assign({}, n || {}), t || {});
        this.AddTokens(a, s), this.m_cbkTokensChanged.Dispatch();
      }
      InitDirect(e, t) {
        this.m_mapTokens.clear(),
          this.m_mapFallbackTokens.clear(),
          this.AddTokens(e, t),
          this.m_cbkTokensChanged.Dispatch();
      }
      AddTokens(e, t) {
        Object.keys(e).forEach((t) => {
          this.m_mapTokens.set(t, e[t]);
        }),
          t &&
            Object.keys(t).forEach((e) => {
              this.m_mapTokens.has(e) || this.m_mapTokens.set(e, t[e]),
                this.m_mapFallbackTokens.set(e, t[e]);
            });
      }
      GetTokensChangedCallbackList() {
        return this.m_cbkTokensChanged;
      }
      GetPreferredLocales() {
        return this.m_rgLocalesToUse
          ? this.m_rgLocalesToUse
          : navigator && navigator.languages
          ? navigator.languages
          : ["en-US"];
      }
      GetELanguageFallbackOrder(e = null) {
        let t = new Array();
        if (
          (t.push(Object(i.n)(s.c.LANGUAGE)),
          (s.c.SUPPORTED_LANGUAGES || []).forEach((e) => {
            e.value != s.c.LANGUAGE && t.push(Object(i.n)(e.value));
          }),
          e)
        ) {
          u.GetLanguageListForRealms(e).forEach((e) => {
            -1 == t.indexOf(e) && t.push(e);
          });
        }
        return t;
      }
      SetPreferredLocales(e) {
        this.m_rgLocalesToUse = e;
      }
      LocalizeString(e, t) {
        if (!e || 0 == e.length || "#" != e.charAt(0)) return;
        let r = this.m_mapTokens.get(e.substring(1));
        if (void 0 !== r) return r;
        !t &&
          u.sm_ErrorReportingStore &&
          u.sm_ErrorReportingStore.ReportError(
            new Error(
              `Unable to find localization token '${e}' for language '${s.c.LANGUAGE}', ${this.m_mapTokens.size} tokens in map`
            ),
            { bIncludeMessageInIdentifier: !0 }
          );
      }
      LocalizeStringFromFallback(e) {
        if (!e || 0 == e.length || "#" != e.charAt(0)) return;
        let t = this.m_mapFallbackTokens.get(e.substring(1));
        return void 0 !== t ? t : void 0;
      }
    }
    function d(e) {
      return null != M.LocalizeString(e, !0);
    }
    function m(e, ...t) {
      let r = M.LocalizeString(e);
      return void 0 === r ? e : f(r, ...t);
    }
    function h(e, ...t) {
      let r = M.LocalizeString(e);
      if (void 0 === r) return e;
      let i,
        a = [],
        s = /(.*?)%(\d+)\$s/g,
        o = 0;
      for (; (i = s.exec(r)); ) {
        (o += i[0].length), a.push(i[1]);
        let e = parseInt(i[2]);
        e >= 1 && e <= t.length && a.push(t[e - 1]);
      }
      return a.push(r.substr(o)), n.createElement(n.Fragment, null, ...a);
    }
    function _(e, t, ...r) {
      return 1 === t || "1" === t ? h(e, t, ...r) : h(e + "_Plural", t, ...r);
    }
    function b(e, ...t) {
      let r = M.LocalizeString(e);
      if (void 0 === r) return e;
      let i,
        a = [],
        s = /(.*?)<(\d+)>(.*)<\/(\2)>/g,
        o = 0;
      for (; (i = s.exec(r)); ) {
        (o += i[0].length), a.push(i[1]);
        let e = parseInt(i[2]),
          r = i[3] || "",
          s = (e >= 1 && e <= t.length ? t[e - 1] : null)
            ? n.cloneElement(t[e - 1], {}, [r])
            : r;
        a.push(s);
      }
      return a.push(r.substr(o)), n.createElement(n.Fragment, null, ...a);
    }
    function g(e, t, ...r) {
      return 1 === t || "1" === t ? m(e, t, ...r) : m(e + "_Plural", t, ...r);
    }
    function f(e, ...t) {
      return 0 == t.length
        ? e
        : (e = e.replace(/%(?:(\d+)\$)?s/g, function (e, r) {
            if (r <= t.length && r >= 1) {
              let e = t[r - 1];
              return String(null == e ? "" : e);
            }
            return e;
          }));
    }
    class p {
      static Set(e, t, r) {
        if (e.length <= t) {
          if (t >= 30) return e;
          e = Object(o.g)(e, t + 1, null);
        }
        return (e[t] = r), e;
      }
      static Get(e, t) {
        return (e && e.length > t && e[t]) || "";
      }
      static GetWithFallback(e, t) {
        if (e) {
          return p.Get(e, t) || p.Get(e, u.GetELanguageFallback(t));
        }
        return null;
      }
    }
    const w = {
        english: "en",
        german: "de",
        french: "fr",
        italian: "it",
        korean: "ko",
        latam: "es-419",
        spanish: "es",
        schinese: "zh-cn",
        tchinese: "zh-tw",
        russian: "ru",
        thai: "th",
        japanese: "ja",
        brazilian: "pt-br",
        portuguese: "pt",
        polish: "pl",
        danish: "da",
        dutch: "nl",
        finnish: "fi",
        norwegian: "no",
        swedish: "sv",
        hungarian: "hu",
        czech: "cs",
        romanian: "ro",
        turkish: "tr",
        arabic: "ar",
        bulgarian: "bg",
        greek: "el",
        ukrainian: "uk",
        vietnamese: "vn",
        sc_schinese: "zh-cn",
        koreana: "ko",
      },
      y = {
        "en-US": 0,
        "de-DE": 1,
        "fr-FR": 2,
        "it-IT": 3,
        "ko-KR": 4,
        "es-ES": 5,
        "zh-CH": 6,
        "zh-CN": 7,
        "ru-RU": 8,
        "th-TH": 9,
        "ja-JP": 10,
        "pt-PT": 11,
        "pl-PL": 12,
        "da-DK": 13,
        "nl-NL": 14,
        "fi-FI": 15,
        "nb-NO": 16,
        "sv-SE": 17,
        "hu-HU": 18,
        "cs-CZ": 19,
        "ro-RO": 20,
        "tr-TR": 21,
        "pt-BR": 22,
        "bg-BG": 23,
        "el-GR": 24,
        "ar-SA": 25,
        "uk-UA": 26,
        "es-419": 27,
        "vi-VN": 28,
      };
    function B() {
      return w[s.c.LANGUAGE] || null;
    }
    const M = new u();
    window.LocalizationManager = M;
  },
  TX96: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return L;
    });
    var n = r("mrSG"),
      i = r("K5Iu"),
      a = r("H7XF"),
      s = r("hRO2"),
      o = r("lkRc"),
      c = r("bxBv"),
      l = r("kLLr"),
      u = r("mC9v"),
      d = r("NtSG"),
      m = r("2ErG"),
      h = r("2vnA"),
      _ = r("mgoM"),
      b = (r("kyHq"), r("OS8t")),
      g = r("RD/U");
    const f = s.Message;
    class p extends f {
      constructor(e = null) {
        super(),
          p.prototype.send_reply || b.a(p.M()),
          f.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          p.sm_m ||
            (p.sm_m = {
              proto: p,
              fields: {
                send_reply: { n: 1, br: b.d.readBool, bw: b.h.writeBool },
              },
            }),
          p.sm_m
        );
      }
      static MBF() {
        return p.sm_mbf || (p.sm_mbf = b.e(p.M())), p.sm_mbf;
      }
      toObject(e = !1) {
        return p.toObject(e, this);
      }
      static toObject(e, t) {
        return b.g(p.M(), e, t);
      }
      static fromObject(e) {
        return b.c(p.M(), e);
      }
      static deserializeBinary(e) {
        let t = new s.BinaryReader(e),
          r = new p();
        return p.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return b.b(p.MBF(), e, t);
      }
      serializeBinary() {
        var e = new s.BinaryWriter();
        return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        b.f(p.M(), e, t);
      }
      serializeBase64String() {
        var e = new s.BinaryWriter();
        return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientHeartBeat";
      }
    }
    class w extends f {
      constructor(e = null) {
        super(),
          w.prototype.client_request_timestamp || b.a(w.M()),
          f.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          w.sm_m ||
            (w.sm_m = {
              proto: w,
              fields: {
                client_request_timestamp: {
                  n: 1,
                  br: b.d.readUint64String,
                  bw: b.h.writeUint64String,
                },
              },
            }),
          w.sm_m
        );
      }
      static MBF() {
        return w.sm_mbf || (w.sm_mbf = b.e(w.M())), w.sm_mbf;
      }
      toObject(e = !1) {
        return w.toObject(e, this);
      }
      static toObject(e, t) {
        return b.g(w.M(), e, t);
      }
      static fromObject(e) {
        return b.c(w.M(), e);
      }
      static deserializeBinary(e) {
        let t = new s.BinaryReader(e),
          r = new w();
        return w.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return b.b(w.MBF(), e, t);
      }
      serializeBinary() {
        var e = new s.BinaryWriter();
        return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        b.f(w.M(), e, t);
      }
      serializeBase64String() {
        var e = new s.BinaryWriter();
        return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientServerTimestampRequest";
      }
    }
    class y extends f {
      constructor(e = null) {
        super(),
          y.prototype.client_request_timestamp || b.a(y.M()),
          f.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          y.sm_m ||
            (y.sm_m = {
              proto: y,
              fields: {
                client_request_timestamp: {
                  n: 1,
                  br: b.d.readUint64String,
                  bw: b.h.writeUint64String,
                },
                server_timestamp_ms: {
                  n: 2,
                  br: b.d.readUint64String,
                  bw: b.h.writeUint64String,
                },
              },
            }),
          y.sm_m
        );
      }
      static MBF() {
        return y.sm_mbf || (y.sm_mbf = b.e(y.M())), y.sm_mbf;
      }
      toObject(e = !1) {
        return y.toObject(e, this);
      }
      static toObject(e, t) {
        return b.g(y.M(), e, t);
      }
      static fromObject(e) {
        return b.c(y.M(), e);
      }
      static deserializeBinary(e) {
        let t = new s.BinaryReader(e),
          r = new y();
        return y.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return b.b(y.MBF(), e, t);
      }
      serializeBinary() {
        var e = new s.BinaryWriter();
        return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        b.f(y.M(), e, t);
      }
      serializeBase64String() {
        var e = new s.BinaryWriter();
        return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientServerTimestampResponse";
      }
    }
    class B extends f {
      constructor(e = null) {
        super(),
          B.prototype.eresult || b.a(B.M()),
          f.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          B.sm_m ||
            (B.sm_m = {
              proto: B,
              fields: {
                eresult: { n: 1, d: 2, br: b.d.readInt32, bw: b.h.writeInt32 },
                legacy_out_of_game_heartbeat_seconds: {
                  n: 2,
                  br: b.d.readInt32,
                  bw: b.h.writeInt32,
                },
                heartbeat_seconds: {
                  n: 3,
                  br: b.d.readInt32,
                  bw: b.h.writeInt32,
                },
                deprecated_public_ip: {
                  n: 4,
                  br: b.d.readUint32,
                  bw: b.h.writeUint32,
                },
                rtime32_server_time: {
                  n: 5,
                  br: b.d.readFixed32,
                  bw: b.h.writeFixed32,
                },
                account_flags: {
                  n: 6,
                  br: b.d.readUint32,
                  bw: b.h.writeUint32,
                },
                cell_id: { n: 7, br: b.d.readUint32, bw: b.h.writeUint32 },
                email_domain: { n: 8, br: b.d.readString, bw: b.h.writeString },
                steam2_ticket: { n: 9, br: b.d.readBytes, bw: b.h.writeBytes },
                eresult_extended: {
                  n: 10,
                  br: b.d.readInt32,
                  bw: b.h.writeInt32,
                },
                webapi_authenticate_user_nonce: {
                  n: 11,
                  br: b.d.readString,
                  bw: b.h.writeString,
                },
                cell_id_ping_threshold: {
                  n: 12,
                  br: b.d.readUint32,
                  bw: b.h.writeUint32,
                },
                deprecated_use_pics: {
                  n: 13,
                  br: b.d.readBool,
                  bw: b.h.writeBool,
                },
                vanity_url: { n: 14, br: b.d.readString, bw: b.h.writeString },
                public_ip: { n: 15, c: g.d },
                client_supplied_steamid: {
                  n: 20,
                  br: b.d.readFixed64String,
                  bw: b.h.writeFixed64String,
                },
                ip_country_code: {
                  n: 21,
                  br: b.d.readString,
                  bw: b.h.writeString,
                },
                parental_settings: {
                  n: 22,
                  br: b.d.readBytes,
                  bw: b.h.writeBytes,
                },
                parental_setting_signature: {
                  n: 23,
                  br: b.d.readBytes,
                  bw: b.h.writeBytes,
                },
                count_loginfailures_to_migrate: {
                  n: 24,
                  br: b.d.readInt32,
                  bw: b.h.writeInt32,
                },
                count_disconnects_to_migrate: {
                  n: 25,
                  br: b.d.readInt32,
                  bw: b.h.writeInt32,
                },
                ogs_data_report_time_window: {
                  n: 26,
                  br: b.d.readInt32,
                  bw: b.h.writeInt32,
                },
                client_instance_id: {
                  n: 27,
                  br: b.d.readUint64String,
                  bw: b.h.writeUint64String,
                },
                force_client_update_check: {
                  n: 28,
                  br: b.d.readBool,
                  bw: b.h.writeBool,
                },
                agreement_session_url: {
                  n: 29,
                  br: b.d.readString,
                  bw: b.h.writeString,
                },
              },
            }),
          B.sm_m
        );
      }
      static MBF() {
        return B.sm_mbf || (B.sm_mbf = b.e(B.M())), B.sm_mbf;
      }
      toObject(e = !1) {
        return B.toObject(e, this);
      }
      static toObject(e, t) {
        return b.g(B.M(), e, t);
      }
      static fromObject(e) {
        return b.c(B.M(), e);
      }
      static deserializeBinary(e) {
        let t = new s.BinaryReader(e),
          r = new B();
        return B.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return b.b(B.MBF(), e, t);
      }
      serializeBinary() {
        var e = new s.BinaryWriter();
        return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        b.f(B.M(), e, t);
      }
      serializeBase64String() {
        var e = new s.BinaryWriter();
        return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientLogonResponse";
      }
    }
    class M extends f {
      constructor(e = null) {
        super(),
          M.prototype.persona_name || b.a(M.M()),
          f.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          M.sm_m ||
            (M.sm_m = {
              proto: M,
              fields: {
                persona_name: { n: 1, br: b.d.readString, bw: b.h.writeString },
                ip_country: { n: 2, br: b.d.readString, bw: b.h.writeString },
                count_authed_computers: {
                  n: 5,
                  br: b.d.readInt32,
                  bw: b.h.writeInt32,
                },
                account_flags: {
                  n: 7,
                  br: b.d.readUint32,
                  bw: b.h.writeUint32,
                },
                facebook_id: {
                  n: 8,
                  br: b.d.readUint64String,
                  bw: b.h.writeUint64String,
                },
                facebook_name: {
                  n: 9,
                  br: b.d.readString,
                  bw: b.h.writeString,
                },
                steamguard_notify_newmachines: {
                  n: 14,
                  br: b.d.readBool,
                  bw: b.h.writeBool,
                },
                steamguard_machine_name_user_chosen: {
                  n: 15,
                  br: b.d.readString,
                  bw: b.h.writeString,
                },
                is_phone_verified: {
                  n: 16,
                  br: b.d.readBool,
                  bw: b.h.writeBool,
                },
                two_factor_state: {
                  n: 17,
                  br: b.d.readUint32,
                  bw: b.h.writeUint32,
                },
                is_phone_identifying: {
                  n: 18,
                  br: b.d.readBool,
                  bw: b.h.writeBool,
                },
                is_phone_needing_reverify: {
                  n: 19,
                  br: b.d.readBool,
                  bw: b.h.writeBool,
                },
              },
            }),
          M.sm_m
        );
      }
      static MBF() {
        return M.sm_mbf || (M.sm_mbf = b.e(M.M())), M.sm_mbf;
      }
      toObject(e = !1) {
        return M.toObject(e, this);
      }
      static toObject(e, t) {
        return b.g(M.M(), e, t);
      }
      static fromObject(e) {
        return b.c(M.M(), e);
      }
      static deserializeBinary(e) {
        let t = new s.BinaryReader(e),
          r = new M();
        return M.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return b.b(M.MBF(), e, t);
      }
      serializeBinary() {
        var e = new s.BinaryWriter();
        return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        b.f(M.M(), e, t);
      }
      serializeBase64String() {
        var e = new s.BinaryWriter();
        return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientAccountInfo";
      }
    }
    s.Message;
    const S = s.Message;
    class v extends S {
      constructor(e = null) {
        super(),
          v.prototype.server_types_available || b.a(v.M()),
          S.initialize(this, e, 0, -1, [1], null);
      }
      static M() {
        return (
          v.sm_m ||
            (v.sm_m = {
              proto: v,
              fields: {
                server_types_available: { n: 1, c: C, r: !0, q: !0 },
                server_type_for_auth_services: {
                  n: 2,
                  br: b.d.readUint32,
                  bw: b.h.writeUint32,
                },
              },
            }),
          v.sm_m
        );
      }
      static MBF() {
        return v.sm_mbf || (v.sm_mbf = b.e(v.M())), v.sm_mbf;
      }
      toObject(e = !1) {
        return v.toObject(e, this);
      }
      static toObject(e, t) {
        return b.g(v.M(), e, t);
      }
      static fromObject(e) {
        return b.c(v.M(), e);
      }
      static deserializeBinary(e) {
        let t = new s.BinaryReader(e),
          r = new v();
        return v.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return b.b(v.MBF(), e, t);
      }
      serializeBinary() {
        var e = new s.BinaryWriter();
        return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        b.f(v.M(), e, t);
      }
      serializeBase64String() {
        var e = new s.BinaryWriter();
        return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientServersAvailable";
      }
    }
    class C extends S {
      constructor(e = null) {
        super(),
          C.prototype.server || b.a(C.M()),
          S.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          C.sm_m ||
            (C.sm_m = {
              proto: C,
              fields: {
                server: { n: 1, br: b.d.readUint32, bw: b.h.writeUint32 },
                changed: { n: 2, br: b.d.readBool, bw: b.h.writeBool },
              },
            }),
          C.sm_m
        );
      }
      static MBF() {
        return C.sm_mbf || (C.sm_mbf = b.e(C.M())), C.sm_mbf;
      }
      toObject(e = !1) {
        return C.toObject(e, this);
      }
      static toObject(e, t) {
        return b.g(C.M(), e, t);
      }
      static fromObject(e) {
        return b.c(C.M(), e);
      }
      static deserializeBinary(e) {
        let t = new s.BinaryReader(e),
          r = new C();
        return C.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return b.b(C.MBF(), e, t);
      }
      serializeBinary() {
        var e = new s.BinaryWriter();
        return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        b.f(C.M(), e, t);
      }
      serializeBase64String() {
        var e = new s.BinaryWriter();
        return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CMsgClientServersAvailable_Server_Types_Available";
      }
    }
    var k = r("qiKp"),
      E = r("r64O");
    r("E4Op");
    class x {
      constructor(e = !1) {
        (this.m_bRunOnce = !1),
          (this.m_ClientConnectionCallbacks = new k.a()),
          (this.m_mapServerTypeCallbacks = new Map()),
          (this.m_bRunOnce = e);
      }
      RunCallbacks(e, ...t) {
        void 0 === e
          ? (this.m_ClientConnectionCallbacks.Dispatch(...t),
            this.m_bRunOnce &&
              this.m_ClientConnectionCallbacks.ClearAllCallbacks())
          : this.m_mapServerTypeCallbacks.has(e) &&
            (this.m_mapServerTypeCallbacks.get(e).Dispatch(...t),
            this.m_bRunOnce && this.m_mapServerTypeCallbacks.delete(e));
      }
      RunAllCallbacks(e, ...t) {
        this.RunCallbacks(void 0, ...t),
          e.forEach((e) => this.RunCallbacks(e, ...t));
      }
      AddCallback(e, t) {
        let r = this.m_ClientConnectionCallbacks;
        return (
          void 0 !== t &&
            (this.m_mapServerTypeCallbacks.has(t) ||
              this.m_mapServerTypeCallbacks.set(t, new k.a()),
            (r = this.m_mapServerTypeCallbacks.get(t))),
          r.Register(e)
        );
      }
    }
    function z(e, t) {
      return () => {
        try {
          e();
        } catch (e) {
          console.error(`Error in ${t} callback:`, e);
        }
      };
    }
    class R {
      constructor() {
        (this.m_steamid = new l.a()),
          (this.m_bLoggedOn = !1),
          (this.m_bCompletedInitialConnect = !1),
          (this.m_unAccountFlags = 0),
          (this.m_strIPCountry = ""),
          (this.m_strPersonaName = ""),
          (this.m_bConnected = !1),
          (this.m_bConnectionFailed = !1),
          (this.m_setConnectedServers = new Set()),
          (this.m_callbacksOnConnectOneTime = new x(!0)),
          (this.m_callbacksOnConnect = new x()),
          (this.m_callbacksOnDisconnect = new x()),
          (this.m_bForceDisconnect = !1),
          (this.m_bPerformedInitialClockAdjustment = !1),
          (this.m_nWallClockDriftMS = 0),
          (this.m_nPerfClockServerMSOffset =
            new Date().getTime() - performance.now()),
          (this.ClientServersAvailableHandler = Object(i.a)(5501, v, (e) => {
            let t = new Set(this.m_setConnectedServers);
            for (let r of e.Body().server_types_available()) {
              let e = r.server();
              void 0 !== e &&
                (this.m_bLoggedOn &&
                  ((this.m_setConnectedServers.has(e) && !r.changed()) ||
                    (r.changed() &&
                      this.m_setConnectedServers.has(e) &&
                      this.m_callbacksOnDisconnect.RunCallbacks(e, !1),
                    this.m_callbacksOnConnect.RunCallbacks(e),
                    this.m_callbacksOnConnectOneTime.RunCallbacks(e))),
                this.m_setConnectedServers.add(e),
                t.delete(e));
            }
            t.forEach((e) => {
              this.m_setConnectedServers.delete(e),
                this.m_bLoggedOn &&
                  this.m_callbacksOnDisconnect.RunCallbacks(e, !1);
            });
          })),
          (this.m_ServiceTransport = {
            SendMsg: (e, t, r) => (
              t.SetEMsg(151),
              t.Hdr().set_target_job_name(e),
              this.SendMsgAndAwaitResponse(t, r)
            ),
            SendNotification: (e, t) => (
              t.SetEMsg(151), t.Hdr().set_target_job_name(e), this.Send(t)
            ),
          }),
          window &&
            window.addEventListener &&
            window.addEventListener("unload", (e) => {
              this.ForceDisconnect();
            });
      }
      get steamid() {
        return this.m_steamid;
      }
      get logged_on() {
        return this.m_bLoggedOn;
      }
      get persona_name() {
        return this.m_strPersonaName;
      }
      BDisconnected() {
        return !this.logged_on && this.m_steamid.BIsValid();
      }
      BConnectedToServer(e) {
        return void 0 === e
          ? this.m_bLoggedOn
          : this.m_setConnectedServers.has(e);
      }
      get has_completed_initial_connect() {
        return this.m_bCompletedInitialConnect;
      }
      get account_flags() {
        return this.m_unAccountFlags;
      }
      GetServiceTransport() {
        return this.m_ServiceTransport;
      }
      GetAnonymousServiceTransport() {
        return this.m_ServiceTransport;
      }
      RunWhenLoggedOn(e, t) {
        let r = z(e, "RunWhenLoggedOn");
        this.BConnectedToServer(t)
          ? r()
          : this.m_callbacksOnConnectOneTime.AddCallback(r, t);
      }
      WaitUntilLoggedOn() {
        return new Promise((e) => this.RunWhenLoggedOn(e));
      }
      AddOnLogonCallback(e, t) {
        let r = z(e, "AddOnLogonCallback");
        return (
          this.BConnectedToServer(t) && r(),
          this.m_callbacksOnConnect.AddCallback(r, t)
        );
      }
      AddOnDisconnectCallback(e, t) {
        let r = (function (e, t) {
          return (r) => {
            try {
              e(r);
            } catch (e) {
              console.error(`Error in ${t} callback:`, e);
            }
          };
        })(e, "AddOnDisconnectCallback");
        this.m_callbacksOnDisconnect.AddCallback(r, t);
      }
      ForceDisconnect() {
        (this.m_bForceDisconnect = !0), this.Disconnect();
      }
      Send(e) {
        return (
          !!this.BIsConnected() &&
          (this.DEBUG_LogCMInterfaceActivity(e, "send"), this.SendInternal(e))
        );
      }
      BInternalShouldDispatchMessage(e) {
        return !0;
      }
      ResolveAwaitWithTransportError(e, t, r, n) {
        let i = c.b.Init(t);
        i.Hdr().set_eresult(2),
          i.Hdr().set_transport_error(r),
          n && i.Hdr().set_error_message(n),
          e(i);
      }
      DispatchMessage(e) {
        try {
          if (!this.BInternalShouldDispatchMessage(e)) return;
          if (e.BIsValid()) {
            let t = (t) => {
              t.Hdr().set_jobid_target(e.Hdr().jobid_source()), this.Send(t);
            };
            i.d.DispatchMsgToHandlers(e, t) ||
              this.DEBUG_LogCMInterfaceActivity(e, "receive", !1);
          } else
            console.error(
              "CMInterface RECV could not parse message of type " +
                Object(d.a)(e.GetEMsg()) +
                " " +
                e.GetEMsg()
            );
        } catch (t) {
          console.error(
            `CMInterface RECV exception thrown while processing message of type ${Object(
              d.a
            )(e.GetEMsg())}`,
            t
          ),
            e.DEBUG_LogToConsole();
        }
      }
      BIsConnected() {
        return this.m_bConnected;
      }
      OnConnect() {
        (this.m_bConnected = !0),
          (this.m_bConnectionFailed = !1),
          (this.m_bForceDisconnect = !1);
      }
      OnLoggedOn() {
        (this.m_bCompletedInitialConnect = !0),
          this.InternalAdjustClock(),
          this.m_callbacksOnConnect.RunAllCallbacks(this.m_setConnectedServers),
          this.m_callbacksOnConnectOneTime.RunAllCallbacks(
            this.m_setConnectedServers
          );
      }
      OnDisconnect() {
        (this.m_bConnected = !1),
          (this.m_bConnectionFailed = !0),
          (this.m_onConnect = void 0),
          (this.m_bLoggedOn = !1),
          (this.m_unAccountFlags = 0),
          (this.m_strIPCountry = ""),
          this.m_callbacksOnDisconnect.RunAllCallbacks(
            this.m_setConnectedServers,
            this.m_bForceDisconnect
          ),
          this.m_setConnectedServers.clear();
      }
      DEBUG_LogCMInterfaceActivity(e, t, r = !0) {
        0;
      }
      DEBUG_LogMessage(e, ...t) {
        0;
      }
      InternalAdjustClock() {
        return Object(n.a)(this, void 0, void 0, function* () {
          let e = c.b.Init(w, 9802);
          return (
            e
              .Body()
              .set_client_request_timestamp(
                Math.floor(performance.now()).toString()
              ),
            this.SendMsgAndAwaitResponse(e, y).then((e) => {
              let t = performance.now(),
                r = new Date(),
                n = parseInt(e.Body().client_request_timestamp()),
                i = parseInt(e.Body().server_timestamp_ms()) - ((t - n) >> 1);
              return (
                i && !isNaN(i) && t && !isNaN(t)
                  ? ((this.m_bPerformedInitialClockAdjustment = !0),
                    (this.m_nPerfClockServerMSOffset = i - t),
                    (this.m_nWallClockDriftMS = r.getTime() - i))
                  : Object(E.a)(
                      !1,
                      `Error computing server time, server echo: ${n} server time ${i}`
                    ),
                !0
              );
            })
          );
        });
      }
      BPerformedInitialClockAdjustment() {
        return this.m_bPerformedInitialClockAdjustment;
      }
      GetServerTimeMS() {
        return performance.now() + this.m_nPerfClockServerMSOffset;
      }
      GetServerRTime32() {
        return Math.floor(
          (performance.now() + this.m_nPerfClockServerMSOffset) / 1e3
        );
      }
      RTime32ToDate(e) {
        return new Date(1e3 * e + this.m_nWallClockDriftMS);
      }
    }
    Object(n.b)([h.C], R.prototype, "m_steamid", void 0),
      Object(n.b)([h.C], R.prototype, "m_bLoggedOn", void 0),
      Object(n.b)([h.C], R.prototype, "m_bCompletedInitialConnect", void 0),
      Object(n.b)([h.C], R.prototype, "m_unAccountFlags", void 0),
      Object(n.b)([h.C], R.prototype, "m_strIPCountry", void 0),
      Object(n.b)([h.C], R.prototype, "m_strPersonaName", void 0),
      Object(n.b)([h.C], R.prototype, "m_bConnected", void 0),
      Object(n.b)(
        [h.C],
        R.prototype,
        "m_bPerformedInitialClockAdjustment",
        void 0
      ),
      Object(n.b)([h.k], R.prototype, "DispatchMessage", null),
      Object(n.b)([h.k], R.prototype, "OnDisconnect", null);
    class L extends R {
      constructor() {
        super(...arguments),
          (this.m_setEMsgHandlers = new Set()),
          (this.m_setServiceMethodHandlers = new Set());
      }
      SendMsgAndAwaitResponse(e, t) {
        return new Promise((r, n) => {
          if (this.m_hSharedConnection) {
            this.DEBUG_LogCMInterfaceActivity(e, "send");
            let n = a.fromByteArray(e.Serialize());
            void 0 !==
            SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse
              ? SteamClient.SharedConnection.SendMsgAndAwaitBinaryResponse(
                  this.m_hSharedConnection,
                  n
                )
                  .then((e) => {
                    let n = new u.b(e),
                      i = c.b.InitFromPacket(t, n);
                    this.DEBUG_LogCMInterfaceActivity(i, "receive", !0),
                      i.BIsValid()
                        ? r(i)
                        : this.ResolveAwaitWithTransportError(
                            r,
                            t,
                            102,
                            "Failed to parse response from server"
                          );
                  })
                  .catch((e) => {
                    this.ResolveAwaitWithTransportError(r, t, 2, e);
                  })
              : SteamClient.SharedConnection.SendMsgAndAwaitResponse(
                  this.m_hSharedConnection,
                  n
                )
                  .then((e) => {
                    let n = new u.b(a.toByteArray(e)),
                      i = c.b.InitFromPacket(t, n);
                    this.DEBUG_LogCMInterfaceActivity(i, "receive", !0),
                      i.BIsValid()
                        ? r(i)
                        : this.ResolveAwaitWithTransportError(
                            r,
                            t,
                            102,
                            "Failed to parse response from server"
                          );
                  })
                  .catch((e) => {
                    this.ResolveAwaitWithTransportError(r, t, 2, e);
                  });
          }
        });
      }
      SendInternal(e) {
        let t = a.fromByteArray(e.Serialize());
        return (
          SteamClient.SharedConnection.SendMsg(this.m_hSharedConnection, t), !0
        );
      }
      OnMsgRecvd(e) {
        let t = new u.b(e),
          r = c.a.InitHeaderFromPacket(t);
        this.DispatchMessage(r);
      }
      OnLogonInfoChanged(e) {
        this.DEBUG_LogMessage("Login info from client: ", e),
          (this.m_bLoggedOn = e.bLoggedOn),
          (o.c.EUNIVERSE = e.eUniverse),
          (o.c.MEDIA_CDN_COMMUNITY_URL = e.strCommunityImagesURL),
          e.strSteamid
            ? ((this.m_steamid = new l.a(e.strSteamid)),
              (this.m_strPersonaName = e.strPersonaName),
              (o.g.logged_in = e.bLoggedOn),
              (o.g.steamid = e.strSteamid),
              (o.g.accountid = this.m_steamid.GetAccountID()),
              (o.g.account_name = e.strAccountName))
            : 0 != this.m_steamid.GetAccountID() &&
              (this.m_steamid = new l.a()),
          this.m_bLoggedOn
            ? (this.m_bConnected || this.OnConnect(), this.OnLoggedOn())
            : this.OnDisconnect();
      }
      Connect() {
        return this.m_hSharedConnection
          ? Promise.resolve()
          : (this.m_onConnect = new Promise((e, t) => {
              SteamClient.SharedConnection.AllocateSharedConnection()
                .then((r) => {
                  r
                    ? (this.OnSharedConnectionEstablished(r),
                      this.DEBUG_LogMessage(
                        "obtained handle ",
                        this.m_hSharedConnection
                      ),
                      this.OnConnect(),
                      e())
                    : t();
                })
                .catch(t);
            }));
      }
      OnSharedConnectionEstablished(e) {
        (this.m_hSharedConnection = e),
          this.m_setEMsgHandlers.clear(),
          this.m_setServiceMethodHandlers.clear(),
          this.m_hEMsgRegistrationObserver &&
            this.m_hEMsgRegistrationObserver(),
          (this.m_hEMsgRegistrationObserver = Object(h.l)(() => {
            if (this.m_hSharedConnection) {
              for (let e of i.d.emsg_list)
                this.m_setEMsgHandlers.has(e) ||
                  (this.m_setEMsgHandlers.add(e),
                  SteamClient.SharedConnection.SubscribeToEMsg(
                    this.m_hSharedConnection,
                    e
                  ));
              for (let e of i.d.servicemethod_list)
                this.m_setServiceMethodHandlers.has(e) ||
                  (this.m_setServiceMethodHandlers.add(e),
                  SteamClient.SharedConnection.SubscribeToClientServiceMethod(
                    this.m_hSharedConnection,
                    e
                  ));
            }
          }));
        let t = !1;
        SteamClient.SharedConnection.RegisterOnLogonInfoChanged(
          this.m_hSharedConnection,
          (e) => {
            this.OnLogonInfoChanged(e),
              t ||
                ((t = !0),
                void 0 !==
                SteamClient.SharedConnection.RegisterOnBinaryMessageReceived
                  ? SteamClient.SharedConnection.RegisterOnBinaryMessageReceived(
                      this.m_hSharedConnection,
                      this.OnMsgRecvd.bind(this)
                    )
                  : SteamClient.SharedConnection.RegisterOnMessageReceived(
                      this.m_hSharedConnection,
                      (e) => this.OnMsgRecvd(a.toByteArray(e))
                    ));
          }
        );
      }
      OnConnect() {
        super.OnConnect();
      }
      Disconnect() {
        if (this.m_hSharedConnection) {
          let e = c.b.Init(m.a, 716);
          e.Body().set_persona_state(0),
            e.Body().set_persona_set_by_user(!1),
            this.Send(e),
            SteamClient.SharedConnection.Close(this.m_hSharedConnection),
            this.OnSharedConnectionClosed();
        }
      }
      OnSharedConnectionClosed() {
        super.OnDisconnect(),
          (this.m_hSharedConnection = void 0),
          this.m_setEMsgHandlers.clear(),
          this.m_hEMsgRegistrationObserver &&
            (this.m_hEMsgRegistrationObserver(),
            (this.m_hEMsgRegistrationObserver = void 0));
      }
      SendHeartbeat() {}
      ClearHeartbeatInterval() {}
      ResetHeartbeatInterval() {}
    }
    Object(n.b)([h.k], L.prototype, "OnLogonInfoChanged", null);
    var O = r("16wW"),
      T = r("vDqi"),
      F = r.n(T);
    r("75qM");
    class I {
      constructor() {
        this.m_CMList = { rgCMList: [], rtLastLoaded: 0 };
      }
      Init(e) {
        (this.m_Storage = e), (this.m_InitPromise = this.LoadFromCache());
      }
      LoadFromCache() {
        return Object(n.a)(this, void 0, void 0, function* () {
          if (this.m_InitPromise) return this.m_InitPromise;
          const e = yield this.m_Storage.GetObject(this.GetLocalStorageKey());
          return (t = e) &&
            "object" == typeof t &&
            Array.isArray(t.rgCMList) &&
            "number" == typeof t.rtLastLoaded
            ? ((this.m_CMList = e), this.m_CMList)
            : ((this.m_CMList = { rgCMList: [], rtLastLoaded: 0 }),
              this.WriteCMListToLocalStorage(),
              this.m_CMList);
          var t;
        });
      }
      GetBestCMsToConnectTo() {
        return Object(n.a)(this, void 0, void 0, function* () {
          try {
            let e = yield this.LoadFromCache();
            (!e.rgCMList.length ||
              Date.now() / 1e3 - e.rtLastLoaded > 604800) &&
              ((this.m_CMList = yield this.GetCMListFromWebAPI()),
              this.WriteCMListToLocalStorage());
          } catch (e) {
            console.error(
              `There was a problem loading CM list. Attempting to use stale data. ${e}`
            );
          }
          return this.PingCMs();
        });
      }
      RecordCMDisconnected(e) {
        (e.nConnectFailures = (e.nConnectFailures || 0) + 1),
          (e.msPing = Number.MAX_SAFE_INTEGER),
          (e.nCMLoad = Number.MAX_SAFE_INTEGER),
          this.WriteCMListToLocalStorage();
      }
      BuildCMWebSocketURL(e) {
        return "wss://" + this.FixDevHost(e) + "/cmsocket/";
      }
      FixDevHost(e) {
        if (
          4 == o.c.EUNIVERSE &&
          "dev" == o.c.WEB_UNIVERSE &&
          e.match(/^127\.0\.0\.1/)
        ) {
          let t = o.c.WEBAPI_BASE_URL.match(/https?:\/\/([^\/:]*)/);
          if (t && t[1]) return e.replace(/^127\.0\.0\.1/, t[1]);
        }
        return e;
      }
      GetLocalStorageKey() {
        return "CCMList_" + o.c.EUNIVERSE;
      }
      WriteCMListToLocalStorage() {
        this.m_Storage.StoreObject(this.GetLocalStorageKey(), this.m_CMList);
      }
      GetCMListFromWebAPI() {
        return Object(n.a)(this, void 0, void 0, function* () {
          try {
            const r = yield ((e = W),
              (t = 1e4),
              () =>
                new Promise((r, n) => {
                  let i = !1;
                  const a = window.setTimeout(() => {
                    (i = !0), n(new Error("Timed out"));
                  }, t);
                  e().then(
                    (e) => {
                      i || (clearTimeout(a), r(e));
                    },
                    (e) => {
                      i || (clearTimeout(a), n(e));
                    }
                  );
                }))(),
              n = this.m_CMList.rgCMList.reduce(
                (e, t) =>
                  Object.assign(Object.assign({}, e), { [t.strHost]: t }),
                {}
              );
            return {
              rgCMList: r.map((e) =>
                Object.assign(Object.assign({}, n[e.strHost] || {}), e)
              ),
              rtLastLoaded: new Date().getTime() / 1e3,
            };
          } catch (e) {
            throw new Error("Failed to load CM List from webapi");
          }
          var e, t;
        });
      }
      PingCMs() {
        let e = new Date().getTime() / 1e3 - 18e3,
          t = [];
        const r = {};
        for (const n of this.m_CMList.rgCMList) {
          const i = U(n),
            a = !i || n.rtLastCheck < e;
          a && t.length < 20 && t.push(n),
            (a && !o.c.IN_MOBILE) || (i && i < 1e4 && (r[n.strHost] = n));
        }
        t.length;
        let n = !1;
        return new Promise((e, i) => {
          let a,
            s,
            c = "immediate",
            l = (t) => {
              if (
                (Object(E.a)(!n, "fnPingingComplete called a second time"), !n)
              ) {
                const r = Object.keys(t)
                  .map((e) => t[e])
                  .sort((e, t) => U(e) - U(t));
                if (
                  (r.length,
                  r.length && r[0].strHost,
                  (n = !0),
                  this.WriteCMListToLocalStorage(),
                  a && window.clearTimeout(a),
                  s && window.clearTimeout(s),
                  r.length)
                )
                  return e(r);
                const o = this.GetCMWithFewestDisconnects();
                if (o) return e([o]);
                i("No CMs available");
              }
            };
          (0 === t.length ||
            Object.keys(r).some((e) => this.BCMOkToUse(r[e], c)) ||
            (o.c.IN_MOBILE && Object.keys(r).length)) &&
            (Object.keys(r).length && o.c.IN_MOBILE, l(r)),
            n ||
              ((a = window.setTimeout(() => {
                (c = "timeout"),
                  !n &&
                    Object.keys(r).some((e) => this.BCMOkToUse(r[e], c)) &&
                    l(r);
              }, 400)),
              (s = window.setTimeout(() => {
                (c = "seriouslytimeout"), l(r);
              }, 12e3)));
          let u,
            d = 0,
            m = 0,
            h = (e) => {
              !n && this.BCMOkToUse(e, c)
                ? l({ [e.strHost]: e })
                : (r[e.strHost] = e),
                (!n && u()) ||
                  (0 == --m &&
                    (n
                      ? this.WriteCMListToLocalStorage()
                      : this.BCMOkToUse(e, "seriouslytimeout")
                      ? l({ [e.strHost]: e })
                      : ((r[e.strHost] = e), l(r))));
            };
          u = () => {
            if (d < t.length) {
              let e = t[d++];
              return (
                this.PingCM(e).then(() => {
                  h(e);
                }),
                !0
              );
            }
            return !1;
          };
          for (let e = 0; e < 4; e++) u() && m++;
        });
      }
      GetCMWithFewestDisconnects() {
        if (!this.m_CMList.rgCMList.length) return;
        let e = this.m_CMList.rgCMList[0],
          t = 1;
        for (; e.nConnectFailures > 0 && t < this.m_CMList.rgCMList.length; ) {
          let r = this.m_CMList.rgCMList[t++];
          (!r.nConnectFailures || r.nConnectFailures < e.nConnectFailures) &&
            (e = r);
        }
        return e && this.FixDevHost(e.strHost), e;
      }
      BCMOkToUse(e, t) {
        if (!e) return !1;
        let r = e.msPing + e.nCMLoad;
        return (
          (r < 80 && e.msPing < 60) ||
          ("immediate" !== t &&
            ((r < 140 && e.msPing < 100) ||
              ("timeout" !== t && r < 350 && e.msPing < 275)))
        );
      }
      PingCM(e) {
        return Object(n.a)(this, void 0, void 0, function* () {
          let t = "https://" + this.FixDevHost(e.strHost) + "/cmping/",
            r = performance.now();
          const n = F.a.CancelToken.source();
          let i = window.setTimeout(() => {
            e.strHost, n.cancel();
          }, 1e3);
          try {
            let a = yield F.a.head(t, { cancelToken: n.token });
            e.strHost, window.clearTimeout(i);
            let s = performance.now() - r,
              o = a.headers["x-steam-cmload"]
                ? parseInt(a.headers["x-steam-cmload"])
                : void 0;
            e.strHost, (e.msPing = s), (e.nCMLoad = o);
          } catch (t) {
            F.a.isCancel(t) ? e.strHost : window.clearTimeout(i),
              (e.msPing = 1e4),
              (e.nCMLoad = 0);
          }
          return (e.rtLastCheck = new Date().getTime() / 1e3), e.msPing;
        });
      }
    }
    function W() {
      return Object(n.a)(this, void 0, void 0, function* () {
        const e =
            o.c.WEBAPI_BASE_URL + "ISteamDirectory/GetCMList/v1/?cellid=0",
          t = (yield F.a.get(e)).data,
          r = (t && t.response && t.response.serverlist_websockets) || [];
        return r.length, r.map((e, t) => ({ strHost: e, nPriority: t }));
      });
    }
    function U(e) {
      return (e.msPing || 0) + (e.nCMLoad || 0);
    }
    Object(n.b)(
      [h.k],
      class extends R {
        constructor(e) {
          super(),
            (this.m_Session = {
              m_bWaitingForLogonResponse: !1,
              m_nSessionID: 0,
              m_eResultLogonSuccess: 2,
              m_nSessionIDLast: 0,
              m_nClientInstanceID: "0",
            }),
            (this.m_bLoadingCMList = !1),
            (this.m_iCallSeq = 1),
            (this.m_mapWaitingCallbacks = new Map()),
            (this.m_CMList = new I()),
            (this.LogOnResponseHandler = Object(i.a)(751, B, (e) => {
              let t = e.Body().eresult();
              (this.m_Session.m_bWaitingForLogonResponse = !1),
                (this.m_Session.m_eResultLogonSuccess = t),
                1 == t
                  ? ((this.m_steamid = new l.a(
                      e.Body().client_supplied_steamid()
                    )),
                    (this.m_bLoggedOn = !0),
                    (this.m_Session.m_nSessionID = e.Hdr().client_sessionid()),
                    (this.m_Session.m_nSessionIDLast = this.m_Session.m_nSessionID),
                    (this.m_Session.m_nClientInstanceID = e
                      .Body()
                      .client_instance_id()),
                    this.OnLoggedOn())
                  : (console.warn(
                      "Received error code from LogOnResponse, disconnecting. EResult=",
                      e.Body().eresult()
                    ),
                    48 == t &&
                      this.m_CMList.RecordCMDisconnected(this.m_SocketCMHost),
                    this.Disconnect());
            })),
            (this.ClientAccountInfoHandler = Object(i.a)(768, M, (e) => {
              (this.m_unAccountFlags = e.Body().account_flags() || 0),
                (this.m_strIPCountry = e.Body().ip_country() || ""),
                (this.m_strPersonaName = e.Body().persona_name() || "");
            })),
            this.m_CMList.Init(e);
        }
        BIsConnected() {
          return this.m_Socket && this.m_Socket.readyState == WebSocket.OPEN;
        }
        Connect() {
          return (
            this.m_onConnect ||
              (console.log("Loading CM List"),
              (this.m_bConnected = !1),
              (this.m_bLoggedOn = !1),
              (this.m_bForceDisconnect = !1),
              (this.m_Session.m_bWaitingForLogonResponse = !0),
              (this.m_bLoadingCMList = !0),
              (this.m_onConnect = this.m_CMList
                .GetBestCMsToConnectTo()
                .then(
                  (e) => (
                    (this.m_bLoadingCMList = !1),
                    new Promise((t, r) => {
                      let n = 0,
                        i = !1;
                      e.slice(0, 3).forEach((e, a, s) =>
                        this.AttemptHostConnect(e).then(
                          (r) => {
                            i
                              ? r.close(4e3)
                              : ((i = !0),
                                (this.m_Socket = r),
                                (this.m_SocketCMHost = e),
                                (this.m_bConnected = !0),
                                this.OnConnect(),
                                t());
                          },
                          () => {
                            console.log(
                              `Failed to connect to CM ${a + 1} of ${
                                s.length
                              }: ${e.strHost}`
                            ),
                              n++,
                              n === s.length &&
                                (console.log(
                                  `Failed to connect to all ${s.length} best CMs`
                                ),
                                r());
                          }
                        )
                      );
                    })
                  )
                )
                .catch((e) => {
                  throw ((this.m_bLoadingCMList = !1), this.OnDisconnect(), e);
                }))),
            this.m_onConnect
          );
        }
        AttemptHostConnect(e) {
          console.log(`Attempting to connect to host ${e.strHost}`);
          let t = new WebSocket(this.m_CMList.BuildCMWebSocketURL(e.strHost));
          return (
            (t.binaryType = "arraybuffer"),
            (t.onmessage = (e) => {
              let t = new u.b(e.data),
                r = c.a.InitHeaderFromPacket(t);
              1 == r.GetEMsg()
                ? this.DecodeAndDispatchMultiMsg(c.b.InitFromMsg(g.e, r))
                : this.DispatchMessage(r);
            }),
            new Promise((r, n) => {
              let i = !1;
              const a = window.setTimeout(() => {
                console.warn(
                  `Socket connection timed out after 3000ms: ${e.strHost}`
                ),
                  (i = !0),
                  t.close(4e3),
                  this.m_CMList.RecordCMDisconnected(e),
                  n();
              }, 3e3);
              (t.onopen = () => {
                console.log(`Connected socket to host ${e.strHost}`),
                  Object(E.a)(
                    !i,
                    "Socket connection was opened after timing out."
                  ),
                  i || window.clearTimeout(a),
                  r(t);
              }),
                (t.onerror = (t) => {
                  i ||
                    (window.clearTimeout(a),
                    Object(E.a)(!1, "Socket connect failed", t),
                    this.m_CMList.RecordCMDisconnected(e),
                    n());
                });
            })
          );
        }
        get session() {
          return this.m_Session;
        }
        ClearHeartbeatInterval() {
          this.m_iIntervalHeartbeat &&
            (window.clearInterval(this.m_iIntervalHeartbeat),
            (this.m_iIntervalHeartbeat = void 0));
        }
        ResetHeartbeatInterval() {
          this.ClearHeartbeatInterval(),
            (this.m_iIntervalHeartbeat = window.setInterval(
              () => this.SendHeartbeat(),
              27e3
            ));
        }
        SendHeartbeat() {
          let e = c.b.Init(p, 703);
          this.Send(e);
        }
        OnConnect() {
          super.OnConnect(),
            this.m_Socket &&
              ((this.m_Socket.onerror = (e) => {}),
              this.ResetHeartbeatInterval(),
              (this.m_Socket.onclose = (e) => {
                this.OnDisconnect();
              }));
        }
        Disconnect() {
          this.m_Socket && this.m_Socket.close();
        }
        OnDisconnect() {
          (this.m_Socket = void 0),
            (this.m_SocketCMHost = void 0),
            (this.m_onConnect = void 0),
            this.ClearHeartbeatInterval(),
            super.OnDisconnect();
        }
        SendMsgAndAwaitResponse(e, t) {
          return new Promise((r, n) => {
            let i = this.m_iCallSeq++;
            e.Hdr().set_jobid_source("" + i),
              this.Send(e)
                ? this.m_mapWaitingCallbacks.set(i, {
                    iSeq: i,
                    msgClass: t,
                    fnCallback: r,
                  })
                : this.ResolveAwaitWithTransportError(
                    r,
                    t,
                    2,
                    "Web socket not connected"
                  );
          });
        }
        SendInternal(e) {
          return (
            !!this.m_Socket &&
            (this.m_steamid.BIsValid() &&
              e.Hdr().set_steamid(this.m_steamid.ConvertTo64BitString()),
            this.m_Session.m_nSessionID &&
              e.Hdr().set_client_sessionid(this.m_Session.m_nSessionID),
            this.m_Socket.send(e.Serialize()),
            703 != e.GetEMsg() && this.ResetHeartbeatInterval(),
            !0)
          );
        }
        BInternalShouldDispatchMessage(e) {
          if (
            e.BIsValid() &&
            e.Hdr().jobid_target() &&
            e.Hdr().jobid_target() !== _.o
          ) {
            let t = parseInt(e.Hdr().jobid_target());
            if (this.m_mapWaitingCallbacks.has(t)) {
              let r = this.m_mapWaitingCallbacks.get(t);
              if (r) {
                let n = c.b.InitFromMsg(r.msgClass, e);
                this.DEBUG_LogCMInterfaceActivity(n, "receive", !0),
                  n.BIsValid()
                    ? r.fnCallback(n)
                    : this.ResolveAwaitWithTransportError(
                        r.fnCallback,
                        r.msgClass,
                        102,
                        "Failed to parse response from server"
                      ),
                  this.m_mapWaitingCallbacks.delete(t);
              }
              return !1;
            }
            this.DEBUG_LogCMInterfaceActivity(e, "receive", !1);
          }
          return !0;
        }
        DecodeAndDispatchMultiMsg(e) {
          let t = e.Body().message_body();
          if (!t) return;
          e.Body().size_unzipped() && (t = O.inflate(t));
          let r = new u.b(t);
          for (; r.GetCountBytesRemaining() > 0; ) {
            let e = r.GetUint32(),
              t = c.a.InitHeaderFromPacket(
                new u.b(r.GetPacket(), r.TellGet(), e)
              );
            this.DispatchMessage(t), r.SeekGetCurrent(e);
          }
        }
      }.prototype,
      "DecodeAndDispatchMultiMsg",
      null
    );
  },
  UKyN: function (e, t) {
    e.exports = "/images/deck_boot_transition.png";
  },
  XxJJ: function (e, t, r) {
    "use strict";
    function n(e, t, r) {
      return {
        get() {
          let e = r.value.bind(this);
          return (
            this.hasOwnProperty(t) ||
              Object.defineProperty(this, t, { value: e }),
            e
          );
        },
      };
    }
    r.d(t, "a", function () {
      return n;
    });
  },
  YyVH: function (e, t, r) {
    "use strict";
    function n(e, t) {
      return (
        (e = Math.ceil(e)),
        (t = Math.floor(t)),
        Math.floor(Math.random() * (t - e + 1)) + e
      );
    }
    function i(e, t, r) {
      return null == e || isNaN(e) ? e : Math.max(t, Math.min(r, e));
    }
    function a(e, t, r, n, i) {
      return n + ((i - n) * (e - t)) / (r - t);
    }
    r.d(t, "b", function () {
      return n;
    }),
      r.d(t, "a", function () {
        return i;
      }),
      r.d(t, "c", function () {
        return a;
      });
  },
  Z1oF: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return n;
    }),
      r.d(t, "k", function () {
        return o;
      }),
      r.d(t, "g", function () {
        return c;
      }),
      r.d(t, "i", function () {
        return l;
      }),
      r.d(t, "h", function () {
        return d;
      }),
      r.d(t, "j", function () {
        return _;
      }),
      r.d(t, "b", function () {
        return b;
      }),
      r.d(t, "c", function () {
        return g;
      }),
      r.d(t, "e", function () {
        return M;
      }),
      r.d(t, "d", function () {
        return S;
      }),
      r.d(t, "f", function () {
        return C;
      });
    var n,
      i = r("TLQK"),
      a = r("CdLH"),
      s = r("Gp1o");
    function o(e, t, r) {
      let s;
      if ("boolean" == typeof t) {
        s = {
          eSuffix: t ? n.None : n.Ago,
          bForceSingleUnits: r,
          bHighGranularity: !1,
        };
      } else
        s = Object.assign(
          { eSuffix: n.Ago, bForceSingleUnits: !1, bHighGranularity: !1 },
          t
        );
      let o = "#TimeInterval_";
      if (
        (s.eSuffix == n.Ago
          ? (o = "#TimeSince_")
          : s.eSuffix == n.Remaining && (o = "#TimeRemaining_"),
        e >= 2 * a.g.PerYear)
      )
        return Object(i.g)(o + "XYears", Math.floor(e / a.g.PerYear));
      if (e >= a.g.PerYear)
        return (e -= a.g.PerYear) >= 2 * a.g.PerMonth && !s.bForceSingleUnits
          ? Object(i.g)(o + "1YearXMonths", Math.floor(e / a.g.PerMonth))
          : Object(i.g)(o + "1Year");
      if (e >= 2 * a.g.PerMonth)
        return Object(i.g)(o + "XMonths", Math.floor(e / a.g.PerMonth));
      if (e >= 2 * a.g.PerWeek)
        return Object(i.g)(o + "XWeeks", Math.floor(e / a.g.PerWeek));
      if (e >= a.g.PerWeek)
        return Object(i.g)(o + "1Week", Math.floor(e / a.g.PerWeek));
      if (e >= 2 * a.g.PerDay)
        return Object(i.g)(o + "XDays", Math.floor(e / a.g.PerDay));
      if (e >= a.g.PerDay)
        return (e -= a.g.PerDay) >= 2 * a.g.PerHour && !s.bForceSingleUnits
          ? Object(i.g)(o + "1DayXHours", Math.floor(e / a.g.PerHour))
          : Object(i.g)(o + "1Day");
      if (e >= 2 * a.g.PerHour)
        return Object(i.g)(o + "XHours", Math.floor(e / a.g.PerHour));
      if (e >= a.g.PerHour)
        return (e -= a.g.PerHour) >= 2 * a.g.PerMinute && !s.bForceSingleUnits
          ? Object(i.g)(o + "1HourXMinutes", Math.floor(e / a.g.PerMinute))
          : Object(i.g)(o + "1Hour");
      if (e >= 2 * a.g.PerMinute) {
        const t = Math.floor(e / a.g.PerMinute),
          r = e % a.g.PerMinute;
        return s.bHighGranularity && 0 != r
          ? 1 == r
            ? Object(i.g)(o + "XMinutes1Second", t)
            : Object(i.g)(o + "XMinutesXSeconds", t, r)
          : Object(i.g)(o + "XMinutes", t);
      }
      if (e >= a.g.PerMinute) {
        const t = e % a.g.PerMinute;
        return s.bHighGranularity && 0 != t
          ? 1 == t
            ? Object(i.g)(o + "1Minute1Second")
            : Object(i.g)(o + "1MinuteXSeconds", t)
          : Object(i.g)(o + "1Minute");
      }
      return s.bHighGranularity
        ? 1 == e
          ? Object(i.g)(o + "1Second")
          : Object(i.g)(o + "XSeconds", e)
        : Object(i.g)(o + "LessThanAMinute");
    }
    function c(e, t, r) {
      const n = {
        weekday: r ? "long" : "short",
        month: "long",
        day: "numeric",
        year: t ? void 0 : "numeric",
      };
      return new Date(1e3 * e).toLocaleDateString(i.f.GetPreferredLocales(), n);
    }
    function l(e) {
      let t = new Date(1e3 * e);
      const r = t.setHours(0, 0, 0, 0);
      let n = m.get(r);
      if (n) return n;
      return (
        (n = t.toLocaleDateString(i.f.GetPreferredLocales(), {
          year: "numeric",
          month: "short",
          day: "numeric",
        })),
        m.set(r, n),
        n
      );
    }
    !(function (e) {
      (e[(e.None = 0)] = "None"),
        (e[(e.Ago = 1)] = "Ago"),
        (e[(e.Remaining = 2)] = "Remaining");
    })(n || (n = {}));
    const u = new Map();
    function d(e, t) {
      const r = new Date(1e3 * e),
        n = i.f.GetPreferredLocales(),
        a =
          t.bForce24HourClock ||
          (function (e) {
            let t = u.get(e);
            if (!0 === t || !1 === t) return t;
            const r = new Date();
            return (
              r.setHours(15),
              (t =
                r.toLocaleTimeString(e, { hour: "numeric" }) ==
                r.toLocaleTimeString(e, { hour: "numeric", hour12: !1 })),
              u.set(e, t),
              t
            );
          })(n[0]);
      return r.toLocaleTimeString(
        n,
        a
          ? { hour: "numeric", minute: "2-digit", hourCycle: "h23" }
          : { hour: "numeric", minute: "2-digit" }
      );
    }
    const m = new Map(),
      h = new Map();
    function _(e, t, r = !0, n = !0) {
      const a = new Date(),
        o = new Date(1e3 * e);
      if (o.getFullYear() != a.getFullYear()) return l(e);
      n && s.d(new Date().setHours(24, 0, 0, 0) - a.getTime());
      const c = new Date();
      if ((c.setHours(0, 0, 0, 0), r))
        if (o >= c) {
          if ((c.setDate(c.getDate() + 1), o < c))
            return Object(i.g)("#Time_Today");
          if ((c.setDate(c.getDate() + 1), o < c))
            return Object(i.g)("#Time_Tomorrow");
        } else if ((c.setDate(c.getDate() - 1), o >= c))
          return Object(i.g)("#Time_Yesterday");
      const u = { month: t ? "long" : "short", day: "numeric" },
        d = o.setHours(0, 0, 0, 0) + u.month;
      let m = h.get(d);
      return (
        m ||
        ((m = o.toLocaleDateString(i.f.GetPreferredLocales(), u)),
        h.set(d, m),
        m)
      );
    }
    function b(e, t) {
      const r = new Date(1e3 * e),
        n = new Date(),
        o = Object.assign(
          {
            bGranularFutureTime: !1,
            bGranularTodayTimeOnly: !1,
            bGranularToday: !1,
            bGranularYesterday: !1,
            bGranularWeek: !1,
            bGranularPast: !1,
            bAbbreviateDayOfWeek: !1,
            bForce24HourClock: !1,
          },
          t
        );
      if (r > n) {
        if (!o.bGranularFutureTime)
          return (
            s.d(r.getTime() - n.getTime()),
            r.getFullYear() == n.getFullYear() ? v(r) : k(r)
          );
        s.d(new Date().setHours(24, 0, 0, 0) - n.getTime());
        let e = new Date();
        return (
          e.setHours(0, 0, 0, 0),
          e.setDate(e.getDate() + 1),
          r < e
            ? Object(i.g)("#Time_Today")
            : (e.setDate(e.getDate() + 1),
              r < e
                ? Object(i.g)("#Time_Tomorrow")
                : (e.setDate(e.getDate() + 5),
                  r < e ? S(r) : M(r, !0, o.bAbbreviateDayOfWeek)))
        );
      }
      s.d(new Date().setHours(24, 0, 0, 0) - n.getTime());
      let l = new Date();
      if ((l.setHours(0, 0, 0, 0), r >= l))
        return o.bGranularToday
          ? o.bGranularTodayTimeOnly
            ? d(e, { bForce24HourClock: o.bForce24HourClock })
            : Object(i.g)(
                "#Time_Today_At",
                d(e, { bForce24HourClock: o.bForce24HourClock })
              )
          : Object(i.g)("#Time_Today");
      if ((l.setDate(l.getDate() - 1), r >= l))
        return o.bGranularYesterday
          ? Object(i.g)(
              "#Time_Yesterday_At",
              d(e, { bForce24HourClock: o.bForce24HourClock })
            )
          : Object(i.g)("#Time_Yesterday");
      if ((l.setDate(l.getDate() - 7), o.bGranularWeek && r >= l))
        return M(r, !1, !o.bAbbreviateDayOfWeek);
      if (o.bGranularPast)
        return Object(i.g)(
          "#Time_Past_At",
          c(e, r.getFullYear() == n.getFullYear(), !o.bAbbreviateDayOfWeek),
          d(e, { bForce24HourClock: o.bForce24HourClock })
        );
      if ((l.setDate(l.getDate() - 5), r >= l))
        return Object(i.g)("#TimeSince_ThisWeek");
      const u = new Date(l);
      if (
        (l.setDate(l.getDate() - 21),
        r >= l ||
          (r.getMonth() == n.getMonth() && r.getFullYear() == n.getFullYear()))
      ) {
        const e =
          Math.floor((u.valueOf() - r.valueOf()) / (1e3 * a.g.PerWeek)) + 1;
        return 1 == e
          ? Object(i.g)("#TimeSince_1Week")
          : Object(i.g)("#TimeSince_XWeeks", e);
      }
      return r.getFullYear() == n.getFullYear() ? v(r) : k(r);
    }
    function g(e) {
      const t = new Date(1e3 * e),
        r = new Date();
      s.d(new Date().setHours(24, 0, 0, 0) - r.getTime());
      let n = new Date();
      return (
        n.getDate() < 15 && n.setMonth(n.getMonth() - 1),
        (n = Object(a.f)(n)),
        t >= n
          ? Object(i.g)("#Time_Recent")
          : t.getFullYear() == r.getFullYear()
          ? v(t)
          : r.getMonth() < 6 && t.getFullYear() == r.getFullYear() - 1
          ? k(t)
          : C(t)
      );
    }
    const f = new Map(),
      p = new Map(),
      w = new Map(),
      y = new Map(),
      B = new Map();
    function M(e, t = !1, r = !0) {
      const n = {
          weekday: r ? "long" : "short",
          day: "numeric",
          month: t ? "long" : "short",
        },
        a = e.setHours(0, 0, 0, 0) + n.weekday + n.month;
      let s = B.get(a);
      return (
        s ||
        ((s = e.toLocaleDateString(i.f.GetPreferredLocales(), n)),
        B.set(a, s),
        s)
      );
    }
    function S(e) {
      let t = f.get(e.getDay());
      return (
        t ||
        ((t = e.toLocaleDateString(i.f.GetPreferredLocales(), {
          weekday: "long",
        })),
        f.set(e.getDay(), t),
        t)
      );
    }
    function v(e) {
      let t = p.get(e.getMonth());
      return (
        t ||
        ((t = e.toLocaleDateString(i.f.GetPreferredLocales(), {
          month: "long",
        })),
        p.set(e.getMonth(), t),
        t)
      );
    }
    function C(e) {
      let t = w.get(e.getFullYear());
      return (
        t ||
        ((t = e.toLocaleDateString(i.f.GetPreferredLocales(), {
          year: "numeric",
        })),
        w.set(e.getFullYear(), t),
        t)
      );
    }
    function k(e) {
      const t = e.getMonth() + 12 * e.getFullYear();
      let r = y.get(t);
      return (
        r ||
        ((r = e.toLocaleDateString(i.f.GetPreferredLocales(), {
          month: "long",
          year: "numeric",
        })),
        y.set(t, r),
        r)
      );
    }
  },
  Z7Ow: function (e, t, r) {
    e.exports = {
      EmoticonBow: "shared_svg_library_EmoticonBow_2Llzt",
      EmoticonBow_st0: "shared_svg_library_EmoticonBow_st0_Fw2WG",
      EmoticonBow_st1: "shared_svg_library_EmoticonBow_st1_luj0t",
      SteamDeckCompatInfo: "shared_svg_library_SteamDeckCompatInfo_3VPnv",
      SteamDeckCompatLogo: "shared_svg_library_SteamDeckCompatLogo_1dzQL",
      SteamDeckCompatIcon: "shared_svg_library_SteamDeckCompatIcon_3hAj0",
      SteamDeckCompatVerified:
        "shared_svg_library_SteamDeckCompatVerified_kEODD",
      SteamDeckCompatPlayable:
        "shared_svg_library_SteamDeckCompatPlayable_mPD42",
      SteamDeckCompatUnsupported:
        "shared_svg_library_SteamDeckCompatUnsupported_2LAax",
      SteamDeckCompatUnknown: "shared_svg_library_SteamDeckCompatUnknown_xBqU_",
    };
  },
  bxBv: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return s;
    }),
      r.d(t, "b", function () {
        return o;
      });
    r("kyHq");
    var n = r("mC9v"),
      i = r("hRO2"),
      a = (r("NtSG"), r("RD/U"));
    r("kLLr"), r("6NF1");
    class s {
      constructor(e, t, r, n, s) {
        if (n)
          (this.m_eMsg = n.m_eMsg),
            (this.m_bValid = n.m_bValid),
            this.m_bValid &&
              ((this.m_netPacket = n.m_netPacket),
              (this.m_cubHeader = n.m_cubHeader),
              (this.m_header = n.m_header),
              this.InitForType(r));
        else {
          if (((this.m_header = new a.f(null)), (this.m_bValid = !0), t))
            if (
              ((this.m_netPacket = t),
              this.m_netPacket.SeekGetHead(),
              (this.m_eMsg = this.m_netPacket.GetUint32()),
              2147483648 & this.m_eMsg)
            ) {
              (this.m_eMsg = 2147483647 & this.m_eMsg),
                (this.m_cubHeader = this.m_netPacket.GetUint32());
              try {
                a.f.deserializeBinaryFromReader(
                  this.m_header,
                  new i.BinaryReader(
                    this.m_netPacket.GetPacket(),
                    this.m_netPacket.TellGet(),
                    this.m_cubHeader
                  )
                ),
                  this.m_netPacket.SeekGetCurrent(this.m_cubHeader),
                  r && this.InitForType(r);
              } catch (e) {
                console.error("Exception deserializing protobuf", e),
                  (this.m_bValid = !1);
              }
            } else this.m_bValid = !1;
          else e && (this.m_eMsg = e), r && (this.m_body = new r());
          s && this.m_header.set_jobid_target(s.Hdr().jobid_target());
        }
      }
      static InstallErrorReportingStore(e) {
        this.sm_ErrorReportingStore = e;
      }
      static InitHeaderFromPacket(e) {
        return new s(void 0, e);
      }
      InitForType(e) {
        if (((this.m_body = new e()), this.m_netPacket)) {
          this.m_netPacket.SeekGetHead(8 + this.m_cubHeader);
          try {
            e.deserializeBinaryFromReader(
              this.m_body,
              new i.BinaryReader(
                this.m_netPacket.GetPacket(),
                this.m_netPacket.TellGet(),
                this.m_netPacket.GetCountBytesRemaining()
              )
            );
          } catch (e) {
            this.m_bValid = !1;
            const t = s.sm_ErrorReportingStore,
              r = `Exception parsing protobuf message body of type ${this.m_eMsg}.  Definitions may be out of sync with server version.`;
            t &&
              t.ReportError(new Error(r), { bIncludeMessageInIdentifier: !0 }),
              console.warn(r),
              console.log(e.stack || e);
          }
        }
      }
      BIsValid() {
        return this.m_bValid;
      }
      Body() {
        return this.m_body;
      }
      SetBodyJSON(e) {
        (e.toObject = () => e), (this.m_body = e);
      }
      Hdr() {
        return this.m_header;
      }
      GetEMsg() {
        return this.m_eMsg;
      }
      SetEMsg(e) {
        this.m_eMsg = e;
      }
      GetEResult() {
        return this.Hdr().eresult();
      }
      Serialize() {
        let e = this.m_header.serializeBinary(),
          t = this.m_body.serializeBinary(),
          r = 2147483648 | this.m_eMsg,
          i = new Uint8Array(8 + e.length + t.length),
          a = new n.b(i);
        return (
          a.PutUint32(r), a.PutUint32(e.length), a.PutBytes(e), a.PutBytes(t), i
        );
      }
      SerializeBody() {
        let e = this.m_body.serializeBinary(),
          t = new Uint8Array(e.length);
        return new n.b(t).PutBytes(e), t;
      }
      DEBUG_ToObject() {
        return {};
      }
      DEBUG_LogToConsole() {
        0;
      }
    }
    class o extends s {
      constructor(e, t = 0, r, n) {
        super(t, r, e, n);
      }
      static InitFromPacket(e, t) {
        return new o(e, 0, t);
      }
      static InitFromMsg(e, t) {
        return new o(e, void 0, void 0, t);
      }
      static Init(e, t) {
        return new o(e, t);
      }
      Body() {
        return super.Body();
      }
      SetBodyFields(e) {
        for (let t in e)
          Array.isArray(e[t])
            ? this.Body()[`add_${t}`] &&
              e[t].forEach((e) => {
                this.Body()[`add_${t}`](e);
              })
            : this.Body()[`set_${t}`] && this.Body()[`set_${t}`](e[t]);
      }
    }
  },
  exH9: function (e, t, r) {
    "use strict";
    function n(e) {
      return Object.keys(e).reduce(
        (t, r) => (e[r] ? (t ? `${t} ${r}` : r) : t),
        ""
      );
    }
    t.a = function (...e) {
      return e.reduce(
        (e, t) =>
          t
            ? "string" == typeof t
              ? e
                ? `${e} ${t}`
                : t
              : "object" == typeof t
              ? e
                ? `${e} ${n(t)}`
                : n(t)
              : e
            : e,
        ""
      );
    };
  },
  idvb: function (e, t, r) {},
  kLLr: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return o;
    });
    var n = r("2lpH"),
      i = r.n(n),
      a = r("mgoM"),
      s = r("lkRc");
    r("r64O");
    class o {
      constructor(e = 0, t, r, n) {
        e instanceof o
          ? (this.m_ulSteamID = e.m_ulSteamID)
          : "string" == typeof e
          ? (this.m_ulSteamID = i.a.fromString(e, !0))
          : t && r && void 0 !== n
          ? this.SetFromComponents(e, n, r, t)
          : (this.m_ulSteamID = e ? i.a.fromNumber(e, !0) : i.a.UZERO);
      }
      static InitFromAccountID(e) {
        return new o(Number(e), s.c.EUNIVERSE, 1, a.B);
      }
      static InitFromClanID(e) {
        return new o(Number(e), s.c.EUNIVERSE, 7, 0);
      }
      GetAccountID() {
        return this.m_ulSteamID.getLowBitsUnsigned();
      }
      GetInstance() {
        return 1048575 & this.m_ulSteamID.getHighBitsUnsigned();
      }
      GetAccountType() {
        return (this.m_ulSteamID.getHighBitsUnsigned() >> 20) & 15;
      }
      GetUniverse() {
        return (this.m_ulSteamID.getHighBitsUnsigned() >> 24) & 255;
      }
      ConvertTo64BitString() {
        return this.m_ulSteamID.toString();
      }
      Render() {
        switch (this.GetAccountType()) {
          case 0:
            return "[I:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          case 7:
            return "[g:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          case 4:
            return (
              "[A:" +
              this.GetUniverse() +
              ":" +
              this.GetAccountID() +
              ":" +
              this.GetInstance() +
              "]"
            );
          case 3:
            return "[G:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          case 2:
            return (
              "[M:" +
              this.GetUniverse() +
              ":" +
              this.GetAccountID() +
              ":" +
              this.GetInstance() +
              "]"
            );
          case 5:
            return "[P:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          case 6:
            return "[C:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
          default:
            return "[U:" + this.GetUniverse() + ":" + this.GetAccountID() + "]";
        }
      }
      BIsValid() {
        let e = this.GetAccountType();
        if (e <= 0 || e >= 11) return !1;
        let t = this.GetUniverse();
        if (t <= 0 || t >= 5) return !1;
        if (1 == e) {
          if (0 == this.GetAccountID() || this.GetInstance() > a.C) return !1;
        } else if (7 == e) {
          if (0 == this.GetAccountID() || 0 != this.GetInstance()) return !1;
        } else if (3 == e && 0 == this.GetAccountID()) return !1;
        return !0;
      }
      BIsIndividualAccount() {
        return 1 == this.GetAccountType();
      }
      BIsClanAccount() {
        return 7 == this.GetAccountType();
      }
      SetAccountID(e) {
        this.m_ulSteamID = new i.a(
          e,
          this.m_ulSteamID.getHighBitsUnsigned(),
          !0
        );
      }
      SetInstance(e) {
        this.SetFromComponents(
          this.GetAccountID(),
          e,
          this.GetAccountType(),
          this.GetUniverse()
        );
      }
      SetAccountType(e) {
        this.SetFromComponents(
          this.GetAccountID(),
          this.GetInstance(),
          e,
          this.GetUniverse()
        );
      }
      SetUniverse(e) {
        this.SetFromComponents(
          this.GetAccountID(),
          this.GetInstance(),
          this.GetAccountType(),
          e
        );
      }
      SetFromComponents(e, t, r, n) {
        let a = ((255 & n) << 24) + ((15 & r) << 20) + (1048575 & t),
          s = 4294967295 & e;
        this.m_ulSteamID = new i.a(s, a, !0);
      }
    }
  },
  kyHq: function (e, t, r) {
    "use strict";
    r.d(t, "k", function () {
      return a;
    }),
      r.d(t, "r", function () {
        return i;
      }),
      r.d(t, "Q", function () {
        return s;
      }),
      r.d(t, "b", function () {
        return o;
      }),
      r.d(t, "N", function () {
        return c;
      }),
      r.d(t, "I", function () {
        return l;
      }),
      r.d(t, "j", function () {
        return u;
      }),
      r.d(t, "J", function () {
        return d;
      }),
      r.d(t, "a", function () {
        return m;
      }),
      r.d(t, "M", function () {
        return h;
      }),
      r.d(t, "L", function () {
        return _;
      }),
      r.d(t, "F", function () {
        return b;
      }),
      r.d(t, "n", function () {
        return g;
      }),
      r.d(t, "m", function () {
        return f;
      }),
      r.d(t, "p", function () {
        return p;
      }),
      r.d(t, "K", function () {
        return C;
      }),
      r.d(t, "i", function () {
        return k;
      }),
      r.d(t, "c", function () {
        return E;
      }),
      r.d(t, "d", function () {
        return x;
      }),
      r.d(t, "g", function () {
        return z;
      }),
      r.d(t, "y", function () {
        return S;
      }),
      r.d(t, "h", function () {
        return R;
      }),
      r.d(t, "z", function () {
        return v;
      }),
      r.d(t, "f", function () {
        return L;
      }),
      r.d(t, "o", function () {
        return O;
      }),
      r.d(t, "x", function () {
        return T;
      }),
      r.d(t, "w", function () {
        return F;
      }),
      r.d(t, "D", function () {
        return I;
      }),
      r.d(t, "E", function () {
        return W;
      }),
      r.d(t, "s", function () {
        return U;
      }),
      r.d(t, "B", function () {
        return j;
      }),
      r.d(t, "C", function () {
        return N;
      });
    var n = r("mgoM");
    r.d(t, "e", function () {
      return n.a;
    }),
      r.d(t, "l", function () {
        return n.f;
      }),
      r.d(t, "q", function () {
        return n.g;
      }),
      r.d(t, "t", function () {
        return n.h;
      }),
      r.d(t, "u", function () {
        return n.i;
      }),
      r.d(t, "v", function () {
        return n.j;
      }),
      r.d(t, "A", function () {
        return n.l;
      }),
      r.d(t, "G", function () {
        return n.m;
      }),
      r.d(t, "H", function () {
        return n.n;
      }),
      r.d(t, "O", function () {
        return n.p;
      }),
      r.d(t, "P", function () {
        return n.q;
      });
    var i;
    r("FVDh"), r("2lL1"), r("li7h"), r("sRB7");
    class a {
      constructor() {
        (this.paused = !1),
          (this.update_appid = 0),
          (this.update_start_time = 0),
          (this.update_state = "None"),
          (this.update_seconds_remaining = 0),
          (this.update_bytes_to_download = 0),
          (this.update_bytes_downloaded = 0),
          (this.update_bytes_to_stage = 0),
          (this.update_bytes_staged = 0),
          (this.update_bytes_to_process = 0),
          (this.update_bytes_processed = 0),
          (this.update_is_install = !1),
          (this.update_is_workshop = !1),
          (this.update_is_shader = !1),
          (this.update_is_prefetch_estimate = !1),
          (this.update_network_bytes_per_second = 0),
          (this.update_peak_network_bytes_per_second = 0),
          (this.update_disc_bytes_per_second = 0),
          (this.throttling_suspended = !1);
      }
    }
    !(function (e) {
      (e[(e.k_EControllerBindingType_None = 0)] =
        "k_EControllerBindingType_None"),
        (e[(e.k_EControllerBindingType_Key = 1)] =
          "k_EControllerBindingType_Key"),
        (e[(e.k_EControllerBindingType_MouseButton = 2)] =
          "k_EControllerBindingType_MouseButton"),
        (e[(e.k_EControllerBindingType_Gamepad = 3)] =
          "k_EControllerBindingType_Gamepad"),
        (e[(e.k_EControllerBindingType_Mousewheel = 4)] =
          "k_EControllerBindingType_Mousewheel"),
        (e[(e.k_EControllerBindingType_Modeshift = 5)] =
          "k_EControllerBindingType_Modeshift"),
        (e[(e.k_EControllerBindingType_GameAction = 6)] =
          "k_EControllerBindingType_GameAction"),
        (e[(e.k_EControllerBindingType_ControllerAction = 7)] =
          "k_EControllerBindingType_ControllerAction");
    })(i || (i = {}));
    const s = -1;
    class o extends class {} {}
    class c {}
    class l {}
    function u() {
      return {
        bNotifications_ShowIngame: !0,
        bNotifications_ShowOnline: !1,
        bNotifications_ShowMessage: !0,
        bNotifications_EventsAndAnnouncements: !0,
        bSounds_PlayIngame: !1,
        bSounds_PlayOnline: !1,
        bSounds_PlayMessage: !0,
        bSounds_EventsAndAnnouncements: !1,
        bAlwaysNewChatWindow: !1,
        bForceAlphabeticFriendSorting: !1,
        nChatFlashMode: 0,
        bRememberOpenChats: !0,
        bCompactQuickAccess: !1,
        bCompactFriendsList: !1,
        bNotifications_ShowChatRoomNotification: !0,
        bSounds_PlayChatRoomNotification: !0,
        bHideOfflineFriendsInTagGroups: !1,
        bHideCategorizedFriends: !1,
        bCategorizeInGameFriendsByGame: !0,
        nChatFontSize: 2,
        b24HourClock: !1,
        bDoNotDisturbMode: !1,
        bDisableEmbedInlining: !1,
        bSignIntoFriends: !0,
        bDisableSpellcheck: !1,
        bDisableRoomEffects: !1,
        bAnimatedAvatars: !0,
        featuresEnabled: {},
      };
    }
    class d {}
    class m {}
    function h(e) {
      return e;
    }
    function _(e) {
      return e;
    }
    const b = 4294967295;
    var g, f, p, w, y, B, M, S, v;
    !(function (e) {
      (e[(e.Input = 0)] = "Input"), (e[(e.Output = 1)] = "Output");
    })(g || (g = {})),
      (function (e) {
        (e[(e.Input = 0)] = "Input"),
          (e[(e.AllOutput = 1)] = "AllOutput"),
          (e[(e.Left = 2)] = "Left"),
          (e[(e.Right = 3)] = "Right"),
          (e[(e.Sub = 4)] = "Sub"),
          (e[(e.BackLeft = 5)] = "BackLeft"),
          (e[(e.BackRight = 6)] = "BackRight");
      })(f || (f = {}));
    !(function (e) {
      (e[(e.EBrowserType_OffScreen = 0)] = "EBrowserType_OffScreen"),
        (e[(e.EBrowserType_OpenVROverlay = 1)] = "EBrowserType_OpenVROverlay"),
        (e[(e.EBrowserType_OpenVROverlay_Dashboard = 2)] =
          "EBrowserType_OpenVROverlay_Dashboard"),
        (e[(e.EBrowserType_DirectHWND = 3)] = "EBrowserType_DirectHWND"),
        (e[(e.EBrowserType_DirectHWND_Borderless = 4)] =
          "EBrowserType_DirectHWND_Borderless"),
        (e[(e.EBrowserType_DirectHWND_Hidden = 5)] =
          "EBrowserType_DirectHWND_Hidden"),
        (e[(e.EBrowserType_ChildHWNDNative = 6)] =
          "EBrowserType_ChildHWNDNative"),
        (e[(e.EBrowserType_Transparent_Toplevel = 7)] =
          "EBrowserType_Transparent_Toplevel"),
        (e[(e.EBrowserType_OffScreen_SharedTexture = 8)] =
          "EBrowserType_OffScreen_SharedTexture"),
        (e[(e.EBrowserType_OffScreen_GameOverlay = 9)] =
          "EBrowserType_OffScreen_GameOverlay"),
        (e[(e.EBrowserType_OffScreen_GameOverlay_SharedTexture = 10)] =
          "EBrowserType_OffScreen_GameOverlay_SharedTexture"),
        (e[(e.EBrowserType_Offscreen_FriendsUI = 11)] =
          "EBrowserType_Offscreen_FriendsUI"),
        (e[(e.EBrowserType_MAX = 12)] = "EBrowserType_MAX");
    })(p || (p = {}));
    !(function (e) {
      (e[(e.k_EClientUINotificationGroupChatMessage = 1)] =
        "k_EClientUINotificationGroupChatMessage"),
        (e[(e.k_EClientUINotificationFriendChatMessage = 2)] =
          "k_EClientUINotificationFriendChatMessage"),
        (e[(e.k_EClientUINotificationFriendPersonaState = 3)] =
          "k_EClientUINotificationFriendPersonaState");
    })(w || (w = {})),
      (function (e) {
        (e[(e.k_EComputerActiveStateInvalid = 0)] =
          "k_EComputerActiveStateInvalid"),
          (e[(e.k_EComputerActiveStateActive = 1)] =
            "k_EComputerActiveStateActive"),
          (e[(e.k_EComputerActiveStateIdle = 2)] =
            "k_EComputerActiveStateIdle");
      })(y || (y = {}));
    class C {}
    !(function (e) {
      (e[(e.k_EPending = 0)] = "k_EPending"),
        (e[(e.k_EAccepted = 1)] = "k_EAccepted"),
        (e[(e.k_ERejected = 2)] = "k_ERejected");
    })(B || (B = {}));
    class k {
      constructor() {
        this.content_descriptors_to_exclude = [];
      }
    }
    function E(e) {
      switch (e) {
        case 1:
          return "game";
        case 2:
          return "software";
        case 4:
          return "tool";
        case 8:
          return "demo";
        case 32:
          return "dlc";
        case 128:
          return "driver";
        case 256:
          return "config";
        case 2048:
          return "video";
        case 8192:
          return "music";
        case 65536:
          return "beta";
      }
      return "invalid";
    }
    function x(e) {
      switch (e) {
        case 0:
          return "game";
        case 6:
          return "software";
        case 1:
          return "demo";
        case 4:
          return "dlc";
        case 7:
        case 3:
          return "video";
        case 11:
          return "music";
        case 12:
          return "beta";
        case 2:
          return "mod";
      }
      return "invalid";
    }
    function z(e) {
      return (
        "game" === e ||
        "dlc" === e ||
        "software" === e ||
        "music" === e ||
        "application" === e ||
        "demo" === e ||
        "hardware" === e ||
        "mod" === e ||
        "video" == e ||
        "beta" === e ||
        "advertising" === e
      );
    }
    !(function (e) {
      (e[(e.k_EClientUsedInputTypeKeyboard = 0)] =
        "k_EClientUsedInputTypeKeyboard"),
        (e[(e.k_EClientUsedInputTypeMouse = 1)] =
          "k_EClientUsedInputTypeMouse"),
        (e[(e.k_EClientUsedInputTypeController = 2)] =
          "k_EClientUsedInputTypeController"),
        (e[(e.k_EClientUsedInputTypeMax = 3)] = "k_EClientUsedInputTypeMax");
    })(M || (M = {})),
      (function (e) {
        (e[(e.k_ERemoteClientLaunchOK = 1)] = "k_ERemoteClientLaunchOK"),
          (e[(e.k_ERemoteClientLaunchFail = 2)] = "k_ERemoteClientLaunchFail"),
          (e[(e.k_ERemoteClientLaunchRequiresUI = 3)] =
            "k_ERemoteClientLaunchRequiresUI"),
          (e[(e.k_ERemoteClientLaunchRequiresLaunchOption = 4)] =
            "k_ERemoteClientLaunchRequiresLaunchOption"),
          (e[(e.k_ERemoteClientLaunchRequiresEULA = 5)] =
            "k_ERemoteClientLaunchRequiresEULA"),
          (e[(e.k_ERemoteClientLaunchTimeout = 6)] =
            "k_ERemoteClientLaunchTimeout"),
          (e[(e.k_ERemoteClientLaunchStreamTimeout = 7)] =
            "k_ERemoteClientLaunchStreamTimeout"),
          (e[(e.k_ERemoteClientLaunchStreamClientFail = 8)] =
            "k_ERemoteClientLaunchStreamClientFail"),
          (e[(e.k_ERemoteClientLaunchOtherGameRunning = 9)] =
            "k_ERemoteClientLaunchOtherGameRunning"),
          (e[(e.k_ERemoteClientLaunchDownloadStarted = 10)] =
            "k_ERemoteClientLaunchDownloadStarted"),
          (e[(e.k_ERemoteClientLaunchDownloadNoSpace = 11)] =
            "k_ERemoteClientLaunchDownloadNoSpace"),
          (e[(e.k_ERemoteClientLaunchDownloadFiltered = 12)] =
            "k_ERemoteClientLaunchDownloadFiltered"),
          (e[(e.k_ERemoteClientLaunchDownloadRequiresUI = 13)] =
            "k_ERemoteClientLaunchDownloadRequiresUI"),
          (e[(e.k_ERemoteClientLaunchAccessDenied = 14)] =
            "k_ERemoteClientLaunchAccessDenied"),
          (e[(e.k_ERemoteClientLaunchNetworkError = 15)] =
            "k_ERemoteClientLaunchNetworkError"),
          (e[(e.k_ERemoteClientLaunchProgress = 16)] =
            "k_ERemoteClientLaunchProgress"),
          (e[(e.k_ERemoteClientLaunchParentalUnlockFailed = 17)] =
            "k_ERemoteClientLaunchParentalUnlockFailed"),
          (e[(e.k_ERemoteClientLaunchScreenLocked = 18)] =
            "k_ERemoteClientLaunchScreenLocked"),
          (e[(e.k_ERemoteClientLaunchUnsupported = 19)] =
            "k_ERemoteClientLaunchUnsupported"),
          (e[(e.k_ERemoteClientLaunchDisabledLocal = 20)] =
            "k_ERemoteClientLaunchDisabledLocal"),
          (e[(e.k_ERemoteClientLaunchDisabledRemote = 21)] =
            "k_ERemoteClientLaunchDisabledRemote"),
          (e[(e.k_ERemoteClientLaunchBroadcasting = 22)] =
            "k_ERemoteClientLaunchBroadcasting"),
          (e[(e.k_ERemoteClientLaunchBusy = 23)] = "k_ERemoteClientLaunchBusy"),
          (e[(e.k_ERemoteClientLaunchDriversNotInstalled = 24)] =
            "k_ERemoteClientLaunchDriversNotInstalled"),
          (e[(e.k_ERemoteClientLaunchTransportUnavailable = 25)] =
            "k_ERemoteClientLaunchTransportUnavailable"),
          (e[(e.k_ERemoteClientLaunchCanceled = 26)] =
            "k_ERemoteClientLaunchCanceled"),
          (e[(e.k_ERemoteClientLaunchInvisible = 27)] =
            "k_ERemoteClientLaunchInvisible"),
          (e[(e.k_ERemoteClientLaunchRestrictedCountry = 28)] =
            "k_ERemoteClientLaunchRestrictedCountry");
      })(S || (S = {}));
    class R {
      constructor() {
        this.m_rgHandles = [];
      }
      Add(e) {
        e && this.m_rgHandles.push(e);
      }
      Unregister() {
        let e = this.m_rgHandles;
        this.m_rgHandles = [];
        for (let t of e) t && t.unregister();
      }
    }
    function L(e) {
      return e === v.k_ESteamRealmChina;
    }
    !(function (e) {
      (e[(e.k_ESteamRealmUnknown = 0)] = "k_ESteamRealmUnknown"),
        (e[(e.k_ESteamRealmGlobal = 1)] = "k_ESteamRealmGlobal"),
        (e[(e.k_ESteamRealmChina = 2)] = "k_ESteamRealmChina");
    })(v || (v = {}));
    var O;
    !(function (e) {
      (e[(e.k_BluetoothDeviceType_Invalid = 0)] =
        "k_BluetoothDeviceType_Invalid"),
        (e[(e.k_BluetoothDeviceType_Unknown = 1)] =
          "k_BluetoothDeviceType_Unknown"),
        (e[(e.k_BluetoothDeviceType_Phone = 2)] =
          "k_BluetoothDeviceType_Phone"),
        (e[(e.k_BluetoothDeviceType_Computer = 3)] =
          "k_BluetoothDeviceType_Computer"),
        (e[(e.k_BluetoothDeviceType_Headset = 4)] =
          "k_BluetoothDeviceType_Headset"),
        (e[(e.k_BluetoothDeviceType_Headphones = 5)] =
          "k_BluetoothDeviceType_Headphones"),
        (e[(e.k_BluetoothDeviceType_Speakers = 6)] =
          "k_BluetoothDeviceType_Speakers"),
        (e[(e.k_BluetoothDeviceType_OtherAudio = 7)] =
          "k_BluetoothDeviceType_OtherAudio"),
        (e[(e.k_BluetoothDeviceType_Mouse = 8)] =
          "k_BluetoothDeviceType_Mouse"),
        (e[(e.k_BluetoothDeviceType_Joystick = 9)] =
          "k_BluetoothDeviceType_Joystick"),
        (e[(e.k_BluetoothDeviceType_Gamepad = 10)] =
          "k_BluetoothDeviceType_Gamepad"),
        (e[(e.k_BluetoothDeviceType_Keyboard = 11)] =
          "k_BluetoothDeviceType_Keyboard");
    })(O || (O = {}));
    var T, F, I, W, U, j, N;
    !(function (e) {
      (e[(e.Unknown = 0)] = "Unknown"),
        (e[(e.Wired = 1)] = "Wired"),
        (e[(e.Wireless = 2)] = "Wireless"),
        (e[(e.Virtual = 3)] = "Virtual");
    })(T || (T = {})),
      (function (e) {
        (e[(e.NotPresent = 0)] = "NotPresent"),
          (e[(e.Failed = 1)] = "Failed"),
          (e[(e.Disconnected = 2)] = "Disconnected"),
          (e[(e.Disconnecting = 3)] = "Disconnecting"),
          (e[(e.Connecting = 4)] = "Connecting"),
          (e[(e.Connected = 5)] = "Connected"),
          (e[(e.Retrying = 6)] = "Retrying");
      })(F || (F = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.Weak = 1)] = "Weak"),
          (e[(e.Ok = 2)] = "Ok"),
          (e[(e.Good = 3)] = "Good"),
          (e[(e.Excellent = 4)] = "Excellent");
      })(I || (I = {})),
      (function (e) {
        (e[(e.None = 0)] = "None"),
          (e[(e.StaticWep = 1)] = "StaticWep"),
          (e[(e.DynamicWep = 2)] = "DynamicWep"),
          (e[(e.Wpa = 4)] = "Wpa"),
          (e[(e.WpaEnterprise = 8)] = "WpaEnterprise"),
          (e[(e.Wpa2 = 16)] = "Wpa2"),
          (e[(e.Wpa2Enterprise = 32)] = "Wpa2Enterprise"),
          (e[(e.Unsupported = 32768)] = "Unsupported");
      })(W || (W = {})),
      (function (e) {
        (e[(e.k_EHTTPProxyMode_Invalid = 0)] = "k_EHTTPProxyMode_Invalid"),
          (e[(e.k_EHTTPProxyMode_None = 1)] = "k_EHTTPProxyMode_None"),
          (e[(e.k_EHTTPProxyMode_Manual = 2)] = "k_EHTTPProxyMode_Manual"),
          (e[(e.k_EHTTPProxyMode_Automatic = 3)] =
            "k_EHTTPProxyMode_Automatic");
      })(U || (U = {}));
    !(function (e) {
      (e[(e.SystemKey0 = 0)] = "SystemKey0"),
        (e[(e.SystemKey1 = 1)] = "SystemKey1");
    })(j || (j = {})),
      (function (e) {
        (e[(e.Hidden = 0)] = "Hidden"),
          (e[(e.Notification = 1)] = "Notification"),
          (e[(e.Overlay = 2)] = "Overlay"),
          (e[(e.Opaque = 3)] = "Opaque"),
          (e[(e.OverlayKeyboard = 4)] = "OverlayKeyboard");
      })(N || (N = {}));
  },
  li7h: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return i;
    }),
      r.d(t, "b", function () {
        return a;
      });
    var n = r("hRO2");
    r("OS8t");
    n.Message;
    function i(e) {
      return "unknown EStorageBlockContentType ( " + e + " )";
    }
    function a(e) {
      return "unknown EStorageBlockFileSystemType ( " + e + " )";
    }
  },
  lkRc: function (e, t, r) {
    "use strict";
    r.d(t, "c", function () {
      return a;
    }),
      r.d(t, "g", function () {
        return s;
      }),
      r.d(t, "b", function () {
        return o;
      }),
      r.d(t, "a", function () {
        return u;
      }),
      r.d(t, "f", function () {
        return d;
      }),
      r.d(t, "d", function () {
        return h;
      }),
      r.d(t, "e", function () {
        return _;
      });
    r("mrSG");
    var n = r("YyVH"),
      i = r("Jnrd");
    r("mgoM");
    const a = {
        EUNIVERSE: 0,
        WEB_UNIVERSE: "",
        LANGUAGE: "english",
        SUPPORTED_LANGUAGES: [],
        COUNTRY: "",
        MEDIA_CDN_COMMUNITY_URL: "",
        MEDIA_CDN_URL: "",
        COMMUNITY_CDN_URL: "",
        COMMUNITY_CDN_ASSET_URL: "",
        STORE_CDN_URL: "",
        PUBLIC_SHARED_URL: "",
        COMMUNITY_BASE_URL: "",
        CHAT_BASE_URL: "",
        STORE_BASE_URL: "",
        LOGIN_BASE_URL: "",
        STORE_ICON_BASE_URL: "",
        IMG_URL: "",
        STEAMTV_BASE_URL: "",
        HELP_BASE_URL: "",
        PARTNER_BASE_URL: "",
        STATS_BASE_URL: "",
        INTERNAL_STATS_BASE_URL: "",
        BASE_URL_STORE_CDN_ASSETS: "",
        IN_CLIENT: !1,
        USE_POPUPS: !1,
        IN_MOBILE: !1,
        IN_TENFOOT: !1,
        PLATFORM: "",
        SNR: "",
        LAUNCHER_TYPE: 0,
        EREALM: 0,
        IN_CHROMEOS: !1,
        LOCAL_HOSTNAME: "",
        WEBAPI_BASE_URL: "",
        TOKEN_URL: "",
        BUILD_TIMESTAMP: 0,
        PAGE_TIMESTAMP: 0,
        get SESSIONID() {
          return (function () {
            if (!Object(i.a)()) return c || (c = l()), c;
            let e = Object(i.b)("sessionid");
            e || (e = l());
            return e;
          })();
        },
        FRIENDSUI_BETA: !1,
        STEAM_TV: !1,
        DEV_MODE: !1,
        IN_LIBRARY: !1,
        IN_GAMEPADUI: !1,
        ON_DECK: !1,
        IN_LOGIN: !1,
        IN_STANDALONE_KEYBOARD: !1,
      },
      s = {
        logged_in: !1,
        steamid: "",
        accountid: 0,
        account_name: "",
        token: void 0,
        token_use_id: void 0,
        webapi_token: "",
        authwgtoken: "",
        is_support: !1,
        is_limited: !1,
        is_partner_member: !1,
        short_url: "",
        country_code: "",
      },
      o = {
        CLANSTEAMID: "",
        CLANACCOUNTID: 0,
        APPID: 0,
        VANITY_ID: "",
        IS_CREATOR_HOME: !1,
        IS_CURATOR: !1,
        IS_OGG: !1,
        CAN_UPLOAD_IMAGES: !1,
        APP_NAME: "",
        HEADER_IMAGE: "",
        HAS_ADULT_CONTENT: !1,
        HAS_ADULT_CONTENT_SEX: !1,
        HAS_ADULT_CONTENT_VIOLENCE: !1,
        IS_VALVE_GROUP: !1,
        IS_ALLOWED_SC: !1,
      };
    let c;
    function l() {
      let e = (function () {
        let e = "";
        for (let t = 0; t < 24; t++) e += Object(n.b)(0, 35).toString(36);
        return e;
      })();
      return Object(i.c)("sessionid", e, 0), e;
    }
    function u() {
      let e = null;
      return (
        Object(i.a)() && (e = Object(i.b)("presentation_mode")),
        Boolean(e && 1 === Number.parseInt(e))
      );
    }
    function d(e, t = "webui_config") {
      let r;
      if (((r = "string" == typeof t ? document.getElementById(t) : t), r))
        try {
          if (r.hasAttribute("data-" + e)) {
            return JSON.parse(r.getAttribute("data-" + e));
          }
          return null;
        } catch (e) {
          console.error("Failed to parse config", e);
        }
      else console.error("Missing config element #", t);
    }
    function m(e, t) {
      return 0 != t.length && e.startsWith(t);
    }
    function h() {
      if (!window || !window.location || !window.location.href)
        return console.warn("Unable to determine base url!"), "unknown";
      const e = window.location.href;
      return m(e, a.STORE_BASE_URL)
        ? a.STORE_BASE_URL
        : m(e, a.COMMUNITY_BASE_URL)
        ? a.COMMUNITY_BASE_URL
        : m(e, a.CHAT_BASE_URL)
        ? a.CHAT_BASE_URL
        : m(e, a.PARTNER_BASE_URL)
        ? a.PARTNER_BASE_URL
        : m(e, a.HELP_BASE_URL)
        ? a.HELP_BASE_URL
        : m(e, a.STEAMTV_BASE_URL)
        ? a.STEAMTV_BASE_URL
        : m(e, a.STATS_BASE_URL)
        ? a.STATS_BASE_URL
        : m(e, a.INTERNAL_STATS_BASE_URL)
        ? a.INTERNAL_STATS_BASE_URL
        : m(e, "https://steamloopback.host")
        ? "https://steamloopback.host"
        : "";
    }
    function _() {
      const e = window.location.href;
      return e.startsWith(a.STORE_BASE_URL)
        ? "store"
        : e.startsWith(a.COMMUNITY_BASE_URL)
        ? "community"
        : e.startsWith(a.PARTNER_BASE_URL)
        ? "partnerweb"
        : e.startsWith(a.HELP_BASE_URL)
        ? "help"
        : e.startsWith(a.STEAMTV_BASE_URL)
        ? "steamtv"
        : e.startsWith(a.STATS_BASE_URL) ||
          e.startsWith(a.INTERNAL_STATS_BASE_URL)
        ? "stats"
        : "";
    }
  },
  mC9v: function (e, t, r) {
    "use strict";
    r.d(t, "b", function () {
      return n;
    }),
      r.d(t, "a", function () {
        return a;
      });
    class n {
      constructor(e, t = 0, r) {
        (this.m_nOffset = t || 0),
          e instanceof Uint8Array || e instanceof DataView
            ? ((this.m_nLength = r || e.byteLength - this.m_nOffset),
              (this.m_nOffset += e.byteOffset),
              (this.m_viewPacket = new DataView(
                e.buffer,
                this.m_nOffset,
                this.m_nLength
              )))
            : ((this.m_nLength = r || e.byteLength - this.m_nOffset),
              (this.m_viewPacket = new DataView(
                e,
                this.m_nOffset,
                this.m_nLength
              ))),
          (this.m_rgubPacket = new Uint8Array(
            this.m_viewPacket.buffer,
            this.m_viewPacket.byteOffset,
            this.m_viewPacket.byteLength
          )),
          (this.m_iGet = 0),
          (this.m_iPut = 0);
      }
      TellGet() {
        return this.m_iGet + this.m_viewPacket.byteOffset;
      }
      GetPacket() {
        return this.m_viewPacket.buffer;
      }
      GetUint8() {
        return this.m_viewPacket.getUint8(this.m_iGet++);
      }
      GetUint32(e = !0) {
        let t = this.m_viewPacket.getUint32(this.m_iGet, e);
        return (this.m_iGet += 4), t;
      }
      SeekGetHead(e = 0) {
        this.m_iGet = e || 0;
      }
      SeekGetCurrent(e) {
        this.m_iGet += e;
      }
      TellPut() {
        return this.m_iPut + this.m_viewPacket.byteOffset;
      }
      TellMaxPut() {
        return this.m_viewPacket.byteLength;
      }
      PutUint8(e) {
        this.m_viewPacket.setUint8(this.m_iPut++, e);
      }
      PutUint32(e, t = !0) {
        this.m_viewPacket.setUint32(this.m_iPut, e, t), (this.m_iPut += 4);
      }
      PutBytes(e) {
        this.m_rgubPacket.set(e, this.m_iPut), (this.m_iPut += e.length);
      }
      SeekPut(e) {
        this.m_iPut += e;
      }
      GetCountBytesRemaining() {
        return this.m_viewPacket.byteLength - this.m_iGet;
      }
    }
    const i = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
    ];
    function a(e) {
      let t = "";
      for (let r = 0; r < e.length; r++) {
        let n = e[r];
        t += i[n >>> 4] + i[15 & n];
      }
      return t;
    }
  },
  mgoM: function (e, t, r) {
    "use strict";
    function n(e) {
      return 3 == e || 6 == e;
    }
    function i(e) {
      return 5 == e || 6 == e;
    }
    r.d(t, "c", function () {
      return n;
    }),
      r.d(t, "b", function () {
        return i;
      }),
      r.d(t, "B", function () {
        return a;
      }),
      r.d(t, "C", function () {
        return s;
      }),
      r.d(t, "A", function () {
        return o;
      }),
      r.d(t, "t", function () {
        return c;
      }),
      r.d(t, "v", function () {
        return l;
      }),
      r.d(t, "u", function () {
        return u;
      }),
      r.d(t, "q", function () {
        return d;
      }),
      r.d(t, "w", function () {
        return m;
      }),
      r.d(t, "x", function () {
        return h;
      }),
      r.d(t, "z", function () {
        return _;
      }),
      r.d(t, "y", function () {
        return b;
      }),
      r.d(t, "r", function () {
        return g;
      }),
      r.d(t, "s", function () {
        return f;
      }),
      r.d(t, "o", function () {
        return p;
      }),
      r.d(t, "p", function () {
        return w;
      }),
      r.d(t, "i", function () {
        return y;
      }),
      r.d(t, "m", function () {
        return B;
      }),
      r.d(t, "h", function () {
        return M;
      }),
      r.d(t, "n", function () {
        return S;
      }),
      r.d(t, "a", function () {
        return v;
      }),
      r.d(t, "d", function () {
        return C;
      }),
      r.d(t, "g", function () {
        return k;
      }),
      r.d(t, "j", function () {
        return E;
      }),
      r.d(t, "l", function () {
        return x;
      }),
      r.d(t, "f", function () {
        return R;
      }),
      r.d(t, "k", function () {
        return L;
      }),
      r.d(t, "e", function () {
        return O;
      });
    const a = 1,
      s = 4,
      o = 7,
      c = 750,
      l = 753,
      u = 799,
      d = 241100,
      m = 250820,
      h = 330050,
      _ = 358510,
      b = 366490,
      g = 413090,
      f = 443510,
      p = "18446744073709551615",
      w = 0;
    function y(e, t = "en") {
      switch (e) {
        case 0:
          return "en";
        case 1:
          return "de";
        case 2:
          return "fr";
        case 3:
          return "it";
        case 4:
          return "ko";
        case 5:
          return "es";
        case 6:
          return "zn-cn";
        case 7:
          return "zn-tw";
        case 8:
          return "ru";
        case 9:
          return "th";
        case 10:
          return "ja";
        case 11:
          return "pt";
        case 12:
          return "pl";
        case 13:
          return "da";
        case 14:
          return "nl";
        case 15:
          return "fi";
        case 16:
          return "no";
        case 17:
          return "sv";
        case 18:
          return "hu";
        case 19:
          return "cs";
        case 20:
          return "ro";
        case 21:
          return "tr";
        case 25:
          return "ar";
        case 22:
          return "pt-br";
        case 23:
          return "bg";
        case 24:
          return "el";
        case 26:
          return "uk";
        case 27:
          return "es-419";
        case 28:
          return "vn";
        case 29:
          return "sc-sc";
        default:
          return t;
      }
    }
    const B = (e) => ("koreana" === e ? "korean" : e);
    function M(e, t = "") {
      switch (e) {
        case 0:
          return "english";
        case 1:
          return "german";
        case 2:
          return "french";
        case 3:
          return "italian";
        case 4:
          return "koreana";
        case 5:
          return "spanish";
        case 6:
          return "schinese";
        case 7:
          return "tchinese";
        case 8:
          return "russian";
        case 9:
          return "thai";
        case 10:
          return "japanese";
        case 11:
          return "portuguese";
        case 12:
          return "polish";
        case 13:
          return "danish";
        case 14:
          return "dutch";
        case 15:
          return "finnish";
        case 16:
          return "norwegian";
        case 17:
          return "swedish";
        case 18:
          return "hungarian";
        case 19:
          return "czech";
        case 20:
          return "romanian";
        case 21:
          return "turkish";
        case 25:
          return "arabic";
        case 22:
          return "brazilian";
        case 23:
          return "bulgarian";
        case 24:
          return "greek";
        case 26:
          return "ukrainian";
        case 27:
          return "latam";
        case 28:
          return "vietnamese";
        case 29:
          return "sc_schinese";
        default:
          return t;
      }
    }
    function S(e, t = 0) {
      switch (e) {
        case "english":
          return 0;
        case "german":
          return 1;
        case "french":
          return 2;
        case "italian":
          return 3;
        case "korean":
        case "koreana":
          return 4;
        case "spanish":
          return 5;
        case "schinese":
          return 6;
        case "tchinese":
          return 7;
        case "russian":
          return 8;
        case "thai":
          return 9;
        case "japanese":
          return 10;
        case "portuguese":
          return 11;
        case "polish":
          return 12;
        case "danish":
          return 13;
        case "dutch":
          return 14;
        case "finnish":
          return 15;
        case "norwegian":
          return 16;
        case "swedish":
          return 17;
        case "hungarian":
          return 18;
        case "czech":
          return 19;
        case "romanian":
          return 20;
        case "turkish":
          return 21;
        case "arabic":
          return 25;
        case "brazilian":
          return 22;
        case "bulgarian":
          return 23;
        case "greek":
          return 24;
        case "ukrainian":
          return 26;
        case "latam":
          return 27;
        case "vietnamese":
          return 28;
        case "sc_schinese":
          return 29;
        default:
          return t;
      }
    }
    function v(e) {
      switch (e) {
        default:
          break;
        case 4:
        case 1:
        case 7:
        case 8:
          return !0;
      }
      return !1;
    }
    function C(e) {
      switch (e) {
        default:
          break;
        case 4:
        case 1:
        case 8:
          return !0;
      }
      return !1;
    }
    var k, E, x, z, R, L, O;
    !(function (e) {
      (e[(e.k_EConnectivityTestResult_Unknown = 0)] =
        "k_EConnectivityTestResult_Unknown"),
        (e[(e.k_EConnectivityTestResult_Connected = 1)] =
          "k_EConnectivityTestResult_Connected"),
        (e[(e.k_EConnectivityTestResult_CaptivePortal = 2)] =
          "k_EConnectivityTestResult_CaptivePortal"),
        (e[(e.k_EConnectivityTestResult_TimedOut = 3)] =
          "k_EConnectivityTestResult_TimedOut"),
        (e[(e.k_EConnectivityTestResult_Failed = 4)] =
          "k_EConnectivityTestResult_Failed"),
        (e[(e.k_EConnectivityTestResult_WifiDisabled = 5)] =
          "k_EConnectivityTestResult_WifiDisabled"),
        (e[(e.k_EConnectivityTestResult_NoLAN = 6)] =
          "k_EConnectivityTestResult_NoLAN");
    })(k || (k = {})),
      (function (e) {
        (e[(e.k_ENetFakeLocalSystemState_Normal = 0)] =
          "k_ENetFakeLocalSystemState_Normal"),
          (e[(e.k_ENetFakeLocalSystemState_NoLAN = 1)] =
            "k_ENetFakeLocalSystemState_NoLAN"),
          (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_Redirected = 2)] =
            "k_ENetFakeLocalSystemState_CaptivePortal_Redirected"),
          (e[(e.k_ENetFakeLocalSystemState_CaptivePortal_InPlace = 3)] =
            "k_ENetFakeLocalSystemState_CaptivePortal_InPlace"),
          (e[(e.k_ENetFakeLocalSystemState_NoInternet = 4)] =
            "k_ENetFakeLocalSystemState_NoInternet"),
          (e[(e.k_ENetFakeLocalSystemState_NoSteam = 5)] =
            "k_ENetFakeLocalSystemState_NoSteam");
      })(E || (E = {})),
      (function (e) {
        (e[(e.k_ESuspendResumeProgressState_Invalid = 0)] =
          "k_ESuspendResumeProgressState_Invalid"),
          (e[(e.k_ESuspendResumeProgressState_Complete = 1)] =
            "k_ESuspendResumeProgressState_Complete"),
          (e[(e.k_ESuspendResumeProgressState_CloudSync = 2)] =
            "k_ESuspendResumeProgressState_CloudSync"),
          (e[(e.k_ESuspendResumeProgressState_LoggingIn = 3)] =
            "k_ESuspendResumeProgressState_LoggingIn"),
          (e[(e.k_ESuspendResumeProgressState_WaitingForApp = 4)] =
            "k_ESuspendResumeProgressState_WaitingForApp"),
          (e[(e.k_ESuspendResumeProgressState_Working = 5)] =
            "k_ESuspendResumeProgressState_Working");
      })(x || (x = {})),
      (function (e) {
        (e[(e.k_EFloatingGamepadTextInputModeModeSingleLine = 0)] =
          "k_EFloatingGamepadTextInputModeModeSingleLine"),
          (e[(e.k_EFloatingGamepadTextInputModeModeMultipleLines = 1)] =
            "k_EFloatingGamepadTextInputModeModeMultipleLines"),
          (e[(e.k_EFloatingGamepadTextInputModeModeEmail = 2)] =
            "k_EFloatingGamepadTextInputModeModeEmail"),
          (e[(e.k_EFloatingGamepadTextInputModeModeNumeric = 3)] =
            "k_EFloatingGamepadTextInputModeModeNumeric");
      })(z || (z = {})),
      (function (e) {
        (e[(e.k_EAppUpdateContentType_Content = 0)] =
          "k_EAppUpdateContentType_Content"),
          (e[(e.k_EAppUpdateContentType_Workshop = 1)] =
            "k_EAppUpdateContentType_Workshop"),
          (e[(e.k_EAppUpdateContentType_Shader = 2)] =
            "k_EAppUpdateContentType_Shader"),
          (e[(e.k_EAppUpdateContentType_Max = 3)] =
            "k_EAppUpdateContentType_Max");
      })(R || (R = {})),
      (function (e) {
        (e[(e.k_EOverlayToStoreFlag_None = 0)] = "k_EOverlayToStoreFlag_None"),
          (e[(e.k_EOverlayToStoreFlag_AddToCart = 1)] =
            "k_EOverlayToStoreFlag_AddToCart"),
          (e[(e.k_EOverlayToStoreFlag_AddToCartAndShow = 2)] =
            "k_EOverlayToStoreFlag_AddToCartAndShow");
      })(L || (L = {})),
      (function (e) {
        (e[(e.k_EActivateGameOverlayToWebPageMode_Default = 0)] =
          "k_EActivateGameOverlayToWebPageMode_Default"),
          (e[(e.k_EActivateGameOverlayToWebPageMode_Modal = 1)] =
            "k_EActivateGameOverlayToWebPageMode_Modal");
      })(O || (O = {}));
  },
  miow: function (e, t, r) {
    e.exports = {
      Container: "index_Container_2mu1w",
      PreloadThrobber: "index_PreloadThrobber_2dqG9",
      ThreeDots: "index_ThreeDots_1yjvY",
      Dot: "index_Dot_Wd5cq",
      cycleAnim: "index_cycleAnim_Vo179",
      Dot1: "index_Dot1_2FQ_i",
      Dot2: "index_Dot2_3Pd3-",
      Dot3: "index_Dot3_3uYAQ",
    };
  },
  mwcN: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return l;
    });
    var n = r("s4NR"),
      i = r.n(n),
      a = r("lkRc"),
      s = r("TLQK"),
      o = r("kyHq");
    const c = "steam-dev-configparams";
    function l() {
      let e = "";
      if (
        (-1 != window.location.pathname.indexOf("index.html") ||
        -1 != window.location.pathname.indexOf("dev.html")
          ? ((e = window.location.search),
            sessionStorage.setItem(c, e),
            console.log("Storing new config params", e))
          : ((e = sessionStorage.getItem(c)),
            console.log("Loading previous config params", e)),
        e)
      ) {
        const t = i.a.parse(e.slice(1));
        for (const e in t)
          -1 !== Object.getOwnPropertyNames(a.c).indexOf(e)
            ? (a.c[e] = u(t[e]))
            : -1 !== Object.getOwnPropertyNames(a.g).indexOf(e)
            ? (a.g[e] = u(t[e]))
            : console.error("Got unknown config property", e);
        const r = Object(s.d)();
        console.log("setting locale:", r),
          r &&
            (document.documentElement.setAttribute("lang", r),
            s.f.SetPreferredLocales([r]));
      }
      a.c.EREALM == o.z.k_ESteamRealmUnknown &&
        (a.c.EREALM = Object(o.e)(a.c.LAUNCHER_TYPE)
          ? o.z.k_ESteamRealmChina
          : o.z.k_ESteamRealmGlobal);
    }
    function u(e) {
      return "true" === e || ("false" !== e && (Number(e) || e));
    }
  },
  o36Y: function (e, t, r) {},
  qiKp: function (e, t, r) {
    "use strict";
    r.d(t, "a", function () {
      return s;
    }),
      r.d(t, "e", function () {
        return c;
      }),
      r.d(t, "b", function () {
        return l;
      }),
      r.d(t, "c", function () {
        return u;
      }),
      r.d(t, "d", function () {
        return d;
      });
    var n = r("mrSG"),
      i = r("Kw0F"),
      a = r("XxJJ");
    class s {
      constructor() {
        this.m_vecCallbacks = [];
      }
      Register(e) {
        this.m_vecCallbacks.push(e);
        return {
          Unregister: () => {
            i.d(this.m_vecCallbacks, e);
          },
        };
      }
      Dispatch(...e) {
        for (const t of Array.from(this.m_vecCallbacks)) t(...e);
      }
      ClearAllCallbacks() {
        this.m_vecCallbacks = [];
      }
      CountRegistered() {
        return this.m_vecCallbacks.length;
      }
    }
    class o {
      constructor(e) {
        (this.m_callbacks = new s()), (this.m_currentValue = e);
      }
      Set(e) {
        (this.m_currentValue = e), this.m_callbacks.Dispatch(e);
      }
      get Value() {
        return this.m_currentValue;
      }
      Subscribe(e) {
        return { Unsubscribe: this.m_callbacks.Register(e).Unregister };
      }
    }
    function c(e) {
      return new o(e);
    }
    class l {
      Schedule(e, t) {
        this.IsScheduled() && this.Cancel(),
          (this.m_fnCallback = t),
          (this.m_schTimer = window.setTimeout(this.ScheduledInternal, e));
      }
      IsScheduled() {
        return void 0 !== this.m_schTimer;
      }
      Cancel() {
        this.m_schTimer &&
          (clearTimeout(this.m_schTimer), (this.m_schTimer = void 0));
      }
      ScheduledInternal() {
        this.m_schTimer = void 0;
        let e = this.m_fnCallback;
        (this.m_fnCallback = void 0), e();
      }
    }
    Object(n.b)([a.a], l.prototype, "ScheduledInternal", null);
    class u {
      constructor() {
        this.m_rgListeners = [];
      }
      AddEventListener(e, t, r) {
        e.addEventListener(t, r),
          this.m_rgListeners.push({ element: e, type: t, listener: r });
      }
      Unregister() {
        for (let e of this.m_rgListeners)
          e.element.removeEventListener(e.type, e.listener);
        this.m_rgListeners = [];
      }
    }
    function d(e) {
      return Object(n.a)(this, void 0, void 0, function* () {
        let t = [];
        const r = Object.keys(e);
        r.forEach((r) => t.push(e[r]));
        return (yield Promise.all(t)).reduce(
          (e, t, n) => ((e[r[n]] = t), e),
          {}
        );
      });
    }
  },
  r64O: function (e, t, r) {
    "use strict";
    function n(e, t, ...r) {
      console.assert
        ? 0 == r.length
          ? console.assert(!!e, t)
          : console.assert(!!e, t, ...r)
        : e || console.warn(t, ...r);
    }
    r.d(t, "a", function () {
      return n;
    });
  },
  sRB7: function (e, t, r) {
    "use strict";
    r.d(t, "f", function () {
      return o;
    }),
      r.d(t, "d", function () {
        return E;
      }),
      r.d(t, "c", function () {
        return x;
      }),
      r.d(t, "g", function () {
        return z;
      }),
      r.d(t, "a", function () {
        return R;
      }),
      r.d(t, "b", function () {
        return L;
      }),
      r.d(t, "e", function () {
        return F;
      });
    var n = r("hRO2"),
      i = r("OS8t");
    r("SvTV"), r("li7h");
    const a = n.Message;
    class s extends a {
      constructor(e = null) {
        super(),
          s.prototype.type || i.a(s.M()),
          a.initialize(this, e, 0, -1, [3], null);
      }
      static M() {
        return (
          s.sm_m ||
            (s.sm_m = {
              proto: s,
              fields: {
                type: { n: 1, br: i.d.readString, bw: i.h.writeString },
                rating: { n: 2, br: i.d.readString, bw: i.h.writeString },
                descriptors: {
                  n: 3,
                  r: !0,
                  q: !0,
                  br: i.d.readString,
                  bw: i.h.writeRepeatedString,
                },
                interactive_elements: {
                  n: 4,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                required_age: { n: 10, br: i.d.readInt32, bw: i.h.writeInt32 },
                use_age_gate: { n: 11, br: i.d.readBool, bw: i.h.writeBool },
                image_url: { n: 20, br: i.d.readString, bw: i.h.writeString },
                image_target: {
                  n: 21,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
              },
            }),
          s.sm_m
        );
      }
      static MBF() {
        return s.sm_mbf || (s.sm_mbf = i.e(s.M())), s.sm_mbf;
      }
      toObject(e = !1) {
        return s.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(s.M(), e, t);
      }
      static fromObject(e) {
        return i.c(s.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new s();
        return s.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(s.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return s.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(s.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return s.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreGameRating";
      }
    }
    class o extends a {
      constructor(e = null) {
        super(),
          o.prototype.item_type || i.a(o.M()),
          a.initialize(this, e, 0, -1, [11, 12, 20, 21, 25, 41, 42, 52], null);
      }
      static M() {
        return (
          o.sm_m ||
            (o.sm_m = {
              proto: o,
              fields: {
                item_type: { n: 1, br: i.d.readEnum, bw: i.h.writeEnum },
                id: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                success: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
                visible: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                unvailable_for_country_restriction: {
                  n: 5,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                name: { n: 6, br: i.d.readString, bw: i.h.writeString },
                store_url_path: {
                  n: 7,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                appid: { n: 9, br: i.d.readUint32, bw: i.h.writeUint32 },
                type: { n: 10, br: i.d.readEnum, bw: i.h.writeEnum },
                included_types: {
                  n: 11,
                  r: !0,
                  q: !0,
                  br: i.d.readEnum,
                  bw: i.h.writeRepeatedEnum,
                },
                included_appids: {
                  n: 12,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
                is_free: { n: 13, br: i.d.readBool, bw: i.h.writeBool },
                is_early_access: { n: 14, br: i.d.readBool, bw: i.h.writeBool },
                related_items: { n: 15, c: c },
                content_descriptorids: {
                  n: 20,
                  r: !0,
                  q: !0,
                  br: i.d.readEnum,
                  bw: i.h.writeRepeatedEnum,
                },
                tagids: {
                  n: 21,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
                categories: { n: 22, c: l },
                reviews: { n: 23, c: u },
                basic_info: { n: 24, c: m },
                tags: { n: 25, c: _, r: !0, q: !0 },
                assets: { n: 30, c: b },
                release: { n: 31, c: g },
                platforms: { n: 32, c: f },
                game_rating: { n: 33, c: s },
                best_purchase_option: { n: 40, c: w },
                purchase_options: { n: 41, c: w, r: !0, q: !0 },
                accessories: { n: 42, c: w, r: !0, q: !0 },
                screenshots: { n: 50, c: B },
                trailers: { n: 51, c: S },
                supported_languages: { n: 52, c: k, r: !0, q: !0 },
              },
            }),
          o.sm_m
        );
      }
      static MBF() {
        return o.sm_mbf || (o.sm_mbf = i.e(o.M())), o.sm_mbf;
      }
      toObject(e = !1) {
        return o.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(o.M(), e, t);
      }
      static fromObject(e) {
        return i.c(o.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new o();
        return o.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(o.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return o.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(o.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return o.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem";
      }
    }
    class c extends a {
      constructor(e = null) {
        super(),
          c.prototype.parent_appid || i.a(c.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          c.sm_m ||
            (c.sm_m = {
              proto: c,
              fields: {
                parent_appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
              },
            }),
          c.sm_m
        );
      }
      static MBF() {
        return c.sm_mbf || (c.sm_mbf = i.e(c.M())), c.sm_mbf;
      }
      toObject(e = !1) {
        return c.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(c.M(), e, t);
      }
      static fromObject(e) {
        return i.c(c.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new c();
        return c.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(c.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(c.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return c.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_RelatedItems";
      }
    }
    class l extends a {
      constructor(e = null) {
        super(),
          l.prototype.supported_player_categoryids || i.a(l.M()),
          a.initialize(this, e, 0, -1, [2, 3, 4], null);
      }
      static M() {
        return (
          l.sm_m ||
            (l.sm_m = {
              proto: l,
              fields: {
                supported_player_categoryids: {
                  n: 2,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
                feature_categoryids: {
                  n: 3,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
                controller_categoryids: {
                  n: 4,
                  r: !0,
                  q: !0,
                  br: i.d.readUint32,
                  bw: i.h.writeRepeatedUint32,
                },
              },
            }),
          l.sm_m
        );
      }
      static MBF() {
        return l.sm_mbf || (l.sm_mbf = i.e(l.M())), l.sm_mbf;
      }
      toObject(e = !1) {
        return l.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(l.M(), e, t);
      }
      static fromObject(e) {
        return i.c(l.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new l();
        return l.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(l.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(l.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return l.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Categories";
      }
    }
    class u extends a {
      constructor(e = null) {
        super(),
          u.prototype.summary_filtered || i.a(u.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          u.sm_m ||
            (u.sm_m = {
              proto: u,
              fields: {
                summary_filtered: { n: 1, c: d },
                summary_unfiltered: { n: 2, c: d },
              },
            }),
          u.sm_m
        );
      }
      static MBF() {
        return u.sm_mbf || (u.sm_mbf = i.e(u.M())), u.sm_mbf;
      }
      toObject(e = !1) {
        return u.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(u.M(), e, t);
      }
      static fromObject(e) {
        return i.c(u.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new u();
        return u.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(u.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(u.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return u.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Reviews";
      }
    }
    class d extends a {
      constructor(e = null) {
        super(),
          d.prototype.review_count || i.a(d.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          d.sm_m ||
            (d.sm_m = {
              proto: d,
              fields: {
                review_count: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                percent_positive: {
                  n: 2,
                  br: i.d.readInt32,
                  bw: i.h.writeInt32,
                },
                review_score: { n: 3, br: i.d.readEnum, bw: i.h.writeEnum },
                review_score_label: {
                  n: 4,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
              },
            }),
          d.sm_m
        );
      }
      static MBF() {
        return d.sm_mbf || (d.sm_mbf = i.e(d.M())), d.sm_mbf;
      }
      toObject(e = !1) {
        return d.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(d.M(), e, t);
      }
      static fromObject(e) {
        return i.c(d.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new d();
        return d.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(d.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(d.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return d.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Reviews_StoreReviewSummary";
      }
    }
    class m extends a {
      constructor(e = null) {
        super(),
          m.prototype.short_description || i.a(m.M()),
          a.initialize(this, e, 0, -1, [2, 3, 4], null);
      }
      static M() {
        return (
          m.sm_m ||
            (m.sm_m = {
              proto: m,
              fields: {
                short_description: {
                  n: 1,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                publishers: { n: 2, c: h, r: !0, q: !0 },
                developers: { n: 3, c: h, r: !0, q: !0 },
                franchises: { n: 4, c: h, r: !0, q: !0 },
              },
            }),
          m.sm_m
        );
      }
      static MBF() {
        return m.sm_mbf || (m.sm_mbf = i.e(m.M())), m.sm_mbf;
      }
      toObject(e = !1) {
        return m.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(m.M(), e, t);
      }
      static fromObject(e) {
        return i.c(m.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new m();
        return m.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(m.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(m.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return m.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_BasicInfo";
      }
    }
    class h extends a {
      constructor(e = null) {
        super(),
          h.prototype.name || i.a(h.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          h.sm_m ||
            (h.sm_m = {
              proto: h,
              fields: {
                name: { n: 1, br: i.d.readString, bw: i.h.writeString },
                creator_clan_account_id: {
                  n: 2,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
              },
            }),
          h.sm_m
        );
      }
      static MBF() {
        return h.sm_mbf || (h.sm_mbf = i.e(h.M())), h.sm_mbf;
      }
      toObject(e = !1) {
        return h.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(h.M(), e, t);
      }
      static fromObject(e) {
        return i.c(h.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new h();
        return h.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(h.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return h.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(h.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return h.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_BasicInfo_CreatorHomeLink";
      }
    }
    class _ extends a {
      constructor(e = null) {
        super(),
          _.prototype.tagid || i.a(_.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          _.sm_m ||
            (_.sm_m = {
              proto: _,
              fields: {
                tagid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                weight: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
              },
            }),
          _.sm_m
        );
      }
      static MBF() {
        return _.sm_mbf || (_.sm_mbf = i.e(_.M())), _.sm_mbf;
      }
      toObject(e = !1) {
        return _.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(_.M(), e, t);
      }
      static fromObject(e) {
        return i.c(_.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new _();
        return _.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(_.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return _.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(_.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return _.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Tag";
      }
    }
    class b extends a {
      constructor(e = null) {
        super(),
          b.prototype.asset_url_format || i.a(b.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          b.sm_m ||
            (b.sm_m = {
              proto: b,
              fields: {
                asset_url_format: {
                  n: 1,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                main_capsule: { n: 2, br: i.d.readString, bw: i.h.writeString },
                small_capsule: {
                  n: 3,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                header: { n: 4, br: i.d.readString, bw: i.h.writeString },
                package_header: {
                  n: 5,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                page_background: {
                  n: 6,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                hero_capsule: { n: 7, br: i.d.readString, bw: i.h.writeString },
                hero_capsule_2x: {
                  n: 8,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                library_capsule: {
                  n: 9,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                library_capsule_2x: {
                  n: 10,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                library_hero: {
                  n: 11,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                library_hero_2x: {
                  n: 12,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                community_icon: {
                  n: 13,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
              },
            }),
          b.sm_m
        );
      }
      static MBF() {
        return b.sm_mbf || (b.sm_mbf = i.e(b.M())), b.sm_mbf;
      }
      toObject(e = !1) {
        return b.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(b.M(), e, t);
      }
      static fromObject(e) {
        return i.c(b.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new b();
        return b.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(b.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return b.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(b.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return b.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Assets";
      }
    }
    class g extends a {
      constructor(e = null) {
        super(),
          g.prototype.steam_release_date || i.a(g.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          g.sm_m ||
            (g.sm_m = {
              proto: g,
              fields: {
                steam_release_date: {
                  n: 1,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                original_release_date: {
                  n: 2,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                original_steam_release_date: {
                  n: 3,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                is_coming_soon: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
                is_preload: { n: 5, br: i.d.readBool, bw: i.h.writeBool },
                custom_release_date_message: {
                  n: 6,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                is_abridged_release_date: {
                  n: 7,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                is_early_access: { n: 10, br: i.d.readBool, bw: i.h.writeBool },
                mac_release_date: {
                  n: 20,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
                linux_release_date: {
                  n: 21,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
              },
            }),
          g.sm_m
        );
      }
      static MBF() {
        return g.sm_mbf || (g.sm_mbf = i.e(g.M())), g.sm_mbf;
      }
      toObject(e = !1) {
        return g.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(g.M(), e, t);
      }
      static fromObject(e) {
        return i.c(g.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new g();
        return g.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(g.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return g.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(g.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return g.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_ReleaseInfo";
      }
    }
    class f extends a {
      constructor(e = null) {
        super(),
          f.prototype.windows || i.a(f.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          f.sm_m ||
            (f.sm_m = {
              proto: f,
              fields: {
                windows: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                mac: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                linux: { n: 3, br: i.d.readBool, bw: i.h.writeBool },
                vr_support: { n: 10, c: p },
                steam_deck_compat_category: {
                  n: 11,
                  br: i.d.readEnum,
                  bw: i.h.writeEnum,
                },
              },
            }),
          f.sm_m
        );
      }
      static MBF() {
        return f.sm_mbf || (f.sm_mbf = i.e(f.M())), f.sm_mbf;
      }
      toObject(e = !1) {
        return f.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(f.M(), e, t);
      }
      static fromObject(e) {
        return i.c(f.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new f();
        return f.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(f.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return f.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(f.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return f.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Platforms";
      }
    }
    class p extends a {
      constructor(e = null) {
        super(),
          p.prototype.vrhmd || i.a(p.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          p.sm_m ||
            (p.sm_m = {
              proto: p,
              fields: {
                vrhmd: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                vrhmd_only: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                htc_vive: { n: 40, br: i.d.readBool, bw: i.h.writeBool },
                oculus_rift: { n: 41, br: i.d.readBool, bw: i.h.writeBool },
                windows_mr: { n: 42, br: i.d.readBool, bw: i.h.writeBool },
                valve_index: { n: 43, br: i.d.readBool, bw: i.h.writeBool },
              },
            }),
          p.sm_m
        );
      }
      static MBF() {
        return p.sm_mbf || (p.sm_mbf = i.e(p.M())), p.sm_mbf;
      }
      toObject(e = !1) {
        return p.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(p.M(), e, t);
      }
      static fromObject(e) {
        return i.c(p.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new p();
        return p.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(p.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return p.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(p.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return p.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Platforms_VRSupport";
      }
    }
    class w extends a {
      constructor(e = null) {
        super(),
          w.prototype.packageid || i.a(w.M()),
          a.initialize(this, e, 0, -1, [20, 21, 22], null);
      }
      static M() {
        return (
          w.sm_m ||
            (w.sm_m = {
              proto: w,
              fields: {
                packageid: { n: 1, br: i.d.readInt32, bw: i.h.writeInt32 },
                bundleid: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                purchase_option_name: {
                  n: 3,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                final_price_in_cents: {
                  n: 5,
                  br: i.d.readInt64String,
                  bw: i.h.writeInt64String,
                },
                original_price_in_cents: {
                  n: 6,
                  br: i.d.readInt64String,
                  bw: i.h.writeInt64String,
                },
                user_final_price_in_cents: {
                  n: 7,
                  br: i.d.readInt64String,
                  bw: i.h.writeInt64String,
                },
                formatted_final_price: {
                  n: 8,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                formatted_original_price: {
                  n: 9,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                discount_pct: { n: 10, br: i.d.readInt32, bw: i.h.writeInt32 },
                user_discount_pct: {
                  n: 11,
                  br: i.d.readInt32,
                  bw: i.h.writeInt32,
                },
                bundle_discount_pct: {
                  n: 12,
                  br: i.d.readInt32,
                  bw: i.h.writeInt32,
                },
                active_discounts: { n: 20, c: y, r: !0, q: !0 },
                user_active_discounts: { n: 21, c: y, r: !0, q: !0 },
                inactive_discounts: { n: 22, c: y, r: !0, q: !0 },
                user_can_purchase: {
                  n: 30,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                user_can_purchase_as_gift: {
                  n: 31,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                is_commercial_license: {
                  n: 40,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
              },
            }),
          w.sm_m
        );
      }
      static MBF() {
        return w.sm_mbf || (w.sm_mbf = i.e(w.M())), w.sm_mbf;
      }
      toObject(e = !1) {
        return w.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(w.M(), e, t);
      }
      static fromObject(e) {
        return i.c(w.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new w();
        return w.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(w.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return w.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(w.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return w.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_PurchaseOption";
      }
    }
    class y extends a {
      constructor(e = null) {
        super(),
          y.prototype.discount_amount || i.a(y.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          y.sm_m ||
            (y.sm_m = {
              proto: y,
              fields: {
                discount_amount: {
                  n: 1,
                  br: i.d.readInt64String,
                  bw: i.h.writeInt64String,
                },
                discount_description: {
                  n: 2,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                discount_end_date: {
                  n: 3,
                  br: i.d.readUint32,
                  bw: i.h.writeUint32,
                },
              },
            }),
          y.sm_m
        );
      }
      static MBF() {
        return y.sm_mbf || (y.sm_mbf = i.e(y.M())), y.sm_mbf;
      }
      toObject(e = !1) {
        return y.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(y.M(), e, t);
      }
      static fromObject(e) {
        return i.c(y.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new y();
        return y.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(y.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return y.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(y.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return y.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_PurchaseOption_Discount";
      }
    }
    class B extends a {
      constructor(e = null) {
        super(),
          B.prototype.all_ages_screenshots || i.a(B.M()),
          a.initialize(this, e, 0, -1, [2, 3], null);
      }
      static M() {
        return (
          B.sm_m ||
            (B.sm_m = {
              proto: B,
              fields: {
                all_ages_screenshots: { n: 2, c: M, r: !0, q: !0 },
                mature_content_screenshots: { n: 3, c: M, r: !0, q: !0 },
              },
            }),
          B.sm_m
        );
      }
      static MBF() {
        return B.sm_mbf || (B.sm_mbf = i.e(B.M())), B.sm_mbf;
      }
      toObject(e = !1) {
        return B.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(B.M(), e, t);
      }
      static fromObject(e) {
        return i.c(B.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new B();
        return B.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(B.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return B.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(B.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return B.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Screenshots";
      }
    }
    class M extends a {
      constructor(e = null) {
        super(),
          M.prototype.filename || i.a(M.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          M.sm_m ||
            (M.sm_m = {
              proto: M,
              fields: {
                filename: { n: 1, br: i.d.readString, bw: i.h.writeString },
                ordinal: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
              },
            }),
          M.sm_m
        );
      }
      static MBF() {
        return M.sm_mbf || (M.sm_mbf = i.e(M.M())), M.sm_mbf;
      }
      toObject(e = !1) {
        return M.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(M.M(), e, t);
      }
      static fromObject(e) {
        return i.c(M.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new M();
        return M.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(M.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return M.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(M.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return M.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Screenshots_Screenshot";
      }
    }
    class S extends a {
      constructor(e = null) {
        super(),
          S.prototype.highlights || i.a(S.M()),
          a.initialize(this, e, 0, -1, [1, 2], null);
      }
      static M() {
        return (
          S.sm_m ||
            (S.sm_m = {
              proto: S,
              fields: {
                highlights: { n: 1, c: C, r: !0, q: !0 },
                other_trailers: { n: 2, c: C, r: !0, q: !0 },
              },
            }),
          S.sm_m
        );
      }
      static MBF() {
        return S.sm_mbf || (S.sm_mbf = i.e(S.M())), S.sm_mbf;
      }
      toObject(e = !1) {
        return S.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(S.M(), e, t);
      }
      static fromObject(e) {
        return i.c(S.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new S();
        return S.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(S.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return S.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(S.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return S.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Trailers";
      }
    }
    class v extends a {
      constructor(e = null) {
        super(),
          v.prototype.filename || i.a(v.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          v.sm_m ||
            (v.sm_m = {
              proto: v,
              fields: {
                filename: { n: 1, br: i.d.readString, bw: i.h.writeString },
                type: { n: 2, br: i.d.readString, bw: i.h.writeString },
              },
            }),
          v.sm_m
        );
      }
      static MBF() {
        return v.sm_mbf || (v.sm_mbf = i.e(v.M())), v.sm_mbf;
      }
      toObject(e = !1) {
        return v.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(v.M(), e, t);
      }
      static fromObject(e) {
        return i.c(v.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new v();
        return v.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(v.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return v.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(v.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return v.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Trailers_VideoSource";
      }
    }
    class C extends a {
      constructor(e = null) {
        super(),
          C.prototype.trailer_name || i.a(C.M()),
          a.initialize(this, e, 0, -1, [3, 4, 5], null);
      }
      static M() {
        return (
          C.sm_m ||
            (C.sm_m = {
              proto: C,
              fields: {
                trailer_name: { n: 1, br: i.d.readString, bw: i.h.writeString },
                trailer_url_format: {
                  n: 2,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                trailer_480p: { n: 3, c: v, r: !0, q: !0 },
                trailer_max: { n: 4, c: v, r: !0, q: !0 },
                microtrailer: { n: 5, c: v, r: !0, q: !0 },
                screenshot_medium: {
                  n: 10,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                screenshot_full: {
                  n: 11,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                trailer_base_id: {
                  n: 12,
                  br: i.d.readInt32,
                  bw: i.h.writeInt32,
                },
              },
            }),
          C.sm_m
        );
      }
      static MBF() {
        return C.sm_mbf || (C.sm_mbf = i.e(C.M())), C.sm_mbf;
      }
      toObject(e = !1) {
        return C.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(C.M(), e, t);
      }
      static fromObject(e) {
        return i.c(C.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new C();
        return C.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(C.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return C.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(C.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return C.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_Trailers_Trailer";
      }
    }
    class k extends a {
      constructor(e = null) {
        super(),
          k.prototype.elanguage || i.a(k.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          k.sm_m ||
            (k.sm_m = {
              proto: k,
              fields: {
                elanguage: { n: 1, br: i.d.readInt32, bw: i.h.writeInt32 },
                supported: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                full_audio: { n: 3, br: i.d.readBool, bw: i.h.writeBool },
                subtitles: { n: 4, br: i.d.readBool, bw: i.h.writeBool },
              },
            }),
          k.sm_m
        );
      }
      static MBF() {
        return k.sm_mbf || (k.sm_mbf = i.e(k.M())), k.sm_mbf;
      }
      toObject(e = !1) {
        return k.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(k.M(), e, t);
      }
      static fromObject(e) {
        return i.c(k.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new k();
        return k.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(k.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return k.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(k.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return k.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItem_SupportedLanguage";
      }
    }
    class E extends a {
      constructor(e = null) {
        super(),
          E.prototype.include_assets || i.a(E.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          E.sm_m ||
            (E.sm_m = {
              proto: E,
              fields: {
                include_assets: { n: 1, br: i.d.readBool, bw: i.h.writeBool },
                include_release: { n: 2, br: i.d.readBool, bw: i.h.writeBool },
                include_platforms: {
                  n: 3,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                include_all_purchase_options: {
                  n: 4,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                include_screenshots: {
                  n: 5,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                include_trailers: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
                include_ratings: { n: 7, br: i.d.readBool, bw: i.h.writeBool },
                include_tag_count: {
                  n: 8,
                  br: i.d.readInt32,
                  bw: i.h.writeInt32,
                },
                include_reviews: { n: 9, br: i.d.readBool, bw: i.h.writeBool },
                include_basic_info: {
                  n: 10,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
                include_supported_languages: {
                  n: 11,
                  br: i.d.readBool,
                  bw: i.h.writeBool,
                },
              },
            }),
          E.sm_m
        );
      }
      static MBF() {
        return E.sm_mbf || (E.sm_mbf = i.e(E.M())), E.sm_mbf;
      }
      toObject(e = !1) {
        return E.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(E.M(), e, t);
      }
      static fromObject(e) {
        return i.c(E.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new E();
        return E.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(E.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return E.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(E.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return E.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreBrowseItemDataRequest";
      }
    }
    class x extends a {
      constructor(e = null) {
        super(),
          x.prototype.language || i.a(x.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          x.sm_m ||
            (x.sm_m = {
              proto: x,
              fields: {
                language: { n: 1, br: i.d.readString, bw: i.h.writeString },
                elanguage: { n: 2, br: i.d.readInt32, bw: i.h.writeInt32 },
                country_code: { n: 3, br: i.d.readString, bw: i.h.writeString },
                steam_realm: { n: 4, br: i.d.readInt32, bw: i.h.writeInt32 },
              },
            }),
          x.sm_m
        );
      }
      static MBF() {
        return x.sm_mbf || (x.sm_mbf = i.e(x.M())), x.sm_mbf;
      }
      toObject(e = !1) {
        return x.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(x.M(), e, t);
      }
      static fromObject(e) {
        return i.c(x.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new x();
        return x.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(x.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return x.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(x.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return x.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreBrowseContext";
      }
    }
    class z extends a {
      constructor(e = null) {
        super(),
          z.prototype.appid || i.a(z.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          z.sm_m ||
            (z.sm_m = {
              proto: z,
              fields: {
                appid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                packageid: { n: 2, br: i.d.readUint32, bw: i.h.writeUint32 },
                bundleid: { n: 3, br: i.d.readUint32, bw: i.h.writeUint32 },
              },
            }),
          z.sm_m
        );
      }
      static MBF() {
        return z.sm_mbf || (z.sm_mbf = i.e(z.M())), z.sm_mbf;
      }
      toObject(e = !1) {
        return z.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(z.M(), e, t);
      }
      static fromObject(e) {
        return i.c(z.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new z();
        return z.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(z.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return z.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(z.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return z.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "StoreItemID";
      }
    }
    class R extends a {
      constructor(e = null) {
        super(),
          R.prototype.ids || i.a(R.M()),
          a.initialize(this, e, 0, -1, [1], null);
      }
      static M() {
        return (
          R.sm_m ||
            (R.sm_m = {
              proto: R,
              fields: {
                ids: { n: 1, c: z, r: !0, q: !0 },
                context: { n: 2, c: x },
                data_request: { n: 3, c: E },
              },
            }),
          R.sm_m
        );
      }
      static MBF() {
        return R.sm_mbf || (R.sm_mbf = i.e(R.M())), R.sm_mbf;
      }
      toObject(e = !1) {
        return R.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(R.M(), e, t);
      }
      static fromObject(e) {
        return i.c(R.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new R();
        return R.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(R.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return R.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(R.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return R.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CStoreBrowse_GetItems_Request";
      }
    }
    class L extends a {
      constructor(e = null) {
        super(),
          L.prototype.store_items || i.a(L.M()),
          a.initialize(this, e, 0, -1, [1], null);
      }
      static M() {
        return (
          L.sm_m ||
            (L.sm_m = {
              proto: L,
              fields: { store_items: { n: 1, c: o, r: !0, q: !0 } },
            }),
          L.sm_m
        );
      }
      static MBF() {
        return L.sm_mbf || (L.sm_mbf = i.e(L.M())), L.sm_mbf;
      }
      toObject(e = !1) {
        return L.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(L.M(), e, t);
      }
      static fromObject(e) {
        return i.c(L.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new L();
        return L.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(L.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return L.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(L.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return L.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CStoreBrowse_GetItems_Response";
      }
    }
    class O extends a {
      constructor(e = null) {
        super(),
          O.prototype.categories || i.a(O.M()),
          a.initialize(this, e, 0, -1, [1], null);
      }
      static M() {
        return (
          O.sm_m ||
            (O.sm_m = {
              proto: O,
              fields: { categories: { n: 1, c: T, r: !0, q: !0 } },
            }),
          O.sm_m
        );
      }
      static MBF() {
        return O.sm_mbf || (O.sm_mbf = i.e(O.M())), O.sm_mbf;
      }
      toObject(e = !1) {
        return O.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(O.M(), e, t);
      }
      static fromObject(e) {
        return i.c(O.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new O();
        return O.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(O.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return O.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(O.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return O.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CStoreBrowse_GetStoreCategories_Response";
      }
    }
    class T extends a {
      constructor(e = null) {
        super(),
          T.prototype.categoryid || i.a(T.M()),
          a.initialize(this, e, 0, -1, void 0, null);
      }
      static M() {
        return (
          T.sm_m ||
            (T.sm_m = {
              proto: T,
              fields: {
                categoryid: { n: 1, br: i.d.readUint32, bw: i.h.writeUint32 },
                type: { n: 2, br: i.d.readEnum, bw: i.h.writeEnum },
                internal_name: {
                  n: 3,
                  br: i.d.readString,
                  bw: i.h.writeString,
                },
                display_name: { n: 4, br: i.d.readString, bw: i.h.writeString },
                image_url: { n: 5, br: i.d.readString, bw: i.h.writeString },
                show_in_search: { n: 6, br: i.d.readBool, bw: i.h.writeBool },
              },
            }),
          T.sm_m
        );
      }
      static MBF() {
        return T.sm_mbf || (T.sm_mbf = i.e(T.M())), T.sm_mbf;
      }
      toObject(e = !1) {
        return T.toObject(e, this);
      }
      static toObject(e, t) {
        return i.g(T.M(), e, t);
      }
      static fromObject(e) {
        return i.c(T.M(), e);
      }
      static deserializeBinary(e) {
        let t = new n.BinaryReader(e),
          r = new T();
        return T.deserializeBinaryFromReader(r, t);
      }
      static deserializeBinaryFromReader(e, t) {
        return i.b(T.MBF(), e, t);
      }
      serializeBinary() {
        var e = new n.BinaryWriter();
        return T.serializeBinaryToWriter(this, e), e.getResultBuffer();
      }
      static serializeBinaryToWriter(e, t) {
        i.f(T.M(), e, t);
      }
      serializeBase64String() {
        var e = new n.BinaryWriter();
        return T.serializeBinaryToWriter(this, e), e.getResultBase64String();
      }
      getClassName() {
        return "CStoreBrowse_GetStoreCategories_Response_Category";
      }
    }
    var F;
    !(function (e) {
      (e.GetItems = function (e, t) {
        return e.SendMsg("StoreBrowse.GetItems#1", t, L, {
          bConstMethod: !0,
          ePrivilege: 2,
          eWebAPIKeyRequirement: 1,
        });
      }),
        (e.GetStoreCategories = function (e, t) {
          return e.SendMsg("StoreBrowse.GetStoreCategories#1", t, O, {
            bConstMethod: !0,
            ePrivilege: 0,
            eWebAPIKeyRequirement: 1,
          });
        });
    })(F || (F = {}));
  },
  tVvj: function (e, t, r) {
    "use strict";
    r.r(t);
    var n = r("q1tI"),
      i = r("i8i4"),
      a = r("exH9");
    r("idvb"), r("o36Y");
    function s(e, t) {
      let r = document.createElement("link");
      (r.href = e), (r.type = "text/css"), (r.rel = "stylesheet");
      let n = t.parentElement;
      n.insertBefore(r, t), n.removeChild(t);
    }
    var o = r("miow"),
      c = r.n(o),
      l = r("0OaU"),
      u = r("FMQ2"),
      d = r("5LhG"),
      m = r.n(d),
      h = r("lkRc"),
      _ = r("mwcN"),
      b = r("TX96");
    const g = n.lazy(() =>
        Promise.all([r.e(0), r.e(1), r.e(2), r.e(7)]).then(r.bind(null, "KKYZ"))
      ),
      f = n.lazy(() =>
        Promise.all([r.e(0), r.e(1), r.e(38)]).then(r.bind(null, "v6T8"))
      ),
      p = n.lazy(() =>
        Promise.all([r.e(0), r.e(1), r.e(2), r.e(39)]).then(
          r.bind(null, "fFDD")
        )
      ),
      w = document.getElementById("root"),
      y = (function () {
        const e = "steam-firstclientrun";
        return (
          null == sessionStorage.getItem(e) &&
          (sessionStorage.setItem(e, "ran"), !0)
        );
      })();
    function B(e) {
      return n.createElement(
        "div",
        { className: Object(a.a)(c.a.Container, c.a.PreloadThrobber) },
        n.createElement(l.a, { size: "xlarge", static: !0 }),
        n.createElement(
          "div",
          { className: c.a.ThreeDots },
          n.createElement("div", { className: Object(a.a)(c.a.Dot, c.a.Dot1) }),
          n.createElement("div", { className: Object(a.a)(c.a.Dot, c.a.Dot2) }),
          n.createElement("div", { className: Object(a.a)(c.a.Dot, c.a.Dot3) })
        )
      );
    }
    SteamClient._internal.RegisterForStyleChanges(function (e) {
      const t = "https://steamloopback.host/";
      let r = [],
        n = document.querySelectorAll('link[rel="stylesheet"]');
      for (let i = 0; i < n.length; i++) {
        let a = n[i],
          s = a.href,
          o = "";
        s.startsWith(t) && (o = s.substr(t.length));
        let c = o.indexOf("?");
        c >= 0 && (o = o.substr(0, c));
        for (let t of e)
          if (o == t) {
            r.push({ sheet: a, newRelative: t });
            break;
          }
      }
      for (let e of r) s(e.newRelative, e.sheet);
    });
    class M extends n.Component {
      constructor(e) {
        super(e), Object(_.a)(), (h.c.IN_LIBRARY = !0), (this.cm = new b.a());
      }
      render() {
        return h.c.IN_LOGIN
          ? n.createElement(
              n.Suspense,
              { fallback: n.createElement(B, null) },
              n.createElement(f, { cm: this.cm })
            )
          : h.c.IN_GAMEPADUI
          ? n.createElement(S, { cm: this.cm })
          : n.createElement(
              n.Suspense,
              { fallback: n.createElement(B, null) },
              n.createElement(g, { cm: this.cm })
            );
      }
    }
    function S(e) {
      const [t, r] = n.useState(y),
        i = n.useCallback(() => r(!1), []);
      return n.createElement(
        n.Fragment,
        null,
        t &&
          !h.c.IN_STANDALONE_KEYBOARD &&
          n.createElement(u.a, {
            strOverrideStartupMovie: m.a,
            onVideoComplete: i,
          }),
        n.createElement(
          n.Suspense,
          { fallback: null },
          n.createElement(p, {
            cm: e.cm,
            bPlayingStartupMovie: t && !h.c.IN_STANDALONE_KEYBOARD,
          })
        )
      );
    }
    var v;
    (v = M), i.render(n.createElement(v, null), w);
  },
});
//# sourceMappingURL=library.js.map
