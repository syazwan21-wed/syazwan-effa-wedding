/* V8: clean sparkle restoration. Does not modify Supabase or guest features. */
(() => {
  function init() {
    document.querySelectorAll('.valley-fog-v7,.wedding-fog-video,.wedding-cloud-layer,.wedding-mist-layer,.cinematic-cloud,.cinematic-cloud-layer').forEach(el => el.remove());
    let holder = document.getElementById('cinematicParticles');
    if (!holder) {
      holder = document.createElement('div');
      holder.id = 'cinematicParticles';
      holder.setAttribute('aria-hidden', 'true');
      document.body.appendChild(holder);
    }
    holder.replaceChildren();
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < 48; i++) {
      const dot = document.createElement('span');
      dot.className = 'wedding-sparkle-v8';
      dot.style.setProperty('--sx', ((i * 61.8034 + 11) % 100).toFixed(2) + '%');
      dot.style.setProperty('--sy', ((i * 37.119 + 7) % 94).toFixed(2) + '%');
      dot.style.setProperty('--sd', (-i * 0.61).toFixed(2) + 's');
      dot.style.setProperty('--st', (6 + (i % 7) * 1.1).toFixed(2) + 's');
      dot.style.setProperty('--ss', (i % 5 === 0 ? 2 : 1.3) + 'px');
      frag.appendChild(dot);
    }
    holder.appendChild(frag);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
