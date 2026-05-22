// ── Mobile Nav Toggle ──
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamburger.classList.toggle('active');
  });
}

// ── Active Nav Link ──
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav ul li a').forEach(link => {
  if (link.getAttribute('href') === currentPage) link.classList.add('active');
});

// ── FAQ Accordion ──
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// ── Scroll Reveal ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.style.opacity = '1'; e.target.style.transform = 'translateY(0)'; }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .why-item, .testi-card, .team-card, .step').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ── Contact Form ──
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending...';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#2ecc71';
      form.reset();
      setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false; btn.style.background = ''; }, 3000);
    }, 1200);
  });
}
