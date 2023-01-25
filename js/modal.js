// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// variables close button
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal event
closeBtn.addEventListener("click", closeModal);
modalbg.addEventListener("click", closeModal);

// close modal function
function closeModal(e) {
  if (e.target === closeBtn || e.target === modalbg) {
    modalbg.style.display = "none";
  }
}

