function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validate() {
  console.log("validate!");
  const modalForm = document.getElementById('modal-form');
  const modalConfirmation = document.getElementById('modal-confirmation');
  modalForm.classList.add('hide');
  modalConfirmation.classList.remove('hide');
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector('form[name="reserve"]');
const burger = document.querySelector("#burger");
const closeBtn = document.querySelector(".close-btn");
const email = document.querySelector('input[name="email"]');
const birthdate = document.querySelector('input[name="birthdate"]');
const quantity = document.querySelector('input[name="quantity"]');

// Close Btn
closeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click close");
  modalbg.style.display = "none";
});

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const f = e.target;
  console.log("target", f);
  const formData = new FormData(f);
  console.log(formData.get("location"));
  let isError = false;
  // first
  if (formData.get("first").length < 2) {
    const first = document.getElementById("first");
    first.closest(".formData").dataset.errorVisible = true;
    isError = true;
  } else {
    const first = document.getElementById("first");
    first.closest(".formData").dataset.errorVisible = false;
  }
  // last
  if (formData.get("last").length < 2) {
    const last = document.getElementById("last");
    last.closest(".formData").dataset.errorVisible = true;
    isError = true;
  } else {
    const last = document.getElementById("last");
    last.closest(".formData").dataset.errorVisible = false;
  }
  //email
  const email = document.getElementById("email");
  console.log("email.checkValidity()", email.checkValidity());
  if (!email.checkValidity() || email.value === "") {
    email.closest(".formData").dataset.errorVisible = true;
    isError = true;
  } else {
    email.closest(".formData").dataset.errorVisible = false;
  }

  // birthdate
  const birthDateDom = document.getElementById("birthdate");
  console.log("birthDateDom", birthDateDom.value);
  const birthdate = new Date(birthDateDom.value);
  const now = new Date();
  const age = now.getFullYear() - birthdate.getFullYear();
  console.log("age", age);
  if (birthDateDom.value === "") {
    birthDateDom.closest(".formData").dataset.error =
      "Ce champs est obligatoire";
    birthDateDom.closest(".formData").dataset.errorVisible = true;
    isError = true;
  } else if (age < 18) {
    birthDateDom.closest(".formData").dataset.error =
      "Vous devez avoir plus de 18ans pour participer.";
    birthDateDom.closest(".formData").dataset.errorVisible = true;
    isError = true;
  } else {
    birthDateDom.closest(".formData").dataset.errorVisible = false;
  }

  const quantityDom = document.getElementById("quantity");
  console.log('quantityDomValue', quantityDom.value)
 
// nbr de concours
if (quantityDom.value === "") {
  quantityDom.closest(".formData").dataset.errorVisible = true;
  quantityDom.closest(".formData").dataset.error =
    "Ce champs est obligatoire";
  isError = true;
} else if (quantityDom.value < 0 || quantityDom.value > 99) {
  quantityDom.closest(".formData").dataset.errorVisible = true;
  quantityDom.closest(".formData").dataset.error =
    "Vous devez entrer un nombre compris entre 0 et 99";
  isError = true;
} else {
  quantityDom.closest(".formData").dataset.errorVisible = false;
}
  //location
  if (formData.get("location") === null) {
    const location = document.getElementById("location1");
    location.closest(".formData").dataset.errorVisible = true;
    isError = true;
  } else {
    const location = document.getElementById("location1");
    location.closest(".formData").dataset.errorVisible = false;
  }

  console.log("submit form reserve", formData);

  const checkbox = document.getElementById("checkbox1");
  if (formData.get("cgv") === null) {
    checkbox.closest(".formData").dataset.errorVisible = true;
    isError = true;
  } else {
    checkbox.closest(".formData").dataset.errorVisible = false;
  }
  if (isError) {
    return;
  }
  validate();
});

// email validation
email.addEventListener("change", function (e) {
  console.log("change email", e.target.value);
  const email = document.getElementById("email");
  if (!e.target.checkValidity()) {
    const email = document.getElementById("email");
    e.target.closest(".formData").dataset.errorVisible = true;
  } else {
    const email = document.getElementById("email");
    e.target.closest(".formData").dataset.errorVisible = false;
  }
});

//date of birth validation
birthdate.addEventListener("change", function (e) {
  console.log("change birthdate", e.target.value);
  const birthdate = new Date(e.target.value);
  const now = new Date();
  const age = now.getFullYear() - birthdate.getFullYear();
  console.log("age", age);
  if (age < 18) {
    e.target.closest(".formData").dataset.errorVisible = true;
  } else {
    e.target.closest(".formData").dataset.errorVisible = false;
  }
});

//nombre de concours
quantity.addEventListener("change", function (e) {
  console.log("change quantity", e.target.value);
  if (e.target.value < 0 || e.target.value > 99) {
    e.target.closest(".formData").dataset.errorVisible = true;
  } else {
    e.target.closest(".formData").dataset.errorVisible = false;
  }
});

// Burger event
burger.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("click burger");
  editNav();
});

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  console.log("launch Modal");
}
