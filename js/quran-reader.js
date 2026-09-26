function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
/**
 * Holy Quran Modern Interactive Reader Engine (المصحف الشريف التفاعلي الحديث)
 * Ultra-Responsive 2026 Mobile UX Architecture:
 * - Fluid Pinch-to-Zoom & Pan Gesture Engine
 * - Immersive Fullscreen Mode with Tap-to-Toggle UI Bars
 * - Instant Preloading & Zero-Latency Page Flipping
 * - One-Click Full Quran PDF Downloader
 * - Complete Isolation from Main App Navigation
 */

(function () {
  var pageNum = 1;
  var totalPages = 569;
  var scale = 1.0;
  var panX = 0;
  var panY = 0;
  var currentTheme = 'default'; // 'default', 'sepia', 'night'
  var surahList = [];
  var isUiVisible = true;
  var prefetchCache = new Set();

  // Universal Open Modal Function
  window.openQuranModal = function () {
    var modal = document.getElementById('quran-modal');
    if (!modal) return;

    // Add body class to completely hide app navigation bars
    document.body.classList.add('quran-reading-mode');

    // Hide other active modals
    document.querySelectorAll('.app.active').forEach(function (m) {
      if (m !== modal && m.id !== 'status') {
        m.classList.remove('active');
        m.style.display = 'none';
      }
    });
    var stEl1 = document.getElementById('status');
    var isStatusActive = Boolean(stEl1 && stEl1.classList.contains('active'));
    var loginEl = document.getElementById('login');
    if (!isStatusActive && loginEl) {
      loginEl.classList.add('inactive');
    }
    modal.style.display = 'flex';
    void modal.offsetWidth;
    modal.classList.add('active');
    if (typeof window.pushModalHistory === 'function') {
      window.pushModalHistory('quran-modal');
    }

    // Reset UI visibility and scale
    showUI();
    window.quranResetZoom();

    // Restore saved bookmark if available
    try {
      var raw = localStorage.getItem('aloula_quran_bookmark');
      if (raw) {
        var data = JSON.parse(raw);
        if (data && data.page && data.page >= 1 && data.page <= totalPages) {
          pageNum = data.page;
        }
      }
    } catch (e) {}

    // Load Surahs & Render Current Page
    initSurahList();
    renderPage(pageNum);
    updateBookmarkUI();
  };
  window.closeQuranModal = function (fromPopState) {
    var modal = document.getElementById('quran-modal');
    if (!modal) return;
    if (!fromPopState && typeof window.popModalHistory === 'function') {
      window.popModalHistory();
    }
    modal.classList.remove('active');
    document.body.classList.remove('quran-reading-mode');
    setTimeout(function () {
      if (!modal.classList.contains('active')) {
        modal.style.display = 'none';
      }
    }, 180);
    var stEl2 = document.getElementById('status');
    var isStatusActive = Boolean(stEl2 && stEl2.classList.contains('active'));
    var loginEl = document.getElementById('login');
    if (!isStatusActive && loginEl) {
      loginEl.style.display = 'block';
      loginEl.style.visibility = 'visible';
      loginEl.classList.remove('inactive');
    }
  };

  // Single Clean Download Function
  window.downloadQuranFile = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(event) {
      var toast, resp, blob, blobUrl, a, _a, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (event) {
              if (event.preventDefault) event.preventDefault();
              if (event.stopPropagation) event.stopPropagation();
            }
            toast = document.createElement('div');
            toast.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#DFAB52;color:#050811;padding:10px 22px;border-radius:30px;font-weight:900;z-index:2147483647;box-shadow:0 6px 25px rgba(0,0,0,0.8);font-size:0.88rem;transition:opacity 0.3s;pointer-events:none;';
            toast.textContent = 'جاري تنزيل نسخة المصحف الشريف PDF...';
            document.body.appendChild(toast);
            _context.p = 1;
            _context.n = 2;
            return fetch('/mobile-quran.pdf', {
              cache: 'no-store'
            });
          case 2:
            resp = _context.v;
            if (resp.ok) {
              _context.n = 3;
              break;
            }
            throw new Error('Download failed');
          case 3:
            _context.n = 4;
            return resp.blob();
          case 4:
            blob = _context.v;
            blobUrl = window.URL.createObjectURL(new Blob([blob], {
              type: 'application/pdf'
            }));
            a = document.createElement('a');
            a.href = blobUrl;
            a.download = 'mobile-quran.pdf';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            toast.textContent = 'تم بدء تنزيل المصحف بنجاح ✓';
            setTimeout(function () {
              window.URL.revokeObjectURL(blobUrl);
              toast.style.opacity = '0';
              setTimeout(function () {
                return toast.remove();
              }, 400);
            }, 2500);
            _context.n = 6;
            break;
          case 5:
            _context.p = 5;
            _t = _context.v;
            console.warn('Fallback download triggered', _t);
            _a = document.createElement('a');
            _a.href = '/download-quran';
            _a.download = 'mobile-quran.pdf';
            document.body.appendChild(_a);
            _a.click();
            document.body.removeChild(_a);
            toast.textContent = 'تم بدء التنزيل ✓';
            setTimeout(function () {
              toast.style.opacity = '0';
              setTimeout(function () {
                return toast.remove();
              }, 400);
            }, 2000);
          case 6:
            return _context.a(2);
        }
      }, _callee, null, [[1, 5]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
  window.quranNextPage = function () {
    if (pageNum >= totalPages) return;
    pageNum++;
    window.quranResetZoom();
    renderPage(pageNum);
  };
  window.quranPrevPage = function () {
    if (pageNum <= 1) return;
    pageNum--;
    window.quranResetZoom();
    renderPage(pageNum);
  };
  window.quranGoToPage = function (targetPage) {
    var num = parseInt(targetPage, 10);
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      pageNum = num;
      window.quranResetZoom();
      renderPage(pageNum);
    } else {
      var pageInput = document.getElementById('quranPageInput');
      if (pageInput) pageInput.value = pageNum;
    }
  };
  var sliderTimeout = null;
  window.quranSliderInput = function (val) {
    var num = parseInt(val, 10);
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      pageNum = num;
      var pageInput = document.getElementById('quranPageInput');
      if (pageInput) pageInput.value = num;
      clearTimeout(sliderTimeout);
      sliderTimeout = setTimeout(function () {
        window.quranResetZoom();
        renderPage(num);
      }, 60);
    }
  };
  window.jumpToSurah = function (page) {
    var p = parseInt(page, 10);
    if (!isNaN(p) && p >= 1 && p <= totalPages) {
      pageNum = p;
      window.quranResetZoom();
      renderPage(pageNum);
    }
  };

  // ─── UI Visibility Toggling (Immersive Reading Mode) ───
  function toggleUI() {
    if (isUiVisible) {
      hideUI();
    } else {
      showUI();
    }
  }
  function hideUI() {
    isUiVisible = false;
    var header = document.getElementById('quranHeader');
    var bottom = document.getElementById('quranBottomBar');
    if (header) header.classList.add('ui-hidden');
    if (bottom) bottom.classList.add('ui-hidden');
  }
  function showUI() {
    isUiVisible = true;
    var header = document.getElementById('quranHeader');
    var bottom = document.getElementById('quranBottomBar');
    if (header) header.classList.remove('ui-hidden');
    if (bottom) bottom.classList.remove('ui-hidden');
  }

  // ─── Zoom & Pan Math Engine ───
  window.quranResetZoom = function () {
    scale = 1.0;
    panX = 0;
    panY = 0;
    applyTransform(true);
    updateResetButton();
  };
  function applyTransform(smooth) {
    var img = document.getElementById('quranPageImg');
    if (!img) return;
    if (smooth) {
      img.style.transition = 'transform 0.22s cubic-bezier(0.2, 0, 0, 1)';
    } else {
      img.style.transition = 'none';
    }
    if (scale <= 1.02) {
      scale = 1.0;
      panX = 0;
      panY = 0;
      img.style.transform = 'translate3d(0px, 0px, 0px) scale(1)';
    } else {
      // Keep pan bounded
      var maxPanX = window.innerWidth * (scale - 1) / 2;
      var maxPanY = window.innerHeight * (scale - 1) / 2;
      panX = Math.max(-maxPanX, Math.min(maxPanX, panX));
      panY = Math.max(-maxPanY, Math.min(maxPanY, panY));
      img.style.transform = "translate3d(".concat(panX, "px, ").concat(panY, "px, 0px) scale(").concat(scale, ")");
    }
    updateResetButton();
  }
  function updateResetButton() {
    var btn = document.getElementById('quranZoomResetBtn');
    if (btn) {
      btn.style.display = scale > 1.08 ? 'block' : 'none';
    }
  }

  // ─── Themes (Default / Sepia / Night) ───
  window.toggleQuranTheme = function () {
    var viewer = document.getElementById('quranCanvasContainer');
    if (!viewer) return;
    if (currentTheme === 'default') {
      currentTheme = 'sepia';
      viewer.className = 'quran-viewport-scroll theme-sepia';
    } else if (currentTheme === 'sepia') {
      currentTheme = 'night';
      viewer.className = 'quran-viewport-scroll theme-night';
    } else {
      currentTheme = 'default';
      viewer.className = 'quran-viewport-scroll';
    }
  };

  // ─── Bookmark Management ───
  window.saveQuranBookmark = function () {
    try {
      var select = document.getElementById('quranSurahSelect');
      var surahTitle = select && select.selectedIndex >= 0 && select.options[select.selectedIndex] ? select.options[select.selectedIndex].text : "\u0635\u0641\u062D\u0629 ".concat(pageNum);
      var data = {
        page: pageNum,
        title: surahTitle,
        savedAt: new Date().toLocaleDateString('ar-SA')
      };
      localStorage.setItem('aloula_quran_bookmark', JSON.stringify(data));
      var btn = document.getElementById('quranBookmarkBtn');
      if (btn) {
        btn.style.background = 'rgba(16, 185, 129, 0.35)';
        btn.style.borderColor = '#34d399';
        setTimeout(function () {
          btn.style.background = '';
          btn.style.borderColor = '';
        }, 1500);
      }
      updateBookmarkUI();
    } catch (e) {
      console.error('Save bookmark error:', e);
    }
  };
  window.goToQuranBookmark = function () {
    try {
      var raw = localStorage.getItem('aloula_quran_bookmark');
      if (raw) {
        var data = JSON.parse(raw);
        if (data && data.page) {
          window.quranGoToPage(data.page);
        }
      }
    } catch (e) {}
  };
  function updateBookmarkUI() {
    try {
      var jumpBtn = document.getElementById('quranJumpBookmarkBtn');
      var jumpText = document.getElementById('quranLastBookmarkText');
      var raw = localStorage.getItem('aloula_quran_bookmark');
      if (raw) {
        var data = JSON.parse(raw);
        if (data && data.page) {
          if (jumpText) jumpText.textContent = "\u0635 ".concat(data.page);
          if (jumpBtn) {
            jumpBtn.title = "\u0627\u0646\u062A\u0642\u0627\u0644 \u0644\u0644\u0639\u0644\u0627\u0645\u0629 \u0627\u0644\u0645\u062D\u0641\u0648\u0638\u0629 (\u0635 ".concat(data.page, ")");
            jumpBtn.style.display = 'inline-flex';
          }
          return;
        }
      }
      if (jumpBtn) jumpBtn.style.display = 'none';
    } catch (e) {}
  }

  // ─── Rendering Engine with Instant Local/Preload Cache ───
  function renderPage(num) {
    var img = document.getElementById('quranPageImg');
    var pageInput = document.getElementById('quranPageInput');
    var totalPagesEl = document.getElementById('quranTotalPages');
    var slider = document.getElementById('quranPageSlider');
    if (pageInput) pageInput.value = num;
    if (slider) slider.value = num;
    if (totalPagesEl) totalPagesEl.textContent = totalPages;
    if (img) {
      var staticUrl = "public/quran-pages/".concat(num, ".jpg");
      var onPageReady = function onPageReady() {
        img.style.opacity = '1';
        syncSurahSelect(num);
        prefetchNearbyPages(num);
      };

      // If already loaded and active
      if (img.src.endsWith("public/quran-pages/".concat(num, ".jpg")) && img.complete && img.naturalWidth > 0) {
        onPageReady();
        return;
      }
      img.onload = onPageReady;
      img.onerror = function () {
        if (!img.src.includes('/api/quran/page/')) {
          img.src = "/api/quran/page/".concat(num);
        } else {
          onPageReady();
        }
      };
      img.src = staticUrl;
      if (img.complete && img.naturalWidth > 0) {
        onPageReady();
      }
    }
  }
  function prefetchNearbyPages(current) {
    var toPrefetch = [current + 1, current + 2, current - 1];
    toPrefetch.forEach(function (p) {
      if (p >= 1 && p <= totalPages && !prefetchCache.has(p)) {
        prefetchCache.add(p);
        var preloadImg = new Image();
        preloadImg.src = "public/quran-pages/".concat(p, ".jpg");
      }
    });
  }
  function initSurahList() {
    return _initSurahList.apply(this, arguments);
  }
  function _initSurahList() {
    _initSurahList = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
      var resp, cType, json, jsonResp, _cType, text, _json, _t2, _t3, _t4;
      return _regenerator().w(function (_context2) {
        while (1) switch (_context2.p = _context2.n) {
          case 0:
            if (!(surahList.length > 0)) {
              _context2.n = 1;
              break;
            }
            return _context2.a(2);
          case 1:
            _context2.p = 1;
            _context2.n = 2;
            return fetch('/api/quran/info');
          case 2:
            resp = _context2.v;
            cType = resp.headers.get('content-type') || '';
            if (!(resp.ok && cType.includes('application/json'))) {
              _context2.n = 4;
              break;
            }
            _context2.n = 3;
            return resp.json();
          case 3:
            json = _context2.v;
            if (json.totalPages) totalPages = json.totalPages;
            if (!(json.surahs && json.surahs.length)) {
              _context2.n = 4;
              break;
            }
            surahList = json.surahs;
            populateSurahsDropdown(surahList);
            syncSurahSelect(pageNum);
            return _context2.a(2);
          case 4:
            _context2.n = 6;
            break;
          case 5:
            _context2.p = 5;
            _t2 = _context2.v;
          case 6:
            _context2.p = 6;
            _context2.n = 7;
            return fetch('js/quran-surahs.json').catch(function () {
              return fetch('/js/quran-surahs.json');
            });
          case 7:
            jsonResp = _context2.v;
            if (!(jsonResp && jsonResp.ok)) {
              _context2.n = 12;
              break;
            }
            _cType = jsonResp.headers.get('content-type') || '';
            if (!(_cType.includes('application/json') || _cType === '')) {
              _context2.n = 12;
              break;
            }
            _context2.n = 8;
            return jsonResp.text();
          case 8:
            text = _context2.v;
            _context2.p = 9;
            _json = JSON.parse(text);
            if (!(Array.isArray(_json) && _json.length > 0)) {
              _context2.n = 10;
              break;
            }
            surahList = _json;
            populateSurahsDropdown(surahList);
            syncSurahSelect(pageNum);
            return _context2.a(2);
          case 10:
            _context2.n = 12;
            break;
          case 11:
            _context2.p = 11;
            _t3 = _context2.v;
          case 12:
            _context2.n = 14;
            break;
          case 13:
            _context2.p = 13;
            _t4 = _context2.v;
          case 14:
            return _context2.a(2);
        }
      }, _callee2, null, [[9, 11], [6, 13], [1, 5]]);
    }));
    return _initSurahList.apply(this, arguments);
  }
  function populateSurahsDropdown(list) {
    var select = document.getElementById('quranSurahSelect');
    if (!select) return;
    select.innerHTML = '<option value="">📑 فهرس السور...</option>';
    list.forEach(function (s) {
      var opt = document.createElement('option');
      opt.value = s.page;
      opt.textContent = "".concat(s.title, " (\u0635 ").concat(s.page, ")");
      select.appendChild(opt);
    });
  }
  function syncSurahSelect(pageNumber) {
    var select = document.getElementById('quranSurahSelect');
    if (!select) return;
    if (surahList && surahList.length > 0) {
      for (var i = 0; i < surahList.length; i++) {
        if (surahList[i].page <= pageNumber && (!surahList[i + 1] || surahList[i + 1].page > pageNumber)) {
          select.value = surahList[i].page;
          return;
        }
      }
    } else {
      for (var _i = select.options.length - 1; _i >= 0; _i--) {
        var pVal = parseInt(select.options[_i].value, 10);
        if (!isNaN(pVal) && pVal <= pageNumber) {
          select.selectedIndex = _i;
          break;
        }
      }
    }
  }

  // ─── Touch & Pinch-to-Zoom Engine ───
  function setupTouchEngine() {
    var viewer = document.getElementById('quranViewerContainer');
    if (!viewer) return;
    var isTouchDown = false;
    var isPinching = false;
    var initialDistance = 0;
    var initialScale = 1.0;
    var startTouchX = 0;
    var startTouchY = 0;
    var lastPanX = 0;
    var lastPanY = 0;
    var touchStartTime = 0;
    var lastTapTime = 0;
    var getDistance = function getDistance(t1, t2) {
      return Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
    };
    viewer.addEventListener('touchstart', function (e) {
      if (e.touches.length === 2) {
        // Two fingers = Pinch Zoom
        isPinching = true;
        initialDistance = getDistance(e.touches[0], e.touches[1]);
        initialScale = scale;
      } else if (e.touches.length === 1) {
        isPinching = false;
        isTouchDown = true;
        startTouchX = e.touches[0].clientX;
        startTouchY = e.touches[0].clientY;
        lastPanX = panX;
        lastPanY = panY;
        touchStartTime = Date.now();
      }
    }, {
      passive: false
    });
    viewer.addEventListener('touchmove', function (e) {
      if (isPinching && e.touches.length === 2) {
        e.preventDefault();
        var dist = getDistance(e.touches[0], e.touches[1]);
        if (initialDistance > 0) {
          var factor = dist / initialDistance;
          scale = Math.min(Math.max(initialScale * factor, 1.0), 3.5);
          applyTransform(false);
        }
      } else if (isTouchDown && e.touches.length === 1 && scale > 1.05) {
        // Pan while zoomed in
        e.preventDefault();
        var deltaX = e.touches[0].clientX - startTouchX;
        var deltaY = e.touches[0].clientY - startTouchY;
        panX = lastPanX + deltaX;
        panY = lastPanY + deltaY;
        applyTransform(false);
      }
    }, {
      passive: false
    });
    viewer.addEventListener('touchend', function (e) {
      if (isPinching) {
        if (e.touches.length === 0) {
          isPinching = false;
          applyTransform(true);
        }
      } else if (isTouchDown && e.changedTouches.length === 1) {
        isTouchDown = false;
        var endTouchX = e.changedTouches[0].clientX;
        var endTouchY = e.changedTouches[0].clientY;
        var deltaX = endTouchX - startTouchX;
        var deltaY = endTouchY - startTouchY;
        var touchDuration = Date.now() - touchStartTime;

        // Check for quick Tap
        if (Math.abs(deltaX) < 10 && Math.abs(deltaY) < 10 && touchDuration < 280) {
          var now = Date.now();
          if (now - lastTapTime < 320) {
            // Double Tap: Toggle 1.8x Zoom
            if (scale > 1.05) {
              window.quranResetZoom();
            } else {
              scale = 1.8;
              panX = 0;
              panY = 0;
              applyTransform(true);
            }
            lastTapTime = 0;
          } else {
            // Single Tap in middle zone (20% to 80% screen width)
            var screenW = window.innerWidth;
            if (endTouchX > screenW * 0.2 && endTouchX < screenW * 0.8) {
              toggleUI();
            }
            lastTapTime = now;
          }
          return;
        }

        // If not zoomed, check for swipe to change page (RTL Arabic Quran)
        if (scale <= 1.05) {
          if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
            if (deltaX < 0) {
              // Swiping left = Advance to Next page
              window.quranNextPage();
            } else {
              // Swiping right = Go back to Previous page
              window.quranPrevPage();
            }
          }
        } else {
          applyTransform(true);
        }
      }
    }, {
      passive: false
    });

    // Keyboard navigation (RTL aware)
    document.addEventListener('keydown', function (e) {
      var modal = document.getElementById('quran-modal');
      if (!modal || !modal.classList.contains('active')) return;
      if (e.key === 'ArrowLeft' || e.key === 'PageDown') {
        window.quranNextPage();
      } else if (e.key === 'ArrowRight' || e.key === 'PageUp') {
        window.quranPrevPage();
      } else if (e.key === 'Escape') {
        window.closeQuranModal();
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTouchEngine);
  } else {
    setupTouchEngine();
  }

  // Delegation for opening and downloading
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('.quran-btn-read, [data-open-quran], button[parent-id="quran-modal"]');
    if (trigger) {
      e.preventDefault();
      window.openQuranModal();
      return;
    }
    var dlTrigger = e.target.closest('.quran-btn-download, [data-download-quran]');
    if (dlTrigger) {
      window.downloadQuranFile(e);
      return;
    }
  });
})();