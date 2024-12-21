function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function validate() {
  console.log('validate!')
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const form = document.querySelector('form[name="reserve"]');
const burger = document.querySelector('#burger');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('submit form reserve');
  validate();
});

burger.addEventListener('click', function(e) {
  e.preventDefault();
  console.log('click burger');
  editNav();
})

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


