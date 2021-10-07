export default () => {
    return (
        `<!doctype html>
        <html lang="en">
        
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width,initial-scale=1">
            <meta name="theme-color" content="#000000">
            <link rel="manifest" href="/manifest.json">
            <link rel="shortcut icon" href="/favicon.ico">
            <title>React Scheduler Tutorial</title>
            <style>
                body,
                button,
                input,
                p,
                select,
                td {
                    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    font-size: 14px
                }
                
                body {
                    padding: 0;
                    margin: 0;
                    background-color: #fff
                }
                
                a {
                    color: #1155a3
                }
                
                .space {
                    margin: 10px 0 10px 0
                }
                
                .header {
                    box-sizing: border-box;
                    background: #003267;
                    background: linear-gradient(to right, #011329 0, #00639e 44%, #011329 100%);
                    padding: 20px 10px;
                    width: 100%;
                    color: #fff;
                    box-shadow: 0 0 10px 5px rgba(0, 0, 0, .75)
                }
                
                .header a {
                    color: #fff
                }
                
                .header h1 a {
                    text-decoration: none
                }
                
                .header h1 {
                    padding: 0;
                    margin: 0
                }
                
                .main {
                    padding: 10px;
                    margin-top: 10px
                }
                
                .generated {
                    color: #999;
                    margin-top: 10px
                }
                
                .generated a {
                    color: #999
                }
                
                button {
                    padding: 5px 10px
                }
            </style>
            <link href="static/css/main.82e0d2d7.chunk.css" rel="stylesheet">
        </head>
        
        <body><noscript>You need to enable JavaScript to run this app.</noscript>
            <div>
                <div class="header">
                    <h1><a href="https://code.daypilot.org/77607/react-scheduler-tutorial">React Scheduler Tutorial</a></h1>
                    <div><a href="https://javascript.daypilot.org/">DayPilot for JavaScript</a> - AJAX Calendar/Scheduling Components for JavaScript/HTML5/jQuery/Angular/React</div>
                </div>
                <div class="main">
                    <div id="root"></div>
                    <div class="generated">Generated using <a href="https://builder.daypilot.org/">DayPilot UI Builder</a>.</div>
                </div>
            </div>
            <script>
                ! function(e) {
                    function r(r) {
                        for (var n, a, i = r[0], c = r[1], l = r[2], s = 0, p = []; s < i.length; s++) a = i[s], Object.prototype.hasOwnProperty.call(o, a) && o[a] && p.push(o[a][0]), o[a] = 0;
                        for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
                        for (f && f(r); p.length;) p.shift()();
                        return u.push.apply(u, l || []), t()
                    }
        
                    function t() {
                        for (var e, r = 0; r < u.length; r++) {
                            for (var t = u[r], n = !0, i = 1; i < t.length; i++) {
                                var c = t[i];
                                0 !== o[c] && (n = !1)
                            }
                            n && (u.splice(r--, 1), e = a(a.s = t[0]))
                        }
                        return e
                    }
                    var n = {},
                        o = {
                            1: 0
                        },
                        u = [];
        
                    function a(r) {
                        if (n[r]) return n[r].exports;
                        var t = n[r] = {
                            i: r,
                            l: !1,
                            exports: {}
                        };
                        return e[r].call(t.exports, t, t.exports, a), t.l = !0, t.exports
                    }
                    a.e = function(e) {
                        var r = [],
                            t = o[e];
                        if (0 !== t)
                            if (t) r.push(t[2]);
                            else {
                                var n = new Promise((function(r, n) {
                                    t = o[e] = [r, n]
                                }));
                                r.push(t[2] = n);
                                var u, i = document.createElement("script");
                                i.charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.src = function(e) {
                                    return a.p + "static/js/" + ({}[e] || e) + "." + {
                                        3: "d433dc52"
                                    }[e] + ".chunk.js"
                                }(e);
                                var c = new Error;
                                u = function(r) {
                                    i.onerror = i.onload = null, clearTimeout(l);
                                    var t = o[e];
                                    if (0 !== t) {
                                        if (t) {
                                            var n = r && ("load" === r.type ? "missing" : r.type),
                                                u = r && r.target && r.target.src;
                                            c.message = "Loading chunk " + e + " failed.\n(" + n + ": " + u + ")", c.name = "ChunkLoadError", c.type = n, c.request = u, t[1](c)
                                        }
                                        o[e] = void 0
                                    }
                                };
                                var l = setTimeout((function() {
                                    u({
                                        type: "timeout",
                                        target: i
                                    })
                                }), 12e4);
                                i.onerror = i.onload = u, document.head.appendChild(i)
                            }
                        return Promise.all(r)
                    }, a.m = e, a.c = n, a.d = function(e, r, t) {
                        a.o(e, r) || Object.defineProperty(e, r, {
                            enumerable: !0,
                            get: t
                        })
                    }, a.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, a.t = function(e, r) {
                        if (1 & r && (e = a(e)), 8 & r) return e;
                        if (4 & r && "object" == typeof e && e && e.__esModule) return e;
                        var t = Object.create(null);
                        if (a.r(t), Object.defineProperty(t, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & r && "string" != typeof e)
                            for (var n in e) a.d(t, n, function(r) {
                                return e[r]
                            }.bind(null, n));
                        return t
                    }, a.n = function(e) {
                        var r = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return a.d(r, "a", r), r
                    }, a.o = function(e, r) {
                        return Object.prototype.hasOwnProperty.call(e, r)
                    }, a.p = "/", a.oe = function(e) {
                        throw console.error(e), e
                    };
                    var i = this["webpackJsonpreact-scheduler"] = this["webpackJsonpreact-scheduler"] || [],
                        c = i.push.bind(i);
                    i.push = r, i = i.slice();
                    for (var l = 0; l < i.length; l++) r(i[l]);
                    var f = c;
                    t()
                }([])
            </script>
            <script src="assets/static/js/2.b1e27847.chunk.js"></script>
            <script src="assets/static/js/main.af9fb213.chunk.js"></script>
            <script src="test.js"></script>
            <script>
            // document.getElementById("root").innerHTML = "OK"
            </script>
        </body>
        
        </html>`
    )
}