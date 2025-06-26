document.querySelectorAll('.open-detail').forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.project').querySelector('.modal');
    modal.classList.remove('hidden');
  });
});

document.querySelectorAll('.close-detail').forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.add('hidden');
  });
});