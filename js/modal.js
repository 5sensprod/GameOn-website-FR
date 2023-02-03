// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// variable modal content
const modalContent = document.querySelector(".content");

// variable modal close button
const closeBtn = document.querySelector(".close");

// variable toast close 
const closeToast = document.querySelector(".close-toast");
const toastBtn = document.querySelector(".toast-btn");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal event
closeBtn.addEventListener("click", closeModal);
modalbg.addEventListener("click", closeModal);
closeToast.addEventListener("click", closeModal);
toastBtn.addEventListener("click", closeModal);

// close modal function
function closeModal(e) {
  if (e.target === closeBtn || e.target === modalbg || e.target === closeToast || e.target === toastBtn) {
    modalbg.style.display = "none";
    toast.style.display = "none";
    modalContent.style.display = "block";
  }
}
