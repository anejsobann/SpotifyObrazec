const alert = document.querySelector(".alert");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

const emailField = document.getElementById("textF");

emailField.addEventListener("input", (e) => {
  if (!validateEmail(emailField.value)) {
    emailField.classList.add("invalid");
  } else {
    emailField.classList.remove("invalid");
  }
});

const form = document.getElementById("emailForm");
form.addEventListener("submit", (e) => {
  if (!validateEmail(emailField.value)) {
    e.preventDefault();
    emailField.style.border = "1px solid red";
    alert.classList.add("displayBlock");
  }
});
