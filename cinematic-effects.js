/* V9: real footage, visually confined to valley band; visible gold sparkles. */
(() => {
 function init(){
  document.querySelectorAll('.wedding-fog-video,.valley-fog-v7,.wedding-cloud-layer,.wedding-mist-layer,.cinematic-cloud,.cinematic-cloud-layer,.wedding-fog-v9').forEach(el=>el.remove());
  const fog=document.createElement('div'); fog.className='wedding-fog-v9';fog.setAttribute('aria-hidden','true');
  const vid=document.createElement('video');vid.src='valley-fog-v9.mp4';vid.autoplay=true;vid.loop=true;vid.muted=true;vid.playsInline=true;vid.preload='metadata';vid.setAttribute('muted','');vid.setAttribute('playsinline','');
  fog.appendChild(vid);document.body.appendChild(fog);vid.play().catch(()=>{});
  let holder=document.getElementById('cinematicParticles');if(!holder){holder=document.createElement('div');holder.id='cinematicParticles';document.body.appendChild(holder)}
  holder.setAttribute('aria-hidden','true');holder.replaceChildren();
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){vid.pause();return}
  const frag=document.createDocumentFragment();for(let i=0;i<44;i++){
    const dot=document.createElement('span');dot.className='wedding-sparkle-v9';
    dot.style.setProperty('--sx',((i*61.8034+11)%100).toFixed(2)+'%');
    dot.style.setProperty('--sy',((i*37.119+7)%94).toFixed(2)+'%');
    dot.style.setProperty('--sd',(-i*.67).toFixed(2)+'s');
    dot.style.setProperty('--st',(5+(i%7)*.9).toFixed(2)+'s');
    dot.style.setProperty('--ss',(i%4===0?4:3)+'px');frag.appendChild(dot)
  }holder.appendChild(frag)
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init()
})();
