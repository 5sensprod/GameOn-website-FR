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

// Ecoute l'envoi du formulaire
form.addEventListener("submit", validateForm);

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

  function validateEmail(email) {
    // Valide l'email avec regex
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const additionalRules = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+(?<!\.)$/;
    // Valide l'email
    if (!emailRegEx.test(email.value) || !additionalRules.test(email.value)) {
      email.nextElementSibling.innerHTML = "Invalid email";
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

  // sauvegarde les données du formulaire
  if (isValid) {
    // 

    // Efface les données du formulaire
    form.reset();
    alert("Formulaire soumis avec succès !");
  } else {
    alert("Veuillez corriger les erreurs avant de soumettre le formulaire.");
  }
}