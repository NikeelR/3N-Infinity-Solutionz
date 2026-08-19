(() => {
  const header=document.querySelector('[data-header]');
  const drawer=document.querySelector('[data-drawer]');
  const burger=document.querySelector('[data-burger]');
  const close=document.querySelector('[data-drawer-close]');
  const lock=(v)=>document.body.classList.toggle('lock',v);

  burger?.addEventListener('click',()=>{drawer.classList.add('open');lock(true)});
  close?.addEventListener('click',()=>{drawer.classList.remove('open');lock(false)});
  drawer?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{drawer.classList.remove('open');lock(false)}));

  const scrollHeader=()=>header?.classList.toggle('scrolled',window.scrollY>25);
  window.addEventListener('scroll',scrollHeader,{passive:true});scrollHeader();

  // Hero uses four visual panels. It slowly shifts the image emphasis without changing the single corporate message.
  const hero=document.querySelector('.hero');
  let heroState=0;
  const rotateHero=()=>{
    heroState=(heroState+1)%4;
    hero?.setAttribute('data-panel',heroState);
  };
  hero?.classList.add('is-animated');
  document.querySelector('[data-hero-next]')?.addEventListener('click',rotateHero);
  setInterval(rotateHero,6500);

  // Small reveal motion for business cards and sections.
  const items=document.querySelectorAll('.sector-card,.cap-grid article,.process-grid>div,.story-image,.story-copy');
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if(e.isIntersecting){e.target.classList.add('in-view');observer.unobserve(e.target)}
      })
    },{threshold:.12});
    items.forEach(el=>observer.observe(el));
  }else{items.forEach(el=>el.classList.add('in-view'))}

  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();