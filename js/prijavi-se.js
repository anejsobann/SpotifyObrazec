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