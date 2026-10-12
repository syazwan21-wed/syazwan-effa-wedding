/* V11: natural fog and delicate four-point golden stars. */
(()=>{
 function init(){
  document.querySelectorAll('.wedding-fog-video,.valley-fog-v7,.wedding-cloud-layer,.wedding-mist-layer,.cinematic-cloud,.cinematic-cloud-layer,.wedding-fog-v9,.wedding-fog-v10').forEach(e=>e.remove());
  const fog=document.createElement('div');fog.className='wedding-fog-v10';fog.setAttribute('aria-hidden','true');
  fog.innerHTML='<div class="v10-mist v10-mist-a"></div><div class="v10-mist v10-mist-b"></div><video class="v10-fog-footage" autoplay muted loop playsinline preload="auto"><source src="valley-fog-v9.mp4" type="video/mp4"></video>';
  document.body.appendChild(fog);
  const video=fog.querySelector('video');video.addEventListener('error',()=>{video.style.display='none'});video.play().catch(()=>{video.style.display='none'});
  let holder=document.getElementById('cinematicParticles');if(!holder){holder=document.createElement('div');holder.id='cinematicParticles';document.body.appendChild(holder)}
  holder.setAttribute('aria-hidden','true');holder.replaceChildren();
  const fragment=document.createDocumentFragment();for(let i=0;i<44;i++){
   const dot=document.createElement('i');dot.className='wedding-sparkle-v10 wedding-star-v11';
   dot.style.cssText=`--sx:${((i*61.8034+11)%100).toFixed(2)}%;--sy:${((i*37.119+7)%94).toFixed(2)}%;--sd:${(-i*.43).toFixed(2)}s;--st:${(4+(i%6)*.8).toFixed(2)}s;--ss:${i%9===0?11:i%3===0?9:7}px`;
   fragment.appendChild(dot)
  }holder.appendChild(fragment);
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
