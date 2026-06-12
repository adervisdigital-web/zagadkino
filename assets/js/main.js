/* ===== ЗАГАДКИНО — Main JS ===== */

// ===== SOLUTIONS MODAL =====
(function () {
  const puzzles = [
    { id: 1,  name: "Головоломка №1",  videoId: "" },
    { id: 2,  name: "Головоломка №2",  videoId: "" },
    { id: 3,  name: "Головоломка №3",  videoId: "" },
    { id: 4,  name: "Головоломка №4",  videoId: "" },
    { id: 5,  name: "Головоломка №5",  videoId: "" },
    { id: 6,  name: "Головоломка №6",  videoId: "" },
    { id: 7,  name: "Головоломка №7",  videoId: "" },
    { id: 8,  name: "Головоломка №8",  videoId: "" },
    { id: 9,  name: "Головоломка №9",  videoId: "" },
    { id: 10, name: "Головоломка №10", videoId: "" },
    { id: 11, name: "Головоломка №11", videoId: "" },
    { id: 12, name: "Головоломка №12", videoId: "" },
    { id: 13, name: "Головоломка №13", videoId: "" },
    { id: 14, name: "Головоломка №14", videoId: "" },
    { id: 15, name: "Головоломка №15", videoId: "" },
    { id: 16, name: "Головоломка №16", videoId: "" },
    { id: 17, name: "Головоломка №17", videoId: "" },
    { id: 18, name: "Головоломка №18", videoId: "" },
    { id: 19, name: "Головоломка №19", videoId: "" },
    { id: 20, name: "Головоломка №20", videoId: "" },
    { id: 21, name: "Головоломка №21", videoId: "" },
    { id: 22, name: "Головоломка №22", videoId: "" },
    { id: 23, name: "Головоломка №23", videoId: "" },
    { id: 24, name: "Головоломка №24", videoId: "" },
    { id: 25, name: "Головоломка №25", videoId: "" },
    { id: 26, name: "Головоломка №26", videoId: "" },
    { id: 27, name: "Головоломка №27", videoId: "" },
    { id: 28, name: "Головоломка №28", videoId: "" },
    { id: 29, name: "Головоломка №29", videoId: "" },
    { id: 30, name: "Головоломка №30", videoId: "" },
    { id: 31, name: "Головоломка №31", videoId: "" },
    { id: 32, name: "Головоломка №32", videoId: "" },
    { id: 33, name: "Головоломка №33", videoId: "" },
    { id: 34, name: "Головоломка №34", videoId: "" },
    { id: 35, name: "Головоломка №35", videoId: "" },
    { id: 36, name: "Головоломка №36", videoId: "" },
    { id: 37, name: "Головоломка №37", videoId: "" },
    { id: 38, name: "Головоломка №38", videoId: "" },
    { id: 39, name: "Головоломка №39", videoId: "" },
    { id: 40, name: "Головоломка №40", videoId: "" },
    { id: 41, name: "Головоломка №41", videoId: "" },
    { id: 42, name: "Головоломка №42", videoId: "" },
    { id: 43, name: "Головоломка №43", videoId: "" },
    { id: 44, name: "Головоломка №44", videoId: "" },
    { id: 45, name: "Головоломка №45", videoId: "" },
    { id: 46, name: "Головоломка №46", videoId: "" },
    { id: 47, name: "Головоломка №47", videoId: "" },
    { id: 48, name: "Головоломка №48", videoId: "" },
    { id: 49, name: "Головоломка №49", videoId: "" },
    { id: 50, name: "Головоломка №50", videoId: "" },
    { id: 51, name: "Головоломка №51", videoId: "" },
    { id: 52, name: "Головоломка №52", videoId: "" },
    { id: 53, name: "Головоломка №53", videoId: "" },
    { id: 54, name: "Головоломка №54", videoId: "" },
    { id: 55, name: "Головоломка №55", videoId: "" },
    { id: 56, name: "Головоломка №56", videoId: "" },
    { id: 57, name: "Головоломка №57", videoId: "" },
    { id: 58, name: "Головоломка №58", videoId: "" },
    { id: 59, name: "Головоломка №59", videoId: "" },
  ];

  const modal       = document.getElementById('solutions-modal');
  if (!modal) return;

  const overlay     = document.getElementById('solutions-overlay');
  const closeBtn    = document.getElementById('solutions-close');
  const gridView    = document.getElementById('solutions-grid-view');
  const videoView   = document.getElementById('solutions-video-view');
  const backBtn     = document.getElementById('solutions-back');
  const gridEl      = document.getElementById('solutions-grid');
  const playerEl    = document.getElementById('solutions-video-player');
  const titleEl     = document.getElementById('solutions-video-title');

  // Build grid
  puzzles.forEach(p => {
    const card = document.createElement('button');
    card.className = 'solution-card';
    card.setAttribute('aria-label', 'Решение: ' + p.name);
    card.innerHTML = `
      <span class="solution-num">#${String(p.id).padStart(2,'0')}</span>
      <span class="solution-play">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-brown" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z"/>
        </svg>
      </span>
      <span class="solution-name">${p.name}</span>
    `;
    card.addEventListener('click', () => openVideo(p));
    gridEl.appendChild(card);
  });

  function openModal() {
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    showGrid();
  }

  function closeModal() {
    stopVideo();
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  function showGrid() {
    stopVideo();
    gridView.hidden = false;
    videoView.hidden = true;
  }

  function openVideo(puzzle) {
    gridView.hidden = true;
    videoView.hidden = false;
    titleEl.textContent = puzzle.name;

    if (puzzle.videoId) {
      playerEl.innerHTML = `<iframe src="https://www.youtube.com/embed/${puzzle.videoId}?autoplay=1&rel=0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    } else {
      playerEl.innerHTML = `
        <div class="solutions-video-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
          <span>Видео скоро появится</span>
        </div>`;
    }
  }

  function stopVideo() {
    if (playerEl) playerEl.innerHTML = '';
  }

  // Open triggers
  ['solutions-nav-btn','solutions-mobile-btn','solutions-hero-btn','uzlik-btn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', openModal);
  });
  // Enter key on uzlik figure
  const uzlikBtn = document.getElementById('uzlik-btn');
  if (uzlikBtn) uzlikBtn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModal(); });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  backBtn.addEventListener('click', showGrid);
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !modal.hidden) closeModal(); });
})();

// Mobile menu toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  // Close on nav link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
  });
}

// Sticky header style
const header = document.querySelector('header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('header-scrolled', window.scrollY > 20);
  });
}

// Stagger fade-in delay for grid items — runs BEFORE observer so elements are registered
document.querySelectorAll('.stagger-children > *').forEach((el, i) => {
  el.style.animationDelay = `${i * 0.1}s`;
  el.classList.add('fade-in');
});

// Fade-in on scroll (IntersectionObserver)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// B2B Form submission
const b2bForm = document.getElementById('b2b-form');
if (b2bForm) {
  b2bForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = b2bForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    // Basic validation
    const required = b2bForm.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('border-red-400');
        valid = false;
      } else {
        field.classList.remove('border-red-400');
      }
    });

    if (!valid) {
      showToast('Пожалуйста, заполните все обязательные поля', 'error');
      return;
    }

    // Simulate send
    btn.disabled = true;
    btn.textContent = 'Отправляем...';

    setTimeout(() => {
      btn.textContent = '✓ Заявка отправлена!';
      btn.classList.remove('bg-honey', 'hover:bg-honey-dark');
      btn.classList.add('bg-green-600');
      b2bForm.reset();
      showToast('Заявка принята! Свяжемся с вами в течение 24 часов.', 'success');

      setTimeout(() => {
        btn.disabled = false;
        btn.textContent = originalText;
        btn.classList.add('bg-honey', 'hover:bg-honey-dark');
        btn.classList.remove('bg-green-600');
      }, 4000);
    }, 1200);
  });
}

function showToast(msg, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full font-nunito font-semibold text-sm shadow-xl transition-all duration-300 ${
    type === 'success' ? 'bg-green-600 text-white' : 'bg-red-500 text-white'
  }`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 3500);
}

