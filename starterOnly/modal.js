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
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector('form[name="reserve"]');
const burger = document.querySelector('#burger');
const closeBtn = document.querySelector(".close-btn");
const email = document.querySelectorAll(".email");
const birthdate = document.querySelector(".birthdate");

// Close Btn
closeBtn.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('click close');
  modalbg.style.display = "none";
});

// Form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const f = e.target;
  console.log("target", f);
  const formData = new FormData(f);
  let isError = false;
  console.log("submit form reserve", formData);
  if (formData.get("first").length < 3) {
    const first = document.getElementById("first");
    first.closest(".formData").dataset.errorVisible = true;
    isError = true;
  }
  if (formData.get("last").length < 3) {
    const last = document.getElementById("last");
    last.closest(".formData").dataset.errorVisible = true;
    isError = true;
  }

  if (isError) {
    return;
  }
  validate();
});

// email validation
email.forEach((e) => {
  e.addEventListener("change", function (e) {
    console.log("change email", e.target.value);
    if (!e.target.checkValidity()) {
      e.target.closest(".formData").dataset.errorVisible = true;
    } else {
      e.target.closest(".formData").dataset.errorVisible = false;
    }
  });
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
