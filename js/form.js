// Selectionne le formulaire
const form = document.querySelector("form");

// Selectionne les champs du formulaire
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const number = document.querySelector("#number");
const submitBtn = document.querySelector("input[type=submit]");

// Fonctions de validation et d'affichage des messages d'erreur

// Prénoms
firstName.addEventListener("input", function () {
  validateFirstName();
});

const firstError = document.getElementById("first-error");
function validateFirstName() {
  let isValid = false;
  if (firstName.value.length >= 2 && firstName.value !== "") {
    firstError.innerHTML = "";
    firstName.classList.remove("error");
    isValid = true;
  } else {
    firstError.innerHTML = "Veuillez saisir au moins deux caractères";
    firstName.classList.add("error");
  }
  return isValid;
}

// Noms
lastName.addEventListener("input", function () {
  validateLastName();
});

const lastError = document.getElementById("last-error");
function validateLastName() {
  let isValid = false;
  if (lastName.value.length >= 2 && lastName.value !== "") {
    lastError.innerHTML = "";
    lastName.classList.remove("error");
    isValid = true;
  } else {
    lastError.innerHTML = "Veuillez saisir au moins deux caractères";
    lastName.classList.add("error");
  }
  return isValid;
}

// Email
email.addEventListener("input", function () {
  validateEmail();
});

const emailError = document.getElementById("email-error");
function validateEmail() {
  let isValid = false;
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegEx.test(email.value)) {
    emailError.innerHTML = "";
    email.classList.remove("error");
    isValid = true;
  } else {
    emailError.innerHTML = "Veuillez saisir une adresse email valide.";
    email.classList.add("error");
  }
  return isValid;
}

// Date de naissance

birthdate.addEventListener("input", function () {
  validateBirthdate();
});

const birthdateError = document.getElementById("birthdate-error");
function validateBirthdate() {
  let isValid = false;
  const today = new Date();

  if (birthdate.value) {
    const selectedDate = new Date(birthdate.value);
    if (selectedDate <= today) {
      birthdateError.innerHTML = "";
      birthdate.classList.remove("error");
      isValid = true;
    } else {
      birthdateError.innerHTML = "Votre date de naissance ne peut pas être dans le futur.";
      birthdate.classList.add("error");
    }
  } else {
    birthdateError.innerHTML = "Votre date de naissance est requise.";
    birthdate.classList.add("error");
  }
  return isValid;
}

// Nombre de tournois
number.addEventListener("input", function () {
  validateNumber();
});

const numberError = document.getElementById("number-error");
function validateNumber() {
  let isValid = false;
  const numberValue = number.value;
  if (numberValue.match(/^\d+$/)) {
    if (numberValue >= 0 && numberValue <= 99) {
      numberError.innerHTML = "";
      number.classList.remove("error");
      isValid = true;
    } else {
      numberError.innerHTML = "Le nombre doit être compris entre 0 et 99.";
      number.classList.add("error");
    }
  } else {
    numberError.innerHTML = "La valeur doit être un nombre.";
    number.classList.add("error");
  }
  return isValid;
}

//  Ville radios
const locationError = document.getElementById("location-error");
const radioButtons = document.querySelectorAll('input[name="location"]');

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    validateRadios();
  });
});

function validateRadios() {
  const radios = document.querySelectorAll('input[name="location"]:checked');
  if (radios.length === 0) {
    locationError.innerHTML = "Veuillez sélectionner une ville.";
    locationError.style.display = "block";
    return false;
  } else {
    locationError.innerHTML = "";
    locationError.style.display = "none";
    return true;
  }
}

// Conditions d'utilisation
const termsCheckbox = document.querySelector("#checkbox1");
const termsError = document.getElementById("terms-error");

termsCheckbox.addEventListener("change", function () {
  validateTerms();
});

function validateTerms() {
  if (!termsCheckbox.checked) {
    termsError.innerHTML = "Vous devez accepter les conditions d'utilisation.";
    termsError.style.display = "block";
    return false;

  } else {
    termsError.innerHTML = "";
    termsError.style.display = "none";
    return true;
  }
}

// Ecoute l'envoi du formulaire
form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validate()) {
    form.reset();
  }
});

// Fonction qui valide le formulaire
function validate() {
  let isValid = true;

  // Valider les entrées du formulaire
  if (!validateFirstName() || !validateLastName() || !validateEmail() || !validateBirthdate() || !validateNumber() || !validateRadios() || !validateTerms()) {
    isValid = false;
  }
  if (isValid) {
    const toast = document.getElementById("toast");
    toast.style.display = "block";
    modalContent.style.display = "none";
  }
  return isValid;
}