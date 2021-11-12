const formSubmit = document.querySelector('.word-form');
const formSubmitInput = document.querySelector('.word-input');
const allWordContainer = document.querySelectorAll('.word-container');

let whiteSquareTotalFirst = document.querySelectorAll('.white-square-total-first');

let wordsByNumberLetters = wordsByLetter;

let errors = [];
formSubmit.onsubmit = function (event) {
    event.preventDefault();
    let playerInput = formSubmitInput.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z ]/g, "").toUpperCase();
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(playerInput)) {
        return console.log(errors.push("Only letters are available"));
    }
    let counterWhiteSquareTotalFirst = -1;
    wordsByNumberLetters.forEach((wordsToCheck) => {
        counterWhiteSquareTotalFirst++;
        if (wordsToCheck.includes(playerInput)) {
            let index = wordsToCheck.indexOf(playerInput);
            whiteSquareTotalFirst[counterWhiteSquareTotalFirst].textContent++;
            wordsToCheck.splice(index, 1);
            allWordContainer.forEach((word) => {
                if (word.textContent === playerInput) {
                    word.childNodes.forEach((whiteSquare) => {
                        /*whiteSquare.style.fontSize = "100%"; <= autre solution*/
                        whiteSquare.classList.toggle("white-square-font")
                    })
                }
            });
        }
    })

    formSubmitInput.value = '';
}



