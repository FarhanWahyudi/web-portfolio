document.querySelectorAll('.open-detail').forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-id'); // Ambil ID project dari tombol
    const modal = document.getElementById(`modal-${id}`); // Temukan modal yang sesuai
    if (modal) modal.classList.remove('hidden');
  });
});

document.querySelectorAll('.close-detail').forEach((btn) => {
  btn.addEventListener('click', () => {
    const modal = btn.closest('.modal');
    modal.classList.add('hidden');
  });
});