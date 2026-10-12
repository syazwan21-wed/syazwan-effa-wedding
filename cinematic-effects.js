/* Wedding Studio V5: natural mountain mist + tiny gold dust. No external dependencies. */
(()=>{
 const start=()=>{
  document.querySelectorAll('.wedding-cloud-layer,.wedding-mist-layer').forEach(el=>el.remove());
  const create=(parent,opening)=>{
   if(!parent)return;
   const wrap=document.createElement('div');wrap.className='wedding-mist-layer'+(opening?' mist-opening':'');wrap.setAttribute('aria-hidden','true');
   for(let i=0;i<3;i++){
    const layer=document.createElement('div');layer.className='wedding-mist mist-band-'+i;
    layer.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" preserveAspectRatio="none"><defs><filter id="mistnoise-${opening?'o':'p'}-${i}" x="-25%" y="-80%" width="150%" height="260%"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.045" numOctaves="3" seed="${i+4}" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="56" xChannelSelector="R" yChannelSelector="G"/></filter><linearGradient id="mistgrad-${opening?'o':'p'}-${i}" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#fff" stop-opacity="0"/><stop offset=".28" stop-color="#fff" stop-opacity=".36"/><stop offset=".52" stop-color="#fff" stop-opacity=".78"/><stop offset=".75" stop-color="#f2faf8" stop-opacity=".35"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient></defs><path d="M0 150 C120 115 180 185 300 142 S510 115 620 152 S820 108 930 148 S1090 122 1200 150 L1200 270 L0 270Z" fill="url(#mistgrad-${opening?'o':'p'}-${i})" filter="url(#mistnoise-${opening?'o':'p'}-${i})"/></svg>`;
    wrap.appendChild(layer);
   }
   parent.appendChild(wrap);
  };
  create(document.body,false);create(document.getElementById('opening'),true);
  const holder=document.getElementById('cinematicParticles');
  if(holder){holder.replaceChildren();for(let i=0;i<34;i++){
   const p=document.createElement('span');p.className='spark mist-gold-dust';
   p.style.setProperty('--x',((i*47.31+11)%100)+'%');p.style.setProperty('--size',((i%3===0)?1.5:1)+'px');
   p.style.setProperty('--duration',(13+i%9*1.7)+'s');p.style.setProperty('--delay',(-i*.93)+'s');
   p.style.setProperty('--drift',(((i%7)-3)*13)+'px');holder.appendChild(p);
  }}
 };
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
