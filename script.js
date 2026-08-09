const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.sample-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const category = filter.dataset.filter;
    filters.forEach((item) => {
      item.classList.remove('active');
      item.setAttribute('aria-pressed', 'false');
    });
    filter.classList.add('active');
    filter.setAttribute('aria-pressed', 'true');
    cards.forEach((card) => {
      const visible = category === 'all' || card.dataset.category === category;
      card.hidden = !visible;
    });
  });
});
