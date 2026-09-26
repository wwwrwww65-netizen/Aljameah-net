function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * Notifications Manager
 * Main controller for notifications and announcements system
 */

window.NotificationsManager = {
  initialized: false,
  displayQueue: [],
  /**
   * Initialize the notifications system
   */
  init: function init() {
    var _this = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      var _window$Notifications, result, _ref, _ref$notifications, notifications, _ref$announcements, announcements, itemsToShow, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!_this.initialized) {
              _context.n = 1;
              break;
            }
            console.log('[NotificationsManager] Already initialized');
            return _context.a(2);
          case 1:
            _context.p = 1;
            console.log('[NotificationsManager] Initializing...');

            // Fetch content from API
            _context.n = 2;
            return window.NotificationsAPI.fetchContent();
          case 2:
            result = _context.v;
            if (result.success) {
              _context.n = 3;
              break;
            }
            console.error('[NotificationsManager] Failed to fetch content:', result.error);
            return _context.a(2);
          case 3:
            _ref = result.data || {}, _ref$notifications = _ref.notifications, notifications = _ref$notifications === void 0 ? [] : _ref$notifications, _ref$announcements = _ref.announcements, announcements = _ref$announcements === void 0 ? [] : _ref$announcements;
            if ((_window$Notifications = window.NotificationsConfig) !== null && _window$Notifications !== void 0 && _window$Notifications.debug) {
              console.log('[NotificationsManager] Received:', {
                notifications: notifications.length,
                announcements: announcements.length
              });
            }

            // Filter items that should be shown
            itemsToShow = _this._filterAndSort([].concat(_toConsumableArray(announcements), _toConsumableArray(notifications)));
            if (!(itemsToShow.length === 0)) {
              _context.n = 4;
              break;
            }
            console.log('[NotificationsManager] No items to display');
            _this.initialized = true;
            return _context.a(2);
          case 4:
            _context.n = 5;
            return _this._displayItems(itemsToShow);
          case 5:
            _this.initialized = true;
            console.log('[NotificationsManager] Initialized successfully');
            _context.n = 7;
            break;
          case 6:
            _context.p = 6;
            _t = _context.v;
            console.error('[NotificationsManager] Initialization error:', _t);
          case 7:
            return _context.a(2);
        }
      }, _callee, null, [[1, 6]]);
    }))();
  },
  /**
   * Filter and sort items
   * @private
   */
  _filterAndSort: function _filterAndSort(items) {
    // Filter items that should be shown
    var filtered = items.filter(function (item) {
      return window.NotificationsStorage.shouldShow(item);
    });

    // Sort by priority (highest first)
    filtered.sort(function (a, b) {
      var priorityA = a.priority || 0;
      var priorityB = b.priority || 0;
      return priorityB - priorityA;
    });
    return filtered;
  },
  /**
   * Display items sequentially
   * @private
   */
  _displayItems: function _displayItems(items) {
    var _this2 = this;
    return _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var _window$Notifications2;
      var config, delayBetween, i, item;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.n) {
          case 0:
            config = ((_window$Notifications2 = window.NotificationsConfig) === null || _window$Notifications2 === void 0 ? void 0 : _window$Notifications2.display) || {};
            delayBetween = config.delayBetween || 800;
            i = 0;
          case 1:
            if (!(i < items.length)) {
              _context2.n = 3;
              break;
            }
            item = items[i]; // Display the item
            _this2._displayItem(item);

            // Mark as shown
            window.NotificationsStorage.markAsShown(item);

            // Wait before showing next item
            if (!(i < items.length - 1)) {
              _context2.n = 2;
              break;
            }
            _context2.n = 2;
            return _this2._delay(delayBetween);
          case 2:
            i++;
            _context2.n = 1;
            break;
          case 3:
            return _context2.a(2);
        }
      }, _callee2);
    }))();
  },
  /**
   * Display single item
   * @private
   */
  _displayItem: function _displayItem(item) {
    var _window$Notifications6;
    var template = item.template_type || 'modal';
    var element = null;

    // Determine if it's announcement or notification
    var isAnnouncement = item.position !== undefined; // Announcements have position

    if (isAnnouncement && (template === 'bar' || template === 'banner')) {
      var _window$Notifications3;
      // Banner
      element = window.NotificationsRenderer.renderBanner(item);
      console.error('container test:', this.getContainer());
      var customContainer = this.getContainer();
      if (customContainer) {
        customContainer.appendChild(element);
      } else {
        document.body.appendChild(element);
      }

      // Add show class for animation
      setTimeout(function () {
        element.classList.add('nt-banner-show');
      }, 10);

      // Auto close if configured
      var autoClose = (_window$Notifications3 = window.NotificationsConfig) === null || _window$Notifications3 === void 0 || (_window$Notifications3 = _window$Notifications3.display) === null || _window$Notifications3 === void 0 ? void 0 : _window$Notifications3.autoCloseDelay;
      if (autoClose && !item.is_dismissible) {
        // setTimeout(() => {
        //     window.NotificationsRenderer._removeBanner(element);
        // }, autoClose);
      }
    } else if (template === 'modal') {
      var _window$Notifications4;
      // Modal
      element = window.NotificationsRenderer.renderModal(item);
      document.body.appendChild(element);

      // Add show class for animation
      setTimeout(function () {
        element.classList.add('nt-modal-show');
      }, 10);

      // Auto close if configured
      var _autoClose = (_window$Notifications4 = window.NotificationsConfig) === null || _window$Notifications4 === void 0 || (_window$Notifications4 = _window$Notifications4.display) === null || _window$Notifications4 === void 0 ? void 0 : _window$Notifications4.autoCloseDelay;
      if (_autoClose) {
        // setTimeout(() => {
        //     window.NotificationsRenderer._removeModal(element);
        // }, autoClose);
      }
    } else if (template === 'centered_card') {
      var _window$Notifications5;
      // Centered Card
      element = window.NotificationsRenderer.renderCenteredCard(item);
      document.body.appendChild(element);

      // Add show class for animation
      setTimeout(function () {
        element.classList.add('nt-card-show');
      }, 10);

      // Auto close if configured
      var _autoClose2 = (_window$Notifications5 = window.NotificationsConfig) === null || _window$Notifications5 === void 0 || (_window$Notifications5 = _window$Notifications5.display) === null || _window$Notifications5 === void 0 ? void 0 : _window$Notifications5.autoCloseDelay;
      if (_autoClose2) {
        // setTimeout(() => {
        //     window.NotificationsRenderer._removeCard(element);
        // }, autoClose);
      }
    }
    if ((_window$Notifications6 = window.NotificationsConfig) !== null && _window$Notifications6 !== void 0 && _window$Notifications6.debug && element) {
      console.log('[NotificationsManager] Displayed:', {
        id: item.id,
        template: template,
        type: isAnnouncement ? 'announcement' : 'notification'
      });
    }
  },
  getContainer: function getContainer() {
    var container = document.getElementById('announcements-container');
    if (!container) {
      console.log('[Announcements] Container not found, creating one...');
      container = document.createElement('div');
      container.id = 'announcements-container';
      container.className = 'announcements-wrapper';
      if (document.body) {
        document.body.insertBefore(container, document.body.firstChild);
      }
    }
    return container;
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
  module.exports = window.NotificationsManager;
}