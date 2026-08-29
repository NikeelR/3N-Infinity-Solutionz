const header=document.getElementById('siteHeader');const toggle=document.querySelector('.mobile-toggle');const menu=document.querySelector('.mobile-menu');const sol=document.querySelector('.mobile-solutions');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>20));
toggle?.addEventListener('click',()=>menu.classList.toggle('open'));sol?.addEventListener('click',()=>document.querySelector('.mobile-submenu').classList.toggle('open'));
