const toggle = document.getElementById('dark-mode-toggle');
const html = document.getElementById('htmlRoot')

toggle.addEventListener('click', () => {
    html.classList.toggle('dark');
});