// function markInvalid(field) {
//     field.classList.add("error");
//     field.setAttribute("data-error", "Pas cool");
// }

// function markValid(field) {
//     field.classList.remove("error");
//     field.removeAttribute("data-error");
// }

// Validation du prénom
function validateFirstName() {
    const firstName = document.getElementById("first");
    if (firstName.value.length < 2) {
        firstName.setAttribute("data-error", "Pas cool");
        return false;
    } else {
        firstName.removeAttribute("data-error");
        return true;
    }
}


// Fonction de validation de formulaire
const form = document.querySelector("form");
form.addEventListener("submit", validateForm);

function validateForm(e) {
    e.preventDefault();
    let isValid = true;
  
    // validate first name
    if (!validateFirstName()) {
      isValid = false;
    }
  
    // validate other fields
    // ...
  
    // submit form if valid
    if (isValid) {
      form.submit();
    }
  }