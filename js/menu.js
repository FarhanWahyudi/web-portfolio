const menu = document.getElementById('menu');
const navLink = document.getElementById('navLinks');
const links = document.querySelectorAll(".nav-link");
const burger = document.getElementById('burger');
const closse = document.getElementById('close');

menu.addEventListener('click', () => {
  if (navLink.classList.contains('hidden')) {
    navLink.classList.remove('hidden');
    burger.classList.add('hidden');
    closse.classList.remove('hidden');
    setTimeout(() => {
      navLink.classList.remove('-translate-y-full');
      navLink.classList.add('translate-y-0');
    }, 10);
  } else {
    navLink.classList.remove('translate-y-0');
    navLink.classList.add('-translate-y-full');
    burger.classList.remove('hidden')
    closse.classList.add('hidden');
    setTimeout(() => {
      navLink.classList.add('hidden');
    }, 300);
  }
});

links.forEach(link => {
  link.addEventListener('click', () => {
    navLink.classList.remove('translate-y-0');
    navLink.classList.add('-translate-y-full');
    burger.classList.remove('hidden');
    closse.classList.add('hidden');
    setTimeout(() => {
      navLink.classList.add('hidden');
    }, 300);
  });
});