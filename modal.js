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

// variables close button
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


// close modal event
closeBtn.addEventListener("click", closeModal);
modalbg.addEventListener("click", closeModal);

// close modal function
function closeModal(e) {
  if (e.target === closeBtn || e.target === modalbg) {
    modalbg.style.display = "none";
  }
}

const form = document.querySelector("form");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");
const birthdate = document.querySelector("#birthdate");
const number = document.querySelector("#number");
const radios = document.querySelectorAll("input[type=radio]");
const checkbox = document.querySelector("#checkbox");
const submitBtn = document.querySelector("input[type=submit]");

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();
  let isValid = true;

  // validate first name
  if (firstName.value.length < 2 || firstName.value === "") {
    firstName.nextElementSibling.innerHTML = "Minimum 2 characters";
    isValid = false;
  } else {
    firstName.nextElementSibling.innerHTML = "";
  }

  // validate last name
  if (lastName.value.length < 2 || lastName.value === "") {
    lastName.nextElementSibling.innerHTML = "Minimum 2 characters";
    isValid = false;
  } else {
    lastName.nextElementSibling.innerHTML = "";
  }

// validate email
const email = document.getElementById("email");
const emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if (!emailRegEx.test(email.value)) {
    email.nextElementSibling.innerHTML = "Invalid email";
    isValid = false;
} else {
    email.nextElementSibling.innerHTML = "";
}

// validate birthdate

const birthdate = document.getElementById("birthdate");
if(!birthdate.value) {
  birthdate.nextElementSibling.innerHTML = "Vous devez entrer votre date de naissance.";
  isValid = false;
} else {
    birthdate.nextElementSibling.innerHTML = "";
}

  // validate number
  if (isNaN(number.value)) {
    numberContest.nextElementSibling.innerHTML = "Please enter a number";
    isValid = false;
  } else {
    number.nextElementSibling.innerHTML = "";
  }

  // validate radio buttons
  let radioChecked = false;
  radios.forEach((radio) => {
    if (radio.checked) {
      radioChecked = true;
    }
  });
  if (!radioChecked) {
    document.querySelector(".radio-error").innerHTML = "Please select an option";
    isValid = false;
  } else {
    document.querySelector(".radio-error").innerHTML = "";
  }


  // validate checkbox
  const termsCheckbox = document.getElementById("checkbox1");
  if (!termsCheckbox.checked) {
    termsCheckbox.nextElementSibling.innerHTML = "Vous devez accepter les conditions d'utilisation";
    isValid = false;
  } else {
    termsCheckbox.nextElementSibling.innerHTML = "";
  }
  
//
document.getElementById("checkbox1").checked = true;

  // save form data if valid
  if (isValid) {
    // save form data
    // ...
    // clear form
    form.reset();
  }
}
