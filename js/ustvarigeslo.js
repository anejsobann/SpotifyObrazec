const chkOneLetter = document.querySelector(".checked.oneLetter");
        const chkSpecialChars = document.querySelector(".checked.specialChars");
        const chkTenChar = document.querySelector(".checked.tenChars");

        const chkOneLetterSpan = document.querySelector(".checked.oneLetter + span");
        const chkSpecialCharsSpan = document.querySelector(".checked.specialChars + span");
        const chkTenCharSpan = document.querySelector(".checked.tenChars + span");

        const passField = document.getElementById("password");
        const nextButton = document.getElementById("nextButton");

        const gesloForm = document.getElementById("gesloForm");

        gesloForm.onsubmit = (e) => {
            let input = passField.value;
            console.log(input);
            
            if (hasOneLetter(input) && hasSpecialChars(input) && hasTenChars(input)){
                passField.classList.remove("invalid");
            } else {
                e.preventDefault();

                passField.classList.add("invalid");
                chkOneLetterSpan.classList.add("invalid");
                chkSpecialCharsSpan.classList.add("invalid");
                chkTenCharSpan.classList.add("invalid");
            }
        }
    
        passField.addEventListener('input', (e) => {
            let input = passField.value;

            if (hasOneLetter(input)) {
                chkOneLetter.classList.remove("false"); // false is unchecked
                chkOneLetterSpan.classList.remove("invalid");
            } else {
                chkOneLetter.classList.add("false");
                chkOneLetterSpan.classList.add("invalid");
            }

            if (hasSpecialChars(input)) {
                chkSpecialChars.classList.remove("false");
                chkSpecialCharsSpan.classList.remove("invalid");
            } else {
                chkSpecialChars.classList.add("false");
                chkSpecialCharsSpan.classList.add("invalid");
            }

            if (hasTenChars(input)) {
                chkTenChar.classList.remove("false");
                chkTenCharSpan.classList.remove("invalid");
            } else {
                chkTenChar.classList.add("false");
                chkTenCharSpan.classList.add("invalid");
            }

            if (hasOneLetter(input) && hasSpecialChars(input) && hasTenChars(input)){
                passField.classList.remove("invalid");
            } else {
                passField.classList.add("invalid");
            }
        });

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

        function hasOneLetter(input) {
            const letters =
                "abcčdefghijklmnopqrsštuvwxyzž" +
                "abcčdefghijklmnopqrsštuvwxyzž".toUpperCase();

            for (let letter of input) {
                if (letters.indexOf(letter) !== -1) {
                    return true;
                }
            }
            return false;
        }

        function hasSpecialChars(input) {
            const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~1234567890";

            for (let char of input) {
                if (specialCharacters.indexOf(char) !== -1) {
                    return true;
                }
            }
            return false;
        }

        function hasTenChars(input) {
            return input.length >= 10;
        }