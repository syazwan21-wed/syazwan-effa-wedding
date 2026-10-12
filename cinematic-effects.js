/* Wedding Studio V6: actual moving fog VIDEO, no database changes. */
(() => {
  function install() {
    // Remove old JS-generated clouds and mist. Prevent prior script from competing.
    document.querySelectorAll('.wedding-cloud-layer,.wedding-mist-layer,.cinematic-cloud').forEach(el=>el.remove());
    document.querySelectorAll('.wedding-fog-video').forEach(el=>el.remove());
    function addFog(parent, isOpening) {
      if (!parent) return;
      const video = document.createElement('video');
      video.className = 'wedding-fog-video' + (isOpening ? ' fog-opening' : ' fog-background');
      video.setAttribute('aria-hidden','true');
      video.setAttribute('playsinline','');
      video.setAttribute('muted','');
      video.setAttribute('autoplay','');
      video.setAttribute('loop','');
      video.muted=true; video.loop=true; video.autoplay=true; video.playsInline=true;
      video.preload='auto';
      video.src='fog-overlay.mp4';
      parent.appendChild(video);
      video.play().catch(()=>{ /* muted autoplay is normally allowed; user interaction can retry */ });
      document.addEventListener('pointerdown',()=>{if(video.paused) video.play().catch(()=>{});},{once:true});
    }
    addFog(document.body,false);
    addFog(document.getElementById('opening'),true);
    // Rebuild dust as very small, faint points rather than big glowing orbs.
    const particles=document.getElementById('cinematicParticles');
    if(particles){
      particles.replaceChildren();
      for(let i=0;i<26;i++){
        const s=document.createElement('span'); s.className='spark fog-v6-dust';
        s.style.setProperty('--x', ((i*37.71+13)%100)+'%');
        s.style.setProperty('--size', (i%3===0?'1.5px':'1px'));
        s.style.setProperty('--duration', (14+(i%8)*2)+'s');
        s.style.setProperty('--delay', (-i*.85)+'s');
        s.style.setProperty('--drift', (((i%7)-3)*11)+'px');
        particles.appendChild(s);
      }
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',install,{once:true});else install();
})();
