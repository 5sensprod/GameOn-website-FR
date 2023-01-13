
//fonction pour afficher le menu responsive
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// Initialisation du bouton 'close' 
const close = document.querySelector(".close");

// jaout un event listener sur le bouton 'close'
close.addEventListener("click", closeModal);

// Fonction pour fermer la modal
function closeModal() {
  modalbg.style.display = "none";
}

// Fermeture de la modal en cliquant sur le background
modalbg.addEventListener("click", closeModal);

