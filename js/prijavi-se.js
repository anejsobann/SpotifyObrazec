const passField = document.getElementById("password");

function toggle() {
  const show = document.querySelector(".showIcon");
  const hide = document.querySelector(".hideIcon");

  if (passField.type == "password") {
    show.classList.add("off");
    hide.classList.remove("off");

    passField.type = "text";
  } else {
    show.classList.remove("off");
    hide.classList.add("off");

    passField.type = "password";
  }
}

/*-----------------EMAIL & GESLO------------------------ */

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

const form = document.getElementById("gumb-naprej");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(emailField.value)) {
    emailField.style.border = "1px solid red";
  } else {
    Swal.fire({
      title: "Uspešna prijava.",
      text: "Prijavil si se uspešno.",
      confirmButtonText: "Nadaljuj",
      didOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        confirmButton.style.backgroundColor = "#1ed760";
        confirmButton.style.color = "black";
        confirmButton.style.fontFamily = "mixUIRegular";
        confirmButton.style.borderRadius = "100px";
        confirmButton.style.width = "14rem";
        confirmButton.style.fontWeight = "bold";

        const popup = Swal.getPopup();
        popup.style.backgroundColor = "#121212";
        popup.style.fontFamily = "mixUIRegular";
        popup.style.border = "2px solid #1ed760";
        popup.style.borderRadius = "6px";
        popup.style.color = "white";
      },
      preConfirm: () => {
        form.submit();
      },
    });
  }
});
