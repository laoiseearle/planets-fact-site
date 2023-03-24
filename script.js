const ham = document.getElementById('ham');
const menu = document.getElementById('menu');

window.addEventListener('resize', e => {
  if (e.target.innerWidth >= 768) {
    menu.classList.add('menu-open');
    ham.style.filter = 'opacity(.25)';
  }
});

const openMenu = () => {
  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
    ham.style.filter = 'opacity(1)';
  } else {
    menu.classList.add('menu-open');
    ham.style.filter = 'opacity(.25)';
  }
};
