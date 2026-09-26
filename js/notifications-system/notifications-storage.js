/**
 * Notifications Storage Manager
 * Manages localStorage/sessionStorage for tracking shown notifications
 */

window.NotificationsStorage = {
  /**
   * Check if item should be shown based on appearance_type
   * @param {Object} item - Notification or announcement object
   * @returns {boolean}
   */
  shouldShow: function shouldShow(item) {
    var _window$Notifications;
    if (!item || !item.appearance_type) return true;
    var appearance_type = item.appearance_type,
      id = item.id;

    // Always show
    if (appearance_type === 'always') {
      return true;
    }
    var config = ((_window$Notifications = window.NotificationsConfig) === null || _window$Notifications === void 0 ? void 0 : _window$Notifications.storage) || {};
    var prefix = config.prefix || 'nt_';

    // Once per session
    if (appearance_type === 'once_per_session') {
      var key = "".concat(prefix).concat(config.sessionKey || 'session');
      var shown = this._getSessionData(key);
      return !shown.includes(id);
    }

    // Once (permanent)
    if (appearance_type === 'once' || appearance_type === 'once_per_day') {
      var _key = "".concat(prefix).concat(config.permanentKey || 'permanent');
      var _shown = this._getPermanentData(_key);
      return !_shown.includes(id);
    }
    return true;
  },
  /**
   * Mark item as shown
   * @param {Object} item - Notification or announcement object
   */
  markAsShown: function markAsShown(item) {
    var _window$Notifications2;
    if (!item || !item.appearance_type || item.appearance_type === 'always') {
      return;
    }
    var appearance_type = item.appearance_type,
      id = item.id;
    var config = ((_window$Notifications2 = window.NotificationsConfig) === null || _window$Notifications2 === void 0 ? void 0 : _window$Notifications2.storage) || {};
    var prefix = config.prefix || 'nt_';
    if (appearance_type === 'once_per_session') {
      var key = "".concat(prefix).concat(config.sessionKey || 'session');
      var shown = this._getSessionData(key);
      if (!shown.includes(id)) {
        shown.push(id);
        this._setSessionData(key, shown);
      }
    }
    if (appearance_type === 'once' || appearance_type === 'once_per_day') {
      var _key2 = "".concat(prefix).concat(config.permanentKey || 'permanent');
      var _shown2 = this._getPermanentData(_key2);
      if (!_shown2.includes(id)) {
        _shown2.push(id);
        this._setPermanentData(_key2, _shown2);
      }
    }
  },
  /**
   * Get session data
   * @private
   */
  _getSessionData: function _getSessionData(key) {
    try {
      var data = sessionStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },
  /**
   * Set session data
   * @private
   */
  _setSessionData: function _setSessionData(key, data) {
    try {
      sessionStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('[NotificationsStorage] Session storage error:', e);
    }
  },
  /**
   * Get permanent data
   * @private
   */
  _getPermanentData: function _getPermanentData(key) {
    try {
      var data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },
  /**
   * Set permanent data
   * @private
   */
  _setPermanentData: function _setPermanentData(key, data) {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('[NotificationsStorage] Local storage error:', e);
    }
  },
  /**
   * Clear old data (cleanup)
   */
  cleanup: function cleanup() {
    // Could implement cleanup of old items here
    // For now, we rely on browser's storage limits
  }
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.NotificationsStorage;
}