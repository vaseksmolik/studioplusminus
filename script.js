// Galerie: šipky, klávesy, swipe a automatické přepínání (vypne se po první interakci).
(() => {
  const gallery = document.querySelector('.gallery');
  if (!gallery) return;

  const slides = [...gallery.querySelectorAll('.slides img')];
  const current = gallery.querySelector('.current');
  gallery.querySelector('.total').textContent = slides.length;

  let index = 0;
  let timer = null;

  const show = (i) => {
    slides[index].classList.remove('active');
    index = (i + slides.length) % slides.length;
    slides[index].classList.add('active');
    current.textContent = index + 1;
  };

  const stopAuto = () => { clearInterval(timer); timer = null; };

  gallery.querySelector('.prev').addEventListener('click', () => { stopAuto(); show(index - 1); });
  gallery.querySelector('.next').addEventListener('click', () => { stopAuto(); show(index + 1); });

  gallery.tabIndex = 0;
  gallery.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { stopAuto(); show(index - 1); }
    if (e.key === 'ArrowRight') { stopAuto(); show(index + 1); }
  });

  let startX = null;
  gallery.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  gallery.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) { stopAuto(); show(index + (dx < 0 ? 1 : -1)); }
    startX = null;
  });

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    timer = setInterval(() => show(index + 1), 5000);
  }
})();
