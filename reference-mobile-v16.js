/* Syazwan & Effa — V16 enhancements. Does not replace guest.js or touch Supabase. */
(()=>{
 'use strict';
 const $=id=>document.getElementById(id);
 function getEvent(){
   // guest.js owns the live admin settings; fallback matches the published event.
   const s=(typeof settings!=='undefined' && settings && typeof settings==='object')?settings:{};
   return {groom:s.groom||'Syazwan',bride:s.bride||'Effa',date:s.date||'2027-01-02',start:s.time||'19:30',end:s.endTime||'23:00',venue:s.venue||'Adam Hawa Event Hall',address:s.address||'Lot 16050A, Jalan Rahmat, Kampung Teras Jernang, 43000 Bandar Baru Bangi, Selangor'};
 }
 function calendar(){
   const e=getEvent();
   const esc=s=>String(s).replace(/\\/g,'\\\\').replace(/\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
   function utc(day,time){const d=new Date(`${day}T${time}:00+08:00`);return d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');}
   const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
   const ics=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Syazwan Effa Wedding//MS','CALSCALE:GREGORIAN','BEGIN:VEVENT',`UID:${e.date}-syazwan-effa@wedding.local`,`DTSTAMP:${stamp}`,`DTSTART:${utc(e.date,e.start)}`,`DTEND:${utc(e.date,e.end)}`,`SUMMARY:${esc('Walimatulurus '+e.groom+' & '+e.bride)}`,`LOCATION:${esc(e.venue+', '+e.address)}`,'DESCRIPTION:Jemputan Walimatulurus','END:VEVENT','END:VCALENDAR'].join('\r\n');
   const link=document.createElement('a');const url=URL.createObjectURL(new Blob([ics],{type:'text/calendar;charset=utf-8'}));link.href=url;link.download='Walimatulurus-Syazwan-Effa.ics';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),5000);
 }
 async function share(){
   const e=getEvent();const url=location.origin+location.pathname;
   const dateLabel=new Intl.DateTimeFormat('ms-MY',{day:'numeric',month:'long',year:'numeric',timeZone:'Asia/Kuala_Lumpur'}).format(new Date(e.date+'T12:00:00+08:00'));
   const txt=`💌 Jemputan Walimatulurus ${e.groom} & ${e.bride}\n📅 ${dateLabel}\n📍 ${e.venue}\n\nBuka jemputan: ${url}`;
   // WhatsApp-specific sharing (opens the installed WhatsApp app when available).
   const target='https://api.whatsapp.com/send?text='+encodeURIComponent(txt);
   const link=document.createElement('a');link.href=target;link.target='_blank';link.rel='noopener noreferrer';document.body.append(link);link.click();link.remove();
 }
 function nav(){
   const root=document.querySelector('.v16-nav');if(!root)return;
   const links=[...root.querySelectorAll('a[href^="#"]')];
   links.forEach(a=>a.addEventListener('click',()=>{
     links.forEach(l=>l.classList.toggle('active',l===a));
   }));
   if(!('IntersectionObserver'in window))return;
   const io=new IntersectionObserver(entries=>{
     for(const ent of entries){if(ent.isIntersecting){const id=ent.target.id;links.forEach(a=>a.classList.toggle('active',a.hash==='#'+id));}}
   },{rootMargin:'-20% 0px -65% 0px'});
   for(const a of links){const node=$(a.hash.slice(1));if(node)io.observe(node)}
 }
 function init(){
   $('saveDateBtn')?.addEventListener('click',calendar);
   $('shareInvite')?.addEventListener('click',share);
   nav();
   // Prevent the opening from revealing a restored scroll position on smartphones.
   if($('opening')&&!$('opening').classList.contains('hidden')){history.scrollRestoration='manual';scrollTo({top:0,behavior:'instant'});}
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
