document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{const id=a.getAttribute('href'); if(id.length>1){e.preventDefault(); const el=document.querySelector(id); if(el){el.scrollIntoView({behavior:'smooth', block:'start'});} } });
  });
});