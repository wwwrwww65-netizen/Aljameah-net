/**
 * Notifications Renderer
 * Renders different templates for notifications and announcements
 */

window.NotificationsRenderer = {
  /**
   * Render a banner (announcement bar)
   * @param {Object} announcement - Announcement object
   * @returns {HTMLElement}
   */
  // renderBanner(announcement) {
  //     const {
  //         id,
  //         message,
  //         title,
  //         position = 'top',
  //         bg_color = '#1e2532',
  //         text_color = '#fce2a9',
  //         button_color = '#f4c430',
  //         icon,
  //         action_text,
  //         action_url,
  //         is_dismissible = true
  //     } = announcement;
  //     const banner = document.createElement('div');
  //     banner.className = `nt-banner nt-banner-${position}`;
  //     banner.setAttribute('data-notification-id', id);
  //     banner.style.cssText = `
  //   background-color: ${bg_color};
  //   color: ${text_color};
  // `;
  //     let innerHTML = '<div class="nt-banner-content">';
  //     // Icon
  //     if (icon) {
  //         innerHTML += `<i class="fa ${icon} nt-banner-icon"></i>`;
  //     }
  //     // Title and message
  //     innerHTML += '<div class="nt-banner-text">';
  //     if (title) {
  //         innerHTML += `<strong class="nt-banner-title">${this._escapeHtml(title)}</strong>`;
  //     }
  //     innerHTML += `<span class="nt-banner-message">${this._escapeHtml(message)}</span>`;
  //     innerHTML += '</div>';
  //     // Action button
  //     if (action_text && action_url) {
  //         innerHTML += `
  //     <a href="${this._escapeHtml(action_url)}" 
  //        class="nt-banner-action" 
  //        style="background-color: ${button_color}; color: ${bg_color};"
  //        target="_blank">
  //       ${this._escapeHtml(action_text)}
  //     </a>
  //   `;
  //     }
  //     // Close button
  //     if (is_dismissible) {
  //         innerHTML += '<button class="nt-banner-close" aria-label="Close">×</button>';
  //     }
  //     innerHTML += '</div>';
  //     banner.innerHTML = innerHTML;
  //     // Add event listeners
  //     if (is_dismissible) {
  //         const closeBtn = banner.querySelector('.nt-banner-close');
  //         if (closeBtn) {
  //             closeBtn.onclick = () => this._removeBanner(banner);
  //         }
  //     }
  //     return banner;
  // },
  renderBanner: function renderBanner(announcement) {
    var _this = this;
    var id = announcement.id,
      message = announcement.message,
      title = announcement.title,
      _announcement$positio = announcement.position,
      position = _announcement$positio === void 0 ? 'top' : _announcement$positio,
      _announcement$bg_colo = announcement.bg_color,
      bg_color = _announcement$bg_colo === void 0 ? '#1e2532' : _announcement$bg_colo,
      _announcement$text_co = announcement.text_color,
      text_color = _announcement$text_co === void 0 ? '#fce2a9' : _announcement$text_co,
      _announcement$button_ = announcement.button_color,
      button_color = _announcement$button_ === void 0 ? '#f4c430' : _announcement$button_,
      icon = announcement.icon,
      action_text = announcement.action_text,
      action_url = announcement.action_url,
      _announcement$is_dism = announcement.is_dismissible,
      is_dismissible = _announcement$is_dism === void 0 ? true : _announcement$is_dism;
    var banner = document.createElement('div');
    banner.className = "nt-banner nt-banner-".concat(position);
    banner.setAttribute('data-notification-id', id);
    banner.style.cssText = "\n        background-color: ".concat(bg_color, " !important;\n        color: ").concat(text_color, " !important;\n    ");
    var innerHTML = '<div class="nt-banner-content">';

    // Icon
    if (icon) {
      innerHTML += "<i class=\"fa ".concat(icon, " nt-banner-icon\"></i>");
    }

    // Title and message
    innerHTML += '<div class="nt-banner-text">';
    if (title) {
      innerHTML += "<strong class=\"nt-banner-title\" style=\"color: ".concat(text_color, " !important;\">").concat(this._escapeHtml(title), "</strong>");
    }
    innerHTML += "<span class=\"nt-banner-message\" style=\"color: ".concat(text_color, " !important; \">").concat(this._escapeHtml(message), "</span>");
    innerHTML += '</div>';

    // Action button
    if (action_text && action_url) {
      innerHTML += "\n            <a href=\"".concat(this._escapeHtml(action_url), "\" \n               class=\"nt-banner-action\" \n               style=\"background-color: ").concat(button_color, "!important; color: ").concat(bg_color, " !important;\"\n               target=\"_blank\">\n              ").concat(this._escapeHtml(action_text), "\n            </a>\n        ");
    }

    // Close button
    if (is_dismissible) {
      innerHTML += '<button class="nt-banner-close" aria-label="Close">×</button>';
    }
    innerHTML += '</div>';
    banner.innerHTML = innerHTML;

    // Add event listeners
    if (is_dismissible) {
      var closeBtn = banner.querySelector('.nt-banner-close');
      if (closeBtn) {
        closeBtn.onclick = function () {
          return _this._removeBanner(banner);
        };
      }
    }

    // --- المنطق الجديد للإضافة داخل حاوية محددة ---
    // استبدل 'my-banner-container' بالـ ID الذي أنشأته في صفحتك

    // إذا لم يجد الدف، لا نفعل شيئاً هنا لأن مدير الإشعارات 
    // سيقوم بإضافته إلى document.body تلقائياً كما في الكود السابق.

    return banner;
  },
  /**
   * Render a modal (popup notification)
   * @param {Object} notification - Notification object
   * @returns {HTMLElement}
   */
  renderModal: function renderModal(notification) {
    var _this2 = this;
    var id = notification.id,
      title = notification.title,
      message = notification.message,
      _notification$bg_colo = notification.bg_color,
      bg_color = _notification$bg_colo === void 0 ? '#ffffff' : _notification$bg_colo,
      _notification$text_co = notification.text_color,
      text_color = _notification$text_co === void 0 ? '#17385F' : _notification$text_co,
      _notification$button_ = notification.button_color,
      button_color = _notification$button_ === void 0 ? '#17385F' : _notification$button_,
      action_text = notification.action_text,
      action_url = notification.action_url;
    var modal = document.createElement('div');
    modal.className = 'nt-modal-overlay';
    modal.setAttribute('data-notification-id', id);
    if (window.ModalScrollLock) window.ModalScrollLock.lock();else document.body.style.overflow = 'hidden';
    var innerHTML = "\n      <div class=\"nt-modal\" style=\"background-color: ".concat(bg_color, " !important; color: ").concat(text_color, " !important; \">\n        <button class=\"nt-modal-close\" aria-label=\"Close\">\xD7</button>\n        <div class=\"nt-modal-content\">\n    ");
    if (title) {
      innerHTML += "<h3 class=\"nt-modal-title\" style=\"color: ".concat(text_color, " !important;\">").concat(this._escapeHtml(title), "</h3>");
    }
    innerHTML += "<p class=\"nt-modal-message\" style=\"color: ".concat(text_color, " !important;\">").concat(this._escapeHtml(message), "</p>");
    if (action_text && action_url) {
      innerHTML += "\n        <a href=\"".concat(this._escapeHtml(action_url), "\" \n           class=\"nt-modal-action\" \n           style=\"background-color: ").concat(button_color, " !important; color: ").concat(bg_color, " !important;\"\n           target=\"_blank\">\n          ").concat(this._escapeHtml(action_text), "\n        </a>\n      ");
    }
    innerHTML += '</div></div>';
    modal.innerHTML = innerHTML;

    // Event listeners
    var closeBtn = modal.querySelector('.nt-modal-close');
    if (closeBtn) {
      closeBtn.onclick = function () {
        return _this2._removeModal(modal);
      };
    }

    // Close on overlay click
    modal.onclick = function (e) {
      if (e.target === modal) {
        _this2._removeModal(modal);
      }
    };
    return modal;
  },
  /**
   * Render a centered card
   * @param {Object} notification - Notification object
   * @returns {HTMLElement}
   */
  renderCenteredCard: function renderCenteredCard(notification) {
    var _this3 = this;
    var id = notification.id,
      title = notification.title,
      message = notification.message,
      _notification$bg_colo2 = notification.bg_color,
      bg_color = _notification$bg_colo2 === void 0 ? '#ffffff' : _notification$bg_colo2,
      _notification$text_co2 = notification.text_color,
      text_color = _notification$text_co2 === void 0 ? '#17385F' : _notification$text_co2,
      _notification$button_2 = notification.button_color,
      button_color = _notification$button_2 === void 0 ? '#17385F' : _notification$button_2,
      action_text = notification.action_text,
      action_url = notification.action_url;
    var card = document.createElement('div');
    card.className = 'nt-card-overlay';
    card.setAttribute('data-notification-id', id);
    if (window.ModalScrollLock) window.ModalScrollLock.lock();else document.body.style.overflow = 'hidden';
    var innerHTML = "\n      <div class=\"nt-card\" style=\"background-color: ".concat(bg_color, " !important; color: ").concat(text_color, " !important;\">\n        <button class=\"nt-card-close\" aria-label=\"Close\">\xD7</button>\n        <div class=\"nt-card-content\">\n          <div class=\"nt-card-icon\">\uD83D\uDD14</div>\n    ");
    if (title) {
      innerHTML += "<h3 class=\"nt-card-title\" style=\"color: ".concat(text_color, " !important;\">").concat(this._escapeHtml(title), "</h3>");
    }
    innerHTML += "<p class=\"nt-card-message\" style=\"color: ".concat(text_color, " !important;\">").concat(this._escapeHtml(message), "</p>");
    if (action_text && action_url) {
      innerHTML += "\n        <a href=\"".concat(this._escapeHtml(action_url), "\" \n           class=\"nt-card-action\" \n           style=\"background-color: ").concat(button_color, " !important; color: ").concat(bg_color, " !important;\"\n           target=\"_blank\">\n          ").concat(this._escapeHtml(action_text), "\n        </a>\n      ");
    }
    innerHTML += '</div></div>';
    card.innerHTML = innerHTML;

    // Event listeners
    var closeBtn = card.querySelector('.nt-card-close');
    if (closeBtn) {
      closeBtn.onclick = function () {
        return _this3._removeCard(card);
      };
    }

    // Close on overlay click
    card.onclick = function (e) {
      if (e.target === card) {
        _this3._removeCard(card);
      }
    };
    return card;
  },
  /**
   * Remove banner with animation
   * @private
   */
  _removeBanner: function _removeBanner(banner) {
    banner.classList.add('nt-banner-hide');
    // setTimeout(() => {
    //     if (banner.parentNode) {
    //         banner.parentNode.removeChild(banner);
    //     }
    // }, 300);
  },
  /**
   * Remove modal with animation
   * @private
   */
  _removeModal: function _removeModal(modal) {
    modal.classList.add('nt-modal-hide');
    // setTimeout(() => {
    if (modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
    // }, 300);
    if (window.ModalScrollLock) window.ModalScrollLock.unlock();else document.body.style.overflow = '';
  },
  /**
   * Remove card with animation
   * @private
   */
  _removeCard: function _removeCard(card) {
    card.classList.add('nt-card-hide');
    // setTimeout(() => {
    if (card.parentNode) {
      card.parentNode.removeChild(card);
    }
    // }, 300);
    if (window.ModalScrollLock) window.ModalScrollLock.unlock();else document.body.style.overflow = '';
  },
  /**
   * Escape HTML to prevent XSS
   * @private
   */
  _escapeHtml: function _escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
};

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = window.NotificationsRenderer;
}