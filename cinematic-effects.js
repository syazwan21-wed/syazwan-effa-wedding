// V3: particles are placed across the screen immediately, then float continuously.
(()=>{
 const holder=document.getElementById('cinematicParticles');
 if(!holder||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 holder.replaceChildren();
 const fragment=document.createDocumentFragment();
 for(let i=0;i<58;i++){
   const p=document.createElement('span');p.className='spark';
   p.style.setProperty('--x',((i*61.8)%100)+'%');
   p.style.setProperty('--size',(3+(i%5)*1.25)+'px');
   p.style.setProperty('--duration',(9+(i%8)*1.6)+'s');
   p.style.setProperty('--delay',(-i*0.73)+'s');
   p.style.setProperty('--drift',(((i%7)-3)*32)+'px');
   fragment.appendChild(p);
 }
 holder.appendChild(fragment);
})();
