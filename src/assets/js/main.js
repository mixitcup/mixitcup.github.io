// Mix it Cup 2026 – Main JS

// ---- Mobile Navigation ----
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  });

  // Close on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ---- Countdown ----
function updateCountdown() {
  const target = new Date('2026-11-20T18:00:00');
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    const el = document.getElementById('countdown');
    if (el) el.innerHTML = '<p class="countdown-live">🎉 Der Mix it Cup findet gerade statt!</p>';
    return;
  }

  const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const pad = n => String(n).padStart(2, '0');

  const set = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = pad(val);
  };

  set('cd-days', days);
  set('cd-hours', hours);
  set('cd-minutes', minutes);
  set('cd-seconds', seconds);
}

if (document.getElementById('countdown')) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}
