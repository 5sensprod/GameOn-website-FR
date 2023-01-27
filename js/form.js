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

const errorMessage = document.querySelector(".checkbox-input");

// Ecoute l'envoi du formulaire
form.addEventListener("submit", function (event) {
  validateForm(event);
  validateRadios(event);
});


// valide si au moins un bouton radio coché
function validateRadios(radios) {
  let radioChecked = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      radioChecked = true;
    }
  });
  return radioChecked;
}

function validateForm(e) {
  e.preventDefault();
  let isValid = true;

  // Valide le prénom
  if (firstName.value.length < 2 || firstName.value === "") {
    firstName.nextElementSibling.innerHTML = "Minimum 2 characters";
    isValid = false;
  } else {
    firstName.nextElementSibling.innerHTML = "";
  }

  // Valide le nom
  if (lastName.value.length < 2 || lastName.value === "") {
    lastName.nextElementSibling.innerHTML = "Minimum 2 characters";
    isValid = false;
  } else {
    lastName.nextElementSibling.innerHTML = "";
  }

  // fonction de validation de l'email
  function validateEmail(email) {
    // Définit les règles de validation pour l'email via une expression régulière.
    const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;

    // Vérifie la validité de l'adresse e-mail saisie
    if (!emailRegEx.test(email.value)) {
      email.nextElementSibling.innerHTML = "Veuillez saisir une adresse e-mail valide";
      return false;
    } else {
      email.nextElementSibling.innerHTML = "";
      return true;
    }
  }

  // Valide l'email
  if (!validateEmail(email)) {
    isValid = false;
  }

  // Valide la date de naissance

  if (!birthdate.value) {
    birthdate.nextElementSibling.innerHTML = "Vous devez entrer votre date de naissance.";
    isValid = false;
  } else {
    birthdate.nextElementSibling.innerHTML = "";
  }

  // Valide le nombre de tournois
  if (isNaN(number.value)) {
    number.nextElementSibling.innerHTML = "Veuillez saisir un nombre";
    isValid = false;
  } else {
    number.nextElementSibling.innerHTML = "";
  }

  // Valide les boutons radios
  let radioChecked = validateRadios(radios);
  if (!radioChecked) {
    document.querySelector(".checkbox-input").innerHTML = "Veillez choisir une option";
    isValid = false;
  } else {
    document.querySelector(".checkbox-input").innerHTML = "";
  }
  // valide la case à cocher
  const termsCheckbox = document.getElementById("checkbox1");
  if (!termsCheckbox.checked) {
    termsCheckbox.nextElementSibling.innerHTML = "Vous devez accepter les conditions d'utilisation";
    isValid = false;
  } else {
    termsCheckbox.nextElementSibling.innerHTML = "";
  }

  // sauvegarde les données du formulaire
  if (isValid) {

    // Efface les données du formulaire
    form.reset();
    alert("Formulaire soumis avec succès !");
  } else {
    alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
  }
}