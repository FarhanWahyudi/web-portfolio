const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
if (window.scrollY > 100) {
    backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    backToTopBtn.classList.add('opacity-100');
} else {
    backToTopBtn.classList.remove('opacity-100');
    backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
}
});

backToTopBtn.addEventListener('click', () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});