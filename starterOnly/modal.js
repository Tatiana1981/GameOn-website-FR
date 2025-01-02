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
  const f = e.target;
  console.log('target', f);
  const formData = new FormData(f);
  let isError = false;
  console.log('submit form reserve', formData);
  if (formData.get('first').length < 3) {
    const first = document.getElementById('first');
    first.closest('.formData').dataset.errorVisible = true;
    isError = true;
  }
  if (formData.get('last').length < 3) {
    const last = document.getElementById('last');
    last.closest('.formData').dataset.errorVisible = true;
    isError = true;
  }

  if (isError) {
    return;
  }
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


