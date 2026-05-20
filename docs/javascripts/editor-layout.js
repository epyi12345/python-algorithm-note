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
  }

  document.addEventListener('DOMContentLoaded', applyEditorWorkspaceClass);
  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(applyEditorWorkspaceClass);
  }
})();
