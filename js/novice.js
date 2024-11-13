document.querySelectorAll(".checkbox-container").forEach((container) => {
  container.addEventListener("click", function () {
    this.querySelector(".checkbox").classList.toggle("active");
  });
});

document.querySelectorAll(".checkbox-container2").forEach((container) => {
  container.addEventListener("click", function () {
    this.querySelector(".checkbox2").classList.toggle("active");
  });
});

const form = document.getElementById("noviceForm");
document.querySelector(".gumb").addEventListener("click", () => {
  Swal.fire({
    title: "Registrian si.",
    text: "Uspešno registriran račun.",
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
      popup.style.border = "1px solid #1ed760";
      popup.style.borderRadius = "6px";
      popup.style.color = "white";
    },
    preConfirm: () => {
      form.submit();
    },
  });
});

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
