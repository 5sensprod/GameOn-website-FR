
// Selectionne le formulaire
const form = document.querySelector("form");

// Ajout de l'écouteur d'événement 'blur' pour la validation de
// Prénom
const firstName = document.querySelector("#firstName");
firstName.addEventListener("blur", validateFirstName);

// Nom
const lastName = document.querySelector("#lastName");
lastName.addEventListener("blur", validateLastName);

// Email
const email = document.querySelector("#email");
email.addEventListener("blur", validateEmail);

// Date de naissance
const birthdate = document.querySelector("#birthdate");
birthdate.addEventListener("blur", validateBirthdate);

// Nombre de tournois
const number = document.querySelector("#number");
tournaments.addEventListener("blur", validateTournaments);

// Radios
const radios = document.querySelectorAll("input[type=radio]");
const checkbox = document.querySelector("#checkbox1");
const submitBtn = document.querySelector("input[type=submit]");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".checkbox-input");


// Fonctions de validation des champs du formulaire
function validateFirstName() {
  if (firstName.value.length < 2 || firstName.value === "") {
    firstName.nextElementSibling.innerHTML = "Minimum 2 caractères requis";
    return false;
  } else {
    firstName.nextElementSibling.innerHTML = "";
    return true;
  }
}


function validateLastName() {
  if (lastName.value.length < 2 || lastName.value === "") {
    lastName.nextElementSibling.innerHTML = "Minimum 2 caractères requis";
    return false;
  } else {
    lastName.nextElementSibling.innerHTML = "";
    return true;
  }
}

function validateEmail() {
  const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}(?:.[a-zA-Z]{2,})?$/;
  if (!emailRegEx.test(email.value)) {
    email.nextElementSibling.innerHTML = "Veuillez saisir une adresse e-mail valide";
    return false;
  } else {
    email.nextElementSibling.innerHTML = "";
    return true;
  }
}

function validateBirthdate() {
  if (!birthdate.value) {
    birthdate.nextElementSibling.innerHTML = "Vous devez entrer votre date de naissance.";
    return false;
  } else {
    birthdate.nextElementSibling.innerHTML = "";
    return true;
  }
}

// Fonction qui valide le nombre de tournois
function validateTournaments() {
  if (isNaN(number.value)) {
    number.nextElementSibling.innerHTML = "Veuillez saisir un nombre";
    return false;
  } else {
    number.nextElementSibling.innerHTML = "";
    return true;
  }
}

// Fonction qui valide les radios
function validateRadios() {
  let isValid = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      isValid = true;
    }
  });
  if (!isValid) {
    errorMessage.nextElementSibling.innerHTML = "Veuillez sélectionner une option";
  }
  return isValid;
}

function validateCheckbox() {
  const termsCheckbox = document.getElementById("checkbox1");
  if (!termsCheckbox.checked) {
    termsCheckbox.nextElementSibling.innerHTML = "Vous devez accepter les conditions d'utilisation";
    return false;
  } else {
    termsCheckbox.nextElementSibling.innerHTML = "";
    return true;
  }
}

// Ecoute l'envoi du formulaire
form.addEventListener("submit", validate);

// Fonction qui affiche le toast
function toast(message) {
  var toast = document.getElementById("toast");
  toast.innerHTML = message;
  toast.classList.add("show");
  setTimeout(function(){
    toast.classList.remove("show");
  }, 6000);
}


// Fonction qui valide le formulaire
function validate() {
  if (validateFirstName() && validateLastName() && validateEmail() && validateBirthdate() && validateTournaments() && validateRadios() && validateCheckbox()) {
    toast("Merci ! Votre réservation a été reçue.");
    return true;
  } else {
    alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
    return false;
  }
}