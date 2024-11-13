const alert = document.querySelector(".alert");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validateEmail(email) {
  return emailRegex.test(email);
}

const emailField = document.getElementById("emailField");

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

/*-------------------popup div------------------------------*/
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const trigger = document.getElementById("trigger");
  const closePopup = document.getElementById("closePopup");

  // Show popup when "@" is clicked
  trigger.addEventListener("click", () => {
    popup.style.display = "block";
  });

  // Hide popup when "Close" button is clicked
  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });

  // Optional: Hide popup when clicking outside of it
  window.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
