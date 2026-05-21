(function () {
  function slugify(text) {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s\-가-힣]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  }

  function ensureHeadingId(heading, usedIds) {
    if (heading.id) {
      usedIds.add(heading.id);
      return heading.id;
    }

    var base = slugify(heading.textContent || '') || 'section';
    var nextId = base;
    var index = 2;

    while (usedIds.has(nextId) || document.getElementById(nextId)) {
      nextId = base + '-' + index;
      index += 1;
    }

    heading.id = nextId;
    usedIds.add(nextId);
    return nextId;
  }

  function removeExistingWrongNoteToc() {
    var existing = document.querySelector('.wrong-note-toc');
    if (existing) {
      existing.remove();
    }
  }

  function buildWrongNoteToc() {
    removeExistingWrongNoteToc();

    var isWrongNotePage = window.location.pathname.indexOf('/wrong-notes/') !== -1;
    if (!isWrongNotePage) {
      return;
    }

    var article = document.querySelector('.md-content__inner');
    if (!article) {
      return;
    }

    var headings = Array.prototype.slice.call(article.querySelectorAll('h2, h3'));
    if (!headings.length) {
      return;
    }

    var lang = (document.documentElement.lang || '').toLowerCase();
    var isKorean = lang.indexOf('ko') === 0 || /\.ko\/$/.test(window.location.pathname);

    var aside = document.createElement('aside');
    aside.className = 'wrong-note-toc';
    aside.setAttribute('aria-label', 'Page table of contents');

    var title = document.createElement('div');
    title.className = 'wrong-note-toc__title';
    title.textContent = isKorean ? '목차' : 'Contents';

    var nav = document.createElement('nav');
    nav.className = 'wrong-note-toc__nav';

    var usedIds = new Set();
    headings.forEach(function (heading) {
      var id = ensureHeadingId(heading, usedIds);
      var link = document.createElement('a');
      link.className = 'wrong-note-toc__link';
      if (heading.tagName.toLowerCase() === 'h3') {
        link.classList.add('wrong-note-toc__link--sub');
      }
      link.href = '#' + id;
      link.textContent = heading.textContent.trim();

      link.addEventListener('click', function (event) {
        event.preventDefault();
        var target = document.getElementById(id);
        if (!target) return;

        var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + id);
      });

      nav.appendChild(link);
    });

    aside.appendChild(title);
    aside.appendChild(nav);
    document.body.appendChild(aside);
  }

  

  function setupSearchActiveState() {
    var search = document.querySelector('.md-search');
    if (!search) return;

    var update = function () {
      var active = search.classList.contains('md-search--active') || !!search.querySelector(':focus-within');
      document.body.classList.toggle('search-active', active);
    };

    var observer = new MutationObserver(update);
    observer.observe(search, { attributes: true, attributeFilter: ['class'] });

    search.addEventListener('focusin', update);
    search.addEventListener('focusout', function () { setTimeout(update, 30); });
    update();
  }

  function applyLayoutClasses() {
    var selectors = ['.editor-fullscreen-layout', '.editor-wide-layout', '.practice-workbench'];
    var isEditorWorkspacePage = selectors.some(function (selector) {
      return document.querySelector(selector);
    });

    document.body.classList.toggle('editor-workspace-page', isEditorWorkspacePage);

    var isWrongNotePage = window.location.pathname.indexOf('/wrong-notes/') !== -1;
    document.body.classList.toggle('wrong-note-wide-page', isWrongNotePage);

    buildWrongNoteToc();
    setupSearchActiveState();
  }

  document.addEventListener('DOMContentLoaded', applyLayoutClasses);
  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(applyLayoutClasses);
  }
})();
