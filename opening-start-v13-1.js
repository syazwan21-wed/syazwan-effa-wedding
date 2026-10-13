/* V13.1: always reveal the invitation at its beginning. */
(() => {
  const opening = () => document.getElementById('opening');
  const root = document.documentElement;
  let restoring = false;

  function resetToHero() {
    // Temporarily turn off smooth scrolling so the hero is there instantly
    // before the opening overlay fades out.
    if (restoring) return;
    restoring = true;
    const original = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.scrollTop = 0;
    document.body.scrollTop = 0;
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      requestAnimationFrame(() => {
        root.style.scrollBehavior = original;
        restoring = false;
      });
    });
  }

  try { history.scrollRestoration = 'manual'; } catch (_error) {}

  // Browsers may restore a previous scrolling position when re-opening a tab.
  window.addEventListener('pageshow', () => {
    if (opening() && !opening().classList.contains('hidden')) resetToHero();
  });

  const button = document.getElementById('openBtn');
  if (button) {
    // Capture runs before the existing guest.js handler that starts music and
    // hides the opening overlay. No guest.js or music modifications required.
    button.addEventListener('click', resetToHero, { capture: true });
  }
})();
