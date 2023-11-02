'use strict';
// click the button to open a popup
// close the popup in 3 ways: click the cross button, click the overlay, press 'ESC'
// select the element we need and store them into variables
const btnsOpenModal = document.querySelectorAll(`.show-modal`);
const modal = document.querySelector(`.modal`);
const btnCloseModal = document.querySelector(`.close-modal`);
const overlay = document.querySelector(`.overlay`);

console.log(btnsOpenModal);
const openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
}

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
}

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);
overlay.addEventListener(`click`, closeModal);

// manipulate classes with JavaScript:
// react to click on each of the buttons

// respond to keyboard event: any key pressed
document.addEventListener(`keydown`, function (e) {
  console.log(e.key);
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
      closeModal();
  }
});

