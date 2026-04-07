// ─── HAMBURGER MENU ───────────────────────────────
const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobile-menu');

ham.addEventListener('click', () => mob.classList.toggle('open'));
mob.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mob.classList.remove('open')));

// ─── STICKY NAVBAR ────────────────────────────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ─── FAQ ACCORDION ────────────────────────────────
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ─── SCROLL REVEAL ────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.feature-card, .product-card, .step, .test-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(26px)';
  el.style.transition = 'opacity .6s ease, transform .6s ease';
  observer.observe(el);
});