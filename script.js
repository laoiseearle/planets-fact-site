const ham = document.getElementById('ham');
const menu = document.getElementById('menu');

const openMenu = () => {
  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
    ham.style.filter = 'opacity(1)';
  } else {
    menu.classList.add('menu-open');
    ham.style.filter = 'opacity(.25)';
  }
};
