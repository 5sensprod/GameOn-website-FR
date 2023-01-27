
// Selectionne le formulaire
const form = document.querySelector("form");

// Selectionne les champs du formulaire
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const number = document.querySelector("#number");
const radios = document.querySelectorAll("input[type=radio]");
const checkbox = document.querySelector("#checkbox1");
const submitBtn = document.querySelector("input[type=submit]");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".checkbox-input");

// Ecoute l'envoi du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateName() && validateEmail() && validateBirthdate() && validateTournaments() && validateRadios() && validateCheckbox()) {
    hideModal();
    successMessage.innerHTML = "Formulaire soumis avec succès !";
  } else {
    alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
  }
});


function validateName() {
  if (firstName.value.length < 2 || firstName.value === "") {
    firstName.nextElementSibling.innerHTML = "Minimum 2 characters";
    return false;
  } else {
    firstName.nextElementSibling.innerHTML = "";
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

function validateTournaments() {
  if (isNaN(number.value)) {
    number.nextElementSibling.innerHTML = "Veuillez saisir un nombre";
    return false;
  } else {
    number.nextElementSibling.innerHTML = "";
    return true;
  }
}

function validateRadios() {
  let isValid = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      isValid = true;
    }
  });
  if (!isValid) {
    errorMessage.innerHTML = "Veuillez sélectionner une option";
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

function hideModal() {
  setTimeout(function () {
    modalbg.style.display = "none";
  }, 2000);
}