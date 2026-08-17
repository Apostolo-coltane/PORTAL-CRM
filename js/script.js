document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (!menuToggle || !nav) return;
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.addEventListener('click', event => {
    if (event.target.closest('a') && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
