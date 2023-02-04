// Éléments du DOM
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// Contenu de la variable modal
const modalContent = document.querySelector(".content");

// Bouton X de fermeture de la variable modal
const closeBtn = document.querySelector(".close");

// Variables pour les éléments fermeture du toast
const closeToast = document.querySelector(".close-toast");
const toastBtn = document.querySelector(".toast-btn");

// Événement de lancement du modal
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Lancement du modal
function launchModal() {
  modalbg.style.display = "block";
}

// Événement de fermeture du modal et du toast
closeBtn.addEventListener("click", closeModal);
modalbg.addEventListener("click", closeModal);
closeToast.addEventListener("click", closeModal);
toastBtn.addEventListener("click", closeModal);

// Fonction de fermeture du modal
function closeModal(e) {
  if (e.target === closeBtn || e.target === modalbg || e.target === closeToast || e.target === toastBtn) {
    modalbg.style.display = "none";
    toast.style.display = "none";
    modalContent.style.display = "block";
  }
}
