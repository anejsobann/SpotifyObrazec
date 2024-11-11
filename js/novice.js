document.querySelectorAll(".checkbox-container").forEach(container => {
    container.addEventListener("click", function() {
        this.querySelector(".checkbox").classList.toggle("active");
    });
    });

    document.querySelectorAll(".checkbox-container2").forEach(container => {
    container.addEventListener("click", function() {
        this.querySelector(".checkbox2").classList.toggle("active");
    });
    });