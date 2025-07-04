const toggle = document.getElementById('dark-mode-toggle');
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  html.classList.add('dark');
}

toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    localStorage.setItem('theme', html.classList.contains('dark') ? 'dark' : 'light');
});