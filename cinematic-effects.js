/* Syazwan & Effa V7: restrained valley fog, using the existing fog-overlay.mp4 */
(() => {
  function init() {
    document.querySelectorAll('.wedding-fog-video,.wedding-cloud-layer,.wedding-mist-layer,.cinematic-cloud').forEach(el => el.remove());
    // A single low, masked layer avoids double exposure on the cover.
    const fog = document.createElement('div');
    fog.className = 'valley-fog-v7';
    fog.setAttribute('aria-hidden','true');
    const video = document.createElement('video');
    video.src = 'fog-overlay.mp4';
    video.muted = true; video.autoplay = true; video.loop = true; video.playsInline = true;
    video.preload = 'metadata';
    video.setAttribute('muted',''); video.setAttribute('playsinline','');
    fog.appendChild(video);
    document.body.appendChild(fog);
    video.play().catch(() => {});
    document.addEventListener('pointerdown', () => { if (video.paused) video.play().catch(()=>{}); }, {once:true});
    // Remove older oversized sparkle layers and replace with a handful of tiny dust motes.
    const particles = document.getElementById('cinematicParticles');
    if (particles) {
      particles.replaceChildren();
      for(let i=0;i<18;i++) {
        const dot=document.createElement('span'); dot.className='valley-dust-v7';
        dot.style.left=((i*47.31+7)%100)+'%';
        dot.style.top=((i*29.17+14)%90)+'%';
        dot.style.animationDelay=(-i*1.7)+'s';
        dot.style.animationDuration=(13+i%7*3)+'s';
        particles.appendChild(dot);
      }
    }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
})();
