/* V12 CLEAN — real valley fog stays BEHIND the invitation, not over it. */
(()=>{
  'use strict';
  function init(){
    // Clear legacy layers left by earlier versions, without touching site data.
    document.querySelectorAll('.wedding-fog-video,.valley-fog-v7,.wedding-cloud-layer,.wedding-mist-layer,.wedding-fog-v9,.wedding-fog-v10,.wedding-fog-v12').forEach(el=>el.remove());

    const fog=document.createElement('div');
    fog.className='wedding-fog-v12';
    fog.setAttribute('aria-hidden','true');
    const video=document.createElement('video');
    video.className='v12-fog-footage';
    video.autoplay=true;
    video.muted=true;
    video.defaultMuted=true;
    video.loop=true;
    video.playsInline=true;
    video.setAttribute('playsinline','');
    video.preload='metadata';
    const source=document.createElement('source');
    source.src='valley-fog-v9.mp4';
    source.type='video/mp4';
    video.appendChild(source);
    fog.appendChild(video);
    document.body.appendChild(fog);
    // File isn't distributed in the ZIP; it already exists in your GitHub root.
    video.addEventListener('error',()=>{fog.style.display='none'});
    source.addEventListener('error',()=>{fog.style.display='none'});
    const play=video.play();
    if(play && typeof play.catch==='function')play.catch(()=>{
      // No fake gradients are drawn over the wording if autoplay is blocked.
      fog.style.display='none';
    });

    let holder=document.getElementById('cinematicParticles');
    if(!holder){
      holder=document.createElement('div');
      holder.id='cinematicParticles';
      document.body.appendChild(holder);
    }
    holder.setAttribute('aria-hidden','true');
    holder.replaceChildren();
    const fragment=document.createDocumentFragment();
    for(let i=0;i<44;i++){
      const star=document.createElement('i');
      star.className='wedding-star-v12';
      const x=((i*61.8034+11)%100).toFixed(2);
      const y=((i*37.119+7)%94).toFixed(2);
      const delay=(-i*.43).toFixed(2);
      const duration=(4+(i%6)*.8).toFixed(2);
      const size=i%9===0?11:i%3===0?9:7;
      star.style.cssText=`--sx:${x}%;--sy:${y}%;--sd:${delay}s;--st:${duration}s;--ss:${size}px`;
      fragment.appendChild(star);
    }
    holder.appendChild(fragment);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
