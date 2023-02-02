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
const firstError = document.getElementById("first-error");
function validateFirstName() {
  let isValid = false;
  if (firstName.value.length >= 2 && firstName.value !== "") {
    firstError.innerHTML = "";
    isValid = true;
  } else {
    firstError.innerHTML = "Minimum 2 caractères requis";
  }
  return isValid;
}

// Noms
const lastError = document.getElementById("last-error");
function validateLastName() {
  let isValid = false;
  if (lastName.value.length >= 2 && lastName.value !== "") {
    lastError.innerHTML = "";
    isValid = true;
  } else {
    lastError.innerHTML = "Minimum 2 caractères requis";
  }
  return isValid;
}

// Email
const emailError = document.getElementById("email-error");
function validateEmail() {
  let isValid = false;
  const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (emailRegEx.test(email.value)) {
    emailError.innerHTML = "";
    isValid = true;
  } else {
    emailError.innerHTML = "Email non valide";
  }
  return isValid;
}

// Date de naissance
const birthdateError = document.getElementById("birthdate-error");
function validateBirthdate() {
  let isValid = false;
  const today = new Date();

  if (birthdate.value) {
    const selectedDate = new Date(birthdate.value);
    if (selectedDate <= today) {
      birthdateError.innerHTML = "";
      isValid = true;
    } else {
      birthdateError.innerHTML = "La date de naissance ne peut pas être dans le futur.";
    }
  } else {
    birthdateError.innerHTML = "La date de naissance est requise.";
  }
  return isValid;
}

// Nombre de tournois
const numberError = document.getElementById("number-error");
function validateNumber() {
  let isValid = false;
  const numberValue = number.value;
  if (numberValue.match(/^\d+$/)) {
    if (numberValue >= 0 && numberValue <= 99) {
      numberError.innerHTML = "";
      isValid = true;
    } else {
      numberError.innerHTML = "La valeur doit être entre 0 et 99 inclus.";
    }
  } else {
    numberError.innerHTML = "La valeur doit être un nombre.";
  }
  return isValid;
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
    document.getElementById("error-message").innerHTML = "Veuillez sélectionner une option";
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
    toast.innerHTML = "Merci ! Votre réservation a été reçue.";
    toast.style.display = "block";
    setTimeout(function () {
      toast.style.display = "none";
    }, 6000);
    modalbg.style.display = "none";
  }

  return isValid;
}