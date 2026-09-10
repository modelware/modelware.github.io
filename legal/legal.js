/* Legal document scrollspy: highlights the table-of-contents entry for the
   section currently in view. Observes h3[id] as well as section[id] so docs
   with sub-topic TOC entries (e.g. the Refund Policy) highlight them too. */
(function(){
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if(!links.length || !('IntersectionObserver' in window)) return;
  var map = {};
  links.forEach(function(a){ map[a.getAttribute('href').slice(1)] = a; });
  var seen = new Set();
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) seen.add(e.target.id); else seen.delete(e.target.id);
    });
    var order = Object.keys(map);
    var current = order.find(function(id){ return seen.has(id); });
    links.forEach(function(a){ a.classList.remove('active'); });
    if(current && map[current]) map[current].classList.add('active');
  }, { rootMargin: '-80px 0px -70% 0px', threshold: 0 });
  document.querySelectorAll('.doc section[id], .doc h3[id]').forEach(function(s){ io.observe(s); });
})();
