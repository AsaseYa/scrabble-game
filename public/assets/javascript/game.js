const formSubmit = document.querySelector('.word-form');
const formSubmitInput = document.querySelector('.word-input');
const allWordContainer = document.querySelectorAll('.word-container');

let wordsByNumberLetters = wordsByLetter;

let errors = [];
console.log(wordsByNumberLetters);
formSubmit.onsubmit = function (event) {
    event.preventDefault();
    let playerInput = formSubmitInput.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z ]/g, "").toUpperCase();
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(playerInput)) {
        return console.log(errors.push("Only letters are available"));
    }

    wordsByNumberLetters.forEach((wordsToCheck) => {
        if (wordsToCheck.includes(playerInput)) {
            let index = wordsToCheck.indexOf(playerInput);
            wordsToCheck.splice(index, 1);
            allWordContainer.forEach((word) => {
                if (word.textContent === playerInput) {
                    word.childNodes.forEach((whiteSquare) => {
                        /*whiteSquare.style.fontSize = "100%"; <= autre solution*/
                        whiteSquare.classList.toggle("whiteSquareFont")
                    })
                }
            });
        }
    })


}



