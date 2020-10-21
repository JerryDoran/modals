const modalButtons = [...document.querySelectorAll('[data-modal-target]')];
const modalCloseBtns = [...document.querySelectorAll('#modalCloseBtn')];
const modals = [...document.querySelectorAll('.modal')];

modalButtons.forEach((modalButton) => {
  modalButton.addEventListener('click', (e) =>
    toggleModal(e.currentTarget.getAttribute('data-modal-target'))
  );
});

modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener('click', (e) => {
    toggleModal(e.currentTarget.closest('.modal').id);
  });
});

modals.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      toggleModal(e.currentTarget.id);
    }
  });
});

// check to see if escape key is pressed
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && document.querySelector('.modal.show')) {
    toggleModal(document.querySelector('.modal.show').id);
  }
});

toggleModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (getComputedStyle(modal).display === 'flex') {
    modal.classList.add('hide');
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('show', 'hide');
      document.body.style.overflow = 'initial';
    }, 200);
  } else {
    modal.style.display = 'flex';
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
};
