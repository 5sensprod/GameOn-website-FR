// Selectionne le formulaire
const form = document.querySelector("form");

// Selectionne les champs du formulaire
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const number = document.querySelector("#number");
const submitBtn = document.querySelector("input[type=submit]");

// Fonctions de validation et d'affichage des messages d'erreur pour chaque champ

//fonction générique de validation nom, prénom
function validateFieldName(field, error, minLength) {
  let isValid = false;
  const onlyLetters = /^[a-zA-Z]+$/;
  if (field.value.length >= minLength && field.value !== "" && onlyLetters.test(field.value)) {
    error.innerHTML = "";
    field.classList.remove("error");
    isValid = true;
  } else {
    error.innerHTML = `Veuillez saisir au moins ${minLength} lettres.`;
    field.classList.add("error");
  }
  return isValid;
}

// Prénoms
firstName.addEventListener("input", function () {
  validateFieldName(firstName, firstError, 2);
});
const firstError = document.getElementById("first-error");

// Noms
lastName.addEventListener("input", function () {
  validateFieldName(lastName, lastError, 2);
});
const lastError = document.getElementById("last-error");

// Email
email.addEventListener("input", function () {
  validateEmail();
});

const emailError = document.getElementById("email-error");
function validateEmail() {
  let isValid = false;
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value === "") {
    emailError.innerHTML = "L'adresse email est obligatoire.";
    email.classList.add("error");
  } else if (emailRegEx.test(email.value)) {
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
  const minimumDate = new Date('1900-01-01');
  const minimumAge = 12 * 365.25 * 24 * 60 * 60 * 1000; // 12 ans en millisecondes

  if (birthdate.value) {
    const selectedDate = new Date(birthdate.value);
    if (selectedDate <= today && selectedDate >= minimumDate && today - selectedDate >= minimumAge) {
      birthdateError.innerHTML = "";
      birthdate.classList.remove("error");
      isValid = true;
    } else if (selectedDate > today) {
      birthdateError.innerHTML = "Votre date de naissance ne peut pas être dans le futur.";
      birthdate.classList.add("error");
    } else if (selectedDate < minimumDate) {
      birthdateError.innerHTML = "La date de naissance ne peut pas être antérieure à 1900.";
      birthdate.classList.add("error");
    } else if (today - selectedDate < minimumAge) {
      birthdateError.innerHTML = "Vous devez avoir au moins 12 ans.";
      birthdate.classList.add("error");
    }
  } else {
    birthdateError.innerHTML = "La date de naissance est obligatoire.";
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
  if (numberValue) {
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
      numberError.innerHTML = "Veuillez saisir uniquement un nombre.";
      number.classList.add("error");
    }
  } else {
    numberError.innerHTML = "Le champ est obligatoire.";
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


// Fonction Validation du formulaire qui permet de vérifier tous les champs en même temps	
function validateForm() {
  let isValid = true;
  
  // Valider firstName
  if (!validateFieldName(firstName, firstError, 2)) {
    isValid = false;
  }
  
  // Valider lastName
  if (!validateFieldName(lastName, lastError, 2)) {
    isValid = false;
  }
  
  // Valider email
  if (!validateEmail()) {
    isValid = false;
  }
  
  // Valider birthdate
  if (!validateBirthdate()) {
    isValid = false;
  }
  
  // Valider number
  if (!validateNumber()) {
    isValid = false;
  }
  
  // Valider radios
  if (!validateRadios()) {
    isValid = false;
  }
  
  // Valider terms
  if (!validateTerms()) {
    isValid = false;
  }
  
  if (isValid) {
    const toast = document.getElementById("toast");
    toast.style.display = "block";
    modalContent.style.display = "none";
  }
  
  return isValid;
}
// Ecoute l'envoi du formulaire
form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (validateForm()) {
    form.reset();
  }
});