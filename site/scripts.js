// Health Equity 4 All -- production site JS.
// Every init*() below no-ops when its markup isn't present, so this single
// file loads (deferred) unmodified on all 9 pages.
(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------------------
     Nav: dropdowns (click/keyboard + hover) and the mobile menu toggle
     --------------------------------------------------------------------- */
  function initNav() {
    var nav = document.getElementById('primary-nav');
    var toggle = document.querySelector('.nav-toggle');
    if (!nav) return;

    var items = Array.prototype.slice.call(nav.querySelectorAll('.nav-item'));

    function closeItem(item) {
      item.classList.remove('is-open');
      var link = item.querySelector('.nav-link[aria-haspopup]');
      if (link) link.setAttribute('aria-expanded', 'false');
    }
    function closeAll(except) {
      items.forEach(function (item) {
        if (item !== except) closeItem(item);
      });
    }
    function openItem(item) {
      closeAll(item);
      item.classList.add('is-open');
      var link = item.querySelector('.nav-link[aria-haspopup]');
      if (link) link.setAttribute('aria-expanded', 'true');
    }

    items.forEach(function (item) {
      var link = item.querySelector('.nav-link[aria-haspopup]');
      var dropdown = item.querySelector('.nav-dropdown');
      if (!link || !dropdown) return;

      link.addEventListener('click', function (event) {
        event.preventDefault();
        if (item.classList.contains('is-open')) {
          closeItem(item);
        } else {
          openItem(item);
        }
      });
      link.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowDown') {
          event.preventDefault();
          openItem(item);
          var first = dropdown.querySelector('a');
          if (first) first.focus();
        }
      });
      item.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeItem(item);
          link.focus();
        }
      });
    });

    document.addEventListener('click', function (event) {
      if (!nav.contains(event.target)) closeAll();
    });
    document.addEventListener('focusin', function (event) {
      items.forEach(function (item) {
        if (!item.contains(event.target)) closeItem(item);
      });
    });

    if (toggle) {
      toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
        if (!isOpen) closeAll();
      });
      nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          if (window.matchMedia('(max-width: 860px)').matches) {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }
  }

  /* ---------------------------------------------------------------------
     Home quote carousel: autoplay, pause on hover/focus, dot controls
     --------------------------------------------------------------------- */
  function initCarousel() {
    var root = document.querySelector('[data-carousel]');
    if (!root) return;

    var dataEl = document.getElementById('home-quotes-data');
    var quotes;
    try {
      quotes = JSON.parse(dataEl.textContent);
    } catch (e) {
      return;
    }

    var textEl = root.querySelector('[data-quote-text]');
    var authorEl = root.querySelector('[data-quote-author]');
    var dots = Array.prototype.slice.call(root.querySelectorAll('[data-quote-index]'));
    var index = 0;
    var timer = null;

    function render(i) {
      index = i;
      textEl.textContent = '“' + quotes[i].quote + '”';
      authorEl.textContent = quotes[i].author;
      dots.forEach(function (dot, dotIndex) {
        var isCurrent = dotIndex === i;
        dot.setAttribute('aria-current', String(isCurrent));
      });
    }

    function next() {
      render((index + 1) % quotes.length);
    }

    function start() {
      if (prefersReducedMotion || timer) return;
      timer = window.setInterval(next, 6000);
    }
    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        render(i);
        stop();
        start();
      });
    });

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);

    start();
  }

  /* ---------------------------------------------------------------------
     FAQ accordions (shared markup on 4 pages)
     --------------------------------------------------------------------- */
  function initAccordions() {
    var triggers = document.querySelectorAll('.accordion-trigger');
    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var panel = document.getElementById(trigger.getAttribute('aria-controls'));
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!isOpen));
        if (panel) panel.hidden = isOpen;
      });
    });
  }

  /* ---------------------------------------------------------------------
     Trainings curriculum tabs (WAI-ARIA tabs pattern)
     --------------------------------------------------------------------- */
  function initTabs() {
    var tablist = document.querySelector('[role="tablist"]');
    if (!tablist) return;

    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var panels = tabs.map(function (tab) {
      return document.getElementById(tab.getAttribute('aria-controls'));
    });

    function select(index) {
      tabs.forEach(function (tab, i) {
        var selected = i === index;
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
        if (panels[i]) panels[i].hidden = !selected;
      });
    }

    tabs.forEach(function (tab, i) {
      tab.addEventListener('click', function () {
        select(i);
      });
      tab.addEventListener('keydown', function (event) {
        var newIndex = null;
        if (event.key === 'ArrowRight') newIndex = (i + 1) % tabs.length;
        else if (event.key === 'ArrowLeft') newIndex = (i - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') newIndex = 0;
        else if (event.key === 'End') newIndex = tabs.length - 1;
        if (newIndex !== null) {
          event.preventDefault();
          select(newIndex);
          tabs[newIndex].focus();
        }
      });
    });

    var hash = window.location.hash.slice(1);
    var hashIndex = tabs.findIndex(function (tab) {
      return tab.id === hash;
    });
    if (hashIndex > -1) select(hashIndex);
  }

  /* ---------------------------------------------------------------------
     Contact form: validation + fetch submission
     --------------------------------------------------------------------- */
  function initContactForm() {
    var form = document.querySelector('[data-contact-form]');
    if (!form) return;

    var status = document.querySelector('[data-form-status]');
    var endpoint = form.dataset.endpoint;
    var i18n = window.__I18N__ || {
      requiredField: 'Please complete this field.',
      invalidEmail: 'Enter a valid email address.',
      successHeading: 'Thank you for reaching out',
      successBody: 'We have received your message and will get back to you within three business days.',
      errorBody: 'Something went wrong sending your message. Please try again, or email us directly.'
    };

    function showError(field, message) {
      var errorEl = document.getElementById(field.id + '-error');
      field.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('is-visible');
      }
    }
    function clearError(field) {
      var errorEl = document.getElementById(field.id + '-error');
      field.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('is-visible');
      }
    }

    function validate() {
      var valid = true;
      var fields = form.querySelectorAll('[required]');
      fields.forEach(function (field) {
        clearError(field);
        if (!field.value.trim()) {
          showError(field, i18n.requiredField);
          valid = false;
        } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
          showError(field, i18n.invalidEmail);
          valid = false;
        }
      });
      return valid;
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (!validate()) {
        var firstInvalid = form.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      var submitBtn = form.querySelector('.form-submit');
      if (submitBtn) submitBtn.disabled = true;

      fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form)
      })
        .then(function (response) {
          if (response.ok) {
            form.hidden = true;
            if (status) {
              status.hidden = false;
              status.classList.remove('form-status--error');
              status.innerHTML = '<div class="form-status-heading">' + i18n.successHeading + '</div>' + i18n.successBody;
              status.focus();
            }
          } else {
            throw new Error('submission failed');
          }
        })
        .catch(function () {
          if (status) {
            status.hidden = false;
            status.classList.add('form-status--error');
            status.textContent = i18n.errorBody;
          }
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initCarousel();
    initAccordions();
    initTabs();
    initContactForm();
  });
})();
