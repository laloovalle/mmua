// Carga header y footer
async function loadPartials() {
  const [hdr, ftr] = await Promise.all([
    fetch('components/header.html').then(r => r.text()),
    fetch('components/footer.html').then(r => r.text())
  ]);
  document.getElementById('site-header').innerHTML = hdr;
  document.getElementById('site-footer').innerHTML = ftr;
  initMenuToggle();
}
function initMenuToggle() {
  const btn = document.getElementById('menu-btn'),
        menu = document.getElementById('menu'),
        openIc = document.getElementById('icon-open'),
        closeIc = document.getElementById('icon-close');
  if (btn) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
      openIc.classList.toggle('hidden');
      closeIc.classList.toggle('hidden');
    });
  }
}
loadPartials();