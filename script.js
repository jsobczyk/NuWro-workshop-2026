const navLinks = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('.tab-panel');
const titleLink = document.querySelector('[data-tab-link="home"]');
const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-navigation');

function showTab(tabId, updateHash = true) {
  const target = document.getElementById(tabId) || document.getElementById('home');

  panels.forEach(panel => {
    const active = panel === target;
    panel.classList.toggle('active', active);
    panel.hidden = !active;
  });

  navLinks.forEach(link => {
    const active = link.dataset.tab === target.id;
    link.classList.toggle('active', active);
    link.setAttribute('aria-current', active ? 'page' : 'false');
  });

  if (updateHash) {
    history.replaceState(null, '', `#${target.id}`);
  }

  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => showTab(link.dataset.tab));
});

titleLink.addEventListener('click', event => {
  event.preventDefault();
  showTab('home');
});

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

window.addEventListener('hashchange', () => {
  showTab(window.location.hash.slice(1) || 'home', false);
});

showTab(window.location.hash.slice(1) || 'home', false);
