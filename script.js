// --- Effet machine à écrire dans le hero ---
const typedEl = document.getElementById('typed');
const phrase = "Portfolio";
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typedEl) {
  if (reduceMotion) {
    typedEl.textContent = phrase;
  } else {
    let i = 0;
    function type() {
      if (i <= phrase.length) {
        typedEl.textContent = phrase.slice(0, i);
        i++;
        setTimeout(type, 90);
      }
    }
    type();
  }
}

// --- Filtre par catégorie ---
const menuItems = document.querySelectorAll('.menu-item');
const cards = document.querySelectorAll('.card');
const currentFilterLabel = document.getElementById('current-filter');
const emptyState = document.getElementById('empty-state');

menuItems.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    menuItems.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    currentFilterLabel.textContent = filter;

    let visibleCount = 0;
    cards.forEach(card => {
      const categories = card.dataset.category.split(' ');
      const show = filter === 'tous' || categories.includes(filter);
      card.style.display = show ? '' : 'none';
      if (show) visibleCount++;
    });

    emptyState.hidden = visibleCount > 0;
  });
});
