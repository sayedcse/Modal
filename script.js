'use strict';
//Variables for class selector
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
//Functions for open & close modal
const showModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', showModal);
}
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
//Key press function
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
