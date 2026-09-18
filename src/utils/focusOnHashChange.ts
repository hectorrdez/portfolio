// Moves keyboard/screen-reader focus to the section a `href="#id"` link navigates
// to. The browser already scrolls there (native anchor + `scroll-behavior: smooth`
// in index.css) - this only adds the focus so keyboard/AT users land somewhere,
// instead of just visually scrolling past them. Call once at app startup.
export function initFocusOnHashChange() {
  window.addEventListener("hashchange", () => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    target.setAttribute("tabindex", "-1");
    target.focus({ preventScroll: true });
  });
}
