function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * Notifications API Manager
 * Handles fetching notifications and announcements from server safely
 */

window.NotificationsAPI = {
  /**
   * Fetch notifications and announcements
   * @param {Object} options - Fetch options
   * @returns {Promise<Object>}
   */
  fetchContent: function fetchContent() {
    var _arguments = arguments,
      _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _window$Notifications, _window$LoyaltyStorag, _window$Notifications2;
      var options, config, baseURL, endpoint, params, userData, url, _window$Notifications3, response, contentType, data, text, _window$Notifications4, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            options = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
            config = ((_window$Notifications = window.NotificationsConfig) === null || _window$Notifications === void 0 ? void 0 : _window$Notifications.api) || {};
            baseURL = typeof config.baseURL === 'function' ? config.baseURL() : config.baseURL || 'https://bh.shabakaty.site';
            endpoint = config.endpoint || '/api/v1/public/content'; // Build URL with query parameters
            params = new URLSearchParams(); // Add user_token if available (from LoyaltyStorage)
            if (options.userToken) {
              params.append('user_token', options.userToken);
            } else if ((_window$LoyaltyStorag = window.LoyaltyStorage) !== null && _window$LoyaltyStorag !== void 0 && _window$LoyaltyStorag.get) {
              userData = window.LoyaltyStorage.get();
              if (userData !== null && userData !== void 0 && userData.token) {
                params.append('user_token', userData.token);
              }
            }

            // Add other parameters
            if (options.includeNotifications !== undefined) {
              params.append('include_notifications', options.includeNotifications);
            }
            if (options.includeAnnouncements !== undefined) {
              params.append('include_announcements', options.includeAnnouncements);
            }
            if (options.notificationsLimit) {
              params.append('notifications_limit', options.notificationsLimit);
            }
            if (options.announcementsPosition) {
              params.append('announcements_position', options.announcementsPosition);
            }
            url = "".concat(baseURL).concat(endpoint).concat(params.toString() ? '?' + params.toString() : '');
            if ((_window$Notifications2 = window.NotificationsConfig) !== null && _window$Notifications2 !== void 0 && _window$Notifications2.debug) {
              console.log('[NotificationsAPI] Fetching from:', url);
            }
            _context.p = 1;
            _context.n = 2;
            return _this._fetchWithTimeout(url, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              }
            }, config.timeout || 10000);
          case 2:
            response = _context.v;
            if (response.ok) {
              _context.n = 3;
              break;
            }
            return _context.a(2, {
              success: true,
              data: {
                notifications: [],
                announcements: []
              }
            });
          case 3:
            contentType = response.headers.get('content-type') || '';
            data = null;
            if (!contentType.includes('application/json')) {
              _context.n = 5;
              break;
            }
            _context.n = 4;
            return response.json();
          case 4:
            data = _context.v;
            _context.n = 7;
            break;
          case 5:
            _context.n = 6;
            return response.text();
          case 6:
            text = _context.v;
            try {
              data = JSON.parse(text);
            } catch (_unused) {
              // Non-JSON response (e.g. HTML fallback on static host or hotspot), return safe empty structure
              data = {
                notifications: [],
                announcements: []
              };
            }
          case 7:
            if ((_window$Notifications3 = window.NotificationsConfig) !== null && _window$Notifications3 !== void 0 && _window$Notifications3.debug) {
              console.log('[NotificationsAPI] Received:', data);
            }
            return _context.a(2, {
              success: true,
              data: data || {
                notifications: [],
                announcements: []
              }
            });
          case 8:
            _context.p = 8;
            _t = _context.v;
            // Gracefully handle abort or network errors without spamming console.error
            if ((_window$Notifications4 = window.NotificationsConfig) !== null && _window$Notifications4 !== void 0 && _window$Notifications4.debug) {
              console.warn('[NotificationsAPI] Fetch warning/error:', _t.name === 'AbortError' ? 'Request timed out or aborted' : _t.message);
            }
            return _context.a(2, {
              success: true,
              data: {
                notifications: [],
                announcements: []
              }
            });
        }
      }, _callee, null, [[1, 8]]);
    }))();
  },
  /**
   * Fetch with timeout using AbortSignal.timeout when available
   * @private
   */
  _fetchWithTimeout: function _fetchWithTimeout(url, options) {
    var _arguments2 = arguments;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var timeout, controller, isTimedOut, timeoutId, response, timeoutErr, _t2, _t3;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            timeout = _arguments2.length > 2 && _arguments2[2] !== undefined ? _arguments2[2] : 10000;
            if (!(typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function')) {
              _context2.n = 4;
              break;
            }
            _context2.p = 1;
            _context2.n = 2;
            return fetch(url, _objectSpread(_objectSpread({}, options), {}, {
              signal: AbortSignal.timeout(timeout)
            }));
          case 2:
            return _context2.a(2, _context2.v);
          case 3:
            _context2.p = 3;
            _t2 = _context2.v;
            throw _t2;
          case 4:
            controller = new AbortController();
            isTimedOut = false;
            timeoutId = setTimeout(function () {
              isTimedOut = true;
              try {
                controller.abort('timeout');
              } catch (e) {
                controller.abort();
              }
            }, timeout);
            _context2.p = 5;
            _context2.n = 6;
            return fetch(url, _objectSpread(_objectSpread({}, options), {}, {
              signal: controller.signal
            }));
          case 6:
            response = _context2.v;
            clearTimeout(timeoutId);
            return _context2.a(2, response);
          case 7:
            _context2.p = 7;
            _t3 = _context2.v;
            clearTimeout(timeoutId);
            if (!(isTimedOut || _t3.name === 'AbortError')) {
              _context2.n = 8;
              break;
            }
            timeoutErr = new Error('Request timed out');
            timeoutErr.name = 'AbortError';
            throw timeoutErr;
          case 8:
            throw _t3;
          case 9:
            return _context2.a(2);
        }
      }, _callee2, null, [[5, 7], [1, 3]]);
    }))();
  },
  /**
   * Delay helper
   * @private
   */
  _delay: function _delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  }
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.NotificationsAPI;
}