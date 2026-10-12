/* Wedding Studio V4 — illustrated cloud layers, independent of background and Supabase. */
(()=>{
  function init(){
    document.querySelectorAll('.wedding-cloud-layer').forEach(el=>el.remove());
    const svgCloud = (i)=>`<svg viewBox="0 0 620 180" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><linearGradient id="wc${i}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffffff" stop-opacity=".96"/><stop offset=".58" stop-color="#f6ffff" stop-opacity=".90"/><stop offset="1" stop-color="#d8e9e7" stop-opacity=".34"/></linearGradient></defs><path d="M15 131 Q40 112 89 116 Q111 78 157 83 Q184 38 246 48 Q289 5 350 46 Q396 31 434 74 Q482 59 511 99 Q574 88 605 132 Q574 153 519 149 L102 155 Q38 153 15 131Z" fill="url(#wc${i})" stroke="#fff" stroke-opacity=".55" stroke-width="2"/></svg>`;
    function addLayer(parent,opening){
      if(!parent)return;
      const layer=document.createElement('div'); layer.className='wedding-cloud-layer'+(opening?' wedding-cloud-opening':'');
      layer.setAttribute('aria-hidden','true');
      for(let i=0;i<4;i++){
        const cloud=document.createElement('div');cloud.className='wedding-real-cloud cloud-path-'+i;
        cloud.innerHTML=svgCloud(i);layer.appendChild(cloud);
      }
      parent.appendChild(layer);
    }
    addLayer(document.body,false);
    const opening=document.getElementById('opening');
    if(opening)addLayer(opening,true);
    // Retain floating particles if the original layer is present.
    const holder=document.getElementById('cinematicParticles');
    if(holder){holder.replaceChildren();for(let i=0;i<48;i++){const p=document.createElement('span');p.className='spark';p.style.setProperty('--x',((i*61.8)%100)+'%');p.style.setProperty('--size',(3+(i%5))+'px');p.style.setProperty('--duration',(9+(i%8)*1.6)+'s');p.style.setProperty('--delay',(-i*.73)+'s');p.style.setProperty('--drift',(((i%7)-3)*32)+'px');holder.appendChild(p)}}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
