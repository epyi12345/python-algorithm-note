(function () {
  function applyEditorWorkspaceClass() {
    var selectors = [
      '.editor-fullscreen-layout',
      '.editor-wide-layout',
      '.practice-workbench'
    ];

    var isEditorWorkspacePage = selectors.some(function (selector) {
      return document.querySelector(selector);
    });

    document.body.classList.toggle('editor-workspace-page', isEditorWorkspacePage);

    var isWrongNotePage = window.location.pathname.indexOf('/wrong-notes/') !== -1;
    document.body.classList.toggle('wrong-note-wide-page', isWrongNotePage);
  }

  document.addEventListener('DOMContentLoaded', applyEditorWorkspaceClass);
  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(applyEditorWorkspaceClass);
  }
})();
